/* ===================== LERN-ENGINE (gemeinsam für alle Lektionen) ===================== */
(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const L=window.LESSON, CHAPTERS=window.CHAPTERS, TRACKS=window.TRACKS||{}, WRITERS=window.WRITERS||{}, TEST_EX=window.TEST_EX||[];
const {esc,strip,ttsText,akey,H}=window;
const main=$('#main');
const KEY='fr_lekt_'+L.slug+'_v1';
let P=load();
function blank(){return {ch:{},test:{best:null,stars:0,runs:0,pts:null}};}
function load(){try{const p=JSON.parse(localStorage.getItem(KEY)||'null')||blank();p.ch=p.ch||{};p.test=p.test||blank().test;return p;}catch(e){return blank();}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(P));}catch(e){}}
function chp(id){return P.ch[id]=P.ch[id]||{seen:false,best:0,runs:0,solved:{}};}
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const CHMAP={};
CHAPTERS.forEach((c,i)=>{c.idx=i;c.c=c.c||L.color;CHMAP[c.id]=c;c.ex.forEach((e,j)=>{e.ch=c.id;e.id=c.id+'-'+j;e.lv=e.lv||c.lv||1;});});
TEST_EX.forEach((e,j)=>{e.ch='test';e.id='test-'+j;e.lv=e.lv||3;});
CHMAP.test={id:'test',title:'Abschlusstest',c:'#c8102e',icon:'🏆'};
const ALLEX=CHAPTERS.flatMap(c=>c.ex).concat(TEST_EX);
const TYPE={mc:['Multiple Choice','🔘'],pick:['Bild wählen','🖼️'],gap:['Lückentext','✏️'],gapw:['Lücken schreiben','⌨️'],order:['Satzpuzzle','🧩'],write:['Schreiben','⌨️'],
 match:['Zuordnen','🔗'],dialog:['Mini-Dialog','💬'],click:['Bild-Aufgabe','👆'],mark:['Bild markieren','🖍️'],multi:['Mehrfachauswahl','☑️'],seg:['Auswählen','🎯'],detect:['Fehlerdetektiv','🔍']};
const tlabel=e=>e.au?['Hörverstehen','🎧']:e.type==='seg'&&e.tf?['Richtig oder falsch?','✔️']:TYPE[e.type];

/* ---------- Audio: echte MP3-Dateien per HTMLAudioElement ---------- */
const AUD=new Set(window.AUDIO_FILES||[]);
const ABASE=(window.AUDIO_BASE||'../shared/audio/');
const TTS=('speechSynthesis' in window)&&typeof window.SpeechSynthesisUtterance!=='undefined';
let frVoice=null;
function pickVoice(){if(!TTS)return;const v=speechSynthesis.getVoices()||[];frVoice=v.find(x=>/^fr[-_]FR/i.test(x.lang))||v.find(x=>/^fr/i.test(x.lang))||null;}
if(TTS){pickVoice();try{speechSynthesis.onvoiceschanged=pickVoice;}catch(e){}}
let AEL=null,playingBtn=null,playTok=0;
function getEl(){if(!AEL){AEL=new Audio();AEL.preload='auto';AEL.setAttribute('playsinline','');}return AEL;}
function stopAudio(){playTok++;if(AEL){try{AEL.pause();}catch(e){}}if(TTS)try{speechSynthesis.cancel();}catch(e){}if(playingBtn)playingBtn.classList.remove('playing');playingBtn=null;}
function speak(texts,btn,whos){
 const again=btn&&btn===playingBtn;stopAudio();if(again)return false; // zweiter Tipp = Stopp
 texts=[].concat(texts);whos=[].concat(whos||[]);const tok=playTok;let i=0;playingBtn=btn||null;if(btn)btn.classList.add('playing');
 const done=()=>{if(tok!==playTok)return;if(btn)btn.classList.remove('playing');playingBtn=null;};
 const next=()=>{if(tok!==playTok)return;if(i>=texts.length){done();return;}
  const t=texts[i],w=whos[i]||'';i++;const h=akey(t,w);
  if(AUD.has(h)){const el=getEl();
   el.onended=()=>{if(tok===playTok)setTimeout(next,i<texts.length?350:0);};
   el.onerror=()=>{if(tok===playTok){if(TTS)viaTTS(ttsText(t),next);else next();}};
   el.src=ABASE+h+'.mp3';
   const pr=el.play();if(pr&&pr.catch)pr.catch(err=>{if(tok!==playTok||(err&&err.name==='AbortError'))return;if(TTS)viaTTS(ttsText(t),next);else done();});
  }else if(TTS)viaTTS(ttsText(t),next);else next();};
 next();return true;
}
function viaTTS(text,cb){const tok=playTok;
 try{const u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.rate=.8;if(frVoice)u.voice=frVoice;
  u.onend=()=>{if(tok===playTok)setTimeout(cb,350);};u.onerror=()=>{if(tok===playTok)cb();};speechSynthesis.speak(u);}catch(e){cb();}}
window.APPAUDIO={akey,ttsText,has:h=>AUD.has(h),el:()=>AEL,base:ABASE};
document.addEventListener('click',e=>{const b=e.target.closest('[data-say]');if(!b)return;e.preventDefault();
 const started=speak(b.dataset.say.split('||'),b,b.dataset.who?b.dataset.who.split('||'):[]);
 if(started&&b.dataset.count!==undefined){const n=(+b.dataset.count||0)+1;b.dataset.count=n;const c=b.parentElement.querySelector('.cnt');if(c)c.textContent=`${n}× gehört`;}});
const spk=H.spk;
/* Hörtext normalisieren: String | [[wer,text],…] | 'T:id' */
function audioOf(au){if(!au)return null;
 if(typeof au==='string'&&au.startsWith('T:')){const t=TRACKS[au.slice(2)];return {lines:t.lines.map(l=>[l[0],l[1],l[2]]),title:t.title};}
 if(typeof au==='string')return {lines:[['',au]]};
 if(Array.isArray(au)&&typeof au[0]==='string')return {lines:[[au[1]||'',au[0]]]};
 return {lines:au};}
const playBig=(a,label='Anhören')=>`<div class="player"><button type="button" class="play-big" data-count="0" data-say="${esc(a.lines.map(l=>ttsText(l[1])).join('||'))}" data-who="${esc(a.lines.map(l=>l[0]||'').join('||'))}"><span class="pb-ic">▶</span><span>${label}</span></button><span class="cnt">0× gehört</span></div>`;
const transcript=a=>`<div class="trans-lines">${a.lines.map(l=>`<div class="tl">${l[0]&&window.CHARS[l[0]]?`<b>${window.NAMES[l[0]]||l[0]}:</b> `:''}<span class="fr">${l[1]}</span>${spk(l[1],l[0])}${l[2]?`<span class="deu">${l[2]}</span>`:''}</div>`).join('')}</div>`;

