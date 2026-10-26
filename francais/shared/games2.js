/* ===================== WEITERE LERNSPIELE (Paket Klassenarbeit 1) =====================
   Vokabel-Memory · Zimmer einräumen · Plural-Fabrik · Satz-Puzzle · Stolperstein-Blitz · Hör-Bingo
   Nutzt Rahmen, Punkte, Rekord, Protokoll und Ergebnis aus games.js (HUB.GAMES + api). */
(function(){
'use strict';
const W=window,HUB=W.HUB,V=W.V,H=W.H,D=W.GDATA,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
if(!HUB||!HUB.GAMES||!D)return;
const CAT=Object.fromEntries((W.GAMECAT||[]).map(c=>[c.id,c]));
const esc=W.esc;const A=a=>V.art(a);
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const rnd=a=>a[Math.floor(Math.random()*a.length)];
const pic=(k,n=1,emo)=>k?H.ob(k,n):`<span class="emo">${(emo||'❔').repeat(n>1?3:1)}</span>`;
const J=D.join;const ph=(a,w)=>`${A(a)}${/’$/.test(a)?'':' '}<b>${esc(w)}</b>`;
const later=(ms,f)=>setTimeout(f,ms);
const reg=(id,o)=>{HUB.GAMES[id]=Object.assign({},CAT[id]||{},o);};
const CUR={};HUB.gameTest2={cur:()=>CUR};

/* ---------- 1. Vokabel-Memory ---------- */
reg('memory',{lesson:['artikel-bestimmt','regel'],time:0,go:'▶ Los! (6 Paare)',
 how:{vis:V.artSet([['cahier','le','cahier'],['guitare','la','guitare'],['armoire','l’','armoire']]),was:'Finde immer <b>Bild</b> und <b>Wort</b>, die zusammengehören. Danach wählst du den <b>Artikel</b>: le, la oder l’.',
  schritte:[['🃏','2 Karten umdrehen'],['🖼️ = 🔤','Bild und Wort passen? → Paar!'],[A('le')+' '+A('la')+' '+A('l’'),'Artikel wählen: Vokal → l’ · sonst le (m.) / la (f.)']],
  merk:'Wort immer mit Artikel lernen: le cahier · la guitare · l’armoire',fallen:[['la cahier','le cahier','cahier ist <b>männlich</b>.'],['le ordinateur','l’ordinateur','Vokal am Anfang → <b>l’</b>.']]},
 run(api){const must=['cahier','guitare'];const vow=shuffle(D.MEM.filter(o=>D.VOW.test(o[1])&&o[0]!=='hamac')).slice(0,2);
  const rest=shuffle(D.MEM.filter(o=>!must.includes(o[0])&&!vow.includes(o))).slice(0,2);
  const set=D.MEM.filter(o=>must.includes(o[0])).concat(vow,rest);
  const cards=shuffle(set.flatMap(o=>[{k:o[0],t:'p',o},{k:o[0],t:'w',o}]));let open=[],found=0,busy=false;CUR.memory={cards,set};
  api.area().innerHTML=`<p class="g-task">Finde Bild + Wort · danach den Artikel</p><div class="mem">${cards.map((c,i)=>`<button class="mcard" data-i="${i}" aria-label="Karte ${i+1}"><span class="mc-in"><span class="mc-back">?</span><span class="mc-front">${c.t==='p'?pic(c.k):`<b class="fr">${esc(c.o[1])}</b>`}</span></span></button>`).join('')}</div><div id="memArt" class="mem-art"></div>`;
  const els=$$('.mcard');
  const ask=o=>{const right=D.def(o);CUR.memory.ask=right;const box=$('#memArt');
   box.innerHTML=`<div class="ma-q pop">${pic(o[0])}<span>Welcher Artikel? <b>___ ${esc(o[1])}</b></span></div><div class="ma-b">${['le','la','l’'].map(a=>`<button class="mab" data-a="${a}">${A(a)}</button>`).join('')}</div>`;
   $$('.mab',box).forEach(b=>b.onclick=()=>{if(busy)return;busy=true;const ok=b.dataset.a===right;api.hit(ok,2);b.classList.add(ok?'ok':'bad');api.speak(J(right,o[1]));
    if(ok)api.msg(`✓ ${ph(right,o[1])}`,'ok');else{api.mist(J(b.dataset.a,o[1]),J(right,o[1]));$$('.mab',box).find(x=>x.dataset.a===right).classList.add('ok');
     api.msg(`✗ ${D.VOW.test(o[1])?`<b class="vd">${esc(o[1][0])}</b> = Vokal → ${A('l’')}`:`${esc(o[1])} ist ${o[2]==='m'?'männlich':'weiblich'} → ${A(right)}`}: ${ph(right,o[1])}`,'bad');}
    later(ok?700:1600,()=>{busy=false;CUR.memory.ask=null;box.innerHTML='';if(found===set.length){api.bonus(Math.max(0,20-Math.floor(api.secs()/6)));api.done();}});});};
  els.forEach(el=>el.onclick=()=>{if(busy||api.ended()||$('#memArt').innerHTML)return;const i=+el.dataset.i,c=cards[i];if(el.classList.contains('flip')||open.length>=2)return;
   el.classList.add('flip');open.push(i);if(open.length<2)return;
   const [a,b]=open.map(j=>cards[j]);
   if(a.k===b.k){busy=true;later(350,()=>{open.forEach(j=>els[j].classList.add('done'));open=[];found++;api.progress(found/set.length);api.hit(true,1);busy=false;ask(a.o);});}
   else{busy=true;const p=a.t==='p'?a:b,w=a.t==='p'?b:a;api.msg(p.t==='p'&&w.t==='w'?`🖼️ = ${esc(D.DE[p.k]||'')} · „${esc(w.o[1])}“ = ${esc(D.DE[w.k]||'')}`:'Ein <b>Bild</b> und ein <b>Wort</b> umdrehen!','');
    later(1100,()=>{open.forEach(j=>els[j].classList.remove('flip'));open=[];busy=false;});}});}});

/* ---------- 2. Zimmer einräumen ---------- */
reg('zimmer',{lesson:['artikel-unbestimmt','regel'],time:0,go:'▶ Los! (3 Zimmer)',
 how:{vis:`<div class="aset">${[['lit',1,'un lit'],['lampe',1,'une lampe'],['livre',3,'des livres']].map(([k,n,t])=>`<span class="ocard">${pic(k,n)}<span class="oc-t">${V.auto(t)}</span></span>`).join('')}</div>`,
  was:'Räum das Zimmer ein: Zieh jeden Gegenstand auf den <b>Platz mit dem passenden Ausdruck</b> – oder tippe erst den Gegenstand, dann den Platz.',
  schritte:[['👀','Was ist es? Wie viele?'],[A('un')+' / '+A('une'),'Einer: un (m.) · une (f.)'],[A('des')+' …s','Mehrere: des + Nomen mit -s']],
  merk:'il y a + un / une / des · mehrere → des + -s',fallen:[['un livres','des livres','<b>Mehrere</b> → des.'],['une lit','un lit','lit ist <b>männlich</b>.']]},
 run(api){const rooms=[D.ROOMS[0]].concat(shuffle(D.ROOMS.slice(1)).slice(0,2));let ri=0,placed=0;const total=rooms.length*5;
  const draw=()=>{const r=rooms[ri];const items=r.items.map((it,i)=>({i,k:it[0],n:it[1],t:it[2]}));const tray=shuffle(items);let sel=null,left=5;CUR.zimmer={room:r,items};
   api.area().innerHTML=`<p class="g-task">${esc(r.t)} <span class="legend">(${ri+1}/${rooms.length})</span></p><div class="zroom">${items.map(it=>`<div class="zslot" data-i="${it.i}"><span class="zs-pic"></span><span class="zs-t">${V.auto(it.t)}</span></div>`).join('')}</div>
    <div class="ztray">${tray.map(it=>`<button class="zitem" data-i="${it.i}" aria-label="Gegenstand">${pic(it.k,it.n)}</button>`).join('')}</div><p class="legend center">Ziehen – oder erst Gegenstand, dann Platz antippen</p>`;
   const put=(itEl,slot)=>{if(api.ended())return;const it=items[+itEl.dataset.i],z=items[+slot.dataset.i];if(slot.classList.contains('full'))return;
    if(it.i===z.i){api.hit(true,2);slot.classList.add('full','pop');$('.zs-pic',slot).innerHTML=pic(it.k,it.n);itEl.remove();api.speak(it.t);api.msg(`✓ ${V.auto(it.t)}`,'ok');placed++;left--;api.progress(placed/total);
     if(!left){later(500,()=>{api.area().insertAdjacentHTML('beforeend',`<div class="zdone pop"><div>🎉 ${V.auto(r.say)}</div>${H.spk(r.say,'','mini')}<button class="btn green" id="zNext">${ri<rooms.length-1?'Nächstes Zimmer →':'Fertig ✓'}</button></div>`);api.speak(r.say);
      $('#zNext').onclick=()=>{ri++;if(ri<rooms.length)draw();else{api.bonus(Math.max(0,15-Math.floor(api.secs()/8)));api.done();}};});}}
    else{api.hit(false);slot.classList.add('shake');later(400,()=>slot.classList.remove('shake'));itEl.classList.remove('sel');
     const same=it.k===z.k;if(same)api.mist(z.t,it.t);
     api.msg(same?(it.n>1?`✗ Hier sind <b>mehrere</b> → ${V.auto(it.t)} (mit -s)`:`✗ Nur <b>einer / eine</b> → ${V.auto(it.t)}`):`✗ Das ist ${V.auto(it.t)} (${esc(D.DE[it.k]||'')}) – der Platz heißt ${V.auto(z.t)}.`,'bad');}
    sel=null;};
   $$('.zitem').forEach(el=>{el.onclick=()=>{if(el._dragged){el._dragged=false;return;}$$('.zitem').forEach(x=>x.classList.remove('sel'));el.classList.add('sel');sel=el;};
    let sx=0,sy=0,drag=false;el.addEventListener('pointerdown',e=>{drag=true;sx=e.clientX;sy=e.clientY;try{el.setPointerCapture(e.pointerId);}catch(x){}});
    el.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-sx,dy=e.clientY-sy;if(Math.hypot(dx,dy)>8){el.classList.add('drag');el.style.transform=`translate(${dx}px,${dy}px) scale(1.08)`;}
     const t=document.elementFromPoint(e.clientX,e.clientY);$$('.zslot').forEach(s=>s.classList.toggle('hover',!!(t&&s.contains(t))));});
    const up=e=>{if(!drag)return;drag=false;const moved=Math.hypot(e.clientX-sx,e.clientY-sy)>20;el.style.visibility='hidden';const t=document.elementFromPoint(e.clientX,e.clientY);el.style.visibility='';el.style.transform='';el.classList.remove('drag');$$('.zslot').forEach(s=>s.classList.remove('hover'));
     const s=t&&t.closest('.zslot');if(moved){el._dragged=true;if(s)put(el,s);}};
    el.addEventListener('pointerup',up);el.addEventListener('pointercancel',()=>{drag=false;el.style.transform='';el.classList.remove('drag');});});
   $$('.zslot').forEach(s=>s.onclick=()=>{if(sel)put(sel,s);else api.msg('Tippe zuerst einen Gegenstand an 👇','');});};
  draw();api.msg('');}});

