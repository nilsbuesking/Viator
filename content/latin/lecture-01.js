/*
 * Latin — Lecture I
 * Content file only. The engine (app.js) reads this structure; no code here.
 * Original material written in the conventional order of a first Latin course.
 * Every Latin form should be checked against a reference grammar before relying on it.
 */
Viator.addLecture('latin', {
  id: 'la-01',
  number: 1,
  title: 'Amō, amās, amat',
  subtitle: 'The verb and its endings; the first conjugation; the first declension',
  minutes: 40,

  intro: `
    <p>Latin is an <em>inflected</em> language. Where English relies on word order and small words such as <em>of</em>, <em>to</em> and <em>by</em>, Latin changes the ending of the word itself. <span class="la">Poēta puellam laudat</span> and <span class="la">Puellam poēta laudat</span> both mean “the poet praises the girl”: the ending <span class="la">-am</span> marks the girl as the person praised, wherever she stands in the sentence.</p>
    <p>If you know German, you already have the right instinct. German marks the role of a noun mainly on the article (<em>der Dichter, den Dichter</em>); Latin has no articles and marks it on the noun. Latin also has two cases German lacks, the <em>ablative</em> and the <em>vocative</em>.</p>
    <p>This lecture lays the two foundations everything else rests on:</p>
    <ol>
      <li><strong>The verb.</strong> A single Latin verb form tells you who acts, how many, and when. <span class="la">Amat</span> is a complete sentence: “he (she, it) loves”.</li>
      <li><strong>The noun.</strong> Nouns fall into five groups called <em>declensions</em>. The first, with nouns ending in <span class="la">-a</span>, is the simplest, and its endings will reappear in adjectives and pronouns later.</li>
    </ol>
    <p>By the end you should be able to conjugate any verb like <span class="la">amō</span> in the present tense, decline any noun like <span class="la">puella</span>, and read a short passage built from this lecture’s vocabulary.</p>
  `,

  culture: `
    <p class="la big">Ō tempora, ō mōrēs!</p>
    <p>“What times! What morals!” Cicero, <em>In Catilinam</em> I.2 (63 BC), denouncing the senate’s slowness to act against Catiline. Both nouns are third declension and in the accusative of exclamation, so this is a preview, not something you are expected to parse yet. Notice what you can already see: Latin needs no verb and no article to make a complete exclamation.</p>
  `,

  pronunciation: `
    <p>This course uses the <strong>restored classical pronunciation</strong>, the pronunciation of educated Romans around the first century BC. Church Latin (Italianate, with <em>Cicero</em> as “Chichero”) is a later tradition, and you will hear both.</p>
    <h3>Vowels and length</h3>
    <p>Every vowel is either long or short. A long vowel is marked here with a macron (<span class="la">ā ē ī ō ū</span>). Length is part of the word: <span class="la">puella</span> (nominative) and <span class="la">puellā</span> (ablative) differ only in the final vowel.</p>
    <div class="tablewrap"><table>
      <thead><tr><th>Letter</th><th>Short</th><th>Long</th></tr></thead>
      <tbody>
        <tr><td class="la">a</td><td>German <em>Mann</em></td><td>English <em>father</em></td></tr>
        <tr><td class="la">e</td><td>English <em>pet</em></td><td>German <em>Beet</em></td></tr>
        <tr><td class="la">i</td><td>English <em>pit</em></td><td>English <em>machine</em></td></tr>
        <tr><td class="la">o</td><td>German <em>Sonne</em></td><td>German <em>Boot</em></td></tr>
        <tr><td class="la">u</td><td>English <em>put</em></td><td>English <em>rude</em></td></tr>
      </tbody>
    </table></div>
    <h3>Diphthongs</h3>
    <p><span class="la">ae</span> roughly as in English <em>aisle</em> or German <em>Kaiser</em>; <span class="la">au</span> as in <em>house</em> or <em>Haus</em>; <span class="la">oe</span> as in <em>oil</em>.</p>
    <h3>Consonants</h3>
    <ul>
      <li><span class="la">c</span> and <span class="la">g</span> are always hard: <span class="la">Cicerō</span> is “KI-ke-roh”.</li>
      <li><span class="la">v</span> is English <em>w</em>: <span class="la">vīta</span> is “WEE-ta”.</li>
      <li><span class="la">i</span> before a vowel at the start of a word is English <em>y</em>: <span class="la">iam</span> “yam”.</li>
      <li><span class="la">s</span> is always voiceless, as in <em>sing</em>. <span class="la">qu</span> is <em>kw</em>. <span class="la">r</span> is rolled.</li>
      <li>Double consonants are held: <span class="la">puel-la</span>, <span class="la">ter-ra</span>.</li>
    </ul>
    <h3>Stress</h3>
    <ol>
      <li>A word of two syllables is stressed on the first: <span class="la">RO-sa</span>.</li>
      <li>A longer word is stressed on the second-last syllable if that syllable is long, otherwise on the third-last. A syllable is long if it has a long vowel or diphthong, or if its vowel is followed by two consonants: <span class="la">for-TŪ-na</span>, <span class="la">pu-EL-la</span>, but <span class="la">FĒ-mi-na</span>.</li>
    </ol>
    <p class="aside">Each vocabulary entry shows its stress in capitals. There is no Latin audio in this version; the stress line and the table above are the reference.</p>
  `,

  grammar: [
    {
      title: '1. The verb: person and number',
      html: `
        <p>A Latin verb form has a <em>stem</em>, which carries the meaning, and a <em>personal ending</em>, which says who does it. The personal endings of the active voice are the same in almost every tense, so they are worth learning first and well:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th></tr></thead>
          <tbody>
            <tr><th>1st person</th><td class="la">-ō / -m &nbsp;<span class="gl">I</span></td><td class="la">-mus &nbsp;<span class="gl">we</span></td></tr>
            <tr><th>2nd person</th><td class="la">-s &nbsp;<span class="gl">you</span></td><td class="la">-tis &nbsp;<span class="gl">you (pl.)</span></td></tr>
            <tr><th>3rd person</th><td class="la">-t &nbsp;<span class="gl">he, she, it</span></td><td class="la">-nt &nbsp;<span class="gl">they</span></td></tr>
          </tbody>
        </table></div>
        <p>Because the ending names the subject, Latin normally leaves out the pronoun. <span class="la">Laudant</span> is simply “they praise”. A 3rd person singular verb with no expressed subject can mean <em>he</em>, <em>she</em> or <em>it</em>; context decides.</p>
      `
    },
    {
      title: '2. The first conjugation, present tense',
      html: `
        <p>Verbs are grouped into four <em>conjugations</em> by the vowel of their stem. The first conjugation has stem vowel <span class="la">ā</span>, which you see in the infinitive: <span class="la">amā-re</span> “to love”. To find the present stem, drop the <span class="la">-re</span> of the infinitive.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th></tr></thead>
          <tbody>
            <tr><th>1st</th><td><span class="la">amō</span> <span class="gl">I love</span></td><td><span class="la">amāmus</span> <span class="gl">we love</span></td></tr>
            <tr><th>2nd</th><td><span class="la">amās</span> <span class="gl">you love</span></td><td><span class="la">amātis</span> <span class="gl">you (pl.) love</span></td></tr>
            <tr><th>3rd</th><td><span class="la">amat</span> <span class="gl">he/she/it loves</span></td><td><span class="la">amant</span> <span class="gl">they love</span></td></tr>
          </tbody>
        </table></div>
        <p>Two sound changes explain the apparent irregularities:</p>
        <ul>
          <li>In the 1st person singular the stem vowel merges with the ending: <span class="la">*amā-ō</span> becomes <span class="la">amō</span>.</li>
          <li>A long vowel becomes short before final <span class="la">-t</span> and <span class="la">-nt</span> (and before final <span class="la">-m</span> and <span class="la">-r</span>, which you will meet later). Hence <span class="la">amat</span>, <span class="la">amant</span>, but <span class="la">amās</span>, <span class="la">amāmus</span>, <span class="la">amātis</span>.</li>
        </ul>
        <p>The Latin present covers all three English presents: <span class="la">amat</span> is “he loves”, “he is loving” or “he does love”. With <span class="la">nōn</span>, which stands before the verb, it is usually best as “he does not love”.</p>
        <p class="aside"><strong>Principal parts.</strong> Dictionaries list a verb by four forms, for example <span class="la">amō, amāre, amāvī, amātum</span>. Only the first two are needed now; the vocabulary gives all four so that you learn them together from the start.</p>
      `
    },
    {
      title: '3. Cases',
      html: `
        <p>A noun changes its ending to show its job in the sentence. Each job is a <em>case</em>:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Case</th><th>Main use</th><th>Example</th></tr></thead>
          <tbody>
            <tr><th>Nominative</th><td>subject</td><td><span class="la">puella</span> amat <span class="gl">the girl loves</span></td></tr>
            <tr><th>Genitive</th><td>possession, “of”</td><td>rosa <span class="la">puellae</span> <span class="gl">the girl’s rose</span></td></tr>
            <tr><th>Dative</th><td>indirect object, “to, for”</td><td><span class="la">puellae</span> rosam dat <span class="gl">he gives the girl a rose</span></td></tr>
            <tr><th>Accusative</th><td>direct object</td><td><span class="la">puellam</span> laudat <span class="gl">he praises the girl</span></td></tr>
            <tr><th>Ablative</th><td>“by, with, from, in”, often after a preposition</td><td>in <span class="la">īnsulā</span> <span class="gl">on the island</span></td></tr>
            <tr><th>Vocative</th><td>direct address</td><td><span class="la">nauta</span>, cūr errās? <span class="gl">sailor, why do you wander?</span></td></tr>
          </tbody>
        </table></div>
        <p>The nominative, genitive, dative and accusative correspond closely to the German cases of the same names. The ablative absorbs work that German does with prepositions and the dative.</p>
      `
    },
    {
      title: '4. The first declension',
      html: `
        <p>Nouns of the first declension have <span class="la">-a</span> in the nominative singular and <span class="la">-ae</span> in the genitive singular. Dictionaries give both, plus the gender: <span class="la">puella, puellae</span> <em>f.</em> The genitive is the key form, since it shows the declension and gives the <em>base</em> (here <span class="la">puell-</span>), to which the endings are added.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">puella</td><td class="la">puellae</td></tr>
            <tr><th>Gen.</th><td class="la">puellae</td><td class="la">puellārum</td></tr>
            <tr><th>Dat.</th><td class="la">puellae</td><td class="la">puellīs</td></tr>
            <tr><th>Acc.</th><td class="la">puellam</td><td class="la">puellās</td></tr>
            <tr><th>Abl.</th><td class="la">puellā</td><td class="la">puellīs</td></tr>
            <tr><th>Voc.</th><td class="la">puella</td><td class="la">puellae</td></tr>
          </tbody>
        </table></div>
        <p>Several forms coincide. <span class="la">puellae</span> can be genitive or dative singular, or nominative or vocative plural; <span class="la">puellīs</span> is dative or ablative plural. The verb and the sense of the sentence settle which: in <span class="la">puellae rosās amant</span> the plural verb shows that <span class="la">puellae</span> is the subject.</p>
        <p><strong>Gender.</strong> First-declension nouns are almost all feminine. The common exceptions are nouns for men’s occupations: <span class="la">poēta</span> (poet), <span class="la">nauta</span> (sailor) and <span class="la">agricola</span> (farmer) are masculine.</p>
      `
    },
    {
      title: '5. Word order',
      html: `
        <p>Because endings carry the grammar, word order is free to express emphasis. The neutral order is subject, object, verb, with the verb last: <span class="la">Poēta rosam laudat.</span> Read a Latin sentence by identifying the endings first, starting with the verb (it tells you the person and number of the subject), then finding a nominative to match it.</p>
      `
    }
  ],

  vocab: [
    // verbs: la = principal parts, head = lemma used for flashcards
    { id: 'amo', head: 'amō', la: 'amō, amāre, amāvī, amātum', pos: 'verb, 1st conj.', en: 'love, like', stress: 'A-mō · a-MĀ-re', deriv: 'amorous, amateur' },
    { id: 'laudo', head: 'laudō', la: 'laudō, laudāre, laudāvī, laudātum', pos: 'verb, 1st conj.', en: 'praise', stress: 'LAU-dō · lau-DĀ-re', deriv: 'laud, laudable' },
    { id: 'voco', head: 'vocō', la: 'vocō, vocāre, vocāvī, vocātum', pos: 'verb, 1st conj.', en: 'call, summon', stress: 'VO-cō · vo-CĀ-re', deriv: 'vocation, invoke' },
    { id: 'cogito', head: 'cōgitō', la: 'cōgitō, cōgitāre, cōgitāvī, cōgitātum', pos: 'verb, 1st conj.', en: 'think, consider, ponder', stress: 'CŌ-gi-tō · cō-gi-TĀ-re', deriv: 'cogitate' },
    { id: 'erro', head: 'errō', la: 'errō, errāre, errāvī, errātum', pos: 'verb, 1st conj.', en: 'wander; be mistaken, err', stress: 'ER-rō · er-RĀ-re', deriv: 'err, erratic, error' },
    { id: 'servo', head: 'servō', la: 'servō, servāre, servāvī, servātum', pos: 'verb, 1st conj.', en: 'keep, preserve, save', stress: 'SER-vō · ser-VĀ-re', deriv: 'conserve, preservation' },
    { id: 'laboro', head: 'labōrō', la: 'labōrō, labōrāre, labōrāvī, labōrātum', pos: 'verb, 1st conj.', en: 'work, toil; be in difficulty', stress: 'la-BŌ-rō · la-bō-RĀ-re', deriv: 'laboratory, elaborate' },
    { id: 'ambulo', head: 'ambulō', la: 'ambulō, ambulāre, ambulāvī, ambulātum', pos: 'verb, 1st conj.', en: 'walk', stress: 'AM-bu-lō · am-bu-LĀ-re', deriv: 'ambulance, perambulate' },
    { id: 'habito', head: 'habitō', la: 'habitō, habitāre, habitāvī, habitātum', pos: 'verb, 1st conj.', en: 'live (in), dwell, inhabit', stress: 'HA-bi-tō · ha-bi-TĀ-re', deriv: 'habitat, inhabit' },
    { id: 'navigo', head: 'nāvigō', la: 'nāvigō, nāvigāre, nāvigāvī, nāvigātum', pos: 'verb, 1st conj.', en: 'sail', stress: 'NĀ-vi-gō · nā-vi-GĀ-re', deriv: 'navigate' },
    { id: 'est', head: 'est', la: 'est; sunt', pos: 'verb (irregular)', en: 'is; are', stress: 'EST · SUNT', note: 'Forms of the irregular verb sum, “be”. The full verb comes in a later lecture.' },

    // nouns
    { id: 'puella', head: 'puella', la: 'puella, puellae', g: 'f', pos: 'noun, 1st decl.', en: 'girl', stress: 'pu-EL-la' },
    { id: 'femina', head: 'fēmina', la: 'fēmina, fēminae', g: 'f', pos: 'noun, 1st decl.', en: 'woman', stress: 'FĒ-mi-na', deriv: 'feminine' },
    { id: 'rosa', head: 'rosa', la: 'rosa, rosae', g: 'f', pos: 'noun, 1st decl.', en: 'rose', stress: 'RO-sa' },
    { id: 'patria', head: 'patria', la: 'patria, patriae', g: 'f', pos: 'noun, 1st decl.', en: 'homeland, native land', stress: 'PA-tri-a', deriv: 'patriot, expatriate' },
    { id: 'vita', head: 'vīta', la: 'vīta, vītae', g: 'f', pos: 'noun, 1st decl.', en: 'life', stress: 'VĪ-ta', deriv: 'vital, curriculum vitae' },
    { id: 'fama', head: 'fāma', la: 'fāma, fāmae', g: 'f', pos: 'noun, 1st decl.', en: 'rumour, report; reputation, fame', stress: 'FĀ-ma', deriv: 'fame, infamous' },
    { id: 'poeta', head: 'poēta', la: 'poēta, poētae', g: 'm', pos: 'noun, 1st decl.', en: 'poet', stress: 'po-Ē-ta', note: 'Masculine, although first declension.' },
    { id: 'nauta', head: 'nauta', la: 'nauta, nautae', g: 'm', pos: 'noun, 1st decl.', en: 'sailor', stress: 'NAU-ta', deriv: 'nautical', note: 'Masculine, although first declension.' },
    { id: 'agricola', head: 'agricola', la: 'agricola, agricolae', g: 'm', pos: 'noun, 1st decl.', en: 'farmer', stress: 'a-GRI-co-la', deriv: 'agriculture', note: 'Masculine, although first declension.' },
    { id: 'terra', head: 'terra', la: 'terra, terrae', g: 'f', pos: 'noun, 1st decl.', en: 'earth, land', stress: 'TER-ra', deriv: 'terrain, territory' },
    { id: 'aqua', head: 'aqua', la: 'aqua, aquae', g: 'f', pos: 'noun, 1st decl.', en: 'water', stress: 'A-qua', deriv: 'aquatic, aqueduct' },
    { id: 'insula', head: 'īnsula', la: 'īnsula, īnsulae', g: 'f', pos: 'noun, 1st decl.', en: 'island', stress: 'ĪN-su-la', deriv: 'insular, peninsula; German Insel' },
    { id: 'via', head: 'via', la: 'via, viae', g: 'f', pos: 'noun, 1st decl.', en: 'road, street, way', stress: 'VI-a', deriv: 'via, viaduct' },
    { id: 'fortuna', head: 'fortūna', la: 'fortūna, fortūnae', g: 'f', pos: 'noun, 1st decl.', en: 'fortune, luck', stress: 'for-TŪ-na', deriv: 'fortune, fortunate' },
    { id: 'sapientia', head: 'sapientia', la: 'sapientia, sapientiae', g: 'f', pos: 'noun, 1st decl.', en: 'wisdom', stress: 'sa-pi-EN-ti-a', deriv: 'sapient, Homo sapiens' },
    { id: 'pecunia', head: 'pecūnia', la: 'pecūnia, pecūniae', g: 'f', pos: 'noun, 1st decl.', en: 'money', stress: 'pe-CŪ-ni-a', deriv: 'pecuniary, impecunious' },

    // other words
    { id: 'et', head: 'et', la: 'et', pos: 'conjunction', en: 'and; (as adverb) even, also', stress: 'ET' },
    { id: 'que', head: '-que', la: '-que', pos: 'enclitic conjunction', en: 'and (attached to the second word)', stress: '—', note: 'puellae poētaeque = puellae et poētae. A word with -que attached is stressed on the syllable before it: po-ē-TAE-que.' },
    { id: 'sed', head: 'sed', la: 'sed', pos: 'conjunction', en: 'but', stress: 'SED' },
    { id: 'non', head: 'nōn', la: 'nōn', pos: 'adverb', en: 'not', stress: 'NŌN', note: 'Normally placed immediately before the verb.' },
    { id: 'saepe', head: 'saepe', la: 'saepe', pos: 'adverb', en: 'often', stress: 'SAE-pe' },
    { id: 'in', head: 'in', la: 'in + ablative', pos: 'preposition', en: 'in, on', stress: 'IN', note: 'With the accusative it means “into, onto”; that use comes later.' }
  ],

  grammarCards: [
    { id: 'g-end1s', front: 'Personal ending: 1st person singular', back: '-ō (or -m)  ·  I' },
    { id: 'g-end2s', front: 'Personal ending: 2nd person singular', back: '-s  ·  you' },
    { id: 'g-end3s', front: 'Personal ending: 3rd person singular', back: '-t  ·  he, she, it' },
    { id: 'g-end1p', front: 'Personal ending: 1st person plural', back: '-mus  ·  we' },
    { id: 'g-end2p', front: 'Personal ending: 2nd person plural', back: '-tis  ·  you (pl.)' },
    { id: 'g-end3p', front: 'Personal ending: 3rd person plural', back: '-nt  ·  they' },
    { id: 'g-amo', front: 'Conjugate amō in the present', back: 'amō, amās, amat, amāmus, amātis, amant' },
    { id: 'g-short', front: 'Why amat and amant, but amās?', back: 'A long vowel shortens before final -t and -nt (also -m, -r).' },
    { id: 'g-stem', front: 'How do you find the present stem of a 1st-conjugation verb?', back: 'Drop -re from the infinitive: amāre → amā-' },
    { id: 'g-d1-sg', front: 'First declension, singular endings (N G D A Ab V)', back: '-a, -ae, -ae, -am, -ā, -a' },
    { id: 'g-d1-pl', front: 'First declension, plural endings (N G D A Ab V)', back: '-ae, -ārum, -īs, -ās, -īs, -ae' },
    { id: 'g-gen', front: 'Main use of the genitive', back: 'Possession: “of”.  rosa puellae, the girl’s rose' },
    { id: 'g-dat', front: 'Main use of the dative', back: 'Indirect object: “to, for”' },
    { id: 'g-acc', front: 'Main use of the accusative', back: 'Direct object' },
    { id: 'g-abl', front: 'Ablative: typical English equivalents', back: 'by, with, from, in; often after a preposition' },
    { id: 'g-ae', front: 'puellae: which cases?', back: 'Gen. sg., dat. sg., nom. pl., voc. pl.' },
    { id: 'g-is', front: 'puellīs: which cases?', back: 'Dat. pl. and abl. pl.' },
    { id: 'g-gender', front: 'Gender of first-declension nouns, and the main exceptions', back: 'Feminine; but poēta, nauta, agricola are masculine' },
    { id: 'g-gendict', front: 'Why does a dictionary give the genitive singular of a noun?', back: 'It identifies the declension and gives the base for the other endings.' },
    { id: 'g-order', front: 'Neutral Latin word order', back: 'Subject, object, verb: Poēta rosam laudat.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">laudant</span> means:', options: ['they praise', 'we praise', 'he praises', 'you (pl.) praise'], answer: 0, explain: '-nt is the 3rd person plural ending.' },
    { id: 'e2', type: 'mc', prompt: 'In <span class="la">Poēta puellam laudat</span>, what case is <span class="la">puellam</span>?', options: ['nominative', 'genitive', 'accusative', 'ablative'], answer: 2, explain: '-am is the accusative singular: the girl is the direct object.' },
    { id: 'e3', type: 'mc', prompt: 'Which form is genitive plural?', options: ['puellīs', 'puellārum', 'puellās', 'puellae'], answer: 1, explain: '-ārum, “of the girls”.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">fēminīs</span> can be:', options: ['dative or ablative plural', 'genitive singular', 'nominative plural', 'accusative plural'], answer: 0, explain: '-īs serves both the dative and the ablative plural.' },
    { id: 'e5', type: 'mc', prompt: 'What gender is <span class="la">nauta</span>?', options: ['feminine', 'masculine', 'neuter', 'either'], answer: 1, explain: 'Nouns for men’s occupations in the first declension are masculine.' },
    { id: 'e6', type: 'gap', prompt: '<span class="la">Fēmin___ rosam amat.</span>', hint: 'the woman: subject', answers: ['a'], full: 'Fēmina rosam amat.', explain: 'Subject, so nominative singular -a.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Agricol___ labōrant.</span>', hint: 'the farmers: subject', answers: ['ae'], full: 'Agricolae labōrant.', explain: 'The plural verb needs a plural subject: nominative plural -ae.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Poētae vīt___ laudant.</span>', hint: 'life: object', answers: ['am'], full: 'Poētae vītam laudant.', explain: 'Direct object, accusative singular -am.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Puellae aquam serv___.</span>', hint: 'they keep', answers: ['ant'], full: 'Puellae aquam servant.', explain: 'Stem servā- + -nt, with the ā shortened: servant.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Fāmam fēmin___ laudāmus.</span>', hint: 'of the woman', answers: ['ae'], full: 'Fāmam fēminae laudāmus.', explain: 'Genitive singular -ae: “we praise the woman’s reputation”.' },
    { id: 'e11', type: 'paradigm', prompt: 'Conjugate <span class="la">vocō, vocāre</span> in the present.', headers: ['Singular', 'Plural'], rows: [
      { label: '1st', answers: ['vocō', 'vocāmus'] },
      { label: '2nd', answers: ['vocās', 'vocātis'] },
      { label: '3rd', answers: ['vocat', 'vocant'] }
    ] },
    { id: 'e12', type: 'paradigm', prompt: 'Decline <span class="la">fortūna, fortūnae</span> f.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['fortūna', 'fortūnae'] },
      { label: 'Gen.', answers: ['fortūnae', 'fortūnārum'] },
      { label: 'Dat.', answers: ['fortūnae', 'fortūnīs'] },
      { label: 'Acc.', answers: ['fortūnam', 'fortūnās'] },
      { label: 'Abl.', answers: ['fortūnā', 'fortūnīs'] },
      { label: 'Voc.', answers: ['fortūna', 'fortūnae'] }
    ] },
    { id: 'e13', type: 'match', prompt: 'Match each form to its meaning.', pairs: [
      ['ambulat', 'he walks'], ['nāvigant', 'they sail'], ['cōgitās', 'you think'], ['errāmus', 'we wander'], ['laudātis', 'you (pl.) praise']
    ] },
    { id: 'e14', type: 'order', prompt: 'Put the English translation in order.', source: 'Nautae īnsulam patriae amant.', tokens: ['The sailors', 'love', 'the island', 'of their homeland'], explain: 'nautae (nom. pl.) is the subject; īnsulam (acc.) the object; patriae (gen.) “of the homeland”.' },
    { id: 'e15', type: 'translate', dir: 'la-en', source: 'Poēta fēminam laudat.', model: 'The poet praises the woman.', accepted: ['poet praises woman', 'poet is praising woman', 'poet does praise woman'] },
    { id: 'e16', type: 'translate', dir: 'la-en', source: 'Nautae saepe errant.', model: 'The sailors often wander.', accepted: ['sailors often wander', 'sailors wander often', 'sailors often go astray', 'sailors often err', 'sailors are often wandering', 'sailors often are wrong', 'sailors are often wrong', 'sailors are often mistaken'] },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Sapientia vītam servat.', model: 'Wisdom preserves life.', accepted: ['wisdom preserves life', 'wisdom saves life', 'wisdom keeps life', 'wisdom preserves the life', 'wisdom saves the life'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Rosās puellārum nōn amāmus.', model: 'We do not love the girls’ roses.', accepted: ['we do not love roses of girls', 'we do not love girls roses', 'we do not like roses of girls', 'we do not like girls roses', 'we are not loving girls roses'] },
    { id: 'e19', type: 'translate', dir: 'en-la', source: 'The farmers are working.', model: 'Agricolae labōrant.', accepted: ['agricolae labōrant'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'You (pl.) call the sailor.', model: 'Nautam vocātis.', accepted: ['nautam vocātis'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'The poets live on the island.', model: 'Poētae in īnsulā habitant.', accepted: ['poētae in īnsulā habitant'] }
  ],

  reading: {
    title: 'Poēta et nauta',
    note: 'Original passage. Tap any word for its form and meaning.',
    text: 'Poēta in īnsulā habitat et vītam īnsulae amat. Nauta nōn in īnsulā habitat; saepe nāvigat et errat. Poēta nautam vocat: “Cūr semper nāvigās, nauta? Nōnne patriam amās?” Nauta respondet: “Patriam amō, sed aquam et īnsulās quoque amō.” Poēta cōgitat et nautam laudat. Tum nauta poētam laudat: “Tū, poēta, sapientiam servās; ego aquam et fortūnam amō.”',
    translation: 'The poet lives on the island and loves the life of the island. The sailor does not live on the island; he often sails and wanders. The poet calls the sailor: “Why are you always sailing, sailor? Don’t you love your homeland?” The sailor replies: “I love my homeland, but I love the water and the islands too.” The poet thinks, and praises the sailor. Then the sailor praises the poet: “You, poet, preserve wisdom; I love the water and fortune.”',
    glosses: {
      'poēta': 'nom. (or voc.) sg. of poēta, -ae m. poet',
      'poētam': 'acc. sg. of poēta, -ae m. poet',
      'in': 'preposition + abl.: in, on',
      'īnsulā': 'abl. sg. of īnsula, -ae f. island',
      'īnsulae': 'gen. sg. of īnsula: of the island',
      'īnsulās': 'acc. pl. of īnsula: islands',
      'habitat': '3rd sg. pres. of habitō, -āre: lives',
      'et': 'and',
      'vītam': 'acc. sg. of vīta, -ae f. life',
      'amat': '3rd sg. pres. of amō, -āre: loves',
      'amās': '2nd sg. pres. of amō: you love',
      'amō': '1st sg. pres. of amō: I love',
      'nauta': 'nom. or voc. sg. of nauta, -ae m. sailor',
      'nautam': 'acc. sg. of nauta: sailor',
      'nōn': 'not',
      'saepe': 'often',
      'nāvigat': '3rd sg. pres. of nāvigō: sails',
      'nāvigās': '2nd sg. pres. of nāvigō: you sail',
      'errat': '3rd sg. pres. of errō: wanders',
      'vocat': '3rd sg. pres. of vocō: calls',
      'cūr': 'why (new word)',
      'semper': 'always (new word)',
      'nōnne': 'introduces a question expecting the answer “yes” (new word)',
      'patriam': 'acc. sg. of patria, -ae f. homeland',
      'respondet': '3rd sg. pres. of respondeō, -ēre (2nd conj., next lecture): replies',
      'sed': 'but',
      'aquam': 'acc. sg. of aqua, -ae f. water',
      'quoque': 'also, too; follows the word it emphasises (new word)',
      'cōgitat': '3rd sg. pres. of cōgitō: thinks',
      'laudat': '3rd sg. pres. of laudō: praises',
      'tum': 'then (new word)',
      'tū': 'you (sg.), nominative (new word)',
      'sapientiam': 'acc. sg. of sapientia, -ae f. wisdom',
      'servās': '2nd sg. pres. of servō: you preserve',
      'ego': 'I, nominative (new word)',
      'fortūnam': 'acc. sg. of fortūna, -ae f. fortune'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Where does the poet live?', options: ['on the island', 'on the road', 'on the sea', 'in the homeland'], answer: 0, explain: 'in īnsulā habitat.' },
      { id: 'r2', type: 'mc', prompt: 'Besides his homeland, what does the sailor love?', options: ['the water and the islands', 'the poet and wisdom', 'money', 'the roads'], answer: 0, explain: 'aquam et īnsulās quoque amō.' },
      { id: 'r3', type: 'mc', prompt: 'In <span class="la">Cūr semper nāvigās, nauta?</span> the word <span class="la">nauta</span> is:', options: ['vocative: the sailor is being addressed', 'nominative: subject of nāvigās', 'genitive', 'ablative'], answer: 0, explain: 'nāvigās already contains its subject (“you”). nauta names the person spoken to.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Which form means “we call”?', options: ['vocāmus', 'vocātis', 'vocant', 'vocās'], answer: 0, explain: '-mus: 1st person plural.' },
      { id: 't2', type: 'gap', prompt: '<span class="la">Poētae aqu___ amant.</span>', hint: 'water: object', answers: ['am'], full: 'Poētae aquam amant.', explain: 'Accusative singular -am.' },
      { id: 't3', type: 'mc', prompt: 'In <span class="la">Fāma nautae errat</span>, <span class="la">nautae</span> is best taken as:', options: ['genitive singular', 'nominative plural', 'accusative singular', 'ablative singular'], answer: 0, explain: 'errat is singular, so the subject is fāma; nautae cannot be a plural subject. “The sailor’s reputation wanders”, i.e. is spreading. Dative singular is formally possible but makes little sense.' },
      { id: 't4', type: 'translate', dir: 'la-en', source: 'Agricola terram amat.', model: 'The farmer loves the land.', accepted: ['farmer loves land', 'farmer loves earth', 'farmer likes land', 'farmer loves soil', 'farmer is loving land'] },
      { id: 't5', type: 'translate', dir: 'en-la', source: 'We praise the poets.', model: 'Poētās laudāmus.', accepted: ['poētās laudāmus'] },
      { id: 't6', type: 'mc', prompt: 'Why <span class="la">amat</span> and not <span class="la">*amāt</span>?', options: ['A long vowel shortens before final -t', 'amō is irregular', 'ā appears only in the infinitive', '-at is a separate conjugation'], answer: 0, explain: 'The same rule gives amant.' },
      { id: 't7', type: 'gap', prompt: '<span class="la">Nautae cōgit___.</span>', hint: 'they think', answers: ['ant'], full: 'Nautae cōgitant.', explain: '3rd person plural -nt, with the stem vowel shortened.' },
      { id: 't8', type: 'mc', prompt: 'Which noun is masculine?', options: ['agricola', 'fēmina', 'vīta', 'sapientia'], answer: 0, explain: 'agricola, like poēta and nauta, is masculine.' }
    ]
  },

  reference: [
    { title: 'Present of amō (1st conjugation)', headers: ['', 'Singular', 'Plural'], rows: [['1st', 'amō', 'amāmus'], ['2nd', 'amās', 'amātis'], ['3rd', 'amat', 'amant']] },
    { title: 'First declension: puella, -ae f.', headers: ['', 'Singular', 'Plural'], rows: [['Nom.', 'puella', 'puellae'], ['Gen.', 'puellae', 'puellārum'], ['Dat.', 'puellae', 'puellīs'], ['Acc.', 'puellam', 'puellās'], ['Abl.', 'puellā', 'puellīs'], ['Voc.', 'puella', 'puellae']] }
  ]
});
