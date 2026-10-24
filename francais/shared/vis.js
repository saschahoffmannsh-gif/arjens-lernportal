/* ===================== BILDLICHE ERKLÄRUNGEN (wiederverwendbare Bausteine) =====================
   Farbcode in allen Lektionen:  Wer? (Subjekt) = blau-türkis · Verb = orange · Rest = grau
   Artikel: le / un = blau (m.) · la / une = rot (f.) · l’ = türkis (Vokal) · les / des = lila (Plural)
   Endungen (Verben auf -er) = orange Lego-Steine, 🔇 stumm / 🔊 hörbar. */
(function(){
'use strict';
const W=window,H=W.H,V={};W.V=V;H.V=V;
const esc=W.esc,strip=W.strip,spk=(t,w,c,l)=>H.spk(t,w,c,l);
const AP=/[’']/;
const PRO=new Set(['je','j’','tu','il','elle','on','nous','vous','ils','elles','c’','moi,','toi,']);
const BE=new Set(['suis','es','est','sommes','êtes','etes','sont']);
const ERST=['regard','écout','ecout','parl','présent','present','téléphon','telephon','appel','appell','aim','ador','jou','travaill','cherch','rentr','dessin','chant','mang','arriv','habit'];
const ERX=new RegExp('^('+ERST.join('|')+')(e|es|ons|ez|ent|er)$','i');
const ART={le:'m',un:'m',la:'f',une:'f','l’':'l',les:'p',des:'p'};
const LBL={s:'Wer?',v:'Verb',r:'Rest',p:'Pronomen',x:''};
const low=t=>String(t).toLowerCase().replace(/'/g,'’').replace(/[.,!?;:«»"“”()]/g,'');
/* ---------- Satz in Wörter mit Rolle zerlegen ---------- */
function tok(s){const out=[];String(strip(s)).replace(/'/g,'’').trim().split(/\s+/).forEach(w=>{const m=w.match(/^(j|l|m|t|s|c|qu|d)’(.+)$/i);
 if(m){out.push({t:m[1]+'’',glue:true});out.push({t:m[2]});}else if(w)out.push({t:w});});return out;}
function roles(ts){const n=ts.length;let vi=-1,vl=1;
 for(let i=0;i<n;i++){const w=low(ts[i].t);
  if(BE.has(w)||ERX.test(w)){vi=i;break;}
  if(w==='y'&&i+1<n&&low(ts[i+1].t)==='a'){vi=i;vl=2;break;}
  if(/^(m|t|s)’$/.test(w)&&i+1<n&&ERX.test(low(ts[i+1].t))){vi=i;vl=2;break;}}
 ts.forEach(t=>{const a=ART[low(t.t)];if(a)t.art=a;});
 if(vi<0){ts.forEach(t=>t.r='r');return ts;}
 // Einleitung (bis zum letzten Komma / Ausruf vor dem Verb) = neutral, danach Subjekt
 let cut=-1;for(let i=0;i<vi;i++)if(/[,!:]$/.test(ts[i].t))cut=i;
 ts.forEach((t,i)=>{t.r=i<=cut?'x':i<vi?'s':i<vi+vl?'v':'r';});
 if(cut>=0&&cut===vi-1){/* kein eigenes Subjekt (z. B. „Théo et moi, nous …“ hat eins) */}
 return ts;}
function parse(s){// mehrere Sätze / „ · “-Reihen getrennt
 return String(strip(s)).replace(/([.!?])\s+(?=[A-ZÀ-Ý«])/g,'$1\u0001').split(/\u0001|\s+·\s+/).filter(Boolean).map(p=>roles(tok(p)));}
V.parse=parse;
function wordHTML(t){let h=esc(t.t);
 if(t.r==='v'){const m=t.t.match(ERX);if(m){const end=t.t.slice(m[1].length).replace(/[.,!?]+$/,''),rest=t.t.slice(m[1].length+end.length);h=`${esc(m[1])}<b class="end">${esc(end)}</b>${esc(rest)}`;}}
 if(t.art)h=`<b class="wa wa-${t.art}">${h}</b>`;
 if(t.mark)h=`<span class="mk-${t.mark}">${h}</span>`;
 return h;}
function blocks(ts,o={}){let h='',cur=null,buf='';const flush=()=>{if(cur!==null)h+=`<span class="wb wb-${cur}"><span class="wt">${buf}</span>${o.labels&&LBL[cur]?`<small>${LBL[cur]}</small>`:''}</span>`;buf='';};
 ts.forEach((t,i)=>{if(t.r!==cur){flush();cur=t.r;}else if(!ts[i-1].glue)buf+=' ';buf+=wordHTML(t);});flush();
 return `<span class="wbs">${h}</span>`;}
V.blocks=blocks;
/** Satz automatisch als farbige Blöcke */
V.auto=(s,o={})=>parse(s).map(ts=>blocks(ts,o)).join(' ');
/** Einzelner Block: V.b('est','v') */
V.b=(t,r,o={})=>`<span class="wb wb-${r}${o.cls?' '+o.cls:''}">${o.icon?`<i class="wb-i">${o.icon}</i>`:''}<span class="wt">${t}</span>${o.lbl!==false&&(o.lbl||o.labels)?`<small>${o.lbl||LBL[r]||''}</small>`:''}</span>`;
/** Artikel-Etikett */
V.art=a=>`<b class="wa wa-${ART[a.toLowerCase().replace(/'/g,'’')]||'m'}">${a}</b>`;
/** Satz-Zug: 'Monsieur Martel/s|est/v|le professeur de français./r'  (o.bad = durchgestrichen, o.ok = Haken) */
V.train=(spec,o={})=>{const parts=spec.split('|').map(p=>{const m=p.match(/^(.*)\/([a-z]+)$/);return m?[m[1],m[2]]:[p,'r'];});
 const say=o.say===false||o.bad?'':spk(o.say||parts.map(p=>p[0]).join(' ').replace(/\s+([.,!?])/g,'$1'),o.who||'','mini');
 return `<div class="train${o.bad?' bad':''}${o.ok?' ok':''}">${o.bad?'<span class="tr-s">✗</span>':o.ok?'<span class="tr-s">✓</span>':''}<span class="tr-w">${parts.map((p,i)=>(i?'<span class="tr-ar">›</span>':'')+V.b(p[0].replace(/\b(le|la|les|un|une|des)\b(?=\s)/g,a=>V.art(a)).replace(/\bl’/g,V.art('l’')),p[1],{labels:o.labels})).join('')}</span>${say}</div>`;};
/** falsch → richtig (zwei Züge) mit kurzem Satz */
V.vs=(bad,good,t='')=>`<div class="vs">${V.train(bad,{bad:true})}${V.train(good,{ok:true})}${t?`<div class="vs-t">${t}</div>`:''}</div>`;
/* ---------- Figuren ---------- */
const NAMES={m:['Théo','Karim','Léo','Noah','Lucas'],f:['Clara','Jade','Yasmine','Samira'],M:['Martel'],F:['Fournier']};
V.fig=(code,o={})=>{const used={m:0,f:0,M:0,F:0};const ns=[...code].map(c=>{if(W.CHARS[c])return c;const l=NAMES[c]||NAMES.m;return l[(used[c]++)%l.length];});
 return `<span class="figs${o.cls?' '+o.cls:''}">${ns.map(n=>`<span class="fg">${(W.CHARS||{})[n]||''}</span>`).join('')}${o.lbl?`<span class="fg-l">${o.lbl}</span>`:''}</span>`;};
V.who=names=>`<span class="figs">${[].concat(names).map(n=>`<span class="fg">${(W.CHARS||{})[n]||''}</span>`).join('')}</span>`;
/** Pronomen-Tafel: Bild → Pronomen */
V.pronouns=(o={})=>{const rows=[['m','il','ein Junge / Mann','est'],['f','elle','ein Mädchen / eine Frau','est'],['mm','ils','mehrere Jungen','sont'],['mf','ils','gemischt – ein Junge reicht!','sont'],['ff','elles','nur Mädchen','sont']];
 return `<div class="ptab">${rows.map(r=>`<div class="pt-c">${V.fig(r[0])}<span class="pt-ar">→</span>${V.b(r[1],'p')}${o.verb!==false?V.b(r[3],'v'):''}<span class="pt-d">${r[2]}</span></div>`).join('')}</div>`;};
/** Ersetzen mit Animation: Nomen raus, Pronomen rein, Rest 🔒 */
V.swap=(o)=>`<div class="swap"><div class="sw-row">${o.fig?`<span class="sw-fig">${V.fig(o.fig)}</span>`:''}<span class="sw-out">${V.b(o.noun,'s')}</span>${V.b(o.verb,'v')}${V.b(o.rest,'r',{cls:'lock'})}</div>
 <div class="sw-mid"><span class="sw-arrow">⬇</span> <b>ersetzen</b>: ${V.b(o.noun,'s',{cls:'gone'})} raus · ${V.b(o.pron,'p')} rein · 🔒 Rest bleibt</div>
 <div class="sw-row"><span class="sw-in">${V.b(o.pron,'p')}</span>${V.b(o.verb2||o.verb,'v',{cls:o.verb2&&o.verb2!==o.verb?'fix':''})}${V.b(o.rest,'r',{cls:'lock'})}${spk([o.pron,o.verb2||o.verb,o.rest].join(' ').replace(/\s+([.,!?])/g,'$1'),'','mini')}</div>${o.de?`<div class="sw-de">${o.de}</div>`:''}</div>`;
/* ---------- être als Personen-Raster ---------- */
V.etreGrid=()=>{const C=[['Karim','je','suis','ich'],['Théo','tu','es','du'],['Léo','il','est','er'],['Clara','elle','est','sie'],[['Théo','Clara'],'nous','sommes','wir'],[['Noah','Jade'],'vous','êtes','ihr / Sie'],[['Théo','Karim'],'ils','sont','sie (m.)'],[['Jade','Yasmine'],'elles','sont','sie (f.)']];
 return `<div class="egrid">${C.map(c=>`<div class="eg-c">${V.who(c[0])}<div class="eg-f">${V.b(c[1],'p')}${V.b(c[2],'v')}${spk(c[1]+' '+c[2],'','mini')}</div><div class="eg-d">${c[3]}</div></div>`).join('')}</div>`;};
/* ---------- Lego-Endungen ---------- */
V.lego=(st,en,o={})=>`<span class="lego"><span class="lg-st">${st}</span><span class="lg-en${o.mute?' mute':''}">${en}</span>${o.ear!==false?`<span class="lg-ear" title="${o.mute?'stumm':'hörbar'}">${o.mute?'🔇':'🔊'}</span>`:''}</span>`;
V.legoGrid=(v,o={})=>{const st=v.slice(0,-2);const P=[['je','e',1],['tu','es',1],['il / elle / on','e',1],['nous','ons',0],['vous','ez',0],['ils / elles','ent',1]];
 return `<div class="lgrid">${P.map(p=>{const pr=p[0]==='je'&&/^[aeiouéèh]/i.test(st)?'j’':p[0];return `<div class="lg-r">${V.b(pr,'p')}${V.lego(st,p[1],{mute:p[2]})}${spk((pr==='j’'?'j’':pr.split(' / ')[0]+' ')+st+p[1],'','mini')}</div>`;}).join('')}</div>${o.legend!==false?'<div class="lg-leg">🔇 = man hört die Endung nicht · 🔊 = man hört sie</div>':''}`;};
V.appeler=()=>`<div class="appel"><div class="ap-c mute"><div class="ap-h">🔇 Endung stumm → <b>ll</b></div>${['j’appe|ll|e','tu appe|ll|es','il appe|ll|e','ils appe|ll|ent'].map(x=>{const [a,b,c]=x.split('|');return `<div class="ap-r">${a}<b class="ll">${b}</b><b class="end">${c}</b>${spk(a+b+c,'','mini')}</div>`;}).join('')}</div>
 <div class="ap-c loud"><div class="ap-h">🔊 Endung hörbar → <b>l</b></div>${['nous appe|l|ons','vous appe|l|ez','appe|l|er'].map(x=>{const [a,b,c]=x.split('|');return `<div class="ap-r">${a}<b class="l1">${b}</b><b class="end">${c}</b>${spk(a+b+c,'','mini')}</div>`;}).join('')}</div></div>`;
/* ---------- Artikel ---------- */
const OBJ_OF={lit:'lit',table:'table',chaise:'chaise',lampe:'lampe',armoire:'armoire','étagère':'etagere',poster:'poster',posters:'poster',photo:'photo',photos:'photo',guitare:'guitare',ordinateur:'ordinateur',globe:'globe',livre:'livre',livres:'livre',cahier:'cahier',cahiers:'cahier','b.d.':'bd','bédé':'bd',cd:'cd',minichaîne:'minichaine',hamac:'hamac',figurine:'figurine',figurines:'figurine',stylo:'stylo',stylos:'stylo',crayon:'crayon',crayons:'crayon',règle:'regle',classeur:'classeur',effaceur:'effaceur',papier:'papier',pierre:'pierre',pierres:'pierre',maison:'maison'};
V.objOf=s=>{for(const w of String(strip(s)).toLowerCase().replace(/[’']/g,' ').split(/[\s.,!?]+/)){if(OBJ_OF[w]&&W.OBJ[OBJ_OF[w]])return {k:OBJ_OF[w],pl:/s$/.test(w)&&w!=='b.d.'||/\b(les|des)\s+(cd|b\.d\.)/i.test(s)};}return null;};
/** Gegenstand mit farbigem Artikel-Etikett */
V.obj=(k,art,noun,o={})=>{const n=o.n||(/^(les|des)$/i.test(art)?3:1);const a=art.replace(/'/g,'’');const sep=/’$/.test(a)?'':' ';
 return `<span class="ocard oc-${ART[a.toLowerCase()]||'m'}">${H.ob(k,n)}<span class="oc-t">${V.art(a)}${sep}${noun}</span>${o.say!==false?spk(a+sep+noun,'','mini'):''}</span>`;};
/** le + Vokal → l’ (Animation) */
V.elision=(art,noun,k)=>`<div class="elis"><span class="el-a">${V.art(art)}</span><span class="el-plus">+</span><span class="el-n"><b class="el-v">${noun[0]}</b>${noun.slice(1)}</span><span class="el-eq">→</span><span class="el-r"><b class="wa wa-l">l<span class="el-drop">${art.slice(1)}</span>’</b>${noun}</span>${k?H.ob(k):''}${spk('l’'+noun,'','mini')}<div class="el-t">Vokal am Anfang (a, e, i, o, u, h) → <b>${art}</b> wird zu <b>l’</b></div></div>`;
/** Artikel-Familie: Bild-Karten */
V.artSet=(items)=>`<div class="aset">${items.map(i=>V.obj(...i)).join('')}</div>`;
/* ---------- Texte: Bausplan ---------- */
V.skel=(cards,o={})=>`<div class="skel">${cards.map((c,i)=>`<div class="sk-c"><span class="sk-n">${i+1}</span><span class="sk-i">${c[0]}</span><span class="sk-h">${c[1]}</span><span class="sk-f fr">${c[2]}</span></div>`).join('<span class="sk-ar">›</span>')}</div>`;
/* ---------- Hinweise / Beispielkarten ---------- */
V.hint=(ic,t,cls='')=>`<div class="vh ${cls}"><span class="vh-i">${ic}</span><div>${t}</div></div>`;
/** Beispielkarte: Bild (Figur / Gegenstand / eigenes Bild) + farbige Satzblöcke + Deutsch + 🔊 */
V.picOf=(fr,who)=>{const o=V.objOf(fr);if(o)return H.ob(o.k,o.pl?3:1);
 const s=low(strip(fr).split(/\s+/)[0]||'');const P={je:who||'Karim','j’':who||'Karim',tu:'Théo',il:'Léo',elle:'Clara',on:['Théo','Clara'],nous:['Théo','Clara'],vous:['Noah','Jade'],ils:['Théo','Karim'],elles:['Jade','Yasmine']};
 if(who&&W.CHARS[who])return V.who(who);
 for(const n of Object.keys(W.CHARS||{}))if(strip(fr).includes(n))return V.who(strip(fr).includes(' et ')?Object.keys(W.CHARS).filter(x=>strip(fr).includes(x)).slice(0,2):n);
 if(P[s])return V.who(P[s]);return '';};
V.ex=(fr,de,who,pic)=>{const p=pic!==undefined?pic:V.picOf(fr,who);return `<div class="exc">${p?`<div class="exc-p">${p}</div>`:''}<div class="exc-b"><div class="exc-fr">${V.auto(fr)}${spk(strip(fr),who||'','mini')}</div>${de?`<div class="exc-de">${de}</div>`:''}</div></div>`;};
/* ---------- Feedback: deine Antwort als Blöcke, falsche rot, Korrektur grün ---------- */
const norm=t=>low(t).normalize('NFC');
function lcs(a,b){const n=a.length,m=b.length,d=Array.from({length:n+1},()=>new Array(m+1).fill(0));
 for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)d[i][j]=a[i]===b[j]?d[i+1][j+1]+1:Math.max(d[i+1][j],d[i][j+1]);
 const ia=new Set(),ib=new Set();let i=0,j=0;while(i<n&&j<m){if(a[i]===b[j]){ia.add(i);ib.add(j);i++;j++;}else if(d[i+1][j]>=d[i][j+1])i++;else j++;}return [ia,ib];}
V.diff=(given,right)=>{const g=roles(tok(given)),r=roles(tok(right));if(g.length<2&&r.length<2)return '';
 const [ia,ib]=lcs(g.map(t=>norm(t.t)),r.map(t=>norm(t.t)));
 // gleiche Wörter an falscher Stelle (Satzbau): als „verschoben“ markieren
 g.forEach((t,i)=>{if(!ia.has(i))t.mark='bad';});r.forEach((t,j)=>{if(!ib.has(j))t.mark='fix';});
 return `<div class="fbvis"><div class="fv-row bad"><span class="fv-l">✗ du</span>${blocks(g)}</div><div class="fv-row ok"><span class="fv-l">✓ so</span>${blocks(r)}</div></div>`;};
/* ---------- DIE feste Erklär-Vorlage (für alle Lektionen und Fächer gleich) ----------
   x = {was, vis, warum, warumVis, schritte:[text | [bild, text]], tab, bsp:[[fr,de,wer,bild?]], merk, fallen:[[falsch,richtig,warum] | text]}
   Reihenfolge immer: 🎯 Worum geht’s? · 🤔 Warum? · 🪜 So geht’s · 👀 Beispiele · 📌 Merksatz · ⚠️ Achtung, Falle! */
const SEC=(ic,t,body,cls='')=>body?`<section class="xs ${cls}"><h4 class="xs-h"><span class="xs-i">${ic}</span>${t}</h4><div class="xs-b">${body}</div></section>`:'';
const isSpec=t=>typeof t==='string'&&/\/[svrpx](\||$)/.test(t);
V.fall=f=>{if(Array.isArray(f)){const [b,g,t]=f;
  const tb=isSpec(b)?V.train(b,{bad:true}):`<div class="train bad"><span class="tr-s">✗</span><span class="tr-w">${V.auto(b)}</span></div>`;
  const tg=isSpec(g)?V.train(g,{ok:true}):`<div class="train ok"><span class="tr-s">✓</span><span class="tr-w">${V.auto(g)}</span>${spk(strip(g),'','mini')}</div>`;
  return `<div class="vs">${tb}${tg}${t?`<div class="vs-t">${t}</div>`:''}</div>`;}
 return V.hint('⚠️',f,'warn');};
V.explain=(x)=>{if(!x)return '';
 const steps=(x.schritte||[]).map((st,i)=>{const [pic,t]=Array.isArray(st)?st:['',st];return `<div class="stepchip"><span class="sc-n">${i+1}</span>${pic?`<span class="sc-p">${pic}</span>`:''}<span class="sc-t">${t}</span></div>`;}).join('');
 const bsp=(x.bsp||[]).slice(0,x.bspMax||4).map(b=>V.ex(b[0],b[1],b[2],b[3])).join('');
 return SEC('🎯','Worum geht’s?',(x.vis?`<div class="vispanel">${x.vis}</div>`:'')+(x.was?`<p class="xs-p">${x.was}</p>`:''),'xs-was')
  +SEC('🤔','Warum?',(x.warumVis?`<div class="vispanel">${x.warumVis}</div>`:'')+(x.warum?`<p class="xs-p">${x.warum}</p>`:''),'xs-warum')
  +SEC('🪜','So geht’s – Schritt für Schritt',steps?`<div class="stepchips">${steps}</div>${x.tab||''}`:(x.tab||''),'xs-steps')
  +SEC('👀','Beispiele <span class="legend">– tippe auf 🔊</span>',bsp?`<div class="excards">${bsp}</div>`:'','xs-bsp')
  +SEC('📌','Merksatz',x.merk?`<div class="merk1">${x.merk}</div>`:'','xs-merk')
  +SEC('⚠️','Achtung, Falle!',(x.fallen||[]).slice(0,x.fallMax||3).map(V.fall).join(''),'xs-fall');};
/* ---------- Erklärungen nachträglich bebildern ---------- */
H.patchIntro=m=>{const I=W.INTRO||{};Object.entries(m).forEach(([id,p])=>{const x=id==='_lesson'?(W.LESSON&&W.LESSON.explain)||I._lesson:I[id];if(!x)return;Object.assign(x,p);
 const c=(W.CHAPTERS||[]).find(c=>c.id===id);if(c){c.merk=x.merk;if(p.rule)c.rule=p.rule;}if(id==='_lesson'&&W.LESSON)W.LESSON.merk=x.merk;});};
})();
