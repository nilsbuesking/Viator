/*
 * Latin — Lecture XXXI: the perfect and pluperfect subjunctive; indirect questions;
 * the sequence of tenses.
 * Authentic reading: Pliny, Letters 6.16.11–12.
 * Content file only. Source texts (Pliny, Letters 6.16) checked against the text supplied by Nils;
 * length marks editorial. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-31',
  number: 31,
  title: 'An retrō flecteret',
  subtitle: 'Perfect and pluperfect subjunctive (amāverim, amāvissem); indirect questions; the sequence of tenses; authentic reading: Pliny 6.16.11–12',
  minutes: 75,

  intro: `
    <p>Latin has four subjunctive tenses, and this lecture completes the set. The perfect subjunctive <span class="la">amāverim</span> and the pluperfect subjunctive <span class="la">amāvissem</span> are formed regularly from the perfect stem, and the passive uses the participle with <span class="la">sim</span> or <span class="la">essem</span>.</p>
    <p>Their main use is in subordinate clauses, and the commonest of these is the <strong>indirect question</strong>: <span class="la">Quid facis?</span>, “What are you doing?”, becomes <span class="la">Rogō quid faciās</span>, “I ask what you are doing”, with the subjunctive. Which of the four tenses is used depends on two things: the tense of the main verb, and whether the action of the clause comes before, at the same time as, or after it. These rules are called the <strong>sequence of tenses</strong>. English applies something similar (“he asks what I <em>am</em> doing” but “he asked what I <em>was</em> doing”); German reported speech does not.</p>
    <p>The reading continues the Pliny letter: the ship meets falling ash and a blocked shore, Pliny hesitates <span class="la">an retrō flecteret</span>, “whether he should turn back”, and decides on Stabiae.</p>
  `,

  background: [
    {
      title: 'Pompōniānus at Stabiae',
      html: `
        <p>Unable to land at the foot of the mountain, the elder Pliny made for Stabiae, on the far side of the bay to the south, where his friend Pomponianus had a house. Nothing more is known of Pomponianus than this letter tells us; attempts to identify him with known members of the Pomponii are guesses. Stabiae had been a town before Sulla destroyed it in 89 BC; by AD 79 it was a row of large seaside villas on the ridge above the shore, several of which have been excavated (Villa San Marco, Villa Arianna).</p>
        <p>Pliny describes the trap clearly. Pomponianus had already loaded his belongings onto ships, but the wind that carried the elder Pliny in, <span class="la">secundissimus</span> for him, was <span class="la">contrārius</span> for anyone trying to sail out. He was waiting for it to drop.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Fresco_of_woman_with_lyre_Villa_San_Marco_in_Stabiae.jpg/960px-Fresco_of_woman_with_lyre_Villa_San_Marco_in_Stabiae.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Fresco_of_woman_with_lyre_Villa_San_Marco_in_Stabiae.jpg/500px-Fresco_of_woman_with_lyre_Villa_San_Marco_in_Stabiae.jpg|https://upload.wikimedia.org/wikipedia/commons/2/24/Fresco_of_woman_with_lyre_Villa_San_Marco_in_Stabiae.jpg" alt="Roman wall painting of a seated woman holding a lyre"><figcaption>Wall painting of a woman with a lyre from the Villa San Marco at Stabiae, one of the seaside villas buried in AD 79. Pomponianus’ house has not been identified. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Fresco_of_woman_with_lyre_Villa_San_Marco_in_Stabiae.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Aut hilaris aut similis hilarī',
      html: `
        <p>The elder Pliny bathes and dines, “either cheerful or (which is just as great) looking cheerful”. The nephew does not claim to know which; he offers both and says they are equal. Calm in the face of danger, especially calm that reassures others, was a central Roman virtue, and the scene recalls the exemplary deaths of Roman literature. The letter was written for Tacitus to use in his <em>Histories</em>, and Pliny shapes his uncle’s last hours accordingly. It is not therefore untrue, but it is a portrait, not a report.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Pompeii_family_feast_painting_Naples.jpg/960px-Pompeii_family_feast_painting_Naples.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Pompeii_family_feast_painting_Naples.jpg/500px-Pompeii_family_feast_painting_Naples.jpg|https://upload.wikimedia.org/wikipedia/commons/d/d1/Pompeii_family_feast_painting_Naples.jpg" alt="Roman wall painting of people reclining at a banquet"><figcaption>Diners reclining at a banquet: wall painting from Pompeii (Naples, National Archaeological Museum). Romans of the elder Pliny’s class dined lying on couches, which is what <span class="la">accubat</span> describes. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Pompeii_family_feast_painting_Naples.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Er fragte, ob er umkehren solle',
      html: `
        <p>German reported speech uses the Konjunktiv I and keeps the tense of the original words: <em>Er fragt, ob er umkehren solle</em> and <em>Er fragte, ob er umkehren solle</em> have the same <em>solle</em>. Latin changes the tense of the subjunctive with the main verb: <span class="la">Rogat an retrō flectat</span> but <span class="la">Rogāvit an retrō flecteret</span>. English “backshift” (“he asks whether he should”, but “he asked whether he should”, “I asked where he <em>had been</em>”) is the closer parallel.</p>
        <p>German does show a related habit in time relations: <em>Er fragte, wo ich gewesen sei</em> marks the earlier action, just as Latin <span class="la">Rogāvit ubi fuissem</span> does with the pluperfect subjunctive.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">In commūne cōnsultant, intrā tēcta subsistant an in apertō vagentur.</p>
    <p>“They discuss together whether they should stay under cover or wander in the open.” Pliny, <em>Letters</em> 6.16.15, checked against the text Nils supplied; length marks added. An indirect question with the present subjunctive after a historic present (<span class="la">cōnsultant</span>): here Pliny follows the form of the verb, primary sequence, whereas in the reading (<span class="la">cūnctātus … an retrō flecteret</span>) he uses secondary sequence. Both are correct after a historic present.</p>
    <p>The letter itself opens with the sequence of tenses at work: <span class="la">Petis ut tibi avunculī meī exitum scrībam, quō vērius trādere posterīs possīs</span> (6.16.1), “You ask me to write you an account of my uncle’s death, so that you may hand it down more accurately to posterity”. Present main verb, present subjunctives.</p>
    <p>And at the shore: <span class="la">Placuit ēgredī in lītus, et ex proximō aspicere, ecquid iam mare admitteret</span> (6.16.17), “They decided to go down to the shore and look from close at hand whether the sea would now allow anything”: imperfect subjunctive after a past verb.</p>
  `,

  pronunciation: `
    <h3>amāverim, amāvissem</h3>
    <p><span class="la">a-MĀ-ve-rim</span>, <span class="la">a-mā-VIS-sem</span>: the double <span class="la">s</span> makes the syllable heavy, so it carries the stress, <span class="la">a-mā-vis-SĒ-mus</span> in the plural.</p>
    <h3>amāverīmus or amāverimus?</h3>
    <p>The <span class="la">i</span> of the perfect subjunctive endings (<span class="la">-erīs, -erīmus, -erītis</span>) was originally long, that of the future perfect (<span class="la">-eris, -erimus, -eritis</span>) short, but the two were confused already in antiquity and poets use both quantities in both tenses. This course writes short <span class="la">i</span> in both, as most first-year grammars do; the answer checker ignores length marks.</p>
  `,

  grammar: [
    {
      title: '1. The perfect subjunctive',
      html: `
        <p>Active: perfect stem + <span class="la">-erim, -eris, -erit, -erimus, -eritis, -erint</span>. Passive: perfect participle + <span class="la">sim, sīs, sit …</span>.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>amō (act.)</th><th>amō (pass.)</th><th>sum</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">amāverim</td><td class="la">amātus sim</td><td class="la">fuerim</td></tr>
            <tr><th>2nd sg.</th><td class="la">amāveris</td><td class="la">amātus sīs</td><td class="la">fueris</td></tr>
            <tr><th>3rd sg.</th><td class="la">amāverit</td><td class="la">amātus sit</td><td class="la">fuerit</td></tr>
            <tr><th>1st pl.</th><td class="la">amāverimus</td><td class="la">amātī sīmus</td><td class="la">fuerimus</td></tr>
            <tr><th>2nd pl.</th><td class="la">amāveritis</td><td class="la">amātī sītis</td><td class="la">fueritis</td></tr>
            <tr><th>3rd pl.</th><td class="la">amāverint</td><td class="la">amātī sint</td><td class="la">fuerint</td></tr>
          </tbody>
        </table></div>
        <p>Apart from the 1st singular (<span class="la">amāverim</span> vs <span class="la">amāverō</span>), the active looks like the future perfect (Lecture XIII). Context decides: a perfect subjunctive is in a subordinate clause that requires the subjunctive.</p>
      `
    },
    {
      title: '2. The pluperfect subjunctive',
      html: `
        <p>Active: perfect active infinitive + endings, <span class="la">amāvisse → amāvissem</span>. Passive: perfect participle + <span class="la">essem, essēs, esset …</span>.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>amō (act.)</th><th>amō (pass.)</th><th>sum</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">amāvissem</td><td class="la">amātus essem</td><td class="la">fuissem</td></tr>
            <tr><th>2nd sg.</th><td class="la">amāvissēs</td><td class="la">amātus essēs</td><td class="la">fuissēs</td></tr>
            <tr><th>3rd sg.</th><td class="la">amāvisset</td><td class="la">amātus esset</td><td class="la">fuisset</td></tr>
            <tr><th>1st pl.</th><td class="la">amāvissēmus</td><td class="la">amātī essēmus</td><td class="la">fuissēmus</td></tr>
            <tr><th>2nd pl.</th><td class="la">amāvissētis</td><td class="la">amātī essētis</td><td class="la">fuissētis</td></tr>
            <tr><th>3rd pl.</th><td class="la">amāvissent</td><td class="la">amātī essent</td><td class="la">fuissent</td></tr>
          </tbody>
        </table></div>
        <p>Every verb, however irregular, follows the rule once its perfect is known: <span class="la">dīcō, dīxī → dīxissem</span>; <span class="la">ferō, tulī → tulissem</span>; <span class="la">resīdō, resēdī → resēdissem</span> (Pliny: <span class="la">resēdisset</span>). With <span class="la">utinam</span> it expresses an unfulfilled wish about the past: <span class="la">Utinam adfuissēs!</span>, “If only you had been there!”.</p>
      `
    },
    {
      title: '3. Indirect questions',
      html: `
        <p>A question that depends on a verb of asking, knowing, saying, wondering, etc. keeps its question word and puts its verb in the subjunctive:</p>
        <ul>
          <li><span class="la">Quid facis?</span> → <span class="la">Rogō quid faciās.</span> I ask what you are doing.</li>
          <li><span class="la">Ubi fuistī?</span> → <span class="la">Sciō ubi fuerīs.</span> I know where you have been.</li>
        </ul>
        <p>For yes/no questions, “whether” is <span class="la">-ne</span> or <span class="la">num</span>; a double question is <span class="la">utrum … an</span> or <span class="la">-ne … an</span>, and the second half alone can be introduced by <span class="la">an</span>: <span class="la">cūnctātus an retrō flecteret</span>, “hesitating whether he should turn back”. “Or not” is <span class="la">necne</span>.</p>
        <p>German puts the verb at the end (<em>ich weiß, wo du gewesen bist</em>); Latin changes its mood. Translate with an ordinary English indicative.</p>
      `
    },
    {
      title: '4. The sequence of tenses',
      html: `
        <p>In most subjunctive clauses (purpose, result, indirect question, indirect command), the tense of the subjunctive depends on the main verb:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Main verb</th><th>Same time or later</th><th>Earlier</th></tr></thead>
          <tbody>
            <tr><td><strong>Primary</strong>: present, future, future perfect (and perfect meaning “have done”)</td><td>present subjunctive</td><td>perfect subjunctive</td></tr>
            <tr><td><strong>Secondary</strong>: imperfect, perfect, pluperfect</td><td>imperfect subjunctive</td><td>pluperfect subjunctive</td></tr>
          </tbody>
        </table></div>
        <ul>
          <li><span class="la">Rogat quid faciam.</span> He asks what I am doing.</li>
          <li><span class="la">Rogat quid fēcerim.</span> He asks what I did / have done.</li>
          <li><span class="la">Rogāvit quid facerem.</span> He asked what I was doing.</li>
          <li><span class="la">Rogāvit quid fēcissem.</span> He asked what I had done.</li>
        </ul>
        <p>Later time in an indirect question uses the future active participle with <span class="la">sim</span> or <span class="la">essem</span>: <span class="la">Rogat quid factūrus sim</span>, “He asks what I am going to do”; <span class="la">Rogāvit quid factūrus essem</span>.</p>
        <p>A historic present may take either sequence (see the culture section). Result clauses sometimes break the rule, keeping a perfect subjunctive after a past verb to stress that the result really happened; this is treated as a licence, not the norm.</p>
      `
    },
    {
      title: '5. Pliny’s pluperfect: sī ventus resēdisset',
      html: `
        <p>Pomponianus was <span class="la">certus fugae sī contrārius ventus resēdisset</span>, “resolved on flight if the contrary wind dropped”. His thought was <span class="la">Fugiam sī ventus resēderit</span>, “I shall flee if the wind <em>has dropped</em>” (future perfect). Reported in the past, the future perfect becomes a pluperfect subjunctive: it is earlier than the flight it conditions. English simply says “if the wind dropped”. This is the beginning of what grammars call <em>ōrātiō oblīqua</em>, reported speech, of which more later.</p>
      `
    }
  ],

  vocab: [
    { id: 'num-ind', head: 'num', la: 'num', pos: 'particle', en: 'whether (in indirect questions); surely not (in direct questions)', stress: 'NUM', note: 'Num vēnit? Surely he did not come? Rogō num vēnerit. I ask whether he came.' },
    { id: 'utrum', head: 'utrum', la: 'utrum … an', pos: 'conjunction', en: 'whether … or', stress: 'U-trum', note: 'Originally the neuter of uter, “which of two”. Untranslated in direct double questions.' },
    { id: 'necne', head: 'necne', la: 'necne', pos: 'conjunction', en: 'or not (in indirect questions)', stress: 'NEC-ne' },
    { id: 'quomodo', head: 'quōmodo', la: 'quōmodo', pos: 'adverb', en: 'how, in what way', stress: 'QUŌ-mo-do', note: 'quō modō, “in what manner”.' },
    { id: 'qualis', head: 'quālis', la: 'quālis, quāle', pos: 'adjective, 3rd decl.', en: 'of what kind? what sort of?', stress: 'QUĀ-lis', deriv: 'quality', note: 'Correlative of tālis (Lecture XXX).' },
    { id: 'quamquam', head: 'quamquam', la: 'quamquam', pos: 'conjunction', en: 'although', stress: 'QUAM-quam', note: 'Normally with the indicative in classical prose; Pliny uses it with a participle (quamquam nōndum perīculō appropinquante).' },
    { id: 'vadum', head: 'vadum', la: 'vadum, vadī', g: 'n', pos: 'noun, 2nd decl.', en: 'shallow, ford; shoal', stress: 'VA-dum', note: 'Related to vādō, “go”: a place one can wade. Compare German waten.' },
    { id: 'sarcina', head: 'sarcina', la: 'sarcina, sarcinae', g: 'f', pos: 'noun, 1st decl.', en: 'pack, bundle; (pl.) baggage', stress: 'SAR-ci-na' },
    { id: 'sinus', head: 'sinus', la: 'sinus, sinūs', g: 'm', pos: 'noun, 4th decl.', en: 'bay, gulf; fold (of a garment), bosom', stress: 'SI-nus · SI-nūs', deriv: 'sinus, sinuous' },
    { id: 'lapis', head: 'lapis', la: 'lapis, lapidis', g: 'm', pos: 'noun, 3rd decl.', en: 'stone', stress: 'LA-pis · LA-pi-dis', deriv: 'lapidary, dilapidated' },
    { id: 'fulgor', head: 'fulgor', la: 'fulgor, fulgōris', g: 'm', pos: 'noun, 3rd decl.', en: 'flash, glare, brightness', stress: 'FUL-gor · ful-GŌ-ris', note: 'Pliny 6.16.13: fulgor et clāritās.' },
    { id: 'ruina', head: 'ruīna', la: 'ruīna, ruīnae', g: 'f', pos: 'noun, 1st decl.', en: 'fall, collapse; debris; (pl.) ruins', stress: 'ru-Ī-na', deriv: 'ruin', note: 'From ruō, “rush, fall”.' },
    { id: 'rogo', head: 'rogō', la: 'rogō, rogāre, rogāvī, rogātum', pos: 'verb, 1st conj.', en: 'ask', stress: 'RO-gō · ro-GĀ-re', note: 'Also “ask for”: aliquem aliquid rogāre, to ask someone for something (double accusative).' },
    { id: 'narro', head: 'narrō', la: 'narrō, narrāre, narrāvī, narrātum', pos: 'verb, 1st conj.', en: 'tell, relate', stress: 'NAR-rō · nar-RĀ-re', deriv: 'narrate' },
    { id: 'accedo', head: 'accēdō', la: 'accēdō, accēdere, accessī, accessum', pos: 'verb, 3rd conj.', en: 'approach, come near; be added', stress: 'ac-CĒ-dō · ac-CĒ-de-re', deriv: 'access, accede' },
    { id: 'lavo', head: 'lavō', la: 'lavō, lavāre, lāvī, lautum (lavātum, lōtum)', pos: 'verb, 1st conj.', en: 'wash; (pass.) bathe', stress: 'LA-vō · la-VĀ-re', deriv: 'lavatory, lotion', note: 'Pliny: lōtus accubat, “having bathed, he reclines”. The participle varies between authors.' },
    { id: 'resido', head: 'resīdō', la: 'resīdō, resīdere, resēdī', pos: 'verb, 3rd conj.', en: 'sink down, settle; subside, abate', stress: 're-SĪ-dō · re-SĪ-de-re', deriv: 'residue (related)', note: 'Compound of sīdō, “settle”; not to be confused with resideō, “remain sitting”, whose perfect is also resēdī.' }
  ],

  grammarCards: [
    { id: 'g31-perf', front: 'Perfect subjunctive active: formation', back: 'Perfect stem + -erim, -eris, -erit, -erimus, -eritis, -erint (amāverim)' },
    { id: 'g31-perfp', front: 'Perfect subjunctive passive of amō', back: 'amātus sim, amātus sīs, amātus sit, amātī sīmus, amātī sītis, amātī sint' },
    { id: 'g31-plup', front: 'Pluperfect subjunctive active: formation', back: 'Perfect active infinitive + endings: amāvisse → amāvissem' },
    { id: 'g31-plupp', front: 'Pluperfect subjunctive passive of amō', back: 'amātus essem, amātus essēs, amātus esset …' },
    { id: 'g31-sum', front: 'sum: perfect and pluperfect subjunctive', back: 'fuerim, fueris, fuerit …; fuissem, fuissēs, fuisset …' },
    { id: 'g31-iq', front: 'Indirect question', back: 'Question word + subjunctive: Rogō quid faciās.' },
    { id: 'g31-whether', front: '“whether” in indirect questions', back: '-ne, num; double: utrum … an / -ne … an; “or not”: necne' },
    { id: 'g31-primary', front: 'Primary sequence', back: 'After present / future / future perfect: present subj. (same time, later), perfect subj. (earlier)' },
    { id: 'g31-secondary', front: 'Secondary sequence', back: 'After imperfect / perfect / pluperfect: imperfect subj. (same time, later), pluperfect subj. (earlier)' },
    { id: 'g31-ex1', front: 'Rogat quid fēcerim.', back: 'He asks what I did / have done.' },
    { id: 'g31-ex2', front: 'Rogāvit quid fēcissem.', back: 'He asked what I had done.' },
    { id: 'g31-future', front: 'He asked what I was going to do.', back: 'Rogāvit quid factūrus essem.' },
    { id: 'g31-utinam', front: 'Utinam adfuissēs!', back: 'If only you had been there! (unfulfilled wish, past)' },
    { id: 'g31-flecteret', front: 'Cūnctātus paulum an retrō flecteret', back: 'Having hesitated a little whether he should turn back (Pliny 6.16.11)' },
    { id: 'g31-fortes', front: 'Fortēs fortūna iuvat: Pompōniānum pete.', back: 'Fortune favours the brave: make for Pomponianus. (Pliny 6.16.11)' },
    { id: 'g31-resedisset', front: 'certus fugae sī contrārius ventus resēdisset', back: 'resolved on flight if the contrary wind dropped (Pliny 6.16.12)' },
    { id: 'g31-hilaris', front: 'aut hilaris aut (quod aequē magnum) similis hilarī', back: 'either cheerful or (which is just as great) looking cheerful (Pliny 6.16.12)' },
    { id: 'g31-german', front: 'Er fragte, ob er umkehren solle.', back: 'Rogāvit an retrō flecteret. (Latin changes tense with the main verb; German Konjunktiv I does not.)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">amāverit</span> in a clause that needs the subjunctive:', options: ['perfect subjunctive 3rd sg.', 'pluperfect subjunctive 3rd sg.', 'imperfect subjunctive 3rd sg.', 'present subjunctive 3rd sg.'], answer: 0, explain: 'Perfect stem + -erit; outside the subjunctive it would be the future perfect.' },
    { id: 'e2', type: 'mc', prompt: 'Pluperfect subjunctive 1st sg. of <span class="la">sum</span>:', options: ['fuissem', 'fuerim', 'essem', 'fueram'], answer: 0, explain: 'fuisse + -m.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Rogō quid faciās.</span>', options: ['I ask what you are doing.', 'I ask what you did.', 'I asked what you were doing.', 'What are you doing? I ask.'], answer: 0, explain: 'Primary sequence, same time: present subjunctive.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">Rogāvit quid fēcissem.</span>', options: ['He asked what I had done.', 'He asked what I was doing.', 'He asks what I did.', 'He asked what I would do.'], answer: 0, explain: 'Secondary sequence, earlier time: pluperfect subjunctive.' },
    { id: 'e5', type: 'mc', prompt: 'Which main verb is in <em>secondary</em> sequence?', options: ['rogābat', 'rogat', 'rogābit', 'rogāverit'], answer: 0, explain: 'Imperfect, perfect and pluperfect are secondary.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Nesciō utrum veniat an maneat.</span>', options: ['I don’t know whether he is coming or staying.', 'I don’t know why he comes and stays.', 'I don’t know which of the two is coming.', 'He comes and stays; I don’t know.'], answer: 0, explain: 'utrum … an: whether … or.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Rogō ubi fu___.</span>', hint: 'you (sg.) have been', answers: ['eris', 'erīs'], full: 'Rogō ubi fueris.', explain: 'Primary sequence, earlier time: perfect subjunctive.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Rogāvī ubi fu___.</span>', hint: 'you (sg.) had been', answers: ['issēs', 'isses'], full: 'Rogāvī ubi fuissēs.', explain: 'Secondary sequence, earlier time: pluperfect subjunctive.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Sciēbant quid hostēs par___.</span>', hint: 'were preparing', answers: ['ārent', 'arent'], full: 'Sciēbant quid hostēs parārent.', explain: 'Secondary sequence, same time: imperfect subjunctive.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Dīc mihi quis hoc fēc___.</span>', hint: 'did', answers: ['erit'], full: 'Dīc mihi quis hoc fēcerit.', explain: 'Imperative = primary; earlier time: perfect subjunctive.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Utinam ille hīc adfu___!</span>', hint: 'had been', answers: ['isset'], full: 'Utinam ille hīc adfuisset!', explain: 'Unfulfilled past wish: pluperfect subjunctive.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Quaesīvit ___ mare tūtum esset.</span>', hint: 'whether', answers: ['num', 'an'], full: 'Quaesīvit num mare tūtum esset.', explain: 'num (or an) introduces a yes/no indirect question.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the perfect subjunctive active of <span class="la">amō</span> and <span class="la">sum</span>.', headers: ['amō', 'sum'], rows: [
      { label: '1st sg.', answers: ['amāverim', 'fuerim'] },
      { label: '2nd sg.', answers: ['amāveris|amāverīs', 'fueris|fuerīs'] },
      { label: '3rd sg.', answers: ['amāverit', 'fuerit'] },
      { label: '1st pl.', answers: ['amāverimus|amāverīmus', 'fuerimus|fuerīmus'] },
      { label: '2nd pl.', answers: ['amāveritis|amāverītis', 'fueritis|fuerītis'] },
      { label: '3rd pl.', answers: ['amāverint', 'fuerint'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the pluperfect subjunctive active of <span class="la">amō</span> and <span class="la">sum</span>.', headers: ['amō', 'sum'], rows: [
      { label: '1st sg.', answers: ['amāvissem', 'fuissem'] },
      { label: '2nd sg.', answers: ['amāvissēs', 'fuissēs'] },
      { label: '3rd sg.', answers: ['amāvisset', 'fuisset'] },
      { label: '1st pl.', answers: ['amāvissēmus', 'fuissēmus'] },
      { label: '2nd pl.', answers: ['amāvissētis', 'fuissētis'] },
      { label: '3rd pl.', answers: ['amāvissent', 'fuissent'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each sentence to its translation.', pairs: [
      ['Rogat quid faciam.', 'He asks what I am doing.'], ['Rogat quid fēcerim.', 'He asks what I did.'], ['Rogāvit quid facerem.', 'He asked what I was doing.'], ['Rogāvit quid fēcissem.', 'He asked what I had done.'], ['Rogāvit quid factūrus essem.', 'He asked what I was going to do.']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Nescīmus ubi Lūcius fuerit.', tokens: ['We do not know', 'where', 'Lucius', 'has been'], explain: 'Primary sequence, earlier time.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Rogāvit cūr puerī clāmārent.', model: 'He asked why the boys were shouting.', accepted: ['he asked why boys were shouting', 'she asked why boys were shouting', 'he asked why boys were shouting out', 'he asked why boys shouted', 'he asked why boys were crying out', 'he asked why boys were calling out'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Nesciō quid Mārcus dīxerit.', model: 'I do not know what Marcus said.', accepted: ['i do not know what marcus said', 'i don’t know what marcus said', 'i dont know what marcus said', 'i do not know what marcus has said', 'i don’t know what marcus has said', 'i dont know what marcus has said'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Utinam nāvēs vīdissēmus!', model: 'If only we had seen the ships!', accepted: ['if only we had seen ships', 'would that we had seen ships', 'i wish we had seen ships'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'I ask where you (sg.) are.', model: 'Rogō ubi sīs.', accepted: ['rogō ubi sīs', 'ubi sīs rogō'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'he had loved (pluperfect subjunctive)', model: 'amāvisset', accepted: ['amāvisset'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'I asked what you (sg.) had done.', model: 'Rogāvī quid fēcissēs.', accepted: ['rogāvī quid fēcissēs', 'quaesīvī quid fēcissēs'] },
    { id: 'e23', type: 'mc', prompt: 'Pliny, <span class="la">cūnctātus paulum an retrō flecteret</span>: why the imperfect subjunctive?', options: ['Indirect question after a past action, same time', 'Purpose clause', 'Result clause', 'It is a wish'], answer: 0, explain: 'an = whether; secondary sequence.' },
    { id: 'e24', type: 'mc', prompt: 'Why could Pomponianus not sail away from Stabiae?', options: ['The wind was against him', 'He had no ships', 'He was too ill', 'The emperor forbade it'], answer: 0, explain: 'certus fugae sī contrārius ventus resēdisset.' },
    { id: 'e25', type: 'mc', prompt: 'German reported speech (<em>Er fragte, ob er umkehren solle</em>) differs from Latin because:', options: ['German keeps the tense of the original words; Latin shifts it with the main verb', 'German uses the indicative only', 'Latin has no indirect questions', 'There is no difference'], answer: 0, explain: 'Rogat an flectat; rogāvit an flecteret.' }
  ],

  reading: {
    title: 'Fortēs fortūna iuvat (Plīnius, Epistulae 6.16.11–12)',
    note: 'Authentic text, unadapted: Pliny the Younger, Letters 6.16.11–12, from the copy in the course’s source files; length marks added, and the dashes of the copy printed as brackets. Tap any word.',
    text: 'Iam nāvibus cinis incidēbat, quō propius accēderent, calidior et dēnsior; iam pūmicēs etiam nigrīque et ambustī et frāctī igne lapidēs; iam vadum subitum ruīnāque montis lītora obstantia. Cūnctātus paulum an retrō flecteret, mox gubernātōrī ut ita faceret monentī “Fortēs” inquit “fortūna iuvat: Pompōniānum pete.” Stabiīs erat dirēmptus sinū mediō (nam sēnsim circumāctīs curvātīsque lītoribus mare īnfunditur); ibi quamquam nōndum perīculō appropinquante, cōnspicuō tamen et cum crēsceret proximō, sarcinās contulerat in nāvēs, certus fugae sī contrārius ventus resēdisset. Quō tunc avunculus meus secundissimō invectus, complectitur trepidantem, cōnsōlātur, hortātur, utque timōrem eius suā sēcūritāte lēnīret, dēferrī in balineum iubet; lōtus accubat, cēnat, aut hilaris aut (quod aequē magnum) similis hilarī.',
    translation: 'Ash was already falling on the ships, hotter and thicker the closer they came; now pumice too, and stones blackened, scorched and cracked by fire; now a sudden shoal, and the shore blocked by debris from the mountain. He hesitated a little whether to turn back; then, when the helmsman urged him to do so, he said, “Fortune favours the brave: make for Pomponianus.” Pomponianus was at Stabiae, cut off by the width of the bay (for the sea flows in where the shore gradually curves round); there, although the danger was not yet approaching, it was in full view and, as it grew, very close, so he had put his baggage on board ships, resolved on flight if the contrary wind dropped. My uncle, carried in by this wind, which was entirely in his favour, embraces the frightened man, comforts and encourages him, and, to soothe his fear by his own unconcern, has himself carried to the baths; after bathing he reclines at table and dines, either cheerful or (which is just as great) looking cheerful.',
    notes: [
      { ref: 'quō propius accēderent, calidior et dēnsior', html: '<span class="la">quō</span> + comparative: “the nearer they approached, (the) hotter …”. The subjunctive <span class="la">accēderent</span> marks a repeated situation, each time they came closer; this use of the subjunctive for repeated action spreads in imperial prose. <span class="la">calidior et dēnsior</span> agree with <span class="la">cinis</span>.' },
      { ref: 'iam pūmicēs etiam nigrīque et ambustī et frāctī igne lapidēs', html: 'Supply <span class="la">incidēbant</span>. <span class="la">iam … iam … iam</span>: anaphora, each stage worse. <span class="la">igne</span> goes with all three participles.' },
      { ref: 'iam vadum subitum ruīnāque montis lītora obstantia', html: 'Supply <span class="la">erat / erant</span>: “now there was a sudden shoal, and shores blocking (the way) with debris from the mountain”. The sea floor had risen, and the coast could not be reached.' },
      { ref: 'Cūnctātus paulum an retrō flecteret', html: '<span class="la">cūnctātus</span>: perfect participle of the deponent <span class="la">cūnctor</span>, “having hesitated” (deponents, Lecture XXXV). <span class="la">an retrō flecteret</span>: indirect question, “whether he should turn back”, the imperfect subjunctive because the narrative is past. The subjunctive stands for a deliberative question, “Should I turn back?”.' },
      { ref: 'gubernātōrī ut ita faceret monentī', html: '“to the helmsman advising that he should do so”: <span class="la">monentī</span> agrees with <span class="la">gubernātōrī</span> (dative with <span class="la">inquit</span>), and <span class="la">ut ita faceret</span> is an indirect command (Lecture XXXVII).' },
      { ref: 'Fortēs fortūna iuvat', html: 'A proverb (Lecture XVII), found in Terence (<em>Phormio</em> 203) and elsewhere in several forms. The nephew puts it in his uncle’s mouth as his last recorded words to the crew.' },
      { ref: 'Stabiīs erat dirēmptus sinū mediō', html: 'Subject: Pomponianus. <span class="la">Stabiīs</span>: locative, “at Stabiae” (the town name is plural, so the locative looks like an ablative; Lecture XXXVIII). <span class="la">dirēmptus</span>: “separated”, from <span class="la">dirimō</span>. <span class="la">sinū mediō</span>: “by the middle of the bay”, i.e. he was across the bay.' },
      { ref: 'quamquam nōndum perīculō appropinquante, cōnspicuō tamen et cum crēsceret proximō', html: 'Ablative absolutes (Lecture XXV): “although the danger was not yet approaching, but (was) in view and, since it was growing, very near”. <span class="la">cōnspicuō</span> and <span class="la">proximō</span> still agree with <span class="la">perīculō</span>. <span class="la">cum crēsceret</span>: <span class="la">cum</span> with the subjunctive, Lecture XXXII.' },
      { ref: 'certus fugae sī contrārius ventus resēdisset', html: '<span class="la">certus fugae</span>: “resolved on flight”, genitive with <span class="la">certus</span>. <span class="la">resēdisset</span>: pluperfect subjunctive; see grammar section 5.' },
      { ref: 'Quō tunc avunculus meus secundissimō invectus', html: '<span class="la">quō … secundissimō</span> [<span class="la">ventō</span>]: “by this (wind), most favourable (to him)”. The same wind that pinned Pomponianus in brought the elder Pliny straight to him.' },
      { ref: 'complectitur trepidantem, cōnsōlātur, hortātur', html: 'Three verbs without conjunctions (asyndeton), all historic presents; <span class="la">complector, cōnsōlor, hortor</span> are deponents: passive in form, active in meaning.' },
      { ref: 'dēferrī in balineum iubet; lōtus accubat, cēnat', html: '<span class="la">dēferrī</span>: present passive infinitive of <span class="la">dēferō</span>, “to be carried down”. <span class="la">lōtus</span>: “having bathed” (<span class="la">lavō</span>; the passive means “bathe”). <span class="la">accubat</span>: “reclines (at table)”, the Roman way of dining.' }
    ],
    glosses: {
      'iam': 'now, already', 'nāvibus': 'dat. pl. of nāvis: on the ships', 'cinis': 'ash (nom.)', 'incidēbat': 'impf. of incidō: was falling on', 'quō': 'the (more) …; by which', 'propius': 'nearer', 'accēderent': 'impf. subj. 3rd pl. of accēdō: they approached', 'calidior': 'hotter', 'et': 'and', 'dēnsior': 'thicker',
      'pūmicēs': 'nom. pl. of pūmex: pumice stones', 'etiam': 'also, even', 'nigrīque': 'and black (nom. pl. + -que)', 'ambustī': 'scorched (nom. pl.)', 'frāctī': 'broken, cracked (nom. pl.)', 'igne': 'abl. of ignis: by fire', 'lapidēs': 'nom. pl. of lapis: stones',
      'vadum': 'shoal, shallow (nom.)', 'subitum': 'sudden', 'ruīnāque': 'and by the debris (abl. of ruīna + -que)', 'montis': 'gen. of mōns: of the mountain', 'lītora': 'nom. pl. of lītus: shores', 'obstantia': 'nom. pl. n. of obstāns: blocking',
      'cūnctātus': 'having hesitated (cūnctor)', 'paulum': 'a little', 'an': 'whether', 'retrō': 'back', 'flecteret': 'impf. subj. 3rd sg. of flectō: he should turn', 'mox': 'soon, then', 'gubernātōrī': 'dat. of gubernātor: to the helmsman', 'ut': 'that (+ subj.)', 'ita': 'so, thus', 'faceret': 'impf. subj. 3rd sg. of faciō: he should do', 'monentī': 'dat. of monēns: advising',
      'fortēs': 'acc. pl. of fortis: the brave', 'inquit': 'he said', 'fortūna': 'fortune (nom.)', 'iuvat': '3rd sg. of iuvō: helps', 'pompōniānum': 'acc. of Pompōniānus: Pomponianus', 'pete': 'imperative of petō: make for',
      'stabiīs': 'locative: at Stabiae', 'erat': 'was', 'dirēmptus': 'separated (dirimō)', 'sinū': 'abl. of sinus: by the bay', 'mediō': 'abl. of medius: the middle (of)', 'nam': 'for', 'sēnsim': 'gradually', 'circumāctīs': 'abl. pl. of circumāctus: bent round', 'curvātīsque': 'and curved (abl. pl. + -que)', 'lītoribus': 'abl. pl. of lītus: shores', 'mare': 'sea (nom.)', 'īnfunditur': 'pres. pass. of īnfundō: pours in',
      'ibi': 'there', 'quamquam': 'although', 'nōndum': 'not yet', 'perīculō': 'abl. of perīculum: danger', 'appropinquante': 'abl. of appropinquāns: approaching', 'cōnspicuō': 'abl. of cōnspicuus: visible', 'tamen': 'however, yet', 'cum': 'since, as (+ subj.)', 'crēsceret': 'impf. subj. 3rd sg. of crēscō: it was growing', 'proximō': 'abl. of proximus: very near',
      'sarcinās': 'acc. pl. of sarcina: baggage', 'contulerat': 'plupf. 3rd sg. of cōnferō: had brought together, put', 'in': 'into, onto (+ acc.)', 'nāvēs': 'acc. pl. of nāvis: ships', 'certus': 'resolved (on)', 'fugae': 'gen. of fuga: flight', 'sī': 'if', 'contrārius': 'contrary', 'ventus': 'wind (nom.)', 'resēdisset': 'plupf. subj. 3rd sg. of resīdō: should have dropped',
      'tunc': 'then', 'avunculus': 'uncle (nom.)', 'meus': 'my', 'secundissimō': 'abl. of secundissimus: most favourable', 'invectus': 'carried in (invehō)', 'complectitur': '3rd sg. of complector: embraces', 'trepidantem': 'acc. of trepidāns: the frightened (man)', 'cōnsōlātur': '3rd sg. of cōnsōlor: comforts', 'hortātur': '3rd sg. of hortor: encourages',
      'utque': 'and in order that (ut + -que)', 'timōrem': 'acc. of timor: fear', 'eius': 'his', 'suā': 'abl. f. of suus: his own', 'sēcūritāte': 'abl. of sēcūritās: by unconcern', 'lēnīret': 'impf. subj. 3rd sg. of lēniō: he might soothe', 'dēferrī': 'pres. pass. inf. of dēferō: to be carried', 'balineum': 'bath (acc.)', 'iubet': '3rd sg. of iubeō: orders',
      'lōtus': 'having bathed (lavō)', 'accubat': '3rd sg. of accubō: reclines at table', 'cēnat': '3rd sg. of cēnō: dines', 'aut': 'either, or', 'hilaris': 'cheerful', 'quod': 'which', 'aequē': 'equally', 'magnum': 'great', 'similis': 'like, resembling', 'hilarī': 'dat. of hilaris: a cheerful (man)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What prevented the ship from landing at the foot of the mountain?', options: ['A sudden shoal and a shore blocked by debris', 'Enemy ships', 'A storm', 'The helmsman refused'], answer: 0, explain: 'iam vadum subitum ruīnāque montis lītora obstantia.' },
      { id: 'r2', type: 'mc', prompt: 'What did the helmsman advise?', options: ['To turn back', 'To land at once', 'To make for Stabiae', 'To wait for daylight'], answer: 0, explain: 'ut ita faceret: to do so, i.e. turn back.' },
      { id: 'r3', type: 'mc', prompt: 'What had Pomponianus already done?', options: ['Loaded his baggage onto ships', 'Fled to Rome', 'Sent a letter to Pliny', 'Gone to the baths'], answer: 0, explain: 'sarcinās contulerat in nāvēs.' },
      { id: 'r4', type: 'mc', prompt: 'How does the nephew describe his uncle at dinner?', options: ['Either cheerful or looking cheerful, which is just as great', 'Afraid but hiding it badly', 'Asleep at the table', 'Angry with Pomponianus'], answer: 0, explain: 'aut hilaris aut (quod aequē magnum) similis hilarī.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">audīvissent</span>:', options: ['pluperfect subjunctive 3rd pl.', 'perfect subjunctive 3rd pl.', 'pluperfect indicative 3rd pl.', 'imperfect subjunctive 3rd pl.'], answer: 0, explain: 'audīvisse + -nt.' },
      { id: 't2', type: 'mc', prompt: 'Perfect subjunctive passive 3rd sg. of <span class="la">capiō</span> (masc.):', options: ['captus sit', 'captus esset', 'caperētur', 'captus est'], answer: 0, explain: 'Participle + sit.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Scīsne quis vēnerit?</span>', options: ['Do you know who has come?', 'Do you know who is coming?', 'Did you know who had come?', 'Who came? Do you know?'], answer: 0, explain: 'Primary sequence, earlier time.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Quaerēbant quis rēx ess___.</span>', hint: 'was', answers: ['et'], full: 'Quaerēbant quis rēx esset.', explain: 'Secondary sequence, same time.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Nārrā nōbīs quid vīd___.</span>', hint: 'you (sg.) saw', answers: ['eris', 'erīs'], full: 'Nārrā nōbīs quid vīderis.', explain: 'Imperative (primary), earlier time: perfect subjunctive.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Rogāvērunt num mīlitēs urbem cēpissent.', model: 'They asked whether the soldiers had captured the city.', accepted: ['they asked whether soldiers had captured city', 'they asked if soldiers had captured city', 'they asked whether soldiers had taken city', 'they asked if soldiers had taken city', 'they asked whether soldiers had seized city', 'they asked if soldiers had seized city'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'I do not know what you (sg.) are doing.', model: 'Nesciō quid faciās.', accepted: ['nesciō quid faciās', 'nōn sciō quid faciās'] },
      { id: 't8', type: 'mc', prompt: '“He asked what I was going to do”:', options: ['Rogāvit quid factūrus essem.', 'Rogāvit quid facerem.', 'Rogāvit quid fēcissem.', 'Rogat quid factūrus sim.'], answer: 0, explain: 'Later time in secondary sequence: -ūrus essem.' },
      { id: 't9', type: 'mc', prompt: 'Where was Pomponianus?', options: ['At Stabiae, across the bay', 'At Misenum', 'At Rome', 'At Herculaneum'], answer: 0, explain: 'Stabiīs erat dirēmptus sinū mediō.' },
      { id: 't10', type: 'mc', prompt: 'In <span class="la">In commūne cōnsultant, intrā tēcta subsistant an in apertō vagentur</span>, why the present subjunctive?', options: ['Primary sequence after the historic present cōnsultant', 'It is a wish', 'Result clause', 'It is a mistake'], answer: 0, explain: 'A historic present may take either sequence.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">Utinam adfuissēs!</span>', options: ['If only you had been there!', 'If only you were there!', 'May you be there!', 'You had been there.'], answer: 0, explain: 'Pluperfect subjunctive: unfulfilled past wish.' }
    ]
  },

  reference: [
    { title: 'The four subjunctive tenses of amō', headers: ['', 'Active', 'Passive'], rows: [
      ['Present', 'amem', 'amer'], ['Imperfect', 'amārem', 'amārer'], ['Perfect', 'amāverim', 'amātus sim'], ['Pluperfect', 'amāvissem', 'amātus essem']
    ] },
    { title: 'Sequence of tenses', headers: ['Main verb', 'Same time / later', 'Earlier', 'After (indirect question)'], rows: [
      ['Primary (pres., fut., fut. perf.)', 'present subj.', 'perfect subj.', '-ūrus sim'], ['Secondary (impf., perf., plupf.)', 'imperfect subj.', 'pluperfect subj.', '-ūrus essem']
    ] },
    { title: 'Indirect questions: “whether”', headers: ['Latin', 'English'], rows: [
      ['-ne, num, an', 'whether'], ['utrum … an', 'whether … or'], ['-ne … an', 'whether … or'], ['necne', 'or not']
    ] }
  ]
});
