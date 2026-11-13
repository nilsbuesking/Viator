/*
 * Latin — Lecture V: future and imperfect of the first and second conjugations; sum;
 * adjectives in -er. Content file only. Original material in the conventional order of a
 * first Latin course. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-05',
  number: 5,
  title: 'Ōlim et crās',
  subtitle: 'The imperfect and future of the first and second conjugations; sum; adjectives in -er',
  minutes: 60,

  intro: `
    <p>So far every Latin verb in this course has been in the present. This lecture adds two tenses: the <strong>imperfect</strong>, for what was going on or used to happen (<span class="la">amābam</span>, “I was loving, I used to love”), and the <strong>future</strong> (<span class="la">amābō</span>, “I shall love”). For the first two conjugations both are formed with a simple infix, <span class="la">-bā-</span> and <span class="la">-bi-</span>, between the stem and the personal endings you know.</p>
    <p>German speakers have an advantage with the imperfect and a habit to overcome with the future. The Latin imperfect overlaps with the German Präteritum (<em>ich liebte, ich wohnte</em>) but is narrower: it is the tense of background, habit and description, and Latin has another past tense, the perfect, for single completed events (Lecture XIII). The future, on the other hand, is a single word in Latin, where German usually needs <em>werden</em> or simply uses the present (<em>morgen fahre ich</em>). Latin is strict: what will happen goes in the future tense.</p>
    <p>The lecture also completes the second declension with adjectives like <span class="la">līber, lībera, līberum</span> “free” and <span class="la">pulcher, pulchra, pulchrum</span> “beautiful”, and the possessives <span class="la">noster</span> and <span class="la">vester</span>.</p>
    <p>By the end you should be able to form and translate the imperfect and future of any first- or second-conjugation verb and of <span class="la">sum</span>, decline adjectives in <span class="la">-er</span>, and read a short narrative that moves between past, present and future.</p>
  `,

  background: [
    {
      title: 'Free men and children: līber and līberī',
      html: `
        <p>Latin has one word for “free” and, in the plural, the usual word for “children”: <span class="la">līber</span>, “free”, and <span class="la">līberī</span>, “children”. The usual explanation is that the <span class="la">līberī</span> of a household were its free members, the children of the head of the family, as opposed to the slaves who also belonged to the <span class="la">familia</span> (Lecture III). The connection is old: the same root gives Greek <em>eleútheros</em>, “free”, and Old High German <em>liut</em>, “people” (German <em>Leute</em>). Its original sense seems to have been “belonging to the people”, the free community, though the details of the reconstruction are debated.</p>
        <p>Freedom could be granted. A Roman owner could free a slave by a formal act (<span class="la">manūmissiō</span>, “sending from the hand”), and the freed person became a <span class="la">lībertus</span> or <span class="la">līberta</span>, a Roman citizen with some legal restrictions, still bound by duties to the former owner. Freedmen were a large and visible group in Roman towns. Many of the tombs and inscriptions of Pompeii and Rome were set up by them, and the felt cap (<span class="la">pilleus</span>) given at manumission became a symbol of liberty that survived into the French and American revolutions.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mariemont_manumission_relief_01.JPG/960px-Mariemont_manumission_relief_01.JPG" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mariemont_manumission_relief_01.JPG/500px-Mariemont_manumission_relief_01.JPG|https://upload.wikimedia.org/wikipedia/commons/1/16/Mariemont_manumission_relief_01.JPG" alt="Roman stone relief with standing figures, two of them wearing caps"><figcaption>A Roman relief usually interpreted as a scene of manumission, the freeing of slaves (Musée royal de Mariemont, Belgium). The freed men wear the <span class="la">pilleus</span>, the cap of liberty. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Mariemont_manumission_relief_01.JPG" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Books and tablets',
      html: `
        <p>Do not confuse <span class="la">līber</span> “free” (long <span class="la">ī</span>) with <span class="la">liber, librī</span> “book” (short <span class="la">i</span>). The book word originally meant the inner bark of a tree, an early writing surface; it survives in English <em>library</em> and French <em>livre</em>.</p>
        <p>A Roman <span class="la">liber</span> was a roll of papyrus, unwound with one hand and rolled up with the other, holding about one book of a long work: hence the “books” of Virgil’s <em>Aeneid</em> or Caesar’s <em>Gallic War</em>. For everyday writing Romans used wax tablets (<span class="la">tabulae</span>) and a pointed stylus, whose other end was flat for smoothing the wax. The bound book with pages, the <span class="la">cōdex</span>, spread only from the 1st and 2nd centuries AD, and its success owes much to the Christians, who preferred it for their scriptures.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/The_so-called_Sappho_portrait,_Pompeii_(AD_45-79).jpg/960px-The_so-called_Sappho_portrait,_Pompeii_(AD_45-79).jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/The_so-called_Sappho_portrait,_Pompeii_(AD_45-79).jpg/500px-The_so-called_Sappho_portrait,_Pompeii_(AD_45-79).jpg|https://upload.wikimedia.org/wikipedia/commons/c/c2/The_so-called_Sappho_portrait,_Pompeii_(AD_45-79).jpg" alt="Wall painting of a young woman holding a stylus to her lips and a set of wax tablets"><figcaption>A young woman with a stylus and wax tablets, a wall painting from Pompeii, before AD 79 (Naples, National Archaeological Museum). It is traditionally called “Sappho”, but it is probably a portrait of an unknown Pompeian woman. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:The_so-called_Sappho_portrait,_Pompeii_(AD_45-79).jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Where the tense signs come from',
      html: `
        <p>The imperfect sign <span class="la">-bā-</span> and the future sign <span class="la">-b-</span> (<span class="la">-bō, -bis, -bit</span>) look like suffixes, but most comparative linguists derive them from forms of the Indo-European root <em>*bheu-</em>, “be, become”: the same root as <span class="la">fuī</span> and German <em>bin</em> (Lecture IV). <span class="la">amābam</span> would then once have meant something like “I was in loving”, and <span class="la">amābō</span> “I shall be in loving”. Other Indo-European languages built their futures differently, and German, like English, never developed a one-word future at all.</p>
        <p>This history matters for one practical reason: the <span class="la">-b-</span> future belongs only to the first and second conjugations (and to <span class="la">eō</span>, “go”). The third and fourth conjugations form their future in quite another way (<span class="la">regam, regēs, reget</span>), as Lecture IX will show. Do not generalise <span class="la">-bō</span> yet.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Forsan et haec ōlim meminisse iuvābit.</p>
    <p>“Perhaps one day it will be a pleasure to remember even these things.” Virgil, <em>Aeneid</em> 1.203. Aeneas and his men have been shipwrecked on the coast of Africa after a storm; he hides his own fear and encourages them.</p>
    <p><span class="la">iuvābit</span> is the future of <span class="la">iuvō</span>, “help, please”, which you met in Lecture IV: “it will please”. <span class="la">ōlim</span> can point to the past (“once upon a time”) or, as here, to the future (“one day”). <span class="la">meminisse</span>, “to remember”, is a perfect infinitive with a present meaning, an oddity of the verb <span class="la">meminī</span>. The line has been used as a motto by soldiers, sailors and schoolchildren ever since.</p>
  `,

  pronunciation: `
    <h3>The long vowel before -bam and -bō</h3>
    <p>The stem vowel is long in every form: <span class="la">amā-bam, amā-bō, monē-bam, monē-bō</span>. Since a long vowel in the second-last syllable takes the stress, the imperfect and future are stressed on that vowel: <span class="la">a-MĀ-bam</span>, <span class="la">a-MĀ-bō</span>, but <span class="la">a-mā-BĀ-mus</span>, <span class="la">a-MĀ-bi-mus</span> (short <span class="la">i</span>). The <span class="la">ā</span> of <span class="la">-bā-</span> shortens before final <span class="la">-m, -t, -nt</span>: <span class="la">amābam, amābat, amābant</span>, but <span class="la">amābāmus</span>.</p>
    <h3>līber and liber</h3>
    <p>Length distinguishes the two words, and only length: <span class="la">LĪ-ber</span> “free” with a long <span class="la">ī</span> as in German <em>Liebe</em>, <span class="la">LI-ber</span> “book” with a short one as in <em>Lippe</em>.</p>
    <h3>pulcher and the aspirates</h3>
    <p>The <span class="la">ch</span> of <span class="la">pulcher</span> is a <em>k</em> with a breath after it, as in German <em>kalt</em> said emphatically, never the German <em>ch</em> of <em>ich</em> or <em>ach</em>. Latin originally had no aspirated consonants; they came in with Greek words (<span class="la">philosophia</span>), and in the late Republic it became fashionable to add them to some native words. Cicero says that he himself had at first pronounced <span class="la">pulcros</span> without the <em>h</em>, but gave way to popular usage (<em>Orator</em> 160).</p>
  `,

  grammar: [
    {
      title: '1. The imperfect',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>amō</th><th>moneō</th><th>sum</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">amābam</td><td class="la">monēbam</td><td class="la">eram</td></tr>
            <tr><th>2nd sg.</th><td class="la">amābās</td><td class="la">monēbās</td><td class="la">erās</td></tr>
            <tr><th>3rd sg.</th><td class="la">amābat</td><td class="la">monēbat</td><td class="la">erat</td></tr>
            <tr><th>1st pl.</th><td class="la">amābāmus</td><td class="la">monēbāmus</td><td class="la">erāmus</td></tr>
            <tr><th>2nd pl.</th><td class="la">amābātis</td><td class="la">monēbātis</td><td class="la">erātis</td></tr>
            <tr><th>3rd pl.</th><td class="la">amābant</td><td class="la">monēbant</td><td class="la">erant</td></tr>
          </tbody>
        </table></div>
        <p>Form: present stem + <span class="la">-bā-</span> + personal endings, with <span class="la">-m</span> in the first person singular. <span class="la">sum</span> has its own forms, but the endings are the same: <span class="la">er-a-m</span>.</p>
        <h3>Meaning</h3>
        <p>The imperfect presents past action as going on, unfinished, or repeated:</p>
        <ul>
          <li>in progress: <span class="la">Lūcius nāvigābat</span>, “Lucius was sailing”;</li>
          <li>habitual: <span class="la">saepe nāvigābat</span>, “he used to sail often”;</li>
          <li>attempted or begun: <span class="la">puellam vocābat</span> can mean “he tried to call the girl”.</li>
        </ul>
        <p>German uses the Präteritum for all these and for single events as well. When you translate into Latin, ask whether the action is a background or a repeated state (imperfect) or a single completed event (perfect, from Lecture XIII). English “was …-ing” and “used to” are good guides to the imperfect.</p>
      `
    },
    {
      title: '2. The future',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>amō</th><th>moneō</th><th>sum</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">amābō</td><td class="la">monēbō</td><td class="la">erō</td></tr>
            <tr><th>2nd sg.</th><td class="la">amābis</td><td class="la">monēbis</td><td class="la">eris</td></tr>
            <tr><th>3rd sg.</th><td class="la">amābit</td><td class="la">monēbit</td><td class="la">erit</td></tr>
            <tr><th>1st pl.</th><td class="la">amābimus</td><td class="la">monēbimus</td><td class="la">erimus</td></tr>
            <tr><th>2nd pl.</th><td class="la">amābitis</td><td class="la">monēbitis</td><td class="la">eritis</td></tr>
            <tr><th>3rd pl.</th><td class="la">amābunt</td><td class="la">monēbunt</td><td class="la">erunt</td></tr>
          </tbody>
        </table></div>
        <p>The endings <span class="la">-bō, -bis, -bit, -bimus, -bitis, -bunt</span> follow the pattern of <span class="la">erō, eris, erit</span>: a vowel <span class="la">o</span> or <span class="la">u</span> in the first singular and third plural, <span class="la">i</span> elsewhere. It helps to learn the future of <span class="la">sum</span> first and then add <span class="la">amā-b-</span> or <span class="la">monē-b-</span>.</p>
        <p>Latin uses the future wherever the action is future, also in subordinate clauses where German and English use the present: <span class="la">sī cēnam parābitis, manēbō</span>, “if you prepare (lit. will prepare) dinner, I shall stay”. German speakers tend to write the present here; Latin authors do not.</p>
      `
    },
    {
      title: '3. Recognising the tenses',
      html: `
        <p>Three letters do most of the work:</p>
        <ul>
          <li><span class="la">-ba-</span> (with long or short <span class="la">a</span>): imperfect. <span class="la">amābat, monēbant</span>.</li>
          <li><span class="la">-bi-, -bō, -bu-</span>: future. <span class="la">amābit, monēbō, vocābunt</span>.</li>
          <li><span class="la">er-</span> + <span class="la">a</span>: imperfect of <span class="la">sum</span>; <span class="la">er-</span> + <span class="la">ō, i, u</span>: future. <span class="la">erat</span> “was”, <span class="la">erit</span> “will be”.</li>
        </ul>
        <p>Beware of <span class="la">bibit</span> (“drinks”) and <span class="la">dēbet</span> (“ought”), where the <span class="la">b</span> belongs to the stem. Always find the stem first, from the vocabulary entry.</p>
      `
    },
    {
      title: '4. Adjectives in -er',
      html: `
        <p>Some second-declension masculines end in <span class="la">-er</span> in the nominative singular, like the nouns <span class="la">puer</span> and <span class="la">ager</span> in Lecture III. Adjectives do the same, and again there are two kinds:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>m.</th><th>f.</th><th>n.</th></tr></thead>
          <tbody>
            <tr><th>keep the e</th><td class="la">līber</td><td class="la">lībera</td><td class="la">līberum</td></tr>
            <tr><th>drop the e</th><td class="la">pulcher</td><td class="la">pulchra</td><td class="la">pulchrum</td></tr>
          </tbody>
        </table></div>
        <p>Only the masculine nominative (and vocative) singular is irregular; all other forms follow <span class="la">bonus, -a, -um</span> on the stem shown by the feminine: <span class="la">lībera</span> → stem <span class="la">līber-</span> (<span class="la">līberī, līberō …</span>); <span class="la">pulchra</span> → stem <span class="la">pulchr-</span> (<span class="la">pulchrī, pulchrō …</span>). That is why the dictionary gives all three forms: the feminine tells you the stem.</p>
        <p>Keep the e: <span class="la">līber, miser, asper, tener</span>. Drop the e: <span class="la">pulcher, noster, vester, aeger, sacer</span>, and most others.</p>
      `
    },
    {
      title: '5. noster and vester',
      html: `
        <p>The possessives for “our” and “your” (plural) are adjectives in <span class="la">-er</span> that drop the e: <span class="la">noster, nostra, nostrum</span>; <span class="la">vester, vestra, vestrum</span>. Like <span class="la">meus</span> and <span class="la">tuus</span> they agree with the thing possessed, not with the owner: <span class="la">patria nostra</span>, <span class="la">agrī vestrī</span>.</p>
        <p>So Latin now has a possessive for each person except the third: <span class="la">meus, tuus, noster, vester</span>. For “his, her, their” it uses other words (<span class="la">suus</span> and the genitive <span class="la">eius</span>), which have their own rules and come in Lecture XIV. German <em>unser, euer</em> are built in a similar way from the pronouns <em>uns, euch</em>.</p>
      `
    },
    {
      title: '6. Words for time',
      html: `
        <p>Adverbs of time often signal the tense:</p>
        <ul>
          <li>past: <span class="la">herī</span> (yesterday; German <em>gestern</em> is a cognate), <span class="la">ōlim</span> (once, formerly), <span class="la">diū</span> (for a long time), <span class="la">tum</span> (then)</li>
          <li>present: <span class="la">nunc, hodiē, iam</span> (now, already)</li>
          <li>future: <span class="la">crās</span> (tomorrow), <span class="la">mox</span> (soon), <span class="la">ōlim</span> (one day), <span class="la">posteā</span> (afterwards)</li>
        </ul>
        <p><span class="la">ōlim</span> points either way, as in the Virgil line above. The tense of the verb decides.</p>
      `
    }
  ],

  vocab: [
    { id: 'liber-book', head: 'liber', la: 'liber, librī', g: 'm', pos: 'noun, 2nd decl.', en: 'book', stress: 'LI-ber', deriv: 'library, libretto', note: 'Short i. Originally the inner bark of a tree.' },
    { id: 'liberi', head: 'līberī', la: 'līberī, līberōrum', g: 'm', pos: 'noun, 2nd decl., plural', en: 'children', stress: 'LĪ-be-rī', note: 'The free members of a household (see background).' },
    { id: 'culpa', head: 'culpa', la: 'culpa, culpae', g: 'f', pos: 'noun, 1st decl.', en: 'fault, blame', stress: 'CUL-pa', deriv: 'culpable, culprit; mea culpa' },
    { id: 'cena', head: 'cēna', la: 'cēna, cēnae', g: 'f', pos: 'noun, 1st decl.', en: 'dinner', stress: 'CĒ-na', note: 'The main meal of the day, eaten in the late afternoon.' },
    { id: 'gloria', head: 'glōria', la: 'glōria, glōriae', g: 'f', pos: 'noun, 1st decl.', en: 'glory, fame', stress: 'GLŌ-ri-a', deriv: 'glory, glorious' },
    { id: 'fōrma', head: 'fōrma', la: 'fōrma, fōrmae', g: 'f', pos: 'noun, 1st decl.', en: 'form, shape; beauty', stress: 'FŌR-ma', deriv: 'form, formal; Form' },
    { id: 'copia', head: 'cōpia', la: 'cōpia, cōpiae', g: 'f', pos: 'noun, 1st decl.', en: 'abundance, supply; (pl.) troops, forces', stress: 'CŌ-pi-a', deriv: 'copious, copy' },
    { id: 'vitium', head: 'vitium', la: 'vitium, vitiī', g: 'n', pos: 'noun, 2nd decl.', en: 'fault, vice, crime', stress: 'VI-ti-um', deriv: 'vice, vitiate' },

    { id: 'liber-adj', head: 'līber', la: 'līber, lībera, līberum', pos: 'adjective', en: 'free', stress: 'LĪ-ber', deriv: 'liberal, liberty; liberal', note: 'Keeps the e. Long ī: distinguish liber, book.' },
    { id: 'pulcher', head: 'pulcher', la: 'pulcher, pulchra, pulchrum', pos: 'adjective', en: 'beautiful, handsome; fine', stress: 'PUL-cher', deriv: 'pulchritude', note: 'Drops the e. ch = aspirated k.' },
    { id: 'miser', head: 'miser', la: 'miser, misera, miserum', pos: 'adjective', en: 'wretched, miserable, poor', stress: 'MI-ser', deriv: 'miser, misery', note: 'Keeps the e.' },
    { id: 'aeger', head: 'aeger', la: 'aeger, aegra, aegrum', pos: 'adjective', en: 'sick, ill', stress: 'AE-ger', note: 'Drops the e.' },
    { id: 'noster', head: 'noster', la: 'noster, nostra, nostrum', pos: 'adjective (possessive)', en: 'our, ours', stress: 'NOS-ter', deriv: 'nostrum (“our own remedy”)' },
    { id: 'vester', head: 'vester', la: 'vester, vestra, vestrum', pos: 'adjective (possessive)', en: 'your, yours (pl.)', stress: 'VES-ter' },
    { id: 'sanus', head: 'sānus', la: 'sānus, sāna, sānum', pos: 'adjective', en: 'sound, healthy; sane', stress: 'SĀ-nus', deriv: 'sane, sanitary; Sanatorium', note: 'mēns sāna in corpore sānō (Juvenal, later).' },
    { id: 'avarus', head: 'avārus', la: 'avārus, avāra, avārum', pos: 'adjective', en: 'greedy, avaricious', stress: 'a-VĀ-rus', deriv: 'avarice' },
    { id: 'graecus', head: 'Graecus', la: 'Graecus, Graeca, Graecum', pos: 'adjective', en: 'Greek; (as noun) a Greek', stress: 'GRAE-cus' },
    { id: 'ceteri', head: 'cēterī', la: 'cēterī, cēterae, cētera', pos: 'adjective, plural', en: 'the rest, the others', stress: 'CĒ-te-rī', note: 'et cētera: and the other things.' },

    { id: 'ceno', head: 'cēnō', la: 'cēnō, cēnāre, cēnāvī, cēnātum', pos: 'verb, 1st conj.', en: 'dine, have dinner', stress: 'CĒ-nō · cē-NĀ-re' },
    { id: 'clamo', head: 'clāmō', la: 'clāmō, clāmāre, clāmāvī, clāmātum', pos: 'verb, 1st conj.', en: 'shout, cry out', stress: 'CLĀ-mō · clā-MĀ-re', deriv: 'claim, exclaim' },
    { id: 'delecto', head: 'dēlectō', la: 'dēlectō, dēlectāre, dēlectāvī, dēlectātum', pos: 'verb, 1st conj.', en: 'delight, charm', stress: 'dē-LEC-tō · dē-lec-TĀ-re', deriv: 'delight, delectable' },
    { id: 'exspecto', head: 'exspectō', la: 'exspectō, exspectāre, exspectāvī, exspectātum', pos: 'verb, 1st conj.', en: 'wait for, expect', stress: 'ex-SPEC-tō · ex-spec-TĀ-re', deriv: 'expect' },
    { id: 'paro', head: 'parō', la: 'parō, parāre, parāvī, parātum', pos: 'verb, 1st conj.', en: 'prepare, get ready', stress: 'PA-rō · pa-RĀ-re', deriv: 'prepare; parat (Lecture IV)' },
    { id: 'supero', head: 'superō', la: 'superō, superāre, superāvī, superātum', pos: 'verb, 1st conj.', en: 'overcome, surpass, defeat', stress: 'SU-pe-rō · su-pe-RĀ-re', deriv: 'insuperable' },
    { id: 'sedeo', head: 'sedeō', la: 'sedeō, sedēre, sēdī, sessum', pos: 'verb, 2nd conj.', en: 'sit', stress: 'SE-de-ō · se-DĒ-re', deriv: 'sedentary, session', note: 'German sitzen is a cognate.' },
    { id: 'respondeo', head: 'respondeō', la: 'respondeō, respondēre, respondī, respōnsum', pos: 'verb, 2nd conj.', en: 'answer, reply', stress: 're-SPON-de-ō · re-spon-DĒ-re', deriv: 'respond, response' },

    { id: 'cras', head: 'crās', la: 'crās', pos: 'adverb', en: 'tomorrow', stress: 'CRĀS', deriv: 'procrastinate' },
    { id: 'heri', head: 'herī', la: 'herī', pos: 'adverb', en: 'yesterday', stress: 'HE-rī', note: 'German gestern, English yester-day are cognates.' },
    { id: 'olim', head: 'ōlim', la: 'ōlim', pos: 'adverb', en: 'once, formerly; one day (in the future)', stress: 'Ō-lim' },
    { id: 'mox', head: 'mox', la: 'mox', pos: 'adverb', en: 'soon', stress: 'MOX' },
    { id: 'diu', head: 'diū', la: 'diū', pos: 'adverb', en: 'for a long time', stress: 'DI-ū' },
    { id: 'itaque', head: 'itaque', la: 'itaque', pos: 'adverb', en: 'and so, therefore', stress: 'I-ta-que', note: 'Usually first in its clause (contrast igitur).' }
  ],

  grammarCards: [
    { id: 'g5-impf', front: 'Imperfect endings (1st and 2nd conj.)', back: '-bam, -bās, -bat, -bāmus, -bātis, -bant' },
    { id: 'g5-fut', front: 'Future endings (1st and 2nd conj.)', back: '-bō, -bis, -bit, -bimus, -bitis, -bunt' },
    { id: 'g5-sum-impf', front: 'Imperfect of sum', back: 'eram, erās, erat, erāmus, erātis, erant' },
    { id: 'g5-sum-fut', front: 'Future of sum', back: 'erō, eris, erit, erimus, eritis, erunt' },
    { id: 'g5-impf-use', front: 'Three uses of the imperfect', back: 'action in progress, habitual action, attempted action' },
    { id: 'g5-only12', front: 'Which conjugations form the future in -bō?', back: 'Only the 1st and 2nd (and eō). The 3rd and 4th use -am, -ēs, -et.' },
    { id: 'g5-sifut', front: 'Sī cēnam parābitis, manēbō: why parābitis?', back: 'Latin uses the future in a future condition, where German and English use the present.' },
    { id: 'g5-liber', front: 'līber, lībera, līberum', back: 'free (keeps the e)' },
    { id: 'g5-pulcher', front: 'pulcher, pulchra, pulchrum', back: 'beautiful (drops the e)' },
    { id: 'g5-stem', front: 'How do you find the stem of an -er adjective?', back: 'From the feminine: lībera → līber-; pulchra → pulchr-' },
    { id: 'g5-noster', front: 'noster, vester: declined like …', back: 'pulcher (drop the e): nostra, nostrum; vestra, vestrum' },
    { id: 'g5-liberbook', front: 'līber vs liber', back: 'līber (long ī): free; liber (short i): book' },
    { id: 'g5-liberi', front: 'līberī, -ōrum', back: 'children (the free members of the household)' },
    { id: 'g5-stress', front: 'Stress of amābāmus and amābimus', back: 'a-mā-BĀ-mus (long ā); a-MĀ-bi-mus (short i)' },
    { id: 'g5-olim', front: 'ōlim', back: 'once (past) or one day (future): the tense decides' },
    { id: 'g5-virgil', front: 'Forsan et haec ōlim meminisse iuvābit.', back: 'Perhaps one day it will be a pleasure to remember even these things. (Virgil, Aeneid 1.203)' },
    { id: 'g5-ch', front: 'How is ch in pulcher pronounced?', back: 'Aspirated k, never German ch.' },
    { id: 'g5-bibit', front: 'bibit, dēbet: imperfect or future?', back: 'Neither: present. The b belongs to the stem.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">amābant</span> is:', options: ['imperfect, 3rd pl.: they were loving', 'future, 3rd pl.: they will love', 'present, 3rd pl.', 'imperfect, 1st sg.'], answer: 0, explain: '-ba- marks the imperfect; -nt the 3rd plural.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">monēbit</span> is:', options: ['future: he will warn', 'imperfect: he was warning', 'present: he warns', 'future: they will warn'], answer: 0, explain: '-bi- marks the future; -t the 3rd singular.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">erunt</span> means:', options: ['they will be', 'they were', 'they are', 'you will be'], answer: 0, explain: 'Future of sum.' },
    { id: 'e4', type: 'mc', prompt: 'Which form is imperfect?', options: ['vocābāmus', 'vocābimus', 'vocāmus', 'vocābunt'], answer: 0, explain: '-bā-: imperfect. vocābimus and vocābunt are future.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">liber</span> (short i) means:', options: ['book', 'free', 'children', 'freedman'], answer: 0, explain: 'līber (long ī) is “free”.' },
    { id: 'e6', type: 'mc', prompt: 'Feminine of <span class="la">pulcher</span>:', options: ['pulchra', 'pulchera', 'pulchria', 'pulchrae'], answer: 0, explain: 'pulcher drops the e.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Ōlim in Graeciā habitā___.</span>', hint: 'I used to live', answers: ['bam'], full: 'Ōlim in Graeciā habitābam.', explain: 'Imperfect, 1st singular.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Crās nāvigā___.</span>', hint: 'we shall sail', answers: ['bimus'], full: 'Crās nāvigābimus.', explain: 'Future, 1st plural.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Puerī in agrō ___.</span>', hint: 'were (sum)', answers: ['erant'], full: 'Puerī in agrō erant.', explain: 'Imperfect of sum, 3rd plural.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Patria nostr___ est lībera.</span>', hint: 'our (agreeing with patria)', answers: ['a'], full: 'Patria nostra est lībera.', explain: 'noster drops the e: nostra.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Līberī mis___ sunt.</span>', hint: 'wretched (m. pl.)', answers: ['erī'], full: 'Līberī miserī sunt.', explain: 'miser keeps the e: miserī.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Sī cēnam parā___, manēbō.</span>', hint: 'if you (pl.) prepare (future!)', answers: ['bitis'], full: 'Sī cēnam parābitis, manēbō.', explain: 'Latin uses the future in a future condition.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the imperfect and future of <span class="la">moneō</span>.', headers: ['Imperfect', 'Future'], rows: [
      { label: '1st sg.', answers: ['monēbam', 'monēbō'] },
      { label: '2nd sg.', answers: ['monēbās', 'monēbis'] },
      { label: '3rd sg.', answers: ['monēbat', 'monēbit'] },
      { label: '1st pl.', answers: ['monēbāmus', 'monēbimus'] },
      { label: '2nd pl.', answers: ['monēbātis', 'monēbitis'] },
      { label: '3rd pl.', answers: ['monēbant', 'monēbunt'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the imperfect and future of <span class="la">sum</span>.', headers: ['Imperfect', 'Future'], rows: [
      { label: '1st sg.', answers: ['eram', 'erō'] },
      { label: '2nd sg.', answers: ['erās', 'eris'] },
      { label: '3rd sg.', answers: ['erat', 'erit'] },
      { label: '1st pl.', answers: ['erāmus', 'erimus'] },
      { label: '2nd pl.', answers: ['erātis', 'eritis'] },
      { label: '3rd pl.', answers: ['erant', 'erunt'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each form to its tense.', pairs: [
      ['laudābat', 'imperfect'], ['laudābit', 'future'], ['laudat', 'present'], ['erat', 'imperfect of sum'], ['erit', 'future of sum']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Ōlim in īnsulā pulchrā habitābāmus.', tokens: ['Once', 'we used to live', 'on a beautiful', 'island'], explain: 'Imperfect of habitual action; pulchrā agrees with īnsulā (abl. f.).' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Crās līberī nostrī cēnam parābunt.', model: 'Tomorrow our children will prepare dinner.', accepted: ['tomorrow our children will prepare dinner', 'tomorrow our children will prepare the dinner', 'our children will prepare dinner tomorrow', 'tomorrow our children will get dinner ready', 'tomorrow our children will make dinner', 'our children will make dinner tomorrow'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Herī puellae in viā exspectābant.', model: 'Yesterday the girls were waiting in the street.', accepted: ['yesterday girls were waiting in street', 'yesterday girls were waiting on street', 'yesterday girls were waiting in road', 'yesterday girls waited in street', 'girls were waiting in street yesterday', 'yesterday girls were waiting on road', 'yesterday girls were waiting in way'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Librī tuī mē dēlectābant.', model: 'Your books used to delight me.', accepted: ['your books used to delight me', 'your books were delighting me', 'your books delighted me', 'your books were pleasing me', 'your books used to please me', 'your books pleased me'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'We shall be free.', model: 'Līberī erimus.', accepted: ['līberī erimus'], explain: 'Erimus is the future of sum (erō, eris, erit …). Līberī agrees with a masculine or mixed “we”; women alone would say līberae.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'The farmer used to work in the fields.', model: 'Agricola in agrīs labōrābat.', accepted: ['agricola in agrīs labōrābat'], explain: 'The imperfect (-bā-) describes repeated or continuing past action, the English “used to”; German simply uses the Präteritum (arbeitete). In agrīs: in + ablative plural.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'Our country was beautiful.', model: 'Patria nostra erat pulchra.', accepted: ['patria nostra erat pulchra', 'patria nostra pulchra erat'], explain: 'Erat is the imperfect of sum. Noster and pulcher drop the e outside the masculine nominative singular: nostra, pulchra.' },
    { id: 'e23', type: 'mc', prompt: '<span class="la">līberī</span> “children” is usually explained as:', options: ['the free members of the household', 'the books of the house', 'a Greek loanword', 'a word for slaves'], answer: 0, explain: 'As opposed to the slaves of the familia.' },
    { id: 'e24', type: 'mc', prompt: 'In <span class="la">Forsan et haec ōlim meminisse iuvābit</span>, <span class="la">ōlim</span> means:', options: ['one day (in the future)', 'once upon a time', 'never', 'already'], answer: 0, explain: 'The future iuvābit shows that ōlim looks forward.' },
    { id: 'e25', type: 'mc', prompt: 'The imperfect and future signs <span class="la">-bā-</span> and <span class="la">-b-</span> are usually derived from:', options: ['the root of fuī and German bin (*bheu-)', 'the verb habeō', 'Greek', 'the preposition ab'], answer: 0, explain: 'A widely held, though reconstructed, explanation.' }
  ],

  reading: {
    title: 'Ōlim et crās',
    note: 'Original passage: Lucius tells Marcus’s children about his voyages. Tap any word.',
    text: 'Herī Lūcius in agrīs Mārcī cēnābat, et līberī Mārcī fābulās nautae exspectābant. “Ōlim,” inquit Lūcius, “in Graeciā cum amīcīs meīs nāvigābam. Īnsulae pulchrae erant, et caelum semper serēnum. Sed nōn erāmus līberī: pecūniam nōn habēbāmus, et magister nautārum avārus erat. Saepe nautās miserōs vocābat et terrēbat.” Tum Mārcus: “Nunc autem in patriā nostrā es, et vīta tua lībera est.” Lūcius rīdet: “Vērum est, mī Mārce. Crās tamen iterum nāvigābō; pecūnia enim mea parva est.” Līberī clāmant: “Manē, Lūcī! Librōs Graecōs nōn habēmus, sed fābulās tuās amāmus!” Lūcius respondet: “Librōs nōn habeō, sed fābulās multās. Mox līberōs tuōs fābulīs dēlectābō, Mārce, sī cēnam bonam parābitis.” Itaque līberī cēnam magnam parābant, et Lūcius diū manēbat.',
    translation: 'Yesterday Lucius was dining on Marcus’s farm, and Marcus’s children were waiting for the sailor’s stories. “Once,” said Lucius, “I used to sail in Greece with my friends. The islands were beautiful, and the sky always clear. But we were not free: we had no money, and the master of the sailors was greedy. He often called the sailors wretches and terrified them.” Then Marcus: “But now you are in our country, and your life is free.” Lucius laughs: “That is true, my dear Marcus. Tomorrow, however, I shall sail again; for my money is little.” The children shout: “Stay, Lucius! We have no Greek books, but we love your stories!” Lucius replies: “I have no books, but many stories. Soon I shall delight your children with stories, Marcus, if you prepare a good dinner.” And so the children prepared a large dinner, and Lucius stayed for a long time.',
    notes: [
      { ref: 'Herī Lūcius in agrīs Mārcī cēnābat', html: 'The imperfect sets the scene: what was going on yesterday evening. German would say simply <em>aß</em>; English “was dining” matches the Latin better.' },
      { ref: 'līberī Mārcī fābulās nautae exspectābant', html: 'Two genitives: <span class="la">Mārcī</span> (Marcus’s children) and <span class="la">nautae</span> (the sailor’s stories). <span class="la">līberī</span> here means “children”, not “free”: the noun, not the adjective.' },
      { ref: '“Ōlim,” inquit Lūcius', html: '<span class="la">inquit</span>, “says, said”, is inserted into direct speech, like English “said he”. It is defective: only a few forms exist.' },
      { ref: 'cum amīcīs meīs nāvigābam', html: 'Habitual imperfect: “I used to sail”. <span class="la">cum</span> + ablative (Lecture III).' },
      { ref: 'et caelum semper serēnum', html: 'Supply <span class="la">erat</span>, as often in description. <span class="la">serēnus</span>: clear, cloudless (serene).' },
      { ref: 'Sed nōn erāmus līberī', html: 'Here <span class="la">līberī</span> is the adjective, “free”, a predicate agreeing with the subject “we” (masculine plural). The two senses of <span class="la">līberī</span> sit side by side in the story on purpose.' },
      { ref: 'Saepe nautās miserōs vocābat', html: 'A double accusative: “he called the sailors wretched (wretches)”. <span class="la">miserōs</span> agrees with <span class="la">nautās</span>, masculine because sailors are men, even though <span class="la">nauta</span> is first declension.' },
      { ref: 'Crās tamen iterum nāvigābō', html: 'Future: “I shall sail”. German would say <em>morgen fahre ich</em>, with the present; Latin uses the future.' },
      { ref: 'pecūnia enim mea parva est', html: '<span class="la">enim</span>, “for”, like <span class="la">autem</span> and <span class="la">igitur</span>, does not stand first.' },
      { ref: 'sī cēnam bonam parābitis', html: 'Future in a condition about the future, where English has the present: “if you prepare”.' },
      { ref: 'līberī cēnam magnam parābant, et Lūcius diū manēbat', html: 'The narrative returns to the past with imperfects: the preparing went on, and the staying lasted <span class="la">diū</span>, “a long time”.' }
    ],
    glosses: {
      'herī': 'yesterday', 'lūcius': 'Lucius (nom.)', 'in': 'in (+ abl.)', 'agrīs': 'abl. pl. of ager: fields, farm', 'mārcī': 'gen. of Mārcus: of Marcus', 'cēnābat': 'impf. 3rd sg. of cēnō: was dining',
      'et': 'and', 'līberī': 'children (nom. pl. of līberī); or: free (nom. pl. m. of līber)', 'fābulās': 'acc. pl. of fābula: stories', 'nautae': 'gen. sg. of nauta: of the sailor', 'exspectābant': 'impf. 3rd pl. of exspectō: were waiting for',
      'ōlim': 'once, formerly', 'inquit': 'says, said (inserted in direct speech)', 'graeciā': 'abl. of Graecia: Greece', 'cum': 'with (+ abl.)', 'amīcīs': 'abl. pl. of amīcus', 'meīs': 'abl. pl. of meus: my', 'nāvigābam': 'impf. 1st sg. of nāvigō: I used to sail',
      'īnsulae': 'nom. pl. of īnsula: islands', 'pulchrae': 'nom. pl. f. of pulcher: beautiful', 'erant': 'impf. 3rd pl. of sum: were', 'caelum': 'sky (nom.)', 'semper': 'always', 'serēnum': 'nom. sg. n. of serēnus: clear, cloudless',
      'sed': 'but', 'nōn': 'not', 'erāmus': 'impf. 1st pl. of sum: we were', 'pecūniam': 'acc. of pecūnia: money', 'habēbāmus': 'impf. 1st pl. of habeō: we had', 'magister': 'master (nom.)', 'nautārum': 'gen. pl. of nauta: of the sailors', 'avārus': 'greedy', 'erat': 'impf. 3rd sg. of sum: was',
      'saepe': 'often', 'nautās': 'acc. pl. of nauta', 'miserōs': 'acc. pl. m. of miser: wretched', 'vocābat': 'impf. 3rd sg. of vocō: called', 'terrēbat': 'impf. 3rd sg. of terreō: frightened',
      'tum': 'then', 'mārcus': 'Marcus (nom.)', 'nunc': 'now', 'autem': 'however (never first)', 'patriā': 'abl. of patria: country', 'nostrā': 'abl. f. of noster: our', 'es': 'you are', 'vīta': 'life (nom.)', 'tua': 'nom. f. of tuus: your', 'lībera': 'nom. f. of līber: free', 'est': 'is',
      'rīdet': '3rd sg. of rīdeō: laughs', 'vērum': 'true: vērum est, it is true', 'mī': 'voc. of meus: my dear', 'mārce': 'voc. of Mārcus', 'crās': 'tomorrow', 'tamen': 'however', 'iterum': 'again', 'nāvigābō': 'fut. 1st sg. of nāvigō: I shall sail',
      'pecūnia': 'money (nom.)', 'enim': 'for (never first)', 'mea': 'nom. f. of meus: my', 'parva': 'nom. f. of parvus: small, little',
      'clāmant': '3rd pl. of clāmō: shout', 'manē': 'imperative of maneō: stay!', 'lūcī': 'voc. of Lūcius', 'librōs': 'acc. pl. of liber: books', 'graecōs': 'acc. pl. m. of Graecus: Greek', 'habēmus': '1st pl. of habeō: we have', 'tuās': 'acc. pl. f. of tuus: your', 'amāmus': '1st pl. of amō: we love',
      'respondet': '3rd sg. of respondeō: replies', 'habeō': 'I have', 'multās': 'acc. pl. f. of multus: many', 'mox': 'soon', 'līberōs': 'acc. pl. of līberī: children', 'tuōs': 'acc. pl. m. of tuus: your', 'fābulīs': 'abl. pl. of fābula: with stories', 'dēlectābō': 'fut. 1st sg. of dēlectō: I shall delight',
      'sī': 'if', 'cēnam': 'acc. of cēna: dinner', 'bonam': 'acc. f. of bonus: good', 'parābitis': 'fut. 2nd pl. of parō: you (will) prepare',
      'itaque': 'and so', 'magnam': 'acc. f. of magnus: large', 'parābant': 'impf. 3rd pl. of parō: prepared', 'diū': 'for a long time', 'manēbat': 'impf. 3rd sg. of maneō: stayed'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What were the children waiting for?', options: ['The sailor’s stories', 'Dinner', 'Their father', 'Greek books'], answer: 0, explain: 'līberī Mārcī fābulās nautae exspectābant.' },
      { id: 'r2', type: 'mc', prompt: 'Why were Lucius and his friends “not free” in Greece?', options: ['They had no money and a greedy master', 'They were slaves of Marcus', 'They were in prison', 'They were children'], answer: 0, explain: 'pecūniam nōn habēbāmus, et magister nautārum avārus erat.' },
      { id: 'r3', type: 'mc', prompt: 'Why will Lucius sail again?', options: ['His money is little', 'He misses Greece', 'Marcus sends him away', 'The children ask him to'], answer: 0, explain: 'pecūnia enim mea parva est.' },
      { id: 'r4', type: 'mc', prompt: 'What does Lucius ask in return for his stories?', options: ['A good dinner', 'Greek books', 'Money', 'A ship'], answer: 0, explain: 'sī cēnam bonam parābitis.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">labōrābimus</span>:', options: ['we shall work', 'we were working', 'we work', 'they will work'], answer: 0, explain: 'Future, 1st plural.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">timēbātis</span>:', options: ['you (pl.) were afraid', 'you (pl.) will be afraid', 'you (sg.) were afraid', 'they were afraid'], answer: 0, explain: 'Imperfect, 2nd plural.' },
      { id: 't3', type: 'gap', prompt: '<span class="la">Crās in oppidō ___.</span>', hint: 'I shall be', answers: ['erō'], full: 'Crās in oppidō erō.', explain: 'Future of sum.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Fīlia pulch___ est.</span>', hint: 'beautiful (f.)', answers: ['ra'], full: 'Fīlia pulchra est.', explain: 'pulcher drops the e.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Agrī vest___ magnī sunt.</span>', hint: 'your (pl.), with agrī', answers: ['rī'], full: 'Agrī vestrī magnī sunt.', explain: 'vester drops the e: vestrī.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Ōlim miserī erāmus.', model: 'Once we were wretched.', accepted: ['once we were wretched', 'once we were miserable', 'we were once wretched', 'we were once miserable', 'once we were unhappy', 'once we were poor'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'Tomorrow we shall dine.', model: 'Crās cēnābimus.', accepted: ['crās cēnābimus'], explain: 'First- and second-conjugation futures use -bi-: cēnā-bi-mus. Crās, an adverb, usually comes first.' },
      { id: 't8', type: 'mc', prompt: 'Which of these is <strong>not</strong> a future?', options: ['dēbet', 'dēbēbit', 'erit', 'vocābunt'], answer: 0, explain: 'dēbet is present: the b belongs to the stem.' },
      { id: 't9', type: 'mc', prompt: '<span class="la">līberī, -ōrum</span> means:', options: ['children', 'books', 'freedmen', 'libraries'], answer: 0, explain: 'The free members of a household.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">Forsan et haec ōlim meminisse iuvābit</span> is from:', options: ['Virgil’s Aeneid', 'Cicero’s letters', 'Ennius', 'the Twelve Tables'], answer: 0, explain: 'Aeneid 1.203.' },
      { id: 't11', type: 'mc', prompt: 'Why does Latin say <span class="la">sī parābitis</span> where English says “if you prepare”?', options: ['Latin uses the future for future conditions', 'It is a mistake', 'parābitis is present', 'Latin has no present tense'], answer: 0, explain: 'Latin is strict about future time.' }
    ]
  },

  reference: [
    { title: 'Imperfect and future: amō, moneō', headers: ['', 'amō impf.', 'amō fut.', 'moneō impf.', 'moneō fut.'], rows: [
      ['1st sg.', 'amābam', 'amābō', 'monēbam', 'monēbō'], ['2nd sg.', 'amābās', 'amābis', 'monēbās', 'monēbis'], ['3rd sg.', 'amābat', 'amābit', 'monēbat', 'monēbit'],
      ['1st pl.', 'amābāmus', 'amābimus', 'monēbāmus', 'monēbimus'], ['2nd pl.', 'amābātis', 'amābitis', 'monēbātis', 'monēbitis'], ['3rd pl.', 'amābant', 'amābunt', 'monēbant', 'monēbunt']
    ] },
    { title: 'sum: imperfect and future', headers: ['', 'Imperfect', 'Future'], rows: [['1st sg.', 'eram', 'erō'], ['2nd sg.', 'erās', 'eris'], ['3rd sg.', 'erat', 'erit'], ['1st pl.', 'erāmus', 'erimus'], ['2nd pl.', 'erātis', 'eritis'], ['3rd pl.', 'erant', 'erunt']] },
    { title: 'Adjectives in -er', headers: ['', 'Masc.', 'Fem.', 'Neut.', 'Stem'], rows: [['keep e', 'līber', 'lībera', 'līberum', 'līber-'], ['keep e', 'miser', 'misera', 'miserum', 'miser-'], ['drop e', 'pulcher', 'pulchra', 'pulchrum', 'pulchr-'], ['drop e', 'noster', 'nostra', 'nostrum', 'nostr-'], ['drop e', 'vester', 'vestra', 'vestrum', 'vestr-']] }
  ]
});
