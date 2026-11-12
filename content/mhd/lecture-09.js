/*
 * Middle High German — Lecture IX: verse — rhyme, metre and the Nibelungen stanza.
 * Reading: Nibelungenlied, stanzas 2–12 (the Burgundian court), transcribed from the page images of Karl Bartsch’s
 * edition (Leipzig 1866), pp. 1–3, with Bartsch’s metrical accents kept.
 * Bartsch’s account of the stanza: Einleitung pp. XIV, XXII–XXIV of the same edition.
 * Source panel: Walther von der Vogelweide, L 47,16–21, from Lachmann’s 2nd edition (Berlin 1843), p. 47.
 * See CONTENT-CHECKS.md.
 */
Viator.addLecture('mhd', {
  id: 'mhd-09',
  number: 9,
  title: 'Ez wuohs in Búrgónden',
  subtitle: 'Verse: rhyme, metre and the Nibelungen stanza; the Burgundian court in the Nibelungenlied',
  minutes: 60,

  intro: `
    <p>Almost all the Middle High German you have read so far is verse, and verse was made to be heard. Its rhythm rests on the alternation of stressed and unstressed syllables, as in modern German verse, but the length of a syllable also counts: <span class="la">sagen</span> and <span class="la">Uote</span>, both of two syllables, behave differently at the end of a line because the first has a short vowel and the second a long one. The poets’ rhymes, which the best of them kept pure, are one of our main sources for how Middle High German sounded.</p>
    <p>This lecture covers the two commonest narrative forms, the rhyming couplet of the courtly romances and the four-line stanza of the <em>Nibelungenlied</em>, then rhyme and the forms of the love song. The reading is the opening of the <em>Nibelungenlied</em> after the famous first stanza: Kriemhild, her three royal brothers, and the court at Worms with its officers. Karl Bartsch’s edition marks with an acute accent the syllables on which the metre places a beat where a reader might not expect one: <span class="la">Ez wuohs in Búrgónden</span>. Here those accents are kept, because they show the metre at work.</p>
    <p>By the end you should be able to count the beats of a half-line, tell a <em>stumpf</em> from a <em>klingend</em> cadence, describe the Nibelungen stanza in Bartsch’s own terms, name the main kinds of rhyme, and read the stanzas aloud.</p>
  `,

  background: [
    {
      title: 'The poem, its date and its manuscripts',
      html: `
        <p>The <em>Nibelungenlied</em> as we have it was composed around 1200 by a poet who does not give his name. His detailed knowledge of the Danube region, especially of Passau, has led many scholars to place him there, perhaps in the circle of Bishop Wolfger von Erla (bishop 1191–1204); this is a well-supported hypothesis, not a documented fact. More than thirty manuscripts and fragments survive. The three oldest complete ones are known as A (Munich), B (St Gall) and C (Karlsruhe, formerly Donaueschingen). B and C represent two versions, often named after their last lines: the <em>nôt</em> version (<span class="la">daz ist der Nibelunge nôt</span>) and the <em>liet</em> version (<span class="la">der Nibelunge liet</span>). Bartsch’s text follows B.</p>
        <p>Bartsch himself dated the poem much earlier. Because its rhymes are sometimes only approximate, like the assonances of older poetry, he placed its composition before the middle of the 12th century, in the time of the Kürenberger, and supposed that a younger poet had reworked it around 1170 to bring its rhymes up to date (Einleitung, p. XIV). Few scholars now accept this; the rhyme technique of the poem as we have it is usually placed between about 1190 and 1205, and Wolfram von Eschenbach alludes in <em>Parzival</em>, written a few years after 1200, to Rumolt the cook, whom you meet in the reading.</p>
        <p>The stanza is closely related to that of the early Danubian love poet known as Der von Kürenberg, of the mid-12th century. Bartsch thought the epic poet had invented his stanza (p. XIV); whether the epic poet borrowed a lyric form, or both drew on an older tradition, is still debated.</p>
      `
    },
    {
      title: 'The Burgundians in history and legend',
      html: `
        <p>Behind the kings of Worms lies a real people. The Burgundians had a kingdom on the middle Rhine in the early 5th century, which was destroyed in 436 or 437 by Hunnic troops fighting for the Roman general Aëtius; their king was called Gundahar. The Burgundian law code of about 500 names among the royal ancestors a Gundahar and a Gislahar: Gunther and Giselher. Attila, Etzel in German, was not present at that defeat, but legend joined the destruction of the Burgundians to the famous king of the Huns, who died in 453. That their seat was at Worms is the tradition of the poem; historians are less certain.</p>
        <p>Stanzas 10 and 11 list the court’s officers: the <span class="la">marschalc</span> (in charge of the horses), the <span class="la">truhsæze</span> (who served the food, the steward), the <span class="la">schenke</span> (the cupbearer) and the <span class="la">kamerære</span> (the chamberlain, responsible for the treasure and the wardrobe, as Bartsch explains). These four household offices became, at the level of the Empire, the honorary arch-offices of the prince-electors, fixed in the Golden Bull of 1356, and they survive in surnames such as Schenk and Truchsess. <span class="la">marschalc</span>, originally a “horse servant”, rose to become a marshal: another word that climbed (Lecture VIII).</p>
      `
    },
    {
      title: 'How do we know how verse sounded?',
      html: `
        <p>No melody for the <em>Nibelungenlied</em> survives. Modern performers have used a later tune in the related Hildebrandston, but that is a reconstruction. Of Walther’s melodies, the Münster fragment preserves the Palästinalied and parts of a few others (special lecture); for most of his songs nothing is left but the words. The metre has to be worked out from the texts themselves: from the number of syllables, the position of word stress, and the rhymes.</p>
        <p>Karl Lachmann set out rules for counting beats and syllables in the 1820s, and Bartsch’s account of the Nibelungen stanza follows that school. Andreas Heusler, in his <em>Deutsche Versgeschichte</em> (1925–29), analysed verse instead in musical bars of equal length. Later metrists have questioned parts of both systems. The scansions in this lecture follow Bartsch and the common handbook terms; treat them as a guide to reading aloud, not as a recording.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Ich minne, sinne, lange zît:<br>versinne Minne sich,<br>wie si schône lône mîner tage.<br>nû lône schône: dêst mîn strît:<br>vil kleine meine mich,<br>niene meine kleine mîne klage,</p>
    <p>“I love and ponder a long time: may Love consider how she may reward my days handsomely. Now reward handsomely: that is what I strive for. Let her care for me ever so little, only let her not care little for my lament …” Walther von der Vogelweide, L 47,16–21, from Lachmann’s 2nd edition (Berlin 1843), p. 47. The sense of lines 20–21 is not certain; this is one reading.</p>
    <p>These are the first six lines of a stanza of twenty. Besides the rhymes at the line ends (<span class="la">zît : strît</span>, <span class="la">sich : mich</span>, <span class="la">tage : klage</span>), neighbouring words rhyme inside the lines: <span class="la">minne : sinne</span> with <span class="la">versinne : Minne</span>, <span class="la">schône : lône</span> with <span class="la">lône : schône</span>, <span class="la">kleine : meine</span> with <span class="la">meine : kleine</span>, the second pair reversing the first. Such rhymes on adjacent words are called <em>Schlagreime</em>. The rest of the stanza goes on in lines of two or three words bound by rhyme across the gaps (<span class="la">rihte : gesihte</span>, <span class="la">unbilde : wilde</span>, <span class="la">verderbet : enterbet</span>, <span class="la">schulde : hulde</span>). <span class="la">dêst</span> = <span class="la">daz ist</span> (Lecture VII); <span class="la">lônen</span> takes the genitive (<span class="la">mîner tage</span>).</p>
  `,

  pronunciation: `
    <h3>Reading verse aloud</h3>
    <ul>
      <li>Read with the natural stress of each word, and let the beats fall where the words carry them. Do not hammer out a regular te-TUM: the dips between beats can hold one syllable, two, or none.</li>
      <li>Where Bartsch prints an accent, put a beat on that syllable even if it would normally be weak: <span class="la">Búrgónden</span>, <span class="la">verlíesén</span>, <span class="la">ándériu</span>. Two beats then stand side by side, and the voice slows.</li>
      <li>Pause briefly at the caesura, between the two halves of the long line.</li>
      <li>An unstressed <span class="la">-e</span> before a word beginning with a vowel is usually swallowed: <span class="la">sælde und êre</span> is read <em>sæld’ und êre</em>. Bartsch marks such elisions with a dot under the letter; they are left out here.</li>
      <li>Keep short vowels short: <span class="la">degen</span>, <span class="la">pflegen</span>, <span class="la">leben</span>, <span class="la">geben</span> have the short <em>e</em> of <em>Bett</em>, and <span class="la">sagen</span> the short <em>a</em> of <em>Sack</em> (Lecture I), not the long vowels of modern <em>pflegen</em>, <em>leben</em> and <em>sagen</em>. The metre depends on it.</li>
    </ul>
    <h3>Notation in this lecture</h3>
    <p>An acute accent (<em>é</em>) marks a beat (<em>Hebung</em>). In the scansions of section 1, a grave accent (<em>è</em>) marks the weaker beat that a <em>klingend</em> ending places on an unstressed syllable. Bartsch uses the acute for both.</p>
  `,

  grammar: [
    {
      title: '1. Beats and dips',
      html: `
        <p>Middle High German verse counts <strong>beats</strong> (<em>Hebungen</em>), the stressed positions, and treats the <strong>dips</strong> (<em>Senkungen</em>) between them more freely. Unstressed syllables before the first beat form the <strong>upbeat</strong> (<em>Auftakt</em>). In the courtly poets the usual dip is one syllable, so that beat and dip alternate; but a dip may be empty, when two beats meet, or hold two light syllables.</p>
        <p>Word stress decides where the beats can fall. Main stress is on the root syllable, as in modern German; prefixes like <span class="la">ge-</span>, <span class="la">ver-</span>, <span class="la">be-</span> are unstressed; and the second part of a compound or a heavy suffix (<span class="la">-lîch</span>, <span class="la">-heit</span>, <span class="la">-ære</span>) can carry a secondary beat: <span class="la">Hûnólt</span>, <span class="la">kamerǽre</span>.</p>
        <p>The opening of <em>Iwein</em> (Lecture IV), scanned here:</p>
        <p class="la">Swér an réhte güetè<br>wéndet sîn gemüetè,<br>dem vólget sǽld’ und êrè.</p>
        <p>Three full beats and a weak fourth on the final <span class="la">-e</span>; <span class="la">dem</span> is an upbeat; <span class="la">sælde und</span> is elided. Compare line 11: <span class="la">dô trúoc und nóch sîn náme tréit</span>, four full beats with the last on the final syllable.</p>
      `
    },
    {
      title: '2. Line endings: stumpf and klingend',
      html: `
        <p>The end of a line, its <strong>cadence</strong>, is where vowel length matters most.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Cadence</th><th>Shape</th><th>Examples</th></tr></thead>
          <tbody>
            <tr><td><em>stumpf</em> (one syllable)</td><td>last beat on a final stressed syllable</td><td class="la">kraft, sîn, lîp</td></tr>
            <tr><td><em>stumpf</em> (two syllables)</td><td>short open syllable + <span class="la">-e-</span>: counts as one beat</td><td class="la">degen, pflegen, leben, sagen</td></tr>
            <tr><td><em>klingend</em></td><td>long syllable + unstressed syllable: fills two beats</td><td class="la">Uote, güete, êre</td></tr>
          </tbody>
        </table></div>
        <p>A stressed syllable is <strong>short</strong> if it has a short vowel followed by a single consonant and another vowel (<span class="la">sa-gen</span>, <span class="la">de-gen</span>). Such a syllable cannot carry a beat and fill the following position on its own, so <span class="la">degen : pflegen</span> rhyme as a masculine pair, like <span class="la">kraft : ritterscaft</span>. A <strong>long</strong> syllable, with a long vowel or diphthong (<span class="la">Uo-te</span>, <span class="la">êre</span>) or ending in a consonant (<span class="la">lan-den</span>), can: <span class="la">Úotè</span> fills two beats.</p>
        <p>This is one of the clearest proofs that the vowels of <span class="la">sagen</span> and <span class="la">leben</span> were still short around 1200. They were lengthened later, in the change of open syllables that runs from Middle to New High German (Lecture I). A modern German reading <em>sagen</em> with a long <em>a</em> spoils the rhythm.</p>
      `
    },
    {
      title: '3. The rhyming couplet of the romances',
      html: `
        <p>Hartmann’s <em>Iwein</em> and <em>Der arme Heinrich</em>, Wolfram’s <em>Parzival</em> and Gottfried’s <em>Tristan</em> are written in <strong>rhyming couplets</strong> (<em>Reimpaarverse</em>): lines of four beats, rhyming in pairs, <em>aa bb cc</em>. A line has either four beats with a <em>stumpf</em> ending or three full beats with a <em>klingend</em> ending, which counts as the fourth.</p>
        <p>The couplet is a flexible form for narrative, because a sentence need not end where the rhyme pair ends. Hartmann often closes a sentence in the middle of a couplet and begins the next one with its rhyme word, binding the two: <span class="la">dem volget sælde und êre. / des gît gewisse lêre</span> (Iwein 3–4). This is called <em>Reimbrechung</em>, “breaking the rhyme”.</p>
        <p>Dialogue can run across the lines in the same way: in Lecture VII’s reading <span class="la">Ich sprach «bist übel ode guot?» / er sprach «swer mir niene tuot</span> puts a question and an answer inside one rhyme pair.</p>
      `
    },
    {
      title: '4. The Nibelungen stanza',
      html: `
        <p>Bartsch describes it in his introduction (p. XXIII):</p>
        <blockquote>„Die Nibelungenstrophe ist vierzeilig: jede Zeile zerfällt durch die feststehende Cäsur in zwei Theile; die vordere Hälfte hat vier, die hintere drei Hebungen, nur in der letzten Zeile ist die Zahl der Hebungen in beiden Theilen gleich, dies nach einem in der deutschen Strophenbildung häufig hervortretenden Grundsatze, gegen das Ende hin eine Verlängerung des Verses eintreten zu lassen.“</blockquote>
        <div class="tablewrap"><table>
          <thead><tr><th>Half-line</th><th>Beats</th><th>Ending</th></tr></thead>
          <tbody>
            <tr><td>on-verse (<em>Anvers</em>), lines 1–4</td><td>4</td><td>usually <em>klingend</em></td></tr>
            <tr><td>off-verse (<em>Abvers</em>), lines 1–3</td><td>3</td><td><em>stumpf</em></td></tr>
            <tr><td>off-verse, line 4</td><td>4</td><td><em>stumpf</em></td></tr>
          </tbody>
        </table></div>
        <p>The long lines rhyme in pairs at their ends, <em>aa bb</em>. The on-verses usually end <em>klingend</em> (<span class="la">Búrgónden, landen, geheizen</span>) and the off-verses <em>stumpf</em> (<span class="la">magedîn : sîn, wîp : lîp</span>). The extra beat of the eighth half-line gives every stanza a heavy close.</p>
        <p>For that last half-line Bartsch states a rule: if a dip is missing, it can only be the one between the second and third beats. His example with every dip filled is our stanza 10: <span class="la">des ích genénnen níene kán</span>. Three stanzas of the reading show the missing dip, and Bartsch’s accents mark the two beats that meet:</p>
        <p class="la">vil verlíesén den lîp (2,4)<br>zierten ándériu wîp (3,4)<br>sît in Étzélen lant (5,4)</p>
        <p>Read <em>víl ver-líe-sén den líp</em>: four beats, with <span class="la">-sen</span>, normally unstressed, taking the third.</p>
        <p>Bartsch also noticed that the fourth line of a stanza often adds a general reflection or points ahead (p. XXII). However well the stanza worked in lyric, he did not think its use for epic “ein glücklicher Gedanke”. Modern readers tend to value exactly those fourth lines: <span class="la">dar umbe muosen degene vil verlíesén den lîp</span>; <span class="la">sie sturben jæmerlîche sint von zweier edelen frouwen nît</span>. From its second stanza the poem tells you how it will end.</p>
      `
    },
    {
      title: '5. Rhyme',
      html: `
        <p>The courtly poets of around 1200, Hartmann, Walther and Gottfried above all, aimed at <strong>pure rhyme</strong>: identical vowels and following consonants from the last stressed vowel on. Older poetry, and parts of the <em>Nibelungenlied</em>, accept approximate rhymes (assonance), as Bartsch observed. Because the careful poets keep apart sounds that modern German has merged, their rhymes are evidence for pronunciation: <span class="la">lêret : versêret</span> rhyme (Lecture VIII), but <span class="la">ê</span> and <span class="la">æ</span> are kept apart. Rhymes also betray a poet’s dialect, which is how Hartmann’s Alemannic and Wolfram’s Bavarian-East Franconian origins can be traced in their verse.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Term</th><th>Pattern</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td><em>Paarreim</em></td><td>aa bb</td><td>the romances</td></tr>
            <tr><td><em>Kreuzreim</em></td><td>abab</td><td>many love songs</td></tr>
            <tr><td><em>Waise</em></td><td>an unrhymed line</td><td class="la">siech</td></tr>
            <tr><td><em>Zäsurreim</em></td><td>on-verses rhyme too</td><td class="la">mæren : lobebæren</td></tr>
            <tr><td><em>Binnenreim</em></td><td>rhyme inside a line</td><td class="la">nû lône schône</td></tr>
            <tr><td><em>Schlagreim</em></td><td>adjacent words rhyme</td><td class="la">Ich minne, sinne</td></tr>
          </tbody>
        </table></div>
        <p>The famous opening stanza, <span class="la">Uns ist in alten mæren</span> (Lecture III), has rhymes at the caesura as well (<span class="la">mæren : lobebæren</span>, <span class="la">hôchgezîten : strîten</span>). It is not in manuscript B, and is often thought to belong to the revision that C represents (Lecture III).</p>
      `
    },
    {
      title: '6. Song forms: the canzone and the Ton',
      html: `
        <p>The commonest stanza of the love songs is the <strong>canzone</strong> (<em>Kanzonenstrophe</em>), which you met in Lecture VIII. It has two parts. The <em>Aufgesang</em> consists of two metrically identical <em>Stollen</em>, sung to the same melody; the <em>Abgesang</em> is different and usually longer. Walther’s song to Mâze, <em>abc abc dd efe</em>, divides as 3 + 3 + 5.</p>
        <p>A poet’s <strong>Ton</strong> was the combination of a stanza form and its melody, and it was his own. Bartsch notes (p. XIV) that inventing the <em>Ton</em> was still regarded, in the tradition of the Meistersinger, as what distinguished the original poet from the imitator. Walther composed political and moral stanzas, <em>Sangsprüche</em>, in a series of such <em>Töne</em>, which modern editors name: the Reichston of the source panels in Lectures IV and V, the Ottenton, the König-Friedrichs-Ton. Each stanza of a <em>Spruch</em> can stand on its own; the stanzas of a love song belong together.</p>
      `
    }
  ],

  vocab: [
    { id: 'magedin', head: 'magedîn', la: 'magedîn', g: 'n', pos: 'noun', en: 'young girl, maiden', de: 'Mädchen, Jungfrau', note: 'Diminutive of maget; modern Mädchen. Neuter, like Mädchen.' },
    { id: 'meit', head: 'meit', la: 'meit, meide (= maget)', g: 'f', pos: 'noun', en: 'maiden, girl', de: 'Jungfrau, Mädchen', note: 'Contracted from maget; Bartsch: meide dat. sing.' },
    { id: 'degen', head: 'dëgen', la: 'dëgen', g: 'm', pos: 'noun', en: 'warrior, hero', de: 'Held, Krieger', note: 'Not the sword (Degen, a later loan). Short ë: rhymes as stumpf.' },
    { id: 'ellen', head: 'ellen', la: 'ellen', g: 'n', pos: 'noun', en: 'courage, strength', de: 'Mut, Kraft', note: 'Bartsch: Kraft. A heroic word, rare in the romances.' },
    { id: 'art', head: 'art', la: 'art', g: 'f', pos: 'noun', en: 'descent, birth; nature, kind', de: 'Abstammung; Art', note: 'Also masculine. von arde hôhe erborn: of high birth.' },
    { id: 'nit', head: 'nît', la: 'nît', g: 'm', pos: 'noun', en: 'hatred, enmity; envy', de: 'Hass, Feindschaft; Neid', note: 'Bartsch: Haß. Stronger than modern Neid.' },
    { id: 'erbe', head: 'erbe', la: 'erbe', g: 'n', pos: 'noun', en: 'inheritance, inherited land', de: 'Erbe, ererbtes Land' },
    { id: 'neve', head: 'neve', la: 'neve', g: 'm', pos: 'noun', en: 'nephew; cousin; kinsman', de: 'Neffe; Vetter; Verwandter' },
    { id: 'marschalc', head: 'marschalc', la: 'marschalc, marscalch', g: 'm', pos: 'noun', en: 'marshal, master of the horse', de: 'Marschall, Stallmeister', note: 'Originally “horse servant”.' },
    { id: 'truhsaeze', head: 'truhsæze', la: 'truhsæze', g: 'm', pos: 'noun', en: 'steward (in charge of serving food)', de: 'Truchsess' },
    { id: 'schenke', head: 'schenke', la: 'schenke, scenke', g: 'm', pos: 'noun', en: 'cupbearer', de: 'Mundschenk' },
    { id: 'kamerare', head: 'kamerære', la: 'kamerære', g: 'm', pos: 'noun', en: 'chamberlain', de: 'Kämmerer' },
    { id: 'marcgrave', head: 'marcgrâve', la: 'marcgrâve', g: 'm', pos: 'noun', en: 'margrave, count of a border march', de: 'Markgraf' },
    { id: 'ritterschaft', head: 'ritterschaft', la: 'ritterschaft, ritterscaft', g: 'f', pos: 'noun', en: 'knighthood; the knights; knightly life', de: 'Ritterschaft; ritterliches Leben' },
    { id: 'kuchenmeister', head: 'kuchenmeister', la: 'kuchenmeister', g: 'm', pos: 'noun', en: 'master of the kitchen', de: 'Küchenmeister' },
    { id: 'triuten', head: 'triuten', la: 'triuten', pos: 'verb, weak', en: 'love, caress', de: 'lieb haben, liebkosen' },
    { id: 'gezemen', head: 'gezëmen', la: 'gezëmen, gezam, gezâmen, gezomen', pos: 'verb, strong IV', en: 'befit, be fitting (+ dat.)', de: 'geziemen, sich gebühren' },
    { id: 'muoten', head: 'muoten', la: 'muoten (+ gen.)', pos: 'verb, weak', en: 'desire, seek', de: 'begehren, verlangen' },
    { id: 'zieren', head: 'zieren', la: 'zieren', pos: 'verb, weak', en: 'adorn, grace', de: 'zieren, schmücken' },
    { id: 'bewarn', head: 'bewarn', la: 'bewarn', pos: 'verb, weak', en: 'guard, protect; equip', de: 'bewahren; ausrüsten', note: 'Bartsch: bewart, ausgerüstet.' },
    { id: 'verliesen', head: 'verliesen', la: 'verliesen, verlôs, verlurn, verlorn', pos: 'verb, strong II', en: 'lose', de: 'verlieren', note: 'Grammatical change s/r; modern verlieren took the r throughout.' },
    { id: 'gram', head: 'gram', la: 'gram (+ dat.)', pos: 'adjective', en: 'hostile, angry (towards)', de: 'feindlich gesinnt, gram' },
    { id: 'starc', head: 'starc', la: 'starc', pos: 'adjective', en: 'strong; great, mighty; harsh', de: 'stark; groß, gewaltig' },
    { id: 'snel', head: 'snel', la: 'snel, snelle', pos: 'adjective', en: 'quick; bold, valiant', de: 'schnell; tapfer' },
    { id: 'stolz', head: 'stolz', la: 'stolz', pos: 'adjective', en: 'splendid, stately; proud', de: 'herrlich, stattlich; stolz' },
    { id: 'lobelich', head: 'lobelîch', la: 'lobelîch', pos: 'adjective', en: 'praiseworthy', de: 'löblich, preiswürdig' },
    { id: 'unverzaget', head: 'unverzaget', la: 'unverzaget', pos: 'adjective', en: 'undaunted', de: 'unverzagt' },
    { id: 'undertan', head: 'undertân', la: 'undertân (+ dat.)', pos: 'adjective', en: 'subject (to), serving', de: 'untertan' },
    { id: 'scharpf', head: 'scharpf', la: 'scharpf, scarpf', pos: 'adjective', en: 'sharp; fierce', de: 'scharf; hart' },
    { id: 'jaemerliche', head: 'jæmerlîche', la: 'jæmerlîche', pos: 'adverb', en: 'miserably, wretchedly', de: 'jämmerlich, auf klägliche Weise' },
    { id: 'sit', head: 'sît', la: 'sît, sint', pos: 'adverb, conjunction', en: 'later, afterwards; since', de: 'später, seitdem; seit, da' },
    { id: 'unz', head: 'unz', la: 'unz', pos: 'preposition, conjunction', en: 'until, up to', de: 'bis' }
  ],

  grammarCards: [
    { id: 'mh9-hebung', front: 'Hebung, Senkung, Auftakt', back: 'beat, dip, upbeat (unstressed syllables before the first beat)' },
    { id: 'mh9-stumpf', front: 'stumpfe Kadenz', back: 'last beat on a final stressed syllable (kraft), or short syllable + e (degen)' },
    { id: 'mh9-klingend', front: 'klingende Kadenz', back: 'long syllable + unstressed syllable, filling two beats (Uote)' },
    { id: 'mh9-short', front: 'Why does degen rhyme as stumpf?', back: 'Its stressed syllable is short (short vowel + one consonant + vowel)' },
    { id: 'mh9-proof', front: 'What do stumpf endings like sagen prove?', back: 'The vowel was still short around 1200; lengthening came later' },
    { id: 'mh9-couplet', front: 'Reimpaarvers', back: 'four-beat rhyming couplet (aa bb) of the courtly romances' },
    { id: 'mh9-brechung', front: 'Reimbrechung', back: 'a sentence ends inside a rhyme pair: dem volget sælde und êre. / des gît …' },
    { id: 'mh9-stanza', front: 'Nibelungen stanza', back: 'four long lines aabb; on-verse 4 beats, off-verse 3, last off-verse 4' },
    { id: 'mh9-caesura', front: 'Zäsur, Anvers, Abvers', back: 'pause in the long line; first half-line; second half-line' },
    { id: 'mh9-eighth', front: 'Bartsch’s rule for the eighth half-line', back: 'a missing dip can only be between the 2nd and 3rd beats' },
    { id: 'mh9-accent', front: 'Bartsch’s acute accents (Búrgónden)', back: 'mark beats on syllables a reader might not stress' },
    { id: 'mh9-fourth', front: 'The fourth line of a Nibelungen stanza', back: 'often reflects or points ahead (dar umbe muosen degene vil verlíesén den lîp)' },
    { id: 'mh9-pure', front: 'reiner Reim', back: 'pure rhyme: identical sounds from the last stressed vowel; the courtly norm' },
    { id: 'mh9-schlag', front: 'Schlagreim', back: 'adjacent words rhyme: Ich minne, sinne' },
    { id: 'mh9-waise', front: 'Waise', back: 'an unrhymed line within a rhymed stanza' },
    { id: 'mh9-canzone', front: 'Kanzone', back: 'Aufgesang (two Stollen) + Abgesang' },
    { id: 'mh9-ton', front: 'Ton', back: 'a poet’s stanza form and melody together, his own property' },
    { id: 'mh9-date', front: 'Date of the Nibelungenlied', back: 'around 1200 (Bartsch: before 1150, reworked c. 1170; no longer accepted)' },
    { id: 'mh9-offices', front: 'marschalc, truhsæze, schenke, kamerære', back: 'the four court offices: horses, food, drink, treasure and wardrobe' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'How many long lines does a Nibelungen stanza have?', options: ['four', 'two', 'six', 'eight'], answer: 0, explain: 'Bartsch: „Die Nibelungenstrophe ist vierzeilig.“' },
    { id: 'e2', type: 'mc', prompt: 'What divides each long line?', options: ['the caesura, into on-verse and off-verse', 'a rhyme', 'a refrain', 'nothing: the line is unbroken'], answer: 0, explain: '„jede Zeile zerfällt durch die feststehende Cäsur in zwei Theile“.' },
    { id: 'e3', type: 'mc', prompt: 'Which half-line has four beats and a stumpf ending?', options: ['the off-verse of the last line', 'the off-verse of the first line', 'every on-verse', 'none'], answer: 0, explain: 'The extra beat gives the stanza its heavy close.' },
    { id: 'e4', type: 'mc', prompt: 'A klingend cadence is:', options: ['a long syllable + an unstressed syllable, filling two beats', 'any two-syllable ending', 'a line ending in a vowel', 'a rhyme on a bell sound'], answer: 0, explain: 'Úotè: long uo + e.' },
    { id: 'e5', type: 'mc', prompt: 'Why does <span class="la">degen</span> rhyme as stumpf, but <span class="la">Uote</span> as klingend?', options: ['dëgen has a short stressed syllable, Uote a long one', 'dëgen is masculine, Uote feminine', 'Uote is a name', 'dëgen has fewer letters'], answer: 0, explain: 'Short open syllable + e counts as one beat.' },
    { id: 'e6', type: 'mc', prompt: 'What do Bartsch’s acute accents (<span class="la">Búrgónden</span>) mark?', options: ['beats on syllables a reader might not stress', 'long vowels', 'words borrowed from French', 'the stressed syllable of every word'], answer: 0, explain: '„Bezeichnen wir die Hebung durch den Acutus …“' },
    { id: 'e7', type: 'mc', prompt: 'How many beats in <span class="la">vil verlíesén den lîp</span> (2,4)?', options: ['four', 'three', 'two', 'five'], answer: 0, explain: 'víl ver-líe-sén den líp: the eighth half-line, with no dip between the 2nd and 3rd beats.' },
    { id: 'e8', type: 'mc', prompt: 'The romances of Hartmann are written in:', options: ['four-beat rhyming couplets', 'Nibelungen stanzas', 'unrhymed long lines', 'prose'], answer: 0, explain: 'Reimpaarverse, aa bb.' },
    { id: 'e9', type: 'mc', prompt: '<span class="la">dem volget sælde und êre. / des gît gewisse lêre</span> shows:', options: ['Reimbrechung: the sentence ends inside the rhyme pair', 'a Waise', 'a caesura rhyme', 'assonance'], answer: 0, explain: 'êre : lêre rhyme across a sentence boundary.' },
    { id: 'e10', type: 'mc', prompt: '<span class="la">Ich minne, sinne</span> is an example of:', options: ['Schlagreim, adjacent words rhyming', 'a Waise', 'Kreuzreim', 'assonance'], answer: 0, explain: 'Walther, L 47,16.' },
    { id: 'e11', type: 'mc', prompt: 'When was the Nibelungenlied as we have it composed, on the usual modern view?', options: ['around 1200', 'before 1150, as Bartsch thought', 'around 1350', 'in the 9th century'], answer: 0, explain: 'Rhyme technique of c. 1190–1205; Wolfram alludes to Rumolt.' },
    { id: 'e12', type: 'mc', prompt: 'What did Bartsch think of the Nibelungen stanza?', options: ['fine for lyric, not a happy choice for epic', 'the perfect epic form', 'a French import', 'too short for anything'], answer: 0, explain: 'Einleitung p. XXII.' },
    { id: 'e13', type: 'match', prompt: 'Match the court offices.', pairs: [
      ['marschalc', 'horses'], ['truhsæze', 'serving the food'], ['schenke', 'drink'], ['kamerære', 'treasure and wardrobe']
    ] },
    { id: 'e14', type: 'match', prompt: 'Match the rhyme terms.', pairs: [
      ['Paarreim', 'aa bb'], ['Kreuzreim', 'abab'], ['Waise', 'unrhymed line'], ['Schlagreim', 'adjacent words rhyme'], ['Zäsurreim', 'rhyme at the caesura']
    ] },
    { id: 'e15', type: 'match', prompt: 'Who is who at Worms?', pairs: [
      ['Gunther', 'the eldest king'], ['Kriemhilt', 'the kings’ sister'], ['Uote', 'their mother'], ['Dancrât', 'their father'], ['Hagene', 'of Tronege'], ['Volkêr', 'of Alzeije']
    ] },
    { id: 'e16', type: 'gap', prompt: '<span class="la">Ez wuohs in Búrgónden ein vil édel ___</span>', hint: 'young girl (rhymes with sîn)', answers: ['magedîn'], full: 'Ez wuohs in Búrgónden ein vil édel magedîn', explain: 'magedîn : sîn, a stumpf rhyme.' },
    { id: 'e17', type: 'gap', prompt: '<span class="la">diu frouwe was ir swester, die fürsten heten s’ in ir ___</span>', hint: 'care (rhymes with degen)', answers: ['pflegen'], full: 'diu frouwe was ir swester, die fürsten heten s’ in ir pflegen.', explain: 'degen : pflegen: two short syllables, a stumpf rhyme.' },
    { id: 'e18', type: 'gap', prompt: '<span class="la">sie sturben jæmerlîche sint von zweier edelen frouwen ___</span>', hint: 'hatred (rhymes with zît)', answers: ['nît'], full: 'sie sturben jæmerlîche sint von zweier edelen frouwen nît.', explain: 'Bartsch: nît, Haß. The stanza points ahead.' },
    { id: 'e19', type: 'paradigm', prompt: 'Classify each line ending as <em>stumpf</em> or <em>klingend</em>.', headers: ['Cadence'], rows: [
      { label: 'kraft', answers: ['stumpf'] },
      { label: 'degen', answers: ['stumpf'] },
      { label: 'Uote', answers: ['klingend'] },
      { label: 'güete', answers: ['klingend'] },
      { label: 'sagen', answers: ['stumpf'] }
    ] },
    { id: 'e20', type: 'paradigm', prompt: 'How many beats? (Bartsch’s description)', headers: ['Beats'], rows: [
      { label: 'on-verse', answers: ['4|four|vier'] },
      { label: 'off-verse, lines 1–3', answers: ['3|three|drei'] },
      { label: 'off-verse, line 4', answers: ['4|four|vier'] }
    ] },
    { id: 'e21', type: 'order', prompt: 'Put the half-lines of stanza 2 in order.', source: 'Kriemhild’s beauty: lines 1–2 of stanza 2', tokens: ['Ez wuohs in Búrgónden', 'ein vil édel magedîn,', 'daz in allen landen', 'niht schœners mohte sîn,'], explain: 'On-verse, off-verse; the off-verses rhyme: magedîn : sîn.' },
    { id: 'e22', type: 'translate', dir: 'mhd-de', source: 'Ze Wormze bî dem Rîne sie wonten mit ir kraft.', model: 'In Worms am Rhein wohnten sie mit ihrer Macht.', accepted: ['In Worms am Rhein wohnten sie mit ihrer Macht', 'Zu Worms am Rhein wohnten sie mit ihrer Macht', 'In Worms am Rhein wohnten sie mit ihrer Streitmacht', 'Zu Worms am Rhein wohnten sie mit ihrer Streitmacht', 'In Worms am Rhein wohnten sie mit ihrem Gefolge', 'Zu Worms am Rhein wohnten sie mit ihrem Gefolge', 'In Worms am Rhein lebten sie mit ihrer Macht', 'Zu Worms am Rhein lebten sie mit ihrer Macht', 'In Worms am Rhein lebten sie mit ihrem Gefolge', 'Zu Worms am Rhein lebten sie mit ihrem Gefolge', 'In Worms am Rhein wohnten sie in ihrer Macht', 'In Worms am Rhein wohnten sie mit ihrer Kraft', 'Zu Worms am Rhein wohnten sie mit ihrer Kraft'], explain: 'kraft: Bartsch, „hier die Menge der Dienstmannen“.' },
    { id: 'e23', type: 'translate', dir: 'mhd-en', source: 'siu wart ein scœne wîp.', model: 'She became a beautiful woman.', accepted: ['She became a beautiful woman', 'She grew into a beautiful woman', 'She grew to be a beautiful woman', 'She became a fair woman', 'She grew into a fair woman', 'She became a lovely woman', 'She grew into a lovely woman'] },
    { id: 'e24', type: 'translate', dir: 'de-mhd', source: 'Sie war eine schöne Frau.', model: 'Siu was ein schœne wîp.', accepted: ['Siu was ein schœne wîp', 'Si was ein schœne wîp', 'Sî was ein schœne wîp', 'Siu was ein schœnez wîp', 'Si was ein schœnez wîp', 'Siu was ein scœne wîp', 'Si was ein scœne wîp', 'Siu was ein schœne vrouwe', 'Si was ein schœne vrouwe', 'Siu was ein schœniu vrouwe', 'Si was ein schœniu vrouwe', 'Siu was ein schœne frouwe', 'Si was ein schœne frouwe'] },
    { id: 'e25', type: 'mc', prompt: '<span class="la">sie frumten starkiu wunder sît in Étzélen lant</span> points ahead to:', options: ['the Burgundians’ end in the land of Etzel (Attila)', 'a journey to Rome', 'Kriemhild’s wedding in Worms', 'a war with the Saxons only'], answer: 0, explain: 'Bartsch: sît adv., später.' },
    { id: 'e26', type: 'mc', prompt: 'Bartsch on <span class="la">der juncvrouwen tugende zierten ándériu wîp</span>:', options: ['her virtues would have adorned other women; juncvrouwe and wîp are not opposed here', 'other women adorned her with jewels', 'she was jealous of other women', 'the young women adorned the hall'], answer: 0, explain: '„In juncvrouwe und wîp liegt hier kein Gegensatz.“ Compare Lecture VIII.' },
    { id: 'e27', type: 'mc', prompt: 'The historical Burgundian kingdom on the Rhine was destroyed:', options: ['in 436/437 by Hunnic troops in Roman service', 'by Attila in person in 453', 'by Charlemagne', 'by the Saxons in 1200'], answer: 0, explain: 'Legend later joined the event to Attila.' }
  ],

  reading: {
    title: 'Nibelungenlied, stanzas 2–12: Kriemhild and the court at Worms',
    note: 'Authentic text: stanzas 2–12 of Bartsch’s edition (Leipzig 1866), pp. 1–3, transcribed from the page images. Each long line is printed in its two halves, the second indented. Bartsch’s accents mark metrical beats and are kept here; his elision dots are left out; his spelling sc for sch is kept. Tap any word.',
    text: 'Ez wuohs in Búrgónden\n\u2003\u2003ein vil édel magedîn,\ndaz in allen landen\n\u2003\u2003niht schœners mohte sîn,\nKriemhilt geheizen:\n\u2003\u2003siu wart ein scœne wîp.\ndar umbe muosen degene\n\u2003\u2003vil verlíesén den lîp.\n\nDer minneclîchen meide\n\u2003\u2003triuten wol gezam.\nir muotten küene recken:\n\u2003\u2003niemen was ir gram.\nâne mâzen schœne\n\u2003\u2003sô was ir edel lîp:\nder juncvrouwen tugende\n\u2003\u2003zierten ándériu wîp.\n\nIr pflâgen drîe künege\n\u2003\u2003edel unde rîch,\nGunther unde Gêrnôt,\n\u2003\u2003die recken lobelîch,\nund Gîselher der junge,\n\u2003\u2003ein ûz erwelter degen.\ndiu frouwe was ir swester,\n\u2003\u2003die fürsten heten s’ in ir pflegen.\n\nDie herren wâren milte,\n\u2003\u2003von arde hôhe erborn,\nmit kraft unmâzen küene,\n\u2003\u2003die recken ûz erkorn.\ndâ zen Búrgónden\n\u2003\u2003sô was ir lant genant.\nsie frumten starkiu wunder\n\u2003\u2003sît in Étzélen lant.\n\nZe Wormze bî dem Rîne\n\u2003\u2003sie wonten mit ir kraft.\nin diente von ir landen\n\u2003\u2003vil stolziu ritterscaft\nmit lobelîchen êren\n\u2003\u2003unz an ir endes zît.\nsie sturben jæmerlîche sint\n\u2003\u2003von zweier edelen frouwen nît.\n\nEin rîchiu küneginne,\n\u2003\u2003frou Uote ir muoter hiez:\nir vater der hiez Dancrât,\n\u2003\u2003der in diu erbe liez\nsît nâch sîme lebene,\n\u2003\u2003ein ellens rîcher man;\nder ouch in sîner jugende\n\u2003\u2003grôzer êren vil gewan.\n\nDie drîe künege wâren,\n\u2003\u2003als ich gesaget hân,\nvon vil hôhem ellen:\n\u2003\u2003in wâren undertân\nouch die besten recken,\n\u2003\u2003von den man hât gesaget,\nstárc únd vil küene,\n\u2003\u2003in scarpfen strîten unverzaget.\n\nDaz was von Tronege Hagene\n\u2003\u2003und ouch der bruoder sîn,\nDancwart der vil snelle,\n\u2003\u2003von Metzen Ortwîn,\ndie zwêne marcgrâven\n\u2003\u2003Gêre und Ekkewart,\nVolkêr von Alzeije,\n\u2003\u2003mit ganzem ellen wol bewart.\n\nRûmólt der kuchenmeister,\n\u2003\u2003ein ûz erwelter degen,\nSindolt und Hûnolt,\n\u2003\u2003dise hérren muosen pflegen\ndes hoves unt der êren,\n\u2003\u2003der drîer künege man.\nsie heten noch manegen recken,\n\u2003\u2003des ich genennen niene kan.\n\nDancwart der was marscalch:\n\u2003\u2003dô was der neve sîn\ntruhsǽzé des küneges,\n\u2003\u2003von Metzen Ortwîn.\nSindolt der was scenke,\n\u2003\u2003ein ûz erwelter degen.\nHûnólt was kamerære:\n\u2003\u2003sie kunden hôher êren pflegen.\n\nVon des hoves krefte\n\u2003\u2003und von ir wîten kraft,\nvon ir vil hôhen werdekeit\n\u2003\u2003und von ir ritterscaft,\nder die herren pflâgen\n\u2003\u2003mit vröuden al ir leben,\ndes enkunde iu ze wâre\n\u2003\u2003niemen gar ein ende geben.',
    translations: [
      { label: 'German translation', text: 'Es wuchs in Burgund ein sehr edles Mädchen heran, so schön, dass es in allen Ländern nichts Schöneres geben konnte, Kriemhild genannt: Sie wurde eine schöne Frau. Ihretwegen mussten viele Helden das Leben verlieren. Dem lieblichen Mädchen gebührte es wohl, geliebt zu werden. Kühne Recken begehrten sie; niemand war ihr feind. Über alle Maßen schön war ihre edle Gestalt; die Tugenden der Jungfrau hätten andere Frauen schmücken können. Drei Könige, edel und mächtig, sorgten für sie, Gunther und Gernot, die preiswürdigen Recken, und Giselher der Junge, ein auserlesener Held. Die Herrin war ihre Schwester; die Fürsten hatten sie in ihrer Obhut. Die Herren waren freigebig, von hoher Abstammung, über die Maßen kühn und stark, die auserwählten Recken. Bei den Burgunden, so hieß ihr Land. Sie vollbrachten später große Taten in Etzels Land. Zu Worms am Rhein wohnten sie mit ihrer Macht. Ihnen diente aus ihren Ländern eine sehr stattliche Ritterschaft mit rühmlichen Ehren bis an ihr Lebensende. Sie starben später jämmerlich durch den Hass zweier edler Frauen. Eine mächtige Königin, Frau Ute, hieß ihre Mutter. Ihr Vater hieß Dankrat, der ihnen nach seinem Leben das Erbe hinterließ, ein Mann reich an Kraft, der auch in seiner Jugend viel großes Ansehen gewann. Die drei Könige waren, wie ich gesagt habe, von sehr großer Kraft. Ihnen waren auch die besten Recken untertan, von denen man je erzählt hat, stark und sehr kühn, in harten Kämpfen unverzagt. Das waren Hagen von Tronje und auch sein Bruder Dankwart, der sehr Tapfere, Ortwin von Metz, die beiden Markgrafen Gere und Eckewart, Volker von Alzey, mit voller Kraft wohl gerüstet. Rumold der Küchenmeister, ein auserlesener Held, Sindold und Hunold: Diese Herren hatten für den Hof und seine Ehre zu sorgen, Gefolgsleute der drei Könige. Sie hatten noch viele Recken, die ich nicht alle nennen kann. Dankwart war Marschall; sein Verwandter Ortwin von Metz war Truchsess des Königs. Sindold war Mundschenk, ein auserlesener Held. Hunold war Kämmerer: Sie verstanden es, für hohe Ehre zu sorgen. Von der Macht des Hofes und von ihrer weitreichenden Kraft, von ihrer sehr hohen Würde und von ihrem ritterlichen Leben, das die Herren ihr Leben lang in Freuden führten, davon könnte euch wahrlich niemand vollständig berichten.' },
      { label: 'English translation', text: 'In Burgundy there grew up a most noble maiden; in all the lands there could be nothing more beautiful. She was called Kriemhild, and she became a beautiful woman; because of her many warriors were to lose their lives. It well befitted the lovely maiden to be loved. Bold warriors desired her; no one was hostile to her. Beautiful beyond measure was her noble person; the young lady’s virtues would have adorned other women. Three kings had her in their care, noble and mighty: Gunther and Gernot, warriors worthy of praise, and Giselher the young, an excellent hero. The lady was their sister; the princes had her in their keeping. The lords were generous, nobly born, of strength and courage beyond measure, the chosen warriors. Their land was called the land of the Burgundians. Later they performed great deeds in Etzel’s land. At Worms on the Rhine they lived with all their power. A most splendid knighthood from their lands served them with honour and praise until their end. Later they died wretchedly through the hatred of two noble women. A mighty queen, the lady Uote, was their mother. Their father was called Dancrat, who left them their inheritance after his life was over, a man rich in strength, who in his youth too won great honour. The three kings, as I have said, were of very great strength. Subject to them were also the best warriors that have ever been told of, strong and very bold, undaunted in fierce battles. These were Hagen of Tronege and his brother too, Dancwart the bold; Ortwin of Metz; the two margraves Gere and Eckewart; Volker of Alzey, well equipped with all courage. Rumolt the master of the kitchen, an excellent hero; Sindolt and Hunolt: these lords had charge of the court and its honour, vassals of the three kings. They had many more warriors whom I cannot name. Dancwart was the marshal; his kinsman Ortwin of Metz was the king’s steward. Sindolt was cupbearer, an excellent hero. Hunolt was chamberlain: they knew how to uphold high honour. Of the court’s might and of their far-reaching power, of their very high dignity and of their knightly life, which the lords led in joy all their lives long, no one could truly tell you to the end.' }
    ],
    notes: [
      { ref: '2 Ez wuohs in Búrgónden / ein vil édel magedîn', html: 'Bartsch: <span class="la">Burgonden</span> is properly the people, and also the name of the land; <span class="la">vil</span> intensifies; <span class="la">edel</span>, “of noble birth”; <span class="la">magedîn</span>, neuter, from <span class="la">maget</span>. His accents put beats on <span class="la">Búr-</span> and <span class="la">-gón-</span> side by side, and on <span class="la">é-</span> of <span class="la">édel</span> rather than on <span class="la">vil</span>.' },
      { ref: '2 daz in allen landen / niht schœners mohte sîn', html: 'Bartsch: understand “of such a kind” before <span class="la">daz</span>; <span class="la">schœners</span> is a genitive depending on <span class="la">niht</span>, “nothing more beautiful” (Lecture VII). Note <span class="la">schœners</span> with <span class="la">sch</span> here, <span class="la">scœne</span> with <span class="la">sc</span> in the next line: Bartsch follows the manuscript’s mixed spelling.' },
      { ref: '2 dar umbe muosen degene / vil verlíesén den lîp', html: '<span class="la">dar umbe</span>: “on her account” (Bartsch: um derentwillen). <span class="la">degene</span>: genitive plural depending on <span class="la">vil</span>, “many warriors”. <span class="la">lîp</span>: “life” (Bartsch: Leben; Lecture VIII). The eighth half-line has four beats, two of them meeting on <span class="la">-líe-sén</span>; the stanza already announces the end.' },
      { ref: '3 Der minneclîchen meide / triuten wol gezam', html: 'Bartsch: <span class="la">meide</span> dat. sing. of <span class="la">meit</span> = <span class="la">maget</span>; <span class="la">triuten</span>, “to love”; the infinitive has a passive sense: “it befitted her well to be loved”.' },
      { ref: '3 ir muotten küene recken: / niemen was ir gram', html: 'Bartsch: <span class="la">muoten</span> with the genitive, “to desire”; <span class="la">ir</span> is the genitive “her”. <span class="la">gram</span> + dative, “hostile to”.' },
      { ref: '3 der juncvrouwen tugende / zierten ándériu wîp', html: 'Bartsch: she had so many virtues that she could have adorned other women with them; <span class="la">zierten</span> is past subjunctive. „In <span class="la">juncvrouwe</span> und <span class="la">wîp</span> liegt hier kein Gegensatz“ (compare Lecture VIII).' },
      { ref: '4 Ir pflâgen drîe künege / edel unde rîch', html: 'Bartsch: <span class="la">pflegen</span> with the genitive, “they cared for her, protected her”; <span class="la">drîe</span> is the inflected form of <span class="la">drî</span>; <span class="la">rîch</span>, “mighty” (not only “rich”).' },
      { ref: '4 diu frouwe was ir swester, / die fürsten heten s’ in ir pflegen', html: 'Bartsch: <span class="la">frouwe</span> here names a noble young woman; <span class="la">ir</span> is the genitive plural, “of them”: in the Nibelungenlied it is not yet an inflected possessive. <span class="la">s’</span> = <span class="la">sie</span>. <span class="la">degen : pflegen</span>: both stressed syllables are short, so the rhyme is <em>stumpf</em>.' },
      { ref: '5 Die herren wâren milte, / von arde hôhe erborn', html: 'Bartsch: <span class="la">milte</span>, “generous”, the quality most praised in princes in medieval poetry; <span class="la">arde</span>, dative of <span class="la">art</span>, “descent”.' },
      { ref: '5 dâ zen Búrgónden / sô was ir lant genant', html: 'Bartsch: “there among the Burgundians”; in Middle High German <span class="la">ze</span> stands before names of peoples and places where modern German has none.' },
      { ref: '5 sie frumten starkiu wunder / sît in Étzélen lant', html: 'Bartsch: <span class="la">frumen</span>, “to perform”; <span class="la">starkiu wunder</span>, “great, wondrous deeds”; <span class="la">sît</span>, “later”. Etzel is Attila. Another eighth half-line with the missing dip between the second and third beats.' },
      { ref: '6 Ze Wormze bî dem Rîne / sie wonten mit ir kraft', html: 'Bartsch: <span class="la">kraft</span> here means the body of their retainers, their armed following.' },
      { ref: '6 sie sturben jæmerlîche sint / von zweier edelen frouwen nît', html: 'Bartsch: <span class="la">jæmerlîche</span>, “wretchedly”; <span class="la">sint</span> = <span class="la">sît</span>, “later”; <span class="la">von</span>, “because of”; <span class="la">nît</span>, “hatred”. The two women are Kriemhild and Brünhild.' },
      { ref: '7 der in diu erbe liez / sît nâch sîme lebene', html: 'Bartsch: <span class="la">diu erbe</span>, plural of <span class="la">daz erbe</span>, the inherited lands; <span class="la">sîme</span> from <span class="la">sîneme</span>, “his”; <span class="la">ellens</span> is a genitive depending on <span class="la">rîcher</span>, “rich in strength”.' },
      { ref: '8 ouch die besten recken / … / stárc únd vil küene', html: 'Bartsch: <span class="la">beste</span>, like <span class="la">guot</span>, in the sense “brave”; <span class="la">scarpfen</span>, “sharp, fierce”. In <span class="la">stárc únd vil küene</span> the first two beats meet, and <span class="la">küene</span> ends <em>klingend</em>.' },
      { ref: '9 Daz was von Tronege Hagene', html: 'Bartsch: “these warriors were the following”. <span class="la">marcgrâve</span>, a royal judge of a border province; <span class="la">ganz</span>, “complete”; <span class="la">bewart</span>, “equipped”. Tronege has been identified with several places; none is certain.' },
      { ref: '10 dise hérren muosen pflegen / des hoves unt der êren', html: 'Bartsch: they held the court offices, and saw to the court’s representation, especially when guests arrived and at festivals. <span class="la">man</span> is plural, “vassals”. His accent on <span class="la">hérren</span> keeps the beat off <span class="la">dise</span>.' },
      { ref: '10 des ich genennen niene kan', html: 'Bartsch: <span class="la">des</span> depends on <span class="la">niene</span> (from <span class="la">niht ne</span>), which takes the genitive like <span class="la">niht</span>: “of whom I cannot name (any)”. In his introduction he uses this half-line as the model of the eighth half-line with every dip filled: <span class="la">des ích genénnen níene kán</span>.' },
      { ref: '11 Dancwart der was marscalch: / dô was der neve sîn', html: 'Bartsch: <span class="la">marscalch</span>, usually <span class="la">marschalc</span>, “master of the horse”; <span class="la">dô</span>, “on the other hand”. <span class="la">truhsæze</span>, the officer who served the food; <span class="la">scenke</span> = <span class="la">schenke</span>, cupbearer; <span class="la">kamerære</span>, chamberlain, in charge of the treasure and the wardrobe.' },
      { ref: '12 des enkunde iu ze wâre / niemen gar ein ende geben', html: 'Bartsch: <span class="la">ze wâre</span>, “truly”; <span class="la">gar ein ende geben</span> with the genitive, “to tell something completely, to the end”: “no one could truly give you a full account of it”. <span class="la">enkunde</span>: <span class="la">en</span> + past subjunctive (Lecture VII).' }
    ],
    glosses: {
      'ez': 'there (dummy subject)', 'wuohs': 'grew up (wahsen)', 'in': 'in; them (dat.)', 'búrgónden': 'Burgundians; Burgundy', 'ein': 'a', 'vil': 'very; many (+ gen.)', 'édel': 'noble', 'edel': 'noble', 'magedîn': 'young girl, maiden',
      'daz': 'that; so that', 'allen': 'all', 'landen': 'lands', 'niht': 'nothing (+ gen.)', 'schœners': 'more beautiful (gen.)', 'mohte': 'could (mugen)', 'sîn': 'be; his', 'kriemhilt': 'Kriemhild', 'geheizen': 'called, named', 'siu': 'she', 'wart': 'became (wërden)', 'scœne': 'beautiful (schœne)', 'wîp': 'woman, women',
      'dar': 'there: dar umbe, on her account', 'umbe': 'about: dar umbe, therefore', 'muosen': 'had to (müezen)', 'degene': 'warriors (gen. pl.)', 'verlíesén': 'lose (verliesen)', 'den': 'the; whom', 'lîp': 'life',
      'der': 'the; who; he', 'minneclîchen': 'lovely', 'meide': 'maiden (dat. of meit)', 'triuten': 'to love, be loved', 'wol': 'well', 'gezam': 'befitted (gezëmen)', 'ir': 'her (gen./dat.); their; you', 'muotten': 'desired (muoten + gen.)', 'küene': 'bold', 'recken': 'warriors',
      'niemen': 'no one', 'was': 'was', 'gram': 'hostile (+ dat.)', 'âne': 'without: âne mâzen, beyond measure', 'mâzen': 'measure (dat. pl.)', 'schœne': 'beautiful', 'sô': 'so', 'juncvrouwen': 'young lady (gen.)', 'tugende': 'virtues', 'zierten': 'would have adorned (zieren)', 'ándériu': 'other (pl.)',
      'pflâgen': 'cared for (pflëgen + gen.)', 'drîe': 'three', 'künege': 'kings', 'unde': 'and', 'rîch': 'mighty', 'gunther': 'Gunther', 'gêrnôt': 'Gernot', 'die': 'the; who', 'lobelîch': 'praiseworthy', 'und': 'and', 'gîselher': 'Giselher', 'junge': 'young',
      'ûz': 'out: ûz erwelt, chosen, excellent', 'erwelter': 'chosen (erwelt)', 'degen': 'warrior, hero', 'diu': 'the', 'frouwe': 'lady', 'swester': 'sister', 'fürsten': 'princes', 'heten': 'had', 's': 'sie: her', 'pflegen': 'care, keeping; to see to (+ gen.)',
      'herren': 'lords', 'wâren': 'were', 'milte': 'generous', 'von': 'of, from; because of', 'arde': 'descent (dat. of art)', 'hôhe': 'high(ly)', 'erborn': 'born', 'mit': 'with', 'kraft': 'strength; armed following', 'unmâzen': 'beyond measure', 'erkorn': 'chosen: ûz erkorn, picked',
      'dâ': 'there', 'zen': 'ze den: among the', 'lant': 'land', 'genant': 'called', 'sie': 'they', 'frumten': 'performed (frumen)', 'starkiu': 'great, mighty', 'wunder': 'wonders, wondrous deeds', 'sît': 'later', 'étzélen': 'Etzel’s (Attila’s)',
      'ze': 'at; to', 'wormze': 'Worms', 'bî': 'by, on', 'dem': 'the', 'rîne': 'Rhine', 'wonten': 'lived (wonen)', 'diente': 'served', 'stolziu': 'splendid', 'ritterscaft': 'knighthood, the knights; knightly life', 'lobelîchen': 'praiseworthy', 'êren': 'honour(s)', 'unz': 'until', 'an': 'to, on', 'endes': 'end’s (gen.)', 'zît': 'time',
      'sturben': 'died (stërben)', 'jæmerlîche': 'wretchedly', 'sint': 'later (= sît)', 'zweier': 'of two', 'edelen': 'noble', 'frouwen': 'ladies, women', 'nît': 'hatred',
      'rîchiu': 'mighty', 'küneginne': 'queen', 'frou': 'lady (title)', 'uote': 'Uote', 'muoter': 'mother', 'hiez': 'was called (heizen)', 'vater': 'father', 'dancrât': 'Dancrat', 'erbe': 'inherited lands (pl.)', 'liez': 'left (lâzen)',
      'nâch': 'after', 'sîme': 'his (dat., from sîneme)', 'lebene': 'life (dat.)', 'ellens': 'in strength (gen. of ellen)', 'rîcher': 'rich', 'man': 'man; vassals (pl.); one', 'ouch': 'also', 'sîner': 'his', 'jugende': 'youth', 'grôzer': 'great (gen. pl.)', 'gewan': 'won (gewinnen)',
      'als': 'as', 'ich': 'I', 'gesaget': 'said', 'hân': 'have', 'hôhem': 'high, great', 'ellen': 'courage, strength', 'undertân': 'subject', 'besten': 'best, bravest', 'hât': 'has', 'stárc': 'strong', 'únd': 'and', 'scarpfen': 'fierce (scharpf)', 'strîten': 'battles', 'unverzaget': 'undaunted',
      'tronege': 'Tronege', 'hagene': 'Hagen', 'bruoder': 'brother', 'dancwart': 'Dancwart', 'snelle': 'bold, valiant', 'metzen': 'Metz', 'ortwîn': 'Ortwin', 'zwêne': 'two (m.)', 'marcgrâven': 'margraves', 'gêre': 'Gere', 'ekkewart': 'Eckewart', 'volkêr': 'Volker', 'alzeije': 'Alzey', 'ganzem': 'complete, full', 'bewart': 'equipped',
      'rûmólt': 'Rumolt', 'kuchenmeister': 'master of the kitchen', 'sindolt': 'Sindolt', 'hûnolt': 'Hunolt', 'dise': 'these', 'hérren': 'lords', 'hoves': 'court (gen.)', 'unt': 'and', 'drîer': 'of three', 'noch': 'still, besides', 'manegen': 'many a', 'des': 'of whom; of that', 'genennen': 'name', 'niene': 'not at all', 'kan': 'can',
      'marscalch': 'marshal, master of the horse', 'dô': 'then; on the other hand', 'neve': 'nephew, kinsman', 'truhsǽzé': 'steward', 'küneges': 'king’s', 'scenke': 'cupbearer', 'hûnólt': 'Hunolt', 'kamerære': 'chamberlain', 'kunden': 'knew how (kunnen)', 'hôher': 'high (gen. pl.)',
      'krefte': 'might (dat. of kraft)', 'wîten': 'wide, far-reaching', 'hôhen': 'high', 'werdekeit': 'dignity, worth', 'vröuden': 'joy (dat.)', 'al': 'all', 'leben': 'life', 'enkunde': 'could not (en + kunde)', 'iu': 'to you', 'wâre': 'truth: ze wâre, truly', 'gar': 'entirely', 'ende': 'end', 'geben': 'give'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Who are Kriemhild’s brothers?', options: ['Gunther, Gernot and Giselher', 'Hagen and Dancwart', 'Sindolt and Hunolt', 'Etzel and Volker'], answer: 0, explain: 'Stanza 4.' },
      { id: 'r2', type: 'mc', prompt: 'Where does the court live?', options: ['At Worms on the Rhine', 'In Etzel’s land', 'At Metz', 'At Alzey'], answer: 0, explain: 'Ze Wormze bî dem Rîne (6,1).' },
      { id: 'r3', type: 'mc', prompt: 'What is Rumolt’s office?', options: ['Master of the kitchen', 'Marshal', 'Cupbearer', 'Chamberlain'], answer: 0, explain: 'Rûmólt der kuchenmeister (10,1).' },
      { id: 'r4', type: 'mc', prompt: 'According to stanza 6, what will cause the kings’ death?', options: ['The hatred of two noble women', 'A plague', 'A war with Metz', 'Old age'], answer: 0, explain: 'von zweier edelen frouwen nît.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'The off-verses of lines 1–3 of a Nibelungen stanza have:', options: ['three beats', 'four beats', 'two beats', 'five beats'], answer: 0, explain: '„die hintere drei Hebungen“.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">güete</span> at the end of a line is:', options: ['klingend', 'stumpf', 'a Waise', 'unmetrical'], answer: 0, explain: 'Long üe + e.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">leben : geben</span> rhyme as:', options: ['stumpf, because the stressed syllables are short', 'klingend', 'assonance', 'identical rhyme'], answer: 0, explain: 'Short open syllables, counted as one beat.' },
      { id: 't4', type: 'mc', prompt: 'The rhyme scheme of the Nibelungen stanza is:', options: ['aabb', 'abab', 'abba', 'aaaa'], answer: 0, explain: 'The long lines rhyme in pairs.' },
      { id: 't5', type: 'mc', prompt: 'The canzone consists of:', options: ['Aufgesang (two Stollen) and Abgesang', 'four long lines', 'rhyming couplets', 'a refrain only'], answer: 0, explain: 'Walther’s song to Mâze: 3 + 3 + 5.' },
      { id: 't6', type: 'mc', prompt: 'A poet’s Ton is:', options: ['his stanza form together with its melody', 'his tone of voice', 'his dialect', 'his patron'], answer: 0, explain: 'Bartsch p. XIV.' },
      { id: 't7', type: 'gap', prompt: '<span class="la">sie heten noch manegen recken, des ich genennen niene ___</span>', hint: 'can (rhymes with man)', answers: ['kan'], full: 'sie heten noch manegen recken, des ich genennen niene kan.', explain: 'Bartsch’s model eighth half-line.' },
      { id: 't8', type: 'mc', prompt: 'Which manuscript does Bartsch’s text follow?', options: ['B (St Gall)', 'A (Munich)', 'C (Karlsruhe)', 'the Codex Manesse'], answer: 0, explain: 'The nôt version.' },
      { id: 't9', type: 'translate', dir: 'mhd-de', source: 'Ir vater der hiez Dancrât.', model: 'Ihr Vater hieß Dankrat.', accepted: ['Ihr Vater hieß Dankrat', 'Ihr Vater hieß Dancrat', 'Ihr Vater, der hieß Dankrat', 'Ihr Vater, der hieß Dancrat', 'Ihr Vater der hieß Dankrat'] },
      { id: 't10', type: 'translate', dir: 'mhd-en', source: 'niemen was ir gram.', model: 'No one was hostile to her.', accepted: ['No one was hostile to her', 'Nobody was hostile to her', 'No one was her enemy', 'Nobody was her enemy', 'No one was angry with her', 'Nobody was angry with her', 'No one bore her ill will', 'Nobody bore her ill will', 'No one hated her', 'Nobody hated her'] },
      { id: 't11', type: 'mc', prompt: 'Who was Etzel?', options: ['Attila, king of the Huns', 'Kriemhild’s father', 'the bishop of Passau', 'a Burgundian marshal'], answer: 0, explain: 'Étzélen lant: the land of the Huns.' },
      { id: 't12', type: 'mc', prompt: 'Bartsch dated the Nibelungenlied:', options: ['before 1150, reworked c. 1170', 'around 1200', 'around 1300', 'to the 5th century'], answer: 0, explain: 'Einleitung p. XIV; modern scholars prefer around 1200.' }
    ]
  },

  reference: [
    { title: 'The Nibelungen stanza', headers: ['Half-line', 'Beats', 'Ending'], rows: [
      ['on-verse, lines 1–4', '4', 'usually klingend'], ['off-verse, lines 1–3', '3', 'stumpf'], ['off-verse, line 4', '4', 'stumpf']
    ] },
    { title: 'Cadences', headers: ['Cadence', 'Examples'], rows: [
      ['stumpf, one syllable', 'kraft, sîn'], ['stumpf, two syllables', 'degen, leben, sagen'], ['klingend', 'Uote, güete, êre']
    ] },
    { title: 'Rhyme and stanza terms', headers: ['Term', 'Meaning'], rows: [
      ['Paarreim', 'aa bb'], ['Kreuzreim', 'abab'], ['Waise', 'unrhymed line'], ['Zäsurreim', 'rhyme at the caesura'], ['Binnenreim', 'rhyme inside a line'], ['Schlagreim', 'adjacent words rhyme'],
      ['Reimbrechung', 'sentence ends inside a rhyme pair'], ['Kanzone', 'Aufgesang (2 Stollen) + Abgesang'], ['Ton', 'stanza form + melody']
    ] },
    { title: 'Court offices', headers: ['Office', 'Duty'], rows: [
      ['marschalc', 'horses'], ['truhsæze', 'serving food'], ['schenke', 'drink'], ['kamerære', 'treasure, wardrobe']
    ] }
  ]
});