/* ---------- Vergleichen (tolerant bei Groß/klein, Satzzeichen; Akzente → Hinweis) ---------- */
function norm(s,keepAcc){
 s=String(s).toLowerCase().replace(/[’'`´ʼ]/g,"'").replace(/[«»"“”„?!.,:;–—]/g,' ').replace(/\s*-\s*/g,'-');
 s=s.replace(/'\s+/g,"'").replace(/\s+/g,' ').trim();
 if(!keepAcc)s=s.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
 return s;}
function compare(input,answers){
 const a=answers.map(x=>norm(strip(x),true)), i=norm(input,true);
 if(a.includes(i))return {ok:true};
 const al=answers.map(x=>norm(strip(x),false)), il=norm(input,false);
 const k=al.indexOf(il); if(k>=0)return {ok:true,acc:strip(answers[k])};
 return {ok:false};}

/* ---------- Toast & Konfetti ---------- */
function toast(t){const d=document.createElement('div');d.className='toast';d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),2200);}
function confetti(){const c=document.createElement('div');c.className='confetti';const cols=['#c8102e','#2563eb','#f59e0b','#16a34a','#7c3aed'];
 for(let i=0;i<60;i++){const s=document.createElement('i');s.style.left=Math.random()*100+'%';s.style.background=cols[i%5];s.style.animationDelay=Math.random()*.8+'s';s.style.transform=`rotate(${Math.random()*360}deg)`;c.appendChild(s);}
 document.body.appendChild(c);setTimeout(()=>c.remove(),3500);}

/* ---------- Fortschritt ---------- */
function chapterStatus(c){const p=chp(c.id);const solved=c.ex.filter(e=>p.solved[e.id]).length;return {p,solved,total:c.ex.length,done:p.seen&&p.best>=70};}
function overall(){let d=0;CHAPTERS.forEach(c=>{if(chapterStatus(c).done)d++;});return {d,t:CHAPTERS.length};}
function updateTop(){const o=overall();const el=$('#topProg');if(el)el.innerHTML=`<span class="tp-n">${o.d}/${o.t}</span><div class="pbar" role="progressbar" aria-valuenow="${o.d}" aria-valuemax="${o.t}"><i style="width:${o.d/o.t*100}%"></i></div>`;}
const stars=n=>'★'.repeat(n)+'☆'.repeat(3-n);
const lvStars=lv=>`<span class="lv" title="Schwierigkeit">${'★'.repeat(lv)}<span>${'★'.repeat(3-lv)}</span></span>`;

/* ---------- Ansichten & Verlauf (Zurück-Wischen auf dem iPhone) ---------- */
let curView='home';
function go(view,arg,noPush){stopAudio();
 if(!noPush){const st={view:view==='practice'||view==='result'?view:view,arg:typeof arg==='string'?arg:null};
  try{if(view==='home'&&curView==='home')history.replaceState(st,'');else history.pushState(st,'');}catch(e){}}
 curView=view;
 window.scrollTo(0,0);main.innerHTML='';main.classList.remove('fade');void main.offsetWidth;main.classList.add('fade');
 ({home,lesson,practice,result}[view])(arg);updateTop();}
window.addEventListener('popstate',ev=>{const st=ev.state;if(!st||st.view==='home')go('home',null,true);else if(st.view==='lesson'&&CHMAP[st.arg])go('lesson',st.arg,true);else go('home',null,true);});
window.APPGO=(v,a)=>go(v,a);

function nextChapter(){const c=CHAPTERS.find(c=>!chapterStatus(c).done);return c||null;}
function home(){
 const o=overall(),nc=nextChapter();
 let h=`<section class="lhero" style="--c:${L.color}"><div class="lh-txt"><div class="kicker"><span class="flag"><i></i><i></i><i></i></span>Französisch · Klassenarbeit 30.10.</div>
 <h1>${L.title}</h1><div class="lh-fr">${L.fr}</div><p>${L.intro}</p>
 <div class="lh-btns">${nc?`<button class="btn big" data-open="${nc.id}">▶ ${o.d?'Weiter mit Kapitel '+(nc.idx+1):'Los geht’s: Kapitel 1'}</button>`:`<button class="btn big red" data-test="1">🏆 Abschlusstest</button>`}</div></div>
 <div class="lh-art">${window.HERO[L.slug]||''}</div></section>
 <div class="soundtip"><span class="st-ic">🔊</span><div><b>Mit Ton lernen:</b> Tippe auf einen Lautsprecher, dann hörst du den Satz (nochmal tippen = Stopp). <b>Kein Ton auf dem iPhone?</b> Stummschalter an der Seite aus und lauter stellen.</div></div>
 <div class="section-title"><div class="bar"></div><h2>Deine Kapitel</h2><span class="sct-n">${o.d}/${o.t} geschafft</span></div><ol class="path">`;
 CHAPTERS.forEach((c,i)=>{const s=chapterStatus(c);const pct=Math.round(s.solved/s.total*100);
  if(c.block)h+=`<li class="pblock" style="--c:${c.c}"><span>${c.block}</span></li>`;
  h+=`<li><button class="pstep${s.done?' done':''}" style="--c:${c.c}" data-open="${c.id}"><span class="pnum">${s.done?'✓':i+1}</span><span class="pbody"><span class="pk">${c.kind||'Kapitel '+(i+1)}</span><span class="pt"><span class="pic">${c.icon||''}</span>${c.title}</span><span class="ps">${c.sub||''}</span>
  <span class="pst"><span class="mini"><i style="width:${pct}%"></i></span>${s.solved}/${s.total} Aufgaben${s.p.best?` · Bestwert ${s.p.best} %`:''}</span></span></button></li>`;});
 const t=P.test;
 h+=`<li><button class="pstep test${t.stars>=2?' done':''}" data-test="1"><span class="pnum">🏆</span><span class="pbody"><span class="pk">Finale</span><span class="pt">Abschlusstest</span><span class="ps">${testSize()} Aufgaben auf Klassenarbeitsniveau – mit Punkten, Medaille und „Das solltest du noch einmal üben“</span>
 <span class="pst">${t.best!==null?`Bestwert ${t.best} % · <span class="stars-s">${stars(t.stars)}</span> · ${t.runs}× gemacht`:'Noch nicht gemacht'}</span></span></button></li></ol>
 <div class="merk blue"><h3>🧭 So lernst du am besten</h3><ul><li>Gehe die Kapitel <b>der Reihe nach</b> durch: erst lesen und anhören, dann <b>„Jetzt üben“</b>.</li><li>Ein Kapitel bekommt seinen Haken ✓ ab <b>70 %</b>. Für die Punkte zählt immer der <b>erste Versuch</b> – mit „Nochmal versuchen“ kannst du aber jede Aufgabe wiederholen.</li><li>Die Aufgaben kommen jedes Mal <b>neu gemischt</b>.</li><li>Zum Schluss: <b>Abschlusstest</b>. Danach siehst du genau, was du noch üben solltest.</li></ul></div>
 <div class="toolbar"><button class="btn" data-mix="1">🔀 Gemischt üben (12 Aufgaben)</button><a class="btn ghost" href="../">📋 Alle Lektionen</a></div>
 <div class="resetbox"><div><h3>↺ Neu anfangen</h3><p>Löscht in dieser Lektion <b>alle</b> Haken, gelösten Aufgaben und Test-Bestwerte. Einzelne Kapitel setzt du im Kapitel selbst zurück.</p></div><button class="btn red" data-reset="1">↺ Gesamten Fortschritt zurücksetzen</button></div>
 ${lessonNav()}`;
 main.innerHTML=h;
}
function lessonNav(){const LS=window.LESSONS||[];if(!LS.length)return '';
 return `<div class="lnav"><h3>Weitere Lektionen zur Klassenarbeit</h3><div class="lnav-g">${LS.filter(x=>x.slug!==L.slug).map(x=>`<a href="../${x.slug}/" style="--c:${x.color}"><span>${x.icon}</span><b>${x.title}</b></a>`).join('')}</div></div>`;}

