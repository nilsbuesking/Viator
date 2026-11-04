/*
 * Old English — special lecture: The Battle of Maldon.
 * Text: Henry Sweet, An Anglo-Saxon Reader, 2nd edition (Oxford 1879), no. XIX, transcribed from page
 * images supplied by Nils (sources/oe-sweet-1879-maldon.txt); three passages (lines 25–61, 89–95,
 * 309–319). The normalised view converts Sweet's accents to macrons. See CONTENT-CHECKS.md.
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-s1',
  number: 101,
  special: true,
  title: 'The Battle of Maldon',
  subtitle: 'A defeat in Essex, 991: the poem, the battle, the tribute, and the debate about pride',
  minutes: 75,

  intro: `
    <p>On 10 or 11 August 991 a Viking army camped on an island in the estuary of the Blackwater, by Maldon in Essex. Byrhtnoth, ealdorman of Essex, an old and famous warrior, came out to meet it with the men of his household and the local levy. He allowed the Vikings to cross to the mainland so that the battle could be fought, and he was killed. Part of his army fled; his household fought on around his body.</p>
    <p>An unknown poet turned the defeat into one of the finest heroic poems in Old English. <em>The Battle of Maldon</em> is short (325 lines survive, without beginning or end), and it is unusual in two ways. It tells of a real, datable event, not a legendary past. And its manuscript no longer exists: it burnt in 1731, and the poem survives only because someone copied it a few years before.</p>
    <p>This special lecture gives an extended background: the Viking wars of Æthelred’s reign and the tribute paid after Maldon; Byrhtnoth himself; how the poem survived; when it may have been written; and the long debate about one word, <span class="la">ofermōd</span>, which decides whether Byrhtnoth is a hero or a man who threw away his army. The reading is three passages: the exchange between the Viking messenger and Byrhtnoth, the decision to let the Vikings cross, and the old retainer Byrhtwold’s last speech.</p>
    <p>You can do this lecture at any time after Lecture I, though it will be easier after Lecture V. It is not part of the “Continue” sequence.</p>
  `,

  background: [
    {
      title: '1. The Viking wars under Æthelred',
      html: `
        <p>After the wars of Alfred’s time and the reconquest of the Danelaw by his successors, England had a generation of relative peace from large Viking armies. Raids began again in the 980s, early in the reign of Æthelred II (978–1016), and grew into a war that lasted until the Danish conquest of 1016.</p>
        <p>The <em>Anglo-Saxon Chronicle</em> records Maldon briefly. The Peterborough and other versions say under 991 that Ipswich was raided and that soon afterwards Ealdorman Byrhtnoth was killed at Maldon; and that in that year it was decided for the first time to pay tribute to the Danes, 10,000 pounds, on the advice of Archbishop Sigeric. One version names the leader of the fleet as Olaf, often identified with Olaf Tryggvason, later king of Norway; the identification is plausible but not certain.</p>
        <p>The payments grew. The Chronicle records ever larger sums in the following decades, and the tax raised to pay them, later called the Danegeld, became a permanent feature of English government. Maldon thus stands at a turning point: the last great fight before the policy of buying peace. It matters for the poem, whose Viking messenger offers exactly that bargain, and whose Byrhtnoth refuses it.</p>
        <p>Æthelred’s nickname <em>Unræd</em>, “ill-counsel” (a pun on his name, “noble counsel”), is first recorded long after his death. The modern “the Unready” is a misunderstanding of it.</p>
      `
    },
    {
      title: '2. Byrhtnoth and the battlefield',
      html: `
        <p>Byrhtnoth (Old English <span class="la">Byrhtnōð</span>, “bright-bold”) had been ealdorman of Essex since the 950s, one of the great magnates of the kingdom and a generous patron of monasteries, above all Ely and Ramsey. The poem calls him <span class="la">hār hilderinc</span>, a grey-haired warrior, and he must have been in his sixties. He was buried at Ely. The Ely chronicle of the 12th century, the <em>Liber Eliensis</em>, says that the Vikings took his head and that the monks buried his body with a ball of wax in its place; it also expands the battle into a two-week struggle, a much later and elaborated account.</p>
        <p>The poem places the Vikings across a tidal channel, the <span class="la">Pante</span> (the old name of the Blackwater), reachable only by a narrow causeway at low tide. Most historians locate this at Northey Island, east of Maldon, whose causeway is still covered and uncovered by the tide; other sites have been proposed. If Northey is right, Byrhtnoth could have held the causeway indefinitely, and the Vikings would simply have sailed away to raid elsewhere. That is the situation in which he gave them passage.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Maldon,_causeway_to_Northey_Island_-_geograph.org.uk_-_3468231.jpg/960px-Maldon,_causeway_to_Northey_Island_-_geograph.org.uk_-_3468231.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Maldon,_causeway_to_Northey_Island_-_geograph.org.uk_-_3468231.jpg/500px-Maldon,_causeway_to_Northey_Island_-_geograph.org.uk_-_3468231.jpg|https://upload.wikimedia.org/wikipedia/commons/a/a4/Maldon,_causeway_to_Northey_Island_-_geograph.org.uk_-_3468231.jpg" alt="A tidal causeway across mudflats and water towards a low island"><figcaption>The causeway to Northey Island near Maldon, the most likely site of the battle. At high tide it is under water; the 10th-century channel was probably narrower. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Maldon,_causeway_to_Northey_Island_-_geograph.org.uk_-_3468231.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: '3. How the poem survived',
      html: `
        <p>The poem was in a manuscript of Sir Robert Cotton’s library, already without its first and last leaves. In 1731 the library caught fire at Ashburnham House in Westminster. The <em>Beowulf</em> manuscript was scorched; the <em>Maldon</em> manuscript was destroyed.</p>
        <p>The text survives because it had been copied around 1724, and the copy was printed by the antiquary Thomas Hearne in 1726. The transcript itself was later found in the Bodleian Library in Oxford. Who made it is disputed; John Elphinstone and David Casley are the main candidates. Every modern edition rests on this one 18th-century copy, made by someone who was not always sure how to read Old English letters. Some of the editors’ corrections, and some of the oddities you will meet in the text, go back to it.</p>
      `
    },
    {
      title: '4. When was it written, and is it history?',
      html: `
        <p>The poem names dozens of men, with their fathers and kin, and seems to know the ground and the tide. Some scholars, among them Edward Irving and John Niles, have argued that it was composed soon after the battle, for an audience that knew the men; Niles notes that it calls Æthelred lord with respect, before his reputation collapsed. Others, notably George Clark, argue that the detail does not require an early date, and that the language points to the 11th century and to the west of England rather than Essex.</p>
        <p>Even if it is early, the poem is not a report. Its speeches are literary: each retainer declares his loyalty in turn, and the scenes follow an old ideal. Tacitus wrote around AD 98 that among the Germanic peoples it was a lifelong disgrace to leave a battle alive after the leader had fallen (<em>Germania</em> 14). Whether such a code shaped real behaviour in 991, or whether the poet holds it up as an ideal against the realities of Æthelred’s England, is one of the central questions about the poem.</p>
      `
    },
    {
      title: '5. Ofermōd: hero or fool?',
      html: `
        <p>At line 89 the poet says that Byrhtnoth gave the Vikings too much land <span class="la">for his ofermōde</span>. <span class="la">ofer</span> + <span class="la">mōd</span> (“mind, spirit, courage”) could mean “great courage”, “high spirits”, “overconfidence” or “pride”. Which it means decides how the poem judges its hero.</p>
        <p>J. R. R. Tolkien, professor of Anglo-Saxon at Oxford, read it as a condemnation. In his essay and verse dialogue <em>The Homecoming of Beorhtnoth Beorhthelm’s Son</em> (1953) he argued that Byrhtnoth acted from chivalrous vanity, sacrificing his men to win honour, and that the poem’s heroism belongs to the loyal retainers, not their lord. Helmut Gneuss (1976) showed that elsewhere in Old English the word is consistently negative: it is used, for example, of Lucifer’s pride in the poem <em>Genesis</em>. Other scholars have argued that the poet’s attitude is admiring or at least ambiguous, and that letting the Vikings cross was the only way to stop them raiding elsewhere.</p>
        <p>The debate is not settled. Most readers now accept that <span class="la">ofermōd</span> carries blame, but disagree on how far that blame colours the whole poem, which otherwise praises Byrhtnoth warmly and gives him a dying prayer.</p>
      `
    },
    {
      title: '6. Reception',
      html: `
        <p>Byrhtwold’s speech (lines 312–319) has become one of the best-known passages of Old English, quoted as a statement of resolve in defeat. Tolkien’s dialogue brought the poem to a wide audience, and it is a staple of anthologies and university courses.</p>
        <p>Maldon remembers the battle: a memorial window in St Mary’s church shows Byrhtnoth’s dying prayer, an embroidery made for the millennium in 1991 shows the battle, and a bronze statue of Byrhtnoth by John Doubleday stands on the promenade by the Blackwater.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Byrhtnoth_statue.jpg/960px-Byrhtnoth_statue.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Byrhtnoth_statue.jpg/500px-Byrhtnoth_statue.jpg|https://upload.wikimedia.org/wikipedia/commons/2/2b/Byrhtnoth_statue.jpg" alt="Bronze statue of a warrior holding a raised sword, by an estuary"><figcaption>The statue of Byrhtnoth by John Doubleday on the promenade at Maldon, looking out over the Blackwater. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Byrhtnoth_statue.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Hyge sceal ðȳ heardra, heorte ðȳ cēnre,<br>mōd sceal ðȳ māre, ðȳ ūre mægen lytlað.</p>
    <p>“Mind must be the firmer, heart the bolder, courage the greater, as our strength grows less.” <em>The Battle of Maldon</em> 312–313, spoken by the old retainer Byrhtwold; text from Sweet’s Reader (1879), accents printed as macrons. Sweet prints <span class="la">hyge</span> and <span class="la">ðȳ</span> where the 18th-century transcript has <span class="la">hige</span> and <span class="la">þe</span> (his footnotes: “hige”, “þe four times”); many modern editions keep the transcript’s forms, <span class="la">Hige sceal þē heardra</span>.</p>
    <p>The construction is the same as German <em>je … desto</em> and English <em>the more … the better</em>: <span class="la">ðȳ</span> (also <span class="la">þē</span>) is the old instrumental of the article, “by that much”. English still uses it in <em>the sooner the better</em>. Note too the three nouns for the mind, <span class="la">hige, heorte, mōd</span>, and how <span class="la">mōd</span> here is clearly praise, only 220 lines after <span class="la">ofermōd</span>.</p>
  `,

  pronunciation: `
    <p>The poem follows the rules of Lecture I. Points to notice in these passages:</p>
    <ul>
      <li><strong>Late spellings.</strong> The text is late West Saxon as copied by an 18th-century hand. Sweet regularised many of the copy’s spellings and gives its forms in his footnotes: he prints <span class="la">gafol</span> where it has <span class="la">gofol</span>, <span class="la">scipe</span> for <span class="la">scype</span>, <span class="la">stent</span> for <span class="la">stynt</span>, <span class="la">hraðe</span> for <span class="la">raðe</span>. Some irregular forms remain, such as <span class="la">sceole gē</span> for <span class="la">sculon gē</span>. Unstressed endings had begun to merge, which is why <span class="la">-on</span> and <span class="la">-an</span> are often confused.</li>
      <li><strong>Byrhtnoð</strong>: <em>Bürcht-nooth</em>, with <em>ü</em> and German <em>ch</em>. The <span class="la">y</span> is German <em>ü</em>; <span class="la">-ht-</span> is <em>cht</em>, as in German <em>Licht</em>.</li>
      <li><strong>wīcing</strong>: <em>wiiking</em>, with long <em>i</em>; the <span class="la">c</span> stays <em>k</em> here.</li>
      <li><strong>Alliteration</strong> still carries the line: <span class="la">Hige … heardra … heorte</span>, <span class="la">mōd … māre … mægen</span>. Late Old English verse is metrically looser than <em>Beowulf</em>, but this poet keeps the classical rules closely.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. þē … þē: the more, the more',
      html: `
        <p>Old English expresses proportion with the instrumental of the article, <span class="la">þē</span> (also <span class="la">þȳ</span>), before a comparative in both clauses:</p>
        <p class="la">Hyge sceal ðȳ heardra … ðȳ ūre mægen lytlað.</p>
        <p>German uses <em>je … desto</em> or <em>je … umso</em>. English kept the Old English pattern in <em>the more, the merrier</em>, where <em>the</em> is not the article but this old instrumental.</p>
      `
    },
    {
      title: '2. Comparatives and superlatives',
      html: `
        <p>Comparatives end in <span class="la">-ra</span>, superlatives in <span class="la">-ost</span> or <span class="la">-est</span>, as in German <em>-er, -st</em>: <span class="la">heard, heardra</span> (härter); <span class="la">cēne, cēnre</span> (kühner); <span class="la">rīce, rīcost</span> (reichst-: <span class="la">þe hēr rīcost eart</span>, “who are most powerful here”). Some are irregular, as in German: <span class="la">micel, māra, mǣst</span> (viel, mehr, meist); <span class="la">gōd, betera, betst</span> (gut, besser, best).</p>
        <p>The comparative is always declined weak, so it ends in <span class="la">-a</span>, <span class="la">-an</span>: <span class="la">betere</span> in <span class="la">ēow betere is</span> is the neuter, “better for you”.</p>
      `
    },
    {
      title: '3. Speech formulas',
      html: `
        <p>Old English verse introduces speeches with set formulas, which Maldon uses as freely as <em>Beowulf</em>:</p>
        <ul>
          <li><span class="la">Byrhtnoð maþelode, bord hafenode</span>: “Byrhtnoth spoke, raised his shield”. <span class="la">maþelian</span>, “make a speech”, is a poetic word; compare Gothic <em>maþljan</em>.</li>
          <li><span class="la">wordum mǣlde</span>: “spoke with words”.</li>
          <li><span class="la">āgeaf him andsware</span>: “gave him answer”.</li>
        </ul>
        <p>The gesture with the shield or spear (<span class="la">æsc ācwehte</span>, “shook his ash-spear”) is part of the formula: the speaker is a warrior, and his words are a public commitment.</p>
      `
    },
    {
      title: '4. Negative contractions',
      html: `
        <p>The negative particle <span class="la">ne</span> fuses with some common verbs that begin with a vowel, <span class="la">h</span> or <span class="la">w</span>:</p>
        <ul>
          <li><span class="la">ne wolde</span> → <span class="la">nolde</span> (would not); <span class="la">ne wille</span> → <span class="la">nelle</span> (will not)</li>
          <li><span class="la">ne wæs</span> → <span class="la">næs</span> (was not); <span class="la">ne is</span> → <span class="la">nis</span></li>
          <li><span class="la">ne hæfde</span> → <span class="la">næfde</span>; <span class="la">ne wāt</span> → <span class="la">nāt</span> (does not know)</li>
        </ul>
        <p>The poem’s last surviving line begins <span class="la">Næs þæt nā se Godric</span>: “That was not the Godric (who fled)”. English <em>willy-nilly</em> preserves <em>will he, nill he</em>.</p>
      `
    },
    {
      title: '5. The language of tribute and peace',
      html: `
        <p>The Viking messenger’s speech is a business proposal, and its vocabulary is that of law and payment:</p>
        <ul>
          <li><span class="la">gafol</span>: tribute, tax (related to <span class="la">giefan</span>, give; German <em>Gabe</em>)</li>
          <li><span class="la">bēagas</span>: rings, i.e. treasure, payment</li>
          <li><span class="la">sceattas</span>: coins, money (German <em>Schatz</em>)</li>
          <li><span class="la">grið</span>: truce, protection; a loan from Old Norse <em>grið</em>, one of the early Norse loanwords</li>
          <li><span class="la">frið</span>: peace (German <em>Friede</em>)</li>
          <li><span class="la">on hyra sylfra dōm</span>: “at their own judgement”, on their own terms</li>
        </ul>
        <p>Byrhtnoth turns the vocabulary round: they will pay their <span class="la">gafol</span> in spears, <span class="la">ord and ecg</span>.</p>
      `
    }
  ],

  vocab: [
    { id: 'wicing', head: 'wīcing', la: 'wīcing', g: 'm', pos: 'noun', en: 'Viking, pirate', note: 'German Wikinger is a 19th-century borrowing from Scandinavian.' },
    { id: 'eorl', head: 'eorl', la: 'eorl', g: 'm', pos: 'noun', en: 'warrior, nobleman; (late OE) earl', note: 'In Maldon used of Byrhtnoth, an ealdorman: by now close to the title.' },
    { id: 'ealdor', head: 'ealdor', la: 'ealdor', g: 'm', pos: 'noun', en: 'lord, chief', note: 'From eald, old, as German Ältester.' },
    { id: 'hlaford', head: 'hlāford', la: 'hlāford', g: 'm', pos: 'noun', en: 'lord', note: 'hlāf-weard, “loaf-guardian”; hence lord.' },
    { id: 'thegn', head: 'þegn', la: 'þegn, þegen', g: 'm', pos: 'noun', en: 'retainer, thane, nobleman', note: 'German Degen (“warrior”, archaic).' },
    { id: 'geneat', head: 'genēat', la: 'genēat', g: 'm', pos: 'noun', en: 'companion, retainer', note: 'German Genosse is related (OHG ginōz).' },
    { id: 'gafol', head: 'gafol', la: 'gafol, gofol', g: 'n', pos: 'noun', en: 'tribute, tax', note: 'Related to giefan, give, and German Gabe.' },
    { id: 'sceatt', head: 'sceatt', la: 'sceatt', g: 'm', pos: 'noun', en: 'coin; money, treasure', note: 'German Schatz.' },
    { id: 'beag', head: 'bēag', la: 'bēag', g: 'm', pos: 'noun', en: 'ring, armlet; treasure', note: 'German Bauge (archaic), biegen: something bent.' },
    { id: 'frith', head: 'frið', la: 'frið', g: 'm', pos: 'noun', en: 'peace, protection', note: 'German Friede.' },
    { id: 'grith', head: 'grið', la: 'grið', g: 'n', pos: 'noun', en: 'truce, protection', note: 'An early loan from Old Norse.' },
    { id: 'gar', head: 'gār', la: 'gār', g: 'm', pos: 'noun', en: 'spear', note: 'As in Gār-Dene (Lecture I).' },
    { id: 'aesc', head: 'æsc', la: 'æsc', g: 'm', pos: 'noun', en: 'ash tree; ash-wood spear', note: 'German Esche.' },
    { id: 'ord', head: 'ord', la: 'ord', g: 'm', pos: 'noun', en: 'point (of a weapon); front, vanguard', note: 'German Ort, originally “point”.' },
    { id: 'ecg', head: 'ecg', la: 'ecg', g: 'f', pos: 'noun', en: 'edge, blade; sword', note: 'German Ecke. cg = dsch.' },
    { id: 'bord', head: 'bord', la: 'bord', g: 'n', pos: 'noun', en: 'board; shield', note: 'German Bord, Brett.' },
    { id: 'hige', head: 'hige', la: 'hige, hyge', g: 'm', pos: 'noun', en: 'mind, thought, courage' },
    { id: 'mod', head: 'mōd', la: 'mōd', g: 'n', pos: 'noun', en: 'mind, spirit, courage; pride', note: 'German Mut. ofermōd: overconfidence, pride (disputed).' },
    { id: 'maegen', head: 'mægen', la: 'mægen', g: 'n', pos: 'noun', en: 'strength, power; troop', note: 'German Macht is related, vermögen too.' },
    { id: 'ofermod', head: 'ofermōd', la: 'ofermōd', g: 'n', pos: 'noun', en: 'pride, overconfidence', note: 'See background section 5.' },
    { id: 'mathelian', head: 'maþelian', la: 'maþelian, maþelode', pos: 'verb, weak', en: 'make a speech, speak', note: 'Poetic. Related to German Mahl (in Gemahl) via mæþel, assembly.' },
    { id: 'syllan', head: 'syllan', la: 'syllan, sellan, sealde', pos: 'verb, weak', en: 'give', note: 'False friend: “give”, not only “sell”.' },
    { id: 'gangan', head: 'gangan', la: 'gangan, gēong, gangen', pos: 'verb, strong VII', en: 'go, walk', note: 'German gehen, Gang.' },
    { id: 'licgan', head: 'licgan', la: 'licgan, læg, lǣgon, gelegen', pos: 'verb, strong V', en: 'lie', note: 'German liegen. 3rd sg. lið.' },
    { id: 'frod', head: 'frōd', la: 'frōd', pos: 'adjective', en: 'old and wise, experienced', note: 'German fruot (MHG), “clever”.' },
    { id: 'cene', head: 'cēne', la: 'cēne', pos: 'adjective', en: 'bold, brave', note: 'German kühn; English keen.' },
    { id: 'heanlic', head: 'hēanlīc', la: 'hēanlīc', pos: 'adjective', en: 'shameful, humiliating', note: 'From hēan, lowly; German höhnen is related.' },
    { id: 'aer', head: 'ǣr', la: 'ǣr', pos: 'adverb; conjunction', en: 'before; formerly; ere', note: 'German eher, erst.' }
  ],

  grammarCards: [
    { id: 'md-date', front: 'The Battle of Maldon: date', back: '10 or 11 August 991' },
    { id: 'md-tribute', front: 'What did the Chronicle record after Maldon?', back: 'The first payment of tribute to the Danes, 10,000 pounds, on Archbishop Sigeric’s advice.' },
    { id: 'md-ms', front: 'How did the poem survive?', back: 'Manuscript burnt in 1731; text known from a transcript of c. 1724, printed by Hearne in 1726.' },
    { id: 'md-site', front: 'Where was the battle, probably?', back: 'At the causeway to Northey Island, in the Blackwater (Pante) estuary by Maldon.' },
    { id: 'md-ofermod', front: 'for his ofermōde (line 89)', back: 'Because of his pride/overconfidence: Byrhtnoth lets the Vikings cross. Tolkien (1953) and Gneuss (1976) read it as blame.' },
    { id: 'md-the', front: 'Hyge sceal ðȳ heardra … ðȳ ūre mægen lytlað', back: 'ðȳ … ðȳ (also þē … þē) = je … desto, the more … the more' },
    { id: 'md-the2', front: 'English “the sooner the better”: what is “the”?', back: 'The old instrumental þē/þȳ, not the article.' },
    { id: 'md-comp', front: 'Comparative and superlative endings', back: '-ra, -ost/-est: heard, heardra; rīce, rīcost' },
    { id: 'md-irr', front: 'micel and gōd: comparison', back: 'micel, māra, mǣst; gōd, betera, betst' },
    { id: 'md-nolde', front: 'nolde, nelle, næs', back: 'ne wolde, ne wille, ne wæs' },
    { id: 'md-grith', front: 'grið', back: 'truce: an early loanword from Old Norse' },
    { id: 'md-syllan', front: 'syllan means …', back: 'give (not only sell)' },
    { id: 'md-tacitus', front: 'Tacitus, Germania 14', back: 'Leaving a battle alive after one’s leader has fallen is a lifelong disgrace.' },
    { id: 'md-unraed', front: 'Æthelred Unræd', back: '“ill-counsel”, a pun on Æþel-rǣd, “noble counsel”; misread as “the Unready”.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'In which year was the Battle of Maldon fought?', options: ['991', '878', '1016', '1066'], answer: 0, explain: '10 or 11 August 991.' },
    { id: 'e2', type: 'mc', prompt: 'What happened in the same year, according to the Chronicle?', options: ['Tribute was paid to the Danes for the first time', 'Æthelred was deposed', 'Olaf Tryggvason was baptised in Maldon', 'The Danelaw was founded'], answer: 0, explain: '10,000 pounds, on the advice of Archbishop Sigeric.' },
    { id: 'e3', type: 'mc', prompt: 'Why do we have the text of the poem at all?', options: ['It was transcribed before the manuscript burnt in 1731', 'It survives in the Exeter Book', 'It was found at Ely', 'Hearne owned the manuscript'], answer: 0, explain: 'The transcript of c. 1724 was printed in 1726.' },
    { id: 'e4', type: 'mc', prompt: 'What does the Viking messenger demand?', options: ['Rings and treasure in exchange for peace', 'The surrender of Byrhtnoth', 'Land to settle', 'Hostages only'], answer: 0, explain: 'beagas wið gebeorge … grið fæstnian.' },
    { id: 'e5', type: 'mc', prompt: 'Byrhtnoth answers that the tribute will be paid in:', options: ['spears and old swords', 'silver', 'land', 'hostages'], answer: 0, explain: 'garas … ættrynne ord and ealde swurd.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">for his ofermōde</span> is usually understood as:', options: ['because of his pride or overconfidence', 'because of his great piety', 'because he was outnumbered', 'because of the tide'], answer: 0, explain: 'The precise force of ofermōd is debated; most now read it as blame.' },
    { id: 'e7', type: 'mc', prompt: '<span class="la">þē … þē</span> in Byrhtwold’s speech corresponds to German:', options: ['je … desto', 'weder … noch', 'sowohl … als auch', 'entweder … oder'], answer: 0, explain: 'The instrumental of the article before comparatives.' },
    { id: 'e8', type: 'mc', prompt: 'Who wrote <em>The Homecoming of Beorhtnoth Beorhthelm’s Son</em>?', options: ['J. R. R. Tolkien', 'Seamus Heaney', 'Thomas Hearne', 'Helmut Gneuss'], answer: 0, explain: 'Tolkien, 1953.' },
    { id: 'e9', type: 'match', prompt: 'Match the words to their German relatives.', pairs: [
      ['sceatt', 'Schatz'], ['frið', 'Friede'], ['æsc', 'Esche'], ['cēne', 'kühn'], ['mōd', 'Mut']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the contractions.', pairs: [
      ['nolde', 'ne wolde'], ['nelle', 'ne wille'], ['næs', 'ne wæs'], ['nāt', 'ne wāt']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Hyge sceal ðȳ heard___</span>', hint: 'harder (comparative)', answers: ['ra'], full: 'Hyge sceal ðȳ heardra', explain: 'Comparative -ra.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">þe hēr rīc___ eart</span>', hint: 'most powerful', answers: ['ost'], full: 'þe hēr rīcost eart', explain: 'Superlative -ost.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">God āna ___ hwā þǣre wælstōwe wealdan mōte.</span>', hint: 'knows', answers: ['wāt', 'wat'], full: 'God āna wāt …', explain: 'witan, wāt: German weiß.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Hēr ___ ūre ealdor eall forhēawen.</span>', hint: 'lies (licgan)', answers: ['lið', 'liþ'], full: 'Hēr lið ūre ealdor …', explain: '3rd sg. of licgan.' },
    { id: 'e15', type: 'order', prompt: 'Put the English translation in order.', source: 'Ic eom frōd fēores; fram ic ne wille', tokens: ['I am', 'old in years;', 'I will not', 'go away'], explain: 'frōd: old, wise; fram (gān), go from here.' },
    { id: 'e16', type: 'translate', dir: 'oe-en', source: 'Hēr lið ūre ealdor.', model: 'Here lies our lord.', accepted: ['here lies our lord', 'here lies our chief', 'our lord lies here', 'our chief lies here', 'here lies our leader', 'our leader lies here', 'here our lord lies'] },
    { id: 'e17', type: 'translate', dir: 'oe-en', source: 'Gehȳrst þū, sǣlida, hwæt þis folc segeð?', model: 'Do you hear, seafarer, what this people says?', accepted: ['do you hear seafarer what this people says', 'do you hear seaman what this people says', 'do you hear seafarer what these people say', 'do you hear sailor what this people says', 'do you hear sailor what these people say', 'hear you seafarer what this people says', 'do you hear seaman what these people say', 'do you hear viking what this people says'] },
    { id: 'e18', type: 'translate', dir: 'en-oe', source: 'God alone knows.', model: 'God āna wāt.', accepted: ['god āna wāt'] },
    { id: 'e19', type: 'mc', prompt: 'Tacitus, <em>Germania</em> 14, says it is a lifelong disgrace to:', options: ['leave a battle alive after one’s leader has fallen', 'pay tribute to an enemy', 'fight on a holy day', 'refuse a challenge'], answer: 0, explain: 'The ideal the retainers in the poem act out.' },
    { id: 'e20', type: 'mc', prompt: 'Æthelred’s nickname <em>Unræd</em> means:', options: ['ill-counsel (a pun on his name)', 'not ready', 'unread, illiterate', 'unlucky'], answer: 0, explain: 'Æþel-rǣd, “noble counsel”; Unrǣd, “no counsel”.' }
  ],

  reading: {
    title: 'The Battle of Maldon: three passages',
    note: 'Authentic text from Henry Sweet, An Anglo-Saxon Reader, 2nd edition (Oxford 1879), pp. 134–136 and 143–144, transcribed from page images supplied by Nils. Passages: lines 25–61, 89–95, 309–319. The normalised view turns Sweet’s accents into macrons and writes o, e for his ǫ, ę; length marks otherwise follow Sweet, who leaves a few unmarked that modern editions mark (stīðlīce, sē, lȳtlað). “As printed” shows Sweet’s page. Tap any word.',
    diplomaticLabel: 'As printed',
    diplomaticNote: 'Sweet’s text as printed in 1879: acute accents for long vowels (on the second letter of a diphthong: beót, eów), ǫ for o before nasals, ę for umlauted e, and both ð and þ.',
    text: '25–61\nÐā stōd on stæðe, stīðlice clipode\nwīcinga ār, wordum mǣlde,\nse on bēot ābēad brimlīðendra\nǣrende tō ðām eorle, ðǣr hē on ōfre stōd:\n“Mē sendon tō ðē sǣmenn snelle;\nhēton ðē secgan, ðæt ðū mōst sendan hraðe\nbēagas wið gebeorge; and ēow betere is\nðæt gē ðisne gārrǣs mid gafole forgyldon,\nðonne wē swā hearde hilde dǣlon.\nNe þurfe wē ūs spillan, gif gē spēdað tō ðām:\nwē willað wið ðām golde grið fæstnian.\nGif ðū ðæt gerǣdest, ðe hēr rīcost eart,\nðæt ðū ðīne lēoda lȳsan wille,\nsyllan sǣmannum on hyra sylfra dōm\nfeoh wið frēode, and niman frið æt ūs,\nwē willað mid ðām sceattum ūs tō scipe gangan,\non flot fēran, and ēow friðes healdan.”\nByrhtnōð maðelode, bord hafenode,\nwand wācne æsc, wordum mǣlde,\nyrre and ānrǣd, āgeaf him andsware:\n“Gehȳrst ðū, sǣlida, hwæt ðis folc segeð?\nhī willað ēow tō gafole gāras syllan,\nǣttrene ord and ealde swurd,\nðā heregeatu ðe ēow æt hilde ne dēah.\nBrimmanna boda, ābēod eft ongēan,\nsege ðīnum lēodum micle lāðre spell,\nðæt hēr stent unforcūð eorl mid his werode,\nðe wile geealgian ēðel ðysne,\nÆðelrǣdes eard, ealdres mīnes,\nfolc and foldan: feallan sceolon\nhǣðene æt hilde. Tō hēanlic mē þynceð\nðæt gē mid ūrum sceattum tō scipe gangon\nunbefohtene, nū gē ðus feor hider\non ūrne eard inn becōmon;\nne sceole gē swā sōfte sinc gegangan:\nūs sceal ord and ecg ǣr gesēman,\ngrimm gūðplega, ǣr wē gafol syllon.”\n\n89–95\nÐā se eorl ongann for his ofermōde\nālȳfan landes tō fela lāðere þēode.\nOngann ceallian ðā ofer eald wæter\nByrhthelmes bearn, (beornas gehlyston):\n“Nū ēow is gerȳmed, gāð ricene tō ūs,\nguman tō gūðe; God āna wāt,\nhwā ðǣre wælstōwe wealdan mōte.”\n\n309–319\nByrhtwold maðelode, bord hafenode,\nse wæs eald genēat, æsc ācwehte,\nhē full baldlice beornas lǣrde:\n“Hyge sceal ðȳ heardra, heorte ðȳ cēnre,\nmōd sceal ðȳ māre, ðȳ ūre mægen lytlað.\nhēr līð ūre ealdor eall forhēawen,\ngōd on grēote; ā mæg gnornian\nse ðe nū fram ðȳs wīgplegan wendan þenceð.\nIc eom frōd feores: fram ic ne wille,\nac ic be healfe mīnum hlāforde\nbe swā lēofum menn licgan þence.”',
    diplomatic: '25–61\nÐá stód ǫn stæðe, stíðlice clipode\nwícinga ár, wordum mǽlde,\nse ǫn beót ábeád brimlíðendra\nǽrende tó ðám eorle, ðǽr hé ǫn ófre stód:\n“Mé sęndon tó ðé sǽmęnn snelle;\nhéton ðé sęcgan, ðæt ðú móst sęndan hraðe\nbeágas wið gebeorge; and eów bętere is\nðæt gé ðisne gárrǽs mid gafole forgyldon,\nðǫnne wé swá hearde hilde dǽlon.\nNe þurfe wé ús spillan, gif gé spédað tó ðám:\nwé willað wið ðám golde grið fæstnian.\nGif ðú ðæt gerǽdest, ðe hér rícost eart,\nðæt ðú ðíne leóda lýsan wille,\nsyllan sǽmannum ǫn hyra sylfra dóm\nfeoh wið freóde, and niman frið æt ús,\nwé willað mid ðám sceattum ús tó scipe gangan,\nǫn flot féran, and eów friðes healdan.”\nByrhtnóð maðelode, bord hafenode,\nwand wácne æsc, wordum mǽlde,\nyrre and ánrǽd, ágeaf him andsware:\n“Gehýrst ðú, sǽlida, hwæt ðis folc sęgeð?\nhí willað eów tó gafole gáras syllan,\nǽttrene ord and ealde swurd,\nðá hęregeatu ðe eów æt hilde ne deáh.\nBrimmanna boda, ábeód ęft ǫngeán,\nsęge ðínum leódum micle láðre spell,\nðæt hér stęnt unforcúð eorl mid his werode,\nðe wile geealgian éðel ðysne,\nÆðelrǽdes eard, ealdres mínes,\nfolc and foldan: fęallan sceolon\nhǽðene æt hilde. Tó heánlic mé þynceð\nðæt gé mid úrum sceattum tó scipe gangon\nunbefohtene, nú gé ðus feor hider\nǫn úrne eard inn becómon;\nne sceole gé swá sófte sinc gegangan:\nús sceal ord and ęcg ǽr geséman,\ngrimm gúðplega, ǽr wé gafol syllon.”\n\n89–95\nÐá se eorl ǫngann for his ofermóde\nálýfan landes tó fela láðere þeóde.\nǪngann ceallian ðá ofer eald wæter\nByrhthelmes bearn, (beornas gehlyston):\n“Nú eów is gerýmed, gáð ricene tó ús,\nguman tó gúðe; God ána wát,\nhwá ðǽre wælstówe wealdan móte.”\n\n309–319\nByrhtwold maðelode, bord hafenode,\nse wæs eald geneát, æsc ácwęhte,\nhé full baldlice beornas lǽrde:\n“Hyge sceal ðý heardra, heorte ðý cénre,\nmód sceal ðý máre, ðý úre mægen lytlað.\nhér líð úre ealdor eall forheáwen,\ngód ǫn greóte; á mæg gnornian\nse ðe nú fram ðýs wígplegan węndan þęnceð.\nIc eom fród feores: fram ic ne wille,\nac ic be healfe mínum hláforde\nbe swá leófum męnn licgan þęnce.”',
    translations: [
      { label: 'English translation', text: '25–61: Then on the bank stood and called out fiercely the messenger of the Vikings; he spoke in words, he who threateningly announced the seafarers’ message to the earl, where he stood on the shore: “Bold seamen have sent me to you, ordered me to tell you that you must quickly send rings in exchange for protection; and it is better for you that you buy off this storm of spears with tribute than that we should share so hard a battle. We need not destroy each other, if you are rich enough for that; in return for the gold we will make a truce. If you, who are most powerful here, decide to ransom your people, to give the seamen on their own terms money in exchange for peace, and to take peace from us, we will go to our ships with the treasure, put out to sea, and keep peace with you.” Byrhtnoth spoke, raised his shield, brandished his slender ash-spear, spoke in words, angry and resolute he gave him answer: “Do you hear, seafarer, what this people says? They will give you spears as tribute, poisoned point and ancient swords, war-gear that will do you no good in battle. Messenger of the seamen, take back the message, tell your people a far more hateful tale: that here stands, with his troop, an earl of unblemished name, who means to defend this homeland, the land of Æthelred, my lord, people and ground. The heathens shall fall in battle. It seems to me too shameful that you should go to your ships with our treasure without a fight, now that you have come so far into our land. You shall not get treasure so easily: point and edge must first settle it between us, grim battle-play, before we pay tribute.”\n\n89–95: Then the earl, in his pride, began to allow too much land to the hateful people. Then the son of Byrhthelm began to call across the water (Sweet: “old water”; most editions: “cold water”) (the warriors listened): “Now the way is open for you; come quickly to us, men to battle. God alone knows who will hold the place of slaughter.”\n\n309–319: Byrhtwold spoke, raised his shield (he was an old retainer), shook his ash-spear; very boldly he exhorted the warriors: “Mind must be the firmer, heart the bolder, courage the greater, as our strength grows less. Here lies our lord, all hewn down, the good man in the dust. He who thinks to turn now from this war-play may mourn for ever. I am old in years; I will not go from here, but I mean to lie by the side of my lord, by so dear a man.”' },
      { label: 'German translation', text: '25–61: Da stand am Ufer und rief grimmig der Bote der Wikinger, sprach mit Worten; drohend verkündete er dem Grafen, wo er am Ufer stand, die Botschaft der Seefahrer: „Kühne Seeleute haben mich zu dir gesandt, hießen mich dir sagen, dass du schnell Ringe für Schutz senden musst; und es ist besser für euch, dass ihr diesen Speersturm mit Tribut abkauft, als dass wir so harten Kampf austeilen. Wir brauchen einander nicht zu verderben, wenn ihr reich genug dafür seid; für das Gold wollen wir einen Waffenstillstand schließen. Wenn du, der hier der Mächtigste ist, beschließt, deine Leute freizukaufen, den Seeleuten nach ihrem eigenen Urteil Geld für Frieden zu geben und von uns Frieden zu nehmen, wollen wir mit den Schätzen zu Schiff gehen, in See stechen und mit euch Frieden halten.“ Byrhtnoth sprach, hob den Schild, schwang den schlanken Eschenspeer, sprach mit Worten, zornig und entschlossen gab er ihm Antwort: „Hörst du, Seefahrer, was dieses Volk sagt? Sie wollen euch als Tribut Speere geben, giftige Spitze und alte Schwerter, Kriegsgerät, das euch im Kampf nicht taugt. Bote der Seeleute, melde zurück, sag deinen Leuten eine weit unliebsamere Nachricht: dass hier ein Graf von unbeflecktem Ruf mit seiner Schar steht, der diese Heimat verteidigen will, Æthelreds Land, meines Herrn, Volk und Boden. Fallen sollen die Heiden im Kampf. Zu schmählich scheint es mir, dass ihr mit unseren Schätzen ungekämpft zu Schiff geht, nun da ihr so weit hierher in unser Land gekommen seid. So sanft sollt ihr keinen Schatz erlangen: Spitze und Schneide sollen uns erst schlichten, grimmes Kampfspiel, ehe wir Tribut zahlen.“\n\n89–95: Da begann der Graf in seinem Übermut dem verhassten Volk zu viel Land zu überlassen. Da begann Byrhthelms Sohn über das Wasser zu rufen (bei Sweet „das alte Wasser“, in den meisten Ausgaben „das kalte Wasser“) (die Krieger horchten): „Nun ist euch Raum gegeben, kommt schnell zu uns, Männer zum Kampf. Gott allein weiß, wer die Walstatt behaupten wird.“\n\n309–319: Byrhtwold sprach, hob den Schild (er war ein alter Gefolgsmann), schüttelte den Eschenspeer; sehr kühn ermahnte er die Krieger: „Der Sinn soll umso härter, das Herz umso kühner, der Mut umso größer sein, je mehr unsere Kraft schwindet. Hier liegt unser Herr, ganz zerhauen, der Gute im Staub. Ewig mag klagen, wer jetzt von diesem Kampfspiel fortzugehen gedenkt. Ich bin alt an Jahren; fort will ich nicht, sondern ich gedenke an der Seite meines Herrn zu liegen, bei so liebem Mann.“' }
    ],
    notes: [
      { ref: 'wīcinga ār', html: 'The messenger of the Vikings. <span class="la">ār</span>: messenger (also <span class="la">ǣrende</span>, message: English <em>errand</em>). The origin of <span class="la">wīcing</span>, perhaps from <span class="la">wīc</span> “bay” or “trading place”, is disputed.' },
      { ref: 'bēagas wið gebeorge', html: '“rings in exchange for protection”: <span class="la">wið</span> + accusative or dative of exchange. Note the play on <span class="la">bēagas</span> and <span class="la">gebeorge</span>.' },
      { ref: 'ðæt gē ðisne gārrǣs mid gafole forgyldon', html: '<span class="la">gārrǣs</span>: “spear-rush”, attack. <span class="la">forgyldon</span>: subjunctive plural, “buy off”. The messenger’s offer is the logic of the tribute paid after Maldon.' },
      { ref: 'gif gē spēdað tō ðām', html: '“if you are rich enough for that” (<span class="la">spēdan</span>: prosper, have means). A sneer, or a businesslike condition.' },
      { ref: 'on hyra sylfra dōm', html: '“at their own judgement”: the Vikings set the price.' },
      { ref: 'Byrhtnōð maðelode, bord hafenode', html: 'The formula of a formal speech, with the gesture of the shield. The same formula introduces Byrhtwold at line 309: the poem frames itself with the lord’s defiance and the retainer’s last stand.' },
      { ref: 'hī willað ēow tō gafole gāras syllan', html: '<span class="la">tō gafole</span>: “as tribute” (dative of purpose). Byrhtnoth turns the messenger’s word against him.' },
      { ref: 'ǣttrene ord', html: '“poisonous point”, i.e. deadly; probably a figure of speech rather than literal poison. The exact form of the adjective is uncertain: the transcript has <span class="la">ættrynne</span>, which Sweet corrects to <span class="la">ǣttrene</span>.' },
      { ref: 'Æðelrǣdes eard, ealdres mīnes', html: 'Byrhtnoth fights for the land of his king, Æthelred.' },
      { ref: 'Tō hēanlic mē þynceð', html: '<span class="la">mē þinceð</span>: “it seems to me”, German <em>mich dünkt</em>, English archaic <em>methinks</em>. An impersonal verb with a dative.' },
      { ref: 'ūs sceal ord and ecg ǣr gesēman', html: '<span class="la">gesēman</span>: reconcile, settle a dispute: a legal word. Spear and sword are to be the arbitrators.' },
      { ref: 'for his ofermōde', html: 'The most discussed half-line in Old English. See background section 5.' },
      { ref: 'ālȳfan landes tō fela', html: '<span class="la">landes tō fela</span>: “too much of land”, genitive after <span class="la">fela</span>, as German <em>zu viel des Landes</em> in older style.' },
      { ref: 'ofer eald wæter Byrhthelmes bearn', html: 'Byrhtnoth, “son of Byrhthelm”, named by his father as heroes are in heroic verse. Sweet prints <span class="la">eald wæter</span>, “the old water”; most editions read <span class="la">cald wæter</span>, “the cold water”, from the transcript: <span class="la">c</span> and <span class="la">e</span> are easily confused in its hand.' },
      { ref: 'God āna wāt, / hwā ðǣre wælstōwe wealdan mōte', html: '“God alone knows who may control the place of slaughter”: to hold the battlefield was to win. <span class="la">mōte</span>: subjunctive of <span class="la">mōtan</span>, in an indirect question.' },
      { ref: 'Hyge sceal ðȳ heardra', html: 'See the source panel and grammar section 1. <span class="la">sceal</span>: “must, shall”, as in Lecture I.' },
      { ref: 'gōd on grēote', html: '“the good (man) in the dust”: <span class="la">grēot</span>, grit, earth. Some translate “a good man on the ground”.' },
      { ref: 'ac ic be healfe mīnum hlāforde', html: 'Sweet prints the line without <span class="la">mē</span>; the transcript and most modern editions read <span class="la">ac ic mē be healfe</span>, with a reflexive dative (“I mean for myself to lie …”). The sense is the same.' },
      { ref: 'Ic eom frōd feores', html: '“I am old in life”: <span class="la">feores</span> is the genitive of <span class="la">feorh</span>, life, “in respect of life”.' }
    ],
    glosses: {
      'clipode': 'called out (pret. of clipian)', 'ǣrende': 'message, errand', 'sǣmenn': 'seamen (nom. pl. of sǣmann)', 'hraðe': 'quickly',
      'ðonne': 'than; then', 'scipe': 'ship (dat. of scip)', 'ǣttrene': 'poisonous, deadly (acc. pl.)', 'micle': 'much (micle lāðre: far more hateful)',
      'stent': 'stands (3rd sg. of standan: steht)', 'geealgian': 'defend', 'æðelrǣdes': 'Æthelred’s (gen.)', 'þynceð': 'seems (mē þynceð: it seems to me, mich dünkt)',
      'inn': 'in (adverb)', 'grimm': 'grim, fierce', 'gafol': 'tribute (acc.)', 'ongann': 'began (pret. of onginnan)', 'byrhthelmes': 'Byrhthelm’s (gen.): Byrhtnoth’s father',
      'full': 'very; full', 'hyge': 'mind, courage (Sweet’s spelling of hige)', 'ðȳ': 'by that much: ðȳ … ðȳ, the more … the more (instr. of se)', 'ðȳs': 'this (instr. of þes)',
      'lēofum': 'dear (dat.)', 'menn': 'man (dat. of mann)', 'eald': 'old (Sweet’s reading; most editions cald, cold)',
      'þā': 'then; the (pl.); which', 'in': 'in, into', 'wæs': 'was', 'stōd': 'stood (pret. of standan)', 'on': 'on, in', 'stæðe': 'shore, bank (dat. of stæþ)', 'stīðlīce': 'fiercely, sternly', 'clypode': 'called out (pret. of clipian)',
      'wīcinga': 'of the Vikings (gen. pl.)', 'ār': 'messenger', 'wordum': 'with words (dat. pl. of word)', 'mǣlde': 'spoke (pret. of mǣlan)',
      'sē': 'he who; the (m.)', 'bēot': 'boast, threat: on bēot, threateningly', 'ābēad': 'announced (pret. of ābēodan)', 'brimlīþendra': 'of the seafarers (gen. pl.)',
      'ǣrænde': 'message, errand', 'tō': 'to; too', 'þām': 'the (dat.)', 'eorle': 'earl (dat.)', 'þǣr': 'where; there', 'hē': 'he', 'ōfre': 'bank, shore (dat. of ōfer)',
      'mē': 'me', 'sendon': 'sent (pret. pl. of sendan)', 'þē': 'you (dat./acc.); the (instr.): þē … þē, the more … the more', 'sǣmen': 'seamen (nom. pl. of sǣmann)', 'snelle': 'bold, quick (schnell)',
      'hēton': 'ordered (pret. pl. of hātan: heißen)', 'ðē': 'you (dat.)', 'secgan': 'say', 'þæt': 'that', 'þū': 'you', 'mōst': 'must (2nd sg. of mōtan)', 'sendan': 'send', 'raðe': 'quickly',
      'bēagas': 'rings, treasure (acc. pl. of bēag)', 'wið': 'in exchange for; against', 'gebeorge': 'protection (dat. of gebeorg: Bergung)', 'and': 'and', 'ēow': 'you (pl., dat./acc.: euch)', 'betere': 'better', 'is': 'is',
      'gē': 'you (pl.)', 'þisne': 'this (acc. m.)', 'gārrǣs': 'spear-rush, attack', 'mid': 'with', 'gafole': 'tribute (dat. of gafol)', 'forgyldon': 'should buy off (subj. pl. of forgyldan)',
      'þon': 'than', 'wē': 'we', 'swā': 'so, as', 'hearde': 'hard (acc.)', 'hilde': 'battle (acc./dat. of hild)', 'dǣlon': 'should share, deal out (subj. pl. of dǣlan)',
      'ne': 'not', 'þurfe': 'need (pl., before wē)', 'ūs': 'us; ourselves', 'spillan': 'destroy (spill)', 'gif': 'if', 'spēdaþ': 'are rich enough (pl. of spēdan)',
      'willað': 'want, will (pl. of willan)', 'golde': 'gold (dat.)', 'grið': 'truce (Old Norse loan)', 'fæstnian': 'make fast, conclude (festigen)',
      'gyf': 'if', 'þat': 'that (late spelling of þæt)', 'gerǣdest': 'decide (2nd sg. of gerǣdan)', 'þe': 'who, which; you (late spelling)', 'hēr': 'here', 'rīcost': 'most powerful (superlative of rīce)', 'eart': 'are (2nd sg.)',
      'þīne': 'your (acc. pl.)', 'lēoda': 'people (acc. pl. of lēod)', 'lȳsan': 'ransom, free (lösen)', 'wille': 'want (subj.)', 'syllan': 'give', 'sǣmannum': 'to the seamen (dat. pl.)',
      'hyra': 'their', 'sylfra': 'own (gen. pl. of self): on hyra sylfra dōm, on their own terms', 'dōm': 'judgement; glory (doom)', 'feoh': 'money, property (Vieh)', 'frēode': 'peace, friendship (dat. of frēod)', 'niman': 'take (nehmen)', 'frið': 'peace (Friede)', 'æt': 'from, at',
      'willaþ': 'want, will (pl.)', 'sceattum': 'treasure, coins (dat. pl. of sceatt: Schatz)', 'scype': 'ship (dat. of scip)', 'gangan': 'go (gehen)', 'flot': 'sea: on flot, afloat', 'fēran': 'travel (fahren)', 'friþes': 'peace (gen. of frið, object of healdan)', 'healdan': 'hold, keep',
      'byrhtnoð': 'Byrhtnoth, ealdorman of Essex', 'maþelode': 'spoke (made a speech)', 'bord': 'shield (Bord)', 'hafenode': 'raised (pret. of hafenian)',
      'wand': 'brandished (pret. of windan: winden)', 'wācne': 'slender (acc. of wāc: weak, pliant)', 'æsc': 'ash-spear (Esche)', 'yrre': 'angry (irre)', 'ānrǣd': 'resolute', 'āgeaf': 'gave (pret. of āgiefan)', 'him': 'him (dat.)', 'andsware': 'answer',
      'gehȳrst': 'do you hear (2nd sg. of gehȳran)', 'sǣlida': 'seafarer (voc.)', 'hwæt': 'what', 'þis': 'this', 'folc': 'people (Volk)', 'segeð': 'says',
      'hī': 'they', 'gāras': 'spears (acc. pl. of gār)', 'ættrynne': 'poisonous, deadly (acc.)', 'ord': 'point (Ort)', 'ealde': 'old (acc. pl.)', 'swurd': 'swords (acc. pl.)',
      'heregeatu': 'war-gear', 'dēah': 'avails, is of use (taugt)', 'brimmanna': 'of the seamen (gen. pl.)', 'boda': 'messenger (Bote)', 'ābēod': 'announce! (imperative)', 'eft': 'again, back', 'ongēan': 'back, in return (entgegen)',
      'sege': 'say! (imperative of secgan)', 'þīnum': 'your (dat. pl.)', 'lēodum': 'people (dat. pl.)', 'miccle': 'much (instr.: by much)', 'lāþre': 'more hateful (comparative of lāð: leid)', 'spell': 'message, story (Beispiel)',
      'stynt': 'stands (3rd sg. of standan)', 'unforcūð': 'of unblemished name, honourable', 'eorl': 'earl, nobleman', 'his': 'his', 'werode': 'troop (dat. of werod)',
      'wile': 'wants, will', 'gealgean': 'defend', 'ēþel': 'homeland, native land (OHG uodal)', 'þysne': 'this (acc. m.)', 'æþelrēdes': 'of Æthelred (king of England)', 'eard': 'land, country (Erde)', 'ealdres': 'of the lord (gen. of ealdor)', 'mīnes': 'my (gen.)',
      'foldan': 'earth, ground (acc.)', 'feallan': 'fall', 'sceolon': 'shall, must (pl.)', 'hǣþene': 'heathens', 'hēanlīc': 'shameful', 'þinceð': 'seems (dünkt)',
      'ūrum': 'our (dat. pl.)', 'gangon': 'should go (subj. pl.)', 'unbefohtene': 'without a fight', 'nū': 'now', 'þus': 'thus, so', 'feor': 'far', 'hider': 'hither', 'ūrne': 'our (acc.)', 'becōmon': 'came (pret. pl. of becuman)',
      'sceole': 'shall (pl., before gē)', 'sōfte': 'easily, softly (sanft)', 'sinc': 'treasure', 'gegangan': 'obtain, get', 'sceal': 'must, shall', 'ecg': 'edge, sword (Ecke)', 'ǣr': 'first, before', 'gesēman': 'reconcile, settle',
      'grim': 'grim', 'gūðplega': 'battle-play', 'gofol': 'tribute (= gafol)', 'syllon': 'should give, pay (subj. pl.)',
      'ðā': 'then', 'se': 'the (m.)', 'ongan': 'began (pret. of onginnan)', 'for': 'because of, for', 'ofermōde': 'pride, overconfidence (dat. of ofermōd)',
      'ālȳfan': 'allow, grant (erlauben)', 'landes': 'of land (gen.)', 'fela': 'much, many (viel)', 'lāþere': 'hateful (dat.)', 'ðēode': 'people (dat. of þēod)',
      'ceallian': 'call, shout', 'ofer': 'over, across', 'cald': 'cold', 'wæter': 'water', 'byrhtelmes': 'of Byrhthelm (Byrhtnoth’s father)', 'bearn': 'son, child (Barn)', 'beornas': 'warriors (nom. pl. of beorn)', 'gehlyston': 'listened (pret. pl. of gehlystan)',
      'gerȳmed': 'made room, opened (participle of rȳman: räumen)', 'gāð': 'go! (imperative pl.)', 'ricene': 'quickly', 'guman': 'men (nom. pl. of guma)', 'gūþe': 'battle (dat. of gūð)', 'god': 'God', 'āna': 'alone', 'wāt': 'knows (weiß)',
      'hwā': 'who', 'þǣre': 'the (gen. f.)', 'wælstōwe': 'place of slaughter (gen. of wælstōw: Walstatt)', 'wealdan': 'control, hold (+ gen.: walten)', 'mōte': 'may (subj. of mōtan)',
      'byrhtwold': 'Byrhtwold, an old retainer', 'eald': 'old', 'genēat': 'retainer, companion', 'ācwehte': 'shook (pret. of ācweccan)', 'ful': 'very (voll)', 'baldlīce': 'boldly', 'lǣrde': 'exhorted, taught (lehrte)',
      'hige': 'mind, courage', 'heardra': 'harder, firmer (comparative)', 'heorte': 'heart', 'cēnre': 'bolder (comparative of cēne: kühn)', 'mōd': 'courage, spirit (Mut)', 'māre': 'greater (mehr)', 'ūre': 'our', 'mægen': 'strength', 'lȳtlað': 'grows less (lȳtlian)',
      'lið': 'lies (3rd sg. of licgan)', 'ealdor': 'lord', 'eall': 'all, entirely', 'forhēawen': 'hewn down (participle of forhēawan)', 'gōd': 'good (man)', 'grēote': 'dust, earth (dat. of grēot: grit)',
      'ā': 'ever, always', 'mæg': 'may, can', 'gnornian': 'mourn', 'ðe': 'who', 'fram': 'from; away', 'wīgplegan': 'war-play (dat.)', 'wendan': 'turn (wenden)', 'þenceð': 'thinks, intends (denkt)',
      'ic': 'I', 'eom': 'am', 'frōd': 'old and wise', 'feores': 'in life (gen. of feorh)', 'ac': 'but', 'be': 'by', 'healfe': 'side (dat. of healf: Seite)', 'mīnum': 'my (dat.)', 'hlāforde': 'lord (dat.)',
      'lēofan': 'dear (lieb)', 'men': 'man (dat.)', 'licgan': 'lie (liegen)', 'þence': 'intend (1st sg. of þencan)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What does the messenger offer in return for treasure?', options: ['To leave in their ships and keep the peace', 'To convert to Christianity', 'To fight for Æthelred', 'To release prisoners'], answer: 0, explain: 'wē willaþ mid þām sceattum ūs tō scype gangan … and ēow friþes healdan.' },
      { id: 'r2', type: 'mc', prompt: 'Whose land does Byrhtnoth say he defends?', options: ['Æthelred’s, his lord’s', 'His own family’s', 'The Church’s', 'The Danes’'], answer: 0, explain: 'Æþelrēdes eard, ealdres mīnes.' },
      { id: 'r3', type: 'mc', prompt: 'Why, according to the poet, did Byrhtnoth let the Vikings cross?', options: ['Because of his ofermōd', 'Because the tide forced him', 'Because the king ordered it', 'Because he was wounded'], answer: 0, explain: 'for his ofermōde.' },
      { id: 'r4', type: 'mc', prompt: 'What does Byrhtwold resolve?', options: ['To lie dead beside his lord', 'To flee and fight another day', 'To negotiate with the Vikings', 'To carry the body home'], answer: 0, explain: 'ic mē be healfe mīnum hlāforde … licgan þence.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 3,
    items: [
      { id: 't1', type: 'mc', prompt: 'Byrhtnoth was:', options: ['ealdorman of Essex', 'king of Wessex', 'archbishop of Canterbury', 'a Viking leader'], answer: 0, explain: 'Ealdorman since the 950s.' },
      { id: 't2', type: 'mc', prompt: 'The manuscript of <em>Maldon</em>:', options: ['was destroyed in the Cotton fire of 1731', 'is in the British Library', 'is the Exeter Book', 'was found in 1930 at Ely'], answer: 0, explain: 'Only a transcript survives.' },
      { id: 't3', type: 'mc', prompt: 'The river called <span class="la">Pante</span> in the poem is now:', options: ['the Blackwater', 'the Thames', 'the Stour', 'the Colne'], answer: 0, explain: 'The Blackwater estuary at Maldon.' },
      { id: 't4', type: 'mc', prompt: 'Tolkien argued that <span class="la">ofermōd</span>:', options: ['condemns Byrhtnoth’s vanity', 'praises his courage', 'refers to the Vikings', 'is a scribal error'], answer: 0, explain: 'In The Homecoming of Beorhtnoth (1953).' },
      { id: 't5', type: 'gap', prompt: '<span class="la">mōd sceal þē mā___</span>', hint: 'greater', answers: ['re'], full: 'mōd sceal þē māre', explain: 'māre: irregular comparative of micel.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">Hē ___ fleogan.</span> (would not)', hint: 'ne wolde', answers: ['nolde'], full: 'Hē nolde fleogan.', explain: 'ne + wolde → nolde.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Ic eom frōd.', model: 'I am old (and wise).', accepted: ['i am old', 'i am wise', 'i am old and wise', 'i am experienced', 'i am aged'] },
      { id: 't8', type: 'mc', prompt: '<span class="la">mē þinceð</span> corresponds to German:', options: ['mich dünkt', 'ich denke', 'mir dankt', 'ich danke'], answer: 0, explain: 'Impersonal þyncan with dative; English methinks.' },
      { id: 't9', type: 'mc', prompt: 'The word <span class="la">grið</span> (truce) is:', options: ['a loan from Old Norse', 'a Latin loan', 'a French loan', 'a native West Saxon word'], answer: 0, explain: 'One of the early Norse loanwords.' },
      { id: 't10', type: 'mc', prompt: 'The Chronicle says tribute was paid on whose advice?', options: ['Archbishop Sigeric', 'Byrhtnoth', 'Olaf', 'Ælfric'], answer: 0, explain: 'Archbishop Sigeric of Canterbury.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">God āna wāt</span> means:', options: ['God alone knows', 'God alone waits', 'One god knows', 'God went alone'], answer: 0, explain: 'witan, wāt: German weiß.' }
    ]
  },

  reference: [
    { title: 'Maldon: key dates', headers: ['Date', 'Event'], rows: [
      ['978', 'Æthelred II king'], ['980s', 'Viking raids resume'], ['10/11 Aug. 991', 'Battle of Maldon; first tribute (10,000 pounds)'], ['1016', 'Cnut king of England'], ['c. 1724', 'Transcript of the poem'], ['1726', 'Printed by Thomas Hearne'], ['1731', 'Manuscript destroyed in the Cotton fire'], ['1953', 'Tolkien, The Homecoming of Beorhtnoth']
    ] },
    { title: 'Comparison of adjectives', headers: ['Positive', 'Comparative', 'Superlative', 'German'], rows: [
      ['heard', 'heardra', 'heardost', 'hart, härter, härtest'], ['rīce', 'rīcra', 'rīcost', 'reich'], ['micel', 'māra', 'mǣst', 'viel, mehr, meist'], ['gōd', 'betera', 'betst', 'gut, besser, best'], ['lȳtel', 'lǣssa', 'lǣst', 'klein (less, least)']
    ] },
    { title: 'Negative contractions', headers: ['Full', 'Contracted', 'Meaning'], rows: [
      ['ne wolde', 'nolde', 'would not'], ['ne wille', 'nelle', 'will not'], ['ne wæs', 'næs', 'was not'], ['ne is', 'nis', 'is not'], ['ne wāt', 'nāt', 'does not know'], ['ne hæfde', 'næfde', 'had not']
    ] }
  ]
});
