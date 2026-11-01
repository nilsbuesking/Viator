/*
 * Old English — Lecture II: strong masculine and neuter nouns; the four cases.
 * Reading: Beowulf 26–52, after Fr. Klaeber (1922), as transcribed online without length marks
 * (sources/beowulf-klaeber-1922-lines-1-2601.txt). Word-division slips of the transcription
 * corrected against the Poetry Foundation text. Macrons added for this course.
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-02',
  number: 2,
  title: 'Scyld’s ship',
  subtitle: 'Strong masculine and neuter nouns; the four cases and how they are used; Beowulf 26–52',
  minutes: 60,

  intro: `
    <p>Lecture I ended with Scyld Scefing, the foundling who became king of the Danes. The next passage of <em>Beowulf</em> tells of his death and funeral: his men lay him in a ship, heap treasure around him, and push the ship out to sea. Nobody, says the poet, can tell who received that cargo.</p>
    <p>The passage is also full of nouns in every case, which makes it the right place to learn the Old English noun. The largest class, the strong masculines and neuters, declines much as German nouns do: <span class="la">stān, stānes, stāne</span> beside <em>Stein, Steines, Steine</em>. Their plurals, however, explain something about English: the masculine plural <span class="la">stānas</span> is the source of the English plural <em>-s</em>, which spread to almost every noun in Middle English.</p>
    <p>By the end you should be able to decline <span class="la">stān</span>, <span class="la">scip</span> and <span class="la">word</span>, recognise the case of a noun from its ending, and read <em>Beowulf</em> 26–52 with the glosses.</p>
  `,

  background: [
    {
      title: 'Scyld and the Scyldings',
      html: `
        <p>The Danish royal house of the poem is called the Scyldings, “descendants of Scyld”. Scandinavian sources know the same dynasty as the Skjöldungar, with its seat at Lejre on Zealand, where archaeologists have found a series of great halls from the 6th to the 10th centuries. Whether Scyld himself was ever a real king cannot be known; he belongs to the legendary beginning of the dynasty, and in Anglo-Saxon royal genealogies a Scyld or Sceldwa appears among the ancestors of the West Saxon kings.</p>
        <p>The poet starts with Scyld for a reason. His story is the model of a good king: he arrived with nothing, became great by war and generosity, and left an heir. His funeral sets up the poem’s ending, which is also a funeral, Beowulf’s own. The poem opens and closes with the death of a king.</p>
      `
    },
    {
      title: 'Ship funerals and Sutton Hoo',
      html: `
        <p>Scyld’s ship is not buried but set adrift. No such funeral has been found archaeologically, though ship burials were real. The most famous in England is Mound 1 at Sutton Hoo in Suffolk, excavated in 1939: a ship about 27 metres long, dragged up from the river and buried in a mound, with a burial chamber amidships full of weapons, silver, gold and a magnificent helmet. The dead man was probably a king of East Anglia of the early 7th century; Rædwald (died around 624) is the usual candidate, though the identification is not certain.</p>
        <p>The parallels with the poem are striking: the ship, the treasure brought from far away (<span class="la">of feorwegum</span>), the weapons and mail-coats, even a standard. They do not show that the poet knew Sutton Hoo, but they show that his picture of royal funerals was not pure fantasy.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Sutton_Hoo_ship-burial_model.jpg/960px-Sutton_Hoo_ship-burial_model.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Sutton_Hoo_ship-burial_model.jpg/500px-Sutton_Hoo_ship-burial_model.jpg|https://upload.wikimedia.org/wikipedia/commons/d/dc/Sutton_Hoo_ship-burial_model.jpg" alt="Museum model of a long wooden ship in a trench, with a burial chamber in the middle"><figcaption>A model of the Sutton Hoo ship burial (Mound 1), showing the ship in its trench with the burial chamber amidships. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Sutton_Hoo_ship-burial_model.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'The ring-giver',
      html: `
        <p>Scyld is called <span class="la">bēaga brytta</span>, “distributor of rings”. In heroic poetry a lord’s first duty is to give: rings, weapons, horses, land. In return his men owe him loyalty to death, as the retainers at Maldon showed. The treasure placed in Scyld’s ship is the visible sign of his greatness, given back by his people at the end.</p>
        <p>Lines 20–25, just before this passage, state the principle: a young prince should give generously while his father lives, so that his companions stand by him when war comes. The verb <span class="la">gewyrcean</span> (“bring about”) and the noun <span class="la">feohgiftum</span> (“gifts of money”) make it almost a lesson in politics.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Original_Sutton_Hoo_Helmet.jpg/960px-Original_Sutton_Hoo_Helmet.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Original_Sutton_Hoo_Helmet.jpg/500px-Original_Sutton_Hoo_Helmet.jpg|https://upload.wikimedia.org/wikipedia/commons/1/1b/Original_Sutton_Hoo_Helmet.jpg" alt="Corroded iron helmet with a face mask, reassembled from fragments"><figcaption>The Sutton Hoo helmet, early 7th century (British Museum), reassembled from hundreds of corroded fragments. Helmets like this are what <em>Beowulf</em> means by the gear of a king. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Original_Sutton_Hoo_Helmet.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Men ne cunnon<br>secgan tō sōðe, selerǣdende,<br>hæleð under heofenum, hwā þǣm hlæste onfēng.</p>
    <p>“Men cannot say for certain, counsellors in the hall, heroes under the heavens, who received that cargo.” <em>Beowulf</em> 50–52, in Klaeber’s edition, with length marks added for this course.</p>
    <p>The passage ends not with an answer but with ignorance: the wisest men in the hall do not know where the dead king has gone. The poem is Christian, but it is set among pagans, and the poet is careful about what they could know. <span class="la">cunnon</span> is the plural of <span class="la">cunnan</span>, “know how to, be able”, German <em>können</em>; English <em>can</em>.</p>
  `,

  pronunciation: `
    <p>Nothing new in principle; the passage practises Lecture I. Three things to watch:</p>
    <ul>
      <li><strong>cēol</strong> (ship, English <em>keel</em>) begins with <em>tsch</em>: the <span class="la">c</span> stands before the front vowel <span class="la">ē</span>. So does <span class="la">cȳmlīcor</span> not: <span class="la">ȳ</span> from older <em>ū</em> did not palatalise.</li>
      <li><strong>sc</strong> in <span class="la">scip, Scyld, Scyldinga</span>: <em>sch</em>. In <span class="la">frumsceafte</span> too: <em>frum-schäaf-te</em>.</li>
      <li><strong>Endings</strong> are pronounced fully: <span class="la">stānas</span> has two clear syllables, <span class="la">wǣpnum</span> a clear <em>u</em>. Old English unstressed vowels had not yet weakened to the <em>e</em> of German or Middle English.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. Four cases',
      html: `
        <p>Old English nouns have four cases, as in German, used in much the same way:</p>
        <ul>
          <li><strong>Nominative</strong>: subject, and the complement of <span class="la">bēon</span>/<span class="la">wesan</span>: <span class="la">þǣr æt hȳðe stōd hringedstefna</span>.</li>
          <li><strong>Accusative</strong>: direct object; after some prepositions, especially of motion: <span class="la">on bearm scipes</span>, “into the lap of the ship”.</li>
          <li><strong>Genitive</strong>: possession and many other relations: <span class="la">brimes faroðe</span>, “to the sea’s current”; <span class="la">māðma fela</span>, “many of treasures”, as German <em>viel des Goldes</em> in older style.</li>
          <li><strong>Dative</strong>: indirect object; after most prepositions (<span class="la">on bearme, of feorwegum, mid</span>); and alone for “with, by means of”: <span class="la">hildewǣpnum ond heaðowǣdum</span>, “with weapons and armour”.</li>
        </ul>
        <p>Traces of a fifth case, the <strong>instrumental</strong>, survive in pronouns and adjectives (<span class="la">þȳ, þē</span> as in Maldon), but in nouns it has merged with the dative.</p>
      `
    },
    {
      title: '2. Strong masculine nouns: stān',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th><th>German</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">stān</td><td class="la">stānas</td><td>Stein · Steine</td></tr>
            <tr><th>Acc.</th><td class="la">stān</td><td class="la">stānas</td><td>Stein · Steine</td></tr>
            <tr><th>Gen.</th><td class="la">stānes</td><td class="la">stāna</td><td>Steines · Steine</td></tr>
            <tr><th>Dat.</th><td class="la">stāne</td><td class="la">stānum</td><td>Stein(e) · Steinen</td></tr>
          </tbody>
        </table></div>
        <p>The singular is almost exactly German: nominative and accusative the same, genitive <span class="la">-es</span>, dative <span class="la">-e</span> (German <em>dem Steine</em>, now old-fashioned). The plural is different: German has <em>-e</em>, Old English <span class="la">-as</span>. This <span class="la">-as</span>, reduced to <em>-es, -s</em>, became the English plural ending for nearly all nouns. The genitive singular <span class="la">-es</span> became the English possessive <em>’s</em>.</p>
        <p>Many common nouns follow <span class="la">stān</span>: <span class="la">cyning, eorl, æþeling, hlāford, bēag, dōm, gār, þēoden, cēol, holm</span>. Learn the gender with the noun, as in German: the ending of the nominative rarely tells you.</p>
      `
    },
    {
      title: '3. dæg: a vowel change in the plural',
      html: `
        <p>Nouns with short <span class="la">æ</span> change it to <span class="la">a</span> in the plural, because the ending had a back vowel: <span class="la">dæg, dæges, dæge</span>; plural <span class="la">dagas, daga, dagum</span>. Compare <span class="la">fæt, fatu</span> (vessel) and <span class="la">pæþ, paþas</span> (path). The <span class="la">g</span> also changes its sound: <em>j</em> in <span class="la">dæg</span>, the North German <em>g</em> of <em>Tage</em> in <span class="la">dagas</span>.</p>
      `
    },
    {
      title: '4. Strong neuter nouns: scip and word',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>scip (short stem)</th><th>word (long stem)</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">scip</td><td class="la">word</td></tr>
            <tr><th>Acc. sg.</th><td class="la">scip</td><td class="la">word</td></tr>
            <tr><th>Gen. sg.</th><td class="la">scipes</td><td class="la">wordes</td></tr>
            <tr><th>Dat. sg.</th><td class="la">scipe</td><td class="la">worde</td></tr>
            <tr><th>Nom./Acc. pl.</th><td class="la">scipu</td><td class="la">word</td></tr>
            <tr><th>Gen. pl.</th><td class="la">scipa</td><td class="la">worda</td></tr>
            <tr><th>Dat. pl.</th><td class="la">scipum</td><td class="la">wordum</td></tr>
          </tbody>
        </table></div>
        <p>The neuters differ from the masculines only in the nominative and accusative plural. Neuters with a short syllable (<span class="la">scip, hof, gebed</span>) add <span class="la">-u</span>; neuters with a long syllable (a long vowel, or a short vowel + two consonants: <span class="la">word, hūs, scēap, bearn</span>) have no ending at all.</p>
        <p>German shows the same pattern in its oldest words: <em>das Wort, die Wort</em> survived into early modern German before <em>Worte, Wörter</em> took over, and English keeps the endingless plural in <em>sheep</em> and <em>deer</em> (<span class="la">scēap, dēor</span>).</p>
      `
    },
    {
      title: '5. Reading the endings',
      html: `
        <p>Because several endings are shared, a single ending rarely gives the case on its own:</p>
        <ul>
          <li><span class="la">-e</span>: usually dative singular (<span class="la">bearme, scipe</span>).</li>
          <li><span class="la">-es</span>: genitive singular (<span class="la">brimes, scipes, flōdes</span>).</li>
          <li><span class="la">-as</span>: nominative or accusative plural, masculine (<span class="la">gesīþas</span>).</li>
          <li><span class="la">-a</span>: genitive plural (<span class="la">bēaga, māðma</span>).</li>
          <li><span class="la">-um</span>: dative plural, all genders (<span class="la">wǣpnum, lācum, feorwegum</span>). This is the most reliable ending in Old English.</li>
        </ul>
        <p>As in German, the article and adjectives often decide what the noun alone cannot. The article <span class="la">se, sēo, þæt</span> is the subject of Lecture IV; for now, recognise <span class="la">þām/þǣm</span> as dative and <span class="la">þæs</span> as genitive.</p>
      `
    },
    {
      title: '6. Compounds and variation',
      html: `
        <p>The passage shows two features of Old English poetic style that the course will meet again and again:</p>
        <ul>
          <li><strong>Compounds</strong>: <span class="la">hringedstefna</span> (“ring-prowed”, a ship), <span class="la">landfruma</span> (land-chief, prince), <span class="la">heaðowǣd</span> (battle-garment, armour), <span class="la">þēodgestrēon</span> (people-treasure), <span class="la">selerǣdend</span> (hall-counsellor). Like German, Old English makes compounds freely, and poets made new ones.</li>
          <li><strong>Variation</strong>: the same thing named twice or more in different words, often in apposition: <span class="la">lēofne þēoden, / bēaga bryttan … mǣrne</span> (the dear prince, the giver of rings, the famous one); <span class="la">selerǣdende, / hæleð under heofenum</span>. Translations often have to compress it.</li>
        </ul>
      `
    }
  ],

  vocab: [
    { id: 'stan', head: 'stān', la: 'stān, stānes', g: 'm', pos: 'noun, strong', en: 'stone', note: 'German Stein. The model strong masculine.' },
    { id: 'daeg', head: 'dæg', la: 'dæg, dæges; pl. dagas', g: 'm', pos: 'noun, strong', en: 'day', note: 'German Tag. æ → a in the plural.' },
    { id: 'scip', head: 'scip', la: 'scip, scipes; pl. scipu', g: 'n', pos: 'noun, strong', en: 'ship', note: 'German Schiff. sc = sch.' },
    { id: 'word', head: 'word', la: 'word, wordes; pl. word', g: 'n', pos: 'noun, strong', en: 'word', note: 'German Wort. Long-stem neuter: plural without ending.' },
    { id: 'theoden', head: 'þēoden', la: 'þēoden', g: 'm', pos: 'noun, strong', en: 'prince, lord, king', note: 'From þēod, people (Lecture I): the leader of a people.' },
    { id: 'gesith', head: 'gesīþ', la: 'gesīþ', g: 'm', pos: 'noun, strong', en: 'companion, retainer', note: 'Related to sīþ, journey: a fellow traveller. German Gesinde is related.' },
    { id: 'brim', head: 'brim', la: 'brim, brimes', g: 'n', pos: 'noun, strong', en: 'sea, surf', note: 'Poetic.' },
    { id: 'flod', head: 'flōd', la: 'flōd', g: 'm', pos: 'noun, strong', en: 'flood, flowing water, sea', note: 'German Flut.' },
    { id: 'holm', head: 'holm', la: 'holm', g: 'm', pos: 'noun, strong', en: 'sea, ocean (poetic)', note: 'In Old Norse “islet”, hence English place-names like Steep Holm and German Holm.' },
    { id: 'garsecg', head: 'gārsecg', la: 'gārsecg', g: 'm', pos: 'noun, strong', en: 'ocean', note: 'Literally perhaps “spear-man”, or a folk-etymology of an older word; disputed.' },
    { id: 'yth', head: 'ȳð', la: 'ȳð', g: 'f', pos: 'noun, strong', en: 'wave', note: 'German Woge is not related; ȳð is cognate with Old Norse unnr.' },
    { id: 'ceol', head: 'cēol', la: 'cēol', g: 'm', pos: 'noun, strong', en: 'ship (poetic)', note: 'Poetic; Old High German kiol, ship. English keel (a flat-bottomed boat, as on the Tyne) descends from it; keel “bottom timber” is a Norse loan. c = tsch here.' },
    { id: 'hyth', head: 'hȳþ', la: 'hȳþ', g: 'f', pos: 'noun, strong', en: 'harbour, landing place', note: 'In place-names: Hythe, Rotherhithe, Erith.' },
    { id: 'madm', head: 'māþum', la: 'māþum, gen. pl. māðma', g: 'm', pos: 'noun, strong', en: 'treasure, precious thing' },
    { id: 'beag2', head: 'bēag', la: 'bēag', g: 'm', pos: 'noun, strong', en: 'ring, armlet', note: 'bēaga brytta: ring-giver, a lord. German biegen is related.' },
    { id: 'byrne', head: 'byrne', la: 'byrne', g: 'f', pos: 'noun, weak', en: 'mail-coat', note: 'German Brünne.' },
    { id: 'waepen', head: 'wǣpen', la: 'wǣpen', g: 'n', pos: 'noun, strong', en: 'weapon', note: 'German Waffe; also Wappen, the Low German form.' },
    { id: 'segen', head: 'segen', la: 'segen', g: 'm', pos: 'noun, strong', en: 'banner, standard', note: 'From Latin signum.' },
    { id: 'sefa', head: 'sefa', la: 'sefa', g: 'm', pos: 'noun, weak', en: 'mind, heart, spirit (poetic)' },
    { id: 'haeleth', head: 'hæleð', la: 'hæleð, pl. hæleð', g: 'm', pos: 'noun', en: 'hero, warrior, man', note: 'German Held.' },
    { id: 'heofon', head: 'heofon', la: 'heofon', g: 'm', pos: 'noun, strong', en: 'heaven, sky', note: 'Low German Heben; German Himmel is a related formation.' },
    { id: 'feran', head: 'fēran', la: 'fēran, fērde', pos: 'verb, weak', en: 'go, travel', note: 'German fahren is related (via faran).' },
    { id: 'gewitan', head: 'gewītan', la: 'gewītan, gewāt, gewiton, gewiten', pos: 'verb, strong I', en: 'depart, go; die', note: 'Him ðā Scyld gewāt: then Scyld departed (him is a reflexive dative).' },
    { id: 'beran', head: 'beran', la: 'beran, bær, bǣron, boren', pos: 'verb, strong IV', en: 'carry, bear', note: 'German (ge)bären.' },
    { id: 'secgan', head: 'secgan', la: 'secgan, sægde', pos: 'verb, weak', en: 'say, tell', note: 'German sagen.' },
    { id: 'cunnan', head: 'cunnan', la: 'cunnan (cann, cunnon; cūþe)', pos: 'verb, preterite-present', en: 'know (how to), be able', note: 'German können, kennen; English can, couth (uncouth).' },
    { id: 'leof', head: 'lēof', la: 'lēof', pos: 'adjective', en: 'dear, beloved', note: 'German lieb.' },
    { id: 'maere', head: 'mǣre', la: 'mǣre', pos: 'adjective', en: 'famous, glorious', note: 'German Mär, Märchen (originally “news, report”) are related.' },
    { id: 'geomor', head: 'geōmor', la: 'geōmor', pos: 'adjective', en: 'sad, mournful', note: 'German Jammer is related.' },
    { id: 'feor', head: 'feor', la: 'feor', pos: 'adverb', en: 'far', note: 'German fern.' }
  ],

  grammarCards: [
    { id: 'oe2-stan-sg', front: 'stān: singular N A G D', back: 'stān, stān, stānes, stāne' },
    { id: 'oe2-stan-pl', front: 'stān: plural N A G D', back: 'stānas, stānas, stāna, stānum' },
    { id: 'oe2-scip-pl', front: 'scip: plural N A G D', back: 'scipu, scipu, scipa, scipum' },
    { id: 'oe2-word-pl', front: 'word: plural N A G D', back: 'word, word, worda, wordum' },
    { id: 'oe2-short-long', front: 'When does a strong neuter add -u in the plural?', back: 'When the stem syllable is short (scip → scipu); long stems have no ending (word, hūs, scēap).' },
    { id: 'oe2-dagas', front: 'Plural of dæg', back: 'dagas, daga, dagum (æ → a before a back vowel)' },
    { id: 'oe2-s', front: 'Where does the English plural -s come from?', back: 'The strong masculine nom./acc. plural -as (stānas).' },
    { id: 'oe2-poss', front: 'Where does the English possessive ’s come from?', back: 'The genitive singular -es (stānes, cyninges).' },
    { id: 'oe2-um', front: 'Ending -um', back: 'Dative plural, all genders: the most reliable Old English ending.' },
    { id: 'oe2-a', front: 'Ending -a on a noun', back: 'Usually genitive plural: bēaga, māðma.' },
    { id: 'oe2-dat', front: 'hildewǣpnum ond heaðowǣdum (without preposition)', back: 'Dative of means: with weapons and armour.' },
    { id: 'oe2-sheep', front: 'Why is the plural of English sheep “sheep”?', back: 'scēap was a long-stem neuter: no ending in the plural.' },
    { id: 'oe2-variation', front: 'Variation (in OE verse)', back: 'Naming the same thing twice or more in apposition: lēofne þēoden, bēaga bryttan …' },
    { id: 'oe2-suttonhoo', front: 'Sutton Hoo, Mound 1', back: 'Ship burial in Suffolk, excavated 1939; probably an East Anglian king of the early 7th century (Rædwald?).' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">stānas</span> is:', options: ['nominative or accusative plural', 'genitive singular', 'dative plural', 'genitive plural'], answer: 0, explain: 'Strong masculine plural -as.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">brimes</span> (in <span class="la">tō brimes faroðe</span>) is:', options: ['genitive singular', 'nominative plural', 'dative singular', 'accusative plural'], answer: 0, explain: '-es: genitive singular. “to the sea’s current”.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">wǣpnum</span> is:', options: ['dative plural', 'genitive plural', 'nominative plural', 'dative singular'], answer: 0, explain: '-um: dative plural.' },
    { id: 'e4', type: 'mc', prompt: 'Plural of <span class="la">word</span>:', options: ['word', 'wordas', 'wordu', 'worde'], answer: 0, explain: 'Long-stem neuter: no ending.' },
    { id: 'e5', type: 'mc', prompt: 'Plural of <span class="la">scip</span>:', options: ['scipu', 'scipas', 'scip', 'scipe'], answer: 0, explain: 'Short-stem neuter: -u.' },
    { id: 'e6', type: 'mc', prompt: 'The English plural ending <em>-s</em> comes from:', options: ['the Old English masculine plural -as', 'French', 'Old Norse', 'the genitive -es'], answer: 0, explain: 'It spread from the strong masculines to most nouns.' },
    { id: 'e7', type: 'mc', prompt: '<span class="la">bēaga brytta</span> means:', options: ['giver of rings (a lord)', 'breaker of rings', 'the bride’s rings', 'a goldsmith'], answer: 0, explain: 'bēaga: gen. pl.; brytta: distributor.' },
    { id: 'e8', type: 'mc', prompt: 'Where was a great ship burial excavated in 1939?', options: ['Sutton Hoo, Suffolk', 'Lejre, Zealand', 'Jarrow', 'Maldon'], answer: 0, explain: 'Mound 1 at Sutton Hoo.' },
    { id: 'e9', type: 'match', prompt: 'Match the endings to their usual case.', pairs: [
      ['-es', 'gen. sg.'], ['-e', 'dat. sg.'], ['-as', 'nom./acc. pl. (m.)'], ['-a', 'gen. pl.'], ['-um', 'dat. pl.']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the Old English words to German.', pairs: [
      ['cēol', 'Kiel'], ['byrne', 'Brünne'], ['flōd', 'Flut'], ['hæleð', 'Held'], ['lēof', 'lieb']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Hīe ætbǣron hine tō þām scip___.</span>', hint: 'ship (dat. sg.)', answers: ['e'], full: '… tō þām scipe.', explain: 'Dative singular -e after tō.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Þǣr wǣron fela stān___.</span>', hint: 'of stones (gen. pl.)', answers: ['a'], full: 'Þǣr wǣron fela stāna.', explain: 'fela takes the genitive: stāna.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">mid wǣpn___</span>', hint: 'with weapons (dat. pl.)', answers: ['um'], full: 'mid wǣpnum', explain: 'Dative plural -um.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Þā cyning___ sendon gold.</span>', hint: 'the kings (nom. pl.)', answers: ['as'], full: 'Þā cyningas sendon gold.', explain: 'Strong masculine plural -as.' },
    { id: 'e15', type: 'paradigm', prompt: 'Decline <span class="la">stān</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['stān', 'stānas'] },
      { label: 'Acc.', answers: ['stān', 'stānas'] },
      { label: 'Gen.', answers: ['stānes', 'stāna'] },
      { label: 'Dat.', answers: ['stāne', 'stānum'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Decline <span class="la">scip</span> and <span class="la">word</span> in the plural.', headers: ['scip', 'word'], rows: [
      { label: 'Nom.', answers: ['scipu', 'word'] },
      { label: 'Acc.', answers: ['scipu', 'word'] },
      { label: 'Gen.', answers: ['scipa', 'worda'] },
      { label: 'Dat.', answers: ['scipum', 'wordum'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the English translation in order.', source: 'Þǣr æt hȳðe stōd hringedstefna', tokens: ['There', 'in the harbour', 'stood', 'the ring-prowed ship.'], explain: 'hȳðe: dative after æt; hringedstefna: nominative, the subject.' },
    { id: 'e18', type: 'translate', dir: 'oe-en', source: 'Þǣr wæs māðma fela.', model: 'There were many treasures.', accepted: ['there were many treasures', 'there was much treasure', 'there was a lot of treasure', 'there were many treasures there', 'there were many precious things'] },
    { id: 'e19', type: 'translate', dir: 'oe-en', source: 'Him wæs geōmor sefa.', model: 'Their hearts were sad.', accepted: ['their hearts were sad', 'their heart was sad', 'they were sad at heart', 'their mind was sad', 'their minds were sad', 'his heart was sad', 'their spirit was sad', 'they were sad'] },
    { id: 'e20', type: 'translate', dir: 'en-oe', source: 'The king had many ships.', model: 'Se cyning hæfde fela scipa.', accepted: ['se cyning hæfde fela scipa', 'se cyning hæfde manig scipu', 'cyning hæfde fela scipa'] },
    { id: 'e21', type: 'translate', dir: 'en-oe', source: 'with words', model: 'mid wordum', accepted: ['mid wordum', 'wordum'] },
    { id: 'e22', type: 'mc', prompt: 'What happens to Scyld’s body?', options: ['It is set adrift in a ship with treasure', 'It is buried under a mound', 'It is burnt on a pyre', 'It is taken to Lejre'], answer: 0, explain: 'lēton holm beran, geafon on gārsecg.' },
    { id: 'e23', type: 'mc', prompt: 'Naming the same thing several times in apposition (<span class="la">lēofne þēoden, bēaga bryttan</span>) is called:', options: ['variation', 'alliteration', 'kenning', 'rhyme'], answer: 0, explain: 'A hallmark of Old English verse style.' }
  ],

  reading: {
    title: 'Beowulf 26–52',
    note: 'Authentic text: Klaeber’s edition (1922). The normalised view adds length marks for this course; “Klaeber, unmarked” shows the online text. Tap any word.',
    diplomaticLabel: 'Klaeber, unmarked',
    diplomaticNote: 'Klaeber’s text as transcribed online, without length marks. Three run-together words of the transcription (þenden wordum, æþelinges fær, byrnum; him) are separated, as in other editions.',
    text: 'Him ðā Scyld gewāt tō gescæphwīle\nfelahrōr fēran on Frēan wǣre;\nhī hyne þā ætbǣron tō brimes faroðe,\nswǣse gesīþas, swā hē selfa bæd,\nþenden wordum wēold wine Scyldinga;\nlēof landfruma lange āhte.\nÞǣr æt hȳðe stōd hringedstefna,\nīsig ond ūtfūs, æþelinges fær;\nālēdon þā lēofne þēoden,\nbēaga bryttan on bearm scipes,\nmǣrne be mæste. Þǣr wæs māðma fela\nof feorwegum frætwa gelǣded;\nne hȳrde ic cȳmlīcor cēol gegyrwan\nhildewǣpnum ond heaðowǣdum,\nbillum ond byrnum; him on bearme læg\nmāðma mænigo, þā him mid scoldon\non flōdes ǣht feor gewītan.\nNalæs hī hine lǣssan lācum tēodan,\nþēodgestrēonum, þon þā dydon,\nþe hine æt frumsceafte forð onsendon\nǣnne ofer ȳðe umborwesende.\nÞā gȳt hīe him āsetton segen gyldenne\nhēah ofer hēafod, lēton holm beran,\ngēafon on gārsecg; him wæs geōmor sefa,\nmurnende mōd. Men ne cunnon\nsecgan tō sōðe, selerǣdende,\nhæleð under heofenum, hwā þǣm hlæste onfēng.',
    diplomatic: 'Him ða Scyld gewat to gescæphwile\nfelahror feran on Frean wære;\nhi hyne þa ætbæron to brimes faroðe,\nswæse gesiþas, swa he selfa bæd,\nþenden wordum weold wine Scyldinga---\nleof landfruma lange ahte.\nÞær æt hyðe stod hringedstefna\nisig ond utfus, æþelinges fær;\naledon þa leofne þeoden,\nbeaga bryttan on bearm scipes,\nmærne be mæste. Þær wæs madma fela\nof feorwegum frætwa gelæded;\nne hyrde ic cymlicor ceol gegyrwan\nhildewæpnum ond heaðowædum,\nbillum ond byrnum; him on bearme læg\nmadma mænigo, þa him mid scoldon\non flodes æht feor gewitan.\nNalæs hi hine læssan lacum teodan,\nþeodgestreonum, þon þa dydon,\nþe hine æt frumsceafte forð onsendon\nænne ofer yðe umborwesende.\nÞa gyt hie him asetton segen gyldenne\nheah ofer heafod, leton holm beran,\ngeafon on garsecg; him wæs geomor sefa,\nmurnende mod. Men ne cunnon\nsecgan to soðe, selerædende,\nhæleð under heofenum, hwa þæm hlæste onfeng.',
    translations: [
      { label: 'English translation', text: 'Then at his fated hour Scyld departed, still in his strength, to go into the Lord’s keeping. They carried him down to the sea’s current, his dear companions, as he himself had asked while the friend of the Scyldings still ruled with words; the dear prince of the land had long held power. There in the harbour stood the ring-prowed ship, icy and eager to set out, a prince’s vessel. Then they laid their dear lord, the giver of rings, in the ship’s lap, the famous one by the mast. Many treasures were there, ornaments brought from far-off lands. I never heard of a ship more finely fitted out with weapons of war and battle-dress, swords and mail-coats; on his lap lay a mass of treasures that were to travel far with him into the possession of the flood. They did not furnish him with lesser gifts, the wealth of the people, than those had done who at the beginning sent him out alone over the waves when he was a child. Then too they set a golden standard high over his head, let the sea carry him, gave him to the ocean. Their hearts were sad, their minds mourning. Men cannot say for certain, counsellors in the hall, heroes under the heavens, who received that cargo.' },
      { label: 'German translation', text: 'Da schied Scyld zur bestimmten Stunde, noch voller Kraft, um in die Obhut des Herrn zu gehen. Sie trugen ihn hinab zur Strömung des Meeres, die lieben Gefährten, wie er selbst gebeten hatte, als der Freund der Scyldinge noch mit Worten herrschte; lange hatte der liebe Landesfürst regiert. Dort im Hafen stand das Schiff mit dem Ringbug, vereist und zur Ausfahrt bereit, das Fahrzeug eines Fürsten. Da legten sie den lieben Herrn, den Spender der Ringe, in den Schoß des Schiffes, den Berühmten an den Mast. Dort waren viele Schätze, Kostbarkeiten, von fernen Wegen herbeigebracht. Nie hörte ich von einem Schiff, das schöner ausgerüstet war mit Kriegswaffen und Kampfgewändern, Schwertern und Brünnen; auf seinem Schoß lag eine Menge Schätze, die mit ihm weit in die Gewalt der Flut fahren sollten. Keineswegs statteten sie ihn mit geringeren Gaben aus, mit Volksschätzen, als jene getan hatten, die ihn am Anfang allein über die Wogen hinausgeschickt hatten, als er ein Kind war. Dann setzten sie ihm noch ein goldenes Banner hoch über das Haupt, ließen die See ihn tragen, gaben ihn dem Ozean. Ihr Sinn war traurig, ihr Mut trauernd. Die Männer können nicht wahrheitsgemäß sagen, die Ratgeber im Saal, die Helden unter dem Himmel, wer diese Ladung empfing.' }
    ],
    notes: [
      { ref: 'Him ðā Scyld gewāt tō gescæphwīle', html: '<span class="la">him … gewāt</span>: “departed”, with a reflexive dative, as German <em>er machte sich davon</em>. <span class="la">gescæphwīl</span>: the “shaped” or fated time, his appointed hour.' },
      { ref: 'felahrōr fēran on Frēan wǣre', html: '<span class="la">felahrōr</span>: “very vigorous”: he dies still strong. <span class="la">Frēan wǣre</span>: “into the Lord’s keeping” (<span class="la">frēa</span>, lord, used of God; <span class="la">wǣr</span>, protection, covenant). A Christian phrase in a pagan setting: see the source panel.' },
      { ref: 'hī hyne þā ætbǣron tō brimes faroðe', html: '<span class="la">hyne</span> = <span class="la">hine</span>. <span class="la">brimes</span>: genitive singular of <span class="la">brim</span>, depending on <span class="la">faroðe</span> (dative, “current, shore”).' },
      { ref: 'þenden wordum wēold wine Scyldinga', html: '“while the friend of the Scyldings ruled with words”, i.e. while he could still speak and command. <span class="la">wordum</span>: dative of means. The online transcription runs <span class="la">þenden</span> and <span class="la">wordum</span> together.' },
      { ref: 'hringedstefna', html: '“the one with a ringed prow”: a ship, perhaps with a curved or ornamented stem. The noun is a weak masculine (Lecture IV).' },
      { ref: 'īsig ond ūtfūs', html: '<span class="la">īsig</span> “icy”, or perhaps “shining”; editors disagree. <span class="la">ūtfūs</span>: eager to go out.' },
      { ref: 'bēaga bryttan on bearm scipes', html: 'Variation: <span class="la">lēofne þēoden, bēaga bryttan, mǣrne</span> all name Scyld. <span class="la">on bearm</span>: accusative of motion, “into the lap”; contrast <span class="la">on bearme læg</span> (dative of rest) four lines later, exactly like German <em>in den Schoß</em> / <em>im Schoß</em>.' },
      { ref: 'Þǣr wæs māðma fela', html: '<span class="la">fela</span> + genitive plural, “many of treasures”. The verb is singular because <span class="la">fela</span> is the subject.' },
      { ref: 'ne hȳrde ic cȳmlīcor cēol gegyrwan', html: '“I never heard (of) a ship more finely equipped”: an accusative and infinitive, “heard a ship (be) equipped”. The poet’s <span class="la">ic</span> appears only rarely.' },
      { ref: 'hildewǣpnum ond heaðowǣdum, / billum ond byrnum', html: 'Four datives of means, “with”, in two alliterating pairs. <span class="la">bill</span>: sword; <span class="la">byrne</span>: mail-coat.' },
      { ref: 'on flōdes ǣht', html: '“into the possession of the flood”: <span class="la">ǣht</span>, property (German <em>eigen</em> is related).' },
      { ref: 'Nalæs hī hine lǣssan lācum tēodan', html: 'Litotes, understatement: “not at all with lesser gifts” means “with far greater gifts”. Old English poetry is fond of it.' },
      { ref: 'þe hine æt frumsceafte forð onsendon / ǣnne ofer ȳðe umborwesende', html: 'Back to the foundling of Lecture I: Scyld arrived alone over the waves as a child (<span class="la">umborwesende</span>, “being a child”). He leaves as he came. Who sent him is never said.' },
      { ref: 'segen gyldenne', html: 'A golden standard. Some editions print <span class="la">geldenne</span>, as the Poetry Foundation text does; Klaeber has <span class="la">gyldenne</span>.' },
      { ref: 'him wæs geōmor sefa', html: '“to them was a sad mind”: a dative of possession, as German <em>ihnen war das Herz schwer</em>. <span class="la">him</span> is plural here.' }
    ],
    glosses: {
      'him': 'him, to him; them (dat.); reflexive with gewāt', 'ðā': 'then', 'scyld': 'Scyld', 'gewāt': 'departed (pret. of gewītan)', 'tō': 'to, at', 'gescæphwīle': 'fated hour (dat. of gescæphwīl)',
      'felahrōr': 'very vigorous', 'fēran': 'go, travel', 'on': 'on, into, in', 'frēan': 'of the Lord (gen. of frēa)', 'wǣre': 'keeping, protection (acc./dat. of wǣr)',
      'hī': 'they', 'hyne': 'him (acc. = hine)', 'þā': 'then; the (pl.); which', 'ætbǣron': 'carried (pret. pl. of ætberan)', 'brimes': 'of the sea (gen. sg. of brim)', 'faroðe': 'current, shore (dat. of faroþ)',
      'swǣse': 'dear, own (nom. pl. of swǣs)', 'gesīþas': 'companions (nom. pl. of gesīþ)', 'swā': 'as, so', 'hē': 'he', 'selfa': 'himself', 'bæd': 'asked (pret. of biddan)',
      'þenden': 'while', 'wordum': 'with words (dat. pl. of word)', 'wēold': 'ruled (pret. of wealdan)', 'wine': 'friend, lord (wine)', 'scyldinga': 'of the Scyldings (gen. pl.)',
      'lēof': 'dear (lieb)', 'landfruma': 'prince, ruler of the land', 'lange': 'long', 'āhte': 'possessed, ruled (pret. of āgan)',
      'þǣr': 'there', 'æt': 'at, in', 'hȳðe': 'harbour (dat. of hȳþ)', 'stōd': 'stood', 'hringedstefna': 'ring-prowed ship',
      'īsig': 'icy (or shining)', 'ond': 'and', 'ūtfūs': 'eager to go out', 'æþelinges': 'of a prince (gen. sg.)', 'fær': 'vessel, ship',
      'ālēdon': 'laid (pret. pl. of ālecgan)', 'lēofne': 'dear (acc. m.)', 'þēoden': 'prince, lord (acc.)', 'bēaga': 'of rings (gen. pl. of bēag)', 'bryttan': 'distributor, giver (acc.)', 'bearm': 'lap, bosom', 'scipes': 'of the ship (gen. sg.)',
      'mǣrne': 'famous (acc. m.)', 'be': 'by, beside', 'mæste': 'mast (dat.)', 'wæs': 'was', 'māðma': 'of treasures (gen. pl. of māþum)', 'madma': 'of treasures (= māðma)', 'fela': 'many, much',
      'of': 'from', 'feorwegum': 'far-off ways, distant lands (dat. pl.)', 'frætwa': 'ornaments, treasures', 'gelǣded': 'brought (participle of gelǣdan)',
      'ne': 'not, never', 'hȳrde': 'heard (pret. of hȳran)', 'ic': 'I', 'cȳmlīcor': 'more finely, more splendidly', 'cēol': 'ship (keel)', 'gegyrwan': 'equip, adorn',
      'hildewǣpnum': 'with war-weapons (dat. pl.)', 'heaðowǣdum': 'with battle-garments, armour (dat. pl.)', 'billum': 'with swords (dat. pl. of bill)', 'byrnum': 'with mail-coats (dat. pl. of byrne)', 'bearme': 'lap (dat.)', 'læg': 'lay (pret. of licgan)',
      'mænigo': 'a great number, multitude (Menge)', 'mid': 'with', 'scoldon': 'were to, had to (pret. pl. of sculan)', 'flōdes': 'of the flood (gen. sg.)', 'ǣht': 'possession, power', 'feor': 'far', 'gewītan': 'go, depart',
      'nalæs': 'not at all', 'hine': 'him (acc.)', 'lǣssan': 'lesser (dat. pl.)', 'lācum': 'gifts (dat. pl. of lāc)', 'tēodan': 'furnished, provided (pret. pl. of tēon)',
      'þēodgestrēonum': 'treasures of the people (dat. pl.)', 'þon': 'than', 'dydon': 'did (pret. pl. of dōn)', 'þe': 'who, which', 'frumsceafte': 'beginning (dat. of frumsceaft)', 'forð': 'forth', 'onsendon': 'sent off (pret. pl.)',
      'ǣnne': 'alone, one (acc.)', 'ofer': 'over', 'ȳðe': 'waves (acc. pl. of ȳð)', 'umborwesende': 'being a child',
      'gȳt': 'yet, also', 'hīe': 'they', 'āsetton': 'set up (pret. pl. of āsettan)', 'segen': 'banner, standard', 'gyldenne': 'golden (acc. m.)',
      'hēah': 'high', 'hēafod': 'head (Haupt)', 'lēton': 'let (pret. pl. of lǣtan)', 'holm': 'sea', 'beran': 'carry, bear',
      'gēafon': 'gave (pret. pl. of giefan)', 'geafon': 'gave', 'gārsecg': 'ocean', 'geōmor': 'sad (cf. Jammer)', 'sefa': 'mind, heart',
      'murnende': 'mourning (present participle of murnan)', 'mōd': 'mind, spirit (Mut)', 'men': 'men (nom. pl. of mann)', 'cunnon': 'can, know how (pl. of cunnan)',
      'secgan': 'say', 'sōðe': 'truth (dat. of sōþ): tō sōðe, truly, for certain', 'selerǣdende': 'counsellors in the hall (nom. pl.)',
      'hæleð': 'heroes, men (nom. pl.)', 'under': 'under', 'heofenum': 'the heavens (dat. pl.)', 'hwā': 'who', 'þǣm': 'the, that (dat.)', 'hlæste': 'cargo, load (dat. of hlæst)', 'onfēng': 'received (pret. of onfōn + dat.)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Who carried Scyld to the sea, and why?', options: ['His companions, as he had asked', 'His enemies, to be rid of him', 'Monks, to bury him', 'His son alone'], answer: 0, explain: 'swǣse gesīþas, swā hē selfa bæd.' },
      { id: 'r2', type: 'mc', prompt: 'Where was Scyld laid in the ship?', options: ['By the mast', 'In the stern', 'Under the deck', 'On the prow'], answer: 0, explain: 'mǣrne be mæste.' },
      { id: 'r3', type: 'mc', prompt: 'How does Scyld’s funeral echo his arrival?', options: ['He came alone over the waves and leaves over them', 'He came with an army and leaves with one', 'He came by land and leaves by sea', 'He came as a king and leaves as a slave'], answer: 0, explain: 'þe hine æt frumsceafte forð onsendon ǣnne ofer ȳðe.' },
      { id: 'r4', type: 'mc', prompt: 'Who received the ship’s cargo?', options: ['Nobody can say', 'The sea-god', 'The Geats', 'Hrothgar'], answer: 0, explain: 'Men ne cunnon secgan tō sōðe … hwā þǣm hlæste onfēng.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Dative plural of <span class="la">stān</span>:', options: ['stānum', 'stānas', 'stāna', 'stāne'], answer: 0, explain: '-um.' },
      { id: 't2', type: 'mc', prompt: 'Genitive singular of <span class="la">scip</span>:', options: ['scipes', 'scipa', 'scipu', 'scipum'], answer: 0, explain: '-es.' },
      { id: 't3', type: 'mc', prompt: 'Plural of <span class="la">dæg</span>:', options: ['dagas', 'dægas', 'dagu', 'dæg'], answer: 0, explain: 'æ becomes a before the back vowel of the ending.' },
      { id: 't4', type: 'mc', prompt: 'Why is English <em>sheep</em> unchanged in the plural?', options: ['scēap was a long-stem neuter with no plural ending', 'it is a French loan', 'by analogy with fish', 'it is a mass noun'], answer: 0, explain: 'Like word, hūs, dēor.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">fela bēag___</span>', hint: 'many rings (gen. pl.)', answers: ['a'], full: 'fela bēaga', explain: 'Genitive plural -a.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">on scip___</span> (in the ships)', hint: 'dat. pl.', answers: ['um'], full: 'on scipum', explain: 'Dative plural -um.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Hīe lēton holm beran.', model: 'They let the sea carry (him).', accepted: ['they let sea carry', 'they let sea carry him', 'they let sea bear him', 'they let sea bear', 'they let ocean carry him', 'they let the sea carry him'] },
      { id: 't8', type: 'translate', dir: 'en-oe', source: 'the king’s ship', model: 'þæs cyninges scip', accepted: ['þæs cyninges scip', 'cyninges scip'] },
      { id: 't9', type: 'mc', prompt: 'The English possessive <em>’s</em> comes from:', options: ['the genitive singular -es', 'the plural -as', 'the dative -e', 'Old Norse'], answer: 0, explain: 'cyninges → king’s.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">Nalæs … lǣssan lācum</span> (“not with lesser gifts”) is an example of:', options: ['litotes (understatement)', 'a kenning', 'rhyme', 'a loanword'], answer: 0, explain: 'It means “with far greater gifts”.' }
    ]
  },

  reference: [
    { title: 'Strong masculine: stān', headers: ['', 'Singular', 'Plural'], rows: [['Nom.', 'stān', 'stānas'], ['Acc.', 'stān', 'stānas'], ['Gen.', 'stānes', 'stāna'], ['Dat.', 'stāne', 'stānum']] },
    { title: 'Strong neuters: scip, word', headers: ['', 'scip', 'word'], rows: [['Nom./Acc. sg.', 'scip', 'word'], ['Gen. sg.', 'scipes', 'wordes'], ['Dat. sg.', 'scipe', 'worde'], ['Nom./Acc. pl.', 'scipu', 'word'], ['Gen. pl.', 'scipa', 'worda'], ['Dat. pl.', 'scipum', 'wordum']] },
    { title: 'Case endings at a glance', headers: ['Ending', 'Usually'], rows: [['-es', 'gen. sg. (m., n.)'], ['-e', 'dat. sg.'], ['-as', 'nom./acc. pl. (m.)'], ['-u', 'nom./acc. pl. (short neuters)'], ['-a', 'gen. pl.'], ['-um', 'dat. pl.']] }
  ]
});
