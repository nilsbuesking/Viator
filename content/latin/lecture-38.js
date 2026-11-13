/*
 * Latin — Lecture XXXVIII: the irregular verb eō and its compounds; place where, to which, from which
 * (towns, domus, rūs, the locative); time when, within which, and how long.
 * Authentic reading: Pliny, Letters 6.20.16–20 (end of the letter).
 * Content file only. Source texts (Pliny, Letters 6.16 and 6.20) checked against the texts supplied by Nils;
 * length marks editorial. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-38',
  number: 38,
  title: 'Regressī Mīsēnum',
  subtitle: 'eō, īre, iī, itum and its compounds; Rōmam, Rōmae, Rōmā; domum, domī, domō; time when, within which, how long; authentic reading: Pliny 6.20.16–20',
  minutes: 70,

  intro: `
    <p>The verb <span class="la">eō</span>, “go”, is very short and very irregular: its stem is <span class="la">ī-</span> before consonants and <span class="la">e-</span> before vowels, so <span class="la">īs, it, īmus</span> but <span class="la">eō, eunt, eam</span>. Its compounds are everywhere: <span class="la">abeō</span> “go away”, <span class="la">exeō</span> “go out”, <span class="la">redeō</span> “go back”, <span class="la">pereō</span> “perish”, <span class="la">trānseō</span> “cross”. English stage directions still use two of its forms: <em>exit</em>, “he goes out”, and <em>exeunt</em>, “they go out”.</p>
    <p>The second topic is how Latin says where, where to, where from, when and for how long. Mostly with prepositions, as German does; but with names of towns and small islands, and with <span class="la">domus</span> “home” and <span class="la">rūs</span> “the country”, Latin uses the bare case: <span class="la">Rōmam</span> “to Rome”, <span class="la">Rōmae</span> “at Rome”, <span class="la">Rōmā</span> “from Rome”; <span class="la">domum</span> “home(wards)”, <span class="la">domī</span> “at home”. German has the same distinction in <em>nach Hause</em> and <em>zu Hause</em>.</p>
    <p>The reading is the end of Pliny’s second letter: the ash, the return of a sickly daylight, the anxious night back at Misenum, and his parting words to Tacitus.</p>
  `,

  background: [
    {
      title: 'Mūtāta omnia',
      html: `
        <p>When the darkness finally thinned “into something like smoke or mist”, real daylight returned, and the sun shone, but pale and yellowish, “as it usually is in an eclipse”. Everything the survivors saw was changed, covered in deep ash “as if with snow”. They went back to Misenum and spent a night between hope and fear: the tremors continued, and many people, driven half mad by terrifying prophecies, made light of their own and others’ misfortunes. Mother and son still would not leave until there was news of the uncle.</p>
        <p>Ash fall at Misenum, across the bay and some 30 km from the volcano, was light compared with Pompeii and Stabiae, where metres of pumice and ash buried the towns. Pliny’s account is nevertheless one of the earliest eyewitness descriptions of a large eruption in any literature.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/340th_Bombardment_Group_B-25_Mitchell_covered_with_ash_from_Mount_Vesuvius.jpg/960px-340th_Bombardment_Group_B-25_Mitchell_covered_with_ash_from_Mount_Vesuvius.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/340th_Bombardment_Group_B-25_Mitchell_covered_with_ash_from_Mount_Vesuvius.jpg/500px-340th_Bombardment_Group_B-25_Mitchell_covered_with_ash_from_Mount_Vesuvius.jpg|https://upload.wikimedia.org/wikipedia/commons/f/fb/340th_Bombardment_Group_B-25_Mitchell_covered_with_ash_from_Mount_Vesuvius.jpg" alt="Black-and-white photograph of a twin-engined bomber with its wings and the ground thickly covered in volcanic ash"><figcaption>Ash from the last eruption of Vesuvius, March 1944: an American bomber at an airfield near the volcano, under a layer of ash (US Army Air Forces photograph). Pliny: <span class="la">altō cinere tamquam nive obducta</span>. <span class="credit">Photograph, public domain (US military); details on the file page · <a href="https://commons.wikimedia.org/wiki/File:340th_Bombardment_Group_B-25_Mitchell_covered_with_ash_from_Mount_Vesuvius.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Nequāquam historiā digna',
      html: `
        <p>Pliny closes modestly: Tacitus will read this “not at all worthy of history” and not to be used in it, and must blame himself, who asked for it, if it seems unworthy even of a letter. The contrast between <span class="la">epistula</span> and <span class="la">historia</span> already appeared at the end of the first letter (6.16.22, Lecture XXXIII). The modesty is conventional: Pliny published both letters himself in his collection.</p>
        <p>Whether Tacitus used them we cannot know. Of his <em>Histories</em>, which covered AD 69 to 96, only the first four books and part of the fifth survive, reaching AD 70. The account of 79 is lost.</p>
      `
    },
    {
      title: 'zu Hause, nach Hause; den ganzen Tag',
      html: `
        <p>Latin <span class="la">domī</span> (at home) and <span class="la">domum</span> (homewards) match German <em>zu Hause</em> and <em>nach Hause</em>, a distinction English blurs (“at home”, “home”). <span class="la">domō</span>, “from home”, is German <em>von zu Hause</em>.</p>
        <p>German also uses the accusative for duration, as Latin does: <em>Er blieb den ganzen Tag</em>, <span class="la">Tōtum diem mānsit</span>; <em>Wir warteten eine Stunde</em>, <span class="la">Hōram exspectāvimus</span>. For a point in time German uses prepositions (<em>am dritten Tag</em>) or the genitive (<em>eines Tages, abends</em>); Latin uses the ablative (<span class="la">tertiō diē</span>).</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Erat Mīsēnī classemque imperiō praesēns regēbat. Nōnum Kal. Septembrēs hōrā ferē septimā māter mea indicat eī appārēre nūbem.</p>
    <p>“He was at Misenum, in command of the fleet in person. On 24 August, at about the seventh hour, my mother pointed out to him that a cloud was appearing.” Pliny, <em>Letters</em> 6.16.4 (Lecture XXVI), checked against the text Nils supplied; length marks added.</p>
    <ul>
      <li><span class="la">Mīsēnī</span>: locative, “at Misenum”.</li>
      <li><span class="la">hōrā ferē septimā</span>: ablative of time when, “at about the seventh hour”, i.e. early afternoon.</li>
      <li><span class="la">Nōnum Kal. Septembrēs</span>: short for <span class="la">ante diem nōnum Kalendās Septembrēs</span>, “on the ninth day before the Kalends of September”, counting inclusively: 24 August in the manuscripts (see the Dates page and Lecture XV on the disputed date).</li>
    </ul>
    <p>Later in the same letter, the duration of the darkness: <span class="la">Ubi diēs redditus (is ab eō quem novissimē vīderat tertius)</span> (6.16.20), “when daylight returned (the third from the last he had seen)”.</p>
  `,

  pronunciation: `
    <h3>eunt, iērunt, iit</h3>
    <p>Two vowels side by side are pronounced as separate syllables: <span class="la">E-unt, i-Ē-runt, I-it, re-DE-unt</span>. <span class="la">ī</span> + vowel shortens: <span class="la">iēns</span> but <span class="la">e-UN-tis</span> in the genitive.</p>
    <h3>rūs, rūrī, rūre</h3>
    <p>Long <span class="la">ū</span> throughout: <span class="la">RŪS, RŪ-rī</span>. German speakers can think of <em>Ruhe</em> for the vowel. English <em>rural</em> and <em>rustic</em> come from it.</p>
  `,

  grammar: [
    {
      title: '1. eō, īre, iī, itum',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Present</th><th>Imperfect</th><th>Future</th><th>Perfect</th><th>Pres. subj.</th><th>Impf. subj.</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">eō</td><td class="la">ībam</td><td class="la">ībō</td><td class="la">iī</td><td class="la">eam</td><td class="la">īrem</td></tr>
            <tr><th>2nd sg.</th><td class="la">īs</td><td class="la">ībās</td><td class="la">ībis</td><td class="la">īstī</td><td class="la">eās</td><td class="la">īrēs</td></tr>
            <tr><th>3rd sg.</th><td class="la">it</td><td class="la">ībat</td><td class="la">ībit</td><td class="la">iit</td><td class="la">eat</td><td class="la">īret</td></tr>
            <tr><th>1st pl.</th><td class="la">īmus</td><td class="la">ībāmus</td><td class="la">ībimus</td><td class="la">iimus</td><td class="la">eāmus</td><td class="la">īrēmus</td></tr>
            <tr><th>2nd pl.</th><td class="la">ītis</td><td class="la">ībātis</td><td class="la">ībitis</td><td class="la">īstis</td><td class="la">eātis</td><td class="la">īrētis</td></tr>
            <tr><th>3rd pl.</th><td class="la">eunt</td><td class="la">ībant</td><td class="la">ībunt</td><td class="la">iērunt</td><td class="la">eant</td><td class="la">īrent</td></tr>
          </tbody>
        </table></div>
        <p>The future is like a 1st/2nd conjugation future: <span class="la">ībō, ībis</span> (not <span class="la">*eam, *ēs</span>). The perfect is <span class="la">iī</span>, less often <span class="la">īvī</span>; <span class="la">ii-</span> + <span class="la">s</span> contracts: <span class="la">īstī, īstis, īsse</span>.</p>
        <p>Other forms: infinitive <span class="la">īre</span>; imperative <span class="la">ī, īte</span>; present participle <span class="la">iēns, euntis</span>; future participle <span class="la">itūrus</span>; gerund <span class="la">eundī</span> (Pliny: <span class="la">abeundī cōnsilium</span>). The impersonal passive <span class="la">ītur</span>, “people go” (Lecture XXII), appears in Virgil’s <span class="la">sīc ītur ad astra</span>.</p>
      `
    },
    {
      title: '2. Compounds of eō',
      html: `
        <ul>
          <li><span class="la">abeō</span> go away; <span class="la">adeō</span> go to, approach; <span class="la">exeō</span> go out; <span class="la">ineō</span> go in, begin; <span class="la">redeō</span> go back (with <span class="la">d</span>); <span class="la">subeō</span> go under, undergo</li>
          <li><span class="la">pereō</span> perish (“go through”, i.e. be lost); <span class="la">intereō</span> perish</li>
          <li><span class="la">trānseō</span> cross; <span class="la">praetereō</span> pass by, pass over; <span class="la">circumeō</span> go round: these can take a direct object (<span class="la">flūmen trānsīre</span>, to cross a river) and so have a personal passive (<span class="la">flūmen trānsītur</span>).</li>
        </ul>
        <p>All conjugate like <span class="la">eō</span>: <span class="la">abit, abeunt, abībit, abiit</span>; <span class="la">periit</span> “he has died” (Lecture XXXIV: <span class="la">sī periit</span>).</p>
      `
    },
    {
      title: '3. Place: where, to which, from which',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Ordinary nouns</th><th>Towns, small islands; domus, rūs</th></tr></thead>
          <tbody>
            <tr><td>Where</td><td class="la">in urbe</td><td class="la">Rōmae, Corinthī, Athēnīs, Carthāgine; domī, rūrī, humī</td></tr>
            <tr><td>To which</td><td class="la">in urbem, ad urbem</td><td class="la">Rōmam, Athēnās; domum, rūs</td></tr>
            <tr><td>From which</td><td class="la">ex urbe, ab urbe</td><td class="la">Rōmā, Athēnīs; domō, rūre</td></tr>
          </tbody>
        </table></div>
        <p>The <strong>locative</strong> case survives only in these words. It looks like the genitive in the 1st and 2nd declension singular (<span class="la">Rōmae, Corinthī, Mīsēnī</span>), like the ablative in the plural and in the 3rd declension (<span class="la">Athēnīs, Stabiīs, Carthāgine</span> or <span class="la">Carthāginī</span>).</p>
        <p><span class="la">ad</span> with a town name means “to the neighbourhood of”: <span class="la">ad Rōmam</span>, “to the outskirts of Rome”. Large islands and countries take prepositions: <span class="la">in Siciliam</span>, <span class="la">in Hispāniā</span>, <span class="la">ex Hispāniā</span> (Pliny 6.20.5).</p>
      `
    },
    {
      title: '4. Time: when, within which, how long',
      html: `
        <ul>
          <li><strong>Time when</strong>: ablative without preposition. <span class="la">eō diē</span> on that day; <span class="la">prīmā lūce</span> at first light; <span class="la">hōrā septimā</span> at the seventh hour; <span class="la">illā nocte</span> that night (Pliny 6.20.3).</li>
          <li><strong>Time within which</strong>: ablative. <span class="la">paucīs diēbus</span> within a few days; <span class="la">tribus annīs</span> in three years.</li>
          <li><strong>Duration</strong>: accusative, sometimes with <span class="la">per</span>. <span class="la">multōs annōs</span> for many years; <span class="la">per multōs diēs</span> for many days (Pliny 6.20.3); <span class="la">noctem exēgimus</span> we spent the night.</li>
        </ul>
        <p>“Ago” is <span class="la">abhinc</span> + accusative (<span class="la">abhinc trēs annōs</span>, “three years ago”) or <span class="la">ante</span> + ablative used adverbially: <span class="la">paucīs ante diēbus</span>, “a few days before”.</p>
      `
    }
  ],

  vocab: [
    { id: 'eo', head: 'eō', la: 'eō, īre, iī (īvī), itum', pos: 'verb, irregular', en: 'go', stress: 'E-ō · Ī-re', deriv: 'exit, transit, itinerary', note: 'īs, it, īmus, ītis, eunt; future ībō; subj. eam, īrem.' },
    { id: 'abeo', head: 'abeō', la: 'abeō, abīre, abiī, abitum', pos: 'verb, irregular', en: 'go away, depart', stress: 'AB-e-ō · ab-Ī-re', note: 'Pliny 6.20.20: abeundī cōnsilium, a plan of leaving.' },
    { id: 'exeo', head: 'exeō', la: 'exeō, exīre, exiī, exitum', pos: 'verb, irregular', en: 'go out, leave', stress: 'EX-e-ō · ex-Ī-re', deriv: 'exit', note: 'exitus, “way out” (Lecture XXXII).' },
    { id: 'pereo', head: 'pereō', la: 'pereō, perīre, periī, peritum', pos: 'verb, irregular', en: 'perish, die; be lost', stress: 'PE-re-ō · pe-RĪ-re', note: 'Serves as a passive of perdō, “destroy”.' },
    { id: 'transeo', head: 'trānseō', la: 'trānseō, trānsīre, trānsiī, trānsitum', pos: 'verb, irregular', en: 'go across, cross', stress: 'TRĀN-se-ō · trān-SĪ-re', deriv: 'transit, transition', note: 'Transitive: flūmen trānsīre.' },
    { id: 'ineo', head: 'ineō', la: 'ineō, inīre, iniī, initum', pos: 'verb, irregular', en: 'go into, enter; begin', stress: 'IN-e-ō · in-Ī-re', deriv: 'initial, initiate', note: 'cōnsilium inīre: to form a plan.' },
    { id: 'praetereo', head: 'praetereō', la: 'praetereō, praeterīre, praeteriī, praeteritum', pos: 'verb, irregular', en: 'go past; pass over, omit', stress: 'prae-TE-re-ō · prae-te-RĪ-re', deriv: 'preterite' },
    { id: 'regredior', head: 'regredior', la: 'regredior, regredī, regressus sum', pos: 'verb, 3rd conj. -iō (deponent)', en: 'go back, return', stress: 're-GRE-di-or · RE-gre-dī', deriv: 'regress' },
    { id: 'rus', head: 'rūs', la: 'rūs, rūris', g: 'n', pos: 'noun, 3rd decl.', en: 'the country, countryside', stress: 'RŪS · RŪ-ris', deriv: 'rural, rustic', note: 'rūrī: in the country; rūs: to the country; rūre: from the country.' },
    { id: 'humus', head: 'humus', la: 'humus, humī', g: 'f', pos: 'noun, 2nd decl.', en: 'ground, earth', stress: 'HU-mus', deriv: 'humble, exhume', note: 'Feminine. humī: on the ground (locative).' },
    { id: 'nebula', head: 'nebula', la: 'nebula, nebulae', g: 'f', pos: 'noun, 1st decl.', en: 'mist, fog, cloud', stress: 'NE-bu-la', deriv: 'nebula', note: 'Related to German Nebel.' },
    { id: 'fumus', head: 'fūmus', la: 'fūmus, fūmī', g: 'm', pos: 'noun, 2nd decl.', en: 'smoke', stress: 'FŪ-mus', deriv: 'fume' },
    { id: 'nix', head: 'nix', la: 'nix, nivis', g: 'f', pos: 'noun, 3rd decl.', en: 'snow', stress: 'NIX · NI-vis', note: 'Generally connected with English snow and German Schnee.' },
    { id: 'solacium', head: 'sōlācium', la: 'sōlācium, sōlāciī', g: 'n', pos: 'noun, 2nd decl.', en: 'comfort, consolation', stress: 'sō-LĀ-ci-um', deriv: 'solace' },
    { id: 'identidem', head: 'identidem', la: 'identidem', pos: 'adverb', en: 'again and again, repeatedly', stress: 'i-DEN-ti-dem' },
    { id: 'donec', head: 'dōnec', la: 'dōnec', pos: 'conjunction', en: 'until; as long as', stress: 'DŌ-nec', note: 'Like dum “until”: indicative for a fact, subjunctive for something expected.' }
  ],

  grammarCards: [
    { id: 'g38-eo', front: 'eō: present', back: 'eō, īs, it, īmus, ītis, eunt' },
    { id: 'g38-fut', front: 'eō: future', back: 'ībō, ībis, ībit, ībimus, ībitis, ībunt' },
    { id: 'g38-perf', front: 'eō: perfect', back: 'iī, īstī, iit, iimus, īstis, iērunt (also īvī)' },
    { id: 'g38-subj', front: 'eō: present and imperfect subjunctive', back: 'eam, eās, eat …; īrem, īrēs, īret …' },
    { id: 'g38-other', front: 'eō: infinitive, imperative, participles, gerund', back: 'īre; ī, īte; iēns, euntis; itūrus; eundī' },
    { id: 'g38-comp', front: 'Compounds of eō', back: 'abeō, adeō, exeō, ineō, redeō, pereō, trānseō, praetereō' },
    { id: 'g38-loc', front: 'Locative', back: 'Rōmae, Corinthī, Mīsēnī; Athēnīs, Carthāgine; domī, rūrī, humī' },
    { id: 'g38-to', front: 'Place to which (towns, domus, rūs)', back: 'Bare accusative: Rōmam, Athēnās, domum, rūs' },
    { id: 'g38-from', front: 'Place from which (towns, domus, rūs)', back: 'Bare ablative: Rōmā, Athēnīs, domō, rūre' },
    { id: 'g38-domus', front: 'domī, domum, domō', back: 'at home (zu Hause), homewards (nach Hause), from home' },
    { id: 'g38-when', front: 'Time when / within which', back: 'Ablative: eō diē, prīmā lūce, paucīs diēbus' },
    { id: 'g38-dur', front: 'Duration', back: 'Accusative (per + acc.): multōs annōs, per multōs diēs' },
    { id: 'g38-german', front: 'Er blieb den ganzen Tag.', back: 'Tōtum diem mānsit. (accusative of duration in both languages)' },
    { id: 'g38-exit', front: 'exit, exeunt', back: 'he goes out, they go out (Latin stage directions kept in English)' },
    { id: 'g38-regressi', front: 'Regressī Mīsēnum … suspēnsam dubiamque noctem spē ac metū exēgimus.', back: 'Having returned to Misenum, we spent an anxious and uncertain night between hope and fear. (Pliny 6.20.19)' },
    { id: 'g38-nive', front: 'mūtāta omnia altōque cinere tamquam nive obducta', back: 'everything changed and covered with deep ash as if with snow (Pliny 6.20.18)' },
    { id: 'g38-hora', front: 'Nōnum Kal. Septembrēs hōrā ferē septimā', back: 'on 24 August at about the seventh hour (Pliny 6.16.4)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">eunt</span>:', options: ['they go', 'they went', 'they will go', 'let them go'], answer: 0, explain: 'eō, īs, it, īmus, ītis, eunt.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">ībimus</span>:', options: ['we shall go', 'we were going', 'we go', 'let us go'], answer: 0, explain: 'Future: ībō, ībis, ībit, ībimus.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Rōmae</span> in <span class="la">Rōmae habitat</span> is:', options: ['locative: at Rome', 'genitive: of Rome', 'dative: to Rome', 'nominative plural'], answer: 0, explain: 'Locative of a 1st-declension town name.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Domum rediit.</span>', options: ['He went back home.', 'He returned from home.', 'He went back at home.', 'He returned the house.'], answer: 0, explain: 'domum: homewards, without a preposition.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">multōs annōs</span> in <span class="la">Multōs annōs ibi vīxit</span> expresses:', options: ['how long', 'when', 'within which time', 'how long ago'], answer: 0, explain: 'Accusative of duration.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Athēnīs</span> can mean:', options: ['at Athens or from Athens', 'to Athens', 'of Athens', 'Athenians'], answer: 0, explain: 'Plural town name: locative and ablative look alike.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Crās Rōm___ īmus.</span>', hint: 'to Rome', answers: ['am'], full: 'Crās Rōmam īmus.', explain: 'Bare accusative for a town name.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Puerī domum ___.</span>', hint: 'go (present, 3rd pl.)', answers: ['eunt'], full: 'Puerī domum eunt.', explain: 'eunt.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Pater meus Corinth___ habitat.</span>', hint: 'at Corinth', answers: ['ī', 'i'], full: 'Pater meus Corinthī habitat.', explain: 'Locative of a 2nd-declension town name.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Mārcus dom___ est.</span>', hint: 'at home', answers: ['ī', 'i'], full: 'Mārcus domī est.', explain: 'domī: at home.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Tōtum di___ labōrāvit.</span>', hint: 'the whole day (duration)', answers: ['em'], full: 'Tōtum diem labōrāvit.', explain: 'Accusative of duration.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Tertiā hōr___ advēnit.</span>', hint: 'at the third hour', answers: ['ā', 'a'], full: 'Tertiā hōrā advēnit.', explain: 'Ablative of time when.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the present and future indicative of <span class="la">eō</span>.', headers: ['present', 'future'], rows: [
      { label: '1st sg.', answers: ['eō', 'ībō'] },
      { label: '2nd sg.', answers: ['īs', 'ībis'] },
      { label: '3rd sg.', answers: ['it', 'ībit'] },
      { label: '1st pl.', answers: ['īmus', 'ībimus'] },
      { label: '2nd pl.', answers: ['ītis', 'ībitis'] },
      { label: '3rd pl.', answers: ['eunt', 'ībunt'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the present and imperfect subjunctive of <span class="la">eō</span>.', headers: ['pres. subj.', 'impf. subj.'], rows: [
      { label: '1st sg.', answers: ['eam', 'īrem'] },
      { label: '2nd sg.', answers: ['eās', 'īrēs'] },
      { label: '3rd sg.', answers: ['eat', 'īret'] },
      { label: '1st pl.', answers: ['eāmus', 'īrēmus'] },
      { label: '2nd pl.', answers: ['eātis', 'īrētis'] },
      { label: '3rd pl.', answers: ['eant', 'īrent'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each phrase to its meaning.', pairs: [
      ['domī', 'at home'], ['domum', 'homewards'], ['domō', 'from home'], ['rūrī', 'in the country'], ['humī', 'on the ground']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Eō diē Rōmā abiērunt.', tokens: ['On that day', 'they went away', 'from', 'Rome'], explain: 'Ablative of time when; bare ablative of a town name.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Domum redībimus.', model: 'We shall return home.', accepted: ['we shall return home', 'we will return home', 'we shall go back home', 'we will go back home', 'we shall go home again', 'we will go home again'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Rūrī multōs annōs vīxit.', model: 'He lived in the country for many years.', accepted: ['he lived in country for many years', 'he lived for many years in country', 'she lived in country for many years', 'he lived in countryside for many years', 'he lived for many years in countryside', 'he lived in country many years'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Eō diē ex urbe exiērunt.', model: 'On that day they went out of the city.', accepted: ['on that day they went out of city', 'on that day they left city', 'that day they went out of city', 'that day they left city', 'on that day they went out from city'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'to Rome', model: 'Rōmam', accepted: ['rōmam'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'at home', model: 'domī', accepted: ['domī'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'they go', model: 'eunt', accepted: ['eunt'] },
    { id: 'e23', type: 'mc', prompt: 'What did the survivors see when daylight returned?', options: ['Everything changed and covered with ash as if with snow', 'The town untouched', 'The sea on fire', 'The uncle’s ships'], answer: 0, explain: 'mūtāta omnia altōque cinere tamquam nive obducta.' },
    { id: 'e24', type: 'mc', prompt: 'Why would Pliny and his mother not leave Misenum?', options: ['They were waiting for news of the uncle', 'They had no transport', 'The roads were closed', 'They wanted to see the eruption'], answer: 0, explain: 'abeundī cōnsilium, dōnec dē avunculō nūntius.' },
    { id: 'e25', type: 'mc', prompt: 'German <em>zu Hause</em> and <em>nach Hause</em> correspond to:', options: ['domī and domum', 'domum and domō', 'domō and domī', 'in domō and ad domum'], answer: 0, explain: 'domī: at home; domum: homewards.' }
  ],

  reading: {
    title: 'Diēs vērus (Plīnius, Epistulae 6.20.16–20)',
    note: 'Authentic text, unadapted: Pliny the Younger, Letters 6.20.16–20, the end of the letter, from the copy Nils supplied; length marks added. Tap any word.',
    text: 'Paulum relūxit, quod nōn diēs nōbīs, sed adventantis ignis indicium vidēbātur. Et ignis quidem longius substitit; tenebrae rūrsus, cinis rūrsus, multus et gravis. Hunc identidem assurgentēs excutiēbāmus; opertī aliōquī atque etiam oblīsī pondere essēmus. Possem glōriārī nōn gemitum mihi, nōn vōcem parum fortem in tantīs perīculīs excidisse, nisi mē cum omnibus, omnia mēcum perīre miserō, magnō tamen mortālitātis sōlāciō crēdidissem. Tandem illa cālīgō tenuāta quasi in fūmum nebulamve discessit; mox diēs vērus; sōl etiam effulsit, lūridus tamen, quālis esse cum dēficit solet. Occursābant trepidantibus adhūc oculīs mūtāta omnia altōque cinere tamquam nive obducta. Regressī Mīsēnum, cūrātīs utcumque corporibus, suspēnsam dubiamque noctem spē ac metū exēgimus. Metus praevalēbat; nam et tremor terrae persevērābat, et plērīque lymphātī terrificīs vāticinātiōnibus et sua et aliēna mala lūdificābantur. Nōbīs tamen nē tunc quidem, quamquam et expertīs perīculum et exspectantibus, abeundī cōnsilium, dōnec dē avunculō nūntius. Haec nēquāquam historiā digna nōn scrīptūrus legēs et tibi scīlicet, quī requīsīstī, imputābis, sī digna nē epistulā quidem vidēbuntur. Valē.',
    translation: 'It grew a little lighter; this seemed to us not daylight but a sign that the fire was coming nearer. The fire, however, stopped some way off; darkness again, ash again, thick and heavy. We kept getting up and shaking it off; otherwise we would have been buried and even crushed by its weight. I could boast that not a groan, not a cowardly word escaped me in such danger, had I not believed that I was perishing with everyone, and everything with me: a wretched, but still a great consolation for being mortal. At last the darkness thinned and dispersed into something like smoke or mist; soon there was real daylight; the sun even shone out, but pale, as it usually is in an eclipse. Before our still trembling eyes everything appeared changed, covered with deep ash as if with snow. We went back to Misenum, attended to our bodies as best we could, and spent an anxious, uncertain night between hope and fear. Fear prevailed; for the earth tremors continued, and many people, frenzied by terrifying prophecies, were making a mockery of their own and others’ misfortunes. Even then, although we had come through danger and expected more, we had no thought of leaving until there was news of my uncle. You will read this, which is not at all worthy of history, without intending to write it up, and you will certainly have only yourself to blame, since you asked for it, if it does not seem worthy even of a letter. Farewell.',
    notes: [
      { ref: 'Paulum relūxit, quod nōn diēs nōbīs, sed adventantis ignis indicium vidēbātur', html: '<span class="la">relūxit</span>: perfect of <span class="la">relūcēscō</span>, “it grew light again”. <span class="la">quod</span>: “which (the light)”. <span class="la">vidēbātur</span> + predicate nominatives <span class="la">diēs … indicium</span>: “seemed (to be)”. <span class="la">adventantis</span>: present participle of the frequentative <span class="la">adventō</span>, “approaching”.' },
      { ref: 'Et ignis quidem longius substitit', html: '<span class="la">longius</span>: “rather far off”, comparative adverb. <span class="la">substitit</span>: perfect of <span class="la">subsistō</span>, “halted”.' },
      { ref: 'Hunc identidem assurgentēs excutiēbāmus; opertī aliōquī atque etiam oblīsī pondere essēmus', html: '<span class="la">hunc</span>: the ash (<span class="la">cinis</span> is masculine). <span class="la">opertī … oblīsī … essēmus</span>: pluperfect subjunctive in a contrary-to-fact apodosis (Lecture XXXIV), “we would have been covered and crushed”, with <span class="la">aliōquī</span>, “otherwise”, standing for the “if” clause. <span class="la">oblīsī</span>: from <span class="la">oblīdō</span>, “crush”.' },
      { ref: 'Possem glōriārī … nisi … crēdidissem', html: 'The mixed condition of Lecture XXXIV. <span class="la">mē cum omnibus, omnia mēcum perīre</span>: chiasmus, “that I with everyone, everything with me, was perishing”. <span class="la">miserō … sōlāciō</span>: ablative with <span class="la">crēdidissem</span>, “believed with a wretched comfort”, or in apposition to the whole thought.' },
      { ref: 'Tandem illa cālīgō tenuāta quasi in fūmum nebulamve discessit', html: '<span class="la">tenuāta</span>: “thinned”. <span class="la">-ve</span>: “or” (enclitic, like <span class="la">-que</span>).' },
      { ref: 'sōl etiam effulsit, lūridus tamen, quālis esse cum dēficit solet', html: '<span class="la">lūridus</span>: “pale yellow, ghastly”. <span class="la">cum dēficit</span>: “when it fails”, i.e. in an eclipse; <span class="la">cum</span> + indicative (Lecture XXXII). <span class="la">solet</span>: from <span class="la">soleō</span>, “is accustomed”.' },
      { ref: 'Occursābant trepidantibus adhūc oculīs mūtāta omnia', html: '<span class="la">occursābant</span> + dative <span class="la">oculīs</span>: “met (our) eyes”, dative with a compound (Lecture XXXVI). <span class="la">mūtāta omnia</span>: “everything, changed”.' },
      { ref: 'Regressī Mīsēnum, cūrātīs utcumque corporibus', html: '<span class="la">Mīsēnum</span>: accusative of place to which, without preposition (grammar section 3). <span class="la">regressī</span>: deponent participle, “having returned”. <span class="la">cūrātīs utcumque corporibus</span>: ablative absolute, “our bodies having been looked after somehow”.' },
      { ref: 'suspēnsam dubiamque noctem spē ac metū exēgimus', html: '<span class="la">noctem exēgimus</span>: “we spent the night”, accusative of the time spent. <span class="la">spē ac metū</span>: ablatives of manner or cause, “in hope and fear”.' },
      { ref: 'plērīque lymphātī terrificīs vāticinātiōnibus et sua et aliēna mala lūdificābantur', html: '<span class="la">lymphātī</span>: “frenzied” (from <span class="la">lympha</span>, water nymphs, who were thought to drive people mad). <span class="la">lūdificābantur</span>: deponent, “made a mockery of”. The sense is debated: probably that they made light of their own and others’ troubles in their frenzy, or that they made them seem worse by mocking predictions.' },
      { ref: 'Nōbīs tamen nē tunc quidem … abeundī cōnsilium, dōnec dē avunculō nūntius', html: 'Supply <span class="la">erat</span> twice: “we did not have, even then, any plan of leaving, until there was news of my uncle”. <span class="la">nōbīs</span>: dative of possession. <span class="la">abeundī</span>: gerund of <span class="la">abeō</span> (Lecture XL). <span class="la">expertīs … exspectantibus</span>: agreeing with <span class="la">nōbīs</span>.' },
      { ref: 'Haec nēquāquam historiā digna nōn scrīptūrus legēs', html: '<span class="la">historiā digna</span>: “worthy of history”, ablative with <span class="la">dignus</span>. <span class="la">nōn scrīptūrus</span>: “not intending to write (them up)”, future participle. <span class="la">legēs</span>: future of <span class="la">legō</span>, “you will read”.' },
      { ref: 'et tibi scīlicet, quī requīsīstī, imputābis, sī digna nē epistulā quidem vidēbuntur', html: '<span class="la">tibi imputābis</span>: “you will charge (it) to yourself, blame yourself”. <span class="la">requīsīstī</span>: contracted perfect, “you asked for (it)”. <span class="la">nē epistulā quidem</span>: “not even of a letter”.' }
    ],
    glosses: {
      'paulum': 'a little', 'relūxit': 'perf. of relūcēscō: it grew light again', 'quod': 'which', 'nōn': 'not', 'diēs': 'daylight (nom.)', 'nōbīs': 'to us; we (dat.)', 'sed': 'but', 'adventantis': 'gen. of adventāns: approaching', 'ignis': 'fire (gen./nom.)', 'indicium': 'sign (nom.)', 'vidēbātur': 'impf. pass. 3rd sg. of videō: seemed',
      'et': 'and', 'quidem': 'indeed, however', 'longius': 'rather far off', 'substitit': 'perf. 3rd sg. of subsistō: stopped', 'tenebrae': 'darkness (nom.)', 'rūrsus': 'again', 'cinis': 'ash (nom.)', 'multus': 'thick, much', 'gravis': 'heavy',
      'hunc': 'it (acc. m.: the ash)', 'identidem': 'repeatedly', 'assurgentēs': 'nom. pl. of assurgēns: getting up', 'excutiēbāmus': 'impf. 1st pl. of excutiō: we shook off', 'opertī': 'covered (nom. pl.)', 'aliōquī': 'otherwise', 'atque': 'and', 'etiam': 'even', 'oblīsī': 'crushed (nom. pl.)', 'pondere': 'abl. of pondus: by the weight', 'essēmus': 'impf. subj. 1st pl. of sum: we would have been',
      'possem': 'impf. subj. 1st sg. of possum: I could', 'glōriārī': 'inf. of glōrior: to boast', 'gemitum': 'acc. of gemitus: groan', 'mihi': 'from me (dat.)', 'vōcem': 'acc. of vōx: word, voice', 'parum': 'too little', 'fortem': 'brave', 'in': 'in (+ abl.); into (+ acc.)', 'tantīs': 'abl. pl. of tantus: such great', 'perīculīs': 'abl. pl. of perīculum: dangers', 'excidisse': 'perf. inf. of excidō: to have escaped', 'nisi': 'unless, had … not', 'mē': 'me', 'cum': 'with (+ abl.)', 'omnibus': 'abl. pl. of omnis: everyone', 'omnia': 'everything', 'mēcum': 'with me', 'perīre': 'inf. of pereō: to perish', 'miserō': 'abl. of miser: wretched', 'magnō': 'abl. of magnus: great', 'tamen': 'yet, still', 'mortālitātis': 'gen. of mortālitās: of mortality', 'sōlāciō': 'abl. of sōlācium: consolation', 'crēdidissem': 'plupf. subj. 1st sg. of crēdō: I had believed',
      'tandem': 'at last', 'illa': 'that', 'cālīgō': 'darkness (nom.)', 'tenuāta': 'thinned (nom. f.)', 'quasi': 'as if, like', 'fūmum': 'acc. of fūmus: smoke', 'nebulamve': 'or mist (acc. of nebula + -ve)', 'discessit': 'perf. 3rd sg. of discēdō: dispersed', 'mox': 'soon', 'vērus': 'real', 'sōl': 'sun (nom.)', 'effulsit': 'perf. 3rd sg. of effulgeō: shone out', 'lūridus': 'pale, sallow', 'quālis': 'such as', 'esse': 'to be', 'dēficit': '3rd sg. of dēficiō: fails, is eclipsed', 'solet': '3rd sg. of soleō: usually is',
      'occursābant': 'impf. 3rd pl. of occursō: met', 'trepidantibus': 'dat. pl. of trepidāns: trembling', 'adhūc': 'still', 'oculīs': 'dat. pl. of oculus: eyes', 'mūtāta': 'changed (nom. pl. n.)', 'altōque': 'and deep (abl. + -que)', 'cinere': 'abl. of cinis: with ash', 'tamquam': 'as if', 'nive': 'abl. of nix: with snow', 'obducta': 'covered (nom. pl. n.)',
      'regressī': 'having returned (regredior)', 'mīsēnum': 'acc.: to Misenum', 'cūrātīs': 'abl. pl. of cūrātus: looked after', 'utcumque': 'somehow, as best we could', 'corporibus': 'abl. pl. of corpus: bodies', 'suspēnsam': 'anxious (acc. f.)', 'dubiamque': 'and uncertain (acc. f. + -que)', 'noctem': 'acc. of nox: night', 'spē': 'abl. of spēs: in hope', 'ac': 'and', 'metū': 'abl. of metus: in fear', 'exēgimus': 'perf. 1st pl. of exigō: we spent',
      'metus': 'fear (nom.)', 'praevalēbat': 'impf. 3rd sg. of praevaleō: prevailed', 'nam': 'for', 'tremor': 'tremor (nom.)', 'terrae': 'gen. of terra: of the earth', 'persevērābat': 'impf. 3rd sg. of persevērō: continued', 'plērīque': 'very many people', 'lymphātī': 'frenzied (nom. pl.)', 'terrificīs': 'abl. pl. of terrificus: terrifying', 'vāticinātiōnibus': 'abl. pl. of vāticinātiō: by prophecies', 'sua': 'their own (acc. pl. n.)', 'aliēna': 'others’ (acc. pl. n.)', 'mala': 'acc. pl. of malum: misfortunes', 'lūdificābantur': 'impf. 3rd pl. of lūdificor: made a mockery of',
      'nē': 'not (nē … quidem: not even)', 'tunc': 'then', 'quamquam': 'although', 'expertīs': 'dat. pl. of expertus: having experienced', 'perīculum': 'danger (acc.)', 'exspectantibus': 'dat. pl. of exspectāns: expecting', 'abeundī': 'gen. of the gerund of abeō: of leaving', 'cōnsilium': 'plan (nom.)', 'dōnec': 'until', 'dē': 'about (+ abl.)', 'avunculō': 'abl. of avunculus: uncle', 'nūntius': 'news (nom.)',
      'haec': 'these things', 'nēquāquam': 'by no means', 'historiā': 'abl. of historia: of history', 'digna': 'worthy (acc. pl. n.)', 'scrīptūrus': 'intending to write', 'legēs': 'fut. 2nd sg. of legō: you will read', 'tibi': 'to yourself', 'scīlicet': 'of course, certainly', 'quī': 'who', 'requīsīstī': 'perf. 2nd sg. of requīrō: asked for', 'imputābis': 'fut. 2nd sg. of imputō: you will charge (it)', 'sī': 'if', 'epistulā': 'abl. of epistula: of a letter', 'vidēbuntur': 'fut. pass. 3rd pl. of videō: they will seem', 'valē': 'farewell'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What did the first light seem to be?', options: ['A sign that the fire was coming nearer', 'Dawn', 'Torches', 'Lightning'], answer: 0, explain: 'nōn diēs nōbīs, sed adventantis ignis indicium vidēbātur.' },
      { id: 'r2', type: 'mc', prompt: 'Why did they keep getting up?', options: ['To shake off the ash, which would otherwise have buried them', 'To look for the uncle', 'To escape the crowd', 'Because of the cold'], answer: 0, explain: 'Hunc identidem assurgentēs excutiēbāmus; opertī aliōquī … essēmus.' },
      { id: 'r3', type: 'mc', prompt: 'What did the sun look like when it returned?', options: ['Pale, as in an eclipse', 'Red and burning', 'Brighter than ever', 'It did not return'], answer: 0, explain: 'lūridus tamen, quālis esse cum dēficit solet.' },
      { id: 'r4', type: 'mc', prompt: 'How does Pliny end the letter?', options: ['Saying it is not worthy of history, and Tacitus has only himself to blame', 'Asking Tacitus for money', 'Describing his uncle’s funeral', 'Announcing a new book'], answer: 0, explain: 'Haec nēquāquam historiā digna … tibi scīlicet, quī requīsīstī, imputābis.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">iērunt</span>:', options: ['they went', 'they go', 'they will go', 'they were going'], answer: 0, explain: 'Perfect of eō: iī … iērunt.' },
      { id: 't2', type: 'mc', prompt: 'Present participle of <span class="la">eō</span>, genitive singular:', options: ['euntis', 'ientis', 'eōntis', 'iēnsis'], answer: 0, explain: 'iēns, euntis.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Paucīs diēbus redībō.</span>', options: ['I shall return within a few days.', 'I shall return for a few days.', 'I returned a few days ago.', 'I return every few days.'], answer: 0, explain: 'Ablative of time within which.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Ex Graeciā Rōm___ vēnit.</span>', hint: 'to Rome', answers: ['am'], full: 'Ex Graeciā Rōmam vēnit.', explain: 'Country with ex; town in the bare accusative.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Puer hum___ iacēbat.</span>', hint: 'on the ground', answers: ['ī', 'i'], full: 'Puer humī iacēbat.', explain: 'Locative humī.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Prīmā lūce domō exiit.', model: 'At first light he went out from home.', accepted: ['at first light he went out from home', 'at first light he left home', 'at dawn he left home', 'at dawn he went out from home', 'at daybreak he left home', 'at first light he went out of house', 'at dawn he left house', 'at first light he left house', 'at first light she left home'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'from Rome', model: 'Rōmā', accepted: ['rōmā'] },
      { id: 't8', type: 'mc', prompt: 'Which compound of <span class="la">eō</span> takes a direct object and has a personal passive?', options: ['trānseō', 'abeō', 'redeō', 'exeō'], answer: 0, explain: 'flūmen trānsītur: the river is crossed.' },
      { id: 't9', type: 'mc', prompt: 'In <span class="la">Regressī Mīsēnum</span>, why no preposition?', options: ['Misenum is a town: bare accusative of place to which', 'Pliny forgot it', 'It is a locative', 'regredior takes a direct object'], answer: 0, explain: 'Town names take the bare accusative.' },
      { id: 't10', type: 'mc', prompt: 'What does <span class="la">Nōnum Kal. Septembrēs</span> correspond to (Pliny 6.16.4, as transmitted)?', options: ['24 August', '9 September', '1 September', '9 August'], answer: 0, explain: 'Ninth day before 1 September, counting inclusively: 24 August.' },
      { id: 't11', type: 'mc', prompt: 'Why can we not tell whether Tacitus used Pliny’s letters?', options: ['The part of his Histories covering AD 79 is lost', 'Tacitus never wrote history', 'The letters were never sent', 'Tacitus wrote in Greek'], answer: 0, explain: 'Only Histories 1–5 (part), covering AD 69–70, survive.' }
    ]
  },

  reference: [
    { title: 'eō: principal forms', headers: ['Form', 'eō'], rows: [
      ['Present', 'eō, īs, it, īmus, ītis, eunt'], ['Imperfect', 'ībam, ībās …'], ['Future', 'ībō, ībis …'], ['Perfect', 'iī (īvī), īstī, iit, iimus, īstis, iērunt'], ['Pres. subj.', 'eam, eās …'], ['Impf. subj.', 'īrem, īrēs …'], ['Infinitive', 'īre'], ['Imperative', 'ī, īte'], ['Participles', 'iēns (euntis), itūrus'], ['Gerund', 'eundī']
    ] },
    { title: 'Place', headers: ['', 'Ordinary nouns', 'Towns, domus, rūs'], rows: [
      ['Where', 'in + abl.', 'locative: Rōmae, domī, rūrī'], ['To which', 'in / ad + acc.', 'accusative: Rōmam, domum, rūs'], ['From which', 'ex / ab + abl.', 'ablative: Rōmā, domō, rūre']
    ] },
    { title: 'Time', headers: ['Question', 'Case', 'Example'], rows: [
      ['When?', 'ablative', 'eō diē, hōrā septimā'], ['Within what time?', 'ablative', 'paucīs diēbus'], ['How long?', 'accusative (per)', 'multōs annōs, per multōs diēs']
    ] }
  ]
});