function lesson(id){
 const c=CHMAP[id];const p=chp(id);p.seen=true;save();
 let h=`<div class="crumb"><button class="btn ghost small" data-home="1">← Übersicht</button><span class="crumb-n">Kapitel ${c.idx+1} von ${CHAPTERS.length}</span></div>
 <header class="chead" style="--c:${c.c}"><span class="cic">${c.icon||'📘'}</span><div><div class="ck">${c.kind||'Kapitel '+(c.idx+1)}</div><h1>${c.title}</h1>${c.sub?`<div class="cs">${c.sub}</div>`:''}</div></header>
 <div class="lesson-body">${c.html||''}</div>`;
 h+=chResetBar(id)+`<div class="toolbar center"><button class="btn green big" data-practice="${id}">✏️ Jetzt üben (${c.ex.length} Aufgaben)</button>${c.idx<CHAPTERS.length-1?`<button class="btn ghost" data-open="${CHAPTERS[c.idx+1].id}">Nächstes Kapitel →</button>`:`<button class="btn red" data-test="1">🏆 Zum Abschlusstest</button>`}</div>`;
 main.innerHTML=h;mountWidgets(main,c);
}
function chResetBar(id){const c=CHMAP[id],s=chapterStatus(c);
 return `<div class="chreset" id="chReset"><span class="legend">Dein Stand: <b>${s.solved}/${s.total} gelöst</b>${s.p.best?` · Bestwert ${s.p.best} %`:''}${s.done?' · ✓ Haken':''}</span><button class="btn ghost small" data-chreset="${id}">↺ Kapitel zurücksetzen</button></div>`;}

/* ---------- Widgets in Lektionstexten ---------- */
function mountWidgets(root,c){
 $$('.track',root).forEach(el=>{const t=TRACKS[el.dataset.track];if(!t)return;const a={lines:t.lines};
  const p=c?chp(c.id):{runs:0,solved:{}};const open=t.open||p.runs>0||Object.keys(p.solved).length>0;
  el.innerHTML=`<div class="tb-head"><span class="tb-ic">🎧</span><div><div class="tb-k">${t.kind||'Hörtext'}</div><div class="tb-t">${t.title}</div></div></div>${t.intro?`<p class="tb-intro">${t.intro}</p>`:''}${playBig(a,t.open?'Anhören und mitlesen':'Hörtext anhören')}
  ${t.open?`<div class="transbox">${transcript(a)}</div>`:`<button type="button" class="btn ghost small trans-btn" ${open?'':'disabled'}>${open?'📄 Transkript zeigen':'🔒 Transkript erst nach den Aufgaben'}</button><div class="transbox" hidden>${transcript(a)}</div>`}`;
  const b=$('.trans-btn',el);if(b)b.onclick=()=>{const tb=$('.transbox',el);tb.hidden=!tb.hidden;b.textContent=tb.hidden?'📄 Transkript zeigen':'🙈 Transkript ausblenden';};});
 $$('.writer',root).forEach(el=>mountWriter(el,WRITERS[el.dataset.writer],el.dataset.writer));
}
document.addEventListener('click',e=>{const t=e.target.closest('.tab');if(!t)return;const box=t.closest('.tabs');const i=+t.dataset.tab;
 $$('.tab',box).forEach((x,k)=>{x.classList.toggle('on',k===i);});[...box.children].filter(x=>x.classList.contains('tabpane')).forEach((p,k)=>p.hidden=k!==i);stopAudio();});
function mountWriter(el,w,id){if(!w)return;const sk=KEY+'_w_'+id;let txt='';try{txt=localStorage.getItem(sk)||'';}catch(e){}
 el.innerHTML=`<div class="wr-head">✍️ ${w.title}</div><p class="legend">${w.hint||''}</p>
 <div class="wr-frame"><div class="wr-ft">🧱 Schreibrahmen – tippe auf einen Baustein, dann wird er in deinen Text eingefügt:</div>${w.frame.map(([fr,de])=>`<button type="button" class="wr-b" data-ins="${esc(fr)}"><span class="fr">${fr}</span><small>${de}</small></button>`).join('')}</div>
 <textarea class="wr-ta" rows="9" autocapitalize="sentences" spellcheck="false" placeholder="Schreibe hier deinen Text auf Französisch …">${esc(txt)}</textarea>
 <div class="acc">${['é','è','ê','à','ç','ô','î','’'].map(c=>`<button type="button" data-c="${c}">${c}</button>`).join('')}</div>
 <div class="wr-check"><div class="wr-ct">✅ Checkliste <span class="wr-n"></span></div><ul>${w.checks.map((c,i)=>`<li data-i="${i}"><span class="ck-b"></span>${c[0]}</li>`).join('')}</ul></div>
 <div class="toolbar"><button type="button" class="btn ghost small wr-clear">🗑 Text löschen</button><button type="button" class="btn small wr-copy">📋 Text kopieren</button></div>
 <details class="reveal sample"><summary><span>👀 Beispiellösung zum Vergleichen</span><span class="rv-hint">erst selbst schreiben!</span></summary><div class="rv-a">${H.spkLines(w.sample.map(s=>[w.who||'',s]),'','Beispieltext anhören')} ${w.sample.map(s=>`<span class="fr">${s}</span>`).join(' ')}${w.sampleNote?`<div class="legend" style="margin-top:8px">${w.sampleNote}</div>`:''}</div></details>`;
 const ta=$('.wr-ta',el);
 const upd=()=>{const v=ta.value;try{localStorage.setItem(sk,v);}catch(e){}
  const sents=v.split(/[.!?]+/).map(s=>s.trim()).filter(s=>s.split(/\s+/).length>=2).length;
  $('.wr-n',el).textContent=`· ${sents} Sätze`;
  w.checks.forEach((c,i)=>{const li=$(`li[data-i="${i}"]`,el);const ok=c[1]==='SENT'?sents>=c[2]:((v.match(new RegExp(c[1],'gi'))||[]).length>=(c[2]||1));li.classList.toggle('ok',ok);});};
 ta.addEventListener('input',upd);upd();
 let last=0;ta.addEventListener('blur',()=>{last=ta.selectionStart;});
 const ins=s=>{const p=document.activeElement===ta?ta.selectionStart:(last||ta.value.length);const e2=document.activeElement===ta?ta.selectionEnd:p;ta.value=ta.value.slice(0,p)+s+ta.value.slice(e2);const np=p+s.length;ta.focus();try{ta.setSelectionRange(np,np);}catch(x){}last=np;upd();};
 $$('.wr-b',el).forEach(b=>b.onclick=()=>{const pre=ta.value&&!/\s$/.test(ta.value.slice(0,last||ta.value.length))?' ':'';ins(pre+b.dataset.ins);});
 $$('.acc button',el).forEach(b=>b.onclick=()=>ins(b.dataset.c));
 $('.wr-clear',el).onclick=()=>{if(ta.value&&!confirm('Deinen Text wirklich löschen?'))return;ta.value='';last=0;upd();};
 $('.wr-copy',el).onclick=()=>{const v=ta.value;if(!v.trim()){toast('Noch kein Text.');return;}(navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).then(()=>toast('Text kopiert!'),()=>{ta.select();try{document.execCommand('copy');toast('Text kopiert!');}catch(x){toast('Bitte Text markieren und kopieren.');}});};
}

