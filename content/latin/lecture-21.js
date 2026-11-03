/*
 * Latin — Lecture XXI: the fourth declension; domus; the ablative of place from which and of separation.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotations (Caesar, De bello Gallico 1.1; Virgil, Aeneid 1.1, 1.9; Pliny, Letters 6.16.5,
 * 6.16.13, 6.16.16) checked against the texts supplied by Nils. Pictures from Wikimedia Commons;
 * see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-21',
  number: 21,
  title: 'Ā cultū longissimē absunt',
  subtitle: 'The fourth declension (manus, senātus, cornū); domus; the ablative of place from which and of separation',
  minutes: 60,

  intro: `
    <p>The fourth declension is small but important. Its nouns end in <span class="la">-us</span> like the second declension, but the genitive shows the difference: <span class="la">manus, manūs</span> “hand”, <span class="la">senātus, senātūs</span> “senate”, <span class="la">exercitus, exercitūs</span> “army”. The long <span class="la">ū</span> runs through the declension as the stem vowel, much as <span class="la">ā</span> marks the first declension and <span class="la">ō</span> the second.</p>
    <p>Many fourth-declension nouns are verbal nouns built on the stem of the fourth principal part: <span class="la">cāsus</span> “fall, chance” (<span class="la">cadō, cāsum</span>), <span class="la">cultus</span> “cultivation, way of life” (<span class="la">colō, cultum</span>), <span class="la">exercitus</span> “army”, originally “exercise, training” (<span class="la">exerceō, exercitum</span>). Learn them with their genitive, because <span class="la">-us</span> alone tells you nothing.</p>
    <p>The second half of the lecture adds two more uses of the ablative: <strong>place from which</strong> (<span class="la">ex urbe, ab ōrīs</span>) and <strong>separation</strong> (<span class="la">metū līberāre</span>, <span class="la">cibō carēre</span>), which Caesar uses in his first chapter.</p>
  `,

  background: [
    {
      title: 'Senātus populusque Rōmānus',
      html: `
        <p>Some of the central words of Roman public life belong to the fourth declension: <span class="la">senātus</span>, the senate; <span class="la">exercitus</span>, the army; <span class="la">magistrātus</span>, a public office or its holder; <span class="la">cōnsulātus</span>, the consulship. The abbreviation <span class="la">SPQR</span>, <span class="la">senātus populusque Rōmānus</span>, “the senate and people of Rome”, combines a fourth-declension and a second-declension noun, and stood on inscriptions, coins and standards for centuries; the city of Rome still puts it on its manhole covers.</p>
        <p><span class="la">senātus</span> is related to <span class="la">senex</span> “old man”: a council of elders, comparable in idea, though not in word, to the Germanic “aldermen”.</p>
      `
    },
    {
      title: 'Īdūs Mārtiae',
      html: `
        <p>The Ides (<span class="la">Īdūs, Īduum</span>, feminine plural, fourth declension) fell in the middle of each Roman month: on the 15th in March, May, July and October, on the 13th in the others (the course’s calendar page counts them). On the Ides of March 44 BC Julius Caesar was stabbed to death at a meeting of the senate in the Curia of Pompey. Suetonius (<em>Divus Iulius</em> 81) and Plutarch (<em>Caesar</em> 63) tell that a soothsayer, Spurinna, had warned him of danger lasting until that day; Shakespeare made the warning “Beware the Ides of March”.</p>
        <p>Two years later, one of the leading conspirators, Marcus Brutus, struck a silver denarius with a cap of liberty between two daggers and the words <span class="la">EID MAR</span>, an old spelling of <span class="la">Īdibus Mārtiīs</span>, “on the Ides of March”: an ablative of time and a fourth-declension noun on a coin that celebrated a murder.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Brutus_%26_L._Plaetorius_Cestianus,_denarius,_42_BC,_RRC_508-3.jpg/960px-Brutus_%26_L._Plaetorius_Cestianus,_denarius,_42_BC,_RRC_508-3.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Brutus_%26_L._Plaetorius_Cestianus,_denarius,_42_BC,_RRC_508-3.jpg/500px-Brutus_%26_L._Plaetorius_Cestianus,_denarius,_42_BC,_RRC_508-3.jpg|https://upload.wikimedia.org/wikipedia/commons/c/c8/Brutus_%26_L._Plaetorius_Cestianus,_denarius,_42_BC,_RRC_508-3.jpg" alt="Silver Roman coin: a bearded head on one side; on the other a cap between two daggers with the letters EID MAR"><figcaption>Denarius of Marcus Brutus, struck in 43–42 BC (Crawford, RRC 508/3): Brutus on the obverse; on the reverse the cap of a freed slave between two daggers, and <span class="la">EID MAR</span>. Very few genuine specimens are known. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Brutus_%26_L._Plaetorius_Cestianus,_denarius,_42_BC,_RRC_508-3.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Domus and Dom',
      html: `
        <p>The fourth declension did not survive into the Romance languages; its nouns joined the second (Italian <em>mano</em>, French <em>main</em>, keep the feminine gender of <span class="la">manus</span> but not its endings). <span class="la">domus</span> itself was replaced in ordinary speech by <span class="la">casa</span>, originally “hut” (Italian and Spanish <em>casa</em>, French <em>chez</em>). But it lives on in a special sense. A church, the <span class="la">domus Deī</span> or <span class="la">domus ecclesiae</span>, gave Italian <em>duomo</em> and German <em>Dom</em>, the word for a cathedral; the exact route is debated, but the Latin source is not.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_The_Death_of_Caesar_-_Walters_37884.jpg/960px-Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_The_Death_of_Caesar_-_Walters_37884.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_The_Death_of_Caesar_-_Walters_37884.jpg/500px-Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_The_Death_of_Caesar_-_Walters_37884.jpg|https://upload.wikimedia.org/wikipedia/commons/1/12/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_The_Death_of_Caesar_-_Walters_37884.jpg" alt="Nineteenth-century painting of a dead man in a toga lying at the foot of a statue while a group of men leaves the hall"><figcaption>Jean-Léon Gérôme, <em>The Death of Caesar</em> (1859–67; Baltimore, Walters Art Museum). Caesar lies in the Curia of Pompey while the conspirators leave. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_The_Death_of_Caesar_-_Walters_37884.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Hōrum omnium fortissimī sunt Belgae, propterea quod ā cultū atque hūmānitāte prōvinciae longissimē absunt …</p>
    <p>“Of all these the bravest are the Belgae, because they are furthest away from the way of life and civilisation of the Province …” Caesar, <em>De bello Gallico</em> 1.1, checked against the copy in the course’s source files; length marks added. <span class="la">ā cultū</span>: ablative of separation with <span class="la">absum</span>, “be away from”; <span class="la">cultū</span> is fourth declension (<span class="la">cultus, -ūs</span>). The Province is Gallia Narbonensis, Roman since the 120s BC.</p>
    <p>Caesar’s theory, that distance from Mediterranean comforts made men tough, is a commonplace of Greek and Roman ethnography, not an observation.</p>
    <p>More from the course texts: the Helvetii fight the Germans <span class="la">cum aut suīs fīnibus eōs prohibent …</span>, “when they keep them from their own territory”, ablative of separation with <span class="la">prohibeō</span> (BG 1.1). Aeneas came <span class="la">Trōiae … ab ōrīs</span>, “from the shores of Troy” (<em>Aeneid</em> 1.1), and suffered <span class="la">tot … cāsūs</span>, “so many misfortunes”, accusative plural of the fourth-declension <span class="la">cāsus</span> (1.9). Pliny watched flames <span class="la">ē Vesuviō monte</span>, “from Mount Vesuvius” (6.16.13), and at Stabiae <span class="la">levium exēsōrumque pūmicum cāsus metuēbātur</span>, “the fall of light, porous pumice was feared” (6.16.16): <span class="la">cāsus</span> again, now in the nominative.</p>
  `,

  pronunciation: `
    <h3>-us or -ūs</h3>
    <p>The nominative singular has a short <span class="la">u</span>, the genitive singular and the nominative and accusative plural a long one: <span class="la">MA-nus</span> (nom.), <span class="la">MA-nūs</span> (gen.). In writing without macrons the two look the same; in speech the difference is that of German <em>Mutter</em> and <em>Mut</em>.</p>
    <h3>-uum, -uī</h3>
    <p>The genitive plural has two separate vowels: <span class="la">MA-nu-um</span>, <span class="la">se-NĀ-tu-um</span>. The dative <span class="la">-uī</span> is two syllables: <span class="la">MA-nu-ī</span>.</p>
    <h3>senātus, exercitus</h3>
    <p><span class="la">se-NĀ-tus</span> (long ā); <span class="la">ex-ER-ci-tus</span>, the stress on the antepenult because <span class="la">ci</span> is short.</p>
  `,

  grammar: [
    {
      title: '1. The fourth declension',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>manus f. (hand)</th><th>frūctus m. (fruit)</th><th>cornū n. (horn)</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">manus</td><td class="la">frūctus</td><td class="la">cornū</td></tr>
            <tr><th>Gen.</th><td class="la">manūs</td><td class="la">frūctūs</td><td class="la">cornūs</td></tr>
            <tr><th>Dat.</th><td class="la">manuī</td><td class="la">frūctuī</td><td class="la">cornū</td></tr>
            <tr><th>Acc.</th><td class="la">manum</td><td class="la">frūctum</td><td class="la">cornū</td></tr>
            <tr><th>Abl.</th><td class="la">manū</td><td class="la">frūctū</td><td class="la">cornū</td></tr>
            <tr><th>Nom. pl.</th><td class="la">manūs</td><td class="la">frūctūs</td><td class="la">cornua</td></tr>
            <tr><th>Gen.</th><td class="la">manuum</td><td class="la">frūctuum</td><td class="la">cornuum</td></tr>
            <tr><th>Dat./Abl.</th><td class="la">manibus</td><td class="la">frūctibus</td><td class="la">cornibus</td></tr>
            <tr><th>Acc.</th><td class="la">manūs</td><td class="la">frūctūs</td><td class="la">cornua</td></tr>
          </tbody>
        </table></div>
        <p>The pattern is close to the third declension with <span class="la">u</span> in place of <span class="la">i/e</span>: <span class="la">-um</span> accusative, <span class="la">-ibus</span> plural, neuter plural <span class="la">-a</span>. Note the forms that serve twice: <span class="la">manūs</span> (gen. sg., nom. and acc. pl.).</p>
        <p><strong>Gender</strong>: most are masculine. The important feminines are <span class="la">manus</span>, <span class="la">domus</span> and <span class="la">Īdūs</span>; the few neuters (<span class="la">cornū, genū</span> “knee”) end in <span class="la">-ū</span>.</p>
      `
    },
    {
      title: '2. Three kinds of -us',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Nominative</th><th>Genitive</th><th>Declension</th><th>Gender</th></tr></thead>
          <tbody>
            <tr><td class="la">servus</td><td class="la">servī</td><td>2nd</td><td>m.</td></tr>
            <tr><td class="la">corpus</td><td class="la">corporis</td><td>3rd</td><td>n.</td></tr>
            <tr><td class="la">virtūs</td><td class="la">virtūtis</td><td>3rd</td><td>f.</td></tr>
            <tr><td class="la">manus</td><td class="la">manūs</td><td>4th</td><td>f.</td></tr>
          </tbody>
        </table></div>
        <p>Only the genitive in the dictionary entry tells you the declension, which is why vocabulary is always learnt with it.</p>
      `
    },
    {
      title: '3. domus',
      html: `
        <p><span class="la">domus, domūs</span> f. “house, home” mixes fourth- and second-declension forms:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">domus</td><td class="la">domūs</td></tr>
            <tr><th>Gen.</th><td class="la">domūs</td><td class="la">domuum, domōrum</td></tr>
            <tr><th>Dat.</th><td class="la">domuī, domō</td><td class="la">domibus</td></tr>
            <tr><th>Acc.</th><td class="la">domum</td><td class="la">domōs, domūs</td></tr>
            <tr><th>Abl.</th><td class="la">domō, domū</td><td class="la">domibus</td></tr>
          </tbody>
        </table></div>
        <p>Three forms without a preposition are especially common: <span class="la">domī</span> “at home” (an old locative case), <span class="la">domum</span> “(to) home”, <span class="la">domō</span> “from home”. German shows the same habit with <em>zu Hause</em>, <em>nach Hause</em>, <em>von zu Hause</em>, fixed phrases outside the normal pattern. Lecture XXXVIII treats place constructions fully.</p>
      `
    },
    {
      title: '4. The ablative of place from which',
      html: `
        <p>Motion away from a place is expressed by <span class="la">ā/ab, dē</span> or <span class="la">ē/ex</span> with the ablative:</p>
        <ul>
          <li><span class="la">ab urbe</span>: (away) from the city, from its neighbourhood</li>
          <li><span class="la">ex urbe</span>: out of the city, from inside it</li>
          <li><span class="la">dē monte</span>: down from the mountain</li>
        </ul>
        <p>The distinction is like German <em>von</em> against <em>aus</em>: <em>vom Bahnhof</em> (from near the station) against <em>aus dem Bahnhof</em> (out of it). With the names of towns and with <span class="la">domus</span>, Latin uses the bare ablative: <span class="la">Rōmā vēnit</span>, “he came from Rome”; <span class="la">domō</span>, “from home”.</p>
      `
    },
    {
      title: '5. The ablative of separation',
      html: `
        <p>Verbs and adjectives meaning freeing, lacking, keeping away or being distant take the ablative of the thing one is separated from, often without a preposition:</p>
        <ul>
          <li><span class="la">careō</span> + abl.: <span class="la">Cibō carēmus.</span> We lack food (we are without food).</li>
          <li><span class="la">līberō</span>: <span class="la">Puerōs metū līberāvit.</span> He freed the boys from fear.</li>
          <li><span class="la">prohibeō</span>: <span class="la">suīs fīnibus eōs prohibent</span>: they keep them from their territory (Caesar).</li>
          <li><span class="la">absum ā</span>: <span class="la">ā cultū … absunt</span>: they are far from the way of life (Caesar).</li>
        </ul>
        <p>With persons, <span class="la">ā/ab</span> is normal: <span class="la">ab hostibus līberāre</span>. German uses <em>von</em> (<em>befreien von</em>, <em>frei von</em>), but the old construction <em>einer Sache entbehren</em> with the genitive is the closest match to <span class="la">careō</span> + ablative: the verb itself contains the idea of “without”.</p>
      `
    }
  ],

  vocab: [
    { id: 'manus', head: 'manus', la: 'manus, manūs', g: 'f', pos: 'noun, 4th decl.', en: 'hand; band (of men)', stress: 'MA-nus · MA-nūs', deriv: 'manual, manufacture, manuscript', note: 'Feminine, though -us.' },
    { id: 'domus', head: 'domus', la: 'domus, domūs', g: 'f', pos: 'noun, 4th decl. (irregular)', en: 'house, home', stress: 'DO-mus', deriv: 'domestic; Dom, duomo', note: 'domī at home; domum (to) home; domō from home.' },
    { id: 'exercitus', head: 'exercitus', la: 'exercitus, exercitūs', g: 'm', pos: 'noun, 4th decl.', en: 'army', stress: 'ex-ER-ci-tus', deriv: 'exercise', note: 'From exerceō: originally “training”.' },
    { id: 'senatus', head: 'senātus', la: 'senātus, senātūs', g: 'm', pos: 'noun, 4th decl.', en: 'senate', stress: 'se-NĀ-tus', deriv: 'senate, senator', note: 'Related to senex: “council of elders”.' },
    { id: 'fructus', head: 'frūctus', la: 'frūctus, frūctūs', g: 'm', pos: 'noun, 4th decl.', en: 'fruit; profit, enjoyment', stress: 'FRŪC-tus', deriv: 'fruit, fructose; Frucht', note: 'German Frucht is an early loan from Latin.' },
    { id: 'metus', head: 'metus', la: 'metus, metūs', g: 'm', pos: 'noun, 4th decl.', en: 'fear, dread', stress: 'ME-tus' },
    { id: 'casus', head: 'cāsus', la: 'cāsus, cāsūs', g: 'm', pos: 'noun, 4th decl.', en: 'fall; chance, accident; misfortune; (grammar) case', stress: 'CĀ-sus', deriv: 'case, casual; Kasus', note: 'From cadō, cāsum. The grammatical “case” is a “falling” away from the nominative, translating Greek ptōsis.' },
    { id: 'cultus', head: 'cultus', la: 'cultus, cultūs', g: 'm', pos: 'noun, 4th decl.', en: 'cultivation; way of life; worship', stress: 'CUL-tus', deriv: 'cult, culture; Kult', note: 'From colō, cultum. Caesar BG 1.1.' },
    { id: 'cornu', head: 'cornū', la: 'cornū, cornūs', g: 'n', pos: 'noun, 4th decl.', en: 'horn; wing (of an army)', stress: 'COR-nū', deriv: 'cornet, unicorn; related to Horn', note: 'Pl. cornua.' },
    { id: 'cibus', head: 'cibus', la: 'cibus, cibī', g: 'm', pos: 'noun, 2nd decl.', en: 'food', stress: 'CI-bus' },
    { id: 'dexter', head: 'dexter', la: 'dexter, dextra, dextrum', pos: 'adjective', en: 'right (hand side); skilful', stress: 'DEX-ter · DEX-tra', deriv: 'dexterity', note: 'dextra (manus): the right hand.' },
    { id: 'sinister', head: 'sinister', la: 'sinister, sinistra, sinistrum', pos: 'adjective', en: 'left; unlucky', stress: 'si-NIS-ter', deriv: 'sinister', note: 'In Roman augury the left side could be lucky; the bad sense comes later, partly from Greek practice.' },
    { id: 'careo', head: 'careō', la: 'careō, carēre, caruī, caritūrum (+ abl.)', pos: 'verb, 2nd conj.', en: 'lack, be without, be free from', stress: 'CA-re-ō · ca-RĒ-re' },
    { id: 'prohibeo', head: 'prohibeō', la: 'prohibeō, prohibēre, prohibuī, prohibitum', pos: 'verb, 2nd conj.', en: 'keep (away), prevent, prohibit', stress: 'pro-HI-be-ō · pro-hi-BĒ-re', deriv: 'prohibit', note: 'prō + habeō.' },
    { id: 'trado', head: 'trādō', la: 'trādō, trādere, trādidī, trāditum', pos: 'verb, 3rd conj.', en: 'hand over, surrender; hand down', stress: 'TRĀ-dō · TRĀ-de-re', deriv: 'tradition, traitor', note: 'trāns + dō. sē trādere: to surrender.' },
    { id: 'eripio', head: 'ēripiō', la: 'ēripiō, ēripere, ēripuī, ēreptum', pos: 'verb, 3rd conj. (-iō)', en: 'snatch away, rescue', stress: 'ē-RI-pi-ō · ē-RI-pe-re', note: 'ē + rapiō (Lecture XX).' }
  ],

  grammarCards: [
    { id: 'g21-endings', front: 'Fourth declension endings (m./f.)', back: '-us, -ūs, -uī, -um, -ū; -ūs, -uum, -ibus, -ūs, -ibus' },
    { id: 'g21-neut', front: 'Fourth declension neuter (cornū)', back: 'cornū, cornūs, cornū, cornū, cornū; cornua, cornuum, cornibus, cornua, cornibus' },
    { id: 'g21-gender', front: 'Gender of 4th-declension nouns', back: 'Mostly m.; f.: manus, domus, Īdūs; n. in -ū: cornū, genū' },
    { id: 'g21-us', front: 'servus, corpus, manus: how to tell them apart?', back: 'By the genitive: servī (2nd), corporis (3rd), manūs (4th)' },
    { id: 'g21-domus', front: 'domī, domum, domō', back: 'at home, (to) home, from home: no preposition' },
    { id: 'g21-domusforms', front: 'domus: ablative singular', back: 'domō (usual) or domū' },
    { id: 'g21-from', front: 'ab urbe, ex urbe, dē monte', back: 'from (near) the city, out of the city, down from the mountain' },
    { id: 'g21-towns', front: 'He came from Rome.', back: 'Rōmā vēnit: towns without preposition.' },
    { id: 'g21-sep', front: 'Ablative of separation', back: 'With verbs of freeing, lacking, keeping away: metū līberāre, cibō carēre' },
    { id: 'g21-careo', front: 'careō + ?', back: 'ablative: cibō careō, I lack food' },
    { id: 'g21-caesar', front: 'ā cultū atque hūmānitāte prōvinciae longissimē absunt', back: 'they are furthest away from the way of life and civilisation of the Province (BG 1.1)' },
    { id: 'g21-prohibent', front: 'suīs fīnibus eōs prohibent', back: 'they keep them from their own territory (BG 1.1)' },
    { id: 'g21-casus', front: 'tot volvere cāsūs (Aeneid 1.9)', back: 'to pass through so many misfortunes: acc. pl. of cāsus' },
    { id: 'g21-spqr', front: 'SPQR', back: 'senātus populusque Rōmānus: the senate and people of Rome' },
    { id: 'g21-ides', front: 'Īdūs Mārtiae', back: '15 March; Caesar killed in 44 BC. Īdūs: f. pl., 4th decl.' },
    { id: 'g21-eidmar', front: 'EID MAR on Brutus’s coin', back: 'Īdibus Mārtiīs: “on the Ides of March”' },
    { id: 'g21-dom', front: 'German Dom', back: 'From Latin domus (Deī/ecclesiae), via Italian duomo' },
    { id: 'g21-mutmutter', front: 'manus vs manūs', back: 'nom. sg. (short u) vs gen. sg. / nom. acc. pl. (long ū)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Genitive singular of <span class="la">manus</span>:', options: ['manūs', 'manī', 'manuis', 'manum'], answer: 0, explain: '4th declension: -ūs.' },
    { id: 'e2', type: 'mc', prompt: 'Gender of <span class="la">manus</span>:', options: ['feminine', 'masculine', 'neuter', 'common'], answer: 0, explain: 'One of the few feminines.' },
    { id: 'e3', type: 'mc', prompt: 'Ablative singular of <span class="la">exercitus</span>:', options: ['exercitū', 'exercitō', 'exercite', 'exercitūs'], answer: 0, explain: '-ū.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">domī</span>:', options: ['at home', 'from home', 'homewards', 'of the house'], answer: 0, explain: 'An old locative.' },
    { id: 'e5', type: 'mc', prompt: 'In <span class="la">cibō carēmus</span>, <span class="la">cibō</span> is:', options: ['ablative of separation', 'dative', 'ablative of means', 'ablative of time'], answer: 0, explain: 'careō takes the ablative.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">ex urbe</span>:', options: ['out of the city', 'into the city', 'near the city', 'down from the city'], answer: 0, explain: 'Place from which, from inside.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Exercit___ Caesaris vēnit.</span>', hint: 'the army (nom.)', answers: ['us'], full: 'Exercitus Caesaris vēnit.', explain: 'Nominative singular.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Cōnsul in senāt___ dīcit.</span>', hint: 'senate (abl.)', answers: ['ū', 'u'], full: 'Cōnsul in senātū dīcit.', explain: 'Ablative singular -ū.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Puerī man___ lavant.</span>', hint: 'hands (acc. pl.)', answers: ['ūs', 'us'], full: 'Puerī manūs lavant.', explain: 'Accusative plural -ūs.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Ā met___ līberātī sumus.</span>', hint: 'fear (abl.)', answers: ['ū', 'u'], full: 'Ā metū līberātī sumus.', explain: 'Ablative of separation (here with ā).' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Lūcius ___ Graeciā vēnit.</span>', hint: 'from (out of)', answers: ['ex', 'ē', 'e', 'ā', 'a', 'ab'], full: 'Lūcius ē Graeciā vēnit.', explain: 'Place from which: ē/ex (or ā/ab).' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Mīlitēs cib___ carēbant.</span>', hint: '(of) food', answers: ['ō', 'o'], full: 'Mīlitēs cibō carēbant.', explain: 'careō + ablative.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">manus</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['manus', 'manūs'] },
      { label: 'Gen.', answers: ['manūs', 'manuum'] },
      { label: 'Dat.', answers: ['manuī', 'manibus'] },
      { label: 'Acc.', answers: ['manum', 'manūs'] },
      { label: 'Abl.', answers: ['manū', 'manibus'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">cornū</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['cornū', 'cornua'] },
      { label: 'Gen.', answers: ['cornūs', 'cornuum'] },
      { label: 'Dat.', answers: ['cornū|cornuī', 'cornibus'] },
      { label: 'Acc.', answers: ['cornū', 'cornua'] },
      { label: 'Abl.', answers: ['cornū', 'cornibus'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each phrase to its meaning.', pairs: [
      ['domī', 'at home'], ['domum', '(to) home'], ['domō', 'from home'], ['ex urbe', 'out of the city'], ['dē monte', 'down from the mountain']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Exercitus ex urbe vēnit.', tokens: ['The army', 'came', 'out of', 'the city'], explain: 'ex urbe: place from which.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Senātus cōnsulem laudāvit.', model: 'The senate praised the consul.', accepted: ['senate praised consul', 'senate has praised consul'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Puerī metū līberātī sunt.', model: 'The boys were freed from fear.', accepted: ['boys were freed from fear', 'boys have been freed from fear', 'boys were set free from fear', 'boys were released from fear', 'boys were liberated from fear', 'boys have been set free from fear', 'boys have been released from fear'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Domī manēbimus.', model: 'We shall stay at home.', accepted: ['we shall stay at home', 'we will stay at home', 'we shall remain at home', 'we will remain at home', 'we shall stay home', 'we will stay home'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'with my hand', model: 'manū meā', accepted: ['manū meā'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'down from the mountain', model: 'dē monte', accepted: ['dē monte'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'the fruits of the field (nom.)', model: 'frūctūs agrī', accepted: ['frūctūs agrī'] },
    { id: 'e23', type: 'mc', prompt: 'In Caesar’s <span class="la">ā cultū atque hūmānitāte prōvinciae longissimē absunt</span>, <span class="la">cultū</span> is:', options: ['ablative singular, 4th declension', 'dative, 2nd declension', 'ablative, 2nd declension', 'nominative plural'], answer: 0, explain: 'cultus, cultūs: abl. cultū.' },
    { id: 'e24', type: 'mc', prompt: 'The Ides of March fell on:', options: ['15 March', '13 March', '1 March', '5 March'], answer: 0, explain: 'In March, May, July and October the Ides fell on the 15th.' },
    { id: 'e25', type: 'mc', prompt: 'German <em>Dom</em> comes from:', options: ['domus', 'dominus', 'dōnum', 'domō'], answer: 0, explain: 'domus (Deī), via Italian duomo.' }
  ],

  reading: {
    title: 'Veterānus',
    note: 'Original passage: an old soldier of Caesar’s visits the farm. Tap any word.',
    text: 'Hieme Sextus, amīcus Mārcī veterānus, ex urbe ad vīllam vēnit. Is ōlim in exercitū Caesaris in Galliā pugnāverat, et manum sinistram in bellō āmīserat. Puerī eum cum metū spectābant, sed Sextus rīsit: “Nōlīte timēre! Haec manus mihi ad Alesiam ērepta est, sed dextra manus mihi manet.” Quīntus: “Nārrā nōbīs dē bellō!” Et Sextus: “Ad Alesiam Gallī in monte oppidum habēbant. Exercitus noster mūrōs et fossās circum montem fēcit, et Gallōs ā cibō prohibuit. Mox Gallī in oppidō cibō carēbant. Tum magnus exercitus Gallōrum ex tōtā Galliā ad eōs vēnit. Diū pugnāvimus, et in eō proeliō manum meam āmīsī. Tandem Gallī victī sunt, et Vercingetorīx, dux eōrum, ex oppidō vēnit et sē Caesarī trādidit.” “Et quid tum fēcistī?” rogāvit Gāius. “Domum vēnī,” respondit Sextus, “et agrum ā Caesare accēpī. Nunc bellō careō, et frūctūs agrī meī mihi satis sunt. Metū carēre, puerī, magna est fēlīcitās.” Tum Mārcus: “Sextus nōbīs semper cārus erit. Domus nostra eī semper aperta est.” Et Sextus domī Mārcī trēs diēs mānsit.',
    translation: 'In winter Sextus, a veteran and friend of Marcus, came from the city to the farm. He had once fought in Caesar’s army in Gaul and had lost his left hand in the war. The boys looked at him with fear, but Sextus laughed: “Don’t be afraid! This hand was snatched from me at Alesia, but my right hand remains to me.” Quintus: “Tell us about the war!” And Sextus: “At Alesia the Gauls had a town on a hill. Our army built walls and ditches around the hill and kept the Gauls from food. Soon the Gauls in the town were without food. Then a great army of Gauls came to them from the whole of Gaul. We fought for a long time, and in that battle I lost my hand. At last the Gauls were defeated, and Vercingetorix, their leader, came out of the town and surrendered himself to Caesar.” “And what did you do then?” asked Gaius. “I came home,” answered Sextus, “and received a piece of land from Caesar. Now I am free from war, and the fruits of my land are enough for me. To be free from fear, boys, is a great happiness.” Then Marcus: “Sextus will always be dear to us. Our house is always open to him.” And Sextus stayed for three days at Marcus’s house.',
    notes: [
      { ref: 'Sextus, amīcus Mārcī veterānus, ex urbe ad vīllam vēnit', html: '<span class="la">veterānus</span>: a soldier who had served his time. <span class="la">ex urbe</span>: place from which; “the City” is Rome.' },
      { ref: 'in exercitū Caesaris', html: '<span class="la">exercitū</span>: ablative singular, 4th declension.' },
      { ref: 'manum sinistram in bellō āmīserat', html: '<span class="la">manum</span>: feminine, hence <span class="la">sinistram</span>.' },
      { ref: 'Puerī eum cum metū spectābant', html: '<span class="la">cum metū</span>: ablative of manner (Lecture XV), fourth declension.' },
      { ref: 'Haec manus mihi ad Alesiam ērepta est', html: '<span class="la">haec manus</span>: feminine demonstrative with a 4th-declension noun. <span class="la">mihi</span>: dative of separation, “from me”, usual with verbs of taking away. <span class="la">ad Alesiam</span>: “at Alesia, near Alesia”.' },
      { ref: 'dextra manus mihi manet', html: '<span class="la">mihi</span>: “to me, for me”.' },
      { ref: 'Ad Alesiam Gallī in monte oppidum habēbant', html: 'Alesia (probably Alise-Sainte-Reine in Burgundy, though this was long disputed) was besieged by Caesar in 52 BC. His own account is in <em>De bello Gallico</em> 7.68–89.' },
      { ref: 'Exercitus noster mūrōs et fossās circum montem fēcit', html: 'Caesar built two lines of fortification, one facing the town and one facing outwards against a relieving army. <span class="la">circum</span> + accusative: “around”.' },
      { ref: 'Gallōs ā cibō prohibuit', html: 'Separation with <span class="la">prohibeō</span>; here with <span class="la">ā</span>, which is also possible with things.' },
      { ref: 'Gallī in oppidō cibō carēbant', html: '<span class="la">careō</span> + ablative.' },
      { ref: 'ex tōtā Galliā ad eōs vēnit', html: 'Place from which with <span class="la">ex</span>.' },
      { ref: 'Gallī victī sunt', html: 'Perfect passive of <span class="la">vincō</span> (Lecture XX).' },
      { ref: 'Vercingetorīx, dux eōrum, ex oppidō vēnit et sē Caesarī trādidit', html: 'Caesar says only that Vercingetorix was handed over (<em>BG</em> 7.89); later writers such as Plutarch describe him riding out in full armour. <span class="la">sē trādere</span>: surrender oneself.' },
      { ref: 'Domum vēnī', html: '<span class="la">domum</span>: “(to) home”, no preposition.' },
      { ref: 'agrum ā Caesare accēpī', html: 'Caesar, like other commanders of the late Republic, settled his veterans on land, a political as well as a military matter.' },
      { ref: 'Nunc bellō careō', html: '<span class="la">careō</span> means “be without”, here “be free from”.' },
      { ref: 'Metū carēre … magna est fēlīcitās', html: 'An infinitive as subject: “to be free from fear is a great happiness”.' },
      { ref: 'domī Mārcī trēs diēs mānsit', html: '<span class="la">domī</span>: “at the house of” (locative). <span class="la">trēs diēs</span>: accusative of duration (Lecture XVI).' }
    ],
    glosses: {
      'hieme': 'abl. of hiems: in winter', 'sextus': 'Sextus (nom.)', 'amīcus': 'friend (nom.)', 'mārcī': 'gen. of Mārcus: of Marcus', 'mārcus': 'Marcus (nom.)', 'veterānus': 'veteran (nom.)', 'ex': 'out of, from (+ abl.)', 'urbe': 'abl. of urbs: city', 'ad': 'to; at, near (+ acc.)', 'vīllam': 'acc. of vīlla: farm', 'vēnit': 'perf. 3rd sg. of veniō: came',
      'is': 'he', 'ōlim': 'once, formerly', 'in': 'in (+ abl.)', 'exercitū': 'abl. of exercitus: army', 'caesaris': 'gen. of Caesar', 'galliā': 'abl. of Gallia: Gaul', 'pugnāverat': 'plupf. 3rd sg. of pugnō: had fought', 'et': 'and', 'manum': 'acc. of manus: hand', 'sinistram': 'acc. f. of sinister: left', 'bellō': 'abl. of bellum: war', 'āmīserat': 'plupf. 3rd sg. of āmittō: had lost',
      'puerī': 'nom. pl. of puer: boys', 'eum': 'acc. of is: him', 'cum': 'with (+ abl.)', 'metū': 'abl. of metus: fear', 'spectābant': 'impf. 3rd pl. of spectō: looked at', 'sed': 'but', 'rīsit': 'perf. 3rd sg. of rīdeō: laughed', 'nōlīte': 'don’t (pl., + inf.)', 'timēre': 'to be afraid',
      'haec': 'this (f.)', 'manus': 'hand (nom.)', 'mihi': 'dat. of ego: from me, to me', 'alesiam': 'acc. of Alesia', 'ērepta': 'nom. f. of ēreptus: snatched away', 'est': 'is; (+ participle) was', 'dextra': 'nom. f. of dexter: right', 'manet': '3rd sg. of maneō: remains',
      'quīntus': 'Quintus (nom.)', 'nārrā': 'imperative of nārrō: tell!', 'nōbīs': 'dat. of nōs: to us', 'dē': 'about (+ abl.)',
      'gallī': 'nom. pl. of Gallus: the Gauls', 'monte': 'abl. of mōns: hill, mountain', 'oppidum': 'town (acc.)', 'habēbant': 'impf. 3rd pl. of habeō: had', 'exercitus': 'army (nom.)', 'noster': 'our', 'mūrōs': 'acc. pl. of mūrus: walls', 'fossās': 'acc. pl. of fossa: ditches', 'circum': 'around (+ acc.)', 'montem': 'acc. of mōns: hill', 'fēcit': 'perf. 3rd sg. of faciō: made, built', 'gallōs': 'acc. pl. of Gallus: Gauls', 'ā': 'from (+ abl.)', 'cibō': 'abl. of cibus: food', 'prohibuit': 'perf. 3rd sg. of prohibeō: kept away',
      'mox': 'soon', 'oppidō': 'abl. of oppidum: town', 'carēbant': 'impf. 3rd pl. of careō: were without', 'tum': 'then', 'magnus': 'great', 'gallōrum': 'gen. pl. of Gallus: of Gauls', 'tōtā': 'abl. f. of tōtus: whole', 'eōs': 'acc. pl. of is: them',
      'diū': 'for a long time', 'pugnāvimus': 'perf. 1st pl. of pugnō: we fought', 'eō': 'abl. n. of is: that', 'proeliō': 'abl. of proelium: battle', 'meam': 'acc. f. of meus: my', 'āmīsī': 'perf. 1st sg. of āmittō: I lost', 'tandem': 'at last', 'victī': 'nom. pl. m. of victus: defeated', 'sunt': 'are; (+ participle) were',
      'vercingetorīx': 'Vercingetorix (nom.)', 'dux': 'leader (nom.)', 'eōrum': 'their', 'sē': 'himself', 'caesarī': 'dat. of Caesar: to Caesar', 'trādidit': 'perf. 3rd sg. of trādō: handed over',
      'quid': 'what?', 'fēcistī': 'perf. 2nd sg. of faciō: you did', 'rogāvit': 'perf. 3rd sg. of rogō: asked', 'gāius': 'Gaius (nom.)', 'domum': '(to) home', 'vēnī': 'perf. 1st sg. of veniō: I came', 'respondit': 'perf. 3rd sg. of respondeō: answered', 'agrum': 'acc. of ager: land, field', 'caesare': 'abl. of Caesar', 'accēpī': 'perf. 1st sg. of accipiō: I received',
      'nunc': 'now', 'careō': 'I am without, I am free from', 'frūctūs': 'nom. pl. of frūctus: fruits', 'agrī': 'gen. of ager: of the land', 'meī': 'gen. m. of meus: my', 'satis': 'enough',
      'carēre': 'to be free from (+ abl.)', 'magna': 'great (nom. f.)', 'fēlīcitās': 'happiness (nom.)',
      'semper': 'always', 'cārus': 'dear', 'erit': 'will be', 'domus': 'house (nom.)', 'nostra': 'our', 'eī': 'dat. of is: to him', 'aperta': 'nom. f. of apertus: open',
      'domī': 'at the house (of), at home', 'trēs': 'three', 'diēs': 'acc. pl. of diēs: days', 'mānsit': 'perf. 3rd sg. of maneō: stayed'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Where had Sextus lost his hand?', options: ['At Alesia, in Caesar’s war in Gaul', 'At sea', 'In Rome', 'On his farm'], answer: 0, explain: 'Haec manus mihi ad Alesiam ērepta est.' },
      { id: 'r2', type: 'mc', prompt: 'How did Caesar’s army make the Gauls in Alesia suffer?', options: ['It kept them from food', 'It flooded the town', 'It burned the hill', 'It bribed their leader'], answer: 0, explain: 'Gallōs ā cibō prohibuit.' },
      { id: 'r3', type: 'mc', prompt: 'What did Sextus receive after the war?', options: ['A piece of land from Caesar', 'A ship', 'A house in Rome', 'Money from the senate'], answer: 0, explain: 'agrum ā Caesare accēpī.' },
      { id: 'r4', type: 'mc', prompt: 'What does Sextus call a great happiness?', options: ['To be free from fear', 'To win a battle', 'To be rich', 'To live in Rome'], answer: 0, explain: 'Metū carēre … magna est fēlīcitās.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">senātūs</span> (long ū) can be:', options: ['gen. sg. or nom./acc. pl.', 'only nom. sg.', 'dat. sg.', 'abl. pl.'], answer: 0, explain: '-ūs serves three times.' },
      { id: 't2', type: 'mc', prompt: 'Genitive plural of <span class="la">frūctus</span>:', options: ['frūctuum', 'frūctōrum', 'frūctum', 'frūctium'], answer: 0, explain: '-uum.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">domō</span> (without preposition):', options: ['from home', 'at home', 'to home', 'of the house'], answer: 0, explain: 'Place from which.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Hostēs ā fīnibus nostrīs prohib___.</span>', hint: 'we keep away', answers: ['ēmus', 'emus'], full: 'Hostēs ā fīnibus nostrīs prohibēmus.', explain: '2nd conj., 1st pl.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Exercitus ___ monte dēscendit.</span>', hint: 'down from', answers: ['dē', 'de'], full: 'Exercitus dē monte dēscendit.', explain: 'dē: down from.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Mīlitēs cibō carēbant.', model: 'The soldiers were without food.', accepted: ['soldiers were without food', 'soldiers lacked food', 'soldiers were lacking food', 'soldiers had no food', 'soldiers were short of food'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'at home', model: 'domī', accepted: ['domī'] },
      { id: 't8', type: 'mc', prompt: 'Which noun is NOT fourth declension?', options: ['servus', 'manus', 'exercitus', 'cāsus'], answer: 0, explain: 'servus, servī: second.' },
      { id: 't9', type: 'mc', prompt: 'SPQR stands for:', options: ['senātus populusque Rōmānus', 'sōlus prīnceps quī regit', 'senātus prō quiēte Rōmae', 'sēstertiī pecūniae quīnque Rōmānae'], answer: 0, explain: 'The senate and people of Rome.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">tot volvere cāsūs</span> (Aeneid 1.9): <span class="la">cāsūs</span> is:', options: ['acc. pl. of cāsus', 'gen. sg. of cāsus', 'nom. sg.', 'abl. pl.'], answer: 0, explain: 'Object of volvere.' },
      { id: 't11', type: 'mc', prompt: 'German <em>einer Sache entbehren</em> is close in meaning to:', options: ['careō + abl.', 'habeō + acc.', 'dō + dat.', 'possum + inf.'], answer: 0, explain: 'Both mean “be without something”.' }
    ]
  },

  reference: [
    { title: 'Fourth declension', headers: ['', 'manus (f.)', 'cornū (n.)'], rows: [
      ['Nom. sg.', 'manus', 'cornū'], ['Gen.', 'manūs', 'cornūs'], ['Dat.', 'manuī', 'cornū'], ['Acc.', 'manum', 'cornū'], ['Abl.', 'manū', 'cornū'],
      ['Nom. pl.', 'manūs', 'cornua'], ['Gen.', 'manuum', 'cornuum'], ['Dat./Abl.', 'manibus', 'cornibus'], ['Acc.', 'manūs', 'cornua']
    ] },
    { title: 'domus', headers: ['', 'Singular', 'Plural'], rows: [
      ['Nom.', 'domus', 'domūs'], ['Gen.', 'domūs', 'domuum, domōrum'], ['Dat.', 'domuī, domō', 'domibus'], ['Acc.', 'domum', 'domōs, domūs'], ['Abl.', 'domō, domū', 'domibus'], ['Locative', 'domī (at home)', '']
    ] },
    { title: 'Ablatives so far', headers: ['Use', 'Example', 'Lecture'], rows: [
      ['Means', 'gladiō pugnat', 'XV'], ['Accompaniment', 'cum amīcō', 'XV'], ['Manner', 'magnā cum cūrā', 'XV'], ['Time', 'prīmā hōrā', 'XVI'], ['Agent', 'ā magistrō laudātur', 'XIX'], ['Place from which', 'ex urbe, ab ōrīs', 'XXI'], ['Separation', 'cibō carēre, metū līberāre', 'XXI']
    ] }
  ]
});
