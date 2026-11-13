/*
 * Middle High German — special lecture: Walther von der Vogelweide, Palästinalied (L 14,38).
 * Text: the seven stanzas shared by manuscripts A and C, transcribed from the page images of
 * Lachmann's 2nd edition (Berlin 1843), pp. 14–16.
 * Stanza 1 as sung: the transcription of the Münster fragment shown in the same article.
 * Pictures from Wikimedia Commons. See CONTENT-CHECKS.md.
 */
Viator.addLecture('mhd', {
  id: 'mhd-s1',
  number: 101,
  special: true,
  title: 'Palästinalied',
  subtitle: 'Walther von der Vogelweide’s song of the Holy Land: text, history, music and reception',
  minutes: 75,

  intro: `
    <p>This special lecture is devoted to a single song: Walther von der Vogelweide’s <em>Palästinalied</em>, “the Palestine song”, which begins, in Lachmann’s text, <span class="la">Allerêrst lebe ich mir werde</span> (in other editions <span class="la">Nû alrêst …</span>). It is one of the few Middle High German songs whose melody survives, and for that reason it is the most performed medieval German song today, from early-music ensembles to medieval-rock bands.</p>
    <p>It is also a demanding song. A pilgrim arrives in the Holy Land and walks, stanza by stanza, through the history of salvation as it took place there: the birth of Christ, his baptism, the Passion, the descent into hell, the Resurrection and the Last Judgement. The last stanza asks to whom the land belongs, and answers for the Christians. Stanza 6 repeats the medieval Christian charge against the Jews. A modern reader needs the historical context to understand the song, and needs to see it clearly rather than through either the Romantic cult of Walther or modern performance.</p>
    <p>The background is therefore longer than usual: the crusades between 1187 and 1229, the debate about when and why the song was written, how it travelled through the manuscripts and with what tune, and how it has been used since the 19th century. The grammar is limited to what you need for the text, plus a section on its form and music.</p>
    <p>You can do this lecture at any time after Lecture II. It is not part of the “Continue” sequence.</p>
  `,

  background: [
    {
      title: '1. Jerusalem and the crusades, 1187–1229',
      html: `
        <p>In 1187 Saladin defeated the army of the Kingdom of Jerusalem at Hattin and took the city. The Latin West answered with the Third Crusade (1189–92), in which the Emperor Frederick Barbarossa drowned in Asia Minor in 1190, before the German army reached the Holy Land. Jerusalem stayed in Muslim hands.</p>
        <p>Later expeditions followed: the German crusade planned by Henry VI (1197), the Fourth Crusade, which ended with the sack of Constantinople (1204), and the Fifth Crusade (1217–21), which attacked Egypt and failed at Damietta. Duke Leopold VI of Austria took part in its early phase and returned in 1219.</p>
        <p>The Emperor Frederick II, grandson of Barbarossa, took the cross in 1215 but delayed his departure for years and was excommunicated by Pope Gregory IX in 1227. He sailed in 1228 regardless. In February 1229, without a battle, he negotiated the Treaty of Jaffa with the Ayyubid sultan al-Kāmil: Jerusalem, Bethlehem and Nazareth were returned to the Christians, while the Temple Mount with its mosques remained under Muslim control. In March 1229 Frederick entered Jerusalem and wore his crown in the Church of the Holy Sepulchre. The city was lost again in 1244.</p>
        <p>A note on numbering: English usage usually calls Frederick’s expedition the Sixth Crusade; some German works count it as the fifth. When you read about the dating of the song, check which crusade is meant.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Friedrich_II._mit_Sultan_al-Kamil.jpg/960px-Friedrich_II._mit_Sultan_al-Kamil.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Friedrich_II._mit_Sultan_al-Kamil.jpg/500px-Friedrich_II._mit_Sultan_al-Kamil.jpg|https://upload.wikimedia.org/wikipedia/commons/4/49/Friedrich_II._mit_Sultan_al-Kamil.jpg" alt="Medieval miniature of two crowned rulers meeting, with attendants"><figcaption>Frederick II and the Sultan al-Kāmil, in a 14th-century manuscript of Giovanni Villani’s <em>Nuova Cronica</em> (Vatican Library). The meeting is imagined: the treaty was negotiated through envoys. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Friedrich_II._mit_Sultan_al-Kamil.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: '2. When and why was it written?',
      html: `
        <p>Nothing in the song names a year, a ruler or a campaign, and there is no record of Walther going to the Holy Land. The dating therefore rests on context and on what the song seems to presuppose.</p>
        <ul>
          <li><strong>The crusade of Frederick II (1228–29).</strong> This is the traditional dating, found in many literary histories. Other songs of Walther’s are generally connected with the preparations for this crusade, and Frederick’s peaceful recovery of Jerusalem would explain a song about arriving at the holy places rather than fighting for them. Walther probably died around 1230, so this would be among his last works.</li>
          <li><strong>The crusade of 1217–21.</strong> Others connect the song with the crusade in which Leopold VI of Austria took part; Walther is recorded in Vienna in this period. The English Wikipedia article adopts this dating.</li>
        </ul>
        <p>Whether Walther himself made the journey is unknown; most scholars doubt it. The <span class="la">ich</span> of the song is better understood as a role, the voice of a pilgrim, which singer and audience could take on. It does not need to be autobiography.</p>
        <p>Even the label “crusade song” (<em>Kreuzlied</em>) is debated. The song does not call anyone to take the cross. It describes a pilgrim’s arrival and a meditation on sacred history, and only the last stanza turns to the dispute over the land. Henry Hope (2019) has argued from the manuscripts that medieval scribes and readers did not group it with crusade songs, and that they may have heard it rather as a song of spiritual renewal, of the new <span class="la">werdekeit</span> (worth) announced in its first line.</p>
      `
    },
    {
      title: '3. How it was received in the Middle Ages',
      html: `
        <p>The song travelled fast and far, and it grew as it went. Each witness gives a different number and order of stanzas:</p>
        <ul>
          <li><strong>Carmina Burana</strong> (Codex Buranus, c. 1230): the first stanza, with neumes, attached to the Latin song <em>Alte clamat Epicurus</em>, which was to be sung to the same tune. If the usual dates are right, this is within Walther’s lifetime or just after, and in a Latin collection compiled far from Vienna.</li>
          <li><strong>A</strong> (the Small Heidelberg Song Manuscript, c. 1270s): seven stanzas, the oldest full text.</li>
          <li><strong>C</strong> (Codex Manesse, early 14th century): nine stanzas, the seven of A in the same order and two more (in this lecture’s numbering, 4 and 8).</li>
          <li><strong>Z</strong> (the Münster fragment, c. 1330): twelve stanzas and the melody. It was discovered in 1910, reused in the binding of an account book of 1522.</li>
        </ul>
        <p>Thirteen different stanzas are known in all. One of the stanzas in Z is clearly later than Walther, and scholars disagree about the others that are not in A. The pattern is typical of a popular song: singers added stanzas, especially more scenes of sacred history, and scribes copied what they had.</p>
        <p>The melody is unusual in being preserved at all. It is often said to be borrowed from a troubadour song, Jaufre Rudel’s <em>Lanquan li jorn son lonc en mai</em>, a song about a “distant love” that later legend connected with the crusades. This contrafactum hypothesis (Heinrich Husmann, 1953) is widely repeated but not proven; another proposal links the tune to the Marian antiphon <em>Ave regina caelorum</em>.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/CarminaBurana_wheel.jpg/960px-CarminaBurana_wheel.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/CarminaBurana_wheel.jpg/500px-CarminaBurana_wheel.jpg|https://upload.wikimedia.org/wikipedia/commons/4/43/CarminaBurana_wheel.jpg" alt="Medieval miniature of the Wheel of Fortune with four figures around a crowned woman"><figcaption>The Wheel of Fortune from the Codex Buranus (Munich, Bayerische Staatsbibliothek, Clm 4660), the manuscript of the <em>Carmina Burana</em>, compiled around 1230. The same collection contains the first stanza of the <em>Palästinalied</em>. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:CarminaBurana_wheel.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: '4. What the song says',
      html: `
        <p>The seven stanzas common to A and C follow a clear plan. Stanzas 1–2 are the arrival: the pilgrim sees the land and praises it above all lands. Stanzas 3–7 tell the history of salvation as a series of events that happened <em>here</em> (<span class="la">hie</span> is the key word): the virgin birth, the baptism, the Passion, the descent into hell, the Resurrection, and the Last Judgement, which medieval tradition placed in the valley of Jehoshaphat outside Jerusalem. The land is holy because these things took place in it.</p>
        <p>Two passages need to be read plainly. Stanza 6 presents the Resurrection as the beginning of the Jews’ sorrow (<span class="la">dô huob sich der juden leit</span>) and calls Christ the one “whom their hand struck and pierced”. This is the medieval Christian accusation of deicide, which was used to justify persecution. The crusade of 1096 had begun with massacres of the Jewish communities of the Rhineland, and later crusade preaching repeatedly led to violence against Jews.</p>
        <p>The last stanza names the three religions and their claims to the land as an inheritance (<span class="la">erbe</span>). It leaves the decision to God, “by his three names”, the Trinity, but then declares <span class="la">wir sîn an der rehten ger</span>, “ours is the rightful claim”. Modern readers have sometimes heard the stanza as an early voice of tolerance, because it names all three faiths and appeals to judgement rather than the sword. The text does not easily support that reading. It is, however, notable that it argues from right and judgement, not from conquest, which fits a land recovered by treaty.</p>
      `
    },
    {
      title: '5. How it is received today',
      html: `
        <p><strong>The 19th century.</strong> Lachmann’s edition (1827) made Walther the central figure of Middle High German studies, and the Romantic and national movements made him a German national poet. His political poems were read as patriotic, and the <em>Palästinalied</em> as the crusading song of a German knight. Much of that picture has since been taken apart by scholarship.</p>
        <p><strong>The melody and early music.</strong> Because the tune survives, the song became a natural choice when performers began to reconstruct medieval music. How the rhythm should be read is uncertain, since the notation of the Münster fragment does not fix it, so performances differ widely.</p>
        <p><strong>Folk and medieval rock.</strong> From the 1970s the song became a staple of German folk and then medieval-rock bands: Ougenweide (1974), Corvus Corax (1991), Qntal (1995), Estampie (1996), In Extremo (1998, and again in 2016), and many others abroad, from Radio Tarifa in Spain (1993) to the Mediaeval Baebes in Britain (2000). The American composer Lou Harrison used its melody in his <em>String Quartet Set</em>.</p>
        <p><strong>Appropriation.</strong> The crusading theme has also made the song attractive to bands of the extreme right, which have recorded it in that spirit. This is one reason why reading the whole text, including stanzas 6 and 9, and knowing their history, matters more for this song than for most medieval lyrics.</p>
        <p><strong>Scholarship.</strong> Current work stresses the song’s many versions, its role-voice and its religious meaning over the image of the crusading knight, and reads the final stanza within the theology and law of its time.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources: the song as sung</p>
    <p class="la big">Aller êrst leb ich mir werde,<br>sît mîn sündic ouge siht<br>(daz) hêre lant und ouch die erde,<br>dem man vil der êren giht.<br>Mirst geschehen des ich ie bat,<br>ich bin komen an die stat<br>dâ got menischlîchen trat.</p>
    <p>The first stanza as it stands under the melody in a modern transcription of the Münster fragment (shown in the English Wikipedia article on the song). The bracketed <span class="la">(daz)</span> is sung on the upbeat of the repeated melody. Compare the reading text, after Lachmann:</p>
    <ul>
      <li><span class="la">Aller êrst leb ich</span> for <span class="la">Allerêrst lebe ich</span>: the same words, with the <span class="la">e</span> of <span class="la">lebe</span> dropped to fit the notes.</li>
      <li><span class="la">dem man vil der êren giht</span> for <span class="la">der man vil der êren giht</span>: masculine/neuter <span class="la">dem</span> (the land) where Lachmann has feminine <span class="la">der</span> (the earth).</li>
      <li><span class="la">Mirst geschehen</span> (<span class="la">mir ist</span>) as in Lachmann. Other editions print <span class="la">Nû alrêst lebe ich</span>, <span class="la">der man sô vil êren giht</span> and <span class="la">ez ist geschehen</span>.</li>
    </ul>
    <p>Such differences are normal. Each manuscript records the song as it was sung and copied in its own time and place; Lachmann chose between them to make one text.</p>
    <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Palestinalied.jpg/960px-Palestinalied.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Palestinalied.jpg/500px-Palestinalied.jpg|https://upload.wikimedia.org/wikipedia/commons/4/4d/Palestinalied.jpg" alt="Modern music notation with the words of the first stanza beneath the notes"><figcaption>The melody of the first stanza in a modern transcription of the Münster fragment. The repeat sign after the second line shows the Kanzone form: lines 3–4 are sung to the same music as lines 1–2. <span class="credit">Public domain (see file page) · <a href="https://commons.wikimedia.org/wiki/File:Palestinalied.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
  `,

  pronunciation: `
    <p>The melody gives this song an advantage over most Middle High German poems: we can see how the words were fitted to the notes.</p>
    <ul>
      <li><strong>Syllables count.</strong> Each line has a fixed number of beats. Where the text has an extra unstressed <span class="la">e</span>, singers elided it, which is why the transcription has <span class="la">leb ich</span> for <span class="la">lebe ich</span>.</li>
      <li><strong>mennischlîchen</strong> (Lachmann’s spelling; the Münster transcription has <span class="la">menischlîchen</span>) has four syllables, <span class="la">men-nisch-lî-chen</span>; the vowel between <span class="la">n</span> and <span class="la">sch</span> is a weak <span class="la">e</span> or <span class="la">i</span> that the melody gives its own note.</li>
      <li><strong>Long vowels on long notes.</strong> <span class="la">êren</span>, <span class="la">lant</span>, <span class="la">stat</span>: the melody tends to put stressed syllables on the beat, but it does not settle the length of vowels, which come from the rhymes and the dictionary.</li>
      <li><strong>Abrahâme</strong> keeps the Latin stress pattern of the name but adds the German dative <span class="la">-e</span>.</li>
    </ul>
    <p>The rhythm of the melody is not written in the fragment, so modern performances choose between even notes, a triple-time reading and freer, speech-like rhythms. None of them is certainly right.</p>
  `,

  grammar: [
    {
      title: '1. Form: the Kanzone',
      html: `
        <p>Every stanza has seven lines rhymed <span class="la">ababccc</span>. This is the <em>Kanzone</em> or bar form, the standard stanza of Minnesang, taken over from the troubadours:</p>
        <ul>
          <li><strong>Aufgesang</strong>: two <em>Stollen</em> of two lines each (<span class="la">ab ab</span>), sung to the same music. In the transcription, the repeat sign after line 2 shows this: lines 3–4 are sung to the music of lines 1–2.</li>
          <li><strong>Abgesang</strong>: the last three lines (<span class="la">ccc</span>), with new music.</li>
        </ul>
        <p>The lines alternate between feminine endings (two syllables, <span class="la">wérde : érde</span>) and masculine endings (one syllable, <span class="la">siht : giht</span>), and the three-line <span class="la">ccc</span> close gives each stanza a strong cadence, often a pointed final line: <span class="la">dâ got mennischlîchen trat</span>; <span class="la">was daz niht ein wunder gar?</span>; <span class="la">reht ist daz er uns gewer</span>.</p>
        <p>German hymn writers and the Meistersinger kept the bar form; it is the shape of many Lutheran chorales.</p>
      `
    },
    {
      title: '2. Contractions in the text',
      html: `
        <ul>
          <li><span class="la">duz</span> = <span class="la">du ez</span>: “you (are) it”</li>
          <li><span class="la">deist</span> = <span class="la">daz ist</span>; <span class="la">zer</span> = <span class="la">ze der</span>; <span class="la">übr</span> = <span class="la">über</span>, shortened for the metre</li>
          <li><span class="la">êst</span> = <span class="la">ez ist</span></li>
          <li><span class="la">da’r</span> = <span class="la">dâ er</span>: “where he”</li>
          <li><span class="la">mirst</span> = <span class="la">mir ist</span>: “to me is (has come)”</li>
        </ul>
        <p>As in Lecture II, look for a pronoun hidden at the end of a word or an <span class="la">ist</span> reduced to <span class="la">-st</span>.</p>
      `
    },
    {
      title: '3. Subjunctives of purpose and wish',
      html: `
        <p>The song uses the subjunctive to express purposes, wishes and claims, as Lecture I introduced:</p>
        <ul>
          <li><span class="la">daz der mensche reine sî</span>: “so that man might be pure” (purpose)</li>
          <li><span class="la">anders wæren wir verlorn</span>: “otherwise we would be lost” (unreal condition, past subjunctive of <span class="la">sîn</span>)</li>
          <li><span class="la">daz diz ir erbe sî</span>: “that this is (they claim) their inheritance” (reported claim)</li>
          <li><span class="la">got müez ez ze rehte scheiden</span>: “may God decide it justly” (wish; <span class="la">müeze</span>, subjunctive of <span class="la">müezen</span>)</li>
          <li><span class="la">reht ist daz er uns gewer</span>: “it is right that he grant us (our claim)” (<span class="la">gewer</span>, subjunctive of <span class="la">gewërn</span>)</li>
        </ul>
        <p>In modern German most of these would become Konjunktiv I (<em>sei, möge</em>) or Konjunktiv II (<em>wären</em>), or be rephrased with <em>damit</em> and <em>möge</em>.</p>
      `
    },
    {
      title: '4. Strong verbs from Lecture II',
      html: `
        <p>The song is a good revision text for the ablaut series:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Form</th><th>Verb</th><th>Series</th></tr></thead>
          <tbody>
            <tr><td class="la">gebar</td><td class="la">gebërn, gebar, gebâren, geborn</td><td>IV</td></tr>
            <tr><td class="la">liez</td><td class="la">lâzen, liez</td><td>VII</td></tr>
            <tr><td class="la">wurden</td><td class="la">wërden, wart, wurden, worden</td><td>III</td></tr>
            <tr><td class="la">verlorn</td><td class="la">verliesen, verlôs, verlurn, verlorn</td><td>II (grammatical change s/r)</td></tr>
            <tr><td class="la">fuor</td><td class="la">varn, fuor (vuor)</td><td>VI</td></tr>
            <tr><td class="la">lac</td><td class="la">ligen, lac</td><td>V</td></tr>
            <tr><td class="la">erschein</td><td class="la">erschînen, erschein</td><td>I</td></tr>
            <tr><td class="la">huob</td><td class="la">heben, huop, huoben</td><td>VI</td></tr>
            <tr><td class="la">brach</td><td class="la">brëchen, brach</td><td>IV</td></tr>
            <tr><td class="la">sach</td><td class="la">sëhen, sach, sâhen</td><td>V</td></tr>
            <tr><td class="la">sluoc</td><td class="la">slahen, sluoc, sluogen</td><td>VI</td></tr>
            <tr><td class="la">stach</td><td class="la">stëchen, stach</td><td>IV</td></tr>
            <tr><td class="la">trat</td><td class="la">trëten, trat</td><td>V</td></tr>
          </tbody>
        </table></div>
        <p><span class="la">huob</span> shows the written <span class="la">b</span> of the plural stem <span class="la">huoben</span> in the singular, beside the usual <span class="la">huop</span>; <span class="la">sluoc</span>, by contrast, has the final <span class="la">c</span> of final devoicing, with <span class="la">g</span> in the plural <span class="la">sluogen</span>.</p>
      `
    },
    {
      title: '5. Words of law and status',
      html: `
        <p>The song speaks of salvation in legal language, which the audience knew from everyday life:</p>
        <ul>
          <li><span class="la">eigen</span>: “owned, unfree”, as a noun “bondsmen, serfs”. <span class="la">daz wir eigen wurden frî</span>: Christ was “sold” so that the unfree might be freed. Compare modern <em>leibeigen</em>.</li>
          <li><span class="la">erbe</span>: inheritance, patrimony; the land as a legal title.</li>
          <li><span class="la">ger</span>: desire, claim. <span class="la">an der rehten ger sîn</span>: to have the rightful claim.</li>
          <li><span class="la">gewërn</span>: grant, award (a claim). <span class="la">vergëlten</span>: repay, make amends.</li>
          <li><span class="la">weise</span>: orphan (<em>Waise</em>), not “wise”; the widow and orphan were the classic figures of the defenceless in law.</li>
          <li><span class="la">gewalt</span>: force, violence, wrong done.</li>
        </ul>
      `
    }
  ],

  vocab: [
    { id: 'werde', head: 'wërde', la: 'wërde', pos: 'adjective', en: 'worthy, honoured, noble', de: 'wert, würdig, angesehen', note: 'mir wërde leben: to live a life of worth for oneself. Noun: wërdekeit.' },
    { id: 'sundic', head: 'sündic', la: 'sündic', pos: 'adjective', en: 'sinful', de: 'sündig' },
    { id: 'ouge', head: 'ouge', la: 'ouge', g: 'n', pos: 'noun', en: 'eye', de: 'Auge', note: 'ou → au.' },
    { id: 'lant', head: 'lant', la: 'lant, landes', g: 'n', pos: 'noun', en: 'land, country', de: 'Land' },
    { id: 'erde', head: 'ërde', la: 'ërde', g: 'f', pos: 'noun', en: 'earth, ground', de: 'Erde' },
    { id: 'stat', head: 'stat', la: 'stat', g: 'f', pos: 'noun', en: 'place, spot', de: 'Stätte, Ort', note: 'False friend: “place”, not only “town” (that sense is also found).' },
    { id: 'menischlich', head: 'menschlîch', la: 'menschlîch, mennischlîch', pos: 'adjective', en: 'human', de: 'menschlich', note: 'mennischlîchen (adv.): in human form.' },
    { id: 'treten', head: 'trëten', la: 'trëten, trat, trâten, getrëten', pos: 'verb, strong V', en: 'tread, step, walk', de: 'treten, gehen' },
    { id: 'magt', head: 'maget', la: 'maget, magt', g: 'f', pos: 'noun', en: 'virgin, maiden', de: 'Jungfrau, Mädchen', note: 'False friend: not Magd (maidservant). diu reine maget: the Virgin Mary.' },
    { id: 'engel', head: 'engel', la: 'engel', g: 'm', pos: 'noun', en: 'angel', de: 'Engel' },
    { id: 'schar', head: 'schar', la: 'schar', g: 'f', pos: 'noun', en: 'host, troop, crowd', de: 'Schar' },
    { id: 'wunder', head: 'wunder', la: 'wunder', g: 'n', pos: 'noun', en: 'miracle, wonder; a great many', de: 'Wunder; eine große Menge' },
    { id: 'toufen', head: 'toufen', la: 'toufen', pos: 'verb, weak', en: 'baptise', de: 'taufen' },
    { id: 'eigen', head: 'eigen', la: 'eigen', pos: 'adjective; noun', en: 'own; unfree, in bondage; bondsmen', de: 'eigen; leibeigen, unfrei; Leibeigene' },
    { id: 'kriuz', head: 'kriuze', la: 'kriuze, kriuz', g: 'n', pos: 'noun', en: 'cross', de: 'Kreuz', note: 'iu → eu.' },
    { id: 'helle', head: 'helle', la: 'helle', g: 'f', pos: 'noun', en: 'hell', de: 'Hölle' },
    { id: 'grap', head: 'grap', la: 'grap, grabes', g: 'n', pos: 'noun', en: 'grave, tomb', de: 'Grab' },
    { id: 'geist', head: 'geist', la: 'geist', g: 'm', pos: 'noun', en: 'spirit; the Holy Spirit', de: 'Geist' },
    { id: 'tievel', head: 'tiuvel', la: 'tiuvel, tievel', g: 'm', pos: 'noun', en: 'devil', de: 'Teufel' },
    { id: 'heiden', head: 'heiden', la: 'heiden', g: 'm', pos: 'noun', en: 'heathen; Muslim (in crusade texts)', de: 'Heide; (in Kreuzzugstexten) Muslim' },
    { id: 'weise', head: 'weise', la: 'weise', g: 'm', pos: 'noun', en: 'orphan', de: 'Waise', note: 'False friend: not “wise” (wîs).' },
    { id: 'witwe', head: 'witewe', la: 'witewe, witwe', g: 'f', pos: 'noun', en: 'widow', de: 'Witwe' },
    { id: 'gewalt', head: 'gewalt', la: 'gewalt', g: 'm', pos: 'noun', en: 'power; force, violence, wrong', de: 'Macht; Gewalt, Unrecht', note: 'Often masculine in MHG.' },
    { id: 'erbe', head: 'erbe', la: 'erbe', g: 'n', pos: 'noun', en: 'inheritance, patrimony', de: 'Erbe' },
    { id: 'ger', head: 'ger', la: 'ger, gir', g: 'f', pos: 'noun', en: 'desire; claim', de: 'Begehren, Verlangen; Anspruch', note: 'Related to begehren and Gier.' },
    { id: 'gewern', head: 'gewërn', la: 'gewërn', pos: 'verb, weak', en: 'grant, award', de: 'gewähren' },
    { id: 'striten', head: 'strîten', la: 'strîten, streit, striten, gestriten', pos: 'verb, strong I', en: 'fight, contend', de: 'kämpfen, streiten' }
  ],

  grammarCards: [
    { id: 'pl-date', front: 'Two datings proposed for the Palästinalied', back: 'The crusade of Frederick II (1228–29), or the crusade of 1217–21; neither is proven.' },
    { id: 'pl-jaffa', front: 'Treaty of Jaffa, 1229', back: 'Frederick II and al-Kāmil: Jerusalem returned to the Christians without a battle; the Temple Mount stayed under Muslim control.' },
    { id: 'pl-mss', front: 'Stanzas in A, C and Z', back: 'A (c. 1270s): 7; C (Codex Manesse): 9; Z (Münster fragment, c. 1330): 12 with melody; 13 different stanzas in all.' },
    { id: 'pl-cb', front: 'Carmina Burana and the Palästinalied', back: 'Stanza 1 with neumes, attached to the Latin Alte clamat Epicurus (CB 211a), c. 1230.' },
    { id: 'pl-mel', front: 'Proposed models for the melody', back: 'Jaufre Rudel, Lanquan li jorn (contrafactum; Husmann 1953); also the antiphon Ave regina caelorum.' },
    { id: 'pl-z', front: 'The Münster fragment', back: 'c. 1330; found in 1910 in the binding of a 1522 account book; the oldest source of the melody.' },
    { id: 'pl-kanzone', front: 'Stanza form of the Palästinalied', back: 'Kanzone: two Stollen (ab ab) + Abgesang (ccc).' },
    { id: 'pl-hie', front: 'The key word of stanzas 3–7', back: 'hie, “here”: each event of salvation history happened in this land.' },
    { id: 'pl-weise', front: 'weise means …', back: 'orphan (Waise), not “wise”' },
    { id: 'pl-eigen', front: 'daz wir eigen wurden frî', back: 'so that we, the unfree, might become free' },
    { id: 'pl-ger', front: 'wir sîn an der rehten ger', back: 'ours is the rightful claim' },
    { id: 'pl-dez', front: 'duz; êst; da’r', back: 'du ez; ez ist; dâ er' },
    { id: 'pl-abraham', front: 'als er Abrahâme erschein', back: 'as he appeared to Abraham: the three men at Mamre (Genesis 18), read as the Trinity' },
    { id: 'pl-crusnum', front: 'Frederick II’s crusade: which number?', back: 'Usually the Sixth in English, sometimes counted as the fifth in German works.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'The Palästinalied is unusual among Walther’s songs because:', options: ['its melody survives', 'it is in Latin', 'it was written by Frederick II', 'it survives only in the Codex Manesse'], answer: 0, explain: 'The Münster fragment preserves the melody.' },
    { id: 'e2', type: 'mc', prompt: 'In 1229 Frederick II gained Jerusalem by:', options: ['a treaty with al-Kāmil', 'storming the city', 'buying it from Venice', 'a papal grant'], answer: 0, explain: 'The Treaty of Jaffa, without a battle.' },
    { id: 'e3', type: 'mc', prompt: 'Which statement about the dating is accurate?', options: ['It is debated: 1228–29 and 1217–21 are both proposed', 'The song is dated 1229 in the Codex Manesse', 'Walther’s pilgrimage is documented in 1228', 'It was written after Walther’s death'], answer: 0, explain: 'Nothing in the song or in the records fixes the date.' },
    { id: 'e4', type: 'mc', prompt: 'The oldest manuscript with a full text (seven stanzas) is:', options: ['A, the Small Heidelberg Song Manuscript', 'C, the Codex Manesse', 'Z, the Münster fragment', 'the Carmina Burana'], answer: 0, explain: 'A, from about the 1270s. The Carmina Burana is older but has only stanza 1.' },
    { id: 'e5', type: 'mc', prompt: 'In <span class="la">der weise klagen mac</span>, <span class="la">weise</span> means:', options: ['orphan', 'wise man', 'manner', 'melody'], answer: 0, explain: 'MHG weise = Waise.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">daz wir eigen wurden frî</span> means:', options: ['so that we, the unfree, might become free', 'so that our own became free', 'that we ourselves were free', 'that we owned freedom'], answer: 0, explain: 'eigen: unfree, in bondage.' },
    { id: 'e7', type: 'mc', prompt: 'The stanza form <span class="la">ababccc</span>, with a repeated melody for the first two pairs, is called:', options: ['Kanzone (bar form)', 'sonnet', 'Nibelungen stanza', 'ballad'], answer: 0, explain: 'Two Stollen and an Abgesang.' },
    { id: 'e8', type: 'mc', prompt: 'The last stanza:', options: ['names the claims of three faiths and asserts the Christian claim', 'calls for equal rights for all three faiths', 'calls the knights to arms', 'is missing in manuscript A'], answer: 0, explain: 'wir sîn an der rehten ger.' },
    { id: 'e9', type: 'match', prompt: 'Match the contracted forms.', pairs: [
      ['duz', 'du ez'], ['êst', 'ez ist'], ['da’r', 'dâ er'], ['mirst', 'mir ist']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the events to the stanzas.', pairs: [
      ['virgin birth', 'stanza 2'], ['baptism and Passion', 'stanza 3'], ['descent into hell', 'stanza 5'], ['Last Judgement', 'stanza 7'], ['the claim to the land', 'stanza 9']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">ich bin kom___ an die stat</span>', hint: 'come (participle)', answers: ['en'], full: 'ich bin komen an die stat', explain: 'komen, without ge-.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">daz ein magt ein kint ge___</span>', hint: 'bore (gebërn, series IV)', answers: ['bar'], full: 'daz ein magt ein kint gebar', explain: 'gebërn, gebar, gebâren, geborn.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">von dem grabe da’r inne l___</span>', hint: 'lay (ligen)', answers: ['ac'], full: 'von dem grabe da’r inne lac', explain: 'ligen, lac, lâgen.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">daz der mensche reine ___</span>', hint: 'might be (subjunctive)', answers: ['sî', 'si'], full: 'daz der mensche reine sî', explain: 'Present subjunctive of sîn in a purpose clause.' },
    { id: 'e15', type: 'order', prompt: 'Put the German translation in order.', source: 'ich bin komen an die stat dâ got mennischlîchen trat.', tokens: ['Ich bin', 'an den Ort gekommen,', 'wo Gott', 'in Menschengestalt', 'ging.'], explain: 'stat: place; mennischlîchen: in human form; trat: trod, walked.' },
    { id: 'e16', type: 'translate', dir: 'mhd-de', source: 'Mîn sündic ouge siht daz lant.', model: 'Mein sündiges Auge sieht das Land.', accepted: ['mein sündiges auge sieht land', 'mein sündiges auge sieht das land'] },
    { id: 'e17', type: 'translate', dir: 'mhd-en', source: 'Hie liez er sich toufen.', model: 'Here he let himself be baptised.', accepted: ['here he let himself be baptised', 'here he let himself be baptized', 'here he was baptised', 'here he was baptized', 'he let himself be baptised here', 'he let himself be baptized here', 'he was baptised here', 'he was baptized here'] },
    { id: 'e18', type: 'translate', dir: 'de-mhd', source: 'Das ist ein großes Wunder.', model: 'Daz ist ein grôzez wunder.', accepted: ['daz ist ein grôzez wunder', 'daz ist ein grôz wunder', 'dâst ein grôzez wunder', 'êst ein grôzez wunder'], explain: 'After ein a neuter adjective can take the strong ending -ez: grôzez. The z here is the sibilant that became modern ß or s (großes).' },
    { id: 'e19', type: 'mc', prompt: 'Stanza 6 (<span class="la">dô huob sich der juden leit … den ir hant sluoc unde stach</span>) expresses:', options: ['the medieval Christian accusation of deicide against the Jews', 'sympathy with the Jews', 'a historical report of a battle', 'a legal judgement on the guards'], answer: 0, explain: 'The charge was used to justify persecution; the crusades began with massacres of Jews in the Rhineland in 1096.' },
    { id: 'e20', type: 'mc', prompt: 'Why is the Last Judgement placed “in this land” (stanza 7)?', options: ['Medieval tradition placed it in the valley of Jehoshaphat by Jerusalem', 'Walther invented the idea', 'Because Frederick II held court there', 'Because of a misreading of the manuscript'], answer: 0, explain: 'The tradition goes back to Joel 3, read as a prophecy of judgement in that valley.' }
  ],

  reading: {
    title: 'Walther von der Vogelweide, Palästinalied (L 14,38)',
    note: 'Authentic text: the seven stanzas found in both manuscript A and the Codex Manesse (C), transcribed from the page images of Lachmann’s 2nd edition (Berlin 1843), pp. 14–16 (L 14,38–15,19; 15,27–40; 16,8–14; 16,29–35), numbered here 1–7. Lachmann prints thirteen stanzas; the other six are in C or Z only. Other editions differ in places: the version in the English Wikipedia article, used here before, begins Nû alrêst lebe ich mir werde. Tap any word.',
    text: 'Allerêrst lebe ich mir werde,\nsît mîn sündic ouge siht\ndaz hêre lant und ouch die erde\nder man vil der êren giht.\nmirst geschehen des ich ie bat,\nich bin komen an die stat\ndâ got mennischlîchen trat.\n\nSchœniu lant rîch unde hêre,\nswaz ich der noch hân gesehen,\nsô bist duz ir aller êre.\nwaz ist wunders hie geschehen!\ndaz ein magt ein kint gebar\nhêre übr aller engel schar,\nwas daz niht ein wunder gar?\n\nHie liez er sich reine toufen,\ndaz der mensche reine sî.\ndô liez er sich hie verkoufen,\ndaz wir eigen wurden frî.\nanders wæren wir verlorn.\nwol dir, sper kriuz unde dorn!\nwê dir, heiden! deist dir zorn.\n\nHinnen fuor der sun zer helle\nvon dem grabe, da’r inne lac.\ndes was ie der vater geselle,\nund der geist, den niemen mac\nsunder scheiden: êst al ein,\nsleht und ebener danne ein zein,\nals er Abrahâme erschein.\n\nDo er den tievel dô geschande,\ndaz nie keiser baz gestreit,\ndô fuor er her wider ze lande.\ndô huob sich der juden leit,\ndaz er hêrre ir huote brach,\nund daz man in sît lebendic sach,\nden ir hant sluoc unde stach.\n\nIn diz lant hât er gesprochen\neinen angeslîchen tac,\ndâ diu witwe wirt gerochen\nund der weise klagen mac\nund der arme den gewalt\nder dâ wirt mit ime gestalt.\nwol im dort, der hie vergalt!\n\nKristen juden und die heiden\njehent daz diz ir erbe sî:\ngot müez ez ze rehte scheiden\ndurch die sîne namen drî.\nal diu welt diu strîtet her:\nwir sîn an der rehten ger:\nreht ist daz er uns gewer.',
    translations: [
      { label: 'German translation', text: 'Erst jetzt lebe ich für mich in Würde, seit mein sündiges Auge das heilige Land sieht und auch die Erde, der man so viel Ehre zuspricht. Mir ist geschehen, worum ich immer gebetet habe: Ich bin an den Ort gekommen, wo Gott in Menschengestalt ging.\n\nSchöne Länder, reich und herrlich, so viele ich davon sonst gesehen habe: du bist die Ehre von ihnen allen. Welche Wunder sind hier geschehen! Dass eine Jungfrau ein Kind gebar, Herr über die ganze Schar der Engel – war das nicht ein vollkommenes Wunder?\n\nHier ließ er, der Reine, sich taufen, damit der Mensch rein werde. Dann ließ er sich hier verkaufen, damit wir Unfreien frei würden. Sonst wären wir verloren. Heil dir, Speer, Kreuz und Dorn! Weh dir, Heide, das ist dir ein Ärgernis!\n\nVon hier fuhr der Sohn zur Hölle, aus dem Grab, in dem er lag. Dabei war der Vater immer sein Gefährte und der Geist, die niemand voneinander trennen kann: Es ist alles eins, gerader und glatter als ein Pfeilschaft, so wie er Abraham erschien.\n\nAls er dort den Teufel so zuschanden gemacht hatte, wie nie ein Kaiser besser gekämpft hat, da kehrte er hierher ins Land zurück. Da begann das Leid der Juden: dass er, der Herr, ihre Bewachung durchbrach und dass man ihn danach lebendig sah, den ihre Hand geschlagen und durchbohrt hatte.\n\nFür dieses Land hat er einen schrecklichen Tag angekündigt, an dem die Witwe gerächt wird und die Waise klagen kann und der Arme über die Gewalt, die ihm angetan wird. Wohl dem dort, der hier gesühnt hat!\n\nChristen, Juden und die Heiden sagen, dies sei ihr Erbe. Gott möge es gerecht entscheiden, bei seinen drei Namen. Die ganze Welt streitet hierher: Wir haben den rechtmäßigen Anspruch. Recht ist es, dass er ihn uns gewähre.' },
      { label: 'English translation', text: 'Only now do I live a life of worth, since my sinful eye beholds the holy land and also the earth to which so much honour is given. What I always prayed for has happened to me: I have come to the place where God walked in human form.\n\nFair lands, rich and noble, as many as I have seen elsewhere, you are the honour of them all. What wonders have happened here! That a virgin bore a child, lord over the whole host of angels – was that not a perfect wonder?\n\nHere he, the pure one, let himself be baptised, so that mankind might be pure. Then he let himself be sold here, so that we bondsmen might become free. Otherwise we would be lost. Hail to you, spear, cross and thorn! Woe to you, heathen; that is your grief!\n\nFrom here the Son went down to hell, from the grave in which he lay. The Father was ever his companion in this, and the Spirit, whom none can part: it is all one, straighter and smoother than an arrow-shaft, as he appeared to Abraham.\n\nWhen he had shamed the devil there – no emperor ever fought better – he came back here to this land. Then the sorrow of the Jews began: that he, the Lord, broke out of their guard, and that he was seen alive afterwards, whom their hand had struck and pierced.\n\nFor this land he has proclaimed a terrible day, when the widow will be avenged, and the orphan may make his complaint, and the poor man complain of the wrong done to him. Well for him there who made amends here!\n\nChristians, Jews and the heathens say that this is their inheritance. May God decide it justly, by his three names. The whole world contends for this place: ours is the rightful claim. It is right that he should grant it to us.' }
    ],
    notes: [
      { ref: 'Allerêrst lebe ich mir werde', html: '“Only now, for the first time, I live worthily for myself.” <span class="la">allerêrst</span> is <em>allererst</em>; other editions have <span class="la">nû alrêst</span>, with the same sense. <span class="la">mir</span> is a dative of interest; <span class="la">werde</span> (<span class="la">wërde</span>) is adverbial: “in worth, in honour”. The idea of a new, true worth through the pilgrimage frames the whole song.' },
      { ref: 'daz hêre lant und ouch die erde / der man vil der êren giht', html: '<span class="la">hêre</span>: holy, exalted (<em>hehr</em>). <span class="la">der</span> is a feminine relative in the dative, referring to <span class="la">erde</span>: “to which one ascribes so much of honour”; <span class="la">vil der êren</span> is “much of the honour”, with a partitive genitive. <span class="la">jëhen</span> + dative: ascribe something to someone.' },
      { ref: 'dâ got mennischlîchen trat', html: 'The climax of the first stanza: the place where God walked as a man. <span class="la">trat</span> from <span class="la">trëten</span>, series V.' },
      { ref: 'swaz ich der noch hân gesehen, / sô bist duz ir aller êre', html: '“However many of them I have seen besides, you are the honour of them all.” <span class="la">der</span> is a genitive plural (“of them”, the lands), <span class="la">duz</span> = <span class="la">du ez</span>. The address switches from plural <span class="la">lant</span> to <span class="la">du</span>, the Holy Land itself.' },
      { ref: 'hêre übr aller engel schar', html: 'Refers to the child: “lord over the whole host of angels”. <span class="la">übr</span> is <span class="la">über</span> shortened for the metre. Here <span class="la">hêre</span> is used almost as a noun, “exalted one”.' },
      { ref: 'Hie liez er sich reine toufen', html: '<span class="la">reine</span> refers to Christ: he who was pure let himself be baptised (in the Jordan), so that mankind might become pure. The paradox is the point.' },
      { ref: 'dô liez er sich hie verkoufen', html: 'Betrayed and “sold” by Judas for thirty pieces of silver. The sale buys the freedom of the unfree: the legal image of redemption, Latin <span class="la">redemptio</span>, “buying back”.' },
      { ref: 'wol dir, sper kriuz unde dorn! / wê dir, heiden!', html: 'The instruments of the Passion, venerated as relics, are blessed; the heathen is cursed. <span class="la">deist dir zorn</span> (<span class="la">daz ist</span>): “that is a grief (vexation) to you”, since the Passion brought the salvation he rejects.' },
      { ref: 'Hinnen fuor der sun zer helle', html: 'The descent into hell between Good Friday and Easter, from the creed (<span class="la">descendit ad inferos</span>). <span class="la">hinnen</span>: “from here”; <span class="la">zer</span> = <span class="la">ze der</span>. <span class="la">da’r</span> = <span class="la">dâ er</span>.' },
      { ref: 'sleht und ebener danne ein zein', html: '<span class="la">zein</span>: a rod, the shaft of an arrow. The image praises the perfect unity of the Trinity. <span class="la">êst al ein</span>: “it is all one”.' },
      { ref: 'als er Abrahâme erschein', html: 'Genesis 18: God appears to Abraham at Mamre as three men, whom Abraham addresses as one Lord, a standard medieval image of the Trinity.' },
      { ref: 'daz nie keiser baz gestreit', html: 'Christ’s victory over the devil compared with an emperor’s battle. Readers who date the song to Frederick II’s crusade have seen a pointed allusion in this line, since Frederick won Jerusalem without fighting; the reading is attractive but cannot be proved.' },
      { ref: 'dô huob sich der juden leit … den ir hant sluoc unde stach', html: 'The medieval Christian charge that the Jews killed Christ (deicide), which was used to justify persecution. <span class="la">ir huote brach</span>: the Resurrection breaks the guard set at the tomb (Matthew 27–28). See background section 4.' },
      { ref: 'In diz lant hât er gesprochen / einen angeslîchen tac', html: 'The Last Judgement, which tradition placed in the valley of Jehoshaphat (Joel 3). <span class="la">angeslîch</span>: terrible, fearful (<em>ängstlich</em> in an older sense). <span class="la">gerochen</span>: participle of <span class="la">rëchen</span>, “avenge” (<em>gerächt</em>).' },
      { ref: 'und der weise klagen mac', html: 'False friend: <span class="la">weise</span> is the orphan, <em>Waise</em>. Widow, orphan and poor man are the defenceless of biblical and legal tradition.' },
      { ref: 'wol im dort, der hie vergalt', html: '“Blessed is he there (at the Judgement) who paid here”: who made amends in this life.' },
      { ref: 'Kristen juden und die heiden / jehent daz diz ir erbe sî', html: 'The three faiths each claim the land as an inheritance. <span class="la">heiden</span> in crusade texts means the Muslims. <span class="la">sî</span>: subjunctive of reported claim.' },
      { ref: 'got müez ez ze rehte scheiden / durch die sîne namen drî', html: 'A wish: “may God decide it by right”, appealing to the Trinity, the very doctrine that divides Christians from Jews and Muslims.' },
      { ref: 'wir sîn an der rehten ger: / reht ist daz er uns gewer', html: 'The conclusion: the Christians have the rightful claim, and it is right that God award it to them. The legal vocabulary (<span class="la">reht, scheiden, ger, gewërn</span>) presents the crusade as a lawsuit before God.' }
    ],
    glosses: {
      'allerêrst': 'only now, for the first time (allererst)', 'lebe': 'live (1st sg. of lëben)', 'ich': 'I', 'mir': 'for myself (dat.); to me', 'werde': 'worthily, in honour (wërde)',
      'sît': 'since', 'mîn': 'my', 'sündic': 'sinful (sündig)', 'ouge': 'eye (Auge)', 'siht': 'sees (3rd sg. of sëhen)',
      'daz': 'the (neut.); that (dass)', 'hêre': 'holy, exalted, noble (hehr)', 'lant': 'land, country', 'und': 'and', 'ouch': 'also (auch)', 'die': 'the (fem.)', 'erde': 'earth, ground (Erde)',
      'der': 'to which (dat. fem. relative); the (masc. nom.); of them (gen. pl.)', 'man': 'one, people', 'sô': 'so', 'vil': 'much, many (viel)', 'êren': 'honour (gen. of êre)', 'giht': 'ascribes, says (3rd sg. of jëhen)',
      'ez': 'it', 'ist': 'is', 'mirst': 'mir ist: to me is (has … come)', 'geschehen': 'happened (participle of geschëhen)', 'des': 'what, that which (gen.)', 'ie': 'ever, always (je)', 'bat': 'asked, prayed (preterite of bitten)',
      'bin': 'am', 'komen': 'come (participle: gekommen)', 'an': 'to, at', 'stat': 'place (Stätte)', 'dâ': 'where; there', 'got': 'God', 'mennischlîchen': 'in human form (adverb)', 'trat': 'trod, walked (preterite of trëten)',
      'schœniu': 'beautiful (nom. pl. neut. of schœne)', 'rîch': 'rich, powerful (reich)', 'unde': 'and', 'swaz': 'however many, whatever', 'noch': 'besides, otherwise; still', 'hân': 'have', 'gesehen': 'seen (participle of sëhen)',
      'bist': 'are (2nd sg.)', 'duz': 'du ez: you … it', 'ir': 'of them (gen. pl.); their', 'aller': 'of all (gen. pl.)', 'êre': 'honour, glory (Ehre)',
      'waz': 'what', 'wunders': 'of wonder(s) (gen. of wunder)', 'hie': 'here', 'ein': 'a', 'magt': 'virgin, maiden (Jungfrau; not Magd)', 'kint': 'child (Kind)', 'gebar': 'bore (preterite of gebërn)',
      'übr': 'over (über, shortened for the metre)', 'engel': 'of the angels (gen. pl.)', 'schar': 'host (Schar)', 'was': 'was', 'niht': 'not (nicht)', 'wunder': 'wonder, miracle', 'gar': 'complete, perfect; entirely',
      'liez': 'let (preterite of lâzen)', 'er': 'he', 'sich': 'himself', 'reine': 'pure (rein)', 'toufen': 'baptise (taufen)', 'mensche': 'human being, mankind (Mensch)', 'sî': 'might be (subjunctive of sîn: sei)',
      'dô': 'then; when', 'verkoufen': 'sell (verkaufen)', 'wir': 'we', 'eigen': 'unfree, in bondage (leibeigen)', 'wurden': 'became (preterite pl. of wërden)', 'frî': 'free',
      'anders': 'otherwise', 'wæren': 'would be (past subjunctive of sîn: wären)', 'verlorn': 'lost (participle of verliesen: verloren)', 'wol': 'well, hail', 'dir': 'to you', 'sper': 'spear (Speer)', 'kriuz': 'cross (Kreuz)', 'dorn': 'thorn (Dorn)',
      'wê': 'woe (weh)', 'heiden': 'heathen; Muslim(s) (Heide)', 'zorn': 'anger, grief, vexation (Zorn)', 'deist': 'daz ist: that is',
      'hinnen': 'from here, hence', 'fuor': 'went, travelled (preterite of varn: fuhr)', 'sun': 'son (Sohn)', 'ze': 'to (zu)', 'zer': 'ze der: to the', 'helle': 'hell (Hölle)', 'von': 'from', 'dem': 'the (dat.)', 'grabe': 'grave (dat. of grap)',
      'da': 'dâ: where', 'r': 'er: he (da’r = dâ er)', 'inne': 'in, inside (darin)', 'lac': 'lay (preterite of ligen)', 'vater': 'father (Vater)', 'geselle': 'companion (Geselle)',
      'geist': 'spirit (Geist)', 'den': 'whom (relative); the', 'niemen': 'nobody (niemand)', 'mac': 'can (3rd sg. of mugen)', 'sunder': 'apart, asunder', 'scheiden': 'separate; decide (scheiden)',
      'êst': 'ez ist: it is', 'al': 'all', 'sleht': 'straight, smooth (schlicht)', 'ebener': 'smoother, more even (comparative of eben)', 'danne': 'than (denn)', 'zein': 'rod, arrow-shaft',
      'als': 'as', 'abrahâme': 'to Abraham (dat.)', 'erschein': 'appeared (preterite of erschînen: erschien)',
      'do': 'when (dô)', 'tievel': 'devil (Teufel)', 'geschande': 'had put to shame (preterite of schenden: schändete)', 'nie': 'never', 'keiser': 'emperor (Kaiser)', 'baz': 'better (besser)', 'gestreit': 'fought (gestriten; strîten)',
      'her': 'hither, here (her)', 'wider': 'back, again (wieder)', 'lande': 'land (dat.)', 'huob': 'began (preterite of heben: sich heben, begin)', 'juden': 'of the Jews (gen. pl.)', 'leit': 'sorrow, suffering (Leid)',
      'hêrre': 'lord (Herr)', 'huote': 'guard, custody (Hut)', 'brach': 'broke (preterite of brëchen)', 'in': 'him (acc.); in', 'lebendic': 'alive (lebendig)', 'sach': 'saw (preterite of sëhen)', 'hant': 'hand', 'sluoc': 'struck (preterite of slahen: schlug)', 'stach': 'pierced (preterite of stëchen)',
      'diz': 'this (dies)', 'hât': 'has', 'gesprochen': 'pronounced, proclaimed (participle of sprëchen)', 'einen': 'a (acc.)', 'angeslîchen': 'terrible, fearful', 'tac': 'day (Tag)',
      'diu': 'the (fem.)', 'witwe': 'widow (Witwe)', 'wirt': 'will be (3rd sg. of wërden)', 'gerochen': 'avenged (participle of rëchen: gerächt)', 'weise': 'orphan (Waise; not “wise”)', 'klagen': 'complain, bring a charge (klagen)',
      'arme': 'poor man (Arme)', 'gewalt': 'violence, wrong (Gewalt)', 'ime': 'him (dat.: ihm)', 'mit': 'with', 'gestalt': 'done, set (participle of stellen: mit ime gestalt, done to him)',
      'im': 'him (dat.)', 'dort': 'there (at the Judgement)', 'vergalt': 'paid back, made amends (preterite of vergëlten)',
      'kristen': 'Christians', 'jehent': 'say, claim (3rd pl. of jëhen)', 'erbe': 'inheritance (Erbe)', 'müez': 'must; may (subjunctive of müezen)', 'rehte': 'right: ze rehte, justly', 'durch': 'by, for the sake of (durch)',
      'sîne': 'his', 'namen': 'names (Namen)', 'drî': 'three', 'welt': 'world (Welt)', 'strîtet': 'fights, contends (3rd sg. of strîten)', 'sîn': 'are (1st pl. of sîn: sind)', 'rehten': 'rightful (dat. of reht)', 'ger': 'claim, desire (Begehren)',
      'reht': 'right (Recht)', 'uns': 'us', 'gewer': 'grant (subjunctive of gewërn: gewähre)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What has happened to the speaker in stanza 1?', options: ['He has arrived in the Holy Land, as he always prayed', 'He has taken the cross in Germany', 'He has been knighted by the emperor', 'He has returned home'], answer: 0, explain: 'mirst geschehen des ich ie bat, ich bin komen an die stat …' },
      { id: 'r2', type: 'mc', prompt: 'Why, according to stanza 3, did Christ let himself be “sold”?', options: ['So that the unfree might be freed', 'To pay a debt of the Jews', 'To buy the Holy Land', 'To fulfil a law of the emperor'], answer: 0, explain: 'daz wir eigen wurden frî.' },
      { id: 'r3', type: 'mc', prompt: 'Who will be able to bring a complaint on the Last Day (stanza 7)?', options: ['The widow, the orphan and the poor man', 'The emperor and the pope', 'Christians, Jews and heathens', 'The pilgrims'], answer: 0, explain: 'diu witwe … der weise … der arme.' },
      { id: 'r4', type: 'mc', prompt: 'How does the last stanza settle the dispute over the land?', options: ['It leaves it to God but asserts the Christian claim', 'It divides the land between the three faiths', 'It calls the land nobody’s inheritance', 'It gives the land to the emperor'], answer: 0, explain: 'got müez ez ze rehte scheiden … wir sîn an der rehten ger.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 3,
    items: [
      { id: 't1', type: 'mc', prompt: 'The oldest source of the melody is:', options: ['the Münster fragment (c. 1330)', 'the Codex Manesse', 'manuscript A', 'Walther’s autograph'], answer: 0, explain: 'Found in 1910 in a binding.' },
      { id: 't2', type: 'mc', prompt: 'The first stanza also appears, with neumes, in:', options: ['the Carmina Burana', 'the Nibelungenlied manuscript B', 'the Sachsenspiegel', 'Luther’s hymn book'], answer: 0, explain: 'CB 211a, attached to Alte clamat Epicurus.' },
      { id: 't3', type: 'mc', prompt: 'How many different stanzas are known across all manuscripts?', options: ['13', '7', '9', '12'], answer: 0, explain: 'A has 7, C 9, Z 12; 13 different stanzas in all.' },
      { id: 't4', type: 'mc', prompt: 'Who, on the usual reading, is the <span class="la">ich</span> of the song?', options: ['A pilgrim’s role, not necessarily Walther himself', 'Frederick II', 'A documented crusader named Walther', 'The Virgin Mary'], answer: 0, explain: 'Walther’s journey is not documented.' },
      { id: 't5', type: 'mc', prompt: '<span class="la">der weise</span> is:', options: ['the orphan', 'the wise man', 'the melody', 'the guide'], answer: 0, explain: 'weise = Waise.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">dâ got mennischlîchen tr___</span>', hint: 'walked (trëten)', answers: ['at'], full: 'dâ got mennischlîchen trat', explain: 'Series V: trëten, trat.' },
      { id: 't7', type: 'translate', dir: 'mhd-de', source: 'Hie ist ein wunder geschehen.', model: 'Hier ist ein Wunder geschehen.', accepted: ['hier ist ein wunder geschehen', 'hier geschah ein wunder', 'hier ist wunder geschehen'] },
      { id: 't8', type: 'mc', prompt: 'Which melody model has been proposed (Husmann 1953)?', options: ['Jaufre Rudel’s Lanquan li jorn', 'Dies irae', 'Ein feste Burg', 'Sumer is icumen in'], answer: 0, explain: 'A contrafactum hypothesis, not proven.' },
      { id: 't9', type: 'mc', prompt: 'In 1229, the Temple Mount:', options: ['remained under Muslim control', 'was given to the Templars', 'was destroyed', 'was given to the Jews'], answer: 0, explain: 'Under the Treaty of Jaffa.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">êst al ein</span> means:', options: ['it is all one', 'he is alone', 'it is all over', 'everything is his'], answer: 0, explain: 'êst = ez ist; the unity of the Trinity.' },
      { id: 't11', type: 'mc', prompt: 'The stanza form is:', options: ['Kanzone: ab ab ccc', 'couplets: aa bb cc', 'Nibelungen stanza', 'free verse'], answer: 0, explain: 'Two Stollen and an Abgesang.' }
    ]
  },

  reference: [
    { title: 'Palästinalied: the sources', headers: ['Source', 'Date', 'Contents'], rows: [
      ['Carmina Burana (CB 211a)', 'c. 1230', 'stanza 1, with neumes'], ['A, Small Heidelberg MS', 'c. 1270s', '7 stanzas'], ['C, Codex Manesse', 'early 14th c.', '9 stanzas'], ['Z, Münster fragment', 'c. 1330', '12 stanzas, melody']
    ] },
    { title: 'Crusades and Jerusalem, 1187–1244', headers: ['Year', 'Event'], rows: [
      ['1187', 'Saladin takes Jerusalem'], ['1189–92', 'Third Crusade; Barbarossa drowns (1190)'], ['1217–21', 'Crusade against Egypt (Damietta); Leopold VI of Austria'], ['1227', 'Frederick II excommunicated'], ['1229', 'Treaty of Jaffa; Frederick in Jerusalem'], ['1244', 'Jerusalem lost again']
    ] },
    { title: 'The Kanzone (bar form)', headers: ['Part', 'Lines', 'Rhyme', 'Music'], rows: [
      ['Aufgesang: 1st Stollen', '1–2', 'a b', 'A'], ['Aufgesang: 2nd Stollen', '3–4', 'a b', 'A (repeated)'], ['Abgesang', '5–7', 'c c c', 'B']
    ] }
  ]
});