/* ---------- Übungs-Sitzung ---------- */
let S=null;
function practice(cfg){S={mode:cfg.mode,ch:cfg.ch||null,list:cfg.list,i:0,res:[]};renderEx();}
function startChapter(id){const c=CHMAP[id];const l=[1,2,3].flatMap(lv=>shuffle(c.ex.filter(e=>e.lv===lv)));go('practice',{mode:'chapter',ch:id,list:c.keepOrder?c.ex.slice():l});}
function startMix(){go('practice',{mode:'mix',list:shuffle(ALLEX.filter(e=>e.ch!=='test')).slice(0,12)});}
function testSize(){return L.testN||18;}
function startTest(){
 const n=testSize();const pick=TEST_EX.slice();
 CHAPTERS.forEach(c=>{const pool=c.ex.filter(e=>e.lv>=2&&!c.noTest);const e=shuffle(pool.length?pool:c.ex)[0];if(e&&!c.noTest&&pick.length<n)pick.push(e);});
 const rest=shuffle(ALLEX.filter(e=>e.lv>=2&&e.ch!=='test'&&!pick.includes(e)&&!(CHMAP[e.ch]||{}).noTest));
 for(const e of rest){if(pick.length>=n)break;pick.push(e);}
 go('practice',{mode:'test',list:shuffle(pick.slice(0,n))});}
window.APPTEST={single:(id)=>go('practice',{mode:'single',list:[ALLEX.find(e=>e.id===id)]}),ALLEX,CHAPTERS,startTest,startChapter,state:()=>S,KEY};

let cur=null;
function renderEx(){
 const e=S.list[S.i];const c=CHMAP[e.ch];const [tl,ti]=tlabel(e);
 const head=S.mode==='test'?'🏆 Abschlusstest':S.mode==='mix'?'🔀 Gemischt':S.mode==='single'?'Aufgabe':c.title;
 const a=audioOf(e.au);
 main.innerHTML=`<div class="ex-wrap"><div class="ex-top"><button class="btn ghost small" data-quit="1" aria-label="Übung beenden">✕</button><div class="pbar"><i style="width:${S.i/S.list.length*100}%"></i></div><span class="ex-n">${S.i+1} / ${S.list.length}</span></div>
 <div class="ex-card fade" style="--c:${(CHMAP[e.ref]||c).c||L.color}"><div class="ex-meta"><span class="ex-type">${ti} ${tl}</span>${lvStars(e.lv)}<span class="ex-head">${head}</span></div>
 <div class="ex-q">${e.q}</div>${a?`<div class="ex-audio">${playBig(a,a.title?'Hörtext: '+a.title:'Anhören')}${e.auNote?`<div class="legend">${e.auNote}</div>`:''}</div>`:''}<div id="exBody"></div>
 <div class="fb" id="fb" role="status" aria-live="polite"></div><div class="actions"><button class="btn retry" id="retryBtn" hidden>↺ Nochmal versuchen</button><button class="btn" id="checkBtn" disabled>Prüfen</button></div>
 <div class="legend retrynote" id="retryNote" hidden></div></div>
 ${S.mode==='chapter'?`<div class="chreset slim"><button class="btn ghost small" data-chreset="${S.ch}">↺ Kapitel zurücksetzen</button></div>`:''}</div>`;
 const btn=$('#checkBtn'),rb=$('#retryBtn');
 btn.onclick=()=>{if(btn.dataset.next){next();return;}const r=cur.check();if(r==null)return;stopAudio();feedback(e,r,a);btn.textContent=S.i<S.list.length-1?'Weiter →':'Ergebnis ansehen';btn.dataset.next='1';btn.disabled=false;btn.classList.add(r.ok?'green':'red');
  rb.hidden=false;rb.classList.toggle('hot',!r.ok);
  if(!r.ok&&(S.mode==='test'||S.mode==='chapter')){const n=$('#retryNote');n.hidden=false;n.textContent='Du kannst es nochmal versuchen – für die Punkte zählt aber dein erster Versuch.';}
  setTimeout(()=>{const f=$('#fb');if(f&&f.getBoundingClientRect().bottom>window.innerHeight)f.scrollIntoView({behavior:'smooth',block:'center'});},60);};
 rb.onclick=()=>mountEx(e);
 mountEx(e);
}
function mountEx(e){
 stopAudio();
 const old=$('#exBody'),body=document.createElement('div');body.id='exBody';old.replaceWith(body);
 const fb=$('#fb');fb.className='fb';fb.innerHTML='';
 const btn=$('#checkBtn');btn.textContent='Prüfen';delete btn.dataset.next;btn.disabled=true;btn.classList.remove('green','red');
 const rb=$('#retryBtn');rb.hidden=true;rb.classList.remove('hot');const n=$('#retryNote');if(n)n.hidden=true;
 cur=RENDER[e.type](e,body);
}
function ready(v){const b=$('#checkBtn');if(b&&!b.dataset.next)b.disabled=!v;}
const PRAISE=['Super, richtig!','Très bien!','Genau!','Bravo!','Parfait!','Klasse!','Excellent!'];
function feedback(e,r,a){
 const fb=$('#fb');const first=!S.res[S.i];
 if(first)S.res[S.i]={e,ok:r.ok,pts:r.pts,max:r.max};
 if(r.ok&&S.mode!=='single'&&e.ch!=='test'){const p=chp(e.ch);p.solved[e.id]=1;save();}
 fb.className='fb show '+(r.ok?'ok':'bad');
 const say=r.say&&r.say.length?r.say:null;
 fb.innerHTML=`<div class="ico">${r.ok?'✓':'✗'}</div><div class="fb-in"><div class="ttl">${r.ok?PRAISE[Math.floor(Math.random()*PRAISE.length)]:r.pts>0?`Teilweise richtig (${r.pts} von ${r.max})`:'Leider nicht richtig.'}</div>
 ${r.ok&&!r.showSol?'':`<div class="sol">${r.ok?'Lösung':'Richtig ist'}: <span class="fr">${r.sol}</span> ${say?spk(say.map(x=>x[1]),say.map(x=>x[0]),'mini','Lösung anhören'):''}</div>`}
 ${r.ok&&say&&!r.showSol?`<div class="sol-say">${spk(say.map(x=>x[1]),say.map(x=>x[0]),'mini','Anhören')} <span class="legend">Zum Nachsprechen anhören</span></div>`:''}
 ${r.acc?`<div class="warnacc">✍️ ${e.strict?'Hier zählen die Akzente mit! Richtig geschrieben':'Fast perfekt! Achte auf die <b>Akzente</b>'}: <span class="fr">${esc(r.acc)}</span> – in der Klassenarbeit ist ein fehlender Akzent ein Fehler.</div>`:''}
 <div class="why">💡 ${e.why}</div>${a?`<details class="trans"><summary>📄 Transkript anzeigen</summary>${transcript(a)}</details>`:''}</div>`;
}
function next(){S.i++;if(S.i>=S.list.length){go('result');}else renderEx();}

