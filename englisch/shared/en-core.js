/* ===================== ENGLISCH: Kern (Fortschritt, Freischaltung, Protokoll, Audio, Wiederholung) =====================
   Alles wird als Ereignis protokolliert (LOG, eigenes Dokument <base>-en-vokabeln-unit-1 auf textdb.dev, nur Vorname „Arjen“).
   Der Fortschritt wird aus den Ereignissen berechnet: eigene (lokal) ∪ zentral (gelesen über SYNC.doc) – nie zurückgeschrieben.
   Freischaltung: Teil n ist ab Starttag + (n−1) Tagen offen (Testdatum: localStorage fr_fake_now). */
(function(){
'use strict';
const W=window,E=W.EN;
const get=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k)||'null');return v==null?d:v;}catch(e){return d;}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}};
const SLUG='en-'+E.pkg.id;
const WM={};E.words.forEach(w=>{WM[w.k]=w;});
const esc=t=>String(t==null?'':t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
/* ---------- Datum / Freischaltung ---------- */
const now=()=>{const f=+(localStorage.getItem('fr_fake_now')||0);return f||Date.now();};
const day0=d=>{const x=new Date(d);x.setHours(0,0,0,0);return x;};
const startD=()=>{const [y,m,d]=E.pkg.start.split('-').map(Number);return new Date(y,m-1,d);};
const openDate=n=>{const d=startD();d.setDate(d.getDate()+n-1);return d;};
const isOpen=n=>day0(now())>=openDate(n);
const WD=['So','Mo','Di','Mi','Do','Fr','Sa'];
const fmt=d=>`${WD[d.getDay()]} ${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}.`;
const todayN=()=>{let t=0;E.lessons.forEach(l=>{if(isOpen(l.n))t=l.n;});return t;};
/* ---------- Ereignisse ---------- */
const RK='en_sync_v1';const LOGB=(W.LOG&&W.LOG.store)||null;
let RC=get(RK,null);if(!RC||RC.base!==LOGB)RC={base:LOGB,ev:[]};
const subs=[];let ver=0,memo=null;
function events(){const L=W.LOG?W.LOG.local(SLUG):[];const k=ver+':'+L.length;if(memo&&memo.k===k)return memo.v;
 const by=new Map();RC.ev.forEach(e=>by.set(e.id,e));L.forEach(e=>by.set(e.id,e));
 const v=[...by.values()].filter(e=>/^en_/.test(e.kind||'')).sort((a,b)=>a.ts<b.ts?-1:1);memo={k,v};return v;}
function log(ev){if(!W.LOG)return;W.LOG.event(SLUG,ev);}
async function load(){const S=W.SYNC;if(!S||!S.base||!S.doc)return;
 try{const ev=await S.doc(SLUG);const nev=ev.filter(e=>/^en_/.test(e.kind||''));
  if(JSON.stringify(nev.map(e=>e.id))!==JSON.stringify(RC.ev.map(e=>e.id))){RC={base:LOGB,ev:nev};set(RK,RC);ver++;subs.forEach(f=>{try{f();}catch(e){}});}}catch(e){}}
/* ---------- Fortschritt ---------- */
const GAMES=['entdecker','memory','baukasten','luecke','blitz','schreiben','check'];
function lesson(n){const ev=events();const o={step:0,games:{},runs:0,best:null,last:null,done:false};
 ev.forEach(e=>{if(e.les!==n)return;
  if(e.kind==='en_game_end'){o.step=Math.max(o.step,e.step||0);const g=o.games[e.game]=o.games[e.game]||{plays:0,stars:0,best:0};g.plays++;g.stars=Math.max(g.stars,e.stars||0);g.best=Math.max(g.best,e.score||0);}
  else if(e.kind==='en_lesson_end'){o.runs++;o.best=Math.max(o.best??0,e.pct||0);o.last=e.pct;o.step=Math.max(o.step,99);}});
 o.done=o.runs>0&&(o.best||0)>=70;return o;}
function records(){const r={};events().forEach(e=>{if(e.kind==='en_game_end'){r[e.game]=Math.max(r[e.game]||0,e.score||0);}});return r;}
/* Wortstatistik für die Wiederholung: richtig/falsch + zuletzt gesehen */
function wstats(){const s={};const g=k=>s[k]=s[k]||{ok:0,bad:0,last:''};
 events().forEach(e=>{(e.okW||[]).forEach(k=>{const x=g(k);x.ok++;x.last=e.ts;});(e.badW||[]).forEach(k=>{const x=g(k);x.bad++;x.last=e.ts;});});return s;}
/* Wiederholung (Spaced Repetition light): Wörter aus früheren, schon offenen Teilen – falsche öfter, lange nicht gesehene eher */
function reviewPick(n,cur){const st=wstats();const pool=E.words.filter(w=>w.les<cur&&isOpen(w.les));const t=now();
 const sc=w=>{const x=st[w.k]||{ok:0,bad:0,last:''};const age=x.last?(t-Date.parse(x.last))/864e5:5;return 1+x.bad*3-Math.min(3,x.ok*0.4)+Math.min(4,age)+Math.random()*2.5;};
 return pool.map(w=>[sc(w),w]).sort((a,b)=>b[0]-a[0]).slice(0,n).map(x=>x[1]);}
function pkgProgress(){const L=E.lessons.map(l=>lesson(l.n));const d=L.filter(x=>x.done).length;return {done:d,total:E.lessons.length,pct:Math.round(d/E.lessons.length*100),L};}
/* ---------- Audio (MP3, britische Stimme) ---------- */
const AF=new Set(W.EN_AUDIO||[]);let AEL=null;const AB=(W.PAGE&&W.PAGE.aroot)||'shared/audio/';
function play(k){if(!k||!AF.has(k))return false;try{if(!AEL){AEL=new Audio();AEL.preload='auto';AEL.setAttribute('playsinline','');}AEL.pause();AEL.src=AB+k+'.mp3';const p=AEL.play();if(p&&p.catch)p.catch(()=>{});return true;}catch(e){return false;}}
function stop(){try{if(AEL)AEL.pause();}catch(e){}}
document.addEventListener('click',ev=>{const b=ev.target.closest('[data-a]');if(!b)return;ev.preventDefault();play(b.dataset.a);b.classList.remove('pl');void b.offsetWidth;b.classList.add('pl');});
const spk=(k,cls='')=>k&&AF.has(k)?`<button type="button" class="en-spk ${cls}" data-a="${k}" aria-label="Anhören">🔊</button>`:'';
/* ---------- Antworten vergleichen (Toleranz bei Kleinigkeiten) ---------- */
const norm=t=>String(t||'').toLowerCase().replace(/[’`´]/g,"'").replace(/[.!?…,]/g,' ').replace(/\s+/g,' ').trim();
const lev=(a,b)=>{const m=a.length,n=b.length;const d=Array.from({length:m+1},(_,i)=>[i].concat(Array(n).fill(0)));for(let j=1;j<=n;j++)d[0][j]=j;
 for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return d[m][n];};
function judge(w,inp){const x=norm(inp);if(!x)return {ok:false,exact:false};const acc=w.acc.map(norm).concat(w.acc.map(a=>norm(a).replace(/^to /,'')));
 if(acc.includes(x)||acc.includes(x.replace(/^to /,'')))return {ok:true,exact:true};
 const y=x.replace(/^to /,'');let best=99;acc.forEach(a=>{best=Math.min(best,lev(y,a.replace(/^to /,'')));});
 const L=norm(w.bt).length;if(best<=1&&L>=4||best<=2&&L>=9)return {ok:true,exact:false};return {ok:false,exact:false};}
W.ENC={E,WM,SLUG,esc,now,openDate,isOpen,fmt,todayN,events,log,load,on:f=>subs.push(f),lesson,records,wstats,reviewPick,pkgProgress,play,stop,spk,judge,norm,GAMES,get,set};
if(W.LOG)W.LOG.attach(SLUG);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>load());else setTimeout(load,0);
})();
