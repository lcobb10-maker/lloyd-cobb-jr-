/* ITT cinematic studio — additive, no network, WebGL2 with CSS fallback.
   An actual analytic 3D render, not a claim of photogrammetry or live client assets.
   Quality auto-scales; stops offscreen; respects reduced motion/data usage.
*/
(()=>{
'use strict';
const stage=document.getElementById('stage');
const surface=document.getElementById('visualScene');
const cssOrb=document.getElementById('visualOrb');
if(!stage||!surface)return;
const toggle=document.getElementById('qualityToggle');
if(!toggle)return;
let lifecycle=null,initialized=false;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const saveData=!!navigator.connection?.saveData;
const metrics={mode:'css-fallback',backend:'none',drawnFrames:0,avgIntervalMs:null,quality:0,reducedMotion:reduced,saveData,active:false,resolution:null,error:null};
window.__ITT_VISUAL_METRICS__=metrics;
if(reduced||saveData){
 metrics.error=reduced?'reduced-motion requested':'save-data requested';
 toggle.disabled=true;toggle.textContent=reduced?'LITE · REDUCED MOTION':'LITE · DATA SAVER';return;
}
let gl=null,canvas=null,program=null;
function initialize(){
try{
 canvas=document.createElement('canvas');canvas.className='spatial-render';
 canvas.setAttribute('aria-hidden','true');
 canvas.style.cssText='position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:0;transition:opacity .65s ease';
 surface.insertBefore(canvas,surface.firstChild);
 gl=canvas.getContext('webgl2',{antialias:false,alpha:false,depth:false,stencil:false,preserveDrawingBuffer:false,powerPreference:'low-power'});
 if(!gl)throw Error('WebGL2 unavailable');
 const vertex='#version 300 es\nprecision highp float;\nvoid main(){vec2 p=vec2((gl_VertexID<<1)&2,gl_VertexID&2);gl_Position=vec4(p*2.-1.,0.,1.);}';
 const frag=/*BUILD_FRAGMENT*/;
 function shader(type,source){
  const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);
  if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error('shader compile: '+gl.getShaderInfoLog(s));
  return s;
 }
 const vs=shader(gl.VERTEX_SHADER,vertex),fs=shader(gl.FRAGMENT_SHADER,frag);
 program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);
 if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error('shader link: '+gl.getProgramInfoLog(program));
 gl.useProgram(program);
 gl.deleteShader(vs);gl.deleteShader(fs);
 gl.bindVertexArray(gl.createVertexArray());
 const uniforms={
  resolution:gl.getUniformLocation(program,'uResolution'),
  time:gl.getUniformLocation(program,'uTime'),
  repaired:gl.getUniformLocation(program,'uRepaired'),
  scene:gl.getUniformLocation(program,'uScene'),
  pointer:gl.getUniformLocation(program,'uPointer')
 };
 const mobile=matchMedia('(max-width:720px)').matches;
 const cores=navigator.hardwareConcurrency||4;
 const low=mobile||(navigator.deviceMemory&&navigator.deviceMemory<=4)||cores<=4;
 let quality=low?.80:.92;
 const minQuality=low?.48:.60;
 let frames=0,average=0,last=0,raf=0,active=false,paused=true,dead=false,slowSamples=0,everDrawn=false;
 const pointer={x:0,y:0};
 const sceneState=()=>({
  scene:({route:0,trust:1,lead:2})[document.getElementById('visualScene')?.dataset.mission]||0,
  repaired:stage.classList.contains('repaired')?1:0
 });
 function resize(){
  const rect=surface.getBoundingClientRect();
  if(rect.width<2||rect.height<2)return;
  const w=Math.max(2,Math.min(960,Math.round(rect.width*quality)));
  const h=Math.max(2,Math.min(540,Math.round(rect.height*quality)));
  if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h)}
  metrics.quality=quality;metrics.resolution=[w,h];
 }
 function stop(){active=false;metrics.active=false;cancelAnimationFrame(raf)}
 function disable(reason){
  stop();dead=true;metrics.mode='css-fallback';metrics.error=reason;
  toggle.textContent='LITE · GPU LIMITED';toggle.setAttribute('aria-pressed','false');toggle.disabled=true;
  if(canvas){canvas.style.opacity='0';if(cssOrb)cssOrb.style.opacity='1';setTimeout(()=>canvas.remove(),750)}
 }
 function draw(ms){
  if(!active||paused||dead)return;
  const target=low?65:40;
  if(ms-last<target){raf=requestAnimationFrame(draw);return}
  const delta=last?ms-last:target;
  last=ms;
  resize();
  const s=sceneState();
  gl.uniform2f(uniforms.resolution,canvas.width,canvas.height);
  gl.uniform1f(uniforms.time,ms*.001);
  gl.uniform1f(uniforms.repaired,s.repaired);
  gl.uniform1f(uniforms.scene,s.scene);
  gl.uniform2f(uniforms.pointer,pointer.x,pointer.y);
  gl.drawArrays(gl.TRIANGLES,0,3);
  frames++;
  if(!everDrawn){canvas.style.opacity='1';if(cssOrb){cssOrb.style.transition='opacity .35s ease';cssOrb.style.opacity='0'}everDrawn=true}
  average=frames===1?delta:average*.92+delta*.08;
  metrics.drawnFrames=frames;metrics.avgIntervalMs=Math.round(average*10)/10;
  if(frames%8===0){
   if(average>105)slowSamples++;
   else slowSamples=Math.max(0,slowSamples-1);
   if(slowSamples>=2){
    slowSamples=0;
    if(quality>minQuality+.02){quality=Math.max(minQuality,quality*.75);resize()}
    else if(average>140){disable('frame pacing below minimum');return}
   }
  }
  raf=requestAnimationFrame(draw);
 }
 function start(){
  if(active||paused||dead)return;
  active=true;metrics.active=true;raf=requestAnimationFrame(draw);
 }
 const io=new IntersectionObserver(entries=>{
  paused=!lifecycle?.enabled||!entries[0]?.isIntersecting||document.hidden;
  if(paused)stop();else start()
 },{threshold:.06});
 io.observe(stage);
 document.addEventListener('visibilitychange',()=>{
  paused=!lifecycle?.enabled||document.hidden||stage.getBoundingClientRect().bottom<0||stage.getBoundingClientRect().top>innerHeight;
  if(paused)stop();else start();
 });
 if(!low){
  stage.addEventListener('pointermove',e=>{
   const rect=stage.getBoundingClientRect();
   pointer.x=Math.max(-1,Math.min(1,((e.clientX-rect.left)/Math.max(1,rect.width)-.5)*2));
   pointer.y=Math.max(-1,Math.min(1,((e.clientY-rect.top)/Math.max(1,rect.height)-.5)*2));
  },{passive:true});
 }
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();disable('webgl context lost')},{once:true});
 metrics.mode='webgl2-studio';metrics.backend='WebGL2 analytic shader';metrics.quality=quality;
 lifecycle={enabled:true,set(enabled){
   this.enabled=enabled;
   if(!enabled){
     paused=true;stop();canvas.style.opacity='0';
     if(cssOrb)cssOrb.style.opacity='1';
     metrics.mode='css-fallback';toggle.textContent='✦ CINEMATIC 3D';toggle.setAttribute('aria-pressed','false');
   }else{
     metrics.mode='webgl2-studio';toggle.textContent='✓ CINEMATIC ON';toggle.setAttribute('aria-pressed','true');
     if(cssOrb&&everDrawn)cssOrb.style.opacity='0';
     canvas.style.opacity=everDrawn?'1':'0';
     const b=stage.getBoundingClientRect();
     paused=document.hidden||b.bottom<0||b.top>innerHeight;
     if(!paused)start();
   }
 }};
 toggle.textContent='✓ CINEMATIC ON';toggle.setAttribute('aria-pressed','true');
}catch(e){
 metrics.error=String(e).slice(0,230);metrics.mode='css-fallback';
 canvas?.remove();if(cssOrb)cssOrb.style.opacity='1';
 toggle.textContent='LITE MODE';toggle.setAttribute('aria-pressed','false');toggle.disabled=true;
}
}
toggle.addEventListener('click',()=>{
 if(!initialized){initialized=true;initialize()}
 else if(lifecycle)lifecycle.set(!lifecycle.enabled);
});
if(new URLSearchParams(location.search).get('cinematic')==='1'){
 const schedule=window.requestIdleCallback||((fn)=>setTimeout(fn,250));
 schedule(()=>{if(!toggle.disabled)toggle.click()},{timeout:1800});
}
})();