/* Übersichtsseite Französisch: Countdown, Lektionen mit Fortschritt, Checkliste, Lernplan */
(function(){
'use strict';
const $=s=>document.querySelector(s);
const PK=window.PK;const PKG=PK&&window.PKG_ID?PK.get(window.PKG_ID):null;const R=PKG?'../':'';
const LS=PKG?PK.lessons(PKG):(window.LESSONS||[]);
const get=k=>{try{return JSON.parse(localStorage.getItem(k)||'null');}catch(e){return null;}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}};
const PR=window.PROG;const prog=m=>PR.lesson(m);
const KA=!PKG||PKG.typ==='klassenarbeit';const exam=PKG&&PK.dateOf(PKG)||new Date(2026,9,30,8,0,0);
const days=PKG?PK.days(PKG):Math.ceil((exam-new Date())/864e5);
const cd=days>1?`Noch <b>${days} Tage</b>`:days===1?'<b>Morgen</b> ist es so weit!':days===0?'<b>Heute</b> ist die Klassenarbeit – Bonne chance!':'Die Klassenarbeit ist geschafft 🎉';
const cdH=!KA?(days>0?`Abgabe in <b>${days} Tagen</b>`:days===0?'<b>Heute</b> abgeben':'Erledigt ✓'):cd;
const CHECK=(PKG&&PKG.checkliste)||[];const CKEY=!PKG||PKG.id===(PK.firstKA()||PKG.id)?'fr_ka_check_v1':'fr_check_'+PKG.id;
const PLAN=(PKG&&PKG.lernplan)||[];
const ck=get(CKEY)||{};
const TRN=window.TR;
function trainHTML(){if(!TRN)return '';if(PKG&&PKG.probe&&PKG.probe.typ==='mini')return miniHTML();if(PKG&&!PKG.probe)return '';const pr=TRN.probes().filter(e=>!PKG||(e.pkg||PK.firstKA())===PKG.id);const last=pr[pr.length-1];const best=pr.reduce((a,p)=>!a||p.total>a.total?p:a,null);
 const G=(window.GAMECAT||[{id:'etre',ic:'⚡',t:'être-Blitz',c:'#ea580c',sub:'Wer? → être-Form'},{id:'artikel',ic:'🧺',t:'Artikel-Sortierer',c:'#0d9488',sub:'le / la / l’ / les · un / une / des'},{id:'lego',ic:'🧱',t:'Endungs-Lego',c:'#16a34a',sub:'-e, -es, -ons … + appeler'}]).map(g=>[g.id,g.ic,g.t,g.c,g.sub]);
 return `<div class="section-title"><div class="bar"></div><h2>📝 Probe-Klassenarbeit</h2></div>
 <a class="ov-probe tap" href="${R}training/#probe"><span class="op-paper"><b>1<sup>er</sup> contrôle</b><i></i><i></i><i></i><span class="op-grade">${last?last.grade:'?'}</span></span><span class="op-b"><b>Wie die echte Arbeit · 45 Min.</b><small>A Hören · B Vokabeln · C être · D Artikel · E Verben · F Text – mit Punkten und Note (1–6). Jedes Mal neue Aufgaben.</small>
 <small class="op-last">${last?`Zuletzt: ${String(last.total).replace('.',',')} / ${last.max} P. · Note ${last.grade}${best&&best!==last?` · Bestes: Note ${best.grade}`:''}`:'Noch nicht geschrieben – am besten am Donnerstag 29.10.'}</small></span></a>
 ${PKG&&!PKG.spiele?'':`<div class="section-title"><div class="bar"></div><h2>🎮 Spiele</h2><span class="sct-n">${G.length} Spiele · je 1–2 Minuten</span></div>
 <div class="glist">${G.map(g=>{const b=TRN.gameBest(g[0]);return `<a class="gtile tap" href="${R}training/#spiel-${g[0]}" style="--c:${g[3]}"><span class="gt-ic">${g[1]}</span><span class="gt-b"><b>${g[2]}</b><small class="gt-sub">${g[4]}</small><small class="gt-best">🏆 ${b.best}</small></span></a>`;}).join('')}</div>
 <p class="legend">Spiele sind zum Üben zwischendurch – sie ersetzen die Lektionen nicht.</p>`}`;}
function miniHTML(){const r=PK.probe(PKG);const n=PKG.probe.n||10;const p=r&&r.n?r.last.pct:null;
 return `<div class="section-title"><div class="bar"></div><h2>🧪 Mini-Probearbeit</h2></div>
 <a class="ov-probe ov-mini tap" href="${R}training/#mini-${PKG.id}"><span class="pk-ring" style="--p:${p||0};--rc:#0d9488"><b>${p==null?'?':p+'<small>%</small>'}</b></span><span class="op-b"><b>Mini-Probearbeit · ${n} Aufgaben · ca. 10 Min.</b><small>Gemischte Aufgaben aus allen Lektionen dieses Pakets – mit Prozent und Note (Orientierung).</small>
 <small class="op-last">${r&&r.n?`Zuletzt: ${r.last.pct} % · Note ${r.last.grade}${r.n>1?` · bestes: ${r.best.pct} %`:''}`:'Noch nicht geschrieben – am besten, wenn alle Lektionen ✓ sind.'}</small></span></a>`;}
const esc0=t=>String(t==null?'':t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function nhHTML(){const L=PR.nh(LS);if(!L.length)return '';const open=L.filter(x=>x.key!=='fertig').length;
 return `<section class="nhband" id="nachholbedarf"><div class="nh-h"><span class="nh-ic">🔁</span><div class="nh-hb"><h2>Nachholbedarf</h2><p>Deine Stolpersteine aus den Tests – extra zum Üben. Ein Tipp öffnet die Übung direkt.</p></div><span class="nh-cnt">${open?open+' zu tun':'alles ✓'}</span></div>
 <div class="nh-list">${L.map(x=>`<a class="nh-it tap ${x.cls}" href="${R}${x.href}" style="--c:${x.color}" data-nh="${x.slug}:${x.id}"><span class="nh-l">${x.icon}</span><span class="nh-b"><b>${esc0(x.title)}</b><small>Lektion ${x.n} · ${esc0(x.lesson)} · ${x.lbl||x.take+(x.take===1?' Aufgabe':' Aufgaben')}</small></span><span class="nh-st">${x.ic} ${x.t}${x.runs?` · ${x.best} %`:''}</span><span class="nh-go">›</span></a>`).join('')}</div></section>`;}
function build(){let h=nhHTML()+`<section class="ov-hero"><div class="ov-flag"><i></i><i></i><i></i></div><div class="ov-k">Französisch · ${PKG?(KA?'Klassenarbeit':'Hausaufgabe')+' · '+PK.fmtDate(PKG):'6. Klasse · 1. Lernjahr'}</div><h1>${PKG?esc0(PKG.titel):'Klassenarbeit 30. Oktober'}</h1><p class="ov-cd">⏳ ${cdH}</p>${PKG&&PKG.schwerpunkte?`<div class="ov-chips">${PKG.schwerpunkte.map(x=>`<span class="chip">${esc0(x)}</span>`).join('')}</div>`:''}<p class="ov-sub">${LS.length} Lektion${LS.length===1?'':'en'} · je ca. 30 Aufgaben · am besten 2 × 15–20 Min. pro Lektion</p></section>
<div class="section-title"><div class="bar"></div><h2>Deine Lektionen</h2></div><div class="ov-grid">`;
const PARTS=PKG?PKG.teile:[{t:'Teil 1 · Grammatik & Texte – zuerst alles in Ruhe durcharbeiten',lektionen:LS.filter(m=>m.slug!=='ecouter').map(m=>m.slug)},{t:'Teil 2 · Hören & Aussprache – zum Schluss',lektionen:['ecouter']}];
const FIRST={};PARTS.forEach(t=>{const f=(t.lektionen||[]).find(s=>LS.some(m=>m.slug===s));if(f)FIRST[f]=t.t;});
LS.forEach((m,i)=>{const p=prog(m);if(FIRST[m.slug]&&(PARTS.length>1||PKG))h+=`<div class="ov-part">${esc0(FIRST[m.slug])}</div>`;
 const st=p.done>=p.total?'fertig':p.started||p.test!=null?'arbeit':'offen';
 h+=`<a class="ov-card lt tap" href="${R}${m.slug}/" style="--c:${m.color}"><span class="lt-top"><span class="ov-ic">${m.icon}</span><span class="lt-ring" style="--p:${p.pct}"><b>${p.pct}<small>%</small></b></span></span>
 <span class="ov-n">Lektion ${i+1}</span><span class="ov-t">${m.title}</span><span class="ov-fr">${m.fr}</span>
 <span class="lt-foot"><span class="ov-bar"><i style="width:${p.pct}%"></i></span><span class="ov-s">${p.done}/${p.total} Kapitel ✓ · ca. ${m.min} Min.</span>${p.test!=null?`<span class="ov-s lt-test">Test ${p.test} % <span class="lt-stars">${'★'.repeat(p.stars)}${'☆'.repeat(3-p.stars)}</span></span>`:''}
 ${p.xs.map(x=>`<span class="ov-extra ${x.cls}">${x.nh?'🔁':'🧡'} ${esc0(x.title)}: ${x.t}${x.runs&&x.key!=='fertig'?` · ${x.best} %`:''}</span>`).join('')}</span>
 <span class="lt-st lt-${st}">${st==='fertig'?'✓ fertig':st==='arbeit'?'✏️ begonnen':'neu'}</span></a>`;});
h+=`</div><div class="soundtip"><span class="st-ic">🔊</span><div><b>Mit Ton lernen:</b> Alle französischen Sätze kannst du anhören. <b>Kein Ton auf dem iPhone?</b> Stummschalter an der Seite aus und lauter stellen.</div></div><div id="ovTrain">${trainHTML()}</div><div id="ovBericht"></div>`;
if(CHECK.length){h+=`<div class="section-title"><div class="bar"></div><h2>Was kommt dran? – Checkliste</h2></div><div class="card ov-check"><p class="legend">Hake ab, was du sicher kannst. (Die Häkchen werden auf diesem Gerät gespeichert.)</p><ul>`;
CHECK.forEach(([k,t])=>{const m=LS.find(x=>x.slug===k);h+=`<li><label><input type="checkbox" data-k="${k}" ${ck[k]?'checked':''}><span>${t}</span></label>${m?`<a href="${R}${m.slug}/">zur Lektion ›</a>`:''}</li>`;});h+='</ul></div>';}
if(PLAN.length){h+=`<div class="section-title"><div class="bar"></div><h2>Lernplan bis zur Arbeit</h2></div><div class="card ov-plan"><table>`;
PLAN.forEach(([d,t,k])=>{h+=`<tr><th>${d}</th><td>${k?`<a href="${R}${k.includes('#')?k:k+'/'}">${t}</a>`:t}</td></tr>`;});
h+=`</table><p class="legend">Pro Tag ca. 35 Minuten – am besten in 2 Portionen à 15–20 Minuten. Lieber jeden Tag ein bisschen als alles am Donnerstag!</p></div>`;}
return h;}
$('#main').innerHTML=build();
/* zentraler Stand (sync.js) angekommen → nur die Fortschritts-Teile austauschen (Checkliste/Bericht bleiben) */
function refresh(){const tmp=document.createElement('div');tmp.innerHTML=build();
 ['#nachholbedarf','.ov-hero','.ov-grid','#ovTrain'].forEach(sel=>{const o=$(sel),n=tmp.querySelector(sel);if(o&&n)o.replaceWith(n);else if(!o&&n&&sel==='#nachholbedarf'){const m=$('#main');m.insertBefore(n,m.firstChild);}});}
if(window.SYNC)window.SYNC.on(refresh);else if(TRN)TRN.sync().then(()=>{const t=$('#ovTrain');if(t)t.innerHTML=trainHTML();});

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
{const h=`<div class="section-title" id="bericht"><div class="bar"></div><h2>📊 Bericht für Eltern</h2></div><div class="card rp-tile"><p class="legend">Zeigt pro Kapitel: Durchgänge, Bestwert, wie viel beim <b>ersten Versuch</b> richtig war, Übungszeit und die häufigsten Fehler. Die Daten werden zentral gespeichert (nur Vorname, keine Anmeldung).</p><button class="btn" id="rpBtn">📊 Bericht anzeigen</button><div id="rpOut"></div></div>`;
$("#ovBericht").innerHTML=h;}
function trainingHTML(d){const ev=((d&&d.events)||[]).filter(e=>e.kind==='probe_end'||e.kind==='game_end'||e.kind==='mini_end').filter(e=>!PKG||e.kind==='game_end'||(e.kind==='mini_end'?e.pkg===PKG.id:(e.pkg||PK.firstKA())===PKG.id)); // ältere Einträge (Fehlerkiste/Mission, entfernt) werden ignoriert
 let h=`<div class="card rp-l"><h3>🎯 ${PKG&&PKG.probe&&PKG.probe.typ==='mini'?'Mini-Probearbeit':'Probe-Arbeit'} & Spiele <span class="legend">(${d?d.src:'lokal'}, ${ev.length} Einträge)</span></h3>`;
 // Probe
 const pr=ev.filter(e=>e.kind==='probe_end');
 if(!(PKG&&PKG.probe&&PKG.probe.typ==='mini'))h+=`<h4>📝 Probe-Klassenarbeiten</h4>${pr.length?`<div class="rp-scroll"><table class="rp"><tr><th>Datum</th>${['A','B','C','D','E','F'].map(k=>`<th>${k}</th>`).join('')}<th>Gesamt</th><th>Note</th><th>Zeit</th><th>Text</th></tr>${pr.slice(-6).reverse().map(e=>`<tr><td>${esc(e.day)}</td>${['A','B','C','D','E','F'].map(k=>{const p=(e.parts||{})[k]||{};return `<td>${String(p.pts??'–').replace('.',',')}/${p.max??''}</td>`;}).join('')}<td><b>${String(e.total).replace('.',',')} / ${e.max}</b></td><td><b>${e.grade}</b></td><td>${fmtMin(e.ms||0)}${e.pauses?` (${e.pauses}× Pause)`:''}</td><td>${e.text?`${e.text.f}: ${e.text.sentences} Sätze, Inhalt ${e.text.inhalt}/6, Sprache ${e.text.sprache}/6${(e.text.errs||[]).length?'<br><span class="legend">'+esc(e.text.errs.slice(0,4).join(' · '))+'</span>':''}`:'–'}</td></tr>`).join('')}</table></div>
  <p class="legend">Teile: A Hören (8) · B Vokabeln (12) · C être (8) · D Artikel (12) · E Verben (10) · F Text (12). Note nach üblichem Schlüssel (92/81/67/50/30 %) – Orientierung.</p>`:'<p class="legend">Noch keine Probe-Arbeit.</p>'}`;
 // Mini-Probearbeiten (Hausaufgaben-Pakete)
 const mi=ev.filter(e=>e.kind==='mini_end');if(mi.length)h+=`<h4>🧪 Mini-Probearbeiten</h4><div class="rp-scroll"><table class="rp"><tr><th>Datum</th><th>Paket</th><th>Punkte</th><th>%</th><th>Note</th><th>Zeit</th><th>Fehler</th></tr>${mi.slice(-8).reverse().map(e=>`<tr><td>${esc(e.day)}</td><td>${esc(e.title||e.pkg)}</td><td>${e.pts}/${e.max}</td><td><b>${e.pct} %</b></td><td><b>${e.grade}</b></td><td>${fmtMin(e.ms||0)}</td><td>${(e.wrong||[]).slice(0,3).map(w=>`<span class="legend">${esc(w.q).slice(0,60)}</span>: <s>${esc(w.given)}</s> → <b>${esc(w.correct)}</b>`).join('<br>')||'–'}</td></tr>`).join('')}</table></div>`;
 // Spiele
 const gs=ev.filter(e=>e.kind==='game_end');const GN=Object.assign({etre:'⚡ être-Blitz',artikel:'🧺 Artikel-Sortierer',lego:'🧱 Endungs-Lego'},Object.fromEntries((window.GAMECAT||[]).map(g=>[g.id,g.ic+' '+g.t])));
 if(!PKG||PKG.spiele)h+=`<h4>🎮 Spiele</h4>${gs.length?`<table class="rp"><tr><th>Spiel</th><th>Rekord</th><th>gespielt</th><th>zuletzt</th></tr>${Object.keys(GN).map(g=>{const x=gs.filter(e=>e.game===g);if(!x.length)return '';return `<tr><td>${GN[g]}</td><td><b>${Math.max(...x.map(e=>e.score||0))}</b></td><td>${x.length}×</td><td>${x[x.length-1].score} (${x[x.length-1].right} ✓ / ${x[x.length-1].wrong} ✗)</td></tr>`;}).join('')}</table>`:'<p class="legend">Noch nicht gespielt.</p>'}`;
 return h+'</div>';}
async function showReport(){const o=$('#rpOut');o.innerHTML='<p class="legend">Lade …</p>';
 const data=window.LOG?await window.LOG.fetchAll(LS.map(m=>m.slug).concat(['training'])):{};o.innerHTML=trainingHTML(data.training)+berichtHTML(data);}
$('#rpBtn').onclick=showReport;if(location.hash==='#bericht')showReport();
document.querySelectorAll('.ov-check input').forEach(i=>i.onchange=()=>{ck[i.dataset.k]=i.checked;set(CKEY,ck);});
})();
