/* Fachseite (Hausaufgaben / Klassenarbeiten) und Paket-Listen – erzeugt aus packages.js */
(function(){
'use strict';
const W=window,PK=W.PK,PG=W.PAGE||{},$=s=>document.querySelector(s);
const esc=t=>String(t==null?'':t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const FACH={francais:{n:'Französisch',ic:'🇫🇷',c:'#1e3a8a',k:'6. Klasse · 1. Lernjahr'}}[PG.fach]||{n:PG.fach,ic:'📘',c:'#1e3a8a',k:''};
const R=PG.root||'';  // Pfad zum Fachordner (francais/)
const cdTxt=d=>d==null?'':d>1?`in ${d} Tagen`:d===1?'morgen':d===0?'heute':'vorbei';
const ring=(pct,lbl,col)=>`<span class="pk-ring" style="--p:${pct==null?0:pct};--rc:${col||'var(--c)'}"><b>${pct==null?'–':pct+'<small>%</small>'}</b></span>${lbl?`<span class="pk-rl">${lbl}</span>`:''}`;
/* ---------- Fachseite ---------- */
function fachPage(){
 const h=location.hash;if(/^#(bericht|nachholbedarf)$/.test(h)){const k=PK.currentKA();if(k){location.replace(R+k+'/'+h);return;}}
 const tile=typ=>{const T=PK.TYP[typ];const L=PK.sorted(PK.list(PG.fach,typ));const up=L.filter(p=>!PK.done(p));
  const nhOpen=L.reduce((a,p)=>a+PK.progress(p).nhOpen,0);const nx=up[0];const pr=nx?PK.probe(nx):null;
  let info='';
  if(!L.length)info=`<span class="ft-s">Noch keine – hier erscheinen Übungen, wenn etwas noch nicht sitzt.</span>`;
  else{info=`<span class="ft-s">${L.length} ${L.length===1?'Paket':'Pakete'}${up.length&&up.length!==L.length?` · ${up.length} aktuell`:''}</span>`;
   if(nx){const d=PK.days(nx);info+=`<span class="ft-next"><b>${esc(nx.titel)}</b> · ${PK.fmtDate(nx)}${typ==='klassenarbeit'&&d!=null?` <span class="ft-cd">⏳ ${cdTxt(d)}</span>`:''}</span>`;
    const pg=PK.progress(nx);info+=`<span class="ft-meta"><span class="ft-bar"><i style="width:${pg.pct}%"></i></span>${pg.pct} % der Lektionen${pr&&pr.n?` · Probe: ${pr.last.pct} % (Note ${pr.last.grade})`:''}</span>`;}}
  return `<a class="ftile tap" href="${T.dir}/" style="--c:${T.c}" data-typ="${typ}">${nhOpen?`<span class="pt-nh">🔁 ${nhOpen}</span>`:''}<span class="ft-ic">${T.ic}</span><span class="ft-b"><span class="ft-t">${T.t}</span>${info}</span><span class="ft-go">›</span></a>`;};
 $('#main').innerHTML=`<section class="fach-hero" style="--c:${FACH.c}"><span class="fh-ic">${FACH.ic}</span><div><div class="ov-k">${FACH.k}</div><h1>${FACH.n}</h1></div></section>
 <div class="ftiles">${tile('klassenarbeit')}${tile('hausaufgabe')}</div>`;}
/* ---------- Paket-Liste ---------- */
function card(p){const T=PK.TYP[p.typ];const d=PK.days(p),dn=PK.done(p),pg=PK.progress(p),pr=PK.probe(p);const dt=PK.dateOf(p);
 const MON=['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'];
 const pl=p.probe?(p.probe.typ==='mini'?'Mini-Probearbeit':'Probe-Klassenarbeit'):'';
 return `<a class="pkcard tap${dn?' pk-done':''}" href="../${p.id}/" style="--c:${T.c}" data-pkg="${p.id}">
 <span class="pk-top"><span class="pk-date">${dt?`<b>${dt.getDate()}</b><small>${MON[dt.getMonth()]}</small>`:'–'}</span><span class="pk-tb"><span class="pk-t">${esc(p.titel)}</span><span class="pk-d">${PK.fmtDate(p)}${p.typ==='hausaufgabe'?' · Hausaufgabe':''}</span></span>
 <span class="pk-st ${dn?'pk-st-done':'pk-st-up'}">${dn?'✓ erledigt':p.typ==='klassenarbeit'?'⏳ '+cdTxt(d):'aktuell'}</span></span>
 ${pg.nhOpen?`<span class="pk-nh">🔁 Nachholbedarf: ${pg.nhOpen} noch zu tun</span>`:''}
 <span class="pk-chips">${(p.schwerpunkte||[]).map(s=>`<span class="chip">${esc(s)}</span>`).join('')}</span>
 <span class="pk-stats"><span class="pk-stat">${pr?ring(pr.n?pr.last.pct:null,'',pr.n?'#c8102e':'#cbd5e1'):''}<span class="pk-sl"><b>${pl}</b>${pr&&pr.n?`<small>${pr.n>1?'zuletzt':'geschrieben'}: ${pr.last.pct} % · Note ${pr.last.grade}${pr.n>1?` · bestes: ${pr.best.pct} %`:''}</small>`:'<small>noch nicht geschrieben</small>'}</span></span>
 <span class="pk-stat">${ring(pg.pct,'',T.c)}<span class="pk-sl"><b>${pg.n} Lektion${pg.n===1?"":"en"}</b><small>${pg.done}/${pg.total} Kapitel ✓</small></span></span></span>
 <span class="pk-go">Öffnen ›</span></a>`;}
function listPage(){const T=PK.TYP[PG.typ];const L=PK.sorted(PK.list(PG.fach,PG.typ));const up=L.filter(p=>!PK.done(p)),old=L.filter(PK.done);
 let h=`<section class="list-hero" style="--c:${T.c}"><span class="fh-ic">${T.ic}</span><div><div class="ov-k">${FACH.n}</div><h1>${T.t}</h1></div></section>`;
 if(!L.length){h+=`<div class="pk-empty"><div class="pe-art">${T.ic}</div><h2>Noch keine ${T.t}</h2><p>${PG.typ==='hausaufgabe'?'Hier erscheinen Übungen zu Hausaufgaben, bei denen etwas noch nicht sitzt – jeweils mit Mini-Probearbeit.':'Hier erscheinen die Lernpakete für die nächsten Klassenarbeiten – mit Lektionen, Probe-Klassenarbeit und Lernplan.'}</p>
  <ul class="pe-how"><li><span>📚</span>Lektionen mit Erklärungen und Übungen</li><li><span>🧪</span>${PG.typ==='hausaufgabe'?'Mini-Probearbeit (ca. 10 Aufgaben) mit Prozent und Note':'Probe-Klassenarbeit mit Punkten und Note'}</li><li><span>📊</span>Fortschritt und Bericht für Eltern</li></ul></div>`;}
 if(up.length)h+=`<div class="section-title"><div class="bar"></div><h2>${PG.typ==='klassenarbeit'?'Kommend':'Aktuell'}</h2></div><div class="pklist">${up.map(card).join('')}</div>`;
 if(old.length)h+=`<div class="section-title"><div class="bar"></div><h2>Erledigt</h2></div><div class="pklist">${old.map(card).join('')}</div>`;
 $('#main').innerHTML=h;}
const render=()=>{if(PG.mode==='fach')fachPage();else listPage();};
render();if(W.TR&&W.TR.sync)W.TR.sync().then(n=>{if(n)render();});
})();
