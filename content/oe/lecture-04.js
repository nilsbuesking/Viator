/*
 * Old English — Lecture IV: strong feminine nouns; weak nouns; the demonstratives se, sēo, þæt and þes.
 * Reading: Beowulf 53–85, after Fr. Klaeber (1922), as transcribed online without length marks
 * (sources/beowulf-klaeber-1922-lines-1-2601.txt); one slip of the transcription corrected (winemgas →
 * winemagas). Macrons added for this course; see CONTENT-CHECKS.md.
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-04',
  number: 4,
  title: 'The building of Heorot',
  subtitle: 'Strong feminine nouns; weak nouns; the demonstratives se, sēo, þæt; Beowulf 53–85',
  minutes: 60,

  intro: `
    <p>After Scyld’s funeral the poem moves quickly through three generations of Danish kings to Hrothgar, who builds the greatest hall the world has known and names it Heorot, “Hart”. In the same breath the poet tells us that it will burn.</p>
    <p>Lecture II introduced the strong masculine and neuter nouns. This lecture completes the main patterns. <strong>Strong feminines</strong> (<span class="la">lār</span> “teaching”, <span class="la">giefu</span> “gift”) correspond to German <em>Lehre, Gabe</em>. <strong>Weak nouns</strong>, of all three genders, have the ending <span class="la">-an</span> in most cases: <span class="la">guma, guman</span> “man, men”, the same <em>-en</em> as German <em>Bote, Boten</em>, <em>Zunge, Zungen</em>, <em>Auge, Augen</em>.</p>
    <p>The other topic is the word for “the”. Old English <span class="la">se, sēo, þæt</span> declines through four cases and three genders much as German <em>der, die, das</em> does, and its forms are closer than they look: <span class="la">þǣm</span> is <em>dem</em>, <span class="la">þæs</span> is <em>des</em>, <span class="la">þǣre</span> is <em>der</em>.</p>
  `,

  background: [
    {
      title: 'Heorot',
      html: `
        <p>Hrothgar’s hall is the centre of the first part of the poem: Grendel attacks it, Beowulf cleanses it, and the poet celebrates in it. Its name, <span class="la">Heort</span> or <span class="la">Heorot</span>, means “hart, stag”. The hall may have had antlers on its gables; <span class="la">horngēap</span> (line 82) is usually taken as “wide-gabled” or “with horns on the gables”, and both are possible.</p>
        <p>Scandinavian tradition placed the seat of the same dynasty at Lejre on Zealand, where excavations since the 1980s have found a sequence of great timber halls from the 6th to the 10th century, the largest about 50 metres long. Whether the poet knew anything of Lejre is uncertain; the halls show that his picture of a royal hall was realistic.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Viking_house_of_Fyrkat_2015-07-29.jpg/960px-Viking_house_of_Fyrkat_2015-07-29.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Viking_house_of_Fyrkat_2015-07-29.jpg/500px-Viking_house_of_Fyrkat_2015-07-29.jpg|https://upload.wikimedia.org/wikipedia/commons/0/0d/Viking_house_of_Fyrkat_2015-07-29.jpg" alt="Reconstructed long timber hall with a curved roof, in a grassy landscape"><figcaption>A reconstructed Viking-age hall at Fyrkat, Denmark. It shows the type of long timber hall with bowed walls built in Scandinavia; Heorot is imagined as a much grander building, and the Lejre halls are older. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Viking_house_of_Fyrkat_2015-07-29.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
        <p>The last lines of the reading look ahead: the hall awaited the “hostile surges of hateful fire”, and the feud between son-in-law and father-in-law that would destroy it was not far off. The poem later explains that Hrothgar married his daughter Freawaru to Ingeld, prince of the Heathobards, to settle a feud, and that the peace would fail (lines 2020–2069). The burning itself is not told; scholars connect it with Scandinavian stories of the fall of Lejre.</p>
      `
    },
    {
      title: 'The Danish kings',
      html: `
        <p>The genealogy of lines 53–63 runs Scyld, Beowulf (not the hero: the manuscript name of Scyld’s son, probably originally Bēow), Healfdene, and then his four children: Heorogar, Hrothgar, Halga and a daughter. Several of them are known from Scandinavian sources: Hrothgar is the Hróarr of Icelandic tradition and Saxo Grammaticus, Halga is Helgi, and Halga’s son Hrothulf, who appears later in the poem, is the famous Hrólfr kraki. The agreement is strong enough that most scholars think the poet drew on real Danish dynastic tradition of the 6th century.</p>
        <p>The daughter’s name is missing. The manuscript reads <span class="la">hyrde ic þ elan cwen</span>, with no gap, and the half-line lacks both a name and alliteration. Klaeber prints dots; editors have supplied a name from Scandinavian sources, such as <span class="la">Ȳrse</span> (Yrsa), and read the second name as Onela, king of the Swedes. None of the proposals is certain.</p>
      `
    },
    {
      title: 'Weak nouns in English and German',
      html: `
        <p>The weak ending <span class="la">-an</span> survives in English in only a few words: <em>oxen</em> (<span class="la">oxan</span>), <em>children</em> and <em>brethren</em> (where it was added later). Middle English had many more, such as <em>eyen</em> “eyes” and <em>shoon</em> “shoes”, which the plural <em>-s</em> of the strong masculines replaced.</p>
        <p>German went the other way: its weak plural <em>-en</em> spread to most feminine nouns (<em>Frau, Frauen</em>), including old strong feminines. This is why an Old English strong feminine often has a weak German plural: <span class="la">lār, lāra</span> beside <em>Lehre, Lehren</em>.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Sele hlīfade<br>hēah ond horngēap; heaðowylma bād,<br>lāðan līges.</p>
    <p>“The hall towered, high and wide-gabled; it awaited the hostile surges of hateful fire.” <em>Beowulf</em> 81–83, in Klaeber’s edition, with length marks added for this course.</p>
    <p>At its moment of completion the hall is already doomed. <span class="la">bād</span> “awaited” takes the genitive (<span class="la">heaðowylma, lāðan līges</span>), like German <em>warten auf</em> in older usage <em>einer Sache harren</em>. The pattern, joy followed immediately by a forecast of ruin, runs through the whole poem.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>Heorot</strong>: <em>HEH-o-rot</em>, with the short diphthong <span class="la">eo</span> of Lecture I and stress on the first syllable.</li>
      <li><strong>Hrōðgār</strong>: the initial <span class="la">h</span> is pronounced before <span class="la">r</span>, as a breathy <em>hr</em>; Icelandic still has it.</li>
      <li><strong>geogoð, geong, geond</strong>: <span class="la">g</span> before <span class="la">e</span> is <em>j</em>: <em>ye-o-goth</em>, <em>yeong</em>. German <em>Jugend, jung, jenseits</em> have the same <em>j</em>.</li>
      <li><strong>sēo, þǣm, þǣre</strong>: long vowels; the article was often unstressed in speech, but the length is part of the word.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. Strong feminine nouns: lār, giefu',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>lār (long stem)</th><th>giefu (short stem)</th><th>German</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">lār</td><td class="la">giefu</td><td>Lehre · Gabe</td></tr>
            <tr><th>Acc. sg.</th><td class="la">lāre</td><td class="la">giefe</td><td></td></tr>
            <tr><th>Gen. sg.</th><td class="la">lāre</td><td class="la">giefe</td><td>der Lehre</td></tr>
            <tr><th>Dat. sg.</th><td class="la">lāre</td><td class="la">giefe</td><td>der Lehre</td></tr>
            <tr><th>Nom./Acc. pl.</th><td class="la">lāra, lāre</td><td class="la">giefa, giefe</td><td>Lehren · Gaben</td></tr>
            <tr><th>Gen. pl.</th><td class="la">lāra (lārena)</td><td class="la">giefa (giefena)</td><td></td></tr>
            <tr><th>Dat. pl.</th><td class="la">lārum</td><td class="la">giefum</td><td></td></tr>
          </tbody>
        </table></div>
        <p>As with the neuters (Lecture II), a short stem has <span class="la">-u</span> in the nominative singular, a long stem none. All the oblique singular cases end in <span class="la">-e</span>, which makes these nouns easy to recognise and hard to tell apart; the article settles it: <span class="la">sēo lār, þā lāre, þǣre lāre</span>.</p>
        <p>Common strong feminines: <span class="la">heall</span> “hall”, <span class="la">cwēn</span> “queen”, <span class="la">mǣgþ</span> “tribe”, <span class="la">geogoþ</span> “youth”, <span class="la">sorg</span> “sorrow”, <span class="la">burg</span> “stronghold” (with the irregular dative <span class="la">byrig</span>, Lecture III).</p>
      `
    },
    {
      title: '2. Weak nouns: guma, tunge, ēage',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>guma (m.)</th><th>tunge (f.)</th><th>ēage (n.)</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">guma</td><td class="la">tunge</td><td class="la">ēage</td></tr>
            <tr><th>Acc. sg.</th><td class="la">guman</td><td class="la">tungan</td><td class="la">ēage</td></tr>
            <tr><th>Gen. sg.</th><td class="la">guman</td><td class="la">tungan</td><td class="la">ēagan</td></tr>
            <tr><th>Dat. sg.</th><td class="la">guman</td><td class="la">tungan</td><td class="la">ēagan</td></tr>
            <tr><th>Nom./Acc. pl.</th><td class="la">guman</td><td class="la">tungan</td><td class="la">ēagan</td></tr>
            <tr><th>Gen. pl.</th><td class="la">gumena</td><td class="la">tungena</td><td class="la">ēagena</td></tr>
            <tr><th>Dat. pl.</th><td class="la">gumum</td><td class="la">tungum</td><td class="la">ēagum</td></tr>
          </tbody>
        </table></div>
        <p>The pattern is simple: nominative <span class="la">-a</span> (masculine) or <span class="la">-e</span> (feminine, neuter), then <span class="la">-an</span> almost everywhere, with <span class="la">-ena</span> and <span class="la">-um</span> in the genitive and dative plural. German weak masculines keep exactly this: <em>der Mensch, den Menschen, des Menschen, dem Menschen</em>.</p>
        <p>In the reading: <span class="la">rǣswan</span> “leaders” (nom. pl.), <span class="la">gumena</span> “of men”, <span class="la">naman</span> “name” (acc. sg.), <span class="la">Onelan</span> “Onela’s”. In Lecture III: <span class="la">banan</span> “killer” (acc.), <span class="la">Cumbran</span>.</p>
      `
    },
    {
      title: '3. The demonstrative se, sēo, þæt',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Masc.</th><th>Fem.</th><th>Neut.</th><th>Plural</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">se</td><td class="la">sēo</td><td class="la">þæt</td><td class="la">þā</td></tr>
            <tr><th>Acc.</th><td class="la">þone</td><td class="la">þā</td><td class="la">þæt</td><td class="la">þā</td></tr>
            <tr><th>Gen.</th><td class="la">þæs</td><td class="la">þǣre</td><td class="la">þæs</td><td class="la">þāra</td></tr>
            <tr><th>Dat.</th><td class="la">þǣm</td><td class="la">þǣre</td><td class="la">þǣm</td><td class="la">þǣm</td></tr>
            <tr><th>Instr.</th><td class="la">þȳ, þon</td><td>—</td><td class="la">þȳ, þon</td><td>—</td></tr>
          </tbody>
        </table></div>
        <p>Compare German <em>der, den, des, dem</em>; <em>die, die, der, der</em>; <em>das</em>; plural <em>die, der, den</em>. The masculine and feminine nominatives begin with <span class="la">s-</span>, the rest with <span class="la">þ-</span>; English <em>the</em> was made from the <span class="la">þ-</span> forms, and <em>that</em> continues the neuter. Variants: <span class="la">þām</span> for <span class="la">þǣm</span>, <span class="la">þǣra</span> for <span class="la">þāra</span>.</p>
        <p>The word is both an article (“the”) and a pronoun (“that one, he”): <span class="la">Ðǣm fēower bearn … wōcun</span>, “to him four children were born”. With <span class="la">þe</span> it forms a relative: <span class="la">sē þe his wordes geweald wīde hæfde</span>, “he who had wide command of his words”. German uses <em>der</em> in all three ways too: <em>der Mann</em>, <em>der war es</em>, <em>der Mann, der kam</em>.</p>
      `
    },
    {
      title: '4. þes, þēos, þis: “this”',
      html: `
        <p>The other demonstrative is “this”: nominative <span class="la">þes</span> (m.), <span class="la">þēos</span> (f.), <span class="la">þis</span> (n.); accusative masculine <span class="la">þisne</span>, as in the reading: <span class="la">geond þisne middangeard</span>, “throughout this world”. Its other forms (<span class="la">þisses, þissum, þisse</span>) are recognisable from the stem <span class="la">þis-</span>. The plural <span class="la">þās</span> is the ancestor of English <em>those</em>; <em>these</em> was formed later.</p>
      `
    }
  ],

  vocab: [
    { id: 'se', head: 'se, sēo, þæt', la: 'se, sēo, þæt', pos: 'pronoun', en: 'the; that; he, she, it', note: 'German der, die, das. Full table in the grammar.' },
    { id: 'heall', head: 'heall', la: 'heall, healle', g: 'f', pos: 'noun, strong', en: 'hall', note: 'German Halle.' },
    { id: 'cwen', head: 'cwēn', la: 'cwēn, cwēne', g: 'f', pos: 'noun, strong', en: 'queen, wife', note: 'English queen. Related to Greek gynē, woman.' },
    { id: 'lar', head: 'lār', la: 'lār, lāre', g: 'f', pos: 'noun, strong', en: 'teaching, learning, lore', note: 'German Lehre. The model long-stem feminine.' },
    { id: 'giefu', head: 'giefu', la: 'giefu, giefe', g: 'f', pos: 'noun, strong', en: 'gift', note: 'German Gabe. The model short-stem feminine.' },
    { id: 'geogoth', head: 'geogoþ', la: 'geogoþ, geogoþe', g: 'f', pos: 'noun, strong', en: 'youth; the young warriors', note: 'German Jugend.' },
    { id: 'guma', head: 'guma', la: 'guma, guman', g: 'm', pos: 'noun, weak', en: 'man (poetic)', note: 'Survives in bridegroom (brȳdguma). Latin homo is related.' },
    { id: 'nama', head: 'nama', la: 'nama, naman', g: 'm', pos: 'noun, weak', en: 'name', note: 'German Name, des Namens.' },
    { id: 'tunge', head: 'tunge', la: 'tunge, tungan', g: 'f', pos: 'noun, weak', en: 'tongue', note: 'German Zunge. The model weak feminine.' },
    { id: 'eage', head: 'ēage', la: 'ēage, ēagan', g: 'n', pos: 'noun, weak', en: 'eye', note: 'German Auge, Augen. Middle English plural eyen.' },
    { id: 'sele', head: 'sele', la: 'sele, seles', g: 'm', pos: 'noun, strong', en: 'hall (poetic)', note: 'German Saal is related.' },
    { id: 'bearn', head: 'bearn', la: 'bearn; pl. bearn', g: 'n', pos: 'noun, strong', en: 'child, son', note: 'Scots bairn. From beran, bear.' },
    { id: 'sinc', head: 'sinc', la: 'sinc, sinces', g: 'n', pos: 'noun, strong', en: 'treasure (poetic)', note: 'Common in compounds: sincgifa, giver of treasure (Maldon 278).' },
    { id: 'middangeard', head: 'middangeard', la: 'middangeard', g: 'm', pos: 'noun, strong', en: 'the world, middle-earth', note: 'The world between heaven and hell; Tolkien’s Middle-earth. Old Norse Miðgarðr.' },
    { id: 'lig', head: 'līg', la: 'līg, līges', g: 'm', pos: 'noun, strong', en: 'fire, flame', note: 'Also lēg. Related to German Lohe.' },
    { id: 'hatan', head: 'hātan', la: 'hātan; hēt; hāten', pos: 'verb, strong', en: 'order, command; call, name', note: 'German heißen in both senses. hāten: called (Lecture III).' },
    { id: 'gewyrcan', head: 'gewyrcan', la: '(ge)wyrcan; worhte; geworht', pos: 'verb, weak', en: 'make, build; bring about', note: 'German wirken; English work, wrought.' },
    { id: 'daelan', head: 'dǣlan', la: '(ge)dǣlan; dǣlde', pos: 'verb, weak', en: 'share out, distribute', note: 'German teilen; English deal.' },
    { id: 'healdan', head: 'healdan', la: 'healdan; hēold, hēoldon; healden', pos: 'verb, strong', en: 'hold; rule, keep', note: 'German halten.' },
    { id: 'eft', head: 'eft', la: 'eft', pos: 'adverb', en: 'again, back; afterwards', note: 'Related to æfter; archaic English eftsoons. No German descendant.' },
    { id: 'sweord', head: 'sweord', la: 'sweord, sweordes', g: 'n', pos: 'noun, strong', en: 'sword', note: 'German Schwert. Verse has many other words for it: mēce, bill, ecg, īren.' }
  ],

  grammarCards: [
    { id: 'oe4-lar', front: 'lār: singular N A G D', back: 'lār, lāre, lāre, lāre' },
    { id: 'oe4-larpl', front: 'lār: plural N A G D', back: 'lāra (-e), lāra (-e), lāra (-ena), lārum' },
    { id: 'oe4-giefu', front: 'Why giefu but lār?', back: 'Short-stem feminines have -u in the nom. sg.; long stems have no ending.' },
    { id: 'oe4-guma', front: 'guma: singular N A G D', back: 'guma, guman, guman, guman' },
    { id: 'oe4-gumapl', front: 'guma: plural N A G D', back: 'guman, guman, gumena, gumum' },
    { id: 'oe4-weak', front: 'Weak nouns: the key ending', back: '-an in almost every case (German -en: Mensch, Menschen)' },
    { id: 'oe4-tunge', front: 'tunge, ēage: nom. pl.', back: 'tungan, ēagan (German Zungen, Augen)' },
    { id: 'oe4-se-m', front: 'se (masc.): N A G D', back: 'se, þone, þæs, þǣm' },
    { id: 'oe4-se-f', front: 'sēo (fem.): N A G D', back: 'sēo, þā, þǣre, þǣre' },
    { id: 'oe4-se-n', front: 'þæt (neut.): N A G D', back: 'þæt, þæt, þæs, þǣm' },
    { id: 'oe4-se-pl', front: 'Plural of se: N A G D', back: 'þā, þā, þāra, þǣm' },
    { id: 'oe4-instr', front: 'Instrumental of se', back: 'þȳ, þon (Maldon: þȳ heardra)' },
    { id: 'oe4-sethe', front: 'sē þe', back: 'he who (demonstrative + relative particle)' },
    { id: 'oe4-thisne', front: 'þisne', back: 'this (acc. masc. of þes): geond þisne middangeard' },
    { id: 'oe4-oxen', front: 'English oxen', back: 'A surviving weak plural (oxan).' },
    { id: 'oe4-heort', front: 'scōp him Heort naman', back: 'he gave it the name Heorot (naman: acc. of weak nama)' },
    { id: 'oe4-sele', front: 'Sele hlīfade hēah ond horngēap', back: 'The hall towered, high and wide-gabled (Beowulf 81–82)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">guman</span> can be:', options: ['acc., gen. or dat. sg., or nom./acc. pl.', 'only genitive plural', 'only nominative singular', 'a verb'], answer: 0, explain: 'Weak nouns: -an almost everywhere.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">gumena</span> is:', options: ['genitive plural', 'nominative plural', 'dative singular', 'accusative singular'], answer: 0, explain: '-ena: weak genitive plural.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">þǣre</span> can be:', options: ['gen. or dat. sg. feminine', 'nom. sg. feminine', 'acc. pl.', 'nom. sg. masculine'], answer: 0, explain: 'German der in both cases.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">þone</span> is:', options: ['accusative singular masculine', 'dative singular', 'nominative plural', 'genitive feminine'], answer: 0, explain: 'German den.' },
    { id: 'e5', type: 'mc', prompt: 'Nominative singular feminine of the article:', options: ['sēo', 'se', 'þǣre', 'þæt'], answer: 0, explain: 'se, sēo, þæt.' },
    { id: 'e6', type: 'mc', prompt: 'Which English plural is a survival of the weak <span class="la">-an</span>?', options: ['oxen', 'feet', 'sheep', 'mice'], answer: 0, explain: 'oxan.' },
    { id: 'e7', type: 'mc', prompt: 'What name did Hrothgar give his hall?', options: ['Heorot (hart)', 'Lejre', 'Healfdene', 'Middangeard'], answer: 0, explain: 'scōp him Heort naman.' },
    { id: 'e8', type: 'mc', prompt: 'In <span class="la">sē þe his wordes geweald wīde hæfde</span>, <span class="la">sē þe</span> means:', options: ['he who', 'the', 'so that', 'this'], answer: 0, explain: 'Demonstrative + relative particle.' },
    { id: 'e9', type: 'match', prompt: 'Match the forms of the article to German.', pairs: [
      ['þone', 'den'], ['þæs', 'des'], ['þǣm', 'dem'], ['sēo', 'die'], ['þǣre', 'der']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the Old English nouns to German.', pairs: [
      ['lār', 'Lehre'], ['tunge', 'Zunge'], ['ēage', 'Auge'], ['heall', 'Halle'], ['nama', 'Name']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Hē sæt on þǣre heall___.</span>', hint: 'in the hall (dat.)', answers: ['e'], full: 'Hē sæt on þǣre healle.', explain: 'Strong feminine dat. sg. -e.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">þæs gum___ sweord</span>', hint: 'the man’s (gen.)', answers: ['an'], full: 'þæs guman sweord', explain: 'Weak gen. sg. -an.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Hīe gesāwon þ___ cyning.</span>', hint: 'the (acc. m.)', answers: ['one'], full: 'Hīe gesāwon þone cyning.', explain: 'þone: German den.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">___ cwēn wæs glæd.</span>', hint: 'the (nom. f.)', answers: ['sēo', 'seo'], full: 'Sēo cwēn wæs glæd.', explain: 'sēo.' },
    { id: 'e15', type: 'paradigm', prompt: 'Decline <span class="la">lār</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['lār', 'lāra|lāre'] },
      { label: 'Acc.', answers: ['lāre', 'lāra|lāre'] },
      { label: 'Gen.', answers: ['lāre', 'lāra|lārena'] },
      { label: 'Dat.', answers: ['lāre', 'lārum'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Decline <span class="la">guma</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['guma', 'guman'] },
      { label: 'Acc.', answers: ['guman', 'guman'] },
      { label: 'Gen.', answers: ['guman', 'gumena'] },
      { label: 'Dat.', answers: ['guman', 'gumum'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the English translation in order.', source: 'Se cyning hēt þā healle wyrcan.', tokens: ['The king', 'ordered', 'the hall', 'to be built'], explain: 'hātan + infinitive, as German er hieß die Halle bauen.' },
    { id: 'e18', type: 'translate', dir: 'oe-en', source: 'Sēo cwēn sæt on þǣre healle.', model: 'The queen sat in the hall.', accepted: ['queen sat in hall', 'queen was sitting in hall', 'queen sat in the hall'] },
    { id: 'e19', type: 'translate', dir: 'oe-en', source: 'Þā guman hīerdon þā lāre.', model: 'The men heard the teaching.', accepted: ['men heard teaching', 'men heard lore', 'men listened to teaching', 'men heard the teaching', 'men heard learning'] },
    { id: 'e20', type: 'translate', dir: 'en-oe', source: 'the queen (nom.)', model: 'sēo cwēn', accepted: ['sēo cwēn'], explain: 'Sēo is the feminine nominative of the article, German die.' },
    { id: 'e21', type: 'translate', dir: 'en-oe', source: 'in the hall', model: 'on þǣre healle', accepted: ['on þǣre healle', 'in þǣre healle', 'on þǣre heall', 'on healle'], explain: 'On + dative for place where; þǣre is the feminine dative, like German der in in der Halle.' },
    { id: 'e22', type: 'mc', prompt: 'What does the poet say will happen to Heorot?', options: ['It will be destroyed by fire, in a feud between in-laws', 'Grendel will live in it', 'It will be given to Beowulf', 'It will stand for ever'], answer: 0, explain: 'heaðowylma bād, lāðan līges … āþumswēorum.' },
    { id: 'e23', type: 'mc', prompt: 'Which of Healfdene’s children is the king of the first part of the poem?', options: ['Hrothgar', 'Heorogar', 'Halga', 'Onela'], answer: 0, explain: 'Þā wæs Hrōðgāre herespēd gyfen.' }
  ],

  reading: {
    title: 'Beowulf 53–85',
    note: 'Authentic text: Klaeber’s edition (1922), lines 53–85. The normalised view adds length marks for this course; “Klaeber, unmarked” shows the text as transcribed online. In line 62 a name is missing in the manuscript; Klaeber prints dots. Tap any word.',
    diplomaticLabel: 'Klaeber, unmarked',
    diplomaticNote: 'Klaeber’s text as transcribed online, without length marks. One slip of the transcription (winemgas) corrected to winemagas.',
    text: 'Ðā wæs on burgum Bēowulf Scyldinga,\nlēof lēodcyning longe þrāge\nfolcum gefrǣge — fæder ellor hwearf,\naldor of earde — oþ þæt him eft onwōc\nhēah Healfdene; hēold þenden lifde\ngamol ond gūðrēouw glæde Scyldingas.\nÐǣm fēower bearn forðgerīmed\nin worold wōcun, weoroda rǣswan,\nHeorogār ond Hrōðgār ond Hālga til,\nhȳrde ic þæt . . . . . . wæs Onelan cwēn,\nHeaðo-Scilfingas healsgebedda.\nÞā wæs Hrōðgāre herespēd gyfen,\nwīges weorðmynd, þæt him his winemāgas\ngeorne hȳrdon, oðð þæt sēo geogoð gewēox,\nmagodriht micel. Him on mōd bearn,\nþæt healreced hātan wolde,\nmedoærn micel men gewyrcean\nþonne yldo bearn ǣfre gefrūnon,\nond þǣr on innan eall gedǣlan\ngeongum ond ealdum, swylc him God sealde\nbūton folcscare ond feorum gumena.\nÐā ic wīde gefrægn weorc gebannan\nmanigre mǣgþe geond þisne middangeard,\nfolcstede frætwan. Him on fyrste gelomp,\nǣdre mid yldum, þæt hit wearð ealgearo,\nhealærna mǣst; scōp him Heort naman\nsē þe his wordes geweald wīde hæfde.\nHē bēot ne ālēh, bēagas dǣlde,\nsinc æt symle. Sele hlīfade,\nhēah ond horngēap; heaðowylma bād,\nlāðan līges; ne wæs hit lenge þā gēn,\nþæt se ecghete āþumswēorum,\næfter wælnīðe wæcnan scolde.',
    diplomatic: 'Ða wæs on burgum Beowulf Scyldinga,\nleof leodcyning longe þrage\nfolcum gefræge — fæder ellor hwearf,\naldor of earde — oþ þæt him eft onwoc\nheah Healfdene; heold þenden lifde\ngamol ond guðreouw glæde Scyldingas.\nÐæm feower bearn forðgerimed\nin worold wocun, weoroda ræswan,\nHeorogar ond Hroðgar ond Halga til,\nhyrde ic þæt . . . . . . wæs Onelan cwen,\nHeaðo-Scilfingas healsgebedda.\nÞa wæs Hroðgare heresped gyfen,\nwiges weorðmynd, þæt him his winemagas\ngeorne hyrdon, oðð þæt seo geogoð geweox,\nmagodriht micel. Him on mod bearn,\nþæt healreced hatan wolde,\nmedoærn micel men gewyrcean\nþonne yldo bearn æfre gefrunon,\nond þær on innan eall gedælan\ngeongum ond ealdum, swylc him God sealde\nbuton folcscare ond feorum gumena.\nÐa ic wide gefrægn weorc gebannan\nmanigre mægþe geond þisne middangeard,\nfolcstede frætwan. Him on fyrste gelomp,\nædre mid yldum, þæt hit wearð ealgearo,\nhealærna mæst; scop him Heort naman\nse þe his wordes geweald wide hæfde.\nHe beot ne aleh, beagas dælde,\nsinc æt symle. Sele hlifade,\nheah ond horngeap; heaðowylma bad,\nlaðan liges; ne wæs hit lenge þa gen,\nþæt se ecghete aþumsweorum,\næfter wælniðe wæcnan scolde.',
    translations: [
      { label: 'English translation', text: 'Then in the strongholds Beowulf of the Scyldings, beloved king of the people, was famous among the nations for a long time (his father had gone elsewhere, the prince from his homeland), until in turn the high Healfdene was born to him; he ruled the gracious Scyldings as long as he lived, old and fierce in battle. To him four children, counted in order, came into the world, leaders of troops: Heorogar and Hrothgar and Halga the good; I have heard that [ … ] was Onela’s queen, the dear consort of the Battle-Scylfing. Then success in war was given to Hrothgar, glory in battle, so that his friends and kinsmen gladly obeyed him, until the young warriors grew into a great troop. It came into his mind that he would order men to build a hall, a great mead-house, greater than the children of men had ever heard of, and there inside to share out among young and old all that God had given him, except the common land and the lives of men. Then I heard that the work was ordered far and wide from many a tribe throughout this world, to adorn the people’s hall. In time it came about, quickly among men, that it was all ready, the greatest of halls; he whose word had wide authority gave it the name Heorot. He did not break his promise: he gave out rings, treasure at the feast. The hall towered, high and wide-gabled; it awaited the hostile surges of hateful fire. Nor was the time yet near when sword-hatred between son-in-law and father-in-law would awaken after deadly enmity.' },
      { label: 'German translation', text: 'Da war in den Burgen Beowulf der Schildinge, der geliebte Volkskönig, lange Zeit berühmt unter den Völkern (der Vater war anderswohin gegangen, der Fürst aus der Heimat), bis ihm wiederum der hohe Healfdene geboren wurde; der beherrschte, solange er lebte, alt und kampfgrimm, die gnädigen Schildinge. Ihm wurden vier Kinder, der Reihe nach gezählt, in die Welt geboren, Anführer der Scharen: Heorogar und Hrothgar und Halga der Gute; ich hörte, dass [ … ] Onelas Königin war, die liebe Gefährtin des Kampf-Scylfings. Da wurde Hrothgar Kriegsglück gegeben, Ruhm im Kampf, sodass ihm seine Freunde und Verwandten gern gehorchten, bis die Jugend zu einer großen Gefolgschaft herangewachsen war. Es kam ihm in den Sinn, dass er Männer eine Halle bauen heißen wollte, ein großes Methaus, größer als die Menschenkinder je eines vernommen hatten, und darin Jungen und Alten alles auszuteilen, was Gott ihm gegeben hatte, außer dem Gemeinland und dem Leben der Menschen. Da hörte ich, dass das Werk weithin vielen Stämmen in dieser Welt aufgetragen wurde, die Volkshalle zu schmücken. Mit der Zeit geschah es, rasch unter den Menschen, dass sie ganz fertig war, die größte der Hallen; der, dessen Wort weithin Geltung hatte, gab ihr den Namen Heorot. Er brach sein Versprechen nicht: er teilte Ringe aus, Schätze beim Gelage. Die Halle ragte, hoch und weitgiebelig; sie erwartete die feindlichen Wogen leidigen Feuers. Noch war die Zeit nicht nahe, da der Schwerthass zwischen Schwiegersohn und Schwiegervater nach tödlicher Feindschaft erwachen sollte.' }
    ],
    notes: [
      { ref: 'Ðā wæs on burgum Bēowulf Scyldinga', html: 'Not the hero: Scyld’s son, called Bēowulf in the manuscript. Most scholars think the original name was <span class="la">Bēow</span>, changed by a scribe under the influence of the hero’s name.' },
      { ref: 'fæder ellor hwearf, aldor of earde', html: 'A parenthesis (Klaeber’s dashes): “his father (Scyld) had departed elsewhere, the prince from his homeland”, i.e. had died. <span class="la">ellor hweorfan</span>: a euphemism for death.' },
      { ref: 'oþ þæt him eft onwōc hēah Healfdene', html: '<span class="la">him</span>: to Beowulf the Dane. <span class="la">onwōc</span>: “awoke”, i.e. was born.' },
      { ref: 'Ðǣm fēower bearn forðgerīmed in worold wōcun', html: '<span class="la">Ðǣm</span>: dative of the demonstrative used as a pronoun, “to him” (Healfdene). <span class="la">bearn</span>: neuter plural without ending (Lecture II).' },
      { ref: 'hȳrde ic þæt . . . . . . wæs Onelan cwēn', html: 'The manuscript lacks the daughter’s name; see the background. <span class="la">Onelan</span>: genitive of the weak noun <span class="la">Onela</span>.' },
      { ref: 'Þā wæs Hrōðgāre herespēd gyfen', html: '<span class="la">Hrōðgāre</span>: dative, “to Hrothgar”. <span class="la">gyfen</span>: past participle of <span class="la">giefan</span>, with <span class="la">wæs</span>: “was given”.' },
      { ref: 'oðð þæt sēo geogoð gewēox', html: '<span class="la">sēo geogoð</span>: nominative feminine, “the youth”, the young warriors.' },
      { ref: 'Him on mōd bearn', html: '“(It) came into his mind”: <span class="la">bearn</span> here is the past of <span class="la">beirnan</span> (= <span class="la">be-iernan</span>), “run, come”, not the noun “child”.' },
      { ref: 'þæt healreced hātan wolde … men gewyrcean', html: '<span class="la">hātan</span> + accusative and infinitive: “that he would order men to build”, as German <em>Männer bauen heißen</em>.' },
      { ref: 'būton folcscare ond feorum gumena', html: 'The king may give anything except public land and men’s lives. <span class="la">gumena</span>: weak genitive plural.' },
      { ref: 'Ðā ic wīde gefrægn weorc gebannan', html: '<span class="la">ic gefrægn</span>: “I have heard”, the oral poet’s formula (as <span class="la">gefrūnon</span> in line 2). <span class="la">gebannan</span>: an infinitive with passive sense, “(the work) be ordered”.' },
      { ref: 'scōp him Heort naman', html: '<span class="la">him</span>: dative, “for it” (the hall). <span class="la">naman</span>: accusative of the weak noun <span class="la">nama</span>.' },
      { ref: 'heaðowylma bād, lāðan līges', html: '<span class="la">bīdan</span> + genitive: “wait for”. See the source panel.' },
      { ref: 'þæt se ecghete āþumswēorum … wæcnan scolde', html: '<span class="la">āþumswēorum</span>: dative plural of a compound, “son-in-law and father-in-law” (Ingeld and Hrothgar). <span class="la">se ecghete</span>: nominative masculine, “the sword-hatred”.' }
    ],
    glosses: {
      'ðā': 'then', 'þā': 'then; the (f. acc., pl.)', 'wæs': 'was', 'on': 'in, among', 'burgum': 'strongholds (dat. pl. of burg)', 'bēowulf': 'Beowulf (the Dane, Scyld’s son: not the hero)',
      'scyldinga': 'of the Scyldings (gen. pl.)', 'scyldingas': 'the Scyldings (acc. pl.)', 'lēof': 'beloved, dear', 'lēodcyning': 'king of the people', 'longe': 'long', 'þrāge': 'time (acc. of þrāg: for a long time)',
      'folcum': 'among the peoples (dat. pl. of folc)', 'gefrǣge': 'famous', 'fæder': 'father', 'ellor': 'elsewhere', 'hwearf': 'turned, went (pret. of hweorfan)', 'aldor': 'prince, lord',
      'of': 'from', 'earde': 'homeland (dat. of eard)', 'oþ': 'until (oþ þæt)', 'þæt': 'that; the (n.)', 'him': 'to him, for him; them', 'eft': 'again, in turn',
      'onwōc': 'was born, awoke (pret. of onwæcnan)', 'hēah': 'high, tall', 'healfdene': 'Healfdene, king of the Danes', 'hēold': 'ruled, held (pret. of healdan)', 'þenden': 'while, as long as', 'lifde': '(he) lived (pret. of libban)',
      'gamol': 'old', 'ond': 'and', 'gūðrēouw': 'fierce in battle', 'glæde': 'gracious, glad (acc. pl.)', 'ðǣm': 'to him (dat. of se: to that one)', 'fēower': 'four',
      'bearn': 'children (nom. pl.); came (pret. of beirnan: on mōd bearn, came into his mind)', 'forðgerīmed': 'counted in order', 'in': 'in, into', 'worold': 'world', 'wōcun': 'awoke, were born (pret. pl. of wæcnan)', 'weoroda': 'of troops (gen. pl. of werod)',
      'rǣswan': 'leaders (nom. pl. of rǣswa, weak)', 'heorogār': 'Heorogar', 'hrōðgār': 'Hrothgar', 'hrōðgāre': 'to Hrothgar (dat.)', 'hālga': 'Halga', 'til': 'good',
      'hȳrde': 'heard (pret. of hȳran)', 'ic': 'I', 'onelan': 'Onela’s (gen.: weak noun)', 'cwēn': 'queen', 'heaðo': 'battle- (Heaðo-Scilfingas: the Battle-Scylfings, the Swedes)', 'scilfingas': 'Scylfing’s (gen. sg.: of the Swedish king)',
      'healsgebedda': 'dear bedfellow, consort', 'herespēd': 'success in war', 'gyfen': 'given (past part. of giefan)', 'wīges': 'of war (gen. of wīg)', 'weorðmynd': 'honour, glory', 'his': 'his',
      'winemāgas': 'friends and kinsmen (nom. pl.)', 'georne': 'eagerly', 'hȳrdon': 'obeyed (pret. pl. of hȳran)', 'oðð': 'until (oðð þæt)', 'sēo': 'the (nom. f.)', 'geogoð': 'youth, young warriors',
      'gewēox': 'grew (pret. of geweaxan)', 'magodriht': 'troop of young retainers', 'micel': 'great', 'mōd': 'mind', 'healreced': 'hall-building', 'hātan': 'order, command',
      'wolde': '(he) wanted, would', 'medoærn': 'mead-hall', 'men': 'men (acc. pl.)', 'gewyrcean': 'build, make', 'þonne': 'than', 'yldo': 'of men (gen. pl. of ylde: yldo bearn, the children of men)',
      'ǣfre': 'ever', 'gefrūnon': 'had heard of (pret. pl. of gefrignan)', 'þǣr': 'there', 'innan': 'within', 'eall': 'everything', 'gedǣlan': 'share out, distribute',
      'geongum': 'to the young (dat. pl.)', 'ealdum': 'to the old (dat. pl.)', 'swylc': 'such (as)', 'god': 'God', 'sealde': 'gave (pret. of sellan)', 'būton': 'except',
      'folcscare': 'common land, the people’s share (dat.)', 'feorum': 'lives (dat. pl. of feorh)', 'gumena': 'of men (gen. pl. of guma, weak)', 'wīde': 'widely', 'gefrægn': 'heard (pret. of gefrignan): ic gefrægn, I have heard', 'weorc': 'work (acc.)',
      'gebannan': 'be commanded, ordered (inf.)', 'manigre': 'many a (dat. f.)', 'mǣgþe': 'tribe, people (dat. of mǣgþ)', 'geond': 'throughout', 'þisne': 'this (acc. m. of þes)', 'middangeard': 'the world, middle-earth',
      'folcstede': 'folk-hall, people’s place (acc.)', 'frætwan': 'adorn', 'fyrste': 'time (dat. of first: on fyrste, in time)', 'gelomp': 'it happened (pret. of gelimpan)', 'ǣdre': 'quickly', 'mid': 'among, with',
      'yldum': 'men (dat. pl. of ylde)', 'hit': 'it', 'wearð': 'became (pret. of weorþan)', 'ealgearo': 'all ready, complete', 'healærna': 'of hall-buildings (gen. pl.)', 'mǣst': 'greatest',
      'scōp': 'created, gave (pret. of scieppan)', 'heort': 'Heorot, “hart”', 'naman': 'name (acc. of nama, weak)', 'sē': 'he (sē þe: he who)', 'þe': 'who (relative particle)', 'wordes': 'of word (gen.)',
      'geweald': 'command, power', 'hæfde': 'had', 'hē': 'he', 'bēot': 'promise, vow', 'ne': 'not', 'ālēh': 'broke, belied (pret. of ālēogan)',
      'bēagas': 'rings (acc. pl. of bēag)', 'dǣlde': 'distributed (pret. of dǣlan)', 'sinc': 'treasure', 'æt': 'at', 'symle': 'feast (dat. of symbel)', 'sele': 'hall',
      'hlīfade': 'towered (pret. of hlīfian)', 'horngēap': 'wide-gabled, with horned gables', 'heaðowylma': 'hostile surges (gen. pl. of heaðowylm)', 'bād': 'awaited (pret. of bīdan + gen.)', 'lāðan': 'hateful (gen.)', 'līges': 'of fire (gen. of līg)',
      'lenge': 'long, at hand', 'gēn': 'yet (þā gēn: still)', 'se': 'the (nom. m.)', 'ecghete': 'sword-hatred', 'āþumswēorum': 'between son-in-law and father-in-law (dat. pl.)', 'æfter': 'after',
      'wælnīðe': 'deadly enmity (dat.)', 'wæcnan': 'awaken, arise', 'scolde': 'should, was to'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Which Danish king is the father of Hrothgar?', options: ['Healfdene', 'Scyld', 'Beowulf the Geat', 'Onela'], answer: 0, explain: 'Healfdene’s four children: Heorogar, Hrothgar, Halga and a daughter.' },
      { id: 'r2', type: 'mc', prompt: 'What did Hrothgar decide to build?', options: ['A great mead-hall', 'A ship', 'A church', 'A wall'], answer: 0, explain: 'medoærn micel.' },
      { id: 'r3', type: 'mc', prompt: 'What would Hrothgar not give away in the hall?', options: ['Common land and the lives of men', 'Rings', 'Mead', 'Weapons'], answer: 0, explain: 'būton folcscare ond feorum gumena.' },
      { id: 'r4', type: 'mc', prompt: 'What did Hrothgar do once the hall was finished?', options: ['Gave out rings and treasure at the feast', 'Left for Sweden', 'Burnt it', 'Fought Grendel'], answer: 0, explain: 'bēagas dǣlde, sinc æt symle.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Dative singular of <span class="la">lār</span>:', options: ['lāre', 'lāra', 'lārum', 'lār'], answer: 0, explain: 'Strong feminine: -e.' },
      { id: 't2', type: 'mc', prompt: 'Nominative plural of <span class="la">ēage</span>:', options: ['ēagan', 'ēagas', 'ēage', 'ēagum'], answer: 0, explain: 'Weak: -an (German Augen).' },
      { id: 't3', type: 'mc', prompt: 'Dative singular masculine of the article:', options: ['þǣm', 'þone', 'þæs', 'þǣre'], answer: 0, explain: 'German dem.' },
      { id: 't4', type: 'mc', prompt: 'Genitive plural of the article:', options: ['þāra', 'þǣm', 'þā', 'þæs'], answer: 0, explain: 'German der.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">mid þǣm gum___</span>', hint: 'with the men (dat. pl.)', answers: ['um'], full: 'mid þǣm gumum', explain: 'Dative plural -um.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">Hē hēt þā cwēn___ cuman.</span>', hint: 'the queen (acc.)', answers: ['e'], full: 'Hē hēt þā cwēne cuman.', explain: 'Strong feminine acc. -e.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Se cyning dǣlde bēagas on þǣre healle.', model: 'The king gave out rings in the hall.', accepted: ['king gave out rings in hall', 'king distributed rings in hall', 'king shared out rings in hall', 'king gave rings in hall', 'king handed out rings in hall'] },
      { id: 't8', type: 'translate', dir: 'en-oe', source: 'the man’s name (guma, nama)', model: 'þæs guman nama', accepted: ['þæs guman nama', 'þæs guman naman'], explain: 'Guma is a weak masculine: genitive guman. The word survives in German Bräutigam.' },
      { id: 't9', type: 'mc', prompt: 'Where have great royal halls of the 6th–10th centuries been excavated?', options: ['Lejre, Zealand', 'Sutton Hoo', 'Maldon', 'Winchester'], answer: 0, explain: 'Linked by tradition with the Scyldings.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">þisne</span> in <span class="la">geond þisne middangeard</span> is:', options: ['this (acc. m.)', 'the (dat.)', 'these', 'that (n.)'], answer: 0, explain: 'From þes, þēos, þis.' },
      { id: 't11', type: 'mc', prompt: 'Why does German <em>Lehre</em> have the plural <em>Lehren</em> but Old English <span class="la">lār</span> has <span class="la">lāra</span>?', options: ['German spread the weak -en to feminine nouns', 'lār is a weak noun', 'Lehre is a loan word', 'Old English lost the plural'], answer: 0, explain: 'The weak plural spread in German.' }
    ]
  },

  reference: [
    { title: 'Strong feminine: lār, giefu', headers: ['', 'lār', 'giefu'], rows: [['Nom. sg.', 'lār', 'giefu'], ['Acc./Gen./Dat. sg.', 'lāre', 'giefe'], ['Nom./Acc. pl.', 'lāra, -e', 'giefa, -e'], ['Gen. pl.', 'lāra (-ena)', 'giefa (-ena)'], ['Dat. pl.', 'lārum', 'giefum']] },
    { title: 'Weak nouns', headers: ['', 'guma (m.)', 'tunge (f.)', 'ēage (n.)'], rows: [['Nom. sg.', 'guma', 'tunge', 'ēage'], ['Acc. sg.', 'guman', 'tungan', 'ēage'], ['Gen./Dat. sg.', 'guman', 'tungan', 'ēagan'], ['Nom./Acc. pl.', 'guman', 'tungan', 'ēagan'], ['Gen. pl.', 'gumena', 'tungena', 'ēagena'], ['Dat. pl.', 'gumum', 'tungum', 'ēagum']] },
    { title: 'se, sēo, þæt', headers: ['', 'Masc.', 'Fem.', 'Neut.', 'Plural'], rows: [['Nom.', 'se', 'sēo', 'þæt', 'þā'], ['Acc.', 'þone', 'þā', 'þæt', 'þā'], ['Gen.', 'þæs', 'þǣre', 'þæs', 'þāra'], ['Dat.', 'þǣm', 'þǣre', 'þǣm', 'þǣm'], ['Instr.', 'þȳ, þon', '—', 'þȳ, þon', '—']] }
  ]
});
