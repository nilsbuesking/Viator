/*
 * Middle English — Lecture VII: reading a tale. gan + infinitive; pronouns fused with verbs (artow);
 * thou and ye in dialogue; imperatives and wishes. Reading: The Pardoner’s Tale, Group C 711–749
 * (the old man), in Skeat’s edition (1894), from the Project Gutenberg text. Pictures from Wikimedia Commons.
 */
Viator.addLecture('me', {
  id: 'me-07',
  number: 7,
  title: 'The Pardoner’s Tale',
  subtitle: 'Reading a tale: the rioters and the old man (Group C 711–749)',
  minutes: 60,

  intro: `
    <p>In his Prologue the Pardoner tells the pilgrims exactly how he cheats congregations, and that he always preaches on one text: <em>Radix malorum est cupiditas</em>, “greed is the root of all evils” (1 Timothy 6:10). Then he tells a story to prove it. In a time of plague, three young rioters drinking in a tavern hear that a “privy thief men call Death” has killed one of their friends. Drunk, they swear brotherhood and set out to kill Death.</p>
    <p>The reading is the heart of the tale: on the way they meet a mysterious old man, wrapped up except for his face, who cannot die. He knocks on the ground with his staff and asks his mother, the earth, to let him in. When they threaten him, he tells them where to find Death: under an oak at the end of a crooked path. There they find nearly eight bushels of gold florins, forget Death, and murder each other for the treasure.</p>
    <p>This lecture is about reading a whole scene. The grammar is the grammar of narrative and dialogue: the auxiliary <span class="la">gan</span> (<span class="la">gan loke</span> “looked”), pronouns fused to the verb (<span class="la">artow, livestow</span>), the shift between <span class="la">thou</span> and <span class="la">ye</span>, and imperatives and wishes.</p>
  `,

  background: [
    {
      title: 'Death in a time of plague',
      html: `
        <p>The tale is set during a <span class="la">pestilence</span>: the boy in the tavern says Death has killed a thousand “this pestilence”. The Black Death of 1348–49 killed perhaps a third to a half of England’s population, and the plague returned in 1361–62, 1369 and 1375, within Chaucer’s lifetime. Personifying Death as a thief with a spear, as the boy does, was common in sermons and in the art of the Dance of Death, where Death leads people of every rank away.</p>
        <p>The rioters take the personification literally: they think Death is a person who can be found and killed. The irony is that they find him exactly where the old man says, in the form of gold.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Hans_Holbein_d._J._-_The_Plowman_from_Dance_of_Death_-_WGA11613.jpg/960px-Hans_Holbein_d._J._-_The_Plowman_from_Dance_of_Death_-_WGA11613.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Hans_Holbein_d._J._-_The_Plowman_from_Dance_of_Death_-_WGA11613.jpg/500px-Hans_Holbein_d._J._-_The_Plowman_from_Dance_of_Death_-_WGA11613.jpg|https://upload.wikimedia.org/wikipedia/commons/3/3b/Hans_Holbein_d._J._-_The_Plowman_from_Dance_of_Death_-_WGA11613.jpg" alt="Woodcut of a skeleton driving the horses of a ploughman in a field"><figcaption>Hans Holbein the Younger, <em>The Ploughman</em>, from the <em>Dance of Death</em> woodcuts (designed c. 1523–26, published 1538): Death as everyone’s companion, a century and a half after Chaucer. <span class="credit">Woodcut, public domain · <a href="https://commons.wikimedia.org/wiki/File:Hans_Holbein_d._J._-_The_Plowman_from_Dance_of_Death_-_WGA11613.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Who is the old man?',
      html: `
        <p>No question about the tale has been asked more often. Readers have seen in him Death himself, Death’s messenger, the Wandering Jew condemned to live until the Last Judgement, old age, or simply an old man who longs to die and cannot. His knocking on the earth with the plea <span class="la">leve moder, leet me in</span> echoes the first elegy of the late Latin poet Maximianus (6th century), an identification made long ago and widely accepted.</p>
        <p>He is courteous where they are brutal: he quotes Leviticus 19:32 (“thou shalt rise up before the hoary head”) and wishes them God’s protection. Chaucer gives no explanation, and the tale is stronger for it.</p>
      `
    },
    {
      title: 'The story and its ending',
      html: `
        <p>The plot is very old: a tale of treasure-finders who kill each other is found in a Buddhist Jātaka, in Arabic and Persian collections, and in the Italian <em>Novellino</em>; folklorists list it as tale type ATU 763. In Chaucer the youngest is sent to town for bread and wine; the other two plan to stab him when he returns, and he poisons the wine to keep the gold for himself. All three die.</p>
        <p>The Pardoner then turns to the pilgrims and offers them his relics, beginning with the Host, “for he is most enveloped in sin”. The Host answers with an obscene insult, the Pardoner falls silent with rage, and the Knight makes them kiss and ride on. The tale against greed ends with its teller trying to sell salvation, which is the point.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">And on the ground, which is my modres gate,<br>I knokke with my staf, bothe erly and late,<br>And seye, “leve moder, leet me in!<br>Lo, how I vanish, flesh, and blood, and skin!”</p>
    <p>“And on the ground, which is my mother’s gate, I knock with my staff, both early and late, and say, ‘Dear mother, let me in! Look how I waste away, flesh and blood and skin!’” Pardoner’s Tale, Group C 729–732, Skeat’s text (1894).</p>
    <p><span class="la">leve</span> is Old English <span class="la">lēof</span> “dear”, German <em>lieb</em>: <span class="la">leve moder</span> is <em>liebe Mutter</em>. The earth as mother to whom the body returns is biblical and classical; the image of knocking at her gate is Chaucer’s debt to Maximianus.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>artow, livestow</strong>: two syllables and three: <em>AR-tou, LI-ves-tou</em>, with <span class="la">ow</span> = long u.</li>
      <li><strong>Inde</strong>: <em>IIN-də</em>, rhyming with <span class="la">finde</span>: long i in both.</li>
      <li><strong>caityf</strong>: French, <em>kai-TIIF</em>, rhyming with <span class="la">lyf</span> (long i).</li>
      <li><strong>knokke</strong>: k pronounced, as in German <em>Knochen</em>: <em>knok-kə</em>.</li>
      <li><strong>reed</strong> “advice”: long e, as German <em>Rede</em>; the same spelling as <span class="la">reed</span> “red”, a different word.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. gan + infinitive',
      html: `
        <p><span class="la">gan</span> is the past of <span class="la">ginnen</span> “begin”, but with an infinitive it usually means nothing more than the simple past: <span class="la">This olde man gan loke in his visage</span> “looked into his face”; <span class="la">That oon of hem gan callen to his knave</span> “called to his servant”.</p>
        <ul>
          <li>It is very common in verse, because it moves the main verb to the end of the line for the rhyme, and adds a syllable.</li>
          <li>Plural <span class="la">gonne</span>: <span class="la">they gonne … crye</span> “they cried”.</li>
          <li>Sometimes it does still mean “began”; the context decides.</li>
        </ul>
        <p>German has the same kind of empty auxiliary in colloquial speech: <em>er tat schauen</em> “he looked”. Middle English <span class="la">gan</span> died out in the 16th century, and periphrastic <em>do</em> (<em>he did look</em>) took over some of its work.</p>
      `
    },
    {
      title: '2. Pronouns fused with the verb: artow, livestow',
      html: `
        <p>In questions, where <span class="la">thou</span> follows the verb, it often fuses with it, and <span class="la">th</span> becomes <span class="la">t</span> after the s or t of the ending:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Chaucer</th><th>Full form</th><th>German (spoken)</th></tr></thead>
          <tbody>
            <tr><td class="la">artow</td><td class="la">art thou</td><td>bist du → biste</td></tr>
            <tr><td class="la">livestow</td><td class="la">livest thou</td><td>lebst du → lebste</td></tr>
            <tr><td class="la">wiltow</td><td class="la">wilt thou</td><td>willst du → willste</td></tr>
            <tr><td class="la">shaltow</td><td class="la">shalt thou</td><td>sollst du → sollste</td></tr>
            <tr><td class="la">hastow</td><td class="la">hast thou</td><td>hast du → haste</td></tr>
          </tbody>
        </table></div>
        <p>The mechanism is the same in both languages: an unstressed pronoun leaning on the verb before it. Only in English did spelling record it in serious literature.</p>
      `
    },
    {
      title: '3. thou and ye in dialogue',
      html: `
        <p>The old man and the rioters address each other in revealing ways (Lecture II):</p>
        <ul>
          <li>The old man is consistently polite: <span class="la">now, lordes, god yow see!</span>, <span class="la">sirs</span>, <span class="la">ye</span>, <span class="la">yow</span>.</li>
          <li>The proudest rioter answers with <span class="la">carl</span> “churl” and <span class="la">thou</span>: <span class="la">Why artow al forwrapped save thy face?</span> To use <span class="la">thou</span> to an older stranger is an insult, like an unwanted <em>du</em> in German.</li>
          <li>Later another rioter goes further: <span class="la">olde cherl … thou shalt nat so</span>, <span class="la">thou false theef</span>.</li>
        </ul>
        <p>The choice of pronoun characterises the speakers as much as the words do. Reading Chaucer’s dialogue, always ask who says <span class="la">thou</span> to whom.</p>
      `
    },
    {
      title: '4. Imperatives and wishes',
      html: `
        <ul>
          <li><strong>Singular imperative</strong>: the bare stem: <span class="la">leet me in!</span>, <span class="la">Go bet</span>, <span class="la">Tel wher he is</span>.</li>
          <li><strong>Plural (and polite) imperative</strong> in <span class="la">-eth</span>: <span class="la">Herkneth</span> “listen”, <span class="la">Beth redy</span> “be ready”, <span class="la">Leveth your othes</span> “give up your oaths”. Negative: <span class="la">Ne dooth un-to an old man noon harm</span> “do no harm to an old man”.</li>
          <li><strong>Wishes</strong> with the present subjunctive (Lecture VI): <span class="la">god yow see</span> “God protect you”, <span class="la">god be with yow</span>, <span class="la">God save yow</span>.</li>
          <li><strong>lat + infinitive</strong> for “let us”: <span class="la">Lat ech of us holde up his hond</span>, German <em>lasst uns</em>.</li>
        </ul>
        <p>The plural imperative in <span class="la">-eth</span> works like German <em>-t</em> in <em>hört! seid bereit!</em>: in both languages the plural imperative has the ending of the present plural, Old English <span class="la">-aþ</span>, German the old second person plural <em>-t</em>.</p>
      `
    }
  ],

  vocab: [
    { id: 'deeth', head: 'deeth', la: 'deeth', pos: 'noun', en: 'death; the plague', note: 'OE dēaþ, German Tod. In the tale personified, as in the Dance of Death.' },
    { id: 'moder', head: 'moder', la: 'moder', pos: 'noun', en: 'mother', note: 'OE mōdor, German Mutter. Genitive modres; in phrases also moder (no ending).' },
    { id: 'staf', head: 'staf', la: 'staf, pl. staves', pos: 'noun', en: 'staff, walking stick', note: 'OE stæf, German Stab (Buchstabe).' },
    { id: 'reed', head: 'reed', la: 'reed', pos: 'noun', en: 'advice, counsel', note: 'OE rǣd, German Rat (Old English Lecture X). I yeve yow reed: I advise you.' },
    { id: 'youthe', head: 'youthe', la: 'youthe', pos: 'noun', en: 'youth', note: 'OE geoguþ (Old English Lecture IV), German Jugend.' },
    { id: 'visage', head: 'visage', la: 'visage', pos: 'noun', en: 'face', note: 'French visage; German Visage (colloquial, mocking) is the same loan.' },
    { id: 'myle', head: 'myle', la: 'myle, pl. myle', pos: 'noun', en: 'mile', note: 'OE mīl from Latin milia (passuum); German Meile.' },
    { id: 'tresor', head: 'tresor', la: 'tresor', pos: 'noun', en: 'treasure', note: 'French trésor; German Tresor (a safe) is the same word.' },
    { id: 'abyden', head: 'abyden', la: 'abyden; abood; abiden', pos: 'verb, strong', en: 'remain, wait; live on', note: 'OE ābīdan; archaic German beiten “wait” is related.' },
    { id: 'knokken', head: 'knokken', la: 'knokken; knokked', pos: 'verb, weak', en: 'knock', note: 'OE cnocian; German knacken is related.' },
    { id: 'chaungen', head: 'chaungen', la: 'chaungen; chaunged', pos: 'verb, weak', en: 'change, exchange', note: 'French changer.' },
    { id: 'greten', head: 'greten', la: 'greten; grette', pos: 'verb, weak', en: 'greet', note: 'OE grētan, German grüßen.' },
    { id: 'meten', head: 'meten', la: 'meten; mette', pos: 'verb, weak', en: 'meet', note: 'OE mētan. Different from meten “dream” (me mette, Lecture VI).' },
    { id: 'ginnen', head: 'ginnen', la: 'ginnen; gan, gonne', pos: 'verb, strong', en: 'begin; (with infinitive) did', note: 'gan loke: looked. OE onginnan.' },
    { id: 'leve', head: 'leve', la: 'leef, leve', pos: 'adjective', en: 'dear, beloved', note: 'OE lēof, German lieb: leve moder = liebe Mutter.' },
    { id: 'restelees', head: 'restelees', la: 'restelees', pos: 'adjective', en: 'restless', note: 'OE ræst + -lēas, German rastlos.' },
    { id: 'hoor', head: 'hoor', la: 'hoor', pos: 'adjective', en: 'grey-haired, hoary', note: 'OE hār; German hehr (originally “grey-haired, venerable”); hoar-frost.' },
    { id: 'carl', head: 'carl', la: 'carl', pos: 'noun', en: 'fellow, churl (contemptuous)', note: 'Old Norse karl “man”; English churl is the native form (German Kerl).' }
  ],

  grammarCards: [
    { id: 'me7-gan', front: 'gan + infinitive (gan loke)', back: 'Usually just the past: “looked”; sometimes “began to”' },
    { id: 'me7-tat', front: 'German parallel to gan loke', back: 'colloquial er tat schauen' },
    { id: 'me7-artow', front: 'artow, livestow', back: 'art thou, livest thou (German biste, lebste)' },
    { id: 'me7-wiltow', front: 'wiltow, shaltow, hastow', back: 'wilt thou, shalt thou, hast thou' },
    { id: 'me7-thou', front: 'The rioter’s thou to the old man', back: 'An insult: rudeness to an older stranger' },
    { id: 'me7-ye', front: 'The old man’s ye and yow', back: 'Polite address' },
    { id: 'me7-impsg', front: 'Singular imperative', back: 'Bare stem: leet me in! Tel wher he is!' },
    { id: 'me7-imppl', front: 'Plural imperative', back: '-eth: Herkneth! Beth redy! (German hört! seid!)' },
    { id: 'me7-wish', front: 'god yow see', back: 'God protect you (subjunctive of wish)' },
    { id: 'me7-lat', front: 'Lat ech of us …', back: 'Let each of us … (German lasst uns)' },
    { id: 'me7-radix', front: 'The Pardoner’s text', back: 'Radix malorum est cupiditas (1 Timothy 6:10)' },
    { id: 'me7-leve', front: 'leve moder, leet me in!', back: 'Dear mother, let me in! (C 731)' },
    { id: 'me7-ook', front: 'See ye that ook? right ther ye shul him finde', back: 'Do you see that oak? Right there you will find him (C 765)' },
    { id: 'me7-type', front: 'ATU 763', back: 'Tale type: treasure-finders who murder one another' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">This olde man gan loke in his visage</span> means:', options: ['This old man looked into his face', 'This old man began a long look', 'This old man was looking for his face', 'This old man went to look'], answer: 0, explain: 'gan + infinitive = simple past.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">artow</span> =', options: ['art thou', 'are we', 'art two', 'are they'], answer: 0, explain: 'Pronoun fused with the verb.' },
    { id: 'e3', type: 'mc', prompt: 'Why is the rioter’s <span class="la">thou</span> rude?', options: ['He uses it to an older stranger', 'It is plural', 'It is French', 'It is a dialect form'], answer: 0, explain: 'The polite form would be ye.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Herkneth</span> is:', options: ['plural imperative', 'singular imperative', '3rd sg. present', 'past'], answer: 0, explain: '-eth, German hört!' },
    { id: 'e5', type: 'mc', prompt: 'What do the rioters set out to do?', options: ['Kill Death', 'Find gold', 'Go on pilgrimage', 'Find the old man'], answer: 0, explain: 'They swear brotherhood to slay Death.' },
    { id: 'e6', type: 'mc', prompt: 'Why does the old man still live?', options: ['No one will exchange his youth for the old man’s age, and Death will not take him', 'He is immortal by choice', 'He has found the gold', 'He is a saint'], answer: 0, explain: 'C 721–727.' },
    { id: 'e7', type: 'mc', prompt: 'Where does the old man say they will find Death?', options: ['Under an oak at the end of a crooked path', 'In the tavern', 'In the village church', 'In the plague pit'], answer: 0, explain: 'See ye that ook?' },
    { id: 'e8', type: 'mc', prompt: 'What do they find there?', options: ['Nearly eight bushels of gold florins', 'A corpse', 'Death with a spear', 'Nothing'], answer: 0, explain: 'And so they forget Death.' },
    { id: 'e9', type: 'match', prompt: 'Match the fused forms.', pairs: [
      ['artow', 'art thou'], ['livestow', 'livest thou'], ['wiltow', 'wilt thou'], ['shaltow', 'shalt thou'], ['hastow', 'hast thou']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the words to their meaning.', pairs: [
      ['leve', 'dear'], ['reed', 'advice'], ['carl', 'churl'], ['caityf', 'wretch'], ['welked', 'withered']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">This olde man ___ loke in his visage</span>', hint: 'did (auxiliary)', answers: ['gan'], full: 'This olde man gan loke in his visage', explain: 'C 720.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Why ___ al forwrapped save thy face?</span>', hint: 'art thou (fused)', answers: ['artow'], full: 'Why artow al forwrapped save thy face?', explain: 'C 718.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">leve moder, ___ me in!</span>', hint: 'let (imperative)', answers: ['leet', 'let'], full: 'leve moder, leet me in!', explain: 'C 731.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">I moot go ___ as I have to go</span>', hint: 'thither', answers: ['thider', 'thither'], full: 'I moot go thider as I have to go', explain: 'C 749.' },
    { id: 'e15', type: 'paradigm', prompt: 'Imperatives of <span class="la">herknen</span> and <span class="la">been</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'listen!', answers: ['herkne|herke', 'herkneth'] },
      { label: 'be!', answers: ['be', 'beth|beeth'] },
      { label: 'tell!', answers: ['tel|telle', 'telleth'] },
      { label: 'go!', answers: ['go', 'gooth|goth'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Fused forms of verb + thou.', headers: ['Fused', 'Full'], rows: [
      { label: 'are you', answers: ['artow', 'art thou'] },
      { label: 'do you live', answers: ['livestow', 'livest thou'] },
      { label: 'will you', answers: ['wiltow', 'wilt thou'] },
      { label: 'have you', answers: ['hastow', 'hast thou'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the modern translation in order.', source: 'An old man and a povre with hem mette', tokens: ['An old', 'and poor man', 'met', 'them'], explain: 'C 713.' },
    { id: 'e18', type: 'translate', dir: 'me-en', source: 'Why livestow so longe in so greet age?', model: 'Why do you live so long, to such a great age?', accepted: ['why do you live so long in such great age', 'why do you live so long to such a great age', 'why do you live so long in so great an age', 'why livest thou so long in so great age', 'why do you live so long in such old age', 'why have you lived so long to such a great age', 'why do you live so long in such a great age'] },
    { id: 'e19', type: 'translate', dir: 'me-en', source: 'God be with yow.', model: 'God be with you.', accepted: ['god be with you', 'may god be with you'] },
    { id: 'e20', type: 'translate', dir: 'en-me', source: 'listen! (plural)', model: 'herkneth', accepted: ['herkneth'] },
    { id: 'e21', type: 'translate', dir: 'en-me', source: 'dear mother', model: 'leve moder', accepted: ['leve moder'] },
    { id: 'e22', type: 'mc', prompt: 'Whose Latin elegy is echoed in the old man’s knocking on the earth?', options: ['Maximianus', 'Virgil', 'Ovid', 'Boethius'], answer: 0, explain: 'His first elegy (6th century).' },
    { id: 'e23', type: 'mc', prompt: 'How do the three rioters die?', options: ['Two stab the third, then drink his poisoned wine', 'The old man kills them', 'Of the plague', 'They are hanged'], answer: 0, explain: 'All three die for the gold.' }
  ],

  reading: {
    title: 'The Pardoner’s Tale, C 711–749',
    note: 'Authentic text: The Pardoner’s Tale, Group C 711–749 (the meeting with the old man), in Skeat’s edition (The Complete Works of Geoffrey Chaucer, vol. 4, Oxford 1894), from the Project Gutenberg transcription. In the lines before, the three rioters have sworn to kill Death; after them, the old man directs them to the oak. Skeat notes E. Hn. than that in 746. Tap any word.',
    text: 'Whan they han goon nat fully half a myle,\nRight as they wolde han troden over a style,\nAn old man and a povre with hem mette.\nThis olde man ful mekely hem grette,\nAnd seyde thus, ‘now, lordes, god yow see!’\nThe proudest of thise ryotoures three\nAnswerde agayn, ‘what? carl, with sory grace,\nWhy artow al forwrapped save thy face?\nWhy livestow so longe in so greet age?’\nThis olde man gan loke in his visage,\nAnd seyde thus, ‘for I ne can nat finde\nA man, though that I walked in‑to Inde,\nNeither in citee nor in no village,\nThat wolde chaunge his youthe for myn age;\nAnd therfore moot I han myn age stille,\nAs longe time as it is goddes wille.\nNe deeth, allas! ne wol nat han my lyf;\nThus walke I, lyk a restelees caityf,\nAnd on the ground, which is my modres gate,\nI knokke with my staf, bothe erly and late,\nAnd seye, “leve moder, leet me in!\nLo, how I vanish, flesh, and blood, and skin!\nAllas! whan shul my bones been at reste?\nModer, with yow wolde I chaunge my cheste,\nThat in my chambre longe tyme hath be,\nYe! for an heyre clout to wrappe me!”\nBut yet to me she wol nat do that grace,\nFor which ful pale and welked is my face.\nBut, sirs, to yow it is no curteisye\nTo speken to an old man vileinye,\nBut he trespasse in worde, or elles in dede.\nIn holy writ ye may your‑self wel rede,\n“Agayns an old man, hoor upon his heed,\nYe sholde aryse;” wherfor I yeve yow reed,\nNe dooth un‑to an old man noon harm now,\nNa‑more than ye wolde men dide to yow\nIn age, if that ye so longe abyde;\nAnd god be with yow, wher ye go or ryde.\nI moot go thider as I have to go.’',
    translations: [
      { label: 'Modern English', text: 'When they had gone not fully half a mile, just as they were about to step over a stile, an old and poor man met them. This old man greeted them very meekly and said, “Now, lords, God protect you!” The proudest of these three rioters answered back: “What, churl, bad luck to you! Why are you all wrapped up except your face? Why do you live so long, to such a great age?” This old man looked into his face and said: “Because I cannot find a man, though I walked to India, neither in city nor in village, who would exchange his youth for my age; and therefore I must keep my age as long as it is God’s will. Not even Death, alas, will take my life. So I walk, like a restless wretch, and on the ground, which is my mother’s gate, I knock with my staff both early and late and say, ‘Dear mother, let me in! Look how I waste away, flesh and blood and skin! Alas, when shall my bones be at rest? Mother, I would exchange my chest with you, that has stood in my room a long time, yes, for a haircloth to wrap me in!’ But still she will not do me that favour, which is why my face is very pale and withered. But, sirs, it is no courtesy in you to speak rudely to an old man, unless he offends in word or deed. In holy scripture you may well read for yourselves: ‘Before an old man, hoary on his head, you should rise.’ Therefore I give you this advice: do no harm to an old man now, no more than you would want others to do to you in age, if you live so long. And God be with you, whether you walk or ride! I must go where I have to go.”' },
      { label: 'German translation', text: 'Als sie noch nicht ganz eine halbe Meile gegangen waren, gerade als sie über einen Zauntritt steigen wollten, begegnete ihnen ein alter und armer Mann. Dieser alte Mann grüßte sie sehr demütig und sagte: „Nun, ihr Herren, Gott behüte euch!“ Der Stolzeste dieser drei Zecher antwortete: „Was, Kerl, Unglück über dich! Warum bist du ganz eingehüllt bis aufs Gesicht? Warum lebst du so lange in so hohem Alter?“ Dieser alte Mann sah ihm ins Gesicht und sagte: „Weil ich keinen Menschen finden kann, und ginge ich bis nach Indien, weder in der Stadt noch in einem Dorf, der seine Jugend gegen mein Alter tauschen wollte; und darum muss ich mein Alter behalten, so lange es Gottes Wille ist. Auch der Tod, ach, will mein Leben nicht nehmen. So wandere ich wie ein ruheloser Elender, und auf den Boden, der die Pforte meiner Mutter ist, klopfe ich mit meinem Stab früh und spät und sage: ‚Liebe Mutter, lass mich ein! Sieh, wie ich schwinde, Fleisch und Blut und Haut! Ach, wann sollen meine Knochen zur Ruhe kommen? Mutter, mit dir wollte ich meine Truhe tauschen, die lange in meiner Kammer gestanden hat, ja, gegen ein härenes Tuch, mich darein zu hüllen!‘ Doch noch will sie mir diese Gnade nicht erweisen, weshalb mein Gesicht ganz bleich und welk ist. Doch, ihr Herren, es ist keine Höflichkeit von euch, zu einem alten Mann grob zu sprechen, es sei denn, er vergeht sich in Wort oder Tat. In der Heiligen Schrift könnt ihr selbst lesen: ‚Vor einem alten Mann mit grauem Haupt sollt ihr aufstehen.‘ Darum gebe ich euch den Rat: tut einem alten Mann jetzt kein Leid, nicht mehr, als ihr wolltet, dass man euch im Alter täte, wenn ihr so lange lebt. Und Gott sei mit euch, ob ihr geht oder reitet! Ich muss dahin gehen, wohin ich zu gehen habe.“' }
    ],
    notes: [
      { ref: 'Right as they wolde han troden over a style', html: '<span class="la">wolde han troden</span>: “were about to step”, a past with <span class="la">wolde</span> + perfect infinitive.' },
      { ref: 'An old man and a povre with hem mette', html: '<span class="la">An old man and a povre</span>: “an old and poor man”, a French-style word order with the second adjective after the noun.' },
      { ref: 'And seyde thus, ‘now, lordes, god yow see!’', html: 'Polite address (<span class="la">lordes, yow</span>) and a wish with the subjunctive <span class="la">see</span> “protect”.' },
      { ref: 'what? carl, with sory grace', html: 'Contemptuous: <span class="la">carl</span> (Norse) “churl”; <span class="la">with sory grace</span> “bad luck to you”.' },
      { ref: 'Why artow al forwrapped save thy face?', html: '<span class="la">artow</span> = <span class="la">art thou</span>; the rioter says <span class="la">thou</span> to an old stranger.' },
      { ref: 'This olde man gan loke in his visage', html: '<span class="la">gan loke</span> “looked”: the empty auxiliary. <span class="la">olde</span> weak after <span class="la">This</span>.' },
      { ref: 'for I ne can nat finde / A man, though that I walked in‑to Inde', html: '<span class="la">ne … nat</span>: double negative. <span class="la">walked</span> subjunctive in sense: “even if I walked to India”.' },
      { ref: 'Ne deeth, allas! ne wol nat han my lyf', html: '“Not even Death will take my life”: three negatives.' },
      { ref: 'Moder, with yow wolde I chaunge my cheste', html: 'He addresses his mother with the respectful <span class="la">yow</span>. The chest holds his possessions; he would give them all for a shroud of haircloth.' },
      { ref: 'But he trespasse in worde, or elles in dede', html: '<span class="la">But</span> “unless”, with the subjunctive <span class="la">trespasse</span>.' },
      { ref: '“Agayns an old man, hoor upon his heed, / Ye sholde aryse;”', html: 'Leviticus 19:32: “Thou shalt rise up before the hoary head.”' },
      { ref: 'I moot go thider as I have to go', html: '<span class="la">moot</span> “must”; the line is deliberately enigmatic.' }
    ],
    glosses: {
      'a': 'a', 'abyde': 'live, remain', 'agayn': 'back, in reply', 'agayns': 'before, in the presence of', 'age': 'age, old age', 'al': 'all; entirely',
      'allas': 'alas', 'an': 'a', 'and': 'and', 'answerde': 'answered', 'artow': 'art thou, are you', 'aryse': 'rise, stand up',
      'as': 'as; as longe … as: as long as', 'at': 'at', 'be': 'been', 'been': 'be', 'blood': 'blood', 'bones': 'bones',
      'bothe': 'both', 'but': 'but; but he trespasse: unless he offends', 'caityf': 'wretch, captive (French caitif)', 'can': 'can', 'carl': 'fellow, churl (Old Norse karl)', 'chambre': 'room',
      'chaunge': 'exchange', 'cheste': 'chest (for his belongings)', 'citee': 'city', 'clout': 'cloth; heyre clout: haircloth (for a shroud)', 'curteisye': 'courtesy', 'dede': 'deed',
      'deeth': 'death', 'dide': 'did (subj.)', 'do': 'do; do … grace: grant … favour', 'dooth': 'do (imperative pl.)', 'elles': 'else, otherwise', 'erly': 'early',
      'face': 'face', 'finde': 'find', 'flesh': 'flesh', 'for': 'for; because', 'forwrapped': 'wrapped up', 'ful': 'very',
      'fully': 'fully', 'gan': 'did (gan loke: looked)', 'gate': 'gate, door', 'go': 'go', 'god': 'God; god yow see: God protect you', 'goddes': 'God’s',
      'goon': 'gone', 'grace': 'favour; with sory grace: bad luck to you', 'greet': 'great', 'grette': 'greeted', 'ground': 'ground, earth', 'half': 'half',
      'han': 'have', 'harm': 'harm', 'hath': 'has', 'have': 'have', 'he': 'he', 'heed': 'head',
      'hem': 'them', 'heyre': 'of haircloth', 'his': 'his', 'holy': 'holy; holy writ: Scripture', 'hoor': 'grey-haired, hoary', 'how': 'how',
      'i': 'I', 'if': 'if', 'in': 'in; in-to: to', 'inde': 'India', 'is': 'is', 'it': 'it',
      'knokke': 'knock', 'late': 'late', 'leet': 'let', 'leve': 'dear (OE lēof, German lieb)', 'livestow': 'livest thou, do you live', 'lo': 'look!',
      'loke': 'look', 'longe': 'long', 'lordes': 'lords, sirs', 'lyf': 'life', 'lyk': 'like', 'man': 'man',
      'may': 'may, can', 'me': 'me', 'mekely': 'meekly', 'men': 'people, others', 'mette': 'met', 'moder': 'mother',
      'modres': 'mother’s', 'moot': 'must', 'more': 'more; na-more: no more', 'my': 'my', 'myle': 'mile', 'myn': 'my (before a vowel)',
      'na': 'na-more: no more', 'nat': 'not', 'ne': 'not; neither', 'neither': 'neither', 'no': 'no', 'noon': 'no',
      'nor': 'nor', 'now': 'now', 'of': 'of', 'old': 'old', 'olde': 'old (weak)', 'on': 'on',
      'or': 'or', 'over': 'over', 'pale': 'pale', 'povre': 'poor', 'proudest': 'proudest', 'rede': 'read',
      'reed': 'advice, counsel (German Rat)', 'reste': 'rest', 'restelees': 'restless', 'right': 'just, exactly; right as: just as', 'ryde': 'ride; go or ryde: walk or ride', 'ryotoures': 'rioters, revellers',
      'save': 'except', 'see': 'see; protect', 'self': 'your-self: yourselves', 'seyde': 'said', 'seye': 'say', 'she': 'she (the earth)',
      'sholde': 'should', 'shul': 'shall', 'sirs': 'sirs, gentlemen', 'skin': 'skin (Norse)', 'so': 'so', 'sory': 'sorry, wretched; with sory grace: bad luck to you',
      'speken': 'speak', 'staf': 'staff, walking stick', 'stille': 'still, always', 'style': 'stile', 'than': 'than', 'that': 'that; who',
      'the': 'the', 'therfore': 'therefore', 'they': 'they', 'thider': 'thither, to that place', 'this': 'this', 'thise': 'these',
      'though': 'though, even if', 'three': 'three', 'thus': 'thus', 'thy': 'thy, your', 'time': 'time', 'to': 'to',
      'trespasse': 'offend, do wrong (subj.)', 'troden': 'stepped (past part. of treden); wolde han troden: were about to step', 'tyme': 'time', 'un': 'un-to: to', 'upon': 'upon', 'vanish': 'waste away',
      'vileinye': 'rudeness, insult', 'village': 'village', 'visage': 'face', 'walke': 'walk, wander', 'walked': 'walked, should walk', 'welked': 'withered',
      'wel': 'well', 'whan': 'when', 'what': 'what!', 'wher': 'whether; wher ye go or ryde: whether you walk or ride', 'wherfor': 'therefore', 'which': 'which',
      'why': 'why', 'wille': 'will', 'with': 'with', 'wol': 'will, wants to', 'wolde': 'would; wanted to', 'worde': 'word',
      'wrappe': 'wrap', 'writ': 'scripture; holy writ', 'ye': 'you (pl.)', 'yet': 'yet', 'yeve': 'give; yeve yow reed: give you advice', 'your': 'your',
      'youthe': 'youth', 'yow': 'you (polite or plural)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'How does the old man greet the rioters?', options: ['Very meekly, wishing them God’s protection', 'Rudely', 'He ignores them', 'He warns them of Death'], answer: 0, explain: 'god yow see!' },
      { id: 'r2', type: 'mc', prompt: 'What does the old man knock on?', options: ['The ground, his mother’s gate', 'A church door', 'The tavern door', 'A tree'], answer: 0, explain: 'C 729–730.' },
      { id: 'r3', type: 'mc', prompt: 'What would he exchange his chest for?', options: ['A haircloth to wrap himself in', 'Youth', 'Gold', 'A horse'], answer: 0, explain: 'an heyre clout to wrappe me.' },
      { id: 'r4', type: 'mc', prompt: 'Which book does he quote?', options: ['Holy Scripture (Leviticus)', 'The Romance of the Rose', 'Boethius', 'The Golden Legend'], answer: 0, explain: 'In holy writ ye may your-self wel rede.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Plural of <span class="la">gan</span> (+ infinitive):', options: ['gonne', 'ganen', 'gans', 'ginnen'], answer: 0, explain: 'they gonne crye.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">hastow</span> =', options: ['hast thou', 'has two', 'haste', 'have we'], answer: 0, explain: 'Fused pronoun.' },
      { id: 't3', type: 'mc', prompt: 'The Pardoner’s text is:', options: ['Radix malorum est cupiditas', 'Amor vincit omnia', 'Memento mori', 'Vanitas vanitatum'], answer: 0, explain: '1 Timothy 6:10.' },
      { id: 't4', type: 'mc', prompt: '<span class="la">Lat ech of us holde up his hond</span> corresponds to German:', options: ['Lasst jeden von uns die Hand heben', 'Lass jeden gehen', 'Jeder halte sich fest', 'Lass uns alle gehen'], answer: 0, explain: 'lat + infinitive.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Thus walke I, lyk a restelees ___</span>', hint: 'wretch (French)', answers: ['caityf', 'caitif'], full: 'Thus walke I, lyk a restelees caityf', explain: 'C 728.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">I knokke with my ___, bothe erly and late</span>', hint: 'staff', answers: ['staf'], full: 'I knokke with my staf, bothe erly and late', explain: 'C 730.' },
      { id: 't7', type: 'translate', dir: 'me-en', source: 'I moot go thider as I have to go.', model: 'I must go where I have to go.', accepted: ['i must go where i have to go', 'i must go there where i have to go', 'i must go thither as i have to go', 'i must go where i must go', 'i must go where i need to go'] },
      { id: 't8', type: 'translate', dir: 'en-me', source: 'art thou (fused form)', model: 'artow', accepted: ['artow'] },
      { id: 't9', type: 'mc', prompt: 'In which years did plague return in Chaucer’s lifetime?', options: ['1361–62, 1369, 1375', '1066, 1100', '1450, 1485', 'It never returned'], answer: 0, explain: 'After the Black Death of 1348–49.' },
      { id: 't10', type: 'mc', prompt: 'How does the Pardoner end his performance?', options: ['He tries to sell relics to the pilgrims', 'He confesses and repents', 'He leaves the company', 'He sings'], answer: 0, explain: 'Starting with the Host.' },
      { id: 't11', type: 'mc', prompt: 'Who reconciles the Pardoner and the Host?', options: ['The Knight', 'The Wife of Bath', 'The Prioress', 'The narrator'], answer: 0, explain: 'He makes them kiss.' }
    ]
  },

  reference: [
    { title: 'Fused pronouns', headers: ['Fused', 'Full', 'German (spoken)'], rows: [['artow', 'art thou', 'biste'], ['livestow', 'livest thou', 'lebste'], ['wiltow', 'wilt thou', 'willste'], ['shaltow', 'shalt thou', 'sollste'], ['hastow', 'hast thou', 'haste']] },
    { title: 'Imperatives and wishes', headers: ['Form', 'Example', 'Meaning'], rows: [['singular', 'leet me in!', 'let me in!'], ['plural', 'Herkneth! Beth redy!', 'listen! be ready!'], ['negative', 'Ne dooth … noon harm', 'do no harm'], ['lat + inf.', 'Lat ech of us …', 'let each of us …'], ['wish', 'god yow see', 'God protect you']] }
  ]
});
