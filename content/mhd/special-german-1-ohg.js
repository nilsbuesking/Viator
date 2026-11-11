/*
 * Special lecture (Middle High German course) — German through time, 1 of 6: Old High German.
 * Who used German c. 750–1050, where and why it was written, the word "deutsch", writing German with
 * Latin letters, and words for the new faith. No reading section (by design: the series is about the
 * history of the language, not about source texts). Picture from Wikimedia Commons. See CONTENT-CHECKS.md.
 */
Viator.addLecture('mhd', {
  id: 'mhd-s3',
  number: 111,
  special: true,
  title: 'Diutisc',
  subtitle: 'German through time 1/6: Old High German, c. 750–1050',
  minutes: 35,

  intro: `
    <p><strong>Old High German</strong> is the name for the earliest written German, from the middle of the 8th century to about 1050. “High” is geography, not prestige: it means the dialects of the higher, southern part of the German-speaking area, as against the Low German of the northern plain, which has its own lecture in this series.</p>
    <p>There was no Old High German language in the sense of a standard. What goes by that name is a group of dialects spoken by Franks, Alemans and Bavarians inside the Frankish realm, written down here and there by monks who had learned to write in Latin. Almost everything written in these centuries was written in Latin. German was the exception, and it needed a reason.</p>
    <p>This lecture asks who used German, where and for what; why anyone wrote it down; how a language without a written tradition was fitted to the Latin alphabet; and how it found words for Christian ideas.</p>
    <p class="small muted">German through time, part 1 of 6: 1 Old High German · 2 From Old Saxon to Middle Low German · 3 From Old to Middle High German · 4 From Middle High German to Early New High German · 5 Towards the standard language · 6 From Middle Low German to Plattdeutsch.</p>
  `,

  background: [
    {
      title: 'Who spoke it, and where',
      html: `
        <p>Around 800 the speakers of German lived inside the Frankish realm of Charlemagne. The realm also included speakers of early Romance, the ancestor of French and of the northern Italian dialects, and in the north the recently conquered Saxons. The German dialects of the realm fall into groups that roughly match older peoples and later duchies:</p>
        <ul>
          <li><strong>Bavarian</strong> in the south-east (Freising, Regensburg, Salzburg, Mondsee, Tegernsee);</li>
          <li><strong>Alemannic</strong> in the south-west (St Gallen, Reichenau, Murbach in Alsace);</li>
          <li><strong>East Franconian</strong> on the Main and the Fulda (Fulda, Würzburg);</li>
          <li><strong>Rhine Franconian</strong> around Mainz, Lorsch and Worms, with <strong>South Rhine Franconian</strong> further south (Weißenburg, today Wissembourg in Alsace);</li>
          <li><strong>Middle Franconian</strong> around Cologne and Trier, only partly touched by the consonant changes that mark High German (grammar section 2).</li>
        </ul>
        <p>The places in brackets are monasteries and cathedrals, because that is where the writing was done. They tell us where texts were copied, not how many people spoke what. Texts were often copied from one dialect area into another, and many show a mixture of forms. There are no reliable population figures for the period, and none at all for speakers of particular dialects.</p>
      `
    },
    {
      title: 'Why write German at all?',
      html: `
        <p>Charlemagne’s court wanted a Church that taught correctly, and that meant teaching people in a language they understood. The <em>Admonitio generalis</em> of 789 required the clergy to make sure that the faithful knew the Creed and the Lord’s Prayer. The reform synods of 813 went further: the synod of Tours ordered that sermons should be put into the “rustic Romance” language or into German, so that everyone could understand them. Latin had become the written language of learning and was no longer understood by ordinary people, even in the Romance-speaking areas.</p>
        <p>This is the background to most of what survives in Old High German:</p>
        <ul>
          <li><strong>Glosses and glossaries</strong>: single German words written above or beside Latin words. They are by far the largest body of material, and they show monks learning Latin, with German as a tool.</li>
          <li><strong>Texts for pastoral care</strong>: the Lord’s Prayer and the Creed, baptismal vows in which the candidate renounces the devil, confessions, short sermons.</li>
          <li><strong>Translations</strong> for study, some word for word, some remarkably free. The most ambitious is in rhymed verse: Otfrid of Weißenburg’s Gospel book (finished in the 860s), dedicated to King Louis the German. Otfrid explains in the book itself why he wrote in Frankish: other peoples had praised God in their own language, and the Franks should do the same.</li>
          <li><strong>School texts</strong>: around 1000 Notker of St Gallen translated and explained Boethius, the Psalms and other school texts in a mixture of German and Latin, as aids for his own teaching.</li>
        </ul>
        <p>Lay poetry (heroic songs, charms, riddles) belonged to an oral culture and was written down only by chance: a few lines in a spare space, or on a leaf used to bind a book. How much has been lost cannot be known. Most of it was probably never written at all.</p>
      `
    },
    {
      title: 'The word deutsch',
      html: `
        <p>The word <em>deutsch</em> first appears in Latin dress. In 786 a papal legate, George of Ostia, reported to Rome on synods held in England, whose decisions had been read out both in Latin and in the vernacular, <em>theodisce</em>. <em>Theodiscus</em> is a Latinised form of a Germanic adjective derived from a word for “people” (Old High German <span class="la">thiot, diot</span>). It meant “of the people”: the language of ordinary people, as opposed to Latin. In England that meant Old English.</p>
        <p>At first the word described language only, and any Germanic language at that. When two grandsons of Charlemagne swore oaths of alliance at Strasbourg in 842, the historian Nithard recorded that Louis the German swore in Romance, so that his brother’s army could understand him, and Charles the Bald in German (<em>teudisca lingua</em>), for Louis’s men. Each army then swore in its own language. Around 1000 Notker of St Gallen calls his own language <span class="la">diutisk</span>.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Sacramenta_Argentariae_(pars_longa).png/960px-Sacramenta_Argentariae_(pars_longa).png" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Sacramenta_Argentariae_(pars_longa).png/500px-Sacramenta_Argentariae_(pars_longa).png|https://upload.wikimedia.org/wikipedia/commons/2/28/Sacramenta_Argentariae_(pars_longa).png" alt="A page of a medieval manuscript in Carolingian minuscule"><figcaption>A page of the Strasbourg Oaths of 842, from the only manuscript of Nithard’s <em>Histories</em> (Paris, Bibliothèque nationale de France, lat. 9768, fol. 13), copied about a century and a half after the event. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Sacramenta_Argentariae_(pars_longa).png" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
        <p>By the late 11th century the word was also used for the people and their land (the <em>Annolied</em>, around 1080, speaks of German people and German lands). Latin writers long preferred <em>Teutonicus</em>, a learned name borrowed from the ancient Teutones. Italian <em>tedesco</em> comes from the same root as <em>deutsch</em>; French <em>allemand</em> comes from the Alemans, and English <em>German</em> from the Latin <em>Germani</em>.</p>
      `
    },
    {
      title: 'A long silence under the Ottonians',
      html: `
        <p>After the end of the 9th century written German becomes rare. The Ottonian kings and emperors (from 919) came from Saxony, and their court, chancery and church culture were thoroughly Latin. The great exception is Notker of St Gallen (died 1022), and his German served the teaching of Latin texts. Why vernacular writing dwindled is debated: the end of the Carolingian reform programme, a confident Latin culture that felt no need for translations, and simple loss of manuscripts have all been suggested.</p>
        <p>When German writing picks up again, from about 1060, the language looks different. Its endings have weakened and its spelling has changed, and scholars call it Middle High German. That change, and the new readers and writers who came with it, are the subject of the third lecture in this series.</p>
      `
    }
  ],

  grammar: [
    {
      title: '1. A language of full endings',
      html: `
        <p>The most visible difference between Old High German and later German is in the endings. Old High German still had a range of full vowels in unstressed syllables, where Middle High German has only a weak <em>e</em>:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Old High German</th><th>Middle High German</th><th>Modern German</th></tr></thead>
          <tbody>
            <tr><td class="la">geban</td><td class="la">geben</td><td>geben</td></tr>
            <tr><td class="la">zunga</td><td class="la">zunge</td><td>Zunge</td></tr>
            <tr><td class="la">taga</td><td class="la">tage</td><td>Tage</td></tr>
            <tr><td class="la">salbôn</td><td class="la">salben</td><td>salben</td></tr>
            <tr><td class="la">hôrta</td><td class="la">hôrte</td><td>hörte</td></tr>
          </tbody>
        </table></div>
        <p>Germanic stress fell on the first syllable, so endings were spoken weakly and gradually lost their distinct vowels. Old High German shows the older state, and with it a richer set of noun and verb classes: you can often tell a word’s class from its ending, which later German can no longer do. The third lecture of this series looks at what followed from the weakening.</p>
      `
    },
    {
      title: '2. Why southern German sounds different',
      html: `
        <p>What separates High German from Low German, Dutch and English is the <strong>second consonant shift</strong>. In High German, old <em>p, t, k</em> became <em>pf</em> or <em>ff</em>, <em>z</em> or <em>ss</em>, and <em>ch</em> in certain positions: <em>Apfel</em> beside English <em>apple</em>; <em>Zeit</em> and <em>Wasser</em> beside <em>tide</em> and <em>water</em>; <em>machen</em> beside Low German <em>maken</em>.</p>
        <p>The shift is most complete in the south, in Alemannic and Bavarian, and weaker the further north you go. Middle Franconian (Cologne, Trier) took only part of it, which is why Cologne still says <em>dat</em> and <em>wat</em>. Low German took none of it. The boundaries of the individual changes do not run together but fan out along the Rhine, the “Rhenish fan”. The line between <em>maken</em> and <em>machen</em>, called the Benrath line after a place near Düsseldorf, is the usual dividing line between Low and High German on modern maps.</p>
        <p>When and where the shift began is disputed. It is already complete in the earliest Old High German texts. Some scholars date its beginnings to the 6th century, others later; some place its origin in the Alps, among the Langobards or the Bavarians, others think it arose in several places at once. What matters for this series is the result: from the very first texts, the South and the North of the German-speaking area write noticeably different languages.</p>
      `
    },
    {
      title: '3. Writing German with Latin letters',
      html: `
        <p>Monks who wrote German had learned to write in Latin, and the Latin alphabet had no letters for several German sounds. Each scriptorium found its own solutions:</p>
        <ul>
          <li><strong>w</strong> was written <em>uu</em> or <em>u</em>: <span class="la">uuort</span> “word”. The letter w grew out of this double u.</li>
          <li>The sound of English <em>th</em>, still present in early Franconian, was written <em>th</em> or <em>dh</em>; it later became <em>d</em> (<span class="la">thiot</span> → <span class="la">diot</span>).</li>
          <li>The new sounds produced by the consonant shift, the affricate (as in <em>Zeit</em>) and a sharp s-sound (as in <em>Wasser</em>), were both often written <em>z</em> or <em>zz</em>. That is why editions of Middle High German use a special letter, <em>ʒ</em>, for the s-like sound.</li>
          <li>The ch-sound was written <em>h, hh</em> or <em>ch</em>, depending on the place.</li>
          <li>Long vowels were usually not marked at all. The circumflexes in Old High German dictionaries, as in Middle High German ones, are editorial.</li>
        </ul>
        <p>Otfrid complained, in a Latin letter accompanying his Gospel book, that Frankish was hard to write in Latin letters. Notker of St Gallen developed the most systematic spelling of the period: he marked long vowels with a circumflex and stressed syllables with an acute accent, and he wrote <em>b</em> or <em>p</em>, <em>d</em> or <em>t</em> at the start of a word according to the sound before it. His system was not taken up by others.</p>
      `
    },
    {
      title: '4. Words for a new faith',
      html: `
        <p>Christianity brought ideas for which German had no words. Old High German writers used three methods, and modern German shows all three:</p>
        <ul>
          <li><strong>Borrowing</strong>: Latin words taken over and fitted to German sounds. An older layer had come with Roman trade and building on the Rhine and the Danube: <span class="la">wîn</span> (vinum), <span class="la">strâza</span> ((via) strata), <span class="la">mûra</span> (murus), <span class="la">ziagal</span> (tegula). The Church and the monasteries brought a second wave: <span class="la">munih</span> (monachus, Mönch), <span class="la">scuola</span> (schola, Schule), <span class="la">scrîban</span> (scribere, schreiben), <span class="la">brief</span> (breve, a short document), <span class="la">predigôn</span> (praedicare, predigen). <span class="la">kirihha</span> (Kirche) is older still: it comes from Greek <em>kyriakón</em>, “the Lord’s (house)”, by a route that is debated.</li>
          <li><strong>Loan translation</strong>: a Latin word rebuilt part by part from German material. <em>Con-scientia</em>, “with-knowing”, became <span class="la">gi-wizzani</span> (Gewissen); <em>miseri-cors</em>, “pitying in heart”, became <span class="la">arm-herzi</span> (later barmherzig).</li>
          <li><strong>New meanings for old words</strong>: <span class="la">heilag</span> (heilig), <span class="la">got</span> and <span class="la">toufen</span>, “to dip” (taufen), were native words that took on Christian meanings.</li>
        </ul>
        <p>Different missions left different words. In the south the Holy Spirit was <span class="la">wîho âtum</span>, “holy breath”; in Fulda and other areas reached by the Anglo-Saxon mission of Boniface it was <span class="la">heilag geist</span>, matching Old English <em>hālig gāst</em>. The northern form won, and modern German says <em>Heiliger Geist</em>. How much of the Church vocabulary goes back to Anglo-Saxon influence is debated, but the case is a good reminder that Old High German had no centre: its vocabulary was made in many monasteries at once.</p>
      `
    }
  ],

  vocab: [
    { id: 'kirihha', head: 'kirihha', la: 'kirihha, f.', pos: 'noun', g: 'f', en: 'church', de: 'Kirche', note: 'From Greek kyriakón “the Lord’s (house)”; how it reached German is debated.' },
    { id: 'munih', head: 'munih', la: 'munih, m.', pos: 'noun', g: 'm', en: 'monk', de: 'Mönch', note: 'From Latin monachus, a loan of the monastery age.' },
    { id: 'scuola', head: 'scuola', la: 'scuola, f.', pos: 'noun', g: 'f', en: 'school', de: 'Schule', note: 'From Latin schola.' },
    { id: 'brief', head: 'brief', la: 'brief, m.', pos: 'noun', g: 'm', en: 'document, written record; later letter', de: 'Urkunde; Brief', note: 'From Latin breve (scriptum), “a short (writing)”.' },
    { id: 'win', head: 'wîn', la: 'wîn, m.', pos: 'noun', g: 'm', en: 'wine', de: 'Wein', note: 'From Latin vinum, borrowed in Roman times.' },
    { id: 'straza', head: 'strâza', la: 'strâza, f.', pos: 'noun', g: 'f', en: 'paved road', de: 'Straße', note: 'From Latin (via) strata, “paved (road)”; a Roman-era loan.' },
    { id: 'ziagal', head: 'ziagal', la: 'ziagal, m.', pos: 'noun', g: 'm', en: 'tile, brick', de: 'Ziegel', note: 'From Latin tegula; building in stone came with the Romans.' },
    { id: 'giwizzani', head: 'giwizzani', la: 'giwizzani', pos: 'noun', en: 'conscience', de: 'Gewissen', note: 'Loan translation of Latin con-scientia, “with-knowing”.' },
    { id: 'scriban', head: 'scrîban', la: 'scrîban; screib; giscriban', pos: 'verb, strong', en: 'write', de: 'schreiben', note: 'From Latin scribere, but conjugated like a native strong verb.' },
    { id: 'predigon', head: 'predigôn', la: 'predigôn', pos: 'verb, weak', en: 'preach', de: 'predigen', note: 'From Latin praedicare, through Romance.' },
    { id: 'segenon', head: 'segenôn', la: 'segenôn', pos: 'verb, weak', en: 'bless; make the sign of the cross', de: 'segnen', note: 'From Latin signare, “to mark (with the cross)”.' },
    { id: 'toufen', head: 'toufen', la: 'toufen', pos: 'verb, weak', en: 'baptise (originally “dip”)', de: 'taufen', note: 'A native word, related to tief, given a Christian meaning.' },
    { id: 'diutisc', head: 'diutisc', la: 'diutisc', pos: 'adjective', en: 'of the people; German', de: 'deutsch', note: 'From thiot “people”; first recorded in Latin as theodiscus (786).' },
    { id: 'heilag', head: 'heilag', la: 'heilag', pos: 'adjective', en: 'holy', de: 'heilig', note: 'A native word. heilag geist won over the southern wîho âtum.' }
  ],

  grammarCards: [
    { id: 'ahd-period', front: 'Old High German: dates', back: 'c. 750–1050' },
    { id: 'ahd-high', front: '“High” in Old High German', back: 'Geography: the higher, southern regions, not prestige' },
    { id: 'ahd-where', front: 'Where was Old High German written?', back: 'In monasteries and cathedral schools: Fulda, St Gallen, Reichenau, Freising, Weißenburg and others' },
    { id: 'ahd-tours', front: 'Synod of Tours, 813', back: 'Sermons to be put into Romance or German so that everyone could understand them' },
    { id: 'ahd-786', front: 'theodiscus, 786', back: 'The earliest record of the word deutsch: “of the people”, the vernacular as opposed to Latin' },
    { id: 'ahd-842', front: 'Strasbourg Oaths, 842', back: 'Louis the German swore in Romance, Charles the Bald in German, so that each army understood' },
    { id: 'ahd-otfrid', front: 'Otfrid of Weißenburg', back: 'Gospel book in rhymed verse, finished in the 860s, in South Rhine Franconian' },
    { id: 'ahd-notker', front: 'Notker of St Gallen (died 1022)', back: 'German-Latin school translations (Boethius, the Psalms); a systematic spelling' },
    { id: 'ahd-shift', front: 'Second consonant shift', back: 'p, t, k → pf/ff, z/ss, ch; most complete in the south' },
    { id: 'ahd-gewissen', front: 'gi-wizzani', back: 'Gewissen: loan translation of Latin conscientia' },
    { id: 'ahd-geist', front: 'wîho âtum or heilag geist?', back: 'Southern and Anglo-Saxon-influenced words for the Holy Spirit; heilag geist won' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'What does “High” in Old High German refer to?', options: ['the higher, southern regions', 'the language of the nobility', 'a formal written style', 'the language of the Church'], answer: 0, explain: 'Geography: the uplands of the south, as against the northern plain.' },
    { id: 'e2', type: 'mc', prompt: 'Roughly when was Old High German written?', options: ['c. 750–1050', 'c. 400–700', 'c. 1050–1350', 'c. 1350–1650'], answer: 0, explain: 'From the mid-8th century to about 1050.' },
    { id: 'e3', type: 'mc', prompt: 'Who wrote almost all Old High German texts?', options: ['monks and clergy in monasteries and cathedral schools', 'royal officials', 'merchants', 'poets at princely courts'], answer: 0, explain: 'Writing was done where Latin was taught.' },
    { id: 'e4', type: 'mc', prompt: 'Why did the Carolingian reformers want German used at all?', options: ['so that people could understand the Creed, prayers and sermons', 'to replace Latin in the Church', 'to create a national language', 'for the royal chancery'], answer: 0, explain: 'Pastoral care: the Admonitio generalis (789) and the synods of 813.' },
    { id: 'e5', type: 'mc', prompt: 'The largest body of Old High German material consists of:', options: ['glosses: German words written beside Latin ones', 'heroic poems', 'law codes', 'letters'], answer: 0, explain: 'Monks used German as a tool for learning Latin.' },
    { id: 'e6', type: 'mc', prompt: 'Theodiscus, first recorded in 786, meant:', options: ['of the people: the vernacular, as opposed to Latin', 'of the Teutones', 'of the Franks', 'of the empire'], answer: 0, explain: 'From a Germanic word for “people” (OHG thiot).' },
    { id: 'e7', type: 'mc', prompt: 'At Strasbourg in 842, why did Louis the German swear in Romance?', options: ['so that his brother’s army could understand him', 'because Romance was his own language', 'because German could not be written', 'because the pope required it'], answer: 0, explain: 'Charles the Bald swore in German for Louis’s men.' },
    { id: 'e8', type: 'mc', prompt: 'Which dialects show the second consonant shift most completely?', options: ['Alemannic and Bavarian', 'Middle Franconian', 'Old Saxon', 'all of them equally'], answer: 0, explain: 'The shift weakens towards the north; Low German has none of it.' },
    { id: 'e9', type: 'match', prompt: 'Match the place to its dialect area.', pairs: [
      ['St Gallen', 'Alemannic'], ['Freising', 'Bavarian'], ['Fulda', 'East Franconian'], ['Weißenburg', 'South Rhine Franconian'], ['Cologne', 'Middle Franconian']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the Latin source to the Old High German loan.', pairs: [
      ['monachus', 'munih'], ['schola', 'scuola'], ['vinum', 'wîn'], ['strata', 'strâza'], ['tegula', 'ziagal']
    ] },
    { id: 'e11', type: 'gap', prompt: '<em>Gewissen</em> is a loan translation of Latin <em>con___ia</em>.', hint: '“with-knowing”', answers: ['scient'], full: 'conscientia', explain: 'gi-wizzani rebuilds con-scientia from German parts.' },
    { id: 'e12', type: 'gap', prompt: 'OHG <span class="la">zunga</span> → MHG <span class="la">zung___</span>', hint: 'the weak ending vowel', answers: ['e'], full: 'zunge', explain: 'Full vowels in endings weakened to e.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the Latin source and the modern German word.', headers: ['Latin', 'Modern German'], rows: [
      { label: 'munih', answers: ['monachus', 'mönch|moench'] },
      { label: 'scuola', answers: ['schola', 'schule'] },
      { label: 'strâza', answers: ['strata', 'straße|strasse'] },
      { label: 'ziagal', answers: ['tegula', 'ziegel'] }
    ] },
    { id: 'e14', type: 'order', prompt: 'Put these in chronological order, earliest first.', source: 'Old High German milestones', tokens: ['Admonitio generalis (789)', 'Strasbourg Oaths (842)', 'Otfrid’s Gospel book (860s)', 'death of Notker (1022)'], explain: 'From the Carolingian reform to the end of the period.' },
    { id: 'e15', type: 'mc', prompt: 'Which word for the Holy Spirit prevailed in German?', options: ['heilag geist, as in the areas of the Anglo-Saxon mission', 'wîho âtum, the southern word', 'spiritus sanctus, kept in Latin', 'âtum alone'], answer: 0, explain: 'Modern Heiliger Geist; compare Old English hālig gāst.' },
    { id: 'e16', type: 'mc', prompt: 'Why, according to his own book, did Otfrid write in Frankish?', options: ['so that the Franks could praise God in their own language, as other peoples had', 'because he knew no Latin', 'because the king had forbidden Latin', 'to translate a French poem'], answer: 0, explain: 'He wrote for a Frankish audience and dedicated the work to Louis the German.' },
    { id: 'e17', type: 'mc', prompt: 'Why is written German rare in the 10th century?', options: ['the Ottonian court and Church wrote Latin; the reasons are debated', 'German was forbidden', 'the monasteries were all destroyed', 'nobody spoke German any more'], answer: 0, explain: 'Notker of St Gallen is the great exception.' }
  ],

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Which of these is a loan translation?', options: ['Gewissen (from conscientia)', 'Mönch (from monachus)', 'Wein (from vinum)', 'Schule (from schola)'], answer: 0, explain: 'The others are borrowings.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">wîn, strâza, ziagal</span> belong to:', options: ['the loans of the Roman period', 'the loans of the monasteries', 'loans from French', 'loans from Old English'], answer: 0, explain: 'Trade and stone building on the Rhine and the Danube.' },
      { id: 't3', type: 'mc', prompt: 'Where was Otfrid a monk?', options: ['Weißenburg in Alsace', 'St Gallen', 'Fulda', 'Freising'], answer: 0, explain: 'Today Wissembourg; South Rhine Franconian.' },
      { id: 't4', type: 'mc', prompt: 'Notker of St Gallen used German mainly:', options: ['to teach Latin school texts', 'to write heroic poems', 'in charters', 'in sermons to crowds'], answer: 0, explain: 'Boethius, the Psalms and other school texts.' },
      { id: 't5', type: 'mc', prompt: 'In which city do people still say <em>dat</em> and <em>wat</em>?', options: ['Cologne', 'Munich', 'Zurich', 'Vienna'], answer: 0, explain: 'Middle Franconian took only part of the consonant shift.' },
      { id: 't6', type: 'mc', prompt: 'The letter w developed from:', options: ['a double u (uu)', 'Greek omega', 'a runic letter', 'a v with a hook'], answer: 0, explain: 'uuort “word”.' },
      { id: 't7', type: 'gap', prompt: 'Latin <em>monachus</em> → OHG <span class="la">mun___</span>', hint: 'the ch-sound written with h', answers: ['ih'], full: 'munih', explain: 'Modern Mönch.' },
      { id: 't8', type: 'mc', prompt: 'The synod of Tours (813) ordered sermons to be put into:', options: ['Romance or German', 'Latin only', 'Greek', 'Gothic'], answer: 0, explain: 'So that everyone could understand them.' },
      { id: 't9', type: 'mc', prompt: '<em>Kirche</em> comes ultimately from:', options: ['Greek kyriakón', 'Latin circus', 'Latin ecclesia', 'Old English cirice'], answer: 0, explain: '“The Lord’s (house)”.' },
      { id: 't10', type: 'mc', prompt: 'How were long vowels marked in Old High German manuscripts?', options: ['usually not at all; Notker is the exception', 'always with a circumflex', 'with double letters', 'with an h'], answer: 0, explain: 'The circumflexes of the dictionaries are editorial.' }
    ]
  },

  reference: [
    { title: 'The periods of German (this series)', headers: ['Period', 'Dates (approx.)', 'Lecture'], rows: [['Old High German', 'c. 750–1050', '1'], ['Old Saxon', 'c. 800–1150', '2'], ['Middle High German', 'c. 1050–1350', '3'], ['Middle Low German', 'c. 1200–1600', '2, 6'], ['Early New High German', 'c. 1350–1650', '4'], ['New High German', 'from c. 1650', '5'], ['modern Low German (Platt)', 'from c. 1600', '6']] },
    { title: 'Latin loans in Old High German', headers: ['Latin', 'Old High German', 'Modern German'], rows: [['vinum', 'wîn', 'Wein'], ['(via) strata', 'strâza', 'Straße'], ['tegula', 'ziagal', 'Ziegel'], ['monachus', 'munih', 'Mönch'], ['schola', 'scuola', 'Schule'], ['scribere', 'scrîban', 'schreiben'], ['praedicare', 'predigôn', 'predigen']] }
  ]
});
