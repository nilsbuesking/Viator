/*
 * Latin — Lecture XXXVI: the dative with adjectives, with special intransitive verbs, and with
 * compound verbs; impersonal passive of dative verbs.
 * Authentic reading: Pliny, Letters 6.20.13–15.
 * Content file only. Source texts (Pliny, Letters 6.16 and 6.20; Catullus 5) checked against the texts
 * supplied by Nils; length marks editorial. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-36',
  number: 36,
  title: 'Cālīgō tergīs imminēbat',
  subtitle: 'The dative with adjectives (similis, amīcus, idōneus); with special verbs (crēdō, pāreō, parcō, persuādeō); with compound verbs (immineō, dēsum, praesum); mihi crēditur; authentic reading: Pliny 6.20.13–15',
  minutes: 70,

  intro: `
    <p>This lecture is one where a German speaker has an advantage. Latin, like German, has a group of verbs and adjectives that take the dative where English has a plain object: <span class="la">pāreō patrī</span>, <em>ich gehorche dem Vater</em>; <span class="la">similis patrī</span>, <em>dem Vater ähnlich</em>. Many of the Latin and German lists overlap, and the passive works in the same way: <span class="la">mihi crēditur</span>, <em>mir wird geglaubt</em>.</p>
    <p>The overlap is not complete, and the exceptions are where the traps are: Latin <span class="la">persuādeō</span>, <span class="la">invideō</span>, <span class="la">parcō</span> take the dative where German <em>überzeugen, beneiden, schonen</em> take the accusative; and Latin <span class="la">iuvō</span>, “help”, takes the accusative where German <em>helfen</em> takes the dative.</p>
    <p>A third group are compound verbs: many verbs prefixed with <span class="la">ad-, ante-, in-, inter-, ob-, prae-, sub-, super-</span> take a dative of the person or thing affected. Pliny’s <span class="la">cālīgō tergīs imminēbat</span>, “the darkness hung over our backs”, is one.</p>
    <p>The reading is the darkness on the road from Misenum, and the voices in it.</p>
  `,

  background: [
    {
      title: 'Nox quālis in locīs clausīs',
      html: `
        <p>Pliny turns off the road so as not to be trampled by the crowd, and night falls: “not like a moonless or cloudy night, but like the dark of a closed room when the lamp has gone out”. In the blackness he hears women wailing, children crying, men shouting, people calling and recognising one another only by their voices. Some pray for death out of fear of death; many raise their hands to the gods; more say there are no gods any longer and that this is the last, eternal night of the world.</p>
        <p>The idea of a final night may echo philosophical teaching. The Stoics held that the world would end periodically in a conflagration, and Seneca discusses the end of the world in his <em>Natural Questions</em>. Pliny presents it as the belief of the frightened many (<span class="la">plūrēs</span>), not his own; whether he has any doctrine in mind is not clear from the text.</p>
      `
    },
    {
      title: 'The Last Day of Pompeii',
      html: `
        <p>Karl Bryullov’s huge painting (1830–33) drew directly on Pliny’s letters, which the painter studied before visiting the excavations. It shows Pompeii, not Misenum, but one group in the right foreground, a young man urging his fallen mother to get up, is usually identified as Pliny and his mother, transplanted from the scene in this reading and the last.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg/960px-Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg/500px-Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg|https://upload.wikimedia.org/wikipedia/commons/e/ec/Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg" alt="Large painting of a panicking crowd in a street of Pompeii under a red sky, with statues falling"><figcaption>Karl Bryullov, <em>The Last Day of Pompeii</em> (1830–33; State Russian Museum, St Petersburg). The group at the right, a young man helping his fallen mother, is usually identified as Pliny and his mother. <span class="credit">Painting, public domain · <a href="https://commons.wikimedia.org/wiki/File:Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Dativ in Latin and German',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Latin (+ dat.)</th><th>German</th><th></th></tr></thead>
          <tbody>
            <tr><td class="la">crēdō</td><td><em>glauben</em> + Dat.</td><td>same</td></tr>
            <tr><td class="la">pāreō</td><td><em>gehorchen</em> + Dat.</td><td>same</td></tr>
            <tr><td class="la">serviō</td><td><em>dienen</em> + Dat.</td><td>same</td></tr>
            <tr><td class="la">noceō</td><td><em>schaden</em> + Dat.</td><td>same</td></tr>
            <tr><td class="la">placeō</td><td><em>gefallen</em> + Dat.</td><td>same</td></tr>
            <tr><td class="la">ignōscō</td><td><em>verzeihen</em> + Dat.</td><td>same</td></tr>
            <tr><td class="la">faveō</td><td><em>gewogen sein</em> + Dat.</td><td>same</td></tr>
            <tr><td class="la">persuādeō</td><td><em>überzeugen</em> + Akk.</td><td><strong>trap</strong></td></tr>
            <tr><td class="la">invideō</td><td><em>beneiden</em> + Akk.</td><td><strong>trap</strong></td></tr>
            <tr><td class="la">parcō</td><td><em>schonen</em> + Akk.</td><td><strong>trap</strong></td></tr>
            <tr><td class="la">imperō</td><td><em>befehlen</em> + Dat.</td><td>same</td></tr>
            <tr><td class="la">iuvō</td><td>(+ acc.!) <em>helfen</em> + Dat.</td><td><strong>trap</strong> in reverse</td></tr>
          </tbody>
        </table></div>
        <p>The overlap is not a coincidence of meaning only: in both languages the dative marks the person who is affected by, or interested in, the action rather than the thing acted upon. But the two languages drew the line in different places, so learn the Latin list as Latin.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Pāret aegrē incūsatque sē, quod mē morētur.</p>
    <p>“She obeys reluctantly and blames herself for slowing me down.” Pliny, <em>Letters</em> 6.20.12 (Lecture XXXIV), checked against the text Nils supplied; length marks added. <span class="la">pāreō</span> takes the dative; here the person obeyed (<span class="la">mihi</span>) is understood.</p>
    <p>Other datives from the readings:</p>
    <ul>
      <li><span class="la">aliēnum cōnsilium suō praefert</span> (6.20.7): “prefers another’s plan to its own”, dative with the compound <span class="la">praeferō</span>.</li>
      <li><span class="la">ab iīs quī līminī obversābantur</span> (6.16.13, Lecture XXXII): “by those who were moving about at the threshold”, dative with a compound of <span class="la">ob-</span>.</li>
      <li><span class="la">nē quis malus invidēre possit</span> (Catullus 5.12, Lecture XXIX): <span class="la">invideō</span>, here used without an object; with one it would take the dative, <span class="la">nōbīs invidēre</span>.</li>
      <li><span class="la">nostrae</span> [<span class="la">salūtī</span>] <span class="la">cōnsulerēmus</span> (6.20.10): <span class="la">cōnsulō</span> + dative, “look after”; with the accusative it means “consult”.</li>
    </ul>
  `,

  pronunciation: `
    <h3>persuādeō, persuāsit</h3>
    <p><span class="la">u</span> after <span class="la">s</span> here is a consonant, as in <span class="la">suāvis</span>: <span class="la">per-SUĀ-de-ō</span>, four syllables, with <span class="la">suā</span> as one: “per-swah-”. German speakers may think of the <em>w</em> in <em>Schwester</em>.</p>
    <h3>pāreō, parcō, parō</h3>
    <p>Three different verbs: <span class="la">pāreō</span> (long <span class="la">ā</span>) “obey”, <span class="la">parcō</span> “spare”, <span class="la">parō</span> “prepare”. And <span class="la">pariō</span> “give birth”. Length marks keep them apart.</p>
  `,

  grammar: [
    {
      title: '1. The dative with adjectives',
      html: `
        <p>Adjectives of likeness, nearness, fitness, friendliness, usefulness and their opposites take the dative, as their German equivalents often do:</p>
        <ul>
          <li><span class="la">similis, dissimilis</span>: like, unlike (also + gen.)</li>
          <li><span class="la">amīcus, inimīcus</span>: friendly, hostile</li>
          <li><span class="la">cārus, grātus</span>: dear, pleasing</li>
          <li><span class="la">fidēlis</span>: faithful (<em>treu</em> + Dat.)</li>
          <li><span class="la">idōneus, ūtilis</span>: suitable, useful (<em>nützlich</em> + Dat.)</li>
          <li><span class="la">proximus, propinquus, vīcīnus</span>: nearest, near, neighbouring</li>
          <li><span class="la">pār, aequus</span>: equal</li>
        </ul>
        <p><span class="la">Fīlius patrī similis est.</span> The son is like his father; <em>der Sohn ist dem Vater ähnlich</em>. <span class="la">Hic locus castrīs idōneus est.</span> This place is suitable for a camp.</p>
      `
    },
    {
      title: '2. The dative with special verbs',
      html: `
        <p>A group of verbs that translate into English with a direct object are intransitive in Latin and take the dative. Most of them mean <em>favour, help, please, trust, believe, obey, serve, resist, envy, threaten, pardon, spare, persuade, command</em> and their opposites:</p>
        <ul>
          <li><span class="la">crēdō, cōnfīdō, fīdō</span>: believe, trust</li>
          <li><span class="la">faveō, studeō</span>: favour, be eager for</li>
          <li><span class="la">ignōscō, parcō</span>: pardon, spare</li>
          <li><span class="la">imperō, pāreō, serviō</span>: command, obey, serve</li>
          <li><span class="la">invideō, noceō, resistō, minor</span>: envy, harm, resist, threaten</li>
          <li><span class="la">placeō, displiceō, persuādeō</span>: please, displease, persuade</li>
        </ul>
        <ul>
          <li><span class="la">Mīlitēs ducī pārent.</span> The soldiers obey the general.</li>
          <li><span class="la">Hostibus pepercit.</span> He spared the enemy.</li>
          <li><span class="la">Mihi persuāsit ut manērem.</span> He persuaded me to stay.</li>
        </ul>
        <p><span class="la">imperō</span> and <span class="la">persuādeō</span> often add an <span class="la">ut</span>-clause (Lecture XXXVII). <span class="la">studeō</span>, “be eager for, study”, takes the dative too: <span class="la">litterīs studēre</span>, to study literature.</p>
      `
    },
    {
      title: '3. The passive of dative verbs',
      html: `
        <p>Because these verbs have no accusative object, they have no personal passive. Latin uses an impersonal passive, keeping the dative:</p>
        <ul>
          <li><span class="la">Mihi crēditur.</span> I am believed (literally “it is believed to me”). German <em>Mir wird geglaubt.</em></li>
          <li><span class="la">Eī persuāsum est.</span> He was persuaded.</li>
          <li><span class="la">Hostibus parcitur.</span> The enemy are spared.</li>
        </ul>
        <p>German does exactly this (<em>Mir wird geholfen</em>, never <em>*Ich werde geholfen</em>), so this is one construction a German speaker gets right by instinct. English cannot: “I am believed” makes “I” the subject.</p>
      `
    },
    {
      title: '4. The dative with compound verbs',
      html: `
        <p>Many verbs compounded with <span class="la">ad, ante, con, in, inter, ob, post, prae, prō, sub, super</span> take a dative of the person or thing the prefix points at:</p>
        <ul>
          <li><span class="la">Cālīgō tergīs imminēbat.</span> The darkness hung over our backs. (Pliny)</li>
          <li><span class="la">Caesar exercituī praeerat.</span> Caesar commanded the army (was in charge of).</li>
          <li><span class="la">Amīcīs nōn dēfuit.</span> He did not fail his friends.</li>
          <li><span class="la">Lēgātum castrīs praefēcit.</span> He put the legate in charge of the camp.</li>
          <li><span class="la">Cervīcālia capitibus imposita.</span> Pillows placed on their heads (Pliny 6.16.16).</li>
        </ul>
        <p>A transitive compound can take both an accusative and a dative: <span class="la">lēgātum castrīs praeficere</span>. Not every compound takes the dative, and when the preposition’s literal sense is strong Latin often repeats it instead (<span class="la">in urbem invādere</span>); dictionaries mark the construction.</p>
        <p><span class="la">sum</span> compounds: <span class="la">adsum</span> “be present (to help)”, <span class="la">dēsum</span> “be lacking, fail”, <span class="la">praesum</span> “be in charge of”, <span class="la">prōsum</span> “benefit”, <span class="la">obsum</span> “hinder”, all with the dative. <span class="la">prōsum</span> keeps a <span class="la">d</span> before vowels: <span class="la">prōdest, prōderam</span>.</p>
      `
    }
  ],

  vocab: [
    { id: 'faveo', head: 'faveō', la: 'faveō, favēre, fāvī, fautum (+ dat.)', pos: 'verb, 2nd conj.', en: 'favour, support', stress: 'FA-ve-ō · fa-VĒ-re', deriv: 'favour' },
    { id: 'ignosco', head: 'ignōscō', la: 'ignōscō, ignōscere, ignōvī, ignōtum (+ dat.)', pos: 'verb, 3rd conj.', en: 'pardon, forgive', stress: 'ig-NŌS-cō · ig-NŌS-ce-re', note: 'German verzeihen + Dat.' },
    { id: 'impero', head: 'imperō', la: 'imperō, imperāre, imperāvī, imperātum (+ dat.)', pos: 'verb, 1st conj.', en: 'command, order; demand', stress: 'IM-pe-rō · im-pe-RĀ-re', deriv: 'imperative, emperor', note: 'imperāre alicui ut …: order someone to … (Lecture XXXVII).' },
    { id: 'noceo', head: 'noceō', la: 'noceō, nocēre, nocuī, nocitum (+ dat.)', pos: 'verb, 2nd conj.', en: 'harm, hurt', stress: 'NO-ce-ō · no-CĒ-re', deriv: 'innocent, noxious', note: 'German schaden + Dat.' },
    { id: 'parco', head: 'parcō', la: 'parcō, parcere, pepercī, parsūrus (+ dat.)', pos: 'verb, 3rd conj.', en: 'spare; refrain from', stress: 'PAR-cō · PAR-ce-re', note: 'Trap: German schonen + Akk. Reduplicated perfect pepercī.' },
    { id: 'pareo', head: 'pāreō', la: 'pāreō, pārēre, pāruī (+ dat.)', pos: 'verb, 2nd conj.', en: 'obey', stress: 'PĀ-re-ō · pā-RĒ-re', note: 'German gehorchen + Dat. Not parō (prepare) or parcō (spare).' },
    { id: 'persuadeo', head: 'persuādeō', la: 'persuādeō, persuādēre, persuāsī, persuāsum (+ dat.)', pos: 'verb, 2nd conj.', en: 'persuade, convince', stress: 'per-SUĀ-de-ō · per-suā-DĒ-re', deriv: 'persuade', note: 'Trap: German überzeugen + Akk. Mihi persuāsum est: I am convinced.' },
    { id: 'studeo', head: 'studeō', la: 'studeō, studēre, studuī (+ dat.)', pos: 'verb, 2nd conj.', en: 'be eager for, be devoted to; study', stress: 'STU-de-ō · stu-DĒ-re', deriv: 'student, study', note: 'Pliny 6.16.5: studēbat, “he was working”.' },
    { id: 'immineo', head: 'immineō', la: 'immineō, imminēre (+ dat.)', pos: 'verb, 2nd conj.', en: 'overhang, threaten, be imminent', stress: 'im-MI-ne-ō · im-mi-NĒ-re', deriv: 'imminent', note: 'No perfect. Pliny 6.16.8: imminentī perīculō.' },
    { id: 'desum', head: 'dēsum', la: 'dēsum, deesse, dēfuī, dēfutūrus (+ dat.)', pos: 'verb, irregular', en: 'be lacking; fail (someone)', stress: 'DĒ-sum · de-ES-se', note: 'deest, deerat: before a vowel the prefix dē- is short (a vowel before a vowel shortens, as in moneō); the two vowels usually stay separate in prose, though poets often run them together.' },
    { id: 'idoneus', head: 'idōneus', la: 'idōneus, idōnea, idōneum (+ dat.)', pos: 'adjective, 1st/2nd decl.', en: 'suitable, fit', stress: 'i-DŌ-ne-us', note: 'Compares with magis, maximē (Lecture XXVIII).' },
    { id: 'utilis', head: 'ūtilis', la: 'ūtilis, ūtile (+ dat.)', pos: 'adjective, 3rd decl.', en: 'useful', stress: 'Ū-ti-lis', deriv: 'utility', note: 'From ūtor (Lecture XXXV). German nützlich + Dat.' },
    { id: 'turba', head: 'turba', la: 'turba, turbae', g: 'f', pos: 'noun, 1st decl.', en: 'crowd, throng; disorder', stress: 'TUR-ba', deriv: 'turbulent, disturb' },
    { id: 'coniunx', head: 'coniūnx', la: 'coniūnx, coniugis', g: 'm/f', pos: 'noun, 3rd decl.', en: 'spouse, husband, wife', stress: 'CON-iūnx · CON-iu-gis', deriv: 'conjugal', note: 'con + iungō, “join together”: the yoke-partner.' },
    { id: 'infans', head: 'īnfāns', la: 'īnfāns, īnfantis', g: 'm/f', pos: 'noun, 3rd decl.', en: 'infant, small child', stress: 'ĪN-fāns · īn-FAN-tis', deriv: 'infant, infantry', note: 'in- + fārī, “not (yet) speaking”.' },
    { id: 'parens', head: 'parēns', la: 'parēns, parentis', g: 'm/f', pos: 'noun, 3rd decl.', en: 'parent', stress: 'PA-rēns · pa-REN-tis', deriv: 'parent', note: 'From pariō, “give birth”. Genitive plural parentum.' },
    { id: 'precor', head: 'precor', la: 'precor, precārī, precātus sum', pos: 'verb, 1st conj. (deponent)', en: 'pray (for), beg', stress: 'PRE-cor · pre-CĀ-rī', deriv: 'pray, precarious' },
    { id: 'vix', head: 'vix', la: 'vix', pos: 'adverb', en: 'hardly, scarcely, only just', stress: 'VIX', note: 'vix … et: scarcely … when (Pliny 6.20.14).' }
  ],

  grammarCards: [
    { id: 'g36-adj', front: 'Adjectives with the dative', back: 'similis, amīcus, inimīcus, cārus, grātus, fidēlis, idōneus, ūtilis, proximus, pār' },
    { id: 'g36-verbs', front: 'Special verbs with the dative', back: 'crēdō, faveō, ignōscō, imperō, invideō, noceō, parcō, pāreō, persuādeō, placeō, resistō, serviō, studeō' },
    { id: 'g36-trap1', front: 'persuādeō, invideō, parcō vs German', back: 'Latin dative; German überzeugen, beneiden, schonen + Akk.' },
    { id: 'g36-trap2', front: 'iuvō vs German helfen', back: 'iuvō + accusative; helfen + Dativ' },
    { id: 'g36-pass', front: 'Mihi crēditur.', back: 'I am believed. (≈ mir wird geglaubt: impersonal passive)' },
    { id: 'g36-persuasum', front: 'Eī persuāsum est.', back: 'He was persuaded.' },
    { id: 'g36-compound', front: 'Dative with compounds', back: 'Many compounds of ad, ante, con, in, inter, ob, post, prae, prō, sub, super: Cālīgō tergīs imminēbat.' },
    { id: 'g36-praesum', front: 'Caesar exercituī praeerat.', back: 'Caesar was in command of the army.' },
    { id: 'g36-praeficio', front: 'Lēgātum castrīs praefēcit.', back: 'He put the legate in charge of the camp (acc. + dat.).' },
    { id: 'g36-sum', front: 'Compounds of sum with the dative', back: 'adsum, dēsum, praesum, prōsum (prōdest), obsum' },
    { id: 'g36-parco', front: 'parcō: principal parts', back: 'parcō, parcere, pepercī, parsūrus' },
    { id: 'g36-studeo', front: 'litterīs studēre', back: 'to study literature, be devoted to letters' },
    { id: 'g36-consulo', front: 'cōnsulō + dat. / + acc.', back: '+ dat.: look after; + acc.: consult' },
    { id: 'g36-caligo', front: 'dēnsa cālīgō tergīs imminēbat', back: 'a thick darkness hung over our backs (Pliny 6.20.13)' },
    { id: 'g36-nox', front: 'nox … nōn quālis illūnis aut nūbila, sed quālis in locīs clausīs lūmine exstīnctō', back: 'night, not like a moonless or cloudy one, but like that in a closed room when the lamp is out (Pliny 6.20.14)' },
    { id: 'g36-mortem', front: 'erant quī metū mortis mortem precārentur', back: 'there were some who prayed for death out of fear of death (Pliny 6.20.14)' },
    { id: 'g36-audires', front: 'Audīrēs ululātūs fēminārum', back: 'You could have heard the wailing of women (potential subjunctive; Pliny 6.20.14)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">Mīlitēs ducī pārent.</span>', options: ['The soldiers obey the general.', 'The general obeys the soldiers.', 'The soldiers prepare for the general.', 'The soldiers spare the general.'], answer: 0, explain: 'pāreō + dative.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">Mihi crēditur.</span>', options: ['I am believed.', 'I believe.', 'He believes me.', 'I am trusted with something.'], answer: 0, explain: 'Impersonal passive with the dative, like mir wird geglaubt.' },
    { id: 'e3', type: 'mc', prompt: 'Which verb takes the dative in Latin but the accusative in German?', options: ['persuādeō (überzeugen)', 'crēdō (glauben)', 'pāreō (gehorchen)', 'noceō (schaden)'], answer: 0, explain: 'jemanden überzeugen, but alicui persuādēre.' },
    { id: 'e4', type: 'mc', prompt: 'Which verb meaning “help” takes the accusative?', options: ['iuvō', 'subveniō', 'auxilior', 'succurrō'], answer: 0, explain: 'iuvō + acc.; the others take the dative.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Caesar exercituī praeerat.</span>', options: ['Caesar was in command of the army.', 'Caesar was in front of the army.', 'The army commanded Caesar.', 'Caesar was absent from the army.'], answer: 0, explain: 'praesum + dative.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Fīlius patrī similis est.</span>', options: ['The son is like his father.', 'The father is like his son.', 'The son is similar to a father.', 'The son resembles nobody.'], answer: 0, explain: 'similis + dative.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Puerī magistr___ pārent.</span>', hint: 'the teacher', answers: ['ō', 'o'], full: 'Puerī magistrō pārent.', explain: 'Dative with pāreō.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Victor hostib___ pepercit.</span>', hint: 'the enemy', answers: ['us'], full: 'Victor hostibus pepercit.', explain: 'parcō + dative.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Mārcus Lūci___ persuāsit.</span>', hint: 'Lucius', answers: ['ō', 'o'], full: 'Mārcus Lūciō persuāsit.', explain: 'persuādeō + dative.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Hic locus castr___ idōneus est.</span>', hint: 'for a camp', answers: ['īs', 'is'], full: 'Hic locus castrīs idōneus est.', explain: 'idōneus + dative.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Amīcus amīc___ nōn deest.</span>', hint: 'his friend', answers: ['ō', 'o'], full: 'Amīcus amīcō nōn deest.', explain: 'dēsum + dative.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Fēminae ___ crēditur.</span>', hint: 'not', answers: ['nōn', 'non'], full: 'Fēminae nōn crēditur.', explain: 'The woman is not believed: impersonal passive.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the present indicative of <span class="la">prōsum</span> (benefit) and <span class="la">dēsum</span>.', headers: ['prōsum', 'dēsum'], rows: [
      { label: '1st sg.', answers: ['prōsum', 'dēsum'] },
      { label: '2nd sg.', answers: ['prōdes', 'dees'] },
      { label: '3rd sg.', answers: ['prōdest', 'deest'] },
      { label: '1st pl.', answers: ['prōsumus', 'dēsumus'] },
      { label: '2nd pl.', answers: ['prōdestis', 'deestis'] },
      { label: '3rd pl.', answers: ['prōsunt', 'dēsunt'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the dative singular and plural.', headers: ['dat. sg.', 'dat. pl.'], rows: [
      { label: 'dux', answers: ['ducī', 'ducibus'] },
      { label: 'parēns', answers: ['parentī', 'parentibus'] },
      { label: 'coniūnx', answers: ['coniugī', 'coniugibus'] },
      { label: 'turba', answers: ['turbae', 'turbīs'] },
      { label: 'exercitus', answers: ['exercituī|exercitū', 'exercitibus'] },
      { label: 'rēs pūblica', answers: ['reī pūblicae', 'rēbus pūblicīs'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each verb to its meaning.', pairs: [
      ['parcō', 'spare'], ['pāreō', 'obey'], ['noceō', 'harm'], ['ignōscō', 'forgive'], ['faveō', 'favour']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Nēmō mihi umquam crēdit.', tokens: ['Nobody', 'ever', 'believes', 'me'], explain: 'crēdō + dative.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Hostibus pepercit.', model: 'He spared the enemy.', accepted: ['he spared enemy', 'she spared enemy', 'he spared enemies', 'he has spared enemy', 'he spared foe', 'he spared foes'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Mihi persuāsit ut manērem.', model: 'He persuaded me to stay.', accepted: ['he persuaded me to stay', 'he persuaded me to remain', 'she persuaded me to stay', 'he convinced me to stay', 'he persuaded me that i should stay'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Nēmō tibi invidet.', model: 'Nobody envies you.', accepted: ['nobody envies you', 'no one envies you', 'no-one envies you', 'no one is envious of you', 'nobody is envious of you'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'they obey the king', model: 'rēgī pārent', accepted: ['rēgī pārent'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'it harms me (noceō)', model: 'mihi nocet', accepted: ['mihi nocet'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'I am believed', model: 'mihi crēditur', accepted: ['mihi crēditur'] },
    { id: 'e23', type: 'mc', prompt: 'Why did Pliny turn off the road?', options: ['So as not to be trampled by the crowd in the dark', 'To go back to the house', 'To reach the harbour', 'To look for his uncle'], answer: 0, explain: 'nē in viā strātī comitantium turbā in tenebrīs obterāmur.' },
    { id: 'e24', type: 'mc', prompt: 'What did many people believe, according to Pliny?', options: ['That there were no gods left and this was the last night of the world', 'That the gods would save them', 'That the eruption was over', 'That Pliny’s uncle was alive'], answer: 0, explain: 'plūrēs nusquam iam deōs ūllōs aeternamque illam et novissimam noctem mundō interpretābantur.' },
    { id: 'e25', type: 'mc', prompt: 'In <span class="la">cālīgō tergīs imminēbat</span>, <span class="la">tergīs</span> is:', options: ['dative with the compound immineō', 'ablative of place', 'dative of possession', 'ablative of means'], answer: 0, explain: 'immineō (in + mineō) + dative.' }
  ],

  reading: {
    title: 'In tenebrīs (Plīnius, Epistulae 6.20.13–15)',
    note: 'Authentic text, unadapted: Pliny the Younger, Letters 6.20.13–15, from the copy Nils supplied; length marks added; the copy’s dashes around the description of the night printed as commas. Tap any word.',
    text: 'Iam cinis, adhūc tamen rārus. Respiciō: dēnsa cālīgō tergīs imminēbat, quae nōs torrentis modō īnfūsa terrae sequēbātur. “Dēflectāmus” inquam “dum vidēmus, nē in viā strātī comitantium turbā in tenebrīs obterāmur.” Vix cōnsīderāmus, et nox, nōn quālis illūnis aut nūbila, sed quālis in locīs clausīs lūmine exstīnctō. Audīrēs ululātūs fēminārum, īnfantum quirītātūs, clāmōrēs virōrum; aliī parentēs, aliī līberōs, aliī coniugēs vōcibus requīrēbant, vōcibus nōscitābant; hī suum cāsum, illī suōrum miserābantur; erant quī metū mortis mortem precārentur; multī ad deōs manūs tollere, plūrēs nusquam iam deōs ūllōs aeternamque illam et novissimam noctem mundō interpretābantur. Nec dēfuērunt quī fictīs mentītīsque terrōribus vēra perīcula augērent. Aderant quī Mīsēnī illud ruisse, illud ārdēre falsō sed crēdentibus nūntiābant.',
    translation: 'Now ash, though still thin. I look back: a thick darkness hung over our backs and followed us, pouring over the land like a torrent. “Let us turn aside,” I say, “while we can still see, so that we are not knocked down on the road and trampled in the darkness by the crowd coming with us.” We had scarcely sat down when night fell, not like a moonless or cloudy night, but like the darkness of a closed room when the lamp has been put out. You could have heard the wailing of women, the crying of small children, the shouting of men; some were calling for their parents, others for their children, others for their husbands or wives, recognising them only by their voices; some lamented their own fate, others the fate of their families; there were some who, from fear of death, prayed for death; many raised their hands to the gods; more declared that there were no gods anywhere any longer and that this was that eternal and final night of the world. Nor were there lacking people who increased the real dangers with invented and false terrors. Some arrived announcing that this part of Misenum had collapsed and that part was on fire: it was false, but it was believed.',
    notes: [
      { ref: 'Iam cinis, adhūc tamen rārus', html: 'No verb: supply <span class="la">incidēbat</span> or <span class="la">erat</span>. The compression continues the breathless style of the previous section.' },
      { ref: 'dēnsa cālīgō tergīs imminēbat', html: 'Dative with the compound <span class="la">immineō</span> (grammar section 4). <span class="la">tergīs</span>: “our backs”, plural because there are two of them.' },
      { ref: 'quae nōs torrentis modō īnfūsa terrae sequēbātur', html: '<span class="la">torrentis modō</span>: “in the manner of a torrent”, <span class="la">modō</span> + genitive. <span class="la">īnfūsa terrae</span>: “poured over the land”, dative with the compound <span class="la">īnfundō</span>. <span class="la">sequēbātur</span>: imperfect of the deponent <span class="la">sequor</span>. Volcanologists generally take this as a description of a pyroclastic density current reaching across the bay; that interpretation is widely accepted but not certain.' },
      { ref: '“Dēflectāmus” inquam “dum vidēmus, nē … obterāmur.”', html: '<span class="la">dēflectāmus</span>: jussive subjunctive, “let us turn aside” (Lecture XXIX). <span class="la">dum vidēmus</span>: “while we (still) see”, <span class="la">dum</span> + present indicative. <span class="la">nē … obterāmur</span>: negative purpose clause, “so that we are not trampled”. <span class="la">strātī</span>: “knocked down” (<span class="la">sternō</span>). <span class="la">comitantium turbā</span>: “by the crowd of those accompanying (us)”.' },
      { ref: 'Vix cōnsīderāmus, et nox', html: '<span class="la">vix … et</span>: “scarcely … when”. <span class="la">cōnsīderāmus</span>: pluperfect of <span class="la">cōnsīdō</span>, “sit down”, which has the perfect <span class="la">cōnsēdī</span> or <span class="la">cōnsīdī</span>; the copy has this second form. Do not confuse it with <span class="la">cōnsīderō</span>, “consider”. <span class="la">et nox</span> [<span class="la">fuit</span>]: “and night came”.' },
      { ref: 'nōn quālis illūnis aut nūbila, sed quālis in locīs clausīs lūmine exstīnctō', html: '<span class="la">quālis</span>: “such as” (Lecture XXXI). <span class="la">illūnis</span>: “moonless” (<span class="la">in- + lūna</span>). <span class="la">lūmine exstīnctō</span>: ablative absolute, “the light having been put out”.' },
      { ref: 'Audīrēs ululātūs fēminārum', html: '<span class="la">audīrēs</span>: imperfect subjunctive, potential: “you could have heard, one would have heard”. The generalising “you” draws the reader into the scene.' },
      { ref: 'vōcibus requīrēbant, vōcibus nōscitābant', html: 'Anaphora and parallelism: they sought them with their voices and recognised them by their voices. <span class="la">nōscitābant</span>: frequentative of <span class="la">nōscō</span>, “kept trying to recognise”.' },
      { ref: 'erant quī metū mortis mortem precārentur', html: '<span class="la">erant quī</span> + subjunctive: “there were people of the kind who …”, a relative clause of characteristic (Lecture XXXIX). <span class="la">metū mortis mortem</span>: the paradox is in the word order.' },
      { ref: 'multī ad deōs manūs tollere', html: 'Historic infinitive (Lecture XXXIV): <span class="la">tollere</span> = <span class="la">tollēbant</span>.' },
      { ref: 'plūrēs nusquam iam deōs ūllōs aeternamque illam et novissimam noctem mundō interpretābantur', html: 'Indirect statement with <span class="la">esse</span> understood: “more interpreted (it to mean) that there were no gods anywhere any longer and that (this was) the eternal and last night for the world”. <span class="la">mundō</span>: dative of reference (Lecture XXXIX), “for the world”. <span class="la">novissimus</span>: “newest”, hence “last”. <span class="la">interpretor</span> is deponent.' },
      { ref: 'Nec dēfuērunt quī fictīs mentītīsque terrōribus vēra perīcula augērent', html: '<span class="la">nec dēfuērunt quī</span> + subjunctive: “nor were there lacking people who …”, another clause of characteristic. <span class="la">mentītīs</span>: from the deponent <span class="la">mentior</span>, “lie”, but here with passive sense, “invented, false”, as some deponent participles are used.' },
      { ref: 'Aderant quī Mīsēnī illud ruisse, illud ārdēre falsō sed crēdentibus nūntiābant', html: '<span class="la">Mīsēnī illud … illud</span>: “that part of Misenum … that part”, partitive genitive. <span class="la">ruisse</span>: perfect infinitive of <span class="la">ruō</span>, “had collapsed”. <span class="la">falsō sed crēdentibus</span>: “falsely, but to people who believed”; <span class="la">crēdentibus</span> is dative after <span class="la">nūntiābant</span>.' }
    ],
    glosses: {
      'iam': 'now, already', 'cinis': 'ash (nom.)', 'adhūc': 'still', 'tamen': 'however', 'rārus': 'thin, sparse',
      'respiciō': '1st sg. of respiciō: I look back', 'dēnsa': 'thick', 'cālīgō': 'darkness, gloom (nom.)', 'tergīs': 'dat. pl. of tergum: over (our) backs', 'imminēbat': 'impf. 3rd sg. of immineō: hung over', 'quae': 'which', 'nōs': 'us', 'torrentis': 'gen. of torrēns: of a torrent', 'modō': 'in the manner (of)', 'īnfūsa': 'poured (nom. f. of īnfūsus)', 'terrae': 'dat. of terra: over the land', 'sequēbātur': 'impf. 3rd sg. of sequor: followed',
      'dēflectāmus': 'pres. subj. 1st pl. of dēflectō: let us turn aside', 'inquam': 'I say', 'dum': 'while', 'vidēmus': '1st pl. of videō: we see', 'nē': 'so that … not', 'in': 'on, in (+ abl.)', 'viā': 'abl. of via: road', 'strātī': 'nom. pl. of strātus (sternō): knocked down', 'comitantium': 'gen. pl. of comitāns: of those accompanying', 'turbā': 'abl. of turba: by the crowd', 'tenebrīs': 'abl. of tenebrae: darkness', 'obterāmur': 'pres. subj. pass. 1st pl. of obterō: we should be trampled',
      'vix': 'scarcely', 'cōnsīderāmus': 'plupf. 1st pl. of cōnsīdō: we had sat down', 'et': 'and; when', 'nox': 'night (nom.)', 'nōn': 'not', 'quālis': 'such as', 'illūnis': 'moonless', 'aut': 'or', 'nūbila': 'cloudy', 'sed': 'but', 'locīs': 'abl. pl. of locus: places', 'clausīs': 'abl. pl. of clausus: closed', 'lūmine': 'abl. of lūmen: light', 'exstīnctō': 'abl. of exstīnctus: put out',
      'audīrēs': 'impf. subj. 2nd sg. of audiō: you could have heard', 'ululātūs': 'acc. pl. of ululātus: wailing', 'fēminārum': 'gen. pl. of fēmina: of women', 'īnfantum': 'gen. pl. of īnfāns: of small children', 'quirītātūs': 'acc. pl. of quirītātus: crying', 'clāmōrēs': 'acc. pl. of clāmor: shouts', 'virōrum': 'gen. pl. of vir: of men',
      'aliī': 'some … others', 'parentēs': 'acc. pl. of parēns: parents', 'līberōs': 'acc. pl. of līberī: children', 'coniugēs': 'acc. pl. of coniūnx: spouses', 'vōcibus': 'abl. pl. of vōx: by voices', 'requīrēbant': 'impf. 3rd pl. of requīrō: were looking for', 'nōscitābant': 'impf. 3rd pl. of nōscitō: recognised',
      'hī': 'these, some', 'suum': 'their own', 'cāsum': 'acc. of cāsus: fate, misfortune', 'illī': 'those, others', 'suōrum': 'gen. pl. of suī: of their families', 'miserābantur': 'impf. 3rd pl. of miseror: lamented',
      'erant': 'there were', 'quī': 'people who', 'metū': 'abl. of metus: from fear', 'mortis': 'gen. of mors: of death', 'mortem': 'acc. of mors: death', 'precārentur': 'impf. subj. 3rd pl. of precor: prayed for',
      'multī': 'many', 'ad': 'to (+ acc.)', 'deōs': 'acc. pl. of deus: gods', 'manūs': 'acc. pl. of manus: hands', 'tollere': 'hist. inf. of tollō: raised', 'plūrēs': 'more (people)', 'nusquam': 'nowhere', 'ūllōs': 'acc. pl. of ūllus: any', 'aeternamque': 'and eternal (acc. f. + -que)', 'illam': 'that', 'novissimam': 'last (acc. f.)', 'noctem': 'acc. of nox: night', 'mundō': 'dat. of mundus: for the world', 'interpretābantur': 'impf. 3rd pl. of interpretor: interpreted',
      'nec': 'nor', 'dēfuērunt': 'perf. 3rd pl. of dēsum: were lacking', 'fictīs': 'abl. pl. of fictus: invented', 'mentītīsque': 'and false (abl. pl. of mentītus + -que)', 'terrōribus': 'abl. pl. of terror: with terrors', 'vēra': 'real (acc. pl. n.)', 'perīcula': 'acc. pl. of perīculum: dangers', 'augērent': 'impf. subj. 3rd pl. of augeō: increased',
      'aderant': 'impf. 3rd pl. of adsum: were present, arrived', 'mīsēnī': 'gen. of Mīsēnum: of Misenum', 'illud': 'that (part)', 'ruisse': 'perf. inf. of ruō: had collapsed', 'ārdēre': 'inf. of ārdeō: was burning', 'falsō': 'falsely', 'crēdentibus': 'dat. pl. of crēdēns: to people believing', 'nūntiābant': 'impf. 3rd pl. of nūntiō: announced'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What did Pliny see when he looked back?', options: ['A thick darkness following them like a torrent', 'His uncle’s ship', 'The town on fire', 'The crowd turning back'], answer: 0, explain: 'dēnsa cālīgō tergīs imminēbat, quae nōs torrentis modō īnfūsa terrae sequēbātur.' },
      { id: 'r2', type: 'mc', prompt: 'How does Pliny describe the darkness?', options: ['Like a closed room when the lamp is out', 'Like a moonless night', 'Like a cloudy night', 'Like twilight'], answer: 0, explain: 'nōn quālis illūnis aut nūbila, sed quālis in locīs clausīs lūmine exstīnctō.' },
      { id: 'r3', type: 'mc', prompt: 'How did people find one another?', options: ['By their voices', 'By torchlight', 'By touch', 'They did not'], answer: 0, explain: 'vōcibus requīrēbant, vōcibus nōscitābant.' },
      { id: 'r4', type: 'mc', prompt: 'What did some people falsely announce?', options: ['That parts of Misenum had collapsed or were burning', 'That the uncle had died', 'That the eruption was over', 'That ships had come'], answer: 0, explain: 'Aderant quī Mīsēnī illud ruisse, illud ārdēre falsō sed crēdentibus nūntiābant.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">Hostibus parcitur.</span>', options: ['The enemy are spared.', 'The enemy spare.', 'He spares the enemy’s things.', 'The enemy are prepared.'], answer: 0, explain: 'Impersonal passive of parcō.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">Litterīs studet.</span>', options: ['He studies literature.', 'He writes letters.', 'Letters please him.', 'He is studied by letters.'], answer: 0, explain: 'studeō + dative.' },
      { id: 't3', type: 'mc', prompt: 'Which adjective takes the dative?', options: ['idōneus', 'magnus', 'bonus', 'longus'], answer: 0, explain: 'idōneus, suitable (for).' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Fortūna fortib___ favet.</span>', hint: 'the brave', answers: ['us'], full: 'Fortūna fortibus favet.', explain: 'faveō + dative.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Lēgātum exercitu___ praefēcit.</span>', hint: 'the army', answers: ['ī', 'i'], full: 'Lēgātum exercituī praefēcit.', explain: 'praeficiō + acc. + dat.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Nōbīs nōn crēdunt.', model: 'They do not believe us.', accepted: ['they do not believe us', 'they don’t believe us', 'they dont believe us', 'they do not trust us', 'they don’t trust us', 'they dont trust us'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'I forgive you (sg.)', model: 'tibi ignōscō', accepted: ['tibi ignōscō', 'ignōscō tibi'] },
      { id: 't8', type: 'mc', prompt: 'German <em>Mir wird geholfen</em> has the same structure as Latin:', options: ['Mihi subvenītur.', 'Ego iuvor.', 'Mē iuvat.', 'Mihi iuvō.'], answer: 0, explain: 'Impersonal passive keeping the dative (subveniō + dat.).' },
      { id: 't9', type: 'mc', prompt: 'Why did Pliny suggest turning off the road?', options: ['To avoid being trampled by the crowd', 'To rest', 'To find his uncle', 'To hide from soldiers'], answer: 0, explain: 'nē in viā strātī … obterāmur.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">erant quī metū mortis mortem precārentur</span>:', options: ['there were some who prayed for death from fear of death', 'they prayed that death would not come', 'death feared them', 'nobody prayed'], answer: 0, explain: 'Pliny 6.20.14.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">prōsum</span> 3rd sg. present:', options: ['prōdest', 'prōest', 'prōsit', 'prōfuit'], answer: 0, explain: 'prōd- before vowels: prōdest.' }
    ]
  },

  reference: [
    { title: 'Dative with special verbs', headers: ['Latin', 'Meaning', 'German'], rows: [
      ['crēdō', 'believe', 'glauben + Dat.'], ['faveō', 'favour', 'gewogen sein + Dat.'], ['ignōscō', 'forgive', 'verzeihen + Dat.'], ['imperō', 'command', 'befehlen + Dat.'], ['invideō', 'envy', 'beneiden + Akk.'], ['noceō', 'harm', 'schaden + Dat.'], ['parcō', 'spare', 'schonen + Akk.'], ['pāreō', 'obey', 'gehorchen + Dat.'], ['persuādeō', 'persuade', 'überzeugen + Akk.'], ['placeō', 'please', 'gefallen + Dat.'], ['serviō', 'serve', 'dienen + Dat.'], ['studeō', 'be eager for', 'sich widmen + Dat.']
    ] },
    { title: 'Compounds of sum with the dative', headers: ['Verb', 'Meaning', '3rd sg.'], rows: [
      ['adsum', 'be present, help', 'adest'], ['dēsum', 'be lacking, fail', 'deest'], ['praesum', 'be in charge of', 'praeest'], ['prōsum', 'benefit', 'prōdest'], ['obsum', 'hinder', 'obest']
    ] },
    { title: 'Adjectives with the dative', headers: ['Latin', 'Meaning'], rows: [
      ['similis / dissimilis', 'like / unlike'], ['amīcus / inimīcus', 'friendly / hostile'], ['fidēlis', 'faithful'], ['idōneus', 'suitable'], ['ūtilis', 'useful'], ['proximus', 'nearest'], ['pār', 'equal']
    ] }
  ]
});
