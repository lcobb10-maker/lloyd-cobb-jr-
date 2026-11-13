#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 uResolution;
uniform float uTime,uRepaired,uScene;
uniform vec2 uPointer;
#define STEPS 54
#define MAX_DIST 24.
float sdBox(vec3 p,vec3 b){vec3 q=abs(p)-b;return length(max(q,0.))+min(max(q.x,max(q.y,q.z)),0.);}
float sdTorus(vec3 p,vec2 t){return length(vec2(length(p.xy)-t.x,p.z))-t.y;}
vec2 nearest(vec2 a,vec2 b){return a.x<b.x?a:b;}
vec2 world(vec3 p){
 vec2 d=vec2(p.y+1.58,1.);
 d=nearest(d,vec2(sdBox(p-vec3(0.,3.2,4.),vec3(9.,.09,12.)),2.));
 d=nearest(d,vec2(sdBox(p-vec3(0.,-.10,7.2),vec3(9.,3.,.13)),2.));
 vec3 side=p;side.x=abs(side.x)-3.4;
 d=nearest(d,vec2(sdBox(side-vec3(0.,.55,3.0),vec3(.16,2.1,.24)),3.));
 d=nearest(d,vec2(sdBox(side-vec3(0.,2.2,3.0),vec3(.42,.09,1.8)),3.));
 vec3 q=p-vec3(-.73,-.16,1.35);
 d=nearest(d,vec2(length(q)-.86,4.));
 d=nearest(d,vec2(sdTorus(q,vec2(1.12,.073)),5.));
 q.xz=mat2(.79,-.613,.613,.79)*q.xz;
 d=nearest(d,vec2(sdTorus(q,vec2(1.21,.031)),6.));
 d=nearest(d,vec2(sdBox(p-vec3(-.73,-1.32,1.35),vec3(1.15,.22,1.11)),3.));
 d=nearest(d,vec2(sdBox(p-vec3(-.73,2.58,1.35),vec3(2.8,.05,.09)),5.));
 return d;
}
vec3 calcNormal(vec3 p){
 vec2 e=vec2(.004,0.);
 return normalize(vec3(world(p+e.xyy).x-world(p-e.xyy).x,
 world(p+e.yxy).x-world(p-e.yxy).x,
 world(p+e.yyx).x-world(p-e.yyx).x));
}
float ao(vec3 p,vec3 n){
 float a=0.,scale=1.;
 for(int i=1;i<=3;i++){
  float h=.09*float(i);
  a+=(h-world(p+n*h).x)*scale;
  scale*=.65;
 }
 return clamp(1.-a*2.0,.48,1.);
}
float shadow(vec3 p,vec3 lightDir){
 float s=1.,t=.08;
 for(int i=0;i<11;i++){
  float h=world(p+lightDir*t).x;
  s=min(s,10.*h/t);
  t+=clamp(h,.08,.40);
  if(h<.008||t>4.)break;
 }
 return clamp(s,.25,1.);
}
vec3 material(float id,vec3 p){
 if(id<1.5){
  vec2 tile=fract(p.xz*.29);
  float seams=smoothstep(.965,.995,max(tile.x,tile.y));
  float m=sin(p.x*2.6+p.z*.44+1.3*sin(p.z*1.1));
  return mix(vec3(.041,.075,.092),vec3(.105,.15,.176),.47+.24*m)*(1.-.22*seams);
 }
 if(id<2.5)return vec3(.05,.068,.08);
 if(id<3.5)return vec3(.24,.24,.225);
 if(id<4.5)return uScene<.5?vec3(.22,.37,.42):(uScene<1.5?vec3(.18,.20,.31):vec3(.17,.37,.31));
 if(id<5.5)return mix(vec3(.56,.31,.11),vec3(.97,.75,.38),uRepaired*.4);
 return vec3(.48,.57,.65);
}
void main(){
 vec2 uv=(gl_FragCoord.xy-.5*uResolution)/uResolution.y;
 vec3 ro=vec3(uPointer.x*.13,.55+uPointer.y*.09,-5.9);
 vec3 target=vec3(.42,-.2,1.45);
 vec3 forward=normalize(target-ro);
 vec3 right=normalize(cross(vec3(0.,1.,0.),forward));
 vec3 up=cross(forward,right);
 vec3 rd=normalize(uv.x*right+uv.y*up+forward*1.35);
 vec3 bg=mix(vec3(.009,.023,.043),vec3(.061,.087,.101),clamp(uv.y+.46,0.,1.));
 float travel=0.,id=-1.;
 for(int i=0;i<STEPS;i++){
  vec2 h=world(ro+rd*travel);
  if(h.x<.009){id=h.y;break;}
  if(travel>MAX_DIST)break;
  travel+=clamp(h.x*.79,.018,.63);
 }
 vec3 col=bg;
 if(id>0.){
  vec3 p=ro+rd*travel;
  vec3 n=calcNormal(p);
  vec3 view=normalize(ro-p);
  vec3 L=normalize(vec3(-.52,.80,-.4));
  vec3 fill=normalize(vec3(.75,.35,-.3));
  float ambient=ao(p,n);
  float shaded=shadow(p+n*.025,L);
  float metallic=id>2.5?.85:.38;
  vec3 base=material(id,p);
  vec3 key=mix(vec3(.65,.84,1.),vec3(.65,1.,.81),uRepaired*.55);
  float diffuse=max(dot(n,L),0.)*shaded;
  float bounce=max(dot(n,fill),0.);
  float spec=pow(max(dot(n,normalize(L+view)),0.),metallic>0.6?100.:35.);
  float fres=pow(1.-max(dot(n,view),0.),5.);
  col=base*(vec3(.19,.24,.28)+key*diffuse*1.2+vec3(.18,.22,.26)*bounce*.58)*ambient;
  col+=spec*shaded*vec3(1.,.8,.50)*(metallic>0.6?1.55:.55);
  col+=fres*vec3(.15,.27,.33)*(metallic*.85);
  if(id>4.5&&id<6.9)col+=vec3(.92,.56,.26)*(.38+uRepaired*.76);
  if(id<1.5){
    vec3 refl=reflect(rd,n);
    float glint=pow(max(dot(refl,normalize(vec3(.15,.7,1.))),0.),18.);
    col+=vec3(.18,.32,.42)*glint*.44;
    col+=vec3(.21,.32,.35)*exp(-23.*abs(p.x))*exp(-.16*abs(p.z-1.3))*.23;
  }
  col=mix(col,bg,1.-exp(-.010*travel*travel));
 }
 float bloom=exp(-8.*length(uv-vec2(0.,.04)));
 col+=vec3(.08,.16,.20)*bloom*(.2+uRepaired*.11);
 col*=clamp(1.-.18*pow(length(uv)*1.25,2.),.60,1.);
 col*=2.45;
 col=col/(1.+col);
 col=pow(max(col,0.),vec3(.78));
 fragColor=vec4(col,1.);
}