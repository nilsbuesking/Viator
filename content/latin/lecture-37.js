/*
 * Latin — Lecture XXXVII: jussive noun clauses (indirect commands) with ut / nē;
 * iubeō and vetō with the infinitive; the irregular verb fīō; fit ut.
 * Authentic reading: Pliny, Letters 6.20.1–5.
 * Content file only. Source texts (Pliny, Letters 6.16 and 6.20; Virgil; Catullus 85) checked against the
 * texts supplied by Nils; length marks editorial. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-37',
  number: 37,
  title: 'Poscō librum Titī Līvī',
  subtitle: 'Indirect commands: ōrō ut, imperō nē; iubeō and vetō + infinitive; fīō, fierī, factus sum; fit ut; authentic reading: Pliny 6.20.1–5',
  minutes: 70,

  intro: `
    <p>“Go!” is a command; “He told me to go” reports it. Latin reports commands, requests, pleas and advice with <span class="la">ut</span> (negative <span class="la">nē</span>) and the subjunctive, following the sequence of tenses: <span class="la">Ōrat ut veniam</span>, “He begs me to come”; <span class="la">Imperāvit nē discēderent</span>, “He ordered them not to leave”. Because the clause is the object of the main verb, grammars call it a <strong>jussive noun clause</strong> or <strong>indirect command</strong>. It looks exactly like a purpose clause, and the main verb tells you which it is.</p>
    <p>Two of the commonest verbs of ordering do not follow the rule: <span class="la">iubeō</span> “order” and <span class="la">vetō</span> “forbid” take the accusative and infinitive, as English “order” and German <em>heißen</em> can.</p>
    <p>The second topic is <span class="la">fīō</span>, the irregular verb that serves as the passive of <span class="la">faciō</span>: “be made, be done”, and also “become, happen”. It is a cognate of English <em>be</em> and German <em>bin</em>.</p>
    <p>The reading goes back to the beginning of Pliny’s second letter: at Misenum, while the earth shakes, the seventeen-year-old asks for a volume of Livy and goes on making excerpts.</p>
  `,

  background: [
    {
      title: 'Cōnstantia an imprūdentia?',
      html: `
        <p>Left at home when his uncle sailed, the nephew spent the rest of the day studying, bathed, dined and slept badly. In the night the tremors grew so strong that everything seemed not just to shake but to overturn. He and his mother sat in the courtyard between the house and the sea, and he asked for a book of Livy and went on making extracts as if he had nothing else to do. A friend of his uncle’s, just arrived from Spain, rebuked the mother for her patience and the son for his unconcern.</p>
        <p>Pliny invites the reader to judge: <span class="la">Dubitō, cōnstantiam vocāre an imprūdentiam dēbeam</span>, “I am not sure whether I should call it steadiness or foolishness”, and adds that he was only seventeen. Readers still divide: some see a young man modelling himself on his uncle, who studied to the end; others see the older Pliny looking back with a smile at his younger self. The two readings are not exclusive.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/BM_Harl_2493_f_213v_Livy_copied_by_Petrarch.jpg/960px-BM_Harl_2493_f_213v_Livy_copied_by_Petrarch.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/BM_Harl_2493_f_213v_Livy_copied_by_Petrarch.jpg/500px-BM_Harl_2493_f_213v_Livy_copied_by_Petrarch.jpg|https://upload.wikimedia.org/wikipedia/commons/c/ca/BM_Harl_2493_f_213v_Livy_copied_by_Petrarch.jpg" alt="Page of a medieval manuscript in two columns of Latin script, with notes in the margins"><figcaption>A medieval manuscript of Livy that belonged to Petrarch, with his notes in the margins (London, British Library, Harley MS 2493). Livy’s history survived through copies like this; the copy Pliny read at Misenum was a papyrus roll. <span class="credit">Manuscript page, public domain; details on the file page · <a href="https://commons.wikimedia.org/wiki/File:BM_Harl_2493_f_213v_Livy_copied_by_Petrarch.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Excerpō: making extracts',
      html: `
        <p>The verb <span class="la">excerpō</span>, “pick out”, describes a standard Roman method of study: copying out passages while reading, for later use. In <em>Letters</em> 3.5 Pliny says his uncle left 160 notebooks of extracts written very small on both sides, and that he “read nothing without excerpting it”. The nephew presents himself as following the same habit, <span class="la">ut coeperam</span>, “as I had begun”. English <em>excerpt</em> comes from the participle <span class="la">excerptum</span>.</p>
      `
    },
    {
      title: 'Er bat mich zu kommen; er befahl, dass …',
      html: `
        <p>German reports commands with either an infinitive (<em>Er bat mich zu kommen</em>) or a clause (<em>Er bat, dass ich käme</em>), and sometimes with the Konjunktiv I (<em>Er sagte, ich solle kommen</em>). Latin chooses by verb: most verbs of asking and ordering take <span class="la">ut</span> + subjunctive; <span class="la">iubeō</span> and <span class="la">vetō</span> take the infinitive. German <em>heißen</em> (“order”) and <em>lassen</em> take a bare infinitive, much like <span class="la">iubeō</span>: <em>Er hieß ihn gehen</em>, <span class="la">Iussit eum īre</span>.</p>
        <p>The person ordered goes into the case the main verb requires: <span class="la">imperō</span> and <span class="la">persuādeō</span> take the dative (Lecture XXXVI), <span class="la">ōrō, rogō, hortor, moneō</span> the accusative, <span class="la">petō</span> and <span class="la">postulō</span> <span class="la">ab</span> + ablative.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Petis ut tibi avunculī meī exitum scrībam.</p>
    <p>“You ask me to write you an account of my uncle’s death.” The first words of Pliny’s first letter to Tacitus (<em>Letters</em> 6.16.1, Lecture XXVIII), checked against the text Nils supplied; length marks added. An indirect command in primary sequence: <span class="la">petis ut … scrībam</span>.</p>
    <p>The same letter has several more:</p>
    <ul>
      <li><span class="la">ut sē tantō discrīminī ēriperet ōrābat</span> (6.16.8): “she begged him to rescue her from so great a danger”, secondary sequence.</li>
      <li><span class="la">gubernātōrī ut ita faceret monentī</span> (6.16.11): “to the helmsman who advised him to do so”.</li>
      <li><span class="la">Iubet liburnicam aptārī</span> (6.16.7): “He orders a light ship to be made ready”: <span class="la">iubeō</span> with the infinitive, here a passive infinitive because no one is named as doing it.</li>
    </ul>
    <p>And <span class="la">fīō</span> in Catullus 85 (Lecture XI): <span class="la">nesciō, sed fierī sentiō et excrucior</span>, “I do not know, but I feel that it happens, and I am in torment”.</p>
  `,

  pronunciation: `
    <h3>fīō, fīunt, but fierī, fit</h3>
    <p>The <span class="la">ī</span> of <span class="la">fīō</span> is long before a vowel, against the usual rule that a vowel before another vowel is short: <span class="la">FĪ-ō, FĪ-unt, fī-Ē-bam</span>. It is short before <span class="la">-er</span> and in <span class="la">fit</span>: <span class="la">FI-e-rī, FI-e-rem, FIT</span>.</p>
    <h3>duodēvīcēnsimum</h3>
    <p>“Eighteenth”: <span class="la">du-o-dē-vī-CĒN-si-mum</span>, “two from twentieth”. The form with <span class="la">-ēns-</span> is older than <span class="la">vīcēsimus</span>; both occur.</p>
  `,

  grammar: [
    {
      title: '1. Indirect commands: ut / nē + subjunctive',
      html: `
        <p>Verbs of asking, ordering, urging, advising, persuading and taking care are followed by <span class="la">ut</span> (negative <span class="la">nē</span>) + subjunctive, in the sequence of tenses (present after primary, imperfect after secondary):</p>
        <ul>
          <li><span class="la">Tē ōrō ut veniās.</span> I beg you to come.</li>
          <li><span class="la">Mīlitibus imperāvit nē discēderent.</span> He ordered the soldiers not to leave.</li>
          <li><span class="la">Eum hortātus est ut fortis esset.</span> He urged him to be brave.</li>
          <li><span class="la">Ā tē petō ut mihi scrībās.</span> I ask you to write to me.</li>
          <li><span class="la">Cūrā ut valeās.</span> See to it that you keep well (a common letter ending).</li>
        </ul>
        <p>Common verbs: <span class="la">ōrō, rogō, petō, postulō, obsecrō</span> (ask, beg, demand, implore); <span class="la">imperō, mandō</span> (order, entrust); <span class="la">hortor, moneō, persuādeō</span> (urge, advise, persuade); <span class="la">cūrō, efficiō</span> (see to it, bring about).</p>
        <p>The <span class="la">ut</span> is sometimes left out after verbs of asking and ordering: <span class="la">quōquō modō fugerem</span> (Pliny 6.20.12, Lecture XXXIV).</p>
      `
    },
    {
      title: '2. Purpose clause or indirect command?',
      html: `
        <p>The form is the same; the function differs:</p>
        <ul>
          <li><span class="la">Vēnit ut mē monēret.</span> He came in order to warn me (purpose: why he came).</li>
          <li><span class="la">Mē monuit ut cavērem.</span> He warned me to be careful (indirect command: what he told me).</li>
        </ul>
        <p>Test: can you replace the <span class="la">ut</span>-clause with a direct command in quotation marks? “He warned me: ‘Be careful!’” works; “He came: ‘Warn me!’” does not.</p>
      `
    },
    {
      title: '3. iubeō, vetō, and verbs of wishing',
      html: `
        <ul>
          <li><span class="la">iubeō</span> + accusative and infinitive: <span class="la">Iussit mīlitēs discēdere.</span> He ordered the soldiers to leave. With a passive infinitive: <span class="la">Iubet liburnicam aptārī.</span> He orders a ship to be made ready.</li>
          <li><span class="la">vetō</span> + accusative and infinitive: <span class="la">Vetuit eōs discēdere.</span> He forbade them to leave. (Not <span class="la">*iussit nē</span> in good prose.)</li>
          <li><span class="la">volō, nōlō, mālō, cupiō</span> + infinitive (Lecture XXXIII).</li>
        </ul>
        <p>The difference between <span class="la">iubeō</span> (infinitive) and <span class="la">imperō</span> (dative + <span class="la">ut</span>) is pure idiom, like German <em>heißen</em> + infinitive beside <em>befehlen, dass</em>.</p>
      `
    },
    {
      title: '4. fīō, fierī, factus sum',
      html: `
        <p><span class="la">fīō</span> supplies the passive of <span class="la">faciō</span> in the present system; the perfect system uses <span class="la">factus sum</span>. Meanings: “be made, be done; become; happen”.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Present</th><th>Imperfect</th><th>Future</th><th>Pres. subj.</th><th>Impf. subj.</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">fīō</td><td class="la">fīēbam</td><td class="la">fīam</td><td class="la">fīam</td><td class="la">fierem</td></tr>
            <tr><th>2nd sg.</th><td class="la">fīs</td><td class="la">fīēbās</td><td class="la">fīēs</td><td class="la">fīās</td><td class="la">fierēs</td></tr>
            <tr><th>3rd sg.</th><td class="la">fit</td><td class="la">fīēbat</td><td class="la">fīet</td><td class="la">fīat</td><td class="la">fieret</td></tr>
            <tr><th>1st pl.</th><td class="la">(fīmus)</td><td class="la">fīēbāmus</td><td class="la">fīēmus</td><td class="la">fīāmus</td><td class="la">fierēmus</td></tr>
            <tr><th>2nd pl.</th><td class="la">(fītis)</td><td class="la">fīēbātis</td><td class="la">fīētis</td><td class="la">fīātis</td><td class="la">fierētis</td></tr>
            <tr><th>3rd pl.</th><td class="la">fīunt</td><td class="la">fīēbant</td><td class="la">fīent</td><td class="la">fīant</td><td class="la">fierent</td></tr>
          </tbody>
        </table></div>
        <p>Infinitive <span class="la">fierī</span>. The 1st and 2nd plural present are rare. The forms are active in shape but passive in meaning, the reverse of a deponent.</p>
        <ul>
          <li><span class="la">Cicerō cōnsul factus est.</span> Cicero was made (became) consul.</li>
          <li><span class="la">Quid fīet?</span> What will happen?</li>
          <li><span class="la">Fīat lūx.</span> Let there be light (Vulgate, Genesis 1:3).</li>
          <li><span class="la">Fit ut …</span> + subjunctive: it happens that … (a result noun clause). <span class="la">Saepe fit ut errēmus.</span> It often happens that we make mistakes.</li>
        </ul>
        <p><span class="la">fīō</span> comes from the root of <span class="la">fuī</span> and is related to English <em>be</em> and German <em>bin, bist</em>; German <em>werden</em> is the nearest equivalent in meaning (<em>Er wurde Konsul</em>).</p>
      `
    }
  ],

  vocab: [
    { id: 'fio', head: 'fīō', la: 'fīō, fierī, factus sum', pos: 'verb, irregular', en: 'be made, be done; become; happen', stress: 'FĪ-ō · FI-e-rī', note: 'Passive of faciō. fit ut + subj.: it happens that. Cognate with English be, German bin.' },
    { id: 'postulo', head: 'postulō', la: 'postulō, postulāre, postulāvī, postulātum', pos: 'verb, 1st conj.', en: 'demand, request', stress: 'POS-tu-lō · pos-tu-LĀ-re', deriv: 'postulate', note: 'ab aliquō postulāre ut …: demand of someone that …' },
    { id: 'veto', head: 'vetō', la: 'vetō, vetāre, vetuī, vetitum', pos: 'verb, 1st conj.', en: 'forbid', stress: 'VE-tō · ve-TĀ-re', deriv: 'veto', note: '+ acc. and infinitive. Vetō, “I forbid”, was the word of the Roman tribune.' },
    { id: 'obsecro', head: 'obsecrō', la: 'obsecrō, obsecrāre, obsecrāvī, obsecrātum', pos: 'verb, 1st conj.', en: 'implore, beseech', stress: 'OB-se-crō · ob-se-CRĀ-re', note: 'ob + sacer: appeal by what is holy.' },
    { id: 'impello', head: 'impellō', la: 'impellō, impellere, impulī, impulsum', pos: 'verb, 3rd conj.', en: 'drive on, push; urge, induce', stress: 'im-PEL-lō · im-PEL-le-re', deriv: 'impel, impulse', note: 'Pliny 6.20.7: abeuntēs premit et impellit.' },
    { id: 'excerpo', head: 'excerpō', la: 'excerpō, excerpere, excerpsī, excerptum', pos: 'verb, 3rd conj.', en: 'pick out; make extracts', stress: 'ex-CER-pō · ex-CER-pe-re', deriv: 'excerpt', note: 'ex + carpō, “pluck”.' },
    { id: 'corripio', head: 'corripiō', la: 'corripiō, corripere, corripuī, correptum', pos: 'verb, 3rd conj. -iō', en: 'seize; rebuke, reproach', stress: 'cor-RI-pi-ō · cor-RI-pe-re', note: 'con + rapiō.' },
    { id: 'ingredior', head: 'ingredior', la: 'ingredior, ingredī, ingressus sum', pos: 'verb, 3rd conj. -iō (deponent)', en: 'step in, enter; begin', stress: 'in-GRE-di-or · IN-gre-dī', note: 'Pliny 6.20.1: id enim ingressus abruperam, “for I had begun this and broken off”.' },
    { id: 'abrumpo', head: 'abrumpō', la: 'abrumpō, abrumpere, abrūpī, abruptum', pos: 'verb, 3rd conj.', en: 'break off', stress: 'ab-RUM-pō · ab-RUM-pe-re', deriv: 'abrupt' },
    { id: 'constantia', head: 'cōnstantia', la: 'cōnstantia, cōnstantiae', g: 'f', pos: 'noun, 1st decl.', en: 'steadiness, firmness, consistency', stress: 'cōn-STAN-ti-a', deriv: 'constancy', note: 'A Stoic virtue: calm firmness of mind.' },
    { id: 'imprudentia', head: 'imprūdentia', la: 'imprūdentia, imprūdentiae', g: 'f', pos: 'noun, 1st decl.', en: 'lack of foresight, rashness, ignorance', stress: 'im-prū-DEN-ti-a', deriv: 'imprudence' },
    { id: 'securitas', head: 'sēcūritās', la: 'sēcūritās, sēcūritātis', g: 'f', pos: 'noun, 3rd decl.', en: 'freedom from care, unconcern; safety', stress: 'sē-CŪ-ri-tās · sē-cū-ri-TĀ-tis', deriv: 'security', note: 'sē + cūra: “without worry”. In Latin often carelessness rather than safety.' },
    { id: 'spatium', head: 'spatium', la: 'spatium, spatiī', g: 'n', pos: 'noun, 2nd decl.', en: 'space, distance; interval of time', stress: 'SPA-ti-um', deriv: 'space, spacious' },
    { id: 'balineum', head: 'balineum', la: 'balineum (balneum), balineī', g: 'n', pos: 'noun, 2nd decl.', en: 'bath, bath-house', stress: 'ba-LI-ne-um', note: 'A Greek loan word (balaneion). Pliny uses the fuller form.' },
    { id: 'modicus', head: 'modicus', la: 'modicus, modica, modicum', pos: 'adjective, 1st/2nd decl.', en: 'moderate, modest, small', stress: 'MO-di-cus', deriv: 'modicum', note: 'From modus, “measure”.' },
    { id: 'invicem', head: 'invicem', la: 'invicem', pos: 'adverb', en: 'in turn; mutually', stress: 'IN-vi-cem', note: 'in vicem, “in (one’s) turn”.' },
    { id: 'nuper', head: 'nūper', la: 'nūper', pos: 'adverb', en: 'recently, lately', stress: 'NŪ-per', note: 'Superlative nūperrimē.' }
  ],

  grammarCards: [
    { id: 'g37-ic', front: 'Indirect command', back: 'Verb of asking/ordering + ut / nē + subjunctive (sequence of tenses)' },
    { id: 'g37-oro', front: 'Tē ōrō ut veniās.', back: 'I beg you to come.' },
    { id: 'g37-impero', front: 'Mīlitibus imperāvit nē discēderent.', back: 'He ordered the soldiers not to leave. (imperō + dat.)' },
    { id: 'g37-peto', front: 'Ā tē petō ut mihi scrībās.', back: 'I ask you to write to me. (petō ab + abl.)' },
    { id: 'g37-iubeo', front: 'iubeō, vetō', back: '+ accusative and infinitive: Iussit mīlitēs discēdere; vetuit eōs discēdere.' },
    { id: 'g37-test', front: 'Purpose or indirect command?', back: 'Indirect command if it reports what was asked or ordered: can be turned into a direct command.' },
    { id: 'g37-fio', front: 'fīō: principal parts', back: 'fīō, fierī, factus sum' },
    { id: 'g37-fiopres', front: 'fīō: present', back: 'fīō, fīs, fit, (fīmus), (fītis), fīunt' },
    { id: 'g37-fiosubj', front: 'fīō: present and imperfect subjunctive', back: 'fīam, fīās, fīat …; fierem, fierēs, fieret …' },
    { id: 'g37-meaning', front: 'Meanings of fīō', back: 'be made, be done; become; happen' },
    { id: 'g37-consul', front: 'Cicerō cōnsul factus est.', back: 'Cicero was made (became) consul.' },
    { id: 'g37-fitut', front: 'Saepe fit ut errēmus.', back: 'It often happens that we make mistakes. (fit ut + subj.)' },
    { id: 'g37-fiat', front: 'Fīat lūx.', back: 'Let there be light. (Vulgate, Genesis 1:3)' },
    { id: 'g37-petis', front: 'Petis ut tibi avunculī meī exitum scrībam.', back: 'You ask me to write you an account of my uncle’s death. (Pliny 6.16.1)' },
    { id: 'g37-dubito', front: 'Dubitō, cōnstantiam vocāre an imprūdentiam dēbeam.', back: 'I am not sure whether I should call it steadiness or foolishness. (Pliny 6.20.5)' },
    { id: 'g37-posco', front: 'poscō librum Titī Līvī, et quasi per ōtium legō', back: 'I ask for a volume of Titus Livius and read as if at leisure (Pliny 6.20.5)' },
    { id: 'g37-ita', front: 'ita invaluit, ut nōn movērī omnia sed vertī crēderentur', back: 'it grew so strong that everything seemed not to be moving but overturning (Pliny 6.20.3)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">Tē ōrō ut veniās.</span>', options: ['I beg you to come.', 'I beg you so that you come.', 'I pray that you came.', 'You beg me to come.'], answer: 0, explain: 'Indirect command, primary sequence.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">Mīlitibus imperāvit nē discēderent.</span>', options: ['He ordered the soldiers not to leave.', 'He ordered the soldiers to leave.', 'The soldiers ordered him not to leave.', 'He left so that the soldiers would not.'], answer: 0, explain: 'imperō + dat. + nē.' },
    { id: 'e3', type: 'mc', prompt: 'Which verb takes the accusative and infinitive, not <span class="la">ut</span>?', options: ['iubeō', 'imperō', 'ōrō', 'hortor'], answer: 0, explain: 'iubeō and vetō + infinitive.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">fit</span>:', options: ['it happens / he becomes', 'he makes', 'he made', 'he was'], answer: 0, explain: 'fīō, fīs, fit.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Cicerō cōnsul factus est.</span>', options: ['Cicero was made consul.', 'Cicero made a consul.', 'Cicero did it as consul.', 'Cicero will become consul.'], answer: 0, explain: 'Perfect of fīō: factus sum.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Vēnit ut mē monēret</span> is:', options: ['a purpose clause', 'an indirect command', 'a result clause', 'an indirect question'], answer: 0, explain: 'It tells why he came, not what he ordered.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Hortor tē ut fortis s___.</span>', hint: 'you (sg.) be', answers: ['īs', 'is'], full: 'Hortor tē ut fortis sīs.', explain: 'Primary sequence: present subjunctive.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Ōrāvit ut sibi ignōsc___.</span>', hint: 'I should forgive', answers: ['erem'], full: 'Ōrāvit ut sibi ignōscerem.', explain: 'Secondary sequence: imperfect subjunctive.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Imperātor ___ mīlitēs discēdere.</span>', hint: 'ordered (iubeō, perfect)', answers: ['iussit'], full: 'Imperātor iussit mīlitēs discēdere.', explain: 'iubeō, iubēre, iussī, iussum + inf.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Monuit ___ redīrem.</span>', hint: 'not to (negative)', answers: ['nē', 'ne'], full: 'Monuit nē redīrem.', explain: 'Negative indirect command: nē.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Quid ___?</span>', hint: 'will happen', answers: ['fīet', 'fiet'], full: 'Quid fīet?', explain: 'Future of fīō: fīam, fīēs, fīet.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Saepe ___ ut errēmus.</span>', hint: 'it happens', answers: ['fit'], full: 'Saepe fit ut errēmus.', explain: 'fit ut + subjunctive.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the present indicative and present subjunctive of <span class="la">fīō</span>.', headers: ['present', 'pres. subj.'], rows: [
      { label: '1st sg.', answers: ['fīō', 'fīam'] },
      { label: '2nd sg.', answers: ['fīs', 'fīās'] },
      { label: '3rd sg.', answers: ['fit', 'fīat'] },
      { label: '1st pl.', answers: ['fīmus', 'fīāmus'] },
      { label: '2nd pl.', answers: ['fītis', 'fīātis'] },
      { label: '3rd pl.', answers: ['fīunt', 'fīant'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the imperfect indicative and imperfect subjunctive of <span class="la">fīō</span>.', headers: ['imperfect', 'impf. subj.'], rows: [
      { label: '1st sg.', answers: ['fīēbam', 'fierem'] },
      { label: '2nd sg.', answers: ['fīēbās', 'fierēs'] },
      { label: '3rd sg.', answers: ['fīēbat', 'fieret'] },
      { label: '1st pl.', answers: ['fīēbāmus', 'fierēmus'] },
      { label: '2nd pl.', answers: ['fīēbātis', 'fierētis'] },
      { label: '3rd pl.', answers: ['fīēbant', 'fierent'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each verb to its construction.', pairs: [
      ['iubeō', 'acc. + infinitive'], ['imperō', 'dat. + ut'], ['petō', 'ab + abl. + ut'], ['ōrō', 'acc. + ut'], ['vetō', 'acc. + infinitive (forbid)']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Māter mē ōrāvit ut fugerem.', tokens: ['My mother', 'begged me', 'to', 'flee'], explain: 'Indirect command, secondary sequence.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Mīlitēs hortātus est ut fortiter pugnārent.', model: 'He urged the soldiers to fight bravely.', accepted: ['he urged soldiers to fight bravely', 'he encouraged soldiers to fight bravely', 'he exhorted soldiers to fight bravely', 'she urged soldiers to fight bravely'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Vetuit nōs discēdere.', model: 'He forbade us to leave.', accepted: ['he forbade us to leave', 'he forbade us to depart', 'he forbade us to go away', 'he did not allow us to leave', 'he forbade us from leaving', 'she forbade us to leave'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Quid fīet?', model: 'What will happen?', accepted: ['what will happen', 'what will become of it', 'what is going to happen', 'what shall happen'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'let there be light', model: 'fīat lūx', accepted: ['fīat lūx', 'lūx fīat'], explain: 'Fīō serves as the passive of faciō; the present subjunctive fīat gives a command, “let there be”.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'to become (infinitive of fīō)', model: 'fierī', accepted: ['fierī'], explain: 'Fīō has the infinitive fierī, passive in form.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'I beg you (sg.) to come (ōrō)', model: 'ōrō tē ut veniās', accepted: ['ōrō tē ut veniās', 'tē ōrō ut veniās', 'ōrō ut veniās'], explain: 'Indirect command: ut + subjunctive (negative nē), not an infinitive as in English “to come” or German zu kommen.' },
    { id: 'e23', type: 'mc', prompt: 'What did the seventeen-year-old Pliny do during the earthquakes?', options: ['He read Livy and made extracts', 'He ran to the harbour', 'He prayed', 'He slept through them'], answer: 0, explain: 'poscō librum Titī Līvī, et quasi per ōtium legō atque etiam … excerpō.' },
    { id: 'e24', type: 'mc', prompt: 'Why were the tremors before the eruption not taken seriously?', options: ['They were usual in Campania', 'Nobody felt them', 'The priests said they were harmless', 'They happened only at night'], answer: 0, explain: 'minus formīdolōsus quia Campāniae solitus.' },
    { id: 'e25', type: 'mc', prompt: 'German <em>Er hieß ihn gehen</em> is closest in construction to:', options: ['Iussit eum īre.', 'Imperāvit eī ut īret.', 'Ōrāvit eum ut īret.', 'Vēnit ut īret.'], answer: 0, explain: 'heißen and iubeō both take an infinitive.' }
  ],

  reading: {
    title: 'Mīsēnī relictus (Plīnius, Epistulae 6.20.1–5)',
    note: 'Authentic text, unadapted: Pliny the Younger, Letters 6.20.1–5, from the copy Nils supplied, with the Virgil quotation as corrected by him; length marks added; dashes printed as brackets. Tap any word.',
    text: 'Ais tē adductum litterīs quās exigentī tibi dē morte avunculī meī scrīpsī, cupere cognōscere, quōs ego Mīsēnī relictus (id enim ingressus abrūperam) nōn sōlum metūs vērum etiam cāsūs pertulerim. “Quamquam animus meminisse horret lūctūque refūgit, incipiam.” Profectō avunculō ipse reliquum tempus studiīs (ideō enim remānseram) impendī; mox balineum, cēna, somnus inquiētus et brevis. Praecesserat per multōs diēs tremor terrae, minus formīdolōsus quia Campāniae solitus; illā vērō nocte ita invaluit, ut nōn movērī omnia sed vertī crēderentur. Irrūpit cubiculum meum māter; surgēbam invicem, sī quiēsceret excitātūrus. Resēdimus in āreā domūs, quae mare ā tēctīs modicō spatiō dīvidēbat. Dubitō, cōnstantiam vocāre an imprūdentiam dēbeam (agēbam enim duodēvīcēnsimum annum): poscō librum Titī Līvī, et quasi per ōtium legō atque etiam, ut coeperam, excerpō. Ecce amīcus avunculī quī nūper ad eum ex Hispāniā vēnerat, ut mē et mātrem sedentēs, mē vērō etiam legentem videt, illīus patientiam, sēcūritātem meam corripit. Nihilō sēgnius ego intentus in librum.',
    translation: 'You say that the letter I wrote at your request about my uncle’s death has made you want to know what fears, and also what dangers, I went through when I was left behind at Misenum (for I had begun on this and broken off). “Though my mind shudders to remember and has shrunk back in grief, I shall begin.” After my uncle had set out, I spent the rest of the time on my studies (that was why I had stayed behind); then a bath, dinner, and sleep, broken and short. For many days before there had been earth tremors, less alarming because they are usual in Campania; but that night they became so violent that everything seemed not just to be moving but to be turning over. My mother burst into my bedroom; I was getting up in turn, intending to wake her if she was asleep. We sat down in the courtyard of the house, which separated the building from the sea by a small space. I do not know whether I should call it steadiness or foolishness (I was in my eighteenth year): I ask for a volume of Livy and read it as if I had nothing else to do, and even go on making extracts, as I had begun. Look: a friend of my uncle’s, who had recently come to him from Spain, seeing my mother and me sitting there, and me even reading, scolds her patience and my unconcern. I went on just as attentively with my book.',
    notes: [
      { ref: 'Ais tē adductum litterīs … cupere cognōscere', html: 'Indirect statement after <span class="la">ais</span> (from <span class="la">aiō</span>, “say”): “you say that you, led on by the letter …, want to know”. <span class="la">litterīs</span>: “by the letter”, plural form, singular meaning. <span class="la">exigentī tibi</span>: “to you, demanding (it)”.' },
      { ref: 'quōs ego Mīsēnī relictus … nōn sōlum metūs vērum etiam cāsūs pertulerim', html: 'Indirect question (Lecture XXXI): “what fears, and not only fears but also dangers, I endured”. <span class="la">quōs</span> agrees with <span class="la">metūs</span> and <span class="la">cāsūs</span> (accusative plural, 4th declension). <span class="la">pertulerim</span>: perfect subjunctive of <span class="la">perferō</span>, primary sequence after <span class="la">ais</span>. <span class="la">Mīsēnī</span>: locative.' },
      { ref: 'id enim ingressus abrūperam', html: '“for I had begun on this (subject) and broken off”: at the end of 6.16 (sections 21–22). <span class="la">ingressus</span>: deponent participle, active meaning (Lecture XXXV).' },
      { ref: '“Quamquam animus meminisse horret lūctūque refūgit, incipiam.”', html: 'Virgil, <em>Aeneid</em> 2.12–13: Aeneas before telling Dido of the fall of Troy (Lecture XXXIV). <span class="la">meminisse</span>: infinitive of the defective verb <span class="la">meminī</span>, “remember”, which has only perfect forms with present meaning.' },
      { ref: 'Profectō avunculō ipse reliquum tempus studiīs … impendī', html: '<span class="la">profectō avunculō</span>: ablative absolute with a deponent participle, “my uncle having set out”. <span class="la">studiīs</span>: dative with <span class="la">impendō</span>, “I spent (time) on my studies”.' },
      { ref: 'mox balineum, cēna, somnus inquiētus et brevis', html: 'No verbs: a list, as in his uncle’s day in 6.16.12.' },
      { ref: 'Praecesserat per multōs diēs tremor terrae, minus formīdolōsus quia Campāniae solitus', html: '<span class="la">per multōs diēs</span>: accusative of duration (Lecture XXXVIII). <span class="la">Campāniae</span>: dative with <span class="la">solitus</span> [<span class="la">erat</span>], “usual for Campania”.' },
      { ref: 'ita invaluit, ut nōn movērī omnia sed vertī crēderentur', html: 'Result clause (Lecture XXX). <span class="la">crēderentur</span>: personal passive with infinitive, “(everything) was believed to …”, i.e. seemed to.' },
      { ref: 'surgēbam invicem, sī quiēsceret excitātūrus', html: '<span class="la">surgēbam</span>: conative imperfect, “I was (already) getting up”. <span class="la">excitātūrus</span>: future participle expressing intention, “meaning to wake (her)”. <span class="la">sī quiēsceret</span>: subjunctive because it is part of his intention.' },
      { ref: 'quae mare ā tēctīs modicō spatiō dīvidēbat', html: '<span class="la">quae</span>: the courtyard. <span class="la">modicō spatiō</span>: ablative of degree of difference or measure, “by a small distance”.' },
      { ref: 'Dubitō, cōnstantiam vocāre an imprūdentiam dēbeam', html: 'Indirect question with <span class="la">an</span> (Lecture XXXI): “I am unsure whether I ought to call it steadiness or foolishness”.' },
      { ref: 'agēbam enim duodēvīcēnsimum annum', html: '“I was in my eighteenth year”, i.e. seventeen years old. <span class="la">agere annum</span>: “to be in a year (of one’s life)”.' },
      { ref: 'ut mē et mātrem sedentēs, mē vērō etiam legentem videt', html: '<span class="la">ut</span> + indicative: “when, as soon as” (Lecture XXXII). <span class="la">sedentēs, legentem</span>: present participles describing what he sees.' },
      { ref: 'illīus patientiam, sēcūritātem meam corripit', html: '<span class="la">illīus</span>: “her (my mother’s)”. The two objects are set side by side without <span class="la">et</span> (asyndeton), each with its possessor.' },
      { ref: 'Nihilō sēgnius ego intentus in librum', html: 'Supply <span class="la">eram</span>: “I was no less intent on my book”. <span class="la">nihilō</span>: ablative of degree of difference, “by nothing”.' }
    ],
    glosses: {
      'ais': '2nd sg. of aiō: you say', 'tē': 'you (acc.)', 'adductum': 'led on (acc. of adductus)', 'litterīs': 'abl. pl. of litterae: by the letter', 'quās': 'which (acc. pl. f.)', 'exigentī': 'dat. of exigēns: (to you) demanding', 'tibi': 'to you', 'dē': 'about (+ abl.)', 'morte': 'abl. of mors: death', 'avunculī': 'gen. of avunculus: of (my) uncle', 'meī': 'gen. of meus: my', 'scrīpsī': 'perf. 1st sg. of scrībō: I wrote', 'cupere': 'inf. of cupiō: (that you) want', 'cognōscere': 'inf. of cognōscō: to learn',
      'quōs': 'what (acc. pl. m.)', 'ego': 'I', 'mīsēnī': 'locative: at Misenum', 'relictus': 'left behind', 'id': 'this', 'enim': 'for', 'ingressus': 'having begun (ingredior)', 'abrūperam': 'plupf. 1st sg. of abrumpō: I had broken off', 'nōn': 'not', 'sōlum': 'only', 'metūs': 'acc. pl. of metus: fears', 'vērum': 'but', 'etiam': 'also, even', 'cāsūs': 'acc. pl. of cāsus: dangers, mishaps', 'pertulerim': 'perf. subj. 1st sg. of perferō: I endured',
      'quamquam': 'although', 'animus': 'mind (nom.)', 'meminisse': 'inf. of meminī: to remember', 'horret': '3rd sg. of horreō: shudders', 'lūctūque': 'and from grief (abl. of lūctus + -que)', 'refūgit': 'perf. 3rd sg. of refugiō: has shrunk back', 'incipiam': 'fut. 1st sg. of incipiō: I shall begin',
      'profectō': 'abl. of profectus (proficīscor): having set out', 'avunculō': 'abl. of avunculus: uncle', 'ipse': 'I myself', 'reliquum': 'remaining (acc. n.)', 'tempus': 'time (acc.)', 'studiīs': 'dat. pl. of studium: on studies', 'ideō': 'for that reason', 'remānseram': 'plupf. 1st sg. of remaneō: I had stayed behind', 'impendī': 'perf. 1st sg. of impendō: I spent', 'mox': 'then, soon', 'balineum': 'bath', 'cēna': 'dinner', 'somnus': 'sleep', 'inquiētus': 'restless', 'et': 'and', 'brevis': 'short',
      'praecesserat': 'plupf. 3rd sg. of praecēdō: had gone before', 'per': 'through, for (+ acc.)', 'multōs': 'acc. pl. of multus: many', 'diēs': 'acc. pl. of diēs: days', 'tremor': 'tremor (nom.)', 'terrae': 'gen. of terra: of the earth', 'minus': 'less', 'formīdolōsus': 'alarming', 'quia': 'because', 'campāniae': 'dat. of Campānia: for Campania', 'solitus': 'usual (soleō)', 'illā': 'abl. f. of ille: that', 'vērō': 'but, indeed', 'nocte': 'abl. of nox: night', 'ita': 'so', 'invaluit': 'perf. 3rd sg. of invalēscō: grew strong', 'ut': 'that (+ subj.); as, when (+ ind.)', 'movērī': 'pres. pass. inf. of moveō: to be moved', 'omnia': 'everything', 'sed': 'but', 'vertī': 'pres. pass. inf. of vertō: to be overturned', 'crēderentur': 'impf. subj. pass. 3rd pl. of crēdō: were believed',
      'irrūpit': 'perf. 3rd sg. of irrumpō: burst into', 'cubiculum': 'bedroom (acc.)', 'meum': 'my', 'māter': 'mother (nom.)', 'surgēbam': 'impf. 1st sg. of surgō: I was getting up', 'invicem': 'in turn', 'sī': 'if', 'quiēsceret': 'impf. subj. 3rd sg. of quiēscō: she was asleep', 'excitātūrus': 'meaning to wake (fut. part. of excitō)',
      'resēdimus': 'perf. 1st pl. of resīdō: we sat down', 'in': 'in (+ abl.); on (+ acc.)', 'āreā': 'abl. of ārea: courtyard', 'domūs': 'gen. of domus: of the house', 'quae': 'which', 'mare': 'sea (acc.)', 'ā': 'from (+ abl.)', 'tēctīs': 'abl. pl. of tēctum: buildings', 'modicō': 'abl. of modicus: small', 'spatiō': 'abl. of spatium: by a space', 'dīvidēbat': 'impf. 3rd sg. of dīvidō: separated',
      'dubitō': '1st sg.: I am unsure', 'cōnstantiam': 'acc. of cōnstantia: steadiness', 'vocāre': 'inf. of vocō: to call', 'an': 'or', 'imprūdentiam': 'acc. of imprūdentia: foolishness', 'dēbeam': 'pres. subj. 1st sg. of dēbeō: I ought', 'agēbam': 'impf. 1st sg. of agō: I was in (my year)', 'duodēvīcēnsimum': 'eighteenth', 'annum': 'acc. of annus: year',
      'poscō': '1st sg.: I ask for', 'librum': 'acc. of liber: book', 'titī': 'gen. of Titus', 'līvī': 'gen. of Līvius: Livy', 'quasi': 'as if', 'ōtium': 'leisure (acc.)', 'legō': '1st sg.: I read', 'atque': 'and', 'coeperam': 'plupf. 1st sg. of coepī: I had begun', 'excerpō': '1st sg.: I make extracts',
      'ecce': 'look!', 'amīcus': 'friend (nom.)', 'quī': 'who', 'nūper': 'recently', 'ad': 'to (+ acc.)', 'eum': 'him', 'ex': 'from (+ abl.)', 'hispāniā': 'abl. of Hispānia: Spain', 'vēnerat': 'plupf. 3rd sg. of veniō: had come', 'mē': 'me', 'mātrem': 'acc. of māter: mother', 'sedentēs': 'acc. pl. of sedēns: sitting', 'legentem': 'acc. of legēns: reading', 'videt': '3rd sg. of videō: sees', 'illīus': 'gen. of ille: her', 'patientiam': 'acc. of patientia: patience', 'sēcūritātem': 'acc. of sēcūritās: unconcern', 'meam': 'acc. f. of meus: my', 'corripit': '3rd sg. of corripiō: rebukes',
      'nihilō': 'by nothing', 'sēgnius': 'more slackly', 'intentus': 'intent, absorbed', 'librum': 'acc. of liber: book'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What had Tacitus asked for after reading the first letter?', options: ['What fears and dangers the nephew himself had gone through', 'More about the uncle’s books', 'A description of Stabiae', 'The date of the eruption'], answer: 0, explain: 'quōs ego … nōn sōlum metūs vērum etiam cāsūs pertulerim.' },
      { id: 'r2', type: 'mc', prompt: 'Why had the nephew stayed behind at Misenum?', options: ['To study', 'Because he was ill', 'To look after his mother', 'Because there was no room on the ship'], answer: 0, explain: 'ideō enim remānseram; and in 6.16.7 he told his uncle he preferred to study.' },
      { id: 'r3', type: 'mc', prompt: 'Where did Pliny and his mother sit?', options: ['In the courtyard, between the house and the sea', 'On the beach', 'In the bedroom', 'On a ship'], answer: 0, explain: 'Resēdimus in āreā domūs, quae mare ā tēctīs modicō spatiō dīvidēbat.' },
      { id: 'r4', type: 'mc', prompt: 'How did Pliny react to the friend’s rebuke?', options: ['He went on reading just as attentively', 'He apologised and left', 'He argued with him', 'He burnt the book'], answer: 0, explain: 'Nihilō sēgnius ego intentus in librum.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">Ā tē petō ut mihi scrībās.</span>', options: ['I ask you to write to me.', 'I ask you why you write to me.', 'You ask me to write to you.', 'I seek you so that I may write.'], answer: 0, explain: 'petō ab + abl. + ut.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">fierent</span>:', options: ['imperfect subjunctive 3rd pl. of fīō', 'present subjunctive of fīō', 'imperfect indicative of faciō', 'future of fīō'], answer: 0, explain: 'fierī + -nt.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Hortātus est nē timērent.</span>', options: ['He urged them not to be afraid.', 'He urged them so that they might fear.', 'He was urged not to fear.', 'He urged them in order not to fear himself.'], answer: 0, explain: 'Negative indirect command.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Rogāvit ut sēcum ven___.</span>', hint: 'we should come', answers: ['īrēmus', 'iremus'], full: 'Rogāvit ut sēcum venīrēmus.', explain: 'Secondary sequence: imperfect subjunctive.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Puer ___ magnus fit.</span>', hint: 'slowly (adverb of lentus)', answers: ['lentē', 'lente'], full: 'Puer lentē magnus fit.', explain: 'The boy slowly becomes big: fit = becomes.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Imperāvit mīlitibus ut urbem dēfenderent.', model: 'He ordered the soldiers to defend the city.', accepted: ['he ordered soldiers to defend city', 'he commanded soldiers to defend city', 'he told soldiers to defend city', 'she ordered soldiers to defend city'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'it happens (fīō)', model: 'fit', accepted: ['fit'], explain: 'Fīō, fīs, fit: the i is long except before final -t and before -er.' },
      { id: 't8', type: 'mc', prompt: '“He forbade them to leave” in good Latin prose:', options: ['Vetuit eōs discēdere.', 'Iussit nē discēderent.', 'Vetuit ut discēderent.', 'Imperāvit eōs discēdere.'], answer: 0, explain: 'vetō + acc. and infinitive.' },
      { id: 't9', type: 'mc', prompt: 'How old was Pliny during the eruption?', options: ['Seventeen (in his eighteenth year)', 'Eighteen', 'Twelve', 'Twenty-five'], answer: 0, explain: 'agēbam enim duodēvīcēnsimum annum.' },
      { id: 't10', type: 'mc', prompt: 'What does <span class="la">excerpō</span> describe in Pliny?', options: ['Making extracts from his reading', 'Picking fruit', 'Escaping', 'Cutting his hair'], answer: 0, explain: 'ut coeperam, excerpō.' },
      { id: 't11', type: 'mc', prompt: 'In Catullus 85, <span class="la">fierī sentiō</span> means:', options: ['I feel that it happens', 'I feel that I am made', 'I feel the fire', 'I feel faithful'], answer: 0, explain: 'nesciō, sed fierī sentiō et excrucior.' }
    ]
  },

  reference: [
    { title: 'Verbs of commanding and asking', headers: ['Verb', 'Person addressed', 'Construction'], rows: [
      ['imperō', 'dative', 'ut / nē + subj.'], ['persuādeō', 'dative', 'ut / nē + subj.'], ['ōrō, rogō, hortor, moneō', 'accusative', 'ut / nē + subj.'], ['petō, postulō', 'ab + ablative', 'ut / nē + subj.'], ['iubeō', 'accusative', 'infinitive'], ['vetō', 'accusative', 'infinitive']
    ] },
    { title: 'fīō, fierī, factus sum', headers: ['', 'Present', 'Pres. subj.', 'Impf. subj.'], rows: [
      ['1st sg.', 'fīō', 'fīam', 'fierem'], ['2nd sg.', 'fīs', 'fīās', 'fierēs'], ['3rd sg.', 'fit', 'fīat', 'fieret'], ['1st pl.', '(fīmus)', 'fīāmus', 'fierēmus'], ['2nd pl.', '(fītis)', 'fīātis', 'fierētis'], ['3rd pl.', 'fīunt', 'fīant', 'fierent']
    ] }
  ]
});
