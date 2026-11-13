/*
 * Old English — Lecture I: sounds, spelling and the personal pronouns.
 * Reading: Beowulf 1–11, after Fr. Klaeber, Beowulf and The Fight at Finnsburg
 * (Boston: D. C. Heath, 1922), as transcribed online without length marks (supplied by Nils).
 * Macrons in the normalised text are added for this course. See CONTENT-CHECKS.md.
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-01',
  number: 1,
  title: 'Hwæt!',
  subtitle: 'Sounds and spelling; the four extra letters; the personal pronouns; Beowulf 1–11',
  minutes: 60,

  intro: `
    <p>Old English is the English of the Anglo-Saxons, from the settlements of the 5th century to the Norman Conquest and a little beyond. To an English reader it looks foreign: <span class="la">Hwæt, wē Gār-Dena in gēardagum þēodcyninga þrym gefrūnon</span>. To a German reader it looks oddly familiar, and with reason. Old English had four cases, three genders, strong and weak adjectives, strong verbs with vowel change, and the verb in second place in main clauses and at the end in subordinate ones. In grammar it is closer to modern German than to modern English.</p>
    <p>The vocabulary pulls the other way. Many words survive in English with changed sounds (<span class="la">hūs</span> “house”, <span class="la">cyning</span> “king”), and the spelling becomes readable once you know a few rules. So this course glosses in English but compares German throughout: German for the grammar and often the sounds, English for the words.</p>
    <p>This lecture covers the letters and sounds, including the four letters modern English has lost, and the personal pronouns, which are the first thing you need to read any text. Its reading is the most famous opening in English literature, the first eleven lines of <em>Beowulf</em>.</p>
    <p>By the end you should be able to pronounce Old English with reasonable confidence, recognise the personal pronouns in every case, and read <em>Beowulf</em> 1–11 with the help of the glosses.</p>
  `,

  background: [
    {
      title: 'Old English among the Germanic languages',
      html: `
        <p>Old English belongs to the West Germanic branch, with Old Saxon (the ancestor of Low German), Old Frisian, Old Dutch and Old High German. The settlers came from the coasts of the North Sea: Bede names Angles, Saxons and Jutes, from what is now Schleswig-Holstein, Lower Saxony and Jutland. Their closest relatives were the dialects of the German and Dutch North Sea coast, and Frisian in particular shares several sound changes with English.</p>
        <p>Like German, Old English was a group of dialects. Scholars distinguish Northumbrian, Mercian, Kentish and West Saxon. Most surviving texts are in West Saxon, because Wessex under Alfred and his successors became the leading kingdom, and in the late 10th century a standardised written West Saxon was used across England. Poetry, including <em>Beowulf</em>, was often copied in this standard but keeps forms from other dialects, a mixture sometimes called the poetic dialect.</p>
        <p>English and Low German never went through the High German consonant shift, which is why Old English <span class="la">tīd, wæter, scip, macian</span> look like Middle Low German <span class="la">tît, water, schip, maken</span> rather than High German <em>Zeit, Wasser, Schiff, machen</em>. If you know Low German (Plattdeutsch), much of the sound key carries over.</p>
      `
    },
    {
      title: 'Beowulf: one poem, one manuscript',
      html: `
        <p><em>Beowulf</em> is the longest Old English poem, 3,182 lines. It is set not in England but in southern Scandinavia, among Danes, Geats and Swedes of the 5th and 6th centuries. A Geatish hero, Beowulf, comes to the Danish king Hrothgar and kills the monster Grendel and then Grendel’s mother; fifty years later, as king of the Geats, he fights a dragon and dies.</p>
        <p>The poem survives in one manuscript, British Library, Cotton Vitellius A.xv, copied by two scribes around the year 1000. When it was composed is one of the great open questions of the field. Proposals range from the 8th century to the time of the manuscript itself, and the arguments, from language, metre, history and the poem’s attitude to the Danes, have not produced agreement.</p>
        <p>The manuscript was damaged in the fire that struck Sir Robert Cotton’s library in 1731, and its edges crumbled further in the following decades. Two transcripts made in 1787, one by a copyist working for the Icelandic scholar Grímur Jónsson Thorkelin and one by Thorkelin himself, preserve many letters that are now lost. Frederick Klaeber’s edition of 1922, the source of this lecture’s text, was the standard scholarly edition for most of the 20th century.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Beowulf_Cotton_MS_Vitellius_A_XV_f._132r.jpg/960px-Beowulf_Cotton_MS_Vitellius_A_XV_f._132r.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Beowulf_Cotton_MS_Vitellius_A_XV_f._132r.jpg/500px-Beowulf_Cotton_MS_Vitellius_A_XV_f._132r.jpg|https://upload.wikimedia.org/wikipedia/commons/c/c1/Beowulf_Cotton_MS_Vitellius_A_XV_f._132r.jpg" alt="Manuscript page in Anglo-Saxon script with damaged, darkened edges; the first line begins with large letters"><figcaption>The first page of <em>Beowulf</em>: British Library, Cotton Vitellius A.xv, fol. 132r, around 1000. The opening <span class="la">HWÆT WE GARDE…</span> is in large letters; the verse is written continuously like prose. The burnt and crumbled edges are the damage of 1731 and after. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Beowulf_Cotton_MS_Vitellius_A_XV_f._132r.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Runes and the Roman alphabet',
      html: `
        <p>Before the conversion, the Anglo-Saxons wrote, sparingly, in runes, the <em>futhorc</em>, an English development of the older Germanic runic alphabet. After 597 Christian missionaries brought the Roman alphabet, and Old English was written in it, with additions for sounds Latin did not have:</p>
        <ul>
          <li><span class="la">þ</span> (thorn) and <span class="la">ƿ</span> (wynn) were taken from the runes. Wynn is usually printed as <span class="la">w</span> in modern editions, including this course.</li>
          <li><span class="la">ð</span> (eth) is a Latin <em>d</em> with a stroke, probably from Irish scribal practice. Scribes used <span class="la">þ</span> and <span class="la">ð</span> interchangeably for both the voiceless sound (as in <em>thin</em>) and the voiced one (as in <em>this</em>).</li>
          <li><span class="la">æ</span> (ash, named after the rune) is a ligature of <em>a</em> and <em>e</em>.</li>
        </ul>
        <p>Thorn survived into Middle English; in late handwriting it came to look like a <em>y</em>, hence the mock-antique “ye olde”, where <em>ye</em> is simply <em>þe</em>, “the”. Icelandic still uses <span class="la">þ</span> and <span class="la">ð</span> today.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Franks_Casket_front_panel.jpg/960px-Franks_Casket_front_panel.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Franks_Casket_front_panel.jpg/500px-Franks_Casket_front_panel.jpg|https://upload.wikimedia.org/wikipedia/commons/c/c3/Franks_Casket_front_panel.jpg" alt="Carved whalebone panel with scenes and a border inscription in runes"><figcaption>The front panel of the Franks Casket, carved in whalebone in Northumbria in the early 8th century (British Museum). The border carries an Old English riddle-like inscription about the whale whose bone the casket is made of, in runes. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Franks_Casket_front_panel.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Hwæt, wē Gār-Dena in gēardagum,<br>þēodcyninga þrym gefrūnon,<br>hū ðā æþelingas ellen fremedon!</p>
    <p>“Listen! We have heard of the glory of the Spear-Danes in days of old, of the kings of the people, how those princes did deeds of courage.” <em>Beowulf</em> 1–3, in Klaeber’s edition, with length marks added for this course.</p>
    <p>The poem begins with <span class="la">wē</span>: the poet and his audience share a tradition, things “we have heard”. Each line has two halves, joined by alliteration: <span class="la">Gār-Dena</span> and <span class="la">gēardagum</span> share the <span class="la">g</span>; <span class="la">þēodcyninga</span> and <span class="la">þrym</span> the <span class="la">þ</span>; <span class="la">æþelingas</span> and <span class="la">ellen</span> a vowel (all vowels alliterate with each other). Verse form is the subject of Lecture VIII.</p>
  `,

  pronunciation: `
    <p>Old English pronunciation is reconstructed from spelling, metre, later developments and comparison with the other Germanic languages. The broad picture is secure; details, especially of the diphthongs, are debated. The good news for a German speaker: Old English came before the Great Vowel Shift, so its vowels sound much as German vowels do. English habits are the danger.</p>
    <h3>Vowels</h3>
    <ul>
      <li><span class="la">a, e, i, o, u</span> as in German: <span class="la">God</span> has the short <em>o</em> of German <em>Gott</em>, <span class="la">gōd</span> the long <em>o</em> of <em>Boot</em>.</li>
      <li>Long vowels (marked with a macron in this course) are simply longer: <span class="la">hūs</span> like Low German <em>Huus</em>, not English <em>house</em>; <span class="la">wīn</span> like <em>Wien</em>, not English <em>wine</em>.</li>
      <li><span class="la">y</span> is German <em>ü</em>: <span class="la">cyning</span> “küning”, <span class="la">hȳran</span> “hüüran”.</li>
      <li><span class="la">æ</span> is an open front vowel between German <em>a</em> and <em>ä</em>, like the vowel of <em>cat</em> in traditional southern English: <span class="la">þæt</span>, long in <span class="la">ǣrest</span>.</li>
      <li><span class="la">ea, eo</span> (short and long <span class="la">ēa, ēo</span>) are diphthongs with the stress on the first element: <span class="la">ēa</span> roughly <em>ä-a</em>, <span class="la">ēo</span> roughly <em>e-o</em>. Their exact value, especially of the short ones, is debated.</li>
    </ul>
    <h3>Consonants</h3>
    <ul>
      <li><span class="la">c</span> is <em>k</em>, but before or after front vowels (<em>i, e, æ, y</em>) usually <em>tsch</em>: <span class="la">cild</span> “tschild” (child, German <em>Kind</em>), <span class="la">cirice</span> (church, <em>Kirche</em>). Some editions put a dot over this <span class="la">ċ</span>.</li>
      <li><span class="la">g</span> is <em>g</em>, but next to front vowels usually <em>j</em>: <span class="la">gēar</span> “jäar” (year, <em>Jahr</em>), <span class="la">dæg</span> “däj” (day, <em>Tag</em>). Between back vowels it is a fricative, like North German <em>g</em> in <em>Tage</em>: <span class="la">dagas</span>. Some editions write <span class="la">ġ</span> for the <em>j</em> sound.</li>
      <li><span class="la">sc</span> is <em>sch</em>: <span class="la">scip</span> (ship, <em>Schiff</em>), <span class="la">Scyld</span> “Schüld”.</li>
      <li><span class="la">cg</span> is <em>dsch</em>: <span class="la">ecg</span> (edge, <em>Ecke</em>).</li>
      <li><span class="la">h</span> at the start is <em>h</em>, elsewhere <em>ch</em> as in German: <span class="la">niht</span> (night, <em>Nacht</em>), <span class="la">hēah</span> (high, <em>hoch</em>). <span class="la">hw, hl, hr, hn</span> at the start of a word have a breathed <em>h</em> before the consonant: <span class="la">hwæt</span>, <span class="la">hring</span>.</li>
      <li><span class="la">f, s, þ/ð</span> are voiceless at the start and end of a word, voiced between vowels: <span class="la">wulfas</span> with <em>v</em>, <span class="la">rīsan</span> with <em>z</em>.</li>
      <li><span class="la">r</span> was probably rolled or trilled. Double consonants are long, as in Italian: <span class="la">ellen</span> is <em>el-len</em>.</li>
    </ul>
    <h3>Stress</h3>
    <p>As in German, on the first syllable of the root. Prefixes like <span class="la">ge-, be-, for-, of-</span> are unstressed in verbs: <span class="la">ge-FRŪ-non</span>, <span class="la">of-TĒAH</span>. The metre of the verse depends on this.</p>
  `,

  grammar: [
    {
      title: '1. A German-shaped grammar',
      html: `
        <p>Before the details, the overall shape. Five features of Old English will look familiar from German:</p>
        <ul>
          <li><strong>Four cases</strong>: nominative, accusative, genitive, dative (with traces of a fifth, the instrumental). In the first line: <span class="la">Gār-Dena</span> is genitive plural (“of the Spear-Danes”), <span class="la">gēardagum</span> dative plural after <span class="la">in</span>. The dative plural ending <span class="la">-um</span> is the ancestor of German <em>-en</em> in <em>in alten Tagen</em>.</li>
          <li><strong>Three genders</strong>, as arbitrary as in German: <span class="la">se mōna</span> (m., the moon), <span class="la">sēo sunne</span> (f., the sun), <span class="la">þæt wīf</span> (n., the woman), just like <em>der Mond, die Sonne, das Weib</em>.</li>
          <li><strong>Strong and weak adjectives</strong>, as in <em>guter Wein</em> but <em>der gute Wein</em>.</li>
          <li><strong>Strong and weak verbs</strong>: <span class="la">findan, fand</span> but <span class="la">hȳran, hȳrde</span>.</li>
          <li><strong>Word order</strong>: the verb often second in main clauses (<span class="la">þæt wæs gōd cyning</span>) and last in subordinate clauses (<span class="la">hū ðā æþelingas ellen fremedon</span>, “wie die Edlen Mut bewiesen”). In verse the order is freer.</li>
        </ul>
        <p>English lost most of this between about 1100 and 1400. For a German reader, the task is less learning a new system than recognising a familiar one in unfamiliar words.</p>
      `
    },
    {
      title: '2. The personal pronouns: first and second person',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>I</th><th>we</th><th>you (sg.)</th><th>you (pl.)</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">ic</td><td class="la">wē</td><td class="la">þū</td><td class="la">gē</td></tr>
            <tr><th>Acc.</th><td class="la">mē (mec)</td><td class="la">ūs</td><td class="la">þē (þec)</td><td class="la">ēow</td></tr>
            <tr><th>Gen.</th><td class="la">mīn</td><td class="la">ūre</td><td class="la">þīn</td><td class="la">ēower</td></tr>
            <tr><th>Dat.</th><td class="la">mē</td><td class="la">ūs</td><td class="la">þē</td><td class="la">ēow</td></tr>
          </tbody>
        </table></div>
        <p>Compare German <em>ich, mich, mein(er), mir</em> and <em>du, dich, dein(er), dir</em>. Old English had already merged the accusative and dative in most forms (<span class="la">mē</span> for both <em>mich</em> and <em>mir</em>); the older accusatives <span class="la">mec, þec</span> appear in poetry. <span class="la">gē</span> is the ancestor of English <em>ye</em>; <span class="la">ēow</span> of <em>you</em>.</p>
        <p>Old English also had a <strong>dual</strong>, “we two” and “you two”: <span class="la">wit, unc, uncer, unc</span> and <span class="la">git, inc, incer, inc</span>. It is rare in prose but appears in poetry. Bavarian <em>es</em> and <em>enk</em> (“ihr, euch”) go back to the old dual.</p>
      `
    },
    {
      title: '3. The personal pronouns: third person',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>he</th><th>she</th><th>it</th><th>they</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">hē</td><td class="la">hēo</td><td class="la">hit</td><td class="la">hīe</td></tr>
            <tr><th>Acc.</th><td class="la">hine</td><td class="la">hīe</td><td class="la">hit</td><td class="la">hīe</td></tr>
            <tr><th>Gen.</th><td class="la">his</td><td class="la">hire</td><td class="la">his</td><td class="la">hira, heora</td></tr>
            <tr><th>Dat.</th><td class="la">him</td><td class="la">hire</td><td class="la">him</td><td class="la">him</td></tr>
          </tbody>
        </table></div>
        <p>The forms begin with <span class="la">h-</span>, unlike German <em>er, sie, es</em>, but the endings match: <span class="la">hine</span> ~ <em>ihn</em>, <span class="la">him</span> ~ <em>ihm</em>, <span class="la">hit</span> ~ <em>es</em> (older <em>ez</em>). Two traps:</p>
        <ul>
          <li><span class="la">him</span> is dative singular (“to him, to it”) and also dative plural (“to them”). Only the context decides.</li>
          <li><span class="la">hīe</span> can be “she” (acc.) or “they” (nom., acc.). Spellings vary: <span class="la">hī, hȳ, hie, heo</span> all occur.</li>
        </ul>
        <p>Modern English <em>they, them, their</em> are not from these forms but loans from Old Norse, which replaced <span class="la">hīe, him, hira</span> in Middle English, starting in the Danelaw. <em>Him</em> survived only in the singular.</p>
      `
    },
    {
      title: '4. The genitive as possessive',
      html: `
        <p>Old English has no separate set of possessive words for “my, your, his”: it uses the genitive of the personal pronoun. In the first and second persons, <span class="la">mīn, þīn, ūre, ēower</span> also decline like adjectives when they mean “my, your, our” (<span class="la">mīnum frēondum</span>, “to my friends”), just as German <em>mein</em> declines. <span class="la">his, hire, hira</span> do not decline: they are simply genitives, “of him, of her, of them”.</p>
        <p>So <span class="la">his scip</span> is literally “the ship of him”, which is why it never changes, whatever case <span class="la">scip</span> is in. German <em>sein Schiff, seines Schiffes</em> works differently, because <em>sein</em> became an adjective.</p>
      `
    },
    {
      title: '5. Hwæt',
      html: `
        <p><span class="la">hwæt</span> is the neuter of the interrogative pronoun, “what” (German <em>was</em>). At the start of a poem it has traditionally been read as an interjection calling for attention: “Listen!”, “Lo!”, “So!”. Seamus Heaney’s translation (1999) famously renders it “So.”</p>
        <p>Not everyone accepts the interjection. George Walkden (2013) argued from Old English syntax that <span class="la">hwæt</span> belongs to the clause and works as an exclamative, like German <em>was</em> in <em>Was haben wir nicht alles gehört!</em>: “How we have heard of the glory of the Spear-Danes!” Both readings have defenders; the punctuation of editions, which put a comma or an exclamation mark after <span class="la">Hwæt</span>, is a modern choice.</p>
      `
    },
    {
      title: '6. From Old English to modern English',
      html: `
        <p>Many Old English words survive, but disguised by sound change. Three big changes account for most of it:</p>
        <ul>
          <li><strong>The Great Vowel Shift</strong> (c. 1400–1700) raised and diphthongised the long vowels: <span class="la">hūs</span> → house, <span class="la">wīf</span> → wife, <span class="la">gōd</span> → good, <span class="la">fēt</span> → feet. This is why English spelling, fixed before the shift ended, matches German vowel values better than English ones.</li>
          <li><strong>Palatalisation</strong> happened in Old English itself, before the earliest texts: next to front vowels <em>k</em> became <em>tsch</em>, <em>sk</em> became <em>sch</em> and <em>g</em> became <em>j</em>, so <span class="la">cild</span> is <em>child</em>, <span class="la">scip</span> <em>ship</em>, <span class="la">dæg</span> <em>day</em>. <span class="la">cyning</span> kept its <em>k</em> because its <span class="la">y</span> was still a <em>u</em> at the time (Lecture III). German kept <em>k</em> and <em>g</em> in <em>Kind</em> and <em>Tag</em>; it changed <em>sk</em> to <em>sch</em> too, but centuries later (Old High German <em>skif</em>, Middle High German <em>schif</em>). In <span class="la">gēar</span> “year” nothing changed: the <span class="la">g</span> only spells the old <em>j</em> sound that German keeps in <em>Jahr</em>.</li>
          <li><strong>Loss of endings</strong> after 1100 removed cases and genders, and with them the free word order of Old English.</li>
        </ul>
        <p>Some words have changed meaning, the same false-friend problem as in Middle High German: <span class="la">eorl</span> is a warrior or nobleman, not an earl; <span class="la">wolcen</span> is a cloud (German <em>Wolke</em>), not the poetic <em>welkin</em> “sky” that grew from it; <span class="la">sellan</span> is to give, not to sell; <span class="la">dēor</span> is any wild animal (German <em>Tier</em>), not only a deer.</p>
      `
    }
  ],

  vocab: [
    { id: 'hwaet', head: 'hwæt', la: 'hwæt', pos: 'pronoun; interjection', en: 'what; listen! lo!', note: 'Neuter of hwā, who. German was.' },
    { id: 'ic', head: 'ic', la: 'ic, mē, mīn, mē', pos: 'pronoun', en: 'I', note: 'German ich. In some dialects probably pronounced “itsch”, hence southern Middle English ich.' },
    { id: 'thu', head: 'þū', la: 'þū, þē, þīn, þē', pos: 'pronoun', en: 'you (sg.), thou', note: 'German du.' },
    { id: 'he', head: 'hē', la: 'hē, hine, his, him', pos: 'pronoun', en: 'he', note: 'hine ~ ihn, him ~ ihm.' },
    { id: 'heo', head: 'hēo', la: 'hēo, hīe, hire, hire', pos: 'pronoun', en: 'she', note: 'Replaced in Middle English by she, of disputed origin.' },
    { id: 'we', head: 'wē', la: 'wē, ūs, ūre, ūs', pos: 'pronoun', en: 'we', note: 'German wir, uns, unser.' },
    { id: 'ge', head: 'gē', la: 'gē, ēow, ēower, ēow', pos: 'pronoun', en: 'you (pl.), ye', note: 'German ihr, euch, euer.' },
    { id: 'hie', head: 'hīe', la: 'hīe, hīe, hira, him', pos: 'pronoun', en: 'they', note: 'Replaced in Middle English by Norse they, them, their.' },
    { id: 'gar', head: 'gār', la: 'gār', g: 'm', pos: 'noun', en: 'spear', note: 'German Ger (archaic), in names: Gerhard, Gertrud. English gar(fish), garlic (“spear-leek”).' },
    { id: 'dene', head: 'Dene', la: 'Dene, Dena, Denum', g: 'm', pos: 'noun, plural', en: 'the Danes', note: 'Gār-Dene, “Spear-Danes”: one of the poem’s many names for the Danes.' },
    { id: 'geardagas', head: 'gēardagas', la: 'gēardagas', g: 'm', pos: 'noun, plural', en: 'days of old, former times', note: 'gēar (year, Jahr) + dagas (days, Tage): “days of yore”.' },
    { id: 'theod', head: 'þēod', la: 'þēod', g: 'f', pos: 'noun', en: 'people, nation', note: 'Related to German deutsch (Old High German diutisc, “of the people”). þēodcyning: king of a people.' },
    { id: 'cyning', head: 'cyning', la: 'cyning', g: 'm', pos: 'noun', en: 'king', note: 'German König. The c stays k before y.' },
    { id: 'thrym', head: 'þrym', la: 'þrym', g: 'm', pos: 'noun', en: 'glory, might, force', note: 'A poetic word.' },
    { id: 'gefrignan', head: 'gefrignan', la: 'gefrignan, gefrægn, gefrūnon, gefrugnen', pos: 'verb, strong III', en: 'learn (by asking), hear of', note: 'Related to German fragen. A typical opening formula of Old English poems: ic gefrægn, “I have heard”.' },
    { id: 'aetheling', head: 'æþeling', la: 'æþeling', g: 'm', pos: 'noun', en: 'prince, nobleman', note: 'German Edeling; related to edel and Adel.' },
    { id: 'ellen', head: 'ellen', la: 'ellen', g: 'n', pos: 'noun', en: 'courage, strength; deed of courage', note: 'Old High German ellen, courage.' },
    { id: 'fremman', head: 'fremman', la: 'fremman, fremede', pos: 'verb, weak', en: 'do, perform, carry out', note: 'Related to German frommen (benefit) and fromm.' },
    { id: 'sceatha', head: 'sceaþa', la: 'sceaþa', g: 'm', pos: 'noun', en: 'enemy, harmer, criminal', note: 'German Schaden, schaden.' },
    { id: 'maegth', head: 'mǣgþ', la: 'mǣgþ', g: 'f', pos: 'noun', en: 'tribe, kindred, people', note: 'Related to mǣg, kinsman.' },
    { id: 'eorl', head: 'eorl', la: 'eorl', g: 'm', pos: 'noun', en: 'warrior, nobleman', note: 'False friend: not yet the title earl, which took its meaning from Norse jarl.' },
    { id: 'aerest', head: 'ǣrest', la: 'ǣrest', pos: 'adverb', en: 'first, at first', note: 'German erst. ǣr: before (ere).' },
    { id: 'weorthan', head: 'weorþan', la: 'weorþan, wearþ, wurdon, worden', pos: 'verb, strong III', en: 'become, happen; (with participle) be (passive)', note: 'German werden. wearð funden: wurde gefunden.' },
    { id: 'findan', head: 'findan', la: 'findan, fand, fundon, funden', pos: 'verb, strong III', en: 'find', note: 'German finden.' },
    { id: 'frofor', head: 'frōfor', la: 'frōfor, frōfre', g: 'f', pos: 'noun', en: 'comfort, consolation, help', note: 'No modern descendant in English or German.' },
    { id: 'weaxan', head: 'weaxan', la: 'weaxan, wēox, wēoxon, geweaxen', pos: 'verb, strong VII', en: 'grow, increase', note: 'German wachsen; English wax (the moon waxes).' },
    { id: 'wolcen', head: 'wolcen', la: 'wolcen, pl. wolcnu', g: 'n', pos: 'noun', en: 'cloud; (pl.) the sky', note: 'German Wolke. under wolcnum: under the skies, on earth.' },
    { id: 'theon', head: 'þēon', la: 'þēon, þāh, þigon, þigen', pos: 'verb, strong I', en: 'thrive, prosper', note: 'German gedeihen.' },
    { id: 'aeghwylc', head: 'ǣghwylc', la: 'ǣghwylc', pos: 'pronoun', en: 'each, every', note: 'German jeglich (older ieglîch). Pronounce the -lc with tsch.' },
    { id: 'hyran', head: 'hȳran', la: 'hȳran, hȳrde', pos: 'verb, weak', en: 'hear; obey (+ dat.)', note: 'German hören, gehorchen. y = ü.' },
    { id: 'sculan', head: 'sculan', la: 'sculan (sceal, scolde)', pos: 'verb, preterite-present', en: 'must, have to; shall', note: 'German sollen, but often stronger: “must”.' },
    { id: 'god', head: 'gōd', la: 'gōd', pos: 'adjective', en: 'good', note: 'German gut. Distinguish God (God), with short o.' },
    { id: 'oft', head: 'oft', la: 'oft; oftor, oftost', pos: 'adverb', en: 'often', note: 'German oft. Oft Scyld Scēfing: line 4.' }
  ],

  grammarCards: [
    { id: 'oe1-thorn', front: 'þ and ð', back: 'Both th (thin or this); used interchangeably by scribes. þ from the runes, ð from a crossed d.' },
    { id: 'oe1-wynn', front: 'ƿ (wynn)', back: 'w; a rune letter, printed as w in most editions.' },
    { id: 'oe1-ae', front: 'æ (ash)', back: 'An open vowel between German a and ä; long ǣ.' },
    { id: 'oe1-y', front: 'Old English y is pronounced …', back: 'as German ü: cyning, hȳran' },
    { id: 'oe1-c', front: 'c before e, i, æ, y (cild, cirice)', back: 'usually tsch: child, church (German Kind, Kirche)' },
    { id: 'oe1-g', front: 'g next to front vowels (gēar, dæg)', back: 'usually j: year, day (German Jahr, Tag)' },
    { id: 'oe1-sc', front: 'sc (scip, Scyld)', back: 'sch: ship, Schiff' },
    { id: 'oe1-h', front: 'h after a vowel (niht, hēah)', back: 'ch as in German: night/Nacht, high/hoch' },
    { id: 'oe1-gvs', front: 'Why do Old English vowels sound German?', back: 'Old English came before the Great Vowel Shift: hūs = “huus”, wīn = “wien”.' },
    { id: 'oe1-1sg', front: 'ic: acc., gen., dat.', back: 'mē (mec), mīn, mē' },
    { id: 'oe1-3m', front: 'hē: acc., gen., dat.', back: 'hine, his, him' },
    { id: 'oe1-3f', front: 'hēo: acc., gen., dat.', back: 'hīe, hire, hire' },
    { id: 'oe1-3pl', front: 'hīe (they): acc., gen., dat.', back: 'hīe, hira/heora, him' },
    { id: 'oe1-him', front: 'him can be …', back: 'dat. sg. masc./neut. (to him, to it) or dat. pl. (to them)' },
    { id: 'oe1-dual', front: 'wit, git', back: 'the dual: we two, you two (Bavarian es, enk)' },
    { id: 'oe1-they', front: 'Where do English they, them, their come from?', back: 'Old Norse, replacing hīe, him, hira in Middle English' },
    { id: 'oe1-hwaet', front: 'Hwæt at the start of Beowulf', back: 'Traditionally an interjection, “Listen!”; Walkden (2013): an exclamative, “How …!”' },
    { id: 'oe1-V2', front: 'hū ðā æþelingas ellen fremedon', back: 'Verb last in a subordinate clause, as German: wie die Edlen Mut bewiesen' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'How is <span class="la">cild</span> pronounced?', options: ['with tsch, as English child', 'with k, as German Kind', 'with ts', 'with s'], answer: 0, explain: 'c before a front vowel was palatalised.' },
    { id: 'e2', type: 'mc', prompt: 'How is <span class="la">scip</span> pronounced?', options: ['with sch, like Schiff', 'with sk', 'with s + ch', 'with ts'], answer: 0, explain: 'sc = sch.' },
    { id: 'e3', type: 'mc', prompt: 'The <span class="la">g</span> of <span class="la">gēar</span> is pronounced:', options: ['j, as in Jahr', 'g, as in gut', 'ch, as in ach', 'silent'], answer: 0, explain: 'g before a front vowel = j.' },
    { id: 'e4', type: 'mc', prompt: 'The <span class="la">y</span> of <span class="la">cyning</span> is:', options: ['German ü', 'German i', 'English y in yes', 'German ei'], answer: 0, explain: 'y was a rounded front vowel.' },
    { id: 'e5', type: 'mc', prompt: 'Old English <span class="la">hūs</span> sounded like:', options: ['“huus”', '“haus”', 'English house', '“hos”'], answer: 0, explain: 'Before the Great Vowel Shift (and before German diphthongisation): a long u.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">þ</span> and <span class="la">ð</span>:', options: ['both write th, interchangeably', 'þ = t, ð = d', 'þ = th, ð = dh only', 'ð is Icelandic only'], answer: 0, explain: 'Scribes used both for both sounds.' },
    { id: 'e7', type: 'mc', prompt: '<span class="la">him</span> in <span class="la">him ǣghwylc … hȳran scolde</span> is:', options: ['dative singular: (obey) him', 'accusative: him', 'nominative plural', 'genitive'], answer: 0, explain: 'hȳran takes a dative, like German gehorchen.' },
    { id: 'e8', type: 'mc', prompt: 'English <em>they</em> comes from:', options: ['Old Norse', 'Old English hīe', 'French', 'Latin'], answer: 0, explain: 'A Viking-age loan, spreading from the Danelaw.' },
    { id: 'e9', type: 'match', prompt: 'Match the Old English words to their German relatives.', pairs: [
      ['cyning', 'König'], ['wolcen', 'Wolke'], ['weaxan', 'wachsen'], ['hȳran', 'hören'], ['þēon', 'gedeihen']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the pronoun forms to their German equivalents.', pairs: [
      ['hine', 'ihn'], ['him', 'ihm'], ['ūs', 'uns'], ['ēow', 'euch'], ['þē', 'dir, dich']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">___ wæs gōd cyning.</span>', hint: 'he', answers: ['hē', 'he'], full: 'Hē wæs gōd cyning.', explain: 'Nominative.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Se cyning geseah ___.</span>', hint: 'him (acc.)', answers: ['hine'], full: 'Se cyning geseah hine.', explain: 'Accusative masculine: hine, German ihn.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Hīe sealdon ___ gold.</span>', hint: 'to him (dat.)', answers: ['him'], full: 'Hīe sealdon him gold.', explain: 'Dative: him, German ihm. sellan = give.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">___ gefrūnon þrym.</span>', hint: 'we', answers: ['wē', 'we'], full: 'Wē gefrūnon þrym.', explain: '1st person plural.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give the forms of <span class="la">ic</span> and <span class="la">þū</span>. The poetic accusatives <span class="la">mec, þec</span> are also accepted.', headers: ['ic', 'þū'], rows: [
      { label: 'Nom.', answers: ['ic', 'þū'] },
      { label: 'Acc.', answers: ['mē|mec', 'þē|þec'] },
      { label: 'Gen.', answers: ['mīn', 'þīn'] },
      { label: 'Dat.', answers: ['mē', 'þē'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Give the third person singular forms.', headers: ['hē', 'hēo', 'hit'], rows: [
      { label: 'Nom.', answers: ['hē', 'hēo', 'hit'] },
      { label: 'Acc.', answers: ['hine', 'hīe|hī|hȳ', 'hit'] },
      { label: 'Gen.', answers: ['his', 'hire', 'his'] },
      { label: 'Dat.', answers: ['him', 'hire', 'him'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the English translation in order.', source: 'Hwæt, wē Gār-Dena in gēardagum þēodcyninga þrym gefrūnon', tokens: ['Listen!', 'We have heard', 'of the glory', 'of the kings of the Spear-Danes', 'in days of old.'], explain: 'Gār-Dena and þēodcyninga are both genitive plural, depending on þrym.' },
    { id: 'e18', type: 'translate', dir: 'oe-en', source: 'Þæt wæs gōd cyning!', model: 'That was a good king!', accepted: ['that was good king', 'he was good king', 'that was a good king'] },
    { id: 'e19', type: 'translate', dir: 'oe-en', source: 'Hē wēox under wolcnum.', model: 'He grew under the clouds (skies).', accepted: ['he grew under clouds', 'he grew under skies', 'he grew under heavens', 'he grew up under clouds', 'he grew up under skies', 'he flourished under skies', 'he grew under sky'] },
    { id: 'e20', type: 'translate', dir: 'en-oe', source: 'We heard of the glory.', model: 'Wē gefrūnon þrym.', accepted: ['wē gefrūnon þrym', 'wē þrym gefrūnon'], explain: 'Gefrūnon is the past plural of gefrignan “learn by asking”, the verb of Beowulf’s opening line; the past plural ends in -on.' },
    { id: 'e21', type: 'translate', dir: 'en-oe', source: 'He was a good king.', model: 'Hē wæs gōd cyning.', accepted: ['hē wæs gōd cyning'], explain: 'Wæs is the singular past of wesan (English was; MHG was, modern war). Cyning keeps a hard c because its y arose from u by umlaut (German König).' },
    { id: 'e22', type: 'mc', prompt: '<span class="la">hronrād</span> (“whale-road”) is:', options: ['a kenning for the sea', 'a road along the coast', 'a whaling station', 'a river in Denmark'], answer: 0, explain: 'A compound metaphor typical of Old English poetry.' },
    { id: 'e23', type: 'mc', prompt: 'In grammar, Old English is closest to:', options: ['modern German', 'modern English', 'French', 'Latin'], answer: 0, explain: 'Four cases, three genders, strong/weak adjectives, verb-second.' },
    { id: 'e24', type: 'mc', prompt: 'The only manuscript of <em>Beowulf</em> was:', options: ['damaged by fire in 1731', 'destroyed in 1731', 'found at Sutton Hoo', 'written by Bede'], answer: 0, explain: 'Scorched in the Cotton fire; Maldon’s manuscript was the one destroyed.' }
  ],

  reading: {
    title: 'Beowulf 1–11',
    note: 'Authentic text: Klaeber’s edition (1922). The normalised view adds length marks for this course; “Klaeber, unmarked” shows the text as transcribed online. Tap any word.',
    diplomaticLabel: 'Klaeber, unmarked',
    diplomaticNote: 'Klaeber’s text as transcribed online, without length marks; the opening in capitals as in Klaeber. A missing space in line 6 (syððan ǣrest) has been restored.',
    text: 'Hwæt, wē Gār-Dena in gēardagum,\nþēodcyninga þrym gefrūnon,\nhū ðā æþelingas ellen fremedon!\nOft Scyld Scēfing sceaþena þrēatum,\nmonegum mǣgþum meodosetla oftēah,\negsode eorlas, syððan ǣrest wearð\nfēasceaft funden; hē þæs frōfre gebād,\nwēox under wolcnum weorðmyndum þāh,\noð þæt him ǣghwylc ymbsittendra\nofer hronrāde hȳran scolde,\ngomban gyldan; þæt wæs gōd cyning!',
    diplomatic: 'HWÆT, WE GAR-DEna in geardagum,\nþeodcyninga þrym gefrunon,\nhu ða æþelingas ellen fremedon!\noft Scyld Scefing sceaþena þreatum,\nmonegum mægþum meodosetla ofteah,\negsode eorlas, syððan ærest wearð\nfeasceaft funden; he þæs frofre gebad,\nweox under wolcnum weorðmyndum þah,\noð þæt him æghwylc ymbsittendra\nofer hronrade hyran scolde,\ngomban gyldan; þæt wæs god cyning!',
    translations: [
      { label: 'English translation', text: 'Listen! We have heard of the glory of the Spear-Danes in days of old, of the kings of the people, how those princes did deeds of courage. Often Scyld Scefing took the mead-benches away from troops of enemies, from many tribes; he terrified warriors, after he had first been found destitute. He lived to see consolation for that: he grew under the skies and prospered in honours, until every one of the neighbouring peoples across the whale-road had to obey him and pay him tribute. That was a good king!' },
      { label: 'German translation', text: 'Hört! Wir haben vom Ruhm der Speer-Dänen in alten Tagen gehört, der Volkskönige, wie die Edlen Heldentaten vollbrachten. Oft entriss Scyld Scefing den Scharen der Feinde, vielen Stämmen, die Metbänke; er schreckte die Krieger, nachdem er zuerst hilflos gefunden worden war. Dafür erlebte er Trost: Er wuchs unter den Wolken, gedieh in Ehren, bis ihm jeder der Umwohnenden über die Walstraße gehorchen und Tribut zahlen musste. Das war ein guter König!' }
    ],
    notes: [
      { ref: 'Hwæt, wē Gār-Dena in gēardagum', html: '<span class="la">Hwæt</span>: see grammar section 5. <span class="la">Gār-Dena</span> is genitive plural, “of the Spear-Danes”, depending on <span class="la">þrym</span> in the next line. <span class="la">in gēardagum</span>: dative plural after <span class="la">in</span>, like German <em>in alten Tagen</em>.' },
      { ref: 'þēodcyninga þrym gefrūnon', html: 'A second genitive plural, “of the people-kings”, in apposition to <span class="la">Gār-Dena</span>. <span class="la">gefrūnon</span>: preterite plural of <span class="la">gefrignan</span>, “we have heard of, learned”. Old English uses the preterite where modern English and German would use a perfect.' },
      { ref: 'hū ðā æþelingas ellen fremedon', html: 'A subordinate clause with the verb at the end, as in German. <span class="la">ðā</span> is the plural article (“the”, “those”). <span class="la">ellen fremedon</span>: “performed courage”, did brave deeds.' },
      { ref: 'Oft Scyld Scēfing', html: 'Scyld, the legendary founder of the Danish royal house, the Scyldings. <span class="la">Scēfing</span>: “son of Scēaf” or “with the sheaf” (<span class="la">scēaf</span>, German <em>Schaub</em>); the name is interpreted both ways. In prose the verb would come second, straight after <span class="la">Oft</span> (Lecture VI); here, as often in verse, it waits until the end of the next line, after the long objects: <span class="la">… meodosetla oftēah</span>.' },
      { ref: 'sceaþena þrēatum, / monegum mǣgþum meodosetla oftēah', html: '<span class="la">oftēon</span> takes a dative of the person and a genitive of the thing: “deprived troops of enemies, many tribes, of mead-benches”, i.e. conquered them and took away their halls. <span class="la">meodosetl</span>: mead-bench (German <em>Met</em> + <em>Sessel</em>), the symbol of a lord’s hall.' },
      { ref: 'egsode eorlas', html: '<span class="la">egsian</span>, “terrify”, from <span class="la">ege</span>, “fear”.' },
      { ref: 'syððan ǣrest wearð / fēasceaft funden', html: '<span class="la">wearð funden</span>: passive with <span class="la">weorþan</span>, exactly as German <em>wurde gefunden</em>. Scyld arrived as a foundling, a story the poem returns to in lines 43–46.' },
      { ref: 'hē þæs frōfre gebād', html: '<span class="la">gebīdan</span> + genitive: “live to see, experience”. <span class="la">þæs</span>: “for that”, i.e. as compensation for his destitution.' },
      { ref: 'wēox under wolcnum weorðmyndum þāh', html: '<span class="la">under wolcnum</span>: “under the clouds”, a poetic phrase for “on earth”. <span class="la">þāh</span>: preterite of <span class="la">þēon</span>, “thrive” (German <em>gedeihen</em>). The comma after <span class="la">wolcnum</span> is added in the normalised view; the online text has none.' },
      { ref: 'oð þæt him ǣghwylc ymbsittendra', html: '<span class="la">oð þæt</span>: “until”. <span class="la">ymbsittend</span>: “one sitting around”, a neighbour (German <em>um</em> + <em>sitzend</em>); genitive plural after <span class="la">ǣghwylc</span>, “each of the neighbours”.' },
      { ref: 'ofer hronrāde hȳran scolde', html: '<span class="la">hronrād</span>: “whale-road”, the sea, a kenning. <span class="la">hȳran</span> + dative (<span class="la">him</span>): “obey”, as German <em>gehorchen</em> + dative.' },
      { ref: 'gomban gyldan; þæt wæs gōd cyning!', html: '<span class="la">gombe</span>: tribute; <span class="la">gyldan</span>: pay (German <em>gelten</em>, <em>vergelten</em>). The half-line verdict closes the passage: a good king is one who makes his neighbours pay.' }
    ],
    glosses: {
      'hwæt': 'what; listen! (see grammar 5)', 'wē': 'we', 'gār': 'spear: Gār-Dene, Spear-Danes', 'dena': 'of the Danes (gen. pl. of Dene)', 'in': 'in', 'gēardagum': 'days of old (dat. pl. of gēardagas)',
      'þēodcyninga': 'of the kings of the people (gen. pl.)', 'þrym': 'glory, might (acc.)', 'gefrūnon': 'have heard of (pret. pl. of gefrignan)',
      'hū': 'how', 'ðā': 'the, those (nom. pl.)', 'æþelingas': 'princes, nobles (nom. pl. of æþeling)', 'ellen': 'courage; brave deeds (acc.)', 'fremedon': 'performed (pret. pl. of fremman)',
      'oft': 'often', 'scyld': 'Scyld (name: “shield”)', 'scēfing': 'son of Scēaf; or: with the sheaf', 'sceaþena': 'of enemies (gen. pl. of sceaþa)', 'þrēatum': 'from troops (dat. pl. of þrēat)',
      'monegum': 'from many (dat. pl. of manig)', 'mǣgþum': 'from tribes (dat. pl. of mǣgþ)', 'meodosetla': 'of mead-benches (gen. pl. of meodosetl)', 'oftēah': 'took away, deprived (pret. of oftēon)',
      'egsode': 'terrified (pret. of egsian)', 'eorlas': 'warriors, nobles (acc. pl. of eorl)', 'syððan': 'after, since', 'ǣrest': 'first (erst)', 'wearð': 'was, became (pret. of weorþan): wearð funden, was found',
      'fēasceaft': 'destitute, helpless', 'funden': 'found (participle of findan)', 'hē': 'he', 'þæs': 'for that (gen. of þæt)', 'frōfre': 'consolation (gen. of frōfor)', 'gebād': 'lived to see, experienced (pret. of gebīdan)',
      'wēox': 'grew (pret. of weaxan)', 'under': 'under', 'wolcnum': 'clouds, skies (dat. pl. of wolcen: Wolke)', 'weorðmyndum': 'in honours (dat. pl. of weorþmynd)', 'þāh': 'thrived (pret. of þēon: gedieh)',
      'oð': 'until: oð þæt', 'þæt': 'that; the (neut.)', 'him': 'him (dat.)', 'ǣghwylc': 'each, every one (jeglich)', 'ymbsittendra': 'of the neighbours (gen. pl. of ymbsittend)',
      'ofer': 'over, across', 'hronrāde': 'whale-road, the sea (acc. of hronrād)', 'hȳran': 'obey (+ dat.; hören, gehorchen)', 'scolde': 'had to (pret. of sculan)',
      'gomban': 'tribute (acc. of gombe)', 'gyldan': 'pay (gelten)', 'wæs': 'was', 'gōd': 'good', 'cyning': 'king (König)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Whose glory have “we” heard of?', options: ['The Spear-Danes and their kings', 'The Geats', 'The Anglo-Saxons', 'Beowulf alone'], answer: 0, explain: 'Gār-Dena … þēodcyninga þrym.' },
      { id: 'r2', type: 'mc', prompt: 'How did Scyld first come among the Danes?', options: ['As a destitute foundling', 'As a conquering king', 'As a monk', 'As the son of Hrothgar'], answer: 0, explain: 'syððan ǣrest wearð fēasceaft funden.' },
      { id: 'r3', type: 'mc', prompt: 'What did the neighbouring peoples have to do?', options: ['Obey him and pay tribute', 'Give him ships', 'Leave their lands', 'Convert to Christianity'], answer: 0, explain: 'hȳran scolde, gomban gyldan.' },
      { id: 'r4', type: 'mc', prompt: 'What is the poet’s verdict on Scyld?', options: ['That was a good king!', 'He was a cruel tyrant', 'He was a fool', 'He was forgotten'], answer: 0, explain: 'þæt wæs gōd cyning!' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">cirice</span> is pronounced with:', options: ['tsch at both c’s', 'k at both c’s', 'ts', 'sch'], answer: 0, explain: 'c next to i, e = tsch: church.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">dæg</span> ends in:', options: ['a j-like sound (day)', 'a hard g (Tag)', 'k', 'ch'], answer: 0, explain: 'g after a front vowel = j.' },
      { id: 't3', type: 'mc', prompt: 'Accusative of <span class="la">hē</span>:', options: ['hine', 'him', 'his', 'hē'], answer: 0, explain: 'hine ~ ihn.' },
      { id: 't4', type: 'mc', prompt: '<span class="la">ēow</span> means:', options: ['you (pl., acc./dat.)', 'yes', 'ewe', 'ever'], answer: 0, explain: 'German euch.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Hēo ___ gōd.</span>', hint: 'was', answers: ['wæs'], full: 'Hēo wæs gōd.', explain: 'wæs, as in Beowulf 11.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">Wē sealdon ___ gold.</span>', hint: 'to them (dat.)', answers: ['him'], full: 'Wē sealdon him gold.', explain: 'Dative plural him.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Wē gefrūnon þrym.', model: 'We have heard of the glory.', accepted: ['we heard of glory', 'we have heard of glory', 'we learned of glory', 'we heard of might', 'we have heard of might', 'we heard glory'] },
      { id: 't8', type: 'translate', dir: 'en-oe', source: 'That was a good king.', model: 'Þæt wæs gōd cyning.', accepted: ['þæt wæs gōd cyning'], explain: 'This is Beowulf 11, þæt wæs gōd cyning! Þæt serves as “that” for any noun, as German das does in das war ein guter König.' },
      { id: 't9', type: 'mc', prompt: 'Where is <em>Beowulf</em> set?', options: ['Southern Scandinavia', 'Wessex', 'Northumbria', 'Iceland'], answer: 0, explain: 'Among Danes, Geats and Swedes.' },
      { id: 't10', type: 'mc', prompt: 'Which letter comes from the runes?', options: ['þ (thorn)', 'ð (eth)', 'æ (ash, as a letter)', 'g'], answer: 0, explain: 'þ and ƿ are rune letters; ð is a crossed d, æ a ligature.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">wearð funden</span> corresponds to German:', options: ['wurde gefunden', 'war gefunden', 'hat gefunden', 'fand'], answer: 0, explain: 'Passive with weorþan = werden.' }
    ]
  },

  reference: [
    { title: 'Sounds: Old English through German', headers: ['Spelling', 'Sound', 'Example'], rows: [
      ['y, ȳ', 'ü, üü', 'cyning, hȳran'], ['æ, ǣ', 'open ä', 'þæt, ǣrest'], ['c (by e, i, æ, y)', 'tsch', 'cild, cirice'], ['c (elsewhere)', 'k', 'cyning, cuman'],
      ['g (by e, i, æ, y)', 'j', 'gēar, dæg'], ['g (between back vowels)', 'North German g in Tage', 'dagas'], ['sc', 'sch', 'scip'], ['cg', 'dsch', 'ecg'], ['h (after a vowel)', 'ch', 'niht'], ['þ, ð', 'th', 'þæt, ðā']
    ] },
    { title: 'Personal pronouns: 1st and 2nd person', headers: ['', 'ic', 'wē', 'þū', 'gē'], rows: [
      ['Nom.', 'ic', 'wē', 'þū', 'gē'], ['Acc.', 'mē (mec)', 'ūs', 'þē (þec)', 'ēow'], ['Gen.', 'mīn', 'ūre', 'þīn', 'ēower'], ['Dat.', 'mē', 'ūs', 'þē', 'ēow']
    ] },
    { title: 'Personal pronouns: 3rd person', headers: ['', 'hē', 'hēo', 'hit', 'hīe (pl.)'], rows: [
      ['Nom.', 'hē', 'hēo', 'hit', 'hīe'], ['Acc.', 'hine', 'hīe', 'hit', 'hīe'], ['Gen.', 'his', 'hire', 'his', 'hira, heora'], ['Dat.', 'him', 'hire', 'him', 'him']
    ] }
  ]
});
