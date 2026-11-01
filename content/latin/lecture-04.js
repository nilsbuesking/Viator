/*
 * Latin — Lecture IV: second declension neuters; the verb sum; predicate adjectives.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-04',
  number: 4,
  title: 'Ōtium et negōtium',
  subtitle: 'Neuters of the second declension; the verb sum; predicate adjectives',
  minutes: 60,

  intro: `
    <p>Latin, like German, has three genders, and this lecture completes the set with the neuter: <span class="la">bellum</span> “war”, <span class="la">dōnum</span> “gift”, <span class="la">verbum</span> “word”, <span class="la">ōtium</span> “leisure”, <span class="la">negōtium</span> “business”. Neuters follow the second declension in most cases, with two differences that hold for neuters in every declension. Once you know them, the adjective <span class="la">bonus, bona, bonum</span> is complete.</p>
    <p>The lecture also gives the whole present tense of <span class="la">sum</span> “I am”, of which you have so far met only <span class="la">est</span>, <span class="la">sunt</span> and <span class="la">es</span>. It is irregular in Latin as in every Indo-European language, and German speakers will recognise the pattern.</p>
    <p>One point needs flagging for a German speaker. In <em>Die Mädchen sind gut</em> the adjective after <em>sind</em> has no ending at all. Latin is different: the adjective after <span class="la">est</span> or <span class="la">sunt</span> agrees with the subject like any other adjective. <span class="la">Puellae sunt bonae</span>, <span class="la">Bellum est malum</span>. German instinct will leave the ending off; Latin requires it.</p>
    <p>By the end you should be able to decline any second-declension neuter, use all three genders of adjectives like <span class="la">bonus</span>, conjugate <span class="la">sum</span> in the present, and make predicate adjectives agree.</p>
  `,

  background: [
    {
      title: 'Ōtium and negōtium',
      html: `
        <p>The Latin word for business is a negative. <span class="la">negōtium</span> is <span class="la">nec</span> + <span class="la">ōtium</span>, “not-leisure”: the Romans defined work as the absence of free time, not the other way round. For the senatorial class, <span class="la">ōtium</span> meant time free from public duties and the law courts, to be spent on reading, writing, philosophy and the management of one’s estates, usually at a country villa. It was not idleness. Cicero wrote most of his philosophical works during periods of enforced <span class="la">ōtium</span>, when politics had shut him out.</p>
        <p>The ideal was a balance. Cicero speaks of <span class="la">cum dignitāte ōtium</span>, “leisure with honour”, as the goal of all good citizens (<em>Pro Sestio</em> 98); Seneca later wrote a short treatise <em>De otio</em> asking whether a wise man should withdraw from public life. German has the same pair, <em>Muße</em> and <em>Geschäft</em>, but without the negative formation. The Latin word lives on in English <em>negotiate</em>, which once meant simply to do business, and in Italian <em>negozio</em>, “shop”.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Fresco_portrait_of_the_baker_Terentius_Neo_and_his_wife,_from_Pompeii.jpg/960px-Fresco_portrait_of_the_baker_Terentius_Neo_and_his_wife,_from_Pompeii.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Fresco_portrait_of_the_baker_Terentius_Neo_and_his_wife,_from_Pompeii.jpg/500px-Fresco_portrait_of_the_baker_Terentius_Neo_and_his_wife,_from_Pompeii.jpg|https://upload.wikimedia.org/wikipedia/commons/e/e4/Fresco_portrait_of_the_baker_Terentius_Neo_and_his_wife,_from_Pompeii.jpg" alt="Wall painting of a man holding a scroll and a woman holding writing tablets and a stylus"><figcaption>Portrait of a couple from a house in Pompeii, before AD 79 (Naples, National Archaeological Museum). He holds a book roll, she writing tablets and a stylus: signs of an educated household. The usual identification as the baker Terentius Neo rests on an electoral notice painted outside the house and is not certain. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Fresco_portrait_of_the_baker_Terentius_Neo_and_his_wife,_from_Pompeii.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'The neuter gender',
      html: `
        <p>Latin and German both inherited three genders from Indo-European; English has lost them. The neuter in both languages keeps a rule from the parent language: the nominative and accusative are always the same. German <em>das Kind</em> is both subject and object, just as Latin <span class="la">dōnum</span> is; only the article for masculines changes (<em>der Mann, den Mann</em>).</p>
        <p>The neuter plural in <span class="la">-a</span> has an interesting history. Comparative linguists believe it was originally a collective, a singular noun meaning “a group of”, which later came to be used as a plural. Greek preserves a trace: a neuter plural subject takes a singular verb (<em>tà zôia tréchei</em>, “the animals runs”). Latin regularised the agreement, but the collective sense shows in pairs such as <span class="la">locus</span> “place”, plural <span class="la">loca</span> “region, places”, beside <span class="la">locī</span> “passages in a book”.</p>
      `
    },
    {
      title: '“To be” across the languages',
      html: `
        <p>The verb “to be” is irregular everywhere because it is old and constantly used, and because most Indo-European languages patch it together from several roots. Two of them matter here:</p>
        <ul>
          <li>The root <em>*es-</em> “be, exist” gives Latin <span class="la">est</span>, <span class="la">sunt</span>, <span class="la">esse</span>, German <em>ist</em>, <em>sind</em>, English <em>is</em>.</li>
          <li>The root <em>*bheu-</em> “become, grow” gives Latin <span class="la">fuī</span> “I was, I have been” and <span class="la">futūrus</span> “about to be”, and German <em>bin</em>, <em>bist</em> (in which it has merged with forms of the first root), English <em>be</em>. By the first sound shift, <em>bh</em> became <em>b</em> in Germanic and <em>f</em> in Latin.</li>
        </ul>
        <p>German adds a third root, <em>*wes-</em> “dwell”, for <em>war</em> and <em>gewesen</em>. So <em>ich bin, er ist, ich war</em> draws on three roots, Latin <span class="la">sum, est, fuī</span> on two. The irregularity you are about to learn is not a Latin peculiarity but a family trait.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Ō Meliboee, deus nōbīs haec ōtia fēcit.</p>
    <p>“Meliboeus, a god has made this leisure for us.” Virgil, <em>Eclogues</em> 1.6, written in the 30s BC after the civil wars, when land in Italy was being confiscated to settle veterans. The shepherd Tityrus has kept his farm thanks to a “god” in Rome, usually taken to mean the young Octavian, the future Augustus; his neighbour Meliboeus has lost his and is leaving.</p>
    <p><span class="la">ōtia</span> is a neuter plural, used poetically for <span class="la">ōtium</span>: Latin poets often prefer the plural of abstract nouns. <span class="la">Meliboee</span> is a second-declension vocative of a Greek name, with the <span class="la">-e</span> you met in Lecture III. <span class="la">fēcit</span> “has made” is a perfect, which comes in Lecture XII.</p>
    <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/RomanVirgilFolio001rEclogues.jpg/960px-RomanVirgilFolio001rEclogues.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/RomanVirgilFolio001rEclogues.jpg/500px-RomanVirgilFolio001rEclogues.jpg|https://upload.wikimedia.org/wikipedia/commons/9/9c/RomanVirgilFolio001rEclogues.jpg" alt="Late antique manuscript page with a painted scene of two shepherds and lines of capital letters"><figcaption>The opening of the <em>Eclogues</em> in the Vergilius Romanus, 5th century (Vatican Library, Vat. lat. 3867): the poet, or Tityrus and Meliboeus, with flocks. The text is written in rustic capitals, without word spaces. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:RomanVirgilFolio001rEclogues.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
    <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Virgil_mosaic_in_the_Bardo_National_Museum_(Tunis)_(12241228546).jpg/960px-Virgil_mosaic_in_the_Bardo_National_Museum_(Tunis)_(12241228546).jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Virgil_mosaic_in_the_Bardo_National_Museum_(Tunis)_(12241228546).jpg/500px-Virgil_mosaic_in_the_Bardo_National_Museum_(Tunis)_(12241228546).jpg|https://upload.wikimedia.org/wikipedia/commons/1/15/Virgil_mosaic_in_the_Bardo_National_Museum_(Tunis)_(12241228546).jpg" alt="Mosaic of a seated man in a toga holding a scroll, between two standing women"><figcaption>Mosaic from Hadrumetum (Sousse), early 3rd century AD (Bardo Museum, Tunis), usually taken to show Virgil between two Muses. The scroll on his lap shows a line from the <em>Aeneid</em>. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Virgil_mosaic_in_the_Bardo_National_Museum_(Tunis)_(12241228546).jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
  `,

  pronunciation: `
    <h3>Final -m</h3>
    <p>Neuters end in <span class="la">-um</span>, and the final <span class="la">m</span> deserves a note. The evidence suggests that in ordinary speech it was not a full <em>m</em> but nasalised and weakened the vowel before it. In verse a final <span class="la">-um</span> is elided before a following vowel, exactly like a vowel, and Quintilian describes final <span class="la">m</span> as barely sounded (<em>Institutio oratoria</em> 9.4.40). In Romance it has vanished: Latin <span class="la">rem</span> became French <em>rien</em>. For reading aloud, a light <em>m</em> is the usual compromise.</p>
    <h3>-ti- again</h3>
    <p><span class="la">ōtium</span> and <span class="la">negōtium</span> are <span class="la">Ō-ti-um</span> and <span class="la">ne-GŌ-ti-um</span>, with <em>t</em> + <em>i</em>, never “otsium”. The <em>ts</em> pronunciation, which German has in <em>Nation</em> and in the school pronunciation of Latin, is a late development.</p>
    <h3>esse</h3>
    <p>The double <span class="la">s</span> of <span class="la">esse</span> is held, as in Italian: <span class="la">ES-se</span>, never a German voiced <em>s</em>.</p>
  `,

  grammar: [
    {
      title: '1. Second-declension neuters',
      html: `
        <p>Neuters of the second declension end in <span class="la">-um</span> in the nominative and have a genitive in <span class="la">-ī</span>. The dictionary gives the gender: <span class="la">bellum, bellī</span> <em>n.</em></p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th><th>Masc. for comparison</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">bellum</td><td class="la">bella</td><td class="la">amīcus · amīcī</td></tr>
            <tr><th>Gen.</th><td class="la">bellī</td><td class="la">bellōrum</td><td class="la">amīcī · amīcōrum</td></tr>
            <tr><th>Dat.</th><td class="la">bellō</td><td class="la">bellīs</td><td class="la">amīcō · amīcīs</td></tr>
            <tr><th>Acc.</th><td class="la">bellum</td><td class="la">bella</td><td class="la">amīcum · amīcōs</td></tr>
            <tr><th>Abl.</th><td class="la">bellō</td><td class="la">bellīs</td><td class="la">amīcō · amīcīs</td></tr>
            <tr><th>Voc.</th><td class="la">bellum</td><td class="la">bella</td><td class="la">amīce · amīcī</td></tr>
          </tbody>
        </table></div>
        <p>The genitive, dative and ablative are identical with the masculine. The differences are all in the nominative, accusative and vocative, and they follow two rules that apply to every neuter in Latin, in every declension:</p>
        <ol>
          <li><strong>Nominative, accusative and vocative are always the same</strong>, in the singular and in the plural.</li>
          <li><strong>In the plural these three cases end in <span class="la">-a</span>.</strong></li>
        </ol>
        <p>Learn these two rules now and you will need nothing new for the neuters of the third and fourth declensions.</p>
      `
    },
    {
      title: '2. Telling neuters apart',
      html: `
        <p>The neuter forms overlap with others you know:</p>
        <ul>
          <li><span class="la">-um</span> is also the masculine accusative singular: <span class="la">amīcum</span>. <span class="la">bellum</span> can be subject or object; <span class="la">amīcum</span> only object.</li>
          <li><span class="la">-a</span> is also the first-declension nominative singular: <span class="la">puella</span>. <span class="la">bella</span> is plural, <span class="la">puella</span> singular, and the verb shows which: <span class="la">Bella sunt mala</span>, <span class="la">Puella est bona</span>.</li>
        </ul>
        <p>The dictionary entry settles every case: learn the gender with the noun. In a sentence, ask which reading gives the verb a subject of the right number. Because a neuter has the same form as subject and object, Latin relies on sense and word order more in sentences with two neuters: <span class="la">Bellum perīculum parat</span> is most naturally “War brings danger”, with the subject first.</p>
      `
    },
    {
      title: '3. Adjectives: all three genders',
      html: `
        <p>The neuter of <span class="la">bonus, bona, bonum</span> follows <span class="la">bellum</span>. The full table:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>m.</th><th>f.</th><th>n.</th><th>m. pl.</th><th>f. pl.</th><th>n. pl.</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">bonus</td><td class="la">bona</td><td class="la">bonum</td><td class="la">bonī</td><td class="la">bonae</td><td class="la">bona</td></tr>
            <tr><th>Gen.</th><td class="la">bonī</td><td class="la">bonae</td><td class="la">bonī</td><td class="la">bonōrum</td><td class="la">bonārum</td><td class="la">bonōrum</td></tr>
            <tr><th>Dat.</th><td class="la">bonō</td><td class="la">bonae</td><td class="la">bonō</td><td class="la">bonīs</td><td class="la">bonīs</td><td class="la">bonīs</td></tr>
            <tr><th>Acc.</th><td class="la">bonum</td><td class="la">bonam</td><td class="la">bonum</td><td class="la">bonōs</td><td class="la">bonās</td><td class="la">bona</td></tr>
            <tr><th>Abl.</th><td class="la">bonō</td><td class="la">bonā</td><td class="la">bonō</td><td class="la">bonīs</td><td class="la">bonīs</td><td class="la">bonīs</td></tr>
          </tbody>
        </table></div>
        <p>Note that <span class="la">bona</span> appears three times: feminine nominative singular, and neuter nominative and accusative plural. Agreement with the noun tells you which.</p>
      `
    },
    {
      title: '4. The verb sum',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th><th>German</th></tr></thead>
          <tbody>
            <tr><th>1st</th><td><span class="la">sum</span> <span class="gl">I am</span></td><td><span class="la">sumus</span> <span class="gl">we are</span></td><td>bin · sind</td></tr>
            <tr><th>2nd</th><td><span class="la">es</span> <span class="gl">you are</span></td><td><span class="la">estis</span> <span class="gl">you are</span></td><td>bist · seid</td></tr>
            <tr><th>3rd</th><td><span class="la">est</span> <span class="gl">he/she/it is</span></td><td><span class="la">sunt</span> <span class="gl">they are</span></td><td>ist · sind</td></tr>
          </tbody>
        </table></div>
        <p>Infinitive <span class="la">esse</span> “to be”. Principal parts: <span class="la">sum, esse, fuī, futūrum</span>. The future and imperfect come in Lecture V.</p>
        <p>The personal endings are the familiar ones, with <span class="la">-m</span> in the first person as promised in Lecture I. The irregularity is in the stem, which alternates between <span class="la">es-</span> (<span class="la">es, est, estis, esse</span>) and <span class="la">s-</span> (<span class="la">sum, sumus, sunt</span>). German alternates in just the same way between <em>ist</em> and <em>sind</em>.</p>
        <h3>Uses</h3>
        <ul>
          <li>As a link between subject and predicate: <span class="la">Lūcius nauta est</span>, “Lucius is a sailor”.</li>
          <li>Meaning “exist, there is”, usually first in the sentence: <span class="la">Sunt in oppidō multī virī</span>, “there are many men in the town”.</li>
          <li><span class="la">est</span> often comes last and is easily overlooked in reading; when a sentence seems to lack a verb, look for an <span class="la">est</span> or <span class="la">sunt</span>, or assume one. Latin often leaves it out altogether in maxims: <span class="la">Omnia praeclāra rāra</span> (Cicero, <em>Laelius</em> 79), “All outstanding things [are] rare”.</li>
        </ul>
      `
    },
    {
      title: '5. Predicate adjectives',
      html: `
        <p>An adjective linked to the subject by <span class="la">sum</span> is a <em>predicate adjective</em>. It agrees with the subject in gender, number and case, so it is nominative:</p>
        <ul>
          <li><span class="la">Puella est bona.</span> <span class="la">Puellae sunt bonae.</span></li>
          <li><span class="la">Agricolae sunt parātī.</span> (masculine: <span class="la">agricola</span> is masculine)</li>
          <li><span class="la">Bellum est malum.</span> <span class="la">Perīcula sunt magna.</span></li>
        </ul>
        <p>This is where German instinct misleads. German predicate adjectives are uninflected (<em>Die Mädchen sind gut</em>, <em>Der Krieg ist schlimm</em>), so a German speaker tends to reach for a single form. In Latin the predicate adjective changes exactly like an attributive one.</p>
        <h3>Neuter with no particular noun</h3>
        <p>When the subject is an infinitive or a whole idea, the predicate adjective is neuter singular: <span class="la">Errāre hūmānum est</span>, “to err is human”. This proverb, by the way, is not a classical quotation in this form. It is a later Latin saying that echoes similar thoughts in Cicero and Seneca. <span class="la">Vērum est</span> on its own means “it is true”.</p>
      `
    },
    {
      title: '6. Neuter adjectives as nouns',
      html: `
        <p>Lecture III showed that a masculine adjective alone means people (<span class="la">bonī</span>, “good men”). A neuter adjective alone means things or ideas:</p>
        <ul>
          <li><span class="la">bonum</span> “a good thing, the good”; <span class="la">bona</span> “good things, goods, property”</li>
          <li><span class="la">malum</span> “an evil, misfortune”; <span class="la">mala</span> “evils, troubles”</li>
          <li><span class="la">multa</span> “many things”; <span class="la">vērum</span> “the truth”</li>
        </ul>
        <p>German does the same with capitalised neuters (<em>das Gute</em>, <em>vieles</em>). Cicero’s question about the highest good, <span class="la">summum bonum</span>, uses exactly this form; <span class="la">summus</span> “highest” is an adjective like <span class="la">bonus</span>.</p>
      `
    }
  ],

  vocab: [
    { id: 'bellum', head: 'bellum', la: 'bellum, bellī', g: 'n', pos: 'noun, 2nd decl.', en: 'war', stress: 'BEL-lum', deriv: 'belligerent, rebel', note: 'Old Latin duellum. Not to be confused with bellus, -a, -um “pretty”.' },
    { id: 'consilium', head: 'cōnsilium', la: 'cōnsilium, cōnsiliī', g: 'n', pos: 'noun, 2nd decl.', en: 'plan, advice; council', stress: 'cōn-SI-li-um', deriv: 'counsel; Konzil' },
    { id: 'donum', head: 'dōnum', la: 'dōnum, dōnī', g: 'n', pos: 'noun, 2nd decl.', en: 'gift', stress: 'DŌ-num', deriv: 'donation, donor' },
    { id: 'officium', head: 'officium', la: 'officium, officiī', g: 'n', pos: 'noun, 2nd decl.', en: 'duty, service', stress: 'of-FI-ci-um', deriv: 'office, official; Offizier', note: 'Cicero’s De officiis, “On duties”, was one of the most read books in Europe for centuries.' },
    { id: 'otium', head: 'ōtium', la: 'ōtium, ōtiī', g: 'n', pos: 'noun, 2nd decl.', en: 'leisure, free time; peace', stress: 'Ō-ti-um', deriv: 'otiose' },
    { id: 'negotium', head: 'negōtium', la: 'negōtium, negōtiī', g: 'n', pos: 'noun, 2nd decl.', en: 'business, task, trouble', stress: 'ne-GŌ-ti-um', deriv: 'negotiate', note: 'nec + ōtium: “not-leisure”.' },
    { id: 'periculum', head: 'perīculum', la: 'perīculum, perīculī', g: 'n', pos: 'noun, 2nd decl.', en: 'danger, risk', stress: 'pe-RĪ-cu-lum', deriv: 'peril, perilous' },
    { id: 'remedium', head: 'remedium', la: 'remedium, remediī', g: 'n', pos: 'noun, 2nd decl.', en: 'cure, remedy', stress: 're-ME-di-um', deriv: 'remedy, remedial' },
    { id: 'verbum', head: 'verbum', la: 'verbum, verbī', g: 'n', pos: 'noun, 2nd decl.', en: 'word', stress: 'VER-bum', deriv: 'verb, verbal, verbatim', note: 'Cognate with English word and German Wort: the Indo-European dh became d in Germanic (t in High German by the second sound shift) and b inside a Latin word.' },
    { id: 'oppidum', head: 'oppidum', la: 'oppidum, oppidī', g: 'n', pos: 'noun, 2nd decl.', en: 'town', stress: 'OP-pi-dum', note: 'A town other than Rome, which was urbs (third declension).' },
    { id: 'studium', head: 'studium', la: 'studium, studiī', g: 'n', pos: 'noun, 2nd decl.', en: 'eagerness, zeal; study', stress: 'STU-di-um', deriv: 'study, student; Studium' },
    { id: 'auxilium', head: 'auxilium', la: 'auxilium, auxiliī', g: 'n', pos: 'noun, 2nd decl.', en: 'help, aid; (pl.) auxiliary troops', stress: 'au-XI-li-um', deriv: 'auxiliary' },
    { id: 'caelum', head: 'caelum', la: 'caelum, caelī', g: 'n', pos: 'noun, 2nd decl.', en: 'sky, heaven', stress: 'CAE-lum', deriv: 'celestial; Italian cielo' },

    { id: 'sum', head: 'sum', la: 'sum, esse, fuī, futūrum', pos: 'verb, irregular', en: 'be, exist', stress: 'SUM · ES-se', note: 'sum, es, est, sumus, estis, sunt. fuī is related to German bin and English be.' },
    { id: 'conservo', head: 'cōnservō', la: 'cōnservō, cōnservāre, cōnservāvī, cōnservātum', pos: 'verb, 1st conj.', en: 'preserve, keep safe', stress: 'cōn-SER-vō · cōn-ser-VĀ-re', deriv: 'conserve; konservieren' },
    { id: 'iuvo', head: 'iuvō', la: 'iuvō, iuvāre, iūvī, iūtum', pos: 'verb, 1st conj.', en: 'help; please, delight', stress: 'IU-vō · iu-VĀ-re', deriv: 'adjutant', note: 'Irregular perfect iūvī. Fortēs fortūna iuvat: fortune favours the brave (third declension, later).' },

    { id: 'humanus', head: 'hūmānus', la: 'hūmānus, hūmāna, hūmānum', pos: 'adjective', en: 'human; humane, kind', stress: 'hū-MĀ-nus', deriv: 'human, humane; Humanismus' },
    { id: 'paratus', head: 'parātus', la: 'parātus, parāta, parātum', pos: 'adjective', en: 'prepared, ready', stress: 'pa-RĀ-tus', deriv: 'apparatus; parat', note: 'German parat is this word.' },
    { id: 'bellus', head: 'bellus', la: 'bellus, bella, bellum', pos: 'adjective', en: 'pretty, handsome, charming', stress: 'BEL-lus', deriv: 'belle; Italian bello', note: 'Not related to bellum “war”; a favourite word of Catullus.' },
    { id: 'stultus', head: 'stultus', la: 'stultus, stulta, stultum', pos: 'adjective', en: 'foolish, stupid; (as noun) a fool', stress: 'STUL-tus', deriv: 'stultify' },
    { id: 'verus', head: 'vērus', la: 'vērus, vēra, vērum', pos: 'adjective', en: 'true, real', stress: 'VĒ-rus', deriv: 'verify, very', note: 'vērum: the truth. Related to German wahr.' },
    { id: 'plenus', head: 'plēnus', la: 'plēnus, plēna, plēnum', pos: 'adjective', en: 'full', stress: 'PLĒ-nus', deriv: 'plenty, plenary; Plenum', note: 'Cognate with German voll and English full (p > f by Grimm’s law).' },
    { id: 'carus', head: 'cārus', la: 'cārus, cāra, cārum', pos: 'adjective', en: 'dear', stress: 'CĀ-rus', deriv: 'charity, caress' },
    { id: 'summus', head: 'summus', la: 'summus, summa, summum', pos: 'adjective', en: 'highest, greatest; top of', stress: 'SUM-mus', deriv: 'summit, sum; Summe', note: 'summum bonum: the highest good. summus mōns: the top of the mountain.' },

    { id: 'igitur', head: 'igitur', la: 'igitur', pos: 'conjunction (postpositive)', en: 'therefore, so', stress: 'I-gi-tur', note: 'Usually second in its clause.' },
    { id: 'quoque', head: 'quoque', la: 'quoque', pos: 'adverb', en: 'also, too', stress: 'QUO-que', note: 'Follows the word it emphasises.' },
    { id: 'satis', head: 'satis', la: 'satis', pos: 'adverb; indeclinable noun', en: 'enough', stress: 'SA-tis', deriv: 'satisfy, satiate', note: 'Often with a genitive: satis pecūniae, enough money.' },
    { id: 'nimis', head: 'nimis', la: 'nimis, nimium', pos: 'adverb', en: 'too much, too', stress: 'NI-mis' },
    { id: 'ubi', head: 'ubi', la: 'ubi', pos: 'adverb; conjunction', en: 'where; when', stress: 'U-bi' },
    { id: 'ibi', head: 'ibi', la: 'ibi', pos: 'adverb', en: 'there', stress: 'I-bi' },
    { id: 'post', head: 'post', la: 'post + accusative', pos: 'preposition; adverb', en: 'after, behind; (adv.) afterwards', stress: 'POST', deriv: 'postpone, postscript', note: 'The first preposition in this course that takes the accusative.' }
  ],

  grammarCards: [
    { id: 'g4-sg', front: 'Second declension neuter, singular endings (N G D A Ab)', back: '-um, -ī, -ō, -um, -ō' },
    { id: 'g4-pl', front: 'Second declension neuter, plural endings (N G D A Ab)', back: '-a, -ōrum, -īs, -a, -īs' },
    { id: 'g4-rule1', front: 'Neuter rule 1 (all declensions)', back: 'Nominative, accusative and vocative are always the same.' },
    { id: 'g4-rule2', front: 'Neuter rule 2 (all declensions)', back: 'Nominative, accusative and vocative plural end in -a.' },
    { id: 'g4-bella', front: 'bella: which cases?', back: 'Nom., acc. and voc. pl. of bellum (or f. sg. of bellus, “pretty”)' },
    { id: 'g4-bona', front: 'bona: three possible readings', back: 'f. nom./voc. sg.; n. nom./acc. pl. (also abl. sg. f. bonā, with long ā)' },
    { id: 'g4-sum', front: 'Present of sum', back: 'sum, es, est, sumus, estis, sunt' },
    { id: 'g4-pp', front: 'Principal parts of sum', back: 'sum, esse, fuī, futūrum' },
    { id: 'g4-pred', front: 'Puellae sunt … (good)', back: 'bonae: the predicate adjective agrees with the subject.' },
    { id: 'g4-german', front: 'German “Die Mädchen sind gut”: what is different in Latin?', back: 'Latin inflects the predicate adjective: Puellae sunt bonae.' },
    { id: 'g4-agric', front: 'Agricolae sunt … (ready)', back: 'parātī: agricola is masculine.' },
    { id: 'g4-neutpred', front: 'Errāre hūmānum est: why hūmānum?', back: 'An infinitive subject takes a neuter singular predicate.' },
    { id: 'g4-subst', front: 'bonum, bona, mala, multa as nouns', back: 'a good thing; goods, property; evils; many things' },
    { id: 'g4-neg', front: 'negōtium: what is it made of?', back: 'nec + ōtium: “not-leisure”' },
    { id: 'g4-fui', front: 'Which German and English words share the root of fuī?', back: 'bin, bist; be' },
    { id: 'g4-post', front: 'post takes which case?', back: 'Accusative: post negōtium' },
    { id: 'g4-est1', front: 'Sunt in oppidō multī virī.', back: 'There are many men in the town (sum at the start = “there is/are”).' },
    { id: 'g4-m', front: 'How was final -m pronounced?', back: 'Probably weak, nasalising the vowel; it elides in verse and vanished in Romance.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">bella</span> (from <span class="la">bellum</span>) can be:', options: ['nominative or accusative plural', 'genitive singular', 'ablative singular', 'dative plural'], answer: 0, explain: 'Neuter plural nominative and accusative end in -a.' },
    { id: 'e2', type: 'mc', prompt: 'Which is true of every Latin neuter?', options: ['Nominative and accusative are the same', 'The genitive ends in -ī', 'The dative plural ends in -ōrum', 'The vocative ends in -e'], answer: 0, explain: 'The genitive in -ī is only second declension; the nom. = acc. rule is universal.' },
    { id: 'e3', type: 'mc', prompt: 'In <span class="la">Dōna sunt magna</span>, why <span class="la">magna</span>?', options: ['Neuter plural, agreeing with dōna', 'Feminine singular', 'Ablative singular', 'Because sunt requires -a'], answer: 0, explain: 'The predicate adjective agrees with the subject.' },
    { id: 'e4', type: 'mc', prompt: 'German says <em>Die Mädchen sind gut</em>. Latin says:', options: ['Puellae sunt bonae.', 'Puellae sunt bonum.', 'Puellae sunt bona.', 'Puellae sunt bonus.'], answer: 0, explain: 'Latin inflects the predicate adjective; German does not.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">sumus</span> means:', options: ['we are', 'they are', 'I am', 'you (pl.) are'], answer: 0, explain: '-mus: 1st person plural.' },
    { id: 'e6', type: 'mc', prompt: 'In <span class="la">Errāre hūmānum est</span>, why <span class="la">hūmānum</span>?', options: ['The subject is an infinitive: neuter singular', 'It agrees with an unstated masculine noun', 'It is accusative', 'It is a noun meaning “mankind”'], answer: 0, explain: 'Infinitive subjects take neuter predicates.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Bell___ sunt mala.</span>', hint: 'wars: subject', answers: ['a'], full: 'Bella sunt mala.', explain: 'Neuter nominative plural.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Puellae ___ bonae.</span>', hint: 'are', answers: ['sunt'], full: 'Puellae sunt bonae.', explain: '3rd person plural of sum.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Cōnsilium tuum est bon___.</span>', hint: 'good', answers: ['um'], full: 'Cōnsilium tuum est bonum.', explain: 'Neuter nominative singular, agreeing with cōnsilium.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Agricolae sunt parāt___.</span>', hint: 'ready', answers: ['ī'], full: 'Agricolae sunt parātī.', explain: 'agricola is masculine: masculine nominative plural.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Perīcul___ bellī magna sunt.</span>', hint: 'the dangers: subject', answers: ['a'], full: 'Perīcula bellī magna sunt.', explain: 'Neuter plural subject; magna agrees.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Nautae, cūr nōn parātī ___?</span>', hint: 'are you (pl.)', answers: ['estis'], full: 'Nautae, cūr nōn parātī estis?', explain: '2nd person plural of sum.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">dōnum magnum</span> (great gift).', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['dōnum magnum', 'dōna magna'] },
      { label: 'Gen.', answers: ['dōnī magnī', 'dōnōrum magnōrum'] },
      { label: 'Dat.', answers: ['dōnō magnō', 'dōnīs magnīs'] },
      { label: 'Acc.', answers: ['dōnum magnum', 'dōna magna'] },
      { label: 'Abl.', answers: ['dōnō magnō', 'dōnīs magnīs'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the present of <span class="la">sum</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: '1st', answers: ['sum', 'sumus'] },
      { label: '2nd', answers: ['es', 'estis'] },
      { label: '3rd', answers: ['est', 'sunt'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each form of verbum to its case.', pairs: [
      ['verba', 'nom. or acc. pl.'], ['verbī', 'gen. sg.'], ['verbō', 'dat. or abl. sg.'], ['verbōrum', 'gen. pl.'], ['verbum', 'nom. or acc. sg.']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Ōtium sine negōtiō nōn est bonum.', tokens: ['Leisure', 'without business', 'is not', 'good'], explain: 'bonum is a neuter predicate adjective agreeing with ōtium.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Perīcula bellī sunt magna.', model: 'The dangers of war are great.', accepted: ['dangers of war are great', 'dangers of the war are great', 'perils of war are great', 'wars dangers are great', 'risks of war are great', 'dangers of war are big'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Verba tua sunt vēra.', model: 'Your words are true.', accepted: ['your words are true'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Sine cōnsiliō nihil est parātum.', model: 'Without a plan nothing is ready.', accepted: ['without plan nothing is ready', 'without plan nothing is prepared', 'nothing is ready without plan', 'nothing is prepared without plan', 'without advice nothing is prepared', 'without advice nothing is ready'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'The gifts are small.', model: 'Dōna sunt parva.', accepted: ['dōna sunt parva'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'We are in the town.', model: 'In oppidō sumus.', accepted: ['in oppidō sumus'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'War is not good.', model: 'Bellum nōn est bonum.', accepted: ['bellum nōn est bonum'] },
    { id: 'e23', type: 'mc', prompt: '<span class="la">negōtium</span> is made up of:', options: ['nec + ōtium, “not-leisure”', 'negō + tium, “refusal”', 'novus + ōtium, “new leisure”', 'a Greek loanword'], answer: 0, explain: 'The Romans defined business as the absence of leisure.' },
    { id: 'e24', type: 'mc', prompt: '<span class="la">Bellum bellum nōn est</span> means:', options: ['A war is not pretty', 'War is not war', 'There is no war', 'The pretty war is not'], answer: 0, explain: 'bellum (n.) “war” and bellum, the neuter of bellus “pretty”, are different words.' },
    { id: 'e25', type: 'mc', prompt: 'The Latin perfect <span class="la">fuī</span> “I was” shares its root with:', options: ['German bin and English be', 'German war', 'German ist', 'English was'], answer: 0, explain: 'The root *bheu-: Latin f-, Germanic b-.' }
  ],

  reading: {
    title: 'Ōtium et negōtium',
    note: 'Original passage: Lucius the sailor visits his friend Marcus again. Tap any word.',
    text: 'Lūcius nauta nunc in oppidō est. Negōtium nōn habet, sed multum ōtium. Mārcus autem, amīcus Lūciī, in agrīs labōrat; negōtia Mārcī multa et magna sunt. Lūcius Mārcum vocat: “Mī Mārce, ōtium est bonum! Cūr semper labōrās?” Mārcus respondet: “Ōtium sine negōtiō nōn est bonum, mī Lūcī. Officia mea multa sunt, et agrī nōn sunt parātī.” Tum Lūcius: “Sed vīta hūmāna nōn est longa. Et studia et verba poētārum amāre dēbēmus.” Mārcus rīdet: “Vērum est, Lūcī. Sed sine pecūniā ōtium nōn est dōnum, sed perīculum.” Lūcius igitur hodiē cum amīcō in agrō labōrat, et post negōtium ōtium bonum est.',
    translation: 'Lucius the sailor is now in the town. He has no business, but plenty of leisure. Marcus, however, Lucius’s friend, is working in the fields; Marcus’s tasks are many and great. Lucius calls Marcus: “My dear Marcus, leisure is good! Why are you always working?” Marcus replies: “Leisure without business is not good, my dear Lucius. My duties are many, and the fields are not ready.” Then Lucius: “But human life is not long. We ought to love both the studies and the words of the poets.” Marcus laughs: “That is true, Lucius. But without money leisure is not a gift but a danger.” So today Lucius works with his friend in the field, and after business, leisure is good.',
    notes: [
      { ref: 'multum ōtium', html: 'Neuter accusative singular: <span class="la">multum</span> agrees with <span class="la">ōtium</span>, the object of <span class="la">habet</span>. In the singular <span class="la">multus</span> means “much”.' },
      { ref: 'negōtia Mārcī multa et magna sunt', html: 'A neuter plural subject with two predicate adjectives, both neuter nominative plural.' },
      { ref: 'Mī Mārce', html: '<span class="la">mī</span> with a masculine vocative: “my dear Marcus”. Lecture III had <span class="la">mī Lūcī</span>.' },
      { ref: 'agrī nōn sunt parātī', html: 'Masculine plural subject, so the predicate adjective is masculine plural: <span class="la">parātī</span>. German would say simply <em>bereit</em>.' },
      { ref: 'vīta hūmāna', html: 'Feminine adjective with a feminine noun; <span class="la">hūmāna</span> means “human”, as in “human life”.' },
      { ref: 'Et studia et verba', html: '<span class="la">et … et</span>, “both … and”, joining two neuter plurals, objects of <span class="la">amāre</span>.' },
      { ref: 'Vērum est', html: 'A neuter predicate with no expressed subject: “it is true”.' },
      { ref: 'nōn est dōnum, sed perīculum', html: '<span class="la">nōn … sed</span>: “not … but”. Both nouns are predicate nominatives, neuter singular.' },
      { ref: 'Lūcius igitur', html: '<span class="la">igitur</span> “therefore” usually stands second, like <span class="la">autem</span>.' },
      { ref: 'post negōtium', html: '<span class="la">post</span> takes the accusative: “after business”.' }
    ],
    glosses: {
      'lūcius': 'Lucius (nom.)', 'lūciī': 'gen. of Lūcius: of Lucius', 'lūcī': 'voc. of Lūcius', 'nauta': 'nom. sg. (m.): sailor', 'nunc': 'now', 'in': 'in (+ abl.)', 'oppidō': 'abl. sg. of oppidum, -ī n. town', 'est': '3rd sg. of sum: is',
      'negōtium': 'acc. sg. of negōtium, -ī n. business', 'negōtiō': 'abl. sg. of negōtium', 'negōtia': 'nom. pl. of negōtium: tasks, business', 'nōn': 'not', 'habet': '3rd sg. of habeō: has', 'sed': 'but', 'multum': 'acc. sg. n. of multus: much', 'ōtium': 'ōtium, -ī n. leisure (nom. or acc.)',
      'mārcus': 'Marcus (nom.)', 'mārcī': 'gen. of Mārcus', 'mārcum': 'acc. of Mārcus', 'mārce': 'voc. of Mārcus', 'autem': 'however (never first)', 'amīcus': 'nom. sg.: friend', 'agrīs': 'abl. pl. of ager: fields', 'labōrat': '3rd sg. of labōrō: works', 'labōrās': '2nd sg. of labōrō: you work',
      'multa': 'nom. pl. n. of multus: many', 'et': 'and; et … et, both … and', 'magna': 'nom. pl. n. of magnus: great', 'sunt': '3rd pl. of sum: are', 'vocat': '3rd sg. of vocō: calls', 'mī': 'voc. of meus: my (dear)', 'bonum': 'nom. sg. n. of bonus: good', 'cūr': 'why',
      'semper': 'always', 'respondet': '3rd sg. of respondeō: replies', 'sine': 'without (+ abl.)', 'officia': 'nom. pl. of officium, -ī n. duty', 'mea': 'nom. pl. n. of meus: my', 'agrī': 'nom. pl. of ager: fields', 'parātī': 'nom. pl. m. of parātus: ready', 'tum': 'then',
      'vīta': 'nom. sg. of vīta: life', 'hūmāna': 'nom. sg. f. of hūmānus: human', 'longa': 'nom. sg. f. of longus: long', 'studia': 'acc. pl. of studium, -ī n. study', 'verba': 'acc. pl. of verbum, -ī n. word', 'poētārum': 'gen. pl. of poēta: of the poets', 'amāre': 'inf. of amō: to love', 'dēbēmus': '1st pl. of dēbeō: we ought',
      'rīdet': '3rd sg. of rīdeō: laughs', 'vērum': 'nom. sg. n. of vērus: true; vērum est, it is true', 'pecūniā': 'abl. sg. of pecūnia: money', 'dōnum': 'nom. sg. of dōnum, -ī n. gift', 'perīculum': 'nom. sg. of perīculum, -ī n. danger', 'igitur': 'therefore (usually second)', 'hodiē': 'today',
      'cum': 'with (+ abl.)', 'amīcō': 'abl. sg. of amīcus', 'agrō': 'abl. sg. of ager', 'post': 'after (+ acc.)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Why is Lucius in the town?', options: ['He has no business, only leisure', 'He is selling his ship', 'Marcus has invited him', 'He is ill'], answer: 0, explain: 'Negōtium nōn habet, sed multum ōtium.' },
      { id: 'r2', type: 'mc', prompt: 'Why can Marcus not rest?', options: ['His duties are many and the fields are not ready', 'He has no friends', 'He fears war', 'He is studying the poets'], answer: 0, explain: 'Officia mea multa sunt, et agrī nōn sunt parātī.' },
      { id: 'r3', type: 'mc', prompt: 'What does Marcus say leisure is without money?', options: ['Not a gift but a danger', 'The highest good', 'A business', 'A remedy'], answer: 0, explain: 'sine pecūniā ōtium nōn est dōnum, sed perīculum.' },
      { id: 'r4', type: 'mc', prompt: 'In <span class="la">agrī nōn sunt parātī</span>, why <span class="la">parātī</span>?', options: ['Masculine plural, agreeing with agrī', 'Genitive singular', 'Neuter plural', 'German-style uninflected form'], answer: 0, explain: 'Predicate adjectives agree with the subject.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Genitive plural of <span class="la">perīculum</span>:', options: ['perīculōrum', 'perīculārum', 'perīcula', 'perīculīs'], answer: 0, explain: 'Same as the masculine: -ōrum.' },
      { id: 't2', type: 'gap', prompt: '<span class="la">Verb___ poētae sunt bona.</span>', hint: 'the words: subject', answers: ['a'], full: 'Verba poētae sunt bona.', explain: 'Neuter nominative plural.' },
      { id: 't3', type: 'gap', prompt: '<span class="la">Vīta est long___.</span>', hint: 'long', answers: ['a'], full: 'Vīta est longa.', explain: 'Feminine nominative singular.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Tū amīcus meus ___.</span>', hint: 'you (sg.) are', answers: ['es'], full: 'Tū amīcus meus es.', explain: 'es: 2nd person singular of sum.' },
      { id: 't5', type: 'translate', dir: 'la-en', source: 'Ōtium est dōnum deōrum.', model: 'Leisure is a gift of the gods.', accepted: ['leisure is gift of gods', 'leisure is gods gift', 'free time is gift of gods', 'leisure is a gift from gods', 'leisure is gift from gods'] },
      { id: 't6', type: 'translate', dir: 'en-la', source: 'The dangers are great.', model: 'Perīcula sunt magna.', accepted: ['perīcula sunt magna'] },
      { id: 't7', type: 'mc', prompt: 'Which statement is true?', options: ['Latin inflects predicate adjectives; German does not', 'German inflects predicate adjectives; Latin does not', 'Neither inflects them', 'Both inflect them'], answer: 0, explain: 'Puellae sunt bonae; die Mädchen sind gut.' },
      { id: 't8', type: 'mc', prompt: 'Principal parts of <span class="la">sum</span>:', options: ['sum, esse, fuī, futūrum', 'sum, esse, sumī, sumtum', 'sum, sumere, sumpsī, sumptum', 'sum, essē, fuī, fuitum'], answer: 0, explain: 'fuī and futūrum come from a different root from sum.' },
      { id: 't9', type: 'mc', prompt: '<span class="la">Ō Meliboee, deus nōbīs haec ōtia fēcit</span> is by:', options: ['Virgil', 'Cicero', 'Ennius', 'Seneca'], answer: 0, explain: 'Eclogues 1.6.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">mala</span> used as a noun means:', options: ['evils, troubles', 'bad men', 'a bad woman', 'apples'], answer: 0, explain: 'Neuter plural adjective as noun. (“Apples” would be māla, with long ā.)' },
      { id: 't11', type: 'gap', prompt: '<span class="la">Post negōti___ ōtium est bonum.</span>', hint: 'after business', answers: ['um'], full: 'Post negōtium ōtium est bonum.', explain: 'post takes the accusative.' }
    ]
  },

  reference: [
    { title: 'Second declension neuter: bellum, -ī n.', headers: ['', 'Singular', 'Plural'], rows: [['Nom.', 'bellum', 'bella'], ['Gen.', 'bellī', 'bellōrum'], ['Dat.', 'bellō', 'bellīs'], ['Acc.', 'bellum', 'bella'], ['Abl.', 'bellō', 'bellīs'], ['Voc.', 'bellum', 'bella']] },
    { title: 'Present of sum', headers: ['', 'Singular', 'Plural'], rows: [['1st', 'sum', 'sumus'], ['2nd', 'es', 'estis'], ['3rd', 'est', 'sunt']] },
    { title: 'bonus, -a, -um (all genders)', headers: ['', 'm.', 'f.', 'n.', 'm. pl.', 'f. pl.', 'n. pl.'], rows: [['Nom.', 'bonus', 'bona', 'bonum', 'bonī', 'bonae', 'bona'], ['Gen.', 'bonī', 'bonae', 'bonī', 'bonōrum', 'bonārum', 'bonōrum'], ['Dat.', 'bonō', 'bonae', 'bonō', 'bonīs', 'bonīs', 'bonīs'], ['Acc.', 'bonum', 'bonam', 'bonum', 'bonōs', 'bonās', 'bona'], ['Abl.', 'bonō', 'bonā', 'bonō', 'bonīs', 'bonīs', 'bonīs']] }
  ]
});
