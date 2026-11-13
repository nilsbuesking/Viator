/*
 * Latin — Lecture XXIV: participles (present active, perfect passive, future active; the
 * future passive previewed); their tense and translation.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotations (Pliny, Letters 6.16.2, 6.16.8–9, 6.16.11, 6.16.20; Virgil, Aeneid 1.3, 1.9)
 * checked against the texts supplied by Nils. Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-24',
  number: 24,
  title: 'Quasi semper vīctūrus',
  subtitle: 'The participles: amāns, amātus, amātūrus (and amandus); relative time; translating participles',
  minutes: 65,

  intro: `
    <p>A participle is an adjective made from a verb: it describes a noun, agreeing with it in gender, number and case, and at the same time keeps the verb’s power to have an object, an adverb or an agent. German has two: <em>liebend</em> (Partizip I) and <em>geliebt</em> (Partizip II). Latin has four, and uses them far more than German or English do.</p>
    <p>You know the perfect passive participle from Lecture XX (<span class="la">amātus</span>, “loved, having been loved”). This lecture adds the <strong>present active participle</strong> <span class="la">amāns, amantis</span> “loving”, declined like <span class="la">potēns</span> (Lecture XVII), and the <strong>future active participle</strong> <span class="la">amātūrus</span> “about to love, going to love”, which neither German nor English has. The fourth, the future passive <span class="la">amandus</span>, is introduced here and treated fully in Lecture XL.</p>
    <p>Two points matter most. The tense of a participle is <strong>relative to the main verb</strong>, not to the present moment. And Latin has <strong>no perfect active participle</strong>: there is no single word for “having loved” in ordinary verbs. How Latin fills that gap is the subject of Lecture XXV.</p>
  `,

  background: [
    {
      title: 'Vertit ille cōnsilium',
      html: `
        <p>The participles in this lecture’s quotations come from the turning point of Pliny’s letter. The elder Pliny had ordered a light ship to be made ready to sail across the bay and observe the strange cloud more closely. As he was leaving the house, a message arrived from Rectina, the wife of Tascius, whose villa lay at the foot of the mountain and who could escape only by sea. Pliny’s nephew writes: <span class="la">Vertit ille cōnsilium et quod studiōsō animō incohāverat obit maximō</span>, “He changed his plan, and what he had begun in a spirit of inquiry he carried through in a spirit of heroism.” He had the warships launched and went on board himself, <span class="la">lātūrus auxilium</span>, “intending to bring help”, not to Rectina alone but to many.</p>
        <p>The sentence is a good example of Pliny’s style: the antithesis of <span class="la">studiōsō</span> and <span class="la">maximō</span> (supply <span class="la">animō</span>), and the present tense <span class="la">obit</span> for vividness. It also shows how a Roman author turned an uncle’s death into an exemplary story, which is what Tacitus had asked for.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Villa_San_Marco,_Stabiae._Room_60,_landscape_painting_with_maritime_villa..jpg/960px-Villa_San_Marco,_Stabiae._Room_60,_landscape_painting_with_maritime_villa..jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Villa_San_Marco,_Stabiae._Room_60,_landscape_painting_with_maritime_villa..jpg/500px-Villa_San_Marco,_Stabiae._Room_60,_landscape_painting_with_maritime_villa..jpg|https://upload.wikimedia.org/wikipedia/commons/0/01/Villa_San_Marco,_Stabiae._Room_60,_landscape_painting_with_maritime_villa..jpg" alt="Small Roman wall painting of a villa with porticoes on a shore"><figcaption>Wall painting of a seaside villa, from the Villa San Marco at Stabiae (1st century AD), itself buried in AD 79. The coast of the bay was lined with villas of this kind, among them those of Rectina and Pomponianus. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Villa_San_Marco,_Stabiae._Room_60,_landscape_painting_with_maritime_villa..jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'der vom Lehrer gelobte Schüler',
      html: `
        <p>German has a construction English lacks: the extended participial attribute, <em>der vom Lehrer gelobte Schüler</em>, “the pupil (who was) praised by the teacher”, with everything that belongs to the participle placed before it. Latin does the same, usually with the participle after the noun: <span class="la">puer ā magistrō laudātus</span>. German speakers therefore find Latin participial phrases less strange than English speakers do.</p>
        <p>What German, like English, cannot do so freely is use a participle for a whole adverbial clause. Latin <span class="la">Puer rīdēns patrem salūtāvit</span> may mean “The boy greeted his father laughing”, but participles also stand for “when”, “because”, “although” or “if” clauses. <span class="la">Mīlitēs fortiter pugnantēs vulnerātī sunt</span> can be “The soldiers were wounded while they were fighting bravely” or “… although they were fighting bravely”. The participle does not say which; the context does, and the translator has to choose.</p>
      `
    },
    {
      title: 'Moritūrī tē salūtant',
      html: `
        <p>The best-known future participle in Latin is <span class="la">moritūrī</span>, “those about to die”. Suetonius (<em>Claudius</em> 21) reports that before a mock naval battle on the Fucine Lake in AD 52, the men who were to fight called out to the emperor Claudius “Hail, emperor, those about to die salute you” (<span class="la">Havē, imperātor, moritūrī tē salūtant</span>). Despite its fame, it is attested only on this one occasion, and the combatants were condemned criminals, not professional gladiators; there is no good evidence that it was a regular formula of the arena. Nineteenth-century painters, above all Gérôme, made it one.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Ave_Caesar!_Morituri_te_salutant_(1859).jpg/960px-Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Ave_Caesar!_Morituri_te_salutant_(1859).jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Ave_Caesar!_Morituri_te_salutant_(1859).jpg/500px-Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Ave_Caesar!_Morituri_te_salutant_(1859).jpg|https://upload.wikimedia.org/wikipedia/commons/5/5f/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Ave_Caesar!_Morituri_te_salutant_(1859).jpg" alt="Painting of gladiators in the arena raising their arms towards the emperor’s box"><figcaption>Jean-Léon Gérôme, <em>Ave Caesar! Morituri te salutant</em> (1859; Yale University Art Gallery). Gérôme’s painting did much to make the phrase a supposed ritual of the arena. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Ave_Caesar!_Morituri_te_salutant_(1859).jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">ascendit ipse nōn Rectīnae modo sed multīs … lātūrus auxilium.</p>
    <p>“He went on board himself, intending to bring help not to Rectina only but to many.” Pliny, <em>Letters</em> 6.16.9, checked against the text Nils supplied; length marks added. <span class="la">lātūrus</span>: future active participle of <span class="la">ferō</span> (supine <span class="la">lātum</span>), expressing purpose: “about to bring, in order to bring”.</p>
    <p>Three more participles from the same letter:</p>
    <ul>
      <li><span class="la">quasi semper vīctūrus occiderit</span>, “he died as though he would live for ever” (6.16.2): <span class="la">vīctūrus</span>, future participle of <span class="la">vīvō</span> (supine <span class="la">vīctum</span>, long ī), not of <span class="la">vincō</span> (<span class="la">victūrus</span>, short i). Without length marks the two look the same, and the context decides: Pliny means that his uncle’s writings will keep him alive.</li>
      <li><span class="la">gubernātōrī ut ita faceret monentī</span>, “to the helmsman, who was advising him to do so” (6.16.11): <span class="la">monentī</span>, present participle, dative, agreeing with <span class="la">gubernātōrī</span>.</li>
      <li><span class="la">habitus corporis quiēscentī quam dēfūnctō similior</span>, “the appearance of his body was more like that of a man asleep than of a dead man” (6.16.20): <span class="la">quiēscentī</span>, present participle used as a noun, “someone resting”.</li>
    </ul>
    <p>And from the <em>Aeneid</em>: Aeneas, <span class="la">multum ille et terrīs iactātus et altō</span>, “much tossed about on land and sea” (1.3), a perfect passive participle; Juno, <span class="la">quidve dolēns</span>, “or resenting what” (1.9), a present participle.</p>
  `,

  pronunciation: `
    <h3>amāns, amantis</h3>
    <p>The nominative has a long vowel before <span class="la">ns</span>: <span class="la">A-māns</span>, <span class="la">MO-nēns</span>, <span class="la">RE-gēns</span>. In the other cases the vowel before <span class="la">nt</span> is short and the stress falls on it: <span class="la">a-MAN-tis, mo-NEN-tis</span>.</p>
    <h3>-ūrus</h3>
    <p>The future participle has a long, stressed <span class="la">ū</span>: <span class="la">a-mā-TŪ-rus, mo-ri-TŪ-rī, vīc-TŪ-rus</span>.</p>
    <h3>iēns and euntis</h3>
    <p>The present participle of <span class="la">eō</span> “go” (Lecture XXXVIII) is irregular: <span class="la">iēns, euntis</span>. Note it for recognition.</p>
  `,

  grammar: [
    {
      title: '1. The four participles',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Active</th><th>Passive</th></tr></thead>
          <tbody>
            <tr><th>Present</th><td class="la">amāns, amantis: loving</td><td>—</td></tr>
            <tr><th>Perfect</th><td>—</td><td class="la">amātus, -a, -um: (having been) loved</td></tr>
            <tr><th>Future</th><td class="la">amātūrus, -a, -um: about to love</td><td class="la">amandus, -a, -um: (about) to be loved, needing to be loved</td></tr>
          </tbody>
        </table></div>
        <p>Note the gaps. There is <strong>no present passive</strong> participle (“being loved”) and <strong>no perfect active</strong> participle (“having loved”). German has the same gaps in its own way: <em>geliebt</em> is passive, and “having loved” needs a clause (<em>nachdem er geliebt hatte</em>).</p>
      `
    },
    {
      title: '2. Formation',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Present active</th><th>Perfect passive</th><th>Future active</th><th>Future passive</th></tr></thead>
          <tbody>
            <tr><td class="la">amō</td><td class="la">amāns</td><td class="la">amātus</td><td class="la">amātūrus</td><td class="la">amandus</td></tr>
            <tr><td class="la">moneō</td><td class="la">monēns</td><td class="la">monitus</td><td class="la">monitūrus</td><td class="la">monendus</td></tr>
            <tr><td class="la">regō</td><td class="la">regēns</td><td class="la">rēctus</td><td class="la">rēctūrus</td><td class="la">regendus</td></tr>
            <tr><td class="la">capiō</td><td class="la">capiēns</td><td class="la">captus</td><td class="la">captūrus</td><td class="la">capiendus</td></tr>
            <tr><td class="la">audiō</td><td class="la">audiēns</td><td class="la">audītus</td><td class="la">audītūrus</td><td class="la">audiendus</td></tr>
          </tbody>
        </table></div>
        <ul>
          <li><strong>Present active</strong>: present stem + <span class="la">-ns</span> (gen. <span class="la">-ntis</span>); <span class="la">-iēns</span> in the third <span class="la">-iō</span> and fourth conjugations.</li>
          <li><strong>Perfect passive</strong>: from the fourth principal part (<span class="la">amātum → amātus</span>).</li>
          <li><strong>Future active</strong>: the same stem + <span class="la">-ūrus</span>: <span class="la">amāt- + ūrus</span>. For <span class="la">sum</span>: <span class="la">futūrus</span>, “future, about to be”, which gave English “future”.</li>
          <li><strong>Future passive</strong>: present stem + <span class="la">-ndus</span> (<span class="la">-endus</span> in the third and fourth): more in Lecture XL.</li>
        </ul>
      `
    },
    {
      title: '3. Declension of the present participle',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>m./f.</th><th>n.</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">amāns</td><td class="la">amāns</td></tr>
            <tr><th>Gen.</th><td class="la">amantis</td><td class="la">amantis</td></tr>
            <tr><th>Dat.</th><td class="la">amantī</td><td class="la">amantī</td></tr>
            <tr><th>Acc.</th><td class="la">amantem</td><td class="la">amāns</td></tr>
            <tr><th>Abl.</th><td class="la">amante (-ī)</td><td class="la">amante (-ī)</td></tr>
            <tr><th>Nom. pl.</th><td class="la">amantēs</td><td class="la">amantia</td></tr>
            <tr><th>Gen.</th><td class="la">amantium</td><td class="la">amantium</td></tr>
            <tr><th>Dat./Abl.</th><td class="la">amantibus</td><td class="la">amantibus</td></tr>
            <tr><th>Acc.</th><td class="la">amantēs (-īs)</td><td class="la">amantia</td></tr>
          </tbody>
        </table></div>
        <p>It follows <span class="la">potēns</span> (Lecture XVII), with one difference: when used as a true participle the ablative singular is usually <span class="la">-e</span> (<span class="la">ā puerō clāmante</span>); when used as an adjective, <span class="la">-ī</span> (<span class="la">ab amantī patre</span>, “by a loving father”). The perfect and future participles are declined like <span class="la">bonus</span>.</p>
      `
    },
    {
      title: '4. Relative time',
      html: `
        <p>A participle’s tense is relative to the main verb:</p>
        <ul>
          <li><strong>Present</strong>: at the same time. <span class="la">Puerum currentem vīdī.</span> I saw the boy (as he was) running.</li>
          <li><strong>Perfect</strong>: before. <span class="la">Urbem captam vīdī.</span> I saw the city (which had been) captured.</li>
          <li><strong>Future</strong>: after; often intention. <span class="la">Lūcius nāvigātūrus erat.</span> Lucius was about to sail. <span class="la">Vēnit auxilium lātūrus.</span> He came to bring help.</li>
        </ul>
        <p>So <span class="la">Puerum currentem videō</span> is “I see the boy running”, <span class="la">Puerum currentem vīdī</span> “I saw the boy running”: the participle is the same, because it is simultaneous in both.</p>
        <p>With <span class="la">sum</span>, the future participle forms a periphrasis of intention: <span class="la">nāvigātūrus sum</span> “I am about to sail, I intend to sail”, like German <em>ich bin im Begriff zu segeln</em>.</p>
      `
    },
    {
      title: '5. Translating participles',
      html: `
        <p>English and German often need a clause where Latin has a participle. Ask what relation the participle has to the main action, and choose:</p>
        <ul>
          <li><strong>Relative</strong>: <span class="la">Mīlitem pugnantem vīdī.</span> I saw a soldier who was fighting.</li>
          <li><strong>Temporal</strong>: <span class="la">Lūcius, in Italiam veniēns, amīcōs salūtāvit.</span> When he came to Italy, Lucius greeted his friends.</li>
          <li><strong>Causal</strong>: <span class="la">Puerī, perīculum timentēs, fūgērunt.</span> Because they feared danger, the boys fled.</li>
          <li><strong>Concessive</strong>: <span class="la">Mīlitēs, fortiter pugnantēs, victī sunt.</span> Although they fought bravely, the soldiers were defeated.</li>
          <li><strong>As a noun</strong>: <span class="la">amantēs</span> lovers; <span class="la">spectantēs</span> the spectators; <span class="la">quiēscentī</span> to someone resting.</li>
        </ul>
        <p>A literal “-ing” translation is a good first step; then improve it. Words such as <span class="la">quasi</span> “as if” or <span class="la">tamen</span> “nevertheless” in the main clause sometimes show the relation.</p>
      `
    }
  ],

  vocab: [
    { id: 'gladiator', head: 'gladiātor', la: 'gladiātor, gladiātōris', g: 'm', pos: 'noun, 3rd decl.', en: 'gladiator', stress: 'gla-di-Ā-tor · gla-di-ā-TŌ-ris', note: 'From gladius (Lecture XV): “swordsman”.' },
    { id: 'harena', head: 'harēna', la: 'harēna, harēnae', g: 'f', pos: 'noun, 1st decl.', en: 'sand; arena', stress: 'ha-RĒ-na', deriv: 'arena', note: 'The floor of the amphitheatre was sanded; also spelt arēna.' },
    { id: 'spectator', head: 'spectātor', la: 'spectātor, spectātōris', g: 'm', pos: 'noun, 3rd decl.', en: 'spectator, onlooker', stress: 'spec-TĀ-tor', deriv: 'spectator', note: 'From spectō.' },
    { id: 'scutum', head: 'scūtum', la: 'scūtum, scūtī', g: 'n', pos: 'noun, 2nd decl.', en: 'shield', stress: 'SCŪ-tum', deriv: 'escutcheon, esquire (via French)' },
    { id: 'magistratus', head: 'magistrātus', la: 'magistrātus, magistrātūs', g: 'm', pos: 'noun, 4th decl.', en: 'magistracy, public office; magistrate', stress: 'ma-gis-TRĀ-tus', deriv: 'magistrate; Magistrat' },
    { id: 'bracchium', head: 'bracchium', la: 'bracchium, bracchiī', g: 'n', pos: 'noun, 2nd decl.', en: 'arm (lower arm)', stress: 'BRAC-chi-um', deriv: 'brachial; brace (via French)', note: 'A Greek loan.' },
    { id: 'intro', head: 'intrō', la: 'intrō, intrāre, intrāvī, intrātum', pos: 'verb, 1st conj.', en: 'enter, go into', stress: 'IN-trō · in-TRĀ-re', deriv: 'enter, entrance' },
    { id: 'armo', head: 'armō', la: 'armō, armāre, armāvī, armātum', pos: 'verb, 1st conj.', en: 'arm, equip', stress: 'AR-mō · ar-MĀ-re', deriv: 'armed, army', note: 'From arma (Lecture IX).' },
    { id: 'tollo', head: 'tollō', la: 'tollō, tollere, sustulī, sublātum', pos: 'verb, 3rd conj. (irregular)', en: 'raise, lift; take away, remove', stress: 'TOL-lō · TOL-le-re', note: 'Perfect and supine come from the compound sus-tollō (sub + tollō): sustulī, sublātum.' },
    { id: 'quiesco', head: 'quiēscō', la: 'quiēscō, quiēscere, quiēvī, quiētum', pos: 'verb, 3rd conj.', en: 'rest, be quiet, sleep', stress: 'qui-ĒS-cō · qui-ĒS-ce-re', deriv: 'quiescent, quiet', note: 'Pliny 6.16.20: quiēscentī.' },
    { id: 'quasi', head: 'quasi', la: 'quasi', pos: 'adverb / conjunction', en: 'as if, as though; almost', stress: 'QUA-si', deriv: 'quasi-', note: 'quam + sī.' },
    { id: 'futurus', head: 'futūrus', la: 'futūrus, -a, -um', pos: 'participle of sum', en: 'about to be; future', stress: 'fu-TŪ-rus', deriv: 'future, futurism' }
  ],

  grammarCards: [
    { id: 'g24-four', front: 'The four participles of amō', back: 'amāns (pres. act.), amātus (perf. pass.), amātūrus (fut. act.), amandus (fut. pass.)' },
    { id: 'g24-gaps', front: 'Which participles does Latin lack?', back: 'Present passive (“being loved”) and perfect active (“having loved”)' },
    { id: 'g24-pres', front: 'Present participles of the five model verbs', back: 'amāns, monēns, regēns, capiēns, audiēns' },
    { id: 'g24-fut', front: 'How is the future active participle formed?', back: 'Supine stem + -ūrus: amāt-ūrus, rēct-ūrus, audīt-ūrus' },
    { id: 'g24-decl', front: 'amāns: gen., acc. sg., nom. pl. n.', back: 'amantis, amantem, amantia' },
    { id: 'g24-abl', front: 'Ablative of amāns: -e or -ī?', back: '-e as a participle (ā puerō clāmante); -ī as an adjective (ab amantī patre)' },
    { id: 'g24-time', front: 'Tense of a participle', back: 'Relative to the main verb: present = same time, perfect = before, future = after' },
    { id: 'g24-vidi', front: 'Puerum currentem vīdī.', back: 'I saw the boy running (simultaneous with vīdī).' },
    { id: 'g24-periph', front: 'nāvigātūrus sum', back: 'I am about to sail, I intend to sail' },
    { id: 'g24-purpose', front: 'Vēnit auxilium lātūrus.', back: 'He came to bring help (future participle of purpose).' },
    { id: 'g24-trans', front: 'Ways of translating a participle', back: 'Relative, temporal (when), causal (because), concessive (although), as a noun' },
    { id: 'g24-futurus', front: 'futūrus', back: 'Future participle of sum: about to be, future' },
    { id: 'g24-german', front: 'der vom Lehrer gelobte Schüler', back: 'puer ā magistrō laudātus' },
    { id: 'g24-victurus', front: 'quasi semper vīctūrus occiderit', back: 'he died as though he would live for ever (Pliny 6.16.2; vīctūrus from vīvō)' },
    { id: 'g24-laturus', front: 'lātūrus auxilium', back: 'intending to bring help (Pliny 6.16.9; from ferō)' },
    { id: 'g24-quiescenti', front: 'quiēscentī quam dēfūnctō similior', back: 'more like someone asleep than someone dead (Pliny 6.16.20)' },
    { id: 'g24-vertit', front: 'Vertit ille cōnsilium et quod studiōsō animō incohāverat obit maximō.', back: 'He changed his plan, and what he had begun in a spirit of inquiry he carried through in a spirit of heroism. (Pliny 6.16.9)' },
    { id: 'g24-morituri', front: 'moritūrī tē salūtant', back: '“those about to die salute you”: attested once (Suetonius, Claud. 21), not a regular formula of the arena' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">amāns</span>:', options: ['loving', 'loved', 'about to love', 'to be loved'], answer: 0, explain: 'Present active participle.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">amātūrus</span>:', options: ['about to love, going to love', 'having loved', 'loving', 'having been loved'], answer: 0, explain: 'Future active participle.' },
    { id: 'e3', type: 'mc', prompt: 'Genitive singular of <span class="la">amāns</span>:', options: ['amantis', 'amānsis', 'amantī', 'amantium'], answer: 0, explain: 'Stem amant-.' },
    { id: 'e4', type: 'mc', prompt: 'In <span class="la">Puerum currentem vīdī</span>, when is the boy running?', options: ['at the time I saw him', 'before I saw him', 'after I saw him', 'now'], answer: 0, explain: 'Present participle: same time as the main verb.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">urbs capta</span>:', options: ['the captured city', 'the city capturing', 'the city about to be captured', 'the city is captured'], answer: 0, explain: 'Perfect passive participle as adjective.' },
    { id: 'e6', type: 'mc', prompt: 'Which participle does Latin lack in ordinary verbs?', options: ['perfect active (“having loved”)', 'present active', 'perfect passive', 'future active'], answer: 0, explain: 'Only deponents have it (Lecture XXXV).' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Puerī rīdent___ lūdunt.</span>', hint: 'laughing (nom. pl.)', answers: ['ēs', 'es'], full: 'Puerī rīdentēs lūdunt.', explain: 'Nominative plural masculine.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Vīdī mīlitem pugnant___.</span>', hint: 'fighting (acc.)', answers: ['em'], full: 'Vīdī mīlitem pugnantem.', explain: 'Accusative singular.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Epistula ā Lūciō scrīpt___ advēnit.</span>', hint: 'written', answers: ['a'], full: 'Epistula ā Lūciō scrīpta advēnit.', explain: 'Perfect passive participle, feminine for epistula.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Gladiātōrēs pugnāt___ intrant.</span>', hint: 'about to fight', answers: ['ūrī', 'uri'], full: 'Gladiātōrēs pugnātūrī intrant.', explain: 'Future active participle, nom. pl. m.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Puella canī timent___ cibum dat.</span>', hint: 'fearing (dat.)', answers: ['ī', 'i'], full: 'Puella canī timentī cibum dat.', explain: 'Dative singular, agreeing with canī.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Urbem ab hostibus capt___ vīdimus.</span>', hint: 'captured (acc.)', answers: ['am'], full: 'Urbem ab hostibus captam vīdimus.', explain: 'Accusative feminine, with an agent.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">amāns</span> in the singular.', headers: ['m./f.', 'n.'], rows: [
      { label: 'Nom.', answers: ['amāns', 'amāns'] },
      { label: 'Gen.', answers: ['amantis', 'amantis'] },
      { label: 'Dat.', answers: ['amantī', 'amantī'] },
      { label: 'Acc.', answers: ['amantem', 'amāns'] },
      { label: 'Abl.', answers: ['amante|amantī', 'amante|amantī'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give three participles of each verb.', headers: ['Present active', 'Perfect passive', 'Future active'], rows: [
      { label: 'amō', answers: ['amāns', 'amātus', 'amātūrus'] },
      { label: 'moneō', answers: ['monēns', 'monitus', 'monitūrus'] },
      { label: 'regō', answers: ['regēns', 'rēctus', 'rēctūrus'] },
      { label: 'capiō', answers: ['capiēns', 'captus', 'captūrus'] },
      { label: 'audiō', answers: ['audiēns', 'audītus', 'audītūrus'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each participle to its meaning.', pairs: [
      ['amāns', 'loving'], ['amātus', '(having been) loved'], ['amātūrus', 'about to love'], ['amandus', 'to be loved'], ['regēns', 'ruling']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Puer rīdēns patrem salūtāvit.', tokens: ['The boy,', 'laughing,', 'greeted', 'his father'], explain: 'rīdēns: present participle agreeing with puer.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Mīlitēs pugnantēs vīdimus.', model: 'We saw the soldiers fighting.', accepted: ['we saw soldiers fighting', 'we saw fighting soldiers', 'we saw soldiers who were fighting', 'we saw soldiers as they were fighting', 'we have seen soldiers fighting', 'we saw soldiers while they were fighting'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Urbs capta ā mīlitibus dēlēta est.', model: 'The captured city was destroyed by the soldiers.', accepted: ['captured city was destroyed by soldiers', 'city having been captured was destroyed by soldiers', 'city was captured and destroyed by soldiers', 'city which had been captured was destroyed by soldiers', 'captured city has been destroyed by soldiers', 'city that had been captured was destroyed by soldiers'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Lūcius in Graeciam nāvigātūrus erat.', model: 'Lucius was about to sail to Greece.', accepted: ['lucius was about to sail to greece', 'lucius was going to sail to greece', 'lucius intended to sail to greece', 'lucius was on point of sailing to greece', 'lucius was about to sail for greece'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'a sleeping dog (nom.)', model: 'canis dormiēns', accepted: ['canis dormiēns'], explain: 'The present active participle ends in -ns, genitive -ntis (dormiēns, dormientis), like German -end in schlafend.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'the written letter (nom.)', model: 'epistula scrīpta', accepted: ['epistula scrīpta'], explain: 'The perfect passive participle is an adjective that agrees with its noun, like German der geschriebene Brief.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'about to come (m. sg. nom.)', model: 'ventūrus', accepted: ['ventūrus'], explain: 'Future active participle: the supine stem vent- + -ūrus, -a, -um.' },
    { id: 'e23', type: 'mc', prompt: 'In Pliny’s <span class="la">quasi semper vīctūrus occiderit</span>, <span class="la">vīctūrus</span> is:', options: ['future participle of vīvō: “as though he would live”', 'future participle of vincō: “as though he would conquer”', 'perfect participle: “conquered”', 'present participle: “living”'], answer: 0, explain: 'Without length marks it looks like victūrus from vincō; the sense decides.' },
    { id: 'e24', type: 'mc', prompt: 'Pliny says his uncle’s body looked:', options: ['more like someone asleep than dead', 'burned by the fire', 'covered in ash', 'like a statue'], answer: 0, explain: 'quiēscentī quam dēfūnctō similior.' },
    { id: 'e25', type: 'mc', prompt: 'German <em>der vom Lehrer gelobte Schüler</em> in Latin:', options: ['puer ā magistrō laudātus', 'puer magistrum laudāns', 'puer ā magistrō laudātūrus', 'puer magistrō laudandus'], answer: 0, explain: 'Perfect passive participle with an agent.' }
  ],

  reading: {
    title: 'Mūnus',
    note: 'Original passage: a gladiatorial show in the town. Tap any word.',
    text: 'Aestāte Mārcus fīliōs ad mūnus gladiātōrium in oppidum dūxit. Multī cīvēs in amphitheātrō sedentēs gladiātōrēs exspectābant. Tum gladiātōrēs, harēnam intrantēs, magistrātum salūtāvērunt. Duo ex eīs, Flamma et Fēlīx, prīmī pugnātūrī erant. Flamma, gladiō armātus, Fēlīcem, scūtō sē dēfendentem, diū oppugnābat. Spectātōrēs, magnā vōce clāmantēs, nunc alterum, nunc alterum laudābant. Tandem Fēlīx, in bracchiō vulnerātus, cecidit et digitum sustulit. Flamma, gladium tenēns, magistrātum spectābat. Populus clāmābat: “Mitte! Mitte!” Magistrātus, populum audiēns, manum mōvit, et Fēlīx vīvus ex harēnā portātus est. Quīntus, haec omnia vidēns, trīstis erat. “Cūr hominēs pugnantēs spectāmus?” rogāvit. Mārcus, diū tacēns, tandem respondit: “Mōs antīquus est. Sed tū rēctē sentīs: nōn omnēs Rōmānī hōs lūdōs amant.” Gāius autem, rīdēns: “Fēlīx, ā populō servātus, rē vērā fēlīx est!”',
    translation: 'In summer Marcus took his sons to a gladiatorial show in the town. Many citizens, sitting in the amphitheatre, were waiting for the gladiators. Then the gladiators, entering the arena, greeted the magistrate. Two of them, Flamma and Felix, were going to fight first. Flamma, armed with a sword, attacked Felix, who was defending himself with a shield, for a long time. The spectators, shouting loudly, praised now one, now the other. At last Felix, wounded in the arm, fell and raised a finger. Flamma, holding his sword, looked at the magistrate. The people shouted: “Let him go! Let him go!” The magistrate, hearing the people, moved his hand, and Felix was carried out of the arena alive. Quintus, seeing all this, was sad. “Why do we watch people fighting?” he asked. Marcus, silent for a long time, at last answered: “It is an old custom. But you feel rightly: not all Romans love these games.” But Gaius said, laughing: “Felix, saved by the people, really is lucky!”',
    notes: [
      { ref: 'ad mūnus gladiātōrium', html: '<span class="la">mūnus</span>, “duty, gift”, was the word for a gladiatorial show, which a magistrate or a rich citizen gave to the public at his own expense. The custom began, according to the ancient tradition, at funerals in the 3rd century BC.' },
      { ref: 'Multī cīvēs in amphitheātrō sedentēs', html: 'Present participle, nominative plural, agreeing with <span class="la">cīvēs</span>: “sitting”. Simultaneous with <span class="la">exspectābant</span>.' },
      { ref: 'gladiātōrēs, harēnam intrantēs', html: '<span class="la">intrantēs</span> takes a direct object, <span class="la">harēnam</span>: a participle keeps the verb’s construction.' },
      { ref: 'prīmī pugnātūrī erant', html: 'Future participle with <span class="la">erant</span>: “they were going to fight first”. Flamma (“Flame”) and Felix (“Lucky”) are names attested for real gladiators.' },
      { ref: 'Flamma, gladiō armātus', html: 'Perfect passive participle with an ablative of means: “armed with a sword”.' },
      { ref: 'Fēlīcem, scūtō sē dēfendentem', html: 'The participle agrees with <span class="la">Fēlīcem</span> (accusative) and has its own object <span class="la">sē</span> and its own ablative of means <span class="la">scūtō</span>. Translate with a relative clause: “Felix, who was defending himself with a shield”.' },
      { ref: 'Spectātōrēs, magnā vōce clāmantēs', html: 'Present participle with an ablative of manner.' },
      { ref: 'nunc alterum, nunc alterum', html: '“now the one, now the other”.' },
      { ref: 'Fēlīx, in bracchiō vulnerātus, cecidit et digitum sustulit', html: 'Perfect participle: the wound came before the fall. Raising a finger was the sign by which a defeated gladiator asked for release; it appears on reliefs and in literary sources. <span class="la">sustulit</span>: perfect of <span class="la">tollō</span>.' },
      { ref: 'Populus clāmābat: “Mitte! Mitte!”', html: '<span class="la">mitte</span>: “let (him) go!”, the call for a defeated fighter to be released. The famous “thumbs down” is a modern reconstruction; what gesture the crowd used is uncertain.' },
      { ref: 'Magistrātus, populum audiēns, manum mōvit', html: '<span class="la">audiēns</span>: present participle of a fourth-conjugation verb, <span class="la">-iēns</span>.' },
      { ref: 'Quīntus, haec omnia vidēns', html: 'Translate with a temporal clause: “when he saw all this” or “seeing all this”.' },
      { ref: 'Cūr hominēs pugnantēs spectāmus?', html: '<span class="la">pugnantēs</span> agrees with <span class="la">hominēs</span>, accusative plural: “people fighting”.' },
      { ref: 'nōn omnēs Rōmānī hōs lūdōs amant', html: 'The philosopher Seneca, writing under Nero, describes coming away from a midday show “more cruel and more inhuman” (<em>Letters</em> 7); such criticism was rare, and the games remained popular for centuries.' },
      { ref: 'Fēlīx, ā populō servātus, rē vērā fēlīx est!', html: 'A pun on the name. <span class="la">servātus</span>: perfect participle with an agent. <span class="la">rē vērā</span>: Lecture XXIII.' }
    ],
    glosses: {
      'aestāte': 'abl. of aestās: in summer', 'mārcus': 'Marcus (nom.)', 'fīliōs': 'acc. pl. of fīlius: sons', 'ad': 'to (+ acc.)', 'mūnus': 'show, public spectacle (acc.)', 'gladiātōrium': 'acc. n. of gladiātōrius: of gladiators', 'in': 'in, into', 'oppidum': 'acc. of oppidum: town', 'dūxit': 'perf. 3rd sg. of dūcō: took, led',
      'multī': 'many', 'cīvēs': 'nom. pl. of cīvis: citizens', 'amphitheātrō': 'abl. of amphitheātrum: amphitheatre', 'sedentēs': 'nom. pl. of sedēns: sitting', 'gladiātōrēs': 'nom./acc. pl. of gladiātor: gladiators', 'exspectābant': 'impf. 3rd pl. of exspectō: were waiting for',
      'tum': 'then', 'harēnam': 'acc. of harēna: arena', 'intrantēs': 'nom. pl. of intrāns: entering', 'magistrātum': 'acc. of magistrātus: magistrate', 'salūtāvērunt': 'perf. 3rd pl. of salūtō: greeted',
      'duo': 'two', 'ex': 'of, out of (+ abl.)', 'eīs': 'abl. pl. of is: them', 'flamma': 'Flamma (nom.)', 'et': 'and', 'fēlīx': 'Felix (nom.); lucky', 'prīmī': 'nom. pl. of prīmus: first', 'pugnātūrī': 'nom. pl. of pugnātūrus: about to fight', 'erant': 'were',
      'gladiō': 'abl. of gladius: sword', 'armātus': 'nom. m. of armātus: armed', 'fēlīcem': 'acc. of Fēlīx', 'scūtō': 'abl. of scūtum: shield', 'sē': 'himself', 'dēfendentem': 'acc. of dēfendēns: defending', 'diū': 'for a long time', 'oppugnābat': 'impf. 3rd sg. of oppugnō: attacked',
      'spectātōrēs': 'nom. pl. of spectātor: spectators', 'magnā': 'abl. f. of magnus: loud', 'vōce': 'abl. of vōx: voice', 'clāmantēs': 'nom. pl. of clāmāns: shouting', 'nunc': 'now', 'alterum': 'acc. m. of alter: the one, the other', 'laudābant': 'impf. 3rd pl. of laudō: praised',
      'tandem': 'at last', 'bracchiō': 'abl. of bracchium: arm', 'vulnerātus': 'nom. m. of vulnerātus: wounded', 'cecidit': 'perf. 3rd sg. of cadō: fell', 'digitum': 'acc. of digitus: finger', 'sustulit': 'perf. 3rd sg. of tollō: raised',
      'gladium': 'acc. of gladius: sword', 'tenēns': 'holding', 'spectābat': 'impf. 3rd sg. of spectō: looked at', 'populus': 'people (nom.)', 'clāmābat': 'impf. 3rd sg. of clāmō: shouted', 'mitte': 'imperative of mittō: let go!',
      'magistrātus': 'magistrate (nom.)', 'populum': 'acc. of populus: people', 'audiēns': 'hearing', 'manum': 'acc. of manus: hand', 'mōvit': 'perf. 3rd sg. of moveō: moved', 'vīvus': 'alive', 'harēnā': 'abl. of harēna: arena', 'portātus': 'nom. m. of portātus: carried', 'est': 'is; (+ participle) was',
      'quīntus': 'Quintus (nom.)', 'haec': 'these things (acc. pl. n.)', 'omnia': 'all (acc. pl. n.)', 'vidēns': 'seeing', 'trīstis': 'sad', 'erat': 'was', 'cūr': 'why?', 'hominēs': 'acc. pl. of homō: people', 'pugnantēs': 'acc. pl. of pugnāns: fighting', 'spectāmus': '1st pl. of spectō: we watch', 'rogāvit': 'perf. 3rd sg. of rogō: asked',
      'tacēns': 'being silent', 'respondit': 'perf. 3rd sg. of respondeō: answered', 'mōs': 'custom (nom.)', 'antīquus': 'old', 'sed': 'but', 'tū': 'you', 'rēctē': 'rightly', 'sentīs': 'you feel, think', 'nōn': 'not', 'omnēs': 'all', 'rōmānī': 'Romans (nom. pl.)', 'hōs': 'acc. pl. m. of hic: these', 'lūdōs': 'acc. pl. of lūdus: games', 'amant': '3rd pl. of amō: love',
      'gāius': 'Gaius (nom.)', 'autem': 'but, however', 'rīdēns': 'laughing', 'ā': 'by (+ abl.)', 'populō': 'abl. of populus: people', 'servātus': 'nom. m. of servātus: saved', 'rē': 'abl. of rēs', 'vērā': 'abl. f. of vērus: true (rē vērā: really)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What were the citizens doing in the amphitheatre?', options: ['Sitting and waiting for the gladiators', 'Fighting each other', 'Leaving the town', 'Selling food'], answer: 0, explain: 'in amphitheātrō sedentēs gladiātōrēs exspectābant.' },
      { id: 'r2', type: 'mc', prompt: 'How did Felix ask for release?', options: ['He raised a finger', 'He threw down his shield', 'He shouted to the magistrate', 'He ran away'], answer: 0, explain: 'digitum sustulit.' },
      { id: 'r3', type: 'mc', prompt: 'What happened to Felix?', options: ['He was carried out of the arena alive', 'He was killed', 'He won the fight', 'He escaped'], answer: 0, explain: 'Fēlīx vīvus ex harēnā portātus est.' },
      { id: 'r4', type: 'mc', prompt: 'How did Quintus feel about the show?', options: ['Sad', 'Excited', 'Bored', 'Afraid'], answer: 0, explain: 'Quīntus, haec omnia vidēns, trīstis erat.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">audiēns</span>:', options: ['hearing', 'heard', 'about to hear', 'to be heard'], answer: 0, explain: 'Present active participle, 4th conj.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">captūrus</span>:', options: ['about to take', 'having been taken', 'taking', 'to be taken'], answer: 0, explain: 'Future active participle.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Vēnit auxilium lātūrus.</span>', options: ['He came to bring help.', 'He came having brought help.', 'He came, bringing help now.', 'Help came.'], answer: 0, explain: 'Future participle of purpose.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Puellās cantant___ audīvī.</span>', hint: 'singing (acc. pl.)', answers: ['ēs', 'es', 'īs', 'is'], full: 'Puellās cantantēs audīvī.', explain: 'Accusative plural feminine.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Mīlitēs ab hoste vict___ fūgērunt.</span>', hint: 'defeated', answers: ['ī', 'i'], full: 'Mīlitēs ab hoste victī fūgērunt.', explain: 'Perfect passive participle, nom. pl. m.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Canem dormientem nōn excitāvimus.', model: 'We did not wake the sleeping dog.', accepted: ['we did not wake sleeping dog', 'we did not wake up sleeping dog', 'we did not rouse sleeping dog', 'we didn’t wake sleeping dog', 'we didnt wake sleeping dog', 'we have not woken sleeping dog', 'we did not wake dog that was sleeping', 'we did not wake dog while it was sleeping'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'about to be (m. sg. nom.)', model: 'futūrus', accepted: ['futūrus'], explain: 'In Classical Latin sum has no present participle; futūrus is its only participle (English future comes from it).' },
      { id: 't8', type: 'mc', prompt: 'Ablative of <span class="la">amāns</span> as a true participle:', options: ['amante', 'amantī', 'amantō', 'amāns'], answer: 0, explain: '-e as participle, -ī as adjective.' },
      { id: 't9', type: 'mc', prompt: 'Pliny’s <span class="la">lātūrus auxilium</span> comes from:', options: ['ferō', 'lātus (wide)', 'lateō', 'laudō'], answer: 0, explain: 'ferō, ferre, tulī, lātum.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">moritūrī tē salūtant</span> is attested:', options: ['once, at a mock sea battle under Claudius', 'at every gladiatorial show', 'in Caesar’s Gallic War', 'in Cicero’s speeches'], answer: 0, explain: 'Suetonius, Claudius 21.' },
      { id: 't11', type: 'mc', prompt: 'Which translation fits <span class="la">Mīlitēs, fortiter pugnantēs, victī sunt</span> best?', options: ['Although they fought bravely, the soldiers were defeated.', 'Because they fought bravely, the soldiers were defeated.', 'The soldiers will fight bravely and be defeated.', 'The defeated soldiers fought bravely afterwards.'], answer: 0, explain: 'Concessive: the context shows the contrast.' }
    ]
  },

  reference: [
    { title: 'Participles', headers: ['Verb', 'Present active', 'Perfect passive', 'Future active', 'Future passive'], rows: [
      ['amō', 'amāns', 'amātus', 'amātūrus', 'amandus'], ['moneō', 'monēns', 'monitus', 'monitūrus', 'monendus'], ['regō', 'regēns', 'rēctus', 'rēctūrus', 'regendus'], ['capiō', 'capiēns', 'captus', 'captūrus', 'capiendus'], ['audiō', 'audiēns', 'audītus', 'audītūrus', 'audiendus'], ['sum', '—', '—', 'futūrus', '—']
    ] },
    { title: 'amāns, amantis', headers: ['', 'm./f.', 'n.'], rows: [
      ['Nom. sg.', 'amāns', 'amāns'], ['Gen.', 'amantis', 'amantis'], ['Dat.', 'amantī', 'amantī'], ['Acc.', 'amantem', 'amāns'], ['Abl.', 'amante (-ī)', 'amante (-ī)'],
      ['Nom. pl.', 'amantēs', 'amantia'], ['Gen.', 'amantium', 'amantium'], ['Dat./Abl.', 'amantibus', 'amantibus'], ['Acc.', 'amantēs (-īs)', 'amantia']
    ] },
    { title: 'Time and translation', headers: ['Participle', 'Time relative to main verb', 'Typical translation'], rows: [
      ['Present', 'same time', '-ing; while, as, who …'], ['Perfect passive', 'before', '-ed; having been …; after, since …'], ['Future active', 'after', 'about to, going to; intending to']
    ] }
  ]
});
