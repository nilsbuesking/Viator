/*
 * Latin — Lecture XXIII: the fifth declension (rēs, diēs, spēs, fidēs); the uses of the ablative
 * summarised, with the ablative of place where and of respect.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotations (Cicero, In Catilinam 1.2; Pliny, Letters 6.16.17 and 6.16.20; Horace, Odes 1.11.8;
 * Caesar, De bello Gallico 1.1) checked against the texts supplied by Nils.
 * Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-23',
  number: 23,
  title: 'Rēs pūblica',
  subtitle: 'The fifth declension: rēs, diēs, spēs, fidēs; the ablative summarised, with place where and respect',
  minutes: 60,

  intro: `
    <p>The fifth declension is the last and the smallest. It has only a handful of nouns, but two of them are among the commonest words in Latin: <span class="la">diēs</span> “day”, which you know from Lecture XVI, and <span class="la">rēs</span> “thing, matter, affair”, which can mean almost anything. Its stem vowel is a long <span class="la">ē</span>: <span class="la">rēs, reī, rem, rē</span>; <span class="la">rērum, rēbus</span>.</p>
    <p>With the fifth declension, the Latin noun system is complete. The second half of the lecture therefore draws together the uses of the ablative that have accumulated since Lecture III, adds two that have appeared without a name (the ablative of <strong>place where</strong>, <span class="la">in urbe</span>, and of <strong>respect</strong>, <span class="la">virtūte praecēdunt</span>), and gives a method for deciding which use you are looking at.</p>
    <p>By the end you should be able to decline <span class="la">rēs</span> and <span class="la">diēs</span>, translate the main idioms with <span class="la">rēs</span>, and name the use of any ablative in a sentence.</p>
  `,

  background: [
    {
      title: 'Rēs pūblica',
      html: `
        <p><span class="la">rēs pūblica</span> is literally “the public thing”: the affairs, interests and property that belong to the people as a whole, as opposed to <span class="la">rēs prīvāta</span>. It is best translated “the state” or “the commonwealth”. It did not originally name a form of constitution: Cicero, in his dialogue <em>On the Republic</em>, discusses whether a <span class="la">rēs pūblica</span> can be governed by a king. Only in the modern period did “republic” come to mean a state without a monarch, so that the German <em>Republik</em> and the English “republic” are narrower than their Latin source.</p>
        <p>The ambiguity was useful to Augustus. In the account of his achievements that he had set up at Rome and that survives in copies from the province of Galatia, the <span class="la">Rēs gestae dīvī Augustī</span> (“The deeds done by the deified Augustus”), he presents himself as the man who handed the <span class="la">rēs pūblica</span> back from his own power to the senate and people (chapter 34), while holding power no Roman had held before. Historians still argue over how far contemporaries believed this.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monumentum_Ancyranum_Res_Gestae_Divi_Augusti_Part_1.jpg/960px-Monumentum_Ancyranum_Res_Gestae_Divi_Augusti_Part_1.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monumentum_Ancyranum_Res_Gestae_Divi_Augusti_Part_1.jpg/500px-Monumentum_Ancyranum_Res_Gestae_Divi_Augusti_Part_1.jpg|https://upload.wikimedia.org/wikipedia/commons/1/1a/Monumentum_Ancyranum_Res_Gestae_Divi_Augusti_Part_1.jpg" alt="Stone temple wall covered in columns of Latin inscription"><figcaption>The Latin text of the <em>Rēs gestae dīvī Augustī</em> on the wall of the Temple of Rome and Augustus at Ankara (ancient Ancyra), the best-preserved copy. The original stood on bronze pillars before Augustus’s mausoleum in Rome and is lost. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Monumentum_Ancyranum_Res_Gestae_Divi_Augusti_Part_1.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'rien, lundi, Montag',
      html: `
        <p>The fifth declension disappeared in the Romance languages, but its two great nouns left curious traces. French <em>rien</em> “nothing” is the Latin accusative <span class="la">rem</span>, “a thing”: in <em>je ne vois rien</em>, the real negative was <em>ne</em>, and <em>rien</em> meant “a thing”, “I do not see a thing”, until it took on the negative sense itself. Italian <em>niente</em> and Spanish <em>nada</em> show similar developments from other words.</p>
        <p><span class="la">diēs</span> survives in the names of weekdays: French <em>lundi</em> and Italian <em>lunedì</em> from <span class="la">Lūnae diēs</span>, “day of the Moon”; <em>mardi</em> from <span class="la">Mārtis diēs</span>. The planetary week came to Rome from the eastern Mediterranean around the turn of the eras, and the Germanic peoples translated its names: <em>Montag</em> for <span class="la">Lūnae diēs</span>, <em>Dienstag</em> (probably after the god Tiw) for <span class="la">Mārtis diēs</span>, <em>Donnerstag</em> (Donar, Thor) for <span class="la">Iovis diēs</span>. The ordinary word for “day” in French and Italian (<em>jour, giorno</em>) comes from the adjective <span class="la">diurnus</span>, “daily”.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cicero,_De_re_publica,_Vat._Lat._5757.jpg/960px-Cicero,_De_re_publica,_Vat._Lat._5757.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cicero,_De_re_publica,_Vat._Lat._5757.jpg/500px-Cicero,_De_re_publica,_Vat._Lat._5757.jpg|https://upload.wikimedia.org/wikipedia/commons/7/73/Cicero,_De_re_publica,_Vat._Lat._5757.jpg" alt="Parchment page with large ancient capitals partly covered by later, smaller writing"><figcaption>Cicero’s <em>On the Republic</em> survives mainly in this palimpsest (Vatican Library, Vat. lat. 5757): a late antique copy whose parchment was scraped and reused for Augustine’s commentary on the Psalms. Angelo Mai identified the older text under the newer in 1819. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Cicero,_De_re_publica,_Vat._Lat._5757.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Nōs autem fortēs virī satis facere reī pūblicae vidēmur, sī istīus furōrem ac tēla vītēmus.</p>
    <p>“But we, brave men that we are, think we are doing our duty by the state if we avoid that man’s madness and weapons.” Cicero, <em>In Catilinam</em> 1.2, checked against the copy in the course’s source files; length marks added. The tone is bitterly ironic: the senate is doing nothing. <span class="la">reī pūblicae</span>: dative of <span class="la">rēs pūblica</span> with <span class="la">satis facere</span>, “to satisfy, do enough for”. <span class="la">vītēmus</span> is a subjunctive (Lecture XXIX).</p>
    <p class="la big">Iam diēs alibi, illīc nox omnibus noctibus nigrior dēnsiorque.</p>
    <p>“By now it was day elsewhere; there it was night, blacker and denser than any night.” Pliny, <em>Letters</em> 6.16.17, on the morning at Stabiae under the ash cloud. <span class="la">diēs</span>, nominative; the verb “was” is left out. <span class="la">omnibus noctibus</span>: ablative of comparison, “than all nights” (Lecture XXVII). A little later Pliny marks the end: <span class="la">Ubi diēs redditus</span>, “when daylight was restored” (6.16.20).</p>
    <p>You met the accusative of <span class="la">diēs</span> in Lecture IX: <span class="la">carpe diem</span> (Horace, <em>Odes</em> 1.11.8). And Caesar’s first chapter supplies two ablatives of respect: the Gauls differ <span class="la">linguā, īnstitūtīs, lēgibus</span>, “in language, customs and laws”, and the Helvetii surpass the other Gauls <span class="la">virtūte</span>, “in courage” (BG 1.1).</p>
  `,

  pronunciation: `
    <h3>reī, diēī</h3>
    <p>The <span class="la">e</span> of <span class="la">reī</span> is short (<span class="la">RE-ī</span>), because a vowel before another vowel is usually short. In <span class="la">diēī</span> it stays long (<span class="la">di-Ē-ī</span>), because it follows an <span class="la">i</span>. That is the only difference between the two model nouns.</p>
    <h3>rēs, spēs</h3>
    <p>Long <span class="la">ē</span>, as German <em>See</em>: <span class="la">rēs</span> rhymes with nothing in English and with <em>Rehs</em> in German. <span class="la">rem</span> has a short <span class="la">e</span> before final <span class="la">m</span>.</p>
    <h3>merīdiēs</h3>
    <p><span class="la">me-RĪ-di-ēs</span>, “midday”, from <span class="la">medius</span> + <span class="la">diēs</span> with an old dissimilation of <span class="la">d</span> to <span class="la">r</span>; hence a.m. and p.m., <span class="la">ante</span> and <span class="la">post merīdiem</span>.</p>
  `,

  grammar: [
    {
      title: '1. The fifth declension',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>rēs (f.)</th><th>diēs (m.)</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">rēs</td><td class="la">diēs</td></tr>
            <tr><th>Gen.</th><td class="la">reī</td><td class="la">diēī</td></tr>
            <tr><th>Dat.</th><td class="la">reī</td><td class="la">diēī</td></tr>
            <tr><th>Acc.</th><td class="la">rem</td><td class="la">diem</td></tr>
            <tr><th>Abl.</th><td class="la">rē</td><td class="la">diē</td></tr>
            <tr><th>Nom. pl.</th><td class="la">rēs</td><td class="la">diēs</td></tr>
            <tr><th>Gen.</th><td class="la">rērum</td><td class="la">diērum</td></tr>
            <tr><th>Dat./Abl.</th><td class="la">rēbus</td><td class="la">diēbus</td></tr>
            <tr><th>Acc.</th><td class="la">rēs</td><td class="la">diēs</td></tr>
          </tbody>
        </table></div>
        <p>The pattern resembles the first declension with <span class="la">ē</span> instead of <span class="la">ā</span>: <span class="la">rem</span> like <span class="la">rosam</span>, <span class="la">rē</span> like <span class="la">rosā</span>, <span class="la">rērum</span> like <span class="la">rosārum</span>. Note the forms that serve twice or more: <span class="la">rēs</span> (nom. sg., nom. and acc. pl.), <span class="la">reī</span> (gen. and dat. sg.).</p>
        <p><strong>Gender</strong>: feminine, except <span class="la">diēs</span> and <span class="la">merīdiēs</span>, which are masculine. (<span class="la">diēs</span> is sometimes feminine when it means an appointed day: <span class="la">certā diē</span>.)</p>
        <p>Only <span class="la">rēs</span> and <span class="la">diēs</span> have a complete plural. <span class="la">spēs, fidēs, faciēs</span> are found mostly in the singular.</p>
      `
    },
    {
      title: '2. What rēs means',
      html: `
        <p><span class="la">rēs</span> has no single meaning; it takes its sense from its adjective and context, like German <em>Sache</em> or <em>Angelegenheit</em> at their widest:</p>
        <ul>
          <li><span class="la">rēs pūblica</span>: the state, the commonwealth</li>
          <li><span class="la">rēs gestae</span>: things done, deeds, history</li>
          <li><span class="la">rēs mīlitāris</span>: military affairs, warfare</li>
          <li><span class="la">rēs adversae / rēs secundae</span>: misfortune / prosperity</li>
          <li><span class="la">rēs novae</span>: political change, revolution (“new things”)</li>
          <li><span class="la">rē vērā</span>: in fact, really (“in the true thing”); German <em>in der Tat</em></li>
          <li><span class="la">quam ob rem</span>: for which reason, why</li>
        </ul>
        <p>When translating, avoid “thing” wherever a more exact English word fits: <span class="la">dē eā rē</span> “about this matter”; <span class="la">rēs familiāris</span> “family property”.</p>
      `
    },
    {
      title: '3. Two new ablatives: place where and respect',
      html: `
        <p><strong>Place where</strong>: <span class="la">in</span> (or <span class="la">sub</span>) + ablative answers “where?”: <span class="la">in urbe</span>, <span class="la">in nāve</span>, <span class="la">sub arbore</span>. You have been using it since Lecture II. With names of towns, Latin uses a special case, the locative (<span class="la">Rōmae</span> “at Rome”, <span class="la">domī</span>), treated in Lecture XXXVIII.</p>
        <p><strong>Respect</strong> (or specification): the plain ablative names the respect in which something is true: <span class="la">linguā differunt</span> “they differ in language”; <span class="la">virtūte praecēdunt</span> “they surpass in courage”; <span class="la">Rōmānus nōmine</span> “a Roman by name”. German uses <em>an</em> or <em>in</em>: <em>an Tapferkeit übertreffen</em>.</p>
      `
    },
    {
      title: '4. The ablative summarised',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Use</th><th>Form</th><th>Example</th><th>Question</th></tr></thead>
          <tbody>
            <tr><td>Place where</td><td>in, sub + abl.</td><td class="la">in urbe</td><td>Where?</td></tr>
            <tr><td>Place from which</td><td>ā/ab, dē, ē/ex + abl.</td><td class="la">ex urbe</td><td>From where?</td></tr>
            <tr><td>Separation</td><td>abl. (ā/ab with persons)</td><td class="la">metū līberāre</td><td>Freed from what?</td></tr>
            <tr><td>Time when / within which</td><td>abl. alone</td><td class="la">prīmā hōrā; tribus diēbus</td><td>When? Within what time?</td></tr>
            <tr><td>Means</td><td>abl. alone</td><td class="la">gladiō</td><td>With what? By what?</td></tr>
            <tr><td>Agent</td><td>ā/ab + abl. (persons)</td><td class="la">ā magistrō</td><td>By whom? (passive verb)</td></tr>
            <tr><td>Accompaniment</td><td>cum + abl.</td><td class="la">cum amīcō</td><td>Together with whom?</td></tr>
            <tr><td>Manner</td><td>(adj.) cum + abl.</td><td class="la">magnā cum cūrā</td><td>How?</td></tr>
            <tr><td>Respect</td><td>abl. alone</td><td class="la">virtūte</td><td>In what respect?</td></tr>
            <tr><td>Degree of difference</td><td>abl. alone</td><td class="la">paucīs post diēbus</td><td>By how much?</td></tr>
          </tbody>
        </table></div>
        <p>A method: first look for a preposition. <span class="la">in, sub</span> point to place where; <span class="la">ā/ab, dē, ex</span> to place from which, separation or (with a passive verb and a person) agent; <span class="la">cum</span> to accompaniment or manner. Without a preposition, ask whether the noun is a time-word (time), a tool or thing used (means), or the area in which a quality applies (respect). More uses follow later: comparison (XXVII), the ablative absolute (XXV), cause and price.</p>
      `
    }
  ],

  vocab: [
    { id: 'res', head: 'rēs', la: 'rēs, reī', g: 'f', pos: 'noun, 5th decl.', en: 'thing, matter, affair, business; property', stress: 'RĒS · RE-ī', deriv: 'real, republic; rien (French)', note: 'rēs pūblica: the state; rē vērā: in fact.' },
    { id: 'spes', head: 'spēs', la: 'spēs, speī', g: 'f', pos: 'noun, 5th decl.', en: 'hope', stress: 'SPĒS', deriv: 'desperate', note: 'Horace: spem longam resecēs (Odes 1.11.7).' },
    { id: 'fides', head: 'fidēs', la: 'fidēs, fideī', g: 'f', pos: 'noun, 5th decl.', en: 'trust, faith; loyalty; promise; protection', stress: 'FI-dēs', deriv: 'faith, fidelity; bona fide', note: 'Compare fidēlis (Lecture XVII).' },
    { id: 'meridies', head: 'merīdiēs', la: 'merīdiēs, merīdiēī', g: 'm', pos: 'noun, 5th decl.', en: 'midday, noon; south', stress: 'me-RĪ-di-ēs', deriv: 'meridian; a.m., p.m.', note: 'From medius + diēs.' },
    { id: 'portus', head: 'portus', la: 'portus, portūs', g: 'm', pos: 'noun, 4th decl.', en: 'harbour, port', stress: 'POR-tus', deriv: 'port; Porto', note: 'Related to porta (gate).' },
    { id: 'publicus', head: 'pūblicus', la: 'pūblicus, -a, -um', pos: 'adjective', en: 'public, of the people, of the state', stress: 'PŪ-bli-cus', deriv: 'public, publish' },
    { id: 'adversus', head: 'adversus', la: 'adversus, -a, -um', pos: 'adjective', en: 'facing; hostile; unfavourable', stress: 'ad-VER-sus', deriv: 'adverse, adversary', note: 'rēs adversae: misfortune. Perfect participle of advertō, “turn towards”.' },
    { id: 'excipio', head: 'excipiō', la: 'excipiō, excipere, excēpī, exceptum', pos: 'verb, 3rd conj. (-iō)', en: 'take up; receive, welcome; except', stress: 'ex-CI-pi-ō · ex-CI-pe-re', deriv: 'except, exception' },
    { id: 'praecedo', head: 'praecēdō', la: 'praecēdō, praecēdere, praecessī, praecessum', pos: 'verb, 3rd conj.', en: 'go ahead; surpass', stress: 'prae-CĒ-dō · prae-CĒ-de-re', deriv: 'precede', note: 'Caesar: virtūte praecēdunt.' },
    { id: 'contendo', head: 'contendō', la: 'contendō, contendere, contendī, contentum', pos: 'verb, 3rd conj.', en: 'strive, hurry; fight, contend; maintain', stress: 'con-TEN-dō · con-TEN-de-re', deriv: 'contend', note: 'Caesar: cum Germānīs contendunt.' },
    { id: 'deficio', head: 'dēficiō', la: 'dēficiō, dēficere, dēfēcī, dēfectum', pos: 'verb, 3rd conj. (-iō)', en: 'fail, run short; desert', stress: 'dē-FI-ci-ō · dē-FI-ce-re', deriv: 'deficient, defect, deficit' },
    { id: 'appropinquo', head: 'appropinquō', la: 'appropinquō, appropinquāre, appropinquāvī, appropinquātum', pos: 'verb, 1st conj.', en: 'approach, come near (+ dat. or ad)', stress: 'ap-pro-PIN-quō · ap-pro-pin-QUĀ-re', note: 'ad + propinquus, “near”.' },
    { id: 'valde', head: 'valdē', la: 'valdē', pos: 'adverb', en: 'very, greatly, strongly', stress: 'VAL-dē', note: 'Contracted from validē.' }
  ],

  grammarCards: [
    { id: 'g23-res', front: 'rēs: all cases', back: 'rēs, reī, reī, rem, rē; rēs, rērum, rēbus, rēs, rēbus' },
    { id: 'g23-dies', front: 'diēs: singular', back: 'diēs, diēī, diēī, diem, diē' },
    { id: 'g23-rei', front: 'reī vs diēī', back: 'Short e in reī (vowel before vowel); long ē in diēī (after i).' },
    { id: 'g23-gender', front: 'Gender of the fifth declension', back: 'Feminine, except diēs and merīdiēs (masculine)' },
    { id: 'g23-plural', front: 'Which 5th-declension nouns have a full plural?', back: 'Only rēs and diēs.' },
    { id: 'g23-respub', front: 'rēs pūblica', back: 'the state, commonwealth (“the public thing”)' },
    { id: 'g23-gestae', front: 'rēs gestae', back: 'deeds, achievements; history' },
    { id: 'g23-adv', front: 'rēs adversae / rēs secundae', back: 'misfortune / prosperity' },
    { id: 'g23-novae', front: 'rēs novae', back: 'revolution, political change' },
    { id: 'g23-revera', front: 'rē vērā', back: 'in fact, really (in der Tat)' },
    { id: 'g23-where', front: 'Ablative of place where', back: 'in/sub + abl.: in urbe, sub arbore' },
    { id: 'g23-respect', front: 'Ablative of respect', back: 'abl. alone: linguā differunt, virtūte praecēdunt' },
    { id: 'g23-method', front: 'First step in identifying an ablative', back: 'Look for a preposition (in, ab, ex, dē, cum); then ask time, means or respect.' },
    { id: 'g23-cicero', front: 'satis facere reī pūblicae vidēmur', back: 'we think we are doing our duty by the state (Cat. 1.2; ironic)' },
    { id: 'g23-pliny', front: 'Iam diēs alibi, illīc nox omnibus noctibus nigrior dēnsiorque.', back: 'By now it was day elsewhere; there night, blacker and denser than any night. (Pliny 6.16.17)' },
    { id: 'g23-rien', front: 'French rien', back: 'From Latin rem, “a thing”: ne … rien = “not a thing”' },
    { id: 'g23-lundi', front: 'lundi, Montag', back: 'Lūnae diēs, the day of the Moon; German translated the planetary names' },
    { id: 'g23-resgestae', front: 'Rēs gestae dīvī Augustī', back: 'Augustus’s own account of his deeds; the original in Rome is lost, the best copy is at Ankara' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Genitive singular of <span class="la">rēs</span>:', options: ['reī', 'rēs', 'rēī', 'rērum'], answer: 0, explain: 'Short e: reī.' },
    { id: 'e2', type: 'mc', prompt: 'Most fifth-declension nouns are:', options: ['feminine', 'masculine', 'neuter', 'of any gender'], answer: 0, explain: 'Except diēs and merīdiēs.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">rēs pūblica</span>:', options: ['the state, the commonwealth', 'a public thing for sale', 'a republic without a king, only', 'the people'], answer: 0, explain: 'Not originally a term for a constitution without a king.' },
    { id: 'e4', type: 'mc', prompt: 'Dative/ablative plural of <span class="la">diēs</span>:', options: ['diēbus', 'diēīs', 'diibus', 'diēs'], answer: 0, explain: '-ēbus.' },
    { id: 'e5', type: 'mc', prompt: 'In <span class="la">virtūte praecēdunt</span>, <span class="la">virtūte</span> is an ablative of:', options: ['respect', 'means', 'manner', 'time'], answer: 0, explain: 'They surpass in courage.' },
    { id: 'e6', type: 'mc', prompt: 'In <span class="la">in urbe habitat</span>, <span class="la">in urbe</span> is an ablative of:', options: ['place where', 'place from which', 'separation', 'means'], answer: 0, explain: 'in + abl.: where?' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Mult___ rēs vīdī.</span>', hint: 'many (acc. f. pl.)', answers: ['ās', 'as'], full: 'Multās rēs vīdī.', explain: 'rēs here is accusative plural feminine.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Carpe di___!</span>', hint: 'the day', answers: ['em'], full: 'Carpe diem!', explain: 'Accusative singular.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Magnam sp___ habēmus.</span>', hint: 'hope (acc.)', answers: ['em'], full: 'Magnam spem habēmus.', explain: 'Accusative singular: spem.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Prīmō di___ vēnit.</span>', hint: 'on the first day', answers: ['ē', 'e'], full: 'Prīmō diē vēnit.', explain: 'Ablative of time.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Mīlitēs prō rē pūblic___ pugnant.</span>', hint: 'the state (abl.)', answers: ['ā', 'a'], full: 'Mīlitēs prō rē pūblicā pugnant.', explain: 'pūblicus agrees with rē: ablative feminine.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Nōmina r___ discimus.</span>', hint: 'of the things', answers: ['ērum', 'erum'], full: 'Nōmina rērum discimus.', explain: 'Genitive plural.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">rēs</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['rēs', 'rēs'] },
      { label: 'Gen.', answers: ['reī', 'rērum'] },
      { label: 'Dat.', answers: ['reī', 'rēbus'] },
      { label: 'Acc.', answers: ['rem', 'rēs'] },
      { label: 'Abl.', answers: ['rē', 'rēbus'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">diēs</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['diēs', 'diēs'] },
      { label: 'Gen.', answers: ['diēī', 'diērum'] },
      { label: 'Dat.', answers: ['diēī', 'diēbus'] },
      { label: 'Acc.', answers: ['diem', 'diēs'] },
      { label: 'Abl.', answers: ['diē', 'diēbus'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each phrase to its use of the ablative.', pairs: [
      ['in urbe', 'place where'], ['ex urbe', 'place from which'], ['prīmā hōrā', 'time when'], ['gladiō', 'means'], ['virtūte (praecēdunt)', 'respect']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Prīmō diē Lūcius in Italiam vēnit.', tokens: ['On the first day', 'Lucius', 'came', 'to Italy'], explain: 'prīmō diē: ablative of time.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Rēs pūblica in perīculō est.', model: 'The state is in danger.', accepted: ['state is in danger', 'republic is in danger', 'commonwealth is in danger', 'state is in peril'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Eō diē magnam spem habēbāmus.', model: 'On that day we had great hope.', accepted: ['on that day we had great hope', 'that day we had great hope', 'on that day we had great hopes', 'we had great hope on that day', 'we had great hope that day', 'on that day we were having great hope'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Gallī linguā inter sē differunt.', model: 'The Gauls differ from one another in language.', accepted: ['gauls differ from one another in language', 'gauls differ from each other in language', 'gauls differ among themselves in language', 'gauls differ in language from one another', 'gauls differ in language from each other', 'gauls differ in language among themselves'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'within a few days', model: 'paucīs diēbus', accepted: ['paucīs diēbus'], explain: 'Time within which: plain ablative. Diēs is fifth declension, ablative plural diēbus.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'the state (nom.)', model: 'rēs pūblica', accepted: ['rēs pūblica'], explain: 'Literally “the public thing”: both parts decline (reī pūblicae, rem pūblicam). Rēs is feminine.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'with great hope', model: 'magnā cum spē', accepted: ['magnā cum spē', 'magnā spē', 'cum magnā spē'], explain: 'Ablative of manner. With an adjective, cum may be left out or set between adjective and noun, magnā cum spē.' },
    { id: 'e23', type: 'mc', prompt: 'In Cicero’s <span class="la">satis facere reī pūblicae vidēmur</span>, <span class="la">reī pūblicae</span> is:', options: ['dative: “(to) the state”', 'genitive: “of the state”', 'nominative plural', 'ablative'], answer: 0, explain: 'satis facere + dative.' },
    { id: 'e24', type: 'mc', prompt: 'Pliny’s <span class="la">Iam diēs alibi, illīc nox …</span> means:', options: ['By now it was day elsewhere; there it was night', 'Day and night came at once everywhere', 'The day was long, the night short', 'There it was day, elsewhere night'], answer: 0, explain: 'At Stabiae the ash cloud kept the morning dark.' },
    { id: 'e25', type: 'mc', prompt: 'French <em>rien</em> comes from:', options: ['rem', 'rēs', 'nihil', 'reī'], answer: 0, explain: 'The accusative: “a thing”.' }
  ],

  reading: {
    title: 'Rēs novae',
    note: 'Original passage: Lucius returns in spring. Tap any word.',
    text: 'Mēnse Aprīlī, prīmā lūce, puerī magnā cum spē ad portum currēbant: nam nāvis Graeca ex altō appropinquābat. In nāve erat Lūcius, quī vēre venīre prōmīserat. Fidem servāverat! Lūcius ab omnibus magnō gaudiō excipitur. “Quid novī?” rogat Mārcus. “Multae rēs novae!” respondet Lūcius. “Hieme in Graeciā multās rēs vīdī et audīvī. Dēmētrium philosophum iterum vīdī, quī dē rē pūblicā Rōmānā multa rogābat. Graecī enim linguā et artibus nōs praecēdunt, sed rē mīlitārī nōn.” Tum Lūcius dē itinere nārrāvit: “Tribus diēbus ad Italiam nāvigāvimus. Prīmō diē ventus secundus erat; secundō diē magna tempestās vēnit; tertiō diē, magnā cum cūrā gubernātōris, in portum vēnimus. In rēbus adversīs fidēs nautārum magna fuit, et spēs mea numquam dēfēcit.” Mārcus: “Hodiē nōn dē rēbus adversīs dīcēmus; hic diēs fēstus est!” Eō diē omnēs laetī erant, et nocte in ātriō multīs cum fābulīs sēdērunt. Tandem Quīntus rogāvit: “Lūcī, quandō mē tēcum in Graeciam dūcēs?” Et Lūcius: “Ubi linguam Graecam didiceris, eō diē tē dūcam. Rēs in manibus tuīs est!”',
    translation: 'In the month of April, at first light, the boys ran to the harbour full of hope: for a Greek ship was approaching from the open sea. On the ship was Lucius, who had promised to come in spring. He had kept his word! Lucius is welcomed by everyone with great joy. “What news?” asks Marcus. “Many new things!” answers Lucius. “During the winter I saw and heard many things in Greece. I saw Demetrius the philosopher again, who asked many questions about the Roman state. For the Greeks surpass us in language and the arts, but not in military affairs.” Then Lucius told them about the journey: “We sailed to Italy in three days. On the first day the wind was favourable; on the second day a great storm came; on the third day, through the great care of the helmsman, we came into harbour. In misfortune the loyalty of the sailors was great, and my hope never failed.” Marcus: “Today we shall not speak of misfortune; this day is a holiday!” On that day everyone was happy, and at night they sat in the atrium with many stories. At last Quintus asked: “Lucius, when will you take me with you to Greece?” And Lucius: “On the day you have learnt Greek, I shall take you. The matter is in your hands!”',
    notes: [
      { ref: 'Mēnse Aprīlī, prīmā lūce', html: 'Two ablatives of time. <span class="la">Aprīlis</span> is a third-declension adjective agreeing with <span class="la">mēnse</span>.' },
      { ref: 'magnā cum spē', html: 'Ablative of manner, fifth declension: <span class="la">spē</span>.' },
      { ref: 'ad portum currēbant', html: '<span class="la">portus</span>: fourth declension (Lecture XXI).' },
      { ref: 'nāvis Graeca ex altō appropinquābat', html: '<span class="la">ex altō</span>: place from which; <span class="la">altum</span>, “the deep”, means the open sea.' },
      { ref: 'In nāve erat Lūcius, quī vēre venīre prōmīserat', html: '<span class="la">in nāve</span>: place where. <span class="la">vēre</span>: time. <span class="la">prōmīserat</span>: pluperfect of <span class="la">prōmittō</span>.' },
      { ref: 'Fidem servāverat!', html: '<span class="la">fidem servāre</span>: to keep one’s word. <span class="la">fidēs</span> is one of the great Roman values: trustworthiness, keeping faith.' },
      { ref: 'magnō gaudiō excipitur', html: 'Ablative of manner without <span class="la">cum</span>, possible with an adjective (Lecture XV). <span class="la">excipitur</span>: present passive of the <span class="la">-iō</span> verb <span class="la">excipiō</span>.' },
      { ref: 'Quid novī?', html: 'Genitive of the whole (Lecture XVI): “what of new?”, “what news?”.' },
      { ref: 'Multae rēs novae!', html: 'Lucius means simply “many new things”; <span class="la">rēs novae</span> in a political context would mean “revolution”, which is part of the joke of the title.' },
      { ref: 'dē rē pūblicā Rōmānā', html: '<span class="la">dē</span> + ablative: “about the Roman state”.' },
      { ref: 'Graecī enim linguā et artibus nōs praecēdunt, sed rē mīlitārī nōn', html: 'Ablatives of respect, as in Caesar’s <span class="la">virtūte praecēdunt</span>. <span class="la">rē mīlitārī</span>: “in military affairs”; <span class="la">mīlitāris, -e</span> is a third-declension adjective. The sentiment echoes Demetrius in Lecture XII.' },
      { ref: 'Tribus diēbus ad Italiam nāvigāvimus', html: 'Ablative of time within which: “in (the space of) three days”.' },
      { ref: 'Prīmō diē … secundō diē … tertiō diē', html: 'Ablatives of time when, with ordinals (Lecture XVI).' },
      { ref: 'magnā cum cūrā gubernātōris', html: 'Manner: “with the great care of the helmsman”.' },
      { ref: 'In rēbus adversīs', html: '“In misfortune”: <span class="la">rēs adversae</span>, place where in a figurative sense.' },
      { ref: 'spēs mea numquam dēfēcit', html: '<span class="la">dēfēcit</span>: perfect of <span class="la">dēficiō</span>, “failed”.' },
      { ref: 'hic diēs fēstus est', html: '<span class="la">diēs fēstus</span>: holiday; <span class="la">fēstus</span> masculine because <span class="la">diēs</span> is masculine.' },
      { ref: 'Ubi linguam Graecam didiceris, eō diē tē dūcam', html: 'Future perfect in the <span class="la">ubi</span>-clause (Lecture XIII): “when you have learnt”. <span class="la">eō diē</span>: “on that day”.' },
      { ref: 'Rēs in manibus tuīs est!', html: '“The matter is in your hands”: a fifth-declension and a fourth-declension noun together.' }
    ],
    glosses: {
      'mēnse': 'abl. of mēnsis: month', 'aprīlī': 'abl. of Aprīlis: (of) April', 'prīmā': 'abl. f. of prīmus: first', 'lūce': 'abl. of lūx: light', 'puerī': 'nom. pl. of puer: boys', 'magnā': 'abl. f. of magnus: great', 'cum': 'with (+ abl.)', 'spē': 'abl. of spēs: hope', 'ad': 'to (+ acc.)', 'portum': 'acc. of portus: harbour', 'currēbant': 'impf. 3rd pl. of currō: were running',
      'nam': 'for', 'nāvis': 'ship (nom.)', 'graeca': 'nom. f. of Graecus: Greek', 'ex': 'out of, from (+ abl.)', 'altō': 'abl. of altum: the open sea', 'appropinquābat': 'impf. 3rd sg. of appropinquō: was approaching',
      'in': 'in, on (+ abl.); into, to (+ acc.)', 'nāve': 'abl. of nāvis: ship', 'erat': 'was', 'lūcius': 'Lucius (nom.)', 'quī': 'who', 'vēre': 'abl. of vēr: in spring', 'venīre': 'to come', 'prōmīserat': 'plupf. 3rd sg. of prōmittō: had promised',
      'fidem': 'acc. of fidēs: word, promise', 'servāverat': 'plupf. 3rd sg. of servō: had kept', 'ab': 'by (+ abl.)', 'omnibus': 'abl. pl. of omnēs: everyone', 'magnō': 'abl. n. of magnus: great', 'gaudiō': 'abl. of gaudium: joy', 'excipitur': 'pres. pass. 3rd sg. of excipiō: is welcomed',
      'quid': 'what?', 'novī': 'gen. of novum: (of) new', 'rogat': '3rd sg. of rogō: asks', 'mārcus': 'Marcus (nom.)', 'multae': 'nom. pl. f. of multus: many', 'rēs': 'things (nom./acc. pl.)', 'novae': 'nom. pl. f. of novus: new', 'respondet': '3rd sg. of respondeō: answers',
      'hieme': 'abl. of hiems: in winter', 'graeciā': 'abl. of Graecia: Greece', 'multās': 'acc. pl. f. of multus: many', 'vīdī': 'perf. 1st sg. of videō: I saw', 'et': 'and', 'audīvī': 'perf. 1st sg. of audiō: I heard',
      'dēmētrium': 'acc. of Dēmētrius', 'philosophum': 'acc. of philosophus: philosopher', 'iterum': 'again', 'dē': 'about (+ abl.)', 'rē': 'abl. of rēs: thing, affair', 'pūblicā': 'abl. f. of pūblicus: public', 'rōmānā': 'abl. f. of Rōmānus: Roman', 'multa': 'many things (acc. pl. n.)', 'rogābat': 'impf. 3rd sg. of rogō: asked',
      'graecī': 'nom. pl. of Graecus: the Greeks', 'enim': 'for', 'linguā': 'abl. of lingua: (in) language', 'artibus': 'abl. pl. of ars: (in) the arts', 'nōs': 'us', 'praecēdunt': '3rd pl. of praecēdō: surpass', 'sed': 'but', 'mīlitārī': 'abl. of mīlitāris: military', 'nōn': 'not',
      'tum': 'then', 'itinere': 'abl. of iter: journey', 'nārrāvit': 'perf. 3rd sg. of nārrō: told', 'tribus': 'abl. of trēs: three', 'diēbus': 'abl. pl. of diēs: days', 'italiam': 'acc. of Italia: Italy', 'nāvigāvimus': 'perf. 1st pl. of nāvigō: we sailed',
      'prīmō': 'abl. m. of prīmus: first', 'diē': 'abl. of diēs: day', 'ventus': 'wind (nom.)', 'secundus': 'favourable', 'secundō': 'abl. m. of secundus: second', 'tempestās': 'storm (nom.)', 'vēnit': 'perf. 3rd sg. of veniō: came', 'tertiō': 'abl. m. of tertius: third', 'cūrā': 'abl. of cūra: care', 'gubernātōris': 'gen. of gubernātor: of the helmsman', 'vēnimus': 'perf. 1st pl. of veniō: we came',
      'rēbus': 'abl. pl. of rēs: circumstances', 'adversīs': 'abl. pl. of adversus: unfavourable', 'fidēs': 'loyalty (nom.)', 'nautārum': 'gen. pl. of nauta: of the sailors', 'magna': 'nom. f. of magnus: great', 'fuit': 'perf. 3rd sg. of sum: was', 'spēs': 'hope (nom.)', 'mea': 'my', 'numquam': 'never', 'dēfēcit': 'perf. 3rd sg. of dēficiō: failed',
      'hodiē': 'today', 'dīcēmus': 'fut. 1st pl. of dīcō: we shall speak', 'hic': 'this', 'diēs': 'day (nom.)', 'fēstus': 'festive, holiday', 'est': 'is',
      'eō': 'abl. m. of is: that', 'omnēs': 'everyone', 'laetī': 'nom. pl. of laetus: happy', 'erant': 'were', 'nocte': 'at night', 'ātriō': 'abl. of ātrium: atrium', 'multīs': 'abl. pl. of multus: many', 'fābulīs': 'abl. pl. of fābula: stories', 'sēdērunt': 'perf. 3rd pl. of sedeō: sat',
      'tandem': 'at last', 'quīntus': 'Quintus (nom.)', 'rogāvit': 'perf. 3rd sg. of rogō: asked', 'lūcī': 'voc. of Lūcius', 'quandō': 'when?', 'mē': 'me', 'tēcum': 'with you', 'graeciam': 'acc. of Graecia: Greece', 'dūcēs': 'fut. 2nd sg. of dūcō: you will take',
      'ubi': 'when', 'linguam': 'acc. of lingua: language', 'graecam': 'acc. f. of Graecus: Greek', 'didiceris': 'fut. perf. 2nd sg. of discō: you will have learnt', 'tē': 'you', 'dūcam': 'fut. 1st sg. of dūcō: I shall take', 'manibus': 'abl. pl. of manus: hands', 'tuīs': 'abl. pl. of tuus: your'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Why were the boys running to the harbour?', options: ['A Greek ship with Lucius was approaching', 'There was a storm', 'Their father had called them', 'A market was being held'], answer: 0, explain: 'nāvis Graeca ex altō appropinquābat. In nāve erat Lūcius.' },
      { id: 'r2', type: 'mc', prompt: 'In what, according to Lucius, do the Greeks surpass the Romans?', options: ['In language and the arts', 'In military affairs', 'In wealth', 'In nothing'], answer: 0, explain: 'linguā et artibus nōs praecēdunt, sed rē mīlitārī nōn.' },
      { id: 'r3', type: 'mc', prompt: 'How long did the voyage to Italy take?', options: ['Three days', 'One day', 'A month', 'The whole winter'], answer: 0, explain: 'Tribus diēbus ad Italiam nāvigāvimus.' },
      { id: 'r4', type: 'mc', prompt: 'When will Lucius take Quintus to Greece?', options: ['When Quintus has learnt Greek', 'Next spring', 'Never', 'When Marcus allows it'], answer: 0, explain: 'Ubi linguam Graecam didiceris, eō diē tē dūcam.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">rēbus</span>:', options: ['dat./abl. pl. of rēs', 'gen. pl. of rēs', 'nom. pl. of rēs', 'acc. sg. of rēs'], answer: 0, explain: '-ēbus.' },
      { id: 't2', type: 'mc', prompt: 'Gender of <span class="la">diēs</span> (usually):', options: ['masculine', 'feminine', 'neuter', 'it has none'], answer: 0, explain: 'Exception in the fifth declension.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">rē vērā</span>:', options: ['in fact, really', 'a true thing', 'by the true king', 'truly a thing'], answer: 0, explain: 'German: in der Tat.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Fid___ servāvit.</span>', hint: 'his word (acc.)', answers: ['em'], full: 'Fidem servāvit.', explain: 'Accusative: fidem.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Merīdi___ vēnērunt.</span>', hint: 'at noon (abl.)', answers: ['ē', 'e'], full: 'Merīdiē vēnērunt.', explain: 'Ablative of time.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Rōmānī rē mīlitārī Graecōs praecēdunt.', model: 'The Romans surpass the Greeks in military affairs.', accepted: ['romans surpass greeks in military affairs', 'romans surpass greeks in warfare', 'romans excel greeks in military affairs', 'romans excel greeks in warfare', 'romans surpass greeks in military matters', 'romans are superior to greeks in military affairs'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'on that day', model: 'eō diē', accepted: ['eō diē', 'illō diē'], explain: 'Time when: plain ablative. Diēs is usually masculine, hence eō (from is).' },
      { id: 't8', type: 'mc', prompt: 'In <span class="la">sub arbore sedet</span>, the ablative expresses:', options: ['place where', 'separation', 'means', 'time'], answer: 0, explain: 'sub + abl.: under (rest).' },
      { id: 't9', type: 'mc', prompt: 'The <span class="la">Rēs gestae dīvī Augustī</span> is best preserved:', options: ['on a temple wall at Ankara', 'in a manuscript at the Vatican', 'on bronze tablets in Rome', 'in Pliny’s letters'], answer: 0, explain: 'The Monumentum Ancyranum.' },
      { id: 't10', type: 'mc', prompt: 'In Caesar’s <span class="la">linguā, īnstitūtīs, lēgibus inter sē differunt</span>, the ablatives express:', options: ['respect', 'means', 'agent', 'place where'], answer: 0, explain: 'In what respect do they differ?' },
      { id: 't11', type: 'mc', prompt: 'German <em>Montag</em> translates:', options: ['Lūnae diēs', 'Mārtis diēs', 'Sōlis diēs', 'Iovis diēs'], answer: 0, explain: 'The day of the Moon.' }
    ]
  },

  reference: [
    { title: 'Fifth declension', headers: ['', 'rēs (f.)', 'diēs (m.)'], rows: [
      ['Nom. sg.', 'rēs', 'diēs'], ['Gen.', 'reī', 'diēī'], ['Dat.', 'reī', 'diēī'], ['Acc.', 'rem', 'diem'], ['Abl.', 'rē', 'diē'],
      ['Nom. pl.', 'rēs', 'diēs'], ['Gen.', 'rērum', 'diērum'], ['Dat./Abl.', 'rēbus', 'diēbus'], ['Acc.', 'rēs', 'diēs']
    ] },
    { title: 'The five declensions: genitive singular', headers: ['Declension', 'Example', 'Gen. sg.', 'Stem vowel'], rows: [
      ['1st', 'rosa', 'rosae', 'ā'], ['2nd', 'servus, bellum', 'servī, bellī', 'o'], ['3rd', 'rēx, corpus', 'rēgis, corporis', 'consonant / i'], ['4th', 'manus, cornū', 'manūs, cornūs', 'u'], ['5th', 'rēs, diēs', 'reī, diēī', 'ē']
    ] },
    { title: 'Uses of the ablative', headers: ['Use', 'Form', 'Example'], rows: [
      ['Place where', 'in, sub + abl.', 'in urbe'], ['Place from which', 'ab, dē, ex + abl.', 'ex urbe'], ['Separation', 'abl. (ab with persons)', 'metū līberāre'], ['Time', 'abl.', 'prīmā hōrā'], ['Means', 'abl.', 'gladiō'], ['Agent', 'ā/ab + abl.', 'ā magistrō'], ['Accompaniment', 'cum + abl.', 'cum amīcō'], ['Manner', '(adj.) cum + abl.', 'magnā cum cūrā'], ['Respect', 'abl.', 'virtūte'], ['Degree of difference', 'abl.', 'paucīs post diēbus']
    ] }
  ]
});