/* ---------- 3. Plural-Fabrik ---------- */
reg('fabrik',{lesson:['artikel-bestimmt','plural'],time:60,
 how:{vis:`<div class="fab-demo">${ph('l’','élève')} <span class="fb-ar">⚙️➜</span> ${ph('les','élèves')}</div>`,
  was:'Ein Gegenstand kommt in die Fabrik – du baust den <b>Plural</b>: erst den Artikel, dann das Nomen.',
  schritte:[['<span class="nhrep"><s>'+A('l’')+'</s>'+A('les')+'</span>','<b>les</b> ersetzt le / la / l’ · <b>des</b> ersetzt un / une'],[`livre<b class="vd">s</b>`,'Nomen bekommt ein <b>-s</b>'],['🚫','Nie <i>les l’…</i>']],
  merk:'mehrere → les / des + Nomen mit -s',fallen:[['les l’élèves','les élèves','<b>les</b> ersetzt l’.'],['les élève','les élèves','<b>-s</b> nicht vergessen.']]},
 run(api){let n=0,last=null;
  const next=()=>{if(api.ended())return;let f;do{f=Math.random()<.3?rnd(D.FAB.filter(x=>!x.k)):rnd(D.FAB);}while(f===last);last=f;n++;
   const ind=n%3===0&&f.k;const o=[f.k,f.w,f.g==='mf'?'m':f.g];const sa=ind?D.ind(o):(f.g==='mf'||D.VOW.test(f.w)?'l’':D.def(o));const pa=ind?'des':'les';
   const arts=shuffle(ind?['des',D.ind(o),D.ind(o)==='un'?'une':'un']:['les',D.VOW.test(f.w)?'les l’':(sa==='le'?'la':'le'),sa]);
   const nouns=shuffle([f.pl,f.w].concat(!ind&&D.VOW.test(f.w)?['l’'+f.pl]:[]));const c={f,sa,pa,arts,nouns,step:0,art:null};CUR.fabrik=c;
   const draw=()=>{api.area().innerHTML=`<div class="fab"><div class="fab-in pop">${pic(f.k,1,f.emo)}<span class="fr">${ph(sa,f.w)}</span></div><div class="fab-m"><span class="fm-gear">⚙️</span><span class="fm-slot${c.step===0?' q':''}">${c.art?A(c.art):'?'}</span><span class="fm-slot${c.step===1?' q':''}">${c.noun?'<b>'+esc(c.noun)+'</b>':'?'}</span><span class="fm-gear r">⚙️</span></div><div class="fab-out" id="fabOut"></div></div>
     <p class="g-task">${c.step===0?'1. Welcher Artikel für <b>mehrere</b>?':'2. Welches Nomen?'}</p><div class="fab-ch">${(c.step===0?arts:nouns).map(x=>`<button class="fch" data-v="${esc(x)}">${c.step===0?A(x.split(' ')[0])+(x.includes(' ')?' '+A('l’'):''):esc(x)}</button>`).join('')}</div>`;
    $$('.fch').forEach(b=>b.onclick=()=>{if(c.lock||api.ended())return;const v=b.dataset.v;
     if(c.step===0){if(v===pa){c.art=v;c.step=1;b.classList.add('ok');c.lock=true;later(200,()=>{c.lock=false;draw();});return;}
      api.hit(false);b.classList.add('bad');api.mist(J(v,f.pl),J(pa,f.pl));api.msg(v==='les l’'?`✗ ${A('les')} <b>ersetzt</b> ${A('l’')} – nicht beides: ${ph(pa,f.pl)}`:`✗ Mehrere → ${A(pa)}: ${ph(pa,f.pl)}`,'bad');c.lock=true;later(1500,next);return;}
     const ok=v===f.pl;c.noun=v;if(ok){api.hit(true,2);api.speak(J(pa,f.pl));draw();$('#fabOut').innerHTML=`<div class="fab-res pop">${pic(f.k,3,f.emo)}<span class="fr">${ph(pa,f.pl)}</span></div>`;api.msg('✓ '+ph(pa,f.pl),'ok');c.lock=true;later(900,next);}
     else{api.hit(false);b.classList.add('bad');api.mist(J(pa,v),J(pa,f.pl));api.msg(v.startsWith('l’')?`✗ ${A('l’')} ist schon weg – nur ${ph(pa,f.pl)}`:`✗ Plural-<b class="vd">s</b> nicht vergessen: ${A(pa)} <b>${esc(f.w)}<b class="vd">s</b></b>`,'bad');c.lock=true;later(1500,next);}});};
   draw();api.msg('');};
  next();}});

