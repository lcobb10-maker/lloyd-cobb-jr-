const puppeteer=require('/home/ubuntu/.npm/_npx/4b4c857f6efdfb61/node_modules/puppeteer'),fs=require('fs');
const PUBLIC='https://htmlpreview.github.io/?https://github.com/lcobb10-maker/lloyd-cobb-jr-/blob/main/showcase/failure-to-proof/index.html';
const LOCAL='file:///home/ubuntu/itt-showcase/public/index.html';
(async()=>{
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
let results=[];
try{
const cases=[
 {name:'local desktop',url:LOCAL,width:1365,height:900,slow:false},
 {name:'local mobile',url:LOCAL,width:390,height:844,slow:false},
 {name:'local ipad emulation',url:LOCAL,width:1024,height:1366,slow:false},
 {name:'public mobile standard',url:PUBLIC,width:390,height:844,slow:false},
 {name:'public mobile slow-4g',url:PUBLIC,width:390,height:844,slow:true},
];
for(const c of cases){
const p=await b.newPage();await p.setViewport({width:c.width,height:c.height,isMobile:c.width<500,hasTouch:c.width<1050});
const errors=[],networkFailures=[];
p.on('pageerror',e=>errors.push(String(e)));p.on('requestfailed',r=>networkFailures.push({url:r.url().slice(0,130),error:r.failure()?.errorText}));
await p.evaluateOnNewDocument(()=>{
window.__perf={fcp:null,lcp:null,cls:0};
try{
 new PerformanceObserver(list=>{for(const e of list.getEntries())if(e.name==='first-contentful-paint')window.__perf.fcp=e.startTime}).observe({type:'paint',buffered:true});
 new PerformanceObserver(list=>{for(const e of list.getEntries())window.__perf.lcp=e.startTime}).observe({type:'largest-contentful-paint',buffered:true});
 new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)window.__perf.cls+=e.value}).observe({type:'layout-shift',buffered:true});
}catch(e){}
});
if(c.slow){
const client=await p.createCDPSession();
await client.send('Network.enable');
await client.send('Network.emulateNetworkConditions',{offline:false,latency:150,downloadThroughput:170000,uploadThroughput:60000,connectionType:'cellular4g'});
await client.send('Emulation.setCPUThrottlingRate',{rate:4});
}
const started=Date.now();
try{
await p.goto(c.url,{waitUntil:'domcontentloaded',timeout:45000});
await p.waitForFunction('window.__ITT_PUBLIC_DEMO__?.getState().mission===0',{timeout:25000});
await new Promise(r=>setTimeout(r,c.slow?1700:700));
const perf=await p.evaluate(()=>({
 firstContentfulPaint:window.__perf?.fcp??null,
 largestContentfulPaint:window.__perf?.lcp??null,
 cumulativeLayoutShift:window.__perf?.cls??null,
 widthOverflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,
 fontStatus:document.fonts?.status??'unknown',
 resourceCount:performance.getEntriesByType('resource').length,
 resourceHosts:[...new Set(performance.getEntriesByType('resource').map(x=>{try{return new URL(x.name).host}catch(e){return x.name}}))].slice(0,10),
 title:document.title,
 ctaVisible:!!document.getElementById('jumpToGame')
}));
results.push({case:c.name,width:c.width,elapsedMs:Date.now()-started,...perf,errors,networkFailures});
console.log('PERF',JSON.stringify(results[results.length-1]));
}catch(e){results.push({case:c.name,error:String(e),errors,networkFailures});console.log('PERF_ERROR',c.name,String(e))}
await p.close();
}
}finally{await b.close()}
fs.mkdirSync('/home/ubuntu/itt-showcase/qa',{recursive:true});
fs.writeFileSync('/home/ubuntu/itt-showcase/qa/performance.json',JSON.stringify({timestamp:new Date().toISOString(),results},null,2));
if(results.some(r=>r.error||r.widthOverflow>2||r.errors.length))process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1)});