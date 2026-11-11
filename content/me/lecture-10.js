/*
 * Middle English — Lecture X: Chaucer beyond the Tales. Rhyme royal; the infinitive (to, for to, tendyte); wishes and
 * concessions in the subjunctive (Have he my thank; al sholde I sterve); the vocabulary of feeling. Reading: Troilus and
 * Criseyde I.1–35 in Skeat’s edition (1894), from the Project Gutenberg text. Source panel: Parlement of Foules 1–4.
 * Picture from Wikimedia Commons.
 */
Viator.addLecture('me', {
  id: 'me-10',
  number: 10,
  title: 'Troilus and Criseyde',
  subtitle: 'Chaucer beyond the Tales: the dream poems and Troilus (Troilus I.1–35)',
  minutes: 60,

  intro: `
    <p>Before the <em>Canterbury Tales</em> Chaucer was known for other work: a series of dream poems in the French manner, and one long poem that many readers still think his finest, <em>Troilus and Criseyde</em>. This lecture looks at both, and reads the opening of <em>Troilus</em>.</p>
    <p>The story is set in Troy during the Greek siege. Troilus, a son of King Priam, falls in love with Criseyde, a young widow whose father has deserted to the Greeks; her uncle Pandarus brings them together; then she is handed over to the Greeks in an exchange of prisoners, and in the Greek camp she gives her love to Diomede. The narrator tells us the ending in the first stanza: the “double sorrow” of a man who went <span class="la">Fro wo to wele, and after out of Ioye</span>.</p>
    <p>The poem is written not in couplets but in seven-line stanzas, rhyme royal, and the reading is a good place to learn how Chaucer builds a stanza and a long sentence. The grammar covers the stanza, the infinitive (<span class="la">to tellen, for to seyne, tendyte</span>), wishes and concessions in the subjunctive (<span class="la">Have he my thank; al sholde I sterve</span>), and the words of feeling, where German is a help and sometimes a trap (<span class="la">sorwe</span> and <em>Sorge</em>, <span class="la">unsely</span> and <em>unselig</em>).</p>
  `,

  background: [
    {
      title: 'Before the Tales: dreams and books',
      html: `
        <p>Chaucer’s early long poems are dream visions, a French form made popular by the <em>Roman de la Rose</em> and by Guillaume de Machaut and Jean Froissart. The narrator, sleepless or troubled, reads an old book, falls asleep and dreams of something that answers it. Each poem is usually dated only roughly:</p>
        <ul>
          <li><em>The Book of the Duchess</em>, an elegy for Blanche of Lancaster, wife of John of Gaunt, who died in 1368 (Skeat, following older records, gives 1369). The dreamer has been reading Ovid’s story of Ceyx and Alcyone.</li>
          <li><em>The House of Fame</em>, probably around 1380, in which a talkative golden eagle carries the poet up to the palace of Fame.</li>
          <li><em>The Parliament of Fowls</em>, probably early 1380s: after reading Cicero’s <em>Dream of Scipio</em>, the poet dreams of the birds assembling before Nature to choose their mates. Some scholars connect it with Richard II’s marriage negotiations of 1380–81; the link cannot be proved.</li>
          <li><em>The Legend of Good Women</em>, from the mid-1380s, whose prologue survives in two versions.</li>
        </ul>
        <p>The <em>Parliament</em> also has the earliest clear link in English between St Valentine’s Day and love: <span class="la">For this was on seynt Valentynes day, / Whan every foul cometh ther to chese his make</span> (PF 309–310). Whether Chaucer started the custom or reflects one already current at court, perhaps with French poets of the time, is disputed.</p>
      `
    },
    {
      title: 'Troilus and Criseyde',
      html: `
        <p><em>Troilus</em> was finished in the mid-1380s and runs to some 8,200 lines in five books. Its main source is Giovanni Boccaccio’s Italian poem <em>Il Filostrato</em> (“the one struck down by love”), written about 1335–40, which Chaucer follows closely in places and expands in others, above all in the character of Pandarus and in Criseyde’s hesitations. He never names Boccaccio. He claims instead to follow a Latin author, <span class="la">myn auctour called Lollius</span> (I.394), who did not exist; how Chaucer came by the name is still debated.</p>
        <p>The love story itself is medieval. Homer mentions Troilus once, as a son of Priam killed in the war; the affair with Criseyde (Briseida) was invented by Benoît de Sainte-Maure in his <em>Roman de Troie</em> (c. 1160s) and passed on in Guido delle Colonne’s Latin history of Troy (1287). After Chaucer the story went on to Robert Henryson’s <em>Testament of Cresseid</em> and Shakespeare’s <em>Troilus and Cressida</em>, and the uncle gave English the word <em>pander</em>.</p>
        <p>Chaucer sent the finished poem to two friends for correction: <span class="la">O moral Gower, this book I directe / To thee, and to the philosophical Strode</span> (V.1856–1857). In the manuscript at Corpus Christi College, Cambridge, a famous frontispiece shows a poet reading from a pulpit to a courtly audience.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Geoffrey_Chaucer_on_a_podium_before_the_king.jpg/960px-Geoffrey_Chaucer_on_a_podium_before_the_king.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Geoffrey_Chaucer_on_a_podium_before_the_king.jpg/500px-Geoffrey_Chaucer_on_a_podium_before_the_king.jpg|https://upload.wikimedia.org/wikipedia/commons/2/2e/Geoffrey_Chaucer_on_a_podium_before_the_king.jpg" alt="Manuscript painting of a man speaking from an outdoor pulpit to richly dressed lords and ladies, with a castle in the background"><figcaption>The frontispiece of the <em>Troilus</em> manuscript at Corpus Christi College, Cambridge (MS 61, early fifteenth century): a poet, usually taken to be Chaucer, speaks from a pulpit to a courtly audience; the figure in gold is often identified as Richard II. The picture is idealised, and how far it shows real practice is debated. <span class="credit">Manuscript illumination, public domain · <a href="https://commons.wikimedia.org/wiki/File:Geoffrey_Chaucer_on_a_podium_before_the_king.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Boethius, Petrarch and the “litel book”',
      html: `
        <p>While he worked on <em>Troilus</em>, Chaucer was translating Boethius’s <em>Consolation of Philosophy</em> into English prose (his <em>Boece</em>), and Boethius runs through the poem: Fortune and her wheel, the instability of earthly happiness, and in Book IV a long speech in which Troilus argues himself into the belief that everything is predestined.</p>
        <p>In Book I Troilus sings a song, <span class="la">If no love is, O god, what fele I so?</span> (I.400–420), which is a translation of a sonnet by Petrarch (<em>Canzoniere</em> 132, “S’amor non è”), the first known in English. Chaucer turned the fourteen lines into three rhyme-royal stanzas, and attributes them, oddly, to Lollius.</p>
        <p>At the end Chaucer sends the poem off with a famous worry about the state of English: <span class="la">And for ther is so greet diversitee / In English and in wryting of our tonge, / So preye I god that noon miswryte thee, / Ne thee mismetre for defaute of tonge</span> (V.1793–1796). He knew that scribes from other dialects would change his spellings and spoil his metre, which is exactly what happened in many manuscripts.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">The lyf so short, the craft so long to lerne,<br>Thassay so hard, so sharp the conquering,<br>The dredful Ioy, that alwey slit so yerne,<br>Al this mene I by love</p>
    <p>“Life so short, the craft so long to learn, the attempt so hard, so sharp the conquering, the fearful joy that always slips away so quickly: all this I mean by love.” The opening of the <em>Parliament of Fowls</em> (lines 1–4), Skeat’s text (1894), vol. 1.</p>
    <p>The first line turns the old medical proverb of Hippocrates, known in Latin as <em>ars longa, vita brevis</em>, and for three lines the reader thinks of a craft such as medicine or poetry; the fourth line reveals that the subject is love. <span class="la">Thassay</span> is <span class="la">the assay</span> run together, like <span class="la">tendyte</span> in the reading; <span class="la">slit</span> is a contracted <span class="la">slydeth</span> “slides, slips”; <span class="la">yerne</span> “eagerly, quickly” is German <em>gern</em>.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>Criseyde</strong>: three syllables, <em>kri-SAI-də</em>; <span class="la">Troilus</span> also three syllables, <em>TRO-i-lus</em>.</li>
      <li><strong>Troye : Ioye : fro ye</strong>: the stanza rhymes <em>TROI-ə</em> and <em>DʒOI-ə</em> with <em>fro ye</em>, the pronoun lightly stressed. Skeat’s two base manuscripts write it as one word, <span class="la">froye</span>.</li>
      <li><strong>sorwe, sorwful</strong>: <em>SOR-wə</em>, two syllables, like German <em>Sorge</em> with <em>w</em> for <em>g</em>.</li>
      <li><strong>wight, might</strong>: <span class="la">gh</span> as German <em>ch</em>: <span class="la">wight</span> sounds like German <em>Wicht</em>, which is the same word.</li>
      <li><strong>Thesiphone</strong>: four syllables, <em>te-SI-fo-ne</em>, the final <span class="la">-e</span> sounded; <span class="la">tendyte</span> <em>ten-DII-tə</em>.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. Rhyme royal: the seven-line stanza',
      html: `
        <p><em>Troilus</em> is written in stanzas of seven five-stress lines rhyming <strong>ababbcc</strong>. The first stanza shows the pattern:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Line ending</th><th>Rhyme</th></tr></thead>
          <tbody>
            <tr><td class="la">… to tellen</td><td>a</td></tr>
            <tr><td class="la">… sone of Troye</td><td>b</td></tr>
            <tr><td class="la">… aventures fellen</td><td>a</td></tr>
            <tr><td class="la">… out of Ioye</td><td>b</td></tr>
            <tr><td class="la">… er that I parte fro ye</td><td>b</td></tr>
            <tr><td class="la">… for tendyte</td><td>c</td></tr>
            <tr><td class="la">… as I wryte</td><td>c</td></tr>
          </tbody>
        </table></div>
        <p>The stanza came from French and Italian models and appears first in English in Chaucer’s own work (the <em>Complaint unto Pity</em> is usually taken as the earliest example); he used it again in the <em>Parliament of Fowls</em> and for several of the <em>Canterbury Tales</em> (Man of Law, Prioress, Clerk, Second Nun). The name “rhyme royal” is later and is usually explained from its use in the <em>Kingis Quair</em> attributed to James I of Scotland (early fifteenth century).</p>
        <p>The stanza is a unit of sense: one or two sentences, with the closing couplet often rounding off a thought like a proverb: <span class="la">For wel sit it … / A woful wight to han a drery fere, / And, to a sorwful tale, a sory chere</span>. The extra rhyme in the middle (the fifth line repeats the b-rhyme) gives the stanza a pause before the close, which suits reflection rather than fast narrative.</p>
      `
    },
    {
      title: '2. The infinitive: tellen, to tellen, for to seyne',
      html: `
        <p>The Middle English infinitive ends in <span class="la">-en</span> or <span class="la">-e</span> (<span class="la">tellen, pleyne, preyen, sterve</span>), German <em>-en</em>. It is used:</p>
        <ul>
          <li>bare, after modal verbs: <span class="la">Ne dar … Preyen</span> “dare not pray”, <span class="la">ye may after here</span> “you may hear later”;</li>
          <li>with <span class="la">to</span>, like German <em>zu</em>: <span class="la">to pleyne</span>, <span class="la">to han a drery fere</span>;</li>
          <li>with <span class="la">for to</span>, which often means no more than <span class="la">to</span> but can express purpose, like German <em>um zu</em>: <span class="la">the sothe for to seyne</span> “to tell the truth”.</li>
        </ul>
        <p><span class="la">to</span> can run into a following vowel: <span class="la">for tendyte</span> = <span class="la">for to endyte</span> “to compose”. The definite article does the same: <span class="la">thassay</span> = <span class="la">the assay</span> (source panel).</p>
        <p>The first stanza is built around an infinitive phrase used as a noun: <span class="la">The double sorwe of Troilus to tellen … My purpos is</span> “to tell the double sorrow of Troilus … is my purpose”. The object comes first, the infinitive follows it, and the main verb waits until line 5, the order of a German subordinate infinitive: <em>Das doppelte Leid des Troilus zu erzählen … ist mein Vorhaben</em>. In <span class="la">wel sit it … A woful wight to han a drery fere</span> the infinitive phrase is the real subject of <span class="la">sit</span> “suits”: “it is fitting for a woeful creature to have a dreary companion”.</p>
      `
    },
    {
      title: '3. Wishes and concessions: Have he my thank',
      html: `
        <p>The subjunctive (Lecture VI) expresses wishes and commands to a third person, where modern English needs <em>let</em> or <em>may</em> and German uses the subjunctive just as Chaucer does:</p>
        <ul>
          <li><span class="la">Have he my thank, and myn be this travayle!</span> “Let him have my thanks, and let this labour be mine!”, German <em>Er habe meinen Dank, und mein sei diese Mühe!</em></li>
          <li><span class="la">That love hem bringe in hevene to solas</span> “that Love may bring them to solace in heaven”, after a verb of praying.</li>
        </ul>
        <p>Concession, “even if”, uses <span class="la">al</span> or <span class="la">though</span> with inverted word order: <span class="la">al sholde I therfor sterve</span> “even if I should die for it”, German <em>und sollte ich auch darüber sterben</em>. A condition takes the subjunctive too: <span class="la">If any drope of pitee in yow be</span> “if there be any drop of pity in you”.</p>
        <p>The narrator who speaks these wishes is a character in his own right. He calls himself one who serves the servants of the god of Love (<span class="la">I, that god of Loves servaunts serve</span>), a joke on the papal title <em>servus servorum Dei</em>, “servant of the servants of God”: too unattractive to hope for love himself, he can only write about others and ask happy lovers to pray for him.</p>
      `
    },
    {
      title: '4. The words of feeling: sorwe, wele, unsely',
      html: `
        <p>The passage is full of words for joy and grief. German helps with most of them, but some have moved apart:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Chaucer</th><th>Meaning</th><th>German</th></tr></thead>
          <tbody>
            <tr><td class="la">sorwe</td><td>sorrow, grief</td><td><em>Sorge</em> “worry”: same word, different sense</td></tr>
            <tr><td class="la">wo, wele</td><td>woe, well-being</td><td><em>Weh, Wohl</em></td></tr>
            <tr><td class="la">drery</td><td>sad, gloomy</td><td><em>traurig</em></td></tr>
            <tr><td class="la">sory</td><td>sad</td><td>not from <span class="la">sorwe</span> but from <span class="la">sore</span>; compare <em>sehr</em>, once “painfully”</td></tr>
            <tr><td class="la">unsely</td><td>unhappy, ill-fated</td><td><em>unselig</em></td></tr>
            <tr><td class="la">hevinesse</td><td>sorrow (heaviness of heart)</td><td><em>Schwermut</em> uses the same image</td></tr>
          </tbody>
        </table></div>
        <p><span class="la">sely</span> (Old English <span class="la">sǣlig</span>, German <em>selig</em>) meant “blessed, happy”; it slid to “innocent”, then “pitiable”, then “simple”, and ended as modern <em>silly</em>. The French words in the passage (<span class="la">pitee, adversitee, solas, travayle, peyne</span>) are the language of courtly love, as in Lecture IX.</p>
      `
    }
  ],

  vocab: [
    { id: 'sorwe', head: 'sorwe', la: 'sorwe', pos: 'noun', en: 'sorrow, grief', note: 'OE sorg, German Sorge; German has kept the sense “worry”, English “grief”.' },
    { id: 'wele', head: 'wele', la: 'wele', pos: 'noun', en: 'happiness, well-being, prosperity', note: 'OE wela, German Wohl; modern weal, wealth. Fro wo to wele: German vom Weh zum Wohl.' },
    { id: 'pitee', head: 'pitee', la: 'pitee', pos: 'noun', en: 'pity, compassion', note: 'French pité, Latin pietas (also the source of piety).' },
    { id: 'gladnesse', head: 'gladnesse', la: 'gladnesse', pos: 'noun', en: 'gladness, joy', note: 'OE glædnes; glad is related to German glatt “smooth”.' },
    { id: 'drope', head: 'drope', la: 'drope', pos: 'noun', en: 'drop', note: 'OE dropa; German Tropfen (High German consonant shift).' },
    { id: 'fere', head: 'fere', la: 'fere', pos: 'noun', en: 'companion, mate', note: 'OE gefēra “fellow traveller”, from faran; German Gefährte is formed the same way from fahren.' },
    { id: 'chere', head: 'chere', la: 'chere', pos: 'noun', en: 'face, expression; mood', note: 'Old French chiere “face”; modern cheer (“be of good cheer”).' },
    { id: 'speed', head: 'speed', la: 'speed', pos: 'noun', en: 'success, good fortune', note: 'OE spēd; the sense survives in “Godspeed”.' },
    { id: 'pleynen', head: 'pleynen', la: 'pleynen; pleyned', pos: 'verb, weak', en: 'lament, complain', note: 'French plaindre, stem plaign-; noun pleynte “complaint”.' },
    { id: 'sterven', head: 'sterven', la: 'sterven; starf; storven', pos: 'verb, strong', en: 'die', note: 'OE steorfan, German sterben; narrowed to modern starve.' },
    { id: 'enditen', head: 'enditen', la: 'enditen, endyten; endited', pos: 'verb, weak', en: 'compose, write (a poem or letter)', note: 'French enditer; modern indite, and indict (to draw up a charge).' },
    { id: 'avaylen', head: 'avaylen', la: 'avaylen; avayled', pos: 'verb, weak', en: 'help, profit, be of use', note: 'French a- + valoir “be worth”; modern avail.' },
    { id: 'remembren', head: 'remembren', la: 'remembren; remembred', pos: 'verb, weak', en: 'remember; (reflexive) recall', note: 'French remembrer; remembreth yow on, like German sich erinnern an.' },
    { id: 'dar', head: 'dar', la: 'dar; dorste', pos: 'verb, preterite-present', en: 'dare', note: 'OE dear, dorste; no -s in the third person (he dar), like he may, he can.' },
    { id: 'unsely', head: 'unsely', la: 'unsely', pos: 'adjective', en: 'unhappy, ill-fated', note: 'OE unsǣlig, German unselig; sely “blessed” became silly.' },
    { id: 'sory', head: 'sory', la: 'sory', pos: 'adjective', en: 'sad, sorrowful; wretched', note: 'OE sārig, from sār “sore, painful”; not related to sorwe.' },
    { id: 'drery', head: 'drery', la: 'drery', pos: 'adjective', en: 'sad, gloomy', note: 'OE drēorig “bloody; sad”, German traurig.' }
  ],

  grammarCards: [
    { id: 'me10-royal', front: 'rhyme royal', back: 'seven-line stanza rhyming ababbcc (Troilus, Parliament of Fowls)' },
    { id: 'me10-inf', front: 'tellen, to tellen, for to tellen', back: 'the infinitive: bare, with to, with for to' },
    { id: 'me10-fortoseyne', front: 'the sothe for to seyne', back: 'to tell the truth' },
    { id: 'me10-tendyte', front: 'tendyte', back: 'to endyte, “to compose” (to run into the vowel)' },
    { id: 'me10-purpos', front: 'The double sorwe of Troilus to tellen … My purpos is', back: 'to tell the double sorrow of Troilus … is my purpose' },
    { id: 'me10-sit', front: 'wel sit it', back: 'it is fitting (sit = sitteth, “suits”)' },
    { id: 'me10-have', front: 'Have he my thank', back: 'let him have my thanks (subjunctive; German er habe)' },
    { id: 'me10-al', front: 'al sholde I therfor sterve', back: 'even if I should die for it' },
    { id: 'me10-thatam', front: 'me, that am the sorwful instrument', back: 'me, who am the sorrowful instrument (German mir, der ich … bin)' },
    { id: 'me10-servus', front: 'I, that god of Loves servaunts serve', back: 'I who serve the servants of the god of Love (servus servorum Dei)' },
    { id: 'me10-dar', front: 'dar, dorste', back: 'dare, dared (preterite-present)' },
    { id: 'me10-sorwe', front: 'sorwe ≠ Sorge', back: 'grief, not worry' },
    { id: 'me10-sory', front: 'sory', back: 'from sore (sār), not from sorwe' },
    { id: 'me10-sely', front: 'sely, unsely', back: 'blessed (German selig) → silly; unhappy (unselig)' },
    { id: 'me10-filostrato', front: 'Main source of Troilus', back: 'Boccaccio, Il Filostrato (never named; Chaucer says “Lollius”)' },
    { id: 'me10-petrarch', front: 'If no love is, O god, what fele I so?', back: 'Troilus’s song: Petrarch, Canzoniere 132, the first Petrarch in English (I.400)' },
    { id: 'me10-valentine', front: 'For this was on seynt Valentynes day', back: 'Parliament of Fowls 309: birds choose their mates' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'What is the “double sorrow” of Troilus?', options: ['from woe to happiness, and afterwards out of joy', 'his father’s death and the fall of Troy', 'two lovers who both left him', 'two wars'], answer: 0, explain: 'Fro wo to wele, and after out of Ioye.' },
    { id: 'e2', type: 'mc', prompt: 'Whom does the narrator call on for help in line 6?', options: ['Tisiphone, one of the Furies', 'Clio, the Muse of history', 'Venus', 'the Virgin Mary'], answer: 0, explain: 'A Fury instead of a Muse: the subject is torment.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">for tendyte</span> means:', options: ['to compose', 'to indict', 'for the ending', 'to tend'], answer: 0, explain: 'for to endyte.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">al sholde I therfor sterve</span> means:', options: ['even if I should die for it', 'I should starve for it', 'everyone should die for it', 'I shall therefore die'], answer: 0, explain: 'al + inversion: concession.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Have he my thank, and myn be this travayle!</span> means:', options: ['Let him have my thanks, and let this labour be mine!', 'He has my thanks and my labour.', 'Has he thanked me for this labour?', 'He should thank me for my labour.'], answer: 0, explain: 'Subjunctive of wish.' },
    { id: 'e6', type: 'mc', prompt: 'Whom does the narrator ask happy lovers to pray for?', options: ['those in Troilus’s situation, and the narrator himself', 'Criseyde only', 'the Greeks', 'the Furies'], answer: 0, explain: 'preyeth for hem … And eek for me.' },
    { id: 'e7', type: 'mc', prompt: 'The rhyme scheme of a rhyme-royal stanza is:', options: ['ababbcc', 'aabbcc', 'abab cdcd', 'aaaabbb'], answer: 0, explain: 'Seven lines.' },
    { id: 'e8', type: 'mc', prompt: '<span class="la">unsely</span> means:', options: ['unhappy, ill-fated', 'unholy', 'unwise', 'unseen'], answer: 0, explain: 'German unselig; sely later became silly.' },
    { id: 'e9', type: 'match', prompt: 'Match the words to their German relatives.', pairs: [
      ['sorwe', 'Sorge'], ['wele', 'Wohl'], ['sterven', 'sterben'], ['drery', 'traurig'], ['drope', 'Tropfen']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the meanings.', pairs: [
      ['pleyne', 'lament'], ['chere', 'face'], ['speed', 'success'], ['fere', 'companion'], ['endyte', 'compose']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">The double ___ of Troilus to tellen</span>', hint: 'sorrow', answers: ['sorwe', 'sorowe'], full: 'The double sorwe of Troilus to tellen', explain: 'I.1.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Fro wo to ___, and after out of Ioye</span>', hint: 'happiness', answers: ['wele', 'weele'], full: 'Fro wo to wele, and after out of Ioye', explain: 'I.4.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Thise woful vers, that ___ as I wryte!</span>', hint: 'weep', answers: ['wepen', 'wepe'], full: 'Thise woful vers, that wepen as I wryte!', explain: 'I.7.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">But ye loveres, that bathen in ___</span>', hint: 'gladness', answers: ['gladnesse'], full: 'But ye loveres, that bathen in gladnesse', explain: 'I.22.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give Chaucer’s infinitive and the German cognate.', headers: ['Chaucer', 'German'], rows: [
      { label: 'die', answers: ['sterven|sterve', 'sterben'] },
      { label: 'help', answers: ['helpen|helpe', 'helfen'] },
      { label: 'tell', answers: ['tellen|telle', 'erzählen|zählen'] },
      { label: 'bathe', answers: ['bathen|bathe', 'baden'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Give Chaucer’s word and its meaning.', headers: ['Chaucer', 'Meaning'], rows: [
      { label: 'success', answers: ['speed', 'success|good fortune'] },
      { label: 'companion', answers: ['fere', 'companion|mate'] },
      { label: 'face, expression', answers: ['chere', 'face|expression|look'] },
      { label: 'ill-fated', answers: ['unsely', 'unhappy|ill-fated|unlucky|unfortunate'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the modern translation in order.', source: 'Thise woful vers, that wepen as I wryte', tokens: ['These woeful verses', 'that weep', 'as', 'I write'], explain: 'I.7.' },
    { id: 'e18', type: 'translate', dir: 'me-en', source: 'My purpos is, er that I parte fro ye.', model: 'It is my purpose, before I part from you.', accepted: ['it is my purpose before i part from you', 'my purpose is before i part from you', 'it is my purpose before i leave you', 'my purpose is before i leave you', 'it is my intention before i part from you', 'my intention is before i part from you', 'it is my intention before i leave you', 'my intention is before i leave you', 'it is my purpose before i depart from you', 'my purpose is before i depart from you', 'that is my purpose before i leave you', 'that is my purpose before i part from you'] },
    { id: 'e19', type: 'translate', dir: 'me-en', source: 'If any drope of pitee in yow be', model: 'If there is any drop of pity in you', accepted: ['if there is any drop of pity in you', 'if any drop of pity is in you', 'if any drop of pity be in you', 'if there be any drop of pity in you', 'if there is a drop of pity in you', 'if you have any drop of pity', 'if you have a drop of pity', 'if any drop of pity is in you all'] },
    { id: 'e20', type: 'translate', dir: 'en-me', source: 'let him have my thanks (subjunctive)', model: 'have he my thank', accepted: ['have he my thank'] },
    { id: 'e21', type: 'translate', dir: 'en-me', source: 'even if I should die (al + inversion)', model: 'al sholde I sterve', accepted: ['al sholde i sterve', 'al sholde i sterven', 'al sholde i therfor sterve'] },
    { id: 'e22', type: 'mc', prompt: 'Chaucer’s main source for <em>Troilus</em> was:', options: ['Boccaccio’s Il Filostrato', 'Homer’s Iliad', 'Virgil’s Aeneid', 'Dante’s Commedia'], answer: 0, explain: 'Never named: Chaucer claims to follow “Lollius”.' },
    { id: 'e23', type: 'mc', prompt: 'Which poem links St Valentine’s Day with birds choosing their mates?', options: ['The Parliament of Fowls', 'The Book of the Duchess', 'The House of Fame', 'The Legend of Good Women'], answer: 0, explain: 'PF 309–310.' }
  ],

  reading: {
    title: 'Troilus and Criseyde, I.1–35',
    note: 'Authentic text: Troilus and Criseyde, Book I, lines 1–35 (stanzas 1–5), in Skeat’s edition (The Complete Works of Geoffrey Chaucer, vol. 2, Oxford 1894), from the Project Gutenberg transcription. Skeat’s text is based on the Campsall manuscript (Cl., written before 1413 for the future Henry V) and Corpus Christi College, Cambridge, MS 61 (Cp.). His readings include fro ye (5; Cl. Cp. froye), am I (18; Cl. omits I), To (20; Cl. Vn-to), be this (21; Cl. be his), Remembreth (24; Cl. Remembre) and hem (31; Cl. him). Stanza breaks added. Tap any word.',
    text: 'The double sorwe of Troilus to tellen,\nThat was the king Priamus sone of Troye,\nIn lovinge, how his aventures fellen\nFro wo to wele, and after out of Ioye,\nMy purpos is, er that I parte fro ye.\nThesiphone, thou help me for tendyte\nThise woful vers, that wepen as I wryte!\n\nTo thee clepe I, thou goddesse of torment,\nThou cruel Furie, sorwing ever in peyne;\nHelp me, that am the sorwful instrument\nThat helpeth lovers, as I can, to pleyne!\nFor wel sit it, the sothe for to seyne,\nA woful wight to han a drery fere,\nAnd, to a sorwful tale, a sory chere.\n\nFor I, that god of Loves servaunts serve,\nNe dar to Love, for myn unlyklinesse,\nPreyen for speed, al sholde I therfor sterve,\nSo fer am I fro his help in derknesse;\nBut nathelees, if this may doon gladnesse\nTo any lover, and his cause avayle,\nHave he my thank, and myn be this travayle!\n\nBut ye loveres, that bathen in gladnesse,\nIf any drope of pitee in yow be,\nRemembreth yow on passed hevinesse\nThat ye han felt, and on the adversitee\nOf othere folk, and thenketh how that ye\nHan felt that Love dorste yow displese;\nOr ye han wonne him with to greet an ese.\n\nAnd preyeth for hem that ben in the cas\nOf Troilus, as ye may after here,\nThat love hem bringe in hevene to solas,\nAnd eek for me preyeth to god so dere,\nThat I have might to shewe, in som manere,\nSwich peyne and wo as Loves folk endure,\nIn Troilus unsely aventure.',
    translations: [
      { label: 'Modern English', text: 'To tell the double sorrow of Troilus, who was the son of King Priam of Troy, how his fortunes in love went from woe to happiness and afterwards out of joy, is my purpose before I part from you. Tisiphone, help me to compose these woeful verses, which weep as I write! I call on you, goddess of torment, cruel Fury, sorrowing ever in pain: help me, who am the sorrowful instrument that helps lovers, as best I can, to lament! For it is fitting, to tell the truth, for a woeful creature to have a dreary companion, and for a sorrowful tale a sad face. For I, who serve the servants of the god of Love, dare not pray to Love for success because of my unsuitability, even if I should die for it, so far am I from his help, in darkness. But nevertheless, if this can give gladness to any lover and help his cause, let him have my thanks, and let this labour be mine! But you lovers who bathe in gladness, if there is any drop of pity in you, remember the past sorrow that you have felt, and the misfortune of other people, and think how you have felt that Love dared to displease you, or else you have won him too easily. And pray for those who are in the situation of Troilus, as you may hear later, that Love may bring them to solace in heaven; and also pray for me to God so dear, that I may have the power to show, in some way, such pain and woe as Love’s people endure, in Troilus’s ill-fated fortune.' },
      { label: 'German translation', text: 'Das doppelte Leid des Troilus zu erzählen, der König Priamus’ Sohn von Troja war, wie es ihm in der Liebe erging, vom Weh zum Wohl und danach aus der Freude hinaus, ist mein Vorhaben, ehe ich von euch scheide. Tisiphone, hilf du mir, diese leidvollen Verse zu dichten, die weinen, während ich schreibe! Dich rufe ich an, du Göttin der Qual, du grausame Furie, die ewig in Pein trauert: hilf mir, der ich das traurige Werkzeug bin, das Liebenden hilft, so gut ich kann, zu klagen! Denn es ziemt sich wohl, um die Wahrheit zu sagen, dass ein leidvoller Mensch einen traurigen Gefährten habe und zu einer traurigen Geschichte ein trauriges Gesicht. Denn ich, der ich den Dienern des Liebesgottes diene, wage nicht, wegen meiner Unansehnlichkeit Amor um Erfolg zu bitten, und sollte ich auch darüber sterben, so fern bin ich von seiner Hilfe, in Finsternis. Doch dennoch, wenn dies irgendeinem Liebenden Freude bereiten und seiner Sache dienen kann, so habe er meinen Dank, und mein sei diese Mühe! Ihr Liebenden aber, die ihr in Freude badet, wenn ein Tropfen Mitleid in euch ist, erinnert euch an vergangenen Kummer, den ihr empfunden habt, und an das Unglück anderer Leute, und bedenkt, wie ihr erfahren habt, dass Amor es wagte, euch zu kränken, oder aber ihr habt ihn allzu leicht gewonnen. Und betet für die, die in der Lage des Troilus sind, wie ihr hernach hören mögt, dass Amor sie im Himmel zum Trost bringe; und betet auch für mich zum lieben Gott, dass ich die Kraft habe, auf irgendeine Weise solche Pein und solches Weh zu zeigen, wie Amors Volk sie erleidet, in Troilus’ unseligem Geschick.' }
    ],
    notes: [
      { ref: 'The double sorwe of Troilus to tellen, / That was the king Priamus sone of Troye,', html: 'The object and its infinitive come first; the main verb waits until line 5 (grammar section 2). <span class="la">the king Priamus sone</span> “King Priam’s son”: a name ending in <span class="la">-s</span> takes no further genitive ending, as in German <em>Priamus’ Sohn</em>.' },
      { ref: 'In lovinge, how his aventures fellen / Fro wo to wele, and after out of Ioye,', html: 'The plot in two lines: the rise and fall of Fortune’s wheel, a Boethian shape. <span class="la">aventures</span> “fortunes, what happened to him”; <span class="la">fellen</span> “turned out”, past plural of <span class="la">fallen</span>.' },
      { ref: 'My purpos is, er that I parte fro ye.', html: '<span class="la">er that</span> “before”, German <em>eher</em>. The narrator speaks as if reading aloud to a listening audience, as in the Corpus frontispiece.' },
      { ref: 'Thesiphone, thou help me for tendyte / Thise woful vers, that wepen as I wryte!', html: 'Tisiphone is one of the three Furies of classical myth (with Alecto and Megaera), invoked here in place of a Muse; Chaucer probably knew her from Statius’s <em>Thebaid</em>. <span class="la">thou help me</span>: imperative with the pronoun. <span class="la">vers</span>: plural unchanged. The verses themselves weep.' },
      { ref: 'To thee clepe I, thou goddesse of torment, / Thou cruel Furie, sorwing ever in peyne;', html: '<span class="la">clepe</span> “call” (Lecture IX, <span class="la">cleped</span>), with the verb second after the fronted phrase, as in German <em>Dich rufe ich an</em>.' },
      { ref: 'Help me, that am the sorwful instrument / That helpeth lovers, as I can, to pleyne!', html: '<span class="la">me, that am</span>: the verb agrees with <span class="la">me</span>, “me, who am”, like German <em>mir, der ich … bin</em>. The poet as a mere instrument for lovers’ laments.' },
      { ref: 'For wel sit it, the sothe for to seyne, / A woful wight to han a drery fere, / And, to a sorwful tale, a sory chere.', html: '<span class="la">sit</span> = <span class="la">sitteth</span> “suits, befits”. <span class="la">wight</span> “creature”, German <em>Wicht</em>; <span class="la">fere</span> “companion”; <span class="la">chere</span> “face”. The couplet closes the stanza like a proverb.' },
      { ref: 'For I, that god of Loves servaunts serve,', html: '“I, who serve the servants of the god of Love”: <span class="la">god of Loves</span> is a group genitive, the <span class="la">-s</span> added to the whole phrase, as in modern <em>the King of England’s daughter</em>. A play on the papal title <em>servus servorum Dei</em>.' },
      { ref: 'Ne dar to Love, for myn unlyklinesse, / Preyen for speed, al sholde I therfor sterve,', html: '<span class="la">dar</span> “dare”, a preterite-present verb without <span class="la">-th</span> (past <span class="la">dorste</span>, line 27). <span class="la">unlyklinesse</span> “unattractiveness, unsuitability”. <span class="la">speed</span> “success”. <span class="la">al sholde I</span> “even if I should”; <span class="la">sterve</span> “die”, German <em>sterben</em>.' },
      { ref: 'So fer am I fro his help in derknesse;', html: 'Love’s servants live in his light; the narrator is outside it, a stock pose of the unlucky lover-poet that Chaucer uses for comedy throughout his work.' },
      { ref: 'But nathelees, if this may doon gladnesse / To any lover, and his cause avayle, / Have he my thank, and myn be this travayle!', html: 'Two wishes in the subjunctive (grammar section 3). <span class="la">travayle</span> “labour”, French <em>travail</em>.' },
      { ref: 'But ye loveres, that bathen in gladnesse, / If any drope of pitee in yow be,', html: 'The audience divides into happy and unhappy lovers. <span class="la">be</span>: subjunctive after <span class="la">if</span>.' },
      { ref: 'Remembreth yow on passed hevinesse / That ye han felt, and on the adversitee / Of othere folk, and thenketh how that ye', html: 'Plural imperatives in <span class="la">-eth</span> (Lecture VII). <span class="la">Remembreth yow on</span> “remember”, reflexive with <span class="la">on</span>, exactly like German <em>erinnert euch an</em>. <span class="la">passed</span> “past”.' },
      { ref: 'Han felt that Love dorste yow displese; / Or ye han wonne him with to greet an ese.', html: '<span class="la">dorste</span> “dared”. <span class="la">to greet an ese</span> “too great an ease”: <span class="la">to</span> is the adverb <em>too</em>. Either you have suffered in love, or you won it too easily: both deserve pity, the second ironically.' },
      { ref: 'And preyeth for hem that ben in the cas / Of Troilus, as ye may after here,', html: '<span class="la">cas</span> “case, situation”. <span class="la">after</span> “afterwards”, in the rest of the poem.' },
      { ref: 'That love hem bringe in hevene to solas,', html: 'Subjunctive after a verb of praying. Whether <span class="la">hevene</span> is the heaven of love or of God is left open here; the poem’s ending turns firmly to the second.' },
      { ref: 'And eek for me preyeth to god so dere, / That I have might to shewe, in som manere, / Swich peyne and wo as Loves folk endure, / In Troilus unsely aventure.', html: '<span class="la">Troilus unsely aventure</span> “Troilus’s ill-fated fortune”, genitive without ending again. <span class="la">unsely</span>, German <em>unselig</em> (grammar section 4).' }
    ],
    glosses: {
      'a': 'a', 'adversitee': 'misfortune, adversity', 'after': 'afterwards; after out of Ioye: afterwards out of joy', 'al': 'al sholde I: even if I should', 'am': 'am; that am: who am', 'an': 'an, a; to greet an ese: too great an ease',
      'and': 'and', 'any': 'any', 'as': 'as; as I can: as best I can', 'avayle': 'help, benefit (French valoir)', 'aventure': 'fortune, fate, what happens to someone', 'aventures': 'fortunes, experiences',
      'bathen': 'bathe', 'be': 'be (subjunctive: if … be; let … be)', 'ben': 'are', 'bringe': 'bring (subjunctive: may bring)', 'but': 'but', 'can': 'can; as I can: as best I can',
      'cas': 'case, situation', 'cause': 'cause', 'chere': 'face, expression (French chiere)', 'clepe': 'call; To thee clepe I: I call on you', 'cruel': 'cruel', 'dar': 'dare (ne dar: dare not)',
      'dere': 'dear', 'derknesse': 'darkness', 'displese': 'displease, distress', 'doon': 'do; doon gladnesse: give joy', 'dorste': 'dared (past of dar)', 'double': 'double, twofold',
      'drery': 'sad, gloomy (German traurig)', 'drope': 'drop (German Tropfen)', 'eek': 'also', 'endure': 'endure, suffer', 'er': 'before; er that: before (German eher)', 'ese': 'ease; with to greet an ese: too easily',
      'ever': 'ever, always', 'fellen': 'befell, turned out (past plural of fallen)', 'felt': 'felt, experienced', 'fer': 'far', 'fere': 'companion (OE gefēra; German Gefährte)', 'folk': 'people; Loves folk: Love’s people, lovers',
      'for': 'for; because of; for to: to; for tendyte: to compose', 'fro': 'from; fro ye: from you', 'furie': 'Fury, one of the avenging goddesses', 'gladnesse': 'gladness, joy', 'god': 'God; god of Loves servaunts: the servants of the god of Love', 'goddesse': 'goddess',
      'greet': 'great; to greet: too great', 'han': 'have', 'have': 'have; Have he: let him have (subjunctive)', 'he': 'he', 'help': 'help (imperative; noun: help)', 'helpeth': 'helps',
      'hem': 'them', 'here': 'hear', 'hevene': 'heaven', 'hevinesse': 'sorrow, heaviness of heart', 'him': 'him (Love)', 'his': 'his',
      'how': 'how; how that: how', 'i': 'I', 'if': 'if', 'in': 'in; in lovinge: in loving, in love', 'instrument': 'instrument, tool', 'ioye': 'joy (I = J)',
      'is': 'is', 'it': 'it; sit it: it suits', 'king': 'king; the king Priamus sone: King Priam’s son', 'love': 'Love, the god of love; love', 'lover': 'lover', 'loveres': 'lovers',
      'lovers': 'lovers', 'loves': 'Love’s (genitive)', 'lovinge': 'loving, being in love', 'manere': 'manner, way', 'may': 'may, can', 'me': 'me',
      'might': 'might, power', 'my': 'my', 'myn': 'my; mine', 'nathelees': 'nevertheless', 'ne': 'not', 'of': 'of',
      'on': 'on; remembreth yow on: remember (German sich erinnern an)', 'or': 'or; or else', 'othere': 'other', 'out': 'out; out of Ioye: out of joy', 'parte': 'part, depart', 'passed': 'past, gone by',
      'peyne': 'pain, torment', 'pitee': 'pity', 'pleyne': 'lament, complain', 'preyen': 'pray', 'preyeth': 'pray (plural imperative)', 'priamus': 'Priam’s (the king Priamus sone: King Priam’s son)',
      'purpos': 'purpose, intention', 'remembreth': 'remember (plural imperative); remembreth yow: recall', 'servaunts': 'servants', 'serve': 'serve', 'seyne': 'say; the sothe for to seyne: to tell the truth', 'shewe': 'show, set forth',
      'sholde': 'should; al sholde I: even if I should', 'sit': 'suits, befits (sitteth; wel sit it: it is fitting)', 'so': 'so', 'solas': 'comfort, solace', 'som': 'some', 'sone': 'son',
      'sorwe': 'sorrow, grief (German Sorge)', 'sorwful': 'sorrowful', 'sorwing': 'sorrowing, grieving', 'sory': 'sad, sorrowful (OE sārig, from sār “sore”)', 'sothe': 'truth; the sothe for to seyne: to tell the truth', 'speed': 'success',
      'sterve': 'die (German sterben)', 'swich': 'such', 'tale': 'tale, story', 'tellen': 'tell', 'tendyte': 'to compose (to endyte, run together)', 'thank': 'thanks, gratitude',
      'that': 'that; who, which', 'the': 'the', 'thee': 'thee, you', 'thenketh': 'think (plural imperative)', 'therfor': 'for it, for that', 'thesiphone': 'Tisiphone, one of the three Furies',
      'this': 'this', 'thise': 'these', 'thou': 'thou, you', 'to': 'to; too (to greet: too great)', 'torment': 'torment', 'travayle': 'labour, toil (French travail)',
      'troilus': 'Troilus, son of Priam; Troilus (genitive): Troilus’s', 'troye': 'Troy', 'unlyklinesse': 'unattractiveness, unsuitability (for love)', 'unsely': 'unhappy, ill-fated (German unselig)', 'vers': 'verses (plural unchanged)', 'was': 'was',
      'wel': 'well; wel sit it: it is fitting', 'wele': 'happiness, well-being (German Wohl)', 'wepen': 'weep', 'wight': 'creature, person (German Wicht)', 'with': 'with', 'wo': 'woe (German Weh)',
      'woful': 'woeful, sorrowful', 'wonne': 'won (past participle of winnen)', 'wryte': 'write', 'ye': 'you (subject, plural)', 'yow': 'you (object, plural); remembreth yow: recall'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What is the narrator’s purpose?', options: ['to tell the double sorrow of Troilus', 'to praise Criseyde', 'to tell the whole fall of Troy', 'to win a lady'], answer: 0, explain: 'My purpos is.' },
      { id: 'r2', type: 'mc', prompt: 'How does the narrator describe himself?', options: ['as one who serves Love’s servants, without hope of love himself', 'as a happy lover', 'as a knight of Troy', 'as a priest of Venus'], answer: 0, explain: 'Ne dar to Love … Preyen for speed.' },
      { id: 'r3', type: 'mc', prompt: 'What does he ask happy lovers to remember?', options: ['their own past sorrows and other people’s misfortunes', 'the fall of Troy', 'their prayers', 'their ladies’ names'], answer: 0, explain: 'Remembreth yow on passed hevinesse.' },
      { id: 'r4', type: 'mc', prompt: 'What should they pray for on his behalf?', options: ['that he may have the power to show lovers’ pain', 'that he may find a lady', 'that he may die', 'that Troy may be saved'], answer: 0, explain: 'That I have might to shewe … Swich peyne and wo.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">sory</span> comes from Old English <span class="la">sārig</span>, related to:', options: ['sore, and German sehr', 'sorrow, and German Sorge', 'sour', 'sure'], answer: 0, explain: 'sorry and sorrow are unrelated.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">drery</span> is related to German:', options: ['traurig', 'drehen', 'dreist', 'Draht'], answer: 0, explain: 'OE drēorig.' },
      { id: 't3', type: 'mc', prompt: 'How many lines has a rhyme-royal stanza?', options: ['seven', 'six', 'eight', 'fourteen'], answer: 0, explain: 'ababbcc.' },
      { id: 't4', type: 'mc', prompt: '<span class="la">sterven</span> (German <em>sterben</em>) became modern English:', options: ['starve', 'stir', 'steer', 'stern'], answer: 0, explain: 'Narrowed to dying of hunger.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Thesiphone, thou help me for ___</span>', hint: 'to compose', answers: ['tendyte', 'tendite'], full: 'Thesiphone, thou help me for tendyte', explain: 'I.6.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">For I, that god of Loves servaunts ___</span>', hint: 'serve', answers: ['serve'], full: 'For I, that god of Loves servaunts serve', explain: 'I.15.' },
      { id: 't7', type: 'translate', dir: 'me-en', source: 'Remembreth yow on passed hevinesse', model: 'Remember past sorrow', accepted: ['remember past sorrow', 'remember past sadness', 'remember past grief', 'remember past heaviness', 'remember your past sorrow', 'remember your past sadness', 'remember your past grief', 'recall past sorrow', 'recall past sadness', 'recall your past sorrow', 'remember the past sorrow', 'remember the sorrow that is past'] },
      { id: 't8', type: 'translate', dir: 'en-me', source: 'to compose (to + endyte, run together)', model: 'tendyte', accepted: ['tendyte', 'tendite'] },
      { id: 't9', type: 'mc', prompt: 'To whom did Chaucer send <em>Troilus</em> for correction?', options: ['moral Gower and philosophical Strode', 'King Richard II', 'Petrarch', 'John of Gaunt'], answer: 0, explain: 'V.1856–1857.' },
      { id: 't10', type: 'mc', prompt: 'Which poem is an elegy for Blanche of Lancaster?', options: ['The Book of the Duchess', 'The Parliament of Fowls', 'Troilus and Criseyde', 'The House of Fame'], answer: 0, explain: 'She died in 1368.' },
      { id: 't11', type: 'mc', prompt: 'Troilus’s song in Book I translates a sonnet by:', options: ['Petrarch', 'Dante', 'Boccaccio', 'Machaut'], answer: 0, explain: 'Canzoniere 132.' }
    ]
  },

  reference: [
    { title: 'The infinitive', headers: ['Form', 'Example'], rows: [['bare (after modals)', 'Ne dar … Preyen'], ['to + infinitive', 'to pleyne'], ['for to + infinitive', 'the sothe for to seyne'], ['to run together', 'tendyte = to endyte'], ['infinitive phrase as subject', 'The double sorwe … to tellen … My purpos is']] },
    { title: 'Chaucer’s works outside the Tales', headers: ['Work', 'Form, date (approximate)'], rows: [['Book of the Duchess', 'dream vision, couplets; after 1368'], ['House of Fame', 'dream vision, couplets; c. 1380'], ['Parliament of Fowls', 'dream vision, rhyme royal; early 1380s'], ['Boece', 'prose translation of Boethius; 1380s'], ['Troilus and Criseyde', 'five books, rhyme royal; mid-1380s'], ['Legend of Good Women', 'prologue and legends, couplets; mid-1380s on'], ['Treatise on the Astrolabe', 'prose; c. 1391']] }
  ]
});
