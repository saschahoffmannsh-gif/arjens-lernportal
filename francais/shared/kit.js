/* ===== kit.js – gemeinsame Bausteine für alle Französisch-Lektionen =====
   Audio-Schlüssel, HTML-Helfer für Lektionsinhalte und Aufgaben-Konstruktoren. */
(function(W){
'use strict';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const strip=s=>String(s).replace(/<[^>]+>/g,'').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&');
W.esc=esc;W.strip=strip;
/* ---------- Audio: Text → Dateiname (Hash) ---------- */
const ttsText=t=>strip(t).replace(/\[[^\]]*\]/g,'').replace(/\s*\([^)]*\)/g,'').replace(/‿/g,' ').replace(/[«»↗↘→()]/g,'').replace(/\s+[\/·]\s+/g,', ')
 .replace(/’\s+/g,'’').replace(/\bM\. /g,'Monsieur ').replace(/\bMme /g,'Madame ').replace(/B\.D\.(?=\s+[A-ZÀ-Ý«]|\s*$)/g,'BD.').replace(/B\.D\./g,'BD').replace(/ – /g,', ')
 .replace(/…/g,'').replace(/_+/g,'').replace(/\s+([?!.,])/g,'$1').replace(/([?!.]),/g,'$1').replace(/\s+/g,' ').trim();