/* ---------- Aufgaben-Renderer ---------- */
const RENDER={};
const sayOf=(e,fallback)=>{if(e.say===false)return null;if(e.say)return [].concat(e.say).map(x=>Array.isArray(x)?x:['',x]);return fallback?[].concat(fallback).map(x=>Array.isArray(x)?x:['',strip(x)]):null;};
RENDER.mc=(e,el)=>{
 const opts=shuffle(e.o.map((t,i)=>({t,i})));let sel=null;
 el.innerHTML=(e.img?`<div class="ex-img">${e.img}</div>`:'')+(e.prompt?`<div class="prompt"><span class="fr">${e.prompt}</span>${e.promptSay===false?'':spk(e.prompt,e.promptWho||'')}</div>`:'')+`<div class="opts${e.o.every(o=>strip(o).length<14)?' short':''}">`+opts.map((o,k)=>`<button class="opt" data-k="${k}">${o.t}</button>`).join('')+'</div>';
 $$('.opt',el).forEach(b=>b.onclick=()=>{if(b.disabled)return;$$('.opt',el).forEach(x=>x.classList.remove('sel'));b.classList.add('sel');sel=opts[+b.dataset.k].i;ready(true);});
 return {check(){if(sel==null)return null;const ok=sel===0;$$('.opt',el).forEach(b=>{b.disabled=true;const i=opts[+b.dataset.k].i;if(i===0)b.classList.add('ok');else if(i===sel)b.classList.add('bad');});
  return {ok,pts:ok?1:0,max:1,sol:e.o[0],say:sayOf(e,e.fr?strip(e.o[0]):null)};}};};
RENDER.pick=(e,el)=>{
 const opts=shuffle(e.cards.map((c,i)=>({c,i})));let sel=null;
 el.innerHTML=`<div class="cards">`+opts.map((o,k)=>`<button class="pcard" data-k="${k}" aria-label="Bild ${k+1}">${o.c[0]}${e.labels?`<span class="pl">${o.c[1]}</span>`:''}</button>`).join('')+'</div>';
 $$('.pcard',el).forEach(b=>b.onclick=()=>{if(b.disabled)return;$$('.pcard',el).forEach(x=>x.classList.remove('sel'));b.classList.add('sel');sel=opts[+b.dataset.k].i;ready(true);});
 return {check(){if(sel==null)return null;const ok=sel===0;$$('.pcard',el).forEach(b=>{b.disabled=true;const i=opts[+b.dataset.k].i;if(!e.labels)b.insertAdjacentHTML('beforeend',`<span class="pl">${e.cards[i][1]}</span>`);if(i===0)b.classList.add('ok');else if(i===sel)b.classList.add('bad');});
  return {ok,pts:ok?1:0,max:1,sol:e.cards[0][1],say:sayOf(e,strip(e.cards[0][1]))};}};};
function gapSelects(e,text){return text.replace(/\{(\d+)\}/g,(m,k)=>{const g=e.gaps[+k];const o=shuffle(g);return `<select class="gapsel" data-g="${k}" aria-label="Lücke ${+k+1}"><option value="">…</option>${o.map(x=>`<option value="${esc(x)}">${x}</option>`).join('')}</select>`;});}
function gapCheck(e,el){const ss=$$('select.gapsel',el);if(ss.some(s=>!s.value))return null;let n=0;
 ss.forEach(s=>{const right=s.value===e.gaps[+s.dataset.g][0];s.classList.add(right?'ok':'bad');if(right)n++;s.disabled=true;});return {n,max:ss.length};}
function bindGaps(el){$$('select.gapsel',el).forEach(s=>s.onchange=()=>ready($$('select.gapsel',el).every(x=>x.value)));}
const fill=(e,t,u=true)=>t.replace(/\{(\d+)\}/g,(m,k)=>u?'<u>'+e.gaps[+k][0]+'</u>':e.gaps[+k][0]);
RENDER.gap=(e,el)=>{el.innerHTML=`<div class="ex-sub">${e.sub||'Wähle in jeder Lücke das passende Wort.'}</div><div class="gaptext${e.table?' tbl':''}">${gapSelects(e,e.text)}</div>`;bindGaps(el);
 return {check(){const r=gapCheck(e,el);if(r==null)return null;return {ok:r.n===r.max,pts:r.n,max:r.max,sol:fill(e,e.text),say:sayOf(e,e.table?null:strip(fill(e,e.text,false)))};}};};
RENDER.gapw=(e,el)=>{
 el.innerHTML=`<div class="ex-sub">${e.sub||'Schreibe die fehlenden Wörter in die Lücken.'}</div><div class="gaptext">${e.text.replace(/\{(\d+)\}/g,(m,k)=>{const len=Math.max(...[].concat(e.ans[+k]).map(x=>x.length));return `<input class="gapin" data-g="${k}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Lücke ${+k+1}" style="width:${Math.max(3.2,len*0.72+1.4)}em">`;})}</div>
 <div class="acc">${['é','è','ê','à','ç','’'].map(c=>`<button type="button" data-c="${c}">${c}</button>`).join('')}</div>`;
 const ins=$$('.gapin',el);let lastI=ins[0];
 const upd=()=>ready(ins.every(i=>i.value.trim().length>0));
 ins.forEach(i=>{i.addEventListener('input',upd);i.addEventListener('focus',()=>lastI=i);i.addEventListener('keydown',ev=>{if(ev.key==='Enter'){const k=ins.indexOf(i);if(k<ins.length-1)ins[k+1].focus();else if(!$('#checkBtn').disabled)$('#checkBtn').click();}});});
 $$('.acc button',el).forEach(b=>b.onclick=()=>{const i=lastI;const s=i.selectionStart??i.value.length,t=i.selectionEnd??s;i.value=i.value.slice(0,s)+b.dataset.c+i.value.slice(t);i.focus();i.setSelectionRange(s+1,s+1);upd();});
 const solT=e.text.replace(/\{(\d+)\}/g,(m,k)=>'<u>'+[].concat(e.ans[+k])[0]+'</u>');
 return {check(){if(!ins.every(i=>i.value.trim()))return null;let n=0;const accs=[];
  ins.forEach(i=>{const r=compare(i.value,[].concat(e.ans[+i.dataset.g]));if(r.acc&&e.strict)r.ok=false;i.classList.add(r.ok?'ok':'bad');if(r.ok)n++;if(r.acc)accs.push(r.acc);i.disabled=true;});$$('.acc button',el).forEach(b=>b.disabled=true);
  return {ok:n===ins.length,pts:n,max:ins.length,acc:accs.join(' · '),sol:solT,showSol:accs.length>0,say:sayOf(e,strip(solT))};}};};
