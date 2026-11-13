/*
 * Middle High German — Lecture XI: prose and charters.
 * Reading: Berthold of Regensburg, sermon XXXVII “Von Dâvîdes drîen buozen”, transcribed from the page images of
 * Joseph Strobl’s edition (Berthold von Regensburg, vol. 2, Vienna 1880), p. 2, line 28 – p. 4, line 29.
 * Source panel: charter of Albrecht Pfaffenhofen, Ebingen, 21 September 1285, Wirtembergisches Urkundenbuch vol. 9
 * (Stuttgart 1907), no. 3469, pp. 39–40, transcribed from the page images.
 * Schwabenspiegel quotation: Zeumer, Quellensammlung, no. 82 (76), p. 105 (Wikisource transcription, checked against the page image).
 * See CONTENT-CHECKS.md.
 */
Viator.addLecture('mhd', {
  id: 'mhd-11',
  number: 11,
  title: 'Von Dâvîdes drîen buozen',
  subtitle: 'Prose and charters: a sermon of Berthold of Regensburg, a charter from Ebingen (1285) and the Schwabenspiegel',
  minutes: 60,

  intro: `
    <p>Everything you have read in this course so far has been verse. Yet from the middle of the 13th century German was increasingly written in prose, and for purposes that verse never served: to preach, to set down the law, and to record who sold what to whom, before which witnesses, on which day. These texts are the direct ancestors of written modern German, and for anyone who wants to read the documents of southern and central Germany they are the real goal of learning Middle High German.</p>
    <p>This last lecture brings together three kinds of prose. The reading is from a sermon of Berthold of Regensburg, the most famous preacher of 13th-century Germany, retelling the story of King David’s census and the three punishments offered to him. The source panel is a complete charter of 1285 from Ebingen on the Swabian Alb, printed in its original spelling. And a section on the law book known as the Schwabenspiegel shows the language of the courts.</p>
    <p>The grammar here is mostly familiar. What is new is reading long sentences, recognising the fixed formulas of documents, and coping with spellings that no editor has normalised. By the end you should be able to follow Berthold’s narrative with the glosses, take a charter apart into its standard sections, and read its Swabian spellings.</p>
  `,

  background: [
    {
      title: 'German prose and German documents',
      html: `
        <p>Until well into the 13th century, legal and administrative writing in Germany was almost entirely in Latin. German charters appear in numbers only from the middle of the century, first and most densely in the south-west: the upper Rhine, Swabia and the area of modern Switzerland. By 1300 several thousand German-language original charters survive, and in the 14th century German becomes normal in many chanceries, while Latin remains the language of the Church and of much of the Empire’s business. Several of the neighbouring documents in the Württemberg charter collection, from the same weeks of 1285 as our charter, are still in Latin.</p>
        <p>German prose literature grew at the same time: sermons, law books (the Sachsenspiegel of Eike von Repgow, written in Low German around 1220–35, and its southern descendants), the prose <em>Lancelot</em>, the writings of mystics such as Mechthild of Magdeburg and Meister Eckhart, and chronicles. Editors treat the two kinds differently. Literary prose is often printed in normalised spelling, as Strobl prints Berthold. Charters are printed as they are written, because where and when a document was made is part of its evidence, and its spelling tells you both.</p>
      `
    },
    {
      title: 'Berthold of Regensburg',
      html: `
        <p>Berthold was a Franciscan friar of Regensburg who died in 1272. He preached across southern Germany, Austria, Switzerland and beyond, often in the open air because no church could hold his audiences; chroniclers report crowds of many thousands, and their figures are probably not exact. His Latin model sermons survive in his own collections. The German sermons are a different matter: they were written down, probably by Franciscans in Augsburg in the later 13th century, as texts for reading. Scholars agree that they are not transcripts of what he said; how closely they preserve his preaching is debated.</p>
        <p>They still sound like a preacher. Berthold addresses his hearers directly (<span class="la">ir hêrschaft</span>, “you gentlefolk”), imagines their objections in their own words, and answers them:</p>
        <p class="la">‘Bruoder Bertholt, du machst uns den wec gar enge zuo dem himelrîche und gar hart und gar sorclich.’ Seht, ich machez anders niht, wanne als im ist und dennoch niht gar.</p>
        <p>“‘Brother Berthold, you make the way to heaven very narrow for us, and very hard and very anxious.’ Look, I make it no other than it is, and not even that” (Strobl, vol. 2, p. 2). The reading begins at this point. His sermons were edited by Franz Pfeiffer (vol. 1, 1862) and, after Pfeiffer’s death, by Joseph Strobl (vol. 2, 1880).</p>
      `
    },
    {
      title: 'The Schwabenspiegel and the two swords',
      html: `
        <p>The Sachsenspiegel was adapted for southern Germany in Augsburg in the 1270s, first as the so-called Deutschenspiegel and then as a much larger law book, the “Kaiserliches Land- und Lehnrechtsbuch”, which since the early modern period has been called the Schwabenspiegel. It survives in several hundred manuscripts. Many scholars think it was compiled in the same Franciscan house at Augsburg from which the German Berthold sermons came. Karl Zeumer dated it 1274/5. It opens with the doctrine of the two swords, spiritual and worldly power:</p>
        <p class="la">Sit nu Got des frides furste haizet, so liez er zwai swert hie uf ertriche, do er ze himel fuor, ze schirme der cristenhait; diu lech unser herre sante Peter beidiu, einz von geistlichem gerihte, daz ander von weltlichem gerihte. Das weltlich swert des gerihtes daz lihet der babest dem chaiser, daz geistlich ist dem pabest gesezet, daz er da mite rihte.</p>
        <p>“Since God is called the prince of peace, he left two swords here on earth when he went up to heaven, for the protection of Christendom. Our Lord lent both of them to St Peter, one for spiritual and the other for worldly judgement. The worldly sword of judgement the pope lends to the emperor; the spiritual sword is given to the pope, that he may judge with it.” From Zeumer’s <em>Quellensammlung zur Geschichte der Deutschen Reichsverfassung</em>, no. 82, p. 105, following the Laßberg manuscript; note its unnormalised spelling (<span class="la">haizet, zwai, cristenhait, chaiser</span>).</p>
        <p>The Sachsenspiegel gives one sword to the pope and one to the emperor; the Schwabenspiegel gives both to St Peter, so that the emperor holds his sword from the pope. It is the same quarrel between the two powers that Walther described in the Reichston (Lecture X), seen from the Church’s side.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources: a charter of 1285</p>
    <p class="la">Allen dien, die disen brief lesent oder hȯrent lesen, kúnde und vergihe ich Albrecht, dem man spricht Phaffenhoven, daz ich und Hainrich min brůder, haigen uns verzigen und williklichen uf gegeben in der erberon und der redelicher vrȯwen hant . . der ebtischen und der samenunge von Hailich Cruzes Tal aller der ansprache und dez rechtes, so wir soltin oder mȯchtin han nach dekainer slachte rechte an dem gůte und uf dem gůte, ez si lúzel oder vil, daz die selben vrȯwen dú ebtischen und dú samenunge von dez Hailic Crúzes Tal kȯften und hant gekůfet umbe Walther von Incstettin und sin sun Walther, daz da ze Biswangen lit, wan mir Albrechte die vor genanden vrȯwen dú ebtischin und dú samenunge dar umbe gaben drú phunt Haller. Und daz daz war si und iemer ane wanc stete belibe, dar umbe geben wir disen offen brief besigelt mit dem wachszaichen mines insigels und dez schulthaizen Albrechtes der stat von Ebingen, und beschach daz in der stat ze Ebingen, in dem ersten herbestmanode an sant Matheus tage, do von gottis geburt waren túsent zwaihundert achzic und funf jar, und waren daran brůder Burchart der phister und brůder Hainrich der smit von dez Hailigen Crúzes Tal und Gȯtfrit von Tieringen und Albrecht der schulthaize von Ebingen und Berchtolt von Honstettin sin brůder und Cůnrat Salche und Eberhart von Mestettin und Ůlrich Rinderschenkel und Albrecht der Koch und Hainrich der Waibel und Cůnrat Stúrmeli und Ebeli der Mazze und ander biderbe lúte gnůge, die ih alle dar uber ze gezúge gibe, si sin min gnoze oder niht. Ich Albrecht der schulthaize von Ebingen gibe minen insigel an disen brief, von der bette Albrechtes Phaffenhoven und Hainrich sines brůders. Ich Hainrich Phaffenhoven vergihe an diesem briefe, under Albrecht mines brůders und Albrecht des schulthaizen von Ebingen insigel, wan ich aigens insigels niht enhan, daz alles das war ist, und ich stete han, das an disem briefe geschriben stat.</p>
    <p>“To all who read this letter or hear it read, I, Albrecht, called Pfaffenhofen, make known and declare that I and Heinrich my brother have renounced and willingly given up into the hands of the honourable and upright ladies, the abbess and the convent of Heiligkreuztal, every claim and every right that we should or might have, by any kind of right, to and upon the property, be it little or much, which these same ladies, the abbess and the convent of Heiligkreuztal, bought from Walther of Ingstetten and his son Walther, which lies at Biswangen; for which the said ladies, the abbess and the convent, gave me, Albrecht, three pounds of Heller. And so that this is true and remains firm for ever without wavering, we give this open letter sealed with the wax impression of my seal and that of Albrecht, the Schultheiß of the town of Ebingen. This was done in the town of Ebingen in the first autumn month, on St Matthew’s day, when one thousand two hundred and eighty-five years had passed since the birth of God. Present were brother Burchart the baker and brother Heinrich the smith of Heiligkreuztal, Gottfried of Tieringen, Albrecht the Schultheiß of Ebingen and his brother Berchtold of Honstetten, Konrad Salche, Eberhart of Meßstetten, Ulrich Rinderschenkel, Albrecht the cook, Heinrich the Waibel, Konrad Stürmeli, Ebeli the Mazze, and enough other honest people, all of whom I name as witnesses to it, whether they are my peers or not. I, Albrecht the Schultheiß of Ebingen, put my seal to this letter at the request of Albrecht Pfaffenhofen and Heinrich his brother. I, Heinrich Pfaffenhofen, declare in this letter, under the seals of Albrecht my brother and of Albrecht the Schultheiß of Ebingen, since I have no seal of my own, that all that is written in this letter is true and that I hold to it.”</p>
    <p><em>Wirtembergisches Urkundenbuch</em>, vol. 9 (Stuttgart 1907), no. 3469, pp. 39–40, printed in the charter’s own spelling with its marks over the vowels (<span class="la">brůder, hȯrent, kúnde</span>). The editor’s heading dates it Ebingen, 21 September 1285, and names the place Binzwangen; the text has <span class="la">Biswangen</span>. Both seals, he notes, are lost. Section 4 takes the charter apart.</p>
  `,

  pronunciation: `
    <h3>Reading charter spelling</h3>
    <p>The charter is printed as written, and its spelling is Swabian. Read it with the normalised forms in mind:</p>
    <ul>
      <li><span class="la">ai</span> for <span class="la">ei</span>: <span class="la">Hainrich, haigen, dekainer, zwaihundert, schulthaize, aigens, Hailich</span>. Swabian dialects still keep this <em>ei</em> apart from the <em>ei</em> that came from Middle High German <span class="la">î</span> (Swabian <em>Hoimet</em>, “Heimat”).</li>
      <li>Marks over vowels: <span class="la">ů</span> for <span class="la">uo</span> (<span class="la">brůder, gůte, Cůnrat</span>); <span class="la">ú</span> usually for <span class="la">iu</span> or <span class="la">ü</span> (<span class="la">dú</span> = <span class="la">diu</span>, <span class="la">drú</span> = <span class="la">driu</span>, <span class="la">lúte</span> = <span class="la">liute</span>, <span class="la">túsent</span>); <span class="la">ȯ</span> for <span class="la">ö</span> or <span class="la">ou</span> (<span class="la">hȯrent</span> = <span class="la">hœrent</span>, <span class="la">vrȯwen</span> = <span class="la">vrouwen</span>, <span class="la">kȯften</span> = <span class="la">kouften</span>).</li>
      <li>No length marks, and unstressed vowels written in several ways: <span class="la">soltin, mȯchtin, gottis</span> for <span class="la">solten, möhten, gotes</span>.</li>
      <li><span class="la">ph</span> for <span class="la">pf</span>: <span class="la">phunt, phister, Phaffenhoven</span>.</li>
    </ul>
    <h3>Reading Berthold aloud</h3>
    <p>Strobl’s text is normalised, with circumflexes, and reads like the verse texts. Berthold’s sentences are long but built from short pieces joined by <span class="la">und</span>; pause at each <span class="la">und</span> and at each <span class="la">dô</span>. <span class="la">dér</span> with an accent (<span class="la">ich wil dér buoze niht</span>) is Strobl’s mark for emphasis: “<em>that</em> penance I do not want”.</p>
  `,

  grammar: [
    {
      title: '1. How Berthold builds a sentence',
      html: `
        <p>Spoken prose of this kind joins clauses one after another rather than nesting them:</p>
        <ul>
          <li><strong><span class="la">und</span> chains</strong>: <span class="la">dô legte er sich in dem tempel an sîn venje und ruofte got an und sprach …</span></li>
          <li><strong><span class="la">dô … dô</span></strong>: “when … then”: <span class="la">Und als der liutsterbe an vienc, dô stuont ein engel in den lüften</span>.</li>
          <li><strong>Conditions by inversion, with <span class="la">sô</span></strong> (Lecture VI): <span class="la">nim ich nû diu siben hungerjâr, sô stirbet mir allez mîn volk</span>, “if I take the seven years of hunger, then …”.</li>
          <li><strong><span class="la">wanne</span></strong> in two senses: “for, because” (<span class="la">Wanne ich bin der, der die sünde getân hât</span>) and “than” after a comparative (<span class="la">Ez ist vil bezzer, ir büezet die sünde hie ûf ertrîche, wanne daz ir … brinnet</span>).</li>
          <li><strong>Direct speech</strong> introduced by <span class="la">sprach</span>, often without a conjunction: <span class="la">Der künic sprach ‘herre genâde …’</span>.</li>
          <li><strong>The preacher’s voice</strong>: <span class="la">Nû seht</span>, “now look”, to turn from the story to its lesson.</li>
        </ul>
        <p>Small words carry much of the meaning: <span class="la">ie</span>, “in any case, absolutely” (<span class="la">dû muost ie eine ûf nemen</span>); <span class="la">ze mâle</span>, “entirely”; <span class="la">sust</span>, “otherwise, on the other hand”; <span class="la">niur</span>, “only”; <span class="la">etewie</span>, “somehow”.</p>
      `
    },
    {
      title: '2. The subjunctive in narrative',
      html: `
        <p>Berthold uses the subjunctive exactly as the poets do (Lecture VI):</p>
        <ul>
          <li><strong>Reported speech</strong>: <span class="la">Dô sprach der künic, er wolte sîn niht enbern</span>; <span class="la">sagte dô dem künige, der wæren hundert tûsent und ahtzic tûsent</span>.</li>
          <li><strong>Wishes and commands in the third person</strong>: <span class="la">daz ir dâ sî, daz sî</span>, “however many there are, let that be so”.</li>
          <li><strong>Unreal conditions, past subjunctive in both halves</strong>: <span class="la">Ich kæme etewie dâvon … sô blibe ich wol in mînen slozzen … ich genæse wol vor mînen vînden, aber allez mîn volk wurde mir erslagen</span>.</li>
        </ul>
        <p><span class="la">daz er got dâ mit erzürnende würde</span> joins <span class="la">wërden</span> to a present participle: “that he would be angering God”, i.e. “would anger”. Many historians of German see this construction as one root of the modern future with <em>werden</em>.</p>
      `
    },
    {
      title: '3. The genitive is alive',
      html: `
        <p>Modern German has lost many genitive objects. In Berthold they are everywhere:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Phrase</th><th>Genitive</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td class="la">er wolte sîn niht enbern</td><td>object of <span class="la">enbern</span></td><td>he would not do without it</td></tr>
            <tr><td class="la">Wes solten sie engelten?</td><td>object of <span class="la">engelten</span></td><td>what should they pay for?</td></tr>
            <tr><td class="la">ich wil dér buoze niht</td><td>object of <span class="la">wellen</span></td><td>I do not want that penance</td></tr>
            <tr><td class="la">des mac kein rât gesîn</td><td>with <span class="la">rât</span></td><td>there is no help for it</td></tr>
            <tr><td class="la">der drîer buoze eine</td><td>partitive</td><td>one of the three penances</td></tr>
            <tr><td class="la">dîns volkes vil</td><td>partitive</td><td>many of your people</td></tr>
            <tr><td class="la">wie vil … strîtbæres volkes</td><td>partitive</td><td>how many fighting men</td></tr>
          </tbody>
        </table></div>
        <p><span class="la">sîn</span> here is the genitive of <span class="la">ez</span>, “of it” (Lecture IV), not the possessive.</p>
      `
    },
    {
      title: '4. The parts of a charter',
      html: `
        <p>Medieval charters follow a fixed order of parts, inherited from Latin practice. The German charter of 1285 shows them all:</p>
        <ul>
          <li><strong>Address</strong> (<em>promulgatio</em>): <span class="la">Allen dien, die disen brief lesent oder hȯrent lesen</span>, “to all who read this letter or hear it read”. Many people would hear a charter read aloud.</li>
          <li><strong>Issuer</strong> (<em>intitulatio</em>): <span class="la">ich Albrecht, dem man spricht Phaffenhoven</span>.</li>
          <li><strong>Declaration</strong>: <span class="la">kúnde und vergihe</span>, “make known and declare”.</li>
          <li><strong>Disposition</strong>, the legal act itself: <span class="la">haigen uns verzigen und williklichen uf gegeben … aller der ansprache und dez rechtes</span>, “have renounced and willingly given up every claim and right”, defined as fully as possible (<span class="la">nach dekainer slachte rechte, ez si lúzel oder vil</span>).</li>
          <li><strong>Consideration</strong>: <span class="la">drú phunt Haller</span>, three pounds of Heller, the coin of Schwäbisch Hall.</li>
          <li><strong>Corroboration</strong>: <span class="la">Und daz daz war si und iemer ane wanc stete belibe, dar umbe geben wir disen offen brief besigelt</span>.</li>
          <li><strong>Dating</strong>: place, then day by the Church calendar, then the year from the birth of Christ: <span class="la">an sant Matheus tage</span> (21 September), <span class="la">in dem ersten herbestmanode</span>, “the first autumn month”.</li>
          <li><strong>Witnesses</strong>: <span class="la">und waren daran …</span>, with their trades and places: <span class="la">der phister</span> (baker), <span class="la">der smit</span>, <span class="la">der Koch</span>, <span class="la">der Waibel</span> (court officer).</li>
          <li><strong>Sealing clauses</strong>: who seals for whom, and why: <span class="la">wan ich aigens insigels niht enhan</span>.</li>
        </ul>
        <p>Once you know the order, an unfamiliar charter becomes predictable: most of it is formula, and the new information sits in a few places, names, property, price and date.</p>
      `
    },
    {
      title: '5. Charter words and their descendants',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Charter</th><th>Normalised</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td class="la">brief</td><td class="la">brief</td><td>charter, document (not only a letter)</td></tr>
            <tr><td class="la">insigel</td><td class="la">insigel</td><td>seal (<em>Siegel</em>)</td></tr>
            <tr><td class="la">schulthaize</td><td class="la">schultheize</td><td>the lord’s judge or mayor (<em>Schultheiß</em>)</td></tr>
            <tr><td class="la">gezúge</td><td class="la">geziuge</td><td>witness (<em>Zeuge</em>)</td></tr>
            <tr><td class="la">vergihe</td><td class="la">vergihe (verjëhen)</td><td>declare, acknowledge</td></tr>
            <tr><td class="la">verzigen</td><td class="la">verzigen (verzîhen)</td><td>renounced (<em>verzichtet</em>)</td></tr>
            <tr><td class="la">samenunge</td><td class="la">samenunge</td><td>convent, community</td></tr>
            <tr><td class="la">biderbe lúte</td><td class="la">biderbe liute</td><td>honest, reliable people (<em>bieder</em>)</td></tr>
            <tr><td class="la">gnoze</td><td class="la">genôze</td><td>peer, equal (<em>Genosse</em>)</td></tr>
            <tr><td class="la">phister</td><td class="la">pfister</td><td>baker (the surname Pfister)</td></tr>
          </tbody>
        </table></div>
        <p>Many family names of southern Germany and Switzerland began as such descriptions in witness lists: Pfister, Schmid, Koch, Weibel, Schultheiß.</p>
      `
    }
  ],

  vocab: [
    { id: 'sunde', head: 'sünde', la: 'sünde', g: 'f', pos: 'noun', en: 'sin', de: 'Sünde' },
    { id: 'buezen', head: 'büezen', la: 'büezen, buozte', pos: 'verb, weak', en: 'atone for, do penance for; make good', de: 'büßen; wiedergutmachen' },
    { id: 'buoze', head: 'buoze', la: 'buoze', g: 'f', pos: 'noun', en: 'penance; remedy; fine', de: 'Buße; Abhilfe' },
    { id: 'hochvart', head: 'hôchvart', la: 'hôchvart', g: 'f', pos: 'noun', en: 'pride, arrogance', de: 'Hochmut, Hoffart', note: 'The sin of pride; not hôher muot (Lecture VIII).' },
    { id: 'kunicriche', head: 'künicrîche', la: 'künicrîche', g: 'n', pos: 'noun', en: 'kingdom', de: 'Königreich' },
    { id: 'stritbaere', head: 'strîtbære', la: 'strîtbære', pos: 'adjective', en: 'able to fight', de: 'kampffähig, streitbar' },
    { id: 'zeln', head: 'zeln', la: 'zeln, zalte, gezalt', pos: 'verb, weak', en: 'count; tell', de: 'zählen; erzählen' },
    { id: 'wissage', head: 'wîssage', la: 'wîssage', g: 'm', pos: 'noun', en: 'prophet', de: 'Prophet, Weissager' },
    { id: 'manslaht', head: 'manslaht', la: 'manslaht', g: 'f', pos: 'noun', en: 'killing, slaughter', de: 'Totschlag, Morden' },
    { id: 'urliuge', head: 'urliuge', la: 'urliuge, urliug', g: 'n', pos: 'noun', en: 'war', de: 'Krieg', note: 'Survives in Dutch oorlog.' },
    { id: 'liutsterbe', head: 'liutsterbe', la: 'liutsterbe', g: 'm', pos: 'noun', en: 'pestilence, mass death', de: 'Seuche, großes Sterben' },
    { id: 'barmherzikeit', head: 'barmherzikeit', la: 'barmherzikeit', g: 'f', pos: 'noun', en: 'mercy', de: 'Barmherzigkeit' },
    { id: 'engelten', head: 'engëlten', la: 'engëlten, engalt, engulten, engolten (+ gen.)', pos: 'verb, strong III', en: 'pay for, suffer for', de: 'büßen für, entgelten' },
    { id: 'enbern', head: 'enbërn', la: 'enbërn, enbar, enbâren, enborn (+ gen.)', pos: 'verb, strong IV', en: 'do without, forgo', de: 'entbehren, verzichten auf' },
    { id: 'erzurnen', head: 'erzürnen', la: 'erzürnen', pos: 'verb, weak', en: 'anger, provoke', de: 'erzürnen' },
    { id: 'meren', head: 'mêren', la: 'mêren', pos: 'verb, weak', en: 'increase', de: 'mehren', note: 'Opposite: minnern, to decrease.' },
    { id: 'rache', head: 'râche', la: 'râche, râchunge', g: 'f', pos: 'noun', en: 'punishment, vengeance', de: 'Strafe, Rache' },
    { id: 'venje', head: 'venje', la: 'venje', g: 'f', pos: 'noun', en: 'prostration in prayer', de: 'Kniefall, Niederwerfen beim Gebet', note: 'From Latin venia.' },
    { id: 'riuwe', head: 'riuwe', la: 'riuwe', g: 'f', pos: 'noun', en: 'remorse, repentance; sorrow', de: 'Reue; Kummer' },
    { id: 'mul', head: 'mûl', la: 'mûl', g: 'm', pos: 'noun', en: 'mule', de: 'Maultier' },
    { id: 'veste', head: 'veste', la: 'veste', g: 'f', pos: 'noun', en: 'fortress', de: 'Festung, Feste' },
    { id: 'vint', head: 'vînt', la: 'vîant, vînt', g: 'm', pos: 'noun', en: 'enemy', de: 'Feind' },
    { id: 'brief', head: 'brief', la: 'brief', g: 'm', pos: 'noun', en: 'document, charter; letter', de: 'Urkunde; Brief' },
    { id: 'insigel', head: 'insigel', la: 'insigel', g: 'n', pos: 'noun', en: 'seal', de: 'Siegel' },
    { id: 'schultheize', head: 'schultheize', la: 'schultheize', g: 'm', pos: 'noun', en: 'judge or mayor appointed by a lord', de: 'Schultheiß' },
    { id: 'geziuge', head: 'geziuge', la: 'geziuge', g: 'm', pos: 'noun', en: 'witness', de: 'Zeuge' },
    { id: 'verzihen', head: 'verzîhen', la: 'verzîhen, verzêch, verzigen, verzigen (+ gen.)', pos: 'verb, strong I', en: 'renounce, give up', de: 'verzichten auf' },
    { id: 'jehen', head: 'verjëhen', la: 'verjëhen (ich vergihe), verjach, verjâhen, verjëhen', pos: 'verb, strong V', en: 'declare, acknowledge, confess', de: 'bekennen, erklären', note: 'j becomes g before i: ich vergihe (Lecture I: jëhen).' },
    { id: 'ansprache', head: 'ansprâche', la: 'ansprâche', g: 'f', pos: 'noun', en: 'claim (at law)', de: 'Anspruch' },
    { id: 'biderbe', head: 'biderbe', la: 'biderbe', pos: 'adjective', en: 'honest, upright; useful', de: 'bieder, rechtschaffen' },
    { id: 'genoz', head: 'genôz', la: 'genôz, genôze', g: 'm', pos: 'noun', en: 'equal, peer, companion', de: 'Genosse, Standesgenosse' },
    { id: 'phunt', head: 'pfunt', la: 'pfunt, phunt', g: 'n', pos: 'noun', en: 'pound (weight; money of account)', de: 'Pfund' }
  ],

  grammarCards: [
    { id: 'mh11-latin', front: 'Language of charters before c. 1250', back: 'almost all Latin; German spreads from the mid-13th century, first in the south-west' },
    { id: 'mh11-berthold', front: 'Berthold of Regensburg', back: 'Franciscan preacher, d. 1272; German sermons written down by others, probably in Augsburg' },
    { id: 'mh11-objection', front: '‘Bruoder Bertholt, du machst uns den wec gar enge …’', back: 'Berthold imagines his hearers’ objections and answers them' },
    { id: 'mh11-wanne', front: 'wanne (two senses)', back: 'for, because; than (after a comparative)' },
    { id: 'mh11-ie', front: 'dû muost ie eine ûf nemen', back: 'ie: in any case, absolutely' },
    { id: 'mh11-sust', front: 'sust; niur; etewie', back: 'otherwise; only; somehow' },
    { id: 'mh11-wurde', front: 'daz er got erzürnende würde', back: 'wërden + present participle: would anger (a root of the werden future)' },
    { id: 'mh11-enbern', front: 'er wolte sîn niht enbern', back: 'he would not do without it (enbërn + genitive)' },
    { id: 'mh11-engelten', front: 'Wes solten sie engelten?', back: 'What should they pay for? (engëlten + genitive)' },
    { id: 'mh11-parts', front: 'Parts of a charter', back: 'address, issuer, declaration, disposition, corroboration, dating, witnesses, sealing' },
    { id: 'mh11-promulgatio', front: 'Allen dien, die disen brief lesent oder hȯrent lesen', back: 'the address (promulgatio): to all who read or hear this document' },
    { id: 'mh11-date', front: 'an sant Matheus tage', back: 'St Matthew’s day, 21 September' },
    { id: 'mh11-ai', front: 'Hainrich, zwaihundert, schulthaize', back: 'ai for ei: Swabian spelling' },
    { id: 'mh11-marks', front: 'ů, ú, ȯ in the charter', back: 'uo; iu or ü; ö or ou' },
    { id: 'mh11-haller', front: 'drú phunt Haller', back: 'three pounds of Heller (pennies from Schwäbisch Hall)' },
    { id: 'mh11-swords', front: 'Schwabenspiegel on the two swords', back: 'both lent to St Peter; the pope lends the worldly sword to the emperor' },
    { id: 'mh11-ssp', front: 'Sachsenspiegel on the two swords', back: 'one to the pope, one to the emperor' },
    { id: 'mh11-name', front: 'Who called it the Schwabenspiegel?', back: 'early modern scholars; it calls itself an imperial land and fief law book' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Why did David count his people, according to Berthold?', options: ['out of pride (hôchvart)', 'to raise taxes', 'because God told him to', 'to plan a pilgrimage'], answer: 0, explain: 'von rehter hôchvart wegen.' },
    { id: 'e2', type: 'mc', prompt: 'What did Joab advise?', options: ['not to count the people', 'to count them twice', 'to count only the knights', 'to ask the prophet first'], answer: 0, explain: '‘nein, herre, du solt daz volk niht zelen.’' },
    { id: 'e3', type: 'mc', prompt: 'Which three penances did Gad offer?', options: ['seven years of famine, three months of war, three days of pestilence', 'exile, prison or death', 'fasting, pilgrimage or alms', 'three years of drought only'], answer: 0, explain: 'hunger, manslaht und kriec, liutsterbe.' },
    { id: 'e4', type: 'mc', prompt: 'Why did David reject the famine?', options: ['his people would die, though innocent, while he would have enough', 'he feared for his own life', 'he had no grain', 'the prophet forbade it'], answer: 0, explain: 'Ich gewunne wol, daz ich genuoc hæte, sô sturbe mir sust allez mîn volk.' },
    { id: 'e5', type: 'mc', prompt: 'Why did he choose the pestilence?', options: ['it could strike him and his family as well as strangers', 'it was the shortest', 'he wanted to test God', 'the angel advised it'], answer: 0, explain: 'sô triffest du mich und mîniu lieben kint … als schiere als die fremeden.' },
    { id: 'e6', type: 'mc', prompt: 'How long did the punishment finally last?', options: ['from prime to terce, a few hours', 'three days', 'seven years', 'three months'], answer: 0, explain: 'diu werte niur von prîmezît hin ze terzezît.' },
    { id: 'e7', type: 'mc', prompt: '<span class="la">Ez ist vil bezzer, ir büezet die sünde hie ûf ertrîche, wanne daz ir … brinnet</span>: <span class="la">wanne</span> means:', options: ['than', 'when', 'because', 'whether'], answer: 0, explain: 'After a comparative, wanne means “than”.' },
    { id: 'e8', type: 'mc', prompt: '<span class="la">er wolte sîn niht enbern</span>: <span class="la">sîn</span> is:', options: ['genitive of ez: “it”', 'the possessive “his”', 'the infinitive “to be”', 'a name'], answer: 0, explain: 'enbërn takes the genitive.' },
    { id: 'e9', type: 'mc', prompt: 'The German Berthold sermons are:', options: ['texts for reading written down by others, not transcripts of his preaching', 'his own autographs', 'shorthand records made in the crowd', 'translations from French'], answer: 0, explain: 'Probably by Franciscans in Augsburg.' },
    { id: 'e10', type: 'mc', prompt: '<span class="la">Allen dien, die disen brief lesent oder hȯrent lesen</span> is the charter’s:', options: ['address (promulgatio)', 'dating clause', 'witness list', 'sealing clause'], answer: 0, explain: 'It addresses everyone who reads or hears the document.' },
    { id: 'e11', type: 'mc', prompt: 'What did the nuns of Heiligkreuztal pay Albrecht?', options: ['three pounds of Heller', 'a house in Ebingen', 'nothing', 'three marks of silver'], answer: 0, explain: 'drú phunt Haller.' },
    { id: 'e12', type: 'mc', prompt: 'Why does Heinrich use other men’s seals?', options: ['he has no seal of his own', 'his seal was broken', 'women could not seal', 'the abbess forbade it'], answer: 0, explain: 'wan ich aigens insigels niht enhan.' },
    { id: 'e13', type: 'match', prompt: 'Match the charter spellings with the normalised forms.', pairs: [
      ['Hainrich', 'Heinrich'], ['brůder', 'bruoder'], ['dú', 'diu'], ['vrȯwen', 'vrouwen'], ['zwaihundert', 'zweihundert']
    ] },
    { id: 'e14', type: 'match', prompt: 'Match the parts of the charter.', pairs: [
      ['Allen dien, die disen brief lesent', 'address'], ['haigen uns verzigen', 'disposition'], ['daz daz war si … geben wir disen offen brief', 'corroboration'], ['an sant Matheus tage', 'dating'], ['und waren daran', 'witnesses']
    ] },
    { id: 'e15', type: 'match', prompt: 'Match the trades and offices in the witness list.', pairs: [
      ['phister', 'baker'], ['smit', 'smith'], ['schulthaize', 'the lord’s judge or mayor'], ['Waibel', 'court officer'], ['Koch', 'cook']
    ] },
    { id: 'e16', type: 'gap', prompt: '<span class="la">Ez hete künic Dâvît zwei ___</span>', hint: 'kingdoms', answers: ['künicrîche', 'kunicriche'], full: 'Ez hete künic Dâvît zwei künicrîche', explain: 'Jêrusalem und Bersabêê.' },
    { id: 'e17', type: 'gap', prompt: '<span class="la">Wes solten sie ___?</span>', hint: 'pay for (+ gen.)', answers: ['engelten'], full: 'Wes solten sie engelten?', explain: 'wes: genitive of waz.' },
    { id: 'e18', type: 'gap', prompt: '<span class="la">dô stuont ein ___ in den lüften</span>', hint: 'angel', answers: ['engel'], full: 'dô stuont ein engel in den lüften', explain: 'With a sword of God’s anger.' },
    { id: 'e19', type: 'paradigm', prompt: 'Normalise the charter spelling.', headers: ['Normalised'], rows: [
      { label: 'Hainrich', answers: ['Heinrich|heinrich'] },
      { label: 'brůder', answers: ['bruoder'] },
      { label: 'drú', answers: ['driu'] },
      { label: 'túsent', answers: ['tûsent'] },
      { label: 'gůte', answers: ['guote'] }
    ] },
    { id: 'e20', type: 'order', prompt: 'Put the parts of the charter in their usual order.', source: 'The structure of a medieval charter', tokens: ['address', 'issuer', 'disposition', 'corroboration', 'dating', 'witnesses'], explain: 'The 1285 charter follows this order, with the sealing clauses at the end.' },
    { id: 'e21', type: 'translate', dir: 'mhd-de', source: 'Dû muost büezen.', model: 'Du musst büßen.', accepted: ['Du musst büßen', 'Du musst Buße tun'] },
    { id: 'e22', type: 'translate', dir: 'mhd-de', source: 'Ich wil ez nimmer mêre getuon.', model: 'Ich will es nie mehr tun.', accepted: ['Ich will es nie mehr tun', 'Ich will es nie wieder tun', 'Ich werde es nie mehr tun', 'Ich werde es nie wieder tun', 'Ich will es nimmermehr tun'] },
    { id: 'e23', type: 'translate', dir: 'mhd-en', source: 'Erbarme dich über mîn volk.', model: 'Have mercy on my people.', accepted: ['Have mercy on my people', 'Take pity on my people', 'Have pity on my people', 'Show mercy to my people'] },
    { id: 'e24', type: 'translate', dir: 'de-mhd', source: 'Das Volk ist unschuldig.', model: 'Daz volk ist unschuldic.', accepted: ['Daz volk ist unschuldic', 'Daz volc ist unschuldic', 'Daz volk ist unschuldec'], explain: 'Daz is the neuter article; unschuldic shows final devoicing, written c (modern -ig).' },
    { id: 'e25', type: 'mc', prompt: 'In the Schwabenspiegel, who receives the two swords?', options: ['St Peter, who lends the worldly sword through the pope to the emperor', 'the emperor alone', 'one the pope, one the emperor', 'the electors'], answer: 0, explain: 'diu lech unser herre sante Peter beidiu.' },
    { id: 'e26', type: 'mc', prompt: 'Why are charters printed in their original spelling?', options: ['their spelling is evidence of where and when they were written', 'no one could normalise them', 'normalised spelling is illegal for documents', 'they are in Latin'], answer: 0, explain: 'Place and date are part of a charter’s evidence.' },
    { id: 'e27', type: 'mc', prompt: 'What is a <span class="la">venje</span>?', options: ['a prostration in prayer', 'a vineyard', 'a feud', 'a window'], answer: 0, explain: 'dô legte er sich in dem tempel an sîn venje.' }
  ],

  reading: {
    title: 'Berthold of Regensburg, Von Dâvîdes drîen buozen (sermon XXXVII)',
    note: 'Authentic text: from Berthold’s sermon on David’s three penances, transcribed from the page images of Joseph Strobl’s edition (Vienna 1880), vol. 2, p. 2, line 28 – p. 4, line 29. Strobl prints the text as one paragraph from p. 3 onwards; the paragraph breaks here are ours. Tap any word.',
    text: '‘Bruoder Bertholt, du machst uns den wec gar enge zuo dem himelrîche und gar hart und gar sorclich.’ Seht, ich machez anders niht, wanne als im ist und dennoch niht gar. Welt ir mir nû volgen, sô wil ich iu einen guoten rât geben. Ez ist doch bezzer kampf, wanne hals ab. Ez ist vil bezzer, ir büezet die sünde hie ûf ertrîche, wanne daz ir mit dem tiufel êwiclichen brinnet.\n\nIch hân iu gesagt von grôzen sünden, von kleinen sünden, von fremeden und von eigen sünden. Nû wil ich iu sagen mit welhen dingen man die sünde büezen süle, daz ist iu ein gar und gar nütze lêre und daz beste daz ir denne gelernen müget. Und wie man die sünde büezen sol, daz hât uns der almehtige got erzeict in der alten ê. Wanne swaz uns cristenmenschen künftic was in der niuwen ê an der sêle daz hât er uns erzeict an der liute leben in der alten ê.\n\nEz hete künic Dâvît zwei künicrîche, Jêrusalem und Bersabêê, dâ von gewan er ein grôze hôchvart, daz er ie wizzen wolte, wie vil er strîtbærez volk gehaben möhte in den zwein künicrîchen. Den hete der almehtige got von dem vihe genomen an dem velde und hete in ze einem künige gemacht, und der hiez daz volk zelen von rehter hôchvart wegen. Er hete einen marschalk, der hiez Jôâb, zuo dem sprach er: ‘var hin und besich mir, wie vil ich strîtbæres volkes in mînen künicrîchen habe und zele mir daz allez mit einander.’ Der marschalk was ein gewizzen man und weste wol daz er got dâ mit erzürnende würde und sprach ‘nein, herre, du solt daz volk niht zelen; daz ir dâ sî, daz sî und sie müezen sich mêren und niht minnern.’ Dô sprach der künic, er wolte sîn niht enbern, er wolte sîn ie wizzen, wie vil er strîtbæres volkes hæte. Dô zelet der marschalk daz volk mit einander und sagte dô dem künige, der wæren hundert tûsent und ahtzic tûsent.\n\nDarumbe zurnte der almehtige got als sêre, daz er im enbôt bî einem wîssagen, der hiez Gad, der sprach ‘Dâvîd, du hâst gesündet an got, darumbe sô muost dû büezen und unter drîen buozen muost dû ie eine ûf nemen und des mac kein rât gesîn.’ Der künic sprach ‘herre genâde, ich wil ez nimmer mêre getuon.’ ‘Nein, nein,’ sprach der wîssage, ‘dû muost ie der drîer buoze eine ûf nemen. Sich, dû muost ze buoze nemen, daz siben jâr gar grôzer hunger sî in allem dînem lande oder daz drî mânôt grôz manslaht und kriec in dînem lande sî, daz dîns volkes vil erslagen werde oder daz drî tage ein grôzer liutsterbe sî in dînem lande, der drîer muost dû ie einez ûf nemen, dû tuost ez gerne oder niht.’ ‘Owê, herre, genâde, mac ich sîn nimmer wider komen ze gotes genâden und ze sînen hulden?’ ‘Niht, genâde ist ûz, got wil es niht enbern, ez muoz ie sîn!’\n\nDô sprach der künic als ein wîser man und sprach im selber ‘nim ich nû diu siben hungerjâr, sô stirbet mir allez mîn volk, die sint ze mâle unschuldic an mîner sünde. Wes solten sie engelten? Ich wil dér buoze niht. Ich gewunne wol, daz ich genuoc hæte, sô sturbe mir sust allez mîn volk.’ Und sprach ‘herre, dîn barmherzikeit teile mir mit! Nim ich denne, daz drî mânôt urliuge in mînem lande sî, daz ist gar ein swære und ein müelich dinc. Ich kæme etewie dâvon. Ich hân starkiu mûl und snelliu pfert, sô blibe ich wol in mînen slozzen, ich hân guote vesten und bürge, Syôn und Jêrichô, ich genæse wol vor mînen vînden, aber allez mîn volk wurde mir erslagen, die sint doch an mîner sünde gar unschuldic. Ich wil die dritten buoze nemen, der liute sterben drî tage, herre, sô triffest du mich und mîniu lieben kint und ander die mir liep sint als schiere als die fremeden. Wanne ich bin der, der die sünde getân hât, lieber herre, und die râche solt dû über mich lâzen gên.’\n\nUnd dô der tac kam, als diu râchunge sîn solte, dô legte er sich in dem tempel an sîn venje und ruofte got an und sprach ‘herre, genâde! erbarme dich über mîn volk, wann ez ist unschuldic an mîner sünde und lâz die râchunge über mich gên.’ Nû seht, wie gar ein tugendhafter man und wie gar ein reinez gebet und wie getriuwe und gereht sîn herze und muot was! Dô der almehtige got sîn grôz riuwe und tugent ersach und daz erkante er ouch an Dâvîdes herze vil wol und tete als genædiclichen und als tugentlichen, und also tuot er noch hiute disse tages, und liez die drî tage noch ab, ân ein kurze stunde. Und als der liutsterbe an vienc, dô stuont ein engel in den lüften und het ein swert in einer hant von gotes zorne und swelhen enden er daz swert kêrte, dâ viel daz volk allez hin und was ze stunt tôt. Und dô Dâvîd als grôz riuwe hete und daz unser herre erkante und sach, dô erbarmte er sich über in und erhôrte sîn gebet, und diu râche, diu da drî tage solte sîn, diu werte niur von prîmezît hin ze terzezît. Dô liez der almehtige got sînen zorn ab und hiez die engel ûf hœren. Nû seht, ir hêrschaft, daz hât iu der almehtige got âne sache niht getân.',
    translations: [
      { label: 'German translation', text: '„Bruder Berthold, du machst uns den Weg zum Himmelreich sehr eng und sehr hart und sehr sorgenvoll.“ Seht, ich mache ihn nicht anders, als er ist, und nicht einmal ganz so. Wollt ihr mir nun folgen, so will ich euch einen guten Rat geben. Es ist doch besser ein Zweikampf als den Kopf ab. Es ist viel besser, ihr büßt die Sünden hier auf Erden, als dass ihr mit dem Teufel ewig brennt. Ich habe euch von großen Sünden erzählt, von kleinen Sünden, von fremden und von eigenen Sünden. Nun will ich euch sagen, mit welchen Dingen man die Sünden büßen soll; das ist für euch eine überaus nützliche Lehre und das Beste, was ihr dann lernen könnt. Und wie man die Sünden büßen soll, das hat uns der allmächtige Gott im Alten Bund gezeigt. Denn was uns Christenmenschen im Neuen Bund für die Seele bevorstand, das hat er uns am Leben der Menschen im Alten Bund gezeigt. König David hatte zwei Königreiche, Jerusalem und Beerscheba; davon bekam er einen großen Hochmut, sodass er unbedingt wissen wollte, wie viel kampffähiges Volk er in den zwei Königreichen haben könnte. Ihn hatte der allmächtige Gott vom Vieh auf dem Feld weggeholt und zum König gemacht, und der ließ das Volk aus lauter Hochmut zählen. Er hatte einen Marschall, der hieß Joab; zu dem sprach er: „Geh hin und sieh für mich nach, wie viel kampffähiges Volk ich in meinen Königreichen habe, und zähle mir das alles zusammen.“ Der Marschall war ein verständiger Mann und wusste wohl, dass er Gott damit erzürnen würde, und sprach: „Nein, Herr, du sollst das Volk nicht zählen; wie viele es auch sind, so soll es sein, und mögen sie sich mehren und nicht mindern.“ Da sprach der König, er wolle nicht darauf verzichten, er wolle es unbedingt wissen, wie viel kampffähiges Volk er habe. Da zählte der Marschall das Volk zusammen und sagte dann dem König, es seien hundertachtzigtausend. Darüber zürnte der allmächtige Gott so sehr, dass er ihm durch einen Propheten namens Gad ausrichten ließ: „David, du hast gegen Gott gesündigt, darum musst du büßen, und von drei Bußen musst du auf jeden Fall eine auf dich nehmen, und daran ist nichts zu ändern.“ Der König sprach: „Herr, Gnade, ich will es nie wieder tun.“ „Nein, nein“, sprach der Prophet, „du musst auf jeden Fall eine der drei Bußen auf dich nehmen. Sieh, du musst als Buße nehmen, dass sieben Jahre lang eine sehr große Hungersnot in deinem ganzen Land herrscht, oder dass drei Monate lang großes Morden und Krieg in deinem Land ist, sodass viel von deinem Volk erschlagen wird, oder dass drei Tage lang ein großes Sterben in deinem Land ist; eine von den dreien musst du auf jeden Fall nehmen, ob du willst oder nicht.“ „O weh, Herr, Gnade, kann ich denn nie wieder zu Gottes Gnade und Huld kommen?“ „Nein, die Gnade ist vorbei, Gott will nicht darauf verzichten, es muss unbedingt sein!“ Da sprach der König als ein weiser Mann zu sich selbst: „Nehme ich nun die sieben Hungerjahre, so stirbt mir mein ganzes Volk, und die sind ganz und gar unschuldig an meiner Sünde. Wofür sollten sie büßen? Diese Buße will ich nicht. Ich bekäme wohl so viel, dass ich genug hätte, und dabei stürbe mir mein ganzes Volk.“ Und er sprach: „Herr, teile mir deine Barmherzigkeit mit! Nehme ich dann, dass drei Monate Krieg in meinem Land ist, das ist eine sehr schwere und mühselige Sache. Ich käme irgendwie davon. Ich habe starke Maultiere und schnelle Pferde, so bliebe ich wohl in meinen Burgen; ich habe gute Festungen und Burgen, Zion und Jericho, ich wäre wohl sicher vor meinen Feinden, aber mein ganzes Volk würde mir erschlagen, und die sind doch an meiner Sünde ganz unschuldig. Ich will die dritte Buße nehmen, dass die Menschen drei Tage lang sterben; Herr, so triffst du mich und meine lieben Kinder und andere, die mir lieb sind, ebenso schnell wie die Fremden. Denn ich bin der, der die Sünde begangen hat, lieber Herr, und die Strafe sollst du über mich ergehen lassen.“ Und als der Tag kam, an dem die Strafe sein sollte, da warf er sich im Tempel zum Gebet nieder und rief Gott an und sprach: „Herr, Gnade! Erbarme dich über mein Volk, denn es ist unschuldig an meiner Sünde, und lass die Strafe über mich ergehen.“ Nun seht, was für ein tugendhafter Mann und was für ein reines Gebet und wie treu und gerecht sein Herz und sein Sinn war! Als der allmächtige Gott seine große Reue und Tugend sah, und das erkannte er an Davids Herz sehr wohl, da handelte er so gnädig und so gütig – und so tut er es noch heutigen Tages –, und erließ die drei Tage bis auf eine kurze Zeit. Und als das Sterben anfing, da stand ein Engel in der Luft und hatte ein Schwert in der Hand aus Gottes Zorn, und wohin er das Schwert wandte, da fiel das ganze Volk hin und war sofort tot. Und als David so große Reue hatte und unser Herr das erkannte und sah, da erbarmte er sich über ihn und erhörte sein Gebet, und die Strafe, die drei Tage dauern sollte, die dauerte nur von der Prim bis zur Terz. Da ließ der allmächtige Gott von seinem Zorn ab und hieß die Engel aufhören. Nun seht, ihr Herrschaften, das hat euch der allmächtige Gott nicht ohne Grund getan.' },
      { label: 'English translation', text: '“Brother Berthold, you make the way to heaven very narrow for us, and very hard and very anxious.” Look, I make it no other than it is, and not even that. If you will follow me now, I will give you good advice. A fight is better than having your head off. It is far better that you atone for your sins here on earth than that you burn with the devil for ever. I have told you about great sins and small sins, about other people’s sins and your own. Now I will tell you by what means one should atone for sins; that is a most useful lesson for you, and the best thing you can learn. And how one should atone for sins, almighty God has shown us in the Old Law. For whatever was to come to us Christians in the New Law for the soul, he showed us in the lives of the people of the Old Law. King David had two kingdoms, Jerusalem and Beersheba, and from this he grew very proud, so that he insisted on knowing how many fighting men he might have in the two kingdoms. Almighty God had taken him from the cattle in the field and made him a king, and he had the people counted out of sheer pride. He had a marshal called Joab, and said to him: “Go and look for me, how many fighting men I have in my kingdoms, and count them all up for me.” The marshal was a sensible man and knew well that he would anger God by it, and said: “No, lord, you should not count the people; however many there are, let it be so, and may they increase and not diminish.” Then the king said he would not do without it; he must know how many fighting men he had. Then the marshal counted the people and told the king that there were a hundred and eighty thousand of them. At this almighty God was so angry that he sent word to him through a prophet named Gad, who said: “David, you have sinned against God, so you must do penance, and you must take on one of three penances, and there is no help for it.” The king said: “Lord, mercy, I will never do it again.” “No, no,” said the prophet, “you must take one of the three penances. See, you must take as your penance either a very great famine in all your land for seven years, or great killing and war in your land for three months, so that many of your people are slain, or a great pestilence in your land for three days; one of the three you must take, whether you like it or not.” “Alas, lord, mercy, can I never come back into God’s grace and favour?” “No; grace is over, God will not do without it, it must be!” Then the king spoke as a wise man and said to himself: “If I take the seven years of hunger, all my people will die, and they are entirely innocent of my sin. Why should they pay for it? I do not want that penance. I would surely get enough for myself, while all my people would die.” And he said: “Lord, grant me your mercy! If I take three months of war in my land, that is a very grievous and wretched thing. I would get away somehow. I have strong mules and swift horses, so I would stay safe in my castles; I have good fortresses and strongholds, Zion and Jericho; I would be safe from my enemies, but all my people would be slain, and they are wholly innocent of my sin. I will take the third penance, that people die for three days; lord, then you will strike me and my dear children and others dear to me as soon as strangers. For I am the one who has committed the sin, dear lord, and you should let the punishment fall on me.” And when the day came on which the punishment was to be, he prostrated himself in the temple, called on God and said: “Lord, mercy! Have mercy on my people, for they are innocent of my sin, and let the punishment fall on me.” Now look what a virtuous man, what a pure prayer, and how faithful and just his heart and mind were! When almighty God saw his great remorse and virtue, and he saw it well in David’s heart, he acted so mercifully and so kindly, as he still does to this day, and remitted the three days except for a short time. And when the pestilence began, an angel stood in the air holding a sword of God’s anger in his hand, and wherever he turned the sword, the people all fell and were dead at once. And when David felt such great remorse, and our Lord saw and knew it, he had mercy on him and heard his prayer, and the punishment that was to last three days lasted only from prime to terce. Then almighty God ceased from his anger and told the angels to stop. Now look, gentlefolk: almighty God did not do this for you without a reason.' }
    ],
    notes: [
      { ref: '‘Bruoder Bertholt, du machst uns den wec gar enge …’', html: 'Berthold puts an objection in his hearers’ mouths and answers it. <span class="la">machez</span> = <span class="la">mache ez</span>. <span class="la">wanne als im ist</span>: “than as it is”. <span class="la">dennoch niht gar</span>: “and even then not completely”: the truth is harder than he says.' },
      { ref: 'Ez ist doch bezzer kampf, wanne hals ab.', html: 'Apparently a legal proverb: better to take one’s chance in a judicial duel than to be beheaded. Penance now is the fight; hell is the execution. <span class="la">wanne</span> = “than”.' },
      { ref: 'in der alten ê … in der niuwen ê', html: '<span class="la">ê</span>, “law, covenant”: the Old and New Testaments. (The same word means “marriage”.) What happened to the people of the Old Testament prefigures what concerns Christians; this way of reading the Bible is called typology.' },
      { ref: 'Ez hete künic Dâvît zwei künicrîche, Jêrusalem und Bersabêê', html: 'The story is 2 Samuel 24 (2 Kings 24 in the Vulgate). In the Bible Beersheba is the southern end of the land counted, “from Dan to Beersheba”, not a second kingdom, and the totals are much larger than Berthold’s 180,000. Berthold retells freely.' },
      { ref: 'Den hete der almehtige got von dem vihe genomen an dem velde', html: 'David the shepherd, taken from the flocks. <span class="la">vihe</span>: livestock (<em>Vieh</em>).' },
      { ref: 'var hin und besich mir', html: '<span class="la">besich</span>: imperative of <span class="la">besëhen</span>, “inspect”; <span class="la">mir</span>, “for me”. <span class="la">mit einander</span>: “all together”.' },
      { ref: 'daz ir dâ sî, daz sî und sie müezen sich mêren und niht minnern', html: '<span class="la">ir</span>: genitive plural, “of them”. “What there is of them, let that be, and may they increase and not decrease”: <span class="la">müezen</span> + infinitive as a wish.' },
      { ref: 'der wæren hundert tûsent und ahtzic tûsent', html: 'Reported speech in the subjunctive; <span class="la">der</span> is a genitive plural, “of them there were …”.' },
      { ref: 'unter drîen buozen muost dû ie eine ûf nemen und des mac kein rât gesîn', html: '<span class="la">ie</span>: “in any case”. <span class="la">des mac kein rât gesîn</span>: “there can be no remedy for that”, <span class="la">rât</span> with a genitive.' },
      { ref: 'drî mânôt grôz manslaht und kriec … ein grôzer liutsterbe', html: 'In the Bible: seven years of famine, three months of flight before enemies, three days of pestilence (2 Samuel 24:13). <span class="la">liutsterbe</span>: “dying of the people”, plague.' },
      { ref: 'Ich gewunne wol, daz ich genuoc hæte, sô sturbe mir sust allez mîn volk', html: 'Past subjunctives: “I would surely get enough, while all my people would die.” Berthold gives David a reason the Bible does not: the rich survive famine and war, the poor do not.' },
      { ref: 'Ich hân starkiu mûl und snelliu pfert', html: 'A preacher’s detail: the powerful can flee to their castles. <span class="la">vesten und bürge</span>: fortresses and castles; <span class="la">genæse</span>: past subjunctive of <span class="la">genësen</span>, “would be safe”.' },
      { ref: 'dô legte er sich in dem tempel an sîn venje', html: '<span class="la">venje</span>, from Latin <em>venia</em>: lying face down in prayer. Berthold places the scene in a temple; in the Bible the temple is built only under Solomon.' },
      { ref: 'und liez die drî tage noch ab, ân ein kurze stunde', html: '<span class="la">abe lâzen</span>: remit. <span class="la">ân</span> = <span class="la">âne</span>, “except for”. <span class="la">stunde</span>: a while, a short time, not necessarily an hour.' },
      { ref: 'diu werte niur von prîmezît hin ze terzezît', html: 'Prime and terce are canonical hours, the first and third hours of the day, roughly 6 and 9 in the morning. <span class="la">werte</span>: past of <span class="la">wërn</span>, “last”. <span class="la">niur</span>: “only”.' },
      { ref: 'Nû seht, ir hêrschaft', html: '<span class="la">hêrschaft</span>: “lordship”, here the assembled gentlefolk. The sermon now turns to its lesson: every Christian must choose one of three penances.' }
    ],
    glosses: {
      'bruoder': 'brother (friar)', 'bertholt': 'Berthold', 'du': 'you', 'machst': 'make', 'uns': 'for us', 'den': 'the', 'wec': 'way', 'gar': 'very, entirely', 'enge': 'narrow', 'zuo': 'to', 'dem': 'the', 'himelrîche': 'kingdom of heaven', 'und': 'and', 'hart': 'hard', 'sorclich': 'anxious, fearful',
      'seht': 'look, see (imperative pl.)', 'ich': 'I', 'machez': 'mache ez: make it', 'anders': 'otherwise', 'niht': 'not; nothing', 'wanne': 'than; for, because', 'als': 'as; so', 'im': 'it, him (dat.); to himself', 'ist': 'is', 'dennoch': 'even then', 'welt': 'want (2nd pl. of wellen)', 'ir': 'you (pl.); of them (gen.)', 'mir': 'me, to me', 'nû': 'now', 'volgen': 'follow', 'sô': 'then, so', 'wil': 'will, want to', 'iu': 'to you (pl.)', 'einen': 'a', 'guoten': 'good', 'rât': 'advice; remedy', 'geben': 'give',
      'ez': 'it', 'doch': 'after all', 'bezzer': 'better', 'kampf': 'fight, judicial duel', 'hals': 'neck: hals ab, head off', 'ab': 'off', 'vil': 'much, many; very', 'büezet': 'atone for', 'die': 'the; who', 'sünde': 'sins; sin', 'hie': 'here', 'ûf': 'on, upon; up', 'ertrîche': 'earth', 'daz': 'that; the', 'mit': 'with', 'tiufel': 'devil', 'êwiclichen': 'for ever', 'brinnet': 'burn',
      'hân': 'have', 'gesagt': 'told', 'von': 'of, about; from', 'grôzen': 'great', 'sünden': 'sins', 'kleinen': 'small', 'fremeden': 'other people’s; strangers', 'eigen': 'own', 'sagen': 'tell', 'welhen': 'which', 'dingen': 'things, means', 'man': 'one; man', 'büezen': 'atone for', 'süle': 'should (suln)', 'ein': 'a', 'nütze': 'useful', 'lêre': 'teaching', 'beste': 'best', 'denne': 'then', 'gelernen': 'learn', 'müget': 'can, may (2nd pl.)',
      'wie': 'how', 'sol': 'should', 'hât': 'has', 'der': 'the; who; of them', 'almehtige': 'almighty', 'got': 'God', 'erzeict': 'shown (erzeigen)', 'in': 'in; him (acc.)', 'alten': 'old', 'ê': 'law, covenant', 'swaz': 'whatever', 'cristenmenschen': 'Christians', 'künftic': 'to come', 'was': 'was', 'niuwen': 'new', 'an': 'in, at, on', 'sêle': 'soul', 'er': 'he', 'liute': 'people’s; people', 'leben': 'life',
      'hete': 'had', 'künic': 'king', 'dâvît': 'David', 'zwei': 'two', 'künicrîche': 'kingdoms', 'jêrusalem': 'Jerusalem', 'bersabêê': 'Beersheba', 'dâ': 'there: dâ von, from that; dâ mit, with that', 'gewan': 'got, came to have', 'grôze': 'great', 'hôchvart': 'pride', 'ie': 'in any case, absolutely', 'wizzen': 'know', 'wolte': 'wanted', 'strîtbærez': 'fighting, able to fight', 'volk': 'people', 'gehaben': 'have', 'möhte': 'might', 'zwein': 'two (dat.)', 'künicrîchen': 'kingdoms',
      'vihe': 'livestock, cattle', 'genomen': 'taken', 'velde': 'field', 'ze': 'to, as; at', 'einem': 'a', 'künige': 'king (dat.)', 'gemacht': 'made', 'hiez': 'had (someone do); was called', 'zelen': 'count', 'rehter': 'sheer, true', 'wegen': 'on account of: von … wegen', 'marschalk': 'marshal', 'jôâb': 'Joab', 'sprach': 'said', 'var': 'go (imperative)', 'hin': 'away, along', 'besich': 'inspect (imperative of besëhen)', 'strîtbæres': 'able to fight (gen.)', 'volkes': 'of people (gen.)', 'mînen': 'my', 'habe': 'have', 'zele': 'count (imperative)', 'allez': 'all', 'einander': 'together: mit einander',
      'gewizzen': 'sensible, wise', 'weste': 'knew', 'wol': 'well', 'erzürnende': 'angering', 'würde': 'would (wërden)', 'nein': 'no', 'herre': 'lord', 'solt': 'should', 'sî': 'be (subj.)', 'sie': 'they', 'müezen': 'may (wish)', 'mêren': 'increase', 'minnern': 'decrease', 'dô': 'then; when', 'sîn': 'it (gen. of ez); his; to be', 'enbern': 'do without', 'hæte': 'had (subj.)', 'zelet': 'counted', 'sagte': 'told', 'wæren': 'were (subj.)', 'hundert': 'hundred', 'tûsent': 'thousand', 'ahtzic': 'eighty',
      'darumbe': 'for that, therefore', 'zurnte': 'was angry', 'sêre': 'greatly', 'enbôt': 'sent word (enbieten)', 'bî': 'by, through', 'wîssagen': 'prophet (dat.)', 'gad': 'Gad', 'dâvîd': 'David', 'hâst': 'have', 'gesündet': 'sinned', 'muost': 'must', 'dû': 'you', 'unter': 'among', 'drîen': 'three (dat.)', 'buozen': 'penances', 'eine': 'one', 'nemen': 'take: ûf nemen, take on', 'des': 'of that', 'mac': 'can', 'kein': 'no', 'gesîn': 'be',
      'genâde': 'mercy, grace', 'nimmer': 'never', 'mêre': 'more: nimmer mêre, never again', 'getuon': 'do', 'wîssage': 'prophet', 'drîer': 'of three', 'buoze': 'penance(s)', 'sich': 'see, look (imperative of sëhen); themselves', 'siben': 'seven', 'jâr': 'years', 'grôzer': 'great', 'hunger': 'famine', 'allem': 'all', 'dînem': 'your', 'lande': 'land', 'oder': 'or', 'drî': 'three', 'mânôt': 'months', 'grôz': 'great', 'manslaht': 'killing', 'kriec': 'war', 'dîns': 'of your', 'erslagen': 'slain', 'werde': 'be (subj. of wërden)', 'tage': 'days', 'liutsterbe': 'pestilence', 'einez': 'one', 'tuost': 'do', 'gerne': 'gladly',
      'owê': 'alas', 'wider': 'back, again', 'komen': 'come', 'gotes': 'God’s', 'genâden': 'grace', 'hulden': 'favour', 'ûz': 'over, out', 'es': 'of it (gen.)', 'muoz': 'must', 'wîser': 'wise', 'selber': 'himself',
      'nim': 'take', 'diu': 'the', 'hungerjâr': 'years of famine', 'stirbet': 'dies', 'mîn': 'my', 'sint': 'are', 'mâle': 'entirely: ze mâle', 'unschuldic': 'innocent', 'mîner': 'my', 'wes': 'for what (gen.)', 'solten': 'should', 'engelten': 'pay for', 'dér': 'that (emphatic)', 'gewunne': 'would get', 'genuoc': 'enough', 'sturbe': 'would die', 'sust': 'otherwise, meanwhile',
      'dîn': 'your', 'barmherzikeit': 'mercy', 'teile': 'grant: teile mir mit', 'urliuge': 'war', 'mînem': 'my', 'swære': 'grievous thing', 'müelich': 'wretched, troublesome', 'dinc': 'thing', 'kæme': 'would come', 'etewie': 'somehow', 'dâvon': 'away', 'starkiu': 'strong', 'mûl': 'mules', 'snelliu': 'swift', 'pfert': 'horses', 'blibe': 'would stay', 'slozzen': 'castles', 'guote': 'good', 'vesten': 'fortresses', 'bürge': 'castles', 'syôn': 'Zion', 'jêrichô': 'Jericho', 'genæse': 'would be safe', 'vor': 'from, before', 'vînden': 'enemies', 'aber': 'but', 'wurde': 'would be', 'dritten': 'third', 'sterben': 'die; dying', 'triffest': 'strike', 'mich': 'me', 'mîniu': 'my', 'lieben': 'dear', 'kint': 'children', 'ander': 'others', 'liep': 'dear', 'schiere': 'soon', 'bin': 'am', 'getân': 'done', 'lieber': 'dear', 'râche': 'punishment', 'über': 'over, on', 'lâzen': 'let', 'gên': 'go',
      'tac': 'day', 'kam': 'came', 'râchunge': 'punishment', 'solte': 'was to', 'legte': 'laid', 'tempel': 'temple', 'venje': 'prostration in prayer', 'ruofte': 'called', 'erbarme': 'have mercy', 'dich': 'yourself', 'wann': 'for', 'lâz': 'let', 'tugendhafter': 'virtuous', 'reinez': 'pure', 'gebet': 'prayer', 'getriuwe': 'faithful', 'gereht': 'just', 'herze': 'heart', 'muot': 'mind', 'riuwe': 'remorse', 'tugent': 'virtue', 'ersach': 'saw', 'erkante': 'recognised', 'ouch': 'also', 'dâvîdes': 'David’s', 'tete': 'did, acted', 'genædiclichen': 'mercifully', 'tugentlichen': 'kindly', 'also': 'so', 'tuot': 'does', 'noch': 'still', 'hiute': 'today', 'disse': 'this', 'tages': 'day (gen.)', 'liez': 'let: liez … ab, remitted', 'ân': 'except for', 'kurze': 'short', 'stunde': 'while, time',
      'vienc': 'began (an vâhen)', 'stuont': 'stood', 'engel': 'angel', 'lüften': 'air (dat. pl.)', 'het': 'had', 'swert': 'sword', 'einer': 'a', 'hant': 'hand', 'zorne': 'anger', 'swelhen': 'whichever', 'enden': 'direction: swelhen enden, wherever', 'kêrte': 'turned', 'viel': 'fell', 'stunt': 'moment: ze stunt, at once', 'tôt': 'dead', 'unser': 'our', 'sach': 'saw', 'erbarmte': 'had mercy', 'erhôrte': 'heard, granted', 'da': 'there', 'werte': 'lasted (wërn)', 'niur': 'only', 'prîmezît': 'prime (first hour)', 'terzezît': 'terce (third hour)', 'sînen': 'his', 'zorn': 'anger', 'hœren': 'stop: ûf hœren', 'hêrschaft': 'gentlefolk', 'âne': 'without', 'sache': 'reason, cause'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What objection does Berthold put in his hearers’ mouths?', options: ['That he makes the way to heaven too narrow and hard', 'That his sermons are too long', 'That he speaks Latin', 'That David was innocent'], answer: 0, explain: '‘Bruoder Bertholt, du machst uns den wec gar enge …’' },
      { id: 'r2', type: 'mc', prompt: 'Who counted the people?', options: ['Joab, the marshal', 'Gad, the prophet', 'David himself', 'an angel'], answer: 0, explain: 'Dô zelet der marschalk daz volk.' },
      { id: 'r3', type: 'mc', prompt: 'What did David do on the day of the punishment?', options: ['He prostrated himself in the temple and prayed for his people', 'He fled to Jericho', 'He counted the people again', 'He sent Joab away'], answer: 0, explain: 'dô legte er sich in dem tempel an sîn venje.' },
      { id: 'r4', type: 'mc', prompt: 'What does Berthold want his hearers to learn from the story?', options: ['How to atone for sin by penance', 'How to count an army', 'Why kings should not marry', 'How to build castles'], answer: 0, explain: 'Nû wil ich iu sagen mit welhen dingen man die sünde büezen süle.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">hôchvart</span> means:', options: ['pride', 'a high road', 'a pilgrimage', 'a feast'], answer: 0, explain: 'The sin of pride.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">urliuge</span> means:', options: ['war', 'clock', 'lie', 'leave'], answer: 0, explain: 'Compare Dutch oorlog.' },
      { id: 't3', type: 'mc', prompt: 'In the charter, <span class="la">dú</span> stands for:', options: ['diu', 'dû', 'dô', 'daz'], answer: 0, explain: 'ú for iu.' },
      { id: 't4', type: 'mc', prompt: 'The corroboration of a charter says:', options: ['why and how it is sealed, to make it firm', 'who is addressed', 'the price', 'the weather'], answer: 0, explain: 'daz daz war si … dar umbe geben wir disen offen brief besigelt.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Ez ist vil bezzer, ir büezet die sünde hie ûf ertrîche, ___ daz ir mit dem tiufel êwiclichen brinnet.</span>', hint: 'than', answers: ['wanne'], full: 'Ez ist vil bezzer, ir büezet die sünde hie ûf ertrîche, wanne daz ir mit dem tiufel êwiclichen brinnet.', explain: 'wanne after a comparative.' },
      { id: 't6', type: 'mc', prompt: 'When is St Matthew’s day?', options: ['21 September', '24 June', '29 September', '11 November'], answer: 0, explain: 'The charter is dated an sant Matheus tage 1285.' },
      { id: 't7', type: 'mc', prompt: 'Berthold of Regensburg was:', options: ['a Franciscan preacher who died in 1272', 'a Minnesinger', 'the author of the Sachsenspiegel', 'a Swabian scribe'], answer: 0, explain: 'His German sermons were written down by others.' },
      { id: 't8', type: 'mc', prompt: 'Before about 1250, most charters in Germany were written in:', options: ['Latin', 'German', 'French', 'Greek'], answer: 0, explain: 'German spreads from the mid-13th century.' },
      { id: 't9', type: 'translate', dir: 'mhd-de', source: 'Ich wil die dritten buoze nemen.', model: 'Ich will die dritte Buße nehmen.', accepted: ['Ich will die dritte Buße nehmen', 'Ich will die dritte Buße wählen', 'Ich werde die dritte Buße nehmen'] },
      { id: 't10', type: 'translate', dir: 'mhd-en', source: 'Dû muost büezen.', model: 'You must do penance.', accepted: ['You must do penance', 'You must atone', 'You must make amends', 'You have to do penance', 'You have to atone'] },
      { id: 't11', type: 'mc', prompt: 'The Schwabenspiegel was compiled:', options: ['in Augsburg in the 1270s', 'in Saxony around 1220', 'in Zurich around 1300', 'in Vienna in 1880'], answer: 0, explain: 'Zeumer dates it 1274/5.' },
      { id: 't12', type: 'mc', prompt: 'In the charter, <span class="la">Hainrich</span>, <span class="la">aigens</span>, <span class="la">zwaihundert</span> show:', options: ['Swabian ai for ei', 'scribal errors', 'Latin spelling', 'Low German'], answer: 0, explain: 'Swabian still keeps the distinction.' }
    ]
  },

  reference: [
    { title: 'Parts of a charter', headers: ['Part', 'In the charter of 1285'], rows: [
      ['address', 'Allen dien, die disen brief lesent …'], ['issuer', 'ich Albrecht, dem man spricht Phaffenhoven'], ['declaration', 'kúnde und vergihe'], ['disposition', 'haigen uns verzigen …'], ['corroboration', 'daz daz war si … besigelt'], ['dating', 'an sant Matheus tage … achzic und funf jar'], ['witnesses', 'und waren daran …'], ['sealing', 'wan ich aigens insigels niht enhan']
    ] },
    { title: 'Charter spelling', headers: ['Charter', 'Normalised'], rows: [
      ['ai (Hainrich)', 'ei (Heinrich)'], ['ů (brůder)', 'uo (bruoder)'], ['ú (dú, drú)', 'iu (diu, driu)'], ['ȯ (vrȯwen, hȯrent)', 'ou, œ (vrouwen, hœrent)'], ['ph (phunt)', 'pf (pfunt)'], ['-in, -is (soltin, gottis)', '-en, -es (solten, gotes)']
    ] },
    { title: 'Berthold’s small words', headers: ['Word', 'Meaning'], rows: [
      ['wanne', 'for; than'], ['ie', 'in any case'], ['ze mâle', 'entirely'], ['sust', 'otherwise'], ['niur', 'only'], ['etewie', 'somehow'], ['dô … dô', 'when … then']
    ] }
  ]
});
