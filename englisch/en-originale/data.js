/* Lektion: Abschluss – die Originalaufgaben von Test 112–115 (Englisch-Hausaufgabe 10.11.2026) */
const {F,merk,attn,tip,hoer,card,spk}=H;
const {mc,gap,gapw,ord,wr,mt,seg,det}=X;
const {tf,tap}=GX;const B=BX;
const E=e=>`<span class="big-ic">${e}</span>`;
const PL=(t,rows)=>GV.planner(t,rows);
const FLEM=PL('Familie Flemings Woche (Test 113)',[['Monday','Dave','play tennis','🎾'],['Wednesday','Dad','meet Paul','🤝'],['Friday','Mum','go to the movies','🎬'],['Saturday','Alyssa','visit Aunt Betty','👵']]);
const BOX115=`<div class="gplanner"><div class="gpl-h">🧺 Bausteine (Test 115)</div><div class="aset">${['Janet','can','swim','our teacher','with its toy mouse','won’t','us','any homework','give','very fast','the cat','play'].map(w=>V.b(w,'r')).join('')}</div></div>`;
window.LESSON={slug:'en-originale',title:'Abschluss: Originalaufgaben',kicker:'Hausaufgabe 10.11. · Abgabe 17.11.',fr:'Test 112 · 113 · 114 · 115 – die echten Sätze',icon:'📄',color:'#c2410c',testN:8,
 intro:'Zum Schluss die <b>echten Sätze</b> von allen vier Arbeitsblättern (Test 112–115). Mach diese Lektion, wenn die Lektionen <b>going to</b> und <b>Wortstellung</b> fertig sind – dann weißt du für jeden Satz, warum er so gebaut ist.'};
