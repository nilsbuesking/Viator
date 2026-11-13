/*
 * Old English — Lecture X: relative clauses; impersonal and indefinite constructions; numerals;
 * clauses of result and comparison. Reading: Beowulf 1345–1377a (Hrothgar describes Grendel’s mere),
 * after Fr. Klaeber (1922), as transcribed online without length marks
 * (sources/beowulf-klaeber-1922-lines-1-2601.txt). Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-10',
  number: 10,
  title: 'Grendel’s mere',
  subtitle: 'Relative clauses; impersonal constructions; numerals; Beowulf 1350–1382',
  minutes: 60,

  intro: `
    <p>Beowulf has killed Grendel, and Heorot has celebrated. That night Grendel’s mother comes for revenge and carries off Æschere, Hrothgar’s closest counsellor. In the morning the old king tells Beowulf what the country people say: two huge “border-walkers” haunt the moors, one in the likeness of a woman, and they live in a hidden land of wolf-slopes and windy headlands, where a stream falls under the mists into a mere that burns at night. A hunted stag would rather die on the bank than plunge in. “Now the remedy depends on you alone.”</p>
    <p>This is the most famous landscape in Old English poetry, and one of the most discussed. The grammar of the lecture comes straight out of it: <strong>relative clauses</strong> (<span class="la">þone … Grendel nemdon</span> “whom they called Grendel”), the subjectless “one can see” (<span class="la">Þǣr mæg nihta gehwǣm nīðwundor sēon</span>), <strong>numerals</strong> (<span class="la">swylce twēgen</span>), and clauses of result (<span class="la">nō þæs frōd … þæt</span> “none so wise that”).</p>
    <p>From this lecture on, the readings are longer and the notes do more of the work: the aim is reading Beowulf rather than learning paradigms.</p>
  `,

  background: [
    {
      title: 'Grendel’s mother',
      html: `
        <p>The poem never names her. It calls her <span class="la">ides</span> “lady”, a word otherwise used of queens and noblewomen, as well as <span class="la">āglǣcwīf</span> “monster-woman” and <span class="la">brimwylf</span> “sea-wolf”. In our passage she is <span class="la">idese onlīcnes</span>, “the likeness of a woman”. Whether the respectful words are irony, or show that she is in some sense a human avenger doing what the heroic code demands (avenging a kinsman), is a long-running debate. Her raid follows exactly the logic of the feud that Lecture VI described.</p>
        <p>The father is unknown: <span class="la">nō hīe fæder cunnon</span>. Earlier the poet has traced Grendel’s descent from Cain (lines 104–114, Lecture V), so the ancestry is biblical, not literal.</p>
      `
    },
    {
      title: 'A landscape from hell?',
      html: `
        <p>Richard Morris, editing the Blickling Homilies in 1874–80, noticed that Homily XVI (for Michaelmas; XVII in Morris’s own numbering) describes the entrance to hell in strikingly similar terms: a grey stone over water, frost-covered woods hanging (<span class="la">hrīmige bearwas</span>), dark mists, and monsters in the water below. Both texts draw on the apocryphal <em>Visio Pauli</em>. Most scholars think the homilist knew Beowulf, or that both used a common source; few now think the poet copied the homily.</p>
        <p>The parallel matters for a crux in our text: the manuscript’s <span class="la">hrinde bearwas</span> (1363) makes no obvious sense, and Morris proposed reading <span class="la">hrīmge</span> “frosty” from the homily. Klaeber keeps the manuscript’s <span class="la">hrinde</span>; editors differ on how to explain it. Either way, the mere is described with images of hell and also as a real northern landscape of moors, cliffs and waterfalls; the poem holds both.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sir_Edwin_Landseer_-_The_Monarch_of_the_Glen_-_NG_2881_-_National_Galleries_of_Scotland.jpg/960px-Sir_Edwin_Landseer_-_The_Monarch_of_the_Glen_-_NG_2881_-_National_Galleries_of_Scotland.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sir_Edwin_Landseer_-_The_Monarch_of_the_Glen_-_NG_2881_-_National_Galleries_of_Scotland.jpg/500px-Sir_Edwin_Landseer_-_The_Monarch_of_the_Glen_-_NG_2881_-_National_Galleries_of_Scotland.jpg|https://upload.wikimedia.org/wikipedia/commons/f/ff/Sir_Edwin_Landseer_-_The_Monarch_of_the_Glen_-_NG_2881_-_National_Galleries_of_Scotland.jpg" alt="Painting of a red deer stag with large antlers standing against misty Highland mountains"><figcaption>Edwin Landseer, <em>The Monarch of the Glen</em> (1851, National Galleries of Scotland): a Victorian stag, <span class="la">heorot hornum trum</span>, in a landscape of moors and mist. <span class="credit">Painting, public domain · <a href="https://commons.wikimedia.org/wiki/File:Sir_Edwin_Landseer_-_The_Monarch_of_the_Glen_-_NG_2881_-_National_Galleries_of_Scotland.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'The stag at the bank',
      html: `
        <p>The image of the hunted stag (<span class="la">heorot</span>) that prefers death to the water is often read as a pun on the name of Hrothgar’s hall, Heorot, “Hart”: the hall that is now itself hunted. Whether the poet meant it is beyond proof, but the word is the same. Stag symbols appear in royal contexts in early Anglo-Saxon England: the Sutton Hoo whetstone is topped by a bronze stag.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Nis þæt feor heonon<br>mīlgemearces, þæt se mere standeð;<br>ofer þǣm hongiað hrinde bearwas,<br>wudu wyrtum fæst wæter oferhelmað.</p>
    <p>“It is not far from here, by the measure of miles, that the mere stands; over it hang frost-covered groves, a wood firm in its roots overshadows the water.” <em>Beowulf</em> 1361b–1364, after Klaeber, with length marks added for this course.</p>
    <p><span class="la">ofer þǣm</span> “over which”: the demonstrative <span class="la">þǣm</span> used as a relative pronoun (grammar section 1). The verb <span class="la">oferhelmað</span> “over-helms”, covers like a helmet, occurs only here.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>fyrgenstrēam</strong>: <span class="la">g</span> between a consonant and a front vowel is German <em>j</em>: <em>für-jen-strä-am</em>. The pronunciation of <span class="la">g</span> after r is disputed; j is the usual view.</li>
      <li><strong>nīðwundor</strong>: long ī, then ð voiced between vowels and voiced consonants (German has no ð; English <em>this</em>).</li>
      <li><strong>hǣðstapa</strong>: ǣ long, like German <em>ä</em> in <em>Käse</em>.</li>
      <li><strong>heorot</strong>: short diphthong eo, stress on the first syllable: <em>heo-rot</em>, German <em>Hirsch</em>.</li>
      <li><strong>hwæþer</strong>: breathed hw, then æ as in German <em>hätte</em> but more open.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. Relative clauses',
      html: `
        <p>Old English has no special relative pronoun. It uses three devices, all with German parallels:</p>
        <ul>
          <li><strong>The demonstrative alone</strong>: <span class="la">þone on gēardagum Grendel nemdon foldbūende</span> “whom the earth-dwellers named Grendel”; <span class="la">ofer þǣm hongiað … bearwas</span> “over which hang groves”. This is German <em>den man Grendel nannte</em>, <em>über dem</em>: the German relative pronoun is the same word as the article.</li>
          <li><strong>The particle þe</strong>, which does not inflect: <span class="la">sē þe holmclifu healdan scolde</span> “he who had to guard the sea-cliffs” (Lecture IX). Compare Bavarian and Swiss <em>wo</em>: <em>der Mann, wo …</em>.</li>
          <li><strong>Both together</strong>, <span class="la">se þe, sēo þe, þæt þe</span>: the demonstrative takes the case the relative clause needs, or the case of the main clause; both occur.</li>
        </ul>
        <p>Also relative in effect: <span class="la">þǣr</span> “where” (<span class="la">ðǣr fyrgenstrēam … niþer gewīteð</span>), <span class="la">þonan</span> “whence”. In every case the verb tends to the end of the relative clause, as in German.</p>
      `
    },
    {
      title: '2. Impersonal and indefinite constructions',
      html: `
        <ul>
          <li><strong>No subject</strong> where German needs <em>man</em>: <span class="la">Þǣr mæg nihta gehwǣm nīðwundor sēon</span>, “there (one) can see a dreadful wonder every night”. Old English can also use <span class="la">man, mon</span> (Lecture VII: <span class="la">Hēr mon mæg giet gesīon hiora swæð</span>).</li>
          <li><strong>Impersonal verbs</strong> with a dative or accusative of the person: <span class="la">mē þynceð</span> “it seems to me” (German <em>mich dünkt</em>, archaic <em>mir deucht</em>); <span class="la">mē hingrað</span> “I am hungry” (<em>mich hungert</em>); <span class="la">him speow</span> “he succeeded” (Alfred).</li>
          <li><strong>Anticipatory þæt or hit</strong>: <span class="la">Nis þæt feor heonon … þæt se mere standeð</span>, “it is not far from here that the mere stands”, as German <em>es ist nicht weit von hier, dass …</em>.</li>
          <li><strong>gelang æt</strong> “depending on”: <span class="la">Nū is se rǣd gelang eft æt þē ānum</span>, “now help depends on you alone”; German <em>gelangen</em> is related, <em>an dir gelegen</em> is close in sense.</li>
        </ul>
      `
    },
    {
      title: '3. Numerals',
      html: `
        <p>The first three numbers inflect for gender and case, as older German did (<em>zween Männer, zwo Frauen, zwei Kinder</em>, still used in Luther’s Bible):</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Masc.</th><th>Neut.</th><th>Fem.</th></tr></thead>
          <tbody>
            <tr><th>“two”, nom./acc.</th><td class="la">twēgen</td><td class="la">tū, twā</td><td class="la">twā</td></tr>
            <tr><th>gen. / dat.</th><td colspan="3" class="la">twēgra / twǣm</td></tr>
            <tr><th>“three”, nom./acc.</th><td class="la">þrīe</td><td class="la">þrēo</td><td class="la">þrēo</td></tr>
            <tr><th>gen. / dat.</th><td colspan="3" class="la">þrēora / þrim</td></tr>
          </tbody>
        </table></div>
        <p>English <em>twain</em> is <span class="la">twēgen</span>; <em>two</em> is the feminine and neuter <span class="la">twā</span>. <span class="la">ān</span> “one” declines like a strong adjective and also means “alone” (<span class="la">æt þē ānum</span>, “at you alone”). From four upwards numbers are mostly undeclined and take a genitive: <span class="la">twelf wintra</span> (Lecture VI), <span class="la">fīftȳna sum</span> (Lecture VIII).</p>
        <p>Ordinals: <span class="la">forma</span> (or <span class="la">ǣrest</span>), <span class="la">ōðer</span> “second” (there is no word from “two”; English <em>second</em> is French), <span class="la">þridda, fēorða, fīfta</span>. So <span class="la">ōðer … ōðer</span> in the reading is “the one … the other”, with <span class="la">Ðǣra ōðer</span> “one of them”.</p>
      `
    },
    {
      title: '4. Result and comparison',
      html: `
        <ul>
          <li><strong>Result after a negative</strong>, with the subjunctive: <span class="la">Nō þæs frōd leofað gumena bearna, þæt þone grund wite</span>, “none of the sons of men lives so wise that he knows the bottom”. <span class="la">þæs … þæt</span> is “so … that”; <span class="la">wite</span> is subjunctive because such a person does not exist.</li>
          <li><strong>Comparison</strong> with <span class="la">þonne</span> “than”: <span class="la">māra þonne ǣnig man ōðer</span>, German <em>größer als</em> (<span class="la">þonne</span> is the source of English <em>than</em>, and German <em>denn</em> once meant “than”: <em>mehr denn je</em>).</li>
          <li><strong>ǣr … ǣr</strong> “sooner … than”: <span class="la">ǣr hē feorh seleð … ǣr hē in wille</span>, “he will give up his life sooner than he will (go) in”. Here <span class="la">ǣr</span> is not temporal, and the first clause has the indicative.</li>
        </ul>
      `
    }
  ],

  vocab: [
    { id: 'mere', head: 'mere', la: 'mere, meres', g: 'm', pos: 'noun, strong', en: 'lake, pool, mere; sea', note: 'German Meer, but in Old English usually inland water. Windermere.' },
    { id: 'ides', head: 'ides', la: 'ides, idese', g: 'f', pos: 'noun, strong', en: 'lady, woman (poetic)', note: 'Old High German itis (Merseburg Charms: idisi).' },
    { id: 'heorot', head: 'heorot', la: 'heorot, heorotes', g: 'm', pos: 'noun, strong', en: 'hart, stag', note: 'German Hirsch. Also the name of Hrothgar’s hall.' },
    { id: 'hund', head: 'hund', la: 'hund, hundes', g: 'm', pos: 'noun, strong', en: 'dog, hound', note: 'German Hund. Also the numeral hund “hundred”, a different word.' },
    { id: 'faeder', head: 'fæder', la: 'fæder, fæder (gen. sg. also fæderes)', g: 'm', pos: 'noun, irregular', en: 'father', note: 'German Vater (High German f → v spelling; d → t shift).' },
    { id: 'lyft', head: 'lyft', la: 'lyft, lyfte', g: 'm/f', pos: 'noun, strong', en: 'air, sky', note: 'German Luft; English loft, lift.' },
    { id: 'raed', head: 'rǣd', la: 'rǣd, rǣdes', g: 'm', pos: 'noun, strong', en: 'advice, counsel; help, remedy', note: 'German Rat. Æthelræd “noble counsel”, “Unready” = unrǣd “bad counsel”.' },
    { id: 'stow', head: 'stōw', la: 'stōw, stōwe', g: 'f', pos: 'noun, strong', en: 'place', note: 'In place-names: Stow, Padstow, Bristol (Brycgstōw).' },
    { id: 'grund', head: 'grund', la: 'grund, grundes', g: 'm', pos: 'noun, strong', en: 'ground, bottom (of water), earth', note: 'German Grund (auf Grund laufen).' },
    { id: 'hafela', head: 'hafela', la: 'hafela, hafelan', g: 'm', pos: 'noun, weak', en: 'head (poetic)', note: 'Verse only; prose has hēafod (German Haupt).' },
    { id: 'nemnan', head: 'nemnan', la: 'nemnan; nemde', pos: 'verb, weak (1)', en: 'name, call', note: 'German nennen, nannte.' },
    { id: 'warian', head: 'warian', la: 'warian; warode', pos: 'verb, weak (2)', en: 'guard; inhabit, occupy', note: 'German wahren, bewahren.' },
    { id: 'seon', head: 'sēon', la: 'sēon; seah, sāwon; sewen', pos: 'verb, strong (V)', en: 'see', note: 'German sehen, sah. Usually with ge-: gesēon.' },
    { id: 'libban', head: 'libban', la: 'libban; leofað; lifde', pos: 'verb, weak (3)', en: 'live', note: 'German leben. Present 3 sg. leofað, past lifde.' },
    { id: 'sellan', head: 'sellan', la: 'sellan; sealde; geseald', pos: 'verb, weak (1), irregular', en: 'give, hand over; sell', note: 'The meaning “sell” is later. feorh sellan: give up one’s life.' },
    { id: 'tredan', head: 'tredan', la: 'tredan; træd, trǣdon; treden', pos: 'verb, strong (V)', en: 'tread, walk', note: 'German treten, trat.' },
    { id: 'twegen', head: 'twēgen', la: 'twēgen (m.), tū (n.), twā (f., n.)', pos: 'numeral', en: 'two', note: 'English twain; older German zween, zwo, zwei.' },
    { id: 'faest', head: 'fæst', la: 'fæst', pos: 'adjective', en: 'firm, fixed, fast', note: 'German fest. Adverb fæste.' }
  ],

  grammarCards: [
    { id: 'oe10-rel', front: 'Three ways to form a relative clause', back: 'se/sēo/þæt alone; þe alone; se þe (both)' },
    { id: 'oe10-thone', front: 'þone on gēardagum Grendel nemdon', back: 'whom in days of old they named Grendel (as German den man … nannte)' },
    { id: 'oe10-ofer', front: 'ofer þǣm hongiað hrinde bearwas', back: 'over which hang frosty groves (þǣm as relative)' },
    { id: 'oe10-the', front: 'The relative particle þe', back: 'Invariable, like Bavarian/Swiss wo' },
    { id: 'oe10-imp', front: 'Þǣr mæg … nīðwundor sēon', back: 'There one can see a dreadful wonder (no subject; German man)' },
    { id: 'oe10-thync', front: 'mē þynceð', back: 'it seems to me (German mich dünkt)' },
    { id: 'oe10-two', front: '“two”: masc. / fem. / neut.', back: 'twēgen / twā / tū (twā) — zween, zwo, zwei' },
    { id: 'oe10-three', front: '“three”: masc. / fem., neut.', back: 'þrīe / þrēo' },
    { id: 'oe10-twagen', front: '“two”, gen. and dat.', back: 'twēgra, twǣm' },
    { id: 'oe10-other', front: 'ōðer as a numeral', back: '“second”; ōðer … ōðer: the one … the other' },
    { id: 'oe10-gen', front: 'Numbers from four up', back: 'Mostly undeclined, with the genitive: twelf wintra' },
    { id: 'oe10-result', front: 'Nō þæs frōd … þæt þone grund wite', back: 'none so wise that he knows the bottom (subjunctive: no such person)' },
    { id: 'oe10-thonne', front: 'māra þonne', back: 'greater than (German größer als; mehr denn je)' },
    { id: 'oe10-aer', front: 'ǣr … ǣr', back: 'sooner … than (ǣr hē feorh seleð … ǣr hē in wille)' },
    { id: 'oe10-gelang', front: 'Nū is se rǣd gelang eft æt þē ānum', back: 'Now help depends on you alone (Beowulf 1376b–1377a)' },
    { id: 'oe10-hrinde', front: 'hrinde bearwas: the crux', back: 'MS hrinde; Morris read hrīmge “frosty” (Blickling Homily XVI)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'In <span class="la">þone … Grendel nemdon</span>, <span class="la">þone</span> means:', options: ['whom', 'then', 'than', 'the'], answer: 0, explain: 'Demonstrative used as a relative pronoun.' },
    { id: 'e2', type: 'mc', prompt: 'The relative particle <span class="la">þe</span>:', options: ['does not inflect', 'has four cases', 'is always plural', 'means “you”'], answer: 0, explain: 'Like Bavarian wo.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">twēgen</span> is:', options: ['masculine “two”', 'feminine “two”', '“twenty”', '“twelve”'], answer: 0, explain: 'English twain, older German zween.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Þǣr mæg nihta gehwǣm nīðwundor sēon</span>: who sees?', options: ['anyone (“one can see”)', 'Grendel', 'Hrothgar', 'the stag'], answer: 0, explain: 'No subject: German man.' },
    { id: 'e5', type: 'mc', prompt: 'Why is <span class="la">wite</span> (1367) subjunctive?', options: ['No such wise man exists', 'It is a wish', 'It follows ǣr', 'It is plural'], answer: 0, explain: 'Result after a negative.' },
    { id: 'e6', type: 'mc', prompt: 'What can be seen on the mere every night?', options: ['fire on the water', 'Grendel’s mother', 'a ship', 'stars'], answer: 0, explain: 'fȳr on flōde.' },
    { id: 'e7', type: 'mc', prompt: 'What does the hunted stag do at the mere?', options: ['Gives up its life on the bank rather than go in', 'Swims across', 'Drinks', 'Turns on the hounds'], answer: 0, explain: 'ǣr hē feorh seleð … ǣr hē in wille.' },
    { id: 'e8', type: 'mc', prompt: 'What did people know of Grendel’s father?', options: ['Nothing', 'He was a giant', 'He was Cain', 'He lived in the mere'], answer: 0, explain: 'nō hīe fæder cunnon.' },
    { id: 'e9', type: 'match', prompt: 'Match the words to German.', pairs: [
      ['heorot', 'Hirsch'], ['lyft', 'Luft'], ['rǣd', 'Rat'], ['nemnan', 'nennen'], ['ōfer', 'Ufer']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the numerals.', pairs: [
      ['twēgen', 'two (m.)'], ['þrēo', 'three (f., n.)'], ['ōðer', 'second'], ['forma', 'first'], ['twǣm', 'two (dat.)']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">___ on gēardagum Grendel nemdon</span>', hint: 'whom (acc. m.)', answers: ['þone', 'ðone'], full: 'þone on gēardagum Grendel nemdon', explain: 'Beowulf 1354.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">hīe gesāwon swylce ___ micle mearcstapan</span>', hint: 'two (m.)', answers: ['twēgen', 'twegen'], full: 'hīe gesāwon swylce twēgen micle mearcstapan', explain: 'mearcstapa is masculine.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">hē wæs māra ___ ǣnig man ōðer</span>', hint: 'than', answers: ['þonne', 'ðonne'], full: 'hē wæs māra þonne ǣnig man ōðer', explain: 'German als, older denn.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Nū is se rǣd gelang eft æt þē ān___</span>', hint: 'alone (dat. m.)', answers: ['um'], full: 'Nū is se rǣd gelang eft æt þē ānum', explain: 'ān declines like a strong adjective.' },
    { id: 'e15', type: 'paradigm', prompt: 'Decline “two” and “three” (nom./acc.).', headers: ['two', 'three'], rows: [
      { label: 'masculine', answers: ['twēgen|twegen', 'þrīe|þrie|ðrīe'] },
      { label: 'feminine', answers: ['twā|twa', 'þrēo|þreo|ðrēo'] },
      { label: 'neuter', answers: ['tū|tu|twā|twa', 'þrēo|þreo|ðrēo'] },
      { label: 'dative (all)', answers: ['twǣm|twæm|twam', 'þrim|ðrim'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Give the infinitive and the past singular.', headers: ['Infinitive', 'Past sg.'], rows: [
      { label: 'see', answers: ['sēon|seon|gesēon', 'seah|geseah'] },
      { label: 'tread', answers: ['tredan', 'træd'] },
      { label: 'live', answers: ['libban', 'lifde'] },
      { label: 'name', answers: ['nemnan', 'nemde|nemnde'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the English translation in order.', source: 'Nis þæt feor heonon.', tokens: ['It is', 'not', 'far', 'from here'], explain: 'nis = ne is.' },
    { id: 'e18', type: 'translate', dir: 'oe-en', source: 'Se heorot sēcð þone holt.', model: 'The stag seeks the wood.', accepted: ['stag seeks wood', 'stag seeks forest', 'hart seeks wood', 'hart seeks forest', 'stag looks for wood', 'stag looks for forest', 'stag is looking for wood', 'stag seeks the wood'] },
    { id: 'e19', type: 'translate', dir: 'oe-en', source: 'Þǣr mon mæg fȳr sēon.', model: 'There one can see fire.', accepted: ['there one can see fire', 'one can see fire there', 'there you can see fire', 'there people can see fire', 'there one may see fire'] },
    { id: 'e20', type: 'translate', dir: 'en-oe', source: 'two men (twēgen, mann)', model: 'twēgen menn', accepted: ['twēgen menn', 'twēgen men'] },
    { id: 'e21', type: 'translate', dir: 'en-oe', source: 'the stag (nom.)', model: 'se heorot', accepted: ['se heorot'] },
    { id: 'e22', type: 'mc', prompt: 'Which text describes the entrance to hell in terms close to the mere?', options: ['Blickling Homily XVI', 'Alfred’s Preface', 'The Battle of Maldon', 'The Chronicle for 755'], answer: 0, explain: 'Both draw on the Visio Pauli.' },
    { id: 'e23', type: 'mc', prompt: 'What is the poem’s name for Grendel’s mother?', options: ['She is never named', 'Wealhtheow', 'Hild', 'Æschere'], answer: 0, explain: 'She is called ides, āglǣcwīf, brimwylf.' }
  ],

  reading: {
    title: 'Beowulf 1345–1377',
    note: 'Authentic text: Klaeber’s edition (1922), lines 1345–1377a. The normalised view adds length marks for this course; “Klaeber, unmarked” shows the text as transcribed online. The passage ends at the half-line eft æt þē ānum. Tap any word.',
    diplomaticLabel: 'Klaeber, unmarked',
    diplomaticNote: 'Klaeber’s text as transcribed online, without length marks.',
    text: 'Ic þæt londbūend, lēode mīne,\nselerǣdende secgan hȳrde,\nþæt hīe gesāwon swylce twēgen\nmicle mearcstapan mōras healdan,\nellorgǣstas. Ðǣra ōðer wæs,\nþæs þe hīe gewislīcost gewitan meahton,\nidese onlīcnes; ōðer earmsceapen\non weres wæstmum wræclāstas træd,\nnæfne hē wæs māra þonne ǣnig man ōðer;\nþone on gēardagum Grendel nemdon\nfoldbūende; nō hīe fæder cunnon,\nhwæþer him ǣnig wæs ǣr ācenned\ndyrnra gāsta. Hīe dȳgel lond\nwarigeað wulfhleoþu, windige næssas,\nfrēcne fengelād, ðǣr fyrgenstrēam\nunder næssa genipu niþer gewīteð,\nflōd under foldan. Nis þæt feor heonon\nmīlgemearces, þæt se mere standeð;\nofer þǣm hongiað hrinde bearwas,\nwudu wyrtum fæst wæter oferhelmað.\nÞǣr mæg nihta gehwǣm nīðwundor sēon,\nfȳr on flōde. Nō þæs frōd leofað\ngumena bearna, þæt þone grund wite.\nÐēah þe hǣðstapa hundum geswenced,\nheorot hornum trum holtwudu sēce,\nfeorran geflȳmed, ǣr hē feorh seleð,\naldor on ōfre, ǣr hē in wille,\nhafelan beorgan; nis þæt hēoru stōw!\nÞonon ȳðgeblond up āstīgeð\nwon tō wolcnum, þonne wind styreþ,\nlāð gewidru, oð þæt lyft drysmaþ,\nroderas rēotað. Nū is se rǣd gelang\neft æt þē ānum.',
    diplomatic: 'Ic þæt londbuend, leode mine,\nselerædende secgan hyrde,\nþæt hie gesawon swylce twegen\nmicle mearcstapan moras healdan,\nellorgæstas. Ðæra oðer wæs,\nþæs þe hie gewislicost gewitan meahton,\nidese onlicnes; oðer earmsceapen\non weres wæstmum wræclastas træd,\nnæfne he wæs mara þonne ænig man oðer;\nþone on geardagum Grendel nemdon\nfoldbuende; no hie fæder cunnon,\nhwæþer him ænig wæs ær acenned\ndyrnra gasta. Hie dygel lond\nwarigeað wulfhleoþu, windige næssas,\nfrecne fengelad, ðær fyrgenstream\nunder næssa genipu niþer gewiteð,\nflod under foldan. Nis þæt feor heonon\nmilgemearces, þæt se mere standeð;\nofer þæm hongiað hrinde bearwas,\nwudu wyrtum fæst wæter oferhelmað.\nÞær mæg nihta gehwæm niðwundor seon,\nfyr on flode. No þæs frod leofað\ngumena bearna, þæt þone grund wite.\nÐeah þe hæðstapa hundum geswenced,\nheorot hornum trum holtwudu sece,\nfeorran geflymed, ær he feorh seleð,\naldor on ofre, ær he in wille,\nhafelan beorgan; nis þæt heoru stow!\nÞonon yðgeblond up astigeð\nwon to wolcnum, þonne wind styreþ,\nlað gewidru, oð þæt lyft drysmaþ,\nroderas reotað. Nu is se ræd gelang\neft æt þe anum.',
    translations: [
      { label: 'English translation', text: 'I have heard the land-dwellers, my people, the hall-counsellors, say that they had seen two such huge border-walkers holding the moors, alien spirits. One of them was, as far as they could most certainly tell, the likeness of a woman; the other, misshapen, trod the paths of exile in the form of a man, except that he was bigger than any other man; him the earth-dwellers in days of old named Grendel. They knew of no father, whether any of the secret spirits had been born to him before. They inhabit a hidden land, wolf-slopes, windy headlands, a dangerous fen-path, where the mountain stream goes down under the mists of the cliffs, the water beneath the earth. It is not far from here, by the measure of miles, that the mere stands; over it hang frost-covered groves, a wood firm in its roots overshadows the water. There every night one can see a dreadful wonder, fire on the water. No one of the sons of men lives so wise that he knows the bottom. Though the heath-stepper, harried by hounds, the hart strong in its horns, should seek the forest, put to flight from afar, it will give up its life, its being, on the bank sooner than it will go in to save its head; that is not a pleasant place! From there the surge of waves rises up dark to the clouds, when the wind stirs up hateful storms, until the air grows gloomy and the heavens weep. Now the remedy depends once more on you alone.' },
      { label: 'German translation', text: 'Ich hörte die Landbewohner, meine Leute, die Hallenräte sagen, dass sie zwei solche gewaltige Grenzgänger die Moore bewohnen sahen, fremde Geister. Der eine davon war, soweit sie es am sichersten erkennen konnten, das Abbild einer Frau; der andere, missgestaltet, betrat in Mannesgestalt die Pfade der Verbannung, nur dass er größer war als jeder andere Mann; ihn nannten die Erdbewohner in alten Tagen Grendel. Sie wussten von keinem Vater, ob ihm je einer der heimlichen Geister geboren worden war. Sie bewohnen ein verborgenes Land, Wolfshänge, windige Klippen, einen gefährlichen Moorpfad, wo der Bergstrom unter den Nebeln der Klippen hinabgeht, die Flut unter die Erde. Es ist nicht weit von hier, nach Meilenmaß, dass der See liegt; über ihm hängen bereifte Haine, ein wurzelfester Wald überschattet das Wasser. Dort kann man jede Nacht ein schreckliches Wunder sehen, Feuer auf der Flut. Keiner der Menschenkinder lebt so weise, dass er den Grund kennt. Auch wenn der Heidegänger, von Hunden gehetzt, der Hirsch, stark im Geweih, den Wald aufsucht, von fern verjagt, gibt er eher sein Leben, seinen Atem am Ufer hin, als dass er hineinwollte, sein Haupt zu bergen; das ist kein geheurer Ort! Von dort steigt das Wogengewühl dunkel zu den Wolken, wenn der Wind leidige Unwetter aufrührt, bis die Luft sich verdüstert und die Himmel weinen. Nun liegt der Rat wieder bei dir allein.' }
    ],
    notes: [
      { ref: 'Ic þæt londbūend … secgan hȳrde', html: '<span class="la">secgan hȳrde</span>: “heard (them) say”, an infinitive after a verb of perception, as German <em>sagen hören</em>. <span class="la">þæt</span> anticipates the following <span class="la">þæt</span>-clause.' },
      { ref: 'Ðǣra ōðer wæs … idese onlīcnes; ōðer earmsceapen', html: '<span class="la">ōðer … ōðer</span>: “the one … the other”. <span class="la">þæs þe … meahton</span>: “as far as they could tell”.' },
      { ref: 'þone on gēardagum Grendel nemdon foldbūende', html: 'Relative clause introduced by the bare demonstrative <span class="la">þone</span> “whom”. The subject, <span class="la">foldbūende</span>, comes at the start of the next line.' },
      { ref: 'nō hīe fæder cunnon', html: '<span class="la">cunnan</span> “know, be acquainted with” (Lecture VII): “they knew of no father”.' },
      { ref: 'Hīe dȳgel lond warigeað wulfhleoþu, windige næssas, frēcne fengelād', html: 'Variation in the accusative: four objects for one landscape. The tense changes to the present: the place still exists.' },
      { ref: 'ofer þǣm hongiað hrinde bearwas', html: 'The manuscript reads <span class="la">hrinde</span>, otherwise unknown. Morris’s emendation <span class="la">hrīmge</span> “rimy, frosty” is based on the Blickling Homily; Klaeber keeps the manuscript form; how to explain it is disputed.' },
      { ref: 'Þǣr mæg nihta gehwǣm nīðwundor sēon', html: 'Impersonal: no subject. <span class="la">nihta gehwǣm</span>: “each of nights”, every night (dative of time).' },
      { ref: 'Nō þæs frōd leofað gumena bearna, þæt þone grund wite', html: '“None of the sons of men lives so wise that he knows the bottom”: result clause with the subjunctive <span class="la">wite</span>.' },
      { ref: 'Ðēah þe hǣðstapa … holtwudu sēce', html: 'Concessive clause with the subjunctive <span class="la">sēce</span> (Lecture IX). The stag is named twice: <span class="la">hǣðstapa</span> and <span class="la">heorot</span>.' },
      { ref: 'ǣr hē feorh seleð, aldor on ōfre, ǣr hē in wille, hafelan beorgan', html: '<span class="la">ǣr … ǣr</span>: “sooner … than”. <span class="la">in wille</span>: “will (go) in”, verb of motion omitted after <span class="la">willan</span>, as German <em>er will hinein</em>. Most editors think a verb has been lost after <span class="la">hafelan</span> and supply one; our transcription has <span class="la">beorgan</span> “save”, and <span class="la">hȳdan</span> “hide” is another proposal.' },
      { ref: 'nis þæt hēoru stōw', html: 'Understatement: “that is not a pleasant place”. <span class="la">hēoru</span> is rare; German <em>geheuer</em> (<em>nicht geheuer</em>) is related.' },
      { ref: 'roderas rēotað', html: '“The heavens weep”: rain, and a touch of personification. <span class="la">rodor</span> is a poetic word for sky.' }
    ],
    glosses: {
      'aldor': 'life (acc.)', 'bearna': 'of children, of sons (gen. pl. of bearn); gumena bearna: of the sons of men', 'bearwas': 'groves, woods (nom. pl. of bearu)', 'beorgan': 'protect, save (an editor’s supplement; see note)', 'cunnon': 'knew (of) (pret. pl.; here “knew of no father”)', 'drysmaþ': 'grows dark, gloomy (?)',
      'dyrnra': 'secret, hidden (gen. pl.)', 'dȳgel': 'hidden, secret (acc.)', 'earmsceapen': 'wretchedly shaped, miserable', 'eft': 'again; in turn', 'ellorgǣstas': 'alien spirits, spirits from elsewhere', 'fengelād': 'fen-path (acc.)',
      'feor': 'far', 'feorh': 'life (acc.)', 'feorran': 'from afar', 'flōd': 'flood, water', 'flōde': 'water (dat.)', 'foldan': 'earth (dat.)',
      'foldbūende': 'earth-dwellers, people (nom. pl.)', 'frēcne': 'dangerous, terrible (acc.)', 'frōd': 'wise, old', 'fyrgenstrēam': 'mountain stream', 'fæder': 'father (acc.)', 'fæst': 'fast, firmly fixed',
      'fȳr': 'fire', 'geflȳmed': 'put to flight, driven (past part. of geflȳman)', 'gehwǣm': 'each (dat.); nihta gehwǣm: every night', 'gelang': 'dependent on, at hand (gelang æt: depends on)', 'genipu': 'mists, darkness (acc. pl.)', 'geswenced': 'harried, hard pressed (past part. of geswencan)',
      'gesāwon': 'saw (pret. pl.)', 'gewidru': 'storms (nom. pl.; German Gewitter)', 'gewislīcost': 'most certainly (superlative adverb)', 'gewitan': 'know (= witan)', 'gewīteð': 'goes, departs (pres. of gewītan)', 'grendel': 'Grendel',
      'grund': 'bottom, ground (acc.)', 'gumena': 'of men (gen. pl. of guma)', 'gāsta': 'of spirits (gen. pl. of gāst)', 'gēardagum': 'days of old (dat. pl.)', 'hafelan': 'head (acc. of hafela)', 'healdan': 'hold, occupy',
      'heonon': 'from here', 'heorot': 'hart, stag (German Hirsch); the hall is named after it', 'him': 'him (dat.); to him', 'holtwudu': 'forest (acc.)', 'hongiað': 'hang (pres. pl. of hongian)', 'hornum': 'with horns (dat. pl.)',
      'hrinde': 'rimy, frost-covered? (a crux; see note)', 'hundum': 'by hounds (dat. pl. of hund)', 'hwæþer': 'whether', 'hē': 'he', 'hēoru': 'pleasant, safe (a rare word)', 'hīe': 'they',
      'hǣðstapa': 'heath-stepper, stag', 'hȳrde': 'heard (pret. of hȳran); secgan hȳrde: heard say', 'ic': 'I', 'idese': 'of a woman (gen. of ides)', 'in': 'in', 'is': 'is',
      'leofað': 'lives (pres. of libban)', 'lond': 'land (acc.)', 'londbūend': 'land-dwellers (nom. pl.)', 'lyft': 'air, sky', 'lāð': 'hateful', 'lēode': 'people (acc. pl.)',
      'man': 'man', 'meahton': 'could (pret. pl. of magan)', 'mearcstapan': 'border-walkers (acc. pl.)', 'mere': 'lake, mere (German Meer)', 'micle': 'great, huge (acc. pl.)', 'mæg': 'can; þǣr mæg … sēon: there one can see',
      'māra': 'bigger', 'mīlgemearces': 'by a mile-measure (gen.)', 'mīne': 'my (acc. pl.)', 'mōras': 'moors (acc. pl.)', 'nemdon': 'named (pret. pl. of nemnan)', 'nihta': 'of nights (gen. pl.)',
      'nis': 'is not', 'niþer': 'down, beneath (German nieder)', 'næssa': 'of headlands (gen. pl.)', 'næssas': 'headlands, cliffs (acc. pl.)', 'nīðwundor': 'dreadful wonder', 'nō': 'not at all, never',
      'nū': 'now', 'næfne': 'except that', 'ofer': 'over', 'oferhelmað': 'overshadows, overhangs', 'on': 'on, in; on ōfre: on the bank', 'onlīcnes': 'likeness',
      'oð': 'until (oð þæt)', 'roderas': 'the heavens (nom. pl.)', 'rēotað': 'weep (pres. pl.)', 'rǣd': 'counsel, help (German Rat)', 'se': 'the', 'secgan': 'say',
      'selerǣdende': 'hall-counsellors (acc. pl.)', 'seleð': 'gives up (pres. of sellan)', 'standeð': 'stands', 'styreþ': 'stirs (up)', 'stōw': 'place', 'swylce': 'such',
      'sēce': 'should seek (pres. subj. of sēcan)', 'sēon': 'see', 'trum': 'strong, firm', 'træd': 'trod (pret. of tredan)', 'twēgen': 'two (m.)', 'tō': 'to',
      'under': 'under', 'up': 'up', 'warigeað': 'inhabit, guard (pres. pl. of warian)', 'weres': 'of a man (gen. of wer)', 'wille': 'will, would (pres. subj. of willan)', 'wind': 'wind',
      'windige': 'windy (acc. pl.)', 'wite': 'may know (pres. subj. of witan)', 'wolcnum': 'clouds (dat. pl.); tō wolcnum: to the clouds', 'won': 'dark, murky (English wan)', 'wræclāstas': 'paths of exile (acc. pl.)', 'wudu': 'wood',
      'wulfhleoþu': 'wolf-slopes (acc. pl.)', 'wyrtum': 'by the roots (dat. pl. of wyrt)', 'wæs': 'was', 'wæstmum': 'form, stature (dat. pl.)', 'wæter': 'water (acc.)', 'æt': 'at; gelang æt þē: depends on you',
      'ðēah': 'though; ðēah þe: although', 'ðǣr': 'where', 'ðǣra': 'of them (gen. pl.)', 'þe': 'that, which; þæs þe: as far as', 'þone': 'whom (acc. m.)', 'þonne': 'than; when',
      'þonon': 'from there', 'þæs': 'so; nō þæs frōd: none so wise; þæs þe: as far as', 'þæt': 'that', 'þē': 'you (dat.)', 'þǣm': 'which (dat.); ofer þǣm: over which', 'þǣr': 'there',
      'ācenned': 'born (past part. of ācennan)', 'ānum': 'alone (dat.); æt þē ānum: on you alone', 'āstīgeð': 'rises (pres. of āstīgan)', 'ōfre': 'bank, shore (dat. of ōfer; German Ufer)', 'ōðer': '(the) one; the other; other', 'ǣnig': 'any',
      'ǣr': 'before (+ subj.); previously', 'ȳðgeblond': 'surging of waves, turmoil'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Who told Hrothgar about the two monsters?', options: ['The country people and his counsellors', 'Beowulf', 'A monk', 'Grendel’s mother'], answer: 0, explain: 'londbūend, lēode mīne, selerǣdende.' },
      { id: 'r2', type: 'mc', prompt: 'How far away is the mere?', options: ['Not many miles', 'A day’s sailing', 'In another country', 'Nobody knows'], answer: 0, explain: 'Nis þæt feor heonon mīlgemearces.' },
      { id: 'r3', type: 'mc', prompt: 'What happens when the wind rises?', options: ['The waves surge up to the clouds', 'The fire goes out', 'The monsters come out', 'The trees fall'], answer: 0, explain: 'ȳðgeblond up āstīgeð won tō wolcnum.' },
      { id: 'r4', type: 'mc', prompt: 'What does Hrothgar say at the end?', options: ['Help depends on Beowulf alone', 'They should leave Denmark', 'He will go himself', 'The mere is harmless'], answer: 0, explain: 'Nū is se rǣd gelang eft æt þē ānum.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">twā</span> is:', options: ['“two”, feminine (and neuter)', '“two”, masculine', '“twelve”', '“second”'], answer: 0, explain: 'English two comes from this form.' },
      { id: 't2', type: 'mc', prompt: '“second” in Old English:', options: ['ōðer', 'twēgen', 'secund', 'twifeald'], answer: 0, explain: 'English second is from French.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">mē þynceð</span> means:', options: ['it seems to me', 'I think of me', 'thank me', 'I am thin'], answer: 0, explain: 'German mich dünkt.' },
      { id: 't4', type: 'mc', prompt: 'Which is not a way of forming a relative clause?', options: ['hwā alone', 'se alone', 'þe alone', 'se þe'], answer: 0, explain: 'hwā is interrogative, not relative.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">sē þe holmclifu healdan scolde</span>: the relative particle is ___', hint: 'two letters', answers: ['þe', 'ðe'], full: 'þe', explain: 'Invariable.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">twelf wintr___</span>', hint: 'of twelve winters (gen. pl.)', answers: ['a'], full: 'twelf wintra', explain: 'Numbers from four take the genitive.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Hīe gesāwon twēgen menn.', model: 'They saw two men.', accepted: ['they saw two men', 'they had seen two men'] },
      { id: 't8', type: 'translate', dir: 'en-oe', source: 'three women (þrēo, wīf)', model: 'þrēo wīf', accepted: ['þrēo wīf'] },
      { id: 't9', type: 'mc', prompt: 'Who first linked the mere with Blickling Homily XVI?', options: ['Richard Morris', 'Fr. Klaeber', 'J. R. R. Tolkien', 'Henry Sweet'], answer: 0, explain: 'In his edition of the homilies, 1874–80.' },
      { id: 't10', type: 'mc', prompt: 'Whom did Grendel’s mother carry off?', options: ['Æschere', 'Hrothgar', 'Wiglaf', 'Unferth'], answer: 0, explain: 'Hrothgar’s closest counsellor.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">nis þæt hēoru stōw</span> is an example of:', options: ['understatement (litotes)', 'a kenning', 'a formula of departure', 'a subjunctive'], answer: 0, explain: '“Not a pleasant place”: a terrible place.' }
    ]
  },

  reference: [
    { title: 'Relative clauses', headers: ['Type', 'Example', 'Meaning'], rows: [['se alone', 'þone … Grendel nemdon', 'whom they called Grendel'], ['prep. + se', 'ofer þǣm hongiað bearwas', 'over which hang groves'], ['þe alone', 'þe hē cēnoste findan mihte', 'whom he could find boldest'], ['se þe', 'sē þe holmclifu healdan scolde', 'he who had to guard the cliffs'], ['þǣr', 'ðǣr fyrgenstrēam … gewīteð', 'where the stream goes']] },
    { title: 'Numerals 1–3', headers: ['', 'Masc.', 'Fem.', 'Neut.'], rows: [['one (nom.)', 'ān', 'ān', 'ān'], ['two (nom./acc.)', 'twēgen', 'twā', 'tū, twā'], ['two (gen./dat.)', 'twēgra / twǣm', '', ''], ['three (nom./acc.)', 'þrīe', 'þrēo', 'þrēo'], ['three (gen./dat.)', 'þrēora / þrim', '', '']] },
    { title: 'Ordinals', headers: ['Old English', 'English'], rows: [['forma, ǣrest', 'first'], ['ōðer', 'second'], ['þridda', 'third'], ['fēorða', 'fourth'], ['fīfta', 'fifth'], ['twelfta', 'twelfth']] }
  ]
});
