/*
 * Old English — Lecture III: the present tense of verbs; wesan and bēon.
 * Reading: the Anglo-Saxon Chronicle, annal 755 (Cynewulf and Cyneheard), Parker MS, from Henry Sweet,
 * An Anglo-Saxon Reader, 2nd ed. (Oxford 1879), pp. 1–3, transcribed from page images supplied by Nils
 * (sources/oe-sweet-1879-cynewulf-cyneheard.txt). Sweet's accents printed as macrons; a few length marks added
 * (hīe, hīene, ēode); see CONTENT-CHECKS.md. Source quotations from Alfred's Preface, same Reader, pp. 4–7.
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-03',
  number: 3,
  title: 'Cynewulf and Cyneheard',
  subtitle: 'The present tense; wesan and bēon, the two verbs “to be”; reading: the Chronicle for 755',
  minutes: 65,

  intro: `
    <p>This lecture leaves poetry for prose. The annal for 755 in the <em>Anglo-Saxon Chronicle</em> tells, in about five hundred words, how a West Saxon king was surprised at night by a rival prince, how both died, and how their followers chose death rather than desert their lords. It is the first long piece of narrative prose in English, and its plain, rapid sentences are easier to read than verse.</p>
    <p>The grammar is the present tense of verbs. Old English endings are close to German: <span class="la">ic hīere, þū hīerst, hē hīerþ</span> beside <em>ich höre, du hörst, er hört</em>. There is one striking difference: the plural has a single ending for all three persons, <span class="la">wē, gē, hīe hīeraþ</span>, exactly as in Low German (<em>wi, ji, se hört</em>). Strong verbs change their vowel in the second and third person singular, as German does: <span class="la">helpan, hilpþ</span>, <em>helfen, hilft</em>.</p>
    <p>Old English also has two verbs “to be”, <span class="la">wesan</span> (<span class="la">eom, eart, is</span>) and <span class="la">bēon</span> (<span class="la">bēo, bist, biþ</span>). German has divided the forms between them: <em>ist, sind</em> come from one, <em>bin, bist</em> from the other.</p>
  `,

  background: [
    {
      title: 'The Anglo-Saxon Chronicle',
      html: `
        <p>The <em>Chronicle</em> is a set of year-by-year annals in English, beginning in most copies with Julius Caesar’s invasion of Britain (dated 60 BC) and running to the twelfth century. It was first compiled in Wessex around 890, during the reign of King Alfred, and copies were then kept up in different monasteries; seven manuscripts and a fragment survive. Each entry begins <span class="la">Hēr</span>, “here, in this year”, because the annals were written against a list of years.</p>
        <p>The oldest copy is the Parker Chronicle (Cambridge, Corpus Christi College, MS 173, manuscript A), written by several hands from about 900 onwards. Sweet’s text, and so ours, comes from it.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Cambridge_Corpus_Christi_College_MS_173_(aka_Parker_Chronicle)_folio_1r_the_West_Saxon_Genealogical_Regnal_List.jpg/960px-Cambridge_Corpus_Christi_College_MS_173_(aka_Parker_Chronicle)_folio_1r_the_West_Saxon_Genealogical_Regnal_List.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Cambridge_Corpus_Christi_College_MS_173_(aka_Parker_Chronicle)_folio_1r_the_West_Saxon_Genealogical_Regnal_List.jpg/500px-Cambridge_Corpus_Christi_College_MS_173_(aka_Parker_Chronicle)_folio_1r_the_West_Saxon_Genealogical_Regnal_List.jpg|https://upload.wikimedia.org/wikipedia/commons/d/d6/Cambridge_Corpus_Christi_College_MS_173_(aka_Parker_Chronicle)_folio_1r_the_West_Saxon_Genealogical_Regnal_List.jpg" alt="Medieval manuscript page in Old English script with a large initial"><figcaption>The first page of the Parker Chronicle (Cambridge, Corpus Christi College, MS 173, fol. 1r): the West Saxon genealogical regnal list that precedes the annals, written about 900. <span class="credit">Manuscript page; licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Cambridge_Corpus_Christi_College_MS_173_(aka_Parker_Chronicle)_folio_1r_the_West_Saxon_Genealogical_Regnal_List.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
        <p>Most annals of the eighth century are a line or two long. The entry for 755 is quite different: a long story told with dialogue, written down a century or more after the events, probably from oral tradition. It also compresses time. It opens with Cynewulf’s accession and then jumps <span class="la">ymb xxxi wintra</span>, “about thirty-one years later”, to his death, which other evidence places in 786. The Chronicle’s dates for this period run about two years early, so the accession probably belongs to 757.</p>
      `
    },
    {
      title: 'Lord, kin and the duty to die',
      html: `
        <p>The story turns on a choice that recurs in Old English literature: when loyalty to a lord conflicts with loyalty to kinsmen, which wins? Cyneheard offers the dead king’s men money and their lives, and tells them that their own kinsmen are with him. They answer that no kinsman is dearer to them than their lord, and that they will never follow his killer. The same thing happens the next morning in reverse, and again no one changes sides. Only two survive the two fights: a British hostage and the ealdorman’s godson, both wounded.</p>
        <p>Historians use the annal as evidence for the ideal of the retinue described by Tacitus (<em>Germania</em> 14, about AD 98), where it was a disgrace to leave a battle alive after one’s lord had fallen. Whether the West Saxons behaved like this, or the storyteller shaped events to the ideal, cannot be known. The same ideal is the subject of <em>The Battle of Maldon</em>, two centuries later.</p>
      `
    },
    {
      title: 'A prose that names no one twice',
      html: `
        <p>The style is simple and quick, mostly clauses joined by <span class="la">ond</span> and <span class="la">ond ðā</span>, with very few nouns: once a man has been named, he becomes <span class="la">hē</span>. This makes the story vivid and also notoriously hard to follow, because <span class="la">hē, him, hīe</span> keep changing their reference. In <span class="la">ond ðā gatu him tō belocen hæfdon</span>, “and (they) had locked the gates against them”, the reader must work out who locked the gates (Cyneheard’s men) and against whom (the king’s men). The notes say who is meant each time.</p>
        <p>Modern readers have admired the result: the story has been called a saga in miniature. The comparison with Icelandic sagas, written centuries later, describes the effect rather than a historical connection.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Ælfrēd kyning hāteð grētan Wǣrferð biscep his wordum luflice ond frēondlice.</p>
    <p>“King Alfred sends greetings to Bishop Wærferth with his words, lovingly and in friendship” (literally “commands (someone) to greet”). The opening of King Alfred’s Preface to his translation of Gregory’s <em>Pastoral Care</em>, about 890, from Sweet’s Reader (1879), p. 4; Sweet’s accents printed as macrons. <span class="la">hāteð</span> is the 3rd person singular present of <span class="la">hātan</span>, German <em>heißen</em> in its old sense “order”: <em>er heißt (ihn) grüßen</em>.</p>
    <p>Later in the Preface Alfred uses the present tense to give his own opinion: <span class="la">For ðȳ mē ðyncð betre, gif ēow swǣ ðyncð …</span> (p. 6), “Therefore it seems better to me, if it seems so to you …”. <span class="la">ðyncð</span>, from <span class="la">ðyncan</span>, is German <em>dünkt</em>: <em>mich dünkt</em>, English <em>methinks</em>. The ending <span class="la">-ð</span> has merged with the stem: <span class="la">ðynceð</span> becomes <span class="la">ðyncð</span>.</p>
    <p>The Preface is the reading of Lecture VII.</p>
  `,

  pronunciation: `
    <p>Prose follows the same rules of pronunciation as verse (Lecture I). Points in this passage:</p>
    <ul>
      <li><strong>cyning, Cynewulf, cȳðdon</strong>: the <span class="la">c</span> is <em>k</em>, not <em>tsch</em>, although <span class="la">y</span> is a front vowel. The <span class="la">y</span> here comes from an older <em>u</em> changed by a following <em>i</em> (i-umlaut, as in German <em>König</em>), after the softening of <span class="la">c</span> had already happened. Compare <span class="la">cēne</span>, which is <em>tschee-ne</em>.</li>
      <li><strong>ge-</strong> as in <span class="la">gēascode, gehīerdun</span> is <em>je-</em>. The English <em>y-</em> of Chaucer’s <em>yclept</em> is its descendant.</li>
      <li><strong>ð</strong> between vowels is voiced (English <em>this</em>): <span class="la">brōður, æðeling</span>; at the start of a word Sweet always prints <span class="la">ð</span> (his choice of letter), but the sound is voiceless there: <span class="la">ðā</span> as in English <em>thin</em>. Scribes used <span class="la">þ</span> and <span class="la">ð</span> for both sounds.</li>
      <li><strong>Endings</strong>: every syllable is pronounced, <span class="la">feoh-ten-de, ā-drǣf-de</span>, with the stress on the root.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. The present tense: endings',
      html: `
        <p>The present indicative has four forms: three in the singular and one for the whole plural.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>hīeran (weak)</th><th>bindan (strong)</th><th>German</th></tr></thead>
          <tbody>
            <tr><th>ic</th><td class="la">hīere</td><td class="la">binde</td><td>höre · binde</td></tr>
            <tr><th>þū</th><td class="la">hīerst</td><td class="la">bindest</td><td>hörst · bindest</td></tr>
            <tr><th>hē, hēo, hit</th><td class="la">hīerþ</td><td class="la">bindeþ</td><td>hört · bindet</td></tr>
            <tr><th>wē, gē, hīe</th><td class="la">hīeraþ</td><td class="la">bindaþ</td><td>hören, hört, hören · binden …</td></tr>
          </tbody>
        </table></div>
        <p>The plural <span class="la">-aþ</span> for all three persons is a feature shared by Old English, Old Saxon and Old Frisian, the languages of the North Sea coast. Middle Low German kept it (<em>wi, gi, se bindet</em>), and it survives in Low German today (<em>wi, ji, se maakt</em>). High German never had it.</p>
        <p><span class="la">hīeran</span> is the early West Saxon form of Alfred’s time; later West Saxon has <span class="la">hȳran</span> (Lecture I), and Anglian and Kentish have <span class="la">hēran</span>. Weak verbs of the second class, such as <span class="la">lufian</span> “love”, have slightly different endings: <span class="la">lufie, lufast, lufaþ, lufiaþ</span> (Lecture VII).</p>
      `
    },
    {
      title: '2. Strong verbs: vowel change and contraction',
      html: `
        <p>In the second and third person singular, many strong verbs change their stem vowel, by the same i-umlaut that gives German <em>du hilfst, er fährt</em>:</p>
        <ul>
          <li><span class="la">helpan</span>: <span class="la">hilpst, hilpþ</span> (<em>helfen: hilfst, hilft</em>)</li>
          <li><span class="la">faran</span>: <span class="la">færst, færþ</span> (<em>fahren: fährst, fährt</em>)</li>
          <li><span class="la">cuman</span>: <span class="la">cymst, cymþ</span> (<em>kommen</em>: older German <em>kümmt</em>)</li>
          <li><span class="la">cēosan</span>: <span class="la">cīest, cīest</span> (<em>kiesen</em>, “choose”)</li>
        </ul>
        <p>In West Saxon the ending also contracts with the stem: <span class="la">bindeþ</span> becomes <span class="la">bint</span>, <span class="la">rīdeþ</span> “rides” becomes <span class="la">rītt</span>, <span class="la">stent</span> “stands” (Maldon 51) is <span class="la">standeþ</span>. German has the same with <em>er hält</em> for <em>*haltet</em>, <em>er rät</em> for <em>*ratet</em>. Learn to recognise the full forms; the contracted ones follow.</p>
      `
    },
    {
      title: '3. Subjunctive, imperative, participle, infinitive',
      html: `
        <ul>
          <li><strong>Present subjunctive</strong>: <span class="la">-e</span> in the singular, <span class="la">-en</span> in the plural: <span class="la">ic, þū, hē hīere</span>; <span class="la">wē, gē, hīe hīeren</span>. Used in wishes, commands and many subordinate clauses (Lecture IX).</li>
          <li><strong>Imperative</strong>: <span class="la">hīer!</span> (sg.), <span class="la">hīeraþ!</span> (pl.); <span class="la">bind! bindaþ!</span></li>
          <li><strong>Present participle</strong>: <span class="la">-ende</span>, German <em>-end</em>: <span class="la">feohtende</span> “fighting”. With <span class="la">wesan</span> it makes a continuous form, as twice in the reading: <span class="la">hīe ealle … wǣrun feohtende</span>, “they were all fighting”. This construction is one ancestor of the English <em>-ing</em> form.</li>
          <li><strong>Infinitive</strong>: <span class="la">-an</span>; after <span class="la">tō</span> it is inflected: <span class="la">tō hīerenne, tō bindenne</span>, German <em>zu hören</em>.</li>
        </ul>
      `
    },
    {
      title: '4. wesan and bēon',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>wesan</th><th>bēon</th><th>German</th></tr></thead>
          <tbody>
            <tr><th>ic</th><td class="la">eom</td><td class="la">bēo</td><td>bin</td></tr>
            <tr><th>þū</th><td class="la">eart</td><td class="la">bist</td><td>bist</td></tr>
            <tr><th>hē</th><td class="la">is</td><td class="la">biþ</td><td>ist</td></tr>
            <tr><th>pl.</th><td class="la">sindon, sint</td><td class="la">bēoþ</td><td>sind</td></tr>
            <tr><th>subj.</th><td class="la">sīe, pl. sīen</td><td class="la">bēo, pl. bēon</td><td>sei, seien</td></tr>
            <tr><th>imper.</th><td class="la">wes, wesaþ</td><td class="la">bēo, bēoþ</td><td>sei, seid</td></tr>
          </tbody>
        </table></div>
        <p>The two are not interchangeable. <span class="la">wesan</span> states how things are now: <span class="la">Ic eom cyning</span>, “I am (the) king”. <span class="la">bēon</span> states what is always or generally true, and what will be: <span class="la">Wyrd biþ ful ārǣd</span>, “Fate is wholly fixed” (<em>The Wanderer</em> 5); <span class="la">Ic bēo gearo</span>, “I shall be ready”. There is no separate future tense; <span class="la">bēon</span> does part of the work.</p>
        <p>The past tense belongs to <span class="la">wesan</span> only: <span class="la">ic, hē wæs; þū wǣre; wē wǣron</span>; subjunctive <span class="la">wǣre, wǣren</span>. The change from <span class="la">s</span> to <span class="la">r</span> (Verner’s law) is kept in English <em>was, were</em>; German has generalised the <em>r</em> (<em>war, waren</em>).</p>
        <p><strong>Negatives</strong> contract: <span class="la">ne + is → nis</span>, <span class="la">ne + wæs → næs</span>, <span class="la">ne + wǣre → nǣre</span>; likewise <span class="la">ne + wolde → nolde</span>. The reading has <span class="la">nǣre</span> and <span class="la">nolde, noldon</span>.</p>
      `
    }
  ],

  vocab: [
    { id: 'wesan', head: 'wesan', la: 'wesan; eom, eart, is, sindon; wæs, wǣron', pos: 'verb, irregular', en: 'be', note: 'German war, gewesen. Present: how things are now.' },
    { id: 'beon', head: 'bēon', la: 'bēon; bēo, bist, biþ, bēoþ', pos: 'verb, irregular', en: 'be (habitually); will be', note: 'German bin, bist belong with these forms. No past tense of its own.' },
    { id: 'ofslean', head: 'ofslēan', la: 'ofslēan; ofslōg, ofslōgon; ofslægen', pos: 'verb, strong', en: 'kill, slay', note: 'German erschlagen. slēan: German schlagen.' },
    { id: 'feohtan', head: 'feohtan', la: 'feohtan; feaht, fuhton; fohten', pos: 'verb, strong', en: 'fight', note: 'German fechten. feohtende: fighting.' },
    { id: 'adraefan', head: 'ādrǣfan', la: 'ādrǣfan; ādrǣfde', pos: 'verb, weak', en: 'drive out, expel', note: 'German treiben (Old Saxon drīban); drǣfan is the causative, “make to go”.' },
    { id: 'ridan', head: 'rīdan', la: 'rīdan; rād, ridon; riden', pos: 'verb, strong', en: 'ride', note: 'German reiten. 3rd sg. rīdeþ, contracted rītt.' },
    { id: 'cwethan', head: 'cweþan', la: 'cweþan; cwæþ, cwǣdon; cweden', pos: 'verb, strong', en: 'say, speak', note: 'English quoth, bequeath. Sweet prints cuǣdon.' },
    { id: 'wunian', head: 'wunian', la: 'wunian; wunode', pos: 'verb, weak', en: 'dwell, stay, remain', note: 'German wohnen.' },
    { id: 'beodan', head: 'bēodan', la: '(ge)bēodan; bēad, budon; boden', pos: 'verb, strong', en: 'offer; command', note: 'German bieten, gebieten. English bid.' },
    { id: 'rice', head: 'rīce', la: 'rīce, rīces', g: 'n', pos: 'noun, strong', en: 'kingdom, rule, power', note: 'German Reich. Also an adjective: rīce, powerful (Maldon 36: rīcost).' },
    { id: 'wif', head: 'wīf', la: 'wīf, wīfes; pl. wīf', g: 'n', pos: 'noun, strong', en: 'woman, wife', note: 'German Weib: neuter in both languages (Lecture I).' },
    { id: 'maeg', head: 'mǣg', la: 'mǣg, mǣges; pl. māgas', g: 'm', pos: 'noun, strong', en: 'kinsman', note: 'Related to mǣgþ, family (Lecture I). Plural with ā: māgas, mǣgas (Sweet).' },
    { id: 'bana', head: 'bana', la: 'bana, banan', g: 'm', pos: 'noun, weak', en: 'killer, slayer', note: 'English bane. A weak noun: oblique cases in -an (Lecture IV).' },
    { id: 'burg', head: 'burg', la: 'burg; dat. byrig', g: 'f', pos: 'noun', en: 'fortified place, stronghold, town', note: 'German Burg. English -bury, -borough. Dative byrig with umlaut.' },
    { id: 'geat', head: 'geat', la: 'geat; pl. gatu', g: 'n', pos: 'noun, strong', en: 'gate', note: 'English gate; Old Norse gata (street) is a different word.' },
    { id: 'feoh', head: 'feoh', la: 'feoh, fēos', g: 'n', pos: 'noun, strong', en: 'money, property; cattle', note: 'German Vieh: wealth was once counted in cattle. English fee.' },
    { id: 'feorh', head: 'feorh', la: 'feorh, fēores', g: 'n/m', pos: 'noun, strong', en: 'life', note: 'feoh ond feorh: money and life, a common pair.' },
    { id: 'gisl', head: 'gīsl', la: 'gīsl, gīsles', g: 'm', pos: 'noun, strong', en: 'hostage', note: 'German Geisel.' }
  ],

  grammarCards: [
    { id: 'oe3-endings', front: 'Present indicative endings', back: 'ic -e, þū -(e)st, hē -(e)þ, pl. -aþ (all persons)' },
    { id: 'oe3-hieran', front: 'hīeran: present', back: 'hīere, hīerst, hīerþ, hīeraþ' },
    { id: 'oe3-bindan', front: 'bindan: present', back: 'binde, bindest, bindeþ (bint), bindaþ' },
    { id: 'oe3-plural', front: 'Why one plural form for wē, gē, hīe?', back: 'A North Sea Germanic feature (-aþ), shared with Old Saxon and Low German (wi maakt).' },
    { id: 'oe3-umlaut', front: 'helpan, faran: 3rd sg.', back: 'hilpþ, færþ (German hilft, fährt)' },
    { id: 'oe3-contract', front: 'bint, rītt, stent', back: 'contracted 3rd sg.: bindeþ, rīdeþ, standeþ' },
    { id: 'oe3-subj', front: 'Present subjunctive endings', back: 'sg. -e, pl. -en' },
    { id: 'oe3-part', front: 'Present participle', back: '-ende: feohtende (German -end)' },
    { id: 'oe3-wesan', front: 'wesan: present', back: 'eom, eart, is, sindon (sint)' },
    { id: 'oe3-beon', front: 'bēon: present', back: 'bēo, bist, biþ, bēoþ' },
    { id: 'oe3-diff', front: 'wesan or bēon?', back: 'wesan: how things are now; bēon: general truths and the future' },
    { id: 'oe3-past', front: 'Past of wesan', back: 'wæs, wǣre (2nd sg.), wæs; pl. wǣron; subj. wǣre, wǣren' },
    { id: 'oe3-neg', front: 'nis, næs, nǣre, nolde', back: 'ne is, ne wæs, ne wǣre, ne wolde' },
    { id: 'oe3-her', front: 'Hēr (at the start of an annal)', back: '“Here, in this year”' },
    { id: 'oe3-feoh', front: 'feoh ond feorh', back: 'money and life' },
    { id: 'oe3-loyal', front: 'him nǣnig mǣg lēofra nǣre ðonne hiera hlāford', back: 'no kinsman was dearer to them than their lord' },
    { id: 'oe3-hateth', front: 'Ælfrēd kyning hāteð grētan Wǣrferð biscep', back: 'King Alfred sends greetings to Bishop Wærferth (hāteð: 3rd sg. of hātan)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">hīe hīeraþ</span>:', options: ['they hear', 'he hears', 'they heard', 'hear!'], answer: 0, explain: 'Plural -aþ.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">þū bindest</span>:', options: ['you (sg.) bind', 'you (pl.) bind', 'he binds', 'you bound'], answer: 0, explain: '2nd sg. -est.' },
    { id: 'e3', type: 'mc', prompt: 'The 3rd person singular of <span class="la">helpan</span>:', options: ['hilpþ', 'helpaþ', 'helpe', 'healp'], answer: 0, explain: 'Vowel change, as German hilft.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Ic eom cyning</span>:', options: ['I am (the) king', 'I shall be king', 'I was king', 'I have a king'], answer: 0, explain: 'eom: present of wesan.' },
    { id: 'e5', type: 'mc', prompt: 'Which verb would an Old English writer use for a general truth or the future?', options: ['bēon (biþ)', 'wesan (is)', 'habban', 'weorþan'], answer: 0, explain: 'Wyrd biþ ful ārǣd.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">nǣre</span> is:', options: ['ne + wǣre: (were) not', 'nearer', 'never', 'none'], answer: 0, explain: 'Negative contraction.' },
    { id: 'e7', type: 'mc', prompt: 'The single plural ending <span class="la">-aþ</span> (wē, gē, hīe) is shared with:', options: ['Low German', 'High German', 'Latin', 'Old Norse'], answer: 0, explain: 'wi, ji, se maakt.' },
    { id: 'e8', type: 'mc', prompt: '<span class="la">wǣrun feohtende</span>:', options: ['were fighting', 'had fought', 'will fight', 'were fought'], answer: 0, explain: 'wesan + present participle.' },
    { id: 'e9', type: 'match', prompt: 'Match the endings to their use.', pairs: [
      ['-e (ic hīere)', '1st sg. present'], ['-st (þū hīerst)', '2nd sg. present'], ['-þ (hē hīerþ)', '3rd sg. present'], ['-aþ (hīe hīeraþ)', 'plural present'], ['-ende (feohtende)', 'present participle']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the Old English forms to German.', pairs: [
      ['hilpþ', 'hilft'], ['færþ', 'fährt'], ['sindon', 'sind'], ['bist', 'bist'], ['is', 'ist']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Ic hīer___ þone cyning.</span>', hint: 'I hear', answers: ['e'], full: 'Ic hīere þone cyning.', explain: '1st sg. -e.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Hē bind___ þone gīsl.</span>', hint: 'he binds', answers: ['eþ', 'eð', 'eth'], full: 'Hē bindeþ þone gīsl.', explain: '3rd sg. -eþ (also contracted bint).' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Wē hīer___ þæt word.</span>', hint: 'we hear', answers: ['aþ', 'að', 'ath'], full: 'Wē hīeraþ þæt word.', explain: 'Plural -aþ for all persons.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Ic ___ þīn mǣg.</span>', hint: 'am (wesan)', answers: ['eom'], full: 'Ic eom þīn mǣg.', explain: 'eom.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give the present indicative of <span class="la">hīeran</span> and <span class="la">bindan</span>.', headers: ['hīeran', 'bindan'], rows: [
      { label: 'ic', answers: ['hīere', 'binde'] },
      { label: 'þū', answers: ['hīerst', 'bindest|bintst'] },
      { label: 'hē', answers: ['hīerþ', 'bindeþ|bint'] },
      { label: 'wē, gē, hīe', answers: ['hīeraþ', 'bindaþ'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Give the present indicative of <span class="la">wesan</span> and <span class="la">bēon</span>.', headers: ['wesan', 'bēon'], rows: [
      { label: 'ic', answers: ['eom', 'bēo'] },
      { label: 'þū', answers: ['eart', 'bist'] },
      { label: 'hē', answers: ['is', 'biþ'] },
      { label: 'wē, gē, hīe', answers: ['sindon|sint|sind|syndon', 'bēoþ'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the English translation in order.', source: 'Se cyning is on þǣm būre.', tokens: ['The king', 'is', 'in', 'the chamber'], explain: 'būr: chamber, English bower.' },
    { id: 'e18', type: 'translate', dir: 'oe-en', source: 'Hīe wǣron feohtende.', model: 'They were fighting.', accepted: ['they were fighting', 'they fought', 'they kept fighting', 'they were fighting on'] },
    { id: 'e19', type: 'translate', dir: 'oe-en', source: 'Se cyning biþ gōd.', model: 'The king is good.', accepted: ['king is good', 'king will be good', 'king is always good', 'king is a good one'] },
    { id: 'e20', type: 'translate', dir: 'en-oe', source: 'we hear', model: 'wē hīeraþ', accepted: ['wē hīeraþ', 'wē hȳraþ', 'wē hēraþ'] },
    { id: 'e21', type: 'translate', dir: 'en-oe', source: 'you (sg.) are (wesan)', model: 'þū eart', accepted: ['þū eart'] },
    { id: 'e22', type: 'mc', prompt: 'Why did the king’s men refuse Cyneheard’s offer?', options: ['No kinsman was dearer to them than their lord', 'They did not trust his money', 'They had been ordered to by Osric', 'They did not know who he was'], answer: 0, explain: 'him nǣnig mǣg lēofra nǣre ðonne hiera hlāford.' },
    { id: 'e23', type: 'mc', prompt: 'Who survived the fight at the gates?', options: ['The ealdorman’s godson, wounded', 'Cyneheard', 'Nobody', 'Osric'], answer: 0, explain: 'alle būtan ānum, se wæs ðæs aldormonnes godsunu. (The British hostage survived the first fight.)' }
  ],

  reading: {
    title: 'The Chronicle for 755',
    note: 'Authentic text: the Anglo-Saxon Chronicle, Parker MS, annal 755, from Henry Sweet, An Anglo-Saxon Reader, 2nd edition (Oxford 1879), pp. 1–3, transcribed from page images supplied by Nils. The normalised view turns Sweet’s accents into macrons, writes o, e for his ǫ, ę, and adds a few length marks Sweet leaves out (hīe, hīene, ēode). “As printed” shows Sweet’s page. Tap any word.',
    diplomaticLabel: 'As printed',
    diplomaticNote: 'Sweet’s text as printed in 1879: acute accents for long vowels (on the second letter of a diphthong: geáscode), ǫ for o before nasals (ǫnd), ę for umlauted e (męnn). Sweet prints ð throughout, and keeps the manuscript’s uuið and tæt.',
    text: '755. Hēr Cynewulf benam Sigebryht his rīces ond Westseaxna wiotan for unryhtum dǣdum, būton Hamtūnscīre; ond hē hæfde ðā, ōð hē ofslōg ðone aldormonn ðe him lengest wunode. Ond hīene ðā Cynewulf on Andrēd ādrǣfde; ond hē ðǣr wunade, ōð ðæt hīene ān swān ofstang æt Pryfetes flōdan (ond hē wræc ðone aldormonn Cumbran). Ond se Cynewulf oft miclum gefeohtum feaht wið Bretwalum; ond ymb xxxi wintra ðæs ðe hē rīce hæfde, hē wolde ādrǣfan ānne æðeling, se wæs Cyneheard hāten (ond se Cyneheard wæs ðæs Sigebryhtes brōður.) Ond ðā gēascode hē ðone cyning lytle werode on wīfcȳððe on Merantūne, ond hine ðǣr berād, ond ðone būr ūtan beēode, ǣr hine ðā menn onfunden ðe mid ðām cyninge wǣrun. Ond ðā ongeat se cyning ðæt, ond hē on ðā duru ēode, ond ðā unhēanlice hine werede, ōð hē on ðone æðeling lōcude, ond ðā ūt rǣsde on hine, ond hine miclum gewundode; ond hīe ealle on ðone cyning wǣrun feohtende, ōð ðæt hīe hine ofslægenne hæfdon. Ond ðā on ðæs wīfes gebǣrum onfundon ðæs cyninges ðegnas ðā unstilnese, ond ðā ðider urnon swā hwelc swā ðonne gearo wearð ond radost. Ond hiera se æðeling gehwelcum feoh ond feorh gebēad, ond hiera nǣnig hit geðicgean nolde; ac hīe simle feohtende wǣron, ōð hīe alle lǣgon būtan ānum Bryttiscum gīsle, ond se swīðe gewundad wæs. Ðā on morgenne gehīerdun ðæt ðæs cyninges ðegnas, ðe him beæftan wǣrun, ðæt se cyning ofslægen wæs. Ðā ridon hīe ðider, ond his aldormann Ōsrīc, ond Wīferð his ðegn, ond ðā menn ðe hē beæftan him lǣfde ǣr, ond ðone æðeling on ðǣre byrig mētton, ðǣr se cyning ofslægen læg, (ond ðā gatu him tō belocen hæfdon,) ond ðā ðǣrtō ēodon. Ond ðā gebēad hē him hiera āgenne dōm fēos ond londes, gif hīe him ðæs rīces ūðon; ond him cȳðdon ðæt hiera mǣgas him mid wǣron, ðā ðe him from noldon. Ond ðā cuǣdon hīe ðæt him nǣnig mǣg lēofra nǣre ðonne hiera hlāford, ond hīe nǣfre his banan folgian noldon. Ond ðā budon hīe hiera mǣgum ðæt hīe gesunde from ēodon; ond hīe cuǣdon ðæt tæt ilce hiera gefērum geboden wǣre ðe ǣr mid ðām cyninge wǣrun. Ðā cuǣdon hīe ðæt hīe ðæs ne onmunden “ðon mā ðe ēowre gefēran ðe mid ðām cyninge ofslægene wǣrun.” Ond hīe ðā ymb ðā gatu feohtende wǣron ōð ðæt hīe ðǣrinne fulgon, ond ðone æðeling ofslōgon, ond ðā menn ðe him mid wǣrun, alle būtan ānum, se wæs ðæs aldormonnes godsunu; ond hē his feorh generede, ond ðēah hē wæs oft gewundad.',
    diplomatic: '755. Hér Cynewulf benam Sigebryht his ríces ǫnd Westseaxna wiotan for unryhtum dǽdum, búton Hamtúnscíre; ǫnd hé hæfde ðá, óð hé ǫfslóg ðǫne aldormǫnn ðe him lęngest wunode. Ǫnd hiene ðá Cynewulf ǫn Andréd ádrǽfde; ǫnd hé ðǽr wunade, óð ðæt hiene án swán ǫfstang æt Pryfetes flódan (ǫnd hé wræc ðǫne aldormǫnn Cumbran). Ǫnd se Cynewulf oft miclum gefeohtum feaht uuið Bretwalum; ǫnd ymb xxxi wintra ðæs ðe hé ríce hæfde, hé wolde ádrǽfan ánne æðeling, se wæs Cyneheard háten (ǫnd se Cyneheard wæs ðæs Sigebryhtes bróður.) Ǫnd ðá geáscode hé ðǫne cyning lytle werode ǫn wífcýððe ǫn Merantúne, ǫnd hine ðǽr berád, ǫnd ðǫne búr útan beeode, ǽr hine ðá męnn ǫnf·unden ðe mid ðám cyninge wǽrun. Ǫnd ðá ǫngeat se cyning ðæt, ǫnd hé ǫn ðá duru eode, ǫnd dá u·nheánlice hine węrede, óð hé ǫn ðǫne æðeling lócude, ǫnd ðá út rǽsde ǫn hine, ǫnd hine miclum gewundode; ǫnd hie ealle ǫn ðǫne cyning wǽrun feohtende, óð ðæt hie hine ǫfslægenne hæfdon. Ǫnd ðá ǫn ðæs wífes gebǽrum ǫnfundon ðæs cyninges ðegnas ðá u·nstilnese, ǫnd ðá ðider urnon swá hwelc swá ðǫnne gearo wearð ǫnd radost. Ǫnd hiera se æðeling gehwelcum feoh ǫnd feorh gebeád, ǫnd hiera nǽnig hit geðicgean nolde; ac hie simle feohtende wǽron, óð hie alle lǽgon bútan ánum Bryttiscum gísle, ǫnd se swíðe gewundad wæs. Ðá ǫn morgenne gehiérdun ðæt ðæs cyninges ðegnas, ðe him beæftan wǽrun, ðæt se cyning ǫfslægen wæs. Ðá ridon hie ðider, ǫnd his aldormann Ósríc, ǫnd Wíferð his ðegn, ǫnd ðá męnn ðe hé beæftan him lǽfde ǽr, ǫnd ðǫne æðeling ǫn ðǽre byrig métton, ðǽr se cyning ǫfslægen læg, (ǫnd ðá gatu him tó belocen hæfdon,) ǫnd ðá ðǽrtó eodon. Ǫnd ðá gebeád hé him hiera ágenne dóm feós ǫnd lǫndes, gif hie him ðæs ríces úðon; ǫnd him cýðdon ðæt hiera mǽgas him mid wǽron, ðá ðe him frǫm noldon. Ǫnd ðá cuǽdon hie ðæt him nǽnig mǽg leófra nǽre ðǫnne hiera hláford, ǫnd hie nǽfre his banan folgian noldon. Ǫnd ðá budon hie hiera mǽgum ðæt hie gesunde frǫm eodon; ǫnd hie cuǽdon ðæt tæt ilce hiera geférum geboden wǽre ðe ǽr mid ðám cyninge wǽrun. Ðá cuǽdon hie ðæt hie ðæs ne ǫnmunden “ðǫn má ðe eówre geféran ðe mid ðám cyninge ǫfslægene wǽrun.” Ǫnd hie ðá ymb ðá gatu feohtende wǽron óð ðæt hie ðǽrinne fulgon, ǫnd ðǫne ǽðeling ǫfslógon, ǫnd ðá męnn ðe him mid wǽrun, alle bútan ánum, se wæs ðæs aldormǫnnes godsunu; ǫnd hé his feorh genęrede, ǫnd ðeáh hé wæs oft gewundad.',
    translations: [
      { label: 'English translation', text: '755. In this year Cynewulf and the councillors of the West Saxons deprived Sigebryht of his kingdom because of his unjust deeds, except for Hampshire; and he kept that until he killed the ealdorman who had stayed with him longest. Then Cynewulf drove him into the Weald, and he lived there until a swineherd stabbed him to death at the stream at Privett (and so avenged the ealdorman Cumbra). And this Cynewulf often fought great battles against the Britons. And about thirty-one years after he had come to the throne, he meant to drive out a prince called Cyneheard (this Cyneheard was the brother of that Sigebryht). Then Cyneheard learned that the king was at Merantun with a small company, visiting a woman, and he overtook him there and surrounded the chamber from outside before the men who were with the king noticed him. Then the king perceived it, and he went to the door and defended himself nobly until he caught sight of the prince; then he rushed out at him and wounded him badly. And they were all fighting against the king until they had killed him. Then from the woman’s cries the king’s thegns became aware of the disturbance and ran there, each as he was ready, and as fast as he could. And the prince offered each of them money and life, and none of them would accept it; but they kept on fighting until they all lay dead, except for one British hostage, and he was badly wounded. In the morning the king’s thegns who had been left behind heard that the king had been killed. Then they rode there, his ealdorman Osric, and Wiferth his thegn, and the men he had left behind earlier, and found the prince in the stronghold where the king lay dead (and they [inside] had locked the gates against them), and went up to it. Then he offered them their own choice of money and land if they would grant him the kingdom, and told them that their kinsmen were with him, who would not leave him. They replied that no kinsman was dearer to them than their lord, and that they would never follow his killer. And they offered their kinsmen the chance to go away unharmed; and these said that the same had been offered to their companions who had been with the king before. Then they said that they would care for it “no more than your companions who were killed with the king”. And they went on fighting around the gates until they forced their way in, and killed the prince and the men who were with him, all except one, who was the ealdorman’s godson; and he saved his life, though he was wounded many times.' },
      { label: 'German translation', text: '755. In diesem Jahr nahmen Cynewulf und die Räte der Westsachsen Sigebryht wegen unrechter Taten sein Reich, außer Hampshire; und das behielt er, bis er den Grafen erschlug, der am längsten bei ihm geblieben war. Da vertrieb ihn Cynewulf in den Weald, und dort blieb er, bis ihn ein Schweinehirt am Bach bei Privett erstach (und so den Grafen Cumbra rächte). Und dieser Cynewulf kämpfte oft in großen Schlachten gegen die Briten. Und etwa einunddreißig Jahre, nachdem er das Reich erhalten hatte, wollte er einen Fürsten namens Cyneheard vertreiben (dieser Cyneheard war der Bruder jenes Sigebryht). Da erfuhr Cyneheard, dass der König mit kleinem Gefolge in Merantun bei einer Frau war, überraschte ihn dort und umstellte die Kammer von außen, ehe die Männer beim König ihn bemerkten. Da merkte es der König, ging an die Tür und wehrte sich tapfer, bis er den Fürsten erblickte; da stürzte er hinaus auf ihn und verwundete ihn schwer. Und sie alle kämpften gegen den König, bis sie ihn erschlagen hatten. Da bemerkten die Gefolgsleute des Königs am Schreien der Frau die Unruhe und liefen hin, jeder wie er bereit war und so schnell er konnte. Und der Fürst bot jedem von ihnen Geld und Leben, und keiner wollte es annehmen; sondern sie kämpften immerfort, bis sie alle fielen, außer einer britischen Geisel, und die war schwer verwundet. Am Morgen hörten die Gefolgsleute des Königs, die zurückgeblieben waren, dass der König erschlagen war. Da ritten sie hin, sein Graf Osric und sein Gefolgsmann Wiferth und die Männer, die er zuvor zurückgelassen hatte, und trafen den Fürsten in der Burg, wo der König erschlagen lag (und sie [drinnen] hatten die Tore vor ihnen verschlossen), und rückten heran. Da bot er ihnen nach ihrem eigenen Urteil Geld und Land, wenn sie ihm das Reich gönnten, und sagte ihnen, dass ihre Verwandten bei ihm seien, die ihn nicht verlassen wollten. Da sagten sie, kein Verwandter sei ihnen lieber als ihr Herr, und sie würden nie seinem Mörder folgen. Und sie boten ihren Verwandten an, unversehrt fortzugehen; und diese sagten, dasselbe sei ihren Gefährten angeboten worden, die zuvor beim König waren. Da sagten sie, sie würden sich darum nicht mehr kümmern „als eure Gefährten, die mit dem König erschlagen wurden“. Und sie kämpften um die Tore, bis sie eindrangen, und erschlugen den Fürsten und die Männer bei ihm, alle außer einem, der war das Patenkind des Grafen; und er rettete sein Leben, obwohl er oft verwundet war.' }
    ],
    notes: [
      { ref: 'Hēr Cynewulf benam Sigebryht his rīces', html: '<span class="la">Hēr</span>: “in this year”, the formula that opens every annal. <span class="la">beniman</span> + accusative of the person and genitive of the thing: “to deprive someone of something”, as German <em>jemanden einer Sache berauben</em>.' },
      { ref: 'ond Westseaxna wiotan', html: 'A second subject after the verb: “Cynewulf, and the councillors of the West Saxons”. The <span class="la">wiotan</span> (singular <span class="la">wita</span>, “wise man”) were the king’s council; historians call it the <em>witan</em>.' },
      { ref: 'ōð hē ofslōg ðone aldormonn ðe him lengest wunode', html: '<span class="la">ōð</span>: “until”. <span class="la">ðe</span>: the indeclinable relative particle, “who”. <span class="la">aldormonn</span> (also <span class="la">ealdormann</span>): the governor of a shire, later replaced by the Danish word earl.' },
      { ref: 'on Andrēd ādrǣfde', html: '<span class="la">Andrēd</span>: the great forest of the Weald in Sussex and Kent (Latin <em>Anderida</em>). <span class="la">on</span> + accusative: motion, “into”.' },
      { ref: 'ān swān ofstang æt Pryfetes flōdan', html: '<span class="la">swān</span>: “herdsman, swineherd” (English <em>swain</em>, from Old Norse). <span class="la">Pryfetes flōdan</span>: the stream at Privett in Hampshire, the usual identification.' },
      { ref: 'ond hē wræc ðone aldormonn Cumbran', html: '“and he (the swineherd) avenged the ealdorman Cumbra”: the herdsman had been Cumbra’s man. <span class="la">wrecan</span>: German <em>rächen</em>. <span class="la">Cumbran</span>: accusative of a weak noun (Lecture IV).' },
      { ref: 'ymb xxxi wintra ðæs ðe hē rīce hæfde', html: '“about thirty-one winters after he had (the) kingdom”: years are counted in winters. <span class="la">ðæs ðe</span>: “after”.' },
      { ref: 'lytle werode on wīfcȳððe on Merantūne', html: '<span class="la">lytle werode</span>: dative of accompaniment, “with a small troop”. <span class="la">on wīfcȳððe</span>: “in a woman’s company”, a visit to a mistress, as the reader is meant to understand. <span class="la">Merantūn</span>: not securely identified.' },
      { ref: 'ond ðone būr ūtan beēode', html: '<span class="la">būr</span>: a private chamber, English <em>bower</em>, German <em>Bauer</em> in <em>Vogelbauer</em>. <span class="la">beēode</span>: past of <span class="la">begān</span>, “went round”, surrounded.' },
      { ref: 'ond ðā unhēanlice hine werede', html: '<span class="la">unhēanlice</span>: “not ignobly”, i.e. bravely (understatement). <span class="la">hine werede</span>: “defended himself”; Old English uses the ordinary pronoun as a reflexive, as German <em>sich</em> does not.' },
      { ref: 'hīe ealle on ðone cyning wǣrun feohtende', html: 'The continuous form: <span class="la">wesan</span> + present participle (grammar section 3).' },
      { ref: 'swā hwelc swā ðonne gearo wearð ond radost', html: '“whoever was ready then and quickest”: each man as he could.' },
      { ref: 'feoh ond feorh gebēad', html: '“offered money and life”: the alliterating pair, as often in legal and heroic language.' },
      { ref: 'ac hīe simle feohtende wǣron, ōð hīe alle lǣgon', html: '<span class="la">simle</span>: “always, continually”. <span class="la">lǣgon</span>: past plural of <span class="la">licgan</span>, “lay (dead)”.' },
      { ref: 'ond ðā gatu him tō belocen hæfdon', html: 'A notorious pronoun puzzle: the subject is unstated (Cyneheard’s men), <span class="la">him</span> is the king’s men. <span class="la">gatu</span>: plural of <span class="la">geat</span>, “gate”.' },
      { ref: 'hiera āgenne dōm fēos ond londes', html: '“their own judgement of money and land”: they could name their price. <span class="la">fēos, londes</span>: genitives.' },
      { ref: 'gif hīe him ðæs rīces ūðon', html: '<span class="la">unnan</span> + dative of the person and genitive of the thing: “to grant someone something”, German <em>jemandem etwas gönnen</em> (formerly + genitive).' },
      { ref: 'ðæt him nǣnig mǣg lēofra nǣre ðonne hiera hlāford', html: 'The central sentence. <span class="la">nǣre</span>: ne + wǣre, subjunctive in reported speech. <span class="la">lēofra … ðonne</span>: “dearer … than”.' },
      { ref: 'ðæt tæt ilce', html: '<span class="la">tæt</span>: the manuscript’s spelling of <span class="la">ðæt</span> after a word ending in <span class="la">-t</span>: the sounds have merged. Sweet keeps it.' },
      { ref: 'ðæt hīe ðæs ne onmunden “ðon mā ðe ēowre gefēran …”', html: 'The narrative slips from reported into direct speech in mid-sentence: <span class="la">ēowre</span>, “your”. <span class="la">onmunan</span> + genitive: “to care about, consider”.' },
      { ref: 'se wæs ðæs aldormonnes godsunu', html: '<span class="la">se</span>: here the demonstrative used as a relative, “who”. The godson’s survival is the last detail: someone must have lived to tell the story.' }
    ],
    glosses: {
      'hēr': 'here; in this year', 'cynewulf': 'Cynewulf, king of Wessex (757–786)', 'benam': 'deprived (pret. of beniman)', 'sigebryht': 'Sigebryht, king of Wessex before Cynewulf', 'sigebryhtes': 'Sigebryht’s (gen.)', 'his': 'his',
      'rīces': 'kingdom (gen. of rīce)', 'rīce': 'kingdom, rule', 'ond': 'and', 'westseaxna': 'of the West Saxons (gen. pl.)', 'wiotan': 'councillors (nom. pl. of wita)', 'for': 'because of, for',
      'unryhtum': 'unjust (dat. pl.)', 'dǣdum': 'deeds (dat. pl. of dǣd)', 'būton': 'except (+ dat.)', 'būtan': 'except (+ dat.)', 'hamtūnscīre': 'Hampshire (dat.)', 'hē': 'he',
      'hæfde': 'had, kept (pret. of habban)', 'hæfdon': 'had (pret. pl.)', 'ðā': 'then; the, those; when', 'ōð': 'until', 'ofslōg': 'killed (pret. of ofslēan)', 'ofslōgon': 'killed (pret. pl.)',
      'ðone': 'the (acc. m.)', 'aldormonn': 'ealdorman, governor of a shire', 'aldormann': 'ealdorman', 'aldormonnes': 'the ealdorman’s (gen.)', 'ðe': 'who, which (relative particle); than', 'him': 'him, them (dat.); to him, against them',
      'lengest': 'longest', 'wunode': 'stayed, remained (pret. of wunian)', 'wunade': 'lived, stayed (pret. of wunian)', 'hīene': 'him (acc.)', 'hine': 'him (acc.); himself', 'on': 'on, in; into (+ acc.); against',
      'andrēd': 'the Weald (forest of Sussex and Kent)', 'ādrǣfde': 'drove out (pret. of ādrǣfan)', 'ādrǣfan': 'drive out', 'ðǣr': 'there; where', 'ðæt': 'that; the (n.)', 'ān': 'a, one',
      'ānne': 'a, one (acc. m.)', 'ānum': 'one (dat.)', 'swān': 'herdsman, swineherd', 'ofstang': 'stabbed to death (pret. of ofstingan)', 'æt': 'at', 'pryfetes': 'of Privett (gen.)',
      'flōdan': 'stream (dat. of flōde)', 'wræc': 'avenged (pret. of wrecan)', 'cumbran': 'Cumbra (acc.)', 'se': 'the; that; he who', 'oft': 'often', 'miclum': 'great (dat. pl.); greatly, badly',
      'gefeohtum': 'battles (dat. pl. of gefeoht)', 'feaht': 'fought (pret. of feohtan)', 'wið': 'against', 'bretwalum': 'the Britons, Welsh (dat. pl.)', 'ymb': 'about; around', 'xxxi': 'thirty-one',
      'wintra': 'winters, years (gen. pl. of winter)', 'ðæs': 'the (gen.); after (ðæs ðe); of it', 'wolde': 'wanted, meant (pret. of willan)', 'æðeling': 'prince, ætheling', 'wæs': 'was', 'cyneheard': 'Cyneheard',
      'hāten': 'called, named (past part. of hātan)', 'brōður': 'brother', 'gēascode': 'learned of, found out (pret. of geāscian)', 'cyning': 'king', 'cyninge': 'king (dat.)', 'cyninges': 'king’s (gen.)',
      'lytle': 'small (dat.)', 'werode': 'troop, company (dat. of werod)', 'wīfcȳððe': 'company of a woman (dat. of wīfcȳþþ)', 'merantūne': 'Merantun (dat.)', 'berād': 'overtook (pret. of berīdan)', 'būr': 'chamber, bower',
      'ūtan': 'from outside', 'beēode': 'went round, surrounded (pret. of begān)', 'ǣr': 'before; earlier', 'menn': 'men (nom. pl. of mann)', 'onfunden': 'discovered (pret. subj. pl. of onfindan)', 'onfundon': 'discovered (pret. pl.)',
      'mid': 'with', 'ðām': 'the (dat.)', 'wǣrun': 'were', 'wǣron': 'were', 'wǣre': 'was, were (subj.)', 'ongeat': 'perceived (pret. of ongietan)',
      'duru': 'door', 'ēode': 'went (pret. of gān)', 'ēodon': 'went (pret. pl.)', 'unhēanlice': 'not ignobly, bravely', 'werede': 'defended (pret. of werian)', 'lōcude': 'looked (pret. of lōcian)',
      'ūt': 'out', 'rǣsde': 'rushed (pret. of rǣsan)', 'gewundode': 'wounded (pret. of gewundian)', 'gewundad': 'wounded (past part.)', 'hīe': 'they; them', 'ealle': 'all',
      'alle': 'all', 'feohtende': 'fighting (pres. part. of feohtan)', 'ofslægenne': 'slain (past part., acc.)', 'ofslægen': 'slain (past part.)', 'ofslægene': 'slain (past part., pl.)', 'wīfes': 'woman’s (gen. of wīf)',
      'gebǣrum': 'cries, behaviour (dat. pl. of gebǣru)', 'ðegnas': 'thegns, retainers (nom. pl.)', 'ðegn': 'thegn, retainer', 'unstilnese': 'disturbance (acc.)', 'ðider': 'thither, to that place', 'urnon': 'ran (pret. pl. of iernan)',
      'swā': 'so, as; swā hwelc swā: whoever', 'hwelc': 'which, who', 'ðonne': 'then; than', 'gearo': 'ready', 'wearð': 'became (pret. of weorþan)', 'radost': 'quickest, soonest',
      'hiera': 'their; of them', 'gehwelcum': 'each (dat.)', 'feoh': 'money', 'feorh': 'life', 'gebēad': 'offered (pret. of gebēodan)', 'nǣnig': 'none, no',
      'hit': 'it', 'geðicgean': 'accept', 'nolde': 'would not (ne + wolde)', 'noldon': 'would not (pl.)', 'ac': 'but', 'simle': 'always, continually',
      'lǣgon': 'lay (pret. pl. of licgan)', 'bryttiscum': 'British (dat.)', 'gīsle': 'hostage (dat. of gīsl)', 'swīðe': 'very, badly', 'morgenne': 'morning (dat. of morgen)', 'gehīerdun': 'heard (pret. pl. of gehīeran)',
      'beæftan': 'behind', 'ridon': 'rode (pret. pl. of rīdan)', 'ōsrīc': 'Osric', 'wīferð': 'Wiferth', 'lǣfde': 'left (pret. of lǣfan)', 'ðǣre': 'the (dat. f.)',
      'byrig': 'stronghold, fortified place (dat. of burg)', 'mētton': 'met, found (pret. pl. of mētan)', 'læg': 'lay (pret. of licgan)', 'gatu': 'gates (nom./acc. pl. of geat)', 'tō': 'to; closed (tō belocen: locked)', 'belocen': 'locked (past part. of belūcan)',
      'ðǣrtō': 'to it, thither', 'āgenne': 'own (acc. m.)', 'dōm': 'judgement, choice', 'fēos': 'of money (gen. of feoh)', 'londes': 'of land (gen. of lond)', 'gif': 'if',
      'ūðon': 'granted (pret. pl. of unnan)', 'cȳðdon': 'made known, told (pret. pl. of cȳþan)', 'mǣgas': 'kinsmen (nom. pl. of mǣg)', 'mǣg': 'kinsman', 'mǣgum': 'kinsmen (dat. pl.)', 'from': 'away, from',
      'cuǣdon': 'said (pret. pl. of cweþan)', 'lēofra': 'dearer', 'nǣre': 'was not (ne + wǣre, subj.)', 'hlāford': 'lord', 'nǣfre': 'never', 'banan': 'killer (acc. of bana)',
      'folgian': 'follow', 'budon': 'offered (pret. pl. of bēodan)', 'gesunde': 'safe, unharmed (pl.)', 'tæt': 'that (= ðæt)', 'ilce': 'same', 'gefērum': 'companions (dat. pl. of gefēra)',
      'geboden': 'offered (past part.)', 'ne': 'not', 'onmunden': 'cared about (pret. subj. pl. of onmunan)', 'ðon': 'than (ðon mā: any more)', 'mā': 'more', 'ēowre': 'your (pl.)',
      'gefēran': 'companions (nom. pl.)', 'ðǣrinne': 'inside, in there', 'fulgon': 'pressed in, got in (pret. pl. of fēolan)', 'godsunu': 'godson', 'generede': 'saved (pret. of generian)', 'ðēah': 'though',
      'uuið': 'against (= wið)', 'dá': 'then (= ðá)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Why was Sigebryht deprived of his kingdom?', options: ['For unjust deeds', 'Because he lost a battle', 'Because he was too young', 'Because the Britons defeated him'], answer: 0, explain: 'for unryhtum dǣdum.' },
      { id: 'r2', type: 'mc', prompt: 'Where was King Cynewulf when Cyneheard surprised him?', options: ['At Merantun, visiting a woman', 'In the Weald', 'At Privett', 'In battle against the Britons'], answer: 0, explain: 'on wīfcȳððe on Merantūne.' },
      { id: 'r3', type: 'mc', prompt: 'How did the king’s thegns learn of the attack?', options: ['From the woman’s cries', 'From a messenger', 'From the swineherd', 'From Osric'], answer: 0, explain: 'on ðæs wīfes gebǣrum.' },
      { id: 'r4', type: 'mc', prompt: 'What did Cyneheard offer Osric’s men?', options: ['Money and land at their own price, if they let him be king', 'Safe passage to Wessex', 'His sister in marriage', 'Nothing'], answer: 0, explain: 'hiera āgenne dōm fēos ond londes, gif hīe him ðæs rīces ūðon.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">hē hīerþ</span>:', options: ['he hears', 'they hear', 'he heard', 'hear!'], answer: 0, explain: '3rd sg. -þ.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">bint</span> is a contracted form of:', options: ['bindeþ', 'bindaþ', 'binde', 'band'], answer: 0, explain: 'West Saxon contraction.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">þū bist</span>:', options: ['you are (habitually) / will be', 'you were', 'you have', 'you bind'], answer: 0, explain: 'bēon.' },
      { id: 't4', type: 'mc', prompt: 'Past plural of <span class="la">wesan</span>:', options: ['wǣron', 'wæs', 'sindon', 'bēoþ'], answer: 0, explain: 'wæs, wǣron.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Hīe feoht___.</span>', hint: 'they fight', answers: ['aþ', 'að', 'ath'], full: 'Hīe feohtaþ.', explain: 'Plural -aþ.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">Þū ___ mīn hlāford.</span>', hint: 'are (wesan)', answers: ['eart'], full: 'Þū eart mīn hlāford.', explain: 'eart.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Ic eom his mǣg.', model: 'I am his kinsman.', accepted: ['i am his kinsman', 'i am his relative', 'i am his kin', 'i am his relation'] },
      { id: 't8', type: 'translate', dir: 'en-oe', source: 'they are (wesan)', model: 'hīe sindon', accepted: ['hīe sindon', 'hīe sint', 'hīe syndon', 'hīe sind'] },
      { id: 't9', type: 'mc', prompt: 'What does <span class="la">Hēr</span> mean at the start of a Chronicle annal?', options: ['in this year', 'here lies', 'hear!', 'lord'], answer: 0, explain: 'The annals were written against a list of years.' },
      { id: 't10', type: 'mc', prompt: 'Which manuscript of the Chronicle is the oldest?', options: ['The Parker Chronicle (Corpus Christi College, Cambridge)', 'The Peterborough Chronicle', 'The Nowell Codex', 'The Exeter Book'], answer: 0, explain: 'Manuscript A, from about 900.' },
      { id: 't11', type: 'mc', prompt: 'German <em>bin, bist</em> correspond to which Old English verb?', options: ['bēon (bēo, bist)', 'wesan (eom, eart)', 'habban', 'weorþan'], answer: 0, explain: 'Same root.' }
    ]
  },

  reference: [
    { title: 'Present indicative', headers: ['', 'hīeran', 'bindan', 'helpan'], rows: [['ic', 'hīere', 'binde', 'helpe'], ['þū', 'hīerst', 'bindest', 'hilpst'], ['hē', 'hīerþ', 'bindeþ, bint', 'hilpþ'], ['wē, gē, hīe', 'hīeraþ', 'bindaþ', 'helpaþ']] },
    { title: 'wesan and bēon', headers: ['', 'wesan', 'bēon'], rows: [['ic', 'eom', 'bēo'], ['þū', 'eart', 'bist'], ['hē', 'is', 'biþ'], ['pl.', 'sindon, sint', 'bēoþ'], ['subj. sg. / pl.', 'sīe / sīen', 'bēo / bēon'], ['past', 'wæs, wǣre, wæs; wǣron', '—']] },
    { title: 'Other present forms', headers: ['Form', 'Ending', 'Example'], rows: [['Subjunctive', 'sg. -e, pl. -en', 'hīere, hīeren'], ['Imperative', 'sg. —, pl. -aþ', 'hīer! hīeraþ!'], ['Participle', '-ende', 'feohtende'], ['Inflected infinitive', 'tō -enne', 'tō hīerenne']] }
  ]
});
