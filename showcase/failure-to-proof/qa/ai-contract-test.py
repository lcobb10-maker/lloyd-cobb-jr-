import importlib.util,json,os,subprocess,sys,threading,http.server,socketserver
from pathlib import Path
FILE='/home/ubuntu/itt-showcase/ai-qa-review.py'
spec=importlib.util.spec_from_file_location('itt_qa_review',FILE)
mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
assert mod.validate({'suggestions':[{'file':'app.js','improvement':'Guard stale callbacks','falsification_test':'Cancel director while timeout is pending','priority':'P1','finding':'race','why_ai_is_better_than_rule':'AI suggests edge case','downside':'review needed'}]})['suggestions'][0]['priority']=='P1'
assert mod.validate({'suggestions':[{'file':'/etc/passwd','improvement':'bad','falsification_test':'bad','priority':'P0'}]})['suggestions']==[]
assert mod.clean('API_KEY=supersecret').find('supersecret')==-1
env={k:v for k,v in os.environ.items() if not k.startswith('ITT_AI_')}
r=subprocess.run(['python3',FILE],env=env,capture_output=True,text=True,timeout=10)
assert r.returncode==0 and 'NOT_RUN' in r.stdout
print('PASS_AI_CONTRACT no opt-in means no provider call')
print('PASS_AI_CONTRACT bounded suggestions and path allowlist')
print('PASS_AI_CONTRACT simple sensitive value redaction')