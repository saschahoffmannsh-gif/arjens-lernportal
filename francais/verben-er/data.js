/* Lektion: Regelmäßige Verben auf -er */
const {F,G,conj,dlg,merk,attn,tip,hoer,card,reveal,tabs,track,steps,grp,ob,spk,spkLines}=H;
const {mc,pick,gap,gapw,ord,wr,mt,dl,clk,mark,mul,seg,tf,det}=X;
window.LESSON={slug:'verben-er',title:'Verben auf -er',fr:'regarder, écouter, parler …',icon:'🧩',color:'#16a34a',testN:18,
 intro:'Die meisten französischen Verben enden auf <b>-er</b> und funktionieren alle nach demselben Bauplan: <b>Stamm + Endung</b>. Wenn du den Bauplan kannst, kannst du hunderte Verben! Hier übst du die Verben aus deinem Heft – und die Fallen, in die man leicht tappt.'};
const MUTE=[0,1,2,5];
const V={
 regarder:{v:'regarder',de:'(an)schauen, ansehen',rows:[['je','regard','e','ich schaue'],['tu','regard','es','du schaust'],['il / elle / on','regard','e','er / sie / man schaut','il regarde, elle regarde, on regarde'],['nous','regard','ons','wir schauen'],['vous','regard','ez','ihr schaut / Sie schauen'],['ils / elles','regard','ent','sie schauen','ils regardent, elles regardent']],mute:MUTE},
 presenter:{v:'présenter',de:'vorstellen, präsentieren',rows:[['je','présent','e','ich stelle vor'],['tu','présent','es','du stellst vor'],['il / elle / on','présent','e','er / sie / man stellt vor','il présente, elle présente, on présente'],['nous','présent','ons','wir stellen vor'],['vous','présent','ez','ihr stellt vor'],['ils / elles','présent','ent','sie stellen vor','ils présentent, elles présentent']],mute:MUTE},
 ecouter:{v:'écouter',de:'(an)hören, zuhören',rows:[['j’','écout','e','ich höre'],['tu','écout','es','du hörst'],['il / elle / on','écout','e','er / sie / man hört','il écoute, elle écoute, on écoute'],['nous‿','écout','ons','wir hören','nous écoutons'],['vous‿','écout','ez','ihr hört','vous écoutez'],['ils‿ / elles‿','écout','ent','sie hören','ils écoutent, elles écoutent']],mute:MUTE},
 telephoner:{v:'téléphoner',de:'telefonieren (téléphoner à qn = jdn. anrufen)',rows:[['je','téléphon','e','ich telefoniere'],['tu','téléphon','es','du telefonierst'],['il / elle / on','téléphon','e','er / sie / man telefoniert','il téléphone, elle téléphone, on téléphone'],['nous','téléphon','ons','wir telefonieren'],['vous','téléphon','ez','ihr telefoniert'],['ils / elles','téléphon','ent','sie telefonieren','ils téléphonent, elles téléphonent']],mute:MUTE},
 parler:{v:'parler',de:'sprechen, reden',rows:[['je','parl','e','ich spreche'],['tu','parl','es','du sprichst'],['il / elle / on','parl','e','er / sie / man spricht','il parle, elle parle, on parle'],['nous','parl','ons','wir sprechen'],['vous','parl','ez','ihr sprecht'],['ils / elles','parl','ent','sie sprechen','ils parlent, elles parlent']],mute:MUTE},
 appeler:{v:'appeler',de:'rufen, anrufen (s’appeler = heißen)',rows:[['j’','appe<b class="ll">ll</b>','e','ich rufe','j’appelle'],['tu','appe<b class="ll">ll</b>','es','du rufst','tu appelles'],['il / elle / on','appe<b class="ll">ll</b>','e','er / sie / man ruft','il appelle, elle appelle, on appelle'],['nous‿','appe<b class="l1">l</b>','ons','wir rufen','nous appelons'],['vous‿','appe<b class="l1">l</b>','ez','ihr ruft','vous appelez'],['ils‿ / elles‿','appe<b class="ll">ll</b>','ent','sie rufen','ils appellent, elles appellent']],mute:MUTE},
};
const SC=(who,fr,de,o)=>`<div class="objc" style="width:auto;flex:1 1 150px">${CHARS[who]?`<div style="width:64px">${CHARS[who]}</div>`:''}${o?ob(o):''}<span class="fr">${fr}</span>${spk(fr)}<span class="legend">${de}</span></div>`;
const D1=[
 ['Clara','Salut, Théo! Tu écoutes un CD?','Hallo, Théo! Hörst du eine CD?'],
 ['Théo','Oui, j’écoute un CD de Lucas. Et toi?','Ja, ich höre eine CD von Lucas. Und du?'],
 ['Clara','Moi, je regarde des photos. Regarde!','Ich schaue Fotos an. Schau mal!'],
 ['Théo','Cool! Et Jade?','Cool! Und Jade?'],
 ['Clara','Jade téléphone à Yasmine. Elles parlent, elles parlent …','Jade telefoniert mit Yasmine. Sie reden und reden …'],
 ['Théo','Et nous, nous regardons les photos ensemble!','Und wir schauen die Fotos zusammen an!']];
const L2=l=>l.map(x=>[x[0],x[1]]);
const BAU=`<div class="bau"><span class="blk b-st">regard<small>Stamm</small></span><span class="blk b-x">er</span><span class="op">→</span><span class="blk b-st">regard<small>Stamm</small></span><span class="op">+</span><span class="blk b-en">e<small>Endung</small></span></div>`;
const ENDT=`<table class="gtab"><tr><th class="h">Person</th><th class="h">Endung</th><th class="h">hört man?</th></tr>
 <tr><td>je / j’</td><td><span class="en mute">-e</span></td><td>🔇 nein</td></tr><tr><td>tu</td><td><span class="en mute">-es</span></td><td>🔇 nein</td></tr><tr><td>il / elle / on</td><td><span class="en mute">-e</span></td><td>🔇 nein</td></tr>
 <tr><td>nous</td><td><span class="en">-ons</span></td><td>🔊 ja [ɔ̃]</td></tr><tr><td>vous</td><td><span class="en">-ez</span></td><td>🔊 ja [e]</td></tr><tr><td>ils / elles</td><td><span class="en mute">-ent</span></td><td>🔇 nein</td></tr></table>`;
