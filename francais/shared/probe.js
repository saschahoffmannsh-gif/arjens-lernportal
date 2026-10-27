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
const PARTS=[{k:'A',t:'Écouter – Hörverstehen',ic:'🎧',max:8,min:6},{k:'B',t:'Vocabulaire – Vokabeln & Redemittel',ic:'📚',max:16,min:10},{k:'C',t:'Grammaire 1 – Complète le dialogue',ic:'🙋',max:8,min:6},{k:'D',t:'Grammaire 2 – Artikel & Singular',ic:'🏷️',max:12,min:6},{k:'E',t:'Grammaire 3 – Verben auf -er',ic:'🧩',max:10,min:7},{k:'F',t:'Production de texte – Dialog',ic:'✍️',max:16,min:12}];
const TOTAL=PARTS.reduce((a,p)=>a+p.max,0);
const REP={A:[['ecouter','strategien','Hör-Strategien'],['ecouter','pausenhof','Hörtexte']],B:[['artikel-bestimmt','regel','Artikel + Nomen lernen'],['texte','moi-zeilen','Zeile für Zeile (Redemittel)'],['etre','entdecken','de · en · nouveau / nouvelle']],C:[['texte','moi-luecke2','Lückentext mit Kästchen'],['etre','pronomen','il / elle / ils / elles'],['etre','formen','Die Formen von être']],D:[['artikel-bestimmt','plural','Plural ↔ Singular'],['artikel-bestimmt','regel','le, la, l’, les'],['artikel-unbestimmt','regel','un, une, des']],E:[['verben-er','bauplan','Stamm + Endung'],['verben-er','heftverben','Die Heft-Verben'],['verben-er','appeler','appeler (ll / l)']],F:[['texte','moi-zeilen','Zeile für Zeile: C’est moi!'],['etre','szenen','Ce sont les … / C’est …']]};
/* ---------- Zettel-Format (wie die Übungs-Klassenarbeit „Klassenarbeit B“, Unité 1): Redemittel, Lückendialog mit Kästchen, Singular im Kontext, Dialog Zeile für Zeile ---------- */
const LS=W.LS,LC=LS.C,LE=LS.E;
/* B b) Qu’est-ce qu’on dit? – deutsche Situation → französischer Satz (je 2 P.); g = Gruppe (mind. 1× Geschlecht, 1× Herkunft/Klasse) */
const REDE=[
 {g:'gen',de:'Du fragst einen Jungen, ob er neu ist.',sol:['Tu es nouveau?','Et toi, tu es nouveau?'],core:[['tu es',/\btu es\b/],LC.NOUVEAU],errs:[LE.NOUVELLE_M]},
 {g:'gen',de:'Du fragst ein Mädchen, ob sie neu ist.',sol:['Tu es nouvelle?','Et toi, tu es nouvelle?'],core:[['tu es',/\btu es\b/],LC.NOUVELLE],errs:[LE.NOUVEAU_F]},
 {g:'gen',de:'Du sagst, dass du neu bist.',sol:['Je suis nouveau.'],core:[LC.JESUIS,LC.NOUVEAU],errs:[LE.NOUVELLE_M]},
 {g:'gen',de:'Du sagst, dass Yasmine neu ist.',sol:['Yasmine est nouvelle.','Elle est nouvelle.'],core:[['Yasmine / elle est',/\b(yasmine|elle) est\b/],LC.NOUVELLE],errs:[LE.IL_F,LE.NOUVEAU_F]},
 {g:'ort',de:'Du sagst, dass du aus Mainz kommst.',sol:['Je suis de Mainz.'],core:[LC.JESUIS,LC.JSDE],errs:[LE.DEMAISON]},
 {g:'ort',de:'Du sagst, in welche Klasse du gehst (6d).',sol:['Je suis en sixième D.','Je suis en 6e D.'],core:[LC.JESUIS,LC.EN6D],errs:[LE.DANSCLASSE]},
 {g:'ort',de:'Lucas verneint und sagt, dass er in der Klasse von Monsieur Martel ist. Was sagt er?',sol:['Non, je suis dans la classe de Monsieur Martel.'],core:[LC.NON,['je suis dans la classe de Monsieur Martel',/\bje suis dans la classe de (monsieur|m) martel\b/]],errs:[]},
 {g:'x',de:'Du begrüßt deine Austauschpartnerin und fragst, wie es ihr geht.',sol:['Salut! Ça va?','Bonjour! Ça va?'],core:[LC.GREET,LC.CAVA]},
 {g:'x',de:'Du fragst, wer das ist.',sol:['C’est qui?','Qui est-ce?'],core:[['C’est qui?',/\bc'?\s?est qui\b|\bqui est ce\b/]]},
 {g:'x',de:'Du sagst, dass Théo und Jade auf dem Schulhof sind.',sol:['Théo et Jade sont dans la cour.','Ils sont dans la cour.'],core:[['… sont',/\b(theo et jade|ils) sont\b/],['dans la cour',/\bdans la cour\b/]],errs:[[/\belles sont\b/,'👦+👧 gemischt → <b>ils</b> sont.']]},
 {g:'x',de:'Du zeigst auf zwei Frauen und sagst: Das sind die Lehrerinnen.',sol:['Ce sont les professeurs.','Regarde! Ce sont les professeurs.'],core:[LC.CESONT,['les professeurs',/\bles professeurs?\b/]],errs:[LE.ILSSONTLE,[/\belles sont (les|la)\b/,'👥 Zeigen: „Das sind …“ = <b>Ce sont</b> les …']]},
 {g:'x',de:'Du verabschiedest dich von deiner Austauschpartnerin.',sol:['Au revoir!','Salut!'],core:[LC.BYE]}];
/* C Lückendialog: [1] Personalpronomen · [2] bestimmter Artikel · [3] passende Information (je ½ P.); '*' = jede sinnvolle Angabe */
const DLG=[
 {id:'d1',ctx:'Du bist Austauschschüler an der Schule in Strasbourg und lernst Madame Fournier kennen.',lines:[
  ['Toi','Bonjour, Madame! {0} m’appelle {1} (dein Vorname). Vous êtes {2} professeur de géo?'],
  ['Fournier','Oui, {3} suis {4} professeur de géo de {5} sixième D. Et toi, {6} es {7} (neu)?'],
  ['Toi','Oui, {8} suis de {9} (dein Wohnort).'],
  ['Fournier','Regarde, voilà Jade et Yasmine. {10} sont dans {11} classe. Et là, c’est Noah. {12} est {13} ami de Jade. {14} élèves sont dans {15} cour.']],
  ans:[['Je'],['*'],['la'],['je'],['la'],['la'],['tu'],['nouveau'],['je'],['*'],['Elles'],['la'],['Il'],['l’'],['Les'],['la']],box:[1,3,2,1,2,2,1,3,1,3,1,2,1,2,2,2]},
 {id:'d2',ctx:'In der Pause sprichst du mit Clara.',lines:[
  ['Clara','Salut! {0} es nouveau?'],['Toi','Oui, {1} suis nouveau. {2} m’appelle {3} (dein Vorname).'],
  ['Clara','Moi, c’est Clara. {4} suis en sixième D. Et toi?'],['Toi','{5} suis en {6} (deine Klasse), avec Noah. Noah et moi, {7} sommes ensemble dans {8} classe.'],
  ['Clara','Super! Regarde, voilà Samira. {9} est {10} amie de Jade.'],['Toi','Et là? C’est qui?'],
  ['Clara','Ce sont {11} surveillants. {12} sont dans {13} cour. Et Madame Fournier? {14} est {15} professeur de géo.']],
  ans:[['Tu'],['je'],['Je'],['*'],['Je'],['Je'],['sixième D','6e D','sixième d'],['nous'],['la'],['Elle'],['l’'],['les'],['Ils'],['la'],['Elle'],['la']],box:[1,1,1,3,1,1,3,1,2,1,2,2,1,2,1,2]},
 {id:'d3',ctx:'Lucas zeigt dir die Schule in Strasbourg.',lines:[
  ['Lucas','Salut! C’est toi, {0} (dein Vorname)?'],['Toi','Oui, c’est moi. {1} suis de {2} (dein Wohnort).'],
  ['Lucas','Cool! Voilà {3} école. Et voilà {4} cour.'],['Toi','Et là, ce sont {5} élèves de {6} cinquième A?'],
  ['Lucas','Oui. Et voilà Yasmine et Jade. {7} sont en sixième D. Yasmine est {8} (neu).'],['Toi','Et Théo? {9} est nouveau aussi?'],
  ['Lucas','Non, {10} est {11} ami de Karim. Théo et Karim, {12} sont dans {13} classe de Madame Fournier. {14} est très cool.'],['Toi','Et toi, Lucas, {15} es en sixième D?']],
  ans:[['*'],['Je'],['*'],['l’'],['la'],['les'],['la'],['Elles'],['nouvelle'],['Il'],['il'],['l’'],['ils'],['la'],['Elle'],['tu']],box:[3,1,3,2,2,2,2,1,3,1,1,2,1,2,1,1]}];
/* D a) Singular im Kontext (je 1 P.: ½ Artikel + ½ Nomen) */
const SING=[
 ['Voilà les élèves de la sixième D.','Et là, c’est Jade. C’est {} de Madame Fournier.','l’élève'],
 ['Voilà les amis de Noah.','Et voilà Samira. C’est {} de Noah.','l’amie','👧 Samira ist ein Mädchen → l’ami<b>e</b>.'],
 ['Voilà les amis de Clara.','Et là, c’est Théo. C’est {} de Clara.','l’ami'],
 ['Voilà les filles de la sixième D.','{} avec Jade, c’est Yasmine.','la fille'],
 ['Voilà les professeurs.','Et là, c’est Madame Fournier, {} de géo.','la professeur'],
 ['Voilà les cahiers de Théo et de Léo.','Et là, c’est {} de Théo.','le cahier'],
 ['Voilà les garçons de la cinquième A.','Et là, c’est Lucas, {} avec la guitare.','le garçon'],
 ['Voilà les photos de Jade.','Regarde, {} avec le hamac!','la photo'],
 ['Voilà les élèves de la cinquième A.','Et là, c’est Karim. C’est {} de Monsieur Martel.','l’élève'],
 ['Voilà les amies de Yasmine.','Et voilà Clara. C’est {} de Yasmine.','l’amie','👧 Clara → l’ami<b>e</b>.'],
 ['Voilà les surveillants.','Et là, c’est {} de la cour.','le surveillant']];
/* F Production de texte – Dialog Zeile für Zeile (je 2 P.) */
const FD=[
 {id:'f1',ctx:'Du bist an der Partnerschule in Strasbourg und lernst in der Pause einen Jungen kennen. Écris le dialogue.',lines:[
  {de:'Du begrüßt ihn, sagst, wie du heißt, und fragst nach seinem Namen.',sol:['Salut! Je m’appelle Arjen. Tu t’appelles comment?'],core:[LC.GREET,LC.NAME,LC.ASK]},
  {de:'Er heißt Théo und fragt, ob du neu bist. Du bejahst und sagst, woher du kommst.',sol:['Oui, je suis nouveau. Je suis de Mainz.'],core:[LC.OUI,LC.NOUVEAU,LC.JSDE],errs:[LE.NOUVELLE_M,LE.DEMAISON]},
  {de:'Du sagst, in welche Klasse du gehst.',sol:['Je suis en sixième D.'],core:[LC.JESUIS,LC.EN6D],errs:[LE.DANSCLASSE]},
  {de:'Théo zeigt auf Jade. Du fragst, ob sie auch neu ist.',sol:['Elle est nouvelle aussi?','Jade est nouvelle?','Elle est nouvelle?'],core:[['Elle / Jade est',/\b(elle|jade) est\b/],LC.NOUVELLE],errs:[LE.IL_F,LE.NOUVEAU_F]},
  {de:'Du sagst, dass Jade in der Klasse von Madame Fournier ist.',sol:['Elle est dans la classe de Madame Fournier.','Jade est dans la classe de Madame Fournier.'],core:[['Elle / Jade est',/\b(elle|jade) est\b/],['dans la classe de Madame Fournier',/\bdans la classe de (madame|mme) fournier\b/]],errs:[LE.IL_F]},
  {de:'Du zeigst auf zwei Personen im Hof und sagst, dass das die Aufsichtspersonen sind.',sol:['Regarde! Ce sont les surveillants.'],core:[LC.CESONT,LC.SURV],errs:[LE.ILSSONTLE,LE.PLS]},
  {de:'Théo sagt: Es ist Pause! Was sagt er?',sol:['C’est la récré!','C’est la récréation!'],core:[LC.RECRE],errs:[LE.COUR]},
  {de:'Du verabschiedest dich von Théo.',sol:['Au revoir, Théo!','Salut, Théo!'],core:[LC.BYE,['Théo',/\btheo\b/]]}]},
 {id:'f2',ctx:'Am ersten Schultag in Strasbourg lernst du Yasmine kennen. Écris le dialogue.',lines:[
  {de:'Du begrüßt Yasmine und fragst, wie es ihr geht.',sol:['Salut, Yasmine! Ça va?','Bonjour! Ça va?'],core:[LC.GREET,LC.CAVA]},
  {de:'Sie fragt, wie du heißt. Du antwortest und sagst, woher du kommst.',sol:['Je m’appelle Arjen. Je suis de Mainz.'],core:[LC.NAME,LC.JSDE],errs:[LE.DEMAISON]},
  {de:'Du sagst, dass du neu bist und in die 6d gehst.',sol:['Je suis nouveau. Je suis en sixième D.'],core:[LC.NOUVEAU,LC.EN6D],errs:[LE.NOUVELLE_M,LE.DANSCLASSE]},
  {de:'Du fragst Yasmine, ob sie auch neu ist.',sol:['Et toi, tu es nouvelle?','Tu es nouvelle aussi?'],core:[['tu es',/\btu es\b/],LC.NOUVELLE],errs:[LE.NOUVEAU_F]},
  {de:'Yasmine sagt nein. Du sagst: Karim und ich sind zusammen in der Klasse.',sol:['Karim et moi, nous sommes ensemble dans la classe.','Karim et moi, on est ensemble dans la classe.'],core:[['Karim et moi',/\bkarim et moi\b/],['nous sommes / on est',/\bnous sommes\b|\bon est\b/],['ensemble',/\bensemble\b/]],errs:[LE.NOUSSONT]},
  {de:'Yasmine zeigt auf zwei Frauen im Hof: Das sind die Aufsichtspersonen. Was sagt sie?',sol:['Ce sont les surveillantes.','Regarde! Ce sont les surveillantes.'],core:[LC.CESONT,LC.SURV],errs:[LE.ILSSONTLE,LE.PLS]},
  {de:'Du sagst, dass Madame Fournier auch da ist und dass sie sehr cool ist.',sol:['Madame Fournier est là aussi. Elle est très cool.'],core:[['Madame Fournier est là',/\b(madame|mme) fournier est la\b/],['Elle est (très) cool',/\belle est (tres )?cool\b/]],errs:[LE.IL_F]},
  {de:'Du sagst, dass Pause ist, und verabschiedest dich.',sol:['C’est la récré! Salut!','C’est la récréation. Au revoir!'],core:[LC.RECRE,LC.BYE],errs:[LE.COUR]}]}];
const BOXN=['','Personalpronomen','bestimmter Artikel','passende Information'];
const kb=n=>`<span class="kb kb${n}">${n}</span>`;
/* Lücke bewerten: '*' = jede sinnvolle Angabe (nicht leer, kein „à la maison“) */
function gapScore(given,ans){const g=String(given||'').trim();if(!g)return 0;if(ans[0]==='*')return /maison|^(a|à|de|la|le|en)$/i.test(g)?0:1;return word(g,ans);}
function gapTip(given,ans,box){const g=NRM(given),a=NRM(ans[0]);if(box===1&&/^elles?$/.test(a)&&/^ils?$/.test(g))return '👧 Mädchen / Frauen → <b>'+ans[0].toLowerCase()+'</b> (nicht '+g+').';if(box===3&&a==='nouveau'&&/nouvelle/.test(g))return '👦 Junge → <b>nouveau</b>.';if(box===3&&a==='nouvelle'&&/nouveau/.test(g))return '👧 Mädchen → <b>nouvelle</b>.';if(box===2&&/^l'$/.test(a)&&/^(le|la)$/.test(g))return 'Vokal am Anfang → <b>l’</b>.';if(box===2&&a==='les'&&g!=='les')return 'Mehrere → <b>les</b>.';return '';}
function singScore(given,right){const g=NRM(given).replace(/^l'\s*/,"l' "),r=NRM(right).replace(/^l'\s*/,"l' ");const m=g.match(/^(le|la|les|l')\s*(.+)$/),mr=r.match(/^(le|la|les|l')\s*(.+)$/);
 const art=m&&m[1]===mr[1]?.5:0;const noun=(m?m[2]:g);const ws=[mr[2]].concat(mr[2]==='professeur'?['professeure','prof']:[]);return art+word(noun,ws)*.5;}
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
 const rg=pick(REDE.filter(x=>x.g==='gen'),1,x=>'r'+x.de),ro=pick(REDE.filter(x=>x.g==='ort'),1,x=>'r'+x.de),rx=pick(REDE.filter(x=>!rg.includes(x)&&!ro.includes(x)),2,x=>'r'+x.de);
 X.B={nouns:pick(NOUNS,8,x=>'n'+x[2]),rede:shuffle(rg.concat(ro,rx))};
 // genug l’ und Plural dabei
 const bD=pick(BEST,6,x=>'b'+x[0]);if(!bD.some(x=>x[1]==='l’'))bD[5]=shuffle(BEST.filter(x=>x[1]==='l’'))[0];if(!bD.some(x=>x[1]==='les'))bD[4]=shuffle(BEST.filter(x=>x[1]==='les'&&!bD.includes(x)))[0];
 const uD=pick(UNB,6,x=>'u'+x[0]);if(!uD.some(x=>x[1]==='des'))uD[5]=shuffle(UNB.filter(x=>x[1]==='des'))[0];if(!uD.some(x=>x[1]==='une'))uD[4]=shuffle(UNB.filter(x=>x[1]==='une'&&!uD.includes(x)))[0];
 X.C={dlg:pick(DLG,1,x=>'c'+x.id)[0]};
 const sg=pick(SING,6,x=>'s'+x[1]);if(!sg.some(x=>x[3]))sg[5]=shuffle(SING.filter(x=>x[3]))[0];
 X.D={sing:shuffle(sg),unb:shuffle(uD)};
 X.F={dlg:pick(FD,1,x=>'f'+x.id)[0]};
 const vv=pick(VERBS,6,x=>'v'+x[0]);if(!vv.some(x=>x[1]==='appeler'))vv[5]=shuffle(VERBS.filter(x=>x[1]==='appeler'))[0];
 X.E={verbs:vv,plur:pick(PLUR,2,x=>'l'+x[0])};
 const keys=['n'+X.B.nouns.map(x=>x[2]),...X.B.rede.map(x=>'r'+x.de),'c'+X.C.dlg.id,...sg.map(x=>'s'+x[1]),'f'+X.F.dlg.id,...uD.map(x=>'u'+x[0]),...vv.map(x=>'v'+x[0]),...X.E.plur.map(x=>'l'+x[0])];
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
 M().innerHTML=`<div class="crumb"><a class="btn ghost small" href="${window.PKG_BACK||'../'}">← Übersicht</a><span class="crumb-n">Probe-Klassenarbeit</span></div>
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
 <p class="pp-sub">b) <b>Qu’est-ce que tu dis en français?</b> – Wie sagst du es auf Französisch? (je 2 P.)</p><ol class="pp-list pp-zl" start="9">${X.B.rede.map((r,i)=>`<li><span class="pq">${r.de} <span class="zl-p">2 P.</span></span>${inp('Br'+i,18,'Auf Französisch …')}</li>`).join('')}</ol>`;
 // C
 h+=head(P.C,'<b>Complète le dialogue.</b> Ergänze das Gespräch. (je ½ P.)')+`<div class="kb-leg pp-kbleg"><span>${kb(1)} Verwende das Personalpronomen (je, tu, il/elle …).</span><span>${kb(2)} Verwende den bestimmten Artikel (le, la, l’, les).</span><span>${kb(3)} Notiere die passende Information.</span></div><p class="pp-sub">${X.C.dlg.ctx}</p><div class="pp-dlg">${(()=>{const D=X.C.dlg;return D.lines.map(([w,t])=>`<div class="pp-dl"><b>${w==='Toi'?'Toi':(W.NAMES&&W.NAMES[w])||w}:</b> <span class="fr">${t.replace(/\{(\d+)\}/g,(m,k)=>kb(D.box[+k])+inp('C'+k,D.ans[+k][0]==='*'?6.5:(D.ans[+k][0].length>4?6:4)))}</span></div>`).join('');})()}</div>`;
 // D
 const chips=(k,opts)=>`<span class="xchips" data-k="${k}">${opts.map(o=>`<button type="button" class="xchip" data-v="${o}">${o}</button>`).join('')}</span>`;
 h+=head(P.D,'a) <b>Quelle est la forme du nom au singulier?</b> – Wie lautet der Singular? Schreibe <b>mit Artikel</b>. (je 1 P.)')+`<ol class="pp-list pp-sg">${X.D.sing.map((n,i)=>`<li><div class="fr">– ${n[0]}</div><div class="fr">– ${n[1].replace('{}',inp('Ds'+i,7.5,'le / la / l’ …'))}</div></li>`).join('')}</ol>
 <p class="pp-sub">b) Dans ma chambre, il y a … <b>un, une</b> oder <b>des</b>? (je 1 P.)</p><ol class="pp-list ch" start="7">${X.D.unb.map((n,i)=>`<li>${chips('Du'+i,['un','une','des'])}<span class="fr pn">${n[0]}</span></li>`).join('')}</ol>`;
 // E
 h+=head(P.E,'a) Setze das Verb in der richtigen Form ein. (je 1 P.)')+`<ol class="pp-list">${X.E.verbs.map((v,i)=>`<li class="fr">${v[0].replace('{}',inp('E'+i,7.5))} <span class="pinf">(${v[1]})</span></li>`).join('')}</ol>
 <p class="pp-sub">b) Schreibe den Satz im <b>Plural</b>. (je 2 P.)</p><ol class="pp-list" start="7">${X.E.plur.map((p,i)=>`<li><span class="fr pq">${p[0]}</span>${inp('Ep'+i,16)}</li>`).join('')}</ol>`;
 // F
 h+=head(P.F,'<b>Écris le dialogue.</b> Schreibe den Dialog – Zeile für Zeile. (je 2 P.)')+`<p class="pp-sub">${X.F.dlg.ctx}</p><ol class="pp-list pp-zl">${X.F.dlg.lines.map((L,i)=>`<li><span class="pq">${L.de} <span class="zl-p">2 P.</span></span>${inp('F'+i,18,'Auf Französisch …')}</li>`).join('')}</ol>
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
 $$('.pacc button,.paper .acc button').forEach(b=>{if(b.closest('.pp-body'))return;b.onclick=()=>{const i=PR.lastI||$('.xin');const s=i.selectionStart??i.value.length,t=i.selectionEnd??s;i.value=i.value.slice(0,s)+b.dataset.c+i.value.slice(t);i.focus();try{i.setSelectionRange(s+1,s+1);}catch(x){}i.dispatchEvent(new Event('input'));};});
 // Uhr
 const upT=()=>{const left=DUR-elapsed();const t=$('#pT');if(!t){stopTick();return;}t.textContent=fmtT(Math.abs(left));$('#pTs').textContent=left>=0?'Rest':'drüber';$('#pTimer').classList.toggle('over',left<0);$('#pTimer').classList.toggle('low',left>=0&&left<300);};
 stopTick();tick=setInterval(upT,1000);upT();
 const pause=on=>{if(on&&PR.run){PR.acc+=(Date.now()-PR.since)/1000;PR.run=false;PR.pauses++;E.stopAudio();}else if(!on&&!PR.run){PR.since=Date.now();PR.run=true;}$('#pOv').hidden=!on;$('#paper').classList.toggle('hidden',on);$('#pPause').textContent=on?'▶ Weiter':'⏸ Pause';upT();};
 $('#pPause').onclick=()=>pause(PR.run);$('#pResume').onclick=()=>pause(false);
 const sub=()=>{const open=$$('.xin').filter(i=>!i.value.trim()).length+$$('.xchips').filter(g=>!g.querySelector('.sel')).length;
  if(open&&!confirm(`Noch ${open} Lücken offen. Trotzdem abgeben?`))return;
  if(PR.run){PR.acc+=(Date.now()-PR.since)/1000;PR.run=false;}stopTick();E.stopAudio();grade1();HUB.E.go('probeText');};
 $('#pSubmit').onclick=sub;$('#pSubmit2').onclick=sub;};
/* ---------- Auswerten (A–E automatisch) ---------- */
function grade1(){const X=PR.X,E=HUB.E,A=PR.ans;const G={};const wrong=[];
 const W2=(part,q,given,right,ref,tip)=>{wrong.push({part,q,given:String(given||'–'),right,ref,tip:tip||''});};
 // A
 let ra=0,rm=0;X.A.tasks.forEach((e,i)=>{const r=PR.R[i].check();const mx=rawMax(e);rm+=mx;if(r){ra+=r.pts;if(!r.ok)W2('A',strip(e.q),strip(r.given||''),strip(r.sol||''),['ecouter',e.ch.split(':')[1]]);}else W2('A',strip(e.q),'nicht bearbeitet','',['ecouter',e.ch.split(':')[1]]);});
 let a1=rm?ra/rm*6:0,a2=0;if(X.A.dict){const r=PR.RD.check();const mx=rawMax(X.A.dict);if(r){a2=r.pts/mx*2;if(!r.ok)W2('A','Diktat',strip(r.given),strip(r.sol),['ecouter','diktat']);}else W2('A','Diktat','nicht bearbeitet','',['ecouter','diktat']);}else a1=rm?ra/rm*8:0;
 G.A=h2(a1+a2);
 // B
 let b=0;X.B.nouns.forEach((n,i)=>{const s=nounScore(A['B'+i]||'',n);b+=s.pts;const right=n[1]+(n[1]==='l’'?'':' ')+n[2];if(s.pts<1)W2('B',n[0],A['B'+i],right,['artikel-bestimmt','regel']);});
 X.B.rede.forEach((r,i)=>{const s=LS.score(A['Br'+i]||'',r);b+=s.pts;if(s.pts<s.max)W2('B',r.de,A['Br'+i]||'nicht bearbeitet',r.sol[0],['texte','moi-zeilen'],(A['Br'+i]||'').trim()?s.tips[0]||(s.miss.length?'Es fehlt: '+s.miss.join(' · '):''):'');});
 G.B=h2(b);
 // C
 let c=0;const D=X.C.dlg;D.ans.forEach((an,k)=>{const g=A['C'+k]||'';const v=gapScore(g,an)*.5;c+=v;if(v<.5){const ln=D.lines.find(l=>l[1].includes('{'+k+'}'));const ctx=ln?strip(ln[1]).replace(/\{(\d+)\}/g,(m,j)=>+j===k?'___':'…'):'';
  W2('C',BOXN[D.box[k]]+' ('+D.box[k]+'): '+ctx,g||'nicht bearbeitet',an[0]==='*'?'(deine Angabe, z. B. Arjen / Mainz)':an[0],D.box[k]===1?['etre','pronomen']:D.box[k]===2?['artikel-bestimmt','regel']:['etre','entdecken'],gapTip(g,an,D.box[k]));}});
 G.C=h2(c);
 // D
 let d=0;X.D.sing.forEach((n,i)=>{const g=A['Ds'+i]||'';const v=singScore(g,n[2]);d+=v;if(v<1)W2('D','Singular: '+n[0]+' → '+n[1].replace('{}','___'),g||'nicht bearbeitet',n[2],['artikel-bestimmt','plural'],n[3]&&/ami\b/.test(NRM(g))?n[3]:(/s$/.test(NRM(g))?'👤 Eine Person / Sache → Singular, ohne -s.':''));});
 X.D.unb.forEach((n,i)=>{const ok=A['Du'+i]===n[1];if(ok)d++;else W2('D','il y a … '+n[0],A['Du'+i],n[1]+' '+n[0],['artikel-unbestimmt','regel']);});
 G.D=d;
 // E
 let ee=0;X.E.verbs.forEach((v,i)=>{const s=word(A['E'+i]||'',v[2]);ee+=s;if(s<1)W2('E',v[0].replace('{}','___')+' ('+v[1]+')',A['E'+i],v[0].replace('{}',v[2]),['verben-er',v[1]==='appeler'?'appeler':'heftverben']);});
 X.E.plur.forEach((p,i)=>{const s=sentence(A['Ep'+i]||'',p[1]);ee+=s;if(s<2)W2('E','Plural: '+p[0],A['Ep'+i],p[1],[p[2],p[3]]);});
 G.E=h2(ee);
 // F: Dialog Zeile für Zeile
 let ff=0;const FL=X.F.dlg.lines.map((L,i)=>{const g=A['F'+i]||'';const r=LS.score(g,L);ff+=r.pts;if(r.pts<r.max)W2('F',L.de,g||'nicht bearbeitet',L.sol[0],['texte','moi-zeilen'],g.trim()?r.tips[0]||(r.miss.length?'Es fehlt: '+r.miss.join(' · '):''):'');return {g,r};});
 G.F=h2(ff);PR.FL=FL;
 PR.G=G;PR.wrong=wrong;}
/* ---------- Text selbst prüfen ---------- */
HUB.views.probeText=function(){if(!PR||!PR.G){HUB.E.go('probe');return;}const X=PR.X,FL=PR.FL||[];
 const n=FL.filter(x=>x.g.trim()).length,words=FL.reduce((a,x)=>a+(x.g.trim()?x.g.trim().split(/\s+/).length:0),0);
 PR.F={f:'D',n,words,inh:PR.G.F,spr:0,errs:FL.flatMap(x=>x.r.tips.map(t=>({m:strip(t),x:x.g})))};
 M().innerHTML=`<div class="paper"><div class="pp-part"><h2><span class="pp-k">F</span>✍️ Dein Dialog – Zeile für Zeile</h2><span class="pp-box">${fmtP(PR.G.F)} / 16 P.</span></div>
 <p class="pp-sub">${X.F.dlg.ctx}</p><ol class="zl">${X.F.dlg.lines.map((L,i)=>{const x=FL[i];return `<li class="zl-li"><div class="zl-de">${L.de} <span class="zl-p">2 P.</span></div><div class="ptext">${x.g.trim()?esc(x.g):'<i>(leer)</i>'}</div><div class="zl-fb">${x.r.pts>=x.r.max?`<span class="zl-ok">✓ 2/2</span>`:`<span class="zl-pt">${fmtP(x.r.pts)}/2</span>`} <span class="lbl">Muster:</span> <span class="fr">${L.sol[0]}</span>${x.r.miss.length&&x.r.pts<x.r.max?`<div class="zl-miss">Es fehlt: ${x.r.miss.map(m=>`<b>${m}</b>`).join(' · ')}</div>`:''}${x.r.tips.map(t=>`<div class="zl-tip">${t}</div>`).join('')}</div></li>`;}).join('')}</ol>
 <div class="toolbar center"><button class="btn big green" id="pFin">📊 Ergebnis & Note anzeigen</button></div></div>`;
 $('#pFin').onclick=()=>{finish();HUB.E.go('probeResult');};};
function finish(){if(PR.logged)return;PR.logged=1;const total=PARTS.reduce((a,p)=>a+(PR.G[p.k]||0),0);const pct=Math.floor(total/TOTAL*1000)/10;PR.total=total;PR.pct=pct;PR.grade=TR.grade(total/TOTAL*100);
 TR.probeEnd({parts:Object.fromEntries(PARTS.map(p=>[p.k,{pts:PR.G[p.k]||0,max:p.max}])),total,max:TOTAL,pct,grade:PR.grade,ms:Math.round(PR.acc*1000),overtime:PR.acc>DUR,pauses:PR.pauses,track:PR.X.A.track,
  text:{f:PR.F.f,sentences:PR.F.n,words:PR.F.words,inhalt:PR.F.inh,sprache:PR.F.spr,errs:PR.F.errs.map(e=>e.m+': '+e.x).slice(0,12)},fmt:'zettel',
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
 <h3>🔍 Deine Fehler im Einzelnen</h3>${PARTS.filter(p=>byPart(p.k).length).map(p=>`<details class="pcorr"><summary>${p.ic} ${p.k} – ${byPart(p.k).length} Fehler</summary>${byPart(p.k).map(w=>`<div class="pc"><div class="legend">${esc(w.q)}</div>${w.right?(V.diff&&w.given&&w.given!=='nicht bearbeitet'&&w.right.split(' ').length>1&&String(w.given).split(' ').length>1?V.diff(w.given,w.right):`<div class="cmp"><span class="cmp-w">✗ <s>${esc(w.given||'–')}</s></span><span class="cmp-a">→</span><span class="cmp-r">✓ <b>${esc(w.right)}</b></span></div>`):`<div class="legend">✗ ${esc(w.given)}</div>`}${w.tip?`<div class="zl-tip">${w.tip}</div>`:dg(w)}</div>`).join('')}</details>`).join('')||'<p>Keine Fehler – stark!</p>'}
 <div class="toolbar center"><button class="btn red" id="pAgain">↻ Neue Probe-Arbeit</button><a class="btn ghost" href="${window.PKG_BACK||'../'}">Zur Übersicht</a></div></div>`;
 $('#pAgain').onclick=()=>{PR=null;HUB.E.go('probe');};if(g<=2)HUB.E.confetti();};
HUB.probeTest={genExam,nounScore,sentence,word,findErrs,CONTENT,TOTAL,PARTS,state:()=>PR,grade1,gapScore,singScore,REDE,DLG,SING,FD};
})();