RENDER.dialog=(e,el)=>{let side={},n=0;
 el.innerHTML=`<div class="ex-sub">Wähle in jeder Lücke das passende Wort.</div><div class="dlg">`+e.lines.map(([w,t])=>{if(!(w in side))side[w]=n++%2;return `<div class="row ${side[w]?'r':''}"><div class="av">${window.CHARS[w]||''}<span>${window.NAMES[w]||w}</span></div><div class="bub"><span class="tx">${gapSelects(e,t)}</span></div></div>`;}).join('')+'</div>';bindGaps(el);
 return {check(){const r=gapCheck(e,el);if(r==null)return null;return {ok:r.n===r.max,pts:r.n,max:r.max,sol:e.lines.map(([w,t])=>`${window.NAMES[w]||w}: `+fill(e,t)).join('<br>'),say:e.lines.map(([w,t])=>[w,strip(fill(e,t,false))])};}};};
const joinTok=a=>a.join(' ').replace(/\s+([?.!,])/g,'$1').replace(/’ /g,'’');
RENDER.order=(e,el)=>{
 let toks=e.tok.map((t,i)=>({t,i}));let sh;do{sh=shuffle(toks);}while(toks.length>2&&sh.every((x,k)=>x.i===k));
 el.innerHTML=`<div class="ex-sub">Tippe die Bausteine in der richtigen Reihenfolge an. Antippen im oberen Feld legt einen Baustein zurück.</div>
 <div class="zone empty" id="zone" data-ph="Hier entsteht dein Satz …"></div><div class="pool" id="pool">${sh.map(x=>`<button class="tok" data-i="${x.i}">${x.t}</button>`).join('')}</div>`;
 const zone=$('#zone',el),pool=$('#pool',el);
 const upd=()=>{zone.classList.toggle('empty',!zone.children.length);ready(pool.children.length===0);};
 el.addEventListener('click',ev=>{const b=ev.target.closest('.tok');if(!b||b.disabled)return;(b.parentElement===pool?zone:pool).appendChild(b);upd();});
 return {check(){if(pool.children.length)return null;const got=$$('.tok',zone).map(b=>b.textContent);$$('.tok',el).forEach(b=>{b.disabled=true;});
  const r=compare(joinTok(got),[joinTok(e.tok),...e.alts]);zone.classList.add(r.ok?'ok':'bad');return {ok:r.ok,pts:r.ok?1:0,max:1,sol:joinTok(e.tok),say:sayOf(e,joinTok(e.tok))};}};};
RENDER.write=(e,el)=>{
 el.innerHTML=(e.img?`<div class="ex-img">${e.img}</div>`:'')+(e.prompt?`<div class="prompt">${e.prompt}</div>`:'')+`<input class="inp" id="inp" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${e.ph||'Schreibe hier auf Französisch …'}" aria-label="Antwort">
 <div class="acc">${['é','è','ê','à','ç','’'].map(c=>`<button type="button" data-c="${c}">${c}</button>`).join('')}</div>
 <div class="legend">Groß-/Kleinschreibung ist egal. Akzente bitte mitschreiben – die Knöpfe helfen dir.</div>`;
 const inp=$('#inp',el);inp.addEventListener('input',()=>ready(inp.value.trim().length>0));
 inp.addEventListener('keydown',ev=>{if(ev.key==='Enter'&&inp.value.trim().length>0)$('#checkBtn').click();});
 $$('.acc button',el).forEach(b=>b.onclick=()=>{const s=inp.selectionStart??inp.value.length,t=inp.selectionEnd??s;inp.value=inp.value.slice(0,s)+b.dataset.c+inp.value.slice(t);inp.focus();inp.setSelectionRange(s+1,s+1);ready(inp.value.trim().length>0);});
 return {check(){if(!inp.value.trim())return null;const r=compare(inp.value,e.ans);if(r.acc&&e.strict)r.ok=false;inp.classList.add(r.ok?'ok':'bad');inp.disabled=true;$$('.acc button',el).forEach(b=>b.disabled=true);
  return {ok:r.ok,pts:r.ok?1:0,max:1,acc:r.acc,sol:e.ans[0],showSol:!!r.acc,say:sayOf(e,strip(e.ans[0]))};}};};
const PCOL=['#2563eb','#c8102e','#16a34a','#d97706','#7c3aed','#0891b2'];
RENDER.match=(e,el)=>{
 const Ls=shuffle(e.pairs.map((p,i)=>({t:p[0],i}))),Rs=shuffle(e.pairs.map((p,i)=>({t:p[1],i})));
 el.innerHTML=`<div class="ex-sub">Tippe links etwas an und dann rechts das Passende. Nochmal antippen löst ein Paar.</div>
 <div class="match"><div class="col">${Ls.map(x=>`<button class="mi" data-side="L" data-i="${x.i}">${x.t}</button>`).join('')}</div><div class="col">${Rs.map(x=>`<button class="mi" data-side="R" data-i="${x.i}">${x.t}</button>`).join('')}</div></div>`;
 const pairs={};let selL=null;
 const paint=()=>{$$('.mi',el).forEach(b=>{b.style.borderColor='';b.style.background='';const t=b.querySelector('.tag');if(t)t.remove();b.classList.remove('sel');});
  let n=0;Object.entries(pairs).forEach(([l,r])=>{const col=PCOL[n%6];n++;[$(`.mi[data-side="L"][data-i="${l}"]`,el),$(`.mi[data-side="R"][data-i="${r}"]`,el)].forEach(b=>{b.style.borderColor=col;b.style.background=col+'14';b.insertAdjacentHTML('beforeend',`<span class="tag" style="background:${col}">${n}</span>`);});});
  if(selL!=null)$(`.mi[data-side="L"][data-i="${selL}"]`,el).classList.add('sel');ready(Object.keys(pairs).length===e.pairs.length);};
 $$('.mi',el).forEach(b=>b.onclick=()=>{if(b.disabled)return;const i=b.dataset.i;
  if(b.dataset.side==='L'){if(pairs[i]!=null){delete pairs[i];selL=null;}else selL=(selL===i?null:i);}
  else{const owner=Object.keys(pairs).find(k=>pairs[k]===i);if(owner!=null){delete pairs[owner];}else if(selL!=null){pairs[selL]=i;selL=null;}else{toast('Tippe zuerst links etwas an.');}}
  paint();});
 return {check(){if(Object.keys(pairs).length<e.pairs.length)return null;let n=0;Object.entries(pairs).forEach(([l,r])=>{const g=l===r;if(g)n++;[$(`.mi[data-side="L"][data-i="${l}"]`,el),$(`.mi[data-side="R"][data-i="${r}"]`,el)].forEach(b=>b.classList.add(g?'ok':'bad'));});
  $$('.mi',el).forEach(b=>b.disabled=true);return {ok:n===e.pairs.length,pts:n,max:e.pairs.length,sol:e.pairs.map(p=>`${p[0]} → ${p[1]}`).join('<br>'),say:sayOf(e,null)};}};};
function roomSel(el,e,multi){const R=window.ROOMS[e.room];
 el.innerHTML=`<div class="ex-sub">${multi?'Tippe im Bild alles an, was passt. Nochmal tippen hebt die Markierung auf.':'Tippe im Bild auf den richtigen Gegenstand.'}</div><div class="roomwrap">${R.svg}</div>`;
 const sel=new Set();
 $$('.ri',el).forEach(g=>{g.setAttribute('tabindex','0');g.setAttribute('role','button');
  const f=()=>{if(g.dataset.lock)return;const k=g.dataset.item;if(multi){if(sel.has(k)){sel.delete(k);g.classList.remove('sel');}else{sel.add(k);g.classList.add('sel');}}else{sel.clear();$$('.ri',el).forEach(x=>x.classList.remove('sel'));sel.add(k);g.classList.add('sel');}ready(sel.size>0);};
  g.addEventListener('click',f);g.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();f();}});});
 return {R,sel};}
