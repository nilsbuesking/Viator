/*
 * Latin — Lecture VIII: the third declension (II): neuters; predicting the stem.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-08',
  number: 8,
  title: 'Ō tempora, ō mōrēs',
  subtitle: 'The third declension (II): neuter nouns; predicting the stem from the nominative',
  minutes: 60,

  intro: `
    <p>Lecture VII introduced the third declension with masculine and feminine nouns. This lecture completes it with the <strong>neuters</strong>, some of the most frequent words in Latin: <span class="la">corpus</span> “body”, <span class="la">tempus</span> “time”, <span class="la">nōmen</span> “name”, <span class="la">carmen</span> “song, poem”, <span class="la">caput</span> “head”, <span class="la">opus</span> “work”.</p>
    <p>Nothing here is new in principle. The two neuter rules you learned in Lecture IV apply in every declension: nominative and accusative are the same, and in the plural they end in <span class="la">-a</span>. So <span class="la">corpus, corporis</span> has the plural <span class="la">corpora</span>, and <span class="la">tempus, temporis</span> the plural <span class="la">tempora</span>. The other cases take the endings of Lecture VII.</p>
    <p>The second half of the lecture gives you a set of patterns for guessing the genitive, and so the stem, from the nominative. They are not infallible, but they cover the great majority of third-declension nouns and make unfamiliar words much less frightening when you meet them in a text.</p>
    <p>By the end you should be able to decline any third-declension noun, recognise the commonest stem patterns, and avoid the trap of neuters in <span class="la">-us</span>, which look like second-declension masculines.</p>
  `,

  background: [
    {
      title: 'Cicero against Catiline',
      html: `
        <p>In 63 BC Marcus Tullius Cicero was consul. Lucius Sergius Catilina, a patrician who had twice failed to win the consulship, was gathering supporters for an armed rising, with debt relief as one of its slogans. In November Cicero attacked him in the senate with a speech that every Roman schoolboy later learned: the <em>First Catilinarian</em>. Its opening questions, <span class="la">Quō ūsque tandem abūtēre, Catilīna, patientiā nostrā?</span>, “How long, Catiline, will you abuse our patience?”, are among the best-known sentences in Latin; you will read them in the original later in this course.</p>
        <p>The exclamation in this lecture’s source panel comes from the same speech. Cicero is appalled that the senate knows about the plot, the consul sees it, and yet Catiline still lives and even comes into the senate. Catiline left Rome, the conspirators who stayed were arrested, and five of them were executed without trial on the senate’s advice: a decision that later cost Cicero years of exile. How dangerous the conspiracy really was is debated; much of what we know comes from Cicero himself and from Sallust, who wrote about it twenty years later.</p>
      `
    },
    {
      title: 'Tempus: the Roman calendar',
      html: `
        <p>The Roman Republic used a calendar of 355 days, kept in step with the sun by inserting an extra month every few years. Inserting it was the job of the pontiffs, a political office, and in the turbulent last decades of the Republic it was often neglected or manipulated. By Caesar’s time the calendar was about three months out of step with the seasons.</p>
        <p>As <span class="la">pontifex maximus</span>, Caesar reformed it. The year 46 BC was stretched to 445 days to bring the months back into place, and from 45 BC the year had 365 days with a leap day every fourth year: the Julian calendar, which Europe used until the Gregorian reform of 1582, and which Protestant Germany, Britain and Russia kept much longer. The date converter in this app’s Reference section uses both.</p>
        <p>Roman dates were counted backwards from three fixed days in each month: the Kalends (1st), the Nones (5th or 7th) and the Ides (13th or 15th). The Ides of March, on which Caesar was killed in 44 BC, was the 15th.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fasti_Antiates,_Palazzo_Massimo_alle_Terme,_Rome..jpg/960px-Fasti_Antiates,_Palazzo_Massimo_alle_Terme,_Rome..jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fasti_Antiates,_Palazzo_Massimo_alle_Terme,_Rome..jpg/500px-Fasti_Antiates,_Palazzo_Massimo_alle_Terme,_Rome..jpg|https://upload.wikimedia.org/wikipedia/commons/a/af/Fasti_Antiates,_Palazzo_Massimo_alle_Terme,_Rome..jpg" alt="Painted plaster fragments with columns of letters arranged as a calendar"><figcaption>The <em>Fasti Antiates maiores</em>, a painted calendar from Antium of the first half of the 1st century BC (National Roman Museum, Palazzo Massimo): the only surviving Roman calendar from before Caesar’s reform. Each column is a month; the letters mark the days and their religious and legal status. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Fasti_Antiates,_Palazzo_Massimo_alle_Terme,_Rome..jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Carmen: song, poem, spell, formula',
      html: `
        <p><span class="la">carmen, carminis</span> is usually translated “song” or “poem”, but its older meaning was wider: any solemn, rhythmical form of words. Prayers, oaths, prophecies, magic spells and legal formulas were all <span class="la">carmina</span>. The Twelve Tables (Lecture II) are said to have punished anyone who sang a <span class="la">malum carmen</span>, which may mean a defamatory song or a harmful spell; ancient writers already disagreed.</p>
        <p>The word is related to <span class="la">canō</span>, “sing” (third conjugation), and to English <em>charm</em> through French <em>charme</em>. German <em>Zauberspruch</em> and <em>Lied</em> together cover roughly what <span class="la">carmen</span> covered for an early Roman.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ancient_Roman_sundial,_Antikensammlung_Berlin,_141306.jpg/960px-Ancient_Roman_sundial,_Antikensammlung_Berlin,_141306.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ancient_Roman_sundial,_Antikensammlung_Berlin,_141306.jpg/500px-Ancient_Roman_sundial,_Antikensammlung_Berlin,_141306.jpg|https://upload.wikimedia.org/wikipedia/commons/0/0e/Ancient_Roman_sundial,_Antikensammlung_Berlin,_141306.jpg" alt="Carved stone sundial with a hollowed face marked with hour lines"><figcaption>A Roman sundial (Antikensammlung, Berlin). Romans divided daylight into twelve <span class="la">hōrae</span>, so an hour was longer in summer than in winter. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Ancient_Roman_sundial,_Antikensammlung_Berlin,_141306.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Ō tempora, ō mōrēs!</p>
    <p>“What times! What morals!” Cicero, <em>In Catilinam</em> 1.2, from the speech against Catiline in November 63 BC. Cicero used the same exclamation in other speeches too.</p>
    <p><span class="la">tempora</span> is the plural of the neuter <span class="la">tempus, temporis</span>; <span class="la">mōrēs</span> the plural of <span class="la">mōs, mōris</span> m. from Lecture VII. Latin often uses the accusative for exclamations (<span class="la">mē miserum!</span>, “poor me!”), and that is the usual reading here, though <span class="la">tempora</span> and <span class="la">mōrēs</span> could also be nominatives, and grammars differ. German has accusatives of the same kind in greetings and wishes, the object of a verb left unsaid: <em>Guten Morgen!</em>, <em>Herzlichen Glückwunsch!</em>; its exclamations proper take the nominative (<em>O diese Zeiten!</em>, <em>Welch ein Mann!</em>). The phrase is often quoted with mock indignation about modern manners, which suits Cicero’s own rhetoric better than one might think.</p>
  `,

  pronunciation: `
    <h3>Short vowels in -oris, -eris, -inis</h3>
    <p>The stem vowels of most neuters are short, so the stress moves back in the longer cases: <span class="la">COR-pus, COR-po-ris</span>; <span class="la">TEM-pus, TEM-po-ris</span>; <span class="la">GE-nus, GE-ne-ris</span>; <span class="la">CAR-men, CAR-mi-nis</span>. In <span class="la">nōmen, nōminis</span> the first vowel is long, but the stress still falls on it: <span class="la">NŌ-mi-nis</span>.</p>
    <p>Contrast the masculines in <span class="la">-or, -ōris</span> from Lecture VII, which have a long <span class="la">ō</span> and so keep the stress: <span class="la">a-MŌ-ris</span>, but <span class="la">COR-po-ris</span>. The length of the <span class="la">o</span> is the whole difference between the two patterns.</p>
    <h3>caput, capitis</h3>
    <p><span class="la">CA-put, CA-pi-tis</span>, with a short <span class="la">a</span>. German <em>Kopf</em> is not related (it comes from a word for a cup), but <em>Haupt</em> probably is: <em>k</em> became <em>h</em> by the first sound shift, as in English <em>head</em> (Old English <em>hēafod</em>), though the vowel and the <em>b</em>/<em>p</em> of the Germanic word do not follow the regular sound laws, and etymologists still discuss why.</p>
  `,

  grammar: [
    {
      title: '1. Third-declension neuters',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>corpus, corporis n.</th><th>nōmen, nōminis n.</th><th>Ending</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">corpus</td><td class="la">nōmen</td><td>(various)</td></tr>
            <tr><th>Gen. sg.</th><td class="la">corporis</td><td class="la">nōminis</td><td class="la">-is</td></tr>
            <tr><th>Dat. sg.</th><td class="la">corporī</td><td class="la">nōminī</td><td class="la">-ī</td></tr>
            <tr><th>Acc. sg.</th><td class="la">corpus</td><td class="la">nōmen</td><td>= nom.</td></tr>
            <tr><th>Abl. sg.</th><td class="la">corpore</td><td class="la">nōmine</td><td class="la">-e</td></tr>
            <tr><th>Nom. pl.</th><td class="la">corpora</td><td class="la">nōmina</td><td class="la">-a</td></tr>
            <tr><th>Gen. pl.</th><td class="la">corporum</td><td class="la">nōminum</td><td class="la">-um</td></tr>
            <tr><th>Dat. pl.</th><td class="la">corporibus</td><td class="la">nōminibus</td><td class="la">-ibus</td></tr>
            <tr><th>Acc. pl.</th><td class="la">corpora</td><td class="la">nōmina</td><td class="la">-a</td></tr>
            <tr><th>Abl. pl.</th><td class="la">corporibus</td><td class="la">nōminibus</td><td class="la">-ibus</td></tr>
          </tbody>
        </table></div>
        <p>Compared with <span class="la">rēx</span>, only three forms differ: the accusative singular is the same as the nominative (not <span class="la">-em</span>), and the nominative and accusative plural end in <span class="la">-a</span> (not <span class="la">-ēs</span>). These are the neuter rules of Lecture IV.</p>
      `
    },
    {
      title: '2. The -us trap',
      html: `
        <p>Several common neuters end in <span class="la">-us</span>: <span class="la">corpus, tempus, genus, opus, onus, scelus, vulnus, lītus</span>. They look like second-declension masculines such as <span class="la">amīcus</span>, but they are third-declension neuters, and their genitive shows it: <span class="la">corporis</span>, not <span class="la">corpī</span>.</p>
        <ul>
          <li><span class="la">tempus</span> is nominative or accusative singular, never the subject of a plural verb.</li>
          <li><span class="la">tempora</span> is a plural, not a feminine singular.</li>
          <li>An adjective with <span class="la">corpus</span> is neuter: <span class="la">corpus sānum</span>, not <span class="la">corpus sānus</span>.</li>
        </ul>
        <p>When a word in <span class="la">-us</span> refuses to make sense as a masculine, check the dictionary for <span class="la">-oris</span> or <span class="la">-eris</span>.</p>
      `
    },
    {
      title: '3. Predicting the stem',
      html: `
        <p>The genitive must still be learned, but these patterns cover most nouns and let you guess the stem of a new word:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Nominative</th><th>Genitive</th><th>Gender</th><th>Examples</th></tr></thead>
          <tbody>
            <tr><td class="la">-or</td><td class="la">-ōris</td><td>m.</td><td class="la">amor, labor, senātor</td></tr>
            <tr><td class="la">-tās, -tūs</td><td class="la">-tātis, -tūtis</td><td>f.</td><td class="la">lībertās, virtūs</td></tr>
            <tr><td class="la">-tiō, -siō</td><td class="la">-tiōnis</td><td>f.</td><td class="la">ōrātiō, nātiō</td></tr>
            <tr><td class="la">-ō</td><td class="la">-inis</td><td>m./f.</td><td class="la">homō, virgō</td></tr>
            <tr><td class="la">-men</td><td class="la">-minis</td><td>n.</td><td class="la">nōmen, carmen, flūmen</td></tr>
            <tr><td class="la">-us</td><td class="la">-oris</td><td>n.</td><td class="la">corpus, tempus, lītus</td></tr>
            <tr><td class="la">-us</td><td class="la">-eris</td><td>n.</td><td class="la">genus, opus, onus, scelus, vulnus</td></tr>
            <tr><td class="la">-x</td><td class="la">-gis, -cis</td><td>m./f.</td><td class="la">rēx, lēx; dux, pāx</td></tr>
            <tr><td class="la">-es</td><td class="la">-itis, -etis</td><td>m.</td><td class="la">mīles; pariēs</td></tr>
            <tr><td class="la">-ter</td><td class="la">-tris</td><td>m./f.</td><td class="la">pater, māter, frāter</td></tr>
          </tbody>
        </table></div>
        <p>A few nouns follow no pattern and must simply be learned: <span class="la">caput, capitis</span> n.; <span class="la">iter, itineris</span> n. “journey”; <span class="la">senex, senis</span> m. “old man”; <span class="la">ōs, ōris</span> n. “mouth”, not to be confused with <span class="la">os, ossis</span> n. “bone”.</p>
      `
    },
    {
      title: '4. Agreement with neuter nouns',
      html: `
        <p>Adjectives of the first and second declension take their neuter forms with these nouns, whatever the noun’s own ending:</p>
        <ul>
          <li><span class="la">corpus sānum, corporis sānī, corporī sānō</span>; plural <span class="la">corpora sāna</span></li>
          <li><span class="la">nōmen clārum</span>; plural <span class="la">nōmina clāra</span></li>
          <li><span class="la">tempora mala</span>, “bad times”</li>
        </ul>
        <p>Two neuter plurals in <span class="la">-a</span> side by side (<span class="la">tempora mala, carmina pulchra</span>) look like first-declension feminines. Check the noun’s gender before you trust the ending.</p>
      `
    },
    {
      title: '5. Latin neuters in English and German',
      html: `
        <p>Many technical words in English and German come from the stem of these neuters, so the genitive is easier to remember than it seems:</p>
        <ul>
          <li><span class="la">corpus, corpor-</span>: corporal, corporation, incorporate; German <em>Korpus, Körper</em> (the latter borrowed in the Middle Ages)</li>
          <li><span class="la">tempus, tempor-</span>: temporal, temporary, contemporary; German <em>temporär</em></li>
          <li><span class="la">genus, gener-</span>: general, generate, gender; German <em>generell</em></li>
          <li><span class="la">opus, oper-</span>: operation, opera (the plural <span class="la">opera</span>, “works”)</li>
          <li><span class="la">nōmen, nōmin-</span>: nominal, nominate</li>
          <li><span class="la">caput, capit-</span>: capital, capitol, captain; German <em>Kapitel, Kapital</em></li>
        </ul>
        <p>The English or German derivative usually shows the stem, not the nominative: <em>corporal</em>, not “corpusal”.</p>
      `
    },
    {
      title: '6. Exclamations in the accusative',
      html: `
        <p>Latin often puts an exclamation in the accusative, with or without <span class="la">ō</span>: <span class="la">Ō tempora, ō mōrēs!</span>; <span class="la">mē miserum!</span>, “poor me!”. The accusative here is not the object of any verb: it expresses the thing that rouses the speaker’s feeling.</p>
        <p>Do not confuse it with the vocative, which addresses someone: <span class="la">Ō Meliboee!</span> (Lecture IV), <span class="la">mī Mārce!</span> (Lecture III).</p>
      `
    }
  ],

  vocab: [
    { id: 'corpus', head: 'corpus', la: 'corpus, corporis', g: 'n', pos: 'noun, 3rd decl.', en: 'body', stress: 'COR-pus · COR-po-ris', deriv: 'corporal, corpse; Körper' },
    { id: 'tempus', head: 'tempus', la: 'tempus, temporis', g: 'n', pos: 'noun, 3rd decl.', en: 'time; (pl.) the times', stress: 'TEM-pus · TEM-po-ris', deriv: 'temporal, tempo; Tempo' },
    { id: 'nomen', head: 'nōmen', la: 'nōmen, nōminis', g: 'n', pos: 'noun, 3rd decl.', en: 'name', stress: 'NŌ-men · NŌ-mi-nis', deriv: 'nominal, noun', note: 'German Name and English name are cognates.' },
    { id: 'carmen', head: 'carmen', la: 'carmen, carminis', g: 'n', pos: 'noun, 3rd decl.', en: 'song, poem; spell, formula', stress: 'CAR-men · CAR-mi-nis', deriv: 'charm' },
    { id: 'genus', head: 'genus', la: 'genus, generis', g: 'n', pos: 'noun, 3rd decl.', en: 'kind, type; origin, family', stress: 'GE-nus · GE-ne-ris', deriv: 'genus, general, gender' },
    { id: 'opus', head: 'opus', la: 'opus, operis', g: 'n', pos: 'noun, 3rd decl.', en: 'work, task', stress: 'O-pus · O-pe-ris', deriv: 'opus, opera, operate' },
    { id: 'caput', head: 'caput', la: 'caput, capitis', g: 'n', pos: 'noun, 3rd decl.', en: 'head; capital', stress: 'CA-put · CA-pi-tis', deriv: 'capital, chapter; Kapitel', note: 'German Haupt is a cognate.' },
    { id: 'flumen', head: 'flūmen', la: 'flūmen, flūminis', g: 'n', pos: 'noun, 3rd decl.', en: 'river', stress: 'FLŪ-men · FLŪ-mi-nis', deriv: 'flume', note: 'From fluō, flow.' },
    { id: 'litus', head: 'lītus', la: 'lītus, lītoris', g: 'n', pos: 'noun, 3rd decl.', en: 'shore, beach', stress: 'LĪ-tus · LĪ-to-ris', deriv: 'littoral' },
    { id: 'vulnus', head: 'vulnus', la: 'vulnus, vulneris', g: 'n', pos: 'noun, 3rd decl.', en: 'wound', stress: 'VUL-nus · VUL-ne-ris', deriv: 'vulnerable' },
    { id: 'onus', head: 'onus', la: 'onus, oneris', g: 'n', pos: 'noun, 3rd decl.', en: 'burden, load', stress: 'O-nus · O-ne-ris', deriv: 'onus, onerous' },
    { id: 'scelus', head: 'scelus', la: 'scelus, sceleris', g: 'n', pos: 'noun, 3rd decl.', en: 'crime, wickedness', stress: 'SCE-lus · SCE-le-ris' },
    { id: 'iter', head: 'iter', la: 'iter, itineris', g: 'n', pos: 'noun, 3rd decl.', en: 'journey, route, march', stress: 'I-ter · i-TI-ne-ris', deriv: 'itinerary', note: 'Irregular stem itiner-.' },
    { id: 'os', head: 'ōs', la: 'ōs, ōris', g: 'n', pos: 'noun, 3rd decl.', en: 'mouth, face', stress: 'ŌS · Ō-ris', deriv: 'oral', note: 'Distinguish os, ossis n., bone.' },
    { id: 'lumen', head: 'lūmen', la: 'lūmen, lūminis', g: 'n', pos: 'noun, 3rd decl.', en: 'light; (poetic) eye', stress: 'LŪ-men · LŪ-mi-nis', deriv: 'luminous, illuminate' },
    { id: 'senex', head: 'senex', la: 'senex, senis', g: 'm', pos: 'noun, 3rd decl.', en: 'old man', stress: 'SE-nex · SE-nis', deriv: 'senile, senior, senate' },
    { id: 'sol', head: 'sōl', la: 'sōl, sōlis', g: 'm', pos: 'noun, 3rd decl.', en: 'sun', stress: 'SŌL · SŌ-lis', deriv: 'solar', note: 'German Sonne and English sun are related.' },
    { id: 'lux', head: 'lūx', la: 'lūx, lūcis', g: 'f', pos: 'noun, 3rd decl.', en: 'light; daylight', stress: 'LŪX · LŪ-cis', deriv: 'lucid; prīmā lūce, at dawn', note: 'German Licht and English light are cognates.' },
    { id: 'virgo', head: 'virgō', la: 'virgō, virginis', g: 'f', pos: 'noun, 3rd decl.', en: 'girl, young woman, virgin', stress: 'VIR-gō · VIR-gi-nis', deriv: 'virgin' },

    { id: 'canto', head: 'cantō', la: 'cantō, cantāre, cantāvī, cantātum', pos: 'verb, 1st conj.', en: 'sing; play (an instrument)', stress: 'CAN-tō · can-TĀ-re', deriv: 'chant, cantata' },
    { id: 'narro', head: 'nārrō', la: 'nārrō, nārrāre, nārrāvī, nārrātum', pos: 'verb, 1st conj.', en: 'tell, relate', stress: 'NĀR-rō · nār-RĀ-re', deriv: 'narrate' },
    { id: 'recito', head: 'recitō', la: 'recitō, recitāre, recitāvī, recitātum', pos: 'verb, 1st conj.', en: 'read aloud, recite', stress: 'RE-ci-tō · re-ci-TĀ-re', deriv: 'recite, recital', note: 'Romans normally read aloud; the recitātiō was a public reading of new work.' },
    { id: 'libero', head: 'līberō', la: 'līberō, līberāre, līberāvī, līberātum', pos: 'verb, 1st conj.', en: 'free, set free', stress: 'LĪ-be-rō · lī-be-RĀ-re', deriv: 'liberate' },
    { id: 'sano', head: 'sānō', la: 'sānō, sānāre, sānāvī, sānātum', pos: 'verb, 1st conj.', en: 'heal, cure', stress: 'SĀ-nō · sā-NĀ-re', note: 'From sānus (Lecture V).' },
    { id: 'muto', head: 'mūtō', la: 'mūtō, mūtāre, mūtāvī, mūtātum', pos: 'verb, 1st conj.', en: 'change, exchange', stress: 'MŪ-tō · mū-TĀ-re', deriv: 'mutate, mutual' },
    { id: 'sustineo', head: 'sustineō', la: 'sustineō, sustinēre, sustinuī, sustentum', pos: 'verb, 2nd conj.', en: 'hold up, support; endure', stress: 'sus-TI-ne-ō · sus-ti-NĒ-re', deriv: 'sustain', note: 'sub + teneō.' },

    { id: 'clarus', head: 'clārus', la: 'clārus, clāra, clārum', pos: 'adjective', en: 'clear, bright; famous', stress: 'CLĀ-rus', deriv: 'clear, clarify; klar' },
    { id: 'fessus', head: 'fessus', la: 'fessus, fessa, fessum', pos: 'adjective', en: 'tired, weary', stress: 'FES-sus' },
    { id: 'aeternus', head: 'aeternus', la: 'aeternus, aeterna, aeternum', pos: 'adjective', en: 'eternal', stress: 'ae-TER-nus', deriv: 'eternal' },
    { id: 'vivus', head: 'vīvus', la: 'vīvus, vīva, vīvum', pos: 'adjective', en: 'alive, living', stress: 'VĪ-vus', deriv: 'vivid, vivacious' },
    { id: 'de', head: 'dē', la: 'dē + abl.', pos: 'preposition', en: 'down from; about, concerning', stress: 'DĒ', note: 'dē bellō: about the war.' }
  ],

  grammarCards: [
    { id: 'g8-sg', front: 'Third declension neuter singular (N G D A Ab)', back: '–, -is, -ī, = nom., -e' },
    { id: 'g8-pl', front: 'Third declension neuter plural (N G D A Ab)', back: '-a, -um, -ibus, -a, -ibus' },
    { id: 'g8-diff', front: 'How do 3rd-declension neuters differ from rēx?', back: 'Acc. sg. = nom.; nom./acc. pl. in -a.' },
    { id: 'g8-corpus', front: 'corpus: plural nominative', back: 'corpora' },
    { id: 'g8-tempus', front: 'tempus: genitive singular', back: 'temporis' },
    { id: 'g8-us', front: 'The -us trap', back: 'corpus, tempus, genus, opus … are 3rd-declension neuters, not 2nd-declension masculines.' },
    { id: 'g8-men', front: 'Nouns in -men', back: 'Genitive -minis, neuter: nōmen, nōminis' },
    { id: 'g8-oris', front: '-us, -oris vs -or, -ōris', back: 'corpus, corporis n. (short o); amor, amōris m. (long ō)' },
    { id: 'g8-eris', front: 'Neuters in -us, -eris', back: 'genus, opus, onus, scelus, vulnus' },
    { id: 'g8-caput', front: 'caput: genitive and gender', back: 'capitis, neuter' },
    { id: 'g8-iter', front: 'iter: genitive', back: 'itineris (n.)' },
    { id: 'g8-os', front: 'ōs vs os', back: 'ōs, ōris n.: mouth; os, ossis n.: bone' },
    { id: 'g8-agree', front: 'corpus + sānus: which form?', back: 'corpus sānum (neuter)' },
    { id: 'g8-excl', front: 'Ō tempora, ō mōrēs!: case?', back: 'Accusative of exclamation' },
    { id: 'g8-julian', front: 'The Julian calendar', back: 'Caesar’s reform: 365 days with a leap day every fourth year, from 45 BC.' },
    { id: 'g8-ides', front: 'The Ides of March', back: '15 March (Ides: 13th, or 15th in March, May, July, October)' },
    { id: 'g8-carmen', front: 'carmen: range of meaning', back: 'song, poem; spell, prayer, legal formula' },
    { id: 'g8-cicero', front: 'Ō tempora, ō mōrēs!', back: 'What times! What morals! (Cicero, In Catilinam 1.2, 63 BC)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">corpora</span> is:', options: ['nominative or accusative plural', 'feminine singular', 'ablative singular', 'genitive plural'], answer: 0, explain: 'Neuter plural -a.' },
    { id: 'e2', type: 'mc', prompt: 'Genitive of <span class="la">tempus</span>:', options: ['temporis', 'tempī', 'tempus', 'temporum'], answer: 0, explain: 'Third declension, stem tempor-.' },
    { id: 'e3', type: 'mc', prompt: 'Which adjective form goes with <span class="la">corpus</span> (nom.)?', options: ['sānum', 'sānus', 'sāna', 'sānī'], answer: 0, explain: 'corpus is neuter.' },
    { id: 'e4', type: 'mc', prompt: 'Accusative singular of <span class="la">nōmen</span>:', options: ['nōmen', 'nōminem', 'nōminum', 'nōmina'], answer: 0, explain: 'Neuter: accusative = nominative.' },
    { id: 'e5', type: 'mc', prompt: 'Which noun is <strong>not</strong> neuter?', options: ['amor', 'opus', 'flūmen', 'caput'], answer: 0, explain: 'amor, amōris is masculine.' },
    { id: 'e6', type: 'mc', prompt: 'In <span class="la">Ō tempora, ō mōrēs!</span>, the case is:', options: ['accusative of exclamation', 'vocative', 'nominative', 'ablative'], answer: 0, explain: 'The thing that rouses feeling.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Carmin___ poētārum amāmus.</span>', hint: 'the poems (acc. pl.)', answers: ['a'], full: 'Carmina poētārum amāmus.', explain: 'Neuter plural -a.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Vulnus in capit___ habēbat.</span>', hint: 'head (abl.)', answers: ['e'], full: 'Vulnus in capite habēbat.', explain: 'Stem capit-, ablative -e.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Nōmen ___ clārum est.</span>', hint: 'of the poet (gen.)', answers: ['poētae'], full: 'Nōmen poētae clārum est.', explain: 'First-declension genitive.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Corpor___ hominum fessa erant.</span>', hint: 'bodies (nom. pl.)', answers: ['a'], full: 'Corpora hominum fessa erant.', explain: 'Neuter plural; fessa agrees.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Dē temp___ malīs nārrābat.</span>', hint: 'about the bad times (abl. pl.)', answers: ['oribus'], full: 'Dē temporibus malīs nārrābat.', explain: 'Stem tempor-, ablative plural -ibus.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">In lītor___ ambulābāmus.</span>', hint: 'on the shore (abl.)', answers: ['e'], full: 'In lītore ambulābāmus.', explain: 'lītus, lītoris: ablative lītore.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">corpus sānum</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['corpus sānum', 'corpora sāna'] },
      { label: 'Gen.', answers: ['corporis sānī', 'corporum sānōrum'] },
      { label: 'Dat.', answers: ['corporī sānō', 'corporibus sānīs'] },
      { label: 'Acc.', answers: ['corpus sānum', 'corpora sāna'] },
      { label: 'Abl.', answers: ['corpore sānō', 'corporibus sānīs'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">nōmen clārum</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['nōmen clārum', 'nōmina clāra'] },
      { label: 'Gen.', answers: ['nōminis clārī', 'nōminum clārōrum'] },
      { label: 'Dat.', answers: ['nōminī clārō', 'nōminibus clārīs'] },
      { label: 'Acc.', answers: ['nōmen clārum', 'nōmina clāra'] },
      { label: 'Abl.', answers: ['nōmine clārō', 'nōminibus clārīs'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each nominative to its genitive.', pairs: [
      ['genus', 'generis'], ['tempus', 'temporis'], ['flūmen', 'flūminis'], ['caput', 'capitis'], ['iter', 'itineris']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Carmina animōs hominum līberant.', tokens: ['Poems', 'set free', 'the minds', 'of people'], explain: 'carmina: nominative plural, subject.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Tempora nostra mala sunt.', model: 'Our times are bad.', accepted: ['our times are bad', 'our times are evil', 'times of ours are bad'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Poēta carmen dē flūmine recitābat.', model: 'The poet was reciting a poem about the river.', accepted: ['poet was reciting poem about river', 'poet recited poem about river', 'poet was reading aloud poem about river', 'poet was reciting song about river', 'poet was reciting poem concerning river', 'poet used to recite poem about river', 'poet read aloud poem about river'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Mīles vulnera multa habēbat.', model: 'The soldier had many wounds.', accepted: ['soldier had many wounds', 'soldier was having many wounds'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'The body is tired.', model: 'Corpus fessum est.', accepted: ['corpus fessum est', 'corpus est fessum'], explain: 'Corpus, corporis is a third-declension neuter, so the adjective is fessum: its -us is not the second-declension ending. Neuter nominative and accusative are always the same.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'We love the songs.', model: 'Carmina amāmus.', accepted: ['carmina amāmus'], explain: 'Carmen, carminis is neuter: the accusative plural is carmina, like every neuter plural in -a.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'the name of the river', model: 'nōmen flūminis', accepted: ['nōmen flūminis'], explain: 'Both are third-declension neuters: nōmen, nōminis and flūmen, flūminis. The genitive normally follows its noun.' },
    { id: 'e23', type: 'mc', prompt: 'Caesar’s calendar reform introduced:', options: ['365 days with a leap day every four years', 'twelve months of 30 days', 'the week of seven days', 'the Ides of March'], answer: 0, explain: 'From 45 BC; 46 BC had 445 days.' },
    { id: 'e24', type: 'mc', prompt: 'Cicero spoke against Catiline in:', options: ['63 BC, as consul', '44 BC, after Caesar’s death', '509 BC', '27 BC'], answer: 0, explain: 'The First Catilinarian, November 63 BC.' },
    { id: 'e25', type: 'mc', prompt: 'The older meaning of <span class="la">carmen</span> includes:', options: ['spells and legal formulas', 'only lyric poems', 'only hymns to the gods', 'prose speeches'], answer: 0, explain: 'Any solemn, rhythmical form of words.' }
  ],

  reading: {
    title: 'Ō tempora, ō mōrēs',
    note: 'Original passage: Marcus reads poetry in the evening. Tap any word.',
    text: 'Vesperī Mārcus librum tenēbat et carmina poētārum Graecōrum recitābat. Lūcius autem corpus fessum habēbat, nam multās hōrās cum puerīs in flūmine labōrābat. Quīntus parvum vulnus in capite habēbat. “Mārce,” inquit Lūcius, “cūr semper carmina amās? Tempora nostra nōn sunt tempora carminum, sed labōris.” Mārcus respondet: “Ō tempora, ō mōrēs! Sine carminibus vīta est onus magnum. Carmina corpora nōn sānant, sed animōs hominum līberant.” Quīntus rogat: “Pater, estne carmen dē vulneribus?” Mārcus rīdet: “Multa carmina dē bellīs et vulneribus sunt; sed hodiē carmen dē flūmine et lītore et lūmine sōlis recitābō.” Itaque puerī et Lūcius diū sedēbant, et nōmina deōrum et hominum memoriā tenēbant.',
    translation: 'In the evening Marcus was holding a book and reading aloud the poems of the Greek poets. Lucius, however, was tired in body, for he had been working in the river with the boys for many hours. Quintus had a small wound on his head. “Marcus,” said Lucius, “why do you always love poems? Our times are not times for poems, but for work.” Marcus replies: “What times! What morals! Without poems life is a great burden. Poems do not heal bodies, but they free the minds of men.” Quintus asks: “Father, is there a poem about wounds?” Marcus laughs: “There are many poems about wars and wounds; but today I shall recite a poem about the river and the shore and the light of the sun.” And so the boys and Lucius sat for a long time, and kept in memory the names of gods and men.',
    notes: [
      { ref: 'Vesperī Mārcus librum tenēbat', html: '<span class="la">vesperī</span>: “in the evening”, an old locative form used as an adverb. Romans read aloud, even alone; silent reading was possible but unusual enough to be remarked on.' },
      { ref: 'carmina poētārum Graecōrum', html: 'Neuter plural <span class="la">carmina</span> (accusative), with a first-declension genitive plural. Educated Romans read Greek as a matter of course.' },
      { ref: 'corpus fessum habēbat', html: 'Literally “had a tired body”. <span class="la">fessum</span> is neuter to agree with <span class="la">corpus</span>.' },
      { ref: 'multās hōrās … labōrābat', html: '<span class="la">multās hōrās</span>: accusative of extent of time, “for many hours”. The imperfect after <span class="la">nam</span> explains the background: he had been working.' },
      { ref: 'in capite', html: 'Ablative of <span class="la">caput, capitis</span> after <span class="la">in</span>.' },
      { ref: 'Tempora nostra nōn sunt tempora carminum, sed labōris', html: 'Two genitives of different declensions: <span class="la">carminum</span> (neuter, gen. pl.) and <span class="la">labōris</span> (masculine, gen. sg.).' },
      { ref: 'Ō tempora, ō mōrēs!', html: 'Marcus quotes Cicero (source panel), with a smile: the times are not as bad as all that.' },
      { ref: 'Carmina corpora nōn sānant', html: 'Two neuter plurals in <span class="la">-a</span>: which is the subject? Word order and sense decide: poems (subject) do not heal bodies (object). Compare Lecture IV, <span class="la">Bellum perīculum parat</span>.' },
      { ref: 'estne carmen dē vulneribus?', html: '<span class="la">-ne</span> on the first word makes a question (Lecture I). <span class="la">est</span> at the start means “is there”.' },
      { ref: 'nōmina deōrum et hominum memoriā tenēbant', html: '<span class="la">memoriā tenēre</span>: “to keep in memory, remember”, with an ablative of means. <span class="la">deōrum</span>: genitive plural of <span class="la">deus</span>, “god”.' }
    ],
    glosses: {
      'vesperī': 'in the evening', 'mārcus': 'Marcus (nom.)', 'librum': 'acc. of liber: book', 'tenēbat': 'impf. 3rd sg. of teneō: was holding', 'et': 'and', 'carmina': 'nom./acc. pl. of carmen: poems', 'poētārum': 'gen. pl. of poēta: of the poets', 'graecōrum': 'gen. pl. m. of Graecus: Greek', 'recitābat': 'impf. 3rd sg. of recitō: was reading aloud',
      'lūcius': 'Lucius (nom.)', 'autem': 'however (never first)', 'corpus': 'body (nom./acc.)', 'fessum': 'acc. n. of fessus: tired', 'habēbat': 'impf. 3rd sg. of habeō: had', 'nam': 'for', 'multās': 'acc. pl. f. of multus: many', 'hōrās': 'acc. pl. of hōra: hours', 'cum': 'with (+ abl.)', 'puerīs': 'abl. pl. of puer: boys', 'in': 'in, on (+ abl.)', 'flūmine': 'abl. of flūmen: river', 'labōrābat': 'impf. 3rd sg. of labōrō: had been working',
      'quīntus': 'Quintus (nom.)', 'parvum': 'acc. n. of parvus: small', 'vulnus': 'wound (nom./acc.)', 'capite': 'abl. of caput: head',
      'mārce': 'voc. of Mārcus', 'inquit': 'says, said', 'cūr': 'why', 'semper': 'always', 'amās': '2nd sg. of amō: you love', 'tempora': 'nom./acc. pl. of tempus: times', 'nostra': 'nom. pl. n. of noster: our', 'nōn': 'not', 'sunt': 'are', 'carminum': 'gen. pl. of carmen: of poems', 'sed': 'but', 'labōris': 'gen. of labor: of work',
      'respondet': '3rd sg. of respondeō: replies', 'ō': 'O! (exclamation)', 'mōrēs': 'acc. pl. of mōs: morals, customs', 'sine': 'without (+ abl.)', 'carminibus': 'abl. pl. of carmen: poems', 'vīta': 'life (nom.)', 'est': 'is', 'onus': 'burden (nom.)', 'magnum': 'nom. n. of magnus: great',
      'corpora': 'acc. pl. of corpus: bodies', 'sānant': '3rd pl. of sānō: heal', 'animōs': 'acc. pl. of animus: minds', 'hominum': 'gen. pl. of homō: of people', 'līberant': '3rd pl. of līberō: set free',
      'rogat': '3rd sg. of rogō: asks', 'pater': 'father (voc.)', 'estne': 'is there? (est + -ne)', 'carmen': 'poem (nom.)', 'dē': 'about (+ abl.)', 'vulneribus': 'abl. pl. of vulnus: wounds',
      'rīdet': '3rd sg. of rīdeō: laughs', 'multa': 'nom. pl. n. of multus: many', 'bellīs': 'abl. pl. of bellum: wars', 'hodiē': 'today', 'lītore': 'abl. of lītus: shore', 'lūmine': 'abl. of lūmen: light', 'sōlis': 'gen. of sōl: of the sun', 'recitābō': 'fut. 1st sg. of recitō: I shall recite',
      'itaque': 'and so', 'puerī': 'nom. pl. of puer: boys', 'diū': 'for a long time', 'sedēbant': 'impf. 3rd pl. of sedeō: sat', 'nōmina': 'acc. pl. of nōmen: names', 'deōrum': 'gen. pl. of deus: of the gods', 'memoriā': 'abl. of memoria: in memory', 'tenēbant': 'impf. 3rd pl. of teneō: kept'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What was Marcus doing in the evening?', options: ['Reading Greek poems aloud', 'Working in the river', 'Writing a letter', 'Sleeping'], answer: 0, explain: 'carmina poētārum Graecōrum recitābat.' },
      { id: 'r2', type: 'mc', prompt: 'Why was Lucius tired?', options: ['He had worked in the river for hours', 'He had read too long', 'He was wounded', 'He had sailed all day'], answer: 0, explain: 'multās hōrās cum puerīs in flūmine labōrābat.' },
      { id: 'r3', type: 'mc', prompt: 'What, according to Marcus, do poems do?', options: ['They free the minds of people', 'They heal bodies', 'They make money', 'They win wars'], answer: 0, explain: 'Carmina corpora nōn sānant, sed animōs hominum līberant.' },
      { id: 'r4', type: 'mc', prompt: 'What will Marcus’s poem be about today?', options: ['The river, the shore and the sunlight', 'Wars and wounds', 'Catiline', 'The gods only'], answer: 0, explain: 'carmen dē flūmine et lītore et lūmine sōlis.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Ablative plural of <span class="la">genus</span>:', options: ['generibus', 'genīs', 'genera', 'generum'], answer: 0, explain: 'Stem gener- + ibus.' },
      { id: 't2', type: 'mc', prompt: 'Nominative plural of <span class="la">caput</span>:', options: ['capita', 'capitēs', 'caputa', 'capitum'], answer: 0, explain: 'Neuter: -a on the stem capit-.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">operis</span> is the genitive of:', options: ['opus', 'opera (f.)', 'operō', 'ops'], answer: 0, explain: 'opus, operis n.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Nōmin___ deōrum nārrābat.</span>', hint: 'the names (acc. pl.)', answers: ['a'], full: 'Nōmina deōrum nārrābat.', explain: 'Neuter plural -a.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Corpus sān___ est.</span>', hint: 'healthy', answers: ['um'], full: 'Corpus sānum est.', explain: 'Neuter nominative.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Iter longum erat.', model: 'The journey was long.', accepted: ['journey was long', 'route was long', 'march was long', 'way was long'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'The times are bad.', model: 'Tempora mala sunt.', accepted: ['tempora mala sunt', 'tempora sunt mala'], explain: 'Tempus, temporis is neuter: plural tempora, with the adjective in the neuter plural, mala.' },
      { id: 't8', type: 'mc', prompt: 'Which noun is masculine?', options: ['labor, labōris', 'corpus, corporis', 'opus, operis', 'onus, oneris'], answer: 0, explain: '-or, -ōris (long ō): masculine.' },
      { id: 't9', type: 'mc', prompt: 'English <em>chapter</em> and German <em>Kapitel</em> come from:', options: ['caput, capitis', 'capiō', 'campus', 'carmen'], answer: 0, explain: 'Via Latin capitulum, “little head”.' },
      { id: 't10', type: 'mc', prompt: 'The Ides of March is:', options: ['15 March', '1 March', '13 March', '5 March'], answer: 0, explain: 'In March, May, July and October the Ides fall on the 15th.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">Ō tempora, ō mōrēs!</span> is by:', options: ['Cicero', 'Virgil', 'Caesar', 'Catiline'], answer: 0, explain: 'In Catilinam 1.2.' }
    ]
  },

  reference: [
    { title: 'Third declension neuter: corpus, corporis n.', headers: ['', 'Singular', 'Plural'], rows: [['Nom.', 'corpus', 'corpora'], ['Gen.', 'corporis', 'corporum'], ['Dat.', 'corporī', 'corporibus'], ['Acc.', 'corpus', 'corpora'], ['Abl.', 'corpore', 'corporibus']] },
    { title: 'Predicting the stem', headers: ['Nom.', 'Gen.', 'Gender', 'Example'], rows: [
      ['-or', '-ōris', 'm.', 'amor'], ['-tās', '-tātis', 'f.', 'lībertās'], ['-tiō', '-tiōnis', 'f.', 'ōrātiō'], ['-ō', '-inis', 'm./f.', 'homō'], ['-men', '-minis', 'n.', 'nōmen'], ['-us', '-oris', 'n.', 'corpus'], ['-us', '-eris', 'n.', 'genus'], ['-x', '-gis/-cis', 'm./f.', 'rēx, dux'], ['-es', '-itis', 'm.', 'mīles'], ['-ter', '-tris', 'm./f.', 'pater']
    ] },
    { title: 'Irregular stems to learn', headers: ['Nom.', 'Gen.', 'Meaning'], rows: [['caput', 'capitis', 'head'], ['iter', 'itineris', 'journey'], ['senex', 'senis', 'old man'], ['ōs', 'ōris', 'mouth'], ['os', 'ossis', 'bone']] }
  ]
});
