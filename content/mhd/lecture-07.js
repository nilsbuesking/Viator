/*
 * Middle High German — Lecture VII: negation, word order and contracted forms.
 * Reading: Hartmann von Aue, Iwein, lines 483–542 (Kalogreant and the wild man), transcribed from the page images
 * of Fedor Bech's edition (Leipzig 1869), pp. 20–21; Bech's metrical accents left out.
 * Source panel: Walther von der Vogelweide, L 87,1–16, from the page image of Lachmann's 2nd edition (Berlin 1843), p. 87.
 * See CONTENT-CHECKS.md.
 */
Viator.addLecture('mhd', {
  id: 'mhd-07',
  number: 7,
  title: 'Âventiure? waz ist daz?',
  subtitle: 'Negation, word order and contracted forms; Kalogreant meets the wild man in Iwein',
  minutes: 60,

  intro: `
    <p>Middle High German says “not” in two ways at once. Beside <span class="la">niht</span>, which is modern <em>nicht</em>, there is a small particle <span class="la">en</span> or <span class="la">ne</span>, attached to the verb or to the word before it: <span class="la">ich enweiz</span>, <span class="la">ichn weiz</span>, <span class="la">sine erkennent</span>. Negatives do not cancel each other out: <span class="la">sine tuont dir dehein leit</span>, “they do you no harm”, has two. And a <span class="la">ne</span> in a dependent clause can mean “unless” or “without”, or nothing that modern German would translate at all.</p>
    <p>Spoken Middle High German also ran words together, and the editions keep many of these contractions: <span class="la">mahtû</span> for <span class="la">maht dû</span>, <span class="la">deist</span> for <span class="la">daz ist</span>, <span class="la">dêr</span> for <span class="la">daz er</span>, <span class="la">zêren</span> for <span class="la">ze êren</span>. Word order is close to modern German, with the verb second in a main clause, but freer, especially in verse: the verb often comes first, and in a subordinate clause it need not wait until the end.</p>
    <p>The reading is one of the best-known dialogues in German literature. Early in <em>Iwein</em>, the knight Kalogreant tells the court how, years before, he rode out into the forest of Breziljan and met a monstrous herdsman surrounded by wild beasts. He asks the man what he is; the man answers, and then asks him what he is looking for. Kalogreant says “adventure”, and the herdsman replies: <span class="la">âventiure? waz ist daz?</span> The scene is full of negatives, questions and contracted pronouns.</p>
    <p>By the end you should be able to recognise every form of negation, untangle the commonest contractions, follow the order of words in main and subordinate clauses, and read the dialogue with the glosses.</p>
  `,

  background: [
    {
      title: 'Kalogreant and the wild man',
      html: `
        <p><em>Iwein</em> begins at Arthur’s Whitsun feast (Lecture IV). While the king rests, the knights tell stories, and Kalogreant, Iwein’s cousin, tells one against himself. Ten years before, he rode out in search of adventure into the forest of Breziljan, the Brocéliande of French romance. After a night at a hospitable castle he came upon a clearing full of fighting wild animals and, in their midst, a herdsman of monstrous appearance, whom Hartmann describes at length just before our reading.</p>
        <p>The herdsman answers that in all his days he has never heard tell of what adventure might be, but if Kalogreant wants to risk his life, there is a spring close by (Iwein 543–556, Bech p. 22). When Kalogreant pours water on its stone, a storm breaks, and the lord of the spring rides out and unhorses him; he returns on foot, shamed. His story sets the plot in motion: Iwein rides out secretly to win the adventure his cousin lost.</p>
        <p>The herdsman’s question is already in Chrétien’s <em>Yvain</em>, and Hartmann keeps the exchange. It shows knighthood from outside. To the man who keeps the wild beasts in order with nothing but his voice, his hand and his threats, a knight who rides out looking for someone to fight, so that one of them may gain honour, is a strange creature indeed. Whether Hartmann means the scene as gentle comedy, as criticism of knighthood, or as a plain statement of its ideal is a question readers have answered in all three ways.</p>
      `
    },
    {
      title: 'âventiure: a word and an idea',
      html: `
        <p><span class="la">âventiure</span> is a loan from Old French <em>aventure</em>, from an unattested Late Latin <em>*adventūra</em>, “things that are going to arrive”, from <em>advenīre</em>. In Middle High German it means a chance event, a dangerous undertaking sought out by a knight, and also the story that tells of it, or its source: <span class="la">als diu âventiure giht</span>, “as the story says”, is a common formula. The chapters of the <em>Nibelungenlied</em> are called <span class="la">âventiuren</span>, and poets could even address <em>vrou Âventiure</em> as a person.</p>
        <p>Kalogreant’s definition in lines 530–537 is narrow and precise: to ride out looking for a man as well armed as oneself, so that the winner gains honour. Modern <em>Abenteuer</em> comes from the same word, by way of a longer and more general history.</p>
      `
    },
    {
      title: 'How German negation changed',
      html: `
        <p>Old High German negated a sentence with <span class="la">ni</span> before the verb. In Middle High German this particle had weakened to <span class="la">en</span> or <span class="la">ne</span>, and was more and more often supported by <span class="la">niht</span>, originally a noun phrase, “not a thing” (<span class="la">ni wiht</span>). Then the small particle dropped out, leaving <span class="la">niht</span> to do the work alone, as in modern <em>nicht</em>. The same three stages, a weak negator, reinforcement, and loss of the weak element, can be seen in French (<em>ne … pas</em>, spoken <em>pas</em>) and in English, and linguists call the pattern Jespersen’s cycle, after the Danish grammarian who described it.</p>
        <p>The texts of around 1200 stand in the middle of this development. All three patterns occur, <span class="la">en</span> alone, <span class="la">en … niht</span> and <span class="la">niht</span> alone, and their proportions vary from author to author and from verse to prose. <span class="la">en</span> alone survives above all with a few verbs (<span class="la">wizzen, mugen, kunnen, turren, suln, wellen</span>), alongside other negative words, and in certain dependent clauses. In many modern dialects, Bavarian among them, several negatives in one clause are still common (<em>koana hod koa Geid</em>); the written standard gave this up in the early modern period. How far grammarians caused that change, and how far they only confirmed what writers were already doing, is debated.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Nieman kan mit gerten<br>kindes zuht beherten:<br>den man zêren bringen mac,<br>dem ist ein wort als ein slac.<br>dem ist ein wort als ein slac,<br>den man zêren bringen mac:<br>kindes zuht beherten<br>nieman kan mit gerten.</p>
    <p class="la big">Hüetent iuwer zungen:<br>daz zimt wol dien jungen.<br>stôz den rigel für die tür,<br>lâ kein bœse wort dar für.<br>lâ kein bœse wort dar für,<br>stôz den rigel für die tür:<br>daz zimt wol dien jungen.<br>hüetent iuwer zungen.</p>
    <p>“No one can secure a child’s upbringing with the rod: for one who can be brought to honour, a word is like a blow. … Guard your tongues: that befits the young. Push the bolt across the door, let no bad word out.” Walther von der Vogelweide, L 87,1–16, from Lachmann’s 2nd edition (Berlin 1843), p. 87.</p>
    <p>Each stanza is a palindrome of lines: the second half repeats the first in reverse order, so that <span class="la">Nieman kan mit gerten kindes zuht beherten</span> returns as <span class="la">kindes zuht beherten nieman kan mit gerten</span>. Both orders are good Middle High German, which is the point of section 5. <span class="la">nieman</span> and <span class="la">kein</span> are negative words; <span class="la">zêren</span> is <span class="la">ze êren</span>; <span class="la">dien</span> is a form of the dative plural article <span class="la">den</span>. <span class="la">zuht</span> is upbringing, discipline and good manners all at once, and <span class="la">beherten</span> “make firm, secure”.</p>
  `,

  pronunciation: `
    <h3>Contractions are one word</h3>
    <p><span class="la">ichn</span> is one syllable, <em>ichn</em>; <span class="la">dûne, sine, nune</span> are two. Read the contracted forms as written: the poet has already counted them for the metre. Bech marks some with an apostrophe (<span class="la">ich’n, lobeten’z, mir s’</span>).</p>
    <h3>niene</h3>
    <p><span class="la">niene</span> (from <span class="la">nie ne</span>) has two syllables, <em>nie-ne</em>, and is emphatic: “not at all, never”.</p>
    <h3>sich!</h3>
    <p><span class="la">nû sich</span> in line 529 is not the reflexive pronoun but the imperative of <span class="la">sëhen</span>: “look!” (Bech). The <span class="la">ch</span> is the same as in <span class="la">ich</span>.</p>
    <h3>Questions</h3>
    <p>Questions put the verb first, as today (<span class="la">tuont sî dir iht?</span>), and a pronoun subject can be left out entirely: <span class="la">bist übel ode guot?</span>, “are (you) bad or good?”</p>
  `,

  grammar: [
    {
      title: '1. en, ne and niht',
      html: `
        <p>The particle <span class="la">en</span> (also written <span class="la">ne</span>, <span class="la">n</span>) stands immediately before the verb, or attaches to the word in front of it:</p>
        <ul>
          <li><span class="la">ich enweiz</span>, <span class="la">ichn weiz</span>, <span class="la">ine weiz</span>: “I do not know”.</li>
          <li><span class="la">sine erkennent man</span> = <span class="la">si ne erkennent</span>: “they do not know man”.</li>
          <li><span class="la">erne sprach</span> = <span class="la">er ne sprach</span>: “he did not speak”.</li>
        </ul>
        <p>On its own, <span class="la">en</span> is a full negative mainly with a few verbs: <span class="la">ich enweiz</span>, <span class="la">ich enmac</span>, <span class="la">ichn kan</span>, <span class="la">ichn tar</span>, <span class="la">ich ensol</span>, <span class="la">ichn wil</span>. Elsewhere <span class="la">niht</span> carries the negation, alone (<span class="la">sî lobeten’z, tæte ich in niht</span>) or together with <span class="la">en</span> (<span class="la">ich’n wânde niht</span>, <span class="la">ich enlieze iuch niht verderben</span>, Lecture VI). With <span class="la">en</span> and <span class="la">niht</span> together, read one negation, not two.</p>
        <p><span class="la">niht</span> is also a noun, “nothing”, and takes a genitive: <span class="la">niht guotes</span>, “nothing good”. Its genitive <span class="la">nihtes</span> is the origin of modern <em>nichts</em>.</p>
      `
    },
    {
      title: '2. Negative words, and negatives that add up',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Negative</th><th>Meaning</th><th>Positive</th></tr></thead>
          <tbody>
            <tr><td class="la">niht</td><td>not; nothing</td><td class="la">iht</td></tr>
            <tr><td class="la">nie; niene</td><td>never; not at all</td><td class="la">ie</td></tr>
            <tr><td class="la">niemer</td><td>never (again)</td><td class="la">iemer</td></tr>
            <tr><td class="la">nieman, niemen</td><td>no one</td><td class="la">ieman, iemen</td></tr>
            <tr><td class="la">dehein, kein</td><td>no, not any</td><td class="la">dehein</td></tr>
            <tr><td class="la">niender</td><td>nowhere</td><td class="la">iender</td></tr>
            <tr><td class="la">weder … noch</td><td>neither … nor</td><td class="la">weder … ode</td></tr>
          </tbody>
        </table></div>
        <p>The positive words <span class="la">iht, ie, ieman</span> are used in questions, conditions and after negatives, where English has “any”: <span class="la">tuont sî dir iht?</span>, “do they do you any harm?”; <span class="la">ob dû iht von mir geruochest</span>, “if you want anything from me”. <span class="la">dehein</span> means “any” in such places and “no” with a negative.</p>
        <p>Negatives <strong>reinforce</strong> one another: <span class="la">sine tuont dir bî mir dehein leit</span> (<span class="la">ne</span> + <span class="la">dehein</span>): “they will do you no harm”; <span class="la">ich’n gehôrt’ bî mînen tagen / selhes nie niht gesagen</span>, “in all my days I never heard tell of any such thing” (en + nie + niht), the herdsman’s answer a few lines after our reading (Iwein 547–548, Bech p. 22). Never cancel two negatives out into a positive.</p>
      `
    },
    {
      title: '3. ne in dependent clauses',
      html: `
        <p>A <span class="la">ne</span> in a dependent clause often does not translate as “not”. Three cases:</p>
        <ul>
          <li><strong>“unless”</strong>: a clause with <span class="la">en-</span> and the subjunctive, usually with the verb first: <span class="la">got enwelle der arzât wesen</span>, “unless God will be the physician” (Lecture VI); <span class="la">in welle got behüeten</span> (Lecture V).</li>
          <li><strong>after a negative or a question that expects “no”</strong>, a clause with <span class="la">ne</span> often means “that … (not)” or “without”: <span class="la">waz mac in gewerren dîn meisterschaft …, sîne loufen nâch ir muote?</span>, “what can your mastery do to stop them running where they please?” Bech paraphrases: “dass sie nicht laufen nach ihrem freien Willen”.</li>
          <li><strong>with verbs of hindering, doubting or annoyance</strong>: <span class="la">nune sol dich niht betrâgen, dûne sagest mir waz dû suochest</span>. Bech explains <span class="la">mich betrâget</span> “mit dem Conjunctiv und <span class="la">ne</span> im Nachsatze”: “do not be reluctant to tell me what you are looking for”. Modern German has no negative here.</li>
        </ul>
        <p>The rule of thumb: a <span class="la">ne</span> that would make nonsense as “not” is probably one of these. Read the main clause first, then decide.</p>
      `
    },
    {
      title: '4. Contracted forms',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Form</th><th>Full</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td class="la">ichn, ine</td><td class="la">ich en</td><td>I … not</td></tr>
            <tr><td class="la">dûne, erne, sine</td><td class="la">dû ne, er ne, si ne</td><td>you, he, they … not</td></tr>
            <tr><td class="la">nune, sone</td><td class="la">nû ne, sô ne</td><td>now … not; then … not</td></tr>
            <tr><td class="la">mahtû, bistû</td><td class="la">maht dû, bist dû</td><td>can you, are you</td></tr>
            <tr><td class="la">deist, deis</td><td class="la">daz ist</td><td>that is</td></tr>
            <tr><td class="la">deiswâr, dêswâr</td><td class="la">daz ist wâr</td><td>truly</td></tr>
            <tr><td class="la">dêr, dez</td><td class="la">daz er, daz ez</td><td>that he, that it</td></tr>
            <tr><td class="la">ichz, lobeten’z</td><td class="la">ich ez, lobeten ez</td><td>I … it; would praise it</td></tr>
            <tr><td class="la">zêren, zem, zer</td><td class="la">ze êren, ze dem, ze der</td><td>to honour, to the</td></tr>
          </tbody>
        </table></div>
        <p>The herdsman’s reply, just after the reading, has two more: <span class="la">sone darftû niht mê vrâgen</span> (<span class="la">sô ne darft dû</span>), “then you need ask no further”, and <span class="la">dâne zwîvel ich niht an</span> (<span class="la">dâ ne</span>), “of that I have no doubt” (Iwein 552 and 560, Bech p. 22).</p>
        <p>Three patterns cover most cases: a pronoun absorbs the following <span class="la">ne</span> (<span class="la">sine, dûne</span>); a verb absorbs the following <span class="la">dû</span> (<span class="la">mahtû, soltu</span> in Lecture V); and <span class="la">daz</span> merges with a following <span class="la">ist, er, ez</span>. When a word looks unfamiliar, try splitting off a pronoun at the end or a <span class="la">ne</span> after a pronoun.</p>
      `
    },
    {
      title: '5. Word order in main clauses',
      html: `
        <p>As in modern German, the finite verb is normally the <strong>second</strong> element of a main clause: <span class="la">ich suoche âventiure</span>; <span class="la">dô sprach der ungehiure</span>; <span class="la">nû hân ich dir vil gar geseit</span>. Infinitives and participles tend towards the end: <span class="la">die hânt mir s’ gemachet sô</span>.</p>
        <p>The verb comes <strong>first</strong>:</p>
        <ul>
          <li>in questions and commands: <span class="la">tuont sî dir iht?</span>; <span class="la">nû sage mir</span>; <span class="la">nû sich wie ich gewâfent bin</span>;</li>
          <li>in conditions without a conjunction (Lecture VI): <span class="la">gesige ich aber im an, sô hât man mich vür einen man</span>; <span class="la">sî dir nû nâhen ode bî kunt … iht</span>;</li>
          <li>sometimes in narrative, for vividness, and often in verse.</li>
        </ul>
        <p>The positions within the clause are freer than today. An adjective or possessive can follow its noun (<span class="la">diu helfe mîn</span>, Lecture VI); a genitive can precede its noun; and an object can stand far from its verb. Walther’s palindromic stanzas in the source panel use the same words in reverse order without any change in meaning.</p>
      `
    },
    {
      title: '6. Word order in subordinate clauses',
      html: `
        <p>In subordinate clauses the verb <strong>tends</strong> towards the end, as in modern German, but it is not fixed there. Both orders occur side by side in the reading:</p>
        <ul>
          <li>verb final: <span class="la">daz sî bibende vor mir stânt</span>; <span class="la">swes dû geruochtest vrâgen</span>;</li>
          <li>verb not final: <span class="la">daz ich suochende rîte / einen man der mit mir strîte</span>, “that I ride seeking a man …”, where modern German must say <em>dass ich suchend nach einem Mann reite</em>. The object <span class="la">einen man</span> stands after the verb.</li>
        </ul>
        <p>Verse adds its own freedom, since the rhyme word has to stand at the end of the line. Studies of prose of the period find the verb at the end in most subordinate clauses, with phrases often placed after it (<em>Ausklammerung</em>); the strict rule of modern German established itself only in Early New High German. The figures vary from text to text, and prose translated from Latin behaves differently again.</p>
        <p><strong>Relative clauses</strong> are introduced by <span class="la">der, diu, daz</span> (Lecture IV) and generalising clauses by <span class="la">swer, swaz, swes</span>: <span class="la">swer mir niene tuot, der sol ouch mich ze vriunde hân</span>.</p>
      `
    }
  ],

  vocab: [
    // negation and related
    { id: 'niht', head: 'niht', la: 'niht; gen. nihtes', pos: 'adverb; pronoun', en: 'not; nothing', de: 'nicht; nichts', note: 'From ni wiht, “not a thing”. nihtes is modern nichts.' },
    { id: 'en', head: 'en, ne', la: 'en-, ne, -n', pos: 'particle', en: 'not (negative particle before the verb)', de: 'nicht (Verneinungspartikel)', note: 'Alone with wizzen, mugen, kunnen, turren, suln, wellen; often with niht.' },
    { id: 'niene', head: 'niene', la: 'niene (nie ne)', pos: 'adverb', en: 'never, not at all', de: 'nie, gar nicht' },
    { id: 'nieman', head: 'nieman', la: 'nieman, niemen', pos: 'pronoun', en: 'no one', de: 'niemand' },
    { id: 'dehein', head: 'dehein', la: 'dehein, kein', pos: 'pronoun, adjective', en: 'any; (with a negative) no', de: 'irgendein; kein' },
    { id: 'iht', head: 'iht', la: 'iht', pos: 'pronoun', en: 'anything, something; at all', de: 'etwas; irgendwie' },
    { id: 'weder', head: 'weder … noch', la: 'weder … noch; weder … ode', pos: 'conjunction', en: 'neither … nor; whether … or', de: 'weder … noch; ob … oder' },
    // nouns
    { id: 'aventiure', head: 'âventiure', la: 'âventiure', g: 'f', pos: 'noun', en: 'adventure, chance; knightly venture; story, source', de: 'Abenteuer; Begebenheit; Erzählung, Quelle', note: 'From Old French aventure. als diu âventiure giht: as the story says.' },
    { id: 'creatiure', head: 'crêatiure', la: 'crêatiure', g: 'f', pos: 'noun', en: 'creature', de: 'Geschöpf, Kreatur' },
    { id: 'ambet', head: 'ambet', la: 'ambet, ambahte', g: 'n', pos: 'noun', en: 'office, duty, occupation; service', de: 'Amt, Beschäftigung; Dienst', note: 'Bech: Amt, Beschäftigung.' },
    { id: 'tier', head: 'tier', la: 'tier; pl. tier', g: 'n', pos: 'noun', en: 'animal, wild beast', de: 'Tier, Wild' },
    { id: 'huote', head: 'huote', la: 'huote', g: 'f', pos: 'noun', en: 'watch, guard, care', de: 'Hut, Aufsicht, Obhut', note: 'In love poetry: the guardians who watch a lady.' },
    { id: 'gewalt', head: 'gewalt', la: 'gewalt', g: 'm', pos: 'noun', en: 'power, control; force', de: 'Macht, Herrschaft; Gewalt', note: 'Masculine or feminine; more “power” than “violence”.' },
    { id: 'bete', head: 'bete', la: 'bete', g: 'f', pos: 'noun', en: 'request, plea; prayer', de: 'Bitte; Gebet' },
    { id: 'dro', head: 'drô', la: 'drô, drôwe', g: 'f', pos: 'noun', en: 'threat', de: 'Drohung' },
    { id: 'vride', head: 'vride', la: 'vride', g: 'm', pos: 'noun', en: 'peace; protection, safety', de: 'Friede; Schutz, Sicherheit' },
    { id: 'zorn', head: 'zorn', la: 'zorn', g: 'm', pos: 'noun', en: 'anger', de: 'Zorn' },
    { id: 'sin', head: 'sin', la: 'sin, sinnes', g: 'm', pos: 'noun', en: 'mind, sense; intention, purpose', de: 'Sinn, Verstand; Absicht', note: 'Bech on line 530: Absicht, Zweck, Aufgabe.' },
    { id: 'wage', head: 'wâge', la: 'wâge', g: 'f', pos: 'noun', en: 'risk, venture; (also) balance, scales', de: 'Wagnis; Waage', note: 'Bech on line 539: Wagniss. In Lecture III the other sense: der milte ein glîchiu wâge.' },
    // adjectives
    { id: 'ungehiure', head: 'ungehiure', la: 'ungehiure', pos: 'adjective', en: 'uncanny, monstrous, dreadful; (noun) monster', de: 'unheimlich, schrecklich; Ungeheuer', note: 'Opposite of gehiure, “pleasant, gentle”.' },
    { id: 'wilde', head: 'wilde', la: 'wilde', pos: 'adjective', en: 'wild; strange, foreign', de: 'wild; fremd' },
    { id: 'kunt', head: 'kunt', la: 'kunt', pos: 'adjective', en: 'known', de: 'bekannt, kund', note: 'kunt tuon: make known.' },
    // verbs
    { id: 'vuerhten', head: 'vürhten', la: 'vürhten, vorhte, gevorht', pos: 'verb, weak', en: 'fear; (+ dat.) be afraid for', de: 'fürchten', note: 'niene vürhte dir: have no fear (for yourself).' },
    { id: 'gewerren', head: 'gewërren', la: 'gewërren, gewar, gewurren, geworren', pos: 'verb, strong III', en: 'trouble, harm, hinder (+ dat.)', de: 'stören, schaden, hindern' },
    { id: 'betwingen', head: 'betwingen', la: 'betwingen, betwanc, betwungen, betwungen', pos: 'verb, strong III', en: 'subdue, compel', de: 'bezwingen' },
    { id: 'bibenen', head: 'biben', la: 'biben, bibenen', pos: 'verb, weak', en: 'tremble', de: 'beben, zittern' },
    { id: 'geruochen', head: 'geruochen', la: 'geruochen', pos: 'verb, weak', en: 'deign, care to; wish', de: 'geruhen, belieben, wünschen' },
    { id: 'betragen', head: 'betrâgen', la: 'betrâgen (mich betrâget)', pos: 'verb, weak', en: 'irk, weary (impersonal: it irks me)', de: 'verdrießen', note: 'Followed by ne and the subjunctive (Bech).' },
    { id: 'verswigen', head: 'verswîgen', la: 'verswîgen, versweic, verswigen, verswigen', pos: 'verb, strong I', en: 'keep silent about, conceal', de: 'verschweigen' },
    { id: 'wisen', head: 'wîsen', la: 'wîsen', pos: 'verb, weak', en: 'show the way, direct; teach', de: 'weisen, führen' },
    { id: 'prisen', head: 'prîsen', la: 'prîsen', pos: 'verb, weak', en: 'praise; bring renown to', de: 'preisen; berühmt machen' },
    { id: 'gesigen', head: 'gesigen', la: 'gesigen (einem an gesigen)', pos: 'verb, weak', en: 'win (against someone)', de: 'siegen, besiegen' },
    { id: 'slahen', head: 'slahen', la: 'slahen, sluoc, sluogen, geslagen', pos: 'verb, strong VI', en: 'strike; kill', de: 'schlagen; erschlagen', note: 'Grammatical change h/g; present 3rd sg. sleht.' }
  ],

  grammarCards: [
    { id: 'mh7-en', front: 'ich enweiz; ichn weiz; ine weiz', back: 'I do not know (en/ne before the verb)' },
    { id: 'mh7-ennht', front: 'ich’n wânde niht', back: 'I did not think (en + niht = one negation)' },
    { id: 'mh7-alone', front: 'With which verbs is en alone a full negative?', back: 'wizzen, mugen, kunnen, turren, suln, wellen' },
    { id: 'mh7-double', front: 'sine tuont dir dehein leit', back: 'they do you no harm: negatives reinforce, they do not cancel' },
    { id: 'mh7-niene', front: 'niene', back: 'nie ne: never, not at all' },
    { id: 'mh7-iht', front: 'tuont sî dir iht?', back: 'do they do you any harm? (iht: anything, in questions)' },
    { id: 'mh7-nihtes', front: 'Where does nichts come from?', back: 'nihtes, genitive of niht (from ni wiht, not a thing)' },
    { id: 'mh7-unless', front: 'ne in a clause with the verb first + subjunctive', back: 'unless (got enwelle …)' },
    { id: 'mh7-betragen', front: 'nune sol dich niht betrâgen, dûne sagest mir …', back: 'do not be reluctant to tell me …: ne after a verb of annoyance' },
    { id: 'mh7-sine', front: 'sine; dûne; erne', back: 'si ne; dû ne; er ne' },
    { id: 'mh7-mahtu', front: 'mahtû; bistû', back: 'maht dû (can you); bist dû' },
    { id: 'mh7-deist', front: 'deist; deiswâr', back: 'daz ist; daz ist wâr (truly)' },
    { id: 'mh7-der', front: 'dêr; dez', back: 'daz er; daz ez' },
    { id: 'mh7-zeren', front: 'zêren', back: 'ze êren: to honour' },
    { id: 'mh7-v2', front: 'Verb position in a main clause', back: 'Second, as today; first in questions, commands and conditions' },
    { id: 'mh7-sub', front: 'daz ich suochende rîte einen man', back: 'Verb not final in a subordinate clause: allowed in MHG' },
    { id: 'mh7-bist', front: 'bist übel ode guot?', back: 'are you bad or good? (the pronoun dû left out)' },
    { id: 'mh7-sich', front: 'nû sich', back: 'now look! (imperative of sëhen)' },
    { id: 'mh7-aventiure', front: 'Kalogreant’s definition of âventiure', back: 'to seek a man armed like oneself to fight, so that the winner gains honour' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">ichn weiz</span> means:', options: ['I do not know', 'I know', 'I knew', 'I know nothing at all, not even …'], answer: 0, explain: 'en/n + weiz: a full negative with wizzen.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">sine tuont dir bî mir dehein leit</span> means:', options: ['they will do you no harm while you are with me', 'they will do you some harm', 'she does not hurt you', 'they never do anything without me'], answer: 0, explain: 'ne + dehein: two negatives, one meaning.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">tuont sî dir iht?</span> means:', options: ['Do they do you any harm?', 'Do they do nothing to you?', 'They do something to you.', 'Do they do it to you?'], answer: 0, explain: 'iht: anything, in a question.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">nune sol dich niht betrâgen, dûne sagest mir waz dû suochest</span> means:', options: ['do not be reluctant to tell me what you are seeking', 'you shall not tell me what you are seeking', 'you need not ask what I am seeking', 'do not tell me unless you are seeking'], answer: 0, explain: 'ne after a verb of annoyance is not translated (Bech).' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">mahtû</span> is:', options: ['maht dû: can you', 'a noun: power', 'mach dû: make!', 'mahte: could'], answer: 0, explain: 'Verb + dû run together.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">dêr sî betwingen möhte</span>: <span class="la">dêr</span> =', options: ['daz er', 'der (article)', 'dâ er', 'dir'], answer: 0, explain: 'Bech: dêr = daz er.' },
    { id: 'e7', type: 'mc', prompt: '<span class="la">niene vürhte dir</span> means:', options: ['have no fear', 'never fear him', 'fear nothing new', 'do not fear for her'], answer: 0, explain: 'niene = nie ne, emphatic “not at all”.' },
    { id: 'e8', type: 'mc', prompt: 'In <span class="la">bist übel ode guot?</span> what is missing?', options: ['the pronoun dû', 'the verb', 'a negative', 'nothing: bist is a noun'], answer: 0, explain: 'A subject pronoun can be left out in questions.' },
    { id: 'e9', type: 'mc', prompt: '<span class="la">wâge</span> in <span class="la">umb’ selbe wâge</span> means:', options: ['venture, risk', 'scales, balance', 'wagon', 'wave'], answer: 0, explain: 'Bech: Wagniss. In Lecture III wâge was “scales”.' },
    { id: 'e10', type: 'mc', prompt: 'Which stage of negation does classical Middle High German show?', options: ['en and niht side by side; niht alone already common', 'only ni before the verb', 'only nicht, as today', 'negation by word order only'], answer: 0, explain: 'The middle of the cycle: en weakening, niht taking over.' },
    { id: 'e11', type: 'match', prompt: 'Match the contracted forms.', pairs: [
      ['sine', 'si ne'], ['deist', 'daz ist'], ['zêren', 'ze êren'], ['bistû', 'bist dû'], ['nune', 'nû ne']
    ] },
    { id: 'e12', type: 'match', prompt: 'Match the negative and positive words.', pairs: [
      ['niht', 'iht'], ['nie', 'ie'], ['niemer', 'iemer'], ['nieman', 'ieman'], ['niender', 'iender']
    ] },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Ich___ weiz es niht.</span>', hint: 'negative particle attached to ich', answers: ['n'], full: 'Ichn weiz es niht.', explain: 'ich + en → ichn.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Si___ erkennent man noch sîn gebot.</span>', hint: 'they … not', answers: ['ne'], full: 'Sine erkennent man noch sîn gebot.', explain: 'si + ne → sine.' },
    { id: 'e15', type: 'gap', prompt: '<span class="la">Ir enwizzet ___ (nothing).</span>', hint: 'nothing', answers: ['niht', 'nihtes'], full: 'Ir enwizzet niht.', explain: 'niht can be a pronoun: nothing.' },
    { id: 'e16', type: 'gap', prompt: '<span class="la">Weder er___ sprach noch ich.</span>', hint: 'ne attached to er', answers: ['ne'], full: 'Weder erne sprach noch ich.', explain: 'Iwein 479, just before the reading: “neither he spoke nor I”, weder … noch with er ne.' },
    { id: 'e17', type: 'gap', prompt: '<span class="la">___, ich wil dir helfen.</span>', hint: 'truly: daz ist wâr, contracted', answers: ['deiswâr', 'dêswâr', 'deswar', 'deiswar'], full: 'Deiswâr, ich wil dir helfen.', explain: 'deiswâr, dêswâr = daz ist wâr: “truly”.' },
    { id: 'e18', type: 'paradigm', prompt: 'Attach the negative particle <span class="la">ne</span> to the pronoun.', headers: ['with ne'], rows: [
      { label: 'ich', answers: ['ichn|ine|ichne'] },
      { label: 'dû', answers: ['dûne'] },
      { label: 'er', answers: ['erne|ern'] },
      { label: 'si', answers: ['sine'] }
    ] },
    { id: 'e19', type: 'paradigm', prompt: 'Give the full forms.', headers: ['Full form'], rows: [
      { label: 'deist', answers: ['daz ist'] },
      { label: 'dêr', answers: ['daz er'] },
      { label: 'zer', answers: ['ze der'] },
      { label: 'ichz', answers: ['ich ez'] }
    ] },
    { id: 'e20', type: 'order', prompt: 'Put the modern German in order.', source: 'die hânt mir s’ gemachet sô daz sî bibende vor mir stânt', tokens: ['Die haben sie mir', 'so gemacht,', 'dass sie zitternd', 'vor mir stehen.'], explain: 'Here, as in modern German, the verb of the subordinate clause stands at the end.' },
    { id: 'e21', type: 'translate', dir: 'mhd-de', source: 'Ich suoche âventiure.', model: 'Ich suche Abenteuer.', accepted: ['Ich suche Abenteuer', 'Ich suche ein Abenteuer', 'Ich suche Aventiure'] },
    { id: 'e22', type: 'translate', dir: 'mhd-de', source: 'Sine vürhtent dich niht.', model: 'Sie fürchten dich nicht.', accepted: ['Sie fürchten dich nicht'] },
    { id: 'e23', type: 'translate', dir: 'mhd-en', source: 'Nieman kan mit gerten kindes zuht beherten.', model: 'No one can secure a child’s upbringing with the rod.', accepted: ['No one can secure a child’s upbringing with the rod', 'No one can secure a child’s upbringing with rods', 'Nobody can secure a child’s upbringing with the rod', 'Nobody can secure a child’s upbringing with rods', 'No one can enforce a child’s good upbringing with the rod', 'No one can harden a child’s upbringing with the rod', 'No one can secure a child’s discipline with the rod', 'Nobody can secure a child’s discipline with the rod'] },
    { id: 'e24', type: 'translate', dir: 'de-mhd', source: 'Ich weiß es nicht.', model: 'Ichn weiz es niht.', accepted: ['Ichn weiz es niht', 'Ichn weiz ez niht', 'Ich enweiz es niht', 'Ich enweiz ez niht', 'Ich weiz es niht', 'Ich weiz ez niht', 'Ichn weiz es', 'Ich enweiz es', 'Ine weiz es niht'] },
    { id: 'e25', type: 'translate', dir: 'de-mhd', source: 'Niemand kam.', model: 'Nieman kam.', accepted: ['Nieman kam', 'Niemen kam', 'Nieman enkam', 'Niemen enkam', 'Nieman kom'] },
    { id: 'e26', type: 'mc', prompt: 'How does the herdsman keep the wild beasts in order?', options: ['With his voice, his hand, his pleading and his threats', 'With chains and locks', 'With magic', 'With the help of God alone'], answer: 0, explain: 'mîn zunge und mîn hant, mîn bete unde mîn drô.' },
    { id: 'e27', type: 'mc', prompt: 'What does Kalogreant say he gains by defeating an opponent?', options: ['He is held to be a man and becomes worthier', 'Gold and land', 'The opponent’s horse only', 'Nothing at all'], answer: 0, explain: 'sô hât man mich vür einen man, und wirde werder danne ich sî.' }
  ],

  reading: {
    title: 'Hartmann von Aue, Iwein, lines 483–542: Kalogreant and the wild man',
    note: 'Authentic text: the dialogue between Kalogreant and the herdsman, transcribed from the page images of Fedor Bech’s edition (Leipzig 1869), pp. 20–21. Kalogreant is telling the story, so “ich” is Kalogreant. Bech’s metrical accents are left out. Tap any word.',
    text: 'Ich sprach «bist übel ode guot?»\ner sprach «swer mir niene tuot,\nder sol ouch mich ze vriunde hân.»\n«mahtû mich danne wizzen lân,\nwaz crêatiure bistû?»\n«ein man, als dû gesihest nû.»\n«nû sage mir waz dîn ambet sî.»\n«dâ stên ich disen tieren bî.»\n«nû sage mir, tuont sî dir iht?»\n«sî lobeten’z, tæte ich in niht.»\n«entriuwen vürhtent sî dich?»\n«ich pflige ir, und sî vürhtent mich\nals ir meister unde ir herren.»\n«sage, waz mac in gewerren\ndîn meisterschaft und dîn huote,\nsîne loufen nâch ir muote\nze walde und ze gevilde?\nwan ich sihe wol, sî sint wilde,\nsine erkennent man noch sîn gebot.\nich’n wânde niht daz âne got\nder gewalt iemen töhte\ndêr sî betwingen möhte\nâne sloz und âne bant.»\ner sprach «mîn zunge und mîn hant,\nmîn bete unde mîn drô,\ndie hânt mir s’ gemachet sô\ndaz sî bibende vor mir stânt\nund durch mich tuont unde lânt.\nswer ouch anders under in\nsolde sîn als ich bin,\nder wære schiere verlorn.»\n«herre, vürhtent si dînen zorn,\nso gebiut in vride her ze mir.»\ner sprach «niene vürhte dir:\nsine tuont dir bî mir dehein leit.\nnû hân ich dir vil gar geseit\nswes dû geruochtest vrâgen:\nnune sol dich niht betrâgen,\ndûne sagest mir waz dû suochest.\nob dû iht von mir geruochest,\ndaz ist allez getân.»\nich sprach «ich wil dich wizzen lân,\nich suoche âventiure.»\ndô sprach der ungehiure\n«âventiure? waz ist daz?»\n«daz wil ich dir bescheiden baz.\nnû sich wie ich gewâfent bin:\nich heize ein riter und hân den sin\ndaz ich suochende rîte\neinen man der mit mir strîte,\nder gewâfent sî als ich.\ndaz prîset in, und sleht er mich:\ngesige ich aber im an,\nsô hât man mich vür einen man,\nund wirde werder danne ich sî.\nsî dir nû nâhen ode bî\nkunt umb’ selbe wâge iht,\ndaz verswîc mich niht,\nunde wîse mich dar,\nwand’ ich nâch anders niene var.»',
    translations: [
      { label: 'German translation', text: 'Ich sagte: „Bist du böse oder gut?“ Er sagte: „Wer mir nichts tut, den will auch ich zum Freund haben.“ „Kannst du mich dann wissen lassen, was für ein Geschöpf du bist?“ „Ein Mensch, wie du jetzt siehst.“ „Nun sag mir, was dein Amt ist.“ „Ich hüte diese Tiere.“ „Nun sag mir, tun sie dir etwas?“ „Sie wären froh, täte ich ihnen nichts.“ „Bei deiner Treue, fürchten sie dich?“ „Ich sorge für sie, und sie fürchten mich als ihren Meister und ihren Herrn.“ „Sag, wie kann deine Herrschaft und deine Aufsicht sie daran hindern, nach ihrem Willen in Wald und Feld zu laufen? Denn ich sehe wohl, sie sind wild, sie kennen weder den Menschen noch sein Gebot. Ich hätte nicht geglaubt, dass außer Gott irgendjemand die Macht hätte, sie ohne Schloss und ohne Fessel zu bezwingen.“ Er sagte: „Meine Stimme und meine Hand, meine Bitte und meine Drohung haben sie mir so gemacht, dass sie zitternd vor mir stehen und um meinetwillen tun und lassen. Wer aber anders unter ihnen wäre, als ich bin, der wäre bald verloren.“ „Herr, wenn sie deinen Zorn fürchten, so gebiete ihnen Frieden mir gegenüber.“ Er sagte: „Fürchte dich nicht: Sie tun dir bei mir kein Leid. Nun habe ich dir alles gesagt, wonach du zu fragen geruhtest; nun lass es dich nicht verdrießen, mir zu sagen, was du suchst. Wenn du etwas von mir wünschst, so ist es schon getan.“ Ich sagte: „Ich will es dich wissen lassen: Ich suche Aventiure.“ Da sagte der Unheimliche: „Aventiure? Was ist das?“ „Das will ich dir genauer erklären. Sieh nur, wie ich gewappnet bin: Ich heiße ein Ritter und habe die Absicht, auf der Suche nach einem Mann zu reiten, der mit mir kämpft und gewappnet ist wie ich. Erschlägt er mich, so bringt ihm das Ruhm; besiege ich ihn aber, so hält man mich für einen tapferen Mann, und ich werde angesehener, als ich bin. Ist dir nun nah oder fern etwas von einem solchen Wagnis bekannt, so verschweige es mir nicht und weise mich dorthin, denn nach nichts anderem reite ich aus.“' },
      { label: 'English translation', text: 'I said: “Are you bad or good?” He said: “Whoever does me no harm, I will have him as a friend too.” “Can you then tell me what kind of creature you are?” “A man, as you can see now.” “Now tell me what your office is.” “I tend these animals.” “Now tell me, do they do you any harm?” “They would be glad if I did them none.” “On your faith, do they fear you?” “I look after them, and they fear me as their master and their lord.” “Tell me, how can your mastery and your watch keep them from running where they please, in wood and field? For I can see that they are wild; they know neither man nor his command. I would not have believed that anyone but God had the power to tame them without lock or bond.” He said: “My voice and my hand, my pleading and my threats have made them so that they stand trembling before me and do and leave undone as I wish. Anyone among them who was not as I am would soon be lost.” “Sir, if they fear your anger, then command them to keep the peace towards me.” He said: “Have no fear: they will do you no harm while you are with me. Now I have told you all you cared to ask; so do not be reluctant to tell me what you are looking for. If you want anything from me, it is as good as done.” I said: “I will tell you: I am looking for adventure.” Then the monstrous man said: “Adventure? What is that?” “I will explain it to you better. Look how I am armed: I am called a knight, and my purpose is to ride in search of a man who will fight me, armed as I am. If he kills me, it brings him glory; but if I defeat him, people hold me to be a man, and I become worthier than I am. If you know of any such venture, near or close at hand, do not keep it from me, but show me the way there, for I ride out for nothing else.”' }
    ],
    notes: [
      { ref: 'Ich sprach «bist übel ode guot?»', html: 'Kalogreant is speaking, so <span class="la">ich</span> is the knight. The question leaves out <span class="la">dû</span>. <span class="la">ode</span> = <span class="la">oder</span>.' },
      { ref: 'swer mir niene tuot, / der sol ouch mich ze vriunde hân', html: '<span class="la">niene</span>: “nothing at all”. <span class="la">swer … der</span>: “whoever …, him”. <span class="la">sol</span> expresses intention: “I mean to”.' },
      { ref: 'mahtû mich danne wizzen lân, / waz crêatiure bistû?', html: '<span class="la">mahtû</span> = <span class="la">maht dû</span> (<span class="la">mugen</span>: “can you”), <span class="la">bistû</span> = <span class="la">bist dû</span>. <span class="la">wizzen lân</span>: “let know, tell”. <span class="la">crêatiure</span>: a learned loan, “created being”.' },
      { ref: 'nû sage mir waz dîn ambet sî. / … dâ stên ich disen tieren bî', html: '<span class="la">sî</span>: subjunctive in an indirect question. <span class="la">ambet</span>: “Amt, Beschäftigung” (Bech). <span class="la">bî stân</span> + dative: “look after, tend” (Bech: “ich warte, beaufsichtige”); Bech notes <span class="la">dâ</span> as a word that introduces an answer.' },
      { ref: 'sî lobeten’z, tæte ich in niht', html: 'Bech: “sie würden es gerne sehen … Gott danken”: they would praise God if I did nothing to them. <span class="la">lobeten’z</span> = <span class="la">lobeten ez</span>, a weak past subjunctive; <span class="la">tæte ich</span>: a condition by inversion. <span class="la">niht</span> here is “nothing”.' },
      { ref: 'entriuwen vürhtent sî dich?', html: '<span class="la">entriuwen</span> = <span class="la">in triuwen</span>: “on your faith, I beg you, tell me” (Bech). <span class="la">ich pflige ir</span>: “I look after them”, <span class="la">pflëgen</span> with a genitive (Lecture II).' },
      { ref: 'sage, waz mac in gewerren / dîn meisterschaft und dîn huote, / sîne loufen nâch ir muote', html: 'A question expecting “nothing”, followed by a clause with <span class="la">ne</span>: “what can your mastery do to them, (so) that they do not run as they please?” Bech: “dass sie nicht laufen nach ihrem freien Willen”. <span class="la">sîne</span> = <span class="la">sî ne</span>.' },
      { ref: 'sine erkennent man noch sîn gebot', html: 'Bech: “sie kennen weder Menschen noch Menschengebot.” <span class="la">ne … noch</span>: “neither … nor”.' },
      { ref: 'ich’n wânde niht daz âne got / der gewalt iemen töhte / dêr sî betwingen möhte', html: '<span class="la">ich’n wânde niht</span>: “I would not have thought” (Bech), <span class="la">en</span> + <span class="la">niht</span> as one negation. <span class="la">töhte</span>: past subjunctive of <span class="la">tugen</span> (Lecture VI), “would be fit for, equal to”. <span class="la">dêr</span> = <span class="la">daz er</span>, referring to <span class="la">iemen</span> (Bech).' },
      { ref: 'die hânt mir s’ gemachet sô', html: '<span class="la">s’</span> = <span class="la">sî</span>, “them” (Bech). <span class="la">hânt</span>: 3rd plural of <span class="la">hân</span> (Lecture V).' },
      { ref: 'daz sî bibende vor mir stânt / und durch mich tuont unde lânt', html: '<span class="la">bibende</span>: present participle, “trembling”. <span class="la">tuon unde lân</span> is a formula for complete freedom of action; Bech paraphrases “und sich ganz nach mir richten”. <span class="la">lânt</span> = <span class="la">lâzent</span>.' },
      { ref: 'swer ouch anders under in / solde sîn als ich bin', html: 'Bech: <span class="la">ouch</span> = “anderseits, aber”. Anyone not as strong and fearsome as he is would be torn apart.' },
      { ref: 'herre, vürhtent si dînen zorn, / so gebiut in vride her ze mir', html: 'A condition by inversion. <span class="la">gebiut</span>: imperative of <span class="la">gebieten</span>. Bech: “gebiet ihnen Ruhe gegen mich”.' },
      { ref: 'niene vürhte dir: / sine tuont dir bî mir dehein leit', html: '<span class="la">vürhten</span> with the dative: “be afraid for yourself”. <span class="la">sine … dehein</span>: two negatives, one meaning.' },
      { ref: 'nune sol dich niht betrâgen, / dûne sagest mir waz dû suochest', html: 'Bech: <span class="la">mich betrâget</span> “mit dem Conjunctiv und <span class="la">ne</span> im Nachsatze”: “it irks me to do something”. The <span class="la">ne</span> in <span class="la">dûne</span> is not translated: “do not be reluctant to tell me”.' },
      { ref: 'ob dû iht von mir geruochest, / daz ist allez getân', html: '<span class="la">geruochen</span>: “belieben, wünschen” (Bech). <span class="la">iht</span>: “anything”, after <span class="la">ob</span>.' },
      { ref: 'dô sprach der ungehiure / «âventiure? waz ist daz?»', html: '<span class="la">der ungehiure</span>: the adjective used as a noun, “the uncanny one, the monster” (Bech: “unheimlich, schrecklich”). His question makes the knight explain his whole way of life.' },
      { ref: 'nû sich wie ich gewâfent bin', html: '<span class="la">sich</span>: imperative of <span class="la">sëhen</span> (Bech).' },
      { ref: 'ich heize ein riter und hân den sin / daz ich suochende rîte / einen man der mit mir strîte', html: '<span class="la">sin</span>: “Absicht, Zweck” (Bech). In <span class="la">daz ich suochende rîte einen man</span> the verb is not at the end of the subordinate clause. <span class="la">strîte</span>, <span class="la">sî</span>: subjunctives describing the man he hopes to find.' },
      { ref: 'daz prîset in, und sleht er mich: / gesige ich aber im an, / sô hât man mich vür einen man', html: 'Two conditions by inversion. <span class="la">daz prîset in</span>: “that brings him renown” (Bech). <span class="la">einem an gesigen</span>: “defeat someone”. <span class="la">man</span> in line 536 means a brave man, a “real man” (Bech).' },
      { ref: 'und wirde werder danne ich sî', html: '<span class="la">wirde</span>: “I become”. <span class="la">werder</span>: comparative of <span class="la">wërt</span>. Bech: <span class="la">danne ich sî</span> = “als ich vielleicht sein mag”.' },
      { ref: 'sî dir nû nâhen ode bî / kunt umb’ selbe wâge iht', html: 'A condition by inversion. Bech: <span class="la">nâhen</span> “in der Nachbarschaft”, <span class="la">bî</span> “in unmittelbarer Nähe”; <span class="la">wâge</span> “Wagniss”. <span class="la">umb’ selbe wâge</span>: “about such a venture”, <span class="la">selbe</span> “the same, such”.' },
      { ref: 'wand’ ich nâch anders niene var', html: '<span class="la">wand’</span> = <span class="la">wande</span>, “for”; <span class="la">niene</span>: “for nothing else at all”.' }
    ],
    glosses: {
      'ich': 'I (Kalogreant)', 'sprach': 'said (sprëchen)', 'bist': 'are (you)', 'übel': 'bad, evil', 'ode': 'or', 'guot': 'good', 'er': 'he', 'swer': 'whoever', 'mir': 'to me', 'niene': 'nothing at all, never', 'tuot': 'does (tuon)',
      'der': 'he, that one; the; who', 'sol': 'shall, means to', 'ouch': 'also; on the other hand', 'mich': 'me', 'ze': 'as, to', 'vriunde': 'friend (dat.)', 'hân': 'have', 'mahtû': 'maht dû: can you (mugen)', 'danne': 'then; than', 'wizzen': 'know', 'lân': 'let',
      'waz': 'what', 'crêatiure': 'creature', 'bistû': 'bist dû: are you', 'ein': 'a', 'man': 'man, human being; one, people', 'als': 'as', 'dû': 'you', 'gesihest': 'see (gesëhen)', 'nû': 'now',
      'sage': 'tell (imperative of sagen)', 'dîn': 'your', 'ambet': 'office, occupation', 'sî': 'is (subj. of sîn); they; them', 'dâ': 'there (introducing an answer)', 'stên': 'stand: bî stân, tend', 'disen': 'these (dat. pl.)', 'tieren': 'animals (dat. pl.)', 'bî': 'by, beside; close at hand',
      'tuont': 'do', 'dir': 'to you', 'iht': 'anything', 'lobeten': 'would praise (subj. of loben)', 'z': 'ez: it', 'tæte': 'did, if I did (subj. of tuon)', 'in': 'them (dat.); to them', 'niht': 'not; nothing',
      'entriuwen': 'on your faith (in triuwen)', 'vürhtent': 'fear', 'dich': 'you (acc.)', 'pflige': 'look after (pflëgen + gen.)', 'ir': 'them (gen.); their', 'und': 'and', 'meister': 'master', 'unde': 'and', 'herren': 'lord (acc. of herre)',
      'mac': 'can (mugen)', 'gewerren': 'hinder, trouble', 'meisterschaft': 'mastery, control', 'huote': 'watch, guard', 'sîne': 'sî ne: they … not', 'loufen': 'run', 'nâch': 'according to, after; for', 'muote': 'will, wish (dat. of muot)',
      'walde': 'wood (dat.)', 'gevilde': 'open country, fields', 'wan': 'for, because', 'sihe': 'see (sëhen)', 'wol': 'well, clearly', 'sint': 'are', 'wilde': 'wild', 'sine': 'si ne: they … not', 'erkennent': 'know, recognise', 'noch': 'nor', 'sîn': 'his; be', 'gebot': 'command',
      'n': 'en: not (ich’n = ich en)', 'wânde': 'thought, believed (wænen)', 'daz': 'that; the', 'âne': 'without; except', 'got': 'God', 'gewalt': 'power', 'iemen': 'anyone', 'töhte': 'would be equal to (subj. of tugen)', 'dêr': 'daz er: that he', 'betwingen': 'subdue', 'möhte': 'could (subj. of mugen)',
      'sloz': 'lock', 'bant': 'bond, fetter', 'mîn': 'my', 'zunge': 'tongue, voice', 'hant': 'hand', 'bete': 'pleading, request', 'drô': 'threat', 'die': 'they, these', 'hânt': 'have', 's': 'sî: them', 'gemachet': 'made', 'sô': 'so; then',
      'bibende': 'trembling', 'vor': 'before', 'stânt': 'stand', 'durch': 'for the sake of, because of', 'lânt': 'leave undone (lân): tuont unde lânt, do as I wish', 'anders': 'otherwise, different', 'under': 'among', 'solde': 'should (suln)', 'bin': 'am',
      'wære': 'would be', 'schiere': 'soon', 'verlorn': 'lost', 'herre': 'lord, sir', 'si': 'they', 'dînen': 'your (acc.)', 'zorn': 'anger', 'so': 'then', 'gebiut': 'command (imperative of gebieten)', 'vride': 'peace', 'her': 'here, towards: her ze mir, towards me',
      'vürhte': 'fear (imperative)', 'dehein': 'no, any', 'leit': 'harm, sorrow', 'vil': 'very', 'gar': 'entirely', 'geseit': 'told (gesaget)', 'swes': 'whatever (gen.)', 'geruochtest': 'cared, deigned (geruochen)', 'vrâgen': 'ask',
      'nune': 'nû ne: now … not', 'betrâgen': 'irk, weary', 'dûne': 'dû ne: (that) you (not)', 'sagest': 'tell', 'suochest': 'seek', 'ob': 'if', 'von': 'from', 'geruochest': 'wish', 'ist': 'is', 'allez': 'all', 'getân': 'done',
      'wil': 'will, want to', 'suoche': 'seek', 'âventiure': 'adventure', 'dô': 'then', 'ungehiure': 'monstrous one, monster', 'bescheiden': 'explain', 'baz': 'better', 'sich': 'look! (imperative of sëhen)', 'wie': 'how', 'gewâfent': 'armed',
      'heize': 'am called (heizen)', 'riter': 'knight', 'den': 'the (acc.)', 'sin': 'purpose, intention', 'suochende': 'seeking', 'rîte': 'ride', 'einen': 'a (acc.)', 'mit': 'with', 'strîte': 'would fight (subj. of strîten)',
      'prîset': 'brings renown to', 'sleht': 'kills (slahen)', 'gesige': 'win, defeat: gesige im an, defeat him', 'aber': 'but', 'im': 'him (dat.)', 'an': 'over, against', 'hât': 'holds: hât vür, considers as', 'vür': 'for, as',
      'wirde': 'become (wërden)', 'werder': 'worthier', 'nâhen': 'near, in the neighbourhood', 'kunt': 'known', 'umb': 'umbe: about, of', 'selbe': 'the same; such', 'wâge': 'venture, risk', 'verswîc': 'keep silent about (imperative)', 'wîse': 'direct, show the way (imperative)', 'dar': 'there', 'wand': 'wande: for, because', 'var': 'go, ride (varn)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What is the herdsman’s occupation?', options: ['He tends the wild beasts', 'He guards a castle', 'He is a hermit', 'He hunts for the king'], answer: 0, explain: 'dâ stên ich disen tieren bî.' },
      { id: 'r2', type: 'mc', prompt: 'What would the beasts be glad of, according to the herdsman?', options: ['If he did nothing to them', 'If Kalogreant left', 'If they were fed', 'If they were set free'], answer: 0, explain: 'sî lobeten’z, tæte ich in niht.' },
      { id: 'r3', type: 'mc', prompt: 'What does Kalogreant say he is looking for?', options: ['Adventure', 'A spring', 'His lost horse', 'Shelter for the night'], answer: 0, explain: 'ich suoche âventiure.' },
      { id: 'r4', type: 'mc', prompt: 'What does Kalogreant ask the herdsman to do?', options: ['Show him the way to such a venture', 'Fight with him', 'Lend him a weapon', 'Come to Arthur’s court'], answer: 0, explain: 'daz verswîc mich niht, unde wîse mich dar.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">ich enmac</span> means:', options: ['I cannot', 'I can', 'I may', 'I like'], answer: 0, explain: 'en + mac: a full negative.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">ich’n gehôrt’ bî mînen tagen selhes nie niht gesagen</span> means:', options: ['in all my days I never heard tell of such a thing', 'in my days I always heard such things said', 'I did not fail to hear it, so I heard it', 'these days I hear nothing new'], answer: 0, explain: 'en + nie + niht: negatives reinforce (Iwein 547–548).' },
      { id: 't3', type: 'mc', prompt: '<span class="la">deist</span> =', options: ['daz ist', 'dêr ist', 'diu ist', 'dâ ist'], answer: 0, explain: 'daz + ist.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Dû___ sagest mir.</span>', hint: 'ne attached to dû', answers: ['ne'], full: 'Dûne sagest mir.', explain: 'dû + ne → dûne.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">___ vürhte dir.</span>', hint: 'never, not at all (two syllables)', answers: ['niene', 'Niene'], full: 'Niene vürhte dir.', explain: 'niene = nie ne.' },
      { id: 't6', type: 'mc', prompt: '<span class="la">got enwelle</span> at the head of a clause means:', options: ['unless God will', 'God does not want', 'God wanted', 'may God want'], answer: 0, explain: 'Exceptive en- with the subjunctive.' },
      { id: 't7', type: 'mc', prompt: 'Which word means “anything”?', options: ['iht', 'niht', 'niene', 'nieman'], answer: 0, explain: 'iht in questions, conditions and after negatives.' },
      { id: 't8', type: 'mc', prompt: 'In Middle High German subordinate clauses the verb is:', options: ['usually at the end, but not always', 'always at the end', 'always second', 'always first'], answer: 0, explain: 'daz ich suochende rîte einen man: verb not final.' },
      { id: 't9', type: 'translate', dir: 'mhd-de', source: 'Âventiure? waz ist daz?', model: 'Abenteuer? Was ist das?', accepted: ['Abenteuer? Was ist das?', 'Aventiure? Was ist das?', 'Ein Abenteuer? Was ist das?'] },
      { id: 't10', type: 'translate', dir: 'de-mhd', source: 'Sie fürchten dich nicht.', model: 'Sine vürhtent dich niht.', accepted: ['Sine vürhtent dich niht', 'Si envürhtent dich niht', 'Si vürhtent dich niht', 'Sine vürhtent dich', 'Sî vürhtent dich niht', 'Sine fürhtent dich niht'] },
      { id: 't11', type: 'mc', prompt: 'Who tells the story of the wild man in Iwein?', options: ['Kalogreant, Iwein’s cousin', 'Iwein himself', 'King Arthur', 'Hartmann in person'], answer: 0, explain: 'Kalogreant tells of his failed adventure.' },
      { id: 't12', type: 'mc', prompt: '<span class="la">âventiure</span> comes from:', options: ['Old French aventure', 'Latin aevum', 'Old High German âbent', 'Greek'], answer: 0, explain: 'Latin adventura, through French.' }
    ]
  },

  reference: [
    { title: 'Negative words', headers: ['Negative', 'Meaning', 'Positive'], rows: [
      ['niht', 'not; nothing', 'iht'], ['nie; niene', 'never; not at all', 'ie'], ['niemer', 'never (again)', 'iemer'], ['nieman', 'no one', 'ieman'], ['dehein, kein', 'no', 'dehein (any)'], ['niender', 'nowhere', 'iender'], ['weder … noch', 'neither … nor', 'weder … ode']
    ] },
    { title: 'Contracted forms', headers: ['Form', 'Full'], rows: [
      ['ichn, ine', 'ich en'], ['dûne, erne, sine', 'dû ne, er ne, si ne'], ['nune, sone', 'nû ne, sô ne'], ['mahtû, bistû, soltu', 'maht dû, bist dû, solt dû'], ['deist, deis', 'daz ist'], ['deiswâr, dêswâr', 'daz ist wâr'],
      ['dêr, dez', 'daz er, daz ez'], ['ichz, mirz', 'ich ez, mir ez'], ['sone, dâne', 'sô ne, dâ ne'], ['zem, zer, zen', 'ze dem, ze der, ze den'], ['zêren', 'ze êren']
    ] },
    { title: 'ne in dependent clauses', headers: ['Pattern', 'Meaning'], rows: [
      ['got enwelle …', 'unless God will …'], ['waz mac in gewerren …, sîne loufen …?', 'what can stop them running …?'], ['mich betrâget …, ichne …', 'I am reluctant to …']
    ] }
  ]
});
