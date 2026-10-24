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
const PLAN=[['Sa 24.10.','être + bestimmter Artikel','etre'],['So 25.10.','unbestimmter Artikel + Vokabeln Unité 1','artikel-unbestimmt'],['Mo 26.10.','Verben auf -er (Achtung: appeler!)','verben-er'],['Di 27.10.','Texte: C’est moi + C’est ma chambre – einmal mit der Hand ins Heft schreiben','texte'],['Mi 28.10.','Zum Schluss: Hörverstehen (eigener Teil: Hör-Strategien, Hören zur Grammatik, Hörtexte) + Vokabeln Unité 2','ecouter'],['Do 29.10.','📝 Probe-Klassenarbeit (45 Min.) – danach nur noch üben, was bei „Das solltest du wiederholen“ steht. Früh schlafen! 😴','training/#probe'],['Fr 30.10.','Klassenarbeit – Bonne chance! 🍀','']];
const ck=get('fr_ka_check_v1')||{};
const TRN=window.TR;
const KB=(c,small)=>{const F=[[1,'Fach 1','morgen wieder','#ef4444'],[2,'Fach 2','nach 3 Tagen','#f59e0b'],[3,'Fach 3','nach 7 Tagen','#22c55e']];const card=n=>Array.from({length:Math.min(n,8)},(_,i)=>`<i style="--i:${i}"></i>`).join('');
 return `<div class="kbox${small?' small':''}" role="img" aria-label="Fehlerkiste"><div class="kb-lid">🗃️ Fehlerkiste</div><div class="kb-row">${F.map(f=>`<div class="kb-f" style="--fc:${f[3]}"><div class="kb-cards">${card(c[f[0]])}</div><b class="kb-n">${c[f[0]]}</b><span class="kb-t">${f[1]}</span><small>${f[2]}</small></div>`).join('')}<div class="kb-f kb-out"><div class="kb-cards">${c.done?'<span class="kb-star">⭐</span>':''}</div><b class="kb-n">${c.done}</b><span class="kb-t">raus ✓</span><small>3× richtig</small></div></div></div>`;};
function missionHTML(){if(!TRN)return '';const s=TRN.streak(),c=TRN.kiste.counts();
 return `<a class="mission-btn" href="training/#mission"><span class="mb-ic">🚀</span><span class="mb-t"><b>Heute: 10-Minuten-Mission</b><small>${s.today?'✓ Heute geschafft! Noch eine Runde?':`10–12 Aufgaben${c.due?` · ${c.due} aus der Fehlerkiste`:''} · von leicht nach schwer`}</small></span><span class="streak${s.n?'':' off'}"><span class="fl">🔥</span><b>${s.n}</b><small>${s.n===1?'Tag':'Tage'} in Folge</small></span></a>`;}
