/*
 * Middle High German — Lecture III: nouns, the strong and weak declensions, and the uses of the cases.
 * Reading: Hartmann von Aue, Der arme Heinrich, lines 29–74 (the portrait of Heinrich), transcribed from
 * the page images of Hermann Paul's edition, 6th edition (Altdeutsche Textbibliothek 3, Halle 1921), pp. 1–3.
 * Source panel: Nibelungenlied, stanza 1, from the page image of Karl Bartsch's edition (Deutsche Classiker
 * des Mittelalters 3, Leipzig 1866), p. 1. Paradigms checked against Weinhold, Mhd. Grammatik (1877),
 * §§ 430–437. See CONTENT-CHECKS.md.
 */
Viator.addLecture('mhd', {
  id: 'mhd-03',
  number: 3,
  title: 'Der werlte fröude ein spiegelglas',
  subtitle: 'Nouns: the strong and weak declensions and the uses of the cases; Hartmann’s portrait of the perfect lord',
  minutes: 60,

  intro: `
    <p>Middle High German nouns have the same four cases, three genders and two numbers as modern German, and many of the same plural patterns: <span class="la">tac, tage</span> like <em>Tag, Tage</em>; <span class="la">gast, geste</span> like <em>Gast, Gäste</em>. What is different is the detail. The dative singular still ends in <span class="la">-e</span> (<span class="la">dem tage</span>), many neuters have no plural ending at all (<span class="la">diu wort</span>, “the words”), and the weak nouns in <span class="la">-en</span> are far more numerous: <span class="la">der herre, des herren</span>; <span class="la">diu vrouwe, der vrouwen</span>.</p>
    <p>The biggest difference is in how the cases are used. The genitive does far more work than today. It stands before its noun (<span class="la">der werlte fröude</span>, “the joy of the world”), it follows verbs and adjectives where modern German has an accusative or a preposition (<span class="la">rîch der êren</span>, “rich in honour”), and it expresses “some of” (<span class="la">wunders vil</span>, “many wonders”). A German speaker who reads the genitive as an ordinary article will often misread the sentence.</p>
    <p>The reading continues <em>Der arme Heinrich</em> from Lecture I. After the prologue, Hartmann describes his hero, a Swabian lord who has everything: birth, wealth, honour and every courtly virtue. The portrait is built almost entirely of nouns, and of nouns in the genitive in particular: Heinrich is <span class="la">der werlte fröude ein spiegelglas, stæter triuwe ein adamas</span>.</p>
    <p>By the end you should be able to decline the main types of strong and weak noun, recognise the cases from their endings and articles, explain the uses of the genitive and dative that modern German has lost, and read Hartmann’s 46-line portrait of Heinrich with the glosses.</p>
  `,

  background: [
    {
      title: 'Der arme Heinrich: a story of leprosy and sacrifice',
      html: `
        <p>Hartmann’s poem is short, about 1,500 lines, and was probably written in the 1190s. Its plot can be told in a paragraph. Heinrich, the perfect lord described in this lecture’s reading, is struck by leprosy (<span class="la">miselsuht</span>). Hartmann sets him beside Absalom, whose beauty and glory did not save him, and contrasts him with Job, who bore his suffering patiently. A doctor in Salerno tells Heinrich that only one thing can cure him: the heart’s blood of a young virgin who gives her life of her own free will.</p>
        <p>Heinrich withdraws to a farm worked by one of his peasants. The farmer’s young daughter learns of the cure and insists on dying for him. In Salerno, at the last moment, Heinrich sees her through a chink in the wall as the doctor prepares to cut, and refuses the sacrifice. Because he has accepted God’s will, God heals him. He returns home and, against the expectations of his rank, marries the girl.</p>
        <p>Hartmann says that he found the story written down (line 17 of the prologue). No source has been identified. Hermann Paul, whose edition we read, thought it likely that Hartmann followed a Latin account written in Germany, and pointed out that the belief that leprosy could be cured with human blood is old: Pliny already reports it. Hartmann makes his hero a lord of Aue, the place he names as his own (line 5). Paul suggests that Hartmann may have thought of Heinrich as an ancestor of the family he served, but adds that it cannot be decided whether this was in the source.</p>
        <p>How to read the ending is still debated: whether the marriage shows that inner worth outweighs rank, or whether Hartmann makes it acceptable by stressing that the girl’s family was free. Both readings can point to lines in the text.</p>
      `
    },
    {
      title: 'Three manuscripts, a fire and an editor',
      html: `
        <p>Paul’s introduction lists what survives: three complete manuscripts, one from Strasbourg (A), one in Heidelberg (Bª) and one from Kalocsa in Hungary (Bᵇ), and fragments of two more, from St Florian (C) and from the monastery of Indersdorf, now in Munich (D). The two B manuscripts go back to the same copy, which had already been heavily revised. Paul therefore follows A, the manuscript closest to the original, unless there are particular reasons not to.</p>
        <p>Manuscript A no longer exists. Paul simply says that it is burnt; it is generally thought to have perished when the Strasbourg library burned during the siege of 1870. Editors now depend on earlier transcriptions of it.</p>
        <p>Paul’s edition also shows what an editor does. At the foot of his introduction he lists every place where his text differs from the manuscripts or from the edition of Erich Gierach (1913). In line 61 of our reading he prints <span class="la">der werlte fröude</span> with A and B, where Gierach printed <span class="la">werltfröude</span>; in lines 33–34 he prints the rhyme <span class="la">tugende : jugende</span>, although A and B both have <span class="la">tugent : jugent</span>. Both forms are good Middle High German (see grammar section 4); the choice is the editor’s.</p>
        <p>Lecture I quoted the prologue from a later revision of the same edition (by Gesa Bonath, 1984). Small differences between the two, such as <span class="la">ze Ouwe</span> in Paul’s 1921 text and <span class="la">zOuwe</span> in the revision, are differences between editions, not between manuscripts.</p>
      `
    },
    {
      title: 'Why the endings shrank',
      html: `
        <p>Old High German had full vowels in its endings: the plural of <span class="la">tag</span> was <span class="la">taga</span>, genitive <span class="la">tago</span>, dative <span class="la">tagum</span>. In the 11th century these unstressed vowels were reduced, in most words, to a single weak <span class="la">e</span>. The three plural forms became <span class="la">tage, tage, tagen</span>. Distinctions that had been carried by the ending now had to be carried by the article, which is why the article is so important in reading Middle High German, and why it remains the main marker of case today.</p>
        <p>Two later changes took this further. The dative <span class="la">-e</span> was gradually dropped (<em>dem Tag</em> beside the older <em>dem Tage</em>), and the genitive gave up much of its territory to prepositions and to the dative. Middle High German stands in the middle of this process: the endings are already weak, but the uses of the cases are still largely the old ones.</p>
        <p>Modern German is full of fossils from the older system. <em>Auf Erden</em> keeps the weak dative singular of <span class="la">ërde</span>; <em>Frauenkirche</em> and <em>Unserer Lieben Frauen</em> the weak genitive singular of <span class="la">vrouwe</span>; <em>vorhanden</em>, <em>abhanden</em> and <em>zu Händen</em> the old dative plural <span class="la">handen</span>; <em>allerhand</em> the genitive plural in <span class="la">aller hande</span>, “of all kinds”, which occurs in the reading. <em>Vergissmeinnicht</em> keeps the genitive object of <span class="la">vergëzzen</span>: <em>mein</em> is the old genitive of <em>ich</em>. And the region names <em>Schwaben</em>, <em>Franken</em>, <em>Sachsen</em> and <em>Bayern</em> are dative plurals of the tribal names: <span class="la">ze Swâben</span> meant “among the Swabians”.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Uns ist in alten mæren wunders vil geseit<br>von heleden lobebæren, von grôzer arebeit,<br>von fröuden, hôchgezîten, von weinen und von klagen,<br>von küener recken strîten muget ir nu wunder hœren sagen.</p>
    <p>“We have been told many wonders in old stories, of heroes worthy of praise, of great hardship, of joys and festivities, of weeping and lamenting; of the battles of bold warriors you may now hear wonders told.” The first stanza of the <em>Nibelungenlied</em> as printed by Karl Bartsch (Leipzig 1866), p. 1, where it is stanza 1. Manuscript B, on which Bartsch’s text rests, does not have this stanza: Bartsch took it from the other manuscripts, and his margin gives its number in Lachmann’s edition (A) and Holtzmann’s (C). Many scholars think it was added in the revision that manuscript C represents. Bartsch marks the stress on <span class="la">ir</span> in the last line with an accent, which is left out here.</p>
    <p>Two genitives frame the stanza. <span class="la">wunders vil</span>, “much of wonder”, is the partitive genitive: Bartsch’s own note explains it as a genitive dependent on the noun <span class="la">vil</span>, “viel Wunderbares”. <span class="la">küener recken strîten</span>, “the fights of bold warriors”, puts the genitive plural before its noun, exactly like Hartmann’s <span class="la">der werlte fröude</span>. <span class="la">heleden</span> is the dative plural of <span class="la">helet</span>, which Bartsch calls the older form of <span class="la">helt</span>.</p>
  `,

  pronunciation: `
    <p>Three points about nouns matter for pronunciation, and for the metre of verse.</p>
    <h3>Final devoicing is written</h3>
    <p>At the end of a word, <span class="la">b, d, g</span> were pronounced as <span class="la">p, t, k</span>, and the editions spell them that way: <span class="la">tac, tages</span>; <span class="la">lop, lobes</span>; <span class="la">walt, waldes</span>; <span class="la">wîp, wîbes</span>. Modern German pronounces it the same way but writes <em>Tag, Lob</em>. When a noun in the nominative ends in <span class="la">-c, -p, -t</span>, the other cases may show <span class="la">g, b, d</span>.</p>
    <h3>Short vowels in open syllables</h3>
    <p>In <span class="la">tage, name, lobe, wâge</span>, only the vowel marked with a circumflex is long. <span class="la">tage</span> and <span class="la">name</span> had a short <em>a</em>, as in <em>Tasse</em>; the long vowel of modern <em>Tage, Name</em> is the result of lengthening in open syllables, after the Middle High German period. A German speaker’s instinct here is wrong, and it matters in verse, where a short syllable counts differently.</p>
    <h3>Every -e is pronounced</h3>
    <p>The <span class="la">-e</span> of the endings was a real syllable, a weak <em>e</em> as in modern <em>Tage</em>: <span class="la">dem tage</span> has three syllables, <span class="la">ze vollem lobe</span> five. In verse it is sometimes elided before a vowel, but it is never silent by default.</p>
  `,

  grammar: [
    {
      title: '1. Four cases, three genders, weak endings',
      html: `
        <p>Nominative, genitive, dative and accusative; masculine, feminine and neuter; singular and plural. Nothing here is new to a German speaker. But because the endings have been reduced to <span class="la">-e, -es, -en</span>, the same ending can belong to several cases, and the <strong>article</strong> is often what tells you which. Lecture IV covers the article and pronouns fully; for reading the noun tables, these are the forms you need:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Masc.</th><th>Neut.</th><th>Fem.</th><th>Plural</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">der</td><td class="la">daz</td><td class="la">diu</td><td class="la">die (neut. diu)</td></tr>
            <tr><th>Gen.</th><td class="la">des</td><td class="la">des</td><td class="la">der</td><td class="la">der</td></tr>
            <tr><th>Dat.</th><td class="la">dem</td><td class="la">dem</td><td class="la">der</td><td class="la">den</td></tr>
            <tr><th>Acc.</th><td class="la">den</td><td class="la">daz</td><td class="la">die</td><td class="la">die (neut. diu)</td></tr>
          </tbody>
        </table></div>
        <p>Two forms catch German speakers out. <span class="la">diu</span> is the feminine singular nominative and also the neuter plural: <span class="la">diu wort</span> is “die Wörter”. And <span class="la">der</span> before a feminine noun is genitive or dative singular, or genitive plural: <span class="la">der werlte</span> is “der Welt”.</p>
        <p>As in modern German, nouns fall into two main types: <strong>strong</strong> nouns, with endings in <span class="la">-e, -es</span> and little else, and <strong>weak</strong> nouns, with <span class="la">-en</span> in every case but the nominative singular. The terms are again Jacob Grimm’s.</p>
      `
    },
    {
      title: '2. Strong masculines: tac and gast',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>tac</th><th>gast</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">tac</td><td class="la">gast</td></tr>
            <tr><th>Gen. sg.</th><td class="la">tages</td><td class="la">gastes</td></tr>
            <tr><th>Dat. sg.</th><td class="la">tage</td><td class="la">gaste</td></tr>
            <tr><th>Acc. sg.</th><td class="la">tac</td><td class="la">gast</td></tr>
            <tr><th>Nom. pl.</th><td class="la">tage</td><td class="la">geste</td></tr>
            <tr><th>Gen. pl.</th><td class="la">tage</td><td class="la">geste</td></tr>
            <tr><th>Dat. pl.</th><td class="la">tagen</td><td class="la">gesten</td></tr>
            <tr><th>Acc. pl.</th><td class="la">tage</td><td class="la">geste</td></tr>
          </tbody>
        </table></div>
        <p>The two types differ only in the plural: <span class="la">tac</span> keeps its vowel, <span class="la">gast</span> has umlaut. The difference is old. <span class="la">gast</span> belongs to the Germanic <em>i</em>-stems, whose plural ending once contained an <em>i</em> that caused the umlaut and then disappeared. Modern <em>Tage</em> and <em>Gäste</em> keep the same split.</p>
        <ul>
          <li>Like <span class="la">tac</span>: <span class="la">eit, kneht, schilt, lîp, berc</span>.</li>
          <li>Like <span class="la">gast</span>: <span class="la">slac, sun, vuoz, zan</span> (plural <span class="la">slege, süne, vüeze, zene</span>).</li>
          <li>Nouns in <span class="la">-el, -er, -en</span> often drop the <span class="la">e</span> of the ending: <span class="la">des vogels, den engeln</span>.</li>
          <li>A few masculines end in <span class="la">-e</span> throughout the singular: <span class="la">der hirte, des hirtes</span>; <span class="la">daz ende, des endes</span> (also masculine).</li>
        </ul>
      `
    },
    {
      title: '3. Strong neuters: wort, and the few plurals in -er',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">daz wort</td><td class="la">diu wort</td></tr>
            <tr><th>Gen.</th><td class="la">des wortes</td><td class="la">der worte</td></tr>
            <tr><th>Dat.</th><td class="la">dem worte</td><td class="la">den worten</td></tr>
            <tr><th>Acc.</th><td class="la">daz wort</td><td class="la">diu wort</td></tr>
          </tbody>
        </table></div>
        <p>The singular is the same as <span class="la">tac</span>. The plural has <strong>no ending</strong> in the nominative and accusative: <span class="la">diu wort, diu lant, diu kint, diu buoch</span>. Only the article shows the number. In the reading, <span class="la">in allen den landen</span> is the dative plural of <span class="la">lant</span>.</p>
        <p>A small group of neuters had a plural in <span class="la">-er</span> with umlaut: <span class="la">lamp, lember</span>; <span class="la">kalp, kelber</span>; <span class="la">rint, rinder</span>; <span class="la">ei, eier</span>; <span class="la">huon, hüener</span>. From this handful the <em>-er</em> plural spread after the Middle High German period to <em>Wörter, Länder, Bücher, Häuser</em>; <span class="la">wort</span> could already take it occasionally. Poetic <em>Lande</em> and doublets like <em>Worte/Wörter</em> show the older forms still competing.</p>
      `
    },
    {
      title: '4. Strong feminines: gëbe and kraft',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>gëbe</th><th>kraft</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">gëbe</td><td class="la">kraft</td></tr>
            <tr><th>Gen. sg.</th><td class="la">gëbe</td><td class="la">krefte, kraft</td></tr>
            <tr><th>Dat. sg.</th><td class="la">gëbe</td><td class="la">krefte, kraft</td></tr>
            <tr><th>Acc. sg.</th><td class="la">gëbe</td><td class="la">kraft</td></tr>
            <tr><th>Nom. pl.</th><td class="la">gëbe</td><td class="la">krefte</td></tr>
            <tr><th>Gen. pl.</th><td class="la">gëben</td><td class="la">krefte</td></tr>
            <tr><th>Dat. pl.</th><td class="la">gëben</td><td class="la">kreften</td></tr>
            <tr><th>Acc. pl.</th><td class="la">gëbe</td><td class="la">krefte</td></tr>
          </tbody>
        </table></div>
        <p><strong><span class="la">gëbe</span></strong> (“gift”, modern <em>Gabe</em>) is the commonest feminine type: <span class="la">-e</span> in every case of the singular, <span class="la">-en</span> only in the genitive and dative plural. Like it: <span class="la">êre, minne, triuwe, milte, stunde, sache, rede, wâge</span>.</p>
        <p><strong><span class="la">kraft</span></strong> is a feminine <em>i</em>-stem. In the genitive and dative singular it can take <span class="la">-e</span> with umlaut (<span class="la">der krefte</span>) or stay unchanged (<span class="la">der kraft</span>); both occur in the same texts. Like it: <span class="la">hant, stat, nôt, zuht, vluht, geburt, tugent, jugent, werlt</span>. Modern German has kept the plural (<em>Kräfte, Städte, Nöte</em>) and given up the umlauted singular forms.</p>
        <p>This is the background to the editorial choice in lines 33–34 of the reading. The manuscripts A and B have <span class="la">deheiner der tugent / … in sîner jugent</span>; Paul prints <span class="la">tugende : jugende</span>. With <span class="la">tugent</span> the phrase means “no virtue”, with <span class="la">tugende</span> (genitive plural) “none of the virtues”; <span class="la">jugent</span> and <span class="la">jugende</span> are both dative singular. The sense hardly changes; the editor regularised the endings.</p>
        <p><span class="la">hant</span> has some older forms still: genitive plural <span class="la">hande</span> in <span class="la">aller hande</span>, “of all kinds”, and dative plural <span class="la">handen</span> beside <span class="la">henden</span>. Both are in the reading.</p>
      `
    },
    {
      title: '5. Weak nouns: bote, zunge, herze',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Masc.</th><th>Fem.</th><th>Neut.</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">der bote</td><td class="la">diu zunge</td><td class="la">daz herze</td></tr>
            <tr><th>Gen. sg.</th><td class="la">des boten</td><td class="la">der zungen</td><td class="la">des herzen</td></tr>
            <tr><th>Dat. sg.</th><td class="la">dem boten</td><td class="la">der zungen</td><td class="la">dem herzen</td></tr>
            <tr><th>Acc. sg.</th><td class="la">den boten</td><td class="la">die zungen</td><td class="la">daz herze</td></tr>
            <tr><th>Plural</th><td class="la">boten</td><td class="la">zungen</td><td class="la">herzen</td></tr>
          </tbody>
        </table></div>
        <p>Weak nouns end in <span class="la">-e</span> in the nominative singular and in <span class="la">-en</span> everywhere else, except that the neuters keep <span class="la">-e</span> in the accusative singular. There are only four weak neuters: <span class="la">herze, ouge, ôre, wange</span>. Weak masculines include <span class="la">herre, name, bluome, vürste</span>, and <span class="la">mâge</span> beside strong <span class="la">mâc</span>; weak feminines <span class="la">vrouwe, zunge, sunne, ërde, kirche</span>.</p>
        <p>The masculine type survives almost unchanged: <em>der Bote, des Boten, dem Boten</em>. The feminines have lost their singular endings (<em>die Zunge, der Zunge</em>), and that is the trap. <span class="la">der vrouwen</span> is usually “of the lady” or “to the lady”, singular, not “of the ladies”. In <span class="la">der vrouwen gruoz</span> one lady greets; only the context, and sometimes a pronoun, can tell you whether there are more.</p>
        <p>In the reading: <span class="la">der herre Heinrich, sîn name, sîn herze, ein bluome</span>, and <span class="la">sîner mâge</span>, “of his kinsmen”.</p>
      `
    },
    {
      title: '6. Some nouns of their own',
      html: `
        <ul>
          <li><strong><span class="la">man</span></strong> is often uninflected: <span class="la">des mannes</span> or <span class="la">des man</span>, plural <span class="la">die man</span> beside <span class="la">die manne</span>. Compounds follow it: <span class="la">dienstman</span>, plural <span class="la">dienstman</span> (Lecture I). Modern <em>Mannen</em>, “followers”, continues the old plural.</li>
          <li>The kinship nouns <span class="la">vater, muoter, bruoder, tohter, swester</span> are often uninflected in the singular: <span class="la">mîns vater lant</span> beside <span class="la">mînes vaters</span>.</li>
          <li><span class="la">vriunt</span> “friend, relative” and <span class="la">vîent</span> “enemy” were once participles (“loving”, “hating”) and have plurals in <span class="la">-e</span> or without ending.</li>
          <li><strong>Personal names</strong> of men decline like strong nouns but often take <span class="la">-en</span> in the accusative: <span class="la">Heinrich, Heinriches, Heinriche, Heinrichen</span>. In front of a name <span class="la">herre</span> shrinks to <span class="la">her</span>, and is then often inflected as <span class="la">hern</span>: <span class="la">an hern Heinriche</span>, “in Lord Heinrich”, a little after our reading.</li>
        </ul>
      `
    },
    {
      title: '7. The uses of the cases',
      html: `
        <p><strong>The genitive</strong> is the case to watch.</p>
        <ul>
          <li><strong>Before its noun.</strong> <span class="la">der werlte fröude</span>, “the joy of the world”; <span class="la">des râtes brücke</span>, “the bridge of counsel”; <span class="la">küener recken strîten</span>. Modern German does this only with names (<em>Heinrichs Burg</em>) and in high style (<em>des Lebens Freude</em>). Read the genitive, then look for the noun it belongs to: in <span class="la">der werlte fröude ein spiegelglas</span>, the genitive phrase belongs to <span class="la">spiegelglas</span>, “a mirror of the world’s joy”.</li>
          <li><strong>Partitive</strong>, “some of, of”: <span class="la">wunders vil</span>, “many wonders”; <span class="la">deheiner der tugende</span>, “none of the virtues”; <span class="la">iht des</span>, “anything of it” (Lecture I). After <span class="la">vil, genuoc, lützel, wênic, iht, niht</span> the noun is in the genitive: <span class="la">vil der liute</span>, “many people”.</li>
          <li><strong>With verbs.</strong> Many verbs take a genitive object: <span class="la">vergëzzen, gedenken, pflëgen</span> (Lecture II), <span class="la">gern</span> “desire”, <span class="la">wænen</span> “expect”, <span class="la">sich genieten</span> “enjoy”. <span class="la">an dem enwas vergezzen deheiner der tugende</span>: “in him none of the virtues had been forgotten”.</li>
          <li><strong>With adjectives.</strong> <span class="la">rîch der gebürte</span>, “rich in birth”; <span class="la">vrî, vol, wërt, wîs</span> often take a genitive too. Modern <em>einer Sache bewusst, müde, sicher</em> keep the pattern.</li>
          <li><strong>As an adverb.</strong> <span class="la">des morgens, eines tages, aller hande</span>: modern <em>morgens, eines Tages, allerhand</em>.</li>
        </ul>
        <p><strong>The dative</strong> marks the person concerned, more freely than today: <span class="la">im was der rehte wunsch gegeben</span>, “to him the ideal had been given”; <span class="la">im enwart über noch gebrast</span>, “with him there was neither too much nor too little”. It follows <span class="la">gelîch</span> (<span class="la">den fürsten gelîch</span>, “equal to princes”) and the prepositions <span class="la">ze, mit, von, ûz, bî</span>, and <span class="la">an, in, ûf, under, vor</span> when they say where something is. <span class="la">ze</span> + dative plural of a people names a place: <span class="la">ze Swâben</span>, “in Swabia”.</p>
        <p><strong>The accusative</strong> is the direct object, the goal of movement after <span class="la">an, in, ûf</span>, and the case of extent in time: <span class="la">die naht</span>, “all night”.</p>
      `
    }
  ],

  vocab: [
    // strong masculines
    { id: 'tac', head: 'tac', la: 'tac, tages; pl. tage', g: 'm', pos: 'noun, strong', en: 'day', de: 'Tag', note: 'The model strong masculine. Final devoicing: tac, but tages.' },
    { id: 'gast', head: 'gast', la: 'gast, gastes; pl. geste', g: 'm', pos: 'noun, strong', en: 'guest; stranger', de: 'Gast; Fremder', note: 'Umlaut in the plural, as modern Gäste.' },
    { id: 'eit', head: 'eit', la: 'eit, eides', g: 'm', pos: 'noun, strong', en: 'oath', de: 'Eid' },
    { id: 'rat', head: 'rât', la: 'rât, râtes', g: 'm', pos: 'noun, strong', en: 'counsel, advice; help, remedy; provision', de: 'Rat; Abhilfe; Vorrat', note: 'des râtes brücke: a bridge of counsel.' },
    { id: 'muot', head: 'muot', la: 'muot, muotes', g: 'm', pos: 'noun, strong', en: 'mind, spirit, mood; intention', de: 'Sinn, Gesinnung, Stimmung', note: 'False friend: rarely Mut. hôher muot: an elated, confident spirit.' },
    { id: 'wunsch', head: 'wunsch', la: 'wunsch, wunsches', g: 'm', pos: 'noun, strong', en: 'wish; the ideal, perfection', de: 'Wunsch; Inbegriff, Vollkommenheit', note: 'der rehte wunsch: everything one could wish for.' },
    { id: 'mac', head: 'mâc', la: 'mâc, mâges; pl. mâge', g: 'm', pos: 'noun, strong', en: 'kinsman, relative', de: 'Verwandter', note: 'Also weak: mâge, mâgen. Not related to Magen or Magd.' },
    { id: 'pris', head: 'prîs', la: 'prîs, prîses', g: 'm', pos: 'noun, strong', en: 'praise, renown; prize', de: 'Ruhm, Lob; Preis', note: 'A loan from French prix.' },
    // strong neuters
    { id: 'wort', head: 'wort', la: 'wort, wortes; pl. wort', g: 'n', pos: 'noun, strong', en: 'word', de: 'Wort', note: 'Plural without ending: diu wort.' },
    { id: 'lant', head: 'lant', la: 'lant, landes; pl. lant', g: 'n', pos: 'noun, strong', en: 'land, country', de: 'Land', note: 'in allen den landen: dative plural.' },
    { id: 'guot', head: 'guot', la: 'guot, guotes', g: 'n', pos: 'noun, strong', en: 'goods, property, wealth', de: 'Gut, Besitz, Vermögen', note: 'The noun; the adjective guot means gut.' },
    { id: 'lop', head: 'lop', la: 'lop, lobes', g: 'n', pos: 'noun, strong', en: 'praise', de: 'Lob' },
    { id: 'maere', head: 'mære', la: 'mære', g: 'n', pos: 'noun, strong', en: 'story, tale; news, report', de: 'Erzählung, Geschichte; Nachricht', note: 'False friend: not a fairy tale. Märchen is its diminutive. Also feminine.' },
    // strong feminines
    { id: 'gebe', head: 'gëbe', la: 'gëbe; pl. gëbe', g: 'f', pos: 'noun, strong', en: 'gift', de: 'Gabe', note: 'The model strong feminine: -e in every case of the singular.' },
    { id: 'kraft', head: 'kraft', la: 'kraft; pl. krefte', g: 'f', pos: 'noun, strong', en: 'strength, power; host, great number', de: 'Kraft, Macht; Menge', note: 'Gen. and dat. sg. krefte or kraft.' },
    { id: 'hant', head: 'hant', la: 'hant; pl. hende', g: 'f', pos: 'noun, strong', en: 'hand; side; kind, sort', de: 'Hand; Seite; Art', note: 'aller hande, of all kinds (allerhand); ze handen, at one’s disposal (vorhanden).' },
    { id: 'tugent', head: 'tugent', la: 'tugent; pl. tugende', g: 'f', pos: 'noun, strong', en: 'virtue, excellence; good quality', de: 'Tugend; Vorzüglichkeit, Tüchtigkeit', note: 'Wider than modern Tugend: any excellence, courtly accomplishments included.' },
    { id: 'werlt', head: 'wërlt', la: 'wërlt, wërlte', g: 'f', pos: 'noun, strong', en: 'world; people, society', de: 'Welt; die Leute', note: 'der werlte lop: the praise of the world, of everyone.' },
    { id: 'triuwe', head: 'triuwe', la: 'triuwe', g: 'f', pos: 'noun, strong', en: 'loyalty, faithfulness; pledge', de: 'Treue; Treueversprechen' },
    { id: 'zuht', head: 'zuht', la: 'zuht', g: 'f', pos: 'noun, strong', en: 'good breeding, courtly manners; upbringing', de: 'Anstand, feines Benehmen; Erziehung', note: 'False friend: not Zucht in the sense of breeding animals.' },
    { id: 'milte', head: 'milte', la: 'milte', g: 'f', pos: 'noun, strong', en: 'generosity', de: 'Freigebigkeit', note: 'False friend: the lord’s virtue of giving freely, not mildness.' },
    { id: 'geburt', head: 'geburt', la: 'geburt, gebürte', g: 'f', pos: 'noun, strong', en: 'birth; descent, rank', de: 'Geburt; Abstammung, Stand' },
    { id: 'habe', head: 'habe', la: 'habe', g: 'f', pos: 'noun, strong', en: 'possessions, property', de: 'Habe, Besitz' },
    { id: 'vluht', head: 'vluht', la: 'vluht, fluht', g: 'f', pos: 'noun, strong', en: 'flight; refuge', de: 'Flucht; Zuflucht', note: 'der nôthaften vluht: the refuge of those in need.' },
    // weak nouns
    { id: 'herre', head: 'herre', la: 'herre, herren', g: 'm', pos: 'noun, weak', en: 'lord, master', de: 'Herr', note: 'Before a name shortened to her: her Heinrich.' },
    { id: 'name', head: 'name', la: 'name, namen', g: 'm', pos: 'noun, weak', en: 'name', de: 'Name' },
    { id: 'herze', head: 'hërze', la: 'hërze, hërzen', g: 'n', pos: 'noun, weak', en: 'heart', de: 'Herz', note: 'One of only four weak neuters, with ouge, ôre, wange.' },
    { id: 'zunge', head: 'zunge', la: 'zunge, zungen', g: 'f', pos: 'noun, weak', en: 'tongue; language', de: 'Zunge; Sprache' },
    // adjectives
    { id: 'huebesch', head: 'hübesch', la: 'hübesch, hövesch', pos: 'adjective', en: 'courtly, refined, well-mannered', de: 'höfisch, gebildet', note: 'From hof, court. False friend: modern hübsch has narrowed to “pretty”.' },
    { id: 'rich', head: 'rîch', la: 'rîch', pos: 'adjective', en: 'powerful, noble; rich; splendid', de: 'mächtig, vornehm; reich; prächtig', note: 'With genitive: rîch der êren, rich in honour.' },
    { id: 'gelich', head: 'gelîch', la: 'gelîch', pos: 'adjective', en: 'equal, like (+ dat.)', de: 'gleich (+ Dat.)' },
    { id: 'staete', head: 'stæte', la: 'stæte', pos: 'adjective', en: 'constant, steadfast, lasting', de: 'beständig, treu, fest', note: 'stæte is also the noun: constancy.' },
    // verbs
    { id: 'vergezzen', head: 'vergëzzen', la: 'vergëzzen, vergaz, vergâzen, vergëzzen', pos: 'verb, strong V', en: 'forget (+ gen.)', de: 'vergessen (+ Gen.)', note: 'Vergissmeinnicht keeps the genitive: mein is the old genitive of ich.' },
    { id: 'heizen', head: 'heizen', la: 'heizen, hiez, hiezen, geheizen', pos: 'verb, strong VII', en: 'be called; call, name; command', de: 'heißen; nennen; befehlen' },
    { id: 'tragen', head: 'tragen', la: 'tragen, truoc, truogen, getragen', pos: 'verb, strong VI', en: 'carry, bear; wear', de: 'tragen' },
    { id: 'gewinnen', head: 'gewinnen', la: 'gewinnen, gewan, gewunnen, gewunnen', pos: 'verb, strong III', en: 'win, gain, obtain', de: 'gewinnen, erwerben' },
    { id: 'gebresten', head: 'gebrësten', la: 'gebrësten, gebrast, gebrâsten, gebrosten', pos: 'verb, strong IV', en: 'be lacking (+ dat. of the person)', de: 'mangeln, fehlen', note: 'Modern Gebrechen; es gebricht ihm an …' }
  ],

  grammarCards: [
    { id: 'mh3-tac', front: 'Decline tac (sg. and pl.)', back: 'tac, tages, tage, tac; pl. tage, tage, tagen, tage' },
    { id: 'mh3-gast', front: 'Plural of gast, and why', back: 'geste, geste, gesten, geste: i-stem, umlaut in the plural (Gäste)' },
    { id: 'mh3-wort', front: 'diu wort: what number?', back: 'Plural: strong neuters have no ending in nom./acc. pl.; diu shows the plural' },
    { id: 'mh3-er', front: 'Neuters with an -er plural in MHG', back: 'A small group: lamp/lember, kalp/kelber, rint/rinder, ei/eier, huon/hüener' },
    { id: 'mh3-gebe', front: 'Decline gëbe (sg. and pl.)', back: 'Sg. gëbe in all cases; pl. gëbe, gëben, gëben, gëbe' },
    { id: 'mh3-kraft', front: 'Gen./dat. sg. of kraft', back: 'krefte or kraft (both occur); pl. krefte, dat. kreften' },
    { id: 'mh3-weak', front: 'Weak noun endings', back: 'Nom. sg. -e; all other forms -en (neuter acc. sg. -e): bote, boten' },
    { id: 'mh3-neut', front: 'The four weak neuters', back: 'herze, ouge, ôre, wange' },
    { id: 'mh3-vrouwen', front: 'der vrouwen gruoz', back: 'the lady’s greeting: weak feminine gen. sg., not necessarily plural' },
    { id: 'mh3-gen-before', front: 'der werlte fröude ein spiegelglas', back: 'a mirror of the world’s joy: genitive before its noun' },
    { id: 'mh3-part', front: 'wunders vil', back: 'many wonders: partitive genitive after vil' },
    { id: 'mh3-verbgen', front: 'Verbs with a genitive object', back: 'vergëzzen, gedenken, pflëgen, gern, wænen, sich genieten' },
    { id: 'mh3-adjgen', front: 'rîch der êren', back: 'rich in honour: adjective + genitive' },
    { id: 'mh3-allerhand', front: 'aller hande', back: 'of all kinds: gen. pl. of hant (allerhand)' },
    { id: 'mh3-vorhanden', front: 'Where does vorhanden come from?', back: 'vor handen: the old dative plural of hant' },
    { id: 'mh3-swaben', front: 'ze Swâben', back: 'in Swabia: dative plural of the people’s name (among the Swabians)' },
    { id: 'mh3-erden', front: 'auf Erden', back: 'Fossil of the weak feminine dative singular (ërde, ërden)' },
    { id: 'mh3-her', front: 'her Heinrich; hern Heinriche', back: 'herre shortened before names; dat. hern Heinriche' },
    { id: 'mh3-A', front: 'Der arme Heinrich: manuscript A', back: 'Strasbourg; burnt (generally dated to 1870); Paul’s main manuscript' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'The dative singular of <span class="la">tac</span> is:', options: ['tage', 'tac', 'tages', 'tagen'], answer: 0, explain: 'tac, tages, tage, tac: dative in -e.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">diu wort</span> means:', options: ['the words', 'the word', 'of the word', 'to the words'], answer: 0, explain: 'Neuter plural without ending; diu marks the plural.' },
    { id: 'e3', type: 'mc', prompt: 'Which of these is a weak noun?', options: ['bote', 'tac', 'wort', 'gëbe'], answer: 0, explain: 'bote, boten: -en in every case but the nominative singular.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">der vrouwen</span>, on its own, is most likely:', options: ['genitive or dative singular: of / to the lady', 'only plural: of the ladies', 'nominative singular', 'accusative plural'], answer: 0, explain: 'Weak feminine: vrouwe, vrouwen, vrouwen, vrouwen. It can be plural too; the context decides.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">der werlte fröude</span> means:', options: ['the joy of the world', 'the world of joy', 'the joyful world', 'to the world, joy'], answer: 0, explain: 'Genitive before its noun: der werlte = of the world.' },
    { id: 'e6', type: 'mc', prompt: 'In <span class="la">an dem enwas vergezzen deheiner der tugende</span>, why is <span class="la">deheiner der tugende</span> in the genitive?', options: ['vergëzzen takes a genitive object', 'it follows the preposition an', 'it is the subject of the sentence', 'it is a dative of the person'], answer: 0, explain: 'vergëzzen + genitive: “none of the virtues had been forgotten in him”. It is also partitive.' },
    { id: 'e7', type: 'mc', prompt: 'Modern <em>allerhand</em> comes from:', options: ['aller hande, genitive plural of hant: of all kinds', 'a dative singular of hant', 'a Low German loanword', 'a weak noun handen'], answer: 0, explain: 'mit aller hande reiner tugent: with every kind of pure virtue.' },
    { id: 'e8', type: 'mc', prompt: '<span class="la">ze Swâben</span> means:', options: ['in Swabia (among the Swabians)', 'to a Swabian', 'from Swabia', 'the Swabian woman'], answer: 0, explain: 'Dative plural of Swâbe, the people; the region name Schwaben comes from it.' },
    { id: 'e9', type: 'mc', prompt: '<span class="la">rîch der êren</span> means:', options: ['rich in honour', 'the honour of the rich', 'rich honours', 'richer than honour'], answer: 0, explain: 'Adjective + genitive, as modern “einer Sache bewusst”.' },
    { id: 'e10', type: 'mc', prompt: 'Plural of <span class="la">gast</span>:', options: ['geste', 'gaste', 'gest', 'gasten'], answer: 0, explain: 'i-stem: umlaut in the plural.' },
    { id: 'e11', type: 'match', prompt: 'Match each phrase to its use of the case.', pairs: [
      ['der werlte fröude', 'genitive before the noun'], ['wunders vil', 'partitive genitive'], ['vergezzen … der tugende', 'genitive object of a verb'], ['im was … gegeben', 'dative of the person'], ['aller hande', 'genitive as an adverb']
    ] },
    { id: 'e12', type: 'match', prompt: 'Match the false friends to their meaning.', pairs: [
      ['milte', 'Freigebigkeit'], ['zuht', 'feines Benehmen'], ['muot', 'Gesinnung, Stimmung'], ['mære', 'Erzählung'], ['hübesch', 'höfisch']
    ] },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Der tac; des ___.</span>', hint: 'genitive singular', answers: ['tages'], full: 'des tages', explain: 'Final devoicing: tac, but tages.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Der gast; die ___.</span>', hint: 'nominative plural, with umlaut', answers: ['geste'], full: 'die geste', explain: 'gast, geste.' },
    { id: 'e15', type: 'gap', prompt: '<span class="la">Der bote; mit dem ___.</span>', hint: 'dative singular', answers: ['boten'], full: 'mit dem boten', explain: 'Weak masculine: -en.' },
    { id: 'e16', type: 'gap', prompt: '<span class="la">Diu zunge; der ___.</span>', hint: 'genitive singular', answers: ['zungen'], full: 'der zungen', explain: 'Weak feminine: -en in the singular too.' },
    { id: 'e17', type: 'gap', prompt: '<span class="la">Daz herze; des ___.</span>', hint: 'genitive singular', answers: ['herzen', 'hërzen'], full: 'des herzen', explain: 'Weak neuter: herze, herzen, herzen, herze.' },
    { id: 'e18', type: 'paradigm', prompt: 'Decline <span class="la">tac</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['tac', 'tage'] },
      { label: 'Gen.', answers: ['tages', 'tage'] },
      { label: 'Dat.', answers: ['tage', 'tagen'] },
      { label: 'Acc.', answers: ['tac', 'tage'] }
    ] },
    { id: 'e19', type: 'paradigm', prompt: 'Decline the strong feminine <span class="la">gëbe</span> and the weak masculine <span class="la">bote</span>.', headers: ['gëbe', 'bote'], rows: [
      { label: 'Nom. sg.', answers: ['gëbe', 'bote'] },
      { label: 'Gen. sg.', answers: ['gëbe', 'boten'] },
      { label: 'Dat. sg.', answers: ['gëbe', 'boten'] },
      { label: 'Acc. sg.', answers: ['gëbe', 'boten'] },
      { label: 'Nom. pl.', answers: ['gëbe', 'boten'] },
      { label: 'Gen. pl.', answers: ['gëben', 'boten'] },
      { label: 'Dat. pl.', answers: ['gëben', 'boten'] },
      { label: 'Acc. pl.', answers: ['gëbe', 'boten'] }
    ] },
    { id: 'e20', type: 'order', prompt: 'Put the German translation in order.', source: 'er was ein bluome der jugent, der werlte fröude ein spiegelglas', tokens: ['Er war', 'eine Blume', 'der Jugend,', 'ein Spiegel', 'der Weltfreude.'], explain: 'The genitive der werlte fröude belongs to spiegelglas.' },
    { id: 'e21', type: 'translate', dir: 'mhd-de', source: 'Er was der werlte fröude ein spiegelglas.', model: 'Er war ein Spiegel der Weltfreude.', accepted: ['Er war ein Spiegel der Weltfreude', 'Er war ein Spiegel der Freude der Welt', 'Er war ein Spiegelbild der Weltfreude', 'Er war ein Spiegelbild der Freude der Welt', 'Er war ein Spiegelglas der Weltfreude', 'Er war ein Spiegelglas der Freude der Welt'] },
    { id: 'e22', type: 'translate', dir: 'mhd-de', source: 'Der bote sprach mit dem herren.', model: 'Der Bote sprach mit dem Herrn.', accepted: ['Der Bote sprach mit dem Herrn', 'Der Bote sprach mit dem Herren', 'Der Bote redete mit dem Herrn', 'Der Bote redete mit dem Herren'] },
    { id: 'e23', type: 'translate', dir: 'mhd-en', source: 'Diu wort der vrouwen wâren guot.', model: 'The lady’s words were good.', accepted: ['The lady’s words were good', 'The words of the lady were good', 'The lady’s words were kind', 'The words of the lady were kind', 'The ladies’ words were good', 'The words of the ladies were good'] },
    { id: 'e24', type: 'translate', dir: 'de-mhd', source: 'Die Gäste kamen in das Land.', model: 'Die geste kâmen in daz lant.', accepted: ['Die geste kâmen in daz lant', 'Die geste kâmen in das lant', 'Die geste kâmen ze lande'], explain: 'Gast has the umlaut plural geste (Gäste); kâmen, the past plural of komen, has long â. Daz is the neuter article, and lant shows final devoicing.' },
    { id: 'e25', type: 'translate', dir: 'de-mhd', source: 'die Zunge des Boten', model: 'des boten zunge', accepted: ['des boten zunge', 'diu zunge des boten', 'die zunge des boten'], explain: 'Bote is a weak noun: genitive boten. A genitive before its noun was common in MHG, as in older German des Boten Zunge.' },
    { id: 'e26', type: 'mc', prompt: 'Heinrich was rich in birth and possessions, but richer still in:', options: ['honour and spirit', 'land and castles', 'learning', 'friends and allies'], answer: 0, explain: 'unnâch alsô rîch der gebürte und des guotes sô der êren und des muotes.' },
    { id: 'e27', type: 'mc', prompt: 'Manuscripts A and B rhyme <span class="la">tugent : jugent</span> in lines 33–34; Paul prints <span class="la">tugende : jugende</span>. What does this show?', options: ['Feminine i-stems have inflected and uninflected forms, and the editor chose', 'Paul misread the manuscripts', 'The manuscripts are in Low German', 'tugent is a weak noun'], answer: 0, explain: 'Both are possible Middle High German. Paul’s notes record the manuscript readings.' }
  ],

  reading: {
    title: 'Hartmann von Aue, Der arme Heinrich, lines 29–74',
    note: 'Authentic text: the portrait of Heinrich, transcribed from the page images of Hermann Paul’s edition, 6th edition (Altdeutsche Textbibliothek 3, Halle 1921), pp. 1–3. Line 47 begins a new paragraph in the edition. Tap any word.',
    text: 'Er las ditze mære,\nwie ein herre wære\nze Swâben gesezzen:\nan dem enwas vergezzen\ndeheiner der tugende\ndie ein ritter in sîner jugende\nze vollem lobe haben sol.\nman sprach dô niemen alsô wol\nin allen den landen.\ner hete ze sînen handen\ngeburt und dar zuo rîcheit:\nouch was sîn tugent vil breit.\nswie ganz sîn habe wære,\nsîn geburt unwandelbære\nund wol den fürsten gelîch,\ndoch was er unnâch alsô rîch\nder gebürte und des guotes\nsô der êren und des muotes.\n\nSîn name der was erkennelich,\nund hiez der herre Heinrich,\nund was von Ouwe geborn.\nsîn herze hete versworn\nvalsch und alle törperheit,\nund behielt ouch vaste den eit\nstæte unz an sîn ende.\nân alle missewende\nstuont sîn êre und sîn leben.\nim was der rehte wunsch gegeben\nze werltlîchen êren:\ndie kunde er wol gemêren\nmit aller hande reiner tugent.\ner was ein bluome der jugent,\nder werlte fröude ein spiegelglas,\nstæter triuwe ein adamas,\nein ganziu krône der zuht.\ner was der nôthaften fluht,\nein schilt sîner mâge,\nder milte ein glîchiu wâge:\nim enwart über noch gebrast.\ner truoc den arbeitsamen last\nder êren über rücke.\ner was des râtes brücke\nund sanc vil wol von minnen.\nalsus kund er gewinnen\nder werlte lop unde prîs.\ner was hübesch und dar zuo wîs.',
    translations: [
      { label: 'German translation', text: 'Er las diese Geschichte, wie ein Herr in Schwaben ansässig gewesen sei, an dem keine der Tugenden vergessen war, die ein Ritter in seiner Jugend zu vollem Ruhm besitzen soll. Man sprach damals in allen Landen von niemandem so gut. Er hatte zu seiner Verfügung edle Abkunft und dazu Reichtum; auch war seine Tüchtigkeit sehr groß. So vollkommen sein Besitz auch war, seine Abstammung makellos und den Fürsten ganz ebenbürtig, so war er doch bei Weitem nicht so reich an Herkunft und Gut wie an Ehre und edler Gesinnung.\n\nSein Name war weithin bekannt: Er hieß Herr Heinrich und war von Aue gebürtig. Sein Herz hatte Falschheit und aller Rohheit abgeschworen, und er hielt diesen Schwur auch fest und beständig bis an sein Ende. Ohne jeden Makel standen seine Ehre und sein Leben. Ihm war alles gegeben, was man sich an weltlichem Ansehen wünschen kann, und er verstand es wohl zu mehren mit jeder Art reiner Tugend. Er war eine Blume der Jugend, ein Spiegel der Weltfreude, ein Diamant beständiger Treue, eine vollkommene Krone feiner Bildung. Er war die Zuflucht der Bedrängten, ein Schild seiner Verwandten, eine genaue Waage der Freigebigkeit: Bei ihm gab es weder zu viel noch zu wenig. Er trug die mühevolle Last der Ehre auf dem Rücken. Er war eine Brücke guten Rates und sang sehr schön von der Liebe. So verstand er es, Lob und Ruhm der Welt zu gewinnen. Er war höfisch und dazu klug.' },
      { label: 'English translation', text: 'He read this story: how a lord had lived in Swabia in whom none of the virtues had been forgotten that a knight in his youth should have to win full praise. No one at that time was so well spoken of in all the lands. He had at his command noble birth and riches besides, and his excellence was great. However complete his possessions, his birth without blemish and quite equal to that of princes, he was not nearly as rich in birth and wealth as in honour and nobility of mind.\n\nHis name was widely known: he was called Lord Heinrich, and was born of Aue. His heart had forsworn falsehood and all boorishness, and he kept that oath firmly and steadfastly to his end. His honour and his life stood without blemish. He had been given everything one could wish for in worldly honour, and he knew well how to increase it with every kind of pure virtue. He was a flower of youth, a mirror of the world’s joy, a diamond of constant loyalty, a perfect crown of good breeding. He was the refuge of those in need, a shield to his kinsmen, a true balance of generosity: with him there was neither too much nor too little. He carried on his back the toilsome burden of honour. He was a bridge of good counsel, and sang very well of love. So he knew how to win the praise and renown of the world. He was courtly, and wise besides.' }
    ],
    notes: [
      { ref: 'Er las ditze mære, / wie ein herre wære / ze Swâben gesezzen', html: 'The narrator, Hartmann, reads the story in a book (prologue, line 17). <span class="la">mære</span> is a neuter noun here: “story”, not “fairy tale”. <span class="la">wære … gesezzen</span>, subjunctive in reported speech: “had been settled, had lived”. <span class="la">ze Swâben</span>: dative plural of the people’s name.' },
      { ref: 'an dem enwas vergezzen / deheiner der tugende', html: '“In whom none of the virtues had been forgotten.” <span class="la">vergëzzen</span> takes a genitive object; in the passive it stays genitive. <span class="la">en-</span> + <span class="la">deheiner</span> is a double negative that does not cancel out (Lecture VII). The manuscripts A and B read <span class="la">tugent : jugent</span>; Paul prints <span class="la">tugende : jugende</span> (grammar section 4).' },
      { ref: 'er hete ze sînen handen', html: '“He had at his command.” <span class="la">handen</span> is the old dative plural of <span class="la">hant</span>, as in <em>vorhanden, zu Händen</em>. Paul’s notes record <span class="la">hatte</span> in A and B where he prints <span class="la">hete</span>.' },
      { ref: 'und wol den fürsten gelîch', html: '<span class="la">gelîch</span> takes the dative: “quite equal to (that of) princes”. <span class="la">vürste</span> is a weak masculine.' },
      { ref: 'doch was er unnâch alsô rîch / der gebürte und des guotes / sô der êren und des muotes', html: '<span class="la">unnâch alsô … sô</span>: “not nearly as … as”. <span class="la">rîch</span> takes the genitive: rich in birth and wealth, but far richer in honour and spirit. Inner worth outweighs outward advantages, the theme the poem will test.' },
      { ref: 'Sîn name der was erkennelich', html: 'The pronoun <span class="la">der</span> takes up the subject again, as colloquial German still does: “Sein Name, der war bekannt.”' },
      { ref: 'und was von Ouwe geborn', html: 'Hartmann gives his hero the name of the place he called his own in line 5 of the prologue. <span class="la">geborn</span> without <span class="la">e</span> before the final <span class="la">n</span>: a common contraction after <span class="la">r</span>.' },
      { ref: 'valsch und alle törperheit', html: '<span class="la">valsch</span> is a noun: falseness. <span class="la">törperheit</span>, boorish behaviour, comes from <span class="la">törper, dörper</span>, “villager”: the opposite of courtliness, which is named after the court.' },
      { ref: 'im was der rehte wunsch gegeben / ze werltlîchen êren', html: 'Dative of the person: “to him had been given …”. <span class="la">wunsch</span> is the ideal, the perfection one could wish for, not a single wish.' },
      { ref: 'mit aller hande reiner tugent', html: '<span class="la">aller hande</span>: genitive plural of <span class="la">hant</span>, “of all kinds”, the origin of <em>allerhand</em>.' },
      { ref: 'der werlte fröude ein spiegelglas', html: 'Four images, each with a genitive: a flower of youth, a mirror of the world’s joy, a diamond of constant loyalty, a crown of good breeding. The genitive usually stands before its noun. Paul follows A and B in <span class="la">der werlte fröude</span>; Gierach printed the compound <span class="la">werltfröude</span>.' },
      { ref: 'stæter triuwe ein adamas', html: '<span class="la">adamas</span>, from Latin, is the diamond, the stone that cannot be broken: an image of constancy. Lexer notes that it can also mean the magnet.' },
      { ref: 'er was der nôthaften fluht', html: '<span class="la">der nôthaften</span>: genitive plural of the adjective used as a noun, “of those in need”. <span class="la">fluht</span> here is “refuge”, as in <em>Zuflucht</em>. Paul notes that A has <span class="la">nôthaften</span>, where Gierach prints <span class="la">nôtigen</span>.' },
      { ref: 'der milte ein glîchiu wâge: / im enwart über noch gebrast', html: '“A level balance of generosity: with him there was neither too much nor too little.” <span class="la">milte</span> is generosity, the lord’s duty to give; the balance is <span class="la">mâze</span>, measure. <span class="la">über</span> “in excess” and <span class="la">gebrësten</span> “be lacking” both take the dative <span class="la">im</span>.' },
      { ref: 'er was des râtes brücke', html: 'A bridge of counsel: probably one who helps others across their difficulties with good advice. The image is unusual, and translators render it in different ways.' },
      { ref: 'und sanc vil wol von minnen', html: 'Heinrich composes and sings love songs, as Hartmann himself did. <span class="la">von minnen</span>, “of love”: the form in <span class="la">-en</span> is usual in this phrase; grammars explain it differently.' },
      { ref: 'er was hübesch und dar zuo wîs', html: '<span class="la">hübesch</span>, “courtly”, from <span class="la">hof</span>; modern <em>hübsch</em> has narrowed to “pretty”. Paul notes that Gierach prints the form <span class="la">hövesch</span>.' }
    ],
    glosses: {
      'er': 'he', 'las': 'read (preterite of lësen)', 'ditze': 'this (neut. acc.: dieses)', 'mære': 'story, tale (neut.)', 'wie': 'how', 'ein': 'a, an', 'herre': 'lord (weak masc.: Herr)',
      'wære': 'were, had been (past subjunctive of sîn)', 'ze': 'at, in, to (zu); ze Swâben, in Swabia', 'swâben': 'the Swabians (dat. pl.): ze Swâben, in Swabia', 'gesezzen': 'settled, resident (participle of sitzen): wære gesezzen, had lived',
      'an': 'on, in, at', 'dem': 'whom, him (dat.: an dem, in whom)', 'enwas': 'en + was: was not (negative particle)', 'vergezzen': 'forgotten (participle of vergëzzen, + gen.)',
      'deheiner': 'none (gen.): with en-, “none of”', 'der': 'the; of the (gen./dat. fem., gen. pl.); also “he, it” (pronoun)', 'tugende': 'virtues (gen. pl. of tugent)',
      'die': 'which, that (relative); these (die kunde er …: these he could …)', 'ritter': 'knight', 'in': 'in', 'sîner': 'his (dat. fem.)', 'jugende': 'youth (dat. sg. of jugent)',
      'vollem': 'full (dat. sg. neut. of vol)', 'lobe': 'praise (dat. sg. of lop): ze vollem lobe, for full praise', 'haben': 'have', 'sol': 'should, ought to (sol, from suln)',
      'man': 'people, one (indefinite: man)', 'sprach': 'spoke (preterite of sprëchen)', 'dô': 'then, at that time', 'niemen': 'no one (dat.: of no one)', 'alsô': 'so', 'wol': 'well; quite',
      'allen': 'all (dat. pl.)', 'den': 'the (dat. pl.; acc. sg. masc.)', 'landen': 'lands (dat. pl. of lant)', 'hete': 'had (preterite of hân)', 'sînen': 'his (dat. pl.)', 'handen': 'hands (old dat. pl. of hant): ze sînen handen, at his command',
      'geburt': 'birth, descent, rank', 'und': 'and', 'dar': 'there: dar zuo, in addition', 'zuo': 'to: dar zuo, besides', 'rîcheit': 'wealth, riches', 'ouch': 'also, too (auch)', 'was': 'was',
      'sîn': 'his', 'tugent': 'virtue, excellence', 'vil': 'very; much', 'breit': 'broad; great, widely known', 'swie': 'however (wie auch)', 'ganz': 'whole, complete, perfect', 'habe': 'possessions (Habe)',
      'unwandelbære': 'without blemish, beyond reproach', 'fürsten': 'princes (dat. pl. of vürste, weak masc.)', 'gelîch': 'equal, like (+ dat.)', 'doch': 'yet, nevertheless', 'unnâch': 'not nearly: unnâch alsô … sô, not nearly as … as', 'rîch': 'rich (+ gen.: rich in)',
      'gebürte': 'birth, descent (gen. of gebürte, geburt)', 'des': 'of the (gen. sg. masc./neut.)', 'guotes': 'goods, wealth (gen. of guot)', 'sô': 'as (after alsô); so', 'êren': 'honour (gen./dat. of êre)', 'muotes': 'spirit, mind (gen. of muot)',
      'name': 'name (weak masc.)', 'erkennelich': 'widely known, recognised', 'hiez': 'was called (preterite of heizen)', 'heinrich': 'Heinrich', 'von': 'of, from', 'ouwe': 'Aue (place name)', 'geborn': 'born (participle of gebërn)',
      'herze': 'heart (weak neut.)', 'versworn': 'forsworn, renounced on oath (participle of verswërn)', 'valsch': 'falseness, deceit (noun)', 'alle': 'all', 'törperheit': 'boorishness, uncourtly behaviour (from törper, villager)',
      'behielt': 'kept (preterite of behalten)', 'vaste': 'firmly (fest)', 'eit': 'oath (Eid)', 'stæte': 'steadfastly, constantly', 'unz': 'until: unz an, up to', 'ende': 'end',
      'ân': 'without (âne, ohne)', 'missewende': 'blemish, disgrace', 'stuont': 'stood (preterite of stân)', 'êre': 'honour', 'leben': 'life',
      'im': 'to him (dat. of ër)', 'rehte': 'right, true, very', 'wunsch': 'the ideal, perfection (der rehte wunsch: all one could wish for)', 'gegeben': 'given (participle of gëben)', 'werltlîchen': 'worldly (dat. pl.)',
      'kunde': 'knew how to, could (preterite of kunnen)', 'gemêren': 'increase (mehren)', 'mit': 'with', 'aller': 'of all (gen. pl.): aller hande, of all kinds', 'hande': 'kinds (gen. pl. of hant): aller hande, allerhand', 'reiner': 'pure (dat. sg. fem.)',
      'bluome': 'flower (weak masc.)', 'jugent': 'youth', 'werlte': 'of the world (gen. of wërlt)', 'fröude': 'joy (Freude)', 'spiegelglas': 'mirror (Spiegel)',
      'stæter': 'constant, steadfast (gen. fem.)', 'triuwe': 'loyalty (Treue)', 'adamas': 'diamond (Latin adamas)', 'ganziu': 'whole, perfect (nom. fem.)', 'krône': 'crown', 'zuht': 'good breeding, courtly manners',
      'nôthaften': 'of the needy (gen. pl.: those in distress)', 'fluht': 'refuge (Zuflucht)', 'schilt': 'shield', 'mâge': 'kinsmen (gen. pl. of mâc)', 'milte': 'of generosity (gen. of milte: Freigebigkeit)',
      'glîchiu': 'level, even (nom. fem. of glîch)', 'wâge': 'balance, scales (Waage)', 'enwart': 'en + wart: there was not (wërden)', 'über': 'in excess; over; (über rücke) on the back', 'noch': 'nor', 'gebrast': 'was lacking (preterite of gebrësten)',
      'truoc': 'carried (preterite of tragen)', 'arbeitsamen': 'toilsome, burdensome (acc. masc.)', 'last': 'burden, load (masc.)', 'rücke': 'back (Rücken)',
      'râtes': 'of counsel (gen. of rât)', 'brücke': 'bridge', 'sanc': 'sang (preterite of singen)', 'minnen': 'love (minne): von minnen, of love', 'alsus': 'thus, so', 'kund': 'kunde: knew how to',
      'gewinnen': 'win, gain', 'lop': 'praise (Lob)', 'unde': 'and', 'prîs': 'renown, fame (French prix)', 'hübesch': 'courtly, refined (höfisch)', 'wîs': 'wise'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Where did Heinrich live?', options: ['In Swabia', 'In Bavaria', 'In Salerno', 'At the imperial court'], answer: 0, explain: 'wie ein herre wære ze Swâben gesezzen.' },
      { id: 'r2', type: 'mc', prompt: 'In what was Heinrich richest of all?', options: ['In honour and spirit', 'In birth', 'In wealth', 'In lands'], answer: 0, explain: 'unnâch alsô rîch der gebürte und des guotes sô der êren und des muotes.' },
      { id: 'r3', type: 'mc', prompt: 'What had Heinrich’s heart forsworn?', options: ['Falseness and boorishness', 'Love and song', 'Wealth and honour', 'His kinsmen'], answer: 0, explain: 'sîn herze hete versworn valsch und alle törperheit.' },
      { id: 'r4', type: 'mc', prompt: 'What does “der milte ein glîchiu wâge” say about him?', options: ['He gave with exact measure, neither too much nor too little', 'He was a merchant who weighed goods', 'He was mild and gentle', 'He judged disputes fairly'], answer: 0, explain: 'milte is generosity; the next line explains the balance: im enwart über noch gebrast.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Nominative plural of <span class="la">wort</span>:', options: ['wort', 'worte', 'wörter', 'worten'], answer: 0, explain: 'Strong neuters have no ending in the nominative and accusative plural.' },
      { id: 't2', type: 'mc', prompt: 'Dative plural of <span class="la">tac</span>:', options: ['tagen', 'tage', 'tages', 'tegen'], answer: 0, explain: 'tage, tage, tagen, tage.' },
      { id: 't3', type: 'mc', prompt: 'Nominative plural of <span class="la">gast</span>:', options: ['geste', 'gaste', 'gesten', 'gast'], answer: 0, explain: 'i-stem with umlaut.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Diu kraft; die kr___fte (pl.).</span>', hint: 'umlaut', answers: ['e'], full: 'die krefte', explain: 'kraft, krefte.' },
      { id: 't5', type: 'mc', prompt: '<span class="la">des herzen</span> is:', options: ['genitive singular of herze, a weak neuter', 'a plural only', 'a verb form', 'dative plural only'], answer: 0, explain: 'herze, herzen, herzen, herze.' },
      { id: 't6', type: 'mc', prompt: 'Which noun is <em>not</em> weak?', options: ['wort', 'bote', 'zunge', 'herze'], answer: 0, explain: 'wort is a strong neuter.' },
      { id: 't7', type: 'mc', prompt: '<span class="la">der nôthaften fluht</span> means:', options: ['the refuge of those in need', 'the flight of the needy', 'an urgent escape', 'escape from need'], answer: 0, explain: 'Genitive plural before the noun; fluht = Zuflucht.' },
      { id: 't8', type: 'mc', prompt: 'In Middle High German, <span class="la">vergëzzen</span> usually takes its object in the:', options: ['genitive', 'dative', 'nominative', 'instrumental'], answer: 0, explain: 'As in Vergissmeinnicht, where mein is the old genitive of ich.' },
      { id: 't9', type: 'translate', dir: 'mhd-de', source: 'der werlte lop', model: 'das Lob der Welt', accepted: ['das Lob der Welt', 'der Welt Lob', 'Lob der Welt', 'den Ruhm der Welt'] },
      { id: 't10', type: 'translate', dir: 'de-mhd', source: 'die Gabe der Dame', model: 'diu gëbe der vrouwen', accepted: ['diu gëbe der vrouwen', 'der vrouwen gëbe', 'die gëbe der vrouwen', 'diu gëbe der frouwen', 'der frouwen gëbe', 'die gëbe der frouwen'], explain: 'Vrouwe is a weak feminine, genitive der vrouwen; gëbe is strong. Vrouwe means a lady of rank, not just any woman.' },
      { id: 't11', type: 'mc', prompt: 'Who was Heinrich, as Hartmann introduces him?', options: ['A Swabian lord, born of Aue', 'A knight in Hartmann’s household', 'A Bavarian prince', 'A monk of Salerno'], answer: 0, explain: 'ze Swâben gesezzen … und was von Ouwe geborn.' },
      { id: 't12', type: 'mc', prompt: '<span class="la">milte</span> in courtly texts means:', options: ['generosity', 'mildness', 'the middle', 'gentle weather'], answer: 0, explain: 'A false friend: the lord’s virtue of giving.' }
    ]
  },

  reference: [
    { title: 'Strong masculines and neuters', headers: ['', 'tac (m.)', 'gast (m.)', 'wort (n.)'], rows: [
      ['Nom. sg.', 'tac', 'gast', 'wort'], ['Gen. sg.', 'tages', 'gastes', 'wortes'], ['Dat. sg.', 'tage', 'gaste', 'worte'], ['Acc. sg.', 'tac', 'gast', 'wort'],
      ['Nom. pl.', 'tage', 'geste', 'wort'], ['Gen. pl.', 'tage', 'geste', 'worte'], ['Dat. pl.', 'tagen', 'gesten', 'worten'], ['Acc. pl.', 'tage', 'geste', 'wort']
    ] },
    { title: 'Strong feminines', headers: ['', 'gëbe', 'kraft'], rows: [
      ['Nom. sg.', 'gëbe', 'kraft'], ['Gen. sg.', 'gëbe', 'krefte, kraft'], ['Dat. sg.', 'gëbe', 'krefte, kraft'], ['Acc. sg.', 'gëbe', 'kraft'],
      ['Nom. pl.', 'gëbe', 'krefte'], ['Gen. pl.', 'gëben', 'krefte'], ['Dat. pl.', 'gëben', 'kreften'], ['Acc. pl.', 'gëbe', 'krefte']
    ] },
    { title: 'Weak nouns', headers: ['', 'bote (m.)', 'zunge (f.)', 'herze (n.)'], rows: [
      ['Nom. sg.', 'bote', 'zunge', 'herze'], ['Gen. sg.', 'boten', 'zungen', 'herzen'], ['Dat. sg.', 'boten', 'zungen', 'herzen'], ['Acc. sg.', 'boten', 'zungen', 'herze'],
      ['Plural', 'boten', 'zungen', 'herzen']
    ] },
    { title: 'Uses of the genitive', headers: ['Use', 'Example', 'Meaning'], rows: [
      ['Before the noun', 'der werlte fröude', 'the joy of the world'], ['Partitive', 'wunders vil', 'many wonders'], ['Object of a verb', 'vergëzzen der tugende', 'forget the virtues'],
      ['With an adjective', 'rîch der êren', 'rich in honour'], ['Adverbial', 'aller hande; des morgens', 'of all kinds; in the morning']
    ] }
  ]
});
