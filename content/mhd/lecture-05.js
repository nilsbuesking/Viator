/*
 * Middle High German — Lecture V: weak verbs, Rückumlaut, and the irregular verbs hân, lân, gân, stân, tuon, wellen.
 * Reading: Nibelungenlied, stanzas 13–19 (Kriemhild's dream), transcribed from the page images of Karl Bartsch's
 * edition (Deutsche Classiker des Mittelalters 3, Leipzig 1866), pp. 4–5; Bartsch's metrical accents and elision
 * dots left out, his spelling (sc for sch) kept.
 * Source panel: Walther von der Vogelweide, L 8,28–35, from the page image of Lachmann's 2nd edition (Berlin 1843), p. 8.
 * Forms checked against Weinhold, Mhd. Grammatik (1877), §§ 335, 341, 377, 404–406. See CONTENT-CHECKS.md.
 */
Viator.addLecture('mhd', {
  id: 'mhd-05',
  number: 5,
  title: 'Den troum siu dô sagete',
  subtitle: 'Weak verbs, Rückumlaut and the irregular verbs hân, lân, gân, stân, tuon, wellen; Kriemhild’s dream',
  minutes: 60,

  intro: `
    <p>Most Middle High German verbs are <strong>weak</strong>: they form the preterite with <span class="la">-te</span> and the participle with <span class="la">ge- … -et</span>, as modern German does. <span class="la">suochen, suochte, gesuochet</span> needs no explanation. Three things do. Verbs with a short stem keep a vowel before the ending: <span class="la">sagete, lebete</span>, three syllables each. A group of verbs with umlaut in the present lose it in the preterite: <span class="la">brennen, brante</span>; <span class="la">hœren, hôrte</span>. Modern <em>brannte, kannte, nannte</em> are the survivors. And a handful of very common verbs have short, contracted forms: <span class="la">hân</span> for <em>haben</em>, <span class="la">lân</span> for <em>lassen</em>, <span class="la">gân</span> and <span class="la">stân</span>, together with <span class="la">tuon</span> (preterite <span class="la">tete</span>) and <span class="la">wellen</span> (<span class="la">ich wil</span>, <span class="la">si wolde</span>).</p>
    <p>The reading is the most famous dream in German literature. In the first <em>âventiure</em> of the <em>Nibelungenlied</em>, the young Kriemhild dreams that she is rearing a falcon, which two eagles tear to pieces. Her mother explains that the falcon is a man she will love and lose. Kriemhild vows to have nothing to do with love; the poet tells us at once that she will marry, and that her vengeance for her husband will cost many lives. The whole epic is in these seven stanzas.</p>
    <p>By the end you should be able to form the preterite and participle of weak verbs, recognise the Rückumlaut verbs and the irregular <span class="la">dâhte, brâhte</span>, conjugate <span class="la">hân, lân, gân, stân, tuon</span> and <span class="la">wellen</span>, and read Kriemhild’s dream with the glosses.</p>
  `,

  background: [
    {
      title: 'The Nibelungenlied',
      html: `
        <p>The <em>Nibelungenlied</em> was written down around 1200, probably in the Danube region between Passau and Vienna; many scholars connect it with the court of Bishop Wolfger of Passau, but the poet is anonymous and the place is an inference from the geography of the poem. Its story is far older. The destruction of the Burgundian kingdom by the Huns in the 430s, and the death of Attila in 453, lie behind it, combined over centuries with the legend of Siegfried, the dragon-slayer.</p>
        <p>The poem has 39 <em>âventiuren</em> (chapters) and about 2,400 stanzas in the B version. The first half tells how Siegfried wins Kriemhild, sister of King Gunther of Worms, and how he is murdered by Gunther’s vassal Hagen. The second tells how Kriemhild, married to Etzel (Attila), invites her brothers to Hungary and has them all killed to avenge Siegfried. The dream in our reading points to both halves.</p>
        <p>The manuscripts fall into groups with different texts, conventionally named after the manuscripts A (Munich), B (St Gallen) and C (Donaueschingen, now Karlsruhe). Karl Bartsch, whose edition we read, follows the B version. His introduction calls manuscript A, which Lachmann had made the basis of his edition, “ungemein nachlässig geschrieben”.</p>
      `
    },
    {
      title: 'Dreams, falcons and foreshadowing',
      html: `
        <p>The falcon was the courtly bird: the trained hawk that flies from the hand and returns. In love lyric it stands for the lover, and a famous song attributed to the poet known as the Kürenberger, in the same stanza form as the <em>Nibelungenlied</em>, tells of a woman who reared a falcon that flew away. Bartsch himself compares the epic’s stanzas with the Kürenberger’s. Kriemhild’s dream turns the image to death: two eagles, the royal birds, tear the falcon apart. The poem never says outright who the eagles are; most readers take them as Gunther and Hagen.</p>
        <p>The narrator does not keep his secret for a moment. Stanza 19 tells us that the falcon is the husband Kriemhild will have, and that she will avenge him on her nearest kin. This foreknowledge runs through the whole poem: the audience knew the story, and the interest lies in how the catastrophe comes about, not whether it will.</p>
      `
    },
    {
      title: 'Why weak verbs, and why “Rückumlaut”',
      html: `
        <p>The weak preterite with a dental suffix is a Germanic invention (Lecture II). In Old High German the weak verbs fell into three classes by their stem vowel: <span class="la">-en</span> (from older <em>-jan</em>), <span class="la">-ôn</span> and <span class="la">-ên</span>, as in <span class="la">brennen, salbôn, habên</span>. By Middle High German the classes had largely merged, but the first class left a lasting trace.</p>
        <p>In verbs of the <em>-jan</em> class the <em>j</em> caused umlaut in the present: <em>*brannjan</em> became <span class="la">brennen</span>. In verbs with a long stem the connecting vowel disappeared before the preterite ending very early, so the preterite never had umlaut: <span class="la">branta</span>, later <span class="la">brante</span>. Jacob Grimm called this “Rückumlaut”, reverse umlaut, as if the umlaut had been undone. The name is misleading, since there was no umlaut to undo, but it has stuck.</p>
        <p>Modern German has kept a handful of these verbs: <em>brennen, kennen, nennen, rennen, senden, wenden</em>, and <em>denken, bringen</em> with their changed consonants. Most others, like <span class="la">hœren, hôrte</span>, have levelled to <em>hörte</em>.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Ich hôrte ein wazzer diezen<br>und sach die vische fliezen,<br>ich sach swaz in der welte was,<br>velt walt loup rôr unde gras.<br>swaz kriuchet unde fliuget<br>und bein zer erde biuget,<br>daz sach ich, unde sage iu daz:<br>der keinez lebet âne haz.</p>
    <p>“I heard a stream rushing and saw the fish swimming; I saw whatever there was in the world, field, wood, leaf, reed and grass. Whatever creeps and flies and bends its legs to the ground, I saw it, and I tell you this: none of them lives without hostility.” Walther von der Vogelweide, L 8,28–35, from Lachmann’s 2nd edition (Berlin 1843), p. 8. It is the second stanza of the poem whose first stanza appeared in Lecture IV.</p>
    <p><span class="la">hôrte</span> is a weak preterite with Rückumlaut: present <span class="la">hœren</span>, preterite without umlaut. <span class="la">sage</span> and <span class="la">lebet</span> are ordinary weak presents. <span class="la">sach</span>, <span class="la">kriuchet</span>, <span class="la">fliuget</span> and <span class="la">biuget</span> are strong verbs, the last three from series II with <span class="la">iu</span> in the singular of the present, as in modern poetic <em>kreucht und fleucht</em>.</p>
  `,

  pronunciation: `
    <h3>Bartsch’s spelling</h3>
    <p>Bartsch writes <span class="la">sc</span> where most editions have <span class="la">sch</span>: <span class="la">scœne, besceiden, sciere, gesciht</span>. It is a spelling choice of his edition, not a different sound; read <em>sch</em>. He also marks the metre with accents (<span class="la">Kriemhílde</span>) and with dots under letters to be elided; these are left out here. Apostrophes show where he has already dropped an <span class="la">e</span>: <span class="la">scœn’</span>, <span class="la">zwên’</span>, <span class="la">son’</span>.</p>
    <h3>Every syllable of -ete counts</h3>
    <p><span class="la">sagete</span> and <span class="la">lebete</span> have three syllables, <span class="la">troumte</span> two. The metre of the Nibelungen stanza depends on such counts, as Lecture IX will show.</p>
    <h3>hân, gân, stân: long vowels</h3>
    <p>The contracted verbs have a long <span class="la">â</span> and rhyme with one another: <span class="la">hân : gân : lân : stân</span>. In Bavarian sources the forms <span class="la">gên, stên</span> are usual; both types appear in the poets’ rhymes.</p>
    <h3>The long line</h3>
    <p>Each line of the stanza is a long line in two halves, with a pause (caesura) in the middle. Bartsch prints the halves on one line with a wider space between them; the reading here prints them on two lines, the second indented, so that they fit a phone screen.</p>
  `,

  grammar: [
    {
      title: '1. Weak verbs: preterite and participle',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Present</th><th>Preterite</th></tr></thead>
          <tbody>
            <tr><th>ich</th><td class="la">suoche</td><td class="la">suochte</td></tr>
            <tr><th>du</th><td class="la">suochest</td><td class="la">suochtest</td></tr>
            <tr><th>ër</th><td class="la">suochet</td><td class="la">suochte</td></tr>
            <tr><th>wir</th><td class="la">suochen</td><td class="la">suochten</td></tr>
            <tr><th>ir</th><td class="la">suochet</td><td class="la">suochtet</td></tr>
            <tr><th>si</th><td class="la">suochent</td><td class="la">suochten</td></tr>
          </tbody>
        </table></div>
        <p>The present is the same as for strong verbs (Lecture I). The preterite adds <span class="la">-te</span> and the personal endings; there is no difference in vowel between singular and plural, unlike the strong verbs of Lecture II. The participle is <span class="la">gesuochet</span>, with <span class="la">-et</span>; the <span class="la">e</span> is often dropped (<span class="la">gesuocht</span>).</p>
        <p>The past subjunctive of a weak verb looks the same as the indicative (<span class="la">suochte</span>), except in the Rückumlaut verbs (section 3), where the subjunctive has umlaut: <span class="la">brante</span> “burned”, <span class="la">brente</span> “would burn”.</p>
        <p>In the reading: <span class="la">troumte, sagete, lebete</span> (preterites); <span class="la">saget</span> “you say” (2nd plural present); <span class="la">behüeten, lônen, minnen</span> (infinitives); <span class="la">gefüeget</span> (3rd singular present).</p>
      `
    },
    {
      title: '2. -ete or -te',
      html: `
        <p>Whether the preterite has <span class="la">-ete</span> or <span class="la">-te</span> depends mainly on the length of the stem.</p>
        <ul>
          <li><strong>Short stems</strong>, a short vowel followed by one consonant, keep the <span class="la">e</span>: <span class="la">sagen, sagete</span>; <span class="la">leben, lebete</span>; <span class="la">legen, legete</span>; <span class="la">wonen, wonete</span>. In the reading: <span class="la">Den troum siu dô sagete</span>; <span class="la">sît lebete diu vil guote</span>.</li>
          <li><strong>Long stems</strong>, with a long vowel or two consonants, mostly drop it: <span class="la">suochen, suochte</span>; <span class="la">troumen, troumte</span>; <span class="la">hœren, hôrte</span>; <span class="la">dienen, diente</span>.</li>
          <li>After <span class="la">t</span> or <span class="la">d</span> the endings merge: <span class="la">ahten, ahte</span>; <span class="la">antwurten, antwurte</span>; <span class="la">senden, sande</span>.</li>
        </ul>
        <p>Verse treats this freely, and manuscripts and editors differ. Some short-stemmed verbs drop the <span class="la">e</span> too (<span class="la">legete</span> beside <span class="la">leite</span>, from which the contracted participle <span class="la">geleit</span> in the <em>Iwein</em> reading of Lecture IV), and some long-stemmed verbs keep it. When you meet an extra syllable, it is usually this <span class="la">e</span>.</p>
      `
    },
    {
      title: '3. Rückumlaut',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Infinitive</th><th>Preterite</th><th>Modern</th></tr></thead>
          <tbody>
            <tr><td class="la">brennen</td><td class="la">brante</td><td>brannte</td></tr>
            <tr><td class="la">kennen</td><td class="la">kante</td><td>kannte</td></tr>
            <tr><td class="la">nennen</td><td class="la">nante</td><td>nannte</td></tr>
            <tr><td class="la">senden</td><td class="la">sante, sande</td><td>sandte</td></tr>
            <tr><td class="la">wenden</td><td class="la">wante, wande</td><td>wandte</td></tr>
            <tr><td class="la">setzen</td><td class="la">satzte</td><td>setzte</td></tr>
            <tr><td class="la">decken</td><td class="la">dahte</td><td>deckte</td></tr>
            <tr><td class="la">hœren</td><td class="la">hôrte</td><td>hörte</td></tr>
            <tr><td class="la">füeren</td><td class="la">fuorte</td><td>führte</td></tr>
            <tr><td class="la">wænen</td><td class="la">wânde</td><td>wähnte</td></tr>
          </tbody>
        </table></div>
        <p>These are weak verbs with umlaut in the present (<span class="la">e, æ, œ, üe, ü</span>) and a long stem. Their preterite has the vowel without umlaut (<span class="la">a, â, ô, uo, u</span>); the participle often lacks it too, and both forms occur: <span class="la">gebrant</span> and <span class="la">gebrennet</span>, <span class="la">gehôrt</span> and <span class="la">gehœret</span>, <span class="la">gesatzt</span> and <span class="la">gesetzet</span>. A German reader’s trap: <span class="la">fuorte</span> is not from <span class="la">varn</span> (that is <span class="la">vuor</span>), and <span class="la">dahte</span> is not from <span class="la">denken</span>.</p>
        <p>Walther has two examples in Lecture IV and this lecture’s panel: <span class="la">und dahte bein mit beine</span>, “and covered leg with leg”, from <span class="la">decken</span>; <span class="la">dar ûf sazt ich den ellenbogen</span>, from <span class="la">setzen</span>; <span class="la">Ich hôrte ein wazzer diezen</span>, from <span class="la">hœren</span>.</p>
      `
    },
    {
      title: '4. dâhte, brâhte: weak verbs with a changed stem',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Infinitive</th><th>Preterite</th><th>Participle</th></tr></thead>
          <tbody>
            <tr><td class="la">denken</td><td class="la">dâhte</td><td class="la">gedâht</td></tr>
            <tr><td class="la">dunken, dünken</td><td class="la">dûhte</td><td class="la">gedûht</td></tr>
            <tr><td class="la">bringen</td><td class="la">brâhte</td><td class="la">brâht</td></tr>
            <tr><td class="la">vürhten</td><td class="la">vorhte</td><td class="la">gevorht</td></tr>
            <tr><td class="la">würken, wirken</td><td class="la">worhte</td><td class="la">geworht</td></tr>
          </tbody>
        </table></div>
        <p>In <span class="la">dâhte, dûhte, brâhte</span> a nasal before <span class="la">h</span> was lost long before Middle High German and the vowel lengthened in compensation; Weinhold lists them under this “Ersatzdehnung”. The long vowel distinguishes <span class="la">dâhte</span> “thought” from <span class="la">dahte</span> “covered”: Walther has both within a few lines (Lecture IV). <span class="la">brâht</span>, like <span class="la">komen</span> and <span class="la">worden</span>, usually has no <span class="la">ge-</span> (Lecture II).</p>
        <p><span class="la">mich dunket</span>, “it seems to me”, with the preterite <span class="la">mich dûhte</span>, is the ancestor of modern <em>mich dünkt, mir deucht</em>.</p>
      `
    },
    {
      title: '5. hân and haben',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Present</th><th>Preterite</th></tr></thead>
          <tbody>
            <tr><th>ich</th><td class="la">hân</td><td class="la">hâte, hête, hete</td></tr>
            <tr><th>du</th><td class="la">hâst</td><td class="la">hætest, hetest</td></tr>
            <tr><th>ër</th><td class="la">hât</td><td class="la">hâte, hête, hete, het</td></tr>
            <tr><th>wir</th><td class="la">hân</td><td class="la">hâten, heten</td></tr>
            <tr><th>ir</th><td class="la">hât</td><td class="la">hâtet, hetet</td></tr>
            <tr><th>si</th><td class="la">hânt</td><td class="la">hâten, heten</td></tr>
          </tbody>
        </table></div>
        <p>Beside the full verb <span class="la">haben</span> (preterite <span class="la">habete, hapte</span>; participle <span class="la">gehabet</span>), Middle High German uses a contracted <span class="la">hân</span>, especially as an auxiliary. Weinhold explains it from the loss of <span class="la">b</span> between vowels, with lengthening. The preterite varies more than any other verb, between <span class="la">hâte, hæte, hête, hete, het</span> and <span class="la">hiete</span>; short <span class="la">hete</span> is common in Alemannic, as in Hartmann (<span class="la">er hete ze sînen handen</span>, Lecture III). The past subjunctive is <span class="la">hæte, hete</span>.</p>
        <p>The <span class="la">-n</span> of <span class="la">ich hân</span> matches a few other short verbs: <span class="la">ich lân, ich gân, ich stân, ich tuon</span>. In <span class="la">gân, stân, tuon</span> it continues a very old ending of the first person (Old High German <span class="la">gâm, stâm, tuom</span>); Weinhold thinks these verbs influenced <span class="la">hân</span>.</p>
        <p>In the reading: <span class="la">du muost in sciere vloren hân</span>, “you will soon have lost him”: a perfect infinitive with <span class="la">hân</span>, after <span class="la">muost</span> (Lecture VI).</p>
      `
    },
    {
      title: '6. lân, gân, stân',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>lân</th><th>gân</th><th>stân</th></tr></thead>
          <tbody>
            <tr><th>ich</th><td class="la">lân</td><td class="la">gân</td><td class="la">stân</td></tr>
            <tr><th>du</th><td class="la">lâst</td><td class="la">gâst</td><td class="la">stâst</td></tr>
            <tr><th>ër</th><td class="la">lât</td><td class="la">gât</td><td class="la">stât</td></tr>
            <tr><th>wir</th><td class="la">lân</td><td class="la">gân</td><td class="la">stân</td></tr>
            <tr><th>ir</th><td class="la">lât</td><td class="la">gât</td><td class="la">stât</td></tr>
            <tr><th>si</th><td class="la">lânt</td><td class="la">gânt</td><td class="la">stânt</td></tr>
          </tbody>
        </table></div>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Preterite</th><th>Participle</th></tr></thead>
          <tbody>
            <tr><th>lân</th><td class="la">liez, lie</td><td class="la">gelâzen, gelân</td></tr>
            <tr><th>gân</th><td class="la">gienc, gie</td><td class="la">gegangen, gegân</td></tr>
            <tr><th>stân</th><td class="la">stuont</td><td class="la">gestanden, gestân</td></tr>
          </tbody>
        </table></div>
        <p><span class="la">lân</span> is the contracted form of the strong verb <span class="la">lâzen</span> (series VII), and both are used. The imperatives are <span class="la">lâ</span>, <span class="la">ganc</span> or <span class="la">gâ</span>, <span class="la">stant</span> or <span class="la">stâ</span>; in the plural <span class="la">lât, gât, stât</span>. <span class="la">gân</span> and <span class="la">stân</span> take their present from short stems and their preterites from the longer <span class="la">gangen, standen</span>: <span class="la">gienc</span> (plural <span class="la">giengen</span>) and <span class="la">stuont</span> (plural <span class="la">stuonden</span>). Modern <em>ging, stand</em> come from these; <em>gehen, stehen</em> from the <span class="la">ê</span>-forms <span class="la">gên, stên</span>, which are Bavarian and later general.</p>
        <p>Weinhold notes that the short participle <span class="la">gestân</span> is avoided by the courtly poets of the 13th century but used by others. In the reading: <span class="la">Die rede lât belîben</span>, “let that talk be” (Bartsch: “imper. pl. von <em>lân</em>”), and <span class="la">son’ kan mir nimmer missegân</span>, “then nothing can go wrong for me”, a compound of <span class="la">gân</span>.</p>
      `
    },
    {
      title: '7. tuon and wellen',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>tuon: pres.</th><th>tuon: pret.</th><th>wellen: pres.</th><th>wellen: pret.</th></tr></thead>
          <tbody>
            <tr><th>ich</th><td class="la">tuon</td><td class="la">tete</td><td class="la">wil</td><td class="la">wolte</td></tr>
            <tr><th>du</th><td class="la">tuost</td><td class="la">tæte</td><td class="la">wil, wilt</td><td class="la">woltest</td></tr>
            <tr><th>ër</th><td class="la">tuot</td><td class="la">tete</td><td class="la">wil</td><td class="la">wolte</td></tr>
            <tr><th>wir</th><td class="la">tuon</td><td class="la">tâten</td><td class="la">wellen</td><td class="la">wolten</td></tr>
            <tr><th>ir</th><td class="la">tuot</td><td class="la">tâtet</td><td class="la">welt</td><td class="la">woltet</td></tr>
            <tr><th>si</th><td class="la">tuont</td><td class="la">tâten</td><td class="la">wellent</td><td class="la">wolten</td></tr>
          </tbody>
        </table></div>
        <p><strong><span class="la">tuon</span></strong> has an old reduplicated preterite: <span class="la">tete</span> in the singular, <span class="la">tâten</span> in the plural, <span class="la">tæte</span> in the 2nd singular and the subjunctive, with the same vowels as <span class="la">gap, gâben, gæbe</span> in series V (Lecture II). Modern <em>tat</em> comes from the plural vowel. The participle <span class="la">getân</span> also means “made, shaped”: <span class="la">wol getân</span>, “well made, beautiful”.</p>
        <p><strong><span class="la">wellen</span></strong> “want, will” has <span class="la">wil</span> in the singular, an old subjunctive form, and regular forms in the plural; the subjunctive is <span class="la">welle</span>, the preterite <span class="la">wolte</span> or <span class="la">wolde</span>. In the reading: <span class="la">sô wil ich immer sîn</span>; <span class="la">den minnen wolde ir lîp</span>; and <span class="la">in welle got behüeten</span>, which Bartsch explains as <span class="la">in enwelle</span>: “unless God will protect him”. A subjunctive at the start of a clause, with a negative understood, means “unless”.</p>
        <p>For <span class="la">sîn</span> see Lecture I; for <span class="la">muoste, kunde, sol, kan, wesse</span>, which also appear in the reading, see Lecture VI.</p>
      `
    }
  ],

  vocab: [
    // nouns
    { id: 'troum', head: 'troum', la: 'troum, troumes', g: 'm', pos: 'noun', en: 'dream', de: 'Traum' },
    { id: 'valke', head: 'valke', la: 'valke, valken', g: 'm', pos: 'noun, weak', en: 'falcon', de: 'Falke' },
    { id: 'ar', head: 'ar', la: 'ar, arn; pl. arn, aren', g: 'm', pos: 'noun, weak', en: 'eagle', de: 'Adler, Aar', note: 'Adler is from adel-ar, noble eagle.' },
    { id: 'muoter', head: 'muoter', la: 'muoter', g: 'f', pos: 'noun', en: 'mother', de: 'Mutter', note: 'Often uninflected in the singular: maneger muoter kint, many a mother’s child.' },
    { id: 'recke', head: 'recke', la: 'recke, recken', g: 'm', pos: 'noun, weak', en: 'warrior, hero', de: 'Recke, Held', note: 'Originally an exile, a wandering fighter (Bartsch, Lecture III).' },
    { id: 'minne', head: 'minne', la: 'minne', g: 'f', pos: 'noun', en: 'love', de: 'Liebe', note: 'The courtly word; Lecture VIII.' },
    { id: 'not', head: 'nôt', la: 'nôt; pl. nœte', g: 'f', pos: 'noun', en: 'distress, trouble, danger; need', de: 'Not, Bedrängnis, Gefahr', note: 'The Nibelungenlied calls itself der Nibelunge nôt in manuscripts of the B group.' },
    { id: 'liebe', head: 'liebe', la: 'liebe', g: 'f', pos: 'noun', en: 'joy, pleasure; love', de: 'Freude; Liebe', note: 'Bartsch on 17,3: liebe = Freude. Often paired with leit, sorrow.' },
    { id: 'leit', head: 'leit', la: 'leit, leides', g: 'n', pos: 'noun', en: 'sorrow, grief; harm', de: 'Leid, Schmerz', note: 'liep unde leit: joy and sorrow.' },
    { id: 'kint', head: 'kint', la: 'kint; pl. kint, kinder', g: 'n', pos: 'noun', en: 'child; young person', de: 'Kind' },
    // weak verbs
    { id: 'troumen', head: 'troumen', la: 'troumen, troumte', pos: 'verb, weak', en: 'dream (impersonal: troumte Kriemhilde, Kriemhild dreamt)', de: 'träumen (es träumte ihr)' },
    { id: 'sagen', head: 'sagen', la: 'sagen, sagete (seite), gesaget (geseit)', pos: 'verb, weak', en: 'say, tell', de: 'sagen, erzählen', note: 'Short stem: sagete. Contracted seite, geseit (Lecture III).' },
    { id: 'leben', head: 'leben', la: 'leben, lebete, gelebet', pos: 'verb, weak', en: 'live', de: 'leben' },
    { id: 'behueten', head: 'behüeten', la: 'behüeten, behuote', pos: 'verb, weak', en: 'protect, guard', de: 'behüten, beschützen' },
    { id: 'lonen', head: 'lônen', la: 'lônen, lônte', pos: 'verb, weak', en: 'reward, repay (+ dat.)', de: 'lohnen, vergelten' },
    { id: 'gefuegen', head: 'gevüegen', la: 'gevüegen, gefüegen', pos: 'verb, weak', en: 'bring about, grant', de: 'fügen, zuteil werden lassen' },
    { id: 'brennen', head: 'brennen', la: 'brennen, brante, gebrant', pos: 'verb, weak (Rückumlaut)', en: 'burn (transitive)', de: 'brennen, verbrennen' },
    { id: 'hoeren', head: 'hœren', la: 'hœren, hôrte, gehœret', pos: 'verb, weak (Rückumlaut)', en: 'hear', de: 'hören' },
    { id: 'denken', head: 'denken', la: 'denken, dâhte, gedâht', pos: 'verb, weak, irregular', en: 'think', de: 'denken' },
    { id: 'bringen', head: 'bringen', la: 'bringen, brâhte, brâht', pos: 'verb, weak, irregular', en: 'bring', de: 'bringen' },
    // irregular
    { id: 'han', head: 'hân', la: 'hân (haben), hâte/hete, gehabet', pos: 'verb, irregular', en: 'have', de: 'haben' },
    { id: 'lan', head: 'lân', la: 'lân (lâzen), liez/lie, gelân', pos: 'verb, irregular', en: 'let; leave', de: 'lassen' },
    { id: 'gan', head: 'gân', la: 'gân, gên; gienc/gie; gegangen', pos: 'verb, irregular', en: 'go, walk', de: 'gehen' },
    { id: 'stan', head: 'stân', la: 'stân, stên; stuont; gestanden', pos: 'verb, irregular', en: 'stand', de: 'stehen' },
    { id: 'tuon', head: 'tuon', la: 'tuon, tete, tâten, getân', pos: 'verb, irregular', en: 'do, make; put', de: 'tun, machen' },
    { id: 'wellen', head: 'wellen', la: 'wellen (ich wil), wolte/wolde', pos: 'verb, irregular', en: 'want, will', de: 'wollen' },
    { id: 'missegan', head: 'missegân', la: 'missegân', pos: 'verb, irregular', en: 'go wrong, turn out badly (+ dat.)', de: 'misslingen, schlecht ergehen' },
    // strong verbs in the reading
    { id: 'ziehen', head: 'ziehen', la: 'ziehen, zôch, zugen, gezogen', pos: 'verb, strong II', en: 'pull, draw; rear, train (a hawk)', de: 'ziehen; aufziehen', note: 'Grammatical change h/g (Lecture II).' },
    { id: 'bescheiden', head: 'bescheiden', la: 'bescheiden, beschiet, beschieden', pos: 'verb, strong VII', en: 'explain, interpret; decide', de: 'deuten, erklären; entscheiden' },
    { id: 'versprechen', head: 'versprëchen', la: 'versprëchen, versprach, versprâchen, versprochen', pos: 'verb, strong IV', en: 'renounce, refuse; speak against; promise', de: 'sich lossagen von; versprechen', note: 'False friend: Bartsch glosses versprich ez as “verrede es”.' },
    { id: 'miden', head: 'mîden', la: 'mîden, meit, miten, gemiten', pos: 'verb, strong I', en: 'avoid, shun', de: 'meiden' },
    { id: 'bewegen', head: 'sich bewëgen', la: 'bewëgen, bewac, bewâgen, bewëgen', pos: 'verb, strong V', en: 'renounce, give up (+ gen.)', de: 'verzichten auf', note: 'Bartsch: sich bewegen mit gen., auf etwas verzichten.' },
    { id: 'rechen', head: 'rëchen', la: 'rëchen, rach, râchen, gerochen', pos: 'verb, strong IV', en: 'avenge', de: 'rächen', note: 'Strong in Middle High German; modern rächen is weak, but gerochen survives in old style.' },
    // adjectives
    { id: 'vro', head: 'vrô', la: 'vrô, vrôwer', pos: 'adjective', en: 'glad, happy', de: 'froh' },
    { id: 'edel', head: 'edel', la: 'edel', pos: 'adjective', en: 'noble, of noble birth', de: 'edel, adlig' }
  ],

  grammarCards: [
    { id: 'mh5-weak', front: 'Weak preterite and participle of suochen', back: 'suochte, suochten; gesuochet' },
    { id: 'mh5-ete', front: 'sagete, lebete: why the extra e?', back: 'Short stems keep -e- before -te; long stems drop it (suochte)' },
    { id: 'mh5-subj', front: 'Past subjunctive of a weak verb', back: 'Same as the indicative, except Rückumlaut verbs: brante → brente' },
    { id: 'mh5-ru', front: 'What is Rückumlaut?', back: 'Weak verbs with umlaut in the present and none in the preterite: brennen/brante, hœren/hôrte' },
    { id: 'mh5-ru2', front: 'Preterite of kennen, nennen, senden, wenden', back: 'kante, nante, sante, wante (modern kannte, nannte, sandte, wandte)' },
    { id: 'mh5-fuorte', front: 'fuorte is from …', back: 'füeren (führen), not varn (vuor)' },
    { id: 'mh5-dahte', front: 'dahte / dâhte', back: 'covered (decken) / thought (denken)' },
    { id: 'mh5-brahte', front: 'Preterite of denken, bringen, dunken, vürhten', back: 'dâhte, brâhte, dûhte, vorhte' },
    { id: 'mh5-han', front: 'Present of hân', back: 'hân, hâst, hât; hân, hât, hânt' },
    { id: 'mh5-hete', front: 'Preterite forms of hân', back: 'hâte, hæte, hête, hete, het (hiete)' },
    { id: 'mh5-n', front: 'Which verbs keep -n in the 1st singular?', back: 'hân, lân, gân, stân, tuon' },
    { id: 'mh5-gan', front: 'Preterite of gân and stân', back: 'gienc (gie), giengen; stuont, stuonden' },
    { id: 'mh5-lat', front: 'Die rede lât belîben', back: 'Let that talk be: lât = imperative plural of lân' },
    { id: 'mh5-tete', front: 'Preterite of tuon', back: 'tete, tæte, tete; tâten, tâtet, tâten' },
    { id: 'mh5-getan', front: 'wol getân', back: 'well made, beautiful (participle of tuon)' },
    { id: 'mh5-wil', front: 'Present of wellen', back: 'wil, wil(t), wil; wellen, welt, wellent; subj. welle' },
    { id: 'mh5-welle', front: 'in welle got behüeten', back: 'unless God will protect him (= in enwelle; subjunctive)' },
    { id: 'mh5-troumte', front: 'troumte Kriemhilde', back: 'Kriemhild dreamt: impersonal troumen with the dative' },
    { id: 'mh5-sc', front: 'scœne, besceiden in Bartsch', back: 'Bartsch’s spelling of sch: schœne, bescheiden' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Preterite of <span class="la">brennen</span>:', options: ['brante', 'brennete', 'bran', 'brunne'], answer: 0, explain: 'Rückumlaut: no umlaut in the preterite (modern brannte).' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">hôrte</span> is the preterite of:', options: ['hœren', 'hôhen', 'harren', 'hüeten'], answer: 0, explain: 'hœren, hôrte: Rückumlaut.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">fuorte</span> is the preterite of:', options: ['füeren (führen)', 'varn (fahren)', 'vürhten (fürchten)', 'vuoren (füttern)'], answer: 0, explain: 'varn has the strong preterite vuor.' },
    { id: 'e4', type: 'mc', prompt: 'Why does <span class="la">sagete</span> have three syllables, but <span class="la">troumte</span> only two?', options: ['sagen has a short stem, troumen a long one', 'sagete is a subjunctive', 'troumte is strong', 'it is a mistake in Bartsch'], answer: 0, explain: 'Short stems keep the e: sagete, lebete.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">troumte Kriemhilde</span> means:', options: ['Kriemhild dreamt', 'he dreamt of Kriemhild', 'Kriemhild’s dream', 'they dreamt for Kriemhild'], answer: 0, explain: 'troumen is impersonal with the dative, as in “mir träumte”.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Die rede lât belîben</span> means:', options: ['Let that talk be', 'The talk lasts', 'The speech stays late', 'She lets the speech go'], answer: 0, explain: 'lât: imperative plural of lân (Bartsch).' },
    { id: 'e7', type: 'mc', prompt: '<span class="la">in welle got behüeten</span> means:', options: ['unless God will protect him', 'God wants to protect him', 'God protects him in the wave', 'if God protected him'], answer: 0, explain: 'Bartsch: = in enwelle. A subjunctive at the start of the clause with a negative understood: unless.' },
    { id: 'e8', type: 'mc', prompt: 'Preterite plural of <span class="la">tuon</span>:', options: ['tâten', 'teten', 'tuoten', 'tânen'], answer: 0, explain: 'tete, tâten: modern taten.' },
    { id: 'e9', type: 'mc', prompt: 'Preterite of <span class="la">gân</span>:', options: ['gienc, gie', 'gâte', 'gangete', 'gânt'], answer: 0, explain: 'From the longer stem gangen.' },
    { id: 'e10', type: 'mc', prompt: '<span class="la">Kriemhilt … sich minne gar bewac</span> means:', options: ['Kriemhild renounced love entirely', 'Kriemhild was moved by love', 'Kriemhild weighed up love', 'love moved Kriemhild'], answer: 0, explain: 'sich bewëgen + genitive: give up (Bartsch).' },
    { id: 'e11', type: 'match', prompt: 'Match the infinitive and the preterite.', pairs: [
      ['denken', 'dâhte'], ['bringen', 'brâhte'], ['decken', 'dahte'], ['nennen', 'nante'], ['wænen', 'wânde']
    ] },
    { id: 'e12', type: 'match', prompt: 'Match the 3rd singular present to its verb.', pairs: [
      ['hât', 'hân, haben'], ['lât', 'lân, lâzen'], ['gât', 'gân, gên'], ['stât', 'stân, stên'], ['tuot', 'tuon']
    ] },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Daz viur brennet; ez br___te.</span>', hint: 'preterite, no umlaut', answers: ['an'], full: 'ez brante', explain: 'brennen, brante.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Ich hœre; ich h___rte.</span>', hint: 'preterite, no umlaut', answers: ['ô', 'o'], full: 'ich hôrte', explain: 'hœren, hôrte.' },
    { id: 'e15', type: 'gap', prompt: '<span class="la">Ër tuot; ër ___.</span>', hint: 'preterite singular', answers: ['tete'], full: 'ër tete', explain: 'tete in the singular, tâten in the plural.' },
    { id: 'e16', type: 'gap', prompt: '<span class="la">Ich ___ ein ros.</span>', hint: 'I have (contracted form)', answers: ['hân', 'han'], full: 'Ich hân ein ros.', explain: 'hân, hâst, hât.' },
    { id: 'e17', type: 'gap', prompt: '<span class="la">Si leb___ vil manegen tac.</span>', hint: 'preterite, short stem', answers: ['ete'], full: 'Si lebete vil manegen tac.', explain: 'Short stem: lebete.' },
    { id: 'e18', type: 'paradigm', prompt: 'Give the present of <span class="la">hân</span> and <span class="la">gân</span>.', headers: ['hân', 'gân'], rows: [
      { label: 'ich', answers: ['hân', 'gân|gên'] },
      { label: 'du', answers: ['hâst', 'gâst|gêst'] },
      { label: 'ër', answers: ['hât', 'gât|gêt'] },
      { label: 'wir', answers: ['hân', 'gân|gên'] },
      { label: 'ir', answers: ['hât', 'gât|gêt'] },
      { label: 'si', answers: ['hânt', 'gânt|gênt'] }
    ] },
    { id: 'e19', type: 'paradigm', prompt: 'Give the preterite of <span class="la">tuon</span> and <span class="la">sagen</span>.', headers: ['tuon', 'sagen'], rows: [
      { label: 'ich', answers: ['tete', 'sagete|seite'] },
      { label: 'du', answers: ['tæte', 'sagetest|seitest'] },
      { label: 'ër', answers: ['tete', 'sagete|seite'] },
      { label: 'wir', answers: ['tâten', 'sageten|seiten'] },
      { label: 'ir', answers: ['tâtet', 'sagetet|seitet'] },
      { label: 'si', answers: ['tâten', 'sageten|seiten'] }
    ] },
    { id: 'e20', type: 'order', prompt: 'Put the German translation in order.', source: 'Den troum siu dô sagete ir muoter Uoten.', tokens: ['Den Traum', 'erzählte sie', 'da', 'ihrer Mutter', 'Ute.'], explain: 'sagete: weak preterite of sagen.' },
    { id: 'e21', type: 'translate', dir: 'mhd-de', source: 'Ich hôrte ein wazzer diezen.', model: 'Ich hörte ein Wasser rauschen.', accepted: ['Ich hörte ein Wasser rauschen', 'Ich hörte einen Bach rauschen', 'Ich hörte ein Wasser tosen', 'Ich hörte Wasser rauschen'] },
    { id: 'e22', type: 'translate', dir: 'mhd-de', source: 'Er tete ez gerne.', model: 'Er tat es gern.', accepted: ['Er tat es gern', 'Er tat es gerne', 'Er machte es gern', 'Er machte es gerne'] },
    { id: 'e23', type: 'translate', dir: 'mhd-en', source: 'Si wolde niemen minnen.', model: 'She did not want to love anyone.', accepted: ['She did not want to love anyone', 'She wanted to love no one', 'She would love no one', 'She wanted to love nobody', 'She would not love anyone', 'She did not want to love anybody'] },
    { id: 'e24', type: 'translate', dir: 'de-mhd', source: 'Er brannte die Burg.', model: 'Er brante die burc.', accepted: ['Er brante die burc', 'Er brante die burg', 'Er brante diu burc'] },
    { id: 'e25', type: 'translate', dir: 'de-mhd', source: 'Wir stehen hier.', model: 'Wir stân hie.', accepted: ['Wir stân hie', 'Wir stên hie', 'Wir stân hier', 'Wir stên hier'] },
    { id: 'e26', type: 'mc', prompt: 'What does Uote say the falcon in the dream is?', options: ['A noble man whom Kriemhild will lose', 'Kriemhild herself', 'Her brother Gunther', 'A sign of a good harvest'], answer: 0, explain: 'der valke den du ziuhest, daz ist ein edel man.' },
    { id: 'e27', type: 'mc', prompt: '<span class="la">Nu versprich ez niht ze sêre</span> means:', options: ['Do not renounce it so firmly', 'Do not promise it too much', 'Do not speak too loudly', 'Do not hurt it so much'], answer: 0, explain: 'versprëchen: renounce, speak against (Bartsch: “verrede es”). A false friend.' }
  ],

  reading: {
    title: 'Nibelungenlied, stanzas 13–19: Kriemhild’s dream',
    note: 'Authentic text: stanzas 13–19 of the B version, transcribed from the page images of Karl Bartsch’s edition (Leipzig 1866), pp. 4–5 (Lachmann’s numbering 12–18). Each long line is printed in its two halves, the second indented. Bartsch’s metrical accents and elision dots are left out; his spelling sc for sch is kept. Tap any word.',
    text: 'In disen hôhen êren\n\u2003\u2003troumte Kriemhilde,\nwie si züge einen valken,\n\u2003\u2003starc scœn’ und wilde,\nden ir zwên’ aren erkrummen,\n\u2003\u2003daz siu daz muoste sehen:\nir enkunde in dirre werlde\n\u2003\u2003leider nimmer gescehen.\n\nDen troum siu dô sagete\n\u2003\u2003ir muoter Uoten.\nsine kunde’s niht besceiden\n\u2003\u2003baz der guoten:\n«der valke den du ziuhest,\n\u2003\u2003daz ist ein edel man:\nin welle got behüeten,\n\u2003\u2003du muost in sciere vloren hân.»\n\n«Waz saget ir mir von manne,\n\u2003\u2003vil liebiu muoter mîn?\nâne recken minne\n\u2003\u2003sô wil ich immer sîn.\nsus scœne ich wil belîben\n\u2003\u2003unz an mînen tôt,\ndaz ich von mannes minne\n\u2003\u2003sol gewinnen nimmer nôt.»\n\n«Nu versprich ez niht ze sêre»,\n\u2003\u2003sprach aber ir muoter dô.\n«soltu immer herzenlîche\n\u2003\u2003zer werlde werden vrô,\ndaz gesciht von mannes minne.\n\u2003\u2003du wirst ein scœne wîp,\nobe dir noch got gefüeget\n\u2003\u2003eins rehte guoten ritters lîp.»\n\n«Die rede lât belîben»,\n\u2003\u2003sprach siu, «frouwe mîn.\nez ist an manegen wîben\n\u2003\u2003vil dicke worden scîn\nwie liebe mit leide\n\u2003\u2003ze jungest lônen kan.\nich sol sie mîden beide:\n\u2003\u2003son’ kan mir nimmer missegân.»\n\nKriemhilt in ir muote\n\u2003\u2003sich minne gar bewac.\nsît lebete diu vil guote\n\u2003\u2003vil manegen lieben tac,\ndaz sine wesse niemen\n\u2003\u2003den minnen wolde ir lîp.\nsît wart siu mit êren\n\u2003\u2003eins vil küenen recken wîp.\n\nDer was der selbe valke,\n\u2003\u2003den si in ir troume sach,\nden ir besciet ir muoter.\n\u2003\u2003wie sêre siu daz rach\nan ir næhsten mâgen,\n\u2003\u2003die in sluogen sint!\ndurch sîn eines sterben\n\u2003\u2003starp vil maneger muoter kint.',
    translations: [
      { label: 'German translation', text: 'In solcher Herrlichkeit träumte Kriemhild, sie zöge einen Falken auf, stark, schön und wild, den ihr zwei Adler zerfleischten, und sie musste das mit ansehen: Nie hätte ihr in dieser Welt Schmerzlicheres geschehen können.\n\nDen Traum erzählte sie ihrer Mutter Ute. Die konnte ihn der Guten nicht besser deuten: „Der Falke, den du aufziehst, das ist ein edler Mann. Wenn Gott ihn nicht beschützen will, wirst du ihn bald verloren haben.“\n\n„Was sagt Ihr mir von einem Mann, liebste Mutter? Ohne die Liebe eines Helden will ich immer bleiben. So schön, wie ich bin, will ich bleiben bis an meinen Tod, damit ich durch die Liebe eines Mannes niemals Leid gewinne.“\n\n„Nun verschwöre es nicht so sehr“, antwortete ihr da die Mutter. „Sollst du jemals auf der Welt von Herzen froh werden, so geschieht das durch die Liebe eines Mannes. Du wirst eine schöne Frau, wenn dir Gott einmal einen recht tüchtigen Ritter schenkt.“\n\n„Lasst diese Rede“, sagte sie, „meine Herrin. An vielen Frauen hat sich sehr oft gezeigt, wie Freude zuletzt mit Leid lohnen kann. Ich will beides meiden; dann kann es mir niemals schlecht ergehen.“\n\nKriemhild verzichtete in ihrem Herzen ganz auf die Liebe. Danach lebte die Edle viele glückliche Tage, ohne dass sie jemanden wusste, den sie lieben wollte. Später wurde sie in Ehren die Frau eines sehr kühnen Helden.\n\nDas war derselbe Falke, den sie in ihrem Traum sah und den ihr die Mutter deutete. Wie schwer rächte sie das an ihren nächsten Verwandten, die ihn später erschlugen! Durch den Tod dieses einen starb manches Mutter Kind.' },
      { label: 'English translation', text: 'Amid such high honour Kriemhild dreamt that she was rearing a falcon, strong, handsome and wild, which two eagles tore to pieces, and she had to watch it: nothing in this world could have grieved her more.\n\nShe told the dream to her mother, Uote, who could interpret it no better for her good daughter than this: “The falcon you are rearing is a noble man. Unless God will protect him, you will soon have lost him.”\n\n“Why do you speak to me of a man, dearest mother? I mean to live without any warrior’s love for ever. I will stay as beautiful as I am until my death, so that I never come to grief through a man’s love.”\n\n“Do not forswear it so firmly,” her mother answered. “If you are ever to be truly happy in this world, it will come through a man’s love. You will be a beautiful wife, if God grants you a truly good knight.”\n\n“Let that talk be, my lady,” she said. “It has very often been seen in many women how joy can be repaid with sorrow in the end. I shall avoid them both; then nothing can ever go wrong for me.”\n\nIn her heart Kriemhild renounced love entirely. After that the good maiden lived many a happy day without knowing anyone she wished to love. Later, with honour, she became the wife of a very bold warrior.\n\nHe was the very falcon she saw in her dream, which her mother interpreted for her. How terribly she avenged it on her closest kinsmen, who later killed him! Through the death of that one man many a mother’s child died.' }
    ],
    notes: [
      { ref: 'In disen hôhen êren troumte Kriemhilde', html: 'Bartsch: “Während sie in solcher Herrlichkeit lebte.” <span class="la">troumen</span> is impersonal: “it dreamt to Kriemhild”, with <span class="la">Kriemhilde</span> in the dative, as modern <em>mir träumte</em>. <span class="la">troumte</span>: long stem, so <span class="la">-te</span>.' },
      { ref: 'wie si züge einen valken', html: '<span class="la">züge</span>: past subjunctive of <span class="la">ziehen</span> (Bartsch: “aufzöge”), from the plural vowel <span class="la">u</span> (Lecture II). <span class="la">ziehen</span> is the falconer’s word for rearing and training a hawk.' },
      { ref: 'den ir zwên’ aren erkrummen', html: '<span class="la">aren</span>: plural of the weak noun <span class="la">ar</span>, “eagle” (modern <em>Aar</em>). <span class="la">erkrummen</span>: preterite plural of <span class="la">erkrimmen</span>, “tear with the claws” (Bartsch). <span class="la">zwên’</span> = <span class="la">zwêne</span>, masculine of “two”. <span class="la">ir</span>: dative, “for her”, i.e. her falcon.' },
      { ref: 'ir enkunde in dirre werlde leider nimmer gescehen', html: '<span class="la">leider</span> is the comparative of the adverb <span class="la">leide</span>: “more painfully” (Bartsch: “größeres Leid”). Nothing worse could happen to her. <span class="la">werlde</span> is Bartsch’s spelling of <span class="la">wërlte</span>.' },
      { ref: 'Den troum siu dô sagete ir muoter Uoten', html: '<span class="la">sagete</span>: weak preterite with a short stem, three syllables. Uote is Kriemhild’s widowed mother, queen of the Burgundians.' },
      { ref: 'sine kunde’s niht besceiden baz der guoten', html: '<span class="la">sine</span> = <span class="la">si ne</span>; <span class="la">kunde’s</span> = <span class="la">kunde ës</span>, “could (interpret) it”; Bartsch notes that the genitive depends on <span class="la">niht</span>. <span class="la">besceiden</span>: “deuten, auslegen” (Bartsch). <span class="la">der guoten</span>: weak adjective used as a noun, dative, “for the good girl”.' },
      { ref: 'in welle got behüeten, du muost in sciere vloren hân', html: 'Bartsch: <span class="la">in welle</span> for <span class="la">in enwelle</span>, “unless God will protect him”. <span class="la">in</span> is “him”. <span class="la">vloren hân</span>: perfect infinitive with <span class="la">hân</span>; <span class="la">vloren</span> = <span class="la">verloren</span>, <span class="la">sciere</span> = <span class="la">schiere</span>, “soon” (Bartsch).' },
      { ref: 'Waz saget ir mir von manne', html: '<span class="la">saget ir</span>: 2nd plural present of <span class="la">sagen</span>; Kriemhild addresses her mother politely with <span class="la">ir</span>, the mother answers with <span class="la">du</span>. <span class="la">von manne</span>: dative with <span class="la">-e</span>.' },
      { ref: 'âne recken minne sô wil ich immer sîn', html: '<span class="la">wil</span>: 1st singular of <span class="la">wellen</span>. <span class="la">recken minne</span>: genitive before the noun, “the love of a warrior”.' },
      { ref: 'sus scœne ich wil belîben', html: 'Bartsch: “so schön wie ich jetzt bin”. <span class="la">daz</span> in the next line means “so that” (Bartsch), and <span class="la">von</span> “through”.' },
      { ref: 'Nu versprich ez niht ze sêre', html: '<span class="la">versprëchen</span> with an accusative: “to speak against, renounce” (Bartsch: “etwas verreden”), not “promise”. <span class="la">sprach aber</span>: “answered” (Bartsch).' },
      { ref: 'soltu immer herzenlîche zer werlde werden vrô', html: '<span class="la">soltu</span> = <span class="la">solt du</span>, a condition by inversion: “if you are ever to …”. <span class="la">immer</span> here means “ever” (Bartsch: “jemals”); <span class="la">zer werlde</span> = <span class="la">ze der werlde</span>.' },
      { ref: 'du wirst ein scœne wîp', html: '<span class="la">wîp</span> here is “wife”, in contrast to <span class="la">maget</span>, “maiden” (Bartsch).' },
      { ref: 'obe dir noch got gefüeget eins rehte guoten ritters lîp', html: '<span class="la">gefüeget</span>: weak present, “grants” (Bartsch: “zu Theil werden lässt”). <span class="la">rehte</span> is an adverb, “very”. <span class="la">ritters lîp</span> means simply “a knight”: <span class="la">lîp</span> often stands for the person (Bartsch).' },
      { ref: 'Die rede lât belîben', html: '<span class="la">lât</span>: imperative plural of <span class="la">lân</span> (Bartsch), polite address again. <span class="la">frouwe mîn</span>: “my lady”, said by the daughter to her mother (Bartsch).' },
      { ref: 'ez ist an manegen wîben vil dicke worden scîn', html: '<span class="la">dicke</span>: “often”. <span class="la">scîn werden</span>: “become evident” (Bartsch). <span class="la">worden</span>: participle without <span class="la">ge-</span>.' },
      { ref: 'wie liebe mit leide ze jungest lônen kan', html: '<span class="la">liebe</span> is “joy” here (Bartsch: “Freude”), not love. Joy can in the end repay with sorrow: the motto of the whole poem, whose last stanza returns to <span class="la">liebe</span> and <span class="la">leit</span>.' },
      { ref: 'ich sol sie mîden beide: son’ kan mir nimmer missegân', html: '<span class="la">beide</span>: joy and sorrow, which love brings (Bartsch). <span class="la">son’</span> = <span class="la">sô ne</span>. <span class="la">missegân</span>, a compound of <span class="la">gân</span>: “go wrong”.' },
      { ref: 'Kriemhilt in ir muote sich minne gar bewac', html: '<span class="la">sich bewëgen</span> + genitive: “give up” (Bartsch); <span class="la">minne</span> is genitive. <span class="la">muot</span> here is “heart, mind”.' },
      { ref: 'daz sine wesse niemen den minnen wolde ir lîp', html: '<span class="la">wesse</span>: preterite of <span class="la">wizzen</span>; Bartsch notes that the poem also has <span class="la">weste</span> and <span class="la">wiste</span>. <span class="la">wolde</span>: preterite of <span class="la">wellen</span>. <span class="la">ir lîp</span> = “she” (Bartsch).' },
      { ref: 'sît wart siu mit êren eins vil küenen recken wîp', html: 'The bold warrior is Siegfried, not yet named. The poem tells the outcome before the story.' },
      { ref: 'wie sêre siu daz rach / an ir næhsten mâgen, die in sluogen sint', html: '<span class="la">rach</span>: preterite of <span class="la">rëchen</span>, strong in Middle High German. <span class="la">in</span> = “him”. <span class="la">sint</span>: “later”.' },
      { ref: 'durch sîn eines sterben starp vil maneger muoter kint', html: 'Bartsch: <span class="la">durch</span> = “um – willen”; <span class="la">sîn</span> is genitive, with <span class="la">eines</span>: “because he alone died”. <span class="la">maneger muoter</span>: genitive, “many a mother’s”.' }
    ],
    glosses: {
      'in': 'in; him (acc.)', 'disen': 'these (dat. pl.)', 'hôhen': 'high (dat. pl.)', 'êren': 'honours (dat. pl. of êre): in such honour', 'troumte': 'dreamt (troumen, impersonal + dat.)', 'kriemhilde': 'to Kriemhild (dat.): Kriemhild dreamt',
      'wie': 'how; that', 'si': 'she', 'züge': 'were rearing (past subj. of ziehen)', 'einen': 'a (acc.)', 'valken': 'falcon (acc. of valke)', 'starc': 'strong', 'scœn': 'beautiful (scœne, Bartsch’s sc = sch)', 'und': 'and', 'wilde': 'wild, untamed',
      'den': 'which (relative); the', 'ir': 'for her (dat.); her (possessive); you (pl.)', 'zwên': 'two (zwêne, masc.)', 'aren': 'eagles (pl. of ar)', 'erkrummen': 'tore with their claws (pret. pl. of erkrimmen)',
      'daz': 'that; so that; the; this', 'siu': 'she', 'muoste': 'had to (müezen)', 'sehen': 'see', 'enkunde': 'could not (en + kunde)', 'dirre': 'this (dat. fem.)', 'werlde': 'world (Bartsch’s spelling of wërlte)', 'leider': 'more painfully (comparative adverb)', 'nimmer': 'never', 'gescehen': 'happen (geschehen)',
      'troum': 'dream', 'dô': 'then', 'sagete': 'told (preterite of sagen)', 'muoter': 'mother', 'uoten': 'Uote (dat.)', 'sine': 'si ne: she … not', 'kunde': 'could (kunnen)', 's': 'ës: it (gen.)', 'niht': 'not', 'besceiden': 'interpret (bescheiden)', 'baz': 'better', 'der': 'the; to the (dat. fem.); who (relative)', 'guoten': 'good one (weak, dat. fem.)', 'guote': 'good (weak): diu vil guote, the good maiden; guoten (gen.)',
      'valke': 'falcon', 'du': 'you', 'ziuhest': 'rear, train (2nd sg. of ziehen)', 'ist': 'is', 'ein': 'a', 'edel': 'noble', 'man': 'man',
      'welle': 'will (subj. of wellen): in welle = unless … will', 'got': 'God', 'behüeten': 'protect', 'muost': 'must (müezen)', 'sciere': 'soon (schiere)', 'vloren': 'lost (verloren)', 'hân': 'have',
      'waz': 'what', 'saget': 'say (2nd pl. of sagen)', 'mir': 'to me', 'von': 'of, about; through', 'manne': 'man (dat.)', 'vil': 'very; many', 'liebiu': 'dear (nom. fem.)', 'mîn': 'my',
      'âne': 'without', 'recken': 'warrior’s (gen. of recke)', 'minne': 'love; of love (gen.)', 'sô': 'so, thus; as', 'wil': 'want, will (wellen)', 'ich': 'I', 'immer': 'always; ever', 'sîn': 'be; his (gen. of ër)',
      'sus': 'thus, so', 'scœne': 'beautiful', 'belîben': 'remain, stay', 'unz': 'until: unz an, until', 'an': 'on, at; until', 'mînen': 'my (acc.)', 'tôt': 'death',
      'mannes': 'man’s (gen.)', 'sol': 'shall, am to', 'gewinnen': 'gain, come to', 'nôt': 'distress, grief',
      'nu': 'now', 'versprich': 'renounce (imperative of versprëchen)', 'ez': 'it', 'ze': 'too; to', 'sêre': 'much, strongly', 'sprach': 'said (sprëchen)', 'aber': 'again; in reply',
      'soltu': 'solt du: if you are to', 'herzenlîche': 'from the heart', 'zer': 'ze der: in the', 'werden': 'become', 'vrô': 'glad, happy', 'gesciht': 'happens (geschiht)', 'wirst': 'will be (wërden)', 'wîp': 'wife; woman',
      'obe': 'if', 'dir': 'to you', 'noch': 'still; one day', 'gefüeget': 'grants (gevüegen)', 'eins': 'a (gen.: eines)', 'rehte': 'truly, very', 'ritters': 'knight’s (gen.)', 'lîp': 'person, body: ritters lîp, a knight; ir lîp, she',
      'die': 'the (fem. acc.); who (pl.)', 'rede': 'talk, speech', 'lât': 'let (imperative pl. of lân)', 'frouwe': 'lady', 'manegen': 'many (dat. pl.)', 'wîben': 'women (dat. pl.)', 'dicke': 'often', 'worden': 'become (participle of wërden)', 'scîn': 'evident (scîn werden: become clear)',
      'liebe': 'joy', 'mit': 'with', 'leide': 'sorrow (dat. of leit)', 'jungest': 'last: ze jungest, in the end', 'lônen': 'repay, reward', 'kan': 'can',
      'sie': 'them', 'mîden': 'avoid', 'beide': 'both', 'son': 'sô ne: then … not', 'missegân': 'go wrong',
      'kriemhilt': 'Kriemhild', 'muote': 'mind, heart (dat. of muot)', 'sich': 'herself', 'gar': 'entirely', 'bewac': 'renounced (sich bewëgen + gen.)',
      'sît': 'afterwards, later', 'lebete': 'lived (preterite of leben)', 'diu': 'the (fem.)', 'lieben': 'happy, dear (acc.)', 'tac': 'day',
      'wesse': 'knew (wizzen)', 'niemen': 'no one', 'minnen': 'love (verb)', 'wolde': 'wanted (wellen)', 'wart': 'became (wërden)', 'küenen': 'bold (gen.)',
      'was': 'was', 'selbe': 'same', 'troume': 'dream (dat.)', 'sach': 'saw (sëhen)', 'besciet': 'interpreted (beschiet, from bescheiden)', 'sêre': 'grievously, sorely', 'rach': 'avenged (rëchen)',
      'næhsten': 'nearest (dat. pl.)', 'mâgen': 'kinsmen (dat. pl.)', 'sluogen': 'killed (slahen)', 'sint': 'later', 'durch': 'through, because of', 'eines': 'one, alone (gen.)', 'sterben': 'death, dying', 'starp': 'died (stërben)', 'maneger': 'many a (gen. fem.)', 'kint': 'child'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What happens to the falcon in Kriemhild’s dream?', options: ['Two eagles tear it apart', 'It flies away', 'It is caught by a hunter', 'It brings her a ring'], answer: 0, explain: 'den ir zwên’ aren erkrummen.' },
      { id: 'r2', type: 'mc', prompt: 'How does Kriemhild answer her mother?', options: ['She will live without a man’s love', 'She asks who the man is', 'She agrees to marry', 'She asks for a falcon'], answer: 0, explain: 'âne recken minne sô wil ich immer sîn.' },
      { id: 'r3', type: 'mc', prompt: 'Why does Kriemhild want to avoid love?', options: ['Joy is repaid with sorrow in the end', 'Her mother forbids it', 'She wants to become a nun', 'She has already chosen a husband'], answer: 0, explain: 'wie liebe mit leide ze jungest lônen kan.' },
      { id: 'r4', type: 'mc', prompt: 'On whom, says the poet, will Kriemhild take revenge?', options: ['On her nearest kinsmen', 'On the eagles', 'On her mother', 'On the Saxons'], answer: 0, explain: 'an ir næhsten mâgen, die in sluogen sint.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Preterite of <span class="la">nennen</span>:', options: ['nante', 'nennete', 'nan', 'nunte'], answer: 0, explain: 'Rückumlaut: modern nannte.' },
      { id: 't2', type: 'mc', prompt: 'Preterite of <span class="la">denken</span>:', options: ['dâhte', 'dahte', 'denkte', 'danc'], answer: 0, explain: 'dâhte with a long â; dahte is from decken.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">si hânt</span> means:', options: ['they have', 'she has', 'they hang', 'she hangs'], answer: 0, explain: 'hân: hân, hâst, hât; hân, hât, hânt.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Ër st___nt dâ.</span>', hint: 'he stood there', answers: ['uo'], full: 'Ër stuont dâ.', explain: 'stân, stuont.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Ër wolde, wir w___n.</span>', hint: 'present: we want', answers: ['elle'], full: 'wir wellen', explain: 'ich wil, wir wellen.' },
      { id: 't6', type: 'mc', prompt: 'Which verb keeps <span class="la">-n</span> in the 1st singular present?', options: ['tuon (ich tuon)', 'sagen', 'sëhen', 'suochen'], answer: 0, explain: 'hân, lân, gân, stân, tuon.' },
      { id: 't7', type: 'mc', prompt: '<span class="la">wol getân</span> means:', options: ['beautiful, well made', 'well done!', 'done enough', 'badly treated'], answer: 0, explain: 'getân: participle of tuon, also “shaped”.' },
      { id: 't8', type: 'mc', prompt: 'Past subjunctive of <span class="la">brennen</span>:', options: ['brente', 'brante', 'brünne', 'brennete'], answer: 0, explain: 'Rückumlaut verbs have umlaut in the subjunctive.' },
      { id: 't9', type: 'translate', dir: 'mhd-de', source: 'Er gienc ze hove.', model: 'Er ging zu Hofe.', accepted: ['Er ging zu Hofe', 'Er ging zum Hof', 'Er ging an den Hof', 'Er ging zu Hof'] },
      { id: 't10', type: 'translate', dir: 'de-mhd', source: 'Ich habe einen Falken.', model: 'Ich hân einen valken.', accepted: ['Ich hân einen valken', 'Ich habe einen valken'] },
      { id: 't11', type: 'mc', prompt: 'Who interprets Kriemhild’s dream?', options: ['Her mother Uote', 'Hagen', 'A priest', 'Siegfried'], answer: 0, explain: 'Den troum siu dô sagete ir muoter Uoten.' },
      { id: 't12', type: 'mc', prompt: '<span class="la">liebe</span> in <span class="la">wie liebe mit leide … lônen kan</span> means:', options: ['joy', 'love', 'a beloved', 'loyalty'], answer: 0, explain: 'Bartsch: liebe = Freude.' }
    ]
  },

  reference: [
    { title: 'Weak verb: suochen', headers: ['', 'Present', 'Preterite'], rows: [
      ['ich', 'suoche', 'suochte'], ['du', 'suochest', 'suochtest'], ['ër', 'suochet', 'suochte'], ['wir', 'suochen', 'suochten'], ['ir', 'suochet', 'suochtet'], ['si', 'suochent', 'suochten'], ['Participle', '', 'gesuochet']
    ] },
    { title: 'Rückumlaut and changed stems', headers: ['Infinitive', 'Preterite', 'Participle'], rows: [
      ['brennen', 'brante', 'gebrant'], ['kennen', 'kante', 'bekant'], ['nennen', 'nante', 'genant'], ['senden', 'sante', 'gesant'], ['wenden', 'wante', 'gewant'], ['setzen', 'satzte', 'gesatzt'],
      ['hœren', 'hôrte', 'gehôrt'], ['füeren', 'fuorte', 'gefuort'], ['denken', 'dâhte', 'gedâht'], ['bringen', 'brâhte', 'brâht'], ['dunken', 'dûhte', 'gedûht'], ['vürhten', 'vorhte', 'gevorht']
    ] },
    { title: 'Irregular verbs: present (1)', headers: ['', 'hân', 'lân', 'gân'], rows: [
      ['ich', 'hân', 'lân', 'gân'], ['du', 'hâst', 'lâst', 'gâst'], ['ër', 'hât', 'lât', 'gât'], ['wir', 'hân', 'lân', 'gân'], ['ir', 'hât', 'lât', 'gât'], ['si', 'hânt', 'lânt', 'gânt']
    ] },
    { title: 'Irregular verbs: present (2)', headers: ['', 'stân', 'tuon', 'wellen'], rows: [
      ['ich', 'stân', 'tuon', 'wil'], ['du', 'stâst', 'tuost', 'wil(t)'], ['ër', 'stât', 'tuot', 'wil'], ['wir', 'stân', 'tuon', 'wellen'], ['ir', 'stât', 'tuot', 'welt'], ['si', 'stânt', 'tuont', 'wellent']
    ] },
    { title: 'Irregular verbs: preterite and participle', headers: ['', 'Preterite', 'Participle'], rows: [
      ['hân', 'hâte, hete', 'gehabet, gehât'], ['lân', 'liez, lie', 'gelâzen, gelân'], ['gân', 'gienc, gie', 'gegangen, gegân'], ['stân', 'stuont', 'gestanden, gestân'], ['tuon', 'tete, pl. tâten', 'getân'], ['wellen', 'wolte, wolde', '(rare)']
    ] }
  ]
});
