/* ===================== ENGLISCH: Lektion = Spielfolge =====================
   Keine Listen: Neue Wörter werden im ersten Spiel kurz vorgestellt (Bild, Aussprache, Deutsch, Buchsatz),
   dann geübt – Erkennen → Erinnern → Schreiben – und zum Schluss „Hast du’s drauf?“ mit Wiederholung früherer Teile. */
(function(){
'use strict';
const W=window,C=W.ENC,E=C.E,PG=W.PAGE||{},esc=C.esc,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const N=PG.les,LES=E.lessons.find(l=>l.n===N);const M=()=>$('#main');
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const STEPS=[
 {g:'entdecker',ic:'🔭',t:'Wort-Entdecker',sub:'Neue Wörter kennenlernen: Bild + Ton → Wort',c:'#0ea5e9'},
 {g:'memory',ic:'🃏',t:'Memory',sub:'Englisch und Deutsch finden',c:'#8b5cf6'},
 {g:'baukasten',ic:'🧱',t:'Buchstaben-Baukasten',sub:'Das Wort aus Bausteinen bauen',c:'#f97316'},
 {g:'luecke',ic:'📖',t:'Lückensatz',sub:'Sätze aus dem Buch ergänzen',c:'#10b981'},
 {g:'blitz',ic:'⚡',t:'Blitzrunde',sub:'45 Sekunden: stimmt das Paar?',c:'#eab308'},
 {g:'schreiben',ic:'✍️',t:'Schreib-Profi',sub:'Deutsch → Englisch tippen',c:'#e11d48'},
 {g:'check',ic:'🏆',t:'Hast du’s drauf?',sub:'Abschlussrunde mit Prozent + Wiederholung',c:'#0f766e'}];
W.ENG_NAMES=Object.fromEntries(STEPS.map(s=>[s.g,s.t]));
const NOTE={'as-220':'Du kennst <b>as</b> schon als „wie“ (Teil 2). Hier neu: <b>während, indem</b>.','as-219':'<b>as</b> hat noch eine 2. Bedeutung – die kommt in Teil 3.',
 'travel':'Das Verb <b>to travel</b> (reisen) kennst du aus Teil 4 – hier ist <b>travel</b> ein Nomen: das Reisen, Reise-.','to-travel':'Gleich danach kommt <b>travel</b> auch als Nomen (Teil 5).'};
const LW=LES?LES.words.map(k=>C.WM[k]):[];
const seen={};  // Wie oft kam ein Wort in dieser Sitzung dran (für eine gleichmäßige Verteilung)
const pickWords=(n,filter)=>{const st=C.wstats();const pool=LW.filter(filter||(()=>true));
 return pool.map(w=>{const x=st[w.k]||{ok:0,bad:0};return [(seen[w.k]||0)*4+x.ok*0.3-x.bad*1.5+Math.random()*2,w];}).sort((a,b)=>a[0]-b[0]).slice(0,n).map(x=>{seen[x[1].k]=(seen[x[1].k]||0)+1;return x[1];});};
const disp=w=>w.en.replace(/\s*\((AE|pl)\)/,'');
const intro=()=>C.get('en_intro_v1',{});
const markIntro=k=>{const o=intro();o[k]=1;C.set('en_intro_v1',o);};
/* ---------- Übersicht der Lektion ---------- */
function overview(){C.stop();cur=null;
 if(!LES){M().innerHTML='<p>Teil nicht gefunden.</p>';return;}
 if(!C.isOpen(N)){M().innerHTML=`<div class="en-lockpage"><div class="el-ic">🔒</div><h1>Teil ${N} ist noch zu</h1><p>Er wird am <b>${C.fmt(C.openDate(N))}</b> freigeschaltet – jeden Tag ein neuer Teil!</p><a class="btn" href="../">← Zur Übersicht</a></div>`;return;}
 const o=C.lesson(N);const rec=C.records();const nxt=Math.min(STEPS.length,o.step+1);const free=o.runs>0;
 const tiles=STEPS.map((s,i)=>{const n=i+1;const g=o.games[s.g]||{};const done=n<=o.step||(s.g==='check'&&o.runs>0);const lock=!free&&n>nxt;
  return `<button type="button" class="eg-step${done?' done':''}${n===nxt&&!free?' next':''}${lock?' lock':''}" style="--c:${s.c}" data-step="${n}" ${lock?'disabled':''}>
  <span class="es-n">${lock?'🔒':done?'✓':n}</span><span class="es-ic">${s.ic}</span><span class="es-b"><b>${s.t}</b><small>${s.sub}</small>
  ${s.g==='check'?(o.best!=null?`<small class="es-r">Bestwert ${o.best} % · ${o.runs}× gemacht</small>`:''):(g.plays?`<small class="es-r">${'★'.repeat(g.stars)}${'☆'.repeat(3-g.stars)} · Rekord ${rec[s.g]||0}</small>`:'')}</span></button>`;}).join('');
 M().innerHTML=`<div class="crumb"><a class="btn ghost small" href="../">← Alle Teile</a><span class="crumb-n">Teil ${N} von ${E.lessons.length}</span></div>
 <section class="en-lhero"><div class="elh-n">${N}</div><div><div class="ov-k">Teil ${N} · ${LES.pages}</div><h1>${esc(LES.t)}</h1><p>${LW.length} neue Wörter · 6 Spiele · Abschlussrunde</p></div></section>
 ${o.done?`<div class="en-done">🏅 Geschafft mit <b>${o.best} %</b>! Spiel gern nochmal – die Wörter bleiben so im Kopf.</div>`:''}
 <div class="eg-steps">${tiles}</div>
 <div class="toolbar center"><button class="btn green big" data-step="${free?(o.done?7:nxt):nxt}">${o.step===0&&!free?'▶ Los geht’s!':free?'▶ Abschlussrunde':'▶ Weiter: '+STEPS[nxt-1].t}</button></div>`;}
/* ---------- Spielrahmen ---------- */
let cur=null;
function start(n){const s=STEPS[n-1];C.stop();
 const G={n,s,score:0,combo:0,best:0,right:0,wrong:0,okW:new Set(),badW:new Set(),t0:Date.now(),auto:null,timer:null};cur=G;
 M().innerHTML=`<div class="eg" style="--c:${s.c}"><div class="eg-top"><button type="button" class="eg-x" data-quit="1" aria-label="Spiel beenden">✕</button><div class="eg-tt"><b>${s.ic} ${s.t}</b><span class="eg-prog"><i></i></span></div><div class="eg-sc"><span class="eg-combo" hidden></span><b class="eg-pts">0</b></div></div><div class="eg-body"></div></div>`;
 GAMES[s.g](G,$('.eg-body'));}
const body=()=>$('.eg-body');
function prog(G,a,b){const i=$('.eg-prog i');if(i)i.style.width=Math.round(a/Math.max(1,b)*100)+'%';}
function hit(G,w,pts=10){G.right++;G.combo++;G.best=Math.max(G.best,G.combo);const add=pts+Math.min(10,(G.combo-1)*2);G.score+=add;if(w)G.okW.add(w.k);hud(G,'+'+add);}
function miss(G,w){G.wrong++;G.combo=0;if(w)G.badW.add(w.k);hud(G,null);const b=$('.eg');if(b){b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');}}
function hud(G,plus){const p=$('.eg-pts');if(p){p.textContent=G.score;p.classList.remove('bump');void p.offsetWidth;p.classList.add('bump');}
 const c=$('.eg-combo');if(c){c.hidden=G.combo<2;c.textContent='🔥 ×'+G.combo;c.classList.remove('bump');void c.offsetWidth;c.classList.add('bump');}
 if(plus){const f=document.createElement('span');f.className='eg-plus';f.textContent=plus;const t=$('.eg-sc');if(t){t.appendChild(f);setTimeout(()=>f.remove(),900);}}}
const wcard=(w,o={})=>`<div class="eg-wc"><span class="eg-wce">${w.e}</span><div><div class="eg-wcen">${esc(disp(w))} ${C.spk(w.a)}</div>${o.ipa!==false?`<div class="eg-ipa">${esc(w.ipa)}</div>`:''}<div class="eg-wcde">${esc(w.de)}</div></div></div>`;
/* Fehler: kurz und bildlich erklären, dann weiter */
function explain(G,w,given,next,extra=''){C.play(w.a);const fb=$('.eg-fb');
 fb.innerHTML=`<div class="eg-why">${given?`<div class="eg-given">✗ <s>${esc(given)}</s></div>`:''}${wcard(w)}<div class="eg-hint">💡 ${esc(w.hint)}</div>${extra}<button type="button" class="btn eg-next">Weiter →</button></div>`;
 fb.scrollIntoView({behavior:'smooth',block:'nearest'});$('.eg-next',fb).onclick=next;G.auto=()=>next();}
const opts=(w,field,n=4,pool)=>{pool=(pool||LW).filter(x=>x.k!==w.k&&C.norm(x[field])!==C.norm(w[field])&&x.de!==w.de);
 if(pool.length<n-1)pool=pool.concat(E.words.filter(x=>x.k!==w.k&&!pool.includes(x)&&C.isOpen(x.les)&&x.de!==w.de));
 return shuffle([w].concat(shuffle(pool).slice(0,n-1)));};
/* Auswahlfrage (für Entdecker, Lückensatz, Abschluss) */
function choice(G,w,{q,pic,field,label,onDone,after,pool}){const os=opts(w,field,4,pool);
 body().innerHTML=`<div class="eg-q pop">${pic||''}<div class="eg-prompt">${q}</div></div><div class="eg-opts">${os.map(x=>`<button type="button" class="eg-o" data-k="${x.k}">${label(x)}</button>`).join('')}</div><div class="eg-fb"></div>`;
 let done=false;
 const pick=b=>{if(done)return;done=true;const ok=b.dataset.k===w.k;$$('.eg-o').forEach(x=>{x.disabled=true;if(x.dataset.k===w.k)x.classList.add('ok');});
  if(ok){b.classList.add('ok');hit(G,w);if(after)after(true);else C.play(w.a);setTimeout(()=>onDone(true),after?1500:800);G.auto=null;}
  else{b.classList.add('bad');miss(G,w);if(after)after(false);explain(G,w,b.textContent.trim(),()=>onDone(false));}};
 $$('.eg-o').forEach(b=>b.onclick=()=>pick(b));
 G.auto=ok=>{const b=$$('.eg-o').find(x=>(x.dataset.k===w.k)===ok);if(b)pick(b);};}
/* Neues Wort vorstellen */
function introCard(G,w,next){markIntro(w.k);const nt=NOTE[w.k]||(w.note&&!/Info-Kasten/.test(w.note)?esc(w.note):'');
 body().innerHTML=`<div class="eg-intro pop"><div class="ei-tag">✨ Neues Wort</div><div class="ei-e">${w.e}</div><div class="ei-en">${esc(disp(w))}</div><div class="ei-ipa">${esc(w.ipa)} ${C.spk(w.a,'big')}</div><div class="ei-de">= ${esc(w.de)}</div>
 ${w.ex?`<div class="ei-ex">„${esc(w.ex)}“ ${C.spk(w.ax)}</div>`:''}${nt?`<div class="ei-note">💡 ${nt}</div>`:''}<button type="button" class="btn green ei-go">Verstanden ✓</button></div>`;
 C.play(w.a);$('.ei-go').onclick=next;G.auto=()=>next();}
/* ---------- 1 Wort-Entdecker ---------- */
function entdecker(G,el){const ws=shuffle(LW);const known=intro();const Q=[];let i=0;
 // in 4er-Gruppen: erst vorstellen (nur beim ersten Mal), dann abfragen
 for(let b=0;b<ws.length;b+=4){const grp=ws.slice(b,b+4);grp.forEach(w=>{if(!known[w.k])Q.push({t:'intro',w});});shuffle(grp).forEach((w,j)=>Q.push({t:'q',w,m:(b/4+j)%2}));}
 const total=Q.filter(x=>x.t==='q').length;let qn=0;
 const step=()=>{if(i>=Q.length){finish(G);return;}const x=Q[i++];
  if(x.t==='intro'){introCard(G,x.w,step);return;}
  qn++;prog(G,qn-1,total);const w=x.w;
  if(x.m===0)choice(G,w,{q:'Welches Wort ist das? '+C.spk(w.a),pic:`<div class="eg-pic">${w.e}</div>`,field:'en',label:o=>esc(disp(o)),onDone:step});
  else{choice(G,w,{q:'🎧 Hör genau – was heißt das?',pic:`<div class="eg-pic eg-ear">${C.spk(w.a,'big')}</div>`,field:'de',label:o=>esc(o.de),onDone:step});C.play(w.a);}};
 step();}
/* ---------- 2 Memory ---------- */
function memory(G,el){const ws=pickWords(6);let cards=shuffle(ws.flatMap(w=>[{w,s:'en'},{w,s:'de'}]));let open=[],found=0,moves=0,lock=false;
 el.innerHTML=`<div class="eg-q"><div class="eg-prompt">Finde die Paare: <b class="c-en">Englisch</b> + <b class="c-de">Deutsch</b></div></div><div class="eg-mem">${cards.map((c,i)=>`<button type="button" class="mc2" data-i="${i}"><span class="mc2-b">🇬🇧</span><span class="mc2-f ${c.s}">${c.s==='en'?`<span class="mc2-e">${c.w.e}</span>${esc(disp(c.w))}`:esc(c.w.de)}</span></button>`).join('')}</div><div class="eg-memi">Züge: <b class="mv">0</b></div><div class="eg-fb"></div>`;
 const flip=b=>{if(lock||b.classList.contains('up')||b.classList.contains('got'))return;const c=cards[+b.dataset.i];b.classList.add('up');if(c.s==='en')C.play(c.w.a);open.push(b);
  if(open.length===2){moves++;$('.mv').textContent=moves;const [a,d]=open.map(x=>cards[+x.dataset.i]);
   if(a.w.k===d.w.k&&a.s!==d.s){open.forEach(x=>{x.classList.add('got');});open=[];found++;hit(G,a.w);prog(G,found,ws.length);if(found===ws.length)setTimeout(()=>finish(G,{stars:moves<=9?3:moves<=13?2:1}),700);}
   else{lock=true;G.combo=0;hud(G,null);setTimeout(()=>{open.forEach(x=>x.classList.remove('up'));open=[];lock=false;},900);}}};
 $$('.mc2').forEach(b=>b.onclick=()=>flip(b));
 G.auto=()=>{const k=cards.findIndex((c,i)=>!$(`.mc2[data-i="${i}"]`).classList.contains('got'));if(k<0)return;const j=cards.findIndex((c,i)=>i!==k&&c.w.k===cards[k].w.k);lock=false;open=[];flip($(`.mc2[data-i="${k}"]`));flip($(`.mc2[data-i="${j}"]`));};}
/* ---------- 3 Buchstaben-Baukasten ---------- */
function tilesOf(t){const words=t.split(' ');
 if(words.length>=3)return {mode:'w',parts:words};
 const letters=t.replace(/[\s'\-]/g,'');
 if(letters.length<=10)return {mode:'l',parts:[...t]};
 const P=[];words.forEach((wd,wi)=>{const seg=wd.split(/(-)/);seg.forEach(s=>{if(s==='-'){P.push('-');return;}for(let i=0;i<s.length;i+=3)P.push(s.slice(i,i+3));});if(wi<words.length-1)P.push(' ');});return {mode:'c',parts:P};}
function baukasten(G,el){const ws=pickWords(6);let i=0;
 const step=()=>{if(i>=ws.length){finish(G);return;}const w=ws[i++];prog(G,i-1,ws.length);const T=tilesOf(w.bt);
  const fixed=p=>T.mode!=='w'&&(p===' '||p==='-'||p==="'");
  const slots=T.parts.map((p,j)=>fixed(p)?`<span class="bk-fix">${p===' '?'&nbsp;':p}</span>`:`<span class="bk-slot${T.mode!=='l'?' wide':''}" data-j="${j}"></span>`).join('');
  const pool=shuffle(T.parts.map((p,j)=>[p,j]).filter(([p])=>!fixed(p)));
  el.innerHTML=`<div class="eg-q pop"><div class="eg-pic">${w.e}</div><div class="eg-prompt">Bau das englische Wort für<br><b class="c-de">${esc(w.de)}</b></div></div>
  <div class="bk-line">${w.bpre?`<span class="bk-pre">${w.bpre}</span>`:''}${slots}</div><div class="bk-pool">${pool.map(([p,j],x)=>`<button type="button" class="bk-t" data-x="${x}">${esc(p)}</button>`).join('')}</div>
  <div class="bk-act"><button type="button" class="btn ghost small bk-undo">↶ zurück</button></div><div class="eg-fb"></div>`;
  const fill=[];const sl=$$('.bk-slot',el);
  const check=()=>{const got=fill.map(x=>pool[x][0]).join('');const want=pool.map(x=>x).sort((a,b)=>a[1]-b[1]).map(x=>x[0]).join('');
   $$('.bk-t',el).forEach(b=>b.disabled=true);$('.bk-undo',el).disabled=true;
   if(got===want){$('.bk-line',el).classList.add('ok');hit(G,w);C.play(w.a);G.auto=null;setTimeout(step,1100);}
   else{$('.bk-line',el).classList.add('bad');miss(G,w);explain(G,w,(w.bpre?w.bpre+' ':'')+fill.map(x=>pool[x][0]).join(T.mode==='w'?' ':''),step);}};
  const put=b=>{if(b.disabled||b.classList.contains('used'))return;const x=+b.dataset.x;const s=sl[fill.length];if(!s)return;fill.push(x);s.textContent=pool[x][0];s.classList.add('on');b.classList.add('used');if(fill.length===sl.length)setTimeout(check,250);};
  $$('.bk-t',el).forEach(b=>b.onclick=()=>put(b));
  $('.bk-undo',el).onclick=()=>{const x=fill.pop();if(x==null)return;const s=sl[fill.length];s.textContent='';s.classList.remove('on');$(`.bk-t[data-x="${x}"]`,el).classList.remove('used');};
  G.auto=ok=>{const want=pool.map((p,x)=>[p[1],x]).sort((a,b)=>a[0]-b[0]).map(a=>a[1]);let ord=want.slice();const str=o=>o.map(x=>pool[x][0]).join('');if(!ok){ord.reverse();if(str(ord)===str(want))ord.push(ord.shift());}ord.forEach(x=>put($(`.bk-t[data-x="${x}"]`,el)));};};
 step();}
/* ---------- 4 Lückensatz ---------- */
function luecke(G,el){const ws=pickWords(8,w=>w.ex&&w.gap.length);let i=0;
 const step=()=>{if(i>=ws.length){finish(G);return;}const w=ws[i++];prog(G,i-1,ws.length);let s=esc(w.ex);w.gap.forEach(g=>{s=s.replace(esc(g),'<span class="lg-gap">_____</span>');});
  const full=()=>{let t=esc(w.ex);w.gap.forEach(g=>{t=t.replace(esc(g),`<b class="lg-in">${esc(g)}</b>`);});return t;};
  choice(G,w,{q:`<div class="lg-s">${s}</div>`,pic:'<div class="eg-pic sm">📖</div>',field:'en',label:o=>`${esc(o.bpre?o.bpre+' ':'')}${esc(o.bt)}`,onDone:step,
   after:ok=>{const q=$('.lg-s');if(q)q.innerHTML=full()+' '+C.spk(w.ax);if(ok)C.play(w.ax);}});};
 step();}
/* ---------- 5 Blitzrunde ---------- */
function blitz(G,el){const T=45;const pool=LW.concat(C.reviewPick(6,N));let left=T,q=null,n=0;
 el.innerHTML=`<div class="bz-time"><i></i><span>${T}</span></div><div class="bz-card pop"></div><div class="bz-btns"><button type="button" class="bz-b no" data-v="0">✗ falsch</button><button type="button" class="bz-b yes" data-v="1">✓ stimmt</button></div><div class="bz-flash"></div><div class="eg-fb"></div>`;
 const next=()=>{const w=pool[Math.floor(Math.random()*pool.length)];const t=Math.random()<.5;let d=w;if(!t){const o=shuffle(pool.concat(LW).filter(x=>x.k!==w.k&&x.de!==w.de));d=o[0];}
  q={w,t,d};n++;const c=$('.bz-card');c.innerHTML=`<div class="bz-en">${w.e} ${esc(disp(w))}</div><div class="bz-eq">=</div><div class="bz-de">${esc(d.de)}</div>`;c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop');};
 const ans=v=>{if(!q||left<=0)return;const ok=(v==='1')===q.t;const f=$('.bz-flash');
  if(ok){hit(G,q.w);f.className='bz-flash ok';f.textContent='✓';}else{miss(G,q.w);f.className='bz-flash bad';f.innerHTML=`✗ ${esc(disp(q.w))} = ${esc(q.w.de)}`;}
  next();};
 $$('.bz-b').forEach(b=>b.onclick=()=>ans(b.dataset.v));
 const tick=()=>{left--;const t=$('.bz-time span');if(t)t.textContent=Math.max(0,left);const i=$('.bz-time i');if(i)i.style.width=(left/T*100)+'%';prog(G,T-left,T);if(left<=0){clearInterval(G.timer);G.timer=null;stopB();}};
 const stopB=()=>{$$('.bz-b').forEach(b=>b.disabled=true);setTimeout(()=>finish(G,{stars:G.right>=18&&G.wrong<=3?3:G.right>=10?2:1}),500);};
 G.timer=setInterval(tick,1000);next();
 G.auto=ok=>{const v=q.t?'1':'0';ans(ok?v:(v==='1'?'0':'1'));};G.end=()=>{left=0;clearInterval(G.timer);G.timer=null;stopB();};}
/* ---------- 6 Schreib-Profi ---------- */
function schreiben(G,el){const ws=pickWords(8);let i=0;
 const step=()=>{if(i>=ws.length){finish(G);return;}const w=ws[i++];prog(G,i-1,ws.length);let tips=1;
  const pat=()=>[...w.bt].map((ch,j)=>ch===' '?'&nbsp;&nbsp;':/[\-'’?!.]/.test(ch)?ch:j<tips?esc(ch):'_').join(' ');
  el.innerHTML=`<div class="eg-q pop"><div class="eg-pic">${w.e}</div><div class="eg-prompt">Wie heißt das auf Englisch?<br><b class="c-de">${esc(w.de)}</b></div></div>
  <div class="sw-pat">${w.bpre?`<span class="bk-pre">${w.bpre}</span> `:''}<span class="sw-p">${pat()}</span></div>
  <div class="sw-row"><input class="sw-in" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" aria-label="Englisches Wort"><button type="button" class="btn sw-ok">OK</button></div>
  <div class="sw-act"><button type="button" class="btn ghost small sw-tip">💡 Tipp: noch ein Buchstabe</button></div><div class="eg-fb"></div>`;
  const inp=$('.sw-in',el);setTimeout(()=>{try{inp.focus({preventScroll:true});}catch(e){}},50);let done=false;
  $('.sw-tip',el).onclick=()=>{tips=Math.min(w.bt.length-1,tips+1);$('.sw-p',el).innerHTML=pat();};
  const go=()=>{if(done)return;const v=inp.value;if(!v.trim())return;done=true;inp.disabled=true;const r=C.judge(w,v);
   if(r.ok){hit(G,w,tips>1?5:10);C.play(w.a);inp.classList.add('ok');const fb=$('.eg-fb',el);fb.innerHTML=r.exact?`<div class="sw-good">✓ Super! <b>${esc((w.bpre?w.bpre+' ':'')+w.bt)}</b></div>`:`<div class="sw-near">✓ Fast perfekt! Richtig geschrieben: <b>${esc((w.bpre?w.bpre+' ':'')+w.bt)}</b></div>`;G.auto=null;setTimeout(step,r.exact?1000:1900);}
   else{inp.classList.add('bad');miss(G,w);explain(G,w,v,step);}};
  $('.sw-ok',el).onclick=go;inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();go();}});
  G.auto=ok=>{inp.value=ok?(w.bpre?w.bpre+' ':'')+w.bt:'xqz';go();};};
 step();}
/* ---------- 7 Hast du's drauf? ---------- */
function check(G,el){const rv=C.reviewPick(4,N);const own=pickWords(12-rv.length);const Q=shuffle(own.map(w=>({w,r:false})).concat(rv.map(w=>({w,r:true}))));let i=0;const res=[];
 const step=()=>{if(i>=Q.length){done();return;}const x=Q[i];const w=x.w;const m=i%4;i++;prog(G,i-1,Q.length);
  const tag=x.r?`<div class="ck-rev">🔁 Wiederholung aus Teil ${w.les}</div>`:'';
  const rec=ok=>{res.push({w,ok,r:x.r});};
  if(m===3){el.innerHTML=`${tag}<div class="eg-q pop"><div class="eg-pic">${w.e}</div><div class="eg-prompt">Schreib auf Englisch:<br><b class="c-de">${esc(w.de)}</b></div></div><div class="sw-pat">${w.bpre?`<span class="bk-pre">${w.bpre}</span> `:''}<span class="sw-p">${[...w.bt].map((ch,j)=>ch===' '?'&nbsp;&nbsp;':/[\-'’?!.]/.test(ch)?ch:j<1?esc(ch):'_').join(' ')}</span></div>
   <div class="sw-row"><input class="sw-in" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" aria-label="Englisches Wort"><button type="button" class="btn sw-ok">OK</button></div><div class="eg-fb"></div>`;
   const inp=$('.sw-in',el);setTimeout(()=>{try{inp.focus({preventScroll:true});}catch(e){}},50);let d=false;
   const go=()=>{if(d||!inp.value.trim())return;d=true;inp.disabled=true;const r=C.judge(w,inp.value);rec(r.ok);
    if(r.ok){hit(G,w);C.play(w.a);inp.classList.add('ok');G.auto=null;setTimeout(step,900);}else{inp.classList.add('bad');miss(G,w);explain(G,w,inp.value,step);}};
   $('.sw-ok',el).onclick=go;inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();go();}});G.auto=ok=>{inp.value=ok?w.bt:'xqz';go();};return;}
  const o={field:m===1?'en':m===0?'de':'en',onDone:ok=>{rec(ok);step();},pool:x.r?E.words.filter(y=>y.les===w.les):null};
  if(m===0)choice(G,w,Object.assign(o,{q:`${tag}Was heißt <b class="c-en">${esc(disp(w))}</b>? ${C.spk(w.a)}`,pic:`<div class="eg-pic sm">${w.e}</div>`,label:y=>esc(y.de)}));
  else if(m===1)choice(G,w,Object.assign(o,{q:`${tag}Was heißt <b class="c-de">${esc(w.de)}</b> auf Englisch?`,pic:`<div class="eg-pic sm">${w.e}</div>`,label:y=>esc(disp(y))}));
  else{choice(G,w,Object.assign(o,{q:`${tag}🎧 Welches Wort hörst du?`,pic:`<div class="eg-pic eg-ear">${C.spk(w.a,'big')}</div>`,label:y=>esc(disp(y))}));C.play(w.a);}};
 const done=()=>{const r=res.filter(x=>x.ok).length,pct=Math.round(r/Math.max(1,res.length)*100);G.pct=pct;
  finish(G,{stars:pct>=90?3:pct>=70?2:pct>=50?1:0,final:{pct,right:r,max:res.length,review:rv.map(w=>w.k),wrongList:res.filter(x=>!x.ok).map(x=>x.w)}});};
 step();}
const GAMES={entdecker,memory,baukasten,luecke,blitz,schreiben,check};
/* ---------- Spielende ---------- */
function finish(G,o={}){if(G.fin)return;G.fin=true;if(G.timer){clearInterval(G.timer);G.timer=null;}G.auto=null;prog(G,1,1);
 const acc=G.right/Math.max(1,G.right+G.wrong);const stars=o.stars!=null?o.stars:acc>=.9?3:acc>=.7?2:1;const recOld=C.records()[G.s.g]||0;
 const okW=[...G.okW].filter(k=>!G.badW.has(k)),badW=[...G.badW];
 if(o.final){C.log({kind:'en_lesson_end',les:N,pct:o.final.pct,right:o.final.right,max:o.final.max,stars,score:G.score,okW,badW,review:o.final.review,ms:Date.now()-G.t0,flush:true});}
 C.log({kind:'en_game_end',les:N,game:G.s.g,step:G.n,score:G.score,right:G.right,wrong:G.wrong,combo:G.best,stars,okW,badW,ms:Date.now()-G.t0,flush:true});
 const rec=G.score>recOld&&G.score>0;const nx=G.n<STEPS.length?STEPS[G.n]:null;
 const F=o.final;
 M().innerHTML=`<div class="eg-end pop" style="--c:${G.s.c}">${F?`<div class="ee-big">${F.pct>=90?'🏆':F.pct>=70?'🥈':'💪'}</div><div class="ee-pct">${F.pct} %</div><div class="ee-t">${F.pct>=90?'Excellent! Du hast es drauf!':F.pct>=70?'Very good! Teil geschafft!':'Good try! Spiel die Runde gleich nochmal.'}</div><div class="legend">${F.right} von ${F.max} richtig${F.review.length?` · davon ${F.review.length} Wiederholungswörter`:''}</div>`:`<div class="ee-big">${G.s.ic}</div><div class="ee-t">${G.s.t} geschafft!</div>`}
 <div class="stars">${[0,1,2].map(i=>`<span class="s ${i<stars?'on':''}" style="animation-delay:${i*.2}s">★</span>`).join('')}</div>
 <div class="ee-sc">${G.score} Punkte · ${G.right} richtig${G.best>=3?` · 🔥 Combo ×${G.best}`:''}</div>${rec?'<div class="ee-rec">🏆 Neuer Rekord!</div>':''}
 ${F&&F.wrongList.length?`<div class="ee-wl"><b>Diese Wörter üben wir nochmal:</b>${F.wrongList.map(w=>`<div class="ee-w">${w.e} <b>${esc(disp(w))}</b> = ${esc(w.de)} ${C.spk(w.a)}</div>`).join('')}</div>`:''}
 <div class="toolbar center">${nx?`<button type="button" class="btn green big" data-step="${G.n+1}">Weiter: ${nx.ic} ${nx.t} →</button>`:''}<button type="button" class="btn ghost" data-step="${G.n}">↻ Nochmal</button><button type="button" class="btn ghost" data-home="1">Übersicht Teil ${N}</button></div>
 ${F?`<div class="toolbar center"><a class="btn" href="../">← Alle Teile</a></div>`:''}</div>`;
 if(F&&F.pct>=70)confetti();cur=null;}
function confetti(){const box=document.createElement('div');box.className='en-conf';const col=['#c8102e','#012169','#fff','#f59e0b','#10b981'];
 for(let i=0;i<60;i++){const s=document.createElement('i');s.style.left=Math.random()*100+'%';s.style.background=col[i%col.length];s.style.animationDelay=Math.random()*.8+'s';s.style.transform=`rotate(${Math.random()*360}deg)`;box.appendChild(s);}
 document.body.appendChild(box);setTimeout(()=>box.remove(),3500);}
/* ---------- Navigation ---------- */
document.addEventListener('click',e=>{const b=e.target.closest('[data-step],[data-quit],[data-home]');if(!b||b.disabled)return;
 if(b.dataset.step){window.scrollTo(0,0);start(+b.dataset.step);}
 else if(b.dataset.quit){if(cur&&(cur.right+cur.wrong)>0&&!confirm('Spiel abbrechen? Die Punkte dieser Runde zählen dann nicht.'))return;if(cur&&cur.timer)clearInterval(cur.timer);cur=null;overview();}
 else overview();});
W.ENTEST={cur:()=>cur&&{g:cur.s.g,n:cur.n,right:cur.right,wrong:cur.wrong,score:cur.score},auto:ok=>{if(cur&&cur.auto){cur.auto(ok);return true;}return false;},end:()=>{if(cur&&cur.end)cur.end();},start};
overview();C.on(()=>{if(!cur)overview();});
})();
