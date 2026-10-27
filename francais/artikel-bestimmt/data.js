/* Lektion: Der bestimmte Artikel le, la, l', les */
const {F,G,conj,dlg,merk,attn,tip,hoer,card,reveal,tabs,track,steps,grp,ob,room,spk,spkLines}=H;
const {mc,pick,gap,gapw,ord,wr,mt,dl,clk,mark,mul,seg,tf,det}=X;
window.LESSON={slug:'artikel-bestimmt',title:'Der bestimmte Artikel',fr:'le · la · l’ · les',icon:'🏷️',color:'#0d9488',testN:18,
 intro:'Im Französischen ist jedes Nomen <b>männlich</b> oder <b>weiblich</b>. Das zeigt dir der Artikel: <b class="c-m">le</b> lit, <b class="c-f">la</b> chaise, <b>l’</b>armoire, <b class="c-p">les</b> posters. Hier lernst du, wann du welchen Artikel nimmst – mit Bildern und Farben (Hörübungen kommen am Ende im Teil „Hörverstehen“).'};
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
/* Nachholbedarf: Geschlecht der Nomen – alle Nomen der Vokabelliste bis „le globe“ (Unité 1 Volet 1 – Unité 2 Volet 1) */
const GN=(()=>{const O=k=>ob(k),E=t=>`<span class="gl-em">${t}</span>`;
 // [Wort, Geschlecht, Deutsch, Bild, Extras]  dt = deutscher Artikel (für die Begründung), warn = Arjens Stolperstein
 const n=(w,g,de,ic,x={})=>Object.assign({w,g,de,ic},x);
 const M=[n('français','m','Französisch (Fach)',E('🇫🇷'),{dt:''}),n('garçon','m','der Junge',E('👦')),n('crayon de couleur','m','der Buntstift',O('crayoncouleur')),n('crayon','m','der Bleistift',O('crayon')),
  n('stylo','m','der Kugelschreiber',O('stylo')),n('cahier','m','das Heft',O('cahier'),{warn:1}),n('papier','m','das Papier',O('papier')),n('classeur','m','der Ordner',O('classeur')),
  n('livre','m','das Buch',O('livre')),n('lit','m','das Bett',O('lit')),n('poster','m','das Poster',O('poster')),n('coin musique','m','die Musikecke',E('🎸🎶')),n('coin','m','die Ecke',E('📐')),
  n('CD','m','die CD',O('cd'),{pl:'les CD'}),n('hamac','m','die Hängematte',O('hamac'),{alt:'trotz h: le, nicht l’',why:'<b>le hamac</b> – trotz h kein l’. Das Wort ist <b>männlich</b>: le hamac.'}),n('globe','m','der Globus',O('globe'))];
 const F=[n('classe','f','die Klasse',E('🏫')),n('sixième','f','die 6. Klasse',E('6️⃣')),n('récréation','f','die Pause',E('🔔'),{warn:1}),n('cour','f','der Schulhof',E('⛹️')),
  n('cinquième','f','die 7. Klasse',E('7️⃣')),n('fille','f','das Mädchen',E('👧')),n('règle','f','das Lineal',O('regle')),n('maison','f','das Haus',O('maison')),n('lampe','f','die Lampe',O('lampe')),
  n('minichaîne','f','die Mini-Stereoanlage',O('minichaine')),n('chaise','f','der Stuhl',O('chaise')),n('chambre','f','das Zimmer',E('🛏️')),n('photo','f','das Foto',O('photo')),n('musique','f','die Musik',E('🎵')),
  n('guitare','f','die Gitarre',O('guitare'),{warn:1}),n('table','f','der Tisch',O('table')),n('B.D.','f','der Comic',O('bd'),{pl:'les B.D.',alt:'auch: la bédé'}),n('collection','f','die Sammlung',E('🗂️')),
  n('figurine','f','die Figur',O('figurine')),n('géo','f','Erdkunde',E('🌍'),{dt:'',alt:'= la géographie'}),n('pierre','f','der Stein',O('pierre'))];
 const L=[n('école','f','die Schule',E('🏫')),n('effaceur','m','der Tintenkiller',O('effaceur')),n('armoire','f','der Schrank',O('armoire')),n('étagère','f','das Regal',O('etagere')),n('ordinateur','m','der Computer',O('ordinateur'))].map(x=>Object.assign(x,{k:'mf'}));
 const P=[n('professeur','m','der Lehrer',E('👨‍🏫'),{ctx:'Monsieur Martel',why:'Monsieur Martel ist ein Mann → <b>le professeur</b>. Bei einer Frau: <b>la professeur</b>.'}),
  n('professeur','f','die Lehrerin',E('👩‍🏫'),{ctx:'Madame Fournier',why:'Madame Fournier ist eine Frau → <b>la professeur</b>. Bei einem Mann: <b>le professeur</b>.'}),
  n('surveillant','m','die Aufsicht (Mann)',E('🧍‍♂️'),{why:'surveillant <b>ohne -e</b> → männlich: <b>le surveillant</b>.'}),
  n('surveillante','f','die Aufsicht (Frau)',E('🧍‍♀️'),{why:'surveillant<b>e</b> mit <b>-e</b> am Ende → weiblich: <b>la surveillante</b>.'}),
  n('élève','m','der Schüler',E('👦'),{k:'mf',ctx:'Théo',why:'<b>l’élève</b> passt für Jungen und Mädchen. Hier ist es Théo, ein Junge → <b>m.</b>'}),
  n('élève','f','die Schülerin',E('👧'),{k:'mf',ctx:'Clara',why:'<b>l’élève</b> passt für Jungen und Mädchen. Hier ist es Clara, ein Mädchen → <b>f.</b>'}),
  n('ami','m','der Freund',E('👦'),{k:'mf',why:'<b>l’ami</b> ohne -e = der Freund → <b>m.</b> Die Freundin ist l’ami<b>e</b>.'}),
  n('amie','f','die Freundin',E('👧'),{k:'mf',why:'l’ami<b>e</b> mit <b>-e</b> = die Freundin → <b>f.</b>'})].map(x=>Object.assign(x,{per:1}));
 const AR={m:'le',f:'la'},GW={m:'männlich',f:'weiblich'},DT={der:'m',die:'f',das:'n'};
 [...M,...F,...L,...P].forEach(x=>{x.k=x.k||'art';x.say=x.k==='mf'?'l’'+x.w:AR[x.g]+' '+x.w;
  if(x.why)return;const d=x.dt!=null?x.dt:x.de.split(' ')[0],dg=DT[d];const W=x.k==='mf'?`<b>l’${x.w}</b> (${x.g}.)`:`<b>${x.say}</b>`;
  let w=x.k==='mf'?`Bei <b>l’</b> hörst und siehst du das Geschlecht nicht – du musst es mitlernen: ${W} ist ${GW[x.g]}.`:`${x.w} ist ${GW[x.g]} → ${W}.`;
  if(dg&&dg!==x.g)w+=` Deutsch hilft nicht: „<b>${x.de}</b>“${dg==='n'?' – im Französischen gibt es kein „das“':''}.`;else if(dg)w+=` Wie im Deutschen: ${x.de}.`;
  if(x.warn)w=`⚠️ Dein Stolperstein! `+w;x.why=w;});
 return {M,F,L,P,ALL:[...M,...F,...L,...P]};})();
