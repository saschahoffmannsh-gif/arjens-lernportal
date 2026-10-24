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
html:card('Lies mit','📖','<p>Yasmine ist neugierig: Was gibt es in Noahs Zimmer? Achte auf die kleinen Wörter vor den Sachen.</p>'+dlg('Au téléphone',D1,{bg:'maison'}))
 +card('Noahs Zimmer','🛏️',`<div class="roomwrap">${ROOMS.noah.svg}</div><p class="legend">Im Zimmer gibt es: ${G('un','lit','m')} ${G('une','table','f')} ${G('une','chaise','f')} ${G('un','ordinateur','m')} ${G('des','livres','p')} ${G('des','posters','p')} ${G('une','guitare','f')} ${G('un','hamac','m')}</p>`)
 +reveal('🔍 Was fällt dir auf? Was bedeuten un, une und des?',`<ul><li><b class="c-m">un</b> = <b>ein</b> – vor männlichen Nomen: un lit, un ordinateur.</li><li><b class="c-f">une</b> = <b>eine</b> – vor weiblichen Nomen: une table, une chaise.</li><li><b class="c-p">des</b> = Plural – das übersetzt man <b>nicht</b>: des livres = Bücher.</li><li><span class="fr">il y a</span> = es gibt. <span class="fr">Qu’est-ce qu’il y a?</span> = Was gibt es?</li></ul>`),
