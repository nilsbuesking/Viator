/*
 * Old English — Lecture VIII: verse. The long line, alliteration, stress and Sievers’ five types,
 * compounds and kennings, variation and formulas.
 * Reading: Beowulf 194–228 (the voyage to Denmark), after Fr. Klaeber (1922), as transcribed online without
 * length marks (sources/beowulf-klaeber-1922-lines-1-2601.txt), with four corrections; see CONTENT-CHECKS.md.
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-08',
  number: 8,
  title: 'The voyage',
  subtitle: 'Old English verse: alliteration, half-lines, kennings and formulas; Beowulf 194–228',
  minutes: 60,

  intro: `
    <p>In Geatland, in what is now southern Sweden, Hygelac’s thegn hears what Grendel is doing. He orders a ship, chooses fourteen companions, and sails to Denmark in a day. The poet does not yet tell us his name; we learn it only at line 343.</p>
    <p>This lecture is about how the poem is made. Old English verse has no rhyme and no fixed number of syllables. It is built on <strong>stress</strong> and <strong>alliteration</strong>: each line has two halves with two strong stresses each, linked by words beginning with the same sound. German knows the principle from fixed pairs such as <em>Kind und Kegel, Haus und Hof, Mann und Maus</em>, and from the Old High German <em>Hildebrandslied</em>, which uses the same metre.</p>
    <p>The voyage is a showpiece of the poetic vocabulary. In twenty lines the ship is called <span class="la">ȳðlida</span>, <span class="la">sundwudu</span>, <span class="la">flota</span>, <span class="la">bāt</span>, <span class="la">naca</span>, <span class="la">wudu bundenne</span>, <span class="la">flota fāmīheals</span>, <span class="la">wundenstefna</span> and <span class="la">sǣwudu</span>. That richness of synonyms, mostly compounds, is what makes verse hard at first, and the vocabulary here concentrates on it.</p>
  `,

  background: [
    {
      title: 'The Geats and the sea',
      html: `
        <p>The Geats (<span class="la">Gēatas</span>, also called <span class="la">Wederas</span> in our passage) are usually identified with the Götar of southern Sweden (Västergötland and Östergötland); an older view placed them in Jutland, and a few scholars still argue for it. Their king Hygelac is the only figure in the poem named in a near-contemporary historical source: Gregory of Tours, writing in the late sixth century, records a raid by a king <em>Chlochilaicus</em> on the lower Rhine, around 520, in which he was killed.</p>
        <p>The crossing takes about a day (<span class="la">ymb āntīd ōþres dōgores</span>, “at the corresponding time on the second day”, if that is what <span class="la">āntīd</span> means). The poet is interested in the ship and the sea, not in navigation: there is no oar or sail in the passage, only wind, foam and a bird-like prow. Sailing ships with a single square sail were in use in Scandinavia by the eighth century; whether the poet imagined one is not something the text tells us.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Gokstadskipet1.jpg/960px-Gokstadskipet1.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Gokstadskipet1.jpg/500px-Gokstadskipet1.jpg|https://upload.wikimedia.org/wikipedia/commons/5/53/Gokstadskipet1.jpg" alt="A long clinker-built wooden ship with a high curved prow, displayed in a museum hall"><figcaption>The Gokstad ship, built around 890 and buried in a Norwegian mound (Viking Ship Museum, Oslo). About three centuries later than the events the poem describes (the date of the poem itself is disputed), but the best surviving picture of a <span class="la">wundenstefna</span>. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Gokstadskipet1.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Oral or written?',
      html: `
        <p>Phrases recur across Old English poems in the same metrical slot: <span class="la">Gewāt þā</span> to begin a journey, <span class="la">mǣrne þēoden</span>, <span class="la">Higelāces þegn</span>, <span class="la">þæt wæs gōd cyning</span>. In 1953 Francis P. Magoun, applying the work of Milman Parry and Albert Lord on Homer and South Slavic singers, argued that such <strong>formulas</strong> prove Old English poetry was composed orally, in performance. Larry Benson replied (1966) that clearly literate poets, translating from Latin, use formulas just as densely.</p>
        <p>The usual view now is that the formulaic style comes from an oral tradition, but that the poems we have were written down, and some (Cynewulf’s, for instance, which carry runic signatures) were certainly composed in writing. For Beowulf the question is open. What is not in doubt is that the style was meant to be heard: alliteration is a pattern for the ear.</p>
      `
    },
    {
      title: 'Kennings and the poet’s vocabulary',
      html: `
        <p>The term <strong>kenning</strong> is borrowed from the Old Norse poetics of Snorri Sturluson (13th century). In the strict sense it is a two-part metaphor that names something by what it is not: <span class="la">hronrād</span> “whale-road” and <span class="la">swanrād</span> “swan-road” for the sea, <span class="la">bānhūs</span> “bone-house” for the body. Many Old English poetic compounds are simpler descriptions (<span class="la">sǣwudu</span> “sea-wood”, <span class="la">wundenstefna</span> “the one with a curved prow”), and scholars disagree on whether to call these kennings at all; Arthur Brodeur (1959) used the stricter definition.</p>
        <p>Much of this vocabulary never occurs in prose: <span class="la">secg, beorn, guma, hæleð</span> all mean “man, warrior” and are found almost only in verse, because the poet needs a word for “man” beginning with s, b, g or h, as the alliteration demands. German keeps a few as relics: <em>Bräutigam</em> contains <span class="la">guma</span>.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Gewāt þā ofer wǣgholm winde gefȳsed<br>flota fāmīheals fugle gelīcost</p>
    <p>“Then over the wave-sea, driven by the wind, went the foamy-necked ship, most like a bird.” <em>Beowulf</em> 217–218, after Klaeber, with length marks added for this course.</p>
    <p>The first line alliterates on <strong>w</strong> (<span class="la">wǣgholm, winde</span>), the second on <strong>f</strong> (<span class="la">flota, fāmīheals, fugle</span>). The subject comes only in the second line, after the verb and the circumstances, the order that the alliteration allowed. The comparison with a bird is one of only a handful of similes in the poem.</p>
  `,

  pronunciation: `
    <p>Reading verse aloud is the best way to learn it. Stress always falls on the first syllable of a word, except on the prefix <span class="la">ge-</span> and most verbal prefixes (<span class="la">ge-<strong>frægn</strong>, be-<strong>gēaton</strong></span>), as in German <em>ge<strong>fun</strong>den, be<strong>kom</strong>men</em>.</p>
    <ul>
      <li>Read each half-line as a unit, with a short pause between the halves.</li>
      <li>Make the alliterating sounds clear: <span class="la"><strong>fl</strong>ota <strong>f</strong>āmīheals <strong>f</strong>ugle gelīcost</span>.</li>
      <li><strong>sc, sp, st</strong> count as single sounds and alliterate only with themselves: <span class="la"><strong>st</strong>efn <strong>st</strong>igon … <strong>st</strong>rēamas</span>.</li>
      <li>Any vowel alliterates with any other: <span class="la"><strong>e</strong>oletes <strong>æ</strong>t <strong>e</strong>nde … <strong>u</strong>p</span>. The glottal stop before an initial vowel, as in German <em>ver|<strong>ei</strong>sen</em>, may be the reason.</li>
      <li>Palatal and velar <span class="la">g</span> alliterate with each other: <span class="la"><strong>G</strong>ār-Dena … <strong>g</strong>ēardagum</span> (Beowulf 1).</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. The long line',
      html: `
        <p>Every line has two <strong>half-lines</strong> (the a-verse and the b-verse) divided by a pause (caesura). Each half-line has two <strong>lifts</strong> (strongly stressed syllables) and a varying number of <strong>dips</strong> (unstressed syllables).</p>
        <p class="la big">Gewāt þā ofer <strong>w</strong>ǣgholm &nbsp;|&nbsp; <strong>w</strong>inde gefȳsed</p>
        <p>The rules of alliteration:</p>
        <ul>
          <li>The first lift of the b-verse, the <strong>head-stave</strong> (German <em>Hauptstab</em>), always alliterates. It sets the sound for the line.</li>
          <li>One or both lifts of the a-verse alliterate with it.</li>
          <li>The second lift of the b-verse normally does <strong>not</strong> alliterate.</li>
        </ul>
        <p>So the possible patterns are <strong>aa | ax</strong> (<span class="la"><strong>fl</strong>ota <strong>f</strong>āmīheals | <strong>f</strong>ugle gelīcost</span>) or <strong>ax | ax</strong> and <strong>xa | ax</strong>. Nouns and adjectives take the alliteration before verbs, and verbs before adverbs and pronouns: the most important words carry the sound.</p>
      `
    },
    {
      title: '2. Sievers’ five types',
      html: `
        <p>Eduard Sievers (1885, 1893) classified the half-lines of Old English verse into five basic patterns of lifts (/), half-lifts (\\) and dips (x). His system is a description of what poets did, not a rule they knew; later metrists (Bliss, Russom, Fulk) have refined and argued about it, but the letters A to E are still universal.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Type</th><th>Pattern</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>A</td><td>/ x | / x</td><td class="la">secgas bǣron (213b)</td></tr>
            <tr><td>B</td><td>x / | x /</td><td class="la">ond Hālga til (61b)</td></tr>
            <tr><td>C</td><td>x / | / x</td><td class="la">on stefn stigon (212a)</td></tr>
            <tr><td>D</td><td>/ | / \\ x</td><td class="la">weard Scildinga (229b)</td></tr>
            <tr><td>E</td><td>/ \\ x | /</td><td>a compound followed by a lift (the rarest type)</td></tr>
          </tbody>
        </table></div>
        <p>Type A, the “falling” pattern, is by far the most common, as in German verse. Two refinements:</p>
        <ul>
          <li><strong>Resolution:</strong> a short stressed syllable plus the following syllable count together as one lift. In <span class="la">on stefn stigon</span> the short <span class="la">sti-</span> and <span class="la">-gon</span> make one lift.</li>
          <li><strong>Anacrusis:</strong> unstressed syllables may stand before the first lift: <span class="la">ge-</span> in <span class="la">gewāt</span> does not count.</li>
        </ul>
      `
    },
    {
      title: '3. Compounds and kennings',
      html: `
        <p>Poetry builds compounds freely, as German does: <span class="la">wǣg-holm</span> “wave-sea”, <span class="la">brim-clif</span> “sea-cliff”, <span class="la">gūð-searo</span> “war-gear”, <span class="la">lagu-cræftig</span> “sea-skilled”. The first part defines the second, as in German <em>Seeklippe</em>; the stress falls on the first part, and the second can take a half-stress.</p>
        <p>To read a compound, take it apart and gloss each half. Common first elements in verse:</p>
        <ul>
          <li><span class="la">gūð-, hilde-, wīg-</span> “war”: <span class="la">gūðcyning, hildedēor</span></li>
          <li><span class="la">brim-, sǣ-, lagu-, holm-, ȳð-, sund-</span> “sea, wave”</li>
          <li><span class="la">hige-, mōd-, ferhð-</span> “mind, heart”: <span class="la">higerōf</span> “brave in mind”</li>
          <li><span class="la">medu-, bēor-, wīn-</span> “drink, feast”: <span class="la">meduheall</span></li>
        </ul>
        <p>A <strong>kenning</strong> in the strict sense is a metaphor: <span class="la">swanrād</span> (200) is not a road, and the swan only tells you which road is meant. A <strong>heiti</strong> is a plain poetic synonym such as <span class="la">secg</span> or <span class="la">flota</span>.</p>
      `
    },
    {
      title: '4. Variation',
      html: `
        <p>The poet says the same thing again in different words, often in apposition, and the parallel phrases may be far apart. This is <strong>variation</strong>, the most characteristic device of Old English verse:</p>
        <p class="la">Hēt him ȳðlidan / gōdne gegyrwan; cwæð, hē <strong>gūðcyning</strong> / ofer swanrāde sēcean wolde, / <strong>mǣrne þēoden</strong></p>
        <p><span class="la">gūðcyning</span> and <span class="la">mǣrne þēoden</span> are the same person (Hrothgar), both in the accusative. The rule for reading: when a noun phrase turns up without an obvious role in the sentence, look for an earlier one in the same case; it is probably a variation of it. Lecture II met the same device in the opening lines.</p>
        <p>Variation also explains much of the word order. A sentence can run on over several lines (<strong>enjambment</strong>): it often ends in the middle of a line, and a new sentence starts in the b-verse, as at 198 (<span class="la">æþele ond ēacen. Hēt him …</span>).</p>
      `
    }
  ],

  vocab: [
    { id: 'secg', head: 'secg', la: 'secg, secges', g: 'm', pos: 'noun, strong', en: 'man, warrior (poetic)', note: 'Verse only. Not the same word as secg “sedge”.' },
    { id: 'beorn', head: 'beorn', la: 'beorn, beornes', g: 'm', pos: 'noun, strong', en: 'hero, warrior (poetic)', note: 'Related to Old Norse bjǫrn “bear”, perhaps originally “bear-warrior”; a guess.' },
    { id: 'cempa', head: 'cempa', la: 'cempa, cempan', g: 'm', pos: 'noun, weak', en: 'warrior, champion', note: 'German Kämpe, kämpfen.' },
    { id: 'ceorl', head: 'ceorl', la: 'ceorl, ceorles', g: 'm', pos: 'noun, strong', en: 'man; freeman (not noble)', note: 'German Kerl; English churl. In verse also “man” in general.' },
    { id: 'flota', head: 'flota', la: 'flota, flotan', g: 'm', pos: 'noun, weak', en: 'ship (“floater”); seafarer', note: 'Verb flēotan, German fließen; English fleet.' },
    { id: 'bat', head: 'bāt', la: 'bāt, bātes', g: 'm', pos: 'noun, strong', en: 'boat', note: 'German Boot is a later loan from Low German or Dutch.' },
    { id: 'stefn', head: 'stefn', la: 'stefn, stefnes', g: 'm', pos: 'noun, strong', en: 'prow, stem of a ship', note: 'German (Vorder)steven. A different word from stefn “voice”.' },
    { id: 'sund', head: 'sund', la: 'sund, sundes', g: 'n', pos: 'noun, strong', en: 'sea, strait; swimming', note: 'German Sund (Öresund); English sound.' },
    { id: 'wudu', head: 'wudu', la: 'wudu, wuda', g: 'm', pos: 'noun, strong', en: 'wood, forest; (in verse) ship', note: 'u-stem noun, like sunu.' },
    { id: 'waeg', head: 'wǣg', la: 'wǣg, wǣges', g: 'm', pos: 'noun, strong', en: 'wave, sea', note: 'German Woge; verb wegan.' },
    { id: 'leode', head: 'lēode', la: 'lēode, lēoda (pl.)', g: 'm', pos: 'noun, plural', en: 'people, nation', note: 'German Leute.' },
    { id: 'snotor', head: 'snotor', la: 'snotor', pos: 'adjective', en: 'wise, prudent', note: 'Not in German; Gothic snutrs.' },
    { id: 'gearo', head: 'gearo', la: 'gearo, gearwes', pos: 'adjective', en: 'ready, prepared', note: 'German gar (“cooked”, “ganz und gar”); verb gegyrwan, “prepare”.' },
    { id: 'eathe', head: 'ēaðe', la: 'ēaðe; ēað', pos: 'adverb', en: 'easily', note: 'Compare ēaðfynde, “easy to find” (Lecture VI).' },
    { id: 'stigan', head: 'stīgan', la: 'stīgan; stāh, stigon; stigen', pos: 'verb, strong (I)', en: 'climb, go up or down', note: 'German steigen, stieg; English stile, stirrup.' },
    { id: 'wisian', head: 'wīsian', la: 'wīsian; wīsode', pos: 'verb, weak (2)', en: 'guide, show the way', note: 'German weisen.' },
    { id: 'gegyrwan', head: 'gegyrwan', la: 'gegyrwan; gegyrede', pos: 'verb, weak (1)', en: 'prepare, equip, dress', note: 'Related to gearo; German gerben once meant “make ready”.' },
    { id: 'thancian', head: 'þancian', la: 'þancian; þancode (+ dat.)', pos: 'verb, weak (2)', en: 'thank', note: 'German danken + dative: Gode þancedon, “they thanked God”.' },
    { id: 'sith', head: 'sīð', la: 'sīð, sīðes', g: 'm', pos: 'noun, strong', en: 'journey, voyage; time, occasion', note: 'wilsīð “desired voyage” (line 216); forman sīðe “for the first time”. gesīð is a companion on the way (Lecture II); German Gesinde is related.' }
  ],

  grammarCards: [
    { id: 'oe8-line', front: 'The Old English long line', back: 'Two half-lines, each with two lifts; joined by alliteration' },
    { id: 'oe8-head', front: 'Head-stave (Hauptstab)', back: 'The first lift of the b-verse; it always alliterates' },
    { id: 'oe8-fourth', front: 'Which lift normally does not alliterate?', back: 'The second lift of the b-verse' },
    { id: 'oe8-vowels', front: 'Vowel alliteration', back: 'Any vowel alliterates with any other' },
    { id: 'oe8-sc', front: 'sc, sp, st in alliteration', back: 'Each alliterates only with itself' },
    { id: 'oe8-g', front: 'Palatal and velar g', back: 'Alliterate with each other (Gār-Dena … gēardagum)' },
    { id: 'oe8-order', front: 'Which words take the alliteration first?', back: 'Nouns and adjectives, then verbs, then adverbs and pronouns' },
    { id: 'oe8-typeA', front: 'Sievers type A', back: '/ x | / x — the most common: secgas bǣron' },
    { id: 'oe8-types', front: 'Sievers types B, C, D, E', back: 'B x/x/; C x//x; D //\\x; E /\\x/' },
    { id: 'oe8-res', front: 'Resolution', back: 'A short stressed syllable + the next syllable count as one lift' },
    { id: 'oe8-kenning', front: 'Kenning (strict sense)', back: 'A compound metaphor: hronrād, swanrād = sea; bānhūs = body' },
    { id: 'oe8-variation', front: 'Variation', back: 'Restating a noun in other words, in the same case: gūðcyning … mǣrne þēoden' },
    { id: 'oe8-ship', front: 'Words for “ship” in Beowulf 194–228', back: 'ȳðlida, sundwudu, flota, bāt, naca, wudu, wundenstefna, sǣwudu' },
    { id: 'oe8-man', front: 'Poetic words for “man, warrior”', back: 'secg, beorn, guma, hæleð, rinc, wer' },
    { id: 'oe8-formula', front: 'Magoun (1953) vs. Benson (1966)', back: 'Formulas prove oral composition / literate poets use formulas too' },
    { id: 'oe8-quote', front: 'flota fāmīheals fugle gelīcost', back: 'the foamy-necked ship, most like a bird (Beowulf 218)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Which lift of a long line always alliterates?', options: ['The first lift of the b-verse', 'The last lift of the line', 'The first word of the line', 'Every lift'], answer: 0, explain: 'The head-stave.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">Gewāt þā ofer wǣgholm | winde gefȳsed</span> alliterates on:', options: ['w', 'g', 'þ', 'f'], answer: 0, explain: 'wǣgholm, winde. ge- is unstressed.' },
    { id: 'e3', type: 'mc', prompt: 'Does <span class="la">st</span> alliterate with <span class="la">s</span>?', options: ['No, only with st', 'Yes, always', 'Only in the a-verse', 'Only before vowels'], answer: 0, explain: 'sc, sp, st alliterate only with themselves.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">swanrād</span> “swan-road” means:', options: ['the sea', 'a river', 'a lake', 'the sky'], answer: 0, explain: 'A kenning.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">fīftȳna sum</span> means:', options: ['one of fifteen (with fourteen others)', 'some fifteen', 'fifteen times', 'the fifteenth'], answer: 0, explain: 'An idiom: “one of fifteen”.' },
    { id: 'e6', type: 'mc', prompt: 'Who is <span class="la">Higelāces þegn</span>?', options: ['Beowulf', 'Hrothgar', 'Grendel', 'Hygelac'], answer: 0, explain: 'The poet withholds his name until line 343.' },
    { id: 'e7', type: 'mc', prompt: 'Type A has the pattern:', options: ['/ x | / x', 'x / | x /', 'x / | / x', '/ | / \\ x'], answer: 0, explain: 'Falling: secgas bǣron.' },
    { id: 'e8', type: 'mc', prompt: 'How long does the crossing take?', options: ['About a day', 'A week', 'One night', 'Twelve days'], answer: 0, explain: 'ymb āntīd ōþres dōgores.' },
    { id: 'e9', type: 'match', prompt: 'Match the poetic words for “ship” to their literal meanings.', pairs: [
      ['ȳðlida', 'wave-traveller'], ['sǣwudu', 'sea-wood'], ['wundenstefna', 'curved-prowed one'], ['flota', 'floater'], ['fāmīheals', 'foamy-necked']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the compound elements to their meaning.', pairs: [
      ['gūð-', 'war'], ['brim-', 'sea'], ['hige-', 'mind'], ['medu-', 'mead'], ['bān-', 'bone']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Gewāt þā ofer ___ winde gefȳsed</span>', hint: 'wave-sea (alliterates on w)', answers: ['wǣgholm', 'wægholm', 'waegholm'], full: 'Gewāt þā ofer wǣgholm winde gefȳsed', explain: 'Beowulf 217.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">flota fāmīheals ___ gelīcost</span>', hint: 'to a bird (dat.; alliterates on f)', answers: ['fugle'], full: 'flota fāmīheals fugle gelīcost', explain: 'gelīc takes the dative.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">on stefn stigon, ___ wundon</span>', hint: 'currents (alliterates on st)', answers: ['strēamas', 'streamas'], full: 'on stefn stigon, strēamas wundon', explain: 'st alliterates only with st.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Gode ___ þæs þe him ȳþlāde ēaðe wurdon.</span>', hint: 'they thanked', answers: ['þancedon', 'ðancedon', 'thancedon', 'þancodon'], full: 'Gode þancedon þæs þe him ȳþlāde ēaðe wurdon.', explain: 'þancian + dative, like danken.' },
    { id: 'e15', type: 'paradigm', prompt: 'For each line give the alliterating sound and the head-stave.', headers: ['Sound', 'Head-stave'], rows: [
      { label: 'Gewāt þā ofer wǣgholm | winde gefȳsed', answers: ['w', 'winde'] },
      { label: 'flota fāmīheals | fugle gelīcost', answers: ['f', 'fugle'] },
      { label: 'on stefn stigon | strēamas wundon', answers: ['st', 'strēamas|streamas'] },
      { label: 'eoletes æt ende | Þanon up hraðe', answers: ['vowel|vowels|any vowel', 'up'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Kennings and poetic compounds: give the literal meaning and what is meant.', headers: ['Literally', 'Means'], rows: [
      { label: 'hronrād', answers: ['whale-road|whale road|whaleroad', 'sea|the sea'] },
      { label: 'swanrād', answers: ['swan-road|swan road|swanroad', 'sea|the sea'] },
      { label: 'bānhūs', answers: ['bone-house|bone house|bonehouse', 'body|the body'] },
      { label: 'ȳðlida', answers: ['wave-traveller|wave traveller|wave-goer|wave-farer', 'ship|a ship'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the English translation in order.', source: 'Beornas on stefn stigon.', tokens: ['The warriors', 'climbed', 'onto', 'the prow'], explain: 'stīgan, stāh, stigon.' },
    { id: 'e18', type: 'translate', dir: 'oe-en', source: 'Se flota wæs on ȳðum.', model: 'The ship was on the waves.', accepted: ['ship was on waves', 'boat was on waves', 'ship was on the waves', 'the ship was on the waves'] },
    { id: 'e19', type: 'translate', dir: 'oe-en', source: 'Hīe Gode þancedon.', model: 'They thanked God.', accepted: ['they thanked god', 'they gave thanks to god'] },
    { id: 'e20', type: 'translate', dir: 'en-oe', source: 'the wise men (nom.; snotor, ceorl)', model: 'þā snoteran ceorlas', accepted: ['þā snoteran ceorlas', 'þā snotran ceorlas', 'snotere ceorlas'], explain: 'After þā the adjective is weak, plural -an. Ceorl (English churl, German Kerl) has the masculine plural -as.' },
    { id: 'e21', type: 'translate', dir: 'en-oe', source: 'they climbed (stīgan)', model: 'hīe stigon', accepted: ['hīe stigon'], explain: 'Class I: stīgan, stāh, stigon, gestigen, like German steigen, stiegen.' },
    { id: 'e22', type: 'mc', prompt: 'Magoun (1953) argued that formulas show Old English poetry was:', options: ['composed orally', 'translated from Latin', 'written by monks only', 'Scandinavian in origin'], answer: 0, explain: 'Benson (1966) objected that literate poets use formulas too.' },
    { id: 'e23', type: 'mc', prompt: '<span class="la">gūðcyning … mǣrne þēoden</span> (199–201) is an example of:', options: ['variation', 'rhyme', 'a kenning', 'enjambment only'], answer: 0, explain: 'Two names for Hrothgar in the same case.' }
  ],

  reading: {
    title: 'Beowulf 194–228',
    note: 'Authentic text: Klaeber’s edition (1922), lines 194–228. The normalised view adds length marks for this course; “Klaeber, unmarked” shows the text as transcribed online, with four slips of the transcription corrected (see CONTENT-CHECKS). Tap any word.',
    diplomaticLabel: 'Klaeber, unmarked',
    diplomaticNote: 'Klaeber’s text as transcribed online, without length marks.',
    text: 'Þæt fram hām gefrægn Higelāces þegn,\ngōd mid Gēatum, Grendles dǣda;\nsē wæs moncynnes mægenes strengest\non þǣm dæge þysses līfes,\næþele ond ēacen. Hēt him ȳðlidan\ngōdne gegyrwan; cwæð, hē gūðcyning\nofer swanrāde sēcean wolde,\nmǣrne þēoden, þā him wæs manna þearf.\nÐone sīðfæt him snotere ceorlas\nlȳthwōn lōgon, þēah hē him lēof wǣre;\nhwetton higerōfne, hǣl scēawedon.\nHæfde se gōda Gēata lēoda\ncempan gecorone þāra þe hē cēnoste\nfindan mihte; fīftȳna sum\nsundwudu sōhte, secg wīsade,\nlagucræftig mon landgemyrcu.\nFyrst forð gewāt; flota wæs on ȳðum,\nbāt under beorge. Beornas gearwe\non stefn stigon, — strēamas wundon,\nsund wið sande; secgas bǣron\non bearm nacan beorhte frætwe,\ngūðsearo geatolīc; guman ūt scufon,\nweras on wilsīð, wudu bundenne.\nGewāt þā ofer wǣgholm winde gefȳsed\nflota fāmīheals fugle gelīcost,\noð þæt ymb āntīd ōþres dōgores\nwundenstefna gewaden hæfde,\nþæt ðā līðende land gesāwon,\nbrimclifu blīcan, beorgas stēape,\nsīde sǣnæssas; þā wæs sund liden,\neoletes æt ende. Þanon up hraðe\nWedera lēode on wang stigon,\nsǣwudu sǣldon, — syrcan hrysedon,\ngūðgewǣdo; Gode þancedon\nþæs þe him ȳþlāde ēaðe wurdon.',
    diplomatic: 'Þæt fram ham gefrægn Higelaces þegn,\ngod mid Geatum, Grendles dæda;\nse wæs moncynnes mægenes strengest\non þæm dæge þysses lifes,\næþele ond eacen. Het him yðlidan\ngodne gegyrwan; cwæð, he guðcyning\nofer swanrade secean wolde,\nmærne þeoden, þa him wæs manna þearf.\nÐone siðfæt him snotere ceorlas\nlythwon logon, þeah he him leof wære;\nhwetton higerofne, hæl sceawedon.\nHæfde se goda Geata leoda\ncempan gecorone þara þe he cenoste\nfindan mihte; fiftyna sum\nsundwudu sohte, secg wisade,\nlagucræftig mon landgemyrcu.\nFyrst forð gewat; flota wæs on yðum,\nbat under beorge. Beornas gearwe\non stefn stigon, — streamas wundon,\nsund wið sande; secgas bæron\non bearm nacan beorhte frætwe,\nguðsearo geatolic; guman ut scufon,\nweras on wilsið, wudu bundenne.\nGewat þa ofer wægholm winde gefysed\nflota famiheals fugle gelicost,\noð þæt ymb antid oþres dogores\nwundenstefna gewaden hæfde,\nþæt ða liðende land gesawon,\nbrimclifu blican, beorgas steape,\nside sænæssas; þa wæs sund liden,\neoletes æt ende. Þanon up hraðe\nWedera leode on wang stigon,\nsæwudu sældon, — syrcan hrysedon,\nguðgewædo; Gode þancedon\nþæs þe him yþlade eaðe wurdon.',
    translations: [
      { label: 'English translation', text: 'Hygelac’s thegn, a good man among the Geats, heard of that at home, of Grendel’s deeds; he was the strongest of mankind in might in the days of this life, noble and mighty. He ordered a good wave-traveller to be made ready for him; he said that he would seek the war-king over the swan-road, the famous prince, since he had need of men. The wise men hardly blamed him for that journey, though he was dear to them; they urged on the brave-minded one and looked at the omens. The good man had chosen warriors from the people of the Geats, the boldest he could find; one of fifteen, he went to the sea-wood; a man skilled in the sea led the way to the landmarks. Time went on; the ship was on the waves, the boat below the cliff. The warriors, ready, climbed onto the prow; the currents eddied, sea against sand; the men carried bright treasures into the ship’s hold, splendid war-gear; the men pushed off the joined wood, men on a voyage they desired. Then over the wave-sea, driven by the wind, went the foamy-necked ship, most like a bird, until at the expected time on the second day the curved-prowed one had travelled so far that the seafarers saw land, the sea-cliffs shining, steep hills, broad headlands; then the sea was crossed, the voyage at an end. From there the people of the Weders climbed quickly onto the shore, moored the sea-wood; their mail-shirts rattled, their war-garments; they thanked God that the sea-ways had been easy for them.' },
      { label: 'German translation', text: 'Das hörte daheim Hygelacs Gefolgsmann, ein Tüchtiger unter den Geaten, von Grendels Taten; er war an Kraft der Stärkste der Menschen in den Tagen dieses Lebens, edel und gewaltig. Er ließ sich einen guten Wellenfahrer rüsten; er sagte, er wolle über die Schwanenstraße den Kriegskönig aufsuchen, den berühmten Fürsten, da er Männer brauchte. Diese Fahrt tadelten ihm die klugen Männer kaum, obwohl er ihnen lieb war; sie spornten den Mutigen an und sahen nach den Vorzeichen. Der Tapfere hatte aus dem Volk der Geaten Kämpfer gewählt, die kühnsten, die er finden konnte; selbfünfzehnt suchte er das Seeholz auf; ein seekundiger Mann wies den Weg zu den Landmarken. Die Zeit verging; das Schiff war auf den Wellen, das Boot unter dem Steilhang. Die Krieger stiegen bereit auf den Steven; die Strömung wirbelte, Wasser gegen Sand; die Männer trugen glänzende Schätze in den Schiffsbauch, prächtiges Kriegsgerät; die Männer stießen das gefügte Holz ab, Männer auf der ersehnten Fahrt. Da fuhr über die Wogensee, vom Wind getrieben, das Schiff mit dem Schaumhals, einem Vogel sehr ähnlich, bis zur erwarteten Zeit am zweiten Tag das Schiff mit dem gewundenen Steven so weit gefahren war, dass die Seefahrer Land sahen, die Meeresklippen glänzen, steile Berge, weite Landspitzen; da war die See durchquert, die Fahrt zu Ende. Von dort stiegen die Leute der Wedern rasch an Land, machten das Seeholz fest; die Panzerhemden klirrten, die Kriegsgewänder; sie dankten Gott, dass ihnen die Seewege leicht geworden waren.' }
    ],
    notes: [
      { ref: 'Þæt fram hām gefrægn Higelāces þegn', html: '<span class="la">Þæt</span> looks forward to <span class="la">Grendles dǣda</span> in the next line: variation. <span class="la">fram hām</span>: “(being) away at home”, i.e. in Geatland. The hero is not yet named.' },
      { ref: 'sē wæs moncynnes mægenes strengest', html: '<span class="la">mægenes</span>: genitive of respect, “strongest in strength”; <span class="la">moncynnes</span>: partitive, “of mankind”.' },
      { ref: 'Hēt him ȳðlidan gōdne gegyrwan', html: '<span class="la">hātan</span> + infinitive: “ordered (someone) to prepare”, like German <em>ließ … rüsten</em>.' },
      { ref: 'cwæð, hē gūðcyning … sēcean wolde', html: 'Indirect speech without <span class="la">þæt</span>. <span class="la">gūðcyning</span> and <span class="la">mǣrne þēoden</span> are both Hrothgar.' },
      { ref: 'lȳthwōn lōgon', html: 'Understatement (litotes): “blamed little”, i.e. did not blame at all, perhaps even approved.' },
      { ref: 'hǣl scēawedon', html: '“Looked at the omens”. Tacitus (<em>Germania</em> 10) describes Germanic peoples consulting lots and signs before an enterprise; whether the poet had a specific practice in mind is not known.' },
      { ref: 'fīftȳna sum', html: '“One of fifteen”: <span class="la">sum</span> with a genitive numeral means “with … others”, like German <em>selbfünfzehnt</em>.' },
      { ref: 'Fyrst forð gewāt', html: '“Time went forth”, time passed. The same verb <span class="la">gewītan</span> is then used of the ship (217): a formula of departure.' },
      { ref: 'ymb āntīd ōþres dōgores', html: 'A crux: <span class="la">āntīd</span> occurs only here. Interpretations include “at the same hour on the next day” and “in due time”; some editors emend the word.' },
      { ref: 'eoletes æt ende', html: 'Another word found only here; “voyage” is a guess from the context. Its origin is unknown.' },
      { ref: 'syrcan hrysedon', html: 'Our online transcription reads <span class="la">hyrsedon</span>; Klaeber prints <span class="la">hrysedon</span>, “rattled”, which we restore.' },
      { ref: 'þæs þe him ȳþlāde ēaðe wurdon', html: '<span class="la">þæs þe</span> “for this, that”: “because”. <span class="la">ēaðe</span> is an adjective here, “easy”.' }
    ],
    glosses: {
      'bearm': 'lap, bosom; on bearm nacan: into the ship’s hold', 'beorgas': 'hills, cliffs (nom. pl. of beorg; German Berg)', 'beorge': 'hill, cliff (dat.); under beorge: below the cliff', 'beorhte': 'bright, shining (acc. pl.)', 'beornas': 'warriors, men (nom. pl. of beorn, poetic)', 'blīcan': 'shine, gleam (German bleich, blicken)',
      'brimclifu': 'sea-cliffs (acc. pl. of brimclif)', 'bundenne': 'bound, joined (past part. of bindan, acc. m.); wudu bundenne: the joined wood, the ship', 'bāt': 'boat', 'bǣron': 'carried (pret. pl. of beran)', 'cempan': 'warriors (acc. pl. of cempa; German Kämpe)', 'ceorlas': 'men (nom. pl. of ceorl; here wise elders)',
      'cwæð': 'said (pret. of cweðan)', 'cēnoste': 'boldest (superlative of cēne, acc. pl.; German kühn)', 'dæge': 'day (dat.)', 'dōgores': 'of the day (gen. of dōgor)', 'dǣda': 'deeds (acc. pl. of dǣd)', 'ende': 'end (dat.)',
      'eoletes': 'of the voyage (?) (gen. of eolet; found only here, meaning uncertain)', 'findan': 'find', 'flota': 'ship, floater (weak m.)', 'forð': 'forth, on', 'fram': 'from', 'frætwe': 'treasures, ornaments, war-gear (acc. pl.)',
      'fugle': 'to a bird (dat. of fugol; German Vogel)', 'fyrst': 'time, interval', 'fāmīheals': 'foamy-necked', 'fīftȳna': 'of fifteen (gen.); fīftȳna sum: one of fifteen, with fourteen others', 'gearwe': 'ready (nom. pl. of gearo; German gar)', 'geatolīc': 'splendid, stately',
      'gecorone': 'chosen (past part. of cēosan, acc. pl.)', 'gefrægn': 'heard of, learnt of (pret. of gefrignan)', 'gefȳsed': 'driven, hastened (past part. of fȳsan)', 'gegyrwan': 'prepare, equip (weak I)', 'gelīcost': 'most like (superlative of gelīc + dat.)', 'gesāwon': 'saw (pret. pl. of gesēon)',
      'gewaden': 'travelled, gone (past part. of gewadan, strong VI; German waten)', 'gewāt': 'went, departed (pret. of gewītan); fyrst forð gewāt: time passed', 'gode': 'God (dat.)', 'grendles': 'Grendel’s', 'guman': 'men (nom. pl. of guma)', 'gēata': 'of the Geats (gen. pl.)',
      'gēatum': 'among the Geats (dat. pl.)', 'gōd': 'good', 'gōda': 'good (weak nom.; se gōda: the good one, Beowulf)', 'gōdne': 'good (strong acc. m.)', 'gūðcyning': 'war-king (acc.; here Hrothgar)', 'gūðgewǣdo': 'war-garments (acc. pl.)',
      'gūðsearo': 'war-gear, armour (acc. pl.)', 'higelāces': 'Hygelac’s (gen.; Hygelac, king of the Geats)', 'higerōfne': 'the brave-minded one (acc. m.; Beowulf)', 'him': 'him, himself; them (dat.)', 'hraðe': 'quickly', 'hrysedon': 'rattled, shook (pret. pl. of hrysian)',
      'hwetton': 'urged on, encouraged (pret. pl. of hwettan; German wetzen)', 'hæfde': 'had', 'hām': 'home (dat.); fram hām: at home', 'hē': 'he', 'hēt': 'ordered (pret. of hātan)', 'hǣl': 'omen, good luck (acc.; German Heil)',
      'lagucræftig': 'skilled in the sea, sea-wise', 'land': 'land', 'landgemyrcu': 'landmarks, boundaries (acc. pl.)', 'liden': 'travelled across (past part. of līðan)', 'lēoda': 'of the people (gen. pl. of lēode)', 'lēode': 'people (nom. pl.); Wedera lēode: the Geats',
      'lēof': 'dear', 'līfes': 'of life (gen. of līf)', 'līðende': 'travellers, seafarers (pres. part. as noun, nom. pl.)', 'lōgon': 'blamed (pret. pl. of lēan, strong VI)', 'lȳthwōn': 'little, hardly at all', 'manna': 'of men (gen. pl.); him wæs manna þearf: he needed men',
      'mid': 'with, among', 'mihte': 'could (pret. of magan)', 'mon': 'man', 'moncynnes': 'of mankind (gen.)', 'mægenes': 'in strength (gen. of mægen)', 'mǣrne': 'famous (acc. m.)',
      'nacan': 'ship’s (gen. of naca; German Nachen)', 'ofer': 'over, across', 'on': 'on, onto, into', 'ond': 'and', 'oð': 'until (oð þæt)', 'sande': 'sand, shore (dat.)',
      'scufon': 'pushed, shoved off (pret. pl. of scūfan; German schieben)', 'scēawedon': 'looked at, examined (pret. pl. of scēawian)', 'se': 'the', 'secg': 'man, warrior (poetic)', 'secgas': 'men, warriors (nom. pl. of secg)', 'snotere': 'wise (nom. pl. of snotor)',
      'stefn': 'prow (acc.; German Steven)', 'stigon': 'climbed, went up (pret. pl. of stīgan; German steigen)', 'strengest': 'strongest (superlative of strang)', 'strēamas': 'currents, waves (nom. pl. of strēam)', 'stēape': 'steep, high (nom. pl.)', 'sum': 'one (of); fīftȳna sum: one of fifteen',
      'sund': 'sea, water; þā wæs sund liden: then the sea was crossed', 'sundwudu': 'sea-wood, ship (acc.)', 'swanrāde': 'swan-road, sea (acc. of swanrād)', 'syrcan': 'mail-shirts (nom. pl. of syrce)', 'sē': 'he, that one (demonstrative, stressed)', 'sēcean': 'seek, visit',
      'sīde': 'wide, broad (nom. pl.)', 'sīðfæt': 'journey, expedition (acc.)', 'sōhte': 'sought, went to (pret. of sēcan)', 'sǣldon': 'tied up, moored (pret. pl. of sǣlan)', 'sǣnæssas': 'headlands, sea-nesses (acc. pl.)', 'sǣwudu': 'sea-wood, ship (acc.)',
      'under': 'under, below', 'up': 'up', 'wang': 'plain, field, ground (acc.)', 'wedera': 'of the Weders (gen. pl.; another name for the Geats)', 'weras': 'men (nom. pl. of wer)', 'wilsīð': 'chosen journey, voyage of one’s own will',
      'winde': 'by the wind (dat. of wind)', 'wið': 'against', 'wolde': 'wanted, would (pret. of willan)', 'wudu': 'wood; ship (acc.)', 'wundenstefna': 'curved-prowed one, ship (nom.)', 'wundon': 'wound, eddied (pret. pl. of windan)',
      'wurdon': 'became, had been (pret. pl. of weorðan)', 'wæs': 'was', 'wīsade': 'guided, led (pret. of wīsian; German weisen)', 'wǣgholm': 'wave-sea, ocean (acc.)', 'wǣre': 'was (pret. subj.)', 'ymb': 'about, after; ymb āntīd: at the proper time (?)',
      'æt': 'at', 'æþele': 'noble (German edel)', 'ðone': 'that, the (acc. m.)', 'ðā': 'the (nom. pl.)', 'þancedon': 'thanked (pret. pl. of þancian)', 'þanon': 'thence, from there',
      'þe': 'who, which; þæs þe: because', 'þearf': 'need', 'þegn': 'thegn, retainer (Beowulf)', 'þysses': 'of this (gen.)', 'þæs': 'for that; þæs þe: because', 'þæt': 'that; it',
      'þā': 'then; when', 'þāra': 'of those (gen. pl.)', 'þēah': 'though', 'þēoden': 'lord, prince (Hrothgar)', 'þǣm': 'the (dat.)', 'āntīd': 'meaning disputed: “the same time” (next day)? “due time”?',
      'ēacen': 'great, mighty', 'ēaðe': 'easy, easily', 'ōþres': 'of the second, next (gen.); ōþres dōgores: on the next day', 'ūt': 'out', 'ȳðlidan': 'wave-traveller, ship (acc. of ȳðlida)', 'ȳðum': 'waves (dat. pl.)',
      'ȳþlāde': 'sea-journeys, wave-ways (nom. pl. of ȳþlād)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'How did the wise men react to Beowulf’s plan?', options: ['They hardly blamed him and encouraged him', 'They forbade it', 'They wept', 'They went with him'], answer: 0, explain: 'lȳthwōn lōgon … hwetton higerōfne.' },
      { id: 'r2', type: 'mc', prompt: 'How many men sailed in all?', options: ['Fifteen', 'Fourteen', 'Twelve', 'Thirty'], answer: 0, explain: 'fīftȳna sum: Beowulf and fourteen others.' },
      { id: 'r3', type: 'mc', prompt: 'What did the seafarers see when they arrived?', options: ['Shining sea-cliffs and headlands', 'Heorot', 'A coast-guard', 'Grendel'], answer: 0, explain: 'brimclifu blīcan, beorgas stēape.' },
      { id: 'r4', type: 'mc', prompt: 'What did they do on landing?', options: ['Moored the ship and thanked God', 'Burnt the ship', 'Attacked at once', 'Slept'], answer: 0, explain: 'sǣwudu sǣldon … Gode þancedon.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'How many lifts does a half-line have?', options: ['Two', 'Three', 'Four', 'It varies freely'], answer: 0, explain: 'Two per half-line, four per long line.' },
      { id: 't2', type: 'mc', prompt: 'Which pattern is not allowed?', options: ['aa | xa', 'aa | ax', 'ax | ax', 'xa | ax'], answer: 0, explain: 'The head-stave must alliterate; the last lift normally not.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">bānhūs</span> means:', options: ['the body', 'a charnel house', 'a grave', 'a hall'], answer: 0, explain: 'Bone-house: a kenning.' },
      { id: 't4', type: 'mc', prompt: 'Which word is found almost only in verse?', options: ['secg', 'mann', 'cyning', 'hūs'], answer: 0, explain: 'A poetic synonym for “man”.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Beornas gearwe on stefn ___</span>', hint: 'climbed (stīgan)', answers: ['stigon'], full: 'Beornas gearwe on stefn stigon', explain: 'Class I: stāh, stigon.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">secg ___ lagucræftig mon</span>', hint: 'guided (wīsian, past)', answers: ['wīsade', 'wisade', 'wīsode'], full: 'secg wīsade, lagucræftig mon', explain: 'Weak class 2.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Þā wæs sund liden.', model: 'Then the sea was crossed.', accepted: ['then sea was crossed', 'then the sea was crossed', 'then sea had been crossed', 'then the sea had been crossed', 'then sea was travelled', 'then the sea was traversed'] },
      { id: 't8', type: 'translate', dir: 'en-oe', source: 'the ship (flota, nom.)', model: 'se flota', accepted: ['se flota'], explain: 'Flota is a weak masculine in -a, so it takes se.' },
      { id: 't9', type: 'mc', prompt: 'Which historical source mentions Hygelac?', options: ['Gregory of Tours', 'Bede', 'Tacitus', 'The Anglo-Saxon Chronicle'], answer: 0, explain: 'Chlochilaicus, killed on the lower Rhine c. 520.' },
      { id: 't10', type: 'mc', prompt: 'Who devised the five types A–E?', options: ['Eduard Sievers', 'Fr. Klaeber', 'Henry Sweet', 'Jacob Grimm'], answer: 0, explain: '1885 and 1893.' },
      { id: 't11', type: 'mc', prompt: 'Resolution means:', options: ['a short stressed syllable + the next count as one lift', 'the end of a sentence', 'a rhyme', 'two alliterating words'], answer: 0, explain: 'As in stigon.' }
    ]
  },

  reference: [
    { title: 'Alliteration', headers: ['Rule', 'Example'], rows: [['Head-stave = first lift of b-verse', 'winde (217)'], ['a-verse: one or both lifts', 'flota fāmīheals (218)'], ['Last lift does not alliterate', 'gefȳsed (217)'], ['Vowels alliterate with each other', 'eoletes æt ende … up (224)'], ['sc, sp, st only with themselves', 'stefn stigon … strēamas (212)']] },
    { title: 'Sievers’ types', headers: ['Type', 'Pattern', 'Example'], rows: [['A', '/ x | / x', 'secgas bǣron'], ['B', 'x / | x /', 'ond Hālga til'], ['C', 'x / | / x', 'on stefn stigon'], ['D', '/ | / \\ x', 'weard Scildinga'], ['E', '/ \\ x | /', '(rare)']] },
    { title: 'Words for “ship”', headers: ['Word', 'Literally'], rows: [['ȳðlida', 'wave-traveller'], ['sundwudu, sǣwudu', 'sea-wood'], ['flota', 'floater'], ['naca', 'boat (German Nachen)'], ['wundenstefna', 'curved-prowed one'], ['wudu bundenne', 'joined wood']] }
  ]
});
