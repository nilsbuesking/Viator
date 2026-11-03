/*
 * Latin — Lecture XXX: the imperfect subjunctive; purpose clauses after past verbs;
 * result clauses (ita … ut, adeō … ut); utinam with the imperfect subjunctive.
 * Authentic reading: Pliny, Letters 6.16.8–10.
 * Content file only. Source texts (Pliny, Letters 6.16) checked against the text supplied by Nils;
 * length marks editorial. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-30',
  number: 30,
  title: 'Adeō solūtus metū',
  subtitle: 'The imperfect subjunctive (amārem, essem); purpose after a past verb; result clauses with ut and ut nōn; utinam; authentic reading: Pliny 6.16.8–10',
  minutes: 70,

  intro: `
    <p>The imperfect subjunctive is the easiest Latin tense to form: take the present active infinitive and add the personal endings. <span class="la">amāre → amārem</span>, <span class="la">regere → regerem</span>, <span class="la">esse → essem</span>. It is used, above all, in subordinate clauses that depend on a verb in a past tense: <span class="la">Venit ut videat</span>, “He comes in order to see”, but <span class="la">Vēnit ut vidēret</span>, “He came in order to see”.</p>
    <p>This lecture also introduces <strong>result clauses</strong>: “so … that”. Latin uses <span class="la">ut</span> again, with the subjunctive, after a signal word in the main clause such as <span class="la">ita</span>, <span class="la">tam</span>, <span class="la">adeō</span> or <span class="la">tantus</span>. Pliny says his uncle was <span class="la">adeō solūtus metū, ut</span> … “so free from fear that he dictated notes on every movement of the eruption”. German says <em>so … dass</em>, with the indicative.</p>
    <p>The reading continues Pliny’s letter from where Lecture XXVII stopped: Rectina’s message and the turn from science to rescue.</p>
  `,

  background: [
    {
      title: 'Rectina’s message',
      html: `
        <p>As the elder Pliny left the house to inspect the cloud, he received a note from Rectina, whose villa lay at the foot of the mountain and who could escape only by sea. The text calls her <span class="la">Rectīnae Tascī</span>, usually taken as “Rectina, (wife) of Tascius”; the manuscripts are not unanimous about the second name, and nothing else is securely known of her. She asked him to rescue her from so great a danger, <span class="la">ut sē tantō discrīminī ēriperet</span>.</p>
        <p>Pliny turned the expedition into a rescue. He launched the fleet’s <span class="la">quadrirēmēs</span>, large warships, and sailed straight towards the danger from which everyone else was fleeing. How a “four” was rowed (four banks of oars, or four men to an oar, or some combination) is still debated by historians of ancient ships; the point is that these were heavy warships, not the light <span class="la">liburnica</span> he had first ordered.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Schiffsrelief_Palestrina.jpg/960px-Schiffsrelief_Palestrina.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Schiffsrelief_Palestrina.jpg/500px-Schiffsrelief_Palestrina.jpg|https://upload.wikimedia.org/wikipedia/commons/5/58/Schiffsrelief_Palestrina.jpg" alt="Stone relief of a Roman oared warship with armed men on deck"><figcaption>Relief of a Roman warship with marines on deck, from Praeneste (Palestrina); Vatican Museums, late 1st century BC. It is often connected with the battle of Actium and is usually taken to show a two-level ship, not a quadrireme; it gives an idea of a fleet warship, not of Pliny’s vessel. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Schiffsrelief_Palestrina.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Dictāret ēnotāretque',
      html: `
        <p>The nephew says his uncle was so unafraid that he dictated and noted down every movement and every shape of the disaster as he observed it. This fits what Pliny tells elsewhere about his uncle’s habits (<em>Letters</em> 3.5): a secretary with a book and writing tablets always sat beside him, even on journeys, and he regarded any time not spent studying as lost. Whether notes were actually taken on the deck of a quadrireme under falling ash cannot be checked, and none survived; the detail completes a portrait of the scholar who remains a scholar to the end.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Schulrelief.jpg/960px-Schulrelief.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Schulrelief.jpg/500px-Schulrelief.jpg|https://upload.wikimedia.org/wikipedia/commons/2/22/Schulrelief.jpg" alt="Roman stone relief of a seated man between two seated boys holding scrolls, with a third boy arriving"><figcaption>The “school relief” from Neumagen near Trier (Rheinisches Landesmuseum Trier, late 2nd century AD): a seated man between two youths reading from scrolls, while a third arrives with a writing case. Usually read as a teacher with pupils; some scholars see a private tutor or a household scene. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Schulrelief.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'wäre, hätte: Konjunktiv II',
      html: `
        <p>German forms its Konjunktiv II from the Präteritum (<em>war → wäre, hatte → hätte, kam → käme</em>) and uses it for wishes and conditions contrary to fact: <em>Wärst du doch hier!</em> Latin uses the imperfect subjunctive in exactly this way: <span class="la">Utinam adessēs!</span>, “If only you were here!” (but you are not). The present subjunctive expresses a wish that can still come true: <span class="la">Utinam veniat!</span>, “May he come!”. Conditions of this kind are treated in Lecture XXXIV.</p>
        <p>The parallel is only one of use. Latin forms its imperfect subjunctive from the infinitive, not from a past tense, and uses it far more widely than German uses the Konjunktiv II.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Sed ārea ex quā diaeta adībātur ita iam cinere mixtīsque pūmicibus opplēta surrēxerat, ut, sī longior in cubiculō mora, exitus negārētur.</p>
    <p>“But the courtyard from which his room was entered had by now been so filled with ash and pumice mixed together, and had risen so high, that if he had stayed any longer in the bedroom, the way out would have been cut off.” Pliny, <em>Letters</em> 6.16.14, checked against the text Nils supplied; length marks added. A result clause: <span class="la">ita … ut … negārētur</span>, with the imperfect subjunctive. The courtyard “rose” as ash and pumice piled up in it.</p>
    <p>Two sentences earlier, a purpose clause after a historic present: to calm his frightened friend, the elder Pliny had himself carried to the bath, <span class="la">utque timōrem eius suā sēcūritāte lēnīret</span>, “and in order to soothe his fear by his own unconcern” (6.16.12). The verb <span class="la">iubet</span> is present in form, but the narrative is in the past, so Pliny uses the imperfect subjunctive <span class="la">lēnīret</span>.</p>
    <p>And from Lecture XXVII: the uncle offered to take his nephew <span class="la">sī venīre ūnā vellem</span>, “if I wished to come along”, and had given him <span class="la">quod scrīberem</span>, “something to write”: <span class="la">vellem, scrīberem</span>, imperfect subjunctives.</p>
  `,

  pronunciation: `
    <h3>amārem, amārēmus</h3>
    <p>The vowel before <span class="la">-r-</span> is the long vowel of the infinitive: <span class="la">a-MĀ-rem, mo-NĒ-rem, au-DĪ-rem</span>, but <span class="la">RE-ge-rem</span> with short <span class="la">e</span>. The <span class="la">e</span> of the ending is long before <span class="la">-s, -mus, -tis</span>: <span class="la">a-mā-RĒ-mus, re-ge-RĒ-tis</span>.</p>
    <h3>essem, possem, vellem</h3>
    <p><span class="la">ES-sem, POS-sem, VEL-lem</span>: each comes from its infinitive (<span class="la">esse, posse, velle</span>).</p>
  `,

  grammar: [
    {
      title: '1. Forming the imperfect subjunctive',
      html: `
        <p>Present active infinitive + <span class="la">-m, -s, -t, -mus, -tis, -nt</span> (active) or <span class="la">-r, -ris, -tur, -mur, -minī, -ntur</span> (passive):</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>amō</th><th>regō</th><th>audiō</th><th>sum</th><th>possum</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">amārem</td><td class="la">regerem</td><td class="la">audīrem</td><td class="la">essem</td><td class="la">possem</td></tr>
            <tr><th>2nd sg.</th><td class="la">amārēs</td><td class="la">regerēs</td><td class="la">audīrēs</td><td class="la">essēs</td><td class="la">possēs</td></tr>
            <tr><th>3rd sg.</th><td class="la">amāret</td><td class="la">regeret</td><td class="la">audīret</td><td class="la">esset</td><td class="la">posset</td></tr>
            <tr><th>1st pl.</th><td class="la">amārēmus</td><td class="la">regerēmus</td><td class="la">audīrēmus</td><td class="la">essēmus</td><td class="la">possēmus</td></tr>
            <tr><th>2nd pl.</th><td class="la">amārētis</td><td class="la">regerētis</td><td class="la">audīrētis</td><td class="la">essētis</td><td class="la">possētis</td></tr>
            <tr><th>3rd pl.</th><td class="la">amārent</td><td class="la">regerent</td><td class="la">audīrent</td><td class="la">essent</td><td class="la">possent</td></tr>
          </tbody>
        </table></div>
        <p>Passive: <span class="la">amārer, amārēris, amārētur …</span>; <span class="la">regerer, regerēris, regerētur …</span>. Note that the passive is built on the <em>active</em> infinitive: <span class="la">regerer</span>, not <span class="la">*regīrer</span>.</p>
        <p>Irregular verbs follow the rule too: <span class="la">velle → vellem</span>, <span class="la">ferre → ferrem</span>, <span class="la">īre → īrem</span>. <span class="la">capiō</span>: <span class="la">capere → caperem</span> (no <span class="la">i</span>).</p>
      `
    },
    {
      title: '2. Purpose clauses after a past verb',
      html: `
        <p>A purpose clause depending on a past tense takes the imperfect subjunctive:</p>
        <ul>
          <li><span class="la">Venit ut videat.</span> He comes in order to see.</li>
          <li><span class="la">Vēnit ut vidēret.</span> He came in order to see.</li>
          <li><span class="la">Fūgērunt nē caperentur.</span> They fled so as not to be captured.</li>
        </ul>
        <p>This is the core of the “sequence of tenses”, set out fully in Lecture XXXI: present and future main verbs (primary sequence) take the present subjunctive; past main verbs (secondary sequence) take the imperfect. A historic present, as in Pliny’s narrative, may take either; Pliny usually treats it as past.</p>
      `
    },
    {
      title: '3. Result clauses',
      html: `
        <p>A clause stating the result or consequence of the main action takes <span class="la">ut</span> + subjunctive; the negative is <span class="la">ut nōn</span>. The main clause usually contains a signal word:</p>
        <ul>
          <li><span class="la">ita, sīc</span>: so, in such a way</li>
          <li><span class="la">tam</span> (with adjectives and adverbs): so</li>
          <li><span class="la">adeō</span>: to such an extent, so</li>
          <li><span class="la">tantus</span>: so great; <span class="la">tālis</span>: such; <span class="la">tot</span>: so many</li>
        </ul>
        <ul>
          <li><span class="la">Tam fessus erat ut dormīret.</span> He was so tired that he slept.</li>
          <li><span class="la">Tanta erat tempestās ut nāvēs nāvigāre nōn possent.</span> The storm was so great that the ships could not sail.</li>
          <li><span class="la">adeō solūtus metū, ut … dictāret ēnotāretque</span>: so free from fear that he dictated and noted down (Pliny).</li>
        </ul>
        <p>German <em>so … dass</em> and English “so … that” use the indicative, because the result is a fact. Latin uses the subjunctive all the same. Translate with an English indicative: “he slept”, not “he might sleep”.</p>
      `
    },
    {
      title: '4. Purpose or result?',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Purpose</th><th>Result</th></tr></thead>
          <tbody>
            <tr><td>Positive</td><td class="la">ut</td><td class="la">ut</td></tr>
            <tr><td>Negative</td><td class="la">nē</td><td class="la">ut nōn</td></tr>
            <tr><td>Signal word in main clause</td><td>none (sometimes <span class="la">eō cōnsiliō</span>)</td><td class="la">ita, sīc, tam, adeō, tantus, tālis, tot</td></tr>
            <tr><td>“nobody, never” in the clause</td><td class="la">nē quis, nē umquam</td><td class="la">ut nēmō, ut numquam</td></tr>
            <tr><td>English</td><td>in order to, so that … may</td><td>so … that (indicative)</td></tr>
          </tbody>
        </table></div>
        <p>If there is a signal word, it is almost certainly a result clause. If the sentence is negative, the conjunction tells you at once.</p>
      `
    },
    {
      title: '5. utinam',
      html: `
        <p><span class="la">utinam</span> introduces a wish (negative <span class="la">utinam nē</span>):</p>
        <ul>
          <li>Present subjunctive: a wish that may come true. <span class="la">Utinam veniat!</span> May he come! I hope he comes.</li>
          <li>Imperfect subjunctive: a wish for the present that cannot be fulfilled. <span class="la">Utinam adessēs!</span> If only you were here! (<em>Wärst du doch hier!</em>)</li>
        </ul>
        <p>The pluperfect subjunctive (Lecture XXXI) expresses an unfulfilled wish about the past: “If only you had been here!”.</p>
      `
    }
  ],

  vocab: [
    { id: 'ita', head: 'ita', la: 'ita', pos: 'adverb', en: 'so, thus, in such a way', stress: 'I-ta', note: 'Signal word for a result clause.' },
    { id: 'tam', head: 'tam', la: 'tam', pos: 'adverb', en: 'so (with adjectives and adverbs)', stress: 'TAM', note: 'tam fessus ut …: so tired that …' },
    { id: 'adeo', head: 'adeō', la: 'adeō', pos: 'adverb', en: 'to such an extent, so much, so', stress: 'A-de-ō', note: 'Not to be confused with the verb adeō, “approach”.' },
    { id: 'talis', head: 'tālis', la: 'tālis, tāle', pos: 'adjective, 3rd decl.', en: 'such, of such a kind', stress: 'TĀ-lis' },
    { id: 'tot', head: 'tot', la: 'tot (indecl.)', pos: 'adjective', en: 'so many', stress: 'TOT', note: 'Aeneid 1.9: tot volvere cāsūs. Compare quot (Lecture XVI).' },
    { id: 'utinam', head: 'utinam', la: 'utinam', pos: 'particle', en: 'if only, would that (introducing a wish)', stress: 'U-ti-nam' },
    { id: 'discrimen', head: 'discrīmen', la: 'discrīmen, discrīminis', g: 'n', pos: 'noun, 3rd decl.', en: 'crisis, danger; difference', stress: 'dis-CRĪ-men · dis-CRĪ-mi-nis', deriv: 'discriminate', note: 'From discernō, “separate”: the decisive point.' },
    { id: 'codicilli', head: 'cōdicillī', la: 'cōdicillī, cōdicillōrum', g: 'm', pos: 'noun, 2nd decl. (pl.)', en: 'writing tablets; a short note, letter', stress: 'cō-di-CIL-lī', deriv: 'codicil', note: 'Diminutive of cōdex.' },
    { id: 'quadriremis', head: 'quadrirēmis', la: 'quadrirēmis, quadrirēmis', g: 'f', pos: 'noun, 3rd decl. (i-stem)', en: 'quadrireme, a large warship (“four”)', stress: 'qua-dri-RĒ-mis', note: 'quattuor + rēmus.' },
    { id: 'gubernaculum', head: 'gubernāculum', la: 'gubernāculum, gubernāculī', g: 'n', pos: 'noun, 2nd decl.', en: 'rudder, helm', stress: 'gu-ber-NĀ-cu-lum', note: 'Compare gubernātor (Lecture XIX).' },
    { id: 'ora', head: 'ōra', la: 'ōra, ōrae', g: 'f', pos: 'noun, 1st decl.', en: 'shore, coast; edge', stress: 'Ō-ra', note: 'Aeneid 1.1: Trōiae … ab ōrīs.' },
    { id: 'oro', head: 'ōrō', la: 'ōrō, ōrāre, ōrāvī, ōrātum', pos: 'verb, 1st conj.', en: 'beg, plead, pray; speak', stress: 'Ō-rō · ō-RĀ-re', deriv: 'oration, oracle', note: 'From ōs, “mouth”; compare ōrātor.' },
    { id: 'amoenitas', head: 'amoenitās', la: 'amoenitās, amoenitātis', g: 'f', pos: 'noun, 3rd decl.', en: 'pleasantness, charm (of a place)', stress: 'a-MOE-ni-tās · a-moe-ni-TĀ-tis', note: 'From amoenus, “pleasant”: locus amoenus, the lovely spot of poetry.' },
    { id: 'solvo', head: 'solvō', la: 'solvō, solvere, solvī, solūtum', pos: 'verb, 3rd conj.', en: 'loosen, free; pay; set sail (nāvem)', stress: 'SOL-vō · SOL-ve-re', deriv: 'solve, solution', note: 'solūtus metū: freed from fear.' },
    { id: 'lenio', head: 'lēniō', la: 'lēniō, lēnīre, lēnīvī, lēnītum', pos: 'verb, 4th conj.', en: 'soften, soothe, calm', stress: 'LĒ-ni-ō · lē-NĪ-re', deriv: 'lenient', note: 'From lēnis, “gentle”.' },
    { id: 'deprendo', head: 'dēprendō', la: 'dēprendō (dēprehendō), dēprendere, dēprendī, dēprēnsum', pos: 'verb, 3rd conj.', en: 'catch, seize; detect, observe', stress: 'dē-PREN-dō', deriv: 'apprehend (related)' }
  ],

  grammarCards: [
    { id: 'g30-form', front: 'How is the imperfect subjunctive formed?', back: 'Present active infinitive + personal endings: amāre → amārem' },
    { id: 'g30-amo', front: 'amō: imperfect subjunctive', back: 'amārem, amārēs, amāret, amārēmus, amārētis, amārent' },
    { id: 'g30-rego', front: 'regō: imperfect subjunctive', back: 'regerem, regerēs, regeret, regerēmus, regerētis, regerent' },
    { id: 'g30-sum', front: 'sum, possum: imperfect subjunctive', back: 'essem, essēs, esset …; possem, possēs, posset …' },
    { id: 'g30-pass', front: 'regō: imperfect subjunctive passive', back: 'regerer, regerēris, regerētur … (built on regere, not regī)' },
    { id: 'g30-irr', front: 'Imperfect subjunctive of volō, ferō, eō, capiō', back: 'vellem, ferrem, īrem, caperem' },
    { id: 'g30-purpose', front: 'Vēnit ut vidēret.', back: 'He came in order to see (imperfect subjunctive after a past verb).' },
    { id: 'g30-result', front: 'Result clause', back: 'ita / tam / adeō / tantus … ut + subjunctive; negative ut nōn' },
    { id: 'g30-tam', front: 'Tam fessus erat ut dormīret.', back: 'He was so tired that he slept (translate with an indicative).' },
    { id: 'g30-diff', front: 'Purpose vs result: the negative', back: 'Purpose nē; result ut nōn' },
    { id: 'g30-utinam', front: 'Utinam adessēs!', back: 'If only you were here! (unfulfilled wish, present time)' },
    { id: 'g30-utinam2', front: 'Utinam veniat!', back: 'May he come! (a wish that may come true)' },
    { id: 'g30-german', front: 'Wärst du doch hier!', back: 'Utinam adessēs! (Konjunktiv II ≈ Latin imperfect subjunctive in wishes)' },
    { id: 'g30-adeo', front: 'adeō solūtus metū, ut … dictāret ēnotāretque', back: 'so free from fear that he dictated and noted down (Pliny 6.16.10)' },
    { id: 'g30-ita', front: 'ita … opplēta surrēxerat, ut … exitus negārētur', back: 'had been so filled and had risen so high that the way out would have been cut off (Pliny 6.16.14)' },
    { id: 'g30-leniret', front: 'utque timōrem eius suā sēcūritāte lēnīret', back: 'and in order to soothe his fear by his own unconcern (Pliny 6.16.12)' },
    { id: 'g30-properat', front: 'Properat illūc unde aliī fugiunt.', back: 'He hurries to the place from which others flee. (Pliny 6.16.10)' },
    { id: 'g30-rectina', front: 'ut sē tantō discrīminī ēriperet ōrābat', back: 'she begged him to rescue her from such great danger (Pliny 6.16.8)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Imperfect subjunctive 3rd sg. of <span class="la">amō</span>:', options: ['amāret', 'amet', 'amābat', 'amāverit'], answer: 0, explain: 'Infinitive amāre + -t.' },
    { id: 'e2', type: 'mc', prompt: 'Imperfect subjunctive 1st sg. of <span class="la">sum</span>:', options: ['essem', 'sim', 'eram', 'fuissem'], answer: 0, explain: 'esse + -m.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Vēnit ut vidēret.</span>', options: ['He came in order to see.', 'He comes in order to see.', 'He came so that he saw.', 'He saw that he came.'], answer: 0, explain: 'Purpose after a past verb: imperfect subjunctive.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Tam fessus erat ut dormīret.</span>', options: ['He was so tired that he slept.', 'He was tired in order to sleep.', 'He was tired so that he might sleep.', 'He slept because he was tired.'], answer: 0, explain: 'Result clause; translate with an indicative.' },
    { id: 'e5', type: 'mc', prompt: 'The negative of a result clause is:', options: ['ut nōn', 'nē', 'nē nōn', 'nōn ut'], answer: 0, explain: 'Purpose: nē; result: ut nōn.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Utinam adessēs!</span>', options: ['If only you were here!', 'May you come!', 'You were here.', 'If only you had been here!'], answer: 0, explain: 'Imperfect subjunctive: an unfulfilled present wish.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Vēnimus ut amīcum vid___.</span>', hint: 'we might see', answers: ['ērēmus', 'eremus'], full: 'Vēnimus ut amīcum vidērēmus.', explain: 'vidēre + -mus.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Tanta erat tempestās ut nāvēs nāvigāre nōn poss___.</span>', hint: 'could', answers: ['ent'], full: 'Tanta erat tempestās ut nāvēs nāvigāre nōn possent.', explain: 'posse + -nt.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Fūgērunt nē cap___.</span>', hint: 'they might be captured', answers: ['erentur'], full: 'Fūgērunt nē caperentur.', explain: 'capere + -ntur.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Ita clāmāvit ut omnēs eum aud___.</span>', hint: 'heard', answers: ['īrent', 'irent'], full: 'Ita clāmāvit ut omnēs eum audīrent.', explain: 'Result: audīre + -nt.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Utinam hīc ___!</span>', hint: 'you (sg.) were', answers: ['essēs', 'esses'], full: 'Utinam hīc essēs!', explain: 'esse + -s.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Sīc pugnāvērunt ___ nōn vincerentur.</span>', hint: 'that (result)', answers: ['ut'], full: 'Sīc pugnāvērunt ut nōn vincerentur.', explain: 'Negative result: ut nōn.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the imperfect subjunctive of <span class="la">amō</span> and <span class="la">regō</span>.', headers: ['amō', 'regō'], rows: [
      { label: '1st sg.', answers: ['amārem', 'regerem'] },
      { label: '2nd sg.', answers: ['amārēs', 'regerēs'] },
      { label: '3rd sg.', answers: ['amāret', 'regeret'] },
      { label: '1st pl.', answers: ['amārēmus', 'regerēmus'] },
      { label: '2nd pl.', answers: ['amārētis', 'regerētis'] },
      { label: '3rd pl.', answers: ['amārent', 'regerent'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the imperfect subjunctive of <span class="la">sum</span> and <span class="la">audiō</span> (passive).', headers: ['sum', 'audiō (pass.)'], rows: [
      { label: '1st sg.', answers: ['essem', 'audīrer'] },
      { label: '2nd sg.', answers: ['essēs', 'audīrēris|audīrēre'] },
      { label: '3rd sg.', answers: ['esset', 'audīrētur'] },
      { label: '1st pl.', answers: ['essēmus', 'audīrēmur'] },
      { label: '2nd pl.', answers: ['essētis', 'audīrēminī'] },
      { label: '3rd pl.', answers: ['essent', 'audīrentur'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each signal word to its meaning.', pairs: [
      ['ita', 'so, thus'], ['tam', 'so (with adjectives)'], ['adeō', 'to such an extent'], ['tantus', 'so great'], ['tot', 'so many']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Tam fessus erat ut dormīret.', tokens: ['He was', 'so tired', 'that', 'he slept'], explain: 'Result clause.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Lūcius vēnit ut nōs vidēret.', model: 'Lucius came in order to see us.', accepted: ['lucius came in order to see us', 'lucius came to see us', 'lucius came so that he might see us', 'lucius came so that he could see us', 'lucius came so as to see us'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Tanta erat tempestās ut nāvēs nāvigāre nōn possent.', model: 'The storm was so great that the ships could not sail.', accepted: ['storm was so great that ships could not sail', 'storm was so great that ships were not able to sail', 'storm was so big that ships could not sail', 'storm was so strong that ships could not sail', 'storm was so great ships could not sail', 'storm was so great that ships couldn’t sail', 'storm was so great that ships couldnt sail'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Utinam Lūcius adesset!', model: 'If only Lucius were here!', accepted: ['if only lucius were here', 'if only lucius was here', 'would that lucius were here', 'i wish lucius were here', 'i wish lucius was here', 'if only lucius were present'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'that I might be (imperfect subjunctive)', model: 'ut essem', accepted: ['ut essem'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'so that they might not be captured (past sequence)', model: 'nē caperentur', accepted: ['nē caperentur'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'so tired that he slept (m.)', model: 'tam fessus ut dormīret', accepted: ['tam fessus ut dormīret', 'ita fessus ut dormīret', 'adeō fessus ut dormīret'] },
    { id: 'e23', type: 'mc', prompt: 'Pliny’s <span class="la">adeō solūtus metū, ut … dictāret ēnotāretque</span> is:', options: ['a result clause: so free from fear that he dictated and noted down', 'a purpose clause: in order to dictate', 'a wish', 'an indirect statement'], answer: 0, explain: 'Signal word adeō + ut.' },
    { id: 'e24', type: 'mc', prompt: 'Why did the elder Pliny have himself carried to the bath at Stabiae?', options: ['To soothe his friend’s fear by his own calm', 'Because he was ill', 'To escape the ash', 'To wash off the pumice'], answer: 0, explain: 'utque timōrem eius suā sēcūritāte lēnīret.' },
    { id: 'e25', type: 'mc', prompt: 'German <em>Wärst du doch hier!</em> in Latin:', options: ['Utinam adessēs!', 'Utinam adsīs!', 'Adfuistī!', 'Adesse!'], answer: 0, explain: 'Imperfect subjunctive: unfulfilled present wish.' }
  ],

  reading: {
    title: 'Rectīna (Plīnius, Epistulae 6.16.8–10)',
    note: 'Authentic text, unadapted: Pliny the Younger, Letters 6.16.8–10, continuing the passage of Lecture XXVII; from the copy in the course’s source files, length marks added. Tap any word.',
    text: 'Ēgrediēbātur domō; accipit cōdicillōs Rectīnae Tascī imminentī perīculō exterritae (nam vīlla eius subiacēbat, nec ūlla nisi nāvibus fuga): ut sē tantō discrīminī ēriperet ōrābat. Vertit ille cōnsilium et quod studiōsō animō incohāverat obit maximō. Dēdūcit quadrirēmēs, ascendit ipse nōn Rectīnae modo sed multīs (erat enim frequēns amoenitās ōrae) lātūrus auxilium. Properat illūc unde aliī fugiunt, rēctumque cursum rēcta gubernācula in perīculum tenet, adeō solūtus metū, ut omnēs illīus malī mōtūs, omnēs figūrās ut dēprenderat oculīs dictāret ēnotāretque.',
    translation: 'He was leaving the house; he receives a note from Rectina, wife of Tascius, terrified by the threatening danger (for her villa lay below the mountain, and there was no escape except by ship): she begged him to rescue her from so great a peril. He changed his plan, and what he had begun in a spirit of inquiry he carried through in a spirit of heroism. He has the quadriremes launched and goes on board himself, intending to bring help not to Rectina only but to many (for the charm of the coast had drawn many people there). He hurries to the place from which others are fleeing, and holds a straight course, the helm straight towards the danger, so free from fear that he dictated and noted down all the movements of that disaster, all its shapes, as he observed them with his own eyes.',
    notes: [
      { ref: 'Ēgrediēbātur domō; accipit cōdicillōs', html: 'Imperfect of a deponent, “he was going out” (<span class="la">ēgredior</span>, Lecture XXXV), then a sudden historic present: the message arrives as he is leaving. <span class="la">domō</span>: “from the house” (Lecture XXI).' },
      { ref: 'Rectīnae Tascī imminentī perīculō exterritae', html: '<span class="la">Rectīnae</span>: genitive, “of Rectina”. <span class="la">Tascī</span>: genitive, “(wife) of Tascius”; the name is uncertain (see the background). <span class="la">imminentī perīculō</span>: ablative of cause, “by the threatening danger”. <span class="la">exterritae</span>: perfect participle, “terrified”, agreeing with <span class="la">Rectīnae</span>.' },
      { ref: 'nam vīlla eius subiacēbat, nec ūlla nisi nāvibus fuga', html: 'A parenthesis. <span class="la">subiacēbat</span>: “lay below” (the mountain). <span class="la">nec ūlla … fuga</span> [<span class="la">erat</span>]: “and there was no escape”. <span class="la">nisi nāvibus</span>: “except by ships”.' },
      { ref: 'ut sē tantō discrīminī ēriperet ōrābat', html: 'An indirect command (Lecture XXXVII): <span class="la">ōrābat ut</span> + imperfect subjunctive, “she begged him to …”. <span class="la">tantō discrīminī</span>: dative of separation with <span class="la">ēripiō</span>, “to snatch from such danger”.' },
      { ref: 'Vertit ille cōnsilium et quod studiōsō animō incohāverat obit maximō', html: '<span class="la">studiōsō animō … maximō</span> [<span class="la">animō</span>]: ablatives of manner, contrasted. <span class="la">obit</span>: present of <span class="la">obeō</span>, “undertake, carry through”.' },
      { ref: 'Dēdūcit quadrirēmēs', html: '<span class="la">dēdūcere nāvem</span>: to launch a ship (draw it down to the sea).' },
      { ref: 'erat enim frequēns amoenitās ōrae', html: '“for the charm of the coast was crowded”: the beautiful coast had attracted many residents. <span class="la">frequēns</span>, a one-termination adjective (Lecture XVII), agrees with <span class="la">amoenitās</span>.' },
      { ref: 'Properat illūc unde aliī fugiunt', html: '“He hurries to that place from which others flee”: the heroic antithesis at the centre of the passage.' },
      { ref: 'rēctumque cursum rēcta gubernācula in perīculum tenet', html: '<span class="la">rēctum cursum … tenet</span>: “holds a straight course”; <span class="la">rēcta gubernācula</span>: “(and) the helm straight”, a second object. The repetition <span class="la">rēctum … rēcta</span> stresses his determination.' },
      { ref: 'adeō solūtus metū', html: '<span class="la">adeō</span>: signal word for the result clause. <span class="la">metū</span>: ablative of separation with <span class="la">solūtus</span>, “freed from fear” (Lecture XXI).' },
      { ref: 'ut omnēs illīus malī mōtūs, omnēs figūrās ut dēprenderat oculīs dictāret ēnotāretque', html: 'The result clause, imperfect subjunctive because the narrative is past: <span class="la">dictāret ēnotāretque</span>, “he dictated and noted down”. Inside it a second <span class="la">ut</span> with the indicative: <span class="la">ut dēprenderat oculīs</span>, “as he had caught them with his eyes”. <span class="la">omnēs … omnēs</span>: anaphora. <span class="la">mōtūs</span>: accusative plural of the fourth-declension <span class="la">mōtus</span>.' }
    ],
    glosses: {
      'ēgrediēbātur': 'impf. of ēgredior: was going out', 'domō': 'from the house', 'accipit': '3rd sg. of accipiō: receives', 'cōdicillōs': 'acc. pl. of cōdicillī: a note', 'rectīnae': 'gen. of Rectīna: of Rectina', 'tascī': 'gen. of Tascius: (wife) of Tascius', 'imminentī': 'abl. of imminēns: threatening', 'perīculō': 'abl. of perīculum: danger', 'exterritae': 'gen. f. of exterritus: terrified',
      'nam': 'for', 'vīlla': 'villa (nom.)', 'eius': 'her', 'subiacēbat': 'impf. 3rd sg. of subiaceō: lay below', 'nec': 'and not', 'ūlla': 'nom. f. of ūllus: any', 'nisi': 'except', 'nāvibus': 'abl. pl. of nāvis: by ships', 'fuga': 'escape (nom.)',
      'ut': 'that (+ subj.); as (+ ind.)', 'sē': 'herself', 'tantō': 'dat. n. of tantus: so great', 'discrīminī': 'dat. of discrīmen: danger', 'ēriperet': 'impf. subj. 3rd sg. of ēripiō: (that) he snatch', 'ōrābat': 'impf. 3rd sg. of ōrō: she begged',
      'vertit': '3rd sg. of vertō: changes', 'ille': 'he', 'cōnsilium': 'plan (acc.)', 'et': 'and', 'quod': 'what', 'studiōsō': 'abl. of studiōsus: inquiring, studious', 'animō': 'abl. of animus: spirit', 'incohāverat': 'plupf. 3rd sg. of incohō: had begun', 'obit': '3rd sg. of obeō: carries through', 'maximō': 'abl. of maximus: very great',
      'dēdūcit': '3rd sg. of dēdūcō: launches', 'quadrirēmēs': 'acc. pl. of quadrirēmis: quadriremes', 'ascendit': '3rd sg. of ascendō: goes on board', 'ipse': 'himself', 'nōn': 'not', 'modo': 'only', 'sed': 'but', 'multīs': 'dat. pl. of multī: to many', 'erat': 'was', 'enim': 'for', 'frequēns': 'crowded, populous', 'amoenitās': 'charm, beauty (nom.)', 'ōrae': 'gen. of ōra: of the coast', 'lātūrus': 'fut. part. of ferō: intending to bring', 'auxilium': 'help (acc.)',
      'properat': '3rd sg. of properō: hurries', 'illūc': 'to that place', 'unde': 'from where', 'aliī': 'others', 'fugiunt': '3rd pl. of fugiō: flee',
      'rēctumque': 'and straight (acc. m. + -que)', 'cursum': 'acc. of cursus: course', 'rēcta': 'acc. pl. n. of rēctus: straight', 'gubernācula': 'acc. pl. of gubernāculum: helm', 'in': 'towards, into (+ acc.)', 'perīculum': 'danger (acc.)', 'tenet': '3rd sg. of teneō: holds',
      'adeō': 'so, to such an extent', 'solūtus': 'freed (perf. part. of solvō)', 'metū': 'abl. of metus: from fear',
      'omnēs': 'acc. pl. of omnis: all', 'illīus': 'gen. of ille: that', 'malī': 'gen. of malum: disaster, evil', 'mōtūs': 'acc. pl. of mōtus: movements', 'figūrās': 'acc. pl. of figūra: shapes', 'dēprenderat': 'plupf. 3rd sg. of dēprendō: had observed', 'oculīs': 'abl. pl. of oculus: with his eyes', 'dictāret': 'impf. subj. 3rd sg. of dictō: dictated', 'ēnotāretque': 'and noted down (impf. subj. of ēnotō + -que)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Why could Rectina escape only by sea?', options: ['Her villa lay at the foot of the mountain', 'She had no horses', 'The roads were guarded', 'She lived on an island'], answer: 0, explain: 'nam vīlla eius subiacēbat, nec ūlla nisi nāvibus fuga.' },
      { id: 'r2', type: 'mc', prompt: 'How did the elder Pliny change his plan?', options: ['From scientific inquiry to a rescue mission', 'From rescue to flight', 'From sailing to riding', 'He kept his plan'], answer: 0, explain: 'quod studiōsō animō incohāverat obit maximō.' },
      { id: 'r3', type: 'mc', prompt: 'Why did he want to help many people, not just Rectina?', options: ['The beautiful coast was densely inhabited', 'The emperor ordered it', 'Rectina asked him to', 'His nephew was there'], answer: 0, explain: 'erat enim frequēns amoenitās ōrae.' },
      { id: 'r4', type: 'mc', prompt: 'What did he do during the voyage, according to his nephew?', options: ['He dictated and noted down everything he observed', 'He slept', 'He prayed', 'He steered the ship himself'], answer: 0, explain: 'ut … dictāret ēnotāretque.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">audīrent</span>:', options: ['imperfect subjunctive 3rd pl.', 'present subjunctive 3rd pl.', 'future 3rd pl.', 'imperfect indicative 3rd pl.'], answer: 0, explain: 'audīre + -nt.' },
      { id: 't2', type: 'mc', prompt: 'Imperfect subjunctive of <span class="la">capiō</span>, 1st sg.:', options: ['caperem', 'capīrem', 'capiam', 'capiēbam'], answer: 0, explain: 'capere + -m.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Ita vīxit ut omnēs eum amārent.</span>', options: ['He lived in such a way that everyone loved him.', 'He lived so that everyone might love him.', 'He lived as everyone loved him.', 'Everyone loved him and he lived.'], answer: 0, explain: 'Signal word ita: result.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Puerī currēbant ___ ad portum tempore venīrent.</span>', hint: 'so that (purpose)', answers: ['ut'], full: 'Puerī currēbant ut ad portum tempore venīrent.', explain: 'Purpose after a past verb.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Utinam nunc in Graeciā ess___!</span>', hint: 'we were', answers: ['ēmus', 'emus'], full: 'Utinam nunc in Graeciā essēmus!', explain: 'Unfulfilled present wish.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Tot erant hostēs ut urbem dēfendere nōn possēmus.', model: 'There were so many enemies that we could not defend the city.', accepted: ['there were so many enemies that we could not defend city', 'there were so many enemies that we were not able to defend city', 'enemies were so many that we could not defend city', 'there were so many enemies we could not defend city', 'there were so many enemies that we couldn’t defend city', 'there were so many enemies that we couldnt defend city'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'if only you (sg.) were here (use adesse)', model: 'utinam adessēs', accepted: ['utinam adessēs', 'utinam hīc adessēs', 'utinam hīc essēs'] },
      { id: 't8', type: 'mc', prompt: 'Which word signals a result clause?', options: ['adeō', 'utinam', 'nē', 'quō'], answer: 0, explain: 'adeō … ut.' },
      { id: 't9', type: 'mc', prompt: 'In Pliny 6.16.14, why would the way out have been cut off?', options: ['The courtyard had filled with ash and pumice', 'The door was locked', 'Soldiers blocked it', 'The house had collapsed'], answer: 0, explain: 'ita … cinere mixtīsque pūmicibus opplēta surrēxerat.' },
      { id: 't10', type: 'mc', prompt: 'Who was Rectina?', options: ['A woman whose villa lay at the foot of Vesuvius', 'Pliny’s mother', 'Tacitus’s wife', 'A goddess of the sea'], answer: 0, explain: 'Pliny 6.16.8.' },
      { id: 't11', type: 'mc', prompt: 'A historic present (e.g. <span class="la">iubet</span> in narrative) is usually followed by:', options: ['the imperfect subjunctive (secondary sequence) in Pliny', 'only the present subjunctive', 'the future', 'the infinitive'], answer: 0, explain: 'utque … lēnīret, dēferrī … iubet.' }
    ]
  },

  reference: [
    { title: 'Imperfect subjunctive', headers: ['', 'amō', 'moneō', 'regō', 'audiō', 'sum'], rows: [
      ['1st sg.', 'amārem', 'monērem', 'regerem', 'audīrem', 'essem'], ['2nd sg.', 'amārēs', 'monērēs', 'regerēs', 'audīrēs', 'essēs'], ['3rd sg.', 'amāret', 'monēret', 'regeret', 'audīret', 'esset'], ['1st pl.', 'amārēmus', 'monērēmus', 'regerēmus', 'audīrēmus', 'essēmus'], ['2nd pl.', 'amārētis', 'monērētis', 'regerētis', 'audīrētis', 'essētis'], ['3rd pl.', 'amārent', 'monērent', 'regerent', 'audīrent', 'essent']
    ] },
    { title: 'Purpose and result', headers: ['', 'Purpose', 'Result'], rows: [
      ['Positive', 'ut', 'ut'], ['Negative', 'nē', 'ut nōn'], ['Signal words', '—', 'ita, sīc, tam, adeō, tantus, tālis, tot'], ['After a present verb', 'present subj.', 'present subj.'], ['After a past verb', 'imperfect subj.', 'imperfect subj. (usually)']
    ] },
    { title: 'Wishes', headers: ['Form', 'Example', 'Meaning'], rows: [
      ['utinam + pres. subj.', 'Utinam veniat!', 'May he come! (possible)'], ['utinam + impf. subj.', 'Utinam adessēs!', 'If only you were here! (not so)']
    ] }
  ]
});
