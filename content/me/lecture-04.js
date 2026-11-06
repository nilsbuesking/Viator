/*
 * Middle English — Lecture IV: pronunciation and metre. The iambic pentameter, final -e and elision, scansion,
 * the couplet and what rhymes tell us. Reading: General Prologue 118–162 (the Prioress) in Skeat’s edition
 * (1894), from the Project Gutenberg text. Pictures from Wikimedia Commons.
 */
Viator.addLecture('me', {
  id: 'me-04',
  number: 4,
  title: 'The Prioress',
  subtitle: 'Pronunciation and metre: final -e and the pentameter; General Prologue 118–162',
  minutes: 60,

  intro: `
    <p>Madame Eglentyne, the Prioress, is the most delicate portrait in the Prologue: a nun who sings through her nose, speaks the French of her convent rather than of Paris, never lets a crumb fall at table, weeps over a mouse in a trap, feeds her little dogs on roast meat, and wears a gold brooch inscribed <em>Amor vincit omnia</em>. Every detail is approving on the surface; whether the whole is gentle satire is for the reader to decide.</p>
    <p>The lecture is about how Chaucer’s verse sounds. He was the first to write long poems in English in the line that became the standard of English poetry for five centuries, the <strong>iambic pentameter</strong>: ten syllables, alternately weak and strong. The line only works if the final <span class="la">-e</span> is pronounced where the grammar requires it, which is why Chaucer was thought to write rough verse for three hundred years, until an 18th-century editor worked out the rule.</p>
    <p>For a German speaker, reading Chaucer aloud is easier than for an English one: the vowels are German vowels, and the final <span class="la">-e</span> is the schwa of <em>Sonne, habe, Liebe</em>.</p>
  `,

  background: [
    {
      title: 'Madame Eglentyne',
      html: `
        <p>A prioress was the head of a priory of nuns, a position usually held by women of gentry or noble family. Eglentyne (“sweet-briar”) is a name from romance, not from the calendar of saints; her oath by St Eligius (<span class="la">sëynt Loy</span>), a courtier saint and patron of goldsmiths, is the mildest possible oath. Her French is that of <span class="la">Stratford atte Bowe</span>, the Benedictine convent of St Leonard at Bromley, east of London: the Anglo-French of England, which by the 1380s Parisians would have found provincial. Whether Chaucer is mocking her or simply describing English convent French is debated.</p>
        <p>Her table manners follow, almost word for word, the advice that the old bawd La Vieille gives on how to attract men in the French <em>Roman de la Rose</em> (Jean de Meun, c. 1275). Episcopal visitations repeatedly forbade nuns to keep pet dogs, wear brooches and show their foreheads. Each detail, read against these sources, moves a little away from the cloister.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/The_Prioress_-_Ellesmere_Chaucer.jpg/960px-The_Prioress_-_Ellesmere_Chaucer.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/The_Prioress_-_Ellesmere_Chaucer.jpg/500px-The_Prioress_-_Ellesmere_Chaucer.jpg|https://upload.wikimedia.org/wikipedia/commons/f/f6/The_Prioress_-_Ellesmere_Chaucer.jpg" alt="Medieval miniature of a nun on horseback"><figcaption>The Prioress, from the Ellesmere manuscript of the <em>Canterbury Tales</em> (Huntington Library, EL 26 C 9), early 15th century. <span class="credit">Manuscript image, public domain · <a href="https://commons.wikimedia.org/wiki/File:The_Prioress_-_Ellesmere_Chaucer.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Amor vincit omnia',
      html: `
        <p>The motto on her brooch comes from Virgil (<em>Eclogues</em> 10.69, <em>omnia vincit amor</em>), where it means earthly passion. Medieval writers applied it equally to divine love. On a nun’s rosary, it is perfectly ambiguous: Chaucer does not say which love it means, and that ambiguity is typical of the portrait.</p>
        <p>The Prioress later tells a tale of a Christian child murdered by Jews, a story of a type that circulated widely and fed violence against Jews in medieval Europe. Readers have long debated whether Chaucer shares or exposes her views; the tale itself is a reminder that “tendre herte” and cruelty could live side by side.</p>
      `
    },
    {
      title: 'How we know about final -e',
      html: `
        <p>By the 15th century final <span class="la">-e</span> was no longer pronounced, and scribes, printers and readers lost the key to Chaucer’s metre. John Dryden (1700) praised Chaucer but found his verse irregular, with “the rude sweetness of a Scotch tune” in it. In 1775 Thomas Tyrwhitt showed that if the final <span class="la">-e</span> is pronounced where Old English had an ending, and elided before a vowel, most lines become regular decasyllables.</p>
        <p>Tyrwhitt’s rule is accepted in principle by almost all scholars. How regular Chaucer actually was, and how far he exploited the optional pronunciation of <span class="la">-e</span> for the rhythm, are still argued; a minority hold that his metre was looser and closer to a stress-based line. The rules below give the standard view.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">And Frensh she spak ful faire and fetisly,<br>After the scole of Stratford atte Bowe,<br>For Frensh of Paris was to hir unknowe.</p>
    <p>“And she spoke French very well and elegantly, in the manner of the school of Stratford-at-Bow, for the French of Paris was unknown to her.” General Prologue 124–126, Skeat’s text (1894).</p>
    <p>Scansion of the first line: <em>and FRENSH she SPAK ful FAIR(e) and FE-tis-LY</em>. The final <span class="la">-e</span> of <span class="la">faire</span> is elided before <span class="la">and</span>; ten syllables, five stresses. <span class="la">fetisly</span> has a light stress on its last syllable, as words in <span class="la">-ly</span> often do at the line end.</p>
  `,

  pronunciation: `
    <p>Read the opening lines aloud with these values (Lecture I gives the full table):</p>
    <ul>
      <li><strong>Prioresse</strong>: <em>pri-o-RES-sə</em>, French stress, final schwa at the line end.</li>
      <li><strong>coy / Loy</strong>: diphthong o + i, as German <em>neu</em> but more open: the rhyme shows it.</li>
      <li><strong>Eglentyne</strong>: <em>eg-len-TII-nə</em>; <span class="la">y</span> = long i.</li>
      <li><strong>mous / pitous</strong>: long u in both: an English and a French word rhyme because <span class="la">ou</span> is the same sound.</li>
      <li><strong>sëynt</strong>: two syllables, <em>se-int</em>; Skeat’s diaeresis marks it for the metre.</li>
      <li><strong>eyen</strong>: <em>ai-ən</em>, plural in <span class="la">-en</span> (Lecture II).</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. The line: iambic pentameter',
      html: `
        <p>Most of the <em>Canterbury Tales</em> is in rhyming couplets of five-stress lines. The basic pattern is five iambs, weak–strong:</p>
        <p class="la big">x / &nbsp;x / &nbsp;x / &nbsp;x / &nbsp;x / &nbsp;(x)</p>
        <p class="la">Ther WAS al-SO a NON(ne), a PRI-o-RES-se</p>
        <p>A line may have an unstressed eleventh syllable at the end (a “feminine” ending, as here); occasionally the first weak syllable is missing (a “headless” line). The pattern is a framework, not a rule of speech: natural word stress sometimes runs against it, and good readers let both be heard.</p>
        <p>The line is very different from the Old English alliterative line (Old English Lecture VIII), which counts stresses and ignores syllables. Chaucer took the syllable-counting line from French (the <em>décasyllabe</em>) and Italian (the <em>endecasillabo</em> of Dante and Boccaccio). German has the same line as the <em>Blankvers</em> of Lessing, Schiller and Goethe, without rhyme.</p>
      `
    },
    {
      title: '2. Final -e: when it is pronounced',
      html: `
        <ul>
          <li><strong>Pronounced</strong> inside the line before a consonant: <span class="la">at ME-te WEL</span>, <span class="la">of SMA-le HOUN-des</span>.</li>
          <li><strong>Elided</strong> before a vowel and usually before <span class="la">h</span> in unstressed words (<span class="la">he, his, hir, hem, have</span>): <span class="la">hir GRET-test(e) OOTH</span>, <span class="la">ful FAIR(e) and</span>.</li>
          <li><strong>At the line end</strong> it is pronounced as an extra, unstressed syllable: <span class="la">Prioresse, Eglentyne, depe, kepe</span>.</li>
        </ul>
        <p>The final <span class="la">-e</span> is not random: it continues an Old English ending, so it marks grammar, as in German. It appears in:</p>
        <ul>
          <li>nouns that ended in a vowel in Old English: <span class="la">sonne</span> (OE <span class="la">sunne</span>), <span class="la">herte</span> (<span class="la">heorte</span>);</li>
          <li>weak adjectives after a determiner, and adjective plurals: <span class="la">the yonge sonne</span>, <span class="la">smale houndes</span> (compare <span class="la">a yong squyer</span>, <span class="la">smal coral</span>), the strong/weak system of Old English Lecture VI in its last form;</li>
          <li>infinitives (from <span class="la">-an</span>): <span class="la">wepe, kepe, falle</span>;</li>
          <li>weak past tenses: <span class="la">fedde, bledde, raughte</span>.</li>
        </ul>
      `
    },
    {
      title: '3. Scansion, and editors’ choices',
      html: `
        <p>To scan a line: count the syllables, elide <span class="la">-e</span> before a vowel or <span class="la">h</span>, and look for five stresses on the even syllables:</p>
        <ul>
          <li><span class="la">hir GRET-test(e) OOTH was BUT by SË-ynt LOY</span>: ten syllables once the <span class="la">-e</span> of <span class="la">gretteste</span> is elided; <span class="la">sëynt</span> counts two.</li>
          <li><span class="la">at ME-te WEL y-TAUGHT was SHE with-AL-le</span>: eleven syllables with a feminine ending.</li>
          <li><span class="la">of SMA-le HOUN-des HAD she, THAT she FED-de</span>: Skeat prints <span class="la">had</span> (from two manuscripts) where most have <span class="la">hadde</span>, because <span class="la">hadde</span> would add a syllable.</li>
        </ul>
        <p>The last example shows how editions are made: Skeat chose among the manuscripts partly on metrical grounds, assuming Chaucer was regular. Modern editors trust the best manuscripts (Hengwrt, Ellesmere) more and the metre less, so their texts differ from his in small ways.</p>
      `
    },
    {
      title: '4. What the rhymes tell us',
      html: `
        <p>Rhymes are the best evidence for pronunciation, because they show which sounds the poet heard as identical:</p>
        <ul>
          <li><span class="la">mous : pitous</span>: native <span class="la">ou</span> and French <span class="la">ou</span> were both long u.</li>
          <li><span class="la">glas : was</span>: <span class="la">was</span> had the vowel a, not the modern o.</li>
          <li><span class="la">clene : sene</span>, <span class="la">depe : kepe</span>: long e; the rhymes also keep apart a closed and an open long e (<span class="la">swete</span> vs. <span class="la">breeth</span>), which modern English has merged.</li>
          <li><span class="la">coy : Loy</span>: the diphthong oi, in two French words.</li>
          <li><span class="la">deed : breed</span>, <span class="la">reed : forheed</span>: long e in words that now have short e (<em>dead, bread, red</em>): the shortening came later.</li>
        </ul>
        <p>The couplet (aa bb cc …) is Chaucer’s main form in the <em>Tales</em>; he is the first major English poet to use the rhymed pentameter couplet, later called the heroic couplet.</p>
      `
    }
  ],

  vocab: [
    { id: 'nonne', head: 'nonne', la: 'nonne', pos: 'noun', en: 'nun', note: 'OE nunne from Late Latin nonna; German Nonne.' },
    { id: 'ooth', head: 'ooth', la: 'ooth', pos: 'noun', en: 'oath', note: 'OE āþ, German Eid. oo = long open o.' },
    { id: 'mete', head: 'mete', la: 'mete', pos: 'noun', en: 'food; a meal', note: 'OE mete “food”; the narrowing to “meat” came later. German Mettwurst, Mett.' },
    { id: 'herte', head: 'herte', la: 'herte', pos: 'noun', en: 'heart', note: 'OE heorte, German Herz. Final -e pronounced.' },
    { id: 'hound', head: 'hound', la: 'hound, pl. houndes', pos: 'noun', en: 'dog (any dog, not only a hunting hound)', note: 'OE hund, German Hund. dogge is rare in Chaucer.' },
    { id: 'breed', head: 'breed', la: 'breed', pos: 'noun', en: 'bread', note: 'OE brēad, German Brot. Long e, rhyming with deed “dead”.' },
    { id: 'lippe', head: 'lippe', la: 'lippe, pl. lippes', pos: 'noun', en: 'lip', note: 'OE lippa; German Lippe is a Low German loan (High German Lefze).' },
    { id: 'clepen', head: 'clepen', la: 'clepen; cleped; (y)cleped', pos: 'verb, weak', en: 'call, name', note: 'OE clipian. Survives as archaic yclept “called”.' },
    { id: 'singen', head: 'singen', la: 'singen; song, songen; songen', pos: 'verb, strong', en: 'sing', note: 'German singen. Past sg. song with o before ng.' },
    { id: 'speken', head: 'speken', la: 'speken; spak, speken; spoken', pos: 'verb, strong', en: 'speak', note: 'German sprechen, sprach (with r).' },
    { id: 'wepen', head: 'wepen', la: 'wepen; weep (wepte); wopen', pos: 'verb, strong (becoming weak)', en: 'weep', note: 'OE wēpan. Skeat prints the strong past weep (148).' },
    { id: 'smyten', head: 'smyten', la: 'smyten; smoot, smiten; smiten', pos: 'verb, strong', en: 'strike, hit', note: 'German schmeißen (originally “strike”).' },
    { id: 'trowen', head: 'trowen', la: 'trowen; trowed', pos: 'verb, weak', en: 'believe, think', note: 'German trauen; I trowe: I believe, I dare say.' },
    { id: 'kepen', head: 'kepen', la: 'kepen; kepte', pos: 'verb, weak', en: 'keep; take care', note: 'Wel … kepe that: take care that.' },
    { id: 'semely', head: 'semely', la: 'semely', pos: 'adjective, adverb', en: 'seemly, becoming; becomingly', note: 'From Old Norse sœmiligr; German ziemlich (once “fitting”).' },
    { id: 'fetis', head: 'fetis', la: 'fetis; fetisly', pos: 'adjective', en: 'elegant, well made', note: 'French faitis “well made”. Twice in her portrait: fetisly (124), fetis (157).' },
    { id: 'sikerly', head: 'sikerly', la: 'siker; sikerly', pos: 'adverb', en: 'certainly, surely', note: 'Latin securus via early West Germanic; German sicher.' },
    { id: 'smal', head: 'smal', la: 'smal, pl. smale', pos: 'adjective', en: 'small, slender, fine', note: 'German schmal “narrow”.' }
  ],

  grammarCards: [
    { id: 'me4-iamb', front: 'Chaucer’s line in the Tales', back: 'Iambic pentameter: x / x / x / x / x / (x), in rhyming couplets' },
    { id: 'me4-fem', front: 'Feminine ending', back: 'An extra unstressed syllable at the line end (Prioresse)' },
    { id: 'me4-headless', front: 'Headless line', back: 'A line without its first unstressed syllable' },
    { id: 'me4-e-cons', front: 'Final -e before a consonant (inside the line)', back: 'Pronounced: at ME-te WEL' },
    { id: 'me4-e-vowel', front: 'Final -e before a vowel or h', back: 'Elided: ful FAIR(e) and' },
    { id: 'me4-e-end', front: 'Final -e at the line end', back: 'Pronounced as an extra unstressed syllable' },
    { id: 'me4-e-gram', front: 'Where does final -e come from?', back: 'Old English endings: nouns (sonne), weak adjectives and plurals, infinitives, weak pasts' },
    { id: 'me4-weak', front: 'the yonge sonne / a yong squyer', back: 'Weak adjective with -e after a determiner; strong without' },
    { id: 'me4-tyrwhitt', front: 'Who explained final -e and Chaucer’s metre?', back: 'Thomas Tyrwhitt, 1775' },
    { id: 'me4-dryden', front: 'Dryden on Chaucer’s verse (1700)', back: '“the rude sweetness of a Scotch tune”: he did not pronounce final -e' },
    { id: 'me4-rhyme', front: 'mous : pitous', back: 'Native and French ou were both long u' },
    { id: 'me4-was', front: 'glas : was', back: 'was had the vowel a' },
    { id: 'me4-heroic', front: 'Heroic couplet', back: 'Rhymed pentameter couplets: Chaucer is the first major English poet to use them' },
    { id: 'me4-amor', front: 'Amor vincit omnia', back: 'Love conquers all (Virgil, Eclogues 10.69): sacred or profane?' },
    { id: 'me4-french', front: 'For Frensh of Paris was to hir unknowe', back: 'For the French of Paris was unknown to her (GP 126)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'How many syllables does a regular line have?', options: ['ten (or eleven with a feminine ending)', 'eight', 'twelve', 'any number'], answer: 0, explain: 'Five iambs.' },
    { id: 'e2', type: 'mc', prompt: 'In <span class="la">ful faire and fetisly</span>, the -e of <span class="la">faire</span> is:', options: ['elided before a vowel', 'stressed', 'pronounced', 'a scribal error'], answer: 0, explain: 'Before and.' },
    { id: 'e3', type: 'mc', prompt: 'In <span class="la">at mete wel</span>, the -e of <span class="la">mete</span> is:', options: ['pronounced', 'elided', 'silent always', 'stressed'], answer: 0, explain: 'Before a consonant.' },
    { id: 'e4', type: 'mc', prompt: 'Who showed in 1775 how final -e makes the metre regular?', options: ['Thomas Tyrwhitt', 'John Dryden', 'W. W. Skeat', 'William Caxton'], answer: 0, explain: 'Dryden had found the verse rough.' },
    { id: 'e5', type: 'mc', prompt: 'What does the rhyme <span class="la">mous : pitous</span> show?', options: ['ou was long u in both', 'mous was French', 'pitous was English', 'nothing'], answer: 0, explain: 'Same sound in native and French words.' },
    { id: 'e6', type: 'mc', prompt: 'Where did the Prioress learn her French?', options: ['Stratford atte Bowe, near London', 'Paris', 'Calais', 'Canterbury'], answer: 0, explain: 'For Frensh of Paris was to hir unknowe.' },
    { id: 'e7', type: 'mc', prompt: 'What makes the Prioress weep?', options: ['A mouse caught in a trap', 'Her sins', 'The service', 'A sad tale'], answer: 0, explain: 'GP 144–145.' },
    { id: 'e8', type: 'mc', prompt: 'What is written on her brooch?', options: ['Amor vincit omnia', 'Ave Maria', 'Deo gratias', 'Honi soit qui mal y pense'], answer: 0, explain: 'Love conquers all.' },
    { id: 'e9', type: 'match', prompt: 'Match the rhyming pairs from the portrait.', pairs: [
      ['coy', 'Loy'], ['clene', 'sene'], ['glas', 'was'], ['mous', 'pitous'], ['deed', 'breed']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the words to their meaning.', pairs: [
      ['fetis', 'elegant'], ['semely', 'becoming'], ['sikerly', 'certainly'], ['cleped', 'called'], ['mete', 'food']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">And she was ___ madame Eglentyne</span>', hint: 'called', answers: ['cleped', 'ycleped'], full: 'And she was cleped madame Eglentyne', explain: 'GP 121.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">For Frensh of Paris was to hir ___</span>', hint: 'unknown (rhymes with Bowe)', answers: ['unknowe'], full: 'For Frensh of Paris was to hir unknowe', explain: 'GP 126.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Of sma___ houndes had she</span>', hint: 'small (plural adjective)', answers: ['le'], full: 'Of smale houndes had she', explain: 'Plural -e.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">the yong___ sonne</span>', hint: 'weak adjective after the', answers: ['e'], full: 'the yonge sonne', explain: 'Weak -e.' },
    { id: 'e15', type: 'paradigm', prompt: 'How many syllables does each line have, read correctly?', headers: ['Syllables', 'Final -e inside the line'], rows: [
      { label: 'Ther was also a Nonne, a Prioresse', answers: ['11|eleven', 'elided|elided before a|nonne elided'] },
      { label: 'And Frensh she spak ful faire and fetisly', answers: ['10|ten', 'elided|elided before and'] },
      { label: 'At mete wel y-taught was she with-alle', answers: ['11|eleven', 'pronounced'] },
      { label: 'Hir gretteste ooth was but by sëynt Loy', answers: ['10|ten', 'elided|elided before ooth'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Strong or weak adjective? Give the form of <span class="la">smal</span> / <span class="la">yong</span>.', headers: ['Form', 'Why'], rows: [
      { label: 'the ___ sonne (yong)', answers: ['yonge', 'weak|after the'] },
      { label: 'a ___ squyer (yong)', answers: ['yong', 'strong|after a'] },
      { label: '___ houndes (smal)', answers: ['smale', 'plural'] },
      { label: 'of ___ coral (smal)', answers: ['smal', 'strong|singular'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the modern translation in order.', source: 'She wolde wepe, if that she sawe a mous', tokens: ['She would', 'weep', 'if she saw', 'a mouse'], explain: 'GP 144.' },
    { id: 'e18', type: 'translate', dir: 'me-en', source: 'Ful wel she song the service divyne.', model: 'She sang the divine service very well.', accepted: ['she sang divine service very well', 'very well she sang divine service', 'she sang the divine service very well', 'she sang divine office very well', 'she sang the divine office very well', 'she sang the service very well'] },
    { id: 'e19', type: 'translate', dir: 'me-en', source: 'Hir eyen were greye as glas.', model: 'Her eyes were grey as glass.', accepted: ['her eyes were grey as glass', 'her eyes were as grey as glass', 'her eyes were gray as glass'] },
    { id: 'e20', type: 'translate', dir: 'en-me', source: 'she spoke French (Chaucer’s words)', model: 'she spak Frensh', accepted: ['she spak frensh', 'frensh she spak'] },
    { id: 'e21', type: 'translate', dir: 'en-me', source: 'small dogs (Chaucer’s words)', model: 'smale houndes', accepted: ['smale houndes'] },
    { id: 'e22', type: 'mc', prompt: 'Where does Chaucer’s syllable-counting line come from?', options: ['French and Italian verse', 'Old English alliterative verse', 'Latin hexameter', 'German Knittelvers'], answer: 0, explain: 'The décasyllabe and the endecasillabo.' },
    { id: 'e23', type: 'mc', prompt: 'Why does Skeat print <span class="la">had</span> in line 146 when most manuscripts have <span class="la">hadde</span>?', options: ['For the metre', 'It is the Ellesmere reading', 'It is modern spelling', 'A misprint'], answer: 0, explain: 'hadde would give one syllable too many.' }
  ],

  reading: {
    title: 'General Prologue 118–162',
    note: 'Authentic text: The Canterbury Tales, General Prologue (Group A) 118–162, the Prioress, in Skeat’s edition (The Complete Works of Geoffrey Chaucer, vol. 4, Oxford 1894), from the Project Gutenberg transcription. Skeat’s diaeresis in sëynt marks two syllables. Among his readings: had (146, from Petworth and Lansdowne, for the metre), weep (148, his own choice: the manuscripts have wepte). Tap any word.',
    text: 'Ther was also a Nonne, a Prioresse,\nThat of hir smyling was ful simple and coy;\nHir gretteste ooth was but by sëynt Loy;\nAnd she was cleped madame Eglentyne.\nFul wel she song the service divyne,\nEntuned in hir nose ful semely;\nAnd Frensh she spak ful faire and fetisly,\nAfter the scole of Stratford atte Bowe,\nFor Frensh of Paris was to hir unknowe.\nAt mete wel y‑taught was she with‑alle;\nShe leet no morsel from hir lippes falle,\nNe wette hir fingres in hir sauce depe.\nWel coude she carie a morsel, and wel kepe,\nThat no drope ne fille up‑on hir brest.\nIn curteisye was set ful muche hir lest.\nHir over lippe wyped she so clene,\nThat in hir coppe was no ferthing sene\nOf grece, whan she dronken hadde hir draughte.\nFul semely after hir mete she raughte,\nAnd sikerly she was of greet disport,\nAnd ful plesaunt, and amiable of port,\nAnd peyned hir to countrefete chere\nOf court, and been estatlich of manere,\nAnd to ben holden digne of reverence.\nBut, for to speken of hir conscience,\nShe was so charitable and so pitous,\nShe wolde wepe, if that she sawe a mous\nCaught in a trappe, if it were deed or bledde.\nOf smale houndes had she, that she fedde\nWith rosted flesh, or milk and wastel‑breed.\nBut sore weep she if oon of hem were deed,\nOr if men smoot it with a yerde smerte:\nAnd al was conscience and tendre herte.\nFul semely hir wimpel pinched was;\nHir nose tretys; hir eyen greye as glas;\nHir mouth ful smal, and ther‑to softe and reed;\nBut sikerly she hadde a fair forheed;\nIt was almost a spanne brood, I trowe;\nFor, hardily, she was nat undergrowe.\nFul fetis was hir cloke, as I was war.\nOf smal coral aboute hir arm she bar\nA peire of bedes, gauded al with grene;\nAnd ther‑on heng a broche of gold ful shene,\nOn which ther was first write a crowned A,\nAnd after, Amor vincit omnia.',
    translations: [
      { label: 'Modern English', text: 'There was also a Nun, a Prioress, who was very unaffected and quiet in her smiling; her greatest oath was only “by Saint Loy”; and she was called Madame Eglantine. She sang the divine service very well, intoned in her nose most becomingly; and she spoke French very well and elegantly, after the school of Stratford-at-Bow, for the French of Paris was unknown to her. At table she was well taught besides: she let no morsel fall from her lips, nor wet her fingers deep in her sauce. She knew well how to carry a morsel, and take care that no drop fell on her breast. Her delight was very much set on courtesy. She wiped her upper lip so clean that no trace of grease was visible in her cup when she had drunk her draught. She reached for her food very becomingly. And certainly she was very good company, and very pleasant, and friendly in her bearing, and took pains to imitate the manners of the court and to be stately in her behaviour, and to be held worthy of respect. But to speak of her tender feelings: she was so charitable and so compassionate that she would weep if she saw a mouse caught in a trap, if it were dead or bleeding. She had some small dogs that she fed with roast meat, or milk and fine white bread. But she wept bitterly if one of them died, or if someone struck it sharply with a stick: and all was feeling and tender heart. Her wimple was pleated very becomingly; her nose well-shaped, her eyes grey as glass, her mouth very small, and soft and red besides; but certainly she had a fine forehead: it was almost a span broad, I believe; for certainly she was not undersized. Her cloak was very elegant, as I noticed. About her arm she carried a rosary of small coral beads, divided by green ones, and on it hung a brooch of gold, very bright, on which was written first a crowned A, and after it Amor vincit omnia.' },
      { label: 'German translation', text: 'Auch war da eine Nonne, eine Priorin, die in ihrem Lächeln ganz schlicht und still war; ihr größter Schwur war nur „beim heiligen Loy“; und sie hieß Madame Eglantine. Sehr gut sang sie den Gottesdienst, durch die Nase intoniert, gar schicklich; und Französisch sprach sie sehr schön und zierlich, nach der Schule von Stratford-at-Bow, denn das Französisch von Paris war ihr unbekannt. Bei Tisch war sie außerdem wohlerzogen: sie ließ keinen Bissen von ihren Lippen fallen und tauchte ihre Finger nicht tief in die Soße. Gut wusste sie einen Bissen zu führen und achtzugeben, dass kein Tropfen auf ihre Brust fiel. Auf höfisches Benehmen war ihre Lust sehr gerichtet. Ihre Oberlippe wischte sie so rein, dass in ihrem Becher kein Fäserchen Fett zu sehen war, wenn sie ihren Schluck getrunken hatte. Sehr schicklich langte sie nach ihrem Essen. Und gewiss war sie sehr unterhaltsam und sehr angenehm und liebenswürdig im Auftreten, und sie mühte sich, höfisches Gebaren nachzuahmen und stattlich in ihrem Benehmen zu sein und für ehrwürdig gehalten zu werden. Doch um von ihrem Gemüt zu sprechen: sie war so mildtätig und so mitleidig, dass sie weinte, wenn sie eine Maus in einer Falle gefangen sah, wenn sie tot war oder blutete. Kleine Hunde hatte sie, die sie mit gebratenem Fleisch oder Milch und feinem Weißbrot fütterte. Doch bitterlich weinte sie, wenn einer von ihnen starb oder wenn man ihn scharf mit einer Rute schlug: und alles war Gefühl und zartes Herz. Sehr schicklich war ihr Schleier gefältelt; ihre Nase wohlgeformt, ihre Augen grau wie Glas, ihr Mund sehr klein und dazu weich und rot; doch gewiss hatte sie eine schöne Stirn: sie war fast eine Spanne breit, glaube ich; denn wahrlich, sie war nicht klein gewachsen. Sehr zierlich war ihr Mantel, wie ich bemerkte. Aus kleinen Korallen trug sie um den Arm einen Rosenkranz, mit grünen Perlen unterteilt, und daran hing eine Brosche aus Gold, sehr glänzend, auf der zuerst ein gekröntes A geschrieben stand und danach Amor vincit omnia.' }
    ],
    notes: [
      { ref: 'That of hir smyling was ful simple and coy', html: '<span class="la">simple</span> “unaffected”, <span class="la">coy</span> “quiet, modest”: the vocabulary of romance heroines. Both words are French.' },
      { ref: 'Hir gretteste ooth was but by sëynt Loy', html: '<span class="la">but</span> “only”. Elide the <span class="la">-e</span> of <span class="la">gretteste</span> before <span class="la">ooth</span>; <span class="la">sëynt</span> has two syllables.' },
      { ref: 'Entuned in hir nose ful semely', html: 'Chanting through the nose was the accepted manner of plainsong, so this is not necessarily a criticism.' },
      { ref: 'At mete wel y‑taught was she with‑alle', html: '<span class="la">mete</span> “food, meal”; <span class="la">with-alle</span> “besides”. Eleven syllables with a feminine ending.' },
      { ref: 'That no drope ne fille up‑on hir brest', html: '<span class="la">fille</span>: past subjunctive of <span class="la">fallen</span> in a clause of purpose (Old English Lecture IX).' },
      { ref: 'In curteisye was set ful muche hir lest', html: '<span class="la">lest</span> (Skeat, from Harley; most manuscripts <span class="la">list</span>) “pleasure, desire”, German <em>Lust</em>.' },
      { ref: 'That in hir coppe was no ferthing sene / Of grece', html: '<span class="la">ferthing</span>: literally a farthing, a quarter penny: “not the smallest spot of grease”.' },
      { ref: 'And peyned hir to countrefete chere / Of court', html: 'The first hint of criticism: she <em>imitates</em> court manners, and wants to be <em>held</em> worthy of respect.' },
      { ref: 'She wolde wepe, if that she sawe a mous', html: '<span class="la">sawe</span>: subjunctive in a condition. Note the rhyme <span class="la">pitous : mous</span>.' },
      { ref: 'But sore weep she if oon of hem were deed', html: 'Skeat prints the strong past <span class="la">weep</span> for the metre; the manuscripts have weak <span class="la">wepte</span>. Elsewhere Chaucer uses both.' },
      { ref: 'Hir nose tretys; hir eyen greye as glas', html: 'The catalogue of features follows the conventional description of a romance heroine (grey eyes, small red mouth, broad forehead). A nun was not meant to show her forehead at all.' },
      { ref: 'On which ther was first write a crowned A, / And after, Amor vincit omnia', html: 'A crowned A was a common jewellery device. <span class="la">Amor vincit omnia</span>: Virgil’s line, here ambiguous between sacred and profane love.' }
    ],
    glosses: {
      'a': 'a; (161) the letter A', 'aboute': 'about, around', 'after': 'after; according to; (162) afterwards', 'al': 'all; entirely', 'alle': 'all; with-alle: besides', 'almost': 'almost',
      'also': 'also', 'amiable': 'amiable, friendly', 'amor': '(Latin) love', 'and': 'and', 'arm': 'arm', 'as': 'as',
      'at': 'at; at mete: at table', 'atte': 'at the; Stratford atte Bowe: Stratford-at-Bow', 'bar': 'bore, carried (past of beren)', 'bedes': 'beads; a peire of bedes: a rosary', 'been': 'be', 'ben': 'be',
      'bledde': 'bled', 'bowe': 'Bow (Stratford atte Bowe, east of London)', 'breed': 'bread; wastel-breed: fine white bread', 'brest': 'breast', 'broche': 'brooch', 'brood': 'broad',
      'but': 'but; only', 'by': 'by', 'carie': 'carry', 'caught': 'caught', 'charitable': 'charitable, loving', 'chere': 'manner, behaviour; countrefete chere of court: imitate court manners',
      'clene': 'cleanly, completely', 'cleped': 'called, named (OE clipian)', 'cloke': 'cloak', 'conscience': 'conscience; tender feeling', 'coppe': 'cup', 'coral': 'coral',
      'coude': 'could, knew how to', 'countrefete': 'imitate, copy', 'court': 'court', 'coy': 'quiet, modest (French coi)', 'crowned': 'crowned', 'curteisye': 'courtly manners',
      'deed': 'dead', 'depe': 'deep, deeply', 'digne': 'worthy (French digne); digne of reverence: worthy of respect', 'disport': 'entertainment; of greet disport: very good company', 'divyne': 'divine', 'draughte': 'drink, draught',
      'dronken': 'drunk (past part.)', 'drope': 'drop', 'eglentyne': 'Eglantine (“sweet-briar”), a romance heroine’s name', 'entuned': 'intoned, chanted', 'estatlich': 'stately, dignified', 'eyen': 'eyes (plural in -en)',
      'fair': 'fine, handsome', 'faire': 'well, elegantly', 'falle': 'fall', 'fedde': 'fed', 'ferthing': 'tiny bit (literally a farthing)', 'fetis': 'elegant, well made',
      'fetisly': 'elegantly, neatly', 'fille': 'fell (subj.)', 'fingres': 'fingers', 'first': 'first', 'flesh': 'meat', 'for': 'for; because',
      'forheed': 'forehead (a broad forehead was a sign of beauty)', 'frensh': 'French', 'from': 'from', 'ful': 'very', 'gauded': 'divided by gauds, larger beads (marking the Paternosters)', 'glas': 'glass',
      'gold': 'gold', 'grece': 'grease', 'greet': 'great', 'grene': 'green', 'gretteste': 'greatest', 'greye': 'grey (perhaps bluish or bright: the colour term is uncertain)',
      'had': 'had', 'hadde': 'had', 'hardily': 'certainly', 'hem': 'them', 'heng': 'hung (past of hangen)', 'herte': 'heart',
      'hir': 'her; herself', 'holden': 'held, considered (past part.)', 'houndes': 'dogs', 'i': 'I', 'if': 'if', 'in': 'in',
      'it': 'it', 'kepe': 'take care', 'leet': 'let (past of leten)', 'lest': 'pleasure, delight (German Lust)', 'lippe': 'lip', 'lippes': 'lips',
      'loy': 'St Eligius (French Éloi), patron of goldsmiths', 'madame': 'madam, a courtesy title', 'manere': 'manner, bearing', 'men': 'one, people (indefinite)', 'mete': 'food; a meal', 'milk': 'milk',
      'morsel': 'morsel, bite', 'mous': 'mouse (ou = long u)', 'mouth': 'mouth', 'muche': 'much', 'nat': 'not', 'ne': 'not; nor',
      'no': 'no', 'nonne': 'nun', 'nose': 'nose', 'of': 'of; with', 'omnia': '(Latin) all things', 'on': 'on',
      'oon': 'one', 'ooth': 'oath', 'or': 'or', 'over': 'upper; over lippe: upper lip', 'paris': 'Paris', 'peire': 'set; a peire of bedes: a rosary',
      'peyned': 'took pains (refl.: peyned hir)', 'pinched': 'pleated', 'pitous': 'compassionate, full of pity', 'plesaunt': 'pleasant', 'port': 'bearing', 'prioresse': 'prioress, head of a priory of nuns',
      'raughte': 'reached (past of rechen)', 'reed': 'red', 'reverence': 'respect', 'rosted': 'roasted', 'sauce': 'sauce', 'sawe': 'saw (subj.)',
      'scole': 'school, manner', 'semely': 'seemly, becomingly', 'sene': 'seen, visible', 'service': '(church) service', 'set': 'set; was set … hir lest: her delight was placed', 'she': 'she',
      'shene': 'bright, shining (German schön)', 'sikerly': 'certainly (German sicher)', 'simple': 'unaffected, sincere', 'smal': 'small, slender', 'smale': 'small (pl.)', 'smerte': 'sharply',
      'smoot': 'struck (past of smyten)', 'smyling': 'smiling', 'so': 'so', 'softe': 'soft', 'song': 'sang', 'sore': 'bitterly',
      'spak': 'spoke', 'spanne': 'span (about 9 inches, 23 cm)', 'speken': 'speak', 'stratford': 'Stratford-at-Bow, a convent east of London', 'sëynt': 'saint (two syllables here)', 'taught': 'taught; y-taught: well taught',
      'tendre': 'tender', 'that': 'that; who', 'the': 'the', 'ther': 'there; ther-to: moreover; ther-on: on it', 'to': 'to', 'trappe': 'trap',
      'tretys': 'well-formed, shapely', 'trowe': 'believe, think (German trauen)', 'undergrowe': 'undersized', 'unknowe': 'unknown', 'up': 'up-on: upon', 'vincit': '(Latin) conquers',
      'war': 'aware', 'was': 'was', 'wastel': 'wastel-breed: fine white bread', 'weep': 'wept (strong past of wepen)', 'wel': 'well', 'wepe': 'weep',
      'were': 'were (subj.)', 'wette': 'wet', 'whan': 'when', 'which': 'which', 'wimpel': 'wimple, nun’s headdress covering neck and chin', 'with': 'with',
      'wolde': 'would', 'write': 'written (past part.)', 'wyped': 'wiped', 'y': 'prefix y-: y-taught “taught”', 'yerde': 'stick, rod'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What was the Prioress’s name?', options: ['Madame Eglentyne', 'Dame Alison', 'Madame Loy', 'Dame Pertelote'], answer: 0, explain: 'And she was cleped madame Eglentyne.' },
      { id: 'r2', type: 'mc', prompt: 'What did she feed her dogs?', options: ['Roast meat, milk and fine bread', 'Scraps', 'Fish', 'Nothing'], answer: 0, explain: 'With rosted flesh, or milk and wastel-breed.' },
      { id: 'r3', type: 'mc', prompt: 'What did she try to imitate?', options: ['The manners of the court', 'The Knight', 'The Pope', 'French singing'], answer: 0, explain: 'countrefete chere of court.' },
      { id: 'r4', type: 'mc', prompt: 'How broad was her forehead?', options: ['Almost a span', 'Very narrow', 'Hidden by her wimple', 'Not described'], answer: 0, explain: 'It was almost a spanne brood.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'A “feminine ending” is:', options: ['an extra unstressed syllable at the line end', 'a line spoken by a woman', 'a rhyme on -esse', 'a missing first syllable'], answer: 0, explain: 'Prioresse.' },
      { id: 't2', type: 'mc', prompt: 'Final -e before <span class="la">his</span> or <span class="la">hir</span> is usually:', options: ['elided', 'stressed', 'doubled', 'written ë'], answer: 0, explain: 'h in unstressed words counts as a vowel.' },
      { id: 't3', type: 'mc', prompt: 'The rhyme <span class="la">glas : was</span> shows that <span class="la">was</span> had:', options: ['the vowel a', 'the vowel o', 'a long u', 'no vowel'], answer: 0, explain: 'Modern “woz” is later.' },
      { id: 't4', type: 'mc', prompt: '<span class="la">the yonge sonne</span>: the -e of <span class="la">yonge</span> marks:', options: ['a weak adjective after “the”', 'a plural', 'a verb', 'nothing'], answer: 0, explain: 'Old English strong/weak system.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">She leet no morsel from hir lippes ___</span>', hint: 'fall (infinitive)', answers: ['falle'], full: 'She leet no morsel from hir lippes falle', explain: 'GP 128.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">And al was conscience and tendre ___</span>', hint: 'heart', answers: ['herte'], full: 'And al was conscience and tendre herte', explain: 'GP 150.' },
      { id: 't7', type: 'translate', dir: 'me-en', source: 'She was so charitable and so pitous.', model: 'She was so charitable and so compassionate.', accepted: ['she was so charitable and so compassionate', 'she was so charitable and so pitiful', 'she was so kind and so compassionate', 'she was so charitable and so full of pity', 'she was so loving and so compassionate'] },
      { id: 't8', type: 'translate', dir: 'en-me', source: 'tender heart (Chaucer’s words)', model: 'tendre herte', accepted: ['tendre herte'] },
      { id: 't9', type: 'mc', prompt: 'Her table manners echo advice given in:', options: ['the Roman de la Rose', 'the Rule of St Benedict', 'Beowulf', 'the Bible'], answer: 0, explain: 'By the old woman La Vieille.' },
      { id: 't10', type: 'mc', prompt: 'Who found in Chaucer’s verse “the rude sweetness of a Scotch tune”?', options: ['John Dryden', 'Thomas Tyrwhitt', 'Samuel Johnson', 'William Caxton'], answer: 0, explain: 'In 1700.' },
      { id: 't11', type: 'mc', prompt: 'German verse that uses the unrhymed iambic pentameter:', options: ['the Blankvers of Schiller and Goethe', 'Knittelvers', 'the Nibelungen stanza', 'the hexameter'], answer: 0, explain: 'From English blank verse.' }
    ]
  },

  reference: [
    { title: 'Final -e in verse', headers: ['Position', 'Rule', 'Example'], rows: [['before a consonant', 'pronounced', 'at ME-te WEL'], ['before a vowel', 'elided', 'ful FAIR(e) and'], ['before h (he, his, hir, have)', 'usually elided', 'Marche hath'], ['at the line end', 'pronounced, unstressed', 'Prioresse']] },
    { title: 'Where final -e comes from', headers: ['Type', 'Example', 'Old English'], rows: [['noun', 'sonne, herte', 'sunne, heorte'], ['weak adjective', 'the yonge sonne', 'sēo geonge sunne'], ['plural adjective', 'smale houndes', 'smale hundas'], ['infinitive', 'wepe, falle', 'wēpan, feallan'], ['weak past', 'fedde, bledde', 'fēdde, blēdde']] },
    { title: 'Rhymes as evidence', headers: ['Rhyme', 'Shows'], rows: [['mous : pitous', 'ou = long u in native and French words'], ['glas : was', 'was had a'], ['coy : Loy', 'diphthong oi'], ['deed : breed', 'long e in dead, bread']] }
  ]
});
