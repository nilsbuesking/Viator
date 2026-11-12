/*
 * Middle High German — Lecture VIII: courtly words and false friends.
 * Reading: Walther von der Vogelweide, L 46,32–47,15 (“Aller werdekeit ein füegerinne”), transcribed from the page images
 * of Lachmann’s 2nd edition (Berlin 1843), pp. 46–47.
 * Source panel: Walther, L 48,38–49,11 (“Wîp muoz iemer sîn der wîbe hôhste name”), same edition, pp. 48–49.
 * See CONTENT-CHECKS.md.
 */
Viator.addLecture('mhd', {
  id: 'mhd-08',
  number: 8,
  title: 'Frowe Mâze',
  subtitle: 'Courtly words and false friends: êre, triuwe, mâze, minne, hôher muot; Walther’s song to Lady Moderation',
  minutes: 60,

  intro: `
    <p>The hardest Middle High German words for a German speaker are the ones that look easy. <span class="la">wîp</span> is not a coarse word but the ordinary, even respectful, word for a woman. <span class="la">kranc</span> means “weak”, not “ill”; <span class="la">muot</span> is not courage but the whole state of mind; a <span class="la">hôchzît</span> is any great festival, and <span class="la">arebeit</span> is hardship rather than a job. Reading with modern meanings in mind produces translations that are fluent and wrong.</p>
    <p>The same is true of the words in which courtly literature talks about how to live: <span class="la">êre, triuwe, stæte, mâze, zuht, milte, minne, hôher muot</span>. You have met most of them in the readings. They have modern descendants, but their meaning around 1200 was different, and none of them translates exactly into modern German or English.</p>
    <p>The reading is a song by Walther von der Vogelweide addressed to <span class="la">frowe Mâze</span>, Lady Moderation. The singer asks her to teach him to woo “evenly”, because love aimed too low and love aimed too high have both nearly killed him. In twenty-two lines it uses <span class="la">werdekeit, mâze, unmâze, minne, liebe, herzeliebe, muot, lîp</span> and <span class="la">wîp</span>, and contrasts <span class="la">siech</span> with <span class="la">kranc</span>.</p>
    <p>By the end you should know the commonest false friends, be able to say what the main courtly words meant, recognise how abstract nouns such as <span class="la">werdekeit</span> and <span class="la">wîpheit</span> are built, and read Walther’s song with the glosses.</p>
  `,

  background: [
    {
      title: 'High love, low love and Lady Moderation',
      html: `
        <p>Much courtly love poetry in German follows the conventions of <em>hôhe minne</em>, “high love”, which developed under the influence of the troubadours and trouvères. The singer serves a lady of high standing who does not reward him; his constancy in hopeless service is what makes him worthy, and the song itself is part of the service. Walther’s older contemporary Reinmar is the poet most associated with this kind of song in German.</p>
        <p>In the song to <span class="la">frowe Mâze</span> Walther names two kinds of love. <span class="la">nideriu minne</span>, low love, debases: the body chases worthless pleasure. <span class="la">hôhiu minne</span>, high love, lifts the mind towards something worthy. Neither has worked for him, and he asks Moderation to teach him the middle way. Scholars have called the ideal this points to <em>ebene minne</em>, from the song’s <span class="la">ebene werben</span>: love between equals, given and returned. Some connect it with a group of Walther’s songs about a girl rather than a lady, such as <span class="la">Under der linden</span> (Lecture II). How far these songs form a group, when they were written, and how much of a programme or a quarrel with Reinmar lies behind them are all disputed; the songs themselves do not tell us their order.</p>
      `
    },
    {
      title: 'A system of knightly virtues?',
      html: `
        <p>In 1919 the Germanist Gustav Ehrismann argued that the courtly value words formed a coherent “system of knightly virtues”, built on ancient moral philosophy, Cicero’s <em>De officiis</em> above all, by way of medieval Latin moral treatises. The idea was influential for a generation. In 1943 Ernst Robert Curtius attacked it, arguing that the supposed system was a modern construction and that the Latin sources did not support it; his critique is reprinted in his <em>Europäische Literatur und lateinisches Mittelalter</em> (1948).</p>
        <p>Most scholars now treat the words as a shared vocabulary rather than a system. They came from several directions: from older Germanic social and legal language (<span class="la">êre, triuwe</span>), from French courtly culture (<span class="la">hövesch</span> is formed on the model of French <em>courtois</em>, from <span class="la">hof</span>, “court”), and from Christian and Latin learning. How far <span class="la">mâze</span> renders French <em>mesure</em> or Latin <em>temperantia</em> is itself debated. Poets used the words differently, and a single author can use one word in several senses.</p>
      `
    },
    {
      title: 'wîp and frouwe',
      html: `
        <p><span class="la">frouwe</span> is the feminine of an old word for “lord”, Old High German <span class="la">frô</span>, which survives in modern <em>Fronleichnam</em> (the body of the Lord) and <em>Frondienst</em> (service owed to the lord). Around 1200 a <span class="la">frouwe</span> was a lady: a woman of rank, the mistress of a household, the lady of the love songs, and also the Virgin Mary (<span class="la">unser frouwe</span>). <span class="la">wîp</span> was the general word for a woman, and it could be a term of high praise.</p>
        <p>Walther argues in the source panel that <span class="la">wîp</span> is the higher name, because it names womanhood itself, while <span class="la">frouwe</span> is only a title, and among the titled there are some who are no true women. Over the following centuries the polite title spread downwards, until <em>Frau</em> became the ordinary word for any woman; <em>Weib</em>, left behind, came to sound coarse. The same thing happened to <span class="la">herre</span>, the lord, who became any <em>Herr</em>.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Wîp muoz iemer sîn der wîbe hôhste name,<br>und tiuret baz dan frowe, als ichz erkenne.<br>swâ nû deheiniu sî diu sich ir wîpheit schame,<br>diu merke disen sanc und kiese denne.<br>under frowen sint unwîp,<br>under wîben sint si tiure.<br>wîbes name und wîbes lîp<br>die sint beide vil gehiure.<br>swiez umb alle frowen var,<br>wîp sint alle frowen gar.<br>zwîvellop daz hœnet,<br>als under wîlen frouwe:<br>wîp dèst ein name ders alle krœnet.</p>
    <p>“Woman must always be the highest name for women, and honours them more than ‘lady’, as I understand it. If there is any woman now who is ashamed of her womanhood, let her mark this song and then choose. Among ladies there are un-women; among women they are rare. Woman’s name and woman’s person are both most pleasing. However it may be with all ladies, all ladies are women. Two-edged praise mocks, as ‘lady’ sometimes does: woman, that is a name that crowns them all.” Walther von der Vogelweide, L 48,38–49,11, from Lachmann’s 2nd edition (Berlin 1843), pp. 48–49.</p>
    <p>The argument depends on the difference between a name for what someone is and a title for their rank. <span class="la">unwîp</span> is formed like <span class="la">unmâze</span> in the reading; <span class="la">wîpheit</span> like <span class="la">werdekeit</span>. <span class="la">ichz</span> = <span class="la">ich ez</span>, <span class="la">swiez</span> = <span class="la">swie ez</span>, <span class="la">ders</span> = <span class="la">der si</span>, “that … them” (Lecture VII). Lachmann prints <span class="la">dèst</span> (= <span class="la">daz ist</span>) with a grave accent; the more usual spelling is <span class="la">dêst</span>.</p>
  `,

  pronunciation: `
    <h3>Diphthongs in the reading</h3>
    <p><span class="la">siech</span> has the diphthong <em>i-e</em>, as in Bavarian <em>liab</em> or Swiss <em>lieb</em>, not the long <em>ie</em> of standard <em>Siechtum</em>. <span class="la">füegerinne</span> has <em>ü-e</em>, as in Swiss <em>müed</em>. In <span class="la">nideriu</span> and <span class="la">hôhiu</span>, <span class="la">iu</span> is a long <em>ü</em> (Lecture I).</p>
    <h3>Stress</h3>
    <p>As in modern German, the stress falls on the stem: <em>WËR-de-keit</em>, <em>FÜE-ge-rin-ne</em>. The prefix <span class="la">un-</span> takes the stress in nouns, <em>ÚN-mâ-ze</em>, as in modern <em>Únmaß</em>.</p>
    <h3>What the rhymes show</h3>
    <p>Each stanza has eleven lines rhyming <em>abc abc dd efe</em>: <span class="la">füegerinne : inne</span>, <span class="la">Mâze : strâze</span>, <span class="la">hât : rât</span>, <span class="la">lêret : versêret</span>, <span class="la">tôt : nôt</span>. The tenth line (<span class="la">siech</span>, <span class="la">sî</span>) has no partner: such an unrhymed line is called a <em>Waise</em>, “orphan”. The first six lines fall into two matching parts and the last five form a third, the usual shape of a courtly song stanza (Lecture IX).</p>
  `,

  grammar: [
    {
      title: '1. False friends',
      html: `
        <p>These words exist in modern German, but with a different meaning or tone. Read them in their Middle High German sense:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Word</th><th>Meaning around 1200</th><th>Today</th></tr></thead>
          <tbody>
            <tr><td class="la">wîp</td><td>woman (neutral or respectful)</td><td><em>Weib</em>, coarse</td></tr>
            <tr><td class="la">frouwe</td><td>lady, mistress</td><td><em>Frau</em>, any woman</td></tr>
            <tr><td class="la">maget</td><td>girl, maiden, virgin</td><td><em>Magd</em>, maid</td></tr>
            <tr><td class="la">dierne</td><td>girl; servant girl</td><td><em>Dirne</em>, prostitute</td></tr>
            <tr><td class="la">kneht</td><td>boy, young man; squire, servant</td><td><em>Knecht</em>, farmhand</td></tr>
            <tr><td class="la">hôchzît</td><td>high festival, feast</td><td><em>Hochzeit</em>, wedding</td></tr>
            <tr><td class="la">arebeit</td><td>hardship, toil, suffering</td><td><em>Arbeit</em>, work</td></tr>
            <tr><td class="la">list</td><td>skill, wisdom; trick</td><td><em>List</em>, cunning</td></tr>
            <tr><td class="la">muot</td><td>mind, mood, intention</td><td><em>Mut</em>, courage</td></tr>
            <tr><td class="la">lîp</td><td>life; body; person</td><td><em>Leib</em>, body</td></tr>
            <tr><td class="la">kranc</td><td>weak, feeble, worthless</td><td><em>krank</em>, ill</td></tr>
            <tr><td class="la">tump</td><td>young, inexperienced, naive</td><td><em>dumm</em>, stupid</td></tr>
            <tr><td class="la">geil</td><td>cheerful, exuberant</td><td><em>geil</em>, lustful; slang</td></tr>
            <tr><td class="la">hübesch</td><td>courtly, refined</td><td><em>hübsch</em>, pretty</td></tr>
            <tr><td class="la">vrum</td><td>capable, brave, useful</td><td><em>fromm</em>, pious</td></tr>
            <tr><td class="la">vriunt</td><td>friend; kinsman; lover</td><td><em>Freund</em></td></tr>
            <tr><td class="la">wirt</td><td>host; husband; lord of the house</td><td><em>Wirt</em>, innkeeper</td></tr>
            <tr><td class="la">ellende</td><td>(in) a foreign land, exile</td><td><em>Elend</em>, misery</td></tr>
          </tbody>
        </table></div>
        <p>Walther’s song puts two of them side by side: <span class="la">ze hôhe siech</span>, “sick from aiming too high”, uses the old word for illness, while <span class="la">nâch kranker liebe</span> means “after worthless pleasure”. <span class="la">vriunt</span> in the sense “relative” survives in southern German and Austrian <em>Freundschaft</em>, “relations”.</p>
      `
    },
    {
      title: '2. Why meanings move',
      html: `
        <p>The changes in the table fall into a few familiar types:</p>
        <ul>
          <li><strong>Titles drift downwards.</strong> A polite word for people of rank is applied, out of courtesy, to people of lower rank until it means everyone: <span class="la">frouwe</span> → <em>Frau</em>, <span class="la">herre</span> → <em>Herr</em>, <span class="la">juncherre</span> → <em>Junker</em>. The plain word it displaces sinks: <span class="la">wîp</span> → <em>Weib</em>.</li>
          <li><strong>Words for women and servants decline.</strong> <span class="la">dierne</span>, <span class="la">kneht</span> and <span class="la">wîp</span> all lost status; the pattern is common in European languages (English <em>hussy</em> is a worn-down <em>housewife</em>). English <em>knight</em>, from the same root as <span class="la">kneht</span>, went the opposite way.</li>
          <li><strong>Meanings narrow.</strong> <span class="la">hôchzît</span>, any great feast, came to mean the wedding feast; <span class="la">muot</span>, the whole inner disposition, came to mean courage.</li>
          <li><strong>Meanings widen or rise.</strong> <span class="la">arebeit</span>, hardship, became the ordinary word for work; <span class="la">hübesch</span>, courtly, now means pretty.</li>
          <li><strong>A word takes over a neighbour’s job.</strong> <span class="la">kranc</span>, weak, took over the sense “ill” and pushed <span class="la">siech</span> aside, which survives in <em>Siechtum</em> and <em>dahinsiechen</em>.</li>
          <li><strong>Taboo.</strong> <span class="la">minne</span> fell out of use after the Middle Ages, on most accounts because it came to be used for sexual intercourse, and was revived in the 18th century and by the Romantics as a word for the courtly past. <span class="la">geil</span> took a similar path and has since come back in slang.</li>
        </ul>
        <p>These are tendencies, not laws: many words kept their meaning, and the dates of each change vary by region and register.</p>
      `
    },
    {
      title: '3. The courtly value words',
      html: `
        <ul>
          <li><span class="la">êre</span>: honour as standing in the eyes of others, reputation; also the outward signs of it. <span class="la">dem volget sælde und êre</span> (Iwein, Lecture IV); Walther’s <span class="la">êre und varnde guot</span> (Lecture IV).</li>
          <li><span class="la">triuwe</span>: loyalty, good faith, keeping one’s word; also love and compassion. <span class="la">stæter triuwe ein adamas</span> (Armer Heinrich, Lecture III).</li>
          <li><span class="la">stæte</span>: constancy, steadfastness.</li>
          <li><span class="la">mâze</span>: due measure, moderation, the right amount; its opposite is <span class="la">unmâze</span>, excess. Modern <em>Maß</em>, <em>mäßig</em>.</li>
          <li><span class="la">zuht</span>: upbringing, discipline, good manners (Walther’s <span class="la">kindes zuht</span>, Lecture VII).</li>
          <li><span class="la">milte</span>: generosity, especially a lord’s open hand (<span class="la">der milte ein glîchiu wâge</span>, Lecture III).</li>
          <li><span class="la">hôher muot</span>: an elevated, joyful, self-confident state of mind, the mood of courtly society at its best, raised by love service. It is not <em>Hochmut</em>: pride is <span class="la">hôchvart</span> or <span class="la">übermuot</span>. Walther’s <span class="la">der muot … ûf swinget</span> is its image.</li>
          <li><span class="la">fröude</span>: joy, especially shared courtly joy (<span class="la">der werlte fröude</span>, Lecture III).</li>
          <li><span class="la">minne</span>: love, in every sense from devotion to desire; also loving remembrance, as in the custom of the <em>Johannisminne</em>, a farewell drink in memory of St John.</li>
          <li><span class="la">werdekeit</span>: worth, dignity, the esteem that courtly conduct earns. <span class="la">sælde</span>: blessedness, good fortune.</li>
        </ul>
        <p>Translate them according to the context rather than with one fixed equivalent each: <span class="la">êre</span> can be “honour”, “glory”, “respect” or “dignity”, and <span class="la">triuwe</span> “loyalty”, “fidelity” or “devotion”.</p>
      `
    },
    {
      title: '4. Building abstract words',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Suffix</th><th>Examples</th></tr></thead>
          <tbody>
            <tr><td class="la">-heit</td><td class="la">wîpheit, kintheit, tumpheit, hövescheit</td></tr>
            <tr><td class="la">-keit</td><td class="la">werdekeit, sælekeit, miltekeit</td></tr>
            <tr><td class="la">-e (+ umlaut)</td><td class="la">hœhe (hôch), lenge (lanc), güete (guot)</td></tr>
            <tr><td class="la">-schaft</td><td class="la">meisterschaft, vriuntschaft, geselleschaft</td></tr>
            <tr><td class="la">-unge</td><td class="la">manunge, samenunge</td></tr>
            <tr><td class="la">un-</td><td class="la">unmâze, untriuwe, unêre, unwîp</td></tr>
            <tr><td class="la">-inne</td><td class="la">küneginne, meisterinne, füegerinne</td></tr>
            <tr><td class="la">-lîch</td><td class="la">minneclich, lobelîch, unlobelîche (adv.)</td></tr>
          </tbody>
        </table></div>
        <p><strong>-keit</strong> began as a misdivision. Adjectives in <span class="la">-ec</span> (<span class="la">wërdec</span>, <span class="la">sælec</span>) took <span class="la">-heit</span>, and <span class="la">wërdec-heit</span> was heard as <span class="la">wërde-keit</span>. The new ending <span class="la">-keit</span> then spread to words with no <span class="la">-ec</span>, and modern <em>-igkeit</em> (<em>Würdigkeit</em>, <em>Ewigkeit</em>) adds the <em>-ig</em> back.</p>
        <p><strong>un-</strong> negates nouns as well as adjectives: <span class="la">unmâze</span> is excess, the absence of measure; <span class="la">unwîp</span> in the source panel is a woman who does not deserve the name. <strong>-inne</strong> makes feminine nouns, like modern <em>-in</em>: a <span class="la">füegerinne</span> is a woman who arranges or brings things about, from <span class="la">vüegen</span>.</p>
      `
    },
    {
      title: '5. Lady Moderation: personification and polite ir',
      html: `
        <p>Courtly poets turn abstract nouns into ladies: <span class="la">frowe Mâze</span>, <span class="la">vrou Minne</span>, <span class="la">vrou Sælde</span>, <span class="la">vrou Âventiure</span> (Lecture VII), and <span class="la">vrou Werlt</span>, Lady World, whom later poets and sculptors show beautiful in front and rotten behind. They are addressed as one addresses a lady, with the polite plural <span class="la">ir</span>: <span class="la">daz sît ir zewâre</span>; <span class="la">iuwer lêre</span>; <span class="la">daz ir mich ebene werben lêret</span>.</p>
        <p>Three verbs in the reading take a <strong>genitive</strong> object, where modern German has a preposition or the accusative:</p>
        <ul>
          <li><span class="la">sich schamen</span> + gen.: <span class="la">der endarf sich iuwer … schamen</span>, “he need not be ashamed of you”; <span class="la">iuwer</span> is the genitive of <span class="la">ir</span>, and <span class="la">endarf</span> is <span class="la">en</span> + <span class="la">darf</span> (Lectures VI and VII).</li>
          <li><span class="la">beiten</span> + gen.: <span class="la">wes diu mâze beitet</span>, “what Moderation is waiting for”; <span class="la">wes</span> is the genitive of <span class="la">waz</span>.</li>
          <li>In the source panel, <span class="la">sich … schamen</span> again: <span class="la">diu sich ir wîpheit schame</span>, “who is ashamed of her womanhood”.</li>
        </ul>
      `
    }
  ],

  vocab: [
    { id: 'maze', head: 'mâze', la: 'mâze', g: 'f', pos: 'noun', en: 'due measure, moderation; manner', de: 'Maß, Mäßigung; Art und Weise', note: 'ze mâze: moderately. frowe Mâze: Lady Moderation.' },
    { id: 'unmaze', head: 'unmâze', la: 'unmâze', g: 'f', pos: 'noun', en: 'excess, immoderation', de: 'Unmaß, Maßlosigkeit' },
    { id: 'werdekeit', head: 'werdekeit', la: 'werdekeit, wërdecheit', g: 'f', pos: 'noun', en: 'worth, dignity, esteem', de: 'Würde, Ansehen, Wert' },
    { id: 'froude', head: 'fröude', la: 'fröude, vreude', g: 'f', pos: 'noun', en: 'joy, delight; festivity', de: 'Freude; Fest' },
    { id: 'herzeliebe', head: 'herzeliebe', la: 'herzeliebe', g: 'f', pos: 'noun', en: 'heartfelt love; joy of the heart', de: 'Herzensliebe, herzliche Freude' },
    { id: 'wipheit', head: 'wîpheit', la: 'wîpheit', g: 'f', pos: 'noun', en: 'womanhood, womanliness', de: 'Weiblichkeit, Frausein' },
    { id: 'kneht', head: 'kneht', la: 'kneht', g: 'm', pos: 'noun', en: 'boy, young man; squire; servant', de: 'Knabe, junger Mann; Knappe; Diener', note: 'False friend: not only Knecht. English knight is the same word.' },
    { id: 'dierne', head: 'dierne', la: 'dierne, dirne', g: 'f', pos: 'noun', en: 'girl; servant girl', de: 'Mädchen; Magd', note: 'False friend: not Dirne in the modern sense.' },
    { id: 'vriunt', head: 'vriunt', la: 'vriunt, vriundes', g: 'm', pos: 'noun', en: 'friend; kinsman; lover', de: 'Freund; Verwandter; Geliebter' },
    { id: 'wirt', head: 'wirt', la: 'wirt', g: 'm', pos: 'noun', en: 'host; husband; lord of the house', de: 'Hausherr, Gastgeber; Ehemann', note: 'False friend: not only Wirt, innkeeper.' },
    { id: 'ellende', head: 'ellende', la: 'ellende', g: 'n', pos: 'noun', en: 'foreign land, exile', de: 'Fremde, Verbannung', note: 'Also an adjective, “foreign, exiled”. False friend: not Elend, misery.' },
    { id: 'schade', head: 'schade', la: 'schade', g: 'm', pos: 'noun', en: 'harm, damage, loss', de: 'Schaden' },
    { id: 'straze', head: 'strâze', la: 'strâze', g: 'f', pos: 'noun', en: 'street, road', de: 'Straße', note: 'ze hove noch an der strâze: at court or in the street, i.e. anywhere.' },
    { id: 'ouge', head: 'ouge', la: 'ouge; pl. ougen', g: 'n', pos: 'noun', en: 'eye', de: 'Auge' },
    { id: 'kranc', head: 'kranc', la: 'kranc', pos: 'adjective', en: 'weak, feeble; worthless', de: 'schwach; wertlos, gering', note: 'False friend: not “ill” (that is siech).' },
    { id: 'siech', head: 'siech', la: 'siech', pos: 'adjective', en: 'sick, ill', de: 'krank', note: 'The ordinary word for ill; modern Siechtum, dahinsiechen.' },
    { id: 'tump', head: 'tump', la: 'tump, tumber', pos: 'adjective', en: 'young, inexperienced, naive; foolish', de: 'unerfahren, töricht', note: 'False friend: weaker than dumm.' },
    { id: 'geil', head: 'geil', la: 'geil', pos: 'adjective', en: 'cheerful, exuberant, high-spirited', de: 'fröhlich, übermütig', note: 'False friend.' },
    { id: 'gemeit', head: 'gemeit', la: 'gemeit', pos: 'adjective', en: 'cheerful, lively; fine', de: 'fröhlich, lebensfroh; stattlich' },
    { id: 'vrum', head: 'vrum', la: 'vrum, vrume', pos: 'adjective', en: 'capable, brave, worthy; useful', de: 'tüchtig, tapfer; nützlich', note: 'False friend: not fromm, pious.' },
    { id: 'tiure', head: 'tiure', la: 'tiure, tiur', pos: 'adjective', en: 'precious, costly; rare', de: 'kostbar, teuer; selten' },
    { id: 'minneclich', head: 'minneclîch', la: 'minneclîch', pos: 'adjective', en: 'lovely, charming; loving', de: 'lieblich, liebenswert' },
    { id: 'zeware', head: 'zewâre', la: 'zewâre (ze wâre)', pos: 'adverb', en: 'truly, indeed', de: 'wahrlich, fürwahr' },
    { id: 'ebene', head: 'ebene', la: 'ebene', pos: 'adverb, adjective', en: 'evenly, in balance; level, equal', de: 'eben, gleichmäßig' },
    { id: 'werben', head: 'wërben', la: 'wërben, warp, wurben, geworben', pos: 'verb, strong III', en: 'strive, act; woo, court', de: 'sich bemühen, handeln; werben' },
    { id: 'reizen', head: 'reizen', la: 'reizen', pos: 'verb, weak', en: 'entice, stir up, spur on', de: 'reizen, locken, antreiben' },
    { id: 'beiten', head: 'beiten', la: 'beiten (+ gen.)', pos: 'verb, weak', en: 'wait (for); hesitate', de: 'warten (auf); zögern' },
    { id: 'verseren', head: 'versêren', la: 'versêren', pos: 'verb, weak', en: 'wound, injure', de: 'verwunden, verletzen', note: 'Modern unversehrt.' },
    { id: 'swachen', head: 'swachen', la: 'swachen', pos: 'verb, weak', en: 'weaken; debase, lower', de: 'schwächen; erniedrigen' },
    { id: 'verleiten', head: 'verleiten', la: 'verleiten', pos: 'verb, weak', en: 'lead astray', de: 'verleiten, irreführen' },
    { id: 'ersehen', head: 'ersëhen', la: 'ersëhen, ersach, ersâhen, ersëhen', pos: 'verb, strong V', en: 'catch sight of', de: 'erblicken' },
    { id: 'kiesen', head: 'kiesen', la: 'kiesen, kôs, kurn, gekorn', pos: 'verb, strong II', en: 'choose; examine', de: 'wählen; prüfen', note: 'Grammatical change s/r: modern küren, Kür.' },
    { id: 'hoenen', head: 'hœnen', la: 'hœnen', pos: 'verb, weak', en: 'scorn, insult', de: 'höhnen, beschimpfen' },
    { id: 'kroenen', head: 'krœnen', la: 'krœnen', pos: 'verb, weak', en: 'crown', de: 'krönen' }
  ],

  grammarCards: [
    { id: 'mh8-wip', front: 'wîp', back: 'woman, neutral or respectful (not coarse like Weib)' },
    { id: 'mh8-frouwe', front: 'frouwe', back: 'lady, mistress (feminine of frô, lord)' },
    { id: 'mh8-kranc', front: 'kranc', back: 'weak, worthless (ill is siech)' },
    { id: 'mh8-hochzit', front: 'hôchzît', back: 'high festival, feast (not only wedding)' },
    { id: 'mh8-arebeit', front: 'arebeit', back: 'hardship, toil, suffering' },
    { id: 'mh8-list', front: 'list', back: 'skill, wisdom; trick' },
    { id: 'mh8-muot', front: 'muot', back: 'mind, mood, intention (not only courage)' },
    { id: 'mh8-tump', front: 'tump', back: 'young, inexperienced, naive' },
    { id: 'mh8-maget', front: 'maget', back: 'girl, maiden (not Magd)' },
    { id: 'mh8-vrum', front: 'vrum', back: 'capable, brave, useful (not fromm)' },
    { id: 'mh8-hoher', front: 'hôher muot', back: 'elevated, joyful spirit (not Hochmut, which is hôchvart)' },
    { id: 'mh8-ere', front: 'êre', back: 'honour, reputation, standing' },
    { id: 'mh8-triuwe', front: 'triuwe', back: 'loyalty, good faith; devotion' },
    { id: 'mh8-maze', front: 'mâze', back: 'due measure, moderation (opposite: unmâze)' },
    { id: 'mh8-keit', front: 'Where does -keit come from?', back: '-ec + -heit (wërdec-heit heard as wërde-keit)' },
    { id: 'mh8-titles', front: 'frouwe → Frau, herre → Herr', back: 'Titles drift downwards; the plain word (wîp) sinks' },
    { id: 'mh8-minne', front: 'Why did minne go out of use?', back: 'On most accounts it came to mean sexual intercourse; revived in the 18th century and by the Romantics' },
    { id: 'mh8-schamen', front: 'sich schamen + ?', back: 'genitive: der endarf sich iuwer niender … schamen' },
    { id: 'mh8-system', front: '“System of knightly virtues”', back: 'Ehrismann 1919; attacked by Curtius 1943' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">wîp</span> in Middle High German is:', options: ['the ordinary, even respectful word for a woman', 'a coarse word for a woman', 'a word for a married woman only', 'a word for a servant girl'], answer: 0, explain: 'Weib became coarse later, as frouwe spread downwards.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">nâch kranker liebe</span> means:', options: ['after worthless pleasure', 'after a sick lover', 'after love of the sick', 'after a painful love'], answer: 0, explain: 'kranc: weak, worthless. Ill is siech.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">nû bin ich aber ze hôhe siech</span>:', options: ['now I am sick again from aiming too high', 'now I am searching too high again', 'now I am too high to be sick', 'now I am weak but high'], answer: 0, explain: 'siech: ill. ze hôhe: too high.' },
    { id: 'e4', type: 'mc', prompt: 'A <span class="la">hôchzît</span> is:', options: ['any high festival or feast', 'only a wedding', 'a high tide', 'a holy hour of prayer'], answer: 0, explain: 'Narrowed later to the wedding feast.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">hôher muot</span> is:', options: ['an elevated, joyful state of mind', 'arrogance', 'great courage in battle', 'a high-ranking mood of the king'], answer: 0, explain: 'Pride is hôchvart or übermuot.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">arebeit</span> (as in <span class="la">von grôzer arebeit</span>) means:', options: ['hardship, toil, suffering', 'a job', 'a piece of work of art', 'workers'], answer: 0, explain: 'arebeit became the ordinary word for work later.' },
    { id: 'e7', type: 'mc', prompt: 'A <span class="la">tump</span> young knight is:', options: ['inexperienced, naive', 'stupid beyond help', 'dumb, unable to speak', 'brave'], answer: 0, explain: 'tump: young, inexperienced; weaker than dumm.' },
    { id: 'e8', type: 'mc', prompt: '<span class="la">vrum</span> means:', options: ['capable, brave, useful', 'pious', 'early', 'free'], answer: 0, explain: 'vrum → fromm, which later narrowed to “pious”.' },
    { id: 'e9', type: 'mc', prompt: 'According to Walther, <span class="la">nideriu minne</span> is love that:', options: ['debases, so that the body chases worthless pleasure', 'is felt for a low-born girl', 'is never rewarded', 'lifts the mind to worthy love'], answer: 0, explain: 'diu sô swachet daz der lîp nâch kranker liebe ringet.' },
    { id: 'e10', type: 'mc', prompt: 'What does the singer ask <span class="la">frowe Mâze</span> to teach him?', options: ['to woo evenly, in due measure', 'to stop loving', 'to love only high ladies', 'to sing better'], answer: 0, explain: 'daz ir mich ebene werben lêret.' },
    { id: 'e11', type: 'mc', prompt: 'The ending <span class="la">-keit</span> in <span class="la">werdekeit</span> comes from:', options: ['-ec + -heit misdivided', 'Latin -itas', 'French -té', 'the noun keit, “kind”'], answer: 0, explain: 'wërdec-heit was heard as wërde-keit.' },
    { id: 'e12', type: 'mc', prompt: 'Which change is an example of pejoration (a word losing status)?', options: ['wîp → Weib', 'arebeit → Arbeit', 'hübesch → hübsch', 'frouwe → Frau'], answer: 0, explain: 'Weib now sounds coarse.' },
    { id: 'e13', type: 'match', prompt: 'Match the false friends with their Middle High German meaning.', pairs: [
      ['wîp', 'woman'], ['hôchzît', 'festival'], ['arebeit', 'hardship'], ['list', 'skill, wisdom'], ['kranc', 'weak'], ['maget', 'girl, maiden']
    ] },
    { id: 'e14', type: 'match', prompt: 'Match the courtly value words.', pairs: [
      ['êre', 'honour, reputation'], ['triuwe', 'loyalty'], ['stæte', 'constancy'], ['mâze', 'moderation'], ['milte', 'generosity'], ['zuht', 'good upbringing']
    ] },
    { id: 'e15', type: 'gap', prompt: '<span class="la">Aller werde___ ein füegerinne</span>', hint: 'abstract-noun ending', answers: ['keit'], full: 'Aller werdekeit ein füegerinne', explain: 'werdekeit: worth, dignity.' },
    { id: 'e16', type: 'gap', prompt: '<span class="la">diu sich ir wîp___ schame</span>', hint: 'womanhood', answers: ['heit'], full: 'diu sich ir wîpheit schame', explain: 'wîpheit: womanhood.' },
    { id: 'e17', type: 'gap', prompt: '<span class="la">___ enlât mich âne nôt.</span>', hint: 'excess, immoderation', answers: ['unmâze', 'Unmâze'], full: 'unmâze enlât mich âne nôt.', explain: 'un- + mâze.' },
    { id: 'e18', type: 'gap', prompt: '<span class="la">der ___ sich iuwer niender inne … schamen</span>', hint: 'need not (en + darf)', answers: ['endarf'], full: 'der endarf sich iuwer niender inne … schamen', explain: 'en + darf: a full negative with durfen.' },
    { id: 'e19', type: 'paradigm', prompt: 'Form the abstract noun.', headers: ['Noun'], rows: [
      { label: 'wërt (+ -ec)', answers: ['werdekeit|wërdekeit|werdecheit|wërdecheit'] },
      { label: 'wîp', answers: ['wîpheit'] },
      { label: 'kint', answers: ['kintheit'] },
      { label: 'tump', answers: ['tumpheit'] }
    ] },
    { id: 'e20', type: 'paradigm', prompt: 'Form the feminine with <span class="la">-inne</span>.', headers: ['Feminine'], rows: [
      { label: 'künec', answers: ['küneginne|künegin'] },
      { label: 'meister', answers: ['meisterinne|meisterin'] },
      { label: 'wirt', answers: ['wirtinne|wirtin'] }
    ] },
    { id: 'e21', type: 'order', prompt: 'Put the modern German in order.', source: 'hôhiu minne reizet unde machet daz der muot nâch werder liebe ûf swinget', tokens: ['Hohe Minne', 'reizt und bewirkt,', 'dass sich der Sinn', 'zu würdiger Liebe', 'aufschwingt.'], explain: 'muot: mind, spirit. This is the image behind hôher muot.' },
    { id: 'e22', type: 'translate', dir: 'mhd-de', source: 'Mîn ougen hânt ein wîp ersehen.', model: 'Meine Augen haben eine Frau erblickt.', accepted: ['Meine Augen haben eine Frau erblickt', 'Meine Augen haben eine Frau gesehen', 'Meine Augen haben eine Frau ersehen', 'Meine Augen erblickten eine Frau', 'Meine Augen sahen eine Frau'], explain: 'wîp: woman, not the modern coarse Weib.' },
    { id: 'e23', type: 'translate', dir: 'mhd-en', source: 'Diu liebe tuot wê.', model: 'Love hurts.', accepted: ['Love hurts', 'Love causes pain', 'Love gives pain', 'Love brings pain', 'Love does harm', 'Love causes sorrow', 'Love causes woe', 'This love hurts', 'That love hurts'] },
    { id: 'e24', type: 'translate', dir: 'de-mhd', source: 'Sie ist eine edle Frau.', model: 'Si ist ein edel wîp.', accepted: ['Si ist ein edel wîp', 'Sî ist ein edel wîp', 'Si ist ein edelez wîp', 'Sî ist ein edelez wîp', 'Si ist ein edeliu vrouwe', 'Si ist ein edel vrouwe', 'Si ist ein edeliu frouwe', 'Si ist ein edel frouwe', 'Si ist ein edeliu frowe', 'Sî ist ein edeliu vrouwe'] },
    { id: 'e25', type: 'mc', prompt: 'Why does Walther call <span class="la">wîp</span> the higher name?', options: ['It names womanhood itself, while frowe is only a title', 'It is the older word', 'It is used only of queens', 'It rhymes better'], answer: 0, explain: 'under frowen sint unwîp, under wîben sint si tiure.' },
    { id: 'e26', type: 'mc', prompt: '<span class="la">frouwe</span> is the feminine of an old word meaning:', options: ['lord', 'glad', 'free', 'early'], answer: 0, explain: 'OHG frô, “lord”: Fronleichnam, Frondienst.' },
    { id: 'e27', type: 'mc', prompt: 'The idea of a closed “system of knightly virtues” was:', options: ['proposed by Ehrismann (1919) and attacked by Curtius (1943)', 'set out by Walther in the song to Mâze', 'laid down in the Schwabenspiegel', 'accepted by all scholars'], answer: 0, explain: 'Most scholars now speak of a shared vocabulary rather than a system.' }
  ],

  reading: {
    title: 'Walther von der Vogelweide, Aller werdekeit ein füegerinne (L 46,32–47,15)',
    note: 'Authentic text: Walther’s song to Lady Moderation, transcribed from the page images of Lachmann’s 2nd edition (Berlin 1843), pp. 46–47. Lachmann spells both frowe and frouwe and indents the last line of each stanza. Tap any word.',
    text: 'Aller werdekeit ein füegerinne,\ndaz sît ir zewâre, frowe Mâze.\ner sælic man, der iuwer lêre hât!\nder endarf sich iuwer niender inne\nweder ze hove schamen noch an der strâze.\ndur daz sô suoche ich, frouwe, iuwern rât,\ndaz ir mich ebene werben lêret.\nwirbe ich nidere, wirbe ich hôhe, ich bin versêret.\nich was vil nâch ze nidere tôt,\nnû bin ich aber ze hôhe siech:\n  unmâze enlât mich âne nôt.\n\nNideriu minne heizet diu sô swachet\ndaz der lîp nâch kranker liebe ringet:\ndiu liebe tuot unlobelîche wê.\nhôhiu minne reizet unde machet\ndaz der muot nâch werder liebe ûf swinget:\ndiu winket mir nû, daz ich mit ir gê.\nnun weiz ich wes diu mâze beitet.\nkumet diu herzeliebe, sô bin ich verleitet:\nmîn ougen hânt ein wîp ersehen,\nswie minneclich ir rede sî,\n  mir mac wol schade von ir geschehen.',
    translations: [
      { label: 'German translation', text: 'Stifterin aller Würde, das seid Ihr wahrlich, Frau Mâze. Selig der Mann, der Eure Lehre hat! Der braucht sich Euer nirgends zu schämen, weder am Hof noch auf der Straße. Darum suche ich, Herrin, Euren Rat, dass Ihr mich lehrt, im rechten Maß zu werben. Werbe ich niedrig, werbe ich hoch, ich werde verwundet. Durch zu niedriges Werben war ich beinahe tot, jetzt bin ich wiederum durch zu hohes krank: Maßlosigkeit lässt mich nicht ohne Not. Niedere Minne heißt die, die so erniedrigt, dass der Leib nach wertlosem Vergnügen strebt: Diese Liebe tut auf unrühmliche Weise weh. Hohe Minne reizt und bewirkt, dass sich der Sinn zu würdiger Liebe aufschwingt: Die winkt mir jetzt, dass ich mit ihr gehe. Nun weiß ich, worauf die Mâze wartet. Kommt die Herzensliebe, so bin ich verführt: Meine Augen haben eine Frau erblickt; wie liebenswürdig ihre Rede auch sein mag, mir kann wohl Schaden von ihr geschehen.' },
      { label: 'English translation', text: 'Bringer of all worth, that you truly are, Lady Moderation. Blessed the man who has your teaching! He need never be ashamed of you anywhere, neither at court nor in the street. Therefore, lady, I seek your counsel: teach me to woo in due measure. If I woo low, if I woo high, I am wounded. I was nearly dead from aiming too low; now I am sick again from aiming too high: excess does not leave me free of distress. That is called low love which so debases that the body strives after worthless pleasure: such love hurts in a way that earns no praise. High love entices and makes the spirit soar up towards worthy love: she beckons to me now to go with her. Now I know what Moderation is waiting for. If heartfelt love comes, then I am led astray: my eyes have caught sight of a woman; however lovely her words may be, harm may well come to me from her.' }
    ],
    notes: [
      { ref: 'Aller werdekeit ein füegerinne, / daz sît ir zewâre, frowe Mâze', html: '<span class="la">aller werdekeit</span>: genitive singular feminine, “of all worth”. <span class="la">füegerinne</span>: a woman who arranges, brings about, from <span class="la">vüegen</span> (Lecture V <span class="la">gevüegen</span>) with <span class="la">-er</span> and <span class="la">-inne</span>. <span class="la">sît ir</span>: the polite plural to a lady. <span class="la">zewâre</span> = <span class="la">ze wâre</span>, “truly”.' },
      { ref: 'er sælic man, der iuwer lêre hât!', html: 'An exclamation without a verb: literally “he (is) a blessed man who has your teaching”; translators render it “Blessed the man who …”. <span class="la">sælic</span>: blessed, fortunate (modern <em>selig</em>).' },
      { ref: 'der endarf sich iuwer niender inne / weder ze hove schamen noch an der strâze', html: '<span class="la">endarf</span> = <span class="la">en</span> + <span class="la">darf</span>, “need not”. <span class="la">sich schamen</span> takes the genitive <span class="la">iuwer</span>, “of you”. <span class="la">niender inne</span>: “nowhere at all”. <span class="la">ze hove … an der strâze</span>: in courtly and in public life, i.e. anywhere.' },
      { ref: 'daz ir mich ebene werben lêret', html: '<span class="la">ebene</span>: evenly, in balance. <span class="la">wërben</span>: to strive, act, and especially to woo. Scholars have named Walther’s ideal of balanced, mutual love <em>ebene minne</em> after this line.' },
      { ref: 'wirbe ich nidere, wirbe ich hôhe, ich bin versêret', html: 'Two conditions by inversion (Lecture VI): “if I woo low, if I woo high”. <span class="la">versêret</span>: wounded (modern <em>versehrt</em>).' },
      { ref: 'ich was vil nâch ze nidere tôt, / nû bin ich aber ze hôhe siech', html: '<span class="la">vil nâch</span>: almost. <span class="la">ze nidere, ze hôhe</span>: “from (aiming) too low, too high”. <span class="la">siech</span> is the ordinary word for ill; <span class="la">aber</span> here is “again”.' },
      { ref: 'unmâze enlât mich âne nôt', html: '<span class="la">enlât</span> = <span class="la">en</span> + <span class="la">lât</span>: “does not leave”, a negative with <span class="la">en</span> alone (Lecture VII). <span class="la">unmâze</span>, excess, is Mâze’s opposite.' },
      { ref: 'Nideriu minne heizet diu sô swachet / daz der lîp nâch kranker liebe ringet', html: '“That (love) is called low love which so debases that …”: <span class="la">diu</span> is “the one which”. <span class="la">der lîp</span>: the body, the physical self, set against <span class="la">der muot</span> four lines later. <span class="la">kranker</span>: dative singular feminine of <span class="la">kranc</span>, “weak, worthless”.' },
      { ref: 'diu liebe tuot unlobelîche wê', html: '<span class="la">liebe</span>: here “pleasure” as much as “love”. <span class="la">unlobelîche</span>: an adverb in <span class="la">-lîche</span> (Lecture IV), “in a way that deserves no praise”.' },
      { ref: 'hôhiu minne reizet unde machet / daz der muot nâch werder liebe ûf swinget', html: '<span class="la">muot</span>: mind, spirit. The mind “swinging up” is the image behind <span class="la">hôher muot</span>. <span class="la">werder</span>: dative feminine of <span class="la">wërt</span>, “worthy”.' },
      { ref: 'diu winket mir nû, daz ich mit ir gê', html: '<span class="la">diu</span>: high love. <span class="la">gê</span>: subjunctive of <span class="la">gân/gên</span> (Lecture V).' },
      { ref: 'nun weiz ich wes diu mâze beitet', html: '<span class="la">beiten</span> + genitive, “wait for”; <span class="la">wes</span> is the genitive of <span class="la">waz</span>. The sense of the line is disputed: Moderation hesitates to come, and the next line may give the reason, heartfelt love that leads him astray. This is Lachmann’s wording.' },
      { ref: 'kumet diu herzeliebe, sô bin ich verleitet', html: 'A condition by inversion. <span class="la">herzeliebe</span>: love or joy that comes from the heart.' },
      { ref: 'mîn ougen hânt ein wîp ersehen', html: '<span class="la">wîp</span>, not <span class="la">frouwe</span>: a woman, not a lady of rank. Some interpreters give weight to the choice of word; compare the source panel. <span class="la">ersëhen</span>: catch sight of.' },
      { ref: 'swie minneclich ir rede sî', html: '<span class="la">swie</span> + subjunctive: “however … may be”. Lachmann prints <span class="la">minneclich</span> without a length mark here; the dictionaries give <span class="la">minneclîch</span>.' }
    ],
    glosses: {
      'aller': 'of all (gen. f.)', 'werdekeit': 'worth, dignity', 'ein': 'a', 'füegerinne': 'one who brings about, arranges (f.)', 'daz': 'that; so that', 'sît': 'are (polite: you are)', 'ir': 'you (polite); her', 'zewâre': 'truly (ze wâre)', 'frowe': 'lady', 'mâze': 'moderation, due measure',
      'er': 'he', 'sælic': 'blessed, happy', 'man': 'man', 'der': 'who; he; the', 'iuwer': 'your; of you (gen. of ir)', 'lêre': 'teaching', 'hât': 'has', 'endarf': 'need not (en + darf)', 'sich': 'himself (reflexive)', 'niender': 'nowhere', 'inne': 'within: niender inne, nowhere at all',
      'weder': 'neither', 'ze': 'at; too', 'hove': 'court (dat. of hof)', 'schamen': 'be ashamed (+ gen.)', 'noch': 'nor', 'an': 'in, on', 'strâze': 'street, road', 'dur': 'durch: dur daz, therefore', 'sô': 'so; then', 'suoche': 'seek', 'ich': 'I', 'frouwe': 'lady', 'iuwern': 'your (acc.)', 'rât': 'counsel, advice',
      'mich': 'me', 'ebene': 'evenly, in due measure', 'werben': 'woo; strive', 'lêret': 'teach', 'wirbe': 'woo (if I woo)', 'nidere': 'low; too low', 'hôhe': 'high; too high', 'bin': 'am', 'versêret': 'wounded', 'was': 'was', 'vil': 'very: vil nâch, almost', 'nâch': 'after, towards; vil nâch, almost', 'tôt': 'dead',
      'nû': 'now', 'aber': 'again; but', 'siech': 'sick, ill', 'unmâze': 'excess, immoderation', 'enlât': 'does not leave (en + lât)', 'âne': 'without', 'nôt': 'distress, need',
      'nideriu': 'low (f.)', 'minne': 'love', 'heizet': 'is called', 'diu': 'the one which; she; the', 'swachet': 'debases, lowers', 'lîp': 'body, physical self', 'kranker': 'weak, worthless (dat. f. of kranc)', 'liebe': 'pleasure, love, joy', 'ringet': 'strives, struggles',
      'tuot': 'does: tuot wê, hurts', 'unlobelîche': 'in a way not to be praised', 'wê': 'woe, pain', 'hôhiu': 'high (f.)', 'reizet': 'entices, spurs on', 'unde': 'and', 'machet': 'makes, causes', 'muot': 'mind, spirit', 'werder': 'worthy (dat. f. of wërt)', 'ûf': 'up', 'swinget': 'soars, swings',
      'winket': 'beckons', 'mir': 'to me', 'mit': 'with', 'gê': 'go (subj. of gân)', 'nun': 'now', 'weiz': 'know', 'wes': 'what (gen. of waz)', 'beitet': 'waits (for) (beiten + gen.)', 'kumet': 'comes; if … comes', 'herzeliebe': 'heartfelt love, joy of the heart', 'verleitet': 'led astray',
      'mîn': 'my', 'ougen': 'eyes', 'hânt': 'have', 'wîp': 'woman', 'ersehen': 'caught sight of', 'swie': 'however', 'minneclich': 'lovely, charming', 'rede': 'speech, words', 'sî': 'may be (subj. of sîn)', 'mac': 'may, can', 'wol': 'well, indeed', 'schade': 'harm', 'von': 'from', 'geschehen': 'happen'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What has happened to the singer when he wooed too low?', options: ['He was nearly dead', 'He became rich', 'He was praised at court', 'Nothing at all'], answer: 0, explain: 'ich was vil nâch ze nidere tôt.' },
      { id: 'r2', type: 'mc', prompt: 'What does high love do, according to the second stanza?', options: ['It makes the spirit soar towards worthy love', 'It debases the body', 'It heals the sick', 'It keeps the singer away from court'], answer: 0, explain: 'daz der muot nâch werder liebe ûf swinget.' },
      { id: 'r3', type: 'mc', prompt: 'Where need the man who follows Mâze never be ashamed?', options: ['At court or in the street, i.e. anywhere', 'Only in church', 'Only at home', 'Only before his lady'], answer: 0, explain: 'weder ze hove … noch an der strâze.' },
      { id: 'r4', type: 'mc', prompt: 'What do the singer’s eyes see at the end of the song?', options: ['A woman (wîp)', 'Lady Moderation', 'The court', 'A queen'], answer: 0, explain: 'mîn ougen hânt ein wîp ersehen.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">maget</span> means:', options: ['girl, maiden', 'maid, servant', 'stomach', 'power'], answer: 0, explain: 'False friend: not Magd.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">kranc</span> means:', options: ['weak, worthless', 'ill', 'crooked', 'cramped'], answer: 0, explain: 'Ill is siech.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">mâze</span> means:', options: ['due measure, moderation', 'mass, crowd', 'a meal', 'measles'], answer: 0, explain: 'Opposite: unmâze.' },
      { id: 't4', type: 'mc', prompt: '<span class="la">hôher muot</span> is the opposite of:', options: ['sorrow, low spirits', 'courage', 'humility before God', 'moderation'], answer: 0, explain: 'An elevated, joyful state of mind.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">tump___</span> (inexperience)', hint: 'abstract-noun ending', answers: ['heit'], full: 'tumpheit', explain: 'tump + -heit.' },
      { id: 't6', type: 'mc', prompt: 'Why did <span class="la">frouwe</span> become <em>Frau</em>, the ordinary word?', options: ['The polite title spread to women of lower rank', 'It was borrowed from French', 'Luther preferred it', 'wîp died out completely'], answer: 0, explain: 'Titles drift downwards.' },
      { id: 't7', type: 'mc', prompt: 'In <span class="la">der endarf sich iuwer … schamen</span>, <span class="la">iuwer</span> is:', options: ['genitive of ir: of you', 'possessive: your', 'dative: to you', 'accusative: you'], answer: 0, explain: 'sich schamen takes the genitive.' },
      { id: 't8', type: 'mc', prompt: '<span class="la">under frowen sint unwîp</span> means:', options: ['among ladies there are un-women', 'among women there are no ladies', 'under the ladies are the women', 'ladies are not women'], answer: 0, explain: 'Walther, L 49,3.' },
      { id: 't9', type: 'translate', dir: 'mhd-de', source: 'Daz wîp ist schœne.', model: 'Die Frau ist schön.', accepted: ['Die Frau ist schön', 'Die Frau ist schoen'] },
      { id: 't10', type: 'translate', dir: 'de-mhd', source: 'Die Liebe tut weh.', model: 'Diu liebe tuot wê.', accepted: ['Diu liebe tuot wê', 'Diu minne tuot wê', 'Liebe tuot wê', 'Minne tuot wê'] },
      { id: 't11', type: 'mc', prompt: '<span class="la">arebeit</span> in courtly poetry is usually:', options: ['hardship, suffering', 'paid work', 'a workshop', 'a workman'], answer: 0, explain: 'von grôzer arebeit (Nibelungenlied, stanza 1).' },
      { id: 't12', type: 'mc', prompt: 'A <span class="la">füegerinne</span> is:', options: ['a woman who brings about, arranges', 'a female fighter', 'a seamstress', 'a woman who flees'], answer: 0, explain: 'vüegen + -er + -inne.' }
    ]
  },

  reference: [
    { title: 'False friends', headers: ['Word', 'Meaning', 'Today'], rows: [
      ['wîp', 'woman', 'Weib (coarse)'], ['frouwe', 'lady', 'Frau'], ['maget', 'girl, maiden', 'Magd'], ['dierne', 'girl', 'Dirne'], ['kneht', 'boy, squire', 'Knecht'], ['hôchzît', 'festival', 'Hochzeit'], ['arebeit', 'hardship', 'Arbeit'],
      ['list', 'skill, wisdom', 'List'], ['muot', 'mind, mood', 'Mut'], ['lîp', 'life, body, person', 'Leib'], ['kranc', 'weak', 'krank'], ['tump', 'inexperienced', 'dumm'], ['geil', 'cheerful', 'geil'], ['hübesch', 'courtly', 'hübsch'],
      ['vrum', 'capable, brave', 'fromm'], ['vriunt', 'friend, kinsman', 'Freund'], ['wirt', 'host, husband', 'Wirt'], ['ellende', 'foreign land', 'Elend']
    ] },
    { title: 'Courtly value words', headers: ['Word', 'Meaning'], rows: [
      ['êre', 'honour, reputation'], ['triuwe', 'loyalty, good faith'], ['stæte', 'constancy'], ['mâze', 'due measure'], ['zuht', 'upbringing, manners'], ['milte', 'generosity'],
      ['hôher muot', 'elevated, joyful spirit'], ['fröude', 'joy'], ['minne', 'love; remembrance'], ['werdekeit', 'worth, dignity'], ['sælde', 'blessedness, fortune']
    ] },
    { title: 'Word-building', headers: ['Ending', 'Examples'], rows: [
      ['-heit', 'wîpheit, kintheit'], ['-keit', 'werdekeit'], ['-e', 'hœhe, güete'], ['-schaft', 'meisterschaft'], ['un-', 'unmâze, unwîp'], ['-inne', 'küneginne, füegerinne'], ['-lîch', 'minneclîch']
    ] }
  ]
});
