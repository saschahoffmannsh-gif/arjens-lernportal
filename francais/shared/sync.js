/* ===================== ZENTRALER STAND (nur lesen) =====================
   Beim Öffnen jeder Seite werden Arjens zentrale Protokoll-Dokumente (textdb) gelesen und daraus
   der Fortschritt rekonstruiert: Haken, Bestwerte, Durchgänge, Test, Nachholbedarf, Probe/Spiele.
   Die Anzeige zeigt dann „lokal ODER zentral“ (Maximum). WICHTIG:
   - Es wird NUR gelesen – nie gesendet. Der lokale Fortschritt (localStorage fr_lekt_*) bleibt
     unverändert; der zentrale Stand liegt getrennt im Zwischenspeicher fr_sync_v1.
     Dadurch sieht der Stand-Abgleich (LOG.backfill) nie gemergte Daten → keine Rückkopplung,
     keine doppelten Ereignisse, report.py bleibt unverändert.
   - Kein Netz / Timeout (3 s): still mit dem lokalen (und zuletzt geladenen) Stand weiter.
   - Lokal (localhost) wird nur gelesen, wenn fr_sync_base oder fr_log_base gesetzt ist (Tests). */
(function(){
'use strict';
const W=window;
const API='https://textdb.dev/api/data/';
const PROD='arjen-lp-9560e7fda1664155a552';
const get=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k)||'null');return v==null?d:v;}catch(e){return d;}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true;}catch(e){return false;}};
const local=/^(localhost|127\.0\.0\.1|0\.0\.0\.0|)$/.test(location.hostname);
const BASE=get('fr_sync_base',null)||get('fr_log_base',null)||(local?null:PROD);
const CK='fr_sync_v1';            // {base, ts, ev:{slug:[kompakte Ereignisse]}}
const RK='fr_train_remote_v1';    // Probe/Spiele/Mini aus dem Dokument „training“ (wie bisher von train-core.js genutzt)
const TIMEOUT=3000;
const KEEP=/^(snapshot_chapter|snapshot_test|backfill_chapter|backfill_test|chapter_end|test_end|reset_chapter|reset_test|reset_lesson)$/;
const TKINDS=/^(game_end|probe_end|mini_end)$/;
let C=get(CK,null);if(!C||C.base!==BASE)C={base:BASE,ts:null,ev:{}};
const memo={};let ver=0;const subs=[];
const pick=e=>{const o={id:e.id,ts:e.ts,dev:e.dev,kind:e.kind};['ch','pct','stars','runs','best','done','seen','last','rev','solved','snap'].forEach(k=>{if(e[k]!==undefined)o[k]=e[k];});return o;};
/* eigene, evtl. noch nicht gesendete Ereignisse dieses Geräts mit einbeziehen (z. B. ein gerade gedrücktes „Zurücksetzen“) */
function events(slug){const rem=(C.ev[slug]||[]);const L=W.LOG&&W.LOG.local?W.LOG.local(slug):[];const ids=new Set(rem.map(e=>e.id));
 return rem.concat(L.filter(e=>KEEP.test(e.kind||'')&&!ids.has(e.id)).map(pick)).sort((a,b)=>a.ts<b.ts?-1:a.ts>b.ts?1:0);}
/* Rekonstruktion wie report.py: pro Gerät neuester Snapshot + Live-Ergebnisse; Durchgänge = Summe der Geräte (je max(Snapshot, live)).
   Zurücksetzen gilt pro Gerät: Einträge dieses Geräts vor seinem Reset zählen nicht mehr (Ergebnisse anderer Geräte bleiben). */
function build(ev){
 const rs={};const rk=(d,c)=>d+'|'+c;
 ev.forEach(e=>{const k=e.kind;if(k==='reset_chapter'&&e.ch)rs[rk(e.dev,e.ch)]=e.ts>(rs[rk(e.dev,e.ch)]||'')?e.ts:rs[rk(e.dev,e.ch)];
  else if(k==='reset_test')rs[rk(e.dev,'test')]=e.ts;else if(k==='reset_lesson')rs[rk(e.dev,'*')]=e.ts;});
 const after=(e,c)=>{const a=rs[rk(e.dev,c)]||'',b=rs[rk(e.dev,'*')]||'';return e.ts>a&&e.ts>b;};
 const D={};const dv=(d,c)=>{D[c]=D[c]||{};return D[c][d]=D[c][d]||{snap:null,live:0,best:null,stars:0,last:null,lastTs:''};};
 ev.forEach(e=>{const k=e.kind||'';
  if(/^(snapshot|backfill)_(chapter|test)$/.test(k)){const c=/test$/.test(k)?'test':e.ch;if(!c||!after(e,c))return;const x=dv(e.dev,c);const o=x.snap;
   if(!o||(e.rev||0)>(o.rev||0)||((e.rev||0)===(o.rev||0)&&e.ts>=o.ts))x.snap=e;}
  else if(k==='chapter_end'||k==='test_end'){const c=k==='test_end'?'test':e.ch;if(!c||!after(e,c))return;const x=dv(e.dev,c);x.live++;
   x.best=Math.max(x.best??0,e.pct||0);x.stars=Math.max(x.stars,e.stars||0);if(e.ts>=x.lastTs){x.lastTs=e.ts;x.last=e.pct??null;}}});
 const out={ch:{},test:null};
 Object.entries(D).forEach(([c,devs])=>{let runs=0,best=null,stars=0,done=false,seen=false,last=null,lastTs='';const solved=new Set();
  Object.values(devs).forEach(x=>{const s=x.snap||{};runs+=Math.max(s.runs||0,x.live);
   const b=Math.max(s.best||0,x.best||0);if(x.snap&&(s.runs||s.best)||x.live)best=Math.max(best??0,b);
   stars=Math.max(stars,s.stars||0,x.stars);if(s.done)done=true;if(s.seen||x.live)seen=true;(s.solved||[]).forEach(k=>solved.add(k));
   if(x.lastTs&&x.lastTs>=lastTs){lastTs=x.lastTs;last=x.last;}else if(!lastTs&&s.last!=null)last=s.last;});
  if(runs>0&&(best||0)>=70)done=true;
  if(c==='test'){if(runs||best!=null)out.test={runs,best,stars,last};}
  else out.ch[c]={runs,best:best||0,done,seen,solved:[...solved]};});
 return out;}
