const puppeteer=require('/home/ubuntu/.npm/_npx/4b4c857f6efdfb61/node_modules/puppeteer');
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
try{
const p=await b.newPage();await p.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
await p.goto('file:///home/ubuntu/itt-showcase/public/index.html',{waitUntil:'domcontentloaded'});
await p.waitForSelector('#missionSelector button');
const a=await p.$$eval('#missionSelector button',nodes=>nodes.map(n=>n.getAttribute('aria-current')));
if(a[0]!=='step'||a[1]!==null||a[2]!==null)throw Error('aria-current not valid '+JSON.stringify(a));
await p.click('#choices button:nth-child(2)');await p.click('#advance');await p.click('#runTest');
await p.waitForFunction('window.__ITT_PUBLIC_DEMO__.getState().phase==="passed"',{timeout:8000});
await p.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:undefined}));
await p.click('#copyReceipt');
await p.waitForSelector('[role=dialog]');
let d=await p.$eval('[role=dialog]',el=>({label:el.getAttribute('aria-label'),close:!!el.querySelector('button'),area:!!el.querySelector('textarea'),body:el.querySelector('textarea')?.value.includes('No real website was modified')}));
if(!d.close||!d.area||!d.body)throw Error('Fallback missing close/text '+JSON.stringify(d));
await p.click('[role=dialog] button');
if(await p.$('[role=dialog]'))throw Error('Touch close did not dismiss fallback');
const focused=await p.evaluate(()=>document.activeElement?.id);
if(focused!=='copyReceipt')throw Error('Focus not restored '+focused);
await p.click('#copyReceipt');await p.waitForSelector('[role=dialog]');await p.keyboard.press('Escape');
if(await p.$('[role=dialog]'))throw Error('Esc did not close fallback');
console.log('ACCESSIBILITY_PASS',JSON.stringify({aria:a,copyFallback:true,touchClose:true,focusReturn:true,escape:true}));
}finally{await b.close()}
})().catch(e=>{console.error('ACCESSIBILITY_FAIL',String(e));process.exit(1)});