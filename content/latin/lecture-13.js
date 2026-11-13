/*
 * Latin — Lecture XIII: the perfect active system (perfect, pluperfect, future perfect).
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotations (Virgil, Aeneid 1.1–3; Catullus 5.10–11; Cicero, In Catilinam 1.1) checked
 * against the texts supplied by Nils (sources/latin-readings.txt). Pictures from Wikimedia
 * Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-13',
  number: 13,
  title: 'Vēnī, vīdī, vīcī',
  subtitle: 'The perfect, pluperfect and future perfect active; the third principal part; sum and possum',
  minutes: 65,

  intro: `
    <p>Up to now every past event in the readings has been told in the imperfect, the tense of the background and of the repeated action. Lucius had to say <span class="la">inveniēbam</span>, “I was finding”, when he meant “I found”. This lecture gives you the tense Latin actually uses for single, completed events: the <strong>perfect</strong>, <span class="la">vēnī</span> “I came, I have come”. With it come two tenses built on the same stem: the <strong>pluperfect</strong>, <span class="la">vēneram</span> “I had come”, and the <strong>future perfect</strong>, <span class="la">vēnerō</span> “I shall have come”.</p>
    <p>The endings are entirely regular and the same for every verb in the language, <span class="la">sum</span> included. The difficulty lies in the stem. It is given by the third principal part, which you have been learning since Lecture I: <span class="la">amō, amāre, <strong>amāvī</strong>, amātum</span>. Remove the <span class="la">-ī</span> and you have the perfect stem <span class="la">amāv-</span>. From now on the principal parts are not optional.</p>
    <p>By the end you should be able to form all three tenses of any verb whose principal parts you know, recognise the main types of perfect stem, and use the future perfect where Latin requires it and English does not.</p>
  `,

  background: [
    {
      title: 'Two tenses in one',
      html: `
        <p>The Latin perfect translates two English tenses: <span class="la">vīdī</span> is both “I saw” and “I have seen”. Context decides. This is not an accident but history. Comparison with Greek and Sanskrit shows that the parent language had two separate past forms: an <em>aorist</em>, stating that something happened, and a <em>perfect</em>, describing a state resulting from it. Greek kept both. Latin merged them into a single tense, and that is the usual explanation for the many kinds of perfect stem: the <span class="la">s</span> of <span class="la">dīxī</span> (<span class="la">dīc-s-ī</span>) continues an old aorist, while the doubled first syllable of <span class="la">dedī</span> or <span class="la">cecidī</span> continues an old perfect.</p>
        <p>German speakers have an advantage here. Spoken southern German has almost given up the Präteritum (<em>ich kam</em>) in favour of the Perfekt (<em>ich bin gekommen</em>), and even in the north the two often mean the same. You already live with one past tense doing two jobs.</p>
        <p>The Romance languages then rebuilt the distinction. The Latin perfect survives as the French <em>passé simple</em> (<em>il vint</em> from <span class="la">vēnit</span>), now mostly written, while the spoken past is a new compound with “have”, <em>il a écrit</em>, from a Latin phrase like <span class="la">habeō epistulam scrīptam</span>, “I have a letter (in the state of being) written”. German built its <em>hat geschrieben</em> in the same way at much the same period; whether by Latin influence or in parallel is debated.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Vergilius_Romanus_f_100v_closer_detail_Conticuere_omnes.jpg/960px-Vergilius_Romanus_f_100v_closer_detail_Conticuere_omnes.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Vergilius_Romanus_f_100v_closer_detail_Conticuere_omnes.jpg/500px-Vergilius_Romanus_f_100v_closer_detail_Conticuere_omnes.jpg|https://upload.wikimedia.org/wikipedia/commons/8/8a/Vergilius_Romanus_f_100v_closer_detail_Conticuere_omnes.jpg" alt="Late antique manuscript page in large capital letters with a painted scene above"><figcaption>The Vergilius Romanus, a 5th-century manuscript of Virgil (Vatican Library, Vat. lat. 3867), at the start of <em>Aeneid</em> 2, where Aeneas begins his story. The book opens <span class="la">conticuēre omnēs</span>, “all fell silent”: a perfect in <span class="la">-ēre</span>. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Vergilius_Romanus_f_100v_closer_detail_Conticuere_omnes.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Vēnī, vīdī, vīcī',
      html: `
        <p>In 47 BC Julius Caesar defeated Pharnaces II, king of Pontus, at Zela in northern Asia Minor, after a campaign of a few days. According to Suetonius (<em>Divus Iulius</em> 37), the three words <span class="la">vēnī, vīdī, vīcī</span> were carried on a placard in Caesar’s triumph over Pontus the following year; Plutarch (<em>Caesar</em> 50) says Caesar wrote them in a letter to a friend in Rome. Both sources wrote more than a century later, so the details are uncertain; the words themselves are well attested.</p>
        <p>The phrase is a small masterpiece of Latin style: three verbs, each of two syllables, each beginning with <span class="la">v</span> and ending in <span class="la">-ī</span>, with no “and” (the figure called <em>asyndeton</em>). It works only because the Latin perfect is a single word. German needs six (<em>ich kam, ich sah, ich siegte</em>), English six as well.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Andrea_Mantegna_(1431-1506)_-_The_Triumphs_of_Caesar,_9._Caesar_on_his_Chariot_-_RCIN_403966_-_Royal_Collection.jpg/960px-Andrea_Mantegna_(1431-1506)_-_The_Triumphs_of_Caesar,_9._Caesar_on_his_Chariot_-_RCIN_403966_-_Royal_Collection.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Andrea_Mantegna_(1431-1506)_-_The_Triumphs_of_Caesar,_9._Caesar_on_his_Chariot_-_RCIN_403966_-_Royal_Collection.jpg/500px-Andrea_Mantegna_(1431-1506)_-_The_Triumphs_of_Caesar,_9._Caesar_on_his_Chariot_-_RCIN_403966_-_Royal_Collection.jpg|https://upload.wikimedia.org/wikipedia/commons/2/21/Andrea_Mantegna_(1431-1506)_-_The_Triumphs_of_Caesar,_9._Caesar_on_his_Chariot_-_RCIN_403966_-_Royal_Collection.jpg" alt="Renaissance painting of Caesar in a triumphal chariot surrounded by a crowd"><figcaption>Andrea Mantegna, <em>The Triumphs of Caesar</em>, canvas 9: Caesar on his chariot (c. 1484–92). The series, painted for the Gonzaga of Mantua, is in the Royal Collection and hangs at Hampton Court Palace. It is a Renaissance imagining of a triumph, not a record of any particular one. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Andrea_Mantegna_(1431-1506)_-_The_Triumphs_of_Caesar,_9._Caesar_on_his_Chariot_-_RCIN_403966_-_Royal_Collection.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Arma virumque canō, Trōiae quī prīmus ab ōrīs<br>Ītaliam, fātō profugus, Lāvīniaque vēnit<br>lītora …</p>
    <p>“Arms I sing, and the man who first from the shores of Troy came to Italy, an exile by fate, and to the Lavinian shores …” Virgil, <em>Aeneid</em> 1.1–3, checked against the copy in the course’s source files. <span class="la">canō</span> is present; <span class="la">vēnit</span>, with its long <span class="la">ē</span>, is the perfect of <span class="la">veniō</span>: “he came”, the event the whole epic leads up to. <span class="la">Ītaliam</span> and <span class="la">lītora</span> are accusatives of goal without a preposition, a poetic licence.</p>
    <p class="la big">dein, cum mīlia multa fēcerimus,<br>conturbābimus illa …</p>
    <p>“Then, when we have made many thousands, we shall muddle them up …” Catullus 5.10–11, of kisses (the poem comes later in the course). <span class="la">fēcerimus</span> is most naturally taken as a future perfect: “when we shall have made”. English says “when we have made”, German <em>wenn wir … gegeben haben</em>; Latin keeps the logic of time strictly. Some editors take it as a perfect subjunctive; the two forms differ in only a few persons.</p>
    <p>And in Cicero’s opening attack on Catiline (<em>In Catilinam</em> 1.1): <span class="la">nihil hōrum ōra voltusque mōvērunt?</span>, “have the faces and expressions of these men not moved you at all?”: <span class="la">mōvērunt</span>, perfect of <span class="la">moveō</span>.</p>
  `,

  pronunciation: `
    <h3>venit or vēnit?</h3>
    <p>Many perfects differ from the present only in the length of the stem vowel: <span class="la">venit</span> “he comes”, <span class="la">vēnit</span> “he came”; <span class="la">legit</span> “he reads”, <span class="la">lēgit</span> “he read”; <span class="la">fugit</span> and <span class="la">fūgit</span>; <span class="la">emit</span> and <span class="la">ēmit</span>. In writing without macrons the context must decide; in speech the long vowel was heard, as German <em>Stadt</em> and <em>Staat</em> are told apart.</p>
    <h3>Where the stress falls</h3>
    <p>The ordinary rule applies. <span class="la">a-mā-VIS-tī</span> (heavy penult), <span class="la">a-mā-VĒ-runt</span> (long ē), but <span class="la">a-MĀ-ve-ram</span> and <span class="la">a-MĀ-ve-rō</span>, because the <span class="la">e</span> of the pluperfect and future perfect is short. <span class="la">fu-Ē-runt</span>, <span class="la">FU-e-ram</span>.</p>
    <h3>-ērunt and -ēre</h3>
    <p>Poets often use <span class="la">-ēre</span> for <span class="la">-ērunt</span>: <span class="la">vēnēre = vēnērunt</span>. Do not mistake it for an infinitive: <span class="la">venīre</span> “to come” has a short <span class="la">e</span> in the stem and a long <span class="la">ī</span> in the ending.</p>
  `,

  grammar: [
    {
      title: '1. The perfect stem',
      html: `
        <p>Take the third principal part and remove <span class="la">-ī</span>:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Verb</th><th>3rd principal part</th><th>Perfect stem</th></tr></thead>
          <tbody>
            <tr><td class="la">amō</td><td class="la">amāvī</td><td class="la">amāv-</td></tr>
            <tr><td class="la">moneō</td><td class="la">monuī</td><td class="la">monu-</td></tr>
            <tr><td class="la">regō</td><td class="la">rēxī</td><td class="la">rēx-</td></tr>
            <tr><td class="la">capiō</td><td class="la">cēpī</td><td class="la">cēp-</td></tr>
            <tr><td class="la">audiō</td><td class="la">audīvī</td><td class="la">audīv-</td></tr>
            <tr><td class="la">sum</td><td class="la">fuī</td><td class="la">fu-</td></tr>
            <tr><td class="la">possum</td><td class="la">potuī</td><td class="la">potu-</td></tr>
          </tbody>
        </table></div>
        <p>The stem cannot be predicted from the present with certainty, which is why the principal parts must be learnt. But most stems fall into a few types:</p>
        <ul>
          <li><strong>-v- or -u-:</strong> <span class="la">amāvī, audīvī, monuī, habuī</span>. Regular in the first and fourth conjugations, common in the second.</li>
          <li><strong>-s-</strong> (often hidden in <span class="la">x = c/g + s</span>): <span class="la">dīxī, rēxī, dūxī, scrīpsī, mīsī, mānsī</span>.</li>
          <li><strong>Lengthened vowel</strong>, sometimes changed: <span class="la">vēnī, vīdī, lēgī, ēmī, fūgī; ēgī</span> (from <span class="la">agō</span>), <span class="la">fēcī, cēpī</span>.</li>
          <li><strong>Reduplication</strong>, a repeated first syllable: <span class="la">dedī</span> (<span class="la">dō</span>), <span class="la">stetī</span> (<span class="la">stō</span>), <span class="la">cucurrī</span> (<span class="la">currō</span>), <span class="la">cecidī</span> (<span class="la">cadō</span>), <span class="la">didicī</span> (<span class="la">discō</span>).</li>
          <li><strong>No change:</strong> <span class="la">vertī, dēfendī</span>.</li>
        </ul>
        <p>The types are a help in recognising forms, not rules for making them: <span class="la">vīvō</span> has <span class="la">vīxī</span>, <span class="la">petō</span> has <span class="la">petīvī</span>.</p>
      `
    },
    {
      title: '2. The perfect',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Ending</th><th>amō</th><th>dūcō</th><th>sum</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">-ī</td><td class="la">amāvī</td><td class="la">dūxī</td><td class="la">fuī</td></tr>
            <tr><th>2nd sg.</th><td class="la">-istī</td><td class="la">amāvistī</td><td class="la">dūxistī</td><td class="la">fuistī</td></tr>
            <tr><th>3rd sg.</th><td class="la">-it</td><td class="la">amāvit</td><td class="la">dūxit</td><td class="la">fuit</td></tr>
            <tr><th>1st pl.</th><td class="la">-imus</td><td class="la">amāvimus</td><td class="la">dūximus</td><td class="la">fuimus</td></tr>
            <tr><th>2nd pl.</th><td class="la">-istis</td><td class="la">amāvistis</td><td class="la">dūxistis</td><td class="la">fuistis</td></tr>
            <tr><th>3rd pl.</th><td class="la">-ērunt (-ēre)</td><td class="la">amāvērunt</td><td class="la">dūxērunt</td><td class="la">fuērunt</td></tr>
          </tbody>
        </table></div>
        <p>These endings belong to the perfect alone: no other tense has <span class="la">-istī</span> or <span class="la">-ērunt</span>. Note that <span class="la">-imus</span> and <span class="la">-it</span> also occur in the present of the third conjugation; <span class="la">dūcit</span> “he leads” and <span class="la">dūxit</span> “he led” differ only in the stem.</p>
        <p><strong>Meaning:</strong> a completed action. <span class="la">Epistulam scrīpsī</span> is “I wrote the letter” (narrative) or “I have written the letter” (it is now done). The imperfect, by contrast, describes the background or the repeated action: <span class="la">epistulam scrībēbam</span>, “I was writing the letter”. A useful test: if German could use either the Präteritum or the Perfekt, Latin uses the perfect; if the action was going on or kept happening, the imperfect.</p>
        <p>Forms in <span class="la">-v-</span> are often shortened in writing and speech: <span class="la">amāstī</span> for <span class="la">amāvistī</span>, <span class="la">audiit</span> for <span class="la">audīvit</span>, <span class="la">nōrunt</span> for <span class="la">nōvērunt</span>. Recognise them; you need not use them.</p>
      `
    },
    {
      title: '3. The pluperfect',
      html: `
        <p>Perfect stem + <span class="la">-eram, -erās, -erat, -erāmus, -erātis, -erant</span>: the imperfect of <span class="la">sum</span> used as an ending.</p>
        <p><span class="la">amāveram</span> “I had loved”, <span class="la">dūxerat</span> “he had led”, <span class="la">fuerant</span> “they had been”, <span class="la">potuerāmus</span> “we had been able”.</p>
        <p>It places an action before another past action, exactly as German <em>hatte … geschrieben</em> and English <em>had written</em>: <span class="la">Nautae mē monuerant, sed ego nāvigāvī</span>, “The sailors had warned me, but I sailed.”</p>
      `
    },
    {
      title: '4. The future perfect',
      html: `
        <p>Perfect stem + <span class="la">-erō, -eris, -erit, -erimus, -eritis, -erint</span>: the future of <span class="la">sum</span>, except the third person plural <span class="la">-erint</span> (not <span class="la">-erunt</span>).</p>
        <p><span class="la">amāverō</span> “I shall have loved”, <span class="la">vēneris</span> “you will have come”, <span class="la">fuerint</span> “they will have been”.</p>
        <p>It places an action before another future action. Its main use is in clauses with “if”, “when”, “as soon as” referring to the future, where English and German use a present or perfect:</p>
        <ul>
          <li><span class="la">Sī vēneris, laetī erimus.</span> If you come (lit. will have come), we shall be glad.</li>
          <li><span class="la">Ubi librum lēgeris, tibi alium dabō.</span> When you have read the book, I shall give you another.</li>
        </ul>
        <p>German has a Futur II (<em>du wirst gelesen haben</em>), but uses it mainly for guesses about the past (<em>er wird es vergessen haben</em>). The Latin future perfect has no such sense; it is simply the precise tense for “already done at a future moment”. Be careful when translating from English: “if you come” about the future is often <span class="la">sī vēneris</span>.</p>
      `
    },
    {
      title: '5. The tense system complete',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Present system</th><th>Perfect system</th></tr></thead>
          <tbody>
            <tr><th>Present / Perfect</th><td class="la">mittit</td><td class="la">mīsit</td></tr>
            <tr><th>Imperfect / Pluperfect</th><td class="la">mittēbat</td><td class="la">mīserat</td></tr>
            <tr><th>Future / Future perfect</th><td class="la">mittet</td><td class="la">mīserit</td></tr>
          </tbody>
        </table></div>
        <p>The six tenses of the Latin active indicative fall into two parallel systems: three built on the present stem (Lectures I–XI) and three on the perfect stem. The perfect-system endings are the same for every verb; only the stem varies.</p>
      `
    }
  ],

  vocab: [
    { id: 'cado', head: 'cadō', la: 'cadō, cadere, cecidī, cāsūrum', pos: 'verb, 3rd conj.', en: 'fall', stress: 'CA-dō · CA-de-re', deriv: 'cadence, case, decay', note: 'Reduplicated perfect.' },
    { id: 'curro', head: 'currō', la: 'currō, currere, cucurrī, cursum', pos: 'verb, 3rd conj.', en: 'run', stress: 'CUR-rō · CUR-re-re', deriv: 'current, course', note: 'Reduplicated perfect.' },
    { id: 'sto', head: 'stō', la: 'stō, stāre, stetī, statum', pos: 'verb, 1st conj.', en: 'stand', stress: 'STŌ · STĀ-re', deriv: 'station, statue; stehen', note: 'A first-conjugation verb with an irregular perfect.' },
    { id: 'pono', head: 'pōnō', la: 'pōnō, pōnere, posuī, positum', pos: 'verb, 3rd conj.', en: 'put, place, set', stress: 'PŌ-nō · PŌ-ne-re', deriv: 'position, deposit', note: 'Perfect stem with short o: posu-.' },
    { id: 'quaero', head: 'quaerō', la: 'quaerō, quaerere, quaesīvī, quaesītum', pos: 'verb, 3rd conj.', en: 'seek, look for; ask', stress: 'QUAE-rō · QUAE-re-re', deriv: 'query, inquest', note: 'Horace’s quaesierīs (Lecture XII) is from this verb.' },
    { id: 'relinquo', head: 'relinquō', la: 'relinquō, relinquere, relīquī, relictum', pos: 'verb, 3rd conj.', en: 'leave behind, abandon', stress: 're-LIN-quō · re-LIN-que-re', deriv: 'relic, relinquish', note: 'The n of the present disappears in the perfect.' },
    { id: 'verto', head: 'vertō', la: 'vertō, vertere, vertī, versum', pos: 'verb, 3rd conj.', en: 'turn', stress: 'VER-tō · VER-te-re', deriv: 'convert, verse', note: 'Perfect identical with the stem.' },
    { id: 'defendo', head: 'dēfendō', la: 'dēfendō, dēfendere, dēfendī, dēfēnsum', pos: 'verb, 3rd conj.', en: 'defend, ward off', stress: 'dē-FEN-dō · dē-FEN-de-re', deriv: 'defend, defence' },
    { id: 'ascendo', head: 'ascendō', la: 'ascendō, ascendere, ascendī, ascēnsum', pos: 'verb, 3rd conj.', en: 'climb, go up, board (a ship)', stress: 'a-SCEN-dō · a-SCEN-de-re', deriv: 'ascend' },
    { id: 'tempestas', head: 'tempestās', la: 'tempestās, tempestātis', g: 'f', pos: 'noun, 3rd decl.', en: 'storm; weather, season', stress: 'tem-PES-tās · tem-pes-TĀ-tis', deriv: 'tempest', note: 'From tempus: originally “a period of time”, then “weather”.' },
    { id: 'unda', head: 'unda', la: 'unda, undae', g: 'f', pos: 'noun, 1st decl.', en: 'wave', stress: 'UN-da', deriv: 'undulate, abound' },
    { id: 'iam', head: 'iam', la: 'iam', pos: 'adverb', en: 'now, already; nōn iam: no longer', stress: 'IAM' },
    { id: 'antea', head: 'anteā', la: 'anteā', pos: 'adverb', en: 'before, previously', stress: 'AN-te-ā', note: 'ante + eā.' },
    { id: 'deinde', head: 'deinde', la: 'deinde (dein)', pos: 'adverb', en: 'then, next, afterwards', stress: 'DEIN-de', note: 'Usually two syllables: dein-de. Catullus 5 uses both forms.' },
    { id: 'semel', head: 'semel', la: 'semel', pos: 'adverb', en: 'once, a single time', stress: 'SE-mel' },
    { id: 'ubi2', head: 'ubi (conj.)', la: 'ubi', pos: 'conjunction', en: 'when, as soon as', stress: 'U-bi', note: 'Also “where” (Lecture IV). With the future perfect: ubi vēneris, “when you come”.' }
  ],

  grammarCards: [
    { id: 'g13-stem', front: 'How do you find the perfect stem?', back: 'Third principal part minus -ī: amāvī → amāv-' },
    { id: 'g13-perf', front: 'Perfect endings', back: '-ī, -istī, -it, -imus, -istis, -ērunt (-ēre)' },
    { id: 'g13-plup', front: 'Pluperfect endings', back: '-eram, -erās, -erat, -erāmus, -erātis, -erant' },
    { id: 'g13-futp', front: 'Future perfect endings', back: '-erō, -eris, -erit, -erimus, -eritis, -erint' },
    { id: 'g13-erint', front: 'Future perfect 3rd pl.: -erunt or -erint?', back: '-erint (amāverint): unlike erunt, the future of sum' },
    { id: 'g13-sum', front: 'sum: perfect, pluperfect, future perfect (1st sg.)', back: 'fuī, fueram, fuerō' },
    { id: 'g13-possum', front: 'possum: perfect', back: 'potuī, potuistī, potuit …' },
    { id: 'g13-meaning', front: 'vīdī: two translations', back: 'I saw; I have seen' },
    { id: 'g13-impf', front: 'scrībēbam vs scrīpsī', back: 'I was writing / used to write (imperfect) vs I wrote, have written (perfect)' },
    { id: 'g13-venit', front: 'venit vs vēnit', back: 'he comes (present) vs he came (perfect): only the vowel length differs' },
    { id: 'g13-types', front: 'Five types of perfect stem', back: '-v-/-u- (amāvī); -s- (dīxī); lengthened vowel (vēnī); reduplication (dedī); unchanged (vertī)' },
    { id: 'g13-redup', front: 'Perfects of dō, stō, currō, cadō, discō', back: 'dedī, stetī, cucurrī, cecidī, didicī' },
    { id: 'g13-si', front: 'Sī vēneris, laetī erimus.', back: 'If you come (will have come), we shall be glad: future perfect in the if-clause.' },
    { id: 'g13-ere', front: 'vēnēre', back: '= vēnērunt (poetic perfect), not an infinitive' },
    { id: 'g13-short', front: 'amāstī, audiit', back: 'Shortened forms of amāvistī, audīvit' },
    { id: 'g13-caesar', front: 'Vēnī, vīdī, vīcī', back: 'I came, I saw, I conquered: Caesar after Zela, 47 BC (Suetonius, Plutarch).' },
    { id: 'g13-aeneid', front: 'Trōiae quī prīmus ab ōrīs Ītaliam … vēnit', back: 'who first came from the shores of Troy to Italy (Aeneid 1.1–2)' },
    { id: 'g13-aorist', front: 'Why does the Latin perfect mean both “I did” and “I have done”?', back: 'It merged two older tenses, the aorist and the perfect, which Greek kept apart.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">vēnērunt</span> means:', options: ['they came / have come', 'they come', 'they will come', 'they had come'], answer: 0, explain: 'Perfect 3rd plural.' },
    { id: 'e2', type: 'mc', prompt: 'Which form is pluperfect?', options: ['vīderat', 'vīdit', 'vidēbit', 'vīderit'], answer: 0, explain: '-erat: “he had seen”.' },
    { id: 'e3', type: 'mc', prompt: 'The perfect stem of <span class="la">dūcō, dūcere, dūxī, ductum</span> is:', options: ['dūx-', 'dūc-', 'duct-', 'dūce-'], answer: 0, explain: 'Third principal part minus -ī.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">vēnit</span> (with long ē) means:', options: ['he came', 'he comes', 'he will come', 'he had come'], answer: 0, explain: 'The long vowel marks the perfect.' },
    { id: 'e5', type: 'mc', prompt: 'Future perfect 3rd plural of <span class="la">amō</span>:', options: ['amāverint', 'amāverunt', 'amāvērunt', 'amāverant'], answer: 0, explain: '-erint.' },
    { id: 'e6', type: 'mc', prompt: '“I have seen” in Latin:', options: ['vīdī', 'videō', 'vīderam', 'vidēbam'], answer: 0, explain: 'The perfect covers “I saw” and “I have seen”.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Herī Lūcius ad vīllam vēn___.</span>', hint: 'came', answers: ['it'], full: 'Herī Lūcius ad vīllam vēnit.', explain: 'Perfect 3rd singular.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Puerī librōs lēg___.</span>', hint: 'have read', answers: ['ērunt', 'erunt', 'ēre'], full: 'Puerī librōs lēgērunt.', explain: 'Perfect 3rd plural.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Tū epistulam scrīps___?</span>', hint: 'did you write', answers: ['istī', 'isti'], full: 'Tū epistulam scrīpsistī?', explain: 'Perfect 2nd singular.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Nōs Rōmam vīd___.</span>', hint: 'we saw', answers: ['imus'], full: 'Nōs Rōmam vīdimus.', explain: 'Perfect 1st plural.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Nautae mē monu___.</span>', hint: 'had warned', answers: ['erant'], full: 'Nautae mē monuerant.', explain: 'Pluperfect 3rd plural.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Sī hoc fēc___, laetus erō.</span>', hint: 'you (sg.) do / will have done', answers: ['eris'], full: 'Sī hoc fēceris, laetus erō.', explain: 'Future perfect 2nd singular in the if-clause.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the perfect and pluperfect of <span class="la">amō</span>.', headers: ['Perfect', 'Pluperfect'], rows: [
      { label: '1st sg.', answers: ['amāvī', 'amāveram'] },
      { label: '2nd sg.', answers: ['amāvistī|amāstī', 'amāverās'] },
      { label: '3rd sg.', answers: ['amāvit', 'amāverat'] },
      { label: '1st pl.', answers: ['amāvimus', 'amāverāmus'] },
      { label: '2nd pl.', answers: ['amāvistis|amāstis', 'amāverātis'] },
      { label: '3rd pl.', answers: ['amāvērunt|amāvēre', 'amāverant'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the perfect and future perfect of <span class="la">sum</span>.', headers: ['Perfect', 'Future perfect'], rows: [
      { label: '1st sg.', answers: ['fuī', 'fuerō'] },
      { label: '2nd sg.', answers: ['fuistī', 'fueris'] },
      { label: '3rd sg.', answers: ['fuit', 'fuerit'] },
      { label: '1st pl.', answers: ['fuimus', 'fuerimus'] },
      { label: '2nd pl.', answers: ['fuistis', 'fueritis'] },
      { label: '3rd pl.', answers: ['fuērunt|fuēre', 'fuerint'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each verb to its perfect.', pairs: [
      ['dūcō', 'dūxī'], ['videō', 'vīdī'], ['dō', 'dedī'], ['capiō', 'cēpī'], ['mittō', 'mīsī']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Caesar vēnit, vīdit, vīcit.', tokens: ['Caesar', 'came,', 'saw,', 'conquered'], explain: 'Three perfects without “and”.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Puerī epistulam Lūciī lēgērunt.', model: 'The boys read Lucius’s letter.', accepted: ['boys read lucius’s letter', 'boys read lucius\'s letter', 'boys have read lucius’s letter', 'boys have read lucius\'s letter', 'boys read letter of lucius', 'boys have read letter of lucius', 'boys read luciuss letter', 'boys have read luciuss letter'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Sī vēneris, laetī erimus.', model: 'If you come, we shall be glad.', accepted: ['if you come we shall be glad', 'if you come we will be glad', 'if you come we shall be happy', 'if you come we will be happy', 'if you have come we shall be glad', 'if you have come we will be glad', 'if you have come we shall be happy', 'if you have come we will be happy', 'if you will have come we shall be happy', 'if you will have come we will be happy'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Mīlitēs urbem nōn cēperant.', model: 'The soldiers had not captured the city.', accepted: ['soldiers had not captured city', 'soldiers had not taken city', 'soldiers had not seized city'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'I came.', model: 'Vēnī.', accepted: ['vēnī', 'ego vēnī'], explain: 'The perfect stem lengthens the vowel: ven- > vēn-. The saying attributed to Caesar, vēnī, vīdī, vīcī, has three such perfects.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'They have written.', model: 'Scrīpsērunt.', accepted: ['scrīpsērunt', 'scrīpsēre'], explain: 'Perfect stem scrīps- (b + s > ps) with -ērunt; the shorter -ēre is mainly poetic.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'We had been.', model: 'Fuerāmus.', accepted: ['fuerāmus'], explain: 'Pluperfect = perfect stem fu- + the imperfect forms of sum (erāmus).' },
    { id: 'e23', type: 'mc', prompt: 'According to Suetonius, <span class="la">vēnī, vīdī, vīcī</span> was displayed in Caesar’s triumph over:', options: ['Pharnaces, king of Pontus', 'the Gauls', 'Pompey', 'Cleopatra'], answer: 0, explain: 'The victory at Zela, 47 BC.' },
    { id: 'e24', type: 'mc', prompt: 'In Catullus’ <span class="la">cum mīlia multa fēcerimus</span>, <span class="la">fēcerimus</span> is most naturally:', options: ['future perfect: “we shall have made”', 'perfect: “we made”', 'pluperfect: “we had made”', 'present: “we make”'], answer: 0, explain: 'Some editors take it as a perfect subjunctive; the forms are close.' },
    { id: 'e25', type: 'mc', prompt: 'Which German tense corresponds in form to the Latin future perfect?', options: ['Futur II (wird gekommen sein)', 'Plusquamperfekt', 'Präteritum', 'Konjunktiv II'], answer: 0, explain: 'But German uses it mostly for guesses about the past.' }
  ],

  reading: {
    title: 'Tempestās',
    note: 'Original passage: Lucius tells the story of his voyage home. Tap any word.',
    text: 'Post cēnam Gāius Lūcium interrogāvit: “Quōmodo ē Graeciā vēnistī? Fābulam nōbīs nōndum nārrāvistī!” Lūcius rīsit et respondit: “Audīte! Hiemem in Graeciā ēgī. Vēre autem vīnum bonum ēmī, scapham parāvī et cum nautīs meīs ad Italiam nāvigāvī. Prīmō ventus secundus fuit, et nōs laetī cantāvimus. Sed subitō magna tempestās vēnit. Undae scapham vexāvērunt, et Philippus, nauta meus, in aquam cecidit. Ego rēmum eī dedī, et ille in scapham iterum ascendit. Tandem ad īnsulam parvam vēnimus et ibi diū mānsimus. Nautae mē anteā monuerant: ‘Nōlī tam mātūrē nāvigāre!’ Sed ego eōs nōn audīveram. Vīnum servāvimus, sed pecūniam meam relīquī in undīs. Tamen vīvō, et nunc vōbīscum sum!” Mārcus rīsit: “Ut Caesar dīxit: vēnistī, vīdistī, vīcistī, et tempestātem et undās!” Tum Quīntus clāmāvit: “Ego quoque nāvigāre cupiō!” Et Mārcus: “Ubi librōs Lūciī lēgeris, tē in Graeciam mittam.”',
    translation: 'After dinner Gaius asked Lucius: “How did you come from Greece? You haven’t told us the story yet!” Lucius laughed and answered: “Listen! I spent the winter in Greece. But in spring I bought good wine, got a boat ready and sailed to Italy with my sailors. At first the wind was favourable, and we sang happily. But suddenly a great storm came. The waves battered the boat, and Philippus, my sailor, fell into the water. I gave him an oar, and he climbed into the boat again. At last we came to a small island and stayed there for a long time. The sailors had warned me before: ‘Don’t sail so early!’ But I had not listened to them. We saved the wine, but I left my money behind in the waves. Still, I am alive, and now I am with you!” Marcus laughed: “As Caesar said: you came, you saw, you conquered, both the storm and the waves!” Then Quintus shouted: “I want to sail too!” And Marcus: “When you have read Lucius’s books, I shall send you to Greece.”',
    notes: [
      { ref: 'Post cēnam Gāius Lūcium interrogāvit', html: 'The first perfect of the story: a single event, “asked”. Compare the imperfect of the earlier readings.' },
      { ref: 'Quōmodo ē Graeciā vēnistī?', html: '<span class="la">quōmodo</span>: “how?” (<span class="la">quō modō</span>, “in what way”). <span class="la">vēnistī</span>: perfect 2nd singular, long <span class="la">ē</span>.' },
      { ref: 'Fābulam nōbīs nōndum nārrāvistī!', html: 'Here the perfect has the sense of the English present perfect: “you have not yet told”. <span class="la">nōndum</span> = <span class="la">nōn</span> + <span class="la">dum</span>, “not yet”.' },
      { ref: 'Lūcius rīsit et respondit', html: 'Perfects of <span class="la">rīdeō</span> (<span class="la">rīsī</span>, an s-perfect: <span class="la">rīd-s-ī</span>) and <span class="la">respondeō</span> (<span class="la">respondī</span>).' },
      { ref: 'Hiemem in Graeciā ēgī', html: '<span class="la">agō</span> with a word of time means “spend”: “I spent the winter”. <span class="la">ēgī</span>: lengthened and changed vowel.' },
      { ref: 'Vēre autem vīnum bonum ēmī', html: '<span class="la">vēre</span>: ablative of <span class="la">vēr</span>, “in spring”. <span class="la">ēmī</span>: perfect of <span class="la">emō</span>. In Lecture IX Lucius promised exactly this.' },
      { ref: 'Prīmō ventus secundus fuit', html: '<span class="la">secundus</span> means “following”, hence “second” and also of a wind “favourable, following”. <span class="la">fuit</span>: perfect of <span class="la">sum</span>, the wind was favourable for a stretch that is now over.' },
      { ref: 'Undae scapham vexāvērunt', html: 'Perfect 3rd plural, <span class="la">-ērunt</span>.' },
      { ref: 'in aquam cecidit', html: '<span class="la">in</span> + accusative: motion into. <span class="la">cecidit</span>: reduplicated perfect of <span class="la">cadō</span>.' },
      { ref: 'Ego rēmum eī dedī', html: '<span class="la">dedī</span>: reduplicated perfect of <span class="la">dō</span>. <span class="la">eī</span>: “to him” (Lecture XII).' },
      { ref: 'ibi diū mānsimus', html: 'A completed stay, however long: Latin uses the perfect. German also: <em>wir blieben lange dort</em>.' },
      { ref: 'Nautae mē anteā monuerant', html: 'Pluperfect: the warning came before the voyage. <span class="la">tam mātūrē</span>: “so early”.' },
      { ref: 'Sed ego eōs nōn audīveram', html: 'Pluperfect of <span class="la">audiō</span>: “I had not listened to them”.' },
      { ref: 'pecūniam meam relīquī in undīs', html: '<span class="la">relīquī</span>: perfect of <span class="la">relinquō</span>, without the <span class="la">n</span>.' },
      { ref: 'vēnistī, vīdistī, vīcistī', html: 'Marcus turns Caesar’s words into the second person. <span class="la">et … et</span>: “both … and”.' },
      { ref: 'Ubi librōs Lūciī lēgeris, tē in Graeciam mittam', html: 'Future perfect in the <span class="la">ubi</span>-clause, future in the main clause: “when you have read … I shall send”. German: <em>wenn du … gelesen hast, schicke ich dich …</em>.' }
    ],
    glosses: {
      'post': 'after (+ acc.)', 'cēnam': 'acc. of cēna: dinner', 'gāius': 'Gaius (nom.)', 'lūcium': 'acc. of Lūcius', 'interrogāvit': 'perf. 3rd sg. of interrogō: asked',
      'quōmodo': 'how?', 'ē': 'out of, from (+ abl.)', 'graeciā': 'abl. of Graecia: Greece', 'vēnistī': 'perf. 2nd sg. of veniō: you came', 'fābulam': 'acc. of fābula: story', 'nōbīs': 'dat. of nōs: to us', 'nōndum': 'not yet', 'nārrāvistī': 'perf. 2nd sg. of nārrō: you have told',
      'lūcius': 'Lucius (nom.)', 'rīsit': 'perf. 3rd sg. of rīdeō: laughed', 'et': 'and', 'respondit': 'perf. 3rd sg. of respondeō: answered', 'audīte': 'imperative pl. of audiō: listen!',
      'hiemem': 'acc. of hiems: winter', 'in': 'in (+ abl.); into (+ acc.)', 'ēgī': 'perf. 1st sg. of agō: I spent', 'vēre': 'abl. of vēr: in spring', 'autem': 'but, however', 'vīnum': 'wine (acc.)', 'bonum': 'acc. n. of bonus: good', 'ēmī': 'perf. 1st sg. of emō: I bought', 'scapham': 'acc. of scapha: boat', 'parāvī': 'perf. 1st sg. of parō: I prepared', 'cum': 'with (+ abl.)', 'nautīs': 'abl. pl. of nauta: sailors', 'meīs': 'abl. pl. of meus: my', 'ad': 'to (+ acc.)', 'italiam': 'acc. of Italia: Italy', 'nāvigāvī': 'perf. 1st sg. of nāvigō: I sailed',
      'prīmō': 'at first', 'ventus': 'wind (nom.)', 'secundus': 'favourable, following', 'fuit': 'perf. 3rd sg. of sum: was', 'nōs': 'we', 'laetī': 'nom. pl. of laetus: happy', 'cantāvimus': 'perf. 1st pl. of cantō: we sang',
      'sed': 'but', 'subitō': 'suddenly', 'magna': 'nom. f. of magnus: great', 'tempestās': 'storm (nom.)', 'vēnit': 'perf. 3rd sg. of veniō: came',
      'undae': 'nom. pl. of unda: waves', 'vexāvērunt': 'perf. 3rd pl. of vexō: battered', 'philippus': 'Philippus (nom.)', 'nauta': 'sailor (nom.)', 'meus': 'my', 'aquam': 'acc. of aqua: water', 'cecidit': 'perf. 3rd sg. of cadō: fell',
      'ego': 'I', 'rēmum': 'acc. of rēmus: oar', 'eī': 'dat. of is: to him', 'dedī': 'perf. 1st sg. of dō: I gave', 'ille': 'he', 'iterum': 'again', 'ascendit': 'perf. 3rd sg. of ascendō: climbed',
      'tandem': 'at last', 'īnsulam': 'acc. of īnsula: island', 'parvam': 'acc. f. of parvus: small', 'vēnimus': 'perf. 1st pl. of veniō: we came', 'ibi': 'there', 'diū': 'for a long time', 'mānsimus': 'perf. 1st pl. of maneō: we stayed',
      'nautae': 'nom. pl. of nauta: sailors', 'mē': 'acc. of ego: me', 'anteā': 'before', 'monuerant': 'plupf. 3rd pl. of moneō: had warned', 'nōlī': 'don’t (+ inf.)', 'tam': 'so', 'mātūrē': 'early', 'nāvigāre': 'to sail',
      'eōs': 'acc. pl. of is: them', 'nōn': 'not', 'audīveram': 'plupf. 1st sg. of audiō: I had listened to',
      'servāvimus': 'perf. 1st pl. of servō: we saved', 'pecūniam': 'acc. of pecūnia: money', 'meam': 'acc. f. of meus: my', 'relīquī': 'perf. 1st sg. of relinquō: I left behind', 'undīs': 'abl. pl. of unda: waves',
      'tamen': 'nevertheless, still', 'vīvō': 'I live, I am alive', 'nunc': 'now', 'vōbīscum': 'with you (pl.)', 'sum': 'I am',
      'mārcus': 'Marcus (nom.)', 'ut': 'as', 'caesar': 'Caesar (nom.)', 'dīxit': 'perf. 3rd sg. of dīcō: said', 'vīdistī': 'perf. 2nd sg. of videō: you saw', 'vīcistī': 'perf. 2nd sg. of vincō: you conquered', 'tempestātem': 'acc. of tempestās: storm', 'undās': 'acc. pl. of unda: waves',
      'tum': 'then', 'quīntus': 'Quintus (nom.)', 'clāmāvit': 'perf. 3rd sg. of clāmō: shouted', 'quoque': 'also, too', 'cupiō': 'I want',
      'ubi': 'when', 'librōs': 'acc. pl. of liber: books', 'lūciī': 'gen. of Lūcius: of Lucius', 'lēgeris': 'fut. perf. 2nd sg. of legō: you will have read', 'tē': 'acc. of tū: you', 'graeciam': 'acc. of Graecia: Greece', 'mittam': 'fut. 1st sg. of mittō: I shall send'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Where did Lucius spend the winter?', options: ['In Greece', 'In Rome', 'On an island', 'At sea'], answer: 0, explain: 'Hiemem in Graeciā ēgī.' },
      { id: 'r2', type: 'mc', prompt: 'What happened to Philippus?', options: ['He fell into the water', 'He stole the wine', 'He stayed in Greece', 'He steered the boat to Rome'], answer: 0, explain: 'in aquam cecidit.' },
      { id: 'r3', type: 'mc', prompt: 'What had the sailors told Lucius?', options: ['Not to sail so early', 'To buy more wine', 'To go to Athens', 'To stay on the island'], answer: 0, explain: 'Nōlī tam mātūrē nāvigāre!' },
      { id: 'r4', type: 'mc', prompt: 'What did Lucius lose?', options: ['His money', 'The wine', 'His books', 'His boat'], answer: 0, explain: 'Vīnum servāvimus, sed pecūniam meam relīquī in undīs.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">dīxistī</span>:', options: ['you said / have said', 'you say', 'you had said', 'you will say'], answer: 0, explain: '-istī: perfect 2nd singular.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">potuerant</span>:', options: ['they had been able', 'they have been able', 'they will be able', 'they were able (imperfect)'], answer: 0, explain: 'Pluperfect of possum.' },
      { id: 't3', type: 'mc', prompt: 'Perfect of <span class="la">stō</span>:', options: ['stetī', 'stāvī', 'stāsī', 'stō'], answer: 0, explain: 'Reduplicated.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Mīlitēs urbem dēfend___.</span>', hint: 'defended', answers: ['ērunt', 'erunt', 'ēre'], full: 'Mīlitēs urbem dēfendērunt.', explain: 'Perfect 3rd plural; the stem dēfend- is unchanged.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Ubi vēn___, tē exspectābō.</span>', hint: 'you (sg.) come (fut. perf.)', answers: ['eris'], full: 'Ubi vēneris, tē exspectābō.', explain: 'Future perfect in the ubi-clause.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Lūcius pecūniam relīquit.', model: 'Lucius left the money behind.', accepted: ['lucius left money behind', 'lucius left money', 'lucius has left money behind', 'lucius has left money', 'lucius abandoned money', 'lucius left behind money'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'You (sg.) were (perfect).', model: 'Fuistī.', accepted: ['fuistī', 'tū fuistī'], explain: 'Perfect of sum from the stem fu-, with the second person singular ending -istī.' },
      { id: 't8', type: 'mc', prompt: 'Which form is future perfect?', options: ['cēperit', 'cēpit', 'cēperat', 'capiet'], answer: 0, explain: '-erit: “he will have taken”.' },
      { id: 't9', type: 'mc', prompt: '<span class="la">legit</span> and <span class="la">lēgit</span> differ in:', options: ['tense: present vs perfect', 'person', 'number', 'nothing'], answer: 0, explain: 'The long ē marks the perfect.' },
      { id: 't10', type: 'mc', prompt: 'In <span class="la">Ītaliam … vēnit</span> (Aeneid 1.2), who came?', options: ['Aeneas, the man from Troy', 'Caesar', 'Virgil', 'Juno'], answer: 0, explain: 'virum … quī prīmus ab ōrīs Trōiae.' },
      { id: 't11', type: 'mc', prompt: 'Perfect of <span class="la">relinquō</span>:', options: ['relīquī', 'relinquī', 'relinxī', 'relictī'], answer: 0, explain: 'The n disappears; the vowel is lengthened.' }
    ]
  },

  reference: [
    { title: 'Perfect system endings', headers: ['', 'Perfect', 'Pluperfect', 'Future perfect'], rows: [
      ['1st sg.', '-ī', '-eram', '-erō'], ['2nd sg.', '-istī', '-erās', '-eris'], ['3rd sg.', '-it', '-erat', '-erit'], ['1st pl.', '-imus', '-erāmus', '-erimus'], ['2nd pl.', '-istis', '-erātis', '-eritis'], ['3rd pl.', '-ērunt (-ēre)', '-erant', '-erint']
    ] },
    { title: 'Principal parts so far: irregular perfects', headers: ['Verb', 'Perfect', 'Supine'], rows: [
      ['agō', 'ēgī', 'āctum'], ['capiō', 'cēpī', 'captum'], ['dīcō', 'dīxī', 'dictum'], ['discō', 'didicī', '—'], ['dō', 'dedī', 'datum'], ['dūcō', 'dūxī', 'ductum'], ['emō', 'ēmī', 'ēmptum'], ['faciō', 'fēcī', 'factum'], ['fugiō', 'fūgī', 'fugitūrum'], ['legō', 'lēgī', 'lēctum'], ['maneō', 'mānsī', 'mānsum'], ['mittō', 'mīsī', 'missum'], ['moveō', 'mōvī', 'mōtum'], ['petō', 'petīvī', 'petītum'], ['possum', 'potuī', '—'], ['regō', 'rēxī', 'rēctum'], ['rīdeō', 'rīsī', 'rīsum'], ['scrībō', 'scrīpsī', 'scrīptum'], ['sedeō', 'sēdī', 'sessum'], ['sum', 'fuī', 'futūrum'], ['veniō', 'vēnī', 'ventum'], ['videō', 'vīdī', 'vīsum'], ['vincō', 'vīcī', 'victum'], ['vīvō', 'vīxī', 'vīctum']
    ] },
    { title: 'amō in the perfect system', headers: ['', 'Perfect', 'Pluperfect', 'Future perfect'], rows: [
      ['1st sg.', 'amāvī', 'amāveram', 'amāverō'], ['2nd sg.', 'amāvistī', 'amāverās', 'amāveris'], ['3rd sg.', 'amāvit', 'amāverat', 'amāverit'], ['1st pl.', 'amāvimus', 'amāverāmus', 'amāverimus'], ['2nd pl.', 'amāvistis', 'amāverātis', 'amāveritis'], ['3rd pl.', 'amāvērunt', 'amāverant', 'amāverint']
    ] }
  ]
});
