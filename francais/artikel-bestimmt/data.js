/* Lektion: Der bestimmte Artikel le, la, l', les */
const {F,G,conj,dlg,merk,attn,tip,hoer,card,reveal,tabs,track,steps,grp,ob,room,spk,spkLines}=H;
const {mc,pick,gap,gapw,ord,wr,mt,dl,clk,mark,mul,seg,tf,det}=X;
window.LESSON={slug:'artikel-bestimmt',title:'Der bestimmte Artikel',fr:'le · la · l’ · les',icon:'🏷️',color:'#0d9488',testN:18,
 intro:'Im Französischen ist jedes Nomen <b>männlich</b> oder <b>weiblich</b>. Das zeigt dir der Artikel: <b class="c-m">le</b> lit, <b class="c-f">la</b> chaise, <b>l’</b>armoire, <b class="c-p">les</b> posters. Hier lernst du, wann du welchen Artikel nimmst – mit Bildern, Farben und Hörübungen.'};
const ROOM=room('theo','La chambre de Théo',[
 ['poster',20,14,52,'le poster'],['armoire',332,100,68,'l’armoire'],['lit',4,112,108,'le lit'],['etagere',118,80,88,'l’étagère'],['minichaine',128,46,38,'la minichaîne'],
 ['table',214,112,80,'la table'],['ordinateur',220,78,44,'l’ordinateur'],['globe',264,82,40,'le globe'],['chaise',280,128,52,'la chaise'],['guitare',176,164,50,'la guitare'],['lampe',236,168,48,'la lampe']],{wx:100});
const D1=[
 ['Théo','Salut, Clara! Voilà ma chambre.','Hallo, Clara! Das ist mein Zimmer.'],
 ['Clara','Oh, cool! Le lit est super!','Oh, cool! Das Bett ist super!'],
 ['Théo','Regarde, là: la guitare et la minichaîne.','Schau mal, da: die Gitarre und die Stereoanlage.'],
 ['Clara','Et voilà l’ordinateur et le globe!','Und da sind der Computer und der Globus!'],
 ['Théo','Oui. Et l’étagère, c’est l’étagère de Lucas.','Ja. Und das Regal, das ist das Regal von Lucas.'],
 ['Clara','Et les posters sont partout. C’est trop cool!','Und die Poster sind überall. Das ist total cool!']];
const D2=[
 ['Jade','Pardon, Lucas. C’est le stylo de Noah?','Entschuldigung, Lucas. Ist das der Kuli von Noah?'],
 ['Lucas','Non, c’est le stylo de Karim.','Nein, das ist der Kuli von Karim.'],
 ['Jade','Et la règle?','Und das Lineal?'],
 ['Lucas','La règle, c’est la règle de Samira.','Das Lineal, das ist das Lineal von Samira.'],
 ['Jade','Et l’effaceur? C’est l’effaceur de Clara?','Und der Tintenkiller? Ist das der Tintenkiller von Clara?'],
 ['Lucas','Oui. Et voilà les crayons de couleur de Théo.','Ja. Und da sind die Buntstifte von Théo.'],
 ['Jade','Et le cahier?','Und das Heft?'],
 ['Lucas','Le cahier? Je ne sais pas.','Das Heft? Ich weiß es nicht.']];
const L2=l=>l.map(x=>[x[0],x[1]]);
const ART=['le','la','l’','les'];
const TAB=`<table class="gtab"><tr><th class="h"></th><th class="m">♂ männlich</th><th class="f">♀ weiblich</th><th class="p">Plural</th></tr>
 <tr><td class="rl">vor Konsonant</td><td><span class="big c-m">le</span>${G('le','lit','m')}</td><td><span class="big c-f">la</span>${G('la','chaise','f')}</td><td><span class="big c-p">les</span>${G('les','lits','p')}</td></tr>
 <tr><td class="rl">vor Vokal</td><td><span class="big c-m">l’</span>${G('l’','ordinateur','m')}</td><td><span class="big c-f">l’</span>${G('l’','armoire','f')}</td><td><span class="big c-p">les</span>${G('les‿','armoires','p')}</td></tr></table>`;
