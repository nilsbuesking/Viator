/*
 * Middle English — Lecture III: verbs. Present tense (-e, -est, -eth, -en), strong and weak past, past
 * participles with and without y-, perfect with have and be. Reading: General Prologue 43–78 (the Knight)
 * in Skeat’s edition (1894), from the Project Gutenberg text. Pictures from Wikimedia Commons.
 */
Viator.addLecture('me', {
  id: 'me-03',
  number: 3,
  title: 'The Knight',
  subtitle: 'Verbs: present and past, -eth and -en, strong and weak; General Prologue 43–78',
  minutes: 60,

  intro: `
    <p>The first portrait is the Knight, the highest-ranking of the lay pilgrims: a veteran of crusades from Spain to Lithuania and from Egypt to Turkey, who loves “trouthe and honour, fredom and curteisye”, is as meek as a girl, and comes straight from campaign in a tunic stained by his mail-coat. He is “a verray parfit gentil knight”, a line that every English schoolchild once learned and that scholars have argued about ever since.</p>
    <p>The portrait is a catalogue of past tenses, which makes it the place for the verb. The system is still visibly Germanic: strong verbs change their vowel (<span class="la">ryden, rood, riden</span>), weak verbs add a dental (<span class="la">loved, sayde, wente</span>), and the perfect is made with <span class="la">have</span> or <span class="la">be</span> as in German (<span class="la">hadde he riden, he was y-come</span>). The endings, however, are now few, and German speakers will find them easier than the Old English ones.</p>
  `,

  background: [
    {
      title: 'The Knight’s campaigns',
      html: `
        <p>Every place in the portrait is a real battlefield of the 14th century, mostly of the “late crusades”: Alexandria (sacked in 1365 by Peter I of Cyprus), Algeciras in Spain (besieged 1342–44), Ayas in Armenia (1367), Attalia, now Antalya (1361), Tlemcen in North Africa, Benmarin in Morocco, and service with the Muslim lord of Palatia (Balat) against another “heathen” in Turkey. Chaucer gives him no campaign in the Hundred Years’ War against France, though English knights fought there constantly.</p>
        <p>German readers will know the northern campaigns best. <span class="la">Pruce</span> and <span class="la">Lettow</span> are Prussia and Lithuania, where the Teutonic Order fought the last pagans of Europe; knights from all over the West came on the Order’s <em>Preußenreisen</em> (hence <span class="la">reysed</span>, German <em>reisen</em> in its old sense “go on campaign”). The Order honoured the most distinguished guests at a <em>Ehrentisch</em>, a table of honour, which is what <span class="la">he hadde the bord bigonne / Aboven alle naciouns in Pruce</span> refers to. Henry Bolingbroke, the future Henry IV, made the journey in 1390–91.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_Knight_-_Ellesmere_Chaucer.jpg/960px-The_Knight_-_Ellesmere_Chaucer.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_Knight_-_Ellesmere_Chaucer.jpg/500px-The_Knight_-_Ellesmere_Chaucer.jpg|https://upload.wikimedia.org/wikipedia/commons/7/77/The_Knight_-_Ellesmere_Chaucer.jpg" alt="Medieval miniature of a knight on horseback in a plain tunic"><figcaption>The Knight, from the Ellesmere manuscript of the <em>Canterbury Tales</em> (Huntington Library, EL 26 C 9), early 15th century. The miniatures stand in the margin beside the beginning of each pilgrim’s tale. <span class="credit">Manuscript image, public domain · <a href="https://commons.wikimedia.org/wiki/File:The_Knight_-_Ellesmere_Chaucer.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'A perfect knight, or a mercenary?',
      html: `
        <p>Most readers have taken the portrait at face value: an ideal of Christian chivalry, deliberately set apart from the fashionable knights of the court (his son the Squire, in the next portrait, is much more interested in clothes and love). In 1980 Terry Jones (of Monty Python) argued in <em>Chaucer’s Knight: The Portrait of a Medieval Mercenary</em> that the list of campaigns, including service with a Muslim lord and the brutal sack of Alexandria, would have marked him to Chaucer’s audience as a soldier for hire.</p>
        <p>Historians, notably Maurice Keen (1983), replied that these campaigns were exactly those that respected English knights of Chaucer’s acquaintance had joined, and that crusading still carried great prestige. Most scholars now read the portrait as idealising, with perhaps a hint of old-fashionedness; the question shows how much the reading of Chaucer depends on historical knowledge.</p>
      `
    },
    {
      title: 'The words of chivalry',
      html: `
        <p>Line 46 sets two native words against two French ones: <span class="la">trouthe</span> (OE <span class="la">trēowþ</span>, German <em>Treue</em>), <span class="la">fredom</span> (OE <span class="la">frēodōm</span>), <span class="la">honour</span> and <span class="la">curteisye</span>. Several have shifted their meaning since:</p>
        <ul>
          <li><span class="la">trouthe</span>: keeping one’s word, loyalty, not just “truth”.</li>
          <li><span class="la">fredom</span>: the generosity and openness of a free, noble man, not political freedom.</li>
          <li><span class="la">gentil</span>: of noble birth and noble conduct, not “gentle”.</li>
          <li><span class="la">vileinye</span>: conduct unworthy of a gentleman (from <em>vilain</em>, a peasant), not crime.</li>
          <li><span class="la">verray</span>: true, real (French <em>vrai</em>), not “very”.</li>
        </ul>
        <p>The same vocabulary appears in Middle High German courtly literature: <em>triuwe, êre, milte, hövescheit</em>. The ideals were European; the words came to England through French.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">He never yet no vileinye ne sayde<br>In al his lyf, un‑to no maner wight.<br>He was a verray parfit gentil knight.</p>
    <p>“He never yet said anything discourteous in all his life to any sort of person. He was a true, perfect, noble knight.” General Prologue 70–72, Skeat’s text (1894).</p>
    <p>Four negatives in one sentence: <span class="la">never, no, ne, no</span>. In Middle English, as in Old English and in Bavarian today, negatives reinforce each other rather than cancelling out. Lecture VI treats negation in detail.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>chivalrye, curteisye</strong>: French words, stress on the last syllable, <span class="la">ch</span> as English <em>ch</em> (the French of England had not yet changed it to sh).</li>
      <li><strong>werre</strong>: Old Northern French <em>werre</em> for central French <em>guerre</em>; e as in German <em>Herr</em>, with a trilled r.</li>
      <li><strong>foughten</strong>: <span class="la">ou</span> before gh is a diphthong, roughly o + u, then German ch: <em>fouch-tən</em>. <strong>knight</strong>: <em>knicht</em>.</li>
      <li><strong>mayde</strong>: diphthong a + i, final -e a schwa: <em>mai-də</em>.</li>
      <li><strong>wys</strong>: long i, as German <em>wies</em>; the modern diphthong came with the vowel shift.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. The present tense',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Chaucer</th><th>Old English</th><th>German</th></tr></thead>
          <tbody>
            <tr><th>I</th><td class="la">I ryde</td><td class="la">ic rīde</td><td>ich reite</td></tr>
            <tr><th>thou</th><td class="la">thou rydest</td><td class="la">þū rīdest</td><td>du reitest</td></tr>
            <tr><th>he, she</th><td class="la">he rydeth</td><td class="la">hē rīdeþ</td><td>er reitet</td></tr>
            <tr><th>we, ye, they</th><td class="la">we ryden</td><td class="la">wē rīdaþ</td><td>wir reiten</td></tr>
          </tbody>
        </table></div>
        <p>The plural <span class="la">-en</span> is Midland; the South kept <span class="la">-eth</span> (<span class="la">we rydeth</span>). The North had <span class="la">-es</span> in the third singular (<span class="la">he rydes</span>), and that northern form, spreading south in the 15th and 16th centuries, became modern <em>he rides</em>. Chaucer gives northern forms to two Cambridge students in the Reeve’s Tale, often called the first deliberate literary use of dialect in English.</p>
        <p>Short forms are common: <span class="la">he rit</span> for <span class="la">he rydeth</span>, <span class="la">he halt</span> for <span class="la">he holdeth</span> (compare German <em>er hält</em>).</p>
      `
    },
    {
      title: '2. Strong verbs: the past',
      html: `
        <p>The Old English ablaut series (Old English Lecture V) survive, with a different vowel in the past singular and past plural as in Old English and in older German:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Infinitive</th><th>Past sg.</th><th>Past pl.</th><th>Past part.</th><th>German</th></tr></thead>
          <tbody>
            <tr><td class="la">ryden</td><td class="la">rood</td><td class="la">riden</td><td class="la">(y)riden</td><td>reiten, ritt, geritten</td></tr>
            <tr><td class="la">winnen</td><td class="la">wan</td><td class="la">wonne(n)</td><td class="la">(y)wonne(n)</td><td>gewinnen, gewann, gewonnen</td></tr>
            <tr><td class="la">biginnen</td><td class="la">bigan</td><td class="la">bigonne(n)</td><td class="la">bigonne(n)</td><td>beginnen, begann, begonnen</td></tr>
            <tr><td class="la">fighten</td><td class="la">faught</td><td class="la">foughten</td><td class="la">(y)foughten</td><td>fechten, focht, gefochten</td></tr>
            <tr><td class="la">sleen</td><td class="la">slow</td><td class="la">slowen</td><td class="la">slayn</td><td>schlagen, schlug, erschlagen</td></tr>
            <tr><td class="la">comen</td><td class="la">cam, com</td><td class="la">comen</td><td class="la">(y)come(n)</td><td>kommen, kam, gekommen</td></tr>
          </tbody>
        </table></div>
        <p>The plural <span class="la">-en</span> and the past participle <span class="la">-en</span> are often reduced to <span class="la">-e</span> or lost: <span class="la">wonne, bigonne, y-come</span>. Two tendencies already run towards modern English: the difference between singular and plural is levelled (later <em>began/begun</em> but <em>rode</em> for both), and many strong verbs become weak (<span class="la">helped</span> beside <span class="la">holpen</span>).</p>
      `
    },
    {
      title: '3. Weak verbs: the past in -ed, -de, -te',
      html: `
        <ul>
          <li><span class="la">-ed(e)</span>: <span class="la">loved, honoured, reysed, wered</span> (from OE <span class="la">-ode</span>, <span class="la">-ede</span>: <span class="la">lufode</span>, <span class="la">werede</span>).</li>
          <li><span class="la">-de, -te</span>: <span class="la">sayde, hadde, wente</span> (from OE class 1).</li>
          <li>With a vowel change, as German <em>dachte, brachte</em>: <span class="la">thoughte, broughte, soughte, taughte</span>.</li>
        </ul>
        <p>Endings: <span class="la">I loved(e), thou lovedest, he loved(e), we loveden</span>, the past plural again in <span class="la">-en</span>. Note <span class="la">wente</span>: the past of <span class="la">wenden</span> “turn, go”, now used as the past of <span class="la">goon</span>, which had lost its own Old English past <span class="la">ēode</span>.</p>
      `
    },
    {
      title: '4. The perfect, and y- in the participle',
      html: `
        <p>The perfect and pluperfect use <span class="la">have</span>, but verbs of motion and change use <span class="la">be</span>, as in German:</p>
        <ul>
          <li><span class="la">hadde he riden</span> (48): “he had ridden”; German would usually say <em>er war geritten</em>.</li>
          <li><span class="la">he was late y-come from his viage</span> (77): “he had recently come”, German <em>er war gekommen</em>.</li>
          <li><span class="la">At Alisaundre he was, whan it was wonne</span> (51): <span class="la">was wonne</span> is a passive, “was won”.</li>
        </ul>
        <p>The prefix <span class="la">y-</span> (OE <span class="la">ge-</span>) is optional and survives mainly in the South and in verse, where it supplies a syllable: <span class="la">y-come</span> but <span class="la">wonne, slayn</span>. The last English trace is Milton’s archaic <em>star-ypointing</em> and the adjective <em>yclept</em> “called”.</p>
      `
    }
  ],

  vocab: [
    { id: 'werre', head: 'werre', la: 'werre', pos: 'noun', en: 'war', note: 'Old Northern French werre, from Frankish; German verwirren is related.' },
    { id: 'feith', head: 'feith', la: 'feith', pos: 'noun', en: 'faith; loyalty', note: 'French feid, Latin fides.' },
    { id: 'foo', head: 'foo', la: 'foo, pl. foon, foos', pos: 'noun', en: 'enemy, foe', note: 'OE fāh “hostile”; German Fehde is related.' },
    { id: 'lyf', head: 'lyf', la: 'lyf', pos: 'noun', en: 'life', note: 'OE līf, German Leib (“body”, older “life”).' },
    { id: 'wight', head: 'wight', la: 'wight', pos: 'noun', en: 'person, creature', note: 'OE wiht, German Wicht (Bösewicht). no maner wight: nobody at all.' },
    { id: 'prys', head: 'prys', la: 'prys', pos: 'noun', en: 'reputation, renown; prize; price', note: 'French pris, German Preis: the same three senses.' },
    { id: 'sege', head: 'sege', la: 'sege', pos: 'noun', en: 'siege; seat', note: 'French siège.' },
    { id: 'trouthe', head: 'trouthe', la: 'trouthe', pos: 'noun', en: 'loyalty, keeping one’s word; truth', note: 'OE trēowþ, German Treue.' },
    { id: 'winnen', head: 'winnen', la: 'winnen; wan, wonne(n); (y)wonne(n)', pos: 'verb, strong', en: 'win, conquer', note: 'German gewinnen.' },
    { id: 'fighten', head: 'fighten', la: 'fighten; faught, foughten; foughten', pos: 'verb, strong', en: 'fight', note: 'OE feohtan, German fechten.' },
    { id: 'sleen', head: 'sleen', la: 'sleen; slow, slowen; slayn', pos: 'verb, strong', en: 'slay, kill', note: 'OE slēan, German schlagen, erschlagen.' },
    { id: 'weren', head: 'weren', la: 'weren; wered', pos: 'verb, weak', en: 'wear', note: 'Weak in Chaucer; the strong past wore is later.' },
    { id: 'reysen', head: 'reysen', la: 'reysen; reysed', pos: 'verb, weak', en: 'go on a military expedition, raid', note: 'From Middle Low or High German reisen (Preußenreise).' },
    { id: 'loven', head: 'loven', la: 'loven; loved', pos: 'verb, weak', en: 'love', note: 'OE lufian (Old English Lecture VII).' },
    { id: 'worthy', head: 'worthy', la: 'worthy', pos: 'adjective', en: 'distinguished, of high standing', note: 'German würdig. Used for every pilgrim of rank, sometimes ironically.' },
    { id: 'verray', head: 'verray', la: 'verray', pos: 'adjective', en: 'true, real, genuine', note: 'French vrai. Later the adverb very.' },
    { id: 'gentil', head: 'gentil', la: 'gentil', pos: 'adjective', en: 'noble (by birth and conduct)', note: 'French gentil; modern gentle, gentleman.' },
    { id: 'wys', head: 'wys', la: 'wys', pos: 'adjective', en: 'wise, prudent', note: 'OE wīs, German weise.' }
  ],

  grammarCards: [
    { id: 'me3-pres', front: 'Present tense of ryden', back: 'I ryde, thou rydest, he rydeth, we/ye/they ryden' },
    { id: 'me3-es', front: 'Where does modern -s (he rides) come from?', back: 'The northern dialects; Chaucer has -eth' },
    { id: 'me3-strong', front: 'ryden: past sg., past pl., past part.', back: 'rood, riden, (y)riden' },
    { id: 'me3-winnen', front: 'winnen: past sg., past pl., past part.', back: 'wan, wonne(n), (y)wonne(n)' },
    { id: 'me3-sleen', front: 'sleen: past sg., past part.', back: 'slow, slayn' },
    { id: 'me3-weak', front: 'Weak past endings', back: '-ed(e), -de, -te; plural -en (loveden)' },
    { id: 'me3-wente', front: 'wente', back: 'Past of wenden, used as the past of goon' },
    { id: 'me3-perf', front: 'Perfect of verbs of motion', back: 'with be: he was y-come (German er war gekommen)' },
    { id: 'me3-y', front: 'y- in past participles', back: 'Optional; southern and poetic: y-come, but wonne' },
    { id: 'me3-trouthe', front: 'trouthe', back: 'loyalty, keeping one’s word (German Treue)' },
    { id: 'me3-fredom', front: 'fredom', back: 'generosity, noble openness' },
    { id: 'me3-vileinye', front: 'vileinye', back: 'conduct unworthy of a gentleman, rudeness' },
    { id: 'me3-verray', front: 'verray', back: 'true, real (French vrai)' },
    { id: 'me3-pruce', front: 'Pruce, Lettow', back: 'Prussia, Lithuania: the Teutonic Order’s campaigns' },
    { id: 'me3-perfect', front: 'He was a verray parfit gentil knight', back: 'He was a true, perfect, noble knight (GP 72)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">he rydeth</span> is:', options: ['3rd sg. present', 'past', 'plural', 'infinitive'], answer: 0, explain: '-eth, German er reitet.' },
    { id: 'e2', type: 'mc', prompt: 'Past singular of <span class="la">ryden</span>:', options: ['rood', 'riden', 'ryded', 'rid'], answer: 0, explain: 'riden is the plural and participle.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">slayn</span> is the past participle of:', options: ['sleen', 'sleepen', 'slyden', 'seyn'], answer: 0, explain: 'German erschlagen.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">wente</span> is originally the past of:', options: ['wenden', 'goon', 'wiln', 'winnen'], answer: 0, explain: 'It replaced the old past of goon.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">he was late y-come</span> means:', options: ['he had recently come', 'he came late', 'he was coming late', 'he will come'], answer: 0, explain: 'Perfect with be.' },
    { id: 'e6', type: 'mc', prompt: 'What does <span class="la">trouthe</span> mean in line 46?', options: ['loyalty, keeping one’s word', 'facts', 'a truce', 'religion'], answer: 0, explain: 'German Treue.' },
    { id: 'e7', type: 'mc', prompt: 'Where are <span class="la">Pruce</span> and <span class="la">Lettow</span>?', options: ['Prussia and Lithuania', 'Provence and Lothringen', 'Prague and Lübeck', 'Portugal and León'], answer: 0, explain: 'The Teutonic Order’s crusades.' },
    { id: 'e8', type: 'mc', prompt: 'Why is the Knight’s tunic stained?', options: ['He has just come from campaign in mail', 'He fell off his horse', 'He is poor', 'It is a fashion'], answer: 0, explain: 'Al bismotered with his habergeoun.' },
    { id: 'e9', type: 'match', prompt: 'Match the infinitives to their past participles.', pairs: [
      ['ryden', 'riden'], ['winnen', 'wonne'], ['fighten', 'foughten'], ['sleen', 'slayn'], ['comen', 'y-come']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the words to their meaning in Chaucer.', pairs: [
      ['fredom', 'generosity'], ['gentil', 'noble'], ['verray', 'true'], ['vileinye', 'rudeness'], ['prys', 'renown']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">fro the tyme that he first ___ to ryden out</span>', hint: 'began (past sg.)', answers: ['bigan', 'began'], full: 'fro the tyme that he first bigan to ryden out', explain: 'GP 44.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">he lov___ chivalrye</span>', hint: 'loved', answers: ['ed', 'ede'], full: 'he loved chivalrye', explain: 'Weak past.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">And therto hadde he ___ (no man ferre)</span>', hint: 'ridden', answers: ['riden', 'yriden'], full: 'And therto hadde he riden (no man ferre)', explain: 'GP 48.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">they ryd___</span>', hint: 'they ride (present plural)', answers: ['en'], full: 'they ryden', explain: 'Plural -en.' },
    { id: 'e15', type: 'paradigm', prompt: 'Present tense of <span class="la">ryden</span>.', headers: ['Chaucer', 'German'], rows: [
      { label: 'I', answers: ['ryde|ride', 'reite'] },
      { label: 'thou / du', answers: ['rydest|ridest', 'reitest'] },
      { label: 'he / er', answers: ['rydeth|rideth|rit', 'reitet'] },
      { label: 'they / sie', answers: ['ryden|riden', 'reiten'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Give the past singular and the past participle.', headers: ['Past sg.', 'Past part.'], rows: [
      { label: 'ryden', answers: ['rood|rod', 'riden|yriden'] },
      { label: 'winnen', answers: ['wan', 'wonne|wonnen|ywonne'] },
      { label: 'loven', answers: ['loved|lovede', 'loved|ylove|yloved'] },
      { label: 'seken', answers: ['soughte|sought', 'sought|ysought'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the modern translation in order.', source: 'He was late y‑come from his viage', tokens: ['He had', 'recently come', 'from his', 'expedition'], explain: 'GP 77.' },
    { id: 'e18', type: 'translate', dir: 'me-en', source: 'At Alisaundre he was, whan it was wonne.', model: 'He was at Alexandria when it was won.', accepted: ['he was at alexandria when it was won', 'he was at alexandria when it was taken', 'he was at alexandria when it was conquered', 'at alexandria he was when it was won', 'he was at alexandria when it was captured'] },
    { id: 'e19', type: 'translate', dir: 'me-en', source: 'His hors were gode.', model: 'His horses were good.', accepted: ['his horses were good', 'his horses were fine'] },
    { id: 'e20', type: 'translate', dir: 'en-me', source: 'he rode (ryden)', model: 'he rood', accepted: ['he rood', 'he rod', 'he rode'], explain: 'Ryden is a strong verb of class I: singular past rood, from Old English rād, plural riden.' },
    { id: 'e21', type: 'translate', dir: 'en-me', source: 'they loved (past plural)', model: 'they loveden', accepted: ['they loveden', 'they loved', 'they lovede'], explain: 'Weak past plural -eden; the -n is often dropped (they lovede).' },
    { id: 'e22', type: 'mc', prompt: 'Who argued that the Knight is a mercenary?', options: ['Terry Jones (1980)', 'Maurice Keen', 'W. W. Skeat', 'Jill Mann'], answer: 0, explain: 'Keen and most historians disagreed.' },
    { id: 'e23', type: 'mc', prompt: 'The modern ending <em>-s</em> in <em>he rides</em> comes from:', options: ['northern dialects', 'Chaucer’s London', 'French', 'Old English -eþ'], answer: 0, explain: 'Chaucer has -eth.' }
  ],

  reading: {
    title: 'General Prologue 43–78',
    note: 'Authentic text: The Canterbury Tales, General Prologue (Group A) 43–78, the Knight, in Skeat’s edition (The Complete Works of Geoffrey Chaucer, vol. 4, Oxford 1894), from the Project Gutenberg transcription. Among Skeat’s readings: aryve (60, from Harley and Cambridge Gg; Ellesmere and Hengwrt have armee), were (68, E. Hn. Cm.; others was), were (74). Tap any word.',
    text: 'A Knight ther was, and that a worthy man,\nThat fro the tyme that he first bigan\nTo ryden out, he loved chivalrye,\nTrouthe and honour, fredom and curteisye.\nFul worthy was he in his lordes werre,\nAnd therto hadde he riden (no man ferre)\nAs wel in Cristendom as hethenesse,\nAnd ever honoured for his worthinesse.\nAt Alisaundre he was, whan it was wonne;\nFul ofte tyme he hadde the bord bigonne\nAboven alle naciouns in Pruce.\nIn Lettow hadde he reysed and in Ruce,\nNo Cristen man so ofte of his degree.\nIn Gernade at the sege eek hadde he be\nOf Algezir, and riden in Belmarye.\nAt Lyeys was he, and at Satalye,\nWhan they were wonne; and in the Grete See\nAt many a noble aryve hadde he be.\nAt mortal batailles hadde he been fiftene,\nAnd foughten for our feith at Tramissene\nIn listes thryes, and ay slayn his foo.\nThis ilke worthy knight had been also\nSomtyme with the lord of Palatye,\nAgeyn another hethen in Turkye:\nAnd evermore he hadde a sovereyn prys.\nAnd though that he were worthy, he was wys,\nAnd of his port as meke as is a mayde.\nHe never yet no vileinye ne sayde\nIn al his lyf, un‑to no maner wight.\nHe was a verray parfit gentil knight.\nBut for to tellen yow of his array,\nHis hors were gode, but he was nat gay.\nOf fustian he wered a gipoun\nAl bismotered with his habergeoun;\nFor he was late y‑come from his viage,\nAnd wente for to doon his pilgrimage.',
    translations: [
      { label: 'Modern English', text: 'There was a Knight, and a distinguished man, who from the time he first began to ride out on campaign loved chivalry, loyalty and honour, generosity and courtesy. He was very distinguished in his lord’s war, and moreover he had ridden, no man further, both in Christendom and in heathen lands, and was always honoured for his valour. He was at Alexandria when it was won; very often he had sat at the head of the table, above all nations, in Prussia. He had campaigned in Lithuania and in Russia, no Christian man of his rank so often. He had also been in Granada at the siege of Algeciras, and ridden in Benmarin. He was at Ayas and at Attalia when they were won; and he had been at many a noble landing in the Mediterranean. He had been in fifteen mortal battles, and fought for our faith at Tlemcen three times in the lists, and always killed his foe. This same distinguished knight had also once been with the lord of Palatia against another heathen in Turkey; and he always had an outstanding reputation. And though he was distinguished, he was prudent, and in his bearing as meek as a maiden. He never yet said anything discourteous in all his life to anyone at all. He was a true, perfect, noble knight. But to tell you of his equipment: his horses were good, but he was not gaily dressed. He wore a tunic of fustian, all stained by his coat of mail; for he had recently come back from his expedition, and went to make his pilgrimage.' },
      { label: 'German translation', text: 'Ein Ritter war da, und zwar ein würdiger Mann, der von der Zeit an, da er zuerst auszureiten begann, das Rittertum liebte, Treue und Ehre, Großmut und höfische Sitte. Sehr angesehen war er im Krieg seines Herrn, und dazu war er geritten (kein Mann weiter), sowohl in der Christenheit als auch im Heidenland, und stets geehrt für seine Tüchtigkeit. In Alexandria war er, als es gewonnen wurde; sehr oft hatte er den Ehrentisch angeführt, über allen Nationen, in Preußen. In Litauen war er auf Reise gewesen und in Russland, kein christlicher Mann seines Standes so oft. In Granada war er auch bei der Belagerung von Algeciras gewesen und in Benmarin geritten. In Ayas war er und in Attalia, als sie gewonnen wurden; und im Mittelmeer war er bei mancher edlen Landung gewesen. In fünfzehn tödlichen Schlachten war er gewesen und hatte für unseren Glauben in Tlemcen dreimal in den Schranken gekämpft und stets seinen Feind erschlagen. Dieser selbe würdige Ritter war auch einst beim Herrn von Palatia gewesen, gegen einen anderen Heiden in der Türkei; und stets hatte er einen überragenden Ruf. Und obwohl er angesehen war, war er klug und in seinem Auftreten sanft wie eine Jungfrau. Nie hat er in seinem ganzen Leben zu irgendjemandem etwas Unhöfisches gesagt. Er war ein wahrer, vollkommener, edler Ritter. Doch um euch von seiner Ausrüstung zu erzählen: seine Pferde waren gut, aber er war nicht prächtig gekleidet. Aus Barchent trug er einen Waffenrock, ganz befleckt von seinem Kettenhemd; denn er war eben erst von seinem Feldzug gekommen und ging, um seine Pilgerfahrt zu tun.' }
    ],
    notes: [
      { ref: 'A Knight ther was, and that a worthy man', html: 'The formula that opens many portraits: <span class="la">A … ther was</span>. <span class="la">and that</span> “and indeed”. <span class="la">worthy</span> recurs throughout the Prologue, sometimes ironically (the Friar, the Merchant).' },
      { ref: 'To ryden out, he loved chivalrye', html: '<span class="la">ryden out</span>: to ride on campaign. <span class="la">loved</span>: weak past.' },
      { ref: 'And therto hadde he riden (no man ferre)', html: 'Pluperfect with <span class="la">hadde</span> and the strong participle <span class="la">riden</span>; German would use <em>war geritten</em>.' },
      { ref: 'At Alisaundre he was, whan it was wonne', html: '<span class="la">was wonne</span>: passive with the participle of <span class="la">winnen</span> (no <span class="la">y-</span>, final -n dropped).' },
      { ref: 'Ful ofte tyme he hadde the bord bigonne / Aboven alle naciouns in Pruce', html: '“He had often sat at the head of the table above (knights of) all nations in Prussia”: the Teutonic Order’s table of honour.' },
      { ref: 'In Lettow hadde he reysed and in Ruce', html: '<span class="la">reysed</span>: from German <em>reisen</em>, the technical term for the Order’s campaigns (<em>Litauerreisen</em>).' },
      { ref: 'At many a noble aryve hadde he be', html: 'Skeat reads <span class="la">aryve</span> “landing” with Harley and Cambridge; Ellesmere and Hengwrt have <span class="la">armee</span> “army, expedition”, which many modern editors prefer.' },
      { ref: 'And foughten for our feith at Tramissene / In listes thryes, and ay slayn his foo', html: 'Participles depending on <span class="la">hadde</span> in the line before: “and (had) fought … and always slain”. Judicial single combats in the lists were part of these campaigns.' },
      { ref: 'And though that he were worthy, he was wys', html: '<span class="la">were</span>: subjunctive after <span class="la">though</span> (Old English Lecture IX). <span class="la">worthy</span> here: distinguished, bold; <span class="la">wys</span> prudent.' },
      { ref: 'He never yet no vileinye ne sayde', html: 'Multiple negation: see the source panel.' },
      { ref: 'His hors were gode, but he was nat gay', html: '<span class="la">hors</span> is plural (no ending, Lecture II), hence <span class="la">were</span>. <span class="la">gay</span>: brightly dressed.' },
      { ref: 'For he was late y‑come from his viage, / And wente for to doon his pilgrimage', html: 'He comes straight from the campaign to the pilgrimage, perhaps in thanksgiving. <span class="la">y-come</span>: perfect with <span class="la">was</span>.' }
    ],
    glosses: {
      'a': 'a', 'aboven': 'above, ahead of', 'ageyn': 'against (German gegen)', 'al': 'all; al bismotered: all stained', 'algezir': 'Algeciras (in southern Spain; besieged 1342–44)', 'alisaundre': 'Alexandria (taken and sacked 1365)',
      'alle': 'all', 'also': 'also', 'and': 'and', 'another': 'another', 'array': 'dress, equipment', 'aryve': 'landing, disembarkation (from the sea)',
      'as': 'as; as wel … as: both … and', 'at': 'at', 'ay': 'always, every time', 'batailles': 'battles', 'be': 'been (past part. of been)', 'been': 'been (past part.)',
      'belmarye': 'Benmarin, in Morocco', 'bigan': 'began (past sg.)', 'bigonne': 'begun (past part.); the bord bigonne: sat at the head of the table', 'bismotered': 'stained, spotted', 'bord': 'table (German Bord “shelf”, Tafel)', 'but': 'but',
      'chivalrye': 'chivalry, knightly conduct (French)', 'come': 'come (past part.); was … y-come: had come', 'cristen': 'Christian', 'cristendom': 'Christendom', 'curteisye': 'courtesy, courtly manners', 'degree': 'rank',
      'doon': 'do, perform', 'eek': 'also', 'ever': 'ever, always', 'evermore': 'always', 'feith': 'faith', 'ferre': 'further (comparative of fer)',
      'fiftene': 'fifteen', 'first': 'first', 'foo': 'foe, enemy', 'for': 'for; for to: to', 'foughten': 'fought (past part.)', 'fredom': 'generosity, nobility of mind (not political freedom)',
      'fro': 'from (Norse frá)', 'from': 'from', 'ful': 'very', 'fustian': 'fustian, a coarse cloth of cotton and linen', 'gay': 'gaily dressed, showy', 'gentil': 'noble, well-bred',
      'gernade': 'Granada', 'gipoun': 'tunic worn under or over armour', 'gode': 'good (plural)', 'grete': 'great; the Grete See: the Mediterranean', 'habergeoun': 'coat of mail', 'had': 'had',
      'hadde': 'had', 'he': 'he', 'hethen': 'heathen', 'hethenesse': 'heathen lands', 'his': 'his', 'honour': 'honour',
      'honoured': 'honoured (past part.)', 'hors': 'horses (plural without ending)', 'ilke': 'same (OE ilca); this ilke: this same', 'in': 'in', 'is': 'is', 'it': 'it',
      'knight': 'knight (German Knecht)', 'late': 'lately, recently', 'lettow': 'Lithuania (German Litauen)', 'listes': 'lists, enclosed fields for single combat', 'lord': 'lord', 'lordes': 'lord’s',
      'loved': 'loved (past)', 'lyeys': 'Ayas, in Lesser Armenia (taken 1367)', 'lyf': 'life', 'man': 'man', 'maner': 'kind of; no maner wight: no sort of person', 'many': 'many',
      'mayde': 'maiden, young woman (German Magd, Maid)', 'meke': 'meek, gentle', 'mortal': 'deadly; mortal batailles: fights to the death', 'naciouns': 'nations', 'nat': 'not', 'ne': 'not (the old negative)',
      'never': 'never', 'no': 'no', 'noble': 'noble', 'of': 'of; in; of his port: in his bearing', 'ofte': 'often', 'our': 'our',
      'out': 'out; ryden out: ride on campaign', 'palatye': 'Balat (Palatia) in Turkey', 'parfit': 'perfect, complete', 'pilgrimage': 'pilgrimage', 'port': 'bearing, deportment', 'pruce': 'Prussia (German Preußen)',
      'prys': 'reputation, prize (French prix; German Preis)', 'reysed': 'gone on campaign, raided (German reisen in the old sense)', 'riden': 'ridden (past part.)', 'ruce': 'Russia', 'ryden': 'ride', 'satalye': 'Attalia (Antalya), taken 1361',
      'sayde': 'said', 'see': 'sea', 'sege': 'siege', 'slayn': 'slain (past part. of sleen)', 'so': 'so', 'somtyme': 'once, at one time',
      'sovereyn': 'supreme, outstanding', 'tellen': 'tell', 'that': 'that; who', 'the': 'the', 'ther': 'there', 'therto': 'moreover, in addition',
      'they': 'they', 'this': 'this', 'though': 'though; though that: although', 'thryes': 'three times', 'to': 'to; un-to: to', 'tramissene': 'Tlemcen (in Algeria)',
      'trouthe': 'loyalty, fidelity to one’s word (German Treue)', 'turkye': 'Turkey, Asia Minor', 'tyme': 'time', 'un': 'un-to: to (unto)', 'verray': 'true, real (French vrai)', 'viage': 'voyage, expedition',
      'vileinye': 'rudeness, discourtesy (not villainy)', 'was': 'was', 'wel': 'well; as wel … as: both … and', 'wente': 'went (past of wenden)', 'were': 'were (plural); were (subj.)', 'wered': 'wore (past of weren)',
      'werre': 'war (Old North French werre; German Wirren)', 'whan': 'when', 'wight': 'person, creature (German Wicht)', 'with': 'with', 'wonne': 'won, conquered (past part. of winnen)', 'worthinesse': 'worthiness, valour',
      'worthy': 'worthy, distinguished', 'wys': 'wise, prudent', 'y': 'prefix y-: y-come “come” (past part.)', 'yet': 'yet', 'yow': 'you'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What did the Knight love from the beginning of his career?', options: ['Chivalry, loyalty, honour, generosity and courtesy', 'Wealth and fame', 'Hunting', 'Fine clothes'], answer: 0, explain: 'GP 45–46.' },
      { id: 'r2', type: 'mc', prompt: 'How many mortal battles had he fought?', options: ['Fifteen', 'Three', 'Twelve', 'Fifty'], answer: 0, explain: 'At mortal batailles hadde he been fiftene.' },
      { id: 'r3', type: 'mc', prompt: 'How did he behave?', options: ['As meek as a maiden, never discourteous', 'Proud and boastful', 'Loud and merry', 'Silent and sullen'], answer: 0, explain: 'as meke as is a mayde.' },
      { id: 'r4', type: 'mc', prompt: 'How was he dressed?', options: ['In a stained fustian tunic', 'In fine silk', 'In full armour', 'In a pilgrim’s gown'], answer: 0, explain: 'Of fustian he wered a gipoun.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Chaucer’s present plural ending:', options: ['-en', '-es', '-eth', '-ed'], answer: 0, explain: 'we/they ryden.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">foughten</span> is:', options: ['past participle (or past plural) of fighten', 'present plural', 'infinitive', 'a noun'], answer: 0, explain: 'German gefochten.' },
      { id: 't3', type: 'mc', prompt: 'Which verb is weak?', options: ['loven', 'ryden', 'winnen', 'sleen'], answer: 0, explain: 'loved.' },
      { id: 't4', type: 'mc', prompt: '<span class="la">verray</span> means:', options: ['true', 'very', 'various', 'weary'], answer: 0, explain: 'French vrai.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">and ay ___ his foo</span>', hint: 'slain', answers: ['slayn', 'slain'], full: 'and ay slayn his foo', explain: 'GP 63.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">he ___ for to doon his pilgrimage</span>', hint: 'went', answers: ['wente', 'went'], full: 'he wente for to doon his pilgrimage', explain: 'GP 78.' },
      { id: 't7', type: 'translate', dir: 'me-en', source: 'He was a verray parfit gentil knight.', model: 'He was a true, perfect, noble knight.', accepted: ['he was a true perfect noble knight', 'he was a true perfect gentle knight', 'he was a truly perfect noble knight', 'he was a true and perfect noble knight', 'he was a real perfect noble knight'] },
      { id: 't8', type: 'translate', dir: 'en-me', source: 'they rode (ryden, past plural)', model: 'they riden', accepted: ['they riden'], explain: 'Chaucer still has a different vowel in the past plural: he rood, they riden (Old English rād, ridon), as MHG reit, riten.' },
      { id: 't9', type: 'mc', prompt: 'Alexandria was sacked in:', options: ['1365', '1066', '1291', '1453'], answer: 0, explain: 'By Peter I of Cyprus.' },
      { id: 't10', type: 'mc', prompt: 'The Reeve’s Tale is notable for:', options: ['its northern dialect speakers', 'its Latin', 'being in prose', 'its French'], answer: 0, explain: 'Two Cambridge students from the North.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">reysed</span> (54) comes from:', options: ['German reisen', 'French raiser', 'Latin', 'Old Norse'], answer: 0, explain: 'The Order’s Reisen.' }
    ]
  },

  reference: [
    { title: 'Present tense', headers: ['Person', 'Chaucer', 'German'], rows: [['I', 'ryde', 'reite'], ['thou', 'rydest', 'reitest'], ['he', 'rydeth (rit)', 'reitet'], ['we, ye, they', 'ryden', 'reiten']] },
    { title: 'Strong verbs', headers: ['Infinitive', 'Past sg.', 'Past pl.', 'Past part.'], rows: [['ryden', 'rood', 'riden', '(y)riden'], ['winnen', 'wan', 'wonne(n)', '(y)wonne(n)'], ['biginnen', 'bigan', 'bigonne(n)', 'bigonne(n)'], ['fighten', 'faught', 'foughten', 'foughten'], ['sleen', 'slow', 'slowen', 'slayn'], ['comen', 'cam, com', 'comen', '(y)come(n)']] },
    { title: 'Weak verbs', headers: ['Infinitive', 'Past', 'Note'], rows: [['loven', 'loved(e)', '-ed'], ['seyen', 'sayde', '-de'], ['wenden', 'wente', '-te; past of goon'], ['seken', 'soughte', 'vowel change'], ['thenken', 'thoughte', 'vowel change']] }
  ]
});
