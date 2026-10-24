import http.client
import json
from http.server import ThreadingHTTPServer
from pathlib import Path
import sys
import tempfile
import threading
import unittest
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import server
from economics import model


class LiveReferenceTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.tmp = tempfile.TemporaryDirectory()
        cls.db_path = Path(cls.tmp.name) / 'test.sqlite3'
        server.init_db(cls.db_path)
        class LocalHandler(server.Handler):
            db_path = cls.db_path
        cls.srv = ThreadingHTTPServer(('127.0.0.1', 0), LocalHandler)
        cls.port=cls.srv.server_address[1]
        cls.thread=threading.Thread(target=cls.srv.serve_forever,daemon=True)
        cls.thread.start()

    @classmethod
    def tearDownClass(cls):
        cls.srv.shutdown()
        cls.srv.server_close()
        cls.thread.join(5)
        cls.tmp.cleanup()

    def call(self,method,path,data=None,cookie=None,confirm=True,origin=None):
        headers={}
        if data is not None:
            headers['Content-Type']='application/json'
        if cookie:headers['Cookie']=cookie
        if method!='GET' and confirm: headers['X-OutcomeOS-Request']='1'
        if origin:headers['Origin']=origin
        conn=http.client.HTTPConnection('127.0.0.1',self.port,timeout=5)
        conn.request(method,path,json.dumps(data).encode() if data is not None else None,headers)
        response=conn.getresponse()
        raw=response.read()
        content=json.loads(raw) if response.getheader('Content-Type','').startswith('application/json') else raw
        cookie_header=response.getheader('Set-Cookie')
        status=response.status;conn.close()
        return status,content,cookie_header

    def register(self,email,org):
        st,body,cookie=self.call('POST','/api/register',{'email':email,'password':'a-Long-Passphrase-2026!','org_name':org})
        self.assertEqual(st,201,body)
        return cookie.split(';')[0]

    def test_main_user_journey_and_org_isolation(self):
        a=self.register('first@example.com','First Studio')
        status,me,_=self.call('GET','/api/me',cookie=a)
        self.assertEqual(status,200)
        self.assertEqual(me['user']['org_name'],'First Studio')
        self.assertIn('Technology',me['templates'])
        play={'industry':'Technology','title':'Five-customer pilot','problem':'No users','audience':'Founders','pilot':'User tests','owner':'Owner A','metric_name':'User conversations','target_value':5,'actual_value':0,'funding':'Sponsor inquiry','partners':'Accelerator'}
        status,data,_=self.call('POST','/api/plays',play,cookie=a)
        self.assertEqual(status,201,data)
        pid=data['id']
        status,body,_=self.call('POST',f'/api/plays/{pid}/actions',{'title':'Book users','owner':'Owner A','due_date':'2026-11-10'},cookie=a)
        self.assertEqual(status,201)
        aid=body['id']
        status,_,_=self.call('PATCH',f'/api/actions/{aid}',{'done':True},cookie=a)
        self.assertEqual(status,200)
        status,_,_=self.call('POST',f'/api/plays/{pid}/evidence',{'note':'Five outreach emails drafted','url':'https://example.org/evidence'},cookie=a)
        self.assertEqual(status,201)
        status,_,_=self.call('PATCH',f'/api/plays/{pid}',{'actual_value':3,'status':'in_progress'},cookie=a)
        self.assertEqual(status,200)
        status,data,_=self.call('GET',f'/api/plays/{pid}',cookie=a)
        self.assertEqual(status,200)
        self.assertEqual(data['play']['actual_value'],3)
        self.assertEqual(data['actions'][0]['done'],1)
        self.assertEqual(len(data['evidence']),1)
        status,export,_=self.call('GET','/api/export',cookie=a)
        self.assertEqual(status,200)
        self.assertEqual(len(export['plays']),1)
        self.assertEqual(len(export['actions']),1)
        self.assertEqual(len(export['evidence']),1)
        b=self.register('second@example.com','Different Org')
        for method,path,body in [('GET',f'/api/plays/{pid}',None),('PATCH',f'/api/plays/{pid}',{'status':'completed'}),('POST',f'/api/plays/{pid}/evidence',{'note':'fake'}),('PATCH',f'/api/actions/{aid}',{'done':False})]:
            code,_,_=self.call(method,path,body,cookie=b)
            self.assertEqual(code,404,(method,path))
        status,x,_=self.call('GET','/api/plays',cookie=b)
        self.assertEqual(status,200)
        self.assertEqual(x['plays'],[])
        code,x,_=self.call('GET','/api/export',cookie=b)
        self.assertEqual(code,200)
        self.assertEqual(x['evidence'],[])
        code,_,_=self.call('POST','/api/logout',{},cookie=a)
        self.assertEqual(code,200)
        code,_,_=self.call('GET','/api/me',cookie=a)
        self.assertEqual(code,401)
        code,_,_=self.call('POST','/api/login',{'email':'first@example.com','password':'bad_password'},cookie=None)
        self.assertEqual(code,401)
        code,_,new_cookie=self.call('POST','/api/login',{'email':'first@example.com','password':'a-Long-Passphrase-2026!'})
        self.assertEqual(code,200)
        self.assertTrue(new_cookie.startswith('outcomeos_session='))

    def test_validation_and_csrf_header(self):
        a=self.register('third@example.com','Safety Org')
        data={'title':'Test','problem':'Problem','audience':'Target','pilot':'Small','owner':'Person','metric_name':'Sessions','status':'completed'}
        code,_,_=self.call('POST','/api/plays',data,cookie=a,confirm=False)
        self.assertEqual(code,403)
        code,_,_=self.call('POST','/api/plays',data,cookie=a,origin='https://example.org')
        self.assertEqual(code,403)
        code,r,_=self.call('POST','/api/plays',{**data,'target_value':-2},cookie=a)
        self.assertEqual(code,400)
        code,r,_=self.call('POST','/api/plays',{**data,'arbitrary_field':'x'},cookie=a)
        self.assertEqual(code,400)
        code,r,_=self.call('POST','/api/plays',{**data,'due_date':'2026-02-35'},cookie=a)
        self.assertEqual(code,400)
        code,r,_=self.call('POST','/api/plays',data,cookie=a)
        self.assertEqual(code,201)
        pid=r['id']
        code,_,_=self.call('POST',f'/api/plays/{pid}/evidence',{'note':'Link','url':'javascript:alert(1)'},cookie=a)
        self.assertEqual(code,400)
        code,_,_=self.call('PATCH','/api/org',{'brand':'My New Brand'},cookie=a)
        self.assertEqual(code,200)
        code,me,_=self.call('GET','/api/me',cookie=a)
        self.assertEqual(code,200)
        self.assertEqual(me['user']['brand'],'My New Brand')

    def test_static_app_and_health(self):
        for route in ['/','/app.js','/style.css']:
            code,response,_=self.call('GET',route)
            self.assertEqual(code,200)
            self.assertGreater(len(response),300)
        code,health,_=self.call('GET','/api/health')
        self.assertEqual((code,health['ok']),(200,True))


class EconomicsTests(unittest.TestCase):
    def test_mpi_and_payback(self):
        x=model(950,280,100,40,400,6,5)
        self.assertEqual(x['monthly_contribution'],530)
        self.assertEqual(x['lifetime_contribution'],3180)
        self.assertEqual(x['mpi'],7.95)
        self.assertEqual(x['net_contribution_after_cac'],2780)
        self.assertEqual(x['total_net_contribution'],13900)
    def test_undefined_zero_cac_and_negative_margin(self):
        self.assertIsNone(model(100,10,10,10,0,6)['mpi'])
        self.assertIsNone(model(100,100,30,0,40,6)['cac_payback_months'])
    def test_invalid_numbers(self):
        for values in [(-1,0,0,0,1,3),(100,20,0,0,0,0),(100,20,0,0,5,float('nan')),(100,20,0,0,5,6,1.5)]:
            with self.assertRaises(ValueError):model(*values)

if __name__=='__main__':unittest.main()
