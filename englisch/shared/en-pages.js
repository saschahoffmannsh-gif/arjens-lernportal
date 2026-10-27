/* Englisch: Fachseite (Hausaufgaben / Klassenarbeiten), Paket-Listen und Paketseite mit Tages-Freischaltung */
(function(){
'use strict';
const W=window,C=W.ENC,E=C.E,PG=W.PAGE||{},$=s=>document.querySelector(s),esc=C.esc;
const TYP={klassenarbeit:{t:'Klassenarbeiten',ic:'🎯',dir:'klassenarbeiten',c:'#1e3a8a',g:['#e11d48','#fb923c']},hausaufgabe:{t:'Hausaufgaben',ic:'📝',dir:'hausaufgaben',c:'#0d9488',g:['#0d9488','#4ade80']}};
const PKGS=[E.pkg];
const MON=['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'];
const pdate=p=>{const [y,m,d]=p.datum.split('-').map(Number);return new Date(y,m-1,d);};
const ring=(pct,col)=>`<span class="pk-ring" style="--p:${pct};--rc:${col}"><b>${pct}<small>%</small></b></span>`;
function fachPage(){const tile=typ=>{const T=TYP[typ];return `<a class="ft2 tap" href="${T.dir}/" style="--c:${T.g[0]};--c2:${T.g[1]}" data-typ="${typ}"><span class="ft2-ic">${T.ic}</span><span class="ft2-t">${T.t}</span></a>`;};
 $('#main').innerHTML=`<section class="fach-hero" style="--c:#0f766e"><span class="fh-ic">🇬🇧</span><div><h1>Englisch</h1></div></section><div class="ft2-grid">${tile('klassenarbeit')}${tile('hausaufgabe')}</div>`;}
function card(p){const T=TYP[p.typ];const dt=pdate(p);const pg=C.pkgProgress();const tn=C.todayN();const all=pg.done===pg.total;
 return `<a class="pkcard tap${all?' pk-done':''}" href="../${p.id}/" style="--c:${T.c}" data-pkg="${p.id}">
 <span class="pk-top"><span class="pk-date"><b>${dt.getDate()}</b><small>${MON[dt.getMonth()]}</small></span><span class="pk-tb"><span class="pk-t">${esc(p.titel)}</span><span class="pk-d">${C.fmt(dt)}${dt.getFullYear()} · Hausaufgabe</span></span>
 <span class="pk-st ${all?'pk-st-done':'pk-st-up'}">${all?'✓ erledigt':'aktuell'}</span></span>
 <span class="pk-chips">${p.chips.map(s=>`<span class="chip">${esc(s)}</span>`).join('')}</span>
 <span class="pk-stats"><span class="pk-stat">${ring(pg.pct,T.c)}<span class="pk-sl"><b>${E.lessons.length} Lektionen · ${E.words.length} Wörter</b><small>${pg.done}/${pg.total} geschafft · ${tn<E.lessons.length?`Teil ${tn} ist offen, jeden Tag kommt einer dazu`:'alle Teile offen'}</small></span></span></span>
 <span class="pk-go">Öffnen ›</span></a>`;}
function listPage(){const T=TYP[PG.typ];const L=PKGS.filter(p=>p.typ===PG.typ);
 let h=`<section class="list-hero" style="--c:${T.c}"><span class="fh-ic">${T.ic}</span><div><div class="ov-k">Englisch</div><h1>${T.t}</h1></div></section>`;
 if(!L.length)h+=`<div class="pk-empty"><div class="pe-art">${T.ic}</div><h2>Noch keine ${T.t}</h2><p>Hier erscheinen später die Lernpakete für Englisch.</p></div>`;
 else h+=`<div class="section-title"><div class="bar"></div><h2>Aktuell</h2></div><div class="pklist">${L.map(card).join('')}</div>`;
 $('#main').innerHTML=h;}
function pkgPage(){const p=E.pkg;const pg=C.pkgProgress();const tn=C.todayN();const rec=C.records();
 const items=E.lessons.map(l=>{const o=pg.L[l.n-1];const open=C.isOpen(l.n);const ws=l.words.map(k=>C.WM[k]);const today=l.n===tn&&!o.done;
  const st=!open?`<span class="enl-lock">🔒 ab ${C.fmt(C.openDate(l.n))}</span>`:o.done?`<span class="enl-ok">✓ ${o.best} %</span>`:o.step>0?`<span class="enl-go">▶ weiter</span>`:`<span class="enl-new">${today?'Heute neu!':'Los geht’s'}</span>`;
  const emo=ws.slice(0,5).map(w=>w.e).join(' ');
  const inner=`<span class="enl-n">${l.n}</span><span class="enl-b"><span class="enl-t">Teil ${l.n} · ${l.pages}</span><span class="enl-s">${esc(l.t)}</span><span class="enl-m"><span class="enl-emo" aria-hidden="true">${open?emo:'❔ ❔ ❔'}</span> · ${ws.length} Wörter</span>${open?`<span class="enl-bar"><i style="width:${o.done?100:Math.min(100,Math.round(Math.min(o.step,7)/7*100))}%"></i></span>`:''}</span>${st}`;
  return open?`<a class="enl tap${o.done?' done':''}${today?' today':''}" href="teil-${l.n}/" data-les="${l.n}">${inner}</a>`:`<div class="enl locked" data-les="${l.n}" aria-disabled="true">${inner}</div>`;}).join('');
 $('#main').innerHTML=`<section class="ov-hero en-hero" style="--c:#0f766e"><div class="ov-flag">🇬🇧</div><div><div class="ov-k">Englisch · Hausaufgabe · ${C.fmt(pdate(p))}${pdate(p).getFullYear()}</div><h1>${esc(p.titel)}</h1>
 <p class="en-sub">${E.words.length} Wörter aus dem ${esc(p.buch)} – gelernt wird nur mit Spielen. <b>Jeden Tag kommt ein neuer Teil dazu.</b> Fertige Teile bleiben offen zum Wiederholen.</p></div>
 <div class="en-hring">${ring(pg.pct,'#0f766e')}<small>${pg.done}/${pg.total} Teile</small></div></section>
 <div class="en-how"><span>🔭 Entdecken &amp; Hören</span><span>🃏 Memory</span><span>🧱 Bauen</span><span>📖 Lücke</span><span>⚡ Blitz</span><span>✍️ Schreiben</span><span>🏆 Hast du’s drauf?</span></div>
 <div class="section-title"><div class="bar"></div><h2>7 Teile – jeden Tag ein neuer</h2></div><div class="enl-list">${items}</div>
 <p class="en-foot">Rekorde: ${C.GAMES.filter(g=>rec[g]).map(g=>`${W.ENG_NAMES?W.ENG_NAMES[g]:g} ${rec[g]}`).join(' · ')||'noch keine – leg los! 🚀'}</p>`;}
const render=()=>{if(PG.mode==='fach')fachPage();else if(PG.mode==='list')listPage();else if(PG.mode==='pkg')pkgPage();};
render();C.on(render);
})();