RENDER.click=(e,el)=>{const {R,sel}=roomSel(el,e,false);
 return {check(){if(!sel.size)return null;const s=[...sel][0];$$('.ri',el).forEach(g=>{g.dataset.lock=1;g.classList.remove('sel');if(g.dataset.item===e.target)g.classList.add('ok');else if(g.dataset.item===s)g.classList.add('bad');});
  const ok=s===e.target;return {ok,pts:ok?1:0,max:1,sol:R.labels[e.target]+(ok?'':` <span class="soft">(du hast ${R.labels[s]} angetippt)</span>`),say:sayOf(e,strip(R.labels[e.target]))};}};};
RENDER.mark=(e,el)=>{const {R,sel}=roomSel(el,e,true);const T=new Set(e.targets);
 return {check(){if(!sel.size)return null;let hit=0,fp=0;$$('.ri',el).forEach(g=>{g.dataset.lock=1;const k=g.dataset.item;g.classList.remove('sel');
  if(T.has(k)&&sel.has(k)){g.classList.add('ok');hit++;}else if(!T.has(k)&&sel.has(k)){g.classList.add('bad');fp++;}else if(T.has(k))g.classList.add('miss');});
  const pts=Math.max(0,hit-fp);return {ok:hit===T.size&&fp===0,pts,max:T.size,sol:e.targets.map(k=>R.labels[k]).join(', '),say:sayOf(e,null)};}};};
RENDER.multi=(e,el)=>{
 const o=shuffle(e.o);el.innerHTML=`${e.img?`<div class="ex-img">${e.img}</div>`:''}<div class="ex-sub">${e.sub||'Tippe alle passenden an (mehrere sind richtig).'}</div><div class="chips">${o.map((x,i)=>`<button class="chipc" data-i="${i}">${x[0]}</button>`).join('')}</div>`;
 $$('.chipc',el).forEach(b=>b.onclick=()=>{if(b.disabled)return;b.classList.toggle('sel');ready($$('.chipc.sel',el).length>0);});
 return {check(){const s=$$('.chipc.sel',el);if(!s.length)return null;let hit=0,fp=0;const T=e.o.filter(x=>x[1]).length;$$('.chipc',el).forEach(b=>{const x=o[+b.dataset.i];const on=b.classList.contains('sel');b.disabled=true;
  if(x[1]&&on){b.classList.add('ok');hit++;}else if(!x[1]&&on){b.classList.add('bad');fp++;}else if(x[1]&&!on){b.classList.add('miss');}});
  return {ok:hit===T&&fp===0,pts:Math.max(0,hit-fp),max:T,sol:e.o.filter(x=>x[1]).map(x=>x[0]).join(' · '),say:sayOf(e,null)};}};};
RENDER.seg=(e,el)=>{
 const ch={};
 el.innerHTML=`${e.img?`<div class="ex-img">${e.img}</div>`:''}<div class="ex-sub">${e.sub||(e.tf?'Tippe bei jedem Satz auf <b>vrai</b> (richtig) oder <b>faux</b> (falsch).':'Wähle in jeder Zeile die richtige Antwort.')}</div><div class="segs">`+e.rows.map((r,i)=>{const [p,ans,au,who]=r;
  return `<div class="segrow" data-r="${i}"><div class="sg-p">${au?spk(au,who||'','', 'Anhören'):''}<span class="sg-t">${p}</span></div><div class="sg-o${e.tf?' tf':''}">${(r[4]||e.opts).map(o=>`<button type="button" class="sgb${e.tf?(o==='vrai'?' v':' f'):''}" data-v="${esc(o)}">${e.tf?(o==='vrai'?'✓ vrai':'✗ faux'):o}</button>`).join('')}</div></div>`;}).join('')+'</div>';
 $$('.segrow',el).forEach(row=>{$$('.sgb',row).forEach(b=>b.onclick=()=>{if(b.disabled)return;$$('.sgb',row).forEach(x=>x.classList.remove('sel'));b.classList.add('sel');ch[row.dataset.r]=b.dataset.v;ready(Object.keys(ch).length===e.rows.length);});});
 return {check(){if(Object.keys(ch).length<e.rows.length)return null;let n=0;
  $$('.segrow',el).forEach(row=>{const r=e.rows[+row.dataset.r];const v=ch[row.dataset.r];const okr=v===r[1];if(okr)n++;row.classList.add(okr?'ok':'bad');
   $$('.sgb',row).forEach(b=>{b.disabled=true;if(b.dataset.v===r[1])b.classList.add('ok');else if(b.dataset.v===v)b.classList.add('bad');});});
  return {ok:n===e.rows.length,pts:n,max:e.rows.length,sol:e.rows.map(r=>`${strip(r[0]).trim()||(r[2]?'«&nbsp;'+r[2]+'&nbsp;»':'…')} → <b>${r[1]}</b>`).join('<br>'),showSol:false,say:sayOf(e,null)};}};};
RENDER.detect=(e,el)=>{
 const parts=[];e.text.replace(/\[([^\]|]+)\|([^\]]+)\]|(\S+)/g,(m,w,r,plain)=>{parts.push(w?{t:w,r,err:true}:{t:plain,err:false});return m;});
 el.innerHTML=`<div class="ex-sub">${e.sub||`Tippe alle falschen Wörter an. Es sind <b>${parts.filter(p=>p.err).length} Fehler</b>.`}</div><div class="dettext">${parts.map((p,i)=>`<button type="button" class="dw" data-i="${i}">${p.t}</button>`).join(' ')}</div>`;
 const sel=new Set();
 $$('.dw',el).forEach(b=>b.onclick=()=>{if(b.disabled)return;const i=+b.dataset.i;if(sel.has(i)){sel.delete(i);b.classList.remove('sel');}else{sel.add(i);b.classList.add('sel');}ready(sel.size>0);});
 const errs=parts.filter(p=>p.err).length;
 return {check(){if(!sel.size)return null;let hit=0,fp=0;$$('.dw',el).forEach(b=>{const p=parts[+b.dataset.i];b.disabled=true;const on=sel.has(+b.dataset.i);
  if(p.err){if(on)hit++;b.classList.add(on?'ok':'miss');b.innerHTML=`<s>${p.t}</s> <ins>${p.r}</ins>`;}else if(on){fp++;b.classList.add('bad');}});
  const fixed=parts.map(p=>p.err?p.r:p.t).join(' ');
  return {ok:hit===errs&&fp===0,pts:Math.max(0,hit-fp),max:errs,sol:parts.map(p=>p.err?`<u>${p.r}</u>`:p.t).join(' '),showSol:true,say:sayOf(e,e.speak===false?null:fixed)};}};};

