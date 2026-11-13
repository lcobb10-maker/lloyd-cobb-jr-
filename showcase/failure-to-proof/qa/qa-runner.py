#!/usr/bin/env python3
"""
ITT ICM evidence-gated QA. AWS small instance only. No production mutations.
This runs deterministic tests and produces append-only, content-hashed receipts.
Optional LLM review is a separate command and cannot override any test result.
"""
import json,subprocess,hashlib,datetime,os,sys,time,pathlib,shutil
ROOT=pathlib.Path('/home/ubuntu/itt-showcase')
SRC=ROOT/'public'
REPORTS=ROOT/'qa'
REPORTS.mkdir(exist_ok=True)
TESTS=[
 ('source-app-syntax',['node','--check',str(SRC/'app.js')],15),
 ('synthetic-qa-syntax',['node','--check',str(SRC/'upgrade_runtime.js')],15),
 ('build-syntax',['python3','-m','py_compile',str(SRC/'build.py')],15),
 ('reproducible-build',['python3',str(SRC/'build.py')],20),
 ('browser-css-rule-audit',['node',str(ROOT/'css-qa.cjs')],45),
 ('wcag-automated',['node',str(ROOT/'axe-qa.cjs')],80),
 ('three-size-browser-acceptance',['node',str(ROOT/'upgrade-smoke.cjs')],120),
 ('focus-and-clipboard',['node',str(ROOT/'accessibility-smoke.cjs')],55),
 ('director-vs-user-race',['node',str(ROOT/'adversarial-race-test.cjs')],60),
 ('20-second-director-demo',['node',str(ROOT/'director-end-to-end.cjs')],65),
 ('opt-in-webgl2-and-lite-fallback',['node',str(ROOT/'visual-qa.cjs')],90),
]
FILES=['app.js','upgrade_runtime.js','visual-engine.js','studio.frag','template.html','style.css','upgrade.css','build.py','gsap.min.js','index.html']
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def run():
 started=datetime.datetime.now(datetime.timezone.utc).isoformat()
 hash_before={f:sha(SRC/f) for f in FILES}
 results=[]
 for name,cmd,timeout in TESTS:
  tick=time.monotonic()
  try:
   p=subprocess.run(cmd,cwd=str(ROOT),capture_output=True,text=True,timeout=timeout,env=os.environ.copy())
   out=(p.stdout or '')+'\n'+(p.stderr or '')
   status='PASS' if p.returncode==0 else 'FAIL'
   code=p.returncode
  except subprocess.TimeoutExpired as e:
   out=(e.stdout or b'').decode(errors='replace') if isinstance(e.stdout,bytes) else (e.stdout or '')
   status='TIMEOUT';code=124
  except Exception as e:
   out=type(e).__name__+': '+str(e);status='ERROR';code=1
  elapsed=round(time.monotonic()-tick,3)
  log=REPORTS/(name+'.log')
  log.write_text(out)
  print(f'{status:<8} {name:<33} {elapsed:6.2f}s',flush=True)
  results.append({'name':name,'status':status,'exit_code':code,'duration_seconds':elapsed,'log_path':str(log),'log_sha256':sha(log),'summary':out.strip().splitlines()[-1][:250] if out.strip() else ''})
 hash_after={f:sha(SRC/f) for f in FILES}
 stable=all(hash_before[f]==hash_after[f] for f in FILES if f!='index.html')
 built=(SRC/'index.html').exists()
 deterministic=stable and built and hash_after['index.html']==hash_before['index.html']
 report={
  'schema':'ITT_ICM_QA_RECEIPT_V1',
  'run_utc':started,
  'environment':'AWS t3-small / no GPU',
  'scope':'public-safe Failure to Proof demonstration',
  'source_sha256':hash_after,
  'pretest_source_sha256':hash_before,
  'source_unchanged':stable,
  'build_reproduced_same_hash':deterministic,
  'tests':results,
  'overall':'PASS' if deterministic and all(x['status']=='PASS' for x in results) else 'FAIL',
  'ai_provider_test':'NOT_RUN; optional AI may suggest tests but cannot override evidence',
  'limits':['Automated browser emulation is not physical Safari testing','No owner or blind audience research was performed','Synthetic fixture pass does not establish a live customer or security outcome']
 }
 receipt=REPORTS/'LATEST-RECEIPT.json'
 receipt.write_text(json.dumps(report,indent=2)+'\n')
 with (REPORTS/'history.jsonl').open('a') as f:f.write(json.dumps({'run_utc':started,'overall':report['overall'],'source_sha256':hash_after['index.html'],'tests':{r['name']:r['status'] for r in results}},separators=(',',':'))+'\n')
 print('VERDICT',report['overall'],'reproducible',deterministic,'test_count',len(results),flush=True)
 return 0 if report['overall']=='PASS' else 1
if __name__=='__main__':sys.exit(run())