/* ===================== MINI-SPIELE (Übung, kein Ersatz für die Lektionen) =====================
   être-Blitz · Artikel-Sortierer · Endungs-Lego – je 60 Sekunden, Rekord + Protokoll */
(function(){
'use strict';
const W=window,HUB=W.HUB,TR=W.TR,V=W.V,H=W.H,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=W.esc;const M=()=>document.getElementById('main');
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const rnd=a=>a[Math.floor(Math.random()*a.length)];
const ROUND=60;
/* ---------- Daten ---------- */
const EB=[['Karim','je','suis'],['Théo','tu','es'],['Léo','il','est'],['Clara','elle','est'],[['Théo','Clara'],'on','est'],[['Théo','Clara'],'nous','sommes'],[['Noah','Jade'],'vous','êtes'],[['Théo','Karim'],'ils','sont'],[['Jade','Yasmine'],'elles','sont'],
 ['Clara','Clara','est'],[['Léo','Lucas'],'Léo et Lucas','sont'],[['Clara','Karim'],'Clara et moi, nous','sommes'],['Martel','Monsieur Martel','est'],['Fournier','Madame Fournier','est'],[['Jade','Samira'],'Jade et Samira','sont'],[['Théo','Jade'],'Théo et Jade','sont'],['Noah','Noah','est']];
const FORMS=['suis','es','est','sommes','êtes','sont'];
const OB=[['lit','lit','m'],['table','table','f'],['chaise','chaise','f'],['lampe','lampe','f'],['armoire','armoire','f'],['etagere','étagère','f'],['poster','poster','m'],['photo','photo','f'],['guitare','guitare','f'],['ordinateur','ordinateur','m'],['globe','globe','m'],['livre','livre','m'],['cahier','cahier','m'],['bd','B.D.','f',1],['cd','CD','m',1],['minichaine','minichaîne','f'],['hamac','hamac','m'],['figurine','figurine','f'],['stylo','stylo','m'],['crayon','crayon','m'],['regle','règle','f'],['classeur','classeur','m'],['effaceur','effaceur','m'],['pierre','pierre','f'],['maison','maison','f']];
const VOW=/^[aeiouéèê]/i;
const ARTS={def:['le','la','l’','les'],ind:['un','une','des']};
const artOf=(o,pl,mode)=>mode==='def'?(pl?'les':VOW.test(o[1])?'l’':o[2]==='m'?'le':'la'):(pl?'des':o[2]==='m'?'un':'une');
const whyArt=(o,pl,mode)=>pl?'mehrere → '+(mode==='def'?'les':'des'):mode==='def'&&VOW.test(o[1])?'Vokal am Anfang → l’':(o[2]==='m'?'männlich → ':'weiblich → ')+(mode==='def'?(o[2]==='m'?'le':'la'):(o[2]==='m'?'un':'une'));
const PRON=[['je','e'],['tu','es'],['il','e'],['elle','e'],['on','e'],['nous','ons'],['vous','ez'],['ils','ent'],['elles','ent']];
const VERBS=['regarder','écouter','parler','téléphoner','présenter','appeler'];
const ENDS=['e','es','ons','ez','ent'];
/* ---------- Spiele ---------- */
const GAMES={
 etre:{t:'être-Blitz',ic:'⚡',c:'#ea580c',sub:'Wer? → die richtige Form von être',lesson:['etre','formen'],
  how:{vis:V.etreGrid(),was:'Du siehst, <b>wer</b> es ist – tippe schnell die passende Form von <b>être</b>.',schritte:[['👀','Wer? Figur + Wort ansehen'],[V.b('nous','p'),'Pronomen denken'],[V.b('sommes','v'),'Form antippen']],merk:'je suis · tu es · il / elle / on est · nous sommes · vous êtes · ils / elles sont',fallen:[['Clara et moi, nous/s|est/v','Clara et moi, nous/s|sommes/v','„… et moi“ = wir → <b>sommes</b>.']]}},
 artikel:{t:'Artikel-Sortierer',ic:'🧺',c:'#0d9488',sub:'Gegenstände in den richtigen Korb',lesson:['artikel-bestimmt','regel'],
  how:{vis:V.artSet([['lit','le','lit'],['lampe','la','lampe'],['armoire','l’','armoire'],['livre','les','livres']]),was:'Zieh jeden Gegenstand in den richtigen <b>Artikel-Korb</b> – oder tippe auf den Korb.',schritte:[['👥','Mehrere? → les / des'],['🅰️','Vokal am Anfang? → l’'],['♂ ♀','sonst: le / un (m.) · la / une (f.)']],merk:'Farben: le / un blau · la / une rot · l’ türkis · les / des lila',fallen:[['la armoire','l’armoire','Vokal → l’'],['un lampe','une lampe','lampe ist weiblich.']]}},
 lego:{t:'Endungs-Lego',ic:'🧱',c:'#16a34a',sub:'Die richtige Endung an den Stamm stecken',lesson:['verben-er','bauplan'],
  how:{vis:V.legoGrid('regarder'),warumVis:V.appeler(),was:'Steck die richtige <b>Endung</b> an den Stamm. Bei <b>appeler</b> wählst du zuerst den Stamm: <b>ll</b> oder <b>l</b>?',schritte:[[V.b('tu','p'),'Wer?'],[V.lego('regard','?',{ear:false}),'Stamm'],[V.lego('regard','es',{ear:false}),'Endung anstecken']],merk:'-e, -es, -e, -ons, -ez, -ent · appeler: ll, wenn die Endung stumm ist',fallen:[['tu regarde','tu regardes','tu → <b>-es</b>.'],['nous appellons','nous appelons','Endung hörbar → nur ein <b>l</b>.']]}}};
/* ---------- Übersicht ---------- */
HUB.views.spiele=function(){const h=$('#hubTitle');if(h)h.textContent='Spiele';
 M().innerHTML=`<div class="crumb"><a class="btn ghost small" href="../">← Übersicht</a><span class="crumb-n">Spiele</span></div><h1 class="hub-h1">🎮 Lern-Spiele</h1>
 ${V.hint('💡','Spiele sind <b>Extra-Übung</b> für zwischendurch – sie ersetzen die Lektionen nicht. Jede Runde dauert <b>1 Minute</b>.')}
 <div class="glist">${Object.entries(GAMES).map(([k,g])=>{const b=TR.gameBest(k);return `<button class="gtile" data-hub="spiel-${k}" style="--c:${g.c}"><span class="gt-ic">${g.ic}</span><span class="gt-b"><b>${g.t}</b><small>${g.sub}</small><small class="gt-best">🏆 Rekord: ${b.best} · ${b.plays}× gespielt</small></span></button>`;}).join('')}</div>`;};
let G=null;let gt=null;
const stop=()=>{if(gt){clearInterval(gt);gt=null;}};
HUB.views.game=function(id){stop();const g=GAMES[id];if(!g){HUB.E.go('spiele');return;}const h=$('#hubTitle');if(h)h.textContent=g.t;const b=TR.gameBest(id);
 M().innerHTML=`<div class="crumb"><button class="btn ghost small" data-hub="spiele">← Spiele</button><span class="crumb-n">${g.ic} ${g.t}</span></div>
 <section class="ghero" style="--c:${g.c}"><span class="gh-ic">${g.ic}</span><div><h1>${g.t}</h1><p>${g.sub}</p><span class="gt-best">🏆 Dein Rekord: <b>${b.best}</b></span></div></section>
 <div class="howto30"><div class="h30-h">⏱️ So geht’s – in 30 Sekunden</div>${V.explain(g.how)}</div>
 <div class="toolbar center sticky-go"><button class="btn big green" id="gGo">▶ Los! (1 Minute)</button></div>`;
 $('#gGo').onclick=()=>start(id);};
function frame(id){const g=GAMES[id];return `<div class="gplay" style="--c:${g.c}"><div class="gbar"><span class="g-sc">⭐ <b id="gS">0</b></span><div class="g-time"><i id="gT"></i></div><span class="g-s" id="gSec">${ROUND}</span><button class="btn ghost small" id="gQuit" aria-label="Spiel beenden">✕</button></div><div class="g-combo" id="gC"></div><div id="gArea" class="garea"></div><div class="g-msg" id="gM" aria-live="polite"></div></div>`;}
function start(id){stop();G={id,score:0,right:0,wrong:0,streak:0,mist:[],t0:Date.now(),lock:false,end:false};M().innerHTML=frame(id);window.scrollTo(0,0);
 $('#gQuit').onclick=()=>{stop();G.end=true;HUB.E.go('game',id);};
 const t0=Date.now();gt=setInterval(()=>{const s=ROUND-(Date.now()-t0)/1000;const el=$('#gT');if(!el){stop();return;}el.style.width=Math.max(0,s/ROUND*100)+'%';$('#gSec').textContent=Math.max(0,Math.ceil(s));if(s<=10)el.classList.add('low');if(s<=0){stop();finish();}},200);
 ({etre:etreNext,artikel:artNext,lego:legoNext})[id]();}
const hit=(ok,pts=1)=>{if(ok){G.right++;G.streak++;let p=pts;if(G.streak%5===0){p+=2;const c=$('#gC');if(c){c.textContent='🔥 Combo! +2';c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop');}}G.score+=p;}else{G.wrong++;G.streak=0;}const s=$('#gS');if(s)s.textContent=G.score;};
const msg=(t,cls)=>{const m=$('#gM');if(m){m.innerHTML=t;m.className='g-msg '+(cls||'');}};
/* être-Blitz */
let lastE=null;
function etreNext(){if(G.end)return;let it;do{it=rnd(EB);}while(it===lastE);lastE=it;G.cur=it;
 $('#gArea').innerHTML=`<div class="eb-card pop"><div class="eb-fig">${V.who(it[0])}</div><div class="eb-s">${V.b(it[1],'p')} ${V.b('?','v',{cls:'q'})}</div></div><div class="eb-btns">${FORMS.map(f=>`<button class="ebb" data-f="${f}">${f}</button>`).join('')}</div>`;msg('');
 $$('.ebb').forEach(b=>b.onclick=()=>{if(G.lock||G.end)return;const ok=b.dataset.f===it[2];hit(ok);b.classList.add(ok?'ok':'bad');
  if(!ok){$$('.ebb').find(x=>x.dataset.f===it[2]).classList.add('ok');G.mist.push([it[1]+' '+b.dataset.f,it[1]+' '+it[2]]);msg(`✗ ${esc(it[1])} <b>${it[2]}</b>`,'bad');}else msg('✓ '+esc(it[1])+' '+it[2],'ok');
  G.lock=true;setTimeout(()=>{G.lock=false;etreNext();},ok?260:1100);});}
/* Artikel-Sortierer */
function artNext(){if(G.end)return;G.mode=G.mode||(Math.random()<.5?'def':'ind');if(G.right+G.wrong>0&&(G.right+G.wrong)%6===0)G.mode=G.mode==='def'?'ind':'def';
 const o=rnd(OB);const pl=Math.random()<.3||o[3];const noun=pl&&!o[3]?o[1]+'s':o[1];const ans=artOf(o,pl,G.mode);G.cur={o,pl,noun,ans};
 const cls={le:'m',un:'m',la:'f',une:'f','l’':'l',les:'p',des:'p'};
 $('#gArea').innerHTML=`<div class="as-mode">${G.mode==='def'?'bestimmt: der / die / das':'unbestimmt: ein / eine'}</div><div class="as-stage"><div class="as-card pop" id="asCard"><span class="as-pic">${H.ob(o[0],pl?3:1)}</span><b class="fr">${esc(noun)}</b></div></div>
 <div class="as-baskets">${ARTS[G.mode].map(a=>`<button class="basket b-${cls[a]}" data-a="${a}"><span class="bk-ic">🧺</span><b>${a}</b></button>`).join('')}</div><p class="legend center">Ziehen oder Korb antippen</p>`;
 const card=$('#asCard');const drop=a=>{if(G.lock||G.end)return;const ok=a===ans;hit(ok);const bk=$$('.basket').find(x=>x.dataset.a===a);G.lock=true;
  if(ok){card.classList.add('fly');bk.classList.add('ok');msg(`✓ <b>${ans}${ans==='l’'?'':' '}${esc(noun)}</b>`,'ok');}else{card.classList.add('shake');bk.classList.add('bad');$$('.basket').find(x=>x.dataset.a===ans).classList.add('ok');G.mist.push([a+(a==='l’'?'':' ')+noun,ans+(ans==='l’'?'':' ')+noun]);msg(`✗ ${whyArt(o,pl,G.mode)}: <b>${ans}${ans==='l’'?'':' '}${esc(noun)}</b>`,'bad');}
  setTimeout(()=>{G.lock=false;artNext();},ok?380:1300);};
 $$('.basket').forEach(b=>b.onclick=()=>drop(b.dataset.a));
 // Ziehen mit Finger / Maus
 let sx=0,sy=0,drag=false;card.addEventListener('pointerdown',e=>{if(G.lock)return;drag=true;sx=e.clientX;sy=e.clientY;card.setPointerCapture(e.pointerId);card.classList.add('drag');});
 card.addEventListener('pointermove',e=>{if(!drag)return;card.style.transform=`translate(${e.clientX-sx}px,${e.clientY-sy}px) scale(1.05)`;const el=document.elementFromPoint(e.clientX,e.clientY);$$('.basket').forEach(b=>b.classList.toggle('hover',!!(el&&b.contains(el))));});
 const up=e=>{if(!drag)return;drag=false;card.classList.remove('drag');card.style.visibility='hidden';const el=document.elementFromPoint(e.clientX,e.clientY);card.style.visibility='';const b=el&&el.closest('.basket');$$('.basket').forEach(x=>x.classList.remove('hover'));
  if(b&&Math.hypot(e.clientX-sx,e.clientY-sy)>20)drop(b.dataset.a);else card.style.transform='';};
 card.addEventListener('pointerup',up);card.addEventListener('pointercancel',()=>{drag=false;card.style.transform='';card.classList.remove('drag');});}
/* Endungs-Lego */
function legoNext(){if(G.end)return;const v=Math.random()<.3?'appeler':rnd(VERBS);const p=rnd(PRON);const stem0=v.slice(0,-2);const app=v==='appeler';
 const loud=p[1]==='ons'||p[1]==='ez';const stem=app?(loud?'appel':'appell'):stem0;const pr=p[0]==='je'&&VOW.test(stem0)?'j’':p[0];G.cur={v,p,stem,pr,app,step:app?0:1};
 const draw=()=>{const c=G.cur;$('#gArea').innerHTML=`<div class="lg-task pop"><div class="lg-inf">${esc(v)}</div><div class="lg-build">${V.b(pr,'p')}<span class="lego big"><span class="lg-st${c.step===0?' q':''}">${c.step===0?'appe…':esc(c.stemSel||stem)}</span><span class="lg-en q" id="lgEnd">?</span></span></div></div>
  <div class="lg-pieces">${c.step===0?['appell','appel'].map(s=>`<button class="lgp st" data-s="${s}">${s}</button>`).join(''):ENDS.map(e=>`<button class="lgp" data-e="${e}">-${e}</button>`).join('')}</div>${c.step===0?'<p class="legend center">Zuerst den Stamm: <b>ll</b> oder <b>l</b>?</p>':''}`;
  $$('.lgp').forEach(b=>b.onclick=()=>{if(G.lock||G.end)return;
   if(c.step===0){const ok=b.dataset.s===stem;if(ok){c.stemSel=stem;c.step=1;b.classList.add('ok');G.lock=true;setTimeout(()=>{G.lock=false;draw();},200);}else{hit(false);b.classList.add('bad');G.mist.push([pr+' '+b.dataset.s+p[1],pr+(pr==='j’'?'':' ')+stem+p[1]]);msg(`✗ ${loud?'Endung hörbar → <b>l</b>':'Endung stumm → <b>ll</b>'}: <b>${pr}${pr==='j’'?'':' '}${stem}${p[1]}</b>`,'bad');G.lock=true;setTimeout(()=>{G.lock=false;legoNext();},1400);}return;}
   const ok=b.dataset.e===p[1];hit(ok,app?2:1);const en=$('#lgEnd');en.textContent=b.dataset.e;en.classList.remove('q');en.classList.add(ok?'snap':'bounce');b.classList.add(ok?'ok':'bad');
   const full=pr+(pr==='j’'?'':' ')+stem+p[1];if(ok)msg(`✓ <b>${full}</b> ${['e','es','ent'].includes(p[1])?'🔇':'🔊'}`,'ok');else{G.mist.push([pr+(pr==='j’'?'':' ')+stem+b.dataset.e,full]);msg(`✗ ${p[0]} → <b>-${p[1]}</b>: <b>${full}</b>`,'bad');}
   G.lock=true;setTimeout(()=>{G.lock=false;legoNext();},ok?420:1300);});};
 draw();msg('');}
/* Ende */
function finish(){if(!G||G.end)return;G.end=true;const id=G.id,g=GAMES[id];const before=TR.gameBest(id).best;const rec=G.score>before;
 TR.gameEnd(id,{score:G.score,right:G.right,wrong:G.wrong,ms:Date.now()-G.t0,record:rec,mistakes:G.mist.slice(0,10)});
 const mi=[];const seen=new Set();G.mist.forEach(m=>{if(!seen.has(m[1])){seen.add(m[1]);mi.push(m);}});
 M().innerHTML=`<div class="ex-wrap"><div class="ex-card result fade gend" style="--c:${g.c}"><div class="kick-red" style="background:${g.c}">${g.ic} ${g.t.toUpperCase()}</div>
 ${rec?'<div class="rec">🏆 Neuer Rekord!</div>':''}<div class="score">${G.score} Punkte</div><div class="score-sub">${G.right} richtig · ${G.wrong} falsch · Rekord: ${Math.max(before,G.score)}</div>
 ${mi.length?`<div class="review"><h3>📌 Merk dir</h3>${mi.slice(0,5).map(m=>`<div class="vs"><div class="train bad"><span class="tr-s">✗</span><span class="tr-w">${V.auto(m[0])}</span></div><div class="train ok"><span class="tr-s">✓</span><span class="tr-w">${V.auto(m[1])}</span>${H.spk(m[1],'','mini')}</div></div>`).join('')}
 <a class="btn small" href="../${g.lesson[0]}/#k=${g.lesson[1]}">📘 Zur Erklärung</a></div>`:'<div class="tip"><span class="tip-ic">🎉</span><div>Kein einziger Fehler – parfait!</div></div>'}
 <div class="toolbar center"><button class="btn green big" id="gAgain">↻ Nochmal</button><button class="btn ghost" data-hub="spiele">Andere Spiele</button></div></div></div>`;
 $('#gAgain').onclick=()=>start(id);if(rec||G.score>=15)HUB.E.confetti();}
HUB.gameTest={GAMES,artOf,state:()=>G,finish:()=>{stop();finish();}};
})();
