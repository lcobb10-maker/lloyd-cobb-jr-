const puppeteer=require('/home/ubuntu/.npm/_npx/4b4c857f6efdfb61/node_modules/puppeteer');
(async()=>{
 const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox','--disable-gpu','--disable-dev-shm-usage']});
 try{
  const p=await b.newPage();await p.setViewport({width:1180,height:800,deviceScaleFactor:1});
  const errors=[];p.on('pageerror',e=>errors.push(String(e)));
  await p.goto('https://htmlpreview.github.io/?https://github.com/lcobb10-maker/lloyd-cobb-jr-/blob/main/showcase/failure-to-proof/index.html',{waitUntil:'domcontentloaded',timeout:35000});
  await p.waitForFunction('window.__ITT_PUBLIC_DEMO__?.getState().mission===0',{timeout:25000});
  await p.click('#watchDemo');
  await new Promise(r=>setTimeout(r,11900));
  const state12=await p.evaluate(()=>({phase:window.__ITT_PUBLIC_DEMO__.getState().phase,overlay:!document.getElementById('directorOverlay').hidden,caption:document.getElementById('directorTitle').textContent,log:document.querySelectorAll('#testLog li').length}));
  await p.screenshot({path:'/home/ubuntu/itt-showcase/director-cut-frame-12s.png',timeout:15000});
  await new Promise(r=>setTimeout(r,9200));
  const state21=await p.evaluate(()=>({phase:window.__ITT_PUBLIC_DEMO__.getState().phase,overlay:!document.getElementById('directorOverlay').hidden,completed:window.__ITT_PUBLIC_DEMO__.getState().completed,log:document.querySelectorAll('#testLog li').length}));
  if(!['repair','testing','passed'].includes(state12.phase))throw Error('Director did not reach proposed repair by 12s '+JSON.stringify(state12));
  if(state12.phase==='passed'&&state12.log!==3)throw Error('Premature PASS without mock assertions '+JSON.stringify(state12));
  if(state21.overlay||state21.phase!=='passed'||state21.log!==3||errors.length)throw Error('Director 20s exit did not preserve mock receipt '+JSON.stringify({state21,errors}));
  console.log('DIRECTOR_CUT_20S_PASS',JSON.stringify({state12,state21,errors}));
 }finally{await b.close()}
})().catch(e=>{console.error('DIRECTOR_CUT_FAIL',String(e));process.exit(1)});