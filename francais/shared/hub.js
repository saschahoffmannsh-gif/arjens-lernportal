/* ===================== TRAINING-SEITE: Tagesmission + Fehlerkiste (nutzt die gemeinsame Engine) ===================== */
(function(){
'use strict';
const W=window,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=W.esc,strip=W.strip,V=W.V,TR=W.TR;
const get=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k)||'null');return v==null?d:v;}catch(e){return d;}};
const LS=W.LESSONS||[],ORDER=LS.map(m=>m.slug),LM={};LS.forEach(m=>LM[m.slug]=m);
const HUB={views:{},E:null};W.HUB=HUB;
const M=()=>document.getElementById('main');
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
let BYID={};const REMOTE={};
/* ---------- Daten der Lektionen ---------- */
const lessonP=slug=>get('fr_lekt_'+slug+'_v2',null)||{ch:{},asked:{},test:{}};
const lid=e=>String(e.id).replace(/^[^:]*:/,'');
const chs=slug=>HUB.E.CHMAP?Object.values(HUB.E.CHMAP).filter(c=>c.slug===slug&&!c.extra&&c.lid!=='test'):[];
function hoerStarted(){const p=lessonP('ecouter');return Object.values(p.ch||{}).some(c=>c&&(c.runs||c.seen||Object.keys(c.solved||{}).length))||Object.keys(p.asked||{}).length>0||(p.test&&p.test.runs>0);}
function lessonEvents(slug){const loc=W.LOG?W.LOG.local(slug):[];const rem=REMOTE[slug]||[];const ids=new Set(loc.map(e=>e.id));return loc.concat(rem.filter(e=>!ids.has(e.id)));}
function chStats(slug){const S={};const ev=lessonEvents(slug);ev.forEach(e=>{if(e.kind==='answer'&&e.mode==='chapter'&&e.first){const x=S[e.chIn||e.ch]=S[e.chIn||e.ch]||{n:0,ok:0};x.n++;if(e.ok)x.ok++;}});return S;}
function taskOf(gid){if(/^gen:/.test(gid)){const it=TR.kiste.items()[gid];if(!it||!it.def)return null;const d=it.def;const ch=d.l+':'+d.ch;if(!HUB.E.CHMAP[ch])return null;
  return Object.assign({},d.e,{id:gid,gid,ch,lv:(d.e&&d.e.lv)||2,_slug:d.l,_L:(W.HUBL[d.l]||{}).L,def:d});}
 return BYID[gid]||null;}
/* ---------- Tagesmission zusammenstellen ---------- */
function buildMission(){
 const hs=hoerStarted();const used=new Set();const out=[];const G={kiste:0,weak:0,fresh:0,fill:0};const weakT=[];
 const ok=e=>e&&!used.has(e.id)&&(hs||!e.au)&&!(e.type==='write'&&e.ans&&String(e.ans[0]).length>70);
 const add=(e,g)=>{if(!ok(e))return false;used.add(e.id);out.push({e,g});G[g]++;return true;};
 // 1) fällige Fehlerkiste
 TR.kiste.due().forEach(i=>{if(G.kiste<5)add(taskOf(i.gid),'kiste');});
 // 2) Schwächen: 1. Versuch < 70 % oder ≥ 3 Durchgänge
 const weak=[];ORDER.forEach(slug=>{if(slug==='ecouter'&&!hs)return;const P=lessonP(slug);const st=chStats(slug);
  chs(slug).forEach(c=>{const p=(P.ch||{})[c.lid]||{};const s=st[c.lid];const acc=s&&s.n>=3?s.ok/s.n:null;
   if((acc!=null&&acc<.7)||(p.runs||0)>=3)weak.push({c,slug,acc:acc==null?.69:acc,P});});});
 weak.sort((a,b)=>a.acc-b.acc);
 for(const w of weak){if(G.weak>=4)break;const pool=w.c.ex.filter(e=>ok(e)).sort((a,b)=>((w.P.asked||{})[lid(a)]||0)-((w.P.asked||{})[lid(b)]||0)||a.lv-b.lv||Math.random()-.5);
  let k=0;for(const e of pool){if(k>=2||G.weak>=4)break;if(add(e,'weak'))k++;}if(k)weakT.push(strip(w.c.title));}
 // 3) Neues aus Lektionen, die noch nicht fertig sind
 const target=10;
 ORDER.forEach(slug=>{if(out.length>=target)return;if(slug==='ecouter'&&!hs)return;const P=lessonP(slug);
  const open=chs(slug).filter(c=>{const p=(P.ch||{})[c.lid]||{};return !((p.runs||0)>0&&(p.best||0)>=70);});if(!open.length)return;
  let k=0;for(const c of open){const pool=shuffle(c.ex.filter(e=>ok(e)&&!(P.asked||{})[lid(e)]&&e.lv<=2)).sort((a,b)=>a.lv-b.lv);for(const e of pool){if(k>=2||out.length>=target)break;if(add(e,'fresh'))k++;}if(k>=2)break;}});
 // 4) auffüllen mit Wiederholung (Stufe 2–3) aus allen erlaubten Lektionen
 if(out.length<target){const pool=shuffle(ORDER.filter(s=>s!=='ecouter'||hs).flatMap(s=>chs(s).flatMap(c=>c.ex)).filter(e=>ok(e)&&e.lv>=2));for(const e of pool){if(out.length>=target)break;add(e,'fill');}}
 const RANK={kiste:0,weak:1,fresh:2,fill:3};
 out.sort((a,b)=>(a.e.lv||1)-(b.e.lv||1)||RANK[a.g]-RANK[b.g]||ORDER.indexOf(a.e._slug)-ORDER.indexOf(b.e._slug));
 out.forEach(x=>x.e._g=x.g);
 return {list:out.slice(0,12).map(x=>x.e),G,weakT,hs};}
