/*
 * Middle English — Lecture XI: Chaucer's world and his contemporaries. Alliterative verse; dialects (Langland's West
 * Midland forms beside Chaucer's London English); reflexive me, hem; -ing and -ende. Reading: Piers Plowman, B-text,
 * Prologue 1–22, transcribed from page images of Skeat's school edition (tenth edition, Clarendon Press), text of MS
 * Laud Misc. 581. Source panel: Gower, Confessio Amantis, first-recension Prologue *37–*45, from Macaulay (1901).
 * Picture from Wikimedia Commons.
 */
Viator.addLecture('me', {
  id: 'me-11',
  number: 11,
  title: 'Chaucer’s World: Gower and Langland',
  subtitle: 'London, the court, the war; alliterative verse and dialect (Piers Plowman, B Prologue 1–22)',
  minutes: 60,

  intro: `
    <p>Chaucer was not the only English poet of his generation, and in his own time he was not obviously the greatest. Two contemporaries wrote long poems that were copied as widely as his: John Gower, a Kentish gentleman living in Southwark, whose <em>Confessio Amantis</em> was dedicated first to Richard II and then to Henry of Lancaster; and William Langland, a clerk from the West Midlands living in London, whose <em>Piers Plowman</em> survives in some fifty manuscripts and was quoted by the rebels of 1381.</p>
    <p>This lecture sets Chaucer in his London, at court and at war, and reads the opening of <em>Piers Plowman</em>, the dream of a “fair field full of folk”. It sounds very different from Chaucer. There is no rhyme and no regular count of syllables: the line is held together by alliteration, as Old English verse was. And the spelling and forms are those of another dialect: <span class="la">hulles</span> for Chaucer’s <span class="la">hilles</span>, <span class="la">ac</span> for <span class="la">but</span>, <span class="la">seigh</span> for <span class="la">saugh</span>.</p>
    <p>The grammar covers the alliterative line, the differences between dialects, reflexive pronouns (<span class="la">I shope me, putten hem</span>), and the two endings that English merged into one: the verbal noun in <span class="la">-ing</span> and the participle in <span class="la">-ende</span>, which Gower still uses (source panel).</p>
  `,

  background: [
    {
      title: 'Chaucer’s London, court and war',
      html: `
        <p>Chaucer was born in the early 1340s into a family of London wine merchants in the Vintry, the ward on the Thames where wine was landed. The Black Death of 1348–49 came when he was a child. By 1357 he was a page in the household of Elizabeth, Countess of Ulster, wife of the king’s son Lionel; in 1359–60 he served in Edward III’s campaign in France, was captured, and was ransomed with a contribution from the king. He spent his career in royal service: as an esquire of the household, on diplomatic missions to France and Italy (Genoa and Florence in 1372–73, Milan in 1378), as controller of the customs on wool in the port of London (1374–86), as a member of parliament for Kent (1386) and as clerk of the king’s works (1389–91). He was buried in Westminster Abbey in 1400.</p>
        <p>The war with France, now called the Hundred Years’ War, ran through his whole life, and its cost led to the poll taxes that set off the rising of 1381. From 1374 to 1386 Chaucer lived in rooms over Aldgate, one of the city gates by which the rebels from Essex entered London in June 1381. Apart from the Jack Straw lines in the Nun’s Priest’s Tale (Lecture IX), his poetry says nothing about the rising; Gower and Langland both reacted to it.</p>
      `
    },
    {
      title: 'John Gower',
      html: `
        <p>Gower (c. 1330–1408) came from a landowning family with Kentish connections and spent his later years in the priory of St Mary Overie in Southwark, where his tomb still shows him with his head resting on his three great books. Each is in a different language: the <em>Mirour de l’Omme</em> in French, the <em>Vox Clamantis</em> in Latin (its first book a nightmare vision of 1381 in which the rebels become beasts), and the <em>Confessio Amantis</em> in English, a lover’s confession to Genius, the priest of Venus, arranged by the seven deadly sins and illustrated by more than a hundred tales, in some 33,000 lines of short couplets.</p>
        <p>The <em>Confessio</em> survives in more than one form. In the first, dated 1390 in the manuscripts, Gower says he wrote it at Richard II’s request after meeting the king on the Thames (source panel), and near the end Venus sends a greeting to Chaucer: <span class="la">And grete wel Chaucer, whan ye mete, / As my disciple and my poete</span> (as quoted by Skeat from Pauli’s edition, with spelling normalised). In the later form the praise of Richard goes, the book is offered to Henry of Lancaster, and the greeting to Chaucer is gone. Skeat thought the two poets had fallen out, perhaps over the Man of Law’s jibe at tales of incest such as Gower’s Canace and Apollonius. Macaulay doubted it: the lines (VIII 2941*–2957*) went when the whole epilogue was rewritten, and the jibe reads as a friend’s joke. The two were certainly on good terms in 1378, when Chaucer named Gower one of his attorneys while he was abroad.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/John_Gower_archer_Vox_Clamantis.jpg/960px-John_Gower_archer_Vox_Clamantis.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/John_Gower_archer_Vox_Clamantis.jpg/500px-John_Gower_archer_Vox_Clamantis.jpg|https://upload.wikimedia.org/wikipedia/commons/f/f2/John_Gower_archer_Vox_Clamantis.jpg" alt="Medieval manuscript painting of a man in a long gown aiming a bow and arrow at a globe divided into land, sea and sky"><figcaption>Gower as an archer shooting at the world, a picture placed before his <em>Vox Clamantis</em> in a manuscript of about 1400 (Huntington Library, HM 150); the Latin verses beneath describe him hurling his darts at the world and sparing the just. Macaulay thought it a less trustworthy likeness than the pictures in other manuscripts. <span class="credit">Manuscript illumination, public domain · <a href="https://commons.wikimedia.org/wiki/File:John_Gower_archer_Vox_Clamantis.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'William Langland and Piers Plowman',
      html: `
        <p>Almost nothing is known about Langland. A fifteenth-century note in one manuscript names him as William de Langland, son of Stacy de Rokayle; the poem calls its dreamer Will and plays on <span class="la">Longe Wille</span>. It places him on the Malvern Hills in Worcestershire and in London, where he seems to have lived as a poor clerk in minor orders.</p>
        <p>He worked on the poem for most of his life. Skeat distinguished three versions: A (around 1370), B (about 1377–79, the text read here) and C (a revision of the 1380s); a shorter Z version has been proposed but is disputed. The poem is a series of dreams in which the dreamer looks for Truth and for how to live well, and finds a society corrupted by money and by false friars, pardoners and lawyers. Piers the ploughman, an honest labourer, becomes a guide and finally a figure of Christ.</p>
        <p>In 1381 the rebel priest John Ball circulated letters that call on <span class="la">Peres Plouȝman</span> to go to his work, as reported by the chroniclers. Some scholars think Langland’s C revision softens passages the rebels could use; that is an inference from the changes, not something he says.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Under the toun of newe Troye,<br>Which tok of Brut his ferste joye,<br>In Temse whan it was flowende<br>As I be bote cam rowende,<br>So as fortune hir tyme sette,<br>My liege lord par chaunce I mette;<br>And so befel, as I cam nyh,<br>Out of my bot, whan he me syh,<br>He bad me come in to his barge.</p>
    <p>“Below the city of New Troy, which took its first joy from Brutus, on the Thames when the tide was flowing, as I came rowing by boat, as Fortune set her time, I met my liege lord by chance; and so it happened, as I came near, when he saw me, he bade me come out of my boat into his barge.” Gower, <em>Confessio Amantis</em>, Prologue *37–*45 (first recension), Macaulay’s text (1901).</p>
    <p>London is New Troy, founded, the legend said, by Brutus the Trojan. Gower’s English is close to Chaucer’s, but note the participles in <span class="la">-ende</span> (<span class="la">flowende, rowende</span>) and his spellings <span class="la">nyh</span> “nigh” and <span class="la">syh</span> “saw”, where Chaucer writes <span class="la">ny</span> and <span class="la">saugh</span> and Langland <span class="la">seigh</span>. The king then asks him for <span class="la">Som newe thing</span> to read: the <em>Confessio</em> itself.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>Alliteration</strong>: read the stressed syllables firmly: <em>In a SOmer SEson · whan SOFT was the sonne</em>. The stress decides what alliterates, not the spelling: <span class="la">vnHOly</span> alliterates on <em>h</em>.</li>
      <li><strong>þ, ȝ</strong>: <span class="la">þe</span> = <em>the</em>; <span class="la">thouȝte</span> = <em>thoughte</em>, with <span class="la">ȝ</span> as German <em>ch</em>: <em>THOUCH-tə</em>.</li>
      <li><strong>u and v</strong>: the manuscript uses <span class="la">v</span> at the start of a word and <span class="la">u</span> inside it, for both sounds: <span class="la">vnholy</span> = <em>unholy</em>, <span class="la">Maluerne</span> = <em>Malverne</em>, <span class="la">sweuene</span> = <em>swevene</em>.</li>
      <li><strong>hulles</strong>: the <span class="la">u</span> here probably stood for a rounded vowel like German <em>ü</em>, kept in the West from Old English <span class="la">y</span>.</li>
      <li><strong>seigh</strong>: <span class="la">gh</span> = German <em>ch</em>: <em>saich</em> or <em>seich</em>, “saw”.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. The alliterative line',
      html: `
        <p>Each line of <em>Piers Plowman</em> is a long line divided into two halves at a pause (the caesura), marked in Skeat’s text, as in many manuscripts, with a raised point. Each half has two main stresses, and the stressed syllables are linked by alliteration. Skeat’s rule for the usual pattern: two alliterating stresses in the first half, and one in the second, on the first stress of that half; the last stress does not alliterate.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>First half</th><th>Second half</th></tr></thead>
          <tbody>
            <tr><td class="la">In a <b>s</b>omer <b>s</b>eson</td><td class="la">whan <b>s</b>oft was the sonne</td></tr>
            <tr><td class="la">In <b>h</b>abite as an <b>h</b>eremite</td><td class="la">vn<b>h</b>oly of workes</td></tr>
            <tr><td class="la">Ac on a <b>M</b>ay <b>m</b>ornynge</td><td class="la">on <b>M</b>aluerne hulles</td></tr>
            <tr><td class="la">A <b>f</b>aire <b>f</b>elde ful of <b>f</b>olke</td><td class="la"><b>f</b>onde I there bytwene</td></tr>
          </tbody>
        </table></div>
        <p>Prefixes do not count (<span class="la">vnholy</span> alliterates on <em>h</em>, <span class="la">byfel</span> on <em>f</em>), because the stress falls on the root, as in German. Any vowel alliterates with any other. The number of unstressed syllables is free, which is why the lines vary so much in length.</p>
        <p>This is the metre of Old English poetry (the <em>Beowulf</em> lines of the Old English course work the same way), still used in the fourteenth century in the West and North: <em>Sir Gawain and the Green Knight</em> belongs to the same tradition. Modern scholars call this the “Alliterative Revival”, but whether it was a revival or a continuous tradition that happens to have left few written traces from the twelfth and thirteenth centuries is debated. A Londoner like Chaucer could treat it as provincial: his Parson says <span class="la">I am a Southren man, / I can nat geste—rum, ram, ruf—by lettre</span> (Parson’s Prologue, I 42–43).</p>
      `
    },
    {
      title: '2. Two Englishes: Langland’s forms and Chaucer’s',
      html: `
        <p>There was no standard written English. Each scribe spelt in his own dialect, so the same word looks different in different poets and manuscripts:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Piers Plowman (Laud MS)</th><th>Chaucer</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td class="la">hulles</td><td class="la">hilles</td><td>hills: Old English <span class="la">y</span> kept as a rounded vowel in the West</td></tr>
            <tr><td class="la">ac</td><td class="la">but</td><td>but: an old word lost in London English</td></tr>
            <tr><td class="la">seigh</td><td class="la">saugh</td><td>saw (Gower <span class="la">syh</span>)</td></tr>
            <tr><td class="la">thouȝte, þe</td><td class="la">thoughte, the</td><td>the same sounds, older letters</td></tr>
            <tr><td class="la">(wastours) destruyeth</td><td class="la">destroyen</td><td>present plural in <span class="la">-eth</span> (South) beside <span class="la">-en</span> (Midlands)</td></tr>
          </tbody>
        </table></div>
        <p>The plural verb is the clearest dialect marker. The South said <span class="la">they destruyeth</span>, the Midlands <span class="la">they destroyen</span>, the North <span class="la">they destroyes</span>. Skeat noted that the manuscripts of <em>Piers Plowman</em> mix the southern <span class="la">-eth</span> with the Midland <span class="la">-en</span>, and called the dialect “of a peculiarly uncertain character”. What we read is the dialect of the Laud manuscript’s scribe as much as of Langland; modern studies of the manuscripts place the poet’s own language in the south-west Midlands, near the Malvern Hills.</p>
        <p>The vocabulary differs too. Langland has words that Chaucer rarely or never uses: <span class="la">ferly</span> “wonder”, <span class="la">swonken</span> “toiled”, <span class="la">sweuene</span> “dream” (Chaucer has <span class="la">swevene</span> but prefers <span class="la">dreem</span>), <span class="la">toft</span> “hillock”, a Norse word common in the North and East.</p>
      `
    },
    {
      title: '3. Reflexive me and hem: I shope me',
      html: `
        <p>Middle English uses the ordinary object pronoun as a reflexive, where modern English needs <em>-self</em>:</p>
        <ul>
          <li><span class="la">I shope me in shroudes</span> “I dressed myself in rough clothes”;</li>
          <li><span class="la">went me to reste</span> “turned myself to rest” (Skeat’s interpretation);</li>
          <li><span class="la">Some putten hem to þe plow</span> “some set themselves to the plough”.</li>
        </ul>
        <p>German does the same in the first and second persons (<em>ich legte mich, ihr setzt euch</em>) and has a special form only in the third (<em>sie setzten sich</em>), where Middle English simply uses <span class="la">hem</span> or <span class="la">him</span>. Forms with <span class="la">-self</span> exist (<span class="la">hir-self</span>, Lecture IX) but at first add emphasis rather than mark the reflexive.</p>
        <p>The same pronouns serve as datives in impersonal constructions (Lecture VI): <span class="la">Me byfel a ferly</span> “a marvel happened to me”, <span class="la">me thouȝte</span> “it seemed to me”. Skeat compares German <em>es dünkt mich</em>: <span class="la">thouȝte</span> here is from Old English <span class="la">þyncan</span> “seem” (German <em>dünken</em>), not <span class="la">þencan</span> “think” (German <em>denken</em>); the two verbs fell together in English.</p>
      `
    },
    {
      title: '4. -ing and -ende: verbal noun and participle',
      html: `
        <p>Old English had two different endings: the verbal noun in <span class="la">-ung, -ing</span> (German <em>-ung</em>) and the present participle in <span class="la">-ende</span> (German <em>-end</em>). In the South and the Midlands they fell together in <span class="la">-ing</span> during the Middle English period, which is why modern <em>-ing</em> does both jobs.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Use</th><th>Example</th><th>German</th></tr></thead>
          <tbody>
            <tr><td>verbal noun</td><td class="la">In settyng and in sowyng</td><td><em>beim Pflanzen und Säen</em></td></tr>
            <tr><td>verbal noun</td><td class="la">I slombred in a slepyng</td><td><em>ich fiel in einen Schlaf</em></td></tr>
            <tr><td>participle, new form</td><td class="la">Worchyng and wandryng</td><td><em>arbeitend und wandernd</em></td></tr>
            <tr><td>participle, old form (Gower)</td><td class="la">whan it was flowende, as I … cam rowende</td><td><em>fließend, rudernd</em></td></tr>
          </tbody>
        </table></div>
        <p>Gower, writing a conservative London and Kentish English, still uses <span class="la">-ende</span>; Chaucer and the Laud scribe write <span class="la">-ing</span>; the North kept <span class="la">-and</span>, which survived in Scots. When you meet <span class="la">-ing</span> in Middle English, ask which of the two it is, just as you would choose between <em>-ung</em> and <em>-end</em> in German.</p>
      `
    }
  ],

  vocab: [
    { id: 'sweven', head: 'sweven', la: 'sweven, sweuene', pos: 'noun', en: 'dream', note: 'OE swefn; Chaucer uses both sweven and dreem.' },
    { id: 'ferly', head: 'ferly', la: 'ferly', pos: 'noun', en: 'wonder, marvel', note: 'OE fǣrlic “sudden, terrible”; fǣr is related to German Gefahr. A northern and western word (“ferlies three” in the ballad of Thomas the Rhymer).' },
    { id: 'feld', head: 'feld', la: 'feld, felde', pos: 'noun', en: 'field', note: 'OE feld, German Feld.' },
    { id: 'plow', head: 'plow', la: 'plow', pos: 'noun', en: 'plough', note: 'Late OE plōh, probably from Norse; German Pflug.' },
    { id: 'burne', head: 'burne', la: 'burne, borne', pos: 'noun', en: 'stream, brook', note: 'OE burna; German Born, Brunnen; Scots burn.' },
    { id: 'dongeon', head: 'dongeon', la: 'dongeon', pos: 'noun', en: 'keep, stronghold; dungeon', note: 'French donjon, the great tower of a castle; the sense “prison” came later.' },
    { id: 'shapen', head: 'shapen', la: 'shapen; shoop, shope; shapen', pos: 'verb, strong', en: 'shape, make; prepare; (reflexive) dress, set out', note: 'OE scieppan, scōp; German schaffen, schuf.' },
    { id: 'swinken', head: 'swinken', la: 'swinken; swank; swonken', pos: 'verb, strong', en: 'toil, labour', note: 'OE swincan; noun swink “toil”. No common German cognate.' },
    { id: 'worchen', head: 'worchen', la: 'worchen, werchen; wroughte; wrought', pos: 'verb, weak', en: 'work, do, make', note: 'OE wyrcan, worhte; German wirken; wrought survives.' },
    { id: 'slombren', head: 'slombren', la: 'slombren; slombred', pos: 'verb, weak', en: 'slumber, doze', note: 'German schlummern; the b is an English addition.' },
    { id: 'wandren', head: 'wandren', la: 'wandren; wandred', pos: 'verb, weak', en: 'wander', note: 'OE wandrian, German wandern; forwandred “worn out with wandering”.' },
    { id: 'mene', head: 'mene', la: 'mene', pos: 'adjective', en: 'common, humble, poor', note: 'OE gemǣne “common”, German gemein; modern mean.' },
    { id: 'wery', head: 'wery', la: 'wery', pos: 'adjective', en: 'weary, tired', note: 'OE wērig.' },
    { id: 'selde', head: 'selde', la: 'selde', pos: 'adverb', en: 'seldom', note: 'OE seldan, German selten.' },
    { id: 'ac', head: 'ac', la: 'ac', pos: 'conjunction', en: 'but', note: 'OE ac; common in western and northern texts, not in Chaucer.' }
  ],

  grammarCards: [
    { id: 'me11-allit', front: 'the alliterative line', back: 'two halves, two stresses each; usually aa / ax alliteration' },
    { id: 'me11-point', front: 'the raised point ·', back: 'marks the caesura between the half-lines' },
    { id: 'me11-prefix', front: 'vnholy, byfel', back: 'prefixes do not alliterate: h, f carry the stress' },
    { id: 'me11-vowels', front: 'vowel alliteration', back: 'any vowel alliterates with any other' },
    { id: 'me11-rumram', front: 'I can nat geste—rum, ram, ruf—by lettre', back: 'Chaucer’s Parson: a southerner can’t tell alliterative tales' },
    { id: 'me11-hulles', front: 'hulles', back: 'hills (West Midland u for OE y)' },
    { id: 'me11-ac', front: 'ac', back: 'but (western and northern; not Chaucer)' },
    { id: 'me11-seigh', front: 'seigh, saugh, syh', back: 'saw (Langland, Chaucer, Gower)' },
    { id: 'me11-plural', front: 'they destruyeth / destroyen / destroyes', back: 'present plural: South -eth, Midlands -en, North -es' },
    { id: 'me11-shope', front: 'I shope me in shroudes', back: 'I dressed myself in rough clothes (reflexive me)' },
    { id: 'me11-hem', front: 'Some putten hem to þe plow', back: 'some set themselves to the plough' },
    { id: 'me11-thought', front: 'me thouȝte', back: 'it seemed to me (þyncan, German dünken; not denken)' },
    { id: 'me11-ing', front: 'In settyng and in sowyng', back: 'verbal nouns in -ing (German -ung, or infinitive as noun)' },
    { id: 'me11-ende', front: 'flowende, rowende', back: 'old present participle in -ende (Gower; German -end)' },
    { id: 'me11-abc', front: 'Piers Plowman A, B, C', back: 'three versions: c. 1370, c. 1377–79, 1380s (Skeat’s classification)' },
    { id: 'me11-ball', front: 'John Ball’s letters (1381)', back: 'call on Piers Plowman to go to his work' },
    { id: 'me11-troy', front: 'the toun of newe Troye', back: 'London, said to be founded by Brutus' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Where does the dreamer fall asleep?', options: ['on the Malvern Hills, by a stream', 'in London, by the Thames', 'in a church at Canterbury', 'in a tavern in Southwark'], answer: 0, explain: 'on Maluerne hulles … bi a bornes side.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">I shope me in shroudes</span> means:', options: ['I dressed myself in rough clothes', 'I shaped my shroud', 'I shopped for clothes', 'I hid myself in a shroud'], answer: 0, explain: 'Reflexive me.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Me byfel a ferly</span> means:', options: ['a marvel happened to me', 'I fell fearfully', 'I fell into a ferry', 'I befriended a fairy'], answer: 0, explain: 'Dative me; ferly “wonder”.' },
    { id: 'e4', type: 'mc', prompt: 'What does the dreamer see in the east?', options: ['a tower on a hill', 'a dungeon in a valley', 'a church', 'a ship'], answer: 0, explain: 'I seigh a toure on a toft.' },
    { id: 'e5', type: 'mc', prompt: 'What lies between the tower and the dungeon?', options: ['a fair field full of folk', 'a river', 'a forest', 'a city wall'], answer: 0, explain: 'A faire felde ful of folke.' },
    { id: 'e6', type: 'mc', prompt: 'In <span class="la">In a somer seson · whan soft was the sonne</span>, which sound alliterates?', options: ['s', 'w', 'm', 'n'], answer: 0, explain: 'somer, seson, soft.' },
    { id: 'e7', type: 'mc', prompt: '<span class="la">ac</span> means:', options: ['but', 'and', 'also', 'oak'], answer: 0, explain: 'A western and northern word.' },
    { id: 'e8', type: 'mc', prompt: 'Why does <span class="la">vnholy</span> alliterate with <span class="la">habite</span> and <span class="la">heremite</span>?', options: ['prefixes do not count; the stress is on holy', 'v and h sound alike', 'it does not alliterate', 'the scribe made a mistake'], answer: 0, explain: 'Skeat’s rule.' },
    { id: 'e9', type: 'match', prompt: 'Match Langland’s forms to Chaucer’s.', pairs: [
      ['hulles', 'hilles'], ['ac', 'but'], ['seigh', 'saugh'], ['thouȝte', 'thoughte'], ['þe', 'the']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the words to their German relatives.', pairs: [
      ['selde', 'selten'], ['worchen', 'wirken'], ['slombren', 'schlummern'], ['mene', 'gemein'], ['bornes', 'Brunnen']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">In a somer seson · whan ___ was the sonne</span>', hint: 'mild, warm', answers: ['soft'], full: 'In a somer seson · whan soft was the sonne', explain: 'B Prol. 1.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Ac on a May mornynge · on Maluerne ___</span>', hint: 'hills (western form)', answers: ['hulles'], full: 'Ac on a May mornynge · on Maluerne hulles', explain: 'B Prol. 5.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">A faire felde ful of ___ · fonde I there bytwene</span>', hint: 'people', answers: ['folke', 'folk'], full: 'A faire felde ful of folke · fonde I there bytwene', explain: 'B Prol. 17.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">In settyng and in sowyng · ___ ful harde</span>', hint: 'toiled', answers: ['swonken', 'swonke'], full: 'In settyng and in sowyng · swonken ful harde', explain: 'B Prol. 21.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give the present plural in each dialect.', headers: ['they destroy', 'they love'], rows: [
      { label: 'South', answers: ['destruyeth|destroyeth', 'loveth'] },
      { label: 'Midlands (Chaucer)', answers: ['destroyen|destruyen', 'loven'] },
      { label: 'North', answers: ['destroyes|destruyes', 'loves'] },
      { label: 'German', answers: ['zerstören', 'lieben'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Verbal noun or participle?', headers: ['Example', 'Type'], rows: [
      { label: 'In settyng and in sowyng', answers: ['settyng', 'verbal noun|noun|gerund'] },
      { label: 'Worchyng and wandryng', answers: ['worchyng', 'participle|present participle'] },
      { label: 'I slombred in a slepyng', answers: ['slepyng', 'verbal noun|noun|gerund'] },
      { label: 'as I … cam rowende', answers: ['rowende', 'participle|present participle'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the modern translation in order.', source: 'Of alle maner of men · þe mene and þe riche', tokens: ['Of all kinds', 'of people', 'the poor', 'and the rich'], explain: 'B Prol. 18.' },
    { id: 'e18', type: 'translate', dir: 'me-en', source: 'I was wery forwandred · and went me to reste', model: 'I was weary with wandering and went to rest', accepted: ['i was weary with wandering and went to rest', 'i was tired from wandering and went to rest', 'i was weary from wandering and went to rest', 'i was tired with wandering and went to rest', 'i was weary of wandering and went to rest', 'i was worn out with wandering and went to rest', 'i was worn out from wandering and went to rest', 'i was weary with wandering and lay down to rest', 'i was tired out with wandering and went to rest', 'i was tired out from wandering and went to rest'] },
    { id: 'e19', type: 'translate', dir: 'me-en', source: 'Some putten hem to þe plow · pleyed ful selde', model: 'Some set themselves to the plough and played very seldom', accepted: ['some set themselves to the plough and played very seldom', 'some set themselves to the plough played very seldom', 'some put themselves to the plough and played very seldom', 'some took to the plough and played very seldom', 'some set themselves to the plough and seldom played', 'some put themselves to the plough and seldom played', 'some took to the plough and seldom played', 'some set themselves to the plow and played very seldom', 'some put themselves to the plow and played very seldom', 'some took to the plow and played very seldom', 'some took to the plough and played very rarely', 'some set themselves to the plough and played very rarely'] },
    { id: 'e20', type: 'translate', dir: 'en-me', source: 'it seemed to me (Langland’s spelling)', model: 'me thouȝte', accepted: ['me thouȝte', 'me thoughte', 'me thouhte'] },
    { id: 'e21', type: 'translate', dir: 'en-me', source: 'hills (Langland’s western form)', model: 'hulles', accepted: ['hulles'] },
    { id: 'e22', type: 'mc', prompt: 'In which three languages did Gower write his major works?', options: ['French, Latin and English', 'Latin, Italian and English', 'French, English and Welsh', 'only English'], answer: 0, explain: 'Mirour de l’Omme, Vox Clamantis, Confessio Amantis.' },
    { id: 'e23', type: 'mc', prompt: 'Where did Chaucer live from 1374 to 1386?', options: ['over Aldgate, a city gate of London', 'in Southwark', 'in Westminster Abbey', 'at the Tabard'], answer: 0, explain: 'The rebels of 1381 came in through Aldgate.' }
  ],

  reading: {
    title: 'Piers Plowman, B Prologue 1–22',
    note: 'Authentic text: William Langland, Piers Plowman, B-text, Prologue lines 1–22, transcribed from the page images of Skeat’s school edition, The Vision of William concerning Piers the Plowman (tenth edition, revised; Oxford, Clarendon Press), pp. 1–2. Skeat prints MS Laud Misc. 581 (Bodleian Library) “exactly as it stands”, with a few corrections; in line 20 the Laud manuscript has put, which he corrects to putten as in line 23. The raised point marks the caesura; u/v, þ and ȝ are kept as in the manuscript. Tap any word.',
    text: 'In a somer seson · whan soft was the sonne,\nI shope me in shroudes · as I a shepe were,\nIn habite as an heremite · vnholy of workes,\nWent wyde in þis world · wondres to here.\nAc on a May mornynge · on Maluerne hulles,\nMe byfel a ferly · of fairy, me thouȝte;\nI was wery forwandred · and went me to reste\nVnder a brode banke · bi a bornes side,\nAnd as I lay and lened · and loked in þe wateres,\nI slombred in a slepyng · it sweyued so merye.\nThanne gan I to meten · a merueilouse sweuene,\nThat I was in a wildernesse · wist I neuer where;\nAs I bihelde in‑to þe est · an hiegh to þe sonne,\nI seigh a toure on a toft · trielich ymaked;\nA depe dale binethe · a dongeon þere‑Inne,\nWith depe dyches & derke · and dredful of sight.\nA faire felde ful of folke · fonde I there bytwene,\nOf alle maner of men · þe mene and þe riche,\nWorchyng and wandryng · as þe worlde asketh\nSome putten hem to þe plow · pleyed ful selde,\nIn settyng and in sowyng · swonken ful harde,\nAnd wonnen that wastours · with glotonye destruyeth.',
    translations: [
      { label: 'Modern English', text: 'In a summer season, when the sun was mild, I dressed myself in rough clothes as if I were a shepherd, in the habit of a hermit unholy in his deeds, and went far and wide in this world to hear wonders. But on a May morning on the Malvern Hills a marvel happened to me, from fairyland, it seemed to me. I was weary with wandering and went to rest under a broad bank by the side of a stream; and as I lay and leaned and looked into the waters, I fell into a sleep, it sounded so pleasantly. Then I began to dream a marvellous dream: that I was in a wilderness, I never knew where. As I looked towards the east, up to the sun, I saw a tower on a hill, excellently built; a deep valley beneath, a dungeon in it, with deep, dark ditches, dreadful to see. A fair field full of folk I found there between them, of all kinds of people, the poor and the rich, working and wandering as the world requires. Some set themselves to the plough and played very seldom; in planting and in sowing they toiled very hard, and won what wasters destroy with gluttony.' },
      { label: 'German translation', text: 'In einer Sommerzeit, als die Sonne mild war, kleidete ich mich in grobe Gewänder, als wäre ich ein Schäfer, im Habit eines Einsiedlers, unheilig in seinen Werken, und zog weit in diese Welt, Wunder zu hören. Doch an einem Maimorgen auf den Malvern-Hügeln widerfuhr mir ein Wunder, aus dem Feenreich, wie mich dünkte. Ich war müde vom Wandern und legte mich zur Ruhe unter einen breiten Hang am Ufer eines Baches; und als ich lag und mich lehnte und ins Wasser schaute, sank ich in Schlaf, so lieblich klang es. Da begann ich einen wunderbaren Traum zu träumen: dass ich in einer Wildnis war, ich wusste nie wo. Als ich nach Osten blickte, hinauf zur Sonne, sah ich einen Turm auf einem Hügel, vortrefflich gebaut; ein tiefes Tal darunter, darin ein Kerker, mit tiefen und dunklen Gräben, schrecklich anzusehen. Ein schönes Feld voller Leute fand ich dort dazwischen, von allerlei Menschen, den Armen und den Reichen, arbeitend und wandernd, wie es die Welt verlangt. Manche gaben sich dem Pflug hin und spielten gar selten; beim Pflanzen und Säen mühten sie sich sehr hart und erwarben, was Prasser mit Völlerei vergeuden.' }
    ],
    notes: [
      { ref: 'In a somer seson · whan soft was the sonne,', html: 'The classic opening of a dream poem: a season, a landscape, a sleepy narrator (compare the dream poems, Lecture X). <span class="la">soft</span> “mild, warm”.' },
      { ref: 'I shope me in shroudes · as I a shepe were,', html: '<span class="la">shope me</span> “dressed myself” (grammar section 3). <span class="la">shroudes</span> “garments”. <span class="la">shepe</span>: Skeat reads “shepherd”, the reading of many manuscripts (<span class="la">shepherde</span>), and found the word in that sense in Lincolnshire dialect; other scholars read “sheep”, which would make the dreamer a wolf in sheep’s clothing. Both readings have defenders.' },
      { ref: 'In habite as an heremite · vnholy of workes,', html: 'The dreamer looks like a hermit, one of the wandering kind Langland attacks later in the Prologue, “unholy in their deeds”. Skeat leaves open whether the phrase describes the dreamer or comments on hermits in general.' },
      { ref: 'Went wyde in þis world · wondres to here.', html: '<span class="la">wondres to here</span> “to hear wonders”: infinitive of purpose. The subject <span class="la">I</span> is understood from the line before.' },
      { ref: 'Ac on a May mornynge · on Maluerne hulles,', html: '<span class="la">Ac</span> “but”; <span class="la">hulles</span> “hills”; both western forms (grammar section 2). The Malvern Hills in Worcestershire are named three times in the poem. Skeat notes that <span class="la">on a May mornynge</span> is almost “once upon a time”.' },
      { ref: 'Me byfel a ferly · of fairy, me thouȝte;', html: 'Two impersonal datives: <span class="la">Me byfel</span> “happened to me”, <span class="la">me thouȝte</span> “it seemed to me”, German <em>mich dünkte</em>. <span class="la">ferly</span> “wonder”; <span class="la">of fairy</span> “from fairyland, by enchantment”.' },
      { ref: 'I was wery forwandred · and went me to reste', html: '<span class="la">forwandred</span> “worn out with wandering”: <span class="la">for-</span> is intensive, like German <em>ver-</em>. <span class="la">went me</span> “turned myself”: Skeat takes <span class="la">me</span> as reflexive; others take it as a looser dative of interest.' },
      { ref: 'Vnder a brode banke · bi a bornes side,', html: '<span class="la">bornes</span> “stream’s”, genitive of <span class="la">borne</span>, German <em>Born, Brunnen</em>; Scots <em>burn</em>.' },
      { ref: 'And as I lay and lened · and loked in þe wateres,', html: 'Alliteration on <em>l</em>: <span class="la">lay, lened, loked</span>.' },
      { ref: 'I slombred in a slepyng · it sweyued so merye.', html: '<span class="la">in a slepyng</span>: verbal noun (grammar section 4). <span class="la">sweyued</span> “sounded”, of the water, in Skeat’s explanation. The chief alliteration is on <em>s</em> + consonant (<span class="la">slombred, slepyng, sweyued</span>), which Skeat allows.' },
      { ref: 'Thanne gan I to meten · a merueilouse sweuene,', html: '<span class="la">gan I to meten</span> “I began to dream” (Lecture VII). <span class="la">meten</span> “dream”, a different word from <span class="la">meten</span> “meet”; <span class="la">sweuene</span> “a dream”.' },
      { ref: 'That I was in a wildernesse · wist I neuer where;', html: '<span class="la">wist I neuer where</span> “I never knew where”, <span class="la">wist</span> = German <em>wusste</em>.' },
      { ref: 'As I bihelde in‑to þe est · an hiegh to þe sonne,', html: '<span class="la">in-to</span> “towards”; <span class="la">an hiegh</span> “on high”. East, the direction of the rising sun and of Paradise, is where Truth lives.' },
      { ref: 'I seigh a toure on a toft · trielich ymaked;', html: 'The tower is later explained as the dwelling of Truth, that is God. <span class="la">seigh</span> “saw”; <span class="la">toft</span> “hillock, raised ground”, a Norse word (place names such as <em>Lowestoft</em>); <span class="la">trielich</span> “excellently”.' },
      { ref: 'A depe dale binethe · a dongeon þere‑Inne,', html: 'The dungeon is later explained as the castle of Care, the home of Wrong, that is the devil. Heaven above, hell below, and between them the world.' },
      { ref: 'A faire felde ful of folke · fonde I there bytwene,', html: 'The most famous line of the poem: the world as a field full of people, an image Skeat traces to Matthew 13:38 (“the field is the world”).' },
      { ref: 'Of alle maner of men · þe mene and þe riche,', html: '<span class="la">maner of</span> “kind of”, French <em>manière de</em>. <span class="la">mene</span> “humble, poor”, German <em>gemein</em>.' },
      { ref: 'Worchyng and wandryng · as þe worlde asketh', html: 'Present participles in <span class="la">-yng</span>. <span class="la">asketh</span> “requires”. Work and wandering are the poem’s two ways of life: honest labour and restless idleness.' },
      { ref: 'Some putten hem to þe plow · pleyed ful selde,', html: 'The ploughmen come first among the folk, the poem’s model of honest work. Skeat’s correction: the Laud manuscript has <span class="la">put</span>. <span class="la">pleyed</span> is plural (“they played”): Skeat notes that <span class="la">-ed</span> is often written for <span class="la">-eden</span>.' },
      { ref: 'In settyng and in sowyng · swonken ful harde,', html: '<span class="la">settyng</span> “planting”; <span class="la">swonken</span> “toiled”, past plural of the strong verb <span class="la">swinken</span>. <span class="la">ful</span> “very”: Skeat compares German <em>viel</em>, though the word is <em>voll</em>.' },
      { ref: 'And wonnen that wastours · with glotonye destruyeth.', html: '<span class="la">that</span> “that which”. <span class="la">wastours … destruyeth</span>: present plural in <span class="la">-eth</span>, the southern form (grammar section 2). The idle eat what the workers grow, a theme that returns when Piers sets the folk to work in Passus VI.' }
    ],
    glosses: {
      'a': 'a', 'ac': 'but (OE ac; Chaucer says but)', 'alle': 'all; alle maner of men: all kinds of people', 'an': 'an, a; an hiegh: on high', 'and': 'and', 'as': 'as; as if; as I a shepe were: as if I were a shepherd',
      'asketh': 'requires, demands', 'banke': 'bank, slope', 'bi': 'by', 'bihelde': 'looked, beheld; bihelde in-to þe est: looked towards the east', 'binethe': 'beneath, below', 'bornes': 'stream’s, brook’s (OE burna; German Born, Brunnen)',
      'brode': 'broad (German breit)', 'byfel': 'befell, happened (me byfel: there happened to me)', 'bytwene': 'between (them)', 'dale': 'valley (German Tal)', 'depe': 'deep', 'derke': 'dark',
      'destruyeth': 'destroy, squander (plural in -eth)', 'dongeon': 'dungeon, keep, stronghold', 'dredful': 'dreadful; dredful of sight: terrible to see', 'dyches': 'ditches', 'est': 'east', 'faire': 'fair, beautiful',
      'fairy': 'fairyland, enchantment; of fairy: from fairyland', 'felde': 'field (German Feld)', 'ferly': 'wonder, marvel (OE fǣrlic; German Gefahr is related)', 'folke': 'people', 'fonde': 'found', 'forwandred': 'worn out with wandering (for- intensive, like German ver-)',
      'ful': 'very; full', 'gan': 'began (gan I to meten: I began to dream)', 'glotonye': 'gluttony', 'habite': 'habit, dress (of a religious order)', 'harde': 'hard', 'hem': 'themselves; putten hem to: set themselves to',
      'here': 'hear', 'heremite': 'hermit', 'hiegh': 'high; an hiegh: on high, up', 'hulles': 'hills (West Midland u for OE y; Chaucer hilles)', 'i': 'I', 'in': 'in; in-to: towards',
      'inne': 'þere-Inne: in it, therein', 'it': 'it', 'lay': 'lay (past of lien)', 'lened': 'leaned, reclined', 'loked': 'looked', 'maluerne': 'Malvern (u = v): the Malvern Hills, Worcestershire',
      'maner': 'kind, sort; alle maner of men: all kinds of people', 'may': 'May', 'me': 'me; myself (shope me: dressed myself); to me (me byfel, me thouȝte)', 'men': 'people', 'mene': 'poor, humble (OE gemǣne “common”; German gemein)', 'merueilouse': 'marvellous (u = v)',
      'merye': 'pleasantly, sweetly', 'meten': 'dream (OE mǣtan)', 'mornynge': 'morning', 'neuer': 'never (u = v)', 'of': 'of; from; in', 'on': 'on; on a May mornynge: one May morning',
      'pleyed': 'played (plural: they played)', 'plow': 'plough (German Pflug)', 'putten': 'put, set (plural); putten hem to þe plow: took to the plough', 'reste': 'rest', 'riche': 'rich', 'seigh': 'saw (past of seen; German sah)',
      'selde': 'seldom (German selten)', 'seson': 'season', 'settyng': 'planting (German setzen)', 'shepe': 'shepherd (Skeat’s interpretation; also read as “sheep”)', 'shope': 'shaped, made ready; shope me: dressed myself', 'shroudes': 'garments, rough clothes',
      'side': 'side', 'sight': 'sight; dredful of sight: terrible to look at', 'slepyng': 'sleep; slombred in a slepyng: fell into a sleep', 'slombred': 'slumbered, fell asleep (German schlummerte)', 'so': 'so', 'soft': 'mild, warm',
      'some': 'some (people)', 'somer': 'summer (German Sommer)', 'sonne': 'sun', 'sowyng': 'sowing (German säen)', 'sweuene': 'dream (OE swefn; u = v)', 'sweyued': 'sounded (Skeat’s gloss)',
      'swonken': 'toiled, laboured (past plural of swinken)', 'thanne': 'then', 'that': 'that; that which; that I was: (dreamed) that I was', 'the': 'the', 'there': 'there', 'thouȝte': 'seemed (me thouȝte: it seemed to me, German mich dünkte; ȝ = gh)',
      'to': 'to; towards', 'toft': 'raised ground, hillock (Old Norse topt)', 'toure': 'tower', 'trielich': 'excellently, choicely (French trié “chosen” + -lich)', 'vnder': 'under (v = u)', 'vnholy': 'unholy (v = u); vnholy of workes: unholy in his deeds',
      'wandryng': 'wandering (German wandern)', 'was': 'was', 'wastours': 'wasters, idlers', 'wateres': 'waters', 'went': 'went; went me to reste: turned myself to rest', 'were': 'were (subjunctive: as if I were)',
      'wery': 'weary', 'whan': 'when', 'where': 'where', 'wildernesse': 'wilderness', 'wist': 'knew (German wusste); wist I neuer where: I never knew where', 'with': 'with',
      'wondres': 'wonders', 'wonnen': 'won, earned (past plural of winnen)', 'worchyng': 'working (German wirken)', 'workes': 'works, deeds', 'world': 'world', 'worlde': 'world',
      'wyde': 'wide; far and wide', 'ymaked': 'made, built (y- prefix)', 'þe': 'the (þ = th)', 'þere': 'there; þere-Inne: therein', 'þis': 'this'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'How is the dreamer dressed?', options: ['in rough clothes, like a shepherd or a hermit', 'in armour', 'as a pilgrim with a staff', 'as a friar'], answer: 0, explain: 'I shope me in shroudes.' },
      { id: 'r2', type: 'mc', prompt: 'What sends him to sleep?', options: ['the pleasant sound of the stream', 'too much wine', 'a sermon', 'the heat of noon'], answer: 0, explain: 'it sweyued so merye.' },
      { id: 'r3', type: 'mc', prompt: 'Who are the first people he describes in the field?', options: ['those who work hard at the plough', 'the friars', 'the pilgrims', 'the king and his knights'], answer: 0, explain: 'Some putten hem to þe plow.' },
      { id: 'r4', type: 'mc', prompt: 'What happens to what the ploughmen win?', options: ['wasters destroy it with gluttony', 'it is given to the Church', 'it is stored for winter', 'the king takes it in tax'], answer: 0, explain: 'that wastours with glotonye destruyeth.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'The usual alliterative pattern of a long line is:', options: ['two alliterating stresses in the first half, one in the second', 'all four stresses alliterate', 'the line ends in rhyme', 'only the last stress alliterates'], answer: 0, explain: 'aa / ax.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">me thouȝte</span> comes from Old English <span class="la">þyncan</span>, German:', options: ['dünken', 'denken', 'danken', 'tauchen'], answer: 0, explain: 'it seemed to me.' },
      { id: 't3', type: 'mc', prompt: 'The present plural <span class="la">they destruyeth</span> is typical of:', options: ['the South', 'the North', 'London English', 'Scots'], answer: 0, explain: 'Midlands -en, North -es.' },
      { id: 't4', type: 'mc', prompt: 'Gower’s <span class="la">flowende, rowende</span> are:', options: ['present participles in -ende', 'verbal nouns', 'past participles', 'infinitives'], answer: 0, explain: 'German fließend, rudernd.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Me byfel a ___ · of fairy, me thouȝte</span>', hint: 'wonder', answers: ['ferly'], full: 'Me byfel a ferly · of fairy, me thouȝte', explain: 'B Prol. 6.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">I seigh a ___ on a toft · trielich ymaked</span>', hint: 'tower', answers: ['toure', 'tour'], full: 'I seigh a toure on a toft · trielich ymaked', explain: 'B Prol. 14.' },
      { id: 't7', type: 'translate', dir: 'me-en', source: 'Thanne gan I to meten · a merueilouse sweuene', model: 'Then I began to dream a marvellous dream', accepted: ['then i began to dream a marvellous dream', 'then i began to dream a marvelous dream', 'then i dreamed a marvellous dream', 'then i dreamt a marvellous dream', 'then i dreamed a marvelous dream', 'then i dreamt a marvelous dream', 'then i began to dream a wonderful dream', 'then i dreamed a wonderful dream'] },
      { id: 't8', type: 'translate', dir: 'en-me', source: 'but (Langland’s western word)', model: 'ac', accepted: ['ac'] },
      { id: 't9', type: 'mc', prompt: 'Which manuscript does Skeat print for the B-text?', options: ['MS Laud Misc. 581', 'the Ellesmere manuscript', 'the Vernon manuscript', 'Corpus Christi College 61'], answer: 0, explain: 'In the Bodleian Library.' },
      { id: 't10', type: 'mc', prompt: 'In the first version of the <em>Confessio</em>, Gower says the king met him:', options: ['on the Thames, and called him into the royal barge', 'at Westminster Hall', 'at Canterbury', 'in Southwark priory'], answer: 0, explain: 'Prologue *37–*45.' },
      { id: 't11', type: 'mc', prompt: 'Who quoted “Piers Plowman” in letters during the rising of 1381?', options: ['John Ball', 'Wat Tyler', 'John Gower', 'Richard II'], answer: 0, explain: 'As reported by the chroniclers.' }
    ]
  },

  reference: [
    { title: 'One word, three poets', headers: ['Langland (Laud MS)', 'Chaucer', 'Gower', 'Meaning'], rows: [['hulles', 'hilles', '—', 'hills'], ['ac', 'but', 'bot', 'but'], ['seigh', 'saugh', 'syh', 'saw'], ['-ing', '-ing', '-ende', 'present participle']] },
    { title: 'Present plural by region', headers: ['Region', 'Form', 'Example'], rows: [['South', '-eth', 'they destruyeth'], ['Midlands, London', '-en', 'they destroyen'], ['North', '-es', 'they destroyes']] }
  ]
});