ex:[
 mc('Was bedeutet «Il y a un ordinateur.»?',['Es gibt einen Computer.','Das ist der Computer.','Da ist der Computer von Noah.','Es gibt Computer.'],'il y a = es gibt · un ordinateur = einen Computer.',{say:'Il y a un ordinateur.'}),
 mc('Was bedeutet «Il y a des livres.»?',['Es gibt Bücher.','Es gibt die Bücher.','Es gibt ein Buch.','Das sind Bücher von Noah.'],'des wird nicht übersetzt: des livres = Bücher.',{say:'Il y a des livres.'}),
 mc('Was fragt Yasmine mit «Qu’est-ce qu’il y a dans ta chambre?»',['Was gibt es in deinem Zimmer?','Wo ist dein Zimmer?','Wie ist dein Zimmer?','Wer ist in deinem Zimmer?'],'Qu’est-ce qu’il y a …? = Was gibt es …?',{say:'Qu’est-ce qu’il y a dans ta chambre?'}),
 seg('un oder une? Schau auf die Farbe!',['un','une'],[[`<span class="c-m">lit</span>`,'un'],[`<span class="c-f">table</span>`,'une'],[`<span class="c-f">chaise</span>`,'une'],[`<span class="c-m">ordinateur</span>`,'un']],'Blau = männlich → un · Rot = weiblich → une.'),
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
{id:'szenen',kind:'Szenen',icon:'🎭',title:'Szenen: Was gibt es in der Klasse?',sub:'un, une, des im Klassenzimmer',lv:2,
html:card('In der Klasse','🏫','<p>Monsieur Martel stellt das Klassenzimmer vor. Welche Sachen gibt es?</p>'+dlg('Dans la classe',D2,{bg:'classe'})),
ex:[
 dl('Ergänze den Dialog mit un, une oder des.',[['Samira','Qu’est-ce qu’il y a dans ta chambre, Léo?'],['Léo','Il y a {0} lit, {1} table et {2} posters.'],['Samira','Il y a aussi {3} ordinateur?'],['Léo','Oui. Et il y a {4} étagère.']],[['un','une','des'],['une','un','des'],['des','un','une'],['un','une','des'],['une','un','des']],'un lit · une table · des posters · un ordinateur · une étagère.'),
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
 wr('Wandle um: <b>l’étagère</b> → unbestimmter Artikel',['une étagère'],'une étagère (f.).',{ref:'le-un',tag:'le → un'}),
 wr('Übersetze: „Es gibt einen Computer und Bücher.“',['Il y a un ordinateur et des livres.'],'Il y a un ordinateur et des livres.',{ref:'schwer',tag:'Übersetzen'}),
 det('Fehlerdetektiv: Finde die 4 Fehler.','Dans ma chambre, il y a [une|un] lit et [un|une] chaise. Il y a [photos|des photos] et [une|un] globe.','un lit · une chaise · des photos · un globe.',{ref:'fehler',tag:'Fehler finden'}),
];
/* Pro Durchgang: so viele Aufgaben je Kapitel (Rest = Reserve-Pool); Pflichtaufgaben zu den Heftfehlern */
H.setRun({entdecken:2,regel:3,"le-un":3,szenen:2,leicht:4,mittel:4,schwer:4,fehler:3},{fehler:[0],test:[3]});
/* INTRO */
H.setIntro({
_lesson:{t:'Der unbestimmte Artikel: un, une, des',
 was:'Der unbestimmte Artikel ist im Deutschen <b>ein, eine</b>. Im Französischen heißt er <b>un</b> (männlich), <b>une</b> (weiblich) und im Plural <b>des</b>. <i>des</i> wird im Deutschen nicht übersetzt.',
 warum:'Mit <b>il y a</b> („es gibt“) und dem unbestimmten Artikel beschreibst du dein Zimmer: <i>Dans ma chambre, il y a un lit et une table.</i> Das kommt in der Arbeit sicher dran.',
 schritte:['Eins oder mehrere? Mehrere → <b>des</b>.','Bei einem: männlich → <b>un</b>, weiblich → <b>une</b>.','Vor Vokal gibt es <b>keinen Apostroph</b>: un ordinateur (man spricht es nur zusammen).'],
 tab:'<table class="cj"><tr><td><b>un</b> + männlich</td><td>un lit, un ordinateur</td></tr><tr><td><b>une</b> + weiblich</td><td>une chaise, une armoire</td></tr><tr><td><b>des</b> + Plural</td><td>des livres, des photos</td></tr></table>',
 bsp:[['un lit','ein Bett'],['une chaise','ein Stuhl'],['un ordinateur','ein Computer'],['des livres','Bücher (des wird nicht übersetzt)'],['Il y a une table.','Es gibt einen Tisch.']],
 merk:'un (m.) · une (f.) · des im Plural – nie ein Apostroph!',
 fallen:['<b>un’</b> gibt es nicht: <b>un ordinateur</b>, <b>une armoire</b>.','Geschlecht wie bei le / la: le lit → <b>un</b> lit, la chaise → <b>une</b> chaise.','des + Nomen mit <b>-s</b>: des poster<b>s</b> (aber: des CD, des B.D.).'],
 check:['Eins oder mehrere?','Männlich oder weiblich?','Plural-s nicht vergessen.']},
entdecken:{rule:"Plural → des. Männlich → un, weiblich → une. Nie ein Apostroph (un ordinateur, une armoire).",t:'Dialog: Was gibt es im Zimmer?',
 was:'Yasmine fragt Noah am Telefon: <i>Qu’est-ce qu’il y a dans ta chambre?</i> (Was gibt es in deinem Zimmer?) Achte auf die kleinen Wörter vor den Sachen.',
 schritte:['Lies den Dialog (🔊 = Aussprache).','Such alle un, une und des.','Überlege: Was bedeuten sie auf Deutsch?'],
 bsp:[['Qu’est-ce qu’il y a dans ta chambre?','Was gibt es in deinem Zimmer?','Yasmine'],['Il y a un lit et une table.','Es gibt ein Bett und einen Tisch.','Noah'],['Il y a aussi des posters.','Es gibt auch Poster.','Noah']],
 merk:'il y a = es gibt. Danach steht meistens un, une oder des.',
 fallen:['<b>des</b> übersetzt man nicht: des posters = Poster.'],
 check:['Lesen.','Artikel suchen.','Fragen beantworten.']},
regel:{rule:"Plural → des. Männlich → un, weiblich → une. Nie ein Apostroph (un ordinateur, une armoire).",t:'Die Regel: un, une, des',
 was:'Welcher unbestimmte Artikel passt zu welchem Nomen? Es ist wie bei le / la – nur mit un / une.',
 schritte:['Männlich (le …) → <b>un</b>: le lit → un lit.','Weiblich (la …) → <b>une</b>: la lampe → une lampe.','Plural → <b>des</b>: des lits, des lampes.','Kein l’ und kein Apostroph: l’armoire → <b>une armoire</b>, l’ordinateur → <b>un ordinateur</b>.'],
 bsp:[['un livre','ein Buch'],['une lampe','eine Lampe'],['une étagère','ein Regal'],['un hamac','eine Hängematte'],['des photos','Fotos']],
 merk:'le → un · la → une · les → des',
 fallen:['l’armoire: Aus l’ wird <b>une</b> (weiblich), nicht un.','<b>un hamac</b> ist männlich (im Deutschen: <i>die</i> Hängematte).'],
 check:['Bestimmten Artikel denken (le / la).','Umwandeln in un / une.','Plural → des.']},
'le-un':{rule:"Etwas Neues (zum ersten Mal genannt, nach il y a) → un / une / des. Etwas Bekanntes → le / la / l’ / les.",t:'le oder un? – bestimmt oder unbestimmt',
 was:'Wann sagt man <b>un lit</b> (ein Bett) und wann <b>le lit</b> (das Bett)? Das ist wie im Deutschen.',
 schritte:['Etwas wird <b>zum ersten Mal</b> genannt (neu) → <b>un / une / des</b>.','Es ist schon <b>bekannt</b>, man weiß, welche Sache gemeint ist → <b>le / la / l’ / les</b>.','Nach <b>il y a</b> steht fast immer un / une / des.'],
 bsp:[['Il y a un hamac.','Es gibt eine Hängematte. (neu)','Noah'],['Le hamac est super!','Die Hängematte ist super! (bekannt)','Noah'],['Il y a une armoire.','Es gibt einen Schrank.','Jade'],['L’armoire est là.','Der Schrank ist da.','Jade']],
 merk:'Neu → un / une / des. Bekannt → le / la / l’ / les.',
 fallen:['„Il y a le lit“ ist meistens falsch → <b>Il y a un lit.</b>','Wenn es auf Deutsch „der / die / das“ heißt → le / la / l’ / les; bei „ein / eine“ → un / une.'],
 check:['Deutsch denken: ein oder der?','Neu oder bekannt?','Artikel wählen.']},
szenen:{rule:"Plural → des. Männlich → un, weiblich → une. Nie ein Apostroph (un ordinateur, une armoire).",t:'Szenen: Was gibt es in der Klasse?',
 was:'Monsieur Martel zeigt das Klassenzimmer. Lies, was es gibt, und setze selbst un, une oder des ein. (Das Hören von un / une übst du später im Teil „Hörverstehen“.)',
 schritte:['Lies den Text.','Bestimme bei jedem Nomen: männlich, weiblich oder Plural?','Wähle un, une oder des.'],
 bsp:[['Dans la classe, il y a des tables et des chaises.','In der Klasse gibt es Tische und Stühle.','Martel'],['Il y a un ordinateur.','Es gibt einen Computer.','Martel'],['Il y a une étagère.','Es gibt ein Regal.','Martel']],
 merk:'un (m.) · une (f.) · des (Plural) – nach il y a fast immer.',
 fallen:['<b>un ordinateur</b> ist männlich – auch wenn man es zusammen spricht.','des + Nomen mit -s.'],
 check:['Lesen.','Geschlecht bestimmen.','Antwort wählen.']},
leicht:{rule:"Plural → des. Männlich → un, weiblich → une. Nie ein Apostroph (un ordinateur, une armoire).",t:'Training ★: un, une, des wählen',
 was:'Wähle zu jedem Nomen un, une oder des.',
 schritte:['Plural? → des.','Männlich → un, weiblich → une.','Kein Apostroph!'],
 bsp:[['un cahier','ein Heft'],['une règle','ein Lineal'],['une armoire','ein Schrank'],['des crayons','Stifte']],
 merk:'un (m.) · une (f.) · des im Plural',
 fallen:['un’armoire gibt es nicht → une armoire.'],
 check:['Fragen stellen.','Antippen.','Erklärung lesen.']},
mittel:{rule:"Plural → des. Männlich → un, weiblich → une. Nie ein Apostroph (un ordinateur, une armoire).",t:'Training ★★: selbst schreiben',
 was:'Jetzt schreibst du die Artikel selbst. Denk an des im Plural und das Plural-s.',
 schritte:['Artikel bestimmen.','Schreiben – ohne Apostroph.','Bei des: Nomen mit -s.'],
 bsp:[['un ordinateur','ein Computer'],['une étagère','ein Regal'],['des figurines','Figuren'],['des B.D.','Comics (ohne s)']],
 merk:'Nie ein Apostroph bei un / une – und des im Plural.',
 fallen:['„un ordinateurs“ ✗ – bei un nur eins, ohne s.'],
 check:['Artikel.','Nomen.','s prüfen.']},
schwer:{rule:"„ein / eine“ → un / une, „der / die / das“ → le / la / l’. Ohne Artikel im Plural (Bücher) → des.",t:'Training ★★★: le oder un – und übersetzen',
 was:'Klassenarbeitsniveau: Entscheide, ob der bestimmte oder unbestimmte Artikel passt, und übersetze ganze Sätze.',
 schritte:['Deutsch: „ein / eine“ → un / une; „der / die / das“ → le / la / l’; ohne Artikel im Plural → des.','Geschlecht bestimmen.','Satz schreiben.'],
 bsp:[['Dans ma chambre, il y a un lit.','In meinem Zimmer gibt es ein Bett.'],['Le lit est super.','Das Bett ist super.'],['Il y a des livres.','Es gibt Bücher.'],['Les livres sont là.','Die Bücher sind da.']],
 merk:'il y a + un / une / des · danach: le / la / l’ / les',
 fallen:['„Es gibt Bücher“ → il y a <b>des</b> livres (des darf nicht fehlen!).'],
 check:['Bestimmt oder unbestimmt?','Geschlecht?','Satz schreiben.']},
fehler:{rule:"Plural → des. Männlich → un, weiblich → une. Nie ein Apostroph (un ordinateur, une armoire).",t:'Fehlerdetektiv: un, une, des',
 was:'Finde die typischen Fehler mit un, une, des.',
 schritte:['Jeden Artikel prüfen.','Geschlecht, Apostroph, Plural.','Fehler antippen.'],
 bsp:[['une chaise','nicht: <s>un chaise</s> – chaise ist weiblich'],['un lit','nicht: <s>une lit</s> – lit ist männlich'],['une armoire','nicht: <s>un’armoire</s>'],['des posters','nicht: <s>des poster</s>']],
 merk:'Geschlecht? Plural? – und nie un’.',
 fallen:['un ordinateur ist männlich: <s>une ordinateur</s>.'],
 check:['Lesen.','Prüfen.','Antippen.']}
});
(function(){const W=window,V=window.V;
/* Bildliche Erklärungen (feste Vorlage) – un, une, des */
H.patchIntro({
_lesson:{tab:'',vis:V.artSet([['lit','un','lit'],['lampe','une','lampe'],['ordinateur','un','ordinateur'],['photo','des','photos']]),
 was:'<b>un</b> / <b>une</b> = ein / eine. Mehrere: <b>des</b> (wird nicht übersetzt).',
 warumVis:'<div class="aset">'+V.obj('lit','le','lit')+' <span class="big-ic">↔</span> '+V.obj('lit','un','lit')+'</div>',
 warum:'Wie im Deutschen: „ein Bett“ (neu, irgendeins) – „das Bett“ (bekannt).',
 schritte:[['<span class="big-ic">👥?</span>','mehrere? → '+V.art('des')],['<span class="big-ic">♂ / ♀</span>','m. → '+V.art('un')+' · f. → '+V.art('une')],['<span class="big-ic">🚫’</span>','nie ein Apostroph: un ordinateur']],
 merk:'un (m.) · une (f.) · des im Plural – nie ein Apostroph!',
 fallen:[['un’ordinateur','un ordinateur','Bei un nie ein Apostroph.'],['un posters','des posters','Mehrere → <b>des</b>.']]},
entdecken:{vis:V.train('Il/s|y a/v|un hamac./r',{labels:true})+'<div class="aset">'+V.obj('hamac','un','hamac')+V.obj('guitare','une','guitare')+V.obj('cd','des','CD')+'</div>',
 was:'Noah erzählt, was es in seinem Zimmer gibt: <i>Il y a …</i>',
 warum:'Nach <b>il y a</b> (es gibt) steht fast immer un, une oder des.',
 schritte:[['<span class="big-ic">📖</span>','Dialog lesen'],[V.b('il y a','v'),'„es gibt“ suchen'],[V.art('un')+' '+V.art('une')+' '+V.art('des'),'Artikel danach ansehen']],
 fallen:[['Il y a le lit.','Il y a un lit.','Nach il y a → <b>un / une / des</b>.']]},
regel:{vis:'<div class="rulefl">'+V.art('le')+' → '+V.art('un')+'<br>'+V.art('la')+' → '+V.art('une')+'<br>'+V.art('les')+' → '+V.art('des')+'</div>',
 was:'Wie bei le / la – nur mit un / une / des.',
 warum:'Das Geschlecht bleibt gleich: la chaise → une chaise.',
 schritte:[['<span class="big-ic">👥</span>','mehrere? → des'],['<span class="big-ic">♂</span>','männlich → un'],['<span class="big-ic">♀</span>','weiblich → une']],
 fallen:[['un chaise','une chaise','chaise ist weiblich.']]},
'le-un':{vis:V.train('Il y a/v|un lit./r')+V.train('Le lit/s|est/v|super./r'),
 was:'Neu → <b>un</b> lit. Schon bekannt → <b>le</b> lit.',
 warum:'Genau wie im Deutschen: „ein Bett … das Bett“.',
 schritte:[['<span class="big-ic">🆕</span>','neu erwähnt? → un / une / des'],['<span class="big-ic">👆</span>','bekannt / bestimmt? → le / la / l’ / les'],[V.b('il y a','v'),'nach il y a → un / une / des']],
 merk:'Neu → un / une / des · bekannt → le / la / l’ / les',
 fallen:[['Il y a la lampe. Une lampe est super.','Il y a une lampe. La lampe est super.','Erst neu (une), dann bekannt (la).']]},
szenen:{vis:'<div class="aset">'+V.who('Martel')+'</div>'+V.artSet([['classeur','un','classeur'],['regle','une','règle'],['cahier','des','cahiers']]),
 was:'Monsieur Martel zeigt das Klassenzimmer: Was gibt es?',
 warum:'Sachen aufzählen → un, une, des.',
 schritte:[['<span class="big-ic">🔎</span>','Sache finden'],['<span class="big-ic">♂♀👥</span>','m., f. oder mehrere?'],[V.art('un')+' '+V.art('une')+' '+V.art('des'),'Artikel wählen']],
 fallen:[['Il y a un règle.','Il y a une règle.','règle ist weiblich.']]},
leicht:{vis:V.artSet([['stylo','un','stylo'],['figurine','une','figurine'],['livre','des','livres']]),
 was:'Wähle un, une oder des.',
 warum:'So lernst du jedes Nomen mit Artikel.',
 schritte:[['<span class="big-ic">👥</span>','mehrere? → des'],['<span class="big-ic">♂</span>','m. → un'],['<span class="big-ic">♀</span>','f. → une']],
 fallen:[['une stylo','un stylo','stylo ist männlich.']]},
mittel:{vis:V.vs('un’/r|ordinateur/r','un ordinateur/r'),
 was:'Du schreibst die Artikel selbst.',
 warum:'In der Arbeit zählen Plural-s und kein Apostroph.',
 schritte:[['<span class="big-ic">👥</span>','des + Nomen-s'],['<span class="big-ic">🚫’</span>','un / une ohne Apostroph'],['<span class="big-ic">✍️</span>','schreiben']],
 fallen:[['des livre','des livres','Plural-s.']]},
schwer:{vis:'<div class="cmp2"><span class="c2-f">🇩🇪</span>'+V.train('Es gibt/v|einen Tisch./r',{say:false})+'</div><div class="cmp2"><span class="c2-f">🇫🇷</span>'+V.train('Il y a/v|une table./r')+'</div>',
 was:'le oder un? Und ganze Sätze übersetzen.',
 warum:'„es gibt“ = <b>il y a</b> – danach un / une / des.',
 schritte:[[V.b('il y a','v'),'es gibt'],['<span class="big-ic">♂♀</span>','Geschlecht im Französischen prüfen'],['<span class="big-ic">🆕/👆</span>','neu oder bekannt?']],
 fallen:[['Il y a un table.','Il y a une table.','Deutsch „einen“, aber table ist weiblich → <b>une</b>.']]},
fehler:{vis:V.vs('des/r|poster/r','des posters/r'),
 was:'Finde typische Fehler mit un, une, des.',
 warum:'Wer Fehler sieht, macht sie seltener.',
 schritte:[['<span class="big-ic">♂♀</span>','Geschlecht?'],['<span class="big-ic">👥</span>','Plural?'],['<span class="big-ic">🚫’</span>','kein un’']],
 fallen:[['un’armoire','une armoire','armoire ist weiblich – und kein Apostroph.']]}
});

})();