function trainHTML(){if(!TRN)return '';const c=TRN.kiste.counts();const pr=TRN.probes();const last=pr[pr.length-1];const best=pr.reduce((a,p)=>!a||p.total>a.total?p:a,null);
 const G=[['etre','⚡','être-Blitz','#ea580c','Wer? → être-Form'],['artikel','🧺','Artikel-Sortierer','#0d9488','le / la / l’ / les · un / une / des'],['lego','🧱','Endungs-Lego','#16a34a','-e, -es, -ons … + appeler']];
 return `<div class="section-title"><div class="bar"></div><h2>📝 Probe-Klassenarbeit</h2></div>
 <a class="ov-probe" href="training/#probe"><span class="op-paper"><b>1<sup>er</sup> contrôle</b><i></i><i></i><i></i><span class="op-grade">${last?last.grade:'?'}</span></span><span class="op-b"><b>Wie die echte Arbeit · 45 Min.</b><small>A Hören · B Vokabeln · C être · D Artikel · E Verben · F Text – mit Punkten und Note (1–6). Jedes Mal neue Aufgaben.</small>
 <small class="op-last">${last?`Zuletzt: ${String(last.total).replace('.',',')} / ${last.max} P. · Note ${last.grade}${best&&best!==last?` · Bestes: Note ${best.grade}`:''}`:'Noch nicht geschrieben – am besten am Donnerstag 29.10.'}</small></span></a>
 <div class="section-title"><div class="bar"></div><h2>🗃️ Fehlerkiste</h2></div>
 <a class="ov-kiste" href="training/#kiste">${KB(c)}<span class="ok-due ${c.due?'':'none'}">${c.due?`📅 Heute fällig: <b>${c.due}</b> → jetzt wiederholen ›`:c.total?'✓ Heute nichts fällig':'Noch leer – Fehler beim 1. Versuch landen automatisch hier.'}</span></a>
 <div class="section-title"><div class="bar"></div><h2>🎮 Spiele</h2><span class="sct-n">Extra-Übung · je 1 Minute</span></div>
 <div class="glist">${G.map(g=>{const b=TRN.gameBest(g[0]);return `<a class="gtile" href="training/#spiel-${g[0]}" style="--c:${g[3]}"><span class="gt-ic">${g[1]}</span><span class="gt-b"><b>${g[2]}</b><small>${g[4]}</small><small class="gt-best">🏆 Rekord: ${b.best}</small></span></a>`;}).join('')}</div>
 <p class="legend">Spiele sind zum Üben zwischendurch – sie ersetzen die Lektionen nicht.</p>`;}
let h=`<section class="ov-hero"><div class="ov-flag"><i></i><i></i><i></i></div><div class="ov-k">Französisch · 6. Klasse · 1. Lernjahr</div><h1>Klassenarbeit 30. Oktober</h1><p class="ov-cd">⏳ ${cd}</p><p>${LS.length} Lektionen – zu jedem Thema der Arbeit. Pro Lektion ein Durchgang mit ca. 30 kurzen Aufgaben (inkl. Abschlusstest mit 8 Aufgaben) – gut in 2 Lernzeiten à 15–20 Minuten zu schaffen.</p></section>
<div id="ovMission">${missionHTML()}</div>
<div class="soundtip"><span class="st-ic">🔊</span><div><b>Mit Ton lernen:</b> Alle französischen Sätze kannst du anhören. <b>Kein Ton auf dem iPhone?</b> Stummschalter an der Seite aus und lauter stellen.</div></div>
<div class="section-title"><div class="bar"></div><h2>Deine Lektionen</h2></div><div class="ov-grid">`;
LS.forEach((m,i)=>{const p=prog(m);if(i===0)h+=`<div class="ov-part">Teil 1 · Grammatik & Texte – zuerst alles in Ruhe durcharbeiten</div>`;if(m.slug==='ecouter')h+=`<div class="ov-part">Teil 2 · Hören & Aussprache – zum Schluss</div>`;h+=`<a class="ov-card" href="${m.slug}/" style="--c:${m.color}"><span class="ov-ic">${m.icon}</span><span class="ov-b"><span class="ov-n">Lektion ${i+1}</span><span class="ov-t">${m.title}</span><span class="ov-fr">${m.fr}</span>
 <span class="ov-bar"><i style="width:${p.pct}%"></i></span><span class="ov-s">${p.done}/${m.chapters.length} Kapitel ✓ · ≈ ${m.perRun} Aufgaben · ca. ${m.min} Min.${p.test!=null?` · Test: ${p.test} % ${'★'.repeat(p.stars)}${'☆'.repeat(3-p.stars)}`:''}</span>${p.xs.map(x=>`<span class="ov-extra">🧡 Extra-Übung: ${x.t}${x.done?' ✓':x.runs?` · ${x.best} %`:' · noch offen'}</span>`).join('')}</span></a>`;});