function fnv(str){let h=0x811c9dc5;for(const b of new TextEncoder().encode(str)){h^=b;h=Math.imul(h,0x01000193)>>>0;}return ('0000000'+h.toString(16)).slice(-8);}
const akey=(t,w)=>fnv((w?w+'|':'')+ttsText(t));
W.ttsText=ttsText;W.akey=akey;
const SPK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 4V5L7 9H3z" fill="currentColor"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>';
W.SPK_ICON=SPK;
/** Lautsprecher-Knopf. t: Text oder Liste von Texten; who: Stimme(n) */
function spk(t,who='',cls='mini',label='Anhören'){
 const ts=[].concat(t).map(x=>ttsText(x)),ws=[].concat(who||'');
 return `<button class="speak${cls?' '+cls:''}" type="button" title="${label}" aria-label="${label}" data-say="${esc(ts.join('||'))}"${ws.some(Boolean)?` data-who="${esc(ts.map((x,i)=>ws[i]||ws[0]||'').join('||'))}"`:''}>${SPK}</button>`;
}
/** Satz-Liste [[wer,text],…] als ein Knopf */
const spkLines=(lines,cls='',label='Alles anhören')=>spk(lines.map(l=>l[1]),lines.map(l=>l[0]),cls,label);
/* ---------- Namen ---------- */
const NAMES={Martel:'M. Martel',Fournier:'Mme Fournier'};
W.NAMES=NAMES;const nm=w=>NAMES[w]||w;
/* ---------- HTML-Helfer ---------- */
const H={};
H.spk=spk;H.spkLines=spkLines;
/** französischer Ausdruck mit Vorlese-Knopf */
H.F=(t,who='')=>`<span class="frs"><span class="fr">${t}</span>${spk(t,who)}</span>`;
/** Nomen mit Genus-Farbe: g = m | f | p */
H.G=(art,noun,g,say=true)=>{const sep=/[’'‿]$/.test(art)?'':' ';const t=art+sep+noun;
 return `<span class="nn g-${g}"><b>${art}</b>${sep}${noun}${say?spk(t,'','nn-spk'):''}</span>`;};
H.gm=(t)=>`<span class="c-m">${t}</span>`;H.gf=(t)=>`<span class="c-f">${t}</span>`;H.gp=(t)=>`<span class="c-p">${t}</span>`;
/** Verb-Tabelle. rows: [pron, stamm, endung, deutsch]; cfg.mute: Index-Liste stummer Endungen; cfg.irr: unregelmäßig (eine Farbe) */
H.conj=(cfg)=>{
 const rows=cfg.rows.map((r,i)=>{const [p,st,en,de]=r;const sep=/[’']$/.test(p)?'':' ';const say=r[4]||(p+sep+st+en);const mute=(cfg.mute||[]).includes(i);
  const form=cfg.irr?`<span class="irr">${st}${en}</span>`:`<span class="st">${st}</span><span class="en${mute?' mute':''}">${en}</span>`;
  return `<tr class="${mute?'same':''}"><td class="pr">${p}</td><td class="fo">${form}</td><td class="dd">${de||''}</td><td class="sp">${spk(say)}</td></tr>`;});
 const all=cfg.rows.map(r=>{const sep=/[’']$/.test(r[0])?'':' ';return r[4]||(r[0]+sep+r[1]+r[2]);});
 const inf=cfg.irr?`<span class="irr">${cfg.v}</span>`:`<span class="st">${cfg.v.slice(0,-2)}</span><span class="en">er</span>`;
 return `<div class="conj" style="${cfg.c?'--c:'+cfg.c:''}"><div class="conj-h"><span class="inf">${inf}</span><span class="de">${cfg.de||''}</span>${spk(all,'','','Alle Formen anhören')}</div>
 <table>${rows.join('')}</table>${cfg.note?`<div class="conj-n">${cfg.note}</div>`:''}</div>`;};
/** Dialog mit Szene. lines: [wer, französisch, deutsch] */
H.dlg=(title,lines,o={})=>{const cast=[...new Set(lines.map(l=>l[0]).filter(w=>W.CHARS[w]))];let side={},n=0;
 const scene=o.bg!==false?`<div class="scene"><div class="bg">${W.BG[o.bg||'cour']}</div><div class="cast">${cast.map(w=>`<div class="actor">${W.CHARS[w]}<span>${nm(w)}</span></div>`).join('')}</div></div>`:'';
 return `<div class="dlg">${scene}<div class="head"><span>💬 ${title}</span>${spkLines(lines,'','Ganzen Dialog anhören')}</div>`+lines.map(([w,fr,de])=>{if(!(w in side))side[w]=n++%2;
  return `<div class="row ${side[w]?'r':''}"><div class="av">${W.CHARS[w]||''}<span>${nm(w)}</span></div><div class="bub"><span class="tx">${fr}${de&&o.de!==false?`<span class="deu">${de}</span>`:''}</span>${spk(fr,w)}</div></div>`;}).join('')+'</div>';};
/** Objekt-Bild, n = Anzahl (Plural) */
H.ob=(k,n=1,cls='')=>{if(n<=1)return `<svg class="obj ${cls}" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">${W.OBJ[k]}</svg>`;
 let g='';for(let i=0;i<n;i++)g+=`<g transform="translate(${4+i*14},${16-i*8}) scale(.62)">${W.OBJ[k]}</g>`;
 return `<svg class="obj ${cls}" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">${g}</svg>`;};
/** Personen-Piktogramme: z. B. 'm', 'f', 'mf', 'ff', 'mmf' */
H.grp=(code)=>{const cs=[...code];const w=cs.length*22+4;
 return `<svg class="grp" viewBox="0 0 ${w} 34" xmlns="http://www.w3.org/2000/svg">`+cs.map((c,i)=>{const col=c==='m'?'#2563eb':'#dc2626';const x=4+i*22;
  return `<circle cx="${x+9}" cy="7" r="6" fill="${col}"/><path d="M${x},34 V22 Q${x},14 ${x+9},14 Q${x+18},14 ${x+18},22 V34Z" fill="${col}"/>`+(c==='f'?`<path d="M${x-1},34 L${x+9},18 L${x+19},34Z" fill="${col}"/>`:'');}).join('')+'</svg>';};
/** Zimmer-/Szenenbild mit anklickbaren Gegenständen. items: [key,x,y,größe,label] */
const ROOMS={};W.ROOMS=ROOMS;
H.room=(id,title,items,o={})=>{ROOMS[id]={title,labels:{}};
 const put=items.map(([k,x,y,s,label,n])=>{ROOMS[id].labels[k]=label;const inner=n>1?Array.from({length:n},(_,i)=>`<g transform="translate(${i*s*0.28},${-i*s*0.1}) scale(${s*0.7/60})">${W.OBJ[k.replace(/\d$/,'')]}</g>`).join(''):`<g transform="scale(${s/60})">${W.OBJ[k.replace(/\d$/,'')]}</g>`;
  return `<g class="ri" data-item="${k}"><title>${strip(label)}</title><g transform="translate(${x},${y})"><rect width="${s*(n>1?1.4:1)}" height="${s}" fill="transparent"/>${inner}</g></g>`;}).join('');
 const svg=`<svg class="room" viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(title)}"><rect width="400" height="168" fill="${o.wall||'#fef3c7'}"/><rect y="168" width="400" height="62" fill="${o.floor||'#e7b57a'}"/><path d="M0,168 H400" stroke="#c08a4f" stroke-width="3"/>`
  +(o.window!==false?`<rect x="${o.wx||168}" y="14" width="66" height="54" rx="3" fill="#bae6fd" stroke="#fff" stroke-width="5"/><path d="M${(o.wx||168)+33},14 V68 M${o.wx||168},41 H${(o.wx||168)+66}" stroke="#fff" stroke-width="3"/>`:'')
  +`<text x="8" y="224" font-family="FredokaApp,sans-serif" font-size="12" fill="#92400e">${esc(title)}</text>${put}</svg>`;
 ROOMS[id].svg=svg;return svg;};
H.merk=(t,h,cls='')=>`<div class="merk ${cls}"><h3>${t}</h3>${h}</div>`;
H.attn=(h,t='Attention! Typische Fehler')=>`<div class="attn"><h3><span class="attn-ic">!</span>${t}</h3>${h}</div>`;
H.tip=(h,ic='💡')=>`<div class="tip"><span class="tip-ic">${ic}</span><div>${h}</div></div>`;
H.hoer=(h,t='Hörtipp')=>`<div class="hoer"><h3>👂 ${t}</h3>${h}</div>`;
H.card=(t,ic,h)=>`<div class="card"><h3><span class="ic">${ic}</span>${t}</h3>${h}</div>`;
H.reveal=(q,a)=>`<details class="reveal"><summary><span>${q}</span><span class="rv-hint">Tippen zum Aufdecken</span></summary><div class="rv-a">${a}</div></details>`;
H.tabs=(items)=>`<div class="tabs"><div class="tabbar" role="tablist">${items.map((it,i)=>`<button type="button" class="tab${i?'':' on'}" data-tab="${i}">${it[0]}</button>`).join('')}</div>${items.map((it,i)=>`<div class="tabpane"${i?' hidden':''}>${it[1]}</div>`).join('')}</div>`;
H.track=(id)=>`<div class="track" data-track="${id}"></div>`;
H.writer=(id)=>`<div class="writer" data-writer="${id}"></div>`;
H.steps=(arr)=>`<ol class="steps">${arr.map(s=>`<li>${s}</li>`).join('')}</ol>`;
/** Aufgaben pro Durchgang (take) und Pflichtaufgaben (must) festlegen.
   takes: {kapitelId:n}; must: {kapitelId:[index,…], test:[index,…]} */
H.setRun=(takes,must={})=>{(W.CHAPTERS||[]).forEach(c=>{c.take=Math.min(c.ex.length,takes[c.id]||4);(must[c.id]||[]).forEach(i=>{c.ex[i].must=true;});});
 (must.test||[]).forEach(i=>{W.TEST_EX[i].must=true;});};
H.TEST_N=8;
/** Aufgaben pro Durchgang einer Lektion (Kapitel + Abschlusstest) und geschätzte Minuten */
H.runInfo=()=>{const n=(W.CHAPTERS||[]).reduce((a,c)=>a+(c.take||4),0)+H.TEST_N;return {n,min:Math.round(n*1.1/5)*5};};
/* ---------- Fehler-Diagnose: erkennt typische Fehler und erklärt sie kindgerecht ---------- */
const DN=s=>strip(String(s)).toLowerCase().replace(/[’`´ʼ]/g,"'").replace(/[«»"“”„?!.,:;–—…()]/g,' ').replace(/'\s+/g,"'").replace(/\s+/g,' ').trim();
const DEACC=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const EF={suis:'je',es:'tu',est:'il / elle / on',sommes:'nous',êtes:'vous',sont:'ils / elles'};
const EHINT={est:' – auch für <b>einen</b> Namen oder eine Sache (Clara est …, le lit est …)',sont:' – auch für <b>mehrere</b> (Clara et Jade sont …, les élèves sont …)',sommes:' – auch für „… et moi“ (Théo et moi, nous sommes …)',êtes:' – „ihr“ oder höflich „Sie“',es:' – wenn du mit <b>einer</b> Person sprichst',suis:' – wenn du von dir sprichst'};
const ETRE_M='je suis · tu es · il / elle / on est · nous sommes · vous êtes · ils / elles sont';
const PRON=['je','tu','il','elle','on','nous','vous','ils','elles'];
const ARTD=['le','la',"l'",'les'],ARTU=['un','une','des'];
function hlDiff(a,b){a=String(a);b=String(b);let p=0;while(p<a.length&&p<b.length&&a[p]===b[p])p++;let s=0;while(s<a.length-p&&s<b.length-p&&a[a.length-1-s]===b[b.length-1-s])s++;
 const mid=b.slice(p,b.length-s);if(!mid)return esc(b);return esc(b.slice(0,p))+'<mark>'+esc(mid)+'</mark>'+esc(b.slice(b.length-s));}
function diagTok(a,b,prev,next){const out=[];const add=(t,m)=>out.push({t,m});
 if(a===b)return out;
 const ENDS={e:'je / il / elle / on',es:'tu',ons:'nous',ez:'vous',ent:'ils / elles'};const ea=a.replace(/^-/,''),eb=b.replace(/^-/,'');
 if(ENDS[ea]&&ENDS[eb]){add(`Die Endung <b>-${ea}</b> gehört zu ${ENDS[ea]}. Hier brauchst du die Endung für <b>${ENDS[eb]}</b>: <b>-${eb}</b>.`,'je -e · tu -es · il / elle / on -e · nous -ons · vous -ez · ils / elles -ent');return out;}
 if((ea==='ont'||ea==='onz')&&ENDS[eb]){add(ea==='ont'?'<b>-ont</b> gibt es nur bei <i>ils sont</i>. Bei Verben auf -er heißt die Endung für ils / elles <b>-ent</b>.':'Die nous-Endung ist <b>-ons</b> – mit s, nicht mit z.','je -e · tu -es · il / elle / on -e · nous -ons · vous -ez · ils / elles -ent');return out;}
 if((a==='l'&&b==='ll')||(a==='ll'&&b==='l')){add(b==='ll'?'Hier ist die Endung <b>stumm</b> (-e, -es, -ent) → appeler bekommt <b>ll</b> (il appe<b>ll</b>e).':'Hier hört man die Endung (-ons, -ez, -er) → nur <b>ein l</b> (nous appe<b>l</b>ons, appe<b>l</b>er).','Endung stumm (-e, -es, -ent) → ll. Endung hörbar (-ons, -ez, -er) → l.');return out;}
 // être
 if(EF[b]&&EF[a]){
  if(prev==='on')add(`Nach <b>on</b> steht immer <b>est</b>. <i>on</i> bedeutet oft „wir“, wird aber wie il / elle behandelt. «${a}» gehört zu ${EF[a]}. So geht es: <span class="fr">On est ensemble.</span> = <span class="fr">Nous sommes ensemble.</span> Beides heißt „Wir sind zusammen.“`,'Nach on steht immer est – auch wenn on „wir“ bedeutet.');
  else if(b==='es'&&a==='est')add('Bei <b>tu</b> heißt es <b>es</b> – ohne t! Das t gibt es nur bei il / elle / on (il est).','tu es – ohne t · il est – mit t.');
  else if(b==='sont'&&a==='est')add(`«est» passt nur zu <b>einer</b> Person oder Sache. Hier sind es <b>mehrere</b>${prev?` (${prev})`:''} → <b>sont</b>.`,'Einer → est · mehrere → sont.');
  else add(`«${a}» gehört zu <b>${EF[a]}</b>. Hier brauchst du die Form für <b>${EF[b]}</b>: <b>${b}</b>${EHINT[b]||''}.`,ETRE_M);
  return out;}
 if(DEACC(a)===DEACC(b)){const ch=[...b].filter((c,i)=>c!==a[i]&&/[éèêëàâçîïôûù]/.test(c));
  add(`Fast richtig – nur der <b>Akzent</b> fehlt oder stimmt nicht: richtig ist <b>${hlDiff(a,b)}</b>. Der Akzent gehört fest zum Wort${ch.length?` (hier: ${[...new Set(ch)].join(', ')})`:''}.`,'Akzente gehören zum Wort – ohne Akzent zählt es in der Arbeit als Fehler.');return out;}
 if(/^appell(ons|ez|er)$/.test(DEACC(a))&&/^appel(ons|ez|er)$/.test(b)){add(`Bei <b>appeler</b> gibt es <b>ll</b> nur, wenn man die Endung <b>nicht hört</b> (j’appelle, tu appelles, il appelle, ils appellent). Bei <b>nous / vous</b> (-ons, -ez) und im Infinitiv <b>appeler</b> hört man die Endung → nur <b>ein l</b>: ${hlDiff(a,b)}.`,'Endung hörbar (-ons, -ez, -er) → ein l. Endung stumm (-e, -es, -ent) → ll.');return out;}
 if(/^appel(e|es|ent)$/.test(DEACC(a))&&/^appell(e|es|ent)$/.test(b)){add(`Hier ist die Endung <b>stumm</b> (-e, -es, -ent). Dann bekommt appeler <b>ll</b>: ${hlDiff(a,b)}.`,'Endung stumm (-e, -es, -ent) → ll. Endung hörbar (-ons, -ez) → ein l.');return out;}
 if(/^t[eé]l[eé]phones./.test(a)&&/^téléphon/.test(b)){add('Der <b>Stamm</b> ist: Infinitiv minus -er → téléphon|er → <b>téléphon-</b>. Daran hängst du nur die Endung (je téléphon<b>e</b>).','Stamm = Infinitiv minus -er.');return out;}
 if(b==="l'"&&(a==='le'||a==='la')){add('Das Nomen fängt mit einem <b>Vokal</b> (a, e, i, o, u) oder stummem h an. Dann wird le / la zu <b>l’</b>: l’armoire, l’ordinateur, l’école.','le / la + Vokal → l’');return out;}
 if(a==="l'"&&(b==='le'||b==='la')){add(`l’ steht nur vor einem Vokal. Hier fängt das Nomen mit einem Konsonanten an → <b>${b}</b>.`,'l’ nur vor a, e, i, o, u (oder stummem h).');return out;}
 if(a==="un'"){add('Bei <b>un</b> gibt es nie einen Apostroph: <b>un ordinateur</b> (man spricht es nur zusammen).','un + Vokal: kein Apostroph!');return out;}
 const g={le:'m',un:'m',la:'f',une:'f'};
 if(g[a]&&g[b]&&g[a]!==g[b]&&(ARTD.includes(a)===ARTD.includes(b))){add(b==='la'||b==='une'?`Das Nomen ist <b>weiblich</b> (f.) → <b>${b}</b>. Im Deutschen ist es manchmal anders – lerne jedes Nomen mit Artikel!`:`Das Nomen ist <b>männlich</b> (m.) → <b>${b}</b>. Im Deutschen ist es manchmal anders – lerne jedes Nomen mit Artikel!`,'Lerne jedes Nomen mit seinem Artikel: le lit, la chaise, un hamac, une table.');return out;}
 if((b==='les'||b==='des')&&(ARTD.includes(a)||ARTU.includes(a))&&a!=='les'&&a!=='des'){add(`Es sind <b>mehrere</b> (Plural – das Nomen hat meist ein -s) → <b>${b}</b>.`,'Plural: les (die) · des (unbestimmt, wird nicht übersetzt).');return out;}
 if((a==='les'||a==='des')&&(ARTD.includes(b)||ARTU.includes(b))&&b!=='les'&&b!=='des'){add(`Hier ist es nur <b>eins</b> (Singular) → <b>${b}</b>.`,'Einzahl: le / la / l’ / un / une · Mehrzahl: les / des');return out;}
 if(ARTU.includes(b)&&ARTD.includes(a)){add(`Hier brauchst du den <b>unbestimmten</b> Artikel (ein / eine): <b>${b}</b>. Nach <i>il y a</i> („es gibt“) steht meistens un / une / des.`,'il y a + un / une / des');return out;}
 if(ARTD.includes(b)&&ARTU.includes(a)){add(`Hier ist eine <b>bestimmte</b> Sache gemeint (der / die / das) → <b>${b}</b>.`,'bestimmt: le, la, l’, les · unbestimmt: un, une, des');return out;}
 if(a==='et'&&b==='est'){add('<b>et</b> heißt „und“. Hier brauchst du <b>est</b> = „ist“ (Form von être).','et = und · est = ist');return out;}
 if(a==='est'&&b==='et'){add('<b>est</b> heißt „ist“. Hier brauchst du <b>et</b> = „und“.','et = und · est = ist');return out;}
 if(PRON.includes(a)&&PRON.includes(b)){add(`Das Pronomen muss zum Verb passen${next?`: zu «${next}» passt nur <b>${b}</b>`:` → <b>${b}</b>`}.`,ETRE_M);return out;}
 if(b===a+'s'&&a.length>2){add(`Plural: Das Nomen bekommt ein <b>-s</b> (${b}). Man hört es nicht, aber man schreibt es!`,'des / les + Nomen mit -s (Ausnahme: des CD, des B.D.)');return out;}
 if(a===b+'s'&&b.length>1){add(b==='cd'||b==='b.d'?'Bei <b>CD</b> und <b>B.D.</b> gibt es kein Plural-s: des CD, des B.D.':`Hier ist es nur <b>eins</b> (Singular) – also ohne -s: <b>${b}</b>.`,'Singular ohne -s, Plural mit -s.');return out;}
 // Endungen der Verben (gleicher Stamm)
 let p=0;while(p<a.length&&p<b.length&&a[p]===b[p])p++;
 if(p>=3){const ea=a.slice(p),eb=b.slice(p);const full=x=>x;void full;
  if(/onz$/.test(a)){add('Die Endung für <b>nous</b> ist <b>-ons</b> – mit <b>s</b>, nicht mit z.','nous → -ons');return out;}
  if(/ont$/.test(a)&&/ent$/.test(b)){add('<b>-ont</b> gibt es nur bei <i>ils sont</i>. Bei den Verben auf -er heißt die Endung für ils / elles <b>-ent</b>. Man hört sie nicht – aber man schreibt sie!','ils / elles → -ent (stumm)');return out;}
  if(/es$/.test(b)&&/ez$/.test(a)){add('Zu <b>tu</b> gehört die Endung <b>-es</b> (tu présent<b>es</b>). <b>-ez</b> gehört nur zu <b>vous</b>.','tu → -es · vous → -ez');return out;}
  if(/ez$/.test(b)&&/es$/.test(a)){add('Zu <b>vous</b> gehört die Endung <b>-ez</b> (vous présent<b>ez</b>). <b>-es</b> gehört zu tu.','tu → -es · vous → -ez');return out;}
  if(/ons$/.test(b)){add('Zu <b>nous</b> gehört die Endung <b>-ons</b>.','nous → -ons');return out;}
  if(/ez$/.test(b)){add('Zu <b>vous</b> gehört die Endung <b>-ez</b>.','vous → -ez');return out;}
  if(/ent$/.test(b)){add('Hier tun <b>mehrere</b> etwas (ils / elles, z. B. Clara et Jade, les élèves) → Endung <b>-ent</b>. Man hört sie nicht, aber man schreibt sie!','ils / elles → -ent');return out;}
  if(/es$/.test(b)&&/e$/.test(a)){add('Bei <b>tu</b> kommt immer ein <b>-s</b> dazu: tu …<b>es</b>.','tu → -es (mit s)');return out;}
  if(/e$/.test(b)&&/(es|ent|ez|ons)$/.test(a)){add('Zu <b>je, il, elle, on</b> (oder <b>einem</b> Namen) gehört die Endung <b>-e</b>.','je / il / elle / on → -e');return out;}
  if(/er$/.test(a)&&!/er$/.test(b)){add('Die Grundform (-er) brauchst du hier nicht. Nimm den Stamm und hänge die passende Endung an.','Stamm + Endung: e, es, e, ons, ez, ent');return out;}
 }
 return out;}
function diagnose(wrong,right,ctx=''){const W=DN(wrong),R=DN(right);if(!W||W===R)return [];
 const res=[];const C=DN(String(ctx).split(/_{2,}|…|\.\.\.|\{\d+\}/)[0]).split(' ').filter(Boolean);
 // Elision je / le / la / me / te → j’ / l’ / m’ / t’
 if(/(^| )(j|l|m|t|s|qu)'/.test(R)&&/(^| )(je|le|la|me|te|se|que) [aeiouéèêh]/.test(W)){res.push({t:'Vor einem <b>Vokal</b> (a, e, i, o, u) oder stummem h fällt das e / a weg und es kommt ein Apostroph: <b>je écoute → j’écoute</b>, <b>le ordinateur → l’ordinateur</b>, <b>je me appelle → je m’appelle</b>.',m:'je / le / la / me + Vokal → j’ / l’ / m’'});}
 const wt=W.split(' '),rt=R.split(' ');
 if(wt.length===rt.length){for(let i=0;i<rt.length;i++){if(wt[i]!==rt[i])res.push(...diagTok(wt[i],rt[i],i>0?rt[i-1]:C[C.length-1]||'',rt[i+1]||''));}}
 else if(wt.length===1&&rt.length===1)res.push(...diagTok(W,R,C[C.length-1]||'',''));
 else if(DEACC(W)===DEACC(R))res.push(...diagTok(W.replace(/ /g,''),R.replace(/ /g,''),'',''));
 const seen=new Set();return res.filter(x=>!seen.has(x.t)&&seen.add(x.t));}
W.diagnose=diagnose;W.hlDiff=hlDiff;W.DN=DN;

H.setIntro=m=>{W.INTRO=m;(W.CHAPTERS||[]).forEach(c=>{const x=m[c.id];if(x){c.intro=x;c.merk=x.merk;c.rule=x.rule||x.was;}});if(m._lesson&&W.LESSON){W.LESSON.explain=m._lesson;W.LESSON.merk=m._lesson.merk;}};
W.H=H;
/* ---------- Aufgaben-Konstruktoren (richtige Option immer zuerst – wird beim Anzeigen gemischt) ---------- */
const X={};
X.mc=(q,o,why,x={})=>Object.assign({type:'mc',q,o,why},x);
X.pick=(q,cards,why,x={})=>Object.assign({type:'pick',q,cards,why},x);
X.gap=(q,text,gaps,why,x={})=>Object.assign({type:'gap',q,text,gaps,why},x);
X.gapw=(q,text,ans,why,x={})=>Object.assign({type:'gapw',q,text,ans,why},x);
X.ord=(q,tok,why,alts=[],x={})=>Object.assign({type:'order',q,tok,why,alts},x);
X.wr=(q,ans,why,x={})=>Object.assign({type:'write',q,ans:[].concat(ans),why},x);
X.mt=(q,pairs,why,x={})=>Object.assign({type:'match',q,pairs,why},x);
X.dl=(q,lines,gaps,why,x={})=>Object.assign({type:'dialog',q,lines,gaps,why},x);
X.clk=(q,room,target,why,x={})=>Object.assign({type:'click',q,room,target,why},x);
X.mark=(q,room,targets,why,x={})=>Object.assign({type:'mark',q,room,targets,why},x);
X.mul=(q,o,why,x={})=>Object.assign({type:'multi',q,o,why},x);
X.seg=(q,opts,rows,why,x={})=>Object.assign({type:'seg',q,opts,rows,why},x);
X.tf=(q,rows,why,x={})=>Object.assign({type:'seg',tf:true,q,opts:['vrai','faux'],rows:rows.map(r=>[r[0],r[1]?'vrai':'faux',r[2]])},{why},x);
X.det=(q,text,why,x={})=>Object.assign({type:'detect',q,text,why},x);
W.X=X;
})(window);
