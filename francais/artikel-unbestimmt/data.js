/* Lektion: Der unbestimmte Artikel un, une, des */
const {F,G,conj,dlg,merk,attn,tip,hoer,card,reveal,tabs,track,steps,grp,ob,room,spk,spkLines}=H;
const {mc,pick,gap,gapw,ord,wr,mt,dl,clk,mark,mul,seg,tf,det}=X;
window.LESSON={slug:'artikel-unbestimmt',title:'Der unbestimmte Artikel',fr:'un · une · des',icon:'🎁',color:'#c026d3',testN:18,
 intro:'<b class="c-m">un</b> lit, <b class="c-f">une</b> chaise, <b class="c-p">des</b> livres – mit dem unbestimmten Artikel sagst du, <b>was es gibt</b>. Du brauchst ihn vor allem für <span class="fr">Il y a …</span> und für die Beschreibung deines Zimmers.'};
room('noah','La chambre de Noah',[
 ['poster',20,14,46,'des posters',2],['armoire',330,100,68,'une armoire'],['hamac',4,92,96,'un hamac'],['lit',110,120,96,'un lit'],
 ['table',226,112,78,'une table'],['ordinateur',232,78,42,'un ordinateur'],['chaise',282,128,50,'une chaise'],['figurine',268,90,26,'des figurines',3],
 ['livre',184,178,36,'des livres',3],['guitare',190,26,48,'une guitare'],['lampe',252,166,44,'une lampe'],['cd',304,190,26,'des CD',3]],{wx:110});
const D1=[
 ['Yasmine','Salut, Noah! Qu’est-ce qu’il y a dans ta chambre?','Hallo, Noah! Was gibt es in deinem Zimmer?'],
 ['Noah','Dans ma chambre, il y a un lit, une table et une chaise.','In meinem Zimmer gibt es ein Bett, einen Tisch und einen Stuhl.'],
 ['Yasmine','Il y a aussi un ordinateur?','Gibt es auch einen Computer?'],
 ['Noah','Oui, il y a un ordinateur. Et il y a des livres et des posters.','Ja, es gibt einen Computer. Und es gibt Bücher und Poster.'],
 ['Yasmine','Et une guitare?','Und eine Gitarre?'],
 ['Noah','Oui, il y a une guitare. Et il y a un hamac!','Ja, es gibt eine Gitarre. Und es gibt eine Hängematte!'],
 ['Yasmine','Un hamac? C’est trop cool!','Eine Hängematte? Das ist total cool!']];
const D2=[
 ['Martel','Bonjour! Voilà la classe de sixième A.','Guten Tag! Das ist die Klasse 6A.'],
 ['Martel','Dans la classe, il y a des tables et des chaises.','In der Klasse gibt es Tische und Stühle.'],
 ['Martel','Il y a aussi un ordinateur et un globe.','Es gibt auch einen Computer und einen Globus.'],
 ['Martel','Et là, il y a une étagère. Dans l’étagère, il y a des livres et des B.D.','Und da gibt es ein Regal. Im Regal gibt es Bücher und Comics.']];
const L2=l=>l.map(x=>[x[0],x[1]]);
const ART=['un','une','des'];
const TAB=`<table class="gtab"><tr><th class="h"></th><th class="m">♂ männlich</th><th class="f">♀ weiblich</th><th class="p">Plural</th></tr>
 <tr><td class="rl">vor Konsonant</td><td><span class="big c-m">un</span>${G('un','lit','m')}</td><td><span class="big c-f">une</span>${G('une','chaise','f')}</td><td><span class="big c-p">des</span>${G('des','lits','p')}</td></tr>
 <tr><td class="rl">vor Vokal</td><td><span class="big c-m">un</span>${G('un‿','ordinateur','m')}</td><td><span class="big c-f">une</span>${G('une','armoire','f')}</td><td><span class="big c-p">des</span>${G('des‿','armoires','p')}</td></tr>
 <tr><td class="rl">Deutsch</td><td>ein</td><td>eine</td><td>– (wird nicht übersetzt)</td></tr></table>`;
