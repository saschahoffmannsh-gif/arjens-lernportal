/* ===================== LERN-PROTOKOLL (zentral gespeichert) =====================
   Jede Antwort wird lokal (localStorage) protokolliert und gebündelt an einen
   schlüssellosen JSON-Speicher (textdb.dev) geschickt – ein Dokument pro Lektion.
   Kein Konto, kein Token. Gespeichert wird nur der Vorname „Arjen“ + Lerndaten.
   Lokal (localhost) wird nichts gesendet, außer es ist ein Test-Speicher gesetzt. */
(function(){
'use strict';
const W=window;
const API='https://textdb.dev/api/data/';
const PROD='arjen-lp-9560e7fda1664155a552';
const get=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k)||'null');return v==null?d:v;}catch(e){return d;}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true;}catch(e){return false;}};
const local=/^(localhost|127\.0\.0\.1|0\.0\.0\.0|)$/.test(location.hostname);
const override=get('fr_log_base',null);
const BASE=override||(local?null:PROD);           // null → nur lokal protokollieren
const LK=s=>'fr_log_'+s;
const LEGACY=e=>/^backfill_(chapter|test|done)$/.test(e.kind||'')&&!e.snap;
let dev=get('fr_log_dev',null);if(!dev){dev=Math.random().toString(36).slice(2,10);set('fr_log_dev',dev);}
let seq=0;
const ST={};const st=s=>ST[s]=ST[s]||{busy:false,again:false,timer:null,fails:0,unsent:get('fr_log_unsent_'+s,0),remote:null};
const url=s=>API+BASE+'-'+s;
const clip=(t,n=220)=>{t=String(t==null?'':t).replace(/\s+/g,' ').trim();return t.length>n?t.slice(0,n-1)+'…':t;};
function mem(s){return get(LK(s),[]);}
function event(slug,ev){
 const {flush:fl,...rest}=ev;const e=Object.assign({id:dev+'-'+Date.now().toString(36)+'-'+(seq++).toString(36),ts:new Date().toISOString(),who:'Arjen',lesson:slug,dev},rest);
 const L=mem(slug).filter(x=>x.id!==e.id&&!(LEGACY(x)&&x.dev===dev));L.push(e);if(L.length>5000)L.splice(0,L.length-5000);set(LK(slug),L);
 const s=st(slug);s.unsent++;set('fr_log_unsent_'+slug,s.unsent);
 if(fl||s.unsent>=5)flush(slug);else sched(slug,15000);
 return e;}
function sched(slug,ms){const s=st(slug);if(!BASE)return;clearTimeout(s.timer);s.timer=setTimeout(()=>flush(slug),ms);}
function parse(txt){if(!txt||!txt.trim())return {events:[]};try{const d=JSON.parse(txt);if(d&&Array.isArray(d.events))return d;}catch(e){}return {events:[],corrupt:clip(txt,80)};}
function merged(slug,remote){
 // Vereinigung nach id; bei gleicher id gewinnt die neuere Fassung (rev). Alte, fehlerhafte Nachträge dieses Geräts werden ersetzt.
 const loc=mem(slug);const byId=new Map();let changed=false;
 for(const e of remote.events){if(LEGACY(e)&&e.dev===dev){changed=true;continue;}byId.set(e.id,e);}
 for(const e of loc){const r=byId.get(e.id);if(!r){byId.set(e.id,e);changed=true;}else if((e.rev||0)>(r.rev||0)){byId.set(e.id,e);changed=true;}}
 if(!changed)return null;const ev=[...byId.values()].sort((a,b)=>a.ts<b.ts?-1:a.ts>b.ts?1:0);
 return {v:1,who:'Arjen',lesson:slug,updated:new Date().toISOString(),n:ev.length,events:ev};}
async function flush(slug){
 if(!BASE)return 'local';const s=st(slug);
 if(s.busy){s.again=true;return 'busy';}
 if(typeof navigator!=='undefined'&&navigator.onLine===false){sched(slug,30000);return 'offline';}
 s.busy=true;clearTimeout(s.timer);
 try{
  const r=await fetch(url(slug),{cache:'no-store'});if(!r.ok)throw new Error('GET '+r.status);
  const remote=parse(await r.text());const doc=merged(slug,remote);
  if(doc){const p=await fetch(url(slug),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(doc)});if(!p.ok)throw new Error('POST '+p.status);s.remote=doc;}
  else s.remote=remote;
  s.unsent=0;set('fr_log_unsent_'+slug,0);s.fails=0;set('fr_log_last_'+slug,new Date().toISOString());
  return doc?'sent':'uptodate';
 }catch(err){s.fails++;sched(slug,Math.min(300000,5000*Math.pow(2,s.fails)));return 'error';}
 finally{s.busy=false;if(s.again){s.again=false;setTimeout(()=>flush(slug),500);}}}
