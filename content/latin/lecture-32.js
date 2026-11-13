/*
 * Latin — Lecture XXXII: cum clauses (temporal, circumstantial, causal, concessive);
 * the irregular verb ferō and its compounds.
 * Authentic reading: Pliny, Letters 6.16.13–14.
 * Content file only. Source texts (Pliny, Letters 6.16; Catullus 5) checked against the texts supplied by Nils;
 * length marks editorial. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-32',
  number: 32,
  title: 'Quiēvit vērissimō somnō',
  subtitle: 'cum clauses: when, since, although; the irregular verb ferō, ferre, tulī, lātum and its compounds; authentic reading: Pliny 6.16.13–14',
  minutes: 70,

  intro: `
    <p>The little word <span class="la">cum</span> does two jobs. As a preposition with the ablative it means “with” (Lecture III). As a conjunction it introduces a clause, and then it can mean “when”, “since” or “although”. With the indicative it fixes a point in time; with the subjunctive it gives the circumstances, the reason or the concession. German needs several words for this: <em>als, wenn, da, obwohl</em>.</p>
    <p>The second topic is the irregular verb <span class="la">ferō, ferre, tulī, lātum</span>, “carry, bear”. Its principal parts come from three different roots, rather as German <em>sein, war, gewesen</em> or English <em>go, went</em> do. Once the four parts are known, most of it is regular, and its many compounds (<span class="la">afferō, cōnferō, offerō, referō</span> …) give English a large family of words: <em>refer, relate, offer, oblation, confer, collate</em>.</p>
    <p>The reading is the night at Stabiae: flames on the mountain, the uncle’s soothing explanation, his sleep, and the courtyard filling with ash.</p>
  `,

  background: [
    {
      title: 'In remedium formīdinis',
      html: `
        <p>Seeing the flames on the mountainside at night, the elder Pliny kept telling the household that these were fires left by panicking country people and empty villas burning in the deserted countryside. The nephew adds that he said it <span class="la">in remedium formīdinis</span>, “as a remedy for their fear”. The frequentative verb <span class="la">dictitābat</span>, “kept saying”, stresses the repetition. Whether the uncle believed it is left open; the nephew presents it as deliberate reassurance, which fits the bath and the dinner before it.</p>
        <p>Modern volcanology has a simpler explanation: flames on the slopes were probably burning vegetation and buildings set alight by the eruption. Pliny’s letter is still used by volcanologists, and eruptions of this type, with a tall column of ash and pumice, are called “Plinian”.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Joseph_Wright_of_Derby_-_Vesuvius_in_Eruption,_with_a_View_over_the_Islands_in_the_Bay_of_Naples_-_Google_Art_Project.jpg/960px-Joseph_Wright_of_Derby_-_Vesuvius_in_Eruption,_with_a_View_over_the_Islands_in_the_Bay_of_Naples_-_Google_Art_Project.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Joseph_Wright_of_Derby_-_Vesuvius_in_Eruption,_with_a_View_over_the_Islands_in_the_Bay_of_Naples_-_Google_Art_Project.jpg/500px-Joseph_Wright_of_Derby_-_Vesuvius_in_Eruption,_with_a_View_over_the_Islands_in_the_Bay_of_Naples_-_Google_Art_Project.jpg|https://upload.wikimedia.org/wikipedia/commons/2/2b/Joseph_Wright_of_Derby_-_Vesuvius_in_Eruption,_with_a_View_over_the_Islands_in_the_Bay_of_Naples_-_Google_Art_Project.jpg" alt="Painting of Vesuvius erupting at night, with glowing lava and the bay in moonlight"><figcaption>Joseph Wright of Derby, <em>Vesuvius in Eruption, with a View over the Islands in the Bay of Naples</em> (about 1776–80; Tate). Wright saw an eruption in 1774; the painting shows an eighteenth-century lava eruption, a different type from the ash-and-pumice eruption of AD 79. <span class="credit">Painting, public domain · <a href="https://commons.wikimedia.org/wiki/File:Joseph_Wright_of_Derby_-_Vesuvius_in_Eruption,_with_a_View_over_the_Islands_in_the_Bay_of_Naples_-_Google_Art_Project.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'ferō, tulī, lātum: three roots',
      html: `
        <p><span class="la">ferō</span> belongs to the Indo-European root usually written <em>*bher-</em>, “carry”. Latin turned initial <em>bh</em> into <em>f</em>; Germanic turned it into <em>b</em>. So <span class="la">ferō</span> is related to English <em>bear</em> (a burden, a child) and to German <em>gebären, Bürde, Bahre</em>; Greek has <em>pherō</em>.</p>
        <p>The perfect <span class="la">tulī</span> comes from another root, <em>*tel-</em> “lift, endure”, also seen in <span class="la">tollō</span> and <span class="la">tolerō</span>; German <em>dulden, Geduld</em> are usually connected with it. <span class="la">lātum</span> is generally explained as coming from an older <em>*tlātum</em> of the same root, with the <em>t</em> lost at the start of the word; that is why <span class="la">lātum</span> (from <span class="la">ferō</span>) has nothing to do with <span class="la">lātus</span>, “wide”, which appears in the reading (<span class="la">lātissimae flammae</span>).</p>
        <p>German shows the same kind of mixture in <em>sein – bin – war – gewesen</em>, which draws on three roots as well.</p>
      `
    },
    {
      title: 'als, wenn, da, obwohl: one cum',
      html: `
        <ul>
          <li><span class="la">Cum Rōmam vēnit, …</span> “When he came to Rome …”: a point in time, indicative; German <em>als</em>.</li>
          <li><span class="la">Cum Rōmam vēnisset, amīcōs vīsitāvit.</span> “When he had come to Rome, he visited his friends”: the circumstances of a past event, subjunctive; German <em>als</em> or <em>nachdem</em>.</li>
          <li><span class="la">Cum perīculum magnum sit, fugiāmus.</span> “Since the danger is great, let us flee”: causal; German <em>da</em>.</li>
          <li><span class="la">Cum perīculum magnum esset, tamen mānsit.</span> “Although the danger was great, he stayed”: concessive; German <em>obwohl</em>.</li>
        </ul>
        <p>German distinguishes <em>als</em> (once, in the past) from <em>wenn</em> (whenever, or in the future). Latin <span class="la">cum</span> with the indicative covers both; the tense tells which.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">nōbīs cum semel occidit brevis lūx, / nox est perpetua ūna dormienda.</p>
    <p>“For us, when once our brief light has set, there is one never-ending night to be slept.” Catullus 5.5–6, from Lecture XXIX, checked against the text Nils supplied; length marks added. A purely temporal <span class="la">cum</span> with the indicative: it states when, and nothing more.</p>
    <p>The same poem has two more: <span class="la">dein, cum mīlia multa fēcerimus, / conturbābimus illa</span> (5.10–11), “then, when we have made many thousands, we shall muddle them up”, with the future perfect indicative; and <span class="la">nē quis malus invidēre possit, / cum tantum sciat esse bāsiōrum</span> (5.12–13), “so that no evil person can envy us, when he knows there are so many kisses”. The last <span class="la">cum</span> takes the subjunctive; whether because it gives a reason (“since he would know”) or because it depends on the purpose clause, is discussed by commentators.</p>
    <p>From Pliny’s letter: <span class="la">cum crēsceret</span> (6.16.12, Lecture XXXI), “since it was growing”, causal; and at the end, <span class="la">quaeque statim, cum maximē vēra memorantur, audieram</span> (6.16.22), “and what I had heard at once, at the time when things are most truly told”, temporal with the indicative.</p>
  `,

  pronunciation: `
    <h3>ferre, ferrem</h3>
    <p>The double <span class="la">r</span> is held, as in Italian <em>terra</em>: <span class="la">FER-re</span>, <span class="la">FER-rem</span>. It distinguishes <span class="la">ferre</span> (infinitive) from <span class="la">fere</span>, “almost”.</p>
    <h3>attulī, rettulī</h3>
    <p>The prefix assimilates to the next consonant: <span class="la">ad + tulī → attulī</span>, <span class="la">ad + lātum → allātum</span>, <span class="la">con + lātum → collātum</span>, <span class="la">ob + ferō → offerō</span>. Pronounce both consonants: <span class="la">AT-tu-lī, al-LĀ-tum</span>. <span class="la">rettulī</span> doubles the <span class="la">t</span> (from an old reduplicated perfect, <em>*re-tetulī</em>).</p>
  `,

  grammar: [
    {
      title: '1. cum with the indicative: “when”',
      html: `
        <p>When <span class="la">cum</span> only dates the main action, it takes the indicative, in any tense:</p>
        <ul>
          <li><span class="la">Cum Rōmae sum, amīcōs vīsitō.</span> When(ever) I am in Rome, I visit my friends.</li>
          <li><span class="la">Cum vēneris, omnia tibi nārrābō.</span> When you come (have come), I shall tell you everything. (Future perfect: German <em>wenn du gekommen bist</em>.)</li>
          <li><span class="la">Eō tempore, cum Caesar in Galliā erat, …</span> At the time when Caesar was in Gaul …</li>
        </ul>
        <p>A signal of time in the main clause (<span class="la">tum, eō tempore, eō diē</span>) points to the indicative.</p>
      `
    },
    {
      title: '2. Circumstantial cum: “when, as” + subjunctive',
      html: `
        <p>In narratives about the past, <span class="la">cum</span> with the imperfect or pluperfect subjunctive describes the situation in which the main event happened:</p>
        <ul>
          <li><span class="la">Cum nāvis appropinquāret, cinis incidēbat.</span> As the ship was approaching, ash was falling.</li>
          <li><span class="la">Cum dormīvisset, excitātus est.</span> When he had slept, he was woken.</li>
        </ul>
        <p>This is the commonest <span class="la">cum</span> in Caesar and Livy. The subjunctive follows the sequence of tenses (Lecture XXXI): imperfect for the same time, pluperfect for earlier time. Translate with an ordinary English tense: “when he had slept”, not “when he might have slept”.</p>
      `
    },
    {
      title: '3. Causal and concessive cum',
      html: `
        <ul>
          <li><strong>Causal</strong>: <span class="la">Cum perīculum crēsceret, fūgērunt.</span> Since the danger was growing, they fled.</li>
          <li><strong>Concessive</strong>: <span class="la">Cum perīculum crēsceret, tamen mānsērunt.</span> Although the danger was growing, they stayed.</li>
        </ul>
        <p>Both take the subjunctive in any time. <span class="la">tamen</span>, “nevertheless”, in the main clause is the usual sign of a concessive clause. Without it, sense decides, and the line between “when” and “since” is sometimes a matter of interpretation; English “as” often keeps both.</p>
        <p><span class="la">quamquam</span> (Lecture XXXI) also means “although”, but normally takes the indicative: it presents the concession as a fact.</p>
      `
    },
    {
      title: '4. ferō, ferre, tulī, lātum',
      html: `
        <p>Only the present system is irregular, and only in some forms: the thematic vowel is missing before <span class="la">s, t, r</span>.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Active</th><th>Passive</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">ferō</td><td class="la">feror</td></tr>
            <tr><th>2nd sg.</th><td class="la">fers</td><td class="la">ferris</td></tr>
            <tr><th>3rd sg.</th><td class="la">fert</td><td class="la">fertur</td></tr>
            <tr><th>1st pl.</th><td class="la">ferimus</td><td class="la">ferimur</td></tr>
            <tr><th>2nd pl.</th><td class="la">fertis</td><td class="la">feriminī</td></tr>
            <tr><th>3rd pl.</th><td class="la">ferunt</td><td class="la">feruntur</td></tr>
          </tbody>
        </table></div>
        <p>Infinitives <span class="la">ferre</span>, passive <span class="la">ferrī</span>; imperative <span class="la">fer, ferte</span> (like <span class="la">dīc, dūc, fac</span>); imperfect subjunctive <span class="la">ferrem</span> (from <span class="la">ferre</span>). Everything else is regular 3rd conjugation: imperfect <span class="la">ferēbam</span>, future <span class="la">feram, ferēs</span>, present subjunctive <span class="la">feram, ferās</span>, participle <span class="la">ferēns</span>, gerund <span class="la">ferendum</span>.</p>
        <p>Perfect system from <span class="la">tulī</span>: <span class="la">tulerat, tulisset</span>. Participles from <span class="la">lātum</span>: <span class="la">lātus</span> “carried”, <span class="la">lātūrus</span> “about to carry” (Lecture XXX: <span class="la">lātūrus auxilium</span>).</p>
        <p>Idioms: <span class="la">fertur</span>, <span class="la">ferunt</span> “it is said, they say”; <span class="la">aegrē ferre</span> “take badly”; <span class="la">signa ferre</span> “advance” (carry the standards); <span class="la">lēgem ferre</span> “propose a law”.</p>
      `
    },
    {
      title: '5. Compounds of ferō',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Compound</th><th>Principal parts</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td class="la">afferō</td><td class="la">afferre, attulī, allātum</td><td>bring (to)</td></tr>
            <tr><td class="la">cōnferō</td><td class="la">cōnferre, contulī, collātum</td><td>bring together, compare; <span class="la">sē cōnferre</span> go</td></tr>
            <tr><td class="la">dēferō</td><td class="la">dēferre, dētulī, dēlātum</td><td>carry down, report</td></tr>
            <tr><td class="la">offerō</td><td class="la">offerre, obtulī, oblātum</td><td>offer</td></tr>
            <tr><td class="la">referō</td><td class="la">referre, rettulī, relātum</td><td>bring back, report</td></tr>
            <tr><td class="la">differō</td><td class="la">differre, distulī, dīlātum</td><td>postpone; differ</td></tr>
            <tr><td class="la">tollō</td><td class="la">tollere, sustulī, sublātum</td><td>raise, remove: the perfect and supine are the old forms <span class="la">tulī, lātum</span> with the prefix <span class="la">sub(s)-</span>; grammars explain them either as from <span class="la">sus-tollō</span> (Lecture XXIV) or as borrowed from <span class="la">sufferō</span></td></tr>
          </tbody>
        </table></div>
        <p>English takes words from both stems: <em>offer</em> and <em>oblation</em>, <em>refer</em> and <em>relate</em>, <em>confer</em> and <em>collate</em>, <em>differ</em> and <em>dilatory</em>. Pliny used <span class="la">sarcinās contulerat</span> and <span class="la">dēferrī in balineum</span> in the last reading.</p>
      `
    }
  ],

  vocab: [
    { id: 'fero', head: 'ferō', la: 'ferō, ferre, tulī, lātum', pos: 'verb, irregular', en: 'carry, bear; endure; report, say', stress: 'FE-rō · FER-re', deriv: 'fertile, transfer; (lātum) translate', note: 'Cognate with English bear, German gebären, Bürde. fert, ferunt: they say.' },
    { id: 'affero', head: 'afferō', la: 'afferō, afferre, attulī, allātum', pos: 'verb, irregular', en: 'bring (to), bring news of', stress: 'AF-fe-rō · af-FER-re', deriv: 'afferent' },
    { id: 'confero', head: 'cōnferō', la: 'cōnferō, cōnferre, contulī, collātum', pos: 'verb, irregular', en: 'bring together, collect; compare; (sē) betake oneself, go', stress: 'CŌN-fe-rō · cōn-FER-re', deriv: 'confer, collate', note: 'Abbreviation cf. = cōnfer, “compare”.' },
    { id: 'offero', head: 'offerō', la: 'offerō, offerre, obtulī, oblātum', pos: 'verb, irregular', en: 'offer, present', stress: 'OF-fe-rō · of-FER-re', deriv: 'offer, oblation' },
    { id: 'refero', head: 'referō', la: 'referō, referre, rettulī, relātum', pos: 'verb, irregular', en: 'bring back; report, relate', stress: 'RE-fe-rō · re-FER-re', deriv: 'refer, relate', note: 'pedem referre: to retreat.' },
    { id: 'ardeo', head: 'ārdeō', la: 'ārdeō, ārdēre, ārsī, ārsum', pos: 'verb, 2nd conj.', en: 'burn, be on fire; be eager', stress: 'ĀR-de-ō · ār-DĒ-re', deriv: 'ardent, arson' },
    { id: 'desero', head: 'dēserō', la: 'dēserō, dēserere, dēseruī, dēsertum', pos: 'verb, 3rd conj.', en: 'leave, abandon, desert', stress: 'DĒ-se-rō · dē-SE-re-re', deriv: 'desert' },
    { id: 'flamma', head: 'flamma', la: 'flamma, flammae', g: 'f', pos: 'noun, 1st decl.', en: 'flame, fire', stress: 'FLAM-ma', deriv: 'flame, inflammation' },
    { id: 'incendium', head: 'incendium', la: 'incendium, incendiī', g: 'n', pos: 'noun, 2nd decl.', en: 'fire, blaze, conflagration', stress: 'in-CEN-di-um', deriv: 'incendiary', note: 'From incendō, “set on fire”.' },
    { id: 'tenebrae', head: 'tenebrae', la: 'tenebrae, tenebrārum', g: 'f', pos: 'noun, 1st decl. (pl. only)', en: 'darkness', stress: 'TE-ne-brae', deriv: 'tenebrous', note: 'Plural in form, singular in meaning, like German Ferien.' },
    { id: 'solitudo', head: 'sōlitūdō', la: 'sōlitūdō, sōlitūdinis', g: 'f', pos: 'noun, 3rd decl.', en: 'loneliness; deserted place, wilderness', stress: 'sō-li-TŪ-dō · sō-li-TŪ-di-nis', deriv: 'solitude' },
    { id: 'formido', head: 'formīdō', la: 'formīdō, formīdinis', g: 'f', pos: 'noun, 3rd decl.', en: 'fear, terror, dread', stress: 'for-MĪ-dō · for-MĪ-di-nis', deriv: 'formidable' },
    { id: 'quies', head: 'quiēs', la: 'quiēs, quiētis', g: 'f', pos: 'noun, 3rd decl.', en: 'rest, quiet, sleep', stress: 'QUI-ēs · qui-Ē-tis', deriv: 'quiet', note: 'sē quiētī dare: to go to sleep (Pliny 6.16.13).' },
    { id: 'agrestis', head: 'agrestis', la: 'agrestis, agreste', pos: 'adjective, 3rd decl.', en: 'rural, rustic; (as noun, m.) a countryman, peasant', stress: 'a-GRES-tis', note: 'From ager, “field”.' }
  ],

  grammarCards: [
    { id: 'g32-ind', front: 'cum + indicative', back: '“when”: dates the action only (Cum Rōmae sum, …)' },
    { id: 'g32-circ', front: 'Circumstantial cum', back: 'cum + impf. / plupf. subj. in past narrative: “when, as” (Cum dormīvisset, excitātus est.)' },
    { id: 'g32-causal', front: 'Causal cum', back: 'cum + subj.: “since” (Cum perīculum crēsceret, fūgērunt.)' },
    { id: 'g32-conc', front: 'Concessive cum', back: 'cum + subj., usually with tamen: “although”' },
    { id: 'g32-german', front: 'cum in German', back: 'als / wenn (indicative); als, nachdem, da, obwohl (subjunctive)' },
    { id: 'g32-quamquam', front: 'quamquam vs concessive cum', back: 'quamquam + indicative (fact); cum + subjunctive' },
    { id: 'g32-fero', front: 'ferō: principal parts', back: 'ferō, ferre, tulī, lātum' },
    { id: 'g32-pres', front: 'ferō: present active', back: 'ferō, fers, fert, ferimus, fertis, ferunt' },
    { id: 'g32-pass', front: 'ferō: present passive', back: 'feror, ferris, fertur, ferimur, feriminī, feruntur' },
    { id: 'g32-imp', front: 'ferō: imperative; infinitives', back: 'fer, ferte; ferre, ferrī' },
    { id: 'g32-affero', front: 'afferō: principal parts', back: 'afferō, afferre, attulī, allātum' },
    { id: 'g32-refero', front: 'referō: principal parts', back: 'referō, referre, rettulī, relātum' },
    { id: 'g32-offero', front: 'offerō: principal parts', back: 'offerō, offerre, obtulī, oblātum' },
    { id: 'g32-confero', front: 'cōnferō: principal parts', back: 'cōnferō, cōnferre, contulī, collātum' },
    { id: 'g32-fertur', front: 'fertur, ferunt', back: 'it is said, they say' },
    { id: 'g32-catullus', front: 'nōbīs cum semel occidit brevis lūx', back: 'for us, when once our brief light has set (Catullus 5.5; cum + indicative)' },
    { id: 'g32-quievit', front: 'Tum sē quiētī dedit et quiēvit vērissimō quidem somnō.', back: 'Then he went to rest and slept a truly genuine sleep. (Pliny 6.16.13)' },
    { id: 'g32-remedium', front: 'in remedium formīdinis dictitābat', back: 'he kept saying, as a remedy for their fear (Pliny 6.16.13)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">fert</span>:', options: ['he carries', 'he carried', 'carry!', 'to carry'], answer: 0, explain: 'Present 3rd sg., no thematic vowel.' },
    { id: 'e2', type: 'mc', prompt: 'Principal parts of <span class="la">ferō</span>:', options: ['ferō, ferre, tulī, lātum', 'ferō, ferēre, fērī, fertum', 'ferō, ferre, fēcī, factum', 'ferō, ferīre, ferīvī, ferītum'], answer: 0, explain: 'Three roots.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Cum perīculum magnum esset, tamen mānsit.</span>', options: ['Although the danger was great, he stayed.', 'Since the danger was great, he stayed.', 'When the danger is great, he stays.', 'The danger was great with him, and he stayed.'], answer: 0, explain: 'tamen signals a concessive clause.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Cum Rōmae sum, amīcōs vīsitō.</span>', options: ['When I am in Rome, I visit my friends.', 'Since I am in Rome, I visit my friends.', 'Although I am in Rome, I visit my friends.', 'With Rome I visit my friends.'], answer: 0, explain: 'cum + indicative: “when”.' },
    { id: 'e5', type: 'mc', prompt: 'Perfect of <span class="la">referō</span>:', options: ['rettulī', 'refērī', 'relātī', 'retulit'], answer: 0, explain: 'rettulī, with double t.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">fertur</span> most often means:', options: ['it is said', 'he carries', 'he endures', 'it was carried'], answer: 0, explain: 'Also “he is carried”, but often “it is said”.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Cum dormīv___, excitātus est.</span>', hint: 'he had slept', answers: ['isset'], full: 'Cum dormīvisset, excitātus est.', explain: 'Circumstantial cum: pluperfect subjunctive.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Servī cibum ___.</span>', hint: 'carry (present)', answers: ['ferunt'], full: 'Servī cibum ferunt.', explain: '3rd pl.: ferunt.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">___ mihi aquam!</span>', hint: 'bring (sg.)', answers: ['fer', 'affer'], full: 'Fer mihi aquam!', explain: 'Imperative fer, like dīc, dūc, fac.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Cum nāvis appropinqu___, cinis incidēbat.</span>', hint: 'was approaching', answers: ['āret', 'aret'], full: 'Cum nāvis appropinquāret, cinis incidēbat.', explain: 'Circumstantial cum: imperfect subjunctive.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Nūntius epistulam ___ .</span>', hint: 'brought (perfect, afferō)', answers: ['attulit'], full: 'Nūntius epistulam attulit.', explain: 'afferō, afferre, attulī, allātum.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Cum fessī essent, ___ labōrāvērunt.</span>', hint: 'nevertheless', answers: ['tamen'], full: 'Cum fessī essent, tamen labōrāvērunt.', explain: 'tamen: concessive cum.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the present indicative of <span class="la">ferō</span>, active and passive.', headers: ['active', 'passive'], rows: [
      { label: '1st sg.', answers: ['ferō', 'feror'] },
      { label: '2nd sg.', answers: ['fers', 'ferris|ferre'] },
      { label: '3rd sg.', answers: ['fert', 'fertur'] },
      { label: '1st pl.', answers: ['ferimus', 'ferimur'] },
      { label: '2nd pl.', answers: ['fertis', 'feriminī'] },
      { label: '3rd pl.', answers: ['ferunt', 'feruntur'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the present and imperfect subjunctive active of <span class="la">ferō</span>.', headers: ['present subj.', 'imperfect subj.'], rows: [
      { label: '1st sg.', answers: ['feram', 'ferrem'] },
      { label: '2nd sg.', answers: ['ferās', 'ferrēs'] },
      { label: '3rd sg.', answers: ['ferat', 'ferret'] },
      { label: '1st pl.', answers: ['ferāmus', 'ferrēmus'] },
      { label: '2nd pl.', answers: ['ferātis', 'ferrētis'] },
      { label: '3rd pl.', answers: ['ferant', 'ferrent'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each compound to its meaning.', pairs: [
      ['afferō', 'bring (to)'], ['cōnferō', 'bring together'], ['offerō', 'offer'], ['referō', 'bring back, report'], ['differō', 'postpone']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Cum Caesar vēnisset, hostēs fūgērunt.', tokens: ['When Caesar', 'had come,', 'the enemy', 'fled'], explain: 'Circumstantial cum with pluperfect subjunctive.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Cum pluat, domī manēbimus.', model: 'Since it is raining, we shall stay at home.', accepted: ['since it is raining we shall stay at home', 'since it is raining we will stay at home', 'as it is raining we shall stay at home', 'as it is raining we will stay at home', 'because it is raining we shall stay at home', 'because it is raining we will stay at home', 'since it rains we shall stay at home', 'since it rains we will stay at home', 'since it is raining we shall stay home', 'since it is raining we will stay home'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Puer librum magistrō rettulit.', model: 'The boy brought the book back to the teacher.', accepted: ['boy brought book back to teacher', 'boy brought back book to teacher', 'boy returned book to teacher', 'boy gave book back to teacher', 'boy brought teacher book back'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Fertur rēx fūgisse.', model: 'The king is said to have fled.', accepted: ['king is said to have fled', 'king is said to have escaped', 'it is said that king fled', 'it is said that king has fled', 'it is said king fled'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'you (pl.) carry', model: 'fertis', accepted: ['fertis'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'to carry (present active infinitive)', model: 'ferre', accepted: ['ferre'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'they offered (perfect)', model: 'obtulērunt', accepted: ['obtulērunt', 'obtulēre'] },
    { id: 'e23', type: 'mc', prompt: 'What did the elder Pliny tell the household the flames were?', options: ['Fires left by panicking peasants and abandoned villas burning', 'Flames from the mountain', 'Signal fires of the fleet', 'Lightning'], answer: 0, explain: 'agrestium trepidātiōne ignēs relictōs dēsertāsque vīllās … ārdēre.' },
    { id: 'e24', type: 'mc', prompt: 'How did the people at the door know he was sleeping soundly?', options: ['They heard his heavy breathing', 'He told them', 'They saw him through the window', 'The slaves reported it'], answer: 0, explain: 'meātus animae … ab iīs quī līminī obversābantur audiēbātur.' },
    { id: 'e25', type: 'mc', prompt: '<span class="la">lātissimae flammae</span> (Pliny): <span class="la">lātissimae</span> comes from:', options: ['lātus, “wide”', 'lātum, supine of ferō', 'latēre, “lie hidden”', 'Latium'], answer: 0, explain: 'Superlative of lātus, “wide”: unrelated to lātum from ferō.' }
  ],

  reading: {
    title: 'Nox Stabiīs (Plīnius, Epistulae 6.16.13–14)',
    note: 'Authentic text, unadapted: Pliny the Younger, Letters 6.16.13–14, from the copy in the course’s source files; length marks added. Tap any word.',
    text: 'Interim ē Vesuviō monte plūribus locīs lātissimae flammae altaque incendia relūcēbant, quōrum fulgor et clāritās tenebrīs noctis excitābātur. Ille agrestium trepidātiōne ignēs relictōs dēsertāsque vīllās per sōlitūdinem ārdēre in remedium formīdinis dictitābat. Tum sē quiētī dedit et quiēvit vērissimō quidem somnō; nam meātus animae, quī illī propter amplitūdinem corporis gravior et sonantior erat, ab iīs quī līminī obversābantur audiēbātur. Sed ārea ex quā diaeta adībātur ita iam cinere mixtīsque pūmicibus opplēta surrēxerat, ut, sī longior in cubiculō mora, exitus negārētur. Excitātus prōcēdit, sēque Pompōniānō cēterīsque quī pervigilāverant reddit.',
    translation: 'Meanwhile on Mount Vesuvius very broad flames and tall fires were blazing in several places, their glare and brightness heightened by the darkness of the night. To relieve their fear, my uncle kept saying that these were fires left behind by country people in their panic, and abandoned villas burning in the deserted countryside. Then he went to rest and slept a truly genuine sleep; for his breathing, which was rather heavy and loud because of his bulk, was heard by those who were passing to and fro at his door. But the courtyard from which his room was reached had by now been so filled with ash and pumice mixed together, and had risen so high, that if he had stayed any longer in the bedroom, the way out would have been cut off. He is woken, comes out, and rejoins Pomponianus and the others, who had stayed awake all night.',
    notes: [
      { ref: 'plūribus locīs lātissimae flammae altaque incendia relūcēbant', html: '<span class="la">plūribus locīs</span>: ablative of place without a preposition, “in several places”. <span class="la">lātissimae</span>: superlative of <span class="la">lātus</span>, “wide”, not the participle of <span class="la">ferō</span>.' },
      { ref: 'quōrum fulgor et clāritās tenebrīs noctis excitābātur', html: '<span class="la">quōrum</span>: “of which”, referring to flames and fires together (neuter plural for mixed genders). Two subjects with a singular verb: they form one idea. <span class="la">tenebrīs</span>: ablative of cause, “heightened by the darkness”.' },
      { ref: 'Ille agrestium trepidātiōne ignēs relictōs dēsertāsque vīllās per sōlitūdinem ārdēre … dictitābat', html: 'Indirect statement (Lecture XXVI): <span class="la">dictitābat</span> + accusatives <span class="la">ignēs relictōs</span>, <span class="la">vīllās</span> + infinitive <span class="la">ārdēre</span>. <span class="la">agrestium trepidātiōne</span>: “through the panic of the country people”, with <span class="la">relictōs</span>. <span class="la">dictitābat</span>: frequentative of <span class="la">dictō</span>, “kept saying”.' },
      { ref: 'in remedium formīdinis', html: '<span class="la">in</span> + accusative of purpose: “as a remedy for (their) fear”.' },
      { ref: 'Tum sē quiētī dedit et quiēvit vērissimō quidem somnō', html: '<span class="la">sē quiētī dare</span>: “to give oneself to rest”. <span class="la">vērissimō somnō</span>: ablative of manner; <span class="la">quidem</span> stresses the word before it, “a truly real sleep”, not a pretence.' },
      { ref: 'meātus animae, quī illī propter amplitūdinem corporis gravior et sonantior erat', html: '<span class="la">meātus animae</span>: “the passage of his breath”, his breathing. <span class="la">illī</span>: dative of possession or reference, “in his case”. <span class="la">gravior et sonantior</span>: comparatives meaning “rather heavy and loud” (Lecture XXVII). The nephew mentions his uncle’s bulk again in 6.16.19.' },
      { ref: 'ab iīs quī līminī obversābantur audiēbātur', html: '<span class="la">līminī</span>: dative with <span class="la">obversor</span>, “move about in front of the threshold”: slaves or attendants outside his door. The passive <span class="la">audiēbātur</span> was the title of Lecture XIX.' },
      { ref: 'Sed ārea ex quā diaeta adībātur', html: '<span class="la">ārea</span>: an open courtyard; <span class="la">diaeta</span>: a living room or suite, here the room he slept in. <span class="la">adībātur</span>: imperfect passive of <span class="la">adeō</span>, “was approached”.' },
      { ref: 'ita iam cinere mixtīsque pūmicibus opplēta surrēxerat, ut, sī longior in cubiculō mora, exitus negārētur', html: 'A result clause with <span class="la">ita … ut</span> (Lecture XXX). <span class="la">surrēxerat</span>: “had risen”, the level of the courtyard floor rising with ash. <span class="la">sī longior … mora</span> [<span class="la">fuisset</span>]: “if there had been a longer stay”. <span class="la">negārētur</span>: “would have been denied”. Strictly a pluperfect would be expected for this unreal past condition; the imperfect is the vivid form, a usage commentators note.' },
      { ref: 'Excitātus prōcēdit, sēque Pompōniānō cēterīsque quī pervigilāverant reddit', html: '<span class="la">excitātus</span>: “having been woken”. <span class="la">sē reddere</span> + dative: “return oneself to, rejoin”. <span class="la">pervigilāverant</span>: “had stayed awake all night”, pluperfect, in contrast to his own sleep.' }
    ],
    glosses: {
      'interim': 'meanwhile', 'ē': 'from, on (+ abl.)', 'vesuviō': 'abl. of Vesuvius', 'monte': 'abl. of mōns: mountain', 'plūribus': 'abl. pl. of plūrēs: several', 'locīs': 'abl. pl. of locus: in places', 'lātissimae': 'nom. pl. f. of lātissimus: very wide', 'flammae': 'nom. pl. of flamma: flames', 'altaque': 'and tall (nom. pl. n. + -que)', 'incendia': 'nom. pl. of incendium: fires', 'relūcēbant': 'impf. 3rd pl. of relūceō: were blazing',
      'quōrum': 'gen. pl. of quī: whose, of which', 'fulgor': 'glare (nom.)', 'et': 'and', 'clāritās': 'brightness (nom.)', 'tenebrīs': 'abl. of tenebrae: by the darkness', 'noctis': 'gen. of nox: of the night', 'excitābātur': 'impf. pass. 3rd sg. of excitō: was heightened',
      'ille': 'he (the uncle)', 'agrestium': 'gen. pl. of agrestis: of the country people', 'trepidātiōne': 'abl. of trepidātiō: through panic', 'ignēs': 'acc. pl. of ignis: fires', 'relictōs': 'acc. pl. of relictus: left behind', 'dēsertāsque': 'and abandoned (acc. pl. f. + -que)', 'vīllās': 'acc. pl. of vīlla: villas', 'per': 'through, across', 'sōlitūdinem': 'acc. of sōlitūdō: the deserted countryside', 'ārdēre': 'inf. of ārdeō: were burning', 'in': 'as, for (+ acc.)', 'remedium': 'remedy (acc.)', 'formīdinis': 'gen. of formīdō: of fear', 'dictitābat': 'impf. 3rd sg. of dictitō: kept saying',
      'tum': 'then', 'sē': 'himself', 'quiētī': 'dat. of quiēs: to rest', 'dedit': 'perf. 3rd sg. of dō: gave', 'quiēvit': 'perf. 3rd sg. of quiēscō: slept', 'vērissimō': 'abl. of vērissimus: most real', 'quidem': 'indeed', 'somnō': 'abl. of somnus: sleep',
      'nam': 'for', 'meātus': 'passage (nom.)', 'animae': 'gen. of anima: of breath', 'quī': 'which; who', 'illī': 'dat. of ille: in his case', 'propter': 'because of (+ acc.)', 'amplitūdinem': 'acc. of amplitūdō: bulk', 'corporis': 'gen. of corpus: of body', 'gravior': 'rather heavy', 'sonantior': 'rather loud', 'erat': 'was', 'ab': 'by (+ abl.)', 'iīs': 'abl. pl. of is: those', 'līminī': 'dat. of līmen: at the threshold', 'obversābantur': 'impf. 3rd pl. of obversor: were moving about', 'audiēbātur': 'impf. pass. 3rd sg. of audiō: was heard',
      'sed': 'but', 'ārea': 'courtyard (nom.)', 'ex': 'from (+ abl.)', 'quā': 'abl. f. of quī: which', 'diaeta': 'room, suite (nom.)', 'adībātur': 'impf. pass. 3rd sg. of adeō: was entered', 'ita': 'so', 'iam': 'already, by now', 'cinere': 'abl. of cinis: with ash', 'mixtīsque': 'and mixed (abl. pl. + -que)', 'pūmicibus': 'abl. pl. of pūmex: pumice', 'opplēta': 'filled up (nom. f.)', 'surrēxerat': 'plupf. 3rd sg. of surgō: had risen',
      'ut': 'that (+ subj.)', 'sī': 'if', 'longior': 'longer', 'cubiculō': 'abl. of cubiculum: bedroom', 'mora': 'delay, stay (nom.)', 'exitus': 'way out (nom.)', 'negārētur': 'impf. subj. pass. of negō: would be denied',
      'excitātus': 'having been woken', 'prōcēdit': '3rd sg. of prōcēdō: comes out', 'sēque': 'and himself (sē + -que)', 'pompōniānō': 'dat. of Pompōniānus: to Pomponianus', 'cēterīsque': 'and to the others (dat. pl. + -que)', 'pervigilāverant': 'plupf. 3rd pl. of pervigilō: had stayed awake all night', 'reddit': '3rd sg. of reddō: returns'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Why were the flames on the mountain so striking?', options: ['The darkness of the night made them brighter', 'They were coloured', 'They were close to the house', 'The moon was full'], answer: 0, explain: 'fulgor et clāritās tenebrīs noctis excitābātur.' },
      { id: 'r2', type: 'mc', prompt: 'Why did the uncle explain the flames as he did?', options: ['As a remedy for their fear', 'Because he was sure of it', 'To mock his host', 'To test his nephew'], answer: 0, explain: 'in remedium formīdinis.' },
      { id: 'r3', type: 'mc', prompt: 'Why was his breathing heavy and loud?', options: ['Because of his bulk', 'Because of the ash', 'Because he was ill with fever', 'Because he had eaten too much'], answer: 0, explain: 'propter amplitūdinem corporis.' },
      { id: 'r4', type: 'mc', prompt: 'What had Pomponianus and the others done that night?', options: ['Stayed awake', 'Slept soundly', 'Fled by ship', 'Gone to the shore'], answer: 0, explain: 'quī pervigilāverant.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">ferrī</span>:', options: ['present passive infinitive: to be carried', 'present active infinitive', 'perfect active', 'imperative'], answer: 0, explain: 'ferre (active), ferrī (passive).' },
      { id: 't2', type: 'mc', prompt: 'Supine of <span class="la">afferō</span>:', options: ['allātum', 'adlātum', 'attulum', 'affertum'], answer: 0, explain: 'ad + lātum → allātum.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Cum hostēs urbem cēpissent, cīvēs fūgērunt.</span>', options: ['When the enemy had taken the city, the citizens fled.', 'Although the enemy had taken the city, the citizens fled.', 'With the enemy the citizens took the city and fled.', 'When the enemy take the city, the citizens flee.'], answer: 0, explain: 'Circumstantial cum + pluperfect subjunctive.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Mīlitēs arma ___ .</span>', hint: 'carry', answers: ['ferunt'], full: 'Mīlitēs arma ferunt.', explain: 'Present 3rd pl.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Cum aeger ___, tamen labōrābat.</span>', hint: 'he was (subjunctive)', answers: ['esset'], full: 'Cum aeger esset, tamen labōrābat.', explain: 'Concessive cum: imperfect subjunctive.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Cum vēneris, omnia tibi nārrābō.', model: 'When you come, I shall tell you everything.', accepted: ['when you come i shall tell you everything', 'when you come i will tell you everything', 'when you have come i shall tell you everything', 'when you have come i will tell you everything', 'when you come i shall tell you all', 'when you come i will tell you all'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'he brought back (perfect of referō)', model: 'rettulit', accepted: ['rettulit', 'retulit'] },
      { id: 't8', type: 'mc', prompt: 'Which word in the main clause usually marks a concessive cum clause?', options: ['tamen', 'tum', 'ita', 'utinam'], answer: 0, explain: 'tamen, “nevertheless”.' },
      { id: 't9', type: 'mc', prompt: 'Why did the elder Pliny have to leave his room?', options: ['The courtyard was filling with ash and pumice', 'The house was on fire', 'Pomponianus called him to dinner', 'The ship was ready'], answer: 0, explain: 'ita … opplēta surrēxerat, ut … exitus negārētur.' },
      { id: 't10', type: 'mc', prompt: 'In Catullus 5, <span class="la">cum semel occidit brevis lūx</span> uses the indicative because:', options: ['cum only states when', 'it is concessive', 'it is causal', 'poetry ignores the rules'], answer: 0, explain: 'Temporal cum with the indicative.' },
      { id: 't11', type: 'mc', prompt: 'English “relate” and “refer” both come from:', options: ['referō', 'regō', 'relinquō', 'reddō'], answer: 0, explain: 'referō, relātum.' }
    ]
  },

  reference: [
    { title: 'Types of cum clause', headers: ['Type', 'Mood', 'English', 'German'], rows: [
      ['Temporal', 'indicative', 'when', 'als, wenn'], ['Circumstantial', 'impf. / plupf. subj.', 'when, as', 'als, nachdem'], ['Causal', 'subjunctive', 'since', 'da'], ['Concessive (tamen)', 'subjunctive', 'although', 'obwohl']
    ] },
    { title: 'ferō: present indicative', headers: ['', 'Active', 'Passive'], rows: [
      ['1st sg.', 'ferō', 'feror'], ['2nd sg.', 'fers', 'ferris'], ['3rd sg.', 'fert', 'fertur'], ['1st pl.', 'ferimus', 'ferimur'], ['2nd pl.', 'fertis', 'feriminī'], ['3rd pl.', 'ferunt', 'feruntur']
    ] },
    { title: 'Compounds of ferō', headers: ['Present', 'Infinitive', 'Perfect', 'Supine'], rows: [
      ['afferō', 'afferre', 'attulī', 'allātum'], ['cōnferō', 'cōnferre', 'contulī', 'collātum'], ['dēferō', 'dēferre', 'dētulī', 'dēlātum'], ['offerō', 'offerre', 'obtulī', 'oblātum'], ['referō', 'referre', 'rettulī', 'relātum'], ['differō', 'differre', 'distulī', 'dīlātum'], ['tollō', 'tollere', 'sustulī', 'sublātum']
    ] }
  ]
});
