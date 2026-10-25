/* ===================== MINI-PROBEARBEIT eines Pakets (v. a. Hausaufgaben) =====================
   training/#mini-<paket-id> · ca. 10 gemischte Aufgaben aus den Lektionen des Pakets · Prozent + Note (Orientierung)
   Protokoll: Antworten wie üblich (mode 'mini'), Ergebnis als 'mini_end' mit pkg im Dokument „training“. */
(function(){
'use strict';
const W=window,HUB=W.HUB,TR=W.TR,PK=W.PK,$=(s,r=document)=>r.querySelector(s);
if(!HUB||!PK)return;
const M=()=>document.getElementById('main');
const esc=t=>String(t==null?'':t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const chOf=e=>{const c=String(e.ref||e.ch||'');const full=c.includes(':')?c:e._slug+':'+c;return {full,loc:full.split(':').pop()};};
const txt=t=>String(t==null?'':t).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const OK_TYPES=['mc','gap','seg','order','match','multi','gapw','detect','pick','click','mark','write','dialog'];
const ring=(p,c)=>`<span class="pk-ring big" style="--p:${p||0};--rc:${c}"><b>${p==null?'?':p+'<small>%</small>'}</b></span>`;
function pool(pkg){const S=PK.slugs(pkg);return HUB.E.ALLEX.filter(e=>S.includes(e._slug)&&OK_TYPES.includes(e.type)&&!(e.type==='write'&&!(e.ans&&e.ans.length)));}
function pick(pkg){const n=(pkg.probe&&pkg.probe.n)||10;const P=pool(pkg);const by={};P.forEach(e=>{const k=chOf(e).full;(by[k]=by[k]||[]).push(e);});
 const groups=shuffle(Object.values(by).map(shuffle));const out=[];let au=0;
 while(out.length<n&&groups.some(g=>g.length)){for(const g of groups){if(out.length>=n)break;let k=g.findIndex(e=>!e.au||au<2);if(k<0)continue;const e=g.splice(k,1)[0];if(e.au)au++;out.push(e);}}
 return shuffle(out);}
HUB.views.mini=function(id){const pkg=PK.get(id);const h=$('#hubTitle');
 if(!pkg||!pkg.probe||pkg.probe.typ!=='mini'){M().innerHTML=`<div class="card"><p>Diese Mini-Probearbeit gibt es nicht.</p><a class="btn" href="../">Zurück</a></div>`;return;}
 if(h)h.textContent='Mini-Probearbeit';document.title='Mini-Probearbeit – '+pkg.titel+' · Arjens Lernportal';
 const back=document.querySelector('.topbar .back');if(back)back.setAttribute('href','../'+pkg.id+'/');
 const r=PK.probe(pkg)||{n:0};const n=(pkg.probe&&pkg.probe.n)||10;const L=PK.lessons(pkg);
 M().innerHTML=`<div class="crumb"><a class="btn ghost small" href="../${pkg.id}/">← ${esc(pkg.titel)}</a><span class="crumb-n">Mini-Probearbeit</span></div>
 <section class="mini-hero">${ring(r.n?r.last.pct:null,'#0d9488')}<div><div class="ov-k">🧪 Mini-Probearbeit · ${PK.fmtDate(pkg)}</div><h1>${esc(pkg.titel)}</h1>
 <p>${n} gemischte Aufgaben aus ${L.length===1?'der Lektion':'den '+L.length+' Lektionen'} dieses Pakets. Gezählt wird der erste Versuch. Am Ende siehst du Prozent und Note (Orientierung).</p>
 <p class="legend">${r.n?`Zuletzt: <b>${r.last.pct} %</b> · Note ${r.last.grade}${r.n>1?` · bestes Ergebnis: ${r.best.pct} %`:''} · ${r.n}× geschrieben`:'Noch nicht geschrieben.'}</p></div></section>
 <div class="pk-chips" style="margin:10px 0">${(pkg.schwerpunkte||[]).map(s=>`<span class="chip">${esc(s)}</span>`).join('')}</div>
 <div class="toolbar center"><button class="btn green big" id="miniGo">🧪 Mini-Probearbeit starten</button></div>`;
 $('#miniGo').onclick=()=>{const list=pick(pkg);if(!list.length){HUB.E.toast('Keine Aufgaben gefunden.');return;}HUB.E.start('mini',list,{pkg:pkg.id});};};
const prevHead=HUB.head;HUB.head=(S,e,c)=>S.mode==='mini'?'🧪 Mini-Probearbeit':prevHead?prevHead(S,e,c):null;
const prevQuit=HUB.quit;HUB.quit=S=>{if(S&&S.mode==='mini'){HUB.E.go('mini',S.cfg.pkg);return;}if(prevQuit)prevQuit(S);else HUB.E.go('home');};
const prevRes=HUB.result;
HUB.result=(S,x)=>{if(S.mode!=='mini')return prevRes?prevRes(S,x):null;const pkg=PK.get(S.cfg.pkg)||{id:S.cfg.pkg,titel:S.cfg.pkg};
 const pct=Math.floor(x.pts/(x.max||1)*100);const grade=TR.grade(pct);const wrong=x.res.filter(r=>!r.ok);
 if(!S.logged){S.logged=1;TR.miniEnd({pkg:pkg.id,title:pkg.titel,pts:x.pts,max:x.max,pct,grade,tasks:x.res.length,
  wrong:wrong.slice(0,10).map(r=>({task:r.e.id,lesson:r.e._slug,ch:chOf(r.e).loc,q:TR.clip(r.e.q||r.e.sub||'',120),given:TR.clip(r.raw!=null?r.raw:txt(r.given),80),correct:TR.clip(txt(r.sol),80)})),ms:Date.now()-S.t0});}
 const by={};wrong.forEach(r=>{const c=chOf(r.e);(by[c.full]=by[c.full]||{s:r.e._slug,full:c.full,ch:c.loc,L:r.e._L,n:0}).n++;});
 const CH=HUB.E.CHMAP;
 const msg=pct>=81?'Très bien! Das sitzt.':pct>=67?'Bien! Fast alles verstanden.':pct>=50?'Pas mal – schau dir die Fehler noch einmal an.':'Courage! Übe die Lektionen noch einmal.';
 if(pct>=81)setTimeout(()=>HUB.E.confetti&&HUB.E.confetti(),50);
 return `<div class="ex-wrap"><div class="ex-card result fade"><div class="mini-kick">MINI-PROBEARBEIT · ${esc(pkg.titel)}</div>
 <div class="mini-res">${ring(pct,pct>=67?'#16a34a':pct>=50?'#f59e0b':'#dc2626')}<div><div class="score">${x.pts} / ${x.max} Punkte</div><div class="score-sub">Note ${grade} (Orientierung) · ${msg}</div></div></div>
 ${wrong.length?`<div class="review"><h3>📌 Das solltest du noch einmal üben</h3>${Object.values(by).map(b=>{const c=CH[b.full];return `<div class="it"><div class="t"><b>${c?c.icon+' '+c.title:esc(b.ch)}</b><br><span class="legend">${b.L?esc(b.L.title):''} · ${b.n} Fehler</span></div><a class="btn small" href="../${b.s}/#k=${b.ch}">📘 Zur Erklärung</a></div>`;}).join('')}</div>`:'<div class="tip" style="margin-top:16px"><span class="tip-ic">🎉</span><div>Alles richtig – parfait!</div></div>'}
 <div class="toolbar center"><button class="btn" id="miniAgain">↻ Neue Mini-Probearbeit</button><a class="btn ghost" href="../${pkg.id}/">Zurück zum Paket</a></div></div></div>`;};
const prevMounted=HUB.mounted;HUB.mounted=S=>{if(S.mode==='mini'){const b=$('#miniAgain');if(b)b.onclick=()=>HUB.E.go('mini',S.cfg.pkg);return;}if(prevMounted)prevMounted(S);};
})();
