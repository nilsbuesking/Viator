/*
 * Middle English — Lecture V: the layers of the vocabulary. Native, Norse, French and Latin words; how to
 * recognise them; doublets; hybrids. Reading: General Prologue 445–476 (the Wife of Bath) in Skeat’s edition
 * (1894), from the Project Gutenberg text. Pictures from Wikimedia Commons.
 */
Viator.addLecture('me', {
  id: 'me-05',
  number: 5,
  title: 'The Wife of Bath',
  subtitle: 'French and Norse in English: the layers of the vocabulary; General Prologue 445–476',
  minutes: 60,

  intro: `
    <p>The Wife of Bath is a cloth-maker from near Bath, better at weaving than the Flemings, a little deaf, gap-toothed, furious if any woman goes to the offering before her, with Sunday kerchiefs that “weighed ten pound”, five husbands married at the church door (“not counting other company in youth”), and pilgrimages to Jerusalem three times, Rome, Boulogne, Santiago and Cologne. She knows all about the remedies of love, “for she knew the old dance of that art”.</p>
    <p>The portrait is also a good sample of the mixed vocabulary of Chaucer’s English. Its core is Old English (<span class="la">wyf, hir, hadde, fyve, heed, feet</span>), with Norse words that came with the Vikings (<span class="la">housbondes, scathe, carpe, gat</span>) and French words of trade, church and fashion (<span class="la">coverchiefs, scarlet, parisshe, charitee, amblere</span>). This lecture shows how to tell the layers apart, using German as a test.</p>
  `,

  background: [
    {
      title: 'A cloth-maker from Bath',
      html: `
        <p>The West Country around Bath was a centre of English cloth production in the 14th century, part of England’s shift from exporting raw wool to Flanders to weaving it at home. To say she surpassed the weavers of Ypres and Ghent, the great Flemish cloth towns, is either high praise or comic exaggeration; the poem leaves it open. Her scarlet stockings were the most expensive cloth of the time, and her ten-pound kerchiefs are a joke about Sunday finery.</p>
        <p>Medieval weddings took place at the church door (<span class="la">at chirche-dore</span>), followed by Mass inside: five such weddings made her respectable, a <span class="la">worthy womman</span>. Her own Prologue, the longest in the <em>Tales</em>, tells the story of the five marriages and explains her deafness: her fifth husband, Jankin, struck her on the ear when she tore three leaves out of his book of stories about wicked wives.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wife-of-Bath-ms.jpg/960px-Wife-of-Bath-ms.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wife-of-Bath-ms.jpg/500px-Wife-of-Bath-ms.jpg|https://upload.wikimedia.org/wikipedia/commons/8/80/Wife-of-Bath-ms.jpg" alt="Medieval miniature of a woman riding astride, with a broad hat, spurs and a whip"><figcaption>The Wife of Bath, from the Ellesmere manuscript of the <em>Canterbury Tales</em> (Huntington Library, EL 26 C 9), early 15th century: astride, with a broad hat and spurs, as in the portrait. <span class="credit">Manuscript image, public domain · <a href="https://commons.wikimedia.org/wiki/File:Wife-of-Bath-ms.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Pilgrim routes',
      html: `
        <p>Her pilgrimages cover the great shrines of Latin Christendom: Jerusalem, Rome, St James at Santiago de Compostela (<span class="la">In Galice at seint Iame</span>), the Virgin at Boulogne, and the Three Kings at Cologne, whose relics had been brought from Milan in 1164. Three journeys to Jerusalem would have been exceptional. “She knew much about wandering by the way” (<span class="la">She coude muche of wandring by the weye</span>) can be read literally, or as a hint at straying from the path.</p>
        <p>Medieval physiognomy linked a gap between the front teeth (<span class="la">gat-tothed</span>) with a bold, amorous and travelling nature; many readers think Chaucer’s audience would have recognised the sign, though the evidence for this specific belief in 14th-century England is thin.</p>
      `
    },
    {
      title: 'Three languages in one country',
      html: `
        <p>After 1066 England had three written languages: Latin for the Church and learning, French for the court, law and administration, and English for everything else. French was by Chaucer’s time an acquired language for most of the English upper classes (the Prioress’s “Stratford French”, Lecture IV), but it had poured several thousand words into English. Norse had come earlier, through the settlements of the 9th and 10th centuries in the North and East (the Danelaw), and its words entered everyday speech rather than the language of power.</p>
        <p>The result is that English has a far larger share of borrowed words than German, which borrowed from Latin and French too but more often translated (German <em>Gewissen</em>, English <em>conscience</em>; <em>Mitleid</em>, <em>compassion</em>).</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">She was a worthy womman al hir lyve,<br>Housbondes at chirche‑dore she hadde fyve,<br>Withouten other companye in youthe</p>
    <p>“She was a respectable woman all her life: she had had five husbands at the church door, not counting other company in her youth.” General Prologue 459–461, Skeat’s text (1894).</p>
    <p>Three layers in three lines: <span class="la">womman, lyve, chirche, dore, fyve, youthe</span> are Old English; <span class="la">housbondes</span> is Old Norse <em>húsbóndi</em> “master of the house” (<em>hús</em> + <em>bóndi</em>, “dweller, farmer”); <span class="la">companye</span> is French. The next line, <span class="la">But therof nedeth nat to speke as nouthe</span> “but there is no need to speak of that just now”, is the narrator’s best-known wink.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>coverchiefs</strong>: French <em>couvre-chef</em>; ch as in <em>church</em>.</li>
      <li><strong>charitee</strong>: French stress at the end: <em>cha-ri-TEE</em>.</li>
      <li><strong>Ierusalem, Iame</strong>: I = J, pronounced as in English <em>Jerusalem, James</em>.</li>
      <li><strong>Boloigne, Coloigne</strong>: <em>bo-LOI-nə, ko-LOI-nə</em>, rhyming.</li>
      <li><strong>housbondes</strong>: <em>huus-bon-dəs</em>, long u.</li>
      <li><strong>scathe</strong>: sk at the start marks it as Norse; a native English word would begin with sh (compare OE <span class="la">sceaþa</span> “enemy”).</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. The layers',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Layer</th><th>Typical areas</th><th>From the portrait</th></tr></thead>
          <tbody>
            <tr><td>Old English</td><td>grammar words, body, family, numbers, daily life</td><td class="la">wyf, she, hir, heed, feet, fyve, newe, chirche, dore</td></tr>
            <tr><td>Old Norse</td><td>everyday words, some pronouns</td><td class="la">housbondes, scathe, carpe, gat-tothed, they</td></tr>
            <tr><td>French</td><td>trade, fashion, law, church, feelings, riding</td><td class="la">coverchiefs, scarlet, parisshe, charitee, amblere, bokeler, remedyes, art, daunce</td></tr>
            <tr><td>Latin (directly)</td><td>learning, theology</td><td>(few in this portrait)</td></tr>
          </tbody>
        </table></div>
        <p>Counting the words of a dictionary, French and Latin loans outnumber native words in later English; counting the words of a running text, native words dominate, because the commonest words (<span class="la">the, and, she, was, hadde</span>) are Old English. Both statements are true, and both are often quoted without the other.</p>
      `
    },
    {
      title: '2. Recognising Norse words',
      html: `
        <p>Norse and English are closely related, so loans are hard to spot. The sound changes that distinguish them help:</p>
        <ul>
          <li><strong>sk</strong> where English has <strong>sh</strong>: <span class="la">skye</span> is Norse, since a native word would begin with <em>sh</em>; <em>skirt</em> (Norse) beside <em>shirt</em> (English): one word, two forms.</li>
          <li><strong>k, g</strong> before front vowels, where English has <strong>ch, y</strong>: Norse <em>kirk</em> beside English <span class="la">chirche</span>; <span class="la">yeven</span> “give” (English) replaced by Norse <em>give</em>; <span class="la">ey</span> “egg” replaced by Norse <em>egg</em>.</li>
          <li><strong>ai/ei</strong> where English has <strong>ō</strong> (from <span class="la">ā</span>): Norse <em>nay</em> beside English <em>no</em>.</li>
        </ul>
        <p>Here German does not help: it has k in <em>Kirche</em> and g in <em>geben</em>, like the Norse forms, because the change of k and g to ch and y before front vowels happened in English (and in Frisian, as in <em>tsjerke</em> “church”), not in German or Norse. Words like <span class="la">housbonde</span> are Norse in form and sense, though their parts exist in English too.</p>
      `
    },
    {
      title: '3. French words and doublets',
      html: `
        <ul>
          <li><strong>Anglo-Norman vs. Central French</strong>: English borrowed first from the French of England (Norman) and later from Paris, so some words came in twice: <em>warden / guardian</em>, <em>catch / chase</em>, <em>warranty / guarantee</em> (Lecture III: <span class="la">werre</span>, Norman, for Parisian <em>guerre</em>).</li>
          <li><strong>Native and French side by side</strong>: <span class="la">wyf / dame</span>, <span class="la">herte / corage</span>, <span class="la">hewe / colour</span>, <span class="la">wrooth / angry</span> (Norse). The French word is often more formal, as Latin words are in German.</li>
          <li><strong>Animals and meat</strong>: <em>ox / beef, swine / pork, sheep / mutton, calf / veal</em>. The usual explanation, made famous by Walter Scott in <em>Ivanhoe</em>, is that the Saxon farmer reared the animal and the Norman lord ate it. It is a neat story, but the French words meant the animal as well as the meat in Middle English, and the specialisation came gradually.</li>
        </ul>
      `
    },
    {
      title: '4. Hybrids, compounds and first appearances',
      html: `
        <p>Borrowed words were quickly treated as English: French stems take English endings (<span class="la">remedyes, passed, wimpled</span>), and English and French parts combine: <span class="la">clooth-making</span>, <span class="la">foot-mantel</span> (English + French), <em>gentleness</em> (French + English). German does the same (<em>buchstabieren</em>, <em>Hausmeister</em>).</p>
        <p>The <em>Oxford English Dictionary</em> credits Chaucer with the first recorded use of hundreds of words. That reflects how much of his work survives and how thoroughly it was read by the dictionary’s compilers, not necessarily that he coined them; many were surely current in London speech before he wrote them down.</p>
      `
    }
  ],

  vocab: [
    { id: 'housbonde', head: 'housbonde', la: 'housbonde, pl. housbondes', pos: 'noun', en: 'husband; master of a household', note: 'Old Norse húsbóndi: hús “house” + bóndi “dweller, farmer” (German bauen, Bauer).' },
    { id: 'wyf', head: 'wyf', la: 'wyf, pl. wyves', pos: 'noun', en: 'woman; wife', note: 'OE wīf, German Weib. Still “woman” in Chaucer: a good wyf of bisyde Bathe.' },
    { id: 'womman', head: 'womman', la: 'womman, pl. wommen', pos: 'noun', en: 'woman', note: 'OE wīfmann “female person”.' },
    { id: 'heed', head: 'heed', la: 'heed', pos: 'noun', en: 'head', note: 'OE hēafod, German Haupt.' },
    { id: 'chirche', head: 'chirche', la: 'chirche', pos: 'noun', en: 'church', note: 'OE cirice, German Kirche; northern kirk from Norse.' },
    { id: 'parisshe', head: 'parisshe', la: 'parisshe', pos: 'noun', en: 'parish', note: 'French paroisse, from Greek paroikia; German Pfarrei probably goes back to the same word.' },
    { id: 'charitee', head: 'charitee', la: 'charitee', pos: 'noun', en: 'love of one’s neighbour, Christian love', note: 'French charité, Latin caritas. Out of alle charitee: furious.' },
    { id: 'scathe', head: 'scathe', la: 'scathe', pos: 'noun', en: 'harm; a pity', note: 'Old Norse skaði; German Schaden (cognate). That was scathe: that was a pity.' },
    { id: 'passen', head: 'passen', la: 'passen; passed', pos: 'verb, weak', en: 'pass; surpass, excel', note: 'French passer; German passieren is a later loan.' },
    { id: 'carpen', head: 'carpen', la: 'carpen; carped', pos: 'verb, weak', en: 'talk, chatter', note: 'Old Norse karpa “boast”. Modern carp “complain” is the same word.' },
    { id: 'sweren', head: 'sweren', la: 'sweren; swoor; sworn', pos: 'verb, strong', en: 'swear', note: 'OE swerian, German schwören.' },
    { id: 'durren', head: 'durren', la: 'dar, dorste', pos: 'verb, preterite-present', en: 'dare', note: 'OE durran; I dorste swere: I would dare swear. Not related to German dürfen (OE þurfan).' },
    { id: 'weyen', head: 'weyen', la: 'weyen; weyed', pos: 'verb, weak', en: 'weigh', note: 'OE wegan, German wiegen, wägen.' },
    { id: 'laughen', head: 'laughen', la: 'laughen; lough', pos: 'verb, strong', en: 'laugh', note: 'OE hliehhan, German lachen; gh = German ch.' },
    { id: 'wrooth', head: 'wrooth', la: 'wrooth', pos: 'adjective', en: 'angry', note: 'OE wrāþ; modern wroth, wrath. German has no cognate in common use.' },
    { id: 'deef', head: 'deef', la: 'deef', pos: 'adjective', en: 'deaf', note: 'OE dēaf, German taub.' },
    { id: 'large', head: 'large', la: 'large', pos: 'adjective', en: 'broad, generous', note: 'French large “broad”; English large has narrowed to “big”.' },
    { id: 'soothly', head: 'soothly', la: 'sooth; soothly', pos: 'adverb', en: 'truly', note: 'OE sōþ “truth”; forsooth, soothsayer.' }
  ],

  grammarCards: [
    { id: 'me5-layers', front: 'The four layers of Chaucer’s vocabulary', back: 'Old English core; Norse; French; Latin (learned)' },
    { id: 'me5-core', front: 'Which words are almost all Old English?', back: 'Grammar words, pronouns (except they), numbers, body, family' },
    { id: 'me5-sk', front: 'sk- in a native-looking word (sky, skin, skirt)', back: 'Usually Norse; English has sh (shirt)' },
    { id: 'me5-kg', front: 'kirk, give, egg', back: 'Norse forms; English church, yeven, ey' },
    { id: 'me5-husband', front: 'housbonde', back: 'Old Norse húsbóndi “householder”' },
    { id: 'me5-scathe', front: 'scathe', back: 'Old Norse skaði “harm” (German Schaden)' },
    { id: 'me5-norman', front: 'warden / guardian', back: 'Norman and Parisian French forms of one word' },
    { id: 'me5-meat', front: 'ox / beef, swine / pork', back: 'English animal, French meat: specialised gradually after Chaucer' },
    { id: 'me5-count', front: 'Native or borrowed: which dominates?', back: 'In the dictionary: borrowed; in running text: native' },
    { id: 'me5-hybrid', front: 'clooth-making, foot-mantel', back: 'Hybrids of English and French parts' },
    { id: 'me5-oed', front: 'Chaucer’s “first uses” in the OED', back: 'First recorded, not necessarily coined' },
    { id: 'me5-door', front: 'Housbondes at chirche-dore she hadde fyve', back: 'She had had five husbands at the church door (GP 460)' },
    { id: 'me5-nouthe', front: 'But therof nedeth nat to speke as nouthe', back: 'But there is no need to speak of that just now (GP 462)' },
    { id: 'me5-shrines', front: 'The Wife’s pilgrimages', back: 'Jerusalem (three times), Rome, Boulogne, Santiago, Cologne' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">housbonde</span> comes from:', options: ['Old Norse', 'Old English', 'French', 'Latin'], answer: 0, explain: 'húsbóndi.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">coverchiefs</span> comes from:', options: ['French', 'Old Norse', 'Old English', 'Dutch'], answer: 0, explain: 'couvre-chef “head-cover”.' },
    { id: 'e3', type: 'mc', prompt: 'Which word is most likely Norse?', options: ['sky', 'shade', 'church', 'heed'], answer: 0, explain: 'sk-.' },
    { id: 'e4', type: 'mc', prompt: 'Which pair are two forms of one French word?', options: ['warden / guardian', 'ox / beef', 'heart / courage', 'wife / dame'], answer: 0, explain: 'Norman w-, Parisian gu-.' },
    { id: 'e5', type: 'mc', prompt: 'How many husbands had the Wife married at the church door?', options: ['five', 'three', 'seven', 'one'], answer: 0, explain: 'Housbondes at chirche-dore she hadde fyve.' },
    { id: 'e6', type: 'mc', prompt: 'Whom did she surpass in cloth-making?', options: ['the weavers of Ypres and Ghent', 'the Londoners', 'the Italians', 'the nuns'], answer: 0, explain: 'She passed hem of Ypres and of Gaunt.' },
    { id: 'e7', type: 'mc', prompt: 'What made her “out of alle charitee”?', options: ['Another woman going to the offering before her', 'Losing a husband', 'Her deafness', 'A long journey'], answer: 0, explain: 'GP 449–452.' },
    { id: 'e8', type: 'mc', prompt: 'What does <span class="la">gat-tothed</span> mean?', options: ['gap-toothed', 'goat-toothed', 'gold-toothed', 'toothless'], answer: 0, explain: 'gat = gap.' },
    { id: 'e9', type: 'match', prompt: 'Match each word to its source.', pairs: [
      ['scathe', 'Old Norse'], ['scarlet', 'French'], ['heed', 'Old English'], ['carpe', 'Old Norse karpa'], ['charitee', 'French (Latin caritas)']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the shrines.', pairs: [
      ['seint Iame', 'Santiago'], ['Coloigne', 'the Three Kings'], ['Boloigne', 'the Virgin'], ['Rome', 'St Peter'], ['Ierusalem', 'the Holy Sepulchre']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">A good ___ was ther of bisyde Bathe</span>', hint: 'woman', answers: ['wyf', 'wif'], full: 'A good Wyf was ther of bisyde Bathe', explain: 'GP 445.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">But she was som-del ___, and that was scathe</span>', hint: 'deaf', answers: ['deef', 'def'], full: 'But she was som-del deef, and that was scathe', explain: 'GP 446.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">And thryes hadde she been at ___</span>', hint: 'Jerusalem (Skeat’s spelling)', answers: ['ierusalem', 'jerusalem'], full: 'And thryes hadde she been at Ierusalem', explain: 'GP 463.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">In felawschip wel coude she laughe and ___</span>', hint: 'chatter (Norse)', answers: ['carpe'], full: 'In felawschip wel coude she laughe and carpe', explain: 'GP 474.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give the source of each word: OE, Norse or French.', headers: ['Word 1', 'Word 2'], rows: [
      { label: 'housbonde / wyf', answers: ['norse', 'oe|old english'] },
      { label: 'scarlet / reed', answers: ['french', 'oe|old english'] },
      { label: 'chirche / parisshe', answers: ['oe|old english', 'french'] },
      { label: 'scathe / wrooth', answers: ['norse', 'oe|old english'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Native English and Norse forms of the same word.', headers: ['English', 'Norse'], rows: [
      { label: '“shirt / skirt” (garment)', answers: ['shirt', 'skirt'] },
      { label: '“church / kirk”', answers: ['chirche|church', 'kirk'] },
      { label: '“give” (Chaucer: yeven)', answers: ['yeven|yive', 'give|geve'] },
      { label: '“no / nay”', answers: ['no', 'nay'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the modern translation in order.', source: 'She coude muche of wandring by the weye', tokens: ['She knew', 'a lot', 'about wandering', 'by the way'], explain: 'GP 467.' },
    { id: 'e18', type: 'translate', dir: 'me-en', source: 'Bold was hir face, and fair, and reed of hewe.', model: 'Her face was bold, and handsome, and red in colour.', accepted: ['her face was bold and fair and red in colour', 'her face was bold and handsome and red in colour', 'her face was bold and fair and red of hue', 'her face was bold and fair and ruddy', 'bold was her face and fair and red of hue', 'her face was bold and handsome and ruddy', 'her face was bold fair and red in colour'] },
    { id: 'e19', type: 'translate', dir: 'me-en', source: 'Upon an amblere esily she sat.', model: 'She sat comfortably on an ambling horse.', accepted: ['she sat comfortably on an ambling horse', 'she sat easily on an ambling horse', 'she sat comfortably upon an ambling horse', 'she sat easily upon an ambler', 'she sat comfortably on an ambler', 'she sat easily on an ambler', 'on an ambler she sat comfortably'] },
    { id: 'e20', type: 'translate', dir: 'en-me', source: 'five husbands (Chaucer’s words)', model: 'fyve housbondes', accepted: ['fyve housbondes'] },
    { id: 'e21', type: 'translate', dir: 'en-me', source: 'she was deaf (Chaucer’s words)', model: 'she was deef', accepted: ['she was deef'] },
    { id: 'e22', type: 'mc', prompt: 'Why is the “ox / beef” story an oversimplification?', options: ['The French words also meant the animal in Middle English', 'Beef is English', 'Ox is French', 'Scott invented both words'], answer: 0, explain: 'The specialisation came gradually.' },
    { id: 'e23', type: 'mc', prompt: 'What explains her deafness, according to her own Prologue?', options: ['Her fifth husband struck her', 'An illness', 'Old age', 'A fall from her horse'], answer: 0, explain: 'Jankin, over his book of wicked wives.' }
  ],

  reading: {
    title: 'General Prologue 445–476',
    note: 'Authentic text: The Canterbury Tales, General Prologue (Group A) 445–476, the Wife of Bath, in Skeat’s edition (The Complete Works of Geoffrey Chaucer, vol. 4, Oxford 1894), from the Project Gutenberg transcription. Skeat writes I for J (Ierusalem, Iame); hyphens in som-del, clooth-making, y-teyd, chirche-dore, gat-tothed, foot-mantel and per-chaunce are his. Tap any word.',
    text: 'A good Wyf was ther of bisyde Bathe,\nBut she was som‑del deef, and that was scathe.\nOf clooth‑making she hadde swiche an haunt,\nShe passed hem of Ypres and of Gaunt.\nIn al the parisshe wyf ne was ther noon\nThat to the offring bifore hir sholde goon;\nAnd if ther dide, certeyn, so wrooth was she,\nThat she was out of alle charitee.\nHir coverchiefs ful fyne were of ground;\nI dorste swere they weyeden ten pound\nThat on a Sonday were upon hir heed.\nHir hosen weren of fyn scarlet reed,\nFul streite y‑teyd, and shoos ful moiste and newe.\nBold was hir face, and fair, and reed of hewe.\nShe was a worthy womman al hir lyve,\nHousbondes at chirche‑dore she hadde fyve,\nWithouten other companye in youthe;\nBut therof nedeth nat to speke as nouthe.\nAnd thryes hadde she been at Ierusalem;\nShe hadde passed many a straunge streem;\nAt Rome she hadde been, and at Boloigne,\nIn Galice at seint Iame, and at Coloigne.\nShe coude muche of wandring by the weye.\nGat‑tothed was she, soothly for to seye.\nUp‑on an amblere esily she sat,\nY‑wimpled wel, and on hir heed an hat\nAs brood as is a bokeler or a targe;\nA foot‑mantel aboute hir hipes large,\nAnd on hir feet a paire of spores sharpe.\nIn felawschip wel coude she laughe and carpe.\nOf remedyes of love she knew per‑chaunce,\nFor she coude of that art the olde daunce.',
    translations: [
      { label: 'Modern English', text: 'There was a good woman from near Bath, but she was somewhat deaf, and that was a pity. She had such skill in cloth-making that she surpassed the weavers of Ypres and Ghent. In all the parish there was no woman who should go to the offering before her; and if anyone did, she was certainly so angry that she was out of all charity. Her kerchiefs were very fine in texture; I would dare swear they weighed ten pounds, those that were on her head on a Sunday. Her stockings were of fine scarlet red, very tightly tied, and her shoes very supple and new. Bold was her face, and handsome, and red in colour. She was a respectable woman all her life: she had had five husbands at the church door, not counting other company in her youth; but there is no need to speak of that just now. And she had been to Jerusalem three times; she had crossed many a foreign stream; she had been at Rome, and at Boulogne, at St James in Galicia, and at Cologne. She knew a lot about wandering by the way. She was gap-toothed, to tell the truth. She sat comfortably on an ambling horse, well wimpled, and on her head a hat as broad as a buckler or a shield; an outer skirt about her broad hips, and on her feet a pair of sharp spurs. In company she could laugh and chatter well. She knew, no doubt, about the remedies of love, for she knew the old dance of that art.' },
      { label: 'German translation', text: 'Eine tüchtige Frau war da aus der Gegend von Bath, doch sie war etwas taub, und das war schade. Im Tuchmachen hatte sie solches Geschick, dass sie die von Ypern und von Gent übertraf. In der ganzen Pfarrei gab es keine Frau, die vor ihr zum Opfergang gehen durfte; und wenn es eine tat, war sie gewiss so zornig, dass sie aus aller Nächstenliebe fiel. Ihre Kopftücher waren sehr fein im Gewebe; ich wagte zu schwören, dass sie zehn Pfund wogen, die sie an einem Sonntag auf dem Kopf trug. Ihre Strümpfe waren aus feinem Scharlachrot, sehr straff gebunden, und die Schuhe sehr geschmeidig und neu. Kühn war ihr Gesicht, und schön, und rot von Farbe. Sie war eine ehrbare Frau ihr Leben lang: Ehemänner hatte sie an der Kirchentür fünf gehabt, ohne andere Gesellschaft in der Jugend; doch davon braucht man jetzt nicht zu sprechen. Und dreimal war sie in Jerusalem gewesen; manchen fremden Strom hatte sie überquert; in Rom war sie gewesen und in Boulogne, in Galicien bei Sankt Jakob und in Köln. Sie verstand viel vom Wandern am Wege. Sie hatte eine Zahnlücke, um die Wahrheit zu sagen. Auf einem Passgänger saß sie bequem, gut verschleiert, und auf dem Kopf einen Hut so breit wie ein Buckelschild oder eine Tartsche; einen Reitrock um ihre breiten Hüften und an den Füßen ein Paar scharfe Sporen. In Gesellschaft verstand sie gut zu lachen und zu plaudern. Von den Heilmitteln der Liebe wusste sie wohl, denn sie kannte den alten Tanz dieser Kunst.' }
    ],
    notes: [
      { ref: 'A good Wyf was ther of bisyde Bathe', html: '<span class="la">wyf</span> means “woman” (German <em>Weib</em> in its old neutral sense); <span class="la">of bisyde Bathe</span> “from near Bath”, probably the parish of St Michael’s outside the walls.' },
      { ref: 'But she was som‑del deef, and that was scathe', html: '<span class="la">scathe</span>, Norse “harm”, here “a pity”. Her deafness is explained in her Prologue.' },
      { ref: 'She passed hem of Ypres and of Gaunt', html: '<span class="la">passed</span> “surpassed”; <span class="la">hem of Ypres</span> “those of Ypres”.' },
      { ref: 'That to the offring bifore hir sholde goon', html: 'Parishioners went up to the altar with their offerings in order of rank; she insisted on going first.' },
      { ref: 'I dorste swere they weyeden ten pound', html: '<span class="la">dorste</span>: past (subjunctive in sense) of <span class="la">durren</span> “dare”: “I would dare swear”. <span class="la">pound</span>: plural without ending, as with measures in German (<em>zehn Pfund</em>).' },
      { ref: 'Housbondes at chirche‑dore she hadde fyve', html: 'Object first for emphasis. Weddings were performed at the church door.' },
      { ref: 'But therof nedeth nat to speke as nouthe', html: 'Impersonal <span class="la">nedeth</span>: “there is no need”. <span class="la">as nouthe</span> “at present”, from OE <span class="la">nū þā</span>.' },
      { ref: 'In Galice at seint Iame, and at Coloigne', html: 'Santiago de Compostela in Galicia; Cologne, the shrine of the Three Kings. Skeat prints I for J, as the manuscripts do.' },
      { ref: 'Gat‑tothed was she, soothly for to seye', html: 'A gap between the front teeth; see the background on physiognomy.' },
      { ref: 'As brood as is a bokeler or a targe', html: 'Two kinds of shield: a <span class="la">bokeler</span> is a small round one, a <span class="la">targe</span> a larger one. Both French, though <span class="la">targe</span> goes back to Norse <em>targa</em>.' },
      { ref: 'For she coude of that art the olde daunce', html: '<span class="la">the olde daunce</span>: an idiom for all the tricks of love, borrowed from French <em>la vieille danse</em>. <span class="la">coude</span> “knew” (preterite-present <span class="la">connen</span>).' }
    ],
    glosses: {
      'a': 'a', 'aboute': 'about, around', 'al': 'all; al hir lyve: all her life', 'alle': 'all', 'amblere': 'ambling horse, a horse with an easy gait (French)', 'an': 'a; such a',
      'and': 'and', 'art': 'art, skill (French)', 'as': 'as', 'at': 'at', 'bathe': 'Bath', 'been': 'been',
      'bifore': 'before', 'bisyde': 'near; of bisyde Bathe: from near Bath', 'bokeler': 'buckler, small round shield (French)', 'bold': 'bold', 'boloigne': 'Boulogne (a shrine of the Virgin)', 'brood': 'broad',
      'but': 'but', 'by': 'by', 'carpe': 'chatter, talk (Old Norse karpa “boast”)', 'certeyn': 'certainly (French)', 'charitee': 'charity, love of one’s neighbour (French)', 'chaunce': 'per-chaunce: as it happened; no doubt',
      'chirche': 'church; chirche-dore: church door', 'clooth': 'cloth; clooth-making: weaving', 'coloigne': 'Cologne (shrine of the Three Kings)', 'companye': 'company, lovers', 'coude': 'knew; knew how to', 'coverchiefs': 'kerchiefs, head-coverings (French couvre-chef)',
      'daunce': 'dance; the olde daunce: all the tricks', 'deef': 'deaf', 'del': 'som-del: somewhat', 'dide': 'did (someone did)', 'dore': 'door', 'dorste': 'would dare (past of durren)',
      'esily': 'comfortably', 'face': 'face (French)', 'fair': 'fair, handsome', 'feet': 'feet', 'felawschip': 'company', 'foot': 'foot-mantel: outer skirt for riding',
      'for': 'for; because', 'ful': 'very', 'fyn': 'fine (French)', 'fyne': 'fine (plural)', 'fyve': 'five', 'galice': 'Galicia; at seint Iame: Santiago de Compostela',
      'gat': 'gat-tothed: gap-toothed (gat “gap”, probably Norse)', 'gaunt': 'Ghent', 'good': 'good', 'goon': 'go', 'ground': 'texture, fabric; fyne of ground: of fine weave', 'hadde': 'had',
      'hat': 'hat', 'haunt': 'skill, practice (French hanter)', 'heed': 'head', 'hem': 'them', 'hewe': 'complexion, colour', 'hipes': 'hips',
      'hir': 'her', 'hosen': 'stockings (OE hosa, German Hosen)', 'housbondes': 'husbands (Old Norse húsbóndi “householder”)', 'i': 'I', 'iame': 'James (I = J): seint Iame = St James', 'ierusalem': 'Jerusalem (I = J)',
      'if': 'if', 'in': 'in', 'is': 'is', 'knew': 'knew', 'large': 'large, broad (French)', 'laughe': 'laugh',
      'love': 'love', 'lyve': 'life (dat.)', 'making': 'clooth-making: weaving', 'mantel': 'foot-mantel: riding skirt', 'many': 'many', 'moiste': 'fresh, supple (French moiste)',
      'muche': 'much', 'nat': 'not', 'ne': 'not', 'nedeth': 'it is necessary (impersonal; German es bedarf)', 'newe': 'new', 'noon': 'none',
      'nouthe': 'now; as nouthe: at present', 'of': 'of; from; about', 'offring': 'the offering (in church, when parishioners went up in order of rank)', 'olde': 'old', 'on': 'on', 'or': 'or',
      'other': 'other', 'out': 'out; out of alle charitee: furious', 'paire': 'pair', 'parisshe': 'parish (French)', 'passed': 'surpassed; crossed', 'per': 'per-chaunce: as it happened',
      'pound': 'pounds (plural without ending)', 'reed': 'red', 'remedyes': 'remedies (French); Ovid’s Remedia amoris', 'rome': 'Rome', 'sat': 'sat', 'scarlet': 'scarlet, a fine woollen cloth (French)',
      'scathe': 'a pity, unfortunate (Old Norse skaði “harm”)', 'seint': 'saint', 'seye': 'say', 'sharpe': 'sharp', 'she': 'she', 'sholde': 'should',
      'shoos': 'shoes', 'so': 'so', 'som': 'som-del: somewhat', 'sonday': 'Sunday', 'soothly': 'truly (OE sōþ)', 'speke': 'speak',
      'spores': 'spurs', 'straunge': 'foreign', 'streem': 'stream, river (or sea)', 'streite': 'tightly (French estreit)', 'swere': 'swear', 'swiche': 'such',
      'targe': 'targe, a shield (French, from Old Norse targa)', 'ten': 'ten', 'teyd': 'y-teyd: tied', 'that': 'that; who', 'the': 'the', 'ther': 'there',
      'therof': 'of that', 'they': 'they', 'thryes': 'three times', 'to': 'to', 'up': 'up-on: on', 'upon': 'upon',
      'wandring': 'wandering, travelling', 'was': 'was', 'wel': 'well', 'were': 'were', 'weren': 'were', 'weye': 'way, road',
      'weyeden': 'weighed (past pl. of weyen)', 'wimpled': 'y-wimpled: wearing a wimple', 'withouten': 'without, not counting', 'womman': 'woman', 'worthy': 'respectable, of standing', 'wrooth': 'angry (OE wrāþ)',
      'wyf': 'woman, wife (OE wīf, German Weib)', 'y': 'prefix y-: y-teyd, y-wimpled', 'youthe': 'youth', 'tothed': 'toothed; gat-tothed: gap-toothed', 'ypres': 'Ypres (Ieper), a Flemish cloth town'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What was the Wife’s trade?', options: ['Cloth-making', 'Brewing', 'Baking', 'Trading in wine'], answer: 0, explain: 'Of clooth-making she hadde swiche an haunt.' },
      { id: 'r2', type: 'mc', prompt: 'What colour were her stockings?', options: ['Scarlet red', 'Green', 'Black', 'White'], answer: 0, explain: 'fyn scarlet reed.' },
      { id: 'r3', type: 'mc', prompt: 'How did she ride?', options: ['Comfortably on an ambling horse, with sharp spurs', 'Side-saddle on a mule', 'In a cart', 'On foot'], answer: 0, explain: 'GP 469–473.' },
      { id: 'r4', type: 'mc', prompt: 'What did she know about?', options: ['The remedies of love', 'Medicine', 'Law', 'Astronomy'], answer: 0, explain: 'Of remedyes of love she knew per-chaunce.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Which pronoun is Norse?', options: ['they', 'she', 'he', 'we'], answer: 0, explain: 'Lecture II.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">wyf</span> in Chaucer usually means:', options: ['woman', 'wife only', 'widow', 'servant'], answer: 0, explain: 'German Weib.' },
      { id: 't3', type: 'mc', prompt: 'Norse <em>kirk</em> corresponds to English:', options: ['church', 'cake', 'kirtle', 'kiss'], answer: 0, explain: 'k / ch.' },
      { id: 't4', type: 'mc', prompt: 'In running text, which words dominate?', options: ['native English words', 'French words', 'Latin words', 'Norse words'], answer: 0, explain: 'The commonest words are Old English.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Hir hosen weren of fyn ___ reed</span>', hint: 'scarlet', answers: ['scarlet'], full: 'Hir hosen weren of fyn scarlet reed', explain: 'GP 456.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">She hadde passed many a straunge ___</span>', hint: 'stream', answers: ['streem', 'strem'], full: 'She hadde passed many a straunge streem', explain: 'GP 464.' },
      { id: 't7', type: 'translate', dir: 'me-en', source: 'She was a worthy womman al hir lyve.', model: 'She was a respectable woman all her life.', accepted: ['she was a respectable woman all her life', 'she was a worthy woman all her life', 'she was a woman of standing all her life', 'all her life she was a worthy woman', 'all her life she was a respectable woman'] },
      { id: 't8', type: 'translate', dir: 'en-me', source: 'church door (Chaucer’s words)', model: 'chirche-dore', accepted: ['chirche-dore', 'chirche dore'] },
      { id: 't9', type: 'mc', prompt: 'Which relics were at Cologne?', options: ['the Three Kings', 'St James', 'St Peter', 'St Thomas'], answer: 0, explain: 'Brought from Milan in 1164.' },
      { id: 't10', type: 'mc', prompt: 'Who popularised the “Saxon animal, Norman meat” story?', options: ['Walter Scott', 'Chaucer', 'Skeat', 'Dryden'], answer: 0, explain: 'In Ivanhoe.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">scathe</span> is cognate with German:', options: ['Schaden', 'Schatten', 'Schatz', 'schade'], answer: 0, explain: 'Old Norse skaði.' }
    ]
  },

  reference: [
    { title: 'Layers of the vocabulary', headers: ['Layer', 'Examples'], rows: [['Old English', 'wyf, heed, feet, fyve, chirche, dore, newe'], ['Old Norse', 'housbonde, scathe, carpe, they, sky, egg'], ['French', 'coverchiefs, scarlet, parisshe, charitee, amblere'], ['Latin', 'learned words, mostly later']] },
    { title: 'English and Norse forms', headers: ['English', 'Norse', 'German'], rows: [['shirt', 'skirt', 'Schürze'], ['chirche', 'kirk', 'Kirche'], ['yeven', 'give', 'geben'], ['no', 'nay', 'nein']] },
    { title: 'French doublets', headers: ['Norman', 'Parisian'], rows: [['warden', 'guardian'], ['catch', 'chase'], ['werre (war)', 'guerre'], ['warranty', 'guarantee']] }
  ]
});
