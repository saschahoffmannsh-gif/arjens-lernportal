/* Startseite: Fächer als Kacheln (6. Klasse Gymnasium RLP). Aktive Fächer öffnen ihre Fachseite im selben Fenster. */
(function(){
'use strict';
const LS=window.LESSONS||[];const PR=window.PROG;
const F=[
 {k:'francais',n:'Französisch',ic:'🇫🇷',c:'#1d4ed8',c2:'#60a5fa',href:'francais/',live:true},
 {k:'deutsch',n:'Deutsch',ic:'📖',c:'#dc2626',c2:'#fb7185'},
 {k:'mathe',n:'Mathematik',ic:'📐',c:'#7c3aed',c2:'#a78bfa'},
 {k:'englisch',n:'Englisch',ic:'🇬🇧',c:'#0f766e',c2:'#2dd4bf',href:'englisch/',live:true},
 {k:'nawi',n:'Naturwissen&shy;schaften',ic:'🔬',c:'#15803d',c2:'#4ade80'},
 {k:'erdkunde',n:'Erdkunde',ic:'🌍',c:'#0369a1',c2:'#38bdf8'},
 {k:'religion',n:'Religion / Ethik',ic:'🕊️',c:'#a16207',c2:'#facc15'},
 {k:'musik',n:'Musik',ic:'🎵',c:'#db2777',c2:'#f9a8d4'},
 {k:'kunst',n:'Bildende Kunst',ic:'🎨',c:'#ea580c',c2:'#fbbf24'},
 {k:'sport',n:'Sport',ic:'⚽',c:'#4d7c0f',c2:'#a3e635'}];
const PK=window.PK;
function render(){const S=PR?PR.subject(LS):{done:0,total:0,pct:0,any:false,nhOpen:0,nh:[]};
/* Pakete des Fachs: nächste Klassenarbeit, offene Hausaufgaben, Nachholbedarf aus allen Paketen */
const PKS=PK?PK.list('francais'):[];const nextKA=PK?PK.sorted(PK.list('francais','klassenarbeit')).filter(p=>!PK.done(p))[0]:null;
const haOpen=PK?PK.list('francais','hausaufgabe').filter(p=>!PK.done(p)).length:0;
if(PK){const seen=new Set();S.nhOpen=0;PKS.forEach(p=>PK.progress(p).nh.forEach(x=>{const k=x.slug+':'+x.id;if(!seen.has(k)&&x.key!=='fertig'){seen.add(k);S.nhOpen++;}}));}
const tile=f=>{const st=`--c:${f.c};--c2:${f.c2}`;const inner=`<span class="pt2-ic">${f.ic}</span><span class="pt2-n">${f.n}</span>`;
 return f.live?`<a class="pt2 tap" href="${f.href}" style="${st}" data-fach="${f.k}">${inner}</a>`:`<div class="pt2 pt2-soon" style="${st}" data-fach="${f.k}">${inner}</div>`;};
const nh=S.nhOpen?`<a class="pt2-nh tap" href="francais/#nachholbedarf"><span>🔁</span><b>Nachholbedarf</b><span class="pt2-nhn">${S.nhOpen}</span><span class="pt2-go">›</span></a>`:'';
document.getElementById('main').innerHTML=`<h2 class="pt-h2">Meine Fächer</h2>${nh}<div class="pt2-grid">${F.map(tile).join('')}</div>`;}
render();if(window.SYNC)window.SYNC.on(render);
})();
