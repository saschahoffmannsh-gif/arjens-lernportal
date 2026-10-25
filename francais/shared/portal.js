/* Startseite: Fächer als Kacheln (6. Klasse Gymnasium RLP). Aktive Fächer öffnen ihre Fachseite im selben Fenster. */
(function(){
'use strict';
const LS=window.LESSONS||[];const PR=window.PROG;
const F=[
 {k:'francais',n:'Französisch',ic:'🇫🇷',c:'#1e3a8a',href:'francais/',live:true},
 {k:'deutsch',n:'Deutsch',ic:'📖',c:'#c0392b'},
 {k:'mathe',n:'Mathematik',ic:'📐',c:'#2563eb'},
 {k:'englisch',n:'Englisch',ic:'🇬🇧',c:'#0f766e'},
 {k:'nawi',n:'Naturwissen&shy;schaften',ic:'🔬',c:'#16a34a'},
 {k:'erdkunde',n:'Erdkunde',ic:'🌍',c:'#0284c7'},
 {k:'religion',n:'Religion / Ethik',ic:'🕊️',c:'#7c3aed'},
 {k:'musik',n:'Musik',ic:'🎵',c:'#db2777'},
 {k:'kunst',n:'Bildende Kunst',ic:'🎨',c:'#ea580c'},
 {k:'sport',n:'Sport',ic:'⚽',c:'#65a30d'}];
const PK=window.PK;const S=PR?PR.subject(LS):{done:0,total:0,pct:0,any:false,nhOpen:0,nh:[]};
/* Pakete des Fachs: nächste Klassenarbeit, offene Hausaufgaben, Nachholbedarf aus allen Paketen */
const PKS=PK?PK.list('francais'):[];const nextKA=PK?PK.sorted(PK.list('francais','klassenarbeit')).filter(p=>!PK.done(p))[0]:null;
const haOpen=PK?PK.list('francais','hausaufgabe').filter(p=>!PK.done(p)).length:0;
if(PK){const seen=new Set();S.nhOpen=0;PKS.forEach(p=>PK.progress(p).nh.forEach(x=>{const k=x.slug+':'+x.id;if(!seen.has(k)&&x.key!=='fertig'){seen.add(k);S.nhOpen++;}}));}
const days=nextKA?PK.days(nextKA):-1;
const tile=f=>{if(!f.live)return `<div class="pt-tile pt-soon" style="--c:${f.c}" aria-disabled="true"><span class="pt-ic">${f.ic}</span><span class="pt-n">${f.n}</span><span class="pt-s">bald</span></div>`;
 const ka=(nextKA&&days>=0?`<span class="pt-ka">🎯 ${nextKA.titel}: ${days===0?'heute':days===1?'morgen':'in '+days+' Tagen'}</span>`:'')+(haOpen?`<span class="pt-ka">📝 ${haOpen} Hausaufgabe${haOpen>1?'n':''}</span>`:'');
 const nh=S.nhOpen?`<span class="pt-nh" title="Nachholbedarf">🔁 ${S.nhOpen}</span>`:'';
 return `<a class="pt-tile pt-live tap" href="${f.href}" style="--c:${f.c}">${nh}<span class="pt-ic">${f.ic}</span><span class="pt-n">${f.n}</span>
 <span class="pt-s">Hausaufgaben · Klassenarbeiten${S.any?` · ${S.pct} % gelernt`:''}</span><span class="pt-bar"><i style="width:${S.pct}%"></i></span>${ka}${S.nhOpen?`<span class="pt-nhl">🔁 Nachholbedarf: ${S.nhOpen} noch zu tun</span>`:''}</a>`;};
document.getElementById('main').innerHTML=`<h2 class="pt-h2">Meine Fächer</h2><div class="pt-grid">${F.map(tile).join('')}</div>
<p class="pt-foot">Weitere Fächer folgen, sobald es Lernsachen dafür gibt.</p>`;
})();
