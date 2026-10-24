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
 +card('Hör zu und lies mit','🎧',dlg('À la maison',D1,{bg:'maison'}))
 +reveal('🔍 Was fällt dir auf? Vergleiche: tu écout<b>es</b> – j’écout<b>e</b> – elles parl<b>ent</b> – nous regard<b>ons</b>',`<p>Der <b>vordere Teil</b> des Verbs bleibt gleich (écout-, parl-, regard-). Das nennt man den <b>Stamm</b>. Hinten ändert sich die <b>Endung</b> – je nachdem, <b>wer</b> etwas tut:</p>${BAU}<p>Und: Vor einem Vokal wird <b>je</b> zu <b>j’</b>: j’écoute.</p>`),
ex:[
 mt('Was bedeuten die Verben?',[['regarder','anschauen'],['écouter','hören'],['parler','sprechen'],['téléphoner','telefonieren'],['présenter','vorstellen'],['appeler','rufen']],'Das sind die sechs Verben aus deinem Heft.',{say:[['','regarder, écouter, parler, téléphoner, présenter, appeler']]}),
 mc('Was bedeutet «Théo écoute un CD.»?',['Théo hört eine CD.','Théo schaut eine CD an.','Théo kauft eine CD.','Théo spricht über eine CD.'],'écouter = hören.',{say:'Théo écoute un CD.'}),
 mc('Was bedeutet «Jade téléphone à Yasmine.»?',['Jade telefoniert mit Yasmine.','Jade schaut Yasmine an.','Jade stellt Yasmine vor.','Jade hört Yasmine zu.'],'téléphoner à … = mit … telefonieren / … anrufen.',{say:'Jade téléphone à Yasmine.'}),
 mul('Tippe alle Formen von <b>regarder</b> an.',[['regarde',1],['regardons',1],['regardent',1],['regardes',1],['écoute',0],['parlent',0],['regard',0]],'regarde, regardes, regardons, regardent sind Formen von regarder. «regard» allein ist nur der Stamm – ohne Endung gibt es das Verb nicht.'),
 mc('Was ist der <b>Stamm</b> von <b>parler</b>?',['parl-','parle-','par-','parler-'],'Infinitiv minus -er: parl|er → <b>parl-</b>.'),
 mc('Hör zu: Wer schaut Fotos an?',['Clara','Théo','Jade','Yasmine'],'Clara sagt: «Moi, je regarde des photos.»',{au:L2(D1)}),
 tf('Hör dir den Dialog an. Richtig oder falsch?',[['Théo écoute un CD de Lucas.',true],['Jade téléphone à Clara.',false],['Clara et Théo regardent les photos ensemble.',true]],'Jade telefoniert mit <b>Yasmine</b>.',{au:L2(D1)}),
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
{id:'hoeren',kind:'Hören',icon:'👂',title:'Hören: il oder ils?',sub:'Was man hört – und was nicht',lv:2,
html:hoer(`<p>Weil -e, -es und -ent stumm sind, klingen viele Formen <b>gleich</b>. Beim Hören hilft dir:</p><ul><li><b>Konsonant am Anfang</b>: ${F('il regarde')} = ${F('ils regardent')} – kein Unterschied! Du musst den <b>Zusammenhang</b> verstehen (z. B. <span class="fr">Clara et Jade</span> regardent …).</li><li><b>Vokal am Anfang</b>: ${F('il écoute')} [ilekut] ≠ ${F('ils‿écoutent')} [ilzekut] – das <b>[z]</b> verrät den Plural.</li><li>${F('il appelle')} [ilapɛl] ≠ ${F('ils‿appellent')} [ilzapɛl]</li><li><b>nous</b> und <b>vous</b> hörst du immer: -ons [ɔ̃], -ez [e].</li></ul>`,'Hörtipp: Was hört man?')
 +card('Hör-Training','🎧',`<table class="t"><tr><th>einer</th><th>mehrere</th><th>Unterschied?</th></tr>
 <tr><td>${F('Il parle.')}</td><td>${F('Ils parlent.')}</td><td>🔇 keiner</td></tr><tr><td>${F('Elle regarde.')}</td><td>${F('Elles regardent.')}</td><td>🔇 keiner</td></tr>
 <tr><td>${F('Il écoute.')}</td><td>${F('Ils‿écoutent.')}</td><td>🔊 [z]</td></tr><tr><td>${F('Elle appelle.')}</td><td>${F('Elles‿appellent.')}</td><td>🔊 [z]</td></tr></table>`),
ex:[
 seg('Hör zu: <b>il</b> oder <b>ils</b>? Oder hört man keinen Unterschied?',['il','ils','hört man nicht'],[['Satz 1','ils','Ils écoutent un CD.'],['Satz 2','il','Il écoute un CD.'],['Satz 3','hört man nicht','Il regarde la photo.'],['Satz 4','ils','Ils appellent Clara.']],'Satz 1: [ilzekut] → ils · Satz 2: [ilekut] → il · Satz 3: il regarde / ils regardent klingen gleich · Satz 4: [ilzapɛl] → ils.',{sub:'Tippe auf 🔊 und entscheide.'}),
 seg('Hör zu: <b>elle</b> oder <b>elles</b>? Oder hört man keinen Unterschied?',['elle','elles','hört man nicht'],[['Satz 1','hört man nicht','Elle parle français.'],['Satz 2','elles','Elles écoutent la guitare.'],['Satz 3','elle','Elle appelle Théo.'],['Satz 4','hört man nicht','Elle téléphone à Jade.']],'Nur bei Verben mit Vokal am Anfang hörst du das [z] von elles‿…',{sub:'Tippe auf 🔊 und entscheide.'}),
 seg('Hör zu: Welche Endung hörst du?',['-ons','-ez','stumm'],[['Satz 1','-ons','Nous regardons la photo.'],['Satz 2','-ez','Vous parlez français?'],['Satz 3','stumm','Tu écoutes un CD?'],['Satz 4','stumm','Ils téléphonent à Jade.'],['Satz 5','-ez','Vous appelez Léo?']],'-ons [ɔ̃] und -ez [e] hört man. -e, -es, -ent sind stumm.',{sub:'Tippe auf 🔊 und entscheide.'}),
 gapw('Diktat: Hör zu und schreibe das Verb.','Clara et Jade {0} des photos.',[['regardent']],'Clara et Jade = elles → regardent. Die Endung -ent hörst du nicht – du musst sie wissen!',{au:'Clara et Jade regardent des photos.',strict:true}),
 gapw('Diktat: Hör zu und schreibe das Verb.','Nous {0} français.',[['parlons']],'nous parlons – Endung -ons.',{au:'Nous parlons français.',strict:true}),
 gapw('Diktat: Hör zu und schreibe das Verb.','Et toi, tu {0} à Karim?',[['téléphones']],'tu téléphones – zwei Akzente und -es.',{au:'Et toi, tu téléphones à Karim?',strict:true}),
 gapw('Diktat: Hör zu und schreibe die Verben.','Jade {0} un CD. Lucas et Noah {1} Léo.',[['écoute'],['appellent']],'Jade écoute (é!) · Lucas et Noah appellent (ll, -ent).',{au:'Jade écoute un CD. Lucas et Noah appellent Léo.',strict:true,lv:3}),
 mc('Du hörst: [il paʁl fʁɑ̃sɛ]. Was kann es heißen?',['Il parle français. oder Ils parlent français.','Nur: Il parle français.','Nur: Ils parlent français.','Nous parlons français.'],'Ohne Zusammenhang kann man il parle und ils parlent beim Hören nicht unterscheiden.',{au:'Il parle français.'}),
 pick('Hör zu: Wer ist gemeint?',[[grp('mm'),'ils – mehrere'],[grp('m'),'il – einer'],[grp('f'),'elle – eine'],[grp('ff'),'elles – mehrere Mädchen']],'«Ils‿écoutent la musique.» – das [z] zeigt: mehrere.',{au:'Ils écoutent la musique.',say:false}),
]},
/* 6 */
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
 seg('Hör zu: <b>il</b>, <b>ils</b> – oder hört man es nicht?',['il','ils','hört man nicht'],[['Satz 1','ils','Ils écoutent le professeur.'],['Satz 2','hört man nicht','Il présente Clara.'],['Satz 3','il','Il appelle Jade.']],'[ilzekut] → ils · il présente = ils présentent (gleicher Klang) · [ilapɛl] → il.',{ref:'hoeren',tag:'Hören: il/ils',sub:'Tippe auf 🔊 und entscheide.'}),
 det('Fehlerdetektiv: Finde die 4 Fehler.','Les élèves [écoutont|écoutent] Monsieur Martel. Tu [téléphonez|téléphones] à Léo? Nous [appellons|appelons] Samira. Vous [presentez|présentez] la classe.','écoutent · téléphones · appelons · présentez.',{ref:'fehler',tag:'Fehler finden'}),
 wr('Übersetze: „Ihr schaut die Fotos an.“',['Vous regardez les photos.'],'Vous regardez les photos.',{strict:true,ref:'schwer',tag:'Übersetzen'}),
];
