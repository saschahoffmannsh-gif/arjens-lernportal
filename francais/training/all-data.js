/* automatisch erzeugt (build.js) – alle Lektionsdaten für die Trainings-Seite */
window.HUB_MODE=true;window.HUBL={};window.HUB_ORDER=[];
window.HUBCAP=function(slug){var W=window;W.HUBL[slug]={L:W.LESSON,C:W.CHAPTERS,T:W.TEST_EX||[],TR:W.TRACKS||{},WR:W.WRITERS||{}};W.HUB_ORDER.push(slug);W.TRACKS=undefined;W.WRITERS=undefined;W.TEST_EX=undefined;W.CHAPTERS=undefined;W.INTRO=undefined;};
(function(){
/* Lektion: Das Verb être */
const {F,G,conj,dlg,merk,attn,tip,hoer,card,reveal,tabs,track,steps,grp,ob,spk,spkLines}=H;
const {mc,pick,gap,gapw,ord,wr,mt,dl,clk,mark,mul,seg,tf,det}=X;
/* ---------- Fehler-Erkenner für die Extra-Übung „Nachholbedarf 1“ (Arjens typische Fehler) ---------- */
const NH=(()=>{
 const N=s=>window.DN(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/^m /,'monsieur ').trim();
 const E=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 const BE=/^(est|sont|suis|es|sommes|etes)$/;const PR=['il','elle','ils','elles'];const PV={il:'est',elle:'est',ils:'sont',elles:'sont'};
 const M_ORD='Wer → Verb → Rest. Nie ans Ende.';
 const M_ERS='Person raus, Pronomen rein – der Rest bleibt.';
 const M_PR='👦 il · 👧 elle · 👧👧 elles · 👦👦 / 👧👦 ils';
 return function(raw,r,e){const out=[];const add=(t,m)=>out.push({t,m});
  const sol=window.strip(String(r.sol||'')).trim();const g=N(raw),s=N(sol);if(!g||g===s)return out;
  const gw=g.split(' '),sw=s.split(' '),sol_w=sol.split(/\s+/);
  if(/(^| )(mr|mrs|mister|miss|ms)( |$)/.test(g))add('«Mr» ist <b>Englisch</b>. Herr = <b>Monsieur</b>, Frau = <b>Madame</b>.','Herr = Monsieur · Frau = Madame');
  if(/(^| )la professeur/.test(g)&&/(^| )le professeur/.test(s))add('👨 Ein <b>Mann</b> → <b>le</b> professeur. <i>la</i> nur bei Madame.','Monsieur … → le professeur · Madame … → la professeur');
  else if(/(^| )(les|l') professeur/.test(g)&&/(^| )le professeur/.test(s))add('👨 Ein Mann → <b>le</b> professeur.','Monsieur … → le professeur');
  if(/(^| )monsieur/.test(g)&&/(^| )madame/.test(s)||/(^| )madame/.test(g)&&/(^| )monsieur/.test(s))add('<b>Monsieur</b> = Herr (Mann) · <b>Madame</b> = Frau.','Herr = Monsieur · Frau = Madame');
  const lastG=gw[gw.length-1],lastS=sw[sw.length-1];
  if(gw.length>2&&BE.test(lastG)&&!BE.test(lastS))add(`Dein Verb <b>${lastG}</b> steht am <b>Ende</b>. Es gehört direkt hinter das Wer.`,M_ORD);
  else if(gw.length>2&&BE.test(gw[0])&&!BE.test(sw[0]))add(`Dein Verb <b>${gw[0]}</b> steht am <b>Anfang</b>. Erst Wer, dann Verb.`,M_ORD);
  else if(gw.length>2&&gw.slice().sort().join(' ')===sw.slice().sort().join(' '))add('Wörter richtig, <b>Reihenfolge</b> falsch: Wer → Verb → Rest.',M_ORD);
  if(e.noun){const nn=N(e.noun),core=nn.replace(/^(les|le|la|l') /,'').replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
   if(new RegExp('(^| )'+core+'( |$)').test(g)||(!PR.includes(gw[0])&&PR.includes(sw[0])&&gw[0]===nn.split(' ')[0]))add(`Du hast <b>«${e.noun}»</b> stehen lassen. Ersetzen = raus damit, <b>${sol_w[0]}</b> rein.`,M_ERS);
   else if(PR.includes(gw[0])&&PR.includes(sw[0])&&gw[0]!==sw[0]){const t=sw[0],w=gw[0];let why;
    if(t==='elles')why=w==='ils'?`👧👧 «${e.noun}» = <b>nur Mädchen</b> → <b>elles</b>.`:`«${e.noun}» = <b>mehrere</b> → <b>elles</b>.`;
    else if(t==='ils')why=e.mixed?`👧👦 «${e.noun}» = <b>gemischte Gruppe</b> → <b>ils</b>.`:w==='elles'?`👦👦 «${e.noun}» = <b>Jungen</b> → <b>ils</b>.`:`«${e.noun}» = <b>mehrere</b> → <b>ils</b>.`;
    else if(t==='il')why=`👦 «${e.noun}» = <b>ein Junge / Mann</b> → <b>il</b>.`;
    else why=`👧 «${e.noun}» = <b>ein Mädchen / eine Frau</b> → <b>elle</b>.`;
    add(why,M_PR);}
   else if(gw.length===1&&sw.length===1&&!PR.includes(gw[0]))add(`Gesucht ist eins der Pronomen <b>il, elle, ils, elles</b>. Für «${e.noun}» passt <b>${sol_w[0]}</b>.`,M_PR);
   if(PR.includes(gw[0])&&BE.test(gw[1]||'')&&gw[1]!==PV[gw[0]])add(`Zu <b>${gw[0]}</b> gehört <b>${PV[gw[0]]}</b>.`,'il / elle → est · ils / elles → sont');
   const vi=a=>a.findIndex(x=>BE.test(x));const ig=vi(gw),is=vi(sw);
   if(ig>=0&&is>=0){const rg=gw.slice(ig+1).join(' '),rs=sw.slice(is+1).join(' ');
    if(rg!==rs){const ow=String(raw).trim().split(/\s+/).slice(ig+1);const orig=ow.join(' ').replace(/[.!?]+$/,'');const aw=ow.find(x=>/^(a|à)$/i.test(x));const right=sol_w.slice(is+1).join(' ').replace(/[.!?]+$/,'');
     if(/(^| )dans( |$)/.test(rs)&&!/(^| )dans( |$)/.test(rg)&&/(^| )a( |$)/.test(rg))add(`Du hast <b>dans</b> in «${E(aw||'a')}» geändert. 🔒 Der Rest bleibt gleich.`,'Nur die Person tauschen – der Rest bleibt.');
     else add(`🔒 Der Rest bleibt gleich: «${E(right)}».`,M_ERS);}}}
  return out;};})();
window.LESSON={slug:'etre',title:'Das Verb être',fr:'je suis, tu es, il est …',icon:'🙋',color:'#ea580c',testN:18,
 intro:'<b>être</b> heißt <b>sein</b> und ist das wichtigste Verb im Französischen. Es ist <b>unregelmäßig</b> – du musst die sechs Formen auswendig können. Hier lernst du sie mit Dialogen, Bildern und vielen Aufgaben (Hörübungen kommen am Ende im Teil „Hörverstehen“).'};
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
html:card('Lies mit','📖','<p>Erster Schultag am Collège in Straßburg. Monsieur Martel begrüßt die neue Klasse. Tippe auf 🔊 – oben spielst du den ganzen Dialog ab, neben jeder Sprechblase einen einzelnen Satz.</p>'+dlg('Premier jour au collège',D1,{bg:'cour'}))
 +reveal('🔍 Was fällt dir auf? Welche Wörter bedeuten „bin, bist, ist, sind, seid“?',`<p>Das sind alles Formen von <b>être</b> (sein):</p><p><span class="fr">je <span class="hl">suis</span></span> · <span class="fr">nous <span class="hl">sommes</span></span> · <span class="fr">vous <span class="hl">êtes</span></span> · <span class="fr">Jade et Yasmine <span class="hl">sont</span></span> · <span class="fr">elles <span class="hl">sont</span></span></p><p>Jede Person hat eine <b>eigene</b> Form, und sie sehen ganz verschieden aus. Darum heißt être <b>unregelmäßig</b>.</p>`)
 +tip('<b>Übrigens:</b> In <span class="fr">c’est</span> (das ist) steckt auch être: <span class="fr">ce + est = c’est</span>. Das kennst du schon aus <span class="fr">C’est moi.</span> und <span class="fr">C’est qui?</span>'),
ex:[
 mul('Welche Wörter aus dem Dialog sind Formen von <b>être</b>? Tippe alle an.',[['suis',1],['sommes',1],['êtes',1],['sont',1],['est',1],['voilà',0],['regarde',0],['nouveau',0]],'suis, es, est, sommes, êtes, sont sind die Formen von être. <i>voilà</i> (das ist / da ist), <i>regarde</i> (schau) und <i>nouveau</i> (neu) gehören nicht dazu.',{sub:'Mehrere sind richtig.'}),
 mc('Was bedeutet «Je suis de Berlin.»?',['Ich bin aus Berlin.','Ich wohne in Berlin.','Er ist aus Berlin.','Wir sind aus Berlin.'],'<i>je suis</i> = ich bin, <i>de</i> = aus. Karim sagt das, denn er ist neu und kommt aus Berlin.',{say:'Je suis de Berlin.'}),
 mc('Was bedeutet «Vous êtes la classe de sixième A.»?',['Ihr seid die Klasse 6A.','Wir sind die Klasse 6A.','Sie ist die Klasse 6A.','Du bist in der 6A.'],'<i>vous êtes</i> = ihr seid. Monsieur Martel spricht mit der ganzen Klasse.',{say:'Vous êtes la classe de sixième A.'}),
 mt('Was gehört zusammen?',[['je suis','ich bin'],['tu es','du bist'],['il est','er ist'],['nous sommes','wir sind']],'Lerne die Formen immer mit dem Pronomen zusammen: je suis, tu es, il est, nous sommes …'),
 mt('Und die anderen Formen:',[['vous êtes','ihr seid'],['elle est','sie ist'],['ils sont','sie sind (Jungen)'],['elles sont','sie sind (nur Mädchen)']],'vous êtes = ihr seid · elle est = sie ist · ils sont / elles sont = sie sind.'),
 mc('Monsieur Martel fragt: «Vous êtes la classe de sixième A?» Warum sagt er <b>vous</b>?',['Er spricht mit mehreren Kindern (ihr).','Er spricht mit einem Kind (du).','Er spricht über sich selbst.','Er spricht über Jade und Yasmine.'],'<i>vous</i> = ihr (mehrere Personen). Zu einem einzelnen Kind würde er <i>tu</i> sagen.'),
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
{id:'szenen',kind:'Szenen',icon:'🎭',title:'Szenen: C’est qui?',sub:'être im Alltag – lesen, verstehen, mitreden',lv:2,
html:card('Auf dem Schulhof','💬','<p>Léo und Samira sehen zwei Kinder. Lies mit: Welche Formen von être findest du? (🔊 = Aussprache)</p>'+dlg('Dans la cour',D2,{bg:'cour'}))
 +merk('⭐ C’est … oder il / elle est …?',`<ul><li><b>Wer ist das?</b> → ${F('C’est Lucas.')} ${F('C’est Yasmine.')} (c’est + Name)</li><li><b>Mehr über die Person</b> → ${F('Il est en cinquième.')} ${F('Elle est de Strasbourg.')}</li></ul>`)
 +card('Im Klassenzimmer','🏫',dlg('En classe',D3,{bg:'classe'})),
ex:[
 dl('Ergänze den Dialog mit être.',[['Clara','Salut! Je {0} Clara. Et toi?'],['Karim','Moi, c’est Karim. Je {1} de Berlin.'],['Clara','Tu {2} nouveau?'],['Karim','Oui. Noah et moi, nous {3} en sixième B.']],[['suis','es','est'],['suis','es','sommes'],['es','est','êtes'],['sommes','sont','êtes']],'je suis · je suis · tu es · nous sommes.'),
 mc('Jemand fragt dich: «C’est qui?» und zeigt auf Clara. Was antwortest du?',['C’est Clara. Elle est en sixième A.','Il est Clara.','C’est Clara. Il est en sixième A.','Elle sont Clara.'],'Wer? → <b>C’est</b> Clara. Mehr über sie → <b>Elle est</b> en sixième A.',{fr:true}),
]},
/* ---------------- 5 */
{id:'leicht',kind:'Training ★',icon:'🌱',title:'Training: leicht',sub:'Formen sicher erkennen und einsetzen',lv:1,
html:merk('🔁 Kurz wiederholt',conj(ETRE)+'<p style="margin-top:10px">Tipp: Sag zuerst das Pronomen leise vor dich hin – dann fällt dir die Form ein.</p>','blue'),
ex:[
 gap('Setze ein.','Tu {0} l’ami de Théo?',[['es','est','êtes']],'tu → es.'),
 gap('Setze ein.','Elle {0} en cinquième.',[['est','es','sont']],'elle → est.'),
 gap('Setze ein.','On {0} ensemble!',[['est','sommes','sont']],'Nach <b>on</b> steht immer <b>est</b>. <i>on</i> bedeutet hier „wir“, wird aber wie il / elle behandelt: On est ensemble! = Nous sommes ensemble! (Wir sind zusammen!)'),
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
 wr('Übersetze: „Wir sind zusammen.“',['Nous sommes ensemble.','On est ensemble.'],'„Wir sind“ geht auf zwei Arten: <b>Nous sommes</b> ensemble. oder <b>On est</b> ensemble. Beides ist richtig! Achtung: Nach <i>on</i> immer <b>est</b>, nach <i>nous</i> immer <b>sommes</b>.'),
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
 det('Fehlerdetektiv: Finde die Fehler.','Monsieur Martel est le professeur de français. Il est très cool. Les élèves [est|sont] dans la classe. On [sommes|est] ensemble!','<b>les élèves</b> sind mehrere (= ils) → <b>sont</b>. Nach <b>on</b> steht immer <b>est</b> – auch wenn on „wir“ bedeutet.'),
 mc('Welcher Satz ist <b>falsch</b>?',['Ils est de Berlin.','Ils sont de Berlin.','Il est de Berlin.','Elle est de Berlin.'],'«Ils est» ist falsch: ils (mehrere) → <b>sont</b>.',{say:'Ils sont de Berlin.'}),
 wr('Verbessere den Satz: «Tu est en sixième?»',['Tu es en sixième?'],'tu → es (ohne t).'),
 wr('Verbessere den Satz: «Nous somme amis.»',['Nous sommes amis.'],'nous → sommes (mit -es).'),
 wr('Verbessere den Satz: «Vous etes nouveaux?»',['Vous êtes nouveaux?'],'vous → êtes mit Accent circonflexe.'),
 mc('Jemand schreibt: «Je es Clara.» Was ist der Fehler?',['Zu je gehört suis: Je suis Clara.','Es fehlt ein Akzent: Je ès Clara.','Es muss heißen: Je est Clara.','Da ist kein Fehler.'],'je → <b>suis</b>. «es» gehört zu tu.'),
]},
/* ---------------- 10 · Extra-Übung: Nachholbedarf 1 (Arjens Fehler aus dem Abschlusstest) */
{id:'nachholbedarf',kind:'Nachholbedarf',icon:'🎯',title:'Nachholbedarf 1',sub:'Satzbau · „Ersetze durch ein Pronomen“ · le professeur / Monsieur',lv:1,extra:true,c:'#f97316',
plan:{A1:1,A2:2,A3:1,B1:2,B2:2,B3:2,C1:1,C2:1,C3:1},
html:attn(`<table class="t"><tr><th>✗ So war es im Test</th><th>✓ So ist es richtig</th><th>Warum?</th></tr>
 <tr><td><s>Monsieur Martel le professeur de français est.</s></td><td>${F('Monsieur Martel est le professeur de français.','Martel')}</td><td>Wer? → <b>Verb</b> → Rest. Das Verb steht direkt nach dem Subjekt, nie am Ende.</td></tr>
 <tr><td><s>les filles sont a la cour</s></td><td>${F('Elles sont dans la cour.')}</td><td><b>Ersetzen</b> = les filles raus, <b>elles</b> rein. Der Rest (<b>dans</b> la cour) bleibt gleich.</td></tr>
 <tr><td><s>Mr Martel est la professeur</s></td><td>${F('Monsieur Martel est le professeur.','Martel')}</td><td>Herr = <b>Monsieur</b> (Mr ist Englisch). Ein Mann → <b>le</b> professeur.</td></tr></table>`,'Deine 3 Stolpersteine aus dem Test')
 +tip('<b>So übst du:</b> Erst kommen ganz leichte Aufgaben (antippen, auswählen), dann Bausteine ordnen, zum Schluss schreibst du selbst. Nach jeder Aufgabe steht direkt, <b>warum</b> etwas richtig oder falsch ist.','🧡'),
ex:[
 /* A · Satzbau */
 mc('Welcher Satz ist richtig gebaut?',['Monsieur Martel est le professeur de français.','Monsieur Martel le professeur de français est.','Est Monsieur Martel le professeur de français.','Le professeur de français Monsieur Martel est.'],'Erst <b>wer</b> (Monsieur Martel), dann gleich das <b>Verb</b> (est), dann der Rest (le professeur de français).',{grp:'A1',lv:1,dx:NH,say:[['Martel','Monsieur Martel est le professeur de français.']]}),
 mc('Welcher Satz ist richtig gebaut?',['Clara est en sixième A.','Clara en sixième A est.','En sixième A Clara est.','Est Clara en sixième A.'],'<b>Clara</b> (wer?) → <b>est</b> (Verb) → <b>en sixième A</b> (Rest). Das Verb kommt direkt nach dem Subjekt.',{grp:'A1',lv:1,dx:NH,say:'Clara est en sixième A.'}),
 mc('Was steht im französischen Satz <b>direkt nach dem Subjekt</b> (wer?)?',['das Verb (z. B. est, sont)','der Rest des Satzes – das Verb kommt ans Ende','der Artikel le / la','ein Komma'],'Wer? → <b>Verb</b> → Rest. Das Verb ist der „Motor“ des Satzes und steht gleich hinter dem Subjekt – wie im deutschen Satz „Clara <b>ist</b> in der 6A“.',{grp:'A1',lv:1}),
 ord('Bring die Bausteine in die richtige Reihenfolge.',['Monsieur Martel','est','le professeur','de français.'],'Monsieur Martel (wer?) → <b>est</b> (Verb) → le professeur de français (Rest).',['M. Martel est le professeur de français.'],{grp:'A2',lv:2,must:true,dx:NH,say:[['Martel','Monsieur Martel est le professeur de français.']]}),
 ord('Bring die Bausteine in die richtige Reihenfolge.',['Jade et Yasmine','sont','dans la cour.'],'Jade et Yasmine (wer? – zwei Mädchen) → <b>sont</b> → dans la cour (wo?).',[],{grp:'A2',lv:2,dx:NH}),
 ord('Bring die Bausteine in die richtige Reihenfolge.',['Je','suis','de Berlin.'],'Je (wer?) → <b>suis</b> (Verb) → de Berlin (woher?).',[],{grp:'A2',lv:2,dx:NH}),
 ord('Bring die Bausteine in die richtige Reihenfolge.',['Madame Fournier','est','la surveillante.'],'Madame Fournier (wer?) → <b>est</b> (Verb) → la surveillante (was ist sie?).',[],{grp:'A2',lv:2,dx:NH,say:[['Fournier','Madame Fournier est la surveillante.']]}),
 wr('Bau einen richtigen Satz aus den Wörtern und schreibe ihn auf: <span class="fr">nouveau · Karim · est</span>',['Karim est nouveau.'],'Karim (wer?) → <b>est</b> (Verb) → nouveau (wie?). = Karim ist neu.',{grp:'A3',lv:3,dx:NH,ph:'Karim …'}),
 wr('Übersetze: „Herr Martel ist der Französischlehrer.“',['Monsieur Martel est le professeur de français.','M. Martel est le professeur de français.'],'Herr = <b>Monsieur</b>, dann direkt das Verb <b>est</b>, dann <b>le professeur de français</b> (ein Mann → le).',{grp:'A3',lv:3,must:true,dx:NH}),
 wr('Übersetze: „Clara ist in der 6A.“',['Clara est en sixième A.','Clara est en 6e A.','Clara est en sixième.'],'Clara → <b>est</b> → en sixième A. Das Verb kommt gleich nach dem Namen.',{grp:'A3',lv:3,dx:NH}),
 /* B · Ersetzen durch ein Pronomen */
 mc('«<u>Les filles</u> sont dans la cour.» – Welches Pronomen ersetzt <b>Les filles</b>?',['Elles','Ils','Elle','Il'],'Les filles = <b>mehrere Mädchen</b> → <b>elles</b>. Damit sagst du „sie“, ohne „die Mädchen“ zu wiederholen.',{grp:'B1',lv:1,dx:NH,noun:'Les filles',de:'Die Mädchen',deP:'Sie',say:'Elles sont dans la cour.'}),
 mc('«<u>Monsieur Martel</u> est dans la classe.» – Welches Pronomen ersetzt <b>Monsieur Martel</b>?',['Il','Elle','Ils','Elles'],'Monsieur Martel ist <b>ein Mann</b> → <b>il</b> (er).',{grp:'B1',lv:1,dx:NH,noun:'Monsieur Martel',de:'Herr Martel',deP:'Er',say:'Il est dans la classe.'}),
 mc('«<u>Théo et Karim</u> sont de Berlin.» – Welches Pronomen ersetzt <b>Théo et Karim</b>?',['Ils','Elles','Il','Nous'],'Théo et Karim = <b>zwei Jungen</b> → <b>ils</b>.',{grp:'B1',lv:1,dx:NH,noun:'Théo et Karim',de:'Théo und Karim',deP:'Sie',say:'Ils sont de Berlin.'}),
 mc('«<u>Clara et Théo</u> sont amis.» – Ein Mädchen und ein Junge. Welches Pronomen passt?',['Ils','Elles','Il','Elle'],'Clara et Théo ist eine <b>gemischte Gruppe</b> → <b>ils</b>. Sobald ein Junge dabei ist, nimmt man ils.',{grp:'B1',lv:1,dx:NH,noun:'Clara et Théo',mixed:true,de:'Clara und Théo',deP:'Sie',say:'Ils sont amis.'}),
 mc('In der Aufgabe steht: „<b>Ersetze</b> durch ein Pronomen.“ Was sollst du tun?',['Die Person (mit Artikel) gegen il / elle / ils / elles austauschen – der Rest bleibt gleich.','Den Satz noch einmal genau abschreiben.','Den Satz ins Deutsche übersetzen.','Die Wörter am Ende des Satzes ändern.'],'<b>Ersetzen = austauschen.</b> Les filles → Elles. Nur die Person wird ausgetauscht (und das Verb passend gemacht), alles andere bleibt gleich.',{grp:'B1',lv:1}),
 mc('Ersetze durch ein Pronomen: «<u>Les filles</u> sont dans la cour.» Welcher Satz ist richtig?',['Elles sont dans la cour.','Les filles sont à la cour.','Elles est dans la cour.','Elles sont à la cour.'],'Les filles → <b>Elles</b>, das Verb bleibt <b>sont</b> (mehrere), und der Rest <b>dans la cour</b> bleibt genau gleich.',{grp:'B1',lv:1,dx:NH,noun:'Les filles',de:'Die Mädchen',deP:'Sie',say:'Elles sont dans la cour.'}),
 gap('Ersetze durch ein Pronomen: «<u>Théo et Karim</u> sont dans la classe.»','{0} {1} dans la classe.',[['Ils','Elles','Il'],['sont','est','sommes']],'Théo et Karim (zwei Jungen) → <b>Ils</b> → Verb <b>sont</b>. „dans la classe“ bleibt.',{grp:'B2',lv:2,dx:NH,noun:'Théo et Karim',de:'Théo und Karim',deP:'Sie'}),
 gap('Ersetze durch ein Pronomen: «<u>Jade et Yasmine</u> sont amies.»','{0} {1} amies.',[['Elles','Ils','Elle'],['sont','est','es']],'Jade et Yasmine (zwei Mädchen) → <b>Elles</b> → <b>sont</b>. „amies“ bleibt.',{grp:'B2',lv:2,dx:NH,noun:'Jade et Yasmine',de:'Jade und Yasmine',deP:'Sie'}),
 gap('Ersetze durch ein Pronomen: «<u>Le professeur</u> est dans la classe.»','{0} est {1} la classe.',[['Il','Elle','Le'],['dans','à','de']],'Le professeur (ein Mann) → <b>Il</b>. Und <b>dans</b> la classe bleibt dans – der Rest ändert sich nicht.',{grp:'B2',lv:2,dx:NH,noun:'Le professeur',de:'Der Lehrer',deP:'Er'}),
 gap('Ersetze durch ein Pronomen: «<u>Clara et Léo</u> sont dans la cour.»','{0} {1} dans la cour.',[['Ils','Elles','Elle'],['sont','est','êtes']],'Clara et Léo = gemischt (Mädchen + Junge) → <b>Ils</b> → <b>sont</b>.',{grp:'B2',lv:2,dx:NH,noun:'Clara et Léo',mixed:true,de:'Clara und Léo',deP:'Sie'}),
 wr('Ersetze das Unterstrichene durch ein Pronomen und schreibe den ganzen Satz: «<u>Les filles</u> sont dans la cour.»',['Elles sont dans la cour.'],'Les filles = mehrere Mädchen → <b>Elles</b>. Verb: <b>sont</b>. Rest Wort für Wort: <b>dans la cour</b>.',{grp:'B3',lv:3,must:true,dx:NH,noun:'Les filles',de:'Die Mädchen',deP:'Sie',ph:'… sont dans la cour.'}),
 wr('Ersetze das Unterstrichene durch ein Pronomen: «<u>Monsieur Martel</u> est dans la classe.»',['Il est dans la classe.'],'Monsieur Martel = ein Mann → <b>Il</b> → <b>est</b>. Der Rest „dans la classe“ bleibt.',{grp:'B3',lv:3,dx:NH,noun:'Monsieur Martel',de:'Herr Martel',deP:'Er'}),
 wr('Ersetze das Unterstrichene durch ein Pronomen: «<u>Théo et Clara</u> sont dans la cour.»',['Ils sont dans la cour.'],'Théo et Clara = gemischte Gruppe → <b>Ils</b> → <b>sont</b>. Rest gleich: dans la cour.',{grp:'B3',lv:3,dx:NH,noun:'Théo et Clara',mixed:true,de:'Théo und Clara',deP:'Sie'}),
 wr('Ersetze das Unterstrichene durch ein Pronomen: «<u>Madame Fournier</u> est la surveillante.»',['Elle est la surveillante.'],'Madame Fournier = eine Frau → <b>Elle</b> → <b>est</b>. Rest gleich: la surveillante.',{grp:'B3',lv:3,dx:NH,noun:'Madame Fournier',de:'Frau Fournier',deP:'Sie'}),
 wr('Ersetze das Unterstrichene durch ein Pronomen: «<u>Les garçons</u> sont de Berlin.»',['Ils sont de Berlin.'],'Les garçons = mehrere Jungen → <b>Ils</b> → <b>sont</b>. Rest gleich: de Berlin.',{grp:'B3',lv:3,dx:NH,noun:'Les garçons',de:'Die Jungen',deP:'Sie'}),
 /* C · le professeur / Monsieur */
 mc('Monsieur Martel ist ein <b>Mann</b>. Welcher Satz ist richtig?',['Monsieur Martel est le professeur de français.','Monsieur Martel est la professeur de français.','Monsieur Martel est les professeur de français.','Monsieur Martel est l’professeur de français.'],'Ein Mann → <b>le</b> professeur (der Lehrer).',{grp:'C1',lv:1,dx:NH,say:[['Martel','Monsieur Martel est le professeur de français.']]}),
 mc('Wie schreibt man „<b>Herr</b> Martel“ auf Französisch?',['Monsieur Martel','Mr Martel','Mister Martel','Madame Martel'],'Herr = <b>Monsieur</b> (abgekürzt M.). „Mr“ und „Mister“ sind Englisch, „Madame“ heißt Frau.',{grp:'C1',lv:1,dx:NH,say:'Monsieur Martel'}),
 mc('Wie sagt man „<b>Frau</b> Fournier“ auf Französisch?',['Madame Fournier','Mrs Fournier','Monsieur Fournier','Miss Fournier'],'Frau = <b>Madame</b> (abgekürzt Mme). „Mrs“ und „Miss“ sind Englisch.',{grp:'C1',lv:1,dx:NH,say:'Madame Fournier'}),
 gap('Wähle die richtigen Wörter.','{0} Martel est {1} professeur de français.',[['Monsieur','Mr','Madame'],['le','la','les']],'Herr = <b>Monsieur</b>; ein Mann → <b>le</b> professeur.',{grp:'C2',lv:2,dx:NH}),
 det('Fehlerdetektiv: Finde die 2 Fehler.','[Mr|Monsieur] Martel est [la|le] professeur de français.','Mr ist Englisch → <b>Monsieur</b>. Ein Mann → <b>le</b> professeur.',{grp:'C2',lv:2,dx:NH}),
 wr('Verbessere den Satz: «Mr Martel est la professeur de français.»',['Monsieur Martel est le professeur de français.','M. Martel est le professeur de français.'],'Zwei Sachen: Herr = <b>Monsieur</b> (nicht Mr) und Monsieur Martel ist ein Mann → <b>le</b> professeur.',{grp:'C3',lv:3,dx:NH}),
 wr('Übersetze: „Frau Fournier ist die Aufsicht.“',['Madame Fournier est la surveillante.','Mme Fournier est la surveillante.'],'Frau = <b>Madame</b>, dann direkt <b>est</b>, dann <b>la surveillante</b> (eine Frau → la).',{grp:'C3',lv:3,dx:NH}),
]},
];
window.TEST_EX=[
 gapw('Ergänze die Formen von être.','1. Je {0} élève. 2. Tu {1} de Berlin? 3. Yasmine {2} en sixième A. 4. Nous {3} dans la cour. 5. Vous {4} nouveaux? 6. Lucas et Karim {5} amis.',[['suis'],['es'],['est'],['sommes'],['êtes'],['sont']],'suis · es · est · sommes · êtes · sont.',{ref:'formen',tag:'Formen von être'}),
 wr('Übersetze: „Wir sind in der 6A.“',['Nous sommes en sixième A.','On est en sixième A.','Nous sommes en 6e A.','On est en 6e A.','Nous sommes en sixième.','On est en sixième.'],'„Wir sind“ = <b>nous sommes</b> (oder <b>on est</b> – beides richtig). „in der 6A“ = <b>en sixième A</b>.',{ref:'formen',tag:'Übersetzen'}),
 wr('Übersetze: „Herr Martel ist der Französischlehrer.“',['Monsieur Martel est le professeur de français.','M. Martel est le professeur de français.'],'Monsieur Martel est le professeur de français.',{ref:'schwer',tag:'Übersetzen'}),
 det('Fehlerdetektiv: Finde die 4 Fehler.','Bonjour! Je [suit|suis] Jade. Yasmine et moi, nous [somme|sommes] en sixième A. Clara [es|est] là. Karim et Noah [est|sont] dans la cour.','suis · sommes · est · sont.',{ref:'fehler',tag:'Fehler finden'}),
 wr('Setze in den Plural: «Elle est nouvelle.»',['Elles sont nouvelles.'],'elle est → elles sont; nouvelle → nouvelles.',{ref:'schwer',tag:'Plural'}),
];
/* Pro Durchgang: so viele Aufgaben je Kapitel (Rest = Reserve-Pool); Pflichtaufgaben zu den Heftfehlern */
H.setRun({entdecken:2,formen:3,pronomen:2,szenen:2,leicht:4,mittel:4,schwer:4,fehler:3,nachholbedarf:13},{fehler:[0],test:[3]});
/* INTRO */
H.setIntro({
_lesson:{t:'être – das Verb „sein“',
 was:'<b>être</b> heißt <b>sein</b> (ich bin, du bist …). Du brauchst es ständig: wenn du sagst, wer du bist, woher du kommst oder wie etwas ist.',
 warum:'In der Klassenarbeit musst du die sechs Formen sicher können – beim Ausfüllen von Lücken, beim Übersetzen und in deinem eigenen Text (<i>Je suis de Berlin.</i>).',
 schritte:['Frag dich zuerst: <b>Wer</b> ist es? (ich, du, er/sie, wir, ihr, sie)','Such das passende <b>Pronomen</b>: je, tu, il / elle / on, nous, vous, ils / elles.','Nimm die Form, die zu diesem Pronomen gehört – <b>être ist unregelmäßig</b>, die Formen musst du auswendig lernen.'],
 tab:'<table class="cj"><tr><td>je <b>suis</b></td><td>ich bin</td></tr><tr><td>tu <b>es</b></td><td>du bist</td></tr><tr><td>il / elle / on <b>est</b></td><td>er / sie / man (wir) ist</td></tr><tr><td>nous <b>sommes</b></td><td>wir sind</td></tr><tr><td>vous <b>êtes</b></td><td>ihr seid / Sie sind</td></tr><tr><td>ils / elles <b>sont</b></td><td>sie sind</td></tr></table>',
 bsp:[['Je suis de Berlin.','Ich bin aus Berlin.'],['Tu es nouveau?','Bist du neu?'],['Clara est en sixième A.','Clara ist in der 6A.'],['Nous sommes ensemble.','Wir sind zusammen.'],['On est ensemble.','Wir sind zusammen. (genauso richtig – on = wir)'],['Vous êtes de Strasbourg?','Seid ihr aus Straßburg?'],['Théo et Karim sont dans la cour.','Théo und Karim sind auf dem Schulhof.']],
 merk:'je suis · tu es · il / elle / on est · nous sommes · vous êtes · ils / elles sont',
 fallen:['<b>on</b> heißt oft „wir“, bekommt aber die Form von il / elle: <b>on est</b> (nie „on sommes“!).','<b>tu es</b> ohne t – <b>il est</b> mit t.','Mehrere Personen (Clara et Jade) → <b>sont</b>, nicht est.','Akzent nicht vergessen: vous <b>ê</b>tes.'],
 check:['Wer ist es? → Pronomen finden (bei Namen: il, elle, ils oder elles).','Passende Form aus dem Merksatz nehmen.','Schreibweise prüfen: t bei est? s bei sommes? Akzent bei êtes?']},
entdecken:{rule:"Vor jeder Form von être steht ein Pronomen oder Name: je suis, tu es, il / elle / on est, nous sommes, vous êtes, ils / elles sont.",t:'Dialog: Formen von être entdecken',
 was:'Im Dialog stellen sich die Kinder am ersten Schultag vor. Dabei kommt <b>être</b> ganz oft vor. Lies mit und achte auf die kleinen Wörter <i>suis, es, est …</i> (🔊 = Aussprache)',
 schritte:['Lies den Dialog einmal ganz (tippe auf 🔊, wenn du die Aussprache hören willst).','Such alle Formen von être (suis, es, est, sommes, êtes, sont).','Schau, welches Pronomen oder welcher Name davor steht.'],
 bsp:[['Je suis le professeur de français.','Ich bin der Französischlehrer.','Martel'],['Tu es Clara?','Bist du Clara?','Martel'],['Oui, c’est moi.','Ja, das bin ich.','Clara'],['Il est de Berlin.','Er ist aus Berlin.','Théo']],
 merk:'Vor jeder Form von être steht ein Pronomen oder ein Name – das zeigt dir, welche Form passt.',
 fallen:['<i>c’est</i> = das ist (c’ + est). Auch hier steckt <b>est</b> drin!'],
 check:['Dialog lesen.','Formen von être suchen.','Fragen beantworten – im Zweifel nochmal nachlesen.']},
formen:{rule:"être ist unregelmäßig – jede Person hat ihre eigene Form: je suis, tu es, il / elle / on est, nous sommes, vous êtes, ils / elles sont.",t:'Die sechs Formen von être',
 was:'Hier lernst du die sechs Formen von être auswendig. Sie sind unregelmäßig – es gibt keinen Bauplan, du musst sie einfach können.',
 schritte:['Sprich jede Form laut mit Pronomen: <i>je suis, tu es …</i>','Achte auf die Schreibweise: <b>es</b> (tu) und <b>est</b> (il) klingen gleich, werden aber anders geschrieben.','Lerne die Formen in der Reihenfolge: je – tu – il/elle/on – nous – vous – ils/elles.'],
 bsp:[['je suis','ich bin'],['tu es','du bist'],['il est · elle est · on est','er ist · sie ist · man ist / wir sind'],['nous sommes','wir sind'],['vous êtes','ihr seid / Sie sind'],['ils sont · elles sont','sie sind']],
 merk:'je suis · tu es · il / elle / on est · nous sommes · vous êtes · ils / elles sont',
 fallen:['tu <b>es</b> – ohne t!','nous somm<b>es</b> – das -es am Ende nicht vergessen.','vous <b>ê</b>tes – mit Akzent (Hütchen).','<b>on est</b> – auch wenn on „wir“ bedeutet.'],
 check:['Pronomen ansehen.','Form aus dem Merksatz sagen.','Schreibweise kontrollieren (t, s, ê).']},
pronomen:{rule:"Ein Name = il oder elle → est. Mehrere Personen = ils oder elles → sont (ein Junge dabei → ils). „… et moi“ = nous → sommes.",t:'Namen durch il, elle, ils, elles ersetzen',
 was:'Oft steht im Satz kein Pronomen, sondern ein <b>Name</b> (Clara, Théo et Karim). Dann musst du selbst überlegen, welches Pronomen dazu passt – und damit die Form von être.',
 schritte:['Wie viele Personen? <b>Eine</b> → il / elle → <b>est</b>. <b>Mehrere</b> → ils / elles → <b>sont</b>.','Junge oder Mädchen? Ein Junge → il, ein Mädchen → elle.','Mehrere: nur Mädchen → <b>elles</b>. Sobald ein Junge dabei ist → <b>ils</b>.','„… et moi“ (… und ich) → <b>nous sommes</b>.'],
 bsp:[['Noah est de Strasbourg.','Noah ist aus Straßburg. (il)'],['Samira est très cool.','Samira ist sehr cool. (elle)'],['Jade et Yasmine sont amies.','Jade und Yasmine sind Freundinnen. (elles)'],['Clara et Léo sont en sixième.','Clara und Léo sind in der 6. Klasse. (ils – ein Junge reicht!)'],['Théo et moi, nous sommes ensemble.','Théo und ich, wir sind zusammen.']],
 merk:'Einer → est. Mehrere → sont. Ein Junge dabei → ils.',
 fallen:['Clara et Jade <b>sont</b> – nicht est! (zwei Personen)','Clara, Jade et Léo → <b>ils</b> (ein Junge reicht).','Théo et moi → <b>nous sommes</b>.'],
 check:['Personen zählen.','Junge/Mädchen prüfen → Pronomen.','Form von être dazu nehmen.']},
szenen:{rule:"Achte auf das Pronomen oder den Namen vor dem Verb: einer → est, mehrere → sont, „wir“ → nous sommes oder on est.",t:'Szenen: être im Gespräch',
 was:'Hier liest du kurze Gespräche auf dem Schulhof und in der Klasse. Du sollst verstehen, wer wer ist, und selbst die richtigen Formen von être einsetzen. (Hör-Aufgaben dazu kommen später im Teil „Hörverstehen“.)',
 schritte:['Lies zuerst die Aufgabe.','Lies das Gespräch – achte auf Namen und auf die Formen von être.','Antworte – Pronomen bestimmen, dann die Form.'],
 bsp:[['C’est qui?','Wer ist das?','Samira'],['C’est Karim. Il est nouveau.','Das ist Karim. Er ist neu.','Léo'],['Ils sont en cinquième.','Sie sind in der 7. Klasse.','Léo'],['On est ensemble!','Wir sind zusammen!','Samira']],
 merk:'C’est qui? – C’est … (Das ist …). Danach: il est / elle est / ils sont.',
 fallen:['<i>en cinquième</i> ist die 7. Klasse (in Frankreich wird rückwärts gezählt), <i>en sixième</i> die 6.','<b>on est</b> = wir sind (umgangssprachlich).'],
 check:['Aufgabe lesen.','Gespräch lesen, auf Namen achten.','Antwort wählen, dann Erklärung lesen.']},
leicht:{rule:"Erst das Pronomen suchen, dann die passende Form: je suis, tu es, il / elle / on est, nous sommes, vous êtes, ils / elles sont.",t:'Training ★: Formen auswählen',
 was:'Hier wählst du die richtige Form von être aus. So prägst du dir die Formen ein.',
 schritte:['Such das Pronomen (oder den Namen) vor der Lücke.','Ersetze einen Namen im Kopf durch il / elle / ils / elles.','Wähle die passende Form.'],
 bsp:[['Je suis Clara.','Ich bin Clara.'],['Tu es de Berlin?','Bist du aus Berlin?'],['Léo et Noah sont là.','Léo und Noah sind da.'],['On est en sixième A.','Wir sind in der 6A.']],
 merk:'je suis · tu es · il / elle / on est · nous sommes · vous êtes · ils / elles sont',
 fallen:['Nach <b>on</b> immer <b>est</b>.','tu es / il est – gleich gesprochen, anders geschrieben.'],
 check:['Pronomen finden.','Form sagen.','Antippen.']},
mittel:{rule:"Pronomen bestimmen, Form schreiben – und auf die Schreibweise achten: tu es (ohne t), nous sommes, vous êtes (mit ê), ils sont.",t:'Training ★★: Formen selbst schreiben',
 was:'Jetzt schreibst du die Formen selbst. Dabei zählt jeder Buchstabe – auch der Akzent.',
 schritte:['Pronomen bestimmen (bei Namen: il, elle, ils, elles).','Form schreiben.','Akzent prüfen: <b>ê</b>tes. Endung prüfen: somm<b>es</b>, so<b>nt</b>.'],
 bsp:[['Vous êtes de Strasbourg.','Ihr seid aus Straßburg.'],['Nous sommes amis.','Wir sind Freunde.'],['Elles sont en cinquième.','Sie sind in der 7. Klasse.'],['Il est très cool.','Er ist sehr cool.']],
 merk:'Akzent bei vous êtes – das Hütchen ê gehört dazu.',
 fallen:['„vous etes“ ohne Akzent ist in der Arbeit ein Fehler.','„nous somme“ – das -s fehlt.'],
 check:['Pronomen bestimmen.','Form schreiben – mit den Akzent-Knöpfen.','Noch einmal Buchstabe für Buchstabe lesen.']},
schwer:{rule:"Wer ist es? → Pronomen + passende Form von être. Im Plural ändern sich Pronomen und Verb (il est → ils sont).",t:'Training ★★★: übersetzen und Texte',
 was:'Wie in der Klassenarbeit: Du übersetzt ganze Sätze, setzt sie in den Plural und füllst Texte aus.',
 schritte:['Deutschen Satz genau lesen: Wer ist es?','Pronomen + passende Form von être.','Rest des Satzes übersetzen (Wortstellung wie im Deutschen: wer – ist – Rest).'],
 bsp:[['Nous sommes en sixième A.','Wir sind in der 6A.'],['On est en sixième A.','Wir sind in der 6A. (auch richtig!)'],['Elles sont amies.','Sie (Clara und Jade) sind Freundinnen.'],['Ils sont de Berlin.','Sie sind aus Berlin. (Plural von: Il est de Berlin.)']],
 merk:'„Wir sind …“ kannst du auf zwei Arten sagen: nous sommes … oder on est … – beides ist richtig.',
 fallen:['Plural: Pronomen <b>und</b> Verb ändern (il est → ils sont).','„Wir“ mit on → <b>on est</b>, nicht on sommes.'],
 check:['Wer? → Pronomen.','Form von être.','Satz zu Ende schreiben, Punkt nicht vergessen.']},
fehler:{rule:"Bei jeder Form von être prüfen: Passt sie zum Pronomen davor? Nach on immer est.",t:'Fehlerdetektiv: typische être-Fehler',
 was:'In jedem Text stecken Fehler, die oft passieren. Finde sie – so passieren sie dir in der Arbeit nicht.',
 schritte:['Lies jeden Satz langsam.','Prüfe bei jeder Form von être: Passt sie zum Pronomen davor?','Tippe die falschen Wörter an.'],
 bsp:[['je suis','nicht: <s>je es</s> – zu je gehört suis'],['tu es','nicht: <s>tu est</s> – bei tu kein t'],['ils sont','nicht: <s>ils est</s> – mehrere → sont'],['on est','nicht: <s>on sommes</s> – nach on immer est']],
 merk:'Bei jedem Verb fragen: Wer? – Passt die Form dazu?',
 fallen:['<b>on sommes</b> klingt richtig, ist aber falsch → <b>on est</b>.','<b>vous etes</b> → vous <b>ê</b>tes.'],
 check:['Satz lesen.','Pronomen + Verb prüfen.','Fehler antippen.']},
nachholbedarf:{t:'Nachholbedarf 1 – deine 3 Stolpersteine',rule:'Wer? › Verb › Rest · Ersetzen: Person raus, Pronomen rein, Rest gleich · Monsieur → le professeur.',
 vis:V.skel([['🚂','Satzbau','Wer › Verb › Rest'],['🔄','Ersetzen','les filles → elles'],['👨‍🏫','Monsieur','le professeur']]),
 was:'Drei Sachen aus deinem Test – hier übst du genau die.',
 warum:'Alle drei kommen in der Arbeit wieder dran: sichere Punkte!',
 merk:'Wer › Verb › Rest · Ersetzen = austauschen · Monsieur → le professeur',
 parts:[
 {h:'Satzbau: Wer › Verb › Rest',
  vis:V.train('Monsieur Martel/s|est/v|le professeur de français./r',{labels:true,ok:true,who:'Martel'}),
  was:'Ein Satz ist wie ein Zug: erst <b>Wer?</b>, dann das <b>Verb</b>, dann der <b>Rest</b>.',
  warumVis:'<div class="cmp2"><span class="c2-f">🇩🇪</span>'+V.train('Herr Martel/s|ist/v|der Lehrer./r',{say:false})+'</div><div class="cmp2"><span class="c2-f">🇫🇷</span>'+V.train('Monsieur Martel/s|est/v|le professeur./r',{who:'Martel'})+'</div>',
  warum:'Wie im deutschen Hauptsatz: Das Verb steht gleich hinter dem Wer – nie am Ende.',
  schritte:[[V.b('Monsieur Martel','s'),'<b>Wer?</b> zuerst'],[V.b('est','v'),'<b>Verb</b> direkt dahinter'],[V.b('le professeur …','r'),'dann der <b>Rest</b>']],
  bsp:[['Monsieur Martel est le professeur de français.','Herr Martel ist der Französischlehrer.','Martel'],['Jade et Yasmine sont dans la cour.','Jade und Yasmine sind auf dem Schulhof.'],['Je suis de Berlin.','Ich bin aus Berlin.'],['Madame Fournier est la surveillante.','Frau Fournier ist die Aufsicht.','Fournier']],
  merk:'Wer › Verb › Rest – das Verb nie ans Ende.',
  fallen:[['Monsieur Martel/s|le professeur de français/r|est./v','Monsieur Martel/s|est/v|le professeur de français./r','<b>est</b> gehört direkt hinter Monsieur Martel.']]},
 {h:'Ersetzen durch ein Pronomen',
  vis:V.swap({fig:'ff',noun:'Les filles',pron:'Elles',verb:'sont',rest:'dans la cour.',de:'Die Mädchen sind … → <b>Sie</b> sind …'}),
  was:'Ersetzen = austauschen: Person raus, Pronomen rein. Der Rest bleibt 🔒.',
  warumVis:V.pronouns(),
  warum:'So wiederholt man keine Namen – wie „er / sie“ im Deutschen.',
  schritte:[[V.fig('ff'),'<b>Wer</b> ist gemeint?'],['<span class="big-ic">👤 / 👥</span>','<b>Einer</b> oder <b>mehrere</b>? Junge oder Mädchen?'],[V.b('elles','p'),'Pronomen wählen'],[V.b('sont','v'),'Verb anpassen: il / elle → est · ils / elles → sont'],['<span class="big-ic">🔒</span>','Rest <b>genau</b> abschreiben']],
  bsp:[['Elles sont dans la cour.','aus: Les filles … – Sie sind auf dem Schulhof.','',V.fig('ff')],['Il est dans la classe.','aus: Monsieur Martel … – Er ist in der Klasse.','',V.fig('M')],['Elle est la surveillante.','aus: Madame Fournier … – Sie ist die Aufsicht.','',V.fig('F')],['Ils sont amis.','aus: Clara et Théo … – gemischt → ils','',V.fig('fm')]],
  merk:'Person raus, Pronomen rein, Verb anpassen – Rest 🔒.',
  fallen:[['les filles/s|sont/v|a la cour/r','Elles/p|sont/v|dans la cour./r','<b>les filles</b> ersetzen – und <b>dans</b> bleibt dans.'],['Clara et Théo/s|elles/p','Clara et Théo/s|ils/p','Ein Junge dabei → <b>ils</b>.']]},
 {h:'le professeur · Monsieur · Madame',
  vis:'<div class="aset"><span class="ocard oc-m">'+V.who('Martel')+'<span class="oc-t">Monsieur Martel<br>'+V.art('le')+' professeur</span></span><span class="ocard oc-f">'+V.who('Fournier')+'<span class="oc-t">Madame Fournier<br>'+V.art('la')+' surveillante</span></span></div>',
  was:'Herr = <b>Monsieur</b>, Frau = <b>Madame</b>. Ein Mann → <b>le</b> professeur.',
  warumVis:'<div class="flagcmp"><span class="fc bad">🇬🇧 <s>Mr</s> · <s>Mrs</s></span><span class="fc ok">🇫🇷 <b>Monsieur</b> · <b>Madame</b></span></div>',
  warum:'Mr ist Englisch. Bei Personen zeigt der Artikel: Mann oder Frau.',
  schritte:[[V.fig('M'),'<b>Mann</b> oder <b>Frau</b>?'],[V.art('le')+' / '+V.art('la'),'Mann → le · Frau → la'],['<span class="big-ic">🇫🇷</span>','Anrede: Monsieur (M.) · Madame (Mme)']],
  bsp:[['Monsieur Martel est le professeur de français.','Herr Martel ist der Französischlehrer.','Martel'],['Bonjour, Monsieur!','Guten Tag! (zu einem Mann)','',V.fig('M')],['Bonjour, Madame!','Guten Tag! (zu einer Frau)','Fournier',V.fig('F')],['Madame Fournier est la surveillante.','Frau Fournier ist die Aufsicht.','Fournier']],
  merk:'Monsieur … → le professeur · nie Mr.',
  fallen:[['Mr Martel est la professeur.','Monsieur Martel est le professeur.','Mr → <b>Monsieur</b> · la → <b>le</b> (ein Mann).']]}],
 ende:'Mach die Extra-Übung, bis du sie <b>2× hintereinander mit über 90 %</b> schaffst – dann sitzt es.'}
});
(function(){const W=window,V=window.V;
/* Bildliche Erklärungen (feste Vorlage) – être */
H.patchIntro({
_lesson:{tab:'',vis:V.etreGrid(),
 was:'<b>être</b> = <b>sein</b>. Jede Person hat ihre eigene Form.',
 warumVis:V.train('Je/s|suis/v|de Berlin./r',{labels:true}),
 warum:'Du brauchst être ständig: wer du bist, woher du kommst, wo jemand ist.',
 schritte:[[V.fig('mf'),'<b>Wer?</b> Person bestimmen'],[V.b('il','p'),'Pronomen finden (bei Namen: il, elle, ils, elles)'],[V.b('est','v'),'die passende Form nehmen']],
 merk:'je suis · tu es · il / elle / on est · nous sommes · vous êtes · ils / elles sont',
 fallen:[['on sommes ensemble.','On est ensemble.','<b>on</b> = wir, aber Form von il → <b>est</b>.'],['Tu est de Berlin?','Tu es de Berlin?','tu <b>es</b> – ohne t.'],['Clara et Jade est là.','Clara et Jade sont là.','Zwei Personen → <b>sont</b>.']]},
entdecken:{vis:H.dlg?'<div class="aset">'+V.who(['Martel','Clara','Théo'])+'</div>'+V.train('Je/s|suis/v|le professeur./r',{who:'Martel'}):'',
 was:'Erster Schultag: Alle stellen sich vor – und benutzen <b>être</b>.',
 warum:'Vor jeder Form steht ein <b>Wer</b>: Daran erkennst du die Form.',
 schritte:[['<span class="big-ic">📖</span>','Dialog lesen (🔊 = Aussprache)'],[V.b('suis','v')+V.b('est','v'),'Formen von être suchen'],[V.b('Je','s'),'Wer steht davor?']],
 fallen:[['C est moi.','C’est moi.','<b>c’est</b> = c’ + est – mit Apostroph.']]},
formen:{vis:V.etreGrid(),
 was:'Sechs Formen – unregelmäßig, also auswendig lernen.',
 warumVis:'<div class="aset">'+V.b('tu','p')+V.b('es','v')+' <span class="big-ic">≈</span> '+V.b('il','p')+V.b('est','v')+'</div>',
 warum:'Manche klingen gleich, werden aber anders geschrieben.',
 schritte:[['<span class="big-ic">🗣️</span>','laut mit Pronomen sprechen'],[V.b('es','v')+' / '+V.b('est','v'),'Schreibweise prüfen'],['<span class="big-ic">🔁</span>','Reihe: je – tu – il – nous – vous – ils']],
 fallen:[['Tu est nouveau?','Tu es nouveau?','tu <b>es</b> – ohne t.'],['Vous etes de Strasbourg?','Vous êtes de Strasbourg?','vous <b>ê</b>tes – mit Hütchen.'],['Nous somme amis.','Nous sommes amis.','somm<b>es</b> – mit -es.']]},
pronomen:{vis:V.pronouns(),
 was:'Steht ein <b>Name</b> da, ersetzt du ihn im Kopf durch il, elle, ils oder elles.',
 warumVis:V.swap({fig:'mf',noun:'Clara et Léo',pron:'Ils',verb:'sont',rest:'en sixième.'}),
 warum:'Das Pronomen zeigt dir die richtige Form von être.',
 schritte:[['<span class="big-ic">👤 / 👥</span>','<b>Einer</b> → est · <b>mehrere</b> → sont'],[V.fig('m')+V.fig('f'),'Junge → il · Mädchen → elle'],[V.fig('mf'),'gemischt → <b>ils</b>']],
 merk:'Einer → est · mehrere → sont · ein Junge dabei → ils',
 fallen:[['Clara et Jade est amies.','Clara et Jade sont amies.','Zwei Personen → <b>sont</b>.'],['Théo et moi, ils sont là.','Théo et moi, nous sommes là.','„… et moi“ → <b>nous sommes</b>.']]},
szenen:{vis:'<div class="aset">'+V.who(['Samira','Léo'])+'</div>'+V.train('C’/s|est/v|Karim./r',{who:'Léo'})+V.train('Il/s|est/v|nouveau./r',{who:'Léo'}),
 was:'Kurze Gespräche: <i>C’est qui? – C’est Karim. Il est nouveau.</i>',
 warum:'So stellst du Leute vor: erst <b>C’est …</b>, dann <b>il / elle est …</b>.',
 schritte:[['<span class="big-ic">❓</span>','Aufgabe lesen'],['<span class="big-ic">💬</span>','Gespräch lesen: Namen + être'],[V.b('il','p')+V.b('est','v'),'Pronomen → Form']],
 fallen:[['Il est Karim.','C’est Karim.','Name vorstellen → <b>C’est</b> …']]},
leicht:{vis:V.etreGrid(),
 was:'Du wählst die passende Form von être aus.',
 warum:'Antippen prägt die Formen ein – ohne Schreibstress.',
 schritte:[[V.b('Je','s'),'Wer steht vor der Lücke?'],[V.b('il','p'),'Name → il / elle / ils / elles'],[V.b('suis','v'),'Form wählen']],
 fallen:[['On sommes en sixième A.','On est en sixième A.','Nach <b>on</b> immer <b>est</b>.']]},
mittel:{vis:V.train('Vous/s|êtes/v|de Strasbourg./r',{labels:true}),
 was:'Jetzt schreibst du die Formen selbst – jeder Buchstabe zählt.',
 warum:'In der Arbeit musst du sie richtig schreiben, auch mit Akzent.',
 schritte:[[V.b('vous','p'),'Pronomen bestimmen'],[V.b('êtes','v'),'Form schreiben'],['<span class="big-ic">ê</span>','Akzent und Endung prüfen']],
 fallen:[['Vous etes de Strasbourg.','Vous êtes de Strasbourg.','<b>ê</b> gehört dazu.'],['Nous somme amis.','Nous sommes amis.','Das -s fehlt.']]},
schwer:{vis:'<div class="cmp2"><span class="c2-f">🇩🇪</span>'+V.train('Wir/s|sind/v|in der 6A./r',{say:false})+'</div><div class="cmp2"><span class="c2-f">🇫🇷</span>'+V.train('Nous/s|sommes/v|en sixième A./r')+'</div>',
 was:'Wie in der Arbeit: übersetzen und in den Plural setzen.',
 warum:'Die Reihenfolge ist wie im Deutschen: Wer › Verb › Rest.',
 schritte:[['<span class="big-ic">🇩🇪</span>','Wer ist es?'],[V.b('nous','p')+V.b('sommes','v'),'Pronomen + Form'],[V.b('en sixième A','r'),'Rest übersetzen']],
 merk:'„Wir sind“ = nous sommes oder on est.',
 fallen:[['Il est de Berlin. → Ils est de Berlin.','Ils sont de Berlin.','Plural: Pronomen <b>und</b> Verb ändern.']]},
fehler:{vis:V.vs('ils/p|est/v|de Berlin./r','Ils/p|sont/v|de Berlin./r'),
 was:'Finde typische Fehler – dann passieren sie dir nicht.',
 warum:'Wer Fehler finden kann, macht sie selbst seltener.',
 schritte:[['<span class="big-ic">🔍</span>','Satz langsam lesen'],[V.b('ils','p')+'?'+V.b('sont','v'),'Passt die Form zum Wer?'],['<span class="big-ic">👆</span>','falsche Wörter antippen']],
 fallen:[['Je es Clara.','Je suis Clara.','zu je gehört <b>suis</b>.'],['On sommes ensemble.','On est ensemble.','nach on → <b>est</b>.']]}
});

})();

})();
window.HUBCAP("etre");
(function(){
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
];
window.TEST_EX=[
 gapw('Setze den bestimmten Artikel ein (le, la, l’, les).','1. {0} chaise 2. {1} lit 3. {2} armoire 4. {3} posters 5. {4} garçon 6. {5} école 7. {6} hamac 8. {7} B.D. (Plural)',[['la'],['le'],['l’',"l'"],['les'],['le'],['l’',"l'"],['le'],['les']],'la chaise · le lit · l’armoire · les posters · le garçon · l’école · le hamac · les B.D.',{ref:'regel',tag:'Artikel einsetzen',say:false}),
 wr('Setze in den Plural: «l’élève»',['les élèves'],'les élèves.',{ref:'plural',tag:'Plural'}),
 wr('Setze in den Plural: «le CD»',['les CD'],'les CD – ohne s.',{ref:'plural',tag:'Plural'}),
 wr('Übersetze: „Die Lampe ist im Zimmer.“',['La lampe est dans la chambre.'],'La lampe est dans la chambre.',{ref:'schwer',tag:'Übersetzen'}),
 det('Fehlerdetektiv: Finde die 4 Fehler.','Voilà [le|la] classe de sixième A. [Le|Les] élèves sont dans la cour. [La|L’] étagère est dans [la|le] coin.','la classe · Les élèves · L’étagère · le coin.',{ref:'fehler',tag:'Fehler finden'}),
];
/* Pro Durchgang: so viele Aufgaben je Kapitel (Rest = Reserve-Pool); Pflichtaufgaben zu den Heftfehlern */
H.setRun({entdecken:2,regel:3,plural:2,szenen:2,leicht:4,mittel:4,schwer:4,fehler:3},{fehler:[0],test:[4]});
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
 check:['Lesen.','Prüfen.','Antippen.']}
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
 fallen:[['la armoire','l’armoire','Vokal → <b>l’</b>, egal ob m. oder f.'],['l’ chaise','la chaise','l’ nur vor Vokal.']]},
plural:{vis:'<div class="aset">'+V.obj('livre','le','livre',{n:1})+' <span class="big-ic">→</span> '+V.obj('livre','les','livres')+'</div>',
 was:'Mehrere → immer <b>les</b>, und das Nomen bekommt ein stummes <b>-s</b>.',
 warum:'Das -s hört man nicht – aber man schreibt es.',
 schritte:[[V.art('le')+' / '+V.art('la')+' / '+V.art('l’'),'wird zu '+V.art('les')],['<span class="big-ic">+s</span>','Nomen mit -s'],[V.obj('cd','les','CD',{say:false}),'Ausnahme: les CD, les B.D.']],
 fallen:[['les poster','les posters','-s nicht vergessen.'],['les CDs','les CD','CD und B.D. ohne -s.']]},
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

})();
window.HUBCAP("artikel-bestimmt");
(function(){
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

})();
window.HUBCAP("artikel-unbestimmt");
(function(){
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
bauplan:{vis:V.legoGrid('parler'),
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

})();
window.HUBCAP("verben-er");
(function(){
/* Lektion: Texte schreiben – C'est moi & C'est ma chambre */
const {F,G,conj,dlg,merk,attn,tip,hoer,card,reveal,tabs,track,steps,grp,ob,room,spk,spkLines,writer}=H;
const {mc,pick,gap,gapw,ord,wr,mt,dl,clk,mark,mul,seg,tf,det}=X;
window.LESSON={slug:'texte',readAu:true,title:'Texte schreiben',fr:'C’est moi! · C’est ma chambre!',icon:'✍️',color:'#ca8a04',testN:16,
 intro:'In der Klassenarbeit schreibst du wahrscheinlich einen kurzen Text: <b>dich vorstellen</b> oder <b>dein Zimmer beschreiben</b>. Hier liest du Mustertexte (mit 🔊 für die Aussprache), sammelst Bausteine, baust Sätze – und schreibst dann deinen eigenen Text mit Checkliste.'};
room('jade','La chambre de Jade',[
 ['poster',8,10,42,'des posters',2],['photo',232,22,34,'des photos',2],['hamac',2,94,88,'un hamac'],['lit',90,118,92,'un lit'],
 ['table',186,118,72,'une table'],['ordinateur',204,104,36,'un ordinateur'],['chaise',250,132,46,'une chaise'],
 ['armoire',306,96,72,'une armoire'],['etagere',300,4,94,'une étagère'],['livre',306,10,27,'des livres',3],['bd',306,54,27,'des B.D.',3],
 ['minichaine',58,184,40,'une minichaîne'],['cd',104,198,22,'des CD',3],['pierre',196,190,26,'des pierres (la collection)',3]],{wx:140,wall:'#ede9fe'});
window.TRACKS={
 leo:{title:'Léo: «C’est moi!»',kind:'Mustertext 1',open:true,intro:'Lies mit (🔊 = Aussprache). Achte darauf, wie Léo seinen Text aufbaut.',lines:[
  ['Léo','Salut! Je me présente: c’est moi, Léo.','Hallo! Ich stelle mich vor: Das bin ich, Léo.'],
  ['Léo','Je suis de Berlin.','Ich komme aus Berlin.'],
  ['Léo','Je suis élève à Strasbourg. Je suis en sixième A.','Ich bin Schüler in Straßburg. Ich bin in der 6A.'],
  ['Léo','Le professeur de français, c’est Monsieur Martel. Il est très cool.','Der Französischlehrer ist Herr Martel. Er ist sehr cool.'],
  ['Léo','Voilà Lucas. Lucas et moi, nous sommes ensemble dans la classe.','Das ist Lucas. Lucas und ich sind zusammen in der Klasse.'],
  ['Léo','À la maison, je regarde des B.D. et j’écoute des CD.','Zu Hause schaue ich Comics an und höre CDs.'],
  ['Léo','Je téléphone à Lucas et nous parlons ensemble.','Ich rufe Lucas an und wir reden zusammen.'],
  ['Léo','Et toi? Tu t’appelles comment? Au revoir!','Und du? Wie heißt du? Auf Wiedersehen!']]},
 jade:{title:'Jade: «C’est ma chambre!»',kind:'Mustertext 2',open:true,intro:'Lies mit (🔊 = Aussprache). Schau dabei auf das Bild von Jades Zimmer.',lines:[
  ['Jade','Salut! C’est Jade. Voilà ma chambre!','Hallo! Hier ist Jade. Das ist mein Zimmer!'],
  ['Jade','Dans ma chambre, il y a un lit, une armoire et une étagère.','In meinem Zimmer gibt es ein Bett, einen Schrank und ein Regal.'],
  ['Jade','Dans l’étagère, il y a des livres et des B.D.','Im Regal gibt es Bücher und Comics.'],
  ['Jade','Et voilà ma collection de pierres!','Und hier ist meine Steinsammlung!'],
  ['Jade','Là, dans le coin, il y a une table, une chaise et un ordinateur.','Da, in der Ecke, gibt es einen Tisch, einen Stuhl und einen Computer.'],
  ['Jade','Dans le coin musique, il y a une minichaîne et des CD.','In der Musikecke gibt es eine Mini-Stereoanlage und CDs.'],
  ['Jade','J’écoute des CD et je regarde des photos.','Ich höre CDs und schaue Fotos an.'],
  ['Jade','Il y a des posters partout.','Überall gibt es Poster.'],
  ['Jade','Et voilà le hamac – c’est trop cool!','Und hier ist die Hängematte – das ist total cool!'],
  ['Jade','Et toi? Qu’est-ce qu’il y a dans ta chambre?','Und du? Was gibt es in deinem Zimmer?']]},
};
const LEO=window.TRACKS.leo.lines, JADE=window.TRACKS.jade.lines;
const L2=l=>l.map(x=>[x[0],x[1]]);
const RM=(rows)=>`<table class="t rm">${rows.map(([k,fr])=>`<tr><th>${k}</th><td>${[].concat(fr).map(x=>F(x)).join(' ')}</td></tr>`).join('')}</table>`;
window.WRITERS={
 moi:{title:'Mein Text: «C’est moi!»',who:'Léo',hint:'Schreibe mindestens 5–8 Sätze über dich. Tippe auf die Bausteine und ergänze sie (… = deine Angaben). Die Checkliste hakt automatisch ab, was schon drin ist. Dein Text wird auf diesem Gerät gespeichert.',
  frame:[['Bonjour!','Begrüßung'],['Salut!','Begrüßung'],['Je me présente: c’est moi, …','Ich stelle mich vor'],['Je m’appelle …','Ich heiße …'],['Je suis de …','Ich komme aus …'],['Je suis élève à …','Ich bin Schüler/in in …'],['Je suis en sixième …','Ich bin in der 6 …'],['Le professeur de français, c’est …','Lehrer/in'],['Il est très cool.','Er ist sehr cool.'],['Elle est très cool.','Sie ist sehr cool.'],['Voilà … . … et moi, nous sommes ensemble dans la classe.','Freund/in'],['À la maison, je regarde …','zu Hause'],['J’écoute …','Ich höre …'],['Je téléphone à …','Ich rufe … an'],['Et toi? Tu t’appelles comment?','Frage am Schluss'],['Au revoir!','Verabschiedung']],
  checks:[['Begrüßung (Bonjour! / Salut!)','bonjour|salut'],['Name (Je m’appelle … / c’est moi, …)','m.\\s?appelle|c.\\s?est moi'],['Herkunft (Je suis de …)','je suis de'],['Schule oder Klasse (élève … / en sixième …)','[ée]l[eè]ve|sixi[eè]me|classe'],['mind. 3 Formen von être (suis, es, est, sommes …)','\\b(suis|es|est|sommes|[eê]tes|sont)\\b',3],['mind. 2 Verben auf -er (regarde, écoute, parle …)','\\b(regard|[ée]cout|t[ée]l[ée]phon|parl|pr[ée]sent)\\w*',2],['Schluss (Et toi? / Au revoir!)','et toi|au revoir'],['mind. 5 Sätze','SENT',5]],
  sample:L2(LEO).map(x=>x[1]),sampleNote:'Das ist Léos Text. Dein Text darf natürlich anders sein – Hauptsache, die Checkliste ist voll!'},
 chambre:{title:'Mein Text: «C’est ma chambre!»',who:'Jade',hint:'Beschreibe dein Zimmer (oder dein Traumzimmer) in mindestens 5–8 Sätzen. Denk an un / une / des!',
  frame:[['Salut! C’est …','Einleitung'],['Voilà ma chambre!','Das ist mein Zimmer!'],['Dans ma chambre, il y a …','In meinem Zimmer gibt es …'],['un lit','m.'],['une armoire','f.'],['une table','f.'],['une chaise','f.'],['une lampe','f.'],['une étagère','f.'],['un ordinateur','m.'],['des livres','Pl.'],['des posters','Pl.'],['Là, il y a …','Da gibt es …'],['Dans le coin, il y a …','In der Ecke …'],['Dans l’étagère, il y a …','Im Regal …'],['Voilà ma collection de …','Sammlung'],['Il y a des posters partout.','überall Poster'],['J’écoute des CD.','Was ich mache'],['Je regarde des B.D.','Was ich mache'],['C’est trop cool!','Das ist total cool!'],['Et toi? Qu’est-ce qu’il y a dans ta chambre?','Frage am Schluss']],
  checks:[['Einleitung (Voilà ma chambre! / C’est ma chambre.)','ma chambre'],['mind. 3× il y a','il y a',3],['mind. 6 Sachen mit un / une / des','\\b(un|une|des)\\s+[a-zàâçéèêëîïôûù]',6],['Wo? (là, dans le coin, dans l’étagère …)','\\blà|dans le coin|dans l.\\s?[ée]tag|dans l.\\s?armoire'],['mind. 1 Verb auf -er (j’écoute, je regarde …)','\\b(regard|[ée]cout|t[ée]l[ée]phon|parl|pr[ée]sent)\\w*'],['Schluss mit Frage (Et toi? …?)','\\?'],['mind. 5 Sätze','SENT',5]],
  sample:L2(JADE).map(x=>x[1]),sampleNote:'Das ist Jades Text. Tipp: Nimm nur Wörter, die du sicher kannst – lieber einfache, richtige Sätze!'},
};
window.CHAPTERS=[
/* ===== Block A ===== */
{id:'moi-text',block:'Teil A · C’est moi!',kind:'Mustertext',icon:'🙋',title:'Léo stellt sich vor',sub:'Lesen und verstehen (🔊 = Aussprache)',lv:1,
html:track('leo')+tip('Lies den Text zweimal: einmal mit Ton, einmal leise. Tippe auf 🔊 neben einem Satz, um ihn einzeln zu hören.','📖')
 +reveal('🔍 Wie ist Léos Text aufgebaut?',steps(['<b>Begrüßung</b> und <b>Name</b>: Salut! Je me présente: c’est moi, Léo.','<b>Herkunft</b>: Je suis de Berlin.','<b>Schule und Klasse</b>: Je suis élève à Strasbourg. Je suis en sixième A.','<b>Lehrer</b> und <b>Freund</b>: Le professeur de français, c’est … / Voilà Lucas …','<b>Zu Hause</b> (Verben auf -er): je regarde, j’écoute, je téléphone …','<b>Schluss</b> mit Frage: Et toi? Tu t’appelles comment? Au revoir!'])),
ex:[
 tf('Richtig oder falsch? (Lies den Text.)',[['Léo est de Berlin.',true],['Léo est en cinquième.',false],['Le professeur de français, c’est Madame Fournier.',false],['Lucas et Léo sont ensemble dans la classe.',true],['À la maison, Léo regarde des B.D.',true]],'Léo ist in der <b>sixième</b> A, der Lehrer ist <b>Monsieur Martel</b>.',{au:'T:leo'}),
 mc('Woher kommt Léo?',['aus Berlin','aus Straßburg','aus Paris','Das steht nicht im Text.'],'«Je suis de Berlin.»',{au:'T:leo'}),
 mc('Was macht Léo zu Hause? (2 Dinge passen – wähle die Antwort mit beiden.)',['Er schaut Comics an und hört CDs.','Er spielt Gitarre und schaut Fotos an.','Er hört CDs und spricht Deutsch.','Er schaut Fotos an und ruft Clara an.'],'«À la maison, je regarde des B.D. et j’écoute des CD.»'),
 mc('Mit welchem Satz <b>beginnt</b> man eine Selbstvorstellung?',['Salut! Je me présente: c’est moi, Léo.','Au revoir!','Et toi? Tu t’appelles comment?','Il est très cool.'],'Am Anfang: Begrüßung und Name.',{fr:true}),
 mul('Tippe alle Formen von <b>être</b> an, die in Léos Text vorkommen.',[['je suis',1],['il est',1],['nous sommes',1],['c’est',1],['vous êtes',0],['ils sont',0]],'Im Text: je suis, c’est, il est, nous sommes.'),
 mul('Tippe alle <b>Verben auf -er</b> an, die in Léos Text vorkommen.',[['je regarde',1],['j’écoute',1],['je téléphone',1],['nous parlons',1],['je suis',0],['il y a',0]],'regarde, écoute, téléphone, parlons – alle Verben auf -er. «je suis» ist être.'),
 seg('Welcher Teil des Textes ist das?',['Anfang','Mitte','Schluss'],[['Salut! Je me présente.','Anfang'],['Je suis en sixième A.','Mitte'],['Au revoir!','Schluss'],['À la maison, j’écoute des CD.','Mitte']],'Anfang: Begrüßung · Mitte: Infos über dich · Schluss: Frage und Verabschiedung.'),
 mt('Was bedeutet das?',[['Je me présente.','Ich stelle mich vor.'],['Je suis de Berlin.','Ich komme aus Berlin.'],['Je suis en sixième A.','Ich bin in der 6A.'],['Tu t’appelles comment?','Wie heißt du?']],'Diese Sätze brauchst du für deinen eigenen Text.',{say:[['Léo','Je me présente. Je suis de Berlin. Je suis en sixième A. Tu t’appelles comment?']]}),
]},
{id:'moi-bausteine',kind:'Redemittel',icon:'🧱',title:'Bausteine: sich vorstellen',sub:'Die wichtigsten Sätze zum Anhören',lv:1,
html:card('Redemittel – C’est moi!','🧰',RM([['Begrüßung',['Bonjour!','Salut!']],['Name',['Je me présente: c’est moi, Clara.','Je m’appelle Clara.','Moi, c’est Clara.','Clara, avec un C.']],['Herkunft',['Je suis de Berlin.']],['Schule',['Je suis élève à Strasbourg.','Je suis en sixième A.']],['Lehrer/in',['Le professeur de français, c’est Monsieur Martel.','Il est très cool.','La professeur de français, c’est Madame Fournier.','Elle est très cool.']],['Freunde',['Voilà Karim. Karim et moi, nous sommes ensemble dans la classe.','C’est l’amie de Jade.']],['zu Hause',['À la maison, je regarde des B.D.','J’écoute des CD.','Je téléphone à Lucas.','Je parle avec Clara.']],['Schluss',['Et toi? Tu t’appelles comment?','Au revoir!','Salut!']]]))
 +attn(`<ul><li>${F('Je m’appelle')} – mit Apostroph und <b>ll</b> (nicht <s>Je mapelle</s>).</li><li>${F('Je suis de Berlin.')} – Herkunft mit <b>de</b> (nicht <s>Je suis von Berlin</s>).</li><li>${F('j’écoute')} – vor Vokal <b>j’</b> (nicht <s>je écoute</s>).</li><li>${F('il est')} = er ist – nicht mit <b>et</b> (und) verwechseln!</li></ul>`),
ex:[
 seg('Wozu gehört der Satz?',['Name','Herkunft','Schule','zu Hause'],[['Je m’appelle Yasmine.','Name'],['Je suis de Berlin.','Herkunft'],['Je suis en sixième A.','Schule'],['Je regarde des B.D.','zu Hause'],['Moi, c’est Karim.','Name']],'Name: Je m’appelle … / Moi, c’est … · Herkunft: Je suis de … · Schule: en sixième … · zu Hause: Verben auf -er.'),
 mc('Wie sagst du: „Ich komme aus Berlin.“?',['Je suis de Berlin.','Je suis à Berlin.','Je m’appelle Berlin.','C’est Berlin.'],'Herkunft: Je suis <b>de</b> …',{fr:true}),
 mc('Wie fragst du: „Wie heißt du?“',['Tu t’appelles comment?','Tu es comment?','Comment est-ce qu’on dit?','C’est qui?'],'Tu t’appelles comment?',{fr:true}),
 mc('Wie sagst du: „Ich bin in der 6B.“?',['Je suis en sixième B.','Je suis sixième B.','Je suis dans sixième B.','J’ai sixième B.'],'Je suis <b>en</b> sixième B.',{fr:true}),
 gap('Ergänze.','Je {0} Samira. Je {1} de Berlin. Je suis {2} sixième A.',[['m’appelle','suis','est'],['suis','m’appelle','es'],['en','à','de']],'Je m’appelle Samira. Je suis de Berlin. Je suis en sixième A.'),
 gap('Ergänze.','Le professeur de français, {0} Monsieur Martel. Il {1} très cool.',[['c’est','il est','et'],['est','et','es']],'c’est Monsieur Martel · Il est très cool.'),
 ord('Bilde den Satz.',['Je','suis','élève','à','Strasbourg','.'],'Je suis élève à Strasbourg.'),
 ord('Bilde den Satz.',['Clara','et','moi',',','nous','sommes','ensemble','dans','la','classe','.'],'Clara et moi, nous sommes ensemble dans la classe.'),
 ord('Bilde den Satz.',['À la maison',',','je','regarde','des','B.D.'],'À la maison, je regarde des B.D.'),
 ord('Bilde die Frage.',['Et','toi','?','Tu','t’appelles','comment','?'],'Et toi? Tu t’appelles comment?'),
 wr('Übersetze: „Ich heiße Noah.“',['Je m’appelle Noah.','Moi, c’est Noah.','C’est moi, Noah.'],'Je m’appelle Noah.',{strict:true}),
 wr('Übersetze: „Zu Hause höre ich CDs.“',['À la maison, j’écoute des CD.','À la maison j’écoute des CD.','J’écoute des CD à la maison.'],'À la maison, j’écoute des CD. – j’ vor Vokal, des CD ohne s.',{strict:true,lv:2}),
]},
{id:'moi-schreiben',kind:'Schreibwerkstatt',icon:'✍️',title:'Dein Text: C’est moi!',sub:'Mit Schreibrahmen und Checkliste',lv:2,
html:steps(['<b>Sammeln:</b> Name, woher, Schule/Klasse, Lehrer/in, Freund/in, was du zu Hause machst.','<b>Schreiben:</b> Tippe auf Bausteine und ergänze sie. Ganze Sätze mit Punkt!','<b>Prüfen:</b> Checkliste voll? Akzente (é, à)? Endungen (je regard<b>e</b>, nous somm<b>es</b>)?','<b>Vergleichen:</b> Erst dann die Beispiellösung öffnen.'])+writer('moi')
 +tip('In der Klassenarbeit hast du keine Bausteine zum Antippen. Schreibe deinen Text deshalb auch einmal mit der Hand ins Heft – am besten ohne Hilfe!','📝'),
ex:[
 wr('Steckbrief → Satz: <b>Name: Lucas</b>',['Je m’appelle Lucas.','Moi, c’est Lucas.','C’est moi, Lucas.','Je me présente: c’est moi, Lucas.'],'Je m’appelle Lucas.',{strict:true}),
 wr('Steckbrief → Satz: <b>Herkunft: Berlin</b>',['Je suis de Berlin.'],'Je suis de Berlin.',{strict:true}),
 wr('Steckbrief → Satz: <b>Klasse: 6A</b>',['Je suis en sixième A.','Je suis en 6e A.'],'Je suis en sixième A.',{strict:true}),
 wr('Steckbrief → Satz: <b>Französischlehrerin: Madame Fournier</b>',['La professeur de français, c’est Madame Fournier.','Le professeur de français, c’est Madame Fournier.','La prof de français, c’est Madame Fournier.'],'La professeur de français, c’est Madame Fournier.',{strict:true,lv:3}),
 wr('Steckbrief → Satz: <b>zu Hause: Comics anschauen</b>',['À la maison, je regarde des B.D.','Je regarde des B.D.','À la maison je regarde des B.D.','Je regarde des B.D. à la maison.','À la maison, je regarde des BD.','Je regarde des BD.'],'À la maison, je regarde des B.D.',{strict:true}),
 mc('Welcher Satz passt <b>nicht</b> in eine Selbstvorstellung?',['Il y a un hamac dans la cour.','Je suis de Berlin.','Je suis en sixième B.','J’écoute des CD.'],'Ein Hamac im Schulhof hat mit dir nichts zu tun 😉',{fr:true}),
 dl('Ergänze den Text.',[['Clara','Bonjour! Je {0}: c’est moi, Clara.'],['Clara','Je {1} de Berlin. Je {2} en sixième A.'],['Clara','Jade et moi, nous {3} ensemble dans la classe.']],[['me présente','m’appelle','présente'],['suis','es','est'],['suis','sommes','es'],['sommes','sont','êtes']],'me présente · suis · suis · sommes.'),
]},
/* ===== Block B ===== */
{id:'chambre-text',block:'Teil B · C’est ma chambre!',kind:'Mustertext',icon:'🛏️',title:'Jade zeigt ihr Zimmer',sub:'Lesen, verstehen, im Bild finden',lv:1,
html:card('La chambre de Jade','🖼️','<div class="roomwrap">'+window.ROOMS.jade.svg+'</div>')+track('jade')
 +reveal('🔍 Wie ist Jades Text aufgebaut?',steps(['<b>Einleitung</b>: Salut! C’est Jade. Voilà ma chambre!','<b>Möbel</b> mit il y a: un lit, une armoire, une étagère …','<b>Wo?</b> Dans l’étagère … / Là, dans le coin … / Dans le coin musique …','<b>Lieblingssachen</b>: ma collection de pierres, le hamac','<b>Was sie macht</b>: J’écoute … / je regarde …','<b>Schluss</b> mit Frage: Et toi? Qu’est-ce qu’il y a dans ta chambre?'])),
ex:[
 mc('Qu’est-ce qu’il y a dans l’étagère de Jade?',['des livres et des B.D.','des CD et une minichaîne','des pierres','un ordinateur'],'«Dans l’étagère, il y a des livres et des B.D.»',{au:'T:jade',fr:true}),
 mc('Voilà ma collection de …?',['pierres','B.D.','CD','posters'],'«Et voilà ma collection de pierres!»',{au:'T:jade',fr:true}),
 mc('Qu’est-ce qu’il y a dans le coin musique?',['une minichaîne et des CD','une guitare et des CD','un ordinateur et une table','des posters'],'«Dans le coin musique, il y a une minichaîne et des CD.»',{au:'T:jade',fr:true}),
 tf('Richtig oder falsch?',[['Dans la chambre de Jade, il y a un hamac.',true],['Il y a une guitare.',false],['Il y a des posters partout.',true],['Dans le coin, il y a une table, une chaise et un ordinateur.',true]],'Eine Gitarre kommt in Jades Text nicht vor.',{au:'T:jade'}),
 mark('Markiere alle Möbel, die Jade im <b>2. Satz</b> nennt.','jade',['lit','armoire','etagere'],'«Dans ma chambre, il y a un lit, une armoire et une étagère.»',{au:[['Jade','Dans ma chambre, il y a un lit, une armoire et une étagère.']]}),
 mt('Was bedeutet das?',[['partout','überall'],['dans le coin','in der Ecke'],['le coin musique','die Musikecke'],['la collection','die Sammlung'],['C’est trop cool!','Das ist total cool!']],'Diese Wörter machen deinen Text lebendig.',{say:[['','partout, dans le coin, le coin musique, la collection, C’est trop cool!']]}),
]},
{id:'chambre-bausteine',kind:'Redemittel',icon:'🧱',title:'Bausteine: mein Zimmer',sub:'il y a + un / une / des, Wo?',lv:2,
html:card('Redemittel – C’est ma chambre!','🧰',RM([['Einleitung',['Salut! C’est Noah.','Voilà ma chambre!','C’est ma chambre.']],['Möbel',['Dans ma chambre, il y a un lit, une table et une chaise.']],['Wo?',['Là, il y a une lampe.','Dans le coin, il y a un ordinateur.','Dans l’étagère, il y a des livres.','Dans l’armoire, il y a des B.D.']],['Lieblingssachen',['Voilà ma collection de figurines!','Dans le coin musique, il y a une guitare.','Il y a des posters partout.']],['Was ich mache',['J’écoute des CD.','Je regarde des photos.']],['Schluss',['C’est trop cool!','Et toi? Qu’est-ce qu’il y a dans ta chambre?']]]))
 +merk('⭐ Merkkasten: il y a + Artikel',`<p>${F('il y a')} = es gibt. Danach steht meist der <b>unbestimmte Artikel</b>:</p><p>${G('un','lit','m')} ${G('une','lampe','f')} ${G('des','posters','p')}</p><p>Aber: ${F('Voilà ma chambre!')} / ${F('Et voilà le hamac.')} – bei voilà kann auch le / la / ma stehen.</p><p>Plural: <b>des</b> + Nomen mit <b>-s</b> (des poster<b>s</b>, des livre<b>s</b>) – Ausnahme: <b>des CD</b>, <b>des B.D.</b></p>`),
ex:[
 gap('Setze un, une oder des ein.','Dans ma chambre, il y a {0} lit, {1} armoire et {2} posters.',[['un','une','des'],['une','un','des'],['des','un','une']],'un lit (m.) · une armoire (f.) · des posters (Pl.).'),
 gap('Setze un, une oder des ein.','Dans le coin, il y a {0} ordinateur et {1} chaise.',[['un','une','des'],['une','un','des']],'un ordinateur (m.) · une chaise (f.).'),
 gap('Setze un, une oder des ein.','Dans l’étagère, il y a {0} livres et {1} globe.',[['des','un','une'],['un','une','des']],'des livres (Pl.) · un globe (m.).'),
 gap('Ergänze.','{0} ma chambre! Dans ma chambre, {1} un hamac. C’est {2} cool!',[['Voilà','Il y a','Regarde'],['il y a','voilà','c’est'],['trop','très','bien']],'Voilà ma chambre! · il y a un hamac · C’est trop cool!'),
 ord('Bilde den Satz.',['Dans','ma','chambre',',','il y a','un','lit','et','une','armoire','.'],'Dans ma chambre, il y a un lit et une armoire.'),
 ord('Bilde den Satz.',['Là',',','dans','le','coin',',','il y a','une','guitare','.'],'Là, dans le coin, il y a une guitare.'),
 ord('Bilde die Frage.',['Qu’est-ce qu’','il y a','dans','ta','chambre','?'],'Qu’est-ce qu’il y a dans ta chambre?'),
 wr('Übersetze: „In meinem Zimmer gibt es einen Tisch.“',['Dans ma chambre, il y a une table.','Dans ma chambre il y a une table.','Il y a une table dans ma chambre.'],'la table ist weiblich → <b>une</b> table!',{strict:true}),
 wr('Übersetze: „Überall gibt es Poster.“',['Il y a des posters partout.','Partout, il y a des posters.','Partout il y a des posters.'],'Il y a des posters partout.',{strict:true,lv:3}),
]},
{id:'chambre-schreiben',kind:'Schreibwerkstatt',icon:'✍️',title:'Dein Text: C’est ma chambre!',sub:'Zeichnen, beschriften, beschreiben',lv:2,
html:steps(['<b>Zeichnen:</b> Zeichne dein Zimmer (oder dein Traumzimmer) auf Papier und beschrifte es mit <b>un / une / des</b>.','<b>Schreiben:</b> Mindestens 5–8 Sätze. Nutze <b>il y a</b> mehrmals und sag, <b>wo</b> etwas ist.','<b>Prüfen:</b> Stimmt der Artikel (m./f./Pl.)? Plural-s? Frage am Schluss?','<b>Vergleichen:</b> Erst dann die Beispiellösung öffnen.'])+writer('chambre'),
ex:[
 gapw('Beschreibe Jades Zimmer: Schreibe den Artikel.','Il y a {0} hamac, {1} étagère et {2} posters.',[['un'],['une'],['des']],'un hamac (m.) · une étagère (f.) · des posters (Pl.).'),
 gapw('Beschreibe Jades Zimmer: Schreibe die fehlenden Wörter.','Dans {0} chambre, {1} {2} lit.',[['ma'],['il y a'],['un']],'Dans ma chambre, il y a un lit.',{strict:true,lv:3}),
 mc('Welcher Satz ist richtig?',['Il y a des posters partout.','Il y a des poster partout.','Il y a une posters partout.','Il y a un posters partout.'],'des + Plural-s: des posters.',{fr:true}),
 mc('Welcher Satz ist richtig?',['Dans ma chambre, il y a une armoire.','Dans ma chambre, il y a un armoire.','Dans ma chambre, il y a une armoires.','Dans ma chambre, il est une armoire.'],'l’armoire ist weiblich → une armoire. Und: „es gibt“ = il y a.',{fr:true}),
 seg('Passt der Satz in eine Zimmerbeschreibung?',['passt','passt nicht'],[['Voilà ma chambre!','passt'],['Je suis en sixième A.','passt nicht'],['Dans le coin, il y a une lampe.','passt'],['Le professeur de français, c’est Monsieur Martel.','passt nicht']],'Bei der Zimmerbeschreibung geht es um Möbel, Sachen und wo sie sind.'),
 wr('Schreibe einen Satz über Jades Zimmer mit <b>Dans l’étagère, il y a …</b>',['Dans l’étagère, il y a des livres et des B.D.','Dans l’étagère, il y a des livres.','Dans l’étagère, il y a des B.D.','Dans l’étagère, il y a des B.D. et des livres.','Dans l’étagère, il y a des livres et des BD.','Dans l’étagère, il y a des BD.'],'Dans l’étagère, il y a des livres et des B.D.',{strict:true,lv:3}),
]},
/* ===== Fehler ===== */
{id:'fehler',block:'Zum Schluss',kind:'Fehlerdetektiv',icon:'🕵️',title:'Fehlerdetektiv: Texte prüfen',sub:'So korrigierst du deinen eigenen Text',lv:2,
html:attn(`<table class="t"><tr><th>✗ falsch</th><th>✓ richtig</th></tr>
 <tr><td><s>Je mapelle Léo.</s></td><td>${F('Je m’appelle Léo.')}</td></tr><tr><td><s>Je suis von Berlin.</s></td><td>${F('Je suis de Berlin.')}</td></tr>
 <tr><td><s>Il et très cool.</s></td><td>${F('Il est très cool.')}</td></tr><tr><td><s>je ecoute / je écoute</s></td><td>${F('j’écoute')}</td></tr>
 <tr><td><s>Lucas et moi, nous sont …</s></td><td>${F('Lucas et moi, nous sommes …')}</td></tr><tr><td><s>il y a une lit</s></td><td>${F('il y a un lit')}</td></tr>
 <tr><td><s>des poster</s></td><td>${F('des posters')}</td></tr><tr><td><s>une ordinateur</s></td><td>${F('un ordinateur')}</td></tr></table>`,'Attention! Typische Fehler in Texten')
 +tip('<b>Korrektur-Runde für deinen Text:</b> 1. Jeder Satz mit Großbuchstabe und Punkt? 2. être richtig (suis, es, est, sommes, êtes, sont)? 3. Verben auf -er mit richtiger Endung? 4. un/une/des passt zum Nomen? 5. Akzente und j’ / m’ / l’?','🔍'),
ex:[
 det('Fehlerdetektiv: Finde die Fehler in Samiras Text.','Salut! Je [mapelle|m’appelle] Samira. Je suis de Berlin. Je [et|suis] en sixième A. Jade et moi, nous [sont|sommes] ensemble dans la classe. À la maison, [je écoute|j’écoute] des CD.','m’appelle · suis · sommes · j’écoute.'),
 det('Fehlerdetektiv: Finde die Fehler in Karims Text.','Voilà ma chambre! Dans ma chambre, il y a [une|un] lit et [un|une] armoire. Il y a des [poster|posters] partout. Dans le coin, il y a [une|un] ordinateur.','un lit · une armoire · des posters · un ordinateur.'),
 det('Fehlerdetektiv: Finde die Fehler.','Le professeur de français, c’est Monsieur Martel. Il [et|est] très cool. Clara et Yasmine [est|sont] dans la cour. Et toi? Tu [tapelles|t’appelles] comment?','est · sont · t’appelles.'),
 mc('Welcher Satz ist richtig?',['Lucas et moi, nous sommes ensemble dans la classe.','Lucas et moi, nous sont ensemble dans la classe.','Lucas et moi, nous est ensemble dans la classe.','Lucas et moi, nous êtes ensemble dans la classe.'],'… et moi = nous → nous sommes.',{fr:true}),
 wr('Verbessere: «Je suis von Strasbourg.»',['Je suis de Strasbourg.'],'Herkunft: Je suis de …',{strict:true}),
 wr('Verbessere: «Il y a une ordinateur.»',['Il y a un ordinateur.'],'l’ordinateur ist männlich → un ordinateur.',{strict:true}),
 wr('Verbessere: «Je ecoute des CD.»',['J’écoute des CD.'],'Vor Vokal: j’ – und écoute mit é.',{strict:true}),
]},
];
window.TEST_EX=[
 det('Fehlerdetektiv: Korrigiere Lucas’ Text (5 Fehler).','Bonjour! Je [mapelle|m’appelle] Lucas. Je suis [von|de] Berlin. Je suis en sixième A. Léo et moi, nous [sont|sommes] ensemble dans la classe. Dans ma chambre, il y a [une|un] lit et des [poster|posters].','m’appelle · de · sommes · un lit · des posters.',{ref:'fehler',tag:'Texte korrigieren'}),
 gap('Ergänze den Text.','Salut! Je {0} Yasmine. Je {1} de Berlin. À la maison, {2} des CD. Dans ma chambre, il y a {3} armoire et {4} hamac. Et toi? {5} il y a dans ta chambre?',[['m’appelle','suis','est'],['suis','es','m’appelle'],['j’écoute','je écoute','j’écoutes'],['une','un','des'],['un','une','des'],['Qu’est-ce qu’','C’est qui','Comment']],'m’appelle · suis · j’écoute · une armoire · un hamac · Qu’est-ce qu’il y a …?',{ref:'moi-bausteine',tag:'Redemittel'}),
 wr('Übersetze: „Ich bin Schülerin in Straßburg. Ich bin in der 6B.“',['Je suis élève à Strasbourg. Je suis en sixième B.','Je suis élève à Strasbourg. Je suis en 6e B.'],'Je suis élève à Strasbourg. Je suis en sixième B.',{strict:true,ref:'moi-schreiben',tag:'Sich vorstellen'}),
 wr('Übersetze: „In der Ecke gibt es eine Lampe.“',['Dans le coin, il y a une lampe.','Dans le coin il y a une lampe.','Il y a une lampe dans le coin.'],'Dans le coin, il y a une lampe.',{strict:true,ref:'chambre-bausteine',tag:'Zimmer beschreiben'}),
];
/* Pro Durchgang: so viele Aufgaben je Kapitel (Rest = Reserve-Pool); Pflichtaufgaben zu den Heftfehlern */
H.setRun({"moi-text":3,"moi-bausteine":4,"moi-schreiben":3,"chambre-text":3,"chambre-bausteine":4,"chambre-schreiben":3,fehler:3},{fehler:[0],test:[0]});
/* INTRO */
H.setIntro({
_lesson:{t:'Eigene Texte schreiben',
 was:'In der Arbeit schreibst du wahrscheinlich einen kurzen Text: <b>dich vorstellen</b> (C’est moi!) oder <b>dein Zimmer beschreiben</b> (C’est ma chambre!).',
 warum:'Ein guter Text hat einen klaren Aufbau, ganze Sätze und richtige Formen. Mit Bausteinen (fertigen Satzanfängen) schaffst du das sicher.',
 schritte:['<b>Sammeln:</b> Was willst du sagen? (Name, Herkunft, Klasse … oder: Möbel, Sachen, wo sie sind.)','<b>Bausteine nehmen:</b> Je m’appelle … / Je suis de … / Dans ma chambre, il y a …','<b>Schreiben:</b> ganze Sätze mit Punkt, 5–8 Sätze.','<b>Prüfen:</b> Verbformen, Artikel, Akzente, Plural-s.'],
 bsp:[['Salut! Je m’appelle Léo.','Hallo! Ich heiße Léo.'],['Je suis de Berlin.','Ich bin aus Berlin.'],['Je suis en sixième A.','Ich bin in der 6A.'],['Dans ma chambre, il y a un lit et une table.','In meinem Zimmer gibt es ein Bett und einen Tisch.'],['Il y a des posters partout.','Überall gibt es Poster.']],
 merk:'Begrüßung – Infos in ganzen Sätzen – Schluss. Danach alles prüfen!',
 fallen:['<b>Je suis de Berlin</b> – nicht „von“.','<b>il est</b> (ist) – nicht „il et“ (und).','<b>j’écoute</b> – nicht „je écoute“.','Mit „… et moi“: <b>nous sommes</b> (oder on est).','<b>il y a un / une / des</b> – nicht le / la.'],
 check:['Bausteine auswählen.','Sätze schreiben.','Checkliste abhaken: Formen, Artikel, Akzente.']},
'moi-text':{rule:"Ein Vorstellungstext hat einen Aufbau: Begrüßung und Name – Herkunft, Schule, Klasse – Lehrer und Freunde – was du gern machst – Schluss.",t:'Mustertext: sich vorstellen',
 was:'Léo stellt sich vor. Lies seinen Text (🔊 = Aussprache). Achte darauf, <b>wie</b> er aufgebaut ist – so kannst du deinen eigenen Text genauso bauen.',
 schritte:['Begrüßung und Name.','Woher kommt er? Welche Schule, welche Klasse?','Lehrer, Freunde, was er gern macht.','Schluss / Verabschiedung.'],
 bsp:[['Salut! Je me présente: c’est moi, Léo.','Hallo! Ich stelle mich vor: Das bin ich, Léo.','Léo'],['Je suis de Berlin.','Ich bin aus Berlin.','Léo'],['Je suis élève à Strasbourg.','Ich bin Schüler in Straßburg.','Léo'],['À la maison, j’écoute des CD.','Zu Hause höre ich CDs.','Léo']],
 merk:'Ein Text hat einen Aufbau: Anfang – Infos – Schluss.',
 fallen:['<b>élève</b> mit zwei Akzenten.','<b>à</b> Strasbourg (in) – mit Akzent.'],
 check:['Lesen.','Aufbau erkennen.','Fragen beantworten.']},
'moi-bausteine':{rule:"Name: Je m’appelle … · Herkunft: Je suis de … · Klasse: Je suis en sixième … · Freunde: … et moi, nous sommes …",t:'Bausteine: sich vorstellen',
 was:'Bausteine sind fertige Satzanfänge. Du musst nur noch deine eigenen Infos einsetzen.',
 schritte:['Name: <i>Je m’appelle … / Moi, c’est …</i>','Herkunft: <i>Je suis de …</i>','Schule: <i>Je suis en sixième A. / Je suis élève à …</i>','Freunde: <i>… et moi, nous sommes ensemble.</i>'],
 bsp:[['Je m’appelle Clara.','Ich heiße Clara.'],['Moi, c’est Clara.','Ich bin Clara.'],['Je suis en sixième A.','Ich bin in der 6A.'],['Le professeur de français, c’est Monsieur Martel.','Der Französischlehrer ist Monsieur Martel.'],['Jade et moi, on est ensemble.','Jade und ich sind zusammen.']],
 merk:'je m’appelle (zwei p, zwei l) · je suis de … · … et moi, nous sommes / on est …',
 fallen:['<b>je m’appelle</b>: Apostroph und zwei l – nicht „je mapelle“.','<b>Jade et moi, nous sommes</b> – nicht „nous sont“.'],
 check:['Baustein wählen.','Lücke füllen.','Form prüfen.']},
'moi-schreiben':{rule:"Nimm die Bausteine (Je m’appelle …, Je suis de …, Je suis en sixième …) und schreib ganze Sätze mit Punkt.",t:'Dein Text: C’est moi!',
 was:'Jetzt schreibst du deinen eigenen Text über dich. Nutze die Bausteine und die Checkliste.',
 schritte:['Sammle Stichpunkte (Name, woher, Klasse, Lehrer/in, Freund/in, zu Hause).','Schreib mit den Bausteinen ganze Sätze.','Prüfe mit der Checkliste.','Vergleiche erst danach mit dem Mustertext.'],
 bsp:[['Bonjour! Je m’appelle Noah.','Guten Tag! Ich heiße Noah.'],['Je suis élève en sixième.','Ich bin Schüler in der 6. Klasse.'],['À la maison, je regarde des photos.','Zu Hause schaue ich Fotos an.']],
 merk:'Lieber kurze, richtige Sätze als lange mit Fehlern.',
 fallen:['Nach je kommt -e (je regard<b>e</b>), nach nous -ons.','Am Satzende Punkt.'],
 check:['Sammeln.','Schreiben.','Prüfen.']},
'chambre-text':{rule:"Eine Zimmerbeschreibung: Voilà ma chambre! – Il y a + un / une / des … – wo etwas ist (dans le coin, là …).",t:'Mustertext: das Zimmer',
 was:'Jade beschreibt ihr Zimmer. Lies ihren Text (🔊 = Aussprache). Achte auf <b>il y a</b> + un / une / des und darauf, wie sie sagt, <b>wo</b> etwas ist.',
 schritte:['Einleitung: <i>Voilà ma chambre!</i>','Möbel: <i>Il y a un lit, une table …</i>','Wo? <i>Dans le coin … / Là …</i>','Was sie besonders mag (die Sammlung).'],
 bsp:[['Voilà ma chambre!','Das ist mein Zimmer!','Jade'],['Il y a un lit et une armoire.','Es gibt ein Bett und einen Schrank.','Jade'],['Dans le coin, il y a un hamac.','In der Ecke gibt es eine Hängematte.','Jade'],['Il y a des posters partout.','Überall gibt es Poster.','Jade']],
 merk:'il y a + un / une / des – damit sagst du, was es gibt.',
 fallen:['<b>partout</b> = überall.','<b>des CD</b> und <b>des B.D.</b> ohne s.'],
 check:['Lesen.','Aufbau erkennen.','Fragen beantworten.']},
'chambre-bausteine':{rule:"Was es gibt: il y a + un (m.) / une (f.) / des (Plural, Nomen mit -s). Wo: dans le coin, là, dans l’étagère.",t:'Bausteine: mein Zimmer',
 was:'Mit diesen Bausteinen beschreibst du jedes Zimmer.',
 schritte:['Einleitung: <i>Voilà ma chambre! / C’est ma chambre.</i>','Was gibt es? <i>Dans ma chambre, il y a …</i>','Wo? <i>Dans le coin, … / Là, … / Dans l’étagère, …</i>','Bewertung: <i>Le hamac est super!</i>'],
 bsp:[['Dans ma chambre, il y a une table et une chaise.','In meinem Zimmer gibt es einen Tisch und einen Stuhl.'],['Là, il y a une lampe.','Da gibt es eine Lampe.'],['Dans l’étagère, il y a des livres.','Im Regal gibt es Bücher.'],['Le coin musique est super!','Die Musikecke ist super!']],
 merk:'Erst un / une / des (neu), dann le / la / les (bekannt).',
 fallen:['<i>Dans ma chambre, il y a <b>une</b> armoire</i> – nicht „un armoire“.'],
 check:['Baustein wählen.','Artikel prüfen.','Satz fertig schreiben.']},
'chambre-schreiben':{rule:"Il y a + un / une / des – und jedes Nomen mit dem richtigen Artikel und Plural-s.",t:'Dein Text: C’est ma chambre!',
 was:'Jetzt beschreibst du dein eigenes Zimmer (oder dein Traumzimmer).',
 schritte:['Zeichne dein Zimmer und beschrifte es mit un / une / des.','Schreib 5–8 Sätze mit il y a und sag, wo etwas ist.','Prüfe Artikel, Plural-s und Akzente.'],
 bsp:[['Voilà ma chambre!','Das ist mein Zimmer!'],['Il y a un ordinateur et une guitare.','Es gibt einen Computer und eine Gitarre.'],['Dans le coin, il y a une étagère.','In der Ecke gibt es ein Regal.']],
 merk:'il y a mehrmals benutzen – und jedes Nomen mit dem richtigen Artikel.',
 fallen:['Plural: des livre<b>s</b>, des photo<b>s</b>.'],
 check:['Zeichnen.','Schreiben.','Prüfen.']},
fehler:{rule:"Text prüfen: Passt die Verbform zur Person? Stimmt der Artikel? Apostroph (j’, m’, l’)? Akzente? Keine deutschen Wörter?",t:'Fehlerdetektiv: Texte prüfen',
 was:'In diesen Texten stecken typische Fehler. Wenn du sie findest, findest du sie auch in deinem eigenen Text.',
 schritte:['Lies jeden Satz.','Prüfe: Verbform, Artikel, Apostroph, Akzente, deutsche Wörter.','Tippe die Fehler an.'],
 bsp:[['Je m’appelle Léo.','nicht: <s>Je mapelle Léo.</s>'],['Je suis de Berlin.','nicht: <s>Je suis von Berlin.</s>'],['Il est très cool.','nicht: <s>Il et très cool.</s> – est = ist'],['Lucas et moi, nous sommes …','nicht: <s>nous sont</s>']],
 merk:'Text immer am Ende prüfen: Verb – Artikel – Akzente.',
 fallen:['j’écoute – nicht je écoute.'],
 check:['Lesen.','Prüfen.','Antippen.']}
});
(function(){const W=window,V=window.V;
/* Bildliche Erklärungen (feste Vorlage) – Texte */
const SK_MOI=[['👋','Begrüßung','Salut!'],['🙋','Name','Je m’appelle …'],['🏙️','Woher?','Je suis de …'],['🏫','Klasse','Je suis en sixième A.'],['👫','Freunde','… et moi, nous sommes …'],['🏠','Zu Hause','À la maison, j’écoute …'],['👋','Schluss','Salut!']];
const SK_CH=[['🚪','Einleitung','Voilà ma chambre!'],['🛏️','Was gibt es?','Il y a un lit, une …'],['📍','Wo?','Dans le coin, il y a …'],['⭐','Lieblingssache','Le hamac est super!']];
H.patchIntro({
_lesson:{vis:V.skel(SK_MOI.slice(0,4))+V.skel(SK_CH.slice(0,3)),
 was:'In der Arbeit schreibst du einen kurzen Text: <b>C’est moi!</b> oder <b>C’est ma chambre!</b>',
 warum:'Mit fertigen Bausteinen schreibst du sicher und schnell.',
 schritte:[['<span class="big-ic">📝</span>','Infos sammeln'],['<span class="big-ic">🧱</span>','Bausteine nehmen'],['<span class="big-ic">✅</span>','prüfen: Verb, Artikel, Akzente']],
 merk:'Begrüßung – Infos in ganzen Sätzen – Schluss. Dann prüfen!',
 fallen:[['Je suis von Berlin.','Je suis de Berlin.','„aus“ = <b>de</b>.'],['je écoute','j’écoute','Vokal → <b>j’</b>.'],['Il y a le lit.','Il y a un lit.','il y a + un / une / des.']]},
'moi-text':{vis:'<div class="aset">'+V.who('Léo')+'</div>'+V.skel(SK_MOI),
 was:'Léo stellt sich vor. Schau, wie sein Text gebaut ist.',
 warum:'Dein Text bekommt denselben Bauplan.',
 schritte:[['<span class="big-ic">👋</span>','Begrüßung + Name'],['<span class="big-ic">🏙️🏫</span>','Woher? Klasse?'],['<span class="big-ic">👫🏠</span>','Freunde, zu Hause – Schluss']],
 fallen:[['Je suis eleve a Strasbourg.','Je suis élève à Strasbourg.','élève: 2 Akzente · à mit Akzent.']]},
'moi-bausteine':{vis:V.skel(SK_MOI.slice(1,5)),
 was:'Bausteine = fertige Satzanfänge. Du setzt nur deine Infos ein.',
 warum:'So sind die Sätze automatisch richtig gebaut.',
 schritte:[[V.b('Je m’appelle','v'),'Name'],[V.b('Je suis de','v'),'Herkunft'],[V.b('… et moi, nous sommes','v'),'Freunde']],
 fallen:[['je mapelle Clara','Je m’appelle Clara.','m’ + pp + ll.'],['Jade et moi, nous sont amis.','Jade et moi, nous sommes amis.','nous → <b>sommes</b>.']]},
'moi-schreiben':{vis:V.skel(SK_MOI),
 was:'Jetzt dein eigener Text über dich.',
 warum:'Lieber kurze, richtige Sätze als lange mit Fehlern.',
 schritte:[['<span class="big-ic">📝</span>','Stichpunkte sammeln'],['<span class="big-ic">🧱</span>','mit Bausteinen ganze Sätze'],['<span class="big-ic">✅</span>','Checkliste – dann Mustertext vergleichen']],
 fallen:[['Je regardes des photos.','Je regarde des photos.','je → <b>-e</b>.']]},
'chambre-text':{vis:(W.ROOMS&&W.ROOMS.jade?W.ROOMS.jade.svg:'')+V.skel(SK_CH),
 was:'Jade beschreibt ihr Zimmer: was es gibt und wo.',
 warum:'il y a + un / une / des – damit zählst du Sachen auf.',
 schritte:[['<span class="big-ic">🚪</span>','Voilà ma chambre!'],[V.b('Il y a','v')+V.art('un'),'Sachen aufzählen'],['<span class="big-ic">📍</span>','Wo? Dans le coin …']],
 fallen:[['Il y a des CDs.','Il y a des CD.','CD ohne -s.']]},
'chambre-bausteine':{vis:V.skel(SK_CH),
 was:'Mit diesen Bausteinen beschreibst du jedes Zimmer.',
 warum:'Einleitung – was gibt es – wo – was ist super.',
 schritte:[[V.b('Dans ma chambre, il y a','v'),'Was gibt es?'],[V.b('Dans le coin,','x'),'Wo?'],[V.b('… est super!','v'),'Bewertung']],
 fallen:[['Dans ma chambre, il y a la table.','Dans ma chambre, il y a une table.','nach il y a → <b>une</b>.']]},
'chambre-schreiben':{vis:V.skel(SK_CH),
 was:'Jetzt beschreibst du dein eigenes Zimmer.',
 warum:'Der gleiche Bauplan – nur deine Sachen.',
 schritte:[['<span class="big-ic">🛏️</span>','Sachen sammeln (mit un / une / des)'],['<span class="big-ic">🧱</span>','Bausteine'],['<span class="big-ic">✅</span>','prüfen']],
 fallen:[['Il y a un lampe.','Il y a une lampe.','lampe ist weiblich.']]},
fehler:{vis:V.vs('Il/s|et/v|de Berlin./r','Il/s|est/v|de Berlin./r'),
 was:'Finde typische Text-Fehler.',
 warum:'Wer Fehler findet, macht sie seltener.',
 schritte:[['<span class="big-ic">🔍</span>','Satz für Satz lesen'],[V.b('est','v')+' / '+V.b('et','r'),'Verb, Artikel, Akzente prüfen'],['<span class="big-ic">👆</span>','Fehler antippen']],
 fallen:[['Il et nouveau.','Il est nouveau.','<b>est</b> = ist · <b>et</b> = und.']]}
});

})();

})();
window.HUBCAP("texte");
(function(){
/* Lektion: Écouter – Hörverstehen */
const {F,G,conj,dlg,merk,attn,tip,hoer,card,reveal,tabs,track,steps,grp,ob,room,spk,spkLines}=H;
const {mc,pick,gap,gapw,ord,wr,mt,dl,clk,mark,mul,seg,tf,det}=X;
window.LESSON={slug:'ecouter',title:'Hörverstehen',fr:'Écouter – bien écouter!',icon:'🎧',color:'#0284c7',testN:16,
 intro:'In der Klassenarbeit gibt es Hörtexte: eine Vorstellung, eine Zimmerbeschreibung oder ein Gespräch auf dem Schulhof. Hier lernst du die besten <b>Hör-Strategien</b> und trainierst mit Hörtexten wie in der Arbeit. <b>Das Transkript</b> (der Text zum Mitlesen) wird erst freigeschaltet, wenn du die Aufgaben gemacht hast.'};
/* Zimmer aus den Grammatik-Lektionen (für „Hören zur Grammatik“) */
room('theo','La chambre de Théo',[
 ['poster',20,14,52,'le poster'],['armoire',332,100,68,'l’armoire'],['lit',4,112,108,'le lit'],['etagere',118,80,88,'l’étagère'],['minichaine',128,46,38,'la minichaîne'],
 ['table',214,112,80,'la table'],['ordinateur',220,78,44,'l’ordinateur'],['globe',264,82,40,'le globe'],['chaise',280,128,52,'la chaise'],['guitare',176,164,50,'la guitare'],['lampe',236,168,48,'la lampe']],{wx:100});
room('noah','La chambre de Noah',[
 ['poster',20,14,46,'des posters',2],['armoire',330,100,68,'une armoire'],['hamac',4,92,96,'un hamac'],['lit',110,120,96,'un lit'],
 ['table',226,112,78,'une table'],['ordinateur',232,78,42,'un ordinateur'],['chaise',282,128,50,'une chaise'],['figurine',268,90,26,'des figurines',3],
 ['livre',184,178,36,'des livres',3],['guitare',190,26,48,'une guitare'],['lampe',252,166,44,'une lampe'],['cd',304,190,26,'des CD',3]],{wx:110});
room('jade','La chambre de Jade',[
 ['poster',8,10,42,'des posters',2],['photo',232,22,34,'des photos',2],['hamac',2,94,88,'un hamac'],['lit',90,118,92,'un lit'],
 ['table',186,118,72,'une table'],['ordinateur',204,104,36,'un ordinateur'],['chaise',250,132,46,'une chaise'],
 ['armoire',306,96,72,'une armoire'],['etagere',300,4,94,'une étagère'],['livre',306,10,27,'des livres',3],['bd',306,54,27,'des B.D.',3],
 ['minichaine',58,184,40,'une minichaîne'],['cd',104,198,22,'des CD',3],['pierre',196,190,26,'des pierres (la collection)',3]],{wx:140,wall:'#ede9fe'});
room('karim','La chambre de Karim',[
 ['poster',10,12,42,'des posters',2],['etagere',296,4,94,'une étagère'],['bd',302,10,27,'des B.D.',3],['figurine',302,54,26,'des figurines',3],
 ['lit',8,116,98,'un lit'],['armoire',112,102,70,'une armoire'],['table',196,118,74,'une table'],['ordinateur',214,104,36,'un ordinateur'],
 ['guitare',282,112,52,'une guitare'],['minichaine',336,136,42,'une minichaîne'],['globe',236,184,34,'un globe'],['cd',300,196,22,'des CD',3]],{wx:150,wall:'#e0f2fe'});
const T=(id)=>'T:'+id;
window.TRACKS={
 samira:{title:'Je me présente',kind:'Hörtext 1 · Vorstellung',intro:'Samira stellt sich vor. Lies zuerst die Aufgaben, dann hör zu.',lines:[
  ['Samira','Bonjour! Je me présente: je m’appelle Samira. Samira, avec un S.','Guten Tag! Ich stelle mich vor: Ich heiße Samira. Samira, mit S.'],
  ['Samira','Je suis de Berlin.','Ich komme aus Berlin.'],
  ['Samira','Je suis élève à Strasbourg. Je suis en sixième B.','Ich bin Schülerin in Straßburg. Ich bin in der 6B.'],
  ['Samira','La professeur de français, c’est Madame Fournier. Elle est très cool.','Die Französischlehrerin ist Frau Fournier. Sie ist sehr cool.'],
  ['Samira','Voilà Jade. Jade et moi, nous sommes ensemble dans la classe.','Das ist Jade. Jade und ich sind zusammen in der Klasse.'],
  ['Samira','À la maison, je parle avec Yasmine, j’écoute des CD et je regarde des photos.','Zu Hause rede ich mit Yasmine, höre CDs und schaue Fotos an.'],
  ['Samira','Dans ma chambre, il y a un lit, une étagère et des figurines.','In meinem Zimmer gibt es ein Bett, ein Regal und Figuren.'],
  ['Samira','Et toi? Tu t’appelles comment? Au revoir!','Und du? Wie heißt du? Auf Wiedersehen!']]},
 karim:{title:'La chambre de Karim',kind:'Hörtext 2 · Zimmer',intro:'Karim zeigt sein Zimmer. Was gibt es dort – und was nicht?',lines:[
  ['Karim','Salut! C’est Karim. Voilà ma chambre!','Hallo! Hier ist Karim. Das ist mein Zimmer!'],
  ['Karim','Il y a un lit et une armoire.','Es gibt ein Bett und einen Schrank.'],
  ['Karim','Là, il y a une table et un ordinateur.','Da gibt es einen Tisch und einen Computer.'],
  ['Karim','Dans l’étagère, il y a des B.D. et des figurines.','Im Regal gibt es Comics und Figuren.'],
  ['Karim','Dans le coin musique, il y a une guitare et une minichaîne.','In der Musikecke gibt es eine Gitarre und eine Mini-Stereoanlage.'],
  ['Karim','Il y a aussi un globe – la géo, c’est super!','Es gibt auch einen Globus – Erdkunde ist super!'],
  ['Karim','Un hamac? Non, le hamac est dans la chambre de Noah.','Eine Hängematte? Nein, die Hängematte ist in Noahs Zimmer.']]},
 cour:{title:'À la récré',kind:'Hörtext 3 · Gespräch auf dem Schulhof',intro:'Clara und Théo sind in der Pause auf dem Schulhof. Dann kommt ein Junge dazu.',lines:[
  ['Clara','Salut, Théo! Ça va?','Hallo, Théo! Wie geht’s?'],
  ['Théo','Ça va très bien. Et toi?','Sehr gut. Und dir?'],
  ['Clara','Super! Regarde, le garçon avec la guitare. C’est qui?','Super! Schau mal, der Junge mit der Gitarre. Wer ist das?'],
  ['Théo','Je ne sais pas.','Ich weiß es nicht.'],
  ['Karim','Salut! Je m’appelle Karim. Je suis nouveau.','Hallo! Ich heiße Karim. Ich bin neu.'],
  ['Clara','Salut, Karim! Moi, c’est Clara. Clara, avec un C. Et voilà Théo.','Hallo, Karim! Ich bin Clara. Clara mit C. Und das ist Théo.'],
  ['Théo','Tu es de Strasbourg?','Kommst du aus Straßburg?'],
  ['Karim','Non, je suis de Berlin. Je suis en sixième A.','Nein, ich komme aus Berlin. Ich bin in der 6A.'],
  ['Clara','Cool! Nous sommes aussi en sixième A!','Cool! Wir sind auch in der 6A!'],
  ['Théo','Et la fille, là? C’est qui?','Und das Mädchen da? Wer ist das?'],
  ['Karim','C’est Yasmine. Elle est en cinquième.','Das ist Yasmine. Sie ist in der 7. Klasse.']]},
 tel:{title:'Au téléphone',kind:'Hörtext 4 · Probe-Hörverstehen',intro:'Lucas telefoniert mit Jade. Lies zuerst alle Aufgaben!',lines:[
  ['Lucas','Salut, Jade! Ça va?','Hallo, Jade! Wie geht’s?'],
  ['Jade','Ça va bien. Je regarde des photos de la classe. Et toi?','Gut. Ich schaue Fotos von der Klasse an. Und du?'],
  ['Lucas','Moi, j’écoute un CD de Théo. C’est trop cool!','Ich höre eine CD von Théo. Die ist total cool!'],
  ['Jade','Et Léo? Il est chez toi?','Und Léo? Ist er bei dir?'],
  ['Lucas','Non, Léo et Noah sont à la maison. Ils regardent des B.D.','Nein, Léo und Noah sind zu Hause. Sie schauen Comics an.'],
  ['Jade','Et Clara et Yasmine?','Und Clara und Yasmine?'],
  ['Lucas','Elles sont chez Clara. Elles parlent, elles parlent …','Sie sind bei Clara. Sie reden und reden …'],
  ['Jade','Ah, cool! Salut, Lucas! Au revoir!','Ach, cool! Tschüs, Lucas! Auf Wiedersehen!']]},
};
const STRAT=steps(['<b>Vor dem Hören: Aufgaben lesen!</b> Was sollst du herausfinden? Unterstreiche Schlüsselwörter (Namen, Orte, Zahlen, Sachen).','<b>Vermuten:</b> Worum geht es wohl? Welche Wörter könnten vorkommen (z. B. il y a, un lit, une table …)?','<b>1. Hören:</b> Nur zuhören – Worum geht es? Wer spricht? Nicht jedes Wort verstehen wollen!','<b>2. Hören:</b> Jetzt gezielt die Antworten suchen und Notizen machen (Stichworte reichen).','<b>Danach:</b> Lücken mit Logik füllen. Nichts leer lassen – lieber raten!']);
window.CHAPTERS=[
{id:'strategien',kind:'Strategien',icon:'🧭',title:'So hörst du wie ein Profi',sub:'5 Schritte für jeden Hörtext',lv:1,
html:card('Die 5 Schritte','🧭',STRAT)
 +tip('<b>Signalwörter</b> helfen dir: <span class="fr">il y a</span> → jetzt kommen Sachen · <span class="fr">Je suis de</span> → Herkunft · <span class="fr">C’est qui?</span> → eine Person wird vorgestellt · <span class="fr">Et toi?</span> → eine Frage.','🔑')
 +hoer(`<ul><li><b>Endungen hört man oft nicht:</b> ${F('il regarde')} = ${F('ils regardent')}. Achte auf den Zusammenhang (Namen, <span class="fr">et</span>).</li><li><b>Liaison verrät den Plural:</b> ${F('ils‿écoutent')} [z]</li><li><b>le – les</b> klingt verschieden: ${F('le livre')} [lə] – ${F('les livres')} [le]</li><li><b>Frage oder Aussage?</b> Hör auf die Stimme: ${F('Tu es nouveau?')} geht am Ende nach oben ↗.</li></ul>`,'Worauf du beim Hören achtest')
 +tip('Auf dem iPhone: <b>Stummschalter aus</b> und Lautstärke hoch – oder Kopfhörer benutzen.','🔊'),
ex:[
 mc('Was machst du <b>zuerst</b>, bevor der Hörtext startet?',['Die Aufgaben lesen und Schlüsselwörter markieren.','Sofort alles mitschreiben.','Die Augen zumachen.','Die Lösung raten.'],'Wenn du die Aufgaben kennst, weißt du, worauf du achten musst.'),
 mc('Du verstehst ein Wort nicht. Was tust du?',['Weiterhören – man muss nicht jedes Wort verstehen.','Aufhören und auf den Anfang warten.','Die Aufgabe leer lassen.','Laut fragen.'],'Konzentriere dich auf das, was du für die Aufgabe brauchst.'),
 mc('Warum hört man einen Hörtext <b>zweimal</b>?',['Beim 1. Mal: Worum geht es? Beim 2. Mal: Details und Antworten.','Weil es beim 1. Mal zu leise ist.','Beim 2. Mal liest man das Transkript.','Das braucht man nicht.'],'Erst das Ganze, dann die Details.'),
 mc('Hör zu: Frage oder Aussage?',['Frage','Aussage'],'Die Stimme geht am Ende hoch ↗ – das ist eine Frage: «Tu es nouveau?»',{au:[['Clara','Tu es nouveau?']]}),
 mc('Hör zu: Frage oder Aussage?',['Aussage','Frage'],'«Il est de Berlin.» – die Stimme geht am Ende nach unten: Aussage.',{au:[['Théo','Il est de Berlin.']]}),
 mc('Welches Signalwort zeigt: Jetzt werden Sachen in einem Zimmer aufgezählt?',['il y a','je suis de','au revoir','c’est qui?'],'il y a = es gibt.',{fr:true}),
 mc('Hör zu: Wie schreibt man den Namen?',['Karim','Carim','Karime','Carime'],'«Karim, avec un K.»',{au:[['Karim','Je m’appelle Karim. Karim, avec un K.']]}),
]},
{id:'hoergym',kind:'Hör-Gym',icon:'💪',title:'Hör-Gym: genau hinhören',sub:'le/la/les, un/une, il/ils, nous/vous',lv:1,
html:hoer(`<table class="t"><tr><th>Das hörst du</th><th>Beispiel</th></tr><tr><td>[lə] / [la] / [le]</td><td>${F('le lit')} ${F('la lampe')} ${F('les lits')}</td></tr><tr><td>[œ̃] / [yn]</td><td>${F('un lit')} ${F('une table')}</td></tr><tr><td>[ilɛ] / [ɛlɛ]</td><td>${F('il est')} ${F('elle est')}</td></tr><tr><td>[ilsɔ̃] / [ɛlsɔ̃]</td><td>${F('ils sont')} ${F('elles sont')}</td></tr><tr><td>[z] bei Liaison</td><td>${F('ils‿écoutent')} ${F('les‿armoires')}</td></tr></table>`,'Kleine Wörter – großer Unterschied'),
ex:[
 mc('Hör zu: Welchen Artikel hörst du?',['les','le','la','l’'],'[le] = les → Plural: les chaises.',{au:'les chaises',say:false}),
 mc('Hör zu: Welchen Artikel hörst du?',['le','les','la','l’'],'[lə] = le: le cahier.',{au:'le cahier',say:false}),
 mc('Hör zu: Welchen Artikel hörst du?',['une','un','des'],'[yn] = une: une lampe.',{au:'une lampe',say:false}),
 mc('Hör zu: Welchen Artikel hörst du?',['un','une','des'],'[œ̃n] = un mit Liaison: un‿ordinateur.',{au:'un ordinateur',say:false}),
 pick('Hör zu und tippe auf das passende Bild.',[[ob('livre',3),'les livres'],[ob('livre'),'le livre'],[ob('cahier',3),'les cahiers'],[ob('cahier'),'le cahier']],'Du hörst [le livʁ] – les livres, Plural.',{au:'les livres'}),
 pick('Hör zu und tippe auf das passende Bild.',[[ob('chaise'),'une chaise'],[ob('chaise',3),'des chaises'],[ob('table'),'une table'],[ob('lampe'),'une lampe']],'une chaise = ein Stuhl.',{au:'une chaise'}),
 pick('Hör zu: Wer ist gemeint?',[[grp('ff'),'elles sont – mehrere Mädchen'],[grp('f'),'elle est – ein Mädchen'],[grp('m'),'il est – ein Junge'],[grp('mm'),'ils sont – mehrere Jungen']],'«Elles sont dans la cour.» – [ɛlsɔ̃] = elles sont.',{au:'Elles sont dans la cour.',say:false}),
 pick('Hör zu: Wer ist gemeint?',[[grp('m'),'il est – ein Junge'],[grp('mm'),'ils sont – mehrere'],[grp('f'),'elle est – ein Mädchen'],[grp('ff'),'elles sont – mehrere Mädchen']],'«Il est nouveau.» – [ilɛ] = il est.',{au:'Il est nouveau.',say:false}),
 seg('Hör zu: Einer oder mehrere?',['einer','mehrere','hört man nicht'],[['Satz 1','mehrere','Ils écoutent un CD.'],['Satz 2','einer','Il écoute un CD.'],['Satz 3','hört man nicht','Elle parle avec Jade.'],['Satz 4','mehrere','Ils sont en sixième.']],'ils‿écoutent [z] → mehrere · il écoute → einer · elle parle = elles parlent · ils sont [ilsɔ̃] → mehrere.',{sub:'Tippe auf 🔊 und entscheide.'}),
 pick('Hör zu und tippe auf das passende Bild.',[[ob('stylo',3),'des stylos'],[ob('stylo'),'un stylo'],[ob('crayon',3),'des crayons'],[ob('regle'),'une règle']],'des stylos = Kulis (Plural).',{au:'des stylos'}),
 pick('Hör zu und tippe auf das passende Bild.',[[ob('classeur'),'un classeur'],[ob('cahier'),'un cahier'],[ob('livre'),'un livre'],[ob('papier'),'le papier']],'un classeur = ein Ordner.',{au:'un classeur'}),
 mc('Hör zu: Was hörst du?',['les élèves','l’élève','le élève','la élève'],'[lezelɛv] – das [z] der Liaison zeigt: les‿élèves, Plural.',{au:'les élèves',fr:true}),
 seg('Hör zu: nous oder vous?',['nous','vous'],[['Satz 1','vous','Vous êtes de Berlin?'],['Satz 2','nous','Nous sommes en sixième A.'],['Satz 3','nous','Nous regardons des photos.'],['Satz 4','vous','Vous parlez français?']],'nous [nu] · vous [vu].',{sub:'Tippe auf 🔊 und entscheide.'}),
]},
{id:'vorstellung',kind:'Hörtext 1',icon:'🙋',title:'Samira stellt sich vor',sub:'Steckbrief ausfüllen, vrai ou faux',lv:2,
html:card('Vor dem Hören','📝','<p>Lies zuerst die Aufgaben. Du sollst einen <b>Steckbrief</b> ausfüllen: Vorname, Herkunft, Klasse, Lehrerin, Freundin, was sie zu Hause macht, was in ihrem Zimmer ist.</p>'+tip('Signalwörter: <span class="fr">je m’appelle</span> → Name · <span class="fr">je suis de</span> → Herkunft · <span class="fr">en sixième</span> → Klasse · <span class="fr">à la maison</span> → Hobbys · <span class="fr">il y a</span> → Zimmer','🔑'))+track('samira'),
ex:[
 gapw('Steckbrief: Hör zu und notiere (Stichworte genügen).','Vorname: {0}<br>Sie kommt aus: {1}<br>Klasse: {2}<br>Französischlehrerin: {3}<br>Freundin in der Klasse: {4}',[['Samira'],['Berlin'],['sixième B','6e B','6B','6 B','sixieme B','6. Klasse B','B'],['Madame Fournier','Mme Fournier','Fournier','Frau Fournier'],['Jade']],'Samira · Berlin · sixième B · Madame Fournier · Jade.',{au:T('samira'),say:false,sub:'Hör den Text (gern zweimal) und schreibe in die Lücken.'}),
 mul('Was macht Samira zu Hause? Tippe alle 3 an.',[['Sie redet mit Yasmine.',1],['Sie hört CDs.',1],['Sie schaut Fotos an.',1],['Sie schaut Comics an.',0],['Sie ruft Clara an.',0],['Sie spielt Gitarre.',0]],'«je parle avec Yasmine, j’écoute des CD et je regarde des photos.»',{au:T('samira')}),
 mul('Was gibt es in Samiras Zimmer? Tippe alles an, was du hörst.',[['un lit',1],['une étagère',1],['des figurines',1],['un hamac',0],['une guitare',0],['des posters',0]],'«il y a un lit, une étagère et des figurines.»',{au:T('samira')}),
 tf('Vrai ou faux?',[['Samira est de Strasbourg.',false],['Elle est en sixième B.',true],['Madame Fournier est très cool.',true],['Samira et Jade sont ensemble dans la classe.',true],['On écrit Samira avec un Z.',false]],'Samira ist aus <b>Berlin</b> und schreibt sich mit <b>S</b>.',{au:T('samira')}),
 mc('Wie schreibt man den Namen?',['Samira','Zamira','Sammira','Samirah'],'«Samira, avec un S.»',{au:[['Samira','Je m’appelle Samira. Samira, avec un S.']]}),
 mc('Was fragt Samira am Ende?',['Wie heißt du?','Woher kommst du?','Was gibt es in deinem Zimmer?','Wie geht’s?'],'«Et toi? Tu t’appelles comment?»',{au:T('samira')}),
]},
{id:'zimmer',kind:'Hörtext 2',icon:'🛏️',title:'Karims Zimmer',sub:'Hören und im Bild markieren',lv:2,
html:card('Vor dem Hören','📝',`<p>Schau dir das Bild an. Welche Sachen kennst du schon auf Französisch? Sag sie leise mit Artikel (<span class="fr">un lit, une armoire …</span>).</p><div class="roomwrap">${window.ROOMS.karim.svg}</div><p class="legend">Achtung: Im Bild ist mehr, als Karim sagt – in der Aufgabe sind auch Sachen, die es gar nicht gibt.</p>`)+track('karim'),
ex:[
 mul('Was gibt es in Karims Zimmer? Tippe alles an, was du hörst. (Vier Sachen gibt es nicht!)',[['un lit',1],['une armoire',1],['une table',1],['un ordinateur',1],['des B.D.',1],['des figurines',1],['une guitare',1],['une minichaîne',1],['un globe',1],['un hamac',0],['une lampe',0],['une chaise',0],['des pierres',0]],'Nicht in Karims Zimmer: un hamac, une lampe, une chaise, des pierres.',{au:T('karim')}),
 mark('Hör zu und markiere im Bild, was im <b>Regal</b> ist.','karim',['bd','figurine'],'«Dans l’étagère, il y a des B.D. et des figurines.»',{au:[['Karim','Dans l’étagère, il y a des B.D. et des figurines.']]}),
 mark('Hör zu und markiere im Bild, was in der <b>Musikecke</b> ist.','karim',['guitare','minichaine'],'«Dans le coin musique, il y a une guitare et une minichaîne.»',{au:[['Karim','Dans le coin musique, il y a une guitare et une minichaîne.']]}),
 tf('Vrai ou faux?',[['Dans la chambre de Karim, il y a un lit.',true],['Il y a une lampe.',false],['Dans l’étagère, il y a des livres.',false],['Il y a un ordinateur.',true]],'Im Regal sind <b>des B.D.</b> und <b>des figurines</b>, keine Bücher. Eine Lampe nennt Karim nicht.',{au:T('karim')}),
 gap('Wo ist die Hängematte? Ergänze.','Le hamac est dans la chambre de {0}.',[['Noah','Karim','Jade','Théo']],'«Le hamac est dans la chambre de Noah.»',{au:T('karim')}),
 mc('Welches Schulfach findet Karim super?',['Erdkunde (la géo)','Französisch','Musik','Deutsch'],'«Il y a aussi un globe – la géo, c’est super!» – la géo = Erdkunde.',{au:T('karim')}),
 clk('Hör zu und tippe im Bild an.','karim','globe','«Il y a aussi un globe.»',{au:[['Karim','Il y a aussi un globe.']]}),
]},
{id:'pausenhof',kind:'Hörtext 3',icon:'🏫',title:'Gespräch auf dem Schulhof',sub:'Vrai ou faux & Qui dit quoi?',lv:2,
html:card('Vor dem Hören','📝',`<p>Drei Kinder sprechen: <b>Clara</b>, <b>Théo</b> und ein neuer Junge. Achte auf <b>Namen</b>, <b>Herkunft</b> und <b>Klasse</b>.</p><div class="objrow">${['Clara','Théo','Karim'].map(w=>`<div class="objc"><div style="width:62px">${CHARS[w]}</div><span>${w}</span></div>`).join('')}</div>`)+track('cour'),
ex:[
 tf('Vrai ou faux?',[['Théo va très bien.',true],['Le garçon avec la guitare, c’est Karim.',true],['Karim est de Strasbourg.',false],['Karim est nouveau.',true],['Clara et Théo sont en sixième B.',false],['Yasmine est en cinquième.',true]],'Karim ist aus <b>Berlin</b>; Clara und Théo sind wie Karim in der <b>sixième A</b>.',{au:T('cour')}),
 seg('Qui dit quoi? – Wer sagt das?',['Clara','Théo','Karim'],[['«Je ne sais pas.»','Théo'],['«Je suis nouveau.»','Karim'],['«Clara, avec un C.»','Clara'],['«Tu es de Strasbourg?»','Théo'],['«C’est Yasmine.»','Karim']],'Théo: Je ne sais pas / Tu es de Strasbourg? · Karim: Je suis nouveau / C’est Yasmine · Clara: Clara, avec un C.',{au:T('cour')}),
 mc('Woher kommt Karim?',['aus Berlin','aus Straßburg','aus Paris','Das sagt er nicht.'],'«Non, je suis de Berlin.»',{au:T('cour')}),
 mc('Wie geht es Clara?',['super','sehr gut','nicht so gut','Das sagt sie nicht.'],'Théo: «Ça va très bien. Et toi?» – Clara: «Super!»',{au:T('cour')}),
 mc('Wer hat eine Gitarre?',['der neue Junge (Karim)','Théo','Clara','Yasmine'],'«Regarde, le garçon avec la guitare.»',{au:T('cour')}),
 mc('In welcher Klasse ist Karim?',['sixième A','sixième B','cinquième','Das wird nicht gesagt.'],'«Je suis en sixième A.»',{au:T('cour'),fr:true}),
 mc('Was bedeutet «Je ne sais pas.»?',['Ich weiß es nicht.','Ich bin nicht da.','Ich heiße nicht so.','Ich verstehe nicht.'],'Je ne sais pas. = Ich weiß es nicht.',{say:[['Théo','Je ne sais pas.']]}),
]},
{id:'diktat',kind:'Diktat',icon:'✏️',title:'Lückendiktat',sub:'Hören und richtig schreiben – mit Akzenten und Endungen',lv:2,
html:tip('Bei einem Diktat zählt jeder Buchstabe. <b>Endungen</b> hört man oft nicht (ils regard<b>ent</b>) – überlege, <b>wer</b> etwas tut. Und: Akzente! Bei diesen Aufgaben zählen Akzente mit.','✏️')
 +hoer(`<p>Hör jeden Satz so oft du willst. Schreibe erst, was du sicher hörst, dann prüfe die Grammatik:</p><ul><li>Wer? → Endung (je regarde, nous regardons, ils regardent)</li><li>Welches Nomen? → Artikel (le/la/les, un/une/des)</li></ul>`),
ex:[
 gapw('Hör zu und ergänze.','Voilà {0} classe de sixième B. Les élèves {1} dans la classe.',[['la'],['sont']],'la classe · les élèves sont.',{au:'Voilà la classe de sixième B. Les élèves sont dans la classe.',strict:true}),
 gapw('Hör zu und ergänze.','{0} professeur de français, c’est Madame Fournier. Elle {1} très cool.',[['La','Le'],['est']],'La (oder Le) professeur … · Elle est très cool.',{au:'La professeur de français, c’est Madame Fournier. Elle est très cool.',strict:true}),
 gapw('Hör zu und ergänze.','Lucas et Jade {0} des photos. Jade {1} un CD.',[['regardent'],['écoute']],'Lucas et Jade → regardent (-ent, stumm!) · Jade écoute (mit é).',{au:'Lucas et Jade regardent des photos. Jade écoute un CD.',strict:true}),
 gapw('Hör zu und ergänze.','Nous {0} français. Et toi, tu {1} à Karim?',[['parlons'],['téléphones']],'nous parlons · tu téléphones.',{au:'Nous parlons français. Et toi, tu téléphones à Karim?',strict:true,lv:3}),
 gapw('Hör zu und ergänze.','Dans ma chambre, il y a {0} lit, {1} lampe et {2} posters.',[['un'],['une'],['des']],'un lit · une lampe · des posters.',{au:'Dans ma chambre, il y a un lit, une lampe et des posters.',strict:true}),
 gapw('Hör zu und ergänze.','Clara et moi, nous {0} ensemble. Vous {1} de Berlin?',[['sommes'],['êtes']],'nous sommes · vous êtes (mit ê!).',{au:'Clara et moi, nous sommes ensemble. Vous êtes de Berlin?',strict:true,lv:3}),
]},
{id:'probe',kind:'Probe-Hörverstehen',icon:'🎯',title:'Probe-Hörverstehen',sub:'Wie in der Klassenarbeit: ein Text, mehrere Aufgaben',lv:3,keepOrder:true,
html:card('So läuft es in der Arbeit','📋',STRAT)+track('tel')+tip('Mach alle Aufgaben zu diesem Hörtext nacheinander. Hör den Text höchstens <b>zweimal</b> pro Aufgabe – wie in der Klassenarbeit!','⏱️'),
ex:[
 mc('Was macht Jade?',['Sie schaut Fotos von der Klasse an.','Sie hört eine CD.','Sie schaut Comics an.','Sie redet mit Clara.'],'«Je regarde des photos de la classe.»',{au:T('tel'),lv:3}),
 mc('Was macht Lucas?',['Er hört eine CD von Théo.','Er schaut Fotos an.','Er ruft Léo an.','Er spielt Gitarre.'],'«Moi, j’écoute un CD de Théo.»',{au:T('tel'),lv:3}),
 seg('Wer macht was?',['regardent des B.D.','parlent','écoute un CD'],[['Léo et Noah','regardent des B.D.'],['Clara et Yasmine','parlent'],['Lucas','écoute un CD']],'Léo et Noah regardent des B.D. · Clara et Yasmine parlent · Lucas écoute un CD.',{au:T('tel'),lv:3}),
 mc('Wo sind Clara und Yasmine?',['bei Clara','in der Schule','bei Lucas','auf dem Schulhof'],'«Elles sont chez Clara.»',{au:T('tel'),lv:3}),
 tf('Vrai ou faux?',[['Léo est chez Lucas.',false],['Léo et Noah sont à la maison.',true],['Clara et Yasmine sont chez Clara.',true],['Le CD est de Théo.',true]],'Léo ist <b>nicht</b> bei Lucas, er ist mit Noah zu Hause.',{au:T('tel'),lv:3}),
 pick('Was macht Jade? Tippe auf das passende Bild.',[[ob('photo'),'des photos'],[ob('cd'),'un CD'],[ob('bd'),'des B.D.'],[ob('guitare'),'une guitare']],'Jade regarde des photos.',{au:T('tel'),labels:true,lv:3}),
]},
];
window.TEST_EX=[
 tf('Hörtext «À la récré»: Vrai ou faux?',[['Clara va super bien.',true],['Karim est en cinquième.',false],['On écrit Clara avec un C.',true]],'Karim ist in der <b>sixième A</b>; Yasmine ist in der cinquième.',{au:T('cour'),ref:'pausenhof',tag:'Gespräch verstehen'}),
 mul('Hörtext «La chambre de Karim»: Was gibt es nicht? Tippe die 2 Sachen an, die es <b>nicht</b> gibt.',[['un hamac',1],['une lampe',1],['un globe',0],['une guitare',0],['un lit',0]],'Den Hamac gibt es nur bei Noah, eine Lampe nennt Karim nicht.',{au:T('karim'),ref:'zimmer',tag:'Zimmer: Hören'}),
 gapw('Diktat: Hör zu und ergänze.','Les filles {0} des photos. Vous {1} en sixième?',[['regardent'],['êtes']],'regardent · êtes.',{au:'Les filles regardent des photos. Vous êtes en sixième?',strict:true,ref:'diktat',tag:'Diktat'}),
 seg('Hör zu: Welchen Artikel hörst du?',['le','la','les','un','une'],[['Wort 1','les','les cahiers'],['Wort 2','une','une règle'],['Wort 3','le','le classeur'],['Wort 4','un','un stylo']],'les cahiers · une règle · le classeur · un stylo.',{ref:'hoergym',tag:'Genau hinhören',sub:'Tippe auf 🔊 und entscheide.'}),
 gapw('Hörtext «Samira»: Ergänze den Steckbrief.','Herkunft: {0}<br>Klasse: {1}',[['Berlin'],['sixième B','6e B','6B','6 B','sixieme B']],'Berlin · sixième B.',{au:T('samira'),say:false,ref:'vorstellung',tag:'Steckbrief'}),
];
/* Pro Durchgang: so viele Aufgaben je Kapitel (Rest = Reserve-Pool); Pflichtaufgaben zu den Heftfehlern */
/* ===== TEIL B · HÖREN ZUR GRAMMATIK =====
   Diese Hör-Aufgaben standen früher in den Grammatik-Lektionen. Jetzt wird zuerst die Grammatik gelernt,
   das Hören kommt hier am Ende (Wunsch des Vaters). Herkunft jeder Aufgabe: Feld „from“. */
{const MV={"etre":[{"type":"mc","q":"Hör zu: Wer sagt das?","o":["Karim","Théo","Monsieur Martel","Clara"],"why":"Karim sagt: «Je suis nouveau. Je suis de Berlin.» – Er ist neu in der Klasse.","au":[["Karim","Je suis nouveau. Je suis de Berlin."]],"from":"etre/entdecken-3","lv":2},{"type":"seg","tf":true,"q":"Hör dir den Dialog an. Richtig oder falsch?","opts":["vrai","faux"],"rows":[["Monsieur Martel est le professeur de français.","vrai",null],["Karim est de Strasbourg.","faux",null],["Clara et Théo sont en sixième A.","vrai",null],["Jade et Yasmine sont dans la classe.","faux",null]],"why":"Karim ist aus <b>Berlin</b>. Jade und Yasmine sind <b>dans la cour</b> (auf dem Schulhof), nicht in der Klasse.","au":[["Martel","Bonjour! Je suis Monsieur Martel. Je suis le professeur de français."],["Clara","Bonjour, Monsieur! Moi, je suis Clara. Et voilà Théo."],["Théo","Salut! Nous sommes en sixième A."],["Martel","Ah, vous êtes la classe de sixième A! Très bien."],["Karim","Et moi, je suis Karim. Je suis nouveau. Je suis de Berlin."],["Clara","Regarde, Théo! Jade et Yasmine sont là, dans la cour."],["Théo","Elles sont aussi en sixième A? Cool!"]],"from":"etre/entdecken-7","lv":2},{"type":"seg","q":"Hör zu: Welche Form von être hörst du?","opts":["suis","es / est","sommes","êtes","sont"],"rows":[["Satz 1","sommes","Nous sommes en sixième."],["Satz 2","sont","Ils sont dans la cour."],["Satz 3","êtes","Vous êtes de Berlin?"],["Satz 4","suis","Je suis Jade."],["Satz 5","es / est","Elle est très cool."]],"why":"Satz 1: nous <b>sommes</b> · Satz 2: ils <b>sont</b> · Satz 3: vous <b>êtes</b> · Satz 4: je <b>suis</b> · Satz 5: elle <b>est</b>.","sub":"Tippe auf 🔊 und wähle dann die Form.","from":"etre/szenen-0","lv":2},{"type":"seg","q":"Hör zu: Ist es <b>einer</b> (il) oder sind es <b>mehrere</b> (ils)?","opts":["il","ils"],"rows":[["Satz 1","ils","Ils sont en cinquième."],["Satz 2","il","Il est nouveau."],["Satz 3","ils","Ils sont de Strasbourg."],["Satz 4","il","Il est dans la classe."]],"why":"Du hörst es am Verb: <b>il est</b> [ilɛ] – <b>ils sont</b> [ilsɔ̃].","sub":"Tippe auf 🔊 und entscheide.","from":"etre/szenen-1","lv":2},{"type":"mc","q":"Hör zu: In welcher Klasse ist Lucas?","o":["in der 7. Klasse (en cinquième)","in der 6. Klasse (en sixième)","in der 6A","Das wird nicht gesagt."],"why":"Samira sagt: «C’est Lucas. Il est <b>en cinquième</b>.» – en cinquième = in der 7. Klasse.","au":[["Samira","C’est Lucas. Il est en cinquième."]],"from":"etre/szenen-2","lv":2},{"type":"seg","tf":true,"q":"Hör dir den Dialog „Dans la cour“ an. Richtig oder falsch?","opts":["vrai","faux"],"rows":[["Lucas est en sixième.","faux",null],["Yasmine est de Strasbourg.","vrai",null],["Lucas et Yasmine sont amis.","vrai",null],["La fille avec Lucas, c’est Samira.","faux",null]],"why":"Lucas ist <b>en cinquième</b>. Die Freundin von Lucas ist <b>Yasmine</b> – Samira erzählt Léo von ihr.","au":[["Léo","Salut, Samira! Ça va?"],["Samira","Ça va. Et toi?"],["Léo","Ça va. Regarde! C’est qui?"],["Samira","C’est Lucas. Il est en cinquième."],["Léo","Et la fille avec Lucas, c’est qui?"],["Samira","C’est Yasmine. Elle est de Strasbourg."],["Léo","Lucas et Yasmine sont amis?"],["Samira","Oui, ils sont amis."]],"from":"etre/szenen-3","lv":2},{"type":"gapw","q":"Hör zu und schreibe die Form von être.","text":"Madame Fournier {0} la surveillante.","ans":[["est"]],"why":"Madame Fournier = elle → <b>est</b>.","au":[["Fournier","Madame Fournier est la surveillante."]],"from":"etre/szenen-5","lv":2},{"type":"gapw","q":"Hör zu und schreibe die Formen von être.","text":"Vous {0} en sixième A? – Oui, nous {1} en sixième A.","ans":[["êtes"],["sommes"]],"why":"vous <b>êtes</b> (mit ê!) · nous <b>sommes</b>.","au":[["Fournier","Vous êtes en sixième A?"],["Noah","Oui, nous sommes en sixième A."]],"from":"etre/szenen-6","lv":2},{"type":"pick","q":"Hör zu: Wer ist gemeint? Tippe das passende Bild an.","cards":[["<svg class=\"grp\" viewBox=\"0 0 48 34\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"6\" fill=\"#dc2626\"/><path d=\"M4,34 V22 Q4,14 13,14 Q22,14 22,22 V34Z\" fill=\"#dc2626\"/><path d=\"M3,34 L13,18 L23,34Z\" fill=\"#dc2626\"/><circle cx=\"35\" cy=\"7\" r=\"6\" fill=\"#dc2626\"/><path d=\"M26,34 V22 Q26,14 35,14 Q44,14 44,22 V34Z\" fill=\"#dc2626\"/><path d=\"M25,34 L35,18 L45,34Z\" fill=\"#dc2626\"/></svg>","elles – nur Mädchen"],["<svg class=\"grp\" viewBox=\"0 0 48 34\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"6\" fill=\"#2563eb\"/><path d=\"M4,34 V22 Q4,14 13,14 Q22,14 22,22 V34Z\" fill=\"#2563eb\"/><circle cx=\"35\" cy=\"7\" r=\"6\" fill=\"#dc2626\"/><path d=\"M26,34 V22 Q26,14 35,14 Q44,14 44,22 V34Z\" fill=\"#dc2626\"/><path d=\"M25,34 L35,18 L45,34Z\" fill=\"#dc2626\"/></svg>","ils – Junge und Mädchen"],["<svg class=\"grp\" viewBox=\"0 0 26 34\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"6\" fill=\"#dc2626\"/><path d=\"M4,34 V22 Q4,14 13,14 Q22,14 22,22 V34Z\" fill=\"#dc2626\"/><path d=\"M3,34 L13,18 L23,34Z\" fill=\"#dc2626\"/></svg>","elle – ein Mädchen"],["<svg class=\"grp\" viewBox=\"0 0 26 34\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"6\" fill=\"#2563eb\"/><path d=\"M4,34 V22 Q4,14 13,14 Q22,14 22,22 V34Z\" fill=\"#2563eb\"/></svg>","il – ein Junge"]],"why":"Du hörst «<b>Elles sont</b> dans la cour.» – elles sont = mehrere, nur Mädchen.","au":"Elles sont dans la cour.","labels":false,"say":false,"from":"etre/szenen-7","lv":2},{"type":"pick","q":"Hör zu: Wer ist gemeint? Tippe das passende Bild an.","cards":[["<svg class=\"grp\" viewBox=\"0 0 26 34\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"6\" fill=\"#2563eb\"/><path d=\"M4,34 V22 Q4,14 13,14 Q22,14 22,22 V34Z\" fill=\"#2563eb\"/></svg>","il – ein Junge"],["<svg class=\"grp\" viewBox=\"0 0 48 34\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"6\" fill=\"#2563eb\"/><path d=\"M4,34 V22 Q4,14 13,14 Q22,14 22,22 V34Z\" fill=\"#2563eb\"/><circle cx=\"35\" cy=\"7\" r=\"6\" fill=\"#2563eb\"/><path d=\"M26,34 V22 Q26,14 35,14 Q44,14 44,22 V34Z\" fill=\"#2563eb\"/></svg>","ils – zwei Jungen"],["<svg class=\"grp\" viewBox=\"0 0 26 34\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"6\" fill=\"#dc2626\"/><path d=\"M4,34 V22 Q4,14 13,14 Q22,14 22,22 V34Z\" fill=\"#dc2626\"/><path d=\"M3,34 L13,18 L23,34Z\" fill=\"#dc2626\"/></svg>","elle – ein Mädchen"],["<svg class=\"grp\" viewBox=\"0 0 48 34\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"6\" fill=\"#dc2626\"/><path d=\"M4,34 V22 Q4,14 13,14 Q22,14 22,22 V34Z\" fill=\"#dc2626\"/><path d=\"M3,34 L13,18 L23,34Z\" fill=\"#dc2626\"/><circle cx=\"35\" cy=\"7\" r=\"6\" fill=\"#dc2626\"/><path d=\"M26,34 V22 Q26,14 35,14 Q44,14 44,22 V34Z\" fill=\"#dc2626\"/><path d=\"M25,34 L35,18 L45,34Z\" fill=\"#dc2626\"/></svg>","elles – zwei Mädchen"]],"why":"Du hörst «<b>Il est</b> dans la classe.» – il est = ein Junge oder Mann.","au":"Il est dans la classe.","labels":false,"say":false,"from":"etre/szenen-8","lv":2},{"type":"seg","q":"Hör zu: Welches Pronomen hörst du?","opts":["il","ils","elle","elles"],"rows":[["Satz 1","elles","Elles sont dans la classe."],["Satz 2","il","Il est de Strasbourg."],["Satz 3","ils","Ils sont en cinquième."],["Satz 4","elle","Elle est très cool."]],"why":"elles sont · il est · ils sont · elle est – das Verb hilft dir beim Hören.","tag":"Hören: il/ils, elle/elles","sub":"Tippe auf 🔊 und wähle.","from":"etre/test-1","lv":3},{"type":"seg","tf":true,"q":"Hör dir die Szene an. Richtig oder falsch?","opts":["vrai","faux"],"rows":[["Noah et Karim sont en sixième A.","vrai",null],["Madame Fournier est le professeur de français.","faux",null],["Monsieur Martel est dans la classe.","vrai",null]],"why":"Madame Fournier ist <b>la surveillante</b> (die Aufsicht). Monsieur Martel ist in der Klasse.","au":[["Fournier","Bonjour! Vous êtes en sixième A?"],["Noah","Oui, nous sommes en sixième A. Je suis Noah, et voilà Karim."],["Fournier","Moi, je suis Madame Fournier. Je suis la surveillante."],["Karim","Pardon, Madame. Monsieur Martel est là?"],["Fournier","Oui, il est dans la classe."]],"tag":"Hörverstehen","from":"etre/test-5","lv":3}],"ab":[{"type":"click","q":"Hör zu und tippe den Gegenstand im Bild an.","room":"theo","target":"guitare","why":"Du hörst «Regarde la guitare!» – la guitare = die Gitarre.","au":[["Théo","Regarde la guitare!"]],"from":"artikel-bestimmt/entdecken-4","lv":2},{"type":"click","q":"Hör zu und tippe den Gegenstand im Bild an.","room":"theo","target":"globe","why":"Du hörst «Voilà le globe.» – le globe = der Globus.","au":[["Théo","Voilà le globe."]],"from":"artikel-bestimmt/entdecken-5","lv":2},{"type":"click","q":"Hör zu und tippe den Gegenstand im Bild an.","room":"theo","target":"armoire","why":"Du hörst «L’armoire est là.» – l’armoire = der Schrank (im Französischen weiblich!).","au":[["Clara","L’armoire est là."]],"from":"artikel-bestimmt/entdecken-6","lv":2},{"type":"seg","tf":true,"q":"Hör dir den Dialog an. Richtig oder falsch?","opts":["vrai","faux"],"rows":[["Le lit est super.","vrai",null],["L’étagère, c’est l’étagère de Clara.","faux",null],["Les posters sont partout.","vrai",null]],"why":"Das Regal ist von <b>Lucas</b>: «l’étagère, c’est l’étagère de Lucas».","au":[["Théo","Salut, Clara! Voilà ma chambre."],["Clara","Oh, cool! Le lit est super!"],["Théo","Regarde, là: la guitare et la minichaîne."],["Clara","Et voilà l’ordinateur et le globe!"],["Théo","Oui. Et l’étagère, c’est l’étagère de Lucas."],["Clara","Et les posters sont partout. C’est trop cool!"]],"from":"artikel-bestimmt/entdecken-7","lv":2},{"type":"seg","q":"Hör zu: Hörst du <b>le</b> oder <b>les</b>?","opts":["le","les"],"rows":[["Satz 1","les","Regarde les livres!"],["Satz 2","le","Voilà le livre."],["Satz 3","les","Les CD sont là."],["Satz 4","le","Le poster est cool."]],"why":"Den Plural hörst du nur am Artikel: le [lə] – les [le].","sub":"Tippe auf 🔊 und entscheide.","from":"artikel-bestimmt/plural-5","lv":2},{"type":"seg","q":"Hör zu: Hörst du <b>la</b> oder <b>les</b>?","opts":["la","les"],"rows":[["Satz 1","la","Voilà la photo."],["Satz 2","les","Voilà les photos."],["Satz 3","les","Les chaises sont là."],["Satz 4","la","La lampe est super."]],"why":"la [la] – les [le]. Das -s von photos hört man nicht!","sub":"Tippe auf 🔊 und entscheide.","from":"artikel-bestimmt/plural-6","lv":2},{"type":"pick","q":"Hör zu: Welches Bild passt?","cards":[["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4,16) scale(.62)\"><path d=\"M8,14 Q19,10 30,15 Q41,10 52,14 V48 Q41,44 30,49 Q19,44 8,48Z\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><path d=\"M30,15 V49\" stroke=\"#1e3a8a\" stroke-width=\"1.5\"/><path d=\"M13,22 H25 M13,28 H25 M35,22 H47 M35,28 H47 M13,34 H25 M35,34 H47\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/></g><g transform=\"translate(18,8) scale(.62)\"><path d=\"M8,14 Q19,10 30,15 Q41,10 52,14 V48 Q41,44 30,49 Q19,44 8,48Z\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><path d=\"M30,15 V49\" stroke=\"#1e3a8a\" stroke-width=\"1.5\"/><path d=\"M13,22 H25 M13,28 H25 M35,22 H47 M35,28 H47 M13,34 H25 M35,34 H47\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/></g><g transform=\"translate(32,0) scale(.62)\"><path d=\"M8,14 Q19,10 30,15 Q41,10 52,14 V48 Q41,44 30,49 Q19,44 8,48Z\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><path d=\"M30,15 V49\" stroke=\"#1e3a8a\" stroke-width=\"1.5\"/><path d=\"M13,22 H25 M13,28 H25 M35,22 H47 M35,28 H47 M13,34 H25 M35,34 H47\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/></g></svg>","les livres"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8,14 Q19,10 30,15 Q41,10 52,14 V48 Q41,44 30,49 Q19,44 8,48Z\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><path d=\"M30,15 V49\" stroke=\"#1e3a8a\" stroke-width=\"1.5\"/><path d=\"M13,22 H25 M13,28 H25 M35,22 H47 M35,28 H47 M13,34 H25 M35,34 H47\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/></svg>","le livre"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14\" y=\"6\" width=\"34\" height=\"48\" rx=\"2\" fill=\"#16a34a\"/><rect x=\"14\" y=\"6\" width=\"6\" height=\"48\" fill=\"#15803d\"/><rect x=\"24\" y=\"14\" width=\"20\" height=\"9\" rx=\"1\" fill=\"#fff\"/></svg>","le cahier"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4,16) scale(.62)\"><rect x=\"14\" y=\"6\" width=\"34\" height=\"48\" rx=\"2\" fill=\"#16a34a\"/><rect x=\"14\" y=\"6\" width=\"6\" height=\"48\" fill=\"#15803d\"/><rect x=\"24\" y=\"14\" width=\"20\" height=\"9\" rx=\"1\" fill=\"#fff\"/></g><g transform=\"translate(18,8) scale(.62)\"><rect x=\"14\" y=\"6\" width=\"34\" height=\"48\" rx=\"2\" fill=\"#16a34a\"/><rect x=\"14\" y=\"6\" width=\"6\" height=\"48\" fill=\"#15803d\"/><rect x=\"24\" y=\"14\" width=\"20\" height=\"9\" rx=\"1\" fill=\"#fff\"/></g><g transform=\"translate(32,0) scale(.62)\"><rect x=\"14\" y=\"6\" width=\"34\" height=\"48\" rx=\"2\" fill=\"#16a34a\"/><rect x=\"14\" y=\"6\" width=\"6\" height=\"48\" fill=\"#15803d\"/><rect x=\"24\" y=\"14\" width=\"20\" height=\"9\" rx=\"1\" fill=\"#fff\"/></g></svg>","les cahiers"]],"why":"Du hörst «les livres» – les = mehrere.","au":"les livres","from":"artikel-bestimmt/plural-7","lv":2},{"type":"pick","q":"Hör zu: Welches Bild passt?","cards":[["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"8\" y=\"12\" width=\"44\" height=\"36\" rx=\"2\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><rect x=\"12\" y=\"16\" width=\"36\" height=\"24\" fill=\"#bfdbfe\"/><circle cx=\"24\" cy=\"26\" r=\"4\" fill=\"#f2c9a0\"/><path d=\"M18,40 Q24,30 30,40Z\" fill=\"#3b82f6\"/><circle cx=\"36\" cy=\"26\" r=\"4\" fill=\"#d9a77c\"/><path d=\"M30,40 Q36,30 42,40Z\" fill=\"#ef4444\"/></svg>","la photo"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4,16) scale(.62)\"><rect x=\"8\" y=\"12\" width=\"44\" height=\"36\" rx=\"2\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><rect x=\"12\" y=\"16\" width=\"36\" height=\"24\" fill=\"#bfdbfe\"/><circle cx=\"24\" cy=\"26\" r=\"4\" fill=\"#f2c9a0\"/><path d=\"M18,40 Q24,30 30,40Z\" fill=\"#3b82f6\"/><circle cx=\"36\" cy=\"26\" r=\"4\" fill=\"#d9a77c\"/><path d=\"M30,40 Q36,30 42,40Z\" fill=\"#ef4444\"/></g><g transform=\"translate(18,8) scale(.62)\"><rect x=\"8\" y=\"12\" width=\"44\" height=\"36\" rx=\"2\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><rect x=\"12\" y=\"16\" width=\"36\" height=\"24\" fill=\"#bfdbfe\"/><circle cx=\"24\" cy=\"26\" r=\"4\" fill=\"#f2c9a0\"/><path d=\"M18,40 Q24,30 30,40Z\" fill=\"#3b82f6\"/><circle cx=\"36\" cy=\"26\" r=\"4\" fill=\"#d9a77c\"/><path d=\"M30,40 Q36,30 42,40Z\" fill=\"#ef4444\"/></g><g transform=\"translate(32,0) scale(.62)\"><rect x=\"8\" y=\"12\" width=\"44\" height=\"36\" rx=\"2\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><rect x=\"12\" y=\"16\" width=\"36\" height=\"24\" fill=\"#bfdbfe\"/><circle cx=\"24\" cy=\"26\" r=\"4\" fill=\"#f2c9a0\"/><path d=\"M18,40 Q24,30 30,40Z\" fill=\"#3b82f6\"/><circle cx=\"36\" cy=\"26\" r=\"4\" fill=\"#d9a77c\"/><path d=\"M30,40 Q36,30 42,40Z\" fill=\"#ef4444\"/></g></svg>","les photos"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"6\" width=\"36\" height=\"48\" rx=\"1\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><circle cx=\"30\" cy=\"22\" r=\"8\" fill=\"#f97316\"/><path d=\"M14,52 L26,34 L34,44 L40,38 L46,52 Z\" fill=\"#22c55e\"/><circle cx=\"14\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/><circle cx=\"46\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/></svg>","le poster"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4,16) scale(.62)\"><rect x=\"12\" y=\"6\" width=\"36\" height=\"48\" rx=\"1\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><circle cx=\"30\" cy=\"22\" r=\"8\" fill=\"#f97316\"/><path d=\"M14,52 L26,34 L34,44 L40,38 L46,52 Z\" fill=\"#22c55e\"/><circle cx=\"14\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/><circle cx=\"46\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/></g><g transform=\"translate(18,8) scale(.62)\"><rect x=\"12\" y=\"6\" width=\"36\" height=\"48\" rx=\"1\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><circle cx=\"30\" cy=\"22\" r=\"8\" fill=\"#f97316\"/><path d=\"M14,52 L26,34 L34,44 L40,38 L46,52 Z\" fill=\"#22c55e\"/><circle cx=\"14\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/><circle cx=\"46\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/></g><g transform=\"translate(32,0) scale(.62)\"><rect x=\"12\" y=\"6\" width=\"36\" height=\"48\" rx=\"1\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><circle cx=\"30\" cy=\"22\" r=\"8\" fill=\"#f97316\"/><path d=\"M14,52 L26,34 L34,44 L40,38 L46,52 Z\" fill=\"#22c55e\"/><circle cx=\"14\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/><circle cx=\"46\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/></g></svg>","les posters"]],"why":"Du hörst «la photo» – la = eine (weiblich).","au":"la photo","from":"artikel-bestimmt/plural-8","lv":2},{"type":"seg","q":"Hör zu: le, la, l’ oder les?","opts":["le","la","l’","les"],"rows":[["Satz 1","la","Voilà la règle de Samira."],["Satz 2","le","C’est le stylo de Karim."],["Satz 3","l’","C’est l’effaceur de Clara."],["Satz 4","les","Regarde les crayons de couleur!"]],"why":"la règle · le stylo · l’effaceur · les crayons de couleur.","sub":"Tippe auf 🔊 und wähle den Artikel.","from":"artikel-bestimmt/szenen-0","lv":2},{"type":"seg","q":"Hör zu: le, la, l’ oder les?","opts":["le","la","l’","les"],"rows":[["Satz 1","les","Les élèves sont dans la cour."],["Satz 2","l’","L’école est cool."],["Satz 3","le","Le professeur est là."],["Satz 4","la","La fille est nouvelle."]],"why":"Les élèves · L’école · Le professeur · La fille.","sub":"Tippe auf 🔊 und wähle den Artikel.","from":"artikel-bestimmt/szenen-1","lv":2},{"type":"seg","tf":true,"q":"Hör dir den Dialog an. Richtig oder falsch?","opts":["vrai","faux"],"rows":[["Le stylo, c’est le stylo de Noah.","faux",null],["La règle, c’est la règle de Samira.","vrai",null],["L’effaceur, c’est l’effaceur de Clara.","vrai",null],["Le cahier, c’est le cahier de Théo.","faux",null]],"why":"Der Kuli gehört <b>Karim</b>. Beim Heft sagt Lucas: «Je ne sais pas.» – das wissen wir also nicht.","au":[["Jade","Pardon, Lucas. C’est le stylo de Noah?"],["Lucas","Non, c’est le stylo de Karim."],["Jade","Et la règle?"],["Lucas","La règle, c’est la règle de Samira."],["Jade","Et l’effaceur? C’est l’effaceur de Clara?"],["Lucas","Oui. Et voilà les crayons de couleur de Théo."],["Jade","Et le cahier?"],["Lucas","Le cahier? Je ne sais pas."]],"from":"artikel-bestimmt/szenen-2","lv":2},{"type":"mc","q":"Hör zu: Wem gehört der Tintenkiller?","o":["Clara","Samira","Karim","Théo"],"why":"«L’effaceur? C’est l’effaceur de Clara?» – «Oui.»","au":[["Jade","Et l’effaceur? C’est l’effaceur de Clara?"],["Lucas","Oui."]],"from":"artikel-bestimmt/szenen-3","lv":2},{"type":"gapw","q":"Hör zu und ergänze den Artikel.","text":"Voilà {0} classe de sixième A. {1} élèves sont dans {2} cour.","ans":[["la"],["Les"],["la"]],"why":"la classe · Les élèves · la cour.","au":"Voilà la classe de sixième A. Les élèves sont dans la cour.","from":"artikel-bestimmt/szenen-5","lv":2},{"type":"click","q":"Hör zu und tippe den Gegenstand an.","room":"theo","target":"minichaine","why":"«Voilà la minichaîne.» – die Mini-Stereoanlage.","au":[["Théo","Voilà la minichaîne."]],"from":"artikel-bestimmt/szenen-6","lv":2},{"type":"click","q":"Hör zu und tippe den Gegenstand an.","room":"theo","target":"etagere","why":"«L’étagère est super.» – das Regal (weiblich).","au":[["Clara","L’étagère est super."]],"from":"artikel-bestimmt/szenen-7","lv":2},{"type":"click","q":"Hör zu und tippe den Gegenstand an.","room":"theo","target":"ordinateur","why":"«Regarde l’ordinateur!» – der Computer (männlich).","au":[["Théo","Regarde l’ordinateur!"]],"from":"artikel-bestimmt/szenen-8","lv":2},{"type":"seg","q":"Hör zu: Ist es <b>einer</b> oder sind es <b>mehrere</b>?","opts":["einer","mehrere"],"rows":[["Satz 1","mehrere","Regarde les posters!"],["Satz 2","einer","Voilà le poster."],["Satz 3","mehrere","Les élèves sont là."],["Satz 4","einer","L’élève est là."]],"why":"les [le] / les‿élèves [lez…] = mehrere · le [lə] / l’élève = einer.","sub":"Tippe auf 🔊 und entscheide.","from":"artikel-bestimmt/schwer-9","lv":2},{"type":"seg","q":"Hör zu: le, la, l’ oder les?","opts":["le","la","l’","les"],"rows":[["Satz 1","les","Les figurines sont là."],["Satz 2","la","Regarde la photo!"],["Satz 3","l’","L’ami de Karim est là."],["Satz 4","le","Le livre est dans l’étagère."]],"why":"Les figurines · la photo · L’ami · Le livre.","tag":"Hören: Artikel erkennen","sub":"Tippe auf 🔊 und wähle.","from":"artikel-bestimmt/test-1","lv":3}],"au":[{"type":"multi","q":"Was gibt es in Noahs Zimmer? Hör dir den Dialog an und tippe alles an, was Noah nennt.","o":[["un lit",1],["une table",1],["un ordinateur",1],["des livres",1],["un hamac",1],["une armoire",0],["un globe",0],["une lampe",0]],"why":"Noah nennt: un lit, une table, une chaise, un ordinateur, des livres, des posters, une guitare, un hamac. Eine armoire, einen globe und eine lampe nennt er nicht.","au":[["Yasmine","Salut, Noah! Qu’est-ce qu’il y a dans ta chambre?"],["Noah","Dans ma chambre, il y a un lit, une table et une chaise."],["Yasmine","Il y a aussi un ordinateur?"],["Noah","Oui, il y a un ordinateur. Et il y a des livres et des posters."],["Yasmine","Et une guitare?"],["Noah","Oui, il y a une guitare. Et il y a un hamac!"],["Yasmine","Un hamac? C’est trop cool!"]],"from":"artikel-unbestimmt/entdecken-0","lv":2},{"type":"click","q":"Hör zu und tippe im Bild an, was du hörst.","room":"noah","target":"hamac","why":"«Il y a un hamac.» – un hamac = eine Hängematte (im Französischen männlich).","au":[["Noah","Il y a un hamac."]],"from":"artikel-unbestimmt/entdecken-4","lv":2},{"type":"click","q":"Hör zu und tippe im Bild an, was du hörst.","room":"noah","target":"guitare","why":"«Il y a une guitare.» – une guitare = eine Gitarre.","au":[["Noah","Il y a une guitare."]],"from":"artikel-unbestimmt/entdecken-5","lv":2},{"type":"seg","tf":true,"q":"Hör dir den Dialog an. Richtig oder falsch?","opts":["vrai","faux"],"rows":[["Dans la chambre de Noah, il y a un ordinateur.","vrai",null],["Il y a une armoire.","faux",null],["Il y a un hamac.","vrai",null]],"why":"Eine Armoire nennt Noah nicht. Ordinateur und hamac gibt es.","au":[["Yasmine","Salut, Noah! Qu’est-ce qu’il y a dans ta chambre?"],["Noah","Dans ma chambre, il y a un lit, une table et une chaise."],["Yasmine","Il y a aussi un ordinateur?"],["Noah","Oui, il y a un ordinateur. Et il y a des livres et des posters."],["Yasmine","Et une guitare?"],["Noah","Oui, il y a une guitare. Et il y a un hamac!"],["Yasmine","Un hamac? C’est trop cool!"]],"from":"artikel-unbestimmt/entdecken-7","lv":2},{"type":"pick","q":"Hör zu: Welches Bild passt?","cards":[["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4,16) scale(.62)\"><path d=\"M8,14 Q19,10 30,15 Q41,10 52,14 V48 Q41,44 30,49 Q19,44 8,48Z\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><path d=\"M30,15 V49\" stroke=\"#1e3a8a\" stroke-width=\"1.5\"/><path d=\"M13,22 H25 M13,28 H25 M35,22 H47 M35,28 H47 M13,34 H25 M35,34 H47\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/></g><g transform=\"translate(18,8) scale(.62)\"><path d=\"M8,14 Q19,10 30,15 Q41,10 52,14 V48 Q41,44 30,49 Q19,44 8,48Z\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><path d=\"M30,15 V49\" stroke=\"#1e3a8a\" stroke-width=\"1.5\"/><path d=\"M13,22 H25 M13,28 H25 M35,22 H47 M35,28 H47 M13,34 H25 M35,34 H47\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/></g><g transform=\"translate(32,0) scale(.62)\"><path d=\"M8,14 Q19,10 30,15 Q41,10 52,14 V48 Q41,44 30,49 Q19,44 8,48Z\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><path d=\"M30,15 V49\" stroke=\"#1e3a8a\" stroke-width=\"1.5\"/><path d=\"M13,22 H25 M13,28 H25 M35,22 H47 M35,28 H47 M13,34 H25 M35,34 H47\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/></g></svg>","des livres"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8,14 Q19,10 30,15 Q41,10 52,14 V48 Q41,44 30,49 Q19,44 8,48Z\" fill=\"#fff\" stroke=\"#1e3a8a\" stroke-width=\"2\"/><path d=\"M30,15 V49\" stroke=\"#1e3a8a\" stroke-width=\"1.5\"/><path d=\"M13,22 H25 M13,28 H25 M35,22 H47 M35,28 H47 M13,34 H25 M35,34 H47\" stroke=\"#94a3b8\" stroke-width=\"1.4\"/></svg>","un livre"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"8\" y=\"12\" width=\"44\" height=\"36\" rx=\"2\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><rect x=\"12\" y=\"16\" width=\"36\" height=\"24\" fill=\"#bfdbfe\"/><circle cx=\"24\" cy=\"26\" r=\"4\" fill=\"#f2c9a0\"/><path d=\"M18,40 Q24,30 30,40Z\" fill=\"#3b82f6\"/><circle cx=\"36\" cy=\"26\" r=\"4\" fill=\"#d9a77c\"/><path d=\"M30,40 Q36,30 42,40Z\" fill=\"#ef4444\"/></svg>","une photo"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4,16) scale(.62)\"><rect x=\"8\" y=\"12\" width=\"44\" height=\"36\" rx=\"2\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><rect x=\"12\" y=\"16\" width=\"36\" height=\"24\" fill=\"#bfdbfe\"/><circle cx=\"24\" cy=\"26\" r=\"4\" fill=\"#f2c9a0\"/><path d=\"M18,40 Q24,30 30,40Z\" fill=\"#3b82f6\"/><circle cx=\"36\" cy=\"26\" r=\"4\" fill=\"#d9a77c\"/><path d=\"M30,40 Q36,30 42,40Z\" fill=\"#ef4444\"/></g><g transform=\"translate(18,8) scale(.62)\"><rect x=\"8\" y=\"12\" width=\"44\" height=\"36\" rx=\"2\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><rect x=\"12\" y=\"16\" width=\"36\" height=\"24\" fill=\"#bfdbfe\"/><circle cx=\"24\" cy=\"26\" r=\"4\" fill=\"#f2c9a0\"/><path d=\"M18,40 Q24,30 30,40Z\" fill=\"#3b82f6\"/><circle cx=\"36\" cy=\"26\" r=\"4\" fill=\"#d9a77c\"/><path d=\"M30,40 Q36,30 42,40Z\" fill=\"#ef4444\"/></g><g transform=\"translate(32,0) scale(.62)\"><rect x=\"8\" y=\"12\" width=\"44\" height=\"36\" rx=\"2\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><rect x=\"12\" y=\"16\" width=\"36\" height=\"24\" fill=\"#bfdbfe\"/><circle cx=\"24\" cy=\"26\" r=\"4\" fill=\"#f2c9a0\"/><path d=\"M18,40 Q24,30 30,40Z\" fill=\"#3b82f6\"/><circle cx=\"36\" cy=\"26\" r=\"4\" fill=\"#d9a77c\"/><path d=\"M30,40 Q36,30 42,40Z\" fill=\"#ef4444\"/></g></svg>","des photos"]],"why":"Du hörst «Il y a des livres.» – des = mehrere.","au":"Il y a des livres.","lv":2,"from":"artikel-unbestimmt/regel-11"},{"type":"seg","q":"Hör zu: un, une oder des?","opts":["un","une","des"],"rows":[["Satz 1","une","Il y a une lampe."],["Satz 2","un","Il y a un poster."],["Satz 3","des","Il y a des photos."],["Satz 4","une","Il y a une chaise."],["Satz 5","un","Il y a un ordinateur."]],"why":"une lampe · un poster · des photos · une chaise · un‿ordinateur.","sub":"Tippe auf 🔊 und wähle.","from":"artikel-unbestimmt/szenen-0","lv":2},{"type":"seg","q":"Hör zu: un, une oder des?","opts":["un","une","des"],"rows":[["Satz 1","des","Il y a des figurines."],["Satz 2","une","Il y a une armoire."],["Satz 3","un","Il y a un globe."],["Satz 4","des","Il y a des CD."]],"why":"des figurines · une‿armoire · un globe · des CD.","sub":"Tippe auf 🔊 und wähle.","from":"artikel-unbestimmt/szenen-1","lv":2},{"type":"pick","q":"Hör zu: Welches Bild passt?","cards":[["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4,16) scale(.62)\"><rect x=\"12\" y=\"6\" width=\"36\" height=\"48\" rx=\"1\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><circle cx=\"30\" cy=\"22\" r=\"8\" fill=\"#f97316\"/><path d=\"M14,52 L26,34 L34,44 L40,38 L46,52 Z\" fill=\"#22c55e\"/><circle cx=\"14\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/><circle cx=\"46\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/></g><g transform=\"translate(18,8) scale(.62)\"><rect x=\"12\" y=\"6\" width=\"36\" height=\"48\" rx=\"1\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><circle cx=\"30\" cy=\"22\" r=\"8\" fill=\"#f97316\"/><path d=\"M14,52 L26,34 L34,44 L40,38 L46,52 Z\" fill=\"#22c55e\"/><circle cx=\"14\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/><circle cx=\"46\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/></g><g transform=\"translate(32,0) scale(.62)\"><rect x=\"12\" y=\"6\" width=\"36\" height=\"48\" rx=\"1\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><circle cx=\"30\" cy=\"22\" r=\"8\" fill=\"#f97316\"/><path d=\"M14,52 L26,34 L34,44 L40,38 L46,52 Z\" fill=\"#22c55e\"/><circle cx=\"14\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/><circle cx=\"46\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/></g></svg>","des posters"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"12\" y=\"6\" width=\"36\" height=\"48\" rx=\"1\" fill=\"#fff\" stroke=\"#334155\" stroke-width=\"1.5\"/><circle cx=\"30\" cy=\"22\" r=\"8\" fill=\"#f97316\"/><path d=\"M14,52 L26,34 L34,44 L40,38 L46,52 Z\" fill=\"#22c55e\"/><circle cx=\"14\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/><circle cx=\"46\" cy=\"8\" r=\"1.6\" fill=\"#ef4444\"/></svg>","un poster"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20,8 H40 L46,28 H14 Z\" fill=\"#facc15\"/><rect x=\"28\" y=\"28\" width=\"4\" height=\"20\" fill=\"#475569\"/><rect x=\"18\" y=\"48\" width=\"24\" height=\"5\" rx=\"2\" fill=\"#334155\"/><path d=\"M14,30 L6,46 M46,30 L54,46\" stroke=\"#fde68a\" stroke-width=\"2\" opacity=\".8\"/></svg>","une lampe"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4,16) scale(.62)\"><circle cx=\"30\" cy=\"30\" r=\"22\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><path d=\"M30,8 A22,22 0 0 1 52,30 L38,30 A8,8 0 0 0 30,22Z\" fill=\"#c4b5fd\" opacity=\".8\"/><circle cx=\"30\" cy=\"30\" r=\"5\" fill=\"#fff\" stroke=\"#94a3b8\"/></g><g transform=\"translate(18,8) scale(.62)\"><circle cx=\"30\" cy=\"30\" r=\"22\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><path d=\"M30,8 A22,22 0 0 1 52,30 L38,30 A8,8 0 0 0 30,22Z\" fill=\"#c4b5fd\" opacity=\".8\"/><circle cx=\"30\" cy=\"30\" r=\"5\" fill=\"#fff\" stroke=\"#94a3b8\"/></g><g transform=\"translate(32,0) scale(.62)\"><circle cx=\"30\" cy=\"30\" r=\"22\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/><path d=\"M30,8 A22,22 0 0 1 52,30 L38,30 A8,8 0 0 0 30,22Z\" fill=\"#c4b5fd\" opacity=\".8\"/><circle cx=\"30\" cy=\"30\" r=\"5\" fill=\"#fff\" stroke=\"#94a3b8\"/></g></svg>","des CD"]],"why":"«Il y a des posters.» – des = mehrere Poster.","au":"Il y a des posters.","from":"artikel-unbestimmt/szenen-2","lv":2},{"type":"pick","q":"Hör zu: Welches Bild passt?","cards":[["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"30\" cy=\"12\" r=\"7\" fill=\"#f2c9a0\"/><path d=\"M22,8 Q30,0 38,8 L37,10 H23Z\" fill=\"#111827\"/><rect x=\"22\" y=\"19\" width=\"16\" height=\"18\" rx=\"3\" fill=\"#dc2626\"/><rect x=\"23\" y=\"37\" width=\"6\" height=\"14\" fill=\"#1e3a8a\"/><rect x=\"31\" y=\"37\" width=\"6\" height=\"14\" fill=\"#1e3a8a\"/><rect x=\"16\" y=\"20\" width=\"5\" height=\"14\" rx=\"2\" fill=\"#f2c9a0\"/><rect x=\"39\" y=\"20\" width=\"5\" height=\"14\" rx=\"2\" fill=\"#f2c9a0\"/><rect x=\"18\" y=\"51\" width=\"24\" height=\"5\" rx=\"1\" fill=\"#94a3b8\"/></svg>","une figurine"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4,16) scale(.62)\"><circle cx=\"30\" cy=\"12\" r=\"7\" fill=\"#f2c9a0\"/><path d=\"M22,8 Q30,0 38,8 L37,10 H23Z\" fill=\"#111827\"/><rect x=\"22\" y=\"19\" width=\"16\" height=\"18\" rx=\"3\" fill=\"#dc2626\"/><rect x=\"23\" y=\"37\" width=\"6\" height=\"14\" fill=\"#1e3a8a\"/><rect x=\"31\" y=\"37\" width=\"6\" height=\"14\" fill=\"#1e3a8a\"/><rect x=\"16\" y=\"20\" width=\"5\" height=\"14\" rx=\"2\" fill=\"#f2c9a0\"/><rect x=\"39\" y=\"20\" width=\"5\" height=\"14\" rx=\"2\" fill=\"#f2c9a0\"/><rect x=\"18\" y=\"51\" width=\"24\" height=\"5\" rx=\"1\" fill=\"#94a3b8\"/></g><g transform=\"translate(18,8) scale(.62)\"><circle cx=\"30\" cy=\"12\" r=\"7\" fill=\"#f2c9a0\"/><path d=\"M22,8 Q30,0 38,8 L37,10 H23Z\" fill=\"#111827\"/><rect x=\"22\" y=\"19\" width=\"16\" height=\"18\" rx=\"3\" fill=\"#dc2626\"/><rect x=\"23\" y=\"37\" width=\"6\" height=\"14\" fill=\"#1e3a8a\"/><rect x=\"31\" y=\"37\" width=\"6\" height=\"14\" fill=\"#1e3a8a\"/><rect x=\"16\" y=\"20\" width=\"5\" height=\"14\" rx=\"2\" fill=\"#f2c9a0\"/><rect x=\"39\" y=\"20\" width=\"5\" height=\"14\" rx=\"2\" fill=\"#f2c9a0\"/><rect x=\"18\" y=\"51\" width=\"24\" height=\"5\" rx=\"1\" fill=\"#94a3b8\"/></g><g transform=\"translate(32,0) scale(.62)\"><circle cx=\"30\" cy=\"12\" r=\"7\" fill=\"#f2c9a0\"/><path d=\"M22,8 Q30,0 38,8 L37,10 H23Z\" fill=\"#111827\"/><rect x=\"22\" y=\"19\" width=\"16\" height=\"18\" rx=\"3\" fill=\"#dc2626\"/><rect x=\"23\" y=\"37\" width=\"6\" height=\"14\" fill=\"#1e3a8a\"/><rect x=\"31\" y=\"37\" width=\"6\" height=\"14\" fill=\"#1e3a8a\"/><rect x=\"16\" y=\"20\" width=\"5\" height=\"14\" rx=\"2\" fill=\"#f2c9a0\"/><rect x=\"39\" y=\"20\" width=\"5\" height=\"14\" rx=\"2\" fill=\"#f2c9a0\"/><rect x=\"18\" y=\"51\" width=\"24\" height=\"5\" rx=\"1\" fill=\"#94a3b8\"/></g></svg>","des figurines"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"30\" cy=\"24\" r=\"17\" fill=\"#60a5fa\"/><path d=\"M20,14 Q26,12 28,18 Q24,24 18,22Z M32,24 Q40,20 44,26 Q40,34 34,32Z M24,32 Q28,30 30,36 Q26,38 24,32Z\" fill=\"#22c55e\"/><path d=\"M8,24 A22,22 0 0 0 52,24\" stroke=\"#92400e\" stroke-width=\"2.5\" fill=\"none\"/><rect x=\"28\" y=\"44\" width=\"4\" height=\"8\" fill=\"#92400e\"/><rect x=\"18\" y=\"52\" width=\"24\" height=\"4\" rx=\"2\" fill=\"#78350f\"/></svg>","un globe"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4,16) scale(.62)\"><path d=\"M10,44 Q8,30 20,24 Q30,16 42,24 Q54,30 50,44 Q30,52 10,44Z\" fill=\"#94a3b8\"/><path d=\"M20,30 Q26,26 30,30\" stroke=\"#cbd5e1\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(18,8) scale(.62)\"><path d=\"M10,44 Q8,30 20,24 Q30,16 42,24 Q54,30 50,44 Q30,52 10,44Z\" fill=\"#94a3b8\"/><path d=\"M20,30 Q26,26 30,30\" stroke=\"#cbd5e1\" stroke-width=\"2\" fill=\"none\"/></g><g transform=\"translate(32,0) scale(.62)\"><path d=\"M10,44 Q8,30 20,24 Q30,16 42,24 Q54,30 50,44 Q30,52 10,44Z\" fill=\"#94a3b8\"/><path d=\"M20,30 Q26,26 30,30\" stroke=\"#cbd5e1\" stroke-width=\"2\" fill=\"none\"/></g></svg>","des pierres"]],"why":"«Il y a une figurine.» – une = eine.","au":"Il y a une figurine.","from":"artikel-unbestimmt/szenen-3","lv":2},{"type":"mark","q":"Hör zu: Was gibt es in Noahs Zimmer? Markiere alles, was du hörst.","room":"noah","targets":["lit","armoire","guitare","livre"],"why":"Du hörst: un lit, une armoire, une guitare und des livres.","au":[["Noah","Dans ma chambre, il y a un lit et une armoire. Il y a aussi une guitare et des livres."]],"from":"artikel-unbestimmt/szenen-4","lv":2},{"type":"seg","tf":true,"q":"Hör dir Monsieur Martel an. Richtig oder falsch?","opts":["vrai","faux"],"rows":[["Dans la classe, il y a des tables et des chaises.","vrai",null],["Il y a un hamac.","faux",null],["Dans l’étagère, il y a des livres et des B.D.","vrai",null],["Il y a une guitare.","faux",null]],"why":"In der Klasse gibt es Tische, Stühle, einen Computer, einen Globus und ein Regal mit Büchern und Comics. Keine Hängematte und keine Gitarre!","au":[["Martel","Bonjour! Voilà la classe de sixième A."],["Martel","Dans la classe, il y a des tables et des chaises."],["Martel","Il y a aussi un ordinateur et un globe."],["Martel","Et là, il y a une étagère. Dans l’étagère, il y a des livres et des B.D."]],"from":"artikel-unbestimmt/szenen-5","lv":2},{"type":"gapw","q":"Hör zu und schreibe den Artikel.","text":"Dans la classe, il y a {0} ordinateur, {1} étagère et {2} chaises.","ans":[["un"],["une"],["des"]],"why":"un ordinateur · une étagère · des chaises.","au":"Dans la classe, il y a un ordinateur, une étagère et des chaises.","from":"artikel-unbestimmt/szenen-6","lv":2},{"type":"mc","q":"Hör zu: Was hat Léo in seinem Zimmer?","o":["un globe et des pierres","une guitare et un hamac","des CD et une minichaîne","des figurines et des B.D."],"why":"Léo sagt: «Il y a un globe et des pierres.»","au":[["Léo","Dans ma chambre, il y a un globe et des pierres."]],"from":"artikel-unbestimmt/szenen-8","lv":2},{"type":"pick","q":"Hör zu: Welches Bild passt?","cards":[["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"14\" y=\"6\" width=\"34\" height=\"48\" rx=\"2\" fill=\"#16a34a\"/><rect x=\"14\" y=\"6\" width=\"6\" height=\"48\" fill=\"#15803d\"/><rect x=\"24\" y=\"14\" width=\"20\" height=\"9\" rx=\"1\" fill=\"#fff\"/></svg>","un cahier"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4,16) scale(.62)\"><rect x=\"14\" y=\"6\" width=\"34\" height=\"48\" rx=\"2\" fill=\"#16a34a\"/><rect x=\"14\" y=\"6\" width=\"6\" height=\"48\" fill=\"#15803d\"/><rect x=\"24\" y=\"14\" width=\"20\" height=\"9\" rx=\"1\" fill=\"#fff\"/></g><g transform=\"translate(18,8) scale(.62)\"><rect x=\"14\" y=\"6\" width=\"34\" height=\"48\" rx=\"2\" fill=\"#16a34a\"/><rect x=\"14\" y=\"6\" width=\"6\" height=\"48\" fill=\"#15803d\"/><rect x=\"24\" y=\"14\" width=\"20\" height=\"9\" rx=\"1\" fill=\"#fff\"/></g><g transform=\"translate(32,0) scale(.62)\"><rect x=\"14\" y=\"6\" width=\"34\" height=\"48\" rx=\"2\" fill=\"#16a34a\"/><rect x=\"14\" y=\"6\" width=\"6\" height=\"48\" fill=\"#15803d\"/><rect x=\"24\" y=\"14\" width=\"20\" height=\"9\" rx=\"1\" fill=\"#fff\"/></g></svg>","des cahiers"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"rotate(-20 30 30)\"><rect x=\"2\" y=\"22\" width=\"56\" height=\"14\" rx=\"1\" fill=\"#fde68a\" stroke=\"#ca8a04\"/><path d=\"M8,22 v6 M14,22 v4 M20,22 v6 M26,22 v4 M32,22 v6 M38,22 v4 M44,22 v6 M50,22 v4\" stroke=\"#92400e\" stroke-width=\"1.2\"/></g></svg>","une règle"],["<svg class=\"obj \" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(4,16) scale(.62)\"><g transform=\"rotate(-40 30 30)\"><rect x=\"26\" y=\"4\" width=\"8\" height=\"40\" rx=\"2\" fill=\"#2563eb\"/><path d=\"M26,44 H34 L30,56Z\" fill=\"#cbd5e1\"/><rect x=\"34\" y=\"6\" width=\"2\" height=\"14\" fill=\"#1e3a8a\"/></g></g><g transform=\"translate(18,8) scale(.62)\"><g transform=\"rotate(-40 30 30)\"><rect x=\"26\" y=\"4\" width=\"8\" height=\"40\" rx=\"2\" fill=\"#2563eb\"/><path d=\"M26,44 H34 L30,56Z\" fill=\"#cbd5e1\"/><rect x=\"34\" y=\"6\" width=\"2\" height=\"14\" fill=\"#1e3a8a\"/></g></g><g transform=\"translate(32,0) scale(.62)\"><g transform=\"rotate(-40 30 30)\"><rect x=\"26\" y=\"4\" width=\"8\" height=\"40\" rx=\"2\" fill=\"#2563eb\"/><path d=\"M26,44 H34 L30,56Z\" fill=\"#cbd5e1\"/><rect x=\"34\" y=\"6\" width=\"2\" height=\"14\" fill=\"#1e3a8a\"/></g></g></svg>","des stylos"]],"why":"«un cahier» = ein Heft.","au":"un cahier","from":"artikel-unbestimmt/leicht-9","lv":2},{"type":"seg","q":"Hör zu: Welchen Artikel hörst du?","opts":["un","une","le","la","les","des"],"rows":[["Satz 1","une","Il y a une minichaîne."],["Satz 2","la","Voilà la minichaîne de Jade."],["Satz 3","des","Il y a des pierres."],["Satz 4","les","Regarde les pierres!"]],"why":"une · la · des · les.","sub":"Tippe auf 🔊 und wähle.","from":"artikel-unbestimmt/schwer-8","lv":2},{"type":"seg","q":"Hör zu: un, une oder des?","opts":["un","une","des"],"rows":[["Satz 1","une","Il y a une table."],["Satz 2","des","Il y a des B.D."],["Satz 3","un","Il y a un hamac."],["Satz 4","une","Il y a une étagère."]],"why":"une table · des B.D. · un hamac · une étagère.","tag":"Hören: un/une/des","sub":"Tippe auf 🔊 und wähle.","from":"artikel-unbestimmt/test-1","lv":3},{"type":"mark","q":"Hör zu und markiere im Bild, was es in Noahs Zimmer gibt.","room":"noah","targets":["hamac","ordinateur","lampe","cd"],"why":"Du hörst: un hamac, un ordinateur, une lampe et des CD.","au":[["Noah","Il y a un hamac, un ordinateur, une lampe et des CD."]],"tag":"Hören: Bild markieren","from":"artikel-unbestimmt/test-5","lv":3}],"ve":[{"type":"mc","q":"Hör zu: Wer schaut Fotos an?","o":["Clara","Théo","Jade","Yasmine"],"why":"Clara sagt: «Moi, je regarde des photos.»","au":[["Clara","Salut, Théo! Tu écoutes un CD?"],["Théo","Oui, j’écoute un CD de Lucas. Et toi?"],["Clara","Moi, je regarde des photos. Regarde!"],["Théo","Cool! Et Jade?"],["Clara","Jade téléphone à Yasmine. Elles parlent, elles parlent …"],["Théo","Et nous, nous regardons les photos ensemble!"]],"from":"verben-er/entdecken-5","lv":2},{"type":"seg","tf":true,"q":"Hör dir den Dialog an. Richtig oder falsch?","opts":["vrai","faux"],"rows":[["Théo écoute un CD de Lucas.","vrai",null],["Jade téléphone à Clara.","faux",null],["Clara et Théo regardent les photos ensemble.","vrai",null]],"why":"Jade telefoniert mit <b>Yasmine</b>.","au":[["Clara","Salut, Théo! Tu écoutes un CD?"],["Théo","Oui, j’écoute un CD de Lucas. Et toi?"],["Clara","Moi, je regarde des photos. Regarde!"],["Théo","Cool! Et Jade?"],["Clara","Jade téléphone à Yasmine. Elles parlent, elles parlent …"],["Théo","Et nous, nous regardons les photos ensemble!"]],"from":"verben-er/entdecken-6","lv":2},{"type":"seg","q":"Hör zu: <b>il</b> oder <b>ils</b>? Oder hört man keinen Unterschied?","opts":["il","ils","hört man nicht"],"rows":[["Satz 1","ils","Ils écoutent un CD."],["Satz 2","il","Il écoute un CD."],["Satz 3","hört man nicht","Il regarde la photo."],["Satz 4","ils","Ils appellent Clara."]],"why":"Satz 1: [ilzekut] → ils · Satz 2: [ilekut] → il · Satz 3: il regarde / ils regardent klingen gleich · Satz 4: [ilzapɛl] → ils.","sub":"Tippe auf 🔊 und entscheide.","from":"verben-er/hoeren-0","lv":2},{"type":"seg","q":"Hör zu: <b>elle</b> oder <b>elles</b>? Oder hört man keinen Unterschied?","opts":["elle","elles","hört man nicht"],"rows":[["Satz 1","hört man nicht","Elle parle français."],["Satz 2","elles","Elles écoutent la guitare."],["Satz 3","elle","Elle appelle Théo."],["Satz 4","hört man nicht","Elle téléphone à Jade."]],"why":"Nur bei Verben mit Vokal am Anfang hörst du das [z] von elles‿…","sub":"Tippe auf 🔊 und entscheide.","from":"verben-er/hoeren-1","lv":2},{"type":"seg","q":"Hör zu: Welche Endung hörst du?","opts":["-ons","-ez","stumm"],"rows":[["Satz 1","-ons","Nous regardons la photo."],["Satz 2","-ez","Vous parlez français?"],["Satz 3","stumm","Tu écoutes un CD?"],["Satz 4","stumm","Ils téléphonent à Jade."],["Satz 5","-ez","Vous appelez Léo?"]],"why":"-ons [ɔ̃] und -ez [e] hört man. -e, -es, -ent sind stumm.","sub":"Tippe auf 🔊 und entscheide.","from":"verben-er/hoeren-2","lv":2},{"type":"gapw","q":"Diktat: Hör zu und schreibe das Verb.","text":"Clara et Jade {0} des photos.","ans":[["regardent"]],"why":"Clara et Jade = elles → regardent. Die Endung -ent hörst du nicht – du musst sie wissen!","au":"Clara et Jade regardent des photos.","strict":true,"from":"verben-er/hoeren-3","lv":2},{"type":"gapw","q":"Diktat: Hör zu und schreibe das Verb.","text":"Nous {0} français.","ans":[["parlons"]],"why":"nous parlons – Endung -ons.","au":"Nous parlons français.","strict":true,"from":"verben-er/hoeren-4","lv":2},{"type":"gapw","q":"Diktat: Hör zu und schreibe das Verb.","text":"Et toi, tu {0} à Karim?","ans":[["téléphones"]],"why":"tu téléphones – zwei Akzente und -es.","au":"Et toi, tu téléphones à Karim?","strict":true,"from":"verben-er/hoeren-5","lv":2},{"type":"gapw","q":"Diktat: Hör zu und schreibe die Verben.","text":"Jade {0} un CD. Lucas et Noah {1} Léo.","ans":[["écoute"],["appellent"]],"why":"Jade écoute (é!) · Lucas et Noah appellent (ll, -ent).","au":"Jade écoute un CD. Lucas et Noah appellent Léo.","strict":true,"lv":3,"from":"verben-er/hoeren-6"},{"type":"mc","q":"Du hörst: [il paʁl fʁɑ̃sɛ]. Was kann es heißen?","o":["Il parle français. oder Ils parlent français.","Nur: Il parle français.","Nur: Ils parlent français.","Nous parlons français."],"why":"Ohne Zusammenhang kann man il parle und ils parlent beim Hören nicht unterscheiden.","au":"Il parle français.","from":"verben-er/hoeren-7","lv":2},{"type":"pick","q":"Hör zu: Wer ist gemeint?","cards":[["<svg class=\"grp\" viewBox=\"0 0 48 34\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"6\" fill=\"#2563eb\"/><path d=\"M4,34 V22 Q4,14 13,14 Q22,14 22,22 V34Z\" fill=\"#2563eb\"/><circle cx=\"35\" cy=\"7\" r=\"6\" fill=\"#2563eb\"/><path d=\"M26,34 V22 Q26,14 35,14 Q44,14 44,22 V34Z\" fill=\"#2563eb\"/></svg>","ils – mehrere"],["<svg class=\"grp\" viewBox=\"0 0 26 34\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"6\" fill=\"#2563eb\"/><path d=\"M4,34 V22 Q4,14 13,14 Q22,14 22,22 V34Z\" fill=\"#2563eb\"/></svg>","il – einer"],["<svg class=\"grp\" viewBox=\"0 0 26 34\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"6\" fill=\"#dc2626\"/><path d=\"M4,34 V22 Q4,14 13,14 Q22,14 22,22 V34Z\" fill=\"#dc2626\"/><path d=\"M3,34 L13,18 L23,34Z\" fill=\"#dc2626\"/></svg>","elle – eine"],["<svg class=\"grp\" viewBox=\"0 0 48 34\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"6\" fill=\"#dc2626\"/><path d=\"M4,34 V22 Q4,14 13,14 Q22,14 22,22 V34Z\" fill=\"#dc2626\"/><path d=\"M3,34 L13,18 L23,34Z\" fill=\"#dc2626\"/><circle cx=\"35\" cy=\"7\" r=\"6\" fill=\"#dc2626\"/><path d=\"M26,34 V22 Q26,14 35,14 Q44,14 44,22 V34Z\" fill=\"#dc2626\"/><path d=\"M25,34 L35,18 L45,34Z\" fill=\"#dc2626\"/></svg>","elles – mehrere Mädchen"]],"why":"«Ils‿écoutent la musique.» – das [z] zeigt: mehrere.","au":"Ils écoutent la musique.","say":false,"from":"verben-er/hoeren-8","lv":2},{"type":"seg","q":"Hör zu: <b>il</b>, <b>ils</b> – oder hört man es nicht?","opts":["il","ils","hört man nicht"],"rows":[["Satz 1","ils","Ils écoutent le professeur."],["Satz 2","hört man nicht","Il présente Clara."],["Satz 3","il","Il appelle Jade."]],"why":"[ilzekut] → ils · il présente = ils présentent (gleicher Klang) · [ilapɛl] → il.","tag":"Hören: il/ils","sub":"Tippe auf 🔊 und entscheide.","from":"verben-er/test-3","lv":3}],"tx":[{"type":"click","q":"Hör zu und tippe im Bild an.","room":"jade","target":"pierre","why":"«Et voilà ma collection de pierres!»","au":[["Jade","Et voilà ma collection de pierres!"]],"from":"texte/chambre-text-5","lv":2},{"type":"click","q":"Hör zu und tippe im Bild an.","room":"jade","target":"minichaine","why":"une minichaîne = eine Mini-Stereoanlage.","au":[["Jade","Dans le coin musique, il y a une minichaîne."]],"from":"texte/chambre-text-6","lv":2},{"type":"click","q":"Hör zu und tippe im Bild an.","room":"jade","target":"armoire","why":"«Il y a une armoire.»","au":[["Jade","Il y a une armoire."]],"from":"texte/chambre-bausteine-9","lv":2},{"type":"mark","q":"Hör zu: Was steht <b>in der Ecke</b>? Markiere alles.","room":"jade","targets":["table","chaise","ordinateur"],"why":"«Là, dans le coin, il y a une table, une chaise et un ordinateur.»","au":[["Jade","Là, dans le coin, il y a une table, une chaise et un ordinateur."]],"from":"texte/chambre-bausteine-10","lv":2},{"type":"mark","q":"Hör zu: Was gibt es in Jades Zimmer? Markiere alles, was du hörst.","room":"jade","targets":["lit","hamac","cd","photo"],"why":"Du hörst: un lit, un hamac, des CD und des photos.","au":[["Jade","Voilà ma chambre! Il y a un lit et un hamac. J’écoute des CD et je regarde des photos."]],"tag":"Hören: Zimmer","from":"texte/test-4","lv":3}]};
const G=[
{id:'hoeren-etre',block:'Teil B · Hören zur Grammatik',kind:'Hören: être',icon:'🙋',title:'Hören: être',sub:'suis, es, est, sommes, êtes, sont heraushören',lv:2,
 html:card('Worauf hörst du?','👂','<p>Die Grammatik von <b>être</b> kennst du schon aus Lektion 1. Jetzt trainierst du, die Formen <b>beim Hören</b> zu erkennen.</p>')
 +hoer(`<ul><li>${F('il est')} [ilɛ] und ${F('ils sont')} [ilsɔ̃] klingen ganz verschieden – beim Hören verrät dir das <b>Verb</b>, ob es einer oder mehrere sind.</li><li>${F('elle est')} [ɛlɛ] und ${F('elles sont')} [ɛlsɔ̃] genauso.</li><li>Aber: ${F('tu es')} und ${F('il est')} klingen gleich – hier hilft nur der Zusammenhang.</li></ul>`),
 ex:MV.etre},
{id:'hoeren-artikel',kind:'Hören: le, la, l’, les',icon:'🏷️',title:'Hören: le, la, l’, les',sub:'Artikel und Plural am Klang erkennen',lv:2,
 html:card('Worauf hörst du?','👂','<p>Den bestimmten Artikel kennst du aus Lektion 2. Beim Hören verrät dir der <b>Artikel</b>, ob es einer oder mehrere sind – das Plural-s hört man nicht.</p>')
 +hoer(`<ul><li>Weil man das -s nicht hört, erkennst du den Plural beim Hören am <b>Artikel</b>: ${F('le livre')} [lə] – ${F('les livres')} [le].</li><li>Vor einem Vokal wird <b>les</b> gebunden (Liaison): ${F('les‿élèves')} [lezelɛv], ${F('les‿amis')} [lezami]. Das s klingt dann wie ein weiches <b>s</b> [z].</li></ul>`)
 +hoer(`<p>Diese Paare klingen verschieden – hör genau hin:</p><ul><li>${F('le')} [lə] – ${F('la')} [la] – ${F('les')} [le]</li><li>${F('l’ami')} und ${F('l’amie')} klingen <b>gleich</b>! Ob männlich oder weiblich, hörst du nur am Zusammenhang.</li></ul>`),
 ex:MV.ab},
{id:'hoeren-unbestimmt',kind:'Hören: un, une, des',icon:'🎁',title:'Hören: un, une, des',sub:'[œ̃] oder [yn]? – genau hinhören',lv:2,
 html:card('Worauf hörst du?','👂','<p>un, une, des kennst du aus Lektion 3. Jetzt hörst du genau hin: <b>un</b> klingt durch die Nase, bei <b>une</b> hörst du ein n.</p>')
 +hoer(`<p>So unterscheidest du beim Hören:</p><ul><li>${F('un livre')} – nasal, ohne n: [œ̃]</li><li>${F('une lampe')} – mit hörbarem n: [yn]</li><li>${F('des livres')} – [de]: mehrere. Das -s am Nomen hörst du nicht, nur das <b>des</b>!</li><li>Liaison: ${F('un‿ordinateur')} – hier hörst du ein n, aber es ist trotzdem <b>un</b> (Nasal + Bindung).</li></ul>`)
 +tip('<b>Hör-Strategie:</b> Konzentriere dich nur auf das kleine Wort vor dem Nomen. Du darfst so oft hören, wie du willst – in der Klassenarbeit meistens zweimal.','🎧'),
 ex:MV.au},
{id:'hoeren-verben',kind:'Hören: Verben auf -er',icon:'🧩',title:'Hören: Verben auf -er',sub:'il oder ils? Was man hört – und was nicht',lv:2,
 html:"<div class=\"hoer\"><h3>👂 Hörtipp: Was hört man?</h3><p>Weil -e, -es und -ent stumm sind, klingen viele Formen <b>gleich</b>. Beim Hören hilft dir:</p><ul><li><b>Konsonant am Anfang</b>: <span class=\"frs\"><span class=\"fr\">il regarde</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"il regarde\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span> = <span class=\"frs\"><span class=\"fr\">ils regardent</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"ils regardent\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span> – kein Unterschied! Du musst den <b>Zusammenhang</b> verstehen (z. B. <span class=\"fr\">Clara et Jade</span> regardent …).</li><li><b>Vokal am Anfang</b>: <span class=\"frs\"><span class=\"fr\">il écoute</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"il écoute\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span> [ilekut] ≠ <span class=\"frs\"><span class=\"fr\">ils‿écoutent</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"ils écoutent\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span> [ilzekut] – das <b>[z]</b> verrät den Plural.</li><li><span class=\"frs\"><span class=\"fr\">il appelle</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"il appelle\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span> [ilapɛl] ≠ <span class=\"frs\"><span class=\"fr\">ils‿appellent</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"ils appellent\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span> [ilzapɛl]</li><li><b>nous</b> und <b>vous</b> hörst du immer: -ons [ɔ̃], -ez [e].</li></ul></div><div class=\"card\"><h3><span class=\"ic\">🎧</span>Hör-Training</h3><table class=\"t\"><tr><th>einer</th><th>mehrere</th><th>Unterschied?</th></tr>\n <tr><td><span class=\"frs\"><span class=\"fr\">Il parle.</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"Il parle.\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span></td><td><span class=\"frs\"><span class=\"fr\">Ils parlent.</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"Ils parlent.\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span></td><td>🔇 keiner</td></tr><tr><td><span class=\"frs\"><span class=\"fr\">Elle regarde.</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"Elle regarde.\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span></td><td><span class=\"frs\"><span class=\"fr\">Elles regardent.</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"Elles regardent.\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span></td><td>🔇 keiner</td></tr>\n <tr><td><span class=\"frs\"><span class=\"fr\">Il écoute.</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"Il écoute.\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span></td><td><span class=\"frs\"><span class=\"fr\">Ils‿écoutent.</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"Ils écoutent.\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span></td><td>🔊 [z]</td></tr><tr><td><span class=\"frs\"><span class=\"fr\">Elle appelle.</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"Elle appelle.\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span></td><td><span class=\"frs\"><span class=\"fr\">Elles‿appellent.</span><button class=\"speak mini\" type=\"button\" title=\"Anhören\" aria-label=\"Anhören\" data-say=\"Elles appellent.\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 9v6h4l5 4V5L7 9H3z\" fill=\"currentColor\"/><path d=\"M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\"/></svg></button></span></td><td>🔊 [z]</td></tr></table></div>",
 ex:MV.ve},
{id:'hoeren-texte',kind:'Hören: Texte',icon:'🛏️',title:'Hören: Jades Zimmer',sub:'Hören und im Bild finden',lv:2,
 html:card('Worauf hörst du?','👂','<p>Jades Text kennst du aus Lektion 5. Jetzt hörst du ihn nur – und tippst im Bild an, was sie sagt.</p>'),
 ex:MV.tx}];
const at=CHAPTERS.findIndex(c=>c.id==='vorstellung');CHAPTERS.splice(at,0,...G);
CHAPTERS.find(c=>c.id==='strategien').block='Teil A · Hör-Strategien';
CHAPTERS.find(c=>c.id==='vorstellung').block='Teil C · Hörtexte wie in der Arbeit';}
H.setRun({strategien:2,hoergym:2,'hoeren-etre':2,'hoeren-artikel':2,'hoeren-unbestimmt':2,'hoeren-verben':2,'hoeren-texte':2,vorstellung:3,zimmer:3,pausenhof:2,diktat:2,probe:3},{vorstellung:[0],zimmer:[0],pausenhof:[0]});
/* INTRO */
H.setIntro({
_lesson:{t:'Hörverstehen wie in der Arbeit',
 was:'Hörverstehen kommt <b>am Ende</b> – wenn die Grammatik sitzt. Teil A: Hör-Strategien. Teil B: Hören zur Grammatik (être, Artikel, Verben, Texte). Teil C: Hörtexte wie in der Arbeit (Vorstellung, Zimmer, Gespräch). Du musst nicht jedes Wort verstehen – nur die Infos, nach denen gefragt wird.',
 warum:'Wer vorher weiß, worauf er achten muss, hört viel mehr heraus. Die 5 Schritte helfen dir dabei.',
 schritte:['<b>Vor dem Hören:</b> Aufgaben lesen. Was sollst du herausfinden?','<b>Vermuten:</b> Welche Wörter kommen wohl vor? (Namen, il y a, un lit …)','<b>1. Hören:</b> nur zuhören – worum geht es?','<b>2. Hören:</b> gezielt auf die gesuchten Infos achten, Stichpunkte machen.','<b>Prüfen:</b> Passt die Antwort? Im Zweifel noch einmal hören.'],
 bsp:[['Je m’appelle Samira.','Ich heiße Samira. → Signalwort für den Namen','Samira'],['Je suis de Berlin.','Ich bin aus Berlin. → Herkunft','Samira'],['Je suis en sixième B.','Ich bin in der 6B. → Klasse','Samira'],['Dans ma chambre, il y a un lit.','In meinem Zimmer gibt es ein Bett. → Zimmer','Karim']],
 merk:'Erst die Aufgabe lesen, dann hören – du suchst nur bestimmte Infos.',
 fallen:['un [œ̃] und une [yn] klingen verschieden – hör genau hin.','il est und ils sont klingen anders: [ilɛ] – [ilsɔ̃].','Nicht bei einem unbekannten Wort hängen bleiben – weiterhören!'],
 check:['Aufgabe lesen.','Zweimal hören.','Antwort prüfen.']},
strategien:{rule:"Erst die Aufgabe lesen, dann hören: Du suchst nur die Infos, nach denen gefragt wird.",t:'Die 5 Hör-Schritte',
 was:'Profis hören nicht einfach los. Sie bereiten sich vor. Hier lernst du die 5 Schritte.',
 schritte:['Aufgaben lesen, Schlüsselwörter unterstreichen.','Vermuten, welche Wörter vorkommen.','1. Hören: nur zuhören.','2. Hören: Stichpunkte machen.','Prüfen und ggf. nochmal hören.'],
 bsp:[['C’est qui?','Wer ist das? → Es geht um eine Person.'],['Qu’est-ce qu’il y a?','Was gibt es? → Es geht um Sachen.'],['Il est de Strasbourg.','Er ist aus Straßburg. → Herkunft']],
 merk:'Lesen – vermuten – hören – hören – prüfen.',
 fallen:['Unbekannte Wörter überspringen – die Aufgabe fragt meist nach bekannten Wörtern.'],
 check:['Schritte merken.','Aufgaben lösen.','Erklärung lesen.']},
hoergym:{rule:"Kleine Wörter genau hören: le [lə] – les [le], un [œ̃] – une [yn], il est [ilɛ] – ils sont [ilsɔ̃]. Bei Vokal hörst du bei ils ein [z].",t:'Hör-Gym: kleine Wörter',
 was:'Kleine Wörter machen einen großen Unterschied: le / la / les, un / une, il est / ils sont. Hier trainierst du, sie genau zu hören.',
 schritte:['Hör das Wort oder den Satz.','Achte auf den Anfang: [lə] le, [la] la, [le] les.','Achte auf [z] bei der Bindung: les‿armoires, ils‿écoutent.'],
 bsp:[['le lit','[lə] – ein Bett'],['les lits','[le] – mehrere Betten'],['une table','[yn] – mit n'],['un lit','[œ̃] – durch die Nase'],['ils sont','[ilsɔ̃] – sie sind']],
 merk:'le [lə] – les [le]; un [œ̃] – une [yn]; il est – ils sont.',
 fallen:['Die Endungen -e, -es, -ent hört man nicht – il regarde = ils regardent.'],
 check:['Hören.','Auf den Anfang achten.','Antippen.']},
'hoeren-etre':{rule:"il est [ilɛ] – ils sont [ilsɔ̃]: am Verb hörst du, ob es einer oder mehrere sind. tu es und il est klingen gleich – dann hilft der Zusammenhang.",t:'Hören: être',
 was:'Die Formen von être kennst du schon. Jetzt hörst du sie in Sätzen und Gesprächen und erkennst, wer gemeint ist.',
 schritte:['Aufgabe lesen: Was sollst du heraushören?','Auf das Verb achten: [sɥi] suis, [ɛ] es/est, [sɔm] sommes, [ɛt] êtes, [sɔ̃] sont.','Bei il est / ils sont: Das Verb verrät, ob es einer oder mehrere sind.'],
 bsp:[['Il est dans la classe.','Er ist in der Klasse. → einer'],['Ils sont dans la cour.','Sie sind auf dem Schulhof. → mehrere'],['Vous êtes en sixième A?','Seid ihr in der 6A?'],['Nous sommes en sixième A.','Wir sind in der 6A.']],
 merk:'est [ɛ] = einer · sont [sɔ̃] = mehrere',
 fallen:['<b>tu es</b> und <b>il est</b> klingen gleich – achte auf das Pronomen.','<b>elle est</b> und <b>elles sont</b> klingen verschieden.'],
 check:['Aufgabe lesen.','Zweimal hören.','Antworten.']},
'hoeren-artikel':{rule:"le [lə] – la [la] – les [le]. Den Plural hörst du am Artikel, nicht am Nomen (das -s ist stumm). Vor Vokal: les‿armoires mit [z].",t:'Hören: le, la, l’, les',
 was:'Den bestimmten Artikel kennst du. Jetzt hörst du genau hin: le, la oder les?',
 schritte:['Nur auf das kleine Wort vor dem Nomen achten.','[lə] = le, [la] = la, [le] = les.','Vor Vokal: [z] bei les‿amis → Plural.'],
 bsp:[['le livre','[lə] – ein Buch'],['les livres','[le] – mehrere Bücher'],['la lampe','[la]'],['les armoires','[lez] – mit Bindung']],
 merk:'Den Plural hörst du am Artikel: le [lə] – les [le].',
 fallen:['l’ami und l’amie klingen gleich.'],
 check:['Hören.','Artikel erkennen.','Antippen.']},
'hoeren-unbestimmt':{rule:"un [œ̃] klingt durch die Nase, bei une [yn] hörst du ein n, des [de] = mehrere.",t:'Hören: un, une, des',
 was:'un, une und des kennst du. Jetzt unterscheidest du sie beim Hören.',
 schritte:['Auf das Wort vor dem Nomen achten.','Nasal, ohne n → un. Mit hörbarem n → une. [de] → des.','Achtung Bindung: un‿ordinateur – trotzdem un.'],
 bsp:[['un livre','[œ̃] – nasal'],['une lampe','[yn] – mit n'],['des livres','[de] – mehrere'],['un ordinateur','[œ̃n] – Bindung, aber un']],
 merk:'un [œ̃] · une [yn] · des [de]',
 fallen:['un‿ordinateur: Man hört ein n – es ist trotzdem un.'],
 check:['Hören.','Klang erkennen.','Antippen.']},
'hoeren-verben':{rule:"-e, -es, -ent hört man nicht. Fängt das Verb mit Vokal an, hörst du bei ils / elles ein [z]: ils‿écoutent.",t:'Hören: Verben auf -er – il oder ils?',
 was:'Weil die Endungen -e, -es und -ent stumm sind, klingen <i>il regarde</i> und <i>ils regardent</i> gleich. Hier lernst du, woran du trotzdem hörst, wer gemeint ist.',
 schritte:['Fängt das Verb mit einem <b>Vokal</b> an, hörst du bei ils / elles ein <b>[z]</b>: ils‿écoutent [ilzekut], il écoute [ilekut].','Bei nous und vous hörst du die Endung: -ons, -ez.','Sonst hilft der Zusammenhang: Clara et Jade → mehrere.'],
 bsp:[['Il écoute un CD.','Er hört eine CD. (kein [z])'],['Ils écoutent un CD.','Sie hören eine CD. (mit [z])'],['Elle regarde la photo.','Sie schaut das Foto an.'],['Elles regardent la photo.','Sie schauen das Foto an. (klingt gleich!)']],
 merk:'Vokal am Anfang: [z] = mehrere (ils‿écoutent).',
 fallen:['Bei Konsonant am Anfang (regarde / regardent) hört man keinen Unterschied – achte auf Namen und Zusammenhang.'],
 check:['Hören.','Auf [z] und Endungen achten.','Antwort wählen.']},
'hoeren-texte':{rule:"Nach il y a kommt eine Sache aus dem Zimmer. Hör auf das Nomen und tippe es im Bild an.",t:'Hören: Jades Zimmer',
 was:'Jades Text kennst du aus der Lektion „Texte“. Jetzt hörst du ihn nur und findest die Sachen im Bild.',
 schritte:['Bild ansehen: Welche Sachen kennst du auf Französisch?','Hören: Was sagt Jade?','Im Bild antippen.'],
 bsp:[['Il y a un hamac.','Es gibt eine Hängematte.','Jade'],['Dans le coin, il y a une guitare.','In der Ecke gibt es eine Gitarre.','Jade']],
 merk:'il y a = jetzt kommt eine Sache.',
 fallen:['Nicht alles im Bild wird genannt.'],
 check:['Bild ansehen.','Hören.','Antippen.']},
vorstellung:{rule:"Signalwörter: je m’appelle → Name, je suis de → Herkunft, en sixième → Klasse, c’est … → Lehrer/Freund.",t:'Hörtext: Samira stellt sich vor',
 was:'Samira erzählt von sich. Du füllst einen Steckbrief aus: Name, Herkunft, Klasse, Lehrerin, Freundin, was sie zu Hause macht.',
 schritte:['Steckbrief lesen.','Auf Signalwörter achten: je m’appelle → Name, je suis de → Herkunft, en sixième → Klasse.','Stichpunkte machen, dann antworten.'],
 bsp:[['Je m’appelle Samira.','Ich heiße Samira.','Samira'],['La professeur de français, c’est Madame Fournier.','Die Französischlehrerin ist Madame Fournier.','Samira'],['Jade et moi, nous sommes ensemble dans la classe.','Jade und ich sind zusammen in der Klasse. → Freundin','Samira']],
 merk:'Signalwörter zeigen dir, welche Info gleich kommt.',
 fallen:['Herkunft (je suis de …) und Wohnort/Schule (à Strasbourg) nicht verwechseln.'],
 check:['Steckbrief lesen.','Hören.','Ausfüllen.']},
zimmer:{rule:"Nach „il y a“ kommt eine Sache aus dem Zimmer – mit un, une oder des.",t:'Hörtext: Karims Zimmer',
 was:'Karim beschreibt sein Zimmer. Du sollst herausfinden, was es gibt – und was nicht.',
 schritte:['Bild ansehen und die Sachen leise auf Französisch sagen (mit Artikel).','Hören: Bei jedem „il y a“ kommt eine Sache.','Antworten.'],
 bsp:[['Dans ma chambre, il y a un lit.','In meinem Zimmer gibt es ein Bett.','Karim'],['Il y a une guitare.','Es gibt eine Gitarre.','Karim'],['Il y a des B.D. partout.','Überall gibt es Comics.','Karim']],
 merk:'il y a = jetzt kommt eine Sache.',
 fallen:['Nicht alles auf dem Bild wird genannt – hör genau hin.'],
 check:['Bild ansehen.','Hören.','Antworten.']},
pausenhof:{rule:"Wer spricht? Was sagt die Person über sich: Name, Herkunft (je suis de …), Klasse (en sixième / en cinquième)?",t:'Hörtext: Gespräch auf dem Schulhof',
 was:'Drei Kinder sprechen auf dem Schulhof. Achte auf Namen, Herkunft und Klasse.',
 schritte:['Aufgaben lesen.','Hören: Wer spricht? (Stimmen unterscheiden)','Auf c’est qui?, il / elle s’appelle, il est de … achten.'],
 bsp:[['Salut! Tu es nouveau?','Hallo! Bist du neu?','Clara'],['Oui, je m’appelle Karim.','Ja, ich heiße Karim.','Karim'],['On est en sixième A.','Wir sind in der 6A.','Théo']],
 merk:'Bei Gesprächen: Wer spricht? Was sagt er über sich?',
 fallen:['on est = wir sind.'],
 check:['Lesen.','Hören.','Antworten.']},
diktat:{rule:"Was man nicht hört, muss man denken: Endungen (-e, -es, -ent), Plural-s und Akzente.",t:'Lückendiktat',
 was:'Du hörst Sätze und schreibst die fehlenden Wörter. Hier zählt jeder Buchstabe – auch Akzente und stumme Endungen.',
 schritte:['Satz hören und mitlesen.','Erst schreiben, was du sicher hörst.','Dann überlegen: Wer tut es? → Endung (-e, -es, -ent …). Akzente prüfen.'],
 bsp:[['Ils regardent des photos.','Sie schauen Fotos an. (-ent hört man nicht!)'],['Nous écoutons un CD.','Wir hören eine CD.'],['Elle est de Strasbourg.','Sie ist aus Straßburg.']],
 merk:'Was man nicht hört, muss man denken: Endung und Akzente.',
 fallen:['ils regard<b>ent</b> – das -ent hörst du nicht.','é bei écouter, élève, étagère.'],
 check:['Hören.','Schreiben.','Endung + Akzente prüfen.']},
probe:{rule:"Aufgabe lesen – zweimal hören – Antwort prüfen.",t:'Probe-Hörverstehen',
 was:'Jetzt ist es wie in der Arbeit: Hörtexte mit Aufgaben. Wende die 5 Schritte an.',
 schritte:['Aufgaben lesen.','Zweimal hören.','Antworten und prüfen.'],
 bsp:[['Qu’est-ce qu’il y a dans la chambre?','Was gibt es im Zimmer?'],['C’est qui?','Wer ist das?'],['Ils sont de Berlin.','Sie sind aus Berlin.']],
 merk:'Lesen – vermuten – hören – hören – prüfen.',
 fallen:['Nicht raten, bevor du die Aufgabe gelesen hast.'],
 check:['Lesen.','Hören.','Prüfen.']}
});
(function(){const W=window,V=window.V;
/* Bildliche Erklärungen (feste Vorlage) – Hörverstehen */
const SK_H=[['👀','Lesen','die Aufgabe'],['💭','Vermuten','Was kommt?'],['🎧','Hören 1','Überblick'],['🎧','Hören 2','Details'],['✅','Prüfen','alles da?']];
const PAIR=(a,b)=>`<div class="pair">${H.F(a)}<span class="big-ic">↔</span>${H.F(b)}</div>`;
H.patchIntro({
_lesson:{vis:V.skel([['🧠','Teil A','Hör-Strategien'],['🔤','Teil B','Hören zur Grammatik'],['🎧','Teil C','Hörtexte wie in der Arbeit']]),
 was:'Hörverstehen kommt <b>zum Schluss</b> – wenn die Grammatik sitzt.',
 warum:'Wer weiß, worauf er hören muss, versteht viel mehr.',
 schritte:SK_H.slice(0,3).map(s=>['<span class="big-ic">'+s[0]+'</span>','<b>'+s[1]+'</b>: '+s[2]]),
 merk:'Erst die Aufgabe lesen, dann hören.',
 fallen:['Nicht jedes Wort verstehen wollen – nur die gesuchten Infos!']},
strategien:{vis:V.skel(SK_H),
 was:'Profis hören nicht einfach los – sie bereiten sich vor.',
 warum:'Wer weiß, was er sucht, hört es auch.',
 schritte:SK_H.map(s=>['<span class="big-ic">'+s[0]+'</span>','<b>'+s[1]+'</b>: '+s[2]]),
 fallen:['Beim 1. Hören nicht schreiben – erst zuhören.']},
hoergym:{vis:PAIR('le livre','les livres')+PAIR('un lit','une lampe')+PAIR('il est','ils sont'),
 was:'Kleine Wörter – großer Unterschied.',
 warum:'Am Artikel oder Verb hörst du: einer oder mehrere?',
 schritte:[['<span class="big-ic">🎧</span>','genau hinhören'],['<span class="big-ic">🔤</span>','auf das kleine Wort achten'],['<span class="big-ic">👆</span>','antippen']],
 fallen:['le [lə] und les [le] klingen ähnlich – genau hinhören!']},
'hoeren-etre':{vis:'<div class="aset"><span class="ocard oc-m">'+V.fig('m')+V.b('il est','v')+'</span><span class="ocard oc-p">'+V.fig('mm')+V.b('ils sont','v')+'</span></div>'+PAIR('il est','ils sont'),
 was:'Du hörst être in Sätzen: Wer ist gemeint?',
 warum:'est [ɛ] = einer · sont [sɔ̃] = mehrere.',
 schritte:[['<span class="big-ic">🎧</span>','Verb hören'],[V.b('est','v')+' / '+V.b('sont','v'),'einer oder mehrere?'],['<span class="big-ic">👆</span>','Antwort wählen']],
 fallen:[['Il sont','Ils sont','Hörst du [sɔ̃] → mehrere.']]},
'hoeren-artikel':{vis:'<div class="aset">'+V.obj('livre','le','livre')+V.obj('livre','les','livres')+'</div>',
 was:'le, la oder les? Hör auf den Artikel.',
 warum:'Das Plural-s hört man nicht – aber den Artikel les [le].',
 schritte:[['<span class="big-ic">🎧</span>','Artikel hören'],[V.art('le')+' [lə] / '+V.art('les')+' [le]','einer oder mehrere?'],['<span class="big-ic">👆</span>','wählen']],
 fallen:[['le livres','les livres','Hörst du [le] → les.']]},
'hoeren-unbestimmt':{vis:'<div class="aset">'+V.obj('lit','un','lit')+V.obj('lampe','une','lampe')+V.obj('photo','des','photos')+'</div>',
 was:'un, une oder des? Hör genau hin.',
 warum:'un [œ̃] klingt nasal, une [yn] endet mit n.',
 schritte:[['<span class="big-ic">🎧</span>','Artikel hören'],[V.art('un')+' / '+V.art('une')+' / '+V.art('des'),'unterscheiden'],['<span class="big-ic">👆</span>','wählen']],
 fallen:[['un lampe','une lampe','[yn] → une.']]},
'hoeren-verben':{vis:PAIR('il regarde','ils regardent')+PAIR('il écoute','ils écoutent'),
 was:'il regarde und ils regardent klingen gleich!',
 warum:'Vor Vokal hörst du bei ils ein [z]: ils‿écoutent.',
 schritte:[['<span class="big-ic">🔇</span>','Endung -ent hört man nicht'],['<span class="big-ic">🐝</span>','[z] vor Vokal → mehrere'],['<span class="big-ic">👀</span>','Kontext: Namen, sont …']],
 merk:'Vokal am Anfang: [z] = mehrere (ils‿écoutent).',
 fallen:[['ils écoute','ils écoutent','Mehrere → -ent, auch wenn man es nicht hört.']]},
'hoeren-texte':{vis:(W.ROOMS&&W.ROOMS.jade?W.ROOMS.jade.svg:''),
 was:'Jades Text – diesmal nur hören und im Bild finden.',
 warum:'il y a = jetzt kommt eine Sache.',
 schritte:[['<span class="big-ic">👀</span>','Bild ansehen'],['<span class="big-ic">🎧</span>','bei il y a aufpassen'],['<span class="big-ic">👆</span>','Sache antippen']],
 fallen:['Nicht alles im Bild kommt im Text vor!']},
vorstellung:{vis:'<div class="aset">'+V.who('Samira')+'</div>'+V.skel([['🙋','Name',''],['🏙️','Woher?',''],['🏫','Klasse',''],['👩‍🏫','Lehrerin',''],['👭','Freundin',''],['🏠','Zu Hause','']]),
 was:'Samira erzählt von sich – du füllst den Steckbrief.',
 warum:'Signalwörter zeigen dir, welche Info kommt.',
 schritte:[['<span class="big-ic">👀</span>','Steckbrief lesen'],['<span class="big-ic">🔔</span>','Signalwörter: Je suis de …, en …'],['<span class="big-ic">✍️</span>','eintragen']],
 fallen:['en cinquième = 7. Klasse (nicht 5.)!']},
zimmer:{vis:(W.ROOMS&&W.ROOMS.karim?W.ROOMS.karim.svg:''),
 was:'Karim beschreibt sein Zimmer: Was gibt es – und was nicht?',
 warum:'il y a = jetzt kommt eine Sache.',
 schritte:[['<span class="big-ic">👀</span>','Bild ansehen'],['<span class="big-ic">🎧</span>','auf il y a achten'],['<span class="big-ic">✅</span>','abhaken']],
 fallen:['Im Bild ist mehr, als Karim sagt!']},
pausenhof:{vis:'<div class="aset">'+V.who(['Léo','Samira','Lucas'])+'</div>',
 was:'Drei Kinder sprechen: Namen, Herkunft, Klasse.',
 warum:'Bei Gesprächen: Wer spricht – und was sagt er über sich?',
 schritte:[['<span class="big-ic">🗣️</span>','Wer spricht?'],['<span class="big-ic">🔔</span>','je suis … / il est …'],['<span class="big-ic">✍️</span>','zuordnen']],
 fallen:['moi = ich · toi = du – hör genau, wer gemeint ist.']},
diktat:{vis:'<div class="aset">'+V.lego('regard','ent')+' <span class="big-ic">=</span> „regard“</div>',
 was:'Du hörst Sätze und schreibst die fehlenden Wörter.',
 warum:'Stumme Endungen und Akzente musst du <b>denken</b>.',
 schritte:[['<span class="big-ic">🎧</span>','hören'],['<span class="big-ic">🧠</span>','Wer? → Endung denken'],['<span class="big-ic">é</span>','Akzente prüfen']],
 fallen:[['ils regarde','ils regardent','Man hört es nicht – man schreibt es.']]},
probe:{vis:V.skel(SK_H),
 was:'Wie in der Arbeit: Hörtexte mit Aufgaben.',
 warum:'Mit den 5 Schritten bist du vorbereitet.',
 schritte:SK_H.map(s=>['<span class="big-ic">'+s[0]+'</span>','<b>'+s[1]+'</b>']),
 fallen:['Am Ende alles prüfen: Ist jede Lücke gefüllt?']}
});

})();

})();
window.HUBCAP("ecouter");
(function(){var W=window,ALL=[],TR={};W.HUB_WRITERS={};W.HUB_ORDER.forEach(function(slug){var h=W.HUBL[slug];Object.assign(TR,h.TR);Object.assign(W.HUB_WRITERS,h.WR);
 var tag=function(e){e._slug=slug;e._L=h.L;if(e.ref)e.ref=slug+':'+e.ref;};
 h.C.forEach(function(c){c.lid=c.id;c.id=slug+':'+c.id;c.slug=slug;c.c=c.c||h.L.color;c.ex.forEach(tag);ALL.push(c);});
 h.T.forEach(tag);ALL.push({id:slug+':test',lid:'test',slug:slug,title:'Abschlusstest · '+h.L.title,icon:'🏆',c:'#c8102e',lv:3,extra:true,noTest:true,take:0,ex:h.T});});
 W.LESSON={slug:'training',title:'Training',fr:'',icon:'🎯',color:'#1e3a8a',merk:'',intro:''};W.CHAPTERS=ALL;W.TRACKS=TR;W.TEST_EX=[];})();
