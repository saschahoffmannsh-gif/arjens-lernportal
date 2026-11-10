/* ===================== ENGLISCH-GRAMMATIK: Sprache, Fehler-Diagnose, Bausteine =====================
   Wird nach kit.js/vis.js und vor data.js/engine.js geladen. Nutzt die gemeinsame Lern-Engine (francais/shared),
   stellt sie auf Englisch um (window.LANG) und ersetzt die französische Fehler-Diagnose durch eine englische. */
(function(W){
'use strict';
const H=W.H,V=W.V,esc=W.esc,strip=W.strip;
W.LANG={name:'Englisch',tts:'en-GB',acc:[],accHint:'Kurzformen mit Apostroph schreiben: I’m, isn’t, aren’t.',
 orderTip:'Im englischen Aussagesatz steht immer <b>Subjekt</b> → <b>Prädikat</b> → <b>Objekt</b> → <b>Ort</b> → <b>Zeit</b> – auch im Nebensatz.',
 praise:['Great!','Well done!','Super, richtig!','Excellent!','Brilliant!','Genau!','Perfect!'],
 end:['Excellent! Das sitzt!','Well done! Schon richtig gut.','Not bad! Noch ein bisschen üben.','Keep going! Schau dir die Kapitel noch einmal an.'],
 allOk:'Alles richtig – brilliant!',tfSub:'Tippe bei jeder Aussage auf <b>true</b> (stimmt) oder <b>false</b> (stimmt nicht).',
 mini:['Excellent! Das sitzt.','Well done! Fast alles verstanden.','Not bad – schau dir die Fehler noch einmal an.','Keep going! Übe die Lektionen noch einmal.']};
W.OV_LANG={name:'Englisch',flagCls:' uk',flag:'<svg viewBox="0 0 60 36" aria-hidden="true"><rect width="60" height="36" fill="#1e3a8a"/><path d="M0,0 60,36 M60,0 0,36" stroke="#fff" stroke-width="7"/><path d="M0,0 60,36 M60,0 0,36" stroke="#dc2626" stroke-width="3"/><path d="M30,0V36M0,18H60" stroke="#fff" stroke-width="11"/><path d="M30,0V36M0,18H60" stroke="#dc2626" stroke-width="6"/></svg>',
 sound:'Alle englischen Sätze kannst du anhören.',
 sub:LS=>`${LS.length} Lektion${LS.length===1?'':'en'} · erst die Erklärkarten, dann die Aufgaben (leicht → schwer) · am besten 15–20 Min. am Stück`};
W.AUDIO_BASE=W.AUDIO_BASE||'../shared/gaudio/';
W.AUDIO_FILES=W.GAUDIO_FILES||[];
/* ---------- Figuren (nur Bilder; die Stimmen kommen aus gen_gaudio.py) ---------- */
const C=W.CHARS||{};const AL={Dave:'Léo',Dad:'Martel',Mum:'Fournier',Sophie:'Clara',Anna:'Jade',Darla:'Yasmine',Hilary:'Samira',Timmy:'Lucas',Debbie:'Yasmine',
 Ella:'Samira',Will:'Théo',Robyn:'Jade',Mike:'Karim',Amy:'Clara',Layla:'Yasmine',Janet:'Clara',Alyssa:'Jade',Ben:'Karim',Tom:'Théo',Lily:'Clara',Sam:'Léo',
 Emma:'Jade',Max:'Lucas',Mia:'Samira',Jack:'Karim',Ruby:'Yasmine',Arjen:'Théo',Sheffield:'Martel',Bark:'Martel',Taylor:'Fournier',Owen:'Martel',Betty:'Fournier',Grandma:'Fournier'};
Object.entries(AL).forEach(([k,v])=>{if(!C[k]&&C[v])C[k]=C[v];});
Object.assign(W.NAMES||{},{Sheffield:'Mr Sheffield',Bark:'Mr Bark',Taylor:'Ms Taylor',Owen:'Mr Owen',Betty:'Aunt Betty'});
const PRONPIC={i:'Arjen',you:'Noah',he:'Dave',she:'Sophie',it:null,we:['Tom','Lily'],they:['Ben','Emma']};
W.PICOF=(t,who)=>{if(who&&C[who])return V.who(who);const s=strip(String(t));
 const names=Object.keys(AL).filter(n=>new RegExp('\\b'+n+'\\b').test(s)&&!/^(Will|Mum|Dad)$/.test(n));if(names.length)return V.who(names.slice(0,2));
 const m=s.match(/^\s*(?:(?:yes|no),\s*)?(?:(?:am|is|are)\s+)?([A-Za-z]+)/i);const p=m&&PRONPIC[m[1].toLowerCase()];return p?V.who(p):'';};
/* ---------- Varianten: 'I {am|’m} going' → alle Kombinationen ---------- */
function BX(s){const m=String(s).match(/\{([^{}]*)\}/);if(!m)return [String(s).replace(/\s+/g,' ').replace(/\s+([?.!,])/g,'$1').trim()];
 return m[1].split('|').flatMap(o=>BX(s.slice(0,m.index)+o+s.slice(m.index+m[0].length)));}
W.BX=(...a)=>[...new Set(a.flatMap(BX))];
/* ---------- Normalisieren & Kurzformen auflösen ---------- */
const N=s=>strip(String(s)).toLowerCase().replace(/[’`´ʼ]/g,"'").replace(/[«»"“”„?!.,:;–—…()]/g,' ').replace(/\s+/g,' ').trim();
const EXP=s=>N(s).replace(/\bi'm\b/g,'i am').replace(/\b(you|we|they)'re\b/g,'$1 are').replace(/\b(he|she|it|that|there|who|what)'s\b/g,'$1 is')
 .replace(/\b(\w+)'s (going|not)\b/g,'$1 is $2').replace(/\bisn't\b/g,'is not').replace(/\baren't\b/g,'are not').replace(/\bwon't\b/g,'will not').replace(/\bcan't\b/g,'cannot')
 .replace(/\bdon't\b/g,'do not').replace(/\bdoesn't\b/g,'does not').replace(/\bmustn't\b/g,'must not').replace(/\b(\w+)'ll\b/g,'$1 will').replace(/\bcan not\b/g,'cannot');
W.ENX={N,EXP};
const BE=['am','is','are'];const SUBJ={i:'am',you:'are',we:'are',they:'are',he:'is',she:'is',it:'is'};
const ING=w=>/^[a-z]{2,}ing$/.test(w)&&!/^(going|thing|something|nothing|anything|everything|morning|evening|king|ring|sing|bring|spring|swing|wing|ceiling)$/.test(w);
const base=w=>w==='running'?'run':w==='swimming'?'swim':w==='getting'?'get':w==='sitting'?'sit':w==='coming'?'come':w==='taking'?'take':w==='making'?'make':w==='having'?'have':w==='riding'?'ride':w==='baking'?'bake':w==='writing'?'write':w==='leaving'?'leave':w==='driving'?'drive':w==='shopping'?'shop':w.replace(/ing$/,'');
const D=(t,m)=>({t,m});
const MK={plan:'am / is / are + going to + Grundform',q:'Frage: Am / Is / Are + Wer? + going to + Grundform …?',kurz:'Kurzantwort: Yes, I am. / No, I’m not. – mit Yes nie Kurzform am Ende.',
 order:'Aussagesatz: Subjekt → Prädikat → Objekt → Ort → Zeit',neben:'Auch im Nebensatz: Subjekt → Prädikat (das Verb rutscht NICHT ans Ende).'};
function diagnoseEN(wrong,right){const w=N(wrong),r=N(right);if(!w||w===r)return [];const we=EXP(w),re=EXP(r);const out=[];
 const wt=we.split(' '),rt=re.split(' ');
 // 1 Lang-/Kurzform
 if(we===re){const short=/'(m|re|s)\b|n't\b/.test(r);out.push(short?D('✂️ Hier ist die <b>Kurzform</b> gefragt: <b>I am → I’m</b>, <b>you are → you’re</b>, <b>he is → he’s</b>, <b>is not → isn’t</b>. Der Apostroph ersetzt den weggelassenen Buchstaben.','Kurzform: I’m · you’re · he’s · she’s · we’re · they’re · isn’t · aren’t')
  :D('📏 Hier ist die <b>Langform</b> gefragt: <b>I am</b>, <b>you are</b>, <b>he is</b>, <b>is not</b> – ohne Apostroph.','Langform: I am · you are · he / she / it is · we / they are · is not · are not'));return out;}
 // 2 Verlaufsform statt going to
 if(/\bgoing to\b/.test(re)){const ingW=wt.filter(ING);const rv=(re.match(/going to (\w+)/)||[])[1];
  const goMiss=/\bgoing to go \w+ing\b/.test(re)&&/\bgoing to \w+ing\b/.test(we)&&!/\bgoing to go\b/.test(we);
  if(ingW.length&&!goMiss&&!(rv&&we.includes('going to '+rv))){const g=ingW[0];out.push(D(`🎬 <b>${g}</b> ist die <b>-ing-Form</b> (das passiert <i>gerade jetzt</i>). Für Pläne und Vorhersagen brauchst du <b>going to + Grundform</b>: ${rv?`<b>going to ${rv}</b>`:'going to + Verb ohne -ing'}.`,MK.plan));}
  // 3 going to go
  if(/\bgoing to go\b/.test(re)&&/\bgoing to\b/.test(we)&&!/\bgoing to go\b/.test(we))out.push(D('🚶 <b>going to</b> ist nur der „Plan-Teil“ (= werden). Das Verb <b>go</b> (gehen) fehlt noch: <b>going to go</b> to the concert.','going to + go: I’m going to go to …'));
  // 5 can / must
  if(/\b(going to|will) can\b/.test(we)||/\bcan to\b/.test(we))out.push(D('💪 Nach going to darf <b>can</b> nicht stehen. Ersatz: <b>be able to</b> → I’m going to <b>be able to</b> see …','can → be able to (in der Zukunft)'));
  if(/\b(going to|will) must\b/.test(we)||/\bmust to\b/.test(we))out.push(D('📋 Nach going to darf <b>must</b> nicht stehen. Ersatz: <b>have to</b> → I’m going to <b>have to</b> …','must → have to'));
  // 10 will
  if(/\bwill\b/.test(we)&&!/\bwill\b/.test(re))out.push(D('🔮 Hier geht es um einen <b>Plan</b> oder ein sicheres <b>Anzeichen</b> → <b>going to</b>. „Ich werde …“ heißt hier nicht <i>will</i>, sondern <b>I’m going to …</b>','Plan / Anzeichen → going to'));
  // 11 fehlendes to
  if(/\bgoing (?!to\b)\w+/.test(we)&&!out.length)out.push(D('🧷 <b>going to</b> – das <b>to</b> gehört immer dazu: going <b>to</b> play.','going to + Grundform'));
  // 9 Grundform
  const mv=we.match(/going to (\w+)/),rv2=re.match(/going to (\w+)/);if(mv&&rv2&&mv[1]!==rv2[1]&&(mv[1]===rv2[1]+'s'||mv[1]===rv2[1]+'es'||mv[1]===rv2[1]+'ed'||mv[1]===rv2[1]+'d'||(rv2[1]==='go'&&/^(goes|went)$/.test(mv[1]))))
   out.push(D(`🧱 Nach <b>going to</b> kommt die <b>Grundform</b> – ohne -s, ohne -ed: going to <b>${rv2[1]}</b>.`,'going to + Grundform (wie im Wörterbuch)'));
 }
 // 4 Frage nicht umgestellt
 if(BE.includes(rt[0])){const k=wt.findIndex(x=>BE.includes(x));if(k>0&&!BE.includes(wt[0])){out.push(D(`❓ In der Frage springt <b>${rt[0]}</b> nach vorne – <b>vor</b> das Subjekt: <i>${wt.slice(0,k).join(' ')} ${wt[k]}</i> → <b>${rt[0][0].toUpperCase()+rt[0].slice(1)} ${wt.slice(0,k).join(' ')}</b> going to …?`,MK.q));}
  else if(wt[0]==='do'||wt[0]==='does')out.push(D(`❓ Bei going to fragst du mit <b>am / is / are</b> – nicht mit do / does: <b>${rt[0][0].toUpperCase()+rt[0].slice(1)} ${rt[1]}</b> going to …?`,MK.q));}
 // 7 Pronomen vertauscht / 8 am-is-are
 if(wt.length===rt.length){for(let i=0;i<rt.length;i++){const a=wt[i],b=rt[i];if(a===b)continue;
  if(SUBJ[a]&&SUBJ[b]&&a!==b){const g={he:'👦 he = er (Junge / Mann)',she:'👧 she = sie (Mädchen / Frau)',it:'📦 it = es (Ding / Tier)',they:'👥 they = sie (mehrere)',we:'🙋‍♂️🙋 we = wir',you:'🫵 you = du / ihr',i:'🙋 I = ich'};out.push(D(`Das Pronomen stimmt nicht: <b>${b}</b>, nicht ${a}. ${g[b]||''}`,'he = er · she = sie · it = es · they = sie (Plural)'));}
  else if(BE.includes(a)&&BE.includes(b)){const s=rt.slice(Math.max(0,i-3),i).concat(rt.slice(i+1,i+3)).find(x=>SUBJ[x]);out.push(D(`Die Form von <b>be</b> passt nicht zum Subjekt: ${b==='am'?'<b>I → am</b>':b==='is'?'<b>he / she / it</b> oder <b>ein</b> Name / eine Sache → <b>is</b>':'<b>you / we / they</b> oder <b>mehrere</b> → <b>are</b>'}${s?` (hier: ${s})`:''}.`,'I am · you are · he / she / it is · we / they are'));}}}
 // 12 fehlendes am/is/are
 if(/\b(am|is|are)( not)? going to\b/.test(re)&&!/\b(am|is|are)( not)? going to\b/.test(we)&&/\bgoing to\b/.test(we)&&!BE.includes(rt[0]))out.push(D('🧩 Vor <b>going to</b> fehlt <b>am / is / are</b>: I <b>am</b> going to …, she <b>is</b> going to …','am / is / are + going to'));
 // 13 Kurzantworten
 if(/^(yes|no) \w+ (am|is|are)( not)?$/.test(re)&&wt.length<=4){if(/^yes \w+'(m|re|s)$/.test(w)||/^yes (i'm|you're|he's|she's|it's|we're|they're)$/.test(w))out.push(D('✋ Bei <b>Yes</b> bleibt die Kurzantwort <b>lang</b>: <b>Yes, I am.</b> (nicht <s>Yes, I’m.</s>) – am Satzende darf man nicht abkürzen.',MK.kurz));
  else if(/\b(do|does|don't|doesn't)\b/.test(w))out.push(D('↩️ Die Kurzantwort nimmt das Hilfsverb aus der Frage: <b>Are you …? → Yes, I am.</b> / <b>Is he …? → No, he isn’t.</b>',MK.kurz));}
 // 14 Wortstellung
 const sort=a=>a.slice().sort().join(' ');
 if(!out.length&&wt.length===rt.length&&sort(wt)===sort(rt)){const SUB=/\b(because|when|if|that)\b/;
  if(SUB.test(re)){const sw=we.split(SUB).pop().trim().split(' '),sr=re.split(SUB).pop().trim().split(' ');if(sw[0]!==sr[0]||sw[1]!==sr[1])out.push(D('🧷 Im englischen <b>Nebensatz</b> (because, when, if, that …) bleibt die Reihenfolge <b>Subjekt → Prädikat</b>. Anders als im Deutschen rutscht das Verb <b>nicht</b> ans Ende: <i>…, weil ich müde <u>bin</u></i> → <b>because I am tired</b>.',MK.neben));}
  if(!out.length)out.push(D('🧩 Gleiche Wörter, aber falsche Reihenfolge. Bauplan: <b>Wer?</b> (Subjekt) → <b>Prädikat</b> (Hilfsverb + Vollverb) → <b>wen / was?</b> (Objekt, Person vor Sache) → <b>wo?</b> → <b>wann?</b>',MK.order));}
 const seen=new Set();return out.filter(x=>!seen.has(x.t)&&seen.add(x.t));}
W.diagnose=diagnoseEN;W.CLOSE_N=x=>EXP(N(x)); /* nächste Lösung: Kurzformen ausgeschrieben vergleichen */W.diagnoseEN=diagnoseEN;
/* ---------- Satz-Rollen für die farbige Rückmeldung (Subjekt / Prädikat / Rest) ---------- */
const AUXW=new Set(['am','is','are','was','were','be','will','won’t','can','can’t','cannot','must','mustn’t','do','does','did','don’t','doesn’t','didn’t','isn’t','aren’t','not','going','to','able','have','has']);
const MAIN=new Set('play go come stay bring clean take feel help call meet visit wash notice run fall see watch sink cry spend lose bake give swim want eat read write buy rain win get make sing dance study cook fly travel ride open close sleep carry drink listen like love leave start finish tidy do have be sit stand drive look miss walk wear learn sell send show tell try work'.split(' '));
const isMain=w=>MAIN.has(w)||MAIN.has(w.replace(/(es|s)$/,''))||MAIN.has(w.replace(/s$/,''));
W.VROLE=(ts,low)=>{const n=ts.length;if(!n)return null;const L=ts.map(t=>low(t.t));
 let i0=0;if(/^(yes|no)$/.test(L[0]))i0=1;
 const isAux=w=>AUXW.has(w)||/’(m|re|s)$/.test(w)&&false;
 const vgroup=s=>{let e=s,mainSeen=false;while(e<n){const w=L[e];if(w==='to'&&!(e>s&&/^(going|able|have|has)$/.test(L[e-1])))break;if(AUXW.has(w)&&!mainSeen){e++;continue;}if(isMain(w)&&!mainSeen){mainSeen=true;e++;continue;}break;}return e;};
 ts.forEach(t=>t.r='r');for(let i=0;i<i0;i++)ts[i].r='x';
 if(n>i0&&/^(am|is|are|do|does|can|will|must)$/.test(L[i0])){ts[i0].r='v';let k=i0+1;while(k<n&&!AUXW.has(L[k])&&!isMain(L[k]))k++;for(let j=i0+1;j<k;j++)ts[j].r='s';const e=vgroup(k);for(let j=k;j<e;j++)ts[j].r='v';return ts;}
 let k=i0;while(k<n&&!AUXW.has(L[k])&&!isMain(L[k])&&!/’(m|re)$/.test(L[k])&&!(/’s$/.test(L[k])&&k+1<n&&/^(going|not)$/.test(L[k+1])))k++;
 if(k>=n)return ts;let st=i0;for(let j=i0;j<k;j++)if(/,$/.test(ts[j].t))st=j+1;for(let j=i0;j<st;j++)ts[j].r='x';
 if(/’(m|re|s)$/.test(L[k])){for(let j=st;j<k;j++)ts[j].r='s';ts[k].r='s';const e=vgroup(k+1);for(let j=k+1;j<e;j++)ts[j].r='v';return ts;}
 for(let j=st;j<k;j++)ts[j].r='s';const e=vgroup(k);for(let j=k;j<e;j++)ts[j].r='v';return ts;};
/* ---------- Bausteine für die Erklärkarten ---------- */
const spk=(t,w)=>H.spk(t,w||'','mini');
const GV={};W.GV=GV;
/** Bauplan-Zug mit 4 Wagen: Wer? + am/is/are + going to + Grundform (Animation: Wagen fahren nacheinander ein) */
GV.plan=(s,be,v,rest,o={})=>`<div class="gplan${o.anim===false?'':' anim'}"><span class="gp-c gp-s"><small>1 · Wer?</small><b>${s}</b></span><span class="gp-plus">+</span><span class="gp-c gp-be"><small>2 · be</small><b>${be}</b></span><span class="gp-plus">+</span><span class="gp-c gp-gt"><small>3 · Plan</small><b>going to</b></span><span class="gp-plus">+</span><span class="gp-c gp-v"><small>4 · Grundform</small><b>${v}</b></span>${rest?`<span class="gp-rest">${rest}</span>`:''}${o.say===false?'':spk(`${s} ${be} going to ${v}${rest?' '+rest:''}`.replace(/\s+([.,!?’])/g,'$1'))}</div>`;
/** be-Tabelle (Lang- und Kurzform, Verneinung) */
GV.beTab=(o={})=>{const R=[['I','am','I’m','I’m not','🙋'],['you','are','you’re','you aren’t','🫵'],['he','is','he’s','he isn’t','👦'],['she','is','she’s','she isn’t','👧'],['it','is','it’s','it isn’t','🐱'],['we','are','we’re','we aren’t','🙋‍♂️🙋'],['they','are','they’re','they aren’t','👥']];
 return `<table class="t gbe"><tr><th></th><th>Langform</th><th>Kurzform</th>${o.neg===false?'':'<th>verneint</th>'}</tr>${R.map(r=>`<tr><td>${r[4]}</td><td><b>${r[0]} ${r[1]}</b></td><td>${r[2]} ${spk(r[2]+' going to play')}</td>${o.neg===false?'':`<td>${r[3]}</td>`}</tr>`).join('')}</table>`;};
/** Zeitstrahl: jetzt → Zukunft mit Plan- / Anzeichen-Symbol */
GV.time=(ic,lbl,cls='')=>`<div class="gtime ${cls}"><span class="gt-now">🕒 jetzt</span><span class="gt-line"><i></i></span><span class="gt-fut"><span class="gt-ic">${ic}</span><small>${lbl}</small></span></div>`;
/** Wörter springen: Aussage → Frage (Hilfsverb nach vorne, animiert) */
GV.swap=(s,be,rest,q)=>`<div class="gswap"><div class="gs-row">${V.b(s,'s')}${V.b(be,'v',{cls:'gs-jump'})}${V.b('going to '+rest,'r')}</div><div class="gs-arr">↓ <small>${be} springt nach vorne</small></div><div class="gs-row">${V.b(be[0].toUpperCase()+be.slice(1),'v',{cls:'gs-land'})}${V.b(s.toLowerCase()==='i'?'I':s.replace(/^[A-Z](?=[a-z])/,c=>/^(He|She|It|You|We|They)$/.test(s)?c.toLowerCase():c),'s')}${V.b('going to '+rest+'?','r')}${spk(q)}</div></div>`;
/** Hilfsverb (gestrichelt) und Vollverb (durchgezogen) wie auf dem Arbeitsblatt */
GV.pred=spec=>`<div class="gpred">${spec.split('|').map(p=>{const m=p.match(/^(.*)\/([a-z]+)$/);const [t,r]=m?[m[1],m[2]]:[p,''];return r==='a'?`<span class="gpa" title="Hilfsverb">${t}</span>`:r==='m'?`<span class="gpm" title="Vollverb">${t}</span>`:r==='s'?`<span class="gps" title="Subjekt">${t}</span>`:`<span class="gpr">${t}</span>`;}).join(' ')}${spk(spec.split('|').map(p=>p.replace(/\/[a-z]+$/,'')).join(' '))}</div>`;
GV.predLeg=()=>`<div class="gpleg"><span><span class="gps">Subjekt</span> unterstrichen</span><span><span class="gpa">Hilfsverb</span> gestrichelt</span><span><span class="gpm">Vollverb</span> durchgezogen</span></div>`;
/** Wochenplaner (Familie Fleming u. a.) */
GV.planner=(title,rows)=>`<div class="gplanner"><div class="gpl-h">🗓️ ${title}</div>${rows.map(r=>`<div class="gpl-r"><span class="gpl-d">${r[0]}</span><span class="gpl-ic">${r[3]||''}</span><span class="gpl-t"><b>${r[1]}</b> · ${r[2]}</span></div>`).join('')}</div>`;
/** Deutsch ↔ Englisch nebeneinander (Verb-Position) */
GV.de=(de,en,note,f1,f2)=>`<div class="gde"><div class="gde-r"><span class="gde-f">${f1||'🇩🇪'}</span><span>${de}</span></div><div class="gde-r"><span class="gde-f">${f2||'🇬🇧'}</span><span>${en}</span>${spk(strip(en))}</div>${note?`<div class="gde-n">${note}</div>`:''}</div>`;
/** Plan (A) oder Anzeichen (B) – zwei Kärtchen */
GV.ab=()=>`<div class="gab"><div class="gab-c gab-a"><b>A · Plan</b><span class="gab-ic">🗓️✍️</span><small>Jemand <b>hat sich vorgenommen</b>, etwas zu tun.</small><i>I’m going to visit my aunt.</i></div><div class="gab-c gab-b"><b>B · Anzeichen</b><span class="gab-ic">☁️➜🌧️</span><small>Man <b>sieht jetzt schon</b>, was gleich passiert.</small><i>Look at the clouds! It’s going to rain.</i></div></div>`;
/** Lego für Nebensatz: Deutsch Verb ans Ende ↔ Englisch bleibt */
GV.neben=()=>`<div class="gneb"><div class="gnb-r"><span class="gde-f">🇩🇪</span><span>Ich bleibe zu Hause, <b>weil</b> ich müde <b class="gnb-v gnb-end">bin</b>.</span></div><div class="gnb-r"><span class="gde-f">🇬🇧</span><span>I’m staying at home <b>because</b> <span class="gps">I</span> <b class="gnb-v">am</b> tired.</span>${spk('I’m staying at home because I am tired.')}</div><div class="gde-n">🇩🇪 Verb rutscht ans Ende · 🇬🇧 Subjekt → Verb bleibt zusammen</div></div>`;
/* ---------- kleine Helfer für Aufgaben ---------- */
/** Aufgabe mit eigener Diagnose-Funktion: dx(antwort) → [{t,m}] */
W.GX={
 /** tf mit true/false */
 tf:(q,rows,why,x={})=>Object.assign({type:'seg',tf:true,q,opts:['true','false'],rows:rows.map(r=>[r[0],r[1]?'true':'false',r[2]])},{why},x),
 /** Tippe alle Wörter von … an (multi) */
 tap:(q,sent,on,why,x={})=>{const ws=sent.split(' ');return Object.assign({type:'multi',keep:true,q,o:ws.map((w,i)=>[w,on.includes(i)]),why,sub:x.sub||'Tippe <b>alle</b> Wörter an, die dazugehören.'},x);}
};
})(window);
