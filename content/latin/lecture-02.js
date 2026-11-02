/*
 * Latin — Lecture II: the second conjugation, the infinitive, commands.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Pictures from Wikimedia Commons; listed in CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-02',
  number: 2,
  title: 'Vidē, cavē, valē',
  subtitle: 'The second conjugation; the infinitive; giving commands',
  minutes: 60,

  intro: `
    <p>Lecture I gave you the verbs with stem vowel <span class="la">ā</span>. This lecture adds the second great group, the verbs in <span class="la">ē</span>: <span class="la">videō</span> “see”, <span class="la">habeō</span> “have”, <span class="la">teneō</span> “hold”, <span class="la">timeō</span> “fear”, <span class="la">doceō</span> “teach”. The group is smaller, but it contains some of the commonest verbs in the language, and its endings are the ones you already know.</p>
    <p>Two new forms come with it. The <em>infinitive</em> (“to see”, “to teach”) is how Latin names an action, and it combines with verbs such as <span class="la">dēbeō</span> “ought” exactly as German infinitives combine with <em>müssen</em> and <em>sollen</em>. The <em>imperative</em> is how Romans gave orders and greeted each other: <span class="la">salvē</span> “hello” and <span class="la">valē</span> “goodbye” are imperatives, “be well!”.</p>
    <p>One difference from German is worth knowing at once. Latin had no polite form of address. Classical Latin said <span class="la">tū</span> to everyone, slave or emperor, and kept <span class="la">vōs</span> for more than one person. Using the plural for a single respected person begins only in late antiquity. So a Latin command has just two forms, singular and plural, like German <em>Komm!</em> and <em>Kommt!</em>, and no equivalent of <em>Kommen Sie!</em>.</p>
    <p>By the end you should be able to conjugate any verb like <span class="la">moneō</span>, tell the first two conjugations apart at a glance, form and translate commands and prohibitions, and read a short scene from a Roman schoolroom.</p>
  `,

  background: [
    {
      title: 'Going to school in Rome',
      html: `
        <p>Rome had no state schools. Children of families who could pay, mostly boys but also some girls, went from about the age of seven to a <span class="la">lūdus</span> run by a <span class="la">lūdī magister</span>, who taught reading, writing and arithmetic. Lessons often took place in a rented room or a corner of a colonnade, and they began early in the morning. Those who continued studied with a <span class="la">grammaticus</span>, who taught correct language through the poets: Homer in Greek and, after his death in 19 BC, Virgil above all. The few who went further trained with a <span class="la">rhetor</span> in public speaking, the skill that opened a career in law and politics.</p>
        <p>Education was bilingual. An educated Roman was expected to know Greek, and teachers were often Greek-speaking freedmen. Discipline could be harsh. The poet Horace remembered his teacher as <span class="la">plāgōsus Orbilius</span>, “Orbilius the flogger” (<em>Epistles</em> 2.1.70–71), while the rhetorician Quintilian, writing about a century later, argued against beating pupils at all (<em>Institutio oratoria</em> 1.3.13–17).</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Funerary_relief_found_in_Neumagen_near_Trier,_a_teacher_with_three_discipuli,_around_180-185_AD,_Rheinisches_Landesmuseum_Trier,_Germany_(29656302165).jpg/960px-Funerary_relief_found_in_Neumagen_near_Trier,_a_teacher_with_three_discipuli,_around_180-185_AD,_Rheinisches_Landesmuseum_Trier,_Germany_(29656302165).jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Funerary_relief_found_in_Neumagen_near_Trier,_a_teacher_with_three_discipuli,_around_180-185_AD,_Rheinisches_Landesmuseum_Trier,_Germany_(29656302165).jpg/500px-Funerary_relief_found_in_Neumagen_near_Trier,_a_teacher_with_three_discipuli,_around_180-185_AD,_Rheinisches_Landesmuseum_Trier,_Germany_(29656302165).jpg|https://upload.wikimedia.org/wikipedia/commons/5/5b/Funerary_relief_found_in_Neumagen_near_Trier,_a_teacher_with_three_discipuli,_around_180-185_AD,_Rheinisches_Landesmuseum_Trier,_Germany_(29656302165).jpg" alt="Roman stone relief: a seated teacher between two pupils holding scrolls, a third pupil arriving with a satchel"><figcaption>Funerary relief from Neumagen on the Moselle, about AD 180–185 (Rheinisches Landesmuseum Trier): a teacher with three pupils. A Roman school scene from what is now Germany. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Funerary_relief_found_in_Neumagen_near_Trier,_a_teacher_with_three_discipuli,_around_180-185_AD,_Rheinisches_Landesmuseum_Trier,_Germany_(29656302165).jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Learning Latin after Rome: from Donatus to the Gymnasium',
      html: `
        <p>Once Latin was no longer anyone’s mother tongue, it had to be learned entirely from books, and the books were grammars. The most successful was the short <em>Ars minor</em> of Aelius Donatus, a Roman teacher of the fourth century AD whose pupils included Saint Jerome. It works by question and answer, beginning <span class="la">Partēs ōrātiōnis quot sunt? Octō.</span>, “How many parts of speech are there? Eight.” For more than a thousand years European children began with it. In medieval German a <em>Donat</em> simply meant an elementary Latin primer, and Donatus was among the first texts printed with movable type in Mainz.</p>
        <p>Humanist and then Jesuit schools put Latin at the centre of the curriculum, and the Prussian reforms associated with Wilhelm von Humboldt in the early nineteenth century made the classical languages the core of the <em>humanistisches Gymnasium</em>. The <em>Latinum</em> is its descendant. In Britain, Benjamin Hall Kennedy’s <em>Latin Primer</em> (1866) shaped generations of schoolboys, and in America Frederic Wheelock’s <em>Latin</em> (1956) became the standard college textbook. The order of topics in this course follows that long tradition: it is the order in which Latin has been taught for centuries.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Massimiliano_Sforza_between_Vice_and_Virtue_(Donatus_Grammatica).jpg/960px-Massimiliano_Sforza_between_Vice_and_Virtue_(Donatus_Grammatica).jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Massimiliano_Sforza_between_Vice_and_Virtue_(Donatus_Grammatica).jpg/500px-Massimiliano_Sforza_between_Vice_and_Virtue_(Donatus_Grammatica).jpg|https://upload.wikimedia.org/wikipedia/commons/f/ff/Massimiliano_Sforza_between_Vice_and_Virtue_(Donatus_Grammatica).jpg" alt="Illuminated manuscript page with a young prince between allegorical figures"><figcaption>A page from the illuminated Donatus grammar made in Milan in the 1490s for the young Massimiliano Sforza: even a prince began his Latin with Donatus. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Massimiliano_Sforza_between_Vice_and_Virtue_(Donatus_Grammatica).jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Commands in Roman law',
      html: `
        <p>The oldest Roman law code, the Twelve Tables of about 450 BC, was written as a series of commands. Its first rule, as later Roman authors quote it, is <span class="la">Sī in iūs vocat, ītō</span>: “If he summons (him) to court, (the man) shall go.” The form <span class="la">ītō</span> is a special, solemn imperative used in laws and formal instructions, which you will meet later; the everyday imperative of this lecture is the one Romans used in speech, letters and inscriptions.</p>
        <p>No text of the Twelve Tables survives. They are known only from quotations, often in a modernised spelling, by writers such as Cicero, who says that as a boy he had to learn them by heart (<em>De legibus</em> 2.59).</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Cavē canem</p>
    <p>“Beware of the dog.” The words are set in a floor mosaic at the entrance of the House of the Tragic Poet at Pompeii, above the picture of a chained dog, and they were there when Vesuvius buried the town in AD 79. <span class="la">Cavē</span> is the imperative singular of <span class="la">caveō</span>, a verb of this lecture; <span class="la">canem</span> is the accusative of <span class="la">canis</span> “dog”, a noun of the third declension.</p>
    <p>The phrase was evidently a commonplace. In Petronius’ novel the <em>Satyricon</em>, written in the first century AD, the narrator enters the house of the freedman Trimalchio and is so startled by a painted dog on the wall, with <span class="la">CAVE CANEM</span> written above it in capitals, that he almost falls over backwards (<em>Satyricon</em> 29.1).</p>
    <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cave_canem_casa_poeta_tragico.JPG/960px-Cave_canem_casa_poeta_tragico.JPG" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cave_canem_casa_poeta_tragico.JPG/500px-Cave_canem_casa_poeta_tragico.JPG|https://upload.wikimedia.org/wikipedia/commons/b/bb/Cave_canem_casa_poeta_tragico.JPG" alt="Floor mosaic of a chained black dog with the words CAVE CANEM"><figcaption>The <em>Cave canem</em> mosaic at the entrance of the House of the Tragic Poet, Pompeii, 1st century AD. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Cave_canem_casa_poeta_tragico.JPG" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
  `,

  pronunciation: `
    <h3>A vowel before a vowel is short</h3>
    <p>The <span class="la">e</span> of <span class="la">moneō</span>, <span class="la">videō</span>, <span class="la">habeō</span> is short, although the stem vowel is <span class="la">ē</span> elsewhere (<span class="la">monēs</span>, <span class="la">monēre</span>). The rule behind this runs through the whole language: a long vowel is shortened directly before another vowel. Latin grammar traditionally states it as <span class="la">vōcālis ante vōcālem corripitur</span>, “a vowel before a vowel is shortened”. There are exceptions, mostly in Greek words and a few special forms, which will be marked.</p>
    <p>Say the two vowels as two syllables: <span class="la">mo-ne-ō</span>, not “mon-jo”. German speakers tend to glide <em>e</em> into a <em>j</em> here.</p>
    <h3>Stress in the second conjugation</h3>
    <p>Because the <span class="la">e</span> of <span class="la">moneō</span> is short, the stress falls back: <span class="la">MO-ne-ō</span>. In the forms with long <span class="la">ē</span> it falls on the <span class="la">ē</span>: <span class="la">mo-NĒ-mus</span>, <span class="la">mo-NĒ-tis</span>, <span class="la">mo-NĒ-re</span>. The long <span class="la">ē</span> of the infinitive matters: in the third conjugation (Lecture IX) the infinitive has a short <span class="la">e</span> and a different stress, so <span class="la">vi-DĒ-re</span> “to see” sounds quite different from <span class="la">DŪ-ce-re</span> “to lead”.</p>
    <h3>Greek words</h3>
    <p><span class="la">philosophia</span> is Greek. Its <span class="la">ph</span> is a <em>p</em> followed by a breath, as described in Lecture I, not an <em>f</em>; the <em>f</em> pronunciation came later. Stress: <span class="la">phi-lo-SO-phi-a</span>.</p>
    <h3>Greetings</h3>
    <p><span class="la">SAL-vē</span>, <span class="la">sal-VĒ-te</span>; <span class="la">VA-lē</span>, <span class="la">va-LĒ-te</span>. The final <span class="la">ē</span> is long and should be heard.</p>
  `,

  grammar: [
    {
      title: '1. The second conjugation',
      html: `
        <p>Verbs of the second conjugation have a stem ending in <span class="la">ē</span>. As before, the stem shows in the infinitive: <span class="la">monē-re</span> “to warn”, so the stem is <span class="la">monē-</span>. The personal endings are exactly those of Lecture I.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>1st conjugation</th><th>2nd conjugation</th></tr></thead>
          <tbody>
            <tr><th>Infinitive</th><td class="la">amā-re</td><td class="la">monē-re</td></tr>
            <tr><th>1st sg.</th><td class="la">amō</td><td class="la">mone-ō</td></tr>
            <tr><th>2nd sg.</th><td class="la">amā-s</td><td class="la">monē-s</td></tr>
            <tr><th>3rd sg.</th><td class="la">ama-t</td><td class="la">mone-t</td></tr>
            <tr><th>1st pl.</th><td class="la">amā-mus</td><td class="la">monē-mus</td></tr>
            <tr><th>2nd pl.</th><td class="la">amā-tis</td><td class="la">monē-tis</td></tr>
            <tr><th>3rd pl.</th><td class="la">ama-nt</td><td class="la">mone-nt</td></tr>
          </tbody>
        </table></div>
        <p>Two rules account for every form:</p>
        <ul>
          <li>In the 1st person singular the stem vowel does not merge with <span class="la">-ō</span>, as <span class="la">ā</span> did in <span class="la">amō</span>. It stays, but shortened, because a vowel before a vowel is short: <span class="la">moneō</span>.</li>
          <li>As in the first conjugation, the long vowel is shortened before final <span class="la">-t</span> and before <span class="la">-nt</span>: <span class="la">monet</span>, <span class="la">monent</span>.</li>
        </ul>
        <h3>Telling the conjugations apart</h3>
        <p>The dictionary entry tells you at once. First conjugation: <span class="la">-ō, -āre</span> (<span class="la">amō, amāre</span>). Second conjugation: <span class="la">-eō, -ēre</span> (<span class="la">moneō, monēre</span>). The <span class="la">e</span> before the <span class="la">-ō</span> is the quickest sign. In running text, the vowel before the personal ending tells you: <span class="la">-at, -ant</span> or <span class="la">-et, -ent</span>.</p>
        <p class="aside">Many second-conjugation verbs describe a state rather than an action: <span class="la">habēre</span> “have”, <span class="la">tenēre</span> “hold”, <span class="la">timēre</span> “be afraid”, <span class="la">valēre</span> “be well”, <span class="la">manēre</span> “remain”. Historical linguists connect this with an old Indo-European suffix for states. It is a tendency, not a rule: <span class="la">monēre</span> and <span class="la">docēre</span> are actions.</p>
        <h3>The perfect forms</h3>
        <p>The principal parts of second-conjugation verbs are less regular than those of the first. Many have <span class="la">-uī, -itum</span> (<span class="la">moneō, monēre, monuī, monitum</span>), but <span class="la">videō</span> has <span class="la">vīdī, vīsum</span> and <span class="la">maneō</span> has <span class="la">mānsī, mānsum</span>. Learn all four parts with each verb now; they will be needed from Lecture XIII.</p>
      `
    },
    {
      title: '2. The present infinitive',
      html: `
        <p>The infinitive ends in <span class="la">-re</span>: <span class="la">amāre</span> “to love”, <span class="la">monēre</span> “to warn”, <span class="la">esse</span> “to be” (irregular). It names the action itself, without a subject or person.</p>
        <h3>With verbs such as dēbeō</h3>
        <p>Some verbs are naturally completed by an infinitive: <span class="la">dēbeō</span> “I ought”, later <span class="la">possum</span> “I can” and <span class="la">volō</span> “I want”. This is the <em>complementary infinitive</em>, and it works exactly like a German modal verb with an infinitive:</p>
        <ul>
          <li><span class="la">Labōrāre dēbēs.</span> “You ought to work”, <em>Du sollst arbeiten.</em></li>
          <li><span class="la">Puellae nihil timēre dēbent.</span> “The girls should fear nothing.”</li>
        </ul>
        <p>German puts the infinitive at the end; Latin, which puts the finite verb last, usually has the infinitive just before it. <span class="la">dēbeō</span> literally means “owe”: <span class="la">pecūniam dēbeō</span>, “I owe money”. With an infinitive it is what you owe to do: “ought”.</p>
        <h3>As a noun</h3>
        <p>An infinitive can also be the subject or object of a sentence, like a German infinitive used as a noun (<em>das Lernen</em>): <span class="la">Errāre nōn timeō</span>, “I am not afraid of going wrong”; <span class="la">Docēre est cōgitāre</span>, “to teach is to think”. In this use it counts as a neuter singular noun, which will matter when adjectives agree with it.</p>
      `
    },
    {
      title: '3. Commands: the imperative',
      html: `
        <p>The imperative singular is simply the present stem; the plural adds <span class="la">-te</span>:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th><th>German</th></tr></thead>
          <tbody>
            <tr><th>amō</th><td class="la">amā!</td><td class="la">amāte!</td><td>Liebe! Liebt!</td></tr>
            <tr><th>moneō</th><td class="la">monē!</td><td class="la">monēte!</td><td>Warne! Warnt!</td></tr>
            <tr><th>videō</th><td class="la">vidē!</td><td class="la">vidēte!</td><td>Sieh! Seht!</td></tr>
          </tbody>
        </table></div>
        <p>The verb <span class="la">dō, dare</span> “give”, which belongs to the first conjugation but has a short <span class="la">a</span>, makes <span class="la">dā!</span> (long, as a one-syllable word) and <span class="la">date!</span>.</p>
        <p>Greetings are imperatives too. <span class="la">salvē</span> (from <span class="la">salveō</span>, “be well”) is “hello”, <span class="la">valē</span> (from <span class="la">valeō</span>, “be strong, be well”) is “goodbye”; to several people, <span class="la">salvēte</span> and <span class="la">valēte</span>. Cicero ends many of his letters simply with <span class="la">Valē</span>.</p>
        <h3>Prohibitions: nōlī, nōlīte</h3>
        <p>A negative command is not made with <span class="la">nōn</span>. Latin uses <span class="la">nōlī</span> (to one person) or <span class="la">nōlīte</span> (to several) with an infinitive. These are the imperatives of <span class="la">nōlō</span> “be unwilling”, so the literal sense is “be unwilling to …”:</p>
        <ul>
          <li><span class="la">Nōlī timēre!</span> “Don’t be afraid!” (to one person)</li>
          <li><span class="la">Nōlīte rīdēre!</span> “Don’t laugh!” (to several)</li>
        </ul>
        <p>The angel’s words to the shepherds in the Latin Bible are <span class="la">Nōlīte timēre</span> (Luke 2:10 in the Vulgate), which Luther rendered <em>Fürchtet euch nicht!</em>.</p>
      `
    },
    {
      title: '4. Speaking to someone',
      html: `
        <p>A command usually comes with the vocative of the person addressed, set off by commas: <span class="la">Iūlia, labōrā!</span> “Julia, work!”; <span class="la">Puellae, spectāte!</span> “Girls, look!”. In the first declension the vocative has the same form as the nominative, so it is the comma and the imperative that tell you what is happening.</p>
        <p>Romans addressed each other by name. There was no equivalent of <em>Herr</em> or <em>Frau</em> in ordinary address, and, as the introduction explained, no polite <em>Sie</em>: the emperor was <span class="la">tū</span> like anyone else. Masculine names of the second declension have their own vocative ending, <span class="la">-e</span> (<span class="la">Mārce!</span> from <span class="la">Mārcus</span>), which comes with the second declension in Lecture III.</p>
      `
    },
    {
      title: '5. Joining and denying',
      html: `
        <ul>
          <li><span class="la">et … et</span> “both … and”: <span class="la">et puellae et poētae</span>, “both the girls and the poets”.</li>
          <li><span class="la">neque</span> or <span class="la">nec</span> “and not, nor”: <span class="la">Rīdet neque labōrat</span>, “she laughs and does not work”. Doubled, <span class="la">neque … neque</span> is “neither … nor”, German <em>weder … noch</em>.</li>
          <li><span class="la">nihil</span> “nothing” does not change its ending; it can be subject or object. Latin does not need a second negative: <span class="la">Nihil timeō</span>, “I fear nothing” or “I am not afraid of anything”.</li>
          <li><span class="la">sī</span> “if”; <span class="la">quid</span> “what?”</li>
        </ul>
      `
    },
    {
      title: '6. Two objects with doceō',
      html: `
        <p><span class="la">doceō</span> “teach” can take two accusatives, the person taught and the thing taught: <span class="la">Magistra puellās linguam Latīnam docet</span>, “The teacher teaches the girls the Latin language.” German does the same with <em>lehren</em> in careful style, <em>Sie lehrt die Mädchen die lateinische Sprache</em>, though everyday German often puts the person in the dative. In Latin the double accusative is normal.</p>
        <p>This sentence also shows how far Latin word order can move from English: object, object and verb follow the subject in one block, and the endings keep them apart.</p>
      `
    }
  ],

  vocab: [
    { id: 'moneo', head: 'moneō', la: 'moneō, monēre, monuī, monitum', pos: 'verb, 2nd conj.', en: 'warn, advise, remind', stress: 'MO-ne-ō · mo-NĒ-re', deriv: 'admonish, monitor; Monitor' },
    { id: 'video', head: 'videō', la: 'videō, vidēre, vīdī, vīsum', pos: 'verb, 2nd conj.', en: 'see', stress: 'VI-de-ō · vi-DĒ-re', deriv: 'video, vision, visa; Video, Visum', note: 'Cognate with German wissen and English wit: “I have seen” > “I know”.' },
    { id: 'valeo', head: 'valeō', la: 'valeō, valēre, valuī, valitūrum', pos: 'verb, 2nd conj.', en: 'be strong, be well', stress: 'VA-le-ō · va-LĒ-re', deriv: 'valid, value, valiant', note: 'valē, valēte: goodbye. The fourth part is a future participle; this verb has no supine.' },
    { id: 'habeo', head: 'habeō', la: 'habeō, habēre, habuī, habitum', pos: 'verb, 2nd conj.', en: 'have, hold; consider', stress: 'HA-be-ō · ha-BĒ-re', deriv: 'habit, exhibit; Habitus', note: 'Despite appearances not related to German haben, which corresponds to Latin capiō “take” (k > h by Grimm’s law).' },
    { id: 'debeo', head: 'dēbeō', la: 'dēbeō, dēbēre, dēbuī, dēbitum', pos: 'verb, 2nd conj.', en: 'owe; ought, must', stress: 'DĒ-be-ō · dē-BĒ-re', deriv: 'debt, debit, due; Debitor' },
    { id: 'teneo', head: 'teneō', la: 'teneō, tenēre, tenuī, tentum', pos: 'verb, 2nd conj.', en: 'hold, keep', stress: 'TE-ne-ō · te-NĒ-re', deriv: 'tenant, tenacious, content' },
    { id: 'timeo', head: 'timeō', la: 'timeō, timēre, timuī', pos: 'verb, 2nd conj.', en: 'fear, be afraid', stress: 'TI-me-ō · ti-MĒ-re', deriv: 'timid', note: 'Only three principal parts: there is no supine.' },
    { id: 'terreo', head: 'terreō', la: 'terreō, terrēre, terruī, territum', pos: 'verb, 2nd conj.', en: 'frighten', stress: 'TER-re-ō · ter-RĒ-re', deriv: 'terror, terrify; Terror' },
    { id: 'maneo', head: 'maneō', la: 'maneō, manēre, mānsī, mānsum', pos: 'verb, 2nd conj.', en: 'remain, stay', stress: 'MA-ne-ō · ma-NĒ-re', deriv: 'mansion, permanent; permanent', note: 'Perfect in -sī, not -uī.' },
    { id: 'doceo', head: 'doceō', la: 'doceō, docēre, docuī, doctum', pos: 'verb, 2nd conj.', en: 'teach', stress: 'DO-ce-ō · do-CĒ-re', deriv: 'doctor, doctrine, document; Dozent', note: 'Can take two accusatives: the person and the thing taught.' },
    { id: 'caveo', head: 'caveō', la: 'caveō, cavēre, cāvī, cautum', pos: 'verb, 2nd conj.', en: 'beware, be on guard (against)', stress: 'CA-ve-ō · ca-VĒ-re', deriv: 'caution, caveat; Kaution', note: 'Takes the accusative of what to beware of: cavē canem.' },
    { id: 'rideo', head: 'rīdeō', la: 'rīdeō, rīdēre, rīsī, rīsum', pos: 'verb, 2nd conj.', en: 'laugh; laugh at', stress: 'RĪ-de-ō · rī-DĒ-re', deriv: 'ridiculous, deride' },
    { id: 'do', head: 'dō', la: 'dō, dare, dedī, datum', pos: 'verb, 1st conj. (irregular)', en: 'give', stress: 'DŌ · DA-re', deriv: 'date, data, donor', note: 'Short a throughout: damus, datis, dare; imperative dā, date. poenās dare: pay the penalty.' },
    { id: 'specto', head: 'spectō', la: 'spectō, spectāre, spectāvī, spectātum', pos: 'verb, 1st conj.', en: 'look at, watch', stress: 'SPEC-tō · spec-TĀ-re', deriv: 'spectator, spectacle; Spektakel' },

    { id: 'ira', head: 'īra', la: 'īra, īrae', g: 'f', pos: 'noun, 1st decl.', en: 'anger', stress: 'Ī-ra', deriv: 'ire, irate' },
    { id: 'cura', head: 'cūra', la: 'cūra, cūrae', g: 'f', pos: 'noun, 1st decl.', en: 'care, concern; worry', stress: 'CŪ-ra', deriv: 'cure, curator, accurate; Kur' },
    { id: 'fabula', head: 'fābula', la: 'fābula, fābulae', g: 'f', pos: 'noun, 1st decl.', en: 'story, tale; play', stress: 'FĀ-bu-la', deriv: 'fable, fabulous; Fabel' },
    { id: 'lingua', head: 'lingua', la: 'lingua, linguae', g: 'f', pos: 'noun, 1st decl.', en: 'tongue; language', stress: 'LIN-gua', deriv: 'linguist, language; Linguistik', note: 'gu before a vowel is g + w: LIN-gwa.' },
    { id: 'mora', head: 'mora', la: 'mora, morae', g: 'f', pos: 'noun, 1st decl.', en: 'delay', stress: 'MO-ra', deriv: 'moratorium', note: 'sine morā: without delay.' },
    { id: 'poena', head: 'poena', la: 'poena, poenae', g: 'f', pos: 'noun, 1st decl.', en: 'penalty, punishment', stress: 'POE-na', deriv: 'penal, pain; Pein', note: 'German Pein is an early loan from poena. poenās dare: pay the penalty.' },
    { id: 'magistra', head: 'magistra', la: 'magistra, magistrae', g: 'f', pos: 'noun, 1st decl.', en: 'teacher (woman), mistress', stress: 'ma-GIS-tra', deriv: 'magistrate; Meister', note: 'The masculine magister comes in Lecture III. German Meister and English master come from it.' },
    { id: 'amicitia', head: 'amīcitia', la: 'amīcitia, amīcitiae', g: 'f', pos: 'noun, 1st decl.', en: 'friendship', stress: 'a-mī-CI-ti-a', deriv: 'amicable' },
    { id: 'philosophia', head: 'philosophia', la: 'philosophia, philosophiae', g: 'f', pos: 'noun, 1st decl.', en: 'philosophy', stress: 'phi-lo-SO-phi-a', note: 'A Greek word, “love of wisdom”. ph = p + breath.' },

    { id: 'nihil', head: 'nihil', la: 'nihil', pos: 'noun, indeclinable', en: 'nothing', stress: 'NI-hil', deriv: 'nihilism, annihilate', note: 'Often shortened to nīl.' },
    { id: 'si', head: 'sī', la: 'sī', pos: 'conjunction', en: 'if', stress: 'SĪ' },
    { id: 'quid', head: 'quid', la: 'quid', pos: 'pronoun (interrogative)', en: 'what?', stress: 'QUID' },
    { id: 'neque', head: 'neque', la: 'neque, nec', pos: 'conjunction', en: 'and not, nor; neque … neque: neither … nor', stress: 'NE-que' },
    { id: 'hodie', head: 'hodiē', la: 'hodiē', pos: 'adverb', en: 'today', stress: 'HO-di-ē', note: 'From hōc diē, “on this day”.' },
    { id: 'nunc', head: 'nunc', la: 'nunc', pos: 'adverb', en: 'now', stress: 'NUNC', deriv: 'German nun is related' },
    { id: 'semper', head: 'semper', la: 'semper', pos: 'adverb', en: 'always', stress: 'SEM-per' },
    { id: 'salve', head: 'salvē', la: 'salvē, salvēte', pos: 'imperative (greeting)', en: 'hello, greetings', stress: 'SAL-vē · sal-VĒ-te', note: 'Literally “be well!”, from salveō.' },
    { id: 'vale', head: 'valē', la: 'valē, valēte', pos: 'imperative (greeting)', en: 'goodbye, farewell', stress: 'VA-lē · va-LĒ-te' },
    { id: 'noli', head: 'nōlī', la: 'nōlī, nōlīte + infinitive', pos: 'imperative of nōlō', en: 'don’t …!', stress: 'NŌ-lī · nō-LĪ-te', note: 'Nōlī timēre! Don’t be afraid!' }
  ],

  grammarCards: [
    { id: 'g2-pres', front: 'Present of moneō', back: 'moneō, monēs, monet, monēmus, monētis, monent' },
    { id: 'g2-stem', front: 'Stem vowel of the second conjugation; how to find the stem', back: 'ē: drop -re from the infinitive, monēre → monē-' },
    { id: 'g2-eo', front: 'Why moneō, with a short e?', back: 'A vowel before a vowel is shortened (vōcālis ante vōcālem corripitur).' },
    { id: 'g2-tell', front: 'Dictionary entries: amō, amāre against moneō, monēre', back: '1st conj. -ō, -āre; 2nd conj. -eō, -ēre' },
    { id: 'g2-inf', front: 'Ending of the present active infinitive', back: '-re: amāre, monēre' },
    { id: 'g2-compl', front: 'Labōrāre dēbēs.', back: 'You ought to work. (complementary infinitive, like German “Du sollst arbeiten”)' },
    { id: 'g2-impsg', front: 'Imperative singular: how is it formed?', back: 'The present stem: amā! monē!' },
    { id: 'g2-imppl', front: 'Imperative plural: how is it formed?', back: 'Stem + -te: amāte! monēte!' },
    { id: 'g2-da', front: 'Imperatives of dō, dare', back: 'dā! date! (short a in the plural)' },
    { id: 'g2-noli', front: 'How do you say “Don’t be afraid!” to one person and to several?', back: 'Nōlī timēre! · Nōlīte timēre!' },
    { id: 'g2-nolilit', front: 'Literal meaning of nōlī + infinitive', back: '“Be unwilling to …” (imperative of nōlō)' },
    { id: 'g2-salve', front: 'salvē, salvēte · valē, valēte', back: 'Hello (literally “be well!”) · goodbye' },
    { id: 'g2-tu', front: 'How did a Roman address the emperor?', back: 'With tū, like anyone else: Classical Latin had no polite form.' },
    { id: 'g2-neque', front: 'neque … neque', back: 'neither … nor (weder … noch)' },
    { id: 'g2-nihil', front: 'Nihil timeō.', back: 'I fear nothing. (no double negative needed)' },
    { id: 'g2-doceo', front: 'Magistra puellās linguam docet: why two accusatives?', back: 'doceō takes the person and the thing taught in the accusative.' },
    { id: 'g2-habeo', front: 'Is habēre related to German haben?', back: 'No: haben corresponds to Latin capere (Grimm’s law k > h).' },
    { id: 'g2-stress', front: 'Stress: moneō, monēmus, monēre', back: 'MO-ne-ō, mo-NĒ-mus, mo-NĒ-re' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">monent</span> means:', options: ['they warn', 'we warn', 'he warns', 'you (pl.) warn'], answer: 0, explain: '-nt: 3rd person plural, with the stem vowel shortened.' },
    { id: 'e2', type: 'mc', prompt: 'Which form is the infinitive of <span class="la">videō</span>?', options: ['vidēre', 'vidēs', 'vidē', 'vident'], answer: 0, explain: 'Infinitive ending -re: vidē-re.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Vidē!</span> is:', options: ['imperative singular', 'imperative plural', 'infinitive', '2nd person singular present'], answer: 0, explain: 'The bare stem is the imperative singular. “You see” would be vidēs.' },
    { id: 'e4', type: 'mc', prompt: 'Why <span class="la">moneō</span> and not <span class="la">*monēō</span>?', options: ['A vowel before another vowel is shortened', 'The 1st person always has a short vowel', 'moneō is irregular', 'ē becomes e in all forms'], answer: 0, explain: 'vōcālis ante vōcālem corripitur. Compare monēs, monēmus with long ē.' },
    { id: 'e5', type: 'mc', prompt: 'Which verb is <strong>not</strong> second conjugation?', options: ['spectō, spectāre', 'habeō, habēre', 'teneō, tenēre', 'timeō, timēre'], answer: 0, explain: '-ō, -āre is the first conjugation; -eō, -ēre the second.' },
    { id: 'e6', type: 'mc', prompt: 'Latin <span class="la">habēre</span> and German <em>haben</em>:', options: ['look alike but are not related', 'are the same word', 'German borrowed haben from Latin', 'Latin borrowed habēre from Germanic'], answer: 0, explain: 'German haben corresponds to Latin capere “take”, by Grimm’s law (k > h).' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Puellae, fābulās spect___!</span>', hint: 'watch! (to several)', answers: ['āte'], full: 'Puellae, fābulās spectāte!', explain: 'Imperative plural: stem spectā- + -te.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Iūlia, mon___ poētam!</span>', hint: 'warn! (to one)', answers: ['ē'], full: 'Iūlia, monē poētam!', explain: 'Imperative singular: the bare stem monē.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Nautae īram nōn tim___.</span>', hint: 'they fear', answers: ['ent'], full: 'Nautae īram nōn timent.', explain: 'Stem timē- + -nt, with the vowel shortened.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Labōrāre dēb___.</span>', hint: 'we ought', answers: ['ēmus'], full: 'Labōrāre dēbēmus.', explain: 'dēbē- + -mus; the infinitive labōrāre completes it.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Nōl___ timēre, puellae!</span>', hint: 'don’t (to several)', answers: ['īte'], full: 'Nōlīte timēre, puellae!', explain: 'To several people: nōlīte + infinitive.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Magistra puellās lingu___ Latīnam docet.</span>', hint: 'the language: the thing taught', answers: ['am'], full: 'Magistra puellās linguam Latīnam docet.', explain: 'doceō takes two accusatives: puellās (whom) and linguam (what).' },
    { id: 'e13', type: 'paradigm', prompt: 'Conjugate <span class="la">doceō, docēre</span> in the present.', headers: ['Singular', 'Plural'], rows: [
      { label: '1st', answers: ['doceō', 'docēmus'] },
      { label: '2nd', answers: ['docēs', 'docētis'] },
      { label: '3rd', answers: ['docet', 'docent'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the imperatives.', headers: ['Singular', 'Plural'], rows: [
      { label: 'amō', answers: ['amā', 'amāte'] },
      { label: 'moneō', answers: ['monē', 'monēte'] },
      { label: 'dō', answers: ['dā', 'date'] },
      { label: 'valeō', answers: ['valē', 'valēte'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each form to its meaning.', pairs: [
      ['vident', 'they see'], ['manēs', 'you stay'], ['tenēmus', 'we hold'], ['rīdētis', 'you (pl.) laugh'], ['terret', 'it frightens']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Magistra puellās fābulās docet.', tokens: ['The teacher', 'teaches', 'the girls', 'stories'], explain: 'Two accusatives with docet: puellās (the people taught) and fābulās (what is taught).' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Cūrās et īram fēminārum vidēmus.', model: 'We see the cares and the anger of the women.', accepted: ['we see cares and anger of women', 'we see worries and anger of women', 'we see concerns and anger of women', 'we see womens cares and anger', 'we see womens worries and anger', 'we see cares and anger of the women', 'we see the cares and the anger of the women'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Nihil timēre dēbētis.', model: 'You (pl.) ought to fear nothing.', accepted: ['you ought to fear nothing', 'you must fear nothing', 'you should fear nothing', 'you ought not to fear anything', 'you must not fear anything', 'you should not fear anything', 'you ought to be afraid of nothing', 'you should be afraid of nothing'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Salvēte, puellae! Valēte!', model: 'Hello, girls! Goodbye!', accepted: ['hello girls goodbye', 'greetings girls farewell', 'hello girls farewell', 'greetings girls goodbye', 'hi girls goodbye', 'hi girls bye', 'hello girls bye'] },
    { id: 'e20', type: 'translate', dir: 'la-en', source: 'Nōlīte rīdēre, nautae.', model: 'Don’t laugh, sailors.', accepted: ['do not laugh sailors', 'sailors do not laugh', 'stop laughing sailors'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'Warn the poets, Julia!', model: 'Monē poētās, Iūlia!', accepted: ['monē poētās iūlia'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'We ought to give money.', model: 'Pecūniam dare dēbēmus.', accepted: ['pecūniam dare dēbēmus'] },
    { id: 'e23', type: 'translate', dir: 'en-la', source: 'The girls fear nothing.', model: 'Puellae nihil timent.', accepted: ['puellae nihil timent'] },
    { id: 'e24', type: 'mc', prompt: '<span class="la">Nōlīte timēre</span> (Luke 2:10 in the Vulgate) is, in Luther’s Bible:', options: ['Fürchtet euch nicht!', 'Fürchte dich nicht!', 'Ihr fürchtet euch nicht.', 'Wollt ihr euch fürchten?'], answer: 0, explain: 'nōlīte is plural: the angel speaks to all the shepherds.' },
    { id: 'e25', type: 'mc', prompt: 'How would a Roman address the emperor?', options: ['With tū, like anyone else', 'With vōs, the polite plural', 'Only in the third person', 'With a special honorific verb form'], answer: 0, explain: 'The polite plural for one person begins only in late antiquity.' }
  ],

  reading: {
    title: 'In lūdō',
    note: 'Original passage: a morning in a Roman school. Tap any word.',
    text: 'Magistra in lūdō puellās linguam Latīnam docet. “Salvēte, puellae!” Puellae magistram salūtant: “Salvē, magistra!” Tum magistra fābulam poētae recitat, et puellae spectant et cōgitant. Sed Iūlia nōn spectat; rīdet. Magistra Iūliam videt et monet: “Iūlia, nōlī rīdēre! Spectā et cōgitā! Et philosophiam et fābulās poētārum amāre dēbēs.” Iūlia respondet: “Fābulās amō, magistra, sed fābula hodiē longa est.” Puellae rīdent. Magistra nōn rīdet: “Nihil timētis, puellae? Īram magistrae cavēte!” Tum puellae sine morā labōrant. Tandem magistra: “Valēte, puellae!” Et puellae: “Valē, magistra!”',
    translation: 'In the school the teacher teaches the girls the Latin language. “Good morning, girls!” The girls greet the teacher: “Good morning, teacher!” Then the teacher reads out a poet’s story, and the girls look and think. But Julia does not look; she laughs. The teacher sees Julia and warns her: “Julia, don’t laugh! Look and think! You ought to love both philosophy and the stories of the poets.” Julia replies: “I love stories, teacher, but today the story is long.” The girls laugh. The teacher does not laugh: “Are you afraid of nothing, girls? Beware the teacher’s anger!” Then the girls work without delay. At last the teacher says: “Goodbye, girls!” And the girls: “Goodbye, teacher!”',
    notes: [
      { ref: 'in lūdō', html: '<span class="la">lūdus</span>, “school” (also “game”), is a second-declension noun, Lecture III. <span class="la">in</span> + ablative: “in the school”.' },
      { ref: 'puellās linguam Latīnam docet', html: 'Two accusatives with <span class="la">docet</span>: the people taught and the thing taught. <span class="la">Latīnam</span> is an adjective agreeing with <span class="la">linguam</span>; adjectives come in Lecture III.' },
      { ref: 'Salvēte, puellae!', html: 'Plural imperative of greeting, because the teacher greets the whole class; the girls answer <span class="la">Salvē</span>, singular, to their one teacher.' },
      { ref: 'fābulam poētae recitat', html: '<span class="la">recitāre</span> is to read aloud. Roman reading was often aloud, and a teacher read the poets to the class before the pupils learned and recited them.' },
      { ref: 'nōlī rīdēre!', html: 'A prohibition to one person: <span class="la">nōlī</span> + infinitive. Then three positive imperatives follow: <span class="la">spectā, cōgitā</span>, and later <span class="la">cavēte</span> to the whole class.' },
      { ref: 'amāre dēbēs', html: 'Complementary infinitive: “you ought to love”, German <em>du sollst lieben</em>. <span class="la">et … et</span>: “both … and”.' },
      { ref: 'fābula hodiē longa est', html: '<span class="la">longa</span> “long” is a predicate adjective in the nominative, like <span class="la">poēta</span> in <span class="la">Fēmina poēta est</span>.' },
      { ref: 'Īram magistrae cavēte!', html: '<span class="la">caveō</span> takes the accusative of the danger: “beware the anger”. <span class="la">magistrae</span> is genitive: “of the teacher”.' },
      { ref: 'sine morā', html: '<span class="la">sine</span> “without” takes the ablative, like <span class="la">in</span> meaning “in”: <span class="la">sine morā</span>, “without delay”.' }
    ],
    glosses: {
      'magistra': 'nom. sg. of magistra, -ae f. teacher', 'magistram': 'acc. sg.: teacher', 'magistrae': 'gen. sg.: of the teacher', 'in': 'in (+ abl.)', 'lūdō': 'abl. sg. of lūdus, -ī m. school (Lecture III)',
      'puellās': 'acc. pl. of puella: girls', 'puellae': 'nom. or voc. pl. of puella: girls', 'linguam': 'acc. sg. of lingua: language', 'latīnam': 'acc. sg. fem. of Latīnus, -a, -um: Latin (adjective)', 'docet': '3rd sg. pres. of doceō: teaches',
      'salvēte': 'hello! (to several)', 'salvē': 'hello! (to one)', 'salūtant': '3rd pl. pres. of salūtō, -āre: greet (new word)', 'tum': 'then', 'fābulam': 'acc. sg. of fābula: story', 'fābulās': 'acc. pl. of fābula: stories', 'fābula': 'nom. sg.: story',
      'poētae': 'gen. sg. of poēta: of a poet', 'poētārum': 'gen. pl.: of the poets', 'recitat': '3rd sg. pres. of recitō, -āre: reads aloud (new word)', 'et': 'and; et … et, both … and', 'spectant': '3rd pl. pres. of spectō: look, watch', 'spectat': '3rd sg. pres. of spectō', 'spectā': 'look! (imperative sg.)',
      'cōgitant': '3rd pl. pres. of cōgitō: think', 'cōgitā': 'think! (imperative sg.)', 'sed': 'but', 'iūlia': 'Julia (nom. or voc.)', 'iūliam': 'acc. of Iūlia', 'nōn': 'not', 'rīdet': '3rd sg. pres. of rīdeō: laughs', 'rīdent': '3rd pl. pres.: laugh', 'rīdēre': 'infinitive of rīdeō: to laugh',
      'videt': '3rd sg. pres. of videō: sees', 'monet': '3rd sg. pres. of moneō: warns', 'nōlī': 'don’t …! (to one; + infinitive)', 'philosophiam': 'acc. sg. of philosophia: philosophy', 'amāre': 'infinitive of amō: to love', 'dēbēs': '2nd sg. pres. of dēbeō: you ought',
      'respondet': '3rd sg. pres. of respondeō, -ēre: replies (2nd conj.)', 'amō': '1st sg. pres. of amō: I love', 'hodiē': 'today', 'longa': 'nom. sg. fem. of longus, -a, -um: long (new word)', 'est': 'is', 'nihil': 'nothing', 'timētis': '2nd pl. pres. of timeō: you (pl.) fear',
      'īram': 'acc. sg. of īra: anger', 'cavēte': 'beware! (imperative pl. of caveō)', 'sine': 'without (+ abl.) (new word)', 'morā': 'abl. sg. of mora: delay', 'labōrant': '3rd pl. pres. of labōrō: work', 'tandem': 'at last, finally (new word)', 'valēte': 'goodbye! (to several)', 'valē': 'goodbye! (to one)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Why does the teacher say <span class="la">Salvēte</span> but the girls <span class="la">Salvē</span>?', options: ['She greets many, they greet one', 'Salvēte is the polite form', 'Salvē is used by children', 'There is no difference'], answer: 0, explain: 'Plural imperative to the class, singular to the one teacher.' },
      { id: 'r2', type: 'mc', prompt: 'What is Julia doing when the teacher warns her?', options: ['Laughing', 'Working', 'Reading aloud', 'Leaving'], answer: 0, explain: 'Iūlia nōn spectat; rīdet.' },
      { id: 'r3', type: 'mc', prompt: 'What is Julia’s excuse?', options: ['The story is long today', 'She does not love stories', 'She is afraid of the teacher', 'She does not know Latin'], answer: 0, explain: 'fābula hodiē longa est.' },
      { id: 'r4', type: 'mc', prompt: 'In <span class="la">Īram magistrae cavēte!</span>, who is being addressed?', options: ['All the girls', 'Julia alone', 'The teacher', 'The poet'], answer: 0, explain: 'cavēte is plural: the teacher speaks to the class.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Which form means “you (pl.) have”?', options: ['habētis', 'habēmus', 'habent', 'habēs'], answer: 0, explain: '-tis: 2nd person plural.' },
      { id: 't2', type: 'gap', prompt: '<span class="la">Magistra, ___ !</span> (give! to one)', hint: 'imperative of dō', answers: ['dā'], full: 'Magistra, dā!', explain: 'dā, long as a one-syllable word; plural date.' },
      { id: 't3', type: 'mc', prompt: 'The 1st person singular <span class="la">teneō</span> has a short <em>e</em> because:', options: ['a vowel before a vowel is shortened', 'teneō is irregular', 'all 1st persons are short', 'it comes before -ō'], answer: 0, explain: 'The general rule; compare tenēs, tenēmus.' },
      { id: 't4', type: 'translate', dir: 'la-en', source: 'Nōlī timēre, Iūlia!', model: 'Don’t be afraid, Julia!', accepted: ['do not be afraid julia', 'do not fear julia', 'fear not julia', 'julia do not be afraid', 'julia do not fear'] },
      { id: 't5', type: 'translate', dir: 'en-la', source: 'You (sg.) ought to stay.', model: 'Manēre dēbēs.', accepted: ['manēre dēbēs'] },
      { id: 't6', type: 'gap', prompt: '<span class="la">Fēminae fābulās vid___.</span>', hint: 'they see', answers: ['ent'], full: 'Fēminae fābulās vident.', explain: 'vidē- + -nt, vowel shortened.' },
      { id: 't7', type: 'mc', prompt: '<span class="la">neque pecūniam neque fāmam habeō</span> means:', options: ['I have neither money nor fame', 'I have money and fame', 'I have no money but fame', 'I do not have money, I have fame'], answer: 0, explain: 'neque … neque: neither … nor.' },
      { id: 't8', type: 'mc', prompt: 'In <span class="la">Cavē canem</span>, <span class="la">cavē</span> is:', options: ['imperative singular of caveō', 'infinitive of caveō', 'imperative plural', '3rd person singular'], answer: 0, explain: 'The stem cavē- alone: “beware!”' },
      { id: 't9', type: 'mc', prompt: 'Which pair shows the first and second conjugations?', options: ['amāre · monēre', 'amāre · amāte', 'monēre · monēte', 'dare · dā'], answer: 0, explain: 'Infinitives in -āre and -ēre.' },
      { id: 't10', type: 'gap', prompt: '<span class="la">Puellae, cūrās nōn tim___.</span>', hint: 'you (pl.) do not fear', answers: ['ētis'], full: 'Puellae, cūrās nōn timētis.', explain: 'timē- + -tis.' },
      { id: 't11', type: 'mc', prompt: 'What does <span class="la">dēbeō</span> mean without an infinitive?', options: ['I owe', 'I must', 'I give', 'I have'], answer: 0, explain: 'pecūniam dēbeō, I owe money; with an infinitive it means “ought”.' }
    ]
  },

  reference: [
    { title: 'Present of moneō (2nd conjugation)', headers: ['', 'Singular', 'Plural'], rows: [['1st', 'moneō', 'monēmus'], ['2nd', 'monēs', 'monētis'], ['3rd', 'monet', 'monent']] },
    { title: 'Imperatives', headers: ['', 'Singular', 'Plural'], rows: [['amō', 'amā', 'amāte'], ['moneō', 'monē', 'monēte'], ['dō', 'dā', 'date'], ['prohibition', 'nōlī + inf.', 'nōlīte + inf.']] },
    { title: 'Infinitives so far', headers: ['', 'Infinitive'], rows: [['1st conj.', 'amāre'], ['2nd conj.', 'monēre'], ['sum', 'esse']] }
  ]
});
