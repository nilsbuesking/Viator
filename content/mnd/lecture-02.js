/*
 * Middle Low German — Lecture II: palaeography and the printed edition.
 * The reading quotes short authentic excerpts from Hanserecesse, 2. Abteilung, Band 6
 * (ed. G. von der Ropp, Leipzig 1890), nos. 165 and 167, taken from the digitised text of the
 * archive.org scan; obvious scanning errors are corrected in square brackets. The normalised
 * version is this course's own. Check both against the printed page (see CONTENT-CHECKS.md).
 */
Viator.addLecture('mnd', {
  id: 'mnd-02',
  number: 2,
  title: 'De hant des schrîvers',
  subtitle: 'Scripts, abbreviations, money and numbers; how an edition presents a letter; two letters of 1469',
  minutes: 60,

  intro: `
    <p>Almost every Hanseatic document you are likely to read first will be in a printed edition: the <em>Hanserecesse</em>, the <em>Hansisches Urkundenbuch</em>, a town’s <em>Urkundenbuch</em>. The editors have already done the hardest work: deciphering the hand, expanding abbreviations, adding punctuation. This lecture prepares you for both stages. First, how to read an edition with an understanding of what lies behind it. Second, the habits of the scribes, so that you can follow a facsimile next to the printed text, and in time read an original on your own.</p>
    <p>A German reader often assumes that “old German handwriting” means Sütterlin. It does not. Sütterlin is a school script designed by Ludwig Sütterlin and introduced in Prussian schools in 1915. The medieval hands of the Hanse are Gothic scripts, older by five or six centuries. They are the distant ancestors of the German Kurrent script from which Sütterlin itself was derived.</p>
    <p>The reading for this lecture is authentic: short passages from two letters of 1469, as printed in the <em>Hanserecesse</em> in 1890. One was sent by the Hanseatic merchants at Bruges to the council of Lübeck. The other was sent by the German merchants then imprisoned in London.</p>
  `,

  background: [
    {
      title: 'How a document was made',
      html: `
        <p>Charters, the formal records of legal acts, were written on parchment and sealed, usually with a seal hanging from a strip or cord. From the fourteenth century, paper spread for letters, drafts, accounts and registers; it was cheaper, and parchment was kept for documents meant to last. Wax tablets served for notes and drafts.</p>
        <p>Town councils employed clerks, the <span class="la">schrîvere</span> or, in Latin, <span class="la">notarii</span>. They were usually men with a clerical, Latin education, which is why their vernacular documents follow Latin models so closely. Outgoing letters were often copied into letter-books, and legal business was recorded in town books, so many letters survive twice: as the original at the receiving town, and as a copy or draft at the sending one. An edition will tell you which version it prints.</p>
        <p>A letter was folded and closed with a seal on the outside, and the address (<em>inscriptio</em>) was written on the outside too. That is why editions often print the address first and set it apart from the text.</p>
      `
    },
    {
      title: 'The scripts',
      html: `
        <p>Medieval Germany used two families of Gothic script. The formal book script (<em>Textualis</em>) has upright, separate, angular letters; you will meet it in manuscripts of the <em>Sachsenspiegel</em>, Bibles and service books, and in early printed books. Documents and letters were written in faster cursive hands (<em>Gotische Kursive</em>, later <em>Bastarda</em>), in which letters are joined, loops appear on the ascenders, and the same letter can take several shapes. In the sixteenth century the German Kurrent script developed out of these cursives.</p>
        <p>No two clerks wrote alike. The practical method is to start with one scribe: read a document whose edition you have, letter by letter, until you know that writer’s forms, and only then move to unedited material.</p>
      `
    },
    {
      title: 'Where to see originals',
      html: `
        <p>Many archives now publish photographs of their charters. A particularly useful collection for this course is the Tallinn City Archives (the archive of medieval Reval) on <a href="https://monasterium.net/mom/EE-TLA/TallinnaMagistraat/TLA.230.1-I.813/charter" target="_blank" rel="noopener">monasterium.net</a>. It holds hundreds of letters and charters sent to Reval, many from the Lübeck council. The linked example is a Lübeck charter of 8 May 1485, on parchment with a hanging seal, recording entries from the Lübeck town book. Use the arrows on that site to move through the collection. The images belong to the archive; check its terms before reusing them.</p>
        <p>The nineteenth-century editions are freely available as scans, for example the <em>Hanserecesse</em> on <a href="https://archive.org/details/hanserecesse01germgoog" target="_blank" rel="noopener">archive.org</a> and in the <a href="https://deutsche-digitale-bibliothek.de/item/JRKJRVOEBMRPNLG2K25YWGISSQRB4NYF?lang=en" target="_blank" rel="noopener">Deutsche Digitale Bibliothek</a> (volume for 1391–1400). The best exercise is to find a document in an edition and its photograph online, and read them side by side.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">By den ghevangenen [c]opluyden van der hensen to London in Englant wesende</p>
    <p>“From the imprisoned merchants of the Hanse being in London in England.” This is how the German merchants in London signed a letter of 8 April 1469 to the Hanseatic envoys assembled at Lübeck (<em>Hanserecesse</em> II 6, no. 165). In July 1468, after English ships had been seized in the Sound, the English government arrested the Hanseatic merchants in London and confiscated their goods. The merchants of Cologne were exempted, which later cost Cologne its place in the Hanse. The quarrel became a naval war, ended by the Peace of Utrecht in 1474. The letter says the writers had been held <span class="la">boven 3 quarter jaers</span>, “more than three quarters of a year”, which fits an arrest in the summer of 1468.</p>
  `,

  grammar: [
    {
      title: '1. Letters that mislead',
      html: `
        <p>A handful of letter forms cause most misreadings. Learn to check for them first.</p>
        <ul>
          <li><strong>Long s (ſ).</strong> At the start and in the middle of a word, <em>s</em> is usually the tall <span class="la">ſ</span>, which looks like an <em>f</em> without the full crossbar: <span class="la">ſchip</span>, <span class="la">ſtat</span>. Round <em>s</em> appears at the end of a word. In print, <em>ſ</em> was used in German until the twentieth century.</li>
          <li><strong>Minims.</strong> <em>i, u, n</em> and <em>m</em> are all built from the same short vertical strokes. A word like <span class="la">mynne</span> or <span class="la">vnde</span> can look like a picket fence. Count the strokes, and use the context. This is one reason scribes wrote <span class="la">y</span> for <em>i</em>, and put a stroke or later a dot over <em>i</em>.</li>
          <li><strong>c and t</strong> are often nearly identical, as are <strong>e</strong> and <strong>o</strong> in some hands.</li>
          <li><strong>r</strong> has two shapes: the ordinary one, and a round form (<span class="la">ꝛ</span>, like a figure 2) after round letters such as <em>o</em>.</li>
          <li><strong>u, v and w</strong>: as you know from Lecture I, <em>u</em> and <em>v</em> are one letter. <em>w</em> is sometimes written as two v’s.</li>
          <li><strong>Capitals</strong> are used inconsistently, often just for decoration, and proper names may be lower case. <strong>Word division</strong> is unreliable: <span class="la">to samende</span> and <span class="la">tosamende</span> “together” both occur. <strong>Punctuation</strong> is sparse: a point, and a slash (<em>virgula</em>) for a pause.</li>
        </ul>
      `
    },
    {
      title: '2. Abbreviations',
      html: `
        <p>Scribes saved time and parchment with a system of abbreviations inherited from Latin. Adriano Cappelli’s handbook (<em>Lexicon abbreviaturarum</em>, first edition 1899) sorts them into kinds that are worth knowing by name:</p>
        <ol>
          <li><strong>Suspension</strong>: the end of a word is left off, with a point or a stroke. <span class="la">lub.</span> for <span class="la">lubesch</span>, <span class="la">etc.</span> for the rest of a familiar formula.</li>
          <li><strong>Contraction</strong>: letters from the middle are left out, marked by a line over the word.</li>
          <li><strong>Signs with a fixed meaning.</strong> The commonest in the vernacular is the <strong>nasal stroke</strong>, a line over a vowel or over <em>n</em> standing for a following <em>n</em> or <em>m</em>, or more: <span class="la">dē</span> for <span class="la">den</span> or <span class="la">dem</span>, <span class="la">vn̄</span> for <span class="la">vnde</span>. A small hook above the line stands for <em>er</em>: <span class="la">vnd’</span> for <span class="la">vnder</span>. Latin texts add many more: <span class="la">ꝑ</span> for <em>per</em>, <span class="la">ꝓ</span> for <em>pro</em>, <span class="la">⁊</span> for <em>et</em>.</li>
          <li><strong>Superscript letters</strong>: a small letter written above another stands for a group of letters that includes it.</li>
        </ol>
        <p>An abbreviation can mean different things in different places. <span class="la">dē</span> is <span class="la">den</span> or <span class="la">dem</span> depending on the case needed. Expand by grammar and sense, and when you cannot decide, keep the abbreviation and mark it.</p>
      `
    },
    {
      title: '3. Money, measures and numbers',
      html: `
        <p>Numbers are usually written in Roman numerals, with a few habits that differ from modern usage:</p>
        <ul>
          <li>A final <em>i</em> is written <em>j</em>: <span class="la">iiij</span> = 4, <span class="la">vij</span> = 7, <span class="la">xiiij</span> = 14.</li>
          <li>4 and 9 are usually <span class="la">iiij</span> and <span class="la">viiij</span>, not <em>IV</em> and <em>IX</em>; 400 is <span class="la">cccc</span>. So 1469 is <span class="la">m cccc lxix</span>, often with small raised letters such as <span class="la">m°</span>.</li>
          <li>Arabic numerals appear more and more from the fifteenth century, as in the 1469 letter.</li>
          <li><strong>“Half” counting</strong>, which survives in older German <em>anderthalb</em>: <span class="la">dridde half</span> is 2½ (“the third, half”), <span class="la">verdehalf</span> 3½.</li>
        </ul>
        <p>The money of Lübeck was counted in marks, shillings and pence: 1 <span class="la">mark lubesch</span> = 16 <span class="la">schillinge</span>, 1 <span class="la">schillink</span> = 12 <span class="la">penninge</span>. The mark was a unit of account; the coins actually in circulation were mainly shillings and pennies. In accounts you will meet abbreviations and signs such as <span class="la">mr.</span> for mark, a sign like <span class="la">ß</span> for shilling, and <span class="la">₰</span> for penny (from <em>d</em> for Latin <em>denarius</em>). Goods are counted in measures such as the <span class="la">tunne</span> (barrel), the <span class="la">last</span> (a shipload unit, for herring usually twelve barrels) and the <span class="la">schippunt</span> (ship-pound).</p>
        <p class="aside">The relation of mark to shilling to penny is stable over the period; the value of the mark, and the size of measures, varied by town and over time. Use a specialist reference before calculating with them.</p>
      `
    },
    {
      title: '4. Reading the edition itself',
      html: `
        <p>An edition puts a layer of editorial work around the text, and it pays to know its conventions.</p>
        <ul>
          <li><strong>Number and summary.</strong> Each document has a number and a summary (<em>Regest</em>) in modern German. In the <em>Hanserecesse</em> these use abbreviations of their own, for example <em>Kfm.</em> for <em>Kaufmann</em> (the merchants of a Kontor as a body) and <em>Rsn.</em> for <em>Ratssendeboten</em> (the council envoys of the towns). Each volume lists its abbreviations at the front.</li>
          <li><strong>Source note.</strong> Below the summary the editor says where the document is kept and in what form: original, copy, draft, letter-book entry. If several copies exist, the editor names the one printed and records variants from the others in notes.</li>
          <li><strong>The text.</strong> Abbreviations are expanded, sometimes silently. <em>u/v</em> and <em>i/j</em> may be regularised. Capitals and punctuation are mostly the editor’s, and long documents are divided into numbered paragraphs.</li>
          <li><strong>Dates.</strong> The editor converts the document’s date into a modern date in the heading, as in “1469 Apr. 8”. You can check such a conversion with the Dates tool in Reference.</li>
        </ul>
        <p>What an edition does not give you is the look of the page: line breaks, corrections, the hand. For that you need the facsimile.</p>
      `
    },
    {
      title: '5. The parts of a letter',
      html: `
        <p>Letters between councils and Kontore follow a fixed pattern, as charters do. With the 1469 letters as examples:</p>
        <ol>
          <li><strong>Inscriptio</strong>: the address, on the outside. <span class="la">Den erbaren wysen unde voersenigen heren borgermesteren unde raedmannen der stad Lubecke</span>: “To the honourable, wise and prudent lords, the burgomasters and councillors of the town of Lübeck.” The string of adjectives is fixed courtesy, graded by rank.</li>
          <li><strong>Salutatio</strong>: the greeting. <span class="la">Vruntlike grute unde wes wii gudes vermogen alle tiit tovoren</span>: “Friendly greeting, and whatever good we are able to do, always first.” Or more humbly: <span class="la">Unsen oitmodighen denst</span>, “our humble service”.</li>
          <li><strong>The body</strong>: the business, often opening with a repeated address (<span class="la">Erbare wyse unde voersenige heren</span>) and a reference to the letter being answered.</li>
          <li><strong>Commendation</strong>: the recipients commended to God. <span class="la">de God almechtich altyt bewaren wille</span>: “whom God almighty may always keep”.</li>
          <li><strong>Datum</strong>: <span class="la">Geschreven to Londen in Englant int jaer uns heren 1469, 8 in apryll</span>.</li>
          <li><strong>Subscriptio</strong>: the senders. <span class="la">By den ghevangenen copluyden van der hensen …</span></li>
        </ol>
      `
    }
  ],

  vocab: [
    { id: 'schriver', head: 'schrîver', la: 'schrîver', g: 'm', pos: 'noun', en: 'scribe, clerk', de: 'Schreiber', note: 'The town clerk: stat-schrîver.' },
    { id: 'hant', head: 'hant', la: 'hant, pl. hende', g: 'f', pos: 'noun', en: 'hand; handwriting', de: 'Hand' },
    { id: 'schriven', head: 'schrîven', la: 'schrîven, schrêf, geschreven', pos: 'verb, strong', en: 'write', de: 'schreiben', note: 'Past participle (ge)schreven: Geschreven to Londen, written at London.' },
    { id: 'ingesegel', head: 'ingesegel', la: 'ingesegel', g: 'n', pos: 'noun', en: 'seal', de: 'Siegel' },
    { id: 'grote', head: 'grôte', la: 'grôte', g: 'f', pos: 'noun', en: 'greeting', de: 'Gruß', note: 'ô ↔ German u, as in bôk/Buch.' },
    { id: 'erbar', head: 'êrbâr', la: 'êrbâr', pos: 'adjective', en: 'honourable', de: 'ehrbar', note: 'Standard courtesy for town councils: den êrbâren hêren.' },
    { id: 'wis', head: 'wîs', la: 'wîs', pos: 'adjective', en: 'wise', de: 'weise' },
    { id: 'vorsenich', head: 'vorsênich', la: 'vorsênich', pos: 'adjective', en: 'prudent, provident', de: 'vorsichtig, umsichtig', note: 'From vorsên, foresee.' },
    { id: 'sendebode', head: 'sendebôde', la: 'sendebôde', g: 'm', pos: 'noun', en: 'envoy', de: 'Gesandter, Sendbote', note: 'râdessendebôde: council envoy, delegate of a town at the Hansetag.' },
    { id: 'gemene', head: 'gemêne', la: 'gemêne', pos: 'adjective', en: 'common, general', de: 'gemein(sam)', note: 'de gemêne stede van der hense: the towns of the Hanse together.' },
    { id: 'hense', head: 'hense', la: 'hense, hanse', g: 'f', pos: 'noun', en: 'Hanse; association of merchants', de: 'Hanse' },
    { id: 'denst', head: 'dênst', la: 'dênst', g: 'm', pos: 'noun', en: 'service', de: 'Dienst' },
    { id: 'dener', head: 'dêner', la: 'dêner', g: 'm', pos: 'noun', en: 'servant', de: 'Diener', note: 'juwe trûwen dênere: your faithful servants, a courtesy formula.' },
    { id: 'gevenknisse', head: 'gevenknisse', la: 'gevenknisse', g: 'f', pos: 'noun', en: 'imprisonment, prison', de: 'Gefängnis' },
    { id: 'bewaren', head: 'bewâren', la: 'bewâren', pos: 'verb, weak', en: 'keep, protect', de: 'bewahren' },
    { id: 'mark', head: 'mark', la: 'mark', g: 'f', pos: 'noun', en: 'mark (money of account)', de: 'Mark', note: '1 mark lubesch = 16 shillings.' },
    { id: 'schillink', head: 'schillink', la: 'schillink, pl. schillinge', g: 'm', pos: 'noun', en: 'shilling', de: 'Schilling', note: '1 shilling = 12 pence.' },
    { id: 'pennink', head: 'pennink', la: 'pennink, pl. penninge', g: 'm', pos: 'noun', en: 'penny', de: 'Pfennig', note: 'Unshifted p: German Pfennig.' },
    { id: 'tunne', head: 'tunne', la: 'tunne', g: 'f', pos: 'noun', en: 'barrel', de: 'Tonne, Fass' }
  ],

  grammarCards: [
    { id: 'p-s', front: 'ſ in a manuscript or old print', back: 'Long s, used at the start and in the middle of words: ſchip = schip' },
    { id: 'p-min', front: 'What are minims?', back: 'The short vertical strokes that make up i, u, n, m. Count them.' },
    { id: 'p-sutt', front: 'Is Sütterlin a medieval script?', back: 'No: a school script of 1915. Hanseatic documents are in Gothic cursive hands.' },
    { id: 'p-nasal', front: 'A line over a vowel: dē, vn̄', back: 'Nasal stroke: a following n or m (or more) is omitted. dē = den/dem, vn̄ = vnde' },
    { id: 'p-er', front: 'A small hook above the line after a letter (vnd’)', back: 'er: vnd’ = vnder' },
    { id: 'p-kinds', front: 'Four kinds of abbreviation (Cappelli)', back: 'Suspension, contraction, signs with fixed meaning, superscript letters' },
    { id: 'p-iiij', front: 'iiij, vij, xiiij', back: '4, 7, 14 (final i written j)' },
    { id: 'p-1469', front: 'm cccc lxix', back: '1469' },
    { id: 'p-half', front: 'dridde half', back: '2½ (compare German anderthalb = 1½)' },
    { id: 'p-money', front: 'mark : schillink : pennink', back: '1 mark = 16 shillings; 1 shilling = 12 pence' },
    { id: 'p-signs', front: 'ß and ₰ in accounts', back: 'shilling and penny (₰ from d, denarius)' },
    { id: 'p-last', front: 'A last of herring', back: 'Usually twelve barrels (tunnen)' },
    { id: 'p-rsn', front: 'Rsn. and Kfm. in the Hanserecesse', back: 'Ratssendeboten (council envoys); Kaufmann (the merchants of a Kontor)' },
    { id: 'p-parts', front: 'Parts of a letter', back: 'Inscriptio, Salutatio, body, Commendation, Datum, Subscriptio' },
    { id: 'p-ii', front: 'wii, tiit, jaer, oitmodich: what do ii, ae, oi show?', back: 'Long vowels: wî, tît, jâr, ôtmôdich' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'In a manuscript or old print, <span class="la">ſchip</span> begins with:', options: ['a long s: schip', 'an f: fchip', 'a t: tchip', 'an l: lchip'], answer: 0, explain: 'Long s is used at the start and in the middle of words; f has a full crossbar.' },
    { id: 'e2', type: 'mc', prompt: 'Why is <span class="la">mynne</span> hard to read in many hands?', options: ['m, n, u and i are made of the same short strokes', 'y and n were written alike', 'the scribes did not write double consonants', 'e was written above the line'], answer: 0, explain: 'Minims: count the strokes and use the context.' },
    { id: 'e3', type: 'mc', prompt: 'Sütterlin is:', options: ['a German school script introduced in 1915', 'the standard hand of Hanseatic clerks', 'the book script of the Sachsenspiegel', 'a type of seal'], answer: 0, explain: 'The medieval hands are Gothic cursives, centuries older.' },
    { id: 'e4', type: 'gap', prompt: 'Expand: <span class="la">vn̄</span>', hint: '“and”', answers: ['vnde', 'unde', 'vnd', 'und'], full: 'vnde', explain: 'The line over n stands for the omitted letters.' },
    { id: 'e5', type: 'gap', prompt: 'Expand: <span class="la">in dē hûse</span>', hint: 'dative after in: “in the house”', answers: ['deme', 'dem'], full: 'in deme hûse', explain: 'The nasal stroke stands for m here, because the dative is needed.' },
    { id: 'e6', type: 'gap', prompt: 'In figures: <span class="la">xl tunnen</span>', hint: 'barrels', answers: ['40'], full: '40', explain: 'xl = 40.' },
    { id: 'e7', type: 'gap', prompt: 'In figures: <span class="la">iiij mark</span>', hint: 'marks', answers: ['4'], full: '4', explain: 'Medieval scribes usually wrote iiij, not iv; the last i is j.' },
    { id: 'e8', type: 'gap', prompt: 'In figures: <span class="la">m cccc lxix</span>', hint: 'a year', answers: ['1469'], full: '1469', explain: 'm = 1000, cccc = 400, lxix = 69.' },
    { id: 'e9', type: 'mc', prompt: '<span class="la">dridde half mark</span> is:', options: ['2½ marks', '3½ marks', '3 marks', '1½ marks'], answer: 0, explain: '“The third, half”: two whole and the third half. German anderthalb = 1½ works the same way.' },
    { id: 'e10', type: 'mc', prompt: 'How many shillings make a <span class="la">mark lubesch</span>?', options: ['16', '12', '20', '24'], answer: 0, explain: '1 mark = 16 shillings; 1 shilling = 12 pence.' },
    { id: 'e11', type: 'mc', prompt: 'In an account, <span class="la">₰</span> stands for:', options: ['penny (pennink)', 'pound', 'shilling', 'mark'], answer: 0, explain: 'From d for denarius.' },
    { id: 'e12', type: 'mc', prompt: 'In the heading of a Hanserecesse document, <em>Rsn.</em> means:', options: ['Ratssendeboten, council envoys', 'Rechnung, account', 'Recess, resolution', 'Reisen, journeys'], answer: 0, explain: 'Every volume lists its abbreviations at the front.' },
    { id: 'e13', type: 'match', prompt: 'Match the parts of a letter to the 1469 examples.', pairs: [
      ['Inscriptio', 'Den erbaren wysen … heren'], ['Salutatio', 'Vruntlike grute …'], ['Commendation', 'de God … bewaren wille'], ['Datum', 'Geschreven to Londen …'], ['Subscriptio', 'By den ghevangenen copluyden …']
    ] },
    { id: 'e14', type: 'mc', prompt: 'In <span class="la">wii</span> and <span class="la">tiit</span> the doubled <em>i</em> shows:', options: ['a long vowel: wî, tît', 'two syllables', 'a scribal error', 'the plural'], answer: 0, explain: 'Doubling a vowel to mark length is a western (Dutch and Flemish) habit, common in letters from Bruges.' },
    { id: 'e15', type: 'mc', prompt: 'What do <span class="la">ae</span> in <span class="la">raedmannen</span> and <span class="la">oi</span> in <span class="la">oitmodighen</span> show?', options: ['A long vowel: râtmannen, ôtmôdigen', 'Umlaut: ä and ö', 'A diphthong as in German Kaiser and neu', 'Nothing: spelling errors'], answer: 0, explain: 'The lengthening e and i, as in the place names Soest and Troisdorf.' },
    { id: 'e16', type: 'translate', dir: 'mnd-de', source: 'Geschreven to Londen in Englant int jaer uns heren 1469.', model: 'Geschrieben zu London in England im Jahr unseres Herrn 1469.', accepted: ['geschrieben zu london in england im jahr unseres herrn 1469', 'geschrieben in london in england im jahr unseres herrn 1469', 'geschrieben zu london in england im jahre unseres herrn 1469', 'geschrieben in london in england im jahre unseres herrn 1469', 'geschrieben zu london in england im jahr des herrn 1469', 'geschrieben in london in england im jahr des herrn 1469'] },
    { id: 'e17', type: 'translate', dir: 'mnd-en', source: 'Vruntlike grute', model: 'Friendly greeting(s)', accepted: ['friendly greeting', 'friendly greetings', 'kind greetings', 'cordial greetings', 'cordial greeting', 'kind regards'] },
    { id: 'e18', type: 'mc', prompt: 'Which of these does a 19th-century edition usually <strong>not</strong> do?', options: ['Reproduce the line breaks and layout of the original', 'Expand abbreviations', 'Add a summary in modern German', 'Number the documents'], answer: 0, explain: 'For the look of the page you need a facsimile.' }
  ],

  reading: {
    title: 'Twê brêve van 1469',
    note: 'Authentic excerpts. A: the merchants at Bruges to Lübeck, 31 Jan. 1469. B: the merchants imprisoned in London to the Hanse envoys, 8 Apr. 1469. Tap any word.',
    diplomaticLabel: 'As printed (1890)',
    diplomaticNote: 'Text of the edition, from the digitised scan: Hanserecesse, 2. Abt., Bd. 6, ed. G. von der Ropp (Leipzig 1890). A: the German merchants at Bruges to Lübeck, 31 January 1469 (no. 167, p. 127). B: the imprisoned German merchants in London to the Hanse envoys at Lübeck, 8 April 1469 (no. 165, pp. 125–6). Obvious scanning errors corrected in [ ]; … marks omitted text.',
    startView: 'dipl',
    diplomatic: `A.
Den erbaren wysen unde voersenigen heren borgermesteren unde raedmannen der stad Lubecke,
Vruntlike grute unde wes wii gudes vermogen alle tiit tovoren. Erbare wyse unde voersenige heren.

B.
Den erbaren wysen unde vorsynighen heren radesseyndeboden der gemenen stede van der hense
Unsen oitmodighen denst met vermoghen alles ghuden to allen tyden bereyd.
… und wy boven 3 quarter jaers in ghevencknisse ghelegen hadden …
… de Got allme[c]htich altyt bewaren willen in salycheyden.
Geschreven to Londen in Englant int jaer uns heren 1469, 8 in apryll.
By den ghevangenen [c]opluyden van der hensen to London in Englant wesende, juwe trouwen deyners et[c].`,
    text: `A.
Den êrbâren wîsen unde vorsênigen hêren borgermêsteren unde râtmannen der stat Lübeke,
Vrüntlike grôte unde wes wî gôdes vermogen alle tît tovoren. Êrbâre wîse unde vorsênige hêren.

B.
Den êrbâren wîsen unde vorsênigen hêren râdessendebôden der gemênen stede van der hense
Unsen ôtmôdigen dênst mit vermogen alles gôden tô allen tîden berêt.
… unde wî boven drê quarter jâres in gevenknisse gelegen hadden …
… de God almechtich altît bewâren wille in salicheiden.
Geschreven tô Londen in Engelant in dat jâr unses hêren 1469, 8 in aprille.
Bî den gevangenen kôplüden van der hense tô Londen in Engelant wesende, jûwe trûwen dênere etc.`,
    translations: [
      { label: 'German translation', text: 'A. Den ehrbaren, weisen und umsichtigen Herren Bürgermeistern und Ratsherren der Stadt Lübeck. Freundlichen Gruß und was wir an Gutem vermögen allzeit zuvor. Ehrbare, weise und umsichtige Herren. — B. Den ehrbaren, weisen und umsichtigen Herren Ratssendeboten der gemeinen Hansestädte. Unseren demütigen Dienst, mit dem Vermögen alles Guten, zu allen Zeiten bereit. … und wir über drei Vierteljahre im Gefängnis gelegen hatten … die Gott der Allmächtige allzeit in Seligkeit bewahren wolle. Geschrieben zu London in England im Jahr unseres Herrn 1469, am 8. April. Von den gefangenen Kaufleuten der Hanse, in London in England weilend, euren treuen Dienern usw.' },
      { label: 'English translation', text: 'A. To the honourable, wise and prudent lords, the burgomasters and councillors of the town of Lübeck. Friendly greeting, and whatever good we are able to do, always first. Honourable, wise and prudent lords. — B. To the honourable, wise and prudent lords, the council envoys of the common towns of the Hanse. Our humble service, with the power of all good, ready at all times. … and we had lain in prison for more than three quarters of a year … whom God almighty may always keep in blessedness. Written at London in England in the year of our Lord 1469, the 8th of April. From the imprisoned merchants of the Hanse being at London in England, your faithful servants, etc.' }
    ],
    notes: [
      { ref: 'Den erbaren wysen unde voersenigen heren', html: 'The <em>inscriptio</em>, in the dative: “to the …”. <span class="la">erbar, wys, voersenich</span> are the standard courtesy titles for a town council. The edition prints the address first, as it stood on the outside of the folded letter.' },
      { ref: 'raedmannen … stad Lubecke', html: '<span class="la">ae</span> marks a long <em>a</em> (<span class="la">râtmannen</span>), as in Lecture I. <span class="la">stad</span> for <span class="la">stat</span> and <span class="la">Lubecke</span> with <em>ck</em> show the free spelling of the sources.' },
      { ref: 'Vruntlike grute', html: '“Friendly greeting”. <span class="la">grute</span> = <span class="la">grôte</span>, German <em>Gruß</em>; the letter <em>u</em> here writes the long <span class="la">ô</span> sound.' },
      { ref: 'wes wii gudes vermogen alle tiit tovoren', html: '“Whatever good we are able (to do), always first.” <span class="la">wes … gudes</span> is a genitive: “what of good”. <span class="la">wii</span> and <span class="la">tiit</span> double the vowel to mark length, a western spelling habit natural in a letter from Bruges.' },
      { ref: 'radesseyndeboden der gemenen stede van der hense', html: 'The <em>Ratssendeboten</em>, delegates of the towns gathered at the Hansetag in Lübeck. <span class="la">de gemene stede van der hense</span>, “the common towns of the Hanse”, is how the Hanse described itself.' },
      { ref: 'Unsen oitmodighen denst', html: '“Our humble service”: the merchants address their superiors more humbly than the Bruges Kontor addresses Lübeck. <span class="la">oi</span> marks a long <em>o</em> (<span class="la">ôtmôdich</span>, German <em>demütig</em>). <span class="la">met</span> for <span class="la">mit</span> is a western form.' },
      { ref: 'boven 3 quarter jaers in ghevencknisse', html: '“Over three quarters of a year in prison.” Note the Arabic numeral, increasingly common in the 15th century, and <span class="la">jaers</span> (genitive of <span class="la">jâr</span>, with <span class="la">ae</span> for long <em>a</em>).' },
      { ref: 'de Got allme[c]htich … bewaren willen', html: 'The commendation. <span class="la">de</span> is a relative pronoun referring to the addressees: “whom God almighty …”. <span class="la">Got</span> shows final devoicing written out (<span class="la">God</span>, <span class="la">Godes</span>). The edition has <span class="la">willen</span> where a singular <span class="la">wille</span> would be expected; check the printed page.' },
      { ref: 'int jaer uns heren 1469, 8 in apryll', html: '<span class="la">int</span> is <span class="la">in dat</span> run together. The day is given by number, not by a feast, which became more common in the 15th century.' },
      { ref: 'wesende, juwe trouwen deyners et[c].', html: '<span class="la">wesende</span> is the present participle of <span class="la">wesen</span>, “being”. <span class="la">juwe</span> “your” (German <em>euer</em>, Dutch <em>uw</em>). The scribe’s own <span class="la">etc.</span> cuts short a familiar formula.' }
    ],
    glosses: {
      'den': 'to the (dat. pl. of the article)', 'êrbâren': 'honourable (dat. pl.)', 'erbaren': 'honourable: êrbâren', 'êrbâre': 'honourable', 'erbare': 'honourable: êrbâre',
      'wîsen': 'wise (dat. pl.)', 'wysen': 'wise: wîsen', 'wîse': 'wise', 'wyse': 'wise: wîse', 'unde': 'and', 'und': 'and',
      'vorsênigen': 'prudent (dat. pl.), German umsichtig', 'voersenigen': 'prudent: vorsênigen', 'vorsynighen': 'prudent: vorsênigen', 'vorsênige': 'prudent', 'voersenige': 'prudent: vorsênige',
      'hêren': 'lords (pl. of hêre)', 'heren': 'lords; uns heren: of our Lord', 'borgermêsteren': 'burgomasters (dat. pl.)', 'borgermesteren': 'burgomasters (dat. pl.)', 'râtmannen': 'councillors (dat. pl.)', 'raedmannen': 'councillors: râtmannen',
      'der': 'of the', 'stat': 'town', 'stad': 'town: stat', 'lübeke': 'Lübeck', 'lubecke': 'Lübeck',
      'vrüntlike': 'friendly', 'vruntlike': 'friendly', 'grôte': 'greeting, German Gruß', 'grute': 'greeting: grôte', 'wes': 'whatever (gen. of wat)', 'wî': 'we', 'wii': 'we: wî', 'wy': 'we: wî',
      'gôdes': 'of good (gen.): wes … gôdes, whatever good', 'gudes': 'of good: gôdes', 'vermogen': 'are able (to do), German vermögen; also: ability', 'alle': 'all', 'tît': 'time: alle tît, always', 'tiit': 'time: tît', 'tovoren': 'before, first, German zuvor',
      'râdessendebôden': 'council envoys (dat. pl.), German Ratssendeboten', 'radesseyndeboden': 'council envoys: râdessendebôden', 'gemênen': 'common (dat. pl.)', 'gemenen': 'common', 'stede': 'towns (pl. of stat)', 'van': 'of, from', 'hense': 'Hanse', 'hensen': 'Hanse (dat.)',
      'unsen': 'our (acc.)', 'ôtmôdigen': 'humble, German demütig', 'oitmodighen': 'humble: ôtmôdigen', 'dênst': 'service', 'denst': 'service: dênst', 'mit': 'with', 'met': 'with: mit (western form)', 'alles': 'of all', 'gôden': 'good (gen./dat.)', 'ghuden': 'good: gôden',
      'tô': 'to, at', 'to': 'to, at', 'allen': 'all (dat. pl.)', 'tîden': 'times (dat. pl.): tô allen tîden, at all times', 'tyden': 'times: tîden', 'berêt': 'ready, German bereit', 'bereyd': 'ready: berêt',
      'boven': 'over, more than, German oben/über', 'drê': 'three', 'quarter': 'quarter', 'jâres': 'of a year (gen.)', 'jaers': 'of a year: jâres', 'in': 'in', 'gevenknisse': 'prison, imprisonment, German Gefängnis', 'ghevencknisse': 'prison: gevenknisse',
      'gelegen': 'lain (participle of liggen)', 'ghelegen': 'lain: gelegen', 'hadden': 'had (pl. past of hebben)', 'de': 'whom (relative pronoun)', 'god': 'God', 'got': 'God (final devoicing written t)',
      'almechtich': 'almighty, German allmächtig', 'allmechtich': 'almighty: almechtich', 'altît': 'always', 'altyt': 'always: altît', 'bewâren': 'keep, protect, German bewahren', 'bewaren': 'keep, protect', 'wille': 'may (he) (subjunctive of willen)', 'willen': 'want, will; here probably for wille', 'salicheiden': 'blessedness (dat.), German Seligkeit', 'salycheyden': 'blessedness: salicheiden',
      'geschreven': 'written (participle of schrîven)', 'londen': 'London', 'london': 'London', 'engelant': 'England', 'englant': 'England', 'dat': 'the (n.)', 'int': 'in the: in dat', 'jâr': 'year', 'jaer': 'year: jâr', 'unses': 'of our', 'uns': 'of our (gen. uns(es))', 'aprille': 'April', 'apryll': 'April',
      'bî': 'by, from', 'by': 'by, from: bî', 'gevangenen': 'imprisoned (dat. pl.), German gefangenen', 'ghevangenen': 'imprisoned: gevangenen', 'kôplüden': 'merchants (dat. pl. of kôpman)', 'copluyden': 'merchants: kôplüden',
      'wesende': 'being (present participle of wesen)', 'jûwe': 'your (pl.), German euer', 'juwe': 'your: jûwe', 'trûwen': 'faithful, German treuen', 'trouwen': 'faithful: trûwen', 'dênere': 'servants', 'deyners': 'servants: dênere', 'etc': 'et cetera: the rest of the formula is left out'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Who wrote letter B?', options: ['The German merchants imprisoned in London', 'The council of Lübeck', 'The king of England', 'The merchants at Bruges'], answer: 0, explain: 'By den ghevangenen copluyden van der hensen to London in Englant wesende.' },
      { id: 'r2', type: 'mc', prompt: 'How long had they been in prison?', options: ['More than three quarters of a year', 'Three weeks', 'Three years', 'A quarter of a year'], answer: 0, explain: 'boven 3 quarter jaers: more than nine months, which fits an arrest in July 1468.' },
      { id: 'r3', type: 'mc', prompt: 'To whom is letter B addressed?', options: ['The council envoys of the Hanse towns', 'The burgomasters of London', 'The merchants at Bruges', 'The Emperor'], answer: 0, explain: 'radesseyndeboden der gemenen stede van der hense: the delegates at the Hansetag.' },
      { id: 'r4', type: 'mc', prompt: 'Why do the London merchants write <span class="la">Unsen oitmodighen denst</span> rather than a “friendly greeting”?', options: ['They address their superiors, the assembled towns, more humbly', 'They are writing in Latin', 'Because they are in England', 'It is a mistake by the editor'], answer: 0, explain: 'The greeting is graded by the relation between sender and recipient.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 3,
    items: [
      { id: 't1', type: 'gap', prompt: 'In figures: <span class="la">xiiij</span>', hint: 'a number', answers: ['14'], full: '14', explain: 'x + iiij; final i written j.' },
      { id: 't2', type: 'gap', prompt: 'Expand: <span class="la">vnd’</span>', hint: '“under”', answers: ['vnder', 'under'], full: 'vnder', explain: 'The hook above the line stands for er.' },
      { id: 't3', type: 'mc', prompt: 'How many pence (penninge) in a mark lubesch?', options: ['192', '160', '240', '120'], answer: 0, explain: '16 shillings × 12 pence.' },
      { id: 't4', type: 'mc', prompt: 'The address of a letter (<em>inscriptio</em>) was written:', options: ['on the outside of the folded letter', 'at the end, after the date', 'on a separate sheet', 'on the seal'], answer: 0, explain: 'Hence editions print it first, set apart.' },
      { id: 't5', type: 'mc', prompt: '<span class="la">de God almechtich altît bewâren wille</span> is the:', options: ['Commendation', 'Salutatio', 'Datum', 'Inscriptio'], answer: 0, explain: 'The recipients are commended to God before the date.' },
      { id: 't6', type: 'mc', prompt: 'An abbreviation such as <span class="la">dē</span> should be expanded:', options: ['by grammar and sense: den or dem', 'always as den', 'always as dem', 'never: it must be kept as it is'], answer: 0, explain: 'The same sign can stand for different letters; the case needed decides.' },
      { id: 't7', type: 'mc', prompt: 'A <span class="la">last</span> of herring was usually:', options: ['twelve barrels', 'one barrel', 'a hundred fish', 'a ship-pound'], answer: 0, explain: 'A shipload unit; check local practice before calculating.' },
      { id: 't8', type: 'mc', prompt: 'Where can you see photographs of Lübeck letters sent to Reval?', options: ['On monasterium.net, in the Tallinn City Archives collection', 'Only in Lübeck', 'Nowhere: they are lost', 'In the Hanserecesse volumes'], answer: 0, explain: 'The Tallinn City Archives have published many of their medieval charters there.' },
      { id: 't9', type: 'translate', dir: 'mnd-en', source: 'juwe trouwen deyners', model: 'your faithful servants', accepted: ['your faithful servants', 'your loyal servants', 'your true servants', 'your trusty servants'] },
      { id: 't10', type: 'gap', prompt: 'In figures: <span class="la">m cccc lxx</span>', hint: 'a year', answers: ['1470'], full: '1470', explain: 'm = 1000, cccc = 400, lxx = 70.' }
    ]
  },

  reference: [
    { title: 'Roman numerals in documents', headers: ['Written', 'Value'], rows: [['i, ij, iij, iiij', '1, 2, 3, 4'], ['v, vj, vij, viij, viiij', '5–9'], ['x, xl, l, lx', '10, 40, 50, 60'], ['c, cc, ccc, cccc', '100–400'], ['m', '1000'], ['m cccc lxix', '1469']] },
    { title: 'Lübeck money', headers: ['Unit', 'Value'], rows: [['1 mark lubesch', '16 schillinge'], ['1 schillink (ß)', '12 penninge'], ['1 pennink (₰)', '—'], ['1 mark', '192 penninge']] },
    { title: 'Common abbreviations', headers: ['Written', 'Read'], rows: [['vn̄', 'vnde'], ['dē', 'den / dem'], ['vnd’', 'vnder'], ['lub.', 'lubesch'], ['mr.', 'mark'], ['etc.', 'et cetera']] }
  ]
});
