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
H.TEST_N=10;
/** Aufgaben pro Durchgang einer Lektion (Kapitel + Abschlusstest) und geschätzte Minuten */
H.runInfo=()=>{const n=(W.CHAPTERS||[]).reduce((a,c)=>a+(c.take||4),0)+H.TEST_N;return {n,min:Math.round(n*1.1/5)*5};};
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
