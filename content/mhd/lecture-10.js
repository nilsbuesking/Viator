/*
 * Middle High German — Lecture X: manuscripts and editions, from the Codex Manesse to Lachmann.
 * Reading: Walther von der Vogelweide, L 9,16–39 (third stanza of the Reichston), from the page image of Lachmann’s
 * 2nd edition (Berlin 1843), p. 9; Lachmann’s notes on the manuscripts from the same volume, pp. 130–131.
 * Source panel: Lachmann’s Vorrede (1827, renewed 1843), pp. VI–VII, same volume.
 * See CONTENT-CHECKS.md.
 */
Viator.addLecture('mhd', {
  id: 'mhd-10',
  number: 10,
  title: 'Ich sach mit mînen ougen',
  subtitle: 'Manuscripts and editions: from the Codex Manesse to Lachmann; Walther’s third Reichston stanza and its variants',
  minutes: 60,

  intro: `
    <p>No Middle High German poet’s own copy of his work survives. What we have are manuscripts written by scribes, often decades or a century after the poet’s death, which differ from one another in spelling, dialect, wording, and even in which lines and stanzas they contain. The neat text with circumflexes that you have been reading is the work of 19th-century editors, above all Karl Lachmann, who compared the manuscripts, chose between their readings, and wrote the result in a standard spelling of their own design.</p>
    <p>This lecture looks behind the edition. You will meet the great song manuscripts known as A, B and C, the last of them the Codex Manesse of Lecture I; Lachmann’s own description of them, in the preface to his Walther of 1827; and the notes in which he records what each manuscript actually reads. The reading is the third stanza of Walther’s Reichston, whose first two stanzas you met in the source panels of Lectures IV and V: the poet as a witness to the quarrel between pope and empire after the double election of 1198. Its notes set Lachmann’s text beside the readings of the manuscripts, line by line.</p>
    <p>By the end you should be able to say how a medieval text reaches a modern reader, read an editor’s apparatus, recognise common manuscript spellings, and judge what a normalised edition does and does not tell you.</p>
  `,

  background: [
    {
      title: 'How the texts survive',
      html: `
        <p>Middle High German literature survives in manuscripts on parchment and, from the 14th century, increasingly on paper, each copied by hand. A scribe could change the spelling to suit his own dialect, misread his exemplar, skip a line, or improve what he thought was wrong. Every copy is therefore a new version. For Walther, Hartmann, Wolfram and the poet of the <em>Nibelungenlied</em> we have no autographs; for many works the oldest surviving copy is far younger than the work itself.</p>
        <p>Love songs and political stanzas were collected in anthologies, arranged by poet. Editors refer to them by letters, sigla, most of them Lachmann’s:</p>
        <ul>
          <li><strong>A</strong>, the Kleine Heidelberger Liederhandschrift (Heidelberg, Cod. Pal. germ. 357), late 13th century, probably from Alsace.</li>
          <li><strong>B</strong>, the Weingartner Liederhandschrift (Stuttgart), early 14th century, from the region of Constance, named after the monastery of Weingarten where it was later kept.</li>
          <li><strong>C</strong>, the Große Heidelberger Liederhandschrift or Codex Manesse (Heidelberg, Cod. Pal. germ. 848), written in Zurich between about 1300 and 1340, with some 140 poets and their miniatures (Lecture I).</li>
          <li><strong>E</strong>, the Würzburg manuscript of the mid-14th century, a household book compiled for Michael de Leone.</li>
        </ul>
        <p>The Codex Manesse had a long journey. By the early 17th century it was in the library of the Electors Palatine at Heidelberg; from 1657 it was in the royal library in Paris; the Zurich scholar Johann Jakob Bodmer borrowed it in the 1740s and printed much of it (1748, 1758–59); and in 1888 it returned to Heidelberg through an exchange. Lachmann, writing in 1827, never saw it: he worked from Bodmer’s print and from collations made by others.</p>
      `
    },
    {
      title: 'Karl Lachmann and classical Middle High German',
      html: `
        <p>Karl Lachmann (1793–1851) was a classical scholar, editor of Lucretius and of the Greek New Testament, as well as a Germanist. Between 1826 and 1833 he edited the <em>Nibelungenlied</em>, Walther, <em>Iwein</em> (with Georg Friedrich Benecke) and Wolfram. He brought to them the methods of classical textual criticism: collate every manuscript, work out how they are related, and use those relations to recover the lost original as closely as possible, correcting where all the copies are wrong.</p>
        <p>He also gave the texts a uniform spelling. Where the manuscripts write <span class="la">horte</span>, <span class="la">baide</span> or <span class="la">sú</span>, Lachmann prints <span class="la">hôrte</span>, <span class="la">beide</span>, <span class="la">si</span>, marking long vowels with a circumflex and choosing the forms he believed the best poets of around 1200 had used. Dictionaries and grammars adopted his spelling, and it is the “normalised Middle High German” of this course. It is an editorial construction of the 19th century: no medieval scribe wrote like this. His page-and-line numbering of Walther (L 9,16), and his division of <em>Parzival</em> into sections of thirty lines (Pz. 116,5), are still the standard references.</p>
        <p>How original Lachmann’s method was is itself debated. The “Lachmann method” was named and systematised largely after him; Sebastiano Timpanaro’s study of its origins (1963) showed how much of it others had developed, and Lachmann did not draw the family trees of manuscripts (stemmata) now associated with his name.</p>
      `
    },
    {
      title: 'After Lachmann: which text do we read?',
      html: `
        <p>Lachmann’s aim of reconstructing a lost original was challenged in the 20th century. In 1928 the French scholar Joseph Bédier argued that editors’ family trees were unreliable and that it was safer to print one good manuscript, correcting only clear errors. German editors increasingly did the same, following a single <em>Leithandschrift</em>, “guiding manuscript”: Bartsch’s <em>Nibelungenlied</em> follows B (Lecture IX). From the late 1980s the “New Philology” went further and treated variation as the normal state of medieval texts: each manuscript version is a text in its own right, not a corrupted copy of a perfect original.</p>
        <p>Walther’s editions show the change. Lachmann’s edition was revised by later scholars many times, and its modern successors, edited by Christoph Cormeau (1996) and Thomas Bein (2013), keep his numbering but print the manuscripts’ versions far more closely and show where they differ. This course reads 19th-century editions because they are out of copyright and the scans are in hand. Modern editions sometimes have different words, and you should expect that.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p><em>C. die handschrift zu Paris, die ohne grund so genannte mannessische, ist bei weitem die reichste, aber jünger als ABD, und nicht so gut daſs eine buchstäbliche vergleichung von groſsem nutzen sein würde, weshalb ich mich gern mit dem gedruckten begnüge.</em></p>
    <p><em>allein ob die Mannessen in Zürich ein liederbuch geschrieben oder schreiben lassen, davon wissen wir nichts: Johann Hadlaub sagt in der bekannten stelle (MS. 2, 187<sup>a</sup>) nur daſs sie liederbücher sammelten.</em></p>
    <p>Karl Lachmann, preface to his Walther (dated 1 May 1827, renewed 10 July 1843), pp. VI–VII and the footnote on p. VII, in the 2nd edition (Berlin 1843).</p>
    <p>Lachmann thought C, the Codex Manesse, the richest collection but later and less careful than A, B and D, and was content to use the printed text. The name comes from a song by the Zurich poet Johannes Hadlaub praising Rüdiger Manesse and his son as collectors of songbooks. Lachmann’s point still stands in part: no document proves that the Manesse family commissioned the codex, though most scholars think a link with their circle in Zurich likely. In a footnote he lists which manuscripts he had handled himself and which he knew only from copies or prints; C is among the latter. Note his spelling: like Jacob Grimm, he wrote nouns with small letters.</p>
  `,

  pronunciation: `
    <h3>Reading manuscript spelling</h3>
    <p>When an edition quotes a manuscript, as Lachmann’s notes do, the spelling is the scribe’s. A few habits recur:</p>
    <ul>
      <li>No length marks: <span class="la">horte</span> for <span class="la">hôrte</span>, <span class="la">rome</span> for <span class="la">Rôme</span>. Capitals for names are not used consistently.</li>
      <li>Diphthongs written with marks over the letter: <span class="la">ů</span> for <span class="la">uo</span>; a mark over <span class="la">u</span> (printed <span class="la">ú</span> by Lachmann) often stands for <span class="la">iu</span> or <span class="la">ü</span>: C’s <span class="la">sú</span> = <span class="la">siu</span>, <span class="la">beidú</span> = <span class="la">beidiu</span>.</li>
      <li><span class="la">ai</span> for <span class="la">ei</span> in Swabian and Alemannic scribes: B’s <span class="la">baide</span>, <span class="la">ainen</span>. Lachmann noted that A, B, C and a fourth collection all show “schwäbische oder vielleicht richtiger thurgäuische formen”.</li>
      <li>Dialect forms: <span class="la">kilchen</span> for <span class="la">kirchen</span> (B), <span class="la">niut</span> for <span class="la">niht</span> (A), both Alemannic.</li>
      <li><span class="la">u</span> and <span class="la">v</span>, <span class="la">i</span> and <span class="la">j</span> are not distinguished as sounds; abbreviation marks (a stroke for <span class="la">n</span> or <span class="la">m</span>, a hook for <span class="la">-er</span>) save space.</li>
    </ul>
    <p>Pronounce what the edition prints. The manuscript spellings tell you something different: where and when a copy was made, and how the scribe himself spoke.</p>
  `,

  grammar: [
    {
      title: '1. Normalised and manuscript spelling',
      html: `
        <p>Readings recorded in Lachmann’s notes on the reading, beside his normalised text:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Manuscript</th><th>Lachmann</th><th>What changed</th></tr></thead>
          <tbody>
            <tr><td class="la">Ich horte in rome (A)</td><td class="la">ze Rôme hôrte ich</td><td>length marks; word order</td></tr>
            <tr><td class="la">da ich (BC)</td><td class="la">deich</td><td>contraction (Lecture VII)</td></tr>
            <tr><td class="la">sú griffen (BC)</td><td class="la">und griffen</td><td>a different word</td></tr>
            <tr><td class="la">swerte (B)</td><td class="la">swert</td><td>plural ending</td></tr>
            <tr><td class="la">niut (A)</td><td class="la">niht</td><td>dialect</td></tr>
            <tr><td class="la">baide (B)</td><td class="la">beide</td><td>spelling of <span class="la">ei</span></td></tr>
            <tr><td class="la">kilchen (B)</td><td class="la">kirchen</td><td>dialect</td></tr>
          </tbody>
        </table></div>
        <p>(<span class="la">baide</span> and <span class="la">kilchen</span> come from Lachmann’s notes on the two previous stanzas.) Only some of these are differences of language. Many are differences of spelling that the edition levels out, which is why a normalised text can look more uniform than any manuscript.</p>
      `
    },
    {
      title: '2. Reading an apparatus',
      html: `
        <p>An edition records the manuscripts’ readings in an <strong>apparatus</strong> (German <em>Lesarten</em>): at the foot of the page, or, as in Lachmann’s 2nd edition, in notes at the back. Lachmann’s notes on the reading begin:</p>
        <p class="la">16 = 45 A, 19 B, 2 C: aber A fehlen die ersten vier zeilen.</p>
        <p>The stanza is the 45th of Walther’s in A, the 19th in B and the 2nd in C, and A lacks its first four lines. The manuscripts do not even agree on the order of the stanzas.</p>
        <ul>
          <li>A line number, then the reading and the manuscripts that have it: <span class="la">20. Ich horte in rome liegen A</span>.</li>
          <li>A square bracket separates the edited word (the <em>lemma</em>) from the variant: <span class="la">29. leien] lere A</span> means “where the text has <span class="la">leien</span>, A reads <span class="la">lere</span>”.</li>
          <li><em>fehlt</em>, “is missing”: <span class="la">25. die fehlt BC</span>.</li>
          <li>The editor’s comments are in italics: <span class="la">kriegen C</span>, <em>unrichtig</em>.</li>
        </ul>
        <p>Capital letters are the main parchment collections; Lachmann uses small letters for lesser sources. He tells you which he had in his own hands (<span class="la">AaDEeFHo</span>), which he knew from copies (<span class="la">BbCFkLnrs</span>), and which only from printed editions (p. VI, footnote).</p>
      `
    },
    {
      title: '3. Kinds of variants, and how editors choose',
      html: `
        <ul>
          <li><strong>Spelling and dialect</strong>: <span class="la">baide/beide</span>, <span class="la">niut/niht</span>. They usually do not change the meaning, and a normalised edition does not report all of them: Lachmann says that listing C’s differences “wäre meistentheils unnütz gewesen”.</li>
          <li><strong>Small words</strong>: <span class="la">da/daz</span>, <span class="la">und/sú</span>, articles added or dropped.</li>
          <li><strong>Different words</strong>: <span class="la">liegen/triegen</span> against C’s <span class="la">kriegen</span>, “to make war”.</li>
          <li><strong>Missing or added lines and stanzas</strong>, and different stanza orders.</li>
        </ul>
        <p>Editors decide using several kinds of evidence: sense (Lachmann rejects C’s <span class="la">kriegen</span> because the poet heard “der pabst betrog beide, Otto und Philipp”); rhyme and metre, which a scribe’s change often breaks; the dialect and habits of each scribe; and how the manuscripts are related. A reading that is harder to understand but makes good sense is often preferred, on the reasoning that scribes tend to replace difficult words with easier ones (the principle of the <em>lectio difficilior</em>).</p>
        <p>None of this is mechanical. Two editors with the same manuscripts can print different texts, and modern editions of Walther often differ from Lachmann.</p>
      `
    },
    {
      title: '4. Citing the texts',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Work</th><th>Citation</th><th>Refers to</th></tr></thead>
          <tbody>
            <tr><td>Walther</td><td>L 9,16</td><td>page and line of Lachmann’s 1827 edition</td></tr>
            <tr><td>Nibelungenlied</td><td>B 2,1</td><td>stanza and line in Bartsch’s numbering (manuscript B)</td></tr>
            <tr><td>Parzival</td><td>Pz. 116,5</td><td>Lachmann’s section of thirty lines, and line</td></tr>
            <tr><td>Iwein</td><td>Iwein 483</td><td>line, Lachmann and Benecke’s numbering</td></tr>
          </tbody>
        </table></div>
        <p>Because later editions keep the old numbering, a reference such as L 9,16 finds the same stanza in Lachmann’s edition of 1827 and in Bein’s of 2013, even where the words differ. Lachmann’s 2nd edition keeps the page and line division of the first, and later editions print his numbers beside their own.</p>
      `
    },
    {
      title: '5. The words of the reading',
      html: `
        <p>A few forms in the stanza need comment:</p>
        <ul>
          <li><span class="la">manne und wîbe tougen</span>: genitive plurals before their noun (Lecture III), “the secrets of men and women”.</li>
          <li><span class="la">ze Rôme hôrte ich liegen, / zwêne künege triegen</span>: <span class="la">hœren</span> + infinitive, “I heard (people) lie, deceive two kings”.</li>
          <li><span class="la">huop</span>: past of <span class="la">heben</span> (class VI, with <span class="la">uo</span> like <span class="la">sluoc</span>); <span class="la">sich heben</span>, “arise, begin”.</li>
          <li><span class="la">bienen</span>: past plural of <span class="la">bannen</span>, “to excommunicate”, one of the old reduplicating verbs whose past has <span class="la">ie</span>, like <span class="la">liez</span> and <span class="la">hiez</span>.</li>
          <li><span class="la">der leien mêre</span>: partitive genitive, “more of the laymen”, i.e. the laymen were more numerous.</li>
          <li><span class="la">dîner kristenheit</span>: <span class="la">helfen</span> with the genitive or dative; here “help your Christendom”.</li>
        </ul>
      `
    }
  ],

  vocab: [
    { id: 'tougen', head: 'tougen', la: 'tougen', g: 'f', pos: 'noun', en: 'secret, hidden thing', de: 'Geheimnis', note: 'Also an adjective and adverb, “secret(ly)”. Feminine or neuter.' },
    { id: 'liegen', head: 'liegen', la: 'liegen, louc, lugen, gelogen', pos: 'verb, strong II', en: 'tell lies', de: 'lügen', note: 'Not ligen, “to lie (down)”.' },
    { id: 'triegen', head: 'triegen', la: 'triegen, trouc, trugen, getrogen', pos: 'verb, strong II', en: 'deceive', de: 'betrügen, täuschen' },
    { id: 'heben', head: 'heben', la: 'heben, huop, huoben, gehaben', pos: 'verb, strong VI', en: 'lift; (refl.) arise, begin', de: 'heben; sich erheben, anfangen' },
    { id: 'strit', head: 'strît', la: 'strît', g: 'm', pos: 'noun', en: 'fight, battle; dispute', de: 'Kampf; Streit' },
    { id: 'zweien', head: 'zweien', la: 'sich zweien', pos: 'verb, weak', en: 'divide, fall out, quarrel', de: 'sich entzweien' },
    { id: 'pfaffe', head: 'pfaffe', la: 'pfaffe', g: 'm', pos: 'noun', en: 'cleric, priest', de: 'Geistlicher, Priester', note: 'Neutral in MHG; Pfaffe is disparaging today.' },
    { id: 'leie', head: 'leie', la: 'leie, leige', g: 'm', pos: 'noun', en: 'layman', de: 'Laie' },
    { id: 'swert', head: 'swert', la: 'swert; pl. swert', g: 'n', pos: 'noun', en: 'sword', de: 'Schwert' },
    { id: 'stole', head: 'stôle', la: 'stôle', g: 'f', pos: 'noun', en: 'stole (a priest’s vestment)', de: 'Stola' },
    { id: 'bannen', head: 'bannen', la: 'bannen, bien, bienen, gebannen', pos: 'verb, strong (reduplicating)', en: 'excommunicate; summon; forbid', de: 'bannen, exkommunizieren' },
    { id: 'stoeren', head: 'stœren', la: 'stœren, stôrte', pos: 'verb, weak', en: 'destroy, scatter, lay waste', de: 'zerstören, verwüsten', note: 'Stronger than modern stören.' },
    { id: 'goteshus', head: 'goteshûs', la: 'goteshûs', g: 'n', pos: 'noun', en: 'church; religious house', de: 'Gotteshaus, Kirche; Kloster' },
    { id: 'klus', head: 'klûse', la: 'klûse, klûs', g: 'f', pos: 'noun', en: 'hermitage, hermit’s cell', de: 'Klause' },
    { id: 'klosenaere', head: 'klôsenære', la: 'klôsenære', g: 'm', pos: 'noun', en: 'hermit, recluse', de: 'Klausner, Einsiedler' },
    { id: 'ungebaere', head: 'ungebære', la: 'ungebære', g: 'f', pos: 'noun', en: 'lamentation; unseemly behaviour', de: 'Klage, Wehklagen; Ungebühr' },
    { id: 'babest', head: 'bâbest', la: 'bâbest, bâbes', g: 'm', pos: 'noun', en: 'pope', de: 'Papst' },
    { id: 'kristenheit', head: 'kristenheit', la: 'kristenheit', g: 'f', pos: 'noun', en: 'Christendom; the Christian people', de: 'Christenheit' },
    { id: 'beginnen', head: 'beginnen', la: 'beginnen, began / begunde, begunnen', pos: 'verb, strong III', en: 'begin', de: 'beginnen', note: 'The weak past begunde is common: dô sich begunden zweien.' },
    { id: 'michel', head: 'michel', la: 'michel', pos: 'adjective', en: 'great, much', de: 'groß, viel' },
    { id: 'verre', head: 'verre', la: 'verre', pos: 'adverb', en: 'far, far away', de: 'fern, weit' },
    { id: 'dernider', head: 'dernider', la: 'dernider (dar nider)', pos: 'adverb', en: 'down', de: 'nieder, hinunter' },
    { id: 'mere', head: 'mêre', la: 'mêre, mê', pos: 'adjective, adverb', en: 'more; greater in number', de: 'mehr' },
    { id: 'meist', head: 'meist', la: 'meist, meiste', pos: 'adjective', en: 'greatest, most', de: 'größt, meist' },
    { id: 'owe', head: 'owê', la: 'owê', pos: 'interjection', en: 'alas', de: 'o weh' }
  ],

  grammarCards: [
    { id: 'mh10-auto', front: 'Do any autographs of Walther, Hartmann or Wolfram survive?', back: 'No: only later copies by scribes' },
    { id: 'mh10-A', front: 'Manuscript A', back: 'Kleine Heidelberger Liederhandschrift, Cod. Pal. germ. 357, late 13th century' },
    { id: 'mh10-B', front: 'Manuscript B', back: 'Weingartner Liederhandschrift, Stuttgart, early 14th century, Constance region' },
    { id: 'mh10-C', front: 'Manuscript C', back: 'Codex Manesse, Cod. Pal. germ. 848, Zurich c. 1300–1340; in Paris 1657–1888' },
    { id: 'mh10-E', front: 'Manuscript E', back: 'Würzburg, mid-14th century, household book of Michael de Leone' },
    { id: 'mh10-manesse', front: 'Lachmann on the name “mannessische”', back: '„ohne grund so genannt“: Hadlaub only says the Manesses collected songbooks' },
    { id: 'mh10-norm', front: 'Normalised MHG', back: 'a 19th-century editorial spelling (Lachmann), not a medieval one' },
    { id: 'mh10-method', front: 'Lachmann’s method', back: 'collate all manuscripts, establish their relations, reconstruct the lost original' },
    { id: 'mh10-bedier', front: 'Bédier (1928)', back: 'print one good manuscript rather than reconstruct an original' },
    { id: 'mh10-leit', front: 'Leithandschrift', back: 'the manuscript an edition follows (Bartsch’s Nibelungenlied: B)' },
    { id: 'mh10-newphil', front: 'New Philology', back: 'variation as normal; each manuscript version a text in its own right' },
    { id: 'mh10-lemma', front: '29. leien] lere A', back: 'where the text has leien, manuscript A reads lere' },
    { id: 'mh10-fehlt', front: '25. die fehlt BC', back: 'the word die is missing in B and C' },
    { id: 'mh10-diff', front: 'lectio difficilior', back: 'prefer the harder reading that makes good sense; scribes tend to simplify' },
    { id: 'mh10-ai', front: 'baide, ainen in B', back: 'ai for ei: Swabian-Alemannic spelling' },
    { id: 'mh10-u', front: 'sú, beidú in C', back: 'a mark over u standing for iu: siu, beidiu' },
    { id: 'mh10-L', front: 'L 9,16', back: 'Lachmann’s page 9, line 16: kept by all later Walther editions' },
    { id: 'mh10-1198', front: 'The double election of 1198', back: 'Philip of Swabia and Otto IV both elected king; Innocent III backed Otto' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'What survives of Walther’s own writing?', options: ['Nothing: only copies by scribes', 'A notebook in his hand', 'One autograph page in Vienna', 'The Codex Manesse, which he wrote'], answer: 0, explain: 'No autographs of the major MHG poets survive.' },
    { id: 'e2', type: 'mc', prompt: 'Where was the Codex Manesse when Lachmann edited Walther (1827)?', options: ['Paris', 'Heidelberg', 'Zurich', 'Stuttgart'], answer: 0, explain: '„die handschrift zu Paris“: there from 1657 to 1888.' },
    { id: 'e3', type: 'mc', prompt: 'Why did Lachmann call C „die ohne grund so genannte mannessische“?', options: ['Nothing showed that the Manesses had it written', 'He thought it was French', 'He knew it was made in Weingarten', 'He thought Hadlaub wrote it'], answer: 0, explain: '„Johann Hadlaub sagt … nur daſs sie liederbücher sammelten.“' },
    { id: 'e4', type: 'mc', prompt: 'Normalised Middle High German spelling is:', options: ['a 19th-century editorial convention', 'the spelling of the best manuscripts', 'the spelling Walther taught', 'the official spelling of the imperial chancery'], answer: 0, explain: 'Lachmann and his contemporaries designed it.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">16 = 45 A, 19 B, 2 C</span> in Lachmann’s notes means:', options: ['the stanza is the 45th in A, the 19th in B and the 2nd in C', 'line 16 has 45 letters in A', 'the stanza was written in 1245', 'A, B and C have 45, 19 and 2 errors'], answer: 0, explain: 'The manuscripts order the stanzas differently.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">29. leien] lere A</span> means:', options: ['where the text has leien, A reads lere', 'A adds lere after leien', 'leien is missing in A', 'Lachmann corrected lere to leien in all manuscripts'], answer: 0, explain: 'The bracket separates lemma and variant.' },
    { id: 'e7', type: 'mc', prompt: 'Why does Lachmann reject C’s <span class="la">kriegen</span> in line 21?', options: ['The sense: the pope deceived (triegen) both kings', 'It does not rhyme', 'It is not a Middle High German word', 'B has it too'], answer: 0, explain: '„unrichtig. er hörte, der pabst betrog beide, Otto und Philipp.“' },
    { id: 'e8', type: 'mc', prompt: 'B’s spelling <span class="la">baide</span> for <span class="la">beide</span> shows:', options: ['Swabian-Alemannic ai for ei', 'a different word', 'a scribal error', 'Latin influence'], answer: 0, explain: 'Lachmann notes „schwäbische oder vielleicht richtiger thurgäuische formen“.' },
    { id: 'e9', type: 'mc', prompt: 'Joseph Bédier (1928) recommended:', options: ['printing one good manuscript rather than reconstructing an original', 'reconstructing the archetype from all manuscripts', 'modernising the spelling', 'ignoring manuscripts'], answer: 0, explain: 'The basis of the Leithandschrift approach.' },
    { id: 'e10', type: 'mc', prompt: 'Who is the <span class="la">bâbest</span> who is <span class="la">ze junc</span>?', options: ['Innocent III, elected in 1198 aged 37', 'Gregory VII', 'a boy pope of the 10th century', 'the bishop of Worms'], answer: 0, explain: 'Lachmann’s note to 9,39.' },
    { id: 'e11', type: 'mc', prompt: 'What did the clergy do, according to lines 30–33?', options: ['laid down the sword and took up the stole: they excommunicated the wrong people', 'fought on until they won', 'fled to Rome', 'crowned Philip'], answer: 0, explain: 'si bienen die si wolten, und niht den si solten.' },
    { id: 'e12', type: 'match', prompt: 'Match the manuscripts.', pairs: [
      ['A', 'Kleine Heidelberger Liederhandschrift'], ['B', 'Weingartner Liederhandschrift'], ['C', 'Codex Manesse'], ['E', 'Würzburg, Michael de Leone']
    ] },
    { id: 'e13', type: 'match', prompt: 'Match the manuscript spelling with Lachmann’s.', pairs: [
      ['horte', 'hôrte'], ['baide', 'beide'], ['niut', 'niht'], ['kilchen', 'kirchen'], ['sú', 'siu']
    ] },
    { id: 'e14', type: 'match', prompt: 'Match the terms.', pairs: [
      ['Lesarten', 'variant readings'], ['Leithandschrift', 'the manuscript an edition follows'], ['fehlt', 'is missing'], ['Siglum', 'a manuscript’s letter'], ['lectio difficilior', 'the harder reading']
    ] },
    { id: 'e15', type: 'gap', prompt: '<span class="la">ze Rôme hôrte ich liegen, / zwêne künege ___</span>', hint: 'deceive (rhymes with liegen)', answers: ['triegen'], full: 'ze Rôme hôrte ich liegen, / zwêne künege triegen.', explain: 'C reads kriegen, which Lachmann rejects.' },
    { id: 'e16', type: 'gap', prompt: '<span class="la">die pfaffen striten sêre: / doch wart der ___ mêre</span>', hint: 'laymen (A reads lere)', answers: ['leien'], full: 'die pfaffen striten sêre: / doch wart der leien mêre.', explain: '„29. leien] lere A.“' },
    { id: 'e17', type: 'gap', prompt: '<span class="la">owê der ___ ist ze junc</span>', hint: 'pope', answers: ['bâbest', 'babest'], full: 'owê der bâbest ist ze junc', explain: 'Innocent III.' },
    { id: 'e18', type: 'paradigm', prompt: 'Normalise the manuscript spelling.', headers: ['Normalised'], rows: [
      { label: 'horte', answers: ['hôrte'] },
      { label: 'baide', answers: ['beide'] },
      { label: 'niut', answers: ['niht'] },
      { label: 'kilchen', answers: ['kirchen'] },
      { label: 'rome', answers: ['Rôme|rôme'] }
    ] },
    { id: 'e19', type: 'paradigm', prompt: 'Give the past forms of these verbs from the reading.', headers: ['Past (3rd sg.)'], rows: [
      { label: 'heben', answers: ['huop'] },
      { label: 'bannen', answers: ['bien'] },
      { label: 'triegen', answers: ['trouc'] },
      { label: 'sëhen', answers: ['sach'] }
    ] },
    { id: 'e20', type: 'order', prompt: 'Put the lines in order (L 9,30–33).', source: 'The clergy lay down their swords and take up excommunication', tokens: ['diu swert diu leiten si dernider,', 'und griffen zuo der stôle wider:', 'si bienen die si wolten,', 'und niht den si solten.'], explain: 'Two rhyme pairs: dernider : wider, wolten : solten.' },
    { id: 'e21', type: 'translate', dir: 'mhd-de', source: 'Der bâbest ist ze junc.', model: 'Der Papst ist zu jung.', accepted: ['Der Papst ist zu jung'] },
    { id: 'e22', type: 'translate', dir: 'mhd-de', source: 'Ich sach mit mînen ougen.', model: 'Ich sah mit meinen Augen.', accepted: ['Ich sah mit meinen Augen', 'Ich sah mit meinen eigenen Augen', 'Ich habe mit meinen Augen gesehen'] },
    { id: 'e23', type: 'translate', dir: 'mhd-en', source: 'dô stôrte man diu goteshûs.', model: 'Then the churches were destroyed.', accepted: ['Then the churches were destroyed', 'Then they destroyed the churches', 'Then people destroyed the churches', 'Then the churches were laid waste', 'Then they laid waste the churches', 'Then one destroyed the churches', 'Then the houses of God were destroyed', 'Then they destroyed the houses of God'] },
    { id: 'e24', type: 'translate', dir: 'de-mhd', source: 'Hilf, Herr, deiner Christenheit.', model: 'Hilf, hêrre, dîner kristenheit.', accepted: ['Hilf, hêrre, dîner kristenheit', 'Hilf, herre, dîner kristenheit', 'Hilf hêrre dîner kristenheit', 'Hilf, hêrre, dîner kristenheite', 'Hilf, got, dîner kristenheit', 'Hilf, hêrre, dîner christenheit'], explain: 'Helfen takes the dative, as today: dîner kristenheit. The imperative hilf has i, as modern hilf still does.' },
    { id: 'e25', type: 'mc', prompt: 'Which manuscripts had Lachmann handled himself?', options: ['A, D, E, F, H and some minor sources (AaDEeFHo)', 'A, B and C', 'only C', 'none: he used prints only'], answer: 0, explain: 'B and C he knew from copies and collations.' },
    { id: 'e26', type: 'mc', prompt: 'A citation such as L 9,16 refers to:', options: ['page 9, line 16 of Lachmann’s edition, kept by later editions', 'manuscript L, folio 9', 'Lexer’s dictionary, column 9', 'line 916 of the Nibelungenlied'], answer: 0, explain: 'Lachmann’s numbering is the standard reference for Walther.' },
    { id: 'e27', type: 'mc', prompt: 'Which is NOT a usual reason an editor prefers one reading?', options: ['It appears in the most recent manuscript', 'It makes better sense', 'It keeps the rhyme and metre', 'It is the harder reading that still makes sense'], answer: 0, explain: 'Age is not decisive either way; a later copy can preserve a better text.' }
  ],

  reading: {
    title: 'Walther von der Vogelweide, Reichston, third stanza (L 9,16–39)',
    note: 'Authentic text: the third stanza of the Reichston, transcribed from the page image of Lachmann’s 2nd edition (Berlin 1843), p. 9. The notes give the readings of the manuscripts A, B and C as Lachmann records them (pp. 130–131), in the manuscripts’ own spelling. Tap any word.',
    text: 'Ich sach mit mînen ougen\nmanne und wîbe tougen,\ndeich gehôrte und gesach\nswaz iemen tet, swaz iemen sprach.\nze Rôme hôrte ich liegen,\nzwêne künege triegen.\ndâ von huop sich der meiste strît\nder ê was oder iemer sît,\ndô sich begunden zweien\ndie pfaffen unde leien.\ndaz was ein nôt vor aller nôt:\nlîp unde sêle lac dâ tôt.\ndie pfaffen striten sêre:\ndoch wart der leien mêre.\ndiu swert diu leiten si dernider,\nund griffen zuo der stôle wider:\nsi bienen die si wolten,\nund niht den si solten.\ndô stôrte man diu goteshûs.\nich hôrte verre in einer klûs\nvil michel ungebære:\ndâ weinte ein klôsenære,\ner klagete gote sîniu leit,\n‘owê der bâbest ist ze junc: hilf, hêrre, dîner kristenheit.’',
    translations: [
      { label: 'German translation', text: 'Ich sah mit meinen Augen die Geheimnisse von Männern und Frauen, sodass ich hörte und sah, was jemand tat und was jemand sprach. In Rom hörte ich lügen und zwei Könige betrügen. Daraus entstand der größte Streit, der je gewesen ist oder jemals sein wird, als sich die Geistlichen und die Laien entzweiten. Das war eine Not über aller Not: Leib und Seele lagen da tot. Die Geistlichen kämpften heftig, doch die Laien waren in der Überzahl. Da legten sie die Schwerter nieder und griffen wieder zur Stola: Sie bannten, wen sie wollten, und nicht den, den sie sollten. Da zerstörte man die Gotteshäuser. Ich hörte fern in einer Klause großes Wehklagen: Dort weinte ein Einsiedler, er klagte Gott sein Leid: „O weh, der Papst ist zu jung: Hilf, Herr, deiner Christenheit!“' },
      { label: 'English translation', text: 'I saw with my own eyes the secrets of men and women, so that I heard and saw whatever anyone did and whatever anyone said. In Rome I heard lies told and two kings deceived. From that arose the greatest strife that ever was or ever will be, when clergy and laity began to quarrel. That was a distress beyond all distress: body and soul lay dead there. The clergy fought hard, but the laymen were more numerous. Then they laid their swords down and took up the stole again: they excommunicated whom they wished, and not whom they should have. Then the churches were laid waste. Far away, in a hermitage, I heard great lamentation: a hermit was weeping there, lamenting his sorrows to God: “Alas, the pope is too young: help, Lord, your Christendom!”' }
    ],
    notes: [
      { ref: 'Ich sach mit mînen ougen', html: 'Lachmann: <span class="la">16 = 45 A, 19 B, 2 C: aber A fehlen die ersten vier zeilen.</span> In A the stanza begins with line 20, <span class="la">Ich horte in rome liegen</span>. The stanza completes the Reichston, whose first two stanzas begin at L 8,4 and L 8,28 (Lectures IV and V).' },
      { ref: 'manne und wîbe tougen, / deich gehôrte und gesach', html: 'Lachmann records <span class="la">man unde wip tougen BC</span> and <span class="la">da ich BC</span>. <span class="la">deich</span> = <span class="la">daz ich</span>, “so that I” (Lecture VII). <span class="la">tougen</span>: “secrets”, a noun here. The singer claims to see into everything, like a prophet.' },
      { ref: 'ze Rôme hôrte ich liegen, / zwêne künege triegen', html: 'A: <span class="la">Ich horte in rome liegen</span>. B and C: <span class="la">und zwene</span>; C <span class="la">kriegen</span>, which Lachmann calls <em>unrichtig</em>: “er hörte, der pabst betrog beide, Otto und Philipp”. After the death of Henry VI two kings were elected in 1198, Philip of Swabia and the Welf Otto IV, and Pope Innocent III took sides in the dispute, in the end for Otto.' },
      { ref: 'dâ von huop sich der meiste strît / der ê was oder iemer sît', html: 'B and C: <span class="la">der e wart oder sit</span>. <span class="la">huop</span>: past of <span class="la">heben</span>; <span class="la">sich heben</span>, “arise”. <span class="la">der meiste strît</span>: “the greatest strife”.' },
      { ref: 'dô sich begunden zweien / die pfaffen unde leien', html: 'A: <span class="la">der begonde sich zweien</span>; B and C lack <span class="la">die</span> in the next line. <span class="la">begunden</span>: the weak past of <span class="la">beginnen</span>. <span class="la">pfaffen</span> and <span class="la">leien</span>: clergy and laity, the two estates of Christian society.' },
      { ref: 'daz was ein nôt vor aller nôt: / lîp unde sêle lac dâ tôt', html: 'B and C: <span class="la">da</span> for <span class="la">daz</span>; A: <span class="la">von</span> for <span class="la">vor</span>. <span class="la">vor aller nôt</span>: “above all distress”. <span class="la">lîp unde sêle</span>: body and soul, killed and damned.' },
      { ref: 'die pfaffen striten sêre: / doch wart der leien mêre', html: 'Lachmann: <span class="la">leien] lere A</span>, and in italics: <em>der anhänger Philipps</em>, i.e. the laymen are Philip’s supporters. <span class="la">der leien mêre</span>: partitive genitive, “more of the laity”.' },
      { ref: 'diu swert diu leiten si dernider, / und griffen zuo der stôle wider', html: 'Readings: <span class="la">swert diu A, swerte B, swert C</span>; <span class="la">si</span> missing in A; <span class="la">da nider BC</span>; and for the next line <span class="la">sú griffen an die BC</span>. The clergy give up worldly weapons for spiritual ones: the stole, the priest’s vestment, stands for priestly authority and so for the weapon of the ban.' },
      { ref: 'si bienen die si wolten, / und niht den si solten', html: 'Lachmann: on the feast of Peter and Paul (29 June) 1201 the cardinal legate Guido pronounced the ban on King Philip and his supporters in Cologne. <span class="la">bienen</span>: past of <span class="la">bannen</span>. A reads <span class="la">niut</span> for <span class="la">niht</span>.' },
      { ref: 'dô stôrte man diu goteshûs', html: 'Lachmann quotes Caesarius of Heisterbach on Lupold, bishop of Worms, who fought for Philip and spared “neither churches nor churchyards”, and Arnold of Lübeck on the devastation of Thuringia in 1203. He adds that we would understand the poem better if we knew where Walther was between 1199 and about 1205.' },
      { ref: 'ich hôrte verre in einer klûs / vil michel ungebære', html: 'B and C: <span class="la">do horte ich</span>. <span class="la">klûs</span>: a hermit’s cell; <span class="la">ungebære</span>: loud lamentation.' },
      { ref: '‘owê der bâbest ist ze junc: hilf, hêrre, dîner kristenheit.’', html: 'Lachmann: Innocent III was 37 at his election on 8 January 1198; Albert of Stade calls him <em>iuvenis Romanus</em>. <span class="la">helfen</span> takes the genitive or dative. The hermit’s cry ends the Reichston.' }
    ],
    glosses: {
      'ich': 'I', 'sach': 'saw (sëhen)', 'mit': 'with', 'mînen': 'my (dat. pl.)', 'ougen': 'eyes', 'manne': 'of men (gen. pl.)', 'und': 'and', 'wîbe': 'of women (gen. pl.)', 'tougen': 'secrets', 'deich': 'daz ich: so that I', 'gehôrte': 'heard', 'gesach': 'saw',
      'swaz': 'whatever', 'iemen': 'anyone', 'tet': 'did (tuon)', 'sprach': 'said', 'ze': 'in, at; too', 'rôme': 'Rome', 'hôrte': 'heard', 'liegen': 'lie, tell lies', 'zwêne': 'two (m.)', 'künege': 'kings', 'triegen': 'deceive',
      'dâ': 'there: dâ von, from that', 'von': 'from', 'huop': 'arose (heben: sich heben)', 'sich': 'itself, themselves', 'der': 'the; that; of the', 'meiste': 'greatest', 'strît': 'strife, conflict', 'ê': 'before, ever', 'was': 'was', 'oder': 'or', 'iemer': 'ever', 'sît': 'afterwards',
      'dô': 'when; then', 'begunden': 'began (beginnen)', 'zweien': 'quarrel, fall out', 'die': 'the; whom', 'pfaffen': 'clergy', 'unde': 'and', 'leien': 'laity, laymen', 'daz': 'that', 'ein': 'a', 'nôt': 'distress', 'vor': 'above, before', 'aller': 'all',
      'lîp': 'body', 'sêle': 'soul', 'lac': 'lay (ligen)', 'tôt': 'dead', 'striten': 'fought (strîten)', 'sêre': 'hard, greatly', 'doch': 'yet, but', 'wart': 'became, were (wërden)', 'mêre': 'more (in number)',
      'diu': 'the (n. pl.)', 'swert': 'swords', 'leiten': 'laid (legen)', 'si': 'they', 'dernider': 'down', 'griffen': 'reached, took (grîfen)', 'zuo': 'to', 'stôle': 'stole', 'wider': 'again, back', 'bienen': 'excommunicated (bannen)', 'wolten': 'wanted', 'niht': 'not', 'den': 'the one whom', 'solten': 'should (have)',
      'stôrte': 'destroyed (stœren)', 'man': 'one, people', 'goteshûs': 'churches, religious houses', 'verre': 'far away', 'in': 'in', 'einer': 'a', 'klûs': 'hermitage', 'vil': 'very', 'michel': 'great', 'ungebære': 'lamentation',
      'weinte': 'wept', 'klôsenære': 'hermit', 'er': 'he', 'klagete': 'lamented', 'gote': 'to God (dat.)', 'sîniu': 'his (pl.)', 'leit': 'sorrows', 'owê': 'alas', 'bâbest': 'pope', 'ist': 'is', 'junc': 'young', 'hilf': 'help (imperative)', 'hêrre': 'lord', 'dîner': 'your (gen.)', 'kristenheit': 'Christendom'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What did the singer hear in Rome?', options: ['Lies, and two kings deceived', 'A sermon on peace', 'The pope praising Philip', 'A coronation'], answer: 0, explain: 'ze Rôme hôrte ich liegen, zwêne künege triegen.' },
      { id: 'r2', type: 'mc', prompt: 'Who quarrelled?', options: ['Clergy and laity', 'Two hermits', 'Men and women', 'Rome and Cologne'], answer: 0, explain: 'dô sich begunden zweien die pfaffen unde leien.' },
      { id: 'r3', type: 'mc', prompt: 'What does the hermit lament?', options: ['That the pope is too young', 'That the king is too old', 'That his cell was destroyed', 'That he cannot go to Rome'], answer: 0, explain: 'owê der bâbest ist ze junc.' },
      { id: 'r4', type: 'mc', prompt: 'Which manuscript lacks the first four lines of the stanza?', options: ['A', 'B', 'C', 'none'], answer: 0, explain: '„aber A fehlen die ersten vier zeilen“.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'The Codex Manesse is manuscript:', options: ['C', 'A', 'B', 'E'], answer: 0, explain: 'Cod. Pal. germ. 848.' },
      { id: 't2', type: 'mc', prompt: 'The Codex Manesse was written in:', options: ['Zurich, c. 1300–1340', 'Paris, c. 1650', 'Heidelberg, c. 1200', 'Weingarten, c. 1100'], answer: 0, explain: 'It went to Paris only in 1657.' },
      { id: 't3', type: 'mc', prompt: 'Lachmann’s normalised spelling marks long vowels with:', options: ['a circumflex', 'a macron', 'doubled letters', 'nothing'], answer: 0, explain: 'hôrte, Rôme, bâbest.' },
      { id: 't4', type: 'mc', prompt: 'In an apparatus, <em>fehlt</em> means:', options: ['is missing', 'is wrong', 'is doubtful', 'is added'], answer: 0, explain: '25. die fehlt BC.' },
      { id: 't5', type: 'mc', prompt: 'The New Philology treats manuscript variation as:', options: ['the normal state of medieval texts', 'scribal error to be removed', 'a modern invention', 'irrelevant'], answer: 0, explain: 'Each version is a text in its own right.' },
      { id: 't6', type: 'mc', prompt: 'Who printed much of the Codex Manesse in 1748 and 1758–59?', options: ['Johann Jakob Bodmer', 'Karl Lachmann', 'Jacob Grimm', 'Johannes Hadlaub'], answer: 0, explain: 'Lachmann used Bodmer’s print.' },
      { id: 't7', type: 'gap', prompt: '<span class="la">dô stôrte man diu ___</span>', hint: 'churches', answers: ['goteshûs', 'goteshus'], full: 'dô stôrte man diu goteshûs.', explain: 'goteshûs, neuter plural.' },
      { id: 't8', type: 'mc', prompt: 'C’s <span class="la">sú</span> stands for:', options: ['siu', 'sô', 'sun', 'sus'], answer: 0, explain: 'A mark over u often stands for iu.' },
      { id: 't9', type: 'translate', dir: 'mhd-de', source: 'Ze Rôme hôrte ich liegen.', model: 'In Rom hörte ich lügen.', accepted: ['In Rom hörte ich lügen', 'Zu Rom hörte ich lügen', 'In Rom hörte ich Lügen', 'In Rom hörte ich jemanden lügen', 'In Rom hörte ich sie lügen'] },
      { id: 't10', type: 'translate', dir: 'mhd-en', source: 'Der bâbest ist ze junc.', model: 'The pope is too young.', accepted: ['The pope is too young'] },
      { id: 't11', type: 'mc', prompt: 'Who were the two kings of 1198?', options: ['Philip of Swabia and Otto IV', 'Frederick I and Henry VI', 'Gunther and Etzel', 'Otto I and Henry I'], answer: 0, explain: 'The double election after the death of Henry VI.' },
      { id: 't12', type: 'mc', prompt: 'A Leithandschrift is:', options: ['the manuscript an edition chiefly follows', 'the oldest manuscript', 'a manuscript with music', 'an editor’s own copy'], answer: 0, explain: 'Bartsch’s Nibelungenlied follows B.' }
    ]
  },

  reference: [
    { title: 'The song manuscripts', headers: ['Siglum', 'Manuscript'], rows: [
      ['A', 'Kleine Heidelberger Liederhs., late 13th c.'], ['B', 'Weingartner Liederhs., early 14th c.'], ['C', 'Codex Manesse, Zurich c. 1300–40'], ['E', 'Würzburg, mid-14th c.']
    ] },
    { title: 'Reading an apparatus', headers: ['Sign', 'Meaning'], rows: [
      ['20. … A', 'line 20 as manuscript A reads it'], ['leien] lere A', 'lemma] variant, manuscript'], ['fehlt BC', 'missing in B and C'], ['16 = 45 A', 'stanza 16 is no. 45 in A'], ['italics', 'the editor’s comment']
    ] },
    { title: 'Manuscript spellings', headers: ['Manuscript', 'Edition'], rows: [
      ['horte, rome', 'hôrte, Rôme'], ['baide, ainen', 'beide, einen'], ['sú, beidú', 'siu, beidiu'], ['ů', 'uo'], ['niut', 'niht'], ['kilchen', 'kirchen']
    ] },
    { title: 'Citations', headers: ['Form', 'Meaning'], rows: [
      ['L 9,16', 'Walther: Lachmann page, line'], ['B 2,1', 'Nibelungenlied: Bartsch stanza, line'], ['Pz. 116,5', 'Parzival: section, line'], ['Iwein 483', 'Iwein: line']
    ] }
  ]
});
