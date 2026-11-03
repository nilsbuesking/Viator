/*
 * Latin — Lecture XL: the gerund and the gerundive; gerundive in place of gerund + object;
 * purpose with ad, causā, grātiā; gerundive with cūrō; review of the passive periphrastic.
 * Authentic reading: Virgil, Aeneid 1.1–11.
 * Content file only. Source texts (Virgil; Pliny, Letters 6.16 and 6.20) checked against the texts supplied
 * by Nils; length marks as in the copy, with the corrections noted there. Pictures from Wikimedia Commons;
 * see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-40',
  number: 40,
  title: 'Scrībere legenda',
  subtitle: 'The gerund (ars scrībendī) and the gerundive (liber legendus); ad pācem petendam; pācis petendae causā; authentic reading: Virgil, Aeneid 1.1–11',
  minutes: 75,

  intro: `
    <p>Latin has two verbal forms in <span class="la">-nd-</span>. The <strong>gerund</strong> is a verbal noun, active in meaning, like English “-ing” in “the art of writing”: <span class="la">ars scrībendī</span>. The <strong>gerundive</strong> is a verbal adjective, passive in meaning, “to be …-ed”: <span class="la">liber legendus</span>, “a book to be read”. You met the gerundive in Lecture XXV with <span class="la">sum</span> (the passive periphrastic, <span class="la">legendus est</span>, “must be read”), and both forms have turned up in the Pliny readings: <span class="la">abeundī cōnsilium</span>, “a plan of leaving”; <span class="la">multa mīranda</span>, “many things to be wondered at”.</p>
    <p>German has a true gerundive too, the <em>zu</em>-participle: <em>das zu lesende Buch</em>, “the book to be read”, is exactly <span class="la">liber legendus</span>. German grammar even calls it <em>Gerundivum</em>.</p>
    <p>The reading is the most famous opening in Latin literature: the first eleven lines of Virgil’s <em>Aeneid</em>.</p>
  `,

  background: [
    {
      title: 'Arma virumque canō',
      html: `
        <p>Virgil (70–19 BC) worked on the <em>Aeneid</em> for the last decade of his life and died before revising it; Augustus had it published against, so the ancient biographies say, the poet’s own wish. Its first words announce the programme. <span class="la">Arma</span>, “wars”, recalls the <em>Iliad</em>; <span class="la">virum</span>, “a man”, the <em>Odyssey</em>, whose first word is “man”. The twelve books follow the same order: the wanderings of Aeneas (books 1–6), then war in Italy (7–12).</p>
        <p>The eleven lines move from Troy to Rome in one sentence: the man who came from the shores of Troy to Italy and Lavinium, harried on land and sea by the anger of Juno, until he could found a city and bring his gods to Latium, from which came the Latin race, the fathers of Alba Longa and the walls of Rome. Then the poet asks the Muse why a goddess should persecute a man so outstanding in <span class="la">pietās</span>, and ends with a question: <span class="la">Tantaene animīs caelestibus īrae?</span>, “Can there be such anger in heavenly minds?”</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Virgil_Mosaic_Bardo_Museum_Tunis.jpg/960px-Virgil_Mosaic_Bardo_Museum_Tunis.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Virgil_Mosaic_Bardo_Museum_Tunis.jpg/500px-Virgil_Mosaic_Bardo_Museum_Tunis.jpg|https://upload.wikimedia.org/wikipedia/commons/e/eb/Virgil_Mosaic_Bardo_Museum_Tunis.jpg" alt="Roman floor mosaic of a seated man holding a scroll, between two standing women"><figcaption>Virgil between two Muses, mosaic from Hadrumetum (Sousse), 3rd century AD (Tunis, Bardo National Museum). The scroll on his lap is usually read as showing Aeneid 1.8: <span class="la">Mūsa, mihi causās memorā …</span> <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Virgil_Mosaic_Bardo_Museum_Tunis.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Facere scrībenda, scrībere legenda',
      html: `
        <p>Pliny uses two gerundives as nouns in a famous sentence at the start of his first letter (6.16.3, Lecture XXVIII): he considers fortunate those to whom the gods have granted <span class="la">aut facere scrībenda aut scrībere legenda</span>, “either to do things worth writing about or to write things worth reading”, and most fortunate those granted both, like his uncle. The neuter plural gerundive, “things to be written”, “things to be read”, makes the antithesis possible in four words.</p>
      `
    },
    {
      title: 'Carthāgō dēlenda est?',
      html: `
        <p>The most quoted gerundive in Latin may not be ancient. Cato the Elder is reported to have ended every speech in the senate, whatever the subject, by saying that Carthage must be destroyed. But the ancient sources for this (Plutarch’s <em>Life of Cato</em> and some Latin authors) do not give the familiar wording; Plutarch writes in Greek. The Latin forms <span class="la">Carthāgō dēlenda est</span> and <span class="la">Cēterum cēnseō Carthāginem esse dēlendam</span> appear to be later formulations. They are good Latin, and an excellent example of the gerundive of obligation, but not a quotation.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Magnum propiusque nōscendum ut ērudītissimō virō vīsum.</p>
    <p>“To a very learned man, as he was, it seemed something important and to be investigated more closely.” Pliny, <em>Letters</em> 6.16.7 (Lecture XXVII), checked against the text Nils supplied; length marks added. <span class="la">nōscendum</span> [<span class="la">esse</span>]: gerundive of obligation, with <span class="la">ērudītissimō virō</span> as the dative of the person concerned.</p>
    <p>And at the end of the second letter: <span class="la">Nōbīs tamen nē tunc quidem … abeundī cōnsilium</span> (6.20.20, Lecture XXXVIII), “Even then we had no plan of leaving”: <span class="la">abeundī</span>, genitive of the gerund of <span class="la">abeō</span>, depending on <span class="la">cōnsilium</span>.</p>
    <p>Two gerundives used as nouns: <span class="la">Multa ibi mīranda, multās formīdinēs patimur</span> (6.20.8, Lecture XXXV), “There we experience many things to be wondered at, many terrors”; and Pliny’s <span class="la">facere scrībenda aut scrībere legenda</span> (6.16.3).</p>
  `,

  pronunciation: `
    <h3>The hexameter</h3>
    <p>The <em>Aeneid</em> is in dactylic hexameter: six feet, each a dactyl (— ∪ ∪) or a spondee (— —), the fifth usually a dactyl and the sixth always two syllables:</p>
    <p class="la">AR-ma vi- | RUM-que ca- | NŌ, TRŌ- | IAE quī | PRĪ-mus ab | Ō-rīs</p>
    <p>Elision: a final vowel (or vowel + <span class="la">m</span>) before a word beginning with a vowel or <span class="la">h</span> is slurred away: <span class="la">multum ille</span> is read <span class="la">mult(um) ille</span>, <span class="la">Lāvīniaque</span> is four syllables here, <span class="la">Lā-vī-nja-que</span>, with the <span class="la">i</span> as a consonant (a licence the poet takes with this name).</p>
    <h3>-nd-</h3>
    <p>The vowel before <span class="la">-nd-</span> is short in classical Latin: <span class="la">a-MAN-dus, LE-gen-dus, au-di-EN-dus</span>. The stress falls on that syllable because the double consonant makes it heavy.</p>
  `,

  grammar: [
    {
      title: '1. The gerund: a verbal noun',
      html: `
        <p>Present stem + <span class="la">-ndī, -ndō, -ndum, -ndō</span> (with <span class="la">-e-</span> in the 3rd and 4th conjugations: <span class="la">regendī, audiendī</span>). It has no nominative: the infinitive serves as the subject (<span class="la">Errāre hūmānum est</span>).</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Case</th><th>Form</th><th>Use</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>Genitive</td><td class="la">amandī</td><td>with nouns and adjectives</td><td class="la">ars scrībendī; cupidus videndī</td></tr>
            <tr><td>Dative</td><td class="la">amandō</td><td>rare; “for …-ing”</td><td class="la">aqua ūtilis bibendō</td></tr>
            <tr><td>Accusative</td><td class="la">ad amandum</td><td>after <span class="la">ad</span>: purpose</td><td class="la">ad pugnandum parātī</td></tr>
            <tr><td>Ablative</td><td class="la">amandō</td><td>means; with <span class="la">in, dē, ex</span></td><td class="la">discimus legendō; in legendō</td></tr>
          </tbody>
        </table></div>
        <p>The gerund is active and can take an object, but Latin prefers to avoid that (section 3). <span class="la">Fallendō vincit</span>: “He wins by deceiving”. The gerund of <span class="la">eō</span> is <span class="la">eundī</span>; deponents have gerunds too: <span class="la">loquendī, sequendī</span>.</p>
      `
    },
    {
      title: '2. The gerundive: a verbal adjective',
      html: `
        <p>Same stem + <span class="la">-ndus, -nda, -ndum</span>, declined like <span class="la">bonus</span>, passive in meaning: “(that is) to be …-ed”.</p>
        <ul>
          <li>With <span class="la">sum</span>, obligation (Lecture XXV): <span class="la">Liber legendus est.</span> The book must be read. With a dative of agent: <span class="la">Mihi liber legendus est.</span> I must read the book.</li>
          <li>Impersonal with intransitive verbs: <span class="la">Nōbīs eundum est.</span> We must go.</li>
          <li>As an adjective: <span class="la">vir laudandus</span>, a man to be praised, praiseworthy; <span class="la">horrenda nūbēs</span>, a terrible (to-be-dreaded) cloud (Pliny 6.20.9).</li>
          <li>As a noun: <span class="la">mīranda</span>, things to be wondered at; <span class="la">legenda</span>, things to be read (English <em>legend</em> comes from this).</li>
        </ul>
        <p>German: <em>der zu lobende Mann, das zu lesende Buch</em>; English has nothing similar and uses a relative clause or “to be …-ed”.</p>
      `
    },
    {
      title: '3. Gerundive instead of gerund + object',
      html: `
        <p>When a gerund would have a direct object, Latin normally turns the construction round: the object takes the case the gerund would have had, and the gerundive agrees with it.</p>
        <ul>
          <li>Gerund + object (possible, less common): <span class="la">ad petendum pācem</span></li>
          <li>Gerundive (normal): <span class="la">ad pācem petendam</span> to ask for peace</li>
          <li><span class="la">cupidus urbis videndae</span> eager to see the city</li>
          <li><span class="la">in urbe dēfendendā</span> in defending the city</li>
        </ul>
        <p>The translation is the same: always translate the gerundive in these phrases as an English “-ing” or “to …” with an object, not as a passive. <span class="la">ad pācem petendam</span>: “for peace to be asked for” → “to ask for peace”.</p>
      `
    },
    {
      title: '4. Purpose, and the gerundive with cūrō',
      html: `
        <p>Purpose is expressed by:</p>
        <ul>
          <li><span class="la">ad</span> + gerund or gerundive: <span class="la">ad pācem petendam</span></li>
          <li><span class="la">causā</span> or <span class="la">grātiā</span> (“for the sake of”) after a genitive: <span class="la">pācis petendae causā</span></li>
        </ul>
        <p>Together with <span class="la">ut</span>-clauses (Lecture XXIX), relative clauses (<span class="la">quī pācem peterent</span>, Lecture XXXIX) and the supine (<span class="la">pācem petītum</span>), this gives Latin five ways of saying “they came to ask for peace”.</p>
        <p>With <span class="la">cūrō, dō, trādō, relinquō</span>, the gerundive says what someone arranges to have done: <span class="la">Pontem faciendum cūrāvit.</span> He had a bridge built (literally “took care of a bridge to be made”). German uses <em>lassen</em>: <em>Er ließ eine Brücke bauen</em>.</p>
      `
    }
  ],

  vocab: [
    { id: 'cano', head: 'canō', la: 'canō, canere, cecinī, cantum', pos: 'verb, 3rd conj.', en: 'sing (of), celebrate in song; play (an instrument)', stress: 'CA-nō · CA-ne-re', deriv: 'chant, cantor', note: 'Arma virumque canō. Reduplicated perfect cecinī.' },
    { id: 'iacto', head: 'iactō', la: 'iactō, iactāre, iactāvī, iactātum', pos: 'verb, 1st conj.', en: 'toss, throw about; (pass.) be tossed about', stress: 'IAC-tō · iac-TĀ-re', note: 'Frequentative of iaciō, “throw”.' },
    { id: 'laedo', head: 'laedō', la: 'laedō, laedere, laesī, laesum', pos: 'verb, 3rd conj.', en: 'hurt, harm; offend', stress: 'LAE-dō · LAE-de-re', deriv: 'lesion', note: 'quō nūmine laesō: “because her divinity was offended in what way”.' },
    { id: 'doleo', head: 'doleō', la: 'doleō, dolēre, doluī, dolitūrus', pos: 'verb, 2nd conj.', en: 'grieve, be in pain; resent', stress: 'DO-le-ō · do-LĒ-re', deriv: 'doleful, condolence' },
    { id: 'volvo', head: 'volvō', la: 'volvō, volvere, volvī, volūtum', pos: 'verb, 3rd conj.', en: 'roll, turn; (of fate) bring round; undergo', stress: 'VOL-vō · VOL-ve-re', deriv: 'revolve, volume', note: 'A volūmen is a “rolled” book, a scroll. Cognate with German wälzen.' },
    { id: 'regina', head: 'rēgīna', la: 'rēgīna, rēgīnae', g: 'f', pos: 'noun, 1st decl.', en: 'queen', stress: 'rē-GĪ-na', note: 'rēgīna deum: Juno, queen of the gods.' },
    { id: 'moenia', head: 'moenia', la: 'moenia, moenium', g: 'n', pos: 'noun, 3rd decl. (pl. only)', en: 'city walls', stress: 'MOE-ni-a', note: 'Related to mūniō, “fortify”. altae moenia Rōmae: the walls of lofty Rome.' },
    { id: 'pietas', head: 'pietās', la: 'pietās, pietātis', g: 'f', pos: 'noun, 3rd decl.', en: 'dutifulness (to gods, family, country); devotion', stress: 'PI-e-tās · pi-e-TĀ-tis', deriv: 'piety, pity', note: 'Aeneas’ defining quality; much wider than English piety. Compare Pliny refusing to leave his mother.' },
    { id: 'superi', head: 'superī', la: 'superī, superōrum (poetic gen. pl. superum)', g: 'm', pos: 'noun, 2nd decl. (pl.)', en: 'the gods above', stress: 'SU-pe-rī', note: 'vī superum: by the power of the gods.' },
    { id: 'profugus', head: 'profugus', la: 'profugus, profuga, profugum', pos: 'adjective, 1st/2nd decl.', en: 'fugitive, exiled', stress: 'PRO-fu-gus', note: 'From profugiō, “flee away”.' },
    { id: 'insignis', head: 'īnsignis', la: 'īnsignis, īnsigne', pos: 'adjective, 3rd decl.', en: 'distinguished, outstanding, conspicuous', stress: 'īn-SIG-nis', deriv: 'insignia', note: 'in + signum. Whether the second i is long before gn is disputed; most editions do not mark it.' },
    { id: 'caelestis', head: 'caelestis', la: 'caelestis, caeleste', pos: 'adjective, 3rd decl.', en: 'heavenly, divine', stress: 'cae-LES-tis', deriv: 'celestial' },
    { id: 'cupidus', head: 'cupidus', la: 'cupidus, cupida, cupidum (+ gen.)', pos: 'adjective, 1st/2nd decl.', en: 'eager (for), desirous (of)', stress: 'CU-pi-dus', note: 'cupidus videndī: eager to see. Compare cupiō.' }
  ],

  grammarCards: [
    { id: 'g40-gerund', front: 'Gerund', back: 'Verbal noun, active: amandī, amandō, ad amandum, amandō (no nominative)' },
    { id: 'g40-gerundive', front: 'Gerundive', back: 'Verbal adjective, passive: amandus, -a, -um “to be loved”' },
    { id: 'g40-forms', front: 'Gerund of regō, audiō, eō, loquor', back: 'regendī, audiendī, eundī, loquendī' },
    { id: 'g40-ars', front: 'ars scrībendī', back: 'the art of writing (genitive of the gerund)' },
    { id: 'g40-legendo', front: 'Discimus legendō.', back: 'We learn by reading. (ablative of the gerund)' },
    { id: 'g40-ad', front: 'ad pācem petendam', back: 'to ask for peace (gerundive replacing gerund + object)' },
    { id: 'g40-causa', front: 'pācis petendae causā', back: 'for the sake of asking for peace, in order to ask for peace' },
    { id: 'g40-oblig', front: 'Mihi liber legendus est.', back: 'I must read the book. (gerundive of obligation + dative of agent)' },
    { id: 'g40-eundum', front: 'Nōbīs eundum est.', back: 'We must go. (impersonal gerundive)' },
    { id: 'g40-curo', front: 'Pontem faciendum cūrāvit.', back: 'He had a bridge built. (≈ er ließ eine Brücke bauen)' },
    { id: 'g40-german', front: 'das zu lesende Buch', back: 'liber legendus (German Gerundivum)' },
    { id: 'g40-five', front: 'Five ways to say “they came to ask for peace”', back: 'ut pācem peterent; quī pācem peterent; ad pācem petendam; pācis petendae causā; pācem petītum' },
    { id: 'g40-pliny', front: 'aut facere scrībenda aut scrībere legenda', back: 'either to do things worth writing about or to write things worth reading (Pliny 6.16.3)' },
    { id: 'g40-noscendum', front: 'Magnum propiusque nōscendum ut ērudītissimō virō vīsum.', back: 'To him, a very learned man, it seemed important and worth closer study. (Pliny 6.16.7)' },
    { id: 'g40-arma', front: 'Arma virumque canō, Trōiae quī prīmus ab ōrīs Ītaliam … vēnit', back: 'I sing of arms and the man who first came from the shores of Troy to Italy (Aeneid 1.1–2)' },
    { id: 'g40-tantae', front: 'Tantaene animīs caelestibus īrae?', back: 'Is there such anger in heavenly minds? (Aeneid 1.11)' },
    { id: 'g40-carthago', front: 'Carthāgō dēlenda est.', back: 'Carthage must be destroyed. (attributed to Cato; the Latin wording is a later formulation)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">ars scrībendī</span>:', options: ['the art of writing', 'the art to be written', 'a written art', 'he writes art'], answer: 0, explain: 'Genitive of the gerund.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">liber legendus</span>:', options: ['a book to be read', 'a reading book', 'a book that has been read', 'a book reading'], answer: 0, explain: 'Gerundive: passive verbal adjective.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Vēnērunt ad pācem petendam.</span>', options: ['They came to ask for peace.', 'They came to peace, which must be asked for.', 'They came after peace had been asked for.', 'Peace came to them.'], answer: 0, explain: 'ad + gerundive phrase: purpose.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Discimus legendō.</span>', options: ['We learn by reading.', 'We learn to read.', 'We learn what is to be read.', 'We read to learn.'], answer: 0, explain: 'Ablative of the gerund: means.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Nōbīs eundum est.</span>', options: ['We must go.', 'We are going.', 'We have gone.', 'Let us go.'], answer: 0, explain: 'Impersonal gerundive of obligation with dative of agent.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Pontem faciendum cūrāvit.</span>', options: ['He had a bridge built.', 'He took care of the bridge.', 'He built a bridge carefully.', 'The bridge was cared for.'], answer: 0, explain: 'Gerundive with cūrō.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Cupidus sum urbis vid___.</span>', hint: 'of seeing (gerundive, agreeing with urbis)', answers: ['endae'], full: 'Cupidus sum urbis videndae.', explain: 'Gerundive agreeing with urbis (gen. f. sg.).' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Mīlitēs ad pugnand___ parātī sunt.</span>', hint: 'for fighting (gerund)', answers: ['um'], full: 'Mīlitēs ad pugnandum parātī sunt.', explain: 'ad + accusative of the gerund.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Pācis petend___ causā vēnērunt.</span>', hint: 'of asking for (gerundive)', answers: ['ae'], full: 'Pācis petendae causā vēnērunt.', explain: 'causā + genitive gerundive phrase.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Haec epistula tibi leg___ est.</span>', hint: 'must be read', answers: ['enda'], full: 'Haec epistula tibi legenda est.', explain: 'Gerundive of obligation, feminine.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">In urbe dēfend___ fortiter pugnāvērunt.</span>', hint: 'in defending (gerundive, abl.)', answers: ['endā', 'enda'], full: 'In urbe dēfendendā fortiter pugnāvērunt.', explain: 'Gerundive agreeing with urbe.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Ars ___ difficilis est.</span>', hint: 'of speaking (loquor)', answers: ['loquendī', 'loquendi'], full: 'Ars loquendī difficilis est.', explain: 'Deponents have gerunds: loquendī.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the genitive of the gerund and the nominative masculine of the gerundive.', headers: ['gerund (gen.)', 'gerundive'], rows: [
      { label: 'amō', answers: ['amandī', 'amandus'] },
      { label: 'moneō', answers: ['monendī', 'monendus'] },
      { label: 'regō', answers: ['regendī', 'regendus'] },
      { label: 'capiō', answers: ['capiendī', 'capiendus'] },
      { label: 'audiō', answers: ['audiendī', 'audiendus'] },
      { label: 'hortor', answers: ['hortandī', 'hortandus'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline the gerund of <span class="la">legō</span> and the phrase <span class="la">liber legendus</span> (singular).', headers: ['gerund', 'liber legendus'], rows: [
      { label: 'nom.', answers: ['legere', 'liber legendus'] },
      { label: 'gen.', answers: ['legendī', 'librī legendī'] },
      { label: 'dat.', answers: ['legendō', 'librō legendō'] },
      { label: 'acc.', answers: ['legendum', 'librum legendum'] },
      { label: 'abl.', answers: ['legendō', 'librō legendō'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each phrase to its translation.', pairs: [
      ['cupidus videndī', 'eager to see'], ['ad pugnandum', 'for fighting'], ['legendō', 'by reading'], ['liber legendus', 'a book to be read'], ['eundum est', 'one must go']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Lēgātī pācis petendae causā vēnērunt.', tokens: ['The envoys', 'came', 'to ask', 'for peace'], explain: 'causā + gerundive phrase: purpose.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Cicerō cupidus erat librōs legendī.', model: 'Cicero was eager to read books.', accepted: ['cicero was eager to read books', 'cicero was eager for reading books', 'cicero was keen to read books', 'cicero was eager to read the books', 'cicero was desirous of reading books'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Carthāgō dēlenda est.', model: 'Carthage must be destroyed.', accepted: ['carthage must be destroyed', 'carthage is to be destroyed', 'carthage has to be destroyed', 'carthage should be destroyed', 'carthage ought to be destroyed'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Errandō discimus.', model: 'We learn by making mistakes.', accepted: ['we learn by making mistakes', 'we learn by erring', 'we learn by error', 'we learn through mistakes', 'we learn by mistakes', 'we learn by going wrong'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'the art of speaking (loquor)', model: 'ars loquendī', accepted: ['ars loquendī'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'we must go', model: 'nōbīs eundum est', accepted: ['nōbīs eundum est', 'eundum est nōbīs', 'eundum nōbīs est'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'to ask for peace (ad + gerundive)', model: 'ad pācem petendam', accepted: ['ad pācem petendam'] },
    { id: 'e23', type: 'mc', prompt: 'Whose anger pursues Aeneas in the opening of the Aeneid?', options: ['Juno’s', 'Jupiter’s', 'Venus’', 'Neptune’s'], answer: 0, explain: 'saevae memorem Iūnōnis ob īram.' },
    { id: 'e24', type: 'mc', prompt: 'What quality makes Aeneas <span class="la">īnsignis</span>?', options: ['pietās, dutifulness', 'courage in battle', 'beauty', 'wisdom'], answer: 0, explain: 'īnsignem pietāte virum.' },
    { id: 'e25', type: 'mc', prompt: 'German <em>das zu lesende Buch</em> corresponds to:', options: ['liber legendus', 'liber lēctus', 'liber legēns', 'liber legendī'], answer: 0, explain: 'German has a gerundive with zu + present participle.' }
  ],

  reading: {
    title: 'Arma virumque (Vergilius, Aenēis 1.1–11)',
    note: 'Authentic text: Virgil, Aeneid 1.1–11, from the copy Nils supplied, with its length marks; following the copy’s notes, īnferretque, mihi and īnsignem are printed as in most editions. Line breaks shown with /. Tap any word.',
    text: 'Arma virumque canō, Trōiae quī prīmus ab ōrīs / Ītaliam, fātō profugus, Lāvīniaque vēnit / lītora, multum ille et terrīs iactātus et altō / vī superum saevae memorem Iūnōnis ob īram; / multa quoque et bellō passus, dum conderet urbem, / īnferretque deōs Latiō, genus unde Latīnum, / Albānīque patrēs, atque altae moenia Rōmae. / Mūsa, mihi causās memorā, quō nūmine laesō, / quidve dolēns, rēgīna deum tot volvere cāsūs / īnsignem pietāte virum, tot adīre labōrēs / impulerit. Tantaene animīs caelestibus īrae?',
    translation: 'I sing of arms and the man who first came from the shores of Troy, an exile by fate, to Italy and the Lavinian shores, much tossed about on land and sea by the power of the gods, because of the unforgetting anger of cruel Juno; who suffered much in war too, until he could found a city and bring his gods into Latium: from whom came the Latin race, the fathers of Alba, and the walls of lofty Rome. Muse, tell me the causes: through what offence to her divinity, or grieving at what, did the queen of the gods drive a man outstanding in dutifulness to pass through so many misfortunes, to face so many labours? Is there such anger in heavenly minds?',
    notes: [
      { ref: 'Arma virumque canō, Trōiae quī prīmus ab ōrīs', html: '<span class="la">virum</span>: Aeneas, not named until line 92. <span class="la">quī</span> introduces a relative clause that runs to <span class="la">Rōmae</span> in line 7. <span class="la">prīmus</span>: “first”, i.e. before the Trojans who later settled in Italy; the claim was debated even in antiquity, since another Trojan, Antenor, was said to have reached Italy too.' },
      { ref: 'Ītaliam, fātō profugus, Lāvīniaque vēnit lītora', html: '<span class="la">Ītaliam … lītora</span>: accusatives of place to which without a preposition, a poetic extension of the rule for towns (Lecture XXXVIII). The first syllable of <span class="la">Ītaliam</span> is long here, though short in the noun elsewhere: a metrical licence. <span class="la">Lāvīnia</span>: adjective, “of Lavinium”, read as four syllables (<span class="la">Lā-vī-nja</span>).' },
      { ref: 'multum ille et terrīs iactātus et altō vī superum', html: '<span class="la">multum</span>: adverb, “much”. <span class="la">et … et</span>: “both … and”. <span class="la">altō</span>: “the deep (sea)”. <span class="la">superum</span>: poetic genitive plural of <span class="la">superī</span>, “of the gods above” (= <span class="la">superōrum</span>).' },
      { ref: 'saevae memorem Iūnōnis ob īram', html: '<span class="la">memorem</span>: “remembering, unforgetting”, a transferred epithet: it is Juno who does not forget, but the adjective is given to her anger. Word order: <span class="la">ob saevae Iūnōnis memorem īram</span>.' },
      { ref: 'multa quoque et bellō passus, dum conderet urbem', html: '<span class="la">passus</span> [<span class="la">est</span>]: from the deponent <span class="la">patior</span>. <span class="la">dum conderet</span>: <span class="la">dum</span> “until” + subjunctive, expressing purpose or expectation (Lecture XXXIII): he suffered until he could found his city.' },
      { ref: 'īnferretque deōs Latiō, genus unde Latīnum', html: '<span class="la">Latiō</span>: dative of direction, poetic for <span class="la">in Latium</span>. <span class="la">deōs</span>: the household gods of Troy, the Penates. <span class="la">unde</span> [<span class="la">est</span>]: “from whom (came)”.' },
      { ref: 'Albānīque patrēs, atque altae moenia Rōmae', html: 'Alba Longa, founded by Aeneas’ son, was in legend the mother city of Rome. <span class="la">moenia</span>: the walls stand for the city.' },
      { ref: 'Mūsa, mihi causās memorā, quō nūmine laesō', html: '<span class="la">memorā</span>: imperative, “recall, tell”. <span class="la">quō nūmine laesō</span>: ablative absolute, literally “what (aspect of her) divinity having been offended”, i.e. “for what offence to her divine will”. The interpretation of <span class="la">nūmine</span> here is a classic crux; most take it as Juno’s divine will.' },
      { ref: 'quidve dolēns, rēgīna deum tot volvere cāsūs', html: 'Indirect question running to <span class="la">impulerit</span>. <span class="la">quidve</span>: “or what”. <span class="la">deum</span>: genitive plural (= <span class="la">deōrum</span>). <span class="la">volvere cāsūs</span>: “to roll through misfortunes”, i.e. to pass through one after another.' },
      { ref: 'īnsignem pietāte virum, tot adīre labōrēs impulerit', html: '<span class="la">pietāte</span>: ablative of respect, “outstanding in dutifulness”. <span class="la">impulerit</span>: perfect subjunctive in an indirect question, primary sequence after <span class="la">memorā</span>; <span class="la">impellō</span> + infinitive (poetic for <span class="la">ut</span> + subjunctive, Lecture XXXVII).' },
      { ref: 'Tantaene animīs caelestibus īrae?', html: '<span class="la">-ne</span>: question marker. Supply <span class="la">sunt</span>: “Are there such angers in heavenly minds?” <span class="la">animīs caelestibus</span>: dative of possession (Lecture XXXIX). The plural <span class="la">īrae</span> suggests repeated outbursts.' }
    ],
    glosses: {
      'arma': 'arms, war (acc.)', 'virumque': 'and the man (acc. + -que)', 'canō': '1st sg.: I sing of', 'trōiae': 'gen. of Trōia: of Troy', 'quī': 'who', 'prīmus': 'first', 'ab': 'from (+ abl.)', 'ōrīs': 'abl. pl. of ōra: shores',
      'ītaliam': 'acc.: to Italy', 'fātō': 'abl. of fātum: by fate', 'profugus': 'an exile', 'lāvīniaque': 'and Lavinian (acc. pl. n. + -que)', 'vēnit': 'perf. 3rd sg. of veniō: came',
      'lītora': 'acc. pl. of lītus: shores', 'multum': 'much', 'ille': 'he', 'et': 'both, and', 'terrīs': 'abl. pl. of terra: on lands', 'iactātus': 'tossed about', 'altō': 'abl. of altum: on the deep',
      'vī': 'abl. of vīs: by the power', 'superum': 'gen. pl. of superī: of the gods above', 'saevae': 'gen. of saevus: cruel', 'memorem': 'acc. of memor: unforgetting', 'iūnōnis': 'gen. of Iūnō: Juno’s', 'ob': 'because of (+ acc.)', 'īram': 'acc. of īra: anger',
      'multa': 'many things', 'quoque': 'also', 'bellō': 'abl. of bellum: in war', 'passus': 'having suffered (patior)', 'dum': 'until', 'conderet': 'impf. subj. 3rd sg. of condō: he could found', 'urbem': 'acc. of urbs: city',
      'īnferretque': 'and bring into (impf. subj. of īnferō + -que)', 'deōs': 'acc. pl. of deus: gods', 'latiō': 'dat. of Latium: into Latium', 'genus': 'race (nom.)', 'unde': 'from whom', 'latīnum': 'Latin',
      'albānīque': 'and Alban (nom. pl. + -que)', 'patrēs': 'fathers (nom. pl.)', 'atque': 'and', 'altae': 'gen. of altus: lofty', 'moenia': 'walls (nom. pl.)', 'rōmae': 'gen. of Rōma: of Rome',
      'mūsa': 'voc.: Muse', 'mihi': 'to me', 'causās': 'acc. pl. of causa: causes', 'memorā': 'imperative of memorō: tell', 'quō': 'abl. of quī: what', 'nūmine': 'abl. of nūmen: divinity, divine will', 'laesō': 'abl. of laesus: offended',
      'quidve': 'or what (quid + -ve)', 'dolēns': 'grieving at', 'rēgīna': 'queen (nom.)', 'deum': 'gen. pl. of deus: of the gods', 'tot': 'so many', 'volvere': 'inf. of volvō: to roll through', 'cāsūs': 'acc. pl. of cāsus: misfortunes',
      'īnsignem': 'acc. of īnsignis: outstanding', 'pietāte': 'abl. of pietās: in dutifulness', 'virum': 'acc. of vir: man', 'adīre': 'inf. of adeō: to face', 'labōrēs': 'acc. pl. of labor: labours',
      'impulerit': 'perf. subj. 3rd sg. of impellō: drove', 'tantaene': 'such great? (nom. pl. f. + -ne)', 'animīs': 'dat. pl. of animus: in minds', 'caelestibus': 'dat. pl. of caelestis: heavenly', 'īrae': 'angers (nom. pl.)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Where did the man come from?', options: ['The shores of Troy', 'Carthage', 'Greece', 'Alba Longa'], answer: 0, explain: 'Trōiae quī prīmus ab ōrīs.' },
      { id: 'r2', type: 'mc', prompt: 'What was he to do in Italy?', options: ['Found a city and bring his gods to Latium', 'Conquer Carthage', 'Return to Troy', 'Marry Juno'], answer: 0, explain: 'dum conderet urbem, īnferretque deōs Latiō.' },
      { id: 'r3', type: 'mc', prompt: 'What does the poet ask the Muse?', options: ['The causes of Juno’s anger', 'The name of the hero', 'The way to Rome', 'How long the war lasted'], answer: 0, explain: 'Mūsa, mihi causās memorā.' },
      { id: 'r4', type: 'mc', prompt: 'Which three places mark the line of descent at the end of line 7?', options: ['Latium, Alba, Rome', 'Troy, Carthage, Rome', 'Greece, Sicily, Italy', 'Lavinium, Naples, Rome'], answer: 0, explain: 'genus unde Latīnum, Albānīque patrēs, atque altae moenia Rōmae.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">in urbe dēfendendā</span>:', options: ['in defending the city', 'in the city to be defended', 'in the defended city', 'into the city for defence'], answer: 0, explain: 'Gerundive phrase: translate as “-ing” + object.' },
      { id: 't2', type: 'mc', prompt: 'Which form is a gerund?', options: ['regendī (in ars regendī)', 'regendus (in rēx regendus)', 'regēns', 'rēctus'], answer: 0, explain: 'Genitive of the gerund, depending on ars.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Mihi epistula scrībenda est.</span>', options: ['I must write a letter.', 'A letter is being written to me.', 'I am writing a letter.', 'The letter must write to me.'], answer: 0, explain: 'Gerundive of obligation + dative of agent.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Vēnit ad urbem vid___.</span>', hint: 'to see (gerundive, agreeing with urbem)', answers: ['endam'], full: 'Vēnit ad urbem videndam.', explain: 'Gerundive agreeing with urbem.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Lēgātus pontem faci___ cūrāvit.</span>', hint: 'to be built', answers: ['endum'], full: 'Lēgātus pontem faciendum cūrāvit.', explain: 'Gerundive with cūrō: had a bridge built.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Lēgātī pācis petendae causā vēnērunt.', model: 'The envoys came to ask for peace.', accepted: ['envoys came to ask for peace', 'envoys came in order to ask for peace', 'envoys came for sake of asking for peace', 'ambassadors came to ask for peace', 'ambassadors came in order to ask for peace', 'envoys came to seek peace', 'ambassadors came to seek peace'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'by reading (gerund)', model: 'legendō', accepted: ['legendō'] },
      { id: 't8', type: 'mc', prompt: 'Why is <span class="la">Carthāgō dēlenda est</span> not strictly a quotation?', options: ['The ancient sources do not give this Latin wording', 'Cato spoke Greek', 'It is grammatically wrong', 'It comes from Virgil'], answer: 0, explain: 'Plutarch reports the sentiment in Greek; the Latin forms are later.' },
      { id: 't9', type: 'mc', prompt: 'In <span class="la">facere scrībenda aut scrībere legenda</span>, <span class="la">scrībenda</span> means:', options: ['things worth writing about', 'writing', 'having written', 'he writes'], answer: 0, explain: 'Neuter plural gerundive used as a noun (Pliny 6.16.3).' },
      { id: 't10', type: 'mc', prompt: 'In Aeneid 1.4, <span class="la">memorem</span> describes:', options: ['Juno’s anger (transferred epithet)', 'Aeneas', 'the Muse', 'the poet'], answer: 0, explain: 'saevae memorem Iūnōnis ob īram.' },
      { id: 't11', type: 'mc', prompt: 'The metre of the Aeneid is:', options: ['dactylic hexameter', 'greater Asclepiad', 'hendecasyllable', 'iambic trimeter'], answer: 0, explain: 'Six feet, dactyls and spondees.' }
    ]
  },

  reference: [
    { title: 'Gerund', headers: ['Case', 'amō', 'regō', 'audiō'], rows: [
      ['Gen.', 'amandī', 'regendī', 'audiendī'], ['Dat.', 'amandō', 'regendō', 'audiendō'], ['Acc. (ad)', 'amandum', 'regendum', 'audiendum'], ['Abl.', 'amandō', 'regendō', 'audiendō']
    ] },
    { title: 'Gerundive uses', headers: ['Use', 'Example', 'Meaning'], rows: [
      ['Obligation', 'liber mihi legendus est', 'I must read the book'], ['Impersonal', 'nōbīs eundum est', 'we must go'], ['Instead of gerund + object', 'ad pācem petendam', 'to ask for peace'], ['Purpose with causā', 'pācis petendae causā', 'to ask for peace'], ['With cūrō', 'pontem faciendum cūrāvit', 'he had a bridge built'], ['As a noun', 'mīranda, legenda', 'things to be wondered at, read']
    ] },
    { title: 'Five ways to express purpose', headers: ['Construction', 'Example'], rows: [
      ['ut + subj.', 'vēnērunt ut pācem peterent'], ['quī + subj.', 'vēnērunt quī pācem peterent'], ['ad + gerundive', 'vēnērunt ad pācem petendam'], ['causā + gen. gerundive', 'vēnērunt pācis petendae causā'], ['supine', 'vēnērunt pācem petītum']
    ] }
  ]
});
