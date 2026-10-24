/* ===================== PROBE-KLASSENARBEIT (wie gedruckt, mit Pausen-Uhr, Punkten und Note) =====================
   Aufbau wie die Probe-Klassenarbeit im Übungspaket / Schulbuch: A Écouter zuerst, dann Vokabeln, Grammatik, Text. */
(function(){
'use strict';
const W=window,HUB=W.HUB,TR=W.TR,V=W.V,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=W.esc,strip=W.strip;
const get=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k)||'null');return v==null?d:v;}catch(e){return d;}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}};
const M=()=>document.getElementById('main');
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const h2=x=>Math.round(x*2)/2;const fmtP=x=>String(h2(x)).replace('.',',');
const hash=s=>{let h=5381;for(const c of String(s))h=((h<<5)+h+c.charCodeAt(0))>>>0;return h.toString(36);};
const DUR=45*60;
/* ---------- Aufgaben-Pools (nur Wortschatz aus Unité 1 – Unité 2 Volet 1, bis „le globe“) ---------- */
const NOUNS=[['der Schrank','l’','armoire','f'],['das Regal','l’','étagère','f'],['der Schulhof','la','cour'],['das Mädchen','la','fille'],['der Junge','le','garçon'],['das Heft','le','cahier'],['die Hängematte','le','hamac'],['der Computer','l’','ordinateur','m'],['das Bett','le','lit'],['der Stuhl','la','chaise'],['das Buch','le','livre'],['der Tisch','la','table'],['die Gitarre','la','guitare'],['das Foto','la','photo'],['das Poster','le','poster'],['die Ecke','le','coin'],['die Musik','la','musique'],['der Globus','le','globe'],['der Stein','la','pierre'],['die Figur','la','figurine'],['die Sammlung','la','collection'],['das Haus','la','maison'],['das Zimmer','la','chambre'],['die Schule','l’','école','f'],['die Klasse','la','classe'],['die Pause','la','récréation'],['der Bleistift','le','crayon'],['der Kugelschreiber','le','stylo'],['das Lineal','la','règle'],['der Ordner','le','classeur'],['der Tintenkiller','l’','effaceur','m'],['der Comic','la','B.D.',null,['bd','b.d','bédé','bede']],['die Erdkunde','la','géo',null,['géographie']],['die Lampe','la','lampe'],['die Mini-Stereoanlage','la','minichaîne']];
const PHRASES=[['Wer ist das?',['C’est qui?','Qui est-ce?']],['Ich weiß es nicht.',['Je ne sais pas.']],['Es gibt überall Poster.',['Il y a des posters partout.']],['Wie geht’s?',['Ça va?']],['Auf Wiedersehen!',['Au revoir!']],['zu Hause',['à la maison']],['Das bin ich.',['C’est moi.']],['Was gibt es?',['Qu’est-ce qu’il y a?']],['Das ist total cool!',['C’est trop cool!']],['Schau mal!',['Regarde!']],['nicht schlecht',['pas mal']],['in der 7. Klasse',['en cinquième']],['auf Französisch',['en français']],['bei mir (zu Hause)',['chez moi']],['Wir sind zusammen.',['Nous sommes ensemble.','On est ensemble.']],['überall',['partout']]];
const ETRE=[['Nous {} en sixième.','sommes'],['Tu {} nouvelle?','es'],['Les surveillants {} dans la cour.','sont'],['Je {} de Berlin.','suis'],['Vous {} les amis de Théo?','êtes'],['Le globe {} dans la chambre.','est'],['Clara et Jade {} dans la classe.','sont'],['Monsieur Martel {} le professeur de français.','est'],['On {} ensemble.','est'],['Théo et moi, nous {} amis.','sommes'],['Elle {} en cinquième.','est'],['Lucas et Clara {} à Strasbourg.','sont'],['Tu {} de Strasbourg?','es'],['Je {} Noah.','suis'],['Madame Fournier {} la professeur de géo.','est'],['Vous {} de Berlin?','êtes'],['Les filles {} dans la cour.','sont'],['Il {} là.','est']];
const ERS=[['Les filles sont dans la cour.','Elles sont dans la cour.'],['Théo et Clara sont dans la classe.','Ils sont dans la classe.'],['Madame Fournier est la professeur de géo.','Elle est la professeur de géo.'],['Le garçon est nouveau.','Il est nouveau.'],['Jade et Yasmine sont en sixième A.','Elles sont en sixième A.'],['Monsieur Martel est de Strasbourg.','Il est de Strasbourg.'],['Karim et Noah sont ensemble.','Ils sont ensemble.'],['La fille est dans la chambre.','Elle est dans la chambre.']];
const BEST=[['guitare','la'],['ordinateur','l’'],['lit','le'],['photos','les'],['hamac','le'],['école','l’'],['armoire','l’'],['étagère','l’'],['cour','la'],['garçon','le'],['fille','la'],['classe','la'],['cahier','le'],['règle','la'],['effaceur','l’'],['CD','les'],['livres','les'],['posters','les'],['chaise','la'],['globe','le'],['élève','l’']];
const UNB=[['armoire','une'],['posters','des'],['globe','un'],['lampe','une'],['CD','des'],['ordinateur','un'],['étagère','une'],['lit','un'],['hamac','un'],['chaise','une'],['photos','des'],['guitare','une'],['table','une'],['figurines','des'],['livres','des'],['minichaîne','une'],['pierres','des'],['poster','un']];
const VERBS=[['Je {} des photos.','regarder','regarde'],['Nous {} un CD.','écouter','écoutons'],['Elles {} français.','parler','parlent'],['Tu {} à Clara?','téléphoner','téléphones'],['Vous {} la classe.','présenter','présentez'],['Jade {} la musique.','écouter','écoute'],['Tu {} Karim?','appeler','appelles'],['Nous {} Madame Fournier.','appeler','appelons'],['Ils {} Jade.','appeler','appellent'],['Vous {} Monsieur Martel?','appeler','appelez'],['Théo et Léo {} la photo.','regarder','regardent'],['On {} ensemble.','parler','parle'],['Vous {} la musique?','écouter','écoutez'],['Je {} à Samira.','téléphoner','téléphone'],['Ils {} la chambre.','présenter','présentent'],['Tu {} les posters?','regarder','regardes'],['Nous {} français.','parler','parlons'],['Clara {} Yasmine.','présenter','présente'],['Tu {} la musique?','écouter','écoutes']];
const PLUR=[['Le garçon est dans la cour.','Les garçons sont dans la cour.','artikel-bestimmt','plural'],['Il y a une B.D. dans l’étagère.','Il y a des B.D. dans l’étagère.','artikel-unbestimmt','regel'],['La fille regarde la photo.','Les filles regardent la photo.','verben-er','schwer'],['Il écoute un CD.','Ils écoutent un CD.','verben-er','mittel'],['Elle est dans la classe.','Elles sont dans la classe.','etre','pronomen'],['Le professeur parle français.','Les professeurs parlent français.','verben-er','schwer'],['Il y a un poster.','Il y a des posters.','artikel-unbestimmt','regel'],['L’élève téléphone à Clara.','Les élèves téléphonent à Clara.','verben-er','schwer']];
const PARTS=[{k:'A',t:'Écouter – Hörverstehen',ic:'🎧',max:8,min:6},{k:'B',t:'Vocabulaire – Vokabeln',ic:'📚',max:12,min:8},{k:'C',t:'Grammaire 1 – être',ic:'🙋',max:8,min:5},{k:'D',t:'Grammaire 2 – Artikel',ic:'🏷️',max:12,min:6},{k:'E',t:'Grammaire 3 – Verben auf -er',ic:'🧩',max:10,min:7},{k:'F',t:'Texte – Text schreiben',ic:'✍️',max:12,min:12}];
const TOTAL=PARTS.reduce((a,p)=>a+p.max,0);
const REP={A:[['ecouter','strategien','Hör-Strategien'],['ecouter','pausenhof','Hörtexte']],B:[['artikel-bestimmt','regel','Artikel + Nomen lernen'],['texte','moi-bausteine','Bausteine (Redemittel)']],C:[['etre','formen','Die Formen von être'],['etre','pronomen','il / elle / ils / elles'],['etre','nachholbedarf','Nachholbedarf 1 (Ersetzen)']],D:[['artikel-bestimmt','regel','le, la, l’, les'],['artikel-bestimmt','plural','Plural'],['artikel-unbestimmt','regel','un, une, des']],E:[['verben-er','bauplan','Stamm + Endung'],['verben-er','heftverben','Die Heft-Verben'],['verben-er','appeler','appeler (ll / l)']],F:[['texte','moi-schreiben','C’est moi! schreiben'],['texte','chambre-schreiben','C’est ma chambre! schreiben']]};
/* zuletzt benutzte Aufgaben meiden */
const used=get('fr_probe_used',[]);
const pick=(arr,n,key)=>{const fresh=shuffle(arr.filter(x=>!used.includes(key(x)))),old=shuffle(arr.filter(x=>used.includes(key(x))));return fresh.concat(old).slice(0,n);};
function rawMax(e){return e.type==='seg'?e.rows.length:e.type==='multi'?e.o.filter(x=>x[1]).length:e.type==='gapw'?Object.keys(e.ans).length:e.type==='gap'?e.gaps.length:e.type==='mark'?e.targets.length:1;}
function genExam(){const E=HUB.E;const X={id:hash(Date.now()+Math.random()),parts:{}};
 // A: ein Hörtext (2×) + ein Diktat-Satz (3×)
 const tracks=['samira','karim','cour','tel'];const lastT=get('fr_probe_track',[]);const tr=shuffle(tracks.filter(t=>!lastT.includes(t)))[0]||shuffle(tracks)[0];set('fr_probe_track',lastT.concat(tr).slice(-3));
 const tA=shuffle(E.ALLEX.filter(e=>e._slug==='ecouter'&&e.au==='T:'+tr&&['mc','seg','multi','gapw'].includes(e.type))).sort((a,b)=>(a.type==='gapw')-(b.type==='gapw'));
 const A1=[];let rm=0;for(const e of tA){if(rm>=6||A1.length>=3)break;A1.push(e);rm+=rawMax(e);}
 const dk=shuffle(E.ALLEX.filter(e=>e._slug==='ecouter'&&/diktat/.test(e.ch)&&e.type==='gapw'))[0];
 X.A={track:tr,tasks:A1,dict:dk};
 X.B={nouns:pick(NOUNS,8,x=>'n'+x[2]),phr:pick(PHRASES,4,x=>'p'+x[0])};
 // genug l’ und Plural dabei
 const bD=pick(BEST,6,x=>'b'+x[0]);if(!bD.some(x=>x[1]==='l’'))bD[5]=shuffle(BEST.filter(x=>x[1]==='l’'))[0];if(!bD.some(x=>x[1]==='les'))bD[4]=shuffle(BEST.filter(x=>x[1]==='les'&&!bD.includes(x)))[0];
 const uD=pick(UNB,6,x=>'u'+x[0]);if(!uD.some(x=>x[1]==='des'))uD[5]=shuffle(UNB.filter(x=>x[1]==='des'))[0];if(!uD.some(x=>x[1]==='une'))uD[4]=shuffle(UNB.filter(x=>x[1]==='une'&&!uD.includes(x)))[0];
 X.C={etre:pick(ETRE,6,x=>'e'+x[0]),ers:pick(ERS,1,x=>'r'+x[0])[0]};
 X.D={best:shuffle(bD),unb:shuffle(uD)};
 const vv=pick(VERBS,6,x=>'v'+x[0]);if(!vv.some(x=>x[1]==='appeler'))vv[5]=shuffle(VERBS.filter(x=>x[1]==='appeler'))[0];
 X.E={verbs:vv,plur:pick(PLUR,2,x=>'l'+x[0])};
 const keys=['n'+X.B.nouns.map(x=>x[2]),...X.B.phr.map(x=>'p'+x[0]),...X.C.etre.map(x=>'e'+x[0]),'r'+X.C.ers[0],...bD.map(x=>'b'+x[0]),...uD.map(x=>'u'+x[0]),...vv.map(x=>'v'+x[0]),...X.E.plur.map(x=>'l'+x[0])];
 set('fr_probe_used',used.concat(keys).slice(-70));
 return X;}