h+=`</div><div id="ovTrain">${trainHTML()}</div><div class="section-title"><div class="bar"></div><h2>Was kommt dran? – Checkliste</h2></div><div class="card ov-check"><p class="legend">Hake ab, was du sicher kannst. (Die Häkchen werden auf diesem Gerät gespeichert.)</p><ul>`;
CHECK.forEach(([k,t])=>{const m=LS.find(x=>x.slug===k);h+=`<li><label><input type="checkbox" data-k="${k}" ${ck[k]?'checked':''}><span>${t}</span></label>${m?`<a href="${m.slug}/">zur Lektion ›</a>`:''}</li>`;});
h+=`</ul></div><div class="section-title"><div class="bar"></div><h2>Lernplan bis zur Arbeit</h2></div><div class="card ov-plan"><table>`;
PLAN.forEach(([d,t,k])=>{h+=`<tr><th>${d}</th><td>${k?`<a href="${k.includes('#')?k:k+'/'}">${t}</a>`:t}</td></tr>`;});
h+=`</table><p class="legend">Pro Tag ca. 35 Minuten – am besten in 2 Portionen à 15–20 Minuten, dazu jeden Tag die <b>🚀 10-Minuten-Mission</b>. Lieber jeden Tag ein bisschen als alles am Donnerstag!</p></div>`;
$('#main').innerHTML=h;
if(TRN)TRN.sync().then(n=>{const m=$('#ovMission'),t=$('#ovTrain');if(m)m.innerHTML=missionHTML();if(t)t.innerHTML=trainHTML();});

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
function trainingHTML(d){const ev=(d&&d.events)||[];let h=`<div class="card rp-l"><h3>🎯 Training <span class="legend">(${d?d.src:'lokal'}, ${ev.length} Einträge)</span></h3>`;
 const ms=ev.filter(e=>e.kind==='mission_end');const days=[...new Set(ms.map(e=>e.day))].sort();let st=0;if(TRN){st=TRN.streak().n;}
 h+=`<h4>🚀 Tagesmissionen</h4>${ms.length?`<p>${ms.length} Missionen an ${days.length} Tagen · aktuelle Serie: <b>${st} 🔥</b> · im Schnitt ${Math.round(ms.reduce((a,e)=>a+(e.pct||0),0)/ms.length)} %</p><div class="rp-scroll"><table class="rp"><tr><th>Datum</th><th>Aufgaben</th><th>Ergebnis</th><th>Mischung</th><th>Zeit</th></tr>${ms.slice(-8).reverse().map(e=>`<tr><td>${esc(e.day)}</td><td>${e.n}</td><td>${e.pct} % (${e.firstRight}/${e.n} beim 1. Versuch)</td><td>${Object.entries(e.G||{}).filter(x=>x[1]).map(([k,v])=>({kiste:'🗃️',weak:'💪',fresh:'✨',fill:'🔁'}[k]||k)+' '+v).join(' · ')}</td><td>${fmtMin(e.ms||0)}</td></tr>`).join('')}</table></div>`:'<p class="legend">Noch keine Mission.</p>'}`;
 // Fehlerkiste (letzter Stand je Aufgabe)
 const rs=ev.filter(e=>e.kind==='kiste_reset').reduce((a,e)=>Math.max(a,e.rev||0),0);const K={};ev.forEach(e=>{if(e.kind==='kiste'&&e.item&&(e.rev||0)>rs&&(!K[e.gid]||(e.rev||0)>(K[e.gid].rev||0)))K[e.gid]=Object.assign({rev:e.rev},e.item);});
 const it=Object.values(K);const c={1:0,2:0,3:0,done:0};it.forEach(i=>{if(i.st==='on')c[i.box]++;else if(i.st==='done')c.done++;});
 h+=`<h4>🗃️ Fehlerkiste</h4>${it.length?`<p>Fach 1: <b>${c[1]}</b> · Fach 2: <b>${c[2]}</b> · Fach 3: <b>${c[3]}</b> · raus (3× richtig): <b>${c.done}</b></p><div class="rp-scroll"><table class="rp"><tr><th>Aufgabe</th><th>Lektion</th><th>Fach</th><th>falsch</th><th>fällig</th></tr>${it.filter(i=>i.st==='on').sort((a,b)=>(b.n||0)-(a.n||0)).slice(0,12).map(i=>`<tr><td>${esc(String(i.p||i.gid).slice(0,90))}</td><td>${esc(i.l||'')}</td><td>${i.box}</td><td>${i.n||1}×</td><td>${esc(i.due||'')}</td></tr>`).join('')}</table></div>`:'<p class="legend">Leer.</p>'}`;
 // Probe
 const pr=ev.filter(e=>e.kind==='probe_end');
 h+=`<h4>📝 Probe-Klassenarbeiten</h4>${pr.length?`<div class="rp-scroll"><table class="rp"><tr><th>Datum</th>${['A','B','C','D','E','F'].map(k=>`<th>${k}</th>`).join('')}<th>Gesamt</th><th>Note</th><th>Zeit</th><th>Text</th></tr>${pr.slice(-6).reverse().map(e=>`<tr><td>${esc(e.day)}</td>${['A','B','C','D','E','F'].map(k=>{const p=(e.parts||{})[k]||{};return `<td>${String(p.pts??'–').replace('.',',')}/${p.max??''}</td>`;}).join('')}<td><b>${String(e.total).replace('.',',')} / ${e.max}</b></td><td><b>${e.grade}</b></td><td>${fmtMin(e.ms||0)}${e.pauses?` (${e.pauses}× Pause)`:''}</td><td>${e.text?`${e.text.f}: ${e.text.sentences} Sätze, Inhalt ${e.text.inhalt}/6, Sprache ${e.text.sprache}/6${(e.text.errs||[]).length?'<br><span class="legend">'+esc(e.text.errs.slice(0,4).join(' · '))+'</span>':''}`:'–'}</td></tr>`).join('')}</table></div>
  <p class="legend">Teile: A Hören (8) · B Vokabeln (12) · C être (8) · D Artikel (12) · E Verben (10) · F Text (12). Note nach üblichem Schlüssel (92/81/67/50/30 %) – Orientierung.</p>`:'<p class="legend">Noch keine Probe-Arbeit.</p>'}`;
 // Spiele
 const gs=ev.filter(e=>e.kind==='game_end');const GN={etre:'⚡ être-Blitz',artikel:'🧺 Artikel-Sortierer',lego:'🧱 Endungs-Lego'};
 h+=`<h4>🎮 Spiele</h4>${gs.length?`<table class="rp"><tr><th>Spiel</th><th>Rekord</th><th>gespielt</th><th>zuletzt</th></tr>${Object.keys(GN).map(g=>{const x=gs.filter(e=>e.game===g);if(!x.length)return '';return `<tr><td>${GN[g]}</td><td><b>${Math.max(...x.map(e=>e.score||0))}</b></td><td>${x.length}×</td><td>${x[x.length-1].score} (${x[x.length-1].right} ✓ / ${x[x.length-1].wrong} ✗)</td></tr>`;}).join('')}</table>`:'<p class="legend">Noch nicht gespielt.</p>'}`;
 return h+'</div>';}
async function showReport(){const o=$('#rpOut');o.innerHTML='<p class="legend">Lade …</p>';
 const data=window.LOG?await window.LOG.fetchAll(LS.map(m=>m.slug).concat(['training'])):{};o.innerHTML=trainingHTML(data.training)+berichtHTML(data);}
$('#rpBtn').onclick=showReport;if(location.hash==='#bericht')showReport();
document.querySelectorAll('.ov-check input').forEach(i=>i.onchange=()=>{ck[i.dataset.k]=i.checked;set('fr_ka_check_v1',ck);});
})();
