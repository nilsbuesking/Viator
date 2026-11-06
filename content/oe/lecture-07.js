/*
 * Old English — Lecture VII: weak verbs (classes 1–3, “Rückumlaut” verbs), preterite-present verbs, willan.
 * Reading: King Alfred’s Preface to the Pastoral Care, Sweet’s lines 32–53, from Henry Sweet,
 * An Anglo-Saxon Reader, 2nd edition (1879), pp. 5–6 (sources/oe-sweet-1879-alfred-preface.txt).
 * Pictures from Wikimedia Commons.
 */
Viator.addLecture('oe', {
  id: 'oe-07',
  number: 7,
  title: 'King Alfred’s Preface',
  subtitle: 'Weak verbs; preterite-presents; Alfred, Preface to the Pastoral Care',
  minutes: 60,

  intro: `
    <p>Some time around 890, King Alfred of Wessex sent each of his bishops a copy of Pope Gregory the Great’s <em>Regula pastoralis</em>, a handbook for bishops, which he had translated into English. In front of it he put a letter. It is the best-known piece of Old English prose: a king looking back on a lost golden age of learning, explaining why he has decided that books must now be read in English.</p>
    <p>The reading is the heart of the letter: Alfred remembers the churches full of books that nobody could read, and imagines what the earlier generation would say. It is also full of the two verb types of this lecture. <strong>Weak verbs</strong> form the past with a dental suffix, exactly like German <em>lieben, liebte</em>: <span class="la">lufian, lufode</span>. <strong>Preterite-present verbs</strong> are the Old English ancestors of the German modal verbs, with the same odd present tense: <span class="la">hē wāt, hē cann, hē mæg, hē sceal</span>, as <em>er weiß, er kann, er mag, er soll</em>, without the <span class="la">-þ</span> that every other verb has in the third person.</p>
    <p>The text is in <strong>early West Saxon</strong>, Alfred’s own dialect, and it looks a little different from Beowulf: <span class="la">giond, hiora, geðīode, ieldran</span> where later texts have <span class="la">geond, heora, geðēode, yldran</span>. Dictionaries list the later spellings, so the glosses give both.</p>
  `,

  background: [
    {
      title: 'Alfred and the Vikings',
      html: `
        <p>Alfred (king 871–899) came to the throne in the middle of the Viking wars. The kingdoms of Northumbria, East Anglia and most of Mercia had fallen; in 878 he was driven into the Somerset marshes before defeating the Danish army at Edington. The rest of his reign went into defence: fortified towns (<span class="la">burga</span>), a reorganised army, and ships. The phrase in our reading, <span class="la">ǣr ðǣm ðe hit eall forhergod wǣre ond forbærned</span>, “before it was all ravaged and burnt”, refers to these raids.</p>
        <p>The Preface sets the programme for the second half of the reign: free-born young men with the means should learn to read English, and those going on to the Church should then learn Latin. Alfred lists his helpers by name, Archbishop Plegmund, Bishop Asser, Grimbald and John (the Mass-priests), and says he translated “sometimes word for word, sometimes sense for sense”, the old formula of Jerome.</p>
        <p>How much of the translation programme is Alfred’s own work is debated. The Preface and the Pastoral Care are usually accepted as his; the Old English Boethius and Soliloquies have traditionally been added, the Orosius and the Bede generally not. Malcolm Godden (2007) argued that even the Boethius may be the work of others writing in the king’s name, and Janet Bately and others have defended the traditional view. The “golden age” of the first lines is also a rhetorical frame: Alfred’s own Mercian helpers show that learning had not died out completely.</p>
      `
    },
    {
      title: 'The manuscript and the æstel',
      html: `
        <p>Sweet’s text follows Oxford, Bodleian Library, Hatton 20, the copy addressed to Bishop Wærferth of Worcester and probably written in Alfred’s lifetime, so it shows the king’s own early West Saxon closely. The Cotton manuscript, whose readings Sweet gives in his footnotes, was badly damaged in the Cotton library fire of 1731.</p>
        <p>The Preface ends with a gift: <span class="la">on ǣlcre bið ān æstel, se bið on fīftegum mancessa</span>, “in each there is an <em>æstel</em>, worth fifty mancuses”. The word is found only here and in glossaries; it is usually taken to mean a pointer for following the text. The Alfred Jewel, found in Somerset in 1693 and inscribed <span class="la">ÆLFRED MEC HEHT GEWYRCAN</span>, “Alfred ordered me to be made”, is often explained as the handle of such a pointer. That is an attractive guess, not a proven fact; several similar objects are now known.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Alfred_Jewel.jpg/960px-Alfred_Jewel.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Alfred_Jewel.jpg/500px-Alfred_Jewel.jpg|https://upload.wikimedia.org/wikipedia/commons/a/ae/Alfred_Jewel.jpg" alt="A gold and enamel jewel with a figure under rock crystal, tapering to a socket in the form of an animal head"><figcaption>The Alfred Jewel (Ashmolean Museum, Oxford), found in Somerset in 1693. The inscription round the edge reads AELFRED MEC HEHT GEWYRCAN. That it was the handle of an <em>æstel</em> is a plausible guess, not a certainty. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Alfred_Jewel.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Why German verbs have a -te past',
      html: `
        <p>Strong verbs (Lecture V) change their vowel; weak verbs add a suffix with a dental consonant: Old English <span class="la">-de, -ode, -te</span>, German <em>-te</em>, English <em>-ed</em>. This is the one great Germanic innovation in the verb system; no other Indo-European branch has it. Its origin is debated: the old view that it is a form of “do” tacked on (<em>lieb-tat</em>) has many critics, but no alternative has won general agreement.</p>
        <p>The weak verbs are the productive type: every new verb, then and now, is weak (<span class="la">lufian</span> from <span class="la">lufu</span>, “love”; English <em>google, googled</em>; German <em>googeln, googelte</em>). Some of them were made from strong verbs as causatives: <span class="la">settan</span> “make sit” from <span class="la">sittan</span>, <span class="la">lecgan</span> “make lie” from <span class="la">licgan</span>, <span class="la">fyllan</span> “make fall” from <span class="la">feallan</span>, as German <em>setzen, legen, fällen</em>.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Swǣ clǣne hīo wæs ōðfeallenu on Angelcynne ðætte swīðe fēawa wǣron behionan Humbre ðe hiora ðēninga cūðen understondan on Englisc oððe furðum ān ǣrendgewrit of Lǣdene on Englisc āreccean; ond ic wēne ðætte nōht monige begiondan Humbre nǣren.</p>
    <p>“So completely had it [learning] declined in England that there were very few on this side of the Humber who could understand their services in English, or even translate a single letter from Latin into English; and I think that there were not many beyond the Humber.” Alfred, Preface to the Pastoral Care, Sweet’s lines 15–20, with Sweet’s accents turned into macrons.</p>
    <p>Both verb types of this lecture: <span class="la">cūðen</span>, the subjunctive past of the preterite-present <span class="la">cunnan</span> (“could”), and <span class="la">wēne</span>, present of the weak verb <span class="la">wēnan</span> “think, expect”, German <em>wähnen</em>. <span class="la">ðēninga</span> are the church services (German <em>dienen</em>).</p>
  `,

  pronunciation: `
    <p>Points in this passage:</p>
    <ul>
      <li><strong>io, īo</strong> in <span class="la">giond, hiora, ðīowa, geðīode</span>: a falling diphthong, i + o with the weight on the i. Early West Saxon only; later <span class="la">eo, ēo</span>.</li>
      <li><strong>ie</strong> in <span class="la">ieldran, giet</span>: probably a diphthong in Alfred’s time, soon levelled to i or y. The pronunciation is uncertain.</li>
      <li><strong>Weak past endings</strong> are never silent: <span class="la">lu-fo-don, lǣf-don, wun-dra-de</span>.</li>
      <li><strong>cc</strong> in <span class="la">rēccelēase</span>: German <em>tsch</em> (palatal c after e), <em>rää-tsche-lää-a-se</em>.</li>
      <li><strong>sc</strong> in <span class="la">sceolden</span>: German <em>sch</em>.</li>
    </ul>
  `,

  grammar: [
    {
      title: '1. Weak verbs: the dental past',
      html: `
        <p>Three classes, named by their infinitive:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Class 1: fremman</th><th>Class 1: hȳran</th><th>Class 2: lufian</th></tr></thead>
          <tbody>
            <tr><th>ic</th><td class="la">fremme / fremede</td><td class="la">hȳre / hȳrde</td><td class="la">lufie / lufode</td></tr>
            <tr><th>þū</th><td class="la">fremest / fremedest</td><td class="la">hȳrst / hȳrdest</td><td class="la">lufast / lufodest</td></tr>
            <tr><th>hē</th><td class="la">fremeð / fremede</td><td class="la">hȳrð / hȳrde</td><td class="la">lufað / lufode</td></tr>
            <tr><th>wē, gē, hīe</th><td class="la">fremmað / fremedon</td><td class="la">hȳrað / hȳrdon</td><td class="la">lufiað / lufodon</td></tr>
            <tr><th>Past part.</th><td class="la">gefremed</td><td class="la">gehȳred</td><td class="la">gelufod</td></tr>
          </tbody>
        </table></div>
        <ul>
          <li><strong>Class 1</strong> had an <em>i</em> in the suffix, which caused umlaut (Lecture IV) and doubling of the consonant: <span class="la">fremman, settan, wendan, lǣran, hȳran</span>. Past <span class="la">-ede</span> after a short syllable, <span class="la">-de</span> after a long one, <span class="la">-te</span> after a voiceless consonant (<span class="la">cyste</span>, “kissed”).</li>
          <li><strong>Class 2</strong> ends in <span class="la">-ian</span>, past <span class="la">-ode</span>: <span class="la">lufian, wundrian, leornian, scēawian</span>. This is the largest class.</li>
          <li><strong>Class 3</strong> has only four common verbs: <span class="la">habban, hæfde</span>; <span class="la">libban, lifde</span>; <span class="la">secgan, sægde</span>; <span class="la">hycgan, hogde</span>.</li>
        </ul>
        <p>The past endings are the same for all weak verbs: <span class="la">-e, -est, -e; -on</span>. German has kept the same pattern: <em>ich liebte, du liebtest, er liebte, wir liebten</em>.</p>
      `
    },
    {
      title: '2. Verbs that change their vowel in the past: sēcan, sōhte',
      html: `
        <p>A small group of class 1 verbs has umlaut in the present but not in the past, because the <em>i</em> that caused it was lost early in the past forms. German has the same group, which grammars call “Rückumlaut”:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Infinitive</th><th>Past</th><th>German</th></tr></thead>
          <tbody>
            <tr><td class="la">þencan</td><td class="la">þōhte</td><td>denken, dachte</td></tr>
            <tr><td class="la">bringan</td><td class="la">brōhte</td><td>bringen, brachte</td></tr>
            <tr><td class="la">sēcan</td><td class="la">sōhte</td><td>suchen (no longer irregular)</td></tr>
            <tr><td class="la">tǣcan</td><td class="la">tǣhte</td><td>English teach, taught</td></tr>
            <tr><td class="la">wyrcan</td><td class="la">worhte</td><td>wirken; English wrought</td></tr>
            <tr><td class="la">sellan</td><td class="la">sealde</td><td>English sell, sold</td></tr>
          </tbody>
        </table></div>
        <p>German <em>kennen, kannte</em> and <em>brennen, brannte</em> belong here too. The <span class="la">h</span> before <span class="la">t</span> is German <em>ch</em>: <span class="la">þōhte</span> is <em>thooch-te</em>.</p>
      `
    },
    {
      title: '3. Preterite-presents: the modal verbs',
      html: `
        <p>The present tense of these verbs is an old strong past (“I have seen” → “I know”), so it has past endings: no <span class="la">-þ</span> in the third person. A new weak past was then made for them. German has kept exactly this: <em>er weiß, er kann, er muss</em>.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Infinitive</th><th>ic, hē</th><th>wē</th><th>Past</th><th>German</th></tr></thead>
          <tbody>
            <tr><td class="la">witan</td><td class="la">wāt</td><td class="la">witon</td><td class="la">wiste, wisse</td><td>wissen, weiß, wusste</td></tr>
            <tr><td class="la">cunnan</td><td class="la">cann</td><td class="la">cunnon</td><td class="la">cūðe</td><td>können, kann, konnte</td></tr>
            <tr><td class="la">magan</td><td class="la">mæg</td><td class="la">magon</td><td class="la">meahte, mihte</td><td>mögen, mag, mochte</td></tr>
            <tr><td class="la">sculan</td><td class="la">sceal</td><td class="la">sculon</td><td class="la">sceolde</td><td>sollen, soll, sollte</td></tr>
            <tr><td class="la">mōtan</td><td class="la">mōt</td><td class="la">mōton</td><td class="la">mōste</td><td>müssen, muss, musste</td></tr>
            <tr><td class="la">gemunan</td><td class="la">geman</td><td class="la">gemunon</td><td class="la">gemunde</td><td>(gemahnen)</td></tr>
            <tr><td class="la">þurfan</td><td class="la">þearf</td><td class="la">þurfon</td><td class="la">þorfte</td><td>dürfen, darf, durfte</td></tr>
          </tbody>
        </table></div>
        <p>The forms match German, but the <strong>meanings</strong> are older, and this is the German-speaker trap:</p>
        <ul>
          <li><span class="la">magan</span> means “be able”, “can” (German <em>vermögen</em>, <em>Macht</em>), not “like”.</li>
          <li><span class="la">cunnan</span> means “know, know how to” (German <em>kennen</em>, <em>Kunst</em>): <span class="la">wē him ne cunnon æfter spyrigean</span>, “we do not know how to follow them”.</li>
          <li><span class="la">mōtan</span> means “may, be allowed”, not “must”.</li>
          <li><span class="la">þurfan</span> means “need” (German <em>bedürfen</em>), not “be allowed”.</li>
          <li><span class="la">sculan</span> means “owe, must, shall” (German <em>Schuld</em>).</li>
        </ul>
      `
    },
    {
      title: '4. willan, and ne joined to the verb',
      html: `
        <p><span class="la">willan</span> “want” is irregular: <span class="la">ic wille, þū wilt, hē wile, wē willað</span>; past <span class="la">wolde</span>, German <em>wollte</em>. It is not yet a future auxiliary.</p>
        <p>The negative <span class="la">ne</span> fuses with a following verb that begins with a vowel, <span class="la">h</span> or <span class="la">w</span>: <span class="la">ne + woldon = noldon</span> “did not want”; <span class="la">ne + wǣron = nǣron</span>; <span class="la">ne + hæfde = næfde</span>; <span class="la">ne + wāt = nāt</span>. English <em>willy-nilly</em> (“will he, nill he”) keeps a trace.</p>
      `
    }
  ],

  vocab: [
    { id: 'lufian', head: 'lufian', la: 'lufian; lufode; gelufod', pos: 'verb, weak (2)', en: 'love', note: 'German lieben, liebte.' },
    { id: 'wendan', head: 'wendan', la: 'wendan; wende; gewended', pos: 'verb, weak (1)', en: 'turn; translate', note: 'German wenden. Alfred’s word for translating: on Englisc wendan.' },
    { id: 'leornian', head: 'leornian', la: 'leornian; leornode', pos: 'verb, weak (2)', en: 'learn', note: 'German lernen. Early West Saxon liornian.' },
    { id: 'laeran', head: 'lǣran', la: 'lǣran; lǣrde', pos: 'verb, weak (1)', en: 'teach', note: 'German lehren; noun lār (Lecture IV). A German-speaker trap in English: learn ≠ lehren.' },
    { id: 'laefan', head: 'lǣfan', la: 'lǣfan; lǣfde', pos: 'verb, weak (1)', en: 'leave (behind), bequeath', note: 'Related to German bleiben.' },
    { id: 'thencan', head: 'þencan', la: 'þencan; þōhte; geþōht', pos: 'verb, weak (1), irregular', en: 'think', note: 'German denken, dachte.' },
    { id: 'wenan', head: 'wēnan', la: 'wēnan; wēnde', pos: 'verb, weak (1)', en: 'think, expect, suppose', note: 'German wähnen; English ween.' },
    { id: 'witan', head: 'witan', la: 'witan; wāt, witon; wiste', pos: 'verb, preterite-present', en: 'know', note: 'German wissen, weiß, wusste.' },
    { id: 'magan', head: 'magan', la: 'magan; mæg, magon; meahte', pos: 'verb, preterite-present', en: 'be able, can', note: 'False friend: not “like”. German vermögen, Macht.' },
    { id: 'motan', head: 'mōtan', la: 'mōtan; mōt, mōton; mōste', pos: 'verb, preterite-present', en: 'may, be allowed', note: 'False friend: not “must” (that meaning comes later).' },
    { id: 'gemunan', head: 'gemunan', la: 'gemunan; geman, gemunon; gemunde', pos: 'verb, preterite-present', en: 'remember', note: 'Related to German gemahnen, Latin meminī.' },
    { id: 'willan', head: 'willan', la: 'willan; wille, wile; wolde', pos: 'verb, irregular', en: 'want, wish', note: 'German wollen. Negative nyllan, nolde.' },
    { id: 'wisdom', head: 'wīsdōm', la: 'wīsdōm, wīsdōmes', g: 'm', pos: 'noun, strong', en: 'wisdom, learning', note: 'German Weistum (a legal record) uses the same parts.' },
    { id: 'boc', head: 'bōc', la: 'bōc, bēc (dat. sg. and nom. pl.)', g: 'f', pos: 'noun, root noun', en: 'book', note: 'Umlaut in the plural, like German Buch, Bücher, and English foot, feet.' },
    { id: 'gethiode', head: 'geþēode', la: 'geþēode (eWS geþīode), geþēodes', g: 'n', pos: 'noun, strong', en: 'language; nation', note: 'From þēod “people” (Lecture I); compare German deutsch.' },
    { id: 'wela', head: 'wela', la: 'wela, welan', g: 'm', pos: 'noun, weak', en: 'wealth, prosperity', note: 'German Wohl; English weal, wealth.' },
    { id: 'cirice', head: 'cirice', la: 'cirice, ciricean', g: 'f', pos: 'noun, weak', en: 'church', note: 'German Kirche; c before i is tsch, so ci-ri-tsche.' },
    { id: 'gewrit', head: 'gewrit', la: 'gewrit, gewrites', g: 'n', pos: 'noun, strong', en: 'writing, document, letter', note: 'Holy Writ; verb wrītan, strong I.' }
  ],

  grammarCards: [
    { id: 'oe7-weak', front: 'How do weak verbs form the past?', back: 'With a dental suffix: -de, -ode, -te (German -te, English -ed)' },
    { id: 'oe7-class1', front: 'Weak class 1: fremman, hȳran', back: 'fremede, gefremed; hȳrde, gehȳred (umlaut, doubled consonant in the present)' },
    { id: 'oe7-class2', front: 'Weak class 2: lufian', back: 'lufode, lufodon; gelufod' },
    { id: 'oe7-class3', front: 'Weak class 3', back: 'habban hæfde, libban lifde, secgan sægde, hycgan hogde' },
    { id: 'oe7-lufian-pres', front: 'lufian, present ic / þū / hē / wē', back: 'lufie, lufast, lufað, lufiað' },
    { id: 'oe7-past-end', front: 'Weak past endings', back: '-e, -est, -e; plural -on (lufode, lufodest, lufode, lufodon)' },
    { id: 'oe7-rueck', front: 'þencan, bringan, sēcan, wyrcan: past', back: 'þōhte, brōhte, sōhte, worhte (German dachte, brachte)' },
    { id: 'oe7-pp', front: 'What is a preterite-present verb?', back: 'An old strong past used as a present; no -þ in the 3rd sg.; new weak past' },
    { id: 'oe7-witan', front: 'witan: hē … / past', back: 'hē wāt; wiste (German er weiß, wusste)' },
    { id: 'oe7-cunnan', front: 'cunnan: hē … / past', back: 'hē cann; cūðe — “know, know how to”' },
    { id: 'oe7-magan', front: 'magan: hē … / past', back: 'hē mæg; meahte — “be able”, not “like”' },
    { id: 'oe7-motan', front: 'mōtan: meaning', back: '“may, be allowed” — not “must”' },
    { id: 'oe7-thurfan', front: 'þurfan: meaning', back: '“need” (German bedürfen) — not “be allowed”' },
    { id: 'oe7-noldon', front: 'noldon, nǣron, nāt', back: 'ne woldon, ne wǣron, ne wāt' },
    { id: 'oe7-ews', front: 'giond, hiora, geðīode, ieldran', back: 'Early West Saxon for geond, heora, geðēode, yldran' },
    { id: 'oe7-quote', front: 'wē him ne cunnon æfter spyrigean', back: 'we do not know how to follow (in) their tracks (Preface, Sweet l. 41)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">lufodon</span> is:', options: ['past plural of lufian', 'present plural', 'past participle', 'infinitive'], answer: 0, explain: 'Weak class 2: -odon.' },
    { id: 'e2', type: 'mc', prompt: 'Which verb is weak?', options: ['hȳran, hȳrde', 'rīdan, rād', 'beran, bær', 'cuman, cōm'], answer: 0, explain: 'Dental past -de.' },
    { id: 'e3', type: 'mc', prompt: 'Past of <span class="la">þencan</span>:', options: ['þōhte', 'þencede', 'þanc', 'þuncon'], answer: 0, explain: 'German dachte.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">hē wāt</span> means:', options: ['he knows', 'he waits', 'he wanted', 'he went'], answer: 0, explain: 'witan, German er weiß.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">Hē mōt gān.</span> means:', options: ['He may go.', 'He must go.', 'He wants to go.', 'He went.'], answer: 0, explain: 'mōtan = “be allowed”: a false friend.' },
    { id: 'e6', type: 'mc', prompt: 'Why does <span class="la">hē mæg</span> have no <span class="la">-þ</span>?', options: ['Its present is an old past form', 'It is subjunctive', 'It is plural', 'Scribal error'], answer: 0, explain: 'Preterite-present, like German er mag, er kann.' },
    { id: 'e7', type: 'mc', prompt: '<span class="la">noldon</span> =', options: ['ne woldon', 'nō oldon', 'ne lǣfdon', 'ne hæfdon'], answer: 0, explain: '“did not want”.' },
    { id: 'e8', type: 'mc', prompt: 'What did Alfred remember seeing in the churches?', options: ['Treasures and books that few could understand', 'Empty shelves', 'Viking soldiers', 'English books only'], answer: 0, explain: 'stōdon māðma ond bōca gefylda … ðā swīðe lȳtle fiorme ðāra bōca wiston.' },
    { id: 'e9', type: 'match', prompt: 'Match the Old English verbs to German.', pairs: [
      ['witan', 'wissen'], ['cunnan', 'können'], ['magan', 'vermögen'], ['þurfan', 'bedürfen'], ['lǣran', 'lehren']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match the infinitive to the past.', pairs: [
      ['sēcan', 'sōhte'], ['bringan', 'brōhte'], ['habban', 'hæfde'], ['secgan', 'sægde'], ['lufian', 'lufode']
    ] },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Hīe luf___ wīsdōm.</span>', hint: 'they loved (past)', answers: ['odon'], full: 'Hīe lufodon wīsdōm.', explain: 'Weak class 2, past plural -odon.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Ic ___ þæt.</span>', hint: 'I know (witan)', answers: ['wāt', 'wat'], full: 'Ic wāt þæt.', explain: 'German ich weiß.' },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Hē ___ Englisc gewrit rǣdan.</span>', hint: 'can (cunnan, 3 sg.)', answers: ['cann', 'can'], full: 'Hē cann Englisc gewrit rǣdan.', explain: 'No -þ: German er kann.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Hē þone wīsdōm s___.</span>', hint: 'sought (sēcan, past)', answers: ['ōhte', 'ohte'], full: 'Hē þone wīsdōm sōhte.', explain: 'sēcan, sōhte.' },
    { id: 'e15', type: 'paradigm', prompt: 'Conjugate <span class="la">lufian</span>.', headers: ['Present', 'Past'], rows: [
      { label: 'ic', answers: ['lufie', 'lufode'] },
      { label: 'þū', answers: ['lufast', 'lufodest'] },
      { label: 'hē', answers: ['lufað|lufaþ', 'lufode'] },
      { label: 'wē', answers: ['lufiað|lufiaþ', 'lufodon'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Give the 3rd person singular present and the past.', headers: ['hē (present)', 'hē (past)'], rows: [
      { label: 'witan', answers: ['wāt', 'wiste|wisse'] },
      { label: 'cunnan', answers: ['cann|can', 'cūðe|cūþe'] },
      { label: 'magan', answers: ['mæg', 'meahte|mihte'] },
      { label: 'sculan', answers: ['sceal', 'sceolde'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the English translation in order.', source: 'Ūre ieldran lufodon wīsdōm.', tokens: ['Our', 'ancestors', 'loved', 'wisdom'], explain: 'ieldran: German Eltern.' },
    { id: 'e18', type: 'translate', dir: 'oe-en', source: 'Wē ne cunnon Lǣden.', model: 'We do not know Latin.', accepted: ['we do not know latin', 'we dont know latin', 'we know no latin', 'we cannot read latin', 'we can not read latin', 'we do not understand latin', 'we cannot understand latin', 'we know not latin'] },
    { id: 'e19', type: 'translate', dir: 'oe-en', source: 'Hē wende þā bōc on Englisc.', model: 'He translated the book into English.', accepted: ['he translated book into english', 'he turned book into english', 'he translated the book into english', 'he turned the book into english'] },
    { id: 'e20', type: 'translate', dir: 'en-oe', source: 'they loved', model: 'hīe lufodon', accepted: ['hīe lufodon'] },
    { id: 'e21', type: 'translate', dir: 'en-oe', source: 'I can (be able)', model: 'ic mæg', accepted: ['ic mæg'] },
    { id: 'e22', type: 'mc', prompt: 'In what dialect is Alfred’s Preface written?', options: ['Early West Saxon', 'Northumbrian', 'Late West Saxon (Ælfric)', 'Kentish'], answer: 0, explain: 'Hence giond, hiora, geðīode.' },
    { id: 'e23', type: 'mc', prompt: 'What is an <span class="la">æstel</span>, according to the usual interpretation?', options: ['A pointer for following the text', 'A book cover', 'A Latin grammar', 'A bishop’s ring'], answer: 0, explain: 'The meaning is inferred; the word is rare.' }
  ],

  reading: {
    title: 'Alfred, Preface to the Pastoral Care',
    note: 'Authentic text: Alfred’s Preface, Sweet’s lines 32–53, from Henry Sweet, An Anglo-Saxon Reader, 2nd edition (Oxford 1879), pp. 5–6, transcribed from page images supplied by Nils. The normalised view turns Sweet’s accents into macrons, writes o, e for his ǫ, ę, and adds a few length marks Sweet leaves out (hīe, lȳtle). “As printed” shows Sweet’s page. Tap any word.',
    diplomaticLabel: 'As printed',
    diplomaticNote: 'Sweet’s text as printed in 1879: acute accents for long vowels (on the second letter of a diphthong: begeáton), ǫ for o before nasals (ǫnd), ę for umlauted e (męnn), and his raised dot in a·ndwyrde. Sweet follows the Hatton manuscript.',
    text: 'Ðā ic ðā ðis eall gemunde, ðā gemunde ic ēac hū ic geseah, ǣr ðǣm ðe hit eall forhergod wǣre ond forbærned, hū ðā ciricean giond eall Angelcynn stōdon māðma ond bōca gefylda, ond ēac micel menigeo Godes ðīowa; ond ðā swīðe lȳtle fiorme ðāra bōca wiston, for ðǣm ðe hīe hiora nānwuht ongiotan ne meahton, for ðǣm ðe hīe nǣron on hiora āgen geðīode āwritene. Swelce hīe cwǣden: “Ūre ieldran, ðā ðe ðās stōwa ǣr hīoldon, hīe lufodon wīsdōm, ond ðurh ðone hīe begēaton welan, ond ūs lǣfdon. Hēr mon mæg giet gesīon hiora swæð, ac wē him ne cunnon æfter spyrigean, ond for ðǣm wē habbað nū ægðer forlǣten ge ðone welan ge ðone wīsdōm, for ðǣm ðe wē noldon tō ðǣm spore mid ūre mōde onlūtan.”\nÐā ic ðā ðis eall gemunde, ðā wundrade ic swīðe swīðe ðāra gōdena wiotona ðe giū wǣron giond Angelcynn, ond ðā bēc ealla be fullan geliornod hæfdon, ðæt hīe hiora ðā nǣnne dǣl noldon on hiora āgen geðīode wendan. Ac ic ðā sōna eft mē selfum andwyrde, ond cwæð: “Hīe ne wēndon ðætte ǣfre menn sceolden swǣ rēccelēase weorðan, ond sīo lār swǣ ōðfeallan; for ðǣre wilnunga hīe hit forlēton, ond woldon ðæt hēr ðȳ māra wīsdōm on londe wǣre ðȳ wē mā geðēoda cūðon.”',
    diplomatic: 'Ðá ic ðá ðis eall gemunde, ðá gemunde ic eác hú ic geseah, ǽr ðǽm ðe hit eall forhęrgod wǽre ǫnd forbærned, hú ðá ciricean giond eall Angelcynn stódon máðma ǫnd bóca gefylda, ǫnd eác micel męnigeo Godes ðiówa; ǫnd ðá swíðe lytle fiorme ðára bóca wiston, for ðǽm ðe hie hiora nánwuht ǫngiotan ne meahton, for ðǽm ðe hie nǽron ǫn hiora ágen geðióde áwritene. Swelce hie cwǽden: ‘Úre ięldran, ðá ðe ðás stówa ǽr hióldon, hie lufodon wísdóm, ǫnd ðurh ðǫne hie begeáton welan, ǫnd ús lǽfdon. Hér mǫn mæg giet gesión hiora swæð, ac wé him ne cunnon æfter spyrigean, ǫnd for ðǽm wé habbað nú ægðer forlǽten ge ðǫne welan ge ðǫne wísdóm, for ðǽm ðe wé noldon tó ðǽm spore mid úre móde ǫnlútan.’\nÐá ic ðá ðis eall gemunde, ða wundrade ic swíðe swíðe ðára gódena wiotona ðe giú wǽron giond Angelcynn, ǫnd ðá béc ealla be fullan geliornod hæfdon, ðæt hie hiora ðá nǽnne dǽl noldon ǫn hiora ágen geðióde węndan. Ac ic ðá sóna ęft mé selfum a·ndwyrde, ǫnd cwæð: ‘Hie ne wéndon ðætte ǽfre męnn sceolden swǽ récceleáse weorðan, ǫnd sió lár swǽ óðfeallan; for ðǽre wilnunga hie hit forléton, ǫnd woldon ðæt hér ðý mára wísdóm ǫn lǫnde wǽre ðý wé má geðeóda cúðon.’',
    translations: [
      { label: 'English translation', text: 'When I remembered all this, I also remembered how I had seen, before it was all ravaged and burnt, how the churches throughout all England stood filled with treasures and books, and also a great multitude of God’s servants; and they had very little benefit from those books, because they could understand nothing of them, because they were not written in their own language. As if they had said: “Our ancestors, who held these places before, loved wisdom, and through it they gained wealth and left it to us. Here one can still see their track, but we do not know how to follow after them; and therefore we have now lost both the wealth and the wisdom, because we would not bend our minds to that track.” When I remembered all this, I wondered very greatly at the good wise men who formerly were throughout England, and had fully learnt all the books, that they did not wish to translate any part of them into their own language. But then at once I answered myself and said: “They did not expect that people would ever become so careless and learning so decline; they neglected it on purpose, and wanted the more wisdom to be in the land, the more languages we knew.”' },
      { label: 'German translation', text: 'Als ich mich an all dies erinnerte, erinnerte ich mich auch, wie ich gesehen hatte, bevor alles verheert und verbrannt war, wie die Kirchen in ganz England voll von Schätzen und Büchern standen, und auch eine große Menge von Gottesdienern; und sie hatten sehr wenig Nutzen von diesen Büchern, weil sie nichts davon verstehen konnten, weil sie nicht in ihrer eigenen Sprache geschrieben waren. Als ob sie sagten: „Unsere Vorfahren, die diese Stätten früher innehatten, liebten die Weisheit, und durch sie gewannen sie Reichtum und hinterließen ihn uns. Hier kann man noch ihre Spur sehen, aber wir können ihr nicht folgen; und darum haben wir jetzt sowohl den Reichtum als auch die Weisheit verloren, weil wir unseren Sinn nicht auf diese Spur richten wollten.“ Als ich mich an all dies erinnerte, wunderte ich mich sehr über die guten Weisen, die einst in ganz England waren und alle Bücher vollständig gelernt hatten, dass sie keinen Teil davon in ihre eigene Sprache übertragen wollten. Doch dann antwortete ich mir sogleich selbst und sagte: „Sie erwarteten nicht, dass die Menschen je so nachlässig werden und die Gelehrsamkeit so verfallen würde; mit Absicht unterließen sie es und wollten, dass umso mehr Weisheit im Land sei, je mehr Sprachen wir könnten.“' }
    ],
    notes: [
      { ref: 'Ðā ic ðā ðis eall gemunde, ðā gemunde ic ēac', html: 'The first <span class="la">ðā</span> has the verb at the end: “when”; the second has the verb next: “then” (Lecture VI). <span class="la">gemunde</span>: past of the preterite-present <span class="la">gemunan</span>.' },
      { ref: 'ǣr ðǣm ðe hit eall forhergod wǣre ond forbærned', html: '“Before it was all ravaged and burnt”: the Viking attacks. <span class="la">wǣre</span> is subjunctive after <span class="la">ǣr ðǣm ðe</span>, as after Latin <em>priusquam</em> (Lecture IX).' },
      { ref: 'stōdon māðma ond bōca gefylda', html: '“Stood filled with treasures and books”: <span class="la">gefyllan</span> takes the genitive, like German <em>voller Schätze</em>.' },
      { ref: 'ðā swīðe lȳtle fiorme ðāra bōca wiston', html: '<span class="la">wiston</span>: past of <span class="la">witan</span>; literally “knew very little benefit of those books”, i.e. got little use from them. <span class="la">ðā</span> = “they” (the servants of God).' },
      { ref: 'ne meahton', html: '<span class="la">meahton</span>: past plural of <span class="la">magan</span>, “could”, not “liked”.' },
      { ref: 'Swelce hīe cwǣden', html: '“As if they had said”: Alfred puts words into the mouths of the clergy. <span class="la">cwǣden</span> is subjunctive.' },
      { ref: 'ac wē him ne cunnon æfter spyrigean', html: '<span class="la">cunnon</span>: “know how to”. <span class="la">him … æfter</span>: “after them”, the preposition placed after its pronoun. <span class="la">spyrigean</span> “track”, German <em>spüren</em>, <em>Spur</em>.' },
      { ref: 'for ðǣm ðe wē noldon tō ðǣm spore mid ūre mōde onlūtan', html: '<span class="la">noldon</span> = <span class="la">ne woldon</span>. The image is of hunters stooping to read a trail.' },
      { ref: 'ðāra gōdena wiotona', html: '<span class="la">wundrian</span> takes the genitive: “wondered at the good wise men”. <span class="la">gōdena</span>: weak genitive plural (Lecture VI).' },
      { ref: 'ðā bēc ealla be fullan geliornod hæfdon', html: 'Pluperfect with <span class="la">hæfdon</span> and the past participle, as German <em>gelernt hatten</em>. <span class="la">bēc</span>: plural of <span class="la">bōc</span>.' },
      { ref: 'for ðǣre wilnunga hīe hit forlēton', html: '“They gave it up on purpose” (literally “because of the desire”). The sense is disputed; most take it that the earlier scholars deliberately kept learning in Latin so that more languages would be learnt.' },
      { ref: 'ðȳ māra wīsdōm … ðȳ wē mā geðēoda cūðon', html: '<span class="la">ðȳ … ðȳ</span>: “the more … the more”, German <em>umso mehr … je mehr</em>; English <em>the more, the merrier</em> keeps this instrumental <em>the</em>.' }
    ],
    glosses: {
      'ac': 'but', 'andwyrde': 'answered (pret. of andwyrdan, weak I)', 'angelcynn': 'the English people, England', 'be': 'by, about; be fullan: fully', 'begēaton': 'acquired, obtained (pret. pl. of begietan, strong V)', 'bēc': 'books (acc. pl. of bōc, with umlaut, like Bücher)',
      'bōca': 'of books (gen. pl. of bōc)', 'ciricean': 'churches (nom. pl. of cirice, weak)', 'cunnon': 'can, know how (pres. pl. of cunnan, preterite-present)', 'cwæð': 'said (pret. of cweðan)', 'cwǣden': '(as if) they said (pret. subj. pl. of cweðan)', 'cūðon': 'knew (pret. pl. of cunnan)',
      'dǣl': 'part, portion (acc.)', 'eall': 'all', 'ealla': 'all (acc. pl. f.)', 'eft': 'again, afterwards', 'fiorme': 'benefit, use (acc. of fiorm = feorm)', 'for': 'for, because of; for ðǣm (ðe): because, therefore',
      'forbærned': 'burnt up (past part. of forbærnan, weak I)', 'forhergod': 'ravaged, plundered (past part. of forhergian, weak II)', 'forlēton': 'abandoned, neglected (pret. pl. of forlǣtan, strong VII)', 'forlǣten': 'abandoned, let go (past part. of forlǣtan)', 'fullan': 'full; be fullan: fully', 'ge': 'and; ægðer ge … ge: both … and',
      'gefylda': 'filled (past part. of gefyllan, weak I, nom. pl. f.)', 'geliornod': 'learnt (past part. of geliornian, weak II)', 'gemunde': 'remembered (pret. of gemunan, preterite-present)', 'geseah': 'saw (pret. of gesēon)', 'gesīon': 'see (infinitive; = gesēon)', 'geðēoda': 'languages (gen. pl. of geðēode)',
      'geðīode': 'language (dat.; = geðēode)', 'giet': 'yet, still', 'giond': 'throughout (= geond)', 'giū': 'formerly, long ago', 'godes': 'God’s (gen.)', 'gōdena': 'good (weak gen. pl.)',
      'habbað': 'have (pres. pl.)', 'him': 'them (dat. pl.); him … æfter: after them', 'hiora': 'their; of them (= heora)', 'hit': 'it', 'hæfdon': 'had (pret. pl. of habban, weak III)', 'hēr': 'here',
      'hīe': 'they; them', 'hīoldon': 'held, occupied (pret. pl. of healdan)', 'hū': 'how', 'ic': 'I', 'ieldran': 'elders, ancestors (nom. pl.; German Eltern)', 'londe': 'land (dat.)',
      'lufodon': 'loved (pret. pl. of lufian, weak II)', 'lār': 'learning, teaching', 'lǣfdon': 'left (it) (pret. pl. of lǣfan, weak I)', 'lȳtle': 'little (strong acc. f.)', 'meahton': 'could (pret. pl. of magan)', 'menigeo': 'multitude, many (= menigu; German Menge)',
      'menn': 'people, men (nom. pl. of mann)', 'micel': 'great', 'mid': 'with', 'mon': 'one (indefinite pronoun, German man)', 'mæg': 'can, may (pres. 3 sg. of magan)', 'mā': 'more',
      'māra': 'more, greater', 'māðma': 'of treasures (gen. pl. of māðm)', 'mē': 'me (dat.)', 'mōde': 'mind, heart (dat. of mōd)', 'ne': 'not', 'noldon': 'did not want (ne + woldon)',
      'nānwuht': 'nothing, not a whit (acc.)', 'nū': 'now', 'nǣnne': 'no, not any (acc. m.)', 'nǣron': 'were not (ne + wǣron)', 'on': 'in, into', 'ond': 'and',
      'ongiotan': 'understand, perceive (= ongietan)', 'onlūtan': 'bend down, stoop', 'rēccelēase': 'careless, heedless (German ruchlos)', 'sceolden': 'should, would (pret. subj. pl. of sculan)', 'selfum': 'self (dat.; mē selfum: to myself)', 'spore': 'track, trail (dat. of spor; German Spur)',
      'spyrigean': 'follow a track (German spüren)', 'stōdon': 'stood (pret. pl. of standan)', 'stōwa': 'places (acc. pl. of stōw)', 'swelce': 'as if', 'swæð': 'track, footprints (acc.)', 'swīðe': 'very, greatly',
      'swǣ': 'so (= swā)', 'sīo': 'the (nom. f.; = sēo)', 'sōna': 'soon, at once', 'tō': 'to', 'welan': 'wealth (acc. of wela)', 'wendan': 'turn, translate (weak I)',
      'weorðan': 'become', 'wilnunga': 'desire (dat. of wilnung)', 'wiotona': 'of wise men (gen. pl. of wiota = wita)', 'wiston': 'knew (pret. pl. of witan, preterite-present)', 'woldon': 'wanted, wished (pret. pl. of willan)', 'wundrade': 'wondered (pret. of wundrian, weak II)',
      'wē': 'we', 'wēndon': 'thought, expected (pret. pl. of wēnan, weak I)', 'wīsdōm': 'wisdom', 'wǣre': 'was, had been (pret. subj.)', 'wǣron': 'were', 'æfter': 'after',
      'ægðer': 'both (ægðer ge … ge)', 'ðe': 'who, which; that', 'ðis': 'this (acc.)', 'ðone': 'the, that (acc. m.)', 'ðurh': 'through', 'ðæt': 'that',
      'ðætte': 'that (conjunction)', 'ðā': 'then; when; the (pl.); who', 'ðāra': 'of the, of those (gen. pl.)', 'ðās': 'these (acc. pl.)', 'ðīowa': 'of servants (gen. pl. of ðīow = ðēow)', 'ðǣm': 'the (dat.); for ðǣm: because',
      'ðǣre': 'the (dat. f.)', 'ðȳ': 'the (ðȳ … ðȳ: the more … the more, German je … desto)', 'āgen': 'own (German eigen)', 'āwritene': 'written down (past part. of āwrītan, nom. pl.)', 'ēac': 'also, too (German auch)', 'ōðfeallan': 'decline, fall away',
      'ūre': 'our', 'ūs': 'us', 'ǣfre': 'ever', 'ǣr': 'before; ǣr ðǣm ðe: before'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What had happened to the churches since Alfred saw them full of books?', options: ['They had been ravaged and burnt', 'They had been sold', 'They had become schools', 'Nothing'], answer: 0, explain: 'ǣr ðǣm ðe hit eall forhergod wǣre ond forbærned.' },
      { id: 'r2', type: 'mc', prompt: 'Why could the clergy get little use from the books?', options: ['They were not in their own language', 'They were too expensive', 'They were locked away', 'They were damaged'], answer: 0, explain: 'for ðǣm ðe hīe nǣron on hiora āgen geðīode āwritene.' },
      { id: 'r3', type: 'mc', prompt: 'What, according to the imagined speech, have they lost?', options: ['Both the wealth and the wisdom', 'Only their books', 'Their churches', 'Their king'], answer: 0, explain: 'ægðer … ge ðone welan ge ðone wīsdōm.' },
      { id: 'r4', type: 'mc', prompt: 'Why, Alfred decides, did the earlier scholars not translate the books?', options: ['They wanted more languages to be learnt', 'They could not write English', 'The king forbade it', 'They had no time'], answer: 0, explain: 'ðȳ māra wīsdōm … ðȳ wē mā geðēoda cūðon.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Past of <span class="la">sēcan</span>:', options: ['sōhte', 'sēcede', 'sōc', 'sucon'], answer: 0, explain: 'Like German dachte, brachte.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">hē sceal</span> means:', options: ['he must, he shall', 'he shines', 'he sells', 'he may'], answer: 0, explain: 'sculan, German soll.' },
      { id: 't3', type: 'mc', prompt: '<span class="la">þurfan</span> means:', options: ['need', 'be allowed', 'dare', 'throw'], answer: 0, explain: 'German bedürfen; a false friend for dürfen.' },
      { id: 't4', type: 'mc', prompt: 'Which form is weak class 2?', options: ['wundrade', 'hȳrde', 'hæfde', 'sōhte'], answer: 0, explain: 'wundrian: -ode/-ade.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Hīe ___ Gode.</span>', hint: 'they heard (hȳran, past)', answers: ['hȳrdon', 'hyrdon'], full: 'Hīe hȳrdon Gode.', explain: 'Class 1, long stem: -don.' },
      { id: 't6', type: 'gap', prompt: '<span class="la">Ic ne ___ hit.</span>', hint: 'I did not know (witan, past)', answers: ['wiste', 'wisse'], full: 'Ic ne wiste hit.', explain: 'German wusste.' },
      { id: 't7', type: 'translate', dir: 'oe-en', source: 'Hē lǣrde þā cnihtas.', model: 'He taught the boys.', accepted: ['he taught boys', 'he taught the boys', 'he taught youths', 'he taught servants', 'he taught the young men', 'he taught young men'] },
      { id: 't8', type: 'translate', dir: 'en-oe', source: 'he knows (witan)', model: 'hē wāt', accepted: ['hē wāt'] },
      { id: 't9', type: 'mc', prompt: 'Into which language did Alfred translate the Pastoral Care?', options: ['English', 'Latin', 'Greek', 'Danish'], answer: 0, explain: 'From Gregory’s Latin.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">nāt</span> =', options: ['ne wāt, “does not know”', 'night', 'a nut', 'nothing'], answer: 0, explain: 'ne fuses with the verb.' },
      { id: 't11', type: 'mc', prompt: 'Alfred’s <span class="la">hiora</span> is, in later West Saxon:', options: ['heora', 'hiera', 'hira', 'here'], answer: 0, explain: 'Early West Saxon io = later eo.' }
    ]
  },

  reference: [
    { title: 'Weak verbs', headers: ['', 'fremman (1)', 'lufian (2)', 'habban (3)'], rows: [['ic (pres.)', 'fremme', 'lufie', 'hæbbe'], ['hē (pres.)', 'fremeð', 'lufað', 'hæfð'], ['wē (pres.)', 'fremmað', 'lufiað', 'habbað'], ['hē (past)', 'fremede', 'lufode', 'hæfde'], ['wē (past)', 'fremedon', 'lufodon', 'hæfdon'], ['Past part.', 'gefremed', 'gelufod', 'gehæfd']] },
    { title: 'Preterite-presents', headers: ['Infinitive', 'hē', 'wē', 'Past', 'Meaning'], rows: [['witan', 'wāt', 'witon', 'wiste', 'know'], ['cunnan', 'cann', 'cunnon', 'cūðe', 'know (how)'], ['magan', 'mæg', 'magon', 'meahte', 'be able'], ['sculan', 'sceal', 'sculon', 'sceolde', 'must, shall'], ['mōtan', 'mōt', 'mōton', 'mōste', 'may'], ['þurfan', 'þearf', 'þurfon', 'þorfte', 'need'], ['gemunan', 'geman', 'gemunon', 'gemunde', 'remember']] },
    { title: 'Weak verbs without umlaut in the past', headers: ['Infinitive', 'Past', 'German'], rows: [['þencan', 'þōhte', 'dachte'], ['bringan', 'brōhte', 'brachte'], ['sēcan', 'sōhte', '—'], ['wyrcan', 'worhte', '—'], ['sellan', 'sealde', '—']] }
  ]
});