HUB.buildMission=buildMission;
/* ---------- Bausteine ---------- */
const flame=n=>`<span class="streak${n?'':' off'}"><span class="fl">🔥</span><b>${n}</b><small>${n===1?'Tag':'Tage'} in Folge</small></span>`;
const secHead=(t,ic)=>`<div class="section-title"><div class="bar"></div><h2>${ic?ic+' ':''}${t}</h2></div>`;
const howBox=(t,x,open)=>`<details class="intro howto"${open?' open':''}><summary><span class="in-ic">📖</span><span>${t}</span><span class="in-tg" aria-hidden="true"></span></summary><div class="intro-body">${V.explain(x)}</div></details>`;
HUB.howBox=howBox;HUB.flame=flame;HUB.secHead=secHead;
function kisteBox(c,o={}){const F=[[1,'Fach 1','morgen wieder','#ef4444'],[2,'Fach 2','nach 3 Tagen','#f59e0b'],[3,'Fach 3','nach 7 Tagen','#22c55e']];
 const card=n=>Array.from({length:Math.min(n,8)},(_,i)=>`<i style="--i:${i}"></i>`).join('');
 return `<div class="kbox${o.small?' small':''}" role="img" aria-label="Fehlerkiste: Fach 1 ${c[1]}, Fach 2 ${c[2]}, Fach 3 ${c[3]}, geschafft ${c.done}">
 <div class="kb-lid">🗃️ Fehlerkiste</div><div class="kb-row">${F.map(f=>`<div class="kb-f" style="--fc:${f[3]}"><div class="kb-cards">${card(c[f[0]])}</div><b class="kb-n">${c[f[0]]}</b><span class="kb-t">${f[1]}</span><small>${f[2]}</small></div>`).join('')}
 <div class="kb-f kb-out"><div class="kb-cards">${c.done?'<span class="kb-star">⭐</span>':''}</div><b class="kb-n">${c.done}</b><span class="kb-t">raus ✓</span><small>3× richtig</small></div></div></div>`;}
