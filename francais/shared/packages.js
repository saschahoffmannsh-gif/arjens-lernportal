/* ===================== PAKETE (Klassenarbeiten + Hausaufgaben) =====================
   EIN Eintrag pro Paket – alles Weitere (Fachseite, Listen, Paketseite, Zurück-Links, Badges) entsteht automatisch.
   Danach:  cd /workspace/francais/lektionen && node build.js   (erzeugt die Seite francais/<id>/)
   Felder:
     id        Ordnername unter francais/ (nur a-z 0-9 -, darf KEINE Lektion heißen)
     fach      'francais' (später auch andere Fächer)
     typ       'klassenarbeit' | 'hausaufgabe'
     titel     z. B. '1. Klassenarbeit'
     datum     'JJJJ-MM-TT' – Klassenarbeit: Termin · Hausaufgabe: Erstell-/Abgabedatum
     schwerpunkte  Chips in der Liste
     teile     [{t:'Überschrift', lektionen:['slug', …]}]   (Lektionsordner bleiben unter francais/<slug>/)
     probe     {typ:'gross'}  = große Probe-Klassenarbeit (training/#probe)
               {typ:'mini', n, ch:['kapitel-id', …], lbl:'…'} = nur Aufgaben aus diesen Kapiteln (optional)
               {typ:'mini', n:10} = Mini-Probearbeit aus den Aufgaben der Paket-Lektionen (training/#mini-<id>)
     spiele    true = Spiele-Kacheln zeigen
     vokspiele optional {t, href, slug, parts, titel, sub} = Vokabel-Spiele (Englisch-Spiel-Engine) als eigener Teil auf der Paketseite
     status    optional 'erledigt' (sonst automatisch: Datum vorbei → erledigt)
     checkliste / lernplan  optional (nur Anzeige auf der Paketseite) */
window.PACKAGES=[
 {id:'klassenarbeit-1',fach:'francais',typ:'klassenarbeit',titel:'1. Klassenarbeit',datum:'2026-10-30',
  schwerpunkte:['Hörverstehen','Vokabeln bis „le globe“','être','le / la / les','un / une / des','Verben auf -er','Texte „Je me présente“ · „C’est ma chambre“'],
  teile:[{t:'Teil 1 · Grammatik & Texte – zuerst alles in Ruhe durcharbeiten',lektionen:['etre','artikel-bestimmt','artikel-unbestimmt','verben-er','texte']},
         {t:'Teil 2 · Hören & Aussprache – zum Schluss',lektionen:['ecouter']}],
  probe:{typ:'gross'},spiele:true,
  checkliste:[['etre','être: je suis, tu es, il est … (+ c’est)'],['artikel-bestimmt','Bestimmter Artikel le, la, l’, les'],['artikel-unbestimmt','Unbestimmter Artikel un, une, des (+ il y a)'],['verben-er','Verben auf -er: regarder, présenter, écouter, téléphoner, parler, appeler'],['texte','Texte: «C’est moi!» und «C’est ma chambre!»'],['ecouter','Hörverstehen'],['vok','Vokabeln Unité 1 bis Unité 2 Volet 1 (bis „le globe“) – mit dem Übungspaket / Vokabelheft lernen']],
  lernplan:[['Sa 24.10.','être + bestimmter Artikel','etre'],['So 25.10.','unbestimmter Artikel + Vokabeln Unité 1','artikel-unbestimmt'],['Mo 26.10.','Verben auf -er (Achtung: appeler!)','verben-er'],['Di 27.10.','Texte: C’est moi + C’est ma chambre – einmal mit der Hand ins Heft schreiben','texte'],['Mi 28.10.','Zum Schluss: Hörverstehen (eigener Teil: Hör-Strategien, Hören zur Grammatik, Hörtexte) + Vokabeln Unité 2','ecouter'],['Do 29.10.','📝 Probe-Klassenarbeit (45 Min.) – danach nur noch üben, was bei „Das solltest du wiederholen“ steht. Früh schlafen! 😴','training/#probe'],['Fr 30.10.','Klassenarbeit – Bonne chance! 🍀','']]},
 {id:'hausaufgabe-u2v3',fach:'francais',typ:'hausaufgabe',titel:'Vokabeln Unité 2 · Volet 3',datum:'2026-11-09',
  schwerpunkte:['35 neue Vokabeln (Spiele)','Verben: elle / tu / je','le copain / la copine','s’il te plaît / s’il vous plaît','Qu’est-ce qu’il y a? & Co.','les devoirs · rentrer à la maison'],
  vokspiele:{t:'Teil 1 · Vokabeln lernen – mit Spielen',href:'vokabeln-u2v3/',slug:'fr-vokabeln-u2v3',parts:3,titel:'35 Wörter in 3 Teilen',sub:'Wort-Entdecker, Memory, Baukasten, Lückensatz, Blitzrunde, Schreib-Profi'},
  teile:[{t:'Teil 2 · Besonderheiten – Erklärungen & Übungen (Hören am Ende)',lektionen:['unite2-volet3']}],
  probe:{typ:'mini',n:12,ch:['uebersetzen','verben','lueckendialog'],lbl:'Übersetzen (beide Richtungen) · Verbformen elle / tu / je · Lückendialog'},
  checkliste:[['vok','Alle 3 Vokabel-Teile mit den Spielen geschafft (mind. 70 %)'],['unite2-volet3','Verben elle / tu / je, copain / copine, s’il te plaît / s’il vous plaît, Szenen-Sätze'],['mini','Mini-Probearbeit: mindestens 80 %']]}
];
