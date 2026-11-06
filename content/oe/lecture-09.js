/*
 * Old English — Lecture IX: the subjunctive (forms and uses), subordinate clauses and conjunctions.
 * Reading: Beowulf 229–257 (the coast-guard), after Fr. Klaeber (1922), as transcribed online without
 * length marks (sources/beowulf-klaeber-1922-lines-1-2601.txt); one punctuation slip corrected.
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-09',
  number: 9,
  title: 'The coast-guard',
  subtitle: 'The subjunctive; subordinate clauses and conjunctions; Beowulf 229–257',
  minutes: 60,

  intro: `
    <p>The Danish coast-guard watches from the cliff as armed strangers carry shields off a ship. He rides down to the shore, shakes his spear and asks who they are. His speech is a small masterpiece of politeness under suspicion: nobody has ever landed here so openly; one of them is plainly no ordinary man, “unless his looks belie him”; but before they go a step further, he must know who they are.</p>
    <p>That <span class="la">nǣfne him his wlite lēoge</span>, “unless his appearance should lie”, is a <strong>subjunctive</strong>, the mood of what is uncertain, wished, conditional or reported. German speakers have an advantage: the Old English subjunctive works much like the German <em>Konjunktiv</em>, and the past subjunctive of a strong verb is built on the same stem as German <em>Konjunktiv II</em> (<span class="la">wǣre</span>, <em>wäre</em>).</p>
    <p>The lecture also collects the subordinating conjunctions met so far, because a subjunctive usually stands in a subordinate clause, and the conjunction tells you whether to expect one.</p>
  `,

  background: [
    {
      title: 'Challenge and answer',
      html: `
        <p>The scene follows a pattern found across Germanic heroic poetry: the stranger arrives, a guard challenges him, and he must state his name and lineage (<span class="la">frumcyn</span>). In the Old High German <em>Hildebrandslied</em> the old warrior asks the young one <em>hwer sin fater wari</em>, “who his father was”, with the same subjunctive in an indirect question (<em>wari</em> = <span class="la">wǣre</span>). In the following lines (258–285) Beowulf answers exactly as protocol requires: “We are of the race of the Geats and Hygelac’s hearth-companions. My father was … Ecgtheow.” He still does not give his own name.</p>
        <p>The coast-guard’s suspicion is reasonable within the poem’s world: the ship carries armour and shields, and his duty is to stop raiders (<span class="la">lāðra nǣnig mid scipherge</span>). A coast-watch is plausible for the period, but the poem is our only evidence for a Danish one in this form.</p>
      `
    },
    {
      title: 'Where is Heorot?',
      html: `
        <p>The poem places Hrothgar’s hall in Denmark but gives no usable geography. Since the 19th century it has been linked with Lejre on Zealand, the seat of the Scylding kings in later Danish tradition (Saxo Grammaticus, around 1200). Excavations at Lejre from 1986 onwards found a series of great halls, the oldest from the sixth century, which fits the poem’s setting remarkably well. That the poet knew Lejre, or that Heorot “is” Lejre, cannot be proved; the archaeology shows that halls like Heorot existed there, not that the story is history.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Louis_gurlitt_m%C3%B8ns_klint.jpg/960px-Louis_gurlitt_m%C3%B8ns_klint.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Louis_gurlitt_m%C3%B8ns_klint.jpg/500px-Louis_gurlitt_m%C3%B8ns_klint.jpg|https://upload.wikimedia.org/wikipedia/commons/1/1e/Louis_gurlitt_m%C3%B8ns_klint.jpg" alt="Painting of high white chalk cliffs above a calm sea"><figcaption>Louis Gurlitt, <em>Møns Klint</em> (19th century): the chalk cliffs of the Danish island of Møn. The poem gives no real geography; this is only a Danish coast of the kind the coast-guard might watch. <span class="credit">Painting, public domain · <a href="https://commons.wikimedia.org/wiki/File:Louis_gurlitt_m%C3%B8ns_klint.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Mood in English and German',
      html: `
        <p>English has almost lost the subjunctive: <em>if I were you</em>, <em>God save the King</em>, <em>be that as it may</em> and the American <em>I suggest that he go</em> are remnants. German has kept two sets, Konjunktiv I (from the present: <em>er sei, er habe</em>) and Konjunktiv II (from the past: <em>er wäre, er hätte, er käme</em>). Old English has the same two tenses of the subjunctive, but the endings are fewer: only <span class="la">-e</span> in the singular and <span class="la">-en</span> in the plural, for all persons.</p>
        <p>Because the endings are so reduced, the subjunctive is often identical with the indicative, especially in the plural (<span class="la">wǣron</span> and <span class="la">wǣren</span> fall together in later texts). Editors and grammarians therefore speak of “subjunctive in form” and “subjunctive in function”, and the two do not always agree.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Nǣfre ic māran geseah<br>eorla ofer eorþan, ðonne is ēower sum,<br>secg on searwum; nis þæt seldguma,<br>wǣpnum geweorðad, nǣfne him his wlite lēoge,<br>ǣnlīc ansȳn.</p>
    <p>“Never have I seen a greater man on earth than is one of you, the warrior in armour; that is no mere hall-sitter, honoured with weapons, unless his looks belie him, his peerless appearance.” <em>Beowulf</em> 247–251, after Klaeber, with length marks added for this course.</p>
    <p>The guard picks out Beowulf, still unnamed, from the fifteen. <span class="la">lēoge</span> is present subjunctive of <span class="la">lēogan</span> “lie” (German <em>lügen</em>), after <span class="la">nǣfne</span> “unless”. <span class="la">seldguma</span> occurs only here; “hall-man, house-retainer”, someone who sits at home, is the usual interpretation.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>Scildinga</strong>: <span class="la">sc</span> = German <em>sch</em>, and <span class="la">ng</span> as in German <em>Finger</em> (with the g sounded): <em>schil-din-ga</em>.</li>
      <li><strong>cwehte</strong>: <span class="la">h</span> before <span class="la">t</span> = German <em>ch</em> as in <em>echt</em>.</li>
      <li><strong>wicge</strong>: <span class="la">cg</span> = English <em>dg</em> in <em>bridge</em>, German <em>dsch</em>.</li>
      <li><strong>ēower, ēowre</strong>: diphthong ēo, then w: <em>ee-o-wer</em>.</li>
      <li><strong>hwanan</strong>: <span class="la">hw</span> is breathed, like a whispered w before the vowel.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. The forms of the subjunctive',
      html: `
        <p>Only two endings: <span class="la">-e</span> in the singular, <span class="la">-en</span> in the plural, for every person, in present and past.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Present subj.</th><th>Past subj.</th><th>German</th></tr></thead>
          <tbody>
            <tr><th>wesan</th><td class="la">sīe, sīen</td><td class="la">wǣre, wǣren</td><td>sei; wäre</td></tr>
            <tr><th>habban</th><td class="la">hæbbe, hæbben</td><td class="la">hæfde, hæfden</td><td>habe; hätte</td></tr>
            <tr><th>lufian</th><td class="la">lufie, lufien</td><td class="la">lufode, lufoden</td><td>liebe; liebte</td></tr>
            <tr><th>cuman</th><td class="la">cume, cumen</td><td class="la">cōme, cōmen</td><td>komme; käme</td></tr>
            <tr><th>findan</th><td class="la">finde, finden</td><td class="la">funde, funden</td><td>finde; fände (older fünde)</td></tr>
            <tr><th>hweorfan</th><td class="la">hweorfe</td><td class="la">hwurfe, hwurfen</td><td>(werben:) werbe; würbe</td></tr>
          </tbody>
        </table></div>
        <p>The key point: the <strong>past subjunctive of a strong verb takes the vowel of the past plural</strong>, not the past singular: <span class="la">hē wæs</span> but <span class="la">hē wǣre</span> (from <span class="la">wǣron</span>); <span class="la">hē fand</span> but <span class="la">hē funde</span> (from <span class="la">fundon</span>). German <em>würbe, stürbe, hülfe</em> preserve exactly this.</p>
        <p>Watch for the singular <span class="la">-e</span> where the indicative has none: <span class="la">hē wæs</span> (indicative) / <span class="la">hē wǣre</span> (subjunctive); <span class="la">hē lȳhð</span> / <span class="la">hē lēoge</span>.</p>
      `
    },
    {
      title: '2. The subjunctive in main clauses',
      html: `
        <p>Wishes, exhortations and indirect commands, as German <em>Gott sei Dank</em>, <em>es lebe der König</em>:</p>
        <ul>
          <li><span class="la">Gode ælmihtegum sīe ðonc</span>: “thanks be to almighty God” (Alfred’s Preface, Lecture VII).</li>
          <li><span class="la">Wesan wē blīþe!</span>: “let us be glad!”</li>
          <li><span class="la">God ūs helpe</span>: “God help us”.</li>
        </ul>
        <p>The imperative is used for direct commands: <span class="la">gehȳrað</span> “hear!” (255).</p>
      `
    },
    {
      title: '3. The subjunctive in subordinate clauses',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Clause</th><th>Example</th><th>Subjunctive?</th></tr></thead>
          <tbody>
            <tr><td>after <span class="la">ǣr</span> “before”</td><td class="la">ǣr hē on weg hwurfe (Beo 264)</td><td>regularly</td></tr>
            <tr><td>condition with <span class="la">nǣfne, būton</span> “unless”</td><td class="la">nǣfne him his wlite lēoge (250)</td><td>regularly</td></tr>
            <tr><td>concession with <span class="la">þēah</span> “though”</td><td class="la">þēah hē him lēof wǣre (203)</td><td>regularly</td></tr>
            <tr><td>“as if” with <span class="la">swelce</span></td><td class="la">Swelce hīe cwǣden (Alfred)</td><td>always</td></tr>
            <tr><td>purpose with <span class="la">þæt</span> “so that”</td><td class="la">þæt hē gesunde wǣre</td><td>regularly</td></tr>
            <tr><td>reported speech and questions</td><td class="la">hwæt þā men wǣron (233)</td><td>often, not always</td></tr>
            <tr><td>condition with <span class="la">gif</span> “if”</td><td class="la">gif hit is swā (272)</td><td>indicative for real conditions, subjunctive for unreal or doubtful ones</td></tr>
          </tbody>
        </table></div>
        <p>Reported speech is the closest German parallel: <em>Er fragte, wer sie seien</em>. In Old English, as in spoken German, the indicative is also possible, and in a plural form such as <span class="la">wǣron</span> (233) you often cannot tell the moods apart.</p>
      `
    },
    {
      title: '4. Subordinating conjunctions',
      html: `
        <p>A subordinate clause puts its verb at or near the end (Lecture VI), and the conjunction tells you what kind of clause it is:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Conjunction</th><th>Meaning</th><th>German</th></tr></thead>
          <tbody>
            <tr><td class="la">þæt, þætte</td><td>that; so that</td><td>dass</td></tr>
            <tr><td class="la">þā</td><td>when (past, single event)</td><td>als</td></tr>
            <tr><td class="la">þonne</td><td>when(ever); than</td><td>wenn; als (comparative)</td></tr>
            <tr><td class="la">ǣr, ǣr þǣm þe</td><td>before</td><td>ehe, bevor</td></tr>
            <tr><td class="la">oð þæt</td><td>until</td><td>bis</td></tr>
            <tr><td class="la">syððan</td><td>after, since</td><td>seitdem, nachdem</td></tr>
            <tr><td class="la">þēah (þe)</td><td>though</td><td>obwohl (older: doch)</td></tr>
            <tr><td class="la">gif</td><td>if</td><td>wenn, falls</td></tr>
            <tr><td class="la">nǣfne, būton</td><td>unless</td><td>wenn nicht, außer</td></tr>
            <tr><td class="la">for þǣm (þe)</td><td>because</td><td>weil (literally “für das”)</td></tr>
            <tr><td class="la">þǣr</td><td>where</td><td>wo (older: da)</td></tr>
            <tr><td class="la">swā</td><td>as, so that</td><td>so, wie</td></tr>
          </tbody>
        </table></div>
        <p>Many words serve as both adverb and conjunction (<span class="la">þā, þonne, þǣr, syððan, ǣr</span>); word order decides (Lecture VI). Correlative pairs are common: <span class="la">þā … þā</span> “when … then”; <span class="la">ǣr … ǣr</span>; <span class="la">ðȳ … ðȳ</span> “the more … the more” (Lecture VII).</p>
      `
    }
  ],

  vocab: [
    { id: 'weard', head: 'weard', la: 'weard, weardes', g: 'm', pos: 'noun, strong', en: 'guard, guardian, warden', note: 'German Wart (Torwart); English ward, warden.' },
    { id: 'rand', head: 'rand', la: 'rand, randes', g: 'm', pos: 'noun, strong', en: 'shield (boss or rim); shield', note: 'German Rand “edge”: the rim stands for the whole shield.' },
    { id: 'lind', head: 'lind', la: 'lind, linde', g: 'f', pos: 'noun, strong', en: 'lime tree; shield (of lime wood)', note: 'German Linde. lindhæbbende: shield-bearers.' },
    { id: 'searu', head: 'searu', la: 'searu, searwes', g: 'n', pos: 'noun, strong', en: 'skill, cunning; armour, gear', note: 'Common in compounds: gūðsearo, fyrdsearu. Middle High German sarwât “armour” is related.' },
    { id: 'wicg', head: 'wicg', la: 'wicg, wicges', g: 'n', pos: 'noun, strong', en: 'horse (poetic)', note: 'Verse only; prose has hors.' },
    { id: 'mund', head: 'mund', la: 'mund, munde', g: 'f', pos: 'noun, strong', en: 'hand; protection', note: 'German Vormund (guardian), Mündel. Not German Mund “mouth” (OE mūð).' },
    { id: 'wlite', head: 'wlite', la: 'wlite, wlites', g: 'm', pos: 'noun, strong', en: 'appearance, beauty, face', note: 'Related to German Antlitz.' },
    { id: 'cyme', head: 'cyme', la: 'cyme, cymes', g: 'm', pos: 'noun, strong', en: 'coming, arrival', note: 'From cuman; German Ankunft is a different formation.' },
    { id: 'ofost', head: 'ofost', la: 'ofost, ofoste', g: 'f', pos: 'noun, strong', en: 'haste, speed', note: 'ofostlīce: quickly.' },
    { id: 'laedan', head: 'lǣdan', la: 'lǣdan; lǣdde; gelǣded', pos: 'verb, weak (1)', en: 'lead, bring', note: 'German leiten.' },
    { id: 'leogan', head: 'lēogan', la: 'lēogan; lēag, lugon; logen', pos: 'verb, strong (II)', en: 'lie, tell lies; belie', note: 'German lügen, log. Not licgan “lie down” (German liegen).' },
    { id: 'cythan', head: 'cȳðan', la: 'cȳðan; cȳðde', pos: 'verb, weak (1)', en: 'make known, proclaim', note: 'From cūð “known”; German künden, verkünden.' },
    { id: 'hweorfan', head: 'hweorfan', la: 'hweorfan; hwearf, hwurfon; hworfen', pos: 'verb, strong (III)', en: 'turn, go, depart', note: 'German werben (originally “turn about”), Gewerbe; past subjunctive hwurfe.' },
    { id: 'andswarian', head: 'andswarian', la: 'andswarian; andswarode', pos: 'verb, weak (2)', en: 'answer', note: 'and- “against” + swerian “swear”; compare German Antwort (ant- + Wort).' },
    { id: 'cuth', head: 'cūð', la: 'cūð', pos: 'adjective', en: 'known, familiar', note: 'Past participle of cunnan; German kund; English uncouth.' },
    { id: 'aenlic', head: 'ǣnlīc', la: 'ǣnlīc', pos: 'adjective', en: 'peerless, unique; splendid', note: 'From ān “one”: “one of a kind”.' },
    { id: 'gif', head: 'gif', la: 'gif', pos: 'conjunction', en: 'if', note: 'Not related to giefan “give”; German ob is related.' },
    { id: 'theah', head: 'þēah', la: 'þēah, þēah þe', pos: 'conjunction, adverb', en: 'though, although; yet', note: 'German doch; English though. Takes the subjunctive.' },
    { id: 'naefne', head: 'nǣfne', la: 'nǣfne, nefne', pos: 'conjunction', en: 'unless, except', note: 'Takes the subjunctive. Prose prefers būton.' }
  ],

  grammarCards: [
    { id: 'oe9-endings', front: 'Subjunctive endings', back: 'sg. -e, pl. -en, all persons, present and past' },
    { id: 'oe9-wesan', front: 'wesan: subjunctive present / past', back: 'sīe, sīen; wǣre, wǣren (German sei, wäre)' },
    { id: 'oe9-strong', front: 'Past subjunctive of a strong verb: which stem?', back: 'The past plural: fundon → funde; hwurfon → hwurfe' },
    { id: 'oe9-was', front: 'hē wæs / hē wǣre', back: 'indicative / subjunctive (German er war / er wäre)' },
    { id: 'oe9-main', front: 'Subjunctive in main clauses', back: 'Wishes and exhortations: Gode sīe ðonc; wesan wē blīþe' },
    { id: 'oe9-aer', front: 'ǣr “before” takes …', back: 'the subjunctive: ǣr hē on weg hwurfe' },
    { id: 'oe9-unless', front: 'nǣfne, būton “unless” take …', back: 'the subjunctive: nǣfne him his wlite lēoge' },
    { id: 'oe9-theah', front: 'þēah “though” takes …', back: 'the subjunctive: þēah hē him lēof wǣre' },
    { id: 'oe9-gif', front: 'gif “if”', back: 'indicative for real conditions, subjunctive for unreal or doubtful ones' },
    { id: 'oe9-reported', front: 'Reported speech and indirect questions', back: 'often subjunctive (as German er fragte, wer sie seien), but not always' },
    { id: 'oe9-tha', front: 'þā / þonne as conjunctions', back: 'when (once, past) / when(ever); þonne also “than”' },
    { id: 'oe9-forthaem', front: 'for þǣm (þe)', back: 'because (also “therefore” as an adverb)' },
    { id: 'oe9-oth', front: 'oð þæt / syððan', back: 'until / after, since' },
    { id: 'oe9-seldguma', front: 'nis þæt seldguma … nǣfne him his wlite lēoge', back: 'that is no mere hall-sitter … unless his looks belie him (Beo 249–250)' },
    { id: 'oe9-hwanan', front: 'hwanan ēowre cyme syndon', back: 'where you have come from (literally “whence your comings are”) (Beo 257)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">hē wǣre</span> is:', options: ['past subjunctive', 'past indicative', 'present subjunctive', 'imperative'], answer: 0, explain: 'Indicative hē wæs; subjunctive hē wǣre.' },
    { id: 'e2', type: 'mc', prompt: 'The past subjunctive of <span class="la">findan</span> (fand, fundon) is:', options: ['funde', 'fande', 'finde', 'fundode'], answer: 0, explain: 'Stem of the past plural.' },
    { id: 'e3', type: 'mc', prompt: 'After <span class="la">ǣr</span> “before” the verb is usually:', options: ['subjunctive', 'indicative', 'imperative', 'an infinitive'], answer: 0, explain: 'ǣr hē on weg hwurfe.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">nǣfne</span> means:', options: ['unless', 'never', 'nor', 'nothing'], answer: 0, explain: 'nǣfne him his wlite lēoge.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Gode sīe ðonc</span> means:', options: ['Thanks be to God', 'God is thanked', 'God thanks him', 'Thank God?'], answer: 0, explain: 'Subjunctive of wish: German Gott sei Dank.' },
    { id: 'e6', type: 'mc', prompt: 'How many different subjunctive endings are there?', options: ['Two: -e and -en', 'Four', 'Six, as in Latin', 'None'], answer: 0, explain: 'Singular -e, plural -en.' },
    { id: 'e7', type: 'mc', prompt: 'What does the coast-guard demand?', options: ['To know their lineage before they go further', 'Their weapons', 'A toll', 'That they leave at once'], answer: 0, explain: 'Nū ic ēower sceal frumcyn witan.' },
    { id: 'e8', type: 'mc', prompt: 'What did the guard carry as he rode down?', options: ['A spear (mægenwudu)', 'A sword', 'A horn', 'A torch'], answer: 0, explain: 'þrymmum cwehte mægenwudu mundum.' },
    { id: 'e9', type: 'match', prompt: 'Match the conjunctions.', pairs: [
      ['ǣr', 'before'], ['oð þæt', 'until'], ['þēah', 'though'], ['nǣfne', 'unless'], ['for þǣm þe', 'because']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the Old English subjunctive to German.', pairs: [
      ['wǣre', 'wäre'], ['sīe', 'sei'], ['cōme', 'käme'], ['hæfde', 'hätte'], ['hwurfe', 'würbe']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">ǣr hē on weg hwurf___</span>', hint: 'before he went away (past subj. sg.)', answers: ['e'], full: 'ǣr hē on weg hwurfe', explain: 'Beowulf 264.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">þēah hē him lēof w___</span>', hint: 'though he was dear to them (past subj.)', answers: ['ǣre', 'ære', 'are'], full: 'þēah hē him lēof wǣre', explain: 'Beowulf 203.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Gode ælmihtegum ___ ðonc</span>', hint: 'thanks be (wesan, present subj.)', answers: ['sīe', 'sie', 'sī', 'si'], full: 'Gode ælmihtegum sīe ðonc', explain: 'Alfred’s Preface.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Hīe frugnon hwæt þā men w___.</span>', hint: 'they asked who the men were (past subj. pl.)', answers: ['ǣren', 'æren', 'aren'], full: 'Hīe frugnon hwæt þā men wǣren.', explain: 'Plural subjunctive -en.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give the past indicative and past subjunctive (3rd sg.).', headers: ['Indicative', 'Subjunctive'], rows: [
      { label: 'wesan', answers: ['wæs', 'wǣre'] },
      { label: 'cuman', answers: ['cōm|com', 'cōme|come'] },
      { label: 'findan', answers: ['fand', 'funde'] },
      { label: 'hweorfan', answers: ['hwearf', 'hwurfe'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Give the present subjunctive, singular and plural.', headers: ['Singular', 'Plural'], rows: [
      { label: 'wesan', answers: ['sīe|sie|sī', 'sīen|sien|sīn'] },
      { label: 'habban', answers: ['hæbbe', 'hæbben'] },
      { label: 'lufian', answers: ['lufie', 'lufien'] },
      { label: 'cuman', answers: ['cume', 'cumen'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the English translation in order.', source: 'ǣr gē fyr fēran', tokens: ['before', 'you', 'go', 'further'], explain: 'Beowulf 252–254; see the note on fēran in the reading.' },
    { id: 'e18', type: 'translate', dir: 'oe-en', source: 'Hē frægn hwanan hīe cōmen.', model: 'He asked where they came from.', accepted: ['he asked where they came from', 'he asked whence they came', 'he asked where they had come from', 'he asked from where they came'] },
    { id: 'e19', type: 'translate', dir: 'oe-en', source: 'God ūs helpe.', model: 'God help us.', accepted: ['god help us', 'may god help us', 'let god help us'] },
    { id: 'e20', type: 'translate', dir: 'en-oe', source: 'though he was (subjunctive)', model: 'þēah hē wǣre', accepted: ['þēah hē wǣre', 'þēah þe hē wǣre'] },
    { id: 'e21', type: 'translate', dir: 'en-oe', source: 'before he came (subjunctive)', model: 'ǣr hē cōme', accepted: ['ǣr hē cōme', 'ǣr þǣm þe hē cōme'] },
    { id: 'e22', type: 'mc', prompt: 'Which site has been linked with Heorot since the 19th century?', options: ['Lejre on Zealand', 'Uppsala', 'Sutton Hoo', 'Hedeby'], answer: 0, explain: 'Great halls from the 6th century have been excavated there.' },
    { id: 'e23', type: 'mc', prompt: 'Why can <span class="la">hwæt þā men wǣron</span> (233) not be classed securely as subjunctive?', options: ['The plural forms of the two moods often coincide', 'It is a main clause', 'wǣron is an infinitive', 'It is a scribal error'], answer: 0, explain: 'Subjunctive in function, ambiguous in form.' }
  ],

  reading: {
    title: 'Beowulf 229–257',
    note: 'Authentic text: Klaeber’s edition (1922), lines 229–257. The normalised view adds length marks for this course; “Klaeber, unmarked” shows the text as transcribed online, with one punctuation slip corrected in line 248 (see CONTENT-CHECKS). Tap any word.',
    diplomaticLabel: 'Klaeber, unmarked',
    diplomaticNote: 'Klaeber’s text as transcribed online, without length marks.',
    text: 'Ðā of wealle geseah weard Scildinga,\nsē þe holmclifu healdan scolde,\nberan ofer bolcan beorhte randas,\nfyrdsearu fūslicu; hine fyrwyt bræc\nmōdgehygdum, hwæt þā men wǣron.\nGewāt him þā tō waroðe wicge rīdan\nþegn Hrōðgāres, þrymmum cwehte\nmægenwudu mundum, meþelwordum frægn:\n“Hwæt syndon gē searohæbbendra,\nbyrnum werede, þe þus brontne cēol\nofer lagustrǣte lǣdan cwōmon,\nhider ofer holmas? Hwæt, ic hwīle wæs\nendesǣta, ǣgwearde hēold,\nþe on land Dena lāðra nǣnig\nmid scipherge sceðþan ne meahte.\nNō hēr cūðlīcor cuman ongunnon\nlindhæbbende, ne gē lēafnesword\ngūðfremmendra gearwe ne wisson,\nmāga gemēdu. Nǣfre ic māran geseah\neorla ofer eorþan, ðonne is ēower sum,\nsecg on searwum; nis þæt seldguma,\nwǣpnum geweorðad, nǣfne him his wlite lēoge,\nǣnlīc ansȳn. Nū ic ēower sceal\nfrumcyn witan, ǣr gē fyr heonan,\nlēasscēaweras, on land Dena\nfurþur fēran. Nū gē feorbūend,\nmerelīðende, mīnne gehȳrað\nānfealdne geþōht: ofost is sēlest\ntō gecȳðanne, hwanan ēowre cyme syndon.”',
    diplomatic: 'Ða of wealle geseah weard Scildinga,\nse þe holmclifu healdan scolde,\nberan ofer bolcan beorhte randas,\nfyrdsearu fuslicu; hine fyrwyt bræc\nmodgehygdum, hwæt þa men wæron.\nGewat him þa to waroðe wicge ridan\nþegn Hroðgares, þrymmum cwehte\nmægenwudu mundum, meþelwordum frægn:\n“Hwæt syndon ge searohæbbendra,\nbyrnum werede, þe þus brontne ceol\nofer lagustræte lædan cwomon,\nhider ofer holmas? Hwæt, ic hwile wæs\nendesæta, ægwearde heold,\nþe on land Dena laðra nænig\nmid scipherge sceðþan ne meahte.\nNo her cuðlicor cuman ongunnon\nlindhæbbende, ne ge leafnesword\nguðfremmendra gearwe ne wisson,\nmaga gemedu. Næfre ic maran geseah\neorla ofer eorþan, ðonne is eower sum,\nsecg on searwum; nis þæt seldguma,\nwæpnum geweorðad, næfne him his wlite leoge,\nænlic ansyn. Nu ic eower sceal\nfrumcyn witan, ær ge fyr heonan,\nleassceaweras, on land Dena\nfurþur feran. Nu ge feorbuend,\nmereliðende, minne gehyrað\nanfealdne geþoht: ofost is selest\nto gecyðanne, hwanan eowre cyme syndon.”',
    translations: [
      { label: 'English translation', text: 'Then from the cliff the guard of the Scyldings, whose duty was to watch the sea-cliffs, saw bright shields being carried over the gangway, armour ready for use; curiosity tormented him in his thoughts, who those men were. Then Hrothgar’s thegn went riding on his horse to the shore, shook the mighty spear powerfully in his hands, and asked with formal words: “What are you, armour-bearers, protected by mail-coats, who have come leading a tall ship thus over the sea-street, here over the waters? For a long time I have been the coast-guard, kept the sea-watch, so that no enemy could do harm in the land of the Danes with a fleet. Never have shield-bearers begun to come here more openly; nor did you know for certain the password of the warriors, the consent of kinsmen. Never have I seen a greater man on earth than is one of you, the warrior in armour; that is no hall-sitter, honoured with weapons, unless his looks belie him, his peerless appearance. Now I must know your lineage, before you go further from here into the land of the Danes as false spies. Now, you far-dwellers, seafarers, hear my plain thought: haste is best, to make known where you have come from.”' },
      { label: 'German translation', text: 'Da sah vom Steilhang der Wächter der Schildinge, der die Meeresklippen hüten sollte, helle Schilde über die Laufplanke tragen, kampfbereite Rüstung; Neugier quälte ihn in seinen Gedanken, wer die Männer wären. Da ritt Hrothgars Gefolgsmann zu Pferd ans Ufer, schüttelte kraftvoll den gewaltigen Speer in den Händen und fragte mit förmlichen Worten: „Was seid ihr für Gerüstete, in Panzerhemden geschützt, die ihr ein hohes Schiff so über die Meeresstraße hergeführt habt, hierher über die Fluten? Lange war ich der Grenzwächter, hielt die Seewache, damit kein Feind mit einer Flotte im Land der Dänen Schaden tun könnte. Nie haben Schildträger offener herzukommen begonnen; auch kanntet ihr das Losungswort der Krieger nicht gewiss, die Zustimmung der Verwandten. Nie sah ich einen größeren Mann auf Erden, als einer von euch ist, der Krieger in Rüstung; das ist kein Hallensitzer, mit Waffen geehrt, es sei denn, sein Aussehen trüge, seine einzigartige Gestalt. Nun muss ich eure Herkunft wissen, ehe ihr als falsche Späher weiter von hier ins Land der Dänen zieht. Nun, ihr Fernwohnenden, Seefahrer, hört meinen schlichten Gedanken: Eile ist das Beste, zu verkünden, woher ihr kommt.“' }
    ],
    notes: [
      { ref: 'Ðā of wealle geseah weard Scildinga … beran ofer bolcan beorhte randas', html: '<span class="la">geseah … beran</span>: “saw (them) carry” or “saw (shields) being carried”: an infinitive after a verb of seeing, as German <em>sah … tragen</em>. <span class="la">weall</span> is the cliff, not a built wall.' },
      { ref: 'hine fyrwyt bræc mōdgehygdum, hwæt þā men wǣron', html: 'Indirect question. <span class="la">wǣron</span> could be indicative or subjunctive; the poem’s manuscript does not distinguish <span class="la">-on</span> and <span class="la">-en</span> consistently.' },
      { ref: 'Gewāt him þā tō waroðe wicge rīdan', html: '<span class="la">gewītan</span> + infinitive: “set off riding”. <span class="la">him</span> is a reflexive dative, very common with verbs of motion; German has nothing exactly like it.' },
      { ref: 'Hwæt syndon gē searohæbbendra', html: '“What (kind) of armour-bearers are you?”: <span class="la">hwæt</span> + partitive genitive, like German <em>was für</em>.' },
      { ref: 'þe on land Dena lāðra nǣnig … sceðþan ne meahte', html: '<span class="la">þe</span> here means “so that”, a result clause. Double negative <span class="la">nǣnig … ne</span>: negatives reinforce each other, as in Bavarian <em>koana ned</em>.' },
      { ref: 'Nō hēr cūðlīcor cuman ongunnon lindhæbbende', html: 'Understatement and irony: no one ever landed “more openly”, i.e. so openly and so unannounced.' },
      { ref: 'ne gē lēafnesword … gearwe ne wisson, māga gemēdu', html: 'Variation: the password and the “consent of kinsmen” are the same thing, permission to land.' },
      { ref: 'nis þæt seldguma … nǣfne him his wlite lēoge', html: '<span class="la">lēoge</span>: present subjunctive of <span class="la">lēogan</span> after <span class="la">nǣfne</span> “unless”. <span class="la">seldguma</span>: found only here.' },
      { ref: 'ǣr gē fyr heonan … furþur fēran', html: 'After <span class="la">ǣr</span> we expect a subjunctive, and <span class="la">fēran</span> is probably just that: the plural <span class="la">fēren</span> spelt with <span class="la">-an</span>, as often in later Old English when unstressed vowels were merging. Some editors take it as an infinitive instead.' },
      { ref: 'ofost is sēlest tō gecȳðanne', html: '<span class="la">tō gecȳðanne</span>: the inflected infinitive after <span class="la">tō</span>, “to make known”, as German <em>zu verkünden</em>.' },
      { ref: 'hwanan ēowre cyme syndon', html: 'Indirect question with the indicative <span class="la">syndon</span>: the subjunctive is not obligatory.' }
    ],
    glosses: {
      'ansȳn': 'face, appearance', 'beorhte': 'bright (acc. pl.)', 'beran': 'carry (here: being carried; infinitive after geseah)', 'bolcan': 'gangway (dat. of bolca; meaning inferred)', 'brontne': 'steep, high (acc. m.; of a ship)', 'bræc': 'broke, tormented (pret. of brecan); hine fyrwyt bræc: curiosity seized him',
      'byrnum': 'with mail-coats (dat. pl. of byrne)', 'cuman': 'come (infinitive after ongunnon)', 'cwehte': 'shook, brandished (pret. of cweccan)', 'cwōmon': 'came (pret. pl. of cuman)', 'cyme': 'coming, arrival (nom. pl.); hwanan ēowre cyme syndon: where you come from', 'cēol': 'ship, keel',
      'cūðlīcor': 'more openly (comparative adverb of cūðlīce)', 'dena': 'of the Danes (gen. pl.)', 'endesǣta': 'coast-guard, one who sits at the edge', 'eorla': 'of men, of nobles (gen. pl. of eorl)', 'eorþan': 'earth (dat.)', 'feorbūend': 'far-dwellers (nom. pl.; address)',
      'frumcyn': 'origin, lineage (acc.)', 'frægn': 'asked (pret. of frignan)', 'furþur': 'further', 'fyr': 'further (comparative of feorr)', 'fyrdsearu': 'army-gear, armour (acc. pl.)', 'fyrwyt': 'curiosity (German Fürwitz, Vorwitz)',
      'fēran': 'travel, go', 'fūslicu': 'ready, eager-looking (acc. pl. n.)', 'gearwe': 'readily, clearly (adverb)', 'gecȳðanne': 'to make known (inflected infinitive of gecȳðan)', 'gehȳrað': 'hear (imperative pl.)', 'gemēdu': 'consent (acc. pl.)',
      'geseah': 'saw', 'geweorðad': 'honoured, adorned (past part. of geweorðian)', 'gewāt': 'went (pret. of gewītan); gewāt him: he betook himself', 'geþōht': 'thought (acc.)', 'gē': 'you (pl.)', 'gūðfremmendra': 'of warriors, of war-makers (gen. pl.)',
      'healdan': 'hold, guard', 'heonan': 'from here, hence', 'hider': 'hither, here', 'him': 'him; himself (dat.)', 'hine': 'him (acc.)', 'his': 'his',
      'holmas': 'seas (acc. pl. of holm)', 'holmclifu': 'sea-cliffs (acc. pl.)', 'hrōðgāres': 'Hrothgar’s', 'hwanan': 'whence, from where', 'hwæt': 'what; (as interjection) listen!', 'hwīle': 'for a time (acc. of hwīl)',
      'hēold': 'held, kept (pret. of healdan)', 'hēr': 'here', 'ic': 'I', 'is': 'is', 'lagustrǣte': 'sea-street (acc.)', 'land': 'land',
      'lindhæbbende': 'shield-bearers (nom. pl.)', 'lāðra': 'of enemies (gen. pl.)', 'lēafnesword': 'password, word of leave (acc.)', 'lēasscēaweras': 'spies (nom. pl.; address)', 'lēoge': '(should) belie (pres. subj. of lēogan)', 'lǣdan': 'lead, bring',
      'meahte': 'could (pret. of magan)', 'men': 'men (nom. pl.)', 'merelīðende': 'seafarers (nom. pl.; address)', 'meþelwordum': 'with formal words (dat. pl.)', 'mid': 'with', 'mundum': 'with his hands (dat. pl. of mund)',
      'mægenwudu': 'mighty wood, spear (acc.)', 'māga': 'of kinsmen (gen. pl. of mǣg)', 'māran': 'greater (weak acc.)', 'mīnne': 'my (acc. m.)', 'mōdgehygdum': 'in his thoughts (dat. pl.)', 'ne': 'not; nor',
      'nis': 'is not (ne is)', 'nō': 'not at all, never', 'nū': 'now', 'nǣfne': 'unless', 'nǣfre': 'never', 'nǣnig': 'none, no one',
      'of': 'from', 'ofer': 'over, across', 'ofost': 'haste', 'on': 'on, in, into', 'ongunnon': 'began (pret. pl. of onginnan)', 'randas': 'shields (acc. pl. of rand)',
      'rīdan': 'ride', 'sceal': 'must (pres. of sculan)', 'sceðþan': 'harm, injure', 'scildinga': 'of the Scyldings (gen. pl.)', 'scipherge': 'with a ship-army, a fleet (dat.)', 'scolde': 'had to (pret. of sculan)',
      'searohæbbendra': 'of armour-bearers (gen. pl.)', 'searwum': 'armour, war-gear (dat. pl.); on searwum: in armour', 'secg': 'man, warrior', 'seldguma': 'hall-retainer, man who just sits in a hall (a crux)', 'sum': 'one; ēower sum: one of you', 'syndon': 'are',
      'sē': 'he, that one', 'sēlest': 'best', 'tō': 'to', 'waroðe': 'shore (dat. of waroð)', 'wealle': 'wall, cliff (dat.)', 'weard': 'guard, warden',
      'werede': 'protected (past part. of werian, nom. pl.)', 'wicge': 'horse (dat. of wicg); wicge rīdan: ride on horseback', 'wisson': 'knew (pret. pl. of witan)', 'witan': 'know', 'wlite': 'appearance, beauty', 'wæs': 'was',
      'wǣpnum': 'with weapons (dat. pl.)', 'wǣron': 'were (pret. pl.; subjunctive or indicative)', 'ðonne': 'than', 'ðā': 'then', 'þe': 'who, which; (242) so that', 'þegn': 'thegn',
      'þrymmum': 'with force (dat. pl. of þrym)', 'þus': 'thus', 'þæt': 'that', 'þā': 'then; the (nom. pl.)', 'ānfealdne': 'simple, plain (acc. m.)', 'ēower': 'of you (gen. pl.); your',
      'ēowre': 'your (nom. pl.)', 'ǣgwearde': 'sea-watch (acc.)', 'ǣnlīc': 'peerless, matchless', 'ǣr': 'before (+ subj.)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'From where did the guard see the newcomers?', options: ['From the cliff', 'From a tower', 'From a ship', 'From Heorot'], answer: 0, explain: 'of wealle.' },
      { id: 'r2', type: 'mc', prompt: 'What did the guard notice about one of them?', options: ['He was greater than any man he had seen', 'He was wounded', 'He was very young', 'He carried no weapons'], answer: 0, explain: 'Nǣfre ic māran geseah eorla ofer eorþan.' },
      { id: 'r3', type: 'mc', prompt: 'What had the newcomers failed to give?', options: ['The password (lēafnesword)', 'Their weapons', 'Gold', 'Hostages'], answer: 0, explain: 'ne gē lēafnesword … gearwe ne wisson.' },
      { id: 'r4', type: 'mc', prompt: 'What does the guard call them, provisionally?', options: ['False spies (lēasscēaweras)', 'Friends', 'Kings', 'Monsters'], answer: 0, explain: 'Until they declare their lineage.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Past subjunctive of <span class="la">cuman</span>:', options: ['cōme', 'cōm', 'cume', 'cuman'], answer: 0, explain: 'German käme.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">þēah</span> takes:', options: ['the subjunctive', 'the indicative only', 'the genitive', 'an infinitive'], answer: 0, explain: 'þēah hē him lēof wǣre.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">gif hit is swā</span>: why indicative?', options: ['A real condition', 'A wish', 'Reported speech', 'An error'], answer: 0, explain: 'The speaker treats it as fact.' },
      { id: 't4', type: 'mc', prompt: '<span class="la">lēogan</span> means:', options: ['tell lies', 'lie down', 'loan', 'leave'], answer: 0, explain: 'German lügen; “lie down” is licgan.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Wesan wē blīþ___!</span>', hint: 'let us be glad (adj. pl.)', answers: ['e'], full: 'Wesan wē blīþe!', explain: 'Strong nom. pl. -e.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">ǣr hīe cōm___</span>', hint: 'before they came (past subj. pl.)', answers: ['en'], full: 'ǣr hīe cōmen', explain: 'Plural -en.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Se weard frægn hwæt hīe wǣren.', model: 'The guard asked who they were.', accepted: ['guard asked who they were', 'guard asked what they were', 'the guard asked who they were', 'the guard asked what they were', 'warden asked who they were'] },
      { id: 't8', type: 'translate', dir: 'en-oe', source: 'unless he lies (subjunctive)', model: 'nǣfne hē lēoge', accepted: ['nǣfne hē lēoge', 'būton hē lēoge'] },
      { id: 't9', type: 'mc', prompt: 'In the Hildebrandslied, <em>hwer sin fater wari</em> contains:', options: ['a subjunctive in an indirect question', 'an imperative', 'a kenning', 'a weak adjective'], answer: 0, explain: 'wari = wǣre.' },
      { id: 't10', type: 'mc', prompt: 'Who does the coast-guard serve?', options: ['Hrothgar', 'Hygelac', 'Beowulf', 'Grendel'], answer: 0, explain: 'þegn Hrōðgāres.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">for þǣm þe</span> means:', options: ['because', 'before', 'until', 'unless'], answer: 0, explain: 'German weil.' }
    ]
  },

  reference: [
    { title: 'Subjunctive forms', headers: ['Verb', 'Pres. sg./pl.', 'Past sg./pl.'], rows: [['wesan', 'sīe / sīen', 'wǣre / wǣren'], ['habban', 'hæbbe / hæbben', 'hæfde / hæfden'], ['lufian', 'lufie / lufien', 'lufode / lufoden'], ['cuman', 'cume / cumen', 'cōme / cōmen'], ['findan', 'finde / finden', 'funde / funden']] },
    { title: 'Clauses with the subjunctive', headers: ['Conjunction', 'Meaning', 'Mood'], rows: [['ǣr (þǣm þe)', 'before', 'subjunctive'], ['nǣfne, būton', 'unless', 'subjunctive'], ['þēah (þe)', 'though', 'subjunctive'], ['swelce', 'as if', 'subjunctive'], ['þæt', 'so that', 'subjunctive'], ['gif', 'if', 'indic. (real) / subj. (unreal)'], ['reported speech', '', 'often subjunctive']] },
    { title: 'Conjunctions', headers: ['Old English', 'English', 'German'], rows: [['þā', 'when', 'als'], ['þonne', 'whenever; than', 'wenn; als'], ['oð þæt', 'until', 'bis'], ['syððan', 'after, since', 'nachdem, seit'], ['for þǣm (þe)', 'because', 'weil'], ['þǣr', 'where', 'wo']] }
  ]
});
