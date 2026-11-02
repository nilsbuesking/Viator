/*
 * Latin — Lecture XVI: numerals; the genitive of the whole; the ablative of time
 * (with the accusative of duration for contrast).
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotations (Catullus 5.7–10; Pliny, Letters 6.16.4; Caesar, De bello Gallico 1.1)
 * checked against the texts supplied by Nils. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-16',
  number: 16,
  title: 'Dā mī bāsia mīlle',
  subtitle: 'Cardinal and ordinal numerals; Roman numerals; the genitive of the whole; the ablative of time',
  minutes: 60,

  intro: `
    <p>Numbers are the easiest part of Latin vocabulary for a German speaker, because the words are cousins of German ones: <span class="la">trēs</span> and <em>drei</em>, <span class="la">septem</span> and <em>sieben</em>, <span class="la">decem</span> and <em>zehn</em>. Most of them do not even decline. The exceptions are the first three (<span class="la">ūnus, duo, trēs</span>), the hundreds from 200 upwards, and the plural of “thousand”, <span class="la">mīlia</span>, which is a noun.</p>
    <p>Two constructions belong naturally with numbers. The <strong>genitive of the whole</strong> (or partitive genitive) names the whole of which a part is taken: <span class="la">pars urbis</span>, “part of the city”; <span class="la">satis pecūniae</span>, “enough (of) money”. And the <strong>ablative of time</strong> says when something happens: <span class="la">prīmā hōrā</span>, “at the first hour”; <span class="la">nocte</span>, “at night”. You have already met both several times without a name.</p>
    <p>By the end you should be able to count to a thousand in Latin, read Roman numerals, decline <span class="la">duo</span> and <span class="la">trēs</span>, and tell “at what time” (ablative) from “for how long” (accusative).</p>
  `,

  background: [
    {
      title: 'Counting in Rome',
      html: `
        <p>Roman numerals were a way of recording numbers, not of calculating with them. Sums were done on a counting board or a small bronze hand abacus with grooves and sliding beads, and the result was written down in numerals. A reconstruction of such an abacus is shown below; a few originals survive.</p>
        <p>The system is additive: <span class="la">I, V, X, L, C, D, M</span> for 1, 5, 10, 50, 100, 500, 1000, written from largest to smallest and added up (<span class="la">MDCLXVI</span> = 1666). The “subtractive” forms <span class="la">IV, IX, XL, XC</span>, where a smaller symbol before a larger one is taken away, do occur in Roman inscriptions, but <span class="la">IIII</span> and <span class="la">VIIII</span> are at least as common, and the subtractive forms became the rule only in the Middle Ages and later. Clock faces with <span class="la">IIII</span> continue the older habit. Where the symbols came from is uncertain: tally marks and Etruscan numerals are the usual explanations.</p>
        <p>Several Roman first names are ordinal numbers: <span class="la">Quīntus</span> (“fifth”), <span class="la">Sextus</span>, <span class="la">Decimus</span>, and the old <span class="la">Septimus</span>, <span class="la">Octāvius</span>. Whether they once marked order of birth or the month of birth is not known. Our Quintus, in any case, is a second son.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/RomanAbacusRecon.jpg/960px-RomanAbacusRecon.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/RomanAbacusRecon.jpg/500px-RomanAbacusRecon.jpg|https://upload.wikimedia.org/wikipedia/commons/b/b5/RomanAbacusRecon.jpg" alt="Small metal counting board with beads in grooves and Roman numerals beside them"><figcaption>A modern reconstruction of a Roman hand abacus, with beads sliding in grooves, one groove for each power of ten. Calculations were done on the board, and only the result was written down in numerals. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:RomanAbacusRecon.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'centum and hundert',
      html: `
        <p>Line up the numerals of Latin and German and the family likeness is plain: <span class="la">duo</span> <em>zwei</em>, <span class="la">trēs</span> <em>drei</em>, <span class="la">sex</span> <em>sechs</em>, <span class="la">septem</span> <em>sieben</em>, <span class="la">octō</span> <em>acht</em>, <span class="la">novem</span> <em>neun</em>, <span class="la">decem</span> <em>zehn</em>. The differences are regular. Latin <span class="la">d</span> and <span class="la">t</span> answer to German <em>z</em> or <em>d</em> (<span class="la">duo</span>, <em>zwei</em>; <span class="la">trēs</span>, <em>drei</em>), and Latin <span class="la">c</span> = <em>k</em> to Germanic <em>h</em>: <span class="la">centum</span>, <em>hundert</em>; <span class="la">decem</span> and Gothic <em>taíhun</em>. These are the sound shifts described by Grimm’s law.</p>
        <p><span class="la">centum</span> gave its name to a classic division of the Indo-European languages: “centum” languages, which kept a <em>k</em>-sound in the word for “hundred” (Latin, Greek <em>hekaton</em>, Germanic, Celtic), against “satem” languages, which turned it into a sibilant (Avestan <em>satəm</em>, Sanskrit <em>śatám</em>, Lithuanian <em>šimtas</em>). The terms are still used, though few scholars now think the division marks the earliest split of the family.</p>
        <p>Not every number is shared. Latin <span class="la">mīlle</span> has no clear relation to German <em>tausend</em>, which Germanic shares only with Baltic and Slavic. And the names of the months <em>September</em> to <em>Dezember</em> are numbers, “seventh” to “tenth”, because the older Roman year began in March.</p>
      `
    },
    {
      title: 'Roman hours',
      html: `
        <p>The Romans divided daylight into twelve hours (<span class="la">hōrae</span>) from sunrise to sunset, and the night into four watches (<span class="la">vigiliae</span>). An hour was therefore longer in summer than in winter: about 75 of our minutes at midsummer in Rome, about 45 at midwinter. The sixth hour ended at noon; Pliny’s <span class="la">hōrā ferē septimā</span>, “at about the seventh hour”, is early afternoon. Sundials and water clocks told the time for those who had them; most people went by the sun and by public signals.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Colosseum-Entrance_LII.jpg/960px-Colosseum-Entrance_LII.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Colosseum-Entrance_LII.jpg/500px-Colosseum-Entrance_LII.jpg|https://upload.wikimedia.org/wikipedia/commons/6/6b/Colosseum-Entrance_LII.jpg" alt="Stone arch of the Colosseum with the numeral LII carved above it"><figcaption>Entrance LII of the Colosseum, opened in AD 80. The arches of the ground floor were numbered so that spectators could find the way to their seats; the numerals are still visible above many of them. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Colosseum-Entrance_LII.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">dā mī bāsia mīlle, deinde centum,<br>dein mīlle altera, dein secunda centum,<br>deinde usque altera mīlle, deinde centum.<br>dein, cum mīlia multa fēcerimus …</p>
    <p>“Give me a thousand kisses, then a hundred, then another thousand, then a second hundred, then yet another thousand, then a hundred. Then, when we have made many thousands …” Catullus 5.7–10, checked against the copy in the course’s source files, length marks added.</p>
    <p><span class="la">mī</span> is the contracted form of <span class="la">mihi</span> (Lecture XII). <span class="la">mīlle</span> and <span class="la">centum</span> do not decline; <span class="la">mīlle altera</span>, “another thousand”, agrees with <span class="la">bāsia</span> (neuter plural). In the fourth line the plural <span class="la">mīlia</span> is a noun: “many thousands”. <span class="la">secunda</span> is an ordinal, “second”. The total so far is 3,300.</p>
    <p>Pliny begins the story of the eruption with a date and an hour: <span class="la">Nōnum Kal. Septembrēs hōrā ferē septimā māter mea indicat eī appārēre nūbem …</span>, “On the ninth day before the Kalends of September, at about the seventh hour, my mother points out to him that a cloud is appearing …” (<em>Letters</em> 6.16.4; on the disputed date see Lecture XV). <span class="la">hōrā septimā</span>: ablative of time. And Caesar’s <span class="la">Hōrum omnium fortissimī sunt Belgae</span>, “of all these the bravest are the Belgae” (<em>De bello Gallico</em> 1.1), is a genitive of the whole.</p>
  `,

  pronunciation: `
    <h3>The vowels of the numbers</h3>
    <p>Note the long vowels: <span class="la">ūnus, trēs, quīnque, octō, mīlle, ūndecim, sēdecim, vīgintī</span>; short in <span class="la">duo, sex, septem, novem, decem, centum</span>. <span class="la">quattuor</span> has double <span class="la">t</span>: <span class="la">QUAT-tu-or</span>.</p>
    <h3>Stress</h3>
    <p><span class="la">QUĪN-que, SEP-tem, NO-vem, DE-cem</span>; <span class="la">vī-GIN-tī, trī-GIN-tā, quīn-quā-GIN-tā</span> (the <span class="la">-gin-</span> is heavy before two consonants); <span class="la">du-o-dē-vī-GIN-tī</span>.</p>
    <h3>mīlle, mīlia</h3>
    <p>Singular with <span class="la">ll</span>, plural with one <span class="la">l</span>: <span class="la">MĪL-le</span>, <span class="la">MĪ-li-a</span>.</p>
  `,

  grammar: [
    {
      title: '1. Cardinal numbers',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Cardinal</th><th>Ordinal</th><th>Roman</th></tr></thead>
          <tbody>
            <tr><td>1</td><td class="la">ūnus, -a, -um</td><td class="la">prīmus</td><td class="la">I</td></tr>
            <tr><td>2</td><td class="la">duo, duae, duo</td><td class="la">secundus</td><td class="la">II</td></tr>
            <tr><td>3</td><td class="la">trēs, tria</td><td class="la">tertius</td><td class="la">III</td></tr>
            <tr><td>4</td><td class="la">quattuor</td><td class="la">quārtus</td><td class="la">IV (IIII)</td></tr>
            <tr><td>5</td><td class="la">quīnque</td><td class="la">quīntus</td><td class="la">V</td></tr>
            <tr><td>6</td><td class="la">sex</td><td class="la">sextus</td><td class="la">VI</td></tr>
            <tr><td>7</td><td class="la">septem</td><td class="la">septimus</td><td class="la">VII</td></tr>
            <tr><td>8</td><td class="la">octō</td><td class="la">octāvus</td><td class="la">VIII</td></tr>
            <tr><td>9</td><td class="la">novem</td><td class="la">nōnus</td><td class="la">IX (VIIII)</td></tr>
            <tr><td>10</td><td class="la">decem</td><td class="la">decimus</td><td class="la">X</td></tr>
            <tr><td>11</td><td class="la">ūndecim</td><td class="la">ūndecimus</td><td class="la">XI</td></tr>
            <tr><td>12</td><td class="la">duodecim</td><td class="la">duodecimus</td><td class="la">XII</td></tr>
            <tr><td>13–17</td><td class="la">tredecim, quattuordecim, quīndecim, sēdecim, septendecim</td><td></td><td></td></tr>
            <tr><td>18</td><td class="la">duodēvīgintī</td><td class="la">duodēvīcēsimus</td><td class="la">XVIII</td></tr>
            <tr><td>19</td><td class="la">ūndēvīgintī</td><td class="la">ūndēvīcēsimus</td><td class="la">XIX</td></tr>
            <tr><td>20</td><td class="la">vīgintī</td><td class="la">vīcēsimus</td><td class="la">XX</td></tr>
            <tr><td>30–90</td><td class="la">trīgintā, quadrāgintā, quīnquāgintā, sexāgintā, septuāgintā, octōgintā, nōnāgintā</td><td></td><td class="la">XXX … XC</td></tr>
            <tr><td>100</td><td class="la">centum</td><td class="la">centēsimus</td><td class="la">C</td></tr>
            <tr><td>200</td><td class="la">ducentī, -ae, -a</td><td class="la">ducentēsimus</td><td class="la">CC</td></tr>
            <tr><td>300–900</td><td class="la">trecentī, quadringentī, quīngentī, sescentī, septingentī, octingentī, nōngentī</td><td></td><td class="la">CCC … CM</td></tr>
            <tr><td>1000</td><td class="la">mīlle</td><td class="la">mīllēsimus</td><td class="la">M</td></tr>
            <tr><td>2000</td><td class="la">duo mīlia</td><td></td><td class="la">MM</td></tr>
          </tbody>
        </table></div>
        <p>18 and 19 are counted down from 20, “two from twenty”, “one from twenty” (compare English “quarter to”). Compound numbers above 20 join with or without <span class="la">et</span>: <span class="la">vīgintī ūnus</span> or <span class="la">ūnus et vīgintī</span>, “twenty-one”; the second is the German order, <em>einundzwanzig</em>.</p>
      `
    },
    {
      title: '2. Which numbers decline?',
      html: `
        <p><span class="la">ūnus</span> declines like <span class="la">sōlus</span> (Lecture X: <span class="la">ūnīus, ūnī</span>). <span class="la">duo</span> and <span class="la">trēs</span> have their own forms:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>duo m.</th><th>duae f.</th><th>duo n.</th><th>trēs m./f.</th><th>tria n.</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">duo</td><td class="la">duae</td><td class="la">duo</td><td class="la">trēs</td><td class="la">tria</td></tr>
            <tr><th>Gen.</th><td class="la">duōrum</td><td class="la">duārum</td><td class="la">duōrum</td><td class="la">trium</td><td class="la">trium</td></tr>
            <tr><th>Dat.</th><td class="la">duōbus</td><td class="la">duābus</td><td class="la">duōbus</td><td class="la">tribus</td><td class="la">tribus</td></tr>
            <tr><th>Acc.</th><td class="la">duōs (duo)</td><td class="la">duās</td><td class="la">duo</td><td class="la">trēs (trīs)</td><td class="la">tria</td></tr>
            <tr><th>Abl.</th><td class="la">duōbus</td><td class="la">duābus</td><td class="la">duōbus</td><td class="la">tribus</td><td class="la">tribus</td></tr>
          </tbody>
        </table></div>
        <p><span class="la">trēs</span> is simply a plural i-stem (Lecture XV). <span class="la">duo</span> preserves traces of the old dual number, the special form for pairs; the same ending appears in <span class="la">ambō</span>, “both”.</p>
        <p>From <span class="la">quattuor</span> to <span class="la">centum</span> the numbers do not decline at all: <span class="la">cum quattuor amīcīs</span>, <span class="la">decem nāvium</span>. The hundreds from 200 to 900 are plural adjectives like <span class="la">bonī, -ae, -a</span>: <span class="la">ducentae nāvēs</span>, <span class="la">trecentōrum mīlitum</span>.</p>
        <p><span class="la">mīlle</span> is an indeclinable adjective in the singular: <span class="la">mīlle mīlitēs</span>, “a thousand soldiers”. But the plural <span class="la">mīlia, mīlium, mīlibus</span> is a neuter i-stem noun, followed by a genitive: <span class="la">duo mīlia mīlitum</span>, “two thousand(s) of soldiers”. German <em>Tausende von Soldaten</em> shows the same idea.</p>
      `
    },
    {
      title: '3. Ordinal numbers',
      html: `
        <p>The ordinals are ordinary adjectives in <span class="la">-us, -a, -um</span> and agree with their noun: <span class="la">prīma hōra</span>, <span class="la">tertiō diē</span>, <span class="la">decimam legiōnem</span>. Most end in <span class="la">-tus</span>, <span class="la">-mus</span> or, from 20 upwards, <span class="la">-ēsimus</span>, which corresponds to German <em>-ste</em>: <span class="la">vīcēsimus</span>, <em>zwanzigste</em>.</p>
        <p><span class="la">secundus</span> is the odd one out: it is not built on <span class="la">duo</span> but on <span class="la">sequor</span>, “follow”, “the following one” (compare <span class="la">ventus secundus</span>, the following, favourable wind of Lecture XIII). For “the other of two” Latin also uses <span class="la">alter</span> (Lecture X).</p>
      `
    },
    {
      title: '4. The genitive of the whole',
      html: `
        <p>A word denoting a part or a quantity takes the genitive of the whole from which it is taken:</p>
        <ul>
          <li><span class="la">pars urbis</span>: part of the city.</li>
          <li><span class="la">satis pecūniae</span>: enough money (“enough of money”).</li>
          <li><span class="la">nihil novī</span>, <span class="la">quid novī?</span>: nothing new, what news? (German keeps a genitive of this kind only in fixed phrases such as <em>genug des Guten</em>.)</li>
          <li><span class="la">ūnus nostrum</span>: one of us (Lecture XII). <span class="la">Hōrum omnium fortissimī</span>: the bravest of all these (Caesar).</li>
          <li><span class="la">duo mīlia mīlitum</span>: two thousand soldiers.</li>
        </ul>
        <p>With cardinal numbers (except <span class="la">mīlia</span>) and with <span class="la">paucī</span>, “a few”, Latin prefers <span class="la">ex</span> or <span class="la">dē</span> + ablative, like German <em>von</em>:</p>
        <ul>
          <li><span class="la">ūnus ex amīcīs</span>: one of the friends (<em>einer von den Freunden</em>).</li>
          <li><span class="la">decem ex mīlitibus</span>: ten of the soldiers.</li>
        </ul>
      `
    },
    {
      title: '5. The ablative of time; the accusative of duration',
      html: `
        <p><strong>Time when</strong> or <strong>within which</strong>: the ablative, without a preposition.</p>
        <ul>
          <li><span class="la">prīmā hōrā</span>: at the first hour. <span class="la">eō diē</span>: on that day. <span class="la">hieme</span>: in winter. <span class="la">nocte</span>: at night.</li>
          <li><span class="la">paucīs hōrīs</span>: within a few hours. <span class="la">tribus annīs</span>: within three years.</li>
        </ul>
        <p><strong>Duration</strong>, how long something lasts: the accusative, also without a preposition.</p>
        <ul>
          <li><span class="la">trēs hōrās mānsērunt</span>: they stayed (for) three hours.</li>
          <li><span class="la">multōs annōs</span>: for many years.</li>
        </ul>
        <p>German uses the accusative for duration in exactly the same way: <em>Sie blieben drei Stunden</em>, <em>den ganzen Tag</em>. For a point in time German uses a preposition (<em>am dritten Tag</em>) or an old genitive (<em>eines Tages</em>); Latin uses the bare ablative. Keep the contrast in mind: <span class="la">tribus diēbus</span> “within three days”, <span class="la">trēs diēs</span> “for three days”.</p>
      `
    }
  ],

  vocab: [
    { id: 'duo', head: 'duo', la: 'duo, duae, duo', pos: 'numeral', en: 'two', stress: 'DU-o', deriv: 'dual, duet; zwei', note: 'Gen. duōrum, duārum; dat./abl. duōbus, duābus.' },
    { id: 'tres', head: 'trēs', la: 'trēs, tria', pos: 'numeral', en: 'three', stress: 'TRĒS · TRI-a', deriv: 'trio; drei', note: 'Gen. trium, dat./abl. tribus.' },
    { id: 'quattuor', head: 'quattuor', la: 'quattuor', pos: 'numeral (indecl.)', en: 'four', stress: 'QUAT-tu-or', deriv: 'quarter (from quārtus); vier' },
    { id: 'quinque', head: 'quīnque', la: 'quīnque', pos: 'numeral (indecl.)', en: 'five', stress: 'QUĪN-que', deriv: 'quintet; fünf' },
    { id: 'sex', head: 'sex', la: 'sex', pos: 'numeral (indecl.)', en: 'six', stress: 'SEX', deriv: 'sextet; sechs' },
    { id: 'septem', head: 'septem', la: 'septem', pos: 'numeral (indecl.)', en: 'seven', stress: 'SEP-tem', deriv: 'September; sieben' },
    { id: 'octo', head: 'octō', la: 'octō', pos: 'numeral (indecl.)', en: 'eight', stress: 'OC-tō', deriv: 'October, octave; acht' },
    { id: 'novem', head: 'novem', la: 'novem', pos: 'numeral (indecl.)', en: 'nine', stress: 'NO-vem', deriv: 'November; neun' },
    { id: 'decem', head: 'decem', la: 'decem', pos: 'numeral (indecl.)', en: 'ten', stress: 'DE-cem', deriv: 'December, decimal; zehn' },
    { id: 'viginti', head: 'vīgintī', la: 'vīgintī', pos: 'numeral (indecl.)', en: 'twenty', stress: 'vī-GIN-tī', deriv: 'vigesimal' },
    { id: 'centum', head: 'centum', la: 'centum', pos: 'numeral (indecl.)', en: 'a hundred', stress: 'CEN-tum', deriv: 'cent, century, per cent; hundert' },
    { id: 'mille', head: 'mīlle', la: 'mīlle; pl. mīlia, mīlium', pos: 'numeral', en: 'a thousand; pl. thousands', stress: 'MĪL-le · MĪ-li-a', deriv: 'mile, millennium', note: 'Sg. indeclinable adjective; pl. a neuter noun + gen.: tria mīlia cīvium.' },
    { id: 'secundus', head: 'secundus', la: 'secundus, -a, -um', pos: 'adjective / ordinal', en: 'second; following, favourable', stress: 'se-CUN-dus', deriv: 'second', note: 'From sequor, “follow”.' },
    { id: 'tertius', head: 'tertius', la: 'tertius, -a, -um', pos: 'ordinal', en: 'third', stress: 'TER-ti-us', deriv: 'tertiary' },
    { id: 'decimus', head: 'decimus', la: 'decimus, -a, -um', pos: 'ordinal', en: 'tenth', stress: 'DE-ci-mus', deriv: 'decimate' },
    { id: 'dies', head: 'diēs', la: 'diēs, diēī', g: 'm', pos: 'noun, 5th decl.', en: 'day', stress: 'DI-ēs', deriv: 'diary, dial', note: 'Full declension in Lecture XXIII. Abl. diē, pl. diēs, diērum, diēbus.' },
    { id: 'mensis', head: 'mēnsis', la: 'mēnsis, mēnsis', g: 'm', pos: 'noun, 3rd decl.', en: 'month', stress: 'MĒN-sis', deriv: 'menstrual', note: 'Gen. pl. mēnsium or mēnsum (Lecture XV).' },
    { id: 'ovis', head: 'ovis', la: 'ovis, ovis', g: 'f', pos: 'noun, 3rd decl. (i-stem)', en: 'sheep', stress: 'O-vis', deriv: 'ovine; related to ewe', note: 'Gen. pl. ovium.' },
    { id: 'sestertius', head: 'sēstertius', la: 'sēstertius, sēstertiī', g: 'm', pos: 'noun, 2nd decl.', en: 'sesterce (a small coin)', stress: 'sēs-TER-ti-us', note: 'From sēmis + tertius, “two and a half”: originally worth 2½ asses; abbreviated HS.' },
    { id: 'denarius', head: 'dēnārius', la: 'dēnārius, dēnāriī', g: 'm', pos: 'noun, 2nd decl.', en: 'denarius (a silver coin, worth four sesterces)', stress: 'dē-NĀ-ri-us', deriv: 'dinar; the d of £sd', note: 'From dēnī, “ten each”: originally worth ten asses.' },
    { id: 'numero', head: 'numerō', la: 'numerō, numerāre, numerāvī, numerātum', pos: 'verb, 1st conj.', en: 'count, number', stress: 'NU-me-rō · nu-me-RĀ-re', deriv: 'enumerate', note: 'From numerus (Lecture III).' },
    { id: 'computo', head: 'computō', la: 'computō, computāre, computāvī, computātum', pos: 'verb, 1st conj.', en: 'reckon, calculate', stress: 'COM-pu-tō · com-pu-TĀ-re', deriv: 'compute, computer' },
    { id: 'absum', head: 'absum', la: 'absum, abesse, āfuī', pos: 'verb, irregular', en: 'be away, be absent, be missing', stress: 'AB-sum · ab-ES-se', deriv: 'absent', note: 'ab + sum, conjugated like sum.' },
    { id: 'retineo', head: 'retineō', la: 'retineō, retinēre, retinuī, retentum', pos: 'verb, 2nd conj.', en: 'hold back, keep, retain', stress: 're-TI-ne-ō · re-ti-NĒ-re', deriv: 'retain, retention', note: 're + teneō.' },
    { id: 'ex', head: 'ex, ē', la: 'ex, ē (+ abl.)', pos: 'preposition', en: 'out of, from; of (with numbers)', stress: 'EX', deriv: 'exit', note: 'ē only before consonants; ex before vowels and often before consonants.' },
    { id: 'pauci', head: 'paucī', la: 'paucī, paucae, pauca', pos: 'adjective (pl.)', en: 'few, a few', stress: 'PAU-cī', deriv: 'paucity' },
    { id: 'quot', head: 'quot', la: 'quot (indecl.)', pos: 'interrogative adjective', en: 'how many?', stress: 'QUOT', deriv: 'quota, quotient', note: 'Also relative: “as many as”. Compare cotīdiē (Lecture VI).' }
  ],

  grammarCards: [
    { id: 'g16-1to10', front: 'Count from one to ten', back: 'ūnus, duo, trēs, quattuor, quīnque, sex, septem, octō, novem, decem' },
    { id: 'g16-ord', front: 'Ordinals 1st to 10th', back: 'prīmus, secundus, tertius, quārtus, quīntus, sextus, septimus, octāvus, nōnus, decimus' },
    { id: 'g16-duo', front: 'duo: all cases (m.)', back: 'duo, duōrum, duōbus, duōs (duo), duōbus' },
    { id: 'g16-tres', front: 'trēs: all cases', back: 'trēs/tria, trium, tribus, trēs (trīs)/tria, tribus' },
    { id: 'g16-indecl', front: 'Which numbers do not decline?', back: 'quattuor to centum, and mīlle in the singular' },
    { id: 'g16-mille', front: 'mīlle vs mīlia', back: 'mīlle mīlitēs (adj., indecl.); duo mīlia mīlitum (noun + gen.)' },
    { id: 'g16-18', front: '18 and 19', back: 'duodēvīgintī, ūndēvīgintī: “two from twenty”, “one from twenty”' },
    { id: 'g16-hundreds', front: '200, 300, 500', back: 'ducentī, trecentī, quīngentī (plural adjectives like bonī)' },
    { id: 'g16-roman', front: 'Roman numerals I V X L C D M', back: '1, 5, 10, 50, 100, 500, 1000' },
    { id: 'g16-iiii', front: 'IV or IIII?', back: 'Both are Roman; IIII is at least as common in inscriptions; subtractive forms became standard later.' },
    { id: 'g16-partgen', front: 'Genitive of the whole', back: 'pars urbis; satis pecūniae; nihil novī; duo mīlia mīlitum' },
    { id: 'g16-ex', front: '“one of the friends”', back: 'ūnus ex amīcīs (ex/dē + abl. with cardinals)' },
    { id: 'g16-abltime', front: 'Ablative of time', back: 'when or within which: prīmā hōrā, eō diē, paucīs hōrīs' },
    { id: 'g16-accdur', front: 'Accusative of duration', back: 'how long: trēs hōrās, multōs annōs (like German: drei Stunden lang)' },
    { id: 'g16-contrast', front: 'tribus diēbus vs trēs diēs', back: 'within three days vs for three days' },
    { id: 'g16-hours', front: 'The Roman hour', back: 'One twelfth of daylight, from sunrise; longer in summer. Sixth hour ends at noon.' },
    { id: 'g16-catullus', front: 'dā mī bāsia mīlle, deinde centum', back: 'give me a thousand kisses, then a hundred (Catullus 5.7)' },
    { id: 'g16-centum', front: 'centum and hundert', back: 'Related: Latin c (k) = Germanic h (Grimm’s law).' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Neuter of <span class="la">trēs</span>:', options: ['tria', 'tres', 'trium', 'tribus'], answer: 0, explain: 'trēs (m./f.), tria (n.).' },
    { id: 'e2', type: 'mc', prompt: '“two thousand soldiers”:', options: ['duo mīlia mīlitum', 'duo mīlle mīlitēs', 'duae mīlle mīlitum', 'duo mīlia mīlitēs'], answer: 0, explain: 'mīlia is a noun with the genitive.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">ūnus ex amīcīs</span>:', options: ['one of the friends', 'one friend out of the house', 'the first friend', 'a friend alone'], answer: 0, explain: 'ex + abl. after a cardinal.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">nocte</span>:', options: ['at night', 'for a night', 'of the night', 'night (subject)'], answer: 0, explain: 'Ablative of time when.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">paucīs hōrīs</span>:', options: ['within a few hours', 'for a few hours', 'a few hours ago', 'of a few hours'], answer: 0, explain: 'Ablative of time within which.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">multōs annōs</span> (with a verb like <span class="la">mānsit</span>):', options: ['for many years', 'in many years', 'within many years', 'many years ago'], answer: 0, explain: 'Accusative of duration.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Mārcus d___ fīliōs habet.</span>', hint: 'two', answers: ['uōs', 'uos', 'uo'], full: 'Mārcus duōs fīliōs habet.', explain: 'Accusative masculine: duōs (also duo).' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Puerī tr___ librōs lēgērunt.</span>', hint: 'three', answers: ['ēs', 'es', 'īs', 'is'], full: 'Puerī trēs librōs lēgērunt.', explain: 'Accusative masculine: trēs (or trīs).' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Prīm___ hōrā vēnimus.</span>', hint: 'at the first (hour)', answers: ['ā', 'a'], full: 'Prīmā hōrā vēnimus.', explain: 'Ablative of time; prīmus agrees with hōrā.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Satis pecūni___ nōn habeō.</span>', hint: '(of) money', answers: ['ae'], full: 'Satis pecūniae nōn habeō.', explain: 'Genitive of the whole after satis.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Duo mīl___ mīlitum vēnērunt.</span>', hint: 'thousand (pl.)', answers: ['ia'], full: 'Duo mīlia mīlitum vēnērunt.', explain: 'Neuter plural noun.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Ūnus ___ cīvibus clāmāvit.</span>', hint: 'of (out of)', answers: ['ex', 'ē', 'e', 'dē', 'de'], full: 'Ūnus ex cīvibus clāmāvit.', explain: 'ex/dē + abl. after a cardinal.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">duo</span>.', headers: ['m.', 'f.', 'n.'], rows: [
      { label: 'Nom.', answers: ['duo', 'duae', 'duo'] },
      { label: 'Gen.', answers: ['duōrum', 'duārum', 'duōrum'] },
      { label: 'Dat.', answers: ['duōbus', 'duābus', 'duōbus'] },
      { label: 'Acc.', answers: ['duōs|duo', 'duās', 'duo'] },
      { label: 'Abl.', answers: ['duōbus', 'duābus', 'duōbus'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">trēs</span>.', headers: ['m./f.', 'n.'], rows: [
      { label: 'Nom.', answers: ['trēs', 'tria'] },
      { label: 'Gen.', answers: ['trium', 'trium'] },
      { label: 'Dat.', answers: ['tribus', 'tribus'] },
      { label: 'Acc.', answers: ['trēs|trīs', 'tria'] },
      { label: 'Abl.', answers: ['tribus', 'tribus'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match the Roman numerals to their values.', pairs: [
      ['XIV', '14'], ['XL', '40'], ['XC', '90'], ['CD', '400'], ['MMXXVI', '2026']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Prīmā hōrā Mārcus in forum vēnit.', tokens: ['At the first hour', 'Marcus', 'came', 'into the forum'], explain: 'prīmā hōrā: ablative of time.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Decem ex mīlitibus fūgērunt.', model: 'Ten of the soldiers fled.', accepted: ['ten of soldiers fled', 'ten of soldiers have fled', 'ten of soldiers ran away', 'ten out of soldiers fled', 'ten of soldiers escaped'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Eō diē multōs librōs lēgit.', model: 'On that day he read many books.', accepted: ['on that day he read many books', 'that day he read many books', 'on that day she read many books', 'that day she read many books', 'on that day he has read many books', 'he read many books on that day', 'he read many books that day', 'she read many books on that day'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Trēs annōs in Graeciā mānsit.', model: 'He stayed in Greece for three years.', accepted: ['he stayed in greece for three years', 'he stayed for three years in greece', 'he remained in greece for three years', 'he remained for three years in greece', 'she stayed in greece for three years', 'he stayed three years in greece', 'he has stayed in greece for three years', 'he stayed in greece three years'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'two girls (nom.)', model: 'duae puellae', accepted: ['duae puellae'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'at night (one word)', model: 'nocte', accepted: ['nocte'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'three thousand citizens (nom.)', model: 'tria mīlia cīvium', accepted: ['tria mīlia cīvium'] },
    { id: 'e23', type: 'mc', prompt: 'In Catullus 5.7–9, how many kisses does the poet ask for in total?', options: ['3,300', '1,100', '2,200', '6,000'], answer: 0, explain: '1000 + 100 + 1000 + 100 + 1000 + 100.' },
    { id: 'e24', type: 'mc', prompt: 'Pliny’s <span class="la">hōrā ferē septimā</span> means roughly:', options: ['early afternoon', 'seven o’clock in the morning', 'seven in the evening', 'midnight'], answer: 0, explain: 'Hours counted from sunrise; the sixth ends at noon.' },
    { id: 'e25', type: 'mc', prompt: 'Why are <em>September</em> to <em>December</em> named “seventh” to “tenth”?', options: ['The older Roman year began in March', 'They were named by Julius Caesar for his victories', 'The Roman year had only ten months until the Middle Ages', 'They are named after emperors'], answer: 0, explain: 'Counting from March, September is the seventh month.' }
  ],

  reading: {
    title: 'Nūndinae',
    note: 'Original passage: market day in the town. Tap any word.',
    text: 'Nūndinae erant, et Mārcus cum duōbus fīliīs prīmā hōrā in forum oppidī vēnit. Sēcum vīgintī ovēs dūcēbat, et duo servī trēs saccōs frūmentī portābant. In forō multī hominēs erant: aliī emēbant, aliī vendēbant. Mārcus ovēs suās mercātōrī vendere cupiēbat. “Quot ovēs habēs?” rogāvit mercātor. “Vīgintī,” respondit Mārcus. Mercātor eās numerāvit: “Ūna, duae, trēs … ūndēvīgintī! Ūna ex ovibus abest!” Quīntus rīsit: “Ūnam ovem canis noster hodiē māne in agrō retinuit.” Tum mercātor: “Prō ūndēvīgintī ovibus tibi trecentōs sēstertiōs dabō.” Mārcus: “Nōn trecentōs, sed quadringentōs!” Trēs hōrās inter sē disputāvērunt; tandem mercātor trecentōs quīnquāgintā sēstertiōs dedit. Gāius patrem interrogāvit: “Pater, quot sēstertiī sunt in ūnō dēnāriō?” “Quattuor,” respondit Mārcus. Gāius diū cōgitāvit: “Ergō trecentī quīnquāgintā sēstertiī sunt octōgintā septem dēnāriī et duo sēstertiī!” Mārcus rīsit: “Bene, Gāī! Satis pecūniae nunc habēmus, et tū numerōs amās: tū ratiōnēs nostrās cūrābis.” Sextā hōrā ad vīllam vēnērunt, et paucīs hōrīs omnēs dormiēbant.',
    translation: 'It was market day, and at the first hour Marcus came into the town’s forum with his two sons. He was leading twenty sheep with him, and two slaves were carrying three sacks of grain. In the forum there were many people: some were buying, others selling. Marcus wanted to sell his sheep to a dealer. “How many sheep have you got?” asked the dealer. “Twenty,” answered Marcus. The dealer counted them: “One, two, three … nineteen! One of the sheep is missing!” Quintus laughed: “Our dog kept one sheep back in the field this morning.” Then the dealer: “For nineteen sheep I shall give you three hundred sesterces.” Marcus: “Not three hundred, but four hundred!” For three hours they argued with each other; at last the dealer gave three hundred and fifty sesterces. Gaius asked his father: “Father, how many sesterces are there in one denarius?” “Four,” answered Marcus. Gaius thought for a long time: “So three hundred and fifty sesterces are eighty-seven denarii and two sesterces!” Marcus laughed: “Well done, Gaius! We have enough money now, and you love numbers: you shall look after our accounts.” At the sixth hour they came to the farm, and within a few hours everyone was asleep.',
    notes: [
      { ref: 'Nūndinae erant', html: '<span class="la">nūndinae, -ārum</span>: market day, held every eighth day. The name means “ninth day”, because Romans counted inclusively, both ends included, as German <em>in acht Tagen</em> for “in a week” does too.' },
      { ref: 'prīmā hōrā', html: 'Ablative of time: “at the first hour”, just after sunrise.' },
      { ref: 'Sēcum vīgintī ovēs dūcēbat', html: '<span class="la">sēcum</span>: “with him(self)” (Lecture XIV). <span class="la">ovis, ovis</span> f.: sheep, an i-stem (Lecture XV); related to English <em>ewe</em>.' },
      { ref: 'trēs saccōs frūmentī', html: 'The genitive names the contents: “three sacks of grain”.' },
      { ref: 'Quot ovēs habēs?', html: '<span class="la">quot</span>: “how many?”, indeclinable.' },
      { ref: 'Ūna ex ovibus abest', html: '<span class="la">ūna ex ovibus</span>: “one of the sheep”, <span class="la">ex</span> + ablative after a cardinal. <span class="la">ūna</span> is feminine because <span class="la">ovis</span> is. <span class="la">absum</span>: be away, be missing.' },
      { ref: 'Prō ūndēvīgintī ovibus tibi trecentōs sēstertiōs dabō', html: '<span class="la">prō</span>: “in return for”. <span class="la">trecentōs</span>: the hundreds decline (accusative masculine plural). A <span class="la">sēstertius</span> was a small silver (later brass) coin; four made a <span class="la">dēnārius</span>. Prices in sheep are hard to compare across the centuries; take these as illustrative.' },
      { ref: 'Trēs hōrās inter sē disputāvērunt', html: 'Accusative of duration: “for three hours”.' },
      { ref: 'octōgintā septem dēnāriī et duo sēstertiī', html: '350 ÷ 4 = 87, remainder 2. Gaius’s arithmetic is correct.' },
      { ref: 'Satis pecūniae nunc habēmus', html: 'Genitive of the whole after <span class="la">satis</span>.' },
      { ref: 'tū ratiōnēs nostrās cūrābis', html: '<span class="la">ratiō</span> (Lecture IX), here “accounts”. A future used as a mild command: “you shall look after …”.' },
      { ref: 'Sextā hōrā ad vīllam vēnērunt, et paucīs hōrīs omnēs dormiēbant', html: '<span class="la">sextā hōrā</span>: at noon (time when). <span class="la">paucīs hōrīs</span>: within a few hours (time within which).' }
    ],
    glosses: {
      'nūndinae': 'market day (pl.)', 'erant': 'were; it was', 'et': 'and', 'mārcus': 'Marcus (nom.)', 'cum': 'with (+ abl.)', 'duōbus': 'abl. pl. of duo: two', 'fīliīs': 'abl. pl. of fīlius: sons', 'prīmā': 'abl. f. of prīmus: first', 'hōrā': 'abl. of hōra: hour', 'in': 'in (+ abl.); into (+ acc.)', 'forum': 'acc. of forum: market place', 'oppidī': 'gen. of oppidum: of the town', 'vēnit': 'perf. 3rd sg. of veniō: came',
      'sēcum': 'with him(self)', 'vīgintī': 'twenty', 'ovēs': 'acc. pl. of ovis: sheep', 'dūcēbat': 'impf. 3rd sg. of dūcō: was leading', 'duo': 'two', 'servī': 'nom. pl. of servus: slaves', 'trēs': 'three', 'saccōs': 'acc. pl. of saccus: sacks', 'frūmentī': 'gen. of frūmentum: of grain', 'portābant': 'impf. 3rd pl. of portō: were carrying',
      'forō': 'abl. of forum', 'multī': 'many', 'hominēs': 'nom. pl. of homō: people', 'aliī': 'some … others', 'emēbant': 'impf. 3rd pl. of emō: were buying', 'vendēbant': 'impf. 3rd pl. of vendō: were selling',
      'suās': 'acc. pl. f. of suus: his own', 'mercātōrī': 'dat. of mercātor: to a dealer', 'vendere': 'to sell', 'cupiēbat': 'impf. 3rd sg. of cupiō: wanted',
      'quot': 'how many?', 'habēs': 'you have', 'rogāvit': 'perf. 3rd sg. of rogō: asked', 'mercātor': 'dealer, merchant (nom.)', 'respondit': 'perf. 3rd sg. of respondeō: answered', 'eās': 'acc. pl. f. of is: them', 'numerāvit': 'perf. 3rd sg. of numerō: counted',
      'ūna': 'one (f.)', 'duae': 'two (f.)', 'ūndēvīgintī': 'nineteen', 'ex': 'out of, of (+ abl.)', 'ovibus': 'abl./dat. pl. of ovis: sheep', 'abest': '3rd sg. of absum: is missing',
      'quīntus': 'Quintus (nom.)', 'rīsit': 'perf. 3rd sg. of rīdeō: laughed', 'ūnam': 'acc. f. of ūnus: one', 'ovem': 'acc. of ovis: sheep', 'canis': 'dog (nom.)', 'noster': 'our', 'hodiē': 'today', 'māne': 'in the morning', 'agrō': 'abl. of ager: field', 'retinuit': 'perf. 3rd sg. of retineō: kept back',
      'tum': 'then', 'prō': 'for, in return for (+ abl.)', 'tibi': 'dat. of tū: to you', 'trecentōs': 'acc. pl. m. of trecentī: three hundred', 'sēstertiōs': 'acc. pl. of sēstertius: sesterces', 'dabō': 'fut. 1st sg. of dō: I shall give',
      'nōn': 'not', 'sed': 'but', 'quadringentōs': 'acc. pl. m. of quadringentī: four hundred', 'hōrās': 'acc. pl. of hōra: hours', 'inter': 'between, among (+ acc.)', 'sē': 'themselves (inter sē: with each other)', 'disputāvērunt': 'perf. 3rd pl. of disputō: argued', 'tandem': 'at last', 'quīnquāgintā': 'fifty', 'dedit': 'perf. 3rd sg. of dō: gave',
      'gāius': 'Gaius (nom.)', 'patrem': 'acc. of pater: father', 'interrogāvit': 'perf. 3rd sg. of interrogō: asked', 'pater': 'father (voc.)', 'sēstertiī': 'nom. pl. of sēstertius: sesterces', 'sunt': 'are', 'ūnō': 'abl. m. of ūnus: one', 'dēnāriō': 'abl. of dēnārius: denarius', 'quattuor': 'four',
      'diū': 'for a long time', 'cōgitāvit': 'perf. 3rd sg. of cōgitō: thought', 'ergō': 'therefore, so', 'trecentī': 'three hundred (nom. m.)', 'octōgintā': 'eighty', 'septem': 'seven', 'dēnāriī': 'nom. pl. of dēnārius: denarii',
      'bene': 'well (done)', 'gāī': 'voc. of Gāius', 'satis': 'enough', 'pecūniae': 'gen. of pecūnia: (of) money', 'nunc': 'now', 'habēmus': 'we have', 'tū': 'you (sg.)', 'numerōs': 'acc. pl. of numerus: numbers', 'amās': 'you love', 'ratiōnēs': 'acc. pl. of ratiō: accounts', 'nostrās': 'acc. pl. f. of noster: our', 'cūrābis': 'fut. 2nd sg. of cūrō: you will look after',
      'sextā': 'abl. f. of sextus: sixth', 'ad': 'to (+ acc.)', 'vīllam': 'acc. of vīlla: farm, country house', 'vēnērunt': 'perf. 3rd pl. of veniō: came', 'paucīs': 'abl. pl. of paucī: a few', 'hōrīs': 'abl. pl. of hōra: hours', 'omnēs': 'all, everyone', 'dormiēbant': 'impf. 3rd pl. of dormiō: were asleep'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'How many sheep did Marcus think he had?', options: ['Twenty', 'Nineteen', 'Three', 'Fifty'], answer: 0, explain: 'Vīgintī, respondit Mārcus.' },
      { id: 'r2', type: 'mc', prompt: 'Why was one sheep missing?', options: ['The dog had kept it back in the field', 'The dealer had stolen it', 'It had run away in the forum', 'Gaius had sold it'], answer: 0, explain: 'Ūnam ovem canis noster … retinuit.' },
      { id: 'r3', type: 'mc', prompt: 'How much did the dealer pay in the end?', options: ['350 sesterces', '300 sesterces', '400 sesterces', '87 sesterces'], answer: 0, explain: 'trecentōs quīnquāgintā sēstertiōs dedit.' },
      { id: 'r4', type: 'mc', prompt: 'What task does Marcus give Gaius?', options: ['Looking after the family accounts', 'Selling the grain', 'Guarding the sheep', 'Writing to Lucius'], answer: 0, explain: 'tū ratiōnēs nostrās cūrābis.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">duodēvīgintī</span>:', options: ['18', '22', '12', '28'], answer: 0, explain: 'Two from twenty.' },
      { id: 't2', type: 'mc', prompt: 'Genitive of <span class="la">trēs</span>:', options: ['trium', 'trēsum', 'triōrum', 'tribus'], answer: 0, explain: 'Like an i-stem plural.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">MCMXIV</span>:', options: ['1914', '1814', '1916', '2114'], answer: 0, explain: 'M + CM + X + IV.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Tert___ diē Lūcius vēnit.</span>', hint: 'on the third (day)', answers: ['iō', 'io'], full: 'Tertiō diē Lūcius vēnit.', explain: 'Ablative of time; tertius agrees with diē (masculine).' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Nihil nov___ audīvī.</span>', hint: '(of) new', answers: ['ī', 'i'], full: 'Nihil novī audīvī.', explain: 'Genitive of the whole: “nothing of new”.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Hieme in urbe mānsimus.', model: 'In winter we stayed in the city.', accepted: ['in winter we stayed in city', 'we stayed in city in winter', 'in winter we remained in city', 'we remained in city in winter', 'in winter we have stayed in city', 'during winter we stayed in city', 'we stayed in city during winter'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'for many hours', model: 'multās hōrās', accepted: ['multās hōrās'] },
      { id: 't8', type: 'mc', prompt: '<span class="la">mīlle nāvēs</span> or <span class="la">mīlia nāvēs</span>?', options: ['mīlle nāvēs', 'mīlia nāvēs', 'both', 'neither'], answer: 0, explain: 'Singular mīlle is an indeclinable adjective.' },
      { id: 't9', type: 'mc', prompt: 'Which ordinal is NOT formed from its cardinal?', options: ['secundus', 'tertius', 'quārtus', 'decimus'], answer: 0, explain: 'secundus comes from sequor, “follow”.' },
      { id: 't10', type: 'mc', prompt: 'In Catullus 5, <span class="la">mī</span> is:', options: ['a contracted form of mihi', 'a form of meus', 'a numeral', 'an exclamation'], answer: 0, explain: 'dā mī bāsia: give me kisses.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">Hōrum omnium fortissimī sunt Belgae.</span> <span class="la">Hōrum omnium</span> is:', options: ['a genitive of the whole', 'an ablative of time', 'an accusative of duration', 'a dative'], answer: 0, explain: '“Of all these”.' }
    ]
  },

  reference: [
    { title: 'Numbers', headers: ['', 'Cardinal', 'Ordinal', 'Roman'], rows: [
      ['1', 'ūnus', 'prīmus', 'I'], ['2', 'duo', 'secundus', 'II'], ['3', 'trēs', 'tertius', 'III'], ['4', 'quattuor', 'quārtus', 'IV'], ['5', 'quīnque', 'quīntus', 'V'], ['6', 'sex', 'sextus', 'VI'], ['7', 'septem', 'septimus', 'VII'], ['8', 'octō', 'octāvus', 'VIII'], ['9', 'novem', 'nōnus', 'IX'], ['10', 'decem', 'decimus', 'X'],
      ['11', 'ūndecim', 'ūndecimus', 'XI'], ['12', 'duodecim', 'duodecimus', 'XII'], ['18', 'duodēvīgintī', 'duodēvīcēsimus', 'XVIII'], ['19', 'ūndēvīgintī', 'ūndēvīcēsimus', 'XIX'], ['20', 'vīgintī', 'vīcēsimus', 'XX'], ['50', 'quīnquāgintā', 'quīnquāgēsimus', 'L'], ['100', 'centum', 'centēsimus', 'C'], ['500', 'quīngentī', 'quīngentēsimus', 'D'], ['1000', 'mīlle', 'mīllēsimus', 'M']
    ] },
    { title: 'duo and trēs', headers: ['', 'duo m.', 'duae f.', 'trēs m./f.', 'tria n.'], rows: [
      ['Nom.', 'duo', 'duae', 'trēs', 'tria'], ['Gen.', 'duōrum', 'duārum', 'trium', 'trium'], ['Dat./Abl.', 'duōbus', 'duābus', 'tribus', 'tribus'], ['Acc.', 'duōs (duo)', 'duās', 'trēs (trīs)', 'tria']
    ] },
    { title: 'Time', headers: ['Question', 'Case', 'Example'], rows: [
      ['When?', 'ablative', 'prīmā hōrā, eō diē, nocte'], ['Within what time?', 'ablative', 'paucīs hōrīs'], ['How long?', 'accusative', 'trēs hōrās, multōs annōs']
    ] }
  ]
});
