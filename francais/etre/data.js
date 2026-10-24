/* Lektion: Das Verb être */
const {F,G,conj,dlg,merk,attn,tip,hoer,card,reveal,tabs,track,steps,grp,ob,spk,spkLines}=H;
const {mc,pick,gap,gapw,ord,wr,mt,dl,clk,mark,mul,seg,tf,det}=X;
window.LESSON={slug:'etre',title:'Das Verb être',fr:'je suis, tu es, il est …',icon:'🙋',color:'#ea580c',testN:18,
 intro:'<b>être</b> heißt <b>sein</b> und ist das wichtigste Verb im Französischen. Es ist <b>unregelmäßig</b> – du musst die sechs Formen auswendig können. Hier lernst du sie mit Dialogen, Hörübungen und vielen Aufgaben.'};
const D1=[
 ['Martel','Bonjour! Je suis Monsieur Martel. Je suis le professeur de français.','Guten Tag! Ich bin Herr Martel. Ich bin der Französischlehrer.'],
 ['Clara','Bonjour, Monsieur! Moi, je suis Clara. Et voilà Théo.','Guten Tag! Ich bin Clara. Und das ist Théo.'],
 ['Théo','Salut! Nous sommes en sixième A.','Hallo! Wir sind in der 6A.'],
 ['Martel','Ah, vous êtes la classe de sixième A! Très bien.','Ah, ihr seid die Klasse 6A! Sehr gut.'],
 ['Karim','Et moi, je suis Karim. Je suis nouveau. Je suis de Berlin.','Und ich bin Karim. Ich bin neu. Ich bin aus Berlin.'],
 ['Clara','Regarde, Théo! Jade et Yasmine sont là, dans la cour.','Schau mal, Théo! Jade und Yasmine sind da, auf dem Schulhof.'],
 ['Théo','Elles sont aussi en sixième A? Cool!','Sind sie auch in der 6A? Cool!']];
const D2=[
 ['Léo','Salut, Samira! Ça va?','Hallo, Samira! Wie geht’s?'],
 ['Samira','Ça va. Et toi?','Gut. Und dir?'],
 ['Léo','Ça va. Regarde! C’est qui?','Gut. Schau mal! Wer ist das?'],
 ['Samira','C’est Lucas. Il est en cinquième.','Das ist Lucas. Er ist in der 7. Klasse.'],
 ['Léo','Et la fille avec Lucas, c’est qui?','Und das Mädchen bei Lucas, wer ist das?'],
 ['Samira','C’est Yasmine. Elle est de Strasbourg.','Das ist Yasmine. Sie ist aus Straßburg.'],
 ['Léo','Lucas et Yasmine sont amis?','Sind Lucas und Yasmine Freunde?'],
 ['Samira','Oui, ils sont amis.','Ja, sie sind Freunde.']];
const D3=[
 ['Fournier','Bonjour! Vous êtes en sixième A?','Hallo! Seid ihr in der 6A?'],
 ['Noah','Oui, nous sommes en sixième A. Je suis Noah, et voilà Karim.','Ja, wir sind in der 6A. Ich bin Noah, und das ist Karim.'],
 ['Fournier','Moi, je suis Madame Fournier. Je suis la surveillante.','Ich bin Frau Fournier. Ich bin die Aufsicht.'],
 ['Karim','Pardon, Madame. Monsieur Martel est là?','Entschuldigung. Ist Herr Martel da?'],
 ['Fournier','Oui, il est dans la classe.','Ja, er ist in der Klasse.']];
