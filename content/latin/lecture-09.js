/*
 * Latin — Lecture IX: the third conjugation: present, imperfect, future, imperative.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-09',
  number: 9,
  title: 'Carpe diem',
  subtitle: 'The third conjugation: present, imperfect, future and imperative; telling the conjugations apart',
  minutes: 60,

  intro: `
    <p>Latin has four conjugations. You know the first (<span class="la">amō, amāre</span>) and the second (<span class="la">moneō, monēre</span>); both are regular and predictable. The <strong>third conjugation</strong> is the largest and the most important, and many of the commonest verbs belong to it: <span class="la">regō</span> “rule”, <span class="la">dūcō</span> “lead”, <span class="la">dīcō</span> “say”, <span class="la">scrībō</span> “write”, <span class="la">legō</span> “read”, <span class="la">mittō</span> “send”, <span class="la">agō</span> “do, drive”, <span class="la">vincō</span> “conquer”.</p>
    <p>It differs from the first two in three ways that matter for reading. Its infinitive ends in a short <span class="la">-ere</span> (<span class="la">regere</span>, stressed on the first syllable), easily confused with the long <span class="la">-ēre</span> of <span class="la">monēre</span>. Its present has a changing vowel (<span class="la">regō, regis, regit, regunt</span>). And its future is formed quite differently: not with <span class="la">-bō</span>, but with <span class="la">-am, -ēs, -et</span> (<span class="la">regam, regēs, reget</span>). That last point causes most of the mistakes, because <span class="la">reget</span> “he will rule” looks like <span class="la">monet</span> “he warns”.</p>
    <p>By the end you should be able to recognise a third-conjugation verb from its principal parts, form its present, imperfect, future and imperative, and tell a third-conjugation future from a second-conjugation present at a glance.</p>
  `,

  background: [
    {
      title: 'Carpe diem: Horace and Epicurus',
      html: `
        <p>Quintus Horatius Flaccus (65–8 BC), the son of a freedman from Venusia in southern Italy, became one of the two great poets of the Augustan age, with Virgil. His <em>Odes</em>, four books of short lyric poems in Greek metres, were published from 23 BC onwards.</p>
        <p>Ode 1.11 is eight lines addressed to a woman, Leuconoe, who is consulting astrologers about how long she and the poet will live. Horace tells her to stop: nobody can know, the winter now raging may be the last, so be wise, strain the wine, cut back long hopes, and <span class="la">carpe diem</span>. The thought is Epicurean: the Greek philosopher Epicurus (341–270 BC) taught that the good life is a calm enjoyment of the present, free from fear of death and the gods.</p>
        <p><span class="la">carpō</span> means “pluck, pick, gather”, as one picks fruit or flowers. “Seize the day” is a popular translation but stronger than the Latin; Horace’s image is of harvesting the day while it is ripe, not of grabbing it.</p>
      `
    },
    {
      title: 'Roman letters',
      html: `
        <p>Letters (<span class="la">epistulae</span>) were a central form of Roman writing, from business notes to literature. Over 900 of Cicero’s letters survive, many written in haste to his friend Atticus; Seneca and Pliny the Younger later wrote letters meant for publication. The conventions were fixed: the sender’s name in the nominative, the recipient’s in the dative, and the greeting <span class="la">salūtem dīcit</span>, “says greeting”, often abbreviated <span class="la">S. D.</span> or simply <span class="la">S.</span>; at the end, <span class="la">valē</span> (Lecture II).</p>
        <p>Everyday letters were written on wooden tablets or papyrus. At Vindolanda, a fort just south of Hadrian’s Wall, hundreds of thin wooden leaf-tablets written in ink around AD 100 have survived in waterlogged ground. Among them is an invitation from Claudia Severa to her friend Sulpicia Lepidina to a birthday party, with greetings added in Claudia’s own hand: one of the earliest known examples of a woman’s handwriting in Latin.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Vindolanda_tablet_291.jpg/960px-Vindolanda_tablet_291.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Vindolanda_tablet_291.jpg/500px-Vindolanda_tablet_291.jpg|https://upload.wikimedia.org/wikipedia/commons/0/08/Vindolanda_tablet_291.jpg" alt="Thin wooden tablet with lines of faded Roman cursive handwriting in ink"><figcaption>Vindolanda tablet 291 (British Museum): Claudia Severa invites Sulpicia Lepidina to her birthday, around AD 100. The last lines, in a different hand, are thought to be Claudia’s own. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Vindolanda_tablet_291.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Why the third conjugation is different',
      html: `
        <p>The first and second conjugations have a long vowel at the end of the stem (<span class="la">amā-, monē-</span>) which appears in almost every form. The third conjugation has a consonant stem (<span class="la">reg-, dūc-, dīc-</span>) to which a short connecting vowel is added: <span class="la">e</span> or <span class="la">o</span> in early Latin, weakened later to <span class="la">i</span> or <span class="la">u</span>. That is why the vowel changes from form to form: <span class="la">reg-i-s, reg-i-t, reg-u-nt</span>.</p>
        <p>This type, with a short connecting vowel, is the oldest Indo-European verb type, and it is also the type of most Germanic strong verbs. German <em>geben, gibst, gibt</em> preserves a change of the same origin, though by different sound laws. Many third-conjugation verbs also form their perfects without the <span class="la">-v-</span> of <span class="la">amāvī</span>: <span class="la">rēxī, dūxī, lēgī, vīcī</span>. You will need the principal parts for them from Lecture XIII onwards, so learn them now.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/View_of_the_stone_pavement_of_the_Appian_Way_(Veduta_dell'antica_Via_Appia),_from_the_series_'Le_Antichit%C3%A0_Romane'_MET_DP831895.jpg/960px-View_of_the_stone_pavement_of_the_Appian_Way_(Veduta_dell'antica_Via_Appia),_from_the_series_'Le_Antichit%C3%A0_Romane'_MET_DP831895.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/View_of_the_stone_pavement_of_the_Appian_Way_(Veduta_dell'antica_Via_Appia),_from_the_series_'Le_Antichit%C3%A0_Romane'_MET_DP831895.jpg/500px-View_of_the_stone_pavement_of_the_Appian_Way_(Veduta_dell'antica_Via_Appia),_from_the_series_'Le_Antichit%C3%A0_Romane'_MET_DP831895.jpg|https://upload.wikimedia.org/wikipedia/commons/6/68/View_of_the_stone_pavement_of_the_Appian_Way_(Veduta_dell'antica_Via_Appia),_from_the_series_'Le_Antichit%C3%A0_Romane'_MET_DP831895.jpg" alt="Eighteenth-century etching of a paved Roman road lined with ruined tombs"><figcaption>The Via Appia, in an etching by Giovanni Battista Piranesi from <em>Le Antichità Romane</em> (1756; Metropolitan Museum of Art). Roman roads were built to <span class="la">dūcere</span> armies quickly; the word <span class="la">dux</span>, leader, comes from the same verb. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:View_of_the_stone_pavement_of_the_Appian_Way_(Veduta_dell'antica_Via_Appia),_from_the_series_'Le_Antichit%C3%A0_Romane'_MET_DP831895.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Carpe diem, quam minimum crēdula posterō.</p>
    <p>“Pluck the day, trusting as little as possible in tomorrow.” Horace, <em>Odes</em> 1.11.8, the last line of the poem to Leuconoe.</p>
    <p><span class="la">carpe</span> is the imperative of the third-conjugation verb <span class="la">carpō, carpere</span>, “pluck”. <span class="la">diem</span> is the accusative of <span class="la">diēs</span>, “day” (fifth declension, Lecture XXIII). <span class="la">crēdula</span>, “trusting”, is feminine because the poem addresses a woman; <span class="la">posterō</span> (supply <span class="la">diēī</span>) is dative, “to the following day”. <span class="la">quam minimum</span>: “as little as possible”.</p>
  `,

  pronunciation: `
    <h3>-ere or -ēre?</h3>
    <p>The infinitive alone tells you the conjugation, but only if you know the vowel length, and the length moves the stress:</p>
    <ul>
      <li>second conjugation: <span class="la">mo-NĒ-re, vi-DĒ-re, ha-BĒ-re</span> (long ē, stressed)</li>
      <li>third conjugation: <span class="la">RE-ge-re, DŪ-ce-re, MIT-te-re</span> (short e, unstressed)</li>
    </ul>
    <p>Read aloud with the right stress and you will hear the difference. In dictionaries, look for the macron.</p>
    <h3>Long and short stems</h3>
    <p>Some stems have a long vowel throughout the present: <span class="la">dūcō, dīcō, scrībō</span>. Others are short: <span class="la">regō, legō, agō</span>. The perfect often lengthens a short vowel: <span class="la">legō</span> but <span class="la">lēgī</span>, <span class="la">agō</span> but <span class="la">ēgī</span>, <span class="la">vincō</span> but <span class="la">vīcī</span>.</p>
    <h3>The future -am, -ēs, -et</h3>
    <p>The <span class="la">ē</span> of the future is long and takes the stress where it can: <span class="la">re-GĒ-mus, re-GĒ-tis</span>, against the present <span class="la">RE-gi-mus, RE-gi-tis</span>. The stress alone distinguishes <span class="la">regēmus</span> from <span class="la">regimus</span>.</p>
  `,

  grammar: [
    {
      title: '1. Principal parts',
      html: `
        <p>A third-conjugation verb is recognised by its second principal part, the infinitive in short <span class="la">-ere</span>. The third and fourth principal parts (perfect and supine) are irregular and must be learned:</p>
        <ul>
          <li><span class="la">regō, regere, rēxī, rēctum</span>: rule</li>
          <li><span class="la">dūcō, dūcere, dūxī, ductum</span>: lead</li>
          <li><span class="la">dīcō, dīcere, dīxī, dictum</span>: say</li>
          <li><span class="la">legō, legere, lēgī, lēctum</span>: read; choose, gather</li>
        </ul>
        <p>The present stem is the infinitive minus <span class="la">-ere</span>: <span class="la">reg-, dūc-, dīc-, leg-</span>.</p>
      `
    },
    {
      title: '2. The present',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>regō</th><th>Ending</th><th>compare moneō</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">regō</td><td class="la">-ō</td><td class="la">moneō</td></tr>
            <tr><th>2nd sg.</th><td class="la">regis</td><td class="la">-is</td><td class="la">monēs</td></tr>
            <tr><th>3rd sg.</th><td class="la">regit</td><td class="la">-it</td><td class="la">monet</td></tr>
            <tr><th>1st pl.</th><td class="la">regimus</td><td class="la">-imus</td><td class="la">monēmus</td></tr>
            <tr><th>2nd pl.</th><td class="la">regitis</td><td class="la">-itis</td><td class="la">monētis</td></tr>
            <tr><th>3rd pl.</th><td class="la">regunt</td><td class="la">-unt</td><td class="la">monent</td></tr>
          </tbody>
        </table></div>
        <p>The connecting vowel is <span class="la">i</span>, except <span class="la">u</span> in the third person plural (and no vowel in the first person singular). The personal endings are the same as in every conjugation.</p>
      `
    },
    {
      title: '3. The imperfect',
      html: `
        <p>The imperfect adds <span class="la">-ēbā-</span> to the stem, with the familiar endings: <span class="la">regēbam, regēbās, regēbat, regēbāmus, regēbātis, regēbant</span>.</p>
        <p>It looks exactly like a second-conjugation imperfect (<span class="la">monēbam</span>), so it causes no trouble in reading: <span class="la">-bā-</span> still means imperfect.</p>
      `
    },
    {
      title: '4. The future: -am, -ēs, -et',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>regō future</th><th>Ending</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">regam</td><td class="la">-am</td></tr>
            <tr><th>2nd sg.</th><td class="la">regēs</td><td class="la">-ēs</td></tr>
            <tr><th>3rd sg.</th><td class="la">reget</td><td class="la">-et</td></tr>
            <tr><th>1st pl.</th><td class="la">regēmus</td><td class="la">-ēmus</td></tr>
            <tr><th>2nd pl.</th><td class="la">regētis</td><td class="la">-ētis</td></tr>
            <tr><th>3rd pl.</th><td class="la">regent</td><td class="la">-ent</td></tr>
          </tbody>
        </table></div>
        <p>There is no <span class="la">-b-</span>. The first person has <span class="la">a</span>; every other form has <span class="la">e</span> (long except before final <span class="la">-t</span> and <span class="la">-nt</span>).</p>
        <p>A useful rule of thumb for the third conjugation: <strong>an <span class="la">e</span> in the ending means future, an <span class="la">i</span> means present</strong>: <span class="la">reget</span> “he will rule”, <span class="la">regit</span> “he rules”. For the second conjugation, the <span class="la">e</span> belongs to the stem and means nothing about time: <span class="la">monet</span> “he warns”.</p>
      `
    },
    {
      title: '5. The imperative',
      html: `
        <p>The singular imperative is the stem + <span class="la">-e</span>; the plural is stem + <span class="la">-ite</span>: <span class="la">rege, regite</span>; <span class="la">mitte, mittite</span>; <span class="la">carpe</span> (Horace).</p>
        <p>Four common verbs drop the <span class="la">-e</span> in the singular: <span class="la">dīc</span> (say!), <span class="la">dūc</span> (lead!), <span class="la">fac</span> (do!, from <span class="la">faciō</span>, Lecture XI), <span class="la">fer</span> (carry!, from <span class="la">ferō</span>, Lecture XXXII). The plurals are regular: <span class="la">dīcite, dūcite, facite</span>, and the irregular <span class="la">ferte</span>.</p>
        <p>Negative commands use <span class="la">nōlī / nōlīte</span> + infinitive, as in Lecture II: <span class="la">nōlī dīcere</span>, “don’t say”.</p>
      `
    },
    {
      title: '6. Which conjugation? A checklist',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Form</th><th>Conjugation and tense</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td class="la">monet</td><td>2nd, present</td><td>he warns</td></tr>
            <tr><td class="la">regit</td><td>3rd, present</td><td>he rules</td></tr>
            <tr><td class="la">reget</td><td>3rd, future</td><td>he will rule</td></tr>
            <tr><td class="la">monēbit</td><td>2nd, future</td><td>he will warn</td></tr>
            <tr><td class="la">regēbat</td><td>3rd, imperfect</td><td>he was ruling</td></tr>
            <tr><td class="la">monēbat</td><td>2nd, imperfect</td><td>he was warning</td></tr>
          </tbody>
        </table></div>
        <p>The checklist only works if you know which conjugation the verb belongs to, which brings us back to learning principal parts. When you meet an unfamiliar form ending in <span class="la">-et</span> or <span class="la">-ent</span>, look up the infinitive before you decide on the tense.</p>
      `
    }
  ],

  vocab: [
    { id: 'rego', head: 'regō', la: 'regō, regere, rēxī, rēctum', pos: 'verb, 3rd conj.', en: 'rule, guide, direct', stress: 'RE-gō · RE-ge-re', deriv: 'regent, regime, rector; regieren', note: 'Related to rēx, rēgis.' },
    { id: 'duco', head: 'dūcō', la: 'dūcō, dūcere, dūxī, ductum', pos: 'verb, 3rd conj.', en: 'lead; consider', stress: 'DŪ-cō · DŪ-ce-re', deriv: 'duct, conduct, educate', note: 'Imperative dūc. German ziehen is a cognate.' },
    { id: 'dico', head: 'dīcō', la: 'dīcō, dīcere, dīxī, dictum', pos: 'verb, 3rd conj.', en: 'say, speak, tell', stress: 'DĪ-cō · DĪ-ce-re', deriv: 'diction, dictate; Diktat', note: 'Imperative dīc. German zeigen is a cognate.' },
    { id: 'scribo', head: 'scrībō', la: 'scrībō, scrībere, scrīpsī, scrīptum', pos: 'verb, 3rd conj.', en: 'write', stress: 'SCRĪ-bō · SCRĪ-be-re', deriv: 'scribe, script; schreiben (a loan)' },
    { id: 'lego', head: 'legō', la: 'legō, legere, lēgī, lēctum', pos: 'verb, 3rd conj.', en: 'read; choose; gather', stress: 'LE-gō · LE-ge-re', deriv: 'lecture, legible, elect', note: 'Reading as “gathering” the letters.' },
    { id: 'mitto', head: 'mittō', la: 'mittō, mittere, mīsī, missum', pos: 'verb, 3rd conj.', en: 'send, let go', stress: 'MIT-tō · MIT-te-re', deriv: 'mission, missile, transmit' },
    { id: 'ago', head: 'agō', la: 'agō, agere, ēgī, āctum', pos: 'verb, 3rd conj.', en: 'drive; do, act; spend (time)', stress: 'A-gō · A-ge-re', deriv: 'agent, act', note: 'grātiās agere: to give thanks; vītam agere: to live a life.' },
    { id: 'vinco', head: 'vincō', la: 'vincō, vincere, vīcī, victum', pos: 'verb, 3rd conj.', en: 'conquer, defeat', stress: 'VIN-cō · VIN-ce-re', deriv: 'victory, invincible', note: 'vīcī: Caesar’s vēnī, vīdī, vīcī.' },
    { id: 'vivo', head: 'vīvō', la: 'vīvō, vīvere, vīxī, vīctum', pos: 'verb, 3rd conj.', en: 'live, be alive', stress: 'VĪ-vō · VĪ-ve-re', deriv: 'vivid, survive' },
    { id: 'disco', head: 'discō', la: 'discō, discere, didicī', pos: 'verb, 3rd conj.', en: 'learn', stress: 'DIS-cō · DIS-ce-re', deriv: 'disciple, discipline', note: 'Reduplicated perfect didicī; no supine.' },
    { id: 'carpo', head: 'carpō', la: 'carpō, carpere, carpsī, carptum', pos: 'verb, 3rd conj.', en: 'pluck, pick, gather; criticise', stress: 'CAR-pō · CAR-pe-re', note: 'carpe diem. German Herbst is distantly related (the season of plucking).' },
    { id: 'emo', head: 'emō', la: 'emō, emere, ēmī, ēmptum', pos: 'verb, 3rd conj.', en: 'buy', stress: 'E-mō · E-me-re', deriv: 'redeem, exempt', note: 'Originally “take”.' },
    { id: 'vendo', head: 'vendō', la: 'vendō, vendere, vendidī, venditum', pos: 'verb, 3rd conj.', en: 'sell', stress: 'VEN-dō · VEN-de-re', deriv: 'vendor', note: 'From vēnum dare, “give for sale”.' },
    { id: 'cedo', head: 'cēdō', la: 'cēdō, cēdere, cessī, cessum', pos: 'verb, 3rd conj.', en: 'go, withdraw; yield', stress: 'CĒ-dō · CĒ-de-re', deriv: 'cede, proceed, cession', note: 'cēdāmus Amōrī (Lecture VII).' },
    { id: 'peto', head: 'petō', la: 'petō, petere, petīvī, petītum', pos: 'verb, 3rd conj.', en: 'seek, ask for; aim at, attack', stress: 'PE-tō · PE-te-re', deriv: 'petition, compete' },

    { id: 'epistula', head: 'epistula', la: 'epistula, epistulae', g: 'f', pos: 'noun, 1st decl.', en: 'letter', stress: 'e-PIS-tu-la', deriv: 'epistle', note: 'From Greek. Also epistola.' },
    { id: 'littera', head: 'littera', la: 'littera, litterae', g: 'f', pos: 'noun, 1st decl.', en: 'letter (of the alphabet); (pl.) letter, literature', stress: 'LIT-te-ra', deriv: 'letter, literal, literature' },
    { id: 'hora', head: 'hōra', la: 'hōra, hōrae', g: 'f', pos: 'noun, 1st decl.', en: 'hour', stress: 'HŌ-ra', deriv: 'hour; Uhr', note: 'German Uhr is borrowed from it.' },
    { id: 'vinum', head: 'vīnum', la: 'vīnum, vīnī', g: 'n', pos: 'noun, 2nd decl.', en: 'wine', stress: 'VĪ-num', deriv: 'wine; Wein (an early loan)' },
    { id: 'mercator', head: 'mercātor', la: 'mercātor, mercātōris', g: 'm', pos: 'noun, 3rd decl.', en: 'merchant, trader', stress: 'mer-CĀ-tor · mer-cā-TŌ-ris', deriv: 'mercantile', note: 'From merx, mercis f., goods.' },
    { id: 'ratio', head: 'ratiō', la: 'ratiō, ratiōnis', g: 'f', pos: 'noun, 3rd decl.', en: 'reason; account, calculation; method', stress: 'RA-ti-ō · ra-ti-Ō-nis', deriv: 'reason, ratio, rational' },
    { id: 'hiems', head: 'hiems', la: 'hiems, hiemis', g: 'f', pos: 'noun, 3rd decl.', en: 'winter; storm', stress: 'HI-ems · HI-e-mis', deriv: 'hibernate (from a related form)' },
    { id: 'arma', head: 'arma', la: 'arma, armōrum', g: 'n', pos: 'noun, 2nd decl., plural', en: 'arms, weapons', stress: 'AR-ma', deriv: 'arms, army', note: 'Arma virumque canō: the first words of the Aeneid.' },

    { id: 'posterus', head: 'posterus', la: 'posterus, postera, posterum', pos: 'adjective', en: 'following, next; (m. pl.) descendants', stress: 'POS-te-rus', deriv: 'posterity', note: 'From post.' },
    { id: 'credulus', head: 'crēdulus', la: 'crēdulus, crēdula, crēdulum', pos: 'adjective', en: 'trusting, credulous', stress: 'CRĒ-du-lus', deriv: 'credulous' },
    { id: 'minimum', head: 'minimum', la: 'minimum', pos: 'adverb', en: 'very little, least', stress: 'MI-ni-mum', note: 'quam minimum: as little as possible.' },
    { id: 'ego', head: 'ego', la: 'ego', pos: 'pronoun', en: 'I (emphatic)', stress: 'E-gō', note: 'Normally omitted; used for emphasis or contrast. The full pronoun comes in Lecture XII.' },
    { id: 'salus', head: 'salūs', la: 'salūs, salūtis', g: 'f', pos: 'noun, 3rd decl.', en: 'health, safety; greeting', stress: 'SA-lūs · sa-LŪ-tis', deriv: 'salute, salutary', note: 'salūtem dīcit (S. D.): sends greetings, in letters.' },
    { id: 'ad', head: 'ad', la: 'ad + acc.', pos: 'preposition', en: 'to, towards; at, near', stress: 'AD', note: 'ad vōs: to you.' }
  ],

  grammarCards: [
    { id: 'g9-inf', front: 'How do you recognise a 3rd-conjugation verb?', back: 'Infinitive in short -ere: regere (RE-ge-re), not monēre.' },
    { id: 'g9-pres', front: 'regō: present', back: 'regō, regis, regit, regimus, regitis, regunt' },
    { id: 'g9-impf', front: 'regō: imperfect', back: 'regēbam, regēbās, regēbat, regēbāmus, regēbātis, regēbant' },
    { id: 'g9-fut', front: 'regō: future', back: 'regam, regēs, reget, regēmus, regētis, regent' },
    { id: 'g9-rule', front: '3rd conj.: e or i in the ending?', back: 'e = future (reget), i = present (regit)' },
    { id: 'g9-monet', front: 'monet vs reget', back: 'monet: he warns (2nd, present); reget: he will rule (3rd, future)' },
    { id: 'g9-imp', front: 'Imperatives of regō', back: 'rege, regite' },
    { id: 'g9-short', front: 'Four short imperatives', back: 'dīc, dūc, fac, fer' },
    { id: 'g9-pp-rego', front: 'regō: principal parts', back: 'regō, regere, rēxī, rēctum' },
    { id: 'g9-pp-duco', front: 'dūcō: principal parts', back: 'dūcō, dūcere, dūxī, ductum' },
    { id: 'g9-pp-lego', front: 'legō: principal parts', back: 'legō, legere, lēgī, lēctum' },
    { id: 'g9-pp-mitto', front: 'mittō: principal parts', back: 'mittō, mittere, mīsī, missum' },
    { id: 'g9-pp-ago', front: 'agō: principal parts', back: 'agō, agere, ēgī, āctum' },
    { id: 'g9-stress', front: 'Stress of regimus and regēmus', back: 'RE-gi-mus (present); re-GĒ-mus (future)' },
    { id: 'g9-letter', front: 'Lūcius Mārcō S. D.', back: 'Lucius sends greetings to Marcus (salūtem dīcit): the opening of a Roman letter.' },
    { id: 'g9-carpe', front: 'Carpe diem, quam minimum crēdula posterō.', back: 'Pluck the day, trusting as little as possible in tomorrow. (Horace, Odes 1.11.8)' },
    { id: 'g9-carpo', front: 'carpō: literal meaning', back: 'pluck, pick (fruit, flowers), not “seize”' },
    { id: 'g9-vindolanda', front: 'Vindolanda tablets', back: 'Wooden letters of c. AD 100 from a fort by Hadrian’s Wall, including a birthday invitation from Claudia Severa.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">reget</span> means:', options: ['he will rule', 'he rules', 'he was ruling', 'rule!'], answer: 0, explain: 'Third conjugation: e in the ending = future.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">monet</span> means:', options: ['he warns', 'he will warn', 'he was warning', 'they warn'], answer: 0, explain: 'Second conjugation: the e belongs to the stem; present.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">dūcunt</span> is:', options: ['present, 3rd pl.', 'future, 3rd pl.', 'imperfect, 3rd pl.', 'imperative'], answer: 0, explain: '-unt: present 3rd plural.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">scrībam</span> is:', options: ['future, 1st sg.: I shall write', 'imperfect, 1st sg.', 'present, 1st sg.', 'subjunctive only'], answer: 0, explain: 'Future of the third conjugation: -am. (It can also be a subjunctive, Lecture XXIX.)' },
    { id: 'e5', type: 'mc', prompt: 'Which infinitive belongs to the third conjugation?', options: ['mittere', 'monēre', 'manēre', 'vidēre'], answer: 0, explain: 'Short -ere: MIT-te-re.' },
    { id: 'e6', type: 'mc', prompt: 'Singular imperative of <span class="la">dūcō</span>:', options: ['dūc', 'dūce', 'dūcite', 'dūcē'], answer: 0, explain: 'One of the four short imperatives.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Epistulam ad tē scrīb___.</span>', hint: 'I am writing', answers: ['ō', 'o'], full: 'Epistulam ad tē scrībō.', explain: 'Present, 1st singular.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Puerī librōs leg___.</span>', hint: 'are reading', answers: ['unt'], full: 'Puerī librōs legunt.', explain: 'Present, 3rd plural: -unt.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Crās vīnum em___.</span>', hint: 'I shall buy', answers: ['am'], full: 'Crās vīnum emam.', explain: 'Future, 1st singular: -am.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Dux mīlitēs dūc___.</span>', hint: 'will lead', answers: ['et'], full: 'Dux mīlitēs dūcet.', explain: 'Future, 3rd singular: -et.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Ōlim Rōmānī multās gentēs reg___.</span>', hint: 'were ruling (impf.)', answers: ['ēbant', 'ebant'], full: 'Ōlim Rōmānī multās gentēs regēbant.', explain: 'Imperfect: -ēbant.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Puerī, litterās Graecās disc___!</span>', hint: 'learn! (pl.)', answers: ['ite'], full: 'Puerī, litterās Graecās discite!', explain: 'Plural imperative -ite.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the present and future of <span class="la">regō</span>.', headers: ['Present', 'Future'], rows: [
      { label: '1st sg.', answers: ['regō', 'regam'] },
      { label: '2nd sg.', answers: ['regis', 'regēs'] },
      { label: '3rd sg.', answers: ['regit', 'reget'] },
      { label: '1st pl.', answers: ['regimus', 'regēmus'] },
      { label: '2nd pl.', answers: ['regitis', 'regētis'] },
      { label: '3rd pl.', answers: ['regunt', 'regent'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the imperfect of <span class="la">legō</span>.', headers: ['Imperfect'], rows: [
      { label: '1st sg.', answers: ['legēbam'] },
      { label: '2nd sg.', answers: ['legēbās'] },
      { label: '3rd sg.', answers: ['legēbat'] },
      { label: '1st pl.', answers: ['legēbāmus'] },
      { label: '2nd pl.', answers: ['legēbātis'] },
      { label: '3rd pl.', answers: ['legēbant'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each form to its meaning.', pairs: [
      ['mittit', 'he sends'], ['mittet', 'he will send'], ['mittēbat', 'he was sending'], ['mitte', 'send!'], ['mittere', 'to send']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Crās epistulam ad patrem scrībēs.', tokens: ['Tomorrow', 'you will write', 'a letter', 'to your father'], explain: 'scrībēs: future, 2nd singular.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Mercātor vīnum vendit et pecūniam petit.', model: 'The merchant sells wine and asks for money.', accepted: ['merchant sells wine and asks for money', 'merchant sells wine and seeks money', 'merchant is selling wine and asking for money', 'merchant sells wine and demands money', 'trader sells wine and asks for money', 'merchant sells wine and looks for money'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Dux cōpiās in Graeciam dūcet.', model: 'The general will lead the troops into Greece.', accepted: ['general will lead troops into greece', 'leader will lead troops into greece', 'general will lead forces into greece', 'general will lead troops to greece', 'leader will lead forces into greece', 'general will lead army into greece'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Librōs bonōs legite!', model: 'Read good books!', accepted: ['read good books', 'you must read good books', 'read the good books'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'I shall write a letter.', model: 'Epistulam scrībam.', accepted: ['epistulam scrībam'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'We are reading.', model: 'Legimus.', accepted: ['legimus'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'Lead the soldiers! (sg.)', model: 'Dūc mīlitēs!', accepted: ['dūc mīlitēs'] },
    { id: 'e23', type: 'mc', prompt: '<span class="la">carpō</span> literally means:', options: ['pluck, pick', 'seize, grab', 'enjoy', 'remember'], answer: 0, explain: 'Horace’s image is of picking fruit or flowers.' },
    { id: 'e24', type: 'mc', prompt: 'A Roman letter begins: <span class="la">Lūcius Mārcō S. D.</span> What does <span class="la">S. D.</span> stand for?', options: ['salūtem dīcit', 'sine dubiō', 'servus dominī', 'semper dīcō'], answer: 0, explain: '“says greeting”.' },
    { id: 'e25', type: 'mc', prompt: 'Horace’s philosophy in <span class="la">carpe diem</span> is usually called:', options: ['Epicurean', 'Stoic', 'Platonic', 'Christian'], answer: 0, explain: 'Calm enjoyment of the present, free from fear.' }
  ],

  reading: {
    title: 'Epistula Lūciī',
    note: 'Original passage: Lucius writes from the coast before sailing to Greece. Tap any word.',
    text: 'Lūcius Mārcō et fīliīs salūtem dīcit. Hodiē in lītore sedeō et epistulam ad vōs scrībō. Nautae meī scapham novam parant, nam crās ventus bonus erit. Mox ad Graeciam nāvigābō et multās īnsulās vidēbō. In Graeciā mercātōrēs Graecī vīnum vendent; ego vīnum bonum emam et in Italiam mittam. Ita pecūniam habēbō, et post hiemem ad vōs veniam. Tum vōbīs dē Graeciā multa dīcam. Vōs autem, puerī, nōlīte cessāre! Legite librōs, discite litterās Graecās, exercēte corpora in flūmine! Mārce, fīliōs tuōs bene rege, sed nōn nimis: puerī sunt, nōn mīlitēs. Vīvite laetī et carpite diem, ut Horātius dīcit. Valēte!',
    translation: 'Lucius sends greetings to Marcus and his sons. Today I am sitting on the shore and writing a letter to you. My sailors are getting a new boat ready, for tomorrow the wind will be good. Soon I shall sail to Greece and see many islands. In Greece Greek merchants will sell wine; I shall buy good wine and send it to Italy. So I shall have money, and after the winter I shall come to you. Then I shall tell you many things about Greece. But you, boys, don’t be idle! Read books, learn Greek letters, train your bodies in the river! Marcus, guide your sons well, but not too much: they are boys, not soldiers. Live happily and pluck the day, as Horace says. Farewell!',
    notes: [
      { ref: 'Lūcius Mārcō et fīliīs salūtem dīcit', html: 'The standard opening of a Roman letter: sender in the nominative, recipients in the dative, <span class="la">salūtem dīcit</span>, “says greeting” (often abbreviated <span class="la">S. D.</span>).' },
      { ref: 'epistulam ad vōs scrībō', html: 'Present of <span class="la">scrībō</span>. <span class="la">vōs</span>: “you” (plural), accusative after <span class="la">ad</span>.' },
      { ref: 'crās ventus bonus erit', html: 'Future of <span class="la">sum</span> (Lecture V).' },
      { ref: 'mercātōrēs Graecī vīnum vendent', html: '<span class="la">vendent</span>: future, “will sell”. Compare <span class="la">vendunt</span>, “they sell”.' },
      { ref: 'ego vīnum bonum emam et in Italiam mittam', html: 'Two third-conjugation futures in <span class="la">-am</span>. <span class="la">ego</span> is added for contrast: “they will sell; <em>I</em> shall buy”. <span class="la">in</span> + accusative: “into, to”.' },
      { ref: 'post hiemem ad vōs veniam', html: '<span class="la">veniam</span>: “I shall come”, future of the fourth-conjugation <span class="la">veniō</span> (Lecture XI), which also uses <span class="la">-am</span>.' },
      { ref: 'vōbīs dē Graeciā multa dīcam', html: '<span class="la">vōbīs</span>: “to you” (dative plural). <span class="la">multa</span>: “many things”, a neuter plural adjective used as a noun (Lecture IV).' },
      { ref: 'nōlīte cessāre!', html: 'Negative command: <span class="la">nōlīte</span> + infinitive. <span class="la">cessāre</span>: “to be idle, to stop” (1st conj.).' },
      { ref: 'Legite librōs, discite litterās Graecās, exercēte corpora', html: 'Three plural imperatives: two third-conjugation (<span class="la">-ite</span>), one second (<span class="la">exercēte</span>, Lecture VI).' },
      { ref: 'fīliōs tuōs bene rege', html: 'Singular imperative of <span class="la">regō</span>, addressed to Marcus. <span class="la">bene</span>: “well”, adverb of <span class="la">bonus</span>.' },
      { ref: 'Vīvite laetī et carpite diem', html: '<span class="la">laetī</span> agrees with the subject of the imperative, “you (pl.)”: “live (as) happy (people)”. Then Horace’s phrase, in the plural.' }
    ],
    glosses: {
      'lūcius': 'Lucius (nom.)', 'mārcō': 'dat. of Mārcus: to Marcus', 'et': 'and', 'fīliīs': 'dat. pl. of fīlius: to the sons', 'salūtem': 'acc. of salūs: greeting', 'dīcit': '3rd sg. of dīcō: says',
      'hodiē': 'today', 'in': 'on, in (+ abl.); into, to (+ acc.)', 'lītore': 'abl. of lītus: shore', 'sedeō': 'I sit', 'epistulam': 'acc. of epistula: letter', 'ad': 'to (+ acc.)', 'vōs': 'you (pl., acc.)', 'scrībō': 'I write',
      'nautae': 'nom. pl. of nauta: sailors', 'meī': 'nom. pl. m. of meus: my', 'scapham': 'acc. of scapha: boat', 'novam': 'acc. f. of novus: new', 'parant': '3rd pl. of parō: prepare', 'nam': 'for', 'crās': 'tomorrow', 'ventus': 'wind (nom.)', 'bonus': 'good', 'erit': 'fut. 3rd sg. of sum: will be',
      'mox': 'soon', 'graeciam': 'acc. of Graecia: Greece', 'nāvigābō': 'fut. 1st sg. of nāvigō: I shall sail', 'multās': 'acc. pl. f. of multus: many', 'īnsulās': 'acc. pl. of īnsula: islands', 'vidēbō': 'fut. 1st sg. of videō: I shall see',
      'graeciā': 'abl. of Graecia', 'mercātōrēs': 'nom. pl. of mercātor: merchants', 'graecī': 'nom. pl. m. of Graecus: Greek', 'vīnum': 'wine (acc.)', 'bonum': 'acc. n. of bonus: good', 'vendent': 'fut. 3rd pl. of vendō: will sell', 'ego': 'I (emphatic)', 'emam': 'fut. 1st sg. of emō: I shall buy', 'italiam': 'acc. of Italia: Italy', 'mittam': 'fut. 1st sg. of mittō: I shall send',
      'ita': 'so, thus', 'pecūniam': 'acc. of pecūnia: money', 'habēbō': 'fut. 1st sg. of habeō: I shall have', 'post': 'after (+ acc.)', 'hiemem': 'acc. of hiems: winter', 'veniam': 'fut. 1st sg. of veniō: I shall come',
      'tum': 'then', 'vōbīs': 'to you (pl., dat.)', 'dē': 'about (+ abl.)', 'multa': 'many things (acc. pl. n.)', 'dīcam': 'fut. 1st sg. of dīcō: I shall tell',
      'autem': 'however (never first)', 'puerī': 'voc. pl. of puer: boys', 'nōlīte': 'do not … (+ inf.)', 'cessāre': 'to be idle (inf. of cessō)', 'legite': 'pl. imperative of legō: read!', 'librōs': 'acc. pl. of liber: books', 'discite': 'pl. imperative of discō: learn!', 'litterās': 'acc. pl. of littera: letters', 'graecās': 'acc. pl. f. of Graecus: Greek',
      'exercēte': 'pl. imperative of exerceō: train!', 'corpora': 'acc. pl. of corpus: bodies', 'flūmine': 'abl. of flūmen: river', 'mārce': 'voc. of Mārcus', 'fīliōs': 'acc. pl. of fīlius: sons', 'tuōs': 'acc. pl. m. of tuus: your', 'bene': 'well', 'rege': 'imperative of regō: guide!', 'sed': 'but', 'nōn': 'not', 'nimis': 'too much',
      'sunt': 'they are', 'mīlitēs': 'nom. pl. of mīles: soldiers', 'vīvite': 'pl. imperative of vīvō: live!', 'laetī': 'nom. pl. m. of laetus: happy', 'carpite': 'pl. imperative of carpō: pluck!', 'diem': 'acc. of diēs: day', 'ut': 'as (+ indicative)', 'horātius': 'Horace (nom.)', 'valēte': 'pl. imperative of valeō: farewell!'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Where is Lucius as he writes?', options: ['On the shore', 'In Greece', 'On Marcus’s farm', 'On board ship'], answer: 0, explain: 'Hodiē in lītore sedeō.' },
      { id: 'r2', type: 'mc', prompt: 'What does Lucius plan to do in Greece?', options: ['Buy wine and send it to Italy', 'Sell wine to the Greeks', 'Study philosophy', 'Join the army'], answer: 0, explain: 'ego vīnum bonum emam et in Italiam mittam.' },
      { id: 'r3', type: 'mc', prompt: 'When will he come back?', options: ['After the winter', 'Tomorrow', 'Never', 'In the summer'], answer: 0, explain: 'post hiemem ad vōs veniam.' },
      { id: 'r4', type: 'mc', prompt: 'What does he advise Marcus?', options: ['To guide his sons well, but not too strictly', 'To send the boys to the army', 'To sell the farm', 'To buy Greek books'], answer: 0, explain: 'fīliōs tuōs bene rege, sed nōn nimis.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">legēmus</span>:', options: ['we shall read', 'we read', 'we were reading', 'let us read only'], answer: 0, explain: 'Future, 1st plural.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">legimus</span>:', options: ['we read (present)', 'we shall read', 'we were reading', 'read!'], answer: 0, explain: 'Present, 1st plural.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">vincent</span>:', options: ['they will conquer', 'they conquer', 'they were conquering', 'he will conquer'], answer: 0, explain: 'Future, 3rd plural.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Rōmānī multōs annōs vīv___.</span>', hint: 'will live', answers: ['ent'], full: 'Rōmānī multōs annōs vīvent.', explain: 'Future, 3rd plural.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Fīlī, ___ vēritātem!</span>', hint: 'say! (sg.)', answers: ['dīc', 'dic'], full: 'Fīlī, dīc vēritātem!', explain: 'Short imperative dīc.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Mercātōrēs vīnum emunt et vendunt.', model: 'Merchants buy and sell wine.', accepted: ['merchants buy and sell wine', 'merchants buy wine and sell', 'merchants are buying and selling wine', 'traders buy and sell wine'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'They will send letters.', model: 'Epistulās mittent.', accepted: ['epistulās mittent', 'litterās mittent'] },
      { id: 't8', type: 'mc', prompt: 'Principal parts of <span class="la">dīcō</span>:', options: ['dīcō, dīcere, dīxī, dictum', 'dīcō, dīcāre, dīcāvī, dīcātum', 'dīcō, dīcēre, dīcuī, dictum', 'dīcō, dīcere, dīcī, dīcum'], answer: 0, explain: 'Third conjugation with an s-perfect: dīxī.' },
      { id: 't9', type: 'mc', prompt: 'Which form is a <strong>future</strong>?', options: ['dūcet', 'docet', 'dūcit', 'manet'], answer: 0, explain: 'dūcet: 3rd conjugation, e = future. docet and manet are 2nd-conjugation presents.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">Carpe diem</span> is from:', options: ['Horace, Odes 1.11', 'Virgil, Aeneid 1', 'Cicero, Laelius', 'Catullus 5'], answer: 0, explain: 'The poem to Leuconoe.' },
      { id: 't11', type: 'mc', prompt: 'German <em>Uhr</em> comes from Latin:', options: ['hōra', 'ōrō', 'aurum', 'ūrō'], answer: 0, explain: 'Via medieval Latin hōra.' }
    ]
  },

  reference: [
    { title: 'Third conjugation: regō, regere, rēxī, rēctum', headers: ['', 'Present', 'Imperfect', 'Future'], rows: [
      ['1st sg.', 'regō', 'regēbam', 'regam'], ['2nd sg.', 'regis', 'regēbās', 'regēs'], ['3rd sg.', 'regit', 'regēbat', 'reget'], ['1st pl.', 'regimus', 'regēbāmus', 'regēmus'], ['2nd pl.', 'regitis', 'regēbātis', 'regētis'], ['3rd pl.', 'regunt', 'regēbant', 'regent']
    ] },
    { title: 'Imperatives', headers: ['Verb', 'Sg.', 'Pl.'], rows: [['regō', 'rege', 'regite'], ['dīcō', 'dīc', 'dīcite'], ['dūcō', 'dūc', 'dūcite'], ['faciō', 'fac', 'facite'], ['ferō', 'fer', 'ferte']] },
    { title: '2nd or 3rd conjugation?', headers: ['Form', 'Analysis'], rows: [['monet', '2nd, present'], ['regit', '3rd, present'], ['reget', '3rd, future'], ['monēbit', '2nd, future'], ['regēbat', '3rd, imperfect']] }
  ]
});
