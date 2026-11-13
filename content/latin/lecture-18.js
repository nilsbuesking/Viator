/*
 * Latin — Lecture XVIII: the relative pronoun quī, quae, quod.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotations (Caesar, De bello Gallico 1.1; Virgil, Aeneid 1.1; Cicero, In Catilinam 1.2)
 * checked against the texts supplied by Nils (sources/latin-readings.txt).
 * Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-18',
  number: 18,
  title: 'Quī ipsōrum linguā Celtae',
  subtitle: 'The relative pronoun quī, quae, quod; agreement with the antecedent; quōcum; the connecting relative',
  minutes: 60,

  intro: `
    <p>“The man <em>who</em> came”, “the book <em>which</em> I read”, “the friend <em>whose</em> son I know”: relative clauses are among the commonest structures in any language, and the readings of this course have had to avoid them until now. This lecture introduces the Latin relative pronoun, <span class="la">quī, quae, quod</span>.</p>
    <p>German speakers have a head start. The Latin rule is exactly the German one for <em>der, die, das</em> as relatives: the pronoun takes its <strong>gender and number</strong> from the noun it refers to (the antecedent), and its <strong>case</strong> from its job in its own clause. <em>Der Mann, dem ich helfe</em>: masculine singular because of <em>Mann</em>, dative because of <em>helfen</em>. Latin: <span class="la">vir cui auxilium dō</span>.</p>
    <p>By the end you should be able to decline <span class="la">quī</span>, find the antecedent of any relative, translate relative clauses whose antecedent is left out, and recognise the “connecting relative” that begins a Latin sentence.</p>
  `,

  background: [
    {
      title: 'Caesar’s first chapter',
      html: `
        <p>The opening chapter of the <em>Gallic War</em>, which you have now met three times, is a small catalogue of relative clauses: <span class="la">quārum ūnam incolunt Belgae</span> “of which the Belgae inhabit one”; <span class="la">quī ipsōrum linguā Celtae … appellantur</span> “(those) who are called Celts in their own language”; <span class="la">Germānīs, quī trāns Rhēnum incolunt, quibuscum continenter bellum gerunt</span> “the Germans, who live across the Rhine, with whom they are continually at war”; <span class="la">ea quae ad effēminandōs animōs pertinent</span> “the things that tend to weaken the spirit”; and <span class="la">Quā dē causā</span> “For this reason”.</p>
        <p>This is characteristic of Latin prose. Where English would write a series of short sentences, a Latin author attaches information to the nouns it belongs to, so that one long sentence carries what would otherwise be four. Reading such prose means keeping track of which noun each <span class="la">quī</span> refers to, and that is the skill this lecture practises.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Map_Gallia_Tribes_Towns.png/960px-Map_Gallia_Tribes_Towns.png" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Map_Gallia_Tribes_Towns.png/500px-Map_Gallia_Tribes_Towns.png|https://upload.wikimedia.org/wikipedia/commons/b/ba/Map_Gallia_Tribes_Towns.png" alt="Map of Gaul in the 1st century BC showing the territories of tribes and the main towns"><figcaption>Gaul at the time of Caesar’s conquest, with the Belgae in the north, the Celtae in the centre, the Aquitani in the south-west, and the Roman province (Narbonensis) along the Mediterranean. Modern map; tribal boundaries are approximate. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Map_Gallia_Tribes_Towns.png" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'quī, wer and welcher',
      html: `
        <p>Latin <span class="la">quī</span>, <span class="la">quis</span> “who?” and <span class="la">quod</span> all come from an old stem beginning with <em>kw-</em>, the same that gives German <em>wer, was</em> (Gothic <em>ƕas</em>) and English <em>who, what, which</em>. Latin kept the <em>kw</em>, written <span class="la">qu</span>; Germanic turned it into <em>hw</em>, later <em>w</em>. So the Latin relative is built on a question word, like German <em>welcher</em> and English <em>who</em>.</p>
        <p>The ordinary German relative <em>der, die, das</em> comes from the other source: it is the demonstrative “that one”, the same word as the article. The two German relatives behave in the same way, and the Latin one obeys the same rules, so the instinct a German speaker has for <em>der Mann, den ich sehe</em> can be trusted.</p>
        <p>The most famous Latin relative clause in the modern world may be <span class="la">quod erat dēmōnstrandum</span>, “which was to be shown”, Q.E.D., at the end of a proof. It is a medieval and early modern Latin rendering of the Greek formula with which Euclid closes his proofs.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Euclid's_Elements,_1482.jpg/960px-Euclid's_Elements,_1482.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Euclid's_Elements,_1482.jpg/500px-Euclid's_Elements,_1482.jpg|https://upload.wikimedia.org/wikipedia/commons/d/d4/Euclid's_Elements,_1482.jpg" alt="Printed page of a Latin geometry book with geometric diagrams in the margin"><figcaption>The first printed edition of Euclid’s <em>Elements</em> in Latin (Venice: Erhard Ratdolt, 1482). Through such Latin versions the closing formula of a proof reached European mathematics. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Euclid's_Elements,_1482.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Gallia est omnis dīvīsa in partēs trēs, quārum ūnam incolunt Belgae, aliam Aquītānī, tertiam quī ipsōrum linguā Celtae, nostrā Gallī appellantur.</p>
    <p>Caesar, <em>De bello Gallico</em> 1.1, checked against the copy in the course’s source files; length marks added. Two relatives:</p>
    <ul>
      <li><span class="la">quārum</span>: feminine plural, because it refers to <span class="la">partēs</span>; genitive, because it is a genitive of the whole in its own clause: “of which (parts) the Belgae inhabit one”.</li>
      <li><span class="la">quī</span>: masculine plural, nominative, subject of <span class="la">appellantur</span>. Its antecedent is left out: “(those) who are called Celts”. Supply <span class="la">eī</span>.</li>
    </ul>
    <p>The first line of the <em>Aeneid</em> has one too: <span class="la">Arma virumque canō, Trōiae quī prīmus ab ōrīs …</span>, “Arms I sing and the man <em>who</em> first from the shores of Troy …”: <span class="la">quī</span> is masculine singular for <span class="la">virum</span>, but nominative, because the man is the subject of <span class="la">vēnit</span>. And Cicero ends his attack on Catiline’s plans with <span class="la">pestem, quam tū in nōs … māchināris</span>, “the destruction which you are plotting against us” (<em>In Catilinam</em> 1.2): <span class="la">quam</span> is feminine for <span class="la">pestem</span>, accusative as the object of <span class="la">māchināris</span>.</p>
  `,

  pronunciation: `
    <h3>qu</h3>
    <p><span class="la">qu</span> is one consonant, <em>kw</em> with an English <em>w</em> (German <em>Qual</em> has a <em>v</em>-sound instead): <span class="la">quī</span> is one syllable, <em>kwī</em>; <span class="la">quae</span> is <em>kwai</em>.</p>
    <h3>cuius, cui</h3>
    <p><span class="la">cuius</span> is <em>kuj-jus</em>, like <span class="la">eius</span> and <span class="la">huius</span>, with a heavy first syllable: <span class="la">CU-ius</span>. <span class="la">cui</span> is normally a single syllable, the diphthong <em>ui</em> (roughly <em>kuj</em>), though early poets sometimes split it.</p>
    <h3>quibus, quōrum</h3>
    <p><span class="la">QUI-bus</span> with a short <span class="la">i</span>; <span class="la">QUŌ-rum, QUĀ-rum</span> with long vowels.</p>
  `,

  grammar: [
    {
      title: '1. The forms',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>m.</th><th>f.</th><th>n.</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">quī</td><td class="la">quae</td><td class="la">quod</td></tr>
            <tr><th>Gen.</th><td class="la">cuius</td><td class="la">cuius</td><td class="la">cuius</td></tr>
            <tr><th>Dat.</th><td class="la">cui</td><td class="la">cui</td><td class="la">cui</td></tr>
            <tr><th>Acc.</th><td class="la">quem</td><td class="la">quam</td><td class="la">quod</td></tr>
            <tr><th>Abl.</th><td class="la">quō</td><td class="la">quā</td><td class="la">quō</td></tr>
            <tr><th>Nom. pl.</th><td class="la">quī</td><td class="la">quae</td><td class="la">quae</td></tr>
            <tr><th>Gen.</th><td class="la">quōrum</td><td class="la">quārum</td><td class="la">quōrum</td></tr>
            <tr><th>Dat.</th><td class="la">quibus</td><td class="la">quibus</td><td class="la">quibus</td></tr>
            <tr><th>Acc.</th><td class="la">quōs</td><td class="la">quās</td><td class="la">quae</td></tr>
            <tr><th>Abl.</th><td class="la">quibus</td><td class="la">quibus</td><td class="la">quibus</td></tr>
          </tbody>
        </table></div>
        <p>Much of this is familiar. The genitive and dative singular follow the pattern of <span class="la">eius, eī</span> and <span class="la">huius, huic</span> (<span class="la">cuius, cui</span>). The accusatives and ablatives, and the genitive plural, are those of <span class="la">bonus</span> on a stem <span class="la">qu-</span>. <span class="la">quibus</span> is third-declension in shape. Note the forms that serve twice: <span class="la">quī</span> (nom. sg. and pl. m.), <span class="la">quae</span> (nom. sg. f., nom. pl. f., nom./acc. pl. n.), <span class="la">quod</span> (nom./acc. sg. n.).</p>
      `
    },
    {
      title: '2. The rule of agreement',
      html: `
        <p>A relative pronoun agrees with its <strong>antecedent</strong> in <strong>gender and number</strong>; its <strong>case</strong> depends on its use in its own clause.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Latin</th><th>German</th><th>Why this form?</th></tr></thead>
          <tbody>
            <tr><td class="la">vir quī venit</td><td><em>der Mann, der kommt</em></td><td>m. sg.; nom. (subject of venit)</td></tr>
            <tr><td class="la">vir quem videō</td><td><em>der Mann, den ich sehe</em></td><td>m. sg.; acc. (object of videō)</td></tr>
            <tr><td class="la">vir cuius fīlium videō</td><td><em>der Mann, dessen Sohn ich sehe</em></td><td>m. sg.; gen. (whose)</td></tr>
            <tr><td class="la">vir cui librum dō</td><td><em>der Mann, dem ich ein Buch gebe</em></td><td>m. sg.; dat. (indirect object)</td></tr>
            <tr><td class="la">vir quōcum ambulō</td><td><em>der Mann, mit dem ich gehe</em></td><td>m. sg.; abl. with cum</td></tr>
            <tr><td class="la">fēmina quam videō</td><td><em>die Frau, die ich sehe</em></td><td>f. sg.; acc.</td></tr>
            <tr><td class="la">bellum quod gerunt</td><td><em>der Krieg, den sie führen</em></td><td>n. sg. (bellum is neuter); acc.</td></tr>
          </tbody>
        </table></div>
        <p>The last line shows the one place where German instinct can mislead: the gender is the gender of the <em>Latin</em> antecedent. <span class="la">bellum</span> is neuter, so <span class="la">quod</span>, though German <em>Krieg</em> is masculine.</p>
        <p>The method for reading: find the relative, find its antecedent (usually the noun just before it with the same gender and number), then work out the relative’s case from its own clause.</p>
      `
    },
    {
      title: '3. cum with the relative',
      html: `
        <p>As with the personal pronouns (<span class="la">mēcum</span>), <span class="la">cum</span> is usually attached to the end: <span class="la">quōcum, quācum, quibuscum</span>, “with whom”. Caesar: <span class="la">Germānīs … quibuscum continenter bellum gerunt</span>, “the Germans, with whom they are continually at war”. The form <span class="la">cum quō</span> also occurs. Other prepositions stand in front as usual: <span class="la">urbs in quā habitāmus</span>.</p>
      `
    },
    {
      title: '4. Omitted antecedents',
      html: `
        <p>When the antecedent is a pronoun like <span class="la">is</span>, it is often left out, and the relative clause stands for a noun. English supplies “he who”, “those who”, “what”:</p>
        <ul>
          <li><span class="la">Quī nōn labōrat, nōn cēnat.</span> (He) who does not work does not dine.</li>
          <li><span class="la">Quod dīcis, vērum est.</span> What you say is true.</li>
          <li><span class="la">tertiam (partem incolunt eī) quī … Celtae appellantur.</span> (Caesar.)</li>
        </ul>
        <p>When the antecedent is expressed, it is often <span class="la">is, ea, id</span>: <span class="la">ea quae ad effēminandōs animōs pertinent</span>, “the things which …”. German is similar: <em>Wer nicht arbeitet</em>, <em>das, was du sagst</em>.</p>
      `
    },
    {
      title: '5. The connecting relative',
      html: `
        <p>A relative at the beginning of a sentence often refers back to the whole of the previous sentence, or to a noun in it. Translate it with a demonstrative, “this, that, he”, often with “and” or “now”:</p>
        <ul>
          <li><span class="la">Quā dē causā</span> (= <span class="la">dē eā causā</span>): for this reason. (Caesar, BG 1.1.)</li>
          <li><span class="la">Quod ubi vīdit, …</span>: When he saw this, …</li>
          <li><span class="la">Quibus rēbus cognitīs …</span>: when these things had been learnt … (Lecture XXV).</li>
        </ul>
        <p>German uses a similar device with <em>worauf, weshalb, womit</em>: <em>…, weshalb er ging.</em></p>
      `
    },
    {
      title: '6. Relative quod and conjunction quod',
      html: `
        <p>Do not confuse the relative <span class="la">quod</span> (“which”) with the conjunction <span class="la">quod</span> (“because”), which you will meet constantly: Caesar explains the bravery of the Belgae <span class="la">proptereā quod … longissimē absunt</span>, “because they are furthest away …”. If <span class="la">quod</span> has no neuter antecedent and its clause is complete without it, it is the conjunction. German has the same pair in <em>das</em> and <em>dass</em>, distinguished only in spelling.</p>
      `
    }
  ],

  vocab: [
    { id: 'qui', head: 'quī, quae, quod', la: 'quī, quae, quod', pos: 'relative pronoun', en: 'who, which, that', stress: 'QUĪ · QUAE · QUOD', note: 'Gen. cuius, dat. cui. Gender and number from the antecedent, case from its own clause.' },
    { id: 'quod-conj', head: 'quod (conj.)', la: 'quod', pos: 'conjunction', en: 'because', stress: 'QUOD', note: 'Also proptereā quod: “because of the fact that”.' },
    { id: 'propter', head: 'propter', la: 'propter (+ acc.)', pos: 'preposition', en: 'on account of, because of', stress: 'PROP-ter', note: 'proptereā: for that reason.' },
    { id: 'trans', head: 'trāns', la: 'trāns (+ acc.)', pos: 'preposition', en: 'across, over', stress: 'TRĀNS', deriv: 'transport, Transalpine' },
    { id: 'causa', head: 'causa', la: 'causa, causae', g: 'f', pos: 'noun, 1st decl.', en: 'cause, reason; (law) case', stress: 'CAU-sa', deriv: 'cause; French chose, Italian cosa', note: 'Quā dē causā: for this reason.' },
    { id: 'finis', head: 'fīnis', la: 'fīnis, fīnis', g: 'm', pos: 'noun, 3rd decl. (i-stem)', en: 'end, boundary; pl. territory', stress: 'FĪ-nis', deriv: 'final, finish, define', note: 'Plural fīnēs: “the boundaries”, hence “territory”.' },
    { id: 'gens', head: 'gēns', la: 'gēns, gentis', g: 'f', pos: 'noun, 3rd decl. (i-stem)', en: 'clan, family; people, nation', stress: 'GĒNS · GEN-tis', deriv: 'gentle, gentile' },
    { id: 'gallus', head: 'Gallus', la: 'Gallus, Gallī', g: 'm', pos: 'noun, 2nd decl.', en: 'a Gaul; pl. the Gauls', stress: 'GAL-lus', note: 'Adjective Gallicus, -a, -um: Gallic.' },
    { id: 'appello', head: 'appellō', la: 'appellō, appellāre, appellāvī, appellātum', pos: 'verb, 1st conj.', en: 'call, name; address', stress: 'ap-PEL-lō · ap-pel-LĀ-re', deriv: 'appellation, appeal', note: 'Caesar: Celtae … appellantur, “are called Celts” (passive, Lecture XIX).' },
    { id: 'incolo', head: 'incolō', la: 'incolō, incolere, incoluī', pos: 'verb, 3rd conj.', en: 'inhabit; live', stress: 'IN-co-lō · in-CO-le-re', note: 'in + colō, “cultivate, dwell”. Caesar: quārum ūnam incolunt Belgae.' },
    { id: 'divido', head: 'dīvidō', la: 'dīvidō, dīvidere, dīvīsī, dīvīsum', pos: 'verb, 3rd conj.', en: 'divide, separate', stress: 'DĪ-vi-dō · dī-VI-de-re', deriv: 'divide, division', note: 'Gallia est … dīvīsa: perfect passive participle.' },
    { id: 'condo', head: 'condō', la: 'condō, condere, condidī, conditum', pos: 'verb, 3rd conj.', en: 'found, establish; store, bury', stress: 'CON-dō · CON-de-re', note: 'ab urbe conditā: from the foundation of the City (Rome).' },
    { id: 'taceo', head: 'taceō', la: 'taceō, tacēre, tacuī, tacitum', pos: 'verb, 2nd conj.', en: 'be silent; say nothing about', stress: 'TA-ce-ō · ta-CĒ-re', deriv: 'tacit, taciturn; Tacitus' },
    { id: 'dicto', head: 'dictō', la: 'dictō, dictāre, dictāvī, dictātum', pos: 'verb, 1st conj.', en: 'say repeatedly; dictate', stress: 'DIC-tō · dic-TĀ-re', deriv: 'dictate, dictator; Diktat', note: 'Frequentative of dīcō.' }
  ],

  grammarCards: [
    { id: 'g18-sg', front: 'quī, quae, quod: singular', back: 'quī quae quod; cuius; cui; quem quam quod; quō quā quō' },
    { id: 'g18-pl', front: 'quī, quae, quod: plural', back: 'quī quae quae; quōrum quārum quōrum; quibus; quōs quās quae; quibus' },
    { id: 'g18-rule', front: 'Rule for the relative pronoun', back: 'Gender and number from the antecedent; case from its function in its own clause.' },
    { id: 'g18-german', front: 'vir quem videō', back: 'der Mann, den ich sehe: the same rule as German der/die/das' },
    { id: 'g18-bellum', front: 'bellum, quod gerunt (not *quem)', back: 'Latin gender counts: bellum is neuter, though German Krieg is masculine.' },
    { id: 'g18-cuius', front: 'vir cuius fīlium videō', back: 'the man whose son I see' },
    { id: 'g18-cum', front: 'with whom (sg. m., sg. f., pl.)', back: 'quōcum, quācum, quibuscum' },
    { id: 'g18-omit', front: 'Quī nōn labōrat, nōn cēnat.', back: '(He) who does not work does not dine: antecedent omitted.' },
    { id: 'g18-quod', front: 'Quod dīcis, vērum est.', back: 'What you say is true.' },
    { id: 'g18-connect', front: 'Quā dē causā …', back: 'For this reason … (connecting relative = dē eā causā)' },
    { id: 'g18-conj', front: 'quod relative vs quod conjunction', back: 'which vs because (like German das vs dass)' },
    { id: 'g18-qu', front: 'Pronunciation of cuius and cui', back: 'kuj-jus (two syllables, first heavy); cui normally one syllable' },
    { id: 'g18-caesar', front: 'quārum ūnam incolunt Belgae', back: 'of which (parts) the Belgae inhabit one (BG 1.1)' },
    { id: 'g18-celtae', front: 'tertiam quī ipsōrum linguā Celtae, nostrā Gallī appellantur', back: 'the third (part) those who are called Celts in their own language, Gauls in ours (BG 1.1)' },
    { id: 'g18-aeneid', front: 'virum … Trōiae quī prīmus ab ōrīs', back: 'the man who first from the shores of Troy … (Aeneid 1.1): quī nom. for the subject' },
    { id: 'g18-qed', front: 'Q.E.D.', back: 'quod erat dēmōnstrandum: which was to be shown (Latin for Euclid’s Greek formula)' },
    { id: 'g18-wer', front: 'quis / wer / who', back: 'Related: Latin qu- = Germanic hw- (wer, was).' },
    { id: 'g18-quibuscum', front: 'Germānīs … quibuscum continenter bellum gerunt', back: 'the Germans, with whom they are continually at war (BG 1.1)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'In <span class="la">puella quam videō</span>, <span class="la">quam</span> is:', options: ['accusative singular feminine', 'nominative singular feminine', 'ablative singular feminine', 'accusative plural'], answer: 0, explain: 'Feminine for puella; accusative as the object of videō.' },
    { id: 'e2', type: 'mc', prompt: 'A relative pronoun takes its case from:', options: ['its function in its own clause', 'its antecedent', 'the main verb', 'the nearest preposition outside its clause'], answer: 0, explain: 'Gender and number from the antecedent, case from its own clause.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">virī quōrum fīliōs vīdī</span>: <span class="la">quōrum</span> means:', options: ['whose (pl.)', 'whom (pl.)', 'who (pl.)', 'with whom'], answer: 0, explain: 'Genitive plural: the men whose sons I saw.' },
    { id: 'e4', type: 'mc', prompt: 'Dative singular of <span class="la">quī</span>:', options: ['cui', 'cuius', 'quō', 'quibus'], answer: 0, explain: 'All genders: cui.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">quibuscum</span>:', options: ['with whom (pl.)', 'to whom (pl.)', 'whose (pl.)', 'with which (sg.)'], answer: 0, explain: 'quibus + cum.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Quā dē causā</span> at the start of a sentence:', options: ['For this reason', 'For what reason?', 'About which case', 'Because of whom'], answer: 0, explain: 'A connecting relative: = dē eā causā.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Puer qu___ vidēs meus fīlius est.</span>', hint: 'whom', answers: ['em'], full: 'Puer quem vidēs meus fīlius est.', explain: 'Masculine singular accusative.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Fēmina cu___ librum habeō abest.</span>', hint: 'whose', answers: ['ius'], full: 'Fēmina cuius librum habeō abest.', explain: 'Genitive singular: cuius.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Librī qu___ lēgī erant novī.</span>', hint: 'which (object)', answers: ['ōs', 'os'], full: 'Librī quōs lēgī erant novī.', explain: 'Masculine plural (librī) accusative.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Urbs in qu___ habitāmus est parva.</span>', hint: 'which (after in)', answers: ['ā', 'a'], full: 'Urbs in quā habitāmus est parva.', explain: 'Feminine (urbs) ablative after in.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Amīcus cu___ librum dedī laetus est.</span>', hint: 'to whom', answers: ['i'], full: 'Amīcus cui librum dedī laetus est.', explain: 'Dative singular.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Verba qu___ dīxistī vēra sunt.</span>', hint: 'which (object)', answers: ['ae'], full: 'Verba quae dīxistī vēra sunt.', explain: 'Neuter plural (verba) accusative: quae.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">quī, quae, quod</span> in the singular.', headers: ['m.', 'f.', 'n.'], rows: [
      { label: 'Nom.', answers: ['quī', 'quae', 'quod'] },
      { label: 'Gen.', answers: ['cuius', 'cuius', 'cuius'] },
      { label: 'Dat.', answers: ['cui', 'cui', 'cui'] },
      { label: 'Acc.', answers: ['quem', 'quam', 'quod'] },
      { label: 'Abl.', answers: ['quō', 'quā', 'quō'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">quī, quae, quod</span> in the plural.', headers: ['m.', 'f.', 'n.'], rows: [
      { label: 'Nom.', answers: ['quī', 'quae', 'quae'] },
      { label: 'Gen.', answers: ['quōrum', 'quārum', 'quōrum'] },
      { label: 'Dat.', answers: ['quibus|quīs', 'quibus|quīs', 'quibus|quīs'] },
      { label: 'Acc.', answers: ['quōs', 'quās', 'quae'] },
      { label: 'Abl.', answers: ['quibus|quīs', 'quibus|quīs', 'quibus|quīs'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each form to its use.', pairs: [
      ['quem', 'whom (m. sg.)'], ['quam', 'whom, which (f. sg.)'], ['quod', 'which (n. sg.)'], ['cuius', 'whose (sg.)'], ['quibus', 'to or by whom (pl.)']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Liber quem legō est novus.', tokens: ['The book', 'which I am reading', 'is', 'new'], explain: 'quem: masculine for liber, accusative as the object of legō.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Puella quam amō est pulchra.', model: 'The girl whom I love is beautiful.', accepted: ['girl whom i love is beautiful', 'girl who i love is beautiful', 'girl that i love is beautiful', 'girl i love is beautiful', 'girl whom i love is pretty', 'girl who i love is pretty', 'girl that i love is pretty', 'girl i love is pretty'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Vir cuius fīlium vīdistī est cōnsul.', model: 'The man whose son you saw is consul.', accepted: ['man whose son you saw is consul', 'man whose son you have seen is consul'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Amīcī quibuscum ambulābam laetī erant.', model: 'The friends with whom I was walking were happy.', accepted: ['friends with whom i was walking were happy', 'friends whom i was walking with were happy', 'friends i was walking with were happy', 'friends that i was walking with were happy', 'friends who i was walking with were happy', 'friends with whom i walked were happy', 'friends i walked with were happy', 'friends with whom i was walking were glad', 'friends i was walking with were glad'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'the book which I am reading', model: 'liber quem legō', accepted: ['liber quem legō'], explain: 'The relative takes gender and number from its antecedent (liber: masculine singular) and its case from its own clause: the object of legō, so quem.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'the woman whom I see', model: 'fēmina quam videō', accepted: ['fēmina quam videō'], explain: 'Feminine singular for fēmina; accusative because it is the object of videō.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'the city in which we live', model: 'urbs in quā habitāmus', accepted: ['urbs in quā habitāmus'], explain: 'Urbs is feminine, and in + ablative gives in quā, exactly as German die Stadt, in der wir wohnen.' },
    { id: 'e23', type: 'mc', prompt: 'In Caesar’s <span class="la">tertiam quī ipsōrum linguā Celtae … appellantur</span>, the antecedent of <span class="la">quī</span> is:', options: ['left out: “(those) who”', 'partēs', 'Belgae', 'linguā'], answer: 0, explain: 'Supply eī: those who are called Celts.' },
    { id: 'e24', type: 'mc', prompt: 'In Caesar’s <span class="la">proptereā quod … longissimē absunt</span>, <span class="la">quod</span> is:', options: ['the conjunction “because”', 'the relative “which”', 'an interrogative “what?”', 'a numeral'], answer: 0, explain: 'proptereā quod: because.' },
    { id: 'e25', type: 'mc', prompt: '<span class="la">quod erat dēmōnstrandum</span> renders a formula from:', options: ['Euclid’s Greek proofs', 'Caesar’s Commentaries', 'Roman law', 'the Vulgate'], answer: 0, explain: 'Hence Q.E.D.' }
  ],

  reading: {
    title: 'Liber Caesaris',
    note: 'Original passage: Quintus reads Caesar with Lucius. Tap any word.',
    text: 'Vesperī Quīntus librum lēgit quem Lūcius eī dederat. Liber erat Caesaris, quī bellum in Galliā gesserat. Quīntus Lūcium interrogāvit: “Quī sunt Belgae, dē quibus Caesar scrībit?” Lūcius respondit: “Belgae sunt gēns quae prope Rhēnum flūmen habitat. Trāns Rhēnum Germānī habitant, cum quibus Belgae saepe pugnant.” “Et quī sunt Celtae?” rogāvit Gāius. “Eī quōs nōs Gallōs appellāmus,” respondit Lūcius. “In lītore Galliae est urbs Massilia, quam Graecī ōlim condidērunt. Ibi amīcum habeō cuius pater Graecus, māter Gallica erat. Is trēs linguās scit, quās ā parentibus didicit: Graecam, Latīnam, Gallicam.” Quīntus suspīrāvit: “Ego ūnam linguam discō, quae satis difficilis est!” Omnēs rīsērunt. Tum Mārcus, quī diū tacuerat, dīxit: “Caesar erat dux quem multī timēbant et multī amābant; sed verba quae scrīpsit nunc etiam puerī legunt.” Quā dē causā Quīntus librum Caesaris cotīdiē legēbat.',
    translation: 'In the evening Quintus read the book which Lucius had given him. It was a book of Caesar’s, who had waged war in Gaul. Quintus asked Lucius: “Who are the Belgae, about whom Caesar writes?” Lucius answered: “The Belgae are a people who live near the river Rhine. Across the Rhine live the Germans, with whom the Belgae often fight.” “And who are the Celts?” asked Gaius. “Those whom we call Gauls,” answered Lucius. “On the coast of Gaul there is a city, Massilia, which the Greeks founded long ago. There I have a friend whose father was Greek and whose mother was Gallic. He knows three languages, which he learnt from his parents: Greek, Latin, Gallic.” Quintus sighed: “I am learning one language, which is difficult enough!” Everyone laughed. Then Marcus, who had been silent for a long time, said: “Caesar was a general whom many feared and many loved; but the words which he wrote are read now even by boys.” For this reason Quintus read Caesar’s book every day.',
    notes: [
      { ref: 'librum lēgit quem Lūcius eī dederat', html: '<span class="la">quem</span>: masculine singular for <span class="la">librum</span>; accusative as the object of <span class="la">dederat</span>. The relative clause is separated from its antecedent by the verb <span class="la">lēgit</span>, which is common in Latin.' },
      { ref: 'Liber erat Caesaris, quī bellum in Galliā gesserat', html: '<span class="la">quī</span> refers to <span class="la">Caesaris</span>, not to <span class="la">liber</span>: the sense decides, since both are masculine singular. <span class="la">gesserat</span>: pluperfect of <span class="la">gerō</span>.' },
      { ref: 'Quī sunt Belgae', html: 'Here <span class="la">quī</span> is not relative but interrogative, “who are …?”. The interrogative adjective has the same forms as the relative (Lecture XX).' },
      { ref: 'dē quibus Caesar scrībit', html: '<span class="la">quibus</span>: plural for <span class="la">Belgae</span>, ablative after <span class="la">dē</span>.' },
      { ref: 'Belgae sunt gēns quae prope Rhēnum flūmen habitat', html: '<span class="la">quae</span>: feminine singular for <span class="la">gēns</span>, not plural for <span class="la">Belgae</span>; so <span class="la">habitat</span> is singular. English might say “a people who live”; Latin follows the grammatical antecedent.' },
      { ref: 'cum quibus Belgae saepe pugnant', html: 'Caesar writes <span class="la">quibuscum</span>; <span class="la">cum quibus</span> is the other possible order.' },
      { ref: 'Eī quōs nōs Gallōs appellāmus', html: '<span class="la">eī … quōs</span>: “those whom”. <span class="la">appellāre</span> with two accusatives: “to call someone something”.' },
      { ref: 'urbs Massilia, quam Graecī ōlim condidērunt', html: 'Massilia, modern Marseille, was founded around 600 BC by Greek settlers from Phocaea in Asia Minor. <span class="la">quam</span>: feminine for <span class="la">urbs</span>.' },
      { ref: 'amīcum habeō cuius pater Graecus, māter Gallica erat', html: '<span class="la">cuius</span>: “whose”, serving both <span class="la">pater</span> and <span class="la">māter</span>; <span class="la">erat</span> is understood with the first.' },
      { ref: 'quās ā parentibus didicit', html: '<span class="la">quās</span>: feminine plural for <span class="la">linguās</span>. <span class="la">didicit</span>: reduplicated perfect of <span class="la">discō</span>.' },
      { ref: 'ūnam linguam discō, quae satis difficilis est', html: '<span class="la">quae</span>: feminine singular for <span class="la">linguam</span>, but nominative, the subject of <span class="la">est</span>.' },
      { ref: 'Mārcus, quī diū tacuerat', html: 'A relative clause inside the main clause, between subject and verb.' },
      { ref: 'verba quae scrīpsit nunc etiam puerī legunt', html: '<span class="la">quae</span>: neuter plural for <span class="la">verba</span>, accusative. The whole phrase <span class="la">verba quae scrīpsit</span> is the object of <span class="la">legunt</span>.' },
      { ref: 'Quā dē causā', html: 'The connecting relative, as at the end of Caesar’s first chapter: “For this reason”.' }
    ],
    glosses: {
      'vesperī': 'in the evening', 'quīntus': 'Quintus (nom.)', 'librum': 'acc. of liber: book', 'lēgit': 'perf. 3rd sg. of legō: read', 'quem': 'acc. sg. m. of quī: which, whom', 'lūcius': 'Lucius (nom.)', 'eī': 'dat. sg. of is: to him; nom. pl.: those', 'dederat': 'plupf. 3rd sg. of dō: had given',
      'liber': 'book (nom.)', 'erat': 'was', 'caesaris': 'gen. of Caesar: Caesar’s', 'quī': 'who (rel.); who? (interrog.)', 'bellum': 'war (acc.)', 'in': 'in (+ abl.)', 'galliā': 'abl. of Gallia: Gaul', 'gesserat': 'plupf. 3rd sg. of gerō: had waged',
      'lūcium': 'acc. of Lūcius', 'interrogāvit': 'perf. 3rd sg. of interrogō: asked', 'sunt': 'are', 'belgae': 'the Belgae (nom.)', 'dē': 'about (+ abl.)', 'quibus': 'abl. pl. of quī: whom, which', 'caesar': 'Caesar (nom.)', 'scrībit': '3rd sg. of scrībō: writes',
      'respondit': 'perf. 3rd sg. of respondeō: answered', 'gēns': 'people, nation (nom.)', 'quae': 'nom. sg. f. / acc. pl. n. of quī: who, which', 'prope': 'near (+ acc.)', 'rhēnum': 'acc. of Rhēnus: the Rhine', 'flūmen': 'river (acc.)', 'habitat': '3rd sg. of habitō: lives',
      'trāns': 'across (+ acc.)', 'germānī': 'nom. pl. of Germānus: the Germans', 'habitant': '3rd pl. of habitō: live', 'cum': 'with (+ abl.)', 'saepe': 'often', 'pugnant': '3rd pl. of pugnō: fight',
      'et': 'and', 'celtae': 'the Celts (nom.)', 'rogāvit': 'perf. 3rd sg. of rogō: asked', 'gāius': 'Gaius (nom.)', 'quōs': 'acc. pl. m. of quī: whom', 'nōs': 'we', 'gallōs': 'acc. pl. of Gallus: Gauls', 'appellāmus': '1st pl. of appellō: we call',
      'lītore': 'abl. of lītus: shore, coast', 'galliae': 'gen. of Gallia: of Gaul', 'est': 'is', 'urbs': 'city (nom.)', 'massilia': 'Massilia (Marseille)', 'quam': 'acc. sg. f. of quī: which', 'graecī': 'nom. pl. of Graecus: the Greeks', 'ōlim': 'once, long ago', 'condidērunt': 'perf. 3rd pl. of condō: founded',
      'ibi': 'there', 'amīcum': 'acc. of amīcus: friend', 'habeō': 'I have', 'cuius': 'gen. sg. of quī: whose', 'pater': 'father (nom.)', 'graecus': 'Greek (nom. m.)', 'māter': 'mother (nom.)', 'gallica': 'Gallic (nom. f.)',
      'is': 'he', 'trēs': 'three', 'linguās': 'acc. pl. of lingua: languages', 'scit': '3rd sg. of sciō: knows', 'quās': 'acc. pl. f. of quī: which', 'ā': 'from (+ abl.)', 'parentibus': 'abl. pl. of parēns: parents', 'didicit': 'perf. 3rd sg. of discō: learnt', 'graecam': 'Greek (acc. f.)', 'latīnam': 'Latin (acc. f.)', 'gallicam': 'Gallic (acc. f.)',
      'suspīrāvit': 'perf. 3rd sg. of suspīrō: sighed', 'ego': 'I', 'ūnam': 'acc. f. of ūnus: one', 'linguam': 'acc. of lingua: language', 'discō': 'I am learning', 'satis': 'enough, rather', 'difficilis': 'difficult (nom.)',
      'omnēs': 'everyone', 'rīsērunt': 'perf. 3rd pl. of rīdeō: laughed', 'tum': 'then', 'mārcus': 'Marcus (nom.)', 'diū': 'for a long time', 'tacuerat': 'plupf. 3rd sg. of taceō: had been silent', 'dīxit': 'perf. 3rd sg. of dīcō: said',
      'dux': 'leader, general (nom.)', 'multī': 'many (people)', 'timēbant': 'impf. 3rd pl. of timeō: feared', 'amābant': 'impf. 3rd pl. of amō: loved', 'sed': 'but', 'verba': 'acc. pl. of verbum: words', 'scrīpsit': 'perf. 3rd sg. of scrībō: wrote', 'nunc': 'now', 'etiam': 'even, also', 'puerī': 'nom. pl. of puer: boys', 'legunt': '3rd pl. of legō: read',
      'quā': 'abl. sg. f. of quī: which, this', 'causā': 'abl. of causa: reason', 'cotīdiē': 'every day', 'legēbat': 'impf. 3rd sg. of legō: used to read'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Whose book was Quintus reading?', options: ['Caesar’s, given to him by Lucius', 'Lucius’s own letters', 'A Greek philosopher’s', 'His father’s accounts'], answer: 0, explain: 'librum … quem Lūcius eī dederat. Liber erat Caesaris.' },
      { id: 'r2', type: 'mc', prompt: 'With whom do the Belgae often fight, according to Lucius?', options: ['The Germans across the Rhine', 'The Greeks', 'The Romans', 'The Celts'], answer: 0, explain: 'Trāns Rhēnum Germānī habitant, cum quibus Belgae saepe pugnant.' },
      { id: 'r3', type: 'mc', prompt: 'Why does Lucius’s friend in Massilia know three languages?', options: ['He learnt them from his Greek father and Gallic mother', 'He studied in Rome', 'He was a soldier', 'He travelled with Caesar'], answer: 0, explain: 'quās ā parentibus didicit.' },
      { id: 'r4', type: 'mc', prompt: 'What did Quintus do in the end?', options: ['He read Caesar’s book every day', 'He went to Massilia', 'He gave the book back', 'He learnt Gallic'], answer: 0, explain: 'Quā dē causā Quīntus librum Caesaris cotīdiē legēbat.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">bellum quod gerunt</span>: why <span class="la">quod</span>?', options: ['bellum is neuter singular and the object of gerunt', 'quod always follows bellum', 'it is the conjunction “because”', 'gerunt takes the ablative'], answer: 0, explain: 'Gender and number from bellum, case from gerunt.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">quōcum</span>:', options: ['with whom (sg.)', 'to whom (sg.)', 'whose', 'with which (pl.)'], answer: 0, explain: 'quō + cum.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Quod dīcis, vērum est.</span>', options: ['What you say is true.', 'Because you speak, it is true.', 'Which do you say is true?', 'You say that it is true.'], answer: 0, explain: 'Omitted antecedent: (id) quod.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Mīlitēs qu___ cōnsul laudāvit fortēs erant.</span>', hint: 'whom', answers: ['ōs', 'os'], full: 'Mīlitēs quōs cōnsul laudāvit fortēs erant.', explain: 'Masculine plural accusative.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Fēminae qu___ librōs dedī laetae sunt.</span>', hint: 'to whom', answers: ['ibus'], full: 'Fēminae quibus librōs dedī laetae sunt.', explain: 'Dative plural.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Puer quī venit est frāter meus.', model: 'The boy who is coming is my brother.', accepted: ['boy who is coming is my brother', 'boy who comes is my brother', 'boy that is coming is my brother', 'boy that comes is my brother'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'the girl whose book I have', model: 'puella cuius librum habeō', accepted: ['puella cuius librum habeō'], explain: 'Cuius “whose” serves for every gender, where German distinguishes dessen and deren; librum is the object of habeō.' },
      { id: 't8', type: 'mc', prompt: 'Which form can be nominative singular feminine OR nominative/accusative plural neuter?', options: ['quae', 'quod', 'quī', 'quam'], answer: 0, explain: 'quae serves three times.' },
      { id: 't9', type: 'mc', prompt: 'In <span class="la">Arma virumque canō, Trōiae quī prīmus ab ōrīs …</span>, <span class="la">quī</span> refers to:', options: ['virum', 'arma', 'Trōiae', 'the poet'], answer: 0, explain: 'The man who first came from Troy.' },
      { id: 't10', type: 'mc', prompt: 'Latin <span class="la">qu-</span> corresponds to Germanic:', options: ['hw-, w- (wer, was)', 'k- (kann)', 'qu- (Qual)', 'd- (der)'], answer: 0, explain: 'quis ~ wer.' },
      { id: 't11', type: 'mc', prompt: 'German <em>das</em> and <em>dass</em> correspond to Latin:', options: ['relative quod and conjunction quod', 'quī and quae', 'cuius and cui', 'quis and quid'], answer: 0, explain: 'One spelling in Latin for both.' }
    ]
  },

  reference: [
    { title: 'quī, quae, quod', headers: ['', 'm.', 'f.', 'n.'], rows: [
      ['Nom. sg.', 'quī', 'quae', 'quod'], ['Gen.', 'cuius', 'cuius', 'cuius'], ['Dat.', 'cui', 'cui', 'cui'], ['Acc.', 'quem', 'quam', 'quod'], ['Abl.', 'quō', 'quā', 'quō'],
      ['Nom. pl.', 'quī', 'quae', 'quae'], ['Gen.', 'quōrum', 'quārum', 'quōrum'], ['Dat.', 'quibus', 'quibus', 'quibus'], ['Acc.', 'quōs', 'quās', 'quae'], ['Abl.', 'quibus', 'quibus', 'quibus']
    ] },
    { title: 'Reading a relative clause', headers: ['Step', 'Question'], rows: [
      ['1', 'Where does the relative clause begin and end?'], ['2', 'Which noun is the antecedent (same gender and number)?'], ['3', 'What case is the relative, and why, in its own clause?'], ['4', 'Is the antecedent left out (he who, what)? Is it a connecting relative?']
    ] }
  ]
});
