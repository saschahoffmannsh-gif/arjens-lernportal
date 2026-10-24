/* Lektion: Texte schreiben – C'est moi & C'est ma chambre */
const {F,G,conj,dlg,merk,attn,tip,hoer,card,reveal,tabs,track,steps,grp,ob,room,spk,spkLines,writer}=H;
const {mc,pick,gap,gapw,ord,wr,mt,dl,clk,mark,mul,seg,tf,det}=X;
window.LESSON={slug:'texte',title:'Texte schreiben',fr:'C’est moi! · C’est ma chambre!',icon:'✍️',color:'#ca8a04',testN:16,
 intro:'In der Klassenarbeit schreibst du wahrscheinlich einen kurzen Text: <b>dich vorstellen</b> oder <b>dein Zimmer beschreiben</b>. Hier hörst und liest du Mustertexte, sammelst Bausteine, baust Sätze – und schreibst dann deinen eigenen Text mit Checkliste.'};
room('jade','La chambre de Jade',[
 ['poster',8,10,42,'des posters',2],['photo',232,22,34,'des photos',2],['hamac',2,94,88,'un hamac'],['lit',90,118,92,'un lit'],
 ['table',186,118,72,'une table'],['ordinateur',204,104,36,'un ordinateur'],['chaise',250,132,46,'une chaise'],
 ['armoire',306,96,72,'une armoire'],['etagere',300,4,94,'une étagère'],['livre',306,10,27,'des livres',3],['bd',306,54,27,'des B.D.',3],
 ['minichaine',58,184,40,'une minichaîne'],['cd',104,198,22,'des CD',3],['pierre',196,190,26,'des pierres (la collection)',3]],{wx:140,wall:'#ede9fe'});
