/* Übersichtsseite Französisch: Countdown, Lektionen mit Fortschritt, Checkliste, Lernplan */
(function(){
'use strict';
const $=s=>document.querySelector(s);
const LS=window.LESSONS||[];
const get=k=>{try{return JSON.parse(localStorage.getItem(k)||'null');}catch(e){return null;}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}};
function prog(m){const p=get('fr_lekt_'+m.slug+'_v2')||get('fr_lekt_'+m.slug+'_v1')||{ch:{},test:{}};let done=0;
 m.chapters.forEach(id=>{const c=(p.ch||{})[id]||{};if((c.best||0)>=70&&(c.runs||0)>0)done++;});
 const xs=(m.extras||[]).map(x=>{const c=(p.ch||{})[x.id]||{};return {t:x.title,done:(c.best||0)>=70&&(c.runs||0)>0,best:c.best||0,runs:c.runs||0};});
 const t=p.test||{};return {xs,done,pct:Math.round(done/Math.max(1,m.chapters.length)*100),test:t.best!=null?t.best:null,stars:t.stars||0};}
const exam=new Date(2026,9,30,8,0,0);
const days=Math.ceil((exam-new Date())/864e5);
const cd=days>1?`Noch <b>${days} Tage</b>`:days===1?'<b>Morgen</b> ist es so weit!':days===0?'<b>Heute</b> ist die Klassenarbeit – Bonne chance!':'Die Klassenarbeit ist geschafft 🎉';
const CHECK=[['etre','être: je suis, tu es, il est … (+ c’est)'],['artikel-bestimmt','Bestimmter Artikel le, la, l’, les'],['artikel-unbestimmt','Unbestimmter Artikel un, une, des (+ il y a)'],['verben-er','Verben auf -er: regarder, présenter, écouter, téléphoner, parler, appeler'],['texte','Texte: «C’est moi!» und «C’est ma chambre!»'],['ecouter','Hörverstehen'],['vok','Vokabeln Unité 1 bis Unité 2 Volet 1 (bis „le globe“) – mit dem Übungspaket / Vokabelheft lernen']];
const PLAN=[['Sa 24.10.','être + bestimmter Artikel','etre'],['So 25.10.','unbestimmter Artikel + Vokabeln Unité 1','artikel-unbestimmt'],['Mo 26.10.','Verben auf -er (Achtung: appeler!)','verben-er'],['Di 27.10.','Texte: C’est moi + C’est ma chambre – einmal mit der Hand ins Heft schreiben','texte'],['Mi 28.10.','Zum Schluss: Hörverstehen (eigener Teil: Hör-Strategien, Hören zur Grammatik, Hörtexte) + Vokabeln Unité 2','ecouter'],['Do 29.10.','Alle Abschlusstests (je 8 Aufgaben) – dann nur noch üben, was bei „Das solltest du noch einmal üben“ steht. Früh schlafen! 😴',''],['Fr 30.10.','Klassenarbeit – Bonne chance! 🍀','']];
const ck=get('fr_ka_check_v1')||{};
let h=`<section class="ov-hero"><div class="ov-flag"><i></i><i></i><i></i></div><div class="ov-k">Französisch · 6. Klasse · 1. Lernjahr</div><h1>Klassenarbeit 30. Oktober</h1><p class="ov-cd">⏳ ${cd}</p><p>${LS.length} Lektionen – zu jedem Thema der Arbeit. Pro Lektion ein Durchgang mit ca. 30 kurzen Aufgaben (inkl. Abschlusstest mit 8 Aufgaben) – gut in 2 Lernzeiten à 15–20 Minuten zu schaffen.</p></section>
<div class="soundtip"><span class="st-ic">🔊</span><div><b>Mit Ton lernen:</b> Alle französischen Sätze kannst du anhören. <b>Kein Ton auf dem iPhone?</b> Stummschalter an der Seite aus und lauter stellen.</div></div>
<div class="section-title"><div class="bar"></div><h2>Deine Lektionen</h2></div><div class="ov-grid">`;
LS.forEach((m,i)=>{const p=prog(m);if(i===0)h+=`<div class="ov-part">Teil 1 · Grammatik & Texte – zuerst alles in Ruhe durcharbeiten</div>`;if(m.slug==='ecouter')h+=`<div class="ov-part">Teil 2 · Hören & Aussprache – zum Schluss</div>`;h+=`<a class="ov-card" href="${m.slug}/" style="--c:${m.color}"><span class="ov-ic">${m.icon}</span><span class="ov-b"><span class="ov-n">Lektion ${i+1}</span><span class="ov-t">${m.title}</span><span class="ov-fr">${m.fr}</span>
 <span class="ov-bar"><i style="width:${p.pct}%"></i></span><span class="ov-s">${p.done}/${m.chapters.length} Kapitel ✓ · ≈ ${m.perRun} Aufgaben · ca. ${m.min} Min.${p.test!=null?` · Test: ${p.test} % ${'★'.repeat(p.stars)}${'☆'.repeat(3-p.stars)}`:''}</span>${p.xs.map(x=>`<span class="ov-extra">🧡 Extra-Übung: ${x.t}${x.done?' ✓':x.runs?` · ${x.best} %`:' · noch offen'}</span>`).join('')}</span></a>`;});
h+=`</div><div class="section-title"><div class="bar"></div><h2>Was kommt dran? – Checkliste</h2></div><div class="card ov-check"><p class="legend">Hake ab, was du sicher kannst. (Die Häkchen werden auf diesem Gerät gespeichert.)</p><ul>`;
CHECK.forEach(([k,t])=>{const m=LS.find(x=>x.slug===k);h+=`<li><label><input type="checkbox" data-k="${k}" ${ck[k]?'checked':''}><span>${t}</span></label>${m?`<a href="${m.slug}/">zur Lektion ›</a>`:''}</li>`;});
h+=`</ul></div><div class="section-title"><div class="bar"></div><h2>Lernplan bis zur Arbeit</h2></div><div class="card ov-plan"><table>`;
PLAN.forEach(([d,t,k])=>{h+=`<tr><th>${d}</th><td>${k?`<a href="${k}/">${t}</a>`:t}</td></tr>`;});
h+=`</table><p class="legend">Pro Tag ca. 35 Minuten – am besten in 2 Portionen à 15–20 Minuten. Lieber jeden Tag ein bisschen als alles am Donnerstag!</p></div>`;
$('#main').innerHTML=h;

/* ---------- Bericht für Eltern ---------- */
const esc=t=>String(t==null?'':t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function stats(m,events){const C={};const ch=id=>C[id]=C[id]||{runs:0,bfRuns:0,best:null,first:0,firstOk:0,ans:0,ms:0,err:{},last:null,snap:{},live:{}};
 for(const e of events){const c=e.ch||'?';const k=e.kind||'';
  if(/^(snapshot|backfill)_(chapter|test)$/.test(k)){const x=ch(/test$/.test(k)?'test':c);const o=x.snap[e.dev];if(!o||(e.rev||Date.parse(e.ts))>=(o.rev||Date.parse(o.ts)))x.snap[e.dev]=e;}
  else if(k==='chapter_end'||k==='test_end'){const x=ch(c);x.live[e.dev]=(x.live[e.dev]||0)+1;x.best=Math.max(x.best??0,e.pct||0);x.last=e.ts;}
  else if(k==='answer'&&(e.mode==='chapter'||e.mode==='test')){const x=ch(e.mode==='test'?'test':c);x.ans++;x.ms+=e.ms||0;x.last=e.ts;
   if(e.first){x.first++;if(e.ok)x.firstOk++;}
   if(!e.ok){const kk=e.task+'|'+e.given;const r=x.err[kk]=x.err[kk]||{n:0,prompt:e.prompt,given:e.given,correct:e.correct};r.n++;}}}
 for(const x of Object.values(C)){const devs=new Set([...Object.keys(x.snap),...Object.keys(x.live)]);
  devs.forEach(d=>{const sn=(x.snap[d]||{}).runs||0,lv=x.live[d]||0;x.runs+=Math.max(sn,lv);x.bfRuns+=Math.max(0,sn-lv);if(x.snap[d]&&x.snap[d].best!=null&&(x.snap[d].runs||x.snap[d].best))x.best=Math.max(x.best??0,x.snap[d].best);});
  x.runs-=x.bfRuns;}
 for(const id of Object.keys(C)){const x=C[id];if(!x.runs&&!x.bfRuns&&!x.ans&&x.best==null)delete C[id];}
 return C;}
const fmtMin=ms=>ms<60000?'< 1 Min.':Math.round(ms/60000)+' Min.';
function berichtHTML(data){let h='';
 LS.forEach((m,i)=>{const d=data[m.slug]||{events:[]};const C=stats(m,d.events);const XT={};(m.extras||[]).forEach(x=>XT[x.id]=x.title);const ids=m.chapters.concat(Object.keys(XT),['test']);
  Object.keys(C).forEach(id=>{if(!ids.includes(id))ids.push(id);});const any=ids.some(id=>C[id]);
  h+=`<div class="card rp-l"><h3>${m.icon} Lektion ${i+1}: ${esc(m.title)} <span class="legend">(${d.src}, ${d.events.length} Einträge)</span></h3>`;
  if(!any){h+='<p class="legend">Noch keine Daten.</p></div>';return;}
  h+='<div class="rp-scroll"><table class="rp"><tr><th>Kapitel</th><th>Durchgänge</th><th>Bestwert</th><th>1. Versuch richtig</th><th>Zeit</th><th>Häufigste Fehler</th></tr>';
  ids.forEach((id,k)=>{const x=C[id];if(!x)return;const t=id==='test'?'🏆 Abschlusstest':XT[id]?'🧡 '+esc(XT[id])+' <span class="legend">(Extra-Übung)</span>':(m.chTitles||[])[k]?esc(m.chTitles[k]):esc(id)+' <span class="legend">(früheres Kapitel – jetzt in „Hörverstehen“)</span>';
   const fe=Object.values(x.err).sort((a,b)=>b.n-a.n).slice(0,3);
   h+=`<tr><td>${t}</td><td>${x.runs+x.bfRuns}${x.bfRuns?` <span class="legend">(${x.bfRuns} vor Protokoll)</span>`:''}</td><td>${x.best!=null?x.best+' %':'–'}</td><td>${x.first?Math.round(x.firstOk/x.first*100)+' % <span class="legend">('+x.firstOk+'/'+x.first+')</span>':'–'}</td><td>${x.ms?fmtMin(x.ms):'–'}</td>
   <td>${fe.length?'<ul>'+fe.map(f=>`<li><span class="legend">${esc(f.prompt).slice(0,90)}</span><br><s>${esc(f.given)}</s> → <b>${esc(f.correct)}</b>${f.n>1?` (${f.n}×)`:''}</li>`).join('')+'</ul>':'–'}</td></tr>`;});
  h+='</table></div></div>';});
 return h;}
h=`<div class="section-title" id="bericht"><div class="bar"></div><h2>📊 Bericht für Eltern</h2></div><div class="card"><p class="legend">Zeigt pro Kapitel: Durchgänge, Bestwert, wie viel beim <b>ersten Versuch</b> richtig war, Übungszeit und die häufigsten Fehler. Die Daten werden zentral gespeichert (nur Vorname, keine Anmeldung).</p><button class="btn" id="rpBtn">📊 Bericht anzeigen</button><div id="rpOut"></div></div>`;
$('#main').insertAdjacentHTML('beforeend',h);
async function showReport(){const o=$('#rpOut');o.innerHTML='<p class="legend">Lade …</p>';
 const data=window.LOG?await window.LOG.fetchAll(LS.map(m=>m.slug)):{};o.innerHTML=berichtHTML(data);}
$('#rpBtn').onclick=showReport;if(location.hash==='#bericht')showReport();
document.querySelectorAll('.ov-check input').forEach(i=>i.onchange=()=>{ck[i.dataset.k]=i.checked;set('fr_ka_check_v1',ck);});
})();
