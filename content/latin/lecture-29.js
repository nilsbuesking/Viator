/*
 * Latin — Lecture XXIX: the present subjunctive (active and passive; sum, possum);
 * jussive and hortatory subjunctive; purpose clauses with ut and nē.
 * Authentic reading: Catullus 5 (complete).
 * Content file only. Source texts (Catullus 5; Horace, Odes 1.11; Pliny, Letters 6.16.1) checked
 * against the texts supplied by Nils (sources/latin-readings.txt, sources/latin-pliny-ep-6-16.txt);
 * length marks editorial. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-29',
  number: 29,
  title: 'Vīvāmus atque amēmus',
  subtitle: 'The present subjunctive; jussive and hortatory uses (vīvāmus, sapiās); purpose clauses with ut and nē; authentic reading: Catullus 5',
  minutes: 70,

  intro: `
    <p>Every verb form so far has been in the <strong>indicative</strong>, the mood of statements and questions about what is (or was, or will be). Latin has a second mood, the <strong>subjunctive</strong>, for what is wished, intended, possible or merely reported. German speakers know the idea from the Konjunktiv: <em>Es lebe der König!</em>, <em>Man nehme drei Eier</em>, <em>damit er es wisse</em>. Latin uses its subjunctive far more widely than modern German uses the Konjunktiv, and in this and the next three lectures it becomes one of the main things to recognise in any text.</p>
    <p>This lecture introduces the <strong>present subjunctive</strong> and two of its uses. In main clauses it expresses a command or exhortation: <span class="la">vīvāmus</span>, “let us live”; <span class="la">sapiās</span>, “be wise”. In subordinate clauses introduced by <span class="la">ut</span> or <span class="la">nē</span> it expresses <strong>purpose</strong>: <span class="la">nē sciāmus</span>, “so that we may not know”.</p>
    <p>The reading is a complete poem: Catullus 5, which you have met in pieces since Lecture XIII.</p>
  `,

  background: [
    {
      title: 'Kisses and accounts',
      html: `
        <p>Catullus 5 begins with three subjunctives of exhortation: let us live, let us love, let us value the gossip of strict old men at a single penny. The middle of the poem sets the brief day of human life against the sun’s endless returns; the end turns into arithmetic. Thousands of kisses are piled up, then <span class="la">conturbābimus illa</span>, “we will throw them into confusion”, so that neither the lovers nor any ill-wisher may know the total.</p>
        <p>Two Roman ideas lie behind the ending. <span class="la">conturbāre</span> was a word of business: to throw one’s accounts into disorder, which in practice meant going bankrupt, often fraudulently. And counting one’s blessings was dangerous: someone who knew exactly how much you had could cast the evil eye on it. <span class="la">invidēre</span>, “to envy”, literally means “to look upon” in that hostile sense. The kisses are reckoned like money, on an abacus perhaps (Lecture XVI), and then scrambled to protect them. Scholars differ on how far the bookkeeping imagery should be pressed, but the core of it is generally accepted.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Fresco_portrait_of_the_baker_Terentius_Neo_and_his_wife,_from_Pompeii.jpg/960px-Fresco_portrait_of_the_baker_Terentius_Neo_and_his_wife,_from_Pompeii.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Fresco_portrait_of_the_baker_Terentius_Neo_and_his_wife,_from_Pompeii.jpg/500px-Fresco_portrait_of_the_baker_Terentius_Neo_and_his_wife,_from_Pompeii.jpg|https://upload.wikimedia.org/wikipedia/commons/e/e4/Fresco_portrait_of_the_baker_Terentius_Neo_and_his_wife,_from_Pompeii.jpg" alt="Roman wall painting of a man holding a scroll and a woman holding a writing tablet and stylus"><figcaption>Portrait of a Pompeian couple, traditionally identified as Terentius Neo and his wife (Naples, National Archaeological Museum; 1st century AD). Not Catullus and Lesbia, of whom no portraits exist, but one of the few Roman paintings of a couple together. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Fresco_portrait_of_the_baker_Terentius_Neo_and_his_wife,_from_Pompeii.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Es lebe der König: the subjunctive in German',
      html: `
        <p>German still has a jussive subjunctive, though it survives mostly in fixed expressions and in instructions: <em>Es lebe die Freiheit!</em>, <em>Gott sei Dank</em>, <em>Er ruhe in Frieden</em>, and in every older cookbook <em>Man nehme …</em>. These are Konjunktiv I forms, and they do exactly what the Latin present subjunctive does in a main clause: they express a wish or a command in the third person.</p>
        <p>For the first person plural German uses <em>lasst uns</em> or the inverted present: <em>Lasst uns leben, meine Lesbia, und lieben</em>, or <em>Gehen wir!</em>. Latin has a single form: <span class="la">vīvāmus, amēmus, eāmus</span>.</p>
        <p>Purpose clauses with <em>damit</em> once took the Konjunktiv too (<em>damit er es wisse</em>); modern German usually has the indicative (<em>damit er es weiß</em>). Latin always uses the subjunctive.</p>
      `
    },
    {
      title: 'ūnius assis',
      html: `
        <p>The <span class="la">as</span> was the basic bronze coin of Rome. By Catullus’s time it was worth a quarter of a sesterce (Lecture XVI) and was the proverbial small coin, like a farthing or a <em>Pfennig</em>. <span class="la">ūnius assis aestimāre</span>, “to value at one as”, means “not to care a penny for”; the genitive expresses value. Catullus’s old men are worth less than nothing to him.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Janus_coin1.jpg/960px-Janus_coin1.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Janus_coin1.jpg/500px-Janus_coin1.jpg|https://upload.wikimedia.org/wikipedia/commons/4/48/Janus_coin1.jpg" alt="Bronze coin showing a two-faced head"><figcaption>A Roman bronze coin with the double head of Janus, the usual obverse of the republican <span class="la">as</span>. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Janus_coin1.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">sapiās, vīna liquēs, et spatiō brevī<br>spem longam resecēs.</p>
    <p>“Be wise, strain the wine, and since our span is short, cut back long hope.” Horace, <em>Odes</em> 1.11.6–7, checked against the copy in the course’s source files. Three present subjunctives used as gentle commands to Leuconoe, softer than imperatives: “you should be wise …”. Two lines earlier, <span class="la">Tū nē quaesierīs</span>, “don’t ask”, is a prohibition with the perfect subjunctive (Lecture XXXI).</p>
    <p>Pliny’s letter begins with a purpose clause: Tacitus has asked for an account <span class="la">quō vērius trādere posterīs possīs</span>, “so that you can hand it down to posterity more truthfully” (6.16.1). <span class="la">possīs</span>, present subjunctive of <span class="la">possum</span>; <span class="la">quō</span> instead of <span class="la">ut</span> because the clause contains a comparative (<span class="la">vērius</span>).</p>
    <p>And in the reading, Catullus’s <span class="la">vīvāmus … amēmus … aestimēmus</span> (exhortation) and <span class="la">nē sciāmus, aut nē quis malus invidēre possit</span> (purpose).</p>
  `,

  pronunciation: `
    <h3>The vowel change</h3>
    <p>The present subjunctive is recognised by its vowel: <span class="la">ē</span> in the first conjugation, <span class="la">ā</span> in all the others. Say them long and stressed where the rule puts the stress: <span class="la">a-MĒ-mus, mo-ne-Ā-mus, re-GĀ-mus, au-di-Ā-mus</span>.</p>
    <h3>Catullus’s hendecasyllables</h3>
    <p>Catullus 5 is in the hendecasyllable, an eleven-syllable line much used by him. Read it with the natural word stresses and you will hear its run: <span class="la">VĪ-vā-mus, mea LES-bi(a) atqu(e) a-MĒ-mus</span>, with two elisions: a final vowel before an initial vowel is slurred away. In line 3, <span class="la">ūnius</span> is scanned with a short second <span class="la">i</span>, as often in verse.</p>
  `,

  grammar: [
    {
      title: '1. The present subjunctive active',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>amō</th><th>moneō</th><th>regō</th><th>capiō</th><th>audiō</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">amem</td><td class="la">moneam</td><td class="la">regam</td><td class="la">capiam</td><td class="la">audiam</td></tr>
            <tr><th>2nd sg.</th><td class="la">amēs</td><td class="la">moneās</td><td class="la">regās</td><td class="la">capiās</td><td class="la">audiās</td></tr>
            <tr><th>3rd sg.</th><td class="la">amet</td><td class="la">moneat</td><td class="la">regat</td><td class="la">capiat</td><td class="la">audiat</td></tr>
            <tr><th>1st pl.</th><td class="la">amēmus</td><td class="la">moneāmus</td><td class="la">regāmus</td><td class="la">capiāmus</td><td class="la">audiāmus</td></tr>
            <tr><th>2nd pl.</th><td class="la">amētis</td><td class="la">moneātis</td><td class="la">regātis</td><td class="la">capiātis</td><td class="la">audiātis</td></tr>
            <tr><th>3rd pl.</th><td class="la">ament</td><td class="la">moneant</td><td class="la">regant</td><td class="la">capiant</td><td class="la">audiant</td></tr>
          </tbody>
        </table></div>
        <p>The rule: the first conjugation changes its <span class="la">ā</span> to <span class="la">ē</span> (<span class="la">amat → amet</span>); all other conjugations take <span class="la">ā</span> (<span class="la">monet → moneat, regit → regat, audit → audiat</span>). A traditional mnemonic: <em>“first takes e, the rest take a”</em>.</p>
        <p>Note the overlap with the future: in the third and fourth conjugations the first person singular is identical (<span class="la">regam, capiam, audiam</span> = “I shall rule …” or subjunctive), but the other persons differ: future <span class="la">regēs, reget</span>, subjunctive <span class="la">regās, regat</span>. And in the first conjugation, the subjunctive <span class="la">amēs, amet</span> looks like the future of <span class="la">regō</span> (<span class="la">regēs, reget</span>): know your conjugations.</p>
      `
    },
    {
      title: '2. Passive, sum and possum',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>amō (pass.)</th><th>regō (pass.)</th><th>sum</th><th>possum</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">amer</td><td class="la">regar</td><td class="la">sim</td><td class="la">possim</td></tr>
            <tr><th>2nd sg.</th><td class="la">amēris</td><td class="la">regāris</td><td class="la">sīs</td><td class="la">possīs</td></tr>
            <tr><th>3rd sg.</th><td class="la">amētur</td><td class="la">regātur</td><td class="la">sit</td><td class="la">possit</td></tr>
            <tr><th>1st pl.</th><td class="la">amēmur</td><td class="la">regāmur</td><td class="la">sīmus</td><td class="la">possīmus</td></tr>
            <tr><th>2nd pl.</th><td class="la">amēminī</td><td class="la">regāminī</td><td class="la">sītis</td><td class="la">possītis</td></tr>
            <tr><th>3rd pl.</th><td class="la">amentur</td><td class="la">regantur</td><td class="la">sint</td><td class="la">possint</td></tr>
          </tbody>
        </table></div>
        <p>The passive simply uses the passive endings (Lecture XIX). <span class="la">sum</span> and <span class="la">possum</span> have a vowel <span class="la">ī</span>, an old optative form: <span class="la">sim, sīs, sit</span>. German <em>sei</em> and English “be” in “so be it” do the same job.</p>
      `
    },
    {
      title: '3. The jussive and hortatory subjunctive',
      html: `
        <p>In a main clause, the present subjunctive expresses a command or a wish:</p>
        <ul>
          <li><strong>Hortatory</strong> (first person plural): <span class="la">Vīvāmus atque amēmus.</span> Let us live and love. <span class="la">Eāmus!</span> Let’s go!</li>
          <li><strong>Jussive</strong> (third person): <span class="la">Veniat!</span> Let him come! <span class="la">Sit tibi terra levis.</span> May the earth lie light on you (a common epitaph, often abbreviated S.T.T.L.).</li>
          <li><strong>Second person</strong>, a polite or general command: <span class="la">Sapiās.</span> You should be wise.</li>
        </ul>
        <p>The negative is <span class="la">nē</span>: <span class="la">Nē veniat!</span> Let him not come. German <em>Er komme nicht!</em></p>
      `
    },
    {
      title: '4. Purpose clauses: ut and nē',
      html: `
        <p>A clause that states the purpose of the main action is introduced by <span class="la">ut</span> “so that, in order that” or, if negative, <span class="la">nē</span> “so that … not, lest”, and its verb is in the subjunctive:</p>
        <ul>
          <li><span class="la">Labōrat ut pecūniam habeat.</span> He works in order to have money (so that he may have money).</li>
          <li><span class="la">Fugiunt nē capiantur.</span> They flee so as not to be captured.</li>
          <li><span class="la">conturbābimus illa, nē sciāmus.</span> We shall muddle them up so that we may not know (Catullus).</li>
        </ul>
        <p>English often uses an infinitive (“in order to have”); Latin prose never uses the infinitive for purpose. German uses <em>um … zu</em> or <em>damit</em>.</p>
        <p>After a main verb in the present or future, the purpose clause has the present subjunctive. After a past main verb, it has the imperfect subjunctive (Lecture XXX); this “sequence of tenses” is treated in Lecture XXXI.</p>
        <p>When the purpose clause contains a comparative, <span class="la">quō</span> replaces <span class="la">ut</span>: <span class="la">quō vērius trādere possīs</span>, “so that you may hand it down more truthfully” (Pliny).</p>
      `
    },
    {
      title: '5. nē quis',
      html: `
        <p>After <span class="la">nē</span> (and <span class="la">sī, nisi, num</span>), the indefinite “anyone, anything” is <span class="la">quis, quid</span>, not <span class="la">aliquis</span>: <span class="la">nē quis malus invidēre possit</span>, “so that no wicked person may be able to cast the evil eye”. A useful rhyme from English schools: <em>after sī, nisi, num and nē, all the ali’s go away</em>.</p>
      `
    }
  ],

  vocab: [
    { id: 'ut-purp', head: 'ut (+ subj.)', la: 'ut', pos: 'conjunction', en: 'so that, in order that (purpose)', stress: 'UT', note: 'With the indicative: as, when.' },
    { id: 'ne-purp', head: 'nē (+ subj.)', la: 'nē', pos: 'conjunction / adverb', en: 'so that … not, lest; not (in commands and wishes)', stress: 'NĒ', note: 'Not to be confused with the question particle -ne.' },
    { id: 'rumor', head: 'rūmor', la: 'rūmor, rūmōris', g: 'm', pos: 'noun, 3rd decl.', en: 'rumour, gossip; talk', stress: 'RŪ-mor · rū-MŌ-ris', deriv: 'rumour' },
    { id: 'as', head: 'as', la: 'as, assis', g: 'm', pos: 'noun, 3rd decl.', en: 'as (a bronze coin of small value)', stress: 'AS · AS-sis', note: 'ūnius assis aestimāre: not to care a penny for.' },
    { id: 'basium', head: 'bāsium', la: 'bāsium, bāsiī', g: 'n', pos: 'noun, 2nd decl.', en: 'kiss', stress: 'BĀ-si-um', deriv: 'baiser (French), bacio (Italian)', note: 'Rare before Catullus; perhaps from the language of northern Italy.' },
    { id: 'sol', head: 'sōl', la: 'sōl, sōlis', g: 'm', pos: 'noun, 3rd decl.', en: 'sun; pl. days', stress: 'SŌL', deriv: 'solar', note: 'Catullus: sōlēs occidere et redīre possunt.' },
    { id: 'aestimo', head: 'aestimō', la: 'aestimō, aestimāre, aestimāvī, aestimātum', pos: 'verb, 1st conj.', en: 'value, estimate', stress: 'AES-ti-mō · aes-ti-MĀ-re', deriv: 'estimate, esteem', note: 'With a genitive of value: ūnius assis.' },
    { id: 'occido', head: 'occidō', la: 'occidō, occidere, occidī, occāsum', pos: 'verb, 3rd conj.', en: 'fall; set (of the sun); die', stress: 'OC-ci-dō · oc-CI-de-re', deriv: 'occident', note: 'ob + cadō. Not occīdō, “kill” (ob + caedō).' },
    { id: 'redeo', head: 'redeō', la: 'redeō, redīre, rediī, reditum', pos: 'verb, irregular', en: 'go back, return', stress: 'RE-de-ō · re-DĪ-re', note: 'red + eō, “go” (Lecture XXXVIII).' },
    { id: 'conturbo', head: 'conturbō', la: 'conturbō, conturbāre, conturbāvī, conturbātum', pos: 'verb, 1st conj.', en: 'throw into confusion; (business) go bankrupt', stress: 'con-TUR-bō · con-tur-BĀ-re', deriv: 'disturb (related)' },
    { id: 'invideo', head: 'invideō', la: 'invideō, invidēre, invīdī, invīsum (+ dat.)', pos: 'verb, 2nd conj.', en: 'envy, begrudge; cast the evil eye on', stress: 'in-VI-de-ō · in-vi-DĒ-re', deriv: 'envy, invidious', note: 'in + videō: “look upon (with hostility)”.' },
    { id: 'sapio', head: 'sapiō', la: 'sapiō, sapere, sapīvī', pos: 'verb, 3rd conj. (-iō)', en: 'be wise; have taste', stress: 'SA-pi-ō · SA-pe-re', deriv: 'sapient, Homo sapiens', note: 'Compare sapientia (Lecture I). Horace: sapiās.' },
    { id: 'severus', head: 'sevērus', la: 'sevērus, -a, -um', pos: 'adjective', en: 'strict, stern, serious', stress: 'se-VĒ-rus', deriv: 'severe' },
    { id: 'cum-conj', head: 'cum (+ subj.)', la: 'cum', pos: 'conjunction', en: 'when, since, although', stress: 'CUM', note: 'The conjunction, not the preposition: cum clauses in Lecture XXXII.' }
  ],

  grammarCards: [
    { id: 'g29-rule', front: 'Present subjunctive: the vowel', back: '1st conj. ē (amet); all others ā (moneat, regat, capiat, audiat)' },
    { id: 'g29-amo', front: 'amō: present subjunctive', back: 'amem, amēs, amet, amēmus, amētis, ament' },
    { id: 'g29-rego', front: 'regō: present subjunctive', back: 'regam, regās, regat, regāmus, regātis, regant' },
    { id: 'g29-audio', front: 'audiō: present subjunctive', back: 'audiam, audiās, audiat, audiāmus, audiātis, audiant' },
    { id: 'g29-sum', front: 'sum: present subjunctive', back: 'sim, sīs, sit, sīmus, sītis, sint' },
    { id: 'g29-possum', front: 'possum: present subjunctive', back: 'possim, possīs, possit, possīmus, possītis, possint' },
    { id: 'g29-pass', front: 'amō: present subjunctive passive', back: 'amer, amēris, amētur, amēmur, amēminī, amentur' },
    { id: 'g29-regam', front: 'regam: future or subjunctive?', back: 'Both (1st sg.); 2nd sg. distinguishes: regēs (fut.) vs regās (subj.)' },
    { id: 'g29-hort', front: 'Hortatory subjunctive', back: '1st pl.: vīvāmus, let us live' },
    { id: 'g29-jussive', front: 'Jussive subjunctive', back: '3rd pers.: veniat, let him come; negative nē' },
    { id: 'g29-sttl', front: 'S.T.T.L.', back: 'sit tibi terra levis: may the earth lie light on you' },
    { id: 'g29-purpose', front: 'Purpose clause', back: 'ut / nē + subjunctive: so that / so that … not' },
    { id: 'g29-quo', front: 'quō in a purpose clause', back: 'replaces ut when the clause has a comparative: quō vērius possīs' },
    { id: 'g29-nequis', front: 'nē quis', back: 'so that no one (quis = anyone after sī, nisi, num, nē)' },
    { id: 'g29-german', front: 'Es lebe der König; Man nehme drei Eier', back: 'German Konjunktiv I in commands and wishes, like the Latin jussive' },
    { id: 'g29-catullus', front: 'Vīvāmus, mea Lesbia, atque amēmus', back: 'Let us live, my Lesbia, and let us love (Catullus 5.1)' },
    { id: 'g29-horace', front: 'sapiās, vīna liquēs', back: 'be wise, strain the wine (Horace, Odes 1.11.6)' },
    { id: 'g29-conturbo', front: 'conturbābimus illa, nē sciāmus', back: 'we shall muddle them up, so that we may not know (Catullus 5.11)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">amēmus</span>:', options: ['let us love (subjunctive)', 'we love', 'we shall love', 'we loved'], answer: 0, explain: '1st conj. subjunctive: ē.' },
    { id: 'e2', type: 'mc', prompt: 'Present subjunctive 3rd sg. of <span class="la">regō</span>:', options: ['regat', 'reget', 'regit', 'regēbat'], answer: 0, explain: 'All conjugations except the first take ā.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">sit</span>:', options: ['let him be / may he be', 'he is', 'he was', 'he will be'], answer: 0, explain: 'Present subjunctive of sum.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Labōrat ut pecūniam habeat.</span>', options: ['He works in order to have money.', 'He works as he has money.', 'He works because he has money.', 'He has money and works.'], answer: 0, explain: 'ut + subjunctive: purpose.' },
    { id: 'e5', type: 'mc', prompt: 'Which form is subjunctive?', options: ['moneat', 'monet', 'monēbit', 'monēbat'], answer: 0, explain: '2nd conj. subjunctive: -ea-.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Fugiunt nē capiantur.</span>', options: ['They flee so as not to be captured.', 'They flee and are not captured.', 'They do not flee and are captured.', 'They flee if they are captured.'], answer: 0, explain: 'nē + subjunctive: negative purpose.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Vīv___, mea Lesbia!</span>', hint: 'let us live', answers: ['āmus', 'amus'], full: 'Vīvāmus, mea Lesbia!', explain: 'vīvō (3rd conj.): -āmus.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Ven___ Lūcius!</span>', hint: 'let him come', answers: ['iat'], full: 'Veniat Lūcius!', explain: 'Jussive, 4th conj.: -iat.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Puerī discunt ut sapientēs s___.</span>', hint: 'may be (3rd pl.)', answers: ['int'], full: 'Puerī discunt ut sapientēs sint.', explain: 'sum: sint.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Labōrō ut laud___.</span>', hint: 'I may be praised', answers: ['er'], full: 'Labōrō ut lauder.', explain: '1st conj. passive subjunctive: -er.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Portam claudimus ___ fūrēs intrent.</span>', hint: 'so that … not', answers: ['nē', 'ne'], full: 'Portam claudimus nē fūrēs intrent.', explain: 'Negative purpose: nē.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Epistulam scrībō ut amīcus rem sci___.</span>', hint: 'may know', answers: ['at'], full: 'Epistulam scrībō ut amīcus rem sciat.', explain: '4th conj. subjunctive: -iat.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the present subjunctive of <span class="la">amō</span> and <span class="la">regō</span>.', headers: ['amō', 'regō'], rows: [
      { label: '1st sg.', answers: ['amem', 'regam'] },
      { label: '2nd sg.', answers: ['amēs', 'regās'] },
      { label: '3rd sg.', answers: ['amet', 'regat'] },
      { label: '1st pl.', answers: ['amēmus', 'regāmus'] },
      { label: '2nd pl.', answers: ['amētis', 'regātis'] },
      { label: '3rd pl.', answers: ['ament', 'regant'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the present subjunctive of <span class="la">sum</span> and <span class="la">audiō</span>.', headers: ['sum', 'audiō'], rows: [
      { label: '1st sg.', answers: ['sim', 'audiam'] },
      { label: '2nd sg.', answers: ['sīs', 'audiās'] },
      { label: '3rd sg.', answers: ['sit', 'audiat'] },
      { label: '1st pl.', answers: ['sīmus', 'audiāmus'] },
      { label: '2nd pl.', answers: ['sītis', 'audiātis'] },
      { label: '3rd pl.', answers: ['sint', 'audiant'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each form to its meaning.', pairs: [
      ['amēmus', 'let us love'], ['veniat', 'let him come'], ['sīs', 'may you be'], ['nē capiantur', 'so that they may not be captured'], ['ut sciat', 'so that he may know']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Venit ut amīcum videat.', tokens: ['He comes', 'in order', 'to see', 'his friend'], explain: 'Purpose clause; English uses an infinitive.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Vīvāmus atque amēmus!', model: 'Let us live and let us love!', accepted: ['let us live and let us love', 'let us live and love', 'let’s live and love', 'lets live and love', 'let’s live and let’s love', 'lets live and lets love'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Mīlitēs pugnant ut patriam dēfendant.', model: 'The soldiers fight in order to defend their country.', accepted: ['soldiers fight in order to defend their country', 'soldiers fight to defend their country', 'soldiers fight so that they may defend their country', 'soldiers fight in order to defend country', 'soldiers fight to defend country', 'soldiers fight so that they may defend country', 'soldiers fight in order to defend their homeland', 'soldiers fight to defend their homeland', 'soldiers are fighting to defend their country'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Nē veniat!', model: 'Let him not come!', accepted: ['let him not come', 'may he not come', 'he should not come', 'let her not come', 'don’t let him come', 'dont let him come'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'Let us go! (use eāmus)', model: 'Eāmus!', accepted: ['eāmus'], explain: 'The first person plural present subjunctive gives an exhortation, “let us …”. Eō: eam, eās, eat, eāmus.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'may he be (present subjunctive)', model: 'sit', accepted: ['sit'], explain: 'Present subjunctive of sum: sim, sīs, sit. German sei comes from the same old form.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'so that we may not know', model: 'nē sciāmus', accepted: ['nē sciāmus'], explain: 'A negative purpose clause takes nē + subjunctive, not ut nōn. Fourth-conjugation subjunctive -iā-: sciāmus.' },
    { id: 'e23', type: 'mc', prompt: 'Catullus’s <span class="la">rūmōrēs … senum sevēriōrum omnēs ūnius aestimēmus assis</span>:', options: ['let us value all the gossip of strict old men at a single penny', 'let us pay the old men one coin each', 'the old men value our kisses at one as', 'let us count the old men’s rumours'], answer: 0, explain: 'Genitive of value: ūnius assis.' },
    { id: 'e24', type: 'mc', prompt: 'Why does Catullus want the kisses “muddled up”?', options: ['So that no one, not even the lovers, knows the total, and no ill-wisher can cast the evil eye', 'Because he cannot count', 'So that Lesbia gets more', 'Because the old men are watching'], answer: 0, explain: 'nē sciāmus, aut nē quis malus invidēre possit.' },
    { id: 'e25', type: 'mc', prompt: 'German <em>Es lebe der König!</em> corresponds to the Latin:', options: ['jussive subjunctive', 'future indicative', 'imperative', 'infinitive'], answer: 0, explain: 'Konjunktiv I in a wish or command.' }
  ],

  reading: {
    title: 'Catullus 5',
    note: 'Authentic text, unadapted: Catullus, poem 5, complete; from the copy in the course’s source files, length marks added; line breaks shown by /. Tap any word.',
    text: 'Vīvāmus, mea Lesbia, atque amēmus, / rūmōrēsque senum sevēriōrum / omnēs ūnius aestimēmus assis! / sōlēs occidere et redīre possunt: / nōbīs cum semel occidit brevis lūx, / nox est perpetua ūna dormienda. / dā mī bāsia mīlle, deinde centum, / dein mīlle altera, dein secunda centum, / deinde usque altera mīlle, deinde centum. / dein, cum mīlia multa fēcerimus, / conturbābimus illa, nē sciāmus, / aut nē quis malus invidēre possit, / cum tantum sciat esse bāsiōrum.',
    translation: 'Let us live, my Lesbia, and let us love, and let us value all the gossip of stern old men at a single penny! Suns can set and return: for us, when once our brief light has set, there is one everlasting night to be slept. Give me a thousand kisses, then a hundred, then another thousand, then a second hundred, then yet another thousand, then a hundred. Then, when we have made many thousands, we shall muddle them up, so that we may not know, or so that no wicked person may be able to cast an evil eye on us, when he knows that there are so many kisses.',
    notes: [
      { ref: 'Vīvāmus, mea Lesbia, atque amēmus', html: 'Two hortatory subjunctives framing the address. <span class="la">vīvere</span> here means “to live fully, to enjoy life”. On Lesbia, Lecture XI.' },
      { ref: 'rūmōrēsque senum sevēriōrum', html: '<span class="la">sevēriōrum</span>: comparative, “rather stern” or “too stern” (Lecture XXVII), genitive plural, consonant stem: <span class="la">-ōrum</span>.' },
      { ref: 'omnēs ūnius aestimēmus assis', html: 'A third hortatory subjunctive. <span class="la">ūnius assis</span>: genitive of value, “at one as”. <span class="la">omnēs</span> agrees with <span class="la">rūmōrēs</span>.' },
      { ref: 'sōlēs occidere et redīre possunt', html: '<span class="la">sōlēs</span>: “suns”, that is, days. The contrast that follows: the sun sets and rises again, we do not.' },
      { ref: 'nōbīs cum semel occidit brevis lūx', html: '<span class="la">nōbīs</span>: dative, “for us”. <span class="la">cum</span> + indicative: “when”. <span class="la">semel</span>: “once (and for all)”. <span class="la">brevis lūx</span>: the short light of a human life.' },
      { ref: 'nox est perpetua ūna dormienda', html: 'Passive periphrastic (Lecture XXV): “one everlasting night is to be slept (by us)”, with <span class="la">nōbīs</span> as dative of agent. The line is heavy with long vowels after the quick opening.' },
      { ref: 'dā mī bāsia mīlle, deinde centum', html: 'Lecture XVI. <span class="la">dā</span>: imperative; Catullus turns from exhortation to command. <span class="la">mī</span> = <span class="la">mihi</span>.' },
      { ref: 'dein, cum mīlia multa fēcerimus', html: '<span class="la">fēcerimus</span>: future perfect (Lecture XIII), or perhaps perfect subjunctive; <span class="la">cum</span> “when”.' },
      { ref: 'conturbābimus illa, nē sciāmus', html: '<span class="la">conturbābimus</span>: future indicative. <span class="la">nē sciāmus</span>: negative purpose clause with the present subjunctive: “so that we may not know (the number)”. On the business sense of <span class="la">conturbāre</span>, see the background.' },
      { ref: 'aut nē quis malus invidēre possit', html: 'A second purpose clause. <span class="la">quis</span> = “anyone” after <span class="la">nē</span>. <span class="la">malus</span>: “a wicked person”, used as a noun. <span class="la">invidēre</span>: to cast the evil eye.' },
      { ref: 'cum tantum sciat esse bāsiōrum', html: '<span class="la">cum</span> + subjunctive: “when he knows”, or “since he would know” (Lecture XXXII). <span class="la">tantum … bāsiōrum</span>: “so much of kisses”, genitive of the whole (Lecture XVI), in an indirect statement after <span class="la">sciat</span>.' }
    ],
    glosses: {
      'vīvāmus': 'pres. subj. 1st pl. of vīvō: let us live', 'mea': 'voc. f. of meus: my', 'lesbia': 'Lesbia (voc.)', 'atque': 'and', 'amēmus': 'pres. subj. 1st pl. of amō: let us love',
      'rūmōrēsque': 'and the gossip (acc. pl. of rūmor + -que)', 'senum': 'gen. pl. of senex: of old men', 'sevēriōrum': 'gen. pl. of sevērior: rather stern',
      'omnēs': 'acc. pl. of omnis: all', 'ūnius': 'gen. of ūnus: (of) one', 'aestimēmus': 'pres. subj. 1st pl. of aestimō: let us value', 'assis': 'gen. of as: (at) a penny',
      'sōlēs': 'nom. pl. of sōl: suns, days', 'occidere': 'to set', 'et': 'and', 'redīre': 'to return', 'possunt': '3rd pl. of possum: can',
      'nōbīs': 'dat. of nōs: for us', 'cum': 'when', 'semel': 'once (and for all)', 'occidit': '3rd sg. of occidō: sets, has set', 'brevis': 'short, brief', 'lūx': 'light (nom.)',
      'nox': 'night (nom.)', 'est': 'is', 'perpetua': 'nom. f. of perpetuus: everlasting', 'ūna': 'nom. f. of ūnus: one', 'dormienda': 'nom. f. gerundive of dormiō: to be slept',
      'dā': 'imperative of dō: give!', 'mī': 'mihi: to me', 'bāsia': 'acc. pl. of bāsium: kisses', 'mīlle': 'a thousand', 'deinde': 'then', 'centum': 'a hundred', 'dein': 'then', 'altera': 'acc. pl. n. of alter: another', 'secunda': 'acc. pl. n. of secundus: second', 'usque': 'continuously, yet',
      'mīlia': 'acc. pl. of mīlia: thousands', 'multa': 'acc. pl. n. of multus: many', 'fēcerimus': 'fut. perf. 1st pl. of faciō: we shall have made',
      'conturbābimus': 'fut. 1st pl. of conturbō: we shall muddle up', 'illa': 'acc. pl. n. of ille: them', 'nē': 'so that … not', 'sciāmus': 'pres. subj. 1st pl. of sciō: we may know',
      'aut': 'or', 'quis': 'anyone', 'malus': 'a wicked person (nom.)', 'invidēre': 'to cast an evil eye, envy', 'possit': 'pres. subj. 3rd sg. of possum: may be able',
      'tantum': 'so much', 'sciat': 'pres. subj. 3rd sg. of sciō: knows', 'esse': 'to be (there is)', 'bāsiōrum': 'gen. pl. of bāsium: of kisses'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'How much does Catullus value the gossip of stern old men?', options: ['At a single penny', 'At a thousand kisses', 'Very highly', 'At a hundred sesterces'], answer: 0, explain: 'ūnius aestimēmus assis.' },
      { id: 'r2', type: 'mc', prompt: 'What contrast does Catullus draw in lines 4–6?', options: ['The sun sets and returns, but our brief light is followed by endless night', 'Day is short, night is long', 'Old men sleep, lovers wake', 'The sun is brighter than Lesbia'], answer: 0, explain: 'sōlēs occidere et redīre possunt: nōbīs … nox est perpetua ūna dormienda.' },
      { id: 'r3', type: 'mc', prompt: 'How many kisses are counted in lines 7–9?', options: ['3,300', '1,000', '2,200', 'countless'], answer: 0, explain: 'Lecture XVI.' },
      { id: 'r4', type: 'mc', prompt: 'Which forms in the last lines are purpose clauses?', options: ['nē sciāmus and nē quis … possit', 'cum … fēcerimus', 'conturbābimus illa', 'cum tantum sciat'], answer: 0, explain: 'nē + subjunctive.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">audiat</span>:', options: ['let him hear / he may hear', 'he hears', 'he will hear', 'he heard'], answer: 0, explain: 'Present subjunctive, 4th conj.' },
      { id: 't2', type: 'mc', prompt: 'Which is NOT a present subjunctive?', options: ['reget', 'regat', 'amet', 'sit'], answer: 0, explain: 'reget is future indicative.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Sit tibi terra levis.</span>', options: ['May the earth lie light on you.', 'The earth is light for you.', 'You are light on the earth.', 'Let the earth be yours.'], answer: 0, explain: 'Jussive/optative subjunctive; common on tombstones.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Mīlitēs mittit ut urbem cap___.</span>', hint: 'they may capture', answers: ['iant'], full: 'Mīlitēs mittit ut urbem capiant.', explain: '-iō verb: -iant.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Celeriter currimus ___ ā canibus capiāmur.</span>', hint: 'so that … not', answers: ['nē', 'ne'], full: 'Celeriter currimus nē ā canibus capiāmur.', explain: 'Negative purpose.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Librōs legimus ut sapientēs sīmus.', model: 'We read books in order to be wise.', accepted: ['we read books in order to be wise', 'we read books to be wise', 'we read books so that we may be wise', 'we read books so that we are wise', 'we are reading books in order to be wise', 'we are reading books to be wise'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'Let us live!', model: 'Vīvāmus!', accepted: ['vīvāmus'], explain: 'Hortatory subjunctive. Vīvō is third conjugation, so its subjunctive has -ā-: vīvāmus.' },
      { id: 't8', type: 'mc', prompt: 'Horace’s <span class="la">sapiās, vīna liquēs</span> are:', options: ['present subjunctives used as gentle commands', 'future indicatives', 'imperatives', 'purpose clauses'], answer: 0, explain: '“You should be wise, strain the wine.”' },
      { id: 't9', type: 'mc', prompt: 'In <span class="la">nē quis malus invidēre possit</span>, <span class="la">quis</span> means:', options: ['anyone', 'who?', 'which', 'someone known'], answer: 0, explain: 'After nē, quis = anyone.' },
      { id: 't10', type: 'mc', prompt: 'Why <span class="la">quō</span> instead of <span class="la">ut</span> in Pliny’s <span class="la">quō vērius trādere possīs</span>?', options: ['The purpose clause contains a comparative', 'quō means “where”', 'It is a question', 'possīs requires quō'], answer: 0, explain: 'quō + comparative in purpose clauses.' },
      { id: 't11', type: 'mc', prompt: 'In Roman business, <span class="la">conturbāre</span> meant:', options: ['to go bankrupt, throw one’s accounts into confusion', 'to count money', 'to lend at interest', 'to pay a debt'], answer: 0, explain: 'The imagery behind Catullus 5.11.' }
    ]
  },

  reference: [
    { title: 'Present subjunctive active', headers: ['', 'amō', 'moneō', 'regō', 'capiō', 'audiō', 'sum'], rows: [
      ['1st sg.', 'amem', 'moneam', 'regam', 'capiam', 'audiam', 'sim'], ['2nd sg.', 'amēs', 'moneās', 'regās', 'capiās', 'audiās', 'sīs'], ['3rd sg.', 'amet', 'moneat', 'regat', 'capiat', 'audiat', 'sit'], ['1st pl.', 'amēmus', 'moneāmus', 'regāmus', 'capiāmus', 'audiāmus', 'sīmus'], ['2nd pl.', 'amētis', 'moneātis', 'regātis', 'capiātis', 'audiātis', 'sītis'], ['3rd pl.', 'ament', 'moneant', 'regant', 'capiant', 'audiant', 'sint']
    ] },
    { title: 'Present subjunctive passive', headers: ['', 'amō', 'regō'], rows: [
      ['1st sg.', 'amer', 'regar'], ['2nd sg.', 'amēris', 'regāris'], ['3rd sg.', 'amētur', 'regātur'], ['1st pl.', 'amēmur', 'regāmur'], ['2nd pl.', 'amēminī', 'regāminī'], ['3rd pl.', 'amentur', 'regantur']
    ] },
    { title: 'Uses so far', headers: ['Use', 'Example', 'Meaning'], rows: [
      ['Hortatory (1st pl.)', 'vīvāmus', 'let us live'], ['Jussive (3rd pers.)', 'veniat', 'let him come'], ['Polite command (2nd pers.)', 'sapiās', 'be wise'], ['Purpose', 'ut sciat; nē sciāmus', 'so that he may know; so that we may not know']
    ] }
  ]
});
