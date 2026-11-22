"""GospelOS hackathon demo. No private CRM data or code."""
import os,json,urllib.request,urllib.error,urllib.parse,re,subprocess,time,threading
from collections import deque
from http.server import BaseHTTPRequestHandler,ThreadingHTTPServer
from pathlib import Path
ROOT=Path(__file__).resolve().parent
TYPES={'Bookings':'church gospel festival worship artist performance booking official','Media':'gospel radio podcast Christian artist music submission','Sponsors':'gospel Christian music artist sponsorship community business partnership','Collaborations':'gospel choir worship musician collaboration','Community service':'church nonprofit community outreach benefit concert volunteer musician','Funding':'independent gospel musician arts grant artist funding application'}
LOCK=threading.Lock()
CALLS=deque()
GATE=threading.BoundedSemaphore(3)
def rank(data,genre,city,category):
    out=[];seen=set();tokens=set(re.findall(r'\w+',genre.lower()+' '+city.lower()))-{'the','and','in','of','nj','ny'}
    for row in data.get('results',{}).get('web',[]):
        url=row.get('url','');p=urllib.parse.urlsplit(url)
        if p.scheme not in ('http','https') or not p.netloc or p.username or p.password:continue
        canonical=urllib.parse.urlunsplit((p.scheme,p.netloc.lower(),p.path.rstrip('/') or '/',urllib.parse.urlencode([(k,v) for k,v in urllib.parse.parse_qsl(p.query) if not k.lower().startswith('utm_')]),''))
        if canonical in seen:continue
        seen.add(canonical);title=str(row.get('title','Untitled'));highlights=(row.get('contents') or {}).get('highlights') or [];snippet=' '.join(highlights or row.get('snippets') or [])[:1000] or str(row.get('description',''))[:1000];body=(title+' '+snippet).lower()
        relevance=min(24,sum(6 for t in tokens if re.search(r'\b'+re.escape(t)+r'\b',body)));action=sum(7 for t in ('submit','booking','contact','application') if t in body);signals=[]
        if relevance:signals.append('Artist/region keyword match')
        if action:signals.append('Contact or submission language')
        old=bool(re.search(r'\b202[0-5]\b',title))
        if old:signals.append('Older year in title — check current status')
        score=max(0,min(95,35+relevance+action-(20 if old else 0)))
        out.append(dict(title=title,category=category,description=snippet,url=canonical,score=score,kind='live search lead',note='Check availability, requirements and compensation at source.',signals=signals or ['General relevance only'],payment='Unknown — ask organizer',page_age=row.get('page_age'),evidence='Search excerpt, not independently verified',track='Service inquiry' if category=='Community service' else 'Income / partnership inquiry'))
    return sorted(out,key=lambda r:-r['score'])
def search(genre,city,category,api_key=None):
    if category not in TYPES:raise ValueError('Invalid opportunity category.')
    q=' '.join((genre if 'gospel' in genre.lower() else 'gospel '+genre,city,TYPES[category],'2026 2027 official contact'))
    if not api_key:
        payload={'jsonrpc':'2.0','id':1,'method':'tools/call','params':{'name':'you-search','arguments':{'query':q[:390]}}}
        raw=subprocess.run(['curl','--silent','--show-error','--fail','--max-time','20','https://api.you.com/mcp/free','-H','Content-Type: application/json','-H','Accept: application/json, text/event-stream','--data',json.dumps(payload)],capture_output=True,text=True,check=True,timeout=24).stdout
        messages=[json.loads(line[6:]) for line in raw.splitlines() if line.startswith('data: ')]
        answer=next((m['result'] for m in messages if 'result' in m),None)
        if answer is None or answer.get('isError'):raise RuntimeError('You.com free search unavailable')
        structured=answer.get('structuredContent') or json.loads(answer['content'][0]['text'])
        return rank(structured,genre,city,category)
    req=urllib.request.Request('https://ydc-index.io/v1/search',data=json.dumps({'query':q,'count':15,'extraction':{'extraction_mode':'highlights'}}).encode(),headers={'X-API-Key':api_key,'Content-Type':'application/json'},method='POST')
    with urllib.request.urlopen(req,timeout=18) as r:return rank(json.load(r),genre,city,category)
def key():return os.getenv('YOU_API_KEY') or os.getenv('YDC_API_KEY')
class Handler(BaseHTTPRequestHandler):
    def log_message(self,*args):pass
    def send(self,status,data,typ='application/json'):
        self.send_response(status);self.send_header('Content-Type',typ);self.send_header('Cache-Control','no-store');self.send_header('X-Content-Type-Options','nosniff');self.send_header('Referrer-Policy','no-referrer');self.send_header('X-Frame-Options','DENY');self.send_header('X-Robots-Tag','noindex');self.end_headers();self.wfile.write(data if isinstance(data,bytes) else json.dumps(data).encode())
    def do_GET(self):
        if self.path=='/':return self.send(200,(ROOT/'index.html').read_bytes(),'text/html; charset=utf-8')
        if self.path=='/api/seed':return self.send(200,json.loads((ROOT/'seed.json').read_text()))
        if self.path=='/api/health':return self.send(200,{'ok':True,'search_mode':'keyed API' if key() else 'free You.com MCP'})
        self.send(404,{'error':'not found'})
    def do_POST(self):
        if self.path!='/api/search':return self.send(404,{'error':'not found'})
        try:
            if self.headers.get('Content-Type','').split(';')[0]!='application/json':return self.send(415,{'error':'JSON required'})
            n=int(self.headers.get('Content-Length',0))
            if not 0<n<=4096:raise ValueError('Invalid request size.')
            body=json.loads(self.rfile.read(n))
            if not isinstance(body,dict):raise ValueError('Expected a JSON object.')
            genre=str(body.get('genre','Gospel'))[:100];city=str(body.get('city','Newark NJ'))[:100];cat=str(body.get('category','Bookings'))
            if cat not in TYPES:raise ValueError('Invalid opportunity category.')
            if not GATE.acquire(blocking=False):return self.send(429,{'error':'Demo is busy; retry shortly.'})
            try:
                with LOCK:
                    now=time.monotonic()
                    while CALLS and now-CALLS[0]>60:CALLS.popleft()
                    if len(CALLS)>=8:return self.send(429,{'error':'Demo search limit reached; retry shortly.'})
                    CALLS.append(now)
                self.send(200,{'results':search(genre,city,cat,key()),'provider':'You.com Web Search API' if key() else 'You.com free MCP search','mode':'live'})
            finally:GATE.release()
        except ValueError as e:self.send(400,{'error':str(e)})
        except urllib.error.HTTPError as e:self.send(502,{'error':f'You.com request failed ({e.code}); check key scope or credits.'})
        except Exception:self.send(502,{'error':'Search unavailable; use researched leads or retry.'})
if __name__=='__main__':ThreadingHTTPServer(('127.0.0.1',int(os.getenv('PORT','8080'))),Handler).serve_forever()
