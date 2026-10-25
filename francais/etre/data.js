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
 +card('Wer ist wer? Die Personalpronomen','👥',`<div class="objrow">${pron('je','m','ich')}${pron('tu','m','du – zu einem Kind oder Freund')}${pron('il','m','er – auch für männliche Sachen',grp('m'))}${pron('elle','f','sie (eine) – auch für weibliche Sachen',grp('f'))}${pron('on','m','man / wir – Verb wie il: <b>on est</b>')}${pron('nous','m','wir')}${pron('vous','m','ihr – oder höflich: Sie')}${pron('ils','m','sie – Gruppe mit mind. einem Jungen',grp('mf'))}${pron('elles','f','sie – nur Mädchen',grp('ff'))}</div>`)
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
{id:'nachholbedarf',kind:'Nachholbedarf',nh:true,icon:'🎯',title:'Nachholbedarf 1',sub:'Satzbau · „Ersetze durch ein Pronomen“ · le professeur / Monsieur',lv:1,extra:true,c:'#f97316',
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
entdecken:{parts:[{h:'📍 Kleine Wörter: <b>de</b> · <b>en</b> · <b>dans</b>',
  vis:'<div class="aset">'+V.b('de Berlin','r',{icon:'📍',lbl:'aus Berlin'})+V.b('en sixième A','r',{icon:'🏫',lbl:'in der 6A'})+V.b('dans la cour','r',{icon:'🏃',lbl:'auf dem Schulhof'})+'</div>',
  was:'Drei kleine Wörter sagen dir: <b>woher</b>, <b>welche Klasse</b>, <b>wo</b>.',
  warumVis:V.train('Je/s|suis/v|de Berlin./r',{labels:true}),
  warum:'Nach être kommt oft so ein kleines Wort – es steht im <b>Rest</b> des Satzes.',
  schritte:[['<span class="big-ic">📍</span>','Woher? → <b>de</b> (aus): de Berlin'],['<span class="big-ic">🏫</span>','Welche Klasse? → <b>en</b>: en sixième A'],['<span class="big-ic">🏃</span>','Wo? → <b>dans</b> (in): dans la cour, dans la classe']],
  bsp:[['Je suis de Berlin.','Ich bin aus Berlin.'],['Nous sommes en sixième A.','Wir sind in der 6A.'],['Jade et Yasmine sont dans la cour.','Jade und Yasmine sind auf dem Schulhof.'],['Monsieur Martel est dans la classe.','Herr Martel ist in der Klasse.']],
  merk:'de = aus · en sixième = in der 6. · dans = in',
  fallen:[['Elles sont à la cour.','Elles sont dans la cour.','auf dem Schulhof = <b>dans</b> la cour.'],['Nous sommes dans sixième A.','Nous sommes en sixième A.','Klasse → <b>en</b>.']]},
 {h:'✨ Wörter passen sich an: <b>nouveau</b> · <b>ami</b>',
  vis:V.agree(),
  was:'„neu“ und „Freund“ ändern sich – je nachdem, <b>wer</b> gemeint ist.',
  warumVis:'<div class="aset">'+V.fig('m')+V.b('nouveau','r')+' <span class="big-ic">→</span> '+V.fig('f')+V.b('nouvelle','r')+'</div>',
  warum:'Am Wort siehst du: Junge oder Mädchen? Einer oder mehrere?',
  schritte:[[V.fig('m'),'ein Junge → <b>nouveau</b> · <b>l’ami</b>'],[V.fig('f'),'ein Mädchen → + e: <b>nouvelle</b> (mit ll) · <b>l’amie</b>'],[V.fig('mm'),'mehrere → + s: <b>amis</b> · nouveau bekommt <b>x</b>: <b>nouveaux</b>'],[V.fig('ff'),'nur Mädchen → <b>nouvelles</b> · <b>amies</b>']],
  bsp:[['Karim est nouveau.','Karim ist neu.'],['Vous êtes nouveaux?','Seid ihr neu?'],['Jade et Yasmine sont amies.','Jade und Yasmine sind Freundinnen.'],['Tu es l’ami de Théo?','Bist du der Freund von Théo?']],
  merk:'Mädchen → + e · mehrere → + s (nouveau → nouveaux)',
  fallen:[['Elle est nouveau.','Elle est nouvelle.','Mädchen → <b>nouvelle</b>.'],['Vous êtes nouveaus?','Vous êtes nouveaux?','nouveau → mehrere mit <b>x</b>.'],['Tu es le ami de Théo?','Tu es l’ami de Théo?','vor a, e, i, o, u: le / la → <b>l’</b>.']]}],
 vis:H.dlg?'<div class="aset">'+V.who(['Martel','Clara','Théo'])+'</div>'+V.train('Je/s|suis/v|le professeur./r',{who:'Martel'}):'',
 was:'Erster Schultag: Alle stellen sich vor – und benutzen <b>être</b>.',
 warum:'Vor jeder Form steht ein <b>Wer</b>: Daran erkennst du die Form.',
 schritte:[['<span class="big-ic">📖</span>','Dialog lesen (🔊 = Aussprache)'],[V.b('suis','v')+V.b('est','v'),'Formen von être suchen'],[V.b('Je','s'),'Wer steht davor?']],
 fallen:[['C est moi.','C’est moi.','<b>c’est</b> = c’ + est – mit Apostroph.']]},
formen:{parts:[V.onPart('etre')],vis:V.etreGrid(),
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
 fallen:[['Il est de Berlin. → Ils est de Berlin.','Ils sont de Berlin.','Plural: Pronomen <b>und</b> Verb ändern.'],['Elle est nouvelle. → Elles sont nouvelle.','Elles sont nouvelles.','Plural: auch das Wie-Wort bekommt <b>-s</b>.']]},
fehler:{vis:V.vs('ils/p|est/v|de Berlin./r','Ils/p|sont/v|de Berlin./r'),
 was:'Finde typische Fehler – dann passieren sie dir nicht.',
 warum:'Wer Fehler finden kann, macht sie selbst seltener.',
 schritte:[['<span class="big-ic">🔍</span>','Satz langsam lesen'],[V.b('ils','p')+'?'+V.b('sont','v'),'Passt die Form zum Wer?'],['<span class="big-ic">👆</span>','falsche Wörter antippen']],
 fallen:[['Je es Clara.','Je suis Clara.','zu je gehört <b>suis</b>.'],['On sommes ensemble.','On est ensemble.','nach on → <b>est</b>.']]}
});

})();
