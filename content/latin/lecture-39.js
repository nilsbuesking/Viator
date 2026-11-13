/*
 * Latin — Lecture XXXIX: relative clauses of characteristic (sunt quī + subj.; dignus quī; causal quī);
 * the dative of reference and advantage; the supine in -um and -ū.
 * Authentic reading: Horace, Odes 1.11 (complete).
 * Content file only. Source texts (Horace; Pliny, Letters 6.16 and 6.20) checked against the texts supplied
 * by Nils; length marks as in the copy, except tibi. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-39',
  number: 39,
  title: 'Erant quī precārentur',
  subtitle: 'Relative clauses of characteristic (sunt quī, nēmō est quī, dignus quī); the dative of reference; the supine (petītum, dictū); authentic reading: Horace, Odes 1.11 complete',
  minutes: 70,

  intro: `
    <p>A relative clause normally takes the indicative: it identifies a particular person or thing. <span class="la">Aderant quī … nūntiābant</span>, “There were (some particular) people present who announced …”. When it describes a <em>kind</em> of person instead (“the sort of person who …”), Latin uses the subjunctive: <span class="la">Erant quī metū mortis mortem precārentur</span>, “There were people (of the sort) who prayed for death out of fear of death”. Both sentences are in Pliny 6.20.14–15, side by side. This is the <strong>relative clause of characteristic</strong>.</p>
    <p>Two smaller topics complete the lecture. The <strong>dative of reference</strong> names the person from whose point of view something is true or for whom it matters: <span class="la">quem mihi, quem tibi fīnem dī dederint</span>, “what end the gods have given (for) me, (for) you”. The <strong>supine</strong> is a verbal noun with only two forms: <span class="la">petītum</span> after verbs of motion (“they came to ask”) and <span class="la">dictū</span> with adjectives (“wonderful to tell”).</p>
    <p>The reading is a whole poem, Horace’s ode to Leuconoe, whose last line you met in Lecture IX: <span class="la">carpe diem</span>.</p>
  `,

  background: [
    {
      title: 'Leuconoē and the Babylonian numbers',
      html: `
        <p>Leuconoe (the name is Greek and may be invented for the poem) has been consulting astrologers to learn how long she and the poet will live. Horace tells her not to: it is wrong to know, <span class="la">scīre nefās</span>. Whether this winter is the last or Jupiter grants more, it is better to bear whatever comes; be sensible, strain the wine, cut long hopes down to the short span of life.</p>
        <p>“Babylonian numbers” are horoscopes. Astrology based on the positions of the planets at birth developed in Babylonia and reached Rome through Greek writers; by Horace’s time astrologers, called <span class="la">Chaldaeī</span> or <span class="la">mathēmaticī</span>, were fashionable and repeatedly expelled from the city. The calculations rested on centuries of Babylonian observation, recorded on clay tablets such as the one below.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/British_Museum,_Babylon_Astronomical_Diary,_331-330_BC.jpg/960px-British_Museum,_Babylon_Astronomical_Diary,_331-330_BC.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/British_Museum,_Babylon_Astronomical_Diary,_331-330_BC.jpg/500px-British_Museum,_Babylon_Astronomical_Diary,_331-330_BC.jpg|https://upload.wikimedia.org/wikipedia/commons/e/e8/British_Museum,_Babylon_Astronomical_Diary,_331-330_BC.jpg" alt="Clay tablet covered in small cuneiform signs"><figcaption>A Babylonian astronomical diary for 331–330 BC (London, British Museum): nightly observations of the moon and planets, with notes on weather, prices and events. Records of this kind underlie the “Babylonian numbers” Horace warns against. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:British_Museum,_Babylon_Astronomical_Diary,_331-330_BC.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
        <p>One detail links the poem to the Pliny letters: the winter “wears out the Tyrrhenian sea on the rocks set against it”, <span class="la">oppositīs pūmicibus</span>. <span class="la">pūmex</span> is the porous volcanic stone that fell on the elder Pliny’s ship; on the Campanian coast, the rocks the sea breaks on are often of the same kind. Whether Horace means pumice in the strict sense or porous rocks in general is debated.</p>
      `
    },
    {
      title: 'The metre: the greater Asclepiad',
      html: `
        <p>Every line has the same sixteen-syllable pattern, the “greater Asclepiad” (German <em>großer Asklepiadeus</em>), named after the Greek poet Asclepiades:</p>
        <p class="la">— — | — ∪ ∪ — | — ∪ ∪ — | — ∪ ∪ — | ∪ —</p>
        <p>The three central choriambs (— ∪ ∪ —) give the line its rocking, deliberate movement. Final <span class="la">-ē</span> of <span class="la">Leuconoē</span> is long. The copy writes <span class="la">tibī</span> with a long final vowel at the end of line 1; most editions print <span class="la">tibi</span>, and at line end the length does not matter for the metre.</p>
      `
    },
    {
      title: 'Es gibt niemanden, der das wüsste',
      html: `
        <p>German shows something close to the characteristic clause in its use of the Konjunktiv II after a negative or indefinite main clause: <em>Ich kenne niemanden, der das wüsste</em> (no such person exists), beside <em>Ich kenne jemanden, der das weiß</em> (a particular person). Latin: <span class="la">Nēmō est quī hoc sciat</span>; <span class="la">Est quīdam quī hoc scit</span>. The Latin use is much wider: <span class="la">Sunt quī dīcant</span>, “There are people who say”, takes the subjunctive though German says <em>Es gibt Leute, die sagen</em>.</p>
        <p>The supine in <span class="la">-um</span> after verbs of motion has a neat German parallel in <em>gehen</em> + infinitive: <em>Er geht einkaufen</em>, <span class="la">Lēgātī vēnērunt pācem petītum</span>, “The envoys came to ask for peace”. The supine in <span class="la">-ū</span> corresponds to <em>zu</em> + infinitive after an adjective: <em>schwer zu sagen</em>, <span class="la">difficile dictū</span>.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Erant quī metū mortis mortem precārentur … Nec dēfuērunt quī fictīs mentītīsque terrōribus vēra perīcula augērent. Aderant quī Mīsēnī illud ruisse, illud ārdēre falsō sed crēdentibus nūntiābant.</p>
    <p>Pliny, <em>Letters</em> 6.20.14–15 (Lecture XXXVI), checked against the text Nils supplied; length marks added. The first two relative clauses have the subjunctive (<span class="la">precārentur, augērent</span>): they describe kinds of people in the crowd. The third has the indicative (<span class="la">nūntiābant</span>): particular people arrived with particular news. Translators often render all three alike; the Latin distinguishes them.</p>
    <p>A dative of reference in the first letter: <span class="la">clausōque stomachō, quī illī nātūrā invalidus et angustus et frequenter aestuāns erat</span> (6.16.19, Lecture XXV), “his windpipe being blocked, which in his case was naturally weak and narrow and often inflamed”. <span class="la">illī</span>: “for him, in his case”.</p>
  `,

  pronunciation: `
    <h3>Leuconoē</h3>
    <p>Four syllables: <span class="la">Leu-CO-no-ē</span>, with the Greek diphthong <span class="la">eu</span> as in Latin <span class="la">heu</span>, roughly “e-oo” run together, not German <em>eu</em> [ɔʏ].</p>
    <h3>Reading the ode aloud</h3>
    <p>Read for the long syllables, not for the word stress: <span class="la">TŪ NĒ | QUAE-si-e-RĪS | SCĪ-re ne-FĀS | QUEM mi-hi QUEM | ti-BI</span> (capitals mark the long syllables). The clash between metrical beat and normal stress is part of the effect; the stressed reading of Lecture I remains the safe one for prose.</p>
  `,

  grammar: [
    {
      title: '1. Relative clauses of characteristic',
      html: `
        <p>A relative clause with the subjunctive describes the <em>kind</em> of person or thing, often after an indefinite or negative antecedent:</p>
        <ul>
          <li><span class="la">Sunt quī putent …</span> There are people who think … (some people think)</li>
          <li><span class="la">Nēmō est quī hoc sciat.</span> There is nobody who knows this.</li>
          <li><span class="la">Quis est quī hoc crēdat?</span> Who is there who would believe this?</li>
          <li><span class="la">Sōlus est quī hoc facere possit.</span> He is the only one who can do this.</li>
          <li><span class="la">Nihil est quod timeās.</span> There is nothing for you to fear.</li>
        </ul>
        <p>Compare <span class="la">Sunt quī putant</span> (indicative): “There are (certain) people who think”, pointing to particular individuals. The difference is often small in English, and translation with the indicative is normal: “Some people think”.</p>
      `
    },
    {
      title: '2. dignus quī; causal and concessive quī',
      html: `
        <ul>
          <li><span class="la">dignus / indignus / idōneus quī</span> + subjunctive: <span class="la">Dignus est quī laudētur.</span> He deserves to be praised (is worthy to be praised). <span class="la">dignus</span> otherwise takes the ablative: <span class="la">historiā digna</span> (Pliny 6.20.20).</li>
          <li>Causal <span class="la">quī</span> (“since he”), often with <span class="la">quippe</span> or <span class="la">ut pote</span>: <span class="la">Mē stultum, quī tibi crēdiderim!</span> What a fool I am, since I believed you!</li>
          <li>Concessive <span class="la">quī</span> (“although he”), often with <span class="la">tamen</span> in the main clause.</li>
        </ul>
        <p>A relative clause can also express purpose: <span class="la">Lēgātōs mīsit quī pācem peterent</span>, “He sent envoys to ask for peace” (literally “who were to ask”). Together these are the main uses of <span class="la">quī</span> + subjunctive; context decides which.</p>
      `
    },
    {
      title: '3. The dative of reference and advantage',
      html: `
        <p>The dative can name the person for whom something holds or matters, without any special verb:</p>
        <ul>
          <li><span class="la">Quem mihi, quem tibi fīnem dī dederint</span> (Horace): what end the gods have given (for) me, (for) you.</li>
          <li><span class="la">Nōn scholae sed vītae discimus.</span> We learn not for school but for life (a modern reversal of Seneca, <em>Letters</em> 106.12).</li>
          <li><span class="la">Est mihi liber.</span> I have a book (“there is a book for me”): the dative of possession, a special case (Pliny 6.20.20: <span class="la">nōbīs … abeundī cōnsilium</span> [<span class="la">erat</span>]).</li>
          <li><span class="la">Hoc tibi perīculōsum est.</span> This is dangerous for you.</li>
        </ul>
        <p>The <strong>double dative</strong> combines a dative of reference with a dative of purpose: <span class="la">Hoc mihi cūrae est</span>, “This is a concern to me”; <span class="la">Auxiliō sociīs vēnērunt</span>, “They came as a help to the allies”. German has a related “ethic dative”: <em>Du bist mir ein Held!</em></p>
      `
    },
    {
      title: '4. The supine',
      html: `
        <p>The supine is the fourth principal part (<span class="la">amātum, dictum, petītum</span>). It is a verbal noun of the 4th declension, used in only two cases:</p>
        <ul>
          <li><strong>Accusative in -um</strong>, after verbs of motion, to express purpose: <span class="la">Lēgātī vēnērunt pācem petītum.</span> The envoys came to ask for peace. <span class="la">Cubitum īre</span>: to go to bed. It can take an object.</li>
          <li><strong>Ablative in -ū</strong>, with certain adjectives (and with <span class="la">fās, nefās, opus</span>), meaning “in the …-ing”: <span class="la">mīrābile dictū</span> wonderful to tell; <span class="la">facile factū</span> easy to do; <span class="la">horribile vīsū</span> terrible to see.</li>
        </ul>
        <p>Both are fairly rare; purpose is far more often expressed with <span class="la">ut</span>, <span class="la">quī</span>, or (Lecture XL) the gerund and gerundive. The future infinitive passive <span class="la">amātum īrī</span>, “to be going to be loved”, is built from the supine and the impersonal passive of <span class="la">eō</span>.</p>
      `
    }
  ],

  vocab: [
    { id: 'nefas', head: 'nefās', la: 'nefās (indecl.)', g: 'n', pos: 'noun, indeclinable', en: 'what is forbidden by divine law; a wrong, crime', stress: 'NE-fās', note: 'Opposite fās, “what is permitted”. scīre nefās: it is forbidden to know (Horace).' },
    { id: 'legatus', head: 'lēgātus', la: 'lēgātus, lēgātī', g: 'm', pos: 'noun, 2nd decl.', en: 'envoy, ambassador; legate (deputy commander)', stress: 'lē-GĀ-tus', deriv: 'legate, legation' },
    { id: 'pumex', head: 'pūmex', la: 'pūmex, pūmicis', g: 'm', pos: 'noun, 3rd decl.', en: 'pumice; porous volcanic rock', stress: 'PŪ-mex · PŪ-mi-cis', deriv: 'pumice', note: 'Sometimes feminine in poetry. Pliny 6.16.11 and 6.16.16; Horace, Odes 1.11.5.' },
    { id: 'munus', head: 'mūnus', la: 'mūnus, mūneris', g: 'n', pos: 'noun, 3rd decl.', en: 'duty, office; gift; public show', stress: 'MŪ-nus · MŪ-ne-ris', deriv: 'munificent, remunerate', note: 'Pliny 6.16.3: deōrum mūnere, “by the gift of the gods”.' },
    { id: 'tribuo', head: 'tribuō', la: 'tribuō, tribuere, tribuī, tribūtum', pos: 'verb, 3rd conj.', en: 'assign, grant, allot', stress: 'TRI-bu-ō · tri-BU-e-re', deriv: 'tribute, attribute, contribute' },
    { id: 'debilito', head: 'dēbilitō', la: 'dēbilitō, dēbilitāre, dēbilitāvī, dēbilitātum', pos: 'verb, 1st conj.', en: 'weaken, wear out', stress: 'dē-BI-li-tō · dē-bi-li-TĀ-re', deriv: 'debilitate' },
    { id: 'liquo', head: 'liquō', la: 'liquō, liquāre, liquāvī, liquātum', pos: 'verb, 1st conj.', en: 'make clear, strain (wine); melt', stress: 'LI-quō · li-QUĀ-re', note: 'Wine was strained through cloth or a strainer before serving.' },
    { id: 'reseco', head: 'resecō', la: 'resecō, resecāre, resecuī, resectum', pos: 'verb, 1st conj.', en: 'cut back, prune; curtail', stress: 'RE-se-cō · re-se-CĀ-re', note: 'A gardener’s word, like carpō in the same poem.' },
    { id: 'invidus', head: 'invidus', la: 'invidus, invida, invidum', pos: 'adjective, 1st/2nd decl.', en: 'envious, grudging', stress: 'IN-vi-dus', note: 'From invideō (Lecture XXXVI). invida aetās: grudging time.' },
    { id: 'dignus', head: 'dignus', la: 'dignus, digna, dignum (+ abl.)', pos: 'adjective, 1st/2nd decl.', en: 'worthy, deserving (of)', stress: 'DIG-nus', deriv: 'dignity, deign', note: 'dignus quī + subj.: worthy to …' },
    { id: 'mirabilis', head: 'mīrābilis', la: 'mīrābilis, mīrābile', pos: 'adjective, 3rd decl.', en: 'wonderful, extraordinary', stress: 'mī-RĀ-bi-lis', deriv: 'admirable', note: 'mīrābile dictū: wonderful to tell (supine).' },
    { id: 'quisquam', head: 'quisquam', la: 'quisquam, quicquam (quidquam)', pos: 'pronoun', en: 'anyone, anything (after negatives and in questions)', stress: 'QUIS-quam', note: 'nec quisquam: and nobody. Adjective form: ūllus.' },
    { id: 'quippe', head: 'quippe', la: 'quippe', pos: 'particle', en: 'indeed, of course; (with quī) since he', stress: 'QUIP-pe' }
  ],

  grammarCards: [
    { id: 'g39-char', front: 'Relative clause of characteristic', back: 'quī + subjunctive describing a kind: Sunt quī putent; nēmō est quī sciat.' },
    { id: 'g39-contrast', front: 'Erant quī precārentur vs Aderant quī nūntiābant', back: 'Subjunctive: a kind of person; indicative: particular people (Pliny 6.20.14–15)' },
    { id: 'g39-nemo', front: 'Nēmō est quī hoc sciat.', back: 'There is nobody who knows this. (≈ niemand, der das wüsste)' },
    { id: 'g39-nihil', front: 'Nihil est quod timeās.', back: 'There is nothing for you to fear.' },
    { id: 'g39-dignus', front: 'Dignus est quī laudētur.', back: 'He deserves to be praised.' },
    { id: 'g39-causal', front: 'Mē stultum, quī tibi crēdiderim!', back: 'What a fool I am, since I believed you! (causal quī)' },
    { id: 'g39-ref', front: 'Dative of reference', back: 'The person for whom something holds: quem mihi, quem tibi fīnem dī dederint' },
    { id: 'g39-poss', front: 'Est mihi liber.', back: 'I have a book. (dative of possession)' },
    { id: 'g39-double', front: 'Hoc mihi cūrae est.', back: 'This is a concern to me. (double dative)' },
    { id: 'g39-supum', front: 'Supine in -um', back: 'After verbs of motion: Lēgātī vēnērunt pācem petītum (came to ask for peace).' },
    { id: 'g39-supu', front: 'Supine in -ū', back: 'With adjectives: mīrābile dictū, facile factū, horribile vīsū' },
    { id: 'g39-german', front: 'Er geht einkaufen; schwer zu sagen', back: 'German parallels to the supine in -um and -ū' },
    { id: 'g39-iri', front: 'amātum īrī', back: 'future passive infinitive: to be going to be loved (supine + īrī)' },
    { id: 'g39-horace1', front: 'Tū nē quaesierīs, scīre nefās, quem mihi, quem tibi fīnem dī dederint, Leuconoē', back: 'Do not ask (it is forbidden to know) what end the gods have given to me, what to you, Leuconoe (Odes 1.11.1–2)' },
    { id: 'g39-horace2', front: 'Ut melius, quidquid erit, patī!', back: 'How much better to endure whatever will be! (Odes 1.11.3)' },
    { id: 'g39-horace3', front: 'Dum loquimur, fūgerit invida aetās.', back: 'While we talk, grudging time will have fled. (Odes 1.11.7–8)' },
    { id: 'g39-horace4', front: 'carpe diem, quam minimum crēdula posterō', back: 'pluck the day, trusting as little as possible in the next (Odes 1.11.8)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">Sunt quī putent deōs nōn esse.</span>', options: ['There are people who think the gods do not exist.', 'They are the people who thought the gods did not exist.', 'The gods are those who think.', 'Who thinks the gods exist?'], answer: 0, explain: 'Relative clause of characteristic.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">Nēmō est quī hoc sciat.</span>', options: ['There is nobody who knows this.', 'Nobody is the one who knew this.', 'Who knows this?', 'Somebody knows this.'], answer: 0, explain: 'Negative antecedent + subjunctive.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Dignus est quī laudētur.</span>', options: ['He deserves to be praised.', 'He is the one who praises.', 'He is praised with dignity.', 'He was worthy and was praised.'], answer: 0, explain: 'dignus quī + subjunctive.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Lēgātī vēnērunt pācem petītum.</span>', options: ['The envoys came to ask for peace.', 'The envoys came, peace having been asked for.', 'Peace came to the envoys.', 'The envoys asked for peace and came.'], answer: 0, explain: 'Supine in -um after a verb of motion.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">mīrābile dictū</span>:', options: ['wonderful to tell', 'a wonderful saying', 'having said wonderful things', 'to tell wonders'], answer: 0, explain: 'Supine in -ū with an adjective.' },
    { id: 'e6', type: 'mc', prompt: 'In <span class="la">Est mihi liber</span>, <span class="la">mihi</span> is:', options: ['dative of possession', 'dative with a special verb', 'ablative', 'dative of agent'], answer: 0, explain: 'I have a book.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Nihil est quod tim___.</span>', hint: 'you (sg.) should fear', answers: ['eās', 'eas'], full: 'Nihil est quod timeās.', explain: 'Characteristic: present subjunctive.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Erant quī mortem precār___.</span>', hint: 'prayed for (subj.)', answers: ['entur'], full: 'Erant quī mortem precārentur.', explain: 'Secondary sequence: imperfect subjunctive.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Hoc facile fact___ est.</span>', hint: 'to do (supine)', answers: ['ū', 'u'], full: 'Hoc facile factū est.', explain: 'Supine in -ū.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Cubit___ eō.</span>', hint: 'to bed (supine)', answers: ['um'], full: 'Cubitum eō.', explain: 'Supine in -um after a verb of motion: I go to bed.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Hoc mihi cūr___ est.</span>', hint: 'a concern (dat.)', answers: ['ae'], full: 'Hoc mihi cūrae est.', explain: 'Double dative.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Quis est quī hoc crēd___?</span>', hint: 'would believe', answers: ['at'], full: 'Quis est quī hoc crēdat?', explain: 'Characteristic after a question.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the supines in <span class="la">-um</span> and <span class="la">-ū</span>.', headers: ['-um', '-ū'], rows: [
      { label: 'dīcō', answers: ['dictum', 'dictū'] },
      { label: 'faciō', answers: ['factum', 'factū'] },
      { label: 'videō', answers: ['vīsum', 'vīsū'] },
      { label: 'audiō', answers: ['audītum', 'audītū'] },
      { label: 'petō', answers: ['petītum', 'petītū'] },
      { label: 'cubō', answers: ['cubitum', 'cubitū'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the present and imperfect subjunctive of <span class="la">sciō</span> (for clauses like nēmō est quī sciat).', headers: ['pres. subj.', 'impf. subj.'], rows: [
      { label: '1st sg.', answers: ['sciam', 'scīrem'] },
      { label: '2nd sg.', answers: ['sciās', 'scīrēs'] },
      { label: '3rd sg.', answers: ['sciat', 'scīret'] },
      { label: '1st pl.', answers: ['sciāmus', 'scīrēmus'] },
      { label: '2nd pl.', answers: ['sciātis', 'scīrētis'] },
      { label: '3rd pl.', answers: ['sciant', 'scīrent'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each construction to its example.', pairs: [
      ['characteristic', 'nēmō est quī sciat'], ['dignus quī', 'dignus quī laudētur'], ['supine in -um', 'pācem petītum'], ['supine in -ū', 'mīrābile dictū'], ['double dative', 'mihi cūrae est']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Nēmō est quī tē nōn amet.', tokens: ['There is nobody', 'who', 'does not', 'love you'], explain: 'Characteristic after a negative.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Sunt quī dīcant Rōmam nōn ūnō diē aedificātam esse.', model: 'There are people who say that Rome was not built in one day.', accepted: ['there are people who say that rome was not built in one day', 'there are those who say that rome was not built in one day', 'some say that rome was not built in one day', 'some people say that rome was not built in one day', 'there are people who say rome was not built in one day', 'some say rome was not built in one day', 'some people say rome was not built in one day', 'there are some who say that rome was not built in one day', 'there are some who say rome was not built in one day'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Hoc horribile vīsū erat.', model: 'This was terrible to see.', accepted: ['this was terrible to see', 'this was horrible to see', 'this was dreadful to see', 'it was terrible to see', 'it was horrible to see', 'this was terrible to behold', 'this was horrible to behold'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Nihil est quod timeās.', model: 'There is nothing for you to fear.', accepted: ['there is nothing for you to fear', 'there is nothing that you should fear', 'there is nothing you should fear', 'you have nothing to fear', 'there is nothing to fear'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'wonderful to tell', model: 'mīrābile dictū', accepted: ['mīrābile dictū'], explain: 'The supine in -ū after an adjective: “wonderful in the telling”.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'I have a book (dative of possession)', model: 'est mihi liber', accepted: ['est mihi liber', 'mihi est liber', 'mihi liber est', 'liber mihi est'], explain: 'Dative of possession, “there is a book to me”: the thing owned is the subject.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'there is nobody who knows (nēmō est …)', model: 'nēmō est quī sciat', accepted: ['nēmō est quī sciat'], explain: 'A relative clause of characteristic takes the subjunctive: “nobody of the kind who knows”.' },
    { id: 'e23', type: 'mc', prompt: 'What has Leuconoe been doing?', options: ['Consulting astrologers about how long they will live', 'Drinking too much', 'Sailing on the Tyrrhenian sea', 'Writing poetry'], answer: 0, explain: 'nec Babylōniōs temptāris numerōs.' },
    { id: 'e24', type: 'mc', prompt: 'Why does Pliny use the subjunctive in <span class="la">erant quī … precārentur</span> but the indicative in <span class="la">aderant quī … nūntiābant</span>?', options: ['The first describes a kind of person, the second particular people', 'The first is in the future', 'It is a mistake', 'The second is a purpose clause'], answer: 0, explain: 'Characteristic vs ordinary relative clause.' },
    { id: 'e25', type: 'mc', prompt: 'German <em>Ich kenne niemanden, der das wüsste</em> corresponds to:', options: ['Nēminem nōvī quī hoc sciat.', 'Nēminem nōvī quī hoc scit.', 'Nēmō hoc scīvit.', 'Quis hoc scit?'], answer: 0, explain: 'Characteristic clause after a negative.' }
  ],

  reading: {
    title: 'Ad Leuconoēn (Horātius, Carmina 1.11)',
    note: 'Authentic text, complete: Horace, Odes 1.11, from the copy Nils supplied, with its length marks (tibī printed tibi, as in most editions); line breaks shown with /. Tap any word.',
    text: 'Tū nē quaesierīs, scīre nefās, quem mihi, quem tibi / fīnem dī dederint, Leuconoē, nec Babylōniōs / temptāris numerōs. Ut melius, quidquid erit, patī, / seu plūrīs hiemēs seu tribuit Iuppiter ultimam, / quae nunc oppositīs dēbilitat pūmicibus mare / Tyrrhēnum: sapiās, vīna liquēs, et spatiō brevī / spem longam resecēs. Dum loquimur, fūgerit invida / aetās: carpe diem, quam minimum crēdula posterō.',
    translation: 'Do not ask (it is forbidden to know) what end the gods have given to me, what to you, Leuconoe, and do not try the Babylonian calculations. How much better to endure whatever will be, whether Jupiter has granted us more winters or this one as the last, which now wears out the Tyrrhenian sea on the rocks set against it. Be wise, strain the wine, and cut back long hope to the short span of life. While we are talking, grudging time will have fled: pluck the day, trusting as little as possible in the next.',
    notes: [
      { ref: 'Tū nē quaesierīs … nec … temptāris', html: 'Prohibitions: <span class="la">nē</span> + perfect subjunctive, “do not ask, do not try” (Lecture XXXIII mentioned this form beside <span class="la">nōlī</span>). <span class="la">temptāris</span>: contracted from <span class="la">temptāveris</span>. The pronoun <span class="la">tū</span> adds emphasis: “you, at least, …”.' },
      { ref: 'scīre nefās', html: 'Parenthesis, supply <span class="la">est</span>: “to know is forbidden (by the gods)”. <span class="la">nefās</span> is indeclinable.' },
      { ref: 'quem mihi, quem tibi fīnem dī dederint', html: 'Indirect question with the perfect subjunctive (Lecture XXXI). <span class="la">mihi, tibi</span>: datives of reference, or indirect objects of <span class="la">dederint</span>. <span class="la">quem … fīnem</span>: “what end”, <span class="la">quī</span> as an interrogative adjective.' },
      { ref: 'Babylōniōs … numerōs', html: '“Babylonian numbers”: astrological calculations (see the background).' },
      { ref: 'Ut melius, quidquid erit, patī', html: '<span class="la">ut</span>: “how!” (exclamatory). Supply <span class="la">est</span>: “how much better (it is) to endure whatever will be”. <span class="la">patī</span>: deponent infinitive (Lecture XXXV). <span class="la">quidquid</span>: “whatever”.' },
      { ref: 'seu plūrīs hiemēs seu tribuit Iuppiter ultimam', html: '<span class="la">seu … seu</span>: “whether … or”. <span class="la">plūrīs</span>: accusative plural (= <span class="la">plūrēs</span>; Lecture XV). <span class="la">ultimam</span> [<span class="la">hiemem</span>]. The Romans counted years by winters as well as summers.' },
      { ref: 'quae nunc oppositīs dēbilitat pūmicibus mare Tyrrhēnum', html: '<span class="la">quae</span>: the winter. <span class="la">oppositīs pūmicibus</span>: ablative of means, “by means of the rocks placed against (it)”. The winter storms wear the sea out against the cliffs, and also: the sea wears itself out.' },
      { ref: 'sapiās, vīna liquēs, et spatiō brevī spem longam resecēs', html: 'Jussive subjunctives (Lecture XXIX), gentler than imperatives: “be sensible, strain the wine, cut back …”. <span class="la">spatiō brevī</span>: either ablative, “since the span is short”, or dative, “(cut hope) to fit the short span”. Editors and commentators differ; both make sense.' },
      { ref: 'Dum loquimur, fūgerit invida aetās', html: '<span class="la">dum</span> + present indicative: “while we talk” (Lecture XXXIII). <span class="la">fūgerit</span>: future perfect, “will have fled”: by the time the sentence ends, the time is gone.' },
      { ref: 'carpe diem, quam minimum crēdula posterō', html: '<span class="la">carpe</span>: “pluck, harvest”, the image of picking fruit while it is ripe (Lecture IX); “seize the day” is a loose modern rendering. <span class="la">quam minimum</span>: “as little as possible” (Lecture XXVIII). <span class="la">crēdula</span> agrees with Leuconoe; <span class="la">posterō</span> [<span class="la">diē</span>]: dative with an adjective of trusting (Lecture XXXVI).' }
    ],
    glosses: {
      'tū': 'you (nom.)', 'nē': 'do not (+ perf. subj.)', 'quaesierīs': 'perf. subj. 2nd sg. of quaerō: ask', 'scīre': 'inf. of sciō: to know', 'nefās': 'forbidden', 'quem': 'what (acc. m.)', 'mihi': 'for me', 'tibi': 'for you',
      'fīnem': 'acc. of fīnis: end', 'dī': 'nom. pl. of deus: the gods', 'dederint': 'perf. subj. 3rd pl. of dō: have given', 'leuconoē': 'voc.: Leuconoe', 'nec': 'and not', 'babylōniōs': 'acc. pl. of Babylōnius: Babylonian',
      'temptāris': 'perf. subj. 2nd sg. of temptō (= temptāveris): try', 'numerōs': 'acc. pl. of numerus: calculations', 'ut': 'how!', 'melius': 'better', 'quidquid': 'whatever', 'erit': 'fut. 3rd sg. of sum: will be', 'patī': 'inf. of patior: to endure',
      'seu': 'whether, or', 'plūrīs': 'acc. pl. of plūrēs: more', 'hiemēs': 'acc. pl. of hiems: winters', 'tribuit': 'perf. 3rd sg. of tribuō: has granted', 'iuppiter': 'Jupiter (nom.)', 'ultimam': 'acc. f. of ultimus: the last',
      'quae': 'which (f.)', 'nunc': 'now', 'oppositīs': 'abl. pl. of oppositus: placed against', 'dēbilitat': '3rd sg. of dēbilitō: wears out', 'pūmicibus': 'abl. pl. of pūmex: rocks', 'mare': 'sea (acc.)',
      'tyrrhēnum': 'Tyrrhenian (acc. n.)', 'sapiās': 'pres. subj. 2nd sg. of sapiō: be wise', 'vīna': 'acc. pl. of vīnum: wine', 'liquēs': 'pres. subj. 2nd sg. of liquō: strain', 'et': 'and', 'spatiō': 'abl./dat. of spatium: span', 'brevī': 'abl./dat. of brevis: short',
      'spem': 'acc. of spēs: hope', 'longam': 'acc. f. of longus: long', 'resecēs': 'pres. subj. 2nd sg. of resecō: cut back', 'dum': 'while', 'loquimur': '1st pl. of loquor: we talk', 'fūgerit': 'fut. perf. 3rd sg. of fugiō: will have fled', 'invida': 'grudging (nom. f.)',
      'aetās': 'time, life (nom.)', 'carpe': 'imperative of carpō: pluck', 'diem': 'acc. of diēs: day', 'quam': 'as … as possible (with superl.)', 'minimum': 'least', 'crēdula': 'trusting (nom. f.)', 'posterō': 'dat. of posterus: the next (day)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Why should Leuconoe not ask how long they will live?', options: ['It is forbidden to know', 'The astrologers are too expensive', 'Jupiter will tell her', 'She is too young'], answer: 0, explain: 'scīre nefās.' },
      { id: 'r2', type: 'mc', prompt: 'What is the winter doing to the Tyrrhenian sea?', options: ['Wearing it out against the rocks', 'Freezing it', 'Calming it', 'Making it rise'], answer: 0, explain: 'quae nunc oppositīs dēbilitat pūmicibus mare Tyrrhēnum.' },
      { id: 'r3', type: 'mc', prompt: 'What happens while they are talking?', options: ['Time flies', 'The wine is strained', 'The winter ends', 'The astrologers arrive'], answer: 0, explain: 'Dum loquimur, fūgerit invida aetās.' },
      { id: 'r4', type: 'mc', prompt: 'What does <span class="la">carpe</span> literally mean?', options: ['pluck, harvest', 'seize', 'enjoy', 'count'], answer: 0, explain: 'carpō: pluck (fruit, flowers).' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">Quis est quī hoc nesciat?</span>', options: ['Who is there who does not know this?', 'Who does not know this man?', 'Who knew this?', 'This is the one who does not know.'], answer: 0, explain: 'Characteristic after a question.' },
      { id: 't2', type: 'mc', prompt: 'Which sentence has a relative clause of characteristic?', options: ['Sōlus est quī hoc possit.', 'Vir quī venit amīcus est.', 'Liber quem legō bonus est.', 'Urbs quae ārdet Rōma est.'], answer: 0, explain: 'sōlus est quī + subjunctive.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Auxiliō sociīs vēnērunt.</span>', options: ['They came as a help to the allies.', 'They came with the help of the allies.', 'The allies came to help.', 'They helped the allies to come.'], answer: 0, explain: 'Double dative.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Spectāt___ vēnērunt.</span>', hint: 'to watch (supine)', answers: ['um'], full: 'Spectātum vēnērunt.', explain: 'Supine in -um after a verb of motion.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Dignī sunt quī laud___.</span>', hint: 'to be praised (subj., 3rd pl.)', answers: ['entur'], full: 'Dignī sunt quī laudentur.', explain: 'dignus quī + present subjunctive.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Hoc difficile dictū est.', model: 'This is difficult to say.', accepted: ['this is difficult to say', 'this is hard to say', 'it is difficult to say', 'it is hard to say', 'this is difficult to tell', 'this is hard to tell'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'it is a concern to me (double dative)', model: 'mihi cūrae est', accepted: ['mihi cūrae est', 'cūrae mihi est', 'est mihi cūrae'], explain: 'Double dative: a dative of purpose (cūrae, “as a concern”) with the dative of the person concerned (mihi).' },
      { id: 't8', type: 'mc', prompt: 'In Horace’s <span class="la">Tū nē quaesierīs</span>, the construction is:', options: ['nē + perfect subjunctive: a prohibition', 'a purpose clause', 'a fear clause', 'a characteristic clause'], answer: 0, explain: 'Do not ask.' },
      { id: 't9', type: 'mc', prompt: 'What are “Babylonian numbers” in Horace?', options: ['astrological calculations', 'Babylonian money', 'a kind of poem', 'military units'], answer: 0, explain: 'Horoscopes.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">Dum loquimur, fūgerit invida aetās</span>: <span class="la">fūgerit</span> is:', options: ['future perfect: will have fled', 'perfect subjunctive', 'pluperfect', 'present'], answer: 0, explain: 'By the time we finish talking, time will have fled.' },
      { id: 't11', type: 'mc', prompt: 'The supine is:', options: ['a verbal noun found only in -um and -ū', 'a kind of participle', 'the passive infinitive', 'a gerundive'], answer: 0, explain: 'Fourth principal part, two cases only.' }
    ]
  },

  reference: [
    { title: 'quī + subjunctive', headers: ['Type', 'Example', 'Meaning'], rows: [
      ['Characteristic', 'Nēmō est quī sciat.', 'There is nobody who knows.'], ['dignus quī', 'Dignus est quī laudētur.', 'He deserves to be praised.'], ['Purpose', 'Lēgātōs mīsit quī pācem peterent.', 'He sent envoys to ask for peace.'], ['Causal', 'Mē stultum, quī tibi crēdiderim!', 'Fool that I am, since I believed you!']
    ] },
    { title: 'The supine', headers: ['Form', 'Use', 'Example'], rows: [
      ['-um', 'purpose after verbs of motion', 'pācem petītum vēnērunt'], ['-ū', 'with adjectives, fās, nefās, opus', 'mīrābile dictū, facile factū'], ['-um īrī', 'future passive infinitive', 'amātum īrī']
    ] },
    { title: 'Datives of person', headers: ['Type', 'Example'], rows: [
      ['Reference', 'quem mihi fīnem dī dederint'], ['Possession', 'est mihi liber'], ['Double dative', 'hoc mihi cūrae est'], ['With adjectives', 'crēdula posterō']
    ] }
  ]
});
