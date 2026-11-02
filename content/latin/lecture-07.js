/*
 * Latin — Lecture VII: the third declension (I): masculine and feminine consonant stems.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-07',
  number: 7,
  title: 'Rēx et lībertās',
  subtitle: 'The third declension (I): masculine and feminine nouns; finding the stem; adjectives with third-declension nouns',
  minutes: 60,

  intro: `
    <p>The first two declensions are tidy: <span class="la">puella</span> is feminine with <span class="la">-ae</span> in the genitive, <span class="la">amīcus</span> masculine with <span class="la">-ī</span>. The third declension is the great mixed bag of Latin. It contains masculines, feminines and neuters; its nominatives look like anything (<span class="la">rēx, homō, virtūs, amor, pāx</span>); and many of its most important words, <span class="la">rēx</span> “king”, <span class="la">lēx</span> “law”, <span class="la">pater</span> and <span class="la">māter</span>, belong to it.</p>
    <p>The key is that the nominative singular is often a disguise. The real stem appears in the genitive: <span class="la">rēx, rēgis</span>; <span class="la">homō, hominis</span>; <span class="la">virtūs, virtūtis</span>. Once you have the stem, the endings are regular and few. That is why, from now on, every noun must be learned with its genitive and its gender, exactly as you learn German nouns with their article and plural.</p>
    <p>Because the third declension is so large, this course takes it in two steps. This lecture covers masculine and feminine nouns; Lecture VIII adds the neuters and gives a set of patterns for predicting the stem. Nouns of the “i-stem” type, which differ in a few endings, come in Lecture XV.</p>
    <p>By the end you should be able to decline any masculine or feminine third-declension noun from its dictionary entry, make first- and second-declension adjectives agree with it, and tell apart the endings that look the same in different declensions.</p>
  `,

  background: [
    {
      title: 'Rēx: why Rome hated kings',
      html: `
        <p>Roman tradition held that the city was ruled by seven kings, from Romulus to Tarquinius Superbus, “Tarquin the Proud”, and that the last of them was expelled in 509 BC, when the Republic began with two annually elected consuls. The details of the regal period are legend, written down centuries later; archaeology shows that early Rome was indeed ruled by kings and that it was in close contact with the Etruscans, from whom the Tarquins were said to come.</p>
        <p>Whatever the history, the story shaped Roman politics for five hundred years. <span class="la">rēx</span> became a word of abuse in the Republic, the opposite of <span class="la">lībertās</span>. Lucius Iunius Brutus, the leader of the expulsion, was remembered as the founder of liberty; Caesar’s assassins in 44 BC, led by another Brutus, claimed his example. Caesar himself publicly refused a royal diadem at the Lupercalia that year, but many believed he wanted it.</p>
        <p>The emperors who followed Augustus were never called <span class="la">rēx</span>. The title was used of foreign rulers, client kings and, by Christians, of God and Christ: <span class="la">rēx rēgum</span>, “king of kings”.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Capitoline_Brutus_Musei_Capitolini_MC1183.jpg/960px-Capitoline_Brutus_Musei_Capitolini_MC1183.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Capitoline_Brutus_Musei_Capitolini_MC1183.jpg/500px-Capitoline_Brutus_Musei_Capitolini_MC1183.jpg|https://upload.wikimedia.org/wikipedia/commons/8/8e/Capitoline_Brutus_Musei_Capitolini_MC1183.jpg" alt="Bronze head of a bearded Roman man with deep-set eyes"><figcaption>The “Capitoline Brutus”, a bronze head of the 4th or 3rd century BC (Capitoline Museums, Rome). It has been identified with Lucius Iunius Brutus since the Renaissance, without any real evidence; it is an early Roman portrait of an unknown man. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Capitoline_Brutus_Musei_Capitolini_MC1183.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Virtūs and lībertās',
      html: `
        <p>Two of the most important Roman values are third-declension nouns, and both are built on simpler words.</p>
        <p><span class="la">virtūs, virtūtis</span> comes from <span class="la">vir</span>, “man” (Lecture III): originally “manliness”, above all courage in war. Under the influence of Greek philosophy it came to mean moral excellence in general, the Greek <em>aretḗ</em>. English <em>virtue</em> keeps the moral sense, and German <em>Tugend</em> (from <em>taugen</em>, “be fit”) has a similar range.</p>
        <p><span class="la">lībertās, lībertātis</span> is formed from <span class="la">līber</span>, “free” (Lecture V), with the suffix <span class="la">-tās</span>, which makes abstract nouns from adjectives: <span class="la">novus → novitās</span>, <span class="la">vērus → vēritās</span>, <span class="la">cīvis → cīvitās</span>. English <em>-ty</em> (liberty, novelty, city) and French <em>-té</em> come from it; German usually uses <em>-heit</em> or <em>-keit</em> for the same job (<em>Freiheit, Neuheit, Wahrheit</em>).</p>
      `
    },
    {
      title: 'Why the nominative hides the stem',
      html: `
        <p>The third declension contains nouns whose stems end in a consonant. In the nominative singular an <span class="la">-s</span> was added directly to that consonant, or no ending at all, and the meeting of sounds changed the stem:</p>
        <ul>
          <li><span class="la">rēg- + s → rēx</span> (x is just <em>gs/cs</em> written with one letter); <span class="la">duc- + s → dux</span>; <span class="la">pāc- + s → pāx</span></li>
          <li><span class="la">virtūt- + s → virtūs</span> (a <em>t</em> before <em>s</em> disappears); <span class="la">cīvitāt- + s → cīvitās</span></li>
          <li><span class="la">homin- → homō</span>, <span class="la">ōrātiōn- → ōrātiō</span> (the <em>n</em> is lost at the end; the vowel changes)</li>
          <li><span class="la">amōr-</span> → <span class="la">amor</span> (no ending; the vowel shortens before final <em>r</em>)</li>
          <li><span class="la">patr- → pater</span> (an <em>e</em> appears to make the word pronounceable, as in <span class="la">ager, agrī</span>)</li>
        </ul>
        <p>German has nothing quite like this, but English plurals such as <em>child, children</em> and <em>ox, oxen</em> show the same principle: a stem that appears in full only when an ending is added.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Lex_de_Imperio_Vespasiani,_inscribed_with_law_whereby_the_Senate_and_People_of_Rome_instated_Emperor_Vespasian,_Roman,_69-70_AD,_bronze_-_Musei_Capitolini_-_Rome,_Italy_-_DSC06069.jpg/960px-Lex_de_Imperio_Vespasiani,_inscribed_with_law_whereby_the_Senate_and_People_of_Rome_instated_Emperor_Vespasian,_Roman,_69-70_AD,_bronze_-_Musei_Capitolini_-_Rome,_Italy_-_DSC06069.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Lex_de_Imperio_Vespasiani,_inscribed_with_law_whereby_the_Senate_and_People_of_Rome_instated_Emperor_Vespasian,_Roman,_69-70_AD,_bronze_-_Musei_Capitolini_-_Rome,_Italy_-_DSC06069.jpg/500px-Lex_de_Imperio_Vespasiani,_inscribed_with_law_whereby_the_Senate_and_People_of_Rome_instated_Emperor_Vespasian,_Roman,_69-70_AD,_bronze_-_Musei_Capitolini_-_Rome,_Italy_-_DSC06069.jpg|https://upload.wikimedia.org/wikipedia/commons/5/52/Lex_de_Imperio_Vespasiani,_inscribed_with_law_whereby_the_Senate_and_People_of_Rome_instated_Emperor_Vespasian,_Roman,_69-70_AD,_bronze_-_Musei_Capitolini_-_Rome,_Italy_-_DSC06069.jpg" alt="Large bronze tablet covered with lines of Latin capitals"><figcaption>The <span class="la">lēx dē imperiō Vespasiānī</span>, AD 69–70 (Capitoline Museums): a law conferring the powers of emperor on Vespasian, engraved on bronze. Roman laws were published on bronze tablets so that they could be read and could not easily be altered. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Lex_de_Imperio_Vespasiani,_inscribed_with_law_whereby_the_Senate_and_People_of_Rome_instated_Emperor_Vespasian,_Roman,_69-70_AD,_bronze_-_Musei_Capitolini_-_Rome,_Italy_-_DSC06069.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Omnia vincit Amor: et nōs cēdāmus Amōrī.</p>
    <p>“Love conquers all things: let us too yield to Love.” Virgil, <em>Eclogues</em> 10.69. The words are spoken by the poet Cornelius Gallus, a friend of Virgil, who cannot escape his love for a woman who has left him.</p>
    <p><span class="la">Amor</span> is a third-declension noun, <span class="la">amor, amōris</span> m., here personified as the god of love; <span class="la">Amōrī</span> is its dative, “to Love”, after <span class="la">cēdere</span>, “to yield”. <span class="la">vincit</span> and <span class="la">cēdāmus</span> are third-conjugation forms (Lecture IX), and <span class="la">cēdāmus</span> is a subjunctive, “let us yield”. The first half-line, <span class="la">omnia vincit amor</span>, is one of the most quoted lines of Latin poetry: Chaucer’s Prioress wears it, as <span class="la">Amor vincit omnia</span>, on her brooch in <em>The Canterbury Tales</em>.</p>
  `,

  pronunciation: `
    <h3>Long vowels in the stem</h3>
    <p>Many third-declension stems have a long vowel that is shortened or hidden in the nominative. Learn the genitive with its quantity, because the stress depends on it: <span class="la">amor</span>, but <span class="la">a-MŌ-ris</span>; <span class="la">virtūs</span>, <span class="la">vir-TŪ-tis</span>; <span class="la">ōrātiō</span>, <span class="la">ō-rā-ti-Ō-nis</span>; but <span class="la">homō</span>, <span class="la">HO-mi-nis</span> with a short <span class="la">i</span>.</p>
    <h3>x</h3>
    <p><span class="la">x</span> is <em>ks</em>, as in German <em>Hexe</em>: <span class="la">rēx</span> “reeks”, <span class="la">lēx</span> “leeks”, <span class="la">pāx</span> “paaks”. In <span class="la">rēgis</span> the <em>g</em> reappears.</p>
    <h3>The ending -ibus</h3>
    <p>The dative and ablative plural <span class="la">-ibus</span> has a short <span class="la">i</span>, so the stress falls on the syllable before it: <span class="la">RĒ-gi-bus, ho-MI-ni-bus, vir-TŪ-ti-bus</span>.</p>
  `,

  grammar: [
    {
      title: '1. The endings',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>rēx, rēgis m.</th><th>virtūs, virtūtis f.</th><th>Ending</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">rēx</td><td class="la">virtūs</td><td>(various)</td></tr>
            <tr><th>Gen. sg.</th><td class="la">rēgis</td><td class="la">virtūtis</td><td class="la">-is</td></tr>
            <tr><th>Dat. sg.</th><td class="la">rēgī</td><td class="la">virtūtī</td><td class="la">-ī</td></tr>
            <tr><th>Acc. sg.</th><td class="la">rēgem</td><td class="la">virtūtem</td><td class="la">-em</td></tr>
            <tr><th>Abl. sg.</th><td class="la">rēge</td><td class="la">virtūte</td><td class="la">-e</td></tr>
            <tr><th>Nom. pl.</th><td class="la">rēgēs</td><td class="la">virtūtēs</td><td class="la">-ēs</td></tr>
            <tr><th>Gen. pl.</th><td class="la">rēgum</td><td class="la">virtūtum</td><td class="la">-um</td></tr>
            <tr><th>Dat. pl.</th><td class="la">rēgibus</td><td class="la">virtūtibus</td><td class="la">-ibus</td></tr>
            <tr><th>Acc. pl.</th><td class="la">rēgēs</td><td class="la">virtūtēs</td><td class="la">-ēs</td></tr>
            <tr><th>Abl. pl.</th><td class="la">rēgibus</td><td class="la">virtūtibus</td><td class="la">-ibus</td></tr>
          </tbody>
        </table></div>
        <p>The vocative is the same as the nominative. Masculines and feminines decline identically; gender matters only for agreement.</p>
      `
    },
    {
      title: '2. The dictionary entry gives the stem',
      html: `
        <p>To decline a third-declension noun, take the genitive singular and remove <span class="la">-is</span>: what remains is the stem, to which every other ending is added.</p>
        <ul>
          <li><span class="la">homō, hominis</span> m. → <span class="la">homin-</span>: <span class="la">hominem, hominī, hominēs, hominibus</span></li>
          <li><span class="la">pater, patris</span> m. → <span class="la">patr-</span>: <span class="la">patrem, patrī, patrēs</span></li>
          <li><span class="la">mōs, mōris</span> m. → <span class="la">mōr-</span>: <span class="la">mōrem, mōrēs</span> (English <em>morals</em>)</li>
        </ul>
        <p>Learn three things with every new noun: nominative, genitive, gender. It is the same discipline as German <em>der Mann, des Mannes, die Männer</em>, and it pays off for the rest of the course.</p>
      `
    },
    {
      title: '3. Gender: rules of thumb',
      html: `
        <p>Gender in the third declension is not shown by the endings. Some patterns help, but every one has exceptions:</p>
        <ul>
          <li><strong>Masculine</strong>: most nouns in <span class="la">-or, -ōris</span> (<span class="la">amor, labor, senātor</span>); but <span class="la">soror</span> “sister” and <span class="la">uxor</span> “wife” are feminine by meaning.</li>
          <li><strong>Feminine</strong>: abstract nouns in <span class="la">-tās, -tūs, -tūdō, -tiō</span> (<span class="la">lībertās, virtūs, magnitūdō, ōrātiō</span>).</li>
          <li><strong>Natural gender</strong> wins for people: <span class="la">pater, frāter, rēx, dux, mīles</span> masculine; <span class="la">māter, soror, mulier, uxor</span> feminine.</li>
        </ul>
        <p>For everything else, the dictionary decides, as in German.</p>
      `
    },
    {
      title: '4. Agreement across declensions',
      html: `
        <p>An adjective agrees with its noun in gender, number and case, but it keeps its own declension. So a first/second-declension adjective with a third-declension noun has different endings:</p>
        <ul>
          <li><span class="la">rēx bonus</span>, <span class="la">rēgis bonī</span>, <span class="la">rēgī bonō</span>, <span class="la">rēgem bonum</span>, <span class="la">rēge bonō</span></li>
          <li><span class="la">virtūs magna</span>, <span class="la">virtūtis magnae</span>, <span class="la">virtūtem magnam</span>, <span class="la">virtūtēs magnae</span></li>
        </ul>
        <p>This is where the gender you learned with the noun is essential: <span class="la">amor</span> is masculine, so <span class="la">amor magnus</span>; <span class="la">lībertās</span> is feminine, so <span class="la">lībertās magna</span>. German adjectives work the same way: <em>der gute König, die große Tugend</em>, whatever the noun’s own plural is.</p>
      `
    },
    {
      title: '5. Endings that look alike',
      html: `
        <p>The third declension reuses endings that mean something else in the first two. The most common confusions:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Ending</th><th>3rd declension</th><th>1st/2nd declension</th></tr></thead>
          <tbody>
            <tr><td class="la">-ī</td><td>dat. sg. (<span class="la">rēgī</span>)</td><td>gen. sg. or nom. pl. (<span class="la">amīcī</span>)</td></tr>
            <tr><td class="la">-e</td><td>abl. sg. (<span class="la">rēge</span>)</td><td>voc. sg. (<span class="la">amīce</span>)</td></tr>
            <tr><td class="la">-um</td><td>gen. pl. (<span class="la">rēgum</span>)</td><td>acc. sg. (<span class="la">amīcum</span>)</td></tr>
            <tr><td class="la">-is</td><td>gen. sg. (<span class="la">rēgis</span>)</td><td>dat./abl. pl. (<span class="la">amīcīs</span>)</td></tr>
            <tr><td class="la">-ēs</td><td>nom./acc. pl. (<span class="la">rēgēs</span>)</td><td>–</td></tr>
          </tbody>
        </table></div>
        <p>The only reliable guide is to know which declension the noun belongs to. That is another reason to learn the genitive.</p>
      `
    },
    {
      title: '6. Prepositions with the accusative',
      html: `
        <p>So far you have met <span class="la">post</span> and <span class="la">ad</span> with the accusative. Three more are common:</p>
        <ul>
          <li><span class="la">contrā</span> + acc.: against (<span class="la">contrā rēgem</span>)</li>
          <li><span class="la">prō</span> + <strong>abl.</strong>: for, on behalf of; in front of (<span class="la">prō lībertāte</span>). Note: ablative, not accusative.</li>
          <li><span class="la">per</span> + acc.: through (<span class="la">per agrōs</span>)</li>
        </ul>
        <p>German has the same split between prepositions with different cases (<em>gegen</em> + Akk., <em>für</em> + Akk., <em>mit</em> + Dat.), but the cases do not match one for one: German <em>für</em> takes the accusative, Latin <span class="la">prō</span> the ablative.</p>
      `
    }
  ],

  vocab: [
    { id: 'rex', head: 'rēx', la: 'rēx, rēgis', g: 'm', pos: 'noun, 3rd decl.', en: 'king', stress: 'RĒX · RĒ-gis', deriv: 'regal, reign; regieren', note: 'rēg- + s.' },
    { id: 'lex', head: 'lēx', la: 'lēx, lēgis', g: 'f', pos: 'noun, 3rd decl.', en: 'law', stress: 'LĒX · LĒ-gis', deriv: 'legal, legislate' },
    { id: 'homo', head: 'homō', la: 'homō, hominis', g: 'm', pos: 'noun, 3rd decl.', en: 'human being, person, man', stress: 'HO-mō · HO-mi-nis', deriv: 'homicide, human', note: 'A human being of either sex; vir is a man as opposed to a woman.' },
    { id: 'virtus', head: 'virtūs', la: 'virtūs, virtūtis', g: 'f', pos: 'noun, 3rd decl.', en: 'courage, excellence, virtue', stress: 'VIR-tūs · vir-TŪ-tis', deriv: 'virtue', note: 'From vir: “manliness”.' },
    { id: 'amor', head: 'amor', la: 'amor, amōris', g: 'm', pos: 'noun, 3rd decl.', en: 'love', stress: 'A-mor · a-MŌ-ris', deriv: 'amorous' },
    { id: 'labor', head: 'labor', la: 'labor, labōris', g: 'm', pos: 'noun, 3rd decl.', en: 'work, toil, hardship', stress: 'LA-bor · la-BŌ-ris', deriv: 'labour; Labor', note: 'Compare labōrō (Lecture I).' },
    { id: 'pax', head: 'pāx', la: 'pāx, pācis', g: 'f', pos: 'noun, 3rd decl.', en: 'peace', stress: 'PĀX · PĀ-cis', deriv: 'pacify, pacific' },
    { id: 'civitas', head: 'cīvitās', la: 'cīvitās, cīvitātis', g: 'f', pos: 'noun, 3rd decl.', en: 'state, community; citizenship', stress: 'CĪ-vi-tās · cī-vi-TĀ-tis', deriv: 'city' },
    { id: 'libertas', head: 'lībertās', la: 'lībertās, lībertātis', g: 'f', pos: 'noun, 3rd decl.', en: 'freedom, liberty', stress: 'LĪ-ber-tās · lī-ber-TĀ-tis', deriv: 'liberty' },
    { id: 'veritas', head: 'vēritās', la: 'vēritās, vēritātis', g: 'f', pos: 'noun, 3rd decl.', en: 'truth', stress: 'VĒ-ri-tās · vē-ri-TĀ-tis', deriv: 'verity', note: 'From vērus (Lecture IV).' },
    { id: 'mos', head: 'mōs', la: 'mōs, mōris', g: 'm', pos: 'noun, 3rd decl.', en: 'custom, habit; (pl.) character, morals', stress: 'MŌS · MŌ-ris', deriv: 'moral, mores', note: 'mōs maiōrum: the custom of the ancestors.' },
    { id: 'pater', head: 'pater', la: 'pater, patris', g: 'm', pos: 'noun, 3rd decl.', en: 'father', stress: 'PA-ter · PA-tris', deriv: 'paternal, patriot', note: 'German Vater (Grimm’s law: p > f).' },
    { id: 'mater', head: 'māter', la: 'māter, mātris', g: 'f', pos: 'noun, 3rd decl.', en: 'mother', stress: 'MĀ-ter · MĀ-tris', deriv: 'maternal', note: 'German Mutter.' },
    { id: 'frater', head: 'frāter', la: 'frāter, frātris', g: 'm', pos: 'noun, 3rd decl.', en: 'brother', stress: 'FRĀ-ter · FRĀ-tris', deriv: 'fraternal, friar', note: 'German Bruder (Latin f from older bh).' },
    { id: 'soror', head: 'soror', la: 'soror, sorōris', g: 'f', pos: 'noun, 3rd decl.', en: 'sister', stress: 'SO-ror · so-RŌ-ris', deriv: 'sorority', note: 'Feminine despite -or. German Schwester is a cognate.' },
    { id: 'uxor', head: 'uxor', la: 'uxor, uxōris', g: 'f', pos: 'noun, 3rd decl.', en: 'wife', stress: 'UX-or · ux-Ō-ris', deriv: 'uxorious' },
    { id: 'mulier', head: 'mulier', la: 'mulier, mulieris', g: 'f', pos: 'noun, 3rd decl.', en: 'woman', stress: 'MU-li-er · mu-LI-e-ris' },
    { id: 'dux', head: 'dux', la: 'dux, ducis', g: 'm', pos: 'noun, 3rd decl.', en: 'leader, general', stress: 'DUX · DU-cis', deriv: 'duke; Duce' },
    { id: 'miles', head: 'mīles', la: 'mīles, mīlitis', g: 'm', pos: 'noun, 3rd decl.', en: 'soldier', stress: 'MĪ-les · MĪ-li-tis', deriv: 'military, militia' },
    { id: 'senator', head: 'senātor', la: 'senātor, senātōris', g: 'm', pos: 'noun, 3rd decl.', en: 'senator', stress: 'se-NĀ-tor · se-nā-TŌ-ris' },
    { id: 'consul', head: 'cōnsul', la: 'cōnsul, cōnsulis', g: 'm', pos: 'noun, 3rd decl.', en: 'consul', stress: 'CŌN-sul · CŌN-su-lis', note: 'Two consuls were elected each year, from 509 BC by tradition.' },
    { id: 'oratio', head: 'ōrātiō', la: 'ōrātiō, ōrātiōnis', g: 'f', pos: 'noun, 3rd decl.', en: 'speech; eloquence', stress: 'ō-RĀ-ti-ō · ō-rā-ti-Ō-nis', deriv: 'oration' },

    { id: 'regno', head: 'rēgnō', la: 'rēgnō, rēgnāre, rēgnāvī, rēgnātum', pos: 'verb, 1st conj.', en: 'rule, be king, reign', stress: 'RĒG-nō · rēg-NĀ-re', deriv: 'reign' },
    { id: 'pugno', head: 'pugnō', la: 'pugnō, pugnāre, pugnāvī, pugnātum', pos: 'verb, 1st conj.', en: 'fight', stress: 'PUG-nō · pug-NĀ-re', deriv: 'pugnacious', note: 'From pugnus, fist.' },
    { id: 'fugo', head: 'fugō', la: 'fugō, fugāre, fugāvī, fugātum', pos: 'verb, 1st conj.', en: 'put to flight, drive away', stress: 'FU-gō · fu-GĀ-re' },
    { id: 'vexo', head: 'vexō', la: 'vexō, vexāre, vexāvī, vexātum', pos: 'verb, 1st conj.', en: 'harass, trouble, afflict', stress: 'VEX-ō · vex-Ā-re', deriv: 'vex' },
    { id: 'deleo', head: 'dēleō', la: 'dēleō, dēlēre, dēlēvī, dēlētum', pos: 'verb, 2nd conj.', en: 'destroy, wipe out', stress: 'DĒ-le-ō · dē-LĒ-re', deriv: 'delete', note: 'Carthāgō dēlenda est (Cato, as reported later).' },

    { id: 'contra', head: 'contrā', la: 'contrā + acc.', pos: 'preposition; adverb', en: 'against; opposite', stress: 'CON-trā', deriv: 'contrary' },
    { id: 'pro', head: 'prō', la: 'prō + abl.', pos: 'preposition', en: 'for, on behalf of; in front of; instead of', stress: 'PRŌ', deriv: 'pro-' },
    { id: 'per', head: 'per', la: 'per + acc.', pos: 'preposition', en: 'through; by (in oaths)', stress: 'PER' },
    { id: 'superbus', head: 'superbus', la: 'superbus, superba, superbum', pos: 'adjective', en: 'proud, arrogant', stress: 'su-PER-bus', deriv: 'superb' },
    { id: 'ultimus', head: 'ultimus', la: 'ultimus, ultima, ultimum', pos: 'adjective', en: 'last, farthest', stress: 'UL-ti-mus', deriv: 'ultimate' }
  ],

  grammarCards: [
    { id: 'g7-sg', front: 'Third declension (m./f.) singular endings (N G D A Ab)', back: '–, -is, -ī, -em, -e' },
    { id: 'g7-pl', front: 'Third declension (m./f.) plural endings (N G D A Ab)', back: '-ēs, -um, -ibus, -ēs, -ibus' },
    { id: 'g7-stem', front: 'How do you find the stem of a 3rd-declension noun?', back: 'Take the genitive singular and remove -is: hominis → homin-.' },
    { id: 'g7-learn', front: 'What must you learn with every 3rd-declension noun?', back: 'Nominative, genitive, gender.' },
    { id: 'g7-rex', front: 'rēx: why x?', back: 'rēg- + s: x = gs.' },
    { id: 'g7-virtus', front: 'virtūs: where is the t?', back: 'virtūt- + s: t is lost before s.' },
    { id: 'g7-homo', front: 'homō, hominis: stem', back: 'homin-' },
    { id: 'g7-or', front: 'Gender of nouns in -or, -ōris', back: 'Mostly masculine (amor, labor); soror and uxor feminine.' },
    { id: 'g7-tas', front: 'Gender of nouns in -tās, -tūs, -tiō', back: 'Feminine (lībertās, virtūs, ōrātiō).' },
    { id: 'g7-agree', front: 'rēx bonus: genitive and accusative', back: 'rēgis bonī; rēgem bonum (each word keeps its declension).' },
    { id: 'g7-i', front: '-ī in rēgī vs amīcī', back: 'rēgī: dative sg. (3rd); amīcī: gen. sg. or nom. pl. (2nd)' },
    { id: 'g7-um', front: '-um in rēgum vs amīcum', back: 'rēgum: genitive pl. (3rd); amīcum: accusative sg. (2nd)' },
    { id: 'g7-e', front: '-e in rēge vs amīce', back: 'rēge: ablative sg. (3rd); amīce: vocative sg. (2nd)' },
    { id: 'g7-pro', front: 'prō takes which case?', back: 'Ablative: prō lībertāte (unlike German für + Akk.)' },
    { id: 'g7-tas2', front: 'Suffix -tās, -tātis', back: 'Abstract nouns from adjectives: līber → lībertās (English -ty, German -heit)' },
    { id: 'g7-509', front: '509 BC', back: 'Traditional date of the expulsion of the last king and the start of the Republic.' },
    { id: 'g7-amor', front: 'Omnia vincit Amor', back: 'Love conquers all. (Virgil, Eclogues 10.69)' },
    { id: 'g7-stress', front: 'Stress of hominibus and virtūtibus', back: 'ho-MI-ni-bus; vir-TŪ-ti-bus' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'The stem of <span class="la">homō, hominis</span> is:', options: ['homin-', 'hom-', 'homō-', 'homini-'], answer: 0, explain: 'Genitive minus -is.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">rēgum</span> is:', options: ['genitive plural', 'accusative singular', 'dative plural', 'nominative singular'], answer: 0, explain: '-um in the third declension is genitive plural.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">virtūtī</span> is:', options: ['dative singular', 'genitive singular', 'nominative plural', 'ablative singular'], answer: 0, explain: '-ī: dative singular in the third declension.' },
    { id: 'e4', type: 'mc', prompt: 'Which form agrees with <span class="la">lībertātem</span>?', options: ['magnam', 'magnum', 'magnem', 'magnae'], answer: 0, explain: 'lībertās is feminine: accusative magnam.' },
    { id: 'e5', type: 'mc', prompt: 'Gender of <span class="la">soror, sorōris</span>:', options: ['feminine', 'masculine', 'neuter', 'either'], answer: 0, explain: 'Natural gender beats the -or pattern.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">prō lībertāte</span>: case of <span class="la">lībertāte</span>?', options: ['ablative', 'accusative', 'dative', 'genitive'], answer: 0, explain: 'prō takes the ablative.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Rōmānī rēg___ nōn amābant.</span>', hint: 'kings (acc. pl.)', answers: ['ēs', 'es'], full: 'Rōmānī rēgēs nōn amābant.', explain: 'Accusative plural -ēs.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Lēgēs cīvitāt___ bonae sunt.</span>', hint: 'of the state (gen. sg.)', answers: ['is'], full: 'Lēgēs cīvitātis bonae sunt.', explain: 'Genitive singular -is.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Fīlia mātr___ rosam dat.</span>', hint: 'to her mother (dat. sg.)', answers: ['ī', 'i'], full: 'Fīlia mātrī rosam dat.', explain: 'Dative singular -ī; stem mātr-.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Cum mīlit___ pugnābant.</span>', hint: 'with the soldiers (abl. pl.)', answers: ['ibus'], full: 'Cum mīlitibus pugnābant.', explain: 'Ablative plural -ibus; stem mīlit-.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Virtūs eius magn___ erat.</span>', hint: 'great', answers: ['a'], full: 'Virtūs eius magna erat.', explain: 'virtūs is feminine.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Amor patr___ magnus est.</span>', hint: 'of the father (gen.)', answers: ['is'], full: 'Amor patris magnus est.', explain: 'Stem patr-, genitive -is.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">rēx bonus</span> (good king).', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['rēx bonus', 'rēgēs bonī'] },
      { label: 'Gen.', answers: ['rēgis bonī', 'rēgum bonōrum'] },
      { label: 'Dat.', answers: ['rēgī bonō', 'rēgibus bonīs'] },
      { label: 'Acc.', answers: ['rēgem bonum', 'rēgēs bonōs'] },
      { label: 'Abl.', answers: ['rēge bonō', 'rēgibus bonīs'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">virtūs magna</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['virtūs magna', 'virtūtēs magnae'] },
      { label: 'Gen.', answers: ['virtūtis magnae', 'virtūtum magnārum'] },
      { label: 'Dat.', answers: ['virtūtī magnae', 'virtūtibus magnīs'] },
      { label: 'Acc.', answers: ['virtūtem magnam', 'virtūtēs magnās'] },
      { label: 'Abl.', answers: ['virtūte magnā', 'virtūtibus magnīs'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each noun to its stem.', pairs: [
      ['rēx', 'rēg-'], ['homō', 'homin-'], ['virtūs', 'virtūt-'], ['pater', 'patr-'], ['amor', 'amōr-']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Brūtus prō lībertāte contrā rēgem pugnābat.', tokens: ['Brutus', 'was fighting', 'for liberty', 'against the king'], explain: 'prō + abl., contrā + acc.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Rōmānī rēgem superbum ex patriā fugābant.', model: 'The Romans drove the proud king out of their country.', accepted: ['romans drove proud king out of country', 'romans drove proud king out of their country', 'romans drove out proud king from country', 'romans drove proud king from country', 'romans drove proud king from their country', 'romans drove proud king out of fatherland', 'romans were driving proud king out of country', 'romans put proud king to flight from country', 'romans expelled proud king from country', 'romans expelled proud king from their country'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Lēgēs bonae cīvitātem cōnservant.', model: 'Good laws preserve the state.', accepted: ['good laws preserve state', 'good laws keep state safe', 'good laws save state', 'good laws preserve community', 'good laws protect state'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Māter et soror mīlitis lacrimābant.', model: 'The soldier’s mother and sister were weeping.', accepted: ['soldier’s mother and sister were weeping', 'soldiers mother and sister were weeping', 'mother and sister of soldier were weeping', 'mother and sister of soldier were crying', 'soldier’s mother and sister were crying', 'soldiers mother and sister were crying', 'soldier’s mother and sister wept', 'mother and sister of soldier wept'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'The king loves peace.', model: 'Rēx pācem amat.', accepted: ['rēx pācem amat'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'We are fighting for liberty.', model: 'Prō lībertāte pugnāmus.', accepted: ['prō lībertāte pugnāmus'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'The soldiers praise the leader.', model: 'Mīlitēs ducem laudant.', accepted: ['mīlitēs ducem laudant'] },
    { id: 'e23', type: 'mc', prompt: 'By Roman tradition, the last king was expelled in:', options: ['509 BC', '753 BC', '44 BC', '27 BC'], answer: 0, explain: '753 is the traditional founding of Rome; 44 the death of Caesar; 27 the start of Augustus’ rule.' },
    { id: 'e24', type: 'mc', prompt: '<span class="la">virtūs</span> is derived from:', options: ['vir, man', 'vīta, life', 'videō, see', 'vērus, true'], answer: 0, explain: 'Originally “manliness”, courage.' },
    { id: 'e25', type: 'mc', prompt: 'In <span class="la">Omnia vincit Amor</span>, <span class="la">Amor</span> is:', options: ['nominative, the subject', 'accusative, the object', 'genitive', 'vocative'], answer: 0, explain: 'Love conquers all things: omnia is the object (neuter plural).' }
  ],

  reading: {
    title: 'Rēx et lībertās',
    note: 'Original passage: Lucius tells Marcus’s sons why the Romans hate kings. Tap any word.',
    text: 'Gāius et Quīntus Lūcium rogant: “Cūr Rōmānī rēgēs nōn amant?” Lūcius respondet: “Ōlim rēgēs Rōmae rēgnābant. Rēx ultimus, Tarquinius Superbus, nōn lēgēs sed pecūniam et glōriam amābat. Hominēs miserōs labōre magnō vexābat, et senātōrēs eum timēbant. Sed Lūcius Iūnius Brūtus, vir magnae virtūtis, prō lībertāte pugnāre nōn dubitābat. Cum multīs hominibus rēgem et fīliōs rēgis ex patriā fugābat. Tum Rōmānī novam cīvitātem habēbant: nōn rēgem sed lēgēs et cōnsulēs. Itaque etiam nunc Rōmānī rēgēs timent et lībertātem amant.” Quīntus clāmat: “Et Brūtus erat dux bonus!” Lūcius rīdet: “Vērum est, mī Quīnte. Sed memoriam tenēte: lībertās sine lēgibus nōn est lībertās, et lēgēs sine virtūte hominum nōn sunt lēgēs.”',
    translation: 'Gaius and Quintus ask Lucius: “Why do the Romans not love kings?” Lucius replies: “Once kings ruled at Rome. The last king, Tarquin the Proud, loved not the laws but money and glory. He oppressed poor people with heavy labour, and the senators feared him. But Lucius Iunius Brutus, a man of great courage, did not hesitate to fight for liberty. With many people he drove the king and the king’s sons out of the country. Then the Romans had a new state: not a king but laws and consuls. And so even now the Romans fear kings and love liberty.” Quintus shouts: “And Brutus was a good leader!” Lucius laughs: “That is true, my dear Quintus. But remember: liberty without laws is not liberty, and laws without the virtue of people are not laws.”',
    notes: [
      { ref: 'Cūr Rōmānī rēgēs nōn amant?', html: '<span class="la">rēgēs</span>: accusative plural, object of <span class="la">amant</span>. The same form is also the nominative plural; here the subject is <span class="la">Rōmānī</span>.' },
      { ref: 'Ōlim rēgēs Rōmae rēgnābant', html: '<span class="la">Rōmae</span>: “at Rome”, the locative case, which for first-declension names of towns looks like the genitive. The locative is treated in Lecture XXXVIII.' },
      { ref: 'Rēx ultimus, Tarquinius Superbus', html: 'Apposition (Lecture III): the name in the same case as <span class="la">rēx</span>. <span class="la">Superbus</span> is his nickname, “the Proud”.' },
      { ref: 'Hominēs miserōs labōre magnō vexābat', html: '<span class="la">labōre magnō</span>: ablative of means, “with great toil”. Tradition said Tarquin forced the people to build the great sewer and the temple on the Capitol.' },
      { ref: 'senātōrēs eum timēbant', html: '<span class="la">eum</span>: “him”, the pronoun <span class="la">is</span> (Lecture XII).' },
      { ref: 'vir magnae virtūtis', html: 'Genitive of description: “a man of great courage”. Third-declension noun, first-declension adjective, both genitive feminine singular.' },
      { ref: 'rēgem et fīliōs rēgis ex patriā fugābat', html: '<span class="la">ex</span> + ablative: “out of”. <span class="la">fugāre</span> is “put to flight”; do not confuse it with <span class="la">fugere</span>, “flee” (third conjugation).' },
      { ref: 'nōn rēgem sed lēgēs et cōnsulēs', html: 'Two consuls a year, who could each block the other: the Republic’s answer to monarchy.' },
      { ref: 'memoriam tenēte', html: '“keep in memory, remember”: plural imperative of <span class="la">teneō</span>, addressed to both boys.' },
      { ref: 'lēgēs sine virtūte hominum', html: '<span class="la">sine</span> + ablative <span class="la">virtūte</span>; <span class="la">hominum</span> is genitive plural.' }
    ],
    glosses: {
      'gāius': 'Gaius (nom.)', 'et': 'and', 'quīntus': 'Quintus (nom.)', 'lūcium': 'acc. of Lūcius', 'rogant': '3rd pl. of rogō: ask', 'cūr': 'why', 'rōmānī': 'nom. pl. of Rōmānus: the Romans', 'rēgēs': 'acc./nom. pl. of rēx: kings', 'nōn': 'not', 'amant': '3rd pl. of amō: love',
      'lūcius': 'Lucius (nom.)', 'respondet': '3rd sg. of respondeō: replies', 'ōlim': 'once', 'rōmae': 'at Rome (locative)', 'rēgnābant': 'impf. 3rd pl. of rēgnō: ruled', 'rēx': 'king (nom.)', 'ultimus': 'last', 'tarquinius': 'Tarquinius (nom.)', 'superbus': 'the Proud (nickname)',
      'lēgēs': 'acc. pl. of lēx: laws', 'sed': 'but', 'pecūniam': 'acc. of pecūnia: money', 'glōriam': 'acc. of glōria: glory', 'amābat': 'impf. 3rd sg. of amō: loved',
      'hominēs': 'acc. pl. of homō: people', 'miserōs': 'acc. pl. m. of miser: wretched, poor', 'labōre': 'abl. of labor: with toil', 'magnō': 'abl. m. of magnus: great', 'vexābat': 'impf. 3rd sg. of vexō: harassed', 'senātōrēs': 'nom. pl. of senātor: senators', 'eum': 'him (acc. of is)', 'timēbant': 'impf. 3rd pl. of timeō: feared',
      'iūnius': 'Iunius (nom.)', 'brūtus': 'Brutus (nom.)', 'vir': 'man (nom.)', 'magnae': 'gen. f. of magnus', 'virtūtis': 'gen. of virtūs: of courage', 'prō': 'for (+ abl.)', 'lībertāte': 'abl. of lībertās: liberty', 'pugnāre': 'to fight (inf.)', 'dubitābat': 'impf. 3rd sg. of dubitō: hesitated',
      'cum': 'with (+ abl.)', 'multīs': 'abl. pl. of multus: many', 'hominibus': 'abl. pl. of homō: people', 'rēgem': 'acc. of rēx: king', 'fīliōs': 'acc. pl. of fīlius: sons', 'rēgis': 'gen. of rēx: of the king', 'ex': 'out of (+ abl.)', 'patriā': 'abl. of patria: country', 'fugābat': 'impf. 3rd sg. of fugō: drove out, put to flight',
      'tum': 'then', 'novam': 'acc. f. of novus: new', 'cīvitātem': 'acc. of cīvitās: state', 'habēbant': 'impf. 3rd pl. of habeō: had', 'cōnsulēs': 'acc. pl. of cōnsul: consuls', 'itaque': 'and so', 'etiam': 'even, also', 'nunc': 'now', 'timent': '3rd pl. of timeō: fear', 'lībertātem': 'acc. of lībertās: liberty',
      'clāmat': '3rd sg. of clāmō: shouts', 'erat': 'impf. 3rd sg. of sum: was', 'dux': 'leader (nom.)', 'bonus': 'good', 'rīdet': '3rd sg. of rīdeō: laughs', 'vērum': 'true: vērum est, it is true', 'est': 'is', 'mī': 'voc. of meus: my dear', 'quīnte': 'voc. of Quīntus',
      'memoriam': 'acc. of memoria: memory', 'tenēte': 'pl. imperative of teneō: keep!', 'lībertās': 'liberty (nom.)', 'sine': 'without (+ abl.)', 'lēgibus': 'abl. pl. of lēx: laws', 'virtūte': 'abl. of virtūs: virtue', 'hominum': 'gen. pl. of homō: of people', 'sunt': 'are'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What did Tarquin the Proud love?', options: ['Money and glory', 'The laws', 'His people', 'Liberty'], answer: 0, explain: 'nōn lēgēs sed pecūniam et glōriam amābat.' },
      { id: 'r2', type: 'mc', prompt: 'What did Brutus do?', options: ['He drove the king and his sons out', 'He became king', 'He wrote the laws', 'He fled to Greece'], answer: 0, explain: 'rēgem et fīliōs rēgis ex patriā fugābat.' },
      { id: 'r3', type: 'mc', prompt: 'What did the new state have instead of a king?', options: ['Laws and consuls', 'A dictator', 'Two kings', 'No government'], answer: 0, explain: 'nōn rēgem sed lēgēs et cōnsulēs.' },
      { id: 'r4', type: 'mc', prompt: 'What is Lucius’s lesson at the end?', options: ['Liberty needs laws, and laws need virtue', 'Kings are always bad', 'Brutus was a fool', 'Money is the source of liberty'], answer: 0, explain: 'lībertās sine lēgibus nōn est lībertās …' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Genitive plural of <span class="la">mīles</span>:', options: ['mīlitum', 'mīlitōrum', 'mīlitis', 'mīlitibus'], answer: 0, explain: 'Stem mīlit- + um.' },
      { id: 't2', type: 'mc', prompt: 'Accusative singular of <span class="la">pāx</span>:', options: ['pācem', 'pāxem', 'pācum', 'pāx'], answer: 0, explain: 'Stem pāc- + em.' },
      { id: 't3', type: 'mc', prompt: 'Which adjective form agrees with <span class="la">amōre</span> (abl.)?', options: ['magnō', 'magnā', 'magne', 'magnī'], answer: 0, explain: 'amor is masculine: ablative magnō.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Dux mīlit___ laudat.</span>', hint: 'the soldiers (acc. pl.)', answers: ['ēs', 'es'], full: 'Dux mīlitēs laudat.', explain: 'Accusative plural -ēs.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Hominēs pāc___ optant.</span>', hint: 'peace (acc.)', answers: ['em'], full: 'Hominēs pācem optant.', explain: 'Stem pāc- + em.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Frāter meus mīles est.', model: 'My brother is a soldier.', accepted: ['my brother is soldier', 'my brother is a soldier'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'The laws of the state are good.', model: 'Lēgēs cīvitātis bonae sunt.', accepted: ['lēgēs cīvitātis bonae sunt', 'lēgēs cīvitātis sunt bonae'] },
      { id: 't8', type: 'mc', prompt: 'Gender of <span class="la">ōrātiō, ōrātiōnis</span>:', options: ['feminine', 'masculine', 'neuter', 'common'], answer: 0, explain: 'Nouns in -tiō are feminine.' },
      { id: 't9', type: 'mc', prompt: 'In the Republic, <span class="la">rēx</span> was:', options: ['a word of abuse, opposed to lībertās', 'the title of the consuls', 'the title of the emperor', 'a priestly office only'], answer: 0, explain: 'Romans remembered the expulsion of the kings.' },
      { id: 't10', type: 'mc', prompt: 'English <em>-ty</em> in <em>liberty</em> comes from Latin:', options: ['-tās, -tātis', '-tūs', '-tor', '-tiō'], answer: 0, explain: 'lībertās, lībertātis.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">Omnia vincit Amor</span> is from:', options: ['Virgil, Eclogues 10', 'Cicero, Laelius', 'Caesar, Gallic War', 'Horace, Odes'], answer: 0, explain: 'Eclogues 10.69.' }
    ]
  },

  reference: [
    { title: 'Third declension (m./f.): rēx, rēgis m.', headers: ['', 'Singular', 'Plural'], rows: [['Nom.', 'rēx', 'rēgēs'], ['Gen.', 'rēgis', 'rēgum'], ['Dat.', 'rēgī', 'rēgibus'], ['Acc.', 'rēgem', 'rēgēs'], ['Abl.', 'rēge', 'rēgibus']] },
    { title: 'Nominative and stem', headers: ['Nominative', 'Genitive', 'Stem'], rows: [['rēx', 'rēgis', 'rēg-'], ['dux', 'ducis', 'duc-'], ['virtūs', 'virtūtis', 'virtūt-'], ['cīvitās', 'cīvitātis', 'cīvitāt-'], ['homō', 'hominis', 'homin-'], ['ōrātiō', 'ōrātiōnis', 'ōrātiōn-'], ['amor', 'amōris', 'amōr-'], ['pater', 'patris', 'patr-'], ['mīles', 'mīlitis', 'mīlit-']] },
    { title: 'Look-alike endings', headers: ['Ending', '3rd decl.', '1st/2nd decl.'], rows: [['-ī', 'dat. sg.', 'gen. sg. / nom. pl.'], ['-e', 'abl. sg.', 'voc. sg.'], ['-um', 'gen. pl.', 'acc. sg.'], ['-is', 'gen. sg.', 'dat./abl. pl.']] }
  ]
});
