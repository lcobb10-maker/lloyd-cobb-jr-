"""OutcomeOS local reference MVP: stdlib-only, persistent, org-scoped action/proof tracking.
NOT a hardened public SaaS server; see README security/deployment requirements.
"""
import base64
from datetime import datetime, timedelta, timezone
import hashlib
import hmac
from http import cookies
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
import os
from pathlib import Path
import re
import secrets
import sqlite3
import threading
from urllib.parse import urlparse
from uuid import uuid4

ROOT = Path(__file__).parent
DB_PATH = Path(os.getenv('OUTCOMEOS_DB', str(ROOT / 'outcomeos.sqlite3')))
APP_HOST = os.getenv('OUTCOMEOS_HOST', '127.0.0.1')
APP_PORT = int(os.getenv('OUTCOMEOS_PORT', '8778'))
DB_LOCK = threading.RLock()
PASSWORD_ITERATIONS = 350_000
SESSION_DAYS = 7
VALID_STATUSES = {'idea', 'in_progress', 'blocked', 'completed'}
FIELDS = {'industry', 'title', 'problem', 'audience', 'pilot', 'owner', 'due_date', 'metric_name', 'target_value', 'actual_value', 'partners', 'funding', 'status'}
INDUSTRIES = ['Sports', 'HR & Onboarding', 'Real Estate', 'Technology', 'Events', 'Education', 'Healthcare Operations', 'Retail', 'Nonprofit', 'Other']
TEMPLATES = {
    'Sports': ('Athlete career access', 'Athletes need meaningful career connections outside competition', 'Graduating student-athletes', '90-minute career introductions with local professionals', 'Confirmed introductions'),
    'HR & Onboarding': ('First 30 days', 'New hires need a clear, supported path to their first measurable contribution', 'New hires and hiring managers', 'Role-specific 30-day success assignment', 'Completed first projects'),
    'Real Estate': ('Tenant issue resolution', 'Resident issues often remain unresolved after planning meetings', 'Residents and property teams', 'One-building 30-day repair-response pilot', 'Issues closed within target time'),
    'Technology': ('Prototype to customer pilot', 'Promising prototypes often do not reach real users', 'Startup founders and early adopters', '5-customer prototype feedback sprint', 'Documented user sessions'),
    'Events': ('Sponsor follow-through', 'Event sponsorships are rarely measured beyond impressions', 'Sponsors and event attendees', 'Consent-based post-event sponsor interest campaign', 'Qualified follow-up requests'),
    'Education': ('Skills to practice', 'Learners attend workshops without demonstrating practical skills', 'Adult learners and educators', 'Hands-on practice cohort with project showcase', 'Completed projects'),
    'Healthcare Operations': ('Scheduling improvements', 'Clinic handoffs can create avoidable administrative delays', 'Operations teams (no patient identifiers)', 'Scheduling process review with simulated data', 'Resolved scheduling exceptions'),
    'Retail': ('Returns process', 'Teams need visibility into common return friction', 'Store managers and buyers', '30-day returns process improvement test', 'Process exceptions resolved'),
    'Nonprofit': ('Sustainable volunteer follow-up', 'Volunteer interest drops after one-off events', 'Nonprofit staff and volunteer leads', '30-day volunteer follow-up and onboarding pilot', 'Active volunteers at day 30'),
}


def utcnow():
    return datetime.now(timezone.utc).isoformat(timespec='seconds')


