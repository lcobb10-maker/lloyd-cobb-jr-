const puppeteer=require('/home/ubuntu/.npm/_npx/4b4c857f6efdfb61/node_modules/puppeteer');
const fs=require('fs');
const URL=process.env.ITT_TEST_URL||'file:///home/ubuntu/itt-showcase/public/index.html';
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
const report=[];
try{
 for(const [name,width,height] of [['mobile-initial',390,844],['desktop-initial',1280,900],['mobile-outcome',390,844],['mobile-fallback',390,844]]){
  const p=await b.newPage();await p.setViewport({width,height,hasTouch:true,isMobile:width===390});
  await p.goto(URL,{waitUntil:'domcontentloaded',timeout:25000});
  if(name==='mobile-outcome'){
   await p.click('#choices button:nth-child(2)');await p.click('#advance');await p.click('#runTest');
   await p.waitForFunction('window.__ITT_PUBLIC_DEMO__.getState().phase==="passed"',{timeout:8000});
  }
  if(name==='mobile-fallback'){
   await p.click('#choices button:nth-child(2)');await p.click('#advance');await p.click('#runTest');
   await p.waitForFunction('window.__ITT_PUBLIC_DEMO__.getState().phase==="passed"',{timeout:8000});
   await p.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:undefined}));
   await p.click('#copyReceipt');
  }
  await p.addScriptTag({path:'/home/ubuntu/itt-showcase/qa/axe.min.js'});
  const result=await p.evaluate(async()=>{
   const a=await window.axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','best-practice']},resultTypes:['violations','incomplete']});
   return {violations:a.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,help:v.help,nodes:v.nodes.map(n=>({target:n.target,html:n.html.slice(0,230),failure:n.failureSummary?.slice(0,380)}))})),incomplete:a.incomplete.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.length})),passes:a.passes.length};
  });
  report.push({name,width,...result});
  console.log('AXE',name,'VIOLATIONS',result.violations.length,'INCOMPLETE',result.incomplete.length,'PASSES',result.passes);
  for(const v of result.violations)console.log(' -',v.id,v.impact,v.nodes.length,'examples',JSON.stringify(v.nodes.slice(0,2)));
  await p.close();
 }
 fs.writeFileSync('/home/ubuntu/itt-showcase/qa/a11y-axe.json',JSON.stringify({date:new Date().toISOString(),url:URL,report},null,2));
 if(report.some(r=>r.violations.length))process.exitCode=2;
}finally{await b.close()}
})().catch(e=>{console.error(e);process.exit(1)});