window.CHAPTERS=[
/* 1 – Original Test 112 */
{id:'o-112',kind:'Originalaufgaben',icon:'📄',title:'Original: Test 112',sub:'Die Sätze vom Arbeitsblatt – jetzt mit Bauplan',lv:3,keepOrder:true,
html:tip('<b>Exercise 1:</b> Rewrite the sentences with going to. Use <b>short forms</b>. · <b>Exercise 2:</b> Fill in the gaps with going to (<b>long forms</b>).','📄'),
ex:[
 wr('Test 112 · 1a – going to, <b>short form</b>: <i>I go to the concert.</i>',B('I’m going to go to the concert.'),'✂️ I’m + going to + 🚶 <b>go</b> to the concert.',{lv:3}),
 wr('Test 112 · 1b – <b>short form</b>: <i>You come home.</i>',B('You’re going to come home.'),'🫵 You’re going to come home.',{lv:3}),
 wr('Test 112 · 1c – <b>short form</b>: <i>Dad cleans his car.</i>',B('{Dad’s|Dad is|He’s} going to clean his car.'),'👨 Dad’s (= Dad is) going to clean his car – cleans → clean.',{lv:3}),
 wr('Test 112 · 1d – <b>short form</b>: <i>Timmy calls Debbie.</i>',B('{Timmy’s|Timmy is|He’s} going to call Debbie.'),'👦 Timmy’s going to call Debbie – calls → call.',{lv:3}),
 wr('Test 112 · 1e – <b>short form</b>: <i>Noah doesn’t help his mother.</i>',B('{Noah isn’t|Noah’s not|He isn’t|He’s not} going to help his mother.'),'🚫 doesn’t → Noah <b>isn’t</b> going to help his mother.',{lv:3}),
 wr('Test 112 · 1f – <b>short form</b>: <i>He goes to football practice instead.</i>',B('He’s going to go to football practice instead.'),'🚶 He’s going to <b>go</b> to football practice instead.',{lv:3}),
 gapw('Test 112 · 2 – <b>long forms</b>.','I {0} home tomorrow. (stay) <br>Sophie {1} me our homework. (bring) <br>Anna {2} her bike. (clean)',[['am going to stay'],['is going to bring'],['is going to clean']],'🧱 am / is + going to + Grundform – keine -ing-Form (nicht am staying, is bringing).',{lv:3}),
 gapw('Test 112 · 2 – <b>long forms</b>.','We {0} fine. (be) <br>Darla {1} the piano for you. (play) <br>Mr Sheffield {2} some days off work. (take)',[['are going to be'],['is going to play'],['is going to take']],'🧱 are going to be · is going to play · is going to take.',{lv:3}),
 gapw('Test 112 · 2 – <b>long forms</b>, verneint.','I {0} out tonight. (not go) <br>Hilary {1} happy after that game. (not feel)',[['am not going to go'],['is not going to feel']],'🚫 am <b>not</b> going to <b>go</b> · is <b>not</b> going to feel.',{lv:3}),
 gapw('Test 112 · 2 – <b>long forms</b>, Fragen.','{0} okay with that? (you / be) <br>{1} with us? (she / come)',[['Are you going to be'],['Is she going to come']],'❓ <b>Are you</b> going to be … · <b>Is she</b> going to come … – Hilfsverb vorne, she bleibt she.',{lv:3}),
]},
/* 2 – Original Test 113 */
{id:'o-113',kind:'Originalaufgaben',icon:'📄',title:'Original: Test 113',sub:'Wochenplaner · Plan oder Anzeichen · Sätze bauen',lv:3,keepOrder:true,
html:card('Familie Flemings Woche','🗓️',FLEM),
ex:[
 wr('Test 113 · 1 – Schreibe zum Planer: <b>On Monday</b> …',B('On Monday {Dave is|Dave’s} going to play tennis.','{Dave is|Dave’s} going to play tennis on Monday.'),'🎾 On Monday Dave is going to play tennis.',{lv:3,img:FLEM}),
 wr('Test 113 · 1 – <b>On Wednesday</b> …',B('On Wednesday {Dad is|Dad’s} going to meet Paul.','{Dad is|Dad’s} going to meet Paul on Wednesday.'),'🤝 On Wednesday Dad is going to meet Paul.',{lv:3,img:FLEM}),
 wr('Test 113 · 1 – <b>On Friday</b> …',B('On Friday {Mum is|Mum’s} going to go to the movies.','{Mum is|Mum’s} going to go to the movies on Friday.'),'🎬 On Friday Mum is going to <b>go</b> to the movies – go nicht vergessen!',{lv:3,img:FLEM}),
 wr('Test 113 · 1 – <b>On Saturday</b> …',B('On Saturday {Alyssa is|Alyssa’s} going to visit {Aunt|aunt} Betty.','{Alyssa is|Alyssa’s} going to visit {Aunt|aunt} Betty on Saturday.'),'👵 On Saturday Alyssa is going to visit Aunt Betty.',{lv:3,img:FLEM}),
 gapw('Test 113 · 2 – Ergänze mit going to.','Dad {0} the dishes after breakfast. (wash) <br>You haven’t done your homework? Mr Bark {1}. (notice)',[['is going to wash'],['is going to notice']],'🧽 is going to wash · 👀 is going to notice.',{lv:3}),
 gapw('Test 113 · 2 – Ergänze mit going to.','On the weekend I {0} a mile every morning. (run) <br>The door is unlocked. Someone {1}. (come in)',[['am going to run'],['is going to come in']],'🏃 am going to run · 🚪 is going to come in.',{lv:3}),
 seg('Test 113 · 2 – A (Plan) oder B (Anzeichen)?',['A Plan','B Anzeichen'],[['Dad is going to wash the dishes after breakfast.','A Plan'],['You haven’t done your homework? Mr Bark is going to notice.','B Anzeichen'],['On the weekend I am going to run a mile every morning.','A Plan'],['The door is unlocked. Someone is going to come in.','B Anzeichen']],'🗓️ Dad und ich haben es vor → A · 👀 keine Hausaufgaben / offene Tür → man sieht es kommen → B.',{lv:3}),
 wr('Test 113 · 3 – Baue den Satz: <i>Ella / fall / down the stairs</i>',B('{Ella is|Ella’s} going to fall down the stairs.'),'👧 Ella is going to fall down the stairs.',{lv:3}),
 wr('Test 113 · 3 – <i>Will and Robyn / come / to the party</i>',B('Will and Robyn {are|’re} going to come to the party.'),'👥 zwei Personen → <b>are</b> going to come.',{lv:3}),
 wr('Test 113 · 3 – <i>I / can / see / my cousin / next summer</i>',B('{I’m|I am} going to be able to see my cousin next summer.','Next summer {I’m|I am} going to be able to see my cousin.'),'💪 can → <b>be able to</b>: I’m going to be able to see my cousin next summer.',{lv:3}),
]},
/* 3 – Original Test 114 */
{id:'o-114',kind:'Originalaufgaben',icon:'📄',title:'Original: Test 114',sub:'Ganze Antworten · Fragen finden · Übersetzen',lv:3,keepOrder:true,
html:tip('<b>Exercise 1:</b> ganze Antworten · <b>Exercise 2:</b> die passende Frage · <b>Exercise 3:</b> übersetzen mit Kurzformen.','📄'),
ex:[
 wr('Test 114 · 1 – <i>Look at the boat! Is it going to sink?</i> – <b>No</b> …',B('No, {it isn’t|it’s not|it is not} going to sink.','No, it isn’t. {It isn’t|It’s not|It is not} going to sink.'),'🚤 the boat = it → No, it isn’t going to sink.',{lv:3}),
 wr('Test 114 · 1 – <i>Are you going to watch TV tonight?</i> – <b>Yes</b> …',B('Yes, {I’m|I am} going to watch TV tonight.','Yes, I am. {I’m|I am} going to watch TV tonight.'),'🙋 you → I: Yes, I’m going to watch TV tonight.',{lv:3}),
 wr('Test 114 · 1 – <i>Are we going to be in Hull soon?</i> – <b>Yes</b> …',B('Yes, {we’re|we are|you’re|you are} going to be in Hull soon.','Yes, we are. {We’re|We are} going to be in Hull soon.','Yes, you are. {You’re|You are} going to be in Hull soon.'),'🚗 Yes, we’re going to be in Hull soon.',{lv:3}),
 wr('Test 114 · 1 – <i>Is Mike going to see Amy?</i> – <b>No</b> …',B('No, {he isn’t|he’s not|he is not|Mike isn’t|Mike’s not|Mike is not} going to see {Amy|her}.','No, he isn’t. {He isn’t|He’s not|He is not} going to see {Amy|her}.'),'👦 Mike = he → No, he isn’t going to see Amy.',{lv:3}),
 wr('Test 114 · 2 – Frage zur Antwort: <i>…? – Yes, I’m going to cry.</i>',B('Are you going to cry?'),'🔁 I → you: Are you going to cry?',{lv:3}),
 wr('Test 114 · 2 – <i>…? – Yes, I’m going to spend a lot of money at the stores.</i>',B('Are you going to spend a lot of money at the {stores|store|shops}?'),'🔁 Are you going to spend a lot of money at the stores?',{lv:3}),
 wr('Test 114 · 2 – <i>…? – No, I am not going to be nice to Mr Owen.</i>',B('Are you going to be nice to Mr Owen?'),'🔁 Are you going to <b>be</b> nice to Mr Owen?',{lv:3}),
 wr('Test 114 · 2 – <i>…? – Yes, my team is going to lose the match.</i>',B('Is your team going to lose the match?'),'🔁 my team → <b>your</b> team · Is nach vorne.',{lv:3}),
 wr('Test 114 · 3 – Übersetze (Kurzform): <b>Wir besuchen Oma am Sonntag nicht.</b>',B('{We aren’t|We’re not} going to visit {Grandma|Granny|Gran|our grandma|our granny|Grandmother|our grandmother} on Sunday.','On Sunday {we aren’t|we’re not} going to visit {Grandma|Granny|Gran|our grandma|our granny|Grandmother|our grandmother}.'),'🗓️ Plan, verneint → We aren’t going to visit Grandma on Sunday.',{lv:3}),
 wr('Test 114 · 3 – Übersetze: <b>Musst du morgen mit uns mitkommen?</b>',B('Do you have to come with us tomorrow?','Are you going to have to come with us tomorrow?','Do you have to come along with us tomorrow?'),'📋 müssen → have to: Do you have to come with us tomorrow?',{lv:3}),
 wr('Test 114 · 3 – Übersetze (Kurzform): <b>Ich werde einen Kuchen für deinen Geburtstag nächste Woche backen.</b>',B('I’m going to bake a cake for your birthday next week.','Next week I’m going to bake a cake for your birthday.','I’m going to bake {a|you a} birthday cake next week.'),'🎂 I’m going to bake a cake for your birthday next week.',{lv:3}),
]},
/* 4 – Original Test 115 */
{id:'o-115',kind:'Originalaufgaben',icon:'📄',title:'Original: Test 115',sub:'Subjekt · Prädikat · Sätze bauen · true or false',lv:3,keepOrder:true,
html:tip('<b>Ex. 1:</b> Subjekt unterstreichen · <b>Ex. 2:</b> Prädikat: Hilfsverb gestrichelt, Vollverb durchgezogen · <b>Ex. 3:</b> Sätze aus dem Kasten · <b>Ex. 4:</b> true or false','📄')+GV.predLeg(),
ex:[
 tap('Test 115 · 1 – Tippe das <b>Subjekt</b> an.','Ms Taylor gives her son a sandwich.',[0,1],'👩 Wer gibt? → <b>Ms Taylor</b> (Ms gehört dazu).',{lv:3}),
 tap('Test 115 · 1 – Tippe das <b>Subjekt</b> an.','He is very hungry.',[0],'👦 Wer ist hungrig? → <b>He</b>.',{lv:3}),
 tap('Test 115 · 1 – Tippe das <b>Subjekt</b> an.','Children want tasty food.',[0],'🧒 Frag: <i>Wer</i> will etwas? Die Antwort ist das Subjekt → <b>Children</b>.',{lv:3}),
 seg('Test 115 · 2 – Hilfsverb (gestrichelt) oder Vollverb (durchgezogen)?',['Hilfsverb','Vollverb'],[['Layla <b>must</b> do her homework at once.','Hilfsverb'],['Layla must <b>do</b> her homework at once.','Vollverb'],['I <b>will</b> help her later.','Hilfsverb'],['I will <b>help</b> her later.','Vollverb'],['Her teacher <b>can</b> give her a good grade.','Hilfsverb'],['Her teacher can <b>give</b> her a good grade.','Vollverb']],'🧰 must / will / can = Hilfsverben (gestrichelt) · do / help / give = Vollverben (durchgezogen).',{lv:3}),
 wr('Test 115 · 3 – Baue aus dem Kasten den Satz mit <b>Janet</b>.',B('Janet can swim very fast.'),'🏊 Janet (S) + can swim (P) + very fast.',{lv:3,img:BOX115}),
 wr('Test 115 · 3 – Baue den Satz mit <b>our teacher</b>.',B('Our teacher won’t give us any homework.'),'👤 won’t give + us (Person) + any homework (Sache).',{lv:3,img:BOX115}),
 wr('Test 115 · 3 – Baue den Satz mit <b>the cat</b>. (Verb anpassen!)',B('The cat plays with its toy mouse.'),'🐱 the cat = it → play<b>s</b> + with its toy mouse.',{lv:3,img:BOX115}),
 tf('Test 115 · 4 – true or false?',[['A. The subject comes before the verb in every statement.',true],['B. Objects, place and time generally come before the predicate.',false],['C. In subordinate clauses the subject also always comes before the predicate.',true],['D. Time phrases usually stand at the very end of the sentence.',true]],'🚂 S → P → O → Ort → Zeit: Objekt, Ort und Zeit stehen <b>nach</b> dem Prädikat (B ist falsch).',{lv:3}),
]},
/* 5 – Hören & Aussprache */
{id:'o-hoeren',kind:'Hören & Aussprache',icon:'🎧',title:'Hören & Aussprache: Diktat',sub:'Originalsätze hören und ergänzen',lv:2,
html:hoer('<p>Hör jeden Satz genau an. Achte auf die <b>Kurzformen</b> (I’m, he’s) und darauf, ob <b>go</b> zweimal vorkommt.</p>'),
ex:[
 gapw('Hör zu und ergänze.','I’m {0} to the concert.',[['going to go']],'🚶 I’m going to <b>go</b> to the concert.',{au:'I’m going to go to the concert.',lv:2}),
 gapw('Hör zu und ergänze.','Sophie {0} me our homework.',[['is going to bring']],'🧱 Sophie = she → <b>is</b> going to <b>bring</b>: Hilfsverb is + going to + Grundform.',{au:'Sophie is going to bring me our homework.',lv:2}),
 gapw('Hör zu und ergänze.','{0} with us?',[['Is she going to come']],'❓ Is she going to come with us?',{au:'Is she going to come with us?',lv:2}),
 gapw('Hör zu und ergänze.','I’m going to {0} see my cousin next summer.',[['be able to']],'💪 Statt can nach going to: <b>be able to</b> – genau so hört man es im Satz.',{au:'I’m going to be able to see my cousin next summer.',lv:2}),
 gapw('Hör zu und ergänze.','Our teacher {0} us any homework.',[['won’t give',"won't give"]],'👤 won’t give + us + any homework.',{au:'Our teacher won’t give us any homework.',lv:2}),
 mc('Hör zu: Was ist das Subjekt?',['Her teacher','a good grade','her','can'],'👩‍🏫 Wer kann geben? → <b>Her teacher</b>.',{au:'Her teacher can give her a good grade.',lv:2}),
]},
];
window.TEST_EX=[
 wr('Mit going to – <b>Kurzform</b>: <i>I go to the party.</i>',B('I’m going to go to the party.'),'✂️ I’m going to <b>go</b> to the party.',{ref:'o-112',tag:'short forms'}),
 gapw('Langform mit going to.','{0} okay? (you / be)',[['Are you going to be']],'❓ Are you going to be okay?',{ref:'o-112',tag:'Frage'}),
 wr('Zum Planer: <b>On Monday</b> …',B('On Monday {Lily is|Lily’s} going to go swimming.','{Lily is|Lily’s} going to go swimming on Monday.'),'🏊 On Monday Lily is going to go swimming.',{ref:'o-113',tag:'Planer',img:PL('Lilys Woche',[['Monday','Lily','go swimming','🏊']])}),
 seg('A (Plan) oder B (Anzeichen)?',['A Plan','B Anzeichen'],[['The sky is black. It’s going to rain.','B Anzeichen']],'☁️ Der schwarze Himmel ist ein Anzeichen, das man sieht → Vorhersage <b>B</b>.',{ref:'o-113',tag:'A / B'}),
 wr('Baue: <i>you / can / come / tomorrow</i> (going to, Frage)',B('Are you going to be able to come tomorrow?','Tomorrow are you going to be able to come?'),'💪 Are you going to be able to come tomorrow?',{ref:'o-113',tag:'be able to'}),
 wr('Ganzer Satz: <i>Is the dog going to bark?</i> – <b>No</b> …',B('No, {it isn’t|it’s not|it is not} going to bark.','No, it isn’t. {It isn’t|It’s not|It is not} going to bark.'),'🐶 the dog = it → No, it isn’t going to bark.',{ref:'o-114',tag:'ganze Antwort'}),
 wr('Frage zur Antwort: <i>…? – Yes, I’m going to buy a cake.</i>',B('Are you going to buy a cake?'),'🔁 Are you going to buy a cake?',{ref:'o-114',tag:'Frage finden'}),
 tap('Tippe das <b>Subjekt</b> an.','The little children play in the snow.',[0,1,2],'🧒 Wer spielt? → The little children.',{ref:'o-115',tag:'Subjekt'}),
 ord('Bilde den Satz.',['Dad','will','show','us','the photos','.'],'👤 will show + us + the photos.',[],{ref:'o-115',tag:'Satzbau'}),
];
H.setRun({'o-112':10,'o-113':10,'o-114':11,'o-115':8,'o-hoeren':5},{test:[0,4]});
H.setIntro({
_lesson:{tab:'',vis:'<div class="aset">'+['112','113','114','115'].map(n=>V.b('Test '+n,'r',{icon:'📄'})).join('')+'</div>',
 was:'Die echten Sätze von allen vier Blättern – als Abschluss.',
 warum:'Wenn du diese Sätze sicher kannst, kannst du die Hausaufgabe abgeben.',
 schritte:[[E('🗓️'),'Test 112–114: going to'],[E('🧩'),'Test 115: Wortstellung'],[E('🎧'),'Diktat zum Schluss']],
 merk:'going to + Grundform · S → P → O → Ort → Zeit',
 fallen:[['I am going to the concert.','I’m going to go to the concert.','✂️ Kurzform + 🚶 go.']]},
'o-112':{rule:'Ex. 1: short forms · Ex. 2: long forms',t:'Original Test 112',vis:GV.plan('I','’m','go','to the concert.',{anim:false}),was:'Jetzt die echten Sätze von Test 112. Achte genau auf <b>short forms</b> (Ex. 1) und <b>long forms</b> (Ex. 2).',schritte:[[E('✂️'),'Ex. 1: Kurzform + going to + Grundform'],[E('📏'),'Ex. 2: Langform, not, Fragen']],merk:'short forms: I’m, you’re, he’s · long forms: I am, you are, he is',fallen:[['I am going to the concert.','I’m going to go to the concert.','✂️ Kurzform + 🚶 go.']]},
'o-113':{rule:'Planer: On + Tag + Wer? + is going to … · A Plan / B Anzeichen · can → be able to',t:'Original Test 113',vis:FLEM,was:'Die echten Sätze von Test 113: Planer, A oder B, Sätze bauen.',schritte:[[E('🗓️'),'Planer: On Monday Dave …'],[E('🅰️🅱️'),'erst die Form, dann A oder B'],[E('💪'),'can → be able to']],merk:'On Monday Dave is going to play tennis.',fallen:[['I’m going to can to see my cousin.','I’m going to be able to see my cousin.','💪 Statt can nach going to: <b>be able to</b> – genau so hört man es im Satz.']]},
'o-114':{rule:'ganze Antwort · Frage zur Antwort · übersetzen mit Kurzformen',t:'Original Test 114',vis:GV.swap('You','are','cry','Are you going to cry?'),was:'Die echten Sätze von Test 114.',schritte:[[E('📝'),'Ex. 1: Yes / No + ganzer Satz'],[E('🔎'),'Ex. 2: Frage zur Antwort'],[E('🇩🇪'),'Ex. 3: übersetzen']],merk:'Are you going to …? · No, it isn’t going to …',fallen:[['You are going to cry?','Are you going to cry?','❓ Are nach vorne.']]},
'o-115':{rule:'Subjekt unterstrichen · Hilfsverb gestrichelt · Vollverb durchgezogen · S → P → O → Ort → Zeit',t:'Original Test 115',vis:GV.predLeg()+GV.pred('Layla/s|must/a|do/m|her homework at once./r'),was:'Die echten Sätze von Test 115.',schritte:[[E('👤'),'Ex. 1: Wer oder was?'],[E('⚙️'),'Ex. 2: Hilfsverb + Vollverb'],[E('🧺'),'Ex. 3: Bausteine ordnen'],[E('✅'),'Ex. 4: true or false']],merk:'S → P → O → Ort → Zeit',fallen:[['The cat play with its toy mouse.','The cat plays with its toy mouse.','🐱 the cat = it → plays.']]},
'o-hoeren':{rule:'Kurzformen · going to go · be able to',t:'Diktat',vis:'<div class="aset">'+V.b('I’m going to go','v')+'</div>',was:'Originalsätze hören und ergänzen.',schritte:[[E('🔊'),'anhören'],[E('✍️'),'Lücke schreiben'],[E('🔁'),'nochmal anhören und prüfen']],merk:'Hören → schreiben → prüfen',fallen:[['I’m going to the concert.','I’m going to go to the concert.','🚶 zweimal go.']]}
});
