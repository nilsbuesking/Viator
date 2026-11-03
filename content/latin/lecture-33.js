/*
 * Latin — Lecture XXXIII: the irregular verbs volō, nōlō, mālō; volō with the infinitive
 * and with the accusative and infinitive; nōlī + infinitive; impersonal placet;
 * proviso clauses with dum, modo, dummodo.
 * Authentic reading: Pliny, Letters 6.16.15–17.
 * Content file only. Source texts (Pliny, Letters 6.16) checked against the text supplied by Nils;
 * length marks editorial. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-33',
  number: 33,
  title: 'Ratiō ratiōnem vīcit',
  subtitle: 'volō, nōlō, mālō; volō tē venīre; nōlī timēre; placuit + infinitive; proviso clauses (dum, modo, dummodo); authentic reading: Pliny 6.16.15–17',
  minutes: 70,

  intro: `
    <p>Three common verbs of wanting are irregular in the present: <span class="la">volō</span> “I want”, <span class="la">nōlō</span> “I do not want”, and <span class="la">mālō</span> “I prefer”. The last two are contractions of the first: <span class="la">nōlō</span> from <span class="la">ne + volō</span>, <span class="la">mālō</span> from <span class="la">magis + volō</span>, “I want more”. <span class="la">volō</span> is a cognate of German <em>wollen</em> and English <em>will</em>, and its forms <span class="la">vult, velle, vellem</span> keep the same <em>w</em> + <em>l</em> as <em>will, wollte</em>.</p>
    <p>Two constructions come with them: <span class="la">nōlī</span> or <span class="la">nōlīte</span> + infinitive, the polite way of saying “don’t!”, and the proviso clause, “provided that”, with <span class="la">dum, modo, dummodo</span> and the subjunctive.</p>
    <p>The reading continues the Pliny letter: the household at Stabiae must decide whether to stay indoors as the house shakes or to go out under the falling pumice.</p>
  `,

  background: [
    {
      title: 'Ratiō ratiōnem, timōrem timor',
      html: `
        <p>Indoors the house was rocking with repeated earthquakes; outdoors pumice was falling. The party chose the open air, and Pliny sums up the choice in a famous antithesis: <span class="la">apud illum quidem ratiō ratiōnem, apud aliōs timōrem timor vīcit</span>, “with him one reason outweighed another, with the others one fear outweighed another”. The pattern A–A, B–B, with the order reversed between the halves (<span class="la">ratiō ratiōnem</span> nominative–accusative, <span class="la">timōrem timor</span> accusative–nominative), is a chiasmus. Even in a crisis the uncle reasons; the others choose between fears.</p>
        <p>The pillows tied to their heads with linen (Lecture XV) were their protection against the falling stones.</p>
      `
    },
    {
      title: 'The earthquake before the eruption',
      html: `
        <p>The shaking that Pliny describes was not new. Some years before the eruption a severe earthquake had damaged Pompeii and Herculaneum. Tacitus (<em>Annals</em> 15.22) places it in AD 62; Seneca (<em>Natural Questions</em> 6.1) gives 5 February in a consular year that points to 63. Scholars still disagree about which to follow. Much of Pompeii was still being repaired in 79, and Pliny himself says that tremors had been felt for days before the eruption but caused little alarm because they were common in Campania (6.20.3).</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Pompeian_bas-relief,_depicting_the_tilting_buildings_in_the_Forum_of_Pompeii_during_the_AD_62_earthquake,_AD_62-79,_Exhibition_%E2%80%9CPompeii_And_Santorini._Eternity_In_A_Day%E2%80%9D_at_the_Scuderie_Del_Quirinale,_Rome_(49904946677).jpg/960px-Pompeian_bas-relief,_depicting_the_tilting_buildings_in_the_Forum_of_Pompeii_during_the_AD_62_earthquake,_AD_62-79,_Exhibition_%E2%80%9CPompeii_And_Santorini._Eternity_In_A_Day%E2%80%9D_at_the_Scuderie_Del_Quirinale,_Rome_(49904946677).jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Pompeian_bas-relief,_depicting_the_tilting_buildings_in_the_Forum_of_Pompeii_during_the_AD_62_earthquake,_AD_62-79,_Exhibition_%E2%80%9CPompeii_And_Santorini._Eternity_In_A_Day%E2%80%9D_at_the_Scuderie_Del_Quirinale,_Rome_(49904946677).jpg/500px-Pompeian_bas-relief,_depicting_the_tilting_buildings_in_the_Forum_of_Pompeii_during_the_AD_62_earthquake,_AD_62-79,_Exhibition_%E2%80%9CPompeii_And_Santorini._Eternity_In_A_Day%E2%80%9D_at_the_Scuderie_Del_Quirinale,_Rome_(49904946677).jpg|https://upload.wikimedia.org/wikipedia/commons/5/59/Pompeian_bas-relief,_depicting_the_tilting_buildings_in_the_Forum_of_Pompeii_during_the_AD_62_earthquake,_AD_62-79,_Exhibition_%E2%80%9CPompeii_And_Santorini._Eternity_In_A_Day%E2%80%9D_at_the_Scuderie_Del_Quirinale,_Rome_(49904946677).jpg" alt="Marble relief showing a temple and an arch leaning to one side"><figcaption>Marble relief from the household shrine of the House of Caecilius Iucundus at Pompeii, usually interpreted as the earthquake of AD 62/63: the buildings of the Forum are shown tilting. Photographed at an exhibition in Rome. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Pompeian_bas-relief,_depicting_the_tilting_buildings_in_the_Forum_of_Pompeii_during_the_AD_62_earthquake,_AD_62-79,_Exhibition_%E2%80%9CPompeii_And_Santorini._Eternity_In_A_Day%E2%80%9D_at_the_Scuderie_Del_Quirinale,_Rome_(49904946677).jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'volō and wollen',
      html: `
        <p>Latin <span class="la">volō, velle</span> and German <em>wollen, will</em> go back to one Indo-European root meaning “wish, choose”; Old English <em>willan</em> is the ancestor of English <em>will</em>. German has kept the meaning “want” (<em>ich will</em>), English has largely turned <em>will</em> into a future auxiliary. Latin never did: <span class="la">volō īre</span> always means “I want to go”.</p>
        <p>The subjunctive <span class="la">velim</span>, “I should like”, is a polite form much like German <em>ich möchte</em> or <em>ich wollte</em>: <span class="la">Velim mihi scrībās</span>, “I should like you to write to me”. The unfulfilled wish <span class="la">vellem</span>, “I could wish”, compares with <em>ich wollte, ich hätte …</em>.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Interim Mīsēnī ego et māter — sed nihil ad historiam, nec tū aliud quam dē exitū eius scīre voluistī. Fīnem ergō faciam.</p>
    <p>“Meanwhile at Misenum my mother and I — but that has nothing to do with history, and you wanted to know nothing but the facts of his death. So I shall stop.” Pliny, <em>Letters</em> 6.16.21, checked against the text Nils supplied; length marks added. The perfect of <span class="la">volō</span> is regular: <span class="la">voluistī</span>, “you wanted”, with a complementary infinitive <span class="la">scīre</span>. Pliny breaks off his own story with an aposiopesis (the sentence left unfinished), and Tacitus asked for more: the next letter, 6.20, tells what happened at Misenum.</p>
    <p>And from Lecture XXVII: the uncle offered to take his nephew <span class="la">sī venīre ūnā vellem</span>, “if I wished to come along” (6.16.7), the imperfect subjunctive of <span class="la">volō</span>.</p>
    <p>A famous proviso clause is the line from the tragedian Accius that Roman writers quote as the motto of a tyrant: <span class="la">Ōderint dum metuant</span>, “Let them hate, provided that they fear” (quoted by Cicero, <em>De officiis</em> 1.97, and by Suetonius as a favourite saying of Caligula, <em>Caligula</em> 30). Accius’ play is lost; we have the line only through these quotations.</p>
  `,

  pronunciation: `
    <h3>vult, vultis (volt, voltis)</h3>
    <p>Classical Latin wrote <span class="la">volt, voltis</span> until about the time of Augustus and <span class="la">vult, vultis</span> afterwards; the sound was probably close to <em>wolt</em>, with <span class="la">v</span> = English <em>w</em>. Beware: German <em>v</em> in <em>Vogel</em> is [f], Latin <span class="la">v</span> never is.</p>
    <h3>nōlō, mālō</h3>
    <p>Both have a long first vowel from the contraction: <span class="la">NŌ-lō, MĀ-lō, mā-VUL-tis, NŌL-le, MĀL-le</span>. Do not confuse <span class="la">mālō</span> “I prefer” with <span class="la">malō</span>, dative/ablative of <span class="la">malum</span>, “evil”, or <span class="la">mālum</span>, “apple”.</p>
  `,

  grammar: [
    {
      title: '1. volō, nōlō, mālō: present indicative',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>volō</th><th>nōlō</th><th>mālō</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">volō</td><td class="la">nōlō</td><td class="la">mālō</td></tr>
            <tr><th>2nd sg.</th><td class="la">vīs</td><td class="la">nōn vīs</td><td class="la">māvīs</td></tr>
            <tr><th>3rd sg.</th><td class="la">vult</td><td class="la">nōn vult</td><td class="la">māvult</td></tr>
            <tr><th>1st pl.</th><td class="la">volumus</td><td class="la">nōlumus</td><td class="la">mālumus</td></tr>
            <tr><th>2nd pl.</th><td class="la">vultis</td><td class="la">nōn vultis</td><td class="la">māvultis</td></tr>
            <tr><th>3rd pl.</th><td class="la">volunt</td><td class="la">nōlunt</td><td class="la">mālunt</td></tr>
          </tbody>
        </table></div>
        <p><span class="la">vīs</span> “you want” has nothing to do with <span class="la">vīs</span> “force” (Lecture XV); the context separates them. Where <span class="la">volō</span> begins with <span class="la">vol-</span> before a vowel, <span class="la">nōlō</span> and <span class="la">mālō</span> contract; where it has <span class="la">v-</span> + consonant or <span class="la">vīs</span>, <span class="la">nōlō</span> uses <span class="la">nōn</span> + the form of <span class="la">volō</span>.</p>
      `
    },
    {
      title: '2. The other tenses',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>volō</th><th>nōlō</th><th>mālō</th></tr></thead>
          <tbody>
            <tr><td>Infinitive</td><td class="la">velle</td><td class="la">nōlle</td><td class="la">mālle</td></tr>
            <tr><td>Imperfect</td><td class="la">volēbam</td><td class="la">nōlēbam</td><td class="la">mālēbam</td></tr>
            <tr><td>Future</td><td class="la">volam, volēs</td><td class="la">nōlam, nōlēs</td><td class="la">mālam, mālēs</td></tr>
            <tr><td>Present subjunctive</td><td class="la">velim, velīs, velit</td><td class="la">nōlim</td><td class="la">mālim</td></tr>
            <tr><td>Imperfect subjunctive</td><td class="la">vellem</td><td class="la">nōllem</td><td class="la">māllem</td></tr>
            <tr><td>Perfect</td><td class="la">voluī</td><td class="la">nōluī</td><td class="la">māluī</td></tr>
            <tr><td>Participle</td><td class="la">volēns</td><td class="la">nōlēns</td><td>—</td></tr>
          </tbody>
        </table></div>
        <p>The present subjunctive ends in <span class="la">-im</span> like <span class="la">sim</span>: <span class="la">velim, velīs, velit, velīmus, velītis, velint</span>. The imperfect subjunctive follows the rule of Lecture XXX (infinitive + endings), with assimilation: <span class="la">velle → vellem</span>. The perfect system is regular: <span class="la">voluerat, voluisset</span>. There is no passive.</p>
      `
    },
    {
      title: '3. volō with an infinitive or a clause',
      html: `
        <ul>
          <li>Same subject: plain infinitive. <span class="la">Volō īre.</span> I want to go.</li>
          <li>Different subject: accusative and infinitive. <span class="la">Volō tē īre.</span> I want you to go. German says <em>Ich will, dass du gehst</em>; English and Latin use the infinitive.</li>
          <li>Also <span class="la">volō</span> + subjunctive, with or without <span class="la">ut</span>: <span class="la">Velim veniās.</span> I should like you to come.</li>
          <li><span class="la">mālō … quam</span>: prefer … to. <span class="la">Mālō legere quam scrībere.</span> I prefer reading to writing.</li>
        </ul>
        <p>Impersonal <span class="la">placet</span>, “it pleases, it is decided”, also takes an infinitive: <span class="la">Placuit ēgredī in lītus</span>, “They decided to go out onto the shore” (Pliny 6.16.17). The person who decides goes in the dative: <span class="la">mihi placet</span>, “I decide, I like”, much as German <em>es gefällt mir</em>.</p>
      `
    },
    {
      title: '4. Negative commands: nōlī, nōlīte',
      html: `
        <p>The imperative of <span class="la">nōlō</span> + infinitive is the regular prose way of forbidding:</p>
        <ul>
          <li><span class="la">Nōlī timēre!</span> Don’t be afraid! (to one person)</li>
          <li><span class="la">Nōlīte discēdere!</span> Don’t leave! (to several)</li>
        </ul>
        <p>Literally “be unwilling to fear”. It is softer than a bare command and very common. Poetry and early Latin also use <span class="la">nē</span> + imperative, and prose uses <span class="la">nē</span> + perfect subjunctive (<span class="la">nē timueris</span>); <span class="la">nōlī</span> is the form to learn first.</p>
      `
    },
    {
      title: '5. Proviso clauses: dum, modo, dummodo',
      html: `
        <p>“Provided that, as long as” is <span class="la">dum, modo</span> or <span class="la">dummodo</span> + subjunctive; the negative is <span class="la">nē</span> (<span class="la">dum nē, modo nē</span>):</p>
        <ul>
          <li><span class="la">Manēbō, dum tū maneās.</span> I shall stay, provided that you stay.</li>
          <li><span class="la">Ōderint dum metuant.</span> Let them hate, provided they fear.</li>
          <li><span class="la">Veniam, modo nē pluat.</span> I shall come, provided it does not rain.</li>
        </ul>
        <p>Keep apart the other uses of <span class="la">dum</span>: “while” with the indicative, usually the present even of past events (<span class="la">Dum haec geruntur, …</span> “While this was going on, …”); and “until” with the subjunctive when the waiting is for something expected (<span class="la">Exspectā dum veniat</span>, “Wait until he comes”). German has <em>solange</em> (proviso and duration) and <em>während</em>, <em>bis</em>.</p>
      `
    }
  ],

  vocab: [
    { id: 'volo', head: 'volō', la: 'volō, velle, voluī', pos: 'verb, irregular', en: 'want, wish, be willing', stress: 'VO-lō · VEL-le', deriv: 'volition, voluntary', note: 'Cognate with German wollen, English will. vīs, vult, volumus, vultis, volunt.' },
    { id: 'nolo', head: 'nōlō', la: 'nōlō, nōlle, nōluī', pos: 'verb, irregular', en: 'not want, be unwilling', stress: 'NŌ-lō · NŌL-le', note: 'nōlī, nōlīte + infinitive: don’t …! nōlēns volēns: willy-nilly.' },
    { id: 'malo', head: 'mālō', la: 'mālō, mālle, māluī', pos: 'verb, irregular', en: 'prefer', stress: 'MĀ-lō · MĀL-le', note: 'magis + volō. mālō … quam: prefer … to. Not malō (evil) or mālum (apple).' },
    { id: 'eligo', head: 'ēligō', la: 'ēligō, ēligere, ēlēgī, ēlēctum', pos: 'verb, 3rd conj.', en: 'pick out, choose', stress: 'Ē-li-gō · ē-LI-ge-re', deriv: 'elect, elegant, élite', note: 'ē + legō, “pick out”.' },
    { id: 'permaneo', head: 'permaneō', la: 'permaneō, permanēre, permānsī, permānsum', pos: 'verb, 2nd conj.', en: 'remain, continue, persist', stress: 'PER-ma-ne-ō · per-ma-NĒ-re', deriv: 'permanent' },
    { id: 'nuto', head: 'nūtō', la: 'nūtō, nūtāre, nūtāvī, nūtātum', pos: 'verb, 1st conj.', en: 'nod; sway, totter', stress: 'NŪ-tō · nū-TĀ-re', note: 'Frequentative of *nuō, “nod”; compare nūmen, the nod (will) of a god.' },
    { id: 'placet', head: 'placet', la: 'placet, placēre, placuit (impersonal)', pos: 'verb, 2nd conj. (impersonal)', en: 'it pleases; it is decided (+ dat. and inf.)', stress: 'PLA-cet', deriv: 'placid, please', note: 'Personal placeō, “please”, takes the dative: mihi placet, es gefällt mir.' },
    { id: 'dum', head: 'dum', la: 'dum', pos: 'conjunction', en: 'while (+ ind.); until (+ subj.); provided that (+ subj.)', stress: 'DUM' },
    { id: 'modo', head: 'modo', la: 'modo', pos: 'adverb / conjunction', en: 'only, just; (+ subj.) provided that', stress: 'MO-do', note: 'Originally the ablative of modus, “by measure”. nōn modo … sed etiam: not only … but also (Lecture XXX reading).' },
    { id: 'dummodo', head: 'dummodo', la: 'dummodo', pos: 'conjunction', en: 'provided that (+ subj.)', stress: 'dum-MO-do' },
    { id: 'tremor', head: 'tremor', la: 'tremor, tremōris', g: 'm', pos: 'noun, 3rd decl.', en: 'trembling; earth tremor', stress: 'TRE-mor · tre-MŌ-ris', deriv: 'tremor, tremble' },
    { id: 'tectum', head: 'tēctum', la: 'tēctum, tēctī', g: 'n', pos: 'noun, 2nd decl.', en: 'roof; house, building', stress: 'TĒC-tum', deriv: 'protect', note: 'From tegō, tēxī, tēctum, “cover”; related to German Dach, decken.' },
    { id: 'fax', head: 'fax', la: 'fax, facis', g: 'f', pos: 'noun, 3rd decl.', en: 'torch', stress: 'FAX · FA-cis', note: 'Pliny 6.16.17: facēs multae.' },
    { id: 'collatio', head: 'collātiō', la: 'collātiō, collātiōnis', g: 'f', pos: 'noun, 3rd decl.', en: 'bringing together; comparison', stress: 'col-LĀ-ti-ō · col-lā-ti-Ō-nis', deriv: 'collation', note: 'From collātum, supine of cōnferō (Lecture XXXII).' },
    { id: 'rursus', head: 'rūrsus', la: 'rūrsus', pos: 'adverb', en: 'again; on the other hand', stress: 'RŪR-sus', note: 'From re-vorsus, “turned back”.' },
    { id: 'alibi', head: 'alibī', la: 'alibī', pos: 'adverb', en: 'elsewhere', stress: 'A-li-bī', deriv: 'alibi', note: 'An alibi is a claim to have been “elsewhere”.' }
  ],

  grammarCards: [
    { id: 'g33-volo', front: 'volō: present', back: 'volō, vīs, vult, volumus, vultis, volunt' },
    { id: 'g33-nolo', front: 'nōlō: present', back: 'nōlō, nōn vīs, nōn vult, nōlumus, nōn vultis, nōlunt' },
    { id: 'g33-malo', front: 'mālō: present', back: 'mālō, māvīs, māvult, mālumus, māvultis, mālunt' },
    { id: 'g33-inf', front: 'Infinitives of volō, nōlō, mālō', back: 'velle, nōlle, mālle' },
    { id: 'g33-subj', front: 'volō: present and imperfect subjunctive', back: 'velim, velīs, velit …; vellem, vellēs, vellet …' },
    { id: 'g33-perf', front: 'Perfects of volō, nōlō, mālō', back: 'voluī, nōluī, māluī' },
    { id: 'g33-origin', front: 'nōlō and mālō: origin', back: 'ne + volō; magis + volō' },
    { id: 'g33-acc', front: 'I want you to go.', back: 'Volō tē īre. (accusative and infinitive)' },
    { id: 'g33-noli', front: 'Don’t be afraid! (sg., pl.)', back: 'Nōlī timēre! Nōlīte timēre!' },
    { id: 'g33-malo2', front: 'Mālō legere quam scrībere.', back: 'I prefer reading to writing.' },
    { id: 'g33-velim', front: 'Velim mihi scrībās.', back: 'I should like you to write to me. (≈ ich möchte, dass …)' },
    { id: 'g33-proviso', front: 'Proviso clause', back: 'dum / modo / dummodo + subjunctive: provided that; negative nē' },
    { id: 'g33-oderint', front: 'Ōderint dum metuant.', back: 'Let them hate, provided they fear. (Accius, quoted by Cicero and Suetonius)' },
    { id: 'g33-dum', front: 'dum + indicative; dum + subjunctive', back: 'while (usually present indicative); until (expected) / provided that' },
    { id: 'g33-placuit', front: 'Placuit ēgredī in lītus.', back: 'They decided to go out onto the shore. (Pliny 6.16.17)' },
    { id: 'g33-ratio', front: 'apud illum quidem ratiō ratiōnem, apud aliōs timōrem timor vīcit', back: 'with him one reason outweighed another, with the others one fear another (Pliny 6.16.16; chiasmus)' },
    { id: 'g33-voluisti', front: 'nec tū aliud quam dē exitū eius scīre voluistī', back: 'and you wanted to know nothing but the facts of his death (Pliny 6.16.21)' },
    { id: 'g33-german', front: 'volō and German wollen', back: 'Cognates; Latin volō never forms a future (unlike English will).' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">vult</span>:', options: ['he wants', 'you want', 'they want', 'force'], answer: 0, explain: 'volō, vīs, vult.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">māvīs</span>:', options: ['you prefer', 'you do not want', 'you want more force', 'he prefers'], answer: 0, explain: 'mālō, māvīs, māvult.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Nōlī timēre!</span>', options: ['Don’t be afraid!', 'I don’t want to fear.', 'He does not fear.', 'Be afraid!'], answer: 0, explain: 'nōlī + infinitive: a negative command.' },
    { id: 'e4', type: 'mc', prompt: 'The infinitive of <span class="la">volō</span> is:', options: ['velle', 'volāre', 'volere', 'vīsse'], answer: 0, explain: 'velle, nōlle, mālle.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Veniam, modo nē pluat.</span>', options: ['I shall come, provided it does not rain.', 'I shall come only if it rains.', 'I come in the manner of rain.', 'I shall come so that it does not rain.'], answer: 0, explain: 'modo nē + subjunctive: provided that … not.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Volō tē venīre.</span>', options: ['I want you to come.', 'I want to come to you.', 'I want, you come.', 'You want to come.'], answer: 0, explain: 'Accusative and infinitive with a different subject.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Puerī lūdere vol___.</span>', hint: 'they want', answers: ['unt'], full: 'Puerī lūdere volunt.', explain: 'volunt.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Quid ___, Mārce?</span>', hint: 'do you (sg.) want', answers: ['vīs', 'vis'], full: 'Quid vīs, Mārce?', explain: 'vīs, “you want”.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">___ clāmāre, puer!</span>', hint: 'don’t (sg.)', answers: ['nōlī', 'noli'], full: 'Nōlī clāmāre, puer!', explain: 'nōlī + infinitive.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Mā___ legere quam scrībere.</span>', hint: 'I prefer', answers: ['lō', 'lo'], full: 'Mālō legere quam scrībere.', explain: 'mālō … quam.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Manēbō, ___ tū maneās.</span>', hint: 'provided that', answers: ['dum', 'modo', 'dummodo'], full: 'Manēbō, dum tū maneās.', explain: 'Proviso: dum, modo or dummodo + subjunctive.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Volō tē mēcum ven___.</span>', hint: 'to come', answers: ['īre', 'ire'], full: 'Volō tē mēcum venīre.', explain: 'Accusative and infinitive.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the present indicative of <span class="la">volō</span> and <span class="la">nōlō</span>.', headers: ['volō', 'nōlō'], rows: [
      { label: '1st sg.', answers: ['volō', 'nōlō'] },
      { label: '2nd sg.', answers: ['vīs', 'nōn vīs'] },
      { label: '3rd sg.', answers: ['vult|volt', 'nōn vult|nōn volt'] },
      { label: '1st pl.', answers: ['volumus', 'nōlumus'] },
      { label: '2nd pl.', answers: ['vultis|voltis', 'nōn vultis|nōn voltis'] },
      { label: '3rd pl.', answers: ['volunt', 'nōlunt'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the present indicative of <span class="la">mālō</span> and the present subjunctive of <span class="la">volō</span>.', headers: ['mālō', 'volō (subj.)'], rows: [
      { label: '1st sg.', answers: ['mālō', 'velim'] },
      { label: '2nd sg.', answers: ['māvīs', 'velīs'] },
      { label: '3rd sg.', answers: ['māvult|māvolt', 'velit'] },
      { label: '1st pl.', answers: ['mālumus', 'velīmus'] },
      { label: '2nd pl.', answers: ['māvultis|māvoltis', 'velītis'] },
      { label: '3rd pl.', answers: ['mālunt', 'velint'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each word to its meaning.', pairs: [
      ['volō', 'I want'], ['nōlō', 'I do not want'], ['mālō', 'I prefer'], ['nōlīte', 'don’t (pl.)'], ['dummodo', 'provided that']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Puerī dormīre nōlunt.', tokens: ['The boys', 'do not', 'want', 'to sleep'], explain: 'nōlunt + infinitive.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Volō tē mēcum venīre.', model: 'I want you to come with me.', accepted: ['i want you to come with me', 'i wish you to come with me', 'i want you to go with me'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Nōlīte timēre!', model: 'Do not be afraid!', accepted: ['do not be afraid', 'don’t be afraid', 'dont be afraid', 'do not fear', 'don’t fear', 'dont fear', 'fear not', 'be not afraid'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Mālumus pācem quam bellum.', model: 'We prefer peace to war.', accepted: ['we prefer peace to war', 'we prefer peace rather than war', 'we would rather have peace than war', 'we prefer peace over war'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'he wants', model: 'vult', accepted: ['vult', 'volt'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'they prefer', model: 'mālunt', accepted: ['mālunt'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'to be unwilling (infinitive)', model: 'nōlle', accepted: ['nōlle'] },
    { id: 'e23', type: 'mc', prompt: 'Why did the party at Stabiae go outside?', options: ['They weighed the dangers and preferred falling pumice to collapsing roofs', 'The house was on fire', 'The uncle ordered them to the ships', 'They wanted to see the eruption'], answer: 0, explain: 'quod tamen perīculōrum collātiō ēlēgit.' },
    { id: 'e24', type: 'mc', prompt: '<span class="la">ratiō ratiōnem … timōrem timor</span> is an example of:', options: ['chiasmus', 'alliteration only', 'a proviso clause', 'an indirect question'], answer: 0, explain: 'Nominative–accusative, then accusative–nominative: crossed order.' },
    { id: 'e25', type: 'mc', prompt: 'Which German verb is a cognate of <span class="la">volō</span>?', options: ['wollen', 'fallen', 'wohnen', 'vollenden'], answer: 0, explain: 'volō ~ wollen ~ English will.' }
  ],

  reading: {
    title: 'Sub dīō (Plīnius, Epistulae 6.16.15–17)',
    note: 'Authentic text, unadapted: Pliny the Younger, Letters 6.16.15–17, from the copy in the course’s source files; length marks added. Tap any word.',
    text: 'In commūne cōnsultant, intrā tēcta subsistant an in apertō vagentur. Nam crēbrīs vastīsque tremōribus tēcta nūtābant, et quasi ēmōta sēdibus suīs nunc hūc nunc illūc abīre aut referrī vidēbantur. Sub dīō rūrsus quamquam levium exēsōrumque pūmicum cāsus metuēbātur, quod tamen perīculōrum collātiō ēlēgit; et apud illum quidem ratiō ratiōnem, apud aliōs timōrem timor vīcit. Cervīcālia capitibus imposita linteīs cōnstringunt; id mūnīmentum adversus incidentia fuit. Iam diēs alibī, illīc nox omnibus noctibus nigrior dēnsiorque; quam tamen facēs multae variaque lūmina solvēbant. Placuit ēgredī in lītus, et ex proximō adspicere, ecquid iam mare admitteret; quod adhuc vastum et adversum permanēbat.',
    translation: 'They discuss together whether to stay under cover or wander in the open. For the buildings were swaying with frequent and violent tremors, and seemed, as if torn from their foundations, to move now this way, now that, and back again. In the open air, on the other hand, they feared the fall of pumice stones, light and porous though they were; yet a comparison of the dangers chose this. With him, indeed, one reason won over another; with the others, one fear over another. They put pillows on their heads and tied them on with linen cloths; that was their protection against what was falling. By now it was day elsewhere; there it was night, blacker and thicker than all nights, though many torches and lights of various kinds relieved it. They decided to go out onto the shore and see from close at hand whether the sea would now allow any escape; but it was still wild and against them.',
    notes: [
      { ref: 'In commūne cōnsultant, intrā tēcta subsistant an in apertō vagentur', html: '<span class="la">in commūne</span>: “together, jointly”. Indirect double question with the second part introduced by <span class="la">an</span> and the first unmarked (Lecture XXXI); present subjunctives after the historic present <span class="la">cōnsultant</span>. <span class="la">vagentur</span>: present subjunctive of the deponent <span class="la">vagor</span>, “wander” (Lecture XXXV).' },
      { ref: 'crēbrīs vastīsque tremōribus tēcta nūtābant', html: '<span class="la">tremōribus</span>: ablative of cause. <span class="la">nūtābant</span>: “were swaying, tottering”; imperfect for a continuing state.' },
      { ref: 'quasi ēmōta sēdibus suīs nunc hūc nunc illūc abīre aut referrī vidēbantur', html: '<span class="la">vidēbantur</span> + infinitive: “seemed to …”. <span class="la">ēmōta sēdibus suīs</span>: “moved from their foundations”, ablative of separation. <span class="la">abīre aut referrī</span>: “to go away or be carried back”, the to-and-fro of the shaking. <span class="la">referrī</span>: present passive infinitive of <span class="la">referō</span> (Lecture XXXII).' },
      { ref: 'Sub dīō rūrsus quamquam levium exēsōrumque pūmicum cāsus metuēbātur', html: '<span class="la">sub dīō</span>: “under the open sky”. <span class="la">rūrsus</span>: here “on the other hand”. <span class="la">quamquam</span> belongs with the adjectives: “the fall of pumice, though light and eaten away (porous)”. <span class="la">levium</span>: from <span class="la">levis</span> “light”, with short <span class="la">e</span>; <span class="la">lēvis</span> with long <span class="la">ē</span> means “smooth”.' },
      { ref: 'quod tamen perīculōrum collātiō ēlēgit', html: '“which (going out) a comparison of the dangers nevertheless chose”. <span class="la">quod</span> refers to the whole idea of staying in the open. <span class="la">collātiō</span>: from <span class="la">cōnferō</span>, “a bringing together”, comparison.' },
      { ref: 'apud illum quidem ratiō ratiōnem, apud aliōs timōrem timor vīcit', html: 'Chiasmus; see the background. One verb <span class="la">vīcit</span> serves both halves. <span class="la">apud illum</span>: “in his case”.' },
      { ref: 'Cervīcālia capitibus imposita linteīs cōnstringunt', html: 'Lecture XV. <span class="la">cervīcālia</span>: “pillows” (from <span class="la">cervīx</span>, “neck”). <span class="la">imposita</span>: perfect participle, “placed on”; <span class="la">capitibus</span> dative with <span class="la">impōnō</span>.' },
      { ref: 'id mūnīmentum adversus incidentia fuit', html: '<span class="la">id</span> agrees with <span class="la">mūnīmentum</span>: “that was their protection”. <span class="la">incidentia</span>: neuter plural participle used as a noun, “things falling (on them)”.' },
      { ref: 'Iam diēs alibī, illīc nox omnibus noctibus nigrior dēnsiorque', html: 'Lecture XXVII. No verb: supply <span class="la">erat</span>. <span class="la">omnibus noctibus</span>: ablative of comparison, “than all nights”.' },
      { ref: 'quam tamen facēs multae variaque lūmina solvēbant', html: '<span class="la">quam</span>: relative, “which (night)”, object of <span class="la">solvēbant</span>, “broke up, relieved”.' },
      { ref: 'Placuit ēgredī in lītus, et ex proximō adspicere, ecquid iam mare admitteret', html: '<span class="la">placuit</span> + infinitives: “it was decided to go out … and look”. <span class="la">ēgredī</span>: deponent infinitive, “to go out”. <span class="la">ecquid</span>: “whether at all, whether anything”, introducing an indirect question; imperfect subjunctive because <span class="la">placuit</span> is past. <span class="la">adspicere</span>: the copy’s spelling of <span class="la">aspicere</span>.' },
      { ref: 'quod adhuc vastum et adversum permanēbat', html: '<span class="la">quod</span>: “which (the sea)”. <span class="la">vastum</span>: “huge, wild”; <span class="la">adversum</span>: “hostile”, the wind still blowing onshore (Lecture XXXI).' }
    ],
    glosses: {
      'in': 'in, into; together (in commūne)', 'commūne': 'common (in commūne: jointly)', 'cōnsultant': '3rd pl. of cōnsultō: they discuss', 'intrā': 'inside (+ acc.)', 'tēcta': 'acc./nom. pl. of tēctum: buildings, roofs', 'subsistant': 'pres. subj. 3rd pl. of subsistō: they should stay', 'an': 'or (in a question)', 'apertō': 'abl. of apertum: the open', 'vagentur': 'pres. subj. of vagor: they should wander',
      'nam': 'for', 'crēbrīs': 'abl. pl. of crēber: frequent', 'vastīsque': 'and violent (abl. pl. + -que)', 'tremōribus': 'abl. pl. of tremor: by tremors', 'nūtābant': 'impf. 3rd pl. of nūtō: were swaying', 'et': 'and', 'quasi': 'as if', 'ēmōta': 'nom. pl. n. of ēmōtus: dislodged', 'sēdibus': 'abl. pl. of sēdēs: from foundations', 'suīs': 'abl. pl. of suus: their own', 'nunc': 'now', 'hūc': 'to here, this way', 'illūc': 'to there, that way', 'abīre': 'inf. of abeō: to go away', 'aut': 'or', 'referrī': 'pres. pass. inf. of referō: to be carried back', 'vidēbantur': 'impf. pass. 3rd pl. of videō: seemed',
      'sub': 'under (+ abl.)', 'dīō': 'abl. of dīum: the open sky', 'rūrsus': 'on the other hand', 'quamquam': 'although', 'levium': 'gen. pl. of levis: light', 'exēsōrumque': 'and porous (gen. pl. of exēsus + -que)', 'pūmicum': 'gen. pl. of pūmex: of pumice', 'cāsus': 'fall (nom.)', 'metuēbātur': 'impf. pass. 3rd sg. of metuō: was feared', 'quod': 'which', 'tamen': 'nevertheless', 'perīculōrum': 'gen. pl. of perīculum: of the dangers', 'collātiō': 'comparison (nom.)', 'ēlēgit': 'perf. 3rd sg. of ēligō: chose',
      'apud': 'with, in the case of (+ acc.)', 'illum': 'acc. of ille: him', 'quidem': 'indeed', 'ratiō': 'reason (nom.)', 'ratiōnem': 'acc. of ratiō: reason', 'aliōs': 'acc. pl. of alius: the others', 'timōrem': 'acc. of timor: fear', 'timor': 'fear (nom.)', 'vīcit': 'perf. 3rd sg. of vincō: overcame',
      'cervīcālia': 'acc. pl. of cervīcal: pillows', 'capitibus': 'dat. pl. of caput: on (their) heads', 'imposita': 'acc. pl. n. of impositus: placed', 'linteīs': 'abl. pl. of linteum: with linen cloths', 'cōnstringunt': '3rd pl. of cōnstringō: they tie', 'id': 'that', 'mūnīmentum': 'protection (nom.)', 'adversus': 'against (+ acc.)', 'incidentia': 'acc. pl. n. of incidēns: falling things', 'fuit': 'perf. 3rd sg. of sum: was',
      'iam': 'now, already', 'diēs': 'day (nom.)', 'alibī': 'elsewhere', 'illīc': 'there', 'nox': 'night (nom.)', 'omnibus': 'abl. pl. of omnis: all', 'noctibus': 'abl. pl. of nox: than nights', 'nigrior': 'blacker', 'dēnsiorque': 'and thicker (+ -que)', 'quam': 'which (acc. f.)', 'facēs': 'nom. pl. of fax: torches', 'multae': 'many', 'variaque': 'and various (nom. pl. n. + -que)', 'lūmina': 'nom. pl. of lūmen: lights', 'solvēbant': 'impf. 3rd pl. of solvō: relieved',
      'placuit': 'perf. of placet: it was decided', 'ēgredī': 'inf. of ēgredior: to go out', 'lītus': 'shore (acc.)', 'ex': 'from (+ abl.)', 'proximō': 'abl. of proximum: close at hand', 'adspicere': 'inf. of adspiciō (aspiciō): to look', 'ecquid': 'whether at all', 'mare': 'sea (nom.)', 'admitteret': 'impf. subj. 3rd sg. of admittō: would allow', 'adhuc': 'still', 'vastum': 'wild, huge', 'adversum': 'hostile, contrary', 'permanēbat': 'impf. 3rd sg. of permaneō: remained'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What was the danger indoors?', options: ['The buildings were swaying with earthquakes', 'Fire', 'Flooding', 'Lack of air'], answer: 0, explain: 'crēbrīs vastīsque tremōribus tēcta nūtābant.' },
      { id: 'r2', type: 'mc', prompt: 'What was the danger outdoors?', options: ['Falling pumice', 'Wild animals', 'Robbers', 'Flames'], answer: 0, explain: 'levium exēsōrumque pūmicum cāsus metuēbātur.' },
      { id: 'r3', type: 'mc', prompt: 'How did they light their way?', options: ['With torches and lamps', 'By the light of the flames', 'By moonlight', 'They did not'], answer: 0, explain: 'facēs multae variaque lūmina.' },
      { id: 'r4', type: 'mc', prompt: 'What did they find on the shore?', options: ['The sea was still wild and against them', 'Ships waiting', 'Calm water', 'Other refugees'], answer: 0, explain: 'quod adhuc vastum et adversum permanēbat.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">nōlunt</span>:', options: ['they do not want', 'they prefer', 'they want', 'don’t!'], answer: 0, explain: 'nōlō: nōlumus, nōn vultis, nōlunt.' },
      { id: 't2', type: 'mc', prompt: 'Imperfect subjunctive 1st sg. of <span class="la">mālō</span>:', options: ['māllem', 'mālerem', 'mālim', 'mālēbam'], answer: 0, explain: 'mālle + -m.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Dum haec geruntur, hostēs fūgērunt.</span>', options: ['While this was going on, the enemy fled.', 'Provided this is done, the enemy fled.', 'Until this was done, the enemy fled.', 'The enemy fled so that this would be done.'], answer: 0, explain: 'dum “while” + present indicative, even in the past.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">___ abīre, amīcī!</span>', hint: 'don’t (pl.)', answers: ['nōlīte', 'nolite'], full: 'Nōlīte abīre, amīcī!', explain: 'nōlīte + infinitive.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Mārcus vīnum quam aquam mā___.</span>', hint: 'prefers', answers: ['vult', 'volt'], full: 'Mārcus vīnum quam aquam māvult.', explain: 'māvult.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Ōderint dum metuant.', model: 'Let them hate, provided that they fear.', accepted: ['let them hate provided that they fear', 'let them hate provided they fear', 'let them hate as long as they fear', 'let them hate so long as they fear', 'let them hate if only they fear'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'Don’t be afraid! (to one person)', model: 'Nōlī timēre!', accepted: ['nōlī timēre', 'nōlī metuere'] },
      { id: 't8', type: 'mc', prompt: '<span class="la">mālō</span> comes from:', options: ['magis + volō', 'malus + volō', 'mālum + volō', 'nē + volō'], answer: 0, explain: 'I want more = I prefer.' },
      { id: 't9', type: 'mc', prompt: 'What did the party tie to their heads?', options: ['Pillows', 'Helmets', 'Shields', 'Wet cloths'], answer: 0, explain: 'Cervīcālia capitibus imposita linteīs cōnstringunt.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">nec tū aliud quam dē exitū eius scīre voluistī</span>: Tacitus wanted to know:', options: ['only about the uncle’s death', 'about the nephew and his mother', 'about the eruption in general', 'about Pomponianus'], answer: 0, explain: 'Pliny 6.16.21.' },
      { id: 't11', type: 'mc', prompt: 'The negative of a proviso clause is:', options: ['nē (dum nē, modo nē)', 'nōn', 'ut nōn', 'nōlī'], answer: 0, explain: 'dum nē, modo nē, dummodo nē.' }
    ]
  },

  reference: [
    { title: 'volō, nōlō, mālō: present indicative', headers: ['', 'volō', 'nōlō', 'mālō'], rows: [
      ['1st sg.', 'volō', 'nōlō', 'mālō'], ['2nd sg.', 'vīs', 'nōn vīs', 'māvīs'], ['3rd sg.', 'vult', 'nōn vult', 'māvult'], ['1st pl.', 'volumus', 'nōlumus', 'mālumus'], ['2nd pl.', 'vultis', 'nōn vultis', 'māvultis'], ['3rd pl.', 'volunt', 'nōlunt', 'mālunt']
    ] },
    { title: 'Other forms', headers: ['', 'volō', 'nōlō', 'mālō'], rows: [
      ['Infinitive', 'velle', 'nōlle', 'mālle'], ['Pres. subj.', 'velim', 'nōlim', 'mālim'], ['Impf. subj.', 'vellem', 'nōllem', 'māllem'], ['Perfect', 'voluī', 'nōluī', 'māluī'], ['Imperative', '—', 'nōlī, nōlīte', '—']
    ] },
    { title: 'dum', headers: ['Mood', 'Meaning', 'Example'], rows: [
      ['indicative (usually present)', 'while', 'Dum haec geruntur, …'], ['subjunctive', 'until (expected)', 'Exspectā dum veniat.'], ['subjunctive', 'provided that', 'Ōderint dum metuant.']
    ] }
  ]
});