def connect(db_path=None):
    conn = sqlite3.connect(str(db_path or DB_PATH), timeout=15, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute('PRAGMA foreign_keys=ON')
    conn.execute('PRAGMA busy_timeout=10000')
    return conn


def init_db(db_path=None):
    with connect(db_path) as c:
        c.executescript('''
        PRAGMA journal_mode=WAL;
        CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, email TEXT UNIQUE NOT NULL, salt TEXT NOT NULL, password_hash TEXT NOT NULL, created_at TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS organizations (id TEXT PRIMARY KEY, owner_id TEXT NOT NULL REFERENCES users(id), name TEXT NOT NULL, brand TEXT NOT NULL, plan TEXT NOT NULL DEFAULT 'pilot', created_at TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS sessions (token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), expires_at TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS plays (
          id TEXT PRIMARY KEY, org_id TEXT NOT NULL REFERENCES organizations(id), industry TEXT NOT NULL,
          title TEXT NOT NULL, problem TEXT NOT NULL, audience TEXT NOT NULL, pilot TEXT NOT NULL,
          owner TEXT NOT NULL, due_date TEXT NOT NULL DEFAULT '', metric_name TEXT NOT NULL,
          target_value REAL NOT NULL DEFAULT 0, actual_value REAL NOT NULL DEFAULT 0,
          partners TEXT NOT NULL DEFAULT '', funding TEXT NOT NULL DEFAULT '', status TEXT NOT NULL DEFAULT 'idea',
          created_at TEXT NOT NULL, updated_at TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS actions (id TEXT PRIMARY KEY, org_id TEXT NOT NULL REFERENCES organizations(id), play_id TEXT NOT NULL REFERENCES plays(id), title TEXT NOT NULL, owner TEXT NOT NULL, due_date TEXT NOT NULL DEFAULT '', done INTEGER NOT NULL DEFAULT 0);
        CREATE TABLE IF NOT EXISTS evidence (id TEXT PRIMARY KEY, org_id TEXT NOT NULL REFERENCES organizations(id), play_id TEXT NOT NULL REFERENCES plays(id), note TEXT NOT NULL, url TEXT NOT NULL DEFAULT '', created_at TEXT NOT NULL);
        CREATE INDEX IF NOT EXISTS plays_org ON plays(org_id);
        CREATE INDEX IF NOT EXISTS actions_play_org ON actions(play_id, org_id);
        CREATE INDEX IF NOT EXISTS evidence_play_org ON evidence(play_id, org_id);
        ''')


def derive(password, salt):
    return hashlib.pbkdf2_hmac('sha256', password.encode(), bytes.fromhex(salt), PASSWORD_ITERATIONS).hex()


def safe_string(v, name, limit=1000, required=False):
    if not isinstance(v, str):
        raise ValueError(f'{name} must be text')
    v = v.strip()
    if required and not v:
        raise ValueError(f'{name} is required')
    if len(v) > limit:
        raise ValueError(f'{name} is too long')
    return v


def number(v, name):
    if isinstance(v, bool):
        raise ValueError(f'{name} must be a number')
    try:
        n = float(v)
        if not (0 <= n <= 10**12) or n != n:
            raise ValueError()
        return n
    except (TypeError, ValueError):
        raise ValueError(f'{name} must be a nonnegative finite number')


def validate_date(v):
    v = safe_string(v, 'due_date', 10)
    if v:
        try:
            datetime.strptime(v, '%Y-%m-%d')
        except ValueError:
            raise ValueError('due_date must be YYYY-MM-DD')
    return v


def validate_play(source, partial=False):
    if not isinstance(source, dict):
        raise ValueError('Expected an object')
    if set(source) - FIELDS:
        raise ValueError('Unknown play field')
    if not partial and any(x not in source for x in ['title', 'problem', 'audience', 'pilot', 'owner', 'metric_name']):
        raise ValueError('Fill in title, problem, audience, pilot, owner and metric')
    out = {}
    for name, v in source.items():
        if name in ('target_value', 'actual_value'):
            out[name] = number(v, name)
        elif name == 'due_date':
            out[name] = validate_date(v)
        elif name == 'status':
            if v not in VALID_STATUSES:
                raise ValueError('Invalid status')
            out[name] = v
        else:
            out[name] = safe_string(v, name, 140 if name in ('title','owner','metric_name','industry') else 2500, required=name in ('title','problem','audience','pilot','owner','metric_name'))
    return out


class Handler(BaseHTTPRequestHandler):
    db_path = None
    server_version = 'OutcomeOS/0.1'

    def db(self):
        return connect(self.db_path)

    def log_message(self, format, *args):
        # No cookies, credentials or request bodies in logs.
        return

    def respond(self, status, payload, extra_headers=None):
        encoded = json.dumps(payload, separators=(',', ':'), ensure_ascii=False).encode()
        self.send_response(status)
        self.send_header('Content-Type','application/json; charset=utf-8')
        self.send_header('Cache-Control', 'no-store')
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'DENY')
        self.send_header('Referrer-Policy','no-referrer')
        for k,v in (extra_headers or []):self.send_header(k,v)
        self.send_header('Content-Length',str(len(encoded)))
        self.end_headers()
        self.wfile.write(encoded)

    def fail(self, status, message):
        self.respond(status, {'error':message})

    def body(self):
        size = int(self.headers.get('Content-Length','0'))
        if size <= 0 or size > 20000:
            raise ValueError('Request size must be between 1 and 20,000 bytes')
        if 'application/json' not in self.headers.get('Content-Type',''):
            raise ValueError('JSON content type required')
        data = json.loads(self.rfile.read(size))
        if not isinstance(data,dict):
            raise ValueError('JSON object required')
        return data

    def identity(self, c):
        cookie = cookies.SimpleCookie()
        try:cookie.load(self.headers.get('Cookie',''))
        except cookies.CookieError:return None
        morsel = cookie.get('outcomeos_session')
        if not morsel:return None
        digest = hashlib.sha256(morsel.value.encode()).hexdigest()
        row=c.execute('''SELECT u.id as user_id,u.email,o.id as org_id,o.name as org_name,o.brand,o.plan
                FROM sessions s JOIN users u ON u.id=s.user_id JOIN organizations o ON o.owner_id=u.id
                WHERE s.token_hash=? AND s.expires_at>?''',(digest,utcnow())).fetchone()
        return dict(row) if row else None

    def issue_session(self, c, uid):
        token=secrets.token_urlsafe(36)
        digest=hashlib.sha256(token.encode()).hexdigest()
        c.execute('INSERT INTO sessions VALUES(?,?,?)',(digest,uid,(datetime.now(timezone.utc)+timedelta(days=SESSION_DAYS)).isoformat()))
        secure = '; Secure' if os.getenv('OUTCOMEOS_HTTPS') == '1' else ''
        return ('Set-Cookie',f'outcomeos_session={token}; HttpOnly; SameSite=Lax; Path=/; Max-Age={SESSION_DAYS*86400}{secure}')

    def require_origin(self):
        if self.headers.get('X-OutcomeOS-Request')!='1':
            self.fail(403,'Request confirmation header required')
            return False
        # Reject cross-origin mutation requests. Same-origin fetch often omits Origin.
        origin=self.headers.get('Origin')
        if origin and origin != f'http://{self.headers.get("Host")}' and origin != f'https://{self.headers.get("Host")}':
            self.fail(403,'Cross-origin request refused')
            return False
        return True

    def do_GET(self):
        path=self.path.split('?',1)[0]
        if path in ('/','/index.html','/app.js','/style.css'):
            name = {'/':'index.html','/index.html':'index.html','/app.js':'app.js','/style.css':'style.css'}[path]
            body=(ROOT/'static'/name).read_bytes()
            self.send_response(200)
            self.send_header('Content-Type',{'index.html':'text/html; charset=utf-8','app.js':'text/javascript; charset=utf-8','style.css':'text/css; charset=utf-8'}[name])
            self.send_header('Cache-Control','no-store')
            self.send_header('X-Content-Type-Options','nosniff')
            self.send_header('X-Frame-Options','DENY')
            self.send_header('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'")
            self.send_header('Content-Length',str(len(body)))
            self.end_headers();self.wfile.write(body);return
        if path=='/api/health':return self.respond(200,{'ok':True,'service':'outcomeos-reference'})
        with self.db() as c:
            user=self.identity(c)
            if not user:return self.fail(401,'Sign in first')
            org=user['org_id']
            if path=='/api/me':return self.respond(200,{'user':user,'industries':INDUSTRIES,'templates':TEMPLATES})
            if path=='/api/plays':
                rows=c.execute('SELECT * FROM plays WHERE org_id=? ORDER BY updated_at DESC',(org,)).fetchall()
                return self.respond(200,{'plays':[dict(x) for x in rows]})
            if path.startswith('/api/plays/'):
                parts=path.strip('/').split('/')
                if len(parts)==3:
                    row=c.execute('SELECT * FROM plays WHERE id=? AND org_id=?',(parts[2],org)).fetchone()
                    if not row:return self.fail(404,'Play not found')
                    acts=c.execute('SELECT * FROM actions WHERE play_id=? AND org_id=? ORDER BY rowid',(parts[2],org)).fetchall()
                    evs=c.execute('SELECT * FROM evidence WHERE play_id=? AND org_id=? ORDER BY created_at DESC',(parts[2],org)).fetchall()
                    return self.respond(200,{'play':dict(row),'actions':[dict(a) for a in acts],'evidence':[dict(e) for e in evs]})
            if path=='/api/export':
                plays=[dict(x) for x in c.execute('SELECT * FROM plays WHERE org_id=?',(org,))]
                actions=[dict(x) for x in c.execute('SELECT * FROM actions WHERE org_id=?',(org,))]
                evidence=[dict(x) for x in c.execute('SELECT * FROM evidence WHERE org_id=?',(org,))]
                return self.respond(200,{'schema':'outcomeos-export-v1','organization':user['org_name'],'exported_at':utcnow(),'plays':plays,'actions':actions,'evidence':evidence},[('Content-Disposition','attachment; filename="outcomeos-export.json"')])
        self.fail(404,'Not found')

    def do_POST(self):return self.mutate('POST')
    def do_PATCH(self):return self.mutate('PATCH')

    def mutate(self, method):
        if not self.require_origin():return
        path=self.path.split('?',1)[0]
        try:data=self.body()
        except (ValueError, json.JSONDecodeError) as e:return self.fail(400,str(e))
        try:
            with DB_LOCK, self.db() as c:
                if method=='POST' and path=='/api/register':
                    email=safe_string(data.get('email'),'email',240,True).lower()
                    if not re.fullmatch(r'[^\s@]+@[^\s@]+\.[^\s@]+',email):raise ValueError('Valid email required')
                    password=data.get('password','')
                    if not isinstance(password,str) or len(password)<12 or len(password)>128:raise ValueError('Use a password from 12 to 128 characters')
                    name=safe_string(data.get('org_name',''),'organization',120,True)
                    uid=str(uuid4());oid=str(uuid4());salt=secrets.token_hex(16)
                    try:
                        c.execute('INSERT INTO users VALUES(?,?,?,?,?)',(uid,email,salt,derive(password,salt),utcnow()))
                    except sqlite3.IntegrityError: return self.fail(409,'Account already exists')
                    c.execute('INSERT INTO organizations VALUES(?,?,?,?,?,?)',(oid,uid,name,name,'pilot',utcnow()))
                    header=self.issue_session(c,uid)
                    c.commit(); return self.respond(201,{'registered':True},[header])
                if method=='POST' and path=='/api/login':
                    email=safe_string(data.get('email',''),'email',240,True).lower()
                    pw=data.get('password','')
                    row=c.execute('SELECT * FROM users WHERE email=?',(email,)).fetchone()
                    if not isinstance(pw,str) or not row or not hmac.compare_digest(row['password_hash'],derive(pw,row['salt'])):return self.fail(401,'Invalid credentials')
                    header=self.issue_session(c,row['id'])
                    c.commit(); return self.respond(200,{'authenticated':True},[header])
                user=self.identity(c)
                if not user:return self.fail(401,'Sign in first')
                org=user['org_id']
                if path=='/api/logout' and method=='POST':
                    cook=cookies.SimpleCookie();cook.load(self.headers.get('Cookie',''))
                    if cook.get('outcomeos_session'):
                        c.execute('DELETE FROM sessions WHERE token_hash=?',(hashlib.sha256(cook['outcomeos_session'].value.encode()).hexdigest(),))
                    c.commit(); return self.respond(200,{'logged_out':True},[('Set-Cookie','outcomeos_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0')])
                if path=='/api/org' and method=='PATCH':
                    brand=safe_string(data.get('brand',''),'brand',120,True)
                    c.execute('UPDATE organizations SET brand=? WHERE id=? AND owner_id=?',(brand,org,user['user_id']))
                    c.commit(); return self.respond(200,{'brand':brand})
                if path=='/api/plays' and method=='POST':
                    clean=validate_play(data)
                    clean.setdefault('industry','Other');clean.setdefault('target_value',0);clean.setdefault('actual_value',0)
                    clean.setdefault('partners','');clean.setdefault('funding','');clean.setdefault('due_date','');clean.setdefault('status','idea')
                    pid=str(uuid4());now=utcnow();cols=list(clean)
                    c.execute('INSERT INTO plays (id,org_id,'+','.join(cols)+',created_at,updated_at) VALUES ('+','.join(['?']*(len(cols)+4))+')',[pid,org]+list(clean.values())+[now,now])
                    c.commit(); return self.respond(201,{'id':pid})
                if path.startswith('/api/plays/'):
                    parts=path.strip('/').split('/')
                    if len(parts)<3:return self.fail(404,'Not found')
                    pid=parts[2]
                    exists=c.execute('SELECT id FROM plays WHERE id=? AND org_id=?',(pid,org)).fetchone()
                    if not exists:return self.fail(404,'Play not found')
                    if len(parts)==3 and method=='PATCH':
                        clean=validate_play(data,True)
                        if not clean:raise ValueError('Nothing to update')
                        c.execute('UPDATE plays SET '+','.join(k+'=?' for k in clean)+',updated_at=? WHERE id=? AND org_id=?',[*clean.values(),utcnow(),pid,org])
                        c.commit(); return self.respond(200,{'updated':True})
                    if len(parts)==4 and parts[3]=='actions' and method=='POST':
                        title=safe_string(data.get('title',''),'action title',250,True)
                        owner=safe_string(data.get('owner',''),'action owner',140,True)
                        due_date=validate_date(data.get('due_date',''))
                        aid=str(uuid4())
                        c.execute('INSERT INTO actions VALUES(?,?,?,?,?,?,?)',(aid,org,pid,title,owner,due_date,0))
                        c.commit(); return self.respond(201,{'id':aid})
                    if len(parts)==4 and parts[3]=='evidence' and method=='POST':
                        note=safe_string(data.get('note',''),'evidence note',2500,True)
                        url=safe_string(data.get('url',''),'url',1000)
                        if url:
                            parsed=urlparse(url)
                            if parsed.scheme!='https' or not parsed.hostname or parsed.username or parsed.password:raise ValueError('Evidence link must be an HTTPS URL')
                        eid=str(uuid4())
                        c.execute('INSERT INTO evidence VALUES(?,?,?,?,?,?)',(eid,org,pid,note,url,utcnow()))
                        c.commit(); return self.respond(201,{'id':eid})
                if method=='PATCH' and path.startswith('/api/actions/'):
                    aid=path.split('/')[-1]
                    if set(data)!={'done'} or not isinstance(data['done'],bool):raise ValueError('Expected boolean done')
                    cur=c.execute('UPDATE actions SET done=? WHERE id=? AND org_id=?',(int(data['done']),aid,org))
                    if not cur.rowcount:return self.fail(404,'Action not found')
                    c.commit(); return self.respond(200,{'updated':True})
            return self.fail(404,'Not found')
        except ValueError as e:return self.fail(400,str(e))
        except sqlite3.Error:return self.fail(500,'Database operation failed')


def serve(host=APP_HOST,port=APP_PORT,db_path=None):
    if db_path is not None:Handler.db_path=db_path
    init_db(db_path)
    server=ThreadingHTTPServer((host,port),Handler)
    print(f'OutcomeOS reference MVP at http://{host}:{server.server_address[1]}')
    server.serve_forever()

if __name__=='__main__':serve()