window.CHAPTERS=[
/* 1 */
{id:'entdecken',kind:'Einstieg',icon:'🔎',title:'Entdecken: Was machen sie?',sub:'Freizeit zu Hause – finde die Verben',lv:1,
html:card('Was machen die Kinder?','🏠',`<div class="objrow">${SC('Clara','Clara regarde des photos.','Clara schaut Fotos an.')}${SC('Théo','Théo écoute un CD.','Théo hört eine CD.')}${SC('Jade','Jade téléphone à Yasmine.','Jade telefoniert mit Yasmine.')}${SC('Karim','Noah et Karim parlent français.','Noah und Karim sprechen Französisch.')}${SC('Martel','Monsieur Martel présente la classe.','Herr Martel stellt die Klasse vor.')}${SC('Lucas','Lucas appelle Léo: «Léo, regarde!»','Lucas ruft Léo: „Léo, schau mal!“')}</div>`)
 +card('Lies mit','📖',dlg('À la maison',D1,{bg:'maison'}))
 +reveal('🔍 Was fällt dir auf? Vergleiche: tu écout<b>es</b> – j’écout<b>e</b> – elles parl<b>ent</b> – nous regard<b>ons</b>',`<p>Der <b>vordere Teil</b> des Verbs bleibt gleich (écout-, parl-, regard-). Das nennt man den <b>Stamm</b>. Hinten ändert sich die <b>Endung</b> – je nachdem, <b>wer</b> etwas tut:</p>${BAU}<p>Und: Vor einem Vokal wird <b>je</b> zu <b>j’</b>: j’écoute.</p>`),
ex:[
 mt('Was bedeuten die Verben?',[['regarder','anschauen'],['écouter','hören'],['parler','sprechen'],['téléphoner','telefonieren'],['présenter','vorstellen'],['appeler','rufen']],'Das sind die sechs Verben aus deinem Heft.',{say:[['','regarder, écouter, parler, téléphoner, présenter, appeler']]}),
 mc('Was bedeutet «Théo écoute un CD.»?',['Théo hört eine CD.','Théo schaut eine CD an.','Théo kauft eine CD.','Théo spricht über eine CD.'],'écouter = hören.',{say:'Théo écoute un CD.'}),
 mc('Was bedeutet «Jade téléphone à Yasmine.»?',['Jade telefoniert mit Yasmine.','Jade schaut Yasmine an.','Jade stellt Yasmine vor.','Jade hört Yasmine zu.'],'téléphoner à … = mit … telefonieren / … anrufen.',{say:'Jade téléphone à Yasmine.'}),
 mul('Tippe alle Formen von <b>regarder</b> an.',[['regarde',1],['regardons',1],['regardent',1],['regardes',1],['écoute',0],['parlent',0],['regard',0]],'regarde, regardes, regardons, regardent sind Formen von regarder. «regard» allein ist nur der Stamm – ohne Endung gibt es das Verb nicht.'),
 mc('Was ist der <b>Stamm</b> von <b>parler</b>?',['parl-','parle-','par-','parler-'],'Infinitiv minus -er: parl|er → <b>parl-</b>.'),
 seg('Wer macht was? Ordne zu.',['regarde','écoute','téléphone','parlent'],[[CHARS.Clara.replace('class="kid"','class="kid" style="width:34px"')+' Clara …','regarde'],[CHARS['Théo'].replace('class="kid"','class="kid" style="width:34px"')+' Théo …','écoute'],[CHARS.Jade.replace('class="kid"','class="kid" style="width:34px"')+' Jade …','téléphone'],[CHARS.Karim.replace('class="kid"','class="kid" style="width:34px"')+' Noah et Karim …','parlent']],'Clara regarde des photos · Théo écoute un CD · Jade téléphone à Yasmine · Noah et Karim parlent français.'),
]},
/* 2 */
{id:'bauplan',kind:'Regel',icon:'🧱',title:'Der Bauplan: Stamm + Endung',sub:'Infinitiv minus -er – dann die passende Endung',lv:1,
html:card('So baust du jede Form','🧱',`${steps(['Nimm den Infinitiv: <span class="fr">regarder</span>','Streiche <b>-er</b> weg → Stamm: <span class="st">regard</span>','Hänge die Endung an, die zur Person passt: je <span class="st">regard</span><span class="en">e</span>'])}${BAU}`)
 +card('Die Endungen','🔚',ENDT+`<p style="margin-top:8px">Merkspruch: <b>e – es – e – ons – ez – ent</b> ${spk('regarde, regardes, regarde, regardons, regardez, regardent','','mini','Alle Formen anhören')}</p>`)
 +card('Beispiel: regarder','📋',conj(V.regarder))
 +hoer(`<p>Die Formen mit <b>orangem Hintergrund</b> klingen alle <b>gleich</b> – die Endungen -e, -es, -ent sind stumm:</p><p>${F('je regarde · tu regardes · il regarde · ils regardent')}</p><p>Nur bei <b>nous</b> [ɔ̃] und <b>vous</b> [e] hörst du die Endung: ${F('nous regardons')} ${F('vous regardez')}</p>`)
 +merk('⭐ Merkkasten',`<ul><li><b>Stamm = Infinitiv minus -er</b>: regard|er, écout|er, parl|er, téléphon|er, présent|er.</li><li>Endungen: <b>-e, -es, -e, -ons, -ez, -ent</b></li><li>Vor Vokal wird <b>je → j’</b>: ${F('j’écoute')} ${F('j’appelle')}</li><li>Der Stamm bleibt <b>immer gleich</b> – auch mit Akzenten: téléphon-, écout-, présent-.</li></ul>`),
ex:[
 mc('Was ist der Stamm von <b>téléphoner</b>?',['téléphon-','téléphones-','télépho-','téléphone-'],'Infinitiv minus -er: téléphon|er → <b>téléphon-</b>. (Nicht „telephones“!)',{lv:1}),
 mc('Was ist der Stamm von <b>écouter</b>?',['écout-','écoute-','ecout-','écou-'],'écout|er → <b>écout-</b> – mit Akzent é!'),
 mc('Was ist der Stamm von <b>présenter</b>?',['présent-','présente-','present-','prés-'],'présent|er → <b>présent-</b>.'),
 seg('Welche Endung passt?',['-e','-es','-ons','-ez','-ent'],[['tu regard…','-es'],['nous regard…','-ons'],['vous regard…','-ez'],['ils regard…','-ent'],['je regard…','-e']],'je -e · tu -es · nous -ons · vous -ez · ils -ent.'),
 gap('Setze die Endung ein.','Tu regard{0} des photos.',[['es','e','ez','ent']],'tu → -es: tu regardes.'),
 gap('Setze die Endung ein.','Nous regard{0} la photo.',[['ons','onz','ont','ez']],'nous → -ons (mit s!): nous regardons.'),
 gap('Setze die Endung ein.','Vous regard{0} le globe.',[['ez','es','ent','ons']],'vous → -ez: vous regardez.'),
 gap('Setze die Endung ein.','Les élèves regard{0} la photo.',[['ent','ont','e','es']],'ils (les élèves) → -ent: ils regardent.'),
 wr('Schreibe die Form: <b>je</b> + regarder',['je regarde','regarde'],'je regarde.',{ph:'je …'}),
 wr('Schreibe die Form: <b>nous</b> + parler',['nous parlons','parlons'],'nous parlons – Stamm parl- + -ons.',{ph:'nous …',lv:2}),
 wr('Schreibe die Form: <b>ils</b> + parler',['ils parlent','parlent'],'ils parlent – Stamm parl- + -ent.',{ph:'ils …',lv:2}),
 mc('Welche Formen klingen <b>gleich</b>?',['je regarde – tu regardes – ils regardent','nous regardons – vous regardez','tu regardes – vous regardez','je regarde – nous regardons'],'Die Endungen -e, -es, -ent sind stumm – diese Formen klingen alle [ʁəɡaʁd].',{say:'je regarde, tu regardes, ils regardent',lv:2}),
]},
/* 3 */
{id:'heftverben',kind:'Regel',icon:'📒',title:'Die Verben aus deinem Heft',sub:'regarder, présenter, écouter, téléphoner, parler',lv:1,
html:card('Alle Formen zum Anhören','🎧','<p>Tippe oben auf ein Verb. Hör dir jede Form an und sprich laut nach – erst langsam, dann schneller.</p>'+tabs([['regarder',conj(V.regarder)],['présenter',conj({...V.presenter,note:'Akzent: pr<b>é</b>senter – das é bleibt in allen Formen.'})],['écouter',conj({...V.ecouter,note:'Vor Vokal: <b>j’</b>écoute. Liaison: nous‿écoutons [nuzekutɔ̃], vous‿écoutez, ils‿écoutent [ilzekut].'})],['téléphoner',conj({...V.telephoner,note:'Zwei Akzente: t<b>é</b>l<b>é</b>phoner. Stamm: <b>téléphon-</b> (ohne -es!).'})],['parler',conj(V.parler)]]))
 +attn(`<ul><li><b>Akzente gehören zum Stamm</b> und bleiben in allen Formen: ${F('je téléphone')} ${F('nous écoutons')} ${F('vous présentez')}</li><li>Stamm von téléphoner ist <b>téléphon-</b>, nicht „telephones-“: ${F('je téléphone')}, ${F('tu téléphones')}</li><li><b>tu</b> + <b>-es</b> (nicht -ez): ${F('tu présentes')}</li></ul>`,'Attention! Hier passieren die meisten Fehler')
 +hoer(`<p>Bei Verben, die mit einem <b>Vokal</b> anfangen, hörst du die Liaison:</p><ul><li>${F('il écoute')} [ilekut] – ${F('ils‿écoutent')} [ilzekut]: Das <b>[z]</b> verrät dir den Plural!</li><li>${F('elle écoute')} – ${F('elles‿écoutent')} genauso.</li></ul>`),
ex:[
 gap('Setze die richtige Form ein.','Tu {0} des photos.',[['regardes','regardez','regarde','regardent']],'tu → -es: tu regardes.'),
 gap('Setze die richtige Form ein.','Nous {0} un CD.',[['écoutons','écoutez','écoutent','écoutonz']],'nous → -ons: nous écoutons.'),
 gap('Setze die richtige Form ein.','Clara {0} avec Yasmine.',[['parle','parles','parlent','parlez']],'Clara = elle → -e: elle parle.'),
 gap('Setze die richtige Form ein.','Vous {0} la classe.',[['présentez','présentes','présentons','présente']],'vous → -ez: vous présentez.'),
 gap('Setze die richtige Form ein.','Je {0} à Karim.',[['téléphone','téléphones','telephone','téléphonez']],'je téléphone – mit zwei Akzenten.'),
 gap('Setze die richtige Form ein.','Karim et Noah {0} la guitare de Théo.',[['écoutent','écoutont','écoute','écoutez']],'Karim et Noah = ils → -ent: ils écoutent.'),
 gap('Setze die richtige Form ein.','On {0} français.',[['parle','parlons','parlent','parles']],'on → wie il/elle: on parle.'),
 gap('Setze die richtige Form ein.','Je {0} ma chambre.',[['présente','présentes','présent','présentez']],'je présente.'),
 gap('Setze die richtige Form ein.','{0} un CD.',[['J’écoute','Je écoute','J’écoutes','Je écoutes']],'Vor Vokal: je → j’: J’écoute un CD.'),
 wr('Konjugiere: <b>tu</b> + présenter',['tu présentes','présentes'],'tu présentes – mit -es, nicht -ez!',{strict:true,lv:2}),
 wr('Konjugiere: <b>vous</b> + téléphoner',['vous téléphonez','téléphonez'],'vous téléphonez – zwei Akzente!',{strict:true,lv:2}),
 wr('Konjugiere: <b>elles</b> + écouter',['elles écoutent','écoutent'],'elles écoutent – Endung -ent.',{strict:true,lv:2}),
]},
/* 4 */
{id:'appeler',kind:'Besonderheit',icon:'📣',title:'appeler: mal ll, mal l',sub:'Doppel-l nur, wenn die Endung stumm ist',lv:2,
html:card('appeler – rufen, anrufen','📣',conj({...V.appeler,note:'<b class="ll">ll</b> bei stummer Endung (-e, -es, -ent) · <b class="l1">l</b> bei hörbarer Endung (-ons, -ez) und im Infinitiv appe<b class="l1">l</b>er.'}))
 +merk('⭐ Merkkasten: Die ll-Regel',`<ul><li><b>Doppel-l</b>, wenn man die Endung <b>nicht hört</b>: ${F('j’appelle')} ${F('tu appelles')} ${F('il appelle')} ${F('ils appellent')}</li><li><b>Ein l</b>, wenn man die Endung <b>hört</b>: ${F('nous appelons')} ${F('vous appelez')}</li><li>Auch der Infinitiv hat nur <b>ein l</b>: <span class="fr">appeler</span> (nicht „appeller“!)</li><li>Es sind genau die Formen mit <b>orangem Hintergrund</b> – dieselben, die gleich klingen!</li></ul>`)
 +card('s’appeler – heißen','🙋',`<p>Das kennst du schon! <span class="fr">s’appeler</span> = heißen (wörtlich: sich rufen):</p><table class="t"><tr><td>${F('Je m’appelle Clara.')}</td><td>Ich heiße Clara.</td></tr><tr><td>${F('Tu t’appelles comment?')}</td><td>Wie heißt du?</td></tr><tr><td>${F('Il s’appelle Karim.')}</td><td>Er heißt Karim.</td></tr><tr><td>${F('Elle s’appelle Jade.')}</td><td>Sie heißt Jade.</td></tr></table><p class="legend">Auch hier: Doppel-l bei stummer Endung (m’appe<b>ll</b>e, t’appe<b>ll</b>es, s’appe<b>ll</b>e).</p>`)
 +attn('<ul><li>Nicht überall „appell“ schreiben! <s>nous appellons</s> → <b>nous appelons</b>, <s>vous appellez</s> → <b>vous appelez</b></li><li>Infinitiv: <s>appeller</s> → <b>appeler</b></li><li>Vor Vokal: <s>je appelle</s> → <b>j’appelle</b></li></ul>'),
ex:[
 seg('ll oder l?',['ll','l'],[['j’appe__e','ll'],['nous appe__ons','l'],['tu appe__es','ll'],['vous appe__ez','l'],['ils appe__ent','ll']],'ll bei stummer Endung (-e, -es, -ent), l bei -ons und -ez.'),
 seg('ll oder l?',['ll','l'],[['appe__er (Infinitiv)','l'],['il appe__e','ll'],['elles appe__ent','ll'],['je m’appe__e','ll']],'Infinitiv appeler: ein l. Sonst bei stummer Endung: ll.'),
 gap('Setze die richtige Form ein.','Nous {0} Monsieur Martel.',[['appelons','appellons','appelont','appellez']],'nous → hörbare Endung -ons → ein l: nous appelons.'),
 gap('Setze die richtige Form ein.','Tu {0} Clara?',[['appelles','appeles','appellez','appelez']],'tu → stumme Endung -es → ll: tu appelles.'),
 gap('Setze die richtige Form ein.','Vous {0} Madame Fournier?',[['appelez','appellez','appelles','appelons']],'vous → hörbare Endung -ez → ein l: vous appelez.'),
 gap('Setze die richtige Form ein.','Léo et Lucas {0} Noah.',[['appellent','appelent','appellont','appelons']],'ils → stumme Endung -ent → ll: ils appellent.'),
 wr('Konjugiere: <b>je</b> + appeler',['j’appelle','appelle'],'j’appelle – j’ vor Vokal und ll.',{strict:true}),
 wr('Konjugiere: <b>nous</b> + appeler',['nous appelons','appelons'],'nous appelons – nur ein l!',{strict:true}),
 wr('Konjugiere: <b>ils</b> + appeler',['ils appellent','appellent'],'ils appellent – ll, Endung -ent.',{strict:true}),
 mc('Wie schreibt man den Infinitiv?',['appeler','appeller','apeler','appelé'],'appeler – nur ein l (die Endung -er hört man!).',{fr:true}),
 mc('Was bedeutet «Il s’appelle Noah.»?',['Er heißt Noah.','Er ruft Noah.','Er ruft Noah an.','Er stellt Noah vor.'],'s’appeler = heißen.',{say:'Il s’appelle Noah.'}),
]},
/* 5 */

{id:'leicht',kind:'Training ★',icon:'🌱',title:'Training: leicht',sub:'Endungen sicher einsetzen',lv:1,
html:merk('🔁 Kurz wiederholt',ENDT+'<p style="margin-top:8px">Stamm = Infinitiv minus -er · <b>j’</b> vor Vokal.</p>','blue'),
ex:[
 gap('Setze die Endung ein.','Tu écout{0} la musique?',[['es','ez','e']],'tu → -es.'),
 gap('Setze die Endung ein.','Nous parl{0} avec Jade.',[['ons','ez','ent']],'nous → -ons.'),
 gap('Setze die Endung ein.','Elles regard{0} le globe.',[['ent','ont','e']],'elles → -ent.'),
 gap('Setze die Endung ein.','Vous téléphon{0} à Samira?',[['ez','es','ons']],'vous → -ez.'),
 gap('Setze die Endung ein.','Je présent{0} Lucas.',[['e','es','ent']],'je → -e.'),
 gap('Setze die Endung ein.','Il appell{0} Clara.',[['e','es','ent']],'il → -e: il appelle.'),
 seg('Welches Pronomen passt? (Manchmal passen mehrere – wähle das eine, das hier steht.)',['tu','nous','vous','ils'],[['… regardez','vous'],['… écoutons','nous'],['… parles','tu'],['… téléphonent','ils']],'vous -ez · nous -ons · tu -es · ils -ent.'),
 mt('Verbinde die Satzhälften.',[['Je','regarde des B.D.'],['Tu','parles français?'],['Nous','écoutons un CD.'],['Vous','présentez la classe.']],'je -e · tu -es · nous -ons · vous -ez.',{say:[['','Je regarde des B.D. Tu parles français? Nous écoutons un CD. Vous présentez la classe.']]}),
 mc('Welche Form passt? «Les filles … à Karim.»',['téléphonent','téléphonont','téléphone','téléphonez'],'les filles = elles → -ent.',{fr:true}),
 mc('Welche Form passt? «… regarde la photo.»',['Je','Nous','Vous','Ils'],'regarde passt zu je (und il/elle/on).',{fr:true}),
]},
/* 7 */
{id:'mittel',kind:'Training ★★',icon:'🌿',title:'Training: mittel',sub:'Formen selbst schreiben und Sätze bauen',lv:2,
html:tip('Jetzt schreibst du die Formen selbst. <b>Achtung:</b> In diesen Aufgaben zählen die Akzente mit – wie in der Klassenarbeit!','✍️'),
ex:[
 gapw('Schreibe die richtige Form (Verb in Klammern).','Lucas {0} des photos. (regarder)',[['regarde']],'Lucas = il → regarde.',{strict:true}),
 gapw('Schreibe die richtige Form (Verb in Klammern).','Nous {0} la musique de Jade. (écouter)',[['écoutons']],'nous écoutons – mit é!',{strict:true}),
 gapw('Schreibe die richtige Form (Verb in Klammern).','Tu {0} à Clara? (téléphoner)',[['téléphones']],'tu téléphones – zwei Akzente, Endung -es.',{strict:true}),
 gapw('Schreibe die richtige Form (Verb in Klammern).','Les filles {0} avec Monsieur Martel. (parler)',[['parlent']],'les filles = elles → parlent.',{strict:true}),
 gapw('Schreibe die richtige Form (Verb in Klammern).','Vous {0} l’école. (présenter)',[['présentez']],'vous présentez.',{strict:true}),
 gapw('Schreibe die richtige Form (Verb in Klammern).','{0} un CD. (je / écouter)',[['J’écoute',"J'écoute"]],'Vor Vokal: J’écoute.',{strict:true}),
 gapw('Schreibe die richtige Form (Verb in Klammern).','Théo et moi, nous {0} les figurines. (regarder)',[['regardons']],'Théo et moi = nous → regardons.',{strict:true}),
 gapw('Schreibe die richtige Form (Verb in Klammern).','Karim {0} allemand et français. (parler)',[['parle']],'Karim = il → parle.',{strict:true}),
 ord('Bilde den Satz.',['Nous','regardons','des','photos','.'],'Nous regardons des photos.'),
 ord('Bilde den Satz.',['Clara et Jade','téléphonent','à','Yasmine','.'],'Clara et Jade téléphonent à Yasmine.'),
 ord('Bilde die Frage.',['Vous','parlez','français','?'],'Vous parlez français?'),
]},
/* 8 */
{id:'schwer',kind:'Training ★★★',icon:'🌳',title:'Training: schwer',sub:'Konjugieren, übersetzen, Texte – Klassenarbeitsniveau',lv:3,
html:tip('Klassenarbeitsniveau: ganze Verben konjugieren, übersetzen und Texte ergänzen. Akzente zählen mit!','🏋️'),
ex:[
 gapw('Konjugiere <b>écouter</b>.','j’{0}<br>tu {1}<br>il {2}<br>nous {3}<br>vous {4}<br>ils {5}',[['écoute'],['écoutes'],['écoute'],['écoutons'],['écoutez'],['écoutent']],'écoute · écoutes · écoute · écoutons · écoutez · écoutent – überall mit é.',{strict:true,say:'j’écoute, tu écoutes, il écoute, nous écoutons, vous écoutez, ils écoutent'}),
 gapw('Konjugiere <b>téléphoner</b>.','je {0}<br>tu {1}<br>elle {2}<br>nous {3}<br>vous {4}<br>elles {5}',[['téléphone'],['téléphones'],['téléphone'],['téléphonons'],['téléphonez'],['téléphonent']],'Stamm téléphon- + e, es, e, ons, ez, ent.',{strict:true,say:'je téléphone, tu téléphones, elle téléphone, nous téléphonons, vous téléphonez, elles téléphonent'}),
 gapw('Konjugiere <b>appeler</b>.','j’{0}<br>tu {1}<br>il {2}<br>nous {3}<br>vous {4}<br>ils {5}',[['appelle'],['appelles'],['appelle'],['appelons'],['appelez'],['appellent']],'ll bei stummer Endung, l bei -ons und -ez.',{strict:true,say:'j’appelle, tu appelles, il appelle, nous appelons, vous appelez, ils appellent'}),
 wr('Übersetze: „Wir hören eine CD.“',['Nous écoutons un CD.','On écoute un CD.'],'Nous écoutons un CD. – le CD ist männlich → un CD.',{strict:true}),
 wr('Übersetze: „Sprichst du Französisch?“',['Tu parles français?','Est-ce que tu parles français?','Parles-tu français?'],'Tu parles français? – tu + -es.',{strict:true}),
 wr('Übersetze: „Sie (Jade und Clara) telefonieren mit Karim.“',['Elles téléphonent à Karim.','Jade et Clara téléphonent à Karim.','Clara et Jade téléphonent à Karim.'],'Elles téléphonent à Karim. – téléphoner à …',{strict:true}),
 wr('Übersetze: „Ich stelle mein Zimmer vor.“',['Je présente ma chambre.'],'Je présente ma chambre.',{strict:true}),
 gapw('Ergänze den Text mit den Verben in Klammern.','À la maison, je {0} (regarder) des B.D. et j’{1} (écouter) des CD. Théo et moi, nous {2} (parler) ensemble. Et toi, tu {3} (téléphoner) à Lucas?',[['regarde'],['écoute'],['parlons'],['téléphones']],'regarde · écoute · parlons · téléphones.',{strict:true}),
 mt('Welche Form gehört zu welchem Pronomen?',[['je','présente'],['tu','présentes'],['nous','présentons'],['vous','présentez'],['ils','présentent']],'e – es – ons – ez – ent.',{say:[['','je présente, tu présentes, nous présentons, vous présentez, ils présentent']]}),
 wr('Setze in den Plural: «Il écoute la guitare.» → Ils …',['Ils écoutent la guitare.'],'il écoute → ils écoutent.',{strict:true}),
]},
/* 9 */
{id:'fehler',kind:'Fehlerdetektiv',icon:'🕵️',title:'Fehlerdetektiv: die Heft-Fehler',sub:'Genau diese Fehler standen im Heft – jetzt findest du sie!',lv:2,
html:attn(`<table class="t"><tr><th>✗ falsch</th><th>✓ richtig</th><th>Warum?</th></tr>
 <tr><td><s>telephones|e</s></td><td><span class="fr">téléphon|e</span></td><td>Stamm = Infinitiv minus -er: téléphon|er</td></tr>
 <tr><td><s>telephoner</s></td><td>${F('téléphoner')}</td><td>zwei Akzente é</td></tr>
 <tr><td><s>nous appellons</s></td><td>${F('nous appelons')}</td><td>Endung hörbar → nur ein l</td></tr>
 <tr><td><s>appeller</s></td><td>${F('appeler')}</td><td>Infinitiv mit einem l</td></tr>
 <tr><td><s>nous regardonz</s></td><td>${F('nous regardons')}</td><td>Endung -ons (mit s)</td></tr>
 <tr><td><s>ils regardont</s></td><td>${F('ils regardent')}</td><td>Endung -ent (-ont gibt es nur bei ils sont)</td></tr>
 <tr><td><s>tu présentez</s></td><td>${F('tu présentes')}</td><td>tu → -es; -ez gehört zu vous</td></tr>
 <tr><td><s>ecouter, presenter</s></td><td>${F('écouter')} ${F('présenter')}</td><td>Akzente nicht vergessen</td></tr></table>`,'Attention! Die Fehler aus dem Heft')
 +tip('<b>Selbst-Check für jede Verbform:</b> 1. Stamm richtig? (Infinitiv minus -er, Akzente!) 2. Endung passt zur Person? (e, es, e, ons, ez, ent) 3. Bei appeler: ll oder l?','🔍'),
ex:[
 det('Fehlerdetektiv: Finde die Fehler im Hefteintrag.','je [telephonese|téléphone] · tu téléphones · il téléphone · nous [téléphononz|téléphonons] · vous téléphonez · ils [téléphonont|téléphonent]','téléphone (Stamm téléphon-) · téléphonons (-ons) · téléphonent (-ent).',{speak:false}),
 det('Fehlerdetektiv: Finde die Fehler bei appeler.','j’appelle · tu appelles · il appelle · nous [appellons|appelons] · vous [appellez|appelez] · ils appellent','Bei nous und vous hört man die Endung → nur ein l.',{speak:false}),
 det('Fehlerdetektiv: Finde die Fehler bei présenter.','je présente · tu [présentez|présentes] · il présente · nous [présentonz|présentons] · vous présentez · ils [présentont|présentent]','tu présentes · nous présentons · ils présentent.',{speak:false}),
 det('Fehlerdetektiv: Finde die Fehler im Text.','Clara et Jade [regardont|regardent] des photos. Nous [ecoutons|écoutons] un CD. Tu [parlez|parles] français? Je [telephone|téléphone] à Karim.','regardent · écoutons · parles · téléphone.'),
 mc('Was ist der Stamm von téléphoner?',['téléphon-','telephones-','téléphone-','téléph-'],'Infinitiv minus -er: téléphon|er → téléphon-. Im Heft stand fälschlich „telephones“.'),
 mc('Welche Form ist richtig?',['nous appelons','nous appellons','nous appelonz','nous appellonz'],'nous appelons: ein l (Endung hörbar) und -ons.',{fr:true}),
 mc('Welche Form ist richtig?',['ils regardent','ils regardont','ils regardents','ils regarde'],'ils → -ent. „-ont“ gibt es nur bei ils sont.',{fr:true}),
 wr('Verbessere: «tu présentez»',['tu présentes'],'tu → -es.',{strict:true}),
 wr('Verbessere: «vous appellez»',['vous appelez'],'vous → hörbare Endung -ez → ein l.',{strict:true}),
 wr('Verbessere: «nous ecoutonz»',['nous écoutons'],'Akzent é und Endung -ons.',{strict:true}),
]},
];
window.TEST_EX=[
 gapw('Setze die richtige Form ein (Verb in Klammern).','1. Tu {0} (regarder) des photos. 2. Nous {1} (écouter) un CD. 3. Clara {2} (parler) avec Yasmine. 4. Vous {3} (présenter) la classe. 5. Les élèves {4} (regarder) le globe. 6. Je {5} (téléphoner) à Karim.',[['regardes'],['écoutons'],['parle'],['présentez'],['regardent'],['téléphone']],'regardes · écoutons · parle · présentez · regardent · téléphone.',{strict:true,say:'Tu regardes des photos. Nous écoutons un CD. Clara parle avec Yasmine. Vous présentez la classe. Les élèves regardent le globe. Je téléphone à Karim.',ref:'heftverben',tag:'Endungen'}),
 gapw('Konjugiere <b>parler</b>.','je {0}<br>tu {1}<br>on {2}<br>nous {3}<br>vous {4}<br>elles {5}',[['parle'],['parles'],['parle'],['parlons'],['parlez'],['parlent']],'parle · parles · parle · parlons · parlez · parlent.',{strict:true,ref:'bauplan',tag:'Konjugation',say:'je parle, tu parles, on parle, nous parlons, vous parlez, elles parlent'}),
 gapw('appeler: Schreibe die Formen.','nous {0}<br>ils {1}<br>tu {2}',[['appelons'],['appellent'],['appelles']],'nous appelons (l) · ils appellent (ll) · tu appelles (ll).',{strict:true,ref:'appeler',tag:'appeler: ll/l',say:'nous appelons, ils appellent, tu appelles'}),
 det('Fehlerdetektiv: Finde die 4 Fehler.','Les élèves [écoutont|écoutent] Monsieur Martel. Tu [téléphonez|téléphones] à Léo? Nous [appellons|appelons] Samira. Vous [presentez|présentez] la classe.','écoutent · téléphones · appelons · présentez.',{ref:'fehler',tag:'Fehler finden'}),
 wr('Übersetze: „Ihr schaut die Fotos an.“',['Vous regardez les photos.'],'Vous regardez les photos.',{strict:true,ref:'schwer',tag:'Übersetzen'}),
];
/* Pro Durchgang: so viele Aufgaben je Kapitel (Rest = Reserve-Pool); Pflichtaufgaben zu den Heftfehlern */
H.setRun({entdecken:2,bauplan:3,heftverben:3,appeler:3,leicht:4,mittel:4,schwer:4,fehler:3},{bauplan:[0],heftverben:[9],appeler:[0],fehler:[0,1,2],test:[2,3]});
/* INTRO */
H.setIntro({
_lesson:{t:'Verben auf -er: Stamm + Endung',
 was:'Die meisten französischen Verben enden auf <b>-er</b>: regarder, écouter, parler … Sie funktionieren alle nach demselben <b>Bauplan</b>: <b>Stamm + Endung</b>.',
 warum:'In der Arbeit musst du Verben aus dem Heft konjugieren (regarder, présenter, écouter, téléphoner, parler, appeler) und in Sätze einsetzen. Mit dem Bauplan schaffst du jedes davon.',
 schritte:['Nimm den Infinitiv (die Grundform): <b>regarder</b>.','Streiche <b>-er</b> weg → Stamm: <b>regard</b>.','Häng die Endung an, die zur Person passt: je regard<b>e</b>, nous regard<b>ons</b> …'],
 tab:'<table class="cj"><tr><td>je regard<b>e</b></td><td>-e (stumm)</td></tr><tr><td>tu regard<b>es</b></td><td>-es (stumm)</td></tr><tr><td>il / elle / on regard<b>e</b></td><td>-e (stumm)</td></tr><tr><td>nous regard<b>ons</b></td><td>-ons (hörbar)</td></tr><tr><td>vous regard<b>ez</b></td><td>-ez (hörbar)</td></tr><tr><td>ils / elles regard<b>ent</b></td><td>-ent (stumm!)</td></tr></table>',
 bsp:[['Je regarde des photos.','Ich schaue Fotos an.'],['Tu écoutes un CD?','Hörst du eine CD?'],['On parle français.','Wir sprechen Französisch. (on → -e)'],['Nous téléphonons à Clara.','Wir telefonieren mit Clara.'],['Vous présentez la classe.','Ihr stellt die Klasse vor.'],['Ils écoutent la musique.','Sie hören die Musik.']],
 merk:'Stamm + Endung: -e, -es, -e, -ons, -ez, -ent',
 fallen:['<b>tu</b> → -es, <b>vous</b> → -ez. Nicht verwechseln: tu présent<b>es</b>, vous présent<b>ez</b>.','<b>ils / elles</b> → <b>-ent</b> (stumm), nicht -ont! (-ont gibt es nur bei ils sont.)','<b>nous</b> → -ons mit <b>s</b>, nicht -onz.','<b>on</b> → wie il: on regard<b>e</b>, on <b>est</b>.','<b>appeler</b>: ll bei stummer Endung (j’appelle), l bei -ons / -ez (nous appelons).','Vor Vokal: je → <b>j’</b> (j’écoute, j’appelle).'],
 check:['Wer tut es? → Pronomen.','Stamm bilden (Infinitiv minus -er).','Passende Endung anhängen – Akzente vom Infinitiv mitnehmen (téléphoner → je téléphone).']},
entdecken:{rule:"Stamm (Infinitiv minus -er) + Endung: je -e, tu -es, il / elle / on -e, nous -ons, vous -ez, ils / elles -ent.",t:'Entdecken: Was machen sie?',
 was:'Die Kinder machen verschiedene Dinge: Fotos anschauen, CDs hören, telefonieren … Schau dir die Verben an: Was bleibt gleich, was ändert sich?',
 schritte:['Lies die Sätze und hör sie dir an.','Vergleiche die Verben: regard<b>e</b>, regard<b>ent</b> …','Der Anfang (Stamm) bleibt gleich, nur das Ende (Endung) ändert sich.'],
 bsp:[['Clara regarde des photos.','Clara schaut Fotos an.'],['Théo écoute un CD.','Théo hört eine CD.'],['Jade téléphone à Yasmine.','Jade telefoniert mit Yasmine.'],['Noah et Karim parlent français.','Noah und Karim sprechen Französisch.']],
 merk:'Der Stamm bleibt gleich – nur die Endung passt sich der Person an.',
 fallen:['Noah et Karim (mehrere) → parl<b>ent</b>, nicht parle.'],
 check:['Lesen und hören.','Stamm und Endung erkennen.','Fragen beantworten.']},
bauplan:{rule:"Stamm (Infinitiv minus -er) + Endung: je -e, tu -es, il / elle / on -e, nous -ons, vous -ez, ils / elles -ent.",t:'Der Bauplan: Stamm + Endung',
 was:'So baust du jede Form eines -er-Verbs – Schritt für Schritt.',
 schritte:['Infinitiv: <b>parler</b>.','-er weg → Stamm <b>parl</b>.','Endung dazu: je parl<b>e</b>, tu parl<b>es</b>, il parl<b>e</b>, nous parl<b>ons</b>, vous parl<b>ez</b>, ils parl<b>ent</b>.'],
 bsp:[['je parle','ich spreche'],['tu parles','du sprichst'],['elle parle','sie spricht'],['nous parlons','wir sprechen'],['vous parlez','ihr sprecht'],['elles parlent','sie sprechen']],
 merk:'-e, -es, -e, -ons, -ez, -ent',
 fallen:['-e, -es und -ent hört man nicht – parle, parles, parlent klingen gleich! Du musst trotzdem die richtige Endung schreiben.','-ent bei ils / elles ist stumm, nicht wie „-ent“ im Deutschen sprechen.'],
 check:['Pronomen ansehen.','Stamm bilden.','Endung aus dem Merksatz anhängen.']},
heftverben:{rule:"Stamm (Infinitiv minus -er) + Endung: je -e, tu -es, il / elle / on -e, nous -ons, vous -ez, ils / elles -ent.",t:'Die Verben aus deinem Heft',
 was:'Diese Verben musst du für die Arbeit können: <b>regarder</b> (anschauen), <b>présenter</b> (vorstellen), <b>écouter</b> (hören), <b>téléphoner</b> (telefonieren), <b>parler</b> (sprechen).',
 schritte:['Stamm bilden: regard-, présent-, écout-, téléphon-, parl-.','Akzente aus dem Infinitiv bleiben: <b>é</b>couter → j’<b>é</b>coute, t<b>é</b>l<b>é</b>phoner → je t<b>é</b>l<b>é</b>phone.','Bei écouter (Vokal am Anfang): je → <b>j’</b>écoute.'],
 bsp:[['je présente','ich stelle vor'],['j’écoute','ich höre'],['tu téléphones','du telefonierst'],['nous regardons','wir schauen an'],['ils parlent','sie sprechen']],
 merk:'Akzente vom Infinitiv immer mitnehmen – und j’ vor Vokal.',
 fallen:['Stamm von téléphoner ist <b>téléphon-</b> (nicht „telephones“).','<b>je écoute</b> ✗ → <b>j’écoute</b>.'],
 check:['Verb hören und nachsprechen.','Stamm + Endung.','Akzente prüfen.']},
appeler:{rule:"appeler: Endung stumm (-e, -es, -ent) → ll (j’appelle). Endung hörbar (-ons, -ez, -er) → ein l (nous appelons).",t:'appeler: mal ll, mal l',
 was:'<b>appeler</b> (rufen, anrufen) ist fast regelmäßig – aber es hat mal <b>ll</b> und mal <b>l</b>. Auch <b>s’appeler</b> (heißen) funktioniert so: je m’appe<b>ll</b>e.',
 schritte:['Hörst du die Endung <b>nicht</b> (-e, -es, -ent)? → <b>ll</b>: j’appe<b>ll</b>e, tu appe<b>ll</b>es, il appe<b>ll</b>e, ils appe<b>ll</b>ent.','Hörst du die Endung (-ons, -ez, -er)? → nur <b>ein l</b>: nous appe<b>l</b>ons, vous appe<b>l</b>ez, appe<b>l</b>er.'],
 tab:'<table class="cj"><tr><td>j’appe<b>ll</b>e</td><td>tu appe<b>ll</b>es</td></tr><tr><td>il / elle / on appe<b>ll</b>e</td><td>nous appe<b>l</b>ons</td></tr><tr><td>vous appe<b>l</b>ez</td><td>ils / elles appe<b>ll</b>ent</td></tr></table>',
 bsp:[['J’appelle Clara.','Ich rufe Clara an.'],['Nous appelons Monsieur Martel.','Wir rufen Monsieur Martel an.'],['Vous appelez Jade?','Ruft ihr Jade an?'],['Ils appellent Karim.','Sie rufen Karim an.'],['Je m’appelle Léo.','Ich heiße Léo.']],
 merk:'Endung stumm (-e, -es, -ent) → ll. Endung hörbar (-ons, -ez, -er) → l.',
 fallen:['<b>nous appellons</b> ✗ → nous appe<b>l</b>ons.','<b>appeller</b> ✗ → appe<b>l</b>er (Infinitiv mit einem l).','<b>je m’apelle</b> ✗ → je m’appe<b>ll</b>e (zwei p, zwei l).'],
 check:['Endung bestimmen.','Hörbar oder stumm?','ll oder l schreiben – und immer zwei p.']},
leicht:{rule:"Stamm (Infinitiv minus -er) + Endung: je -e, tu -es, il / elle / on -e, nous -ons, vous -ez, ils / elles -ent.",t:'Training ★: Endungen wählen',
 was:'Wähle die richtige Form. So lernst du die Endungen.',
 schritte:['Wer? → Pronomen (bei Namen: il, elle, ils, elles).','Endung aus dem Merksatz.','Antippen.'],
 bsp:[['je regarde','ich schaue an'],['tu parles','du sprichst'],['nous écoutons','wir hören'],['elles téléphonent','sie telefonieren']],
 merk:'-e, -es, -e, -ons, -ez, -ent',
 fallen:['tu -es / vous -ez nicht verwechseln.'],
 check:['Pronomen.','Endung.','Antippen.']},
mittel:{rule:"Stamm (Infinitiv minus -er) + Endung: je -e, tu -es, il / elle / on -e, nous -ons, vous -ez, ils / elles -ent.",t:'Training ★★: Formen schreiben',
 was:'Jetzt schreibst du die Formen selbst. Hier zählen die Akzente mit – wie in der Klassenarbeit.',
 schritte:['Stamm bilden (mit Akzenten!).','Endung anhängen.','Bei appeler: ll oder l?'],
 bsp:[['vous écoutez','ihr hört'],['je téléphone','ich telefoniere'],['ils présentent','sie stellen vor'],['nous appelons','wir rufen an']],
 merk:'Akzente gehören zum Wort: écouter, téléphoner, présenter.',
 fallen:['„telephone“ ohne Akzente zählt als Fehler.','„ils presentont“ ✗ → ils présent<b>ent</b>.'],
 check:['Stamm.','Endung.','Akzente.']},
schwer:{rule:"Stamm (Infinitiv minus -er) + Endung: je -e, tu -es, il / elle / on -e, nous -ons, vous -ez, ils / elles -ent.",t:'Training ★★★: konjugieren und übersetzen',
 was:'Klassenarbeitsniveau: ganze Verben konjugieren, Sätze übersetzen, Texte ergänzen.',
 schritte:['Wer tut es?','Verb finden, Stamm + Endung.','Rest des Satzes übersetzen – Akzente!'],
 bsp:[['Nous écoutons un CD.','Wir hören eine CD.'],['On écoute un CD.','Wir hören eine CD. (auch richtig)'],['Clara et Jade regardent des photos.','Clara und Jade schauen Fotos an.'],['Tu présentes Karim?','Stellst du Karim vor?']],
 merk:'„Wir …“ = nous …-ons oder on …-e – beides richtig.',
 fallen:['on écout<b>e</b> – nicht on écoutons.','Mehrere Namen → -ent.'],
 check:['Pronomen.','Verbform.','Satz prüfen.']},
fehler:{rule:"Stamm (Infinitiv minus -er) + Endung: je -e, tu -es, il / elle / on -e, nous -ons, vous -ez, ils / elles -ent.",t:'Fehlerdetektiv: die Heft-Fehler',
 was:'Diese Fehler standen in deinem Heft. Finde sie in den Sätzen – dann passieren sie dir in der Arbeit nicht mehr.',
 schritte:['Jedes Verb ansehen.','Stamm richtig? Endung passt zur Person? Akzente da?','Fehler antippen.'],
 bsp:[['je téléphone','Stamm ist téléphon- (nicht <s>telephones-</s>) + Endung -e'],['nous appelons','nicht: <s>nous appellons</s> – Endung hörbar → ein l'],['ils regardent','nicht: <s>ils regardont</s> – ils → -ent'],['tu présentes','nicht: <s>tu présentez</s> – tu → -es']],
 merk:'Stamm (mit Akzenten) + passende Endung – bei appeler ll/l prüfen.',
 fallen:['nous -on<b>s</b>, nicht -onz.'],
 check:['Lesen.','Verb prüfen.','Antippen.']}
});
(function(){const W=window,V=window.V;
/* Bildliche Erklärungen (feste Vorlage) – Verben auf -er */
H.patchIntro({
_lesson:{tab:'',vis:V.legoGrid('regarder'),
 was:'Jedes -er-Verb = <b>Stamm</b> + <b>Endung</b>, wie Lego.',
 warumVis:'<div class="aset">'+V.lego('regard','er',{ear:false})+' <span class="big-ic">→</span> '+V.lego('regard','ons')+'</div>',
 warum:'Ein Bauplan für alle: regarder, écouter, parler, présenter, téléphoner.',
 schritte:[[V.lego('regard','er',{ear:false}),'-er weg → <b>Stamm</b>'],[V.b('nous','p'),'Wer?'],[V.lego('regard','ons'),'passende <b>Endung</b> dran']],
 merk:'Stamm + Endung: -e, -es, -e, -ons, -ez, -ent',
 fallen:[['ils regardont','ils regardent','ils → <b>-ent</b> (stumm).'],['je écoute','j’écoute','Vokal → <b>j’</b>.'],['nous regardonz','nous regardons','nous → <b>-ons</b>.']]},
entdecken:{vis:'<div class="aset">'+V.who('Clara')+'</div>'+V.train('Clara/s|regarde/v|des photos./r')+V.train('Ils/s|écoutent/v|des CD./r'),
 was:'Was machen die Kinder? Fotos ansehen, CDs hören, telefonieren …',
 warum:'Der Stamm bleibt gleich – nur die Endung ändert sich.',
 schritte:[['<span class="big-ic">📖</span>','Sätze lesen'],[V.lego('regard','e'),'Stamm finden'],['<span class="big-ic">🎨</span>','Endung ansehen (orange)']],
 fallen:[['Clara regarder des photos.','Clara regarde des photos.','Nicht die Grundform – Endung -e.']]},
bauplan:{parts:[V.onPart('er')],vis:V.legoGrid('parler'),
 was:'So baust du jede Form – Schritt für Schritt.',
 warumVis:'<div class="aset">'+V.lego('parl','e')+V.lego('parl','es')+V.lego('parl','ent')+' <span class="big-ic">≈</span> „parl“</div>',
 warum:'-e, -es, -ent hört man nicht – trotzdem muss man sie schreiben.',
 schritte:[[V.lego('parl','er',{ear:false}),'-er streichen'],[V.b('vous','p'),'Person bestimmen'],[V.lego('parl','ez'),'Endung anhängen']],
 fallen:[['vous parles','vous parlez','vous → <b>-ez</b>.'],['tu parle','tu parles','tu → <b>-es</b>.']]},
heftverben:{vis:'<div class="aset">'+[['regard','er','anschauen'],['présent','er','vorstellen'],['écout','er','hören'],['téléphon','er','telefonieren'],['parl','er','sprechen']].map(v=>'<span class="vcard">'+V.lego(v[0],v[1],{ear:false})+'<small>'+v[2]+'</small></span>').join('')+'</div>',
 was:'Diese 5 Verben brauchst du für die Arbeit.',
 warum:'Akzente gehören zum Stamm – sie bleiben in jeder Form.',
 schritte:[[V.lego('écout','er',{ear:false}),'Stamm mit Akzent'],[V.b('j’','p'),'Vokal → j’'],[V.lego('écout','e'),'Endung dran']],
 merk:'Akzente immer mitnehmen – und j’ vor Vokal.',
 fallen:[['je ecoute','j’écoute','j’ + Akzent é.'],['il telephone','il téléphone','zwei Akzente: é, é.']]},
appeler:{tab:'',vis:V.appeler(),
 was:'<b>appeler</b> hat mal <b>ll</b>, mal <b>l</b>.',
 warum:'Hört man die Endung nicht 🔇 → ll. Hört man sie 🔊 → l.',
 schritte:[['<span class="big-ic">👂</span>','Endung hörbar?'],['<span class="big-ic">🔇</span>','nein (-e, -es, -ent) → <b>ll</b>'],['<span class="big-ic">🔊</span>','ja (-ons, -ez, -er) → <b>l</b>']],
 fallen:[['nous appellons','nous appelons','-ons hört man → ein <b>l</b>.'],['je m’apelle','je m’appelle','stumme Endung → <b>ll</b> (und pp).']]},
leicht:{vis:V.legoGrid('écouter',{legend:false}),
 was:'Wähle die richtige Form.',
 warum:'So prägst du dir die Endungen ein.',
 schritte:[[V.b('ils','p'),'Wer?'],['<span class="big-ic">🧩</span>','passende Endung'],['<span class="big-ic">👆</span>','antippen']],
 fallen:[['ils écoute','ils écoutent','ils → -ent.']]},
mittel:{vis:V.train('Nous/s|téléphonons/v|à Clara./r',{labels:true}),
 was:'Du schreibst die Formen selbst – Akzente zählen.',
 warum:'In der Arbeit ist ein fehlender Akzent ein Fehler.',
 schritte:[[V.lego('téléphon','er',{ear:false}),'Stamm (mit Akzenten)'],['<span class="big-ic">🧩</span>','Endung'],['<span class="big-ic">é</span>','Akzente prüfen']],
 fallen:[['nous telephonons','nous téléphonons','Akzente bleiben.']]},
schwer:{vis:'<div class="cmp2"><span class="c2-f">🇩🇪</span>'+V.train('Wir/s|hören/v|Musik./r',{say:false})+'</div><div class="cmp2"><span class="c2-f">🇫🇷</span>'+V.train('Nous/s|écoutons/v|la musique./r')+'</div>',
 was:'Konjugieren und übersetzen wie in der Arbeit.',
 warum:'„Wir“ = nous …-ons oder on …-e – beides richtig.',
 schritte:[['<span class="big-ic">🇩🇪</span>','Wer?'],[V.lego('écout','ons'),'Stamm + Endung'],[V.b('la musique','r'),'Rest']],
 fallen:[['on écoutons','on écoute','on → Form von il: <b>-e</b>.']]},
fehler:{vis:V.vs('ils/p|regardont/v','ils/p|regardent/v'),
 was:'Diese Fehler standen in deinem Heft – finde sie.',
 warum:'Dann passieren sie dir in der Arbeit nicht mehr.',
 schritte:[['<span class="big-ic">🔍</span>','Stamm prüfen (Akzente?)'],['<span class="big-ic">🧩</span>','Endung prüfen'],['<span class="big-ic">ll/l</span>','bei appeler: ll oder l?']],
 fallen:[['nous regardonz','nous regardons','-ons mit s.'],['vous appellez','vous appelez','-ez hört man → ein l.']]}
});

})();
