/*
 * Latin — Lecture XIX: the present passive system (present, imperfect, future passive) of the
 * first and second conjugations; the present passive infinitive; the ablative of agent.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotations (Caesar, De bello Gallico 1.1; Cicero, In Catilinam 1.1; Pliny, Letters
 * 6.16.13) checked against the texts supplied by Nils. Pictures from Wikimedia Commons;
 * see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-19',
  number: 19,
  title: 'Ab iīs audiēbātur',
  subtitle: 'The present, imperfect and future passive (first and second conjugations); the passive infinitive; the ablative of agent',
  minutes: 60,

  intro: `
    <p>Every verb so far has been active: the subject does something. In the <strong>passive</strong> the subject has something done to it: <span class="la">amat</span> “he loves”, <span class="la">amātur</span> “he is loved”. German builds the passive with <em>werden</em> and a participle (<em>er wird geliebt</em>); Latin, in the tenses of this lecture, uses one word with a set of special personal endings in <span class="la">-r</span>.</p>
    <p>The endings are <span class="la">-r, -ris, -tur, -mur, -minī, -ntur</span>, and they replace the active ones in the present, the imperfect and the future. This lecture covers the first and second conjugations; the third and fourth follow in Lecture XXII, and the perfect passive, which works quite differently, in Lecture XX.</p>
    <p>Who does the action is expressed by <span class="la">ā</span> or <span class="la">ab</span> with the ablative, if it is a person: <span class="la">ā magistrō laudātur</span>, “he is praised by the teacher”. If it is a thing, the plain ablative of means (Lecture XV): <span class="la">ventō movētur</span>, “it is moved by the wind”. German makes a similar distinction with <em>von</em> and <em>durch</em>.</p>
  `,

  background: [
    {
      title: 'Pliny snores',
      html: `
        <p>The passive in this lecture’s title comes from one of the most human moments in Pliny’s letter on Vesuvius. At Stabiae, with ash and pumice falling outside, the elder Pliny calms his frightened friend Pomponianus by bathing, dining cheerfully and then going to sleep, and to prove that it was a real sleep, not a pretence, his nephew records that his heavy breathing could be heard by the people at the door. He was, the letter says, a big man, and his breathing was loud.</p>
        <p>Whether the scene happened exactly so we cannot know: the nephew was not there and wrote from what survivors told him more than twenty years later. But it shows how a Roman author shaped a portrait. The calm sleeper, unafraid while others panic, recalls the Stoic ideal of the wise man, and the letter was written for Tacitus to use in a history.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Pliny_the_Younger_and_his_Mother_at_Misenum,_79_A.D.,_by_Angelica_Kauffmann,_English,_1785,_oil_on_canvas_-_Princeton_University_Art_Museum_-_DSC06494.jpg/960px-Pliny_the_Younger_and_his_Mother_at_Misenum,_79_A.D.,_by_Angelica_Kauffmann,_English,_1785,_oil_on_canvas_-_Princeton_University_Art_Museum_-_DSC06494.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Pliny_the_Younger_and_his_Mother_at_Misenum,_79_A.D.,_by_Angelica_Kauffmann,_English,_1785,_oil_on_canvas_-_Princeton_University_Art_Museum_-_DSC06494.jpg/500px-Pliny_the_Younger_and_his_Mother_at_Misenum,_79_A.D.,_by_Angelica_Kauffmann,_English,_1785,_oil_on_canvas_-_Princeton_University_Art_Museum_-_DSC06494.jpg|https://upload.wikimedia.org/wikipedia/commons/7/75/Pliny_the_Younger_and_his_Mother_at_Misenum,_79_A.D.,_by_Angelica_Kauffmann,_English,_1785,_oil_on_canvas_-_Princeton_University_Art_Museum_-_DSC06494.jpg" alt="Eighteenth-century painting of a young man and his mother on a terrace, an erupting volcano in the background"><figcaption>Angelica Kauffmann, <em>Pliny the Younger and his Mother at Misenum</em> (1785; Princeton University Art Museum). The nephew, who stayed behind reading while his uncle sailed, tells this part of the story in a second letter (6.20). <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Pliny_the_Younger_and_his_Mother_at_Misenum,_79_A.D.,_by_Angelica_Kauffmann,_English,_1785,_oil_on_canvas_-_Princeton_University_Art_Museum_-_DSC06494.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'One word or two',
      html: `
        <p>The Latin passive endings in <span class="la">-r</span> have relatives in a scattering of other old Indo-European languages, among them Celtic (Old Irish), Hittite and Tocharian. Many scholars think the <span class="la">r</span> originally marked an impersonal form (“there is loving”) that was later attached to the personal endings; the details are debated.</p>
        <p>Latin itself used two methods. The present, imperfect and future have one-word passives (<span class="la">amātur</span>); the perfect tenses combine a participle with <span class="la">sum</span> (<span class="la">amātus est</span>, Lecture XX), which is the German method. The Romance languages kept only the second: French <em>il est aimé</em>, Italian <em>è amato</em>. The one-word passive disappeared from speech in late antiquity, and with it a very characteristic sound of Latin.</p>
        <p>One warning for the future: a number of Latin verbs have passive forms but active meanings. They are called deponents (Lecture XXXV). Horace has one in the ode you know: <span class="la">dum loquimur</span>, “while we speak”, not “while we are spoken”. And Pliny’s sentence below has one too.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cicero_-_Musei_Capitolini.JPG/960px-Cicero_-_Musei_Capitolini.JPG" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cicero_-_Musei_Capitolini.JPG/500px-Cicero_-_Musei_Capitolini.JPG|https://upload.wikimedia.org/wikipedia/commons/4/40/Cicero_-_Musei_Capitolini.JPG" alt="Marble portrait bust of a middle-aged Roman man"><figcaption>Portrait bust identified as Cicero (Rome, Capitoline Museums). The identification rests on comparison with an inscribed bust; it is widely accepted. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Cicero_-_Musei_Capitolini.JPG" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">nam meātus animae, quī illī propter amplitūdinem corporis gravior et sonantior erat, ab iīs quī līminī obversābantur audiēbātur.</p>
    <p>“For his breathing, which because of the size of his body was rather heavy and loud, was heard by those who were moving about at the door.” Pliny, <em>Letters</em> 6.16.13, checked against the text Nils supplied; length marks added.</p>
    <p><span class="la">audiēbātur</span>: imperfect passive, “was (being) heard”; the verb is fourth conjugation, but the imperfect passive is formed in the same way as in the first two. <span class="la">ab iīs</span>: ablative of agent, “by those (people)”. <span class="la">obversābantur</span> looks passive but is not: it is a deponent, “they were moving about”. <span class="la">gravior, sonantior</span> are comparatives (Lecture XXVII).</p>
    <p>Caesar’s first chapter has two present passives of the first and second conjugations: <span class="la">quī ipsōrum linguā Celtae, nostrā Gallī appellantur</span>, “who are called Celts in their own language, Gauls in ours”; and <span class="la">continētur Garumnā flūmine, Ōceanō, fīnibus Belgārum</span>, “it is bounded by the river Garonne, the Ocean and the territory of the Belgae”, with ablatives of means because the boundaries are things. Cicero to Catiline (<em>In Catilinam</em> 1.1): <span class="la">cōnstrictam iam hōrum omnium scientiā tenērī coniūrātiōnem tuam nōn vidēs?</span>, “do you not see that your conspiracy is already held fast, bound by the knowledge of all these men?”: <span class="la">tenērī</span>, present passive infinitive.</p>
  `,

  pronunciation: `
    <h3>-minī</h3>
    <p>The second person plural <span class="la">-minī</span> is unlike the other endings: <span class="la">a-MĀ-mi-nī</span>, <span class="la">mo-NĒ-mi-nī</span>, <span class="la">a-mā-BI-mi-nī</span>. It is probably an old participle, a form like Greek <em>-menoi</em>, absorbed into the verb.</p>
    <h3>amāris, amāberis</h3>
    <p>The <span class="la">ā</span> of the stem is long and stressed: <span class="la">a-MĀ-ris</span>, <span class="la">mo-NĒ-ris</span>. In the future the <span class="la">e</span> of <span class="la">amāberis</span> is short: <span class="la">a-MĀ-be-ris</span>.</p>
    <h3>amārī, monērī</h3>
    <p>The passive infinitive ends in a long <span class="la">-ī</span>: <span class="la">a-MĀ-rī</span> against active <span class="la">a-MĀ-re</span>. The difference is one vowel.</p>
  `,

  grammar: [
    {
      title: '1. The passive endings',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Active</th><th>Passive</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">-ō / -m</td><td class="la">-r</td></tr>
            <tr><th>2nd sg.</th><td class="la">-s</td><td class="la">-ris (-re)</td></tr>
            <tr><th>3rd sg.</th><td class="la">-t</td><td class="la">-tur</td></tr>
            <tr><th>1st pl.</th><td class="la">-mus</td><td class="la">-mur</td></tr>
            <tr><th>2nd pl.</th><td class="la">-tis</td><td class="la">-minī</td></tr>
            <tr><th>3rd pl.</th><td class="la">-nt</td><td class="la">-ntur</td></tr>
          </tbody>
        </table></div>
        <p>Most passive endings are the active ending with <span class="la">-r</span> added or substituted: <span class="la">-t → -tur</span>, <span class="la">-nt → -ntur</span>, <span class="la">-mus → -mur</span>. Only <span class="la">-minī</span> must be learnt separately. The second person singular has an alternative form in <span class="la">-re</span> (<span class="la">amāre</span> “you are loved”), common in poetry; it looks like the active infinitive, so context must decide.</p>
      `
    },
    {
      title: '2. Present, imperfect and future passive',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Present</th><th>Imperfect</th><th>Future</th></tr></thead>
          <tbody>
            <tr><th>1st sg.</th><td class="la">amor</td><td class="la">amābar</td><td class="la">amābor</td></tr>
            <tr><th>2nd sg.</th><td class="la">amāris</td><td class="la">amābāris</td><td class="la"><strong>amāberis</strong></td></tr>
            <tr><th>3rd sg.</th><td class="la">amātur</td><td class="la">amābātur</td><td class="la">amābitur</td></tr>
            <tr><th>1st pl.</th><td class="la">amāmur</td><td class="la">amābāmur</td><td class="la">amābimur</td></tr>
            <tr><th>2nd pl.</th><td class="la">amāminī</td><td class="la">amābāminī</td><td class="la">amābiminī</td></tr>
            <tr><th>3rd pl.</th><td class="la">amantur</td><td class="la">amābantur</td><td class="la">amābuntur</td></tr>
          </tbody>
        </table></div>
        <p>The second conjugation is exactly parallel: <span class="la">moneor, monēris, monētur, monēmur, monēminī, monentur</span>; <span class="la">monēbar …</span>; <span class="la">monēbor, monēberis, monēbitur …</span>.</p>
        <p>Points to watch:</p>
        <ul>
          <li>First person singular: <span class="la">amor</span> (the <span class="la">-ō</span> disappears), <span class="la">moneor</span> (the <span class="la">e</span> stays). <span class="la">amor</span> “I am loved” is identical with the noun <span class="la">amor</span> “love”.</li>
          <li>Future second person singular: <span class="la">amāberis</span>, not <span class="la">*amābiris</span>; the <span class="la">i</span> of <span class="la">-bi-</span> becomes <span class="la">e</span> before <span class="la">r</span>.</li>
          <li>The tense signs <span class="la">-bā-</span> (imperfect) and <span class="la">-bi-/-bu-</span> (future) are the same as in the active.</li>
        </ul>
      `
    },
    {
      title: '3. The present passive infinitive',
      html: `
        <p>Active <span class="la">-re</span> becomes passive <span class="la">-rī</span>: <span class="la">amāre</span> “to love”, <span class="la">amārī</span> “to be loved”; <span class="la">monēre, monērī</span>; <span class="la">vidēre, vidērī</span>.</p>
        <p>It is used like any infinitive, for example with <span class="la">possum, dēbeō, cupiō</span>: <span class="la">Puerī laudārī cupiunt</span>, “The boys want to be praised.”</p>
      `
    },
    {
      title: '4. Agent and means',
      html: `
        <p>In a passive sentence the doer of the action can be named in two ways:</p>
        <ul>
          <li><strong>A person</strong> (or a personified thing): <span class="la">ā</span> (before consonants) or <span class="la">ab</span> (before vowels and <span class="la">h</span>) + ablative, the <strong>ablative of agent</strong>. <span class="la">Puer ā magistrō laudātur</span>, “The boy is praised by the teacher.” <span class="la">Urbs ab hostibus oppugnātur</span>, “The city is attacked by the enemy.”</li>
          <li><strong>A thing</strong>: the plain ablative of means, without a preposition. <span class="la">Nāvis ventō movētur</span>, “The ship is moved by the wind.” <span class="la">Continētur Garumnā flūmine</span> (Caesar).</li>
        </ul>
        <p>German has a comparable choice between <em>von</em> for the agent (<em>vom Lehrer gelobt</em>) and <em>durch</em> or <em>mit</em> for the means (<em>durch den Wind bewegt</em>), though German usage is less strict. English uses “by” for both, which is why English speakers often put <span class="la">ab</span> before a thing.</p>
      `
    },
    {
      title: '5. Active into passive',
      html: `
        <p>Turning a sentence round shows the system at work. The object becomes the subject (accusative → nominative), the subject becomes the agent (nominative → <span class="la">ā/ab</span> + ablative), and the verb takes the passive ending:</p>
        <ul>
          <li><span class="la">Magister puerōs laudat.</span> → <span class="la">Puerī ā magistrō laudantur.</span></li>
          <li><span class="la">Ventus nāvem movēbat.</span> → <span class="la">Nāvis ventō movēbātur.</span></li>
        </ul>
        <p><span class="la">videor</span>, the passive of <span class="la">videō</span>, often means “I seem”: <span class="la">laetus vidētur</span>, “he seems happy”, like German <em>er scheint froh</em>. The adjective agrees with the subject.</p>
      `
    }
  ],

  vocab: [
    { id: 'ab', head: 'ā, ab', la: 'ā (before consonants), ab (before vowels and h) (+ abl.)', pos: 'preposition', en: 'from, away from; by (agent)', stress: 'Ā · AB', deriv: 'absent, abduct', note: 'With a passive verb and a person: “by”.' },
    { id: 'videor', head: 'videor', la: 'videor, vidērī, vīsus sum', pos: 'verb, 2nd conj. (passive of videō)', en: 'be seen; seem', stress: 'VI-de-or · vi-DĒ-rī', note: 'laetus vidētur: he seems happy.' },
    { id: 'vulnero', head: 'vulnerō', la: 'vulnerō, vulnerāre, vulnerāvī, vulnerātum', pos: 'verb, 1st conj.', en: 'wound, injure', stress: 'VUL-ne-rō · vul-ne-RĀ-re', deriv: 'vulnerable', note: 'From vulnus (Lecture VIII).' },
    { id: 'nuntio', head: 'nūntiō', la: 'nūntiō, nūntiāre, nūntiāvī, nūntiātum', pos: 'verb, 1st conj.', en: 'announce, report', stress: 'NŪN-ti-ō · nūn-ti-Ā-re', deriv: 'announce, nuncio', note: 'From nūntius, “messenger”.' },
    { id: 'oppugno', head: 'oppugnō', la: 'oppugnō, oppugnāre, oppugnāvī, oppugnātum', pos: 'verb, 1st conj.', en: 'attack, assault (a town)', stress: 'op-PUG-nō · op-pug-NĀ-re', note: 'ob + pugnō.' },
    { id: 'constituo', head: 'cōnstituō', la: 'cōnstituō, cōnstituere, cōnstituī, cōnstitūtum', pos: 'verb, 3rd conj.', en: 'decide; set up, establish', stress: 'cōn-STI-tu-ō · cōn-sti-TU-e-re', deriv: 'constitute, constitution' },
    { id: 'deus', head: 'deus', la: 'deus, deī', g: 'm', pos: 'noun, 2nd decl.', en: 'god', stress: 'DE-us', deriv: 'deity; adieu', note: 'Irregular plural: nom. dī (deī), gen. deōrum (deum), dat./abl. dīs.' },
    { id: 'velum', head: 'vēlum', la: 'vēlum, vēlī', g: 'n', pos: 'noun, 2nd decl.', en: 'sail; curtain', stress: 'VĒ-lum', deriv: 'veil', note: 'vēla dare: to set sail.' },
    { id: 'gubernator', head: 'gubernātor', la: 'gubernātor, gubernātōris', g: 'm', pos: 'noun, 3rd decl.', en: 'helmsman, pilot', stress: 'gu-ber-NĀ-tor · gu-ber-nā-TŌ-ris', deriv: 'governor', note: 'From Greek kybernētēs, as is “cybernetics”. Pliny 6.16.11.' },
    { id: 'limen', head: 'līmen', la: 'līmen, līminis', g: 'n', pos: 'noun, 3rd decl.', en: 'threshold, doorway', stress: 'LĪ-men · LĪ-mi-nis', deriv: 'subliminal, preliminary' },
    { id: 'tantus', head: 'tantus', la: 'tantus, tanta, tantum', pos: 'adjective', en: 'so great, so large', stress: 'TAN-tus', note: 'Tantaene animīs caelestibus īrae? (Aeneid 1.11).' },
    { id: 'nonne', head: 'nōnne', la: 'nōnne', pos: 'interrogative particle', en: 'introduces a question expecting “yes”', stress: 'NŌN-ne', note: 'Nōnne vidēs? “Surely you see?”, German “Siehst du nicht?”.' }
  ],

  grammarCards: [
    { id: 'g19-end', front: 'Passive personal endings', back: '-r, -ris (-re), -tur, -mur, -minī, -ntur' },
    { id: 'g19-pres', front: 'amō: present passive', back: 'amor, amāris, amātur, amāmur, amāminī, amantur' },
    { id: 'g19-impf', front: 'amō: imperfect passive', back: 'amābar, amābāris, amābātur, amābāmur, amābāminī, amābantur' },
    { id: 'g19-fut', front: 'amō: future passive', back: 'amābor, amāberis, amābitur, amābimur, amābiminī, amābuntur' },
    { id: 'g19-mon', front: 'moneō: present passive', back: 'moneor, monēris, monētur, monēmur, monēminī, monentur' },
    { id: 'g19-beris', front: 'Future passive 2nd sg. of amō', back: 'amāberis (not *amābiris)' },
    { id: 'g19-inf', front: 'Present passive infinitive of amō, moneō', back: 'amārī, monērī' },
    { id: 'g19-agent', front: 'Ablative of agent', back: 'ā/ab + abl. for a person: ā magistrō laudātur' },
    { id: 'g19-means', front: 'Ablative of means with a passive', back: 'plain abl. for a thing: ventō movētur' },
    { id: 'g19-german', front: 'von / durch and Latin', back: 'von ≈ ā/ab (agent); durch, mit ≈ plain ablative (means)' },
    { id: 'g19-turn', front: 'Magister puerōs laudat → passive', back: 'Puerī ā magistrō laudantur.' },
    { id: 'g19-videor', front: 'laetus vidētur', back: 'he seems happy (videor = seem)' },
    { id: 'g19-amor', front: 'amor: two meanings', back: 'I am loved (verb); love (noun)' },
    { id: 'g19-re', front: 'amāre: two meanings', back: 'to love (infinitive); you are loved (2nd sg. passive, alternative to amāris)' },
    { id: 'g19-pliny', front: 'ab iīs quī līminī obversābantur audiēbātur', back: 'was heard by those who were moving about at the door (Pliny 6.16.13)' },
    { id: 'g19-caesar', front: 'Celtae, nostrā Gallī appellantur', back: 'are called Celts, in our language Gauls (BG 1.1)' },
    { id: 'g19-cicero', front: 'hōrum omnium scientiā tenērī coniūrātiōnem tuam', back: 'that your conspiracy is held fast by the knowledge of all these men (Cat. 1.1)' },
    { id: 'g19-dep', front: 'dum loquimur (Horace)', back: '“while we speak”: a deponent, passive in form, active in meaning (Lecture XXXV)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">amātur</span>:', options: ['he/she is loved', 'he/she loves', 'he/she was loved', 'to be loved'], answer: 0, explain: '-tur: 3rd sg. passive.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">monēbāmur</span>:', options: ['we were being warned', 'we shall be warned', 'we are warned', 'we were warning'], answer: 0, explain: '-bā-: imperfect; -mur: 1st pl. passive.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">laudāberis</span>:', options: ['you will be praised', 'you are praised', 'you were praised', 'you will praise'], answer: 0, explain: 'Future passive, 2nd sg.' },
    { id: 'e4', type: 'mc', prompt: 'In <span class="la">ā magistrō docētur</span>, <span class="la">ā magistrō</span> is:', options: ['ablative of agent', 'ablative of means', 'ablative of time', 'ablative of separation'], answer: 0, explain: 'A person: ā/ab + ablative.' },
    { id: 'e5', type: 'mc', prompt: 'In <span class="la">gladiō vulnerātur</span>, <span class="la">gladiō</span> is:', options: ['ablative of means', 'ablative of agent', 'dative', 'ablative of manner'], answer: 0, explain: 'A thing: no preposition.' },
    { id: 'e6', type: 'mc', prompt: 'Present passive infinitive of <span class="la">moneō</span>:', options: ['monērī', 'monēre', 'monērier', 'monērī esse'], answer: 0, explain: '-rī.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Puella ab omnibus am___.</span>', hint: 'is loved', answers: ['ātur', 'atur'], full: 'Puella ab omnibus amātur.', explain: 'Present passive, 3rd sg.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Nōs ā magistrō mon___.</span>', hint: 'are warned', answers: ['ēmur', 'emur'], full: 'Nōs ā magistrō monēmur.', explain: 'Present passive, 1st pl.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Urbs ā mīlitibus serv___.</span>', hint: 'was being saved', answers: ['ābātur', 'abatur'], full: 'Urbs ā mīlitibus servābātur.', explain: 'Imperfect passive, 3rd sg.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Crās, Gāī, ā patre laud___.</span>', hint: 'you will be praised', answers: ['āberis', 'aberis', 'ābere', 'abere'], full: 'Crās, Gāī, ā patre laudāberis.', explain: 'Future passive, 2nd sg.: -beris.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Puerī ā Lūciō doc___.</span>', hint: 'are taught', answers: ['entur'], full: 'Puerī ā Lūciō docentur.', explain: 'Present passive, 3rd pl.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Mīles ___ hoste vexātur.</span>', hint: 'by', answers: ['ab', 'ā', 'a'], full: 'Mīles ab hoste vexātur.', explain: 'Agent: ab before h (ā also possible).' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the present active and passive of <span class="la">amō</span>.', headers: ['Active', 'Passive'], rows: [
      { label: '1st sg.', answers: ['amō', 'amor'] },
      { label: '2nd sg.', answers: ['amās', 'amāris|amāre'] },
      { label: '3rd sg.', answers: ['amat', 'amātur'] },
      { label: '1st pl.', answers: ['amāmus', 'amāmur'] },
      { label: '2nd pl.', answers: ['amātis', 'amāminī'] },
      { label: '3rd pl.', answers: ['amant', 'amantur'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Give the imperfect and future passive of <span class="la">moneō</span>.', headers: ['Imperfect', 'Future'], rows: [
      { label: '1st sg.', answers: ['monēbar', 'monēbor'] },
      { label: '2nd sg.', answers: ['monēbāris|monēbāre', 'monēberis|monēbere'] },
      { label: '3rd sg.', answers: ['monēbātur', 'monēbitur'] },
      { label: '1st pl.', answers: ['monēbāmur', 'monēbimur'] },
      { label: '2nd pl.', answers: ['monēbāminī', 'monēbiminī'] },
      { label: '3rd pl.', answers: ['monēbantur', 'monēbuntur'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each form to its meaning.', pairs: [
      ['amor', 'I am loved'], ['amābar', 'I was being loved'], ['amābor', 'I shall be loved'], ['amārī', 'to be loved'], ['amāminī', 'you (pl.) are loved']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Puer ā magistrō laudātur.', tokens: ['The boy', 'is praised', 'by', 'the teacher'], explain: 'ā magistrō: agent.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Urbs ā mīlitibus servābātur.', model: 'The city was being saved by the soldiers.', accepted: ['city was being saved by soldiers', 'city was saved by soldiers', 'city was being preserved by soldiers', 'city was being protected by soldiers', 'city was preserved by soldiers', 'city was protected by soldiers', 'city was being guarded by soldiers', 'city was guarded by soldiers'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Ventō nāvis movētur.', model: 'The ship is moved by the wind.', accepted: ['ship is moved by wind', 'ship is being moved by wind', 'ship is driven by wind', 'ship is moved by means of wind', 'ship is propelled by wind'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Ab omnibus laudāberis.', model: 'You will be praised by everyone.', accepted: ['you will be praised by everyone', 'you will be praised by all', 'you shall be praised by everyone', 'you shall be praised by all', 'you will be praised by everybody'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'We are loved.', model: 'Amāmur.', accepted: ['amāmur', 'nōs amāmur'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'to be seen', model: 'vidērī', accepted: ['vidērī'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'They were being warned.', model: 'Monēbantur.', accepted: ['monēbantur'] },
    { id: 'e23', type: 'mc', prompt: 'Caesar’s <span class="la">Celtae … appellantur</span> means:', options: ['are called Celts', 'call the Celts', 'were called Celts', 'will call themselves Celts'], answer: 0, explain: 'Present passive, 3rd pl.' },
    { id: 'e24', type: 'mc', prompt: 'In Pliny’s letter, by whom was the elder Pliny’s breathing heard?', options: ['by those at the door', 'by his nephew', 'by Pomponianus’s slaves in the boat', 'by Tacitus'], answer: 0, explain: 'ab iīs quī līminī obversābantur.' },
    { id: 'e25', type: 'mc', prompt: 'Latin <span class="la">amātur</span> corresponds to German:', options: ['er wird geliebt', 'er hat geliebt', 'er liebt sich', 'er ist geliebt worden'], answer: 0, explain: 'The present passive with werden.' }
  ],

  reading: {
    title: 'Lūcius discēdit',
    note: 'Original passage: Lucius sails before the winter. Tap any word.',
    text: 'Mēnse Octōbrī Lūcius dīxit: “Nunc in Graeciam nāvigāre dēbeō, nam hieme nāvēs nōn nāvigant.” Puerī trīstēs erant, nam Lūcius ab omnibus amābātur. In lītore nāvis Lūciī ā nautīs parābātur: vīnum et frūmentum in nāvem portābantur, et nāvis onerābātur. Puerī cum Lūciō ad lītus vēnērunt. Ibi Quīntus gubernātōrem interrogāvit: “Quōmodo nāvis tanta movētur?” Gubernātor rīsit: “Vēlīs et ventō movētur; ubi ventus nōn est, rēmīs movētur, quī ā nautīs tenentur.” Gāius autem: “Nōnne tempestātibus terrēminī?” “Saepe terrēmur,” respondit gubernātor, “sed ā deīs servāmur.” Tum Lūcius puerīs dīxit: “Nōlīte esse trīstēs! Vōs ā patre bene docēminī, et librī meī vōbīscum manent. Vēre iterum ā vōbīs in hōc lītore vidēbor!” Lūcius laetus vidēbātur, sed oculī eius lacrimīs plēnī erant. Postrīdiē nāvis ventō secundō ā lītore movēbātur, et Lūcius ā puerīs diū spectābātur. Quīntus sēcum cōgitāvit: “Vēre Lūcius ab omnibus exspectābitur; et ego ōlim cum eō nāvigābō.”',
    translation: 'In the month of October Lucius said: “Now I must sail to Greece, for in winter ships do not sail.” The boys were sad, for Lucius was loved by everyone. On the shore Lucius’s ship was being made ready by the sailors: wine and grain were being carried into the ship, and the ship was being loaded. The boys came to the shore with Lucius. There Quintus asked the helmsman: “How is so large a ship moved?” The helmsman laughed: “It is moved by sails and by the wind; when there is no wind, it is moved by oars, which are held by the sailors.” But Gaius: “Surely you are frightened by storms?” “We are often frightened,” answered the helmsman, “but we are saved by the gods.” Then Lucius said to the boys: “Don’t be sad! You are being taught well by your father, and my books remain with you. In spring I shall be seen by you on this shore again!” Lucius seemed cheerful, but his eyes were full of tears. The next day the ship was moving away from the shore with a favourable wind, and Lucius was watched by the boys for a long time. Quintus thought to himself: “In spring Lucius will be awaited by everyone; and one day I shall sail with him.”',
    notes: [
      { ref: 'nam hieme nāvēs nōn nāvigant', html: 'The Mediterranean sailing season ran roughly from spring to autumn; in winter most shipping stopped because of storms and poor visibility. The late Roman writer Vegetius gives the closed season as about mid-November to mid-March, but practice varied.' },
      { ref: 'Lūcius ab omnibus amābātur', html: 'Imperfect passive with an agent: “was loved by everyone”. <span class="la">omnibus</span>: ablative plural of <span class="la">omnēs</span>, “everyone”.' },
      { ref: 'nāvis Lūciī ā nautīs parābātur', html: 'Turn it back into the active: <span class="la">Nautae nāvem Lūciī parābant</span>.' },
      { ref: 'vīnum et frūmentum in nāvem portābantur', html: 'Plural verb with two subjects. <span class="la">in nāvem</span>: accusative of motion.' },
      { ref: 'Quōmodo nāvis tanta movētur?', html: '<span class="la">tanta</span>: “so great”. <span class="la">movētur</span>: present passive of <span class="la">moveō</span>.' },
      { ref: 'Vēlīs et ventō movētur', html: 'Ablatives of means: sails and wind are things, so no <span class="la">ab</span>.' },
      { ref: 'rēmīs movētur, quī ā nautīs tenentur', html: '<span class="la">quī</span>: masculine plural for <span class="la">rēmīs</span>; the oars are held by people, so <span class="la">ā nautīs</span>.' },
      { ref: 'Nōnne tempestātibus terrēminī?', html: '<span class="la">nōnne</span> expects the answer “yes”: “Surely you are frightened …?”. <span class="la">terrēminī</span>: 2nd pl. present passive. <span class="la">tempestātibus</span>: means (or cause).' },
      { ref: 'sed ā deīs servāmur', html: 'The gods are persons: <span class="la">ā deīs</span>, agent. Sailors were among the most devout of Romans; many inscriptions record vows paid for a safe voyage.' },
      { ref: 'Vōs ā patre bene docēminī', html: '2nd pl. present passive of <span class="la">doceō</span>: <span class="la">-minī</span>.' },
      { ref: 'Vēre iterum ā vōbīs in hōc lītore vidēbor!', html: 'Future passive of <span class="la">videō</span>, 1st sg.: “I shall be seen by you”, a playful way of saying “you will see me”.' },
      { ref: 'Lūcius laetus vidēbātur', html: '<span class="la">vidēbātur</span>: “seemed”. <span class="la">laetus</span> agrees with <span class="la">Lūcius</span>.' },
      { ref: 'nāvis ventō secundō ā lītore movēbātur', html: '<span class="la">ventō</span>: means; <span class="la">ā lītore</span>: not an agent but “away from the shore”. The same preposition, two different uses: the sense decides.' },
      { ref: 'Lūcius ab omnibus exspectābitur', html: 'Future passive, 3rd sg.' }
    ],
    glosses: {
      'mēnse': 'abl. of mēnsis: month', 'octōbrī': 'abl. of October: (of) October', 'lūcius': 'Lucius (nom.)', 'dīxit': 'perf. 3rd sg. of dīcō: said', 'nunc': 'now', 'in': 'in (+ abl.); into, to (+ acc.)', 'graeciam': 'acc. of Graecia: Greece', 'nāvigāre': 'to sail', 'dēbeō': 'I must', 'nam': 'for', 'hieme': 'abl. of hiems: in winter', 'nāvēs': 'nom. pl. of nāvis: ships', 'nōn': 'not', 'nāvigant': '3rd pl. of nāvigō: sail',
      'puerī': 'nom. pl. of puer: boys', 'trīstēs': 'nom. pl. of trīstis: sad', 'erant': 'were', 'ab': 'by (agent); from (+ abl.)', 'omnibus': 'abl. pl. of omnēs: everyone', 'amābātur': 'impf. pass. 3rd sg. of amō: was loved',
      'lītore': 'abl. of lītus: shore', 'nāvis': 'ship (nom.)', 'lūciī': 'gen. of Lūcius: Lucius’s', 'ā': 'by (agent); from (+ abl.)', 'nautīs': 'abl. pl. of nauta: sailors', 'parābātur': 'impf. pass. 3rd sg. of parō: was being made ready',
      'vīnum': 'wine (nom.)', 'et': 'and', 'frūmentum': 'grain (nom.)', 'nāvem': 'acc. of nāvis: ship', 'portābantur': 'impf. pass. 3rd pl. of portō: were being carried', 'onerābātur': 'impf. pass. 3rd sg. of onerō: was being loaded',
      'cum': 'with (+ abl.)', 'lūciō': 'abl. of Lūcius', 'ad': 'to (+ acc.)', 'lītus': 'shore (acc.)', 'vēnērunt': 'perf. 3rd pl. of veniō: came',
      'ibi': 'there', 'quīntus': 'Quintus (nom.)', 'gubernātōrem': 'acc. of gubernātor: helmsman', 'interrogāvit': 'perf. 3rd sg. of interrogō: asked', 'quōmodo': 'how?', 'tanta': 'nom. f. of tantus: so great', 'movētur': 'pres. pass. 3rd sg. of moveō: is moved',
      'gubernātor': 'helmsman (nom.)', 'rīsit': 'perf. 3rd sg. of rīdeō: laughed', 'vēlīs': 'abl. pl. of vēlum: sails', 'ventō': 'abl. of ventus: wind', 'ubi': 'when', 'ventus': 'wind (nom.)', 'est': 'is, there is', 'rēmīs': 'abl. pl. of rēmus: oars', 'quī': 'nom. pl. m. of quī: which', 'tenentur': 'pres. pass. 3rd pl. of teneō: are held',
      'gāius': 'Gaius (nom.)', 'autem': 'but, however', 'nōnne': 'surely? (expects yes)', 'tempestātibus': 'abl. pl. of tempestās: storms', 'terrēminī': 'pres. pass. 2nd pl. of terreō: you are frightened',
      'saepe': 'often', 'terrēmur': 'pres. pass. 1st pl. of terreō: we are frightened', 'respondit': 'perf. 3rd sg. of respondeō: answered', 'sed': 'but', 'deīs': 'abl. pl. of deus: gods', 'servāmur': 'pres. pass. 1st pl. of servō: we are saved',
      'tum': 'then', 'puerīs': 'dat. pl. of puer: to the boys', 'nōlīte': 'don’t (pl., + inf.)', 'esse': 'to be', 'vōs': 'you (pl.)', 'patre': 'abl. of pater: father', 'bene': 'well', 'docēminī': 'pres. pass. 2nd pl. of doceō: you are taught', 'librī': 'nom. pl. of liber: books', 'meī': 'nom. pl. of meus: my', 'vōbīscum': 'with you (pl.)', 'manent': '3rd pl. of maneō: remain',
      'vēre': 'abl. of vēr: in spring', 'iterum': 'again', 'vōbīs': 'abl. of vōs: you', 'hōc': 'abl. n. of hic: this', 'vidēbor': 'fut. pass. 1st sg. of videō: I shall be seen',
      'laetus': 'happy, cheerful', 'vidēbātur': 'impf. pass. 3rd sg. of videō: seemed', 'oculī': 'nom. pl. of oculus: eyes', 'eius': 'his', 'lacrimīs': 'abl. pl. of lacrima: tears', 'plēnī': 'nom. pl. of plēnus: full',
      'postrīdiē': 'on the next day', 'secundō': 'abl. of secundus: favourable', 'movēbātur': 'impf. pass. 3rd sg. of moveō: was moving (being moved)', 'diū': 'for a long time', 'spectābātur': 'impf. pass. 3rd sg. of spectō: was watched',
      'sēcum': 'to himself', 'cōgitāvit': 'perf. 3rd sg. of cōgitō: thought', 'exspectābitur': 'fut. pass. 3rd sg. of exspectō: will be awaited', 'ego': 'I', 'ōlim': 'some day', 'eō': 'abl. of is: him', 'nāvigābō': 'fut. 1st sg. of nāvigō: I shall sail'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Why must Lucius sail in October?', options: ['Ships do not sail in winter', 'He has been called by the emperor', 'His wine is going bad', 'The boys are tired of him'], answer: 0, explain: 'nam hieme nāvēs nōn nāvigant.' },
      { id: 'r2', type: 'mc', prompt: 'How is the ship moved when there is no wind?', options: ['By oars held by the sailors', 'By horses on the shore', 'By the gods', 'It does not move'], answer: 0, explain: 'rēmīs movētur, quī ā nautīs tenentur.' },
      { id: 'r3', type: 'mc', prompt: 'By whom, according to the helmsman, are sailors saved?', options: ['By the gods', 'By the helmsman alone', 'By the soldiers', 'By Lucius'], answer: 0, explain: 'ā deīs servāmur.' },
      { id: 'r4', type: 'mc', prompt: 'How did Lucius seem, and how was he really?', options: ['He seemed cheerful, but his eyes were full of tears', 'He seemed sad but was happy', 'He seemed angry', 'He seemed tired and was asleep'], answer: 0, explain: 'Lūcius laetus vidēbātur, sed oculī eius lacrimīs plēnī erant.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">vocāris</span>:', options: ['you are called', 'you call', 'you were called', 'to be called'], answer: 0, explain: 'Present passive 2nd sg.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">terrēbuntur</span>:', options: ['they will be frightened', 'they were frightened', 'they are frightened', 'they will frighten'], answer: 0, explain: 'Future passive 3rd pl.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">laudārī</span>:', options: ['to be praised', 'to praise', 'you are praised', 'he is praised'], answer: 0, explain: 'Present passive infinitive.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Epistula ___ Lūciō scrībitur.</span>', hint: 'by', answers: ['ā', 'a'], full: 'Epistula ā Lūciō scrībitur.', explain: 'Agent, before a consonant: ā.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Nāvēs ventō mov___.</span>', hint: 'are moved', answers: ['entur'], full: 'Nāvēs ventō moventur.', explain: 'Present passive 3rd pl., 2nd conj.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Puerī ā patre vocābantur.', model: 'The boys were being called by their father.', accepted: ['boys were being called by father', 'boys were being called by their father', 'boys were called by father', 'boys were called by their father', 'boys were being called by the father'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'You (sg.) will be warned.', model: 'Monēberis.', accepted: ['monēberis', 'monēbere'] },
      { id: 't8', type: 'mc', prompt: 'Active into passive: <span class="la">Mīlitēs urbem servant.</span>', options: ['Urbs ā mīlitibus servātur.', 'Urbs mīlitibus servat.', 'Urbem ā mīlitibus servātur.', 'Mīlitēs ab urbe servantur.'], answer: 0, explain: 'Object → subject, subject → ā/ab + abl.' },
      { id: 't9', type: 'mc', prompt: '<span class="la">laetus vidētur</span>:', options: ['he seems happy', 'he is seen happily', 'he sees happily', 'he saw a happy man'], answer: 0, explain: 'videor = seem.' },
      { id: 't10', type: 'mc', prompt: 'Cicero’s <span class="la">scientiā tenērī</span>: why no <span class="la">ab</span> before <span class="la">scientiā</span>?', options: ['knowledge is a thing: ablative of means', 'scientia is feminine', 'tenērī is active', 'Cicero forgot it'], answer: 0, explain: 'Agent only for persons.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">amor</span> can be:', options: ['“love” (noun) or “I am loved” (verb)', 'only “love”', 'only “I love”', '“to love”'], answer: 0, explain: 'Same form, two words.' }
    ]
  },

  reference: [
    { title: 'Present system passive: amō', headers: ['', 'Present', 'Imperfect', 'Future'], rows: [
      ['1st sg.', 'amor', 'amābar', 'amābor'], ['2nd sg.', 'amāris (-re)', 'amābāris (-re)', 'amāberis (-re)'], ['3rd sg.', 'amātur', 'amābātur', 'amābitur'], ['1st pl.', 'amāmur', 'amābāmur', 'amābimur'], ['2nd pl.', 'amāminī', 'amābāminī', 'amābiminī'], ['3rd pl.', 'amantur', 'amābantur', 'amābuntur']
    ] },
    { title: 'Present system passive: moneō', headers: ['', 'Present', 'Imperfect', 'Future'], rows: [
      ['1st sg.', 'moneor', 'monēbar', 'monēbor'], ['2nd sg.', 'monēris (-re)', 'monēbāris (-re)', 'monēberis (-re)'], ['3rd sg.', 'monētur', 'monēbātur', 'monēbitur'], ['1st pl.', 'monēmur', 'monēbāmur', 'monēbimur'], ['2nd pl.', 'monēminī', 'monēbāminī', 'monēbiminī'], ['3rd pl.', 'monentur', 'monēbantur', 'monēbuntur']
    ] },
    { title: 'Who or what did it?', headers: ['Doer', 'Latin', 'German'], rows: [
      ['A person', 'ā/ab + abl.: ā magistrō', 'von: vom Lehrer'], ['A thing', 'abl. alone: ventō', 'durch, mit: durch den Wind']
    ] }
  ]
});
