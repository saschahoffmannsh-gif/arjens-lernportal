/* Pakete: Hilfsfunktionen (Liste, Fortschritt, Probe-Ergebnis, Status) – Startseite, Fachseite, Listen, Paketseite */
(function(){
'use strict';
const W=window;const ALL=()=>W.PACKAGES||[];const LSS=()=>W.LESSONS||[];
const TYP={klassenarbeit:{t:'Klassenarbeiten',one:'Klassenarbeit',ic:'🎯',dir:'klassenarbeiten',c:'#1e3a8a'},hausaufgabe:{t:'Hausaufgaben',one:'Hausaufgabe',ic:'📝',dir:'hausaufgaben',c:'#0d9488'}};
const now=()=>{const f=+(localStorage.getItem('fr_fake_now')||0);return f||Date.now();};
const dateOf=p=>{const [y,m,d]=String(p.datum||'').split('-').map(Number);return y?new Date(y,m-1,d,8,0,0):null;};
const days=p=>{const d=dateOf(p);if(!d)return null;const t=new Date(now());t.setHours(0,0,0,0);const x=new Date(d);x.setHours(0,0,0,0);return Math.round((x-t)/864e5);};
const WD=['So','Mo','Di','Mi','Do','Fr','Sa'];
const fmtDate=p=>{const d=dateOf(p);return d?`${WD[d.getDay()]} ${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}.${d.getFullYear()}`:'';};
const slugs=p=>(p.teile||[]).flatMap(t=>t.lektionen||[]);
const lessons=p=>slugs(p).map(s=>LSS().find(m=>m.slug===s)).filter(Boolean);
const list=(fach,typ)=>ALL().filter(p=>(!fach||p.fach===fach)&&(!typ||p.typ===typ));
const get=id=>ALL().find(p=>p.id===id)||null;
const done=p=>p.status==='erledigt'||(days(p)!=null&&days(p)<0);
const sorted=L=>{const up=L.filter(p=>!done(p)).sort((a,b)=>(a.datum<b.datum?-1:1)),old=L.filter(done).sort((a,b)=>(a.datum<b.datum?1:-1));return up.concat(old);};
/* Probe-Ergebnis: große Probe = probe_end (alte Einträge ohne pkg gehören zur ersten Klassenarbeit), Mini = mini_end mit pkg */
const currentKA=()=>{const k=sorted(ALL().filter(p=>p.probe&&p.probe.typ==='gross'));return k[0]?k[0].id:null;};
const firstKA=()=>{const k=ALL().filter(p=>p.probe&&p.probe.typ==='gross').sort((a,b)=>a.datum<b.datum?-1:1)[0];return k?k.id:null;};
function probe(p){const TR=W.TR;if(!p.probe||!TR)return null;const mini=p.probe.typ==='mini';
 const ev=TR.allEvents().filter(e=>mini?(e.kind==='mini_end'&&e.pkg===p.id):(e.kind==='probe_end'&&(e.pkg||firstKA())===p.id)).sort((a,b)=>a.ts<b.ts?-1:1);
 const pc=e=>e.pct!=null?e.pct:Math.floor((e.total||0)/(e.max||1)*100);
 if(!ev.length)return {n:0,mini};const last=ev[ev.length-1];const best=ev.reduce((a,e)=>pc(e)>pc(a)?e:a,ev[0]);
 return {n:ev.length,mini,last:{pct:pc(last),grade:last.grade,ts:last.ts},best:{pct:pc(best),grade:best.grade}};}
const probeHref=p=>!p.probe?null:p.probe.typ==='mini'?'training/#mini-'+p.id:'training/#probe';
function progress(p){const PR=W.PROG;const L=lessons(p);let d=0,t=0,any=false;L.forEach(m=>{const x=PR.lesson(m);d+=x.done;t+=x.total;if(x.started||x.test!=null)any=true;});
 const nh=PR.nh(L);return {done:d,total:t,pct:Math.round(d/Math.max(1,t)*100),any,nh,nhOpen:nh.filter(x=>x.key!=='fertig').length,n:L.length};}
W.PK={TYP,list,get,lessons,slugs,sorted,done,days,fmtDate,dateOf,probe,probeHref,progress,firstKA,currentKA,now};
})();
