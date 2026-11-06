/*
 * Middle English — Lecture I: Chaucer’s English. Spelling and sounds (before the Great Vowel Shift), final -e,
 * thorn, yogh and the alphabet; the opening sentence of the General Prologue.
 * Reading: General Prologue 1–18 (Group A 1–18) in Skeat’s edition, The Complete Works of Geoffrey Chaucer,
 * vol. 4 (Oxford 1894), from the Project Gutenberg text (sources/chaucer-skeat-1894-canterbury-tales.txt).
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('me', {
  id: 'me-01',
  number: 1,
  title: 'Whan that Aprille',
  subtitle: 'Chaucer’s English: spelling, sounds, thorn and yogh; General Prologue 1–18',
  minutes: 60,

  intro: `
    <p>The <em>Canterbury Tales</em> begin with one of the most famous sentences in English: eighteen lines on spring, the time when people long to go on pilgrimage, and above all to Canterbury, to the shrine of St Thomas Becket. Written in London in the late 1380s, it is close enough to modern English to look readable and different enough to mislead at every turn.</p>
    <p>For a German speaker the sounds are the easy part. Chaucer wrote before the <strong>Great Vowel Shift</strong>, the change that gave English its unusual long vowels, so his vowels are much closer to German than to modern English: <span class="la">sote</span> rhymes with German <em>rote</em> (as in <em>Rote Bete</em>), <span class="la">fowles</span> has the long u of German <em>Uhr</em>, and <span class="la">night</span> is pronounced almost exactly like German <em>nicht</em>. Every letter counts: the k in <span class="la">knight</span>, the gh, and usually the final e.</p>
    <p>The grammar of the course will run from Old English to Chaucer, so you will see many old friends: <span class="la">eek</span> is <span class="la">ēac</span>, <span class="la">halwes</span> are <span class="la">hālgan</span>, and the prefix <span class="la">y-</span> in <span class="la">y-ronne</span> is <span class="la">ge-</span>.</p>
  `,

  background: [
    {
      title: 'Geoffrey Chaucer',
      html: `
        <p>Chaucer was born in London in the early 1340s (the exact year is unknown), the son of a wine merchant. He served as a page in a noble household, was captured on campaign in France in 1359–60 and ransomed with help from the king, and spent his life in royal service: diplomat on missions to Italy and France, Controller of Customs for wool in the port of London (1374–86), Clerk of the King’s Works. He died in 1400 and was buried in Westminster Abbey, where his tomb later became the nucleus of Poets’ Corner.</p>
        <p>He wrote in English when the court still spoke a good deal of French, and his journeys to Italy brought him to Dante, Petrarch and Boccaccio; the <em>Decameron</em>, another frame of tales, is a likely though unproven model. His language is the English of London, with features from the East Midlands and the South-East; that this London English later became the basis of standard English is due to London’s importance, not to Chaucer, although later writers called him the father of English poetry.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Chaucer_ellesmere.jpg/960px-Chaucer_ellesmere.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Chaucer_ellesmere.jpg/500px-Chaucer_ellesmere.jpg|https://upload.wikimedia.org/wikipedia/commons/0/0d/Chaucer_ellesmere.jpg" alt="Medieval miniature of a man on horseback in a grey gown, with a pen case hanging from his neck"><figcaption>Chaucer as one of the pilgrims, from the Ellesmere manuscript of the <em>Canterbury Tales</em> (Huntington Library, San Marino, EL 26 C 9), early 15th century. Whether the portrait records his real appearance is unknown. <span class="credit">Manuscript image, public domain · <a href="https://commons.wikimedia.org/wiki/File:Chaucer_ellesmere.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'The pilgrimage',
      html: `
        <p>Thomas Becket, Archbishop of Canterbury, was murdered in his cathedral by four of Henry II’s knights in December 1170 and canonised in 1173. His shrine became the greatest pilgrimage site in England until Henry VIII had it destroyed in 1538. Pilgrims came for healing above all, which is the point of the last line: the martyr <span class="la">that hem hath holpen, whan that they were seke</span>.</p>
        <p>The narrator meets twenty-nine pilgrims at the Tabard inn in Southwark, south of London Bridge; the host proposes that each tell two tales on the way out and two on the way back. Chaucer finished only twenty-four tales, some incomplete, and the order of the surviving fragments differs between manuscripts.</p>
      `
    },
    {
      title: 'A spring opening, from Minnesang to Chaucer',
      html: `
        <p>Beginning a poem with spring (rain, the west wind, new shoots, singing birds) is an old convention. German scholarship calls it the <em>Natureingang</em>, and it is common in Minnesang; Latin and French poetry use it too, and Chaucer knew the French tradition well. What is unusual is the turn: Chaucer’s spring ends not in love but in pilgrimage, and the sentence moves from the cosmos (Zephyrus, the Ram) down to birds, people, and finally the sick.</p>
        <p>The astronomy dates the scene: the young sun has run half its course in the Ram, that is, the sign of Aries, which in Chaucer’s calendar the sun entered on 12 March and left in mid April. “His half course” has been read as the first or the second half of the sign, so the date is early or mid April; the Man of Law’s Prologue later names 18 April.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Than longen folk to goon on pilgrimages,<br>And palmers for to seken straunge strondes,<br>To ferne halwes, couthe in sondry londes</p>
    <p>“Then people long to go on pilgrimages, and palmers to seek foreign shores, to distant shrines, known in various lands.” General Prologue 12–14, Skeat’s text (1894).</p>
    <p>Every word but three (<span class="la">pilgrimages, palmers, straunge</span>) comes from Old English, and four have German cousins: <span class="la">longen</span> <em>verlangen</em>, <span class="la">folk</span> <em>Volk</em>, <span class="la">strondes</span> <em>Strand</em>, <span class="la">ferne</span> <em>fern</em>. <span class="la">halwes</span> is Old English <span class="la">hālgan</span> “saints” (German <em>Heilige</em>), still in <em>All Hallows</em> and <em>Halloween</em>.</p>
  `,

  pronunciation: `
    <p>Chaucer’s pronunciation is reconstructed from rhymes, spellings, French loanwords and the later history of English. The main lines are secure; details (for instance the exact quality of the long e and o vowels) are debated. Compare with German, not with modern English:</p>
    <div class="tablewrap"><table>
      <thead><tr><th>Spelling</th><th>Sound</th><th>German</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td class="la">a, aa</td><td>a, long a</td><td><em>Mann, Name</em></td><td class="la">smale, maken</td></tr>
        <tr><td class="la">ee, e (long)</td><td>long e, closed or open</td><td><em>See</em>; <em>Bär</em></td><td class="la">swete, breeth, heeth</td></tr>
        <tr><td class="la">i, y (long)</td><td>long i</td><td><em>Liebe</em></td><td class="la">melodye, yë</td></tr>
        <tr><td class="la">o, oo (long)</td><td>long o, closed or open</td><td><em>Rose</em>; open as in <em>Sorge</em> but long</td><td class="la">sote, rote, goon</td></tr>
        <tr><td class="la">ou, ow</td><td>long u</td><td><em>Uhr</em>; Low German <em>Huus</em></td><td class="la">shoures, fowles, flour</td></tr>
        <tr><td class="la">u, o (short)</td><td>short u</td><td><em>Mutter</em></td><td class="la">sonne, sondry</td></tr>
        <tr><td class="la">ay, ey</td><td>a + i</td><td><em>Mai</em> (roughly)</td><td class="la">veyne</td></tr>
        <tr><td class="la">gh</td><td>ch</td><td><em>ich, ach</em></td><td class="la">night, droghte</td></tr>
        <tr><td class="la">r</td><td>trilled</td><td>southern German r</td><td class="la">Aprille, Marche</td></tr>
        <tr><td class="la">final -e</td><td>ə, often</td><td><em>Sonne</em></td><td class="la">sote, rote, sonne</td></tr>
      </tbody>
    </table></div>
    <ul>
      <li><strong>Every consonant counts</strong>: <span class="la">k</span> in knight, <span class="la">w</span> in write, <span class="la">l</span> in folk and half, as German <em>Knecht, Volk, halb</em>.</li>
      <li><strong>Final -e</strong> is pronounced as a schwa in verse unless the next word begins with a vowel or (often) h, when it is elided: <span class="la">The droghte of March(e) hath perced to the rote</span>. Lecture IV treats this with the metre.</li>
      <li><strong>French words</strong> often keep a French stress on the last syllable: <span class="la">licóur, vertú, melodýe, coráges</span>.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. How Chaucer’s English is spelt',
      html: `
        <p>There was no standard spelling. Scribes spelt as they heard and as they had been trained, so the same word appears in different forms even within one manuscript (<span class="la">yë, eye, iye</span>; <span class="la">seke, seeke</span>). Some regular habits:</p>
        <ul>
          <li><strong>Doubled vowels</strong> mark length: <span class="la">goon, heeth, eek, breeth</span>, as in German <em>Boot, See</em>.</li>
          <li><strong>ou, ow</strong> for long u, a French spelling: <span class="la">shoures, fowles, flour</span>. The modern pronunciation “ow” came later with the vowel shift.</li>
          <li><strong>o</strong> for short u next to m, n, u, v, w, because u in those letters was hard to read in the script: <span class="la">sonne, sondry, londes</span>. This is why modern English writes <em>son, come, love</em>.</li>
          <li><strong>u and v, i and j and y</strong> are not yet separate letters: <span class="la">veyne, every</span>; <span class="la">yë</span>. The course accepts either form in answers.</li>
          <li><strong>sh, ch, th, gh</strong> replace Old English sc, c, þ/ð and h: <span class="la">shires</span> (OE <span class="la">scīr</span>), <span class="la">swich</span> (OE <span class="la">swilc</span>), <span class="la">droghte</span> (OE <span class="la">drūgaþ</span>).</li>
        </ul>
        <p>Editions differ in how much they regularise. Skeat (1894) based his text on the Ellesmere manuscript and corrected it from others; his footnotes record the variants (“10. Hl. yhe; Hn. Iye; E. eye”).</p>
      `
    },
    {
      title: '2. Thorn, yogh and the alphabet',
      html: `
        <p>Old English had four letters that modern English has lost (Old English Lecture I). Middle English kept two for a long time:</p>
        <ul>
          <li><span class="la">þ</span> (thorn) for th. Chaucer’s scribes mostly write th, but <span class="la">þ</span> survives in some manuscripts, especially in short words (<span class="la">þe, þat</span>). Later scribes and printers wrote it like a y, hence the mock-antique “Ye olde shoppe”, which was always pronounced “the”.</li>
          <li><span class="la">ȝ</span> (yogh), from the insular g of Old English, for the sounds of y (<span class="la">ȝeer</span> “year”) and of German ch (<span class="la">niȝt</span> “night”). It is common in northern and western texts such as <em>Sir Gawain</em> and rare in the Chaucer manuscripts, which use y and gh.</li>
          <li><span class="la">ð</span> (eth) died out in the 13th century; <span class="la">ƿ</span> (wynn) was replaced by w, a French spelling.</li>
        </ul>
        <p>Printers in the 15th century, using type from the Continent, had no thorn or yogh, which hastened their end; yogh lived on as a misprinted z in Scottish names such as <em>Menzies</em> and <em>Dalziel</em> (pronounced “Mingis”, “Dee-ell”).</p>
      `
    },
    {
      title: '3. From Old English: what changed',
      html: `
        <ul>
          <li><strong>Endings have collapsed</strong>: Old English <span class="la">-a, -e, -u, -an, -on, -um</span> all became <span class="la">-e</span> or <span class="la">-en</span> (schwa), and often disappeared. Nouns have a plural in <span class="la">-es</span> (<span class="la">shoures, fowles, londes</span>) and a genitive in <span class="la">-es</span> (<span class="la">shires</span>); case endings are otherwise gone.</li>
          <li><strong>Grammatical gender is gone</strong>. <span class="la">his</span> in <span class="la">Aprille with his shoures</span> is the old neuter possessive, “its”: the form <em>its</em> appears only around 1600.</li>
          <li><strong>The prefix ge- has become y-</strong> and is optional: <span class="la">y-ronne</span> beside <span class="la">holpen</span> (German <em>geholfen</em>).</li>
          <li><strong>Plural verbs end in -en</strong>: <span class="la">longen, maken, slepen</span> (Old English <span class="la">-aþ</span>, in the Midlands replaced by <span class="la">-en</span>); the third person singular ends in <span class="la">-eth</span>: <span class="la">priketh</span>.</li>
          <li><strong>French words</strong> have entered the vocabulary in thousands: <span class="la">licour, vertu, nature, corage, cours</span>. Lecture V is about these layers.</li>
        </ul>
      `
    },
    {
      title: '4. The first sentence',
      html: `
        <p>The opening is one sentence: two long subordinate clauses with <span class="la">Whan</span> (“when”), then the main clause with <span class="la">Than</span> (“then”), as in German <em>Wenn … dann</em>:</p>
        <ul>
          <li><span class="la">Whan that Aprille … hath perced</span> (1–4): <span class="la">that</span> after a conjunction adds nothing (<span class="la">whan that</span> = “when”); compare older German <em>als dass</em>-type doublings.</li>
          <li><span class="la">Whan Zephirus eek … inspired hath … and the yonge sonne hath … y-ronne, and smale fowles maken melodye</span> (5–11): four subjects, one of them with a parenthesis.</li>
          <li><span class="la">Than longen folk to goon on pilgrimages … and specially … to Caunterbury they wende</span> (12–18): main clause, verb second after <span class="la">Than</span>, as in German <em>Dann sehnen sich die Leute …</em>.</li>
        </ul>
        <p>The perfect is formed with <span class="la">hath</span> + past participle (<span class="la">hath perced, inspired hath</span>); verbs of motion often use <span class="la">is</span>, as German does (<span class="la">he is goon</span>, <em>er ist gegangen</em>).</p>
      `
    }
  ],

  vocab: [
    { id: 'shour', head: 'shour', la: 'shour, pl. shoures', pos: 'noun', en: 'shower', note: 'OE scūr, German Schauer (Regenschauer). ou = long u: “shuur”.' },
    { id: 'rote', head: 'rote', la: 'rote, pl. rotes', pos: 'noun', en: 'root', note: 'From Old Norse rót; the OE word was wyrt (German Wurzel).' },
    { id: 'flour', head: 'flour', la: 'flour, pl. floures', pos: 'noun', en: 'flower; the best part', note: 'French fleur. Modern flour (milled grain) is the same word: “the flower of the meal”.' },
    { id: 'fowel', head: 'fowel', la: 'fowel, foul, pl. fowles', pos: 'noun', en: 'bird', note: 'OE fugol, German Vogel. The modern meaning “fowl” (poultry) is a narrowing.' },
    { id: 'folk', head: 'folk', la: 'folk', pos: 'noun', en: 'people', note: 'OE folc, German Volk. The l is pronounced.' },
    { id: 'halwe', head: 'halwe', la: 'halwe, pl. halwes', pos: 'noun', en: 'saint; shrine of a saint', note: 'OE hālga, German Heiliger; Halloween (All Hallows’ Eve).' },
    { id: 'strond', head: 'strond', la: 'strond, pl. strondes', pos: 'noun', en: 'shore, strand', note: 'German Strand. o for a before nd, as in lond.' },
    { id: 'martir', head: 'martir', la: 'martir', pos: 'noun', en: 'martyr', note: 'Here Thomas Becket. Via Latin from Greek mártys “witness”.' },
    { id: 'longen', head: 'longen', la: 'longen; longed', pos: 'verb, weak', en: 'long, desire', note: 'German verlangen, sich sehnen. They longen: present plural -en.' },
    { id: 'seken', head: 'seken', la: 'seken; soughte; sought', pos: 'verb, weak, irregular', en: 'seek, look for; visit', note: 'OE sēcan, sōhte (Old English Lecture VII); German suchen.' },
    { id: 'wenden', head: 'wenden', la: 'wenden; wente; went', pos: 'verb, weak', en: 'go, travel; turn', note: 'German wenden. Its past wente became the past of go: went.' },
    { id: 'slepen', head: 'slepen', la: 'slepen; slepte / sleep; slept', pos: 'verb, strong and weak', en: 'sleep', note: 'German schlafen. The strong past sleep and weak slepte both occur.' },
    { id: 'goon', head: 'goon', la: 'goon, gon; wente; goon, y-go', pos: 'verb, irregular', en: 'go, walk', note: 'OE gān, German gehen. oo = long open o: “gawn”, not “goon”.' },
    { id: 'helpen', head: 'helpen', la: 'helpen; halp / holp; holpen', pos: 'verb, strong', en: 'help', note: 'German helfen, half, geholfen. Weak helped is spreading.' },
    { id: 'swete', head: 'swete', la: 'swete, sote', pos: 'adjective', en: 'sweet', note: 'OE swēte and swōt: two forms, both in this passage. German süß.' },
    { id: 'straunge', head: 'straunge', la: 'straunge', pos: 'adjective', en: 'foreign, from elsewhere; unusual', note: 'French estrange from Latin extraneus. The first meaning is “foreign”.' },
    { id: 'ferne', head: 'ferne', la: 'fer, ferne', pos: 'adjective', en: 'distant, far', note: 'German fern.' },
    { id: 'eek', head: 'eek', la: 'eek, eke', pos: 'adverb', en: 'also', note: 'OE ēac, German auch. Survives in “to eke out”, from a related verb.' }
  ],

  grammarCards: [
    { id: 'me1-gvs', front: 'Why are Chaucer’s long vowels like German ones?', back: 'He wrote before the Great Vowel Shift (c. 1400–1700)' },
    { id: 'me1-ou', front: 'ou, ow in shoures, fowles', back: 'long u (German Uhr; Low German Huus)' },
    { id: 'me1-oo', front: 'oo, ee', back: 'Doubled letters mark long vowels: goon, heeth, eek' },
    { id: 'me1-gh', front: 'gh in night, droghte', back: 'German ch (nicht, acht)' },
    { id: 'me1-e', front: 'Final -e in verse', back: 'Pronounced as a schwa, elided before a vowel (and often h)' },
    { id: 'me1-kn', front: 'knight, write, folk', back: 'Every consonant pronounced (German Knecht, Volk)' },
    { id: 'me1-o', front: 'o in sonne, sondry', back: 'Short u, written o next to m, n, u, v, w' },
    { id: 'me1-thorn', front: 'þ (thorn)', back: 'th; written like y by later scribes: “ye” = the' },
    { id: 'me1-yogh', front: 'ȝ (yogh)', back: 'y (ȝeer) or German ch (niȝt); from insular g' },
    { id: 'me1-y', front: 'y- in y-ronne', back: 'The old prefix ge- (German ge-), now optional' },
    { id: 'me1-his', front: 'his in “Aprille with his shoures”', back: '“its”: the old neuter possessive' },
    { id: 'me1-en', front: 'longen, maken, slepen', back: 'Present plural -en' },
    { id: 'me1-eth', front: 'priketh', back: 'Present 3rd singular -eth' },
    { id: 'me1-whan', front: 'Whan that …', back: '“When”; that after a conjunction adds nothing' },
    { id: 'me1-opening', front: 'Whan that Aprille with his shoures sote / The droghte of Marche hath perced to the rote', back: 'When April with its sweet showers has pierced the drought of March to the root (GP 1–2)' },
    { id: 'me1-becket', front: 'The holy blisful martir', back: 'Thomas Becket, murdered 1170, canonised 1173' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'How was <span class="la">sote</span> (line 1) pronounced?', options: ['with a long o, like German rote', 'like modern “soot”', 'like “sought”', 'like “sow-t”'], answer: 0, explain: 'Before the Great Vowel Shift.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">fowles</span> was pronounced with:', options: ['a long u', 'the vowel of modern “fowl”', 'a long o', 'a long i'], answer: 0, explain: 'ou/ow = long u.' },
    { id: 'e3', type: 'mc', prompt: 'gh in <span class="la">night</span> sounded like:', options: ['German ch in nicht', 'nothing', 'g', 'f'], answer: 0, explain: 'Silent only later.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">his</span> in “Aprille with his shoures” means:', options: ['its', 'his (April is a man)', 'their', 'her'], answer: 0, explain: 'The old neuter possessive.' },
    { id: 'e5', type: 'mc', prompt: 'Who is “the holy blisful martir”?', options: ['Thomas Becket', 'St Alban', 'St Edmund', 'St Augustine'], answer: 0, explain: 'Murdered in Canterbury Cathedral in 1170.' },
    { id: 'e6', type: 'mc', prompt: 'Where does the narrator meet the pilgrims?', options: ['The Tabard in Southwark', 'Canterbury Cathedral', 'Westminster', 'The Tower'], answer: 0, explain: 'South of London Bridge.' },
    { id: 'e7', type: 'mc', prompt: '<span class="la">y-</span> in <span class="la">y-ronne</span> corresponds to:', options: ['German ge-', 'English why', 'German ver-', 'the article'], answer: 0, explain: 'OE ge-.' },
    { id: 'e8', type: 'mc', prompt: 'What is ȝ (yogh)?', options: ['a letter for y or ch sounds', 'a sign for “and”', 'a long-vowel mark', 'a form of z only'], answer: 0, explain: 'From insular g.' },
    { id: 'e9', type: 'match', prompt: 'Match Chaucer’s words to German cognates.', pairs: [
      ['strondes', 'Strand'], ['folk', 'Volk'], ['ferne', 'fern'], ['eek', 'auch'], ['holt', 'Holz']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the words to their meaning.', pairs: [
      ['halwes', 'shrines'], ['corages', 'hearts'], ['straunge', 'foreign'], ['couthe', 'known'], ['palmers', 'pilgrims']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Whan that Aprille with his ___ sote</span>', hint: 'showers', answers: ['shoures'], full: 'Whan that Aprille with his shoures sote', explain: 'GP 1.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Than longen ___ to goon on pilgrimages</span>', hint: 'people', answers: ['folk'], full: 'Than longen folk to goon on pilgrimages', explain: 'GP 12.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">And smale fowles mak___ melodye</span>', hint: 'present plural', answers: ['en'], full: 'And smale fowles maken melodye', explain: 'Plural -en.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">So prik___ hem nature in hir corages</span>', hint: 'present 3rd sg.', answers: ['eth'], full: 'So priketh hem nature in hir corages', explain: '3 sg. -eth.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give Chaucer’s form and the modern one.', headers: ['Chaucer', 'Modern'], rows: [
      { label: '“they” (subject)', answers: ['they', 'they'] },
      { label: '“them” (object)', answers: ['hem', 'them'] },
      { label: '“their”', answers: ['hir|her', 'their'] },
      { label: '“its”', answers: ['his', 'its'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Present tense of <span class="la">longen</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: '1st (I / we)', answers: ['longe', 'longen'] },
      { label: '2nd (thou / ye)', answers: ['longest', 'longen'] },
      { label: '3rd (he / they)', answers: ['longeth', 'longen'] },
      { label: 'past participle', answers: ['longed|y-longed', 'longed|y-longed'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the modern translation in order.', source: 'Than longen folk to goon on pilgrimages', tokens: ['Then', 'people long', 'to go', 'on pilgrimages'], explain: 'GP 12.' },
    { id: 'e18', type: 'translate', dir: 'me-en', source: 'The yonge sonne hath y-ronne his cours.', model: 'The young sun has run its course.', accepted: ['young sun has run its course', 'young sun has run his course', 'the young sun has run its course', 'the young sun has run his course'] },
    { id: 'e19', type: 'translate', dir: 'me-en', source: 'Smale fowles slepen with open yë.', model: 'Small birds sleep with open eyes.', accepted: ['small birds sleep with open eye', 'small birds sleep with open eyes', 'little birds sleep with open eye', 'little birds sleep with open eyes', 'small birds sleep with eyes open', 'little birds sleep with eyes open', 'small birds sleep with their eyes open', 'little birds sleep with their eyes open'] },
    { id: 'e20', type: 'translate', dir: 'en-me', source: 'they seek (Chaucer’s form)', model: 'they seken', accepted: ['they seken', 'they seke'] },
    { id: 'e21', type: 'translate', dir: 'en-me', source: 'sweet showers (two words)', model: 'swete shoures', accepted: ['swete shoures', 'sote shoures', 'shoures swete', 'shoures sote'] },
    { id: 'e22', type: 'mc', prompt: 'Why does modern English write <em>son, come, love</em> with o?', options: ['Scribes wrote o for u next to m, n, u, v, w', 'The vowel was once o', 'French influence on pronunciation', 'Printers’ errors'], answer: 0, explain: 'To avoid strings of minims in the script.' },
    { id: 'e23', type: 'mc', prompt: 'What does the astronomy in lines 7–8 indicate?', options: ['A date in April', 'Midsummer', 'Christmas', 'The year 1387'], answer: 0, explain: 'The sun has run half its course in the Ram (Aries).' }
  ],

  reading: {
    title: 'General Prologue 1–18',
    note: 'Authentic text: The Canterbury Tales, General Prologue (Group A) 1–18, in Skeat’s edition (The Complete Works of Geoffrey Chaucer, vol. 4, Oxford 1894), from the Project Gutenberg transcription. Skeat’s text follows the Ellesmere manuscript with corrections from others (here halfe and fowles from Harley 7334, Than from Petworth and Lansdowne). yë marks a two-syllable word. Tap any word.',
    text: 'Whan that Aprille with his shoures sote\nThe droghte of Marche hath perced to the rote,\nAnd bathed every veyne in swich licour,\nOf which vertu engendred is the flour;\nWhan Zephirus eek with his swete breeth\nInspired hath in every holt and heeth\nThe tendre croppes, and the yonge sonne\nHath in the Ram his halfe cours y‑ronne,\nAnd smale fowles maken melodye,\nThat slepen al the night with open yë,\n(So priketh hem nature in hir corages):\nThan longen folk to goon on pilgrimages\n(And palmers for to seken straunge strondes)\nTo ferne halwes, couthe in sondry londes;\nAnd specially, from every shires ende\nOf Engelond, to Caunterbury they wende,\nThe holy blisful martir for to seke,\nThat hem hath holpen, whan that they were seke.',
    translations: [
      { label: 'Modern English', text: 'When April with its sweet showers has pierced the drought of March to the root, and bathed every vein in such moisture, by whose power the flower is engendered; when Zephyrus too with his sweet breath has quickened the tender shoots in every wood and heath, and the young sun has run his half course in the Ram, and small birds make melody, that sleep all night with open eye (so nature spurs them in their hearts): then people long to go on pilgrimages, and palmers to seek foreign shores, to distant shrines known in various lands; and especially from every shire’s end of England they travel to Canterbury, to seek the holy blessed martyr, who has helped them when they were sick.' },
      { label: 'German translation', text: 'Wenn der April mit seinen süßen Schauern die Dürre des März bis zur Wurzel durchdrungen und jede Ader in solchem Saft gebadet hat, durch dessen Kraft die Blume entsteht; wenn auch Zephyrus mit seinem süßen Atem in jedem Gehölz und jeder Heide die zarten Triebe belebt hat und die junge Sonne im Widder ihren halben Lauf vollendet hat und kleine Vögel Melodien singen, die die ganze Nacht mit offenem Auge schlafen (so stachelt die Natur sie in ihren Herzen an): dann sehnen sich die Leute danach, auf Pilgerfahrt zu gehen, und Palmpilger, fremde Gestade aufzusuchen, ferne Heiligtümer, bekannt in verschiedenen Ländern; und besonders ziehen sie von jedem Ende jeder Grafschaft Englands nach Canterbury, um den heiligen, seligen Märtyrer aufzusuchen, der ihnen geholfen hat, als sie krank waren.' }
    ],
    notes: [
      { ref: 'Whan that Aprille with his shoures sote', html: '<span class="la">Whan that</span> = “when”. <span class="la">his</span> = “its”. <span class="la">sote</span> “sweet” follows its noun, French-fashion, for the rhyme with <span class="la">rote</span>. Pronounce the final e of <span class="la">Aprille</span>? Before <span class="la">with</span>, a consonant, it counts: <em>A-pril-le</em>.' },
      { ref: 'The droghte of Marche hath perced to the rote', html: 'Object first, verb last: “has pierced the drought of March to the root”. English spring is wet; March is dry by comparison, a commonplace of the medieval calendar.' },
      { ref: 'Of which vertu engendred is the flour', html: '<span class="la">vertu</span>: “power” (Latin <em>virtus</em>), the life-giving force of the moisture. <span class="la">Of which vertu</span>: “by the power of which”.' },
      { ref: 'Whan Zephirus eek with his swete breeth', html: 'Zephyrus, the west wind of classical poetry. Note <span class="la">swete</span> here and <span class="la">sote</span> in line 1: two forms of the same word, from two Old English forms (<span class="la">swēte, swōt</span>).' },
      { ref: 'Hath in the Ram his halfe cours y-ronne', html: 'The sun has passed through half its course in Aries, so the season is April. <span class="la">y-ronne</span>: past participle with the old prefix.' },
      { ref: 'That slepen al the night with open yë', html: 'Birds so full of spring that they hardly sleep. <span class="la">yë</span> is two syllables (Skeat’s diaeresis), rhyming with <span class="la">melodye</span>.' },
      { ref: 'So priketh hem nature in hir corages', html: '“So nature spurs them in their hearts”: verb first after <span class="la">So</span>. <span class="la">hem</span> “them” and <span class="la">hir</span> “their” are the native forms; the Norse <em>them, their</em> come in later, while <span class="la">they</span> is already Norse.' },
      { ref: 'Than longen folk to goon on pilgrimages', html: 'The main clause at last. Verb second after <span class="la">Than</span>, as in German.' },
      { ref: 'And palmers for to seken straunge strondes', html: '<span class="la">for to</span> + infinitive = “to”. Palmers had been to the Holy Land; the line widens the scene to all pilgrimage before narrowing to Canterbury.' },
      { ref: 'To ferne halwes, couthe in sondry londes', html: '<span class="la">halwes</span> are shrines (literally saints). <span class="la">couthe</span> “known”, from the verb that became <em>can</em>: compare <em>uncouth</em>.' },
      { ref: 'The holy blisful martir for to seke, / That hem hath holpen, whan that they were seke', html: 'A rime riche: <span class="la">seke</span> “seek” rhymes with <span class="la">seke</span> “sick”, two different words, which medieval poets allowed and the French admired.' }
    ],
    glosses: {
      'al': 'all; al the night: the whole night', 'and': 'and', 'aprille': 'April', 'bathed': 'bathed (subject: April)', 'blisful': 'blessed, glorious (from bliss, OE bliss)', 'breeth': 'breath',
      'caunterbury': 'Canterbury', 'corages': 'hearts, spirits (French corage)', 'cours': 'course', 'couthe': 'known, famous (past part. of conne “know”; German kund)', 'croppes': 'shoots, new growth', 'droghte': 'dryness, drought',
      'eek': 'also (OE ēac, German auch)', 'ende': 'end; every shires ende: every corner of every shire', 'engelond': 'England', 'engendred': 'engendered, produced', 'every': 'every', 'ferne': 'distant (OE feorran; German fern)',
      'flour': 'flower', 'folk': 'people (German Volk)', 'for': 'for; for to: to (before an infinitive)', 'fowles': 'birds (OE fugol; German Vögel)', 'from': 'from', 'goon': 'go (infinitive; German gehen)',
      'halfe': 'half', 'halwes': 'shrines, saints (OE hālga “holy one”; German Heilige)', 'hath': 'has', 'heeth': 'heath', 'hem': 'them (dat./acc.)', 'hir': 'their',
      'his': 'its (the neuter possessive; “its” comes c. 1600)', 'holpen': 'helped (past part.; German geholfen)', 'holt': 'wood, copse (German Holz)', 'holy': 'holy', 'in': 'in', 'inspired': 'breathed into, quickened',
      'is': 'is', 'licour': 'liquid, moisture (French)', 'londes': 'lands', 'longen': 'long, desire (pres. pl.)', 'maken': 'make (pres. pl.)', 'marche': 'March',
      'martir': 'martyr (Thomas Becket)', 'melodye': 'melody', 'nature': 'nature', 'night': 'night (gh as German ch: nicht)', 'of': 'of; by', 'on': 'on',
      'open': 'open', 'palmers': 'pilgrims who had been to the Holy Land (they brought back palm leaves)', 'perced': 'pierced', 'pilgrimages': 'pilgrimages', 'priketh': 'pricks, spurs (3 sg.)', 'ram': 'Ram (the sign Aries)',
      'ronne': 'run (past part.; y-ronne: run, German geronnen)', 'rote': 'root', 'seke': 'seek (inf., 17); sick (18)', 'seken': 'seek', 'shires': 'shire’s, county’s', 'shoures': 'showers',
      'slepen': 'sleep (pres. pl.)', 'smale': 'small', 'so': 'so', 'sondry': 'various, sundry', 'sonne': 'sun', 'sote': 'sweet (OE swōt)',
      'specially': 'especially', 'straunge': 'foreign (French estrange)', 'strondes': 'shores, strands (German Strand)', 'swete': 'sweet', 'swich': 'such (OE swilc, German solch)', 'tendre': 'tender',
      'than': 'then', 'that': 'that; (after whan) not translated; who (18)', 'the': 'the', 'they': 'they (from Norse)', 'to': 'to', 'vertu': 'power, strength (Latin virtus)',
      'veyne': 'vein (of a plant), sap channel', 'wende': 'go, travel (German wenden)', 'were': 'were', 'whan': 'when', 'which': 'which; of which vertu: by whose power', 'with': 'with',
      'y': 'prefix y- (OE ge-, German ge-): y-ronne “run”', 'yonge': 'young', 'yë': 'eye (two syllables: y-ë)', 'zephirus': 'Zephyrus, the west wind'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What does April do to the drought of March?', options: ['Pierces it to the root with showers', 'Makes it worse', 'Ends it with snow', 'Nothing'], answer: 0, explain: 'hath perced to the rote.' },
      { id: 'r2', type: 'mc', prompt: 'Why do the small birds sleep with open eyes?', options: ['Nature spurs them in their hearts', 'They are afraid', 'They are ill', 'It is too bright'], answer: 0, explain: 'So priketh hem nature in hir corages.' },
      { id: 'r3', type: 'mc', prompt: 'Where do the English pilgrims especially go?', options: ['To Canterbury', 'To Rome', 'To Jerusalem', 'To Santiago'], answer: 0, explain: 'to Caunterbury they wende.' },
      { id: 'r4', type: 'mc', prompt: 'Why do they visit the martyr?', options: ['He helped them when they were sick', 'To ask for money', 'To see the cathedral', 'For a festival'], answer: 0, explain: 'That hem hath holpen, whan that they were seke.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'The Great Vowel Shift happened:', options: ['after Chaucer, c. 1400–1700', 'before Chaucer', 'in Old English', 'in the 19th century'], answer: 0, explain: 'Hence Chaucer’s German-like vowels.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">eek</span> means:', options: ['also', 'eke', 'each', 'oak'], answer: 0, explain: 'German auch.' },
      { id: 't3', type: 'mc', prompt: 'In <span class="la">knight</span>, the k was:', options: ['pronounced', 'silent', 'a spelling for h', 'Norse'], answer: 0, explain: 'As in German Knecht.' },
      { id: 't4', type: 'mc', prompt: '“Ye olde shoppe”: <em>ye</em> was pronounced:', options: ['the', 'yee', 'you', 'yay'], answer: 0, explain: 'y stands for þ.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">That hem hath ___, whan that they were seke</span>', hint: 'helped (past part.)', answers: ['holpen'], full: 'That hem hath holpen, whan that they were seke', explain: 'German geholfen.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">to Caunterbury they ___</span>', hint: 'they go, travel', answers: ['wende', 'wenden'], full: 'to Caunterbury they wende', explain: 'GP 16.' },
      { id: 't7', type: 'translate', dir: 'me-en', source: 'Folk longen to goon on pilgrimages.', model: 'People long to go on pilgrimages.', accepted: ['people long to go on pilgrimages', 'folk long to go on pilgrimages', 'people want to go on pilgrimages', 'people desire to go on pilgrimages', 'people long to go on pilgrimage'] },
      { id: 't8', type: 'translate', dir: 'en-me', source: 'them (Chaucer’s form)', model: 'hem', accepted: ['hem'] },
      { id: 't9', type: 'mc', prompt: 'When was Thomas Becket murdered?', options: ['1170', '1066', '1381', '1400'], answer: 0, explain: 'Canonised 1173.' },
      { id: 't10', type: 'mc', prompt: 'Which manuscript does Skeat’s text mainly follow?', options: ['Ellesmere', 'Hengwrt', 'Cotton Nero A.x', 'The Nowell Codex'], answer: 0, explain: 'Corrected from others, with variants in the notes.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">seke</span> rhymes with <span class="la">seke</span> (17–18). The two words mean:', options: ['seek and sick', 'sick and sick', 'seek and seek', 'seek and sake'], answer: 0, explain: 'A rime riche.' }
    ]
  },

  reference: [
    { title: 'Chaucer’s vowels', headers: ['Spelling', 'Sound', 'German', 'Example'], rows: [['a', 'a / long a', 'Mann / Name', 'smale'], ['ee', 'long e', 'See', 'heeth'], ['i, y', 'long i', 'Liebe', 'melodye'], ['oo, o', 'long o', 'Rose', 'goon, sote'], ['ou, ow', 'long u', 'Uhr', 'shoures, fowles'], ['o (short)', 'short u', 'Mutter', 'sonne'], ['ay, ey', 'a + i', 'Mai', 'veyne']] },
    { title: 'Letters', headers: ['Letter', 'Name', 'Value'], rows: [['þ', 'thorn', 'th'], ['ȝ', 'yogh', 'y or ch'], ['ð', 'eth', 'th (gone by c. 1300)'], ['u / v', '', 'one letter'], ['i / j / y', '', 'one letter']] },
    { title: 'Old English to Chaucer', headers: ['Old English', 'Chaucer', 'Modern'], rows: [['ēac', 'eek', 'also (eke)'], ['hālgan', 'halwes', 'saints, shrines'], ['ge-', 'y-', '—'], ['-aþ (pl.)', '-en', '—'], ['scūr', 'shour', 'shower'], ['swilc', 'swich', 'such']] }
  ]
});
