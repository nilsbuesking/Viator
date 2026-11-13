/*
 * Middle English — Lecture XII: manuscripts and print. Numbers and numerals; abbreviations and how editors expand them;
 * prose syntax; from Chaucer's English to modern English. Reading: Chaucer's Retraction (Parson's Tale, Group I
 * 1081–1092, with the rubric and colophon), Skeat (1894). Source panel: Chaucers Wordes unto Adam, his owne Scriveyn,
 * Skeat vol. 1. Picture from Wikimedia Commons.
 */
Viator.addLecture('me', {
  id: 'me-12',
  number: 12,
  title: 'Manuscripts and Print',
  subtitle: 'Hengwrt, Ellesmere, Caxton and the road to modern English (Chaucer’s Retraction)',
  minutes: 60,

  intro: `
    <p>No manuscript of Chaucer’s works in his own hand survives. Everything we read comes through scribes, then printers, then editors, and each of them changed the text a little. This last lecture follows the <em>Canterbury Tales</em> from the scribe’s desk to the printed page, and from Chaucer’s English to ours.</p>
    <p>The reading is the end of the <em>Canterbury Tales</em>: the short prose passage, usually called the Retraction, that follows the Parson’s Tale in the manuscripts. Chaucer, as “the maker of this book”, takes his leave, asks forgiveness for his “worldly vanities” and lists them: <em>Troilus</em>, the <em>House of Fame</em>, the <em>Legend of Good Women</em>, the <em>Book of the Duchess</em>, the <em>Parliament of Fowls</em>, and those Canterbury tales that “tend towards sin”. It is our best list of what he wrote, and a puzzle: a sincere deathbed repentance, a conventional ending, or both?</p>
    <p>The source panel is Chaucer’s complaint to his own copyist. The grammar covers numbers and numerals (and a numeral that the scribes got wrong), the abbreviations of manuscripts and how editors expand them, the build of Chaucer’s prose sentences, and the changes that turned his English into modern English.</p>
  `,

  background: [
    {
      title: 'Hengwrt and Ellesmere',
      html: `
        <p>The <em>Canterbury Tales</em> survive in more than eighty manuscripts, complete or in part, all or almost all written after Chaucer’s death in 1400 (Hengwrt may have been begun in his lifetime). The two most important were copied by the same scribe in the first decade of the fifteenth century, as A. I. Doyle and M. B. Parkes showed in 1978:</p>
        <ul>
          <li>The <strong>Hengwrt</strong> manuscript (National Library of Wales, Peniarth 392 D) is a plain working copy, probably the earlier of the two. The tales are in a less settled order, the Canon’s Yeoman’s Tale is missing, and rats have gnawed some leaves.</li>
          <li>The <strong>Ellesmere</strong> manuscript (Huntington Library, EL 26 C 9) is a luxury book with gold borders and pictures of the pilgrims, including the portrait of Chaucer on horseback, and the tales in the order most editors follow. Skeat based his text on it.</li>
        </ul>
        <p>The tales survive as ten fragments, groups of tales linked by the pilgrims’ talk, and the links do not join all of them: Chaucer left the work unfinished, and the order is partly the scribes’ and editors’ choice. Modern editors disagree about which manuscript to trust: Ellesmere has the better order and more regular spelling, but some think Hengwrt’s text closer to what Chaucer wrote, and its editors argue that Ellesmere’s regularity is partly editorial work by the scribe or his supervisors.</p>
        <p>In 2004 Linne Mooney identified the scribe as Adam Pinkhurst, a London scrivener whose signature survives in the oath book of the Scriveners’ Company, and suggested he was the <span class="la">Adam scriveyn</span> of Chaucer’s poem (source panel). The identification was widely accepted at first and has since been challenged; it remains open.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/P15150coll7_2813_extralarge.jpg/960px-P15150coll7_2813_extralarge.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/P15150coll7_2813_extralarge.jpg/500px-P15150coll7_2813_extralarge.jpg|https://upload.wikimedia.org/wikipedia/commons/3/3d/P15150coll7_2813_extralarge.jpg" alt="A page of a medieval manuscript written in a careful book hand, with decorated border and initial"><figcaption>A page from the Parson’s Tale in the Ellesmere manuscript (Huntington Library, EL 26 C 9, fol. 224v), written in the first decade of the fifteenth century by the scribe who also copied the Hengwrt manuscript. The Retraction follows the Parson’s Tale a few leaves later. <span class="credit">Manuscript, public domain · <a href="https://commons.wikimedia.org/wiki/File:P15150coll7_2813_extralarge.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Caxton and print',
      html: `
        <p>William Caxton (c. 1422–1491), a mercer who had spent many years in Bruges, learned printing in Cologne and printed the first book in English, his translation of the <em>Recuyell of the Historyes of Troye</em>, at Bruges in about 1473–74. In 1476 he set up his press at Westminster. One of his first large books was the <em>Canterbury Tales</em> (about 1476–77); about 1483 he printed a second edition with woodcuts of the pilgrims. In its preface he explains that the manuscript he had used for the first edition was faulty, and that a gentleman offered him a better one that his father had treasured. His second edition ends, like the manuscripts, with the Retraction. He also printed <em>Troilus</em>, the <em>House of Fame</em> and the <em>Boece</em>, and praised Chaucer as the poet who had “embellished” English.</p>
        <p>In the preface to his <em>Eneydos</em> (1490) Caxton tells a famous story of the problem he faced: merchants from London, held up by the wind off the Kent coast, asked a woman at a house for <em>egges</em>, and she replied that she spoke no French; only when one asked for <em>eyren</em> did she understand. The northern word with Norse <em>g</em> (<em>egg</em>) and the southern one related to German <em>Eier</em> were both English: which should a printer use? Print was one of the forces that settled such questions.</p>
      `
    },
    {
      title: 'The road to modern English',
      html: `
        <p>In the fifteenth century English began to replace French and Latin in government records, and a more uniform written English grew up in London, often linked with the royal Chancery, though scholars now see the process as more gradual and varied. Printing spread this written form and slowly fixed its spelling, just as the pronunciation of the long vowels was changing.</p>
        <p>That change, the Great Vowel Shift (roughly 1400–1700), moved every long vowel: Chaucer’s <span class="la">tyme</span> <em>tiimə</em> became <em>time</em>, <span class="la">hous</span> <em>huus</em> became <em>house</em>, <span class="la">name</span> <em>naamə</em> became <em>name</em>. German went through a similar diphthongisation earlier (Middle High German <span class="la">mîn hûs</span> &gt; <em>mein Haus</em>), which is why German speakers can often read Chaucer’s vowels more easily than English speakers can. Because the spelling was settling while the sounds moved, English spelling still records something like Chaucer’s pronunciation.</p>
        <p>The loss of final <span class="la">-e</span> in speech made Chaucer’s verse sound rough to later readers: John Dryden (1700) heard in it only “the rude sweetness of a Scotch tune”. Thomas Tyrwhitt’s edition of 1775–78 showed that the lines scan when the <span class="la">-e</span> is sounded (Lecture IV), and the great editions followed: Skeat’s (1894), on which this course is based, and the <em>Riverside Chaucer</em> (1987), the standard modern text.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Adam scriveyn, if ever it thee bifalle<br>Boece or Troilus to wryten newe,<br>Under thy lokkes thou most have the scalle,<br>But after my making thou wryte trewe.<br>So ofte a daye I mot thy werk renewe,<br>Hit to correcte and eek to rubbe and scrape;<br>And al is through thy negligence and rape.</p>
    <p>“Adam the scribe, if it ever falls to you to write out Boece or Troilus again, may you have the scab under your locks, unless you copy truly after my composition! So often in a day I have to renew your work, correct it and rub and scrape too; and all through your negligence and haste.” <em>Chaucers Wordes unto Adam, his owne Scriveyn</em>, Skeat’s text (1894), vol. 1, from Trinity College, Cambridge, MS R.3.20, a manuscript copied by John Shirley.</p>
    <p>The only witnesses are Shirley’s copy and John Stow’s edition of 1561, and the title is probably Shirley’s. The poem is a single rhyme-royal stanza (Lecture X). Corrections on parchment were made by scraping the ink off with a knife and rubbing the surface smooth: <span class="la">rubbe and scrape</span>. <span class="la">scalle</span> is a scabby disease of the scalp, a Norse word; <span class="la">rape</span> “haste” is unrelated to the modern word.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>Prose rhythm</strong>: the Retraction is prose, but read it aloud and the pairs fall into a rhythm: <span class="la">translacions and endytinges</span>, <span class="la">confessioun and satisfaccioun</span>, <span class="la">king of kinges and preest over alle preestes</span>.</li>
      <li><strong>-cioun</strong>: two syllables, <em>-si-UUN</em>: <span class="la">devocioun, salvacioun, satisfaccioun</span>.</li>
      <li><strong>Iesu</strong>: <em>DʒEE-zu</em>; the <span class="la">I</span> is the scribes’ capital for <span class="la">J</span>.</li>
      <li><strong>Latin</strong>: <span class="la">Qui cum patre</span> was read in the English Latin of the time, close to the spelling.</li>
      <li><strong>Before and after the Vowel Shift</strong>: <span class="la">lyf</span> <em>liif</em> → <em>life</em>; <span class="la">hous</span> <em>huus</em> → <em>house</em>; <span class="la">boke</span> <em>BOO-kə</em> → <em>book</em>.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. Numbers: nynetene, xxv',
      html: `
        <p>The Middle English numbers are close to German, and the teens are formed the same way:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Chaucer</th><th>Modern</th><th>German</th></tr></thead>
          <tbody>
            <tr><td class="la">oon, o</td><td>one, a</td><td><em>ein</em></td></tr>
            <tr><td class="la">two, tweye</td><td>two</td><td><em>zwei</em></td></tr>
            <tr><td class="la">sevene</td><td>seven</td><td><em>sieben</em></td></tr>
            <tr><td class="la">twelf</td><td>twelve</td><td><em>zwölf</em></td></tr>
            <tr><td class="la">fiftene</td><td>fifteen</td><td><em>fünfzehn</em></td></tr>
            <tr><td class="la">nynetene</td><td>nineteen</td><td><em>neunzehn</em></td></tr>
            <tr><td class="la">twenty, thritty</td><td>twenty, thirty</td><td><em>zwanzig, dreißig</em></td></tr>
          </tbody>
        </table></div>
        <p><span class="la">oon</span> and <span class="la">o</span> are the same word: <span class="la">oon</span> as a number and pronoun, <span class="la">o</span> (later <em>a</em>) before consonants as the article, just as German <em>ein</em> is both. Larger numbers are often formed with the unit first and <span class="la">and</span>, like German: <span class="la">Wel nyne and twenty in a companye</span> (General Prologue 24, Lecture II), German <em>neunundzwanzig</em>.</p>
        <p>Scribes often wrote numbers in Roman numerals, and numerals are easy to miscopy. In the Retraction, Ellesmere and the Petworth manuscript call the <em>Legend of Good Women</em> <span class="la">the book of the xxv. Ladies</span>, the Lansdowne manuscript has <span class="la">xv</span>, and Harley 7334 <span class="la">29</span>. Skeat prints <span class="la">nynetene</span>, the number of ladies the dreamer sees in the <em>Legend</em>’s own prologue (<span class="la">I saw cominge of ladyës nyntene</span>). An editor’s correction like this is called an emendation.</p>
      `
    },
    {
      title: '2. Reading a manuscript: abbreviations',
      html: `
        <p>Scribes saved time and parchment with a set of abbreviations inherited from Latin. Editors expand them, and older editions such as Skeat’s often print the expanded letters in italics:</p>
        <ul>
          <li>a stroke over a vowel for a following <span class="la">m</span> or <span class="la">n</span>: <em>contenaūce</em> = <span class="la">contenaunce</span> (Skeat prints the <em>n</em> in italics in <em>Piers Plowman</em>);</li>
          <li><span class="la">&amp;</span>, or a sign like a 7, for <span class="la">and</span> (the Latin <em>et</em>);</li>
          <li><span class="la">þ</span> with a small letter above for <span class="la">þe, þat</span>; when printers used <em>y</em> for the thorn, this became the <em>ye</em> of “Ye Olde Shoppe”, which was always pronounced <em>the</em>;</li>
          <li>a <span class="la">p</span> with a crossed stem for <span class="la">per, par</span>; hooks and loops for <span class="la">-er, -us, -es</span>;</li>
          <li><span class="la">&amp;c.</span>, <em>et cetera</em>, as at the end of the Retraction, where the familiar Latin doxology is cut short.</li>
        </ul>
        <p>Because of these, an edition is never simply the manuscript printed: every expansion, every <span class="la">u</span> or <span class="la">v</span>, every capital and punctuation mark is a decision. Skeat’s quotation marks and semicolons, like the stanza breaks in Lecture X and the raised points in Lecture XI, are editorial.</p>
      `
    },
    {
      title: '3. Chaucer’s prose',
      html: `
        <p>Chaucer’s prose builds long sentences from short units joined by <span class="la">that</span>, <span class="la">and</span>, and relatives, often modelled on Latin and French. The Retraction shows the main patterns:</p>
        <ul>
          <li><strong>Verb second</strong>, as in German, after a fronted element: <span class="la">Now preye I to hem alle</span> “Now I pray to all of them”, <span class="la">that thanke I oure lord</span> “for that I thank our Lord” (the object fronted).</li>
          <li><strong>Subjunctive in requests</strong>: <span class="la">I preye hem … that they arrette it</span> “that they (may) put it down”, <span class="la">that Crist have mercy on me</span>, <span class="la">that they … sende me grace</span>: German <em>dass Christus sich meiner erbarme</em>.</li>
          <li><strong>Relatives</strong>: <span class="la">of whom procedeth al wit</span> “from whom comes all wisdom”, <span class="la">the whiche I revoke</span> “which I revoke” (Lecture VIII), <span class="la">thilke that sounen in-to sinne</span> “those that tend towards sin”.</li>
          <li><strong>Impersonal verbs</strong>: <span class="la">any thing … that lyketh hem</span> “anything that pleases them”, where modern English says “that they like” (Lecture VI).</li>
          <li><strong>Doublets</strong>, French and English or two French words together: <span class="la">translacions and endytinges, confessioun and satisfaccioun</span>, a habit of legal and devotional prose.</li>
        </ul>
      `
    },
    {
      title: '4. From Chaucer’s English to ours',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Chaucer</th><th>Change</th><th>Modern</th></tr></thead>
          <tbody>
            <tr><td class="la">lyf, hous, boke</td><td>Great Vowel Shift (c. 1400–1700)</td><td>life, house, book</td></tr>
            <tr><td class="la">grete, sonne, faireste</td><td>final <span class="la">-e</span> lost in speech (15th century)</td><td>great, sun, fairest</td></tr>
            <tr><td class="la">he seith, she lyketh</td><td>northern <span class="la">-s</span> replaces <span class="la">-eth</span> (16th–17th century)</td><td>he says, she likes</td></tr>
            <tr><td class="la">they, hem, hir</td><td>Norse <em>them, their</em> spread south (15th century)</td><td>they, them, their</td></tr>
            <tr><td class="la">thou / ye, yow</td><td><em>you</em> for all (17th century)</td><td>you</td></tr>
            <tr><td class="la">they thanken, herkne</td><td>plural and subjunctive endings lost</td><td>they thank, listen</td></tr>
            <tr><td class="la">knight, night</td><td>spelling kept, sounds lost</td><td>knight, night</td></tr>
          </tbody>
        </table></div>
        <p>Most of these changes were complete by Shakespeare’s time, which is why his English is “early modern” and Chaucer’s is not. But much of what you have learned in this course survives in fixed phrases, in spelling and in dialect: <em>as it were</em>, <em>methinks</em>, <em>yclept</em>, <em>Godspeed</em>, <em>the knight</em> with its silent letters, and the Scots <em>burn</em> and <em>kirk</em>.</p>
      `
    }
  ],

  vocab: [
    { id: 'scriveyn', head: 'scriveyn', la: 'scriveyn', pos: 'noun', en: 'scribe, copyist, scrivener', note: 'French escrivain, Latin scriba; German Schreiber is the native formation.' },
    { id: 'makere', head: 'makere', la: 'makere, maker', pos: 'noun', en: 'maker; author, poet', note: 'The English word for “poet”, as in Scots makar; making “poetry”.' },
    { id: 'tretis', head: 'tretis', la: 'tretis', pos: 'noun', en: 'treatise, short work', note: 'French tretiz, from traiter “treat, handle”.' },
    { id: 'retraccioun', head: 'retraccioun', la: 'retraccioun; retracciouns', pos: 'noun', en: 'retraction, withdrawal', note: 'Latin retractatio; St Augustine’s Retractationes reviewed his own works.' },
    { id: 'conninge', head: 'conninge', la: 'conninge; unconninge', pos: 'noun', en: 'skill, knowledge; (un-) ignorance', note: 'From connen “know, be able”, German können; modern cunning.' },
    { id: 'gilt', head: 'gilt', la: 'gilt; giltes', pos: 'noun', en: 'guilt, sin, offence', note: 'OE gylt; no German cognate (German uses Schuld).' },
    { id: 'scalle', head: 'scalle', la: 'scalle', pos: 'noun', en: 'scab, scabby disease of the scalp', note: 'Old Norse skalli “bald head”.' },
    { id: 'rape', head: 'rape', la: 'rape', pos: 'noun', en: 'haste, hurry', note: 'Old Norse hrapa “hurry”; not related to the modern word.' },
    { id: 'biseken', head: 'biseken', la: 'biseken; bisoughte', pos: 'verb, weak', en: 'beseech, beg', note: 'From seken “seek”, German suchen; beseech and German besuchen are parallel formations.' },
    { id: 'foryeven', head: 'foryeven', la: 'foryeven; foryaf; foryeven', pos: 'verb, strong', en: 'forgive', note: 'OE forgiefan; German vergeben, with the same prefix and verb.' },
    { id: 'arretten', head: 'arretten', la: 'arretten; arretted', pos: 'verb, weak', en: 'impute, put down to', note: 'Old French areter; arrette it to the defaute: blame it on the lack.' },
    { id: 'revoken', head: 'revoken', la: 'revoken; revoked', pos: 'verb, weak', en: 'revoke, withdraw', note: 'Latin revocare, “call back”; German widerrufen is a calque.' },
    { id: 'biwaylen', head: 'biwaylen', la: 'biwaylen; biwayled', pos: 'verb, weak', en: 'bewail, lament', note: 'From waylen “wail”, a Norse word.' },
    { id: 'sounen', head: 'sounen', la: 'sounen; souned', pos: 'verb, weak', en: 'sound; tend towards (sounen in-to)', note: 'French soner; sounen in-to sinne “tend towards sin”.' },
    { id: 'namely', head: 'namely', la: 'namely', pos: 'adverb', en: 'especially, particularly', note: 'Like German namentlich; modern namely “that is to say”.' }
  ],

  grammarCards: [
    { id: 'me12-nynetene', front: 'nynetene', back: 'nineteen (German neunzehn); Skeat’s emendation of the MSS’ xxv' },
    { id: 'me12-oon', front: 'oon, o', back: 'one; a (number and article are one word, like German ein)' },
    { id: 'me12-emend', front: 'emendation', back: 'an editor’s correction of the manuscript text' },
    { id: 'me12-stroke', front: 'a stroke over a vowel', back: 'abbreviation for m or n (contenaūce)' },
    { id: 'me12-ye', front: 'ye (Ye Olde Shoppe)', back: 'þe written with y for thorn: pronounced the' },
    { id: 'me12-etc', front: '&c.', back: 'et cetera' },
    { id: 'me12-v2', front: 'Now preye I to hem alle', back: 'verb second after a fronted adverb, as in German' },
    { id: 'me12-subj', front: 'that Crist have mercy on me', back: 'subjunctive in a request (German dass Christus sich erbarme)' },
    { id: 'me12-lyketh', front: 'any thing that lyketh hem', back: 'anything that pleases them (impersonal)' },
    { id: 'me12-sounen', front: 'thilke that sounen in-to sinne', back: 'those that tend towards sin' },
    { id: 'me12-hengwrt', front: 'Hengwrt manuscript', back: 'National Library of Wales, Peniarth 392 D; plain, early, same scribe as Ellesmere' },
    { id: 'me12-ellesmere', front: 'Ellesmere manuscript', back: 'Huntington Library, EL 26 C 9; luxury copy with pilgrim portraits; Skeat’s base' },
    { id: 'me12-pinkhurst', front: 'Adam Pinkhurst', back: 'scrivener identified by Mooney (2004) as the Hengwrt/Ellesmere scribe; disputed' },
    { id: 'me12-caxton', front: 'Caxton’s Canterbury Tales', back: 'c. 1476–77; second edition with woodcuts c. 1483' },
    { id: 'me12-eyren', front: 'egges or eyren', back: 'Caxton’s story of two English words for eggs (Eneydos, 1490)' },
    { id: 'me12-gvs', front: 'Great Vowel Shift', back: 'c. 1400–1700: tyme, hous, name → time, house, name' },
    { id: 'me12-tyrwhitt', front: 'Tyrwhitt (1775–78)', back: 'showed that Chaucer’s lines scan with final -e sounded' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Who “takes his leave” at the end of the <em>Canterbury Tales</em>?', options: ['the maker of the book, Chaucer', 'the Parson', 'the Host', 'the scribe'], answer: 0, explain: 'Here taketh the makere of this book his leve.' },
    { id: 'e2', type: 'mc', prompt: 'What does Chaucer ask readers to do with anything they like in it?', options: ['thank Christ for it', 'praise the author', 'copy it out', 'pay the scribe'], answer: 0, explain: 'ther-of they thanken oure lord Iesu Crist.' },
    { id: 'e3', type: 'mc', prompt: 'To what should they <span class="la">arrette</span> (put down) anything that displeases them?', options: ['his lack of skill, not his will', 'the scribe’s carelessness', 'the Parson', 'the French sources'], answer: 0, explain: 'to the defaute of myn unconninge, and nat to my wil.' },
    { id: 'e4', type: 'mc', prompt: 'Which works does he NOT revoke?', options: ['the translation of Boethius and the saints’ lives', 'Troilus', 'the Book of the Duchess', 'the Parliament of Fowls'], answer: 0, explain: 'that thanke I oure lord.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">thilke that sounen in-to sinne</span> means:', options: ['those that tend towards sin', 'those that sound like sin', 'the sinful sounds', 'those who swim into sin'], answer: 0, explain: 'sounen in-to “tend towards”.' },
    { id: 'e6', type: 'mc', prompt: 'Which number do Ellesmere and Petworth give for the “Ladies”?', options: ['xxv', 'xix', 'ix', 'xii'], answer: 0, explain: 'Skeat emends to nynetene.' },
    { id: 'e7', type: 'mc', prompt: 'What does Chaucer wish on Adam the scribe if he copies badly?', options: ['a scabby scalp under his locks', 'a fine', 'blindness', 'the loss of his job'], answer: 0, explain: 'Under thy lokkes thou most have the scalle.' },
    { id: 'e8', type: 'mc', prompt: 'How were mistakes corrected on parchment?', options: ['by scraping and rubbing the surface', 'with correction fluid', 'by tearing out the page', 'with a pencil eraser'], answer: 0, explain: 'to rubbe and scrape.' },
    { id: 'e9', type: 'match', prompt: 'Match the manuscripts and books.', pairs: [
      ['Hengwrt', 'plain early copy'], ['Ellesmere', 'luxury copy with pilgrims'], ['Caxton 1483', 'woodcuts'], ['Trinity R.3.20', 'Adam scriveyn'], ['Laud Misc. 581', 'Piers Plowman']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the words to their German relatives.', pairs: [
      ['foryeven', 'vergeben'], ['conninge', 'können'], ['nynetene', 'neunzehn'], ['namely', 'namentlich'], ['biseken', 'besuchen']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Here taketh the ___ of this book his leve.</span>', hint: 'maker', answers: ['makere', 'maker'], full: 'Here taketh the makere of this book his leve.', explain: 'The rubric before I 1081.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">the whiche I ___ in my retracciouns</span>', hint: 'revoke', answers: ['revoke'], full: 'the whiche I revoke in my retracciouns', explain: 'I 1085.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">The book of the ___ Ladies</span>', hint: 'nineteen', answers: ['nynetene', 'nyntene', 'ninetene'], full: 'The book of the nynetene Ladies', explain: 'I 1086, Skeat’s emendation.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Adam ___, if ever it thee bifalle</span>', hint: 'scribe', answers: ['scriveyn', 'scrivein'], full: 'Adam scriveyn, if ever it thee bifalle', explain: 'Chaucers Wordes unto Adam, line 1.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give the Middle English and German numbers.', headers: ['Chaucer', 'German'], rows: [
      { label: 'twelve', answers: ['twelf|twelve', 'zwölf'] },
      { label: 'fifteen', answers: ['fiftene', 'fünfzehn'] },
      { label: 'nineteen', answers: ['nynetene|nyntene', 'neunzehn'] },
      { label: 'seven', answers: ['sevene|seven', 'sieben'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Give the modern English form and the change that produced it.', headers: ['Modern', 'Change'], rows: [
      { label: 'lyf', answers: ['life', 'vowel shift|great vowel shift|gvs'] },
      { label: 'he seith', answers: ['he says|says', '-s|-s for -eth|northern -s|s for eth|s'] },
      { label: 'hem', answers: ['them', 'norse|norse them'] },
      { label: 'grete', answers: ['great', 'final -e lost|loss of final -e|final e lost|-e lost|e lost'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the modern translation in order.', source: 'Now preye I to hem alle that herkne this litel tretis or rede', tokens: ['Now I pray', 'to all of them', 'who hear', 'or read this little treatise'], explain: 'I 1081.' },
    { id: 'e18', type: 'translate', dir: 'me-en', source: 'For oure boke seith, ‘al that is writen is writen for oure doctrine’', model: 'For our book says, ‘all that is written is written for our instruction’', accepted: ['for our book says all that is written is written for our instruction', 'for our book says all that is written is written for our doctrine', 'for our book says all that is written is written for our teaching', 'for the bible says all that is written is written for our instruction', 'for the bible says all that is written is written for our teaching', 'for the bible says all that is written is written for our doctrine', 'because our book says all that is written is written for our instruction', 'for our book says everything that is written is written for our instruction', 'for our book says everything that is written is written for our teaching'] },
    { id: 'e19', type: 'translate', dir: 'me-en', source: 'So ofte a daye I mot thy werk renewe', model: 'So often in a day I must renew your work', accepted: ['so often in a day i must renew your work', 'so often a day i must renew your work', 'so often in a day i have to renew your work', 'so often a day i have to renew your work', 'so often in a day i must redo your work', 'so often in a day i have to redo your work', 'so often each day i must renew your work', 'so often each day i have to redo your work', 'so often a day i must redo your work', 'so often a day i have to redo your work'] },
    { id: 'e20', type: 'translate', dir: 'en-me', source: 'the maker of this book', model: 'the makere of this book', accepted: ['the makere of this book', 'the maker of this book', 'the makere of this boke'] },
    { id: 'e21', type: 'translate', dir: 'en-me', source: 'that Christ have mercy on me (subjunctive)', model: 'that Crist have mercy on me', accepted: ['that crist have mercy on me', 'that crist have mercy of me'] },
    { id: 'e22', type: 'mc', prompt: 'Who first showed that the Hengwrt and Ellesmere manuscripts were written by the same scribe?', options: ['A. I. Doyle and M. B. Parkes (1978)', 'W. W. Skeat (1894)', 'William Caxton', 'Thomas Tyrwhitt'], answer: 0, explain: 'Linne Mooney later proposed his name (2004).' },
    { id: 'e23', type: 'mc', prompt: 'In Caxton’s story, which word for “eggs” did the woman in Kent understand?', options: ['eyren', 'egges', 'oeufs', 'ova'], answer: 0, explain: 'German Eier; egg is the Norse-influenced form.' }
  ],

  reading: {
    title: 'The Retraction, I 1081–1092',
    note: 'Authentic text: Chaucer’s Retraction, at the end of the Parson’s Tale, Group I 1081–1092, with the rubric before it and the colophon after it, in Skeat’s edition (The Complete Works of Geoffrey Chaucer, vol. 4, Oxford 1894), from the Project Gutenberg transcription. Skeat’s text follows the Ellesmere manuscript; in 1086 Ellesmere and Petworth read xxv, Lansdowne xv, Harley 7334 29, and Skeat prints nynetene. The rubric and colophon are the scribes’, and their wording varies between manuscripts. Skeat’s slashes between the numbered units are replaced by line breaks. Tap any word.',
    text: 'Here taketh the makere of this book his leve.\nNow preye I to hem alle that herkne this litel tretis or rede, that if ther be any thing in it that lyketh hem, that ther‑of they thanken oure lord Iesu Crist, of whom procedeth al wit and al goodnesse.\nAnd if ther be any thing that displese hem, I preye hem also that they arrette it to the defaute of myn unconninge, and nat to my wil, that wolde ful fayn have seyd bettre if I hadde had conninge.\nFor oure boke seith, ‘al that is writen is writen for oure doctrine’; and that is myn entente.\nWherfore I biseke yow mekely for the mercy of god, that ye preye for me, that Crist have mercy on me and foryeve me my giltes:\n—and namely, of my translacions and endytinges of worldly vanitees, the whiche I revoke in my retracciouns:\nas is the book of Troilus; The book also of Fame; The book of the nynetene Ladies; The book of the Duchesse; The book of seint Valentynes day of the Parlement of Briddes; The tales of Caunterbury, thilke that sounen in‑to sinne;\nThe book of the Leoun; and many another book, if they were in my remembrance; and many a song and many a lecherous lay; that Crist for his grete mercy foryeve me the sinne.\nBut of the translacion of Boece de Consolacione, and othere bokes of Legendes of seintes, and omelies, and moralitee, and devocioun,\nthat thanke I oure lord Iesu Crist and his blisful moder, and alle the seintes of hevene;\nbisekinge hem that they from hennes‑forth, un‑to my lyves ende, sende me grace to biwayle my giltes, and to studie to the salvacioun of my soule:—and graunte me grace of verray penitence, confessioun and satisfaccioun to doon in this present lyf;\nthurgh the benigne grace of him that is king of kinges and preest over alle preestes, that boghte us with the precious blood of his herte;\nso that I may been oon of hem at the day of dome that shulle be saved: Qui cum patre, &c.\nHere is ended the book of the Tales of Caunterbury, compiled by Geffrey Chaucer, of whos soule Iesu Crist have mercy. Amen.',
    translations: [
      { label: 'Modern English', text: 'Here the maker of this book takes his leave. Now I pray all those who hear or read this little treatise that, if there is anything in it that pleases them, they thank our Lord Jesus Christ for it, from whom all wisdom and all goodness come. And if there is anything that displeases them, I also pray them to put it down to my lack of skill and not to my will, which would very gladly have said better if I had had the skill. For our book says, “all that is written is written for our instruction”, and that is my intention. Therefore I humbly beseech you, for the mercy of God, to pray for me, that Christ have mercy on me and forgive me my sins, and especially my translations and compositions of worldly vanities, which I revoke in my retractions: such as the book of Troilus; also the book of Fame; the book of the nineteen Ladies; the book of the Duchess; the book of St Valentine’s Day, of the Parliament of Birds; those of the Tales of Canterbury that tend towards sin; the book of the Lion; and many other books, if they were in my memory, and many a song and many a lecherous lay: may Christ in his great mercy forgive me the sin. But for the translation of Boethius’s Consolation, and other books of saints’ legends, and homilies, and morality, and devotion, for those I thank our Lord Jesus Christ and his blessed mother and all the saints of heaven, beseeching them that from now on, to the end of my life, they send me grace to bewail my sins and to strive for the salvation of my soul, and grant me grace of true penitence, confession and satisfaction to perform in this present life, through the kind grace of him who is king of kings and priest over all priests, who redeemed us with the precious blood of his heart, so that I may be one of those at the Day of Judgement who shall be saved. Who with the Father, etc. Here ends the book of the Tales of Canterbury, compiled by Geoffrey Chaucer, on whose soul may Jesus Christ have mercy. Amen.' },
      { label: 'German translation', text: 'Hier nimmt der Verfasser dieses Buches seinen Abschied. Nun bitte ich alle, die diese kleine Abhandlung hören oder lesen: Wenn etwas darin ist, das ihnen gefällt, so mögen sie dafür unserem Herrn Jesus Christus danken, von dem alle Weisheit und alle Güte ausgeht. Und wenn etwas darin ist, das ihnen missfällt, so bitte ich sie auch, es dem Mangel meines Unvermögens zuzuschreiben und nicht meinem Willen, der sehr gern Besseres gesagt hätte, wenn ich das Können gehabt hätte. Denn unser Buch sagt: „Alles, was geschrieben ist, ist zu unserer Belehrung geschrieben“, und das ist meine Absicht. Darum bitte ich euch demütig um der Barmherzigkeit Gottes willen, dass ihr für mich betet, dass Christus sich meiner erbarme und mir meine Sünden vergebe, und namentlich meine Übersetzungen und Dichtungen weltlicher Eitelkeiten, die ich in meinen Widerrufen widerrufe: so das Buch von Troilus; ebenso das Buch der Fama; das Buch der neunzehn Frauen; das Buch der Herzogin; das Buch vom Valentinstag, vom Parlament der Vögel; diejenigen der Erzählungen von Canterbury, die zur Sünde neigen; das Buch vom Löwen; und viele andere Bücher, wenn sie mir in Erinnerung wären; und manches Lied und manches lüsterne Lai: Christus vergebe mir in seiner großen Barmherzigkeit die Sünde. Aber für die Übersetzung des Boethius „Vom Trost der Philosophie“ und andere Bücher von Heiligenlegenden, Predigten, Sittenlehre und Andacht danke ich unserem Herrn Jesus Christus und seiner gesegneten Mutter und allen Heiligen des Himmels und bitte sie, dass sie mir von nun an bis an mein Lebensende die Gnade senden, meine Sünden zu beweinen und mich um das Heil meiner Seele zu bemühen, und mir die Gnade wahrer Reue, Beichte und Genugtuung gewähren, sie in diesem gegenwärtigen Leben zu leisten, durch die gütige Gnade dessen, der König der Könige und Priester über alle Priester ist, der uns mit dem kostbaren Blut seines Herzens erkauft hat, sodass ich am Tag des Gerichts einer von denen sein möge, die gerettet werden. Der mit dem Vater usw. Hier endet das Buch der Erzählungen von Canterbury, verfasst von Geoffrey Chaucer, dessen Seele Jesus Christus gnädig sei. Amen.' }
    ],
    notes: [
      { ref: 'Here taketh the makere of this book his leve.', html: 'A rubric, written in red in the manuscripts. <span class="la">makere</span> is the English word for a poet, as Scots <em>makar</em>. Whether the leave-taking is Chaucer’s own or a scribe’s heading is unknown; the wording varies.' },
      { ref: 'Now preye I to hem alle that herkne this litel tretis or rede', html: 'Verb second after <span class="la">Now</span>. <span class="la">herkne … or rede</span>: listening and reading side by side, as in Chaucer’s time books were read aloud as often as silently. <span class="la">this litel tretis</span> probably means the Parson’s Tale, which it follows; some take it as the whole book.' },
      { ref: 'that if ther be any thing in it that lyketh hem, that ther‑of they thanken oure lord Iesu Crist', html: 'Subjunctives: <span class="la">be</span>, <span class="la">thanken</span>. <span class="la">that lyketh hem</span> “that pleases them”, impersonal (Lecture VI). The second <span class="la">that</span> repeats the first after the <span class="la">if</span>-clause, a common way of keeping a long sentence on track.' },
      { ref: 'I preye hem also that they arrette it to the defaute of myn unconninge, and nat to my wil', html: '<span class="la">arrette</span> “impute”. The modesty formula is old and conventional: ancient and medieval authors routinely blamed their faults on lack of skill.' },
      { ref: 'For oure boke seith, ‘al that is writen is writen for oure doctrine’; and that is myn entente.', html: 'Romans 15:4 again, the same text the Nun’s Priest quotes (Lecture IX). <span class="la">oure boke</span> “our book”, the Bible.' },
      { ref: '—and namely, of my translacions and endytinges of worldly vanitees, the whiche I revoke in my retracciouns', html: 'The word <span class="la">retracciouns</span> recalls St Augustine’s <em>Retractationes</em>, in which he reviewed and corrected his own writings. <span class="la">namely</span> “especially”.' },
      { ref: 'The book of the nynetene Ladies', html: 'The <em>Legend of Good Women</em>. The manuscripts disagree on the number (xxv, xv, 29); Skeat’s <span class="la">nynetene</span> is an emendation (grammar section 1).' },
      { ref: 'The tales of Caunterbury, thilke that sounen in‑to sinne', html: 'Only the tales that “tend towards sin” are withdrawn, which leaves the reader to decide which ones those are.' },
      { ref: 'The book of the Leoun', html: 'Lost. No copy of Chaucer’s <em>Book of the Lion</em> survives; it may have been an adaptation of Machaut’s <em>Dit dou Lyon</em>.' },
      { ref: 'But of the translacion of Boece de Consolacione, and othere bokes of Legendes of seintes, and omelies, and moralitee, and devocioun,', html: 'The works he does not regret: the <em>Boece</em> (Lecture X), saints’ lives (such as the Second Nun’s Tale), and moral works.' },
      { ref: 'that thanke I oure lord Iesu Crist and his blisful moder', html: 'Object fronted, verb second: “for that I thank our Lord”.' },
      { ref: 'graunte me grace of verray penitence, confessioun and satisfaccioun to doon in this present lyf', html: 'The three parts of penance as the Parson has just taught them: contrition, confession, and satisfaction (making amends). The Retraction applies the Parson’s sermon to its author.' },
      { ref: 'so that I may been oon of hem at the day of dome that shulle be saved: Qui cum patre, &c.', html: 'The Latin closing formula, “who with the Father [and the Holy Spirit lives and reigns]”, is cut short with <span class="la">&amp;c.</span> as the scribes often did with familiar prayers.' },
      { ref: 'Here is ended the book of the Tales of Caunterbury, compiled by Geffrey Chaucer, of whos soule Iesu Crist have mercy. Amen.', html: 'A scribal colophon. <span class="la">compiled</span> was the normal word for putting together a book from sources, which is how medieval writers often described their own work.' }
    ],
    glosses: {
      'a': 'a; many a: many a', 'al': 'all', 'alle': 'all', 'also': 'also; likewise', 'amen': 'amen', 'and': 'and',
      'another': 'another; many another book', 'any': 'any', 'arrette': 'impute, put down to (French arêter)', 'as': 'as; as is: such as', 'at': 'at', 'be': 'be (subjunctive: if ther be: if there is)',
      'been': 'be', 'benigne': 'kind, gracious', 'bettre': 'better', 'biseke': 'beseech, beg (German besuchen is related)', 'bisekinge': 'beseeching, begging', 'biwayle': 'bewail, lament',
      'blisful': 'blessed', 'blood': 'blood', 'boece': 'Boethius (Boece de Consolacione: his Consolation of Philosophy)', 'boghte': 'redeemed, bought (past of byen)', 'boke': 'book (oure boke: the Bible)', 'bokes': 'books',
      'book': 'book', 'briddes': 'birds', 'but': 'but', 'by': 'by', 'c': '&c.: et cetera (the rest of the Latin prayer)', 'caunterbury': 'Canterbury',
      'chaucer': 'Chaucer', 'compiled': 'compiled, put together', 'confessioun': 'confession', 'conninge': 'skill, knowledge (German können)', 'consolacione': 'Consolation (Latin title)', 'crist': 'Christ',
      'cum': 'with (Latin: Qui cum patre: who with the Father …)', 'day': 'day; day of dome: Day of Judgement', 'de': 'of (Latin)', 'defaute': 'fault, lack', 'devocioun': 'devotion', 'displese': 'displease (subjunctive)',
      'doctrine': 'instruction, teaching', 'dome': 'judgement; day of dome: Doomsday', 'doon': 'do; perform', 'duchesse': 'Duchess (the Book of the Duchess)', 'ende': 'end', 'ended': 'ended',
      'endytinges': 'compositions, writings (from enditen)', 'entente': 'intention, purpose', 'fame': 'Fame (the House of Fame)', 'fayn': 'gladly; ful fayn: very gladly', 'for': 'for; because', 'forth': 'hennes-forth: from now on',
      'foryeve': 'forgive (subjunctive: may … forgive; German vergeben)', 'from': 'from', 'ful': 'very', 'geffrey': 'Geoffrey', 'giltes': 'sins, faults', 'god': 'God',
      'goodnesse': 'goodness', 'grace': 'grace', 'graunte': 'grant (subjunctive)', 'grete': 'great', 'had': 'had', 'hadde': 'had (if I hadde had: if I had had)',
      'have': 'have (subjunctive: Crist have mercy: may Christ have mercy)', 'hem': 'them', 'hennes': 'hence; hennes-forth: from now on', 'here': 'here', 'herkne': 'listen to, hear (subjunctive plural)', 'herte': 'heart',
      'hevene': 'heaven', 'him': 'him', 'his': 'his; its', 'i': 'I', 'iesu': 'Jesus (I = J; Latin dative Iesu)', 'if': 'if',
      'in': 'in; in-to: towards', 'is': 'is', 'it': 'it', 'king': 'king', 'kinges': 'kings', 'ladies': 'ladies; the nynetene Ladies: the Legend of Good Women',
      'lay': 'lay, song, short poem', 'lecherous': 'lecherous, lewd', 'legendes': 'legends, saints’ lives', 'leoun': 'Lion (the Book of the Lion, now lost)', 'leve': 'leave; taketh his leve: takes his leave', 'litel': 'little',
      'lord': 'lord', 'lyf': 'life', 'lyketh': 'pleases (impersonal: that lyketh hem: that they like)', 'lyves': 'life’s; my lyves ende: the end of my life', 'makere': 'maker, author, poet', 'many': 'many',
      'may': 'may', 'me': 'me', 'mekely': 'meekly, humbly', 'mercy': 'mercy', 'moder': 'mother', 'moralitee': 'moral teaching',
      'my': 'my', 'myn': 'my (before a vowel)', 'namely': 'especially (German namentlich)', 'nat': 'not', 'now': 'now', 'nynetene': 'nineteen (Skeat’s emendation; Ellesmere has xxv)',
      'of': 'of; for; about', 'omelies': 'homilies, sermons', 'on': 'on', 'oon': 'one', 'or': 'or', 'othere': 'other',
      'oure': 'our', 'over': 'over, above', 'parlement': 'parliament, assembly', 'patre': 'Father (Latin: cum patre: with the Father)', 'penitence': 'penitence, repentance', 'precious': 'precious',
      'preest': 'priest', 'preestes': 'priests', 'present': 'present', 'preye': 'pray, ask', 'procedeth': 'proceeds, comes', 'qui': 'who (Latin)',
      'rede': 'read (subjunctive plural)', 'remembrance': 'memory, remembrance', 'retracciouns': 'retractions, withdrawals', 'revoke': 'revoke, withdraw', 'salvacioun': 'salvation', 'satisfaccioun': 'satisfaction, making amends (the third part of penance)',
      'saved': 'saved', 'seint': 'saint; seint Valentynes day: St Valentine’s Day', 'seintes': 'saints', 'seith': 'says', 'sende': 'send (subjunctive)', 'seyd': 'said',
      'shulle': 'shall (plural)', 'sinne': 'sin', 'so': 'so; so that: so that', 'song': 'song', 'soule': 'soul', 'sounen': 'tend, lead (sounen in-to sinne: tend towards sin)',
      'studie': 'strive, apply myself', 'taketh': 'takes', 'tales': 'tales', 'thanke': 'thank', 'thanken': 'thank (subjunctive plural)', 'that': 'that; who, which; that thanke I: for that I thank',
      'the': 'the', 'ther': 'there; ther-of: for it', 'they': 'they', 'thilke': 'those (same); thilke that: those that', 'thing': 'thing', 'this': 'this',
      'thurgh': 'through', 'to': 'to', 'translacion': 'translation', 'translacions': 'translations', 'tretis': 'treatise, little work', 'troilus': 'Troilus (Troilus and Criseyde)',
      'un': 'un-to: until', 'unconninge': 'lack of skill, ignorance', 'us': 'us', 'valentynes': 'Valentine’s', 'vanitees': 'vanities, trivial things', 'verray': 'true, real',
      'were': 'were (subjunctive: if they were: if they were)', 'wherfore': 'therefore, for which reason', 'whiche': 'which; the whiche: which', 'whom': 'whom', 'whos': 'whose', 'wil': 'will, intention',
      'wit': 'wisdom, understanding', 'with': 'with', 'wolde': 'would; wolde ful fayn: would very gladly', 'worldly': 'worldly', 'writen': 'written; write', 'ye': 'you (subject, plural)',
      'yow': 'you (object, plural)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Which of these works does Chaucer list among those he revokes?', options: ['Troilus and the Book of the Duchess', 'the Boece', 'the saints’ legends', 'the homilies'], answer: 0, explain: 'The works of “worldly vanities”.' },
      { id: 'r2', type: 'mc', prompt: 'Which Canterbury tales does he revoke?', options: ['only those that tend towards sin', 'all of them', 'none of them', 'only the Parson’s'], answer: 0, explain: 'thilke that sounen in-to sinne.' },
      { id: 'r3', type: 'mc', prompt: 'What does he say about other books he cannot remember?', options: ['he revokes them too, if they were in his memory', 'they are lost', 'they are his best work', 'they were translations'], answer: 0, explain: 'and many another book, if they were in my remembrance.' },
      { id: 'r4', type: 'mc', prompt: 'What are the three things he asks grace to perform?', options: ['penitence, confession and satisfaction', 'reading, writing and translating', 'pilgrimage, prayer and fasting', 'faith, hope and charity'], answer: 0, explain: 'The parts of penance.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'The <em>ye</em> of “Ye Olde Shoppe” is:', options: ['þe, the, with y written for thorn', 'the old pronoun ye “you”', 'a Latin abbreviation', 'a printer’s error for yea'], answer: 0, explain: 'Always pronounced the.' },
      { id: 't2', type: 'mc', prompt: 'A stroke over a vowel in a manuscript usually stands for:', options: ['a following m or n', 'a long vowel', 'a stressed syllable', 'a deleted letter'], answer: 0, explain: 'contenaūce = contenaunce.' },
      { id: 't3', type: 'mc', prompt: 'Which library holds the Ellesmere manuscript?', options: ['the Huntington Library, California', 'the British Library', 'the Bodleian Library', 'the National Library of Wales'], answer: 0, explain: 'Hengwrt is in the National Library of Wales.' },
      { id: 't4', type: 'mc', prompt: 'The modern third-person ending <em>-s</em> (<em>he says</em>) came from:', options: ['northern English', 'French', 'Latin', 'Chaucer’s London'], answer: 0, explain: 'Chaucer: he seith.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Hit to correcte and eek to rubbe and ___</span>', hint: 'scrape', answers: ['scrape'], full: 'Hit to correcte and eek to rubbe and scrape', explain: 'Adam scriveyn, line 6.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">And al is through thy negligence and ___</span>', hint: 'haste', answers: ['rape'], full: 'And al is through thy negligence and rape', explain: 'Adam scriveyn, line 7.' },
      { id: 't7', type: 'translate', dir: 'me-en', source: 'the book of seint Valentynes day of the Parlement of Briddes', model: 'the book of St Valentine’s Day, of the Parliament of Birds', accepted: ['the book of st valentines day of the parliament of birds', 'the book of saint valentines day of the parliament of birds', 'the book of st valentine’s day of the parliament of birds', 'the book of saint valentine’s day of the parliament of birds', 'the book of st valentines day of the parliament of fowls', 'the book of saint valentines day of the parliament of fowls', 'the book of st valentine’s day the parliament of birds', 'the book of saint valentine’s day the parliament of birds'] },
      { id: 't8', type: 'translate', dir: 'en-me', source: 'nineteen (Chaucer’s word)', model: 'nynetene', accepted: ['nynetene', 'nyntene', 'ninetene'] },
      { id: 't9', type: 'mc', prompt: 'Where did Caxton set up his press in 1476?', options: ['Westminster', 'Bruges', 'Cologne', 'Canterbury'], answer: 0, explain: 'He had learned printing in Cologne and printed his first English book in Bruges.' },
      { id: 't10', type: 'mc', prompt: 'Which editor showed that Chaucer’s lines scan with final <span class="la">-e</span> sounded?', options: ['Thomas Tyrwhitt (1775–78)', 'John Dryden', 'William Caxton', 'John Shirley'], answer: 0, explain: 'Dryden heard only “the rude sweetness of a Scotch tune”.' },
      { id: 't11', type: 'mc', prompt: 'The Retraction’s word <span class="la">retracciouns</span> recalls a work by:', options: ['St Augustine', 'Boethius', 'Petrarch', 'St Jerome'], answer: 0, explain: 'Retractationes.' }
    ]
  },

  reference: [
    { title: 'From manuscript to modern edition', headers: ['Witness', 'Date', 'Note'], rows: [['Hengwrt MS', 'c. 1400–1410', 'plain; same scribe as Ellesmere'], ['Ellesmere MS', 'c. 1400–1410', 'luxury; pilgrim portraits; Skeat’s base'], ['Caxton, 1st edition', 'c. 1476–77', 'from a faulty manuscript, he says'], ['Caxton, 2nd edition', 'c. 1483', 'corrected; woodcuts'], ['Thynne, Workes', '1532', 'first collected works'], ['Tyrwhitt', '1775–78', 'final -e and the metre'], ['Skeat', '1894', 'the text used in this course'], ['Riverside Chaucer', '1987', 'the standard modern edition']] },
    { title: 'Common abbreviations', headers: ['Sign', 'Expansion'], rows: [['stroke over a vowel', 'm or n'], ['&, ⁊', 'and'], ['þ with small e or t above', 'þe, þat'], ['p with crossed stem', 'per, par'], ['&c.', 'et cetera']] }
  ]
});
