/* automatisch erzeugt (gram_build.js) – alle Englisch-Grammatik-Lektionen für die Trainings-Seite */
window.HUB_MODE=true;window.HUBL={};window.HUB_ORDER=[];
window.HUBCAP=function(slug){var W=window;W.HUBL[slug]={L:W.LESSON,C:W.CHAPTERS,T:W.TEST_EX||[],TR:W.TRACKS||{},WR:W.WRITERS||{}};W.HUB_ORDER.push(slug);W.TRACKS=undefined;W.WRITERS=undefined;W.TEST_EX=undefined;W.CHAPTERS=undefined;W.INTRO=undefined;};
(function(){
/* Lektion: going to future (Englisch-Hausaufgabe 10.11.2026, Tests 112–114) */
const {F,merk,attn,tip,hoer,card,spk}=H;
const {mc,gap,gapw,ord,wr,mt,seg,det}=X;
const {tf}=GX;const B=BX;
const E=e=>`<span class="big-ic">${e}</span>`;
const PL=(t,rows)=>GV.planner(t,rows);
window.LESSON={slug:'en-going-to',title:'going to – Pläne & Vorhersagen',kicker:'Hausaufgabe 10.11. · Abgabe 17.11.',fr:'I’m going to play · Are you going to …? · be able to',icon:'🗓️',color:'#0f766e',testN:8,
 intro:'Alles zu den Arbeitsblättern <b>Test 112, 113 und 114</b>: der Bauplan <b>am / is / are + going to + Grundform</b>, Kurzformen, Verneinung, Fragen und Antworten, Plan oder Anzeichen, <b>be able to</b> und <b>have to</b>. Die Originalsätze von den Blättern übst du am Ende in der Lektion <b>Abschluss: Originalaufgaben</b>.'};
const BETAB=`<table class="t"><tr><th>Wer?</th><th>be</th></tr><tr><td>🙋 I</td><td><b>am</b></td></tr><tr><td>👦 he · 👧 she · 🐱 it · <i>Dad, Sophie, the dog</i> (einer)</td><td><b>is</b></td></tr><tr><td>🫵 you · 🙋‍♂️🙋 we · 👥 they · <i>Tom and Lily, my parents</i> (mehrere)</td><td><b>are</b></td></tr></table>`;
const KURZ=`<table class="t"><tr><th>Frage</th><th>✓ Yes</th><th>✗ No</th></tr><tr><td>Are you …?</td><td>Yes, I am.</td><td>No, I’m not.</td></tr><tr><td>Is he / she / it …?</td><td>Yes, he is.</td><td>No, he isn’t.</td></tr><tr><td>Are we …?</td><td>Yes, we are.</td><td>No, we aren’t.</td></tr><tr><td>Are they …?</td><td>Yes, they are.</td><td>No, they aren’t.</td></tr></table>`;
const FLEM=PL('Familie Flemings Woche (Test 113)',[['Monday','Dave','play tennis','🎾'],['Wednesday','Dad','meet Paul','🤝'],['Friday','Mum','go to the movies','🎬'],['Saturday','Alyssa','visit Aunt Betty','👵']]);
window.CHAPTERS=[
/* 1 – Bauplan */
{id:'bauplan',kind:'Regel',icon:'🧱',title:'Der Bauplan: am / is / are + going to + Grundform',sub:'Pläne für die Zukunft – vier Teile, immer gleich',lv:1,
html:card('Welche Form von be?','🙋',BETAB+'<p class="legend">Auch <b>be</b> ist eine Grundform: We are going to <b>be</b> fine. · It is going to <b>be</b> cold.</p>'),
ex:[
 seg('Welche Form von <b>be</b> passt?',['am','is','are'],[['I …','am'],['Sophie …','is'],['we …','are'],['Dad …','is'],['Tom and Lily …','are'],['you …','are']],'🙋 I → am · 👦👧 einer (he, she, it, ein Name) → is · 👥 mehrere und you → are.',{lv:1}),
 gap('Wähle die passende Form.','I {0} going to play tennis tomorrow.',[['am','is','are']],'🙋 I → <b>am</b>: I am going to play tennis.',{lv:1}),
 gap('Wähle die passende Form.','Emma {0} going to visit her grandma.',[['is','am','are']],'👧 Emma ist eine Person = she → <b>is</b>.',{lv:1}),
 gap('Wähle die passende Form.','My parents {0} going to buy a new car.',[['are','is','am']],'👫 my parents = they (mehrere) → <b>are</b>.',{lv:1}),
 mc('Welcher Satz ist richtig?',['Ben is going to watch a film.','Ben is going to watches a film.','Ben going to watch a film.','Ben is going watch a film.'],'🧱 Alle vier Teile: Ben + <b>is</b> + <b>going to</b> + Grundform <b>watch</b> (ohne -es).',{lv:1,fr:true}),
 gap('Wähle das Verb in der Grundform.','Max is going to {0} his bike.',[['clean','cleans','cleaning']],'🧱 Nach going to steht die Grundform <b>clean</b> – ohne -s und ohne -ing.',{lv:2}),
 ord('Bilde den Satz.',['Lily','is','going to','bake','a cake','.'],'👧 Lily + is + going to + bake + a cake.',[],{lv:2}),
 gapw('Schreibe die <b>Langform</b> mit going to (Verb in Klammern).','Tom {0} his room. (tidy)',[['is going to tidy']],'👦 Tom = he → <b>is going to tidy</b>.',{lv:2}),
 gapw('Schreibe die Langform mit going to.','We {0} a party on Saturday. (have)',[['are going to have']],'🙋‍♂️🙋 we → <b>are going to have</b>.',{lv:2}),
 gapw('Schreibe die Langform mit going to.','I {0} my grandpa next week. (visit)',[['am going to visit']],'🙋 I → <b>am going to visit</b>.',{lv:3}),
 gapw('Schreibe die Langform mit going to.','It {0} cold tomorrow. (be)',[['is going to be']],'🌡️ it → is going to + <b>be</b> (be ist die Grundform von am / is / are).',{lv:3}),
]},
/* 2 – Zwei Fallen */
{id:'fallen',kind:'Falle',icon:'⚠️',title:'Zwei Fallen: going to go · keine -ing-Form',sub:'Genau diese Fehler waren auf dem Blatt',lv:1,
html:attn(`<ul><li><s>I am going to the concert.</s> → I am going to <b>go</b> to the concert.</li><li><s>I am staying home tomorrow.</s> → I am <b>going to stay</b> home tomorrow.</li></ul><p class="legend">Die -ing-Form ist eine andere Zeitform (Verlaufsform). Wenn <b>going to</b> verlangt ist, gehört in jeden Satz: am / is / are + going to + Grundform.</p>`,'Achtung: Arjens Stolpersteine'),
ex:[
 mc('Welcher Satz hat den <b>vollständigen</b> going-to-Bauplan (be + going to + Verb)?',['Tom is going to go to the cinema tomorrow.','Tom is going to the cinema tomorrow.','Tom is going to goes to the cinema tomorrow.'],'🚶 going to (Plan) + <b>go</b> (gehen) + to the cinema.',{fr:true,lv:1}),
 seg('Fehlt das Verb <b>go</b>? Was gehört in die Lücke?',['going to go','going to'],[['I am … to the concert.','going to go'],['She is … play tennis.','going to'],['We are … to the beach.','going to go'],['He is … visit Paul.','going to'],['They are … home.','going to go']],'🚶 Kommt danach kein Verb (nur to the …, home), brauchst du <b>go</b>. Steht schon ein Verb da (play, visit), reicht going to.',{lv:1}),
 seg('-ing-Form (gerade jetzt) oder going to (Plan)?',['gerade jetzt','Plan'],[['Look! Mia is reading a book.','gerade jetzt'],['Mia is going to read a book tonight.','Plan'],['Sam is going to wash the car tomorrow.','Plan'],['Shh! The baby is sleeping.','gerade jetzt']],'🎬 am / is / are + -ing → passiert <b>gerade</b> · 🗓️ am / is / are + going to + Grundform → <b>Plan</b>.',{lv:1}),
 gap('Wähle (going to + Grundform).','Sophie is going to {0} me our homework.',[['bring','bringing','brings']],'🧱 going to + Grundform <b>bring</b> – keine -ing-Form.',{lv:2}),
 gap('Wähle.','I {0} to the swimming pool on Sunday.',[['am going to go','am going','go going to']],'🚶 Plan + gehen → am going to <b>go</b>.',{lv:2}),
 gapw('Schreibe mit going to (Langform).','Jack {0} home after school. (go)',[['is going to go']],'🚶 Jack = he → is going to <b>go</b> home.',{lv:2}),
 gapw('Schreibe mit going to (Langform).','We {0} at a hotel. (stay)',[['are going to stay']],'🧱 we → are going to + <b>stay</b> (nicht staying).',{lv:2}),
 det('Finde die zwei Fehler.','Tomorrow I [am staying|am going to stay] at home. Ruby [is going|is going to go] to the park.','🎬 going to + Grundform: am going to stay · 🚶 Ruby is going to go to the park.',{lv:3}),
 wr('Schreibe mit going to: <b>Ich werde ins Kino gehen.</b>',B('I {am|’m} going to go to the {cinema|movies}.'),'🚶 I am going to <b>go</b> to the cinema – going to + go.',{lv:3}),
]},
/* 3 – Kurzformen & Verneinung */
{id:'kurzform',kind:'Regel',icon:'✂️',title:'Kurzformen & Verneinung',sub:'I’m · he’s · isn’t · Satz umbauen mit „short forms“',lv:1,
html:card('Lang – kurz – verneint','✂️',GV.beTab()+'<p class="legend">Bei Namen geht die Kurzform auch: <b>Dad’s</b> going to … = Dad is going to … · verneint auch: he’s not, you’re not.</p>'),
ex:[
 mt('Verbinde Langform und Kurzform.',[['I am','I’m'],['you are','you’re'],['she is','she’s'],['we are','we’re'],['it is not','it isn’t']],'✂️ Der Apostroph ’ steht dort, wo ein Buchstabe weggefallen ist.',{lv:1}),
 mc('Welche Kurzform ist richtig? <b>They are going to …</b>',['They’re going to …','Their going to …','They’s going to …','Theyre going to …'],'✂️ they are → <b>they’re</b> – Apostroph statt a.',{lv:1}),
 mc('Verneine: <b>I am going to cry.</b>',['I’m not going to cry.','I amn’t going to cry.','I don’t going to cry.','I’m going not to cry.'],'🙋 I am not → <b>I’m not</b> – not steht direkt nach am.',{lv:1,fr:true}),
 mc('Wie verneinst du? <b>Noah doesn’t help.</b> → mit going to',['Noah isn’t going to help.','Noah doesn’t going to help.','Noah isn’t going to helps.','Noah not going to help.'],'🚫 doesn’t fällt weg. Verneint wird mit <b>isn’t</b>: Noah isn’t going to help.',{lv:2,fr:true}),
 wr('Schreibe den Satz mit going to – <b>Kurzform</b>: <i>I play football.</i>',B('I’m going to play football.'),'✂️ I’m + going to + play football.',{lv:2,ph:'I’m going to …'}),
 wr('Mit going to – <b>Kurzform</b>: <i>You come home late.</i>',B('You’re going to come home late.'),'🫵 you are → <b>you’re</b> + going to + come.',{lv:2}),
 wr('Mit going to – <b>Kurzform</b>: <i>Emma calls her friend.</i>',B('{Emma’s|Emma is|She’s} going to call her friend.'),'👧 Emma’s (= Emma is) going to <b>call</b> – calls wird zur Grundform call.',{lv:2}),
 wr('Mit going to – <b>Kurzform</b>: <i>Max doesn’t do his homework.</i>',B('{Max isn’t|Max’s not|He isn’t|He’s not} going to do his homework.'),'🚫 doesn’t → <b>isn’t going to</b> + do.',{lv:3}),
 wr('Mit going to – <b>Kurzform</b>: <i>We go to the lake.</i>',B('We’re going to go to the lake.'),'🚶 We’re going to <b>go</b> to the lake – go nicht vergessen!',{lv:3}),
 wr('Mit going to – <b>Kurzform</b>: <i>She goes shopping instead.</i>',B('She’s going to go shopping instead.'),'🚶 goes → going to <b>go</b> · she is → she’s.',{lv:3}),
]},
/* 4 – Fragen & Antworten */
{id:'fragen',kind:'Regel',icon:'❓',title:'Fragen, Kurzantworten & ganze Antworten',sub:'Are you going to …? · Yes, I am. · Frage zur Antwort finden',lv:2,
html:card('Kurzantworten','✋',KURZ),
ex:[
 mc('Welche Frage ist richtig?',['Are you going to play football?','You are going to play football?','Do you going to play football?','Are you going play football?'],'❓ <b>Are</b> springt nach vorne: Are + you + going to + play?',{fr:true,lv:1}),
 gap('Wähle.','{0} Tom going to help us?',[['Is','Are','Does']],'👦 Tom = he → <b>Is</b> Tom going to help?',{lv:1}),
 seg('Wähle die passende Kurzantwort.',[],[['Are you going to swim? – Yes, …','I am','','',['I am','I’m','I do']],['Is Ruby going to come? – No, …','she isn’t','','',['she isn’t','she doesn’t','he isn’t']],['Are they going to win? – Yes, …','they are','','',['they are','they’re','they do']],['Is it going to rain? – No, …','it isn’t','','',['it isn’t','it doesn’t','it not']]],'✋ Kurzantwort = Hilfsverb aus der Frage (am / is / are). Bei Yes am Ende nie abkürzen: Yes, I am.',{lv:1}),
 ord('Bilde die Frage.',['Is','she','going to','come','with us','?'],'❓ Is + she + going to + come with us?',[],{lv:1}),
 gapw('Schreibe die Frage (Langform).','{0} to the party? (you / come)',[['Are you going to come']],'❓ <b>Are you</b> going to come – are steht vorne.',{lv:2}),
 gapw('Schreibe die Frage.','{0} cold tomorrow? (it / be)',[['Is it going to be']],'🌡️ <b>Is it</b> going to <b>be</b> cold?',{lv:2}),
 wr('Antworte mit einem <b>ganzen Satz</b>: <i>Are you going to read a book tonight?</i> – <b>Yes</b> …',B('Yes, {I’m|I am} going to read a book tonight.','Yes, I am. {I’m|I am} going to read a book tonight.'),'🙋 you → I: Yes, I’m going to read a book tonight.',{lv:2}),
 wr('Ganzer Satz: <i>Is the bus going to be late?</i> – <b>No</b> …',B('No, {it isn’t|it’s not|it is not} going to be late.','No, it isn’t. {It isn’t|It’s not|It is not} going to be late.'),'🚌 the bus = <b>it</b> → No, it isn’t going to be late.',{lv:3}),
 wr('Ganzer Satz: <i>Is Emma going to call Max?</i> – <b>No</b> …',B('No, {she isn’t|she’s not|she is not|Emma isn’t|Emma’s not|Emma is not} going to call {Max|him}.','No, she isn’t. {She isn’t|She’s not|She is not} going to call {Max|him}.'),'👧 Emma = <b>she</b> → No, she isn’t going to call Max.',{lv:3}),
 wr('Finde die Frage zur Antwort: <i>…? – Yes, I’m going to buy a new bike.</i>',B('Are you going to buy a new bike?'),'🔁 I → you · am → <b>Are</b> nach vorne: Are you going to buy a new bike?',{lv:3}),
 wr('Frage zur Antwort: <i>…? – No, my brother isn’t going to come.</i>',B('Is your brother going to come?'),'🔁 my brother → <b>your</b> brother · is nach vorne: Is your brother going to come?',{lv:3}),
]},
/* 5 – Plan oder Anzeichen, Zeitangaben, Planer, Übersetzen */
{id:'plan',kind:'Regel',icon:'🗓️',title:'Plan (A) oder Anzeichen (B)? · Zeitangaben · Übersetzen',sub:'Wochenplaner · on Monday · next week · Deutsch → Englisch',lv:2,
html:tip('<b>Zeitangaben</b> für die Zukunft: tomorrow · tonight · soon · next week · next summer · on Monday · on the weekend · after breakfast. Sie stehen ganz <b>hinten</b> – oder ganz <b>vorne</b>.','⏰'),
ex:[
 seg('A (Plan) oder B (Anzeichen)?',['A Plan','B Anzeichen'],[['I’m going to visit my aunt on Saturday.','A Plan'],['Look at the clouds! It’s going to rain.','B Anzeichen'],['Be careful! You’re going to fall!','B Anzeichen'],['We’re going to have a picnic tomorrow.','A Plan'],['The glass is at the edge of the table. It’s going to fall.','B Anzeichen']],'🗓️ vorgenommen → A Plan · 👀 man sieht es schon kommen → B Anzeichen.',{lv:1}),
 mc('Wo steht die Zeitangabe richtig?',['On Monday Sam is going to play tennis.','Sam on Monday is going to play tennis.','Sam is on Monday going to play tennis.'],'⏰ Zeitangabe ganz vorne (oder ganz hinten) – nie mitten im Bauplan.',{fr:true,lv:1}),
 gap('Wähle die Zeitangabe für die Zukunft.','We’re going to fly to Spain {0}.',[['next summer','last summer','yesterday']],'⏩ going to = Zukunft → <b>next</b> summer.',{lv:1}),
 wr('Schreibe einen Satz zum Planer – beginne mit <b>On Tuesday</b>.',B('On Tuesday {Tom is|Tom’s} going to play football.','{Tom is|Tom’s} going to play football on Tuesday.'),'⚽ On Tuesday + Tom + is going to + play football.',{lv:2,img:PL('Toms Woche',[['Tuesday','Tom','play football','⚽']])}),
 wr('Schreibe einen Satz zum Planer – beginne mit <b>On Thursday</b>.',B('On Thursday {Mum is|Mum’s} going to bake a cake.','{Mum is|Mum’s} going to bake a cake on Thursday.'),'🎂 On Thursday + Mum + is going to + bake a cake.',{lv:2,img:PL('Mums Woche',[['Thursday','Mum','bake a cake','🎂']])}),
 gapw('Ergänze mit going to (Langform).','Look at that dog! It {0} the sausage. (eat)',[['is going to eat']],'🐶 B Anzeichen: it → <b>is going to eat</b>.',{lv:2}),
 gapw('Ergänze mit going to (Langform).','My sister {0} a mile every morning. (run)',[['is going to run']],'🏃 A Plan: my sister = she → <b>is going to run</b>.',{lv:2}),
 wr('Übersetze mit going to (Kurzform): <b>Ich besuche morgen meinen Opa.</b>',B('I’m going to visit my {grandpa|grandad|granddad|grandfather} tomorrow.','Tomorrow I’m going to visit my {grandpa|grandad|granddad|grandfather}.'),'🗓️ Plan im deutschen Präsens → <b>I’m going to visit</b> … tomorrow.',{lv:3}),
 wr('Übersetze (Kurzform): <b>Sie spielen am Samstag nicht Fußball.</b> (sie = mehrere)',B('{They aren’t|They’re not} going to play football on Saturday.','On Saturday {they aren’t|they’re not} going to play football.'),'👥 they → <b>aren’t going to</b> play … on Saturday.',{lv:3}),
 wr('Übersetze (Kurzform): <b>Ich werde nächste Woche einen Kuchen backen.</b>',B('I’m going to bake a cake next week.','Next week I’m going to bake a cake.'),'🎂 Plan → <b>I’m going to bake</b> … next week (nicht will).',{lv:3}),
]},
/* 6 – be able to / have to */
{id:'able',kind:'Regel',icon:'💪',title:'can → be able to · must → have to',sub:'Was nach going to nicht stehen darf',lv:2,
html:card('Ersatzformen','💪','<table class="t"><tr><th>geht nicht nach going to</th><th>Ersatz</th><th>Deutsch</th></tr><tr><td><s>can</s></td><td><b>be able to</b></td><td>können</td></tr><tr><td><s>must</s></td><td><b>have to</b></td><td>müssen</td></tr></table><p class="legend">Ohne going to: <b>Do you have to …?</b> = Musst du …? · he / she / it <b>has to</b></p>'),
ex:[
 mc('Was passt? <b>I’m going to … swim 1 km.</b>',['be able to','can','can to','able'],'💪 can geht nicht nach going to → <b>be able to</b>.',{lv:1}),
 seg('Was gehört in die Lücke?',['be able to','have to'],[['We’re going to … get up early. (müssen)','have to'],['I’m going to … play the guitar. (können)','be able to'],['Is she going to … come? (können)','be able to'],['You’re going to … wait. (müssen)','have to']],'💪 können → be able to · 📋 müssen → have to.',{lv:1}),
 gap('Wähle.','Max is going to {0} help us tomorrow.',[['be able to','can','cans']],'💪 nach going to: <b>be able to</b> help.',{lv:1}),
 ord('Bilde den Satz.',['I’m','going to','be able to','visit','my aunt','next summer','.'],'💪 I’m going to <b>be able to</b> visit my aunt next summer.',[],{lv:2}),
 gapw('Schreibe mit going to (Langform).','Sophie {0} come to the party. (can)',[['is going to be able to']],'💪 can → be able to: Sophie <b>is going to be able to</b> come.',{lv:2}),
 gapw('Schreibe mit going to (Langform).','We {0} clean the kitchen. (must)',[['are going to have to']],'📋 must → have to: we <b>are going to have to</b> clean.',{lv:2}),
 wr('Baue den Satz mit going to: <i>Ben / can / ride / his new bike / tomorrow</i>',B('{Ben is|Ben’s} going to be able to ride his new bike tomorrow.','Tomorrow {Ben is|Ben’s} going to be able to ride his new bike.'),'💪 Ben is going to <b>be able to</b> ride his new bike tomorrow.',{lv:3}),
 wr('Übersetze: <b>Muss sie morgen arbeiten?</b>',B('Does she have to work tomorrow?','Is she going to have to work tomorrow?'),'📋 müssen → have to: <b>Does she have to</b> work tomorrow?',{lv:3}),
 wr('Baue den Satz mit going to: <i>I / not / can / come / to your party</i>',B('{I’m not|I am not} going to be able to come to your party.'),'💪 I’m not going to <b>be able to</b> come – can → be able to.',{lv:3}),
]},
/* 7 – Training leicht */
{id:'training1',kind:'Training ★',icon:'🌱',title:'Training ★: erkennen & wählen',sub:'Gemischte Aufgaben – leicht',lv:1,
html:merk('🧱 Bauplan',`<p>Wer? + <b>am / is / are</b> + <b>going to</b> + Grundform</p>${GV.plan('Dave','is','play','tennis.',{anim:false})}`,'blue'),
ex:[
 gap('Wähle.','Ruby and Jack {0} going to paint the fence.',[['are','is','am']],'👥 Ruby and Jack = they → <b>are</b>.',{lv:1}),
 gap('Wähle.','Look! The baby {0} going to cry.',[['is','are','am']],'👶 the baby = it / he / she (eins) → <b>is</b>.',{lv:1}),
 mc('Welcher Satz ist richtig?',['We’re going to go to the zoo.','We’re going to the zoo to go.','We going to go to the zoo.','We’re going to goes to the zoo.'],'🚶 We’re + going to + <b>go</b> to the zoo.',{fr:true,lv:1}),
 mc('Was ist die Kurzform von <b>he is not</b>?',['he isn’t','he aren’t','he doesn’t','he’sn’t'],'✂️ Die Schere schneidet das o weg: is not → <b>isn’t</b>. Der Apostroph ’ steht da, wo das o war.',{lv:1}),
 seg('Kurzantwort: Was passt?',[],[['Are you going to dance? – No, …','I’m not','','',['I’m not','I amn’t','I don’t']],['Is Dad going to cook? – Yes, …','he is','','',['he is','he’s','he does']]],'✋ Hilfsverb aus der Frage · Yes, he is. (lang) · No, I’m not.',{lv:1}),
 seg('A (Plan) oder B (Anzeichen)?',['A Plan','B Anzeichen'],[['Watch out! The ball is going to hit the window.','B Anzeichen'],['I’m going to learn French next year.','A Plan'],['Ben is going to sell his old bike.','A Plan']],'🗓️ vorgenommen → A · 👀 man sieht es schon → B.',{lv:1}),
 mc('Was passt? <b>She’s going to … help you.</b> (können)',['be able to','can','could','able to'],'💪 können nach going to → <b>be able to</b>.',{lv:1}),
 ord('Bilde die Frage.',['Are','they','going to','win','the match','?'],'❓ Are + they + going to + win …?',[],{lv:1}),
]},
/* 8 – Training mittel */
{id:'training2',kind:'Training ★★',icon:'🌿',title:'Training ★★: Formen selbst schreiben',sub:'Langform · Kurzform · Verneinung · Fragen · Planer',lv:2,
html:tip('Erst <b>Wer?</b> suchen → am / is / are → going to → Grundform. Bei <i>(not …)</i> kommt <b>not</b> hinter am / is / are. Bei <i>(you / …)</i> ist es eine <b>Frage</b>: am / is / are nach vorne.','🪜'),
ex:[
 gapw('Langform mit going to.','Mia {0} her bike. (repair)',[['is going to repair']],'👧 Mia = she → is going to repair.',{lv:2}),
 gapw('Langform mit going to.','The boys {0} football after school. (play)',[['are going to play']],'👦👦 the boys = they → are going to play.',{lv:2}),
 gapw('Langform mit going to.','I {0} TV tonight. (not watch)',[['am not going to watch']],'🙋 I am <b>not</b> going to watch – not hinter am.',{lv:2}),
 gapw('Langform mit going to.','Sam {0} us. (not visit)',[['is not going to visit']],'🚫 is <b>not</b> going to visit (Langform: is not).',{lv:2}),
 gapw('Frage mit going to.','{0} us tomorrow? (Grandma / call)',[['Is Grandma going to call']],'❓ <b>Is Grandma</b> going to call – is nach vorne.',{lv:2}),
 wr('Mit going to – <b>Kurzform</b>: <i>I walk to school.</i>',B('I’m going to walk to school.'),'✂️ I’m going to walk to school.',{lv:2}),
 wr('Mit going to – <b>Kurzform</b>: <i>Ruby doesn’t eat the soup.</i>',B('{Ruby isn’t|Ruby’s not|She isn’t|She’s not} going to eat the soup.'),'🚫 doesn’t → isn’t going to eat.',{lv:2}),
 wr('Mit going to – <b>Kurzform</b>: <i>He goes to bed early.</i>',B('He’s going to go to bed early.'),'🚶 He’s going to <b>go</b> to bed early.',{lv:3}),
 wr('Schreibe einen Satz zum Planer – beginne mit <b>On Sunday</b>.',B('On Sunday {Grandpa is|Grandpa’s} going to wash the car.','{Grandpa is|Grandpa’s} going to wash the car on Sunday.'),'🚗 On Sunday + Grandpa + is going to + wash the car.',{lv:3,img:PL('Opas Woche',[['Sunday','Grandpa','wash the car','🚗']])}),
]},
/* 9 – Training schwer */
{id:'training3',kind:'Training ★★★',icon:'🌳',title:'Training ★★★: Sätze bauen, fragen, übersetzen',sub:'Wie Test 113 und 114 – mit eigenen Sätzen',lv:3,
html:tip('Bei <i>Lily / can / swim …</i>: Verb in die richtige Form bringen und <b>can → be able to</b>. Bei Fragen zur Antwort: <b>I → you</b>, <b>my → your</b>.','🧠'),
ex:[
 wr('Baue den Satz mit going to: <i>Lily / win / the race</i>',B('{Lily is|Lily’s} going to win the race.'),'👧 Lily is going to win the race.',{lv:3}),
 wr('Baue den Satz mit going to: <i>Ben and Max / watch / a film / tonight</i>',B('Ben and Max {are|’re} going to watch a film tonight.','Tonight Ben and Max are going to watch a film.'),'👦👦 zwei Personen → <b>are</b> going to watch.',{lv:3}),
 wr('Baue den Satz mit going to: <i>We / can / swim / in the sea / next summer</i>',B('{We are|We’re} going to be able to swim in the sea next summer.','Next summer {we are|we’re} going to be able to swim in the sea.'),'💪 can → be able to: We’re going to be able to swim …',{lv:3}),
 wr('Ganzer Satz: <i>Are your friends going to come?</i> – <b>Yes</b> …',B('Yes, {they’re|they are} going to come.','Yes, they are. {They’re|They are} going to come.'),'👥 your friends = they → Yes, they’re going to come.',{lv:3}),
 wr('Ganzer Satz: <i>Is the cat going to jump?</i> – <b>No</b> …',B('No, {it isn’t|it’s not|it is not} going to jump.','No, it isn’t. {It isn’t|It’s not|It is not} going to jump.'),'🐱 the cat = it → No, it isn’t going to jump.',{lv:3}),
 wr('Frage zur Antwort: <i>…? – Yes, I’m going to sing a song.</i>',B('Are you going to sing a song?'),'🔁 I → you: Are you going to sing a song?',{lv:3}),
 wr('Frage zur Antwort: <i>…? – No, my parents aren’t going to sell the house.</i>',B('Are your parents going to sell the house?'),'🔁 my → your · are nach vorne: Are your parents going to sell the house?',{lv:3}),
 wr('Übersetze (Kurzform): <b>Er kauft morgen kein Eis.</b>',B('{He isn’t|He’s not} going to buy {an|any} ice cream tomorrow.','Tomorrow {he isn’t|he’s not} going to buy {an|any} ice cream.'),'🍦 Plan, verneint → He isn’t going to buy an ice cream tomorrow.',{lv:3}),
 wr('Übersetze: <b>Musst du heute Abend lernen?</b>',B('Do you have to {learn|study} tonight?','Do you have to {learn|study} this evening?','Are you going to have to {learn|study} tonight?'),'📋 müssen → have to: Do you have to learn tonight?',{lv:3}),
]},
/* 10 – Fehlerdetektiv */
{id:'detektiv',kind:'Fehlerdetektiv',icon:'🔍',title:'Fehlerdetektiv',sub:'Arjens typische Fehler finden und verbessern',lv:3,
html:tip('Prüfe jeden Satz mit der <b>Checkliste</b>: ① am / is / are da? ② going to? ③ Grundform (kein -ing, kein -s)? ④ go nicht vergessen? ⑤ Frage: Hilfsverb vorne? ⑥ can → be able to?','🔍'),
ex:[
 det('Finde die zwei Fehler.','I [am going|am going to go] to the cinema and Tom [is coming|is going to come] with me.','🚶 going to go · 🧱 is going to come (keine -ing-Form).',{lv:3}),
 det('Finde den Fehler.','[You are|Are you] going to be okay with that?','❓ In der Frage steht <b>Are</b> vorne: Are you going to …?',{lv:3}),
 det('Finde den Fehler.','I’m going to [can|be able to] see my cousin next summer.','💪 Nach going to steht immer eine Grundform – <i>can</i> hat keine. Darum wird can zu <b>be able to</b>.',{lv:3}),
 det('Finde den Fehler.','Is Sophie going to come? Yes, [he|she] is.','👧 Sophie ist ein Mädchen – in der Antwort wird sie zu <b>she</b> (nicht he).',{lv:3}),
 det('Finde die zwei Fehler.','Mum [is cooking|is going to cook] dinner tonight and Dad [is going to washes|is going to wash] the dishes.','🧱 going to + Grundform: cook · wash.',{lv:3}),
 mc('Die Aufgabe sagt: „Use short forms.“ Welche Lösung bekommt den Punkt?',['I’m going to go to the concert.','I am going to go to the concert.','I am going to the concert.','I’m going to the concert.'],'✂️ Kurzform <b>I’m</b> + 🚶 going to <b>go</b> – beides muss stimmen.',{fr:true,lv:3}),
]},
/* 11 – Hören & Aussprache (am Ende) */
{id:'hoeren',kind:'Hören & Aussprache',icon:'🎧',title:'Hören & Aussprache',sub:'Kurzformen hören · Frage oder Aussage · going to go',lv:2,
html:hoer(`<table class="t"><tr><th>So schreibt man</th><th>So klingt es</th></tr><tr><td>${F('I’m going to')}</td><td>„aim gouing tu“ – schnell gesprochen fast wie <i>gonna</i>. Schreiben musst du aber <b>going to</b>!</td></tr><tr><td>${F('they’re')}</td><td>klingt wie <i>their</i> und <i>there</i></td></tr><tr><td>${F('isn’t')}</td><td>„is-ent“ – das t ist kurz</td></tr><tr><td>${F('Are you going to come?')}</td><td>Frage: Die Stimme geht am Ende <b>hoch</b> ↗</td></tr><tr><td>${F('be able to')}</td><td>„bi ei-bel tu“</td></tr></table>`),
ex:[
 mc('Hör zu: Welchen Satz hörst du?',['I’m going to go home.','I’m going home.'],'🚶 Du hörst zweimal „go“: going to <b>go</b> home.',{au:'I’m going to go home.',say:false,lv:1}),
 mc('Hör zu: Kurzform oder Langform?',['Kurzform: She’s going to …','Langform: She is going to …'],'✂️ Man hört „shiiz“ – also die Kurzform <b>she’s</b>.',{au:'She’s going to call Ben.',say:false,lv:1}),
 mc('Hör zu: Frage oder Aussage?',['Frage','Aussage'],'❓ <b>Are</b> steht vorne und die Stimme geht hoch ↗ → Frage.',{au:'Are you going to come with us?',say:false,lv:1}),
 mc('Hör zu: Was hat Mia vor?',['Sie besucht morgen ihre Tante.','Sie besucht heute ihre Oma.','Sie backt einen Kuchen.','Sie geht ins Kino.'],'«Tomorrow I’m going to visit my aunt.» = Morgen besuche ich meine Tante.',{au:[['Mia','Tomorrow I’m going to visit my aunt.']],lv:1}),
 seg('Hör zu: A (Plan) oder B (Anzeichen)?',['A Plan','B Anzeichen'],[['Satz 1','A Plan','I’m going to bake a cake for Mum.'],['Satz 2','B Anzeichen','Look at the sky! It’s going to snow.'],['Satz 3','A Plan','We’re going to paint my room on Saturday.']],'🗓️ vorgenommen → A · 👀 Look at the sky! → B.',{lv:2}),
 gapw('Hör zu und ergänze.','We’re {0} to the zoo on Sunday.',[['going to go']],'🚶 We’re going to <b>go</b> to the zoo.',{au:'We’re going to go to the zoo on Sunday.',lv:2}),
 gapw('Hör zu und ergänze.','{0} it going to {1}?',[['Is'],['rain']],'❓ Frage = Hilfsverb nach vorne: <b>Is</b> it going to rain? – Is springt vor it.',{au:'Is it going to rain?',lv:2}),
 gapw('Hör zu und ergänze.','I’m going to be {0} to see my cousin.',[['able']],'💪 Der Muskel-Baustein heißt <b>be able to</b> + Grundform: be able to see.',{au:'I’m going to be able to see my cousin.',lv:2}),
]},
];
window.TEST_EX=[
 gap('Wähle.','My friends {0} going to play cards.',[['are','is','am']],'👥 my friends = they → are.',{ref:'bauplan',tag:'am / is / are'}),
 gapw('Langform mit going to.','I {0} to the library. (go)',[['am going to go']],'🚶 going to ist nur der Plan-Waggon – das Ziel-Verb <b>go</b> muss noch dazu: am going to <b>go</b>.',{ref:'fallen',tag:'going to go'}),
 wr('Mit going to – <b>Kurzform</b>: <i>Sophie brings the cake.</i>',B('{Sophie’s|Sophie is|She’s} going to bring the cake.'),'✂️ Sophie’s going to bring the cake.',{ref:'kurzform',tag:'Kurzform'}),
 gapw('Frage mit going to.','{0} with us? (Dad / come)',[['Is Dad going to come']],'❓ Dad = he → Hilfsverb <b>is</b> springt nach vorne: <b>Is</b> Dad going to come?',{ref:'fragen',tag:'Frage'}),
 seg('Kurzantwort.',[],[['Are you going to help? – Yes, …','I am','','',['I am','I’m','I do']]],'✋ Kurzantwort = Yes + Person + Hilfsverb: <b>Yes, I am.</b> (Frage mit are you → Antwort mit I am).',{ref:'fragen',tag:'Kurzantwort'}),
 seg('A (Plan) oder B (Anzeichen)?',['A Plan','B Anzeichen'],[['Look! The cup is going to fall.','B Anzeichen'],['I’m going to start a new hobby.','A Plan']],'👀 Man sieht ein Anzeichen → <b>B</b> (Vorhersage). 🗓️ Jemand hat es geplant → <b>A</b> (Plan).',{ref:'plan',tag:'Plan / Anzeichen'}),
 wr('Baue den Satz mit going to: <i>Mia / can / come / tomorrow</i>',B('{Mia is|Mia’s} going to be able to come tomorrow.','Tomorrow {Mia is|Mia’s} going to be able to come.'),'💪 Nach going to braucht man eine Grundform – can hat keine. Darum: going to <b>be able to</b> + Verb.',{ref:'able',tag:'be able to'}),
 wr('Ganzer Satz: <i>Is Ben going to cook?</i> – <b>No</b> …',B('No, {he isn’t|he’s not|he is not|Ben isn’t|Ben’s not|Ben is not} going to cook.','No, he isn’t. {He isn’t|He’s not|He is not} going to cook.'),'👦 No, he isn’t going to cook.',{ref:'fragen',tag:'ganze Antwort'}),
 wr('Übersetze (Kurzform): <b>Wir gehen morgen nicht schwimmen.</b>',B('{We aren’t|We’re not} going to go swimming tomorrow.','Tomorrow {we aren’t|we’re not} going to go swimming.'),'🏊 We aren’t going to go swimming tomorrow.',{ref:'plan',tag:'Übersetzen'}),
 det('Finde den Fehler.','Tom [is playing|is going to play] tennis tomorrow – that’s his plan.','🧱 going to + Grundform: is going to play.',{ref:'detektiv',tag:'Fehlerdetektiv'}),
];
H.setRun({bauplan:6,fallen:5,kurzform:6,fragen:6,plan:6,able:5,training1:5,training2:5,training3:5,detektiv:4,hoeren:5},
 {bauplan:[4],fallen:[0,7],kurzform:[3,8],fragen:[2,9],plan:[0],able:[6],detektiv:[5],test:[1,3]});
H.setIntro({
_lesson:{tab:'',vis:GV.plan('I','am','play','tennis tomorrow.')+GV.time('🗓️','Plan'),
 was:'Mit <b>going to</b> sagst du, was jemand <b>vorhat</b> – oder was gleich <b>passieren wird</b>.',
 warum:'Genau das kommt in Test 112–114: Formen bilden, Fragen stellen, antworten, übersetzen.',
 schritte:[[V.b('am / is / are','v'),'Form von be'],[V.b('going to','v'),'Plan-Teil'],[V.b('play','v'),'Grundform'],[E('❓'),'Fragen & Antworten']],
 merk:'am / is / are + going to + Grundform',
 fallen:[['I am going to the concert.','I am going to go to the concert.','🚶 Das Verb <b>go</b> fehlt.'],['I am staying home tomorrow.','I am going to stay home tomorrow.','🧱 going to + Grundform.']]},
bauplan:{h:'🧱 Der Bauplan',rule:'Wer? + am / is / are + going to + Grundform',t:'Der Bauplan',
 vis:GV.plan('I','am','play','tennis tomorrow.')+GV.time('🎾','morgen: Plan'),
 was:'Mit <b>going to</b> sagst du, was jemand <b>vorhat</b> (einen Plan) – zum Beispiel morgen, am Wochenende oder nächste Woche.',
 warumVis:GV.de('Morgen <b>spiele</b> ich Tennis.','Tomorrow I <b>am going to play</b> tennis.','🇩🇪 Präsens reicht · 🇬🇧 going to zeigt: Plan für die Zukunft'),
 warum:'Im Deutschen reicht oft das Präsens. Im Englischen zeigt <b>going to</b>: Das ist ein Plan für die Zukunft.',
 schritte:[[V.b('Wer?','s'),'Wer tut es? I, you, Dad, Sophie …'],[V.b('am / is / are','v'),'passende Form von be (Tabelle unten)'],[V.b('going to','v'),'immer gleich: going to'],[V.b('play','v'),'Verb in der Grundform – ohne -s, ohne -ing']],
 bsp:[['I am going to play tennis.','Ich werde Tennis spielen.','',E('🎾')],['Sophie is going to bring the homework.','Sophie wird die Hausaufgaben mitbringen.'],['Tom and Lily are going to clean the kitchen.','Tom und Lily werden die Küche putzen.'],['We are going to be fine.','Uns wird es gut gehen. (be = Grundform)','',E('😊')]],
 merk:'am / is / are + going to + Grundform',
 fallen:[['I going to play.','I am going to play.','🧩 <b>am / is / are</b> darf nicht fehlen.'],['She is going to plays.','She is going to play.','🧱 Nach going to: <b>Grundform</b> – ohne -s.'],['Dad are going to cook.','Dad is going to cook.','👨 Dad = he → <b>is</b>.']]},
fallen:{h:'⚠️ Zwei Fallen',rule:'going to + Grundform · bei „gehen“: going to go',t:'Zwei Fallen',
 vis:V.vs('I/s|am going/v|to the concert./r','I/s|am going to go/v|to the concert./r','🚶 going to = Plan · go = gehen'),
 was:'Zwei Fehler passieren besonders oft: Das Verb <b>go</b> wird vergessen – und statt der Grundform steht die <b>-ing-Form</b>.',
 warumVis:GV.plan('I','am','go','to the concert.'),
 warum:'<b>going to</b> ist nur der Plan-Teil („werden“). Was du tust, sagt das Verb danach. Wer zum Konzert <b>geht</b>, braucht <b>go</b>: going to go.',
 schritte:[[E('🔍'),'Welches Verb steckt im Satz? go, stay, bring …'],[V.b('going to','v'),'Plan-Teil davor'],[V.b('go','v'),'Verb in der Grundform dahinter – auch wenn es go ist!'],[E('🚫'),'keine -ing-Form: nicht <s>am staying</s>']],
 bsp:[['I am going to go to the concert.','Ich werde zum Konzert gehen.','',E('🎸')],['He is going to go to football practice.','Er wird zum Fußballtraining gehen.','',E('⚽')],['I am going to stay home tomorrow.','Ich werde morgen zu Hause bleiben.','',E('🏠')]],
 merk:'going to + Grundform · „gehen“ → going to go',
 fallen:[['I am going to the concert.','I am going to go to the concert.','🚶 Das Verb <b>go</b> fehlt.'],['Sophie is bringing me our homework.','Sophie is going to bring me our homework.','🎬 -ing-Form statt going to + Grundform.'],['He is going to football practice.','He is going to go to football practice.','🚶 going to <b>go</b> to …']],
 parts:[{h:'🎬 -ing-Form ≠ going to',vis:GV.de('Look! Mia <b>is reading</b>. (gerade jetzt)','Mia <b>is going to read</b> tonight. (Plan)','🎬 -ing = passiert jetzt · 🗓️ going to = Plan'),
  was:'<b>am staying</b> ist eine andere Zeitform (Verlaufsform: „gerade jetzt“). Wenn <b>going to</b> verlangt ist, gehört in jeden Satz: am / is / are + <b>going to</b> + Grundform.',
  schritte:[[E('🎬'),'is reading → gerade jetzt'],[E('🗓️'),'is going to read → Plan']],
  fallen:[['I am staying home tomorrow.','I am going to stay home tomorrow.','🧱 going to + Grundform <b>stay</b>.']]}]},
kurzform:{h:'✂️ Kurzformen & Verneinung',rule:'I’m · you’re · he’s · she’s · we’re · they’re · isn’t · aren’t · I’m not',t:'Kurzformen',
 vis:'<div class="aset">'+V.b('I am','s')+E('✂️')+V.b('I’m','s')+'</div><div class="aset">'+V.b('he is not','v')+E('✂️')+V.b('he isn’t','v')+'</div>',
 was:'Im Gespräch kürzt man ab: <b>I am → I’m</b>, <b>he is → he’s</b>. Verneinung: <b>not</b> steht nach am / is / are – kurz: <b>isn’t</b>, <b>aren’t</b>, <b>I’m not</b>.',
 warum:'Steht in der Aufgabe „Use <b>short forms</b>“, ist die Langform ein Fehler – auch wenn der Satz sonst stimmt.',
 schritte:[[V.b('I am','s'),'Langform'],[E('✂️'),'Buchstabe weg → Apostroph ’'],[V.b('I’m','s'),'Kurzform'],[V.b('isn’t','v'),'verneint: is not → isn’t · are not → aren’t · am not → I’m not']],
 bsp:[['I’m going to call you.','Ich werde dich anrufen.'],['He isn’t going to come.','Er wird nicht kommen.'],['They’re going to win.','Sie werden gewinnen.','',E('🏆')]],
 merk:'I’m · you’re · he’s · she’s · it’s · we’re · they’re · isn’t · aren’t · I’m not',
 fallen:[['I am going to go … (short form verlangt)','I’m going to go …','✂️ Kurzform: <b>I’m</b>.'],['I amn’t going to …','I’m not going to …','🙋 bei I nur: <b>I’m not</b>.']],
 parts:[{h:'🔁 Satz umbauen: simple present → going to',vis:GV.de('Dad <b>cleans</b> his car.','Dad’s <b>going to clean</b> his car.','cleans → Grundform clean'),
  was:'So machst du aus einem Satz im simple present einen going-to-Satz:',
  schritte:[[V.b('Dad','s'),'Wer? bleibt'],[V.b('’s','v'),'be dazu (Kurzform)'],[V.b('going to','v'),'Plan-Teil'],[V.b('clean','v'),'Verb in Grundform: cleans → clean, goes → go'],[V.b('his car','r'),'Rest bleibt gleich']],
  bsp:[['Dad’s going to clean his car.','Papa wird sein Auto putzen.'],['Emma isn’t going to help.','Emma wird nicht helfen. (doesn’t help → isn’t going to help)']],
  fallen:[['Noah doesn’t going to help.','Noah isn’t going to help.','🚫 Verneint wird mit <b>isn’t</b> – doesn’t fällt weg.'],['He’s going to goes …','He’s going to go …','🧱 goes → Grundform <b>go</b>.']]}]},
fragen:{h:'❓ Fragen & Antworten',rule:'Frage: Am / Is / Are + Wer? + going to + Grundform …?',t:'Fragen & Antworten',
 vis:GV.swap('You','are','watch TV tonight','Are you going to watch TV tonight?'),
 was:'Bei der Frage springt <b>am / is / are</b> nach vorne – vor das Subjekt. <b>going to + Grundform</b> bleibt gleich.',
 warum:'Wie im Deutschen: „Du wirst …“ → „<b>Wirst</b> du …?“ – das Hilfsverb kommt nach vorne.',
 schritte:[[V.b('You are …','s'),'Aussage'],[V.b('Are','v'),'are nach vorne'],[V.b('you','s'),'dann Wer?'],[V.b('going to watch …?','r'),'Rest + Fragezeichen']],
 bsp:[['Are you going to watch TV tonight?','Wirst du heute Abend fernsehen?','',E('📺')],['Is she going to come with us?','Wird sie mit uns kommen?'],['Is it going to rain?','Wird es regnen?','',E('🌧️')]],
 merk:'Am / Is / Are + Wer? + going to + Grundform …?',
 fallen:[['You are going to be okay?','Are you going to be okay?','❓ <b>Are</b> nach vorne.'],['Is she going to come? – Yes, he is.','Is she going to come? – Yes, she is.','👧 she bleibt she.']],
 parts:[{h:'✋ Kurzantworten',vis:KURZ,was:'Kurz antworten: <b>Yes / No</b> + Wer? + <b>am / is / are</b> aus der Frage.',
   schritte:[[V.b('Are','v'),'Hilfsverb aus der Frage nehmen'],[V.b('you → I','s'),'Wer? anpassen: you → I'],[E('✋'),'Yes: lang (Yes, I am.) · No: kurz erlaubt (No, I’m not.)']],
   fallen:[['Yes, I’m.','Yes, I am.','✋ Am Satzende nie abkürzen.'],['Yes, I do.','Yes, I am.','↩️ Frage mit Are → Antwort mit am.']]},
  {h:'📝 Ganze Antworten (full answers)',vis:V.train('No,/x|it/s|isn’t going to sink./v'),
   was:'Ganze Antwort = ganzer Satz: <b>Yes, I’m going to watch TV tonight.</b> · <b>No, it isn’t going to sink.</b>',
   schritte:[[V.b('Yes / No','x'),'Ja oder nein'],[V.b('it','s'),'Wer? als Pronomen: the boat → it, Mike → he'],[V.b('isn’t','v'),'am / is / are (+ not)'],[V.b('going to sink','v'),'Rest aus der Frage übernehmen']],
   bsp:[['Is Mike going to see Amy? – No, he isn’t going to see Amy.','Mike = he'],['Are you going to cook? – Yes, I’m going to cook.','you → I']],
   fallen:[['Is the boat going to sink? – No, he isn’t going to sink.','No, it isn’t going to sink.','🚤 the boat = <b>it</b>.']]},
  {h:'🔎 Die Frage zur Antwort finden',vis:GV.de('Antwort: Yes, <b>I’m</b> going to cry.','<b>Are you</b> going to cry?','Gesucht ist die Frage: I → you · am → Are nach vorne','💬','❓'),
   was:'Manchmal ist die Antwort gegeben und du baust die passende Frage.',
   schritte:[[V.b('I → you','s'),'Wer? umdrehen: I → you, my → your'],[V.b('Are','v'),'passendes be nach vorne'],[V.b('going to …?','r'),'Rest übernehmen + ?']],
   fallen:[['You are going to cry?','Are you going to cry?','❓ <b>Are</b> nach vorne.'],['Is my team going to lose?','Is your team going to lose?','🔁 my → <b>your</b>.']]}]},
plan:{h:'🗓️ Plan oder ☁️ Anzeichen?',rule:'A Plan 🗓️ · B Anzeichen 👀 – beide: am / is / are + going to + Grundform',t:'Plan oder Anzeichen',
 vis:GV.ab(),
 was:'going to hat zwei Aufgaben: <b>A</b> – ein <b>Plan</b> (jemand hat es sich vorgenommen). <b>B</b> – ein <b>Anzeichen</b>: Man sieht jetzt schon, was gleich passiert.',
 warum:'In der Arbeit sollst du A oder B zuordnen. Frag dich: Hat sich das jemand <b>vorgenommen</b> – oder <b>sieht man es kommen</b>?',
 schritte:[[E('🗓️'),'Will das jemand tun? → A Plan'],[E('👀'),'Gibt es einen Hinweis (Look!, Be careful!, The door is unlocked, Wolken …)? → B Anzeichen'],[E('🧱'),'Beide Male gleich: am / is / are + going to + Grundform']],
 bsp:[['I’m going to visit my aunt on Saturday.','A – Plan','',E('🗓️')],['Look at the clouds! It’s going to rain.','B – Anzeichen','',E('☁️')],['Be careful! You’re going to fall!','B – Anzeichen','',E('⚠️')]],
 merk:'A Plan 🗓️ · B Anzeichen 👀 – beide: am / is / are + going to + Grundform',
 fallen:[['Look at the clouds! It rains.','Look at the clouds! It’s going to rain.','☁️ Anzeichen → going to.']],
 parts:[{h:'⏰ Zeitangaben',vis:'<div class="aset">'+['tomorrow','tonight','soon','next week','next summer','on Monday','on the weekend','after breakfast'].map(t=>V.b(t,'t')).join('')+'</div>',
   was:'Zeitangaben zeigen: Es geht um die Zukunft. Sie stehen ganz <b>hinten</b> – oder ganz <b>vorne</b>: <i>On Monday Dave is going to …</i>',
   schritte:[[V.b('on Monday','t'),'on + Wochentag'],[V.b('next week','t'),'next + week / summer'],[E('↔️'),'ganz vorne oder ganz hinten – nie zwischen Wer? und Verb']],
   fallen:[['Dave on Monday is going to play tennis.','On Monday Dave is going to play tennis.','⏰ Zeit ganz vorne oder ganz hinten.']]},
  {h:'🗓️ Der Wochenplaner',vis:PL('Beispiel',[['Tuesday','Tom','play football','⚽'],['Thursday','Mum','bake a cake','🎂']]),
   was:'Aus einem Planer baust du Sätze: <b>On</b> + Tag + Wer? + <b>is going to</b> + Tätigkeit.',
   bsp:[['On Tuesday Tom is going to play football.','Am Dienstag wird Tom Fußball spielen.'],['On Thursday Mum is going to bake a cake.','Am Donnerstag wird Mama einen Kuchen backen.']],
   fallen:[['On Tuesday Tom going to play football.','On Tuesday Tom is going to play football.','🧩 <b>is</b> nicht vergessen.'],['On Friday Mum is going to the movies.','On Friday Mum is going to go to the movies.','🚶 go nicht vergessen.']]},
  {h:'🇩🇪→🇬🇧 Aus dem Deutschen übersetzen',vis:GV.de('Wir <b>besuchen</b> Opa am Sonntag.','We’re <b>going to visit</b> Grandpa on Sunday.','Deutsches Präsens + Zeitangabe = Plan → going to'),
   was:'Im Deutschen sagt man Pläne oft im Präsens („Wir besuchen …“) oder mit „werden“. Im Englischen nimmst du <b>going to</b>.',
   schritte:[[E('🗓️'),'Plan? → going to'],[V.b('aren’t','v'),'„nicht“ → isn’t / aren’t / I’m not'],[V.b('on Sunday','t'),'Zeitangabe ans Ende (oder an den Anfang)']],
   fallen:[['I will bake a cake. (Ich werde … – ein Plan)','I’m going to bake a cake.','🔮 „werden“ bei einem Plan → <b>going to</b>.'],['We don’t visit Grandpa on Sunday.','We aren’t going to visit Grandpa on Sunday.','🗓️ Plan in der Zukunft → going to.']]}]},
able:{h:'💪 <b>be able to</b> · 📋 <b>have to</b>',rule:'can → be able to · must → have to (nach going to)',t:'be able to · have to',
 vis:V.vs('I’m going to/v|can see/v|my cousin./r','I’m going to/v|be able to see/v|my cousin./r','💪 can passt nicht hinter going to'),
 was:'<b>can</b> und <b>must</b> haben keine Grundform. Nach going to brauchst du einen Ersatz: <b>be able to</b> (können) und <b>have to</b> (müssen).',
 warumVis:'<div class="aset">'+V.b('can','v',{lbl:'können'})+E('➜')+V.b('be able to','v',{lbl:'können'})+'</div><div class="aset">'+V.b('must','v',{lbl:'müssen'})+E('➜')+V.b('have to','v',{lbl:'müssen'})+'</div>',
 warum:'Nach going to muss eine Grundform stehen. can und must sind keine – deshalb „verkleiden“ sie sich.',
 schritte:[[V.b('I’m going to','v'),'going to'],[V.b('be able to','v'),'statt can'],[V.b('see','v'),'Verb in Grundform']],
 bsp:[['I’m going to be able to see my cousin next summer.','Ich werde meine Cousine nächsten Sommer sehen können.','',E('☀️')],['We’re going to have to get up early.','Wir werden früh aufstehen müssen.','',E('⏰')],['Are you going to be able to come?','Wirst du kommen können?']],
 merk:'can → be able to · must → have to',
 fallen:[['I’m going to can to see my cousin.','I’m going to be able to see my cousin.','💪 Nach going to steht immer eine Grundform – <i>can</i> hat keine. Darum wird can zu <b>be able to</b>.'],['She’s going to must work.','She’s going to have to work.','📋 must → <b>have to</b>.']],
 parts:[{h:'📋 have to auch ohne going to',vis:GV.de('<b>Musst</b> du morgen mit uns mitkommen?','<b>Do you have to</b> come with us tomorrow?','Frage mit do + have to'),
  was:'Für „müssen“ sagt man oft <b>have to</b>. Die Frage bildest du mit <b>do / does</b>: Do you have to …? · Does she have to …?',
  schritte:[[V.b('I / you / we / they','s'),'have to'],[V.b('he / she / it','s'),'has to'],[V.b('Do / Does …?','v'),'Frage: Do / Does + Wer? + have to …?']],
  bsp:[['Do you have to come with us tomorrow?','Musst du morgen mit uns mitkommen?'],['She has to tidy her room.','Sie muss ihr Zimmer aufräumen.','',E('🧹')]],
  fallen:[['Do you must come?','Do you have to come?','📋 must hat keine Frage mit do → <b>have to</b>.']]}]},
training1:{rule:'Wer? + am / is / are + going to + Grundform',t:'Training ★',vis:GV.plan('Dave','is','play','tennis.',{anim:false}),was:'Erkennen und wählen – zum Warmwerden.',schritte:[[E('👀'),'Satz lesen'],[V.b('am / is / are','v'),'passende Form wählen'],[E('✅'),'prüfen']],merk:'am / is / are + going to + Grundform',fallen:[['Ruby and Jack is going to …','Ruby and Jack are going to …','👥 zwei → are.']]},
training2:{rule:'Langform · Kurzform · not hinter am / is / are · Frage: Hilfsverb vorne',t:'Training ★★',vis:GV.plan('Mia','is','repair','her bike.',{anim:false}),was:'Jetzt schreibst du die Formen selbst – wie in Test 112.',schritte:[[V.b('Wer?','s'),'Wer?'],[V.b('is (not)','v'),'be (+ not)'],[V.b('going to repair','v'),'going to + Grundform']],merk:'not steht hinter am / is / are',fallen:[['I not am going to watch …','I am not going to watch …','🚫 not hinter am.']]},
training3:{rule:'Sätze bauen · ganze Antworten · Fragen finden · übersetzen',t:'Training ★★★',vis:GV.swap('You','are','sing a song','Are you going to sing a song?'),was:'Die schweren Aufgabentypen aus Test 113 und 114 – mit neuen Sätzen.',schritte:[[E('🧩'),'Bausteine ordnen'],[E('💪'),'can → be able to'],[E('🔁'),'Frage: I → you, Hilfsverb vorne']],merk:'can → be able to · Frage: Am / Is / Are vorne',fallen:[['Ben and Max is going to …','Ben and Max are going to …','👥 zwei → are.']]},
detektiv:{rule:'Checkliste: be? going to? Grundform? go? Frage-Stellung? be able to?',t:'Fehlerdetektiv',vis:V.vs('Tom/s|is coming/v|with me./r','Tom/s|is going to come/v|with me./r'),was:'Finde die Fehler, die auf dem Blatt passiert sind – in neuen Sätzen.',schritte:[[E('1️⃣'),'am / is / are da?'],[E('2️⃣'),'going to + Grundform?'],[E('3️⃣'),'go nicht vergessen?'],[E('4️⃣'),'Frage: Hilfsverb vorne?']],merk:'be + going to + Grundform',fallen:[['I’m going to can see …','I’m going to be able to see …','💪 Statt can nach going to: <b>be able to</b> – genau so hört man es im Satz.']]},
hoeren:{rule:'Kurzformen hören · Frage ↗ · going to go',t:'Hören & Aussprache',vis:'<div class="aset">'+V.b('I’m going to','v',{lbl:'„aim gouing tu“'})+V.b('they’re','s',{lbl:'= their / there'})+'</div>',was:'Hören, verstehen und nachsprechen.',warum:'Im Gespräch klingt going to oft verschluckt – trotzdem musst du es erkennen.',schritte:[[E('🔊'),'anhören'],[E('👂'),'Kurzform? Frage?'],[E('🗣️'),'nachsprechen']],merk:'Hören → erkennen → nachsprechen',fallen:[['I’m gonna go. (geschrieben)','I’m going to go.','✍️ <b>gonna</b> sagt man nur – schreiben: going to.']]}
});

})();
window.HUBCAP("en-going-to");
(function(){
/* Lektion: Wortstellung im Aussagesatz (Englisch-Hausaufgabe 10.11.2026, Test 115) */
const {F,merk,attn,tip,hoer,card,spk}=H;
const {mc,gap,gapw,ord,wr,mt,seg,det}=X;
const {tf,tap}=GX;const B=BX;
const E=e=>`<span class="big-ic">${e}</span>`;
const BOX=(t,ws)=>`<div class="gplanner"><div class="gpl-h">🧺 ${t}</div><div class="aset">${ws.map(w=>V.b(w,'r')).join('')}</div></div>`;
window.LESSON={slug:'en-wortstellung',title:'Wortstellung im Satz',kicker:'Hausaufgabe 10.11. · Abgabe 17.11.',fr:'Subjekt → Prädikat → Objekt → Ort → Zeit',icon:'🧩',color:'#7c3aed',testN:8,
 intro:'Alles zum Arbeitsblatt <b>Test 115</b>: Subjekt finden, Prädikat mit <b>Hilfsverb</b> und <b>Vollverb</b>, die feste Reihenfolge <b>S → P → O → Ort → Zeit</b>, Person vor Sache und der englische <b>Nebensatz</b>.'};
window.CHAPTERS=[
/* 1 – Subjekt */
{id:'subjekt',kind:'Regel',icon:'👤',title:'Das Subjekt: Wer oder was?',sub:'Wer tut etwas? – das Subjekt steht vor dem Verb',lv:1,
html:card('So findest du das Subjekt','🔎',`${GV.predLeg()}${GV.pred('My little sister/s|plays/m|the piano./r')}<p class="legend">Frage: <b>Wer oder was</b> spielt? → <b>My little sister</b>. Begleiter wie <i>my, our, the, Ms</i> gehören dazu.</p>`),
ex:[
 mc('Was ist das Subjekt? <b>The dog eats a bone.</b>',['The dog','eats','a bone','The dog eats'],'🐶 Wer frisst? → <b>The dog</b>. Das Subjekt steht vor dem Verb.',{lv:1}),
 mc('Was ist das Subjekt? <b>We want pizza.</b>',['We','want','pizza','want pizza'],'🍕 Frag: <i>Wer</i> will etwas? Die Antwort ist das Subjekt → <b>We</b>.',{lv:1}),
 tap('Tippe das ganze <b>Subjekt</b> an.','Mr Brown reads the newspaper.',[0,1],'👨 Wer liest? → <b>Mr Brown</b> – Mr gehört zum Namen.',{lv:1}),
 tap('Tippe das ganze <b>Subjekt</b> an.','She is very tired.',[0],'👧 Frag: <i>Wer</i> ist müde? Die Antwort ist das Subjekt → <b>She</b>.',{lv:1}),
 tap('Tippe das ganze <b>Subjekt</b> an.','My little sister plays the piano.',[0,1,2],'👧 Wer spielt? → <b>My little sister</b> – drei Wörter.',{lv:2}),
 tap('Tippe das ganze <b>Subjekt</b> an.','Our teacher can help us.',[0,1],'👩‍🏫 Wer kann helfen? → <b>Our teacher</b>.',{lv:2}),
 tap('Tippe das ganze <b>Subjekt</b> an.','Dogs love long walks.',[0],'🐕 Wer liebt? → <b>Dogs</b> (mehrere Hunde allgemein).',{lv:2}),
 seg('Subjekt oder nicht?',['Subjekt','kein Subjekt'],[['<b>Ben</b> gives Lily a present.','Subjekt'],['Ben gives <b>Lily</b> a present.','kein Subjekt'],['Ben gives Lily <b>a present</b>.','kein Subjekt'],['<b>The children</b> are happy.','Subjekt']],'🔎 Subjekt = wer etwas <b>tut</b>. Lily bekommt nur etwas (Objekt).',{lv:3}),
]},
/* 2 – Prädikat */
{id:'praedikat',kind:'Regel',icon:'⚙️',title:'Das Prädikat: Hilfsverb + Vollverb',sub:'gestrichelt = Hilfsverb · durchgezogen = Vollverb',lv:1,
html:card('Hilfsverben','🧰','<table class="t"><tr><th>Hilfsverb (gestrichelt)</th><th>Bedeutung</th></tr><tr><td><b>can</b> · can’t</td><td>kann · kann nicht</td></tr><tr><td><b>must</b></td><td>muss</td></tr><tr><td><b>will</b> · won’t</td><td>wird · wird nicht</td></tr><tr><td><b>am / is / are</b> (going to)</td><td>Zukunft: going to</td></tr><tr><td><b>do / does / don’t / doesn’t</b></td><td>Fragen und Verneinung</td></tr></table><p class="legend">Das <b>Vollverb</b> sagt, was jemand <b>tut</b>: swim, help, give, play … Steht nur <b>ein</b> Verb da (gives, want, is), ist es das Vollverb.</p>'),
ex:[
 seg('Hilfsverb oder Vollverb?',['Hilfsverb','Vollverb'],[['We <b>can</b> swim.','Hilfsverb'],['We can <b>swim</b>.','Vollverb'],['She <b>won’t</b> come.','Hilfsverb'],['She won’t <b>come</b>.','Vollverb']],'🧰 can / won’t helfen nur · 🏃 swim / come = das Tun.',{lv:1}),
 mc('Was ist das <b>Vollverb</b>? <b>Tom must clean his room.</b>',['clean','must','Tom','room'],'🧹 Was tut Tom? → <b>clean</b>. must ist das Hilfsverb.',{lv:1}),
 mc('Was ist das <b>Hilfsverb</b>? <b>They will visit us.</b>',['will','visit','They','us'],'🧰 <b>will</b> hilft (Zukunft) · visit = Vollverb.',{lv:1}),
 seg('Hilfsverb oder Vollverb?',['Hilfsverb','Vollverb'],[['Dad <b>is</b> going to cook.','Hilfsverb'],['Dad is going to <b>cook</b>.','Vollverb'],['Mia <b>plays</b> tennis.','Vollverb'],['I <b>don’t</b> like fish.','Hilfsverb']],'🧰 is (going to) / don’t helfen · 🏃 cook / plays / like = Vollverb. Ein einzelnes Verb (plays) ist das Vollverb.',{lv:2}),
 tap('Tippe das ganze <b>Prädikat</b> an (Hilfsverb + Vollverb).','Lily can ride a horse.',[1,2],'⚙️ <b>can ride</b> = Hilfsverb + Vollverb.',{lv:2}),
 tap('Tippe das ganze <b>Prädikat</b> an.','My parents won’t buy a dog.',[2,3],'⚙️ <b>won’t buy</b> = Hilfsverb + Vollverb.',{lv:2}),
 tap('Tippe nur das <b>Vollverb</b> an.','You must tidy your desk.',[2],'🧹 Was tust du? → <b>tidy</b> (durchgezogen).',{lv:3}),
 tap('Tippe nur das <b>Hilfsverb</b> an.','Ben will help his grandma.',[1],'🧰 <b>will</b> hilft nur (gestrichelt) · help = Vollverb.',{lv:3}),
]},
/* 3 – Satzbau S-P-O-Ort-Zeit */
{id:'satzbau',kind:'Regel',icon:'🚂',title:'Der Satz-Zug: S → P → O → Ort → Zeit',sub:'Person vor Sache · Wo vor Wann',lv:2,
html:merk('🚂 Feste Reihenfolge',`${V.train('Ben/s|plays/v|football/o|in the park/w|on Sundays./t',{labels:true})}<p>Subjekt → Prädikat → Objekt → <b>Ort</b> (wo?) → <b>Zeit</b> (wann?)</p>`,'blue'),
ex:[
 mc('Welcher Satz hat die richtige Reihenfolge?',['Ben plays football in the park.','Ben football plays in the park.','Plays Ben football in the park.','In the park plays Ben football.'],'🚂 Subjekt (Ben) → Prädikat (plays) → Objekt (football) → Ort.',{fr:true,lv:1}),
 seg('Ort oder Zeit?',['Ort','Zeit'],[['in the park','Ort'],['on Sundays','Zeit'],['at school','Ort'],['tomorrow','Zeit']],'📍 wo? → Ort · ⏰ wann? → Zeit.',{lv:1}),
 mc('Was steht zuerst: Ort oder Zeit? <b>We have lunch … .</b>',['at school at 12 o’clock','at 12 o’clock at school'],'📍 Wo vor ⏰ Wann: at school at 12 o’clock.',{lv:1}),
 ord('Bilde den Satz.',['Mia','reads','a book','in bed','every evening','.'],'🚂 Mia → reads → a book → in bed (Ort) → every evening (Zeit).',[],{lv:2}),
 ord('Bilde den Satz (Person vor Sache).',['Mum','gives','me','an apple','.'],'👤 Person (me) vor 🍎 Sache (an apple).',[],{lv:2}),
 ord('Bilde den Satz.',['Our coach','won’t','give','us','a break','today','.'],'👤 give + us (Person) + a break (Sache) + today (Zeit).',[],{lv:2}),
 ord('Bilde den Satz.',['The kids','can','play','in the garden','after lunch','.'],'🚂 S → can play → Ort → Zeit.',['After lunch the kids can play in the garden.'],{lv:3}),
 wr('Übersetze: <b>Tom spielt am Samstag im Park Fußball.</b>',B('Tom plays football in the park on {Saturday|Saturdays}.','On {Saturday|Saturdays} Tom plays football in the park.'),'🚂 Tom plays football (O) in the park (Ort) on Saturday (Zeit).',{lv:3}),
]},
/* 4 – Nebensatz */
{id:'nebensatz',kind:'Regel',icon:'🔗',title:'Der Nebensatz: because, when, if, that',sub:'Anders als im Deutschen: Das Verb bleibt beim Subjekt',lv:2,
html:card('Bindewörter für Nebensätze','🔗','<table class="t"><tr><td><b>because</b></td><td>weil</td></tr><tr><td><b>when</b></td><td>wenn / als</td></tr><tr><td><b>if</b></td><td>falls / wenn</td></tr><tr><td><b>that</b></td><td>dass</td></tr></table>'+GV.neben()),
ex:[
 mc('Welcher Nebensatz ist richtig?',['… because I am tired.','… because I tired am.','… because am I tired.'],'🧷 Im Englischen bleibt <b>I am</b> zusammen – das Verb rutscht nicht ans Ende.',{fr:true,lv:1}),
 mc('Welcher Satz ist richtig?',['I think that Ben is right.','I think that Ben right is.','I think that is Ben right.'],'🔗 that + Ben (S) + is (P) + right.',{fr:true,lv:1}),
 seg('Richtig oder falsch gebaut?',['richtig','falsch'],[['We stay inside when it rains.','richtig'],['We stay inside when it rains not.','falsch'],['She is happy because her friends are here.','richtig'],['She is happy because her friends here are.','falsch']],'🧷 Nebensatz: Bindewort → Subjekt → Prädikat → Rest.',{lv:2}),
 ord('Bilde den Satz.',['I’m','hungry','because','I','didn’t','have','breakfast','.'],'🔗 because + I (S) + didn’t have (P) + breakfast.',[],{lv:2}),
 ord('Bilde den Satz.',['When','Dad','comes','home',',','we','eat','dinner','.'],'🔗 When + Dad (S) + comes (P) … , we eat dinner.',['We eat dinner when Dad comes home.'],{lv:2}),
 det('Finde den Fehler.','I can’t come because I [homework must do|must do homework].','🧷 Kein deutsches Verb-am-Ende: because I <b>must do</b> homework.',{lv:3}),
 wr('Übersetze: <b>Ich bleibe zu Hause, weil ich krank bin.</b>',B('{I’m|I am} staying at home because {I’m|I am} ill.','I stay at home because {I’m|I am} {ill|sick}.','{I’m|I am} staying at home because {I’m|I am} sick.','{I’m|I am} staying home because {I’m|I am} {ill|sick}.','I stay home because {I’m|I am} {ill|sick}.'),'🔗 because + I + am + ill – Subjekt und Verb bleiben zusammen.',{lv:3}),
 wr('Übersetze: <b>Wenn es regnet, spielen wir drinnen.</b>',B('When it rains{,|} we play inside.','We play inside when it rains.','If it rains{,|} we play inside.','We play inside if it rains.','When it rains{,|} we play indoors.','We play indoors when it rains.'),'🔗 When + it (S) + rains (P), we play inside.',{lv:3}),
]},
/* 5 – Regeln im Check */
{id:'regeln',kind:'Regel',icon:'📏',title:'Die Regeln im Check: true or false?',sub:'Deutsch und Englisch im Vergleich',lv:2,
html:tip('Im Deutschen steht das Verb im Aussagesatz an <b>Platz 2</b> – sogar vor dem Subjekt („Morgen <b>spiele</b> ich …“). Im Englischen steht das <b>Subjekt immer vor dem Prädikat</b>: Tomorrow <b>I play</b> …','🇩🇪🇬🇧'),
ex:[
 mc('Welcher Satz ist richtig?',['Tomorrow I am going to visit Ben.','Tomorrow am I going to visit Ben.','Tomorrow going to I am visit Ben.'],'🇬🇧 Auch nach einer Zeitangabe vorne: <b>Subjekt → Prädikat</b>: Tomorrow I am going …',{fr:true,lv:1}),
 mc('Welcher Satz ist richtig?',['On Sundays we sleep late.','On Sundays sleep we late.','On Sundays late we sleep.'],'🇬🇧 On Sundays + <b>we</b> (S) + <b>sleep</b> (P).',{fr:true,lv:1}),
 tf('Stimmt das?',[['In an English statement the subject comes before the verb.',true],['The object usually comes before the verb.',false],['Place (wo?) usually comes before time (wann?).',true],['In a subordinate clause (because …) the verb moves to the end.',false],['A time phrase can stand at the very beginning or at the very end.',true]],'🚂 S → P → O → Ort → Zeit – auch im Nebensatz. Zeit: ganz vorne oder ganz hinten.',{lv:2}),
 det('Finde den Fehler.','Today [play we|we play] basketball in the gym.','🇬🇧 Nach Today kein Platztausch: Today <b>we play</b> …',{lv:2}),
 det('Finde die zwei Fehler.','Next week [goes Lily|Lily goes] to Spain because her aunt [there lives|lives there].','🇬🇧 Next week <b>Lily goes</b> · because her aunt <b>lives there</b>.',{lv:3}),
]},
/* 6 – Training leicht */
{id:'w-training1',kind:'Training ★',icon:'🌱',title:'Training ★: finden & erkennen',sub:'Subjekt · Hilfsverb · Vollverb',lv:1,
html:GV.predLeg()+GV.pred('Our teacher/s|can/a|give/m|us a good tip./r'),
ex:[
 tap('Tippe das ganze <b>Subjekt</b> an.','The old man feeds the birds.',[0,1,2],'👴 Wer füttert? → <b>The old man</b>.',{lv:1}),
 tap('Tippe das ganze <b>Subjekt</b> an.','Jack and Ruby are best friends.',[0,1,2],'👦👧 Wer sind Freunde? → <b>Jack and Ruby</b>.',{lv:1}),
 tap('Tippe das <b>Hilfsverb</b> an.','I must go to the dentist.',[1],'🧰 <b>must</b> hilft · go = Vollverb.',{lv:1}),
 tap('Tippe das <b>Vollverb</b> an.','The kids will build a snowman.',[3],'⛄ Was tun sie? → <b>build</b> · will = Hilfsverb.',{lv:1}),
 seg('Subjekt, Hilfsverb oder Vollverb?',['Subjekt','Hilfsverb','Vollverb'],[['<b>Sam</b> can dance.','Subjekt'],['Sam <b>can</b> dance.','Hilfsverb'],['Sam can <b>dance</b>.','Vollverb']],'👤 wer → Subjekt · 🧰 can → Hilfsverb · 💃 dance → Vollverb.',{lv:1}),
 mc('Welcher Satz hat die richtige Reihenfolge?',['Emma drinks milk every morning.','Emma every morning drinks milk.','Every morning drinks Emma milk.'],'🚂 Der Satz-Zug fährt immer gleich: Subjekt → Prädikat → Objekt → <b>Zeit am Ende</b>.',{fr:true,lv:1}),
]},
/* 7 – Training mittel */
{id:'w-training2',kind:'Training ★★',icon:'🌿',title:'Training ★★: Sätze ordnen',sub:'Satzpuzzle mit Objekt, Ort und Zeit',lv:2,
html:tip('Lege zuerst <b>Wer?</b> und das <b>Prädikat</b>. Dann: wen / was? → wo? → wann?','🚂'),
ex:[
 ord('Bilde den Satz.',['Max','can','run','very fast','.'],'🏃 Max (S) + can run (P) + very fast.',[],{lv:2}),
 ord('Bilde den Satz.',['Grandma','tells','us','a story','.'],'👤 tells + us (Person) + a story (Sache).',[],{lv:2}),
 ord('Bilde den Satz.',['We','are going to','meet','our friends','at the cinema','tonight','.'],'🚂 S → P → O → Ort (at the cinema) → Zeit (tonight).',['Tonight we are going to meet our friends at the cinema.'],{lv:2}),
 ord('Bilde den Satz.',['The dog','plays','with its ball','in the garden','.'],'🐶 The dog (S) + plays (P) + with its ball + in the garden.',[],{lv:2}),
 ord('Bilde den Satz.',['Mr Green','won’t','show','us','the film','.'],'👤 won’t show + us + the film.',[],{lv:2}),
 ord('Bilde den Satz.',['I','can’t','play','because','I','am','ill','.'],'🔗 because + I + am + ill.',[],{lv:3}),
]},
/* 8 – Training schwer */
{id:'w-training3',kind:'Training ★★★',icon:'🌳',title:'Training ★★★: Bausteine-Kasten & Übersetzen',sub:'Wie Test 115 · Ex. 3 – mit eigenen Sätzen',lv:3,
html:tip('Im Kasten sind Bausteine aus <b>drei</b> Sätzen gemischt. Suche für jeden Satz: Subjekt → Prädikat → Rest. Verbform anpassen, wenn nötig (he / she / it → <b>-s</b>).','🧺'),
ex:[
 wr('Baue aus dem Kasten den Satz mit <b>Lily</b>.',B('Lily can ride a horse very well.'),'🐴 Lily (S) + can ride (P) + a horse (O) + very well.',{lv:3,img:BOX('Bausteine-Kasten',['Lily','sleeps','the baby','can','in its cot','ride','my dad','a horse','will','very well','cook','pizza tonight'])}),
 wr('Baue aus dem Kasten den Satz mit <b>my dad</b>.',B('My dad will cook pizza tonight.'),'🍕 My dad (S) + will cook (P) + pizza + tonight.',{lv:3,img:BOX('Bausteine-Kasten',['Lily','sleeps','the baby','can','in its cot','ride','my dad','a horse','will','very well','cook','pizza tonight'])}),
 wr('Baue aus dem Kasten den Satz mit <b>the baby</b>.',B('The baby sleeps in its cot.'),'👶 The baby (S) + sleeps (P) + in its cot (Ort).',{lv:3,img:BOX('Bausteine-Kasten',['Lily','sleeps','the baby','can','in its cot','ride','my dad','a horse','will','very well','cook','pizza tonight'])}),
 wr('Übersetze: <b>Heute Abend sehen wir einen Film.</b>',B('Tonight we{’re going to| are going to|} watch a film.','We{’re going to| are going to|} watch a film tonight.','Tonight we{’re going to| are going to|} see a film.','We{’re going to| are going to|} see a film tonight.','{This evening|Tonight} we{’re going to| are going to|} watch a {film|movie}.','We{’re going to| are going to|} watch a {film|movie} {this evening|tonight}.'),'🇬🇧 kein Platztausch: Tonight <b>we watch</b> … (oder: We watch a film tonight.)',{lv:3}),
 wr('Übersetze: <b>Mein Bruder gibt mir sein Fahrrad.</b>',B('My brother gives me his bike.','My brother gives me his bicycle.','My brother gives his bike to me.'),'👤 gives + me (Person) + his bike (Sache).',{lv:3}),
 wr('Übersetze: <b>Ich weiß, dass du müde bist.</b>',B('I know {that |}{you are|you’re} tired.'),'🔗 that + you (S) + are (P) + tired – nicht <s>that you tired are</s>.',{lv:3}),
]},
/* 9 – Hören & Aussprache */
{id:'w-hoeren',kind:'Hören & Aussprache',icon:'🎧',title:'Hören & Aussprache',sub:'Satzteile heraushören · Nebensätze verstehen',lv:2,
html:hoer(`<p>Englische Sätze haben eine Melodie: Die wichtigen Wörter (<b>Subjekt</b>, <b>Vollverb</b>, <b>Objekt</b>) werden betont, kleine Wörter wie <i>a, the, to, can</i> sind leise.</p><p>${F('Janet can swim very fast.')} – betont: JAnet · SWIM · FAST</p><p>${F('because')} spricht man „bi-KOS“.</p>`),
ex:[
 mc('Hör zu: Wer tut etwas? (Subjekt)',['the little boy','the ball','the window','the garden'],'👦 «The little boy kicks the ball.» – wer kickt? → the little boy.',{au:'The little boy kicks the ball.',lv:1}),
 mc('Hör zu: Welches Hilfsverb hörst du?',['can’t','can','must','will'],'🧰 «can’t» – mit t am Ende: kann nicht.',{au:'I can’t find my keys.',say:false,lv:1}),
 mc('Hör zu: Welcher Satz ist es?',['I’m late because the bus is slow.','I’m late because slow is the bus.'],'🔗 because + the bus (S) + is (P) + slow.',{au:'I’m late because the bus is slow.',say:false,lv:1}),
 gapw('Hör zu und ergänze.','We play {0} in the park {1}.',[['football'],['on Sundays']],'🚂 Hinter dem Verb kommt erst das Objekt, dann der <b>Ort</b>, ganz hinten die <b>Zeit</b>.',{au:'We play football in the park on Sundays.',lv:2}),
 gapw('Hör zu und ergänze.','Our teacher {0} give us any homework.',[['won’t',"won't"]],'🧰 won’t ist die Kurzform von <b>will not</b> – ein Hilfsverb mit Verneinung, das Vollverb folgt danach.',{au:'Our teacher won’t give us any homework.',lv:2}),
 gapw('Hör zu und ergänze.','I’m happy because my {0} {1} here.',[['friends'],['are']],'🔗 because my friends <b>are</b> here – Verb nach dem Subjekt.',{au:'I’m happy because my friends are here.',lv:2}),
]},
];
window.TEST_EX=[
 tap('Tippe das ganze <b>Subjekt</b> an.','My best friend lives in London.',[0,1,2],'👤 Wer wohnt? → My best friend.',{ref:'subjekt',tag:'Subjekt'}),
 tap('Tippe das <b>Hilfsverb</b> an.','We will win the match.',[1],'🧰 <b>will</b> hilft nur (gestrichelt) – die eigentliche Tätigkeit ist das Vollverb danach (durchgezogen).',{ref:'praedikat',tag:'Hilfsverb'}),
 seg('Hilfsverb oder Vollverb?',['Hilfsverb','Vollverb'],[['She <b>must</b> stay.','Hilfsverb'],['She must <b>stay</b>.','Vollverb']],'🧰 must hilft · stay = Tun.',{ref:'praedikat',tag:'Prädikat'}),
 ord('Bilde den Satz.',['Ruby','visits','her grandma','in Leeds','every summer','.'],'🚂 S → P → O → Ort → Zeit.',[],{ref:'satzbau',tag:'S-P-O-Ort-Zeit'}),
 ord('Bilde den Satz.',['Dad','buys','us','ice cream','.'],'👤 Bekommt jemand etwas, kommt die <b>Person zuerst</b>, dann die Sache: give <b>us</b> homework.',[],{ref:'satzbau',tag:'Person vor Sache'}),
 mc('Welcher Satz ist richtig?',['I’m sad because it is raining.','I’m sad because it raining is.','I’m sad because is it raining.'],'🔗 because + it + is raining.',{fr:true,ref:'nebensatz',tag:'Nebensatz'}),
 tf('Stimmt das?',[['Time phrases usually stand at the very end of the sentence.',true],['In English statements the verb can come before the subject.',false]],'🚂 Zeit am Ende (oder ganz vorne) · Subjekt vor Verb.',{ref:'regeln',tag:'Regeln'}),
 det('Finde den Fehler.','After school [watch I|I watch] TV.','🇬🇧 After school <b>I watch</b> TV.',{ref:'regeln',tag:'kein Platztausch'}),
 wr('Übersetze: <b>Wir spielen morgen im Garten.</b>',B('We{’re going to| are going to|} play in the garden tomorrow.','Tomorrow we{’re going to| are going to|} play in the garden.'),'🚂 Ort (in the garden) vor Zeit (tomorrow).',{ref:'satzbau',tag:'Übersetzen'}),
];
H.setRun({subjekt:5,praedikat:6,satzbau:6,nebensatz:6,regeln:4,'w-training1':5,'w-training2':5,'w-training3':5,'w-hoeren':5},{subjekt:[2],praedikat:[0],satzbau:[4],nebensatz:[0,5],regeln:[2],test:[3,5]});
H.setIntro({
_lesson:{tab:'',vis:V.train('Ben/s|plays/v|football/o|in the park/w|on Sundays./t',{labels:true}),
 was:'Englische Sätze sind wie ein <b>Zug</b> mit fester Wagen-Reihenfolge.',
 warum:'Genau das kommt in Test 115: Subjekt unterstreichen, Prädikat markieren, Sätze bauen, Regeln prüfen.',
 schritte:[[V.b('Subjekt','s'),'Wer?'],[V.b('Prädikat','v'),'Hilfsverb + Vollverb'],[V.b('Objekt','o'),'wen / was?'],[V.b('Ort · Zeit','w'),'wo? → wann?']],
 merk:'S → P → O → Ort → Zeit – auch im Nebensatz',
 fallen:[['… because I tired am.','… because I am tired.','🧷 Das Verb rutscht nicht ans Ende.']]},
subjekt:{h:'👤 Das Subjekt',rule:'Subjekt = Wer oder was tut etwas? Es steht vor dem Prädikat.',t:'Das Subjekt',
 vis:GV.pred('Ms Taylor/s|gives/m|her son a sandwich./r'),
 was:'Das <b>Subjekt</b> ist der Satzteil, der etwas <b>tut</b> (oder ist). Es kann ein Wort sein (<i>He</i>, <i>Children</i>) oder mehrere (<i>Ms Taylor</i>, <i>My little sister</i>).',
 warum:'Ohne Subjekt kein englischer Satz. Und: Es steht im Aussagesatz <b>immer vor</b> dem Verb.',
 schritte:[[V.b('gives','v'),'Verb suchen'],[E('❓'),'fragen: Wer oder was gibt?'],[V.b('Ms Taylor','s'),'Antwort = Subjekt – mit allen Begleitern (Ms, my, the …)']],
 bsp:[['Ms Taylor gives her son a sandwich.','Ms Taylor = Subjekt'],['Children want tasty food.','Children = Subjekt','',E('🧒')],['My little sister plays the piano.','My little sister = Subjekt','',E('🎹')]],
 merk:'Subjekt = Wer oder was? – steht vor dem Prädikat',
 fallen:[['Subjekt nur: Taylor','Ms Taylor gives her son a sandwich.','👩 <b>Ms</b> gehört zum Namen – das Subjekt ist <b>Ms Taylor</b>.'],['Subjekt: her son','Ms Taylor gives her son a sandwich.','🎁 Wer gibt? <b>Ms Taylor</b> – her son bekommt nur etwas.']]},
praedikat:{h:'⚙️ Das Prädikat',rule:'Prädikat = Hilfsverb (gestrichelt) + Vollverb (durchgezogen)',t:'Das Prädikat',
 vis:GV.predLeg()+GV.pred('Tom/s|must/a|clean/m|his room today./r'),
 was:'Das <b>Prädikat</b> ist der Verb-Teil. Oft hat es zwei Teile: ein <b>Hilfsverb</b> (can, must, will, won’t, am / is / are …) und ein <b>Vollverb</b> (clean, swim, give …).',
 warumVis:'<div class="aset">'+V.b('must','a',{lbl:'Hilfsverb'})+V.b('clean','m',{lbl:'Vollverb'})+'</div>',
 warum:'Das Hilfsverb „hilft“ nur (kann, muss, wird). Was wirklich <b>getan</b> wird, sagt das Vollverb.',
 schritte:[[V.b('Tom','s'),'Subjekt finden'],[V.b('must','a'),'Hilfsverb gestrichelt: can, must, will, won’t, am / is / are, do / does'],[V.b('clean','m'),'Vollverb durchgezogen: das Tun'],[V.b('gives','m'),'nur ein Verb? → es ist das Vollverb']],
 bsp:[['We can swim very fast.','can = Hilfsverb · swim = Vollverb','',E('🏊')],['She won’t eat the soup.','won’t = Hilfsverb · eat = Vollverb','',E('🥣')],['They are going to play football.','are (going to) = Hilfsverb · play = Vollverb','',E('⚽')]],
 merk:'Hilfsverb (gestrichelt) + Vollverb (durchgezogen) = Prädikat',
 fallen:[['will = Vollverb','I will help you.','🧰 will (Hilfsverb, gestrichelt) zeigt nur die Zukunft – das Tun ist <b>help</b> (Vollverb).'],['Prädikat: nur must','Layla must do her homework.','⚙️ Beide Teile – Hilfsverb <b>must</b> und Vollverb <b>do</b> – gehören zum Prädikat.']]},
satzbau:{h:'🚂 Der Satz-Zug',rule:'S → P → O → Ort → Zeit · Person vor Sache · Wo vor Wann',t:'Der Satz-Zug',
 vis:V.train('Ben/s|plays/v|football/o|in the park/w|on Sundays./t',{labels:true}),
 was:'Im englischen Aussagesatz ist die Reihenfolge fest: <b>Subjekt → Prädikat → Objekt → Ort → Zeit</b>.',
 warumVis:GV.de('Am Sonntag <b>spielt</b> Ben im Park Fußball.','Ben <b>plays</b> football in the park on Sundays.','🇩🇪 vieles darf nach vorne · 🇬🇧 fester Zug'),
 warum:'Im Deutschen darf vieles nach vorne rutschen. Im Englischen bleiben <b>Subjekt und Prädikat</b> zusammen – Objekt, Ort und Zeit kommen <b>danach</b>.',
 schritte:[[V.b('Ben','s'),'Subjekt: Wer?'],[V.b('plays','v'),'Prädikat'],[V.b('football','o'),'Objekt: wen / was?'],[V.b('in the park','w'),'Ort: wo?'],[V.b('on Sundays','t'),'Zeit: wann? (oder ganz vorne)']],
 bsp:[['Ben plays football in the park on Sundays.','Ben spielt sonntags im Park Fußball.','',E('⚽')],['We have lunch at school at 12 o’clock.','Wir essen um 12 Uhr in der Schule zu Mittag.','',E('🍽️')]],
 merk:'S → P → O → Ort → Zeit (Wo vor Wann)',
 fallen:[['Ben football plays.','Ben plays football.','🚂 Objekt <b>nach</b> dem Prädikat.'],['We play on Sundays in the park.','We play in the park on Sundays.','📍 Wo vor ⏰ Wann.']],
 parts:[{h:'👤 Person vor Sache',vis:V.train('Our teacher/s|won’t give/v|us/o|any homework./o'),
   was:'Bei Verben wie <b>give, show, tell, buy</b> gibt es zwei Objekte. Erst die <b>Person</b>, dann die <b>Sache</b>.',
   schritte:[[V.b('won’t give','v'),'Prädikat'],[V.b('us','o'),'wem? – Person'],[V.b('any homework','o'),'was? – Sache']],
   bsp:[['Mum gives me an apple.','Mama gibt mir einen Apfel.','',E('🍎')],['Grandma tells us a story.','Oma erzählt uns eine Geschichte.','',E('📖')]],
   fallen:[['Mum gives an apple me.','Mum gives me an apple.','👤 Person vor 🍎 Sache.']]},
  {h:'⏰ Zeit ganz vorne?',vis:V.train('After school/t|we/s|play/v|football/o|in the park./w'),
   was:'Die Zeit darf auch <b>ganz vorne</b> stehen. Dann kommt trotzdem sofort das <b>Subjekt</b> und dann das Prädikat.',
   schritte:[[V.b('After school','t'),'Zeit vorne'],[V.b('we','s'),'Subjekt'],[V.b('play','v'),'Prädikat']],
   fallen:[['After school play we football.','After school we play football.','🇬🇧 kein Platztausch wie im Deutschen.']]}]},
nebensatz:{h:'🔗 Der Nebensatz',rule:'Auch im Nebensatz: Subjekt → Prädikat (das Verb rutscht NICHT ans Ende).',t:'Der Nebensatz',
 vis:GV.neben(),
 was:'Nebensätze beginnen mit <b>because</b> (weil), <b>when</b> (wenn / als), <b>if</b> (falls) oder <b>that</b> (dass). Auch dort gilt: <b>Subjekt → Prädikat</b>.',
 warum:'Im Deutschen rutscht das Verb im Nebensatz ans Ende („weil ich müde <b>bin</b>“). Im Englischen nicht – das ist der typische Fehler!',
 schritte:[[V.b('because','x'),'Bindewort'],[V.b('I','s'),'Subjekt'],[V.b('am','v'),'Prädikat – gleich danach'],[V.b('tired','r'),'Rest']],
 bsp:[['I’m happy because my friends are here.','Ich bin froh, weil meine Freunde da sind.','',E('🥳')],['When it rains, we stay inside.','Wenn es regnet, bleiben wir drinnen.','',E('🌧️')],['I think that Ben is right.','Ich glaube, dass Ben recht hat.']],
 merk:'Nebensatz: Bindewort → Subjekt → Prädikat → Rest',
 fallen:[['… because I tired am.','… because I am tired.','🧷 Verb nicht ans Ende.'],['… when comes Dad home.','… when Dad comes home.','👤 Subjekt vor Verb.']]},
regeln:{h:'📏 Die Regeln im Check',rule:'S vor P – immer · O, Ort, Zeit danach · Zeit: ganz hinten oder ganz vorne',t:'Regeln im Check',
 vis:GV.de('Morgen <b>spiele</b> ich Fußball.','Tomorrow <b>I play</b> football.','🇩🇪 Verb an Platz 2 · 🇬🇧 Subjekt vor Verb'),
 was:'Hier prüfst du Regel-Sätze: Stimmen sie (<b>true</b>) oder nicht (<b>false</b>)?',
 warum:'In Test 115 sollst du solche Regeln bewerten – dafür musst du die Regeln wirklich verstanden haben.',
 schritte:[[E('📖'),'Regel genau lesen'],[E('🧪'),'mit einem Beispielsatz testen'],[E('✅'),'true oder false']],
 bsp:[['Tomorrow I play football.','Subjekt vor Verb – auch nach Tomorrow'],['We play in the park on Sundays.','Ort vor Zeit, beides nach dem Prädikat']],
 merk:'Subjekt vor Prädikat – immer, auch im Nebensatz',
 fallen:[['Tomorrow play I football.','Tomorrow I play football.','🇬🇧 kein Platztausch.']]},
'w-training1':{rule:'Subjekt · Hilfsverb · Vollverb finden',t:'Training ★',vis:GV.pred('Sam/s|can/a|dance/m|very well./r'),was:'Erst finden und erkennen.',schritte:[[V.b('Subjekt','s'),'Wer?'],[V.b('Hilfsverb','a'),'gestrichelt'],[V.b('Vollverb','m'),'durchgezogen']],merk:'Subjekt → Hilfsverb → Vollverb',fallen:[['old man feeds the birds (Subjekt nur: old man)','The old man feeds the birds.','👴 Der Begleiter <b>The</b> gehört mit zum Subjekt: <b>The old man</b>.']]},
'w-training2':{rule:'S → P → O → Ort → Zeit · Person vor Sache',t:'Training ★★',vis:V.train('Grandma/s|tells/v|us/o|a story./o'),was:'Satzpuzzle mit Objekt, Ort und Zeit.',schritte:[[V.b('Wer?','s'),'Subjekt'],[V.b('Prädikat','v'),'Prädikat'],[V.b('Rest','o'),'wen/was → wo → wann']],merk:'Person vor Sache · Wo vor Wann',fallen:[['Grandma tells a story us.','Grandma tells us a story.','👤 Bekommt jemand etwas, kommt die <b>Person zuerst</b>, dann die Sache: give <b>us</b> homework.']]},
'w-training3':{rule:'Bausteine-Kasten: für jeden Satz Subjekt → Prädikat → Rest',t:'Training ★★★',vis:'',was:'Bausteine aus drei Sätzen sind gemischt – wie in Test 115.',schritte:[[E('👤'),'Subjekte suchen'],[E('⚙️'),'passendes Prädikat'],[E('🧩'),'Rest dazu']],merk:'S → P → O → Ort → Zeit',fallen:[['The baby in its cot sleeps.','The baby sleeps in its cot.','🚂 Prädikat direkt nach dem Subjekt.']]},
'w-hoeren':{rule:'Betonte Wörter: Subjekt, Vollverb, Objekt',t:'Hören & Aussprache',vis:'<div class="aset">'+V.b('JAnet','s')+V.b('can SWIM','v')+V.b('very FAST','r')+'</div>',was:'Hören, verstehen und nachsprechen.',warum:'Wer die Satzteile hört, baut sie auch richtig.',schritte:[[E('🔊'),'anhören'],[E('👂'),'Wer? Was tut er?'],[E('🗣️'),'nachsprechen']],merk:'Hören → erkennen → nachsprechen',fallen:[['… because the bus slow is.','… because the bus is slow.','🔗 Subjekt → Verb.']]}
});

})();
window.HUBCAP("en-wortstellung");
(function(){
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

})();
window.HUBCAP("en-originale");
(function(){var W=window,ALL=[],TR={};W.HUB_WRITERS={};W.HUB_ORDER.forEach(function(slug){var h=W.HUBL[slug];Object.assign(TR,h.TR);Object.assign(W.HUB_WRITERS,h.WR);
 var tag=function(e){e._slug=slug;e._L=h.L;if(e.ref)e.ref=slug+':'+e.ref;};
 h.C.forEach(function(c){c.lid=c.id;c.id=slug+':'+c.id;c.slug=slug;c.c=c.c||h.L.color;c.ex.forEach(tag);ALL.push(c);});
 h.T.forEach(tag);ALL.push({id:slug+':test',lid:'test',slug:slug,title:'Abschlusstest · '+h.L.title,icon:'🏆',c:'#c8102e',lv:3,extra:true,noTest:true,take:0,ex:h.T});});
 W.LESSON={slug:'en-training',title:'Training',fr:'',icon:'🎯',color:'#0f766e',merk:'',intro:''};W.CHAPTERS=ALL;W.TRACKS=TR;W.TEST_EX=[];})();
