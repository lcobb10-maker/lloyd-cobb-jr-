
/* The suite below checks deterministic local fixtures, never production services.
   The same assertions can be challenged with an override in QA to prove that failure
   paths do not award completion credits. */
function runSyntheticChecks(id,override={}){
 if(id==='route'){
  const routes={old:{status:301,location:'/about'},current:{status:200},...override};
  return [
   {label:'Retired URL returns a permanent 301 redirect',pass:routes.old?.status===301},
   {label:'Redirect points to the approved current path',pass:routes.old?.location==='/about'},
   {label:'Destination loads without another redirect',pass:routes.current?.status===200}
  ];
 }
 if(id==='trust'){
  const config={httpsRedirect:true,ownerMFA:true,mediaLoads:true,contactWorks:true,...override};
  return [
   {label:'Mock site enforces an HTTPS redirect',pass:config.httpsRedirect===true},
   {label:'Mock administrator requires MFA',pass:config.ownerMFA===true},
   {label:'Mock contact form and video remain usable',pass:config.mediaLoads===true&&config.contactWorks===true}
  ];
 }
 if(id==='lead'){
  const mock={
   submitted:{id:'DEMO-INQUIRY-001',consent:true},
   inbox:{id:'DEMO-INQUIRY-001'},
   acknowledged:{id:'DEMO-INQUIRY-001'},
   ...override
  };
  return [
   {label:'Synthetic inquiry was submitted with consent',pass:mock.submitted?.id==='DEMO-INQUIRY-001'&&mock.submitted?.consent===true},
   {label:'Mock inbox contains the same inquiry identifier',pass:!!mock.submitted?.id&&mock.inbox?.id===mock.submitted.id},
   {label:'Mock owner acknowledgment matches the inquiry',pass:!!mock.submitted?.id&&mock.acknowledged?.id===mock.submitted.id}
  ];
 }
 throw Error('No synthetic suite for '+id);
}
function renderReceipt(receipt,fromReload=false){
 if(!receipt)return;
 $('testLog').replaceChildren();$('testLog').hidden=false;
 receipt.checks.forEach(item=>{
  const li=document.createElement('li');li.dataset.result=item.pass?'pass':'fail';
  const badge=document.createElement('b');badge.textContent=item.pass?'PASS':'FAIL';
  const label=document.createElement('span');label.textContent=item.label;li.append(badge,label);$('testLog').append(li);
 });
 $('testStatus').textContent=(receipt.status==='PASS'?'MOCK SUITE PASS':'MOCK SUITE FAIL')+' · deterministic local data only; never evidence of a live fix.';
 $('copyReceipt').disabled=receipt.status!=='PASS';
 if(fromReload)$('outcomeBadge').textContent='MOCK REVIEWED · NOT LIVE';
}
function formatReceipt(r){
 return [
  'ITT TOLD’EM / FAILURE → PROOF',
  'DEMONSTRATION TEST RECEIPT — NOT A PRODUCTION AUDIT',
  'Scenario: '+r.mission,
  'Status: '+r.status,
  'Started: '+r.startedAt,
  'Finished: '+r.finishedAt,
  'Fixture type: synthetic, deterministic, in-browser',
  '',
  ...r.checks.map((x,i)=>(i+1)+'. '+(x.pass?'PASS':'FAIL')+' — '+x.label),
  '',
  'No real website was modified, contacted or probed.',
  'No real customer lead or security account was accessed.',
  'Client authorization and actual live acceptance evidence remain required.'
 ].join('\n');
}
async function copyText(value,button){
 const original=button.textContent;
 try{
  if(!navigator.clipboard?.writeText)throw Error('Clipboard permission unavailable');
  await navigator.clipboard.writeText(value);
  button.textContent='COPIED ✓';
 }catch(e){
  // Browser clipboard permissions can be unavailable in embedded previews.
  // Provide an explicit touch-accessible, keyboard-dismissable fallback.
  const previous=document.activeElement;
  const dialog=document.createElement('div');
  dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','true');
  dialog.setAttribute('aria-label','Copy the mock test receipt');
  dialog.style.cssText='position:fixed;inset:0;z-index:99;background:#02070de8;display:grid;place-items:center;padding:18px';
  const panel=document.createElement('div');
  panel.style.cssText='width:min(700px,100%);height:min(560px,90vh);display:flex;flex-direction:column;gap:12px;padding:18px;background:#0d2330;border:1px solid #e0c08c';
  const heading=document.createElement('strong');heading.textContent='Select and copy the receipt';
  const pane=document.createElement('textarea');pane.value=value;
  pane.setAttribute('aria-label','Text of mock acceptance receipt');
  pane.readOnly=true;
  pane.style.cssText='width:100%;flex:1;min-height:130px;resize:none;background:#071521;color:#eee5d6;padding:14px;border:1px solid #8fa9ad;font:13px/1.5 monospace';
  const closeButton=document.createElement('button');closeButton.type='button';
  closeButton.textContent='CLOSE & RETURN TO EXPERIENCE';
  closeButton.style.cssText='padding:12px;background:#dfbd8b;color:#0b1926;border:0;font-weight:800;min-height:44px';
  const dismiss=()=>{document.removeEventListener('keydown',keyboard);dialog.remove();previous?.focus?.()};
  const keyboard=e=>{if(e.key==='Escape'){e.preventDefault();dismiss()}else if(e.key==='Tab'){e.preventDefault();(document.activeElement===pane?closeButton:pane).focus()}};
  closeButton.addEventListener('click',dismiss);
  dialog.addEventListener('click',e=>{if(e.target===dialog)dismiss()});
  document.addEventListener('keydown',keyboard);
  panel.append(heading,pane,closeButton);dialog.append(panel);
  document.body.appendChild(dialog);pane.focus();pane.select();
  button.textContent='RECEIPT READY TO SELECT';
 }
 setTimeout(()=>{button.textContent=original},3000);
}
function directorCue(title,body){
 $('directorTitle').textContent=title;$('directorBody').textContent=body;
 if(gsap&&!reduced)gsap.fromTo('.director-message',{opacity:.18,y:20},{opacity:1,y:0,duration:.54,ease:'power3.out'});
}
function stopDirector(){
 const d=state.director;
 d.timers.forEach(clearTimeout);d.timers=[];
 if(d.interval){clearInterval(d.interval);d.interval=null}
 if(gsap)gsap.killTweensOf('#directorBar');
 d.active=false;
 $('directorOverlay').hidden=true;
 $('watchDemo').setAttribute('aria-pressed','false');
 $('watchDemo').textContent='▶ WATCH THE DIRECTOR CUT';
}
function interruptDirectorForManualUse(){
 if(!state.director.active)return;
 stopDirector();
 // Prevent a pending director-initiated synthetic test from awarding a result after exit.
 if(state.phase==='testing'){
  clearTimers();
  state.phase='repair';
  $('runTest').disabled=false;
  $('runTest').textContent='▶ SIMULATE ACCEPTANCE TEST';
  $('outcomeBadge').textContent='INTERRUPTED · NOT VERIFIED';
  $('testStatus').textContent='Previous mock check canceled. Run the complete test to earn review credit.';
  $('copyReceipt').disabled=true;
  $('testLog').replaceChildren();
 }
}
function startDirector(){
 if(state.director.active){stopDirector();return}
 stopDirector();
 renderMission(0);
 const d=state.director;d.active=true;d.begin=Date.now();
 $('directorOverlay').hidden=false;$('watchDemo').setAttribute('aria-pressed','true');$('watchDemo').textContent='■ STOP DIRECTOR CUT';
 $('directorBar').style.width='0%';$('directorTime').textContent='00:00 / 00:20';
 directorCue('ONE BROKEN LINK. ONE INTERRUPTED JOURNEY.','A potential customer reaches a dead end before learning what the business offers.');
 $('stage').scrollIntoView({behavior:reduced?'auto':'smooth',block:'center'});
 if(gsap&&!reduced)gsap.fromTo('#directorBar',{width:'0%'},{width:'100%',duration:20,ease:'none'});
 const timed=(ms,fn)=>{d.timers.push(setTimeout(()=>{if(d.active)fn()},ms))};
 timed(3800,()=>directorCue('LOOK FOR THE ACTUAL FAILURE.','More animations and another chatbot will not repair a retired URL.'));
 timed(6900,()=>{
  choose(missions[0].right);revealRepair({skipScroll:true});
  directorCue('ONE PRECISE INTERVENTION.','The proposed 301 redirect would preserve the buyer’s journey to approved content.');
 });
 timed(10600,()=>{
  directorCue('NOW VERIFY THE CLAIM.','The local test harness checks that the redirect and destination work in a synthetic fixture.');
  simulateTest();
 });
 timed(15100,()=>directorCue('A MOCK PASS IS NOT A CLIENT RESULT.','The real release would still need permission, deployment and documented browser testing.'));
 timed(19500,()=>{stopDirector();$('outcome').scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'})});
 d.interval=setInterval(()=>{
  if(!d.active)return;
  const sec=Math.min(20,Math.floor((Date.now()-d.begin)/1000));
  $('directorTime').textContent='00:'+String(sec).padStart(2,'0')+' / 00:20';
 },300);
}