HUB.kisteBox=kisteBox;
/* ---------- Ansichten ---------- */
function setTitle(t){const h=$('#hubTitle');if(h)h.textContent=t;document.title=t+' – Französisch · Arjens Lernportal';}
HUB.views.home=function(){setTitle('Training');const c=TR.kiste.counts(),s=TR.streak();
 M().innerHTML=`<section class="hubhero"><h1>🎯 Training</h1><p>Kurz, gezielt, jeden Tag – zusätzlich zu den Lektionen.</p></section>
 <button class="mission-btn" data-hub="mission"><span class="mb-ic">🚀</span><span class="mb-t"><b>Heute: 10-Minuten-Mission</b><small>${s.today?'✓ Heute schon geschafft – noch eine?':'10–12 Aufgaben: Fehlerkiste, Schwächen, Neues'}</small></span>${flame(s.n)}</button>
 <div class="hubgrid"><button class="hubtile" data-hub="kiste"><span class="ht-ic">🗃️</span><b>Fehlerkiste</b><small>${c.due?`<span class="duebadge">${c.due} fällig</span>`:'nichts fällig'} · ${c.total} drin</small></button>
 <button class="hubtile" data-hub="probe"><span class="ht-ic">📝</span><b>Probe-Klassenarbeit</b><small>wie die echte Arbeit · 45 Min.</small></button>
 <button class="hubtile" data-hub="spiele"><span class="ht-ic">🎮</span><b>Spiele</b><small>être-Blitz · Artikel · Lego</small></button></div>
 <div class="toolbar center"><a class="btn ghost" href="../">← Zur Französisch-Übersicht</a></div>`;};
HUB.views.mission=function(){setTitle('Tagesmission');const m=buildMission();HUB._m=m;const s=TR.streak();
 const lvN=[1,2,3].map(l=>m.list.filter(e=>(e.lv||1)===l).length);
 M().innerHTML=`<div class="crumb"><a class="btn ghost small" href="../">← Übersicht</a><span class="crumb-n">Tagesmission</span></div>
 <section class="mhero"><div class="mh-rocket" aria-hidden="true">🚀</div><h1>Heute: 10-Minuten-Mission</h1>${flame(s.n)}<p class="legend">${s.today?'Heute schon geschafft! Eine Extra-Runde zählt nicht doppelt für die Serie.':s.n?`Schaff heute die Mission – dann sind es <b>${s.n+1} Tage</b> in Folge!`:'Jeden Tag eine Mission = Serie 🔥'}</p></section>
 <div class="mplan">${[['🗃️','Fehlerkiste',m.G.kiste,'kiste'],['💪','Schwächen',m.G.weak,'weak'],['✨','Neu',m.G.fresh,'fresh'],['🔁','Wiederholen',m.G.fill,'fill']].filter(x=>x[2]).map(x=>`<div class="mp-c mp-${x[3]}"><span>${x[0]}</span><b>${x[2]}</b><small>${x[1]}</small></div>`).join('')}</div>
 ${m.weakT.length?`<p class="legend center">💪 Schwächen heute: ${m.weakT.map(esc).join(' · ')}</p>`:''}
 <div class="mlv">${['leicht','mittel','schwer'].map((t,i)=>lvN[i]?`<span class="lvp lv${i+1}">${'★'.repeat(i+1)} ${t}: ${lvN[i]}</span>`:'').filter(Boolean).join('<span class="ar">→</span>')}</div>
 <div class="toolbar center"><button class="btn big green" id="mStart" ${m.list.length?'':'disabled'}>▶ Mission starten (${m.list.length} Aufgaben)</button></div>
 ${m.hs?'':'<p class="legend center">🎧 Hörübungen kommen erst in die Mission, wenn du mit „Hörverstehen“ angefangen hast.</p>'}
 ${howBox('So funktioniert die Mission',{vis:`<div class="mplan">${[['🗃️','Fehlerkiste'],['💪','Schwächen'],['✨','Neu']].map(x=>`<div class="mp-c"><span>${x[0]}</span><small>${x[1]}</small></div>`).join('<span class="ar">→</span>')}</div>`,
  was:'Jeden Tag 10–12 Aufgaben – genau das, was du gerade brauchst.',warumVis:`<div class="vh"><span class="vh-i">📅</span><div>5 × 10 Minuten <b>&gt;</b> 1 × 50 Minuten</div></div>`,warum:'Jeden Tag ein bisschen bleibt besser im Kopf als alles auf einmal.',
  schritte:[['🗃️','Erst die <b>fälligen Fehler</b> aus der Fehlerkiste'],['💪','dann Kapitel, die noch <b>wackeln</b> (unter 70 %)'],['✨','dann <b>Neues</b> aus Lektionen, die noch offen sind'],['⭐→⭐⭐⭐','immer von <b>leicht</b> nach <b>schwer</b>']],
  merk:'Jeden Tag eine Mission – die Serie 🔥 wächst.',fallen:['Nicht raten! Lies die Erklärung, wenn etwas falsch war – sonst kommt der Fehler wieder.']})}`;
 $('#mStart').onclick=()=>{HUB._mt0=Date.now();HUB.E.start('mission',m.list,{G:m.G});};};
