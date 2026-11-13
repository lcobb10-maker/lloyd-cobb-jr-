from pathlib import Path
import json,collections,hashlib,datetime
root=Path('/home/ubuntu/itt-showcase')
j=json.loads((root/'qa/css-audit.json').read_text())
rules=j['allRules']
dups={(x['key'],x['rule']):x for x in j['duplicatedDeclarations']}
unmatched={x['rule'] for x in j['unmatchedAtInitialState']}
tick=chr(96)
def classify(prop):
 p=prop.lower()
 if any(t in p for t in ['color','background','border','shadow','opacity','filter','outline']):return 'VISUAL','Does this preserve contrast and hierarchy at mobile scale?','AI screenshot critique optional; axe/browser evidence decisive.'
 if any(t in p for t in ['animation','transition','transform','perspective']):return 'MOTION','Does this communicate state and respect reduced motion without excess CPU?','AI storyboard optional; browser performance required.'
 if any(t in p for t in ['font','line-height','letter','text-']):return 'TYPOGRAPHY','Does this remain legible and communicate hierarchy from 320px to desktop?','AI copy critique optional; contrast and layout tests required.'
 if any(t in p for t in ['width','height','margin','padding','display','grid','flex','position','inset','gap','overflow','top','bottom','left','right','max-','min-','place-','align-','justify-','box-']):return 'LAYOUT','Could simpler layout preserve hierarchy, usability and keyboard flow?','Use measured layout; AI may propose refactor but cannot self-certify.'
 return 'OTHER','Is this declaration necessary and browser compatible?','AI can suggest edge cases; CSSOM and tests decide.'
lines=['# Failure → Proof — CSS Rule and Declaration Audit','',
'CSSOM rule-level audit of the assembled experience. Complements the source line audit. Third-party font CSS excluded.',
'Generated: '+datetime.datetime.now(datetime.timezone.utc).isoformat(),
'Rules: '+str(j['rules'])+'; properties: '+str(j['declarations'])+'; overlapping values: '+str(len(j['duplicatedDeclarations']))+'; unmatched at first view: '+str(len(unmatched))+'.',
'','## Actionable findings','',
'- FIXED: selected CSS used [aria-current=true] despite accessible value aria-current=step. Now selectors agree.',
'- FIXED: low contrast numbers in mobile mission navigation; axe WCAG 2A/2AA retest reports no violations in four tested states.',
'- Duplicated declarations largely represent intentionally ordered visual refinements and browser-expanded background shorthands; do not blindly delete.',
'- Nonmatching selectors can be legitimate dynamic and media states; require interaction or breakpoint tests before deletion.',
'- Safari and human screen-reader verification remain open.',
'','## Every CSSOM rule and expanded declaration','']
counts=collections.Counter()
for i,r in enumerate(rules):
 media=' / '.join(r['media']) if r['media'] else 'global'
 lines += ['### Rule '+str(i+1)+': '+tick+r['selector'].replace(tick,"'")+tick,
  'Media: '+media+'; first-view DOM matches: '+str(r['matches'])+'; property count: '+str(len(r['props'])), '',
  '| Property | Value | Improvement question | AI contribution | Status |',
  '|---|---|---|---|---|']
 for it in r['props']:
  group,q,ai=classify(it['name']);counts[group]+=1
  key='|'.join([r['selector'],','.join(r['media']),it['name']])
  du=dups.get((key,i))
  status=('OVERLAP: '+('identical' if du['same'] else 'later CSS override')) if du else ('CHECK DYNAMIC STATE' if i in unmatched else 'REGRESSION CHECK')
  val=it['value'].replace('|','/').replace(tick,"'").replace('\n',' ')
  if len(val)>120:val=val[:117]+'...'
  lines.append('| '+tick+it['name']+tick+' | '+tick+val+tick+' | '+q+' | '+ai+' | '+status+' |')
 lines.append('')
lines+=['## Category counts','']
for key,num in counts.most_common():lines.append('- '+key+': '+str(num))
lines+=['','## Limits','- CSSOM expands CSS shorthands; property counts represent browser-resolved declarations, not separately authored declarations.','- Hover, modal, complete and media-responsive rules may be invisible to the initial selector-match snapshot.','- AI judgment cannot substitute for physical Safari or a person completing usability tasks.']
out=root/'CSS-DECLARATION-AUDIT.md'
out.write_text('\n'.join(lines)+'\n')
print(json.dumps({'rules':len(rules),'property_checks':sum(counts.values()),'groups':dict(counts),'bytes':out.stat().st_size,'sha256':hashlib.sha256(out.read_bytes()).hexdigest()},indent=2))