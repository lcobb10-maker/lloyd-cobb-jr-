import json,os,subprocess,threading,http.server,socketserver
from pathlib import Path
ROOT=Path('/home/ubuntu/itt-showcase')
seen=[]
class Handler(http.server.BaseHTTPRequestHandler):
 def log_message(self,*args):pass
 def do_POST(self):
  blob=self.rfile.read(int(self.headers['Content-Length']))
  req=json.loads(blob.decode())
  seen.append(req)
  assert self.path=='/chat/completions'
  assert req['model']=='mock-qa'
  result={
   'suggestions':[
    {'file':'app.js','finding':'Autoplay could race an interrupted state','improvement':'Keep explicit cancellation ownership','why_ai_is_better_than_rule':'AI offers counterexample hypotheses, but deterministic code is better for implementation','falsification_test':'Stop director during synthetic check and ensure no phantom PASS','downside':'False positive from AI review','priority':'P1'},
    {'file':'/etc/passwd','finding':'Forbidden file scope','improvement':'Do not allow','falsification_test':'no','priority':'P0'}
   ]
  }
  body=json.dumps({'choices':[{'message':{'content':json.dumps(result)}}]}).encode()
  self.send_response(200);self.send_header('Content-Type','application/json');self.send_header('Content-Length',str(len(body)));self.end_headers();self.wfile.write(body)
with socketserver.TCPServer(('127.0.0.1',0),Handler) as server:
 port=server.server_address[1]
 t=threading.Thread(target=server.serve_forever,daemon=True);t.start()
 env=dict(os.environ,ITT_AI_OPT_IN='1',ITT_AI_BASE_URL='http://127.0.0.1:'+str(port),ITT_AI_MODEL='mock-qa')
 env.pop('ITT_AI_API_KEY',None)
 result=subprocess.run(['python3',str(ROOT/'ai-qa-review.py')],env=env,text=True,capture_output=True,timeout=20)
 server.shutdown()
 assert result.returncode==0,(result.stdout,result.stderr)
 assert len(seen)==1
 payload=json.dumps(seen[0])
 assert 'password=' not in payload.lower() and 'api_key=' not in payload.lower()
 assert not ('<script' in payload or 'example.studio' in payload), 'only curated QA summary should be sent'
 saved=json.loads((ROOT/'qa/AI-SUGGESTIONS-DRAFT.json').read_text())
 assert len(saved['suggestions'])==1 and not saved['approved'] and not saved['evaluated'] and not saved['source_changes']
 print('PASS_AI_PROVIDER_CONTRACT opt-in, request shape, endpoint allowlist')
 print('PASS_AI_PROVIDER_CONTRACT sanitized QA summary, no full source/client data')
 print('PASS_AI_PROVIDER_CONTRACT invalid path rejected, model cannot approve')
 print('MOCK_PROVIDER_ONLY: no real AI inference or external API invoked')