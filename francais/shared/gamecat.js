/* ===================== SPIELE-KATALOG + SPIELDATEN =====================
   Ein Ort für Namen/Kacheln (Paketseite, Training, Bericht) und die Inhalte der neuen Spiele.
   Nur Vokabeln aus dem Schulbuch bis „le globe“; alles ist in den Lektionen erklärt (Verweis in lesson). */
(function(){
'use strict';
const W=window;
W.GAMECAT=[
 {id:'etre',ic:'⚡',t:'être-Blitz',c:'#ea580c',sub:'Wer? → être-Form',topic:'être'},
 {id:'artikel',ic:'🧺',t:'Artikel-Sortierer',c:'#0d9488',sub:'le / la / l’ / les · un / une / des',topic:'Artikel'},
 {id:'lego',ic:'🧱',t:'Endungs-Lego',c:'#16a34a',sub:'-e, -es, -ons … + appeler',topic:'Verben auf -er'},
 {id:'memory',ic:'🃏',t:'Vokabel-Memory',c:'#7c3aed',sub:'Bild + Wort finden, dann le / la / l’',topic:'Vokabeln + Artikel'},
 {id:'zimmer',ic:'🛏️',t:'Zimmer einräumen',c:'#db2777',sub:'C’est ma chambre: un / une / des',topic:'C’est ma chambre'},
 {id:'fabrik',ic:'🏭',t:'Plural-Fabrik',c:'#2563eb',sub:'l’élève → les élèves · -s nicht vergessen',topic:'Plural'},
 {id:'puzzle',ic:'🧩',t:'Satz-Puzzle',c:'#ca8a04',sub:'Je me présente · Wer → Verb → Rest',topic:'Texte + Satzbau'},
 {id:'blitz',ic:'🚦',t:'Stolperstein-Blitz',c:'#dc2626',sub:'Richtig oder falsch? – deine Fallen',topic:'alle Themen'},
 {id:'bingo',ic:'🎧',t:'Hör-Bingo',c:'#0891b2',sub:'Hören und das Feld antippen',topic:'Hören'}];
/* Gegenstände: [Bild-Schlüssel, Wort, m/f, Plural-Wort] */
const OBJ=[['lit','lit','m','lits'],['table','table','f','tables'],['chaise','chaise','f','chaises'],['lampe','lampe','f','lampes'],['armoire','armoire','f','armoires'],
 ['etagere','étagère','f','étagères'],['poster','poster','m','posters'],['photo','photo','f','photos'],['guitare','guitare','f','guitares'],['ordinateur','ordinateur','m','ordinateurs'],
 ['globe','globe','m','globes'],['livre','livre','m','livres'],['cahier','cahier','m','cahiers'],['minichaine','minichaîne','f','minichaînes'],['hamac','hamac','m','hamacs'],
 ['figurine','figurine','f','figurines'],['stylo','stylo','m','stylos'],['crayon','crayon','m','crayons'],['regle','règle','f','règles'],['classeur','classeur','m','classeurs'],['effaceur','effaceur','m','effaceurs']];
const DE={lit:'das Bett',table:'der Tisch',chaise:'der Stuhl',lampe:'die Lampe',armoire:'der Schrank',etagere:'das Regal',poster:'das Poster',photo:'das Foto',guitare:'die Gitarre',ordinateur:'der Computer',globe:'der Globus',livre:'das Buch',cahier:'das Heft',minichaine:'die Stereoanlage',hamac:'die Hängematte',figurine:'die Figur',stylo:'der Kuli',crayon:'der Bleistift',regle:'das Lineal',classeur:'der Ordner',effaceur:'der Tintenkiller'};
const VOW=/^[aeiouéèê]/i;
const def=o=>VOW.test(o[1])&&o[0]!=='hamac'?'l’':o[2]==='m'?'le':'la';
const ind=o=>o[2]==='m'?'un':'une';
const join=(a,w)=>a+(/’$/.test(a)?'':' ')+w;
/* Zimmer einräumen: je Zimmer 5 Plätze [Bild, Anzahl, Ausdruck]; Plural-Paare zwingen zum Hinschauen */
const ROOMS=[
 {t:'Das Zimmer von Théo',who:'Théo',items:[['lit',1,'un lit'],['armoire',1,'une armoire'],['poster',3,'des posters'],['guitare',1,'une guitare'],['ordinateur',1,'un ordinateur']]},
 {t:'Das Zimmer von Clara',who:'Clara',items:[['livre',1,'un livre'],['livre',3,'des livres'],['lampe',1,'une lampe'],['etagere',1,'une étagère'],['chaise',1,'une chaise']]},
 {t:'Das Zimmer von Jade',who:'Jade',items:[['figurine',1,'une figurine'],['figurine',3,'des figurines'],['table',1,'une table'],['hamac',1,'un hamac'],['globe',1,'un globe']]},
 {t:'Das Zimmer von Noah',who:'Noah',items:[['photo',3,'des photos'],['cahier',1,'un cahier'],['minichaine',1,'une minichaîne'],['poster',1,'un poster'],['armoire',1,'une armoire']]}];
ROOMS.forEach(r=>{const L=r.items.map(i=>i[2]);r.say='Dans ma chambre, il y a '+L.slice(0,-1).join(', ')+' et '+L[L.length-1]+'.';});
/* Satz-Puzzle: Bausteine mit Rolle (p Pronomen · s Wer · v Verb · r Rest), eine Falle, deutsche Bedeutung */
const PUZ=[
 ['Je/p|m’appelle/v|Clara./r','m’apelle','Ich heiße Clara.','Je m’appelle – mit <b>pp</b> und <b>ll</b>.'],
 ['Je/p|suis/v|de Berlin./r','est','Ich komme aus Berlin.','je → <b>suis</b>.'],
 ['Je/p|suis/v|en sixième A./r','es','Ich bin in der 6A.','je → <b>suis</b> (tu es).'],
 ['Je/p|suis/v|élève à Strasbourg./r','sommes','Ich bin Schüler in Straßburg.','je → <b>suis</b>.'],
 ['Monsieur Martel/s|est/v|le professeur de français./r','la professeur de français.','Herr Martel ist der Französischlehrer.','Ein Mann → <b>le</b> professeur.'],
 ['Clara et moi,/s|nous/p|sommes/v|ensemble dans la classe./r','sont','Clara und ich, wir sind zusammen in der Klasse.','nous → <b>sommes</b>.'],
 ['Théo et Jade/s|sont/v|dans la cour./r','est','Théo und Jade sind auf dem Schulhof.','Zwei Personen → <b>sont</b>.'],
 ['Ils/p|sont/v|ensemble./r','Elles','Sie (Théo und Jade) sind zusammen.','Ein Junge dabei → <b>ils</b>.',['Théo','Jade']],
 ['Elles/p|sont/v|dans la cour./r','Ils','Sie (Jade und Yasmine) sind auf dem Schulhof.','Nur Mädchen → <b>elles</b>.',['Jade','Yasmine']],
 ['On/p|est/v|ensemble./r','sommes','Wir sind zusammen.','on → Verb wie il: <b>est</b>.'],
 ['À la maison,/r|je/p|regarde/v|des B.D./r','regardes','Zu Hause schaue ich Comics an.','je → <b>-e</b>.'],
 ['Nous/p|regardons/v|des photos./r','regardez','Wir schauen Fotos an.','nous → <b>-ons</b>.'],
 ['À la maison,/r|j’écoute/v|des CD./r','je écoute','Zu Hause höre ich CDs.','Vor Vokal: <b>j’</b>écoute.'],
 ['Clara et Jade/s|téléphonent/v|à Yasmine./r','téléphone','Clara und Jade rufen Yasmine an.','Zwei Personen → <b>-ent</b>.'],
 ['Vous/p|parlez/v|français?/r','parlons','Sprecht ihr Französisch?','vous → <b>-ez</b>.'],
 ['Dans ma chambre,/r|il y a/v|un lit et une table./r','une lit et un table.','In meinem Zimmer gibt es ein Bett und einen Tisch.','<b>un</b> lit (m.) · <b>une</b> table (f.).'],
 ['Dans l’étagère,/r|il y a/v|des livres./r','des livre.','Im Regal gibt es Bücher.','des + Nomen mit <b>-s</b>.'],
 ['Il y a/v|des posters/s|partout./r','des poster','Überall gibt es Poster.','des + Nomen mit <b>-s</b>.'],
 ['Les élèves/s|sont/v|dans la cour./r','Les l’élèves','Die Schüler sind auf dem Schulhof.','<b>les</b> ersetzt l’ – nie „les l’“.'],
 ['Le globe/s|est/v|dans la chambre de Théo./r','La globe','Der Globus ist in Théos Zimmer.','globe ist männlich → <b>le</b>.'],
 ['Et toi?/r|Tu/p|t’appelles/v|comment?/r','es','Und du? Wie heißt du?','Wie heißt du? → tu <b>t’appelles</b>.']];
/* Stolperstein-Blitz: [Ausdruck, richtig?, richtige Form, Grund] – Arjens Fallen besonders oft */
const BLITZ=[
 ['l’armoire',1],['la armoire',0,'l’armoire','<b>a</b>rmoire fängt mit Vokal an → <b>l’</b>'],['le ordinateur',0,'l’ordinateur','<b>o</b> = Vokal → <b>l’</b>'],['l’ordinateur',1],
 ['le effaceur',0,'l’effaceur','<b>e</b> = Vokal → <b>l’</b>'],['l’effaceur',1],['l’étagère',1],['le hamac',1],['l’hamac',0,'le hamac','hamac ist die <b>Ausnahme</b>: le hamac'],
 ['les élèves',1],['les l’élèves',0,'les élèves','<b>les ersetzt l’</b> – nicht beides'],['les l’amies',0,'les amies','<b>les ersetzt l’</b> – nicht beides'],['les élève',0,'les élèves','les → Nomen mit <b>-s</b>'],
 ['la posters',0,'les posters','<b>-s</b> am Ende = mehrere → <b>les</b>'],['les posters',1],['la figurines',0,'les figurines','<b>-s</b> am Ende = mehrere → <b>les</b>'],['les figurines',1],
 ['le cahier',1],['la cahier',0,'le cahier','cahier ist <b>männlich</b>'],['la guitare',1],['le guitare',0,'la guitare','guitare ist <b>weiblich</b>'],
 ['une armoire',1],['un armoire',0,'une armoire','armoire ist <b>weiblich</b> → une'],['des livres',1],['des livre',0,'des livres','des → Nomen mit <b>-s</b>'],['un lit',1],['une lit',0,'un lit','lit ist <b>männlich</b> → un'],
 ['Théo et Jade → ils',1],['Théo et Jade → elles',0,'Théo et Jade → ils','Ein <b>Junge</b> dabei → <b>ils</b>'],['Jade et Yasmine → elles',1],['Léo et Clara → elles',0,'Léo et Clara → ils','Junge + Mädchen → <b>ils</b>'],
 ['on est',1],['on sommes',0,'on est','on → Verb wie il: <b>est</b>'],['nous sommes',1],['ils est',0,'ils sont','ils → <b>sont</b>'],['tu es',1],['tu est',0,'tu es','tu → <b>es</b>'],['vous êtes',1],
 ['nous regardons',1],['nous regardez',0,'nous regardons','nous → <b>-ons</b>'],['tu regardes',1],['tu regarde',0,'tu regardes','tu → <b>-es</b>'],['ils écoutent',1],['j’écoute',1],['je écoute',0,'j’écoute','vor Vokal: <b>j’</b>'],
 ['nous appelons',1],['nous appellons',0,'nous appelons','Endung hörbar → nur <b>ein l</b>'],['il appelle',1],['il appele',0,'il appelle','Endung stumm → <b>ll</b>'],['vous téléphonez',1]];
/* Plural-Fabrik: [Bild, Einzahl-Artikel-Typ, Wort, Plural, Bild-Emoji falls kein Bild] */
const FAB=OBJ.filter(o=>!['hamac','minichaine'].includes(o[0])).map(o=>({k:o[0],w:o[1],pl:o[3],g:o[2]})).concat([{k:'',w:'élève',pl:'élèves',g:'mf',emo:'🧑‍🎓'},{k:'',w:'amie',pl:'amies',g:'f',emo:'👧'}]);
/* Hör-Bingo: Paare, die man unterscheiden muss (Grund = was man hört) */
const BINGO=[
 [['il est','ils sont'],'il est = einer · ils sont = mehrere'],[['elle est','elles sont'],'est = eine · sont = mehrere'],[['nous sommes','vous êtes'],'nous sommes = wir · vous êtes = ihr'],[['je suis','tu es'],'je suis = ich · tu es = du'],
 [['le livre','les livres'],'le [lə] = eins · les [le] = mehrere'],[['la photo','les photos'],'la = eins · les [le] = mehrere'],[['le cahier','la guitare'],'le cahier (m.) · la guitare (f.)'],[['l’armoire','la chaise'],'l’armoire: Vokal → l’'],
 [['un lit','une lampe'],'un lit (männlich) · une lampe (weiblich)'],[['un poster','des posters'],'un = eins · des = mehrere (+ -s)'],[['nous regardons','vous regardez'],'nous → -ons 🔊 · vous → -ez 🔊'],
 [['il téléphone','nous téléphonons'],'il téléphone → Endung stumm 🔇 · nous → -ons 🔊'],[['l’ordinateur','le globe'],'l’ordinateur: Vokal → l’'],[['on est','nous sommes'],'on est = wir (Alltag) · nous sommes = wir']];
const MEM=OBJ.filter(o=>o[0]!=='minichaine');
/* alles, was die Spiele vorlesen (für die MP3-Erzeugung mit edge-tts) */
const SAY=new Set();
OBJ.forEach(o=>{SAY.add(join(def(o),o[1]));SAY.add(join(ind(o),o[1]));});FAB.forEach(f=>{SAY.add('les '+f.pl);SAY.add('des '+f.pl);});
['les élèves','les amies','l’élève','l’amie'].forEach(x=>SAY.add(x));
ROOMS.forEach(r=>{SAY.add(r.say);r.items.forEach(i=>SAY.add(i[2]));});
PUZ.forEach(p=>SAY.add(p[0].split('|').map(x=>x.replace(/\/[a-z]$/,'')).join(' ')));
BINGO.forEach(b=>b[0].forEach(x=>SAY.add(x)));
BLITZ.forEach(b=>{const t=b[1]?b[0]:b[2];if(!/→/.test(t))SAY.add(t);});
W.GDATA={OBJ,DE,ROOMS,PUZ,BLITZ,FAB,BINGO,MEM,def,ind,join,VOW};W.GAME_SAY=[...SAY];
})();
