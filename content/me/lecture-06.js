/*
 * Middle English — Lecture VI: negation (ne, nat, multiple negation), impersonal verbs (him thoughte, me list),
 * the subjunctive, and the modals moot/moste, shal, can. Reading: General Prologue 669–714 (the Pardoner)
 * in Skeat’s edition (1894), from the Project Gutenberg text. Pictures from Wikimedia Commons.
 */
Viator.addLecture('me', {
  id: 'me-06',
  number: 6,
  title: 'The Pardoner',
  subtitle: 'Negation, impersonal verbs and the subjunctive; General Prologue 669–714',
  minutes: 60,

  intro: `
    <p>The last full portrait in the Prologue is the most disturbing. The Pardoner, just back “from the court of Rome”, rides with the Summoner singing a love song. He has thin yellow hair spread over his shoulders, staring eyes, a goat’s voice and no beard; his bag is “brim-full of pardons come from Rome all hot”; his relics are a pillowcase he calls Our Lady’s veil and a glass full of pigs’ bones. With these he gets more money in a day than a poor country parson in two months. And yet, the narrator adds, in church he was a noble preacher.</p>
    <p>The grammar is a set of constructions that work differently from modern English but often like German: negation with <span class="la">ne</span> and multiple negatives; impersonal verbs with a dative (<span class="la">him thoughte</span> “it seemed to him”, German <em>ihm dünkte</em>); the subjunctive in comparisons and opinions (<span class="la">as it were late y-shave</span>); and the modal <span class="la">moste</span>, which means “had to”, as German <em>musste</em>, while its Old English ancestor meant “may”.</p>
  `,

  background: [
    {
      title: 'Pardoners and indulgences',
      html: `
        <p>A pardoner was a licensed collector of alms for a religious house or hospital, who in return offered indulgences: remission, granted by the Church, of the temporal punishment due for sins already forgiven. The theology was precise; the practice was not. Pardoners were widely accused of selling forgiveness itself, forging papal letters and carrying false relics, and preachers, Wyclif, Langland and church councils all attacked them.</p>
        <p>Chaucer’s Pardoner is “of Rouncival”, the hospital of St Mary Rounceval at Charing Cross in London, a dependency of the priory of Roncesvalles in Navarre, which sent out pardoners to raise money. His relics are transparent frauds, and Chaucer lets him boast of them himself in the Prologue to his tale (Lecture VII). The vernicle on his cap, a copy of the image of Christ on St Veronica’s veil, was the badge of pilgrims who had been to Rome.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/The_Pardoner_-_Ellesmere_Chaucer.jpg/960px-The_Pardoner_-_Ellesmere_Chaucer.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/The_Pardoner_-_Ellesmere_Chaucer.jpg/500px-The_Pardoner_-_Ellesmere_Chaucer.jpg|https://upload.wikimedia.org/wikipedia/commons/e/ef/The_Pardoner_-_Ellesmere_Chaucer.jpg" alt="Medieval miniature of a bare-headed rider holding up a cross"><figcaption>The Pardoner, from the Ellesmere manuscript of the <em>Canterbury Tales</em> (Huntington Library, EL 26 C 9), early 15th century. <span class="credit">Manuscript image, public domain · <a href="https://commons.wikimedia.org/wiki/File:The_Pardoner_-_Ellesmere_Chaucer.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: '“A gelding or a mare”',
      html: `
        <p>The narrator’s guess, <span class="la">I trowe he were a gelding or a mare</span>, has been read in several ways. Walter Clyde Curry (1919) showed that the features (thin yellow hair, glaring eyes, high voice, no beard) match the description of the eunuch in medieval physiognomy. Monica McAlpine (1980) argued that “mare” points to what medieval writers would have called sodomy, and that the portrait asks the reader to consider the Pardoner’s exclusion. Others read the line simply as insult.</p>
        <p>The text does not decide, and the narrator says only what he “trows”. What is clear is that Chaucer makes the most corrupt pilgrim also the most isolated, and that the Pardoner’s own tale, which follows, is one of the most powerful moral stories in the collection.</p>
      `
    },
    {
      title: 'From ne to not, in English and German',
      html: `
        <p>Negation in English and German has gone through the same cycle, named after the Danish linguist Otto Jespersen. Old English and Old High German put <span class="la">ne</span> before the verb. Because that small word was easily lost, speakers reinforced it with a word meaning “nothing, not a whit”: Middle English <span class="la">ne … nat</span> (from <span class="la">nā wiht</span>), Middle High German <em>ne … niht</em> (<em>ichn weiz niht</em>). Then the original <span class="la">ne</span> disappeared, leaving <em>not</em> and <em>nicht</em>, which were once the reinforcements. Chaucer stands in the middle of the cycle: he uses <span class="la">ne</span> alone, <span class="la">ne … nat</span>, and <span class="la">nat</span> alone.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">His walet lay biforn him in his lappe,<br>Bret‑ful of pardoun come from Rome al hoot.</p>
    <p>“His bag lay in front of him in his lap, brim-full of pardons come all hot from Rome.” General Prologue 686–687, Skeat’s text (1894).</p>
    <p><span class="la">al hoot</span> “piping hot”, as if the indulgences were fresh from the baker. The image of the church as a market runs through the whole portrait: pardons, relics, <span class="la">moneye</span>, <span class="la">silver</span>, and a preacher who sharpens his tongue <span class="la">to winne silver</span>.</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>Rouncival, compeer</strong>: French stress on the last syllable: <em>run-si-VAL, kom-PEER</em>.</li>
      <li><strong>heer</strong> “hair”: long e: <em>heer</em>, as German <em>Heer</em>.</li>
      <li><strong>Iapes, Iolitee, Iet, Iesu</strong>: Skeat’s I = J, pronounced as English j.</li>
      <li><strong>thoughte</strong>: gh = German ch: <em>thouch-tə</em>.</li>
      <li><strong>goot</strong>: long open o (OE <span class="la">gāt</span>), rhyming with <span class="la">hoot</span> “hot”.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. Negation',
      html: `
        <ul>
          <li><strong>ne before the verb</strong>: <span class="la">But hood … ne wered he noon</span> “but he wore no hood”.</li>
          <li><strong>Contractions</strong> with <span class="la">ne</span>, as in Old English: <span class="la">nis</span> (ne is), <span class="la">nas</span> (ne was), <span class="la">nolde</span> (ne wolde), <span class="la">noot</span> (ne woot “does not know”), <span class="la">nadde</span> (ne hadde).</li>
          <li><strong>ne … nat</strong> and <strong>nat</strong> alone: <span class="la">he was nat gay</span> (Lecture III).</li>
          <li><strong>Multiple negation</strong>: negatives reinforce each other. <span class="la">No berd hadde he, ne never sholde have</span>; <span class="la">Ne was ther swich another pardoner</span>; <span class="la">He never yet no vileinye ne sayde … un-to no maner wight</span> (Lecture III).</li>
        </ul>
        <p>Multiple negation was normal in English into the 16th century; by about 1600 educated writing had largely given it up, and 18th-century grammarians, reasoning from Latin and logic, then condemned it outright. It survives in many dialects (<em>I didn’t say nothing</em>), as it does in Bavarian (<em>koana hod nix gsagt</em>) while standard German, like standard English, rejects it.</p>
      `
    },
    {
      title: '2. Impersonal verbs',
      html: `
        <p>Many verbs of feeling and seeming take the person in the object (dative) case and have no subject, or only <span class="la">it</span>, as in German:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Chaucer</th><th>Meaning</th><th>German</th></tr></thead>
          <tbody>
            <tr><td class="la">him thoughte</td><td>it seemed to him</td><td>ihm dünkte</td></tr>
            <tr><td class="la">me list, me lest</td><td>I want, it pleases me</td><td>mich gelüstet</td></tr>
            <tr><td class="la">me liketh</td><td>it pleases me</td><td>mir gefällt</td></tr>
            <tr><td class="la">him nedeth</td><td>he needs</td><td>es tut ihm not (old)</td></tr>
            <tr><td class="la">me reweth</td><td>I regret</td><td>es reut mich</td></tr>
            <tr><td class="la">me mette</td><td>I dreamed</td><td>mir träumte</td></tr>
          </tbody>
        </table></div>
        <p>When English lost its case endings, the dative <span class="la">me, him</span> before the verb looked like a subject, and the constructions were reinterpreted: <em>me liketh</em> became <em>I like</em>. This is why English <em>like</em> has the person as subject and German <em>gefallen</em> does not. The change is one of the classic examples of grammatical reanalysis.</p>
      `
    },
    {
      title: '3. The subjunctive',
      html: `
        <p>The forms are those of Old English, reduced: present <span class="la">-e, -en</span> (no <span class="la">-est, -eth</span>), past <span class="la">-e, -en</span>, and <span class="la">were</span> for all persons of <span class="la">been</span>. Uses in this portrait:</p>
        <ul>
          <li><strong>Comparisons with as</strong>: <span class="la">As smothe it was as it were late y-shave</span> “as if it had just been shaved”, German <em>als wäre es eben rasiert</em>.</li>
          <li><strong>Opinions and doubt</strong>: <span class="la">I trowe he were a gelding or a mare</span>: the subjunctive marks the statement as the narrator’s guess.</li>
          <li><strong>Wishes</strong>: <span class="la">God save yow</span>; <span class="la">so mote I thee</span> “so may I prosper”.</li>
          <li><strong>Conditions and concessions</strong>: <span class="la">though that he were worthy</span> (Lecture III); <span class="la">if it were deed</span> (Lecture IV).</li>
        </ul>
        <p>Modern English keeps only traces: <em>if I were you, be that as it may, God save the King</em>.</p>
      `
    },
    {
      title: '4. Modal verbs: moot, shal, can, wol',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Chaucer</th><th>Past</th><th>Meaning in Chaucer</th><th>Old English</th><th>German</th></tr></thead>
          <tbody>
            <tr><td class="la">moot</td><td class="la">moste</td><td>must; may (in wishes)</td><td class="la">mōtan</td><td>muss, musste</td></tr>
            <tr><td class="la">shal</td><td class="la">sholde</td><td>must, owe; shall</td><td class="la">sculan</td><td>soll, sollte</td></tr>
            <tr><td class="la">can</td><td class="la">coude</td><td>know, know how to; can</td><td class="la">cunnan</td><td>kann, konnte</td></tr>
            <tr><td class="la">wol</td><td class="la">wolde</td><td>want, will</td><td class="la">willan</td><td>will, wollte</td></tr>
            <tr><td class="la">woot</td><td class="la">wiste</td><td>know</td><td class="la">witan</td><td>weiß, wusste</td></tr>
          </tbody>
        </table></div>
        <p>Old English <span class="la">mōtan</span> meant “may, be allowed” (Old English Lecture VII). In Chaucer <span class="la">moot</span> is moving towards “must”, and the past <span class="la">moste</span> already means “had to”: <span class="la">He moste preche</span> “he had to preach”, exactly German <em>er musste predigen</em>. The old sense survives in wishes: <span class="la">so mote I thee</span> “so may I thrive”. Note also <span class="la">coude</span> “knew” (<span class="la">as he ful wel coude</span> “as he very well knew how”) and <span class="la">wiste</span> “knew”.</p>
      `
    }
  ],

  vocab: [
    { id: 'pardoner', head: 'pardoner', la: 'pardoner', pos: 'noun', en: 'pardoner, licensed seller of indulgences', note: 'From pardoun, French pardon.' },
    { id: 'pardoun', head: 'pardoun', la: 'pardoun', pos: 'noun', en: 'indulgence; pardon', note: 'French pardon; German Ablass is the theological term.' },
    { id: 'relik', head: 'relik', la: 'relik, pl. relikes', pos: 'noun', en: 'relic', note: 'French relique, Latin reliquiae “remains”; German Reliquie.' },
    { id: 'walet', head: 'walet', la: 'walet', pos: 'noun', en: 'bag, pack', note: 'Origin uncertain; first recorded in Chaucer. A bag for provisions, not a purse.' },
    { id: 'heer', head: 'heer', la: 'heer', pos: 'noun', en: 'hair', note: 'OE hǣr, German Haar.' },
    { id: 'berd', head: 'berd', la: 'berd', pos: 'noun', en: 'beard', note: 'OE beard, German Bart.' },
    { id: 'voys', head: 'voys', la: 'voys', pos: 'noun', en: 'voice', note: 'French voiz, Latin vox.' },
    { id: 'craft', head: 'craft', la: 'craft', pos: 'noun', en: 'skill; trade; cunning', note: 'OE cræft “strength, skill”, German Kraft.' },
    { id: 'japes', head: 'jape', la: 'jape, pl. japes', pos: 'noun', en: 'trick, joke', note: 'Skeat spells Iape. Origin uncertain, perhaps French.' },
    { id: 'prechen', head: 'prechen', la: 'prechen; preched', pos: 'verb, weak', en: 'preach', note: 'French prêcher, Latin praedicare; German predigen.' },
    { id: 'moot', head: 'moot', la: 'moot, moste', pos: 'verb, preterite-present', en: 'must; may (in wishes)', note: 'OE mōtan “may”; German muss, musste.' },
    { id: 'shal', head: 'shal', la: 'shal, sholde', pos: 'verb, preterite-present', en: 'must, owe; shall', note: 'OE sculan, German soll, sollte.' },
    { id: 'thinken', head: 'thinken (impersonal)', la: 'him thinketh, him thoughte', pos: 'verb, impersonal', en: 'seem (to him)', note: 'OE þyncan, German dünken. Different from thenken “think”.' },
    { id: 'listen', head: 'listen (impersonal)', la: 'me list, me liste', pos: 'verb, impersonal', en: 'please; me list: I want', note: 'OE lystan, German gelüsten; English list (archaic) and listless.' },
    { id: 'geten', head: 'geten', la: 'geten; gat, geten; geten', pos: 'verb, strong', en: 'get, obtain', note: 'Old Norse geta (Lecture V: g before e is Norse). German vergessen is related.' },
    { id: 'henten', head: 'henten', la: 'henten; hente; hent', pos: 'verb, weak', en: 'seize, catch', note: 'OE hentan; related to hunt.' },
    { id: 'povre', head: 'povre', la: 'povre', pos: 'adjective', en: 'poor', note: 'French povre (modern pauvre).' },
    { id: 'nat', head: 'nat', la: 'nat, not', pos: 'adverb', en: 'not', note: 'OE nā wiht “not a whit”; German nicht (ni wiht).' }
  ],

  grammarCards: [
    { id: 'me6-ne', front: 'ne before the verb', back: 'The old negative: ne wered he noon' },
    { id: 'me6-contr', front: 'nis, nas, nolde, noot, nadde', back: 'ne is, ne was, ne wolde, ne woot, ne hadde' },
    { id: 'me6-multi', front: 'Multiple negation', back: 'Negatives reinforce each other: No berd hadde he, ne never sholde have' },
    { id: 'me6-cycle', front: 'Jespersen’s cycle', back: 'ne → ne … nat → nat (German ne → ne … niht → nicht)' },
    { id: 'me6-nat', front: 'Origin of nat, not', back: 'OE nā wiht “not a whit”; German nicht from ni wiht' },
    { id: 'me6-thoughte', front: 'him thoughte', back: 'it seemed to him (German ihm dünkte)' },
    { id: 'me6-list', front: 'me list', back: 'I want, it pleases me (German mich gelüstet)' },
    { id: 'me6-liketh', front: 'me liketh → I like', back: 'Dative reinterpreted as subject when case endings were lost' },
    { id: 'me6-mette', front: 'me mette', back: 'I dreamed (German mir träumte)' },
    { id: 'me6-were', front: 'as it were late y-shave', back: 'as if it had just been shaved (subjunctive in a comparison)' },
    { id: 'me6-trowe', front: 'I trowe he were …', back: 'Subjunctive for a guess or opinion' },
    { id: 'me6-moste', front: 'He moste preche', back: 'He had to preach (German er musste predigen)' },
    { id: 'me6-mote', front: 'so mote I thee', back: 'so may I prosper (old sense of moot)' },
    { id: 'me6-coude', front: 'as he ful wel coude', back: 'as he very well knew how' },
    { id: 'me6-hoot', front: 'Bret-ful of pardoun come from Rome al hoot', back: 'Brim-full of pardons come all hot from Rome (GP 687)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">nas</span> means:', options: ['was not', 'has not', 'is not', 'not as'], answer: 0, explain: 'ne + was.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">No berd hadde he, ne never sholde have</span> contains:', options: ['multiple negation', 'a double positive', 'an error', 'a question'], answer: 0, explain: 'no, ne, never reinforce each other.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Him thoughte, he rood al of the newe Iet</span> means:', options: ['It seemed to him that he rode in the latest fashion', 'He thought about the new fashion', 'They thought he rode a new horse', 'He thought of jet'], answer: 0, explain: 'Impersonal him thoughte.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">He moste preche</span> means:', options: ['He had to preach', 'He may preach', 'He most preached', 'He must have preached'], answer: 0, explain: 'German er musste predigen.' },
    { id: 'e5', type: 'mc', prompt: 'Why is <span class="la">were</span> used in “I trowe he were a gelding or a mare”?', options: ['Subjunctive for the narrator’s guess', 'Plural', 'Past tense of fact', 'A misprint'], answer: 0, explain: 'The statement is an opinion.' },
    { id: 'e6', type: 'mc', prompt: 'What does the Pardoner claim his pillowcase is?', options: ['Our Lady’s veil', 'St Peter’s sail', 'Christ’s shroud', 'A bishop’s mitre'], answer: 0, explain: 'GP 694–695.' },
    { id: 'e7', type: 'mc', prompt: 'What does he keep in a glass?', options: ['pigs’ bones', 'holy water', 'wine', 'gems'], answer: 0, explain: 'And in a glas he hadde pigges bones.' },
    { id: 'e8', type: 'mc', prompt: 'How much does he earn in a day, compared with a poor parson?', options: ['More than the parson in two months', 'The same', 'Less', 'Twice as much'], answer: 0, explain: 'GP 703–704.' },
    { id: 'e9', type: 'match', prompt: 'Match the contractions.', pairs: [
      ['nis', 'ne is'], ['nas', 'ne was'], ['nolde', 'ne wolde'], ['noot', 'ne woot'], ['nadde', 'ne hadde']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the impersonal verbs to German.', pairs: [
      ['him thoughte', 'ihm dünkte'], ['me list', 'mich gelüstet'], ['me liketh', 'mir gefällt'], ['me reweth', 'es reut mich'], ['me mette', 'mir träumte']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">But hood, for Iolitee, ___ wered he noon</span>', hint: 'not (the old negative)', answers: ['ne'], full: 'But hood, for Iolitee, ne wered he noon', explain: 'GP 680.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">As smothe it was as it ___ late y-shave</span>', hint: 'were (subjunctive)', answers: ['were'], full: 'As smothe it was as it were late y-shave', explain: 'GP 690.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">He ___ preche, and wel affyle his tonge</span>', hint: 'had to', answers: ['moste', 'muste'], full: 'He moste preche, and wel affyle his tonge', explain: 'GP 712.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">___ thoughte, he rood al of the newe Iet</span>', hint: 'to him (impersonal)', answers: ['him'], full: 'Him thoughte, he rood al of the newe Iet', explain: 'GP 682.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give the present and past of the modal verbs.', headers: ['Present', 'Past'], rows: [
      { label: 'must', answers: ['moot|mot', 'moste'] },
      { label: 'shall', answers: ['shal', 'sholde'] },
      { label: 'can, know how', answers: ['can', 'coude'] },
      { label: 'know (fact)', answers: ['woot|wot', 'wiste'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Make the negative contraction.', headers: ['Full form', 'Contraction'], rows: [
      { label: 'is not', answers: ['ne is', 'nis'] },
      { label: 'was not', answers: ['ne was', 'nas'] },
      { label: 'would not', answers: ['ne wolde', 'nolde'] },
      { label: 'had not', answers: ['ne hadde', 'nadde'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the modern translation in order.', source: 'Ne was ther swich another pardoner', tokens: ['There was', 'not', 'another such', 'pardoner'], explain: 'GP 693.' },
    { id: 'e18', type: 'translate', dir: 'me-en', source: 'A voys he hadde as smal as hath a goot.', model: 'He had a voice as thin as a goat’s.', accepted: ['he had a voice as thin as a goat', 'he had a voice as thin as a goats', 'he had a voice as high as a goat', 'he had a voice as small as a goat', 'he had a voice as small as a goat has', 'he had a voice as thin as a goat has', 'he had a voice as high as a goats', 'a voice he had as small as a goat has'] },
    { id: 'e19', type: 'translate', dir: 'me-en', source: 'Me list nat speke.', model: 'I do not wish to speak.', accepted: ['i do not wish to speak', 'i dont wish to speak', 'i do not want to speak', 'i dont want to speak', 'i have no wish to speak', 'it does not please me to speak'] },
    { id: 'e20', type: 'translate', dir: 'en-me', source: 'it seemed to him (impersonal)', model: 'him thoughte', accepted: ['him thoughte', 'him thoghte', 'him semed'], explain: 'Impersonal, “it seemed to him”, with the dative him; thoughte is the past of thinken “seem” (Old English þūhte).' },
    { id: 'e21', type: 'translate', dir: 'en-me', source: 'he had to preach', model: 'he moste preche', accepted: ['he moste preche', 'he moste prechen'], explain: 'Moste is the past of moot “may, must” (German musste), here “had to”.' },
    { id: 'e22', type: 'mc', prompt: 'Where was the hospital of Rouncival?', options: ['At Charing Cross, London', 'In Rome', 'In Canterbury', 'In Bath'], answer: 0, explain: 'A dependency of Roncesvalles in Navarre.' },
    { id: 'e23', type: 'mc', prompt: 'Why does English say “I like” where German says “mir gefällt”?', options: ['The dative me was reinterpreted as a subject', 'French influence', 'Norse influence', 'Chaucer invented it'], answer: 0, explain: 'me liketh → I like.' }
  ],

  reading: {
    title: 'General Prologue 669–714',
    note: 'Authentic text: The Canterbury Tales, General Prologue (Group A) 669–714, the Pardoner, in Skeat’s edition (The Complete Works of Geoffrey Chaucer, vol. 4, Oxford 1894), from the Project Gutenberg transcription. Skeat writes I for J (Iolitee, Iet, Iesu, Iapes). Among his readings: lay (686, from Harley, which the others omit), so meriely (714; E. Hn. Cm. the murierly). Tap any word.',
    text: 'With him ther rood a gentil Pardoner\nOf Rouncival, his freend and his compeer,\nThat streight was comen fro the court of Rome.\nFul loude he song, ‘Com hider, love, to me.’\nThis somnour bar to him a stif burdoun,\nWas never trompe of half so greet a soun.\nThis pardoner hadde heer as yelow as wex,\nBut smothe it heng, as dooth a strike of flex;\nBy ounces henge his lokkes that he hadde,\nAnd ther‑with he his shuldres overspradde;\nBut thinne it lay, by colpons oon and oon;\nBut hood, for Iolitee, ne wered he noon,\nFor it was trussed up in his walet.\nHim thoughte, he rood al of the newe Iet;\nDischevele, save his cappe, he rood al bare.\nSwiche glaringe eyen hadde he as an hare.\nA vernicle hadde he sowed on his cappe.\nHis walet lay biforn him in his lappe,\nBret‑ful of pardoun come from Rome al hoot.\nA voys he hadde as smal as hath a goot.\nNo berd hadde he, ne never sholde have,\nAs smothe it was as it were late y‑shave;\nI trowe he were a gelding or a mare.\nBut of his craft, fro Berwik into Ware,\nNe was ther swich another pardoner.\nFor in his male he hadde a pilwe‑beer,\nWhich that, he seyde, was our lady veyl:\nHe seyde, he hadde a gobet of the seyl\nThat sëynt Peter hadde, whan that he wente\nUp‑on the see, til Iesu Crist him hente.\nHe hadde a croys of latoun, ful of stones,\nAnd in a glas he hadde pigges bones.\nBut with thise relikes, whan that he fond\nA povre person dwelling up‑on lond,\nUp‑on a day he gat him more moneye\nThan that the person gat in monthes tweye.\nAnd thus, with feyned flaterye and Iapes,\nHe made the person and the peple his apes.\nBut trewely to tellen, atte laste,\nHe was in chirche a noble ecclesiaste.\nWel coude he rede a lessoun or a storie,\nBut alderbest he song an offertorie;\nFor wel he wiste, whan that song was songe,\nHe moste preche, and wel affyle his tonge,\nTo winne silver, as he ful wel coude;\nTherefore he song so meriely and loude.',
    translations: [
      { label: 'Modern English', text: 'With him rode a fine Pardoner of Rouncival, his friend and companion, who had come straight from the court of Rome. Very loudly he sang “Come hither, love, to me”. The Summoner accompanied him with a strong bass; no trumpet was ever half so loud. This Pardoner had hair as yellow as wax, but it hung smoothly, like a hank of flax; his locks hung in thin strands, and he spread them over his shoulders; but it lay thinly, in strands one by one. But he wore no hood, for style, for it was packed up in his bag; it seemed to him that he rode in the latest fashion; with his hair loose, except for his cap, he rode bare-headed. He had glaring eyes like a hare. He had sewn a vernicle on his cap. His bag lay before him in his lap, brim-full of pardons come all hot from Rome. He had a voice as thin as a goat’s. He had no beard, nor would he ever have one; it was as smooth as if it had just been shaved. I believe he was a gelding or a mare. But as for his trade, from Berwick to Ware there was no other such pardoner. For in his bag he had a pillowcase which he said was Our Lady’s veil; he said he had a piece of the sail that Saint Peter had when he walked on the sea, until Jesus Christ caught him. He had a cross of cheap metal, full of stones, and in a glass he had pigs’ bones. But with these relics, when he found a poor parson living in the country, he got himself more money in one day than the parson got in two months. And thus, with false flattery and tricks, he made fools of the parson and the people. But to tell the truth, in the end, he was a noble churchman in church. He could read a lesson or a story well, but best of all he sang an offertory; for he knew well that when that song was sung he would have to preach and sharpen his tongue well to win money, as he knew very well how. Therefore he sang so merrily and loudly.' },
      { label: 'German translation', text: 'Mit ihm ritt ein feiner Ablasskrämer von Rouncival, sein Freund und Gefährte, der geradewegs vom Hof in Rom gekommen war. Sehr laut sang er „Komm her, Liebste, zu mir“. Der Büttel brummte ihm einen kräftigen Bass dazu; nie war eine Trompete halb so laut. Dieser Ablasskrämer hatte Haar so gelb wie Wachs, doch glatt hing es, wie ein Strähn Flachs; in dünnen Büscheln hingen seine Locken, und damit bedeckte er seine Schultern; doch dünn lag es, Strähne um Strähne. Doch eine Kapuze trug er nicht, zur Zier, denn sie war in seinem Ranzen verstaut; ihm dünkte, er reite ganz nach der neuen Mode; mit offenem Haar, bis auf seine Kappe, ritt er barhäuptig. Solche Glotzaugen hatte er wie ein Hase. Ein Schweißtuchbild hatte er an seine Kappe genäht. Sein Ranzen lag vor ihm im Schoß, randvoll mit Ablass, ganz heiß aus Rom gekommen. Eine Stimme hatte er so dünn wie eine Ziege. Keinen Bart hatte er und sollte nie einen haben; so glatt war es, als wäre es eben rasiert; ich glaube, er war ein Wallach oder eine Stute. Doch in seinem Gewerbe gab es von Berwick bis Ware keinen solchen Ablasskrämer. Denn in seinem Sack hatte er einen Kissenbezug, der, wie er sagte, Unserer Lieben Frau Schleier war; er sagte, er habe ein Stück vom Segel, das Sankt Peter hatte, als er auf dem See ging, bis Jesus Christus ihn ergriff. Er hatte ein Kreuz aus Messingblech voller Steine, und in einem Glas hatte er Schweineknochen. Doch mit diesen Reliquien gewann er, wenn er einen armen Pfarrer auf dem Land fand, an einem Tag mehr Geld, als der Pfarrer in zwei Monaten bekam. Und so machte er mit falscher Schmeichelei und Possen den Pfarrer und das Volk zu seinen Affen. Doch um die Wahrheit zu sagen: am Ende war er in der Kirche ein edler Geistlicher. Gut konnte er eine Lesung oder eine Geschichte vortragen, doch am allerbesten sang er ein Offertorium; denn er wusste wohl, dass er nach diesem Gesang predigen und seine Zunge gut schärfen musste, um Silber zu gewinnen, wie er es sehr gut konnte. Darum sang er so fröhlich und laut.' }
    ],
    notes: [
      { ref: 'With him ther rood a gentil Pardoner', html: '<span class="la">With him</span>: with the Summoner, whose portrait precedes. <span class="la">gentil</span> is ironic here.' },
      { ref: 'Ful loude he song, ‘Com hider, love, to me.’', html: 'Apparently a popular love song; a strange choice for a churchman, and sung as a duet with the Summoner.' },
      { ref: 'But hood, for Iolitee, ne wered he noon', html: 'Negation with <span class="la">ne</span> and <span class="la">noon</span>: “he wore no hood”. Clergy were expected to cover their heads.' },
      { ref: 'Him thoughte, he rood al of the newe Iet', html: 'Impersonal: “it seemed to him that he rode in the newest fashion”. <span class="la">Iet</span> (jet) “fashion”, from French.' },
      { ref: 'A vernicle hadde he sowed on his cappe', html: 'A badge showing the face of Christ on Veronica’s veil, bought by pilgrims in Rome.' },
      { ref: 'No berd hadde he, ne never sholde have', html: 'Three negatives in one clause; <span class="la">sholde</span> “would” (future in the past).' },
      { ref: 'As smothe it was as it were late y‑shave', html: 'Subjunctive <span class="la">were</span> in a comparison: “as if it had just been shaved”.' },
      { ref: 'I trowe he were a gelding or a mare', html: 'Subjunctive for the narrator’s opinion; see the background on interpretations.' },
      { ref: 'fro Berwik into Ware', html: 'From the far north of England almost to London: “in the whole country”.' },
      { ref: 'Which that, he seyde, was our lady veyl', html: '<span class="la">our lady veyl</span>: genitive without -s, an old feminine genitive (OE <span class="la">hlǣfdigan</span>), as in <em>Lady Day</em>.' },
      { ref: 'He moste preche, and wel affyle his tonge', html: '<span class="la">moste</span> “had to”, German <em>musste</em>. <span class="la">affyle</span> “file, sharpen”.' },
      { ref: 'To winne silver, as he ful wel coude', html: '<span class="la">coude</span> “knew how (to do)”: the old sense of <em>can</em>, German <em>können</em> in <em>er kann Englisch</em>.' }
    ],
    glosses: {
      'a': 'a', 'affyle': 'file, sharpen (his tongue)', 'al': 'all; entirely', 'alderbest': 'best of all (OE ealra + best)', 'an': 'a', 'and': 'and',
      'another': 'another', 'apes': 'apes, dupes; made … his apes: made fools of', 'as': 'as', 'atte': 'at the; atte laste: at the last, in the end', 'bar': 'bore; bar … a stif burdoun: sang a strong bass', 'bare': 'bare-headed',
      'beer': 'pilwe-beer: pillowcase', 'berd': 'beard', 'berwik': 'Berwick (in the far north of England)', 'biforn': 'before, in front of', 'bones': 'bones', 'bret': 'bret-ful: brim-full',
      'burdoun': 'bass part, accompaniment (French bourdon)', 'but': 'but; except', 'by': 'by; in; by ounces: in thin strands', 'cappe': 'cap', 'chirche': 'church', 'colpons': 'strands, shreds; oon and oon: one by one',
      'com': 'come (imperative)', 'come': 'come (past part.)', 'comen': 'come (past part.)', 'compeer': 'companion, crony', 'coude': 'could, knew how to', 'court': 'court',
      'craft': 'trade, profession', 'crist': 'Christ', 'croys': 'cross', 'day': 'day', 'dischevele': 'with his hair loose (French)', 'dooth': 'does',
      'dwelling': 'living', 'ecclesiaste': 'churchman, preacher', 'eyen': 'eyes', 'feyned': 'feigned, false', 'flaterye': 'flattery', 'flex': 'flax; a strike of flex: a hank of flax',
      'fond': 'found', 'for': 'for; because; for Iolitee: for fun, for style', 'freend': 'friend', 'fro': 'from', 'from': 'from', 'ful': 'very; full',
      'gat': 'got (past of geten)', 'gelding': 'gelding, castrated horse', 'gentil': 'noble, fine (ironic)', 'glaringe': 'staring, glaring', 'glas': 'glass jar', 'gobet': 'piece, fragment',
      'goot': 'goat', 'greet': 'great', 'hadde': 'had', 'half': 'half', 'hare': 'hare', 'hath': 'has',
      'have': 'have', 'he': 'he', 'heer': 'hair', 'heng': 'hung', 'henge': 'hung (plural)', 'hente': 'seized, caught (past of henten)',
      'hider': 'hither, here', 'him': 'him; to him; him thoughte: it seemed to him', 'his': 'his', 'hood': 'hood', 'hoot': 'hot; al hoot: hot from the oven, fresh', 'i': 'I',
      'iapes': 'tricks, jests (J)', 'iesu': 'Jesu, Jesus (J)', 'iet': 'fashion, style (J; French jet); al of the newe Iet: in the latest fashion', 'in': 'in', 'into': 'to, as far as', 'iolitee': 'jollity, fun (J); for Iolitee: for show',
      'it': 'it', 'lady': 'lady; our lady veyl: Our Lady’s veil (genitive without -s)', 'lappe': 'lap', 'laste': 'last; atte laste: in the end', 'late': 'lately, just', 'latoun': 'latten, a cheap brass-like alloy',
      'lay': 'lay', 'lessoun': 'lesson (a reading in church)', 'lokkes': 'locks of hair', 'lond': 'land; up-on lond: in the country', 'loude': 'loud, loudly', 'love': 'love (address)',
      'made': 'made', 'male': 'bag, pouch (French malle)', 'mare': 'mare', 'me': 'me', 'meriely': 'merrily', 'moneye': 'money',
      'monthes': 'months', 'more': 'more', 'moste': 'had to (past of moot)', 'ne': 'not; nor', 'never': 'never', 'newe': 'new',
      'no': 'no', 'noble': 'noble, excellent', 'noon': 'none', 'of': 'of; from', 'offertorie': 'offertory (sung while offerings are collected)', 'on': 'on',
      'oon': 'one; oon and oon: one by one', 'or': 'or', 'ounces': 'ounces; by ounces: in small clumps', 'our': 'our', 'overspradde': 'spread over', 'pardoner': 'pardoner, seller of indulgences',
      'pardoun': 'pardons, indulgences', 'peple': 'people', 'person': 'parson, parish priest', 'peter': 'Peter', 'pigges': 'pigs’', 'pilwe': 'pilwe-beer: pillowcase',
      'povre': 'poor', 'preche': 'preach', 'rede': 'read (aloud)', 'relikes': 'relics', 'rome': 'Rome', 'rood': 'rode',
      'rouncival': 'Rouncival, a hospital at Charing Cross', 'save': 'except', 'see': 'sea', 'seyde': 'said', 'seyl': 'sail', 'shave': 'y-shave: shaved',
      'sholde': 'should, would', 'shuldres': 'shoulders', 'silver': 'silver, money', 'smal': 'thin, high', 'smothe': 'smooth', 'so': 'so',
      'somnour': 'summoner (officer of the church courts)', 'song': 'sang', 'songe': 'sung', 'soun': 'sound', 'sowed': 'sewn', 'stif': 'strong, stout',
      'stones': 'stones, gems', 'storie': 'story; a liturgical reading', 'streight': 'straight, directly', 'strike': 'hank (of flax)', 'swich': 'such', 'swiche': 'such',
      'sëynt': 'saint (two syllables)', 'tellen': 'tell', 'than': 'than', 'that': 'that; who', 'the': 'the', 'ther': 'there; ther-with: with that',
      'therefore': 'therefore', 'thinne': 'thin, thinly', 'this': 'this', 'thise': 'these', 'thoughte': 'seemed; him thoughte: it seemed to him', 'thus': 'thus',
      'til': 'until (Norse)', 'to': 'to', 'tonge': 'tongue', 'trewely': 'truly', 'trompe': 'trumpet', 'trowe': 'believe, think',
      'trussed': 'packed', 'tweye': 'two', 'up': 'up; up-on: upon', 'vernicle': 'vernicle, a badge with Veronica’s veil', 'veyl': 'veil', 'voys': 'voice',
      'walet': 'bag, wallet', 'ware': 'Ware (in Hertfordshire)', 'was': 'was', 'wel': 'well', 'wente': 'went, walked', 'were': 'were (subj.)',
      'wered': 'wore', 'wex': 'wax', 'whan': 'when', 'which': 'which', 'winne': 'win, gain', 'wiste': 'knew',
      'with': 'with', 'y': 'prefix y-: y-shave “shaved”', 'yelow': 'yellow'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Where has the Pardoner just come from?', options: ['The court of Rome', 'Canterbury', 'Paris', 'Rouncival in Navarre'], answer: 0, explain: 'That streight was comen fro the court of Rome.' },
      { id: 'r2', type: 'mc', prompt: 'Why does he not wear a hood?', options: ['He thinks it fashionable to ride bare-headed', 'He lost it', 'It is too hot', 'He is a monk'], answer: 0, explain: 'for Iolitee … al of the newe Iet.' },
      { id: 'r3', type: 'mc', prompt: 'What relic of St Peter does he claim to have?', options: ['A piece of his sail', 'His keys', 'A tooth', 'His staff'], answer: 0, explain: 'a gobet of the seyl.' },
      { id: 'r4', type: 'mc', prompt: 'What does the narrator concede at the end?', options: ['He was a noble preacher in church', 'He was honest', 'He was poor', 'He was humble'], answer: 0, explain: 'He was in chirche a noble ecclesiaste.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">nat</span> comes from:', options: ['nā wiht “not a whit”', 'Latin non', 'French ne', 'Norse ekki'], answer: 0, explain: 'Like German nicht.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">me mette</span> means:', options: ['I dreamed', 'I met', 'I measured', 'I ate'], answer: 0, explain: 'German mir träumte.' },
      { id: 't3', type: 'mc', prompt: 'In Chaucer <span class="la">moste</span> usually means:', options: ['had to', 'might', 'most', 'mustered'], answer: 0, explain: 'OE mōtan meant “may”.' },
      { id: 't4', type: 'mc', prompt: 'When did grammarians condemn multiple negation?', options: ['18th century', 'In Chaucer’s time', 'In Old English', '20th century'], answer: 0, explain: 'Written English had largely dropped it by about 1600; it survives in dialects.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">___ was ther swich another pardoner</span>', hint: 'not (old negative)', answers: ['ne'], full: 'Ne was ther swich another pardoner', explain: 'GP 693.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">For wel he ___, whan that song was songe</span>', hint: 'knew (witen)', answers: ['wiste', 'wist'], full: 'For wel he wiste, whan that song was songe', explain: 'GP 711.' },
      { id: 't7', type: 'translate', dir: 'me-en', source: 'He was in chirche a noble ecclesiaste.', model: 'He was a noble churchman in church.', accepted: ['he was a noble churchman in church', 'in church he was a noble churchman', 'he was a noble preacher in church', 'in church he was a noble preacher', 'in church he was a noble ecclesiastic', 'he was a noble ecclesiastic in church'] },
      { id: 't8', type: 'translate', dir: 'en-me', source: 'was not (contraction)', model: 'nas', accepted: ['nas'], explain: 'Ne + was contract to nas, as ne + is gives nis. Chaucer piles up negatives without their cancelling out.' },
      { id: 't9', type: 'mc', prompt: 'A vernicle shows:', options: ['the face of Christ on Veronica’s veil', 'the keys of St Peter', 'a scallop shell', 'the Three Kings'], answer: 0, explain: 'A Rome pilgrim’s badge.' },
      { id: 't10', type: 'mc', prompt: 'Who linked the Pardoner’s features with medieval physiognomy of the eunuch?', options: ['W. C. Curry', 'Jill Mann', 'Terry Jones', 'W. W. Skeat'], answer: 0, explain: '1919.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">so mote I thee</span> means:', options: ['so may I prosper', 'so must I go', 'so I met thee', 'so I must thank you'], answer: 0, explain: 'The old sense of moot.' }
    ]
  },

  reference: [
    { title: 'Negation', headers: ['Form', 'Example'], rows: [['ne + verb', 'ne wered he noon'], ['contraction', 'nis, nas, nolde, noot, nadde'], ['ne … nat / nat', 'he was nat gay'], ['multiple', 'No berd hadde he, ne never sholde have']] },
    { title: 'Impersonal verbs', headers: ['Chaucer', 'Meaning', 'German'], rows: [['him thoughte', 'it seemed to him', 'ihm dünkte'], ['me list', 'I want', 'mich gelüstet'], ['me liketh', 'it pleases me', 'mir gefällt'], ['me reweth', 'I regret', 'es reut mich'], ['me mette', 'I dreamed', 'mir träumte']] },
    { title: 'Modal verbs', headers: ['Present', 'Past', 'Meaning'], rows: [['moot', 'moste', 'must; may (wishes)'], ['shal', 'sholde', 'must; shall'], ['can', 'coude', 'know how; can'], ['wol', 'wolde', 'want, will'], ['woot', 'wiste', 'know']] }
  ]
});
