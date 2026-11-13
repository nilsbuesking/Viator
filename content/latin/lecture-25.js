/*
 * Latin — Lecture XXV: the ablative absolute; the passive periphrastic; the dative of agent.
 * First authentic reading of the course: Pliny, Letters 6.16.18–20.
 * Content file only. Source texts (Pliny, Letters 6.16; Virgil, Aeneid 1.8–9; Cicero, In Catilinam 1)
 * checked against the texts supplied by Nils (sources/latin-pliny-ep-6-16.txt,
 * sources/latin-readings.txt); length marks editorial. Pictures from Wikimedia Commons;
 * see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-25',
  number: 25,
  title: 'Spīritū obstrūctō',
  subtitle: 'The ablative absolute; the passive periphrastic (dēlenda est) and the dative of agent; first authentic reading: Pliny on his uncle’s death',
  minutes: 70,

  intro: `
    <p>Latin has no participle for “having done”: there is no single word for “having captured” or “having heard” (Lecture XXIV). Its commonest way round the gap is the <strong>ablative absolute</strong>: a noun and a participle in the ablative, standing apart from the rest of the sentence. <span class="la">Urbe captā, Caesar discessit</span>: literally “the city having been captured, Caesar left”, that is, “after capturing the city” or “when the city had been taken”. Caesar’s and Livy’s narrative is full of them.</p>
    <p>The second construction of this lecture uses the future passive participle (<span class="la">amandus</span>) with <span class="la">sum</span> to express what must be done: <span class="la">Epistula scrībenda est</span>, “The letter is to be written, must be written”. The person who must do it stands in the dative: <span class="la">mihi</span> “by me”. German has the same idiom in <em>Der Brief ist zu schreiben</em>.</p>
    <p>And for the first time the reading is an authentic Latin text, unadapted: the end of Pliny’s account of his uncle’s death, which you have met in pieces since Lecture XV.</p>
  `,

  background: [
    {
      title: 'Cicerōne cōnsule: dating by consuls',
      html: `
        <p>The Romans had no numbered years in everyday use. A year was named after the two consuls who held office in it: <span class="la">M. Tulliō Cicerōne C. Antōniō cōnsulibus</span>, “with Marcus Tullius Cicero and Gaius Antonius as consuls”, is 63 BC. This is an ablative absolute without a participle, because <span class="la">sum</span> has no present participle: “Cicero (being) consul”. Lists of consuls (<span class="la">fāstī</span>) were kept and displayed publicly; the best-known, the <span class="la">Fāstī Capitōlīnī</span>, were inscribed on marble in the Forum under Augustus.</p>
        <p>Counting years “from the foundation of the City” (<span class="la">ab urbe conditā</span>, AUC) was used by historians but was not the normal civil reckoning, and the foundation date itself (753 BC in Varro’s reckoning) was a scholarly construction. The dating of years from the birth of Christ was introduced only in the 6th century AD and became common much later.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/FastiCapitolini.JPG/960px-FastiCapitolini.JPG" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/FastiCapitolini.JPG/500px-FastiCapitolini.JPG|https://upload.wikimedia.org/wikipedia/commons/1/13/FastiCapitolini.JPG" alt="Fragments of a marble inscription with lists of names in columns"><figcaption>The <span class="la">Fāstī Capitōlīnī</span> (Rome, Capitoline Museums): fragments of the list of consuls and triumphs inscribed in the Forum under Augustus and rediscovered in the 16th century. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:FastiCapitolini.JPG" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Absolute constructions elsewhere',
      html: `
        <p>“Absolute” comes from <span class="la">absolūtus</span>, “loosened, detached”: the phrase is grammatically independent of the rest of the sentence. Greek has the same thing with the genitive, and English has a few in the nominative, mostly Latin-inspired: “weather permitting”, “all things considered”, “the meeting over, we left”.</p>
        <p>German has an absolute accusative (<em>den Hut in der Hand, trat er ein</em>), but the best German translation of a Latin ablative absolute is often a noun phrase, in the nominal style of German officialese and scholarship: <span class="la">urbe captā</span>, <em>nach der Einnahme der Stadt</em>; <span class="la">Cicerōne cōnsule</span>, <em>unter dem Konsulat Ciceros</em>; <span class="la">hīs rēbus cognitīs</span>, <em>nach Bekanntwerden dieser Dinge</em>. English prefers a clause: “after the city was taken”.</p>
      `
    },
    {
      title: 'Ut ego colligō: how Pliny knew',
      html: `
        <p>The reading of this lecture tells how the elder Pliny died on the shore at Stabiae. His nephew was not there; he was at Misenum, some 30 kilometres away across the bay. He must have relied on what his uncle’s companions told him, and he marks one point as his own inference: <span class="la">ut ego colligō</span>, “as I conclude”. The cause he gives, that dense fumes blocked his uncle’s breathing in a throat that was naturally weak, is therefore a deduction, not a report. Modern discussions have suggested a heart attack or another sudden illness, noting that the companions survived; the letter cannot settle it.</p>
        <p>This is worth noticing as a habit for all ancient texts: Pliny distinguishes what he heard from what he inferred, and the reader should too.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vesuvius_from_Castellammare_di_Stabia.jpg/960px-Vesuvius_from_Castellammare_di_Stabia.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Vesuvius_from_Castellammare_di_Stabia.jpg/500px-Vesuvius_from_Castellammare_di_Stabia.jpg|https://upload.wikimedia.org/wikipedia/commons/5/5b/Vesuvius_from_Castellammare_di_Stabia.jpg" alt="View across a bay towards a large volcanic mountain"><figcaption>Vesuvius seen from Castellammare di Stabia, the site of ancient Stabiae, where the elder Pliny died. Pompeii lies between the town and the mountain. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Vesuvius_from_Castellammare_di_Stabia.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Mūsa, mihi causās memorā, quō nūmine laesō,<br>quidve dolēns, rēgīna deum tot volvere cāsūs<br>īnsignem pietāte virum … impulerit.</p>
    <p>“Muse, tell me the causes: for what offence to her divinity, or resenting what, the queen of the gods drove a man outstanding in devotion to pass through so many misfortunes …” Virgil, <em>Aeneid</em> 1.8–11, checked against the copy in the course’s source files (that copy prints <span class="la">mihī</span> and <span class="la">īnsīgnem</span>; most editions print <span class="la">mihi, īnsignem</span>).</p>
    <p><span class="la">quō nūmine laesō</span> is an ablative absolute, literally “what divine power having been injured?”: a question inside a participial phrase, which English cannot imitate. <span class="la">impulerit</span> is a subjunctive (Lecture XXXI).</p>
    <p>Pliny, describing the cloud over Vesuvius, has two in one sentence: it rose <span class="la">recentī spīritū ēvecta, dein senēscente eō dēstitūta</span>, “carried up by the fresh blast, then, as that weakened, left unsupported” (6.16.6). <span class="la">senēscente eō</span> is an ablative absolute with a present participle: the weakening happens at the same time. And at Stabiae Pomponianus had loaded his ship <span class="la">nōndum perīculō appropinquante</span>, “though the danger was not yet approaching” (6.16.12).</p>
  `,

  pronunciation: `
    <h3>Phrasing</h3>
    <p>Read an ablative absolute as a unit, with a slight pause after it, as the commas in modern editions suggest: <span class="la">urbe captā | Caesar discessit</span>. Roman texts had no commas; the endings did the work.</p>
    <h3>-ndus</h3>
    <p>The vowel before <span class="la">nd</span> is short and stressed: <span class="la">a-MAN-dus, dē-LEN-da, scrī-BEN-da</span>.</p>
    <h3>Names in the reading</h3>
    <p><span class="la">sulpur</span>, “sulphur” (also spelt <span class="la">sulfur, sulphur</span>); <span class="la">stomachus</span> with <span class="la">ch</span> = <em>k</em> + breath, a Greek loan: <span class="la">STO-ma-chus</span>.</p>
  `,

  grammar: [
    {
      title: '1. The ablative absolute',
      html: `
        <p>A noun or pronoun and a participle agreeing with it, both in the ablative, form a phrase that is not part of the main clause’s structure:</p>
        <ul>
          <li><span class="la">Urbe captā, Caesar discessit.</span> When the city had been captured, Caesar left.</li>
          <li><span class="la">Hīs rēbus audītīs, Mārcus rīsit.</span> When he had heard this, Marcus laughed.</li>
          <li><span class="la">Patre dormiente, puerī lūdēbant.</span> While their father was asleep, the boys played.</li>
        </ul>
        <p>The participle follows the usual rule of relative time (Lecture XXIV): the <strong>perfect</strong> participle shows an action completed before the main verb, the <strong>present</strong> participle one happening at the same time.</p>
      `
    },
    {
      title: '2. Without a participle',
      html: `
        <p>Because <span class="la">sum</span> has no present participle, two nouns, or a noun and an adjective, can form an ablative absolute by themselves, with “being” understood:</p>
        <ul>
          <li><span class="la">Cicerōne cōnsule</span>: when Cicero was consul, in Cicero’s consulship.</li>
          <li><span class="la">Caesare duce</span>: with Caesar as leader, under Caesar’s command.</li>
          <li><span class="la">mē invītō</span>: against my will (“I being unwilling”).</li>
          <li><span class="la">vīvō patre</span>: in his father’s lifetime.</li>
        </ul>
      `
    },
    {
      title: '3. Translating',
      html: `
        <p>Start literally (“the city having been captured”), then choose a clause that fits the context:</p>
        <ul>
          <li><strong>when / after</strong>: <span class="la">Urbe captā …</span> When / after the city was taken …</li>
          <li><strong>since / because</strong>: <span class="la">Hostibus victīs, cīvēs laetī erant.</span> Since the enemy had been defeated, the citizens were happy.</li>
          <li><strong>although</strong>: <span class="la">Nōndum perīculō appropinquante, sarcinās in nāvēs contulerat.</span> Although the danger was not yet approaching, he had put his baggage on board (Pliny).</li>
          <li><strong>if</strong>: <span class="la">Deō iuvante, vincēmus.</span> If God helps, we shall win.</li>
          <li><strong>an active clause</strong>: often the most natural English: <span class="la">Urbe captā, Caesar discessit</span>, “Having taken the city, Caesar left.” The Romans would say that Caesar captured it, but the Latin does not have to state it.</li>
        </ul>
      `
    },
    {
      title: '4. When not to use it',
      html: `
        <p>The noun of an ablative absolute is normally not the subject or object of the main clause. If it is, Latin uses an ordinary participle agreeing with it:</p>
        <ul>
          <li><span class="la">Urbem captam mīlitēs dēlēvērunt.</span> The soldiers captured the city and destroyed it (“destroyed the captured city”). Not <span class="la">*Urbe captā, mīlitēs eam dēlēvērunt</span>, though authors sometimes break this rule.</li>
          <li><span class="la">Caesar, hīs rēbus cognitīs, profectus est.</span> Here <span class="la">hīs rēbus</span> is not in the main clause, so the ablative absolute is correct.</li>
        </ul>
      `
    },
    {
      title: '5. The passive periphrastic',
      html: `
        <p>The future passive participle (gerundive, Lecture XL) with a form of <span class="la">sum</span> expresses necessity or obligation, “must be …”, “is to be …”:</p>
        <ul>
          <li><span class="la">Epistula scrībenda est.</span> The letter must be written.</li>
          <li><span class="la">Haec omnia facienda erant.</span> All this had to be done.</li>
          <li><span class="la">Hoc faciendum erit.</span> This will have to be done.</li>
        </ul>
        <p>German has the exact equivalent in <em>sein + zu</em>: <em>Der Brief ist zu schreiben</em>, <em>Das war zu tun</em>. The participle agrees with the subject like an adjective: <span class="la">epistula scrībenda, librī legendī, bellum gerendum</span>.</p>
        <p>The phrase most often quoted is Cato the Elder’s call for the destruction of Carthage, usually given as <span class="la">Carthāgō dēlenda est</span>, “Carthage must be destroyed”. Ancient writers (Plutarch, <em>Cato the Elder</em> 27; Pliny the Elder, <em>Natural History</em> 15.74) report that he ended every speech in the senate with such a call, but none gives exactly these three words; the familiar form is a later summary.</p>
      `
    },
    {
      title: '6. The dative of agent',
      html: `
        <p>With the passive periphrastic, the person who must act stands in the <strong>dative</strong>, not with <span class="la">ā/ab</span>:</p>
        <ul>
          <li><span class="la">Epistula mihi scrībenda est.</span> The letter must be written by me; I must write the letter.</li>
          <li><span class="la">Patria nōbīs dēfendenda est.</span> We must defend our country.</li>
          <li><span class="la">Cicerōnī haec dīcenda erant.</span> Cicero had to say these things.</li>
        </ul>
        <p>German uses <em>von</em> here (<em>Der Brief ist von mir zu schreiben</em>). Translate into English with “must” and an active verb.</p>
      `
    }
  ],

  vocab: [
    { id: 'caligo', head: 'cālīgō', la: 'cālīgō, cālīginis', g: 'f', pos: 'noun, 3rd decl.', en: 'thick air, fog, fumes; darkness', stress: 'cā-LĪ-gō · cā-LĪ-gi-nis', note: 'Pliny 6.16.19: crassiōre cālīgine.' },
    { id: 'stomachus', head: 'stomachus', la: 'stomachus, stomachī', g: 'm', pos: 'noun, 2nd decl.', en: 'gullet, throat; stomach; temper', stress: 'STO-ma-chus', deriv: 'stomach', note: 'Greek loan. In Pliny probably the windpipe or throat.' },
    { id: 'numen', head: 'nūmen', la: 'nūmen, nūminis', g: 'n', pos: 'noun, 3rd decl.', en: 'divine power, divinity; will (of a god)', stress: 'NŪ-men · NŪ-mi-nis', deriv: 'numinous', note: 'Aeneid 1.8: quō nūmine laesō.' },
    { id: 'linteum', head: 'linteum', la: 'linteum, linteī', g: 'n', pos: 'noun, 2nd decl.', en: 'linen cloth, sheet; sail', stress: 'LIN-te-um', note: 'Compare līnum, “flax” (German Leinen).' },
    { id: 'invitus', head: 'invītus', la: 'invītus, -a, -um', pos: 'adjective', en: 'unwilling, against one’s will', stress: 'in-VĪ-tus', note: 'mē invītō: against my will.' },
    { id: 'integer', head: 'integer', la: 'integer, integra, integrum', pos: 'adjective', en: 'whole, untouched, intact; honest', stress: 'IN-te-ger · IN-te-gra', deriv: 'integer, integrity', note: 'in- + tangō: “untouched”.' },
    { id: 'frigidus', head: 'frīgidus', la: 'frīgidus, -a, -um', pos: 'adjective', en: 'cold', stress: 'FRĪ-gi-dus', deriv: 'frigid', note: 'frīgida (aqua): cold water.' },
    { id: 'posco', head: 'poscō', la: 'poscō, poscere, poposcī', pos: 'verb, 3rd conj.', en: 'ask for, demand', stress: 'POS-cō · POS-ce-re', note: 'Reduplicated perfect.' },
    { id: 'haurio', head: 'hauriō', la: 'hauriō, haurīre, hausī, haustum', pos: 'verb, 4th conj.', en: 'draw (water), drain, drink', stress: 'HAU-ri-ō · hau-RĪ-re' },
    { id: 'concido', head: 'concidō', la: 'concidō, concidere, concidī', pos: 'verb, 3rd conj.', en: 'fall down, collapse', stress: 'CON-ci-dō · con-CI-de-re', note: 'con + cadō. Not concīdō (con + caedō), “cut to pieces”.' },
    { id: 'colligo', head: 'colligō', la: 'colligō, colligere, collēgī, collēctum', pos: 'verb, 3rd conj.', en: 'gather, collect; infer, conclude', stress: 'COL-li-gō · col-LI-ge-re', deriv: 'collect', note: 'con + legō. ut ego colligō: as I conclude.' },
    { id: 'obstruo', head: 'obstruō', la: 'obstruō, obstruere, obstrūxī, obstrūctum', pos: 'verb, 3rd conj.', en: 'block, obstruct', stress: 'OB-stru-ō · ob-STRU-e-re', deriv: 'obstruct' },
    { id: 'excito', head: 'excitō', la: 'excitō, excitāre, excitāvī, excitātum', pos: 'verb, 1st conj.', en: 'rouse, wake up; stir up', stress: 'EX-ci-tō · ex-ci-TĀ-re', deriv: 'excite' },
    { id: 'deleo-pp', head: 'dēlendus', la: 'dēlendus, -a, -um (gerundive of dēleō)', pos: 'gerundive', en: 'to be destroyed, that must be destroyed', stress: 'dē-LEN-dus', note: 'Carthāgō dēlenda est: the usual, later summary of Cato’s call.' }
  ],

  grammarCards: [
    { id: 'g25-def', front: 'What is an ablative absolute?', back: 'Noun/pronoun + participle in the ablative, grammatically independent of the main clause.' },
    { id: 'g25-capta', front: 'Urbe captā, Caesar discessit.', back: 'When the city had been captured (having taken the city), Caesar left.' },
    { id: 'g25-time', front: 'Tense in the ablative absolute', back: 'Perfect participle: before the main verb; present participle: at the same time' },
    { id: 'g25-consule', front: 'Cicerōne cōnsule', back: 'in Cicero’s consulship (no participle: sum has none)' },
    { id: 'g25-duce', front: 'Caesare duce', back: 'under Caesar’s command' },
    { id: 'g25-invito', front: 'mē invītō', back: 'against my will' },
    { id: 'g25-trans', front: 'Ways to translate an ablative absolute', back: 'when/after, since, although, if; often an active English clause' },
    { id: 'g25-german', front: 'urbe captā in German nominal style', back: 'nach der Einnahme der Stadt' },
    { id: 'g25-notuse', front: 'When is an ablative absolute avoided?', back: 'When its noun is the subject or object of the main clause: urbem captam dēlēvērunt.' },
    { id: 'g25-periph', front: 'Passive periphrastic', back: 'gerundive + sum = must be …: epistula scrībenda est' },
    { id: 'g25-datagent', front: 'Epistula mihi scrībenda est.', back: 'I must write the letter (dative of agent).' },
    { id: 'g25-zu', front: 'Der Brief ist zu schreiben.', back: 'Epistula scrībenda est.' },
    { id: 'g25-carthago', front: 'Carthāgō dēlenda est', back: 'Carthage must be destroyed: the familiar later summary of Cato the Elder’s call' },
    { id: 'g25-numine', front: 'quō nūmine laesō', back: 'for what offence to her divinity (Aeneid 1.8): an ablative absolute in a question' },
    { id: 'g25-senescente', front: 'senēscente eō dēstitūta', back: 'left unsupported as that (blast) weakened (Pliny 6.16.6)' },
    { id: 'g25-obstructo', front: 'crassiōre cālīgine spīritū obstrūctō', back: 'his breathing having been blocked by the thicker fumes (Pliny 6.16.19)' },
    { id: 'g25-colligo', front: 'ut ego colligō', back: 'as I infer: Pliny marks the cause of death as his own deduction' },
    { id: 'g25-fasti', front: 'Fāstī Capitōlīnī', back: 'Inscribed list of consuls in the Forum under Augustus; years were named after consuls' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">Urbe captā, Caesar discessit.</span>', options: ['When the city had been captured, Caesar left.', 'Caesar left the captured city.', 'Caesar captured the city and stayed.', 'The city captured Caesar.'], answer: 0, explain: 'Ablative absolute with a perfect participle: before the main verb.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">Cicerōne cōnsule</span>:', options: ['when Cicero was consul', 'by the consul Cicero', 'for Cicero the consul', 'Cicero’s consul'], answer: 0, explain: 'Noun + noun: sum has no participle.' },
    { id: 'e3', type: 'mc', prompt: 'In <span class="la">patre dormiente</span>, the father sleeps:', options: ['at the same time as the main action', 'before the main action', 'after the main action', 'never'], answer: 0, explain: 'Present participle: simultaneous.' },
    { id: 'e4', type: 'mc', prompt: '“The soldiers destroyed the captured city” in Latin:', options: ['Urbem captam mīlitēs dēlēvērunt.', 'Urbe captā mīlitēs dēlēvērunt.', 'Urbs capta mīlitēs dēlēvit.', 'Urbe capta mīlitēs dēlēvērunt.'], answer: 0, explain: 'The city is the object: an ordinary participle, not an ablative absolute.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">absolūtus</span> means:', options: ['loosened, detached', 'perfect', 'acquitted', 'necessary'], answer: 0, explain: 'The phrase is detached from the sentence’s structure.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Epistula mihi scrībenda est.</span>', options: ['I must write the letter.', 'The letter was written to me.', 'I am writing the letter.', 'The letter will write to me.'], answer: 0, explain: 'Passive periphrastic with a dative of agent.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Hostibus vict___, cīvēs laetī erant.</span>', hint: 'having been defeated', answers: ['īs', 'is'], full: 'Hostibus victīs, cīvēs laetī erant.', explain: 'Ablative plural, agreeing with hostibus.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Patre dormient___, puerī lūdēbant.</span>', hint: 'sleeping', answers: ['e'], full: 'Patre dormiente, puerī lūdēbant.', explain: 'Ablative of the present participle: -e.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Epistul___ lēctā, Lūcius rīsit.</span>', hint: 'the letter (abl.)', answers: ['ā', 'a'], full: 'Epistulā lēctā, Lūcius rīsit.', explain: 'Noun and participle both ablative.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Caesare duc___, Gallī victī sunt.</span>', hint: 'as leader', answers: ['e'], full: 'Caesare duce, Gallī victī sunt.', explain: 'Ablative of dux.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Patria nōbīs dēfend___ est.</span>', hint: 'must be defended', answers: ['enda'], full: 'Patria nōbīs dēfendenda est.', explain: 'Gerundive, feminine for patria.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Omnibus rēbus audīt___, iūdex dīxit.</span>', hint: 'having been heard', answers: ['īs', 'is'], full: 'Omnibus rēbus audītīs, iūdex dīxit.', explain: 'Ablative plural feminine.' },
    { id: 'e13', type: 'paradigm', prompt: 'Form the ablative absolute (noun, participle).', headers: ['Noun', 'Participle / noun'], rows: [
      { label: 'the city having been captured', answers: ['urbe', 'captā'] },
      { label: 'the enemy (pl.) having been defeated', answers: ['hostibus', 'victīs'] },
      { label: 'the letter having been read', answers: ['epistulā', 'lēctā'] },
      { label: 'father sleeping', answers: ['patre', 'dormiente'] },
      { label: 'Cicero (being) consul', answers: ['Cicerōne', 'cōnsule'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the ablative singular of the present participle (used in an ablative absolute).', headers: ['Nominative', 'Ablative'], rows: [
      { label: 'amō', answers: ['amāns', 'amante'] },
      { label: 'moneō', answers: ['monēns', 'monente'] },
      { label: 'regō', answers: ['regēns', 'regente'] },
      { label: 'capiō', answers: ['capiēns', 'capiente'] },
      { label: 'audiō', answers: ['audiēns', 'audiente'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each phrase to its meaning.', pairs: [
      ['urbe captā', 'after the city was taken'], ['Caesare duce', 'under Caesar’s command'], ['mē invītō', 'against my will'], ['patre dormiente', 'while father was asleep'], ['hīs rēbus cognitīs', 'when this became known']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Urbe captā, Caesar discessit.', tokens: ['When the city', 'had been captured,', 'Caesar', 'left'], explain: 'Ablative absolute first, then the main clause.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Hīs rēbus audītīs, Mārcus rīsit.', model: 'When he had heard this, Marcus laughed.', accepted: ['when he had heard these things marcus laughed', 'when these things had been heard marcus laughed', 'having heard these things marcus laughed', 'after hearing these things marcus laughed', 'after these things had been heard marcus laughed', 'these things having been heard marcus laughed', 'on hearing these things marcus laughed', 'when he had heard this marcus laughed', 'having heard this marcus laughed', 'after hearing this marcus laughed'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Cicerōne cōnsule, Catilīna urbem relīquit.', model: 'When Cicero was consul, Catiline left the city.', accepted: ['when cicero was consul catiline left city', 'in consulship of cicero catiline left city', 'in cicero’s consulship catiline left city', 'in ciceros consulship catiline left city', 'with cicero as consul catiline left city', 'while cicero was consul catiline left city', 'cicero being consul catiline left city'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Haec epistula tibi legenda est.', model: 'You must read this letter.', accepted: ['you must read this letter', 'this letter must be read by you', 'this letter is to be read by you', 'you have to read this letter'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'the city having been captured (abl. abs.)', model: 'urbe captā', accepted: ['urbe captā'], explain: 'Ablative absolute: noun and participle in the ablative, grammatically independent of the main clause. German needs a clause (nachdem die Stadt eingenommen worden war).' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'Caesar (being) leader (abl. abs.)', model: 'Caesare duce', accepted: ['caesare duce'], explain: 'Sum has no present participle, so two nouns in the ablative form the ablative absolute: “with Caesar as leader”.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'This must be done.', model: 'Hoc faciendum est.', accepted: ['hoc faciendum est'], explain: 'Gerundive + sum expresses obligation, agreeing with neuter hoc. German has the same idea in das ist zu tun.' },
    { id: 'e23', type: 'mc', prompt: 'Virgil’s <span class="la">quō nūmine laesō</span> (Aeneid 1.8) is:', options: ['an ablative absolute in a question: “for what offence to her divinity”', 'an ablative of agent', 'a dative', 'a passive periphrastic'], answer: 0, explain: 'Literally “what divine power having been injured?”' },
    { id: 'e24', type: 'mc', prompt: 'How does Pliny explain his uncle’s death?', options: ['As his own inference: thick fumes blocked his breathing', 'As an eyewitness: he was struck by a stone', 'He quotes a doctor’s report', 'He says the cause is unknown'], answer: 0, explain: 'ut ego colligō … spīritū obstrūctō.' },
    { id: 'e25', type: 'mc', prompt: 'A natural German rendering of <span class="la">urbe captā</span>:', options: ['nach der Einnahme der Stadt', 'die Stadt nimmt', 'von der Stadt genommen', 'die zu nehmende Stadt'], answer: 0, explain: 'German nominal style.' }
  ],

  reading: {
    title: 'Mors Plīniī (Plīnius, Epistulae 6.16.18–20)',
    note: 'Authentic text, unadapted: Pliny the Younger, Letters 6.16.18–20, from the copy in the course’s source files; length marks added. Tap any word.',
    text: 'Ibi super abiectum linteum recubāns semel atque iterum frīgidam aquam poposcit hausitque. Deinde flammae flammārumque praenūntius odor sulpuris aliōs in fugam vertunt, excitant illum. Innītēns servolīs duōbus assurrēxit et statim concidit, ut ego colligō, crassiōre cālīgine spīritū obstrūctō, clausōque stomachō quī illī nātūrā invalidus et angustus et frequenter aestuāns erat. Ubi diēs redditus (is ab eō quem novissimē vīderat tertius), corpus inventum integrum illaesum opertumque ut fuerat indūtus: habitus corporis quiēscentī quam dēfūnctō similior.',
    translation: 'There, lying on a cloth spread out for him, he asked once and again for cold water and drank it. Then flames, and the smell of sulphur that heralds flames, put the others to flight and roused him. Leaning on two slaves he rose, and at once collapsed, because, as I infer, his breathing was blocked by the thicker fumes and his throat closed, which was by nature weak and narrow and often inflamed. When daylight returned (the third day after the last he had seen), his body was found intact, unharmed, and covered as he had been dressed: the appearance of the body was more like someone asleep than dead.',
    notes: [
      { ref: 'Ibi super abiectum linteum recubāns', html: '<span class="la">ibi</span>: on the shore at Stabiae, where the party had gone to see whether the sea would allow escape. <span class="la">abiectum</span>: perfect participle of <span class="la">abiciō</span>, “thrown down, spread out”. <span class="la">recubāns</span>: present participle, “lying back”.' },
      { ref: 'semel atque iterum frīgidam aquam poposcit hausitque', html: '<span class="la">semel atque iterum</span>: “once and again, repeatedly”. <span class="la">poposcit</span>: reduplicated perfect of <span class="la">poscō</span>. <span class="la">hausit</span>: perfect of <span class="la">hauriō</span>.' },
      { ref: 'flammae flammārumque praenūntius odor sulpuris aliōs in fugam vertunt, excitant illum', html: 'Two subjects, plural verbs, and no conjunction between <span class="la">vertunt</span> and <span class="la">excitant</span> (asyndeton), which gives speed. The historic present (Lecture XI) for the crisis. <span class="la">praenūntius</span>: “forerunner, herald”. <span class="la">aliōs … illum</span>: the others flee; him they only rouse.' },
      { ref: 'Innītēns servolīs duōbus assurrēxit et statim concidit', html: '<span class="la">innītēns</span>: present participle of the deponent <span class="la">innītor</span>, “lean on” (+ dat.), Lecture XXXV. <span class="la">servolīs</span>: diminutive of <span class="la">servus</span>, “two young slaves”, or simply “two slaves” with a touch of familiarity. <span class="la">assurrēxit</span> (= <span class="la">adsurrēxit</span>): perfect of <span class="la">assurgō</span>, “rise up”.' },
      { ref: 'ut ego colligō', html: '“as I infer”: the nephew marks the cause as his conclusion, not as a report.' },
      { ref: 'crassiōre cālīgine spīritū obstrūctō', html: 'Ablative absolute: <span class="la">spīritū obstrūctō</span>, “his breathing having been blocked”, with an ablative of means inside it, <span class="la">crassiōre cālīgine</span>, “by the thicker fumes” (<span class="la">crassior</span>: comparative of <span class="la">crassus</span>, Lecture XXVII).' },
      { ref: 'clausōque stomachō quī illī nātūrā invalidus et angustus et frequenter aestuāns erat', html: 'A second ablative absolute, joined by <span class="la">-que</span>: “and his throat having been closed”. <span class="la">stomachus</span> here probably means the windpipe or gullet. <span class="la">illī</span>: dative of possession, “which for him was …”. <span class="la">nātūrā</span>: ablative of respect, “by nature”. <span class="la">aestuāns</span>: present participle, “burning, inflamed”.' },
      { ref: 'Ubi diēs redditus', html: '<span class="la">est</span> is omitted: “when daylight had been restored”. <span class="la">redditus</span>: perfect participle of <span class="la">reddō</span>.' },
      { ref: 'is ab eō quem novissimē vīderat tertius', html: 'A parenthesis: “that (day) was the third from the one he had last seen”. Romans counted inclusively, so the body was found two days after the death, by our counting. <span class="la">novissimē</span>: superlative adverb, “last”.' },
      { ref: 'corpus inventum integrum illaesum opertumque ut fuerat indūtus', html: '<span class="la">inventum</span> [<span class="la">est</span>]: perfect passive (Lecture XX). Three predicate adjectives: <span class="la">integrum</span> “intact”, <span class="la">illaesum</span> “unharmed” (<span class="la">in-</span> + <span class="la">laesus</span>), <span class="la">opertum</span> “covered” (<span class="la">operiō</span>). <span class="la">ut fuerat indūtus</span>: “as he had been dressed”.' },
      { ref: 'habitus corporis quiēscentī quam dēfūnctō similior', html: '<span class="la">habitus</span>: fourth declension, “appearance, condition”. <span class="la">similior</span>, “more like” (+ dative), comparative of <span class="la">similis</span>. <span class="la">quiēscentī</span>, <span class="la">dēfūnctō</span>: participles used as nouns, “to someone resting than to someone dead”; <span class="la">dēfūnctus</span> is from the deponent <span class="la">dēfungor</span>, “finish (one’s life)”. The letter ends the uncle’s story on an image of calm.' }
    ],
    glosses: {
      'ibi': 'there', 'super': 'on, upon (+ acc.)', 'abiectum': 'acc. n. of abiectus (abiciō): spread out, thrown down', 'linteum': 'linen cloth (acc.)', 'recubāns': 'lying back (pres. part. of recubō)', 'semel': 'once', 'atque': 'and', 'iterum': 'again', 'frīgidam': 'acc. f. of frīgidus: cold', 'aquam': 'acc. of aqua: water', 'poposcit': 'perf. 3rd sg. of poscō: asked for', 'hausitque': 'and drank (perf. of hauriō + -que)',
      'deinde': 'then', 'flammae': 'nom. pl. of flamma: flames', 'flammārumque': 'and of flames (gen. pl. + -que)', 'praenūntius': 'forerunner, herald (nom.)', 'odor': 'smell (nom.)', 'sulpuris': 'gen. of sulpur: sulphur', 'aliōs': 'acc. pl. of alius: the others', 'in': 'into (+ acc.)', 'fugam': 'acc. of fuga: flight', 'vertunt': '3rd pl. of vertō: turn, put', 'excitant': '3rd pl. of excitō: rouse', 'illum': 'acc. of ille: him',
      'innītēns': 'leaning on (pres. part. of innītor, + dat.)', 'servolīs': 'dat. pl. of servolus: (young) slaves', 'duōbus': 'dat. pl. of duo: two', 'assurrēxit': 'perf. 3rd sg. of assurgō: rose up', 'et': 'and', 'statim': 'at once', 'concidit': 'perf. 3rd sg. of concidō: collapsed',
      'ut': 'as', 'ego': 'I', 'colligō': 'I infer, conclude', 'crassiōre': 'abl. of crassior: thicker', 'cālīgine': 'abl. of cālīgō: fumes, thick air', 'spīritū': 'abl. of spīritus: breath, breathing', 'obstrūctō': 'abl. of obstrūctus: blocked',
      'clausōque': 'and closed (abl. of clausus + -que)', 'stomachō': 'abl. of stomachus: throat, windpipe', 'quī': 'which', 'illī': 'dat. of ille: for him', 'nātūrā': 'abl. of nātūra: by nature', 'invalidus': 'weak', 'angustus': 'narrow', 'frequenter': 'often', 'aestuāns': 'burning, inflamed (pres. part. of aestuō)', 'erat': 'was',
      'ubi': 'when', 'diēs': 'day, daylight (nom.)', 'redditus': 'restored (perf. part. of reddō)', 'is': 'that (day)', 'ab': 'from (+ abl.)', 'eō': 'abl. of is: that (day)', 'quem': 'which (acc.)', 'novissimē': 'last', 'vīderat': 'plupf. 3rd sg. of videō: had seen', 'tertius': 'the third',
      'corpus': 'body (nom.)', 'inventum': 'found (perf. part. of inveniō; est understood)', 'integrum': 'nom. n. of integer: intact', 'illaesum': 'nom. n. of illaesus: unharmed', 'opertumque': 'and covered (operiō + -que)', 'fuerat': 'plupf. 3rd sg. of sum: had been', 'indūtus': 'dressed (perf. part. of induō)',
      'habitus': 'appearance (nom.)', 'corporis': 'gen. of corpus: of the body', 'quiēscentī': 'dat. of quiēscēns: (to) someone resting', 'quam': 'than', 'dēfūnctō': 'dat. of dēfūnctus: (to) someone dead', 'similior': 'more like (+ dat.)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What did the elder Pliny ask for while lying on the shore?', options: ['Cold water', 'His ship', 'His nephew', 'Wine'], answer: 0, explain: 'frīgidam aquam poposcit hausitque.' },
      { id: 'r2', type: 'mc', prompt: 'What made the others flee?', options: ['Flames and the smell of sulphur', 'An earthquake', 'The sea', 'Soldiers'], answer: 0, explain: 'flammae flammārumque praenūntius odor sulpuris aliōs in fugam vertunt.' },
      { id: 'r3', type: 'mc', prompt: 'How does the nephew present the cause of death?', options: ['As his own inference', 'As what a doctor said', 'As what his uncle wrote', 'As uncertain and unknowable'], answer: 0, explain: 'ut ego colligō.' },
      { id: 'r4', type: 'mc', prompt: 'When was the body found?', options: ['When daylight returned, on the third day (counted inclusively)', 'The same night', 'A week later', 'Never'], answer: 0, explain: 'Ubi diēs redditus (is ab eō quem novissimē vīderat tertius).' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">Caesare duce, Gallī victī sunt.</span>', options: ['Under Caesar’s command the Gauls were defeated.', 'Caesar the leader was defeated by the Gauls.', 'The Gauls defeated Caesar their leader.', 'The Gauls, led by their own leader, won.'], answer: 0, explain: 'Noun + noun ablative absolute.' },
      { id: 't2', type: 'mc', prompt: 'The noun in an ablative absolute is normally:', options: ['not the subject or object of the main clause', 'the subject of the main clause', 'the object of the main clause', 'a dative'], answer: 0, explain: 'Otherwise an ordinary participle is used.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Hoc nōbīs faciendum est.</span>', options: ['We must do this.', 'This was done by us.', 'We are doing this.', 'This will be done for us.'], answer: 0, explain: 'Passive periphrastic, dative of agent.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Sign___ datō, mīlitēs pugnāvērunt.</span>', hint: 'the signal (abl.)', answers: ['ō', 'o'], full: 'Signō datō, mīlitēs pugnāvērunt.', explain: 'When the signal had been given.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Librī puerīs leg___ sunt.</span>', hint: 'must be read', answers: ['endī', 'endi'], full: 'Librī puerīs legendī sunt.', explain: 'Gerundive, masculine plural for librī.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Nāve parātā, nautae discessērunt.', model: 'When the ship had been made ready, the sailors departed.', accepted: ['when ship had been made ready sailors departed', 'when ship had been prepared sailors departed', 'when ship had been prepared sailors left', 'when ship was ready sailors departed', 'when ship was ready sailors left', 'after ship had been prepared sailors left', 'after ship had been prepared sailors departed', 'having prepared ship sailors departed', 'having prepared ship sailors left', 'ship having been prepared sailors departed', 'ship having been prepared sailors left'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'against my will (abl. abs.)', model: 'mē invītō', accepted: ['mē invītō', 'invītō mē'], explain: 'An ablative absolute with an adjective in place of a participle: “I being unwilling”.' },
      { id: 't8', type: 'mc', prompt: 'Which phrase is an ablative absolute?', options: ['hīs rēbus cognitīs', 'cum amīcō', 'in urbe', 'magnā vōce'], answer: 0, explain: 'Noun + participle, independent.' },
      { id: 't9', type: 'mc', prompt: 'Why are Roman years named <span class="la">Cicerōne cōnsule</span> and so on?', options: ['Years were named after the two consuls', 'Cicero was the only consul', 'It was the year of Cicero’s birth', 'Consuls numbered the years'], answer: 0, explain: 'Dating by consuls.' },
      { id: 't10', type: 'mc', prompt: 'In the reading, <span class="la">spīritū obstrūctō</span> is:', options: ['an ablative absolute: “his breathing having been blocked”', 'an ablative of agent', 'a dative', 'a passive periphrastic'], answer: 0, explain: 'Pliny 6.16.19.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">Carthāgō dēlenda est</span> is:', options: ['a later summary of Cato’s call, not his attested words', 'a line from Caesar', 'an inscription on the Fāstī', 'Cicero’s last words'], answer: 0, explain: 'Plutarch and Pliny the Elder report the idea, not these exact words.' }
    ]
  },

  reference: [
    { title: 'Ablative absolute', headers: ['Type', 'Example', 'Translation'], rows: [
      ['Perfect participle (before)', 'urbe captā', 'when the city had been taken'], ['Present participle (same time)', 'patre dormiente', 'while father was asleep'], ['Noun + noun', 'Cicerōne cōnsule', 'in Cicero’s consulship'], ['Noun + adjective', 'mē invītō', 'against my will']
    ] },
    { title: 'Passive periphrastic', headers: ['Latin', 'Meaning', 'German'], rows: [
      ['epistula scrībenda est', 'the letter must be written', 'der Brief ist zu schreiben'], ['epistula mihi scrībenda est', 'I must write the letter', 'ich muss den Brief schreiben'], ['haec facienda erant', 'these things had to be done', 'das war zu tun'], ['hoc faciendum erit', 'this will have to be done', 'das wird zu tun sein']
    ] },
    { title: 'Gerundive forms', headers: ['Verb', 'Gerundive'], rows: [
      ['amō', 'amandus'], ['moneō', 'monendus'], ['regō', 'regendus'], ['capiō', 'capiendus'], ['audiō', 'audiendus'], ['dēleō', 'dēlendus']
    ] }
  ]
});
