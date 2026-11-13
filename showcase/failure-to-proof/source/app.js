(()=>{
'use strict';
const $=id=>document.getElementById(id),gsap=window.gsap,reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
const missions=[
 {id:'route',title:'THE DEAD END',short:'THE DEAD LINK',category:'CUSTOMER NAVIGATION',url:'example.studio/about-old',status:'404',sub:'This route does not exist.',callout:'A customer follows a dead link.',problem:'An older shared URL leads to a 404 instead of the correct information.',friction:'A prospect may give up before reaching the services or contact page.',question:'A returning customer clicks an old link. What is the first sensible repair?',options:[['Launch a new visual identity','Redesigning unrelated visuals does not repair the dead route.'],['Redirect the obsolete URL','Correct: restore the intended route to approved current content.'],['Install a new AI chatbot','A chatbot cannot replace a broken destination.']],right:1,repair:'Map the retired URL to an owner-approved replacement and install an appropriate permanent redirect.',proof:'Send the original URL through the public route and verify a redirect to the correct page without loops.',check:['GET /about-old','301 → /about','200 /about'],fixedUrl:'example.studio/about',fixedStatus:'301 → 200',fixedSub:'A useful destination is restored.',result:'The customer reaches the approved page. This is a simulated pass, not a live website repair.'},
 {id:'trust',title:'THE TRUST CHECK',short:'THE TRUST GAP',category:'BROWSER SAFETY',url:'example.studio/security',status:'CHECK',sub:'Security settings need review.',callout:'A brand can look polished and still lack verified controls.',problem:'A site owner has not independently confirmed the browser and account security configuration.',friction:'A potential issue may go unnoticed while an untested change could break the site.',question:'Which action protects customers without assuming a breach?',options:[['Publicly announce the site was hacked','An unverified configuration finding is not evidence of compromise.'],['Review platform security and retest','Correct: use an authorized review and verify compatible controls.'],['Remove every security header','Disabling safeguards without an assessment would be counterproductive.']],right:1,repair:'Review HTTPS policies, administrative access, MFA and compatible browser defenses with the authorized site owner.',proof:'Compare before/after settings and verify that forms, video playback and sign-in still function.',check:['Authorized settings review','Stage compatible policy','Retest key customer flows'],fixedUrl:'example.studio/verified',fixedStatus:'REVIEW',fixedSub:'Controls evaluated; test record produced.',result:'A documented control review is ready for owner approval. No breach or certification claim is made.'},
 {id:'lead',title:'THE MISSING REPLY',short:'THE LOST INQUIRY',category:'SALES HANDOFF',url:'example.studio/contact',status:'SENT?',sub:'Receipt has not been verified.',callout:'A beautiful contact form means nothing without delivery.',problem:'A customer can submit a form but no confirmed test shows that the intended person receives it.',friction:'A qualified inquiry could remain unanswered without anyone knowing why.',question:'What would prove the contact pathway actually works?',options:[['Add a larger hero video','It may look better but does not establish message delivery.'],['Run a consented end-to-end test','Correct: follow a test inquiry from submission to inbox and acknowledgment.'],['Turn on autonomous pricing messages','Unverified automation creates additional business and privacy risk.']],right:1,repair:'Send an authorized synthetic inquiry, verify form routing and inbox receipt, then assign response ownership.',proof:'Record submission, actual destination inbox receipt and acknowledgment timestamps.',check:['Synthetic inquiry sent','Inbox receipt confirmed','Owner acknowledges'],fixedUrl:'example.studio/contact',fixedStatus:'RECEIPT',fixedSub:'Owner can verify a test inquiry.',result:'The intended handoff is demonstrated in a simulation. Actual delivery requires owner-authorized testing.'}
];
const state={index:0,phase:'choose',picked:-1,completed:new Set(),testTimers:[],receipts:new Map(),director:{active:false,timers:[],interval:null,begin:0}};
const number=n=>String(n).padStart(2,'0');
function motion(target,vars){
 if(reduced||!gsap)return;
 gsap.fromTo(target,{opacity:0,y:12},{opacity:1,y:0,duration:.55,stagger:.07,ease:'power3.out',...vars});
}
function clearTimers(){state.testTimers.forEach(clearTimeout);state.testTimers=[]}
/*INJECT_UPGRADE*/
function renderMission(index){
 clearTimers();state.index=index;state.phase=state.completed.has(index)?'passed':'choose';state.picked=-1;
 const m=missions[index];
 $('missionTitle').textContent=m.title;$('missionCounter').textContent='MISSION '+number(index+1)+' / 03';
 $('question').textContent=m.question;$('guidance').textContent='Pick the direct repair. Other choices may look impressive, but they do not close this failure path.';
 $('urlBox').textContent=m.url;$('screenHeading').textContent=m.status;$('screenSub').textContent=m.sub;
 $('artifactState').textContent='UNRESOLVED';$('artifactState').style.color='var(--red)';
 $('calloutLabel').textContent='RED TEAM / POTENTIAL FAILURE';$('calloutTitle').textContent=m.callout;$('calloutBody').textContent=m.friction;
 $('stageResult').textContent='ILLUSTRATIVE · NO CLIENT DATA';$('stage').classList.remove('repaired');$('browserArt').classList.remove('fixed');
 $('missionGlyph').textContent={route:'↗',trust:'◇',lead:'✉'}[m.id];$('visualScene').dataset.mission=m.id;
 $('feedback').textContent='Choose the action that repairs the actual journey.';$('feedback').className='feedback';
 $('outcome').hidden=true;$('testStatus').textContent='';$('testLog').replaceChildren();$('testLog').hidden=true;$('executionPlan').hidden=true;$('copyReceipt').disabled=true;
 $('runTest').disabled=false;$('runTest').textContent='▶ SIMULATE ACCEPTANCE TEST';
 $('advance').textContent='CHOOSE A REPAIR FIRST →';$('advance').disabled=true;
 const chooser=$('choices');chooser.replaceChildren();
 m.options.forEach(([name],i)=>{
   const b=document.createElement('button');b.type='button';b.dataset.index=String(i);b.setAttribute('aria-pressed','false');
   const n=document.createElement('span');n.textContent=number(i+1);const t=document.createTextNode(name);b.append(n,t);
   b.addEventListener('click',()=>{if(state.director.active)interruptDirectorForManualUse();choose(i)});chooser.appendChild(b);
 });
 $('missionSelector').replaceChildren();
 missions.forEach((mission,i)=>{
  const b=document.createElement('button');b.type='button';if(i===index)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');b.className=state.completed.has(i)?'complete':'';
  const numberEl=document.createElement('b');numberEl.textContent=state.completed.has(i)?'✓':number(i+1);
  const words=document.createElement('div');const h=document.createElement('strong');h.textContent=mission.short;const t=document.createElement('small');t.textContent=state.completed.has(i)?'SIMULATED ✓':'INVESTIGATE →';words.append(h,t);b.append(numberEl,words);
  b.addEventListener('click',()=>{if(state.director.active)interruptDirectorForManualUse();renderMission(i);document.getElementById('stage').scrollIntoView({behavior:reduced?'auto':'smooth',block:'center'})});
  $('missionSelector').append(b);
 });
 renderScore();
 if(state.phase==='passed'){revealRepair({alreadyTested:true})}
 motion(['#browserArt','#callout','#question'],{stagger:.11});
}
function choose(index){
 const m=missions[state.index];
 state.picked=index;document.querySelectorAll('#choices button').forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));
 if(index===m.right){
  $('feedback').textContent='✓ Strong decision. This action addresses the failure directly.';$('feedback').className='feedback good';
  $('advance').disabled=false;$('advance').textContent='WATCH THE PROPOSED REPAIR →';
 }else{
  $('feedback').textContent='↳ '+m.options[index][1];$('feedback').className='feedback warn';
  $('advance').disabled=true;$('advance').textContent='CHOOSE THE ACTUAL REPAIR →';
 }
}
function revealRepair({alreadyTested=false,skipScroll=false}={}){
 const m=missions[state.index];state.phase=alreadyTested?'passed':'repair';
 $('outcome').hidden=false;$('outcomeProblem').textContent=m.problem;$('outcomeRepair').textContent=m.repair;$('outcomeTest').textContent=m.proof;
 const releasePlans={route:['Approve the destination for retired URLs.','Configure redirect rules and update referencing links.','Check live 301→200, no loops, and mobile navigation.'],trust:['Authorize the platform/account review.','Stage compatible controls and role/MFA settings.','Retest browser policy, authentication, forms and media.'],lead:['Specify the receiving inbox and reply owner.','Verify form routing with a consented test inquiry.','Confirm actual receipt and acknowledgment times.']};
 const plan=releasePlans[m.id];$('planOwner').textContent=plan[0];$('planBuild').textContent=plan[1];$('planRelease').textContent=plan[2];$('executionPlan').hidden=false;
 $('outcomeDetail').textContent='Here is the specific change and the proof required to release it. The example is simulated.';
 $('outcomeBadge').textContent=alreadyTested?'SIMULATED TEST REVIEWED':'PROPOSED · NOT DEPLOYED';
 $('urlBox').textContent=m.fixedUrl;$('screenHeading').textContent=m.fixedStatus;$('screenSub').textContent=m.fixedSub;
 $('missionGlyph').textContent={route:'↪',trust:'◆',lead:'✓'}[m.id];
 $('artifactState').textContent='PROPOSED';$('artifactState').style.color='var(--gold)';
 $('calloutLabel').textContent='BUILD TEAM / PROPOSED REMEDIATION';$('calloutTitle').textContent='Now change only what matters.';$('calloutBody').textContent=m.repair;
 $('stageResult').textContent='AFTER / SIMULATION ONLY';$('browserArt').classList.add('fixed');$('stage').classList.add('repaired');
 $('advance').disabled=!alreadyTested;$('advance').textContent=alreadyTested?'NEXT MISSION →':'RUN THE ACCEPTANCE TEST BELOW ↓';
 if(alreadyTested){$('runTest').disabled=true;$('runTest').textContent='SIMULATED TEST REVIEWED ✓';$('testStatus').textContent='Simulation reviewed. The actual business remains unchanged.'}
 else {$('runTest').disabled=false;$('runTest').textContent='▶ SIMULATE ACCEPTANCE TEST';$('testStatus').textContent=''}
 if(gsap&&!reduced){
   gsap.fromTo('#visualOrb',{scale:.82,rotation:-14,opacity:.45},{scale:1.03,rotation:6,opacity:1,duration:1.1,ease:'power3.out'});
   gsap.fromTo('#screenHeading',{opacity:0,scale:.75,y:20},{opacity:1,scale:1,y:0,duration:.75,ease:'back.out(1.3)'});
   gsap.fromTo('#callout',{opacity:0,y:18},{opacity:1,y:0,duration:.65,ease:'power2.out'});
 }
 if(alreadyTested){renderReceipt(state.receipts.get(state.index),true)}
 if(!alreadyTested&&!skipScroll){$('outcome').scrollIntoView({behavior:reduced?'auto':'smooth',block:'center'})}
}
function simulateTest(){
 if(state.phase!=='repair')return;
 const m=missions[state.index];state.phase='testing';
 $('runTest').disabled=true;$('runTest').textContent='RUNNING MOCK FIXTURE CHECKS…';
 $('testLog').hidden=false;$('testLog').replaceChildren();
 $('copyReceipt').disabled=true;
 const evaluations=runSyntheticChecks(m.id);
 const receipt={mission:m.id,startedAt:new Date().toISOString(),checks:[],synthetic:true,liveChanges:false};
 let idx=0;
 const addCheck=()=>{
  if(idx>=evaluations.length){
   const allPassed=receipt.checks.every(c=>c.pass);
   receipt.status=allPassed?'PASS':'FAIL';receipt.finishedAt=new Date().toISOString();
   state.receipts.set(state.index,receipt);state.testTimers=[];
   if(allPassed){
    state.completed.add(state.index);state.phase='passed';
    $('runTest').textContent='MOCK FIXTURE PASSED ✓';
    $('testStatus').textContent='MOCK PASS — synthetic local fixtures only. Live release requires authorized deployment and verification.';
    $('outcomeBadge').textContent='MOCK PASS · NOT DEPLOYED';
    $('artifactState').textContent='MOCK PASS';$('artifactState').style.color='var(--teal)';
    $('calloutLabel').textContent='QA TEAM / EVIDENCE REQUIRED';
    $('calloutTitle').textContent='The synthetic checks passed.';
    $('calloutBody').textContent='The real-world release still needs owner approval and evidence: '+m.proof;
    $('advance').disabled=false;$('advance').textContent=state.completed.size===3?'OPEN THE FINAL DEBRIEF →':'NEXT MISSION →';
    $('copyReceipt').disabled=false;renderScore();refreshSelector();
    if(gsap&&!reduced)gsap.fromTo('#outcomeBadge',{opacity:.18,scale:.88},{opacity:1,scale:1,duration:.55,ease:'back.out(1.3)'});
   }else{
    state.phase='repair';$('runTest').disabled=false;$('runTest').textContent='↻ RETRY MOCK CHECKS';
    $('testStatus').textContent='MOCK FAIL — at least one assertion failed. No completion credit was awarded.';
    $('outcomeBadge').textContent='MOCK FAIL · INVESTIGATE';
   }
   return;
  }
  const item=evaluations[idx++];receipt.checks.push(item);
  const li=document.createElement('li');li.dataset.result=item.pass?'pass':'fail';
  const badge=document.createElement('b');badge.textContent=item.pass?'PASS':'FAIL';
  const label=document.createElement('span');label.textContent=item.label;
  li.append(badge,label);$('testLog').append(li);
  $('testStatus').textContent='Test '+idx+' of '+evaluations.length+': '+(item.pass?'pass':'fail')+' · mock only';
  state.testTimers.push(setTimeout(addCheck,420));
 };
 state.testTimers.push(setTimeout(addCheck,240));
}
function renderScore(){
 $('scoreText').textContent=state.completed.size+' / 3 REVIEWED';
 $('progressFill').style.width=(state.completed.size/3*100)+'%';
}
function refreshSelector(){document.querySelectorAll('#missionSelector button').forEach((b,i)=>{const finished=state.completed.has(i);b.classList.toggle('complete',finished);b.querySelector('b').textContent=finished?'✓':number(i+1);b.querySelector('small').textContent=finished?'SIMULATED ✓':'INVESTIGATE →'})}
function advance(){
 if(state.phase==='choose'&&state.picked===missions[state.index].right)revealRepair();
 else if(state.phase==='repair')$('outcome').scrollIntoView({behavior:reduced?'auto':'smooth',block:'center'});
 else if(state.phase==='passed'){
   if(state.completed.size===3){$('conclusion').hidden=false;$('conclusion').scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});if(gsap&&!reduced)gsap.fromTo('#conclusion',{opacity:0,y:45},{opacity:1,y:0,duration:.9})}
   else{
    const next=missions.findIndex((_,i)=>!state.completed.has(i));
    renderMission(next<0?0:next);$('stage').scrollIntoView({behavior:reduced?'auto':'smooth',block:'center'});
   }
 }
}
$('jumpToGame').addEventListener('click',()=>{stopDirector();$('stage').scrollIntoView({behavior:reduced?'auto':'smooth',block:'center'})});
$('watchDemo').addEventListener('click',startDirector);
$('directorStop').addEventListener('click',interruptDirectorForManualUse);
$('copyReceipt').addEventListener('click',()=>{const r=state.receipts.get(state.index);if(r)copyText(formatReceipt(r),$('copyReceipt'))});
$('shareSummary').addEventListener('click',()=>{const summary='FAILURE → PROOF — ITT TOLD’EM interactive concept\n3 simulated customer failure paths · owner-authorized repair plans · deterministic local mock acceptance checks.\nNo real client website is modified and no sales increase is claimed.\n'+location.href;copyText(summary,$('shareSummary'))});
$('advance').addEventListener('click',()=>{if(state.director.active)interruptDirectorForManualUse();advance()});
$('runTest').addEventListener('click',()=>{if(state.director.active)interruptDirectorForManualUse();simulateTest()});
$('skip').addEventListener('click',()=>{if(state.director.active)interruptDirectorForManualUse();renderMission((state.index+1)%3)});
$('replay').addEventListener('click',()=>{stopDirector();state.completed.clear();state.receipts.clear();$('conclusion').hidden=true;renderMission(0);window.scrollTo({top:0,behavior:'smooth'})});
renderMission(0);
window.__ITT_PUBLIC_DEMO__={getState:()=>({mission:state.index,phase:state.phase,completed:state.completed.size,receipts:state.receipts.size,directorActive:state.director.active,publicConcept:true,actualClientChanges:false}),runSyntheticChecks,formatReceipt,startDirector,stopDirector};
})();
