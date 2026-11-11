/*
 * Middle Low German — Lecture I
 * Content file only. The engine (app.js) reads this structure; no code here.
 * Normalised spelling follows the dictionaries (long vowels with circumflex).
 * The reading is a constructed charter in the style of Lübeck documents, not an authentic text.
 * Every form and historical claim should be checked; see CONTENT-CHECKS.md.
 */
Viator.addLecture('mnd', {
  id: 'mnd-01',
  number: 1,
  title: 'Ik make, wî maket',
  subtitle: 'Reading Low German through German: the sound key, the spelling, the present tense, the shape of a charter',
  minutes: 60,

  intro: `
    <p>Middle Low German was the written language of northern Germany from the thirteenth to the sixteenth century, and the working language of the Hanse. Town councils, merchants and Hanseatic diets wrote their charters, letters, accounts and recesses in it, from Bruges and London to Bergen, Novgorod and Reval. If you want to read those documents in the original, this is the language.</p>
    <p>One premise needs adjusting at the outset. Middle Low German is not an older form of the German you speak. Standard German grew out of <em>High</em> German, the dialects of the centre and south; Middle Low German is the ancestor of the <em>Low</em> German dialects of the north, today’s Plattdeutsch. The two are sister languages. The decisive difference is that Low German never went through the High German consonant shift. Its consonants are therefore often closer to English and Dutch than to German: <span class="la">water</span>, not <em>Wasser</em>; <span class="la">ik</span>, not <em>ich</em>; <span class="la">dat</span>, not <em>das</em>.</p>
    <p>Your German is nonetheless the best tool you could have, because the differences are regular. Once you know a handful of correspondences, most words of a Hanseatic charter can be recognised from their German equivalents. This first lecture gives you that key.</p>
    <ol>
      <li><strong>The sound key.</strong> How German consonants and vowels correspond to Middle Low German ones, and why.</li>
      <li><strong>The spelling of the sources.</strong> There was no standard orthography. You will learn the common variations and the normalised spelling used in dictionaries and in this course.</li>
      <li><strong>The present tense</strong> of regular verbs, and the two essential irregular verbs <span class="la">sîn</span> “be” and <span class="la">hebben</span> “have”.</li>
      <li><strong>The article</strong> and the outline of the noun.</li>
      <li><strong>The shape of a charter</strong>, so that you know where in a document to look for what.</li>
    </ol>
    <p class="aside"><strong>A word on Latin.</strong> Many Hanseatic documents, especially before about 1370, are in Latin, and Middle Low German charters translate Latin formulae phrase by phrase. The Latin course in this app and this one support each other.</p>
  `,

  background: [
    {
      title: 'Low German and High German',
      html: `
        <p>The boundary between Low and High German is traditionally drawn along the <em>Benrath line</em>, named after a district of Düsseldorf. It runs roughly from Aachen through Düsseldorf-Benrath, north of Kassel, and east past Magdeburg towards the Oder. North of it, people traditionally said <span class="la">maken</span>; south of it, <em>machen</em>. It marks the northern limit of the High German consonant shift, which you met in the Latin course as the change that separates German <em>zwei, Wasser, Pfund</em> from English <em>two, water, pound</em>.</p>
        <p>Low German has three main stages:</p>
        <ul>
          <li><strong>Old Saxon</strong>, c. 800–1150, known mainly from the <em>Heliand</em>, a verse life of Christ from the ninth century. Old Saxon is closely related to Old English: the Saxons who settled in Britain came partly from the same region.</li>
          <li><strong>Middle Low German</strong>, c. 1200–1600, the subject of this course.</li>
          <li><strong>Modern Low German</strong> or Plattdeutsch, from the seventeenth century on, spoken but rarely written for official purposes.</li>
        </ul>
        <p>Middle Low German was not a dialect of German in the modern sense, a spoken variety beneath a written standard. For three centuries it was itself the written standard of the north: the language of law codes, town chronicles, devotional books and printed Bibles, as well as trade.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Map_of_the_Low_German_Dialects.svg/960px-Map_of_the_Low_German_Dialects.svg.png" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Map_of_the_Low_German_Dialects.svg/500px-Map_of_the_Low_German_Dialects.svg.png" alt="Map of the Low German dialect areas of northern Germany and the eastern Netherlands"><figcaption>The Low German dialects today, north of the Benrath line. Middle Low German is their common written ancestor. <span class="credit">Author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Map_of_the_Low_German_Dialects.svg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'The language of the Hanse',
      html: `
        <p>The Hanse began in the twelfth and thirteenth centuries as associations of German merchants trading abroad, and became a league of towns, the <span class="la">stede van der dûdeschen hanse</span>. Lübeck, refounded by Henry the Lion in 1159, became its centre. The first general diet (<em>Hansetag</em>) is traditionally dated to 1356 in Lübeck, though historians point out that town delegates met earlier and that the Hanse never had a founding moment or a constitution in the modern sense.</p>
        <p>Its four great foreign offices (<em>Kontore</em>) were at Bruges, London, Bergen and Novgorod. The London office, the <em>Steelyard</em> (<span class="la">Stâlhof</span>), stood on the Thames where Cannon Street station is now; it kept its privileges until 1598.</p>
        <p>Until the middle of the fourteenth century, town and Hanseatic records were written mainly in Latin. From about 1350 to 1370 the Lübeck chancery went over to Middle Low German, and the Hanse followed. A written form based largely on Lübeck usage spread around the Baltic. Scholars have called it the “Lübeck norm”, though how uniform it really was is debated. The language left a lasting mark on the Scandinavian languages: Danish and Norwegian <em>betale</em> and Swedish <em>betala</em> “pay” come from <span class="la">betalen</span>, Danish <em>borgmester</em> and Swedish <em>borgmästare</em> from <span class="la">borgermêster</span>, Swedish <em>fru</em> from <span class="la">vrouwe</span>, and the suffix <em>-het</em> (Swedish <em>frihet</em>) from <span class="la">-heit</span>.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ausbreitung_der_Hanse_um_das_Jahr_1400-Droysens_28.jpg/960px-Ausbreitung_der_Hanse_um_das_Jahr_1400-Droysens_28.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ausbreitung_der_Hanse_um_das_Jahr_1400-Droysens_28.jpg/500px-Ausbreitung_der_Hanse_um_das_Jahr_1400-Droysens_28.jpg|https://upload.wikimedia.org/wikipedia/commons/8/86/Ausbreitung_der_Hanse_um_das_Jahr_1400-Droysens_28.jpg" alt="Historical map of northern Europe showing the Hanse towns and their trading area around 1400"><figcaption><em>Die Ausbreitung der Hanse um das Jahr 1400</em>, from Gustav Droysen’s <em>Allgemeiner historischer Handatlas</em> (1886). A nineteenth-century view; modern research is more cautious about the Hanse’s boundaries. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Ausbreitung_der_Hanse_um_das_Jahr_1400-Droysens_28.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Decline, and what survives',
      html: `
        <p>In the sixteenth and seventeenth centuries the chanceries and printers of the north changed over to High German. The causes overlap: the decline of the Hanse, the prestige of the southern and central German courts, and the Reformation, whose central text was Luther’s High German Bible. A Low German Bible was printed at Lübeck in 1494, and Johannes Bugenhagen’s Low German version of Luther’s translation appeared there in 1533–34, but in the long run High German prevailed in writing. The last Hansetag met in 1669.</p>
        <p>Low German survived as the spoken language of the north, and Germany recognises it as a regional language under the European Charter for Regional or Minority Languages. Traces survive in northern Standard German too. The traditional Hamburg pronunciation “über’n s-pitzen S-tein s-tolpern” keeps the Low German <em>s</em> before consonants. And a number of everyday German words were taken from Low German, which is why they show no sign of the consonant shift: <em>Ufer</em>, <em>Hafen</em>, <em>Ebbe</em>, <em>Boot</em>, <em>Wrack</em>, <em>Laken</em>, <em>echt</em>, and <em>Lippe</em>, whose High German counterpart is <em>Lefze</em>.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/LB1494Kolophon.jpg/960px-LB1494Kolophon.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/LB1494Kolophon.jpg/500px-LB1494Kolophon.jpg|https://upload.wikimedia.org/wikipedia/commons/d/d5/LB1494Kolophon.jpg" alt="Printed page from an early book: the closing note of the 1494 Lübeck Bible"><figcaption>The colophon of the Lübeck Bible of 1494, printed by Steffen Arndes: the closing note that records the printing. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:LB1494Kolophon.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Sources, and how much we know',
      html: `
        <p>Much less is known about Middle Low German than about Latin. No contemporary wrote a grammar of it, and there were no Roman-style grammarians to describe its sounds. Everything is reconstructed from the texts themselves, from rhymes in verse, from comparison with the modern dialects and with related languages, and from the way scribes varied their spellings. Where this course is uncertain, it says so.</p>
        <p>The standard reference works are:</p>
        <ul>
          <li>Agathe Lasch, <em>Mittelniederdeutsche Grammatik</em> (1914), still the fullest grammar. Lasch became the first woman professor at the University of Hamburg; she was dismissed by the Nazi regime, deported in 1942 and murdered.</li>
          <li>Karl Schiller and August Lübben, <em>Mittelniederdeutsches Wörterbuch</em> (1875–81), and the shorter <em>Mittelniederdeutsches Handwörterbuch</em> by Lübben, completed by Christoph Walther (1888).</li>
          <li>The <em>Mittelniederdeutsches Handwörterbuch</em> begun by Agathe Lasch and Conrad Borchling in 1928 and continued by later editors.</li>
          <li>The great source editions: the <em>Hanserecesse</em>, the records of the Hanseatic diets (from 1870), and the <em>Hansisches Urkundenbuch</em> (from 1876).</li>
        </ul>
        <p>This course uses a normalised spelling close to the dictionaries’, with long vowels marked by a circumflex (<span class="la">hûs</span>, <span class="la">brêf</span>), so that you can look words up. The readings also show the text as a scribe might have written it.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Spegel der Sassen</p>
    <p>“Mirror of the Saxons”: the <em>Sachsenspiegel</em>. Eike von Repgow compiled this record of Saxon customary law around 1220–35, at the instance of his lord, Count Hoyer of Falkenstein. A Latin version came first and survives only in fragments; Eike then put the work into the vernacular. Its rhymed preface explains the title: the book shows the law of the Saxons as a mirror shows women their faces. It is one of the oldest prose works in any form of German, and it is Low German: <span class="la">spegel</span> for <em>Spiegel</em>, <span class="la">Sassen</span> for <em>Sachsen</em>.</p>
    <p class="small muted">Only the title words are quoted here. The wording of the preface differs between manuscripts and has not been checked for this course; Lecture II has authentic text from a printed edition.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Heidelberger_Sachsenspiegel_26v_-_Dorfgruendung.jpg/960px-Heidelberger_Sachsenspiegel_26v_-_Dorfgruendung.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Heidelberger_Sachsenspiegel_26v_-_Dorfgruendung.jpg/500px-Heidelberger_Sachsenspiegel_26v_-_Dorfgruendung.jpg|https://upload.wikimedia.org/wikipedia/commons/d/db/Heidelberger_Sachsenspiegel_26v_-_Dorfgruendung.jpg" alt="Illuminated manuscript page with coloured pictures of figures founding a village beside lines of text"><figcaption>Heidelberg <em>Sachsenspiegel</em> (Cod. Pal. germ. 164), early fourteenth century, fol. 26v: the founding of a village. The pictures beside the text illustrate the legal rules, line by line. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Heidelberger_Sachsenspiegel_26v_-_Dorfgruendung.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
  `,

  pronunciation: `
    <p>Our knowledge of how Middle Low German sounded is limited. It also varied by region and changed over four centuries. What follows is the consensus picture, with the uncertainties marked. For reading documents, pronunciation matters less than for Latin; its main use is to make the words recognisable.</p>

    <h3>Vowels</h3>
    <p>Long vowels are marked with a circumflex in this course, following the dictionaries: <span class="la">â ê î ô û</span>. The sources themselves mostly do not mark length.</p>
    <ul>
      <li><strong>No diphthongs for î and û.</strong> Middle Low German kept the old long <em>i</em> and <em>u</em> that High German turned into <em>ei</em> and <em>au</em>. <span class="la">hûs</span> is “Huus”, exactly as in modern Platt; <span class="la">tît</span> is “Tiet”; <span class="la">wîn</span> is “Wien”.</li>
      <li><strong>â</strong> as in <em>Vater</em>.</li>
      <li><strong>ê and ô</strong> roughly as in <em>Beet</em> and <em>Boot</em>. In reality there were several different long <em>e</em> and <em>o</em> sounds from different historical sources, which the spelling does not distinguish. Lasch numbered them (ê¹, ê², …), and the scholarly literature still uses her numbers. For reading, one value each is enough.</li>
      <li><strong>Short vowels</strong> are roughly as in German. Many short vowels in open syllables were lengthened (<span class="la">maken</span>, <span class="la">water</span>, <span class="la">vader</span>); the dictionaries do not mark these.</li>
      <li><strong>Umlaut</strong> existed in speech, as in German, but the sources rarely show it: <span class="la">lüde</span> “people” is usually written <span class="la">lude</span>.</li>
    </ul>

    <h3>Consonants</h3>
    <ul>
      <li><strong>p, t, k</strong> as in German, but where German has <em>pf</em>, <em>z</em>, <em>ss</em> or <em>ch</em>, Middle Low German has the plain consonant: <span class="la">pêrt</span>, <span class="la">tît</span>, <span class="la">water</span>, <span class="la">maken</span>.</li>
      <li><strong>s before a consonant</strong> is <em>s</em>, not <em>sch</em>, and is written so: <span class="la">slâpen</span> “schlafen”, <span class="la">snê</span> “Schnee”, <span class="la">swart</span> “schwarz”, <span class="la">stên</span>, <span class="la">spegel</span>. The old Hamburg “s-pitzer S-tein” is the living trace.</li>
      <li><strong>sch</strong> was probably <em>s</em> + <em>ch</em> in earlier Middle Low German, as in Dutch <em>schip</em>. Westphalian dialects still say “S-chinken”. Later it became the German <em>sch</em>; when and where is uncertain.</li>
      <li><strong>g</strong> was probably a fricative in many positions, as in modern Low German and Dutch: <span class="la">dach</span> “day”, <span class="la">wech</span> “way”. Scribes often wrote <span class="la">gh</span> before <em>e</em> and <em>i</em> (<span class="la">ghegheven</span>).</li>
      <li><strong>v</strong> at the start of a word is <em>f</em>, as in German <em>Vater</em>: <span class="la">vader</span>, <span class="la">vrouwe</span>, <span class="la">van</span>. <strong>w</strong> was probably a softer sound than German <em>w</em>, perhaps close to English <em>w</em>; this is uncertain.</li>
      <li><strong>Final devoicing</strong>, as in German, and often shown in the spelling: <span class="la">dach</span> but <span class="la">dage</span>, <span class="la">wech</span> but <span class="la">wege</span>, <span class="la">rât</span> but <span class="la">râde</span>. Here German habits are exactly right.</li>
    </ul>

    <h3>Stress</h3>
    <p>As in German: on the first syllable of the root, not on prefixes such as <span class="la">be-</span> and <span class="la">ge-</span>. <span class="la">be-TA-len</span>, <span class="la">KÔP-man</span>.</p>

    <h3>Spellings that survive in place names</h3>
    <p>Middle Low German and the neighbouring Rhineland dialects often marked a long vowel with a following <em>e</em> or <em>i</em>, as Dutch still does. You know the result from place names: <em>Soest</em> is pronounced “Soost”, <em>Coesfeld</em> “Koosfeld”, <em>Itzehoe</em> and <em>Bad Oldesloe</em> end in “-hoh” and “-loh”, and in the Rhineland <em>Troisdorf</em> is “Troosdorf” and <em>Grevenbroich</em> “Grevenbrooch”.</p>
    <p class="aside">There is no audio in this course. A modern German voice would teach the wrong vowels and consonants, and no synthetic Middle Low German voice exists.</p>
  `,

  grammar: [
    {
      title: '1. The key: no second sound shift',
      html: `
        <p>Between about the sixth and eighth centuries, the dialects of southern and central Germany changed their voiceless consonants <em>p, t, k</em>; <em>d</em> became <em>t</em> in the southern dialects, and Standard German followed them (<em>Tag, Tochter, tun</em>). The north took part in none of this. So wherever German has one of the shifted sounds, Middle Low German usually has the older one, often the same consonant as English:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>German</th><th>Middle Low German</th><th>English</th></tr></thead>
          <tbody>
            <tr><th colspan="3">German pf, ff, f ↔ p</th></tr>
            <tr><td>Pferd</td><td class="la">pêrt</td><td>—</td></tr>
            <tr><td>Apfel</td><td class="la">appel</td><td>apple</td></tr>
            <tr><td>Schiff</td><td class="la">schip</td><td>ship</td></tr>
            <tr><td>Dorf</td><td class="la">dorp</td><td>-thorpe (in place names)</td></tr>
            <tr><td>schlafen</td><td class="la">slâpen</td><td>sleep</td></tr>
            <tr><td>auf</td><td class="la">up</td><td>up</td></tr>
            <tr><th colspan="3">German z, tz, ss, s ↔ t</th></tr>
            <tr><td>Zeit</td><td class="la">tît</td><td>tide, time</td></tr>
            <tr><td>zu</td><td class="la">tô</td><td>to</td></tr>
            <tr><td>zwei</td><td class="la">twê</td><td>two</td></tr>
            <tr><td>Wasser</td><td class="la">water</td><td>water</td></tr>
            <tr><td>das, dass; was</td><td class="la">dat; wat</td><td>that; what</td></tr>
            <tr><td>Salz</td><td class="la">solt</td><td>salt</td></tr>
            <tr><td>Straße</td><td class="la">strâte</td><td>street</td></tr>
            <tr><th colspan="3">German ch ↔ k</th></tr>
            <tr><td>machen</td><td class="la">maken</td><td>make</td></tr>
            <tr><td>ich</td><td class="la">ik</td><td>(Old English ic)</td></tr>
            <tr><td>Buch</td><td class="la">bôk</td><td>book</td></tr>
            <tr><td>auch</td><td class="la">ôk</td><td>(archaic eke)</td></tr>
            <tr><th colspan="3">German t ↔ d</th></tr>
            <tr><td>Tag</td><td class="la">dach</td><td>day</td></tr>
            <tr><td>tun</td><td class="la">dôn</td><td>do</td></tr>
            <tr><td>Tochter</td><td class="la">dochter</td><td>daughter</td></tr>
            <tr><td>gut</td><td class="la">gôt</td><td>good</td></tr>
          </tbody>
        </table></div>
        <p>The working rule for reading: <strong>when a Middle Low German word looks unfamiliar, put the German shifted sound back in</strong>. Try <em>pf/f</em> for <em>p</em>, <em>z/ss</em> for <em>t</em>, <em>ch</em> for <em>k</em>, <em>t</em> for <em>d</em>, and say the result aloud. <span class="la">tol</span> becomes <em>Zoll</em>, <span class="la">holt</span> <em>Holz</em>, <span class="la">peper</span> <em>Pfeffer</em>, <span class="la">wêten</span> <em>wissen</em>, <span class="la">drinken</span> <em>trinken</em>.</p>
        <p>The correspondence runs from Middle Low German to German reliably only in this direction. Not every German <em>t</em> was once a <em>d</em>, and not every Low German <em>k</em> corresponds to a German <em>ch</em>: after <em>n</em>, for instance, German keeps <em>k</em> (<em>trinken</em>, <span class="la">drinken</span>).</p>
      `
    },
    {
      title: '2. Vowels: the same letters, older sounds',
      html: `
        <p>The second difference concerns the long vowels. Late medieval High German made two changes that the north did not share: it turned long <em>î, û</em> into <em>ei, au</em> (<em>mîn hûs</em> → <em>mein Haus</em>), and it turned the diphthongs <em>ie, uo</em> into long vowels (<em>brief, buoch</em> → <em>Brief, Buch</em>). Middle Low German had already gone its own way with those diphthongs. The result is a set of regular correspondences:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>MLG</th><th>German</th><th>Examples</th></tr></thead>
          <tbody>
            <tr><td class="la">î</td><td>ei</td><td><span class="la">tît</span> Zeit, <span class="la">wîn</span> Wein, <span class="la">mîn</span> mein, <span class="la">schrîven</span> schreiben</td></tr>
            <tr><td class="la">û</td><td>au</td><td><span class="la">hûs</span> Haus, <span class="la">ût</span> aus, <span class="la">brûn</span> braun, <span class="la">dûsent</span> tausend</td></tr>
            <tr><td class="la">ê</td><td>ei</td><td><span class="la">stên</span> Stein, <span class="la">ên</span> ein, <span class="la">bên</span> Bein, <span class="la">hêm</span> heim</td></tr>
            <tr><td class="la">ê</td><td>ie</td><td><span class="la">brêf</span> Brief, <span class="la">lêf</span> lieb, <span class="la">spegel</span> Spiegel</td></tr>
            <tr><td class="la">ô</td><td>au</td><td><span class="la">ôk</span> auch, <span class="la">bôm</span> Baum, <span class="la">kôpen</span> kaufen, <span class="la">lôpen</span> laufen</td></tr>
            <tr><td class="la">ô</td><td>u</td><td><span class="la">bôk</span> Buch, <span class="la">gôt</span> gut, <span class="la">vôt</span> Fuß, <span class="la">blôt</span> Blut</td></tr>
          </tbody>
        </table></div>
        <h3>Why German has two kinds of ei and au</h3>
        <p>Look at <em>Zeit</em> and <em>Stein</em>: in German both have <em>ei</em>, but Middle Low German has <span class="la">tît</span> and <span class="la">stên</span>. German <em>ei</em> has two historical sources. In <em>Zeit</em> it comes from an old long <em>î</em> (Middle High German <em>zît</em>), which Low German kept. In <em>Stein</em> it comes from an old diphthong <em>ei</em> (Gothic <em>stains</em>), which Low German simplified to <span class="la">ê</span>. In the same way, the <em>au</em> of <em>Haus</em> comes from an old <em>û</em> (<span class="la">hûs</span>), and the <em>au</em> of <em>Baum</em> from an old diphthong (<span class="la">bôm</span>). German merged sounds that Low German kept apart, so the correspondence is easy to read in one direction and needs care in the other.</p>
        <p>English helps here: words with <em>i</em> as in <em>time, wine, mine</em> have Low German <span class="la">î</span>; words like <em>stone, one, bone, home</em> have <span class="la">ê</span>.</p>
        <h3>Short vowels</h3>
        <p>Short vowels mostly match German, with one frequent difference: before <em>r</em>, Middle Low German often has <em>o</em> where German has <em>u</em> or <em>ü</em>: <span class="la">borger</span> “Bürger”, <span class="la">dorch</span> “durch”. Also <span class="la">solt</span> for <em>Salz</em>, with <em>o</em> before <em>lt</em>, as in Dutch <em>zout</em> from older <em>solt</em>.</p>
      `
    },
    {
      title: '3. Reading the spelling of the sources',
      html: `
        <p>There was no fixed orthography. Spelling varied by region, by period, by chancery and by scribe, and the same scribe could write one word two ways on the same page. The variations follow habits, though, and once you know them they stop being an obstacle:</p>
        <ul>
          <li><strong>u and v</strong> were one letter with two shapes. <span class="la">v</span> is usual at the start of a word, <span class="la">u</span> inside it, whatever the sound: <span class="la">vnde</span> = <span class="la">unde</span> “and”, <span class="la">vns</span> = <span class="la">uns</span>, <span class="la">breue</span> = <span class="la">brêve</span>, <span class="la">gheuen</span> = <span class="la">gheven</span>.</li>
          <li><strong>i, j and y</strong> are interchangeable: <span class="la">wy</span> = <span class="la">wî</span> “we”, <span class="la">iar</span> = <span class="la">jâr</span> “year”, <span class="la">syn</span> = <span class="la">sîn</span>.</li>
          <li><strong>c and k</strong>: <span class="la">copman</span> = <span class="la">kôpman</span>; <span class="la">ck</span> for <span class="la">k</span>.</li>
          <li><strong>gh</strong> for <em>g</em>, especially before <em>e</em> and <em>i</em>: <span class="la">ghegheven</span>.</li>
          <li><strong>Doubled letters</strong> without any change in sound: <span class="la">vnnde</span>, <span class="la">datt</span>.</li>
          <li><strong>Length</strong> is usually not shown, or shown by a following <em>e</em> or <em>i</em> (<span class="la">oe</span>, <span class="la">ae</span>), especially in Westphalia.</li>
          <li><strong>Umlaut</strong> is mostly not shown: <span class="la">lude</span> for <span class="la">lüde</span>.</li>
          <li><strong>Abbreviations</strong> are frequent: a bar over a letter for a missing <em>n</em> or <em>m</em>, and shortened words such as <span class="la">lub.</span> for <span class="la">lubesch</span>. Lecture II deals with them.</li>
        </ul>
        <p>This course normalises in the way the dictionaries do. In exercises, the common variants are accepted: <em>u/v</em>, <em>i/j/y</em>, <em>c/k</em>, <em>gh/g</em> and doubled letters. Long-vowel marks are optional unless you switch them on in Settings.</p>
        <p class="aside">Printed editions differ too. Nineteenth-century editions such as the <em>Hanserecesse</em> usually reproduce the manuscript spelling closely but expand abbreviations and modernise <em>u/v</em> inconsistently. Read each edition’s introduction for its rules.</p>
      `
    },
    {
      title: '4. Pronouns and the present tense',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>MLG</th><th>German</th><th>English / Dutch</th></tr></thead>
          <tbody>
            <tr><th>I</th><td class="la">ik</td><td>ich</td><td>(I) / ik</td></tr>
            <tr><th>you (sg.)</th><td class="la">dû</td><td>du</td><td>(thou) / —</td></tr>
            <tr><th>he, she, it</th><td class="la">hê, sê, it</td><td>er, sie, es</td><td>he, she, it</td></tr>
            <tr><th>we</th><td class="la">wî</td><td>wir</td><td>we / wij</td></tr>
            <tr><th>you (pl.)</th><td class="la">gî</td><td>ihr</td><td>ye / gij</td></tr>
            <tr><th>they</th><td class="la">sê</td><td>sie</td><td>— / zij</td></tr>
          </tbody>
        </table></div>
        <p><span class="la">hê</span>, <span class="la">wî</span> and <span class="la">gî</span> are the forms to notice. <span class="la">hê</span> is English <em>he</em>, not German <em>er</em>. <span class="la">gî</span> is the old <em>ye</em>, as in Dutch <em>gij</em>.</p>
        <h3>The present of a regular verb</h3>
        <p>Regular (“weak”) verbs form their present like German, with one striking difference in the plural:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>maken</th><th>German</th></tr></thead>
          <tbody>
            <tr><th>ik</th><td class="la">make</td><td>mache</td></tr>
            <tr><th>dû</th><td class="la">makest</td><td>machst</td></tr>
            <tr><th>hê, sê, it</th><td class="la">maket</td><td>macht</td></tr>
            <tr><th>wî</th><td class="la">maket</td><td>machen</td></tr>
            <tr><th>gî</th><td class="la">maket</td><td>macht</td></tr>
            <tr><th>sê</th><td class="la">maket</td><td>machen</td></tr>
          </tbody>
        </table></div>
        <p>All three persons of the plural share one ending, <span class="la">-et</span>. This <em>unified plural</em> (<em>Einheitsplural</em>) is a hallmark of Low German, shared with Old English. German has kept two different plural endings, <em>-en</em> and <em>-t</em>.</p>
        <p>There is regional variation. East of the Elbe (Mecklenburg, Pomerania, Brandenburg) the unified plural ending was <span class="la">-en</span> instead: <span class="la">wî maken</span>. Modern dialects still divide the same way: Holstein Platt says <em>wi maakt</em>, Mecklenburg Platt <em>wi maken</em>. Lübeck lies near the boundary, and its documents show both endings. When the pronoun follows the verb, the ending is often reduced to <span class="la">-e</span>: <span class="la">make wî</span>, <span class="la">hebbe wî</span>. You will see this in charters.</p>
        <p>The 2nd and 3rd person singular are often contracted, as in German: <span class="la">maket</span> or <span class="la">makt</span>, <span class="la">kôpet</span> or <span class="la">kôpt</span>.</p>
      `
    },
    {
      title: '5. sîn and hebben',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>sîn “be”</th><th>hebben “have”</th></tr></thead>
          <tbody>
            <tr><th>ik</th><td class="la">bin</td><td class="la">hebbe</td></tr>
            <tr><th>dû</th><td class="la">bist</td><td class="la">hest</td></tr>
            <tr><th>hê, sê, it</th><td class="la">is</td><td class="la">hevet, heft</td></tr>
            <tr><th>wî, gî, sê</th><td class="la">sint (also sîn)</td><td class="la">hebbet (east: hebben)</td></tr>
          </tbody>
        </table></div>
        <p><span class="la">is</span> has no <em>-t</em>, as in English and Dutch. <span class="la">hevet</span> keeps the old <em>v</em> that German lost in <em>hat</em>; it is often contracted to <span class="la">heft</span>. Forms vary more with these two verbs than with regular ones, and the plural of <span class="la">sîn</span> appears in several shapes.</p>
        <p>The perfect is formed as in German, with <span class="la">hebben</span> or <span class="la">sîn</span> and a past participle, which comes at the end of the clause: <span class="la">dat hê uns hundert mark betalet hevet</span>, “dass er uns hundert Mark bezahlt hat”. Many northern texts leave out the <span class="la">ge-</span> of the participle (<span class="la">maket</span> beside <span class="la">gemaket</span>), as modern northern Platt does. Verbs with a prefix such as <span class="la">be-</span> never take it, exactly as in German <em>bezahlt</em>.</p>
      `
    },
    {
      title: '6. The article and the noun',
      html: `
        <p>Middle Low German distinguishes the same three genders and four cases as German, but its article has fewer distinct forms. In the nominative there are only two: <span class="la">de</span> for masculine, feminine and plural, <span class="la">dat</span> for neuter. Dutch works the same way with <em>de</em> and <em>het</em>.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Masc.</th><th>Fem.</th><th>Neut.</th><th>Plural</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">de</td><td class="la">de</td><td class="la">dat</td><td class="la">de</td></tr>
            <tr><th>Gen.</th><td class="la">des</td><td class="la">der</td><td class="la">des</td><td class="la">der</td></tr>
            <tr><th>Dat.</th><td class="la">deme, dem</td><td class="la">der</td><td class="la">deme, dem</td><td class="la">den</td></tr>
            <tr><th>Acc.</th><td class="la">den</td><td class="la">de</td><td class="la">dat</td><td class="la">de</td></tr>
          </tbody>
        </table></div>
        <p>Apart from the nominative <span class="la">de</span>, this is the German pattern with unshifted consonants: <span class="la">dat</span> for <em>das</em>, <span class="la">deme</span> for <em>dem</em>. <span class="la">dat</span> is also the conjunction “dass”: <span class="la">Wî bekennen, dat …</span> “Wir bekennen, dass …”. The indefinite article is <span class="la">ên</span>, accusative masculine <span class="la">ênen</span>.</p>
        <p>Nouns keep a few case endings that German has mostly lost. The dative singular often ends in <span class="la">-e</span>, like the old-fashioned German <em>im Hause</em>: <span class="la">in deme hûse</span>, <span class="la">in sînem schepe</span>. The genitive singular of masculine and neuter nouns ends in <span class="la">-es</span>: <span class="la">des kôpmannes</span>. Plurals are varied (<span class="la">schepe</span>, <span class="la">kôplüde</span>, <span class="la">brêve</span>, <span class="la">stede</span>) and are best learned with each noun. A later lecture covers the noun in detail.</p>
      `
    },
    {
      title: '7. How a charter is built',
      html: `
        <p>A medieval charter (<span class="la">brêf</span>, <em>Urkunde</em>) follows a fixed pattern inherited from Latin. Diplomatics, the study of documents, names the parts with Latin terms that German archives still use. Knowing them tells you where to look: who is acting, what is decided, and when.</p>
        <ol>
          <li><strong>Intitulatio</strong>: who issues the document. <span class="la">Wî, borgermêstere unde râtmanne der stat tô Lübeke …</span></li>
          <li><strong>Promulgatio</strong>: to whom it is announced. <span class="la">… bekennen unde betûgen openbâre in dessem brêve</span>, or <span class="la">dat wî witlik make allen lüden, de dessen brêf sên edder hôren lesen</span>: “to all people who see this charter or hear it read”. The second phrase translates the Latin <span class="la">universis praesentes litteras visuris vel audituris</span>. Most people encountered a charter by hearing it read aloud.</li>
          <li><strong>Narratio and dispositio</strong>: the circumstances, and the legal act itself. This is the part you will usually want.</li>
          <li><strong>Corroboratio</strong>: how the document is made valid, usually by sealing. <span class="la">Tô tûge der wârheit hebbe wî unser stat ingesegel an dessen brêf gehenget</span>, “in witness of the truth we have hung our town’s seal on this charter”.</li>
          <li><strong>Datum</strong>: place and date. <span class="la">Gheven tô Lübeke na Godes bôrt …</span></li>
        </ol>
        <h3>Dates</h3>
        <p>Documents usually give the year from the birth of Christ (<span class="la">na Godes bôrt</span>) and the day by the church calendar: a feast day, or a weekday before or after one. <span class="la">des sondâges na sunte Johannis dage tô middensomere</span> is “the Sunday after St John’s Day at midsummer”: St John the Baptist, 24 June. To convert such dates you need the year’s calendar; the standard tool is Hermann Grotefend’s <em>Taschenbuch der Zeitrechnung</em>. Remember too that these dates are in the Julian calendar.</p>
      `
    }
  ],

  vocab: [
    // verbs
    { id: 'maken', head: 'maken', la: 'maken', pos: 'verb, weak', en: 'make, do', de: 'machen', deriv: 'English make; Platt maken' },
    { id: 'kopen', head: 'kôpen', la: 'kôpen', pos: 'verb, weak', en: 'buy', de: 'kaufen', note: 'Hence kôpman, merchant. Swedish köpa and Danish købe are related words.' },
    { id: 'seggen', head: 'seggen', la: 'seggen', pos: 'verb, weak', en: 'say', de: 'sagen', deriv: 'English say; Dutch zeggen' },
    { id: 'senden', head: 'senden', la: 'senden', pos: 'verb, weak', en: 'send', de: 'senden, schicken' },
    { id: 'betalen', head: 'betalen', la: 'betalen', pos: 'verb, weak', en: 'pay', de: 'bezahlen', note: 'Borrowed into Danish and Norwegian (betale) and Swedish (betala).' },
    { id: 'horen', head: 'hôren', la: 'hôren', pos: 'verb, weak', en: 'hear', de: 'hören' },
    { id: 'leven', head: 'leven', la: 'leven', pos: 'verb, weak', en: 'live', de: 'leben', deriv: 'English live; Dutch leven' },
    { id: 'danken', head: 'danken', la: 'danken', pos: 'verb, weak', en: 'thank', de: 'danken' },
    { id: 'segelen', head: 'segelen', la: 'segelen', pos: 'verb, weak', en: 'sail', de: 'segeln' },
    { id: 'wonen', head: 'wonen', la: 'wonen', pos: 'verb, weak', en: 'live, dwell', de: 'wohnen' },
    { id: 'sin', head: 'sîn', la: 'sîn', pos: 'verb, irregular', en: 'be', de: 'sein', note: 'ik bin, dû bist, hê is, wî sint.' },
    { id: 'hebben', head: 'hebben', la: 'hebben', pos: 'verb, irregular', en: 'have', de: 'haben', note: 'ik hebbe, dû hest, hê hevet or heft, wî hebbet.' },

    // nouns
    { id: 'stat', head: 'stat', la: 'stat, pl. stede', g: 'f', pos: 'noun', en: 'town, city', de: 'Stadt', note: 'de stede van der dûdeschen hanse: the towns of the German Hanse.' },
    { id: 'rat', head: 'rât', la: 'rât, gen. râdes', g: 'm', pos: 'noun', en: 'council; counsel', de: 'Rat', note: 'The town council. Its members are râtmanne.' },
    { id: 'kopman', head: 'kôpman', la: 'kôpman, pl. kôplüde', g: 'm', pos: 'noun', en: 'merchant', de: 'Kaufmann', note: 'In Hanseatic usage de kôpman also means the merchants of a Kontor as a body.' },
    { id: 'schip', head: 'schip', la: 'schip, pl. schepe', g: 'n', pos: 'noun', en: 'ship', de: 'Schiff', deriv: 'English ship; Dutch schip' },
    { id: 'water', head: 'water', la: 'water', g: 'n', pos: 'noun', en: 'water', de: 'Wasser' },
    { id: 'hus', head: 'hûs', la: 'hûs', g: 'n', pos: 'noun', en: 'house', de: 'Haus', deriv: 'Platt Huus' },
    { id: 'bref', head: 'brêf', la: 'brêf, pl. brêve', g: 'm', pos: 'noun', en: 'letter; charter, deed', de: 'Brief; Urkunde', note: 'From Latin breve. In documents it usually means the charter itself, as older German Brief und Siegel.' },
    { id: 'got', head: 'gôt', la: 'gôt', g: 'n', pos: 'noun; also adjective', en: 'goods, property; (adj.) good', de: 'Gut, Ware; gut' },
    { id: 'solt', head: 'solt', la: 'solt', g: 'n', pos: 'noun', en: 'salt', de: 'Salz', note: 'Salt from Lüneburg, shipped through Lübeck, was a staple of Hanseatic trade.' },
    { id: 'tit', head: 'tît', la: 'tît', g: 'f', pos: 'noun', en: 'time', de: 'Zeit', deriv: 'English tide; Platt Tied' },
    { id: 'dach', head: 'dach', la: 'dach, pl. dage', g: 'm', pos: 'noun', en: 'day', de: 'Tag' },
    { id: 'jar', head: 'jâr', la: 'jâr', g: 'n', pos: 'noun', en: 'year', de: 'Jahr' },
    { id: 'lant', head: 'lant', la: 'lant, gen. landes', g: 'n', pos: 'noun', en: 'land, country', de: 'Land' },
    { id: 'strate', head: 'strâte', la: 'strâte', g: 'f', pos: 'noun', en: 'street, road', de: 'Straße' },
    { id: 'here', head: 'hêre', la: 'hêre', g: 'm', pos: 'noun', en: 'lord, master; Sir', de: 'Herr' },
    { id: 'borger', head: 'borger', la: 'borger', g: 'm', pos: 'noun', en: 'citizen, burgher', de: 'Bürger', note: 'o before r where German has ü.' },

    // pronouns and small words
    { id: 'ik', head: 'ik', la: 'ik', pos: 'pronoun', en: 'I', de: 'ich' },
    { id: 'wi', head: 'wî', la: 'wî', pos: 'pronoun', en: 'we', de: 'wir' },
    { id: 'gi', head: 'gî', la: 'gî', pos: 'pronoun', en: 'you (pl.)', de: 'ihr', deriv: 'English ye; Dutch gij' },
    { id: 'unde', head: 'unde', la: 'unde', pos: 'conjunction', en: 'and', de: 'und', note: 'Often written vnde.' },
    { id: 'dat', head: 'dat', la: 'dat', pos: 'article; pronoun; conjunction', en: 'the (n.); that', de: 'das; dass' },
    { id: 'de', head: 'de', la: 'de', pos: 'article; pronoun', en: 'the (m., f., pl.); who, which', de: 'der, die' },
    { id: 'nicht', head: 'nicht', la: 'nicht', pos: 'adverb', en: 'not', de: 'nicht' },
    { id: 'ok', head: 'ôk', la: 'ôk', pos: 'adverb', en: 'also, too', de: 'auch' },
    { id: 'edder', head: 'edder', la: 'edder', pos: 'conjunction', en: 'or', de: 'oder' },
    { id: 'to', head: 'tô', la: 'tô', pos: 'preposition', en: 'to; at, in (a town)', de: 'zu', note: 'tô Lübeke: in Lübeck, or to Lübeck.' },
    { id: 'up', head: 'up', la: 'up', pos: 'preposition', en: 'on, upon', de: 'auf' },
    { id: 'van', head: 'van', la: 'van', pos: 'preposition', en: 'from, of', de: 'von', note: 'kôpman van Rêvele: merchant from Reval.' }
  ],

  grammarCards: [
    { id: 'k-pf', front: 'German pf / ff / f (Pferd, Schiff, auf) corresponds to MLG …', back: 'p: pêrt, schip, up' },
    { id: 'k-z', front: 'German z / tz / ss (Zeit, Salz, Wasser) corresponds to MLG …', back: 't: tît, solt, water' },
    { id: 'k-ch', front: 'German ch (machen, ich, Buch) corresponds to MLG …', back: 'k: maken, ik, bôk' },
    { id: 'k-t', front: 'German t (Tag, tun, Tochter) corresponds to MLG …', back: 'd: dach, dôn, dochter' },
    { id: 'k-ei1', front: 'German ei in Zeit, Wein, mein: MLG vowel?', back: 'î: tît, wîn, mîn' },
    { id: 'k-ei2', front: 'German ei in Stein, ein, Bein: MLG vowel?', back: 'ê: stên, ên, bên' },
    { id: 'k-au1', front: 'German au in Haus, aus, braun: MLG vowel?', back: 'û: hûs, ût, brûn' },
    { id: 'k-au2', front: 'German au in Baum, auch, kaufen: MLG vowel?', back: 'ô: bôm, ôk, kôpen' },
    { id: 'k-u', front: 'German u in Buch, gut, Fuß: MLG vowel?', back: 'ô: bôk, gôt, vôt' },
    { id: 'k-ie', front: 'German ie in Brief, lieb: MLG vowel?', back: 'ê: brêf, lêf' },
    { id: 'k-sl', front: 'German schl, schn, schw, st at the start of a word (schlafen, Schnee, schwarz): MLG?', back: 'sl, sn, sw, st with plain s: slâpen, snê, swart' },
    { id: 'g-maken', front: 'Present of maken (ik, dû, hê, wî, gî, sê)', back: 'make, makest, maket, maket, maket, maket' },
    { id: 'g-plural', front: 'The unified plural: what is it?', back: 'One ending for all three plural persons: -et (east of the Elbe -en).' },
    { id: 'g-inv', front: 'hebbe wî, make wî: why -e?', back: 'Before a following wî or gî the plural ending is often reduced to -e.' },
    { id: 'g-sin', front: 'Present of sîn', back: 'bin, bist, is; plural sint (also sîn)' },
    { id: 'g-hebben', front: 'hê … (has)', back: 'hê hevet, often heft' },
    { id: 'g-art', front: 'Nominative article: how many forms?', back: 'Two: de (m., f., pl.) and dat (n.)' },
    { id: 'g-dat', front: 'Meanings of dat', back: 'the (n.); that (pronoun); that (conjunction, German dass)' },
    { id: 'g-gi', front: 'gî means …', back: 'you (pl.), German ihr; English ye, Dutch gij' },
    { id: 's-uv', front: 'In a manuscript: vnde, vns, breue', back: 'unde, uns, brêve: u and v are one letter' },
    { id: 's-y', front: 'In a manuscript: wy, iar, syn', back: 'wî, jâr, sîn: i, j and y are interchangeable' },
    { id: 's-circ', front: 'What does the circumflex in hûs, brêf mark?', back: 'A long vowel (the dictionaries’ normalisation; manuscripts rarely mark it).' },
    { id: 'c-parts', front: 'The five main parts of a charter', back: 'Intitulatio, Promulgatio, Narratio/Dispositio, Corroboratio, Datum' },
    { id: 'c-prom', front: 'allen lüden, de dessen brêf sên edder hôren lesen', back: 'to all who see this charter or hear it read (Latin: universis praesentes litteras visuris vel audituris)' },
    { id: 'c-date', front: 'na Godes bôrt', back: 'after the birth of God (Christ): the year of the Lord' },
    { id: 'c-john', front: 'sunte Johannis dach tô middensomere', back: 'St John the Baptist, 24 June' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">water</span> corresponds to German:', options: ['Wasser', 'Wetter', 'Watte', 'Wade'], answer: 0, explain: 'MLG t ↔ German ss: water, Wasser.' },
    { id: 'e2', type: 'mc', prompt: 'German <em>Zeit</em> in Middle Low German is:', options: ['tît', 'zît', 'têt', 'tôt'], answer: 0, explain: 'German z ↔ t, and German ei from old long î ↔ î.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">stên</span> means:', options: ['Stein, stone', 'Stern, star', 'Stunde, hour', 'stehen, stand'], answer: 0, explain: 'MLG ê ↔ German ei in Stein, ein, Bein.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">kôpman</span> means:', options: ['Kaufmann, merchant', 'Koch, cook', 'Kopf, head', 'Kämmerer, chamberlain'], answer: 0, explain: 'MLG ô ↔ German au in kaufen; p unshifted (German f).' },
    { id: 'e5', type: 'match', prompt: 'Match the Middle Low German words to their German equivalents.', pairs: [
      ['schip', 'Schiff'], ['dorp', 'Dorf'], ['maken', 'machen'], ['tô', 'zu'], ['hûs', 'Haus']
    ] },
    { id: 'e6', type: 'match', prompt: 'Match the pronouns.', pairs: [
      ['ik', 'ich'], ['hê', 'er'], ['wî', 'wir'], ['gî', 'ihr'], ['dû', 'du']
    ] },
    { id: 'e7', type: 'mc', prompt: '<span class="la">gî</span> corresponds to German:', options: ['ihr', 'ja', 'gib', 'geh'], answer: 0, explain: 'The old 2nd person plural, English ye, Dutch gij.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Wî mak___ dat schip.</span>', hint: 'we make', answers: ['et', 'en'], full: 'Wî maket dat schip.', explain: 'Unified plural -et; east of the Elbe -en (wî maken).' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Dû mak___ ênen brêf.</span>', hint: 'you (sg.) make', answers: ['est', 'st'], full: 'Dû makest ênen brêf.', explain: '2nd person singular -est, as German -st.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">De kôpman kôp___ solt.</span>', hint: 'buys', answers: ['et', 't'], full: 'De kôpman kôpet solt.', explain: '3rd person singular -et, often contracted: kôpt.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Gî hebb___ ên schip.</span>', hint: 'you (pl.) have', answers: ['et', 'en'], full: 'Gî hebbet ên schip.', explain: 'Unified plural: wî, gî, sê hebbet (east: hebben).' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Dat gôt ___ in der stat.</span>', hint: 'is', answers: ['is'], full: 'Dat gôt is in der stat.', explain: 'is without -t, as in English and Dutch.' },
    { id: 'e13', type: 'paradigm', prompt: 'Conjugate <span class="la">maken</span> in the present. In the plural, -et and the eastern -en are both accepted.', headers: ['Form'], rows: [
      { label: 'ik', answers: ['make'] },
      { label: 'dû', answers: ['makest'] },
      { label: 'hê', answers: ['maket|makt'] },
      { label: 'wî', answers: ['maket|maken'] },
      { label: 'gî', answers: ['maket|maken'] },
      { label: 'sê (pl.)', answers: ['maket|maken'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the present of <span class="la">sîn</span> and <span class="la">hebben</span>.', headers: ['sîn', 'hebben'], rows: [
      { label: 'ik', answers: ['bin', 'hebbe'] },
      { label: 'dû', answers: ['bist', 'hest'] },
      { label: 'hê', answers: ['is', 'hevet|heft'] },
      { label: 'wî', answers: ['sint|sîn|sind', 'hebbet|hebben'] }
    ] },
    { id: 'e15', type: 'mc', prompt: 'In a manuscript, <span class="la">vnde</span> is:', options: ['unde, “and”', 'vinde, “find”', 'van, “from”', 'wint, “wind”'], answer: 0, explain: 'u and v are one letter; v is the usual shape at the start of a word.' },
    { id: 'e16', type: 'mc', prompt: 'In a manuscript, <span class="la">wy</span> stands for:', options: ['wî, “we”', 'wie, “how”', 'wô, “where”', 'wat, “what”'], answer: 0, explain: 'y = i: wy = wî.' },
    { id: 'e17', type: 'mc', prompt: 'Which Standard German word came from Low German, and so shows no consonant shift?', options: ['Lippe', 'Apfel', 'Pfeife', 'Zunge'], answer: 0, explain: 'The High German form would be Lefze. Apfel, Pfeife and Zunge all show the shift.' },
    { id: 'e18', type: 'order', prompt: 'Put the German translation in order.', source: 'De kôplüde kôpet solt in der stat.', tokens: ['Die Kaufleute', 'kaufen', 'Salz', 'in der Stadt'], explain: 'kôplüde is the plural of kôpman; kôpet is the unified plural.' },
    { id: 'e19', type: 'translate', dir: 'mnd-de', source: 'Wî maket dat schip.', model: 'Wir machen das Schiff.', accepted: ['wir machen das schiff', 'wir bauen das schiff'] },
    { id: 'e20', type: 'translate', dir: 'mnd-de', source: 'Dat water is in deme hûse.', model: 'Das Wasser ist im Haus(e).', accepted: ['das wasser ist im hause', 'das wasser ist im haus', 'das wasser ist in dem hause', 'das wasser ist in dem haus'] },
    { id: 'e21', type: 'translate', dir: 'mnd-en', source: 'Ik hebbe ênen brêf van deme râde.', model: 'I have a letter from the council.', accepted: ['i have letter from council', 'i have charter from council', 'i have letter of council', 'i have charter of council', 'i have deed from council'] },
    { id: 'e22', type: 'translate', dir: 'de-mnd', source: 'Wir haben ein Schiff.', model: 'Wî hebbet ên schip.', accepted: ['wî hebbet ên schip', 'wî hebben ên schip', 'wî hebbet ein schip', 'wî hebben ein schip'] },
    { id: 'e23', type: 'translate', dir: 'de-mnd', source: 'Das Haus ist in der Stadt.', model: 'Dat hûs is in der stat.', accepted: ['dat hûs is in der stat'] },
    { id: 'e24', type: 'mc', prompt: 'In a charter, <span class="la">Gheven tô Lübeke, na Godes bôrt …</span> belongs to the:', options: ['Datum', 'Intitulatio', 'Corroboratio', 'Narratio'], answer: 0, explain: 'Place and date close the charter.' },
    { id: 'e25', type: 'mc', prompt: '<span class="la">Tô tûge der wârheit hebbe wî unser stat ingesegel an dessen brêf gehenget</span> is the:', options: ['Corroboratio: the sealing clause', 'Promulgatio: the address', 'Intitulatio: the issuer', 'Datum: the date'], answer: 0, explain: '“In witness of the truth we have hung our town’s seal on this charter.”' }
  ],

  reading: {
    title: 'Ên brêf des râdes tô Lübeke',
    note: 'Constructed charter in the style of Lübeck documents around 1400. Tap any word.',
    diplomaticNote: 'The same text as a scribe might have written it: no length marks, u/v and i/y interchangeable, gh for g, unmarked umlaut, one abbreviation (lub.).',
    text: 'Wî, borgermêstere unde râtmanne der stat Lübeke, bekennen unde betûgen openbâre in dessem brêve, dat Hinrik Stên, ên kôpman van Rêvele, uns hundert mark lubesch betalet hevet. De sulve Hinrik hevet ôk vêrtich tunnen hêringes in sînem schepe tô Lübeke gebracht; dat gôt is nû in der stat. Hîrumme make wî witlik allen lüden, de dessen brêf sên edder hôren lesen, dat de kôpman uns nicht mêr schuldich is. Tô tûge der wârheit hebbe wî unser stat ingesegel an dessen brêf gehenget. Gheven tô Lübeke na Godes bôrt dûsent vêrhundert jâr, des sondâges na sunte Johannis dage tô middensomere.',
    diplomatic: 'Wy borgermestere vnde radmanne der stad lubeke bekennen vnde betughen openbare in desseme breue, dat hinrik sten en copman van reuele vns hundert mark lub. betalet heft. De sulue hinrik heft ok vertich tunnen heringhes in syneme schepe to lubeke ghebracht, dat gud is nu in der stad. Hirumme make wy witlik allen luden, de dessen bref seen edder horen lesen, dat de copman vns nicht mer schuldich is. To tughe der warheyt hebbe wy vnser stad ingheseghel an dessen bref ghehenghet. Gheuen to lubeke na godes bord dusent verhundert iar, des sondaghes na sunte iohannis daghe to middensomere.',
    translations: [
      { label: 'German translation', text: 'Wir, Bürgermeister und Ratsherren der Stadt Lübeck, bekennen und bezeugen öffentlich in diesem Brief, dass Heinrich Stein, ein Kaufmann aus Reval, uns hundert lübische Mark bezahlt hat. Derselbe Heinrich hat auch vierzig Tonnen Hering in seinem Schiff nach Lübeck gebracht; die Ware ist jetzt in der Stadt. Darum tun wir allen Leuten kund, die diesen Brief sehen oder vorlesen hören, dass der Kaufmann uns nichts mehr schuldig ist. Zum Zeugnis der Wahrheit haben wir das Siegel unserer Stadt an diesen Brief gehängt. Gegeben zu Lübeck nach Christi Geburt vierzehnhundert Jahre, am Sonntag nach Sankt Johannis zu Mittsommer.' },
      { label: 'English translation', text: 'We, the burgomasters and councillors of the town of Lübeck, acknowledge and publicly testify in this charter that Hinrik Sten, a merchant from Reval, has paid us a hundred marks of Lübeck. The same Hinrik has also brought forty barrels of herring to Lübeck in his ship; the goods are now in the town. We therefore make known to all people who see this charter or hear it read that the merchant owes us nothing further. In witness of the truth we have hung our town’s seal on this charter. Given at Lübeck in the year of the Lord fourteen hundred, on the Sunday after St John’s Day at midsummer.' }
    ],
    notes: [
      { ref: 'Wî, borgermêstere unde râtmanne der stat Lübeke', html: 'The <em>intitulatio</em>. Lübeck had several burgomasters at once, hence the plural <span class="la">borgermêstere</span>. <span class="la">der stat</span> is a feminine genitive, as German <em>der Stadt</em>.' },
      { ref: 'bekennen unde betûgen openbâre', html: 'Legal language loves pairs of near-synonyms, like German <em>kund und zu wissen</em>. Note the plural <span class="la">-en</span> here against <span class="la">-et</span> elsewhere: Lübeck documents use both.' },
      { ref: 'dat Hinrik Stên … betalet hevet', html: '<span class="la">dat</span> is the conjunction “dass”. The perfect puts the participle and auxiliary at the end of the subordinate clause, exactly as in German: <em>dass … bezahlt hat</em>. With the prefix <span class="la">be-</span> there is no <span class="la">ge-</span>.' },
      { ref: 'van Rêvele', html: 'Reval, today Tallinn. It had Lübeck town law, and its council wrote to Lübeck in Middle Low German.' },
      { ref: 'hundert mark lubesch', html: 'The Lübeck mark was a unit of account, divided into 16 shillings. The adjective follows the noun in this fixed phrase. In the “as written” text it is abbreviated <span class="la">lub.</span>, a typical scribal shortcut.' },
      { ref: 'vêrtich tunnen hêringes', html: 'A genitive after a measure, like older German <em>vierzig Tonnen Herings</em>. Herring caught off Scania and preserved with Lüneburg salt was one of the great bulk trades of the Hanse.' },
      { ref: 'in sînem schepe', html: 'Dative with the ending <span class="la">-e</span>, as in German <em>in seinem Schiffe</em>. The stem vowel changes too: <span class="la">schip</span>, but <span class="la">schepe</span>.' },
      { ref: 'make wî … hebbe wî', html: 'Before the pronoun the plural ending is reduced to <span class="la">-e</span>: compare <span class="la">wî maket</span>, but <span class="la">make wî</span>.' },
      { ref: 'allen lüden, de dessen brêf sên edder hôren lesen', html: 'The <em>promulgatio</em>, translating Latin <span class="la">universis praesentes litteras visuris vel audituris</span>. <span class="la">de</span> here is a relative pronoun, “who”, as German <em>die</em>. <span class="la">hôren lesen</span> is “hear (it) read”.' },
      { ref: 'Tô tûge der wârheit … gehenget', html: 'The <em>corroboratio</em>. The seal hung from the charter on a cord or a strip of parchment, hence <span class="la">henget</span>, “hung”.' },
      { ref: 'des sondâges na sunte Johannis dage tô middensomere', html: 'The <em>datum</em>. In 1400, St John’s Day, 24 June, fell on a Thursday, so the Sunday after it was 27 June (Julian calendar).' }
    ],
    glosses: {
      'wî': 'we', 'borgermêstere': 'burgomasters (pl. of borgermêster), German Bürgermeister', 'unde': 'and', 'râtmanne': 'councillors (pl. of râtman), German Ratsherren', 'radmanne': 'councillors: râtmanne',
      'der': 'gen. sg. fem. of the article: of the', 'stat': 'town, city (f.), German Stadt', 'stad': 'town: stat', 'lübeke': 'Lübeck', 'bekennen': 'acknowledge, declare (plural, eastern -en)', 'betûgen': 'testify, attest, German bezeugen',
      'openbâre': 'publicly, German öffentlich', 'in': 'in', 'dessem': 'dat. of desse, this: dessem brêve, in this charter', 'desseme': 'this (dat.): dessem', 'brêve': 'dat. of brêf, charter', 'dat': 'that (conj.), German dass; also the (n.)',
      'hinrik': 'Heinrich (personal name)', 'stên': 'surname; also stên, stone, German Stein', 'ên': 'a, an; one', 'kôpman': 'merchant, German Kaufmann', 'van': 'from, of', 'rêvele': 'Reval, today Tallinn',
      'uns': 'us', 'hundert': 'a hundred', 'mark': 'mark (money of account)', 'lubesch': 'of Lübeck, lübisch', 'lub': 'abbreviation of lubesch', 'betalet': 'paid (participle of betalen), German bezahlt', 'hevet': 'has, German hat', 'heft': 'has: contracted hevet',
      'de': 'the (m., f., pl.); who (relative)', 'sulve': 'same: de sulve, the same, German derselbe', 'ôk': 'also, German auch', 'vêrtich': 'forty, German vierzig', 'tunnen': 'barrels (pl. of tunne), German Tonnen', 'hêringes': 'of herring (gen. of hêrink)',
      'sînem': 'his (dat.), German seinem', 'sîneme': 'his (dat.): sînem', 'schepe': 'dat. of schip, ship', 'tô': 'to; at', 'gebracht': 'brought (participle of bringen)', 'gôt': 'goods, German Gut, Ware', 'gud': 'goods: gôt',
      'is': 'is', 'nû': 'now', 'hîrumme': 'therefore, German hierum, darum', 'make': 'make (plural reduced to -e before wî)', 'witlik': 'known: witlik maken, make known, German kundtun', 'allen': 'to all (dat. pl.)', 'lüden': 'people (dat. pl. of lüde), German Leuten',
      'brêf': 'charter, letter (acc.)', 'sên': 'see, German sehen', 'seen': 'see: sên', 'edder': 'or', 'hôren': 'hear', 'lesen': 'read: hôren lesen, hear (it) read', 'nicht': 'not; nothing', 'mêr': 'more', 'schuldich': 'owing, German schuldig',
      'tûge': 'witness, testimony: tô tûge, in witness', 'wârheit': 'truth, German Wahrheit', 'hebbe': 'have (plural reduced to -e before wî)', 'unser': 'our (gen.: of our)', 'ingesegel': 'seal, German Siegel', 'an': 'on, to', 'dessen': 'this (acc. m.)', 'gehenget': 'hung (participle of hengen)',
      'gheven': 'given, German gegeben', 'na': 'after, German nach', 'godes': 'of God (gen.)', 'bôrt': 'birth: na Godes bôrt, in the year of the Lord', 'bord': 'birth: bôrt', 'dûsent': 'thousand', 'vêrhundert': 'four hundred', 'jâr': 'year(s)',
      'des': 'gen. sg. m./n. of the article; here “on the”', 'sondâges': 'Sunday (gen. of time: on the Sunday)', 'sunte': 'saint, German Sankt', 'johannis': 'of John (Latin genitive)', 'dage': 'day (dat.)', 'middensomere': 'midsummer: tô middensomere, at midsummer'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Who issues the charter?', options: ['The burgomasters and council of Lübeck', 'Hinrik Sten', 'The merchants of Reval', 'The Hansetag'], answer: 0, explain: 'The intitulatio: Wî, borgermêstere unde râtmanne der stat Lübeke.' },
      { id: 'r2', type: 'mc', prompt: 'What did Hinrik bring to Lübeck?', options: ['Forty barrels of herring', 'A hundred barrels of salt', 'Forty marks', 'A letter from Reval'], answer: 0, explain: 'vêrtich tunnen hêringes.' },
      { id: 'r3', type: 'mc', prompt: 'What does the charter confirm?', options: ['That the merchant owes the town nothing more', 'That the town owes the merchant a hundred marks', 'That the herring may not be sold', 'That Hinrik becomes a citizen'], answer: 0, explain: 'dat de kôpman uns nicht mêr schuldich is.' },
      { id: 'r4', type: 'mc', prompt: 'When was it issued?', options: ['On the Sunday after St John’s Day (24 June), 1400', 'On St John’s Day, 1400', 'At Easter 1400', 'In 1300'], answer: 0, explain: 'des sondâges na sunte Johannis dage tô middensomere, in the year 1400.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'German <em>Buch</em> in Middle Low German:', options: ['bôk', 'buch', 'bûk', 'bak'], answer: 0, explain: 'ch ↔ k, and German u from old uo ↔ ô.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">ôk</span> means:', options: ['auch, also', 'Eiche, oak', 'oft, often', 'ob, whether'], answer: 0, explain: 'ô ↔ German au; k ↔ ch.' },
      { id: 't3', type: 'gap', prompt: '<span class="la">Sê mak___ ên hûs.</span>', hint: 'they make', answers: ['et', 'en'], full: 'Sê maket ên hûs.', explain: 'Unified plural -et (east -en).' },
      { id: 't4', type: 'mc', prompt: 'Which form is <strong>not</strong> Low German?', options: ['machen', 'maken', 'ik', 'dat'], answer: 0, explain: 'machen shows the High German shift k → ch.' },
      { id: 't5', type: 'translate', dir: 'mnd-de', source: 'Ik hebbe dat solt.', model: 'Ich habe das Salz.', accepted: ['ich habe das salz'] },
      { id: 't6', type: 'translate', dir: 'de-mnd', source: 'Der Kaufmann ist in der Stadt.', model: 'De kôpman is in der stat.', accepted: ['de kôpman is in der stat'] },
      { id: 't7', type: 'mc', prompt: 'German <em>Stein</em> and <em>Zeit</em> both have <em>ei</em>. In Middle Low German:', options: ['stên, but tît', 'stîn and tît', 'stên and têt', 'stein and zeit'], answer: 0, explain: 'German merged two old sounds: old diphthong (stên) and old long î (tît).' },
      { id: 't8', type: 'gap', prompt: '<span class="la">Hê ___ ênen brêf.</span>', hint: 'has', answers: ['hevet', 'heft'], full: 'Hê hevet ênen brêf.', explain: 'hevet, often contracted to heft.' },
      { id: 't9', type: 'mc', prompt: '<span class="la">allen lüden, de dessen brêf sên edder hôren lesen</span> means:', options: ['to all who see this charter or hear it read', 'to all who write or read this letter', 'all the people who live in this town', 'to all the readers of this book'], answer: 0, explain: 'The promulgatio, after the Latin universis praesentes litteras visuris vel audituris.' },
      { id: 't10', type: 'mc', prompt: 'In a manuscript, <span class="la">vns</span> is:', options: ['uns, “us”', 'von, “from”', 'eins, “one”', 'wenn, “if”'], answer: 0, explain: 'v at the start of a word is the letter u.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">gî hebbet</span> means:', options: ['ihr habt', 'sie haben', 'wir haben', 'er hat'], answer: 0, explain: 'gî = ihr; the plural ending -et is the same for all three persons.' }
    ]
  },

  reference: [
    { title: 'Sound key: German → Middle Low German', headers: ['German', 'MLG', 'Example'], rows: [
      ['pf, ff, f', 'p', 'Schiff → schip'], ['z, tz, ss', 't', 'Wasser → water'], ['ch', 'k', 'machen → maken'], ['t', 'd', 'Tag → dach'],
      ['ei (Zeit)', 'î', 'Zeit → tît'], ['ei (Stein)', 'ê', 'Stein → stên'], ['au (Haus)', 'û', 'Haus → hûs'], ['au (Baum)', 'ô', 'Baum → bôm'],
      ['u (Buch)', 'ô', 'Buch → bôk'], ['ie (Brief)', 'ê', 'Brief → brêf'], ['schl, schw', 'sl, sw', 'schlafen → slâpen']
    ] },
    { title: 'Present of maken', headers: ['', 'Form'], rows: [['ik', 'make'], ['dû', 'makest'], ['hê, sê, it', 'maket'], ['wî, gî, sê', 'maket (east: maken)']] },
    { title: 'sîn and hebben', headers: ['', 'sîn', 'hebben'], rows: [['ik', 'bin', 'hebbe'], ['dû', 'bist', 'hest'], ['hê', 'is', 'hevet, heft'], ['wî, gî, sê', 'sint', 'hebbet']] },
    { title: 'The definite article', headers: ['', 'Masc.', 'Fem.', 'Neut.', 'Pl.'], rows: [['Nom.', 'de', 'de', 'dat', 'de'], ['Gen.', 'des', 'der', 'des', 'der'], ['Dat.', 'deme', 'der', 'deme', 'den'], ['Acc.', 'den', 'de', 'dat', 'de']] }
  ]
});
