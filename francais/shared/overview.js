/* Übersichtsseite Französisch: Countdown, Lektionen mit Fortschritt, Checkliste, Lernplan */
(function(){
'use strict';
const $=s=>document.querySelector(s);
const LS=window.LESSONS||[];
const get=k=>{try{return JSON.parse(localStorage.getItem(k)||'null');}catch(e){return null;}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}};
function prog(m){const p=get('fr_lekt_'+m.slug+'_v1')||{ch:{},test:{}};let solved=0,done=0;
 m.chapters.forEach(id=>{const c=(p.ch||{})[id]||{};solved+=Object.keys(c.solved||{}).length;if((c.best||0)>=70)done++;});
 const t=p.test||{};return {solved,done,pct:Math.min(100,Math.round(solved/Math.max(1,m.nEx-m.nTest)*100)),test:t.best!=null?t.best:null,stars:t.stars||0};}
const exam=new Date(2026,9,30,8,0,0);
const days=Math.ceil((exam-new Date())/864e5);
const cd=days>1?`Noch <b>${days} Tage</b>`:days===1?'<b>Morgen</b> ist es so weit!':days===0?'<b>Heute</b> ist die Klassenarbeit – Bonne chance!':'Die Klassenarbeit ist geschafft 🎉';
const CHECK=[['etre','être: je suis, tu es, il est … (+ c’est)'],['artikel-bestimmt','Bestimmter Artikel le, la, l’, les'],['artikel-unbestimmt','Unbestimmter Artikel un, une, des (+ il y a)'],['verben-er','Verben auf -er: regarder, présenter, écouter, téléphoner, parler, appeler'],['texte','Texte: «C’est moi!» und «C’est ma chambre!»'],['ecouter','Hörverstehen'],['vok','Vokabeln Unité 1 bis Unité 2 Volet 1 (bis „le globe“) – mit dem Übungspaket / Vokabelheft lernen']];
const PLAN=[['Sa 24.10.','être + bestimmter Artikel','etre'],['So 25.10.','unbestimmter Artikel + Vokabeln Unité 1','artikel-unbestimmt'],['Mo 26.10.','Verben auf -er (Achtung: appeler!)','verben-er'],['Di 27.10.','Texte: C’est moi + C’est ma chambre – einmal mit der Hand ins Heft schreiben','texte'],['Mi 28.10.','Hörverstehen + alle Fehlerdetektive + Vokabeln Unité 2','ecouter'],['Do 29.10.','Alle Abschlusstests – dann nur noch üben, was bei „Das solltest du noch einmal üben“ steht. Früh schlafen! 😴',''],['Fr 30.10.','Klassenarbeit – Bonne chance! 🍀','']];
const ck=get('fr_ka_check_v1')||{};
const total=LS.reduce((a,m)=>a+m.nEx,0);
let h=`<section class="ov-hero"><div class="ov-flag"><i></i><i></i><i></i></div><div class="ov-k">Französisch · 6. Klasse · 1. Lernjahr</div><h1>Klassenarbeit 30. Oktober</h1><p class="ov-cd">⏳ ${cd}</p><p>${LS.length} Lektionen mit ${total} Aufgaben, Hörtexten und Abschlusstests – zu jedem Thema der Arbeit.</p></section>
<div class="soundtip"><span class="st-ic">🔊</span><div><b>Mit Ton lernen:</b> Alle französischen Sätze kannst du anhören. <b>Kein Ton auf dem iPhone?</b> Stummschalter an der Seite aus und lauter stellen.</div></div>
<div class="section-title"><div class="bar"></div><h2>Deine Lektionen</h2></div><div class="ov-grid">`;
LS.forEach((m,i)=>{const p=prog(m);h+=`<a class="ov-card" href="${m.slug}/" style="--c:${m.color}"><span class="ov-ic">${m.icon}</span><span class="ov-b"><span class="ov-n">Lektion ${i+1}</span><span class="ov-t">${m.title}</span><span class="ov-fr">${m.fr}</span>
 <span class="ov-bar"><i style="width:${p.pct}%"></i></span><span class="ov-s">${p.done}/${m.chapters.length} Kapitel ✓ · ${m.nEx} Aufgaben${p.test!=null?` · Test: ${p.test} % ${'★'.repeat(p.stars)}${'☆'.repeat(3-p.stars)}`:''}</span></span></a>`;});
h+=`</div><div class="section-title"><div class="bar"></div><h2>Was kommt dran? – Checkliste</h2></div><div class="card ov-check"><p class="legend">Hake ab, was du sicher kannst. (Die Häkchen werden auf diesem Gerät gespeichert.)</p><ul>`;
CHECK.forEach(([k,t])=>{const m=LS.find(x=>x.slug===k);h+=`<li><label><input type="checkbox" data-k="${k}" ${ck[k]?'checked':''}><span>${t}</span></label>${m?`<a href="${m.slug}/">zur Lektion ›</a>`:''}</li>`;});
h+=`</ul></div><div class="section-title"><div class="bar"></div><h2>Lernplan bis zur Arbeit</h2></div><div class="card ov-plan"><table>`;
PLAN.forEach(([d,t,k])=>{h+=`<tr><th>${d}</th><td>${k?`<a href="${k}/">${t}</a>`:t}</td></tr>`;});
h+=`</table><p class="legend">Pro Tag reichen 20–30 Minuten. Lieber jeden Tag ein bisschen als alles am Donnerstag!</p></div>`;
$('#main').innerHTML=h;
document.querySelectorAll('.ov-check input').forEach(i=>i.onchange=()=>{ck[i.dataset.k]=i.checked;set('fr_ka_check_v1',ck);});
})();