/* ---------- 4. Satz-Puzzle ---------- */
reg('puzzle',{lesson:['texte','moi-bausteine'],time:90,go:'▶ Los! (90 Sekunden)',
 how:{vis:V.train('Je/p|suis/v|de Berlin./r',{labels:true,ok:true}),was:'Bau den französischen Satz aus den Bausteinen. <b>Achtung:</b> Ein Baustein ist eine <b>Falle</b> – den brauchst du nicht.',
  schritte:[['🇩🇪','Deutschen Satz lesen'],[V.b('Je','p')+' '+V.b('suis','v'),'Wer → Verb → Rest'],['🪤','Falle liegen lassen']],
  merk:'Wer → Verb → Rest · je suis · nous sommes · on est',fallen:[['Les l’élèves/s|sont/v|dans la cour./r','Les élèves/s|sont/v|dans la cour./r','<b>les</b> ersetzt l’.'],['Elles/p|sont/v|ensemble./r','Ils/p|sont/v|ensemble./r','Théo und Jade: ein Junge dabei → <b>ils</b>.']]},
 run(api){const bag=shuffle(D.PUZ);let k=0;
  const next=()=>{if(api.ended())return;const p=bag[k++%bag.length];const parts=p[0].split('|').map(x=>{const m=x.match(/^(.*)\/([a-z])$/);return {t:m[1],r:m[2]};});
   const trapIdx=trapOf(parts,p[1]);const trap={t:p[1],r:parts[Math.max(0,trapIdx)].r,trap:true};
   api.msg('');const chips=shuffle(parts.map((x,i)=>Object.assign({i},x)).concat([Object.assign({i:-1},trap)]));const c={p,parts,chips,pos:0,lock:false,bad:0};CUR.puzzle=c;
   api.area().innerHTML=`<div class="pz-q pop">${p[4]?`<div class="pz-fig">${V.who(p[4])}</div>`:''}<div class="pz-de">🇩🇪 ${esc(p[2])}</div></div><div class="pz-line" id="pzLine">${parts.map(()=>'<span class="pz-slot"></span>').join('')}</div>
    <div class="pz-chips">${chips.map((x,j)=>`<button class="pzc" data-j="${j}">${V.b(esc(x.t),x.r)}</button>`).join('')}</div>`;
   $$('.pzc').forEach(b=>b.onclick=()=>{if(c.lock||api.ended())return;const x=chips[+b.dataset.j];
    if(x.i===c.pos){const sl=$$('.pz-slot')[c.pos];sl.innerHTML=V.b(esc(x.t),x.r);sl.classList.add('in');b.disabled=true;b.classList.add('used');c.pos++;
     if(c.pos===parts.length){const s=parts.map(y=>y.t).join(' ');api.hit(true,c.bad?1:parts.length);api.speak(s);api.msg(V.train(p[0],{ok:true}),'ok');c.lock=true;later(1300,next);}return;}
    b.classList.add('shake');later(400,()=>b.classList.remove('shake'));c.bad++;api.hit(false);
    if(x.trap){const wrong=parts.map((y,i)=>i===trapIdx?x.t:y.t).join(' ');api.mist(wrong,parts.map(y=>y.t).join(' '));api.msg(`🪤 Falle! ${p[3]}`,'bad');b.disabled=true;b.classList.add('used');}
    else{const need=parts[c.pos];api.msg(`✗ Jetzt kommt ${need.r==='v'?'das <b>Verb</b>':need.r==='r'?'der <b>Rest</b>':'<b>Wer?</b>'} – Wer → Verb → Rest.`,'bad');}});};
  next();}});
