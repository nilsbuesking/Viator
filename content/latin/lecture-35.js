/*
 * Latin — Lecture XXXV: deponent and semi-deponent verbs; the ablative with ūtor, fruor,
 * fungor, potior, vēscor.
 * Authentic reading: Pliny, Letters 6.20.6–9.
 * Content file only. Source texts (Pliny, Letters 6.16 and 6.20) checked against the texts supplied
 * by Nils; length marks editorial. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-35',
  number: 35,
  title: 'Multās formīdinēs patimur',
  subtitle: 'Deponent verbs (hortor, loquor, ēgredior); semi-deponents (audeō, gaudeō, soleō); the ablative with ūtor, fruor, fungor, potior, vēscor; authentic reading: Pliny 6.20.6–9',
  minutes: 75,

  intro: `
    <p>Some Latin verbs have only passive forms but active meanings: <span class="la">hortor</span> “I urge”, <span class="la">loquor</span> “I speak”, <span class="la">patior</span> “I suffer”. They are called <strong>deponents</strong>, from <span class="la">dēpōnō</span>, “lay aside”, because the old grammarians thought they had laid aside their active forms. You have met many in the Pliny readings: <span class="la">cūnctātus</span>, <span class="la">cōnsōlātur</span>, <span class="la">hortātur</span>, <span class="la">vagentur</span>, <span class="la">ēgredī</span>, <span class="la">morātus</span>, <span class="la">amplexus</span>.</p>
    <p>Nothing new has to be learnt about the forms: they are the passive forms of Lectures XIX–XXII. What is new is reading them actively, and one great gift: the perfect participle of a deponent is active, <span class="la">hortātus</span> “having urged”, which ordinary verbs cannot form.</p>
    <p>Five deponents take their object in the ablative: <span class="la">ūtor</span> “use”, <span class="la">fruor</span> “enjoy”, <span class="la">fungor</span> “perform”, <span class="la">potior</span> “gain possession of”, <span class="la">vēscor</span> “feed on”. German has a close parallel in <em>sich einer Sache bedienen</em>, with the genitive.</p>
    <p>The reading: at dawn Pliny and his mother leave Misenum with a panicking crowd, and see the carts roll on level ground, the sea sucked back, and the black cloud split by flames.</p>
  `,

  background: [
    {
      title: 'Multa ibi mīranda',
      html: `
        <p>Outside the town Pliny records three things that modern readers find strikingly accurate. The carts would not stay still even when wedged with stones: the ground was moving. The sea seemed to be sucked back and the shore had advanced, leaving sea creatures stranded on the sand: a retreat of the sea, which has been interpreted as the effect of ground uplift or of a seismic sea wave. And the black cloud on the other side was split by twisting flashes of fire, “like lightning, but larger”.</p>
        <p>Lightning in an eruption column is well documented today: friction between particles of ash builds up electrical charge. Whether Pliny’s <span class="la">longae flammārum figūrae</span> were lightning, glowing material or both cannot be decided from the text, and volcanologists differ on the details.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Galunggung.jpg/960px-Galunggung.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Galunggung.jpg/500px-Galunggung.jpg|https://upload.wikimedia.org/wikipedia/commons/5/57/Galunggung.jpg" alt="Night photograph of a volcanic ash cloud lit up by lightning"><figcaption>Lightning in the ash cloud of Galunggung, Java, during its eruption of 1982 (United States Geological Survey photograph). Pliny: <span class="la">fulguribus illae et similēs et maiōrēs erant</span>. <span class="credit">Photograph, public domain (USGS); details on the file page · <a href="https://commons.wikimedia.org/wiki/File:Galunggung.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Why deponents?',
      html: `
        <p>Indo-European had a middle voice, used when the subject acts on or for itself or is closely involved in the action; Greek kept it. In Latin its forms became the passive, and the deponents are verbs whose middle forms survived with an active sense. Many still have a reflexive or inward flavour: <span class="la">mīror</span> “wonder at” (German <em>sich wundern</em>), <span class="la">laetor</span> “rejoice” (<em>sich freuen</em>), <span class="la">reminīscor</span> “remember” (<em>sich erinnern</em>), <span class="la">vereor</span> “fear, respect”, <span class="la">nāscor</span> “be born”, <span class="la">morior</span> “die”. This is a historical explanation and a useful memory aid, not a rule: <span class="la">sequor</span> “follow” and <span class="la">loquor</span> “speak” have no obvious middle sense.</p>
        <p>German reflexive verbs make good parallels for the ablative group too. <span class="la">ūtor gladiō</span>, “I use a sword”, is like <em>ich bediene mich eines Schwertes</em>; <span class="la">potior urbe</span>, “I take possession of the city”, like <em>ich bemächtige mich der Stadt</em>. In both languages the object is not in the accusative.</p>
      `
    },
    {
      title: 'Quod in pavōre simile prūdentiae',
      html: `
        <p>The crowd follows mother and son out of the town, and Pliny observes something about panic: the frightened mass “prefers another’s plan to its own, which in fear looks like prudence”. The sentence is typical of Pliny’s style, a general observation compressed into a relative clause. Thucydides and Tacitus make similar remarks about crowds; Pliny, writing for a historian, adopts the historian’s tone.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Ūsus ille sōle, mox frīgidā, gustāverat iacēns studēbatque.</p>
    <p>“He had been in the sun, then (bathed) in cold water, had had a light lunch lying down and was working.” Pliny, <em>Letters</em> 6.16.5 (Lecture XXVI), checked against the text Nils supplied; length marks added. <span class="la">ūsus</span>, perfect participle of <span class="la">ūtor</span>, with active meaning and the ablative: “having made use of the sun”, i.e. sunbathed. <span class="la">frīgidā</span> [<span class="la">aquā</span>]: “cold (water)”.</p>
    <p>In 6.20.3 Pliny describes the earth tremors before the eruption as <span class="la">minus formīdolōsus quia Campāniae solitus</span>, “less frightening because usual in Campania”: <span class="la">solitus</span> is from the semi-deponent <span class="la">soleō, solēre, solitus sum</span>.</p>
    <p>And in the first letter: <span class="la">complectitur trepidantem, cōnsōlātur, hortātur</span> (6.16.12), three deponents in a row, all active in meaning.</p>
  `,

  pronunciation: `
    <h3>loquī, ēgredī</h3>
    <p>The present infinitive of 3rd-conjugation deponents ends in a bare <span class="la">-ī</span>, like the passive <span class="la">regī</span>: <span class="la">LO-quī, SE-quī, PA-tī, ē-GRE-dī</span>. Do not add <span class="la">-rī</span>: <span class="la">*loquerī</span> does not exist. The other conjugations have <span class="la">-rī</span>: <span class="la">hor-TĀ-rī, ve-RĒ-rī, po-TĪ-rī</span>.</p>
    <h3>secūtus, locūtus</h3>
    <p>The perfect participles of <span class="la">sequor</span> and <span class="la">loquor</span> have <span class="la">c</span>, not <span class="la">qu</span>: <span class="la">se-CŪ-tus, lo-CŪ-tus</span>. The <span class="la">qu</span> became <span class="la">c</span> before <span class="la">u</span>.</p>
  `,

  grammar: [
    {
      title: '1. What a deponent looks like',
      html: `
        <p>Dictionaries give three principal parts: present, infinitive, perfect.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Conjugation</th><th>Present</th><th>Infinitive</th><th>Perfect</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td>1st</td><td class="la">hortor</td><td class="la">hortārī</td><td class="la">hortātus sum</td><td>urge, encourage</td></tr>
            <tr><td>2nd</td><td class="la">vereor</td><td class="la">verērī</td><td class="la">veritus sum</td><td>fear, respect</td></tr>
            <tr><td>3rd</td><td class="la">loquor</td><td class="la">loquī</td><td class="la">locūtus sum</td><td>speak</td></tr>
            <tr><td>3rd -iō</td><td class="la">patior</td><td class="la">patī</td><td class="la">passus sum</td><td>suffer, allow</td></tr>
            <tr><td>4th</td><td class="la">potior</td><td class="la">potīrī</td><td class="la">potītus sum</td><td>gain possession of</td></tr>
          </tbody>
        </table></div>
        <p>If a verb ends in <span class="la">-or</span> in the dictionary and has <span class="la">… sum</span> as its third part, it is deponent: translate every form actively. <span class="la">Hortātur</span> “he urges”, not “he is urged”.</p>
      `
    },
    {
      title: '2. The forms',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>hortor</th><th>loquor</th></tr></thead>
          <tbody>
            <tr><td>Present</td><td class="la">hortor, hortāris, hortātur, hortāmur, hortāminī, hortantur</td><td class="la">loquor, loqueris, loquitur, loquimur, loquiminī, loquuntur</td></tr>
            <tr><td>Imperfect</td><td class="la">hortābar</td><td class="la">loquēbar</td></tr>
            <tr><td>Future</td><td class="la">hortābor, hortāberis</td><td class="la">loquar, loquēris</td></tr>
            <tr><td>Perfect</td><td class="la">hortātus sum</td><td class="la">locūtus sum</td></tr>
            <tr><td>Pluperfect</td><td class="la">hortātus eram</td><td class="la">locūtus eram</td></tr>
            <tr><td>Pres. subj.</td><td class="la">horter</td><td class="la">loquar</td></tr>
            <tr><td>Impf. subj.</td><td class="la">hortārer</td><td class="la">loquerer</td></tr>
            <tr><td>Imperative</td><td class="la">hortāre, hortāminī</td><td class="la">loquere, loquiminī</td></tr>
          </tbody>
        </table></div>
        <p>The singular imperative looks like an active infinitive: <span class="la">hortāre!</span> “urge!”, <span class="la">sequere mē!</span> “follow me!”. The imperfect subjunctive is built on the infinitive that an active verb <em>would</em> have: <span class="la">loquerer</span>, not <span class="la">*loquīrer</span>.</p>
      `
    },
    {
      title: '3. Participles and infinitives',
      html: `
        <p>Deponents have the full set of participles, all active in meaning except the gerundive:</p>
        <ul>
          <li>present: <span class="la">hortāns</span> “urging” (active form)</li>
          <li>perfect: <span class="la">hortātus</span> “<strong>having urged</strong>” (passive form, active meaning)</li>
          <li>future: <span class="la">hortātūrus</span> “about to urge” (active form)</li>
          <li>gerundive: <span class="la">hortandus</span> “to be urged” (passive meaning): <span class="la">multa mīranda</span>, “many things to be wondered at”.</li>
        </ul>
        <p>Infinitives: present <span class="la">hortārī</span>, perfect <span class="la">hortātus esse</span>, future <span class="la">hortātūrus esse</span>.</p>
        <p>The active perfect participle makes deponents very useful in narrative: <span class="la">Ēgressī tēcta cōnsistimus</span>, “Having left the buildings, we stop”; <span class="la">manum eius amplexus</span>, “having taken her hand”. With an ordinary verb Latin would need an ablative absolute or a <span class="la">cum</span> clause.</p>
      `
    },
    {
      title: '4. Semi-deponents',
      html: `
        <p>A few verbs are active in the present system and deponent in the perfect system:</p>
        <ul>
          <li><span class="la">audeō, audēre, ausus sum</span>: dare</li>
          <li><span class="la">gaudeō, gaudēre, gāvīsus sum</span>: rejoice</li>
          <li><span class="la">soleō, solēre, solitus sum</span>: be accustomed</li>
          <li><span class="la">fīdō, fīdere, fīsus sum</span>: trust (+ dative)</li>
        </ul>
        <p><span class="la">Audet</span> “he dares”, <span class="la">ausus est</span> “he dared”. German has a vaguely similar split between auxiliaries in <em>ich habe gewagt</em> but <em>ich bin gegangen</em>, though the cause is quite different.</p>
      `
    },
    {
      title: '5. The ablative with ūtor, fruor, fungor, potior, vēscor',
      html: `
        <ul>
          <li><span class="la">ūtor</span>, <span class="la">ūtī</span>, <span class="la">ūsus sum</span>: use. <span class="la">Gladiō ūtitur.</span> He uses a sword.</li>
          <li><span class="la">fruor</span>, <span class="la">fruī</span>, <span class="la">frūctus sum</span>: enjoy. <span class="la">Vītā fruimur.</span> We enjoy life.</li>
          <li><span class="la">fungor</span>, <span class="la">fungī</span>, <span class="la">fūnctus sum</span>: perform, discharge. <span class="la">Officiō fungitur.</span> He does his duty.</li>
          <li><span class="la">potior</span>, <span class="la">potīrī</span>, <span class="la">potītus sum</span>: gain possession of. <span class="la">Urbe potītī sunt.</span> They took the city. (Also + genitive: <span class="la">rērum potīrī</span>, “to seize power”.)</li>
          <li><span class="la">vēscor</span>, <span class="la">vēscī</span>: feed on. <span class="la">Carne vēscuntur.</span> They live on meat.</li>
        </ul>
        <p>Historically this is an ablative of means: <span class="la">ūtor gladiō</span> was “I help myself by means of a sword”. Translate with an English direct object.</p>
      `
    }
  ],

  vocab: [
    { id: 'hortor', head: 'hortor', la: 'hortor, hortārī, hortātus sum', pos: 'verb, 1st conj. (deponent)', en: 'urge, encourage', stress: 'HOR-tor · hor-TĀ-rī', deriv: 'exhort' },
    { id: 'conor', head: 'cōnor', la: 'cōnor, cōnārī, cōnātus sum', pos: 'verb, 1st conj. (deponent)', en: 'try, attempt', stress: 'CŌ-nor · cō-NĀ-rī', deriv: 'conation' },
    { id: 'miror', head: 'mīror', la: 'mīror, mīrārī, mīrātus sum', pos: 'verb, 1st conj. (deponent)', en: 'wonder (at), be amazed at, admire', stress: 'MĪ-ror · mī-RĀ-rī', deriv: 'admire, miracle', note: 'German sich wundern.' },
    { id: 'moror', head: 'moror', la: 'moror, morārī, morātus sum', pos: 'verb, 1st conj. (deponent)', en: 'delay; stay', stress: 'MO-ror · mo-RĀ-rī', note: 'From mora (Lecture II). Pliny: quod mē morētur.' },
    { id: 'vereor', head: 'vereor', la: 'vereor, verērī, veritus sum', pos: 'verb, 2nd conj. (deponent)', en: 'fear; respect, revere', stress: 'VE-re-or · ve-RĒ-rī', deriv: 'revere' },
    { id: 'loquor', head: 'loquor', la: 'loquor, loquī, locūtus sum', pos: 'verb, 3rd conj. (deponent)', en: 'speak, talk', stress: 'LO-quor · LO-quī', deriv: 'eloquent, loquacious' },
    { id: 'sequor', head: 'sequor', la: 'sequor, sequī, secūtus sum', pos: 'verb, 3rd conj. (deponent)', en: 'follow', stress: 'SE-quor · SE-quī', deriv: 'sequence, consequence', note: 'Pliny 6.20.7: sequitur vulgus attonitum.' },
    { id: 'proficiscor', head: 'proficīscor', la: 'proficīscor, proficīscī, profectus sum', pos: 'verb, 3rd conj. (deponent)', en: 'set out, depart', stress: 'pro-fi-CĪS-cor · pro-fi-CĪS-cī' },
    { id: 'nascor', head: 'nāscor', la: 'nāscor, nāscī, nātus sum', pos: 'verb, 3rd conj. (deponent)', en: 'be born; arise', stress: 'NĀS-cor · NĀS-cī', deriv: 'native, nation', note: 'Older gnāscor: compare (g)nātus, cognātus.' },
    { id: 'morior', head: 'morior', la: 'morior, morī, mortuus sum', pos: 'verb, 3rd conj. -iō (deponent)', en: 'die', stress: 'MO-ri-or · MO-rī', deriv: 'mortuary', note: 'Future participle moritūrus (Lecture XXXIV: bene moritūram).' },
    { id: 'patior', head: 'patior', la: 'patior, patī, passus sum', pos: 'verb, 3rd conj. -iō (deponent)', en: 'suffer, endure; allow', stress: 'PA-ti-or · PA-tī', deriv: 'patient, passion' },
    { id: 'egredior', head: 'ēgredior', la: 'ēgredior, ēgredī, ēgressus sum', pos: 'verb, 3rd conj. -iō (deponent)', en: 'go out, leave', stress: 'ē-GRE-di-or · Ē-gre-dī', deriv: 'egress', note: 'ē + gradior, “step”; compare gradus (Lecture XXXIV).' },
    { id: 'utor', head: 'ūtor', la: 'ūtor, ūtī, ūsus sum (+ abl.)', pos: 'verb, 3rd conj. (deponent)', en: 'use, make use of; enjoy (a friendship)', stress: 'Ū-tor · Ū-tī', deriv: 'use, utility' },
    { id: 'fruor', head: 'fruor', la: 'fruor, fruī, frūctus sum (+ abl.)', pos: 'verb, 3rd conj. (deponent)', en: 'enjoy', stress: 'FRU-or · FRU-ī', deriv: 'fruit, fruition', note: 'Future participle fruitūrus.' },
    { id: 'fungor', head: 'fungor', la: 'fungor, fungī, fūnctus sum (+ abl.)', pos: 'verb, 3rd conj. (deponent)', en: 'perform, carry out, discharge', stress: 'FUN-gor · FUN-gī', deriv: 'function, defunct' },
    { id: 'potior', head: 'potior', la: 'potior, potīrī, potītus sum (+ abl. or gen.)', pos: 'verb, 4th conj. (deponent)', en: 'gain possession of, get control of', stress: 'PO-ti-or · po-TĪ-rī', note: 'German sich bemächtigen + gen.' },
    { id: 'gaudeo', head: 'gaudeō', la: 'gaudeō, gaudēre, gāvīsus sum', pos: 'verb, 2nd conj. (semi-deponent)', en: 'rejoice, be glad', stress: 'GAU-de-ō · gau-DĒ-re', note: 'Gaudeāmus igitur: so let us rejoice (medieval student song).' },
    { id: 'vulgus', head: 'vulgus', la: 'vulgus, vulgī', g: 'n', pos: 'noun, 2nd decl.', en: 'the common people, the crowd', stress: 'VUL-gus', deriv: 'vulgar', note: 'Neuter despite -us (occasionally masculine). The Vulgate: the Bible in the common language.' },
    { id: 'agmen', head: 'agmen', la: 'agmen, agminis', g: 'n', pos: 'noun, 3rd decl.', en: 'column (of people or troops), throng', stress: 'AG-men · AG-mi-nis', note: 'From agō, “drive”: a body of people on the move.' },
    { id: 'vehiculum', head: 'vehiculum', la: 'vehiculum, vehiculī', g: 'n', pos: 'noun, 2nd decl.', en: 'vehicle, cart, carriage', stress: 've-HI-cu-lum', deriv: 'vehicle', note: 'From vehō, “carry”; German Wagen and English wain are related.' }
  ],

  grammarCards: [
    { id: 'g35-def', front: 'Deponent verb', back: 'Passive forms, active meaning: hortor “I urge”.' },
    { id: 'g35-pp', front: 'Principal parts of a deponent', back: 'Three: hortor, hortārī, hortātus sum' },
    { id: 'g35-inf3', front: 'Present infinitive of 3rd-conjugation deponents', back: '-ī: loquī, sequī, patī, ēgredī (not *loquerī)' },
    { id: 'g35-imp', front: 'Imperative of hortor, sequor', back: 'hortāre, hortāminī; sequere, sequiminī' },
    { id: 'g35-ppp', front: 'Perfect participle of a deponent', back: 'Active meaning: hortātus “having urged”, ēgressus “having gone out”' },
    { id: 'g35-part', front: 'Participles of hortor', back: 'hortāns (urging), hortātus (having urged), hortātūrus (about to urge), hortandus (to be urged)' },
    { id: 'g35-semi', front: 'Semi-deponents', back: 'audeō, ausus sum; gaudeō, gāvīsus sum; soleō, solitus sum; fīdō, fīsus sum' },
    { id: 'g35-abl', front: 'Deponents with the ablative', back: 'ūtor, fruor, fungor, potior, vēscor' },
    { id: 'g35-utor', front: 'Gladiō ūtitur.', back: 'He uses a sword. (≈ er bedient sich eines Schwertes)' },
    { id: 'g35-potior', front: 'Urbe potītī sunt.', back: 'They took possession of the city.' },
    { id: 'g35-sequor', front: 'sequor: principal parts', back: 'sequor, sequī, secūtus sum' },
    { id: 'g35-loquor', front: 'loquor: principal parts', back: 'loquor, loquī, locūtus sum' },
    { id: 'g35-patior', front: 'patior: principal parts', back: 'patior, patī, passus sum' },
    { id: 'g35-morior', front: 'morior: principal parts', back: 'morior, morī, mortuus sum (fut. part. moritūrus)' },
    { id: 'g35-egressi', front: 'Ēgressī tēcta cōnsistimus.', back: 'Having left the buildings, we stop. (Pliny 6.20.8)' },
    { id: 'g35-patimur', front: 'Multa ibi mīranda, multās formīdinēs patimur.', back: 'There we experience many things to wonder at, many terrors. (Pliny 6.20.8)' },
    { id: 'g35-usus', front: 'Ūsus ille sōle, mox frīgidā', back: 'He had been in the sun, then in cold water (Pliny 6.16.5; ūtor + abl.)' },
    { id: 'g35-vulgus', front: 'quodque in pavōre simile prūdentiae, aliēnum cōnsilium suō praefert', back: 'and, which in fear looks like prudence, prefers another’s plan to its own (Pliny 6.20.7)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">hortātur</span>:', options: ['he urges', 'he is urged', 'he urged', 'urge!'], answer: 0, explain: 'Deponent: passive form, active meaning.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">locūtus est</span>:', options: ['he spoke', 'he was spoken', 'he speaks', 'he will speak'], answer: 0, explain: 'Perfect of loquor.' },
    { id: 'e3', type: 'mc', prompt: 'Present infinitive of <span class="la">sequor</span>:', options: ['sequī', 'sequere', 'sequerī', 'secūtus esse'], answer: 0, explain: '3rd conjugation: -ī.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Gladiō ūtitur.</span>', options: ['He uses a sword.', 'He is used by a sword.', 'He uses himself with a sword.', 'A sword is useful.'], answer: 0, explain: 'ūtor + ablative.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Ēgressī tēcta cōnsistimus.</span>', options: ['Having left the buildings, we stop.', 'Having been led out of the buildings, we stop.', 'We leave the buildings and go on.', 'We stop the buildings.'], answer: 0, explain: 'Perfect participle of a deponent: active.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">ausus est</span>:', options: ['he dared', 'he was dared', 'he heard', 'he dares'], answer: 0, explain: 'audeō, audēre, ausus sum: semi-deponent.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Mīlitēs ducem sequ___.</span>', hint: 'follow (present)', answers: ['untur'], full: 'Mīlitēs ducem sequuntur.', explain: 'sequor, sequeris, sequitur … sequuntur.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Puerī vītā fru___.</span>', hint: 'enjoy (present)', answers: ['untur'], full: 'Puerī vītā fruuntur.', explain: 'fruor + ablative.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Pater fīlium hort___ est.</span>', hint: 'urged (perfect participle, m.)', answers: ['ātus', 'atus'], full: 'Pater fīlium hortātus est.', explain: 'hortātus est: he urged. With a feminine subject: māter hortāta est.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Rōmānī urbe pot___ sunt.</span>', hint: 'took possession of', answers: ['ītī', 'iti'], full: 'Rōmānī urbe potītī sunt.', explain: 'potior, potīrī, potītus sum.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Sequ___ mē!</span>', hint: 'follow (imperative sg.)', answers: ['ere'], full: 'Sequere mē!', explain: 'Imperative singular -re.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Hostēs lūce prīmā prof___ sunt.</span>', hint: 'set out', answers: ['ectī', 'ecti'], full: 'Hostēs lūce prīmā profectī sunt.', explain: 'proficīscor, proficīscī, profectus sum.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the present and perfect indicative of <span class="la">hortor</span> (masculine).', headers: ['present', 'perfect'], rows: [
      { label: '1st sg.', answers: ['hortor', 'hortātus sum'] },
      { label: '2nd sg.', answers: ['hortāris|hortāre', 'hortātus es'] },
      { label: '3rd sg.', answers: ['hortātur', 'hortātus est'] },
      { label: '1st pl.', answers: ['hortāmur', 'hortātī sumus'] },
      { label: '2nd pl.', answers: ['hortāminī', 'hortātī estis'] },
      { label: '3rd pl.', answers: ['hortantur', 'hortātī sunt'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the present indicative and imperfect subjunctive of <span class="la">loquor</span>.', headers: ['present', 'impf. subj.'], rows: [
      { label: '1st sg.', answers: ['loquor', 'loquerer'] },
      { label: '2nd sg.', answers: ['loqueris|loquere', 'loquerēris|loquerēre'] },
      { label: '3rd sg.', answers: ['loquitur', 'loquerētur'] },
      { label: '1st pl.', answers: ['loquimur', 'loquerēmur'] },
      { label: '2nd pl.', answers: ['loquiminī', 'loquerēminī'] },
      { label: '3rd pl.', answers: ['loquuntur', 'loquerentur'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each deponent to its meaning.', pairs: [
      ['ūtor', 'use'], ['fruor', 'enjoy'], ['fungor', 'perform'], ['potior', 'gain possession of'], ['vereor', 'fear, respect']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Amīcus mēcum locūtus est.', tokens: ['My friend', 'spoke', 'with', 'me'], explain: 'locūtus est: perfect of loquor, active meaning.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Caesar mīlitēs hortātus est.', model: 'Caesar encouraged the soldiers.', accepted: ['caesar encouraged soldiers', 'caesar urged soldiers', 'caesar urged on soldiers', 'caesar exhorted soldiers', 'caesar has encouraged soldiers'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Multa mala passī sumus.', model: 'We have suffered many evils.', accepted: ['we have suffered many evils', 'we suffered many evils', 'we have suffered many misfortunes', 'we suffered many misfortunes', 'we have suffered many bad things', 'we suffered many bad things', 'we have endured many evils', 'we endured many evils', 'we have suffered many troubles', 'we suffered many troubles'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Mārcus librīs ūtitur.', model: 'Marcus uses books.', accepted: ['marcus uses books', 'marcus makes use of books', 'marcus is using books', 'marcus uses his books'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'to speak (present infinitive)', model: 'loquī', accepted: ['loquī'], explain: 'Deponents have passive forms with active meaning, so the infinitive is the passive one: loquī (third conjugation, like dūcī).' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'he followed (perfect, sequor)', model: 'secūtus est', accepted: ['secūtus est'], explain: 'Deponent perfect: perfect participle + sum, but active in meaning, “he followed”.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'we try (cōnor)', model: 'cōnāmur', accepted: ['cōnāmur'], explain: 'First-conjugation deponent: passive ending -mur, active meaning.' },
    { id: 'e23', type: 'mc', prompt: 'Why would the carts not stay still?', options: ['The ground was shaking', 'The horses were frightened', 'They were on a slope', 'The crowd pushed them'], answer: 0, explain: 'quamquam in plānissimō campō … nē lapidibus quidem fulta in eōdem vestīgiō quiēscēbant.' },
    { id: 'e24', type: 'mc', prompt: 'What did they see at the shore?', options: ['The sea drawn back, sea creatures stranded on dry sand', 'A tidal wave breaking', 'Ships burning', 'The uncle’s fleet returning'], answer: 0, explain: 'prōcesserat lītus, multaque animālia maris siccīs harēnīs dētinēbat.' },
    { id: 'e25', type: 'mc', prompt: 'German <em>sich einer Sache bedienen</em> (genitive) is a parallel to:', options: ['ūtor + ablative', 'hortor + accusative', 'loquor + dē', 'sequor + accusative'], answer: 0, explain: 'Both use a case other than the accusative for “use”.' }
  ],

  reading: {
    title: 'Mīsēnum relinquunt (Plīnius, Epistulae 6.20.6–9)',
    note: 'Authentic text, unadapted: Pliny the Younger, Letters 6.20.6–9, from the copy Nils supplied; length marks added. Tap any word.',
    text: 'Iam hōra diēī prīma, et adhūc dubius et quasi languidus diēs. Iam quassātīs circumiacentibus tēctīs, quamquam in apertō locō, angustō tamen, magnus et certus ruīnae metus. Tum dēmum excēdere oppidō vīsum; sequitur vulgus attonitum, quodque in pavōre simile prūdentiae, aliēnum cōnsilium suō praefert, ingentīque agmine abeuntēs premit et impellit. Ēgressī tēcta cōnsistimus. Multa ibi mīranda, multās formīdinēs patimur. Nam vehicula quae prōdūcī iusserāmus, quamquam in plānissimō campō, in contrāriās partēs agēbantur, ac nē lapidibus quidem fulta in eōdem vestīgiō quiēscēbant. Praetereā mare in sē resorbērī et tremōre terrae quasi repellī vidēbāmus. Certē prōcesserat lītus, multaque animālia maris siccīs harēnīs dētinēbat. Ab alterō latere nūbēs ātra et horrenda, igneī spīritūs tortīs vibrātīsque discursibus rupta, in longās flammārum figūrās dēhīscēbat; fulguribus illae et similēs et maiōrēs erant.',
    translation: 'It was already the first hour of the day, and the light was still faint and, as it were, sickly. The buildings around us were already shaking, and although we were in the open, the space was narrow, and the fear of a collapse was great and certain. Only then did we decide to leave the town; a stunned crowd follows us, and, preferring another’s plan to its own (which in a panic looks like prudence), presses on us and pushes us forward in a huge column as we go. Once out of the buildings, we stop. There we experience many things to wonder at, many terrors. For the carts we had ordered to be brought out were moving in opposite directions, although on perfectly level ground, and would not stay in the same place even when wedged with stones. Besides, we saw the sea being sucked back into itself and, as it were, driven back by the earthquake. Certainly the shore had advanced and was holding many sea creatures on the dry sand. On the other side a black and terrible cloud, torn by twisting, quivering bursts of fiery vapour, gaped open in long shapes of flame; they were like lightning, but larger.',
    notes: [
      { ref: 'Iam hōra diēī prīma, et adhūc dubius et quasi languidus diēs', html: 'No verbs: supply <span class="la">erat</span>. <span class="la">hōra prīma</span>: the first hour after sunrise. Pliny’s nominal style, short phrases without verbs, conveys the tension.' },
      { ref: 'Iam quassātīs circumiacentibus tēctīs', html: 'Ablative absolute (Lecture XXV): “the surrounding buildings having been shaken”. <span class="la">quamquam in apertō locō, angustō tamen</span>: “although (we were) in an open place, yet a narrow one”.' },
      { ref: 'Tum dēmum excēdere oppidō vīsum', html: '<span class="la">vīsum</span> [<span class="la">est</span>]: “it seemed best, it was decided”, impersonal use of <span class="la">videor</span>. <span class="la">oppidō</span>: ablative of separation, “from the town”. <span class="la">tum dēmum</span>: “only then”.' },
      { ref: 'sequitur vulgus attonitum', html: '<span class="la">sequitur</span>: present of the deponent <span class="la">sequor</span>, “follows”. <span class="la">vulgus</span> is neuter, so <span class="la">attonitum</span> agrees in the neuter.' },
      { ref: 'quodque in pavōre simile prūdentiae, aliēnum cōnsilium suō praefert', html: '<span class="la">quod</span> refers forward to the whole idea of following another’s plan: “and, which in panic resembles prudence, it prefers …”. <span class="la">praeferre</span> + accusative and dative: “prefer X to Y” (Lecture XXXII, <span class="la">ferō</span>; dative with compounds, Lecture XXXVI). <span class="la">simile prūdentiae</span>: <span class="la">similis</span> + dative or genitive.' },
      { ref: 'ingentīque agmine abeuntēs premit et impellit', html: '<span class="la">abeuntēs</span>: present participle of <span class="la">abeō</span>, used as a noun, “(us) as we leave” (<span class="la">eō</span>, Lecture XXXVIII). <span class="la">ingentī agmine</span>: ablative of manner, “in a huge column”.' },
      { ref: 'Ēgressī tēcta cōnsistimus', html: 'Deponent participle, active: “having gone out of the buildings”. <span class="la">ēgredior</span> takes here a direct object <span class="la">tēcta</span>, a construction found in the historians and in imperial prose; the commoner classical form is <span class="la">ē tēctīs</span>.' },
      { ref: 'Multa ibi mīranda, multās formīdinēs patimur', html: '<span class="la">mīranda</span>: gerundive of <span class="la">mīror</span>, “things to be wondered at” (Lecture XL). <span class="la">patimur</span>: “we experience, suffer”, deponent. One verb governs both objects.' },
      { ref: 'Nam vehicula quae prōdūcī iusserāmus', html: '<span class="la">prōdūcī</span>: present passive infinitive, “to be brought out”; with <span class="la">iubeō</span> the passive infinitive is used when the person ordered is not named.' },
      { ref: 'nē lapidibus quidem fulta in eōdem vestīgiō quiēscēbant', html: '<span class="la">nē … quidem</span>: “not even”, enclosing the word stressed. <span class="la">fulta</span>: perfect participle of <span class="la">fulciō</span>, “propped, wedged”. <span class="la">in eōdem vestīgiō</span>: “in the same spot”.' },
      { ref: 'Praetereā mare in sē resorbērī et tremōre terrae quasi repellī vidēbāmus', html: 'Accusative and infinitive after <span class="la">vidēbāmus</span> (Lecture XXVI): “we saw the sea being sucked back into itself and driven back”. <span class="la">tremōre terrae</span>: “by the earthquake”; <span class="la">tremor terrae</span> is the regular Latin expression, like German <em>Erdbeben</em>.' },
      { ref: 'Certē prōcesserat lītus, multaque animālia maris siccīs harēnīs dētinēbat', html: '<span class="la">prōcesserat lītus</span>: “the shore had moved forward”, i.e. the water had withdrawn. <span class="la">siccīs harēnīs</span>: ablative of place, “on the dry sands”.' },
      { ref: 'igneī spīritūs tortīs vibrātīsque discursibus rupta', html: '<span class="la">igneī spīritūs</span>: genitive singular, “of fiery breath (vapour)”. <span class="la">tortīs vibrātīsque discursibus</span>: ablative of cause, “by twisting and quivering rushes”. <span class="la">rupta</span>: “torn open”, agreeing with <span class="la">nūbēs</span>.' },
      { ref: 'fulguribus illae et similēs et maiōrēs erant', html: '<span class="la">illae</span> [<span class="la">figūrae</span>]. <span class="la">fulguribus</span>: dative with <span class="la">similēs</span> and ablative of comparison with <span class="la">maiōrēs</span> at once: “like lightning flashes and larger (than them)”.' }
    ],
    glosses: {
      'iam': 'now, already', 'hōra': 'hour (nom.)', 'diēī': 'gen. of diēs: of the day', 'prīma': 'first', 'et': 'and', 'adhūc': 'still', 'dubius': 'doubtful, faint', 'quasi': 'as if, as it were', 'languidus': 'sickly, feeble', 'diēs': 'day, daylight (nom.)',
      'quassātīs': 'abl. pl. of quassātus: shaken', 'circumiacentibus': 'abl. pl. of circumiacēns: surrounding', 'tēctīs': 'abl. pl. of tēctum: buildings', 'quamquam': 'although', 'in': 'in (+ abl.); into, towards (+ acc.)', 'apertō': 'abl. of apertus: open', 'locō': 'abl. of locus: place', 'angustō': 'abl. of angustus: narrow', 'tamen': 'yet', 'magnus': 'great', 'certus': 'certain', 'ruīnae': 'gen. of ruīna: of collapse', 'metus': 'fear (nom.)',
      'tum': 'then', 'dēmum': 'only, at last', 'excēdere': 'inf. of excēdō: to leave', 'oppidō': 'abl. of oppidum: from the town', 'vīsum': 'it seemed best (vīsum est)', 'sequitur': '3rd sg. of sequor: follows', 'vulgus': 'crowd (nom.)', 'attonitum': 'stunned (nom. n.)', 'quodque': 'and (a thing) which (quod + -que)', 'pavōre': 'abl. of pavor: panic', 'simile': 'like, resembling (nom. n.)', 'prūdentiae': 'dat. of prūdentia: to prudence', 'aliēnum': 'another’s (acc. n.)', 'cōnsilium': 'plan (acc.)', 'suō': 'dat. n. of suus: (to) its own', 'praefert': '3rd sg. of praeferō: prefers', 'ingentīque': 'and huge (abl. + -que)', 'agmine': 'abl. of agmen: in a column', 'abeuntēs': 'acc. pl. of abiēns: (us) leaving', 'premit': '3rd sg. of premō: presses', 'impellit': '3rd sg. of impellō: pushes on',
      'ēgressī': 'nom. pl. of ēgressus (ēgredior): having gone out', 'tēcta': 'acc. pl. of tēctum: buildings', 'cōnsistimus': '1st pl. of cōnsistō: we stop', 'multa': 'many things', 'ibi': 'there', 'mīranda': 'things to be wondered at (gerundive of mīror)', 'multās': 'acc. pl. f. of multus: many', 'formīdinēs': 'acc. pl. of formīdō: terrors', 'patimur': '1st pl. of patior: we experience',
      'nam': 'for', 'vehicula': 'nom. pl. of vehiculum: carts', 'quae': 'which', 'prōdūcī': 'pres. pass. inf. of prōdūcō: to be brought out', 'iusserāmus': 'plupf. 1st pl. of iubeō: we had ordered', 'plānissimō': 'abl. of plānissimus: very level', 'campō': 'abl. of campus: ground, plain', 'contrāriās': 'acc. pl. f. of contrārius: opposite', 'partēs': 'acc. pl. of pars: directions', 'agēbantur': 'impf. pass. 3rd pl. of agō: were driven', 'ac': 'and', 'nē': 'not (nē … quidem: not even)', 'lapidibus': 'abl. pl. of lapis: with stones', 'quidem': 'even (with nē)', 'fulta': 'nom. pl. n. of fultus (fulciō): propped', 'eōdem': 'abl. of īdem: the same', 'vestīgiō': 'abl. of vestīgium: spot', 'quiēscēbant': 'impf. 3rd pl. of quiēscō: stayed still',
      'praetereā': 'besides', 'mare': 'sea (acc.)', 'sē': 'itself', 'resorbērī': 'pres. pass. inf. of resorbeō: to be sucked back', 'tremōre': 'abl. of tremor: by the tremor', 'terrae': 'gen. of terra: of the earth', 'repellī': 'pres. pass. inf. of repellō: to be driven back', 'vidēbāmus': 'impf. 1st pl. of videō: we saw',
      'certē': 'certainly', 'prōcesserat': 'plupf. 3rd sg. of prōcēdō: had advanced', 'lītus': 'shore (nom.)', 'multaque': 'and many (+ -que)', 'animālia': 'acc. pl. of animal: creatures', 'maris': 'gen. of mare: of the sea', 'siccīs': 'abl. pl. of siccus: dry', 'harēnīs': 'abl. pl. of harēna: on the sands', 'dētinēbat': 'impf. 3rd sg. of dētineō: was holding',
      'ab': 'from, on (+ abl.)', 'alterō': 'abl. of alter: the other', 'latere': 'abl. of latus: side', 'nūbēs': 'cloud (nom.)', 'ātra': 'black', 'horrenda': 'terrible', 'igneī': 'gen. of igneus: fiery', 'spīritūs': 'gen. of spīritus: of breath, vapour', 'tortīs': 'abl. pl. of tortus: twisting', 'vibrātīsque': 'and quivering (abl. pl. + -que)', 'discursibus': 'abl. pl. of discursus: by rushes', 'rupta': 'torn (nom. f.)', 'longās': 'acc. pl. f. of longus: long', 'flammārum': 'gen. pl. of flamma: of flames', 'figūrās': 'acc. pl. of figūra: shapes', 'dēhīscēbat': 'impf. 3rd sg. of dēhīscō: gaped open',
      'fulguribus': 'dat./abl. pl. of fulgur: lightning flashes', 'illae': 'they (f. pl.)', 'similēs': 'like', 'maiōrēs': 'larger', 'erant': 'were'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Why did they decide to leave the town?', options: ['They feared the buildings would collapse', 'The uncle had told them to', 'The sea was rising', 'The friend from Spain returned'], answer: 0, explain: 'magnus et certus ruīnae metus.' },
      { id: 'r2', type: 'mc', prompt: 'What did the crowd do?', options: ['Followed them and pushed them along', 'Blocked the road', 'Stayed in the town', 'Went to the harbour'], answer: 0, explain: 'sequitur vulgus attonitum … abeuntēs premit et impellit.' },
      { id: 'r3', type: 'mc', prompt: 'What was strange about the carts?', options: ['They moved in opposite directions on level ground', 'They had no horses', 'They were on fire', 'They were full of ash'], answer: 0, explain: 'in contrāriās partēs agēbantur.' },
      { id: 'r4', type: 'mc', prompt: 'What did the shapes in the cloud resemble?', options: ['Lightning, but larger', 'Trees', 'Waves', 'Birds'], answer: 0, explain: 'fulguribus illae et similēs et maiōrēs erant.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">cōnābimur</span>:', options: ['we shall try', 'we shall be tried', 'we tried', 'we are trying'], answer: 0, explain: 'Future of cōnor.' },
      { id: 't2', type: 'mc', prompt: 'Which form of a deponent has passive meaning?', options: ['the gerundive (hortandus)', 'the perfect participle (hortātus)', 'the present participle (hortāns)', 'the future participle (hortātūrus)'], answer: 0, explain: 'hortandus: to be urged.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Officiō fūnctus est.</span>', options: ['He did his duty.', 'He was killed by his duty.', 'He fled his duty.', 'He is doing his duty.'], answer: 0, explain: 'fungor + ablative.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Puer Rōmae nāt___ est.</span>', hint: 'born', answers: ['us'], full: 'Puer Rōmae nātus est.', explain: 'nāscor, nāscī, nātus sum.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Lūcius magistrum ver___.</span>', hint: 'respects (present)', answers: ['ētur', 'etur'], full: 'Lūcius magistrum verētur.', explain: 'vereor, verēris, verētur.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Rōmānī urbe potītī sunt.', model: 'The Romans took possession of the city.', accepted: ['romans took possession of city', 'romans gained possession of city', 'romans captured city', 'romans took city', 'romans seized city', 'romans gained control of city', 'romans got control of city', 'romans have taken possession of city'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'they set out (perfect, proficīscor; m.)', model: 'profectī sunt', accepted: ['profectī sunt'], explain: 'Deponent perfect; the participle agrees with the masculine plural subject: profectī.' },
      { id: 't8', type: 'mc', prompt: '<span class="la">gāvīsus est</span> is the perfect of:', options: ['gaudeō', 'gaudior', 'gāvīsor', 'audeō'], answer: 0, explain: 'gaudeō, gaudēre, gāvīsus sum: semi-deponent.' },
      { id: 't9', type: 'mc', prompt: 'In Pliny 6.16.5, <span class="la">Ūsus ille sōle</span> means:', options: ['He had been in the sun', 'The sun used him', 'He used to love the sun', 'He was useful in the sun'], answer: 0, explain: 'ūtor + ablative.' },
      { id: 't10', type: 'mc', prompt: 'What does Pliny say about the crowd’s behaviour in panic?', options: ['Following another’s plan looks like prudence', 'Panic makes people brave', 'Crowds always choose well', 'They refused to move'], answer: 0, explain: 'quodque in pavōre simile prūdentiae, aliēnum cōnsilium suō praefert.' },
      { id: 't11', type: 'mc', prompt: 'Present infinitive of <span class="la">patior</span>:', options: ['patī', 'patīrī', 'patiere', 'passus esse'], answer: 0, explain: '3rd conjugation -iō: patī.' }
    ]
  },

  reference: [
    { title: 'Deponents by conjugation', headers: ['Present', 'Infinitive', 'Perfect', 'Meaning'], rows: [
      ['hortor', 'hortārī', 'hortātus sum', 'urge'], ['vereor', 'verērī', 'veritus sum', 'fear'], ['loquor', 'loquī', 'locūtus sum', 'speak'], ['sequor', 'sequī', 'secūtus sum', 'follow'], ['patior', 'patī', 'passus sum', 'suffer'], ['ēgredior', 'ēgredī', 'ēgressus sum', 'go out'], ['morior', 'morī', 'mortuus sum', 'die'], ['potior', 'potīrī', 'potītus sum', 'gain possession of']
    ] },
    { title: 'Participles of a deponent (hortor)', headers: ['Participle', 'Form', 'Meaning'], rows: [
      ['Present', 'hortāns', 'urging'], ['Perfect', 'hortātus', 'having urged'], ['Future', 'hortātūrus', 'about to urge'], ['Gerundive', 'hortandus', 'to be urged']
    ] },
    { title: 'Semi-deponents', headers: ['Present', 'Infinitive', 'Perfect', 'Meaning'], rows: [
      ['audeō', 'audēre', 'ausus sum', 'dare'], ['gaudeō', 'gaudēre', 'gāvīsus sum', 'rejoice'], ['soleō', 'solēre', 'solitus sum', 'be accustomed'], ['fīdō', 'fīdere', 'fīsus sum', 'trust']
    ] },
    { title: 'Deponents with the ablative', headers: ['Verb', 'Meaning', 'Example'], rows: [
      ['ūtor', 'use', 'gladiō ūtitur'], ['fruor', 'enjoy', 'vītā fruimur'], ['fungor', 'perform', 'officiō fungitur'], ['potior', 'gain possession of', 'urbe potītī sunt'], ['vēscor', 'feed on', 'carne vēscuntur']
    ] }
  ]
});
