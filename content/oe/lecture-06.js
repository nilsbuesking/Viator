/*
 * Old English — Lecture VI: strong and weak adjectives; comparison; word order (verb-second, verb-final,
 * verb-first; þā “then” and þā “when”).
 * Reading: Beowulf 126–149a, after Fr. Klaeber (1922), as transcribed online without length marks
 * (sources/beowulf-klaeber-1922-lines-1-2601.txt). Macrons added for this course; see CONTENT-CHECKS.md.
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-06',
  number: 6,
  title: 'Twelve winters',
  subtitle: 'Strong and weak adjectives; comparison; word order; Beowulf 126–149',
  minutes: 60,

  intro: `
    <p>At dawn the Danes find the traces of Grendel’s raid, and the feast turns into lament. The next night he comes back, and the next. Men sleep elsewhere, the best of halls stands empty, and for twelve winters Hrothgar endures every kind of sorrow.</p>
    <p>The grammar is the adjective, and here German is an excellent guide. Old English has the same two sets of endings as German. After an article the adjective is <strong>weak</strong>: <span class="la">se gōda cyning</span>, <em>der gute König</em>. Without one it is <strong>strong</strong>, with endings much like the article’s: <span class="la">gōd cyning</span>, <span class="la">gōdne cyning</span>, <em>guter König, guten König</em>.</p>
    <p>The second topic is word order, again close to German: the verb second in main clauses, last in subordinate clauses. One practical rule follows from it: <span class="la">þā</span> followed directly by its verb means “then”; <span class="la">þā</span> with the verb at the end of the clause means “when”, as German <em>da war</em> beside <em>als … war</em>.</p>
  `,

  background: [
    {
      title: 'The empty hall',
      html: `
        <p>The passage moves in three steps: one night’s raid and the morning’s grief; the second raid “after one night”, which shows that Grendel will not stop; and the twelve years in which the best of halls stands <span class="la">īdel</span>, empty and useless, every night. The poet’s irony is sharp: after the first raid, “it was easy to find the man who sought a bed elsewhere, further away, among the outbuildings”. Nobody sleeps in Heorot any more.</p>
        <p>Grendel is called a <span class="la">healðegn</span>, a “hall-thegn”, the word for a retainer who serves in his lord’s hall. He has become the hall’s only occupant at night, a grim parody of the loyal retainer. In the following lines (149–169) the poet adds that Grendel would make no settlement and pay no compensation, the normal end of a feud in Anglo-Saxon law.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Stories_of_beowulf_Hrothgar.jpg/960px-Stories_of_beowulf_Hrothgar.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Stories_of_beowulf_Hrothgar.jpg/500px-Stories_of_beowulf_Hrothgar.jpg|https://upload.wikimedia.org/wikipedia/commons/6/67/Stories_of_beowulf_Hrothgar.jpg" alt="Book illustration of King Hrothgar"><figcaption>Hrothgar, as imagined by J. R. Skelton for H. E. Marshall’s retelling <em>Stories of Beowulf</em> (1908). An Edwardian picture, not evidence for how a Danish king looked. <span class="credit">Illustration, public domain · <a href="https://commons.wikimedia.org/wiki/File:Stories_of_beowulf_Hrothgar.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Why German adjectives make sense',
      html: `
        <p>Many learners of German wonder why <em>gut</em> has two sets of endings. Old English shows that the system is old and shared: Germanic created a “weak” adjective from the weak noun declension (Lecture IV), with <span class="la">-a, -an</span> everywhere, and used it when the noun was already made definite by an article. The strong adjective carries the case endings itself, because nothing else does. German still follows this logic (<em>guter Wein</em>, <em>der gute Wein</em>), and English has lost both sets.</p>
        <p>Poetry often uses the weak adjective without an article, as in <span class="la">wergan gāstes</span> “of the cursed spirit” and <span class="la">sweotolan tācne</span> “by a clear sign”. This is an older usage, from a time when the article was still a demonstrative, and it is one of the features that mark verse as archaic.</p>
      `
    },
    {
      title: 'Word order in verse and prose',
      html: `
        <p>Prose follows the rules of grammar section 4 quite consistently, as the Chronicle annal of Lecture III showed. Verse is freer, because alliteration and the half-line decide where words go: <span class="la">þolode ðrȳðswȳð</span> “the mighty one suffered” puts the verb first. Even in verse, though, a <span class="la">þā</span>-clause with the verb at the end is almost always “when”.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Mǣre þēoden,<br>æþeling ǣrgōd, unblīðe sæt,<br>þolode ðrȳðswȳð þegnsorge drēah</p>
    <p>“The famous prince, the long-proven nobleman, sat joyless; the mighty one suffered, endured sorrow for his thegns.” <em>Beowulf</em> 129–131, in Klaeber’s edition, with length marks added for this course.</p>
    <p>Four adjectives without an article, so all strong: <span class="la">mǣre, ǣrgōd, unblīðe, ðrȳðswȳð</span>. The last is used as a noun, “the strong one”. Hrothgar is described by a chain of epithets, the variation of Lecture II, before the verb tells us what he does: he sits and suffers.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>ūhtan</strong>: <span class="la">h</span> before <span class="la">t</span> after a back vowel is German <em>ch</em> as in <em>Bucht</em>: <em>uuch-tan</em>.</li>
      <li><strong>sēlest</strong>: long <em>ē</em>; the word is the superlative of <span class="la">sēl</span>, “good”, related to German <em>selig</em>.</li>
      <li><strong>ðrȳðswȳð</strong>: two long <span class="la">ȳ</span>, German <em>ü</em> held long: <em>thrüüth-swüüth</em>.</li>
      <li><strong>Adjective endings</strong> are never silent: <span class="la">lā-ðan, wer-gan, sweo-to-lan</span>.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. Strong adjectives: gōd',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Masc.</th><th>Neut.</th><th>Fem.</th><th>German (m.)</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">gōd</td><td class="la">gōd</td><td class="la">gōd</td><td>guter</td></tr>
            <tr><th>Acc. sg.</th><td class="la">gōdne</td><td class="la">gōd</td><td class="la">gōde</td><td>guten</td></tr>
            <tr><th>Gen. sg.</th><td class="la">gōdes</td><td class="la">gōdes</td><td class="la">gōdre</td><td>guten (older gutes)</td></tr>
            <tr><th>Dat. sg.</th><td class="la">gōdum</td><td class="la">gōdum</td><td class="la">gōdre</td><td>gutem</td></tr>
            <tr><th>Nom./Acc. pl.</th><td class="la">gōde</td><td class="la">gōd</td><td class="la">gōda, gōde</td><td>gute</td></tr>
            <tr><th>Gen. pl.</th><td class="la">gōdra</td><td class="la">gōdra</td><td class="la">gōdra</td><td>guter</td></tr>
            <tr><th>Dat. pl.</th><td class="la">gōdum</td><td class="la">gōdum</td><td class="la">gōdum</td><td>guten</td></tr>
          </tbody>
        </table></div>
        <p>The endings <span class="la">-ne, -re, -ra</span> are pronoun endings, borrowed from the demonstratives, as in German <em>guten, guter</em>. Short-stem adjectives add <span class="la">-u</span> in the nominative singular feminine and neuter plural (<span class="la">glædu</span>), like the nouns of Lectures II and IV. An instrumental <span class="la">gōde</span> survives in adverbs.</p>
        <p>The strong form is used without an article, and after <span class="la">bēon/wesan</span>: <span class="la">wæs þæt gewin tō strang, lāð ond longsum</span>.</p>
      `
    },
    {
      title: '2. Weak adjectives: se gōda',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Masc.</th><th>Neut.</th><th>Fem.</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">se gōda</td><td class="la">þæt gōde</td><td class="la">sēo gōde</td></tr>
            <tr><th>Acc. sg.</th><td class="la">þone gōdan</td><td class="la">þæt gōde</td><td class="la">þā gōdan</td></tr>
            <tr><th>Gen./Dat. sg.</th><td class="la">þæs / þǣm gōdan</td><td class="la">þæs / þǣm gōdan</td><td class="la">þǣre gōdan</td></tr>
            <tr><th>Nom./Acc. pl.</th><td colspan="3" class="la">þā gōdan</td></tr>
            <tr><th>Gen. pl.</th><td colspan="3" class="la">þāra gōdra (gōdena)</td></tr>
            <tr><th>Dat. pl.</th><td colspan="3" class="la">þǣm gōdum</td></tr>
          </tbody>
        </table></div>
        <p>These are the endings of the weak nouns (<span class="la">guma, tunge, ēage</span>). The weak form is used after <span class="la">se, sēo, þæt</span>, after <span class="la">þes</span>, after possessives (<span class="la">mīn lēofa sunu</span>), in address (<span class="la">lēofa Bīowulf</span>), and in poetry often alone. German: <em>der gute, den guten, des guten, dem guten</em>; <em>mein lieber Sohn</em>.</p>
      `
    },
    {
      title: '3. Comparison',
      html: `
        <p>Comparative <span class="la">-ra</span>, superlative <span class="la">-ost</span> or <span class="la">-est</span>: <span class="la">heard, heardra, heardost</span> (<em>hart, härter, am härtesten</em>); <span class="la">lang, lengra, lengest</span>, with umlaut as in German <em>lang, länger</em>. Comparatives are always declined weak.</p>
        <p>Irregular, as in German and English:</p>
        <ul>
          <li><span class="la">gōd</span>: <span class="la">betera, betst</span> (also <span class="la">sēlra, sēlest</span>): <em>gut, besser, best</em></li>
          <li><span class="la">micel</span>: <span class="la">māra, mǣst</span>: <em>viel, mehr, meist</em></li>
          <li><span class="la">lȳtel</span>: <span class="la">lǣssa, lǣst</span>: <em>less, least</em></li>
          <li><span class="la">yfel</span>: <span class="la">wyrsa, wyrst</span>: <em>übel; worse, worst</em></li>
        </ul>
        <p>In the reading: <span class="la">lengra</span> “longer”, <span class="la">māre</span> “greater”, <span class="la">hūsa sēlest</span> “the best of houses”, and the comparative adverbs <span class="la">gerūmlīcor</span>, <span class="la">fæstor</span>.</p>
      `
    },
    {
      title: '4. Word order',
      html: `
        <ul>
          <li><strong>Main clauses: verb second.</strong> <span class="la">Þā wæs on ūhtan … Grendles gūðcræft gumum undyrne</span>: “Then was at dawn Grendel’s strength plain to men”, as German <em>Da war im Morgengrauen …</em>.</li>
          <li><strong>Subordinate clauses: verb last.</strong> <span class="la">syðþan hīe þæs lāðan lāst scēawedon</span>, “when they the hateful one’s track examined”, as German <em>nachdem sie die Spur … betrachtet hatten</em>.</li>
          <li><strong>Verb first</strong> in lively narrative and in verse: <span class="la">þolode ðrȳðswȳð</span>; <span class="la">hēold hyne syðþan fyr ond fæstor</span>.</li>
        </ul>
        <p>The rule for <span class="la">þā</span>: <span class="la">Þā wæs ēaðfynde …</span>, verb immediately after, means “then”; <span class="la">ðā him gebēacnod wæs</span>, verb at the end, means “when”. The same holds for <span class="la">þonne</span> (“then” / “whenever”) and <span class="la">þǣr</span> (“there” / “where”). When both clauses are present, the order often settles which is which: <span class="la">þā hē þæt geseah, þā wæs hē blīþe</span>, “when he saw that, then he was glad”.</p>
      `
    }
  ],

  vocab: [
    { id: 'lath', head: 'lāð', la: 'lāð', pos: 'adjective', en: 'hateful, hostile; (as noun) enemy', note: 'German leid (es tut mir leid), Leid; English loath.' },
    { id: 'strang', head: 'strang', la: 'strang; strengra, strengest', pos: 'adjective', en: 'strong', note: 'German streng. Umlaut in the comparison, as lang, lengra.' },
    { id: 'micel', head: 'micel', la: 'micel; māra, mǣst', pos: 'adjective', en: 'great, large, much', note: 'Scots mickle; German viel / mehr / meist for the comparison.' },
    { id: 'lytel', head: 'lȳtel', la: 'lȳtel; lǣssa, lǣst', pos: 'adjective', en: 'little, small', note: 'English little, less, least.' },
    { id: 'yfel', head: 'yfel', la: 'yfel; wyrsa, wyrst', pos: 'adjective', en: 'bad, evil', note: 'German übel. English evil; worse, worst.' },
    { id: 'eald', head: 'eald', la: 'eald; ieldra, ieldest', pos: 'adjective', en: 'old', note: 'German alt, älter. English elder, eldest keep the umlaut.' },
    { id: 'geong', head: 'geong', la: 'geong; gingra, gingest', pos: 'adjective', en: 'young', note: 'German jung, jünger.' },
    { id: 'heard', head: 'heard', la: 'heard; heardra, heardost', pos: 'adjective', en: 'hard, brave', note: 'German hart.' },
    { id: 'idel', head: 'īdel', la: 'īdel', pos: 'adjective', en: 'empty, useless, idle', note: 'German eitel, originally “empty”.' },
    { id: 'sorg', head: 'sorg', la: 'sorg, sorge', g: 'f', pos: 'noun, strong', en: 'sorrow, care', note: 'German Sorge.' },
    { id: 'tacen', head: 'tācen', la: 'tācen, tācnes', g: 'n', pos: 'noun, strong', en: 'sign, token', note: 'German Zeichen; English token.' },
    { id: 'hete', head: 'hete', la: 'hete, hetes', g: 'm', pos: 'noun, strong', en: 'hatred, hostility', note: 'German Hass is related.' },
    { id: 'hwil', head: 'hwīl', la: 'hwīl, hwīle', g: 'f', pos: 'noun, strong', en: 'time, while', note: 'German Weile. hwīle: for a time.' },
    { id: 'tid', head: 'tīd', la: 'tīd, tīde', g: 'f', pos: 'noun, strong', en: 'time, hour, season', note: 'German Zeit; English tide.' },
    { id: 'secan', head: 'sēcan', la: 'sēcan; sōhte; gesōht', pos: 'verb, weak', en: 'seek, look for; visit', note: 'German suchen. Past with a vowel change, like English sought.' },
    { id: 'tholian', head: 'þolian', la: 'þolian; þolode', pos: 'verb, weak', en: 'suffer, endure', note: 'German dulden; Latin tolerāre is from the same root.' },
    { id: 'dreogan', head: 'drēogan', la: 'drēogan; drēah, drugon; drogen', pos: 'verb, strong (II)', en: 'endure, suffer; carry out', note: 'Scots dree one’s weird, “endure one’s fate”.' },
    { id: 'sceawian', head: 'scēawian', la: 'scēawian; scēawode', pos: 'verb, weak', en: 'look at, examine', note: 'German schauen; English show.' },
    { id: 'winnan', head: 'winnan', la: 'winnan; wann, wunnon; wunnen', pos: 'verb, strong (III)', en: 'fight, struggle', note: 'English win meant “strive” first. Lecture V: wunnon.' },
    { id: 'sunu', head: 'sunu', la: 'sunu, suna', g: 'm', pos: 'noun, u-stem', en: 'son', note: 'German Sohn. An old declension: genitive and dative singular and nominative plural are all suna.' }
  ],

  grammarCards: [
    { id: 'oe6-strong-m', front: 'gōd (strong), masc. sg. N A G D', back: 'gōd, gōdne, gōdes, gōdum' },
    { id: 'oe6-strong-f', front: 'gōd (strong), fem. sg. N A G D', back: 'gōd, gōde, gōdre, gōdre' },
    { id: 'oe6-strong-pl', front: 'gōd (strong), plural N A G D', back: 'gōde (m.), gōd (n.), gōda (f.); gōdra; gōdum' },
    { id: 'oe6-weak', front: 'Weak adjective endings', back: '-a (m. nom.), -e (f. n. nom.), -an elsewhere; gen. pl. -ra/-ena; dat. pl. -um' },
    { id: 'oe6-when-weak', front: 'When is an adjective weak?', back: 'After se, sēo, þæt, þes, possessives; in address; often alone in poetry' },
    { id: 'oe6-when-strong', front: 'When is an adjective strong?', back: 'Without an article, and as a predicate (wæs þæt gewin tō strang)' },
    { id: 'oe6-comp', front: 'Comparative and superlative endings', back: '-ra; -ost / -est (heard, heardra, heardost)' },
    { id: 'oe6-good', front: 'gōd: comparison', back: 'betera, betst (or sēlra, sēlest)' },
    { id: 'oe6-micel', front: 'micel: comparison', back: 'māra, mǣst' },
    { id: 'oe6-eald', front: 'eald: comparison', back: 'ieldra, ieldest (English elder, eldest)' },
    { id: 'oe6-v2', front: 'Word order in main clauses', back: 'Verb second (as German): Þā wæs …' },
    { id: 'oe6-vfinal', front: 'Word order in subordinate clauses', back: 'Verb last (as German): syðþan hīe … lāst scēawedon' },
    { id: 'oe6-tha', front: 'þā + verb / þā … verb', back: 'then / when (German da war / als … war)' },
    { id: 'oe6-thonne', front: 'þonne, þǣr', back: 'then / whenever; there / where (decided by word order)' },
    { id: 'oe6-idel', front: 'oð þæt īdel stōd hūsa sēlest', back: 'until the best of houses stood empty (Beowulf 145–146)' },
    { id: 'oe6-twelf', front: 'twelf wintra tīd torn geþolode wine Scyldinga', back: 'for twelve winters the lord of the Scyldings suffered grief (Beowulf 147–148)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">gōdne</span> is:', options: ['strong acc. sg. masc.', 'weak nom. sg.', 'dat. pl.', 'gen. sg. fem.'], answer: 0, explain: 'German guten (den).' },
    { id: 'e2', type: 'mc', prompt: 'After <span class="la">se</span>, the adjective is:', options: ['weak: se gōda cyning', 'strong: se gōd cyning', 'uninflected', 'in the genitive'], answer: 0, explain: 'As German der gute König.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">þæs lāðan</span> (in <span class="la">þæs lāðan lāst</span>) is:', options: ['weak genitive singular', 'strong nominative', 'dative plural', 'comparative'], answer: 0, explain: 'Weak -an after þæs.' },
    { id: 'e4', type: 'mc', prompt: 'Comparative of <span class="la">micel</span>:', options: ['māra', 'miclra', 'mǣst', 'micelor'], answer: 0, explain: 'Irregular: māra, mǣst.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Þā wæs hē blīþe</span> means:', options: ['Then he was glad', 'When he was glad', 'He was glad there', 'Was he glad?'], answer: 0, explain: 'þā + verb directly: “then”.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">þā hē þæt geseah</span> means:', options: ['when he saw that', 'then he saw that', 'he saw that then', 'that he saw'], answer: 0, explain: 'Verb at the end: “when”.' },
    { id: 'e7', type: 'mc', prompt: 'For how long did Grendel persecute the Danes?', options: ['twelve winters', 'thirty nights', 'one year', 'seven winters'], answer: 0, explain: 'twelf wintra tīd.' },
    { id: 'e8', type: 'mc', prompt: 'Where did the Danes sleep after the first raids?', options: ['Elsewhere, in the outbuildings', 'In Heorot, under guard', 'On the ships', 'In Lejre'], answer: 0, explain: 'gerūmlīcor ræste sōhte, bed æfter būrum.' },
    { id: 'e9', type: 'match', prompt: 'Match the adjective forms to German.', pairs: [
      ['gōd cyning', 'guter König'], ['gōdne cyning', 'guten König'], ['se gōda cyning', 'der gute König'], ['þone gōdan cyning', 'den guten König'], ['gōdum cyninge', 'gutem König']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the comparatives.', pairs: [
      ['betera', 'better'], ['māra', 'greater, more'], ['lǣssa', 'less'], ['wyrsa', 'worse'], ['ieldra', 'older, elder']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Hē geseah gōd___ cyning.</span>', hint: 'a good king (acc., strong)', answers: ['ne'], full: 'Hē geseah gōdne cyning.', explain: 'Strong acc. sg. masc. -ne.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">se gōd___ cyning</span>', hint: 'the good king (nom., weak)', answers: ['a'], full: 'se gōda cyning', explain: 'Weak nom. sg. masc. -a.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">þǣm gōd___ cyninge</span>', hint: 'to the good king (weak)', answers: ['an'], full: 'þǣm gōdan cyninge', explain: 'Weak -an.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Þæt gewin wæs heard___ þonne ǣr.</span>', hint: 'harder (comparative)', answers: ['ra'], full: 'Þæt gewin wæs heardra þonne ǣr.', explain: 'Comparative -ra.' },
    { id: 'e15', type: 'paradigm', prompt: 'Decline strong <span class="la">gōd</span>, masculine.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['gōd', 'gōde'] },
      { label: 'Acc.', answers: ['gōdne', 'gōde'] },
      { label: 'Gen.', answers: ['gōdes', 'gōdra'] },
      { label: 'Dat.', answers: ['gōdum', 'gōdum'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Decline weak <span class="la">gōda</span> with the article (masculine singular).', headers: ['Article', 'Adjective'], rows: [
      { label: 'Nom.', answers: ['se', 'gōda'] },
      { label: 'Acc.', answers: ['þone', 'gōdan'] },
      { label: 'Gen.', answers: ['þæs', 'gōdan'] },
      { label: 'Dat.', answers: ['þǣm|þām', 'gōdan'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the English translation in order.', source: 'Þā wæs sēo heall īdel.', tokens: ['Then', 'the hall', 'was', 'empty'], explain: 'þā + verb: “then”.' },
    { id: 'e18', type: 'translate', dir: 'oe-en', source: 'Se gōda cyning sæt on þǣre healle.', model: 'The good king sat in the hall.', accepted: ['good king sat in hall', 'good king was sitting in hall', 'good king sat in the hall'] },
    { id: 'e19', type: 'translate', dir: 'oe-en', source: 'Þā hē þæt geseah, þā wæs hē unblīþe.', model: 'When he saw that, he was unhappy.', accepted: ['when he saw that he was unhappy', 'when he saw that then he was unhappy', 'when he saw it he was unhappy', 'when he saw that he was sad', 'when he saw that then he was sad', 'when he saw that he was joyless'] },
    { id: 'e20', type: 'translate', dir: 'en-oe', source: 'a strong king (acc.)', model: 'strangne cyning', accepted: ['strangne cyning'], explain: 'Without an article the adjective is strong: masculine accusative -ne, which corresponds to German -en in guten Wein.' },
    { id: 'e21', type: 'translate', dir: 'en-oe', source: 'the old man (nom., eald, guma)', model: 'se ealda guma', accepted: ['se ealda guma', 'se ealda mann', 'se ealda man'], explain: 'After the article se the adjective is weak, ealda, as in German der alte Mann.' },
    { id: 'e22', type: 'mc', prompt: 'Why does the poet call Grendel <span class="la">healðegn</span>, “hall-thegn”?', options: ['Bitter irony: he is the hall’s only occupant at night', 'Because Hrothgar employed him', 'Because he guarded the hall against others', 'It is his real title'], answer: 0, explain: 'A parody of the loyal retainer.' },
    { id: 'e23', type: 'mc', prompt: 'Why are adjectives such as <span class="la">wergan</span> weak without an article in poetry?', options: ['An older usage from before the article developed', 'They are comparatives', 'Metrical error', 'They are nouns'], answer: 0, explain: 'Archaic poetic usage.' }
  ],

  reading: {
    title: 'Beowulf 126–149',
    note: 'Authentic text: Klaeber’s edition (1922), lines 126–149a. The normalised view adds length marks for this course; “Klaeber, unmarked” shows the text as transcribed online. The passage ends at the half-line sīdra sorga. Tap any word.',
    diplomaticLabel: 'Klaeber, unmarked',
    diplomaticNote: 'Klaeber’s text as transcribed online, without length marks.',
    text: 'Ðā wæs on ūhtan mid ǣrdæge\nGrendles gūðcræft gumum undyrne;\nþā wæs æfter wiste wōp up āhafen,\nmicel morgenswēg. Mǣre þēoden,\næþeling ǣrgōd, unblīðe sæt,\nþolode ðrȳðswȳð þegnsorge drēah,\nsyðþan hīe þæs lāðan lāst scēawedon,\nwergan gāstes; wæs þæt gewin tō strang,\nlāð ond longsum! Næs hit lengra fyrst,\nac ymb āne niht eft gefremede\nmorðbeala māre, ond nō mearn fore,\nfǣhðe ond fyrene; wæs tō fæst on þām.\nÞā wæs ēaðfynde þe him elles hwǣr\ngerūmlīcor ræste sōhte,\nbed æfter būrum, ðā him gebēacnod wæs,\ngesægd sōðlīce sweotolan tācne\nhealðegnes hete; hēold hyne syðþan\nfyr ond fæstor sē þǣm fēonde ætwand.\nSwā rīxode ond wið rihte wan,\nāna wið eallum, oð þæt īdel stōd\nhūsa sēlest. Wæs sēo hwīl micel;\ntwelf wintra tīd torn geþolode\nwine Scyldinga, wēana gehwelcne,\nsīdra sorga.',
    diplomatic: 'Ða wæs on uhtan mid ærdæge\nGrendles guðcræft gumum undyrne;\nþa wæs æfter wiste wop up ahafen,\nmicel morgensweg. Mære þeoden,\næþeling ærgod, unbliðe sæt,\nþolode ðryðswyð þegnsorge dreah,\nsyðþan hie þæs laðan last sceawedon,\nwergan gastes; wæs þæt gewin to strang,\nlað ond longsum! Næs hit lengra fyrst,\nac ymb ane niht eft gefremede\nmorðbeala mare, ond no mearn fore,\nfæhðe ond fyrene; wæs to fæst on þam.\nÞa wæs eaðfynde þe him elles hwær\ngerumlicor ræste sohte,\nbed æfter burum, ða him gebeacnod wæs,\ngesægd soðlice sweotolan tacne\nhealðegnes hete; heold hyne syðþan\nfyr ond fæstor se þæm feonde ætwand.\nSwa rixode ond wið rihte wan,\nana wið eallum, oð þæt idel stod\nhusa selest. Wæs seo hwil micel;\ntwelf wintra tid torn geþolode\nwine Scyldinga, weana gehwelcne,\nsidra sorga.',
    translations: [
      { label: 'English translation', text: 'Then at dawn, with the first light of day, Grendel’s strength in battle was plain to men; then after the feasting a lament was raised, a great cry in the morning. The famous prince, the long-proven nobleman, sat joyless; the mighty one suffered, endured sorrow for his thegns, when they examined the track of the hateful one, the cursed spirit. That struggle was too strong, hateful and long-lasting! It was no longer an interval than one night before he again committed greater murder, and did not regret it at all, the feud and crime; he was too set on it. Then it was easy to find the man who sought a bed for himself elsewhere, further away, among the outbuildings, when the hatred of the hall-thegn had been shown to him, told truly by a clear sign; whoever escaped the enemy kept himself afterwards further off and more securely. So he ruled and fought against right, one against all, until the best of houses stood empty. The time was long: for twelve winters the friend of the Scyldings suffered grief, every woe, great sorrows.' },
      { label: 'German translation', text: 'Da wurde im Morgengrauen, beim ersten Tageslicht, Grendels Kampfkraft den Männern offenbar; da erhob sich nach dem Gelage Weinen, ein großer Morgenruf. Der berühmte Fürst, der altbewährte Edle, saß freudlos; der Mächtige litt, ertrug den Kummer um seine Gefolgsleute, als sie die Spur des Verhassten betrachteten, des verfluchten Geistes. Der Kampf war zu stark, leidig und langwierig! Es dauerte nicht länger als eine Nacht, bis er wieder größeren Mord beging und es gar nicht bereute, Fehde und Frevel; er war zu fest darin. Da war leicht zu finden, wer sich anderswo, weiter weg, ein Lager suchte, ein Bett in den Nebengebäuden, als ihm der Hass des Hallendieners gezeigt, durch ein deutliches Zeichen wahrhaft kundgetan worden war; wer dem Feind entkam, hielt sich danach ferner und sicherer. So herrschte er und kämpfte gegen das Recht, einer gegen alle, bis das beste der Häuser leer stand. Die Zeit war lang: zwölf Winter lang erlitt der Freund der Schildinge Kummer, jedes Weh, große Sorgen.' }
    ],
    notes: [
      { ref: 'Ðā wæs on ūhtan mid ǣrdæge', html: 'Main clause, verb second: <span class="la">Ðā wæs</span>, “then was”. <span class="la">ūhte</span>: the last hours of the night before dawn.' },
      { ref: 'Mǣre þēoden, æþeling ǣrgōd, unblīðe sæt', html: 'See the source panel. All strong adjectives (no article).' },
      { ref: 'syðþan hīe þæs lāðan lāst scēawedon, wergan gāstes', html: 'Subordinate clause, verb last. <span class="la">þæs lāðan</span>: weak after the article, “of the hateful one”; <span class="la">wergan gāstes</span>: weak without an article, a poetic usage.' },
      { ref: 'wæs þæt gewin tō strang, lāð ond longsum', html: 'Predicate adjectives after <span class="la">wæs</span>: strong (uninflected) forms.' },
      { ref: 'Næs hit lengra fyrst, ac ymb āne niht', html: '“It was no longer an interval, but after one night …”: <span class="la">lengra</span>, comparative of <span class="la">lang</span>, with umlaut. <span class="la">næs</span> = <span class="la">ne wæs</span>.' },
      { ref: 'morðbeala māre, ond nō mearn fore', html: '<span class="la">māre</span>: comparative of <span class="la">micel</span>, “greater”. <span class="la">fore</span>: “for it”, a preposition used without its noun.' },
      { ref: 'Þā wæs ēaðfynde þe him elles hwǣr … ræste sōhte', html: 'Litotes and irony: “it was easy to find the man who looked elsewhere for a bed”, i.e. everyone moved out. <span class="la">þe</span>: relative, with the antecedent understood.' },
      { ref: 'ðā him gebēacnod wæs', html: '<span class="la">ðā</span> with the verb at the end: “when it had been shown to him”.' },
      { ref: 'hēold hyne syðþan fyr ond fæstor sē þǣm fēonde ætwand', html: 'Verb first. <span class="la">sē … ætwand</span>: “he who escaped the enemy”, the subject. <span class="la">fyr, fæstor</span>: comparative adverbs.' },
      { ref: 'oð þæt īdel stōd hūsa sēlest', html: '<span class="la">hūsa sēlest</span>: “the best of houses”, superlative with a partitive genitive, as German <em>das beste der Häuser</em>.' },
      { ref: 'twelf wintra tīd torn geþolode wine Scyldinga', html: '<span class="la">twelf wintra tīd</span>: accusative of duration, “for the time of twelve winters”. <span class="la">wine Scyldinga</span>: Hrothgar.' }
    ],
    glosses: {
      'ðā': 'then; when', 'wæs': 'was', 'on': 'on, in', 'ūhtan': 'dawn, the hour before daybreak (dat. of ūhte)', 'mid': 'with, at', 'ǣrdæge': 'early day, daybreak (dat.)',
      'grendles': 'Grendel’s (gen.)', 'gūðcræft': 'war-strength, power in battle', 'gumum': 'to men (dat. pl. of guma)', 'undyrne': 'unhidden, plain', 'þā': 'then; when', 'æfter': 'after',
      'wiste': 'feasting (dat. of wist)', 'wōp': 'weeping, lament', 'up': 'up', 'āhafen': 'raised (past part. of āhebban)', 'micel': 'great (strong adj.)', 'morgenswēg': 'morning-cry',
      'mǣre': 'famous (strong adj., nom.)', 'þēoden': 'lord, prince', 'æþeling': 'prince, nobleman', 'ǣrgōd': 'good from of old, long proven', 'unblīðe': 'unhappy (strong adj.)', 'sæt': 'sat (pret. of sittan)',
      'þolode': 'suffered (pret. of þolian)', 'ðrȳðswȳð': 'mighty, very strong', 'þegnsorge': 'sorrow for his thegns (acc.)', 'drēah': 'endured (pret. of drēogan)', 'syðþan': 'when, after; afterwards', 'hīe': 'they',
      'þæs': 'the, that (gen. m.)', 'lāðan': 'hateful (weak adj., gen.)', 'lāst': 'track, footprint (acc.)', 'scēawedon': 'looked at, examined (pret. pl. of scēawian)', 'wergan': 'cursed (weak adj., gen.)', 'gāstes': 'spirit’s (gen. of gāst = gǣst)',
      'þæt': 'that', 'gewin': 'struggle, strife', 'tō': 'too; to', 'strang': 'strong', 'lāð': 'hateful (strong adj.)', 'ond': 'and',
      'longsum': 'long-lasting', 'næs': 'was not (ne + wæs)', 'hit': 'it', 'lengra': 'longer (comparative)', 'fyrst': 'time, interval', 'ac': 'but',
      'ymb': 'after, about', 'āne': 'one (acc. f.)', 'niht': 'night', 'eft': 'again', 'gefremede': 'committed (pret. of gefremman)', 'morðbeala': 'murderous deed (acc.)',
      'māre': 'more, greater (comparative)', 'nō': 'not at all', 'mearn': 'mourned, regretted (pret. of murnan)', 'fore': 'for it, because of it', 'fǣhðe': 'feud, hostility (acc.)', 'fyrene': 'crime (acc.)',
      'fæst': 'fixed, firm (in)', 'þām': 'it, that (dat.)', 'ēaðfynde': 'easy to find', 'þe': '(the man) who', 'him': 'for himself (dat.)', 'elles': 'else',
      'hwǣr': 'where (elles hwǣr: elsewhere)', 'gerūmlīcor': 'further away, more roomily (comparative adv.)', 'ræste': 'resting-place, bed (acc. of ræst)', 'sōhte': 'sought (pret. of sēcan)', 'bed': 'bed', 'būrum': 'chambers, outbuildings (dat. pl. of būr)',
      'gebēacnod': 'indicated, made known (past part.)', 'gesægd': 'told (past part. of secgan)', 'sōðlīce': 'truly', 'sweotolan': 'clear (weak adj., dat.)', 'tācne': 'sign, token (dat. of tācen)', 'healðegnes': 'of the hall-thegn (Grendel) (gen.)',
      'hete': 'hatred', 'hēold': 'kept (pret. of healdan)', 'hyne': 'himself (acc.)', 'fyr': 'further, farther', 'fæstor': 'more securely (comparative adv.)', 'sē': 'he who (sē þe … : whoever)',
      'þǣm': 'the (dat.)', 'fēonde': 'enemy (dat. of fēond)', 'ætwand': 'escaped (pret. of ætwindan)', 'swā': 'so, thus', 'rīxode': 'ruled, held sway (pret. of rīcsian)', 'wið': 'against',
      'rihte': 'right (dat. of riht)', 'wan': 'fought (pret. of winnan)', 'āna': 'alone (weak form of ān)', 'eallum': 'all (dat. pl.)', 'oð': 'until (oð þæt)', 'īdel': 'empty, idle',
      'stōd': 'stood (pret. of standan)', 'hūsa': 'of houses (gen. pl. of hūs)', 'sēlest': 'best (superlative)', 'sēo': 'the (nom. f.)', 'hwīl': 'time, while', 'twelf': 'twelve',
      'wintra': 'winters, years (gen. pl.)', 'tīd': 'time, period', 'torn': 'grief, anger (acc.)', 'geþolode': 'endured (pret. of geþolian)', 'wine': 'friend, lord (wine Scyldinga: Hrothgar)', 'scyldinga': 'of the Scyldings (gen. pl.)',
      'wēana': 'of woes (gen. pl. of wēa)', 'gehwelcne': 'each, every (acc. m.)', 'sīdra': 'great, wide (strong adj., gen. pl.)', 'sorga': 'sorrows (gen. pl. of sorg)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'When did the Danes discover Grendel’s raid?', options: ['At dawn', 'At midnight', 'During the feast', 'A week later'], answer: 0, explain: 'on ūhtan mid ǣrdæge.' },
      { id: 'r2', type: 'mc', prompt: 'How did Hrothgar react?', options: ['He sat joyless and suffered for his thegns', 'He attacked Grendel', 'He fled', 'He sent for Beowulf at once'], answer: 0, explain: 'unblīðe sæt, þolode ðrȳðswȳð.' },
      { id: 'r3', type: 'mc', prompt: 'When did Grendel strike again?', options: ['After one night', 'After a year', 'After twelve winters', 'Never'], answer: 0, explain: 'ymb āne niht eft gefremede morðbeala māre.' },
      { id: 'r4', type: 'mc', prompt: 'What happened to Heorot in the end?', options: ['It stood empty', 'It burnt down', 'Grendel destroyed it', 'It was given away'], answer: 0, explain: 'oð þæt īdel stōd hūsa sēlest.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">gōdre</span> is:', options: ['strong gen. or dat. sg. feminine', 'comparative', 'weak nom. sg.', 'dat. pl.'], answer: 0, explain: 'German guter, as in guter Laune, mit guter Milch.' },
      { id: 't2', type: 'mc', prompt: 'Superlative of <span class="la">gōd</span>:', options: ['betst', 'gōdost', 'betera', 'sēlra'], answer: 0, explain: 'gōd, betera, betst.' },
      { id: 't3', type: 'mc', prompt: 'Which phrase has a weak adjective?', options: ['þǣm ealdan cyninge', 'ealdum cyninge', 'eald cyning', 'ealdne cyning'], answer: 0, explain: 'After the article: -an.' },
      { id: 't4', type: 'mc', prompt: 'In a subordinate clause the verb usually comes:', options: ['last', 'first', 'second', 'anywhere'], answer: 0, explain: 'As in German.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">mid strang___ wǣpnum</span>', hint: 'with strong weapons (strong dat. pl.)', answers: ['um'], full: 'mid strangum wǣpnum', explain: '-um.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">þā eald___ guman</span>', hint: 'the old men (weak)', answers: ['an'], full: 'þā ealdan guman', explain: 'Weak plural -an.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Þā wæs Heorot īdel.', model: 'Then Heorot was empty.', accepted: ['then heorot was empty', 'then heorot stood empty', 'then heorot was idle', 'then heorot was deserted'] },
      { id: 't8', type: 'translate', dir: 'en-oe', source: 'the best of houses', model: 'hūsa sēlest', accepted: ['hūsa sēlest', 'hūsa betst', 'sēlest hūsa'], explain: 'Sēlest “best” with a partitive genitive plural: Beowulf’s phrase for Heorot (Beo 146).' },
      { id: 't9', type: 'mc', prompt: 'What does <span class="la">hūsa sēlest</span> refer to?', options: ['Heorot', 'Grendel’s cave', 'Hrothgar’s chamber', 'the outbuildings'], answer: 0, explain: 'The best of houses stood empty.' },
      { id: 't10', type: 'mc', prompt: 'English <em>elder, eldest</em> keep:', options: ['the umlaut of eald, ieldra, ieldest', 'a French spelling', 'a Norse vowel', 'nothing old'], answer: 0, explain: 'Like German alt, älter.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">þonne</span> with the verb at the end of its clause means:', options: ['whenever, when', 'then', 'than', 'there'], answer: 0, explain: 'Like þā: word order decides.' }
    ]
  },

  reference: [
    { title: 'Strong adjective: gōd', headers: ['', 'Masc.', 'Neut.', 'Fem.'], rows: [['Nom. sg.', 'gōd', 'gōd', 'gōd'], ['Acc. sg.', 'gōdne', 'gōd', 'gōde'], ['Gen. sg.', 'gōdes', 'gōdes', 'gōdre'], ['Dat. sg.', 'gōdum', 'gōdum', 'gōdre'], ['Nom./Acc. pl.', 'gōde', 'gōd', 'gōda, -e'], ['Gen. pl.', 'gōdra', 'gōdra', 'gōdra'], ['Dat. pl.', 'gōdum', 'gōdum', 'gōdum']] },
    { title: 'Weak adjective: gōda', headers: ['', 'Masc.', 'Neut.', 'Fem.'], rows: [['Nom. sg.', 'gōda', 'gōde', 'gōde'], ['Acc. sg.', 'gōdan', 'gōde', 'gōdan'], ['Gen./Dat. sg.', 'gōdan', 'gōdan', 'gōdan'], ['Nom./Acc. pl.', 'gōdan', 'gōdan', 'gōdan'], ['Gen. pl.', 'gōdra, gōdena', '', ''], ['Dat. pl.', 'gōdum', '', '']] },
    { title: 'Irregular comparison', headers: ['Positive', 'Comparative', 'Superlative'], rows: [['gōd', 'betera, sēlra', 'betst, sēlest'], ['micel', 'māra', 'mǣst'], ['lȳtel', 'lǣssa', 'lǣst'], ['yfel', 'wyrsa', 'wyrst'], ['eald', 'ieldra', 'ieldest'], ['lang', 'lengra', 'lengest']] }
  ]
});
