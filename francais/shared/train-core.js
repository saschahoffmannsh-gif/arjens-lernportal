/* ===================== TRAINING-KERN: Fehlerkiste (Leitner), Missionen, Spiele, Probe-Arbeit =====================
   Lokal in localStorage, zusätzlich im zentralen Protokoll (Dokument „training“) → Abgleich zwischen Geräten.
   Fehlerkiste: Einträge mit fester id „kiste-<aufgabe>“ + rev → bei gleicher Aufgabe gewinnt die neuere Fassung. */
(function(){
'use strict';
const W=window;const DOC='training';
const get=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k)||'null');return v==null?d:v;}catch(e){return d;}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}};
const pad=n=>(n<10?'0':'')+n;
/* „Heute“ – für Tests per localStorage.fr_fake_now (ms) verschiebbar */
const now=()=>{const f=+(localStorage.getItem('fr_fake_now')||0);return f||Date.now();};
const day=t=>{const d=new Date(t==null?now():t);return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());};
const addDays=(ds,n)=>{const [y,m,d]=ds.split('-').map(Number);return day(new Date(y,m-1,d+n,12).getTime());};
const diffDays=(a,b)=>{const p=s=>{const [y,m,d]=s.split('-').map(Number);return Date.UTC(y,m-1,d);};return Math.round((p(b)-p(a))/864e5);};
const LOG=()=>W.LOG;
function ev(e){const L=LOG();if(!L)return;try{L.event(DOC,e);}catch(x){}}
/* ---------- Fehlerkiste ---------- */
const KK='fr_kiste_v1';const INT=[1,3,7];
let K=get(KK,{items:{},reset:0});K.items=K.items||{};
const save=()=>set(KK,K);
const clip=(t,n=140)=>{t=String(t==null?'':t).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();return t.length>n?t.slice(0,n-1)+'…':t;};
function emit(it){ev({id:'kiste-'+it.gid,kind:'kiste',rev:it.upd,gid:it.gid,item:it});}
function wrong(gid,meta){const it=K.items[gid]||{gid,n:0,first:now()};const was=it.st==='on'?it.box:0;
 Object.assign(it,{l:meta.l||it.l,ch:meta.ch||it.ch,p:clip(meta.p||it.p),t:meta.t||it.t,au:!!(meta.au||it.au)});if(meta.def)it.def=meta.def;
 it.box=1;it.ok=0;it.st='on';it.n=(it.n||0)+1;it.due=addDays(day(),1);it.upd=now();K.items[gid]=it;save();emit(it);return {from:was,to:1};}
function right(gid){const it=K.items[gid];if(!it||it.st!=='on')return null;if(it.due>day())return {from:it.box,to:it.box,early:true};
 const from=it.box;it.ok=(it.ok||0)+1;if(it.ok>=3){it.st='done';it.box=4;it.done=now();}else{it.box=it.ok+1;it.due=addDays(day(),INT[it.box-1]);}
 it.upd=now();save();emit(it);return {from,to:it.box};}
/** nach jeder Antwort: nur der erste Versuch zählt */
function answer(gid,ok,first,meta){if(!first)return null;return ok?right(gid):wrong(gid,meta||{});}
const active=()=>Object.values(K.items).filter(i=>i.st==='on');
function due(d){d=d||day();return active().filter(i=>i.due<=d).sort((a,b)=>a.due<b.due?-1:a.due>b.due?1:(b.n||0)-(a.n||0));}
function counts(){const c={1:0,2:0,3:0,done:0,due:0,total:0};const d=day();Object.values(K.items).forEach(i=>{if(i.st==='on'){c[i.box]++;c.total++;if(i.due<=d)c.due++;}else if(i.st==='done')c.done++;});return c;}
function nextDue(){const a=active().filter(i=>i.due>day()).sort((x,y)=>x.due<y.due?-1:1)[0];return a?a.due:null;}
function resetKiste(){const t=now();K={items:{},reset:t};save();ev({id:'kiste-reset',kind:'kiste_reset',rev:t,flush:true});}
function mergeKiste(events){let ch=0;const rs=events.filter(e=>e.kind==='kiste_reset').reduce((a,e)=>Math.max(a,e.rev||0),0);
 if(rs>(K.reset||0)){K.reset=rs;Object.keys(K.items).forEach(g=>{if((K.items[g].upd||0)<=rs){delete K.items[g];ch++;}});}
 events.forEach(e=>{if(e.kind!=='kiste'||!e.item||(e.rev||0)<=(K.reset||0))return;const cur=K.items[e.gid];if(!cur||(e.rev||0)>(cur.upd||0)){K.items[e.gid]=Object.assign({},e.item,{upd:e.rev});ch++;}});
 if(ch)save();return ch;}