const LEUN=`<table class="gtab"><tr><th class="h">bestimmt</th><th class="h"></th><th class="h">unbestimmt</th></tr>
 <tr><td>${G('le','lit','m')}</td><td>→</td><td>${G('un','lit','m')}</td></tr><tr><td>${G('la','lampe','f')}</td><td>→</td><td>${G('une','lampe','f')}</td></tr>
 <tr><td>${G('l’','ordinateur','m')}</td><td>→</td><td>${G('un','ordinateur','m')}</td></tr><tr><td>${G('l’','armoire','f')}</td><td>→</td><td>${G('une','armoire','f')}</td></tr>
 <tr><td>${G('les','livres','p')}</td><td>→</td><td>${G('des','livres','p')}</td></tr></table>`;
window.CHAPTERS=[
/* 1 */
{id:'entdecken',kind:'Einstieg',icon:'🔎',title:'Entdecken: Qu’est-ce qu’il y a?',sub:'Noah erzählt Yasmine von seinem Zimmer',lv:1,
html:card('Hör zu und lies mit','🎧','<p>Yasmine ist neugierig: Was gibt es in Noahs Zimmer? Achte auf die kleinen Wörter vor den Sachen.</p>'+dlg('Au téléphone',D1,{bg:'maison'}))
 +card('Noahs Zimmer','🛏️',`<div class="roomwrap">${ROOMS.noah.svg}</div><p class="legend">Im Zimmer gibt es: ${G('un','lit','m')} ${G('une','table','f')} ${G('une','chaise','f')} ${G('un','ordinateur','m')} ${G('des','livres','p')} ${G('des','posters','p')} ${G('une','guitare','f')} ${G('un','hamac','m')}</p>`)
 +reveal('🔍 Was fällt dir auf? Was bedeuten un, une und des?',`<ul><li><b class="c-m">un</b> = <b>ein</b> – vor männlichen Nomen: un lit, un ordinateur.</li><li><b class="c-f">une</b> = <b>eine</b> – vor weiblichen Nomen: une table, une chaise.</li><li><b class="c-p">des</b> = Plural – das übersetzt man <b>nicht</b>: des livres = Bücher.</li><li><span class="fr">il y a</span> = es gibt. <span class="fr">Qu’est-ce qu’il y a?</span> = Was gibt es?</li></ul>`),
ex:[
 mul('Was gibt es in Noahs Zimmer? Hör dir den Dialog an und tippe alles an, was Noah nennt.',[['un lit',1],['une table',1],['un ordinateur',1],['des livres',1],['un hamac',1],['une armoire',0],['un globe',0],['une lampe',0]],'Noah nennt: un lit, une table, une chaise, un ordinateur, des livres, des posters, une guitare, un hamac. Eine armoire, einen globe und eine lampe nennt er nicht.',{au:L2(D1)}),
 mc('Was bedeutet «Il y a un ordinateur.»?',['Es gibt einen Computer.','Das ist der Computer.','Da ist der Computer von Noah.','Es gibt Computer.'],'il y a = es gibt · un ordinateur = einen Computer.',{say:'Il y a un ordinateur.'}),
 mc('Was bedeutet «Il y a des livres.»?',['Es gibt Bücher.','Es gibt die Bücher.','Es gibt ein Buch.','Das sind Bücher von Noah.'],'des wird nicht übersetzt: des livres = Bücher.',{say:'Il y a des livres.'}),
 mc('Was fragt Yasmine mit «Qu’est-ce qu’il y a dans ta chambre?»',['Was gibt es in deinem Zimmer?','Wo ist dein Zimmer?','Wie ist dein Zimmer?','Wer ist in deinem Zimmer?'],'Qu’est-ce qu’il y a …? = Was gibt es …?',{say:'Qu’est-ce qu’il y a dans ta chambre?'}),
 clk('Hör zu und tippe im Bild an, was du hörst.','noah','hamac','«Il y a un hamac.» – un hamac = eine Hängematte (im Französischen männlich).',{au:[['Noah','Il y a un hamac.']]}),
 clk('Hör zu und tippe im Bild an, was du hörst.','noah','guitare','«Il y a une guitare.» – une guitare = eine Gitarre.',{au:[['Noah','Il y a une guitare.']]}),
 seg('un oder une? Schau auf die Farbe!',['un','une'],[[`<span class="c-m">lit</span>`,'un'],[`<span class="c-f">table</span>`,'une'],[`<span class="c-f">chaise</span>`,'une'],[`<span class="c-m">ordinateur</span>`,'un']],'Blau = männlich → un · Rot = weiblich → une.'),
 tf('Hör dir den Dialog an. Richtig oder falsch?',[['Dans la chambre de Noah, il y a un ordinateur.',true],['Il y a une armoire.',false],['Il y a un hamac.',true]],'Eine Armoire nennt Noah nicht. Ordinateur und hamac gibt es.',{au:L2(D1)}),
]},
/* 2 */
{id:'regel',kind:'Regel',icon:'📐',title:'Die Regel: un, une, des',sub:'ein, eine – und der Plural ohne Übersetzung',lv:1,
html:card('Auf einen Blick','📋',TAB)
 +merk('⭐ Merkkasten: der unbestimmte Artikel',`<ul><li><b class="c-m">un</b> + männliches Nomen: ${G('un','cahier','m')} ${G('un','stylo','m')}</li><li><b class="c-f">une</b> + weibliches Nomen: ${G('une','règle','f')} ${G('une','photo','f')}</li><li><b class="c-p">des</b> + Plural (m. und f.): ${G('des','crayons','p')} ${G('des','photos','p')}</li><li><b>Kein Apostroph!</b> Anders als bei le/la wird un/une vor Vokal <b>nicht</b> verkürzt: un ordinateur, une armoire.</li><li><b>des</b> übersetzt man nicht: ${F('Il y a des posters.')} = Es gibt Poster.</li></ul>`)
 +hoer(`<ul><li>${F('un')} [œ̃] klingt nasal – das n spricht man nicht.</li><li>${F('une')} [yn] – hier hörst du das <b>n</b>! (u wie „ü“)</li><li>${F('des')} [de] – wie „deh“.</li><li>Vor Vokal wird gebunden: ${F('un‿ordinateur')} [œ̃nɔʁdinatœʁ] · ${F('des‿armoires')} [dezaʁmwaʁ] · ${F('une‿étagère')} [ynetaʒɛʁ]</li></ul>`)
 +card('Il y a … – es gibt …','🏠',`<p>Nach <span class="fr">il y a</span> steht meistens <b>un, une</b> oder <b>des</b>:</p><p>${F('Dans ma chambre, il y a un lit, une table et des posters.')}</p><p>Und die Frage dazu: ${F('Qu’est-ce qu’il y a dans ta chambre?')}</p>`),
ex:[
 seg('un, une oder des?',ART,[[ob('lit')+' lit','un'],[ob('lampe')+' lampe','une'],[ob('livre',3)+' livres','des'],[ob('ordinateur')+' ordinateur','un'],[ob('armoire')+' armoire','une']],'un lit · une lampe · des livres · un ordinateur · une armoire.'),
 seg('un, une oder des?',ART,[[ob('poster')+' poster','un'],[ob('photo',3)+' photos','des'],[ob('etagere')+' étagère','une'],[ob('cahier')+' cahier','un'],[ob('figurine',3)+' figurines','des']],'un poster · des photos · une étagère · un cahier · des figurines.'),
 seg('un, une oder des?',ART,[[ob('guitare')+' guitare','une'],[ob('globe')+' globe','un'],[ob('cd',3)+' CD','des'],[ob('minichaine')+' minichaîne','une'],[ob('hamac')+' hamac','un']],'une guitare · un globe · des CD · une minichaîne · un hamac.'),
 mc('Was ist richtig?',['un ordinateur','un’ordinateur','une ordinateur','l’un ordinateur'],'Kein Apostroph bei un: <b>un ordinateur</b> (gebunden gesprochen: [œ̃nɔʁdinatœʁ]).',{fr:true}),
 mc('Was ist richtig?',['une armoire','un armoire','un’armoire','une’armoire'],'armoire ist weiblich → <b>une armoire</b>, ohne Apostroph.',{fr:true}),
 mc('Wie übersetzt du «des» in «Il y a des CD.»?',['gar nicht: Es gibt CDs.','mit „die“: Es gibt die CDs.','mit „ein“: Es gibt eine CD.','mit „von“: Es gibt von CDs.'],'des wird nicht übersetzt.',{say:'Il y a des CD.'}),
 gap('Setze un, une oder des ein.','Il y a {0} chaise et {1} lit.',[['une','un','des'],['un','une','des']],'une chaise (f.) · un lit (m.).'),
 gap('Setze un, une oder des ein.','Il y a {0} photos et {1} poster.',[['des','une','un'],['un','une','des']],'des photos (Pl.) · un poster (m.).'),
 wr('Schreibe mit unbestimmtem Artikel: <b>ein Buch</b>',['un livre'],'un livre (m.).'),
 wr('Schreibe mit unbestimmtem Artikel: <b>ein Regal</b>',['une étagère'],'une étagère (f.) – mit é und è!',{lv:2}),
 wr('Schreibe mit unbestimmtem Artikel: <b>Bücher</b> (mehrere)',['des livres'],'des livres – des wird im Deutschen nicht übersetzt.',{lv:2}),
 pick('Hör zu: Welches Bild passt?',[[ob('livre',3),'des livres'],[ob('livre'),'un livre'],[ob('photo'),'une photo'],[ob('photo',3),'des photos']],'Du hörst «Il y a des livres.» – des = mehrere.',{au:'Il y a des livres.',lv:2}),
]},
/* 3 */
{id:'le-un',kind:'Regel',icon:'⚖️',title:'le oder un? bestimmt oder unbestimmt?',sub:'Wann sagt man „der“ und wann „ein“?',lv:2,
html:card('Zuerst un – dann le','💡',`<p>Wenn du etwas <b>zum ersten Mal</b> nennst, nimmst du <b>un / une / des</b>. Wenn klar ist, <b>welche</b> Sache gemeint ist, nimmst du <b>le / la / l’ / les</b>:</p>
 <div class="dlg" style="margin-top:6px"><div class="row"><div class="av">${CHARS['Noah']}<span>Noah</span></div><div class="bub"><span class="tx">Il y a <span class="c-m">un</span> hamac. <span class="c-m">Le</span> hamac est super!<span class="deu">Es gibt eine Hängematte. Die Hängematte ist super!</span></span>${spk('Il y a un hamac. Le hamac est super!','Noah')}</div></div>
 <div class="row r"><div class="av">${CHARS['Jade']}<span>Jade</span></div><div class="bub"><span class="tx">Il y a <span class="c-f">une</span> étagère. Dans <span class="c-f">l’</span>étagère, il y a <span class="c-p">des</span> B.D.<span class="deu">Es gibt ein Regal. Im Regal gibt es Comics.</span></span>${spk('Il y a une étagère. Dans l’étagère, il y a des B.D.','Jade')}</div></div></div>`)
 +card('Umwandeln: bestimmt → unbestimmt','🔁',LEUN)
 +merk('⭐ Merkkasten',`<ul><li><span class="fr">il y a</span> + <b>un / une / des</b> (etwas Neues)</li><li><span class="fr">voilà</span>, <span class="fr">regarde</span>, <span class="fr">c’est … de …</span> + oft <b>le / la / les</b> (etwas Bestimmtes): ${F('Regarde le globe!')} ${F('C’est la guitare de Théo.')}</li><li>Der Trick für <b>l’</b>-Wörter: Mit un/une siehst du das Geschlecht: l’étagère → <b>une</b> étagère.</li></ul>`),
ex:[
 gap('Bestimmt oder unbestimmt?','Il y a {0} lit. {1} lit est super.',[['un','le'],['Le','Un']],'Erst nennen: un lit. Dann ist er bekannt: Le lit.'),
 gap('Bestimmt oder unbestimmt?','Dans ma chambre, il y a {0} guitare. {1} guitare est cool.',[['une','la'],['La','Une']],'une guitare – dann la guitare.'),
 gap('Bestimmt oder unbestimmt?','Il y a {0} posters. {1} posters sont partout.',[['des','les'],['Les','Des']],'des posters – dann les posters.'),
 seg('Wandle um: bestimmt → unbestimmt',ART,[['le livre →','un'],['la photo →','une'],['l’ordinateur →','un'],['l’étagère →','une'],['les CD →','des']],'le → un · la → une · l’ → un oder une (je nach Geschlecht!) · les → des.'),
 wr('Wandle um: <b>l’armoire</b> → unbestimmter Artikel',['une armoire'],'armoire ist weiblich → une armoire.'),
 wr('Wandle um: <b>l’effaceur</b> → unbestimmter Artikel',['un effaceur'],'effaceur ist männlich → un effaceur.'),
 wr('Wandle um: <b>les chaises</b> → unbestimmter Artikel',['des chaises'],'les → des.'),
 wr('Wandle um: <b>l’ami</b> → unbestimmter Artikel',['un ami'],'l’ami (der Freund) → un ami.'),
 mc('Welcher Satz passt am besten zum ersten Mal Nennen?',['Dans ma chambre, il y a une lampe.','Dans ma chambre, il y a la lampe.','Dans ma chambre, il y a lampe.','Dans ma chambre, il y a les lampe.'],'Nach il y a steht meist un/une/des: il y a une lampe.',{fr:true}),
 mc('«Regarde … globe de Théo!» – Welcher Artikel?',['le','un','une','des'],'Ein bestimmter Globus (der von Théo) → le globe.',{fr:true,say:'Regarde le globe de Théo!'}),
]},
/* 4 */
{id:'szenen',kind:'Szenen & Hören',icon:'🎭',title:'Szenen & Hören: un oder une?',sub:'Genau hinhören: [œ̃] oder [yn]?',lv:2,
html:card('In der Klasse','🏫','<p>Monsieur Martel stellt das Klassenzimmer vor. Welche Sachen gibt es?</p>'+dlg('Dans la classe',D2,{bg:'classe'}))
 +hoer(`<p>So unterscheidest du beim Hören:</p><ul><li>${F('un livre')} – nasal, ohne n: [œ̃]</li><li>${F('une lampe')} – mit hörbarem n: [yn]</li><li>${F('des livres')} – [de]: mehrere. Das -s am Nomen hörst du nicht, nur das <b>des</b>!</li><li>Liaison: ${F('un‿ordinateur')} – hier hörst du ein n, aber es ist trotzdem <b>un</b> (Nasal + Bindung).</li></ul>`)
 +tip('<b>Hör-Strategie:</b> Konzentriere dich nur auf das kleine Wort vor dem Nomen. Du darfst so oft hören, wie du willst – in der Klassenarbeit meistens zweimal.','🎧'),
ex:[
 seg('Hör zu: un, une oder des?',ART,[['Satz 1','une','Il y a une lampe.'],['Satz 2','un','Il y a un poster.'],['Satz 3','des','Il y a des photos.'],['Satz 4','une','Il y a une chaise.'],['Satz 5','un','Il y a un ordinateur.']],'une lampe · un poster · des photos · une chaise · un‿ordinateur.',{sub:'Tippe auf 🔊 und wähle.'}),
 seg('Hör zu: un, une oder des?',ART,[['Satz 1','des','Il y a des figurines.'],['Satz 2','une','Il y a une armoire.'],['Satz 3','un','Il y a un globe.'],['Satz 4','des','Il y a des CD.']],'des figurines · une‿armoire · un globe · des CD.',{sub:'Tippe auf 🔊 und wähle.'}),
 pick('Hör zu: Welches Bild passt?',[[ob('poster',3),'des posters'],[ob('poster'),'un poster'],[ob('lampe'),'une lampe'],[ob('cd',3),'des CD']],'«Il y a des posters.» – des = mehrere Poster.',{au:'Il y a des posters.'}),
 pick('Hör zu: Welches Bild passt?',[[ob('figurine'),'une figurine'],[ob('figurine',3),'des figurines'],[ob('globe'),'un globe'],[ob('pierre',3),'des pierres']],'«Il y a une figurine.» – une = eine.',{au:'Il y a une figurine.'}),
 mark('Hör zu: Was gibt es in Noahs Zimmer? Markiere alles, was du hörst.','noah',['lit','armoire','guitare','livre'],'Du hörst: un lit, une armoire, une guitare und des livres.',{au:[['Noah','Dans ma chambre, il y a un lit et une armoire. Il y a aussi une guitare et des livres.']]}),
 tf('Hör dir Monsieur Martel an. Richtig oder falsch?',[['Dans la classe, il y a des tables et des chaises.',true],['Il y a un hamac.',false],['Dans l’étagère, il y a des livres et des B.D.',true],['Il y a une guitare.',false]],'In der Klasse gibt es Tische, Stühle, einen Computer, einen Globus und ein Regal mit Büchern und Comics. Keine Hängematte und keine Gitarre!',{au:L2(D2)}),
 gapw('Hör zu und schreibe den Artikel.','Dans la classe, il y a {0} ordinateur, {1} étagère et {2} chaises.',[['un'],['une'],['des']],'un ordinateur · une étagère · des chaises.',{au:'Dans la classe, il y a un ordinateur, une étagère et des chaises.'}),
 dl('Ergänze den Dialog mit un, une oder des.',[['Samira','Qu’est-ce qu’il y a dans ta chambre, Léo?'],['Léo','Il y a {0} lit, {1} table et {2} posters.'],['Samira','Il y a aussi {3} ordinateur?'],['Léo','Oui. Et il y a {4} étagère.']],[['un','une','des'],['une','un','des'],['des','un','une'],['un','une','des'],['une','un','des']],'un lit · une table · des posters · un ordinateur · une étagère.'),
 mc('Hör zu: Was hat Léo in seinem Zimmer?',['un globe et des pierres','une guitare et un hamac','des CD et une minichaîne','des figurines et des B.D.'],'Léo sagt: «Il y a un globe et des pierres.»',{au:[['Léo','Dans ma chambre, il y a un globe et des pierres.']]}),
]},
/* 5 */
{id:'leicht',kind:'Training ★',icon:'🌱',title:'Training: leicht',sub:'un, une, des sicher zuordnen',lv:1,
html:merk('🔁 Kurz wiederholt',TAB,'blue'),
ex:[
 seg('un, une oder des?',ART,[['classeur','un'],['règle','une'],['crayons','des'],['effaceur','un'],['photo','une']],'un classeur · une règle · des crayons · un effaceur · une photo.'),
 seg('un, une oder des?',ART,[['garçon','un'],['fille','une'],['élèves','des'],['école','une'],['ami','un']],'un garçon · une fille · des élèves · une école · un ami.'),
 mt('Was gehört zusammen?',[['un','hamac'],['une','minichaîne'],['des','B.D.'],['une','collection']],'un hamac · une minichaîne · des B.D. · une collection.',{say:[['','un hamac, une minichaîne, des B.D., une collection']]}),
 mc('«Il y a … table.»',['une','un','des'],'table ist weiblich → une table.',{fr:true,say:'Il y a une table.'}),
 mc('«Il y a … CD.» (mehrere)',['des','un','une'],'Plural → des CD.',{fr:true,say:'Il y a des CD.'}),
 mc('«Il y a … globe.»',['un','une','des'],'globe ist männlich → un globe.',{fr:true,say:'Il y a un globe.'}),
 gap('Setze ein.','Dans ma chambre, il y a {0} lampe et {1} poster.',[['une','un','des'],['un','une','des']],'une lampe · un poster.'),
 gap('Setze ein.','Il y a {0} livres et {1} ordinateur.',[['des','un','une'],['un','une','des']],'des livres · un ordinateur.'),
 mc('Was bedeutet «Il y a une pierre.»?',['Es gibt einen Stein.','Es gibt Steine.','Da ist der Stein.','Es gibt eine Pierre.'],'une pierre = ein Stein (im Französischen weiblich).',{say:'Il y a une pierre.'}),
 pick('Hör zu: Welches Bild passt?',[[ob('cahier'),'un cahier'],[ob('cahier',3),'des cahiers'],[ob('regle'),'une règle'],[ob('stylo',3),'des stylos']],'«un cahier» = ein Heft.',{au:'un cahier'}),
]},
/* 6 */
{id:'mittel',kind:'Training ★★',icon:'🌿',title:'Training: mittel',sub:'Artikel schreiben und Sätze mit il y a bilden',lv:2,
html:tip('Jetzt schreibst du selbst. Denk daran: <b>kein Apostroph</b> bei un/une – und <b>des</b> im Plural.','✍️'),
ex:[
 gapw('Schreibe un, une oder des.','Il y a {0} chaise, {1} hamac, {2} armoire et {3} figurines.',[['une'],['un'],['une'],['des']],'une chaise · un hamac · une armoire · des figurines.'),
 gapw('Schreibe un, une oder des.','Dans la classe, il y a {0} globe, {1} tables et {2} étagère.',[['un'],['des'],['une']],'un globe · des tables · une étagère.'),
 wr('Schreibe mit unbestimmtem Artikel: <b>eine Sammlung</b>',['une collection'],'une collection (f.).'),
 wr('Schreibe mit unbestimmtem Artikel: <b>ein Computer</b>',['un ordinateur'],'un ordinateur (m.) – ohne Apostroph.'),
 wr('Schreibe mit unbestimmtem Artikel: <b>Comics</b>',['des B.D.','des BD','des bédés'],'des B.D. – ohne s.'),
 ord('Bilde den Satz.',['Dans','ma chambre',',','il y a','un lit','et','une table','.'],'Dans ma chambre, il y a un lit et une table.',['Il y a un lit et une table dans ma chambre.','Dans ma chambre, il y a une table et un lit.']),
 ord('Bilde die Frage.',['Qu’est-ce qu’','il y a','dans','ta chambre','?'],'Qu’est-ce qu’il y a dans ta chambre?'),
 wr('Setze in den Plural: <b>un poster</b>',['des posters'],'un → des, poster → posters.'),
 wr('Setze in den Plural: <b>une photo</b>',['des photos'],'une → des, photo → photos.'),
 mc('Welcher Satz ist richtig?',['Il y a des livres et une lampe.','Il y a des livre et une lampe.','Il y a un livres et une lampe.','Il y a des livres et un lampe.'],'des livres (Pl. mit s) · une lampe (f.).',{fr:true}),
 mark('Schau dir Noahs Zimmer an: Tippe alle Sachen an, vor denen <b>une</b> steht.','noah',['armoire','table','chaise','guitare','lampe'],'une armoire · une table · une chaise · une guitare · une lampe. (Aber: un lit, un hamac, un ordinateur, des livres …)'),
]},
/* 7 */
{id:'schwer',kind:'Training ★★★',icon:'🌳',title:'Training: schwer',sub:'Bestimmt oder unbestimmt? Übersetzen – Klassenarbeitsniveau',lv:3,
html:tip('Klassenarbeitsniveau: Hier musst du entscheiden, ob <b>le/la/l’/les</b> oder <b>un/une/des</b> passt – und ganze Sätze übersetzen.','🏋️'),
ex:[
 gapw('le, la, l’, les oder un, une, des? Schreibe.','Voilà {0} chambre de Clara. Dans {1} chambre, il y a {2} lit, {3} table et {4} chaises. Il y a aussi {5} hamac. {6} hamac est trop cool!',[['la'],['la'],['un'],['une'],['des'],['un'],['Le']],'la chambre (bestimmt) · la chambre · un lit · une table · des chaises · un hamac (neu) · Le hamac (bekannt).'),
 gapw('le, la, l’, les oder un, une, des? Schreibe.','Dans le coin, il y a {0} étagère. Dans {1} étagère, il y a {2} livres et {3} collection de figurines.',[['une'],['l’',"l'"],['des'],['une']],'une étagère (neu) · l’étagère (bekannt) · des livres · une collection.'),
 wr('Übersetze: „Es gibt einen Tisch und einen Stuhl.“',['Il y a une table et une chaise.'],'Achtung: der Tisch = la table, der Stuhl = la chaise → beide weiblich: une table, une chaise!'),
 wr('Übersetze: „In meinem Zimmer gibt es Poster.“',['Dans ma chambre, il y a des posters.','Il y a des posters dans ma chambre.'],'Poster (mehrere) → des posters – des nicht vergessen, auch wenn es im Deutschen fehlt!'),
 wr('Übersetze: „Was gibt es in deinem Zimmer?“',['Qu’est-ce qu’il y a dans ta chambre?'],'Qu’est-ce qu’il y a dans ta chambre?'),
 wr('Übersetze: „Es gibt ein Regal.“',['Il y a une étagère.'],'das Regal = l’étagère (f.) → une étagère.'),
 mc('Welcher Satz ist richtig?',['Il y a un ordinateur. L’ordinateur est super.','Il y a l’ordinateur. Un ordinateur est super.','Il y a une ordinateur. L’ordinateur est super.','Il y a un’ordinateur. Le ordinateur est super.'],'Erst un ordinateur (neu), dann l’ordinateur (bekannt).',{fr:true}),
 mt('Deutsch → Französisch',[['ein Schrank','une armoire'],['ein Computer','un ordinateur'],['ein Regal','une étagère'],['eine CD','un CD'],['Fotos','des photos']],'Das Geschlecht ist oft anders als im Deutschen!',{say:[['','une armoire, un ordinateur, une étagère, un CD, des photos']]}),
 seg('Hör zu: Welchen Artikel hörst du?',['un','une','le','la','les','des'],[['Satz 1','une','Il y a une minichaîne.'],['Satz 2','la','Voilà la minichaîne de Jade.'],['Satz 3','des','Il y a des pierres.'],['Satz 4','les','Regarde les pierres!']],'une · la · des · les.',{sub:'Tippe auf 🔊 und wähle.'}),
]},
/* 8 */
{id:'fehler',kind:'Fehlerdetektiv',icon:'🕵️',title:'Fehlerdetektiv',sub:'Typische Fehler mit un, une, des',lv:2,
html:attn(`<table class="t"><tr><th>✗ falsch</th><th>✓ richtig</th><th>Warum?</th></tr>
 <tr><td><s>un chaise</s></td><td>${G('une','chaise','f')}</td><td>chaise ist weiblich</td></tr>
 <tr><td><s>une lit</s></td><td>${G('un','lit','m')}</td><td>lit ist männlich</td></tr>
 <tr><td><s>un’armoire</s></td><td>${G('une','armoire','f')}</td><td>kein Apostroph – und armoire ist weiblich</td></tr>
 <tr><td><s>une ordinateur</s></td><td>${G('un','ordinateur','m')}</td><td>ordinateur ist männlich</td></tr>
 <tr><td><s>des poster</s></td><td>${G('des','posters','p')}</td><td>Plural-s</td></tr>
 <tr><td><s>Il y a posters.</s></td><td>${F('Il y a des posters.')}</td><td>des darf nicht fehlen!</td></tr></table>`,'Attention! Diese Fehler passieren oft')
 +tip('<b>Detektiv-Trick:</b> Im Deutschen fehlt im Plural der Artikel („Es gibt Poster“). Im Französischen brauchst du <b>immer</b> des!','🔍'),
ex:[
 det('Fehlerdetektiv: Finde die Fehler in Léos Text.','Dans ma chambre, il y a [une|un] lit, [un|une] table et [un’armoire|une armoire]. Il y a aussi [des poster|des posters].','un lit · une table · une armoire · des posters.'),
 det('Fehlerdetektiv: Finde die Fehler.','Il y a [une|un] ordinateur et [un|une] étagère. Dans l’étagère, il y a [livres|des livres].','un ordinateur · une étagère · des livres.'),
 det('Fehlerdetektiv: Finde die Fehler.','Il y a [un|une] guitare et [une|un] globe. [Une|Le] globe est super!','une guitare · un globe · Le globe (jetzt bekannt → bestimmt).'),
 mc('Welche Form ist <b>falsch</b>?',['un’ordinateur','un ordinateur','une armoire','une étagère'],'«un’ordinateur» ist falsch – bei un gibt es keinen Apostroph.',{say:'un ordinateur'}),
 mc('Welche Form ist <b>falsch</b>?',['une lit','une lampe','une chaise','une table'],'«une lit» ist falsch: <b>un lit</b>.',{say:'un lit'}),
 wr('Verbessere: «Il y a posters.»',['Il y a des posters.'],'Im Französischen brauchst du des.'),
 wr('Verbessere: «un chaise»',['une chaise'],'chaise ist weiblich → une chaise.'),
 wr('Verbessere: «des CDs»',['des CD'],'CD bleibt im Plural ohne s.'),
]},
];
window.TEST_EX=[
 gapw('Setze un, une oder des ein.','1. {0} lit 2. {1} lampe 3. {2} livres 4. {3} armoire 5. {4} ordinateur 6. {5} photos 7. {6} étagère 8. {7} poster',[['un'],['une'],['des'],['une'],['un'],['des'],['une'],['un']],'un lit · une lampe · des livres · une armoire · un ordinateur · des photos · une étagère · un poster.',{ref:'regel',tag:'un, une, des einsetzen',say:false}),
 seg('Hör zu: un, une oder des?',ART,[['Satz 1','une','Il y a une table.'],['Satz 2','des','Il y a des B.D.'],['Satz 3','un','Il y a un hamac.'],['Satz 4','une','Il y a une étagère.']],'une table · des B.D. · un hamac · une étagère.',{ref:'szenen',tag:'Hören: un/une/des',sub:'Tippe auf 🔊 und wähle.'}),
 wr('Wandle um: <b>l’étagère</b> → unbestimmter Artikel',['une étagère'],'une étagère (f.).',{ref:'le-un',tag:'le → un'}),
 wr('Übersetze: „Es gibt einen Computer und Bücher.“',['Il y a un ordinateur et des livres.'],'Il y a un ordinateur et des livres.',{ref:'schwer',tag:'Übersetzen'}),
 det('Fehlerdetektiv: Finde die 4 Fehler.','Dans ma chambre, il y a [une|un] lit et [un|une] chaise. Il y a [photos|des photos] et [une|un] globe.','un lit · une chaise · des photos · un globe.',{ref:'fehler',tag:'Fehler finden'}),
 mark('Hör zu und markiere im Bild, was es in Noahs Zimmer gibt.','noah',['hamac','ordinateur','lampe','cd'],'Du hörst: un hamac, un ordinateur, une lampe et des CD.',{au:[['Noah','Il y a un hamac, un ordinateur, une lampe et des CD.']],ref:'szenen',tag:'Hören: Bild markieren'}),
];
