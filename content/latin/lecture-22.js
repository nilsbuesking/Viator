/*
 * Latin — Lecture XXII: the present system passive of the third, third -iō and fourth conjugations;
 * the passive infinitive in -ī and -īrī; the impersonal passive.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotations (Cicero, In Catilinam 1.2; Pliny, Letters 6.16.5, 6.16.13, 6.16.16) checked
 * against the texts supplied by Nils. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-22',
  number: 22,
  title: 'Ad mortem dūcī',
  subtitle: 'The passive of regō, capiō and audiō (present, imperfect, future); the infinitives regī, capī, audīrī; the impersonal passive',
  minutes: 60,

  intro: `
    <p>Lecture XIX gave the passive endings <span class="la">-r, -ris, -tur, -mur, -minī, -ntur</span> for the first and second conjugations. This lecture applies them to the other three groups of verbs. There is nothing new to learn about the endings themselves; the work lies in attaching them to the stems of <span class="la">regō</span>, <span class="la">capiō</span> and <span class="la">audiō</span>, which you know from Lectures IX and XI.</p>
    <p>Two details need care. In the third conjugation the present <span class="la">regeris</span> “you are ruled” and the future <span class="la">regēris</span> “you will be ruled” differ only in the length of one vowel. And the present passive infinitive of the third conjugation ends in a bare <span class="la">-ī</span>: <span class="la">regī</span> “to be ruled”, <span class="la">dūcī</span> “to be led”, <span class="la">capī</span> “to be taken”, which can look like a dative.</p>
    <p>The lecture ends with a construction German has and English lacks: the <strong>impersonal passive</strong>, <span class="la">pugnātur</span>, <em>es wird gekämpft</em>.</p>
  `,

  background: [
    {
      title: 'The fate of the conspirators',
      html: `
        <p>In his first speech Cicero tells Catiline that he ought long ago to have been led to his death by order of the consul (the quotation below). A month later the question was real. On 3 December 63 BC five conspirators who had stayed in Rome were arrested on the evidence of letters intercepted with envoys of a Gallic tribe, the Allobroges. On 5 December the senate debated their punishment. According to Sallust, who gives versions of the two decisive speeches (<em>Catiline</em> 51–52), Julius Caesar argued for confiscation of property and imprisonment in Italian towns, and the young Marcus Porcius Cato for death; Cato’s view carried. That evening the five were strangled in the Tullianum, the underground prison below the Capitol.</p>
        <p>Plutarch (<em>Cicero</em> 22) says that Cicero announced the deed to the crowd in a single word, <span class="la">vīxērunt</span>, “they have lived”, a Roman way of avoiding the word “dead”. Whether he really said it cannot be checked, but the euphemism is good Latin: the perfect of a completed life.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Cato_Volubilis_bronze_bust.jpg/960px-Cato_Volubilis_bronze_bust.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Cato_Volubilis_bronze_bust.jpg/500px-Cato_Volubilis_bronze_bust.jpg|https://upload.wikimedia.org/wikipedia/commons/8/8d/Cato_Volubilis_bronze_bust.jpg" alt="Bronze portrait bust of a Roman man with a stern expression"><figcaption>Bronze bust found at Volubilis in Morocco (Rabat, Archaeological Museum), usually identified as Cato the Younger. The identification rests on comparison with other portraits and is not certain. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Cato_Volubilis_bronze_bust.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'regī: infinitive or dative?',
      html: `
        <p>The third-conjugation passive infinitive is the shortest form in the Latin verb: <span class="la">regī</span>, <span class="la">dūcī</span>, <span class="la">mittī</span>. It is identical with the dative of the noun <span class="la">rēx</span> except for the vowel length (<span class="la">regī</span> with short <span class="la">e</span>, <span class="la">rēgī</span> with long). Context always decides: an infinitive will depend on a verb like <span class="la">possum, dēbeō, oportet, iubeō</span>.</p>
        <p>Older Latin, and some later poets for effect, used a longer form in <span class="la">-ier</span>: <span class="la">regier</span>, <span class="la">dīcier</span>, <span class="la">amārier</span>. You will meet it occasionally in Plautus and in archaising verse; it is the same infinitive with an extra syllable.</p>
      `
    },
    {
      title: 'Es wird gekämpft',
      html: `
        <p>German can make a passive from a verb without an object: <em>es wird getanzt</em>, <em>hier wird nicht geraucht</em>, <em>es wurde lange gekämpft</em>. English cannot (“it is danced” is not English), and must say “there is dancing” or “they fought for a long time”. Latin works like German: <span class="la">pugnātur</span> “there is fighting”, <span class="la">diū pugnātum est</span> “there was fighting for a long time”, <span class="la">curritur</span> “people run”. Caesar uses this impersonal passive constantly in battle descriptions, because it puts the action itself in the foreground and leaves the fighters unnamed.</p>
        <p>The verb stands in the third person singular, and in the perfect the participle is neuter: <span class="la">pugnātum est</span>. Italian has a cousin of the construction in its impersonal <em>si</em>: <em>si dice</em>, “it is said, one says”, the equivalent of Latin <span class="la">dīcitur</span>.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tullianum.JPG/960px-Tullianum.JPG" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tullianum.JPG/500px-Tullianum.JPG|https://upload.wikimedia.org/wikipedia/commons/1/17/Tullianum.JPG" alt="Low stone chamber with a round opening in the vaulted ceiling"><figcaption>The Tullianum, the lower chamber of Rome’s ancient prison below the Capitol, where the conspirators were strangled in 63 BC. Prisoners were let down through the hole in the ceiling; Sallust describes the place as filthy and dark (Catiline 55). <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Tullianum.JPG" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Ad mortem tē, Catilīna, dūcī iussū cōnsulis iam prīdem oportēbat.</p>
    <p>“You ought long ago, Catiline, to have been led to your death by order of the consul.” Cicero, <em>In Catilinam</em> 1.2, checked against the copy in the course’s source files; length marks added. Literally: “it was proper long ago that you be led to death”. <span class="la">dūcī</span>: present passive infinitive of <span class="la">dūcō</span>. <span class="la">iussū</span>: ablative of the fourth-declension <span class="la">iussus</span>, “order” (Lecture XXI), used almost only in this form. <span class="la">oportēbat</span>: an impersonal verb, “it was proper”, with the accusative <span class="la">tē</span> and the infinitive.</p>
    <p>Pliny has three present-system passives of the newer conjugations. His uncle climbed to a place <span class="la">ex quō maximē mīrāculum illud cōnspicī poterat</span>, “from which that marvel could best be seen” (6.16.5): <span class="la">cōnspicī</span>, the infinitive of the <span class="la">-iō</span> verb <span class="la">cōnspiciō</span>. At night the elder Pliny’s breathing <span class="la">audiēbātur</span>, “was heard” (6.16.13; Lecture XIX), and outside <span class="la">pūmicum cāsus metuēbātur</span>, “the falling of pumice was feared” (6.16.16), imperfect passive of the third-conjugation <span class="la">metuō</span>.</p>
  `,

  pronunciation: `
    <h3>regeris or regēris</h3>
    <p>Present <span class="la">RE-ge-ris</span> “you are ruled” (short <span class="la">e</span>, stress on the first syllable); future <span class="la">re-GĒ-ris</span> “you will be ruled” (long <span class="la">ē</span>, stressed). The stress moves with the vowel, so the difference is audible, as in German <em>Hüte</em> and <em>Hütte</em>.</p>
    <h3>regī, capī, audīrī</h3>
    <p><span class="la">RE-gī, CA-pī</span>, but <span class="la">au-DĪ-rī</span>: the fourth conjugation keeps its long <span class="la">ī</span> and adds <span class="la">-rī</span>, like <span class="la">amārī, monērī</span>.</p>
    <h3>capiuntur, audiuntur</h3>
    <p>Four syllables each: <span class="la">ca-pi-UN-tur, au-di-UN-tur</span>, the stress on the heavy <span class="la">-un-</span>.</p>
  `,

  grammar: [
    {
      title: '1. The present passive',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>regō (3rd)</th><th>capiō (3rd -iō)</th><th>audiō (4th)</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">regor</td><td class="la">capior</td><td class="la">audior</td></tr>
            <tr><th>2nd sg.</th><td class="la">regeris</td><td class="la">caperis</td><td class="la">audīris</td></tr>
            <tr><th>3rd sg.</th><td class="la">regitur</td><td class="la">capitur</td><td class="la">audītur</td></tr>
            <tr><th>1st pl.</th><td class="la">regimur</td><td class="la">capimur</td><td class="la">audīmur</td></tr>
            <tr><th>2nd pl.</th><td class="la">regiminī</td><td class="la">capiminī</td><td class="la">audīminī</td></tr>
            <tr><th>3rd pl.</th><td class="la">reguntur</td><td class="la">capiuntur</td><td class="la">audiuntur</td></tr>
          </tbody>
        </table></div>
        <p>The connecting vowel is the same as in the active (<span class="la">regitur</span> like <span class="la">regit</span>, <span class="la">reguntur</span> like <span class="la">regunt</span>), with one exception: the second person singular has <span class="la">e</span> before <span class="la">-ris</span>: <span class="la">regeris, caperis</span>, not <span class="la">*regiris</span>. As in the active, <span class="la">capiō</span> and <span class="la">audiō</span> show their <span class="la">i</span> in the first singular and third plural.</p>
      `
    },
    {
      title: '2. The imperfect and future passive',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>regō impf.</th><th>regō fut.</th><th>audiō fut.</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">regēbar</td><td class="la">regar</td><td class="la">audiar</td></tr>
            <tr><th>2nd sg.</th><td class="la">regēbāris</td><td class="la"><strong>regēris</strong></td><td class="la">audiēris</td></tr>
            <tr><th>3rd sg.</th><td class="la">regēbātur</td><td class="la">regētur</td><td class="la">audiētur</td></tr>
            <tr><th>1st pl.</th><td class="la">regēbāmur</td><td class="la">regēmur</td><td class="la">audiēmur</td></tr>
            <tr><th>2nd pl.</th><td class="la">regēbāminī</td><td class="la">regēminī</td><td class="la">audiēminī</td></tr>
            <tr><th>3rd pl.</th><td class="la">regēbantur</td><td class="la">regentur</td><td class="la">audientur</td></tr>
          </tbody>
        </table></div>
        <p>The imperfect is regular: <span class="la">-ēba-</span> (<span class="la">regēbar</span>), <span class="la">-iēba-</span> (<span class="la">capiēbar, audiēbar</span>). The future uses the vowel <span class="la">a</span> in the first person and <span class="la">ē</span> elsewhere, just as the active (<span class="la">regam, regēs</span>): <span class="la">regar, regēris</span>; <span class="la">capiar, capiēris</span>; <span class="la">audiar, audiēris</span>.</p>
        <p>The trap is the second person singular of the third conjugation: present <span class="la">regeris</span>, future <span class="la">regēris</span>. Elsewhere the forms are distinct (<span class="la">regitur / regētur</span>, <span class="la">reguntur / regentur</span>).</p>
      `
    },
    {
      title: '3. The present passive infinitive',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Conjugation</th><th>Active</th><th>Passive</th></tr></thead>
          <tbody>
            <tr><td>1st</td><td class="la">amāre</td><td class="la">amārī</td></tr>
            <tr><td>2nd</td><td class="la">monēre</td><td class="la">monērī</td></tr>
            <tr><td>3rd</td><td class="la">regere</td><td class="la"><strong>regī</strong></td></tr>
            <tr><td>3rd -iō</td><td class="la">capere</td><td class="la"><strong>capī</strong></td></tr>
            <tr><td>4th</td><td class="la">audīre</td><td class="la">audīrī</td></tr>
          </tbody>
        </table></div>
        <p>In the third conjugation the whole <span class="la">-ere</span> is replaced by <span class="la">-ī</span>. <span class="la">Urbs capī nōn potest</span>: “The city cannot be taken.”</p>
      `
    },
    {
      title: '4. The impersonal passive',
      html: `
        <p>Verbs that take no direct object can be used in the passive in the third person singular, without a subject, to express that an action takes place:</p>
        <ul>
          <li><span class="la">Pugnātur.</span> There is fighting. (<em>Es wird gekämpft.</em>)</li>
          <li><span class="la">Diū et ācriter pugnātum est.</span> There was long and fierce fighting.</li>
          <li><span class="la">Ad urbem curritur.</span> People are running to the city.</li>
          <li><span class="la">Dīcitur.</span> It is said. (<em>Man sagt.</em>)</li>
        </ul>
        <p>Translate with “there is …ing”, “people …”, or an active verb with a suitable subject. In the perfect, the participle is neuter singular: <span class="la">pugnātum est</span>, <span class="la">ventum est</span> “they came, (one) came”.</p>
      `
    },
    {
      title: '5. The passive system so far',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>3rd sg. present</th><th>3rd sg. imperfect</th><th>3rd sg. future</th><th>Infinitive</th></tr></thead>
          <tbody>
            <tr><th>1st</th><td class="la">amātur</td><td class="la">amābātur</td><td class="la">amābitur</td><td class="la">amārī</td></tr>
            <tr><th>2nd</th><td class="la">monētur</td><td class="la">monēbātur</td><td class="la">monēbitur</td><td class="la">monērī</td></tr>
            <tr><th>3rd</th><td class="la">regitur</td><td class="la">regēbātur</td><td class="la">regētur</td><td class="la">regī</td></tr>
            <tr><th>3rd -iō</th><td class="la">capitur</td><td class="la">capiēbātur</td><td class="la">capiētur</td><td class="la">capī</td></tr>
            <tr><th>4th</th><td class="la">audītur</td><td class="la">audiēbātur</td><td class="la">audiētur</td><td class="la">audīrī</td></tr>
          </tbody>
        </table></div>
        <p>The perfect passive (<span class="la">rēctus, captus, audītus est</span>) works the same for all conjugations (Lecture XX).</p>
      `
    }
  ],

  vocab: [
    { id: 'iudex', head: 'iūdex', la: 'iūdex, iūdicis', g: 'm', pos: 'noun, 3rd decl.', en: 'judge; juror', stress: 'IŪ-dex · IŪ-di-cis', deriv: 'judge, judicial', note: 'iūs + dīcō: “one who pronounces the law”.' },
    { id: 'iudicium', head: 'iūdicium', la: 'iūdicium, iūdiciī', g: 'n', pos: 'noun, 2nd decl.', en: 'trial, court; judgement, opinion', stress: 'iū-DI-ci-um', deriv: 'judicious' },
    { id: 'crimen', head: 'crīmen', la: 'crīmen, crīminis', g: 'n', pos: 'noun, 3rd decl.', en: 'charge, accusation; crime', stress: 'CRĪ-men · CRĪ-mi-nis', deriv: 'crime, criminal; Krimi', note: 'Originally the accusation, not the deed.' },
    { id: 'testis', head: 'testis', la: 'testis, testis', g: 'm', pos: 'noun, 3rd decl. (i-stem)', en: 'witness', stress: 'TES-tis', deriv: 'testify, testament; Testament', note: 'Also feminine for a woman witness.' },
    { id: 'sententia', head: 'sententia', la: 'sententia, sententiae', g: 'f', pos: 'noun, 1st decl.', en: 'opinion; verdict; sentence; maxim', stress: 'sen-TEN-ti-a', deriv: 'sentence, sententious; Sentenz', note: 'From sentiō (Lecture XI).' },
    { id: 'iussus', head: 'iussū', la: 'iussū (abl. of iussus, -ūs)', g: 'm', pos: 'noun, 4th decl.', en: 'by order (of)', stress: 'IUS-sū', note: 'iussū cōnsulis: by order of the consul (Cicero). From iubeō.' },
    { id: 'absolvo', head: 'absolvō', la: 'absolvō, absolvere, absolvī, absolūtum', pos: 'verb, 3rd conj.', en: 'set free; acquit; complete', stress: 'ab-SOL-vō · ab-SOL-ve-re', deriv: 'absolve, absolute' },
    { id: 'claudo', head: 'claudō', la: 'claudō, claudere, clausī, clausum', pos: 'verb, 3rd conj.', en: 'close, shut', stress: 'CLAU-dō · CLAU-de-re', deriv: 'clause, closet; Klause, Klausur' },
    { id: 'ludo', head: 'lūdō', la: 'lūdō, lūdere, lūsī, lūsum', pos: 'verb, 3rd conj.', en: 'play; make fun of', stress: 'LŪ-dō · LŪ-de-re', deriv: 'ludicrous, illusion', note: 'Compare lūdus, “game; school” (Lecture III).' },
    { id: 'conspicio', head: 'cōnspiciō', la: 'cōnspiciō, cōnspicere, cōnspexī, cōnspectum', pos: 'verb, 3rd conj. (-iō)', en: 'catch sight of, see; pass. be conspicuous', stress: 'cōn-SPI-ci-ō · cōn-SPI-ce-re', deriv: 'conspicuous', note: 'Pliny 6.16.5: cōnspicī poterat.' },
    { id: 'metuo', head: 'metuō', la: 'metuō, metuere, metuī', pos: 'verb, 3rd conj.', en: 'fear, be afraid of', stress: 'ME-tu-ō · ME-tu-e-re', note: 'Compare metus (Lecture XXI). Pliny 6.16.16: metuēbātur.' },
    { id: 'dono', head: 'dōnō', la: 'dōnō, dōnāre, dōnāvī, dōnātum', pos: 'verb, 1st conj.', en: 'give, present (aliquem aliquā rē: someone with something)', stress: 'DŌ-nō · dō-NĀ-re', deriv: 'donate, donation', note: 'From dōnum (Lecture IV).' },
    { id: 'oportet', head: 'oportet', la: 'oportet, oportēre, oportuit', pos: 'impersonal verb', en: 'it is proper, one ought', stress: 'o-POR-tet', note: 'With acc. + inf.: tē dūcī oportēbat, you ought to have been led.' },
    { id: 'pridem', head: 'iam prīdem', la: 'iam prīdem', pos: 'adverbial phrase', en: 'long ago, long since', stress: 'IAM PRĪ-dem', note: 'Cicero, Cat. 1.2.' }
  ],

  grammarCards: [
    { id: 'g22-rego', front: 'regō: present passive', back: 'regor, regeris, regitur, regimur, regiminī, reguntur' },
    { id: 'g22-capio', front: 'capiō: present passive', back: 'capior, caperis, capitur, capimur, capiminī, capiuntur' },
    { id: 'g22-audio', front: 'audiō: present passive', back: 'audior, audīris, audītur, audīmur, audīminī, audiuntur' },
    { id: 'g22-futrego', front: 'regō: future passive', back: 'regar, regēris, regētur, regēmur, regēminī, regentur' },
    { id: 'g22-futaudio', front: 'audiō: future passive', back: 'audiar, audiēris, audiētur, audiēmur, audiēminī, audientur' },
    { id: 'g22-trap', front: 'regeris vs regēris', back: 'you are ruled (present, short e) vs you will be ruled (future, long ē)' },
    { id: 'g22-eris', front: 'Why regeris, not *regiris?', back: 'Before -ris the connecting vowel is e.' },
    { id: 'g22-inf', front: 'Passive infinitives of regō, capiō, audiō', back: 'regī, capī, audīrī' },
    { id: 'g22-inf3', front: 'How is the 3rd-conj. passive infinitive formed?', back: 'Replace -ere by -ī: regere → regī, dūcere → dūcī' },
    { id: 'g22-impf', front: 'capiō: imperfect passive 3rd sg.', back: 'capiēbātur' },
    { id: 'g22-impers', front: 'pugnātur', back: 'there is fighting (es wird gekämpft): impersonal passive' },
    { id: 'g22-impersperf', front: 'diū pugnātum est', back: 'there was fighting for a long time (neuter participle)' },
    { id: 'g22-dicitur', front: 'dīcitur', back: 'it is said, people say (man sagt)' },
    { id: 'g22-cicero', front: 'Ad mortem tē, Catilīna, dūcī iussū cōnsulis iam prīdem oportēbat.', back: 'You ought long ago, Catiline, to have been led to death by order of the consul. (Cat. 1.2)' },
    { id: 'g22-pliny', front: 'ex quō maximē mīrāculum illud cōnspicī poterat', back: 'from which that marvel could best be seen (Pliny 6.16.5)' },
    { id: 'g22-vixerunt', front: 'vīxērunt', back: '“they have lived”: Cicero’s reported announcement of the executions (Plutarch, Cic. 22)' },
    { id: 'g22-ier', front: 'regier, amārier', back: 'Old forms of the passive infinitive (regī, amārī)' },
    { id: 'g22-dec5', front: '5 December 63 BC', back: 'The senate debates the conspirators: Caesar for imprisonment, Cato for death; executed in the Tullianum.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">regitur</span>:', options: ['he/she/it is ruled', 'he rules', 'he will be ruled', 'to be ruled'], answer: 0, explain: 'Present passive 3rd sg.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">regēris</span> (long ē):', options: ['you will be ruled', 'you are ruled', 'you were ruled', 'you will rule'], answer: 0, explain: 'Future; the present is regeris with short e.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">audiuntur</span>:', options: ['they are heard', 'they will be heard', 'they hear', 'they were heard'], answer: 0, explain: 'Present passive 3rd pl.' },
    { id: 'e4', type: 'mc', prompt: 'Present passive infinitive of <span class="la">dūcō</span>:', options: ['dūcī', 'dūcerī', 'dūcere', 'dūcīrī'], answer: 0, explain: '-ere → -ī.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">capiēbātur</span>:', options: ['he was being taken', 'he will be taken', 'he is taken', 'he had been taken'], answer: 0, explain: 'Imperfect passive.' },
    { id: 'e6', type: 'mc', prompt: 'Present passive infinitive of <span class="la">audiō</span>:', options: ['audīrī', 'audī', 'audīre', 'audierī'], answer: 0, explain: '4th conj.: -īrī.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Liber ā puerō leg___.</span>', hint: 'is read', answers: ['itur'], full: 'Liber ā puerō legitur.', explain: 'Present passive 3rd sg.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Puerī ā patre dūc___.</span>', hint: 'are led', answers: ['untur'], full: 'Puerī ā patre dūcuntur.', explain: 'Present passive 3rd pl.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Vōx eius aud___.</span>', hint: 'is heard', answers: ['ītur', 'itur'], full: 'Vōx eius audītur.', explain: '4th conj. present passive.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Urbs ā mīlitibus cap___.</span>', hint: 'will be captured', answers: ['iētur', 'ietur'], full: 'Urbs ā mīlitibus capiētur.', explain: 'Future passive of capiō.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Epistulae ā Lūciō mitt___.</span>', hint: 'were being sent', answers: ['ēbantur', 'ebantur'], full: 'Epistulae ā Lūciō mittēbantur.', explain: 'Imperfect passive 3rd pl.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Hostis vinc___ nōn potest.</span>', hint: 'to be conquered', answers: ['ī', 'i'], full: 'Hostis vincī nōn potest.', explain: 'Passive infinitive of vincō.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the present and future passive of <span class="la">regō</span>.', headers: ['Present', 'Future'], rows: [
      { label: '1st sg.', answers: ['regor', 'regar'] },
      { label: '2nd sg.', answers: ['regeris|regere', 'regēris|regēre'] },
      { label: '3rd sg.', answers: ['regitur', 'regētur'] },
      { label: '1st pl.', answers: ['regimur', 'regēmur'] },
      { label: '2nd pl.', answers: ['regiminī', 'regēminī'] },
      { label: '3rd pl.', answers: ['reguntur', 'regentur'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the present and future passive of <span class="la">audiō</span>.', headers: ['Present', 'Future'], rows: [
      { label: '1st sg.', answers: ['audior', 'audiar'] },
      { label: '2nd sg.', answers: ['audīris|audīre', 'audiēris|audiēre'] },
      { label: '3rd sg.', answers: ['audītur', 'audiētur'] },
      { label: '1st pl.', answers: ['audīmur', 'audiēmur'] },
      { label: '2nd pl.', answers: ['audīminī', 'audiēminī'] },
      { label: '3rd pl.', answers: ['audiuntur', 'audientur'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each infinitive to its meaning.', pairs: [
      ['regī', 'to be ruled'], ['capī', 'to be taken'], ['audīrī', 'to be heard'], ['amārī', 'to be loved'], ['monērī', 'to be warned']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Vōx puerī ā patre audītur.', tokens: ['The boy’s voice', 'is heard', 'by', 'his father'], explain: 'audītur: present passive, 4th conj.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Canis ā Gāiō dēfenditur.', model: 'The dog is defended by Gaius.', accepted: ['dog is defended by gaius', 'dog is being defended by gaius'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Urbs capī nōn potest.', model: 'The city cannot be captured.', accepted: ['city cannot be captured', 'city cannot be taken', 'city can not be captured', 'city can not be taken', 'city is not able to be captured', 'city is not able to be taken', 'city cannot be seized'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Epistulae mittentur.', model: 'The letters will be sent.', accepted: ['letters will be sent', 'letters shall be sent'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'He is being led.', model: 'Dūcitur.', accepted: ['dūcitur', 'is dūcitur'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'to be heard', model: 'audīrī', accepted: ['audīrī'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'They will be captured.', model: 'Capientur.', accepted: ['capientur'] },
    { id: 'e23', type: 'mc', prompt: 'In Cicero’s <span class="la">Ad mortem tē … dūcī … oportēbat</span>, <span class="la">dūcī</span> is:', options: ['present passive infinitive: “to be led”', 'dative of dux', 'perfect active', 'imperative'], answer: 0, explain: 'You ought to have been led to death.' },
    { id: 'e24', type: 'mc', prompt: 'Pliny’s <span class="la">ex quō maximē mīrāculum illud cōnspicī poterat</span>:', options: ['from which that marvel could best be seen', 'from which he could best see the marvel', 'the marvel which could see him', 'from which the marvel was seen for a long time'], answer: 0, explain: 'cōnspicī: passive infinitive.' },
    { id: 'e25', type: 'mc', prompt: 'German <em>Es wird gekämpft</em> corresponds to Latin:', options: ['pugnātur', 'pugnat', 'pugnantur', 'pugnāre'], answer: 0, explain: 'The impersonal passive.' }
  ],

  reading: {
    title: 'Iūdicium',
    note: 'Original passage: the boys put the dog on trial. Tap any word.',
    text: 'Hieme puerī saepe in ātriō lūdēbant. Ōlim Quīntus dīxit: “Hodiē iūdicium habēbimus, sīcut in forō Rōmānō. Canis noster accūsātur: pecūniam nostram rapuit!” Mārcus iūdex esse cōnsēnsit. Canis in medium ātrium dūcitur et ante iūdicem pōnitur. Quīntus accūsātor est; canis ā Gāiō dēfenditur. Prīmum crīmen ā Quīntō legitur: “Hic canis saccum pecūniae rapuit et in āream portāvit.” Tum testēs audiuntur. Ūnus ex servīs dīcit: “Ego canem cum saccō vīdī.” Gāius autem canem dēfendit: “Canis nōn pecūniā, sed odōre carnis dūcēbātur! Fūr nōn est quī pecūniam nōn cupit. Et pecūnia ā cane nōn relinquitur in agrīs, sed ad nōs portātur!” Diū inter puerōs disputātur. Tum sententia ā iūdice exspectātur. Mārcus diū cōgitat; tandem dīcit: “Canis absolvitur. Posteā autem saccī pecūniae in arcā clausā pōnentur.” Puerī rīdent, et canis, quī nihil intellegit, ab omnibus laudātur et carne dōnātur. Gāius sēcum cōgitat: “Ōlim ego ipse in forō audiar, sīcut Cicerō!”',
    translation: 'In winter the boys often played in the atrium. One day Quintus said: “Today we shall hold a trial, just like in the Roman forum. Our dog is accused: he stole our money!” Marcus agreed to be judge. The dog is led into the middle of the atrium and placed before the judge. Quintus is the prosecutor; the dog is defended by Gaius. First the charge is read by Quintus: “This dog snatched the bag of money and carried it into the yard.” Then the witnesses are heard. One of the slaves says: “I saw the dog with the bag.” But Gaius defends the dog: “The dog was led not by the money but by the smell of meat! He is not a thief who does not want money. And the money is not left in the fields by the dog, but carried to us!” There is a long argument among the boys. Then the verdict is awaited from the judge. Marcus thinks for a long time; at last he says: “The dog is acquitted. In future, however, bags of money will be put in a locked chest.” The boys laugh, and the dog, who understands nothing, is praised by everyone and rewarded with meat. Gaius thinks to himself: “One day I myself shall be heard in the forum, like Cicero!”',
    notes: [
      { ref: 'Canis noster accūsātur', html: 'Present passive, 1st conjugation (Lecture XIX). The story is told in the present tense from here on, the historic present.' },
      { ref: 'Mārcus iūdex esse cōnsēnsit', html: '<span class="la">cōnsentiō, -īre, cōnsēnsī</span>: agree. <span class="la">iūdex</span> is nominative because it describes the subject (“that he would be judge”).' },
      { ref: 'Canis in medium ātrium dūcitur et ante iūdicem pōnitur', html: 'Two 3rd-conjugation passives: <span class="la">dūcitur, pōnitur</span>. <span class="la">in medium ātrium</span>: “into the middle of the atrium”.' },
      { ref: 'canis ā Gāiō dēfenditur', html: 'Agent with <span class="la">ā</span>.' },
      { ref: 'Prīmum crīmen ā Quīntō legitur', html: '<span class="la">legitur</span>: present passive of <span class="la">legō</span>. <span class="la">crīmen</span>: the charge, not the crime.' },
      { ref: 'Tum testēs audiuntur', html: '4th-conjugation present passive, 3rd pl.: <span class="la">-iuntur</span>.' },
      { ref: 'Canis nōn pecūniā, sed odōre carnis dūcēbātur!', html: 'Imperfect passive with ablatives of means: things, not persons, so no <span class="la">ā</span>.' },
      { ref: 'Fūr nōn est quī pecūniam nōn cupit', html: '“He who does not want money is not a thief”: the antecedent of <span class="la">quī</span> is left out (Lecture XVIII).' },
      { ref: 'pecūnia ā cane nōn relinquitur in agrīs, sed ad nōs portātur', html: '<span class="la">relinquitur</span> (3rd conj.) and <span class="la">portātur</span> (1st conj.) side by side.' },
      { ref: 'Diū inter puerōs disputātur', html: 'Impersonal passive: “there is a long argument among the boys”, German <em>es wird lange gestritten</em>.' },
      { ref: 'Posteā autem saccī pecūniae in arcā clausā pōnentur', html: '<span class="la">pōnentur</span>: future passive, 3rd pl. <span class="la">clausā</span>: perfect passive participle of <span class="la">claudō</span>, “closed, locked”.' },
      { ref: 'canis … ab omnibus laudātur et carne dōnātur', html: '<span class="la">dōnāre aliquem aliquā rē</span>: to present someone with something; the thing given stands in the ablative.' },
      { ref: 'Ōlim ego ipse in forō audiar', html: 'Future passive, 1st sg. of <span class="la">audiō</span>: “I shall be heard”.' }
    ],
    glosses: {
      'hieme': 'abl. of hiems: in winter', 'puerī': 'nom. pl. of puer: boys', 'saepe': 'often', 'in': 'in (+ abl.); into (+ acc.)', 'ātriō': 'abl. of ātrium: atrium', 'lūdēbant': 'impf. 3rd pl. of lūdō: played',
      'ōlim': 'once, one day; some day', 'quīntus': 'Quintus (nom.)', 'dīxit': 'perf. 3rd sg. of dīcō: said', 'hodiē': 'today', 'iūdicium': 'trial (acc.)', 'habēbimus': 'fut. 1st pl. of habeō: we shall hold', 'sīcut': 'just as', 'forō': 'abl. of forum', 'rōmānō': 'abl. n. of Rōmānus: Roman',
      'canis': 'dog (nom.)', 'noster': 'our', 'accūsātur': 'pres. pass. 3rd sg. of accūsō: is accused', 'pecūniam': 'acc. of pecūnia: money', 'nostram': 'acc. f. of noster: our', 'rapuit': 'perf. 3rd sg. of rapiō: snatched',
      'mārcus': 'Marcus (nom.)', 'iūdex': 'judge (nom.)', 'esse': 'to be', 'cōnsēnsit': 'perf. 3rd sg. of cōnsentiō: agreed',
      'medium': 'acc. n. of medius: the middle of', 'ātrium': 'atrium (acc.)', 'dūcitur': 'pres. pass. 3rd sg. of dūcō: is led', 'et': 'and', 'ante': 'before (+ acc.)', 'iūdicem': 'acc. of iūdex: judge', 'pōnitur': 'pres. pass. 3rd sg. of pōnō: is placed',
      'accūsātor': 'prosecutor (nom.)', 'est': 'is', 'ā': 'by (+ abl.)', 'gāiō': 'abl. of Gāius', 'dēfenditur': 'pres. pass. 3rd sg. of dēfendō: is defended',
      'prīmum': 'first', 'crīmen': 'charge (nom.)', 'quīntō': 'abl. of Quīntus', 'legitur': 'pres. pass. 3rd sg. of legō: is read', 'hic': 'this', 'saccum': 'acc. of saccus: bag', 'pecūniae': 'gen. of pecūnia: of money', 'āream': 'acc. of ārea: yard', 'portāvit': 'perf. 3rd sg. of portō: carried',
      'tum': 'then', 'testēs': 'nom. pl. of testis: witnesses', 'audiuntur': 'pres. pass. 3rd pl. of audiō: are heard', 'ūnus': 'one', 'ex': 'of, out of (+ abl.)', 'servīs': 'abl. pl. of servus: slaves', 'dīcit': '3rd sg. of dīcō: says', 'ego': 'I', 'canem': 'acc. of canis: dog', 'cum': 'with (+ abl.)', 'saccō': 'abl. of saccus: bag', 'vīdī': 'perf. 1st sg. of videō: I saw',
      'gāius': 'Gaius (nom.)', 'autem': 'but, however', 'dēfendit': '3rd sg. of dēfendō: defends', 'nōn': 'not', 'pecūniā': 'abl. of pecūnia: money', 'sed': 'but', 'odōre': 'abl. of odor: smell', 'carnis': 'gen. of carō: of meat', 'dūcēbātur': 'impf. pass. 3rd sg. of dūcō: was led',
      'fūr': 'thief (nom.)', 'quī': 'who', 'cupit': '3rd sg. of cupiō: wants', 'cane': 'abl. of canis: dog', 'relinquitur': 'pres. pass. 3rd sg. of relinquō: is left', 'agrīs': 'abl. pl. of ager: fields', 'ad': 'to (+ acc.)', 'nōs': 'us', 'portātur': 'pres. pass. 3rd sg. of portō: is carried',
      'diū': 'for a long time', 'inter': 'among (+ acc.)', 'puerōs': 'acc. pl. of puer: boys', 'disputātur': 'pres. pass. (impersonal) of disputō: there is arguing',
      'sententia': 'verdict (nom.)', 'iūdice': 'abl. of iūdex: judge', 'exspectātur': 'pres. pass. 3rd sg. of exspectō: is awaited', 'cōgitat': '3rd sg. of cōgitō: thinks', 'tandem': 'at last', 'absolvitur': 'pres. pass. 3rd sg. of absolvō: is acquitted',
      'posteā': 'afterwards, in future', 'saccī': 'nom. pl. of saccus: bags', 'arcā': 'abl. of arca: chest', 'clausā': 'abl. f. of clausus: closed, locked', 'pōnentur': 'fut. pass. 3rd pl. of pōnō: will be put',
      'rīdent': '3rd pl. of rīdeō: laugh', 'nihil': 'nothing', 'intellegit': '3rd sg. of intellegō: understands', 'ab': 'by (+ abl.)', 'omnibus': 'abl. pl. of omnēs: everyone', 'laudātur': 'pres. pass. 3rd sg. of laudō: is praised', 'carne': 'abl. of carō: (with) meat', 'dōnātur': 'pres. pass. 3rd sg. of dōnō: is presented',
      'sēcum': 'to himself', 'ipse': 'myself, himself', 'audiar': 'fut. pass. 1st sg. of audiō: I shall be heard', 'cicerō': 'Cicero (nom.)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Who is the judge in the boys’ trial?', options: ['Marcus', 'Quintus', 'Gaius', 'A slave'], answer: 0, explain: 'Mārcus iūdex esse cōnsēnsit.' },
      { id: 'r2', type: 'mc', prompt: 'Who defends the dog?', options: ['Gaius', 'Quintus', 'Marcus', 'Nobody'], answer: 0, explain: 'canis ā Gāiō dēfenditur.' },
      { id: 'r3', type: 'mc', prompt: 'What is Gaius’s main argument?', options: ['The dog was led by the smell of meat, not by the money', 'The dog was asleep', 'The slave is lying', 'The money was never lost'], answer: 0, explain: 'nōn pecūniā, sed odōre carnis dūcēbātur.' },
      { id: 'r4', type: 'mc', prompt: 'What is the verdict?', options: ['The dog is acquitted, and money will be kept in a locked chest', 'The dog is condemned', 'Gaius is punished', 'The slave is acquitted'], answer: 0, explain: 'Canis absolvitur … saccī … in arcā clausā pōnentur.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">mittuntur</span>:', options: ['they are sent', 'they will be sent', 'they send', 'they were sent'], answer: 0, explain: 'Present passive 3rd pl.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">capiētur</span>:', options: ['he will be taken', 'he is taken', 'he was being taken', 'to be taken'], answer: 0, explain: 'Future passive, -iō verb.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">regī</span> in <span class="la">Urbs bene regī dēbet</span> is:', options: ['passive infinitive', 'dative of rēx', 'imperative', 'perfect'], answer: 0, explain: 'The city ought to be ruled well.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Ab omnibus aud___.</span>', hint: 'you (sg.) will be heard', answers: ['iēris', 'ieris', 'iēre', 'iere'], full: 'Ab omnibus audiēris.', explain: 'Future passive 2nd sg.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Librī ā Quīntō leg___.</span>', hint: 'were being read', answers: ['ēbantur', 'ebantur'], full: 'Librī ā Quīntō legēbantur.', explain: 'Imperfect passive 3rd pl.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Diū pugnātum est.', model: 'There was fighting for a long time.', accepted: ['there was fighting for long time', 'they fought for long time', 'there was fighting for a long time', 'they fought for a long time', 'fighting went on for long time', 'it was fought for long time'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'to be led', model: 'dūcī', accepted: ['dūcī'] },
      { id: 't8', type: 'mc', prompt: '<span class="la">audīminī</span>:', options: ['you (pl.) are heard', 'you (pl.) will be heard', 'you (pl.) hear', 'listen! (pl.)'], answer: 0, explain: 'Present passive 2nd pl.' },
      { id: 't9', type: 'mc', prompt: 'Who, according to Sallust, argued for the death penalty for the conspirators?', options: ['Cato', 'Caesar', 'Catiline', 'Pliny'], answer: 0, explain: 'Caesar proposed imprisonment; Cato’s view carried.' },
      { id: 't10', type: 'mc', prompt: 'Cicero’s reported <span class="la">vīxērunt</span> means:', options: ['they have lived (they are dead)', 'they will live', 'they are living', 'they conquered'], answer: 0, explain: 'A Roman euphemism.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">dīcitur</span> is closest to German:', options: ['man sagt', 'er sagt', 'sag!', 'gesagt'], answer: 0, explain: 'Impersonal passive.' }
    ]
  },

  reference: [
    { title: 'Present passive', headers: ['', 'regō', 'capiō', 'audiō'], rows: [
      ['1st sg.', 'regor', 'capior', 'audior'], ['2nd sg.', 'regeris', 'caperis', 'audīris'], ['3rd sg.', 'regitur', 'capitur', 'audītur'], ['1st pl.', 'regimur', 'capimur', 'audīmur'], ['2nd pl.', 'regiminī', 'capiminī', 'audīminī'], ['3rd pl.', 'reguntur', 'capiuntur', 'audiuntur']
    ] },
    { title: 'Future passive', headers: ['', 'regō', 'capiō', 'audiō'], rows: [
      ['1st sg.', 'regar', 'capiar', 'audiar'], ['2nd sg.', 'regēris', 'capiēris', 'audiēris'], ['3rd sg.', 'regētur', 'capiētur', 'audiētur'], ['1st pl.', 'regēmur', 'capiēmur', 'audiēmur'], ['2nd pl.', 'regēminī', 'capiēminī', 'audiēminī'], ['3rd pl.', 'regentur', 'capientur', 'audientur']
    ] },
    { title: 'Imperfect passive and infinitive', headers: ['', 'regō', 'capiō', 'audiō'], rows: [
      ['Impf. 1st sg.', 'regēbar', 'capiēbar', 'audiēbar'], ['Impf. 3rd sg.', 'regēbātur', 'capiēbātur', 'audiēbātur'], ['Infinitive', 'regī', 'capī', 'audīrī']
    ] }
  ]
});
