/*
 * Middle High German — Lecture I: from Middle High German to modern German.
 * Reading: Hartmann von Aue, Der arme Heinrich, lines 1–28, after the edition of
 * Hermann Paul, 15th edition by Gesa Bonath (Altdeutsche Textbibliothek 3, Tübingen 1984),
 * as reproduced by Mittelhochdeutsche Metrik Online (Universität Münster). See CONTENT-CHECKS.md.
 * Pictures from Wikimedia Commons (Codex Manesse, public domain).
 */
Viator.addLecture('mhd', {
  id: 'mhd-01',
  number: 1,
  title: 'Ein ritter sô gelêret was',
  subtitle: 'From Middle High German to modern German: sounds, spelling, false friends and the present tense',
  minutes: 60,

  intro: `
    <p>A German speaker can read a surprising amount of Middle High German at first sight. Hartmann von Aue begins a poem around 1190 with <span class="la">Ein ritter sô gelêret was, daz er an den buochen las</span>, and you understand it without a dictionary: “A knight was so learned that he read in books.”</p>
    <p>That ease is also the danger. Two things stand between you and the text. First, the <strong>sounds</strong> have changed in regular ways, so that <span class="la">mîn niuwez hûs</span> is “mein neues Haus” and <span class="la">guot</span> is “gut”. Once you know four rules, most words fall into place. Second, many words look familiar but have changed their meaning: the <strong>false friends</strong>. <span class="la">möhte</span> is not “möchte” but “könnte”; <span class="la">arbeit</span> is toil and hardship; <span class="la">wîp</span> is simply “woman”, without any contempt. These are the real trap for a German reader, more than for an English one, because they look so harmless.</p>
    <p>This lecture also explains what you are actually reading. The tidy spelling with circumflexes in modern editions is not how any scribe wrote. It is a 19th-century normalisation, and you need to know what it shows and what it hides.</p>
    <p>By the end you should be able to turn Middle High German words into their modern forms and back, recognise the commonest false friends, conjugate a verb in the present, and read the 28-line prologue of Hartmann’s <em>Der arme Heinrich</em> with the help of the glosses.</p>
  `,

  background: [
    {
      title: 'Middle High German: the language of the courts',
      html: `
        <p>“Middle High German” is a period and a region, not a single language. The period runs conventionally from about 1050 to about 1350. The region is the south and centre of the German-speaking lands: the dialects that went through the High German consonant shift, as opposed to the Low German of the north, which the bonus series “German through time” covers in its last part. There was no standard language. Bavarian, Alemannic (south-west, including what is now Switzerland and Alsace), East Franconian, Thuringian and the rest each wrote as they spoke, more or less.</p>
        <p>Between about 1170 and 1230, however, a group of poets created a literature that was read and copied across the whole region: Heinrich von Veldeke, Hartmann von Aue, Wolfram von Eschenbach, Gottfried von Straßburg, Walther von der Vogelweide, and the anonymous poet of the <em>Nibelungenlied</em>. Their patrons were princes and great lords, among them the Staufer emperors and Landgrave Hermann of Thuringia, who supported Veldeke, Wolfram and Walther. Much of their narrative work adapts French models, above all the Arthurian romances of Chrétien de Troyes.</p>
        <p>Whether these poets wrote a deliberate supra-regional “poets’ language”, avoiding rhymes that only worked in their own dialect, has been argued for over a century. There is evidence that some did avoid such rhymes, but how far this amounts to a common literary language is disputed. What is certain is that the classical texts were later copied all over the south, and each scribe adapted the spelling to his own habits.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Codex_Manesse_Walther_von_der_Vogelweide.jpg/960px-Codex_Manesse_Walther_von_der_Vogelweide.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Codex_Manesse_Walther_von_der_Vogelweide.jpg/500px-Codex_Manesse_Walther_von_der_Vogelweide.jpg|https://upload.wikimedia.org/wikipedia/commons/1/1a/Codex_Manesse_Walther_von_der_Vogelweide.jpg" alt="Medieval miniature of a man sitting on a rock, chin in hand, with two coats of arms above him"><figcaption>Walther von der Vogelweide in the Codex Manesse (Zurich, c. 1300–40; Heidelberg, Cod. Pal. germ. 848). The pose illustrates one of his political poems, in which he describes himself sitting on a stone and pondering. The portrait was painted about a century after his death and is not a likeness. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Codex_Manesse_Walther_von_der_Vogelweide.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'The normalised text and the manuscripts',
      html: `
        <p>Open any edition of Hartmann or Walther and you see a regular spelling: long vowels with a circumflex (<span class="la">â ê î ô û</span>), long umlauts as <span class="la">æ œ iu</span>, diphthongs as <span class="la">ie uo üe</span>, and often the letter <span class="la">ʒ</span> for one of the s-sounds. This “normalised Middle High German” was created by Karl Lachmann (1793–1851) and his contemporaries, who applied the methods of classical philology to German texts. They tried to reconstruct the language of the poets around 1200 and standardised the spelling accordingly. Dictionaries (Benecke–Müller–Zarncke, Lexer) and grammars use the same system.</p>
        <p>No medieval scribe wrote like this. Manuscripts do not mark vowel length. They write <span class="la">u</span> and <span class="la">v</span> as one letter, may put a small <span class="la">o</span> over a <span class="la">u</span> for <span class="la">uo</span>, and spell the same word differently on the same page. Most of the great poems survive only in copies made decades or a century after the poets died: the <em>Codex Manesse</em>, the largest collection of songs, was written in Zurich around 1300–1340.</p>
        <p>The normalised text is therefore an interpretation, and modern editors are more cautious than Lachmann was. Many recent editions print one manuscript’s text, lightly regularised, rather than a reconstruction. For learning, the normalised spelling is invaluable: it shows the vowel lengths and so the sound changes. But remember that it is a scholar’s tool, and that the further you go, the more you will read manuscripts and closer-to-manuscript editions.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Text_des_D%C3%BCrins_im_Codex_Manesse.jpg/960px-Text_des_D%C3%BCrins_im_Codex_Manesse.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Text_des_D%C3%BCrins_im_Codex_Manesse.jpg/500px-Text_des_D%C3%BCrins_im_Codex_Manesse.jpg|https://upload.wikimedia.org/wikipedia/commons/1/19/Text_des_D%C3%BCrins_im_Codex_Manesse.jpg" alt="Manuscript page in Gothic book hand, with coloured initials and no word-length marks"><figcaption>Song text in the Codex Manesse. Compare the normalised spelling of the editions: no length marks, abbreviations, and verse written continuously like prose rather than line by line. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Text_des_D%C3%BCrins_im_Codex_Manesse.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Hartmann von Aue, a knight who could read',
      html: `
        <p>Hartmann tells us almost everything we know about himself in the prologue you will read in this lecture. He was a <span class="la">ritter</span> and a <span class="la">dienstman</span> of a lord or family called Aue, and he was <span class="la">gelêret</span>: he could read, and read Latin and French books. That was unusual enough in a knight to be worth saying in the first line. He wrote between about 1180 and 1200: <em>Erec</em> and <em>Iwein</em>, the first Arthurian romances in German; two religious tales, <em>Gregorius</em> and <em>Der arme Heinrich</em>; and love songs. Where “Aue” was is not known. Several places in Swabia and Switzerland have been proposed.</p>
        <p>A <span class="la">dienstman</span> (Latin <span class="la">ministerialis</span>) was a member of a class peculiar to the medieval Empire: men who were legally unfree, bound to a lord, yet who served as knights, officials and administrators and could become rich and powerful. Many of the poets of the period were ministerials. The modern German <em>Dienstmann</em>, the railway porter, is the same word after a long fall.</p>
        <p><em>Der arme Heinrich</em> (probably 1190s) is a short tale of about 1,500 lines. A rich and admired lord is struck with leprosy, and the only cure is the heart’s blood of a virgin who gives it willingly. The prologue introduces the narrator, not the hero: Hartmann asks his listeners to pray for him in return for the story.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Codex_Manesse_Hartmann_von_Aue.jpg/960px-Codex_Manesse_Hartmann_von_Aue.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Codex_Manesse_Hartmann_von_Aue.jpg/500px-Codex_Manesse_Hartmann_von_Aue.jpg|https://upload.wikimedia.org/wikipedia/commons/1/1e/Codex_Manesse_Hartmann_von_Aue.jpg" alt="Medieval miniature of a knight in armour and closed helmet on horseback, with a coat of arms"><figcaption>Hartmann von Aue in the Codex Manesse, shown as a mounted knight. Whether the arms shown were really Hartmann’s is not known. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Codex_Manesse_Hartmann_von_Aue.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Ein ritter sô gelêret was<br>daz er an den buochen las,<br>swaz er dar an geschriben vant:<br>der was Hartman genant,<br>dienstman was er zOuwe.</p>
    <p>“A knight was so learned that he read in books whatever he found written in them: he was called Hartmann, a ministerial he was at Aue.” Hartmann von Aue, <em>Der arme Heinrich</em>, lines 1–5, in the edition of Hermann Paul, 15th edition by Gesa Bonath (Tübingen 1984).</p>
    <p>Note how Hartmann speaks of himself in the third person, as <span class="la">ein ritter</span> and <span class="la">der</span>, “that one”. <span class="la">zOuwe</span> is <span class="la">ze Ouwe</span>, “at Aue”, with the vowel of <span class="la">ze</span> dropped; editors write the capital to show where the name begins. <span class="la">las</span>, <span class="la">vant</span> and <span class="la">was</span> are past tenses of strong verbs, the subject of Lecture II.</p>
  `,

  pronunciation: `
    <p>Middle High German pronunciation is reconstructed, but on firmer ground than Middle Low German: the rhymes of the poets, the spelling of the better manuscripts and the modern dialects all give evidence. What follows is the standard picture for classical Middle High German around 1200. Southern German and Swiss dialects keep many of these sounds today, and they are the best living guide.</p>
    <h3>Long and short vowels</h3>
    <p>The circumflex marks a long vowel: <span class="la">â ê î ô û</span>. Everything without it is short, including vowels that are long in modern German. <span class="la">sagen</span> had a short <em>a</em>, as in German <em>Sack</em>; <span class="la">geschriben</span> a short <em>i</em>, as in <em>Schritt</em>. This is the commonest mistake of German readers, because modern German has lengthened these vowels.</p>
    <h3>î, û, iu: long vowels, not diphthongs</h3>
    <p><span class="la">mîn</span> is “mien” as in <em>Miene</em>, not “mein”. <span class="la">hûs</span> is “Huus”, exactly as in Swiss German. <span class="la">iu</span> is a long <em>ü</em>, not a diphthong: <span class="la">liute</span> sounds like Swiss German <em>Lüüt</em>. These became <em>ei, au, eu</em> later; see grammar section 1.</p>
    <h3>ie, uo, üe: real diphthongs</h3>
    <p>These were falling diphthongs: <span class="la">ie</span> as <em>i</em> gliding to a short <em>e</em>, as in Swiss German <em>lieb</em> or Bavarian <em>liab</em>; <span class="la">uo</span> as in Swiss <em>guet</em>; <span class="la">üe</span> as in Swiss <em>müed</em>. Never read <span class="la">ie</span> as the long <em>i</em> of modern <em>Liebe</em>: the modern spelling preserves an old diphthong that has since disappeared.</p>
    <h3>ei, ou, öu</h3>
    <p><span class="la">ei</span> was probably close to <em>e</em> + <em>i</em> (as in English <em>day</em>), and was different from <span class="la">î</span>. Modern German has merged the two: <em>Stein</em> (old <span class="la">stein</span>) and <em>mein</em> (old <span class="la">mîn</span>) rhyme today but did not then. Swiss German still keeps them apart: <em>Stei</em> but <em>mii</em>. <span class="la">ou</span> is <em>o</em> + <em>u</em>, as in <span class="la">ouge</span>, “Auge”.</p>
    <h3>Consonants</h3>
    <ul>
      <li><span class="la">v</span> is <em>f</em>: <span class="la">vunde</span>, <span class="la">vür</span> (“funde”, “für”), as in modern <em>Vater</em>.</li>
      <li><span class="la">h</span> before a consonant and at the end of a syllable is <em>ch</em>: <span class="la">niht</span> is “nicht”, <span class="la">möhte</span> is “möchte” in sound (though not in meaning).</li>
      <li><span class="la">z</span> at the start of a word or after a consonant is <em>ts</em>, as today: <span class="la">zît</span>. After a vowel, in words like <span class="la">daz, waz, wazzer</span>, it was an s-sound, probably different from ordinary <span class="la">s</span>. Some editions write this second sound <span class="la">ʒ</span> (<span class="la">daʒ</span>); others, including the edition of Hartmann used here, write <span class="la">z</span> for both.</li>
      <li><span class="la">s</span> before <em>l, m, n, w</em> was still <em>s</em>: <span class="la">swære</span>, <span class="la">slâfen</span>. The change to <em>sch</em> (schwer, schlafen) came later.</li>
      <li>Final consonants were devoiced, and unlike modern German, the spelling shows it: <span class="la">tac</span> but <span class="la">tages</span>; <span class="la">lîp</span> but <span class="la">lîbes</span>; <span class="la">vant</span> from <span class="la">vinden</span>.</li>
    </ul>
    <h3>Stress</h3>
    <p>As in modern German, on the first syllable of the root: <span class="la">ARbeit, geLÊret</span>. Unstressed <span class="la">e</span> was a weak vowel, as in modern German <em>bitte</em>, and in verse it is often elided before a following vowel.</p>
  `,

  grammar: [
    {
      title: '1. Four sound changes from Middle High German to modern German',
      html: `
        <p>Almost all the differences in vowels between Middle High German and modern German come from four changes that spread between about 1100 and 1500. The first started in the south-east (Bavaria and Austria) and spread north and west. The dialects of the south-west, including Swiss German, never took part, which is why they still say <em>Huus</em> and <em>Ziit</em>.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Change</th><th>MHG</th><th>Modern</th></tr></thead>
          <tbody>
            <tr><td><strong>Diphthongisation</strong>: long î, û, iu become ei, au, eu</td><td class="la">mîn, hûs, liute</td><td>mein, Haus, Leute</td></tr>
            <tr><td><strong>Monophthongisation</strong>: ie, uo, üe become long i, u, ü</td><td class="la">lieb, guot, müede</td><td>lieb [liːp], gut, müde</td></tr>
            <tr><td><strong>Lengthening</strong> of short vowels in open syllables</td><td class="la">sagen, geschriben, lëben</td><td>sagen [aː], geschrieben, leben</td></tr>
            <tr><td><strong>Shortening</strong> of some long vowels before consonant groups</td><td class="la">brâhte, lieht, dâhte</td><td>brachte, Licht, dachte</td></tr>
          </tbody>
        </table></div>
        <p>Some consequences:</p>
        <ul>
          <li>Modern <em>ei</em> has two sources: old <span class="la">î</span> (<span class="la">mîn</span> → mein) and old <span class="la">ei</span> (<span class="la">stein</span> → Stein). Likewise modern <em>au</em> from <span class="la">û</span> (<span class="la">hûs</span>) and from <span class="la">ou</span> (<span class="la">ouge</span>).</li>
          <li>Modern <em>ie</em> in <em>geschrieben</em> or <em>Spiegel</em> is a spelling for a long <em>i</em> that was short in Middle High German. The <em>e</em> was added on the model of words like <em>lieb</em>, where it had once been pronounced.</li>
          <li>When you meet an unfamiliar word, try the rules backwards: <span class="la">liuhten</span> → leuchten, <span class="la">fiur</span> → Feuer, <span class="la">bluot</span> → Blut.</li>
        </ul>
        <p>Two consonant changes are worth knowing at the same time: <span class="la">s</span> before <em>l, m, n, w</em> became <em>sch</em> (<span class="la">swære</span> → schwer, <span class="la">smal</span> → schmal), and the generalising pronouns <span class="la">swer, swaz</span> (“whoever, whatever”) lost their <em>s</em>, merging with <em>wer, was</em>.</p>
      `
    },
    {
      title: '2. Reading the normalised spelling',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Sign</th><th>Meaning</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td class="la">â ê î ô û</td><td>long vowels</td><td class="la">gelêret, lôn</td></tr>
            <tr><td class="la">æ œ iu</td><td>long umlauts of â, ô, û</td><td class="la">swære, hœren, liute</td></tr>
            <tr><td class="la">ä ö ü</td><td>short umlauts</td><td class="la">möhte, vür</td></tr>
            <tr><td class="la">e, ë</td><td>short e: some editions distinguish closed <span class="la">e</span> (umlaut of a) and open <span class="la">ë</span> (old e)</td><td class="la">geste; lëben</td></tr>
            <tr><td class="la">ie uo üe</td><td>diphthongs</td><td class="la">die, buoch, müede</td></tr>
            <tr><td class="la">ei ou öu</td><td>diphthongs</td><td class="la">ein, ouge, vröude</td></tr>
            <tr><td class="la">ʒ, ʒʒ</td><td>s-sound from old t (in some editions only)</td><td class="la">daʒ, waʒʒer</td></tr>
          </tbody>
        </table></div>
        <p>The <span class="la">iu</span> needs care: it is one long vowel (a long <em>ü</em>), the umlaut of <span class="la">û</span>, not <em>i</em> + <em>u</em>.</p>
      `
    },
    {
      title: '3. False friends',
      html: `
        <p>The sound rules turn a Middle High German word into a modern one. They do not tell you whether the meaning has stayed the same, and often it has not. A selection, several of them from this lecture’s reading:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>MHG</th><th>Looks like</th><th>Means</th></tr></thead>
          <tbody>
            <tr><td class="la">möhte</td><td>möchte</td><td>könnte, could (from <span class="la">mugen</span>, “be able”)</td></tr>
            <tr><td class="la">arbeit</td><td>Arbeit</td><td>toil, hardship, suffering; effort</td></tr>
            <tr><td class="la">wîp</td><td>Weib (pejorative)</td><td>woman, wife; neutral</td></tr>
            <tr><td class="la">maget</td><td>Magd</td><td>girl, young woman, virgin</td></tr>
            <tr><td class="la">list</td><td>List</td><td>skill, knowledge, wisdom (also cunning)</td></tr>
            <tr><td class="la">hôchgezît</td><td>Hochzeit</td><td>any great festival</td></tr>
            <tr><td class="la">muot</td><td>Mut</td><td>mind, mood, disposition</td></tr>
            <tr><td class="la">rede</td><td>Rede</td><td>account, story, matter</td></tr>
            <tr><td class="la">lîp</td><td>Leib</td><td>life; body; person</td></tr>
            <tr><td class="la">swære</td><td>schwer</td><td>heavy, grievous; (noun) sorrow</td></tr>
            <tr><td class="la">dienstman</td><td>Dienstmann</td><td>ministerial, unfree knight</td></tr>
          </tbody>
        </table></div>
        <p>The changes are rarely random. <span class="la">wîp</span> declined because <span class="la">vrouwe</span> (“lady”) spread downwards as a polite word for any woman, leaving <em>Weib</em> for the lowly. <span class="la">arbeit</span> lost its sense of suffering as work came to be valued, a change often linked, perhaps too neatly, with the Reformation. When a familiar word makes odd sense, suspect a false friend and check the glossary.</p>
      `
    },
    {
      title: '4. The present tense',
      html: `
        <p>The endings are close to modern German, with two differences: the unstressed vowel is kept (<span class="la">suochest, suochet</span>), and the third person plural ends in <span class="la">-ent</span>.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>suochen “suchen”</th><th>nëmen “nehmen” (strong)</th><th>Modern</th></tr></thead>
          <tbody>
            <tr><th>ich</th><td class="la">suoche</td><td class="la">nime</td><td>suche, nehme</td></tr>
            <tr><th>du</th><td class="la">suochest</td><td class="la">nimest</td><td>suchst, nimmst</td></tr>
            <tr><th>ër, si, ëz</th><td class="la">suochet</td><td class="la">nimet</td><td>sucht, nimmt</td></tr>
            <tr><th>wir</th><td class="la">suochen</td><td class="la">nëmen</td><td>suchen, nehmen</td></tr>
            <tr><th>ir</th><td class="la">suochet</td><td class="la">nëmet</td><td>sucht, nehmt</td></tr>
            <tr><th>si</th><td class="la">suochent</td><td class="la">nëment</td><td>suchen, nehmen</td></tr>
          </tbody>
        </table></div>
        <p>The plural <span class="la">-ent</span> survives in Alemannic dialects. Strong verbs with <span class="la">e</span> change it to <span class="la">i</span> in the whole singular, including the first person (<span class="la">ich nime, ich gibe</span>), where modern German has levelled it back (<em>ich nehme, ich gebe</em>). In the reading, <span class="la">man giht</span> “man sagt” is the third person of <span class="la">jëhen</span>, “say”, with this <span class="la">i</span>.</p>
        <h3>sîn, wësen “sein”</h3>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th></tr></thead>
          <tbody>
            <tr><th>1st</th><td class="la">bin</td><td class="la">birn, sîn</td></tr>
            <tr><th>2nd</th><td class="la">bist</td><td class="la">birt, sît</td></tr>
            <tr><th>3rd</th><td class="la">ist</td><td class="la">sint</td></tr>
          </tbody>
        </table></div>
        <p>The forms <span class="la">birn, birt</span> (built on <span class="la">bin, bist</span>) are found beside <span class="la">sîn, sît</span>. The infinitive has two forms, <span class="la">sîn</span> and <span class="la">wësen</span>; <span class="la">wësen</span> survives in <em>gewesen</em> and in the noun <em>Wesen</em>.</p>
      `
    },
    {
      title: '5. The subjunctive at a glance',
      html: `
        <p>The prologue is full of subjunctives, because Hartmann describes what he hopes for and reports what “people say”. The present subjunctive is the stem + <span class="la">-e</span> in the 1st and 3rd person singular, as in the modern Konjunktiv I: <span class="la">ër belîbe</span> “er bleibe”, <span class="la">ër lëse</span> “er lese”, <span class="la">ër sî</span> “er sei”, <span class="la">ër wëse</span> (from <span class="la">wësen</span>).</p>
        <p>Middle High German uses it far more than modern German: after <span class="la">daz</span> expressing a purpose or wish, in reported speech, and in general statements with <span class="la">swer</span> (“whoever”). The past subjunctive has umlaut, as in modern Konjunktiv II: <span class="la">möhte</span> (<em>könnte</em>), <span class="la">töhte</span> (<em>taugte</em>), <span class="la">vunde</span> (<em>fände</em>).</p>
        <p>The full system comes in Lecture VI. For now, when a verb ends in <span class="la">-e</span> where you expect <span class="la">-et</span>, think of a subjunctive and add “möge, solle, würde” in your mind.</p>
      `
    },
    {
      title: '6. Little words',
      html: `
        <ul>
          <li><span class="la">swer, swaz</span>: whoever, whatever. Modern German uses <em>wer, was</em>.</li>
          <li><span class="la">iht</span>: anything, at all; <span class="la">niht</span>: nothing, not. In clauses after <span class="la">daz</span> that express a wish or purpose, <span class="la">iht</span> can carry a negative sense, as in the reading: <span class="la">daz er … iht âne lôn belîbe</span>, “that he should not remain unrewarded”. Grammars discuss this use under negation; Lecture VII returns to it.</li>
          <li><span class="la">dâ mite</span>: “damit” in both senses, “with it” and “with which”.</li>
          <li><span class="la">ze</span>: zu; contracted before a vowel (<span class="la">zOuwe</span>) and with the article (<span class="la">zem</span>, “zum”).</li>
          <li><span class="la">ode, oder</span>: oder. <span class="la">unde, und</span>: und.</li>
          <li><span class="la">âne</span>: ohne. <span class="la">vür</span>: für, also vor.</li>
        </ul>
      `
    }
  ],

  vocab: [
    // nouns
    { id: 'ritter', head: 'ritter', la: 'ritter', g: 'm', pos: 'noun', en: 'knight', de: 'Ritter', note: 'Beside rîter, “rider”. The form ritter probably came in from Flemish (compare Dutch ridder) with the courtly fashions of the Low Countries.' },
    { id: 'buoch', head: 'buoch', la: 'buoch', g: 'n', pos: 'noun', en: 'book', de: 'Buch', note: 'uo → u. The plural is buoch or buochen; also feminine in some texts.' },
    { id: 'dienstman', head: 'dienstman', la: 'dienstman, pl. dienstman, dienstliute', g: 'm', pos: 'noun', en: 'ministerial, knight of unfree status in a lord’s service', de: 'Ministeriale, Dienstmann', note: 'False friend: not the modern Dienstmann (porter).' },
    { id: 'stunde', head: 'stunde', la: 'stunde', g: 'f', pos: 'noun', en: 'time, while; hour', de: 'Zeit, Weile; Stunde' },
    { id: 'sache', head: 'sache', la: 'sache', g: 'f', pos: 'noun', en: 'thing, matter; cause, legal case', de: 'Sache, Angelegenheit; Grund' },
    { id: 'got', head: 'got', la: 'got, gotes', g: 'm', pos: 'noun', en: 'God, god', de: 'Gott' },
    { id: 'ere', head: 'êre', la: 'êre', g: 'f', pos: 'noun', en: 'honour, glory, reputation', de: 'Ehre, Ansehen', note: 'A central courtly value: public standing as well as inner worth.' },
    { id: 'liute', head: 'liute', la: 'liute', pos: 'noun, plural', en: 'people', de: 'Leute', note: 'iu → eu. Singular liut, “people, nation”.' },
    { id: 'rede', head: 'rede', la: 'rede', g: 'f', pos: 'noun', en: 'speech; story, account; matter', de: 'Rede; Erzählung, Bericht; Sache', note: 'False friend: often “story” or “matter”, not a speech.' },
    { id: 'arbeit', head: 'arbeit', la: 'arbeit, arebeit', g: 'f', pos: 'noun', en: 'toil, hardship, suffering; effort', de: 'Mühe, Not, Leid; Anstrengung', note: 'False friend: rarely “work” in the modern sense. The Nibelungenlied names arebeit among its themes in its first stanza.' },
    { id: 'lon', head: 'lôn', la: 'lôn', g: 'm', pos: 'noun', en: 'reward, payment', de: 'Lohn' },
    { id: 'lip', head: 'lîp', la: 'lîp, lîbes', g: 'm', pos: 'noun', en: 'life; body; person', de: 'Leben; Leib; Person', note: 'False friend: nâch sînem lîbe, “after his life”, i.e. after his death. mîn lîp often simply means “I”.' },
    { id: 'sele', head: 'sêle', la: 'sêle', g: 'f', pos: 'noun', en: 'soul', de: 'Seele' },
    { id: 'heil', head: 'heil', la: 'heil', g: 'n', pos: 'noun', en: 'salvation; luck, good fortune', de: 'Heil; Glück' },
    { id: 'bote', head: 'bote', la: 'bote', g: 'm', pos: 'noun', en: 'messenger', de: 'Bote' },
    { id: 'schulde', head: 'schulde', la: 'schulde, schult', g: 'f', pos: 'noun', en: 'guilt; debt; cause', de: 'Schuld; Ursache' },
    { id: 'wip', head: 'wîp', la: 'wîp, wîbes', g: 'n', pos: 'noun', en: 'woman, wife', de: 'Frau', note: 'False friend: neutral, not pejorative like modern Weib. Walther praises wîp above vrouwe.' },
    { id: 'vrouwe', head: 'vrouwe', la: 'vrouwe, vrowe', g: 'f', pos: 'noun', en: 'lady, mistress', de: 'Herrin, Dame', note: 'A woman of rank; only later any woman (Frau).' },
    // verbs
    { id: 'lesen', head: 'lësen', la: 'lësen (ich lise, ër liset; las)', pos: 'verb, strong', en: 'read; gather', de: 'lesen; sammeln' },
    { id: 'vinden', head: 'vinden', la: 'vinden (vant, vunden)', pos: 'verb, strong', en: 'find; compose (poetry)', de: 'finden; dichten', note: 'v = f. vunde is the past subjunctive: fände.' },
    { id: 'schriben', head: 'schrîben', la: 'schrîben (schreip, geschriben)', pos: 'verb, strong', en: 'write', de: 'schreiben', note: 'î → ei; the short i of geschriben was lengthened (geschrieben).' },
    { id: 'nennen', head: 'nennen', la: 'nennen (nante, genant)', pos: 'verb, weak', en: 'name, call', de: 'nennen', note: 'ër was … genant: he was called.' },
    { id: 'suochen', head: 'suochen', la: 'suochen', pos: 'verb, weak', en: 'seek, look for', de: 'suchen' },
    { id: 'mugen', head: 'mugen', la: 'mugen (ich mac; mohte, möhte)', pos: 'verb, preterite-present', en: 'be able, can', de: 'können, vermögen', note: 'False friend: möhte = könnte, not möchte. Modern mögen has narrowed to “like”.' },
    { id: 'jehen', head: 'jëhen', la: 'jëhen (ich gihe, ër giht; jach)', pos: 'verb, strong', en: 'say, declare; confess', de: 'sagen, behaupten; bekennen', note: 'man giht: man sagt. Survives in German Beichte (from bîgiht).' },
    { id: 'bitten', head: 'bitten', la: 'bitten (bat, gebëten)', pos: 'verb, strong', en: 'ask, pray, request', de: 'bitten' },
    { id: 'sin', head: 'sîn', la: 'sîn, wësen (bin, bist, ist; sîn, sît, sint)', pos: 'verb, irregular', en: 'be', de: 'sein', note: 'Subjunctive sî, wëse: sei.' },
    // other
    { id: 'swer', head: 'swer, swaz', la: 'swer, swaz', pos: 'pronoun', en: 'whoever, whatever', de: 'wer (auch immer), was (auch immer)' },
    { id: 'iht', head: 'iht', la: 'iht', pos: 'pronoun, adverb', en: 'anything; at all (in some clauses: not)', de: 'etwas, irgend; (in Nebensätzen auch) nicht', note: 'niht = nicht, nichts. See grammar section 6.' },
    { id: 'ane', head: 'âne', la: 'âne', pos: 'preposition (+ acc.)', en: 'without', de: 'ohne' },
    { id: 'swaere', head: 'swære', la: 'swære', pos: 'adjective; noun (f.)', en: 'heavy, grievous; sorrow, grief', de: 'schwer, drückend; Kummer', note: 'sw → schw; æ is the long umlaut of â.' },
    { id: 'senfte', head: 'senfte', la: 'senfte', pos: 'adjective', en: 'gentle, soft, easy', de: 'sanft, angenehm', note: 'senfter: comparative, “gentler, easier to bear”.' },
    { id: 'misslich', head: 'mislîch', la: 'mislîch', pos: 'adjective', en: 'various, of different kinds', de: 'verschieden(artig)', note: 'False friend: modern misslich (awkward) is a later sense.' }
  ],

  grammarCards: [
    { id: 'mh1-diph', front: 'Diphthongisation: MHG î, û, iu become …', back: 'ei, au, eu: mîn hûs, liute → mein Haus, Leute' },
    { id: 'mh1-mono', front: 'Monophthongisation: MHG ie, uo, üe become …', back: 'long i, u, ü: lieb, guot, müede → lieb, gut, müde' },
    { id: 'mh1-len', front: 'Lengthening in open syllables: example', back: 'sagen (short a) → sagen (long a); geschriben → geschrieben' },
    { id: 'mh1-short', front: 'Shortening before consonant groups: example', back: 'brâhte → brachte; lieht → Licht' },
    { id: 'mh1-ei', front: 'Modern ei has two MHG sources:', back: 'î (mîn → mein) and ei (stein → Stein)' },
    { id: 'mh1-ie', front: 'How was MHG ie pronounced?', back: 'As a diphthong i + e, as in Swiss German lieb; not long i.' },
    { id: 'mh1-iu', front: 'What is MHG iu?', back: 'A long ü (the umlaut of û): liute, “Lüüte”.' },
    { id: 'mh1-v', front: 'MHG v at the start of a word is pronounced …', back: 'f: vür, vunde, vrouwe' },
    { id: 'mh1-h', front: 'MHG h before a consonant (niht, möhte) is pronounced …', back: 'ch: nicht, möchte (sound only)' },
    { id: 'mh1-sw', front: 'MHG sw-, sl-, sm-, sn- become …', back: 'schw-, schl-, schm-, schn-: swære → schwer' },
    { id: 'mh1-mohte', front: 'möhte means …', back: 'könnte (past subjunctive of mugen), not möchte' },
    { id: 'mh1-arbeit', front: 'arbeit means …', back: 'toil, hardship, suffering, effort' },
    { id: 'mh1-wip', front: 'wîp means …', back: 'woman, wife; neutral, not pejorative' },
    { id: 'mh1-pl', front: 'Present plural endings of suochen', back: 'wir suochen, ir suochet, si suochent' },
    { id: 'mh1-sin', front: 'Present of sîn', back: 'bin, bist, ist; birn/sîn, birt/sît, sint' },
    { id: 'mh1-subj', front: 'ër belîbe, ër sî, ër wëse: what form?', back: 'Present subjunctive (Konjunktiv I): er bleibe, er sei' },
    { id: 'mh1-swer', front: 'swer, swaz', back: 'whoever, whatever (wer, was)' },
    { id: 'mh1-norm', front: 'Who created normalised MHG spelling?', back: 'Karl Lachmann and his contemporaries, early 19th century' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">hûs</span> became modern German:', options: ['Haus', 'Hose', 'Huss', 'Hus'], answer: 0, explain: 'Diphthongisation: û → au.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">guot</span> became modern German:', options: ['gut', 'Gaul', 'Gott', 'Gut (property) only'], answer: 0, explain: 'Monophthongisation: uo → long u.' },
    { id: 'e3', type: 'mc', prompt: 'Modern German <em>Leute</em> in Middle High German:', options: ['liute', 'leute', 'lûte', 'liete'], answer: 0, explain: 'eu comes from iu, a long ü.' },
    { id: 'e4', type: 'mc', prompt: 'Modern German <em>Zeit</em> in Middle High German:', options: ['zît', 'zeit', 'tît', 'ziet'], answer: 0, explain: 'ei from î. (tît is Middle Low German, without the consonant shift.)' },
    { id: 'e5', type: 'mc', prompt: 'Modern German <em>Stein</em> in Middle High German:', options: ['stein', 'stîn', 'stên', 'stien'], answer: 0, explain: 'This ei was already ei. Only î gave the other ei (mîn → mein).' },
    { id: 'e6', type: 'mc', prompt: 'How was <span class="la">lieb</span> pronounced around 1200?', options: ['With a diphthong, as Swiss German lieb', 'With a long i, as modern lieb', 'As “leib”', 'As “lib”, short i'], answer: 0, explain: 'ie was a diphthong; modern spelling preserves it.' },
    { id: 'e7', type: 'mc', prompt: 'In <span class="la">sagen</span> (MHG), the a was:', options: ['short, as in Sack', 'long, as in modern sagen', 'a diphthong', 'silent'], answer: 0, explain: 'Short vowels in open syllables were lengthened later.' },
    { id: 'e8', type: 'mc', prompt: '<span class="la">dâ mite er swære stunde möhte senfter machen</span>: <span class="la">möhte</span> means', options: ['could', 'would like to', 'must', 'wanted'], answer: 0, explain: 'möhte is the past subjunctive of mugen, “be able”.' },
    { id: 'e9', type: 'mc', prompt: 'A Middle High German <span class="la">wîp</span> is:', options: ['a woman (neutral)', 'a woman (contemptuous)', 'a girl', 'a servant'], answer: 0, explain: 'The pejorative sense of Weib is modern.' },
    { id: 'e10', type: 'mc', prompt: '<span class="la">sîner arbeit</span> in Hartmann’s prologue means:', options: ['his effort, his toil', 'his job', 'his workplace', 'his wages'], answer: 0, explain: 'arbeit: toil, effort, hardship.' },
    { id: 'e11', type: 'match', prompt: 'Match the Middle High German words to their modern forms.', pairs: [
      ['mîn', 'mein'], ['liuhten', 'leuchten'], ['bluot', 'Blut'], ['swære', 'schwer'], ['vür', 'für']
    ] },
    { id: 'e12', type: 'match', prompt: 'Match the false friends to their meanings.', pairs: [
      ['arbeit', 'Mühe, Not'], ['rede', 'Erzählung'], ['lîp', 'Leben'], ['maget', 'Mädchen'], ['hôchgezît', 'Fest']
    ] },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Wir ___ ein buoch.</span>', hint: 'we seek (suchen), MHG spelling', answers: ['suochen'], full: 'Wir suochen ein buoch.', explain: 'uo where modern German has long u.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Die ritter suoch___ den wec.</span>', hint: 'they seek', answers: ['ent'], full: 'Die ritter suochent den wec.', explain: '3rd person plural -ent.' },
    { id: 'e15', type: 'gap', prompt: '<span class="la">Du suoch___ daz buoch.</span>', hint: 'you (sg.) seek', answers: ['est'], full: 'Du suochest daz buoch.', explain: '2nd person singular -est, with the e kept.' },
    { id: 'e16', type: 'gap', prompt: '<span class="la">Ich ___ ein ritter.</span>', hint: 'am', answers: ['bin'], full: 'Ich bin ein ritter.', explain: 'As in modern German.' },
    { id: 'e17', type: 'paradigm', prompt: 'Conjugate <span class="la">suochen</span> in the present.', headers: ['Form'], rows: [
      { label: 'ich', answers: ['suoche'] },
      { label: 'du', answers: ['suochest'] },
      { label: 'ër', answers: ['suochet'] },
      { label: 'wir', answers: ['suochen'] },
      { label: 'ir', answers: ['suochet'] },
      { label: 'si (pl.)', answers: ['suochent'] }
    ] },
    { id: 'e18', type: 'paradigm', prompt: 'Give the present of <span class="la">sîn</span>. In the plural, either form is accepted.', headers: ['Form'], rows: [
      { label: 'ich', answers: ['bin'] },
      { label: 'du', answers: ['bist'] },
      { label: 'ër', answers: ['ist'] },
      { label: 'wir', answers: ['birn|sîn'] },
      { label: 'ir', answers: ['birt|sît'] },
      { label: 'si (pl.)', answers: ['sint'] }
    ] },
    { id: 'e19', type: 'order', prompt: 'Put the German translation in order.', source: 'Ein ritter sô gelêret was, daz er an den buochen las.', tokens: ['Ein Ritter', 'war so gelehrt,', 'dass er', 'in den Büchern', 'las.'], explain: 'Word order is close to modern German; sô … daz, so … dass.' },
    { id: 'e20', type: 'translate', dir: 'mhd-de', source: 'Der ritter suochet ein buoch.', model: 'Der Ritter sucht ein Buch.', accepted: ['ritter sucht buch', 'ritter sucht ein buch', 'der ritter sucht ein buch'] },
    { id: 'e21', type: 'translate', dir: 'mhd-de', source: 'Die liute hœrent die rede.', model: 'Die Leute hören die Erzählung.', accepted: ['leute hören erzählung', 'leute hören geschichte', 'leute hören bericht', 'leute hören rede', 'leute hoeren erzählung', 'leute hören die erzählung'] },
    { id: 'e22', type: 'translate', dir: 'mhd-en', source: 'Mîn lîp ist swære.', model: 'My life is grievous. / I am heavy-hearted.', accepted: ['my life is heavy', 'my life is grievous', 'my life is hard', 'i am sad', 'i am heavy-hearted', 'i am sorrowful', 'my body is heavy', 'my life is sad', 'my life is sorrowful', 'i am heavy hearted'] },
    { id: 'e23', type: 'translate', dir: 'de-mhd', source: 'Mein Haus ist gut.', model: 'Mîn hûs ist guot.', accepted: ['mîn hûs ist guot'], explain: 'Mîn and hûs keep the long monophthongs that modern German diphthongised (mein, Haus); guot keeps the diphthong that became long u (gut).' },
    { id: 'e24', type: 'translate', dir: 'de-mhd', source: 'Die Leute suchen Gott.', model: 'Die liute suochent got.', accepted: ['die liute suochent got', 'liute suochent got'], explain: 'Liute (iu = long ü) became Leute; the present plural ends in -ent (suochent) where modern German has -en.' },
    { id: 'e25', type: 'mc', prompt: 'Normalised Middle High German spelling was created by:', options: ['19th-century editors such as Karl Lachmann', 'the scribes of the Codex Manesse', 'Martin Luther', 'the imperial chancery'], answer: 0, explain: 'It is an editorial reconstruction, not a medieval spelling.' }
  ],

  reading: {
    title: 'Hartmann von Aue, Der arme Heinrich, lines 1–28',
    note: 'Authentic text: the prologue, in the normalised spelling of the edition of Hermann Paul, revised by Gesa Bonath (15th edition, Tübingen 1984). Tap any word.',
    text: 'Ein ritter sô gelêret was\ndaz er an den buochen las\nswaz er dar an geschriben vant:\nder was Hartman genant,\ndienstman was er zOuwe.\ner nam im manige schouwe\nan mislîchen buochen:\ndar an begunde er suochen\nob er iht des vunde,\ndâ mite er swære stunde\nmöhte senfter machen,\nund von sô gewanten sachen,\ndaz gotes êren töhte\nund dâ mite er sich möhte\ngelieben den liuten.\nnu beginnet er iu diuten\nein rede die er geschriben vant.\ndar umbe hât er sich genant,\ndaz er sîner arbeit\ndie er dar an hât geleit\niht âne lôn belîbe,\nund swer nâch sînem lîbe\nsi hœre sagen ode lese,\ndaz er im bittende wese\nder sêle heiles hin ze gote.\nman giht, er sî sîn selbes bote\nund erlœse sich dâ mite,\nswer vür des andern schulde bite.',
    translations: [
      { label: 'German translation', text: 'Ein Ritter war so gelehrt, dass er in den Büchern las, was immer er darin geschrieben fand: Der hieß Hartmann, Dienstmann war er zu Aue. Er sah sich in verschiedenen Büchern um; darin begann er zu suchen, ob er etwas fände, womit er schwere Stunden erträglicher machen könnte, und von solcher Art Dingen, die der Ehre Gottes dienten und mit denen er sich bei den Leuten beliebt machen könnte. Nun beginnt er euch eine Geschichte zu erzählen, die er geschrieben fand. Darum hat er sich genannt, damit er für seine Mühe, die er darauf verwendet hat, nicht ohne Lohn bleibe, und damit jeder, der sie nach seinem Tod erzählen hört oder sie liest, für ihn das Heil seiner Seele von Gott erbitte. Man sagt, wer für die Schuld eines anderen bittet, sei sein eigener Bote und erlöse sich damit selbst.' },
      { label: 'English translation', text: 'There was a knight so learned that he read in books whatever he found written in them: he was called Hartmann, and he was a ministerial at Aue. He looked about him in books of many kinds; in them he began to search whether he might find anything with which he could make heavy hours easier to bear, and matter of such a kind as would serve God’s honour and with which he could make himself pleasing to people. Now he begins to tell you a story that he found written. That is why he has named himself, so that he should not go unrewarded for the labour he has spent on it, and so that whoever hears it told or reads it after his death should pray to God for the salvation of his soul. It is said that whoever prays for another’s guilt is his own messenger and redeems himself by it.' }
    ],
    notes: [
      { ref: 'Ein ritter sô gelêret was / daz er', html: '<span class="la">sô … daz</span>: “so … that”, exactly as German <em>so … dass</em>. Word order in verse is freer than in prose: the verb <span class="la">was</span> stands at the end for the rhyme with <span class="la">las</span>.' },
      { ref: 'swaz er dar an geschriben vant', html: '<span class="la">swaz</span>: “whatever”. <span class="la">dar an</span>: “in them”, i.e. in the books. <span class="la">vant</span>: past of <span class="la">vinden</span>, with final devoicing written: <em>fand</em>.' },
      { ref: 'der was Hartman genant', html: '<span class="la">der</span> is a demonstrative, “that one, he”. <span class="la">was … genant</span>: “was called”. The narrator names himself in the third person, a common modesty formula.' },
      { ref: 'er nam im manige schouwe', html: 'Literally “he took for himself many a look”: he looked through. <span class="la">im</span> is a reflexive dative, as in older German <em>er nahm sich</em>. <span class="la">manige</span> = <em>manche</em>, here “many”.' },
      { ref: 'ob er iht des vunde', html: '“whether he might find anything of the kind”. <span class="la">iht</span>: anything; <span class="la">des</span>: genitive, “of that”. <span class="la">vunde</span> is the past subjunctive, <em>fände</em>.' },
      { ref: 'möhte senfter machen', html: 'False friend: <span class="la">möhte</span> = <em>könnte</em>. <span class="la">senfter</span> is the comparative of <span class="la">senfte</span>, “sanft”.' },
      { ref: 'daz gotes êren töhte', html: '<span class="la">töhte</span>: past subjunctive of <span class="la">tugen</span>, “taugen, nützen”, with the dative <span class="la">gotes êren</span>, “for God’s honour”.' },
      { ref: 'gelieben den liuten', html: '“make himself pleasing to people”: <span class="la">sich gelieben</span> + dative. <span class="la">liute</span>, dative <span class="la">liuten</span>: <em>Leute</em>.' },
      { ref: 'nu beginnet er iu diuten / ein rede', html: '<span class="la">iu</span>: “euch”, the audience. <span class="la">diuten</span>: “deuten”, here “tell, set out”. <span class="la">rede</span>: “story”, a false friend.' },
      { ref: 'iht âne lôn belîbe', html: 'Subjunctive <span class="la">belîbe</span> after <span class="la">daz</span>: a purpose. <span class="la">iht</span> here has negative force (“not … at all”), as often in such clauses; the edition’s translation and the grammars read it as “that he should not remain unrewarded”. <span class="la">sîner arbeit</span> is a genitive, “for his labour”.' },
      { ref: 'swer nâch sînem lîbe / si hœre sagen ode lese', html: '<span class="la">nâch sînem lîbe</span>: “after his life”, after his death. <span class="la">si</span> is the story (<span class="la">rede</span>, feminine), object of <span class="la">hœre sagen</span> (“hear told”) and <span class="la">lese</span>. Hartmann expects both listeners and readers.' },
      { ref: 'man giht, er sî sîn selbes bote', html: '<span class="la">giht</span> from <span class="la">jëhen</span>, “say”. <span class="la">sî</span>: subjunctive, “sei”, in reported speech. The thought: whoever prays for another earns merit for himself, so he is “his own messenger” to God.' }
    ],
    glosses: {
      'ein': 'a, an; one', 'ritter': 'knight (Ritter)', 'sô': 'so', 'gelêret': 'learned, educated (gelehrt)', 'was': 'was (past of sîn)',
      'daz': 'that (dass; das)', 'er': 'he', 'an': 'in, on, at', 'den': 'the (dat. pl.)', 'buochen': 'books (dat. pl. of buoch)', 'las': 'read (past of lësen)',
      'swaz': 'whatever (was auch immer)', 'dar': 'there; dar an, in it, in them', 'geschriben': 'written (geschrieben)', 'vant': 'found (past of vinden: fand)',
      'der': 'that one, he (demonstrative); the', 'hartman': 'Hartmann', 'genant': 'named, called (past participle of nennen)',
      'dienstman': 'ministerial, a knight in a lord’s service (not Dienstmann, porter)', 'zouwe': 'ze Ouwe: at Aue (place unknown)',
      'nam': 'took (past of nëmen)', 'im': 'him; to/for himself (dat.)', 'manige': 'many a, many (manche)', 'schouwe': 'look, inspection (Schau)',
      'mislîchen': 'various (dat. pl. of mislîch)', 'begunde': 'began (past of beginnen)', 'suochen': 'seek, search (suchen)',
      'ob': 'whether, if (ob)', 'iht': 'anything; at all; (after daz, often) not', 'des': 'of it, of the kind (gen. of daz)', 'vunde': 'might find (past subjunctive of vinden: fände)',
      'dâ': 'there; dâ mite, with which, with it', 'mite': 'with (mit): dâ mite, damit', 'swære': 'heavy, grievous (schwer)', 'stunde': 'hours, times (acc. pl. of stunde)',
      'möhte': 'could (past subjunctive of mugen: könnte), not möchte', 'senfter': 'gentler, easier to bear (comparative of senfte, sanft)', 'machen': 'make',
      'und': 'and', 'von': 'of, about, from', 'gewanten': 'constituted, of such a kind (participle of wenden)', 'sachen': 'things, matters (dat. pl. of sache)',
      'gotes': 'of God (gen. of got)', 'êren': 'honour (dat. of êre: Ehre)', 'töhte': 'would serve, be fit for (past subjunctive of tugen: taugte)',
      'sich': 'himself', 'gelieben': 'make pleasing: sich gelieben + dat., make oneself liked by', 'liuten': 'people (dat. of liute: Leuten)',
      'nu': 'now', 'beginnet': 'begins (beginnt)', 'iu': 'you (dat. pl.: euch)', 'diuten': 'tell, set out, interpret (deuten)',
      'rede': 'story, account (not a speech)', 'die': 'which, that (relative); the', 'umbe': 'about: dar umbe, therefore (darum)', 'hât': 'has (hat)',
      'sîner': 'his (gen. of sîn); sîner arbeit, for his labour', 'arbeit': 'toil, effort, hardship (not a job)', 'geleit': 'laid, spent (participle of legen: gelegt)',
      'âne': 'without (ohne)', 'lôn': 'reward (Lohn)', 'belîbe': 'should remain (subjunctive of belîben: bleibe)',
      'swer': 'whoever (wer auch immer)', 'nâch': 'after (nach)', 'sînem': 'his (dat.)', 'lîbe': 'life (dat. of lîp): nâch sînem lîbe, after his death',
      'si': 'it, her (the story: sie)', 'hœre': 'should hear (subjunctive of hœren); hœre sagen, hear told', 'sagen': 'say, tell', 'ode': 'or (oder)', 'lese': 'should read (subjunctive of lësen)',
      'bittende': 'praying, asking (present participle of bitten)', 'wese': 'should be (subjunctive of wësen: sei)', 'sêle': 'soul (Seele)', 'heiles': 'salvation (gen. of heil)',
      'hin': 'towards: hin ze gote, to God', 'ze': 'to, at (zu)', 'gote': 'God (dat. of got)',
      'man': 'one, people (man)', 'giht': 'says (3rd sg. of jëhen)', 'sî': 'is, be (subjunctive of sîn: sei)', 'sîn': 'his; (verb) be', 'selbes': 'own: sîn selbes, his own (gen. of selp)', 'bote': 'messenger (Bote)',
      'erlœse': 'redeems, frees (subjunctive of erlœsen: erlöse)', 'vür': 'for (für)', 'andern': 'other (gen.): des andern, of the other', 'schulde': 'guilt (Schuld)', 'bite': 'should pray, ask (subjunctive of bitten)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What does Hartmann say about himself?', options: ['He was a knight who could read, a ministerial at Aue', 'He was a monk at Aue', 'He was a lord of Aue', 'He was a clerk who could not read'], answer: 0, explain: 'Ein ritter sô gelêret was … dienstman was er zOuwe.' },
      { id: 'r2', type: 'mc', prompt: 'What was he looking for in the books?', options: ['Something to make hard times easier and to honour God', 'A cure for leprosy', 'The law of his lord', 'A lost manuscript'], answer: 0, explain: 'dâ mite er swære stunde möhte senfter machen … daz gotes êren töhte.' },
      { id: 'r3', type: 'mc', prompt: 'Why does he give his name?', options: ['So that his effort is rewarded by the prayers of his audience', 'To claim payment from his lord', 'To prove the story is true', 'Because the law required it'], answer: 0, explain: 'daz er sîner arbeit … iht âne lôn belîbe; the reward is a prayer for his soul.' },
      { id: 'r4', type: 'mc', prompt: 'In <span class="la">si hœre sagen ode lese</span>, who are the audience?', options: ['Listeners and readers', 'Only readers', 'Only monks', 'Only knights'], answer: 0, explain: 'hœre sagen: hear it told; lese: read it.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">fiur</span> became modern German:', options: ['Feuer', 'vier', 'Fuhre', 'Feier'], answer: 0, explain: 'iu → eu.' },
      { id: 't2', type: 'mc', prompt: 'Modern German <em>Blut</em> in Middle High German:', options: ['bluot', 'blût', 'blout', 'bliut'], answer: 0, explain: 'Modern long u often comes from uo.' },
      { id: 't3', type: 'mc', prompt: 'Which pair rhymed in Middle High German?', options: ['mîn : sîn', 'mîn : stein', 'hûs : ouge', 'lieb : lîp'], answer: 0, explain: 'î and ei were different sounds.' },
      { id: 't4', type: 'mc', prompt: '<span class="la">nâch sînem lîbe</span> means:', options: ['after his death', 'near his body', 'according to his wish', 'for his love'], answer: 0, explain: 'lîp: life; “after his life”.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Die liute suoch___ got.</span>', hint: 'they seek', answers: ['ent'], full: 'Die liute suochent got.', explain: '3rd person plural -ent.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">Du ___ mîn vriunt.</span>', hint: 'are', answers: ['bist'], full: 'Du bist mîn vriunt.', explain: 'As in modern German.' },
      { id: 't7', type: 'translate', dir: 'mhd-de', source: 'Der ritter list ein buoch.', model: 'Der Ritter liest ein Buch.', accepted: ['ritter liest buch', 'ritter liest ein buch', 'der ritter liest ein buch'] },
      { id: 't8', type: 'translate', dir: 'de-mhd', source: 'Mein Haus', model: 'mîn hûs', accepted: ['mîn hûs'], explain: 'Î and û are long monophthongs, later diphthongised to ei and au: mîn hûs > mein Haus.' },
      { id: 't9', type: 'mc', prompt: '<span class="la">er sî</span> is:', options: ['present subjunctive: er sei', 'present indicative: er ist', 'past: er war', 'the pronoun sie'], answer: 0, explain: 'sî is the subjunctive of sîn.' },
      { id: 't10', type: 'mc', prompt: 'A <span class="la">dienstman</span> was:', options: ['an unfree knight in a lord’s service', 'a railway porter', 'a household servant', 'a paid soldier'], answer: 0, explain: 'Latin ministerialis.' },
      { id: 't11', type: 'mc', prompt: 'How was MHG <span class="la">v</span> in <span class="la">vür</span> pronounced?', options: ['f', 'v as in English', 'w', 'u'], answer: 0, explain: 'As in modern Vater.' }
    ]
  },

  reference: [
    { title: 'Vowels: Middle High German → modern German', headers: ['MHG', 'Modern', 'Example'], rows: [
      ['î', 'ei', 'mîn → mein'], ['û', 'au', 'hûs → Haus'], ['iu', 'eu, äu', 'liute → Leute'],
      ['ie', 'ie (long i)', 'lieb → lieb'], ['uo', 'u (long)', 'guot → gut'], ['üe', 'ü (long)', 'müede → müde'],
      ['ei', 'ei', 'stein → Stein'], ['ou', 'au', 'ouge → Auge'], ['short vowel, open syllable', 'long', 'sagen, geschriben → geschrieben']
    ] },
    { title: 'Consonants', headers: ['MHG', 'Modern', 'Example'], rows: [
      ['v-', 'f-, v-', 'vür → für'], ['sw-, sl-, sm-, sn-', 'schw-, schl-, …', 'swære → schwer'], ['-h- before consonant', 'ch', 'niht → nicht'],
      ['-c, -p, -t (final)', 'g, b, d', 'tac → Tag'], ['z, ʒ after vowel', 's, ss, ß', 'daz → dass/das']
    ] },
    { title: 'Present of suochen and sîn', headers: ['', 'suochen', 'sîn'], rows: [
      ['ich', 'suoche', 'bin'], ['du', 'suochest', 'bist'], ['ër, si, ëz', 'suochet', 'ist'], ['wir', 'suochen', 'birn, sîn'], ['ir', 'suochet', 'birt, sît'], ['si', 'suochent', 'sint']
    ] }
  ]
});
