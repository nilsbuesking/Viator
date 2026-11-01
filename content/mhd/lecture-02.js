/*
 * Middle High German — Lecture II: strong verbs and the ablaut series.
 * Reading: Walther von der Vogelweide, "Under der linden" (L 39,11), normalised text
 * in the Lachmann tradition, as supplied by Nils (edition to be confirmed; see CONTENT-CHECKS.md).
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('mhd', {
  id: 'mhd-02',
  number: 2,
  title: 'Under der linden',
  subtitle: 'Strong verbs and the ablaut series; the preterite and its subjunctive; Walther’s most famous song',
  minutes: 60,

  intro: `
    <p>German still has two kinds of verb. <em>machen, machte, gemacht</em> forms its past with a suffix; <em>singen, sang, gesungen</em> changes its vowel. The second kind, the <strong>strong verbs</strong>, are the oldest layer of the Germanic verb, and in Middle High German they are both more numerous and more varied than today.</p>
    <p>The key difference from modern German is that the preterite had <strong>two stems</strong>: one for the singular and one for the plural. <span class="la">ich sanc</span>, but <span class="la">wir sungen</span>; <span class="la">ër reit</span>, but <span class="la">wir riten</span>; <span class="la">ër was</span>, but <span class="la">wir wâren</span>. Modern German has kept a trace of this in only a handful of forms, but once you know the pattern, Middle High German past tenses stop being puzzles.</p>
    <p>The reading is Walther von der Vogelweide’s <em>Under der linden</em>, probably the best-known medieval German poem. It is spoken by a woman remembering a night with her lover under a lime tree, and its past tenses (<span class="la">sanc, kam, wart, lac</span>) and past subjunctives (<span class="la">læge, pflæge</span>) make it an ideal text for this lecture.</p>
    <p>By the end you should be able to recognise the seven ablaut series, give the four principal parts of the common strong verbs, form the preterite and the past subjunctive, and read the whole song with the glosses.</p>
  `,

  background: [
    {
      title: 'Minnesang and a song in a woman’s voice',
      html: `
        <p><em>Minnesang</em>, the courtly love song, came to the German courts in the second half of the 12th century, under the influence of the troubadours and trouvères of France. Its central form is the song of <em>hôhe minne</em>, “high love”: a man serves a lady of higher rank who does not, and should not, return his love. The singer’s suffering is the subject, and the value of the service lies in the discipline it imposes.</p>
        <p><em>Under der linden</em> is quite different. The speaker is a woman, the love is returned and fulfilled, and the setting is outdoors, on a heath by a wood. Scholars group a number of Walther’s songs with this kind of mutual love as <em>Mädchenlieder</em> or songs of <em>niedere minne</em>, but both labels and the grouping itself are debated. The text never says who the woman is. Some readers take her for a girl of low rank, on the model of the French <em>pastourelle</em>, where a knight meets a shepherdess; others note that nothing in the song marks her status, and that her exclamation <span class="la">hêre frouwe</span> may even suggest the opposite (see the reading notes).</p>
        <p>The song survives in two manuscripts, the Weingarten song manuscript (B) and the Codex Manesse (C), both from the decades around 1300. As far as is known, no melody for it survives in the manuscripts; modern performances use reconstructions or adapted tunes.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tanzlinde_in_Effeltrich,_7.jpg/960px-Tanzlinde_in_Effeltrich,_7.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Tanzlinde_in_Effeltrich,_7.jpg/500px-Tanzlinde_in_Effeltrich,_7.jpg|https://upload.wikimedia.org/wikipedia/commons/c/c5/Tanzlinde_in_Effeltrich,_7.jpg" alt="A large old lime tree with its branches trained outwards on a supporting frame"><figcaption>The Tanzlinde of Effeltrich in Upper Franconia: an old village lime whose branches were trained flat on a frame, so that a dancing floor could be laid among them. Trees like this kept the lime’s role as a meeting place into modern times. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Tanzlinde_in_Effeltrich,_7.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Linden, heide and nahtegal',
      html: `
        <p>The opening words build a scene every medieval listener would recognise. The lime tree (<span class="la">linde</span>) stood at the centre of many villages and estates: it was a place of meeting and dancing, and in some places of courts of law. Many German villages still have a <em>Dorflinde</em> or <em>Tanzlinde</em>.</p>
        <p><span class="la">heide</span> is a false friend of a gentle kind. It means open, uncultivated land, not necessarily heather moor like the Lüneburger Heide; “heath” in the old English sense fits it well. The <span class="la">nahtegal</span> is the bird of love poetry across Europe, and the nonsense refrain <span class="la">tandaradei</span> is usually understood as an imitation of its song.</p>
        <p>The song uses the setting of nature poetry but gives it a twist: the bird is the only witness, and the last stanza turns it into a discreet confidant.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Nachtigall_(Luscinia_megarhynchos).jpg/960px-Nachtigall_(Luscinia_megarhynchos).jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Nachtigall_(Luscinia_megarhynchos).jpg/500px-Nachtigall_(Luscinia_megarhynchos).jpg|https://upload.wikimedia.org/wikipedia/commons/7/7b/Nachtigall_(Luscinia_megarhynchos).jpg" alt="A small brown songbird perched on a branch"><figcaption>The nightingale (<em>Luscinia megarhynchos</em>), Walther’s <span class="la">nahtegal</span>. It sings by night as well as by day, hence the name: Old High German <span class="la">nahtagala</span>, “night singer”. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Nachtigall_(Luscinia_megarhynchos).jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Ablaut: why strong verbs change their vowels',
      html: `
        <p>Vowel alternation as a way of marking tense goes back to Indo-European, where the same root appeared in different grades: with <em>e</em>, with <em>o</em>, or with no vowel at all. Latin shows traces of it (<span class="la">tegō</span> “cover” beside <span class="la">toga</span>), and Greek more. Germanic made it the backbone of its verb system, and grammarians since Jacob Grimm, who coined the term <em>Ablaut</em>, have sorted the Germanic strong verbs into seven series according to their vowels.</p>
        <p>The weak verbs, with their dental suffix (<span class="la">-te</span>, modern <em>-te</em>, English <em>-ed</em>), are a Germanic innovation. They were the productive type: almost all new verbs, including loans such as <span class="la">turnieren</span> from French, are weak. Over the centuries many strong verbs have become weak (<span class="la">bellen, bal</span> → bellte), and hardly any weak verbs have become strong.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Vor dem walde in einem tal,<br>tandaradei,<br>schône sanc diu nahtegal.</p>
    <p>“Before the wood, in a valley, tandaradei, the nightingale sang beautifully.” Walther von der Vogelweide, <em>Under der linden</em>, stanza 1 (cited by the page and line of Lachmann’s edition: L 39,11).</p>
    <p><span class="la">sanc</span> is the preterite singular of <span class="la">singen</span>; the plural is <span class="la">sungen</span>, and the participle <span class="la">gesungen</span>. The final <span class="la">-c</span> shows the devoicing of <span class="la">g</span> at the end of a word, as in <span class="la">tac</span>, <span class="la">tages</span>. <span class="la">diu</span> is the feminine article, “die”.</p>
  `,

  pronunciation: `
    <p>The rhymes of the song are a small lesson in reconstructed pronunciation, because a poet of Walther’s skill rhymed exactly.</p>
    <ul>
      <li><span class="la">ê : mê</span> and <span class="la">rîche : inneclîche</span>: long vowels rhyme with long vowels.</li>
      <li><span class="la">ouwe : frouwe</span>: the diphthong <span class="la">ou</span>, later <em>au</em> (Aue, Frau).</li>
      <li><span class="la">tûsentstunt : munt</span>: the second part of a compound carries a secondary stress strong enough to rhyme.</li>
      <li><span class="la">læge : pflæge</span>: <span class="la">æ</span> is a long open e, as in modern <em>Käse</em> in careful speech.</li>
      <li><span class="la">vogellîn : sîn</span>: the diminutive <span class="la">-lîn</span> has a long <em>i</em>; it became <em>-lein</em> by diphthongisation.</li>
    </ul>
    <h3>tandaradei</h3>
    <p>Usually read with the stress on the last syllable, <em>tan-da-ra-DEI</em>, falling on the beat of the verse. The <span class="la">ei</span> is the old diphthong, <em>e</em> + <em>i</em>.</p>
    <h3>pf and enpf-</h3>
    <p><span class="la">pfat</span> and <span class="la">enpfangen</span> have the <em>pf</em> of the High German consonant shift (Low German <em>pat</em>, English <em>path</em>). <span class="la">enpfangen</span> is spelt with <em>n</em> before <em>pf</em>, as the prefix <span class="la">ent-</span> was; modern German has <em>empfangen</em>.</p>
  `,

  grammar: [
    {
      title: '1. Strong and weak verbs',
      html: `
        <p>As in modern German, a verb is <strong>weak</strong> if it forms its preterite with <span class="la">-te</span> (<span class="la">machen, machte, gemachet</span>) and <strong>strong</strong> if it changes its stem vowel (<span class="la">singen, sanc, gesungen</span>). The terms are Grimm’s: the strong verbs manage “by their own strength”, without a suffix.</p>
        <p>Strong verbs also have a participle in <span class="la">-en</span>, and no ending in the 1st and 3rd person singular of the preterite: <span class="la">ich sanc, ër sanc</span>, as modern <em>ich sang, er sang</em>.</p>
        <p>Most verbs that are strong today were strong then, but not all verbs that were strong then are strong today. When a Middle High German verb looks odd in the past, the dictionary’s principal parts are the first thing to check.</p>
      `
    },
    {
      title: '2. Four principal parts',
      html: `
        <p>A Middle High German strong verb has four principal parts, because the preterite singular and plural have different vowels:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Infinitive</th><th>Pret. sg. (ich, ër)</th><th>Pret. pl. (wir, si)</th><th>Participle</th></tr></thead>
          <tbody>
            <tr><td class="la">rîten</td><td class="la">reit</td><td class="la">riten</td><td class="la">geriten</td></tr>
            <tr><td class="la">singen</td><td class="la">sanc</td><td class="la">sungen</td><td class="la">gesungen</td></tr>
            <tr><td class="la">gëben</td><td class="la">gap</td><td class="la">gâben</td><td class="la">gegëben</td></tr>
            <tr><td class="la">wërden</td><td class="la">wart</td><td class="la">wurden</td><td class="la">worden</td></tr>
          </tbody>
        </table></div>
        <p>Modern German has levelled the two stems, usually to the singular (<em>ich sang, wir sangen</em>), sometimes to the plural (<em>ich ritt, wir ritten</em>, from <span class="la">riten</span>). Two relics survive:</p>
        <ul>
          <li><em>ward</em> beside <em>wurde</em>: the old singular <span class="la">wart</span> and the old plural <span class="la">wurden</span>, now competing for the same job.</li>
          <li>Subjunctives like <em>stürbe, hülfe, würfe</em>: formed from the old plural vowel <span class="la">u</span> (<span class="la">sturben, hulfen, wurfen</span>), which is why they do not match <em>starb, half, warf</em>.</li>
        </ul>
      `
    },
    {
      title: '3. The seven ablaut series',
      html: `
        <p>The vowel patterns fall into seven classes. Learn one model verb for each; the others follow.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Infinitive</th><th>Pret. sg.</th><th>Pret. pl.</th><th>Participle</th><th>Modern</th></tr></thead>
          <tbody>
            <tr><th>I</th><td class="la">rîten</td><td class="la">reit</td><td class="la">riten</td><td class="la">geriten</td><td>reiten</td></tr>
            <tr><th>II</th><td class="la">bieten</td><td class="la">bôt</td><td class="la">buten</td><td class="la">geboten</td><td>bieten</td></tr>
            <tr><th>III</th><td class="la">binden</td><td class="la">bant</td><td class="la">bunden</td><td class="la">gebunden</td><td>binden</td></tr>
            <tr><th></th><td class="la">hëlfen</td><td class="la">half</td><td class="la">hulfen</td><td class="la">geholfen</td><td>helfen</td></tr>
            <tr><th>IV</th><td class="la">nëmen</td><td class="la">nam</td><td class="la">nâmen</td><td class="la">genomen</td><td>nehmen</td></tr>
            <tr><th>V</th><td class="la">gëben</td><td class="la">gap</td><td class="la">gâben</td><td class="la">gegëben</td><td>geben</td></tr>
            <tr><th>VI</th><td class="la">varn</td><td class="la">vuor</td><td class="la">vuoren</td><td class="la">gevarn</td><td>fahren</td></tr>
            <tr><th>VII</th><td class="la">vallen</td><td class="la">viel</td><td class="la">vielen</td><td class="la">gevallen</td><td>fallen</td></tr>
          </tbody>
        </table></div>
        <ul>
          <li><strong>I</strong>: <span class="la">î – ei – i – i</span>. Also <span class="la">schrîben, belîben, snîden</span>. Before <span class="la">h</span> and <span class="la">w</span> the singular has <span class="la">ê</span>: <span class="la">zîhen, zêch</span>.</li>
          <li><strong>II</strong>: <span class="la">ie – ou/ô – u – o</span>. <span class="la">ô</span> before <em>t, d, z, s, h</em> (<span class="la">bôt, zôch</span>), otherwise <span class="la">ou</span> (<span class="la">biegen, bouc</span>).</li>
          <li><strong>III</strong>: a nasal or liquid + consonant after the vowel. With nasal: <span class="la">i – a – u – u</span> (<span class="la">singen, vinden</span>); with <em>l, r</em>: <span class="la">ë – a – u – o</span> (<span class="la">hëlfen, wërden</span>).</li>
          <li><strong>IV</strong>: one liquid or nasal after the vowel; long <span class="la">â</span> in the plural: <span class="la">brëchen, brach, brâchen, gebrochen</span>; <span class="la">komen, kam, kâmen, komen</span>.</li>
          <li><strong>V</strong>: other single consonants; participle with <span class="la">ë</span>: <span class="la">lësen, ligen, pflëgen, sëhen, wësen</span>.</li>
          <li><strong>VI</strong>: <span class="la">a – uo – uo – a</span>: <span class="la">graben, slahen, tragen</span>.</li>
          <li><strong>VII</strong>: the old reduplicating verbs; preterite in <span class="la">ie</span>: <span class="la">lâzen, liez</span>; <span class="la">heizen, hiez</span>; <span class="la">loufen, lief</span>.</li>
        </ul>
        <p>Series IV and V share the long <span class="la">â</span> of the plural, which is where modern <em>nahmen, gaben</em> got their long vowel.</p>
      `
    },
    {
      title: '4. Preterite endings and the past subjunctive',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Indicative</th><th>Subjunctive</th><th>Modern</th></tr></thead>
          <tbody>
            <tr><th>ich</th><td class="la">sanc</td><td class="la">sünge</td><td>sang · sänge</td></tr>
            <tr><th>du</th><td class="la">sunge</td><td class="la">süngest</td><td>sangst · sängest</td></tr>
            <tr><th>ër</th><td class="la">sanc</td><td class="la">sünge</td><td>sang · sänge</td></tr>
            <tr><th>wir</th><td class="la">sungen</td><td class="la">süngen</td><td>sangen · sängen</td></tr>
            <tr><th>ir</th><td class="la">sunget</td><td class="la">sünget</td><td>sangt · sänget</td></tr>
            <tr><th>si</th><td class="la">sungen</td><td class="la">süngen</td><td>sangen · sängen</td></tr>
          </tbody>
        </table></div>
        <p>Two points to watch:</p>
        <ul>
          <li><strong>The 2nd person singular</strong> uses the plural stem with <span class="la">-e</span>, and umlaut where possible: <span class="la">du sunge, du gæbe, du wære, du næme</span>. It looks like a subjunctive but is an ordinary indicative: “you sang, you gave, you were”.</li>
          <li><strong>The past subjunctive</strong> is built on the plural stem with umlaut: <span class="la">sungen → sünge</span>, <span class="la">lâgen → læge</span>, <span class="la">pflâgen → pflæge</span>, <span class="la">wâren → wære</span>. Modern Konjunktiv II works the same way (<em>läge, wäre</em>). In the song: <span class="la">Daz er bî mir læge</span>, “that he lay with me”, a subjunctive because it is a hypothesis: if anyone knew.</li>
        </ul>
      `
    },
    {
      title: '5. Grammatical change',
      html: `
        <p>In some strong verbs the consonant changes as well as the vowel: <span class="la">wësen, was, wâren</span>; <span class="la">snîden, sneit, sniten, gesniten</span>; <span class="la">ziehen, zôch, zugen, gezogen</span>; <span class="la">kiesen, kôs, kurn, gekorn</span>. This is <em>grammatischer Wechsel</em>. It goes back to Verner’s law: in early Germanic the consonant was voiced or unvoiced depending on where the stress fell, and the stress fell differently in different forms of the verb.</p>
        <p>Modern German keeps many of these alternations: <em>war – gewesen</em>, <em>schneiden – geschnitten</em>, <em>ziehen – gezogen</em>, <em>erkoren</em> (from <span class="la">kiesen</span>, “choose”), <em>verlieren – verloren</em>. Middle High German has more of them, so a past form with an unexpected <span class="la">r</span>, <span class="la">t</span> or <span class="la">g</span> may still belong to a verb you know.</p>
      `
    },
    {
      title: '6. Participles without ge-, and contracted forms',
      html: `
        <p>A few very common verbs form their participle without <span class="la">ge-</span>, because their meaning is already completed in itself: <span class="la">komen</span> (gekommen), <span class="la">vunden</span>, <span class="la">worden</span>, <span class="la">brâht</span>. In the song: <span class="la">dô was mîn friedel komen ê</span>, “my lover had come before” (the pluperfect, with <span class="la">sîn</span>, as in modern German). Modern German keeps the bare form only in the passive: <em>es ist gesagt worden</em>.</p>
        <p>Song and speech run words together. These contractions (<em>enclitic</em> forms) are common in verse:</p>
        <ul>
          <li><span class="la">kuster</span> = <span class="la">kuste ër</span>, “did he kiss”</li>
          <li><span class="la">mirz</span> = <span class="la">mir daz</span></li>
          <li><span class="la">wessez</span> = <span class="la">wesse ëz</span>, “(if anyone) knew it”</li>
          <li><span class="la">enwelle</span> = <span class="la">en welle</span>: the negative particle <span class="la">en-</span> + the subjunctive of <span class="la">wellen</span>, “want”</li>
        </ul>
        <p>When a word in verse makes no sense, try splitting off a pronoun at the end or a negative particle at the start.</p>
      `
    }
  ],

  vocab: [
    // nouns
    { id: 'linde', head: 'linde', la: 'linde', g: 'f', pos: 'noun', en: 'lime tree, linden', de: 'Linde' },
    { id: 'heide', head: 'heide', la: 'heide', g: 'f', pos: 'noun', en: 'heath, open uncultivated land', de: 'Heide, unbebautes Land', note: 'Not necessarily heather moor.' },
    { id: 'bette', head: 'bette', la: 'bette', g: 'n', pos: 'noun', en: 'bed', de: 'Bett' },
    { id: 'bluome', head: 'bluome', la: 'bluome', g: 'm', pos: 'noun', en: 'flower', de: 'Blume', note: 'Masculine and feminine both occur.' },
    { id: 'walt', head: 'walt', la: 'walt, waldes', g: 'm', pos: 'noun', en: 'wood, forest', de: 'Wald', note: 'Final devoicing: walt, but waldes.' },
    { id: 'tal', head: 'tal', la: 'tal', g: 'n', pos: 'noun', en: 'valley', de: 'Tal' },
    { id: 'nahtegal', head: 'nahtegal', la: 'nahtegal', g: 'f', pos: 'noun', en: 'nightingale', de: 'Nachtigall', note: 'naht + galan, “sing”: the night singer.' },
    { id: 'ouwe', head: 'ouwe', la: 'ouwe', g: 'f', pos: 'noun', en: 'meadow by water, river meadow', de: 'Aue' },
    { id: 'friedel', head: 'friedel', la: 'friedel, vriedel', g: 'm', pos: 'noun', en: 'lover, sweetheart', de: 'Geliebter', note: 'Related to vride (peace) and vriunt (friend).' },
    { id: 'munt', head: 'munt', la: 'munt, mundes', g: 'm', pos: 'noun', en: 'mouth', de: 'Mund' },
    { id: 'houbet', head: 'houbet', la: 'houbet', g: 'n', pos: 'noun', en: 'head', de: 'Haupt, Kopf', note: 'ou → au: Haupt.' },
    { id: 'pfat', head: 'pfat', la: 'pfat', g: 'm', pos: 'noun', en: 'path', de: 'Pfad', note: 'Also neuter.' },
    // strong verbs
    { id: 'singen', head: 'singen', la: 'singen, sanc, sungen, gesungen', pos: 'verb, strong III', en: 'sing', de: 'singen' },
    { id: 'vinden2', head: 'vinden', la: 'vinden, vant, vunden, vunden', pos: 'verb, strong III', en: 'find', de: 'finden', note: 'Participle usually without ge-.' },
    { id: 'werden', head: 'wërden', la: 'wërden, wart, wurden, worden', pos: 'verb, strong III', en: 'become; (with participle) be (passive)', de: 'werden', note: 'wart ich enpfangen: ich wurde empfangen.' },
    { id: 'brechen', head: 'brëchen', la: 'brëchen, brach, brâchen, gebrochen', pos: 'verb, strong IV', en: 'break; pick (flowers)', de: 'brechen; pflücken' },
    { id: 'komen', head: 'komen', la: 'komen, kam (quam), kâmen, komen', pos: 'verb, strong IV', en: 'come', de: 'kommen', note: 'Participle without ge-.' },
    { id: 'ligen', head: 'ligen', la: 'ligen, lac, lâgen, gelëgen', pos: 'verb, strong V', en: 'lie, be lying', de: 'liegen', note: 'Subjunctive læge: läge.' },
    { id: 'pflegen', head: 'pflëgen', la: 'pflëgen, pflac, pflâgen, gepflëgen', pos: 'verb, strong V', en: 'take care of; be accustomed to; do, engage in (+ gen.)', de: 'pflegen; sich abgeben mit', note: 'Wes er mit mir pflæge: what he did with me.' },
    { id: 'riten', head: 'rîten', la: 'rîten, reit, riten, geriten', pos: 'verb, strong I', en: 'ride', de: 'reiten' },
    { id: 'bieten', head: 'bieten', la: 'bieten, bôt, buten, geboten', pos: 'verb, strong II', en: 'offer; command', de: 'bieten; gebieten' },
    { id: 'geben', head: 'gëben', la: 'gëben, gap, gâben, gegëben', pos: 'verb, strong V', en: 'give', de: 'geben' },
    { id: 'varn', head: 'varn', la: 'varn, vuor, vuoren, gevarn', pos: 'verb, strong VI', en: 'go, travel', de: 'fahren; gehen, reisen', note: 'Any kind of travel, on foot too.' },
    { id: 'lazen', head: 'lâzen', la: 'lâzen, liez, liezen, gelâzen', pos: 'verb, strong VII', en: 'let; leave', de: 'lassen; verlassen' },
    // weak and other
    { id: 'merken', head: 'merken', la: 'merken', pos: 'verb, weak', en: 'notice, perceive', de: 'bemerken, erkennen' },
    { id: 'wizzen', head: 'wizzen', la: 'wizzen (ich weiz; wisse, wesse)', pos: 'verb, preterite-present', en: 'know', de: 'wissen', note: 'wesse: wusste; also past subjunctive, wüsste.' },
    { id: 'saelic', head: 'sælic', la: 'sælic', pos: 'adjective', en: 'blessed, happy', de: 'selig, glücklich' },
    { id: 'getriuwe', head: 'getriuwe', la: 'getriuwe', pos: 'adjective', en: 'loyal, faithful, trustworthy', de: 'treu, verlässlich', note: 'triuwe, loyalty, is one of the central courtly virtues.' },
    { id: 'iemer', head: 'iemer', la: 'iemer, iemer mê', pos: 'adverb', en: 'always, ever; iemer mê: for evermore', de: 'immer; für immer' },
    { id: 'iemen', head: 'iemen', la: 'iemen; niemen', pos: 'pronoun', en: 'anyone, someone; nobody', de: 'jemand; niemand' },
    { id: 'do', head: 'dô', la: 'dô', pos: 'adverb; conjunction', en: 'then; when (in the past)', de: 'da, damals; als' },
    { id: 'wan', head: 'wan', la: 'wan', pos: 'conjunction', en: 'except, but; for, because', de: 'außer; denn' }
  ],

  grammarCards: [
    { id: 'mh2-four', front: 'Why do MHG strong verbs have four principal parts?', back: 'The preterite singular and plural have different vowels: sanc, sungen.' },
    { id: 'mh2-I', front: 'Series I model', back: 'rîten, reit, riten, geriten' },
    { id: 'mh2-II', front: 'Series II model', back: 'bieten, bôt, buten, geboten' },
    { id: 'mh2-III', front: 'Series III models', back: 'binden, bant, bunden, gebunden; hëlfen, half, hulfen, geholfen' },
    { id: 'mh2-IV', front: 'Series IV model', back: 'nëmen, nam, nâmen, genomen' },
    { id: 'mh2-V', front: 'Series V model', back: 'gëben, gap, gâben, gegëben' },
    { id: 'mh2-VI', front: 'Series VI model', back: 'varn, vuor, vuoren, gevarn' },
    { id: 'mh2-VII', front: 'Series VII model', back: 'vallen, viel, vielen, gevallen (preterite in ie)' },
    { id: 'mh2-du', front: 'du sunge, du gæbe: what form?', back: 'Preterite indicative, 2nd sg.: you sang, you gave (plural stem + e)' },
    { id: 'mh2-subj', front: 'How is the past subjunctive formed?', back: 'Plural stem with umlaut + e: sungen → sünge, lâgen → læge' },
    { id: 'mh2-ward', front: 'Which modern pair preserves the old sg./pl. preterite?', back: 'ward / wurde (wart / wurden)' },
    { id: 'mh2-stuerbe', front: 'Why stürbe, hülfe, not stärbe, hälfe?', back: 'Konjunktiv II from the old plural vowel u: sturben, hulfen' },
    { id: 'mh2-gw', front: 'Grammatischer Wechsel: examples', back: 'wësen/wâren, snîden/sniten, ziehen/zugen, kiesen/kurn (erkoren)' },
    { id: 'mh2-komen', front: 'dô was mîn friedel komen ê', back: 'my lover had come before (participle without ge-)' },
    { id: 'mh2-kuster', front: 'kuster', back: 'kuste ër: did he kiss' },
    { id: 'mh2-mirz', front: 'mirz; wessez', back: 'mir daz; wesse ëz (if anyone knew it)' },
    { id: 'mh2-en', front: 'nû enwelle got!', back: 'God forbid! (en- negative particle + subjunctive welle)' },
    { id: 'mh2-heide', front: 'heide means …', back: 'open, uncultivated land; not necessarily heather moor' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'The preterite plural of <span class="la">singen</span> is:', options: ['sungen', 'sangen', 'singten', 'gesungen'], answer: 0, explain: 'Series III: singen, sanc, sungen, gesungen.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">wir riten</span> means:', options: ['we rode', 'we ride', 'we advised', 'we tore'], answer: 0, explain: 'Series I: rîten, reit, riten. The plural vowel survives in modern ritten.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">lac</span> is the preterite of:', options: ['ligen', 'lachen', 'lâzen', 'lësen'], answer: 0, explain: 'Series V: ligen, lac, lâgen, gelëgen.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">du gæbe</span> is:', options: ['preterite indicative: you gave', 'present subjunctive: you may give', 'imperative: give!', 'past subjunctive only'], answer: 0, explain: 'The 2nd sg. preterite uses the plural stem + e, with umlaut.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Daz er bî mir læge</span>: <span class="la">læge</span> is', options: ['past subjunctive of ligen', 'present of legen', 'preterite indicative', 'a noun'], answer: 0, explain: 'lâgen → læge: plural stem with umlaut.' },
    { id: 'e6', type: 'mc', prompt: 'Modern <em>stürbe</em> (not *stärbe) preserves:', options: ['the old plural vowel u', 'a Low German form', 'a spelling mistake', 'the infinitive vowel'], answer: 0, explain: 'sterben, starb, sturben, gestorben: Konjunktiv II from sturben.' },
    { id: 'e7', type: 'mc', prompt: '<span class="la">kuster mich?</span> means:', options: ['did he kiss me?', 'the custodian, me?', 'kiss me!', 'he kisses me'], answer: 0, explain: 'kuster = kuste ër.' },
    { id: 'e8', type: 'mc', prompt: '<span class="la">wesen – was – wâren</span> shows:', options: ['grammatical change (Verner’s law)', 'diphthongisation', 'the High German consonant shift', 'final devoicing'], answer: 0, explain: 's alternates with r: modern war, waren beside gewesen.' },
    { id: 'e9', type: 'match', prompt: 'Match the infinitives to their preterite singular.', pairs: [
      ['rîten', 'reit'], ['bieten', 'bôt'], ['vinden', 'vant'], ['varn', 'vuor'], ['lâzen', 'liez']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the contracted forms.', pairs: [
      ['kuster', 'kuste ër'], ['mirz', 'mir daz'], ['wessez', 'wesse ëz'], ['enwelle', 'en welle'], ['zOuwe', 'ze Ouwe']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Diu nahtegal sanc; die vogele s___ngen.</span>', hint: 'they sang', answers: ['u'], full: 'die vogele sungen', explain: 'Plural stem u.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Er reit; wir r___ten.</span>', hint: 'we rode', answers: ['i'], full: 'wir riten', explain: 'Series I: plural with short i.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Er nam; wir n___men.</span>', hint: 'we took (long vowel)', answers: ['â', 'a'], full: 'wir nâmen', explain: 'Series IV: long â in the plural.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Ich ___ ein buoch.</span>', hint: 'I found (vinden)', answers: ['vant'], full: 'Ich vant ein buoch.', explain: 'Series III, with final devoicing: vant.' },
    { id: 'e15', type: 'gap', prompt: '<span class="la">Dô ___ ich enpfangen.</span>', hint: 'was (passive: wurde)', answers: ['wart'], full: 'Dô wart ich enpfangen.', explain: 'wërden, wart, wurden, worden.' },
    { id: 'e16', type: 'paradigm', prompt: 'Give the preterite indicative of <span class="la">singen</span>.', headers: ['Form'], rows: [
      { label: 'ich', answers: ['sanc'] },
      { label: 'du', answers: ['sunge'] },
      { label: 'ër', answers: ['sanc'] },
      { label: 'wir', answers: ['sungen'] },
      { label: 'ir', answers: ['sunget'] },
      { label: 'si (pl.)', answers: ['sungen'] }
    ] },
    { id: 'e17', type: 'paradigm', prompt: 'Give the other principal parts: preterite singular, preterite plural, participle.', headers: ['Pret. sg.', 'Pret. pl.', 'Participle'], rows: [
      { label: 'rîten', answers: ['reit', 'riten', 'geriten'] },
      { label: 'bieten', answers: ['bôt', 'buten', 'geboten'] },
      { label: 'gëben', answers: ['gap', 'gâben', 'gegëben|gegeben'] }
    ] },
    { id: 'e18', type: 'order', prompt: 'Put the German translation in order.', source: 'Bî den rôsen er wol mac merken, wâ mirz houbet lac.', tokens: ['An den Rosen', 'kann er wohl', 'erkennen,', 'wo mir', 'der Kopf lag.'], explain: 'mac = kann (mugen); mirz = mir daz; lac from ligen.' },
    { id: 'e19', type: 'translate', dir: 'mhd-de', source: 'Diu nahtegal sanc schône.', model: 'Die Nachtigall sang schön.', accepted: ['nachtigall sang schön', 'nachtigall sang wunderschön', 'nachtigall sang herrlich'] },
    { id: 'e20', type: 'translate', dir: 'mhd-de', source: 'Ich kam zuo der ouwe.', model: 'Ich kam zu der Aue.', accepted: ['ich kam zu aue', 'ich kam zur aue', 'ich kam auf aue', 'ich kam zu wiese', 'ich kam zur wiese', 'ich kam auf wiese'] },
    { id: 'e21', type: 'translate', dir: 'mhd-en', source: 'Wir vunden bluomen unde gras.', model: 'We found flowers and grass.', accepted: ['we found flowers and grass'] },
    { id: 'e22', type: 'translate', dir: 'de-mhd', source: 'Er ritt in den Wald.', model: 'Er reit in den walt.', accepted: ['er reit in den walt', 'er reit ze walde', 'er reit in walt'] },
    { id: 'e23', type: 'translate', dir: 'de-mhd', source: 'Wir gaben.', model: 'Wir gâben.', accepted: ['wir gâben'] },
    { id: 'e24', type: 'mc', prompt: 'The speaker of <em>Under der linden</em> is:', options: ['a woman remembering a meeting with her lover', 'a knight serving an unattainable lady', 'the nightingale', 'a watchman at dawn'], answer: 0, explain: 'A woman’s voice; love fulfilled, unlike hôhe minne.' },
    { id: 'e25', type: 'mc', prompt: '<span class="la">heide</span> in Walther means:', options: ['open, uncultivated land', 'heather moor only', 'a pagan woman', 'a forest'], answer: 0, explain: 'A gentle false friend: “heath” in the old, broad sense.' }
  ],

  reading: {
    title: 'Walther von der Vogelweide, Under der linden',
    note: 'Authentic text (L 39,11) in the normalised spelling of the Lachmann tradition, as supplied for this course; edition to be confirmed. [ ] marks a letter supplied by the editor of this course. Tap any word.',
    text: 'Under der linden\nan der heide,\ndâ unser zweier bette was,\ndâ muget ir vinden\nschône beide\ngebrochen bluomen unde gras.\nVor dem walde in einem tal,\ntandaradei,\nschône sanc diu nahtegal.\n\n[I]ch kam gegangen\nzuo der ouwe,\ndô was mîn friedel komen ê.\nDâ wart ich enpfangen,\nhêre frouwe,\ndaz ich bin sælic iemer mê.\nKuster mich? Wol tûsentstunt:\ntandaradei,\nseht, wie rôt mir ist der munt.\n\nDô het er gemachet\nalsô rîche\nvon bluomen eine bettestat.\nDes wirt noch gelachet\ninneclîche,\nkumt iemen an daz selbe pfat.\nBî den rôsen er wol mac,\ntandaradei,\nmerken, wâ mirz houbet lac.\n\nDaz er bî mir læge,\nwessez iemen\n(nû enwelle got!), sô schamt ich mich.\nWes er mit mir pflæge,\nniemer niemen\nbevinde daz, wan er und ich,\nund ein kleinez vogellîn –\ntandaradei,\ndaz mac wol getriuwe sîn.',
    translations: [
      { label: 'German translation', text: 'Unter der Linde auf der Heide, wo unser beider Lager war, da könnt ihr schön beides finden, geknickte Blumen und Gras. Vor dem Wald in einem Tal, tandaradei, sang schön die Nachtigall.\n\nIch kam zu der Aue gegangen, da war mein Liebster schon vor mir gekommen. Da wurde ich empfangen, heilige Herrin! – dass ich für immer glücklich bin. Ob er mich küsste? Wohl tausendmal, tandaradei: seht, wie rot mein Mund ist.\n\nDa hatte er so prächtig aus Blumen ein Lager bereitet. Darüber wird noch herzlich gelacht werden, wenn jemand denselben Pfad entlangkommt. An den Rosen kann er wohl, tandaradei, erkennen, wo mein Kopf lag.\n\nDass er bei mir lag, wüsste das jemand (Gott bewahre!), so schämte ich mich. Was er mit mir tat, das soll niemals jemand erfahren außer er und ich und ein kleines Vögelein, tandaradei, das wird wohl verschwiegen sein.' },
      { label: 'English translation', text: 'Under the lime tree on the heath, where the bed of us two was, there you may find, lovingly, both flowers and grass crushed. Before the wood, in a valley, tandaradei, the nightingale sang sweetly.\n\nI came walking to the meadow; my love had come there before me. There I was received – holy Lady! – so that I shall be happy for evermore. Did he kiss me? A thousand times at least, tandaradei: look how red my mouth is.\n\nThere he had made, so splendidly, a bed of flowers. People will laugh at that from the heart, if anyone comes along that path. By the roses he can well tell, tandaradei, where my head lay.\n\nThat he lay with me – if anyone knew it (God forbid!), I would be ashamed. What he did with me, may no one ever find out but he and I and one little bird, tandaradei, and that one will surely keep faith.' }
    ],
    notes: [
      { ref: 'dâ unser zweier bette was', html: '<span class="la">unser zweier</span>: genitive, “of us two”. <span class="la">bette</span> here is the place where they lay, not a piece of furniture.' },
      { ref: 'dâ muget ir vinden', html: '<span class="la">muget</span>: 2nd plural of <span class="la">mugen</span>, “könnt”. The speaker addresses an audience, as she does again with <span class="la">seht</span> in stanza 2.' },
      { ref: 'schône beide / gebrochen bluomen unde gras', html: '<span class="la">beide … unde</span>: “both … and”. <span class="la">schône</span> is an adverb, “beautifully”, perhaps also “neatly” or “lovingly”; editors and translators differ. <span class="la">gebrochen</span>: participle of <span class="la">brëchen</span>, series IV.' },
      { ref: 'schône sanc diu nahtegal', html: '<span class="la">sanc</span>: preterite singular of <span class="la">singen</span>, series III.' },
      { ref: '[I]ch kam gegangen', html: '<span class="la">kam gegangen</span>: “came walking”, a participle with a verb of motion, as modern <em>kam gelaufen</em>. The letter <span class="la">I</span> is missing in the copy supplied for the course and has been restored.' },
      { ref: 'dô was mîn friedel komen ê', html: 'Pluperfect with <span class="la">sîn</span>: “my lover had come before”. <span class="la">komen</span> has no <span class="la">ge-</span>.' },
      { ref: 'Dâ wart ich enpfangen, / hêre frouwe', html: '<span class="la">wart … enpfangen</span>: passive with <span class="la">wërden</span>. <span class="la">hêre frouwe</span> is disputed. Many read it as an exclamation, “holy Lady!”, invoking the Virgin Mary; others as “(received) as a noble lady”, i.e. treated as a lady of rank. The punctuation of editions differs accordingly.' },
      { ref: 'Kuster mich? Wol tûsentstunt', html: '<span class="la">kuster</span> = <span class="la">kuste ër</span>. She asks the question herself and answers it. <span class="la">tûsentstunt</span>: “a thousand times”, <span class="la">stunt</span> as in <span class="la">dicke stunt</span>, “often”.' },
      { ref: 'Dô het er gemachet', html: '<span class="la">het</span> = <span class="la">hete</span>, preterite of <span class="la">hân</span>, “hatte”: pluperfect.' },
      { ref: 'Des wirt noch gelachet', html: 'An impersonal passive, as modern <em>darüber wird noch gelacht</em>. <span class="la">des</span> is the genitive object, “about that”. <span class="la">kumt iemen</span>: a condition by inversion, “if anyone comes”, as in modern <em>kommt jemand …</em>.' },
      { ref: 'Daz er bî mir læge, / wessez iemen', html: 'Two past subjunctives in a hypothetical sentence: <span class="la">læge</span> from <span class="la">ligen</span>, <span class="la">wesse</span> from <span class="la">wizzen</span> (+ <span class="la">ëz</span>). <span class="la">schamt ich mich</span>: “I would be ashamed”.' },
      { ref: 'nû enwelle got', html: '“May God not will it”, i.e. God forbid. <span class="la">en-</span> is the old negative particle (Lecture VII), <span class="la">welle</span> the subjunctive of <span class="la">wellen</span>.' },
      { ref: 'Wes er mit mir pflæge', html: '<span class="la">pflëgen</span> takes a genitive: <span class="la">wes</span>, “what”. A discreet way to say “what he did with me”.' },
      { ref: 'niemer niemen / bevinde daz', html: 'Double negation reinforces in Middle High German: “never anyone” = “no one ever”. <span class="la">bevinde</span> is a present subjunctive expressing a wish.' },
      { ref: 'daz mac wol getriuwe sîn', html: '<span class="la">getriuwe</span>: loyal, trustworthy; here “discreet”. The bird, the traditional witness of love, becomes the lovers’ ally.' }
    ],
    glosses: {
      'under': 'under (unter)', 'der': 'the (dat. fem.: der Linde)', 'linden': 'lime tree (dat. of linde)', 'an': 'on, at', 'heide': 'heath, open land (dat.)',
      'dâ': 'there; where', 'unser': 'of us (gen. of wir)', 'zweier': 'of two (gen. of zwêne): unser zweier, of us two', 'bette': 'bed, place to lie', 'was': 'was (preterite of sîn)',
      'muget': 'can (2nd pl. of mugen: könnt)', 'ir': 'you (pl.: ihr)', 'vinden': 'find', 'schône': 'beautifully; lovingly (adverb)', 'beide': 'both: beide … unde, both … and',
      'gebrochen': 'broken, crushed (participle of brëchen)', 'bluomen': 'flowers (pl. of bluome)', 'unde': 'and', 'gras': 'grass',
      'vor': 'in front of, before', 'dem': 'the (dat.)', 'walde': 'wood, forest (dat. of walt)', 'in': 'in', 'einem': 'a (dat.)', 'tal': 'valley (Tal)',
      'tandaradei': 'refrain imitating birdsong', 'sanc': 'sang (preterite sg. of singen)', 'diu': 'the (nom. fem.: die)', 'nahtegal': 'nightingale',
      '[i]ch': 'I (ich; first letter restored)', 'ich': 'I', 'kam': 'came (preterite of komen)', 'gegangen': 'gone, walking (participle of gân/gangen): kam gegangen, came walking',
      'zuo': 'to (zu)', 'ouwe': 'meadow by water (Aue)', 'dô': 'then; when', 'mîn': 'my', 'friedel': 'lover, sweetheart', 'komen': 'come (participle without ge-: gekommen)', 'ê': 'before, earlier',
      'wart': 'was, became (preterite sg. of wërden): wart … enpfangen, was received', 'enpfangen': 'received (participle of enpfâhen: empfangen)', 'hêre': 'holy, noble, exalted (hehr)', 'frouwe': 'lady; hêre frouwe, holy Lady (Mary)? or noble lady (disputed)',
      'daz': 'that (dass; das)', 'bin': 'am', 'sælic': 'blessed, happy (selig)', 'iemer': 'ever, always: iemer mê, for evermore', 'mê': 'more: iemer mê, for evermore',
      'kuster': 'kuste ër: did he kiss', 'mich': 'me', 'wol': 'well; surely, at least (wohl)', 'tûsentstunt': 'a thousand times',
      'seht': 'look! (imperative pl. of sëhen)', 'wie': 'how', 'rôt': 'red', 'mir': 'to me (dat.; here “my”)', 'ist': 'is', 'munt': 'mouth (Mund)',
      'het': 'had (hete, preterite of hân)', 'er': 'he', 'gemachet': 'made (participle of machen)', 'alsô': 'so (also)', 'rîche': 'splendidly, richly (adverb)', 'von': 'of, from', 'eine': 'a (fem.)', 'bettestat': 'bed, place to lie',
      'des': 'about that (gen. of daz)', 'wirt': 'will be (3rd sg. of wërden)', 'noch': 'still, yet; in the future', 'gelachet': 'laughed (participle of lachen): des wirt gelachet, people will laugh about it', 'inneclîche': 'heartily, from the heart (innig)',
      'kumt': 'comes (3rd sg. of komen); kumt iemen, if anyone comes', 'iemen': 'anyone, someone (jemand)', 'selbe': 'same: daz selbe, the same', 'pfat': 'path (Pfad)',
      'bî': 'by, at (bei)', 'den': 'the (dat. pl.)', 'rôsen': 'roses (dat. pl. of rôse)', 'mac': 'can (3rd sg. of mugen: kann)', 'merken': 'notice, tell (bemerken)', 'wâ': 'where (wo)', 'mirz': 'mir daz: to me the (my)', 'houbet': 'head (Haupt)', 'lac': 'lay (preterite sg. of ligen)',
      'læge': 'lay (past subjunctive of ligen: läge)', 'wessez': 'wesse ëz: if anyone knew it (wüsste es)', 'nû': 'now', 'enwelle': 'en welle: may (God) not will it', 'got': 'God', 'sô': 'so, then', 'schamt': 'schamte: would be ashamed (sich schämen)',
      'wes': 'what (gen. of waz, object of pflëgen)', 'mit': 'with', 'pflæge': 'did, engaged in (past subjunctive of pflëgen)', 'niemer': 'never (nimmer)', 'niemen': 'nobody (niemand): niemer niemen, no one ever',
      'bevinde': 'may find out (subjunctive of bevinden)', 'wan': 'except (außer)', 'und': 'and', 'ein': 'a', 'kleinez': 'little (klein)', 'vogellîn': 'little bird (Vögelein)', 'getriuwe': 'loyal, discreet (treu)', 'sîn': 'be (sein)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What can passers-by still see under the lime tree?', options: ['Crushed flowers and grass', 'A ruined bed', 'The lovers themselves', 'A nightingale’s nest'], answer: 0, explain: 'dâ muget ir vinden … gebrochen bluomen unde gras.' },
      { id: 'r2', type: 'mc', prompt: 'Who arrived first at the meadow?', options: ['Her lover', 'The speaker', 'They came together', 'The nightingale'], answer: 0, explain: 'dô was mîn friedel komen ê.' },
      { id: 'r3', type: 'mc', prompt: 'How will the passer-by know where her head lay?', options: ['By the roses', 'By the lime tree', 'By the nightingale', 'By a mark on the path'], answer: 0, explain: 'Bî den rôsen er wol mac … merken, wâ mirz houbet lac.' },
      { id: 'r4', type: 'mc', prompt: 'Who, besides the lovers, knows what happened?', options: ['A little bird, which will keep the secret', 'The whole village', 'Nobody at all', 'Her mother'], answer: 0, explain: 'und ein kleinez vogellîn … daz mac wol getriuwe sîn.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Preterite plural of <span class="la">bieten</span>:', options: ['buten', 'bôten', 'bieten', 'boten'], answer: 0, explain: 'Series II: bieten, bôt, buten, geboten.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">vuor</span> is the preterite of:', options: ['varn', 'vinden', 'vüeren', 'vallen'], answer: 0, explain: 'Series VI: varn, vuor, vuoren, gevarn.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">liez</span> belongs to series:', options: ['VII', 'I', 'II', 'V'], answer: 0, explain: 'lâzen, liez: preterite in ie.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Ër gap; wir g___ben.</span>', hint: 'we gave (long vowel)', answers: ['â', 'a'], full: 'wir gâben', explain: 'Series V: long â in the plural.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Ër bant; wir b___nden.</span>', hint: 'we bound', answers: ['u'], full: 'wir bunden', explain: 'Series III: plural u.' },
      { id: 't6', type: 'mc', prompt: '<span class="la">du wære</span> means:', options: ['you were', 'you would be (only)', 'you are', 'be!'], answer: 0, explain: '2nd sg. preterite indicative, plural stem + e.' },
      { id: 't7', type: 'mc', prompt: 'Past subjunctive of <span class="la">ligen</span>:', options: ['læge', 'lige', 'lac', 'lâgen'], answer: 0, explain: 'lâgen → læge, as modern läge.' },
      { id: 't8', type: 'translate', dir: 'mhd-de', source: 'Ich kam gegangen.', model: 'Ich kam gegangen.', accepted: ['ich kam gegangen', 'ich kam', 'ich ging hin', 'ich kam zu fuß'] },
      { id: 't9', type: 'translate', dir: 'de-mhd', source: 'Die Nachtigall sang.', model: 'Diu nahtegal sanc.', accepted: ['diu nahtegal sanc', 'die nahtegal sanc'] },
      { id: 't10', type: 'mc', prompt: '<span class="la">wessez iemen</span> means:', options: ['if anyone knew it', 'someone washed it', 'whose is it', 'anyone who was there'], answer: 0, explain: 'wesse ëz: past subjunctive of wizzen + ëz.' },
      { id: 't11', type: 'mc', prompt: 'In which manuscripts does <em>Under der linden</em> survive?', options: ['The Weingarten manuscript (B) and the Codex Manesse (C)', 'Only the Codex Manesse', 'In Walther’s own autograph', 'In the Carmina Burana'], answer: 0, explain: 'Two manuscripts, both from around 1300.' }
    ]
  },

  reference: [
    { title: 'The seven ablaut series', headers: ['', 'Inf.', 'Pret. sg.', 'Pret. pl.', 'Part.'], rows: [
      ['I', 'rîten', 'reit', 'riten', 'geriten'], ['II', 'bieten', 'bôt', 'buten', 'geboten'], ['IIIa', 'binden', 'bant', 'bunden', 'gebunden'], ['IIIb', 'hëlfen', 'half', 'hulfen', 'geholfen'],
      ['IV', 'nëmen', 'nam', 'nâmen', 'genomen'], ['V', 'gëben', 'gap', 'gâben', 'gegëben'], ['VI', 'varn', 'vuor', 'vuoren', 'gevarn'], ['VII', 'vallen', 'viel', 'vielen', 'gevallen']
    ] },
    { title: 'Preterite of singen', headers: ['', 'Indicative', 'Subjunctive'], rows: [
      ['ich', 'sanc', 'sünge'], ['du', 'sunge', 'süngest'], ['ër', 'sanc', 'sünge'], ['wir', 'sungen', 'süngen'], ['ir', 'sunget', 'sünget'], ['si', 'sungen', 'süngen']
    ] },
    { title: 'Contracted forms in Under der linden', headers: ['Form', 'Full', 'Meaning'], rows: [
      ['kuster', 'kuste ër', 'did he kiss'], ['mirz', 'mir daz', 'my (to me the)'], ['wessez', 'wesse ëz', 'if (anyone) knew it'], ['enwelle', 'en welle', 'may (God) not will'], ['het', 'hete', 'had']
    ] }
  ]
});
