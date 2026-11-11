/*
 * Special lecture (Middle High German course) — German through time, 3 of 6: from Old to Middle High German.
 * From the monastery to the court: clerics writing for lay listeners, the courts as patrons, French models,
 * German in charters and law, preachers and mystics, settlement in the East; weak endings, umlaut, courtly
 * loanwords, the question of a courtly standard. No reading section. Picture from Wikimedia Commons.
 * See CONTENT-CHECKS.md.
 */
Viator.addLecture('mhd', {
  id: 'mhd-s5',
  number: 113,
  special: true,
  title: 'Von klôster ze hove',
  subtitle: 'German through time 3/6: from Old High German to Middle High German, c. 1050–1350',
  minutes: 40,

  intro: `
    <p>Between about 1050 and 1350 German changed in two ways at once. Its sounds and endings changed gradually, without anyone intending it, so that the language of the 12th century looks different on the page from Notker’s. And the people who used it in writing changed. German moved out of the monastery school into the hall of the prince, the town council chamber and the law court. Lay nobles became patrons, listeners and authors, and by the end of the period German was a language of law and administration as well as of literature.</p>
    <p>This lecture traces both changes: who wrote German, for whom and why, and what that did to the language. Middle High German itself is the subject of the main lectures of this course; this one shows how it came about.</p>
    <p class="small muted">German through time, part 3 of 6: 1 Old High German · 2 From Old Saxon to Middle Low German · 3 From Old to Middle High German · 4 From Middle High German to Early New High German · 5 Towards the standard language · 6 From Middle Low German to Plattdeutsch.</p>
  `,

  background: [
    {
      title: 'Clerics writing for lay listeners (c. 1060–1170)',
      html: `
        <p>The first texts after the Old High German silence are religious poems, written by clerics but meant for lay audiences. The <em>Ezzolied</em>, a song on the history of salvation, comes from Bamberg around 1060; the <em>Annolied</em>, on Archbishop Anno of Cologne, from around 1080; the <em>Kaiserchronik</em>, a history of Roman and German emperors in verse, from Regensburg around 1150. These were texts for people who did not read Latin, many of them nobles, and they were meant to be heard rather than read.</p>
        <p>Clerics also adapted French epic. The priest Konrad’s <em>Rolandslied</em> (around 1170), after the French <em>Chanson de Roland</em>, was written, according to its epilogue, at the wish of a Duke Henry, usually identified as Henry the Lion.</p>
      `
    },
    {
      title: 'The courts (c. 1170–1250)',
      html: `
        <p>From about 1170 the great courts became centres of a new literature. The Staufer emperors, the landgraves of Thuringia, the Babenberg dukes in Vienna and many lesser lords kept poets or rewarded them. Landgrave Hermann I of Thuringia (died 1217) is the best-known patron: Heinrich von Veldeke finished his <em>Eneasroman</em> with his support, and Wolfram von Eschenbach and Walther von der Vogelweide spent time at his court. Later legend made his castle, the Wartburg, the scene of a singers’ contest.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Codex_Manesse_S%C3%A4ngerkrieg_auf_der_Wartburg.jpg/960px-Codex_Manesse_S%C3%A4ngerkrieg_auf_der_Wartburg.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Codex_Manesse_S%C3%A4ngerkrieg_auf_der_Wartburg.jpg/500px-Codex_Manesse_S%C3%A4ngerkrieg_auf_der_Wartburg.jpg|https://upload.wikimedia.org/wikipedia/commons/2/2e/Codex_Manesse_S%C3%A4ngerkrieg_auf_der_Wartburg.jpg" alt="A medieval miniature: a prince and princess enthroned above a group of singers"><figcaption>The singers’ contest on the Wartburg, a scene from later legend, in the Codex Manesse (Zurich, c. 1300–1340; Heidelberg, Cod. Pal. germ. 848, fol. 219v). The landgrave of Thuringia and his wife preside over the contest. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Codex_Manesse_S%C3%A4ngerkrieg_auf_der_Wartburg.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
        <p>The poets of this “classical” period of Middle High German (roughly 1170–1230) came from different backgrounds. Hartmann von Aue calls himself a ministerial, an unfree knight in a lord’s service. Wolfram claims in <em>Parzival</em> that he cannot read, which may be a pose. Gottfried von Strassburg was evidently highly educated, perhaps a cleric or a town official. Walther was a professional singer who depended on patrons. Their works were performed or read aloud to listeners. The <em>Nibelungenlied</em> (around 1200) is anonymous and probably comes from the Danube region near Passau.</p>
      `
    },
    {
      title: 'French models',
      html: `
        <p>The courtly romances were mostly adapted from French: Hartmann’s <em>Erec</em> and <em>Iwein</em> and Wolfram’s <em>Parzival</em> from the Arthurian romances of Chrétien de Troyes, Gottfried’s <em>Tristan</em> from Thomas of Britain, Veldeke’s <em>Eneasroman</em> from the French <em>Roman d’Eneas</em>. With the stories came the vocabulary of chivalry and the manners of the French aristocracy, often by way of Flanders and Brabant, whose courts were the nearest French-speaking or bilingual ones.</p>
        <p>Speaking with a Flemish touch was fashionable enough to have its own verb, <span class="la">vlæmen</span>, and to be mocked by poets. Many words came from French (grammar section 3). <span class="la">Ritter</span> was shaped on Middle Dutch <em>riddere</em>, itself modelled on French <em>chevalier</em>, beside native <span class="la">rîter</span>, “rider”. <span class="la">Dörper</span>, “boor”, from a Low Countries word for “villager”, became the courtly insult for anyone without manners, as in Neidhart’s mocking songs about peasants.</p>
      `
    },
    {
      title: 'German in law, sermons and devotion',
      html: `
        <p>Charters, the documents that recorded grants, sales and agreements, were written in Latin until well into the 13th century. German charters appear in the south-west in the first half of the century, become common from around 1270, and in many regions outnumber Latin ones during the 14th century. In 1235 Emperor Frederick II proclaimed an imperial peace at Mainz, the <em>Mainzer Landfriede</em>; a German version of it survives and is often called the first imperial law in German, though whether it was official from the start or an early translation is debated. Law books followed the Sachsenspiegel into High German (the <em>Deutschenspiegel</em> and, around 1275, the <em>Schwabenspiegel</em>), and towns began to record their laws and decisions in German.</p>
        <p>There were new spoken and written uses too. Preachers such as Berthold of Regensburg (died 1272) drew huge crowds with sermons in German. Around 1300 mystics such as Mechthild of Magdeburg and Meister Eckhart wrote about the soul and God in German, and formed many abstract words in <em>-heit, -keit</em> and <em>-unge</em> to do so. The German they shaped for philosophy and devotion is one of the roots of the abstract vocabulary of modern German, though how many individual words they actually coined is hard to prove.</p>
      `
    },
    {
      title: 'Settlers in the East',
      html: `
        <p>From the 12th to the 14th century settlers from the Low Countries, the Rhineland, Franconia, Thuringia and Saxony moved east of the Elbe and the Saale, into Brandenburg, Meissen, Silesia, Bohemia and Prussia, often invited by lords who wanted their lands farmed and their towns populated. The dialects that formed there mixed the speech of different home regions. East Central German, around Meissen and in Silesia, is often described as a settlers’ compromise; the theory that it was a deliberate levelling of many dialects (Theodor Frings) is influential but debated.</p>
        <p>This mattered later. The written German of the chancery at Meissen became the basis of Luther’s language and so of modern standard German, the subject of the next lecture.</p>
      `
    }
  ],

  grammar: [
    {
      title: '1. Weak endings and what followed',
      html: `
        <p>The great change between Old and Middle High German is the weakening of unstressed vowels: almost every full vowel in an ending became a weak <em>e</em> (schwa).</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Old High German</th><th>Middle High German</th><th>Modern German</th></tr></thead>
          <tbody>
            <tr><td class="la">taga</td><td class="la">tage</td><td>Tage</td></tr>
            <tr><td class="la">geban</td><td class="la">geben</td><td>geben</td></tr>
            <tr><td class="la">zunga</td><td class="la">zunge</td><td>Zunge</td></tr>
            <tr><td class="la">salbôn</td><td class="la">salben</td><td>salben</td></tr>
            <tr><td class="la">hôrta</td><td class="la">hôrte</td><td>hörte</td></tr>
          </tbody>
        </table></div>
        <p>The cause lies far back: Germanic stress fell on the first syllable, and unstressed syllables wore down. The consequences were large. Many noun and verb classes became indistinguishable by their endings, so case and number had to be shown by other means: above all by the article (<em>der, des, dem, den</em>), which becomes normal; by umlaut (<span class="la">gast, geste</span>); and by new plural endings such as <em>-er</em> (<span class="la">lamp, lember</span>, later <em>Lämmer</em>). Word order carries more of the meaning.</p>
      `
    },
    {
      title: '2. Umlaut becomes meaningful',
      html: `
        <p>Umlaut began long before it was written. An <em>i</em> or <em>j</em> in the following syllable pulled the stressed vowel forward: Old High German <span class="la">gast</span>, plural <span class="la">gesti</span>. Old High German scribes wrote it only for short <em>a</em>, as <em>e</em>. In Middle High German umlaut is spoken for all back vowels and written by more and more scribes, though irregularly; editions normalise it (<span class="la">hœren, küene, hiuser</span>).</p>
        <p>When the <em>i</em> of the ending weakened to <em>e</em>, the cause of the umlaut disappeared, but the umlaut stayed. From then on the change of vowel itself signalled the plural or the subjunctive: <span class="la">gast – geste</span>, <span class="la">er was – er wære</span>. A sound change had become grammar, and modern German still works this way (<em>Gast – Gäste, war – wäre</em>).</p>
      `
    },
    {
      title: '3. The vocabulary of the court',
      html: `
        <p>Courtly literature brought several hundred French words into German, mostly for chivalry, fighting, clothing, entertainment and manners. Many disappeared again with the fashion, but some survive in changed form:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Middle High German</th><th>Old French</th><th>Modern German</th></tr></thead>
          <tbody>
            <tr><td class="la">âventiure</td><td>aventure</td><td>Abenteuer</td></tr>
            <tr><td class="la">harnasch</td><td>harnais</td><td>Harnisch</td></tr>
            <tr><td class="la">prîs</td><td>pris</td><td>Preis</td></tr>
            <tr><td class="la">birsen</td><td>berser</td><td>pirschen</td></tr>
            <tr><td class="la">tanzen</td><td>danser</td><td>tanzen</td></tr>
            <tr><td class="la">turnei, turnieren</td><td>tornei, tornoier</td><td>Turnier</td></tr>
          </tbody>
        </table></div>
        <p>Two French suffixes became productive in German and are still used with native words. <em>-îe</em> (French <em>-ie</em>) later became <em>-ei</em> through the diphthongisation (<span class="la">zouberîe</span> → <em>Zauberei</em>; later <em>Bäckerei, Bücherei</em>). The verb ending <em>-ieren</em> (French <em>-ier</em>) appears in <span class="la">parlieren</span> and later in <em>buchstabieren</em> and <em>hausieren</em>.</p>
        <p>German also made new words on French models. <span class="la">Hövesch</span>, “courtly”, was formed from <span class="la">hof</span> on the model of French <em>courtois</em> (from <em>cort</em>, “court”). Its later form is modern <em>hübsch</em>, which shows how far a courtly ideal could drift: from “having court manners” to “pretty”.</p>
      `
    },
    {
      title: '4. A courtly standard?',
      html: `
        <p>The manuscripts of Middle High German literature are written in many regional spellings, and most were copied long after the poets’ lifetimes. Yet the poets themselves seem to have avoided some rhymes that worked only in their own dialect, which suggests that they wrote for listeners beyond their own region. Whether this amounts to a supra-regional courtly literary language (<em>höfische Dichtersprache</em>) is debated. Karl Lachmann and his successors in the 19th century believed in it and built the normalised spelling of the editions on it; later research sees regional writing habits and a looser convergence of poetic style.</p>
        <p>The normalised Middle High German of this course is therefore a scholarly construction of the 19th century: consistent, useful, and close to what the poets may have aimed at in their rhymes, but not what any medieval scribe wrote.</p>
      `
    }
  ],

  vocab: [
    { id: 'ritter', head: 'ritter', la: 'ritter, m.', pos: 'noun', g: 'm', en: 'knight', de: 'Ritter', note: 'Shaped on Middle Dutch riddere (French chevalier); native rîter meant simply “rider”.' },
    { id: 'aventiure', head: 'âventiure', la: 'âventiure, f.', pos: 'noun', g: 'f', en: 'adventure; a knight’s quest; the story of it', de: 'Abenteuer', note: 'From Old French aventure. Wolfram personifies it as Frou Âventiure.' },
    { id: 'turnei', head: 'turnei', la: 'turnei, m.', pos: 'noun', g: 'm', en: 'tournament', de: 'Turnier', note: 'From Old French tornei; the modern word comes from the verb turnieren.' },
    { id: 'tjost', head: 'tjost', la: 'tjost, f.', pos: 'noun', g: 'f', en: 'joust: single combat with lances', de: 'Lanzenkampf, Tjost', note: 'From Old French joste; tj renders the French j-sound.' },
    { id: 'pris', head: 'prîs', la: 'prîs, m.', pos: 'noun', g: 'm', en: 'praise, renown; prize', de: 'Ruhm; Preis', note: 'From Old French pris.' },
    { id: 'harnasch', head: 'harnasch', la: 'harnasch, n.', pos: 'noun', g: 'n', en: 'armour', de: 'Harnisch, Rüstung', note: 'From Old French harnais.' },
    { id: 'dorper', head: 'dörper', la: 'dörper, m.', pos: 'noun', g: 'm', en: 'peasant; boor (a courtly insult)', de: 'Bauer; Tölpel', note: 'From a Low Countries word for “villager”; Neidhart’s songs mock the dörper.' },
    { id: 'tanzen', head: 'tanzen', la: 'tanzen', pos: 'verb, weak', en: 'dance', de: 'tanzen', note: 'From Old French danser.' },
    { id: 'birsen', head: 'birsen', la: 'birsen', pos: 'verb, weak', en: 'hunt (with hounds or the bow)', de: 'pirschen', note: 'From Old French berser, “to shoot”.' },
    { id: 'parlieren', head: 'parlieren', la: 'parlieren', pos: 'verb, weak', en: 'speak (elegantly, in the French manner)', de: 'parlieren, reden', note: 'From Old French parler; -ieren became a productive suffix.' },
    { id: 'vlaemen', head: 'vlæmen', la: 'vlæmen', pos: 'verb, weak', en: 'speak with a (fashionable) Flemish touch', de: 'flämisch reden', note: 'A courtly affectation, mocked by poets.' },
    { id: 'hovesch', head: 'hövesch', la: 'hövesch', pos: 'adjective', en: 'courtly, refined', de: 'höfisch; später hübsch', note: 'Made from hof on the model of French courtois; modern hübsch.' }
  ],

  grammarCards: [
    { id: 'mhg-early', front: 'Ezzolied, Annolied', back: 'c. 1060 and c. 1080: clerics writing German for lay listeners' },
    { id: 'mhg-classic', front: 'The classical period of Middle High German literature', back: 'c. 1170–1230' },
    { id: 'mhg-hermann', front: 'Landgrave Hermann I of Thuringia (died 1217)', back: 'Patron of Veldeke, Wolfram and Walther' },
    { id: 'mhg-chretien', front: 'Chrétien de Troyes', back: 'French source of Hartmann’s Erec and Iwein and Wolfram’s Parzival' },
    { id: 'mhg-weak', front: 'OHG taga, geban, zunga → MHG?', back: 'tage, geben, zunge: endings weakened to e' },
    { id: 'mhg-umlaut', front: 'Why did umlaut become grammar?', back: 'The i that caused it weakened to e; the vowel change alone now marked plural or subjunctive' },
    { id: 'mhg-suffix', front: '-îe and -ieren', back: 'French suffixes made productive in German: Zauberei, buchstabieren' },
    { id: 'mhg-hubsch', front: 'hövesch', back: 'Made on the model of courtois; modern hübsch' },
    { id: 'mhg-landfriede', front: 'Mainzer Landfriede', back: '1235; its German version is often called the first imperial law in German' },
    { id: 'mhg-east', front: 'East Central German', back: 'Dialects formed by settlers east of the Saale; later the basis of the Saxon chancery language' },
    { id: 'mhg-norm', front: 'Normalised Middle High German', back: 'A 19th-century editorial spelling (Lachmann), not a medieval standard' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Who wrote the first German texts after the Old High German silence?', options: ['clerics, for lay listeners', 'knights, for each other', 'merchants, for trade', 'princes, for their chanceries'], answer: 0, explain: 'Ezzolied, Annolied, Kaiserchronik.' },
    { id: 'e2', type: 'mc', prompt: 'The classical period of Middle High German literature is roughly:', options: ['1170–1230', '1050–1100', '1300–1350', '1450–1500'], answer: 0, explain: 'Hartmann, Wolfram, Gottfried, Walther, the Nibelungenlied.' },
    { id: 'e3', type: 'mc', prompt: 'Which prince is famous as the patron of Veldeke, Wolfram and Walther?', options: ['Landgrave Hermann I of Thuringia', 'Emperor Otto I', 'Henry the Lion', 'Emperor Charles IV'], answer: 0, explain: 'Later legend placed a singers’ contest at his Wartburg.' },
    { id: 'e4', type: 'mc', prompt: 'Most courtly romances in German were adapted from:', options: ['French', 'Latin', 'Old Norse', 'Italian'], answer: 0, explain: 'Chrétien de Troyes, Thomas of Britain, the Roman d’Eneas.' },
    { id: 'e5', type: 'mc', prompt: 'What did <span class="la">vlæmen</span> mean?', options: ['to speak with a fashionable Flemish touch', 'to fight on horseback', 'to write in Latin', 'to sing in French'], answer: 0, explain: 'French manners often came by way of Flanders.' },
    { id: 'e6', type: 'mc', prompt: 'Why did umlaut become a grammatical signal?', options: ['the i that caused it weakened to e, so the vowel change alone marked the form', 'scribes decided to use it', 'it came from French', 'Luther introduced it'], answer: 0, explain: 'gast – geste, was – wære.' },
    { id: 'e7', type: 'mc', prompt: 'When did German charters become common?', options: ['from around 1270', 'around 900', 'after 1500', 'only in the 16th century'], answer: 0, explain: 'In many regions they outnumber Latin ones in the 14th century.' },
    { id: 'e8', type: 'mc', prompt: 'Why are the mystics around 1300 (Mechthild, Eckhart) important for German?', options: ['they formed many abstract words in -heit, -keit, -unge', 'they wrote the first grammar', 'they translated the whole Bible', 'they founded the first university'], answer: 0, explain: 'German as a language of philosophy and devotion.' },
    { id: 'e9', type: 'match', prompt: 'Match the Middle High German word to its modern descendant.', pairs: [
      ['âventiure', 'Abenteuer'], ['harnasch', 'Harnisch'], ['birsen', 'pirschen'], ['hövesch', 'hübsch'], ['prîs', 'Preis']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the poet to a work.', pairs: [
      ['Hartmann von Aue', 'Iwein'], ['Wolfram von Eschenbach', 'Parzival'], ['Gottfried von Strassburg', 'Tristan'], ['Heinrich von Veldeke', 'Eneasroman'], ['Walther von der Vogelweide', 'Palästinalied']
    ] },
    { id: 'e11', type: 'gap', prompt: 'OHG <span class="la">taga</span> “days” → MHG <span class="la">tag___</span>', hint: 'the weak ending vowel', answers: ['e'], full: 'tage', explain: 'Full vowels in endings weakened to e.' },
    { id: 'e12', type: 'gap', prompt: 'MHG <span class="la">zouberîe</span> → modern <em>Zauber___</em>', hint: 'the suffix after diphthongisation', answers: ['ei'], full: 'Zauberei', explain: 'French -ie became MHG -îe and then -ei.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the Middle High German and the modern form.', headers: ['Middle High German', 'Modern German'], rows: [
      { label: 'taga (OHG)', answers: ['tage', 'tage'] },
      { label: 'geban (OHG)', answers: ['geben', 'geben'] },
      { label: 'zunga (OHG)', answers: ['zunge', 'zunge'] },
      { label: 'gesti (OHG, “guests”)', answers: ['geste', 'gäste|gaeste'] }
    ] },
    { id: 'e14', type: 'order', prompt: 'Put these in chronological order, earliest first.', source: 'From Old to Middle High German', tokens: ['Ezzolied (c. 1060)', 'Kaiserchronik (c. 1150)', 'Parzival (c. 1200–10)', 'Mainzer Landfriede (1235)'], explain: 'From clerical poetry to imperial law.' },
    { id: 'e15', type: 'mc', prompt: 'The normalised spelling of Middle High German editions is:', options: ['a 19th-century scholarly construction', 'the spelling of the Codex Manesse', 'the spelling of the imperial chancery', 'Walther’s own spelling'], answer: 0, explain: 'Lachmann and his successors.' },
    { id: 'e16', type: 'mc', prompt: 'Which word was made in German on a French model rather than borrowed?', options: ['hövesch (on courtois)', 'tjost', 'prîs', 'harnasch'], answer: 0, explain: 'Built from native hof.' }
  ],

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'The Rolandslied (c. 1170) was written by:', options: ['a priest, Konrad', 'Walther von der Vogelweide', 'Hartmann von Aue', 'a Flemish merchant'], answer: 0, explain: 'After the French Chanson de Roland.' },
      { id: 't2', type: 'mc', prompt: 'Hartmann von Aue calls himself:', options: ['a ministerial, an unfree knight in a lord’s service', 'a prince', 'a monk', 'a townsman'], answer: 0, explain: 'A typical background for a courtly poet.' },
      { id: 't3', type: 'mc', prompt: 'Gottfried’s <em>Tristan</em> is based on:', options: ['Thomas of Britain', 'Chrétien de Troyes', 'Virgil', 'the Nibelungenlied'], answer: 0, explain: 'A French romance of Tristan.' },
      { id: 't4', type: 'mc', prompt: 'A <span class="la">dörper</span> is:', options: ['a peasant or boor, in courtly mockery', 'a knight', 'a French poet', 'a herald'], answer: 0, explain: 'From a Low Countries word for “villager”.' },
      { id: 't5', type: 'mc', prompt: 'Native MHG <span class="la">rîter</span> meant:', options: ['rider', 'knight', 'king', 'servant'], answer: 0, explain: 'ritter was shaped on Middle Dutch riddere.' },
      { id: 't6', type: 'gap', prompt: 'OHG <span class="la">zunga</span> → MHG <span class="la">zung___</span>', hint: 'the weak ending vowel', answers: ['e'], full: 'zunge', explain: 'Modern Zunge.' },
      { id: 't7', type: 'mc', prompt: 'Which dialect area, formed by settlers, became important for later standard German?', options: ['East Central German (Meissen)', 'Alemannic', 'Ripuarian (Cologne)', 'Westphalian'], answer: 0, explain: 'The basis of the Saxon chancery language.' },
      { id: 't8', type: 'mc', prompt: 'Berthold of Regensburg (died 1272) is known for:', options: ['sermons in German to huge crowds', 'the first German charter', 'love songs', 'a law book'], answer: 0, explain: 'German as a spoken public language.' },
      { id: 't9', type: 'mc', prompt: 'The plural ending -er (<span class="la">lamp, lember</span>) shows that:', options: ['with weak endings, new plural markers took over', 'French influence', 'Latin influence', 'Low German influence'], answer: 0, explain: 'Modern Lämmer, Kinder, Häuser.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">tjost</span> is written with tj because:', options: ['tj renders the French j-sound of joste', 'it is Dutch', 'it is Old Norse', 'it is a scribal error'], answer: 0, explain: 'From Old French joste.' }
    ]
  },

  reference: [
    { title: 'Endings, Old to Middle High German', headers: ['Old High German', 'Middle High German', 'Modern German'], rows: [['taga', 'tage', 'Tage'], ['geban', 'geben', 'geben'], ['zunga', 'zunge', 'Zunge'], ['salbôn', 'salben', 'salben'], ['gast, gesti', 'gast, geste', 'Gast, Gäste']] },
    { title: 'French words in Middle High German', headers: ['Middle High German', 'Old French', 'Modern German'], rows: [['âventiure', 'aventure', 'Abenteuer'], ['harnasch', 'harnais', 'Harnisch'], ['prîs', 'pris', 'Preis'], ['birsen', 'berser', 'pirschen'], ['turnei', 'tornei', 'Turnier'], ['tanzen', 'danser', 'tanzen'], ['-îe', '-ie', '-ei (Zauberei)']] }
  ]
});