/* ---------- Bewerten ---------- */
const NRM=s=>String(s||'').toLowerCase().replace(/[’'`´ʼ]/g,"'").replace(/[«»"“”„?!.,:;–—]/g,' ').replace(/'\s+/g,"'").replace(/\s+/g,' ').trim();
const NOACC=s=>NRM(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'');
function word(given,right){const g=NRM(given),r=[].concat(right).map(NRM);if(r.includes(g))return 1;if(r.map(x=>x.normalize('NFD').replace(/[\u0300-\u036f]/g,'')).includes(NOACC(given)))return .5;return 0;}
function tokErr(g,r){const a=NRM(g).split(' ').filter(Boolean),b=NRM(r).split(' ').filter(Boolean);const n=a.length,m=b.length,d=Array.from({length:n+1},()=>new Array(m+1).fill(0));
 for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)d[i][j]=a[i]===b[j]?d[i+1][j+1]+1:Math.max(d[i+1][j],d[i][j+1]);return Math.max(n,m)-d[0][0];}
function sentence(g,r){if(!String(g).trim())return 0;if(word(g,r)===1)return 2;if(word(g,r)===.5)return 1.5;const e=tokErr(g,r);return e<=1?1:0;}
function nounScore(given,n){const g=NRM(given).replace(/^l'\s*/,"l' ");const m=g.match(/^(le|la|les|l')\s*(.+)$/);const art=n[1].replace('’',"'");
 const a=m&&m[1]===art?.5:0;const w=m?m[2]:g;const ws=[n[2]].concat(n[4]||[]);const sw=word(w,ws)===1?.5:0;return {pts:a+sw,art:!!a,w:!!sw,acc:!sw&&word(w,ws)===.5};}
/* ---------- Text-Bewertung (Checkliste) ---------- */
const CONTENT={A:[['Begrüßung und Schluss',t=>/\b(bonjour|salut|coucou)\b/i.test(t)&&/(au revoir|salut|à bientôt|a bientot)[^a-z]*$/i.test(t.trim())],['Name',t=>/m['’]?\s?appelle/i.test(t)||/je suis [A-ZÀ-Ý][a-zà-ÿ]+/.test(t)],['Herkunft (je suis de …)',t=>/je suis (de|d['’])/i.test(t)],['Schule / Klasse',t=>/(sixi[eè]me|cinqui[eè]me|classe|[ée]cole|coll[eè]ge|[ée]l[eè]ve)/i.test(t)],['Freund/in oder Lehrer/in',t=>/\b(ami|amie|amis|professeur|surveillant|nous sommes|on est|et moi)\b/i.test(t)],['mindestens 7 Sätze',(t,n)=>n>=7]],
 B:[['Einleitung (Voilà ma chambre …)',t=>/((voil[àa]|c['’]est) ma chambre|dans ma chambre)/i.test(t)],['il y a + mind. 3 Sachen mit un / une / des',t=>/il y a/i.test(t)&&(t.match(/\b(un|une|des)\s+\S+/gi)||[]).length>=3],['Wo? (dans le coin, là …)',t=>/(dans le coin|dans l['’]|dans la |dans le |\blà\b|partout)/i.test(t)],['Was ist super?',t=>/(super|cool|pas mal)/i.test(t)],['Verb: j’écoute / je regarde / … est',t=>/(j['’]\s?[ée]coute|je regarde|je parle|je t[ée]l[ée]phone|\best\b|\bsont\b)/i.test(t)],['mindestens 7 Sätze',(t,n)=>n>=7]]};
const ERRS=[['etre',/\bje (es|est|sont|sommes)\b/gi,'je → suis'],['etre',/\btu (est|suis|sont)\b/gi,'tu → es'],['etre',/\b(il|elle|on) (es|suis|sont|sommes)\b/gi,'il / elle / on → est'],['etre',/\bnous (est|sont|es|somme)\b/gi,'nous → sommes'],['etre',/\bvous (etes|est|sont)\b/gi,'vous → êtes'],['etre',/\b(ils|elles) (est|es|sommes)\b/gi,'ils / elles → sont'],
 ['er',/\btu (regarde|[ée]coute|parle|t[ée]l[ée]phone|pr[ée]sente|appelle)\b/gi,'tu → -es'],['er',/\b(ils|elles) (regarde|[ée]coute|parle|t[ée]l[ée]phone|pr[ée]sente|appelle|regardes|[ée]coutes|parles)\b/gi,'ils / elles → -ent'],['er',/\bnous (regard|[ée]cout|parl|t[ée]l[ée]phon|pr[ée]sent|appel+)(e|es|ent|ez)\b/gi,'nous → -ons'],['er',/\bje (écoute|ecoute|appelle)\b/gi,'je + Vokal → j’'],['er',/\bje (regardes|parles|[ée]coutes)\b/gi,'je → -e'],['er',/\b(nous appellons|vous appellez|j['’]apelle|m['’]apelle)\b/gi,'appeler: ll nur, wenn die Endung stumm ist'],
 ['art',/\b(le|la) (armoire|[ée]tag[eè]re|ordinateur|[ée]cole|ami|amie|effaceur|[ée]l[eè]ve)\b/gi,'Vokal → l’'],['art',/\bun (lampe|chaise|table|guitare|armoire|[ée]tag[eè]re|photo|figurine|minicha[iî]ne|collection|pierre|chambre|maison|classe|r[eè]gle|fille)\b/gi,'weiblich → une'],['art',/\bune (lit|globe|poster|livre|ordinateur|hamac|cahier|stylo|crayon|classeur|cd|gar[cç]on)\b/gi,'männlich → un'],['art',/\bil y a (le|la|les|l['’])\s/gi,'il y a + un / une / des'],
 ['acc',/\b(eleve|ecole|etagere|francais|regle|minichaine|cinquieme|sixieme|telephone|ca va|voila|recreation|garcon)\b/gi,'Akzent fehlt']];
const SPR=[['etre','être richtig (je suis, tu es …)',2],['er','Verb-Endungen richtig (-e, -es, -ons …)',1],['art','Artikel richtig (le / la / l’ / les, un / une / des)',2],['acc','Rechtschreibung & Akzente',1]];
const sents=t=>String(t).split(/[.!?]+/).map(s=>s.trim()).filter(s=>s.split(/\s+/).length>=2).length;
function findErrs(t){const out=[];ERRS.forEach(([c,re,m])=>{const mm=String(t).match(re);if(mm)mm.slice(0,3).forEach(x=>out.push({c,x,m}));});return out;}
/* ---------- Zustand ---------- */
let PR=null;let tick=null;
function elapsed(){if(!PR)return 0;return PR.acc+(PR.run?(Date.now()-PR.since)/1000:0);}
function fmtT(s){s=Math.max(0,Math.round(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');}
function stopTick(){if(tick){clearInterval(tick);tick=null;}}
/* ---------- Deckblatt ---------- */
HUB.views.probe=function(){stopTick();const h=$('#hubTitle');if(h)h.textContent='Probe-Klassenarbeit';
 const prev=TR.probes().slice(-3).reverse();
 M().innerHTML=`<div class="crumb"><a class="btn ghost small" href="../">← Übersicht</a><span class="crumb-n">Probe-Klassenarbeit</span></div>
 <div class="paper cover"><div class="pp-head"><div><b>1<sup>er</sup> contrôle de français</b><br><span class="legend">Probe-Klassenarbeit · Klasse 6</span></div><div class="pp-name">Name: <u>Arjen</u><br>Zeit: 45 Min.</div></div>
 <ol class="pp-parts">${PARTS.map(p=>`<li><span class="pp-ic">${p.ic}</span><b>${p.k}</b> ${p.t}<span class="pp-pts">${p.max} P.</span></li>`).join('')}</ol>
 <div class="pp-sum">Gesamt: <b>${TOTAL} Punkte</b> · ca. 40–45 Minuten</div>
 ${V.hint('⏸️','Die Uhr läuft – du kannst aber <b>pausieren</b>.')}${V.hint('🎧','Hörtext: <b>2× hören</b>, Diktat: <b>3×</b> – wie in der Arbeit.')}${V.hint('✍️','Akzente zählen! Ohne Akzent gibt es nur einen halben Punkt.')}${V.hint('🎲','Jedes Mal <b>neue Aufgaben</b>.')}
 <div class="toolbar center"><button class="btn big red" id="pStart">📝 Probe-Arbeit beginnen</button></div></div>
 ${prev.length?`<div class="card"><h3>Deine letzten Probe-Arbeiten</h3><table class="rp"><tr><th>Datum</th><th>Punkte</th><th>Note</th></tr>${prev.map(p=>`<tr><td>${new Date(p.ts).toLocaleDateString('de-DE')}</td><td>${fmtP(p.total)} / ${p.max}</td><td><b>${p.grade}</b></td></tr>`).join('')}</table></div>`:''}
 ${HUB.howBox('So läuft die Probe-Arbeit',{vis:`<div class="mplan">${PARTS.map(p=>`<div class="mp-c"><span>${p.ic}</span><b>${p.k}</b><small>${p.max} P.</small></div>`).join('')}</div>`,was:'Eine Klassenarbeit zum Üben – Aufbau, Zeit und Punkte wie in echt.',warum:'Wer die Arbeit schon einmal „geschrieben“ hat, ist am Freitag ruhiger.',
  schritte:[['👀','Erst alles kurz <b>durchlesen</b>'],['🎧','<b>Teil A</b> zuerst: Hörtext 2×, Diktat 3×'],['✍️','dann B–F schreiben, zum Schluss den <b>Text</b>'],['✅','<b>Abgeben</b> → Text selbst prüfen → Punkte + Note']],
  merk:'Akzente und Artikel immer mitschreiben!',fallen:[['l’armoire',"l'armoire",'Apostroph darf auch \' sein.'],'Nicht hängen bleiben: Erst was du kannst, dann den Rest.']})}`;
 $('#pStart').onclick=()=>{PR={X:genExam(),acc:0,since:Date.now(),run:true,pauses:0,ans:{},t0:Date.now()};HUB.E.go('probeRun');};};
/* ---------- Arbeitsblatt ---------- */
const inp=(k,w,ph)=>`<input class="xin" data-k="${k}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" style="width:${w||7}em" placeholder="${ph||''}" aria-label="Antwort">`;
const head=(p,sub)=>`<div class="pp-part"><h2><span class="pp-k">${p.k}</span>${p.ic} ${p.t}</h2><span class="pp-box" data-part="${p.k}">___ / ${p.max} P.</span></div>${sub?`<p class="pp-sub">${sub}</p>`:''}`;
HUB.views.probeRun=function(){if(!PR||!PR.X){HUB.E.go('probe');return;}const X=PR.X,E=HUB.E;const P=Object.fromEntries(PARTS.map(p=>[p.k,p]));
 const a=E.audioOf('T:'+X.A.track);
 let h=`<div class="ptimer" id="pTimer"><span class="pt-ic">⏱️</span><b id="pT">${fmtT(DUR-elapsed())}</b><span class="legend" id="pTs">Rest</span><button class="btn small ghost" id="pPause">⏸ Pause</button><button class="btn small red" id="pSubmit">Abgeben</button></div>
 <div class="paper" id="paper"><div class="pp-head"><div><b>1<sup>er</sup> contrôle de français</b><br><span class="legend">Probe · Unité 1 – Unité 2 Volet 1</span></div><div class="pp-name">Name: <u>Arjen</u><br>Gesamt: ___ / ${TOTAL}</div></div>`;
 // A
 h+=head(P.A,'1) Lies zuerst die Aufgaben. Dann hörst du den Text <b>2×</b>.')+`<div class="xplay-w"><button class="btn xplay" data-play="A1" data-max="2">▶ Hörtext «${esc(a.title||'')}» <span class="xp-n">(noch 2×)</span></button></div>`;
 X.A.tasks.forEach((e,i)=>{h+=`<div class="pp-task" data-a="${i}"><div class="pp-q"><b>${i+1}.</b> ${e.q}</div><div class="pp-body" id="pa${i}"></div></div>`;});
 if(X.A.dict){h+=`<p class="pp-sub">2) Diktat: Hör zu (<b>3×</b>) und ergänze.</p><div class="xplay-w"><button class="btn xplay" data-play="A2" data-max="3">▶ Diktat <span class="xp-n">(noch 3×)</span></button></div><div class="pp-task"><div class="pp-body" id="paD"></div></div>`;}
 // B
 h+=head(P.B,'a) Übersetze <b>mit Artikel</b> (½ P. Artikel + ½ P. Wort).')+`<ol class="pp-list">${X.B.nouns.map((n,i)=>`<li><span class="pq">${n[0]}</span>${inp('B'+i,9,'le / la / l’ …')}</li>`).join('')}</ol>
 <p class="pp-sub">b) Wie sagt man das auf Französisch? (je 1 P.)</p><ol class="pp-list" start="9">${X.B.phr.map((p,i)=>`<li><span class="pq">${p[0]}</span>${inp('Bp'+i,13)}</li>`).join('')}</ol>`;
 // C
 h+=head(P.C,'a) Setze die richtige Form von <b>être</b> ein. (je 1 P.)')+`<ol class="pp-list">${X.C.etre.map((s,i)=>`<li class="fr">${s[0].replace('{}',inp('C'+i,5.5))}</li>`).join('')}</ol>
 <p class="pp-sub">b) Ersetze die Person durch ein <b>Pronomen</b> (il, elle, ils, elles). Schreibe den ganzen Satz. (2 P.)</p><div class="pp-line"><span class="fr pq">«${X.C.ers[0]}»</span>${inp('Cr',16)}</div>`;
 // D
 const chips=(k,opts)=>`<span class="xchips" data-k="${k}">${opts.map(o=>`<button type="button" class="xchip" data-v="${o}">${o}</button>`).join('')}</span>`;
 h+=head(P.D,'a) <b>le, la, l’</b> oder <b>les</b>? Tippe an. (je 1 P.)')+`<ol class="pp-list ch">${X.D.best.map((n,i)=>`<li>${chips('Db'+i,['le','la','l’','les'])}<span class="fr pn">${n[0]}</span></li>`).join('')}</ol>
 <p class="pp-sub">b) Dans ma chambre, il y a … <b>un, une</b> oder <b>des</b>? (je 1 P.)</p><ol class="pp-list ch" start="7">${X.D.unb.map((n,i)=>`<li>${chips('Du'+i,['un','une','des'])}<span class="fr pn">${n[0]}</span></li>`).join('')}</ol>`;
 // E
 h+=head(P.E,'a) Setze das Verb in der richtigen Form ein. (je 1 P.)')+`<ol class="pp-list">${X.E.verbs.map((v,i)=>`<li class="fr">${v[0].replace('{}',inp('E'+i,7.5))} <span class="pinf">(${v[1]})</span></li>`).join('')}</ol>
 <p class="pp-sub">b) Schreibe den Satz im <b>Plural</b>. (je 2 P.)</p><ol class="pp-list" start="7">${X.E.plur.map((p,i)=>`<li><span class="fr pq">${p[0]}</span>${inp('Ep'+i,16)}</li>`).join('')}</ol>`;
 // F
 h+=head(P.F,'Wähle <b>A</b> oder <b>B</b> und schreibe mindestens <b>7 Sätze</b>. (Inhalt 6 P. · Sprache 6 P.)')+`<div class="ftask"><button type="button" class="fopt" data-f="A"><b>A</b> · Je me présente: <i>C’est moi!</i><small>Name, Herkunft, Schule/Klasse, Freund/in oder Lehrer/in, was du zu Hause machst.</small></button>
 <button type="button" class="fopt" data-f="B"><b>B</b> · <i>C’est ma chambre!</i><small>Was gibt es in deinem Zimmer? Wo ist was? Was ist super?</small></button></div>
 <textarea class="wr-ta pp-ta" id="pText" rows="9" spellcheck="false" autocapitalize="sentences" placeholder="Erst A oder B wählen, dann hier schreiben …"></textarea><div class="legend" id="pTn">0 Sätze</div>
 <div class="acc pacc">${['é','è','ê','à','ç','’'].map(c=>`<button type="button" data-c="${c}">${c}</button>`).join('')}</div></div>
 <div class="pause-ov" id="pOv" hidden><div><div class="po-ic">⏸️</div><b>Pause</b><p class="legend">Die Uhr steht. Die Aufgaben sind versteckt.</p><button class="btn big green" id="pResume">▶ Weiter</button></div></div>
 <div class="toolbar center"><button class="btn big red" id="pSubmit2">✅ Abgeben</button></div>`;
 M().innerHTML=h;
 // Hör-Aufgaben mit der Engine darstellen
 PR.R=X.A.tasks.map((e,i)=>E.RENDER[e.type](e,$('#pa'+i)));
 if(X.A.dict)PR.RD=E.RENDER.gapw(X.A.dict,$('#paD'));
 $$('.pp-body .player,.pp-body .sol-say').forEach(x=>x.remove());
 // Abspielen mit Begrenzung
 PR.plays=PR.plays||{};
 $$('.xplay').forEach(b=>{const k=b.dataset.play,mx=+b.dataset.max;const upd=()=>{const left=mx-(PR.plays[k]||0);b.querySelector('.xp-n').textContent=left>0?`(noch ${left}×)`:'(fertig)';b.disabled=left<=0&&b!==PR.playing;};upd();
  b.onclick=()=>{const left=mx-(PR.plays[k]||0);if(b.classList.contains('playing')){E.stopAudio();return;}if(left<=0){E.toast('Schon '+mx+'× gehört – wie in der Arbeit.');return;}
   const au=k==='A1'?a:E.audioOf(X.A.dict.au);PR.plays[k]=(PR.plays[k]||0)+1;upd();E.speak(au.lines.map(l=>W.ttsText(l[1])),b,au.lines.map(l=>l[0]||''));};});
 // Eingaben merken
 $$('.xin').forEach(i=>{if(PR.ans[i.dataset.k])i.value=PR.ans[i.dataset.k];i.addEventListener('input',()=>{PR.ans[i.dataset.k]=i.value;});i.addEventListener('focus',()=>{PR.lastI=i;});});
 $$('.xchips').forEach(g=>{const k=g.dataset.k;$$('.xchip',g).forEach(b=>{if(PR.ans[k]===b.dataset.v)b.classList.add('sel');b.onclick=()=>{$$('.xchip',g).forEach(x=>x.classList.remove('sel'));b.classList.add('sel');PR.ans[k]=b.dataset.v;};});});
 const ta=$('#pText');ta.value=PR.ans.text||'';const tn=()=>{$('#pTn').textContent=sents(ta.value)+' Sätze';PR.ans.text=ta.value;};ta.addEventListener('input',tn);tn();ta.addEventListener('focus',()=>{PR.lastI=ta;});
 $$('.fopt').forEach(b=>{if(PR.ans.f===b.dataset.f)b.classList.add('sel');b.onclick=()=>{$$('.fopt').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');PR.ans.f=b.dataset.f;ta.placeholder=b.dataset.f==='A'?'Bonjour! Je m’appelle …':'Voilà ma chambre! Dans ma chambre, il y a …';};});
 $$('.pacc button,.paper .acc button').forEach(b=>{if(b.closest('.pp-body'))return;b.onclick=()=>{const i=PR.lastI||ta;const s=i.selectionStart??i.value.length,t=i.selectionEnd??s;i.value=i.value.slice(0,s)+b.dataset.c+i.value.slice(t);i.focus();try{i.setSelectionRange(s+1,s+1);}catch(x){}i.dispatchEvent(new Event('input'));};});
 // Uhr
 const upT=()=>{const left=DUR-elapsed();const t=$('#pT');if(!t){stopTick();return;}t.textContent=fmtT(Math.abs(left));$('#pTs').textContent=left>=0?'Rest':'drüber';$('#pTimer').classList.toggle('over',left<0);$('#pTimer').classList.toggle('low',left>=0&&left<300);};
 stopTick();tick=setInterval(upT,1000);upT();
 const pause=on=>{if(on&&PR.run){PR.acc+=(Date.now()-PR.since)/1000;PR.run=false;PR.pauses++;E.stopAudio();}else if(!on&&!PR.run){PR.since=Date.now();PR.run=true;}$('#pOv').hidden=!on;$('#paper').classList.toggle('hidden',on);$('#pPause').textContent=on?'▶ Weiter':'⏸ Pause';upT();};
 $('#pPause').onclick=()=>pause(PR.run);$('#pResume').onclick=()=>pause(false);
 const sub=()=>{const open=$$('.xin').filter(i=>!i.value.trim()).length+$$('.xchips').filter(g=>!g.querySelector('.sel')).length;
  if(open&&!confirm(`Noch ${open} Lücken offen. Trotzdem abgeben?`))return;if(!PR.ans.f||sents(ta.value)<1){if(!confirm('Dein Text (Teil F) fehlt noch. Trotzdem abgeben?'))return;}
  if(PR.run){PR.acc+=(Date.now()-PR.since)/1000;PR.run=false;}stopTick();E.stopAudio();grade1();HUB.E.go('probeText');};
 $('#pSubmit').onclick=sub;$('#pSubmit2').onclick=sub;};
/* ---------- Auswerten (A–E automatisch) ---------- */
function grade1(){const X=PR.X,E=HUB.E,A=PR.ans;const G={};const wrong=[];
 const W2=(part,q,given,right,ref)=>{wrong.push({part,q,given:String(given||'–'),right,ref});};
 // A
 let ra=0,rm=0;X.A.tasks.forEach((e,i)=>{const r=PR.R[i].check();const mx=rawMax(e);rm+=mx;if(r){ra+=r.pts;if(!r.ok)W2('A',strip(e.q),strip(r.given||''),strip(r.sol||''),['ecouter',e.ch.split(':')[1]]);}else W2('A',strip(e.q),'nicht bearbeitet','',['ecouter',e.ch.split(':')[1]]);});
 let a1=rm?ra/rm*6:0,a2=0;if(X.A.dict){const r=PR.RD.check();const mx=rawMax(X.A.dict);if(r){a2=r.pts/mx*2;if(!r.ok)W2('A','Diktat',strip(r.given),strip(r.sol),['ecouter','diktat']);}else W2('A','Diktat','nicht bearbeitet','',['ecouter','diktat']);}else a1=rm?ra/rm*8:0;
 G.A=h2(a1+a2);
 // B
 let b=0;X.B.nouns.forEach((n,i)=>{const s=nounScore(A['B'+i]||'',n);b+=s.pts;const right=n[1]+(n[1]==='l’'?'':' ')+n[2];if(s.pts<1)W2('B',n[0],A['B'+i],right,['artikel-bestimmt','regel']);});
 X.B.phr.forEach((p,i)=>{const s=word(A['Bp'+i]||'',p[1]);b+=s;if(s<1)W2('B',p[0],A['Bp'+i],p[1][0],['texte','moi-bausteine']);});
 G.B=h2(b);
 // C
 let c=0;X.C.etre.forEach((s,i)=>{const v=word(A['C'+i]||'',s[1]);c+=v;if(v<1)W2('C',s[0].replace('{}','___'),A['C'+i],s[0].replace('{}',s[1]),['etre','formen']);});
 const cr=sentence(A.Cr||'',X.C.ers[1]);const pr=NRM(A.Cr||'').split(' ')[0]===NRM(X.C.ers[1]).split(' ')[0];const crs=cr===2?2:cr===1.5?1.5:pr?1:0;c+=crs;
 if(crs<2)W2('C','Ersetze: «'+X.C.ers[0]+'»',A.Cr,X.C.ers[1],['etre','nachholbedarf']);
 G.C=h2(c);
 // D
 let d=0;X.D.best.forEach((n,i)=>{const ok=A['Db'+i]===n[1];if(ok)d++;else W2('D','… '+n[0],A['Db'+i],n[1]+(n[1]==='l’'?'':' ')+n[0],['artikel-bestimmt',/s$|^CD$/.test(n[0])?'plural':'regel']);});
 X.D.unb.forEach((n,i)=>{const ok=A['Du'+i]===n[1];if(ok)d++;else W2('D','il y a … '+n[0],A['Du'+i],n[1]+' '+n[0],['artikel-unbestimmt','regel']);});
 G.D=d;
 // E
 let ee=0;X.E.verbs.forEach((v,i)=>{const s=word(A['E'+i]||'',v[2]);ee+=s;if(s<1)W2('E',v[0].replace('{}','___')+' ('+v[1]+')',A['E'+i],v[0].replace('{}',v[2]),['verben-er',v[1]==='appeler'?'appeler':'heftverben']);});
 X.E.plur.forEach((p,i)=>{const s=sentence(A['Ep'+i]||'',p[1]);ee+=s;if(s<2)W2('E','Plural: '+p[0],A['Ep'+i],p[1],[p[2],p[3]]);});
 G.E=h2(ee);
 PR.G=G;PR.wrong=wrong;}
/* ---------- Text selbst prüfen ---------- */
HUB.views.probeText=function(){if(!PR||!PR.G){HUB.E.go('probe');return;}const t=PR.ans.text||'',f=PR.ans.f||'A',n=sents(t);const errs=findErrs(t);
 const C=CONTENT[f].map(([l,fn])=>[l,!!fn(t,n)]);const sp=SPR.map(([c,l,mx])=>{const k=errs.filter(e=>e.c===c).length;return [c,l,mx,Math.max(0,mx-k)];});
 PR.F={f,n,words:t.trim()?t.trim().split(/\s+/).length:0,C:C.map(x=>x[1]),S:sp.map(x=>x[3]),errs};
 const W=W2=>W2;void W;
 const sample=(W2=>W2&&W2.sample?W2.sample.join(' '):'')((window.HUB_WRITERS||{})[f==='A'?'moi':'chambre']);
 M().innerHTML=`<div class="paper"><div class="pp-part"><h2><span class="pp-k">F</span>✍️ Deinen Text selbst bewerten</h2></div>
 <p class="pp-sub">Wie bei der Lehrerin: Hake ehrlich ab. Vorschläge sind schon gesetzt.</p>
 <div class="ptext">${t.trim()?esc(t).replace(/\n/g,'<br>'):'<i>(kein Text)</i>'}</div><div class="legend">${n} Sätze · ${PR.F.words} Wörter · Aufgabe ${f}</div>
 ${errs.length?`<div class="perrs"><b>🔍 Mögliche Fehler gefunden:</b>${errs.map(e=>`<div class="vs-t"><s>${esc(e.x)}</s> → ${e.m}</div>`).join('')}</div>`:'<div class="vh"><span class="vh-i">🔍</span><div>Keine typischen Fehler gefunden – prüf trotzdem selbst!</div></div>'}
 <h3>Inhalt (6 P.)</h3><div class="rubric">${C.map((c,i)=>`<label class="rb"><input type="checkbox" data-c="${i}" ${c[1]?'checked':''}><span>${c[0]}</span><b>1 P.</b></label>`).join('')}</div>
 <h3>Sprache (6 P.)</h3><div class="rubric">${sp.map((s,i)=>`<div class="rb rbs"><span>${s[1]}</span><span class="segp" data-s="${i}">${Array.from({length:s[2]+1},(_,k)=>`<button type="button" class="xchip${k===s[3]?' sel':''}" data-v="${k}">${k}</button>`).join('')}</span></div>`).join('')}</div>
 ${n<4?'<p class="legend">Weniger als 4 Sätze: Für Sprache gibt es höchstens 3 Punkte.</p>':''}
 ${sample?`<details class="reveal sample"><summary><span>👀 Mustertext zum Vergleichen</span></summary><div class="rv-a fr">${sample}</div></details>`:''}
 <div class="toolbar center"><button class="btn big green" id="pFin">📊 Ergebnis & Note anzeigen</button></div></div>`;
 $$('.rubric input').forEach(i=>i.onchange=()=>{PR.F.C[+i.dataset.c]=i.checked;});
 $$('.segp').forEach(g=>$$('.xchip',g).forEach(b=>b.onclick=()=>{$$('.xchip',g).forEach(x=>x.classList.remove('sel'));b.classList.add('sel');PR.F.S[+g.dataset.s]=+b.dataset.v;}));
 $('#pFin').onclick=()=>{const inh=PR.F.C.filter(Boolean).length;let spr=PR.F.S.reduce((a,b)=>a+b,0);if(PR.F.n<4)spr=Math.min(spr,3);if(!PR.F.n)spr=0;PR.G.F=PR.F.n?inh+spr:0;PR.F.inh=inh;PR.F.spr=spr;finish();HUB.E.go('probeResult');};};
function finish(){if(PR.logged)return;PR.logged=1;const total=PARTS.reduce((a,p)=>a+(PR.G[p.k]||0),0);const pct=Math.floor(total/TOTAL*1000)/10;PR.total=total;PR.pct=pct;PR.grade=TR.grade(total/TOTAL*100);
 TR.probeEnd({parts:Object.fromEntries(PARTS.map(p=>[p.k,{pts:PR.G[p.k]||0,max:p.max}])),total,max:TOTAL,pct,grade:PR.grade,ms:Math.round(PR.acc*1000),overtime:PR.acc>DUR,pauses:PR.pauses,track:PR.X.A.track,
  text:{f:PR.F.f,sentences:PR.F.n,words:PR.F.words,inhalt:PR.F.inh,sprache:PR.F.spr,errs:PR.F.errs.map(e=>e.m+': '+e.x).slice(0,12)},
  wrong:PR.wrong.slice(0,40).map(w=>({part:w.part,q:TR.clip(w.q,90),given:TR.clip(w.given,80),correct:TR.clip(w.right,90)}))});}
/* ---------- Ergebnis ---------- */
HUB.views.probeResult=function(){if(!PR||PR.total==null){HUB.E.go('probe');return;}const g=PR.grade;
 const rows=PARTS.map(p=>{const v=PR.G[p.k]||0,q=v/p.max;return `<tr><td>${p.ic} <b>${p.k}</b> ${p.t.split(' – ')[1]||p.t}</td><td class="num">${fmtP(v)} / ${p.max}</td><td><span class="pbarx"><i style="width:${Math.round(q*100)}%;background:${q>=.8?'#16a34a':q>=.6?'#f59e0b':'#dc2626'}"></i></span></td></tr>`;}).join('');
 const c2=x=>Math.ceil(x*2-1e-9)/2;const scale=TR.SCALE.map(([p,gr],i)=>{const lo=c2(TOTAL*p/100);const hi=i?c2(TOTAL*TR.SCALE[i-1][0]/100)-.5:TOTAL;return `<td class="${gr===g?'on':''}"><b>${gr}</b><br>${fmtP(lo)}–${fmtP(hi)}</td>`;}).join('');
 const weak=PARTS.filter(p=>(PR.G[p.k]||0)/p.max<.75||PR.wrong.some(w=>w.part===p.k));
 const LM={};(window.LESSONS||[]).forEach(m=>LM[m.slug]=m);
 const link=(s,ch,t)=>`<a class="btn small" href="../${s}/#k=${ch}">${LM[s]?LM[s].icon:''} ${t}</a>`;
 const byPart=k=>PR.wrong.filter(w=>w.part===k);
 const dg=w=>{if(!w.right||!w.given||w.given==='nicht bearbeitet')return '';const d=(window.diagnose||(()=>[]))(w.given,w.right)||[];return d[0]?`<div class="legend">💡 ${d[0].t}</div>`:'';};
 M().innerHTML=`<div class="paper result-paper"><div class="pp-head"><div><b>Auswertung</b><br><span class="legend">Probe-Klassenarbeit · ${new Date().toLocaleDateString('de-DE')} · Zeit ${fmtT(PR.acc)}${PR.acc>DUR?' (über 45 Min.)':''}</span></div><div class="gradebig g${g}"><small>Note</small>${g}</div></div>
 <table class="ptab2">${rows}<tr class="tot"><td>Gesamt</td><td class="num"><b>${fmtP(PR.total)} / ${TOTAL}</b></td><td>${String(PR.pct).replace(".",",")} %</td></tr></table>
 <div class="scale"><div class="legend">Notenschlüssel (Orientierung – üblicher Schlüssel wie im Übungspaket: ab 92 / 81 / 67 / 50 / 30 %; deine Lehrerin kann abweichen):</div><table><tr>${scale}</tr></table></div>
 <h3>📌 Das solltest du wiederholen</h3>${weak.length?weak.map(p=>`<div class="rep"><b>${p.ic} ${p.k} · ${p.t.split(' – ')[1]||p.t}</b> <span class="legend">${fmtP(PR.G[p.k]||0)} / ${p.max} P.</span><div class="rep-l">${(REP[p.k]||[]).map(r=>link(...r)).join('')}</div></div>`).join(''):'<p>🎉 Alles sitzt – super!</p>'}
 <h3>🔍 Deine Fehler im Einzelnen</h3>${PARTS.filter(p=>byPart(p.k).length).map(p=>`<details class="pcorr"><summary>${p.ic} ${p.k} – ${byPart(p.k).length} Fehler</summary>${byPart(p.k).map(w=>`<div class="pc"><div class="legend">${esc(w.q)}</div>${w.right?(V.diff&&w.given&&w.given!=='nicht bearbeitet'&&w.right.split(' ').length>1&&String(w.given).split(' ').length>1?V.diff(w.given,w.right):`<div class="cmp"><span class="cmp-w">✗ <s>${esc(w.given||'–')}</s></span><span class="cmp-a">→</span><span class="cmp-r">✓ <b>${esc(w.right)}</b></span></div>`):`<div class="legend">✗ ${esc(w.given)}</div>`}${dg(w)}</div>`).join('')}</details>`).join('')||'<p>Keine Fehler in A–E.</p>'}
 <div class="toolbar center"><button class="btn red" id="pAgain">↻ Neue Probe-Arbeit</button><a class="btn ghost" href="../">Zur Übersicht</a></div></div>`;
 $('#pAgain').onclick=()=>{PR=null;HUB.E.go('probe');};if(g<=2)HUB.E.confetti();};
HUB.probeTest={genExam,nounScore,sentence,word,findErrs,CONTENT,TOTAL,PARTS,state:()=>PR,grade1};
})();