const PRON=/^(je|tu|il|elle|on|nous|vous|ils|elles)$/i;
const trapOf=(parts,trap)=>{if(PRON.test(trap))return Math.max(0,parts.findIndex(x=>x.r==='p'));if(!/\s/.test(trap)&&!/’/.test(trap))return Math.max(0,parts.findIndex(x=>x.r==='v'));
 const pre=(a,b)=>{a=a.toLowerCase();b=b.toLowerCase();let i=0;while(i<a.length&&a[i]===b[i])i++;return i;};let bi=0,bv=-1;parts.forEach((x,i)=>{const v=pre(x.t,trap);if(v>bv){bv=v;bi=i;}});return bi;};

/* ---------- 5. Stolperstein-Blitz ---------- */
reg('blitz',{lesson:['artikel-bestimmt','fehler'],time:60,
 how:{vis:`<div class="bz-demo"><span class="bz-ok">✓ ${ph('l’','armoire')}</span><span class="bz-bad">✗ <s>la armoire</s></span></div>`,
  was:'Richtig oder falsch? Entscheide <b>blitzschnell</b>. Hier kommen genau die Fallen aus deinen Tests.',
  schritte:[['👀','Ausdruck lesen'],['✓ / ✗','Richtig oder falsch tippen'],['🔥','5 richtig hintereinander = Combo']],
  merk:'Vokal → l’ · mehrere → les + -s · cahier m. · guitare f. · ein Junge dabei → ils',fallen:[['les l’élèves','les élèves','<b>les</b> ersetzt l’.'],['Elles/p|sont/v|ensemble./r','Ils/p|sont/v|ensemble./r','Théo + Jade: ein Junge dabei → <b>ils</b>.']]},
 run(api){let bag=[],last=null;const NM=['Théo','Jade','Yasmine','Léo','Clara'];
  const next=()=>{if(api.ended())return;if(!bag.length)bag=shuffle(D.BLITZ.filter(b=>!b[1]).concat(shuffle(D.BLITZ.filter(b=>b[1])).slice(0,16)));let it=bag.pop();if(it===last&&bag.length)it=bag.pop();last=it;CUR.blitz=it;api.msg('');
   const figs=(it[0].match(/^([A-ZÉ][a-zéè]+) et ([A-ZÉ][a-zéè]+)/)||[]).slice(1).filter(n=>NM.includes(n));
   api.area().innerHTML=`<div class="bz-card pop">${figs.length?`<div class="bz-fig">${V.who(figs)}</div>`:''}<div class="bz-t">${esc(it[0])}</div></div><div class="bz-btns"><button class="bzb ok" data-v="1">✓ richtig</button><button class="bzb no" data-v="0">✗ falsch</button></div>`;
   let lock=false;$$('.bzb').forEach(b=>b.onclick=()=>{if(lock||api.ended())return;lock=true;const said=b.dataset.v==='1';const ok=said===!!it[1];api.hit(ok);b.classList.add(ok?'good':'bad');$('.bz-card').classList.add(ok?'okc':'shake');
    if(ok){api.msg(it[1]?`✓ ${V.auto(it[0].replace(/→/,'·'))}`:`✓ Gut erkannt! Richtig: <b>${esc(it[2])}</b>`,'ok');}
    else if(!it[1]){api.mist(it[0],it[2]);api.msg(`✗ <s>${esc(it[0])}</s> → <b>${esc(it[2])}</b><br><small>${it[3]}</small>`,'bad');}
    else api.msg(`✗ Das war <b>richtig</b>: ${V.auto(it[0].replace(/→/,'·'))} ✓`,'bad');
    if(!/→/.test(it[1]?it[0]:it[2]))api.speak(it[1]?it[0]:it[2]);later(ok?450:1700,next);});};
  next();}});

