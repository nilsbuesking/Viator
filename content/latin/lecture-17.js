/*
 * Latin — Lecture XVII: third-declension adjectives.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotations (Pliny, Letters 6.16.11; Horace, Odes 1.11.6–7; Virgil, Aeneid 1.4, 1.10–11;
 * Caesar, De bello Gallico 1.1) checked against the texts supplied by Nils.
 * Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-17',
  number: 17,
  title: 'Fortēs fortūna iuvat',
  subtitle: 'Adjectives of the third declension: ācer, fortis, potēns; omnis; adjectives used as nouns',
  minutes: 60,

  intro: `
    <p>Until now every adjective in the course has followed <span class="la">bonus, bona, bonum</span>: first declension for the feminine, second for masculine and neuter. Latin has a second large class of adjectives that are declined in the <strong>third declension</strong>, in all three genders: <span class="la">fortis</span> “brave”, <span class="la">brevis</span> “short”, <span class="la">omnis</span> “all, every”, <span class="la">potēns</span> “powerful”, <span class="la">fēlīx</span> “lucky”.</p>
    <p>There is very little new to learn. These adjectives use the i-stem endings of Lecture XV, with one extra feature: the ablative singular ends in <span class="la">-ī</span> in every gender. The real challenge is in combining them with nouns of other declensions, because an adjective agrees with its noun in gender, number and case, but not necessarily in its ending: <span class="la">fēmina fortis, virō fortī, bellum breve</span>.</p>
    <p>By the end you should be able to decline adjectives of one, two and three terminations, recognise them in the dictionary, and use <span class="la">omnēs</span> “everyone” and <span class="la">omnia</span> “everything”.</p>
  `,

  background: [
    {
      title: 'Fortēs fortūna iuvat',
      html: `
        <p>When the elder Pliny’s ship came close to the erupting mountain, ash and pumice falling on the deck and the shore blocked by debris, the helmsman urged him to turn back. Pliny hesitated, then answered with a proverb: <span class="la">Fortēs fortūna iuvat</span>, “Fortune helps the brave”, and ordered him to make for the house of his friend Pomponianus at Stabiae. It was there that he died the next day.</p>
        <p>The saying was old by then. A version appears in the comedies of Terence in the 2nd century BC (<em>Phormio</em> 203, <span class="la">fortēs fortūna adiuvat</span>), and Roman writers quote it in several forms. Pliny’s nephew records it without comment; whether he meant it as heroic or as tragic irony is left to the reader.</p>
        <p>Grammatically, <span class="la">fortēs</span> is an adjective used as a noun: “brave (people)”. Latin does this freely with plural adjectives: <span class="la">bonī</span> “good men”, <span class="la">omnēs</span> “everyone”, <span class="la">omnia</span> “everything”. German does the same (<em>die Tapferen</em>, <em>alles</em>), only with an article.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Como_-_Dome_-_Facade_-_Plinius_the_Elder.jpg/960px-Como_-_Dome_-_Facade_-_Plinius_the_Elder.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Como_-_Dome_-_Facade_-_Plinius_the_Elder.jpg/500px-Como_-_Dome_-_Facade_-_Plinius_the_Elder.jpg|https://upload.wikimedia.org/wikipedia/commons/b/b3/Como_-_Dome_-_Facade_-_Plinius_the_Elder.jpg" alt="Renaissance marble statue of a seated scholar in a niche on a cathedral façade"><figcaption>Pliny the Elder on the façade of Como Cathedral, a statue of the late 15th century (the Plinys came from Comum). Its partner across the portal is his nephew. No ancient portrait of either survives; the faces are invented. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Como_-_Dome_-_Facade_-_Plinius_the_Elder.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Agreement without matching endings',
      html: `
        <p>In German the ending of an adjective depends on what stands in front of it: <em>der gute Mann</em>, <em>ein guter Mann</em>, <em>guter Wein</em>. Latin has no articles and no such alternation, but its adjectives belong to two declension classes that need not match the noun’s: <span class="la">poēta bonus</span> (first-declension noun, second-declension adjective), <span class="la">mīles fortis</span> (both third), <span class="la">fēminae fortī</span> (first and third). The rule is always agreement in gender, number and case, never “the same ending”.</p>
        <p>In practice: learn the noun’s gender, find the right case, then choose the adjective’s ending from the adjective’s own declension.</p>
      `
    },
    {
      title: 'grand-mère',
      html: `
        <p>Adjectives like <span class="la">fortis</span> and <span class="la">grandis</span> have one form for masculine and feminine. Old French inherited them that way: <em>grant</em> (from <span class="la">grandis</span>) served for both genders, as in the place name <em>Grand-Rue</em> and in <em>grand-mère</em>. When French later gave such adjectives a feminine <em>-e</em> on the model of <em>bon, bonne</em>, a few compounds kept the old form. Grammarians, thinking an <em>e</em> had been dropped, spelt them <em>grand’mère</em> with an apostrophe, a spelling now replaced by the hyphen. It is a small fossil of the Latin third declension in a modern language.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/British_Museum_Fortuna_statue.jpg/960px-British_Museum_Fortuna_statue.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/British_Museum_Fortuna_statue.jpg/500px-British_Museum_Fortuna_statue.jpg|https://upload.wikimedia.org/wikipedia/commons/3/32/British_Museum_Fortuna_statue.jpg" alt="Roman marble statue of a draped goddess"><figcaption>A Roman statue of Fortuna in the British Museum. The goddess of luck is often shown with a cornucopia, for plenty, and a ship’s rudder, for steering human affairs. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:British_Museum_Fortuna_statue.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">“Fortēs” inquit “fortūna iuvat: Pompōniānum pete.”</p>
    <p>“‘Fortune,’ he said, ‘helps the brave: make for Pomponianus.’” Pliny, <em>Letters</em> 6.16.11, checked against the text Nils supplied; length marks added. <span class="la">fortēs</span>, accusative plural, used as a noun.</p>
    <p class="la big">sapiās, vīna liquēs, et spatiō brevī<br>spem longam resecēs.</p>
    <p>“Be wise, strain the wine, and since our span is short, cut back long hope.” Horace, <em>Odes</em> 1.11.6–7, the lines before <span class="la">carpe diem</span>. <span class="la">spatiō brevī</span>: the ablative of <span class="la">brevis</span> ends in <span class="la">-ī</span>, a sign of the third-declension adjective.</p>
    <p>The opening of the <em>Aeneid</em> has three more: Aeneas is driven on <span class="la">saevae memorem Iūnōnis ob īram</span>, “on account of the unforgetting anger of cruel Juno” (1.4); he is <span class="la">īnsignem pietāte virum</span>, “a man outstanding in devotion” (1.10); and the poet asks <span class="la">Tantaene animīs caelestibus īrae?</span>, “Is there such anger in heavenly minds?” (1.11). <span class="la">memorem</span>, <span class="la">īnsignem</span>, <span class="la">caelestibus</span> are all third-declension adjectives, agreeing with nouns of the first, third and second declensions. And Caesar’s first sentence, <span class="la">Gallia est omnis dīvīsa</span>, has the commonest of them all.</p>
  `,

  pronunciation: `
    <h3>ācer, ācris, ācre</h3>
    <p>The masculine has the <span class="la">e</span> that German <em>Acker</em> also has, between <span class="la">c</span> and <span class="la">r</span>; the other forms lose it: <span class="la">Ā-cris</span>. <span class="la">celer, celeris, celere</span> keeps it throughout.</p>
    <h3>fēlīx, potēns</h3>
    <p>Long vowels in the nominative: <span class="la">FĒ-līx</span>, <span class="la">PO-tēns</span>; in the other cases the stress moves: <span class="la">fē-LĪ-cis</span>, <span class="la">po-TEN-tis</span> (vowel before <span class="la">ns</span> long, before <span class="la">nt</span> short by most accounts).</p>
    <h3>omnis, omnia</h3>
    <p><span class="la">OM-nis</span>, <span class="la">OM-ni-a</span>, <span class="la">OM-ni-um</span>: the <span class="la">i</span> is a full syllable.</p>
  `,

  grammar: [
    {
      title: '1. Three kinds of third-declension adjective',
      html: `
        <p>The dictionary gives the nominative singular forms, and their number tells you the type:</p>
        <ul>
          <li><strong>Three terminations</strong> (m., f., n. different): <span class="la">ācer, ācris, ācre</span> “sharp, keen”; <span class="la">celer, celeris, celere</span> “swift”.</li>
          <li><strong>Two terminations</strong> (m./f. the same, n. different), the largest group: <span class="la">fortis, forte</span> “brave, strong”; <span class="la">omnis, omne</span> “all, every”.</li>
          <li><strong>One termination</strong> (one nominative for all genders), so the dictionary adds the genitive to show the stem: <span class="la">potēns, gen. potentis</span> “powerful”; <span class="la">fēlīx, gen. fēlīcis</span> “lucky, happy”; <span class="la">ingēns, gen. ingentis</span> “huge”.</li>
        </ul>
        <p>Apart from the nominative (and, for the neuter, the accusative), all three types decline alike.</p>
      `
    },
    {
      title: '2. The declension',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>m./f.</th><th>n.</th><th>m./f.</th><th>n.</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">fortis</td><td class="la">forte</td><td class="la">potēns</td><td class="la">potēns</td></tr>
            <tr><th>Gen.</th><td class="la">fortis</td><td class="la">fortis</td><td class="la">potentis</td><td class="la">potentis</td></tr>
            <tr><th>Dat.</th><td class="la">fortī</td><td class="la">fortī</td><td class="la">potentī</td><td class="la">potentī</td></tr>
            <tr><th>Acc.</th><td class="la">fortem</td><td class="la">forte</td><td class="la">potentem</td><td class="la">potēns</td></tr>
            <tr><th>Abl.</th><td class="la"><strong>fortī</strong></td><td class="la"><strong>fortī</strong></td><td class="la"><strong>potentī</strong></td><td class="la"><strong>potentī</strong></td></tr>
            <tr><th>Nom. pl.</th><td class="la">fortēs</td><td class="la"><strong>fortia</strong></td><td class="la">potentēs</td><td class="la"><strong>potentia</strong></td></tr>
            <tr><th>Gen.</th><td class="la"><strong>fortium</strong></td><td class="la"><strong>fortium</strong></td><td class="la"><strong>potentium</strong></td><td class="la"><strong>potentium</strong></td></tr>
            <tr><th>Dat./Abl.</th><td class="la">fortibus</td><td class="la">fortibus</td><td class="la">potentibus</td><td class="la">potentibus</td></tr>
            <tr><th>Acc.</th><td class="la">fortēs (-īs)</td><td class="la"><strong>fortia</strong></td><td class="la">potentēs (-īs)</td><td class="la"><strong>potentia</strong></td></tr>
          </tbody>
        </table></div>
        <p>These are the endings of the neuter i-stems (<span class="la">mare, animal</span>), extended to all genders. The three marks to remember: ablative singular <span class="la">-ī</span>, genitive plural <span class="la">-ium</span>, neuter plural <span class="la">-ia</span>.</p>
        <p><span class="la">ācer</span> differs only in the nominative singular: <span class="la">ācer</span> (m.), <span class="la">ācris</span> (f.), <span class="la">ācre</span> (n.); then <span class="la">ācris, ācrī, ācrem …</span> as <span class="la">fortis</span>.</p>
      `
    },
    {
      title: '3. A few consonant-stem adjectives',
      html: `
        <p>A small number of one-termination adjectives decline like consonant-stem nouns (<span class="la">rēx</span>): ablative <span class="la">-e</span>, genitive plural <span class="la">-um</span>, neuter plural <span class="la">-a</span>. The commonest is <span class="la">vetus, veteris</span> “old”: <span class="la">vetere, veterum, vetera</span>. Others are <span class="la">pauper</span> “poor”, <span class="la">dīves</span> “rich”, <span class="la">prīnceps</span> “first”. <span class="la">memor, memoris</span> “mindful” has ablative <span class="la">memorī</span> but genitive plural <span class="la">memorum</span>. The comparatives of all adjectives belong here too (Lecture XXVII). The dictionary or a good grammar tells you; the reading rarely depends on it.</p>
      `
    },
    {
      title: '4. Agreement across declensions',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>“a brave woman”</th><th>“a brave man”</th><th>“a brave deed”</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">fēmina fortis</td><td class="la">vir fortis</td><td class="la">factum forte</td></tr>
            <tr><th>Gen.</th><td class="la">fēminae fortis</td><td class="la">virī fortis</td><td class="la">factī fortis</td></tr>
            <tr><th>Dat.</th><td class="la">fēminae fortī</td><td class="la">virō fortī</td><td class="la">factō fortī</td></tr>
            <tr><th>Acc.</th><td class="la">fēminam fortem</td><td class="la">virum fortem</td><td class="la">factum forte</td></tr>
            <tr><th>Abl.</th><td class="la">fēminā fortī</td><td class="la">virō fortī</td><td class="la">factō fortī</td></tr>
            <tr><th>Nom. pl.</th><td class="la">fēminae fortēs</td><td class="la">virī fortēs</td><td class="la">facta fortia</td></tr>
          </tbody>
        </table></div>
        <p>The other way round, a second-declension adjective with a third-declension noun: <span class="la">rēx bonus, rēgis bonī, rēgī bonō …</span>; <span class="la">corpus magnum, corporis magnī</span>.</p>
      `
    },
    {
      title: '5. omnis, and adjectives as nouns',
      html: `
        <p><span class="la">omnis, omne</span> means “every” in the singular and “all” in the plural: <span class="la">omnis homō</span>, “every person”; <span class="la">omnēs hominēs</span>, “all people”. With a singular noun it can also mean “the whole”, as in Caesar’s <span class="la">Gallia omnis</span>, “Gaul as a whole”; but “the whole” is more often <span class="la">tōtus</span> (Lecture X).</p>
        <p>Plural adjectives are often used alone, as nouns. The masculine refers to people, the neuter to things:</p>
        <ul>
          <li><span class="la">omnēs</span>: all people, everyone. <span class="la">omnia</span>: all things, everything.</li>
          <li><span class="la">fortēs</span>: the brave. <span class="la">bonī</span>: good men, (in Cicero) the respectable classes.</li>
          <li><span class="la">multa</span>: many things (you have already met <span class="la">multa nārrāvit</span>).</li>
        </ul>
        <p>Translate the neuter plural with “things” or with a singular: <span class="la">omnia sunt facilia</span>, “everything is easy”.</p>
      `
    }
  ],

  vocab: [
    { id: 'omnis', head: 'omnis', la: 'omnis, omne', pos: 'adjective, 3rd decl.', en: 'every; pl. all; omnēs: everyone; omnia: everything', stress: 'OM-nis · OM-ne', deriv: 'omnibus, omnipotent', note: 'Omnibus: “for all”, dative plural, hence the bus.' },
    { id: 'fortis', head: 'fortis', la: 'fortis, forte', pos: 'adjective, 3rd decl.', en: 'brave; strong', stress: 'FOR-tis · FOR-te', deriv: 'fort, fortitude; Fort' },
    { id: 'acer', head: 'ācer', la: 'ācer, ācris, ācre', pos: 'adjective, 3rd decl.', en: 'sharp, keen; fierce, energetic', stress: 'Ā-cer · Ā-cris · Ā-cre', deriv: 'acrid, acrimony; eager (via French aigre)' },
    { id: 'celer', head: 'celer', la: 'celer, celeris, celere', pos: 'adjective, 3rd decl.', en: 'swift, quick', stress: 'CE-ler · CE-le-ris', deriv: 'accelerate, celerity', note: 'Keeps the e in all forms. Gen. pl. celerum.' },
    { id: 'brevis', head: 'brevis', la: 'brevis, breve', pos: 'adjective, 3rd decl.', en: 'short, brief', stress: 'BRE-vis · BRE-ve', deriv: 'brief, abbreviate; Brief', note: 'German Brief, “letter”, comes from Latin breve, “a short (document)”.' },
    { id: 'facilis', head: 'facilis', la: 'facilis, facile', pos: 'adjective, 3rd decl.', en: 'easy', stress: 'FA-ci-lis · FA-ci-le', deriv: 'facility', note: 'From faciō: “doable”.' },
    { id: 'difficilis', head: 'difficilis', la: 'difficilis, difficile', pos: 'adjective, 3rd decl.', en: 'difficult', stress: 'dif-FI-ci-lis', deriv: 'difficult' },
    { id: 'gravis', head: 'gravis', la: 'gravis, grave', pos: 'adjective, 3rd decl.', en: 'heavy; serious, important', stress: 'GRA-vis · GRA-ve', deriv: 'grave, gravity' },
    { id: 'levis', head: 'levis', la: 'levis, leve', pos: 'adjective, 3rd decl.', en: 'light; trivial', stress: 'LE-vis · LE-ve', deriv: 'levity, levitate', note: 'Short e. lēvis with long ē means “smooth”.' },
    { id: 'dulcis', head: 'dulcis', la: 'dulcis, dulce', pos: 'adjective, 3rd decl.', en: 'sweet, pleasant', stress: 'DUL-cis · DUL-ce', deriv: 'dulcet; dolce' },
    { id: 'tristis', head: 'trīstis', la: 'trīstis, trīste', pos: 'adjective, 3rd decl.', en: 'sad, gloomy', stress: 'TRĪS-tis', deriv: 'triste (French), tristezza' },
    { id: 'fidelis', head: 'fidēlis', la: 'fidēlis, fidēle', pos: 'adjective, 3rd decl.', en: 'faithful, loyal', stress: 'fi-DĒ-lis', deriv: 'fidelity; Fidelio', note: 'From fidēs, “trust”.' },
    { id: 'potens', head: 'potēns', la: 'potēns, gen. potentis', pos: 'adjective, 3rd decl. (one termination)', en: 'powerful', stress: 'PO-tēns · po-TEN-tis', deriv: 'potent, potential', note: 'In origin a present participle belonging with possum.' },
    { id: 'felix', head: 'fēlīx', la: 'fēlīx, gen. fēlīcis', pos: 'adjective, 3rd decl. (one termination)', en: 'lucky, fortunate, happy', stress: 'FĒ-līx · fē-LĪ-cis', deriv: 'felicity; Felix' },
    { id: 'ingens', head: 'ingēns', la: 'ingēns, gen. ingentis', pos: 'adjective, 3rd decl. (one termination)', en: 'huge, enormous', stress: 'IN-gēns · in-GEN-tis' },
    { id: 'vetus', head: 'vetus', la: 'vetus, gen. veteris', pos: 'adjective, 3rd decl. (consonant stem)', en: 'old', stress: 'VE-tus · VE-te-ris', deriv: 'veteran', note: 'Abl. vetere, gen. pl. veterum, n. pl. vetera.' },
    { id: 'aetas', head: 'aetās', la: 'aetās, aetātis', g: 'f', pos: 'noun, 3rd decl.', en: 'age, period of life; time', stress: 'AE-tās · ae-TĀ-tis', note: 'Horace’s invida aetās, “envious time” (Odes 1.11.7).' },
    { id: 'mens', head: 'mēns', la: 'mēns, mentis', g: 'f', pos: 'noun, 3rd decl. (i-stem)', en: 'mind, intention', stress: 'MĒNS · MEN-tis', deriv: 'mental', note: 'mēns sāna in corpore sānō (Juvenal 10.356).' },
    { id: 'certamen', head: 'certāmen', la: 'certāmen, certāminis', g: 'n', pos: 'noun, 3rd decl.', en: 'contest, competition; battle', stress: 'cer-TĀ-men · cer-TĀ-mi-nis' },
    { id: 'praemium', head: 'praemium', la: 'praemium, praemiī', g: 'n', pos: 'noun, 2nd decl.', en: 'reward, prize', stress: 'PRAE-mi-um', deriv: 'premium; Prämie' },
    { id: 'certo', head: 'certō', la: 'certō, certāre, certāvī, certātum', pos: 'verb, 1st conj.', en: 'compete, contend, fight', stress: 'CER-tō · cer-TĀ-re', note: 'Compare certāmen.' },
    { id: 'flecto', head: 'flectō', la: 'flectō, flectere, flexī, flexum', pos: 'verb, 3rd conj.', en: 'bend, turn', stress: 'FLEC-tō · FLEC-te-re', deriv: 'flexible, reflect', note: 'Pliny 6.16.11: an retrō flecteret, “whether he should turn back”.' },
    { id: 'premo', head: 'premō', la: 'premō, premere, pressī, pressum', pos: 'verb, 3rd conj.', en: 'press, press hard, oppress', stress: 'PRE-mō · PRE-me-re', deriv: 'press, oppress, express' },
    { id: 'consisto', head: 'cōnsistō', la: 'cōnsistō, cōnsistere, cōnstitī', pos: 'verb, 3rd conj.', en: 'stop, stand still; take a stand', stress: 'cōn-SIS-tō · cōn-SIS-te-re', deriv: 'consist', note: 'Reduplicated perfect from sistō.' }
  ],

  grammarCards: [
    { id: 'g17-types', front: 'Three types of 3rd-declension adjective', back: 'three terminations (ācer, ācris, ācre); two (fortis, forte); one (potēns, gen. potentis)' },
    { id: 'g17-marks', front: 'Three marks of 3rd-declension adjectives', back: 'abl. sg. -ī (all genders), gen. pl. -ium, n. pl. -ia' },
    { id: 'g17-fortis', front: 'fortis: singular (m./f.)', back: 'fortis, fortis, fortī, fortem, fortī' },
    { id: 'g17-forte', front: 'fortis: neuter plural', back: 'fortia, fortium, fortibus, fortia, fortibus' },
    { id: 'g17-potens', front: 'potēns: acc. sg. m. and n.', back: 'potentem; potēns' },
    { id: 'g17-acer', front: 'ācer: nominative forms', back: 'ācer (m.), ācris (f.), ācre (n.)' },
    { id: 'g17-vetus', front: 'vetus: abl. sg., gen. pl., n. pl.', back: 'vetere, veterum, vetera (consonant stem)' },
    { id: 'g17-agree', front: '“to a brave woman”', back: 'fēminae fortī: agreement in gender, number, case, not in ending' },
    { id: 'g17-rex', front: '“of the good king”', back: 'rēgis bonī' },
    { id: 'g17-omnes', front: 'omnēs / omnia used alone', back: 'everyone / everything' },
    { id: 'g17-omnis', front: 'omnis homō vs omnēs hominēs', back: 'every person vs all people' },
    { id: 'g17-fortes', front: 'Fortēs fortūna iuvat.', back: 'Fortune helps the brave. (Pliny the Elder, in Letters 6.16.11; proverbial, Terence, Phormio 203)' },
    { id: 'g17-horace', front: 'spatiō brevī spem longam resecēs', back: 'since our span is short, cut back long hope (Horace, Odes 1.11.6–7)' },
    { id: 'g17-memorem', front: 'saevae memorem Iūnōnis ob īram', back: 'on account of the unforgetting anger of cruel Juno (Aeneid 1.4)' },
    { id: 'g17-levis', front: 'levis vs lēvis', back: 'light (short e) vs smooth (long ē)' },
    { id: 'g17-grand', front: 'Why French grand-mère without -e?', back: 'Latin grandis had one form for m. and f.; Old French grant likewise.' },
    { id: 'g17-brief', front: 'German Brief', back: 'From Latin breve: “a short (document)”.' },
    { id: 'g17-omnibus', front: 'omnibus', back: 'Dative/ablative plural of omnis: “for all”.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Ablative singular of <span class="la">fortis</span>:', options: ['fortī', 'forte', 'fortō', 'fortis'], answer: 0, explain: '3rd-declension adjectives: abl. -ī.' },
    { id: 'e2', type: 'mc', prompt: 'Neuter nominative plural of <span class="la">omnis</span>:', options: ['omnia', 'omna', 'omnēs', 'omnium'], answer: 0, explain: '-ia.' },
    { id: 'e3', type: 'mc', prompt: 'Which adjective has three terminations?', options: ['ācer, ācris, ācre', 'fortis, forte', 'potēns, potentis', 'fēlīx, fēlīcis'], answer: 0, explain: 'A different nominative for each gender.' },
    { id: 'e4', type: 'mc', prompt: 'Genitive plural of <span class="la">potēns</span>:', options: ['potentium', 'potentum', 'potēnsium', 'potentōrum'], answer: 0, explain: '-ium.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">virō fortī</span> is:', options: ['dative or ablative singular', 'genitive singular', 'nominative plural', 'accusative singular'], answer: 0, explain: 'virō and fortī are both dat./abl.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">omnēs</span> used alone means:', options: ['everyone', 'everything', 'every day', 'all the time'], answer: 0, explain: 'Masculine plural: people. The neuter omnia: things.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Mīlitēs fort___ sunt.</span>', hint: 'brave (nom. pl.)', answers: ['ēs', 'es'], full: 'Mīlitēs fortēs sunt.', explain: 'Nominative plural m./f.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Iter est brev___.</span>', hint: 'short (n.)', answers: ['e'], full: 'Iter est breve.', explain: 'iter is neuter: breve.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Cum puellā fēlīc___ ambulat.</span>', hint: 'lucky (abl.)', answers: ['ī', 'i'], full: 'Cum puellā fēlīcī ambulat.', explain: 'Ablative -ī, though puellā ends in -ā.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Nōmina omn___ cīvium scit.</span>', hint: 'of all', answers: ['ium'], full: 'Nōmina omnium cīvium scit.', explain: 'Genitive plural -ium.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Animal ācr___ timēmus.</span>', hint: 'fierce (acc. n.)', answers: ['e'], full: 'Animal ācre timēmus.', explain: 'Neuter accusative = nominative: ācre.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Rēgem potent___ vīdimus.</span>', hint: 'powerful (acc.)', answers: ['em'], full: 'Rēgem potentem vīdimus.', explain: 'Accusative masculine: potentem.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">fortis</span> in the singular.', headers: ['m./f.', 'n.'], rows: [
      { label: 'Nom.', answers: ['fortis', 'forte'] },
      { label: 'Gen.', answers: ['fortis', 'fortis'] },
      { label: 'Dat.', answers: ['fortī', 'fortī'] },
      { label: 'Acc.', answers: ['fortem', 'forte'] },
      { label: 'Abl.', answers: ['fortī', 'fortī'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">potēns</span> in the plural.', headers: ['m./f.', 'n.'], rows: [
      { label: 'Nom.', answers: ['potentēs', 'potentia'] },
      { label: 'Gen.', answers: ['potentium', 'potentium'] },
      { label: 'Dat.', answers: ['potentibus', 'potentibus'] },
      { label: 'Acc.', answers: ['potentēs|potentīs', 'potentia'] },
      { label: 'Abl.', answers: ['potentibus', 'potentibus'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each adjective to its meaning.', pairs: [
      ['ācer', 'sharp, keen'], ['brevis', 'short'], ['gravis', 'heavy, serious'], ['levis', 'light'], ['fēlīx', 'lucky, happy']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Fortēs fortūna iuvat.', tokens: ['Fortune', 'helps', 'the', 'brave'], explain: 'fortēs: an adjective used as a noun.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Omnia sunt facilia.', model: 'Everything is easy.', accepted: ['everything is easy', 'all things are easy', 'all is easy', 'everything is simple', 'all things are simple'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Mīles fortis urbem dēfendit.', model: 'The brave soldier defends the city.', accepted: ['brave soldier defends city', 'brave soldier defended city', 'brave soldier is defending city', 'brave soldier has defended city', 'strong soldier defends city', 'strong soldier defended city'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Vīta est brevis.', model: 'Life is short.', accepted: ['life is short', 'life is brief'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'all the citizens (nom.)', model: 'omnēs cīvēs', accepted: ['omnēs cīvēs'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'with a brave friend', model: 'cum amīcō fortī', accepted: ['cum amīcō fortī'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'a sweet voice (nom.)', model: 'vōx dulcis', accepted: ['vōx dulcis'] },
    { id: 'e23', type: 'mc', prompt: 'According to his nephew, to whom did the elder Pliny say <span class="la">Fortēs fortūna iuvat</span>?', options: ['To the helmsman, who advised turning back', 'To his sister', 'To Tacitus', 'To the emperor'], answer: 0, explain: 'gubernātōrī ut ita faceret monentī (6.16.11).' },
    { id: 'e24', type: 'mc', prompt: 'Why does Horace write <span class="la">spatiō brevī</span> and not <span class="la">*spatiō breve</span>?', options: ['brevis is a 3rd-declension adjective with ablative -ī', 'brevis agrees with spem', 'the metre requires a long vowel only', 'breve is a different word'], answer: 0, explain: 'Ablative singular of brevis: brevī.' },
    { id: 'e25', type: 'mc', prompt: 'Why did French once write <em>grand’mère</em> with an apostrophe?', options: ['Grammarians wrongly thought an e had been dropped; Old French grant had no feminine form', 'Because grand is short for grande in poetry', 'Because Latin grandis is feminine', 'Because of the Académie’s spelling reform of 1990'], answer: 0, explain: 'Latin grandis had one form for m. and f.' }
  ],

  reading: {
    title: 'Certāmen',
    note: 'Original passage: a race at the town games. Tap any word.',
    text: 'Mēnse Septembrī lūdī in oppidō erant, et omnēs cīvēs in forum vēnērunt. Magister lūdōrum puerīs certāmen prōposuit: “Hodiē puerī currunt. Via est brevis sed difficilis; praemium est ingēns: equus fortis et celer!” Multī puerī aderant. Inter eōs erant Quīntus et Gāius et Titus, puer ingēns et ācer, sed nōn celer. Omnēs cucurrērunt. Prīmō Titus omnēs superāvit, nam corpus grave sed validum habēbat. Mox autem Gāius, puer levis et celer, eum superāvit, et Quīntus post eum currēbat. Via erat difficilis: saxa ingentia et aqua altae fossae puerōs premēbant. In parte ultimā viae Gāius cecidit. Quīntus frātrem vīdit, cōnstitit, et manum eī dedit. Interim Titus ad mētam vēnit et praemium accēpit. Gāius trīstis erat, sed Mārcus fīliōs laudāvit: “Nōlīte esse trīstēs! Tū, Gāī, celer fuistī; tū, Quīnte, fortis et fidēlis. Hoc praemium est dulce: frāter fidēlis.” Et Lūcius rīsit: “Fortēs fortūna iuvat, sed nōn semper. Vōs tamen ambō fēlīcēs estis, nam frātrem fidēlem habētis.”',
    translation: 'In the month of September there were games in the town, and all the citizens came into the forum. The master of the games set the boys a contest: “Today the boys run. The course is short but difficult; the prize is huge: a strong, swift horse!” Many boys were there. Among them were Quintus and Gaius and Titus, a huge and fierce boy, but not swift. They all ran. At first Titus overtook everyone, for he had a heavy but strong body. But soon Gaius, a light and swift boy, overtook him, and Quintus was running behind him. The course was difficult: huge rocks and the water of a deep ditch hampered the boys. In the last part of the course Gaius fell. Quintus saw his brother, stopped, and gave him his hand. Meanwhile Titus came to the finishing post and received the prize. Gaius was sad, but Marcus praised his sons: “Don’t be sad! You, Gaius, were swift; you, Quintus, brave and loyal. This prize is sweet: a loyal brother.” And Lucius laughed: “Fortune helps the brave, but not always. Still, you are both lucky, for you have a loyal brother.”',
    notes: [
      { ref: 'Mēnse Septembrī', html: 'Ablative of time (Lecture XVI). <span class="la">September, Septembris</span> is itself a third-declension adjective, agreeing with <span class="la">mēnsis</span>: hence <span class="la">Septembrī</span> with <span class="la">-ī</span>.' },
      { ref: 'omnēs cīvēs', html: '<span class="la">omnēs</span>: “all”, agreeing with <span class="la">cīvēs</span>.' },
      { ref: 'Magister lūdōrum puerīs certāmen prōposuit', html: '<span class="la">prōpōnō, -ere, prōposuī</span>: put forward, propose (<span class="la">prō</span> + <span class="la">pōnō</span>, Lecture XIII).' },
      { ref: 'Via est brevis sed difficilis', html: 'Both adjectives feminine, agreeing with <span class="la">via</span>, but ending in <span class="la">-is</span>: agreement, not matching endings.' },
      { ref: 'equus fortis et celer', html: 'Masculine nominative: <span class="la">fortis</span> (two terminations), <span class="la">celer</span> (three terminations: <span class="la">celer, celeris, celere</span>).' },
      { ref: 'puer ingēns et ācer', html: '<span class="la">ingēns</span>: one termination; <span class="la">ācer</span>: the masculine form.' },
      { ref: 'Titus omnēs superāvit', html: '<span class="la">omnēs</span> used alone: “everyone”.' },
      { ref: 'corpus grave sed validum', html: '<span class="la">corpus</span> is neuter, so <span class="la">grave</span> (3rd decl.) and <span class="la">validum</span> (2nd decl.): two adjectives of different classes agreeing with the same noun.' },
      { ref: 'saxa ingentia et aqua altae fossae', html: '<span class="la">saxa ingentia</span>: neuter plural <span class="la">-ia</span>. <span class="la">fossa</span>: ditch.' },
      { ref: 'In parte ultimā viae', html: '<span class="la">parte</span>: ablative of <span class="la">pars</span> (Lecture XV); <span class="la">ultimā</span> is a 1st/2nd-declension adjective agreeing with it.' },
      { ref: 'Quīntus frātrem vīdit, cōnstitit, et manum eī dedit', html: '<span class="la">cōnstitit</span>: perfect of <span class="la">cōnsistō</span>. <span class="la">manus</span>: hand (fourth declension, Lecture XXI).' },
      { ref: 'ad mētam', html: '<span class="la">mēta</span>: the turning or finishing post of a racecourse.' },
      { ref: 'Nōlīte esse trīstēs!', html: '<span class="la">trīstēs</span>: nominative plural, agreeing with the subject of <span class="la">nōlīte</span> (“you”, the boys).' },
      { ref: 'Hoc praemium est dulce: frāter fidēlis', html: '<span class="la">dulce</span>: neuter, agreeing with <span class="la">praemium</span>.' },
      { ref: 'Vōs tamen ambō fēlīcēs estis', html: '<span class="la">ambō</span>: both (Lecture XVI). <span class="la">fēlīcēs</span>: nominative plural of <span class="la">fēlīx</span>.' }
    ],
    glosses: {
      'mēnse': 'abl. of mēnsis: month', 'septembrī': 'abl. of September: (of) September', 'lūdī': 'nom. pl. of lūdus: games', 'in': 'in (+ abl.); into (+ acc.)', 'oppidō': 'abl. of oppidum: town', 'erant': 'were', 'et': 'and', 'omnēs': 'all (nom. pl.); everyone', 'cīvēs': 'nom. pl. of cīvis: citizens', 'forum': 'acc. of forum', 'vēnērunt': 'perf. 3rd pl. of veniō: came',
      'magister': 'master (nom.)', 'lūdōrum': 'gen. pl. of lūdus: of the games', 'puerīs': 'dat. pl. of puer: to the boys', 'certāmen': 'contest (acc.)', 'prōposuit': 'perf. 3rd sg. of prōpōnō: set, proposed',
      'hodiē': 'today', 'puerī': 'nom. pl. of puer: boys', 'currunt': '3rd pl. of currō: run', 'via': 'road, course (nom.)', 'est': 'is', 'brevis': 'short (nom. f.)', 'sed': 'but', 'difficilis': 'difficult (nom. f.)', 'praemium': 'prize (nom./acc.)', 'ingēns': 'huge', 'equus': 'horse (nom.)', 'fortis': 'strong, brave (nom.)', 'celer': 'swift (nom. m.)',
      'multī': 'many', 'aderant': 'impf. 3rd pl. of adsum: were present', 'inter': 'among (+ acc.)', 'eōs': 'acc. pl. of is: them', 'quīntus': 'Quintus (nom.)', 'gāius': 'Gaius (nom.)', 'titus': 'Titus (nom.)', 'puer': 'boy (nom.)', 'ācer': 'fierce, keen (nom. m.)', 'nōn': 'not',
      'cucurrērunt': 'perf. 3rd pl. of currō: ran', 'prīmō': 'at first', 'superāvit': 'perf. 3rd sg. of superō: overtook', 'nam': 'for', 'corpus': 'body (acc.)', 'grave': 'heavy (acc. n.)', 'validum': 'acc. n. of validus: strong', 'habēbat': 'impf. 3rd sg. of habeō: had',
      'mox': 'soon', 'autem': 'but, however', 'levis': 'light (nom. m.)', 'eum': 'acc. of is: him', 'post': 'behind, after (+ acc.)', 'currēbat': 'impf. 3rd sg. of currō: was running',
      'erat': 'was', 'saxa': 'nom. pl. of saxum: rocks', 'ingentia': 'nom. pl. n. of ingēns: huge', 'aqua': 'water (nom.)', 'altae': 'gen. f. of altus: deep', 'fossae': 'gen. of fossa: ditch', 'puerōs': 'acc. pl. of puer: boys', 'premēbant': 'impf. 3rd pl. of premō: pressed hard, hampered',
      'parte': 'abl. of pars: part', 'ultimā': 'abl. f. of ultimus: last', 'viae': 'gen. of via: of the course', 'cecidit': 'perf. 3rd sg. of cadō: fell',
      'frātrem': 'acc. of frāter: brother', 'vīdit': 'perf. 3rd sg. of videō: saw', 'cōnstitit': 'perf. 3rd sg. of cōnsistō: stopped', 'manum': 'acc. of manus: hand', 'eī': 'dat. of is: to him', 'dedit': 'perf. 3rd sg. of dō: gave',
      'interim': 'meanwhile', 'ad': 'to (+ acc.)', 'mētam': 'acc. of mēta: finishing post', 'accēpit': 'perf. 3rd sg. of accipiō: received', 'vēnit': 'perf. 3rd sg. of veniō: came',
      'trīstis': 'sad (nom.)', 'mārcus': 'Marcus (nom.)', 'fīliōs': 'acc. pl. of fīlius: sons', 'laudāvit': 'perf. 3rd sg. of laudō: praised', 'nōlīte': 'don’t (pl., + inf.)', 'esse': 'to be', 'trīstēs': 'nom. pl. of trīstis: sad',
      'tū': 'you (sg.)', 'gāī': 'voc. of Gāius', 'fuistī': 'perf. 2nd sg. of sum: you were', 'quīnte': 'voc. of Quīntus', 'fidēlis': 'loyal, faithful (nom.)', 'hoc': 'this (n.)', 'dulce': 'sweet (nom. n.)', 'frāter': 'brother (nom.)',
      'lūcius': 'Lucius (nom.)', 'rīsit': 'perf. 3rd sg. of rīdeō: laughed', 'fortēs': 'acc. pl. of fortis: the brave', 'fortūna': 'fortune (nom.)', 'iuvat': '3rd sg. of iuvō: helps', 'semper': 'always',
      'vōs': 'you (pl.)', 'tamen': 'nevertheless, still', 'ambō': 'both', 'fēlīcēs': 'nom. pl. of fēlīx: lucky', 'estis': 'you (pl.) are', 'fidēlem': 'acc. of fidēlis: loyal', 'habētis': '2nd pl. of habeō: you have'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What was the prize?', options: ['A strong, swift horse', 'A sack of money', 'A Greek book', 'A sheep'], answer: 0, explain: 'praemium est ingēns: equus fortis et celer!' },
      { id: 'r2', type: 'mc', prompt: 'What kind of boy was Titus?', options: ['Huge and fierce, but not swift', 'Light and swift', 'Small and clever', 'Sad and slow'], answer: 0, explain: 'puer ingēns et ācer, sed nōn celer.' },
      { id: 'r3', type: 'mc', prompt: 'What did Quintus do when Gaius fell?', options: ['He stopped and gave him his hand', 'He ran on and won', 'He laughed', 'He called his father'], answer: 0, explain: 'cōnstitit, et manum eī dedit.' },
      { id: 'r4', type: 'mc', prompt: 'Who won the prize?', options: ['Titus', 'Gaius', 'Quintus', 'Nobody'], answer: 0, explain: 'Titus ad mētam vēnit et praemium accēpit.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">fēminae fortī</span> is:', options: ['dative singular', 'ablative singular', 'nominative plural', 'genitive singular'], answer: 0, explain: 'The ablative would be fēminā fortī.' },
      { id: 't2', type: 'mc', prompt: 'Neuter nominative singular of <span class="la">ācer</span>:', options: ['ācre', 'ācer', 'ācris', 'ācrum'], answer: 0, explain: 'ācer, ācris, ācre.' },
      { id: 't3', type: 'mc', prompt: 'Ablative singular of <span class="la">vetus</span>:', options: ['vetere', 'veterī', 'vetō', 'vetus'], answer: 0, explain: 'A consonant-stem adjective.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Omn___ hominēs mortālēs sunt.</span>', hint: 'all', answers: ['ēs', 'es'], full: 'Omnēs hominēs mortālēs sunt.', explain: 'Nominative plural masculine.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Cum rēge potent___ vēnit.</span>', hint: 'powerful (abl.)', answers: ['ī', 'i'], full: 'Cum rēge potentī vēnit.', explain: 'The noun has -e, the adjective -ī.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Puer celer omnēs superāvit.', model: 'The swift boy overtook everyone.', accepted: ['swift boy overtook everyone', 'swift boy beat everyone', 'swift boy surpassed everyone', 'swift boy overtook all', 'swift boy beat all', 'quick boy overtook everyone', 'quick boy beat everyone', 'swift boy has overtaken everyone', 'swift boy defeated everyone'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'everything (nom.)', model: 'omnia', accepted: ['omnia'] },
      { id: 't8', type: 'mc', prompt: 'Which word means “light (in weight)”?', options: ['levis', 'lēvis', 'gravis', 'lūx'], answer: 0, explain: 'lēvis with long ē is “smooth”.' },
      { id: 't9', type: 'mc', prompt: 'German <em>Brief</em> comes from:', options: ['brevis', 'breviter', 'Brigantia', 'brūma'], answer: 0, explain: '“a short (document)”.' },
      { id: 't10', type: 'mc', prompt: 'In <span class="la">Tantaene animīs caelestibus īrae?</span> (Aeneid 1.11), <span class="la">caelestibus</span> agrees with:', options: ['animīs', 'īrae', 'tantae', 'nothing'], answer: 0, explain: 'Dative plural: “in heavenly minds”.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">omnis homō</span>:', options: ['every person', 'all people', 'the whole person', 'everything human'], answer: 0, explain: 'Singular omnis: every.' }
    ]
  },

  reference: [
    { title: 'fortis and potēns', headers: ['', 'fortis m./f.', 'forte n.', 'potēns m./f.', 'potēns n.'], rows: [
      ['Nom. sg.', 'fortis', 'forte', 'potēns', 'potēns'], ['Gen.', 'fortis', 'fortis', 'potentis', 'potentis'], ['Dat.', 'fortī', 'fortī', 'potentī', 'potentī'], ['Acc.', 'fortem', 'forte', 'potentem', 'potēns'], ['Abl.', 'fortī', 'fortī', 'potentī', 'potentī'],
      ['Nom. pl.', 'fortēs', 'fortia', 'potentēs', 'potentia'], ['Gen.', 'fortium', 'fortium', 'potentium', 'potentium'], ['Dat./Abl.', 'fortibus', 'fortibus', 'potentibus', 'potentibus'], ['Acc.', 'fortēs (-īs)', 'fortia', 'potentēs (-īs)', 'potentia']
    ] },
    { title: 'ācer, ācris, ācre (singular)', headers: ['', 'm.', 'f.', 'n.'], rows: [
      ['Nom.', 'ācer', 'ācris', 'ācre'], ['Gen.', 'ācris', 'ācris', 'ācris'], ['Dat.', 'ācrī', 'ācrī', 'ācrī'], ['Acc.', 'ācrem', 'ācrem', 'ācre'], ['Abl.', 'ācrī', 'ācrī', 'ācrī']
    ] },
    { title: 'Two classes of adjective', headers: ['', '1st/2nd decl.', '3rd decl.'], rows: [
      ['Example', 'bonus, bona, bonum', 'fortis, forte'], ['Abl. sg.', 'bonō, bonā, bonō', 'fortī'], ['Gen. pl.', 'bonōrum, bonārum', 'fortium'], ['N. pl.', 'bona', 'fortia']
    ] }
  ]
});
