/*
 * Latin — Lecture XXVI: the infinitives (present, perfect, future; active and passive);
 * indirect statement (accusative and infinitive).
 * Authentic reading: Pliny, Letters 6.16.4–5.
 * Content file only. Source texts (Pliny, Letters 6.16; Cicero, In Catilinam 1.1; Caesar,
 * De bello Gallico 1.1) checked against the texts supplied by Nils; length marks editorial.
 * Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-26',
  number: 26,
  title: 'Appārēre nūbem',
  subtitle: 'The six infinitives; indirect statement (accusative and infinitive); sē in indirect statement; authentic reading: Pliny 6.16.4–5',
  minutes: 70,

  intro: `
    <p>When English reports what someone said or thought, it uses a “that” clause: “He says that the boy is coming.” German uses a <em>dass</em>-clause or, in careful prose, the Konjunktiv I: <em>Er sagt, der Junge komme.</em> Latin does neither. It puts the subject of the reported statement in the <strong>accusative</strong> and its verb in the <strong>infinitive</strong>: <span class="la">Dīcit puerum venīre</span>, literally “He says the boy to be coming”. This is <strong>indirect statement</strong>, the accusative and infinitive, and it is one of the most frequent constructions in Latin prose.</p>
    <p>To use it, you need infinitives for all three times: present (<span class="la">venīre</span>), perfect (<span class="la">vēnisse</span>) and future (<span class="la">ventūrus esse</span>), in the active and the passive. This lecture introduces the full set of six.</p>
    <p>The reading is again authentic Pliny: the opening of the eruption story, in which his mother points out to his uncle <span class="la">appārēre nūbem</span>, “that a cloud is appearing”.</p>
  `,

  background: [
    {
      title: 'Ich sehe ihn kommen',
      html: `
        <p>German has the accusative and infinitive too, but only after a few verbs of perceiving and causing: <em>Ich sehe ihn kommen</em>, <em>Ich höre sie singen</em>, <em>Er lässt den Arzt rufen</em>. Here <em>ihn</em> is the accusative subject of <em>kommen</em>, exactly as in Latin <span class="la">videō eum venīre</span>. English has it after “see”, “hear”, “make”, and in formal style after “believe” and “know” (“I believe him to be honest”), a usage partly modelled on Latin.</p>
        <p>Latin extends the construction to every verb of saying, thinking, knowing and perceiving. A German speaker reading <span class="la">Putō eum venīre</span> should therefore think <em>Ich sehe ihn kommen</em> rather than <em>Ich glaube, dass er kommt</em>, and then translate into a <em>dass</em>-clause.</p>
        <p>Where German marks reported speech with the Konjunktiv I (<em>Er sagte, er sei krank</em>), Latin marks it with the accusative and infinitive in the main statement and the subjunctive in subordinate clauses within it (Lecture XXXI). Both languages, unlike English, show grammatically that something is reported rather than asserted.</p>
      `
    },
    {
      title: 'Pliny at Misenum',
      html: `
        <p>The elder Pliny was <span class="la">praefectus classis Mīsēnēnsis</span>, commander of the Roman fleet stationed at Misenum, the cape at the north-western end of the Bay of Naples. The appointment, held by an equestrian, not a senator, came to him late in a long career of military and administrative posts, during which he also wrote the thirty-seven books of the <em>Natural History</em>. His nephew describes his working habits in another letter (3.5): he slept little, had books read to him at meals and in the bath, and dictated notes while travelling.</p>
        <p>The scene of the reading fits that portrait: on the afternoon of the eruption he has been sunbathing, has taken a cold bath, has eaten lying down and is studying, when his sister draws his attention to the cloud.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Capo_Miseno.jpg/960px-Capo_Miseno.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Capo_Miseno.jpg/500px-Capo_Miseno.jpg|https://upload.wikimedia.org/wikipedia/commons/1/18/Capo_Miseno.jpg" alt="Rocky headland jutting into the sea"><figcaption>Capo Miseno, the cape that sheltered the harbour of the Roman fleet at Misenum. From here the elder Pliny saw the cloud rising across the bay. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Capo_Miseno.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'A cloud like a pine',
      html: `
        <p>Pliny compares the shape of the cloud to a pine, meaning the Italian stone pine (<em>Pinus pinea</em>) with its tall bare trunk and spreading crown. The comparison was apt enough that volcanologists now call this kind of eruption, with a high column of gas and ash spreading out at the top, “Plinian”. The nephew’s account is thus one of the few ancient literary texts that gave its name to a scientific term.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Umbrella_pine_on_Palatine_Hill_in_Rome.jpg/960px-Umbrella_pine_on_Palatine_Hill_in_Rome.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Umbrella_pine_on_Palatine_Hill_in_Rome.jpg/500px-Umbrella_pine_on_Palatine_Hill_in_Rome.jpg|https://upload.wikimedia.org/wikipedia/commons/0/00/Umbrella_pine_on_Palatine_Hill_in_Rome.jpg" alt="Tall stone pine with a bare trunk and a flat, spreading crown"><figcaption>A stone pine (<em>Pinus pinea</em>) on the Palatine in Rome: the tall trunk and spreading crown that Pliny saw in the eruption cloud. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Umbrella_pine_on_Palatine_Hill_in_Rome.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Patēre tua cōnsilia nōn sentīs, cōnstrictam iam hōrum omnium scientiā tenērī coniūrātiōnem tuam nōn vidēs?</p>
    <p>“Do you not realise that your plans are exposed, do you not see that your conspiracy is already held fast by the knowledge of all these men?” Cicero, <em>In Catilinam</em> 1.1, checked against the copy in the course’s source files; length marks added. Two accusatives and infinitives: <span class="la">tua cōnsilia patēre</span> after <span class="la">sentīs</span>, and <span class="la">coniūrātiōnem tuam … tenērī</span> (passive) after <span class="la">vidēs</span>.</p>
    <p>Pliny’s letter is full of them. His uncle, to calm the frightened household, <span class="la">ignēs relictōs dēsertāsque vīllās per sōlitūdinem ārdēre … dictitābat</span>, “kept saying that fires left behind (by peasants) and deserted villas were burning in the empty countryside” (6.16.13). Invited to come along on the ship, the seventeen-year-old nephew <span class="la">respondī studēre mē mālle</span>, “answered that I preferred to study” (6.16.7): <span class="la">mē</span>, accusative subject; <span class="la">mālle</span>, infinitive of <span class="la">mālō</span>, “prefer”.</p>
    <p>And Caesar, describing Gaul, refers back with an impersonal passive: <span class="la">quam Gallōs obtinēre dictum est</span>, “which, as has been said, the Gauls hold” (BG 1.1), literally “which it has been said the Gauls to hold”.</p>
  `,

  pronunciation: `
    <h3>-isse</h3>
    <p>The perfect active infinitive has a stressed <span class="la">-is-</span>: <span class="la">a-mā-VIS-se, vē-NIS-se, rē-XIS-se</span>. Shortened forms like <span class="la">amāsse</span> (for <span class="la">amāvisse</span>) are common in poetry.</p>
    <h3>ventūrum esse</h3>
    <p>In speech, the future infinitive often runs together: <span class="la">ven-TŪ-rum-es-se</span>. The <span class="la">esse</span> is frequently left out in writing: <span class="la">dīxit sē ventūrum</span>.</p>
  `,

  grammar: [
    {
      title: '1. The six infinitives',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Active</th><th>Passive</th></tr></thead>
          <tbody>
            <tr><th>Present</th><td class="la">amāre: to love</td><td class="la">amārī: to be loved</td></tr>
            <tr><th>Perfect</th><td class="la">amāvisse: to have loved</td><td class="la">amātus, -a, -um esse: to have been loved</td></tr>
            <tr><th>Future</th><td class="la">amātūrus, -a, -um esse: to be about to love</td><td class="la">amātum īrī: to be about to be loved</td></tr>
          </tbody>
        </table></div>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>regō</th><th>audiō</th><th>sum</th></tr></thead>
          <tbody>
            <tr><th>Pres. act.</th><td class="la">regere</td><td class="la">audīre</td><td class="la">esse</td></tr>
            <tr><th>Perf. act.</th><td class="la">rēxisse</td><td class="la">audīvisse</td><td class="la">fuisse</td></tr>
            <tr><th>Fut. act.</th><td class="la">rēctūrus esse</td><td class="la">audītūrus esse</td><td class="la">futūrus esse (fore)</td></tr>
            <tr><th>Pres. pass.</th><td class="la">regī</td><td class="la">audīrī</td><td>—</td></tr>
            <tr><th>Perf. pass.</th><td class="la">rēctus esse</td><td class="la">audītus esse</td><td>—</td></tr>
          </tbody>
        </table></div>
        <ul>
          <li>The perfect active infinitive is formed from the perfect stem + <span class="la">-isse</span>: <span class="la">amāv-isse, rēx-isse, fu-isse</span>.</li>
          <li>The perfect passive and future active infinitives combine a participle with <span class="la">esse</span>; the participle agrees with its subject like an adjective, in the accusative in indirect statement: <span class="la">dīcit epistulam scrīptam esse</span>.</li>
          <li>The future passive (<span class="la">amātum īrī</span>, with the supine and the passive infinitive of <span class="la">eō</span>) is rare; recognise it, do not worry about using it.</li>
        </ul>
      `
    },
    {
      title: '2. Indirect statement',
      html: `
        <p>After verbs of <strong>saying</strong> (<span class="la">dīcō, nārrō, nūntiō, respondeō, negō</span>), <strong>thinking</strong> (<span class="la">putō, crēdō, arbitror, spērō</span>), <strong>knowing</strong> (<span class="la">sciō, intellegō, cognōscō</span>) and <strong>perceiving</strong> (<span class="la">videō, audiō, sentiō</span>), a reported statement takes the form:</p>
        <p class="center"><strong>subject in the accusative + verb in the infinitive</strong></p>
        <ul>
          <li>Direct: <span class="la">“Puer venit.”</span> “The boy is coming.”</li>
          <li>Indirect: <span class="la">Dīcit puerum venīre.</span> He says that the boy is coming.</li>
        </ul>
        <p>There is no word for “that”. A predicate noun or adjective also goes into the accusative: <span class="la">Putō Lūcium amīcum bonum esse</span>, “I think that Lucius is a good friend”.</p>
        <p><span class="la">negō</span> means “say that … not”: <span class="la">Negat sē venīre</span>, “He says he is not coming”.</p>
      `
    },
    {
      title: '3. Time in indirect statement',
      html: `
        <p>The infinitive shows time relative to the verb of saying:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Infinitive</th><th>After dīcit (present)</th><th>After dīxit (past)</th></tr></thead>
          <tbody>
            <tr><td>Present: same time</td><td class="la">Dīcit eum venīre.</td><td class="la">Dīxit eum venīre.</td></tr>
            <tr><td></td><td>He says that he is coming.</td><td>He said that he was coming.</td></tr>
            <tr><td>Perfect: before</td><td class="la">Dīcit eum vēnisse.</td><td class="la">Dīxit eum vēnisse.</td></tr>
            <tr><td></td><td>He says that he came / has come.</td><td>He said that he had come.</td></tr>
            <tr><td>Future: after</td><td class="la">Dīcit eum ventūrum esse.</td><td class="la">Dīxit eum ventūrum esse.</td></tr>
            <tr><td></td><td>He says that he will come.</td><td>He said that he would come.</td></tr>
          </tbody>
        </table></div>
        <p>Latin keeps the same infinitive; English shifts its tense after a past verb (“is → was”, “will → would”). German does much the same with the Konjunktiv: <em>Er sagte, er komme / sei gekommen / werde kommen.</em></p>
      `
    },
    {
      title: '4. sē or eum?',
      html: `
        <p>If the subject of the reported statement is the same person as the subject of the verb of saying, Latin uses the reflexive <span class="la">sē</span>; if it is someone else, <span class="la">eum, eam, eōs</span>:</p>
        <ul>
          <li><span class="la">Mārcus dīcit sē fessum esse.</span> Marcus says that he (Marcus) is tired.</li>
          <li><span class="la">Mārcus dīcit eum fessum esse.</span> Marcus says that he (someone else) is tired.</li>
          <li><span class="la">Puerī dīxērunt sē lūsūrōs esse.</span> The boys said they would play.</li>
        </ul>
        <p>This is the “indirect reflexive” mentioned in Lecture XIV. English and German leave “he” and <em>er</em> ambiguous; Latin is precise. The same applies to <span class="la">suus</span>: <span class="la">Dīxit patrem suum vēnisse</span>, “He said that his (own) father had come.”</p>
      `
    },
    {
      title: '5. dīcitur: the personal construction',
      html: `
        <p>With the passive of verbs of saying, Latin prefers a personal construction where English uses “it is said that”: <span class="la">Caesar dīcitur vēnisse</span>, “Caesar is said to have come” (“It is said that Caesar came”). The subject is nominative and the infinitive follows, as in English. The impersonal form, as in Caesar’s <span class="la">dictum est</span> with an accusative and infinitive, also occurs, especially in the perfect.</p>
        <p><span class="la">vidētur</span> works the same way: <span class="la">Lūcius laetus esse vidētur</span>, “Lucius seems to be happy” (Lecture XIX).</p>
      `
    }
  ],

  vocab: [
    { id: 'puto', head: 'putō', la: 'putō, putāre, putāvī, putātum', pos: 'verb, 1st conj.', en: 'think, believe, suppose; reckon', stress: 'PU-tō · pu-TĀ-re', deriv: 'compute, reputation', note: 'Originally “prune, clean”, then “reckon up”.' },
    { id: 'nego', head: 'negō', la: 'negō, negāre, negāvī, negātum', pos: 'verb, 1st conj.', en: 'deny; say that … not', stress: 'NE-gō · ne-GĀ-re', deriv: 'negative', note: 'Negat sē venīre: he says he is not coming.' },
    { id: 'spero', head: 'spērō', la: 'spērō, spērāre, spērāvī, spērātum', pos: 'verb, 1st conj.', en: 'hope (for), expect', stress: 'SPĒ-rō · spē-RĀ-re', note: 'With the future infinitive: spērō eum ventūrum esse. Compare spēs (Lecture XXIII).' },
    { id: 'indico', head: 'indicō', la: 'indicō, indicāre, indicāvī, indicātum', pos: 'verb, 1st conj.', en: 'point out, show, indicate', stress: 'IN-di-cō · in-di-CĀ-re', deriv: 'indicate', note: 'Not indīcō (3rd conj.), “declare, proclaim”.' },
    { id: 'appareo', head: 'appāreō', la: 'appāreō, appārēre, appāruī, appāritum', pos: 'verb, 2nd conj.', en: 'appear, be visible', stress: 'ap-PĀ-re-ō · ap-pā-RĒ-re', deriv: 'appear, apparent' },
    { id: 'gusto', head: 'gustō', la: 'gustō, gustāre, gustāvī, gustātum', pos: 'verb, 1st conj.', en: 'taste; have a light meal', stress: 'GUS-tō · gus-TĀ-re', deriv: 'gusto, disgust' },
    { id: 'classis', head: 'classis', la: 'classis, classis', g: 'f', pos: 'noun, 3rd decl. (i-stem)', en: 'fleet; class (of citizens)', stress: 'CLAS-sis', deriv: 'class, classic', note: 'Originally a “summoning”, then a division of the people, then the fleet.' },
    { id: 'imperium', head: 'imperium', la: 'imperium, imperiī', g: 'n', pos: 'noun, 2nd decl.', en: 'command, power; empire', stress: 'im-PE-ri-um', deriv: 'empire, imperial' },
    { id: 'miraculum', head: 'mīrāculum', la: 'mīrāculum, mīrāculī', g: 'n', pos: 'noun, 2nd decl.', en: 'marvel, wonder', stress: 'mī-RĀ-cu-lum', deriv: 'miracle', note: 'From mīror, “wonder at”.' },
    { id: 'arbor', head: 'arbor', la: 'arbor, arboris', g: 'f', pos: 'noun, 3rd decl.', en: 'tree', stress: 'AR-bor · AR-bo-ris', deriv: 'arboreal, arboretum', note: 'Feminine, like most tree names.' },
    { id: 'species', head: 'speciēs', la: 'speciēs, speciēī', g: 'f', pos: 'noun, 5th decl.', en: 'appearance, look; kind, species', stress: 'SPE-ci-ēs', deriv: 'species, special, specious', note: 'From speciō, “look”. Pliny 6.16.4: inūsitātā et magnitūdine et speciē.' },
    { id: 'pinus', head: 'pīnus', la: 'pīnus, pīnūs (or pīnī)', g: 'f', pos: 'noun, 4th / 2nd decl.', en: 'pine tree', stress: 'PĪ-nus', deriv: 'pine', note: 'Feminine; mixes fourth and second declension.' }
  ],

  grammarCards: [
    { id: 'g26-six', front: 'The six infinitives of amō', back: 'amāre, amāvisse, amātūrus esse; amārī, amātus esse, amātum īrī' },
    { id: 'g26-rego', front: 'Infinitives of regō (active)', back: 'regere, rēxisse, rēctūrus esse' },
    { id: 'g26-sum', front: 'Infinitives of sum', back: 'esse, fuisse, futūrus esse (fore)' },
    { id: 'g26-isse', front: 'How is the perfect active infinitive formed?', back: 'Perfect stem + -isse: amāv-isse, rēx-isse' },
    { id: 'g26-is', front: 'Indirect statement', back: 'Subject accusative + infinitive after verbs of saying, thinking, knowing, perceiving' },
    { id: 'g26-dicit', front: 'Dīcit puerum venīre.', back: 'He says that the boy is coming.' },
    { id: 'g26-dixit', front: 'Dīxit puerum vēnisse.', back: 'He said that the boy had come.' },
    { id: 'g26-fut', front: 'Dīxit puerum ventūrum esse.', back: 'He said that the boy would come.' },
    { id: 'g26-time', front: 'Time of the infinitive in indirect statement', back: 'Present = same time; perfect = before; future = after (relative to the verb of saying)' },
    { id: 'g26-se', front: 'Mārcus dīcit sē fessum esse / eum fessum esse', back: 'that he himself is tired / that he (someone else) is tired' },
    { id: 'g26-nego', front: 'Negat sē venīre.', back: 'He says he is not coming.' },
    { id: 'g26-dicitur', front: 'Caesar dīcitur vēnisse.', back: 'Caesar is said to have come (personal construction).' },
    { id: 'g26-german', front: 'Ich sehe ihn kommen.', back: 'Videō eum venīre: German has the AcI after verbs of perception.' },
    { id: 'g26-cicero', front: 'Patēre tua cōnsilia nōn sentīs?', back: 'Do you not realise that your plans are exposed? (Cat. 1.1)' },
    { id: 'g26-pliny', front: 'māter mea indicat eī appārēre nūbem', back: 'my mother points out to him that a cloud is appearing (Pliny 6.16.4)' },
    { id: 'g26-malle', front: 'respondī studēre mē mālle', back: 'I answered that I preferred to study (Pliny 6.16.7)' },
    { id: 'g26-plinian', front: 'Plinian eruption', back: 'Named after Pliny’s description of the cloud shaped like a stone pine' },
    { id: 'g26-dictum', front: 'quam Gallōs obtinēre dictum est', back: 'which, as has been said, the Gauls hold (BG 1.1)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">amāvisse</span>:', options: ['to have loved', 'to love', 'to be loved', 'to be about to love'], answer: 0, explain: 'Perfect active infinitive.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">rēctūrus esse</span>:', options: ['to be about to rule', 'to have ruled', 'to have been ruled', 'to be ruled'], answer: 0, explain: 'Future active infinitive.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Dīcit puerum venīre.</span>', options: ['He says that the boy is coming.', 'He says that the boy came.', 'He tells the boy to come.', 'The boy says he is coming.'], answer: 0, explain: 'Present infinitive: same time.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Dīxit puerum vēnisse.</span>', options: ['He said that the boy had come.', 'He said that the boy was coming.', 'He said that the boy would come.', 'He says that the boy has come.'], answer: 0, explain: 'Perfect infinitive after a past verb: “had come”.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Mārcus dīcit sē fessum esse.</span>', options: ['Marcus says that he (Marcus) is tired.', 'Marcus says that he (another man) is tired.', 'Marcus tires himself.', 'Marcus says that they are tired.'], answer: 0, explain: 'sē: the same person as the subject of dīcit.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">amātus esse</span>:', options: ['to have been loved', 'to be loved', 'to have loved', 'to be about to love'], answer: 0, explain: 'Perfect passive infinitive.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Crēdō Lūcium hodiē ven___.</span>', hint: 'is coming (infinitive)', answers: ['īre', 'ire'], full: 'Crēdō Lūcium hodiē venīre.', explain: 'Present active infinitive.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Nūntiāvit hostēs vēn___.</span>', hint: 'had come', answers: ['isse'], full: 'Nūntiāvit hostēs vēnisse.', explain: 'Perfect active infinitive.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Spērō vōs crās ventūr___ esse.</span>', hint: '(that you) will come', answers: ['ōs', 'os'], full: 'Spērō vōs crās ventūrōs esse.', explain: 'The participle agrees with vōs: accusative plural.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Gāius dīcit s___ laetum esse.</span>', hint: 'that he himself', answers: ['ē', 'e'], full: 'Gāius dīcit sē laetum esse.', explain: 'Reflexive: the same person.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Sentiō epistulam lēct___ esse.</span>', hint: '(has been) read', answers: ['am'], full: 'Sentiō epistulam lēctam esse.', explain: 'Perfect passive infinitive, accusative feminine.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Videō puer___ currere.</span>', hint: 'the boy (subject of currere)', answers: ['um'], full: 'Videō puerum currere.', explain: 'Accusative subject of the infinitive.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the infinitives of <span class="la">amō</span>.', headers: ['Active', 'Passive'], rows: [
      { label: 'Present', answers: ['amāre', 'amārī'] },
      { label: 'Perfect', answers: ['amāvisse|amāsse', 'amātus esse'] },
      { label: 'Future', answers: ['amātūrus esse', 'amātum īrī'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the infinitives of <span class="la">regō</span>.', headers: ['Active', 'Passive'], rows: [
      { label: 'Present', answers: ['regere', 'regī'] },
      { label: 'Perfect', answers: ['rēxisse', 'rēctus esse'] },
      { label: 'Future', answers: ['rēctūrus esse', 'rēctum īrī'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each sentence to its meaning.', pairs: [
      ['dīcit eum venīre', 'he says he is coming'], ['dīxit eum venīre', 'he said he was coming'], ['dīxit eum vēnisse', 'he said he had come'], ['dīxit eum ventūrum esse', 'he said he would come'], ['dīcit sē venīre', 'he says that he himself is coming']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Puer dīcit patrem venīre.', tokens: ['The boy', 'says', 'that his father', 'is coming'], explain: 'patrem: accusative subject of venīre.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Lūcius dīxit sē in Graeciam nāvigātūrum esse.', model: 'Lucius said that he would sail to Greece.', accepted: ['lucius said that he would sail to greece', 'lucius said he would sail to greece', 'lucius said that he was going to sail to greece', 'lucius said he was going to sail to greece', 'lucius said that he would sail for greece', 'lucius said he would sail for greece'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Scīmus Caesarem Gallōs vīcisse.', model: 'We know that Caesar defeated the Gauls.', accepted: ['we know that caesar defeated gauls', 'we know caesar defeated gauls', 'we know that caesar has defeated gauls', 'we know caesar has defeated gauls', 'we know that caesar conquered gauls', 'we know caesar conquered gauls', 'we know that caesar had defeated gauls'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Puerī putābant canem fūrem esse.', model: 'The boys thought that the dog was a thief.', accepted: ['boys thought that dog was thief', 'boys thought dog was thief', 'boys believed that dog was thief', 'boys believed dog was thief', 'boys were thinking that dog was thief'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'to have loved', model: 'amāvisse', accepted: ['amāvisse', 'amāsse'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'He says that he (himself) is happy.', model: 'Dīcit sē laetum esse.', accepted: ['dīcit sē laetum esse', 'dīcit sē esse laetum'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'to be ruled', model: 'regī', accepted: ['regī'] },
    { id: 'e23', type: 'mc', prompt: 'Pliny 6.16.4: <span class="la">māter mea indicat eī appārēre nūbem</span>.', options: ['My mother points out to him that a cloud is appearing.', 'My mother appears to him in a cloud.', 'My mother tells him to look at the cloud.', 'A cloud points my mother out to him.'], answer: 0, explain: 'nūbem: accusative subject of appārēre.' },
    { id: 'e24', type: 'mc', prompt: 'Cicero: <span class="la">Patēre tua cōnsilia nōn sentīs?</span>', options: ['Do you not realise that your plans are exposed?', 'Do you not feel your plans?', 'Your plans do not feel exposed.', 'Do you not open your plans?'], answer: 0, explain: 'tua cōnsilia: accusative subject of patēre.' },
    { id: 'e25', type: 'mc', prompt: 'German <em>Ich sehe ihn kommen</em> corresponds to:', options: ['Videō eum venīre.', 'Videō eum venit.', 'Videō quod venit.', 'Videō eī venīre.'], answer: 0, explain: 'German too has an accusative and infinitive after verbs of perception.' }
  ],

  reading: {
    title: 'Nūbēs (Plīnius, Epistulae 6.16.4–5)',
    note: 'Authentic text, unadapted: Pliny the Younger, Letters 6.16.4–5, from the copy in the course’s source files; length marks added. Tap any word.',
    text: 'Erat Mīsēnī classemque imperiō praesēns regēbat. Nōnum Kal. Septembrēs hōrā ferē septimā māter mea indicat eī appārēre nūbem inūsitātā et magnitūdine et speciē. Ūsus ille sōle, mox frīgidā, gustāverat iacēns studēbatque; poscit soleās, ascendit locum ex quō maximē mīrāculum illud cōnspicī poterat. Nūbēs (incertum procul intuentibus ex quō monte; Vesuvium fuisse posteā cognitum est) oriēbātur, cuius similitūdinem et formam nōn alia magis arbor quam pīnus expresserit.',
    translation: 'He was at Misenum, in personal command of the fleet. On the ninth day before the Kalends of September, at about the seventh hour, my mother points out to him that a cloud is appearing, of unusual size and appearance. He had enjoyed the sun, then a cold bath, had eaten a light meal lying down and was studying; he calls for his sandals and climbs to a place from which that marvel could best be seen. A cloud was rising (to those looking from a distance it was unclear from which mountain; later it was learnt that it had been Vesuvius) whose likeness and shape no tree would have expressed better than a pine.',
    notes: [
      { ref: 'Erat Mīsēnī classemque imperiō praesēns regēbat', html: '<span class="la">Mīsēnī</span>: locative, “at Misenum” (Lecture XXXVIII). <span class="la">imperiō praesēns</span>: “present in command”, that is, personally commanding; <span class="la">imperiō</span> is an ablative of respect or manner. The imperfects set the scene.' },
      { ref: 'Nōnum Kal. Septembrēs', html: '<span class="la">ante diem nōnum Kalendās Septembrēs</span>, abbreviated: 24 August by inclusive counting (Lecture XV for the dispute about the date; the course calendar page explains the reckoning).' },
      { ref: 'hōrā ferē septimā', html: 'Ablative of time, about the seventh hour: early afternoon (Lecture XVI).' },
      { ref: 'māter mea indicat eī appārēre nūbem', html: 'Historic present <span class="la">indicat</span>, then indirect statement: <span class="la">nūbem</span> accusative subject, <span class="la">appārēre</span> present infinitive. <span class="la">eī</span>: “to him”, the uncle. Pliny’s mother was the elder Pliny’s sister.' },
      { ref: 'inūsitātā et magnitūdine et speciē', html: 'Ablative of description: “of unusual size and appearance”, the adjective <span class="la">inūsitātā</span> agreeing with both nouns. <span class="la">et … et</span>: “both … and”.' },
      { ref: 'Ūsus ille sōle, mox frīgidā', html: '<span class="la">ūsus</span>: perfect participle of the deponent <span class="la">ūtor</span>, “use, enjoy” (+ ablative), Lecture XXXV: “having enjoyed the sun, then cold water”, that is, a sunbath and a cold bath, part of a Roman daily routine.' },
      { ref: 'gustāverat iacēns studēbatque', html: '<span class="la">gustāverat</span>: “had taken a light meal”. <span class="la">iacēns</span>: lying down, as Romans ate. <span class="la">studēbat</span>: “was studying”, the elder Pliny’s constant occupation.' },
      { ref: 'poscit soleās, ascendit locum', html: 'Back to the historic present, short clauses without conjunctions: quick action. <span class="la">solea</span>: sandal, worn indoors; he puts them on to go out.' },
      { ref: 'ex quō maximē mīrāculum illud cōnspicī poterat', html: 'Lecture XXII: <span class="la">cōnspicī</span>, passive infinitive.' },
      { ref: 'incertum procul intuentibus ex quō monte', html: 'A parenthesis: “(it was) uncertain to those looking from afar from which mountain (it rose)”. <span class="la">intuentibus</span>: dative plural of the present participle of the deponent <span class="la">intueor</span>, “look at”, used as a noun.' },
      { ref: 'Vesuvium fuisse posteā cognitum est', html: 'Indirect statement after an impersonal passive: “it was learnt later that (it) had been Vesuvius”. <span class="la">fuisse</span>: perfect infinitive of <span class="la">sum</span>.' },
      { ref: 'oriēbātur', html: 'Imperfect of the deponent <span class="la">orior</span>, “rise”: passive in form, active in meaning.' },
      { ref: 'cuius similitūdinem et formam nōn alia magis arbor quam pīnus expresserit', html: '“whose likeness and shape no other tree would have expressed better than a pine”, that is, it looked most like a pine. <span class="la">expresserit</span>: perfect subjunctive, here a polite or cautious statement (Lecture XXXI). The next sentence of the letter, which you met in Lecture XXV, describes the trunk and branches.' }
    ],
    glosses: {
      'erat': 'impf. 3rd sg. of sum: he was', 'mīsēnī': 'locative: at Misenum', 'classemque': 'and the fleet (acc. of classis + -que)', 'imperiō': 'abl. of imperium: in command', 'praesēns': 'present, in person', 'regēbat': 'impf. 3rd sg. of regō: commanded',
      'nōnum': 'acc. n. of nōnus: ninth (day)', 'kal': 'Kalendās: (before) the Kalends', 'septembrēs': 'acc. pl. f. of September: of September', 'hōrā': 'abl. of hōra: hour', 'ferē': 'about, nearly', 'septimā': 'abl. f. of septimus: seventh', 'māter': 'mother (nom.)', 'mea': 'my', 'indicat': '3rd sg. of indicō: points out', 'eī': 'dat. of is: to him', 'appārēre': 'pres. inf. of appāreō: (that) is appearing', 'nūbem': 'acc. of nūbēs: a cloud (subject of appārēre)',
      'inūsitātā': 'abl. f. of inūsitātus: unusual', 'et': 'and; et … et: both … and', 'magnitūdine': 'abl. of magnitūdō: size', 'speciē': 'abl. of speciēs: appearance',
      'ūsus': 'having enjoyed (perf. part. of ūtor, + abl.)', 'ille': 'he', 'sōle': 'abl. of sōl: sun', 'mox': 'then, soon', 'frīgidā': 'abl. of frīgida: cold water', 'gustāverat': 'plupf. 3rd sg. of gustō: had taken a light meal', 'iacēns': 'lying down', 'studēbatque': 'and was studying (impf. of studeō + -que)',
      'poscit': '3rd sg. of poscō: calls for', 'soleās': 'acc. pl. of solea: sandals', 'ascendit': '3rd sg. of ascendō: climbs', 'locum': 'acc. of locus: place', 'ex': 'from (+ abl.)', 'quō': 'abl. of quī: which', 'maximē': 'best, most', 'mīrāculum': 'marvel (nom.)', 'illud': 'that', 'cōnspicī': 'pres. pass. inf. of cōnspiciō: to be seen', 'poterat': 'impf. 3rd sg. of possum: could',
      'nūbēs': 'cloud (nom.)', 'incertum': 'uncertain (n.)', 'procul': 'from afar', 'intuentibus': 'dat. pl. of intuēns: (to) those looking', 'monte': 'abl. of mōns: mountain', 'vesuvium': 'acc. of Vesuvius', 'fuisse': 'perf. inf. of sum: to have been', 'posteā': 'afterwards', 'cognitum': 'learnt (perf. part. of cognōscō)', 'est': 'is; (+ participle) was',
      'oriēbātur': 'impf. 3rd sg. of orior: was rising', 'cuius': 'whose', 'similitūdinem': 'acc. of similitūdō: likeness', 'formam': 'acc. of forma: shape', 'nōn': 'not', 'alia': 'nom. f. of alius: other', 'magis': 'more, better', 'arbor': 'tree (nom.)', 'quam': 'than', 'pīnus': 'pine (nom.)', 'expresserit': 'perf. subj. 3rd sg. of exprimō: would have expressed'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Who pointed out the cloud to the elder Pliny?', options: ['His sister, the writer’s mother', 'The writer himself', 'A sailor', 'Rectina'], answer: 0, explain: 'māter mea indicat eī.' },
      { id: 'r2', type: 'mc', prompt: 'What was the elder Pliny doing when the cloud was pointed out?', options: ['Studying after a sunbath, a cold bath and a light meal', 'Commanding the fleet at sea', 'Sleeping', 'Writing to Tacitus'], answer: 0, explain: 'Ūsus ille sōle, mox frīgidā, gustāverat iacēns studēbatque.' },
      { id: 'r3', type: 'mc', prompt: 'Was it clear from the start that the cloud came from Vesuvius?', options: ['No, that was learnt later', 'Yes, everyone knew at once', 'The letter does not say', 'It came from another mountain'], answer: 0, explain: 'incertum procul intuentibus ex quō monte; Vesuvium fuisse posteā cognitum est.' },
      { id: 'r4', type: 'mc', prompt: 'To what does Pliny compare the cloud?', options: ['A pine tree', 'A tower', 'A mountain', 'A ship'], answer: 0, explain: 'nōn alia magis arbor quam pīnus expresserit.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">fuisse</span>:', options: ['to have been', 'to be', 'to be about to be', 'he had been'], answer: 0, explain: 'Perfect infinitive of sum.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">Negat sē vēnisse.</span>', options: ['He says that he did not come.', 'He denies that she came.', 'He refuses to come.', 'He says that he will not come.'], answer: 0, explain: 'negō = say that … not; sē = he himself.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Caesar dīcitur vēnisse.</span>', options: ['Caesar is said to have come.', 'Caesar says that he came.', 'It is said to Caesar that he came.', 'Caesar will be said to come.'], answer: 0, explain: 'Personal construction with the passive.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Putābam tē dorm___.</span>', hint: 'were sleeping (present inf.)', answers: ['īre', 'ire'], full: 'Putābam tē dormīre.', explain: 'Present infinitive: same time as putābam.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Sciō urbem capt___ esse.</span>', hint: 'has been captured', answers: ['am'], full: 'Sciō urbem captam esse.', explain: 'Perfect passive infinitive, accusative feminine.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Audīvī Lūcium ventūrum esse.', model: 'I heard that Lucius would come.', accepted: ['i heard that lucius would come', 'i heard lucius would come', 'i have heard that lucius will come', 'i have heard lucius will come', 'i heard that lucius was going to come', 'i heard lucius was going to come', 'i heard that lucius will come'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'to have been', model: 'fuisse', accepted: ['fuisse'] },
      { id: 't8', type: 'mc', prompt: 'In indirect statement, the subject of the infinitive is in the:', options: ['accusative', 'nominative', 'dative', 'ablative'], answer: 0, explain: 'Accusative and infinitive.' },
      { id: 't9', type: 'mc', prompt: 'Why is a high, spreading eruption column called “Plinian”?', options: ['After Pliny’s description of the cloud as a pine', 'After the elder Pliny’s Natural History', 'After a volcano called Plinius', 'After a modern scientist'], answer: 0, explain: 'The pine comparison in Letters 6.16.5.' },
      { id: 't10', type: 'mc', prompt: 'In <span class="la">respondī studēre mē mālle</span> (Pliny 6.16.7), <span class="la">mē</span> is:', options: ['the accusative subject of mālle', 'the object of studēre', 'a dative', 'an ablative'], answer: 0, explain: 'I answered that I preferred to study.' },
      { id: 't11', type: 'mc', prompt: 'Which verb is NOT normally followed by indirect statement?', options: ['iubeō (order)', 'putō', 'dīcō', 'sciō'], answer: 0, explain: 'iubeō takes accusative + infinitive too, but as a command, not a statement.' }
    ]
  },

  reference: [
    { title: 'Infinitives', headers: ['', 'amō', 'regō', 'audiō', 'sum'], rows: [
      ['Pres. act.', 'amāre', 'regere', 'audīre', 'esse'], ['Perf. act.', 'amāvisse', 'rēxisse', 'audīvisse', 'fuisse'], ['Fut. act.', 'amātūrus esse', 'rēctūrus esse', 'audītūrus esse', 'futūrus esse / fore'],
      ['Pres. pass.', 'amārī', 'regī', 'audīrī', '—'], ['Perf. pass.', 'amātus esse', 'rēctus esse', 'audītus esse', '—'], ['Fut. pass.', 'amātum īrī', 'rēctum īrī', 'audītum īrī', '—']
    ] },
    { title: 'Indirect statement: time', headers: ['Infinitive', 'dīcit …', 'dīxit …'], rows: [
      ['Present', 'eum venīre: he is coming', 'eum venīre: he was coming'], ['Perfect', 'eum vēnisse: he came / has come', 'eum vēnisse: he had come'], ['Future', 'eum ventūrum esse: he will come', 'eum ventūrum esse: he would come']
    ] },
    { title: 'Verbs introducing indirect statement', headers: ['Type', 'Examples'], rows: [
      ['Saying', 'dīcō, nārrō, nūntiō, respondeō, negō'], ['Thinking', 'putō, crēdō, arbitror, spērō'], ['Knowing', 'sciō, intellegō, cognōscō'], ['Perceiving', 'videō, audiō, sentiō']
    ] }
  ]
});
