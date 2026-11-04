/*
 * Old English — Lecture V: strong verbs; the seven ablaut classes; principal parts; the past tense.
 * Reading: Beowulf 99–125, after Fr. Klaeber (1922), as transcribed online without length marks
 * (sources/beowulf-klaeber-1922-lines-1-2601.txt); slips of the transcription corrected (hehine → he hine,
 * on wocon → onwocon). Macrons added for this course; see CONTENT-CHECKS.md.
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-05',
  number: 5,
  title: 'Grendel',
  subtitle: 'Strong verbs and the seven ablaut series; principal parts; the past tense; Beowulf 99–125',
  minutes: 65,

  intro: `
    <p>Heorot stands, and the Danes live in joy, until a creature from the moors hears the music of the hall. The poet names him, Grendel, traces his ancestry back to Cain, and sends him into the hall at night, where he seizes thirty sleeping men.</p>
    <p>The passage is full of past tenses, and most of them are strong: <span class="la">ongan, hēold, slōg, wunnon, gewāt, becōm, fand, genam</span>. Strong verbs form the past tense by changing the vowel of the root, as German <em>reiten, ritt, geritten</em> or English <em>ride, rode, ridden</em>. The changes are not random: they follow seven patterns, the <strong>ablaut series</strong>, which Old English and German inherited from the same source. A German speaker already knows most of them by ear.</p>
    <p>The key is to learn every strong verb with its <strong>four principal parts</strong>: infinitive, past singular, past plural and past participle, <span class="la">rīdan, rād, ridon, riden</span>. The past has two different vowels, one for the singular and one for the plural. German has lost that distinction, but Middle High German still had it (<em>rîten, reit, riten, geriten</em>).</p>
  `,

  background: [
    {
      title: 'Grendel and the kin of Cain',
      html: `
        <p>Grendel is a <span class="la">mearcstapa</span>, “one who walks the borderlands”, who holds the moors and fens. The poet gives him a biblical genealogy: he belongs to the race of Cain, whom God banished for the murder of Abel (Genesis 4), and from whom, the poet says, all monsters descend: giants, elves, <span class="la">orcnēas</span> and the giants who fought against God (Genesis 6:4, the <em>gigantes</em> of the Latin Bible). The idea that the monsters of Genesis descended from Cain is found in early medieval commentary on the Bible; the poet uses it to place the pagan monsters of northern legend inside Christian history.</p>
        <p>What exactly Grendel looks like the poem never says. He is huge, he walks like a man, he carries off thirty men at once, and his eyes shine like fire. The poet leaves the rest to the listener, which is one reason the creature is so frightening.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Stories_of_beowulf_grendel.jpg/960px-Stories_of_beowulf_grendel.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Stories_of_beowulf_grendel.jpg/500px-Stories_of_beowulf_grendel.jpg|https://upload.wikimedia.org/wikipedia/commons/8/88/Stories_of_beowulf_grendel.jpg" alt="Book illustration of a hairy giant creature stalking through the night towards a hall"><figcaption>Grendel, as imagined by J. R. Skelton for H. E. Marshall’s retelling <em>Stories of Beowulf</em> (1908). The poem itself never describes him in this detail. <span class="credit">Illustration, public domain · <a href="https://commons.wikimedia.org/wiki/File:Stories_of_beowulf_grendel.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Ablaut: an inheritance shared with German',
      html: `
        <p>The vowel alternations of the strong verbs go back to Indo-European, where the same root could appear with <em>e</em>, <em>o</em> or no vowel at all depending on the form. Greek has the same thing in <em>leipō, leloipa, elipon</em> (“leave, have left, left”). Germanic turned the system into the regular pattern of its strong verbs. Because German and English inherited it together, the classes correspond closely:</p>
        <ul>
          <li>class I: <span class="la">rīdan, rād, ridon, riden</span>; German <em>reiten, ritt, geritten</em> (Middle High German <em>reit, riten</em>)</li>
          <li>class III: <span class="la">bindan, band, bundon, bunden</span>; German <em>binden, band, gebunden</em></li>
          <li>class IV: <span class="la">beran, bær, bǣron, boren</span>; German <em>(ge)bären, gebar, geboren</em></li>
          <li>class VI: <span class="la">faran, fōr, fōron, faren</span>; German <em>fahren, fuhr, gefahren</em></li>
        </ul>
        <p>English has lost about two thirds of its strong verbs, which became weak (<em>help, helped</em> for <span class="la">helpan, healp, hulpon, holpen</span>); German has kept more of them (<em>helfen, half, geholfen</em>).</p>
      `
    },
    {
      title: 'A chain of verbs',
      html: `
        <p>Lines 115–125 show the poet’s narrative technique. Each half-line moves the action on with a verb: <span class="la">gewāt</span> (went), <span class="la">becōm</span> (came), <span class="la">fand</span> (found), <span class="la">genam</span> (seized), <span class="la">gewāt</span> (went back). Between them stand the descriptive half-lines: <span class="la">grim ond grǣdig</span>, <span class="la">rēoc ond rēþe</span>, “grim and greedy, savage and fierce”, pairs held together by alliteration. The sleepers <span class="la">sorge ne cūðon</span>, “knew no sorrow”: the reader knows what they do not.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Fand þā ðǣr inne æþelinga gedriht<br>swefan æfter symble; sorge ne cūðon,<br>wonsceaft wera.</p>
    <p>“He found there inside a company of noblemen sleeping after the feast; they knew no sorrow, the misery of men.” <em>Beowulf</em> 118–120, in Klaeber’s edition, with length marks added for this course.</p>
    <p><span class="la">fand</span> is the past singular of <span class="la">findan</span>, class III: <span class="la">findan, fand, fundon, funden</span>, exactly German <em>finden, fand, gefunden</em>. After a verb of perceiving, the infinitive <span class="la">swefan</span> “to sleep” is used as German does: <em>er fand sie schlafen</em> is old-fashioned German but correct, <em>er sah sie schlafen</em> normal.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>Grendel</strong>: stress on the first syllable; the <span class="la">G</span> is hard before <span class="la">r</span>.</li>
      <li><strong>gǣst, gearo, gewāt</strong>: <span class="la">g</span> before a front vowel is <em>j</em>: <em>jaest</em>, <em>ye-a-ro</em>, <em>ye-waat</em>. The same <span class="la">gǣst</span> is German <em>Geist</em>, with a hard <em>g</em>; The <em>gh</em> of English <em>ghost</em> is usually put down to Caxton’s Flemish-trained printers.</li>
      <li><strong>niht</strong>: <span class="la">h</span> before <span class="la">t</span> is German <em>ch</em>: <em>nicht</em> without the <em>c</em>, i.e. like German <em>Nacht</em> with <em>i</em>.</li>
      <li><strong>hrēmig, hring</strong>: breathy <em>hr</em>, as in <span class="la">Hrōðgār</span>.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. Principal parts',
      html: `
        <p>A strong verb is learnt with four forms. All the others can be built from them:</p>
        <ul>
          <li><strong>Infinitive</strong> <span class="la">rīdan</span>: the whole present tense (Lecture III).</li>
          <li><strong>Past singular</strong> <span class="la">rād</span>: 1st and 3rd person singular indicative (<span class="la">ic, hē rād</span>).</li>
          <li><strong>Past plural</strong> <span class="la">ridon</span>: the plural (<span class="la">wē, gē, hīe ridon</span>), the 2nd singular (<span class="la">þū ride</span>) and the whole past subjunctive (<span class="la">ride, riden</span>).</li>
          <li><strong>Past participle</strong> <span class="la">riden</span>, often with <span class="la">ge-</span>: <span class="la">geriden</span>, German <em>geritten</em>.</li>
        </ul>
        <p>Note that the 2nd person singular uses the vowel of the plural: <span class="la">þū ride</span> “you rode” beside <span class="la">hē rād</span>. Older German did the same (Middle High German <em>du rite</em>).</p>
      `
    },
    {
      title: '2. The seven classes',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Class</th><th>Infinitive</th><th>Past sg.</th><th>Past pl.</th><th>Past part.</th><th>German</th></tr></thead>
          <tbody>
            <tr><td>I</td><td class="la">rīdan</td><td class="la">rād</td><td class="la">ridon</td><td class="la">riden</td><td>reiten, ritt</td></tr>
            <tr><td>II</td><td class="la">bēodan</td><td class="la">bēad</td><td class="la">budon</td><td class="la">boden</td><td>bieten, bot</td></tr>
            <tr><td>III</td><td class="la">bindan</td><td class="la">band</td><td class="la">bundon</td><td class="la">bunden</td><td>binden, band</td></tr>
            <tr><td>IV</td><td class="la">beran</td><td class="la">bær</td><td class="la">bǣron</td><td class="la">boren</td><td>gebären, gebar</td></tr>
            <tr><td>V</td><td class="la">sprecan</td><td class="la">spræc</td><td class="la">sprǣcon</td><td class="la">sprecen</td><td>sprechen, sprach</td></tr>
            <tr><td>VI</td><td class="la">faran</td><td class="la">fōr</td><td class="la">fōron</td><td class="la">faren</td><td>fahren, fuhr</td></tr>
            <tr><td>VII</td><td class="la">hātan</td><td class="la">hēt</td><td class="la">hēton</td><td class="la">hāten</td><td>heißen, hieß</td></tr>
          </tbody>
        </table></div>
        <p>Classes I–V are variations on one Indo-European pattern; VI has <span class="la">a – ō – ō – a</span>; VII originally had reduplication (a repeated syllable, as in Latin <em>pependī</em>), and in Old English has a past in <span class="la">ē</span> or <span class="la">ēo</span>: <span class="la">hātan, hēt</span>; <span class="la">healdan, hēold</span>; <span class="la">feallan, fēoll</span>.</p>
        <p>Within each class the vowels can be disguised by sound changes before <span class="la">r, l, h</span> and after <span class="la">g, c, sc</span>: class III <span class="la">helpan, healp, hulpon, holpen</span>; class IV <span class="la">niman, nam, nōmon, numen</span>; class V <span class="la">giefan, geaf, gēafon, giefen</span>. The German forms are often the best guide to the class.</p>
      `
    },
    {
      title: '3. The past tense: endings',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Indicative</th><th>Subjunctive</th></tr></thead>
          <tbody>
            <tr><th>ic</th><td class="la">rād</td><td class="la">ride</td></tr>
            <tr><th>þū</th><td class="la">ride</td><td class="la">ride</td></tr>
            <tr><th>hē</th><td class="la">rād</td><td class="la">ride</td></tr>
            <tr><th>wē, gē, hīe</th><td class="la">ridon</td><td class="la">riden</td></tr>
          </tbody>
        </table></div>
        <p>As in the present, the plural has one form for all persons. The indicative plural <span class="la">-on</span> and the subjunctive <span class="la">-en</span> are distinct in early texts and fall together later, which is why the manuscripts often confuse them (<span class="la">wǣrun / wǣron</span> in Lecture III).</p>
      `
    },
    {
      title: '4. Grammatical change (Verner’s law)',
      html: `
        <p>In some verbs the consonant changes between the singular and the plural of the past: <span class="la">cēosan, cēas, curon, coren</span> “choose”, <span class="la">wesan, wæs, wǣron</span>, <span class="la">slēan, slōg, slōgon, slægen</span>. The <span class="la">s / r</span> and <span class="la">h / g</span> alternations go back to the position of the stress in Indo-European, and were explained by the Danish linguist Karl Verner (formulated 1875, published 1877). German shows the same in <em>ziehen, zog</em> and <em>erkiesen, erkoren</em>, English in <em>was, were</em> and the adjective <em>forlorn</em> (from <span class="la">forlēosan, forloren</span>).</p>
      `
    }
  ],

  vocab: [
    { id: 'bitan', head: 'bītan', la: 'bītan; bāt, biton; biten', pos: 'verb, strong (I)', en: 'bite', note: 'German beißen, biss, gebissen.' },
    { id: 'ceosan', head: 'cēosan', la: 'cēosan; cēas, curon; coren', pos: 'verb, strong (II)', en: 'choose', note: 'German küren, erkoren. s/r alternation.' },
    { id: 'bindan', head: 'bindan', la: 'bindan; band, bundon; bunden', pos: 'verb, strong (III)', en: 'bind', note: 'German binden, band, gebunden.' },
    { id: 'onginnan', head: 'onginnan', la: 'onginnan; ongan, ongunnon; ongunnen', pos: 'verb, strong (III)', en: 'begin', note: 'German beginnen, begann. With an infinitive: ongan fremman, began to do.' },
    { id: 'niman', head: 'niman', la: '(ge)niman; nam, nōmon; numen', pos: 'verb, strong (IV)', en: 'take, seize', note: 'German nehmen, nahm, genommen.' },
    { id: 'cuman', head: 'cuman', la: 'cuman; cōm, cōmon; cumen', pos: 'verb, strong (IV)', en: 'come', note: 'German kommen, kam. becuman: arrive, come.' },
    { id: 'sprecan', head: 'sprecan', la: 'sprecan; spræc, sprǣcon; sprecen', pos: 'verb, strong (V)', en: 'speak', note: 'German sprechen, sprach.' },
    { id: 'swefan', head: 'swefan', la: 'swefan; swæf, swǣfon', pos: 'verb, strong (V)', en: 'sleep (poetic)', note: 'Related to Latin somnus, sopor.' },
    { id: 'faran', head: 'faran', la: 'faran; fōr, fōron; faren', pos: 'verb, strong (VI)', en: 'go, travel', note: 'German fahren, fuhr, gefahren. English fare.' },
    { id: 'feond', head: 'fēond', la: 'fēond; pl. fēond, fēondas', g: 'm', pos: 'noun', en: 'enemy, fiend', note: 'German Feind. Originally a present participle, “hating one”.' },
    { id: 'gaest', head: 'gǣst', la: 'gǣst, gǣstes', g: 'm', pos: 'noun, strong', en: 'spirit, soul; demon', note: 'German Geist, English ghost. Also gāst.' },
    { id: 'hell', head: 'hell', la: 'hell, helle', g: 'f', pos: 'noun, strong', en: 'hell', note: 'German Hölle.' },
    { id: 'niht', head: 'niht', la: 'niht; pl. niht', g: 'f', pos: 'noun', en: 'night', note: 'German Nacht. A root noun: no plural ending.' },
    { id: 'hus', head: 'hūs', la: 'hūs, hūses; pl. hūs', g: 'n', pos: 'noun, strong', en: 'house', note: 'German Haus. Long-stem neuter: plural without ending.' },
    { id: 'wer', head: 'wer', la: 'wer, weres', g: 'm', pos: 'noun, strong', en: 'man', note: 'Survives in werewolf and in German Werwolf. Latin vir is related.' },
    { id: 'mor', head: 'mōr', la: 'mōr, mōres', g: 'm', pos: 'noun, strong', en: 'moor, wasteland', note: 'German Moor.' },
    { id: 'eoten', head: 'eoten', la: 'eoten; pl. eotenas', g: 'm', pos: 'noun, strong', en: 'giant, monster', note: 'Old Norse jǫtunn.' },
    { id: 'metod', head: 'Metod', la: 'Metod, Metodes', g: 'm', pos: 'noun, strong', en: 'God, the Measurer (poetic)', note: 'From metan, measure: he who measures out fate.' }
  ],

  grammarCards: [
    { id: 'oe5-pp', front: 'The four principal parts of a strong verb', back: 'infinitive, past sg., past pl., past participle: rīdan, rād, ridon, riden' },
    { id: 'oe5-c1', front: 'Class I: rīdan', back: 'rīdan, rād, ridon, riden (reiten)' },
    { id: 'oe5-c2', front: 'Class II: bēodan', back: 'bēodan, bēad, budon, boden (bieten)' },
    { id: 'oe5-c3', front: 'Class III: bindan', back: 'bindan, band, bundon, bunden (binden)' },
    { id: 'oe5-c4', front: 'Class IV: beran', back: 'beran, bær, bǣron, boren (gebären)' },
    { id: 'oe5-c5', front: 'Class V: sprecan', back: 'sprecan, spræc, sprǣcon, sprecen (sprechen)' },
    { id: 'oe5-c6', front: 'Class VI: faran', back: 'faran, fōr, fōron, faren (fahren)' },
    { id: 'oe5-c7', front: 'Class VII: hātan', back: 'hātan, hēt, hēton, hāten (heißen)' },
    { id: 'oe5-2sg', front: 'þū ride (past)', back: 'The 2nd sg. past uses the plural vowel, with -e.' },
    { id: 'oe5-endings', front: 'Past endings (strong)', back: 'ind. sg. —, þū -e, pl. -on; subj. sg. -e, pl. -en' },
    { id: 'oe5-verner', front: 'cēosan, cēas, curon, coren', back: 'Grammatical change s/r (Verner’s law): German erkoren, English forlorn.' },
    { id: 'oe5-helpan', front: 'helpan', back: 'helpan, healp, hulpon, holpen (class III; English now weak)' },
    { id: 'oe5-niman', front: 'niman', back: 'niman, nam, nōmon, numen (class IV)' },
    { id: 'oe5-cain', front: 'in Caines cynne', back: 'Grendel is of the kin of Cain (Beowulf 107).' },
    { id: 'oe5-fand', front: 'Fand þā ðǣr inne æþelinga gedriht swefan æfter symble', back: 'He found there inside a band of nobles sleeping after the feast (Beowulf 118–119)' },
    { id: 'oe5-grim', front: 'grim ond grǣdig … rēoc ond rēþe', back: 'grim and greedy … savage and fierce (Beowulf 121–122)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Past singular of <span class="la">rīdan</span>:', options: ['rād', 'ridon', 'riden', 'rīde'], answer: 0, explain: 'Class I: rīdan, rād, ridon, riden.' },
    { id: 'e2', type: 'mc', prompt: 'Past plural of <span class="la">bindan</span>:', options: ['bundon', 'band', 'bunden', 'bindaþ'], answer: 0, explain: 'Class III.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">fōr</span> is the past of:', options: ['faran', 'feran', 'fēran', 'feorran'], answer: 0, explain: 'Class VI: faran, fōr (German fuhr).' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">þū ride</span> means:', options: ['you rode', 'you ride', 'ride!', 'you will ride'], answer: 0, explain: '2nd sg. past: plural vowel + -e.' },
    { id: 'e5', type: 'mc', prompt: 'The class of <span class="la">hātan, hēt</span>:', options: ['VII', 'I', 'IV', 'VI'], answer: 0, explain: 'Class VII: past in ē or ēo.' },
    { id: 'e6', type: 'mc', prompt: 'English <em>forlorn</em> shows:', options: ['the s/r alternation of Verner’s law (forlēosan, forloren)', 'a weak past participle', 'a French loan', 'i-umlaut'], answer: 0, explain: 'Grammatical change.' },
    { id: 'e7', type: 'mc', prompt: 'Grendel is said to be of the kin of:', options: ['Cain', 'Abel', 'Hrothgar', 'Scyld'], answer: 0, explain: 'in Caines cynne.' },
    { id: 'e8', type: 'mc', prompt: 'How many thegns did Grendel seize?', options: ['thirty', 'three', 'thirteen', 'all of them'], answer: 0, explain: 'on ræste genam þrītig þegna.' },
    { id: 'e9', type: 'match', prompt: 'Match each verb to its class.', pairs: [
      ['rīdan', 'I'], ['bēodan', 'II'], ['bindan', 'III'], ['beran', 'IV'], ['faran', 'VI']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the Old English past tense to German.', pairs: [
      ['band', 'band'], ['bær', 'gebar'], ['fōr', 'fuhr'], ['hēt', 'hieß'], ['spræc', 'sprach']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Grendel ___ þrītig þegna.</span>', hint: 'took (niman, past sg.)', answers: ['nam', 'genam'], full: 'Grendel nam þrītig þegna.', explain: 'Class IV: niman, nam.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Hīe rid___ tō þǣre healle.</span>', hint: 'they rode', answers: ['on'], full: 'Hīe ridon tō þǣre healle.', explain: 'Past plural -on.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Hē c___ on niht.</span>', hint: 'came (cuman, past sg.)', answers: ['ōm', 'om'], full: 'Hē cōm on niht.', explain: 'cuman, cōm.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Ic ___ þone fēond.</span>', hint: 'found (findan, past sg.)', answers: ['fand'], full: 'Ic fand þone fēond.', explain: 'Class III: findan, fand.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give the past singular and past plural.', headers: ['past sg.', 'past pl.'], rows: [
      { label: 'rīdan', answers: ['rād', 'ridon'] },
      { label: 'bēodan', answers: ['bēad', 'budon'] },
      { label: 'bindan', answers: ['band', 'bundon'] },
      { label: 'beran', answers: ['bær', 'bǣron'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Give the past plural and past participle.', headers: ['past pl.', 'past part.'], rows: [
      { label: 'niman', answers: ['nōmon', 'numen|genumen'] },
      { label: 'sprecan', answers: ['sprǣcon', 'sprecen|gesprecen'] },
      { label: 'faran', answers: ['fōron', 'faren|gefaren'] },
      { label: 'hātan', answers: ['hēton', 'hāten|gehāten'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the English translation in order.', source: 'Grendel cōm on niht.', tokens: ['Grendel', 'came', 'at', 'night'], explain: 'cuman, cōm.' },
    { id: 'e18', type: 'translate', dir: 'oe-en', source: 'Hē nam þrītig þegna.', model: 'He took thirty thegns.', accepted: ['he took thirty thegns', 'he seized thirty thegns', 'he took thirty thanes', 'he seized thirty thanes', 'he took thirty retainers', 'he seized thirty retainers', 'he took thirty warriors', 'he seized thirty warriors', 'he took thirty men'] },
    { id: 'e19', type: 'translate', dir: 'oe-en', source: 'Hīe cōmon tō þǣre healle.', model: 'They came to the hall.', accepted: ['they came to hall', 'they came to the hall', 'they arrived at hall'] },
    { id: 'e20', type: 'translate', dir: 'en-oe', source: 'he rode', model: 'hē rād', accepted: ['hē rād'] },
    { id: 'e21', type: 'translate', dir: 'en-oe', source: 'they bound', model: 'hīe bundon', accepted: ['hīe bundon'] },
    { id: 'e22', type: 'mc', prompt: 'What provoked Grendel, according to the poem?', options: ['The joy of the men in the hall', 'A theft of treasure', 'An insult from Hrothgar', 'The arrival of Beowulf'], answer: 0, explain: 'Swā þā drihtguman drēamum lifdon … oð ðæt ān ongan fyrene fremman.' },
    { id: 'e23', type: 'mc', prompt: 'What did the sleeping warriors know?', options: ['No sorrow', 'That Grendel was coming', 'The name of their killer', 'Nothing of the feast'], answer: 0, explain: 'sorge ne cūðon.' }
  ],

  reading: {
    title: 'Beowulf 99–125',
    note: 'Authentic text: Klaeber’s edition (1922), lines 99–125. The normalised view adds length marks for this course; “Klaeber, unmarked” shows the text as transcribed online. Tap any word.',
    diplomaticLabel: 'Klaeber, unmarked',
    diplomaticNote: 'Klaeber’s text as transcribed online, without length marks. Two slips of the transcription corrected, as in other editions: hehine (he hine), on wocon (onwocon).',
    text: 'Swā þā drihtguman drēamum lifdon,\nēadiglīce, oð ðæt ān ongan\nfyrene fremman fēond on helle;\nwæs se grimma gǣst Grendel hāten,\nmǣre mearcstapa, sē þe mōras hēold,\nfen ond fæsten; fīfelcynnes eard\nwonsǣli wer weardode hwīle,\nsiþðan him Scyppend forscrifen hæfde\nin Caines cynne — þone cwealm gewræc\nēce Drihten, þæs þe hē Abel slōg;\nne gefeah hē þǣre fǣhðe, ac hē hine feor forwræc,\nMetod for þȳ māne mancynne fram.\nÞanon untȳdras ealle onwōcon,\neotenas ond ylfe ond orcnēas,\nswylce gigantas, þā wið Gode wunnon\nlange þrāge; hē him ðæs lēan forgeald.\nGewāt ðā nēosian, syþðan niht becōm,\nhēan hūses, hū hit Hring-Dene\næfter bēorþege gebūn hæfdon.\nFand þā ðǣr inne æþelinga gedriht\nswefan æfter symble; sorge ne cūðon,\nwonsceaft wera. Wiht unhǣlo,\ngrim ond grǣdig, gearo sōna wæs,\nrēoc ond rēþe, ond on ræste genam\nþrītig þegna; þanon eft gewāt\nhūðe hrēmig tō hām faran,\nmid þǣre wælfylle wīca nēosan.',
    diplomatic: 'Swa þa drihtguman dreamum lifdon,\neadiglice, oð ðæt an ongan\nfyrene fremman feond on helle;\nwæs se grimma gæst Grendel haten,\nmære mearcstapa, se þe moras heold,\nfen ond fæsten; fifelcynnes eard\nwonsæli wer weardode hwile,\nsiþðan him Scyppend forscrifen hæfde\nin Caines cynne — þone cwealm gewræc\nece Drihten, þæs þe he Abel slog;\nne gefeah he þære fæhðe, ac he hine feor forwræc,\nMetod for þy mane mancynne fram.\nÞanon untydras ealle onwocon,\neotenas ond ylfe ond orcneas,\nswylce gigantas, þa wið Gode wunnon\nlange þrage; he him ðæs lean forgeald.\nGewat ða neosian, syþðan niht becom,\nhean huses, hu hit Hring-Dene\næfter beorþege gebun hæfdon.\nFand þa ðær inne æþelinga gedriht\nswefan æfter symble; sorge ne cuðon,\nwonsceaft wera. Wiht unhælo,\ngrim ond grædig, gearo sona wæs,\nreoc ond reþe, ond on ræste genam\nþritig þegna; þanon eft gewat\nhuðe hremig to ham faran,\nmid þære wælfylle wica neosan.',
    translations: [
      { label: 'English translation', text: 'So the warriors lived in joy, happily, until one began to commit crimes, a fiend from hell. The grim spirit was called Grendel, the notorious walker of the borderlands, who held the moors, the fen and the fastness; the unhappy creature lived for a time in the land of the race of monsters, since the Creator had condemned him among the kin of Cain: the eternal Lord avenged that killing, because he slew Abel. He did not rejoice in that feud, but the Measurer banished him far from mankind for that crime. From there all the evil offspring arose, giants and elves and walking dead, and the giants who fought against God for a long time; he gave them their reward for that. Then, when night came, he went to visit the high house, to see how the Ring-Danes had settled in it after the beer-drinking. He found there inside a band of noblemen sleeping after the feast; they knew no sorrow, the misery of men. The creature of destruction, grim and greedy, was ready at once, savage and fierce, and seized thirty thegns from their rest; from there he went back, exulting in his plunder, to travel home with his fill of slaughter, to seek out his dwelling.' },
      { label: 'German translation', text: 'So lebten die Krieger in Freuden, glücklich, bis einer Untaten zu verüben begann, ein Feind aus der Hölle. Der grimmige Geist hieß Grendel, der berüchtigte Grenzgänger, der die Moore beherrschte, Sumpf und Feste; der unselige Wicht bewohnte eine Zeit lang das Land des Riesengeschlechts, seit der Schöpfer ihn unter Kains Sippe verdammt hatte: den Mord rächte der ewige Herr, dass er Abel erschlug. Er freute sich jener Fehde nicht, sondern der Messende verbannte ihn für die Untat weit von den Menschen. Daher entstanden alle Unholde, Riesen und Elben und Totengeister, auch die Giganten, die lange Zeit gegen Gott kämpften; er gab ihnen den Lohn dafür. Da ging er, als die Nacht kam, das hohe Haus aufsuchen, wie die Ring-Dänen es nach dem Biergelage bezogen hatten. Er fand dort drinnen eine Schar Edler nach dem Mahl schlafen; sie kannten keine Sorge, kein Menschenleid. Das Unheilswesen, grimm und gierig, war sogleich bereit, wild und wütend, und raffte dreißig Gefolgsleute vom Lager; von dort ging er wieder, beutefroh, heimzufahren, mit der Mordfülle seine Wohnstätte aufzusuchen.' }
    ],
    notes: [
      { ref: 'oð ðæt ān ongan fyrene fremman', html: '<span class="la">ongan</span>: past of <span class="la">onginnan</span> (class III), + infinitive, “began to commit”. <span class="la">ān</span>: “one”, the poet withholds the name for three lines.' },
      { ref: 'wæs se grimma gǣst Grendel hāten', html: '<span class="la">hāten</span>: past participle of <span class="la">hātan</span> (class VII), “called”. <span class="la">grimma</span>: weak adjective after the article (Lecture VI).' },
      { ref: 'sē þe mōras hēold', html: '<span class="la">hēold</span>: past of <span class="la">healdan</span> (class VII), German <em>hielt</em>.' },
      { ref: 'siþðan him Scyppend forscrifen hæfde', html: '<span class="la">forscrifen</span>: past participle of <span class="la">forscrīfan</span> (class I), “proscribe, condemn”; with <span class="la">hæfde</span>, a pluperfect.' },
      { ref: 'in Caines cynne', html: 'The manuscript spelling has been much discussed; editors print Cain’s name. See the background.' },
      { ref: 'þone cwealm gewræc ēce Drihten, þæs þe hē Abel slōg', html: '“the eternal Lord avenged the killing, because he (Cain) slew Abel”. <span class="la">gewræc</span>: class V; <span class="la">slōg</span>: past of <span class="la">slēan</span>, class VI. Two subjects, God and Cain, both called <span class="la">hē</span> in the next line: context decides.' },
      { ref: 'ne gefeah hē þǣre fǣhðe', html: '<span class="la">gefēon</span> + genitive: “rejoice in”. Understatement: Cain did not profit from the feud.' },
      { ref: 'eotenas ond ylfe ond orcnēas', html: 'Three kinds of monster: giants, elves, and <span class="la">orcnēas</span>, a word found only here, usually explained as “walking corpses” (<span class="la">orc</span>, from Latin <em>Orcus</em>, + <span class="la">nē</span>, corpse). Tolkien took “orc” from it.' },
      { ref: 'Gewāt ðā nēosian, syþðan niht becōm, hēan hūses', html: '<span class="la">gewāt</span>: past of <span class="la">gewītan</span> (class I), “went”; <span class="la">nēosian</span> + genitive <span class="la">hūses</span>: “to visit the house”. <span class="la">becōm</span>: class IV.' },
      { ref: 'Fand þā ðǣr inne æþelinga gedriht swefan', html: 'See the source panel. <span class="la">swefan</span>: infinitive after a verb of perceiving.' },
      { ref: 'ond on ræste genam þrītig þegna', html: '<span class="la">genam</span>: class IV. <span class="la">þrītig þegna</span>: “thirty of thegns”, numerals from twenty upwards take the genitive.' },
      { ref: 'hūðe hrēmig tō hām faran', html: '<span class="la">hūðe hrēmig</span>: “exulting in plunder”, dative with an adjective. <span class="la">tō hām</span>: “home”, the same idiom as German <em>nach Hause</em>.' }
    ],
    glosses: {
      'swā': 'so, thus', 'þā': 'then; the (pl.); who', 'drihtguman': 'retainers, warriors (nom. pl. of drihtguma, weak)', 'drēamum': 'in joys (dat. pl. of drēam)', 'lifdon': 'lived (pret. pl. of libban)', 'ēadiglīce': 'happily, blessedly',
      'oð': 'until (oð ðæt)', 'ðæt': 'that', 'ān': 'one, a certain one', 'ongan': 'began (pret. of onginnan, class III)', 'fyrene': 'crimes, wicked deeds (acc. pl. of fyren)', 'fremman': 'do, commit',
      'fēond': 'enemy, fiend', 'on': 'in; on', 'helle': 'hell (dat. of hell)', 'wæs': 'was', 'se': 'the', 'grimma': 'grim, fierce (weak)',
      'gǣst': 'spirit, demon', 'grendel': 'Grendel', 'hāten': 'called (past part. of hātan)', 'mǣre': 'famous, notorious', 'mearcstapa': 'border-walker, one who roams the borderlands (weak)', 'sē': 'he (sē þe: he who)',
      'þe': 'who, which; that', 'mōras': 'moors (acc. pl. of mōr)', 'hēold': 'held, occupied (pret. of healdan)', 'fen': 'fen, marsh', 'ond': 'and', 'fæsten': 'stronghold, fastness',
      'fīfelcynnes': 'of the race of monsters (gen.)', 'eard': 'home, dwelling (acc.)', 'wonsǣli': 'unhappy, unblessed', 'wer': 'man, being', 'weardode': 'occupied, guarded (pret. of weardian)', 'hwīle': 'for a time (acc. of hwīl)',
      'siþðan': 'since, after', 'syþðan': 'when, after', 'him': 'him; them; to them', 'scyppend': 'the Creator', 'forscrifen': 'condemned, proscribed (past part. of forscrīfan, class I)', 'hæfde': 'had',
      'hæfdon': 'had (pl.)', 'in': 'in, among', 'caines': 'Cain’s (gen.)', 'cynne': 'kin, race (dat. of cynn)', 'þone': 'that (acc. m.)', 'cwealm': 'killing, murder',
      'gewræc': 'avenged (pret. of gewrecan, class V)', 'ēce': 'eternal', 'drihten': 'the Lord', 'þæs': 'because (þæs þe); of that', 'hē': 'he', 'abel': 'Abel',
      'slōg': 'slew (pret. of slēan, class VI)', 'ne': 'not', 'gefeah': 'rejoiced (pret. of gefēon + gen., class V)', 'þǣre': 'the (gen./dat. f.)', 'fǣhðe': 'feud, deed of enmity (gen.)', 'ac': 'but',
      'hine': 'him', 'feor': 'far', 'forwræc': 'banished (pret. of forwrecan)', 'metod': 'the Measurer, God', 'for': 'for, because of', 'þȳ': 'that (instr.)',
      'māne': 'crime (dat. of mān)', 'mancynne': 'from mankind (dat.)', 'fram': 'from, away from', 'þanon': 'from there, thence', 'untȳdras': 'evil offspring (nom. pl. of untȳdre)', 'ealle': 'all',
      'onwōcon': 'arose, were born (pret. pl. of onwæcnan)', 'eotenas': 'giants (nom. pl. of eoten)', 'ylfe': 'elves (nom. pl. of ælf)', 'orcnēas': 'evil spirits, walking dead (meaning disputed)', 'swylce': 'also, likewise', 'gigantas': 'giants (Latin gigantes)',
      'wið': 'against', 'gode': 'God (dat.)', 'wunnon': 'fought (pret. pl. of winnan, class III)', 'lange': 'long', 'þrāge': 'time (acc.: for a long time)', 'ðæs': 'for that',
      'lēan': 'reward, requital', 'forgeald': 'repaid (pret. of forgieldan, class III)', 'gewāt': 'went, departed (pret. of gewītan, class I)', 'ðā': 'then', 'nēosian': 'visit, seek out (+ gen.)', 'nēosan': 'seek out, visit (+ gen.)',
      'niht': 'night', 'becōm': 'came (pret. of becuman, class IV)', 'hēan': 'high (gen.)', 'hūses': 'house (gen. of hūs)', 'hū': 'how', 'hit': 'it',
      'hring': 'ring- (Hring-Dene: Ring-Danes)', 'dene': 'Danes', 'æfter': 'after', 'bēorþege': 'beer-drinking (dat.)', 'gebūn': 'settled in (past part. of būan)', 'fand': 'found (pret. of findan, class III)',
      'ðǣr': 'there', 'inne': 'inside', 'æþelinga': 'of nobles (gen. pl.)', 'gedriht': 'troop, company', 'swefan': 'sleeping (inf.: found them sleep)', 'symble': 'feast (dat. of symbel)',
      'sorge': 'sorrow (acc. of sorg)', 'cūðon': 'knew (pret. pl. of cunnan)', 'wonsceaft': 'misery', 'wera': 'of men (gen. pl. of wer)', 'wiht': 'creature, being', 'unhǣlo': 'of destruction (gen.)',
      'grim': 'grim', 'grǣdig': 'greedy', 'gearo': 'ready', 'sōna': 'at once', 'rēoc': 'savage', 'rēþe': 'fierce',
      'ræste': 'rest, bed (dat. of ræst)', 'genam': 'took, seized (pret. of geniman, class IV)', 'þrītig': 'thirty', 'þegna': 'thegns (gen. pl.: thirty of thegns)', 'eft': 'back, again', 'hūðe': 'plunder, booty (dat.)',
      'hrēmig': 'exulting', 'tō': 'to', 'hām': 'home', 'faran': 'go, travel', 'mid': 'with', 'wælfylle': 'fill of slaughter (dat.)',
      'wīca': 'dwellings (gen. pl. of wīc)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Where did Grendel live?', options: ['On the moors and in the fen', 'In a cave under Heorot', 'In the sea', 'In a hall of his own'], answer: 0, explain: 'sē þe mōras hēold, fen ond fæsten.' },
      { id: 'r2', type: 'mc', prompt: 'Why was Cain’s race banished?', options: ['For Cain’s killing of Abel', 'For fighting the Danes', 'For stealing treasure', 'For building Heorot'], answer: 0, explain: 'þæs þe hē Abel slōg.' },
      { id: 'r3', type: 'mc', prompt: 'When did Grendel go to the hall?', options: ['When night came', 'At dawn', 'During the feast', 'At midday'], answer: 0, explain: 'syþðan niht becōm.' },
      { id: 'r4', type: 'mc', prompt: 'In what state did Grendel go home?', options: ['Exulting in his plunder', 'Wounded', 'Ashamed', 'Pursued by the Danes'], answer: 0, explain: 'hūðe hrēmig.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Past participle of <span class="la">bindan</span>:', options: ['bunden', 'bundon', 'band', 'binden'], answer: 0, explain: 'Class III.' },
      { id: 't2', type: 'mc', prompt: 'Class of <span class="la">sprecan, spræc, sprǣcon, sprecen</span>:', options: ['V', 'IV', 'III', 'VI'], answer: 0, explain: 'Class V: participle with e.' },
      { id: 't3', type: 'mc', prompt: 'Which form is plural?', options: ['bǣron', 'bær', 'beran', 'boren'], answer: 0, explain: 'Past plural -on.' },
      { id: 't4', type: 'mc', prompt: 'Past singular of <span class="la">cēosan</span>:', options: ['cēas', 'curon', 'coren', 'cēosaþ'], answer: 0, explain: 'cēosan, cēas, curon, coren.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Hīe c___ tō Heorote.</span>', hint: 'they came', answers: ['ōmon', 'omon'], full: 'Hīe cōmon tō Heorote.', explain: 'cuman, cōm, cōmon.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">Se cyning h___ him gold beran.</span>', hint: 'ordered (hātan, past sg.)', answers: ['ēt', 'et'], full: 'Se cyning hēt him gold beran.', explain: 'Class VII: hātan, hēt.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Grendel fand þā þegnas.', model: 'Grendel found the thegns.', accepted: ['grendel found thegns', 'grendel found thanes', 'grendel found retainers', 'grendel found warriors'] },
      { id: 't8', type: 'translate', dir: 'en-oe', source: 'we spoke (sprecan)', model: 'wē sprǣcon', accepted: ['wē sprǣcon'] },
      { id: 't9', type: 'mc', prompt: 'Who explained the s/r alternation in cēosan, curon?', options: ['Karl Verner', 'Jacob Grimm', 'Henry Sweet', 'Friedrich Klaeber'], answer: 0, explain: 'Verner’s law, 1875.' },
      { id: 't10', type: 'mc', prompt: 'Which word did Tolkien take from <span class="la">orcnēas</span>?', options: ['orc', 'ent', 'hobbit', 'elf'], answer: 0, explain: 'orc + nē, corpse.' },
      { id: 't11', type: 'mc', prompt: 'Why has English <em>help</em> a weak past (<em>helped</em>)?', options: ['Many strong verbs became weak in English', 'helpan was always weak', 'It is a French word', 'By i-umlaut'], answer: 0, explain: 'helpan, healp, hulpon, holpen was strong.' }
    ]
  },

  reference: [
    { title: 'The seven classes of strong verbs', headers: ['Class', 'Inf.', 'Past sg.', 'Past pl.', 'Past part.'], rows: [['I', 'rīdan', 'rād', 'ridon', 'riden'], ['II', 'bēodan', 'bēad', 'budon', 'boden'], ['III', 'bindan', 'band', 'bundon', 'bunden'], ['IV', 'beran', 'bær', 'bǣron', 'boren'], ['V', 'sprecan', 'spræc', 'sprǣcon', 'sprecen'], ['VI', 'faran', 'fōr', 'fōron', 'faren'], ['VII', 'hātan', 'hēt', 'hēton', 'hāten']] },
    { title: 'Past tense of a strong verb', headers: ['', 'Indicative', 'Subjunctive'], rows: [['ic', 'rād', 'ride'], ['þū', 'ride', 'ride'], ['hē', 'rād', 'ride'], ['wē, gē, hīe', 'ridon', 'riden']] },
    { title: 'Strong verbs in the reading', headers: ['Form', 'Infinitive', 'Class'], rows: [['ongan', 'onginnan', 'III'], ['hēold', 'healdan', 'VII'], ['gewræc', 'gewrecan', 'V'], ['slōg', 'slēan', 'VI'], ['wunnon', 'winnan', 'III'], ['gewāt', 'gewītan', 'I'], ['becōm', 'becuman', 'IV'], ['fand', 'findan', 'III'], ['genam', 'geniman', 'IV']] }
  ]
});