/* ---------- 6. Hör-Bingo ---------- */
reg('bingo',{lesson:['ecouter','hoergym'],time:0,go:'▶ Los! (Ton an 🔊)',
 how:{vis:`<div class="bg-demo">${['il est','ils sont','le livre','les livres'].map(t=>`<span class="bgc">${V.auto(t)}</span>`).join('')}</div>`,warum:'Viele Wörter klingen fast gleich – genau das übst du hier.',
  was:'Du <b>hörst</b> einen Ausdruck – tippe das passende Feld an. Eine volle Reihe = <b>BINGO</b>!',
  schritte:[['🔊','Gut zuhören (🔁 = nochmal)'],['👆','Feld antippen'],['🎉','Reihe voll = Bingo-Bonus']],
  merk:'le [lə] = eins · les [le] = mehrere · il est = einer · ils sont = mehrere',fallen:[['il est','ils sont','„sont“ = <b>mehrere</b>.'],['le livre','les livres','„les“ = <b>mehrere</b>.']]},
 run(api){const pairs=[],seen=new Set();shuffle(D.BINGO).forEach(p=>{if(pairs.length<5&&p[0].every(t=>!seen.has(t))){pairs.push(p);p[0].forEach(t=>seen.add(t));}});let cells=pairs.slice(0,4).flatMap(p=>p[0].map(t=>({t,why:p[1]}))).concat([{t:rnd(pairs[4][0]),why:pairs[4][1]}]);
  cells=shuffle(cells);const calls=shuffle(cells.map((c,i)=>i));let ci=0,lines=0;const done=new Set();CUR.bingo={cells,calls,ci:()=>ci};
  api.area().innerHTML=`<div class="bg-top"><button class="btn big bg-play" id="bgPlay">🔊 Anhören</button><span class="bg-n" id="bgN">1 / 9</span></div><div class="bgrid">${cells.map((c,i)=>`<button class="bgc" data-i="${i}">${V.auto(c.t)}</button>`).join('')}</div>`;
  const play=()=>api.speak(cells[calls[ci]].t);$('#bgPlay').onclick=play;
  const L=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];let lock=false;
  const step=()=>{ci++;if(ci>=calls.length){later(700,()=>{api.done();});return;}$('#bgN').textContent=(ci+1)+' / 9';later(500,play);};
  $$('.bgc').forEach(b=>b.onclick=()=>{if(lock||api.ended())return;const i=+b.dataset.i;if(done.has(i))return;const want=calls[ci];lock=true;
   if(i===want){api.hit(true,2);b.classList.add('stamp');done.add(i);api.msg('✓ '+V.auto(cells[i].t),'ok');
    const nl=L.filter(l=>l.includes(i)&&l.every(x=>done.has(x))).length;if(nl){lines+=nl;api.bonus(3*nl);api.combo('🎉 BINGO! +'+3*nl);}
    api.progress(done.size/9);later(450,()=>{lock=false;step();});}
   else{api.hit(false);b.classList.add('shake');later(450,()=>b.classList.remove('shake'));const w=cells[want];api.mist(cells[i].t,w.t);
    $$('.bgc')[want].classList.add('stamp','late');done.add(want);api.msg(`✗ Gehört: ${V.auto(w.t)} – nicht ${V.auto(cells[i].t)}<br><small>${esc(w.why)}</small>`,'bad');
    const nl=L.filter(l=>l.includes(want)&&l.every(x=>done.has(x))).length;lines+=nl;api.progress(done.size/9);later(1800,()=>{lock=false;step();});}});
  later(300,play);}});
})();
