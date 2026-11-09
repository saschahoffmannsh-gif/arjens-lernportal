/* Lektion: Unité 2 · Volet 3 – Besonderheiten der neuen Vokabeln (Hausaufgabe 09.11.2026) */
const {F,G,dlg,merk,attn,tip,hoer,card,reveal,tabs,spk}=H;
const {mc,gap,gapw,ord,wr,mt,seg}=X;
window.LESSON={slug:'unite2-volet3',title:'Unité 2 · Volet 3',kicker:'Hausaufgabe 09.11.',fr:'elle rentre, tu joues, je travaille …',icon:'🏠',color:'#1e40af',testN:8,
 intro:'Die neuen Vokabeln lernst du mit den <b>Vokabel-Spielen</b>. Hier geht es um die <b>Besonderheiten</b>: Verbformen mit elle, tu und je, le copain / la copine, s’il te plaît / s’il vous plaît, kleine Sätze für Gespräche, les devoirs und rentrer à la maison.'};
/* Verb-Tabelle: elle / tu / je */
const VB=[['rentrer','rentr','nach Hause gehen'],['chercher','cherch','suchen'],['chatter','chatt','chatten'],['téléphoner','téléphon','telefonieren'],['rêver','rêv','träumen'],['chanter','chant','singen'],['jouer','jou','spielen'],['travailler','travaill','arbeiten, lernen'],['écouter','écout','hören']];
const VTAB=`<table class="t"><tr><th>Verb</th><th>elle …</th><th>tu …</th><th>je …</th></tr>${VB.map(v=>`<tr><td><b>${v[0]}</b><br><small>${v[2]}</small></td><td>${F('elle '+v[1]+'e')}</td><td>${F('tu '+v[1]+'es')}</td><td>${F((/^[aeiouéè]/.test(v[1])?'j’':'je ')+v[1]+'e')}</td></tr>`).join('')}</table>`;
const SC=(who,fr,de)=>`<div class="objc" style="width:auto;flex:1 1 150px"><div style="width:64px">${(window.CHARS||{})[who]||''}</div><span class="fr">${fr}</span>${spk(fr)}<span class="legend">${de}</span></div>`;
/* Dialog-Szenen (Redewendungen) */
const S1=[['Clara','Théo, qu’est-ce qu’il y a?','Théo, was ist los?'],['Théo','Jade chante toujours! Tu m’énerves, Jade!','Jade singt immer! Du nervst, Jade!']];
const S2=[['Noah','Salut, Clara! Qu’est-ce que tu fais?','Hallo, Clara! Was machst du?'],['Clara','Je travaille. Les devoirs …','Ich lerne. Die Hausaufgaben …']];
const S3=[['Karim','Théo, tu joues avec moi?','Théo, spielst du mit mir?'],['Théo','Pas maintenant. Je travaille.','Nicht jetzt. Ich lerne.']];
const S4=[['Lucas','Une partie de cartes, s’il te plaît!','Eine Runde Karten, bitte!'],['Noah','D’accord!','Einverstanden!'],['Lucas','Merci, Noah!','Danke, Noah!']];
window.CHAPTERS=[
/* 1 – Erklärung: Verben */
{id:'er-verben',kind:'Regel',icon:'🧩',title:'Verben: elle chante, tu joues, je travaille',sub:'Neue -er-Verben – gleicher Bauplan wie regarder',lv:1,
html:card('Was machen sie?','🏠',`<div class="objrow">${SC('Clara','Elle rentre à la maison.','Sie geht nach Hause.')}${SC('Jade','Elle chante.','Sie singt.')}${SC('Samira','Elle rêve.','Sie träumt.')}${SC('Yasmine','Elle cherche le livre.','Sie sucht das Buch.')}</div>`)
 +card('Der Bauplan kennst du schon!','🧱',`<p>Die neuen Verben enden alle auf <b>-er</b> – genau wie <span class="fr">regarder</span>, <span class="fr">écouter</span>, <span class="fr">parler</span> und <span class="fr">téléphoner</span>. Also: <b>-er weg → Stamm</b>, dann die Endung dran:</p><ul><li><b>elle</b> + Stamm + <b>-e</b> → ${F('elle chante')}</li><li><b>tu</b> + Stamm + <b>-es</b> → ${F('tu joues')}</li><li><b>je</b> + Stamm + <b>-e</b> → ${F('je travaille')}</li></ul><p class="legend">-e und -es hört man nicht: chante und chantes klingen gleich – schreiben musst du sie trotzdem richtig.</p>`)
 +card('Alle neuen Verben','📋',VTAB)
 +attn(`<ul><li><b>tu</b> → immer <b>-es</b>: ${F('tu joues')} (nicht <s>tu joue</s>)</li><li><b>je travaille</b>: Stamm <b>travaill-</b> mit <b>ill</b> – man spricht [tʁavaj].</li><li>Vor Vokal: ${F('j’écoute')} (nicht <s>je écoute</s>).</li><li>${F('elle rêve')} – das ê bleibt. ${F('elle téléphone')} – zwei é.</li></ul>`,'Attention!'),
ex:[
 gap('Welche Form passt?','Clara {0} à la maison.',[['rentre','rentres','rentrer']],'👧 Clara = elle → -e: elle rentre.'),
 gap('Welche Form passt?','Tu {0} avec Karim?',[['joues','joue','jouer']],'🫵 tu → -es: tu joues.'),
 gap('Welche Form passt?','Je {0}. Pas maintenant!',[['travaille','travailles','travailler']],'🙋 je → -e: je travaille.'),
 gap('Welche Form passt?','Samira est dans le hamac. Elle {0}.',[['rêve','rêves','rêver']],'👧 elle → -e: elle rêve.'),
 gap('Welche Form passt?','Tu {0} le livre de géo?',[['cherches','cherche','chercher']],'🫵 tu → -es: tu cherches.'),
 gap('Welche Form passt?','{0} la musique.',[['J’écoute','Je écoute','J’écoutes']],'Vor Vokal: je → j’ · je → -e.'),
 seg('Welches Pronomen passt?',['elle','tu'],[['… chantes','tu'],['… chatte','elle'],['… joues','tu'],['… téléphone','elle']],'-es → tu · -e → elle.'),
 mc('Wie heißt die Form? <b>tu</b> + chanter',['tu chantes','tu chante','tu chantez','tu chanter'],'🫵 tu → Stamm chant- + -es.',{fr:true}),
 mc('Was bedeutet «Je travaille.»?',['Ich lerne. / Ich arbeite.','Ich träume.','Ich suche.','Ich spiele.'],'travailler = arbeiten, lernen (für die Schule).',{say:'Je travaille.'}),
]},
/* 2 – Erklärung: Wörter mit Besonderheit */
{id:'woerter',kind:'Besonderheit',icon:'💡',title:'Wörter mit Trick',sub:'le copain / la copine · les devoirs · rentrer à la maison',lv:1,
html:card('le copain – la copine','🧑‍🤝‍🧑',`<div class="objrow">${SC('Karim','Voilà Karim, le copain de Théo.','Das ist Karim, Théos Kumpel.')}${SC('Jade','Voilà Jade, la copine de Clara.','Das ist Jade, Claras Freundin.')}</div><p>👦 Junge → <b>le copain</b> · 👧 Mädchen → <b>la copine</b> (mit -ine). Wie bei <span class="fr">l’ami</span> / <span class="fr">l’amie</span>.</p>`)
 +card('les devoirs – immer Plural','📝',`<p>${F('les devoirs')} = die Hausaufgaben. Im Französischen sagt man es (fast) nur im <b>Plural</b>: <b>les</b> devoir<b>s</b> – mit <b>s</b> am Ende.</p><p>${F('Les devoirs? Pas maintenant!')}</p>`)
 +card('rentrer à la maison','🏠',`<p>${F('rentrer à la maison')} = nach Hause gehen. Drei Teile, immer zusammen: <b>rentrer</b> + <b>à</b> + <b>la maison</b>.</p><p>${F('Après l’école, Noah rentre à la maison.')}<br><span class="legend">Nach der Schule geht Noah nach Hause.</span></p>`)
 +attn(`<ul><li>Clara ist ein Mädchen → <b>la copine</b>, nicht <s>le copain</s>.</li><li><s>le devoir</s> für „die Hausaufgaben“ → <b>les devoirs</b>.</li><li><s>Il rentre la maison.</s> → Il rentre <b>à</b> la maison.</li></ul>`,'Attention!'),
ex:[
 mc('Clara ist Jades …',['la copine','le copain','les copains','la copain'],'👧 Clara ist ein Mädchen → la copine.',{fr:true}),
 mc('Théo ist Karims …',['le copain','la copine','le copine','la copain'],'👦 Théo ist ein Junge → le copain.',{fr:true}),
 gap('Ergänze.','Voilà Yasmine, {0} de Samira.',[['la copine','le copain','les devoirs']],'👧 Yasmine → la copine.'),
 gap('Ergänze.','{0}? Pas maintenant!',[['Les devoirs','Le devoir','La devoir']],'📝 Hausaufgaben → immer les devoirs (Plural).'),
 gap('Ergänze.','Après l’école, Léo rentre {0} maison.',[['à la','la','à le']],'🏠 rentrer à la maison – das à nicht vergessen.'),
 mc('Was heißt „die Hausaufgaben“?',['les devoirs','le devoir','la devoir','les devoir'],'📝 les devoirs – mit les und s.',{fr:true}),
 mc('Was bedeutet «Elle rentre à la maison.»?',['Sie geht nach Hause.','Sie ist im Haus.','Sie sucht das Haus.','Sie träumt vom Haus.'],'🏠 rentrer à la maison = nach Hause gehen.',{say:'Elle rentre à la maison.'}),
]},
/* 3 – Erklärung: bitte / danke */
{id:'bitte',kind:'Besonderheit',icon:'🙏',title:'s’il te plaît oder s’il vous plaît?',sub:'Bitte sagen – zu Freunden und zu Erwachsenen',lv:1,
html:card('Zwei Mal „bitte“','🙏',`<table class="t"><tr><th>Zu wem?</th><th>Bitte</th></tr><tr><td>🧒 ein Kind, ein Freund (tu)</td><td>${F('s’il te plaît')}</td></tr><tr><td>👩‍🏫 Lehrer, Erwachsene (vous)</td><td>${F('s’il vous plaît')}</td></tr><tr><td>👥 mehrere Leute (vous)</td><td>${F('s’il vous plaît')}</td></tr></table><p>Es ist wie <b>tu</b> und <b>vous</b>: Zu dem du „du“ sagst → <b>te</b>. Zu dem du „Sie“ sagst → <b>vous</b>.</p>`)
 +card('Danke und einverstanden','🤝',`<ul><li>${F('Merci!')} = Danke!</li><li>${F('D’accord!')} = Einverstanden! / Okay!</li></ul>`)
 +attn(`<ul><li>Zu Madame Fournier: <s>s’il te plaît</s> → <b>s’il vous plaît</b>.</li><li>Schreiben: <b>s’il</b> mit Apostroph, <b>plaît</b> mit î.</li></ul>`,'Attention!'),
ex:[
 seg('te oder vous?',['s’il te plaît','s’il vous plaît'],[['Karim, tu joues avec moi, …?','s’il te plaît'],['Madame Fournier, …','s’il vous plaît'],['Clara, …','s’il te plaît'],['Monsieur Martel, …','s’il vous plaît'],['Théo et Noah, …','s’il vous plaît']],'🧒 ein Freund → te · 👩‍🏫 Erwachsene oder mehrere → vous.'),
 mc('Du bittest Monsieur Martel um das Buch. Was sagst du?',['Le livre, s’il vous plaît.','Le livre, s’il te plaît.','Le livre, merci.','Le livre, d’accord.'],'👨‍🏫 Lehrer → s’il vous plaît.',{fr:true}),
 mc('Lucas sagt: «Une partie de cartes?» Du willst mitspielen. Du sagst:',['D’accord!','Merci!','Pas maintenant.','Tu m’énerves.'],'🤝 D’accord! = Einverstanden!',{fr:true}),
 mc('Clara gibt dir das Buch. Du sagst:',['Merci, Clara!','D’accord, Clara!','S’il te plaît, Clara!','Pas maintenant, Clara!'],'🎁 Wenn du etwas bekommst → Merci!',{fr:true}),
 mc('Was bedeutet «D’accord!»?',['Einverstanden!','Danke!','Bitte!','Nicht jetzt!'],'🤝 d’accord = einverstanden.',{say:'D’accord!'}),
]},
/* 4 – Erklärung: Redewendungen als Szenen */
{id:'szenen',kind:'Dialog',icon:'💬',title:'Kleine Szenen: Was ist los?',sub:'Qu’est-ce qu’il y a? · Qu’est-ce que tu fais? · Pas maintenant. · Tu m’énerves.',lv:1,
html:card('Szene 1: Was ist los?','😠',dlg('Théo ist sauer',S1,{bg:'maison'}))
 +card('Szene 2: Was machst du?','📝',dlg('Clara lernt',S2,{bg:'chambre'}))
 +card('Szene 3: Nicht jetzt!','⏳',dlg('Keine Zeit',S3,{bg:'chambre'}))
 +card('Szene 4: Bitte – okay – danke','🃏',dlg('Eine Runde Karten',S4,{bg:'maison'}))
 +tip(`<b>Qu’est-ce qu’il y a?</b> kennst du schon als „Was gibt es?“. Wenn jemand traurig oder sauer aussieht, heißt es <b>„Was ist los?“</b>.<br><b>Qu’est-ce que tu fais?</b> = Was machst du? – das lernst du hier als festen Satz.`,'💡'),
ex:[
 mt('Verbinde: Französisch – Deutsch.',[['Qu’est-ce qu’il y a?','Was ist los?'],['Qu’est-ce que tu fais?','Was machst du?'],['Pas maintenant.','Nicht jetzt.'],['Tu m’énerves.','Du nervst.'],['D’accord!','Einverstanden!'],['Merci!','Danke!']],'Die sechs Sätze aus den Szenen.'),
 mc('Théo sieht sauer aus. Clara fragt:',['Qu’est-ce qu’il y a?','Qu’est-ce que tu fais?','D’accord?','Merci?'],'😠 Jemand ist sauer → Was ist los? = Qu’est-ce qu’il y a?',{fr:true}),
 mc('Du willst wissen, was Noah gerade macht. Du fragst:',['Qu’est-ce que tu fais?','Qu’est-ce qu’il y a?','Tu m’énerves?','Pas maintenant?'],'❓ Was machst du? = Qu’est-ce que tu fais?',{fr:true}),
 mc('Karim will spielen, aber du lernst. Du sagst:',['Pas maintenant.','D’accord!','Merci!','Qu’est-ce que tu fais?'],'⏳ Nicht jetzt = Pas maintenant.',{fr:true}),
 mc('Jade singt immer und immer. Du sagst:',['Tu m’énerves!','Merci, Jade!','D’accord, Jade!','S’il te plaît!'],'😤 Du nervst! = Tu m’énerves!',{fr:true}),
 mc('Was bedeutet «Tu m’énerves.»?',['Du nervst (mich).','Du träumst.','Du spielst mit mir.','Du bist nett.'],'😤 Tu m’énerves. = Du nervst (mich).',{say:'Tu m’énerves.'}),
]},
/* 5 – Training leicht */
{id:'leicht',kind:'Training ★',icon:'🌱',title:'Training: leicht',sub:'Wörter erkennen und zuordnen',lv:1,
html:card('Die neuen Wörter','📋',`<table class="t"><tr><td>⏭️</td><td>${F('après')}</td><td>nach</td></tr><tr><td>⏰</td><td>${F('maintenant')}</td><td>jetzt</td></tr><tr><td>🔁</td><td>${F('toujours')}</td><td>immer</td></tr><tr><td>🔍</td><td>${F('chercher')}</td><td>suchen</td></tr><tr><td>💭</td><td>${F('rêver')}</td><td>träumen</td></tr><tr><td>🎤</td><td>${F('chanter')}</td><td>singen</td></tr><tr><td>🎲</td><td>${F('jouer')}</td><td>spielen</td></tr><tr><td>💬</td><td>${F('chatter')}</td><td>chatten</td></tr><tr><td>📚</td><td>${F('travailler')}</td><td>arbeiten, lernen</td></tr><tr><td>📺</td><td>${F('regarder la télé')}</td><td>fernsehen</td></tr><tr><td>ℹ️</td><td>${F('l’information')}</td><td>die Information</td></tr><tr><td>🃏</td><td>${F('la carte')}</td><td>die Karte</td></tr><tr><td>🃏</td><td>${F('la partie de cartes')}</td><td>die Runde Karten</td></tr></table><p class="legend">Alle Wörter mit Bild und Ton: Vokabel-Spiele (Teil 1 der Hausaufgabe).</p>`)+merk('🔁 Kurz wiederholt',`<ul><li>elle + Stamm-<b>e</b> · tu + Stamm-<b>es</b> · je + Stamm-<b>e</b> (j’ vor Vokal)</li><li>le copain 👦 · la copine 👧 · <b>les</b> devoirs 📝</li><li>s’il <b>te</b> plaît 🧒 · s’il <b>vous</b> plaît 👩‍🏫</li></ul>`,'blue'),
ex:[
 mt('Verbinde: Französisch – Deutsch.',[['après','nach'],['maintenant','jetzt'],['toujours','immer'],['la carte','die Karte']],'⏭️ après · ⏰ maintenant · 🔁 toujours · 🃏 la carte.'),
 mt('Verbinde: Verb – Bedeutung.',[['chercher','suchen'],['rêver','träumen'],['chanter','singen'],['jouer','spielen']],'🔍 chercher · 💭 rêver · 🎤 chanter · 🎲 jouer.'),
 mt('Verbinde: Französisch – Deutsch.',[['regarder la télé','fernsehen'],['chatter','chatten'],['travailler','arbeiten, lernen'],['l’information','die Information']],'📺 regarder la télé = fernsehen.'),
 mc('Was bedeutet «toujours»?',['immer','jetzt','nach','nie'],'🔁 toujours = immer.',{say:'toujours'}),
 mc('Was bedeutet «maintenant»?',['jetzt','immer','nach','heute'],'⏰ maintenant = jetzt.',{say:'maintenant'}),
 mc('Was bedeutet «Lucas regarde la télé.»?',['Lucas sieht fern.','Lucas sucht die Karte.','Lucas telefoniert.','Lucas chattet.'],'📺 regarder la télé = fernsehen.',{say:'Lucas regarde la télé.'}),
 mc('Was heißt „die Runde Karten“?',['la partie de cartes','la carte','les devoirs','la télé'],'🃏 la partie de cartes.',{fr:true}),
 gap('Welches Wort passt?','Jade chante {0}!',[['toujours','après','merci']],'🔁 Jade singt immer → toujours.'),
]},
/* 6 – Übersetzen (Probe) */
{id:'uebersetzen',kind:'Training ★★',icon:'🔁',title:'Übersetzen: hin und zurück',sub:'Deutsch → Französisch und Französisch → Deutsch',lv:2,
html:tip('Wie in der Probearbeit: Du schreibst selbst. Bei Französisch zählen <b>Akzente und Apostrophe</b> (é, ê, î, ’). Bei Nomen den <b>Artikel</b> mitschreiben!','✍️'),
ex:[
 wr('Übersetze ins Französische: „die Hausaufgaben“',['les devoirs'],'📝 les devoirs – immer Plural.',{strict:true,ph:'les …'}),
 wr('Übersetze ins Französische: „jetzt“',['maintenant'],'⏰ maintenant.',{strict:true}),
 wr('Übersetze ins Französische: „immer“',['toujours'],'🔁 toujours.',{strict:true}),
 wr('Übersetze ins Französische: „suchen“',['chercher'],'🔍 chercher – mit ch … ch.',{strict:true}),
 wr('Übersetze ins Französische: „träumen“',['rêver'],'💭 rêver – mit ê.',{strict:true}),
 wr('Übersetze ins Französische: „die Freundin“ (Kumpel, Mädchen)',['la copine'],'👧 la copine.',{strict:true}),
 wr('Übersetze ins Französische: „Nicht jetzt.“',['Pas maintenant.','Pas maintenant'],'⏳ Pas maintenant.',{strict:true}),
 wr('Übersetze ins Französische: „Danke!“',['Merci!','Merci'],'🎁 Merci!',{strict:true}),
 wr('Übersetze ins Französische: „Einverstanden!“',['D’accord!','D’accord',"D'accord!","D'accord"],'🤝 D’accord! – mit Apostroph.',{strict:true}),
 wr('Übersetze ins Französische: „Was ist los?“',['Qu’est-ce qu’il y a?','Qu’est-ce qu’il y a',"Qu'est-ce qu'il y a?","Qu'est-ce qu'il y a"],'😠 Qu’est-ce qu’il y a?',{strict:true}),
 wr('Übersetze ins Deutsche: «après»',['nach','danach'],'⏭️ après = nach.'),
 wr('Übersetze ins Deutsche: «chanter»',['singen'],'🎤 chanter = singen.'),
 wr('Übersetze ins Deutsche: «jouer»',['spielen'],'🎲 jouer = spielen.'),
 wr('Übersetze ins Deutsche: «la carte»',['die Karte','Karte'],'🃏 la carte = die Karte.'),
 wr('Übersetze ins Deutsche: «Tu m’énerves.»',['Du nervst.','Du nervst mich.','Du nervst','Du nervst mich'],'😤 Du nervst (mich).'),
 wr('Übersetze ins Deutsche: «Qu’est-ce que tu fais?»',['Was machst du?','Was machst du'],'❓ Was machst du?'),
 wr('Übersetze ins Deutsche: «Elle rentre à la maison.»',['Sie geht nach Hause.','Sie geht nach Hause'],'🏠 rentrer à la maison = nach Hause gehen.'),
]},
/* 7 – Verbformen (Probe) */
{id:'verben',kind:'Training ★★',icon:'✍️',title:'Verbformen: elle, tu, je',sub:'Selbst schreiben – Endung und Akzente',lv:2,
html:merk('🧱 Bauplan',`<p>Verb ohne -er = Stamm → <b>elle</b> Stamm<b>e</b> · <b>tu</b> Stamm<b>es</b> · <b>je</b> Stamm<b>e</b></p><p>${F('elle chante')} ${F('tu chantes')} ${F('je chante')}</p>`,'blue'),
ex:[
 gapw('Schreibe die Form (Verb in Klammern).','Clara {0} le livre de géo. (chercher)',[['cherche']],'👧 Clara = elle → cherche.',{strict:true}),
 gapw('Schreibe die Form (Verb in Klammern).','Tu {0} avec Jade? (chatter)',[['chattes']],'🫵 tu → chattes (-es).',{strict:true}),
 gapw('Schreibe die Form (Verb in Klammern).','Je {0} maintenant. (travailler)',[['travaille']],'🙋 je travaille – mit ill.',{strict:true}),
 gapw('Schreibe die Form (Verb in Klammern).','Samira {0}. (rêver)',[['rêve']],'👧 elle rêve – das ê bleibt.',{strict:true}),
 gapw('Schreibe die Form (Verb in Klammern).','Tu {0} toujours! (chanter)',[['chantes']],'🫵 tu chantes.',{strict:true}),
 gapw('Schreibe die Form (Verb in Klammern).','Après l’école, je {0} à la maison. (rentrer)',[['rentre']],'🙋 je rentre.',{strict:true}),
 gapw('Schreibe die Form (Verb in Klammern).','Tu {0} avec moi? (jouer)',[['joues']],'🫵 tu joues – mit -es.',{strict:true}),
 gapw('Schreibe die Form (Verb in Klammern).','Jade {0} à Yasmine. (téléphoner)',[['téléphone']],'👧 elle téléphone – zwei é.',{strict:true}),
 gapw('Schreibe die Form (Verb in Klammern).','{0} la musique. (je / écouter)',[['J’écoute',"J'écoute"]],'Vor Vokal: J’écoute.',{strict:true}),
 gapw('Konjugiere <b>travailler</b>.','elle {0}<br>tu {1}<br>je {2}',[['travaille'],['travailles'],['travaille']],'travaille · travailles · travaille.',{strict:true,say:'elle travaille, tu travailles, je travaille'}),
 gapw('Konjugiere <b>jouer</b>.','elle {0}<br>tu {1}<br>je {2}',[['joue'],['joues'],['joue']],'joue · joues · joue.',{strict:true,say:'elle joue, tu joues, je joue'}),
]},
/* 8 – Lückendialog (Probe) */
{id:'lueckendialog',kind:'Training ★★★',icon:'🧩',title:'Lückendialoge',sub:'Ganze Gespräche ergänzen – wie in der Probearbeit',lv:3,
html:tip('Lies erst den ganzen Dialog. Dann frag bei jeder Lücke: <b>Wer spricht mit wem?</b> (te / vous) · <b>Frage oder Antwort?</b> · <b>Welche Verbform?</b>','🧩'),
ex:[
 gapw('Ergänze den Dialog.','Clara: Salut, Noah! Qu’est-ce que tu {0}?<br>Noah: Je {1}. (travailler) Les {2} …',[['fais'],['travaille'],['devoirs']],'fais (fester Satz) · je travaille · les devoirs.',{strict:true}),
 gapw('Ergänze den Dialog.','Karim: Théo, tu {0} avec moi? (jouer)<br>Théo: Pas {1}. Je travaille.',[['joues'],['maintenant']],'tu joues · Pas maintenant.',{strict:true}),
 gapw('Ergänze den Dialog.','Lucas: Une partie de cartes, s’il {0} plaît, Noah!<br>Noah: D’{1}!<br>Lucas: {2}, Noah!',[['te'],['accord'],['Merci']],'Noah ist ein Freund → s’il te plaît · D’accord! · Merci!',{strict:true}),
 gapw('Ergänze den Dialog.','Clara: Théo, qu’est-ce qu’il y {0}?<br>Théo: Jade chante {1}! Tu m’{2}, Jade!',[['a'],['toujours'],['énerves']],'qu’est-ce qu’il y a · toujours · tu m’énerves.',{strict:true}),
 gapw('Ergänze den Dialog.','Arjen: Le livre, s’il {0} plaît, Madame Fournier.<br>Madame Fournier: Voilà le livre.<br>Arjen: {1}!',[['vous'],['Merci']],'Lehrerin → s’il vous plaît · Merci!',{strict:true}),
 gap('Wähle die passenden Wörter.','Yasmine: Samira, qu’est-ce que tu {0}?<br>Samira: Je {1} avec Jade.',[['fais','joues','chantes'],['chatte','chattes','chatter']],'Qu’est-ce que tu fais? (fester Satz) · je → -e: je chatte.'),
 ord('Bilde den Satz.',['Après','l’école',',','Clara','rentre','à','la','maison','.'],'Après l’école, Clara rentre à la maison.'),
 ord('Bilde die Frage.',['Tu','joues','avec','moi','?'],'Tu joues avec moi?'),
]},
/* 9 – Hören & Aussprache (am Ende) */
{id:'hoeren',kind:'Hören & Aussprache',icon:'🎧',title:'Hören & Aussprache',sub:'Genau hinhören und nachsprechen',lv:2,
html:hoer(`<table class="t"><tr><th>Wort</th><th>So klingt es</th></tr><tr><td>${F('je travaille')}</td><td>[tʁavaj] – <b>ill</b> klingt wie „j“</td></tr><tr><td>${F('le copain')} · ${F('la copine')}</td><td>[kɔpɛ̃] nasal · [kɔpin] mit n</td></tr><tr><td>${F('s’il te plaît')}</td><td>[siltəplɛ] – das t von plaît ist stumm</td></tr><tr><td>${F('Qu’est-ce que tu fais?')}</td><td>[kɛskə ty fɛ] – „kess-ke“</td></tr><tr><td>${F('toujours')}</td><td>[tuʒuʁ] – j wie in „Garage“</td></tr><tr><td>${F('tu chantes')} · ${F('elle chante')}</td><td>klingen gleich – -es / -e sind stumm</td></tr></table><p>Tippe auf 🔊, hör zu und sprich laut nach.</p>`,'Hör genau hin'),
ex:[
 mc('Hör zu: Welches Wort hörst du?',['la copine','le copain'],'[kɔpin] mit hörbarem n → la copine.',{au:'la copine',say:false}),
 mc('Hör zu: Welches Wort hörst du?',['le copain','la copine'],'[kɔpɛ̃] nasal, ohne n → le copain.',{au:'le copain',say:false}),
 mc('Hör zu: Was sagt Lucas?',['s’il te plaît','s’il vous plaît'],'[təplɛ] → s’il te plaît.',{au:[['Lucas','S’il te plaît!']],say:false}),
 mc('Hör zu: Was fragt Clara?',['Was machst du?','Was ist los?','Spielst du mit mir?','Wo ist das Buch?'],'«Qu’est-ce que tu fais?» = Was machst du?',{au:[['Clara','Qu’est-ce que tu fais?']]}),
 mc('Hör zu: Was sagt Théo?',['Nicht jetzt.','Einverstanden!','Danke!','Du nervst.'],'«Pas maintenant.» = Nicht jetzt.',{au:[['Théo','Pas maintenant.']]}),
 gapw('Hör zu und ergänze.','Jade {0} toujours. Tu m’{1}!',[['chante'],['énerves']],'Jade chante · tu m’énerves.',{au:'Jade chante toujours. Tu m’énerves!',strict:true}),
 gapw('Hör zu und ergänze.','Après les {0}, je {1} la télé.',[['devoirs'],['regarde']],'les devoirs · je regarde.',{au:'Après les devoirs, je regarde la télé.',strict:true}),
 gapw('Hör zu und ergänze.','Tu {0} avec moi, s’il te {1}?',[['joues'],['plaît']],'tu joues · s’il te plaît (î!).',{au:'Tu joues avec moi, s’il te plaît?',strict:true}),
]},
];
window.TEST_EX=[
 wr('Übersetze: „die Hausaufgaben“',['les devoirs'],'les devoirs.',{strict:true,ref:'uebersetzen',tag:'Übersetzen'}),
 wr('Übersetze: «toujours»',['immer'],'toujours = immer.',{ref:'uebersetzen',tag:'Übersetzen'}),
 gapw('Schreibe die Formen von <b>chercher</b>.','elle {0}<br>tu {1}<br>je {2}',[['cherche'],['cherches'],['cherche']],'cherche · cherches · cherche.',{strict:true,ref:'verben',tag:'Verbformen',say:'elle cherche, tu cherches, je cherche'}),
 gapw('Ergänze den Dialog.','Noah: Qu’est-ce que tu fais?<br>Clara: Je {0}. (travailler)<br>Noah: Tu joues avec moi?<br>Clara: Pas {1}!',[['travaille'],['maintenant']],'je travaille · Pas maintenant.',{strict:true,ref:'lueckendialog',tag:'Lückendialog'}),
 mc('Zu Monsieur Martel sagst du:',['s’il vous plaît','s’il te plaît'],'Lehrer → s’il vous plaît.',{fr:true,ref:'bitte',tag:'bitte'}),
 mc('Jade ist Claras …',['copine','copain'],'Mädchen → la copine.',{fr:true,ref:'woerter',tag:'copain / copine'}),
];
H.setRun({'er-verben':4,woerter:3,bitte:3,szenen:3,leicht:4,uebersetzen:5,verben:4,lueckendialog:3,hoeren:4},{'er-verben':[0,1,2],szenen:[0],test:[2,3]});
H.setIntro({
_lesson:{t:'Unité 2 · Volet 3: Nach der Schule',
 was:'Nach der Schule: Clara <b>rentre à la maison</b>, Noah <b>travaille</b>, Jade <b>chante</b>. Hier lernst du die Besonderheiten der neuen Wörter.',
 warum:'In der Probearbeit übersetzt du in beide Richtungen, schreibst Verbformen mit elle / tu / je und füllst Lückendialoge aus.',
 schritte:['Verben: elle + -e, tu + -es, je + -e.','Wörter mit Trick: copain / copine, les devoirs, rentrer à la maison, s’il te plaît / s’il vous plaît.','Kleine Sätze für Gespräche in Szenen.'],
 bsp:[['Elle rentre à la maison.','Sie geht nach Hause.'],['Tu joues avec moi?','Spielst du mit mir?'],['Pas maintenant. Je travaille.','Nicht jetzt. Ich lerne.']],
 merk:'elle Stamm-e · tu Stamm-es · je Stamm-e',
 fallen:['tu → <b>-es</b>: tu joues.','<b>les</b> devoirs – immer Plural.','Erwachsene → s’il <b>vous</b> plaît.'],
 check:['Wer spricht?','Welche Form?','Akzente und Apostroph prüfen.']},
'er-verben':{rule:'-er-Verb: Stamm (ohne -er) + Endung: elle -e · tu -es · je -e (j’ vor Vokal).',t:'Verben: elle chante, tu joues, je travaille',
 was:'Die neuen Verben (rentrer, chercher, chatter, rêver, chanter, jouer, travailler) enden auf <b>-er</b> – wie regarder und écouter.',
 warum:'Du brauchst sie mit <b>elle</b>, <b>tu</b> und <b>je</b> – genau das kommt in der Probearbeit.',
 schritte:['-er weg → Stamm: chant-.','elle → <b>-e</b>: elle chante.','tu → <b>-es</b>: tu chantes · je → <b>-e</b>: je chante.'],
 bsp:[['Elle chante.','Sie singt.'],['Tu joues avec moi?','Spielst du mit mir?'],['Je travaille.','Ich lerne. / Ich arbeite.'],['J’écoute la musique.','Ich höre Musik.']],
 merk:'elle -e · tu -es · je -e – wie bei regarder!',
 fallen:['tu joue ✗ → tu jou<b>es</b>.','je travail ✗ → je travaill<b>e</b> (ill + e).','je écoute ✗ → <b>j’</b>écoute.'],
 check:['Wer?','Stamm.','Endung.']},
woerter:{rule:'👦 le copain · 👧 la copine · 📝 les devoirs (immer Plural) · 🏠 rentrer à la maison.',t:'Wörter mit Trick',
 was:'Drei Wörter, bei denen man aufpassen muss: <b>le copain / la copine</b>, <b>les devoirs</b> und <b>rentrer à la maison</b>.',
 warum:'Hier passieren beim Übersetzen die meisten Fehler.',
 schritte:['Junge → le copain, Mädchen → la copine.','Hausaufgaben → les devoirs (Plural).','nach Hause gehen → rentrer à la maison.'],
 bsp:[['le copain de Théo','Théos Kumpel'],['la copine de Clara','Claras Freundin'],['Les devoirs? Pas maintenant!','Die Hausaufgaben? Nicht jetzt!']],
 merk:'copain 👦 · copine 👧 · les devoirs 📝 · rentrer à la maison 🏠',
 fallen:['le devoir ✗ → les devoirs.','rentrer la maison ✗ → rentrer <b>à</b> la maison.'],
 check:['Junge oder Mädchen?','Plural?','à dabei?']},
bitte:{rule:'🧒 Freund (tu) → s’il te plaît · 👩‍🏫 Erwachsene / mehrere (vous) → s’il vous plaît.',t:'s’il te plaît oder s’il vous plaît?',
 was:'„Bitte“ gibt es zweimal: <b>s’il te plaît</b> und <b>s’il vous plaît</b>.',
 warum:'Zu Freunden sagst du <b>tu</b>, zu Erwachsenen <b>vous</b> – „bitte“ passt sich an.',
 schritte:['Mit wem sprichst du?','Freund → s’il te plaît.','Lehrer, Erwachsene, mehrere → s’il vous plaît.'],
 bsp:[['Noah, s’il te plaît!','Noah, bitte!'],['Madame Fournier, s’il vous plaît.','Frau Fournier, bitte.'],['Merci! – D’accord!','Danke! – Einverstanden!']],
 merk:'tu → te · vous → vous',
 fallen:['Zur Lehrerin s’il te plaît ✗ → s’il <b>vous</b> plaît.'],
 check:['Wer?','te oder vous?','Apostroph und î.']},
szenen:{rule:'Qu’est-ce qu’il y a? = Was ist los? · Qu’est-ce que tu fais? = Was machst du? · Pas maintenant. = Nicht jetzt. · Tu m’énerves. = Du nervst.',t:'Kleine Szenen: Was ist los?',
 was:'Sechs Sätze für Gespräche – du lernst sie als ganze Sätze in kleinen Szenen.',
 warum:'In Lückendialogen musst du erkennen, welcher Satz in die Situation passt.',
 schritte:['Szene anschauen: Was passiert?','Satz anhören und nachsprechen.','Merken: Situation → Satz.'],
 bsp:[['Qu’est-ce qu’il y a?','Was ist los?'],['Qu’est-ce que tu fais?','Was machst du?'],['Pas maintenant.','Nicht jetzt.'],['Tu m’énerves.','Du nervst (mich).']],
 merk:'😠 Qu’est-ce qu’il y a? · ❓ Qu’est-ce que tu fais? · ⏳ Pas maintenant. · 😤 Tu m’énerves.',
 fallen:['Qu’est-ce qu’il y a? fragt, was <b>los</b> ist – nicht, was jemand <b>macht</b>.'],
 check:['Situation?','Passenden Satz wählen.','Laut sagen.']},
leicht:{rule:'Wort ↔ Bild ↔ Bedeutung verbinden.',t:'Training ★: Wörter erkennen',
 was:'Wörter und Bedeutungen verbinden.',schritte:['Lesen.','Bedeutung suchen.','Antippen.'],
 bsp:[['toujours','immer'],['maintenant','jetzt'],['après','nach']],merk:'Erst sicher erkennen, dann schreiben.',fallen:['toujours (immer) ≠ maintenant (jetzt).'],check:['Lesen.','Wählen.','Prüfen.']},
uebersetzen:{rule:'Übersetzen: Nomen mit Artikel · Akzente und Apostroph mitschreiben.',t:'Übersetzen: hin und zurück',
 was:'Du übersetzt Wörter und Sätze in beide Richtungen.',warum:'Genau so kommt es in der Probearbeit.',
 schritte:['Wort im Kopf finden.','Artikel dazu (le / la / les).','Akzente und ’ prüfen.'],
 bsp:[['die Hausaufgaben','les devoirs'],['Einverstanden!','D’accord!'],['Was ist los?','Qu’est-ce qu’il y a?']],
 merk:'Artikel + Akzente + Apostroph',fallen:['rever ✗ → r<b>ê</b>ver.'],check:['Wort.','Artikel.','Akzente.']},
verben:{rule:'elle Stamm-e · tu Stamm-es · je Stamm-e (j’ vor Vokal).',t:'Verbformen: elle, tu, je',
 was:'Du schreibst die Verbformen selbst.',warum:'Die Endung hört man nicht – man muss sie wissen.',
 schritte:['Wer? (elle, tu, je)','Stamm bilden.','Endung -e oder -es.'],
 bsp:[['elle cherche','sie sucht'],['tu chattes','du chattest'],['je travaille','ich lerne']],
 merk:'tu → -es',fallen:['tu chatte ✗ → tu chatt<b>es</b>.'],check:['Wer?','Stamm.','Endung.']},
lueckendialog:{rule:'Lückendialog: Wer spricht mit wem? Frage oder Antwort? Welche Verbform?',t:'Lückendialoge',
 was:'Ganze Gespräche ergänzen.',warum:'So sieht der Lückendialog in der Probearbeit aus.',
 schritte:['Ganzen Dialog lesen.','Bei jeder Lücke: Was fehlt?','Ergänzen und prüfen.'],
 bsp:[['Tu joues avec moi? – Pas maintenant.','Spielst du mit mir? – Nicht jetzt.'],['Une partie de cartes? – D’accord!','Eine Runde Karten? – Einverstanden!']],
 merk:'Freund → te · Erwachsene → vous',fallen:['Zu Madame Fournier: s’il <b>vous</b> plaît.'],check:['Lesen.','Ergänzen.','Prüfen.']},
hoeren:{rule:'Genau hinhören: copain [ɛ̃] / copine [in] · -e und -es sind stumm · ill = [j].',t:'Hören & Aussprache',
 was:'Hören, verstehen und nachsprechen.',warum:'Manche Wörter klingen fast gleich.',
 schritte:['Anhören.','Auf den Unterschied achten.','Laut nachsprechen.'],
 bsp:[['le copain','[kɔpɛ̃]'],['la copine','[kɔpin]'],['je travaille','[tʁavaj]']],
 merk:'Hören → nachsprechen → schreiben',fallen:['tu chantes klingt wie elle chante – schreiben mit -es!'],check:['Hören.','Wählen.','Schreiben.']}
});
(function(){const V=window.V;
/* Bildliche Erklärungen (Story-Cards) */
H.patchIntro({
_lesson:{tab:'',vis:'<div class="aset">'+V.who(['Clara','Noah','Jade'])+'</div>'+V.train('Elle/p|rentre/v|à la maison./r'),
 was:'Nach der Schule: nach Hause gehen, lernen, singen, spielen …',
 warum:'Diese Besonderheiten kommen in der Probearbeit.',
 schritte:[[V.lego('chant','e',{mute:1}),'Verben mit elle / tu / je'],[V.b('le copain','r')+' '+V.b('la copine','r'),'Wörter mit Trick'],['<span class="big-ic">💬</span>','Sätze für Gespräche']],
 merk:'elle -e · tu -es · je -e',
 fallen:[['tu joue','tu joues','🫵 tu → <b>-es</b>.'],['le devoir','les devoirs','📝 immer Plural.']]},
'er-verben':{h:'🧩 Verben: <b>elle</b> · <b>tu</b> · <b>je</b>',
 vis:'<div class="lgrid">'+[['elle','chant','e'],['tu','jou','es'],['je','travaill','e']].map(p=>'<div class="lg-r">'+V.b(p[0],'p')+V.lego(p[1],p[2],{mute:1})+spk(p[0]+' '+p[1]+p[2],'','mini')+'</div>').join('')+'</div>',
 was:'Neue -er-Verben – gleicher Bauplan wie <b>regarder</b>: Stamm + Endung.',
 warumVis:'<div class="aset">'+V.lego('regard','e',{mute:1})+' <span class="big-ic">=</span> '+V.lego('chant','e',{mute:1})+'</div>',
 warum:'Kennst du schon: elle regarde → elle chante.',
 schritte:[[V.lego('jou','er',{ear:false}),'-er weg → Stamm'],[V.b('tu','p'),'Wer?'],[V.lego('jou','es',{mute:1}),'Endung dran']],
 merk:'elle -e · tu -es · je -e',
 fallen:[['tu joue','tu joues','🫵 tu → <b>-es</b>.'],['je travail','je travaille','🙋 je → Stamm travaill + <b>e</b>.'],['je écoute','j’écoute','Vokal → <b>j’</b>.']]},
woerter:{h:'👦👧 <b>le copain</b> · <b>la copine</b>',
 vis:'<div class="aset">'+V.who('Karim')+V.b('le copain','r',{lbl:'Junge'})+'</div><div class="aset">'+V.who('Jade')+V.b('la copine','r',{lbl:'Mädchen'})+'</div>',
 was:'Junge → <b>le copain</b>, Mädchen → <b>la copine</b>.',
 warum:'Wie l’ami / l’amie: das Wort passt sich an.',
 schritte:[['<span class="big-ic">👦</span>','le copain'],['<span class="big-ic">👧</span>','la copine']],
 fallen:[['Clara, le copain de Jade','Clara, la copine de Jade','👧 Mädchen → <b>la copine</b>.']],
 parts:[
 {h:'📝 <b>les devoirs</b> – immer Plural',vis:'<div class="aset"><span class="big-ic">📝📝📝</span>'+V.b('les devoirs','r')+'</div>',
  was:'<b>les devoirs</b> = die Hausaufgaben – mit <b>les</b> und <b>s</b>.',
  schritte:[[V.b('les','r'),'Artikel les'],[V.b('devoirs','r'),'mit s']],
  fallen:[['le devoir','les devoirs','📝 Hausaufgaben → Plural.']]},
 {h:'🏠 <b>rentrer à la maison</b>',vis:V.train('Noah/s|rentre/v|à la maison./r'),
  was:'<b>rentrer à la maison</b> = nach Hause gehen.',
  schritte:[[V.b('rentrer','v'),'zurückgehen'],[V.b('à','r'),'nach'],[V.b('la maison','r'),'Haus']],
  fallen:[['Il rentre la maison.','Il rentre à la maison.','🏠 das <b>à</b> gehört dazu.']]}]},
bitte:{h:'🙏 <b>s’il te plaît</b> · <b>s’il vous plaît</b>',
 vis:'<div class="aset">'+V.who('Noah')+V.b('s’il te plaît','v',{lbl:'Freund · tu'})+'</div><div class="aset">'+V.who('Fournier')+V.b('s’il vous plaît','v',{lbl:'Erwachsene · vous'})+'</div>',
 was:'Zwei Mal „bitte“: zu Freunden <b>te</b>, zu Erwachsenen <b>vous</b>.',
 warum:'Wie tu und vous.',
 schritte:[['<span class="big-ic">🧒</span>','Freund → s’il <b>te</b> plaît'],['<span class="big-ic">👩‍🏫</span>','Erwachsene, mehrere → s’il <b>vous</b> plaît'],['<span class="big-ic">🤝</span>','Merci! · D’accord!']],
 fallen:[['Madame Fournier, s’il te plaît.','Madame Fournier, s’il vous plaît.','👩‍🏫 Lehrerin → <b>vous</b>.']]},
szenen:{h:'💬 Kleine Szenen',
 vis:'<div class="aset">'+V.who('Théo')+V.b('Qu’est-ce qu’il y a?','v',{icon:'😠',lbl:'Was ist los?'})+'</div><div class="aset">'+V.who('Clara')+V.b('Qu’est-ce que tu fais?','v',{icon:'❓',lbl:'Was machst du?'})+'</div>',
 was:'Feste Sätze für Gespräche – lern sie als Ganzes.',
 schritte:[['<span class="big-ic">😠</span>','Qu’est-ce qu’il y a? = Was ist los?'],['<span class="big-ic">❓</span>','Qu’est-ce que tu fais? = Was machst du?'],['<span class="big-ic">⏳</span>','Pas maintenant. = Nicht jetzt.'],['<span class="big-ic">😤</span>','Tu m’énerves. = Du nervst.']],
 fallen:[['Was machst du? → Qu’est-ce qu’il y a?','Qu’est-ce que tu fais?','❓ machen = <b>fais</b>.']]},
verben:{vis:V.train('Tu/p|chattes/v|avec Jade?/r'),was:'Verbformen selbst schreiben.',schritte:[[V.b('tu','p'),'Wer?'],[V.lego('chatt','es',{mute:1}),'Stamm + Endung']],fallen:[['tu chatte','tu chattes','🫵 tu → -es.']]},
hoeren:{vis:'<div class="aset">'+V.b('copain','r',{lbl:'[kɔpɛ̃]'})+V.b('copine','r',{lbl:'[kɔpin]'})+'</div>',was:'Hören und nachsprechen.',schritte:[['<span class="big-ic">🔊</span>','anhören'],['<span class="big-ic">🗣️</span>','nachsprechen']],fallen:[['tu chante','tu chantes','klingt gleich – schreib -es.']]}
});
})();