/* ---------- Ergebnis ---------- */
function medal(col,label){return `<svg class="medal" viewBox="0 0 120 120" aria-hidden="true"><path d="M40,4 L60,48 L80,4 Z" fill="#c8102e"/><path d="M48,4 L60,32 L72,4Z" fill="#2563eb"/><circle cx="60" cy="74" r="38" fill="${col}" stroke="#fff" stroke-width="5"/><circle cx="60" cy="74" r="28" fill="none" stroke="#ffffff88" stroke-width="3"/><text x="60" y="82" text-anchor="middle" font-family="FredokaApp,sans-serif" font-size="${label.length>4?17:22}" font-weight="700" fill="#fff">${label}</text></svg>`;}
function result(){
 if(!S){go('home');return;}
 const res=S.res.filter(Boolean);const pts=res.reduce((a,r)=>a+r.pts,0),max=res.reduce((a,r)=>a+r.max,0)||1,pct=Math.round(pts/max*100);
 const st=pct>=90?3:pct>=70?2:pct>=50?1:0;
 if(S.mode==='chapter'){const p=chp(S.ch);p.best=Math.max(p.best||0,pct);p.runs=(p.runs||0)+1;save();}
 if(S.mode==='test'){P.test.runs++;P.test.best=Math.max(P.test.best??0,pct);P.test.stars=Math.max(P.test.stars,st);P.test.last=pct;save();}
 const badge=st===3?medal('#f59e0b','GOLD'):st===2?medal('#94a3b8','SILBER'):st===1?medal('#b45309','BRONZE'):'';
 const title=st===3?'Excellent! Das sitzt!':st===2?'Très bien! Schon richtig gut.':st===1?'Pas mal! Noch ein bisschen üben.':'Courage! Schau dir die Kapitel noch einmal an.';
 const wrong=res.filter(r=>!r.ok);const by={};wrong.forEach(r=>{const k=r.e.ref||r.e.ch;(by[k]=by[k]||[]).push(r.e);});
 let rev='';
 if(wrong.length){rev=`<div class="review"><h3>📌 Das solltest du noch einmal üben</h3>`+Object.entries(by).map(([ch,es])=>{const c=CHMAP[ch]||CHMAP.test;const tags=[...new Set(es.map(x=>x.tag||tlabel(x)[0]))];
  return `<div class="it"><div class="t"><b>${c.icon||''} ${c.title}</b><br><span class="legend">${es.length} ${es.length>1?'Fehler':'Fehler'}: ${tags.join(' · ')}</span></div>${CHMAP[ch]&&ch!=='test'?`<button class="btn small" data-open="${ch}">📘 Erklärung</button><button class="btn small ghost" data-practice="${ch}">✏️ Üben</button>`:''}</div>`;}).join('')+`</div>`;}
 else rev=`<div class="tip" style="margin-top:16px"><span class="tip-ic">🎉</span><div>Alles richtig – fantastique!</div></div>`;
 main.innerHTML=`<div class="ex-wrap"><div class="ex-card result fade">${S.mode==='test'?`<div class="kick-red">ABSCHLUSSTEST · ${L.title}</div>`:''}
 ${badge}<div class="stars">${[0,1,2].map(i=>`<span class="s ${i<st?'on':''}" style="animation-delay:${i*.2}s">★</span>`).join('')}</div>
 <div class="score">${pts} / ${max} Punkte</div><div class="score-sub">${pct} % · ${title}</div>
 ${S.mode==='chapter'?`<div class="legend" style="margin-top:8px">${pct>=70?'✓ Kapitel geschafft! Der Haken ist gesetzt.':'Für den Haken brauchst du mindestens 70 %.'}</div>`:''}${S.mode==='test'?`<div class="legend" style="margin-top:8px">${res.length} Aufgaben · gezählt wird der erste Versuch</div>`:''}${rev}
 <div class="toolbar center">${S.mode==='test'?'<button class="btn red" data-test="1">↻ Neuer Test</button>':S.mode==='chapter'?`<button class="btn" data-practice="${S.ch}">↻ Noch einmal (neu gemischt)</button>${CHMAP[S.ch].idx<CHAPTERS.length-1?`<button class="btn green" data-open="${CHAPTERS[CHMAP[S.ch].idx+1].id}">Nächstes Kapitel →</button>`:'<button class="btn red" data-test="1">🏆 Abschlusstest</button>'}`:S.mode==='mix'?'<button class="btn" data-mix="1">↻ Neue Mischung</button>':''}<button class="btn ghost" data-home="1">Zur Übersicht</button></div>
 ${S.mode==='test'?`<div class="chreset"><span class="legend" id="testBest">Test-Bestwert: <b>${P.test.best??0} %</b> · ${stars(P.test.stars)} · ${P.test.runs}× gemacht</span><button class="btn ghost small" data-testreset="1">🗑 Test-Bestwerte löschen</button></div>`:S.mode==='chapter'?`<div class="chreset"><span class="legend">Ganz von vorn beginnen?</span><button class="btn ghost small" data-chreset="${S.ch}">↺ Kapitel zurücksetzen</button></div>`:''}</div></div>`;
 if(st>=2&&S.mode!=='single')confetti();
}

/* ---------- Navigation ---------- */
document.addEventListener('click',ev=>{const b=ev.target.closest('[data-open],[data-practice],[data-test],[data-home],[data-mix],[data-reset],[data-quit],[data-chreset],[data-testreset]');if(!b)return;
 if(b.dataset.open)go('lesson',b.dataset.open);else if(b.dataset.practice)startChapter(b.dataset.practice);else if(b.dataset.test)startTest();else if(b.dataset.home)go('home');else if(b.dataset.mix)startMix();
 else if(b.dataset.quit){if(S&&S.res.filter(Boolean).length&&S.mode!=='single'&&!confirm('Übung abbrechen? Dein Ergebnis wird nicht gespeichert.'))return;if(S&&S.mode==='chapter')go('lesson',S.ch);else go('home');}
 else if(b.dataset.reset){if(confirm('Willst du wirklich den ganzen Fortschritt dieser Lektion löschen? Alle Haken, gelösten Aufgaben, eigenen Texte und Test-Bestwerte werden gelöscht.')){P=blank();save();try{Object.keys(localStorage).filter(k=>k.startsWith(KEY+'_w_')).forEach(k=>localStorage.removeItem(k));}catch(e){}go('home');toast('Fortschritt zurückgesetzt.');}}
 else if(b.dataset.chreset){const id=b.dataset.chreset,c=CHMAP[id];if(!confirm(`Kapitel „${strip(c.title)}“ zurücksetzen?\nHaken, gelöste Aufgaben und Bestwert dieses Kapitels werden gelöscht.`))return;
  const inLesson=!!b.closest('#chReset');delete P.ch[id];save();
  if(inLesson){chp(id).seen=true;save();$('#chReset').outerHTML=chResetBar(id);updateTop();}else startChapter(id);
  toast('Kapitel zurückgesetzt – neu gemischt!');}
 else if(b.dataset.testreset){if(confirm('Test-Bestwerte wirklich löschen?')){P.test=blank().test;save();const t=$('#testBest');if(t)t.innerHTML='Test-Bestwerte gelöscht.';b.disabled=true;toast('Test-Bestwerte gelöscht.');}}});
const logo=$('#logo');if(logo)logo.onclick=()=>go('home');
go('home');
})();