/* ---------- Ereignisse (lokal + zentral) für Missionen, Spiele, Probe ---------- */
const RK='fr_train_remote_v1';
function allEvents(){const L=LOG();const loc=L?L.local(DOC):[];const rem=get(RK,[]);const ids=new Set(loc.map(e=>e.id));return loc.concat(rem.filter(e=>!ids.has(e.id)));}
let syncing=null;
function sync(){if(syncing)return syncing;const L=LOG();if(!L||!L.store){syncing=Promise.resolve(0);return syncing;}
 syncing=L.fetchAll([DOC]).then(d=>{const evs=(d[DOC]||{}).events||[];const n=mergeKiste(evs);
  set(RK,evs.filter(e=>/^(mission_end|game_end|probe_end)$/.test(e.kind)).slice(-400));return n;}).catch(()=>0).finally(()=>{setTimeout(()=>{syncing=null;},1000);});
 return syncing;}
/* Missionen & Serie */
function missionDays(){const s=new Set();allEvents().forEach(e=>{if(e.kind==='mission_end'&&e.day)s.add(e.day);});return s;}
function streak(){const s=missionDays();let d=day();if(!s.has(d))d=addDays(d,-1);let n=0;while(s.has(d)){n++;d=addDays(d,-1);}return {n,today:s.has(day())};}
function missionDone(sum){ev(Object.assign({kind:'mission_end',day:day(),flush:true},sum));}
/* Spiele */
function gameBest(g){let b=0,n=0;allEvents().forEach(e=>{if(e.kind==='game_end'&&e.game===g){n++;b=Math.max(b,e.score||0);}});return {best:b,plays:n};}
function gameEnd(g,sum){ev(Object.assign({kind:'game_end',game:g,day:day(),flush:true},sum));}
/* Probe-Klassenarbeit */
function probes(){return allEvents().filter(e=>e.kind==='probe_end').sort((a,b)=>a.ts<b.ts?-1:1);}
function probeEnd(sum){ev(Object.assign({kind:'probe_end',day:day(),flush:true},sum));}
/* Notenschlüssel (Orientierung, wie im Übungspaket: 92 / 81 / 67 / 50 / 30 %) */
const SCALE=[[92,1],[81,2],[67,3],[50,4],[30,5],[0,6]];
const grade=pct=>{for(const [p,g] of SCALE)if(pct>=p)return g;return 6;};
W.TR={now,day,addDays,diffDays,clip,DOC,INT,SCALE,grade,
 kiste:{answer,wrong,right,due,counts,active,nextDue,reset:resetKiste,items:()=>K.items,merge:mergeKiste,reload:()=>{K=get(KK,{items:{},reset:0});K.items=K.items||{};}},
 sync,allEvents,streak,missionDays,missionDone,gameBest,gameEnd,probes,probeEnd,ev};
/* ausstehende Trainings-Ereignisse nachsenden */
setTimeout(()=>{const L=LOG();if(L&&L.store&&L.state(DOC).unsent)L.flush(DOC);},2500);
})();