HUB.views.kiste=function(){setTitle('Fehlerkiste');const c=TR.kiste.counts();const due=TR.kiste.due();const nd=TR.kiste.nextDue();
 const items=TR.kiste.active().sort((a,b)=>a.due<b.due?-1:1);const tl=t=>{const e=taskOf(t.gid);return e?strip(String(e.q||'')).slice(0,80):t.p||t.gid;};
 const ldue=d=>{const n=TR.diffDays(TR.day(),d);return n<=0?'heute':n===1?'morgen':`in ${n} Tagen`;};
 M().innerHTML=`<div class="crumb"><a class="btn ghost small" href="../">← Übersicht</a><span class="crumb-n">Fehlerkiste</span></div>
 <h1 class="hub-h1">🗃️ Deine Fehlerkiste</h1>${kisteBox(c)}
 <div class="kdue ${c.due?'':'none'}">${c.due?`<b>📅 Heute fällig: ${c.due}</b><button class="btn green big" id="kGo">▶ Fällige üben (${Math.min(due.length,12)})</button>`:`<b>✓ Heute ist nichts fällig.</b><span class="legend">${nd?'Nächste Karten: '+ldue(nd)+'.':c.total?'':'Noch keine Fehler drin – super! Jede Aufgabe, die beim 1. Versuch falsch ist, landet hier.'}</span>`}</div>
 ${due.length?`<ol class="klist">${due.slice(0,12).map(i=>`<li><span class="kl-f f${i.box}">${i.box}</span><span class="kl-t">${LM[i.l]?LM[i.l].icon+' ':''}${esc(tl(i))}</span>${i.n>1?`<small class="kl-n">${i.n}× falsch</small>`:''}</li>`).join('')}</ol>`:''}
 ${items.length>due.length?`<details class="kmore"><summary>📦 Alle Karten in der Kiste (${items.length})</summary><ol class="klist">${items.filter(i=>!due.includes(i)).map(i=>`<li><span class="kl-f f${i.box}">${i.box}</span><span class="kl-t">${LM[i.l]?LM[i.l].icon+' ':''}${esc(tl(i))}</span><small class="kl-n">${ldue(i.due)}</small></li>`).join('')}</ol></details>`:''}
 ${howBox('So funktioniert die Fehlerkiste',{vis:kisteBox({1:3,2:2,3:1,done:1},{small:true}),was:'Was du beim 1. Versuch falsch hattest, landet hier – automatisch, aus allen Lektionen.',
  warumVis:`<div class="kcurve"><span>Tag 1</span><span class="ar">→</span><span>Tag 3</span><span class="ar">→</span><span>Tag 7</span><span class="ar">→</span><span>⭐ sitzt!</span></div>`,warum:'Wiederholen kurz bevor du es vergisst – so bleibt es für immer.',
  schritte:[['<span class="kl-f f1">1</span>','Falsch → <b>Fach 1</b>, morgen wieder'],['<span class="kl-f f2">2</span>','Richtig → <b>Fach 2</b>, nach 3 Tagen'],['<span class="kl-f f3">3</span>','Richtig → <b>Fach 3</b>, nach 7 Tagen'],['⭐','3× hintereinander richtig → <b>raus!</b>']],
  merk:'Falsch = zurück in Fach 1. Richtig = ein Fach weiter.',fallen:['Früher üben geht, zählt aber nicht als „richtig“ – nur fällige Karten wandern weiter.']})}
 ${items.length?`<div class="toolbar center">${items.length>due.length?`<button class="btn ghost" id="kAll">🔁 Alle ${Math.min(items.length,12)} jetzt üben (zählt nicht)</button>`:''}</div>`:''}
 <div class="resetbox"><div><h3>↺ Fehlerkiste leeren</h3><p>Löscht alle Karten (auf allen Geräten).</p></div><button class="btn red" id="kReset" ${c.total||c.done?'':'disabled'}>Leeren</button></div>`;
 const go=$('#kGo');if(go)go.onclick=()=>{const l=due.map(i=>taskOf(i.gid)).filter(Boolean).slice(0,12);if(!l.length){HUB.E.toast('Diese Aufgaben gibt es nicht mehr.');return;}HUB.E.start('kiste',l,{boxes:Object.fromEntries(due.map(i=>[i.gid,i.box]))});};
 const all=$('#kAll');if(all)all.onclick=()=>{const l=shuffle(items).map(i=>taskOf(i.gid)).filter(Boolean).slice(0,12);HUB.E.start('kiste',l,{early:true,boxes:Object.fromEntries(items.map(i=>[i.gid,i.box]))});};
 $('#kReset').onclick=()=>{if(confirm('Fehlerkiste wirklich leeren? Alle Karten werden gelöscht.')){TR.kiste.reset();HUB.E.toast('Fehlerkiste geleert.');HUB.E.go('kiste');}};};
