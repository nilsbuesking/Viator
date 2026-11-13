/*
 * Latin — Lecture XXXIV: conditional sentences (simple, future more and less vivid,
 * contrary to fact, mixed); nisi, sīn; conditions in indirect speech; the historic infinitive.
 * Authentic reading: Pliny, Letters 6.20.10–12.
 * Content file only. Source texts (Pliny, Letters 6.16 and 6.20; Virgil) checked against the texts
 * supplied by Nils; length marks editorial. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-34',
  number: 34,
  title: 'Sī frāter tuus vīvit',
  subtitle: 'Conditional sentences: real, “should–would”, contrary to fact; nisi and sīn; conditions in reported speech; the historic infinitive; authentic reading: Pliny 6.20.10–12',
  minutes: 75,

  intro: `
    <p>A conditional sentence has two parts: the “if” clause (the <em>protasis</em>) and the main clause (the <em>apodosis</em>). Latin sorts conditions by how the speaker views them, and the mood and tense of the verbs show the type. There are three families:</p>
    <ul>
      <li><strong>open</strong> conditions, with the indicative: <span class="la">Sī vīvit, vult vōs esse salvōs.</span> “If he is alive, he wants you to be safe.”</li>
      <li><strong>“should – would”</strong> conditions about the future, with the present subjunctive: <span class="la">Sī veniās, gaudeam.</span> “If you were to come, I would be glad.”</li>
      <li><strong>contrary-to-fact</strong> conditions, with the imperfect or pluperfect subjunctive: <span class="la">Sī adessēs, gaudērem.</span> “If you were here (you are not), I would be glad.”</li>
    </ul>
    <p>German has the same distinction between real and unreal conditions (<em>Wenn er lebt …</em> / <em>Wenn du hier wärst …</em>), and Konjunktiv II matches the Latin contrary-to-fact type closely.</p>
    <p>This lecture begins the second letter Pliny wrote to Tacitus, <em>Letters</em> 6.20, on his own experience at Misenum. The reading is the dramatic centre: a friend urges mother and son to flee, the cloud comes down over the bay, and Pliny refuses to leave his mother.</p>
  `,

  background: [
    {
      title: 'Quamquam animus meminisse horret',
      html: `
        <p>Tacitus had read the first letter and wanted to know what the nephew himself had suffered at Misenum. Pliny begins his answer with two lines of Virgil:</p>
        <p class="la">Quamquam animus meminisse horret lūctūque refūgit, / incipiam.</p>
        <p>“Though my mind shudders to remember and has shrunk back in grief, I shall begin” (<em>Aeneid</em> 2.12–13; text as supplied by Nils, length marks added). These are Aeneas’ words to Dido before he tells of the fall of Troy. The quotation casts the seventeen-year-old Pliny (he says <span class="la">agēbam duodēvīcēnsimum annum</span>, “I was in my eighteenth year”) as a small Aeneas, escaping a burning world and refusing to abandon a parent. How seriously the parallel is meant is debated: some readers see deliberate self-dramatisation, others gentle self-irony, since the nephew spends the first part of the night reading Livy.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Wall_painting_-_caricature_of_Aeneas_fleeing_with_his_father_and_his_son_-_Stabiae_-_Napoli_MAN_9089.jpg/960px-Wall_painting_-_caricature_of_Aeneas_fleeing_with_his_father_and_his_son_-_Stabiae_-_Napoli_MAN_9089.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Wall_painting_-_caricature_of_Aeneas_fleeing_with_his_father_and_his_son_-_Stabiae_-_Napoli_MAN_9089.jpg/500px-Wall_painting_-_caricature_of_Aeneas_fleeing_with_his_father_and_his_son_-_Stabiae_-_Napoli_MAN_9089.jpg|https://upload.wikimedia.org/wikipedia/commons/c/c5/Wall_painting_-_caricature_of_Aeneas_fleeing_with_his_father_and_his_son_-_Stabiae_-_Napoli_MAN_9089.jpg" alt="Roman wall painting of three animal-headed figures: one carrying an old figure on his shoulder and leading a child"><figcaption>A Roman joke on the most famous escape in Latin literature: Aeneas carrying his father Anchises and leading his son Ascanius out of Troy, all three with animal heads (usually described as apes or dogs). Wall painting from Stabiae, 1st century AD (Naples, National Archaeological Museum, inv. 9089). <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Wall_painting_-_caricature_of_Aeneas_fleeing_with_his_father_and_his_son_-_Stabiae_-_Napoli_MAN_9089.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'The friend from Spain',
      html: `
        <p>An unnamed friend of the uncle, recently arrived from Spain, urges mother and son to flee. The elder Pliny had served as an imperial procurator in Spain (the nephew mentions this in <em>Letters</em> 3.5), so a friend from there is plausible, but nothing more is known of him. His argument is a neat pair of conditions: if your brother (to the mother) and uncle (to the son) is alive, he wants you safe; if he has died, he wanted you to survive him. Either way: why are you waiting?</p>
        <p>Mother and son reply that they will not think of their own safety while uncertain of his. The friend leaves at a run, and soon the cloud comes down over the sea, hides Capri and swallows the headland of Misenum.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Capo_Miseno_e_spiaggia_di_Miliscola.jpg/960px-Capo_Miseno_e_spiaggia_di_Miliscola.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Capo_Miseno_e_spiaggia_di_Miliscola.jpg/500px-Capo_Miseno_e_spiaggia_di_Miliscola.jpg|https://upload.wikimedia.org/wikipedia/commons/f/f4/Capo_Miseno_e_spiaggia_di_Miliscola.jpg" alt="A rocky headland rising from the sea beyond a sandy beach"><figcaption>The headland of Misenum (Capo Miseno) today, seen across the beach of Miliscola. Pliny: <span class="la">Mīsēnī quod prōcurrit abstulerat</span>, the cloud “had taken away what of Misenum juts out”. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Capo_Miseno_e_spiaggia_di_Miliscola.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Wenn du kämest, wenn du gekommen wärst',
      html: `
        <p>German expresses an unreal condition with Konjunktiv II: <em>Wenn du hier wärst, freute ich mich</em> (or <em>würde ich mich freuen</em>); in the past, <em>Wenn du hier gewesen wärst, hätte ich mich gefreut</em>. Latin uses the imperfect subjunctive for the first and the pluperfect for the second: <span class="la">Sī adessēs, gaudērem</span>; <span class="la">Sī adfuissēs, laetus fuissem</span>. The match is close.</p>
        <p>Latin has a third type that German and English do not mark as sharply: the “should – would” condition about the future, with the present subjunctive (<span class="la">Sī veniās, gaudeam</span>). German usually renders it with Konjunktiv II too (<em>Wenn du kämest …</em>) or with <em>sollte</em> (<em>Falls du kommen solltest …</em>). The difference from the contrary-to-fact type is that the Latin speaker regards it as possible, only unlikely or hypothetical.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Possem glōriārī nōn gemitum mihi, nōn vōcem parum fortem in tantīs perīculīs excidisse, nisi mē cum omnibus, omnia mēcum perīre miserō, magnō tamen mortālitātis sōlāciō crēdidissem.</p>
    <p>“I could boast that not a groan, not a cowardly word escaped me in such great danger, had I not believed that I was perishing with everyone and everything with me: a wretched, but still a great consolation for being mortal.” Pliny, <em>Letters</em> 6.20.17, checked against the text Nils supplied; length marks added.</p>
    <p>A <strong>mixed</strong> contrary-to-fact condition: <span class="la">possem</span> (imperfect subjunctive) for the present (“I could boast now”), <span class="la">nisi … crēdidissem</span> (pluperfect subjunctive) for the past (“if I had not believed then”). The point is characteristically Pliny’s: he cannot claim courage, because what kept him calm was the belief that the whole world was ending with him.</p>
    <p>In the first letter, a condition inside indirect statement: <span class="la">videō mortī eius, sī celebrētur ā tē, immortālem glōriam esse prōpositam</span> (6.16.1), “I see that immortal glory is in store for his death, if it is celebrated by you”.</p>
  `,

  pronunciation: `
    <h3>nisi, sīn</h3>
    <p><span class="la">NI-si</span> with two short vowels; <span class="la">sīn</span> “but if” with long <span class="la">ī</span>, from <span class="la">sī</span> + <span class="la">-ne</span>.</p>
    <h3>Capreae, Mīsēnum</h3>
    <p><span class="la">CA-pre-ae</span>, Capri; <span class="la">Mī-SĒ-num</span>, modern Miseno. Italian <em>Capri</em> is stressed on the first syllable, like the Latin.</p>
  `,

  grammar: [
    {
      title: '1. Open conditions: indicative',
      html: `
        <p>The speaker says nothing about whether the condition is fulfilled. Any tense of the indicative, as in English and German:</p>
        <ul>
          <li><span class="la">Sī vīvit, vult vōs esse salvōs.</span> If he is alive, he wants you safe.</li>
          <li><span class="la">Sī periit, superstitēs voluit.</span> If he has died, he wanted you to survive.</li>
        </ul>
        <p>About the future, Latin is more exact than English: <span class="la">Sī vēnerit, gaudēbō</span> (future perfect) or <span class="la">Sī veniet, gaudēbō</span> (future), “If he comes, I shall be glad”. English uses the present; German usually does too (<em>Wenn er kommt …</em>). Grammars call this the “future more vivid” condition.</p>
      `
    },
    {
      title: '2. “Should – would”: present subjunctive',
      html: `
        <p>A hypothetical future, possible but not expected: present subjunctive in both halves (sometimes the perfect subjunctive, with no difference of time).</p>
        <ul>
          <li><span class="la">Sī veniās, gaudeam.</span> If you should come (were to come), I would be glad.</li>
          <li><span class="la">Sī hoc dīcās, errēs.</span> If you were to say this, you would be wrong.</li>
        </ul>
        <p>Grammars call it the “future less vivid” or “ideal” condition. It is less common in narrative than the other types, but frequent in argument.</p>
      `
    },
    {
      title: '3. Contrary to fact: imperfect and pluperfect subjunctive',
      html: `
        <ul>
          <li>Present: <strong>imperfect</strong> subjunctive in both halves. <span class="la">Sī adessēs, gaudērem.</span> If you were here, I would be glad (you are not).</li>
          <li>Past: <strong>pluperfect</strong> subjunctive in both halves. <span class="la">Sī adfuissēs, laetus fuissem.</span> If you had been here, I would have been glad (you were not).</li>
          <li>Mixed: past condition, present result. <span class="la">Sī tē audīvissem, nunc salvus essem.</span> If I had listened to you, I would be safe now.</li>
        </ul>
        <p>Note the tense shift: the Latin imperfect subjunctive refers to the present, the pluperfect to the past, exactly as German <em>wäre</em> refers to the present and <em>gewesen wäre</em> to the past.</p>
      `
    },
    {
      title: '4. nisi, sī nōn, sīn',
      html: `
        <ul>
          <li><span class="la">nisi</span>: “if not, unless”; the usual negative condition. <span class="la">Nisi fūgissent, periissent.</span> If they had not fled, they would have died.</li>
          <li><span class="la">sī nōn</span>: used when one word is negated rather than the whole condition, or in contrast: <span class="la">sī nōn vult …</span> “if he does <em>not</em> want …”.</li>
          <li><span class="la">sīn</span>: “but if”, introducing a second, opposite case. <span class="la">Sī vīvit, … sīn periit, …</span>.</li>
        </ul>
        <p>After <span class="la">sī, nisi, nē, num</span>, <span class="la">aliquis</span> loses its <span class="la">ali-</span>: <span class="la">sī quis</span>, “if anyone”.</p>
      `
    },
    {
      title: '5. Conditions in reported speech; the historic infinitive',
      html: `
        <p>Pliny’s mother says that she will die well <span class="la">sī mihi causa mortis nōn fuisset</span>, “if she was not (had not been) the cause of my death”. Her own words were <span class="la">Bene moriar, sī tibi causa mortis nōn fuerō</span>, a future more vivid condition with the future perfect. In reported speech after a past verb the main clause becomes an infinitive (<span class="la">moritūram</span> [<span class="la">esse</span>]) and the “if” clause becomes subjunctive, the future perfect turning into a pluperfect subjunctive by the sequence of tenses (Lecture XXXI).</p>
        <p>The same passage shows the <strong>historic infinitive</strong>: <span class="la">Tum māter ōrāre, hortārī, iubēre</span>, “Then my mother begs, urges, orders”, and <span class="la">illa nūbēs dēscendere in terrās, operīre maria</span>, “that cloud comes down onto the land, covers the sea”. In vivid narrative a present infinitive with a nominative subject can stand for an imperfect or perfect indicative. It is a stylistic device of historians (Sallust, Tacitus) and Pliny uses it for rapid action.</p>
      `
    }
  ],

  vocab: [
    { id: 'nisi', head: 'nisi', la: 'nisi', pos: 'conjunction', en: 'if not, unless; except', stress: 'NI-si' },
    { id: 'sin', head: 'sīn', la: 'sīn', pos: 'conjunction', en: 'but if', stress: 'SĪN' },
    { id: 'proinde', head: 'proinde', la: 'proinde', pos: 'adverb', en: 'therefore, accordingly', stress: 'PROIN-de', note: 'Usually two syllables in verse (proin-de).' },
    { id: 'ultra', head: 'ultrā', la: 'ultrā', pos: 'adverb / preposition (+ acc.)', en: 'beyond; further, longer', stress: 'UL-trā', deriv: 'ultra-', note: 'nōn morātus ultrā: not delaying any longer (Pliny).' },
    { id: 'aegre', head: 'aegrē', la: 'aegrē', pos: 'adverb', en: 'with difficulty, reluctantly', stress: 'AE-grē', note: 'From aeger, “ill”. aegrē ferre: to take badly (Lecture XXXII).' },
    { id: 'superstes', head: 'superstes', la: 'superstes, superstitis', pos: 'adjective, 3rd decl. (one ending)', en: 'surviving, outliving', stress: 'su-PER-stes · su-PER-sti-tis', note: 'super + stō, “stand over”. Related to superstitiō.' },
    { id: 'iuvenis', head: 'iuvenis', la: 'iuvenis, iuvenis', g: 'm', pos: 'noun, 3rd decl.', en: 'young man (roughly 18 to 45)', stress: 'IU-ve-nis', deriv: 'juvenile', note: 'Genitive plural iuvenum (not an i-stem). Compare German jung, English young.' },
    { id: 'gradus', head: 'gradus', la: 'gradus, gradūs', g: 'm', pos: 'noun, 4th decl.', en: 'step, pace; degree, rank', stress: 'GRA-dus', deriv: 'grade, degree', note: 'gradum addere: to quicken one’s pace (Pliny 6.20.12).' },
    { id: 'cursus', head: 'cursus', la: 'cursus, cursūs', g: 'm', pos: 'noun, 4th decl.', en: 'running, course; voyage', stress: 'CUR-sus', deriv: 'course', note: 'From currō. cursus honōrum: the sequence of public offices.' },
    { id: 'mors', head: 'mors', la: 'mors, mortis', g: 'f', pos: 'noun, 3rd decl. (i-stem)', en: 'death', stress: 'MORS · MOR-tis', deriv: 'mortal', note: 'Genitive plural mortium. Compare German Mord.' },
    { id: 'evado', head: 'ēvādō', la: 'ēvādō, ēvādere, ēvāsī, ēvāsum', pos: 'verb, 3rd conj.', en: 'go out, escape', stress: 'ē-VĀ-dō · ē-VĀ-de-re', deriv: 'evade, evasion' },
    { id: 'cesso', head: 'cessō', la: 'cessō, cessāre, cessāvī, cessātum', pos: 'verb, 1st conj.', en: 'delay, hold back, be idle', stress: 'CES-sō · ces-SĀ-re', deriv: 'cease, cessation', note: 'Frequentative of cēdō.' },
    { id: 'cogo', head: 'cōgō', la: 'cōgō, cōgere, coēgī, coāctum', pos: 'verb, 3rd conj.', en: 'drive together, collect; force, compel', stress: 'CŌ-gō · CŌ-ge-re', deriv: 'cogent', note: 'co- + agō. coēgī has three syllables.' },
    { id: 'operio', head: 'operiō', la: 'operiō, operīre, operuī, opertum', pos: 'verb, 4th conj.', en: 'cover', stress: 'o-PE-ri-ō · o-pe-RĪ-re', note: 'Opposite of aperiō, “open” (Lecture XI).' },
    { id: 'abscondo', head: 'abscondō', la: 'abscondō, abscondere, abscondī, absconditum', pos: 'verb, 3rd conj.', en: 'hide, conceal', stress: 'abs-CON-dō · abs-CON-de-re', deriv: 'abscond', note: 'Perfect also abscondidī.' },
    { id: 'incuso', head: 'incūsō', la: 'incūsō, incūsāre, incūsāvī, incūsātum', pos: 'verb, 1st conj.', en: 'accuse, blame', stress: 'in-CŪ-sō · in-cū-SĀ-re', note: 'in + causa.' }
  ],

  grammarCards: [
    { id: 'g34-open', front: 'Open condition', back: 'Indicative in both parts: Sī vīvit, vult vōs esse salvōs.' },
    { id: 'g34-fmv', front: 'Future more vivid', back: 'sī + future / future perfect indicative: Sī vēnerit, gaudēbō. (If he comes …)' },
    { id: 'g34-flv', front: '“Should – would” (future less vivid)', back: 'Present subjunctive in both: Sī veniās, gaudeam.' },
    { id: 'g34-cfp', front: 'Contrary to fact, present', back: 'Imperfect subjunctive in both: Sī adessēs, gaudērem.' },
    { id: 'g34-cfpast', front: 'Contrary to fact, past', back: 'Pluperfect subjunctive in both: Sī adfuissēs, laetus fuissem.' },
    { id: 'g34-mixed', front: 'Mixed condition', back: 'sī + plupf. subj., impf. subj. in main clause: Sī tē audīvissem, nunc salvus essem.' },
    { id: 'g34-nisi', front: 'nisi; sīn', back: 'if not, unless; but if' },
    { id: 'g34-siquis', front: 'sī quis', back: 'if anyone (ali- drops after sī, nisi, nē, num)' },
    { id: 'g34-german1', front: 'Wenn du hier wärst, freute ich mich.', back: 'Sī adessēs, gaudērem.' },
    { id: 'g34-german2', front: 'Wenn du hier gewesen wärst, hätte ich mich gefreut.', back: 'Sī adfuissēs, laetus fuissem.' },
    { id: 'g34-histinf', front: 'Historic infinitive', back: 'Present infinitive + nominative for a past indicative in vivid narrative: māter ōrāre, hortārī, iubēre.' },
    { id: 'g34-oo', front: 'Conditions in reported speech (past)', back: 'Main clause → infinitive; sī-clause → subjunctive by sequence (fut. perf. → plupf. subj.).' },
    { id: 'g34-frater', front: 'Sī frāter tuus, tuus avunculus vīvit, vult esse vōs salvōs; sī periit, superstitēs voluit.', back: 'If your brother, your uncle, is alive, he wants you to be safe; if he has died, he wanted you to survive him. (Pliny 6.20.10)' },
    { id: 'g34-cessatis', front: 'Proinde quid cessātis ēvādere?', back: 'So why are you hesitating to escape? (Pliny 6.20.10)' },
    { id: 'g34-mater', front: 'sē … bene moritūram, sī mihi causa mortis nōn fuisset', back: 'that she would die well, if she had not been the cause of my death (Pliny 6.20.12)' },
    { id: 'g34-possem', front: 'Possem glōriārī …, nisi … crēdidissem.', back: 'I could boast …, had I not believed … (Pliny 6.20.17; mixed condition)' },
    { id: 'g34-virgil', front: 'Quamquam animus meminisse horret lūctūque refūgit, / incipiam.', back: 'Though my mind shudders to remember and has shrunk back in grief, I shall begin. (Aeneid 2.12–13; quoted at Pliny 6.20.1)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">Sī adessēs, gaudērem.</span>', options: ['If you were here, I would be glad.', 'If you are here, I am glad.', 'If you had been here, I would have been glad.', 'If you come, I shall be glad.'], answer: 0, explain: 'Imperfect subjunctive: contrary to fact, present.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">Sī adfuissēs, laetus fuissem.</span>', options: ['If you had been here, I would have been glad.', 'If you were here, I would be glad.', 'If you are here, I shall be glad.', 'Although you were here, I was glad.'], answer: 0, explain: 'Pluperfect subjunctive: contrary to fact, past.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Sī veniās, gaudeam.</span> is a condition of which type?', options: ['“should – would” (future less vivid)', 'contrary to fact, present', 'open, present', 'contrary to fact, past'], answer: 0, explain: 'Present subjunctive in both halves.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Sī vēneris, gaudēbō.</span>', options: ['If you come, I shall be glad.', 'If you came, I would be glad.', 'If you had come, I would have been glad.', 'When you came, I was glad.'], answer: 0, explain: 'Future more vivid: future perfect + future.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">nisi</span> means:', options: ['if not, unless', 'but if', 'if only', 'not yet'], answer: 0, explain: 'sīn = but if; utinam = if only.' },
    { id: 'e6', type: 'mc', prompt: 'German <em>Wenn du hier wärst, …</em> corresponds to:', options: ['Sī adessēs, …', 'Sī ades, …', 'Sī adfuistī, …', 'Sī aderis, …'], answer: 0, explain: 'Konjunktiv II for the present ≈ Latin imperfect subjunctive.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Sī hīc ess___, laetus essem.</span>', hint: 'you (sg.) were', answers: ['ēs', 'es'], full: 'Sī hīc essēs, laetus essem.', explain: 'Imperfect subjunctive: contrary to fact, present.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Sī pecūniam habērem, nāvem em___.</span>', hint: 'I would buy', answers: ['erem'], full: 'Sī pecūniam habērem, nāvem emerem.', explain: 'emere + -m.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Sī Mārcus vēn___, gaudēbimus.</span>', hint: 'comes (future perfect)', answers: ['erit'], full: 'Sī Mārcus vēnerit, gaudēbimus.', explain: 'Future more vivid: future perfect in the sī-clause.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">___ hoc dīcās, errēs.</span>', hint: 'if', answers: ['sī', 'si'], full: 'Sī hoc dīcās, errēs.', explain: '“Should – would” condition.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Sī tē vīdissem, tē salūtāv___.</span>', hint: 'I would have greeted', answers: ['issem'], full: 'Sī tē vīdissem, tē salūtāvissem.', explain: 'Pluperfect subjunctive: contrary to fact, past.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Moriēmur, ___ fugiēmus.</span>', hint: 'unless', answers: ['nisi'], full: 'Moriēmur, nisi fugiēmus.', explain: 'nisi: unless.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the imperfect subjunctive of <span class="la">habeō</span> and the pluperfect subjunctive of <span class="la">videō</span>.', headers: ['habeō (impf.)', 'videō (plupf.)'], rows: [
      { label: '1st sg.', answers: ['habērem', 'vīdissem'] },
      { label: '2nd sg.', answers: ['habērēs', 'vīdissēs'] },
      { label: '3rd sg.', answers: ['habēret', 'vīdisset'] },
      { label: '1st pl.', answers: ['habērēmus', 'vīdissēmus'] },
      { label: '2nd pl.', answers: ['habērētis', 'vīdissētis'] },
      { label: '3rd pl.', answers: ['habērent', 'vīdissent'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the present subjunctive of <span class="la">veniō</span> and the imperfect subjunctive of <span class="la">adsum</span>.', headers: ['veniō (pres.)', 'adsum (impf.)'], rows: [
      { label: '1st sg.', answers: ['veniam', 'adessem'] },
      { label: '2nd sg.', answers: ['veniās', 'adessēs'] },
      { label: '3rd sg.', answers: ['veniat', 'adesset'] },
      { label: '1st pl.', answers: ['veniāmus', 'adessēmus'] },
      { label: '2nd pl.', answers: ['veniātis', 'adessētis'] },
      { label: '3rd pl.', answers: ['veniant', 'adessent'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each condition to its type.', pairs: [
      ['Sī vīvit, vult …', 'open, present'], ['Sī vēnerit, gaudēbō.', 'future more vivid'], ['Sī veniās, gaudeam.', '“should – would”'], ['Sī adessēs, gaudērem.', 'contrary to fact, present'], ['Sī adfuissēs, laetus fuissem.', 'contrary to fact, past']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Sī adessēs, gaudērem.', tokens: ['If', 'you were here,', 'I would', 'be glad'], explain: 'Contrary to fact, present.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Sī mē amās, venī mēcum.', model: 'If you love me, come with me.', accepted: ['if you love me come with me', 'if you love me go with me'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Sī hoc dīxissēs, errāvissēs.', model: 'If you had said this, you would have been wrong.', accepted: ['if you had said this you would have been wrong', 'if you had said this you would have erred', 'if you had said this you would have made a mistake', 'if you had said that you would have been wrong', 'had you said this you would have been wrong'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Nisi fūgissent, periissent.', model: 'If they had not fled, they would have died.', accepted: ['if they had not fled they would have died', 'if they had not fled they would have perished', 'unless they had fled they would have died', 'had they not fled they would have died', 'had they not fled they would have perished', 'if they hadn’t fled they would have died', 'if they hadnt fled they would have died'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'if you (sg.) were here (use adesse)', model: 'sī adessēs', accepted: ['sī adessēs', 'sī hīc adessēs', 'sī hīc essēs'], explain: 'Present contrary-to-fact condition: imperfect subjunctive, like German Konjunktiv II, wenn du hier wärst.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'unless', model: 'nisi', accepted: ['nisi'], explain: 'Nisi “unless, if … not” negates the whole condition.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'if he had come', model: 'sī vēnisset', accepted: ['sī vēnisset'], explain: 'Past contrary-to-fact: pluperfect subjunctive, like German wenn er gekommen wäre.' },
    { id: 'e23', type: 'mc', prompt: 'What was the Spanish friend’s argument?', options: ['Whether the uncle was alive or dead, he would want them to escape', 'The uncle had ordered them to stay', 'The ships were waiting', 'Misenum was safe'], answer: 0, explain: 'Sī vīvit, vult esse vōs salvōs; sī periit, superstitēs voluit.' },
    { id: 'e24', type: 'mc', prompt: 'Why did Pliny’s mother tell him to go without her?', options: ['He was young and could run; she was old and heavy and would die content', 'She wanted to wait for her brother', 'She was afraid of the crowd', 'She had a ship'], answer: 0, explain: 'posse enim iuvenem, sē et annīs et corpore gravem bene moritūram.' },
    { id: 'e25', type: 'mc', prompt: 'In <span class="la">Tum māter ōrāre, hortārī, iubēre</span>, the infinitives are:', options: ['historic infinitives, standing for past indicatives', 'complementary infinitives after a missing verb of wanting', 'indirect statement', 'imperatives'], answer: 0, explain: 'Present infinitive with a nominative subject in vivid narrative.' }
  ],

  reading: {
    title: 'Māter et fīlius (Plīnius, Epistulae 6.20.10–12)',
    note: 'Authentic text, unadapted: Pliny the Younger, Letters 6.20.10–12, from the copy Nils supplied; length marks added, commas added between the historic infinitives. Tap any word.',
    text: 'Tum vērō idem ille ex Hispāniā amīcus ācrius et īnstantius “Sī frāter” inquit “tuus, tuus avunculus vīvit, vult esse vōs salvōs; sī periit, superstitēs voluit. Proinde quid cessātis ēvādere?” Respondimus nōn commissūrōs nōs ut dē salūte illīus incertī nostrae cōnsulerēmus. Nōn morātus ultrā prōripit sē effūsōque cursū perīculō aufertur. Nec multō post illa nūbēs dēscendere in terrās, operīre maria; cīnxerat Capreās et absconderat, Mīsēnī quod prōcurrit abstulerat. Tum māter ōrāre, hortārī, iubēre, quōquō modō fugerem; posse enim iuvenem, sē et annīs et corpore gravem bene moritūram, sī mihi causa mortis nōn fuisset. Ego contrā salvum mē nisi ūnā nōn futūrum; dein manum eius amplexus addere gradum cōgō. Pāret aegrē incūsatque sē, quod mē morētur.',
    translation: 'Then that same friend from Spain spoke more sharply and urgently: “If your brother, your uncle, is alive, he wants you to be safe; if he has died, he wanted you to survive him. So why are you hesitating to escape?” We answered that we would not think of our own safety while uncertain of his. Without waiting any longer he rushes off and gets himself out of danger at full speed. Not long afterwards the cloud came down onto the land and covered the sea; it had already enveloped Capri and hidden it, and had taken from sight the headland of Misenum. Then my mother begged, urged, ordered me to escape in any way I could: a young man could do it; she, weighed down by her years and her body, would die well if she had not been the cause of my death. I replied that I would not be saved except together with her; then I take her hand and make her quicken her pace. She obeys reluctantly and blames herself for slowing me down.',
    notes: [
      { ref: 'Sī frāter tuus, tuus avunculus vīvit', html: 'The friend turns from the mother (“your brother”) to the son (“your uncle”); the repeated <span class="la">tuus</span> marks the change of addressee. <span class="la">frāter</span> and <span class="la">avunculus</span> are the same man.' },
      { ref: 'vult esse vōs salvōs; sī periit, superstitēs voluit', html: 'Two open conditions: present (<span class="la">vīvit … vult</span>) and past (<span class="la">periit … voluit</span>). <span class="la">vōs esse salvōs</span>: accusative and infinitive after <span class="la">vult</span> (Lecture XXXIII). <span class="la">superstitēs</span> [<span class="la">vōs esse</span>]: “(you) to be survivors”. <span class="la">periit</span>: perfect of <span class="la">pereō</span>, “perish” (Lecture XXXVIII).' },
      { ref: 'Proinde quid cessātis ēvādere?', html: '<span class="la">quid</span>: “why?”. <span class="la">cessāre</span> + infinitive: “to delay doing”.' },
      { ref: 'Respondimus nōn commissūrōs nōs ut dē salūte illīus incertī nostrae cōnsulerēmus', html: 'Indirect statement: <span class="la">nōs nōn commissūrōs</span> [<span class="la">esse</span>], “that we would not allow it to happen”. <span class="la">committere ut</span>: “to act in such a way that”, here “to go so far as to”. <span class="la">dē salūte illīus incertī</span>: “uncertain about his safety”; <span class="la">nostrae</span> [<span class="la">salūtī</span>] <span class="la">cōnsulere</span>: “to look after our own (safety)”, dative with <span class="la">cōnsulō</span> (Lecture XXXVI).' },
      { ref: 'Nōn morātus ultrā prōripit sē effūsōque cursū perīculō aufertur', html: '<span class="la">morātus</span>: perfect participle of the deponent <span class="la">moror</span> (Lecture XXXV). <span class="la">sē prōripere</span>: “to rush off”. <span class="la">effūsō cursū</span>: “at full speed” (literally “with a poured-out run”). <span class="la">perīculō aufertur</span>: “he is carried away from danger”; <span class="la">aufertur</span> is the passive of <span class="la">auferō</span> (<span class="la">ab + ferō</span>, Lecture XXXII), with <span class="la">perīculō</span> ablative of separation.' },
      { ref: 'Nec multō post illa nūbēs dēscendere in terrās, operīre maria', html: 'Historic infinitives (grammar section 5). <span class="la">multō post</span>: “much later”, ablative of degree of difference; <span class="la">nec multō post</span>: “not long after”.' },
      { ref: 'cīnxerat Capreās et absconderat, Mīsēnī quod prōcurrit abstulerat', html: 'Pluperfects: by the time it reached the shore, it had already swallowed Capri. <span class="la">Mīsēnī quod prōcurrit</span>: “what of Misenum juts out”, the headland; <span class="la">quod prōcurrit</span> is the object of <span class="la">abstulerat</span>. <span class="la">abstulerat</span>: pluperfect of <span class="la">auferō</span>, “had taken away (from sight)”.' },
      { ref: 'Tum māter ōrāre, hortārī, iubēre, quōquō modō fugerem', html: 'Three historic infinitives in rising force: beg, urge, order. <span class="la">quōquō modō fugerem</span>: an indirect command (Lecture XXXVII) with <span class="la">ut</span> omitted, “that I should escape in whatever way (I could)”.' },
      { ref: 'posse enim iuvenem, sē et annīs et corpore gravem bene moritūram, sī mihi causa mortis nōn fuisset', html: 'Reported speech, with no verb of saying: the infinitives depend on the idea of speaking in <span class="la">ōrāre</span>. <span class="la">posse iuvenem</span> [<span class="la">fugere</span>]: “a young man could (escape)”. <span class="la">sē … moritūram</span> [<span class="la">esse</span>]: “she would die”. <span class="la">sī … nōn fuisset</span>: see grammar section 5.' },
      { ref: 'Ego contrā salvum mē nisi ūnā nōn futūrum', html: 'Still reported speech: supply “I said”. <span class="la">mē nōn futūrum</span> [<span class="la">esse</span>] <span class="la">salvum nisi ūnā</span>: “that I would not be safe unless together (with her)”. <span class="la">ūnā</span>: adverb, “together”.' },
      { ref: 'dein manum eius amplexus addere gradum cōgō', html: '<span class="la">amplexus</span>: perfect participle of the deponent <span class="la">amplector</span>, “having taken hold of”. <span class="la">cōgō</span> + infinitive: “I force (her) to quicken her pace”.' },
      { ref: 'Pāret aegrē incūsatque sē, quod mē morētur', html: '<span class="la">pāret</span>: “she obeys” (<span class="la">pāreō</span>), not <span class="la">parat</span>. <span class="la">quod mē morētur</span>: a causal clause with the subjunctive because it gives her reason, not the narrator’s: “because (as she said) she was delaying me”.' }
    ],
    glosses: {
      'tum': 'then', 'vērō': 'indeed, then', 'idem': 'the same', 'ille': 'that', 'ex': 'from (+ abl.)', 'hispāniā': 'abl. of Hispānia: Spain', 'amīcus': 'friend (nom.)', 'ācrius': 'more sharply', 'et': 'and', 'īnstantius': 'more urgently',
      'sī': 'if', 'frāter': 'brother (nom.)', 'inquit': 'he said', 'tuus': 'your', 'avunculus': 'uncle (nom.)', 'vīvit': '3rd sg. of vīvō: is alive', 'vult': '3rd sg. of volō: wants', 'esse': 'to be', 'vōs': 'you (acc. pl.)', 'salvōs': 'acc. pl. of salvus: safe', 'periit': 'perf. 3rd sg. of pereō: has died', 'superstitēs': 'acc. pl. of superstes: surviving', 'voluit': 'perf. 3rd sg. of volō: wanted',
      'proinde': 'so, therefore', 'quid': 'why', 'cessātis': '2nd pl. of cessō: you hesitate', 'ēvādere': 'inf. of ēvādō: to escape',
      'respondimus': 'perf. 1st pl. of respondeō: we replied', 'nōn': 'not', 'commissūrōs': 'acc. pl. of commissūrus (committō): about to allow', 'nōs': 'we, us (acc.)', 'ut': 'that (+ subj.)', 'dē': 'about (+ abl.)', 'salūte': 'abl. of salūs: safety', 'illīus': 'gen. of ille: his', 'incertī': 'nom. pl. of incertus: uncertain', 'nostrae': 'dat. f. of noster: our (own)', 'cōnsulerēmus': 'impf. subj. 1st pl. of cōnsulō: we should look after',
      'morātus': 'having delayed (moror)', 'ultrā': 'any longer', 'prōripit': '3rd sg. of prōripiō: rushes off', 'sē': 'himself; herself', 'effūsōque': 'and at full (abl. of effūsus + -que)', 'cursū': 'abl. of cursus: speed, running', 'perīculō': 'abl. of perīculum: from danger', 'aufertur': 'pres. pass. 3rd sg. of auferō: is carried away',
      'nec': 'and not', 'multō': 'much (abl.)', 'post': 'afterwards', 'illa': 'that', 'nūbēs': 'cloud (nom.)', 'dēscendere': 'hist. inf. of dēscendō: came down', 'in': 'onto (+ acc.)', 'terrās': 'acc. pl. of terra: the land', 'operīre': 'hist. inf. of operiō: covered', 'maria': 'acc. pl. of mare: the sea',
      'cīnxerat': 'plupf. 3rd sg. of cingō: had surrounded', 'capreās': 'acc. of Capreae: Capri', 'absconderat': 'plupf. 3rd sg. of abscondō: had hidden', 'mīsēnī': 'gen. of Mīsēnum: of Misenum', 'quod': 'what; because', 'prōcurrit': '3rd sg. of prōcurrō: juts out', 'abstulerat': 'plupf. 3rd sg. of auferō: had taken away',
      'māter': 'mother (nom.)', 'ōrāre': 'hist. inf. of ōrō: begged', 'hortārī': 'hist. inf. of hortor: urged', 'iubēre': 'hist. inf. of iubeō: ordered', 'quōquō': 'abl. of quisquis: in whatever', 'modō': 'abl. of modus: way', 'fugerem': 'impf. subj. 1st sg. of fugiō: I should flee',
      'posse': 'inf. of possum: could', 'enim': 'for', 'iuvenem': 'acc. of iuvenis: a young man', 'annīs': 'abl. pl. of annus: by years', 'corpore': 'abl. of corpus: by body', 'gravem': 'acc. f. of gravis: heavy', 'bene': 'well', 'moritūram': 'acc. f. of moritūrus (morior): about to die', 'mihi': 'dat. of ego: for me', 'causa': 'cause (nom.)', 'mortis': 'gen. of mors: of death', 'fuisset': 'plupf. subj. 3rd sg. of sum: had been',
      'ego': 'I', 'contrā': 'in reply, on the other hand', 'salvum': 'acc. of salvus: safe', 'mē': 'me (acc.)', 'nisi': 'unless, except', 'ūnā': 'together', 'futūrum': 'acc. of futūrus (sum): going to be', 'dein': 'then', 'manum': 'acc. of manus: hand', 'eius': 'her', 'amplexus': 'having grasped (amplector)', 'addere': 'inf. of addō: to add, quicken', 'gradum': 'acc. of gradus: pace', 'cōgō': '1st sg.: I force',
      'pāret': '3rd sg. of pāreō: obeys', 'aegrē': 'reluctantly', 'incūsatque': 'and blames (incūsō + -que)', 'morētur': 'pres. subj. 3rd sg. of moror: delays'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Why did Pliny and his mother refuse to leave?', options: ['They would not think of their own safety while unsure of the uncle’s', 'They thought Misenum was safe', 'They had no transport', 'The friend was lying'], answer: 0, explain: 'nōn commissūrōs nōs ut dē salūte illīus incertī nostrae cōnsulerēmus.' },
      { id: 'r2', type: 'mc', prompt: 'What had the cloud already done?', options: ['Covered Capri and hidden the headland of Misenum', 'Reached Rome', 'Destroyed the fleet', 'Lifted'], answer: 0, explain: 'cīnxerat Capreās et absconderat, Mīsēnī quod prōcurrit abstulerat.' },
      { id: 'r3', type: 'mc', prompt: 'What did Pliny do in reply to his mother?', options: ['He took her hand and made her walk faster', 'He ran ahead', 'He carried her', 'He went back to the house'], answer: 0, explain: 'manum eius amplexus addere gradum cōgō.' },
      { id: 'r4', type: 'mc', prompt: 'Why did his mother blame herself?', options: ['She was slowing him down', 'She had not left earlier', 'She had sent her brother away', 'She had lost the way'], answer: 0, explain: 'incūsatque sē, quod mē morētur.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">Sī tē audīvissem, nunc salvus essem.</span>', options: ['If I had listened to you, I would be safe now.', 'If I listened to you, I would be safe.', 'If I had listened to you, I would have been safe.', 'If I listen to you, I shall be safe.'], answer: 0, explain: 'Mixed: past condition, present result.' },
      { id: 't2', type: 'mc', prompt: 'Which sentence is a “should – would” condition?', options: ['Sī pluat, domī maneam.', 'Sī pluit, domī maneō.', 'Sī plueret, domī manērem.', 'Sī pluisset, domī mānsissem.'], answer: 0, explain: 'Present subjunctive in both halves.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">sīn</span> means:', options: ['but if', 'if not', 'without', 'unless'], answer: 0, explain: 'sī + -ne.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Sī hostēs vēnissent, urbem dēfend___.</span>', hint: 'we would have defended', answers: ['issēmus', 'issemus'], full: 'Sī hostēs vēnissent, urbem dēfendissēmus.', explain: 'Pluperfect subjunctive: contrary to fact, past.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Sī quis vēn___, eum excipiam.</span>', hint: 'comes (future perfect)', answers: ['erit'], full: 'Sī quis vēnerit, eum excipiam.', explain: 'Future more vivid; sī quis = if anyone.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Sī Rōmae essem, tē vidērem.', model: 'If I were in Rome, I would see you.', accepted: ['if i were in rome i would see you', 'if i was in rome i would see you', 'if i were at rome i would see you', 'were i in rome i would see you', 'if i were in rome i should see you'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'if you (sg.) had come (veniō)', model: 'sī vēnissēs', accepted: ['sī vēnissēs'], explain: 'Pluperfect subjunctive: perfect infinitive vēnisse + -s.' },
      { id: 't8', type: 'mc', prompt: 'The imperfect subjunctive in a contrary-to-fact condition refers to:', options: ['present time', 'past time', 'future time', 'any time'], answer: 0, explain: 'Like German wäre (present) vs gewesen wäre (past).' },
      { id: 't9', type: 'mc', prompt: 'Whose words open Pliny’s Letter 6.20?', options: ['Aeneas’, from Virgil’s Aeneid', 'Cicero’s', 'His uncle’s', 'Tacitus’'], answer: 0, explain: 'Aeneid 2.12–13: Quamquam animus meminisse horret …' },
      { id: 't10', type: 'mc', prompt: 'In <span class="la">Possem glōriārī …, nisi … crēdidissem</span>, Pliny says that:', options: ['he could boast of his courage, had he not believed the whole world was ending with him', 'he boasted of his courage', 'he believed he would survive', 'he groaned throughout'], answer: 0, explain: 'Pliny 6.20.17; a mixed condition.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">illa nūbēs dēscendere in terrās</span>: <span class="la">dēscendere</span> is:', options: ['a historic infinitive (= dēscendit / dēscendēbat)', 'an imperative', 'a complementary infinitive', 'a passive'], answer: 0, explain: 'Historic infinitive with a nominative subject.' }
    ]
  },

  reference: [
    { title: 'Conditional sentences', headers: ['Type', 'sī-clause', 'Main clause', 'Example'], rows: [
      ['Open', 'indicative', 'indicative', 'Sī vīvit, vult …'], ['Future more vivid', 'fut. / fut. perf. ind.', 'future ind.', 'Sī vēnerit, gaudēbō.'], ['“Should – would”', 'pres. subj.', 'pres. subj.', 'Sī veniās, gaudeam.'], ['Contrary to fact, present', 'impf. subj.', 'impf. subj.', 'Sī adessēs, gaudērem.'], ['Contrary to fact, past', 'plupf. subj.', 'plupf. subj.', 'Sī adfuissēs, laetus fuissem.'], ['Mixed', 'plupf. subj.', 'impf. subj.', 'Sī tē audīvissem, salvus essem.']
    ] },
    { title: 'German parallels', headers: ['Latin', 'German'], rows: [
      ['Sī vīvit, vult …', 'Wenn er lebt, will er …'], ['Sī adessēs, gaudērem.', 'Wenn du hier wärst, freute ich mich.'], ['Sī adfuissēs, laetus fuissem.', 'Wenn du hier gewesen wärst, hätte ich mich gefreut.'], ['Sī veniās, gaudeam.', 'Falls du kommen solltest, würde ich mich freuen.']
    ] }
  ]
});
