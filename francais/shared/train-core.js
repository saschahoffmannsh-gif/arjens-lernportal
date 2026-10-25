/* ===================== TRAINING-KERN: Probe-Klassenarbeit + Spiele =====================
   Ereignisse lokal (localStorage) und im zentralen Protokoll (Dokument „training“).
   Ergebnisse anderer Geräte werden beim Abgleich zwischengespeichert (für Rekorde und frühere Probe-Arbeiten). */
(function(){
'use strict';
const W=window;const DOC='training';
const get=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k)||'null');return v==null?d:v;}catch(e){return d;}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}};
const pad=n=>(n<10?'0':'')+n;
/* „Heute“ – für Tests per localStorage.fr_fake_now (ms) verschiebbar */
const now=()=>{const f=+(localStorage.getItem('fr_fake_now')||0);return f||Date.now();};
const day=t=>{const d=new Date(t==null?now():t);return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());};
const LOG=()=>W.LOG;
function ev(e){const L=LOG();if(!L)return;try{L.event(DOC,e);}catch(x){}}
const clip=(t,n=140)=>{t=String(t==null?'':t).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();return t.length>n?t.slice(0,n-1)+'…':t;};
/* frühere Fehlerkiste (entfernt): Daten still löschen */
try{localStorage.removeItem('fr_kiste_v1');}catch(e){}
const KINDS=/^(game_end|probe_end|mini_end)$/;
const RK='fr_train_remote_v1';
function allEvents(){const L=LOG();const loc=(L?L.local(DOC):[]).filter(e=>KINDS.test(e.kind||''));const rem=get(RK,[]).filter(e=>KINDS.test(e.kind||''));const ids=new Set(loc.map(e=>e.id));return loc.concat(rem.filter(e=>!ids.has(e.id)));}
let syncing=null;
function sync(){if(syncing)return syncing;const L=LOG();if(!L||!L.store){syncing=Promise.resolve(0);return syncing;}
 syncing=L.fetchAll([DOC]).then(d=>{const evs=((d[DOC]||{}).events||[]).filter(e=>KINDS.test(e.kind||''));set(RK,evs.slice(-400));return evs.length;}).catch(()=>0).finally(()=>{setTimeout(()=>{syncing=null;},1000);});
 return syncing;}
/* Spiele */
function gameBest(g){let b=0,n=0;allEvents().forEach(e=>{if(e.kind==='game_end'&&e.game===g){n++;b=Math.max(b,e.score||0);}});return {best:b,plays:n};}
function gameEnd(g,sum){ev(Object.assign({kind:'game_end',game:g,day:day(),flush:true},sum));}
/* Probe-Klassenarbeit */
function probes(){return allEvents().filter(e=>e.kind==='probe_end').sort((a,b)=>a.ts<b.ts?-1:1);}
function probeEnd(sum){ev(Object.assign({kind:'probe_end',day:day(),flush:true,pkg:W.PK?W.PK.currentKA()||undefined:undefined},sum));}
/* Mini-Probearbeit eines Pakets (Hausaufgaben) */
function miniEnd(sum){ev(Object.assign({kind:'mini_end',day:day(),flush:true},sum));}
function minis(pkg){return allEvents().filter(e=>e.kind==='mini_end'&&(!pkg||e.pkg===pkg)).sort((a,b)=>a.ts<b.ts?-1:1);}
/* Notenschlüssel (Orientierung, wie im Übungspaket: 92 / 81 / 67 / 50 / 30 %) */
const SCALE=[[92,1],[81,2],[67,3],[50,4],[30,5],[0,6]];
const grade=pct=>{for(const [p,g] of SCALE)if(pct>=p)return g;return 6;};
W.TR={now,day,clip,DOC,SCALE,grade,sync,allEvents,gameBest,gameEnd,probes,probeEnd,miniEnd,minis,ev};
/* ausstehende Trainings-Ereignisse nachsenden */
setTimeout(()=>{const L=LOG();if(L&&L.store&&L.state(DOC).unsent)L.flush(DOC);},2500);
})();