/* ---------- Kopfzeile in der Übung ---------- */
HUB.head=(S,e,c)=>{const l=LM[e._slug];const t=(l?l.icon+' ':'')+strip(c?c.title:'');
 if(S.mode==='mission')return `🚀 Mission · ${t}`;if(S.mode==='kiste'){const b=(S.cfg.boxes||{})[e.gid||e.id];return `🗃️ Fach ${b||1} · ${t}`;}return null;};
HUB.quit=S=>{HUB.E.go(S&&(S.mode==='mission'||S.mode==='kiste')?S.mode:'home');};
/* ---------- Ergebnis: Mission (Belohnung) und Fehlerkiste ---------- */
const trophy=st=>`<svg class="reward" viewBox="0 0 200 170" aria-hidden="true"><g class="rw-rays">${Array.from({length:12},(_,i)=>`<rect x="98" y="2" width="4" height="26" rx="2" fill="#fbbf24" transform="rotate(${i*30} 100 85)"/>`).join('')}</g>
 <g class="rw-cup"><path d="M62 40h76v26c0 26-17 42-38 42s-38-16-38-42z" fill="#f59e0b" stroke="#b45309" stroke-width="4"/><path d="M62 50H44c0 20 10 30 22 30M138 50h18c0 20-10 30-22 30" fill="none" stroke="#b45309" stroke-width="6" stroke-linecap="round"/>
 <rect x="90" y="106" width="20" height="18" fill="#b45309"/><rect x="70" y="122" width="60" height="14" rx="4" fill="#92400e"/><text x="100" y="80" text-anchor="middle" font-size="26" font-weight="800" fill="#fff" font-family="FredokaApp,sans-serif">${st}★</text></g></svg>`;
