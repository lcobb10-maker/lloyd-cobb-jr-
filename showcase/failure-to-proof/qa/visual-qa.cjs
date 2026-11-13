const puppeteer=require('/home/ubuntu/.npm/_npx/4b4c857f6efdfb61/node_modules/puppeteer');
const fs=require('fs');
const URL=process.env.ITT_TEST_URL||'file:///home/ubuntu/itt-showcase/public/index.html';
(async()=>{
 const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',headless:true,
 args:['--no-sandbox','--disable-dev-shm-usage','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 let failed=0,records=[];
 for(const [name,width,height,reduced] of [['desktop',1280,800,false],['mobile',390,844,false],['tiny',320,650,false],['reduced',390,844,true],['unsupported',390,844,false],['deep-link',390,844,false]]){
  const p=await b.newPage();await p.setViewport({width,height,isMobile:width<600,hasTouch:width<600});
  if(reduced)await p.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
  if(name==='unsupported')await p.evaluateOnNewDocument(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){if(type==='webgl2')return null;return original.call(this,type,...args)}});
  const errors=[];p.on('pageerror',e=>errors.push(String(e)));
  try{
   await p.goto(name==='deep-link'?URL+'#cinematic=1':URL,{waitUntil:'domcontentloaded',timeout:25000});
   await p.waitForFunction(()=>window.__ITT_VISUAL_METRICS__&&window.__ITT_PUBLIC_DEMO__,{timeout:10000});
   const initial=await p.evaluate(()=>window.__ITT_VISUAL_METRICS__);
   if(name!=='deep-link'&&(initial.mode!=='css-fallback'||initial.drawnFrames))throw Error('Initial work not lazy '+JSON.stringify(initial));
   await p.screenshot({path:'/home/ubuntu/itt-showcase/qa/visual-'+name+'-lite.png'});
   if(name==='unsupported'){
    await p.click('#qualityToggle',{timeout:15000});
    const denied=await p.evaluate(()=>window.__ITT_VISUAL_METRICS__);
    if(denied.mode!=='css-fallback'||!denied.error||!(await p.$eval('#qualityToggle',e=>e.disabled)))throw Error('Unavailable GPU did not fall back '+JSON.stringify(denied));
    records.push({name,initial,denied,errors});console.log('PASS_VISUAL',name,'unavailable WebGL2 yields CSS fallback');
   }else if(!reduced){
    if(name!=='deep-link')await p.click('#qualityToggle',{timeout:15000});
    await p.waitForFunction(()=>window.__ITT_VISUAL_METRICS__?.mode==='webgl2-studio'&&window.__ITT_VISUAL_METRICS__?.drawnFrames>0,{timeout:16000});
    await new Promise(r=>setTimeout(r,800));
    const on=await p.evaluate(()=>window.__ITT_VISUAL_METRICS__);
    await p.screenshot({path:'/home/ubuntu/itt-showcase/qa/visual-'+name+'-cinematic.png'});
    await p.click('#qualityToggle');
    const off=await p.evaluate(()=>window.__ITT_VISUAL_METRICS__);
    if(off.mode!=='css-fallback'||off.active)throw Error('Opt-out failed '+JSON.stringify(off));
    const count=off.drawnFrames;
    await new Promise(r=>setTimeout(r,260));
    if((await p.evaluate(()=>window.__ITT_VISUAL_METRICS__.drawnFrames))!==count)throw Error('Render loop continued after disabling');
    records.push({name,initial,on,off,errors});
    console.log('PASS_VISUAL',name,'default no GPU; opt-in drew',on.drawnFrames,'frames; opt-out halted');
   }else{
    const disabled=await p.$eval('#qualityToggle',e=>e.disabled);
    if(!disabled||!initial.reducedMotion)throw Error('Reduced motion not honored');
    records.push({name,initial,errors});
    console.log('PASS_VISUAL',name,'reduced motion falls back and disables GPU');
   }
   if(errors.length)throw Error(errors.join(';'));
  }catch(e){failed++;console.log('FAIL_VISUAL',name,String(e),errors);await p.screenshot({path:'/home/ubuntu/itt-showcase/qa/visual-'+name+'-error.png'}).catch(()=>{})}
  await p.close();
 }
 await b.close();
 fs.writeFileSync('/home/ubuntu/itt-showcase/qa/visual-modes.json',JSON.stringify({runUtc:new Date().toISOString(),records},null,2));
 if(failed)process.exit(1);
})().catch(e=>{console.error(e);process.exit(1)});