const glRow=x=>`<div class="gl-r g-${x.g}${x.warn?' warn':''}" data-g="${x.g}"><span class="gl-ic">${x.ic}</span><span class="gl-b"><span class="gl-fr">${x.k==='mf'?`<b class="gl-ap">l’</b>${x.w} <i class="gl-mf">${x.g}.</i>`:`<b class="gl-a">${x.say.split(' ')[0]}</b> ${x.w}`}</span><span class="gl-de">${x.ctx?x.ctx+' · ':''}${x.de}${x.pl?` · Plural: ${x.pl}`:''}${x.alt?` · ${x.alt}`:''}</span>${x.warn?'<span class="gl-warn">⚠️ Stolperstein</span>':''}</span>${spk(x.say,'','mini')}</div>`;
const GL_HTML=`<div class="genlist" id="lernliste">
 <div class="gl-bar"><button type="button" class="btn small gl-cover">🙈 Abdecken &amp; selbst testen</button><span class="gl-hint">Alle ${GN.ALL.length} Wörter bis „le globe“ · 🔊 = anhören</span></div>
 <div class="gl-mixhint" hidden>Die Artikel sind verdeckt. Sag laut: <b>le</b> oder <b>la</b> (bei l’: m. oder f.)? Dann tippe auf das Wort zum Aufdecken.</div>
 <div class="gl-cols">
  <section class="gl-g gl-m"><h3 class="gl-h"><span class="gl-big">le</span><span>männlich ♂<small>${GN.M.length} Wörter</small></span></h3>${GN.M.map(glRow).join('')}</section>
  <section class="gl-g gl-f"><h3 class="gl-h"><span class="gl-big">la</span><span>weiblich ♀<small>${GN.F.length} Wörter</small></span></h3>${GN.F.map(glRow).join('')}</section>
 </div>
 <section class="gl-g gl-l"><h3 class="gl-h"><span class="gl-big">l’</span><span>Geschlecht mitlernen!<small>${GN.L.length} Wörter · <i class="gl-mf m">m.</i> = männlich, <i class="gl-mf f">f.</i> = weiblich</small></span></h3>${GN.L.map(glRow).join('')}</section>
 <section class="gl-g gl-p"><h3 class="gl-h"><span class="gl-big">👥</span><span>Personen: beide Formen<small>Mann/Junge → männlich · Frau/Mädchen → weiblich · weibliche Form oft mit <b>-e</b>: l’ami → l’ami<b>e</b></small></span></h3>${GN.P.map(glRow).join('')}</section>
 <div class="gl-mix" hidden></div>
</div>`;
const GL_AFTER=`<div class="gl-after"><div><b>🎮 Danach: Spiel zum Festigen</b><span>Im Vokabel-Memory findest du Bild und Wort und tippst dann le / la / l’.</span></div><a class="btn" href="../training/#spiel-memory">🃏 Vokabel-Memory</a><a class="btn ghost" href="../training/#spiel-artikel">🧺 Artikel-Sortierer</a></div>`;
window.CHAPTERS=[
/* 1 */
{id:'entdecken',kind:'Einstieg',icon:'🔎',title:'Entdecken: Voilà ma chambre!',sub:'Théo zeigt Clara sein Zimmer – le, la, l’ oder les?',lv:1,
html:card('Lies mit','📖','<p>Clara besucht Théo. Lies genau: Vor jedem Gegenstand steht ein kleines Wort – der <b>Artikel</b>.</p>'+dlg('La chambre de Théo',D1,{bg:'chambre'}))
 +card('Théos Zimmer','🛏️',`<div class="roomwrap">${ROOM}</div><div class="objrow">${G('le','lit','m')}${G('le','globe','m')}${G('le','poster','m')}${G('la','guitare','f')}${G('la','chaise','f')}${G('la','lampe','f')}${G('l’','ordinateur','m')}${G('l’','étagère','f')}${G('les','posters','p')}</div>`)
 +reveal('🔍 Was fällt dir auf? Wann steht le, la, l’ oder les?',`<ul><li><b class="c-m">le</b> steht vor <b>männlichen</b> Nomen: le lit, le globe.</li><li><b class="c-f">la</b> steht vor <b>weiblichen</b> Nomen: la guitare, la chaise.</li><li><b>l’</b> steht vor einem <b>Vokal</b> (a, e, i, o, u, é …): l’ordinateur, l’étagère.</li><li><b class="c-p">les</b> steht vor allem, was <b>mehrere</b> sind: les posters.</li></ul><p>In dieser App sind männliche Wörter immer <b class="c-m">blau</b>, weibliche <b class="c-f">rot</b> und der Plural <b class="c-p">lila</b>.</p>`),
ex:[
 mul('Tippe alle Wörter an, die im Dialog mit <b>la</b> stehen.',[['guitare',1],['minichaîne',1],['lit',0],['globe',0],['ordinateur',0],['posters',0]],'la guitare, la minichaîne – aber <b>le</b> lit, <b>le</b> globe, <b>l’</b>ordinateur, <b>les</b> posters.'),
 mc('Was bedeutet «Le lit est super!»?',['Das Bett ist super!','Ein Bett ist super!','Die Betten sind super!','Das Zimmer ist super!'],'<i>le lit</i> = das Bett. le ist ein bestimmter Artikel (der, die, das).',{say:'Le lit est super!'}),
 mc('Warum heißt es <b>les</b> posters?',['Weil es mehrere Poster sind.','Weil poster weiblich ist.','Weil poster mit p anfängt.','Weil Théo es so mag.'],'les steht im Plural – bei männlichen <i>und</i> weiblichen Nomen.'),
 mc('Warum heißt es <b>l’</b>ordinateur und nicht „le ordinateur“?',['Weil ordinateur mit einem Vokal anfängt.','Weil ordinateur weiblich ist.','Weil es mehrere Computer sind.','Weil ordinateur ein langes Wort ist.'],'Vor einem Vokal wird le/la zu <b>l’</b>. Das klingt flüssiger: [lɔʁdinatœʁ].'),
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
 +merk('⭐ Merkkasten: der Plural',`<ul><li>Im Plural heißt der Artikel <b>immer les</b> – egal ob männlich oder weiblich.</li><li>Das Nomen bekommt meistens ein <b>-s</b>: la photo → les photos. Dieses s <b>hört man nicht</b>!</li><li>Ohne -s bleiben: ${G('les','CD','p')} ${G('les','B.D.','p')}</li></ul>`),
ex:[
 wr('Setze in den Plural: <b>la fille</b>',['les filles'],'la → les, und ein stummes -s: les filles.'),
 wr('Setze in den Plural: <b>le garçon</b>',['les garçons'],'les garçons – mit ç!'),
 wr('Setze in den Plural: <b>l’élève</b>',['les élèves'],'les‿élèves – mit Liaison [lezelɛv].'),
 wr('Setze in den Plural: <b>le CD</b>',['les CD'],'les CD – ohne s!'),
 wr('Setze in den Plural: <b>la B.D.</b>',['les B.D.','les BD','les bédés','les bédé'],'les B.D. – ohne s!'),
 mc('Welcher Plural ist richtig?',['les élèves','les élève','le élèves','les élévés'],'les + élève + s = les élèves.',{fr:true,lv:2}),
 mc('Wie spricht man «les amis» aus?',['[lezami] – mit Liaison','[leami] – ohne Bindung','[lesami] – mit scharfem s','[lami] – wie l’ami'],'Vor Vokal bindet man: les‿amis [lezami].',{say:'les amis',lv:2}),
]},
/* 4 */
{id:'szenen',kind:'Szenen',icon:'🎭',title:'Szenen: C’est le stylo de Karim',sub:'In der Klasse: Wem gehört was?',lv:2,
html:card('Wem gehört was?','✏️','<p>Nach der Stunde liegen überall Sachen herum. Jade fragt Lucas. Achte auf <b>le, la, l’, les</b> – und auf <span class="fr">de</span> = von.</p>'+dlg('Dans la classe',D2,{bg:'classe'}))
 +merk('⭐ Wann nimmt man den bestimmten Artikel?',`<ul><li>Wenn man <b>eine bestimmte</b> Sache meint: ${F('le stylo de Karim')} (der Kuli von Karim).</li><li>Wenn die Sache <b>schon bekannt</b> ist: ${F('Regarde la guitare!')}</li><li>Bei Fächern und Sprachen: ${F('le français')}</li></ul>`),
ex:[
 dl('Ergänze den Dialog mit le, la, l’ oder les.',[['Jade','C’est {0} règle de Lucas?'],['Samira','Non, c’est {1} règle de Noah.'],['Jade','Et {2} ordinateur?'],['Samira','C’est {3} ordinateur de Monsieur Martel.']],[['la','le','l’'],['la','le','les'],['l’','le','la'],['l’','le','la']],'la règle · la règle · l’ordinateur · l’ordinateur.'),
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
{id:'geschlecht',kind:'Nachholbedarf',nh:true,extra:true,icon:'⚖️',title:'Nachholbedarf: Geschlecht der Nomen (le / la)',sub:'Alle Nomen bis „le globe“: erst die Lernliste, dann bei jedem Wort le / la (bei l’: m. / f.) tippen',lv:1,c:'#f97316',
 lbl:GN.ALL.length+' Wörter: le / la?',openHtml:true,matTitle:'📋 Lernliste: le (blau) · la (rot) · l’ (m./f.)',introEnd:{label:'📋 Zur Lernliste',act:'#lernliste'},after:GL_AFTER,
 html:GL_HTML,
 ex:[{type:'genus',q:'Männlich oder weiblich? Tippe bei jedem Nomen auf <b class="c-m">le</b> oder <b class="c-f">la</b> – bei l’-Wörtern auf <b class="c-m">m.</b> oder <b class="c-f">f.</b>',items:GN.ALL,lv:1,must:true,
  why:'Für die Punkte zählt dein erster Versuch bei jedem Wort. Die falschen Wörter stehen oben – lies sie in der Lernliste noch einmal nach und spiel danach das Vokabel-Memory.'}]},
];
window.TEST_EX=[
 gapw('Setze den bestimmten Artikel ein (le, la, l’, les).','1. {0} chaise 2. {1} lit 3. {2} armoire 4. {3} posters 5. {4} garçon 6. {5} école 7. {6} hamac 8. {7} B.D. (Plural)',[['la'],['le'],['l’',"l'"],['les'],['le'],['l’',"l'"],['le'],['les']],'la chaise · le lit · l’armoire · les posters · le garçon · l’école · le hamac · les B.D.',{ref:'regel',tag:'Artikel einsetzen',say:false}),
 wr('Setze in den Plural: «l’élève»',['les élèves'],'les élèves.',{ref:'plural',tag:'Plural'}),
 wr('Setze in den Plural: «le CD»',['les CD'],'les CD – ohne s.',{ref:'plural',tag:'Plural'}),
 wr('Übersetze: „Die Lampe ist im Zimmer.“',['La lampe est dans la chambre.'],'La lampe est dans la chambre.',{ref:'schwer',tag:'Übersetzen'}),
 det('Fehlerdetektiv: Finde die 4 Fehler.','Voilà [le|la] classe de sixième A. [Le|Les] élèves sont dans la cour. [La|L’] étagère est dans [la|le] coin.','la classe · Les élèves · L’étagère · le coin.',{ref:'fehler',tag:'Fehler finden'}),
];
/* Pro Durchgang: so viele Aufgaben je Kapitel (Rest = Reserve-Pool); Pflichtaufgaben zu den Heftfehlern */
H.setRun({entdecken:2,regel:3,plural:2,szenen:2,leicht:4,mittel:4,schwer:4,fehler:3,geschlecht:1},{fehler:[0],test:[4]});
/* INTRO */
H.setIntro({
_lesson:{t:'Der bestimmte Artikel: le, la, l’, les',
 was:'Der bestimmte Artikel ist im Deutschen <b>der, die, das</b>. Im Französischen gibt es <b>le, la, l’</b> und im Plural <b>les</b>. Jedes Nomen ist entweder <b>männlich</b> (m.) oder <b>weiblich</b> (f.) – das zeigt der Artikel.',
 warum:'Du brauchst den Artikel in fast jedem Satz – vor allem, wenn du dein Zimmer beschreibst (<i>Le lit est super.</i>). In der Arbeit zählt jeder falsche Artikel als Fehler.',
 schritte:['Ist es <b>eins</b> oder sind es <b>mehrere</b>? Mehrere → immer <b>les</b>.','Bei einem: Ist das Nomen <b>männlich</b> → <b>le</b>, <b>weiblich</b> → <b>la</b>.','Fängt das Nomen mit einem <b>Vokal</b> (a, e, i, o, u, é) an? Dann wird le / la zu <b>l’</b>.'],
 tab:'<table class="cj"><tr><td><b>le</b> + männlich</td><td>le lit, le livre</td></tr><tr><td><b>la</b> + weiblich</td><td>la chaise, la lampe</td></tr><tr><td><b>l’</b> + Vokal</td><td>l’armoire, l’ordinateur</td></tr><tr><td><b>les</b> + Plural</td><td>les posters, les photos</td></tr></table>',
 bsp:[['le lit','das Bett (m.)'],['la chaise','der Stuhl (f.)'],['l’armoire','der Schrank (f., Vokal am Anfang)'],['l’ordinateur','der Computer (m., Vokal am Anfang)'],['les posters','die Poster (Plural)']],
 merk:'le (m.) · la (f.) · l’ vor Vokal · les im Plural',
 fallen:['Das Geschlecht ist oft anders als im Deutschen: <b>la</b> chaise (der Stuhl), <b>le</b> lit (das Bett).','<b>le hamac</b> – trotz h kein l’.','Im Plural bekommt das Nomen ein <b>-s</b>: les poster<b>s</b>. Ausnahme: les CD, les B.D.'],
 check:['Eins oder mehrere?','Männlich oder weiblich? (Lerne jedes Nomen mit Artikel!)','Vokal am Anfang? → l’']},
entdecken:{rule:"Plural → les. Vokal am Anfang → l’. Sonst männlich → le, weiblich → la.",t:'Dialog: Artikel entdecken',
 was:'Théo zeigt Clara sein Zimmer. Vor jedem Gegenstand steht ein kleines Wort – der <b>Artikel</b>. Finde heraus, wann le, la, l’ oder les steht.',
 schritte:['Lies den Dialog (🔊 = Aussprache).','Such alle Artikel (le, la, l’, les).','Überlege: Was haben die Wörter mit le gemeinsam? Und die mit la?'],
 bsp:[['Voilà ma chambre.','Das ist mein Zimmer.','Théo'],['Le lit est super!','Das Bett ist super!','Clara'],['La lampe est cool.','Die Lampe ist cool.','Clara'],['Les posters sont super!','Die Poster sind super!','Clara']],
 merk:'Vor jedem Nomen steht ein Artikel – lerne ihn immer mit!',
 fallen:['Deutsches Geschlecht hilft nicht immer: der Stuhl = <b>la</b> chaise.'],
 check:['Dialog lesen.','Artikel suchen.','Fragen beantworten.']},
regel:{rule:"Plural → les. Vokal am Anfang → l’. Sonst männlich → le, weiblich → la.",t:'Die Regel: le, la, l’, les',
 was:'Hier lernst du die Regel genau: Welcher Artikel passt zu welchem Nomen?',
 schritte:['<b>le</b> steht vor männlichen Nomen: le lit, le livre, le poster.','<b>la</b> steht vor weiblichen Nomen: la chaise, la table, la lampe.','Vor einem Vokal oder stummen h wird le / la zu <b>l’</b>: l’armoire, l’étagère, l’ordinateur.','<b>les</b> steht vor allen Nomen im Plural – egal ob männlich oder weiblich.'],
 bsp:[['le livre','das Buch'],['la table','der Tisch'],['l’étagère','das Regal'],['l’école','die Schule'],['les livres','die Bücher']],
 merk:'le (m.) · la (f.) · l’ vor Vokal · les im Plural',
 fallen:['<b>l’</b> sagt dir nicht, ob ein Nomen männlich oder weiblich ist: l’armoire (f.), l’ordinateur (m.).','le <b>h</b>amac – hier kein l’!'],
 check:['Plural? → les.','Vokal am Anfang? → l’.','Sonst: männlich → le, weiblich → la.']},
plural:{rule:"Im Plural heißt der Artikel immer les, und das Nomen bekommt ein -s (Ausnahme: les CD, les B.D.).",t:'Der Plural: les',
 was:'Wenn es <b>mehrere</b> sind, heißt der Artikel immer <b>les</b>. Das Nomen bekommt meistens ein <b>-s</b>, das man nicht hört.',
 schritte:['Artikel le, la oder l’ wird zu <b>les</b>.','Ans Nomen kommt ein <b>-s</b>: le livre → les livre<b>s</b>.','Vor einem Vokal spricht man das s von les wie [z]: les‿armoires.'],
 bsp:[['les livres','die Bücher'],['les photos','die Fotos'],['les armoires','die Schränke (mit Bindung [z])'],['les CD','die CDs (ohne s!)']],
 merk:'Plural: les + Nomen mit -s (Ausnahme: les CD, les B.D.)',
 fallen:['Das -s hört man nicht – aber du musst es schreiben!','<b>les CD</b>, <b>les B.D.</b> – ohne -s.'],
 check:['Artikel → les.','-s ans Nomen.','Ausnahme CD / B.D. beachten.']},
szenen:{rule:"Plural → les. Vokal am Anfang → l’. Sonst männlich → le, weiblich → la.",t:'Szenen: Wem gehört was?',
 was:'Jade und Lucas räumen die Klasse auf. Du liest, wem welche Sachen gehören: <i>C’est le stylo de Noah.</i> (Das ist der Kuli von Noah.)',
 schritte:['Lies das Gespräch.','Achte auf den Artikel vor jedem Gegenstand.','<b>de</b> + Name = „von“: le stylo de Noah = Noahs Kuli.'],
 bsp:[['C’est le stylo de Noah?','Ist das der Kuli von Noah?','Jade'],['Non, c’est le stylo de Karim.','Nein, das ist der Kuli von Karim.','Lucas'],['C’est la règle de Clara.','Das ist das Lineal von Clara.','Lucas'],['Voilà les crayons de Jade.','Da sind die Stifte von Jade.','Lucas']],
 merk:'le / la / l’ / les + Sache + de + Name = die Sache von …',
 fallen:['<b>la</b> règle – im Deutschen „das Lineal“.','<b>l’</b>effaceur (m.) – Vokal am Anfang.'],
 check:['Gegenstand erkennen.','Artikel bestimmen.','Besitzer finden.']},
leicht:{rule:"Plural → les. Vokal am Anfang → l’. Sonst männlich → le, weiblich → la.",t:'Training ★: Artikel wählen',
 was:'Wähle zu jedem Nomen den passenden Artikel. Denk an die drei Fragen.',
 schritte:['Plural? → les.','Vokal am Anfang? → l’.','Sonst le (m.) oder la (f.).'],
 bsp:[['le cahier','das Heft'],['la règle','das Lineal'],['l’armoire','der Schrank'],['les stylos','die Kulis']],
 merk:'le (m.) · la (f.) · l’ vor Vokal · les im Plural',
 fallen:['le hamac (kein l’).','les CD, les B.D. (ohne s).'],
 check:['Die drei Fragen stellen.','Artikel antippen.','Erklärung lesen, wenn es falsch war.']},
mittel:{rule:"Plural → les. Vokal am Anfang → l’. Sonst männlich → le, weiblich → la.",t:'Training ★★: Artikel selbst schreiben',
 was:'Jetzt schreibst du die Artikel selbst – und manchmal auch das Nomen. Achte auf l’ und auf das Plural-s.',
 schritte:['Artikel bestimmen.','Bei l’ den Apostroph ’ setzen (Knopf unter dem Feld).','Akzente: l’<b>é</b>cole, l’<b>é</b>tag<b>è</b>re, l’<b>é</b>l<b>è</b>ve.'],
 bsp:[['l’école','die Schule'],['l’élève','der Schüler / die Schülerin'],['l’étagère','das Regal'],['les photos','die Fotos']],
 merk:'Vor Vokal: l’ – mit Apostroph und ohne Leerzeichen.',
 fallen:['„le école“ ✗ → <b>l’école</b>.','Akzente bei école, élève, étagère nicht vergessen.'],
 check:['Artikel schreiben.','Apostroph und Akzente prüfen.','Plural-s prüfen.']},
schwer:{rule:"Plural: Artikel les + Nomen mit -s + Verb im Plural (le lit est → les lits sont).",t:'Training ★★★: übersetzen und Plural',
 was:'Klassenarbeitsniveau: Übersetze mit Artikel und setze ganze Sätze in den Plural.',
 schritte:['Nomen finden, Artikel bestimmen.','Im Plural: Artikel → les, Nomen + s, Verb anpassen (est → sont).','Satz noch einmal ganz lesen.'],
 bsp:[['Le lit est super.','Das Bett ist super.'],['Les lits sont super.','Die Betten sind super. (Plural)'],['L’ordinateur est là.','Der Computer ist da.'],['Les ordinateurs sont là.','Die Computer sind da.']],
 merk:'Plural = Artikel les + Nomen-s + Verb im Plural (est → sont).',
 fallen:['Im Plural auch das Verb ändern: le lit <b>est</b> → les lits <b>sont</b>.'],
 check:['Artikel.','Nomen.','Verb.']},
fehler:{rule:"Plural → les. Vokal am Anfang → l’. Sonst männlich → le, weiblich → la.",t:'Fehlerdetektiv: Artikel-Fehler',
 was:'Finde die typischen Artikel-Fehler in den Sätzen.',
 schritte:['Bei jedem Nomen den Artikel prüfen.','Passt das Geschlecht? Vokal? Plural?','Fehler antippen.'],
 bsp:[['la chambre','nicht: <s>le chambre</s> – chambre ist weiblich'],['le lit','nicht: <s>la lit</s> – lit ist männlich'],['l’école','nicht: <s>le école</s> – Vokal → l’'],['les posters','nicht: <s>les poster</s> – Plural-s']],
 merk:'Bei jedem Nomen: Geschlecht? Vokal? Plural?',
 fallen:['le hamac – hier ist l’ falsch.'],
 check:['Lesen.','Prüfen.','Antippen.']},
geschlecht:{t:'Geschlecht der Nomen',rule:'Blau = le (männlich) · Rot = la (weiblich) · bei l’ das Geschlecht mitlernen',
 vis:`<div class="gi-vis"><span class="gi-c g-m">${ob('lit')}<span><b>le</b> lit</span><small>♂ männlich</small></span><span class="gi-c g-f">${ob('chaise')}<span><b>la</b> chaise</span><small>♀ weiblich</small></span></div>`,
 was:'Jedes Nomen hat ein Geschlecht. <b class="c-m">Blau = le</b> (männlich), <b class="c-f">Rot = la</b> (weiblich). Lerne das Wort <b>immer mit Artikel</b>.',
 merk:'Bei <b>l’</b> siehst du das Geschlecht nicht: <b>l’armoire</b> <i class="gl-mf f">f.</i>, <b>l’ordinateur</b> <i class="gl-mf m">m.</i> – das musst du mitlernen.',
 fallen:[['le chaise','la chaise','Deutsch hilft nicht: „<b>der</b> Stuhl“, aber <b>la chaise</b>.']]}
});
(function(){const W=window,V=window.V;
/* Bildliche Erklärungen (feste Vorlage) – le, la, l’, les */
H.patchIntro({
_lesson:{tab:'',vis:V.artSet([['lit','le','lit'],['chaise','la','chaise'],['armoire','l’','armoire'],['livre','les','livres']]),
 was:'Vor jedem Nomen steht ein Artikel: <b>le</b>, <b>la</b>, <b>l’</b> oder <b>les</b> (= der, die, das).',
 warumVis:'<div class="aset">'+V.obj('lit','le','lit')+' <span class="big-ic">≠</span> '+V.obj('chaise','la','chaise')+'</div>',
 warum:'Jedes Nomen ist männlich oder weiblich – oft anders als im Deutschen (<i>der</i> Stuhl = <b>la</b> chaise).',
 schritte:[['<span class="big-ic">👥?</span>','Mehrere? → '+V.art('les')],['<span class="big-ic">🅰️?</span>','Vokal am Anfang? → '+V.art('l’')],['<span class="big-ic">♂ / ♀</span>','männlich → '+V.art('le')+' · weiblich → '+V.art('la')]],
 merk:'le (m.) · la (f.) · l’ vor Vokal · les im Plural',
 fallen:[['le ordinateur','l’ordinateur','Vokal → <b>l’</b>.'],['le chaise','la chaise','chaise ist weiblich.'],['les livre','les livres','Plural: -s ans Nomen.']]},
entdecken:{vis:'<div class="aset">'+V.who('Théo')+'</div>'+V.artSet([['lit','le','lit'],['lampe','la','lampe'],['ordinateur','l’','ordinateur'],['poster','les','posters']]),
 was:'Théo zeigt sein Zimmer. Vor jeder Sache steht ein <b>Artikel</b>.',
 warum:'Am Artikel siehst du: männlich, weiblich, Vokal oder Plural.',
 schritte:[['<span class="big-ic">📖</span>','Dialog lesen'],[V.art('le')+' '+V.art('la')+' '+V.art('l’')+' '+V.art('les'),'Artikel suchen'],['<span class="big-ic">🎨</span>','Farbe merken: blau m. · rot f. · lila Plural']],
 fallen:[['la lit','le lit','lit ist männlich – Artikel immer mitlernen.']]},
regel:{vis:'<div class="rulefl">'+V.b('mehrere?','x')+' → '+V.art('les')+'<br>'+V.b('Vokal?','x')+' → '+V.art('l’')+'<br>'+V.b('m. / f.?','x')+' → '+V.art('le')+' / '+V.art('la')+'</div>',
 was:'Drei Fragen – immer in dieser Reihenfolge.',
 warumVis:V.elision('le','ordinateur','ordinateur'),
 warum:'Vor einem Vokal fällt e / a weg – so spricht es sich leichter.',
 schritte:[['<span class="big-ic">👥</span>','Mehrere? → les'],['<span class="big-ic">🅰️</span>','Vokal (a, e, i, o, u, h)? → l’'],['<span class="big-ic">♂♀</span>','sonst: le (m.) oder la (f.)']],
 fallen:[['la armoire','l’armoire','Vokal → <b>l’</b>, egal ob m. oder f.'],['l’ chaise','la chaise','l’ nur vor Vokal.'],['l’hamac','le hamac','Ausnahme: <b>le hamac</b> – trotz h kein l’.']]},
plural:{vis:'<div class="aset">'+V.obj('livre','le','livre',{n:1})+' <span class="big-ic">→</span> '+V.obj('livre','les','livres')+'</div>',
 was:'Mehrere → immer <b>les</b>, und das Nomen bekommt ein stummes <b>-s</b>.',
 warum:'Das -s hört man nicht – aber man schreibt es.',
 schritte:[[V.art('le')+' / '+V.art('la')+' / '+V.art('l’'),'wird zu '+V.art('les')],['<span class="big-ic">+s</span>','Nomen mit -s'],[V.obj('cd','les','CD',{say:false}),'Ausnahme: les CD, les B.D.'],[V.fig('mm'),'auch Wörter wie „neu“ / „Freund“: nouveau → nouveau<b>x</b>, l’amie → les amie<b>s</b>']],
 fallen:[['les poster','les posters','-s nicht vergessen.'],['les CDs','les CD','CD und B.D. ohne -s.'],['Les garçons sont nouveau.','Les garçons sont nouveaux.','Mehrere → auch <b>nouveaux</b> (mit x).']]},
szenen:{vis:V.train('C’/s|est/v|le stylo de Noah./r',{labels:true})+'<div class="aset">'+V.obj('stylo','le','stylo')+V.who('Noah')+'</div>',
 was:'Wem gehört was? <i>C’est le stylo de Noah.</i>',
 warum:'Sache + <b>de</b> + Name = die Sache von …',
 schritte:[[V.obj('stylo','le','stylo',{say:false}),'Sache mit Artikel'],[V.b('de','r'),'„von“'],[V.who('Noah'),'Name']],
 fallen:[['C’est Noah stylo.','C’est le stylo de Noah.','Erst die Sache, dann <b>de</b> + Name.']]},
leicht:{vis:V.artSet([['table','la','table'],['globe','le','globe'],['etagere','l’','étagère'],['cahier','les','cahiers']]),
 was:'Wähle zu jedem Nomen den Artikel.',
 warum:'So lernst du jedes Nomen mit seinem Artikel.',
 schritte:[['<span class="big-ic">👥</span>','mehrere? → les'],['<span class="big-ic">🅰️</span>','Vokal? → l’'],['<span class="big-ic">♂♀</span>','m. → le · f. → la']],
 fallen:[['le table','la table','table ist weiblich.']]},
mittel:{vis:V.elision('la','étagère','etagere'),
 was:'Du schreibst die Artikel selbst – achte auf l’ und das Plural-s.',
 warum:'In der Arbeit zählt jeder Apostroph.',
 schritte:[['<span class="big-ic">🅰️</span>','Vokal? → l’ ohne Leerzeichen'],['<span class="big-ic">+s</span>','Plural-s'],['<span class="big-ic">✍️</span>','Artikel + Nomen schreiben']],
 fallen:[['l’ étagère','l’étagère','Kein Leerzeichen nach l’.'],['les règle','les règles','Plural-s.']]},
schwer:{vis:V.vs('Le livre/s|sont/v|là./r','Les livres/s|sont/v|là./r'),
 was:'Übersetzen und ganze Sätze in den Plural setzen.',
 warum:'Im Plural ändert sich alles: Artikel, Nomen und Verb.',
 schritte:[[V.art('les'),'Artikel → les'],['<span class="big-ic">+s</span>','Nomen + s'],[V.b('sont','v'),'est → sont']],
 merk:'Plural = les + Nomen-s + sont',
 fallen:[['Le lit est là. → Les lits est là.','Les lits sont là.','Auch das Verb in den Plural.']]},
fehler:{vis:V.vs('le/r|ordinateur/r','l’ordinateur/r'),
 was:'Finde typische Artikel-Fehler.',
 warum:'Wer Fehler sieht, macht sie seltener.',
 schritte:[['<span class="big-ic">♂♀</span>','Geschlecht?'],['<span class="big-ic">🅰️</span>','Vokal?'],['<span class="big-ic">👥</span>','Plural?']],
 fallen:[['la professeur (Monsieur Martel)','le professeur','Ein Mann → <b>le</b>.']]}
});

})();