function moves(S){const up=[],down=[],out=[];(S.kmv||[]).forEach((m,i)=>{if(!m||m.early)return;const e=S.list[i];if(m.to===4)out.push(e);else if(m.to>m.from&&m.from>0)up.push(e);else if(m.to===1)down.push(e);});return {up,down,out};}
HUB.result=(S,sum)=>{if(S.mode!=='mission'&&S.mode!=='kiste')return null;
 const st=sum.pct>=90?3:sum.pct>=70?2:sum.pct>=50?1:0;const mv=moves(S);const wrong=sum.res.filter(r=>!r.ok);
 const mvH=`<div class="kmoves">${mv.out.length?`<span class="km out">⭐ ${mv.out.length} raus aus der Kiste</span>`:''}${mv.up.length?`<span class="km up">⬆ ${mv.up.length} ein Fach weiter</span>`:''}${mv.down.length?`<span class="km down">↩ ${mv.down.length} zurück in Fach 1 (morgen wieder)</span>`:''}</div>`;
 const wl=wrong.length?`<div class="review"><h3>📌 Das kommt morgen in der Fehlerkiste wieder</h3>${wrong.map(r=>{const c=HUB.E.CHMAP[r.e.ref]||HUB.E.CHMAP[r.e.ch]||{};const l=LM[r.e._slug];return `<div class="it"><div class="t"><b>${l?l.icon:''} ${strip(c.title||'')}</b><br><span class="legend">${esc(strip(String(r.e.q||'')).slice(0,90))}</span></div>${l&&c.lid?`<a class="btn small" href="../${l.slug}/#k=${c.lid}">📘 Erklärung</a>`:''}</div>`;}).join('')}</div>`:'';
 if(S.mode==='mission'){
  if(!S.mlogged){S.mlogged=1;TR.missionDone({n:S.list.length,pts:sum.pts,max:sum.max,pct:sum.pct,stars:st,G:S.cfg.G||{},firstRight:sum.res.filter(r=>r.ok).length,wrongTasks:wrong.map(r=>HUB.E.gidOf(r.e)),ms:Date.now()-S.t0,kiste:{up:mv.up.length,down:mv.down.length,out:mv.out.length}});}
  const s=TR.streak();setTimeout(()=>HUB.E.confetti(),200);
  return `<div class="ex-wrap"><div class="ex-card result fade mission-done"><div class="kick-red" style="background:#1e3a8a">🚀 MISSION ERFÜLLT</div>${trophy(st)}
  <div class="score">${sum.pts} / ${sum.max} Punkte</div><div class="score-sub">${sum.pct} % · ${st===3?'Excellent!':st===2?'Très bien!':st===1?'Pas mal!':'Courage – morgen wird’s besser!'}</div>
  <div class="streak-big">${flame(s.n)}<div class="sb-days">${[6,5,4,3,2,1,0].map(k=>{const d=TR.addDays(TR.day(),-k);const on=TR.missionDays().has(d);return `<span class="sd${on?' on':''}${k===0?' today':''}" title="${d}">${on?'🔥':'·'}</span>`;}).join('')}</div><small class="legend">die letzten 7 Tage</small></div>
  ${mvH}${wl}<div class="toolbar center"><a class="btn green" href="../">Zur Übersicht</a><button class="btn ghost" data-hub="kiste">🗃️ Fehlerkiste</button></div></div></div>`;}
 if(!S.klogged){S.klogged=1;HUB.E.lg({kind:'kiste_end',n:S.list.length,pts:sum.pts,max:sum.max,pct:sum.pct,early:!!S.cfg.early,up:mv.up.length,down:mv.down.length,out:mv.out.length,flush:true});}
 return `<div class="ex-wrap"><div class="ex-card result fade"><div class="kick-red" style="background:#7c3aed">🗃️ FEHLERKISTE</div>${kisteBox(TR.kiste.counts())}
 <div class="score">${sum.res.filter(r=>r.ok).length} / ${sum.res.length} richtig</div>${S.cfg.early?'<p class="legend">Vorgezogen geübt – die Karten wandern erst weiter, wenn sie fällig sind.</p>':''}${mvH}${wl}
 <div class="toolbar center"><button class="btn" data-hub="kiste">🗃️ Zur Fehlerkiste</button><a class="btn ghost" href="../">Zur Übersicht</a></div></div></div>`;};
/* ---------- Start ---------- */
HUB.init=E=>{HUB.E=E;BYID={};E.ALLEX.forEach(e=>{BYID[e.id]=e;});
 if(W.LOG&&W.LOG.store){W.LOG.fetchAll(ORDER).then(d=>{ORDER.forEach(s=>{REMOTE[s]=((d[s]||{}).events)||[];});}).catch(()=>{});}
 TR.sync().then(n=>{const c=E.cur&&E.cur();if(n&&['kiste','home','mission'].includes(c))E.go(c,null,true);});};
HUB.initial=()=>{const h=(location.hash||'').slice(1);if(HUB.views[h])return [h];const m=h.match(/^spiel-(\w+)$/);if(m&&HUB.views.game)return ['game',m[1]];return null;};
document.addEventListener('click',ev=>{const b=ev.target.closest('[data-hub]');if(!b)return;ev.preventDefault();const v=b.dataset.hub;const m=v.match(/^spiel-(\w+)$/);if(m)HUB.E.go('game',m[1]);else HUB.E.go(v);});

})();