/* Beim Verlassen der Seite: ohne vorheriges Lesen senden (mit letztem bekannten Stand) */
function beacon(slug){if(!BASE)return;const s=st(slug);if(!s.unsent||!s.remote||s.busy)return;const doc=merged(slug,s.remote);if(!doc)return;
 const body=JSON.stringify(doc);try{fetch(url(slug),{method:'POST',headers:{'Content-Type':'application/json'},body,keepalive:body.length<60000});}catch(e){}}
let SLUG=null;
function attach(slug){SLUG=slug;
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')beacon(slug);else if(st(slug).unsent)flush(slug);});
 W.addEventListener('pagehide',()=>beacon(slug));
 W.addEventListener('online',()=>flush(slug));
 if(st(slug).unsent)setTimeout(()=>flush(slug),1500);else setTimeout(()=>flush(slug),4000); // Stand abgleichen (heilt verlorene Daten)
}
/* Stand-Abgleich (Snapshot): Was im gespeicherten Fortschritt steht (Durchgänge, Bestwerte, gelöste Aufgaben),
   wird pro Kapitel als ein Eintrag mit fester id gemeldet und bei Änderungen ersetzt – nie doppelt.
   So kommen auch Durchgänge an, die vor dem Protokoll oder in einem alten, noch offenen Tab gemacht wurden. */
function backfill(slug,P,chapters){
 const prev=get('fr_log_snap_'+slug,{});const now=Date.now();let n=0;
 const put=(key,data)=>{const sig=JSON.stringify(data);if(prev[key]===sig)return;prev[key]=sig;n++;
  event(slug,Object.assign({id:'snap-'+dev+'-'+key,kind:key==='test'?'snapshot_test':'snapshot_chapter',snap:true,backfill:true,rev:now},data));};
 (chapters||[]).forEach(c=>{const p=(P.ch||{})[c.id];if(!p)return;const solved=Object.keys(p.solved||{});
  if(!(p.runs||p.best||solved.length))return; // nur angesehen (seen) → nichts melden: Ansehen erzeugt keine Einträge
  const asked=Object.fromEntries(c.ex.map(e=>e.id).filter(id=>(P.asked||{})[id]).map(id=>[id,P.asked[id]]));
  put(c.id,{ch:c.id,chTitle:clip(String(c.title).replace(/<[^>]+>/g,''),80),runs:p.runs||0,best:p.best||0,done:(p.runs||0)>0&&(p.best||0)>=70,seen:!!p.seen,solved,asked});});
 const t=P.test||{};if(t.runs||t.best)put('test',{ch:'test',runs:t.runs||0,best:t.best||0,stars:t.stars||0,last:t.last??null});
 set('fr_log_snap_'+slug,prev);
 // alte Nachtrag-Einträge dieses Geräts lokal entfernen (werden beim nächsten Senden auch zentral ersetzt)
 const L=mem(slug);if(L.some(x=>LEGACY(x)&&x.dev===dev)){set(LK(slug),L.filter(x=>!(LEGACY(x)&&x.dev===dev)));st(slug).unsent++;}
 if(n||st(slug).unsent)setTimeout(()=>flush(slug),800);
 return n;}
/* Lesen (für den Bericht) */
async function fetchAll(slugs){const out={};await Promise.all(slugs.map(async s=>{let ev=mem(s);let src='lokal';
 if(BASE){try{const r=await fetch(url(s),{cache:'no-store'});if(r.ok){const d=parse(await r.text());const have=new Set(d.events.map(e=>e.id));ev=d.events.concat(ev.filter(e=>!have.has(e.id)));src='zentral';}}catch(e){}}
 out[s]={src,events:ev};}));return out;}
W.LOG={event,flush,attach,backfill,fetchAll,clip,store:BASE,url:BASE?url:null,api:API,dev,state:s=>st(s),local:mem};
})();
