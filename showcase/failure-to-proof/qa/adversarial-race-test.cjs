const puppeteer=require('/home/ubuntu/.npm/_npx/4b4c857f6efdfb61/node_modules/puppeteer');
(async()=>{
const browser=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
try{
const page=await browser.newPage();await page.goto('file:///home/ubuntu/itt-showcase/public/index.html',{waitUntil:'domcontentloaded'});
const state=()=>page.evaluate(()=>window.__ITT_PUBLIC_DEMO__.getState());
const assert=(label,test)=>{console.log(test?'PASS':'FAIL',label);if(!test)throw Error(label)};
await page.click('#watchDemo');
await new Promise(r=>setTimeout(r,11000));
assert('Director started a mock test',(await state()).phase==='testing');
await page.click('#directorStop');
const canceled=await state();
assert('Stop cancels test and director',canceled.phase==='repair'&&!canceled.directorActive&&canceled.completed===0);
await new Promise(r=>setTimeout(r,2000));
assert('No ghost completion after canceled test',(await state()).completed===0);
await page.click('#runTest');await page.waitForFunction('window.__ITT_PUBLIC_DEMO__.getState().phase==="passed"',{timeout:7000});
assert('Manual restart earns real mock credit',(await state()).completed===1);
await page.click('#watchDemo');
await new Promise(r=>setTimeout(r,400));
await page.click('#missionSelector button:nth-child(3)');
const switched=await state();
assert('Manual mission select interrupts director',switched.mission===2&&!switched.directorActive);
await new Promise(r=>setTimeout(r,8000));
assert('No delayed director corruption',(await state()).mission===2);
console.log('ADVERSARIAL_RACE_TEST_PASS');
} finally{await browser.close()}
})().catch(e=>{console.error('FAIL',String(e));process.exit(1)});