window.CHAPTERS=[
/* 1 */
{id:'entdecken',kind:'Einstieg',icon:'🔎',title:'Entdecken: Voilà ma chambre!',sub:'Théo zeigt Clara sein Zimmer – le, la, l’ oder les?',lv:1,
html:card('Hör zu und lies mit','🎧','<p>Clara besucht Théo. Hör genau hin: Vor jedem Gegenstand steht ein kleines Wort – der <b>Artikel</b>.</p>'+dlg('La chambre de Théo',D1,{bg:'chambre'}))
 +card('Théos Zimmer','🛏️',`<div class="roomwrap">${ROOM}</div><div class="objrow">${G('le','lit','m')}${G('le','globe','m')}${G('le','poster','m')}${G('la','guitare','f')}${G('la','chaise','f')}${G('la','lampe','f')}${G('l’','ordinateur','m')}${G('l’','étagère','f')}${G('les','posters','p')}</div>`)
 +reveal('🔍 Was fällt dir auf? Wann steht le, la, l’ oder les?',`<ul><li><b class="c-m">le</b> steht vor <b>männlichen</b> Nomen: le lit, le globe.</li><li><b class="c-f">la</b> steht vor <b>weiblichen</b> Nomen: la guitare, la chaise.</li><li><b>l’</b> steht vor einem <b>Vokal</b> (a, e, i, o, u, é …): l’ordinateur, l’étagère.</li><li><b class="c-p">les</b> steht vor allem, was <b>mehrere</b> sind: les posters.</li></ul><p>In dieser App sind männliche Wörter immer <b class="c-m">blau</b>, weibliche <b class="c-f">rot</b> und der Plural <b class="c-p">lila</b>.</p>`),
ex:[
 mul('Tippe alle Wörter an, die im Dialog mit <b>la</b> stehen.',[['guitare',1],['minichaîne',1],['lit',0],['globe',0],['ordinateur',0],['posters',0]],'la guitare, la minichaîne – aber <b>le</b> lit, <b>le</b> globe, <b>l’</b>ordinateur, <b>les</b> posters.'),
 mc('Was bedeutet «Le lit est super!»?',['Das Bett ist super!','Ein Bett ist super!','Die Betten sind super!','Das Zimmer ist super!'],'<i>le lit</i> = das Bett. le ist ein bestimmter Artikel (der, die, das).',{say:'Le lit est super!'}),
 mc('Warum heißt es <b>les</b> posters?',['Weil es mehrere Poster sind.','Weil poster weiblich ist.','Weil poster mit p anfängt.','Weil Théo es so mag.'],'les steht im Plural – bei männlichen <i>und</i> weiblichen Nomen.'),
 mc('Warum heißt es <b>l’</b>ordinateur und nicht „le ordinateur“?',['Weil ordinateur mit einem Vokal anfängt.','Weil ordinateur weiblich ist.','Weil es mehrere Computer sind.','Weil ordinateur ein langes Wort ist.'],'Vor einem Vokal wird le/la zu <b>l’</b>. Das klingt flüssiger: [lɔʁdinatœʁ].'),
 clk('Hör zu und tippe den Gegenstand im Bild an.','theo','guitare','Du hörst «Regarde la guitare!» – la guitare = die Gitarre.',{au:[['Théo','Regarde la guitare!']]}),
 clk('Hör zu und tippe den Gegenstand im Bild an.','theo','globe','Du hörst «Voilà le globe.» – le globe = der Globus.',{au:[['Théo','Voilà le globe.']]}),
 clk('Hör zu und tippe den Gegenstand im Bild an.','theo','armoire','Du hörst «L’armoire est là.» – l’armoire = der Schrank (im Französischen weiblich!).',{au:[['Clara','L’armoire est là.']]}),
 tf('Hör dir den Dialog an. Richtig oder falsch?',[['Le lit est super.',true],['L’étagère, c’est l’étagère de Clara.',false],['Les posters sont partout.',true]],'Das Regal ist von <b>Lucas</b>: «l’étagère, c’est l’étagère de Lucas».',{au:L2(D1)}),
]},
/* 2 */
{id:'regel',kind:'Regel',icon:'📐',title:'Die Regel: le, la, l’, les',sub:'männlich, weiblich, vor Vokal, Plural',lv:1,
html:card('Auf einen Blick','📋',TAB+'<p class="legend">Tippe auf 🔊 neben einem Wort, um es zu hören.</p>')
 +merk('⭐ Merkkasten: der bestimmte Artikel',`<ul><li><b class="c-m">le</b> + männliches Nomen: ${G('le','livre','m')} ${G('le','cahier','m')}</li><li><b class="c-f">la</b> + weibliches Nomen: ${G('la','table','f')} ${G('la','photo','f')}</li><li><b>l’</b> + Nomen mit Vokal am Anfang (egal ob m. oder f.): ${G('l’','école','f')} ${G('l’','ami','m')}</li><li><b class="c-p">les</b> + Plural (immer!): ${G('les','livres','p')} ${G('les','photos','p')}</li><li><b>Ausnahme:</b> ${G('le','hamac','m')} – hier gibt es kein l’, obwohl das Wort mit h anfängt.</li></ul>`)
 +card('Deutsch ≠ Französisch','🇩🇪',`<p>Das Geschlecht ist im Französischen oft <b>anders</b> als im Deutschen. Darum: <b>Lerne jedes Nomen mit Artikel!</b></p><table class="t"><tr><th>Deutsch</th><th>Französisch</th></tr>
 <tr><td><b>der</b> Stuhl</td><td>${G('la','chaise','f')}</td></tr><tr><td><b>der</b> Tisch</td><td>${G('la','table','f')}</td></tr><tr><td><b>das</b> Bett</td><td>${G('le','lit','m')}</td></tr>
 <tr><td><b>die</b> CD</td><td>${G('le','CD','m')}</td></tr><tr><td><b>das</b> Foto</td><td>${G('la','photo','f')}</td></tr><tr><td><b>der</b> Comic</td><td>${G('la','B.D.','f')}</td></tr>
 <tr><td><b>der</b> Schrank</td><td>${G('l’','armoire','f')} <small>(f.)</small></td></tr><tr><td><b>das</b> Regal</td><td>${G('l’','étagère','f')} <small>(f.)</small></td></tr><tr><td><b>der</b> Computer</td><td>${G('l’','ordinateur','m')} <small>(m.)</small></td></tr></table>`)
 +tip('<b>Trick für l’-Wörter:</b> Bei <b>l’</b> sieht man nicht, ob das Wort männlich oder weiblich ist. Lerne es zusätzlich mit <b>un / une</b>: l’armoire → <b>une</b> armoire (f.), l’ordinateur → <b>un</b> ordinateur (m.).','🧠'),
ex:[
 seg('le, la oder l’? Wähle den Artikel.',ART,[[ob('lit')+' lit','le'],[ob('chaise')+' chaise','la'],[ob('ordinateur')+' ordinateur','l’'],[ob('lampe')+' lampe','la'],[ob('globe')+' globe','le']],'le lit · la chaise · l’ordinateur · la lampe · le globe.'),
 seg('le, la oder l’? Wähle den Artikel.',ART,[[ob('armoire')+' armoire','l’'],[ob('livre')+' livre','le'],[ob('guitare')+' guitare','la'],[ob('etagere')+' étagère','l’'],[ob('table')+' table','la']],'l’armoire · le livre · la guitare · l’étagère · la table.'),
 seg('le, la, l’ oder les?',ART,[['garçon','le'],['fille','la'],['école','l’'],['posters','les'],['classe','la']],'le garçon · la fille · l’école · les posters · la classe.'),
 seg('le, la, l’ oder les?',ART,[[ob('stylo')+' stylo','le'],[ob('regle')+' règle','la'],[ob('effaceur')+' effaceur','l’'],[ob('cahier')+' cahier','le'],[ob('photo',3)+' photos','les']],'le stylo · la règle · l’effaceur · le cahier · les photos.'),
 mc('Welcher Artikel passt? «… hamac»',['le','l’','la','les'],'Ausnahme: <b>le hamac</b> – kein l’!',{fr:true,say:'le hamac'}),
 mc('Welcher Artikel passt? «… CD» (eine CD)',['le','la','l’','les'],'Achtung: Im Deutschen „die CD“, im Französischen <b>le CD</b> (männlich).',{fr:true,say:'le CD'}),
 mc('Welcher Artikel passt? «… photo» (ein Foto)',['la','le','l’','les'],'Im Deutschen „das Foto“, im Französischen <b>la photo</b> (weiblich).',{fr:true,say:'la photo'}),
 gap('Setze den bestimmten Artikel ein.','Voilà {0} chambre de Théo.',[['la','le','l’','les']],'chambre ist weiblich → la chambre.'),
 gap('Setze den bestimmten Artikel ein.','{0} ordinateur est super.',[['L’','Le','La','Les']],'ordinateur beginnt mit Vokal → L’ordinateur.'),
 wr('Schreibe das Nomen mit bestimmtem Artikel: <b>Schule</b>',['l’école'],'l’école – vor Vokal l’. Achte auf den Akzent é!',{lv:2}),
 wr('Schreibe das Nomen mit bestimmtem Artikel: <b>Stuhl</b>',['la chaise'],'la chaise – im Französischen weiblich!',{lv:2}),
 wr('Schreibe das Nomen mit bestimmtem Artikel: <b>Bett</b>',['le lit'],'le lit – männlich.',{lv:2}),
]},
/* 3 */
{id:'plural',kind:'Regel',icon:'👯',title:'Der Plural: les',sub:'les + Nomen + s – und warum man das s nicht hört',lv:1,
html:card('Aus eins mach viele','🔢',`<div class="bau"><span class="blk b-m">le<small>m.</small></span><span class="op">/</span><span class="blk b-f">la<small>f.</small></span><span class="op">/</span><span class="blk" style="background:#64748b">l’<small>vor Vokal</small></span><span class="op">→</span><span class="blk b-pl">les<small>Plural</small></span></div>
 <div class="objrow"><div class="objc m">${ob('livre')}${G('le','livre','m')}</div><div class="objc p">${ob('livre',3)}${G('les','livres','p')}</div><div class="objc f">${ob('photo')}${G('la','photo','f')}</div><div class="objc p">${ob('photo',3)}${G('les','photos','p')}</div><div class="objc f">${ob('armoire')}${G('l’','armoire','f')}</div><div class="objc p">${ob('armoire',3)}${G('les‿','armoires','p')}</div></div>`)
 +merk('⭐ Merkkasten: der Plural',`<ul><li>Im Plural heißt der Artikel <b>immer les</b> – egal ob männlich oder weiblich.</li><li>Das Nomen bekommt meistens ein <b>-s</b>: la photo → les photos. Dieses s <b>hört man nicht</b>!</li><li>Ohne -s bleiben: ${G('les','CD','p')} ${G('les','B.D.','p')}</li></ul>`)
 +hoer(`<ul><li>Weil man das -s nicht hört, erkennst du den Plural beim Hören am <b>Artikel</b>: ${F('le livre')} [lə] – ${F('les livres')} [le].</li><li>Vor einem Vokal wird <b>les</b> gebunden (Liaison): ${F('les‿élèves')} [lezelɛv], ${F('les‿amis')} [lezami]. Das s klingt dann wie ein weiches <b>s</b> [z].</li></ul>`),
ex:[
 wr('Setze in den Plural: <b>la fille</b>',['les filles'],'la → les, und ein stummes -s: les filles.'),
 wr('Setze in den Plural: <b>le garçon</b>',['les garçons'],'les garçons – mit ç!'),
 wr('Setze in den Plural: <b>l’élève</b>',['les élèves'],'les‿élèves – mit Liaison [lezelɛv].'),
 wr('Setze in den Plural: <b>le CD</b>',['les CD'],'les CD – ohne s!'),
 wr('Setze in den Plural: <b>la B.D.</b>',['les B.D.','les BD','les bédés','les bédé'],'les B.D. – ohne s!'),
 seg('Hör zu: Hörst du <b>le</b> oder <b>les</b>?',['le','les'],[['Satz 1','les','Regarde les livres!'],['Satz 2','le','Voilà le livre.'],['Satz 3','les','Les CD sont là.'],['Satz 4','le','Le poster est cool.']],'Den Plural hörst du nur am Artikel: le [lə] – les [le].',{sub:'Tippe auf 🔊 und entscheide.'}),
 seg('Hör zu: Hörst du <b>la</b> oder <b>les</b>?',['la','les'],[['Satz 1','la','Voilà la photo.'],['Satz 2','les','Voilà les photos.'],['Satz 3','les','Les chaises sont là.'],['Satz 4','la','La lampe est super.']],'la [la] – les [le]. Das -s von photos hört man nicht!',{sub:'Tippe auf 🔊 und entscheide.'}),
 pick('Hör zu: Welches Bild passt?',[[ob('livre',3),'les livres'],[ob('livre'),'le livre'],[ob('cahier'),'le cahier'],[ob('cahier',3),'les cahiers']],'Du hörst «les livres» – les = mehrere.',{au:'les livres'}),
 pick('Hör zu: Welches Bild passt?',[[ob('photo'),'la photo'],[ob('photo',3),'les photos'],[ob('poster'),'le poster'],[ob('poster',3),'les posters']],'Du hörst «la photo» – la = eine (weiblich).',{au:'la photo'}),
 mc('Welcher Plural ist richtig?',['les élèves','les élève','le élèves','les élévés'],'les + élève + s = les élèves.',{fr:true,lv:2}),
 mc('Wie spricht man «les amis» aus?',['[lezami] – mit Liaison','[leami] – ohne Bindung','[lesami] – mit scharfem s','[lami] – wie l’ami'],'Vor Vokal bindet man: les‿amis [lezami].',{say:'les amis',lv:2}),
]},
/* 4 */
{id:'szenen',kind:'Szenen & Hören',icon:'🎭',title:'Szenen: C’est le stylo de Karim',sub:'In der Klasse: Wem gehört was?',lv:2,
html:card('Wem gehört was?','✏️','<p>Nach der Stunde liegen überall Sachen herum. Jade fragt Lucas. Achte auf <b>le, la, l’, les</b> – und auf <span class="fr">de</span> = von.</p>'+dlg('Dans la classe',D2,{bg:'classe'}))
 +merk('⭐ Wann nimmt man den bestimmten Artikel?',`<ul><li>Wenn man <b>eine bestimmte</b> Sache meint: ${F('le stylo de Karim')} (der Kuli von Karim).</li><li>Wenn die Sache <b>schon bekannt</b> ist: ${F('Regarde la guitare!')}</li><li>Bei Fächern und Sprachen: ${F('le français')}</li></ul>`)
 +hoer(`<p>Diese Paare klingen verschieden – hör genau hin:</p><ul><li>${F('le')} [lə] – ${F('la')} [la] – ${F('les')} [le]</li><li>${F('l’ami')} und ${F('l’amie')} klingen <b>gleich</b>! Ob männlich oder weiblich, hörst du nur am Zusammenhang.</li></ul>`),
ex:[
 seg('Hör zu: le, la, l’ oder les?',ART,[['Satz 1','la','Voilà la règle de Samira.'],['Satz 2','le','C’est le stylo de Karim.'],['Satz 3','l’','C’est l’effaceur de Clara.'],['Satz 4','les','Regarde les crayons de couleur!']],'la règle · le stylo · l’effaceur · les crayons de couleur.',{sub:'Tippe auf 🔊 und wähle den Artikel.'}),
 seg('Hör zu: le, la, l’ oder les?',ART,[['Satz 1','les','Les élèves sont dans la cour.'],['Satz 2','l’','L’école est cool.'],['Satz 3','le','Le professeur est là.'],['Satz 4','la','La fille est nouvelle.']],'Les élèves · L’école · Le professeur · La fille.',{sub:'Tippe auf 🔊 und wähle den Artikel.'}),
 tf('Hör dir den Dialog an. Richtig oder falsch?',[['Le stylo, c’est le stylo de Noah.',false],['La règle, c’est la règle de Samira.',true],['L’effaceur, c’est l’effaceur de Clara.',true],['Le cahier, c’est le cahier de Théo.',false]],'Der Kuli gehört <b>Karim</b>. Beim Heft sagt Lucas: «Je ne sais pas.» – das wissen wir also nicht.',{au:L2(D2)}),
 mc('Hör zu: Wem gehört der Tintenkiller?',['Clara','Samira','Karim','Théo'],'«L’effaceur? C’est l’effaceur de Clara?» – «Oui.»',{au:[['Jade','Et l’effaceur? C’est l’effaceur de Clara?'],['Lucas','Oui.']]}),
 dl('Ergänze den Dialog mit le, la, l’ oder les.',[['Jade','C’est {0} règle de Lucas?'],['Samira','Non, c’est {1} règle de Noah.'],['Jade','Et {2} ordinateur?'],['Samira','C’est {3} ordinateur de Monsieur Martel.']],[['la','le','l’'],['la','le','les'],['l’','le','la'],['l’','le','la']],'la règle · la règle · l’ordinateur · l’ordinateur.'),
 gapw('Hör zu und ergänze den Artikel.','Voilà {0} classe de sixième A. {1} élèves sont dans {2} cour.',[['la'],['Les'],['la']],'la classe · Les élèves · la cour.',{au:'Voilà la classe de sixième A. Les élèves sont dans la cour.'}),
 clk('Hör zu und tippe den Gegenstand an.','theo','minichaine','«Voilà la minichaîne.» – die Mini-Stereoanlage.',{au:[['Théo','Voilà la minichaîne.']]}),
 clk('Hör zu und tippe den Gegenstand an.','theo','etagere','«L’étagère est super.» – das Regal (weiblich).',{au:[['Clara','L’étagère est super.']]}),
 clk('Hör zu und tippe den Gegenstand an.','theo','ordinateur','«Regarde l’ordinateur!» – der Computer (männlich).',{au:[['Théo','Regarde l’ordinateur!']]}),
 mc('Was bedeutet «C’est le cahier de Théo.»?',['Das ist das Heft von Théo.','Das ist ein Heft von Théo.','Das sind die Hefte von Théo.','Théo hat kein Heft.'],'le cahier = das Heft, de = von.',{say:'C’est le cahier de Théo.'}),
]},
/* 5 */
{id:'leicht',kind:'Training ★',icon:'🌱',title:'Training: leicht',sub:'Artikel sicher zuordnen',lv:1,
html:merk('🔁 Kurz wiederholt',TAB+'<p style="margin-top:8px">Und nicht vergessen: <b>le hamac</b> (kein l’), <b>les CD</b> und <b>les B.D.</b> (ohne s).</p>','blue'),
ex:[
 seg('le, la oder l’?',ART,[['coin','le'],['maison','la'],['ami','l’'],['pierre','la'],['papier','le']],'le coin · la maison · l’ami · la pierre · le papier.'),
 seg('le, la oder l’?',ART,[['classeur','le'],['figurine','la'],['étagère','l’'],['collection','la'],['crayon','le']],'le classeur · la figurine · l’étagère · la collection · le crayon.'),
 seg('Singular oder Plural? Welcher Artikel?',ART,[['livres','les'],['musique','la'],['cour','la'],['professeur','le'],['élèves','les']],'les livres · la musique · la cour · le professeur · les élèves.'),
 mt('Was gehört zusammen?',[['le','lit'],['la','chambre'],['l’','armoire'],['les','posters']],'le lit · la chambre · l’armoire · les posters.',{say:[['','le lit, la chambre, l’armoire, les posters']]}),
 mc('Welcher Artikel passt? «… guitare»',['la','le','l’','les'],'la guitare (f.).',{fr:true,say:'la guitare'}),
 mc('Welcher Artikel passt? «… école»',['l’','la','le','les'],'école beginnt mit Vokal → l’école.',{fr:true,say:'l’école'}),
 mc('Welcher Artikel passt? «… figurines»',['les','la','le','l’'],'figurines = Plural → les.',{fr:true,say:'les figurines'}),
 gap('Setze den Artikel ein.','{0} lampe est dans {1} chambre.',[['La','Le','L’'],['la','le','l’']],'La lampe · la chambre – beide weiblich.'),
 gap('Setze den Artikel ein.','{0} élèves sont dans {1} cour.',[['Les','Le','La'],['la','le','les']],'Les élèves (Plural) · la cour (f.).'),
 mc('Was bedeutet «la récréation»?',['die Pause','die Klasse','der Schulhof','die Schule'],'la récréation = die Pause (kurz: la récré).',{say:'la récréation'}),
]},
/* 6 */
{id:'mittel',kind:'Training ★★',icon:'🌿',title:'Training: mittel',sub:'Artikel schreiben, Plural bilden, Sätze ergänzen',lv:2,
html:tip('Jetzt schreibst du selbst. Denk an <b>l’</b> vor Vokal und an das <b>stumme -s</b> im Plural. Akzente nicht vergessen: l’<b>é</b>cole, l’<b>é</b>l<b>è</b>ve, l’<b>é</b>tag<b>è</b>re.','✍️'),
ex:[
 gapw('Schreibe den bestimmten Artikel.','{0} chaise, {1} hamac, {2} étagère, {3} posters',[['la'],['le'],['l’',"l'"],['les']],'la chaise · le hamac · l’étagère · les posters.'),
 gapw('Schreibe den bestimmten Artikel.','{0} ordinateur, {1} table, {2} CD (Plural), {3} garçon',[['l’',"l'"],['la'],['les'],['le']],'l’ordinateur · la table · les CD · le garçon.',{say:false}),
 wr('Schreibe mit bestimmtem Artikel: <b>Regal</b>',['l’étagère'],'l’étagère (f.) – mit é und è!'),
 wr('Schreibe mit bestimmtem Artikel: <b>Computer</b>',['l’ordinateur'],'l’ordinateur (m.).'),
 wr('Schreibe mit bestimmtem Artikel: <b>Fotos</b>',['les photos'],'les photos – mit stummem s.'),
 wr('Setze in den Plural: <b>l’amie</b>',['les amies'],'les‿amies – mit Liaison.'),
 wr('Setze in den Plural: <b>la chaise</b>',['les chaises'],'les chaises.'),
 gap('Ergänze den Text.','Voilà {0} chambre de Clara. {1} lit est super. {2} armoire est dans {3} coin.',[['la','le','l’'],['Le','La','L’'],['L’','La','Le'],['le','la','l’']],'la chambre · Le lit · L’armoire · le coin.'),
 ord('Bilde den Satz.',['Les élèves','sont','dans','la cour','.'],'Les élèves sont dans la cour.'),
 ord('Bilde den Satz.',['Le globe','est','dans','la chambre','de Théo','.'],'Le globe est dans la chambre de Théo.'),
 mc('Welche Reihe ist ganz richtig?',['la chaise, le lit, l’armoire, les CD','le chaise, la lit, l’armoire, les CD','la chaise, le lit, la armoire, les CDs','la chaise, le lit, l’armoire, le CD (Plural)'],'la chaise (f.) · le lit (m.) · l’armoire (Vokal) · les CD (Plural ohne s).',{fr:true,say:'la chaise, le lit, l’armoire, les CD'}),
]},
/* 7 */
{id:'schwer',kind:'Training ★★★',icon:'🌳',title:'Training: schwer',sub:'Übersetzen und ganze Texte – Klassenarbeitsniveau',lv:3,
html:tip('Klassenarbeitsniveau: Du übersetzt mit Artikel, setzt ganze Sätze in den Plural und ergänzt Texte ohne Hilfe. Lies jede Aufgabe genau!','🏋️'),
ex:[
 wr('Übersetze: „das Zimmer von Clara“',['la chambre de Clara'],'la chambre de Clara – de = von.'),
 wr('Übersetze: „der Schulhof“',['la cour'],'la cour – weiblich!'),
 wr('Übersetze: „die Schüler“',['les élèves'],'les élèves.'),
 wr('Übersetze: „Das Bett ist super.“',['Le lit est super.'],'Le lit est super.'),
 wr('Setze den ganzen Satz in den Plural: «La fille est dans la cour.»',['Les filles sont dans la cour.'],'La fille → Les filles, est → sont. «la cour» bleibt (es gibt nur einen Schulhof).'),
 wr('Setze den ganzen Satz in den Plural: «Le garçon est nouveau.»',['Les garçons sont nouveaux.'],'Les garçons sont nouveaux. – nouveau → nouveaux (mit x).'),
 gapw('Ergänze den bestimmten Artikel.','Voilà {0} chambre de Jade. {1} lit est dans {2} coin. Et voilà {3} hamac. {4} hamac est trop cool! Et {5} posters? Ils sont partout. {6} ordinateur est là.',[['la'],['Le'],['le'],['le'],['Le'],['les'],['L’',"L'"]],'la chambre · Le lit · le coin · le hamac · Le hamac · les posters · L’ordinateur.'),
 mt('Deutsch → Französisch: Was gehört zusammen?',[['der Stuhl','la chaise'],['das Regal','l’étagère'],['die CD','le CD'],['das Foto','la photo'],['der Comic','la B.D.']],'Das Geschlecht ist oft anders als im Deutschen!',{say:[['','la chaise, l’étagère, le CD, la photo, la B.D.']]}),
 mc('Welcher Satz ist richtig?',['L’élève est dans la classe.','Le élève est dans la classe.','La élève est dans le classe.','Les élève est dans la classe.'],'L’élève (Vokal) · la classe (f.).',{fr:true}),
 seg('Hör zu: Ist es <b>einer</b> oder sind es <b>mehrere</b>?',['einer','mehrere'],[['Satz 1','mehrere','Regarde les posters!'],['Satz 2','einer','Voilà le poster.'],['Satz 3','mehrere','Les élèves sont là.'],['Satz 4','einer','L’élève est là.']],'les [le] / les‿élèves [lez…] = mehrere · le [lə] / l’élève = einer.',{sub:'Tippe auf 🔊 und entscheide.'}),
]},
/* 8 */
{id:'fehler',kind:'Fehlerdetektiv',icon:'🕵️',title:'Fehlerdetektiv',sub:'Typische Artikel-Fehler finden und verbessern',lv:2,
html:attn(`<table class="t"><tr><th>✗ falsch</th><th>✓ richtig</th><th>Warum?</th></tr>
 <tr><td><s>le chambre</s></td><td>${G('la','chambre','f')}</td><td>chambre ist weiblich</td></tr>
 <tr><td><s>la lit</s></td><td>${G('le','lit','m')}</td><td>lit ist männlich (das Bett)</td></tr>
 <tr><td><s>le école</s></td><td>${G('l’','école','f')}</td><td>vor Vokal → l’</td></tr>
 <tr><td><s>l’hamac</s></td><td>${G('le','hamac','m')}</td><td>Ausnahme!</td></tr>
 <tr><td><s>les poster</s></td><td>${G('les','posters','p')}</td><td>Plural-s nicht vergessen</td></tr>
 <tr><td><s>les CDs</s></td><td>${G('les','CD','p')}</td><td>CD bleibt ohne s</td></tr>
 <tr><td><s>l’ecole</s></td><td>${G('l’','école','f')}</td><td>Akzent é!</td></tr></table>`,'Attention! Diese Fehler passieren oft')
 +tip('<b>Detektiv-Trick:</b> Prüfe bei jedem Nomen drei Dinge: 1. männlich oder weiblich? 2. Vokal am Anfang? 3. eins oder mehrere?','🔍'),
ex:[
 det('Fehlerdetektiv: Finde die Fehler in Claras Text.','Voilà [le|la] chambre de Clara. [La|Le] lit est super. [Le|L’] armoire est dans le coin. [L’hamac|Le hamac] est cool!','la chambre · Le lit · L’armoire · Le hamac.'),
 det('Fehlerdetektiv: Finde die Fehler.','[Le|L’] école est cool. [La|Les] élèves sont dans la cour. Regarde [les poster|les posters] et [les CDs|les CD]!','L’école · Les élèves · les posters · les CD.'),
 det('Fehlerdetektiv: Finde die Fehler.','[Le|La] guitare est dans le coin. [La|L’] ordinateur est super. [Le|La] photo de Karim est là.','La guitare · L’ordinateur · La photo.'),
 mc('Welche Form ist <b>falsch</b>?',['l’hamac','l’armoire','l’élève','l’ordinateur'],'«l’hamac» ist falsch – es heißt <b>le hamac</b>.',{fr:true,say:'le hamac'}),
 mc('Welche Form ist <b>falsch</b>?',['la lit','la table','la lampe','la chaise'],'«la lit» ist falsch – es heißt <b>le lit</b> (männlich).',{fr:true,say:'le lit'}),
 wr('Verbessere: «le chambre»',['la chambre'],'chambre ist weiblich → la chambre.'),
 wr('Verbessere: «la ordinateur»',['l’ordinateur'],'Vor Vokal → l’ordinateur.'),
 wr('Verbessere: «les élève»',['les élèves'],'Im Plural mit -s: les élèves.'),
]},
];
window.TEST_EX=[
 gapw('Setze den bestimmten Artikel ein (le, la, l’, les).','1. {0} chaise 2. {1} lit 3. {2} armoire 4. {3} posters 5. {4} garçon 6. {5} école 7. {6} hamac 8. {7} B.D. (Plural)',[['la'],['le'],['l’',"l'"],['les'],['le'],['l’',"l'"],['le'],['les']],'la chaise · le lit · l’armoire · les posters · le garçon · l’école · le hamac · les B.D.',{ref:'regel',tag:'Artikel einsetzen',say:false}),
 seg('Hör zu: le, la, l’ oder les?',ART,[['Satz 1','les','Les figurines sont là.'],['Satz 2','la','Regarde la photo!'],['Satz 3','l’','L’ami de Karim est là.'],['Satz 4','le','Le livre est dans l’étagère.']],'Les figurines · la photo · L’ami · Le livre.',{ref:'szenen',tag:'Hören: Artikel erkennen',sub:'Tippe auf 🔊 und wähle.'}),
 wr('Setze in den Plural: «l’élève»',['les élèves'],'les élèves.',{ref:'plural',tag:'Plural'}),
 wr('Setze in den Plural: «le CD»',['les CD'],'les CD – ohne s.',{ref:'plural',tag:'Plural'}),
 wr('Übersetze: „Die Lampe ist im Zimmer.“',['La lampe est dans la chambre.'],'La lampe est dans la chambre.',{ref:'schwer',tag:'Übersetzen'}),
 det('Fehlerdetektiv: Finde die 4 Fehler.','Voilà [le|la] classe de sixième A. [Le|Les] élèves sont dans la cour. [La|L’] étagère est dans [la|le] coin.','la classe · Les élèves · L’étagère · le coin.',{ref:'fehler',tag:'Fehler finden'}),
];
