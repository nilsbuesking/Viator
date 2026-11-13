/*
 * Old English — Lecture XII: manuscripts and editions. Insular script and abbreviations; spelling variation and
 * dictionaries; editorial practice and the apparatus; dating and dialect.
 * Reading: Beowulf 3137–3155 (the pyre and the woman’s lament), transcribed from the page image of Klaeber’s
 * first edition (1922), p. 118 (sources/klaeber-beowulf-pages/p118.png). Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-12',
  number: 12,
  title: 'From the Nowell Codex to Klaeber',
  subtitle: 'Manuscripts and editions; reading a damaged text; Beowulf 3137–3155',
  minutes: 60,

  intro: `
    <p>Everything we have read of Beowulf comes from one copy, written by two scribes around the year 1000, damaged by fire in 1731, and edited many times since. Every edition, including Klaeber’s, is a series of decisions about that copy: how to divide the words, where to punctuate, which letters to restore, when the scribe has made a mistake, and how to spell.</p>
    <p>This last lecture of the course looks behind the printed page. The reading is the poem’s most damaged passage: the burning of Beowulf’s body and a Geatish woman’s lament, in which almost every second word has been restored. With Klaeber’s brackets you can see exactly how much of the text is the manuscript and how much is the editor.</p>
    <p>The grammar sections are practical: how to read the script and its abbreviations, how to find a word in a dictionary when the spelling varies, and how to read an edition’s apparatus.</p>
  `,

  background: [
    {
      title: 'The Nowell Codex',
      html: `
        <p>British Library, Cotton Vitellius A.xv is two books bound together in the 17th century. The second, the <strong>Nowell Codex</strong>, is named after Laurence Nowell, a 16th-century antiquary who wrote his name and the year 1563 on its first page. It contains five texts in Old English: a fragment of the Passion of St Christopher, the <em>Wonders of the East</em>, the <em>Letter of Alexander to Aristotle</em>, <em>Beowulf</em> and <em>Judith</em>. Kenneth Sisam (1953) suggested that monsters are what unites them; that is a reasonable guess about the compiler, not a fact.</p>
        <p>Two scribes copied Beowulf. Scribe A wrote to line 1939 and Scribe B took over in the middle of that line: A’s last word is <span class="la">scyran</span>, B’s first <span class="la">mōste</span>; B also corrected parts of A’s work. Their hands are dated on palaeographical grounds to around 1000, give or take a quarter-century.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Beowulf_Cotton_MS_Vitellius_A_XV_f._137r_(fyrst_forth_gewat_detail).png/960px-Beowulf_Cotton_MS_Vitellius_A_XV_f._137r_(fyrst_forth_gewat_detail).png" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Beowulf_Cotton_MS_Vitellius_A_XV_f._137r_(fyrst_forth_gewat_detail).png/500px-Beowulf_Cotton_MS_Vitellius_A_XV_f._137r_(fyrst_forth_gewat_detail).png|https://upload.wikimedia.org/wikipedia/commons/3/33/Beowulf_Cotton_MS_Vitellius_A_XV_f._137r_(fyrst_forth_gewat_detail).png" alt="Detail of a manuscript page in Insular script, written continuously like prose"><figcaption>Beowulf in the Nowell Codex, British Library, Cotton Vitellius A.xv, f. 137r (detail): the lines beginning <span class="la">fyrst forð gewat</span> (Beowulf 210, Lecture VIII). The verse is written out as prose; note the scorched edge. <span class="credit">Manuscript image; licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Beowulf_Cotton_MS_Vitellius_A_XV_f._137r_(fyrst_forth_gewat_detail).png" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Fire, Thorkelin and the bombardment of Copenhagen',
      html: `
        <p>On 23 October 1731 fire broke out at Ashburnham House in Westminster, where the Cotton library was kept. The manuscript survived, scorched at the edges, and the brittle margins went on crumbling until the leaves were mounted in paper frames in 1845. Letters at the edges that are now lost are known only from earlier copies.</p>
        <p>Those copies are the two <strong>Thorkelin transcripts</strong>. Grímur Jónsson Thorkelin, an Icelandic scholar working for the Danish crown, had one copy made by a professional copyist in 1787 (Thorkelin A) and made the second himself (Thorkelin B). His edition with a Latin translation was nearly ready when the British bombarded Copenhagen in 1807 and his house burned with his work; the transcripts survived, and the edition finally appeared in 1815. It was the first edition of the poem. Klaeber’s round brackets often mean “read by Thorkelin, lost since”.</p>
      `
    },
    {
      title: 'Editions, and Klaeber',
      html: `
        <p>John Mitchell Kemble’s edition (1833) was the first by a scholar who understood the grammar; N. F. S. Grundtvig in Denmark and a series of German scholars (Grein, Heyne, Bugge in Norway, Holthausen, Sievers) then established the text over the 19th century. Julius Zupitza’s photographic facsimile (1882) let everyone see the manuscript.</p>
        <p>Friedrich (Fr.) Klaeber (1863–1954) was born in Beetzendorf in the Altmark, trained in Germany, and taught at the University of Minnesota from 1893 to 1931, when he retired to Germany. His edition (1922; third edition 1936, with supplements to 1950) gathered a century of scholarship into one book and became the standard text. Its fourth edition, revised by R. D. Fulk, Robert E. Bjork and John D. Niles (2008), is still called “Klaeber”.</p>
        <p><strong>When was the poem composed?</strong> The manuscript is from around 1000; the poem is older, but how much older is one of the great disputes. Metrical and linguistic arguments (Fulk 1992; Neidorf and others) point to the eighth century or earlier; Kevin Kiernan (1981) argued for composition close to the manuscript itself, in the eleventh. The majority view now favours an early date, but it is a majority, not a consensus.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">swylce giōmorgyd (s)īo g(eō)mēowle<br>(æfter Bīowulfe b)undenheorde<br>(song) sorgcearig</p>
    <p>“Likewise the old woman with bound hair sang a sad lament for Beowulf, full of sorrow.” <em>Beowulf</em> 3150–3152a, Klaeber (1922), p. 118, as printed. Klaeber’s note quotes Zupitza: “Almost all that is legible in this page freshened up in a late hand”; it also records that a Latin gloss, <em>anus</em> “old woman”, is written above <span class="la">mēowle</span>. His restoration of these lines follows Sophus Bugge.</p>
    <p>Of the nine words here, three are complete in the manuscript as it is now. Who the woman is (Beowulf’s widow? a professional mourner? a figure for the whole people?) cannot be decided from what survives.</p>
  `,

  pronunciation: `
    <p>Pronunciation in this lecture is about spelling, which tells us something about sound but not everything:</p>
    <ul>
      <li><strong>io, īo</strong> in <span class="la">hīofende, giōmorgyd, hīo, Bīowulfe, swioðole</span>: older or non-West-Saxon spellings for eo, ēo. The scribe may have pronounced them as he pronounced eo; the spelling shows the text’s history, not necessarily his speech.</li>
      <li><strong>Bīowulf</strong> beside <strong>Bēowulf</strong>: the hero’s name itself is spelt both ways in the manuscript.</li>
      <li><strong>Accents</strong>: the scribes occasionally put an acute over a vowel (<span class="la">á, ó</span>); this often marks a long vowel, but not consistently. All the macrons in modern editions are editorial.</li>
      <li><strong>hyre</strong> for <span class="la">hire</span>: late Old English often writes y for i; the sounds had merged.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. Reading insular script',
      html: `
        <p>The scribes wrote a late form of Insular minuscule, the script used for English in the tenth and eleventh centuries. The letters that cause trouble:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Manuscript</th><th>Edition</th><th>Note</th></tr></thead>
          <tbody>
            <tr><td class="la">ƿ (wynn)</td><td class="la">w</td><td>A rune, like þ; easily confused with þ and p</td></tr>
            <tr><td class="la">ʒ (insular g)</td><td class="la">g</td><td>Flat top, tail below; source of Middle English ȝ</td></tr>
            <tr><td class="la">ſ (long s)</td><td class="la">s</td><td>Like f without the crossbar</td></tr>
            <tr><td class="la">r, s</td><td class="la">r, s</td><td>Insular forms with descenders; r looks like an n with a tail</td></tr>
            <tr><td class="la">ð, þ</td><td class="la">ð, þ</td><td>Both used for both sounds (Lecture I)</td></tr>
          </tbody>
        </table></div>
        <p>Verse is written out like prose, across the whole width of the page; the lines of the editions are modern. Word division follows the scribe’s sense of units: <span class="la">onbearm</span>, <span class="la">nacanbeorhte</span> (Lecture VIII) are typical. Punctuation is a few points, and capitals are rare.</p>
      `
    },
    {
      title: '2. Abbreviations',
      html: `
        <ul>
          <li><span class="la">⁊</span> (the Tironian note, a shorthand sign from Roman times) = <span class="la">ond</span>, German “und”. Editors expand it as <span class="la">ond</span> or <span class="la">and</span>, which is why some editions spell one and some the other.</li>
          <li><span class="la">þ̄</span> (þ with a stroke through the ascender) = <span class="la">þæt</span>.</li>
          <li>A stroke over a vowel = a following <span class="la">m</span> or <span class="la">n</span>: <span class="la">hī</span> = <span class="la">him</span>, <span class="la">ðon̄</span> = <span class="la">ðonne</span>, <span class="la">gūmū</span> = <span class="la">gumum</span>.</li>
          <li>Numbers are often written with Roman numerals: <span class="la">.xii.</span> = twelve. Fitt numbers (the poem’s sections, I–XLIII) are in Roman numerals in the manuscript; Klaeber prints them in the margin (<em>XLIII</em> at 3137).</li>
        </ul>
        <p>A stroke over a vowel in a manuscript is therefore not a length mark; the editions’ macrons have a quite different origin.</p>
      `
    },
    {
      title: '3. Spelling variation and the dictionaries',
      html: `
        <p>One word can appear in many spellings, because of dialect, date and scribal habit: <span class="la">heora, hiora, hyra, hira</span> “their”; <span class="la">cyning, kyning, cyng</span>; <span class="la">sēcean, sēcan</span>; <span class="la">wudu, widu</span>. To look a word up:</p>
        <ul>
          <li>Try the late West Saxon form: eo for io and ie (<span class="la">hiora → heora</span>), y for ie (<span class="la">ieldran → yldran</span>).</li>
          <li>Ignore the prefix <span class="la">ge-</span>: many dictionaries list <span class="la">gewyrcan</span> under w.</li>
          <li>Alphabetical order: æ is sorted either as a separate letter after a or as if it were ae, so check the dictionary’s own rule; ð and þ come after t and are treated as one letter.</li>
          <li>For poetic words, use the glossary of an edition (Klaeber’s is very full) or the Toronto <em>Dictionary of Old English</em>, which has reached the middle of the alphabet; for the rest, Bosworth–Toller (1898, supplements 1921 and 1972) and Clark Hall’s <em>Concise Anglo-Saxon Dictionary</em>.</li>
        </ul>
      `
    },
    {
      title: '4. Reading the apparatus',
      html: `
        <p>Klaeber’s footnotes record what the manuscript reads and what other editors proposed. They are dense but formulaic:</p>
        <ul>
          <li><span class="la">MS.</span> = the manuscript reading; <span class="la">Thk.</span> = Thorkelin; <span class="la">Tho.</span> = Thorpe (edition 1855); <span class="la">Ke.</span> = Kemble; <span class="la">Gr.</span> = Grein; <span class="la">Bu.</span> = Bugge; <span class="la">Holt.</span> = Holthausen; <span class="la">Z.</span> = Zupitza.</li>
          <li>The line number with <span class="la">a</span> or <span class="la">b</span> refers to the half-line.</li>
          <li><span class="la">om.</span> = omitted; <span class="la">cf.</span> = compare; <span class="la">perh.</span> = perhaps.</li>
        </ul>
        <p>On p. 118, for example, the note to 3139a reads <em>MS. helm</em>: the manuscript has <span class="la">helm</span>, and Klaeber prints <span class="la">helm[um]</span>. The note to 3151–55 says that Bugge’s restoration “has been adopted in this edition”: the lament we read is, in large part, Bugge’s Old English. Learning to read such notes is learning to see which words of a text are secure.</p>
      `
    }
  ],

  vocab: [
    { id: 'helm', head: 'helm', la: 'helm, helmes', g: 'm', pos: 'noun, strong', en: 'helmet; protection, protector', note: 'German Helm. Also of a lord: helm Scyldinga.' },
    { id: 'wigend', head: 'wīgend', la: 'wīgend, wīgendes (pl. wīgend)', g: 'm', pos: 'noun, nd-stem', en: 'warrior', note: 'Present participle of wīgan “fight” made into a noun, like frēond and fēond.' },
    { id: 'leg', head: 'lēg', la: 'lēg, līg, lēges', g: 'm', pos: 'noun, strong', en: 'flame, fire', note: 'German Lohe, lodern. Also spelt līg (Lecture IV).' },
    { id: 'banhus', head: 'bānhūs', la: 'bānhūs, bānhūses', g: 'n', pos: 'noun, strong', en: 'bone-house, body (kenning)', note: 'German Bein “bone” (Gebein) + Haus.' },
    { id: 'hrether', head: 'hreþer', la: 'hreþer, hreþres', g: 'm', pos: 'noun, strong', en: 'breast, heart, mind', note: 'Poetic; on hreþre “in the breast”.' },
    { id: 'cwealm', head: 'cwealm', la: 'cwealm, cwealmes', g: 'm', pos: 'noun, strong', en: 'death, killing, plague', note: 'German Qual is related; English qualm.' },
    { id: 'gyd', head: 'gyd', la: 'gyd, giedd, gyddes', g: 'n', pos: 'noun, strong', en: 'song, poem, lament; saying', note: 'giōmorgyd: sad song. Spellings vary: giedd, gidd, gyd.' },
    { id: 'egesa', head: 'egesa', la: 'egesa, egesan', g: 'm', pos: 'noun, weak', en: 'terror, fear', note: 'Related to ege “fear”; Gothic agis.' },
    { id: 'wop', head: 'wōp', la: 'wōp, wōpes', g: 'm', pos: 'noun, strong', en: 'weeping, lament', note: 'Verb wēpan “weep”, strong VII.' },
    { id: 'weccan', head: 'weccan', la: 'weccan; wehte', pos: 'verb, weak (1)', en: 'wake, rouse; kindle (a fire)', note: 'German wecken.' },
    { id: 'swelgan', head: 'swelgan', la: 'swelgan; swealg, swulgon; swolgen', pos: 'verb, strong (III)', en: 'swallow', note: 'German schwelgen (originally “swallow, guzzle”).' },
    { id: 'alecgan', head: 'ālecgan', la: 'ālecgan; ālegde', pos: 'verb, weak (1)', en: 'lay down, place', note: 'Causative of licgan “lie”: German legen beside liegen.' },
    { id: 'ondraedan', head: 'ondrǣdan', la: 'ondrǣdan; ondrēd, ondrēdon; ondrǣden', pos: 'verb, strong (VII)', en: 'dread, fear', note: 'English dread (the prefix lost).' },
    { id: 'singan', head: 'singan', la: 'singan; sang (song), sungon; sungen', pos: 'verb, strong (III)', en: 'sing', note: 'German singen. song: the past sg. with o before a nasal.' },
    { id: 'sweart', head: 'sweart', la: 'sweart', pos: 'adjective', en: 'black, dark', note: 'German schwarz; English swart(hy).' },
    { id: 'hat', head: 'hāt', la: 'hāt', pos: 'adjective', en: 'hot', note: 'German heiß (High German consonant shift t → ß).' }
  ],

  grammarCards: [
    { id: 'oe12-ms', front: 'Beowulf manuscript', back: 'British Library, Cotton Vitellius A.xv (the Nowell Codex), c. 1000' },
    { id: 'oe12-scribes', front: 'The two scribes of Beowulf', back: 'A to line 1939 (last word scyran), B from mōste in the same line; B also corrected A' },
    { id: 'oe12-fire', front: 'The Cotton fire', back: '23 October 1731, Ashburnham House; leaves framed in 1845' },
    { id: 'oe12-thorkelin', front: 'Thorkelin A and B', back: 'Transcripts of 1787 (A by a copyist, B by Thorkelin); first edition 1815' },
    { id: 'oe12-klaeber', front: 'Fr. Klaeber', back: '1863–1954, born in the Altmark, professor in Minnesota; edition 1922, 4th ed. 2008' },
    { id: 'oe12-wynn', front: 'ƿ', back: 'wynn = w (a rune)' },
    { id: 'oe12-tironian', front: '⁊', back: 'ond / and (Tironian note)' },
    { id: 'oe12-thaet', front: 'þ̄ (þ with a stroke)', back: 'þæt' },
    { id: 'oe12-stroke', front: 'A stroke over a vowel in a manuscript', back: 'a following m or n (hī = him), not a length mark' },
    { id: 'oe12-verse', front: 'How is verse laid out in the manuscript?', back: 'As prose, across the page; the lines are editorial' },
    { id: 'oe12-lookup', front: 'Looking up hiora, ieldran', back: 'Try the late West Saxon spelling: heora, yldran' },
    { id: 'oe12-alpha', front: 'ð/þ in dictionary order', back: 'After t, treated as one letter' },
    { id: 'oe12-ms-abbr', front: 'MS., Thk., Tho., Ke., Bu., Z. in an apparatus', back: 'manuscript, Thorkelin, Thorpe, Kemble, Bugge, Zupitza' },
    { id: 'oe12-date', front: 'Date of composition of Beowulf', back: 'Disputed: 8th century or earlier (majority) to 11th century (Kiernan 1981)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'How many manuscripts of Beowulf survive?', options: ['One', 'Two', 'Five', 'About twenty'], answer: 0, explain: 'Cotton Vitellius A.xv.' },
    { id: 'e2', type: 'mc', prompt: 'Where does Scribe B take over?', options: ['In line 1939', 'At line 1', 'At the dragon episode (2200)', 'At the last page'], answer: 0, explain: 'After the word scyran: B begins with mōste.' },
    { id: 'e3', type: 'mc', prompt: 'What happened to Thorkelin’s work in 1807?', options: ['It burned in the bombardment of Copenhagen', 'It was stolen', 'It was published', 'It was taken to London'], answer: 0, explain: 'The transcripts survived; the edition appeared in 1815.' },
    { id: 'e4', type: 'mc', prompt: 'In a manuscript, <span class="la">⁊</span> stands for:', options: ['ond', 'þæt', 'ac', 'oððe'], answer: 0, explain: 'The Tironian note.' },
    { id: 'e5', type: 'mc', prompt: 'In a manuscript, <span class="la">hī</span> with a stroke is usually:', options: ['him', 'hīe with a long vowel', 'hit', 'his'], answer: 0, explain: 'The stroke stands for m or n.' },
    { id: 'e6', type: 'mc', prompt: 'Where was Fr. Klaeber born?', options: ['In the Altmark, Germany', 'In Minnesota', 'In London', 'In Copenhagen'], answer: 0, explain: 'Beetzendorf, 1863.' },
    { id: 'e7', type: 'mc', prompt: 'Whose restoration of the lament (3151–3155) does Klaeber adopt?', options: ['Sophus Bugge’s', 'Thorkelin’s', 'Kemble’s', 'His own'], answer: 0, explain: 'Bugge, as the apparatus says.' },
    { id: 'e8', type: 'mc', prompt: 'How is verse laid out in the manuscript?', options: ['Continuously, like prose', 'One half-line per line', 'In stanzas', 'In two columns'], answer: 0, explain: 'The lineation is editorial.' },
    { id: 'e9', type: 'match', prompt: 'Match the manuscript signs.', pairs: [
      ['ƿ', 'w'], ['ʒ', 'g'], ['ſ', 's'], ['⁊', 'ond'], ['þ̄', 'þæt']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the apparatus abbreviations.', pairs: [
      ['MS.', 'the manuscript'], ['Thk.', 'Thorkelin'], ['Ke.', 'Kemble'], ['Bu.', 'Bugge'], ['om.', 'omitted']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">helm[___] behongen, hildebordum</span>', hint: 'Klaeber’s added ending (dat. pl.)', answers: ['um'], full: 'helm[um] behongen, hildebordum', explain: 'MS. helm.' },
    { id: 'e12', type: 'gap', prompt: 'Expand: <span class="la">ðon̄</span> = ___', hint: 'the stroke stands for n + e', answers: ['ðonne', 'þonne', 'donne'], full: 'ðonne', explain: 'Abbreviation by suspension.' },
    { id: 'e13', type: 'gap', prompt: 'Late West Saxon spelling of <span class="la">hiora</span>: ___', hint: 'for the dictionary', answers: ['heora'], full: 'heora', explain: 'io → eo.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Heofon rēce swe(a)lg</span>: “Heaven swallowed the ___”', hint: 'rēc', answers: ['smoke'], full: 'Heaven swallowed the smoke', explain: 'rēce: dative of rēc.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give the normal edited form and the meaning.', headers: ['Edited form', 'Meaning'], rows: [
      { label: '⁊', answers: ['ond|and', 'and'] },
      { label: 'þ̄', answers: ['þæt|ðæt', 'that'] },
      { label: 'ƿer', answers: ['wer', 'man'] },
      { label: 'ʒod', answers: ['gōd|god', 'good'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Give the late West Saxon dictionary spelling.', headers: ['Dictionary form', 'Meaning'], rows: [
      { label: 'hiora', answers: ['heora', 'their|of them'] },
      { label: 'ieldran', answers: ['yldran|eldran', 'elders|ancestors|parents'] },
      { label: 'giond', answers: ['geond', 'throughout|through'] },
      { label: 'hīo', answers: ['hēo|heo', 'she'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the English translation in order.', source: 'Heofon rēce swealg.', tokens: ['Heaven', 'swallowed', 'the', 'smoke'], explain: 'Beowulf 3155b.' },
    { id: 'e18', type: 'translate', dir: 'oe-en', source: 'Hīe ālegdon þone cyning tōmiddes.', model: 'They laid the king in the middle.', accepted: ['they laid king in middle', 'they laid the king in the middle', 'they laid king in the midst', 'they laid the king in the midst', 'they placed the king in the middle', 'they placed king in middle', 'they laid down king in middle'] },
    { id: 'e19', type: 'translate', dir: 'oe-en', source: 'Se lēg wæs hāt.', model: 'The flame was hot.', accepted: ['flame was hot', 'fire was hot', 'the flame was hot', 'the fire was hot'] },
    { id: 'e20', type: 'translate', dir: 'en-oe', source: 'black smoke (nom.; sweart, rēc)', model: 'sweart rēc', accepted: ['sweart rēc'], explain: 'A strong adjective without an article has no ending in the masculine nominative. Sweart is German schwarz; rēc is German Rauch.' },
    { id: 'e21', type: 'translate', dir: 'en-oe', source: 'the warriors (nom.; wīgend)', model: 'þā wīgend', accepted: ['þā wīgend', 'ðā wīgend'], explain: 'Wīgend is a noun made from a present participle, “one who fights”, like German Feind and Freund; its nominative plural is the same as the singular.' },
    { id: 'e22', type: 'mc', prompt: 'Which view of the date of composition is held by the majority today?', options: ['Early (8th century or before), but disputed', 'Exactly 1000', 'After the Norman Conquest', 'Settled by the manuscript'], answer: 0, explain: 'Kiernan argued for the 11th century.' },
    { id: 'e23', type: 'mc', prompt: 'Why do some editions print <span class="la">and</span> and others <span class="la">ond</span>?', options: ['Both expand the same abbreviation ⁊', 'Dialects differ', 'One is a mistake', 'and is Middle English'], answer: 0, explain: 'The scribe usually wrote ⁊.' }
  ],

  reading: {
    title: 'Beowulf 3137–3155',
    note: 'Authentic text: Klaeber’s edition (1922), lines 3137–3155, transcribed from the page image of p. 118. Klaeber prints the length marks himself. “Klaeber, as printed” keeps his round brackets (letters lost or illegible in the manuscript and supplied) and square brackets (editorial additions); the normalised view drops the brackets. Tap any word.',
    diplomaticLabel: 'Klaeber, as printed',
    diplomaticNote: 'Klaeber (1922), p. 118, with his brackets: ( ) letters lost or illegible in the manuscript, [ ] editorial additions. Where a round bracket spans several words (3151) we close it at each word boundary. Klaeber also prints in italics letters he changed from the manuscript (lēg in 3145, where the manuscript has let); the app cannot show italics.',
    text: 'Him ðā gegiredan Gēata lēode\nād on eorðan unwāclīcne,\nhelmum behongen, hildebordum,\nbeorhtum byrnum, swā hē bēna wæs;\nālegdon ðā tōmiddes mǣrne þēoden\nhæleð hīofende, hlāford lēofne.\nOngunnon þā on beorge bælfȳra mǣst\nwīgend weccan; wudurēc āstāh\nsweart ofer swioðole, swōgende lēg\nwōpe bewunden — windblond gelæg —,\noð þæt hē ðā bānhūs gebrocen hæfde\nhāt on hreðre. Higum unrōte\nmōdceare mǣndon, mondryhtnes cwealm;\nswylce giōmorgyd sīo geōmēowle\næfter Bīowulfe bundenheorde\nsong sorgcearig, sǣde geneahhe,\nþæt hīo hyre hearmdagas hearde ondrēde,\nwælfylla worn, wīgendes egesan,\nhȳnðo ond hæftnȳd. Heofon rēce swealg.',
    diplomatic: 'Him ðā gegiredan Gēata lēode\nād on eorðan unwāclīcne,\nhelm[um] behongen, hildebordum,\nbeorhtum byrnum, swā hē bēna wæs;\nālegdon ðā tōmiddes mǣrne þēoden\nhæleð hīofende, hlāford lēofne.\nOngunnon þā on beorge bælfȳra mǣst\nwīgend weccan; wud(u)rēc āstāh\nsweart ofer swioðole, swōgende lēg\nwōpe bewunden — windblond gelæg —,\noð þæt hē ðā bānhūs gebrocen hæfde\nhāt on hreðre. Higum unrōte\nmōdceare mǣndon, mondryhtnes cw(e)alm;\nswylce giōmorgyd (s)īo g(eō)mēowle\n(æfter) (Bīowulfe) (b)undenheorde\n(song) sorgcearig, sǣde geneahhe,\nþæt hīo hyre (hearmda)gas hearde (ondrē)de,\nwælfylla worn, (wīgen)des egesan,\nhȳ[n]ðo (ond) h(æftnȳ)d. Heofon rēce swe(a)lg.',
    translations: [
      { label: 'English translation', text: 'Then the people of the Geats made ready for him a pyre on the earth, no mean one, hung with helmets, with battle-shields, with bright mail-coats, as he had asked; then the lamenting warriors laid the famous prince, their dear lord, in the midst. Then the warriors began to kindle the greatest of funeral fires on the mound; the wood-smoke rose, black above the blaze, the roaring flame mingled with weeping — the tumult of the wind died down — until it had broken the bone-house, hot at the heart. Sad in mind, they lamented their grief, the death of their liege-lord; likewise the old woman with bound hair sang a sad lament for Beowulf, full of sorrow, said again and again that she bitterly dreaded days of harm for herself, a multitude of slaughters, the terror of the warrior, humiliation and captivity. Heaven swallowed the smoke.' },
      { label: 'German translation', text: 'Da bereiteten ihm die Leute der Geaten einen Scheiterhaufen auf der Erde, keinen geringen, behängt mit Helmen, mit Kampfschilden, mit hellen Brünnen, wie er gebeten hatte; dann legten die klagenden Helden den berühmten Fürsten, den lieben Herrn, in die Mitte. Da begannen die Krieger auf dem Hügel das größte der Totenfeuer zu entfachen; der Holzrauch stieg auf, schwarz über der Glut, die tosende Flamme vermischt mit Weinen — das Brausen des Windes legte sich —, bis sie das Gebeinhaus zerbrochen hatte, heiß im Innern. Traurigen Sinnes beklagten sie ihren Kummer, den Tod ihres Gefolgsherrn; ebenso sang die alte Frau mit gebundenem Haar ein Klagelied um Beowulf, voller Sorge, sagte immer wieder, dass sie Tage des Unheils für sich bitter fürchte, eine Menge von Gemetzeln, den Schrecken des Kriegers, Schmach und Gefangenschaft. Der Himmel verschlang den Rauch.' }
    ],
    notes: [
      { ref: 'Him ðā gegiredan Gēata lēode ād on eorðan unwāclīcne', html: 'Klaeber prints the fitt number <em>XLIII</em> in the margin: the last section of the poem begins here. <span class="la">unwāclīcne</span>: “not weak”, understatement for “splendid”.' },
      { ref: 'helm[um] behongen', html: 'MS <span class="la">helm</span>; Klaeber prints Grein’s added <span class="la">-um</span> to match the datives <span class="la">hildebordum, byrnum</span>. Other editors keep <span class="la">helm</span> and construe differently.' },
      { ref: 'ālegdon ðā tōmiddes mǣrne þēoden hæleð hīofende', html: 'Verb first, object, then the subject <span class="la">hæleð hīofende</span> “the lamenting warriors”. <span class="la">hīofende</span>: early spelling (io) of <span class="la">hēofende</span>.' },
      { ref: 'wud(u)rēc āstāh sweart ofer swioðole', html: '<span class="la">wud(u)</span>: the final u is lost and supplied. <span class="la">swioðole</span>: Klaeber’s note gives the manuscript reading as <span class="la">swicðole</span>; editors emend. The word is rare and its meaning, “blaze, heat”, is inferred.' },
      { ref: '— windblond gelæg —', html: 'A parenthesis: “the roar of the wind died down”, so the fire burned undisturbed. Klaeber marks it with dashes.' },
      { ref: 'oð þæt hē ðā bānhūs gebrocen hæfde', html: '<span class="la">hē</span> refers to the fire (<span class="la">lēg</span>, masculine). <span class="la">bānhūs</span> “bone-house”: a kenning for the body.' },
      { ref: 'swylce giōmorgyd (s)īo g(eō)mēowle', html: 'See the source panel. <span class="la">g(eō)mēowle</span> “old woman”: <span class="la">geō</span> was first conjectured by an editor; a Latin gloss <em>anus</em> stands over the word in the manuscript.' },
      { ref: '(æfter) (Bīowulfe) (b)undenheorde', html: 'Almost entirely restored. <span class="la">bundenheorde</span> “with bound hair” may mark a married woman; this is an inference from much later customs.' },
      { ref: 'þæt hīo hyre (hearmda)gas hearde (ondrē)de', html: 'Reported speech after <span class="la">sǣde</span>. <span class="la">ondrēde</span> may be past subjunctive (Lecture IX), but most of the word is restored, so the mood is the editor’s choice as much as the poet’s.' },
      { ref: 'hȳ[n]ðo (ond) h(æftnȳ)d. Heofon rēce swe(a)lg.', html: 'Klaeber prints an added <span class="la">n</span> (MS <span class="la">hyðo</span>); <span class="la">(ond)</span> and most of <span class="la">hæftnȳd</span> are restored. The last half-line of the section is secure enough in outline: “Heaven swallowed the smoke.”' }
    ],
    glosses: {
      'behongen': 'hung (with) (past part. of behōn)', 'beorge': 'mound, hill (dat.)', 'beorhtum': 'bright (dat. pl.)', 'bewunden': 'wound about, mingled (past part. of bewindan)', 'bundenheorde': 'with bound hair (a married woman? a crux)', 'byrnum': 'with mail-coats (dat. pl.)',
      'bælfȳra': 'of pyre-fires (gen. pl.)', 'bānhūs': 'bone-house, body (acc.)', 'bēna': 'petitioner; swā hē bēna wæs: as he had asked', 'bīowulfe': 'Beowulf (dat.)', 'cwealm': 'death, killing (acc.)', 'egesan': 'terror (acc.)',
      'eorðan': 'earth (dat.)', 'gebrocen': 'broken, destroyed (past part. of brecan)', 'gegiredan': 'prepared (pret. pl. of gegyrwan)', 'gelæg': 'subsided, died down (pret. of gelicgan)', 'geneahhe': 'often, abundantly', 'geōmēowle': 'old woman (restored; meowle “woman”)',
      'giōmorgyd': 'sad song, lament (acc.)', 'gēata': 'of the Geats', 'hearde': 'hard, bitterly (adverb)', 'hearmdagas': 'days of harm (acc. pl.)', 'helmum': 'with helmets (dat. pl.)', 'heofon': 'heaven, sky',
      'higum': 'in their minds (dat. pl. of hyge)', 'hildebordum': 'with battle-shields (dat. pl.)', 'him': 'for him (dat.)', 'hlāford': 'lord (acc.)', 'hreðre': 'breast, heart (dat. of hreðer)', 'hyre': 'for herself (dat.)',
      'hæfde': 'had', 'hæftnȳd': 'captivity (acc.)', 'hæleð': 'warriors (nom. pl.)', 'hāt': 'hot', 'hē': 'it (the fire)', 'hīo': 'she',
      'hīofende': 'lamenting (pres. part. of hēofan)', 'hȳnðo': 'humiliation (acc.)', 'lēg': 'flame, fire (German Lohe)', 'lēode': 'people', 'lēofne': 'dear (acc. m.)', 'mondryhtnes': 'of their liege-lord (gen.)',
      'mōdceare': 'with grief of mind (dat.)', 'mǣndon': 'lamented (pret. pl. of mǣnan)', 'mǣrne': 'famous (acc. m.)', 'mǣst': 'greatest (superlative of micel)', 'ofer': 'over', 'on': 'on, in',
      'ond': 'and', 'ondrēde': 'dreaded (pret. subj.? of ondrǣdan; restored)', 'ongunnon': 'began (pret. pl. of onginnan)', 'oð': 'until (oð þæt)', 'rēce': 'smoke (dat.)', 'song': 'sang (pret. of singan; restored)',
      'sorgcearig': 'sorrowful, anxious', 'swealg': 'swallowed (pret. of swelgan)', 'sweart': 'black, dark', 'swioðole': 'blaze, flame (dat. of swioðol; MS reading uncertain)', 'swylce': 'likewise, also', 'swā': 'as',
      'swōgende': 'roaring (pres. part. of swōgan)', 'sīo': 'the (nom. f.; restored)', 'sǣde': 'said', 'tōmiddes': 'in the midst', 'unrōte': 'sad (nom. pl.)', 'unwāclīcne': 'not weak, magnificent (acc. m.)',
      'weccan': 'wake, kindle (weak I)', 'windblond': 'the tumult of the wind', 'worn': 'a great number, multitude', 'wudurēc': 'wood-smoke', 'wælfylla': 'of slaughters (gen. pl.)', 'wæs': 'was',
      'wīgend': 'warriors (nom. pl.)', 'wīgendes': 'of the warrior (gen.; restored)', 'wōpe': 'with weeping (dat. of wōp)', 'æfter': 'after, for', 'ðā': 'then; the (acc. pl.)', 'þæt': 'that',
      'þā': 'then', 'þēoden': 'lord, prince', 'ād': 'pyre', 'ālegdon': 'laid (pret. pl. of ālecgan)', 'āstāh': 'rose (pret. of āstīgan)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What was hung on the pyre?', options: ['Helmets, shields and mail-coats', 'Gold rings', 'The dragon’s body', 'Flowers'], answer: 0, explain: 'helm[um] behongen, hildebordum, beorhtum byrnum.' },
      { id: 'r2', type: 'mc', prompt: 'Whose wish was it?', options: ['Beowulf’s own', 'Wiglaf’s', 'The Swedes’', 'The old woman’s'], answer: 0, explain: 'swā hē bēna wæs.' },
      { id: 'r3', type: 'mc', prompt: 'What does the woman fear?', options: ['Days of harm, slaughter, humiliation and captivity', 'The dragon', 'A storm', 'Nothing'], answer: 0, explain: 'A prophecy of the Geats’ fall.' },
      { id: 'r4', type: 'mc', prompt: 'How certain is the text of the woman’s lament?', options: ['Largely restored by editors', 'Perfectly preserved', 'Copied from Thorkelin only', 'Invented by Klaeber'], answer: 0, explain: 'Klaeber follows Bugge’s restoration.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'The Nowell Codex is named after:', options: ['Laurence Nowell, a 16th-century antiquary', 'the scribe', 'a monastery', 'a king'], answer: 0, explain: 'His name and the year 1563 are on its first page.' },
      { id: 't2', type: 'mc', prompt: 'Which text is not in the Nowell Codex?', options: ['The Battle of Maldon', 'Judith', 'Wonders of the East', 'Letter of Alexander to Aristotle'], answer: 0, explain: 'Maldon survived only in a transcript; its manuscript burned in 1731.' },
      { id: 't3', type: 'mc', prompt: 'Who published the first edition of Beowulf?', options: ['Thorkelin (1815)', 'Kemble (1833)', 'Klaeber (1922)', 'Zupitza (1882)'], answer: 0, explain: 'With a Latin translation.' },
      { id: 't4', type: 'mc', prompt: 'Zupitza’s 1882 publication was:', options: ['a photographic facsimile', 'a translation', 'a dictionary', 'a grammar'], answer: 0, explain: 'For the Early English Text Society.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">wud(u)rēc</span>: the letter ___ is supplied', hint: 'one letter', answers: ['u'], full: 'u', explain: 'Round brackets: lost in the MS.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">ƿigend</span> is printed ___', hint: 'replace the wynn', answers: ['wīgend', 'wigend'], full: 'wīgend', explain: 'ƿ = w.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Se rēc wæs sweart.', model: 'The smoke was black.', accepted: ['smoke was black', 'smoke was dark', 'the smoke was black', 'the smoke was dark'] },
      { id: 't8', type: 'translate', dir: 'en-oe', source: 'the hot fire (nom.; se, hāt, lēg)', model: 'se hāta lēg', accepted: ['se hāta lēg', 'se hāta līg'], explain: 'After se the adjective is weak, hāta; lēg (also līg) “flame” is masculine.' },
      { id: 't9', type: 'mc', prompt: 'Where did Klaeber teach?', options: ['University of Minnesota', 'Oxford', 'Copenhagen', 'Berlin'], answer: 0, explain: '1893–1931.' },
      { id: 't10', type: 'mc', prompt: 'Who argued in 1981 that Beowulf was composed in the 11th century?', options: ['Kevin Kiernan', 'R. D. Fulk', 'Kenneth Sisam', 'Henry Sweet'], answer: 0, explain: 'A minority view.' },
      { id: 't11', type: 'mc', prompt: 'Macrons in modern editions of Old English are:', options: ['editorial', 'copied from the manuscript', 'Thorkelin’s', 'abbreviation strokes'], answer: 0, explain: 'The scribes only occasionally used accents.' }
    ]
  },

  reference: [
    { title: 'Manuscript signs', headers: ['Sign', 'Edited', 'Note'], rows: [['ƿ', 'w', 'wynn, a rune'], ['ʒ', 'g', 'insular g'], ['ſ', 's', 'long s'], ['⁊', 'ond / and', 'Tironian note'], ['þ̄', 'þæt', 'stroke through the ascender'], ['stroke over a vowel', '+ m or n', 'hī = him']] },
    { title: 'Beowulf: key dates', headers: ['Date', 'Event'], rows: [['c. 1000', 'Nowell Codex written by two scribes'], ['1563', 'Laurence Nowell signs the manuscript'], ['1731', 'Cotton library fire'], ['1787', 'Thorkelin transcripts A and B'], ['1815', 'Thorkelin’s first edition'], ['1833', 'Kemble’s edition'], ['1845', 'Leaves mounted in paper frames'], ['1882', 'Zupitza’s facsimile'], ['1922', 'Klaeber’s first edition'], ['2008', 'Klaeber’s Beowulf, 4th edition']] },
    { title: 'Apparatus abbreviations', headers: ['Abbr.', 'Meaning'], rows: [['MS.', 'the manuscript'], ['Thk.', 'Thorkelin'], ['Tho.', 'Thorpe (edition 1855)'], ['Ke.', 'Kemble'], ['Gr.', 'Grein'], ['Bu.', 'Bugge'], ['Holt.', 'Holthausen'], ['Z.', 'Zupitza'], ['om.', 'omitted'], ['perh.', 'perhaps']] }
  ]
});
