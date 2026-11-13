const puppeteer=require('/home/ubuntu/.npm/_npx/4b4c857f6efdfb61/node_modules/puppeteer');
const fs=require('fs'),path=require('path');
const URL=process.env.ITT_TEST_URL||'file:///home/ubuntu/itt-showcase/public/index.html';
const outDir='/home/ubuntu/itt-showcase/qa';
(async()=>{
 fs.mkdirSync(outDir,{recursive:true});
 const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
 try{
 const p=await b.newPage();await p.setViewport({width:390,height:844,isMobile:true,hasTouch:true,deviceScaleFactor:1});
 const start=Date.now();
 await p.goto(URL,{waitUntil:'domcontentloaded',timeout:30000});
 const first=Date.now()-start;
 await p.waitForSelector('#choices button:nth-child(2)',{timeout:10000});
 const metrics=await p.evaluate(()=>{
  const text=(document.body.innerText||'');
  const timing=performance.getEntriesByType('navigation')[0];
  const data={};
  const sheets=[...document.styleSheets];
  const roots=[];
  const inspect=(rule,path)=>{
   if(rule.type===1){
    const pairs=[];for(const name of rule.style)pairs.push({name,value:rule.style.getPropertyValue(name),important:rule.style.getPropertyPriority(name)});
    let matches=0,syntaxError=null;
    try{matches=document.querySelectorAll(rule.selectorText).length}catch(e){syntaxError=String(e).slice(0,120)}
    roots.push({selector:rule.selectorText,media:path,props:pairs,matches,syntaxError,ruleText:rule.cssText.slice(0,600)});
   }else if(rule.cssRules){
    for(const x of rule.cssRules)inspect(x,path.concat(rule.conditionText||rule.name||rule.cssText.split('{')[0]));
   }
  };
  for(const sheet of sheets){
   if(sheet.href)continue;
   try{for(const rule of sheet.cssRules)inspect(rule,[])}catch(e){data.sheetError=String(e)}
  }
  data.rules=roots;
  data.nav=timing?{duration:timing.duration,domInteractive:timing.domInteractive,domContentLoaded:timing.domContentLoadedEventEnd,transferSize:timing.transferSize}:null;
  data.images=document.images.length;
  data.buttons=document.querySelectorAll('button').length;
  data.bodyTextLength=text.length;
  data.headings=[...document.querySelectorAll('h1,h2,h3')].map(h=>({tag:h.tagName,text:h.innerText.slice(0,110)}));
  data.a11y={unlabeledButtons:[...document.querySelectorAll('button')].filter(e=>!e.textContent?.trim()&&!e.getAttribute('aria-label')).map(e=>e.outerHTML.slice(0,180)),imagesWithoutAlt:[...document.images].filter(e=>!e.hasAttribute('alt')).map(e=>e.outerHTML.slice(0,160))};
  data.size={documentWidth:document.documentElement.scrollWidth,viewport:document.documentElement.clientWidth};
  return data;
 });
 const rules=metrics.rules||[];
 const seen=new Map(),dup=[],unmatched=[];
 let props=0;
 for(const [i,r] of rules.entries()){
  if(r.matches===0&&!r.selector.includes(':hover')&&!r.selector.includes(':focus')&&!r.selector.includes(':active')&&!r.selector.includes(':disabled')&&!r.selector.includes('[hidden]')&&!r.selector.includes('[aria-')&&!r.selector.includes('[data-')&&!r.selector.includes('.repaired')&&!r.selector.includes('.complete')&&!r.selector.includes('::before')&&!r.selector.includes('::after'))unmatched.push({selector:r.selector,media:r.media.join(' '),rule:i});
  for(const c of r.props){
   props++;
   const key=[r.selector,r.media.join(','),c.name].join('|');
   if(seen.has(key)){
    const old=seen.get(key);
    dup.push({key,previous:old.value,next:c.value,same:old.value===c.value,rule:i});
   }
   seen.set(key,{value:c.value,rule:i});
  }
 }
 const report={time:new Date().toISOString(),url:URL,firstDomMs:first,rules:rules.length,declarations:props,duplicatedDeclarations:dup,unmatchedAtInitialState:unmatched,sheets:metrics.headings,buttons:metrics.buttons,nav:metrics.nav,bodyTextLength:metrics.bodyTextLength,a11y:metrics.a11y,documentSize:metrics.size};
 fs.writeFileSync(path.join(outDir,'css-audit.json'),JSON.stringify({...report,allRules:rules},null,2));
 console.log(JSON.stringify({rules:rules.length,declarations:props,duplicates:dup.slice(0,22),duplicateTotal:dup.length,unmatched:unmatched.slice(0,30),unmatchedTotal:unmatched.length,firstDomMs:first,nav:metrics.nav,a11y:metrics.a11y,size:metrics.size},null,2));
 await p.close();
 }finally{await b.close()}
})().catch(e=>{console.error('CSS_AUDIT_FAIL',e);process.exit(1)});