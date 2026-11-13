const puppeteer=require('/home/ubuntu/.npm/_npx/4b4c857f6efdfb61/node_modules/puppeteer');
const url=process.env.ITT_TEST_URL||'file:///home/ubuntu/itt-showcase/public/index.html';
(async()=>{
 const browser=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox','--disable-gpu','--disable-dev-shm-usage']});
 let failures=0;
 const assert=(n,v,info='')=>{console.log(v?'PASS':'FAIL',n,info);if(!v)throw Error(n+' '+info)};
 for(const [label,w,h] of [['desktop',1440,900],['mobile',390,844],['small-mobile',320,650]]){
  const page=await browser.newPage();await page.setViewport({width:w,height:h,isMobile:w<=390,hasTouch:w<=390,deviceScaleFactor:1});
  const errors=[];page.on('pageerror',e=>errors.push(String(e)));
  try{
   await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000});await page.waitForFunction('!!window.__ITT_PUBLIC_DEMO__',{timeout:12000});
   assert(label+' title is action-led',(await page.$eval('.intro h1',e=>e.innerText)).includes('PLAY THE REPAIR'));
   assert(label+' mock QA positive', (await page.evaluate(()=>window.__ITT_PUBLIC_DEMO__.runSyntheticChecks('lead').every(x=>x.pass))));
   assert(label+' mock QA detects tamper', (await page.evaluate(()=>window.__ITT_PUBLIC_DEMO__.runSyntheticChecks('lead',{inbox:{id:'wrong'}}).some(x=>!x.pass))));
   assert(label+' security mock catches disabled MFA', (await page.evaluate(()=>window.__ITT_PUBLIC_DEMO__.runSyntheticChecks('trust',{ownerMFA:false}).some(x=>!x.pass))));
   assert(label+' redirect mock catches 302', (await page.evaluate(()=>window.__ITT_PUBLIC_DEMO__.runSyntheticChecks('route',{old:{status:302,location:'/about'}}).some(x=>!x.pass))));
   const dims=await page.evaluate(()=>[document.documentElement.scrollWidth,document.documentElement.clientWidth]);
   assert(label+' no horizontal page overflow',dims[0]<=dims[1]+2,dims.join('/'));
   assert(label+' no links to client findings',!(await page.content()).toLowerCase().includes('alpinemedia'));
   await page.screenshot({path:'/home/ubuntu/itt-showcase/'+label+'-upgrade-first.png'});
   if(label==='desktop'){
    await page.click('#watchDemo');
    assert('director starts',await page.$eval('#directorOverlay',e=>!e.hidden));
    await new Promise(r=>setTimeout(r,7500));
    assert('director actually shows proposed change',(await page.$eval('#stageResult',e=>e.innerText)).includes('SIMULATION ONLY'));
    await page.click('#directorStop');
    assert('director exit works',(await page.$eval('#directorOverlay',e=>e.hidden)));
   }else{
    await page.click('#watchDemo');
    await page.click('#directorStop');
    assert(label+' cinema opt-out works',await page.$eval('#directorOverlay',e=>e.hidden));
   }
   await page.click('#missionSelector button:nth-child(1)');
   await page.click('#choices button:nth-child(2)');
   await page.click('#advance');
   assert(label+' owner plan visible',await page.$eval('#executionPlan',e=>!e.hidden));
   assert(label+' receipt disabled before test',await page.$eval('#copyReceipt',e=>e.disabled));
   await page.click('#runTest');
   await page.waitForFunction('window.__ITT_PUBLIC_DEMO__.getState().phase==="passed"',{timeout:7000});
   const log=await page.$$eval('#testLog li',e=>e.map(x=>({status:x.dataset.result,text:x.innerText})));
   assert(label+' three real synthetic assertions',log.length===3&&log.every(x=>x.status==='pass'),JSON.stringify(log));
   const receipt=await page.evaluate(()=>window.__ITT_PUBLIC_DEMO__.formatReceipt({mission:'route',status:'PASS',startedAt:'t0',finishedAt:'t1',checks:window.__ITT_PUBLIC_DEMO__.runSyntheticChecks('route')}));
   assert(label+' receipt clearly states synthetic',receipt.includes('No real website was modified'));
   assert(label+' receipt can copy',await page.$eval('#copyReceipt',e=>!e.disabled));
   await page.screenshot({path:'/home/ubuntu/itt-showcase/'+label+'-upgrade-tested.png'});
   assert(label+' no runtime errors',errors.length===0,errors.slice(0,3).join(';'));
   console.log('SUITE_PASS',label);
  }catch(e){
   failures++;console.log('SUITE_FAIL',label,String(e).slice(0,400),errors.slice(0,5));
   await page.screenshot({path:'/home/ubuntu/itt-showcase/'+label+'-upgrade-failure.png'}).catch(()=>{});
  }
  await page.close();
 }
 await browser.close();
 if(failures)process.exit(1);
})().catch(e=>{console.error(e);process.exit(1)});