window.TRACKS={
 leo:{title:'Léo: «C’est moi!»',kind:'Mustertext 1',open:true,intro:'Hör zu und lies mit. Achte darauf, wie Léo seinen Text aufbaut.',lines:[
  ['Léo','Salut! Je me présente: c’est moi, Léo.','Hallo! Ich stelle mich vor: Das bin ich, Léo.'],
  ['Léo','Je suis de Berlin.','Ich komme aus Berlin.'],
  ['Léo','Je suis élève à Strasbourg. Je suis en sixième A.','Ich bin Schüler in Straßburg. Ich bin in der 6A.'],
  ['Léo','Le professeur de français, c’est Monsieur Martel. Il est très cool.','Der Französischlehrer ist Herr Martel. Er ist sehr cool.'],
  ['Léo','Voilà Lucas. Lucas et moi, nous sommes ensemble dans la classe.','Das ist Lucas. Lucas und ich sind zusammen in der Klasse.'],
  ['Léo','À la maison, je regarde des B.D. et j’écoute des CD.','Zu Hause schaue ich Comics an und höre CDs.'],
  ['Léo','Je téléphone à Lucas et nous parlons ensemble.','Ich rufe Lucas an und wir reden zusammen.'],
  ['Léo','Et toi? Tu t’appelles comment? Au revoir!','Und du? Wie heißt du? Auf Wiedersehen!']]},
 jade:{title:'Jade: «C’est ma chambre!»',kind:'Mustertext 2',open:true,intro:'Hör zu und lies mit. Schau dabei auf das Bild von Jades Zimmer.',lines:[
  ['Jade','Salut! C’est Jade. Voilà ma chambre!','Hallo! Hier ist Jade. Das ist mein Zimmer!'],
  ['Jade','Dans ma chambre, il y a un lit, une armoire et une étagère.','In meinem Zimmer gibt es ein Bett, einen Schrank und ein Regal.'],
  ['Jade','Dans l’étagère, il y a des livres et des B.D.','Im Regal gibt es Bücher und Comics.'],
  ['Jade','Et voilà ma collection de pierres!','Und hier ist meine Steinsammlung!'],
  ['Jade','Là, dans le coin, il y a une table, une chaise et un ordinateur.','Da, in der Ecke, gibt es einen Tisch, einen Stuhl und einen Computer.'],
  ['Jade','Dans le coin musique, il y a une minichaîne et des CD.','In der Musikecke gibt es eine Mini-Stereoanlage und CDs.'],
  ['Jade','J’écoute des CD et je regarde des photos.','Ich höre CDs und schaue Fotos an.'],
  ['Jade','Il y a des posters partout.','Überall gibt es Poster.'],
  ['Jade','Et voilà le hamac – c’est trop cool!','Und hier ist die Hängematte – das ist total cool!'],
  ['Jade','Et toi? Qu’est-ce qu’il y a dans ta chambre?','Und du? Was gibt es in deinem Zimmer?']]},
};
const LEO=window.TRACKS.leo.lines, JADE=window.TRACKS.jade.lines;
const L2=l=>l.map(x=>[x[0],x[1]]);
const RM=(rows)=>`<table class="t rm">${rows.map(([k,fr])=>`<tr><th>${k}</th><td>${[].concat(fr).map(x=>F(x)).join(' ')}</td></tr>`).join('')}</table>`;
window.WRITERS={
 moi:{title:'Mein Text: «C’est moi!»',who:'Léo',hint:'Schreibe mindestens 5–8 Sätze über dich. Tippe auf die Bausteine und ergänze sie (… = deine Angaben). Die Checkliste hakt automatisch ab, was schon drin ist. Dein Text wird auf diesem Gerät gespeichert.',
  frame:[['Bonjour!','Begrüßung'],['Salut!','Begrüßung'],['Je me présente: c’est moi, …','Ich stelle mich vor'],['Je m’appelle …','Ich heiße …'],['Je suis de …','Ich komme aus …'],['Je suis élève à …','Ich bin Schüler/in in …'],['Je suis en sixième …','Ich bin in der 6 …'],['Le professeur de français, c’est …','Lehrer/in'],['Il est très cool.','Er ist sehr cool.'],['Elle est très cool.','Sie ist sehr cool.'],['Voilà … . … et moi, nous sommes ensemble dans la classe.','Freund/in'],['À la maison, je regarde …','zu Hause'],['J’écoute …','Ich höre …'],['Je téléphone à …','Ich rufe … an'],['Et toi? Tu t’appelles comment?','Frage am Schluss'],['Au revoir!','Verabschiedung']],
  checks:[['Begrüßung (Bonjour! / Salut!)','bonjour|salut'],['Name (Je m’appelle … / c’est moi, …)','m.\\s?appelle|c.\\s?est moi'],['Herkunft (Je suis de …)','je suis de'],['Schule oder Klasse (élève … / en sixième …)','[ée]l[eè]ve|sixi[eè]me|classe'],['mind. 3 Formen von être (suis, es, est, sommes …)','\\b(suis|es|est|sommes|[eê]tes|sont)\\b',3],['mind. 2 Verben auf -er (regarde, écoute, parle …)','\\b(regard|[ée]cout|t[ée]l[ée]phon|parl|pr[ée]sent)\\w*',2],['Schluss (Et toi? / Au revoir!)','et toi|au revoir'],['mind. 5 Sätze','SENT',5]],
  sample:L2(LEO).map(x=>x[1]),sampleNote:'Das ist Léos Text. Dein Text darf natürlich anders sein – Hauptsache, die Checkliste ist voll!'},
 chambre:{title:'Mein Text: «C’est ma chambre!»',who:'Jade',hint:'Beschreibe dein Zimmer (oder dein Traumzimmer) in mindestens 5–8 Sätzen. Denk an un / une / des!',
  frame:[['Salut! C’est …','Einleitung'],['Voilà ma chambre!','Das ist mein Zimmer!'],['Dans ma chambre, il y a …','In meinem Zimmer gibt es …'],['un lit','m.'],['une armoire','f.'],['une table','f.'],['une chaise','f.'],['une lampe','f.'],['une étagère','f.'],['un ordinateur','m.'],['des livres','Pl.'],['des posters','Pl.'],['Là, il y a …','Da gibt es …'],['Dans le coin, il y a …','In der Ecke …'],['Dans l’étagère, il y a …','Im Regal …'],['Voilà ma collection de …','Sammlung'],['Il y a des posters partout.','überall Poster'],['J’écoute des CD.','Was ich mache'],['Je regarde des B.D.','Was ich mache'],['C’est trop cool!','Das ist total cool!'],['Et toi? Qu’est-ce qu’il y a dans ta chambre?','Frage am Schluss']],
  checks:[['Einleitung (Voilà ma chambre! / C’est ma chambre.)','ma chambre'],['mind. 3× il y a','il y a',3],['mind. 6 Sachen mit un / une / des','\\b(un|une|des)\\s+[a-zàâçéèêëîïôûù]',6],['Wo? (là, dans le coin, dans l’étagère …)','\\blà|dans le coin|dans l.\\s?[ée]tag|dans l.\\s?armoire'],['mind. 1 Verb auf -er (j’écoute, je regarde …)','\\b(regard|[ée]cout|t[ée]l[ée]phon|parl|pr[ée]sent)\\w*'],['Schluss mit Frage (Et toi? …?)','\\?'],['mind. 5 Sätze','SENT',5]],
  sample:L2(JADE).map(x=>x[1]),sampleNote:'Das ist Jades Text. Tipp: Nimm nur Wörter, die du sicher kannst – lieber einfache, richtige Sätze!'},
};
window.CHAPTERS=[
/* ===== Block A ===== */
{id:'moi-text',block:'Teil A · C’est moi!',kind:'Mustertext',icon:'🙋',title:'Léo stellt sich vor',sub:'Hören, mitlesen, verstehen',lv:1,
html:track('leo')+tip('Lies den Text zweimal: einmal mit Ton, einmal leise. Tippe auf 🔊 neben einem Satz, um ihn einzeln zu hören.','📖')
 +reveal('🔍 Wie ist Léos Text aufgebaut?',steps(['<b>Begrüßung</b> und <b>Name</b>: Salut! Je me présente: c’est moi, Léo.','<b>Herkunft</b>: Je suis de Berlin.','<b>Schule und Klasse</b>: Je suis élève à Strasbourg. Je suis en sixième A.','<b>Lehrer</b> und <b>Freund</b>: Le professeur de français, c’est … / Voilà Lucas …','<b>Zu Hause</b> (Verben auf -er): je regarde, j’écoute, je téléphone …','<b>Schluss</b> mit Frage: Et toi? Tu t’appelles comment? Au revoir!'])),
ex:[
 tf('Richtig oder falsch? (Lies oder hör den Text.)',[['Léo est de Berlin.',true],['Léo est en cinquième.',false],['Le professeur de français, c’est Madame Fournier.',false],['Lucas et Léo sont ensemble dans la classe.',true],['À la maison, Léo regarde des B.D.',true]],'Léo ist in der <b>sixième</b> A, der Lehrer ist <b>Monsieur Martel</b>.',{au:'T:leo'}),
 mc('Woher kommt Léo?',['aus Berlin','aus Straßburg','aus Paris','Das steht nicht im Text.'],'«Je suis de Berlin.»',{au:'T:leo'}),
 mc('Was macht Léo zu Hause? (2 Dinge passen – wähle die Antwort mit beiden.)',['Er schaut Comics an und hört CDs.','Er spielt Gitarre und schaut Fotos an.','Er hört CDs und spricht Deutsch.','Er schaut Fotos an und ruft Clara an.'],'«À la maison, je regarde des B.D. et j’écoute des CD.»'),
 mc('Mit welchem Satz <b>beginnt</b> man eine Selbstvorstellung?',['Salut! Je me présente: c’est moi, Léo.','Au revoir!','Et toi? Tu t’appelles comment?','Il est très cool.'],'Am Anfang: Begrüßung und Name.',{fr:true}),
 mul('Tippe alle Formen von <b>être</b> an, die in Léos Text vorkommen.',[['je suis',1],['il est',1],['nous sommes',1],['c’est',1],['vous êtes',0],['ils sont',0]],'Im Text: je suis, c’est, il est, nous sommes.'),
 mul('Tippe alle <b>Verben auf -er</b> an, die in Léos Text vorkommen.',[['je regarde',1],['j’écoute',1],['je téléphone',1],['nous parlons',1],['je suis',0],['il y a',0]],'regarde, écoute, téléphone, parlons – alle Verben auf -er. «je suis» ist être.'),
 seg('Welcher Teil des Textes ist das?',['Anfang','Mitte','Schluss'],[['Salut! Je me présente.','Anfang'],['Je suis en sixième A.','Mitte'],['Au revoir!','Schluss'],['À la maison, j’écoute des CD.','Mitte']],'Anfang: Begrüßung · Mitte: Infos über dich · Schluss: Frage und Verabschiedung.'),
 mt('Was bedeutet das?',[['Je me présente.','Ich stelle mich vor.'],['Je suis de Berlin.','Ich komme aus Berlin.'],['Je suis en sixième A.','Ich bin in der 6A.'],['Tu t’appelles comment?','Wie heißt du?']],'Diese Sätze brauchst du für deinen eigenen Text.',{say:[['Léo','Je me présente. Je suis de Berlin. Je suis en sixième A. Tu t’appelles comment?']]}),
]},
{id:'moi-bausteine',kind:'Redemittel',icon:'🧱',title:'Bausteine: sich vorstellen',sub:'Die wichtigsten Sätze zum Anhören',lv:1,
html:card('Redemittel – C’est moi!','🧰',RM([['Begrüßung',['Bonjour!','Salut!']],['Name',['Je me présente: c’est moi, Clara.','Je m’appelle Clara.','Moi, c’est Clara.','Clara, avec un C.']],['Herkunft',['Je suis de Berlin.']],['Schule',['Je suis élève à Strasbourg.','Je suis en sixième A.']],['Lehrer/in',['Le professeur de français, c’est Monsieur Martel.','Il est très cool.','La professeur de français, c’est Madame Fournier.','Elle est très cool.']],['Freunde',['Voilà Karim. Karim et moi, nous sommes ensemble dans la classe.','C’est l’amie de Jade.']],['zu Hause',['À la maison, je regarde des B.D.','J’écoute des CD.','Je téléphone à Lucas.','Je parle avec Clara.']],['Schluss',['Et toi? Tu t’appelles comment?','Au revoir!','Salut!']]]))
 +attn(`<ul><li>${F('Je m’appelle')} – mit Apostroph und <b>ll</b> (nicht <s>Je mapelle</s>).</li><li>${F('Je suis de Berlin.')} – Herkunft mit <b>de</b> (nicht <s>Je suis von Berlin</s>).</li><li>${F('j’écoute')} – vor Vokal <b>j’</b> (nicht <s>je écoute</s>).</li><li>${F('il est')} = er ist – nicht mit <b>et</b> (und) verwechseln!</li></ul>`),
ex:[
 seg('Wozu gehört der Satz?',['Name','Herkunft','Schule','zu Hause'],[['Je m’appelle Yasmine.','Name'],['Je suis de Berlin.','Herkunft'],['Je suis en sixième A.','Schule'],['Je regarde des B.D.','zu Hause'],['Moi, c’est Karim.','Name']],'Name: Je m’appelle … / Moi, c’est … · Herkunft: Je suis de … · Schule: en sixième … · zu Hause: Verben auf -er.'),
 mc('Wie sagst du: „Ich komme aus Berlin.“?',['Je suis de Berlin.','Je suis à Berlin.','Je m’appelle Berlin.','C’est Berlin.'],'Herkunft: Je suis <b>de</b> …',{fr:true}),
 mc('Wie fragst du: „Wie heißt du?“',['Tu t’appelles comment?','Tu es comment?','Comment est-ce qu’on dit?','C’est qui?'],'Tu t’appelles comment?',{fr:true}),
 mc('Wie sagst du: „Ich bin in der 6B.“?',['Je suis en sixième B.','Je suis sixième B.','Je suis dans sixième B.','J’ai sixième B.'],'Je suis <b>en</b> sixième B.',{fr:true}),
 gap('Ergänze.','Je {0} Samira. Je {1} de Berlin. Je suis {2} sixième A.',[['m’appelle','suis','est'],['suis','m’appelle','es'],['en','à','de']],'Je m’appelle Samira. Je suis de Berlin. Je suis en sixième A.'),
 gap('Ergänze.','Le professeur de français, {0} Monsieur Martel. Il {1} très cool.',[['c’est','il est','et'],['est','et','es']],'c’est Monsieur Martel · Il est très cool.'),
 ord('Bilde den Satz.',['Je','suis','élève','à','Strasbourg','.'],'Je suis élève à Strasbourg.'),
 ord('Bilde den Satz.',['Clara','et','moi',',','nous','sommes','ensemble','dans','la','classe','.'],'Clara et moi, nous sommes ensemble dans la classe.'),
 ord('Bilde den Satz.',['À la maison',',','je','regarde','des','B.D.'],'À la maison, je regarde des B.D.'),
 ord('Bilde die Frage.',['Et','toi','?','Tu','t’appelles','comment','?'],'Et toi? Tu t’appelles comment?'),
 wr('Übersetze: „Ich heiße Noah.“',['Je m’appelle Noah.','Moi, c’est Noah.','C’est moi, Noah.'],'Je m’appelle Noah.',{strict:true}),
 wr('Übersetze: „Zu Hause höre ich CDs.“',['À la maison, j’écoute des CD.','À la maison j’écoute des CD.','J’écoute des CD à la maison.'],'À la maison, j’écoute des CD. – j’ vor Vokal, des CD ohne s.',{strict:true,lv:2}),
]},
{id:'moi-schreiben',kind:'Schreibwerkstatt',icon:'✍️',title:'Dein Text: C’est moi!',sub:'Mit Schreibrahmen und Checkliste',lv:2,
html:steps(['<b>Sammeln:</b> Name, woher, Schule/Klasse, Lehrer/in, Freund/in, was du zu Hause machst.','<b>Schreiben:</b> Tippe auf Bausteine und ergänze sie. Ganze Sätze mit Punkt!','<b>Prüfen:</b> Checkliste voll? Akzente (é, à)? Endungen (je regard<b>e</b>, nous somm<b>es</b>)?','<b>Vergleichen:</b> Erst dann die Beispiellösung öffnen.'])+writer('moi')
 +tip('In der Klassenarbeit hast du keine Bausteine zum Antippen. Schreibe deinen Text deshalb auch einmal mit der Hand ins Heft – am besten ohne Hilfe!','📝'),
ex:[
 wr('Steckbrief → Satz: <b>Name: Lucas</b>',['Je m’appelle Lucas.','Moi, c’est Lucas.','C’est moi, Lucas.','Je me présente: c’est moi, Lucas.'],'Je m’appelle Lucas.',{strict:true}),
 wr('Steckbrief → Satz: <b>Herkunft: Berlin</b>',['Je suis de Berlin.'],'Je suis de Berlin.',{strict:true}),
 wr('Steckbrief → Satz: <b>Klasse: 6A</b>',['Je suis en sixième A.','Je suis en 6e A.'],'Je suis en sixième A.',{strict:true}),
 wr('Steckbrief → Satz: <b>Französischlehrerin: Madame Fournier</b>',['La professeur de français, c’est Madame Fournier.','Le professeur de français, c’est Madame Fournier.','La prof de français, c’est Madame Fournier.'],'La professeur de français, c’est Madame Fournier.',{strict:true,lv:3}),
 wr('Steckbrief → Satz: <b>zu Hause: Comics anschauen</b>',['À la maison, je regarde des B.D.','Je regarde des B.D.','À la maison je regarde des B.D.','Je regarde des B.D. à la maison.','À la maison, je regarde des BD.','Je regarde des BD.'],'À la maison, je regarde des B.D.',{strict:true}),
 mc('Welcher Satz passt <b>nicht</b> in eine Selbstvorstellung?',['Il y a un hamac dans la cour.','Je suis de Berlin.','Je suis en sixième B.','J’écoute des CD.'],'Ein Hamac im Schulhof hat mit dir nichts zu tun 😉',{fr:true}),
 dl('Ergänze den Text.',[['Clara','Bonjour! Je {0}: c’est moi, Clara.'],['Clara','Je {1} de Berlin. Je {2} en sixième A.'],['Clara','Jade et moi, nous {3} ensemble dans la classe.']],[['me présente','m’appelle','présente'],['suis','es','est'],['suis','sommes','es'],['sommes','sont','êtes']],'me présente · suis · suis · sommes.'),
]},
/* ===== Block B ===== */
{id:'chambre-text',block:'Teil B · C’est ma chambre!',kind:'Mustertext',icon:'🛏️',title:'Jade zeigt ihr Zimmer',sub:'Hören, mitlesen, im Bild finden',lv:1,
html:card('La chambre de Jade','🖼️','<div class="roomwrap">'+window.ROOMS.jade.svg+'</div>')+track('jade')
 +reveal('🔍 Wie ist Jades Text aufgebaut?',steps(['<b>Einleitung</b>: Salut! C’est Jade. Voilà ma chambre!','<b>Möbel</b> mit il y a: un lit, une armoire, une étagère …','<b>Wo?</b> Dans l’étagère … / Là, dans le coin … / Dans le coin musique …','<b>Lieblingssachen</b>: ma collection de pierres, le hamac','<b>Was sie macht</b>: J’écoute … / je regarde …','<b>Schluss</b> mit Frage: Et toi? Qu’est-ce qu’il y a dans ta chambre?'])),
ex:[
 mc('Qu’est-ce qu’il y a dans l’étagère de Jade?',['des livres et des B.D.','des CD et une minichaîne','des pierres','un ordinateur'],'«Dans l’étagère, il y a des livres et des B.D.»',{au:'T:jade',fr:true}),
 mc('Voilà ma collection de …?',['pierres','B.D.','CD','posters'],'«Et voilà ma collection de pierres!»',{au:'T:jade',fr:true}),
 mc('Qu’est-ce qu’il y a dans le coin musique?',['une minichaîne et des CD','une guitare et des CD','un ordinateur et une table','des posters'],'«Dans le coin musique, il y a une minichaîne et des CD.»',{au:'T:jade',fr:true}),
 tf('Richtig oder falsch?',[['Dans la chambre de Jade, il y a un hamac.',true],['Il y a une guitare.',false],['Il y a des posters partout.',true],['Dans le coin, il y a une table, une chaise et un ordinateur.',true]],'Eine Gitarre kommt in Jades Text nicht vor.',{au:'T:jade'}),
 mark('Markiere alle Möbel, die Jade im <b>2. Satz</b> nennt.','jade',['lit','armoire','etagere'],'«Dans ma chambre, il y a un lit, une armoire et une étagère.»',{au:[['Jade','Dans ma chambre, il y a un lit, une armoire et une étagère.']]}),
 clk('Hör zu und tippe im Bild an.','jade','pierre','«Et voilà ma collection de pierres!»',{au:[['Jade','Et voilà ma collection de pierres!']]}),
 clk('Hör zu und tippe im Bild an.','jade','minichaine','une minichaîne = eine Mini-Stereoanlage.',{au:[['Jade','Dans le coin musique, il y a une minichaîne.']]}),
 mt('Was bedeutet das?',[['partout','überall'],['dans le coin','in der Ecke'],['le coin musique','die Musikecke'],['la collection','die Sammlung'],['C’est trop cool!','Das ist total cool!']],'Diese Wörter machen deinen Text lebendig.',{say:[['','partout, dans le coin, le coin musique, la collection, C’est trop cool!']]}),
]},
{id:'chambre-bausteine',kind:'Redemittel',icon:'🧱',title:'Bausteine: mein Zimmer',sub:'il y a + un / une / des, Wo?',lv:2,
html:card('Redemittel – C’est ma chambre!','🧰',RM([['Einleitung',['Salut! C’est Noah.','Voilà ma chambre!','C’est ma chambre.']],['Möbel',['Dans ma chambre, il y a un lit, une table et une chaise.']],['Wo?',['Là, il y a une lampe.','Dans le coin, il y a un ordinateur.','Dans l’étagère, il y a des livres.','Dans l’armoire, il y a des B.D.']],['Lieblingssachen',['Voilà ma collection de figurines!','Dans le coin musique, il y a une guitare.','Il y a des posters partout.']],['Was ich mache',['J’écoute des CD.','Je regarde des photos.']],['Schluss',['C’est trop cool!','Et toi? Qu’est-ce qu’il y a dans ta chambre?']]]))
 +merk('⭐ Merkkasten: il y a + Artikel',`<p>${F('il y a')} = es gibt. Danach steht meist der <b>unbestimmte Artikel</b>:</p><p>${G('un','lit','m')} ${G('une','lampe','f')} ${G('des','posters','p')}</p><p>Aber: ${F('Voilà ma chambre!')} / ${F('Et voilà le hamac.')} – bei voilà kann auch le / la / ma stehen.</p><p>Plural: <b>des</b> + Nomen mit <b>-s</b> (des poster<b>s</b>, des livre<b>s</b>) – Ausnahme: <b>des CD</b>, <b>des B.D.</b></p>`),
ex:[
 gap('Setze un, une oder des ein.','Dans ma chambre, il y a {0} lit, {1} armoire et {2} posters.',[['un','une','des'],['une','un','des'],['des','un','une']],'un lit (m.) · une armoire (f.) · des posters (Pl.).'),
 gap('Setze un, une oder des ein.','Dans le coin, il y a {0} ordinateur et {1} chaise.',[['un','une','des'],['une','un','des']],'un ordinateur (m.) · une chaise (f.).'),
 gap('Setze un, une oder des ein.','Dans l’étagère, il y a {0} livres et {1} globe.',[['des','un','une'],['un','une','des']],'des livres (Pl.) · un globe (m.).'),
 gap('Ergänze.','{0} ma chambre! Dans ma chambre, {1} un hamac. C’est {2} cool!',[['Voilà','Il y a','Regarde'],['il y a','voilà','c’est'],['trop','très','bien']],'Voilà ma chambre! · il y a un hamac · C’est trop cool!'),
 ord('Bilde den Satz.',['Dans','ma','chambre',',','il y a','un','lit','et','une','armoire','.'],'Dans ma chambre, il y a un lit et une armoire.'),
 ord('Bilde den Satz.',['Là',',','dans','le','coin',',','il y a','une','guitare','.'],'Là, dans le coin, il y a une guitare.'),
 ord('Bilde die Frage.',['Qu’est-ce qu’','il y a','dans','ta','chambre','?'],'Qu’est-ce qu’il y a dans ta chambre?'),
 wr('Übersetze: „In meinem Zimmer gibt es einen Tisch.“',['Dans ma chambre, il y a une table.','Dans ma chambre il y a une table.','Il y a une table dans ma chambre.'],'la table ist weiblich → <b>une</b> table!',{strict:true}),
 wr('Übersetze: „Überall gibt es Poster.“',['Il y a des posters partout.','Partout, il y a des posters.','Partout il y a des posters.'],'Il y a des posters partout.',{strict:true,lv:3}),
 clk('Hör zu und tippe im Bild an.','jade','armoire','«Il y a une armoire.»',{au:[['Jade','Il y a une armoire.']]}),
 mark('Hör zu: Was steht <b>in der Ecke</b>? Markiere alles.','jade',['table','chaise','ordinateur'],'«Là, dans le coin, il y a une table, une chaise et un ordinateur.»',{au:[['Jade','Là, dans le coin, il y a une table, une chaise et un ordinateur.']]}),
]},
{id:'chambre-schreiben',kind:'Schreibwerkstatt',icon:'✍️',title:'Dein Text: C’est ma chambre!',sub:'Zeichnen, beschriften, beschreiben',lv:2,
html:steps(['<b>Zeichnen:</b> Zeichne dein Zimmer (oder dein Traumzimmer) auf Papier und beschrifte es mit <b>un / une / des</b>.','<b>Schreiben:</b> Mindestens 5–8 Sätze. Nutze <b>il y a</b> mehrmals und sag, <b>wo</b> etwas ist.','<b>Prüfen:</b> Stimmt der Artikel (m./f./Pl.)? Plural-s? Frage am Schluss?','<b>Vergleichen:</b> Erst dann die Beispiellösung öffnen.'])+writer('chambre'),
ex:[
 gapw('Beschreibe Jades Zimmer: Schreibe den Artikel.','Il y a {0} hamac, {1} étagère et {2} posters.',[['un'],['une'],['des']],'un hamac (m.) · une étagère (f.) · des posters (Pl.).'),
 gapw('Beschreibe Jades Zimmer: Schreibe die fehlenden Wörter.','Dans {0} chambre, {1} {2} lit.',[['ma'],['il y a'],['un']],'Dans ma chambre, il y a un lit.',{strict:true,lv:3}),
 mc('Welcher Satz ist richtig?',['Il y a des posters partout.','Il y a des poster partout.','Il y a une posters partout.','Il y a un posters partout.'],'des + Plural-s: des posters.',{fr:true}),
 mc('Welcher Satz ist richtig?',['Dans ma chambre, il y a une armoire.','Dans ma chambre, il y a un armoire.','Dans ma chambre, il y a une armoires.','Dans ma chambre, il est une armoire.'],'l’armoire ist weiblich → une armoire. Und: „es gibt“ = il y a.',{fr:true}),
 seg('Passt der Satz in eine Zimmerbeschreibung?',['passt','passt nicht'],[['Voilà ma chambre!','passt'],['Je suis en sixième A.','passt nicht'],['Dans le coin, il y a une lampe.','passt'],['Le professeur de français, c’est Monsieur Martel.','passt nicht']],'Bei der Zimmerbeschreibung geht es um Möbel, Sachen und wo sie sind.'),
 wr('Schreibe einen Satz über Jades Zimmer mit <b>Dans l’étagère, il y a …</b>',['Dans l’étagère, il y a des livres et des B.D.','Dans l’étagère, il y a des livres.','Dans l’étagère, il y a des B.D.','Dans l’étagère, il y a des B.D. et des livres.','Dans l’étagère, il y a des livres et des BD.','Dans l’étagère, il y a des BD.'],'Dans l’étagère, il y a des livres et des B.D.',{strict:true,lv:3}),
]},
/* ===== Fehler ===== */
{id:'fehler',block:'Zum Schluss',kind:'Fehlerdetektiv',icon:'🕵️',title:'Fehlerdetektiv: Texte prüfen',sub:'So korrigierst du deinen eigenen Text',lv:2,
html:attn(`<table class="t"><tr><th>✗ falsch</th><th>✓ richtig</th></tr>
 <tr><td><s>Je mapelle Léo.</s></td><td>${F('Je m’appelle Léo.')}</td></tr><tr><td><s>Je suis von Berlin.</s></td><td>${F('Je suis de Berlin.')}</td></tr>
 <tr><td><s>Il et très cool.</s></td><td>${F('Il est très cool.')}</td></tr><tr><td><s>je ecoute / je écoute</s></td><td>${F('j’écoute')}</td></tr>
 <tr><td><s>Lucas et moi, nous sont …</s></td><td>${F('Lucas et moi, nous sommes …')}</td></tr><tr><td><s>il y a une lit</s></td><td>${F('il y a un lit')}</td></tr>
 <tr><td><s>des poster</s></td><td>${F('des posters')}</td></tr><tr><td><s>une ordinateur</s></td><td>${F('un ordinateur')}</td></tr></table>`,'Attention! Typische Fehler in Texten')
 +tip('<b>Korrektur-Runde für deinen Text:</b> 1. Jeder Satz mit Großbuchstabe und Punkt? 2. être richtig (suis, es, est, sommes, êtes, sont)? 3. Verben auf -er mit richtiger Endung? 4. un/une/des passt zum Nomen? 5. Akzente und j’ / m’ / l’?','🔍'),
ex:[
 det('Fehlerdetektiv: Finde die Fehler in Samiras Text.','Salut! Je [mapelle|m’appelle] Samira. Je suis de Berlin. Je [et|suis] en sixième A. Jade et moi, nous [sont|sommes] ensemble dans la classe. À la maison, [je écoute|j’écoute] des CD.','m’appelle · suis · sommes · j’écoute.'),
 det('Fehlerdetektiv: Finde die Fehler in Karims Text.','Voilà ma chambre! Dans ma chambre, il y a [une|un] lit et [un|une] armoire. Il y a des [poster|posters] partout. Dans le coin, il y a [une|un] ordinateur.','un lit · une armoire · des posters · un ordinateur.'),
 det('Fehlerdetektiv: Finde die Fehler.','Le professeur de français, c’est Monsieur Martel. Il [et|est] très cool. Clara et Yasmine [est|sont] dans la cour. Et toi? Tu [tapelles|t’appelles] comment?','est · sont · t’appelles.'),
 mc('Welcher Satz ist richtig?',['Lucas et moi, nous sommes ensemble dans la classe.','Lucas et moi, nous sont ensemble dans la classe.','Lucas et moi, nous est ensemble dans la classe.','Lucas et moi, nous êtes ensemble dans la classe.'],'… et moi = nous → nous sommes.',{fr:true}),
 wr('Verbessere: «Je suis von Strasbourg.»',['Je suis de Strasbourg.'],'Herkunft: Je suis de …',{strict:true}),
 wr('Verbessere: «Il y a une ordinateur.»',['Il y a un ordinateur.'],'l’ordinateur ist männlich → un ordinateur.',{strict:true}),
 wr('Verbessere: «Je ecoute des CD.»',['J’écoute des CD.'],'Vor Vokal: j’ – und écoute mit é.',{strict:true}),
]},
];
window.TEST_EX=[
 det('Fehlerdetektiv: Korrigiere Lucas’ Text (5 Fehler).','Bonjour! Je [mapelle|m’appelle] Lucas. Je suis [von|de] Berlin. Je suis en sixième A. Léo et moi, nous [sont|sommes] ensemble dans la classe. Dans ma chambre, il y a [une|un] lit et des [poster|posters].','m’appelle · de · sommes · un lit · des posters.',{ref:'fehler',tag:'Texte korrigieren'}),
 gap('Ergänze den Text.','Salut! Je {0} Yasmine. Je {1} de Berlin. À la maison, {2} des CD. Dans ma chambre, il y a {3} armoire et {4} hamac. Et toi? {5} il y a dans ta chambre?',[['m’appelle','suis','est'],['suis','es','m’appelle'],['j’écoute','je écoute','j’écoutes'],['une','un','des'],['un','une','des'],['Qu’est-ce qu’','C’est qui','Comment']],'m’appelle · suis · j’écoute · une armoire · un hamac · Qu’est-ce qu’il y a …?',{ref:'moi-bausteine',tag:'Redemittel'}),
 wr('Übersetze: „Ich bin Schülerin in Straßburg. Ich bin in der 6B.“',['Je suis élève à Strasbourg. Je suis en sixième B.','Je suis élève à Strasbourg. Je suis en 6e B.'],'Je suis élève à Strasbourg. Je suis en sixième B.',{strict:true,ref:'moi-schreiben',tag:'Sich vorstellen'}),
 wr('Übersetze: „In der Ecke gibt es eine Lampe.“',['Dans le coin, il y a une lampe.','Dans le coin il y a une lampe.','Il y a une lampe dans le coin.'],'Dans le coin, il y a une lampe.',{strict:true,ref:'chambre-bausteine',tag:'Zimmer beschreiben'}),
 mark('Hör zu: Was gibt es in Jades Zimmer? Markiere alles, was du hörst.','jade',['lit','hamac','cd','photo'],'Du hörst: un lit, un hamac, des CD und des photos.',{au:[['Jade','Voilà ma chambre! Il y a un lit et un hamac. J’écoute des CD et je regarde des photos.']],ref:'chambre-text',tag:'Hören: Zimmer'}),
];
/* Pro Durchgang: so viele Aufgaben je Kapitel (Rest = Reserve-Pool); Pflichtaufgaben zu den Heftfehlern */
H.setRun({'moi-text':3,'moi-bausteine':4,'moi-schreiben':3,'chambre-text':3,'chambre-bausteine':4,'chambre-schreiben':3,fehler:3},{fehler:[0],test:[0]});
/* INTRO */
H.setIntro({
_lesson:{t:'Eigene Texte schreiben',
 was:'In der Arbeit schreibst du wahrscheinlich einen kurzen Text: <b>dich vorstellen</b> (C’est moi!) oder <b>dein Zimmer beschreiben</b> (C’est ma chambre!).',
 warum:'Ein guter Text hat einen klaren Aufbau, ganze Sätze und richtige Formen. Mit Bausteinen (fertigen Satzanfängen) schaffst du das sicher.',
 schritte:['<b>Sammeln:</b> Was willst du sagen? (Name, Herkunft, Klasse … oder: Möbel, Sachen, wo sie sind.)','<b>Bausteine nehmen:</b> Je m’appelle … / Je suis de … / Dans ma chambre, il y a …','<b>Schreiben:</b> ganze Sätze mit Punkt, 5–8 Sätze.','<b>Prüfen:</b> Verbformen, Artikel, Akzente, Plural-s.'],
 bsp:[['Salut! Je m’appelle Léo.','Hallo! Ich heiße Léo.'],['Je suis de Berlin.','Ich bin aus Berlin.'],['Je suis en sixième A.','Ich bin in der 6A.'],['Dans ma chambre, il y a un lit et une table.','In meinem Zimmer gibt es ein Bett und einen Tisch.'],['Il y a des posters partout.','Überall gibt es Poster.']],
 merk:'Begrüßung – Infos in ganzen Sätzen – Schluss. Danach alles prüfen!',
 fallen:['<b>Je suis de Berlin</b> – nicht „von“.','<b>il est</b> (ist) – nicht „il et“ (und).','<b>j’écoute</b> – nicht „je écoute“.','Mit „… et moi“: <b>nous sommes</b> (oder on est).','<b>il y a un / une / des</b> – nicht le / la.'],
 check:['Bausteine auswählen.','Sätze schreiben.','Checkliste abhaken: Formen, Artikel, Akzente.']},
'moi-text':{rule:"Ein Vorstellungstext hat einen Aufbau: Begrüßung und Name – Herkunft, Schule, Klasse – Lehrer und Freunde – was du gern machst – Schluss.",t:'Mustertext: sich vorstellen',
 was:'Léo stellt sich vor. Lies und hör seinen Text. Achte darauf, <b>wie</b> er aufgebaut ist – so kannst du deinen eigenen Text genauso bauen.',
 schritte:['Begrüßung und Name.','Woher kommt er? Welche Schule, welche Klasse?','Lehrer, Freunde, was er gern macht.','Schluss / Verabschiedung.'],
 bsp:[['Salut! Je me présente: c’est moi, Léo.','Hallo! Ich stelle mich vor: Das bin ich, Léo.','Léo'],['Je suis de Berlin.','Ich bin aus Berlin.','Léo'],['Je suis élève à Strasbourg.','Ich bin Schüler in Straßburg.','Léo'],['À la maison, j’écoute des CD.','Zu Hause höre ich CDs.','Léo']],
 merk:'Ein Text hat einen Aufbau: Anfang – Infos – Schluss.',
 fallen:['<b>élève</b> mit zwei Akzenten.','<b>à</b> Strasbourg (in) – mit Akzent.'],
 check:['Lesen und hören.','Aufbau erkennen.','Fragen beantworten.']},
'moi-bausteine':{rule:"Name: Je m’appelle … · Herkunft: Je suis de … · Klasse: Je suis en sixième … · Freunde: … et moi, nous sommes …",t:'Bausteine: sich vorstellen',
 was:'Bausteine sind fertige Satzanfänge. Du musst nur noch deine eigenen Infos einsetzen.',
 schritte:['Name: <i>Je m’appelle … / Moi, c’est …</i>','Herkunft: <i>Je suis de …</i>','Schule: <i>Je suis en sixième A. / Je suis élève à …</i>','Freunde: <i>… et moi, nous sommes ensemble.</i>'],
 bsp:[['Je m’appelle Clara.','Ich heiße Clara.'],['Moi, c’est Clara.','Ich bin Clara.'],['Je suis en sixième A.','Ich bin in der 6A.'],['Le professeur de français, c’est Monsieur Martel.','Der Französischlehrer ist Monsieur Martel.'],['Jade et moi, on est ensemble.','Jade und ich sind zusammen.']],
 merk:'je m’appelle (zwei p, zwei l) · je suis de … · … et moi, nous sommes / on est …',
 fallen:['<b>je m’appelle</b>: Apostroph und zwei l – nicht „je mapelle“.','<b>Jade et moi, nous sommes</b> – nicht „nous sont“.'],
 check:['Baustein wählen.','Lücke füllen.','Form prüfen.']},
'moi-schreiben':{rule:"Nimm die Bausteine (Je m’appelle …, Je suis de …, Je suis en sixième …) und schreib ganze Sätze mit Punkt.",t:'Dein Text: C’est moi!',
 was:'Jetzt schreibst du deinen eigenen Text über dich. Nutze die Bausteine und die Checkliste.',
 schritte:['Sammle Stichpunkte (Name, woher, Klasse, Lehrer/in, Freund/in, zu Hause).','Schreib mit den Bausteinen ganze Sätze.','Prüfe mit der Checkliste.','Vergleiche erst danach mit dem Mustertext.'],
 bsp:[['Bonjour! Je m’appelle Noah.','Guten Tag! Ich heiße Noah.'],['Je suis élève en sixième.','Ich bin Schüler in der 6. Klasse.'],['À la maison, je regarde des photos.','Zu Hause schaue ich Fotos an.']],
 merk:'Lieber kurze, richtige Sätze als lange mit Fehlern.',
 fallen:['Nach je kommt -e (je regard<b>e</b>), nach nous -ons.','Am Satzende Punkt.'],
 check:['Sammeln.','Schreiben.','Prüfen.']},
'chambre-text':{rule:"Eine Zimmerbeschreibung: Voilà ma chambre! – Il y a + un / une / des … – wo etwas ist (dans le coin, là …).",t:'Mustertext: das Zimmer',
 was:'Jade beschreibt ihr Zimmer. Lies und hör ihren Text. Achte auf <b>il y a</b> + un / une / des und darauf, wie sie sagt, <b>wo</b> etwas ist.',
 schritte:['Einleitung: <i>Voilà ma chambre!</i>','Möbel: <i>Il y a un lit, une table …</i>','Wo? <i>Dans le coin … / Là …</i>','Was sie besonders mag (die Sammlung).'],
 bsp:[['Voilà ma chambre!','Das ist mein Zimmer!','Jade'],['Il y a un lit et une armoire.','Es gibt ein Bett und einen Schrank.','Jade'],['Dans le coin, il y a un hamac.','In der Ecke gibt es eine Hängematte.','Jade'],['Il y a des posters partout.','Überall gibt es Poster.','Jade']],
 merk:'il y a + un / une / des – damit sagst du, was es gibt.',
 fallen:['<b>partout</b> = überall.','<b>des CD</b> und <b>des B.D.</b> ohne s.'],
 check:['Lesen und hören.','Aufbau erkennen.','Fragen beantworten.']},
'chambre-bausteine':{rule:"Was es gibt: il y a + un (m.) / une (f.) / des (Plural, Nomen mit -s). Wo: dans le coin, là, dans l’étagère.",t:'Bausteine: mein Zimmer',
 was:'Mit diesen Bausteinen beschreibst du jedes Zimmer.',
 schritte:['Einleitung: <i>Voilà ma chambre! / C’est ma chambre.</i>','Was gibt es? <i>Dans ma chambre, il y a …</i>','Wo? <i>Dans le coin, … / Là, … / Dans l’étagère, …</i>','Bewertung: <i>Le hamac est super!</i>'],
 bsp:[['Dans ma chambre, il y a une table et une chaise.','In meinem Zimmer gibt es einen Tisch und einen Stuhl.'],['Là, il y a une lampe.','Da gibt es eine Lampe.'],['Dans l’étagère, il y a des livres.','Im Regal gibt es Bücher.'],['Le coin musique est super!','Die Musikecke ist super!']],
 merk:'Erst un / une / des (neu), dann le / la / les (bekannt).',
 fallen:['<i>Dans ma chambre, il y a <b>une</b> armoire</i> – nicht „un armoire“.'],
 check:['Baustein wählen.','Artikel prüfen.','Satz fertig schreiben.']},
'chambre-schreiben':{rule:"Il y a + un / une / des – und jedes Nomen mit dem richtigen Artikel und Plural-s.",t:'Dein Text: C’est ma chambre!',
 was:'Jetzt beschreibst du dein eigenes Zimmer (oder dein Traumzimmer).',
 schritte:['Zeichne dein Zimmer und beschrifte es mit un / une / des.','Schreib 5–8 Sätze mit il y a und sag, wo etwas ist.','Prüfe Artikel, Plural-s und Akzente.'],
 bsp:[['Voilà ma chambre!','Das ist mein Zimmer!'],['Il y a un ordinateur et une guitare.','Es gibt einen Computer und eine Gitarre.'],['Dans le coin, il y a une étagère.','In der Ecke gibt es ein Regal.']],
 merk:'il y a mehrmals benutzen – und jedes Nomen mit dem richtigen Artikel.',
 fallen:['Plural: des livre<b>s</b>, des photo<b>s</b>.'],
 check:['Zeichnen.','Schreiben.','Prüfen.']},
fehler:{rule:"Text prüfen: Passt die Verbform zur Person? Stimmt der Artikel? Apostroph (j’, m’, l’)? Akzente? Keine deutschen Wörter?",t:'Fehlerdetektiv: Texte prüfen',
 was:'In diesen Texten stecken typische Fehler. Wenn du sie findest, findest du sie auch in deinem eigenen Text.',
 schritte:['Lies jeden Satz.','Prüfe: Verbform, Artikel, Apostroph, Akzente, deutsche Wörter.','Tippe die Fehler an.'],
 bsp:[['Je m’appelle Léo.','nicht: <s>Je mapelle Léo.</s>'],['Je suis de Berlin.','nicht: <s>Je suis von Berlin.</s>'],['Il est très cool.','nicht: <s>Il et très cool.</s> – est = ist'],['Lucas et moi, nous sommes …','nicht: <s>nous sont</s>']],
 merk:'Text immer am Ende prüfen: Verb – Artikel – Akzente.',
 fallen:['j’écoute – nicht je écoute.'],
 check:['Lesen.','Prüfen.','Antippen.']}
});
