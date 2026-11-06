/*
 * Middle English — Lecture II: nouns (plurals, genitive, loss of case and gender); personal pronouns (thou/ye,
 * she, they/hem/hir); impersonal me thinketh. Reading: General Prologue 19–42 (Group A) in Skeat’s edition
 * (1894), from the Project Gutenberg text (sources/chaucer-skeat-1894-canterbury-tales.txt).
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('me', {
  id: 'me-02',
  number: 2,
  title: 'At the Tabard',
  subtitle: 'Nouns and pronouns (she, they); from Old to Middle English; General Prologue 19–42',
  minutes: 60,

  intro: `
    <p>After the great opening sentence, the narrator steps in as “I”. He is staying at the Tabard inn in Southwark, ready to ride to Canterbury, when a company of twenty-nine pilgrims arrives. By nightfall he has talked to them all and joined them. Before going further, he says, he will describe each of them: their condition, rank and dress. The rest of the General Prologue is that portrait gallery.</p>
    <p>The grammar of this lecture is the noun and the pronoun, where the distance from Old English is greatest. Old English nouns had four cases, three genders and a dozen declensions; Chaucer’s nouns have a plural and a genitive, both mostly in <span class="la">-es</span>, and no grammatical gender at all. The pronouns, by contrast, are still close to the old system, except for two newcomers: <span class="la">she</span>, whose origin is disputed, and <span class="la">they</span>, borrowed from the Vikings.</p>
    <p>You will also meet the polite <span class="la">ye</span>: the narrator addresses his audience as <span class="la">yow</span>, exactly as a German speaker once said <em>Ihr</em> to a superior.</p>
  `,

  background: [
    {
      title: 'Southwark and the Tabard',
      html: `
        <p>Southwark, at the south end of London Bridge, lay outside the jurisdiction of the City: a district of inns, prisons, brothels and the town houses of bishops, and the natural starting point for the road to Canterbury. The Tabard was a real inn, owned by the abbots of Hyde; its name came from its sign, a tabard (a short sleeveless coat). A Henry Bailly, innkeeper, sat for Southwark in Parliament in the 1370s and 1380s, and the Host of the <em>Tales</em> is called Harry Bailly; whether Chaucer meant his readers to recognise him is a natural guess but not provable.</p>
        <p>The inn burned in the Southwark fire of 1676, was rebuilt (for a time under the name of the Talbot) and pulled down in 1873. Pictures of it therefore show the later building, not Chaucer’s.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/The_Old_Tabard_Inn,_Southwark._South_London_(1912).jpg/960px-The_Old_Tabard_Inn,_Southwark._South_London_(1912).jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/The_Old_Tabard_Inn,_Southwark._South_London_(1912).jpg/500px-The_Old_Tabard_Inn,_Southwark._South_London_(1912).jpg|https://upload.wikimedia.org/wikipedia/commons/e/e7/The_Old_Tabard_Inn,_Southwark._South_London_(1912).jpg" alt="Old illustration of a galleried inn yard in Southwark"><figcaption>The Tabard inn, Southwark, in an illustration published in 1912. The building shown is the one rebuilt after the fire of 1676, not the inn of Chaucer’s day; it was pulled down in 1873. <span class="credit">Illustration, 1912; licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:The_Old_Tabard_Inn,_Southwark._South_London_(1912).jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'How many pilgrims?',
      html: `
        <p>The narrator says <span class="la">wel nyne and twenty</span>, “a full twenty-nine”. Counting the portraits that follow gives a different figure: the Prioress is accompanied by another nun and “preestes three”, and depending on how one counts these and the narrator himself, the total is thirty or thirty-one, with the Host and (later) a Canon’s Yeoman joining on the road. Scholars have read the discrepancy as carelessness, as a later revision, or as a deliberate sign of an imperfect narrator. It cannot be settled.</p>
      `
    },
    {
      title: 'Condition, degree and array',
      html: `
        <p>The narrator promises <span class="la">al the condicioun / Of ech of hem … / And whiche they weren, and of what degree; / And eek in what array</span>: character, social rank and dress. Medieval writers had a ready-made scheme for describing society, the three estates (those who pray, those who fight, those who work), and a long tradition of <strong>estates satire</strong> that criticised each profession in turn. Jill Mann (1973) showed how closely the General Prologue follows that tradition, and how it differs: Chaucer rarely condemns outright, and leaves his readers to draw the moral from what the cheerful narrator reports.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">And shortly, whan the sonne was to reste,<br>So hadde I spoken with hem everichon,<br>That I was of hir felawshipe anon</p>
    <p>“And in short, when the sun had gone to rest, I had spoken with every one of them, so that I was soon one of their company.” General Prologue 30–32, Skeat’s text (1894).</p>
    <p><span class="la">hem</span> “them” and <span class="la">hir</span> “their” are the native Old English forms (<span class="la">heom, hiera</span>); the subject form is already Norse <span class="la">they</span>. <span class="la">felawshipe</span> is a hybrid: Old Norse <em>félagi</em> “partner” (one who lays down money, <em>fé</em>, in a joint venture) with the English suffix <span class="la">-shipe</span>, German <em>-schaft</em>.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>Southwerk</strong>: “Suuth-werk”, with the long u of <span class="la">ou</span>; the modern “Sutherk” is a later contraction.</li>
      <li><strong>hostelrye, companye</strong>: final <span class="la">-ye</span> = long i + schwa, French stress at the end: <em>hos-tel-RII-ə</em>.</li>
      <li><strong>knight</strong>: <em>knicht</em>, with k and the German ich-sound, as in German <em>Knecht</em>.</li>
      <li><strong>condicioun, resoun</strong>: French words, stressed on the last syllable, with long u: <em>re-SUUN</em>.</li>
      <li><strong>thinketh</strong>: th as in English <em>thin</em>; the ending <span class="la">-eth</span> is a full syllable.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. Nouns: plural and genitive',
      html: `
        <p>Of the many Old English declensions, one type won: the strong masculine plural <span class="la">-as</span> (Old English Lecture II, <span class="la">stānas</span>) became Middle English <span class="la">-es</span> and spread to almost all nouns: <span class="la">chambres, stables, pilgrims</span>. The genitive singular <span class="la">-es</span> survived in the same way (<span class="la">shires ende</span>, Lecture I). The other old patterns survive only in small groups:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Type</th><th>Examples</th><th>Old English</th><th>German</th></tr></thead>
          <tbody>
            <tr><td><span class="la">-es</span> (general)</td><td class="la">chambre, chambres</td><td>-as</td><td>—</td></tr>
            <tr><td><span class="la">-en</span> (weak)</td><td class="la">yë, yën; oxe, oxen; fo, foon</td><td>-an</td><td><em>Augen, Ochsen</em></td></tr>
            <tr><td>umlaut</td><td class="la">foot, feet; man, men; goos, gees</td><td>fōt, fēt</td><td><em>Fuß, Füße</em></td></tr>
            <tr><td>no ending</td><td class="la">yeer, yeer; hors, hors; sheep, sheep</td><td>neuter -∅</td><td><em>zwölf Jahr</em> (old)</td></tr>
            <tr><td>-ren</td><td class="la">child, children</td><td>cildru</td><td><em>Kinder</em></td></tr>
          </tbody>
        </table></div>
        <p>Chaucer still says <span class="la">twenty yeer</span> and <span class="la">his hors</span> for several horses; modern English kept only <em>sheep, deer</em> and <em>oxen, children</em> of these.</p>
      `
    },
    {
      title: '2. Personal pronouns',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Subject</th><th>Object</th><th>Possessive</th><th>Old English</th></tr></thead>
          <tbody>
            <tr><th>1 sg.</th><td class="la">I, ich</td><td class="la">me</td><td class="la">my, myn</td><td class="la">ic, mē, mīn</td></tr>
            <tr><th>2 sg.</th><td class="la">thou</td><td class="la">thee</td><td class="la">thy, thyn</td><td class="la">þū, þē, þīn</td></tr>
            <tr><th>3 sg. m.</th><td class="la">he</td><td class="la">him</td><td class="la">his</td><td class="la">hē, him, his</td></tr>
            <tr><th>3 sg. f.</th><td class="la">she</td><td class="la">hir, her</td><td class="la">hir, her</td><td class="la">hēo, hire</td></tr>
            <tr><th>3 sg. n.</th><td class="la">it, hit</td><td class="la">it, hit</td><td class="la">his</td><td class="la">hit, his</td></tr>
            <tr><th>1 pl.</th><td class="la">we</td><td class="la">us</td><td class="la">oure</td><td class="la">wē, ūs, ūre</td></tr>
            <tr><th>2 pl.</th><td class="la">ye</td><td class="la">yow</td><td class="la">youre</td><td class="la">gē, ēow, ēower</td></tr>
            <tr><th>3 pl.</th><td class="la">they</td><td class="la">hem</td><td class="la">hir, her</td><td class="la">hīe, heom, hiera</td></tr>
          </tbody>
        </table></div>
        <p><span class="la">myn, thyn</span> stand before a vowel (<span class="la">myn herte</span>), <span class="la">my, thy</span> before a consonant, like <em>an/a</em>. The forms <span class="la">hir</span> “her” and <span class="la">hir</span> “their” look the same; the context decides.</p>
      `
    },
    {
      title: '3. she and they',
      html: `
        <p>Old English <span class="la">hē, hēo, hīe</span> (“he, she, they”) became almost indistinguishable once their vowels weakened; in some dialects all three could come out as <em>he</em>. English solved the problem in two ways:</p>
        <ul>
          <li><strong>they, their, them</strong> come from Old Norse <em>þeir, þeira, þeim</em>, brought by Scandinavian settlers in the North and East. They spread southwards in stages: in Chaucer’s London only the subject <span class="la">they</span> has arrived, and the object and possessive are still native <span class="la">hem, hir</span>. <em>Them</em> and <em>their</em> became standard in the 15th century.</li>
          <li><strong>she</strong> first appears in the 12th century in the North-East Midlands. Its origin is one of the unsolved problems of English historical linguistics: a sound change from <span class="la">hēo</span>, influence of the demonstrative <span class="la">sēo</span>, or both. None of the explanations is generally accepted.</li>
        </ul>
        <p>A pronoun is a word that languages almost never borrow, which is why the Norse <em>they</em> is taken as evidence of very close contact between English and Norse speakers in the Danelaw.</p>
      `
    },
    {
      title: '4. thou and ye; me thinketh',
      html: `
        <p><strong>thou / ye</strong>: originally singular and plural, but by Chaucer’s time <span class="la">ye</span> is also the polite singular, used to superiors and between social equals of rank, as French <em>vous</em> and older German <em>Ihr</em>. <span class="la">thou</span> is used to intimates, inferiors, children and God, and can be an insult between equals. The narrator addresses his audience as <span class="la">yow</span>; in the tales, switching between <span class="la">thou</span> and <span class="la">ye</span> often marks a change in the relationship.</p>
        <p><strong>me thinketh</strong> “it seems to me”: an impersonal verb with the person in the object form, Old English <span class="la">mē þynceð</span>, German <em>mich dünkt</em> (Old English Lecture X). It is a different verb from <span class="la">thinken</span> “think” (OE <span class="la">þencan</span>): the two merged later, leaving only the fossil <em>methinks</em>. Similarly <span class="la">it semed me</span> “it seemed to me”.</p>
      `
    }
  ],

  vocab: [
    { id: 'seson', head: 'seson', la: 'seson', pos: 'noun', en: 'season', note: 'French saison.' },
    { id: 'hostelrye', head: 'hostelrye', la: 'hostelrye', pos: 'noun', en: 'inn, hostelry', note: 'French; hostel and hotel are the same word. German Hotel is a later borrowing.' },
    { id: 'felawshipe', head: 'felawshipe', la: 'felawshipe', pos: 'noun', en: 'company, fellowship', note: 'Old Norse félagi + English -ship (German -schaft).' },
    { id: 'chambre', head: 'chambre', la: 'chambre, pl. chambres', pos: 'noun', en: 'room, bedroom', note: 'French chambre, Latin camera; German Kammer is an older borrowing of the same Latin word.' },
    { id: 'aventure', head: 'aventure', la: 'aventure', pos: 'noun', en: 'chance, fortune; adventure', note: 'by aventure: by chance. German Abenteuer is the same French word (MHG âventiure).' },
    { id: 'degree', head: 'degree', la: 'degree', pos: 'noun', en: 'rank, social position; step', note: 'French degré.' },
    { id: 'array', head: 'array', la: 'array', pos: 'noun', en: 'dress, equipment; arrangement', note: 'French arroi; related to German bereit.' },
    { id: 'resoun', head: 'resoun', la: 'resoun', pos: 'noun', en: 'reason, what is right', note: 'French raison; stressed on the last syllable.' },
    { id: 'tale', head: 'tale', la: 'tale, pl. tales', pos: 'noun', en: 'story, account; number', note: 'OE talu; German Zahl, erzählen.' },
    { id: 'ryden', head: 'ryden', la: 'ryden; rood, riden; riden', pos: 'verb, strong', en: 'ride', note: 'OE rīdan (Old English Lecture V), German reiten.' },
    { id: 'devysen', head: 'devysen', la: 'devysen; devysed', pos: 'verb, weak', en: 'describe, tell; plan', note: 'French deviser.' },
    { id: 'semen', head: 'semen', la: 'semen; semed', pos: 'verb, weak', en: 'seem (it semed me: it seemed to me)', note: 'From Old Norse sóma “befit”; German ziemen is related.' },
    { id: 'biginnen', head: 'biginnen', la: 'biginnen; bigan, bigonne; bigonne', pos: 'verb, strong', en: 'begin', note: 'OE beginnan, German beginnen.' },
    { id: 'thinken', head: 'thinken', la: 'me thinketh; me thoughte', pos: 'verb, impersonal', en: 'seem (me thinketh: it seems to me)', note: 'OE þyncan, German dünken; not the same verb as thenken “think”.' },
    { id: 'lien', head: 'lien', la: 'lien, lyen; lay, layen; leyn', pos: 'verb, strong', en: 'lie; stay, lodge', note: 'OE licgan, German liegen. lay = stayed (overnight).' },
    { id: 'telle', head: 'tellen', la: 'tellen; tolde; told', pos: 'verb, weak', en: 'tell; count', note: 'OE tellan; German zählen, erzählen.' },
    { id: 'redy', head: 'redy', la: 'redy', pos: 'adjective', en: 'ready', note: 'OE (ge)rǣde; German bereit is related.' },
    { id: 'natheles', head: 'natheles', la: 'natheles, nathelees', pos: 'adverb', en: 'nevertheless', note: 'na + the + les “not the less”, German nichtsdestoweniger.' }
  ],

  grammarCards: [
    { id: 'me2-pl', front: 'The usual Middle English plural', back: '-es (from OE -as): chambres, stables' },
    { id: 'me2-en', front: 'Plurals in -en', back: 'yën, oxen, foon (German Augen, Ochsen)' },
    { id: 'me2-umlaut', front: 'Umlaut plurals', back: 'foot / feet, man / men, goos / gees' },
    { id: 'me2-zero', front: 'Plurals without ending', back: 'yeer, hors, sheep (old neuters)' },
    { id: 'me2-gender', front: 'Grammatical gender in Chaucer', back: 'Gone; only natural gender (he, she, it)' },
    { id: 'me2-they', front: 'they / hem / hir in Chaucer', back: 'Norse subject, native object and possessive' },
    { id: 'me2-their', front: 'When did them, their become standard?', back: 'In the 15th century' },
    { id: 'me2-she', front: 'Origin of she', back: 'Disputed: from hēo, from sēo, or both; first in the 12th century' },
    { id: 'me2-myn', front: 'myn / my', back: 'myn before a vowel, my before a consonant' },
    { id: 'me2-hir', front: 'hir', back: '“her” or “their”: context decides' },
    { id: 'me2-thou', front: 'thou / ye', back: 'Intimate or to inferiors / polite or plural (German du / Ihr)' },
    { id: 'me2-thinketh', front: 'me thinketh', back: 'it seems to me (OE mē þynceð, German mich dünkt)' },
    { id: 'me2-atte', front: 'atte', back: 'at the (atte beste: in the best way)' },
    { id: 'me2-come', front: 'At night was come … nyne and twenty', back: 'By night there had come … twenty-nine (perfect with “be”, as German)' },
    { id: 'me2-quote', front: 'Me thinketh it acordaunt to resoun', back: 'It seems to me fitting (GP 37)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Where is the narrator staying?', options: ['At the Tabard in Southwark', 'At Canterbury', 'In the City of London', 'At Westminster'], answer: 0, explain: 'In Southwerk at the Tabard as I lay.' },
    { id: 'e2', type: 'mc', prompt: 'How many pilgrims arrive, according to the narrator?', options: ['twenty-nine', 'thirty-one', 'twelve', 'ninety'], answer: 0, explain: 'Wel nyne and twenty; counting the portraits gives a different total.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">they</span> comes from:', options: ['Old Norse', 'Old English hīe', 'French', 'Latin'], answer: 0, explain: 'Norse þeir.' },
    { id: 'e4', type: 'mc', prompt: 'In Chaucer, “them” is:', options: ['hem', 'them', 'hir', 'hii'], answer: 0, explain: 'Native form; Norse them came later.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Me thinketh</span> means:', options: ['it seems to me', 'I think of me', 'think of me', 'I thank'], answer: 0, explain: 'Impersonal, as German mich dünkt.' },
    { id: 'e6', type: 'mc', prompt: 'Which pronoun does the narrator use to address his audience?', options: ['yow (polite plural)', 'thee', 'hem', 'us'], answer: 0, explain: 'ther as I yow devyse.' },
    { id: 'e7', type: 'mc', prompt: 'The usual plural ending in Chaucer is:', options: ['-es', '-en', '-a', '-um'], answer: 0, explain: 'From OE -as.' },
    { id: 'e8', type: 'mc', prompt: 'What will the narrator describe for each pilgrim?', options: ['condition, rank and dress', 'only their names', 'their tales', 'their horses'], answer: 0, explain: 'condicioun, degree, array.' },
    { id: 'e9', type: 'match', prompt: 'Match the plurals.', pairs: [
      ['foot', 'feet'], ['yë', 'yën'], ['child', 'children'], ['chambre', 'chambres'], ['yeer', 'yeer']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the words to their meaning.', pairs: [
      ['anon', 'at once'], ['everichon', 'every one'], ['forward', 'agreement'], ['natheles', 'nevertheless'], ['aventure', 'chance']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">So hadde I spoken with ___ everichon</span>', hint: 'them', answers: ['hem'], full: 'So hadde I spoken with hem everichon', explain: 'GP 31.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">That I was of ___ felawshipe anon</span>', hint: 'their', answers: ['hir', 'her'], full: 'That I was of hir felawshipe anon', explain: 'GP 32.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">The chambr___ and the stabl___ weren wyde</span> (one ending, used twice)', hint: 'plural', answers: ['es'], full: 'The chambres and the stables weren wyde', explain: 'Plural -es.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Me ___ it acordaunt to resoun</span>', hint: 'it seems (impersonal)', answers: ['thinketh'], full: 'Me thinketh it acordaunt to resoun', explain: 'GP 37.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give Chaucer’s pronouns.', headers: ['Subject', 'Object'], rows: [
      { label: 'you (sg., intimate)', answers: ['thou', 'thee'] },
      { label: 'she', answers: ['she', 'hir|her'] },
      { label: 'you (pl. or polite)', answers: ['ye', 'yow|you'] },
      { label: 'they', answers: ['they', 'hem'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Give singular and plural.', headers: ['Singular', 'Plural'], rows: [
      { label: 'pilgrim', answers: ['pilgrim', 'pilgrims|pilgrimes'] },
      { label: 'foot', answers: ['foot|fot', 'feet|fet'] },
      { label: 'eye', answers: ['yë|ye|eye|iye', 'yën|yen|eyen|iyen'] },
      { label: 'year', answers: ['yeer|yer', 'yeer|yer'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the modern translation in order.', source: 'And whiche they weren, and of what degree', tokens: ['and who', 'they were,', 'and of', 'what rank'], explain: 'GP 40.' },
    { id: 'e18', type: 'translate', dir: 'me-en', source: 'The chambres and the stables weren wyde.', model: 'The rooms and the stables were spacious.', accepted: ['rooms and stables were wide', 'rooms and stables were spacious', 'chambers and stables were wide', 'chambers and stables were spacious', 'bedrooms and stables were spacious', 'bedrooms and stables were wide', 'rooms and stables were large'] },
    { id: 'e19', type: 'translate', dir: 'me-en', source: 'I spak with hem everichon.', model: 'I spoke with every one of them.', accepted: ['i spoke with every one of them', 'i spoke with them all', 'i spoke with all of them', 'i spoke to every one of them', 'i spoke to them all', 'i spoke to all of them', 'i spoke with each of them', 'i spoke to each of them', 'i talked with every one of them', 'i talked to all of them'] },
    { id: 'e20', type: 'translate', dir: 'en-me', source: 'it seems to me (impersonal)', model: 'me thinketh', accepted: ['me thinketh', 'me semeth', 'it semeth me'] },
    { id: 'e21', type: 'translate', dir: 'en-me', source: 'their company (Chaucer’s forms)', model: 'hir felawshipe', accepted: ['hir felawshipe', 'her felawshipe', 'hir companye', 'her companye'] },
    { id: 'e22', type: 'mc', prompt: 'Why is the borrowing of <em>they</em> remarkable?', options: ['Pronouns are rarely borrowed', 'It came from French', 'It replaced “she”', 'It is a Latin word'], answer: 0, explain: 'Evidence of close contact in the Danelaw.' },
    { id: 'e23', type: 'mc', prompt: 'Who showed how the General Prologue follows estates satire?', options: ['Jill Mann', 'W. W. Skeat', 'Fr. Klaeber', 'Henry Sweet'], answer: 0, explain: 'Chaucer and Medieval Estates Satire, 1973.' }
  ],

  reading: {
    title: 'General Prologue 19–42',
    note: 'Authentic text: The Canterbury Tales, General Prologue (Group A) 19–42, in Skeat’s edition (The Complete Works of Geoffrey Chaucer, vol. 4, Oxford 1894), from the Project Gutenberg transcription. Skeat’s readings here: Bifel (Hn.; E. Bifil), was (23; E. were), weren (40, Hl.). Tap any word.',
    text: 'Bifel that, in that seson on a day,\nIn Southwerk at the Tabard as I lay\nRedy to wenden on my pilgrimage\nTo Caunterbury with ful devout corage,\nAt night was come in‑to that hostelrye\nWel nyne and twenty in a companye,\nOf sondry folk, by aventure y‑falle\nIn felawshipe, and pilgrims were they alle,\nThat toward Caunterbury wolden ryde;\nThe chambres and the stables weren wyde,\nAnd wel we weren esed atte beste.\nAnd shortly, whan the sonne was to reste,\nSo hadde I spoken with hem everichon,\nThat I was of hir felawshipe anon,\nAnd made forward erly for to ryse,\nTo take our wey, ther as I yow devyse.\nBut natheles, whyl I have tyme and space,\nEr that I ferther in this tale pace,\nMe thinketh it acordaunt to resoun,\nTo telle yow al the condicioun\nOf ech of hem, so as it semed me,\nAnd whiche they weren, and of what degree;\nAnd eek in what array that they were inne:\nAnd at a knight than wol I first biginne.',
    translations: [
      { label: 'Modern English', text: 'It happened that in that season, one day, as I was staying in Southwark at the Tabard, ready to set out on my pilgrimage to Canterbury with a very devout heart, there came into that inn at night a full twenty-nine in a company, of various sorts of people, who had fallen by chance into fellowship, and they were all pilgrims who intended to ride towards Canterbury. The rooms and the stables were spacious, and we were made comfortable in the best way. And in short, when the sun had set, I had spoken with every one of them, so that I was soon one of their company, and we agreed to rise early to take our way, as I shall tell you. But nevertheless, while I have time and opportunity, before I go further in this account, it seems to me fitting to tell you all about the condition of each of them, as it seemed to me, and who they were, and of what rank, and also what clothes they were in; and with a knight, then, I will begin first.' },
      { label: 'German translation', text: 'Es begab sich in jener Jahreszeit an einem Tag, als ich in Southwark im Tabard wohnte, bereit, mit sehr frommem Herzen meine Pilgerfahrt nach Canterbury anzutreten, dass des Nachts in jene Herberge gut neunundzwanzig in einer Gesellschaft kamen, allerlei Leute, durch Zufall in Gemeinschaft geraten, und Pilger waren sie alle, die nach Canterbury reiten wollten. Die Kammern und die Ställe waren geräumig, und wir wurden aufs Beste bewirtet. Und kurz, als die Sonne untergegangen war, hatte ich mit jedem von ihnen gesprochen, sodass ich bald zu ihrer Gesellschaft gehörte, und wir verabredeten, früh aufzustehen, um unseren Weg zu nehmen, wie ich euch erzählen werde. Doch dennoch, solange ich Zeit und Gelegenheit habe, ehe ich in diesem Bericht weitergehe, scheint es mir vernünftig, euch die ganze Beschaffenheit eines jeden von ihnen zu schildern, so wie sie mir erschienen, und wer sie waren und welchen Standes, und auch in welcher Kleidung sie waren: und mit einem Ritter will ich denn zuerst beginnen.' }
    ],
    notes: [
      { ref: 'Bifel that, in that seson on a day', html: '<span class="la">Bifel that</span>: “it happened that”, an impersonal verb without <span class="la">it</span>, as German <em>Es begab sich</em> (with <em>es</em>).' },
      { ref: 'In Southwerk at the Tabard as I lay', html: '<span class="la">lay</span>: past of <span class="la">lien</span> “lie”, here “stay, lodge”, as German <em>liegen</em> once could.' },
      { ref: 'At night was come in‑to that hostelrye / Wel nyne and twenty in a companye', html: 'Subject last, after the verb: “there had come … twenty-nine”. Perfect with <span class="la">was</span> for a verb of motion, as German <em>war gekommen</em>. <span class="la">Wel</span>: “fully, a good”.' },
      { ref: 'by aventure y‑falle / In felawshipe', html: '“Fallen by chance into company”: they did not set out together. <span class="la">y-falle</span>: past participle with <span class="la">y-</span>, final -n dropped.' },
      { ref: 'And wel we weren esed atte beste', html: '<span class="la">esed</span> “made comfortable”, from French <em>aise</em>; <span class="la">atte</span> = <span class="la">at the</span>, a common contraction.' },
      { ref: 'whan the sonne was to reste', html: '“When the sun had gone to rest”: <span class="la">was</span> + <span class="la">to</span> + noun, with a verb of motion understood.' },
      { ref: 'And made forward erly for to ryse', html: '<span class="la">forward</span> “agreement” (OE <span class="la">foreweard</span>), a different word from the adverb.' },
      { ref: 'ther as I yow devyse', html: '“As I (shall) tell you”: the present for the future, as German <em>wie ich euch erzähle</em>. <span class="la">yow</span>: polite plural to the audience.' },
      { ref: 'Me thinketh it acordaunt to resoun', html: 'Impersonal <span class="la">me thinketh</span> “it seems to me”: see grammar section 4. <span class="la">acordaunt to resoun</span> “in keeping with reason, proper”.' },
      { ref: 'And whiche they weren', html: '<span class="la">whiche</span> “what sort of people”: plural of <span class="la">which</span>, which in Middle English can mean “what kind of”.' },
      { ref: 'And at a knight than wol I first biginne', html: 'The first portrait is the Knight, the highest in rank among the lay pilgrims: the order of the portraits roughly follows the estates.' }
    ],
    glosses: {
      'a': 'a, one', 'acordaunt': 'in accordance, fitting (French)', 'al': 'all', 'alle': 'all (plural)', 'and': 'and', 'anon': 'at once (OE on ān “in one”)',
      'array': 'dress, equipment, outward appearance (French)', 'as': 'as; as I lay: while I was staying', 'at': 'at', 'atte': 'at the; atte beste: in the best way', 'aventure': 'chance (French); by aventure: by chance', 'beste': 'best',
      'bifel': 'it happened (OE befeallan); bifel that: it happened that', 'biginne': 'begin', 'but': 'but', 'by': 'by', 'caunterbury': 'Canterbury', 'chambres': 'rooms, bedrooms (French; German Kammer)',
      'come': 'come (past part.); was come: had come (with “be”, as German war gekommen)', 'companye': 'company', 'condicioun': 'condition, circumstances, character', 'corage': 'spirit, heart', 'day': 'day', 'degree': 'rank, social position',
      'devout': 'devout', 'devyse': 'describe, tell (French deviser)', 'ech': 'each', 'eek': 'also', 'er': 'before (German eher)', 'erly': 'early',
      'esed': 'made comfortable, accommodated (French aise)', 'everichon': 'every one', 'falle': 'fallen (past part.); y-falle in felawshipe: fallen into company', 'felawshipe': 'company, fellowship (Norse félagi + -ship)', 'ferther': 'further', 'first': 'first',
      'folk': 'people', 'for': 'for; for to: to', 'forward': 'agreement (OE foreweard)', 'ful': 'very (German voll)', 'hadde': 'had', 'have': 'have',
      'hem': 'them', 'hir': 'their', 'hostelrye': 'inn, hostelry (French)', 'i': 'I', 'in': 'in', 'inne': 'in (adverb at the end of a clause)',
      'it': 'it', 'knight': 'knight (k and gh pronounced: German Knecht)', 'lay': 'stayed, lodged (pret. of lien “lie”)', 'made': 'made; made forward: made an agreement', 'me': 'me; me thinketh: it seems to me', 'my': 'my',
      'natheles': 'nevertheless', 'night': 'night', 'nyne': 'nine', 'of': 'of; by', 'on': 'on', 'our': 'our',
      'pace': 'pass, go on (French passer)', 'pilgrimage': 'pilgrimage', 'pilgrims': 'pilgrims', 'redy': 'ready', 'resoun': 'reason (French)', 'reste': 'rest; was to reste: had set',
      'ryde': 'ride', 'ryse': 'rise, get up', 'semed': 'seemed; it semed me: it seemed to me', 'seson': 'season', 'shortly': 'in short, briefly', 'so': 'so; so as: as',
      'sondry': 'various', 'sonne': 'sun', 'southwerk': 'Southwark', 'space': 'opportunity, room (French)', 'spoken': 'spoken (past part.)', 'stables': 'stables',
      'tabard': 'the Tabard, an inn (a tabard is a sleeveless coat, the inn’s sign)', 'take': 'take', 'tale': 'tale, story; this tale: this account', 'telle': 'tell', 'than': 'then', 'that': 'that; who',
      'the': 'the', 'ther': 'where; ther as: where', 'they': 'they', 'thinketh': 'seems (3 sg. of thinken “seem”; me thinketh: methinks)', 'this': 'this', 'to': 'to; was to reste: had gone to rest',
      'toward': 'towards', 'twenty': 'twenty', 'tyme': 'time', 'was': 'was', 'we': 'we', 'wel': 'well; fully (wel nyne and twenty: a good twenty-nine)',
      'wenden': 'go, set out', 'were': 'were', 'weren': 'were (plural)', 'wey': 'way, road', 'whan': 'when', 'what': 'what',
      'whiche': 'what sort of people (plural of which)', 'whyl': 'while', 'with': 'with', 'wol': 'will (1 sg. of wollen)', 'wolden': 'wanted to, intended to (pret. pl. of wollen)', 'wyde': 'wide, spacious',
      'y': 'prefix y- (OE ge-): y-falle “fallen”', 'yow': 'you (polite plural, object)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'How did the pilgrims come together?', options: ['By chance', 'They were one family', 'They were sent by the king', 'They belonged to one guild'], answer: 0, explain: 'by aventure y-falle in felawshipe.' },
      { id: 'r2', type: 'mc', prompt: 'How were they accommodated?', options: ['In the best way, with spacious rooms', 'Badly', 'In tents', 'In the stables'], answer: 0, explain: 'The chambres and the stables weren wyde.' },
      { id: 'r3', type: 'mc', prompt: 'What did they agree to do?', options: ['Rise early and set out', 'Tell tales at once', 'Stay another week', 'Go to London'], answer: 0, explain: 'made forward erly for to ryse.' },
      { id: 'r4', type: 'mc', prompt: 'With whom does the narrator begin his descriptions?', options: ['A knight', 'The Host', 'A nun', 'Himself'], answer: 0, explain: 'And at a knight than wol I first biginne.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Chaucer’s “their” is:', options: ['hir', 'their', 'hem', 'they'], answer: 0, explain: 'Native form.' },
      { id: 't2', type: 'mc', prompt: 'Which plural is formed with umlaut?', options: ['feet', 'chambres', 'yën', 'yeer'], answer: 0, explain: 'foot / feet, as German Fuß / Füße.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">myn</span> rather than <span class="la">my</span> is used:', options: ['before a vowel', 'before a consonant', 'in the plural', 'in questions'], answer: 0, explain: 'myn herte, my lord.' },
      { id: 't4', type: 'mc', prompt: 'Where did <em>she</em> first appear?', options: ['North-East Midlands, 12th century', 'London, 14th century', 'Kent, 10th century', 'Scotland, 16th century'], answer: 0, explain: 'Its origin is disputed.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">And whiche they wer___, and of what degree</span>', hint: 'plural', answers: ['en'], full: 'And whiche they weren, and of what degree', explain: 'Past plural -en.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">ther as I ___ devyse</span>', hint: 'you (polite)', answers: ['yow', 'you'], full: 'ther as I yow devyse', explain: 'GP 34.' },
      { id: 't7', type: 'translate', dir: 'me-en', source: 'They weren pilgrims alle.', model: 'They were all pilgrims.', accepted: ['they were all pilgrims', 'they were pilgrims all', 'all of them were pilgrims'] },
      { id: 't8', type: 'translate', dir: 'en-me', source: 'them (Chaucer’s form)', model: 'hem', accepted: ['hem'] },
      { id: 't9', type: 'mc', prompt: 'The Tabard was destroyed by:', options: ['the Southwark fire of 1676', 'the Peasants’ Revolt', 'the Great Fire of 1666', 'the Blitz'], answer: 0, explain: 'Rebuilt, then demolished in 1873.' },
      { id: 't10', type: 'mc', prompt: 'In Chaucer, <span class="la">thou</span> to an equal can be:', options: ['intimate or insulting', 'always polite', 'plural', 'archaic'], answer: 0, explain: 'ye is the polite form.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">felawshipe</span> combines:', options: ['Old Norse félagi and English -ship', 'French and Latin', 'two English words', 'German and French'], answer: 0, explain: 'A hybrid.' }
    ]
  },

  reference: [
    { title: 'Personal pronouns', headers: ['', 'Subject', 'Object', 'Possessive'], rows: [['I', 'I, ich', 'me', 'my, myn'], ['you (sg.)', 'thou', 'thee', 'thy, thyn'], ['he', 'he', 'him', 'his'], ['she', 'she', 'hir, her', 'hir, her'], ['it', 'it, hit', 'it, hit', 'his'], ['we', 'we', 'us', 'oure'], ['you (pl./polite)', 'ye', 'yow', 'youre'], ['they', 'they', 'hem', 'hir, her']] },
    { title: 'Noun plurals', headers: ['Type', 'Examples'], rows: [['-es', 'chambres, stables, pilgrims'], ['-en', 'yën, oxen, foon'], ['umlaut', 'feet, men, gees'], ['no ending', 'yeer, hors, sheep'], ['-ren', 'children']] }
  ]
});
