/*
 * Latin — Lecture XI: the fourth conjugation and third-conjugation verbs in -iō.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotation (Catullus 85) checked against the text supplied by Nils
 * (sources/latin-readings.txt). Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-11',
  number: 11,
  title: 'Ōdī et amō',
  subtitle: 'The fourth conjugation (audiō) and third-conjugation verbs in -iō (capiō); the four conjugations side by side',
  minutes: 60,

  intro: `
    <p>This lecture completes the Latin verb in its present system. The <strong>fourth conjugation</strong> has a stem in long <span class="la">ī</span>: <span class="la">audiō, audīre</span> “hear”, <span class="la">veniō, venīre</span> “come”, <span class="la">sentiō, sentīre</span> “feel, perceive”, <span class="la">dormiō, dormīre</span> “sleep”. Its infinitive in <span class="la">-īre</span> makes it easy to recognise.</p>
    <p>Alongside it stands a small but very important group: third-conjugation verbs whose first person ends in <span class="la">-iō</span>, such as <span class="la">capiō</span> “take”, <span class="la">faciō</span> “make, do”, <span class="la">fugiō</span> “flee”, <span class="la">cupiō</span> “desire”. They have a short-vowel infinitive like <span class="la">regere</span> (<span class="la">capere, facere</span>), but in several forms they show an <span class="la">i</span> like the fourth conjugation (<span class="la">capiunt, capiēbam, capiam</span>). Grammarians call them “mixed” for that reason.</p>
    <p>The good news is that the future of both groups follows the third conjugation: <span class="la">-am, -ēs, -et</span> (<span class="la">audiam, capiam</span>). Once you have this lecture, every regular Latin verb can be put into the present, imperfect and future, and the lecture ends with a table of all four conjugations side by side.</p>
    <p>By the end you should be able to conjugate <span class="la">audiō</span> and <span class="la">capiō</span> in the present, imperfect and future, form their imperatives, and identify the conjugation of any regular verb from its first two principal parts.</p>
  `,

  background: [
    {
      title: 'Catullus and Lesbia',
      html: `
        <p>Gaius Valerius Catullus (c. 84 – c. 54 BC) came from a wealthy family of Verona and spent most of his short adult life in Rome, among a circle of young poets who modelled their work on Greek poetry of the Hellenistic age: short, learned, polished, often personal. His poems survive in a single collection, numbered 1 to 116 by modern editors, which reached the Middle Ages, it seems, in one manuscript found at Verona around 1300 and later lost.</p>
        <p>Many poems are addressed to or about a woman he calls Lesbia, a name recalling the Greek poetess Sappho of Lesbos. The 2nd-century writer Apuleius says that her real name was Clodia, and she is traditionally identified with Clodia Metelli, sister of Cicero’s enemy Clodius, whom Cicero himself attacked in his speech <em>Pro Caelio</em>. The identification is attractive and widely accepted, but it rests on that one later statement and on circumstantial evidence.</p>
        <p>The poems trace an affair from delight (Catullus 5, which you will read later in this course) to bitterness. Poem 85, two lines long, compresses the contradiction into a single couplet.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Grotte_di_Catullo_-_Sirmione.jpg/960px-Grotte_di_Catullo_-_Sirmione.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Grotte_di_Catullo_-_Sirmione.jpg/500px-Grotte_di_Catullo_-_Sirmione.jpg|https://upload.wikimedia.org/wikipedia/commons/0/05/Grotte_di_Catullo_-_Sirmione.jpg" alt="Ruins of a large Roman villa on a headland above a lake"><figcaption>The “Grotte di Catullo” at Sirmione on Lake Garda, the remains of a great Roman villa. Catullus had a villa at Sirmio (poem 31), but this building is generally dated to the late 1st century BC or the early 1st century AD, after his death; the name is a modern tradition. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Grotte_di_Catullo_-_Sirmione.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Audīre: a culture of listening',
      html: `
        <p>Roman literature was made to be heard. Poems were recited at dinner parties and at public readings (<span class="la">recitātiōnēs</span>), and speeches were delivered in the Forum and the senate before crowds. The people at a recitation were <span class="la">audītōrēs</span>, “listeners”, and an <span class="la">audītōrium</span> was a hall for readings or lectures. Reading aloud was common even in private, often by a slave reader; the older claim that Romans could not read silently has been disproved (B. M. W. Knox, 1968), but silent reading seems to have been the less usual way to meet a literary text.</p>
        <p>That is one reason why sound mattered so much to Latin writers: rhythm, alliteration, the placing of words for emphasis. Catullus 85 is a good example. Read it aloud: the second line is built of verbs, <span class="la">nesciō … fierī sentiō … excrucior</span>, and ends on the longest word in the poem.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lucerna_(37626370980).jpg/960px-Lucerna_(37626370980).jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lucerna_(37626370980).jpg/500px-Lucerna_(37626370980).jpg|https://upload.wikimedia.org/wikipedia/commons/5/5e/Lucerna_(37626370980).jpg" alt="Small Roman clay oil lamp with a nozzle and a decorated top"><figcaption>A Roman clay oil lamp (<span class="la">lucerna</span>). Olive oil burned on a wick in the nozzle; a household needed many of them, which is why so many survive. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Lucerna_(37626370980).jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Why “mixed”?',
      html: `
        <p>The verbs in <span class="la">-iō</span> of the third conjugation once had a short <span class="la">i</span> in their stem: <span class="la">capi-</span>. Before another vowel the <span class="la">i</span> stayed (<span class="la">capiō, capiunt, capiam</span>); before a consonant or at the end of a word it changed to <span class="la">e</span> or <span class="la">i</span> and looked like the ordinary third conjugation (<span class="la">capere, capis, cape</span>). The fourth conjugation had a long <span class="la">ī</span>, which survives except where Latin regularly shortens a vowel, before another vowel or before final <span class="la">-t</span> (<span class="la">audīre, audīs, audī</span>, but <span class="la">audiō, audit</span>).</p>
        <p>So the practical rule is simple. Learn the first two principal parts. If they are <span class="la">-iō, -īre</span>, the verb is fourth conjugation. If they are <span class="la">-iō, -ere</span>, it is a third-conjugation <span class="la">-iō</span> verb. Everything else follows.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Ōdī et amō. quārē id faciam, fortasse requīris.<br>nesciō, sed fierī sentiō et excrucior.</p>
    <p>“I hate and I love. Why I do so, perhaps you ask. I don’t know, but I feel it happen, and I am tortured.” Catullus 85, the whole poem; checked against the text in the course’s source files, with length marks added.</p>
    <p>Two fourth-conjugation verbs carry the second line: <span class="la">nesciō</span>, “I don’t know”, and <span class="la">sentiō</span>, “I feel”. <span class="la">faciam</span> belongs to the <span class="la">-iō</span> verb <span class="la">faciō</span>; here it is a subjunctive in an indirect question (Lecture XXXI). <span class="la">ōdī</span>, “I hate”, has a perfect form but present meaning. <span class="la">fierī</span>, “to happen”, and <span class="la">excrucior</span>, “I am tortured”, are passive forms (Lectures XIX and XXXVII). There are eight verbs in fourteen words, and no adjective at all.</p>
  `,

  pronunciation: `
    <h3>The long ī of the fourth conjugation</h3>
    <p>The <span class="la">ī</span> is long wherever it is not followed by another vowel or by final <span class="la">-t</span>: <span class="la">au-DĪ-re, au-DĪS, au-DĪ-mus, au-DĪ-tis</span>, but <span class="la">AU-dit, AU-di-ō, AU-di-unt</span>. This moves the stress: <span class="la">au-DĪ-mus</span> but <span class="la">CA-pi-mus</span>, a difference you can hear.</p>
    <h3>i before a vowel</h3>
    <p>In <span class="la">audiō, capiō, veniunt</span> the <span class="la">i</span> is a full vowel, not a consonant: <span class="la">AU-di-ō</span> in three syllables, <span class="la">VE-ni-unt</span>. A German speaker naturally says <em>au-djo</em>; classical verse shows that the <span class="la">i</span> made a syllable of its own.</p>
    <h3>faciō, fēcī</h3>
    <p>Many <span class="la">-iō</span> verbs lengthen and change the vowel in the perfect: <span class="la">faciō, fēcī</span>; <span class="la">capiō, cēpī</span>; <span class="la">iaciō, iēcī</span>; <span class="la">fugiō, fūgī</span>. Learn the perfects with their long vowels now.</p>
  `,

  grammar: [
    {
      title: '1. Principal parts',
      html: `
        <ul>
          <li>Fourth conjugation: <span class="la">audiō, audīre, audīvī, audītum</span> “hear”</li>
          <li>Third conjugation in -iō: <span class="la">capiō, capere, cēpī, captum</span> “take, capture”</li>
        </ul>
        <p>Compare the first two parts: <span class="la">-iō, -īre</span> (fourth) against <span class="la">-iō, -ere</span> (third -iō). The present stem is the infinitive minus <span class="la">-re</span>: <span class="la">audī-</span>; for <span class="la">capiō</span>, the first principal part minus <span class="la">-ō</span>: <span class="la">capi-</span>.</p>
      `
    },
    {
      title: '2. The present',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>audiō (4th)</th><th>capiō (3rd -iō)</th><th>regō (3rd)</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">audiō</td><td class="la">capiō</td><td class="la">regō</td></tr>
            <tr><th>2nd sg.</th><td class="la">audīs</td><td class="la">capis</td><td class="la">regis</td></tr>
            <tr><th>3rd sg.</th><td class="la">audit</td><td class="la">capit</td><td class="la">regit</td></tr>
            <tr><th>1st pl.</th><td class="la">audīmus</td><td class="la">capimus</td><td class="la">regimus</td></tr>
            <tr><th>2nd pl.</th><td class="la">audītis</td><td class="la">capitis</td><td class="la">regitis</td></tr>
            <tr><th>3rd pl.</th><td class="la">audiunt</td><td class="la">capiunt</td><td class="la">regunt</td></tr>
          </tbody>
        </table></div>
        <p><span class="la">capiō</span> is like <span class="la">regō</span> except in the first person singular and third person plural, where the <span class="la">i</span> appears: <span class="la">capiō, capiunt</span>. <span class="la">audiō</span> has the same <span class="la">-iunt</span>, and a long <span class="la">ī</span> elsewhere.</p>
      `
    },
    {
      title: '3. The imperfect',
      html: `
        <p>Both groups add <span class="la">-iēbā-</span>: <span class="la">audiēbam, audiēbās, audiēbat …</span>; <span class="la">capiēbam, capiēbās, capiēbat …</span>. The <span class="la">-ēba-</span> is familiar from the second and third conjugations; only the <span class="la">i</span> before it is new.</p>
      `
    },
    {
      title: '4. The future',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>audiō</th><th>capiō</th><th>regō</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">audiam</td><td class="la">capiam</td><td class="la">regam</td></tr>
            <tr><th>2nd sg.</th><td class="la">audiēs</td><td class="la">capiēs</td><td class="la">regēs</td></tr>
            <tr><th>3rd sg.</th><td class="la">audiet</td><td class="la">capiet</td><td class="la">reget</td></tr>
            <tr><th>1st pl.</th><td class="la">audiēmus</td><td class="la">capiēmus</td><td class="la">regēmus</td></tr>
            <tr><th>2nd pl.</th><td class="la">audiētis</td><td class="la">capiētis</td><td class="la">regētis</td></tr>
            <tr><th>3rd pl.</th><td class="la">audient</td><td class="la">capient</td><td class="la">regent</td></tr>
          </tbody>
        </table></div>
        <p>The future of both groups is the third-conjugation future with an <span class="la">i</span> in front: <span class="la">-iam, -iēs, -iet</span>. As with <span class="la">regō</span>, an <span class="la">e</span> in the ending means future: <span class="la">audiet</span> “he will hear”, against <span class="la">audit</span> “he hears”.</p>
        <p>Beware: <span class="la">audient</span> (future, “they will hear”) and <span class="la">audiunt</span> (present, “they hear”) differ in one letter.</p>
      `
    },
    {
      title: '5. Imperatives',
      html: `
        <ul>
          <li>Fourth conjugation: <span class="la">audī, audīte</span>; <span class="la">venī, venīte</span>.</li>
          <li>Third -iō: <span class="la">cape, capite</span>; <span class="la">fuge, fugite</span>.</li>
          <li>Irregular: <span class="la">fac, facite</span> (from <span class="la">faciō</span>), one of the four short imperatives of Lecture IX.</li>
        </ul>
        <p>The negative is again <span class="la">nōlī, nōlīte</span> + infinitive: <span class="la">nōlī fugere!</span>, “don’t run away!”.</p>
      `
    },
    {
      title: '6. The four conjugations side by side',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>1st</th><th>2nd</th><th>3rd</th><th>3rd -iō</th><th>4th</th></tr></thead>
          <tbody>
            <tr><th>Infinitive</th><td class="la">amāre</td><td class="la">monēre</td><td class="la">regere</td><td class="la">capere</td><td class="la">audīre</td></tr>
            <tr><th>Present 3rd sg.</th><td class="la">amat</td><td class="la">monet</td><td class="la">regit</td><td class="la">capit</td><td class="la">audit</td></tr>
            <tr><th>Present 3rd pl.</th><td class="la">amant</td><td class="la">monent</td><td class="la">regunt</td><td class="la">capiunt</td><td class="la">audiunt</td></tr>
            <tr><th>Imperfect 1st sg.</th><td class="la">amābam</td><td class="la">monēbam</td><td class="la">regēbam</td><td class="la">capiēbam</td><td class="la">audiēbam</td></tr>
            <tr><th>Future 1st sg.</th><td class="la">amābō</td><td class="la">monēbō</td><td class="la">regam</td><td class="la">capiam</td><td class="la">audiam</td></tr>
            <tr><th>Future 3rd sg.</th><td class="la">amābit</td><td class="la">monēbit</td><td class="la">reget</td><td class="la">capiet</td><td class="la">audiet</td></tr>
            <tr><th>Imperative</th><td class="la">amā</td><td class="la">monē</td><td class="la">rege</td><td class="la">cape</td><td class="la">audī</td></tr>
          </tbody>
        </table></div>
        <p>Two groups, two kinds of future: the first and second conjugations use <span class="la">-bō, -bis</span>; the third, third -iō and fourth use <span class="la">-am, -ēs</span>. A rule of thumb: <em>-bō for the first and second, -am for the rest.</em></p>
      `
    }
  ],

  vocab: [
    { id: 'audio', head: 'audiō', la: 'audiō, audīre, audīvī, audītum', pos: 'verb, 4th conj.', en: 'hear, listen to', stress: 'AU-di-ō · au-DĪ-re', deriv: 'audio, audience, audition' },
    { id: 'venio', head: 'veniō', la: 'veniō, venīre, vēnī, ventum', pos: 'verb, 4th conj.', en: 'come', stress: 'VE-ni-ō · ve-NĪ-re', deriv: 'convene, event, adventure', note: 'vēnī: Caesar’s vēnī, vīdī, vīcī.' },
    { id: 'sentio', head: 'sentiō', la: 'sentiō, sentīre, sēnsī, sēnsum', pos: 'verb, 4th conj.', en: 'feel, perceive; think', stress: 'SEN-ti-ō · sen-TĪ-re', deriv: 'sense, sentiment, sentence' },
    { id: 'scio', head: 'sciō', la: 'sciō, scīre, scīvī, scītum', pos: 'verb, 4th conj.', en: 'know', stress: 'SCI-ō · SCĪ-re', deriv: 'science' },
    { id: 'nescio', head: 'nesciō', la: 'nesciō, nescīre, nescīvī, nescītum', pos: 'verb, 4th conj.', en: 'not know', stress: 'NES-ci-ō · nes-CĪ-re', note: 'ne + sciō. Catullus 85.' },
    { id: 'dormio', head: 'dormiō', la: 'dormiō, dormīre, dormīvī, dormītum', pos: 'verb, 4th conj.', en: 'sleep', stress: 'DOR-mi-ō · dor-MĪ-re', deriv: 'dormitory, dormant' },
    { id: 'invenio', head: 'inveniō', la: 'inveniō, invenīre, invēnī, inventum', pos: 'verb, 4th conj.', en: 'come upon, find, discover', stress: 'in-VE-ni-ō · in-ve-NĪ-re', deriv: 'invent, inventory' },
    { id: 'aperio', head: 'aperiō', la: 'aperiō, aperīre, aperuī, apertum', pos: 'verb, 4th conj.', en: 'open, uncover', stress: 'a-PE-ri-ō · a-pe-RĪ-re', deriv: 'aperture; overt (via French ouvert)' },
    { id: 'servio', head: 'serviō', la: 'serviō, servīre, servīvī, servītum', pos: 'verb, 4th conj.', en: 'serve, be a slave to (+ dat.)', stress: 'SER-vi-ō · ser-VĪ-re', deriv: 'serve, service', note: 'From servus.' },
    { id: 'capio', head: 'capiō', la: 'capiō, capere, cēpī, captum', pos: 'verb, 3rd conj. (-iō)', en: 'take, capture, seize', stress: 'CA-pi-ō · CA-pe-re', deriv: 'capture, captive, capable' },
    { id: 'facio', head: 'faciō', la: 'faciō, facere, fēcī, factum', pos: 'verb, 3rd conj. (-iō)', en: 'make, do', stress: 'FA-ci-ō · FA-ce-re', deriv: 'fact, factory, -fy', note: 'Imperative fac. Passive fīō (Lecture XXXVII).' },
    { id: 'fugio', head: 'fugiō', la: 'fugiō, fugere, fūgī, fugitūrum', pos: 'verb, 3rd conj. (-iō)', en: 'flee, run away; avoid', stress: 'FU-gi-ō · FU-ge-re', deriv: 'fugitive, refuge', note: 'Compare fugō (Lecture VII), “put to flight”.' },
    { id: 'cupio', head: 'cupiō', la: 'cupiō, cupere, cupīvī, cupītum', pos: 'verb, 3rd conj. (-iō)', en: 'desire, long for', stress: 'CU-pi-ō · CU-pe-re', deriv: 'cupidity; Cupid' },
    { id: 'iacio', head: 'iaciō', la: 'iaciō, iacere, iēcī, iactum', pos: 'verb, 3rd conj. (-iō)', en: 'throw, hurl', stress: 'IA-ci-ō · IA-ce-re', deriv: 'eject, project', note: 'Ālea iacta est: the die is cast. Suetonius gives Caesar’s words at the Rubicon in Latin; Plutarch says he spoke them in Greek.' },
    { id: 'accipio', head: 'accipiō', la: 'accipiō, accipere, accēpī, acceptum', pos: 'verb, 3rd conj. (-iō)', en: 'receive, accept; hear, learn', stress: 'ac-CI-pi-ō · ac-CI-pe-re', deriv: 'accept', note: 'ad + capiō.' },
    { id: 'surgo', head: 'surgō', la: 'surgō, surgere, surrēxī, surrēctum', pos: 'verb, 3rd conj.', en: 'get up, rise', stress: 'SUR-gō · SUR-ge-re', deriv: 'surge, resurrection' },

    { id: 'vox', head: 'vōx', la: 'vōx, vōcis', g: 'f', pos: 'noun, 3rd decl.', en: 'voice; word', stress: 'VŌX · VŌ-cis', deriv: 'vocal, vowel' },
    { id: 'fur', head: 'fūr', la: 'fūr, fūris', g: 'm', pos: 'noun, 3rd decl.', en: 'thief', stress: 'FŪR · FŪ-ris', deriv: 'furtive' },
    { id: 'canis', head: 'canis', la: 'canis, canis', g: 'm', pos: 'noun, 3rd decl.', en: 'dog', stress: 'CA-nis', deriv: 'canine', note: 'Genitive plural canum (not an i-stem). Also feminine.' },
    { id: 'somnus', head: 'somnus', la: 'somnus, somnī', g: 'm', pos: 'noun, 2nd decl.', en: 'sleep', stress: 'SOM-nus', deriv: 'insomnia' },
    { id: 'lucerna', head: 'lucerna', la: 'lucerna, lucernae', g: 'f', pos: 'noun, 1st decl.', en: 'lamp', stress: 'lu-CER-na', note: 'From the root of lūx.' },
    { id: 'porta', head: 'porta', la: 'porta, portae', g: 'f', pos: 'noun, 1st decl.', en: 'gate, door', stress: 'POR-ta', deriv: 'portal; Pforte' },
    { id: 'saccus', head: 'saccus', la: 'saccus, saccī', g: 'm', pos: 'noun, 2nd decl.', en: 'sack, bag', stress: 'SAC-cus', deriv: 'sack; Sack', note: 'A Greek loan, ultimately Semitic.' },
    { id: 'ver', head: 'vēr', la: 'vēr, vēris', g: 'n', pos: 'noun, 3rd decl.', en: 'spring', stress: 'VĒR · VĒ-ris', deriv: 'vernal' },

    { id: 'quare', head: 'quārē', la: 'quārē', pos: 'adverb', en: 'why? for what reason?; therefore', stress: 'QUĀ-rē', note: 'quā rē: “by what thing”.' },
    { id: 'fortasse', head: 'fortasse', la: 'fortasse', pos: 'adverb', en: 'perhaps', stress: 'for-TAS-se' },
    { id: 'subito', head: 'subitō', la: 'subitō', pos: 'adverb', en: 'suddenly', stress: 'SU-bi-tō', deriv: 'subito (music)' },
    { id: 'ecce', head: 'ecce', la: 'ecce', pos: 'interjection', en: 'look! behold! here is', stress: 'EC-ce', deriv: 'ecco (Italian)' },
    { id: 'adsum', head: 'adsum', la: 'adsum, adesse, adfuī', pos: 'verb, irregular', en: 'be present, be here', stress: 'AD-sum · ad-ES-se', note: 'ad + sum: conjugated like sum.' }
  ],

  grammarCards: [
    { id: 'g11-pp', front: 'audiō and capiō: principal parts', back: 'audiō, audīre, audīvī, audītum; capiō, capere, cēpī, captum' },
    { id: 'g11-recog', front: '-iō, -īre vs -iō, -ere', back: '4th conjugation (audiō, audīre) vs 3rd -iō (capiō, capere)' },
    { id: 'g11-pres-a', front: 'audiō: present', back: 'audiō, audīs, audit, audīmus, audītis, audiunt' },
    { id: 'g11-pres-c', front: 'capiō: present', back: 'capiō, capis, capit, capimus, capitis, capiunt' },
    { id: 'g11-impf', front: 'Imperfect of audiō and capiō', back: 'audiēbam …; capiēbam … (-iēbā-)' },
    { id: 'g11-fut', front: 'Future of audiō and capiō', back: 'audiam, audiēs, audiet …; capiam, capiēs, capiet …' },
    { id: 'g11-trap', front: 'audiunt vs audient', back: 'audiunt: they hear (present); audient: they will hear (future)' },
    { id: 'g11-imp', front: 'Imperatives of audiō, capiō, faciō', back: 'audī, audīte; cape, capite; fac, facite' },
    { id: 'g11-fut-rule', front: 'Which conjugations have the future in -am, -ēs?', back: '3rd, 3rd -iō and 4th (1st and 2nd use -bō)' },
    { id: 'g11-facio', front: 'faciō: principal parts', back: 'faciō, facere, fēcī, factum' },
    { id: 'g11-fugio', front: 'fugiō: principal parts', back: 'fugiō, fugere, fūgī, fugitūrum' },
    { id: 'g11-venio', front: 'veniō: principal parts', back: 'veniō, venīre, vēnī, ventum' },
    { id: 'g11-sentio', front: 'sentiō: principal parts', back: 'sentiō, sentīre, sēnsī, sēnsum' },
    { id: 'g11-stress', front: 'Stress of audīmus and capimus', back: 'au-DĪ-mus (long ī); CA-pi-mus' },
    { id: 'g11-catullus', front: 'Ōdī et amō. quārē id faciam, fortasse requīris.', back: 'I hate and I love. Why I do so, perhaps you ask. (Catullus 85)' },
    { id: 'g11-catullus2', front: 'nesciō, sed fierī sentiō et excrucior.', back: 'I don’t know, but I feel it happen, and I am tortured. (Catullus 85)' },
    { id: 'g11-lesbia', front: 'Lesbia', back: 'Catullus’ name for his beloved; traditionally Clodia Metelli (after Apuleius).' },
    { id: 'g11-fugo', front: 'fugiō vs fugō', back: 'fugiō, fugere: flee; fugō, fugāre: put to flight' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">audiunt</span> means:', options: ['they hear', 'they will hear', 'they were hearing', 'hear! (pl.)'], answer: 0, explain: '-iunt: present 3rd plural.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">capiet</span> means:', options: ['he will take', 'he takes', 'he was taking', 'they take'], answer: 0, explain: 'e in the ending: future.' },
    { id: 'e3', type: 'mc', prompt: 'Which verb is fourth conjugation?', options: ['veniō, venīre', 'capiō, capere', 'faciō, facere', 'regō, regere'], answer: 0, explain: '-iō, -īre.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">dormiēbāmus</span>:', options: ['we were sleeping', 'we shall sleep', 'we sleep', 'they were sleeping'], answer: 0, explain: '-iēbā-: imperfect; -mus: we.' },
    { id: 'e5', type: 'mc', prompt: 'Singular imperative of <span class="la">faciō</span>:', options: ['fac', 'face', 'facī', 'faciē'], answer: 0, explain: 'One of the short imperatives.' },
    { id: 'e6', type: 'mc', prompt: 'Which future is formed with <span class="la">-bō</span>?', options: ['amō', 'audiō', 'capiō', 'regō'], answer: 0, explain: 'Only the 1st and 2nd conjugations.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Puerī in cubiculō dorm___.</span>', hint: 'are sleeping', answers: ['iunt'], full: 'Puerī in cubiculō dormiunt.', explain: '4th conjugation, 3rd plural: -iunt.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Vōcem amīcī aud___.</span>', hint: 'I hear', answers: ['iō', 'io'], full: 'Vōcem amīcī audiō.', explain: '1st singular.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Crās Lūcius ven___.</span>', hint: 'will come', answers: ['iet'], full: 'Crās Lūcius veniet.', explain: 'Future, 3rd singular: -iet.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Mīlitēs urbem cap___.</span>', hint: 'will capture', answers: ['ient'], full: 'Mīlitēs urbem capient.', explain: 'Future, 3rd plural: -ient.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Fūrēs fug___.</span>', hint: 'were fleeing', answers: ['iēbant', 'iebant'], full: 'Fūrēs fugiēbant.', explain: 'Imperfect: -iēbant.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Puerī, aud___ patrem!</span>', hint: 'listen to! (pl.)', answers: ['īte', 'ite'], full: 'Puerī, audīte patrem!', explain: 'Plural imperative: -īte.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the present and future of <span class="la">audiō</span>.', headers: ['Present', 'Future'], rows: [
      { label: '1st sg.', answers: ['audiō', 'audiam'] },
      { label: '2nd sg.', answers: ['audīs', 'audiēs'] },
      { label: '3rd sg.', answers: ['audit', 'audiet'] },
      { label: '1st pl.', answers: ['audīmus', 'audiēmus'] },
      { label: '2nd pl.', answers: ['audītis', 'audiētis'] },
      { label: '3rd pl.', answers: ['audiunt', 'audient'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the present and imperfect of <span class="la">capiō</span>.', headers: ['Present', 'Imperfect'], rows: [
      { label: '1st sg.', answers: ['capiō', 'capiēbam'] },
      { label: '2nd sg.', answers: ['capis', 'capiēbās'] },
      { label: '3rd sg.', answers: ['capit', 'capiēbat'] },
      { label: '1st pl.', answers: ['capimus', 'capiēbāmus'] },
      { label: '2nd pl.', answers: ['capitis', 'capiēbātis'] },
      { label: '3rd pl.', answers: ['capiunt', 'capiēbant'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each infinitive to its conjugation.', pairs: [
      ['amāre', '1st'], ['monēre', '2nd'], ['regere', '3rd'], ['capere', '3rd -iō'], ['audīre', '4th']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Quīntus vōcem in āreā audit.', tokens: ['Quintus', 'hears', 'a voice', 'in the yard'], explain: 'audit: present, 3rd singular.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Fūrēs pecūniam capient et fugient.', model: 'The thieves will take the money and flee.', accepted: ['thieves will take money and flee', 'thieves will take money and run away', 'thieves will seize money and flee', 'thieves will steal money and flee', 'thieves will take money and will flee', 'thieves will capture money and flee', 'thieves will take money and escape'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Nesciō, sed sentiō.', model: 'I don’t know, but I feel (it).', accepted: ['i do not know but i feel', 'i don’t know but i feel', 'i dont know but i feel', 'i do not know but i feel it', 'i don’t know but i feel it', 'i dont know but i feel it', 'i know not but i feel', 'i do not know but i sense it'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Venīte et audīte!', model: 'Come and listen!', accepted: ['come and listen', 'come and hear'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'We shall come tomorrow.', model: 'Crās veniēmus.', accepted: ['crās veniēmus'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'The boys are sleeping.', model: 'Puerī dormiunt.', accepted: ['puerī dormiunt'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'Do it! (sg.)', model: 'Fac!', accepted: ['fac', 'fac id', 'id fac'] },
    { id: 'e23', type: 'mc', prompt: 'Who said that Lesbia’s real name was Clodia?', options: ['Apuleius, in the 2nd century AD', 'Catullus himself', 'Cicero', 'Sappho'], answer: 0, explain: 'The identification rests on this later statement.' },
    { id: 'e24', type: 'mc', prompt: 'In Catullus 85, how many verbs are in the two lines?', options: ['eight', 'four', 'two', 'twelve'], answer: 0, explain: 'ōdī, amō, faciam, requīris, nesciō, fierī, sentiō, excrucior.' },
    { id: 'e25', type: 'mc', prompt: 'An <span class="la">audītōrium</span> was:', options: ['a hall for readings or lectures', 'a theatre for gladiators', 'a law court', 'a temple'], answer: 0, explain: 'From audiō: a place for listening.' }
  ],

  reading: {
    title: 'Vōx in nocte',
    note: 'Original passage: a voice in the night at Marcus’s farm. Tap any word.',
    text: 'Nocte puerī in cubiculō dormiēbant. Subitō Quīntus vōcem audit. “Gāī,” inquit, “audīsne? Aliquis in āreā est!” Gāius nihil audiēbat et dormīre cupiēbat. Sed iterum vōx veniēbat, et canis lātrābat. Puerī timēbant: “Fortasse fūrēs veniunt et pecūniam patris capient!” Quīntus ad patrem fugit. Mārcus surgit, lucernam capit, et cum fīliīs ad portam venit. “Quis es?” clāmat. Ē tenebrīs vōx respondet: “Amīcus, nōn fūr! Ego sum, Lūcius! Ē Graeciā veniō et dōna habeō!” Puerī portam aperiunt et Lūcium inveniunt. Lūcius rīdet: “In epistulā meā scrībēbam: post hiemem veniam. Nunc vēr est, et ego adsum.” Tum omnēs in ātrium veniunt. Lūcius dōna ē saccō capit: librōs Graecōs prō puerīs, vīnum bonum prō Mārcō. “Crās,” inquit, “fābulās multās audiētis. Nunc autem dormīre cupiō.”',
    translation: 'At night the boys were sleeping in their bedroom. Suddenly Quintus hears a voice. “Gaius,” he says, “do you hear? Someone is in the yard!” Gaius heard nothing and wanted to sleep. But again the voice came, and the dog was barking. The boys were afraid: “Perhaps thieves are coming and will take father’s money!” Quintus runs to his father. Marcus gets up, takes a lamp and comes to the gate with his sons. “Who are you?” he shouts. Out of the darkness a voice answers: “A friend, not a thief! It’s me, Lucius! I’m coming from Greece and I have presents!” The boys open the gate and find Lucius. Lucius laughs: “In my letter I wrote: I shall come after the winter. Now it is spring, and here I am.” Then they all come into the atrium. Lucius takes the presents out of his sack: Greek books for the boys, good wine for Marcus. “Tomorrow,” he says, “you will hear many stories. But now I want to sleep.”',
    notes: [
      { ref: 'Nocte puerī in cubiculō dormiēbant', html: '<span class="la">nocte</span>: “at night”, ablative of time of <span class="la">nox, noctis</span> (Lecture XVI). <span class="la">dormiēbant</span>: imperfect of a fourth-conjugation verb, setting the scene.' },
      { ref: 'Subitō Quīntus vōcem audit', html: 'The tense changes to the present: the <em>historic present</em>, used in vivid narrative for sudden events, as in German and English storytelling (“suddenly he hears …”).' },
      { ref: 'audīsne? Aliquis in āreā est!', html: '<span class="la">audīs</span> + <span class="la">-ne</span>: “do you hear?”. <span class="la">aliquis</span>: “someone”, an indefinite pronoun (<span class="la">ali-</span> + <span class="la">quis</span>). <span class="la">ārea</span>: the open yard of a farm.' },
      { ref: 'dormīre cupiēbat', html: 'Complementary infinitive (Lecture VI) with the <span class="la">-iō</span> verb <span class="la">cupiō</span>.' },
      { ref: 'pecūniam patris capient', html: 'Future of <span class="la">capiō</span>: <span class="la">-ient</span>.' },
      { ref: 'Quīntus ad patrem fugit', html: '<span class="la">fugit</span>: present of <span class="la">fugiō</span>, “runs (away) to”. Do not confuse with <span class="la">fugat</span>, “puts to flight”.' },
      { ref: 'Quis es?', html: '“Who are you?” <span class="la">quis</span>: interrogative pronoun.' },
      { ref: 'Ē tenebrīs vōx respondet', html: '<span class="la">ē</span> (before consonants) = <span class="la">ex</span>: “out of”. <span class="la">tenebrae, -ārum</span>: darkness, plural in form.' },
      { ref: 'Puerī portam aperiunt et Lūcium inveniunt', html: 'Two fourth-conjugation verbs in the 3rd plural: <span class="la">-iunt</span>.' },
      { ref: 'In epistulā meā scrībēbam: post hiemem veniam', html: 'A callback to Lecture IX, where Lucius wrote exactly this. <span class="la">veniam</span>: future, 1st singular.' },
      { ref: 'Nunc vēr est, et ego adsum', html: '<span class="la">adsum</span>: “I am here”, a compound of <span class="la">sum</span>.' },
      { ref: 'omnēs in ātrium veniunt', html: '<span class="la">omnēs</span>: “all”, a third-declension adjective (Lecture XVII). The <span class="la">ātrium</span> was the central hall of a Roman house.' }
    ],
    glosses: {
      'nocte': 'at night (abl. of nox)', 'puerī': 'nom. pl. of puer: boys', 'in': 'in (+ abl.); into (+ acc.)', 'cubiculō': 'abl. of cubiculum: bedroom', 'dormiēbant': 'impf. 3rd pl. of dormiō: were sleeping',
      'subitō': 'suddenly', 'quīntus': 'Quintus (nom.)', 'vōcem': 'acc. of vōx: voice', 'audit': '3rd sg. of audiō: hears', 'gāī': 'voc. of Gāius', 'inquit': 'says', 'audīsne': 'do you hear? (audīs + -ne)', 'aliquis': 'someone', 'āreā': 'abl. of ārea: yard', 'est': 'is',
      'gāius': 'Gaius (nom.)', 'nihil': 'nothing', 'audiēbat': 'impf. 3rd sg. of audiō: heard', 'et': 'and', 'dormīre': 'to sleep (inf.)', 'cupiēbat': 'impf. 3rd sg. of cupiō: wanted',
      'sed': 'but', 'iterum': 'again', 'vōx': 'voice (nom.)', 'veniēbat': 'impf. 3rd sg. of veniō: came', 'canis': 'dog (nom.)', 'lātrābat': 'impf. 3rd sg. of lātrō: was barking',
      'timēbant': 'impf. 3rd pl. of timeō: were afraid', 'fortasse': 'perhaps', 'fūrēs': 'nom. pl. of fūr: thieves', 'veniunt': '3rd pl. of veniō: are coming', 'pecūniam': 'acc. of pecūnia: money', 'patris': 'gen. of pater: of father', 'capient': 'fut. 3rd pl. of capiō: will take',
      'ad': 'to (+ acc.)', 'patrem': 'acc. of pater', 'fugit': '3rd sg. of fugiō: runs away', 'mārcus': 'Marcus (nom.)', 'surgit': '3rd sg. of surgō: gets up', 'lucernam': 'acc. of lucerna: lamp', 'capit': '3rd sg. of capiō: takes', 'cum': 'with (+ abl.)', 'fīliīs': 'abl. pl. of fīlius: sons', 'portam': 'acc. of porta: gate', 'venit': '3rd sg. of veniō: comes',
      'quis': 'who?', 'es': 'you are', 'clāmat': '3rd sg. of clāmō: shouts', 'ē': 'out of (+ abl.)', 'tenebrīs': 'abl. of tenebrae: darkness', 'respondet': '3rd sg. of respondeō: answers', 'amīcus': 'friend (nom.)', 'nōn': 'not', 'fūr': 'thief (nom.)', 'ego': 'I', 'sum': 'I am', 'lūcius': 'Lucius (nom.)', 'graeciā': 'abl. of Graecia: Greece', 'veniō': 'I come', 'dōna': 'acc. pl. of dōnum: gifts', 'habeō': 'I have',
      'aperiunt': '3rd pl. of aperiō: open', 'lūcium': 'acc. of Lūcius', 'inveniunt': '3rd pl. of inveniō: find', 'rīdet': '3rd sg. of rīdeō: laughs', 'epistulā': 'abl. of epistula: letter', 'meā': 'abl. f. of meus: my', 'scrībēbam': 'impf. 1st sg. of scrībō: I wrote', 'post': 'after (+ acc.)', 'hiemem': 'acc. of hiems: winter', 'veniam': 'fut. 1st sg. of veniō: I shall come',
      'nunc': 'now', 'vēr': 'spring (nom.)', 'adsum': 'I am here', 'tum': 'then', 'omnēs': 'all (nom. pl.)', 'ātrium': 'acc. of ātrium: atrium, hall', 'saccō': 'abl. of saccus: sack', 'librōs': 'acc. pl. of liber: books', 'graecōs': 'acc. pl. m. of Graecus: Greek', 'prō': 'for (+ abl.)', 'puerīs': 'abl. pl. of puer: boys', 'vīnum': 'wine (acc.)', 'bonum': 'acc. n. of bonus: good', 'mārcō': 'abl. of Mārcus',
      'crās': 'tomorrow', 'fābulās': 'acc. pl. of fābula: stories', 'multās': 'acc. pl. f. of multus: many', 'audiētis': 'fut. 2nd pl. of audiō: you will hear', 'autem': 'but, however', 'cupiō': 'I want'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What does Quintus hear?', options: ['A voice in the yard', 'Thunder', 'His father calling', 'The boys’ dog only'], answer: 0, explain: 'Quīntus vōcem audit … Aliquis in āreā est!' },
      { id: 'r2', type: 'mc', prompt: 'What do the boys fear?', options: ['That thieves will take their father’s money', 'That the house is on fire', 'That Lucius has died', 'That the dog will bite'], answer: 0, explain: 'Fortasse fūrēs veniunt et pecūniam patris capient!' },
      { id: 'r3', type: 'mc', prompt: 'Who is at the gate?', options: ['Lucius, back from Greece', 'A thief', 'A soldier', 'A Greek merchant'], answer: 0, explain: 'Ego sum, Lūcius! Ē Graeciā veniō.' },
      { id: 'r4', type: 'mc', prompt: 'What presents does Lucius bring?', options: ['Greek books and good wine', 'Money and a ship', 'A dog and a lamp', 'Nothing'], answer: 0, explain: 'librōs Graecōs prō puerīs, vīnum bonum prō Mārcō.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">sentiēmus</span>:', options: ['we shall feel', 'we feel', 'we were feeling', 'they will feel'], answer: 0, explain: 'Future, 1st plural.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">faciunt</span>:', options: ['they make', 'they will make', 'they were making', 'make! (pl.)'], answer: 0, explain: 'Present 3rd plural of a -iō verb.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">capis</span> is:', options: ['present, 2nd sg.', 'future, 2nd sg.', 'imperfect', 'imperative'], answer: 0, explain: 'Like regis: present.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Hostēs fug___.</span>', hint: 'are fleeing', answers: ['iunt'], full: 'Hostēs fugiunt.', explain: '-iō verb, 3rd plural: -iunt.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Mox amīcōs inven___.</span>', hint: 'we shall find', answers: ['iēmus', 'iemus'], full: 'Mox amīcōs inveniēmus.', explain: 'Future, 1st plural: -iēmus.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Canis in āreā dormiēbat.', model: 'The dog was sleeping in the yard.', accepted: ['dog was sleeping in yard', 'dog slept in yard', 'dog was sleeping in courtyard', 'dog used to sleep in yard'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'Listen! (sg.)', model: 'Audī!', accepted: ['audī'] },
      { id: 't8', type: 'mc', prompt: 'The principal parts <span class="la">capiō, capere, cēpī, captum</span> show a verb of the:', options: ['3rd conjugation (-iō)', '4th conjugation', '2nd conjugation', '1st conjugation'], answer: 0, explain: '-iō with a short -ere.' },
      { id: 't9', type: 'mc', prompt: 'Imperfect 1st sg. of <span class="la">veniō</span>:', options: ['veniēbam', 'venībam', 'veniam', 'venēbam'], answer: 0, explain: '-iēbam.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">Ōdī et amō</span> is by:', options: ['Catullus', 'Horace', 'Virgil', 'Cicero'], answer: 0, explain: 'Catullus 85.' },
      { id: 't11', type: 'mc', prompt: 'Which pair contrasts present and future?', options: ['audiunt / audient', 'audit / audīs', 'capit / capis', 'venit / venīmus'], answer: 0, explain: 'They hear / they will hear.' }
    ]
  },

  reference: [
    { title: 'audiō and capiō', headers: ['', 'audiō pres.', 'audiō fut.', 'capiō pres.', 'capiō fut.'], rows: [
      ['1st sg.', 'audiō', 'audiam', 'capiō', 'capiam'], ['2nd sg.', 'audīs', 'audiēs', 'capis', 'capiēs'], ['3rd sg.', 'audit', 'audiet', 'capit', 'capiet'], ['1st pl.', 'audīmus', 'audiēmus', 'capimus', 'capiēmus'], ['2nd pl.', 'audītis', 'audiētis', 'capitis', 'capiētis'], ['3rd pl.', 'audiunt', 'audient', 'capiunt', 'capient']
    ] },
    { title: 'The four conjugations', headers: ['', '1st', '2nd', '3rd', '3rd -iō', '4th'], rows: [
      ['Infinitive', 'amāre', 'monēre', 'regere', 'capere', 'audīre'], ['Pres. 3rd pl.', 'amant', 'monent', 'regunt', 'capiunt', 'audiunt'], ['Impf. 1st sg.', 'amābam', 'monēbam', 'regēbam', 'capiēbam', 'audiēbam'], ['Fut. 1st sg.', 'amābō', 'monēbō', 'regam', 'capiam', 'audiam'], ['Fut. 3rd sg.', 'amābit', 'monēbit', 'reget', 'capiet', 'audiet'], ['Imperative', 'amā', 'monē', 'rege', 'cape', 'audī']
    ] },
    { title: 'Common -iō verbs (3rd conj.)', headers: ['Verb', 'Perfect', 'Meaning'], rows: [['capiō', 'cēpī', 'take'], ['faciō', 'fēcī', 'make, do'], ['fugiō', 'fūgī', 'flee'], ['iaciō', 'iēcī', 'throw'], ['cupiō', 'cupīvī', 'desire'], ['accipiō', 'accēpī', 'receive']] }
  ]
});
