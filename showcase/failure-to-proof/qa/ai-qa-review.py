#!/usr/bin/env python3
"""
Bounded AI challenge agent for the ITT ICM QA suite.

This tool NEVER edits source, deploys changes, writes a PASS, or contacts client systems.
It sends only a sanitized, small deterministic QA summary to an explicitly configured
OpenAI-compatible model endpoint. Off by default; no API use without opt-in.
"""
from pathlib import Path
import os,json,datetime,urllib.request,urllib.parse,sys,re
ROOT=Path('/home/ubuntu/itt-showcase')
QA=ROOT/'qa'
SYSTEM=("You are an independent adversarial reviewer for a fictional public-safe software demonstration. "
"Return only a JSON object with key suggestions, an array of at most 5 entries. Each suggestion must have "
"file (one of app.js, upgrade_runtime.js, style.css, upgrade.css, template.html, build.py), "
"finding, improvement, why_ai_is_better_than_rule, falsification_test, downside, priority (P0/P1/P2/P3). "
"Suggest AI only if it gives measurable advantage over static rules, caching, or simple code. "
"Do not claim tests passed, do not invent customers, results, source hashes, or any live breaches.")
def clean(s):
 return re.sub(r'(?i)(secret|token|api[_-]?key|password|authorization)(\s*[:=]\s*)\S+',r'\1\2[REDACTED]',str(s))
def validate(obj):
 allowed={'app.js','upgrade_runtime.js','style.css','upgrade.css','template.html','build.py'}
 if not isinstance(obj,dict) or not isinstance(obj.get('suggestions'),list):raise ValueError('Expected suggestions array')
 rows=obj['suggestions'][:5]
 result=[]
 for entry in rows:
  if not isinstance(entry,dict) or entry.get('file') not in allowed:continue
  data={k:clean(entry.get(k,''))[:900] for k in ['file','finding','improvement','why_ai_is_better_than_rule','falsification_test','downside','priority']}
  if data['priority'] not in ('P0','P1','P2','P3'):continue
  if not data['falsification_test'] or not data['improvement']:continue
  result.append(data)
 return {'suggestions':result,'evaluated':False,'approved':False,'source_changes':False}
def build_input():
 receipt=json.loads((QA/'LATEST-RECEIPT.json').read_text())
 css=json.loads((QA/'css-audit.json').read_text())
 axe=json.loads((QA/'a11y-axe.json').read_text())
 perf=json.loads((QA/'performance.json').read_text())
 # Strictly avoid raw source, customer data, logs, and any environment variables in model payload.
 return {'qa_overall':receipt['overall'],
         'test_names_statuses':[(x['name'],x['status']) for x in receipt['tests']],
         'css_rules':css['rules'],'css_property_checks':css['declarations'],
         'overlapping_css_properties':len(css['duplicatedDeclarations']),
         'wcag_violation_counts':{r['name']:len(r['violations']) for r in axe['report']},
         'public_mobile_perf':[{'case':r.get('case'),'fcp':r.get('firstContentfulPaint'),'lcp':r.get('largestContentfulPaint'),'cls':r.get('cumulativeLayoutShift')} for r in perf['results'] if 'public mobile' in r['case']],
         'open_human_gates':['physical iPad Safari','blind owner comprehension','permissioned production proof']}
def main():
 if os.getenv('ITT_AI_OPT_IN')!='1':
  print('AI_REVIEW_NOT_RUN: explicit ITT_AI_OPT_IN=1 required. Deterministic QA remains available.')
  return 0
 base=os.getenv('ITT_AI_BASE_URL','')
 model=os.getenv('ITT_AI_MODEL','')
 key=os.getenv('ITT_AI_API_KEY','')
 if not base or not model:raise ValueError('Explicit ITT_AI_BASE_URL and ITT_AI_MODEL required; no inferred endpoints')
 parts=urllib.parse.urlsplit(base)
 if parts.scheme!='https' and not (parts.scheme=='http' and parts.hostname in ('127.0.0.1','localhost')):
  raise ValueError('AI endpoint must be HTTPS, or loopback HTTP for offline mock testing')
 if parts.username or parts.password or parts.fragment:raise ValueError('No credentials or fragments allowed in endpoint URL')
 if parts.hostname not in ('127.0.0.1','localhost') and not key:
  raise ValueError('Explicit API key required for remote endpoint; no unauthenticated transmission')
 url=base.rstrip('/')+'/chat/completions'
 payload={'model':model,'messages':[{'role':'system','content':SYSTEM},{'role':'user','content':json.dumps(build_input(),separators=(',',':'))}], 'temperature':0.1,'max_tokens':1200}
 body=json.dumps(payload).encode()
 headers={'Content-Type':'application/json'}
 if key:headers['Authorization']='Bearer '+key
 req=urllib.request.Request(url,data=body,headers=headers,method='POST')
 with urllib.request.urlopen(req,timeout=30) as resp:
  if resp.status!=200:raise RuntimeError('HTTP request did not succeed')
  obj=json.loads(resp.read(100_000).decode())
 msg=obj.get('choices',[{}])[0].get('message',{}).get('content','')
 match=re.search(r'\{.*\}',msg,re.S)
 if not match:raise ValueError('Model output was not a JSON object')
 proposal=validate(json.loads(match.group()))
 proposal['run_utc']=datetime.datetime.now(datetime.timezone.utc).isoformat()
 proposal['provider']='operator-configured OpenAI-compatible endpoint'
 proposal['grounding']='public demo QA summary only; suggestions remain unverified until independently tested'
 dest=QA/'AI-SUGGESTIONS-DRAFT.json'
 dest.write_text(json.dumps(proposal,indent=2)+'\n')
 print('AI_DRAFT_ONLY',len(proposal['suggestions']),'suggestions;',str(dest),'; no source edits')
 return 0
if __name__=='__main__':
 try:sys.exit(main())
 except Exception as e:
  print('AI_REVIEW_BLOCKED',type(e).__name__,clean(e))
  sys.exit(2)