const L2=l=>l.map(x=>[x[0],x[1]]);
const ETRE={v:'être',de:'sein – unregelmäßig!',irr:true,rows:[['je','','suis','ich bin'],['tu','','es','du bist'],['il / elle / on','','est','er / sie / man ist','il est, elle est, on est'],['nous','','sommes','wir sind'],['vous','','êtes','ihr seid / Sie sind'],['ils / elles','','sont','sie sind','ils sont, elles sont']]};
const pron=(p,g,de,ex)=>`<div class="objc ${g}"><b class="fr" style="font-size:22px">${p}</b><span>${de}</span>${ex||''}</div>`;
window.CHAPTERS=[
/* ---------------- 1 */
{id:'entdecken',kind:'Einstieg',icon:'🔎',title:'Entdecken: Bonjour, la 6e A!',sub:'Erster Schultag in Straßburg – finde die Formen von être',lv:1,
html:card('Hör zu und lies mit','🎧','<p>Erster Schultag am Collège in Straßburg. Monsieur Martel begrüßt die neue Klasse. Tippe auf 🔊 – oben spielst du den ganzen Dialog ab, neben jeder Sprechblase einen einzelnen Satz.</p>'+dlg('Premier jour au collège',D1,{bg:'cour'}))
 +reveal('🔍 Was fällt dir auf? Welche Wörter bedeuten „bin, bist, ist, sind, seid“?',`<p>Das sind alles Formen von <b>être</b> (sein):</p><p><span class="fr">je <span class="hl">suis</span></span> · <span class="fr">nous <span class="hl">sommes</span></span> · <span class="fr">vous <span class="hl">êtes</span></span> · <span class="fr">Jade et Yasmine <span class="hl">sont</span></span> · <span class="fr">elles <span class="hl">sont</span></span></p><p>Jede Person hat eine <b>eigene</b> Form, und sie sehen ganz verschieden aus. Darum heißt être <b>unregelmäßig</b>.</p>`)
 +tip('<b>Übrigens:</b> In <span class="fr">c’est</span> (das ist) steckt auch être: <span class="fr">ce + est = c’est</span>. Das kennst du schon aus <span class="fr">C’est moi.</span> und <span class="fr">C’est qui?</span>'),
ex:[
 mul('Welche Wörter aus dem Dialog sind Formen von <b>être</b>? Tippe alle an.',[['suis',1],['sommes',1],['êtes',1],['sont',1],['est',1],['voilà',0],['regarde',0],['nouveau',0]],'suis, es, est, sommes, êtes, sont sind die Formen von être. <i>voilà</i> (das ist / da ist), <i>regarde</i> (schau) und <i>nouveau</i> (neu) gehören nicht dazu.',{sub:'Mehrere sind richtig.'}),
 mc('Was bedeutet «Je suis de Berlin.»?',['Ich bin aus Berlin.','Ich wohne in Berlin.','Er ist aus Berlin.','Wir sind aus Berlin.'],'<i>je suis</i> = ich bin, <i>de</i> = aus. Karim sagt das, denn er ist neu und kommt aus Berlin.',{say:'Je suis de Berlin.'}),
 mc('Was bedeutet «Vous êtes la classe de sixième A.»?',['Ihr seid die Klasse 6A.','Wir sind die Klasse 6A.','Sie ist die Klasse 6A.','Du bist in der 6A.'],'<i>vous êtes</i> = ihr seid. Monsieur Martel spricht mit der ganzen Klasse.',{say:'Vous êtes la classe de sixième A.'}),
 mc('Hör zu: Wer sagt das?',['Karim','Théo','Monsieur Martel','Clara'],'Karim sagt: «Je suis nouveau. Je suis de Berlin.» – Er ist neu in der Klasse.',{au:[['Karim','Je suis nouveau. Je suis de Berlin.']]}),
 mt('Was gehört zusammen?',[['je suis','ich bin'],['tu es','du bist'],['il est','er ist'],['nous sommes','wir sind']],'Lerne die Formen immer mit dem Pronomen zusammen: je suis, tu es, il est, nous sommes …'),
 mt('Und die anderen Formen:',[['vous êtes','ihr seid'],['elle est','sie ist'],['ils sont','sie sind (Jungen)'],['elles sont','sie sind (nur Mädchen)']],'vous êtes = ihr seid · elle est = sie ist · ils sont / elles sont = sie sind.'),
 mc('Monsieur Martel fragt: «Vous êtes la classe de sixième A?» Warum sagt er <b>vous</b>?',['Er spricht mit mehreren Kindern (ihr).','Er spricht mit einem Kind (du).','Er spricht über sich selbst.','Er spricht über Jade und Yasmine.'],'<i>vous</i> = ihr (mehrere Personen). Zu einem einzelnen Kind würde er <i>tu</i> sagen.'),
 tf('Hör dir den Dialog an. Richtig oder falsch?',[['Monsieur Martel est le professeur de français.',true],['Karim est de Strasbourg.',false],['Clara et Théo sont en sixième A.',true],['Jade et Yasmine sont dans la classe.',false]],'Karim ist aus <b>Berlin</b>. Jade und Yasmine sind <b>dans la cour</b> (auf dem Schulhof), nicht in der Klasse.',{au:L2(D1)}),
 mc('Was bedeutet «C’est moi.»?',['Ich bin’s. / Das bin ich.','Das ist meins.','Wer ist das?','Ich heiße …'],'<i>C’est moi.</i> = Ich bin’s. In <i>c’est</i> steckt <i>est</i> von être.',{say:'C’est moi.'}),
]},
/* ---------------- 2 */
{id:'formen',kind:'Regel',icon:'📐',title:'Die Formen von être',sub:'je suis, tu es, il est, nous sommes, vous êtes, ils sont',lv:1,
html:card('So konjugierst du être','📋','<p>Tippe auf 🔊, um jede Form zu hören. Sprich laut nach!</p>'+conj(ETRE)
  +`<div class="tip"><span class="tip-ic">🎤</span><div><b>Der être-Rap</b> – sag ihn dreimal laut, immer schneller: ${F('je suis, tu es, il est – nous sommes, vous êtes, ils sont!')}</div></div>`)
 +merk('⭐ Merkkasten: être ist unregelmäßig','<ul><li>Jede Person hat ihre <b>eigene Form</b> – es gibt keinen Stamm und keine Endungen wie bei den Verben auf -er.</li><li><span class="fr">vous êtes</span> schreibt man mit <b>ê</b> (Accent circonflexe).</li><li><span class="fr">nous sommes</span>: zwei m und am Ende -es.</li><li><span class="fr">on est</span> = <span class="fr">nous sommes</span> (wir sind) – so spricht man im Alltag.</li></ul>')
 +hoer(`<ul><li>${F('tu es')} und ${F('il est')} klingen <b>gleich</b> [ɛ] – das <b>s</b> und das <b>t</b> am Ende spricht man nicht!</li><li>${F('vous‿êtes')}: Hier wird gebunden: [vuzɛt]. Das s klingt wie ein weiches <b>s</b> (wie in „Rose“).</li><li>${F('ils sont')} [ilsɔ̃] – mit scharfem s, das n hört man kaum (Nasal).</li></ul>`)
 +card('Wer ist wer? Die Personalpronomen','👥',`<div class="objrow">${pron('je','m','ich')}${pron('tu','m','du – zu einem Kind oder Freund')}${pron('il','m','er – auch für männliche Sachen',grp('m'))}${pron('elle','f','sie (eine) – auch für weibliche Sachen',grp('f'))}${pron('on','m','man / wir')}${pron('nous','m','wir')}${pron('vous','m','ihr – oder höflich: Sie')}${pron('ils','m','sie – Gruppe mit mind. einem Jungen',grp('mf'))}${pron('elles','f','sie – nur Mädchen',grp('ff'))}</div>`)
 +attn('<ul><li><b>tu es</b> – nicht „tu est“ (das t gehört zu il/elle/on)</li><li><b>vous êtes</b> – nicht „vous etes“ (Akzent!)</li><li><b>ils sont</b> – nicht „ils est“ (ils = mehrere → sont)</li></ul>'),
ex:[
 gap('Setze die richtige Form von être ein.','Je {0} Clara.',[['suis','es','est','sont']],'je → <b>suis</b>: Je suis Clara.'),
 gap('Setze die richtige Form von être ein.','Tu {0} en sixième?',[['es','est','suis','êtes']],'tu → <b>es</b> (ohne t!): Tu es en sixième?'),
 gap('Setze die richtige Form von être ein.','Théo {0} de Strasbourg.',[['est','es','sont','suis']],'Théo = il → <b>est</b>.'),
 gap('Setze die richtige Form von être ein.','Nous {0} dans la cour.',[['sommes','sont','êtes','est']],'nous → <b>sommes</b>.'),
 gap('Setze die richtige Form von être ein.','Vous {0} nouveaux?',[['êtes','etes','sommes','sont']],'vous → <b>êtes</b> – mit Accent circonflexe ê!'),
 gap('Setze die richtige Form von être ein.','Jade et Yasmine {0} en sixième A.',[['sont','est','sommes','êtes']],'Jade et Yasmine = elles → <b>sont</b>.'),
 seg('Welche Form von être passt zum Pronomen?',['suis','es','est','sommes','êtes','sont'],[['je …','suis'],['tu …','es'],['on …','est'],['vous …','êtes'],['elles …','sont']],'je suis · tu es · on est · vous êtes · elles sont.'),
 wr('Schreibe die Form: <b>nous</b> + être',['nous sommes','sommes'],'nous sommes – zwei m, Endung -es.',{ph:'nous …'}),
 wr('Schreibe die Form: <b>vous</b> + être',['vous êtes','êtes'],'vous êtes – mit ê.',{ph:'vous …'}),
 wr('Schreibe die Form: <b>ils</b> + être',['ils sont','sont'],'ils sont – mehrere Personen.',{ph:'ils …'}),
 ord('Bilde den Satz: „Ich bin der Französischlehrer.“',['Je','suis','le professeur','de français','.'],'Je suis le professeur de français. – So stellt sich Monsieur Martel vor.'),
 mc('Welche Form ist richtig geschrieben?',['vous êtes','vous etes','vous êtez','vous ête'],'Richtig: <b>vous êtes</b> – mit ê und mit -es am Ende.',{fr:true,lv:2}),
 mc('Welcher Satz ist richtig?',['On est ensemble.','On sommes ensemble.','On es ensemble.','On êtes ensemble.'],'<i>on</i> hat dieselbe Form wie il/elle: <b>on est</b>. Es bedeutet aber „wir“: On est ensemble = Nous sommes ensemble.',{fr:true,lv:2}),
]},
/* ---------------- 3 */
{id:'pronomen',kind:'Regel',icon:'👫',title:'il, elle, ils oder elles?',sub:'Personen und Sachen durch Pronomen ersetzen',lv:1,
html:card('Ein Junge reicht!','🧠',`<table class="t"><tr><th>Personen</th><th>Pronomen</th></tr>
 <tr><td>${grp('m')} Noah</td><td><span class="fr c-m">il</span> + est</td></tr>
 <tr><td>${grp('f')} Samira</td><td><span class="fr c-f">elle</span> + est</td></tr>
 <tr><td>${grp('ff')} Jade et Yasmine</td><td><span class="fr c-f">elles</span> + sont</td></tr>
 <tr><td>${grp('mf')} Théo et Clara</td><td><span class="fr c-m">ils</span> + sont</td></tr>
 <tr><td>${grp('fffm')} Clara, Jade, Samira et Léo</td><td><span class="fr c-m">ils</span> + sont</td></tr></table>
 <p><b>ils</b> nimmst du, sobald <b>mindestens ein Junge</b> (oder Mann) dabei ist. <b>elles</b> nur, wenn alle weiblich sind.</p>`)
 +card('Auch Sachen haben ein Pronomen','🛏️',`<p>Im Französischen ist jede Sache männlich oder weiblich. Darum ersetzt du auch Sachen durch <b>il / elle / ils / elles</b>:</p>
 <div class="objrow"><div class="objc m">${ob('lit')}${G('le','lit','m')}<span>→ <b class="c-m">il</b> est là.</span></div><div class="objc f">${ob('chaise')}${G('la','chaise','f')}<span>→ <b class="c-f">elle</b> est là.</span></div>
 <div class="objc p">${ob('poster',3)}${G('les','posters','p')}<span>→ <b class="c-m">ils</b> sont là.</span></div><div class="objc p">${ob('photo',3)}${G('les','photos','p')}<span>→ <b class="c-f">elles</b> sont là.</span></div></div>`)
 +merk('⭐ Merkkasten: Wer bin ich – mit anderen zusammen?',`<ul><li>${F('Théo et moi, nous sommes en sixième.')} – ich + jemand = <b>nous</b></li><li>${F('Karim et toi, vous êtes de Berlin?')} – du + jemand = <b>vous</b></li></ul>`),
ex:[
 seg('Welches Pronomen passt zu den Personen?',['il','elle','ils','elles'],[[grp('m')+' Noah','il'],[grp('f')+' Samira','elle'],[grp('mf')+' Théo et Clara','ils'],[grp('ff')+' Jade et Yasmine','elles'],[grp('ffm')+' Clara, Jade et Karim','ils']],'Ein Junge in der Gruppe → <b>ils</b>. Nur Mädchen → <b>elles</b>.'),
 seg('Auch Sachen! Welches Pronomen passt?',['il','elle','ils','elles'],[[ob('lit')+' le lit','il'],[ob('chaise')+' la chaise','elle'],[ob('poster',3)+' les posters','ils'],[ob('photo',3)+' les photos','elles']],'le lit (m.) → il · la chaise (f.) → elle · les posters (m.) → ils · les photos (f.) → elles.'),
 gap('Ersetze den Namen.','Monsieur Martel est là? – Oui, {0} est dans la classe.',[['il','elle','ils','elles']],'Monsieur Martel = ein Mann → <b>il</b>.'),
 gap('Ersetze den Namen.','Madame Fournier est là? – Oui, {0} est dans la cour.',[['elle','il','elles','ils']],'Madame Fournier = eine Frau → <b>elle</b>.'),
 gap('Ersetze die Namen.','Lucas et Noah? {0} sont en cinquième.',[['Ils','Elles','Il','Nous']],'Zwei Jungen → <b>Ils</b>.'),
 gap('Ersetze die Namen.','Clara et Jade? {0} sont très cool.',[['Elles','Ils','Elle','Vous']],'Zwei Mädchen → <b>Elles</b>.'),
 gap('Welches Pronomen passt?','Théo et moi, {0} sommes ensemble.',[['nous','vous','ils','on']],'ich + Théo = wir → <b>nous</b> (passt zu sommes).'),
 gap('Welches Pronomen passt?','Karim et toi, {0} êtes en sixième B?',[['vous','nous','ils','tu']],'du + Karim = ihr → <b>vous</b> (passt zu êtes).'),
 mc('«Clara, Jade, Yasmine et Léo sont dans la cour.» – Welches Pronomen passt?',['ils','elles','il','nous'],'Léo ist ein Junge – ein Junge reicht für <b>ils</b>.',{lv:2}),
 mc('«La guitare est là.» – Ersetze <i>la guitare</i>.',['Elle est là.','Il est là.','Ils sont là.','Elles sont là.'],'<i>la guitare</i> ist weiblich → <b>elle</b>.',{fr:true,lv:2}),
 wr('Ersetze durch ein Pronomen und schreibe den ganzen Satz: «Le globe est dans la chambre.»',['Il est dans la chambre.'],'<i>le globe</i> ist männlich → <b>Il</b> est dans la chambre.',{lv:2}),
 wr('Ersetze durch ein Pronomen und schreibe den ganzen Satz: «Les filles sont dans la cour.»',['Elles sont dans la cour.'],'<i>les filles</i> = nur Mädchen → <b>Elles</b> sont dans la cour.',{lv:2}),
]},
/* ---------------- 4 */
{id:'szenen',kind:'Szenen & Hören',icon:'🎭',title:'Szenen: C’est qui?',sub:'être im Alltag – zuhören, verstehen, mitreden',lv:2,
html:card('Auf dem Schulhof','💬','<p>Léo und Samira sehen zwei Kinder. Hör gut zu: Welche Formen von être hörst du?</p>'+dlg('Dans la cour',D2,{bg:'cour'}))
 +merk('⭐ C’est … oder il / elle est …?',`<ul><li><b>Wer ist das?</b> → ${F('C’est Lucas.')} ${F('C’est Yasmine.')} (c’est + Name)</li><li><b>Mehr über die Person</b> → ${F('Il est en cinquième.')} ${F('Elle est de Strasbourg.')}</li></ul>`)
 +card('Im Klassenzimmer','🏫',dlg('En classe',D3,{bg:'classe'}))
 +hoer(`<ul><li>${F('il est')} [ilɛ] und ${F('ils sont')} [ilsɔ̃] klingen ganz verschieden – beim Hören verrät dir das <b>Verb</b>, ob es einer oder mehrere sind.</li><li>${F('elle est')} [ɛlɛ] und ${F('elles sont')} [ɛlsɔ̃] genauso.</li><li>Aber: ${F('tu es')} und ${F('il est')} klingen gleich – hier hilft nur der Zusammenhang.</li></ul>`),
ex:[
 seg('Hör zu: Welche Form von être hörst du?',['suis','es / est','sommes','êtes','sont'],[['Satz 1','sommes','Nous sommes en sixième.'],['Satz 2','sont','Ils sont dans la cour.'],['Satz 3','êtes','Vous êtes de Berlin?'],['Satz 4','suis','Je suis Jade.'],['Satz 5','es / est','Elle est très cool.']],'Satz 1: nous <b>sommes</b> · Satz 2: ils <b>sont</b> · Satz 3: vous <b>êtes</b> · Satz 4: je <b>suis</b> · Satz 5: elle <b>est</b>.',{sub:'Tippe auf 🔊 und wähle dann die Form.'}),
 seg('Hör zu: Ist es <b>einer</b> (il) oder sind es <b>mehrere</b> (ils)?',['il','ils'],[['Satz 1','ils','Ils sont en cinquième.'],['Satz 2','il','Il est nouveau.'],['Satz 3','ils','Ils sont de Strasbourg.'],['Satz 4','il','Il est dans la classe.']],'Du hörst es am Verb: <b>il est</b> [ilɛ] – <b>ils sont</b> [ilsɔ̃].',{sub:'Tippe auf 🔊 und entscheide.'}),
 mc('Hör zu: In welcher Klasse ist Lucas?',['in der 7. Klasse (en cinquième)','in der 6. Klasse (en sixième)','in der 6A','Das wird nicht gesagt.'],'Samira sagt: «C’est Lucas. Il est <b>en cinquième</b>.» – en cinquième = in der 7. Klasse.',{au:[['Samira','C’est Lucas. Il est en cinquième.']]}),
 tf('Hör dir den Dialog „Dans la cour“ an. Richtig oder falsch?',[['Lucas est en sixième.',false],['Yasmine est de Strasbourg.',true],['Lucas et Yasmine sont amis.',true],['La fille avec Lucas, c’est Samira.',false]],'Lucas ist <b>en cinquième</b>. Die Freundin von Lucas ist <b>Yasmine</b> – Samira erzählt Léo von ihr.',{au:L2(D2)}),
 dl('Ergänze den Dialog mit être.',[['Clara','Salut! Je {0} Clara. Et toi?'],['Karim','Moi, c’est Karim. Je {1} de Berlin.'],['Clara','Tu {2} nouveau?'],['Karim','Oui. Noah et moi, nous {3} en sixième B.']],[['suis','es','est'],['suis','es','sommes'],['es','est','êtes'],['sommes','sont','êtes']],'je suis · je suis · tu es · nous sommes.'),
 gapw('Hör zu und schreibe die Form von être.','Madame Fournier {0} la surveillante.',[['est']],'Madame Fournier = elle → <b>est</b>.',{au:[['Fournier','Madame Fournier est la surveillante.']]}),
 gapw('Hör zu und schreibe die Formen von être.','Vous {0} en sixième A? – Oui, nous {1} en sixième A.',[['êtes'],['sommes']],'vous <b>êtes</b> (mit ê!) · nous <b>sommes</b>.',{au:[['Fournier','Vous êtes en sixième A?'],['Noah','Oui, nous sommes en sixième A.']]}),
 pick('Hör zu: Wer ist gemeint? Tippe das passende Bild an.',[[grp('ff'),'elles – nur Mädchen'],[grp('mf'),'ils – Junge und Mädchen'],[grp('f'),'elle – ein Mädchen'],[grp('m'),'il – ein Junge']],'Du hörst «<b>Elles sont</b> dans la cour.» – elles sont = mehrere, nur Mädchen.',{au:'Elles sont dans la cour.',labels:false,say:false}),
 pick('Hör zu: Wer ist gemeint? Tippe das passende Bild an.',[[grp('m'),'il – ein Junge'],[grp('mm'),'ils – zwei Jungen'],[grp('f'),'elle – ein Mädchen'],[grp('ff'),'elles – zwei Mädchen']],'Du hörst «<b>Il est</b> dans la classe.» – il est = ein Junge oder Mann.',{au:'Il est dans la classe.',labels:false,say:false}),
 mc('Jemand fragt dich: «C’est qui?» und zeigt auf Clara. Was antwortest du?',['C’est Clara. Elle est en sixième A.','Il est Clara.','C’est Clara. Il est en sixième A.','Elle sont Clara.'],'Wer? → <b>C’est</b> Clara. Mehr über sie → <b>Elle est</b> en sixième A.',{fr:true}),
]},
/* ---------------- 5 */
{id:'leicht',kind:'Training ★',icon:'🌱',title:'Training: leicht',sub:'Formen sicher erkennen und einsetzen',lv:1,
html:merk('🔁 Kurz wiederholt',conj(ETRE)+'<p style="margin-top:10px">Tipp: Sag zuerst das Pronomen leise vor dich hin – dann fällt dir die Form ein.</p>','blue'),
ex:[
 gap('Setze ein.','Tu {0} l’ami de Théo?',[['es','est','êtes']],'tu → es.'),
 gap('Setze ein.','Elle {0} en cinquième.',[['est','es','sont']],'elle → est.'),
 gap('Setze ein.','On {0} ensemble!',[['est','sommes','sont']],'on → est (wie il/elle).'),
 gap('Setze ein.','Nous {0} à Strasbourg.',[['sommes','sont','êtes']],'nous → sommes.'),
 gap('Setze ein.','Ils {0} dans la classe.',[['sont','est','sommes']],'ils → sont.'),
 gap('Setze ein.','Je {0} élève.',[['suis','es','est']],'je → suis. (Je suis élève. = Ich bin Schüler.)'),
 seg('Welches Pronomen passt zur Form?',['je','tu','nous','vous','ils'],[['… sommes','nous'],['… êtes','vous'],['… suis','je'],['… sont','ils'],['… es','tu']],'nous sommes · vous êtes · je suis · ils sont · tu es.'),
 mt('Verbinde die Satzhälften.',[['Je','suis Noah.'],['Tu','es de Berlin?'],['Nous','sommes en sixième.'],['Elles','sont là.']],'Je suis · Tu es · Nous sommes · Elles sont.',{say:[['','Je suis Noah. Tu es de Berlin? Nous sommes en sixième. Elles sont là.']]}),
 mc('Welche Form passt? «Vous … de Strasbourg?»',['êtes','sommes','est','sont'],'vous → êtes.',{fr:true}),
 mc('Was heißt «Il est très cool.»?',['Er ist sehr cool.','Sie ist sehr cool.','Es ist total cool!','Wir sind sehr cool.'],'il = er, est = ist, très = sehr.',{say:'Il est très cool.'}),
]},
/* ---------------- 6 */
{id:'mittel',kind:'Training ★★',icon:'🌿',title:'Training: mittel',sub:'Formen selbst schreiben und Sätze bauen',lv:2,
html:tip('Hier schreibst du die Formen selbst. Achte auf die Akzente – die Knöpfe <b>é è ê</b> unter dem Eingabefeld helfen dir. Bei Namen überlegst du zuerst: Wer ist das? → <b>il, elle, ils</b> oder <b>elles</b>?','✍️'),
ex:[
 gapw('Schreibe die richtige Form von être.','Clara {0} de Berlin? – Non, elle {1} de Strasbourg.',[['est'],['est']],'Clara = elle → est (zweimal).'),
 gapw('Schreibe die richtige Form von être.','Karim et Noah {0} en sixième B.',[['sont']],'Karim et Noah = ils → sont.'),
 gapw('Schreibe die richtige Form von être.','Lucas et moi, nous {0} amis.',[['sommes']],'nous → sommes.'),
 gapw('Schreibe die richtige Form von être.','Jade, tu {0} là?',[['es']],'tu → es (ohne t).'),
 gapw('Schreibe die richtige Form von être.','Madame Fournier, vous {0} la surveillante?',[['êtes']],'vous → êtes (mit ê). Hier ist vous höflich: „Sie“.'),
 ord('Bilde den Satz.',['Les élèves','sont','dans','la cour','.'],'Les élèves sont dans la cour.'),
 ord('Bilde die Frage.',['Vous','êtes','en','sixième','?'],'Vous êtes en sixième? – Die Stimme geht am Ende nach oben.'),
 ord('Bilde den Satz.',['Monsieur Martel','est','le professeur','de français','.'],'Monsieur Martel est le professeur de français.'),
 mc('Théo und Clara sprechen über Lucas und Noah: «… sont en cinquième.»',['Ils','Elles','Nous','Vous'],'Lucas und Noah sind Jungen → Ils sont.',{fr:true}),
 wr('Übersetze: „Wir sind zusammen.“',['Nous sommes ensemble.','On est ensemble.'],'Nous sommes ensemble. – oder im Alltag: On est ensemble.'),
 wr('Übersetze: „Sie (Clara und Jade) sind in der Klasse.“',['Elles sont dans la classe.','Clara et Jade sont dans la classe.'],'Nur Mädchen → Elles sont dans la classe.'),
]},
/* ---------------- 7 */
{id:'schwer',kind:'Training ★★★',icon:'🌳',title:'Training: schwer',sub:'Übersetzen, umformen, ganze Texte – Klassenarbeitsniveau',lv:3,
html:tip('Jetzt wird’s knifflig – wie in der Klassenarbeit: Du übersetzt, setzt Sätze in den Plural und füllst einen ganzen Text aus. Denk an <b>Pronomen + passende Form</b> und an die <b>Akzente</b>.','🏋️'),
ex:[
 wr('Übersetze: „Ich bin aus Berlin.“',['Je suis de Berlin.'],'Je suis de Berlin. – de = aus.'),
 wr('Übersetze: „Bist du neu?“ (Du fragst einen Jungen.)',['Tu es nouveau?','Es-tu nouveau?'],'Tu es nouveau? – Frage mit Stimme nach oben.'),
 wr('Übersetze: „Ihr seid sehr cool!“',['Vous êtes très cool!'],'Vous êtes très cool! – très = sehr.'),
 wr('Setze in den Plural: «Il est dans la cour.»',['Ils sont dans la cour.'],'il est → ils sont.'),
 wr('Setze in den Plural: «Elle est de Strasbourg.»',['Elles sont de Strasbourg.'],'elle est → elles sont.'),
 wr('Ändere die Person: «Je suis en sixième.» → mit <b>nous</b>',['Nous sommes en sixième.'],'je suis → nous sommes.'),
 wr('Ändere die Person: «Vous êtes nouveaux?» → mit <b>tu</b> (ein Junge)',['Tu es nouveau?'],'vous êtes → tu es. Und nouveaux (Plural) → nouveau.'),
 gapw('Samira stellt sich vor. Schreibe die Formen von être.','Salut! Je {0} Samira. Je {1} de Strasbourg. Lucas et moi, nous {2} en sixième A. Monsieur Martel {3} le professeur de français. Il {4} très cool. Et toi, tu {5} en sixième?',[['suis'],['suis'],['sommes'],['est'],['est'],['es']],'suis · suis · sommes · est · est · es.'),
 mc('Welcher Satz ist richtig?',['Clara et Théo sont amis.','Clara et Théo est amis.','Clara et Théo sommes amis.','Clara et Théo êtes amis.'],'Clara et Théo = ils → sont.',{fr:true}),
 mt('Verbinde die Satzhälften.',[['Je','suis élève.'],['Tu','es nouveau?'],['Monsieur Martel','est là.'],['Nous','sommes à Strasbourg.'],['Vous','êtes de Berlin?'],['Clara et Jade','sont dans la cour.']],'Je suis · Tu es · Monsieur Martel est · Nous sommes · Vous êtes · Clara et Jade sont.'),
]},
/* ---------------- 8 */
{id:'fehler',kind:'Fehlerdetektiv',icon:'🕵️',title:'Fehlerdetektiv',sub:'Typische Fehler finden und verbessern',lv:2,
html:attn(`<table class="t"><tr><th>✗ falsch</th><th>✓ richtig</th><th>Warum?</th></tr>
 <tr><td><s>je es</s></td><td>${F('je suis')}</td><td>zu je gehört suis</td></tr>
 <tr><td><s>tu est</s></td><td>${F('tu es')}</td><td>das t gibt es nur bei il / elle / on</td></tr>
 <tr><td><s>ils est</s></td><td>${F('ils sont')}</td><td>mehrere Personen → sont</td></tr>
 <tr><td><s>nous somme</s></td><td>${F('nous sommes')}</td><td>Endung -es nicht vergessen</td></tr>
 <tr><td><s>vous etes</s></td><td>${F('vous êtes')}</td><td>Akzent ê!</td></tr>
 <tr><td><s>on sommes</s></td><td>${F('on est')}</td><td>on hat die Form von il / elle</td></tr></table>`,'Attention! Diese Fehler passieren oft')
 +tip('<b>Detektiv-Trick:</b> Lies jeden Satz zweimal. Frag dich: <b>Wer?</b> (Pronomen oder Name) und dann: <b>Passt die Form von être dazu?</b>','🔍'),
ex:[
 det('Fehlerdetektiv: Finde die Fehler in Karims Text.','Salut! Je [es|suis] Karim. Je suis de Berlin. Théo et moi, nous [sont|sommes] en sixième A. Vous [etes|êtes] en sixième A aussi?','je suis · nous sommes · vous êtes (mit ê).'),
 det('Fehlerdetektiv: Finde die Fehler.','Clara [es|est] l’amie de Jade. Elles [est|sont] dans la cour. Et toi, tu [est|es] là?','Clara est · elles sont · tu es.'),
 det('Fehlerdetektiv: Finde die Fehler.','Monsieur Martel est le professeur de français. Il est très cool. Les élèves [est|sont] dans la classe. On [sommes|est] ensemble!','les élèves = ils → sont · on → est.'),
 mc('Welcher Satz ist <b>falsch</b>?',['Ils est de Berlin.','Ils sont de Berlin.','Il est de Berlin.','Elle est de Berlin.'],'«Ils est» ist falsch: ils (mehrere) → <b>sont</b>.',{say:'Ils sont de Berlin.'}),
 wr('Verbessere den Satz: «Tu est en sixième?»',['Tu es en sixième?'],'tu → es (ohne t).'),
 wr('Verbessere den Satz: «Nous somme amis.»',['Nous sommes amis.'],'nous → sommes (mit -es).'),
 wr('Verbessere den Satz: «Vous etes nouveaux?»',['Vous êtes nouveaux?'],'vous → êtes mit Accent circonflexe.'),
 mc('Jemand schreibt: «Je es Clara.» Was ist der Fehler?',['Zu je gehört suis: Je suis Clara.','Es fehlt ein Akzent: Je ès Clara.','Es muss heißen: Je est Clara.','Da ist kein Fehler.'],'je → <b>suis</b>. «es» gehört zu tu.'),
]},
];
window.TEST_EX=[
 gapw('Ergänze die Formen von être.','1. Je {0} élève. 2. Tu {1} de Berlin? 3. Yasmine {2} en sixième A. 4. Nous {3} dans la cour. 5. Vous {4} nouveaux? 6. Lucas et Karim {5} amis.',[['suis'],['es'],['est'],['sommes'],['êtes'],['sont']],'suis · es · est · sommes · êtes · sont.',{ref:'formen',tag:'Formen von être'}),
 seg('Hör zu: Welches Pronomen hörst du?',['il','ils','elle','elles'],[['Satz 1','elles','Elles sont dans la classe.'],['Satz 2','il','Il est de Strasbourg.'],['Satz 3','ils','Ils sont en cinquième.'],['Satz 4','elle','Elle est très cool.']],'elles sont · il est · ils sont · elle est – das Verb hilft dir beim Hören.',{ref:'szenen',tag:'Hören: il/ils, elle/elles',sub:'Tippe auf 🔊 und wähle.'}),
 wr('Übersetze: „Wir sind in der 6A.“',['Nous sommes en sixième A.','On est en sixième A.','Nous sommes en 6e A.','Nous sommes en sixième.'],'Nous sommes en sixième A.',{ref:'formen',tag:'Übersetzen'}),
 wr('Übersetze: „Herr Martel ist der Französischlehrer.“',['Monsieur Martel est le professeur de français.','M. Martel est le professeur de français.'],'Monsieur Martel est le professeur de français.',{ref:'schwer',tag:'Übersetzen'}),
 det('Fehlerdetektiv: Finde die 4 Fehler.','Bonjour! Je [suit|suis] Jade. Yasmine et moi, nous [somme|sommes] en sixième A. Clara [es|est] là. Karim et Noah [est|sont] dans la cour.','suis · sommes · est · sont.',{ref:'fehler',tag:'Fehler finden'}),
 tf('Hör dir die Szene an. Richtig oder falsch?',[['Noah et Karim sont en sixième A.',true],['Madame Fournier est le professeur de français.',false],['Monsieur Martel est dans la classe.',true]],'Madame Fournier ist <b>la surveillante</b> (die Aufsicht). Monsieur Martel ist in der Klasse.',{au:L2(D3),ref:'szenen',tag:'Hörverstehen'}),
 wr('Setze in den Plural: «Elle est nouvelle.»',['Elles sont nouvelles.'],'elle est → elles sont; nouvelle → nouvelles.',{ref:'schwer',tag:'Plural'}),
];
/* Pro Durchgang: so viele Aufgaben je Kapitel (Rest = Reserve-Pool); Pflichtaufgaben zu den Heftfehlern */
H.setRun({entdecken:3,formen:3,pronomen:3,szenen:3,leicht:5,mittel:5,schwer:5,fehler:4},{fehler:[0],test:[4]});
