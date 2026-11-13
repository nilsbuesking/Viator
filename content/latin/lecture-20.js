/*
 * Latin — Lecture XX: the perfect passive system (perfect participle; perfect, pluperfect and
 * future perfect passive); interrogative pronoun quis, quid and adjective quī, quae, quod.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotations (Cicero, In Catilinam 1.1; Caesar, De bello Gallico 1.1; Pliny, Letters
 * 6.16.5 and 6.16.20; Horace, Odes 1.11.1) checked against the texts supplied by Nils.
 * Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-20',
  number: 20,
  title: 'Quō ūsque tandem',
  subtitle: 'The perfect passive participle; perfect, pluperfect and future perfect passive; quis, quid and the interrogative adjective',
  minutes: 65,

  intro: `
    <p>The passive of Lecture XIX was a matter of endings. The perfect passive is built differently, in two words, exactly as in German: a participle and a form of “to be”. <span class="la">laudātus est</span>, “he was praised, he has been praised”, like <em>er ist gelobt worden</em>. The participle is the fourth principal part, which you have been learning since Lecture I without needing it: <span class="la">amō, amāre, amāvī, <strong>amātum</strong></span>.</p>
    <p>At last Caesar’s first sentence can be fully explained: <span class="la">Gallia est omnis <strong>dīvīsa</strong></span>, with a participle in the feminine because <span class="la">Gallia</span> is feminine. And the endings of the participle bring something new to the verb: <strong>agreement</strong> with the subject in gender and number, like an adjective.</p>
    <p>The second half of the lecture introduces the questions “who?” and “what?”: <span class="la">quis, quid</span>, and the adjective <span class="la">quī, quae, quod</span> “which?”, which has the forms you learnt in Lecture XVIII. Cicero’s most famous sentence opens with them.</p>
  `,

  background: [
    {
      title: 'Quō ūsque tandem: Cicero against Catiline',
      html: `
        <p>In 63 BC Cicero was consul, and Lucius Sergius Catilina, a patrician who had twice failed to win the consulship, was organising an armed rising. On 8 November Cicero summoned the senate to the temple of Jupiter Stator and, with Catiline present, delivered the first of four speeches against him. It opens with a burst of questions: <span class="la">Quō ūsque tandem abūtēre, Catilīna, patientiā nostrā?</span> Catiline left Rome that night to join his supporters in Etruria. In early December five of his associates in the city were arrested and, after a debate in the senate, executed without trial; Catiline himself died in battle at Pistoria early in 62.</p>
        <p>Two cautions. The speeches as we read them were revised by Cicero for publication about three years later, when the executions had made him politically vulnerable, so they are not a transcript. And our other main account, Sallust’s <em>Catiline</em>, was written some twenty years afterwards by a man with his own view of events. Cicero was exiled in 58 BC for having put Roman citizens to death without trial.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari_-_3.jpg/960px-Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari_-_3.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari_-_3.jpg/500px-Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari_-_3.jpg|https://upload.wikimedia.org/wikipedia/commons/8/81/Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari_-_3.jpg" alt="Fresco of an orator in a white toga addressing seated senators, while one man sits isolated on a bench"><figcaption>Cesare Maccari, <em>Cicero denounces Catiline</em> (1882–88), a fresco in the Palazzo Madama in Rome, seat of the Italian Senate. Catiline sits alone; the senators have moved away from him, a detail Cicero himself mentions (Cat. 1.16). The setting is imagined. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari_-_3.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Corpus inventum integrum',
      html: `
        <p>Pliny’s letter on Vesuvius ends the uncle’s story with a perfect passive: when daylight returned, on the third day after he had last been seen, <span class="la">corpus inventum integrum illaesum opertumque ut fuerat indūtus</span>, “his body was found intact, unharmed, and covered as he had been dressed”. The <span class="la">est</span> is left out, as often in Latin narrative.</p>
        <p>The cause of death is not certain. The nephew thought that dense fumes blocked his breathing, adding that his throat was naturally weak and often inflamed. Modern writers have suggested a heart attack or an asthma attack brought on by the ash; since the people around him survived to tell the story, many doubt that fumes alone killed him. The letter does not allow a firm answer.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pierre-Henri_de_Valenciennes_Eruption_du_Vesuve_Mus%C3%A9e_des_Augustins_Toulouse_78_1_1.jpg/960px-Pierre-Henri_de_Valenciennes_Eruption_du_Vesuve_Mus%C3%A9e_des_Augustins_Toulouse_78_1_1.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pierre-Henri_de_Valenciennes_Eruption_du_Vesuve_Mus%C3%A9e_des_Augustins_Toulouse_78_1_1.jpg/500px-Pierre-Henri_de_Valenciennes_Eruption_du_Vesuve_Mus%C3%A9e_des_Augustins_Toulouse_78_1_1.jpg|https://upload.wikimedia.org/wikipedia/commons/f/f1/Pierre-Henri_de_Valenciennes_Eruption_du_Vesuve_Mus%C3%A9e_des_Augustins_Toulouse_78_1_1.jpg" alt="Painting of a volcanic eruption over a bay at night, with figures on the shore"><figcaption>Pierre-Henri de Valenciennes, <em>The Eruption of Vesuvius</em> (1813; Toulouse, Musée des Augustins), painted with the death of the elder Pliny in mind. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Pierre-Henri_de_Valenciennes_Eruption_du_Vesuve_Mus%C3%A9e_des_Augustins_Toulouse_78_1_1.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'ist geteilt and dīvīsa est',
      html: `
        <p>German distinguishes two passives: the action (<em>Vorgangspassiv</em>: <em>Gallien wurde geteilt</em>) and the resulting state (<em>Zustandspassiv</em>: <em>Gallien ist geteilt</em>). Latin uses one form for both. <span class="la">Gallia dīvīsa est</span> can mean “Gaul was divided” (an event) or “Gaul is divided” (a state), and Caesar’s sentence is usually taken in the second sense: Gaul <em>is</em> divided into three parts.</p>
        <p>This creates a trap. A German speaker reads <span class="la">amātus est</span> as <em>er ist geliebt</em> and thinks of the present. But it is a perfect: “he was loved, he has been loved”. The present passive is <span class="la">amātur</span>, <em>er wird geliebt</em>. Only when the sense is plainly a lasting state (“is divided, is closed, is written”) does an English or German present give the best translation.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Quō ūsque tandem abūtēre, Catilīna, patientiā nostrā? quam diū etiam furor iste tuus nōs ēlūdet? quem ad fīnem sēsē effrēnāta iactābit audācia?</p>
    <p>“How long, Catiline, will you go on abusing our patience? How long will that madness of yours still mock us? To what end will your unbridled audacity throw itself about?” Cicero, <em>In Catilinam</em> 1.1, the opening; checked against the copy in the course’s source files, length marks added.</p>
    <p><span class="la">quem ad fīnem</span>: the interrogative adjective <span class="la">quem</span> with <span class="la">fīnem</span>, “to what end?”. <span class="la">abūtēre</span> is a deponent (Lecture XXXV) in the second person singular future, with the ending <span class="la">-re</span> for <span class="la">-ris</span> (Lecture XIX). <span class="la">effrēnāta</span>, “unbridled”, is a perfect passive participle used as an adjective (<span class="la">ex</span> + <span class="la">frēnum</span>, “bridle”). A few lines later Cicero asks <span class="la">quid proximā, quid superiōre nocte ēgeris … quem nostrum ignōrāre arbitrāris?</span>, “what you did last night and the night before … which of us do you think does not know?”: two more interrogatives.</p>
    <p>Three perfect passives from the course texts: Caesar’s <span class="la">Gallia est omnis dīvīsa</span> (BG 1.1) and, a few lines later, <span class="la">quam Gallōs obtinēre dictum est</span>, “which, as has been said, the Gauls hold”; Pliny’s <span class="la">Vesuvium fuisse posteā cognitum est</span>, “it was learnt afterwards that it had been Vesuvius” (6.16.5), about the mountain from which the cloud rose; and his <span class="la">corpus inventum integrum</span> (6.16.20). Horace’s <span class="la">quem mihi, quem tibi fīnem</span> (Lecture XII) is the interrogative adjective again.</p>
  `,

  pronunciation: `
    <h3>The participle</h3>
    <p>The stress follows the usual rule: <span class="la">a-MĀ-tus, MO-ni-tus, au-DĪ-tus, CAP-tus</span>. Some participles have a long vowel where the present has a short one: <span class="la">rēctus</span> (<span class="la">regō</span>), <span class="la">lēctus</span> (<span class="la">legō</span>), <span class="la">āctus</span> (<span class="la">agō</span>), but <span class="la">factus, captus</span> keep the short vowel. Grammarians call the pattern Lachmann’s law; Aulus Gellius already discusses <span class="la">āctus</span>. Its explanation is still debated.</p>
    <h3>quis, quid</h3>
    <p><span class="la">quid</span> ends in a <em>d</em>, but before a voiceless sound it was probably pronounced <em>t</em>, as German final <em>d</em> always is (<em>Rad</em> = <em>Rat</em>). Inscriptions sometimes write <span class="la">quit</span>.</p>
  `,

  grammar: [
    {
      title: '1. The perfect passive participle',
      html: `
        <p>The fourth principal part ends in <span class="la">-um</span>: <span class="la">amātum, monitum, ductum, captum, audītum</span>. Change <span class="la">-um</span> to <span class="la">-us, -a, -um</span> and you have the <strong>perfect passive participle</strong>, an adjective declined like <span class="la">bonus</span>:</p>
        <ul>
          <li><span class="la">amātus, -a, -um</span>: having been loved, loved</li>
          <li><span class="la">monitus</span>: warned; <span class="la">ductus</span>: led; <span class="la">captus</span>: taken; <span class="la">audītus</span>: heard</li>
          <li><span class="la">dīvīsus</span> (<span class="la">dīvidō</span>): divided; <span class="la">factus</span> (<span class="la">faciō</span>): done, made; <span class="la">dictus</span> (<span class="la">dīcō</span>): said</li>
        </ul>
        <p>Like the German <em>Partizip II</em> (<em>geliebt, gewarnt, geteilt</em>), it can stand as an adjective: <span class="la">urbs capta</span>, “the captured city”; <span class="la">effrēnāta audācia</span>, “unbridled audacity”. Lecture XXIV treats participles in full.</p>
      `
    },
    {
      title: '2. The perfect passive',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Perfect</th><th>Pluperfect</th><th>Future perfect</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">amātus, -a, -um sum</td><td class="la">amātus eram</td><td class="la">amātus erō</td></tr>
            <tr><th>2nd sg.</th><td class="la">amātus es</td><td class="la">amātus erās</td><td class="la">amātus eris</td></tr>
            <tr><th>3rd sg.</th><td class="la">amātus est</td><td class="la">amātus erat</td><td class="la">amātus erit</td></tr>
            <tr><th>1st pl.</th><td class="la">amātī, -ae, -a sumus</td><td class="la">amātī erāmus</td><td class="la">amātī erimus</td></tr>
            <tr><th>2nd pl.</th><td class="la">amātī estis</td><td class="la">amātī erātis</td><td class="la">amātī eritis</td></tr>
            <tr><th>3rd pl.</th><td class="la">amātī sunt</td><td class="la">amātī erant</td><td class="la">amātī erunt</td></tr>
          </tbody>
        </table></div>
        <p>The tense is shown by <span class="la">sum</span>, but one step back in time: present <span class="la">sum</span> gives the <em>perfect</em>, imperfect <span class="la">eram</span> the <em>pluperfect</em>, future <span class="la">erō</span> the <em>future perfect</em>. German works the same way with <em>sein</em>: <em>er ist gekommen</em> is a perfect, though <em>ist</em> is a present.</p>
        <ul>
          <li><span class="la">laudātus est</span>: he was praised, he has been praised</li>
          <li><span class="la">laudātus erat</span>: he had been praised</li>
          <li><span class="la">laudātus erit</span>: he will have been praised</li>
        </ul>
        <p>The method is the same for all four conjugations, because the participle carries the meaning: <span class="la">captus est, audīta est, ducta sunt</span>.</p>
      `
    },
    {
      title: '3. Agreement',
      html: `
        <p>The participle agrees with the subject in <strong>gender, number</strong> and (nominative) case:</p>
        <ul>
          <li><span class="la">Puer laudātus est.</span> <span class="la">Puella laudāta est.</span> <span class="la">Bellum laudātum est.</span></li>
          <li><span class="la">Puerī laudātī sunt.</span> <span class="la">Puellae laudātae sunt.</span> <span class="la">Bella laudāta sunt.</span></li>
          <li><span class="la">Gallia est omnis dīvīsa.</span> <span class="la">dīvīsa</span>: feminine singular for <span class="la">Gallia</span>.</li>
        </ul>
        <p>German keeps its participle unchanged (<em>sie ist gelobt worden</em>); in Latin it changes like an adjective. The order <span class="la">est laudātus</span> is also possible, and <span class="la">est</span> or <span class="la">sunt</span> is often left out in narrative: Pliny’s <span class="la">corpus inventum</span> [<span class="la">est</span>].</p>
        <p>An impersonal perfect passive has the neuter singular: <span class="la">dictum est</span> “it has been said”, <span class="la">cognitum est</span> “it was learnt”.</p>
      `
    },
    {
      title: '4. The interrogative pronoun quis, quid',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>m./f.</th><th>n.</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">quis</td><td class="la">quid</td></tr>
            <tr><th>Gen.</th><td class="la">cuius</td><td class="la">cuius</td></tr>
            <tr><th>Dat.</th><td class="la">cui</td><td class="la">cui</td></tr>
            <tr><th>Acc.</th><td class="la">quem</td><td class="la">quid</td></tr>
            <tr><th>Abl.</th><td class="la">quō</td><td class="la">quō</td></tr>
          </tbody>
        </table></div>
        <p>In the singular, masculine and feminine share one set of forms (<span class="la">quis</span> “who?”, of a man or a woman), and the neuter has <span class="la">quid</span> “what?” in nominative and accusative. Otherwise the forms are those of the relative; the plural is identical with the relative plural (<span class="la">quī, quae, quae; quōrum …</span>).</p>
        <ul>
          <li><span class="la">Quis vēnit?</span> Who came? <span class="la">Quid vidēs?</span> What do you see?</li>
          <li><span class="la">Cuius liber est?</span> Whose book is it? <span class="la">Cui dedistī?</span> To whom did you give it?</li>
          <li><span class="la">Quem vīdistī?</span> Whom did you see? <span class="la">Quōcum ambulābās?</span> With whom were you walking?</li>
        </ul>
        <p>German has the same pair: <em>wer?</em> for persons of either sex and <em>was?</em> for things, with <em>wessen, wem, wen</em>. <span class="la">quis</span> and <em>wer</em> are related (Lecture XVIII).</p>
      `
    },
    {
      title: '5. The interrogative adjective quī, quae, quod',
      html: `
        <p>With a noun, “which?” or “what (kind of)?” is the interrogative adjective, which has exactly the forms of the relative pronoun: <span class="la">Quī vir vēnit?</span> “Which man came?”; <span class="la">Quae fēmina?</span>; <span class="la">Quod bellum?</span>; <span class="la">Quem ad fīnem?</span> “To what end?”.</p>
        <p>The rule of thumb: <span class="la">quis, quid</span> stand alone (German <em>wer, was</em>); <span class="la">quī, quae, quod</span> go with a noun (German <em>welcher, welche, welches</em>). Latin authors do not always keep this rule (<span class="la">quis homō?</span> occurs), but it is the one to use.</p>
        <p>To tell the interrogative adjective from the relative, look at the punctuation and the context: a question mark, or a verb of asking, means the interrogative.</p>
      `
    }
  ],

  vocab: [
    { id: 'quis', head: 'quis, quid', la: 'quis, quid', pos: 'interrogative pronoun', en: 'who? what?', stress: 'QUIS · QUID', deriv: 'quiddity, quid pro quo; wer, was', note: 'Gen. cuius, dat. cui, acc. quem, quid.' },
    { id: 'qui-interrog', head: 'quī? quae? quod?', la: 'quī, quae, quod', pos: 'interrogative adjective', en: 'which? what (kind of)?', stress: 'QUĪ · QUAE · QUOD', note: 'Same forms as the relative; used with a noun. Quem ad fīnem? To what end?' },
    { id: 'quando', head: 'quandō', la: 'quandō', pos: 'interrogative adverb', en: 'when?', stress: 'QUAN-dō', deriv: 'quando (Italian)' },
    { id: 'quousque', head: 'quō ūsque', la: 'quō ūsque (quōusque)', pos: 'interrogative adverb', en: 'how far? how long?', stress: 'quō-ŪS-que', note: 'Cicero, Cat. 1.1.' },
    { id: 'statim', head: 'statim', la: 'statim', pos: 'adverb', en: 'immediately, at once', stress: 'STA-tim', deriv: 'stat (medical)' },
    { id: 'nemo', head: 'nēmō', la: 'nēmō, (gen. nūllīus), dat. nēminī, acc. nēminem', g: 'm', pos: 'pronoun', en: 'no one, nobody', stress: 'NĒ-mō', note: 'ne + homō. Genitive and ablative usually from nūllus.' },
    { id: 'arca', head: 'arca', la: 'arca, arcae', g: 'f', pos: 'noun, 1st decl.', en: 'chest, strong-box', stress: 'AR-ca', deriv: 'ark; Arche (Noah’s ark)' },
    { id: 'dens', head: 'dēns', la: 'dēns, dentis', g: 'm', pos: 'noun, 3rd decl.', en: 'tooth', stress: 'DĒNS · DEN-tis', deriv: 'dental, dentist; related to Zahn', note: 'Gen. pl. dentium or dentum.' },
    { id: 'odor', head: 'odor', la: 'odor, odōris', g: 'm', pos: 'noun, 3rd decl.', en: 'smell, scent', stress: 'O-dor · o-DŌ-ris', deriv: 'odour, deodorant' },
    { id: 'caro', head: 'carō', la: 'carō, carnis', g: 'f', pos: 'noun, 3rd decl. (irregular)', en: 'meat, flesh', stress: 'CA-rō · CAR-nis', deriv: 'carnivore, carnival', note: 'Carnival: probably from carnem levāre, “to take away meat”, before Lent.' },
    { id: 'rapio', head: 'rapiō', la: 'rapiō, rapere, rapuī, raptum', pos: 'verb, 3rd conj. (-iō)', en: 'seize, snatch, carry off', stress: 'RA-pi-ō · RA-pe-re', deriv: 'rapid, rapture, rapacious' },
    { id: 'mando', head: 'mandō', la: 'mandō, mandāre, mandāvī, mandātum', pos: 'verb, 1st conj.', en: 'entrust, commit; order', stress: 'MAN-dō · man-DĀ-re', deriv: 'mandate, command; Mandant' },
    { id: 'obtineo', head: 'obtineō', la: 'obtineō, obtinēre, obtinuī, obtentum', pos: 'verb, 2nd conj.', en: 'hold, occupy; obtain', stress: 'ob-TI-ne-ō · ob-ti-NĒ-re', deriv: 'obtain', note: 'ob + teneō. Caesar: quam Gallōs obtinēre dictum est.' },
    { id: 'cognosco', head: 'cognōscō', la: 'cognōscō, cognōscere, cognōvī, cognitum', pos: 'verb, 3rd conj.', en: 'get to know, learn, recognise; perf. know', stress: 'co-GNŌS-cō · co-GNŌS-ce-re', deriv: 'recognise, cognition', note: 'Perfect cognōvī: “I have learnt”, so “I know”.' }
  ],

  grammarCards: [
    { id: 'g20-ppp', front: 'How is the perfect passive participle formed?', back: 'From the 4th principal part: amātum → amātus, -a, -um' },
    { id: 'g20-perf', front: 'amō: perfect passive', back: 'amātus sum, es, est; amātī sumus, estis, sunt' },
    { id: 'g20-plup', front: 'amō: pluperfect passive', back: 'amātus eram, erās, erat; amātī erāmus, erātis, erant' },
    { id: 'g20-futp', front: 'amō: future perfect passive', back: 'amātus erō, eris, erit; amātī erimus, eritis, erunt' },
    { id: 'g20-step', front: 'Why does amātus sum mean “I was loved”?', back: 'sum + participle gives the perfect, one step back in time, as German “ist gekommen”.' },
    { id: 'g20-agree', front: 'Puella laudāta est; bella laudāta sunt', back: 'The participle agrees with the subject in gender and number.' },
    { id: 'g20-trap', front: 'amātus est vs amātur', back: 'he was / has been loved (perfect) vs he is loved (present)' },
    { id: 'g20-state', front: 'Gallia est omnis dīvīsa', back: 'Gaul as a whole is divided (state); also possible: was divided' },
    { id: 'g20-impers', front: 'dictum est; cognitum est', back: 'it has been said; it was learnt (impersonal, neuter)' },
    { id: 'g20-quis', front: 'quis, quid: singular', back: 'quis/quid; cuius; cui; quem/quid; quō' },
    { id: 'g20-quisqui', front: 'quis vs quī (interrogative)', back: 'quis stands alone (wer); quī goes with a noun (welcher)' },
    { id: 'g20-quodbellum', front: 'Quod bellum?', back: 'Which war? (interrogative adjective, neuter)' },
    { id: 'g20-cicero', front: 'Quō ūsque tandem abūtēre, Catilīna, patientiā nostrā?', back: 'How long, Catiline, will you go on abusing our patience? (Cat. 1.1)' },
    { id: 'g20-quem', front: 'quem ad fīnem sēsē effrēnāta iactābit audācia?', back: 'to what end will your unbridled audacity throw itself about? (Cat. 1.1)' },
    { id: 'g20-pliny', front: 'corpus inventum integrum illaesum', back: 'his body was found intact and unharmed (Pliny 6.16.20; est omitted)' },
    { id: 'g20-vesuv', front: 'Vesuvium fuisse posteā cognitum est', back: 'it was learnt afterwards that it had been Vesuvius (Pliny 6.16.5)' },
    { id: 'g20-63', front: 'First speech against Catiline', back: '8 November 63 BC, temple of Jupiter Stator; published in revised form c. 60 BC' },
    { id: 'g20-vorgang', front: 'Vorgangspassiv and Zustandspassiv in Latin', back: 'One form for both: dīvīsa est = wurde geteilt / ist geteilt' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">laudātus est</span>:', options: ['he was praised / has been praised', 'he is praised', 'he will be praised', 'he had praised'], answer: 0, explain: 'Perfect passive.' },
    { id: 'e2', type: 'mc', prompt: 'Why <span class="la">dīvīsa</span> in <span class="la">Gallia est omnis dīvīsa</span>?', options: ['It agrees with Gallia, feminine singular', 'All participles end in -a', 'It agrees with omnis', 'It is neuter plural'], answer: 0, explain: 'The participle agrees with the subject.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">monitī erant</span>:', options: ['they had been warned', 'they have been warned', 'they will have been warned', 'they were being warned'], answer: 0, explain: 'eram + participle: pluperfect.' },
    { id: 'e4', type: 'mc', prompt: 'Perfect passive participle of <span class="la">dūcō, dūcere, dūxī, ductum</span>:', options: ['ductus', 'dūxus', 'dūcitus', 'dūcēns'], answer: 0, explain: 'From the 4th principal part.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Quis vēnit?</span>', options: ['Who came?', 'Which man came?', 'What came?', 'Whom did he come to?'], answer: 0, explain: 'quis: who?' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Quod bellum?</span>', options: ['Which war?', 'Because of the war', 'The war which …', 'What war is it?'], answer: 0, explain: 'Interrogative adjective with a noun.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Puella laudāt___ est.</span>', hint: '(was) praised', answers: ['a'], full: 'Puella laudāta est.', explain: 'Feminine singular.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Puerī monit___ sunt.</span>', hint: '(were) warned', answers: ['ī', 'i'], full: 'Puerī monitī sunt.', explain: 'Masculine plural.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Urbs ā mīlitibus capt___ erat.</span>', hint: 'had been captured', answers: ['a'], full: 'Urbs ā mīlitibus capta erat.', explain: 'urbs is feminine.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Qu___ vīdistī?</span>', hint: 'whom (one person)', answers: ['em'], full: 'Quem vīdistī?', explain: 'Accusative singular.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Qu___ dīcis?</span>', hint: 'what', answers: ['id'], full: 'Quid dīcis?', explain: 'Neuter accusative.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Bellum ā Caesare gest___ est.</span>', hint: 'was waged', answers: ['um'], full: 'Bellum ā Caesare gestum est.', explain: 'bellum is neuter.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the perfect and pluperfect passive of <span class="la">amō</span> (masculine).', headers: ['Perfect', 'Pluperfect'], rows: [
      { label: '1st sg.', answers: ['amātus sum', 'amātus eram'] },
      { label: '2nd sg.', answers: ['amātus es', 'amātus erās'] },
      { label: '3rd sg.', answers: ['amātus est', 'amātus erat'] },
      { label: '1st pl.', answers: ['amātī sumus', 'amātī erāmus'] },
      { label: '2nd pl.', answers: ['amātī estis', 'amātī erātis'] },
      { label: '3rd pl.', answers: ['amātī sunt', 'amātī erant'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">quis, quid</span>.', headers: ['m./f.', 'n.'], rows: [
      { label: 'Nom.', answers: ['quis', 'quid'] },
      { label: 'Gen.', answers: ['cuius', 'cuius'] },
      { label: 'Dat.', answers: ['cui', 'cui'] },
      { label: 'Acc.', answers: ['quem', 'quid'] },
      { label: 'Abl.', answers: ['quō', 'quō'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each question word to its meaning.', pairs: [
      ['quis', 'who?'], ['quid', 'what?'], ['cuius', 'whose?'], ['cui', 'to whom?'], ['quem', 'whom?']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Quis epistulam scrīpsit?', tokens: ['Who', 'wrote', 'the', 'letter?'], explain: 'quis: subject.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Urbs ā Rōmānīs capta est.', model: 'The city was captured by the Romans.', accepted: ['city was captured by romans', 'city has been captured by romans', 'city was taken by romans', 'city has been taken by romans', 'city was seized by romans'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Quis tē vocāvit?', model: 'Who called you?', accepted: ['who called you', 'who has called you'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Puerī ā patre monitī erant.', model: 'The boys had been warned by their father.', accepted: ['boys had been warned by father', 'boys had been warned by their father', 'boys had been advised by father', 'boys had been advised by their father'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'What do you (sg.) see?', model: 'Quid vidēs?', accepted: ['quid vidēs', 'quid tū vidēs'], explain: 'Quid is the neuter interrogative, here the object. The question word comes first, as in German Was siehst du?' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'The letter was written.', model: 'Epistula scrīpta est.', accepted: ['epistula scrīpta est', 'epistula est scrīpta'], explain: 'Perfect passive = perfect participle + sum; the participle agrees with feminine epistula. It looks like German ist geschrieben, but it is a past tense: “was written”.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'which girl? (nom.)', model: 'quae puella?', accepted: ['quae puella'], explain: 'The interrogative adjective has the forms of the relative: feminine nominative quae.' },
    { id: 'e23', type: 'mc', prompt: 'Cicero’s <span class="la">Quō ūsque tandem abūtēre, Catilīna, patientiā nostrā?</span> asks:', options: ['How long will you abuse our patience?', 'Where are you going, Catiline?', 'Why do you abuse us?', 'Who abused our patience?'], answer: 0, explain: 'quō ūsque: how far, how long.' },
    { id: 'e24', type: 'mc', prompt: 'Pliny: <span class="la">Vesuvium fuisse posteā cognitum est</span>. What was learnt afterwards?', options: ['That the cloud had risen from Vesuvius', 'That his uncle had died', 'That Pompeii was buried', 'The date of the eruption'], answer: 0, explain: 'From a distance it was unclear from which mountain the cloud came.' },
    { id: 'e25', type: 'mc', prompt: '<span class="la">amātus est</span> does NOT mean:', options: ['he is (being) loved', 'he was loved', 'he has been loved', 'he was loved (once, in the past)'], answer: 0, explain: '“He is loved” is amātur.' }
  ],

  reading: {
    title: 'Quis pecūniam rapuit?',
    note: 'Original passage: the market money disappears. Tap any word.',
    text: 'Paucīs post diēbus Gāius, cui ratiōnēs domūs mandātae erant, magnā vōce clāmāvit: “Pecūnia nostra rapta est!” Mārcus et Quīntus statim vēnērunt. “Quid dīcis?” rogāvit Mārcus. “Quae pecūnia? Quandō rapta est?” Gāius respondit: “Sēstertiī quōs mercātor nōbīs dedit! Herī in hāc arcā positī sunt; hodiē arca est vacua.” “Quis hoc fēcit?” rogāvit Quīntus. “Fortasse fūr ab agrīs vēnit.” Servī vocātī sunt et interrogātī, sed nihil sciēbant. Mārcus: “Quid vīdistis? Quem in vīllā vīdistis?” Nēmō aliquid vīderat. Diū pecūnia quaerēbātur. Tandem Quīntus canem in āreā vīdit, quī saccum parvum dentibus tenēbat. “Ecce fūr noster!” clāmāvit. Saccus ā Quīntō captus est et Mārcō datus est: omnēs sēstertiī in eō erant. “Cūr canis saccum rapuit?” rogāvit Gāius. Mārcus rīsit: “Hic saccus ā mercātōre portātus erat, quī carnem in eō habuerat. Odor carnis canem dēlectāvit.” Pecūnia servāta est, et canis ab omnibus laudātus est, nam fūrem nōn momorderat, sed pecūniam reportāverat. Sed Gāius dīxit: “Pecūnia servāta est; ratiōnēs autem meae nōn iam tūtae sunt!”',
    translation: 'A few days later Gaius, to whom the household accounts had been entrusted, shouted in a loud voice: “Our money has been stolen!” Marcus and Quintus came at once. “What are you saying?” asked Marcus. “What money? When was it stolen?” Gaius answered: “The sesterces which the dealer gave us! Yesterday they were put in this chest; today the chest is empty.” “Who did this?” asked Quintus. “Perhaps a thief came from the fields.” The slaves were called and questioned, but they knew nothing. Marcus: “What did you see? Whom did you see in the house?” Nobody had seen anything. For a long time the money was searched for. At last Quintus saw the dog in the yard, holding a small bag in his teeth. “Look, our thief!” he shouted. The bag was taken by Quintus and given to Marcus: all the sesterces were in it. “Why did the dog snatch the bag?” asked Gaius. Marcus laughed: “This bag had been carried by the dealer, who had kept meat in it. The smell of the meat delighted the dog.” The money was saved, and the dog was praised by everyone, for he had not bitten a thief, but he had brought the money back. But Gaius said: “The money has been saved; but my accounts are no longer safe!”',
    notes: [
      { ref: 'cui ratiōnēs domūs mandātae erant', html: 'Pluperfect passive: “to whom the accounts had been entrusted” (Lecture XVI). <span class="la">mandātae</span>: feminine plural for <span class="la">ratiōnēs</span>. <span class="la">domūs</span>: genitive of <span class="la">domus</span>, “house” (fourth declension, Lecture XXI).' },
      { ref: 'Pecūnia nostra rapta est!', html: 'Perfect passive of <span class="la">rapiō</span>, feminine for <span class="la">pecūnia</span>: “has been stolen”. In German you might say <em>ist gestohlen</em>; here the English perfect fits.' },
      { ref: 'Quid dīcis?', html: '<span class="la">quid</span>: interrogative pronoun, “what?”.' },
      { ref: 'Quae pecūnia? Quandō rapta est?', html: '<span class="la">quae</span>: interrogative adjective with <span class="la">pecūnia</span>, “which money?”. <span class="la">quandō</span>: “when?”.' },
      { ref: 'Herī in hāc arcā positī sunt', html: '<span class="la">positī sunt</span>: perfect passive of <span class="la">pōnō</span> (<span class="la">positum</span>), masculine plural for <span class="la">sēstertiī</span>.' },
      { ref: 'Servī vocātī sunt et interrogātī', html: 'Two perfect passives sharing one <span class="la">sunt</span>.' },
      { ref: 'Nēmō aliquid vīderat', html: 'Classical Latin would usually say <span class="la">nēmō quicquam</span>, “nobody anything”; <span class="la">aliquid</span> is used here because <span class="la">quisquam</span> has not been taught.' },
      { ref: 'Diū pecūnia quaerēbātur', html: 'Imperfect passive of <span class="la">quaerō</span> (third conjugation; Lecture XXII): “was being searched for”.' },
      { ref: 'quī saccum parvum dentibus tenēbat', html: '<span class="la">dentibus</span>: ablative of means, “with his teeth”.' },
      { ref: 'Saccus ā Quīntō captus est et Mārcō datus est', html: 'Two perfect passives: <span class="la">captus</span> (<span class="la">capiō</span>), <span class="la">datus</span> (<span class="la">dō</span>). <span class="la">Mārcō</span>: dative, “to Marcus”.' },
      { ref: 'Hic saccus ā mercātōre portātus erat', html: 'Pluperfect passive: the dealer had carried it before the sale.' },
      { ref: 'canis ab omnibus laudātus est', html: 'Perfect passive with an agent.' },
      { ref: 'fūrem nōn momorderat, sed pecūniam reportāverat', html: 'Two active pluperfects: <span class="la">momorderat</span> from <span class="la">mordeō, mordēre, momordī, morsum</span> “bite” (a reduplicated perfect); <span class="la">reportō</span> “bring back”. Here the dog is the thief, so the joke is that he did not need to bite one.' },
      { ref: 'ratiōnēs autem meae nōn iam tūtae sunt', html: '<span class="la">nōn iam</span>: “no longer”. <span class="la">tūtus</span>: safe.' }
    ],
    glosses: {
      'paucīs': 'abl. pl. of paucī: (by) a few', 'post': 'later, afterwards', 'diēbus': 'abl. pl. of diēs: days', 'gāius': 'Gaius (nom.)', 'cui': 'dat. of quī: to whom', 'ratiōnēs': 'nom. pl. of ratiō: accounts', 'domūs': 'gen. of domus: of the house', 'mandātae': 'nom. pl. f. of mandātus: entrusted', 'erant': 'were; (+ participle) had been', 'magnā': 'abl. f. of magnus: loud', 'vōce': 'abl. of vōx: voice', 'clāmāvit': 'perf. 3rd sg. of clāmō: shouted',
      'pecūnia': 'money (nom.)', 'pecūniam': 'acc. of pecūnia: money', 'nostra': 'our', 'rapta': 'nom. f. of raptus: seized, stolen', 'est': 'is; (+ participle) has been, was', 'mārcus': 'Marcus (nom.)', 'et': 'and', 'quīntus': 'Quintus (nom.)', 'statim': 'immediately', 'vēnērunt': 'perf. 3rd pl. of veniō: came',
      'quid': 'what?', 'dīcis': 'you say', 'rogāvit': 'perf. 3rd sg. of rogō: asked', 'quae': 'which? what?', 'quandō': 'when?', 'respondit': 'perf. 3rd sg. of respondeō: answered',
      'sēstertiī': 'nom. pl. of sēstertius: sesterces', 'quōs': 'acc. pl. m. of quī: which', 'mercātor': 'dealer (nom.)', 'nōbīs': 'dat. of nōs: to us', 'dedit': 'perf. 3rd sg. of dō: gave', 'herī': 'yesterday', 'in': 'in (+ abl.)', 'hāc': 'abl. f. of hic: this', 'arcā': 'abl. of arca: chest', 'positī': 'nom. pl. m. of positus: put, placed', 'sunt': 'are; (+ participle) were, have been', 'hodiē': 'today', 'arca': 'chest (nom.)', 'vacua': 'nom. f. of vacuus: empty',
      'quis': 'who?', 'hoc': 'this (acc.)', 'fēcit': 'perf. 3rd sg. of faciō: did', 'fortasse': 'perhaps', 'fūr': 'thief (nom.)', 'ab': 'from (+ abl.)', 'agrīs': 'abl. pl. of ager: fields', 'vēnit': 'perf. 3rd sg. of veniō: came',
      'servī': 'nom. pl. of servus: slaves', 'vocātī': 'nom. pl. m. of vocātus: called', 'interrogātī': 'nom. pl. m. of interrogātus: questioned', 'sed': 'but', 'nihil': 'nothing', 'sciēbant': 'impf. 3rd pl. of sciō: knew',
      'vīdistis': 'perf. 2nd pl. of videō: you saw', 'quem': 'whom?', 'vīllā': 'abl. of vīlla: house, farm', 'nēmō': 'nobody', 'aliquid': 'something, anything', 'vīderat': 'plupf. 3rd sg. of videō: had seen',
      'diū': 'for a long time', 'quaerēbātur': 'impf. pass. 3rd sg. of quaerō: was being searched for', 'tandem': 'at last', 'canem': 'acc. of canis: dog', 'āreā': 'abl. of ārea: yard', 'vīdit': 'perf. 3rd sg. of videō: saw', 'quī': 'who, which (nom.)', 'saccum': 'acc. of saccus: bag', 'parvum': 'acc. m. of parvus: small', 'dentibus': 'abl. pl. of dēns: teeth', 'tenēbat': 'impf. 3rd sg. of teneō: was holding',
      'ecce': 'look!', 'noster': 'our', 'saccus': 'bag (nom.)', 'ā': 'by (+ abl.)', 'quīntō': 'abl. of Quīntus', 'captus': 'nom. m. of captus: taken', 'mārcō': 'dat. of Mārcus: to Marcus', 'datus': 'nom. m. of datus: given', 'omnēs': 'all', 'eō': 'abl. of is: it',
      'cūr': 'why?', 'canis': 'dog (nom.)', 'rapuit': 'perf. 3rd sg. of rapiō: snatched', 'rīsit': 'perf. 3rd sg. of rīdeō: laughed', 'hic': 'this', 'mercātōre': 'abl. of mercātor: dealer', 'portātus': 'nom. m. of portātus: carried', 'erat': 'was; (+ participle) had been', 'carnem': 'acc. of carō: meat', 'habuerat': 'plupf. 3rd sg. of habeō: had kept', 'odor': 'smell (nom.)', 'carnis': 'gen. of carō: of meat', 'dēlectāvit': 'perf. 3rd sg. of dēlectō: delighted',
      'servāta': 'nom. f. of servātus: saved', 'omnibus': 'abl. pl. of omnēs: everyone', 'laudātus': 'nom. m. of laudātus: praised', 'nam': 'for', 'fūrem': 'acc. of fūr: thief', 'nōn': 'not', 'momorderat': 'plupf. 3rd sg. of mordeō: had bitten', 'reportāverat': 'plupf. 3rd sg. of reportō: had brought back',
      'dīxit': 'perf. 3rd sg. of dīcō: said', 'autem': 'but, however', 'meae': 'nom. pl. f. of meus: my', 'iam': 'now, any longer', 'tūtae': 'nom. pl. f. of tūtus: safe'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Who had been entrusted with the household accounts?', options: ['Gaius', 'Quintus', 'Marcus', 'A slave'], answer: 0, explain: 'Gāius, cui ratiōnēs domūs mandātae erant.' },
      { id: 'r2', type: 'mc', prompt: 'Where had the money been put?', options: ['In a chest', 'In the yard', 'In the dealer’s bag', 'With the slaves'], answer: 0, explain: 'Herī in hāc arcā positī sunt.' },
      { id: 'r3', type: 'mc', prompt: 'Who had taken the money?', options: ['The dog', 'A thief from the fields', 'A slave', 'The dealer'], answer: 0, explain: 'canem … quī saccum parvum dentibus tenēbat.' },
      { id: 'r4', type: 'mc', prompt: 'Why did the dog take the bag?', options: ['It smelled of the meat the dealer had carried in it', 'He was trained to', 'He wanted to bury the money', 'Quintus told him to'], answer: 0, explain: 'Odor carnis canem dēlectāvit.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">audītae sunt</span>:', options: ['they (f.) were heard / have been heard', 'they are heard', 'they had been heard', 'they will be heard'], answer: 0, explain: 'Perfect passive, feminine plural.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">captus erit</span>:', options: ['he will have been captured', 'he was captured', 'he had been captured', 'he will be captured'], answer: 0, explain: 'erō + participle: future perfect.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">Cuius liber est?</span>', options: ['Whose book is it?', 'Which book is it?', 'Whose is the book which …', 'Where is the book?'], answer: 0, explain: 'cuius: whose?' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Epistulae scrīpt___ sunt.</span>', hint: '(were) written', answers: ['ae'], full: 'Epistulae scrīptae sunt.', explain: 'Feminine plural.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Qu___ ad fīnem?</span>', hint: 'to what (end)?', answers: ['em'], full: 'Quem ad fīnem?', explain: 'Interrogative adjective, accusative masculine with fīnem.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Mīlitēs ā cōnsule laudātī sunt.', model: 'The soldiers were praised by the consul.', accepted: ['soldiers were praised by consul', 'soldiers have been praised by consul'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'Who are you (sg.)?', model: 'Quis es?', accepted: ['quis es', 'quis es tū', 'tū quis es'], explain: 'Quis asks about a person. Es “you are” needs no tū.' },
      { id: 't8', type: 'mc', prompt: 'In <span class="la">dictum est</span>, why the neuter?', options: ['It is impersonal: “it has been said”', 'dictum agrees with a hidden bellum', 'All participles are neuter', 'It is a noun'], answer: 0, explain: 'Impersonal passives are neuter singular.' },
      { id: 't9', type: 'mc', prompt: 'Where did Cicero deliver the first speech against Catiline?', options: ['In the temple of Jupiter Stator', 'In the Forum before the people', 'In Caesar’s house', 'In Etruria'], answer: 0, explain: 'The senate met there on 8 November 63 BC.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">Quī vir?</span> uses:', options: ['the interrogative adjective', 'the relative pronoun', 'the interrogative pronoun quis', 'a numeral'], answer: 0, explain: 'quī + noun: which man?' },
      { id: 't11', type: 'mc', prompt: 'German <em>Gallien ist geteilt</em> (state) in Latin:', options: ['Gallia dīvīsa est', 'Gallia dīviditur', 'Gallia dīvidet', 'Gallia dīvidit'], answer: 0, explain: 'The perfect passive serves for the state.' }
    ]
  },

  reference: [
    { title: 'Perfect passive system: amō', headers: ['', 'Perfect', 'Pluperfect', 'Future perfect'], rows: [
      ['1st sg.', 'amātus sum', 'amātus eram', 'amātus erō'], ['2nd sg.', 'amātus es', 'amātus erās', 'amātus eris'], ['3rd sg.', 'amātus est', 'amātus erat', 'amātus erit'], ['1st pl.', 'amātī sumus', 'amātī erāmus', 'amātī erimus'], ['2nd pl.', 'amātī estis', 'amātī erātis', 'amātī eritis'], ['3rd pl.', 'amātī sunt', 'amātī erant', 'amātī erunt']
    ] },
    { title: 'quis, quid', headers: ['', 'm./f.', 'n.'], rows: [
      ['Nom.', 'quis', 'quid'], ['Gen.', 'cuius', 'cuius'], ['Dat.', 'cui', 'cui'], ['Acc.', 'quem', 'quid'], ['Abl.', 'quō', 'quō'], ['Plural', 'as the relative: quī, quae, quae …', '']
    ] },
    { title: 'Participles so far', headers: ['Verb', '4th part', 'Participle'], rows: [
      ['amō', 'amātum', 'amātus'], ['moneō', 'monitum', 'monitus'], ['dūcō', 'ductum', 'ductus'], ['capiō', 'captum', 'captus'], ['audiō', 'audītum', 'audītus'], ['dīvidō', 'dīvīsum', 'dīvīsus'], ['faciō', 'factum', 'factus'], ['pōnō', 'positum', 'positus'], ['dō', 'datum', 'datus'], ['videō', 'vīsum', 'vīsus']
    ] }
  ]
});