function lesson(slug){const L=W.LOG&&W.LOG.local?W.LOG.local(slug):[];const k=ver+':'+L.length;
 if(memo[slug]&&memo[slug].k===k)return memo[slug].v;const v=build(events(slug));memo[slug]={k,v};return v;}
/* lokal + zentral → Anzeige (nie zurückspeichern!) */
function mergeCh(p,r){p=p||{};if(!r)return p;const solved=Object.assign({},p.solved||{});(r.solved||[]).forEach(k=>{solved[k]=1;});
 return {seen:!!(p.seen||r.seen),best:Math.max(p.best||0,r.best||0),runs:Math.max(p.runs||0,r.runs||0),solved,done:!!(r.done||((p.runs||0)>0&&(p.best||0)>=70))};}
function mergeTest(t,r){t=t||{};if(!r)return t;const tb=t.best??null;
 return {best:tb==null&&r.best==null?null:Math.max(tb??0,r.best??0),stars:Math.max(t.stars||0,r.stars||0),runs:Math.max(t.runs||0,r.runs||0),last:(r.runs||0)>=(t.runs||0)&&r.last!=null?r.last:(t.last??r.last??null),pts:t.pts??null};}
function mergeP(p,r){p=p||{ch:{},test:{}};if(!r)return p;const ch={};new Set(Object.keys(p.ch||{}).concat(Object.keys(r.ch||{}))).forEach(id=>{ch[id]=mergeCh((p.ch||{})[id],r.ch[id]);});
 return Object.assign({},p,{ch,test:mergeTest(p.test,r.test)});}
/* Hinweis unten links – dezent, verschwindet von selbst */
function pill(t,cls){try{let el=document.getElementById('syncPill');if(!el){el=document.createElement('div');el.id='syncPill';el.className='syncpill';el.setAttribute('role','status');document.body.appendChild(el);}
 el.textContent=t;el.className='syncpill show '+(cls||'');clearTimeout(pill.t);pill.t=setTimeout(()=>{el.className='syncpill '+(cls||'');},2600);}catch(e){}}
async function getDoc(slug){const ac=typeof AbortController!=='undefined'?new AbortController():null;const tm=setTimeout(()=>{if(ac)ac.abort();},TIMEOUT);
 try{const r=await Promise.race([fetch(API+BASE+'-'+slug,{cache:'no-store',signal:ac?ac.signal:undefined}),new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),TIMEOUT+50))]);
  if(!r.ok)throw new Error('GET '+r.status);const t=await r.text();if(!t.trim())return [];const d=JSON.parse(t);return Array.isArray(d&&d.events)?d.events:[];}
 finally{clearTimeout(tm);}}
let loading=null;let state=BASE?'warte':'lokal';
function load(){if(loading)return loading;
 if(!BASE){loading=Promise.resolve({state:'lokal',changed:0});return loading;}
 if(typeof navigator!=='undefined'&&navigator.onLine===false){state='offline';pill('offline – lokaler Stand','off');loading=Promise.resolve({state,changed:0});return loading;}
 const slugs=(W.LESSONS||[]).map(m=>m.slug);
 loading=Promise.all(slugs.concat(['training']).map(s=>getDoc(s).then(ev=>[s,ev],()=>[s,null]))).then(res=>{let ok=0,changed=0;
  res.forEach(([s,ev])=>{if(ev==null)return;ok++;
   if(s==='training'){const tr=ev.filter(e=>TKINDS.test(e.kind||'')).slice(-400);const old=JSON.stringify(get(RK,[]));const nw=JSON.stringify(tr);if(old!==nw){set(RK,tr);changed++;}return;}
   const nev=ev.filter(e=>KEEP.test(e.kind||'')).map(pick);if(JSON.stringify(nev)!==JSON.stringify(C.ev[s]||[])){C.ev[s]=nev;changed++;}});
  if(ok){C.ts=new Date().toISOString();set(CK,C);}
  state=ok===res.length?'zentral':ok?'teilweise':'offline';
  if(changed){ver++;subs.forEach(f=>{try{f();}catch(e){}});}
  if(ok)pill('🔄 Stand von Arjen geladen','ok');else pill('offline – lokaler Stand','off');
  return {state,changed};});
 return loading;}
function on(f){subs.push(f);}
W.SYNC={lesson,mergeCh,mergeTest,mergeP,load,on,base:BASE,state:()=>state,build,events,doc:s=>BASE?getDoc(s):Promise.resolve([])};  // doc: weitere Dokumente lesen (z. B. Englisch)
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>load());else setTimeout(load,0);
})();
