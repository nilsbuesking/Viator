/*
 * Old English — Lecture XI: verbal prefixes; adverbs of place and manner; superlatives; reading an edition
 * with brackets. Reading: Beowulf 3156–3182 (the barrow and the last lines), transcribed from the page
 * images of Klaeber’s first edition (1922), pp. 119–120 (sources/klaeber-beowulf-pages/).
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-11',
  number: 11,
  title: 'The barrow',
  subtitle: 'Verbal prefixes; adverbs; reading an edited text; Beowulf 3156–3182',
  minutes: 60,

  intro: `
    <p>Fifty years after the fight with Grendel’s mother, Beowulf is an old king of the Geats. A thief steals a cup from a dragon’s hoard; the dragon burns the land; the king goes out to fight it with eleven companions, and all but one, Wiglaf, run away. Beowulf kills the dragon and dies of its venom. The Geats burn him on a great pyre, and then build a mound on the headland, visible to sailors far out at sea.</p>
    <p>The reading is the last twenty-seven lines of the poem: the building of the barrow, the burial of the dragon’s treasure, and twelve riders circling the mound and praising their dead king. Its last word, <span class="la">lofgeornost</span> “most eager for fame”, is one of the most discussed in Old English.</p>
    <p>For the first time we read from a scan of a printed edition rather than a transcription. Klaeber prints length marks, so both views keep his macrons. The page in the manuscript is badly damaged, and Klaeber marks his restorations with brackets; grammar section 4 explains how to read them.</p>
  `,

  background: [
    {
      title: 'The dragon and the hoard',
      html: `
        <p>The last third of the poem (lines 2200–3182) is a separate story, set half a century later. The treasure the dragon guards was buried long ago by the “last survivor” of a vanished people, and the poet makes clear that it brings no good: the Geats bury it again with their king, <span class="la">eldum swā unnyt, swā hit ǣror wæs</span>, “as useless to men as it was before”.</p>
        <p>The poem also ends with a prophecy: with Beowulf dead, the Swedes and Franks will attack the Geats, and a Geatish woman’s lament (3150–3155, almost illegible in the manuscript) foresees invasion, slaughter and captivity. Many readers take the ending as the end of a people as well as of a king.</p>
      `
    },
    {
      title: 'Pyre and barrow',
      html: `
        <p>The funeral combines cremation on a pyre (<span class="la">ād, bǣl</span>) with a mound (<span class="la">hlǣw, beorg</span>) over the remains and grave goods. Both were practised in pre-Christian Scandinavia and in early Anglo-Saxon England; in England cremation had largely given way to inhumation by the seventh century. The great mounds of Gamla Uppsala in Sweden, from the sixth century, contained cremations; the Sutton Hoo ship burial (Lecture II) was an inhumation. The poet, a Christian writing later, describes a pagan rite with evident respect and some distance.</p>
        <p>The twelve riders circling the mound and praising the dead recall Jordanes’ account (<em>Getica</em> 49, sixth century) of Attila’s funeral, where horsemen rode round the body singing his deeds. Whether the poet knew such a rite or such a text cannot be shown; it may simply be a widespread custom.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Gamla_Uppsala_west_mound_1874.jpg/960px-Gamla_Uppsala_west_mound_1874.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Gamla_Uppsala_west_mound_1874.jpg/500px-Gamla_Uppsala_west_mound_1874.jpg|https://upload.wikimedia.org/wikipedia/commons/4/44/Gamla_Uppsala_west_mound_1874.jpg" alt="Old photograph of a large grassy burial mound"><figcaption>The western of the royal mounds at Gamla Uppsala, Sweden, photographed in 1874. The mounds date from the sixth century and contained cremations with rich grave goods. <span class="credit">Photograph, 1874; licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Gamla_Uppsala_west_mound_1874.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'lofgeornost: the last word',
      html: `
        <p>The Geats praise their king as the mildest of men, the gentlest, the kindest to his people, and <span class="la">lofgeornost</span>, “most eager for praise”. In heroic terms that is the highest praise: a king who seeks lasting fame (<span class="la">lof, dōm</span>) through deeds. In Christian writing, however, eagerness for praise can be the sin of vainglory, and <span class="la">lofgeorn</span> has been read in that light.</p>
        <p>So some readers find a final note of criticism: Beowulf’s desire for glory made him fight the dragon alone and left his people defenceless. Others see no irony at all, since the word sits among unambiguous superlatives of praise and is spoken by his own grieving men. The text allows both readings; the poem ends on the question rather than settling it.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Him ðā gegiredan Gēata lēode<br>ād on eorðan unwāclīcne,<br>helm[um] behongen, hildebordum,<br>beorhtum byrnum, swā hē bēna wæs</p>
    <p>“Then the people of the Geats made ready for him a pyre on the earth, no mean one, hung with helmets, with battle-shields, with bright mail-coats, as he had asked.” <em>Beowulf</em> 3137–3140, Klaeber (1922), p. 118, as printed.</p>
    <p><span class="la">helm[um]</span>: the manuscript reads <span class="la">helm</span>; Klaeber adds the dative plural ending to match <span class="la">hildebordum</span> and <span class="la">byrnum</span>. <span class="la">gegiredan</span> is <span class="la">gegyrwan</span> “prepare” (Lecture VIII). <span class="la">unwāclīcne</span> is understatement: “not weak”, i.e. magnificent.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>kyning</strong>: the scribe writes k for c here, which shows the sound: German <em>k</em> before a front vowel (<em>kü-ning</em>), not tsch.</li>
      <li><strong>wyruldcyninga</strong>: an extra vowel between r and l, perhaps a late or dialect spelling of <span class="la">woruld</span>.</li>
      <li><strong>heorðgenēatas</strong>: <span class="la">rð</span> as English <em>rth</em> in <em>hearth</em>, then a long ē.</li>
      <li><strong>līchaman</strong>: <span class="la">ch</span> here is just c + h at the joint of a compound (<span class="la">līc-hama</span>), as in German <em>Leich-nam</em>, not the German ch.</li>
      <li><strong>riodan</strong>: an unusual spelling of <span class="la">ridon</span>, the past plural of <span class="la">rīdan</span>; short i, then o.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. Verbal prefixes',
      html: `
        <p>Old English prefixes behave like German inseparable prefixes: unstressed, never separated, and changing the meaning of the verb in ways that are often recognisable from German:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Prefix</th><th>Sense</th><th>Example</th><th>German</th></tr></thead>
          <tbody>
            <tr><td class="la">be-</td><td>around; makes a verb transitive</td><td class="la">bewyrcan “surround”, betimbran “build”, begnornian “mourn for”</td><td>be- (bewirken, bezimmern, beweinen)</td></tr>
            <tr><td class="la">for-</td><td>away, wrongly, utterly</td><td class="la">forlǣtan “abandon”, forbærnan “burn up”</td><td>ver- (verlassen, verbrennen)</td></tr>
            <tr><td class="la">ge-</td><td>completion; or no clear sense</td><td class="la">gewyrcan “make”, geseon “see”</td><td>ge- (past participle)</td></tr>
            <tr><td class="la">ā-</td><td>out, up, away</td><td class="la">āstīgan “rise”, āwrītan “write down”</td><td>er- (ersteigen), auf-</td></tr>
            <tr><td class="la">on-</td><td>beginning; reversal</td><td class="la">onginnan “begin”, onlūcan “unlock”</td><td>an-, ent- (entschließen)</td></tr>
            <tr><td class="la">of-</td><td>completely, to death</td><td class="la">ofslēan “kill”</td><td>(cf. ab-)</td></tr>
            <tr><td class="la">tō-</td><td>apart</td><td class="la">tōbrecan “break apart”</td><td>zer- (zerbrechen)</td></tr>
          </tbody>
        </table></div>
        <p>The prefix <span class="la">ge-</span> is not yet obligatory in the past participle: <span class="la">genumen</span> (3165) has it, <span class="la">lǣded</span> (3177) does not. When looking up a verb, try it without the prefix first; dictionaries often list <span class="la">gewyrcan</span> under <span class="la">wyrcan</span>.</p>
      `
    },
    {
      title: '2. Adverbs of place: here, hither, hence',
      html: `
        <p>Old English has three adverbs for each place, for rest, motion towards and motion from, exactly like German <em>hier, her, hin</em> and <em>wo, wohin, woher</em>:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Rest</th><th>To</th><th>From</th></tr></thead>
          <tbody>
            <tr><th>here</th><td class="la">hēr</td><td class="la">hider</td><td class="la">heonan</td></tr>
            <tr><th>there</th><td class="la">þǣr</td><td class="la">þider</td><td class="la">þonan</td></tr>
            <tr><th>where?</th><td class="la">hwǣr</td><td class="la">hwider</td><td class="la">hwanan</td></tr>
            <tr><th>German</th><td>hier, da, wo</td><td>her, dahin, wohin</td><td>von hier, von dort, woher</td></tr>
          </tbody>
        </table></div>
        <p>English kept the full set until the 18th century (<em>hither, thither, whither; hence, thence, whence</em>). The coast-guard used three of them in Lecture IX: <span class="la">hider</span>, <span class="la">heonan</span>, <span class="la">hwanan</span>.</p>
      `
    },
    {
      title: '3. Adverbs of manner and superlatives',
      html: `
        <ul>
          <li><strong>-e</strong> added to an adjective: <span class="la">wīd</span> → <span class="la">wīde</span> “widely”, as in German (<em>lange</em> beside <em>lang</em>, older usage).</li>
          <li><strong>-līce</strong>: <span class="la">sōðlīce</span> “truly”, German <em>-lich</em>, English <em>-ly</em>.</li>
          <li>Comparative adverb <strong>-or</strong>, superlative <strong>-ost</strong>: <span class="la">weorðlīcost</span> “most worthily” (3161), <span class="la">cūðlīcor</span> (Lecture IX).</li>
        </ul>
        <p>The last three lines are a chain of adjective superlatives, the old type in <span class="la">-ost</span>/<span class="la">-ust</span> without umlaut: <span class="la">mildust, monðwǣrust, līðost, lofgeornost</span>. After a genitive plural (<span class="la">manna mildust</span> “mildest of men”) the superlative is uninflected, as German <em>der Männer mildester</em> would be in poetry.</p>
      `
    },
    {
      title: '4. Reading an edited text: Klaeber’s brackets',
      html: `
        <p>The last pages of the Beowulf manuscript were damaged in the Cotton library fire of 1731, and the edges have crumbled since. Klaeber uses two kinds of brackets:</p>
        <ul>
          <li><strong>Round brackets ( )</strong>: letters that are now lost or illegible in the manuscript, supplied from the two transcripts made for and by the Icelandic-Danish scholar Thorkelin around 1787 (Lecture XII) or by conjecture: <span class="la">hl(ǣw)</span>, <span class="la">(hry)re</span>, <span class="la">mon(ðw)ǣrust</span>.</li>
          <li><strong>Square brackets [ ]</strong>: the editor’s additions or corrections where he thinks the scribe went wrong: <span class="la">[h]liðe</span> (MS <span class="la">liðe</span>), <span class="la">wyruldcyning[a]</span> (MS <span class="la">wyruldcyning</span>), <span class="la">[ond]</span>.</li>
        </ul>
        <p>Every bracket is a decision, and editions differ. In the lament of 3150–3155 almost every word is restored; Klaeber notes that “all that is legible in this page” has been freshened up by a later hand. In our “as printed” view, where one of Klaeber’s round brackets runs across two words (<span class="la">hi(t ǣro)r</span>), we close and reopen it at the word boundary so that each word can be tapped.</p>
      `
    }
  ],

  vocab: [
    { id: 'hlaew', head: 'hlǣw', la: 'hlǣw, hlǣwes', g: 'm', pos: 'noun, strong', en: 'mound, barrow, grave-mound', note: 'In place-names: -low (Ludlow), Low (Scotland).' },
    { id: 'beorg', head: 'beorg', la: 'beorg, beorges', g: 'm', pos: 'noun, strong', en: 'hill, mountain; barrow', note: 'German Berg; English barrow, -borough in some names.' },
    { id: 'gestreon', head: 'gestrēon', la: 'gestrēon, gestrēones', g: 'n', pos: 'noun, strong', en: 'treasure, wealth', note: 'Related to strēonan “acquire, beget”.' },
    { id: 'laf', head: 'lāf', la: 'lāf, lāfe', g: 'f', pos: 'noun, strong', en: 'what is left, remains; heirloom', note: 'From lǣfan (Lecture VII); German bleiben. English loaf is a different word.' },
    { id: 'ad', head: 'ād', la: 'ād, ādes', g: 'm', pos: 'noun, strong', en: 'funeral pyre', note: 'Probably related to Latin aestus “heat”.' },
    { id: 'bael', head: 'bǣl', la: 'bǣl, bǣles', g: 'n', pos: 'noun, strong', en: 'fire, funeral pyre', note: 'Old Norse bál; bǣlfȳr “pyre-fire”.' },
    { id: 'rec', head: 'rēc', la: 'rēc, rēces', g: 'm', pos: 'noun, strong', en: 'smoke', note: 'German Rauch; English reek, Auld Reekie.' },
    { id: 'lichama', head: 'līchama', la: 'līchama, līchaman', g: 'm', pos: 'noun, weak', en: 'body (living or dead)', note: 'līc “body” + hama “covering”: German Leichnam, Leiche.' },
    { id: 'eorlscipe', head: 'eorlscipe', la: 'eorlscipe, eorlscipes', g: 'm', pos: 'noun, strong', en: 'nobility, heroic conduct', note: 'Suffix -scipe = German -schaft, English -ship.' },
    { id: 'lof', head: 'lof', la: 'lof, lofes', g: 'n', pos: 'noun, strong', en: 'praise, fame', note: 'German Lob. lofgeorn: eager for praise.' },
    { id: 'wrecan', head: 'wrecan', la: 'wrecan; wræc, wrǣcon; wrecen', pos: 'verb, strong (V)', en: 'avenge; drive; utter (a song)', note: 'German rächen; English wreak.' },
    { id: 'maenan', head: 'mǣnan', la: 'mǣnan; mǣnde', pos: 'verb, weak (1)', en: 'lament, mourn; mean, speak of', note: 'German meinen; English moan and mean.' },
    { id: 'deman', head: 'dēman', la: 'dēman; dēmde', pos: 'verb, weak (1)', en: 'judge; praise; deem', note: 'From dōm (with umlaut); English deem, doom.' },
    { id: 'herian', head: 'herian', la: 'herian; herede', pos: 'verb, weak (1)', en: 'praise', note: 'Not related to German hören; Gothic hazjan.' },
    { id: 'forlaetan', head: 'forlǣtan', la: 'forlǣtan; forlēt, forlēton; forlǣten', pos: 'verb, strong (VII)', en: 'leave, abandon; let', note: 'German verlassen, verließ.' },
    { id: 'freogan', head: 'frēogan', la: 'frēogan; frēode', pos: 'verb, weak (2)', en: 'love; free', note: 'Same root as frēond and frēo “free”; German Freund, frei.' },
    { id: 'milde', head: 'milde', la: 'milde; mildust', pos: 'adjective', en: 'mild, kind, generous', note: 'German mild, milde (also “generous”: Milde in Middle High German).' },
    { id: 'lithe', head: 'līðe', la: 'līðe; līðost', pos: 'adjective', en: 'gentle, kind', note: 'German lind (Linderung); English lithe.' }
  ],

  grammarCards: [
    { id: 'oe11-be', front: 'Prefix be-', back: 'around; makes a verb transitive (bewyrcan, begnornian) — German be-' },
    { id: 'oe11-for', front: 'Prefix for-', back: 'away, utterly, wrongly (forlǣtan, forbærnan) — German ver-' },
    { id: 'oe11-a', front: 'Prefix ā-', back: 'out, up, away (āstīgan, āwrītan) — German er-, auf-' },
    { id: 'oe11-to', front: 'Prefix tō-', back: 'apart (tōbrecan) — German zer-' },
    { id: 'oe11-ge', front: 'ge- in the past participle', back: 'Common but not obligatory: genumen, but lǣded' },
    { id: 'oe11-here', front: 'hēr / hider / heonan', back: 'here / hither / hence (hier / her / von hier)' },
    { id: 'oe11-there', front: 'þǣr / þider / þonan', back: 'there / thither / thence' },
    { id: 'oe11-where', front: 'hwǣr / hwider / hwanan', back: 'where / whither / whence (wo / wohin / woher)' },
    { id: 'oe11-adv', front: 'Adverbs from adjectives', back: '-e (wīde), -līce (sōðlīce); comparative -or, superlative -ost' },
    { id: 'oe11-round', front: 'Klaeber’s round brackets ( )', back: 'Letters now lost or illegible in the MS, supplied from the Thorkelin transcripts or by conjecture' },
    { id: 'oe11-square', front: 'Klaeber’s square brackets [ ]', back: 'Editorial additions or corrections' },
    { id: 'oe11-unnyt', front: 'eldum swā unnyt, swā hit ǣror wæs', back: 'as useless to men as it was before (Beowulf 3168)' },
    { id: 'oe11-last', front: 'manna mildust ond monðwǣrust, lēodum līðost ond lofgeornost', back: 'mildest of men and kindest, gentlest to his people and most eager for fame (Beowulf 3181–3182)' },
    { id: 'oe11-twelve', front: 'Þā ymbe hlǣw riodan hildedēore … ealra twelfe', back: 'Then the battle-brave rode around the mound … twelve in all (3169–3170)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Who rode around the barrow?', options: ['Twelve sons of nobles', 'Wiglaf alone', 'The Swedes', 'Hrothgar’s men'], answer: 0, explain: 'æþelinga bearn, ealra twelfe.' },
    { id: 'e2', type: 'mc', prompt: 'How long did the Geats take to build the barrow?', options: ['Ten days', 'Twelve days', 'One night', 'A year'], answer: 0, explain: 'on tȳn dagum.' },
    { id: 'e3', type: 'mc', prompt: 'What did they do with the dragon’s treasure?', options: ['Buried it with Beowulf', 'Shared it out', 'Sent it to Hrothgar', 'Threw it into the sea'], answer: 0, explain: 'Hī on beorg dydon bēg ond siglu.' },
    { id: 'e4', type: 'mc', prompt: 'German <em>ver-</em> usually corresponds to Old English:', options: ['for-', 'be-', 'ā-', 'ge-'], answer: 0, explain: 'forlǣtan = verlassen.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">hwanan</span> means:', options: ['whence, from where', 'where', 'whither', 'when'], answer: 0, explain: 'German woher.' },
    { id: 'e6', type: 'mc', prompt: 'In Klaeber, <span class="la">hl(ǣw)</span> means:', options: ['the letters ǣw are lost in the MS and supplied', 'the editor deleted ǣw', 'ǣw is in a later hand', 'ǣw is optional'], answer: 0, explain: 'Round brackets: lost or illegible letters.' },
    { id: 'e7', type: 'mc', prompt: 'In Klaeber, <span class="la">[h]liðe</span> means:', options: ['the editor added h (MS liðe)', 'h is illegible', 'h is in red ink', 'h is silent'], answer: 0, explain: 'Square brackets: editorial addition.' },
    { id: 'e8', type: 'mc', prompt: 'Why is <span class="la">lofgeornost</span> debated?', options: ['lofgeorn can also mean “vainglorious”', 'It is a scribal error', 'It is Latin', 'Nobody knows what lof means'], answer: 0, explain: 'Praise or a hint of criticism.' },
    { id: 'e9', type: 'match', prompt: 'Match the prefixed verbs to German.', pairs: [
      ['forlǣtan', 'verlassen'], ['tōbrecan', 'zerbrechen'], ['betimbran', 'bezimmern'], ['āstīgan', 'aufsteigen'], ['onginnan', 'beginnen']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the adverbs.', pairs: [
      ['hider', 'hither'], ['heonan', 'hence'], ['þider', 'thither'], ['þonan', 'thence'], ['hwǣr', 'where']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">manna mild___ ond monðwǣrust</span>', hint: 'mildest (superlative)', answers: ['ust', 'ost'], full: 'manna mildust ond monðwǣrust', explain: 'Superlative -ust/-ost.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">___lēton eorla gestrēon eorðan healdan</span>', hint: 'they abandoned (prefix)', answers: ['for'], full: 'forlēton eorla gestrēon eorðan healdan', explain: 'German verließen.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Hwæt syndon gē … þe ___ ofer holmas cwōmon?</span>', hint: 'hither', answers: ['hider'], full: 'Hwæt syndon gē … þe hider ofer holmas cwōmon?', explain: 'Motion towards: hider.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">hē wæs wīd___ gesȳne</span>', hint: 'widely (adverb)', answers: ['e'], full: 'hē wæs wīde gesȳne', explain: 'Adverb -e.' },
    { id: 'e15', type: 'paradigm', prompt: 'Complete the adverbs of place.', headers: ['To (whither)', 'From (whence)'], rows: [
      { label: 'here: hēr', answers: ['hider', 'heonan|heonon'] },
      { label: 'there: þǣr', answers: ['þider|ðider', 'þonan|ðonan|þanon|þonon'] },
      { label: 'where: hwǣr', answers: ['hwider', 'hwanan|hwonan'] },
      { label: 'German: hier', answers: ['her|hierher', 'von hier'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Give the superlative.', headers: ['Adjective', 'Superlative'], rows: [
      { label: 'mild', answers: ['milde', 'mildust|mildost'] },
      { label: 'gentle', answers: ['līðe|liðe', 'līðost|liðost'] },
      { label: 'eager for fame', answers: ['lofgeorn', 'lofgeornost'] },
      { label: 'good', answers: ['gōd|god', 'betst|sēlest'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the English translation in order.', source: 'Hīe worhton hlǣw on hliðe.', tokens: ['They', 'built', 'a mound', 'on the headland'], explain: 'Beowulf 3156–3157.' },
    { id: 'e18', type: 'translate', dir: 'oe-en', source: 'Se hlǣw wæs hēah ond brād.', model: 'The mound was high and broad.', accepted: ['mound was high and broad', 'barrow was high and broad', 'mound was high and wide', 'barrow was high and wide', 'the mound was high and broad'] },
    { id: 'e19', type: 'translate', dir: 'oe-en', source: 'Hīe forlēton þæt gold.', model: 'They left the gold.', accepted: ['they left gold', 'they abandoned gold', 'they left the gold', 'they abandoned the gold', 'they left behind gold', 'they left behind the gold'] },
    { id: 'e20', type: 'translate', dir: 'en-oe', source: 'the high mound (nom.; hēah, hlǣw)', model: 'se hēa hlǣw', accepted: ['se hēa hlǣw', 'se hēah hlǣw', 'se hēaga hlǣw'] },
    { id: 'e21', type: 'translate', dir: 'en-oe', source: 'whence? (from where?)', model: 'hwanan', accepted: ['hwanan', 'hwonan'] },
    { id: 'e22', type: 'mc', prompt: 'Which ancient account of a funeral is often compared with the twelve riders?', options: ['Jordanes on Attila', 'Tacitus on Arminius', 'Bede on Edwin', 'Caesar on the Gauls'], answer: 0, explain: 'Getica 49.' },
    { id: 'e23', type: 'mc', prompt: 'Why are many words in 3150–3182 in brackets?', options: ['The manuscript was damaged by fire and has crumbled', 'They are Latin', 'They were added in the 19th century', 'They are spoken by the narrator'], answer: 0, explain: 'The Cotton fire of 1731.' }
  ],

  reading: {
    title: 'Beowulf 3156–3182',
    note: 'Authentic text: Klaeber’s edition (1922), lines 3156–3182, transcribed from the page images of pp. 119–120. Klaeber prints the length marks himself. “Klaeber, as printed” keeps his round brackets (letters lost in the manuscript and supplied) and square brackets (editorial additions); the normalised view drops the brackets. Tap any word.',
    diplomaticLabel: 'Klaeber, as printed',
    diplomaticNote: 'Klaeber (1922), pp. 119–120, with his brackets: ( ) letters lost or illegible in the manuscript, [ ] editorial additions. Where his round bracket spans two words (hi(t ǣro)r) we close it at the word boundary.',
    text: 'Geworhton ðā Wedra lēode\nhlǣw on hliðe, sē wæs hēah ond brād,\nwǣglīðendum wīde gesȳne,\nond betimbredon on tȳn dagum\nbeadurōfes bēcn, bronda lāfe\nwealle beworhton, swā hyt weorðlīcost\nforesnotre men findan mihton.\nHī on beorg dydon bēg ond siglu,\neall swylce hyrsta, swylce on horde ǣr\nnīðhēdige men genumen hæfdon;\nforlēton eorla gestrēon eorðan healdan,\ngold on grēote, þǣr hit nū gēn lifað\neldum swā unnyt, swā hit ǣror wæs.\nÞā ymbe hlǣw riodan hildedēore,\næþelinga bearn, ealra twelfe,\nwoldon care cwīðan, ond kyning mǣnan,\nwordgyd wrecan, ond ymb wer sprecan;\neahtodan eorlscipe ond his ellenweorc\nduguðum dēmdon, — swā hit gedēfe bið,\nþæt mon his winedryhten wordum herge,\nferhðum frēoge, þonne hē forð scile\nof līchaman lǣded weorðan.\nSwā begnornodon Gēata lēode\nhlāfordes hryre, heorðgenēatas;\ncwǣdon þæt hē wǣre wyruldcyninga\nmanna mildust ond monðwǣrust,\nlēodum līðost ond lofgeornost.',
    diplomatic: 'Geworhton ðā Wedra lēode\nhl(ǣw) on [h]liðe, sē wæs hēah ond brād,\n(wǣ)glīðendum wīde g(e)sȳne,\nond betimbredon on tȳn dagum\nbeadurōfes bēcn, bronda lāfe\nwealle beworhton, swā hyt weorðlīcost\nforesnotre men findan mihton.\nHī on beorg dydon bēg ond siglu,\neall swylce hyrsta, swylce on horde ǣr\nnīðhēdige men genumen hæfdon;\nforlēton eorla gestrēon eorðan healdan,\ngold on grēote, þǣr hit nū gēn lifað\neldum swā unnyt, swā hi(t) (ǣro)r wæs.\nÞā ymbe hlǣw riodan hildedēore,\næþelinga bearn, ealra twelfe,\nwoldon (care) cwīðan, [ond] kyning mǣnan,\nwordgyd wrecan, ond ymb w(er) sprecan;\neahtodan eorlscipe ond his ellenweorc\nduguðum dēmdon, — swā hit gedē(fe) bið,\nþæt mon his winedryhten wordum herge,\nferhðum frēoge, þonne hē forð scile\nof līchaman (lǣded) weorðan.\nSwā begnornodon Gēata lēode\nhlāfordes (hry)re, heorðgenēatas;\ncwǣdon þæt hē wǣre wyruldcyning[a]\nmanna mildust ond mon(ðw)ǣrust,\nlēodum līðost ond lofgeornost.',
    translations: [
      { label: 'English translation', text: 'Then the people of the Weders made a mound on the headland, which was high and broad, visible far and wide to seafarers, and in ten days they built the beacon of the battle-brave one; they surrounded the remains of the fire with a wall, as worthily as the wisest men could devise it. In the barrow they placed rings and jewels, all such ornaments as hostile-minded men had taken from the hoard before; they let the earth hold the treasure of nobles, gold in the ground, where it still lies now, as useless to men as it was before. Then the battle-brave rode around the mound, sons of nobles, twelve in all; they wished to lament their sorrow, mourn the king, recite a lament and speak of the man; they praised his nobility and judged his deed of courage with all their might, as it is fitting that a man should praise his friend and lord in words, love him in his heart, when he must be led forth from his body. So the people of the Geats, his hearth-companions, mourned the fall of their lord; they said that he had been, of the kings of the world, the mildest of men and the kindest, the gentlest to his people and the most eager for fame.' },
      { label: 'German translation', text: 'Da errichteten die Leute der Wedern einen Hügel auf der Landspitze, der war hoch und breit, den Seefahrern weithin sichtbar, und bauten in zehn Tagen das Mal des Kampfkühnen; die Reste des Feuers umgaben sie mit einem Wall, so würdig, wie es die weisesten Männer ersinnen konnten. In den Hügel legten sie Ringe und Kleinode, all solchen Schmuck, wie ihn feindselige Männer zuvor aus dem Hort genommen hatten; sie ließen die Erde den Schatz der Edlen bewahren, das Gold im Grund, wo es noch jetzt liegt, den Menschen so nutzlos, wie es zuvor war. Da ritten um den Hügel die Kampfkühnen, Söhne von Edlen, zwölf an der Zahl; sie wollten ihren Kummer beklagen, den König betrauern, ein Klagelied anstimmen und von dem Mann sprechen; sie rühmten sein Heldentum und priesen seine Kühnheit mit aller Kraft, wie es sich gebührt, dass man seinen Freund und Herrn mit Worten lobe, im Herzen liebe, wenn er aus dem Leib hinweggeführt werden muss. So beklagten die Leute der Geaten, seine Herdgenossen, den Fall ihres Herrn; sie sagten, er sei unter den Königen der Welt der mildeste der Männer gewesen und der gütigste, gegen sein Volk der freundlichste und der ruhmbegierigste.' }
    ],
    notes: [
      { ref: 'hl(ǣw) on [h]liðe, sē wæs hēah ond brād', html: 'Two kinds of brackets in three words: <span class="la">(ǣw)</span> lost in the manuscript and supplied; <span class="la">[h]</span> added by the editor (MS <span class="la">liðe</span>). <span class="la">sē</span> refers to the mound.' },
      { ref: 'betimbredon on tȳn dagum beadurōfes bēcn', html: '<span class="la">be-</span> makes <span class="la">timbran</span> “build” transitive: German <em>zimmern</em>. <span class="la">bēcn</span> “beacon”: the mound is a sea-mark, as Beowulf asked (lines 2802–2808).' },
      { ref: 'swā hyt weorðlīcost foresnotre men findan mihton', html: 'Superlative adverb <span class="la">weorðlīcost</span>; <span class="la">fore-</span> intensifies the adjective, “very wise”.' },
      { ref: 'swylce on horde ǣr nīðhēdige men genumen hæfdon', html: 'The treasure was taken from the dragon’s hoard by Beowulf and Wiglaf. <span class="la">nīðhēdige</span> is a crux: “hostile-minded” or “bold in battle”; the meaning depends on whose men are meant.' },
      { ref: 'forlēton eorla gestrēon eorðan healdan', html: '<span class="la">forlǣtan</span> + infinitive: “let the earth hold”, German <em>ließen die Erde … halten</em>. <span class="la">eorðan</span> is the subject of the infinitive.' },
      { ref: 'eldum swā unnyt, swā hi(t) (ǣro)r wæs', html: '<span class="la">swā … swā</span> “as … as”. The treasure returns to the state it was in when the dragon guarded it: the poem’s comment on wealth.' },
      { ref: 'woldon (care) cwīðan, [ond] kyning mǣnan', html: 'Four infinitives after <span class="la">woldon</span>: <span class="la">cwīðan, mǣnan, wrecan, sprecan</span>. <span class="la">[ond]</span> is added by Klaeber for the sense and metre.' },
      { ref: 'swā hit gedē(fe) bið, þæt mon his winedryhten wordum herge', html: 'A general statement: <span class="la">bið</span> (not <span class="la">is</span>) for what is always true; <span class="la">herge, frēoge</span> are subjunctive in a clause of what ought to be.' },
      { ref: 'þonne hē forð scile of līchaman (lǣded) weorðan', html: 'Passive with <span class="la">weorðan</span>, as German <em>geführt werden</em>. <span class="la">lǣded</span> without <span class="la">ge-</span>.' },
      { ref: 'cwǣdon þæt hē wǣre wyruldcyning[a] manna mildust', html: 'Reported speech with the subjunctive <span class="la">wǣre</span> (Lecture IX). Klaeber adds <span class="la">-a</span>: genitive plural “of kings of the world”; the manuscript has <span class="la">wyruldcyning</span>.' },
      { ref: 'lēodum līðost ond lofgeornost', html: 'The last half-line of the poem. See the background section on the debate.' }
    ],
    glosses: {
      'beadurōfes': 'of the battle-brave one (gen.; Beowulf)', 'bearn': 'children, sons (nom. pl.); æþelinga bearn: sons of nobles', 'begnornodon': 'mourned, lamented (pret. pl. of begnornian)', 'beorg': 'barrow, mound (acc.)', 'betimbredon': 'built (pret. pl. of betimbran; German zimmern)', 'beworhton': 'surrounded, enclosed (pret. pl. of bewyrcan)',
      'bið': 'is (always, habitually: form of bēon)', 'bronda': 'of the fires (gen. pl. of brand)', 'brād': 'broad', 'bēcn': 'beacon, monument (acc.)', 'bēg': 'rings (acc. pl. of bēag)', 'care': 'sorrow (acc. of cearu)',
      'cwīðan': 'lament, bewail', 'cwǣdon': 'said (pret. pl. of cweðan)', 'dagum': 'days (dat. pl.)', 'duguðum': 'with all their might, nobly (dat. pl. of duguð)', 'dydon': 'put, placed (pret. pl. of dōn)', 'dēmdon': 'praised, judged (pret. pl. of dēman)',
      'eahtodan': 'esteemed, praised (pret. pl. of eahtian; German achten)', 'eall': 'all', 'ealra': 'in all (gen. pl.); ealra twelfe: twelve in all', 'eldum': 'to men (dat. pl. of ielde, poetic)', 'ellenweorc': 'deed of courage (acc.)', 'eorla': 'of nobles, of men (gen. pl.)',
      'eorlscipe': 'nobility, heroism (acc.)', 'eorðan': 'earth (acc.)', 'ferhðum': 'in their hearts (dat. pl. of ferhð)', 'findan': 'find, devise', 'foresnotre': 'very wise (nom. pl.)', 'forlēton': 'left (pret. pl. of forlǣtan); forlēton … eorðan healdan: let the earth hold',
      'forð': 'forth', 'frēoge': 'should love (pres. subj. of frēogan)', 'gedēfe': 'fitting, proper', 'genumen': 'taken (past part. of niman)', 'gestrēon': 'treasure, wealth (acc.)', 'gesȳne': 'visible',
      'geworhton': 'made, built (pret. pl. of gewyrcan)', 'gold': 'gold', 'grēote': 'earth, gravel (dat. of grēot; German Grieß)', 'gēata': 'of the Geats', 'gēn': 'still, yet', 'healdan': 'hold, keep',
      'heorðgenēatas': 'hearth-companions (nom. pl.)', 'herge': 'should praise (pres. subj. of herian)', 'hildedēore': 'battle-brave ones (nom. pl.)', 'his': 'his', 'hit': 'it', 'hliðe': 'slope, headland (dat. of hlið)',
      'hlāfordes': 'lord’s (gen. of hlāford)', 'hlǣw': 'mound, barrow (acc.)', 'horde': 'hoard (dat.)', 'hryre': 'fall, death (acc.)', 'hyrsta': 'ornaments, trappings (acc. pl. of hyrst)', 'hyt': 'it (= hit)',
      'hæfdon': 'had', 'hē': 'he', 'hēah': 'high', 'hī': 'they (= hīe)', 'kyning': 'king (= cyning)', 'lifað': 'lives, lies (pres. of libban)',
      'lofgeornost': 'most eager for praise, for fame (superlative of lofgeorn)', 'lāfe': 'remains, what was left (acc. of lāf)', 'lēode': 'people (nom. pl.)', 'lēodum': 'to his people (dat. pl.)', 'līchaman': 'body (dat. of līchama; German Leichnam)', 'līðost': 'gentlest, kindest (superlative of līðe; German lind)',
      'lǣded': 'led (past part. of lǣdan)', 'manna': 'of men (gen. pl.)', 'men': 'men', 'mihton': 'could (pret. pl. of magan)', 'mildust': 'mildest, most generous (superlative of milde)', 'mon': 'one (indefinite pronoun, German man)',
      'monðwǣrust': 'gentlest, kindest to men (superlative of monðwǣre)', 'mǣnan': 'lament, speak of (weak I; German meinen)', 'nīðhēdige': 'hostile-minded, bold (nom. pl.)', 'nū': 'now', 'of': 'out of, from', 'on': 'on, in; into',
      'ond': 'and', 'riodan': 'rode (pret. pl. of rīdan)', 'scile': 'must (pres. subj. of sculan)', 'siglu': 'jewels, brooches (acc. pl. of sigle)', 'sprecan': 'speak', 'swylce': 'likewise; such … as; swylce … swylce: all such … as',
      'swā': 'as, so; swā … swā: as … as', 'sē': 'it, that one (demonstrative)', 'twelfe': 'twelve (inflected)', 'tȳn': 'ten', 'unnyt': 'useless', 'wealle': 'with a wall (dat. of weall)',
      'wedra': 'of the Weders, the Geats (gen. pl.)', 'weorðan': 'become; forð … lǣded weorðan: be led forth', 'weorðlīcost': 'most worthily (superlative adverb)', 'wer': 'the man, the hero (acc.)', 'winedryhten': 'friend and lord (acc.)', 'woldon': 'wanted, wished (pret. pl. of willan)',
      'wordgyd': 'lament, word-song (acc.)', 'wordum': 'with words (dat. pl.)', 'wrecan': 'utter, recite (a song); also: avenge', 'wyruldcyninga': 'of the kings of the world (gen. pl.)', 'wæs': 'was', 'wīde': 'widely, far',
      'wǣglīðendum': 'to seafarers (dat. pl.)', 'wǣre': 'was (pret. subj.: reported speech)', 'ymb': 'about, around', 'ymbe': 'around', 'æþelinga': 'of nobles (gen. pl.)', 'ðā': 'then',
      'þonne': 'when', 'þæt': 'that', 'þā': 'then', 'þǣr': 'where', 'ǣr': 'formerly, before', 'ǣror': 'before, earlier'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Where was the barrow built?', options: ['On a headland', 'In a valley', 'Inside Heorot', 'On an island'], answer: 0, explain: 'hlǣw on hliðe … wǣglīðendum wīde gesȳne.' },
      { id: 'r2', type: 'mc', prompt: 'Where is the treasure now, according to the poet?', options: ['Still in the ground, useless', 'In the king’s hall', 'With the Swedes', 'In the sea'], answer: 0, explain: 'þǣr hit nū gēn lifað eldum swā unnyt.' },
      { id: 'r3', type: 'mc', prompt: 'What did the twelve riders praise?', options: ['His nobility and deeds of courage', 'His wealth', 'His age', 'His sons'], answer: 0, explain: 'eahtodan eorlscipe ond his ellenweorc.' },
      { id: 'r4', type: 'mc', prompt: 'What is the last word of the poem?', options: ['lofgeornost', 'mildust', 'heorðgenēatas', 'Hwæt'], answer: 0, explain: '“most eager for fame”.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'German <em>zer-</em> corresponds to Old English:', options: ['tō-', 'for-', 'be-', 'of-'], answer: 0, explain: 'tōbrecan = zerbrechen.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">þider</span> means:', options: ['thither, to there', 'there', 'thence', 'then'], answer: 0, explain: 'Motion towards.' },
      { id: 't3', type: 'mc', prompt: 'What do square brackets mean in Klaeber?', options: ['Editorial additions or corrections', 'Letters lost in the MS', 'Later hand', 'Latin words'], answer: 0, explain: 'e.g. [h]liðe.' },
      { id: 't4', type: 'mc', prompt: '<span class="la">līchama</span> is related to German:', options: ['Leichnam', 'Licht', 'leicht', 'Lachen'], answer: 0, explain: 'līc + hama.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">lēodum līð___</span>', hint: 'gentlest (superlative)', answers: ['ost', 'ust'], full: 'lēodum līðost', explain: 'Superlative.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">Þā ymbe hlǣw ri___ hildedēore</span>', hint: 'rode (pret. pl. of rīdan)', answers: ['odan', 'don'], full: 'Þā ymbe hlǣw riodan hildedēore', explain: 'riodan = ridon.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Hīe mǣndon þone cyning.', model: 'They mourned the king.', accepted: ['they mourned king', 'they lamented king', 'they mourned the king', 'they lamented the king', 'they bewailed the king', 'they bewailed king'] },
      { id: 't8', type: 'translate', dir: 'en-oe', source: 'here (rest)', model: 'hēr', accepted: ['hēr'] },
      { id: 't9', type: 'mc', prompt: 'How many companions went with Beowulf against the dragon?', options: ['Eleven', 'Twelve', 'Fourteen', 'None'], answer: 0, explain: 'Only Wiglaf stayed.' },
      { id: 't10', type: 'mc', prompt: 'What damaged the end of the Beowulf manuscript?', options: ['The Cotton library fire of 1731', 'Viking raids', 'Water in the 19th century', 'A printer'], answer: 0, explain: 'The edges have crumbled since.' },
      { id: 't11', type: 'mc', prompt: 'Which Swedish site has royal mounds with cremations of the 6th century?', options: ['Gamla Uppsala', 'Lejre', 'Birka', 'Hedeby'], answer: 0, explain: 'A useful parallel for the funeral.' }
    ]
  },

  reference: [
    { title: 'Verbal prefixes', headers: ['Prefix', 'Sense', 'German'], rows: [['be-', 'around; transitive', 'be-'], ['for-', 'away, utterly', 'ver-'], ['ge-', 'completion', 'ge-'], ['ā-', 'out, up', 'er-, auf-'], ['on-', 'beginning; reversal', 'an-, ent-'], ['of-', 'completely', '—'], ['tō-', 'apart', 'zer-']] },
    { title: 'Adverbs of place', headers: ['Rest', 'To', 'From'], rows: [['hēr', 'hider', 'heonan'], ['þǣr', 'þider', 'þonan'], ['hwǣr', 'hwider', 'hwanan']] },
    { title: 'Klaeber’s brackets', headers: ['Sign', 'Meaning', 'Example'], rows: [['( )', 'lost or illegible in the MS, supplied', 'hl(ǣw)'], ['[ ]', 'editorial addition or correction', '[h]liðe, wyruldcyning[a]']] }
  ]
});
