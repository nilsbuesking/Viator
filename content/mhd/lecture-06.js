/*
 * Middle High German — Lecture VI: the preterite-present verbs and the subjunctive.
 * Reading: Hartmann von Aue, Der arme Heinrich, lines 171–232 (Montpellier and Salerno), transcribed from the page
 * images of Hermann Paul's edition, 6th edition (Altdeutsche Textbibliothek 3, Halle 1921), pp. 5–7.
 * Source panel: Walther von der Vogelweide, L 124,1–8, from the page image of Lachmann's 2nd edition (Berlin 1843), p. 124.
 * Forms checked against Weinhold, Mhd. Grammatik (1877), §§ 392–402. See CONTENT-CHECKS.md.
 */
Viator.addLecture('mhd', {
  id: 'mhd-06',
  number: 6,
  title: 'Got enwelle der arzât wesen',
  subtitle: 'The preterite-present verbs and the subjunctive; Heinrich and the doctor of Salerno',
  minutes: 60,

  intro: `
    <p>The modal verbs of German, <em>können, mögen, müssen, sollen, dürfen</em> and <em>wissen</em>, have always been odd. Their present tense has no <em>-t</em> in the third person (<em>er kann, er muss, er weiß</em>), and their past is weak (<em>konnte, musste, wusste</em>). The reason is that their present was once a strong preterite. Grammarians call them <strong>preterite-presents</strong>. Middle High German has the same group, with two members German has since lost (<span class="la">turren</span> “dare”, <span class="la">gunnen</span> “grant”), and with meanings that differ from today’s in ways that trip German readers constantly. <span class="la">ich mac</span> means “I can”, not “I like”; <span class="la">ich darf</span> means “I need”, not “I am allowed”.</p>
    <p>These verbs are rarely far from the <strong>subjunctive</strong>, which Middle High German uses more widely than modern German: for reported speech after a past verb (<span class="la">er seite, daz er genislich wære</span>), for anything hypothetical, in relative clauses after a negative (<span class="la">nieman … der sî müge gewinnen</span>), and in the exceptive clause <span class="la">got enwelle</span>, “unless God will”.</p>
    <p>The reading continues <em>Der arme Heinrich</em>. Struck by leprosy, Heinrich travels to the doctors of Montpellier and then of Salerno. The master of Salerno tells him that he can be cured and yet never will be: the only remedy is the heart’s blood of a young woman who gives her life of her own free will. The scene is a dialogue of conditions, possibilities and impossibilities, built almost entirely from modal verbs and subjunctives.</p>
    <p>By the end you should be able to recognise and conjugate the preterite-presents, give their Middle High German meanings, form the present and past subjunctive, and explain the subjunctives of the Salerno scene.</p>
  `,

  background: [
    {
      title: 'Leprosy, Montpellier and Salerno',
      html: `
        <p>Leprosy (<span class="la">miselsuht</span>, from Latin <em>misellus</em>, “wretched”) was the most feared disease of the high Middle Ages. It was thought incurable, and in much of Europe the sick were separated from the community and housed in leper hospitals outside the towns. In the poem Heinrich’s disease is a fall from the height of worldly honour (Lecture III), and the text treats it as a trial sent by God.</p>
        <p>Hartmann sends his hero to the two most famous centres of medicine of his time. The school of Salerno, south of Naples, was renowned from the 11th century, partly through Latin translations of Arabic and Greek medical works made there. Montpellier (<span class="la">Munpasiliere</span>) was becoming a centre of medical teaching in the 12th century. Neither Hartmann nor his audience needed more explanation: to go to Salerno was to go to the best doctors in Christendom.</p>
        <p>The cure the master names, the blood of an innocent, is old. Paul’s introduction notes that Pliny the Elder already reports blood as a remedy for leprosy, and that the motif appears in the legend of Emperor Constantine, who refuses to be healed with children’s blood and is cured by God instead.</p>
      `
    },
    {
      title: 'How a past became a present',
      html: `
        <p>A preterite-present is a verb whose present tense was originally the preterite of a strong verb. <span class="la">ich weiz</span>, “I know”, began as “I have seen”: the same root as Latin <em>vidēre</em>, and the same development as Greek <em>oida</em>, “I know”, literally “I have seen”. A completed act (I have learned, I have got) came to describe a present state (I know, I can).</p>
        <p>This explains the shape of the verbs. The present has the endings of a strong preterite: no ending in the 1st and 3rd singular (<span class="la">ich weiz, ër weiz</span>, like <span class="la">ich reit, ër reit</span>), and a different vowel in the plural (<span class="la">wir wizzen</span>, like <span class="la">wir riten</span>). Having used up their preterite, the verbs made a new weak one: <span class="la">wisse, kunde, mohte, muoste</span>. Modern German keeps all this: <em>er weiß, er kann, er muss</em> without <em>-t</em>; <em>wir wissen, wir können</em> with a different vowel.</p>
        <p><span class="la">wellen</span> (Lecture V) behaves in part like this group, for a different reason: its present singular <span class="la">wil</span> was originally a subjunctive.</p>
      `
    },
    {
      title: 'mahte or mohte: a clue to Hartmann’s dates',
      html: `
        <p>Weinhold’s grammar makes a small observation with large consequences. Hartmann rhymes the preterite <span class="la">mahte</span> (“could”) in his earlier works, <em>Erec</em> and <em>Gregorius</em>, but only <span class="la">mohte</span> in <em>Der arme Heinrich</em> and <em>Iwein</em>; and he uses <span class="la">wesse</span> (“knew”) in rhyme only once, in <em>Erec</em>. Habits of rhyme like these, together with others, are how scholars have put Hartmann’s works in order.</p>
        <p>Paul’s introduction states the usual order, with <em>Der arme Heinrich</em> between <em>Gregorius</em> and <em>Iwein</em>, notes that some have argued it was his last work, and says that the evidence of rhyme technique decides the question for him. The dates of Hartmann’s works are known only in this relative way: none is dated in a document.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Owê war sint verswunden alliu mîniu jâr!<br>ist mir mîn leben getroumet, oder ist ez wâr?<br>daz ich ie wânde daz iht wære, was daz iht?<br>dar nâch hân ich geslâfen und enweiz es niht.<br>nû bin ich erwaht, und ist mir unbekant<br>daz mir hie vor was kündic als mîn ander hant.<br>liut unde lant, dâ ich von kinde bin erzogen,<br>die sint mir frömde [worden] reht als ob ez sî gelogen.</p>
    <p>“Alas, where have all my years vanished? Have I dreamt my life, or is it real? What I always thought was something, was it anything? Since then I have slept and do not know it. Now I have woken, and what I knew before as well as one hand knows the other is strange to me. The people and the land where I was brought up from childhood have become foreign to me, just as if it were a lie.” Walther von der Vogelweide, the opening of the poem known as the Elegy (L 124,1–8), from Lachmann’s 2nd edition (Berlin 1843), p. 124. The square brackets are Lachmann’s: he supplied <span class="la">worden</span>.</p>
    <p><span class="la">enweiz</span>: <span class="la">en</span> + <span class="la">weiz</span>, the preterite-present <span class="la">wizzen</span>. <span class="la">daz iht wære</span>: past subjunctive after a verb of thinking. <span class="la">als ob ez sî gelogen</span>: present subjunctive after “as if”. <span class="la">ist mir mîn leben getroumet</span> uses the impersonal <span class="la">troumen</span> of Lecture V.</p>
  `,

  pronunciation: `
    <h3>The umlaut of the subjunctive</h3>
    <p>The past subjunctive of the preterite-presents has umlaut, and it is often the only difference from the indicative: <span class="la">muoste</span> “had to”, <span class="la">müeste</span> “would have to”; <span class="la">kunde, künde</span>; <span class="la">mohte, möhte</span>; <span class="la">dorfte, dörfte</span>. Say the umlaut clearly: <span class="la">üe</span> is a diphthong, ü + e.</p>
    <p>Manuscripts often do not write the umlaut of <span class="la">u</span>, and editions sometimes follow them: in the reading <span class="la">funde</span> and <span class="la">kunde</span> are past subjunctives, normally spelt <span class="la">fünde, künde</span>.</p>
    <h3>Hartmann’s -ent</h3>
    <p>Paul’s text keeps Hartmann’s Alemannic ending <span class="la">-ent</span> in the 2nd person plural: <span class="la">untrœstent ir</span>, <span class="la">ir enwellent</span>, <span class="la">ir müesent</span>, where other texts have <span class="la">-et</span>. It is a feature of the dialect, not a 3rd person.</p>
    <h3>maht, solt, darft</h3>
    <p>The 2nd singular of the preterite-presents ends in <span class="la">-t</span>, like the strong preterite of old: <span class="la">du maht</span> (with <span class="la">ht</span> as in <em>Macht</em>), <span class="la">du solt, du darft, du weist</span>.</p>
  `,

  grammar: [
    {
      title: '1. The preterite-presents: forms',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Infinitive</th><th>ich, ër</th><th>wir</th><th>Preterite</th></tr></thead>
          <tbody>
            <tr><td class="la">wizzen</td><td class="la">weiz</td><td class="la">wizzen</td><td class="la">wisse, wesse, wiste, weste</td></tr>
            <tr><td class="la">kunnen</td><td class="la">kan</td><td class="la">kunnen</td><td class="la">kunde, konde</td></tr>
            <tr><td class="la">mugen</td><td class="la">mac</td><td class="la">mugen, mügen</td><td class="la">mahte, mohte</td></tr>
            <tr><td class="la">müezen</td><td class="la">muoz</td><td class="la">müezen</td><td class="la">muoste</td></tr>
            <tr><td class="la">suln</td><td class="la">sol, sal</td><td class="la">suln, süln</td><td class="la">solde, solte</td></tr>
            <tr><td class="la">durfen</td><td class="la">darf</td><td class="la">durfen, dürfen</td><td class="la">dorfte</td></tr>
            <tr><td class="la">turren</td><td class="la">tar</td><td class="la">turren</td><td class="la">torste</td></tr>
            <tr><td class="la">tugen</td><td class="la">touc</td><td class="la">tugen</td><td class="la">tohte</td></tr>
            <tr><td class="la">gunnen</td><td class="la">gan</td><td class="la">gunnen</td><td class="la">gunde</td></tr>
          </tbody>
        </table></div>
        <p>The singular of the present has no ending in the 1st and 3rd person and <span class="la">-t</span> or <span class="la">-st</span> in the 2nd: <span class="la">du weist, kanst, maht, muost, solt, darft, tarst</span>. The plural has its own vowel and the ordinary endings: <span class="la">wir mugen, ir muget, si mugen</span>. The subjunctive is built on the plural: <span class="la">ich müge, wizze, künne, müeze, süle, dürfe</span>.</p>
        <p>The preterites are weak, and their subjunctives have umlaut: <span class="la">möhte, künde, müeste, sölte, dörfte</span>. <span class="la">mahte</span> and <span class="la">mohte</span> stand side by side in the period; the background section shows how Hartmann’s choice between them has been used to date his works.</p>
      `
    },
    {
      title: '2. What they mean',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Verb</th><th>Middle High German</th><th>Watch out</th></tr></thead>
          <tbody>
            <tr><td class="la">mugen</td><td>can, be able; may (possibility)</td><td>not <em>mögen</em>, “like”</td></tr>
            <tr><td class="la">kunnen</td><td>know, know how to; be able</td><td>knowledge and skill</td></tr>
            <tr><td class="la">müezen</td><td>must, have to; may, be allowed to</td><td>also permission</td></tr>
            <tr><td class="la">suln</td><td>shall, ought to; will (future)</td><td>often a future</td></tr>
            <tr><td class="la">durfen</td><td>need, have reason to</td><td>not <em>dürfen</em>, “be allowed”</td></tr>
            <tr><td class="la">turren</td><td>dare</td><td>lost in modern German</td></tr>
            <tr><td class="la">tugen</td><td>be of use, be fitting</td><td><em>taugen</em></td></tr>
            <tr><td class="la">gunnen</td><td>grant, not begrudge</td><td><em>gönnen</em></td></tr>
            <tr><td class="la">wizzen</td><td>know</td><td><em>wissen</em></td></tr>
          </tbody>
        </table></div>
        <p>The commonest trap is <span class="la">mugen</span>. <span class="la">wie mac daz wesen?</span> is “how can that be?”, and <span class="la">ich enmac</span> is “I cannot”. Modern <em>mögen</em> in the sense of liking came later; the older sense survives in <em>das mag sein</em> and <em>vermögen</em>. Physical or general ability is <span class="la">mugen</span>; <span class="la">kunnen</span> is closer to knowing how, as in <em>Kunst, kundig</em>.</p>
        <p><span class="la">durfen</span> means “need”: <span class="la">ir endurfet niht sorgen</span>, “you need not worry”. The meaning of permission moved to <em>dürfen</em> later. <span class="la">müezen</span>, conversely, could still mean “may”: <span class="la">got müeze iuch behüeten</span>, “may God protect you”. <span class="la">suln</span> often forms a future: <span class="la">ez sol ze Salerne geschehen</span>, “it shall happen at Salerno”, later in the poem.</p>
      `
    },
    {
      title: '3. The present subjunctive',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>gëben</th><th>sîn</th><th>mugen</th></tr></thead>
          <tbody>
            <tr><th>ich</th><td class="la">gëbe</td><td class="la">sî</td><td class="la">müge</td></tr>
            <tr><th>du</th><td class="la">gëbest</td><td class="la">sîst</td><td class="la">mügest</td></tr>
            <tr><th>ër</th><td class="la">gëbe</td><td class="la">sî</td><td class="la">müge</td></tr>
            <tr><th>wir</th><td class="la">gëben</td><td class="la">sîn</td><td class="la">mügen</td></tr>
            <tr><th>ir</th><td class="la">gëbet</td><td class="la">sît</td><td class="la">müget</td></tr>
            <tr><th>si</th><td class="la">gëben</td><td class="la">sîn</td><td class="la">mügen</td></tr>
          </tbody>
        </table></div>
        <p>The present subjunctive has <span class="la">-e</span> in the 1st and 3rd singular and the ordinary endings elsewhere, with the infinitive’s vowel (<span class="la">ër gëbe</span>, not <span class="la">ër gibet</span>). It is used:</p>
        <ul>
          <li>for <strong>wishes and requests</strong>: <span class="la">got gebe iu heil</span>, “may God give you luck”; <span class="la">got müeze iuch behüeten</span>;</li>
          <li>in <strong>reported speech</strong> after a present verb: <span class="la">sî jehent er lebe noch hiute</span> (Lecture IV);</li>
          <li>in <strong>relative and consecutive clauses after a negative</strong>: <span class="la">nu enist aber nieman sô rîch … der sî müge gewinnen</span>, “no one is so rich … that he could obtain it”;</li>
          <li>in <strong>exceptive clauses</strong> with <span class="la">en-</span>: <span class="la">got enwelle der arzât wesen</span>, “unless God will be the physician” (Lecture V);</li>
          <li>after <strong>als ob</strong>: <span class="la">reht als ob ez sî gelogen</span> (Walther).</li>
        </ul>
      `
    },
    {
      title: '4. The past subjunctive',
      html: `
        <p>The past subjunctive is formed as Lecture II and Lecture V described: strong verbs from the plural stem with umlaut (<span class="la">wâren → wære</span>, <span class="la">funden → fünde</span>, <span class="la">liten → lite</span>); weak verbs like the indicative, Rückumlaut verbs with umlaut (<span class="la">brente</span>); preterite-presents with umlaut (<span class="la">müeste, künde</span>). It is used:</p>
        <ul>
          <li>for <strong>unreal conditions</strong>: <span class="la">und wære der arzenîe alsô daz man sî veile funde …, ich enlieze iuch niht verderben</span>, “if the remedy were such that one could buy it …, I would not let you perish”;</li>
          <li>in <strong>reported speech after a past verb</strong>: <span class="la">der seite ime …, daz er genislich wære und wære doch iemer ungenesen</span>. Middle High German follows the tense of the main verb here, like English and Latin. Modern standard German would use the present subjunctive, <em>dass er heilbar sei</em>;</li>
          <li>after verbs of <strong>thinking and believing</strong>: <span class="la">er gedâhte daz er wære vil lîhte genisbære</span>;</li>
          <li>for <strong>possibility and politeness</strong>: <span class="la">des wæret ir genislîch</span>, “by that you would be curable”; <span class="la">ir müesent haben eine maget</span>, “you would have to have a maiden”;</li>
          <li>in relative clauses describing something <strong>required or imagined</strong>: <span class="la">eine maget diu … des willen wære daz sî den tôt durch iuch lite</span>, “a maiden who would be willing to suffer death for you”.</li>
        </ul>
      `
    },
    {
      title: '5. Conditions without “wenn”',
      html: `
        <p>Middle High German has a conjunction for “if”, <span class="la">obe, ob</span>, and uses <span class="la">swenne</span> for “whenever”. But conditions are very often made by putting the verb first, as modern German still can (<em>Kommt er, so …</em>):</p>
        <ul>
          <li><strong>Real</strong>: <span class="la">bin ich genislich, sô genise ich</span>, “if I can be cured, I shall recover”. Indicative in both halves.</li>
          <li><strong>Unreal</strong>: <span class="la">und wære der arzenîe alsô …, ich enlieze iuch niht verderben</span>. Past subjunctive in both halves; <span class="la">und</span> can introduce such a clause.</li>
          <li>The main clause is often introduced by <span class="la">sô</span>, as modern <em>so</em>: <span class="la">kumt iemen …</span> (Lecture II); <span class="la">ist im der lîp erstorben, sô lebt doch iemer sîn name</span> (Lecture IV).</li>
        </ul>
        <p>The <strong>exceptive</strong> clause, “unless”, is the negative counterpart: a verb with <span class="la">en-</span>, usually in the subjunctive, at the head of its clause. Hartmann’s <span class="la">ir enwellent</span> does not show the mood, since <span class="la">-ent</span> serves both. <span class="la">ir enwellent iuwer meisterschaft … brechen …, ich mache iuch mir alsô holt</span>: “unless you mean to break your art …, I will make you so well disposed to me …”. Lecture VII treats <span class="la">en-</span> in full.</p>
      `
    }
  ],

  vocab: [
    // preterite-presents
    { id: 'wizzen', head: 'wizzen', la: 'wizzen (ich weiz, wir wizzen), wisse/wesse/wiste/weste', pos: 'verb, preterite-present', en: 'know', de: 'wissen' },
    { id: 'kunnen', head: 'kunnen', la: 'kunnen (ich kan, wir kunnen), kunde/konde', pos: 'verb, preterite-present', en: 'know, know how to; be able', de: 'kennen, verstehen; können' },
    { id: 'mugen', head: 'mugen', la: 'mugen (ich mac, du maht, wir mugen), mahte/mohte', pos: 'verb, preterite-present', en: 'can, be able; may', de: 'können, vermögen', note: 'False friend: not mögen in the sense of liking.' },
    { id: 'muezen', head: 'müezen', la: 'müezen (ich muoz, wir müezen), muoste', pos: 'verb, preterite-present', en: 'must, have to; may, be allowed to', de: 'müssen; dürfen, mögen', note: 'got müeze iuch behüeten: may God protect you.' },
    { id: 'suln', head: 'suln', la: 'suln (ich sol, du solt, wir suln), solde/solte', pos: 'verb, preterite-present', en: 'shall, ought to; will (future)', de: 'sollen; werden' },
    { id: 'durfen', head: 'durfen', la: 'durfen (ich darf, wir durfen), dorfte', pos: 'verb, preterite-present', en: 'need, have reason to', de: 'brauchen, bedürfen', note: 'False friend: not “be allowed”.' },
    { id: 'turren', head: 'turren', la: 'turren (ich tar, wir turren), torste', pos: 'verb, preterite-present', en: 'dare', de: 'wagen', note: 'Lost in modern German; related to English dare.' },
    { id: 'tugen', head: 'tugen', la: 'tugen (ez touc), tohte', pos: 'verb, preterite-present', en: 'be of use, be fit; be good', de: 'taugen, nützen', note: 'Related to tugent (Lecture III).' },
    { id: 'gunnen', head: 'gunnen', la: 'gunnen (ich gan, wir gunnen), gunde', pos: 'verb, preterite-present', en: 'grant, allow, not begrudge', de: 'gönnen' },
    // nouns
    { id: 'arzat', head: 'arzât', la: 'arzât, arzâtes', g: 'm', pos: 'noun', en: 'physician, doctor', de: 'Arzt', note: 'From Latin archiater, chief physician.' },
    { id: 'arzenie', head: 'arzenîe', la: 'arzenîe', g: 'f', pos: 'noun', en: 'medicine, remedy; the art of medicine', de: 'Arznei; Heilkunst' },
    { id: 'meister', head: 'meister', la: 'meister', g: 'm', pos: 'noun', en: 'master; teacher; physician, scholar', de: 'Meister; Lehrer; Arzt, Gelehrter' },
    { id: 'genist', head: 'genist', la: 'genist', g: 'f', pos: 'noun', en: 'cure, recovery; rescue', de: 'Heilung, Genesung; Rettung' },
    { id: 'suht', head: 'suht', la: 'suht; pl. sühte', g: 'f', pos: 'noun', en: 'sickness, disease', de: 'Krankheit', note: 'False friend: not Sucht. Compare Gelbsucht, Schwindsucht, miselsuht (leprosy).' },
    { id: 'list', head: 'list', la: 'list', g: 'm', pos: 'noun', en: 'skill, knowledge, art; cunning', de: 'Kunst, Wissen; List', note: 'Often neutral or admiring: der wîsen arzâte list.' },
    { id: 'gedinge', head: 'gedinge', la: 'gedinge', g: 'n', pos: 'noun', en: 'hope, expectation; condition, agreement', de: 'Hoffnung; Bedingung, Vertrag' },
    { id: 'trost', head: 'trôst', la: 'trôst; untrôst', g: 'm', pos: 'noun', en: 'confidence, hope; comfort; untrôst: despair, discouragement', de: 'Zuversicht, Hoffnung; Trost; Hoffnungslosigkeit' },
    { id: 'wille', head: 'wille', la: 'wille, willen', g: 'm', pos: 'noun, weak', en: 'will, intention; readiness', de: 'Wille, Absicht' },
    { id: 'golt', head: 'golt', la: 'golt, goldes', g: 'n', pos: 'noun', en: 'gold', de: 'Gold' },
    { id: 'herzenbluot', head: 'herzenbluot', la: 'herzenbluot', g: 'n', pos: 'noun', en: 'heart’s blood', de: 'Herzblut' },
    // adjectives and adverbs
    { id: 'genislich', head: 'genislich', la: 'genislich, genisbære', pos: 'adjective', en: 'curable', de: 'heilbar', note: 'From genësen; ungenesen: uncured.' },
    { id: 'seltsaene', head: 'seltsæne', la: 'seltsæne', pos: 'adjective', en: 'rare; strange, wonderful', de: 'selten; seltsam, wunderbar' },
    { id: 'veile', head: 'veile', la: 'veile', pos: 'adjective', en: 'for sale', de: 'feil, käuflich' },
    { id: 'holt', head: 'holt', la: 'holt', pos: 'adjective', en: 'well disposed, gracious, loyal (+ dat.)', de: 'hold, gewogen, treu', note: 'ich mache iuch mir holt: I will make you well disposed to me.' },
    { id: 'unmuegelich', head: 'unmügelich', la: 'unmügelich', pos: 'adjective', en: 'impossible', de: 'unmöglich' },
    { id: 'zehant', head: 'zehant', la: 'zehant', pos: 'adverb', en: 'at once, immediately', de: 'sogleich, sofort', note: 'ze hant: “to hand”.' },
    { id: 'schiere', head: 'schiere', la: 'schiere', pos: 'adverb', en: 'soon, quickly', de: 'bald, schnell', note: 'Modern schier, “almost”, has changed its meaning.' },
    // verbs
    { id: 'truwen', head: 'trûwen', la: 'trûwen, triuwen', pos: 'verb, weak', en: 'trust; be confident (+ inf.)', de: 'trauen, vertrauen; sich zutrauen' },
    { id: 'vrumen', head: 'vrumen', la: 'vrumen, frumen', pos: 'verb, weak', en: 'help, be of use; do, accomplish', de: 'nützen, helfen; ausführen', note: 'Related to fromm, which first meant “useful, capable”.' },
    { id: 'ernern', head: 'ernern', la: 'ernern', pos: 'verb, weak', en: 'save, keep alive, heal', de: 'retten, am Leben erhalten, heilen', note: 'Causative of genësen: to make someone recover.' },
    { id: 'verderben', head: 'verdërben', la: 'verdërben, verdarp, verdurben, verdorben', pos: 'verb, strong III', en: 'perish, die; be ruined', de: 'zugrunde gehen, umkommen', note: 'Strong and intransitive; the weak verdërben means “destroy”.' },
    { id: 'liden', head: 'lîden', la: 'lîden, leit, liten, geliten', pos: 'verb, strong I', en: 'suffer, endure', de: 'leiden, erdulden' },
    { id: 'versagen', head: 'versagen', la: 'versagen', pos: 'verb, weak', en: 'refuse, deny', de: 'versagen, verweigern' }
  ],

  grammarCards: [
    { id: 'mh6-what', front: 'What is a preterite-present?', back: 'A verb whose present was once a strong preterite: no ending in the 3rd sg. (ër weiz), new weak preterite (wisse)' },
    { id: 'mh6-weiz', front: 'ich weiz: origin', back: '“I have seen” → “I know” (Latin videre, Greek oida)' },
    { id: 'mh6-mac', front: 'ich mac', back: 'I can, I am able (not “I like”)' },
    { id: 'mh6-darf', front: 'ich darf', back: 'I need (not “I am allowed”)' },
    { id: 'mh6-muoz', front: 'got müeze iuch behüeten', back: 'may God protect you: müezen can express a wish or permission' },
    { id: 'mh6-sol', front: 'ez sol ze Salerne geschehen', back: 'it will (shall) happen at Salerno: suln as a future' },
    { id: 'mh6-tar', front: 'ich tar; torste', back: 'I dare; dared (turren)' },
    { id: 'mh6-forms', front: '3rd sg. of wizzen, kunnen, mugen, müezen, suln, durfen', back: 'weiz, kan, mac, muoz, sol, darf' },
    { id: 'mh6-pret', front: 'Preterites of mugen, kunnen, müezen, suln, durfen', back: 'mahte/mohte, kunde, muoste, solde, dorfte' },
    { id: 'mh6-subj', front: 'Past subjunctive of müezen, kunnen, mugen', back: 'müeste, künde, möhte (umlaut)' },
    { id: 'mh6-presubj', front: 'Present subjunctive 3rd sg. of gëben, sîn, mugen', back: 'gëbe, sî, müge' },
    { id: 'mh6-reported', front: 'der seite ime, daz er genislich wære', back: 'Reported speech after a past verb: past subjunctive (modern: sei)' },
    { id: 'mh6-neg', front: 'nieman … der sî müge gewinnen', back: 'no one … who could obtain it: subjunctive after a negative' },
    { id: 'mh6-unless', front: 'got enwelle der arzât wesen', back: 'unless God will be the physician (exceptive en- + subjunctive)' },
    { id: 'mh6-cond', front: 'bin ich genislich, sô genise ich', back: 'if I can be cured, I shall recover: condition by inversion' },
    { id: 'mh6-unreal', front: 'wære der arzenîe alsô …, ich enlieze iuch niht verderben', back: 'if the remedy were …, I would not let you perish: unreal condition' },
    { id: 'mh6-ent', front: 'untrœstent ir; ir müesent', back: 'Hartmann’s Alemannic 2nd pl. ending -ent' },
    { id: 'mh6-suht', front: 'suht', back: 'sickness (not Sucht)' },
    { id: 'mh6-mohte', front: 'mahte vs. mohte in Hartmann', back: 'mahte rhymed in Erec and Gregorius, only mohte in Der arme Heinrich and Iwein (Weinhold)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">wie mac daz wesen?</span> means:', options: ['How can that be?', 'How does he like that?', 'How may I be?', 'How was that?'], answer: 0, explain: 'mugen = can, be able.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">ir endurfet niht sorgen</span> means:', options: ['you need not worry', 'you are not allowed to worry', 'you may not worry', 'you dare not worry'], answer: 0, explain: 'durfen = need.' },
    { id: 'e3', type: 'mc', prompt: 'Why is there no <em>-t</em> in <span class="la">ër weiz</span>?', options: ['Its present was once a strong preterite', 'It is a subjunctive', 'It is a mistake of the scribe', 'It is a weak verb'], answer: 0, explain: 'Like ër reit: no ending in the 3rd sg. of the strong preterite.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">got enwelle der arzât wesen</span> means:', options: ['unless God will be the physician', 'God does not want to be the physician', 'God wanted to be the physician', 'may God be the physician'], answer: 0, explain: 'Exceptive en- with the subjunctive.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">ir müesent haben eine maget</span> means:', options: ['you would have to have a maiden', 'you must have had a maiden', 'you may have a maiden', 'you had to have a maiden (indicative)'], answer: 0, explain: 'müesent: past subjunctive of müezen, with Hartmann’s -ent.' },
    { id: 'e6', type: 'mc', prompt: 'In <span class="la">der seite ime …, daz er genislich wære</span>, modern German would say:', options: ['dass er heilbar sei', 'dass er heilbar wäre (the only possible form)', 'dass er heilbar war', 'dass er heilbar ist (only)'], answer: 0, explain: 'MHG follows the past tense of the main verb; modern standard German prefers Konjunktiv I.' },
    { id: 'e7', type: 'mc', prompt: '<span class="la">suht</span> means:', options: ['sickness', 'addiction', 'search', 'longing'], answer: 0, explain: 'A false friend; compare Gelbsucht, Schwindsucht.' },
    { id: 'e8', type: 'mc', prompt: 'Past subjunctive of <span class="la">kunnen</span>:', options: ['künde', 'kunde', 'kunne', 'konde'], answer: 0, explain: 'Preterite-presents have umlaut in the past subjunctive.' },
    { id: 'e9', type: 'mc', prompt: '<span class="la">bin ich genislich, sô genise ich</span> is:', options: ['a real condition by inversion: if I can be cured, I will recover', 'a question and its answer', 'an unreal condition', 'a wish'], answer: 0, explain: 'Verb first, sô in the main clause, indicative.' },
    { id: 'e10', type: 'mc', prompt: 'Which verb has been lost in modern German?', options: ['turren (dare)', 'tugen (taugen)', 'gunnen (gönnen)', 'wizzen (wissen)'], answer: 0, explain: 'turren, tar, torste.' },
    { id: 'e11', type: 'match', prompt: 'Match the infinitive to the 3rd singular present.', pairs: [
      ['wizzen', 'weiz'], ['kunnen', 'kan'], ['mugen', 'mac'], ['müezen', 'muoz'], ['durfen', 'darf']
    ] },
    { id: 'e12', type: 'match', prompt: 'Match the verb to its Middle High German meaning.', pairs: [
      ['mugen', 'be able'], ['durfen', 'need'], ['turren', 'dare'], ['tugen', 'be of use'], ['gunnen', 'grant']
    ] },
    { id: 'e13', type: 'gap', prompt: '<span class="la">Ër w___z ez niht.</span>', hint: 'he knows', answers: ['ei'], full: 'Ër weiz ez niht.', explain: 'wizzen: ich weiz, ër weiz.' },
    { id: 'e14', type: 'gap', prompt: '<span class="la">Wir m___gen ez niht getuon.</span>', hint: 'we cannot', answers: ['u', 'ü'], full: 'Wir mugen ez niht getuon.', explain: 'Plural mugen (also mügen).' },
    { id: 'e15', type: 'gap', prompt: '<span class="la">Si m___ste ez lîden.</span>', hint: 'she would have to', answers: ['üe', 'ue'], full: 'Si müeste ez lîden.', explain: 'Past subjunctive with umlaut: müeste.' },
    { id: 'e16', type: 'gap', prompt: '<span class="la">Du ___ ez tuon.</span>', hint: 'you shall (2nd sg. of suln)', answers: ['solt'], full: 'Du solt ez tuon.', explain: 'du solt: -t in the 2nd sg.' },
    { id: 'e17', type: 'gap', prompt: '<span class="la">Got geb___ iu heil.</span>', hint: 'may God give (present subjunctive)', answers: ['e'], full: 'Got gebe iu heil.', explain: 'Present subjunctive: -e, with the infinitive’s vowel.' },
    { id: 'e18', type: 'paradigm', prompt: 'Give the present of <span class="la">wizzen</span> and <span class="la">mugen</span>.', headers: ['wizzen', 'mugen'], rows: [
      { label: 'ich', answers: ['weiz', 'mac'] },
      { label: 'du', answers: ['weist', 'maht'] },
      { label: 'ër', answers: ['weiz', 'mac'] },
      { label: 'wir', answers: ['wizzen', 'mugen|mügen'] },
      { label: 'ir', answers: ['wizzet', 'muget|müget'] },
      { label: 'si', answers: ['wizzen', 'mugen|mügen'] }
    ] },
    { id: 'e19', type: 'paradigm', prompt: 'Give the preterite indicative and the past subjunctive (3rd sg.).', headers: ['Indicative', 'Subjunctive'], rows: [
      { label: 'müezen', answers: ['muoste', 'müeste'] },
      { label: 'kunnen', answers: ['kunde|konde', 'künde'] },
      { label: 'mugen', answers: ['mohte|mahte', 'möhte|mähte'] },
      { label: 'durfen', answers: ['dorfte', 'dörfte'] }
    ] },
    { id: 'e20', type: 'order', prompt: 'Put the German translation in order.', source: 'ich enlieze iuch niht verderben', tokens: ['Ich ließe', 'Euch', 'nicht', 'zugrunde gehen.'], explain: 'enlieze: past subjunctive of lâzen with en-.' },
    { id: 'e21', type: 'translate', dir: 'mhd-de', source: 'Ich weiz ez niht.', model: 'Ich weiß es nicht.', accepted: ['Ich weiß es nicht'] },
    { id: 'e22', type: 'translate', dir: 'mhd-de', source: 'Er mac niht genesen.', model: 'Er kann nicht genesen.', accepted: ['Er kann nicht genesen', 'Er kann nicht gesund werden', 'Er kann nicht geheilt werden', 'Er vermag nicht zu genesen'] },
    { id: 'e23', type: 'translate', dir: 'mhd-en', source: 'Des wæret ir genislîch.', model: 'By that you would be curable.', accepted: ['By that you would be curable', 'Through that you would be curable', 'With that you would be curable', 'By it you would be curable', 'Through it you would be curable', 'With it you would be curable', 'By that you could be cured', 'By it you could be cured', 'Through it you could be cured', 'With it you could be cured'] },
    { id: 'e24', type: 'translate', dir: 'de-mhd', source: 'Er soll kommen.', model: 'Er sol komen.', accepted: ['Er sol komen', 'Er sal komen'] },
    { id: 'e25', type: 'translate', dir: 'de-mhd', source: 'Ich kann es nicht.', model: 'Ich enmac ez niht.', accepted: ['Ich enmac ez niht', 'Ich mac ez niht', 'Ich enkan ez niht', 'Ich kan ez niht', 'Ich enmac es niht', 'Ich mac es niht'] },
    { id: 'e26', type: 'mc', prompt: 'Why can Heinrich not simply buy the cure?', options: ['It is the heart’s blood of a maiden who dies for him willingly', 'The doctor refuses all payment', 'The remedy is only in Montpellier', 'It costs more than his whole fortune'], answer: 0, explain: 'niuwan der mägede herzenbluot … daz sî den tôt durch iuch lite.' },
    { id: 'e27', type: 'mc', prompt: 'Where did Heinrich go first?', options: ['Montpellier', 'Salerno', 'Rome', 'Paris'], answer: 0, explain: 'gegen Munpasiliere, then gegen Salerne.' }
  ],

  reading: {
    title: 'Hartmann von Aue, Der arme Heinrich, lines 171–232',
    note: 'Authentic text: Heinrich at Montpellier and Salerno, transcribed from the page images of Hermann Paul’s edition, 6th edition (Altdeutsche Textbibliothek 3, Halle 1921), pp. 5–7. Paul prints genislich and genislîch side by side as here. The blank lines stand for his paragraph indents. Tap any word.',
    text: 'er gedâhte daz er wære\nvil lîhte genisbære,\nund fuor alsô drâte\nnâch der arzâte râte\ngegen Munpasiliere.\ndâ vant er vil schiere\nniuwan den untrôst\ndaz er niemer würde erlôst.\n\nDaz hôrte er vil ungerne,\nund fuor gegen Salerne\nund suochte ouch dâ durch genist\nder wîsen arzâte list.\nden besten meister er dâ vant.\nder seite ime zehant\nein seltsæne mære,\ndaz er genislich wære\nund wære doch iemer ungenesen.\ndô sprach er ‘wie mac daz wesen?\ndiu rede ist harte unmügelich.\nbin ich genislich, sô genise ich:\nund swaz mir für wirt geleit\nvon guote oder von arbeit,\ndaz trûwe ich vollebringen.’\n‘nu lât daz gedingen’\nsprach der meister aber dô:\n‘iuwerre sühte ist alsô\n(was frumet daz ichz iu kunt tuo?):\ndâ hœret arzenîe zuo:\ndes wæret ir genislîch.\nnu enist aber nieman sô rîch\nnoch von sô starken sinnen\nder sî müge gewinnen.\ndes sint ir iemer ungenesen,\ngot enwelle der arzât wesen.’\n\nDô sprach der arme Heinrich\n‘war umbe untrœstent ir mich?\njâ hân ich guotes wol die kraft:\nir enwellent iuwer meisterschaft\nund iuwer reht ouch brechen\nund dar zuo versprechen\nbeidiu mîn silber und mîn golt,\nich mache iuch mir alsô holt\ndaz ir mich harte gerne ernert.’\n‘mir wære der wille unrewert’\nsprach der meister aber dô:\n‘und wære der arzenîe alsô\ndaz man sî veile funde\noder daz man sî kunde\nmit deheinen dingen erwerben,\nich enlieze iuch niht verderben.\nnu enmac des leider niht gesîn:\ndâ von muoz iu diu helfe mîn\ndurch alle nôt sîn versaget.\nir müesent haben eine maget\ndiu vollen vrîbære\nund ouch des willen wære\ndaz sî den tôt durch iuch lite.\nnu enist ez niht der liute site\ndaz ez iemen gerne tuo.\nsô hœrt ouch anders niht dar zuo\nniuwan der mägede herzenbluot:\ndaz wære für iuwer suht guot.’',
    translations: [
      { label: 'German translation', text: 'Er dachte, er sei vielleicht doch heilbar, und reiste in großer Eile auf den Rat der Ärzte nach Montpellier. Dort fand er sehr bald nur die trostlose Auskunft, dass er niemals erlöst würde.\n\nDas hörte er sehr ungern, und er reiste nach Salerno und suchte auch dort, um geheilt zu werden, die Kunst der weisen Ärzte. Den besten Meister fand er dort. Der sagte ihm sogleich eine seltsame Nachricht: dass er heilbar sei und doch für immer ungeheilt bleiben werde. Da sprach er: „Wie kann das sein? Diese Rede ist ganz unmöglich. Bin ich heilbar, so werde ich gesund; und was mir auferlegt wird an Besitz oder an Mühe, das traue ich mir zu zu vollbringen.“ „Lasst diese Hoffnung“, antwortete der Meister da. „Mit Eurer Krankheit ist es so – was nützt es, dass ich es Euch sage? –: Dazu gehört eine Arznei; durch sie wärt Ihr heilbar. Nun ist aber niemand so reich noch von so starkem Verstand, dass er sie erlangen könnte. Darum bleibt Ihr für immer ungeheilt, es sei denn, Gott wolle der Arzt sein.“\n\nDa sprach der arme Heinrich: „Warum nehmt Ihr mir die Hoffnung? Ich habe wahrlich Reichtum genug. Wenn Ihr nicht Eure Kunst und Euer Recht brechen und dazu mein Silber und mein Gold zurückweisen wollt, so mache ich Euch mir so gewogen, dass Ihr mich sehr gern heilt.“ „An meinem Willen fehlte es nicht“, antwortete der Meister da. „Wäre es mit der Arznei so, dass man sie zu kaufen fände oder dass man sie auf irgendeine Weise erlangen könnte, ich ließe Euch nicht zugrunde gehen. Nun kann das leider nicht sein: Darum muss Euch meine Hilfe unter allen Umständen versagt bleiben. Ihr müsstet ein Mädchen haben, das ganz im heiratsfähigen Alter und auch bereit wäre, für Euch den Tod zu erleiden. Nun ist es nicht die Art der Menschen, dass jemand das gern tut. Und es gehört auch nichts anderes dazu als das Herzblut des Mädchens: Das wäre gut für Eure Krankheit.“' },
      { label: 'English translation', text: 'He thought that he might well be curable after all, and travelled in great haste, on the advice of the physicians, to Montpellier. There he very soon found nothing but the cheerless verdict that he would never be cured.\n\nHe heard this with great displeasure, and went on to Salerno, and there too, in hope of a cure, sought the skill of the wise physicians. He found the best master there, who at once told him a strange thing: that he could be cured and yet would remain uncured for ever. Then he said: “How can that be? What you say is quite impossible. If I can be cured, I shall recover; and whatever is laid upon me, in wealth or in hardship, I am confident I can accomplish it.” “Give up that hope,” the master answered. “Your sickness is such – what use is it for me to tell you? – that a remedy belongs to it, by which you could be cured. But no one is so rich, or of such strong mind, that he could obtain it. So you will remain uncured for ever, unless God will be the physician.”\n\nThen poor Heinrich said: “Why do you take away my hope? I certainly have wealth enough. Unless you mean to break your art and your duty, and refuse my silver and my gold besides, I will make you so well disposed to me that you will be very glad to heal me.” “My will would not be lacking,” the master answered. “If the remedy were such that one could find it for sale, or obtain it by any means, I would not let you perish. But that, alas, cannot be; so my help must be denied you, whatever your need. You would have to have a maiden who was fully of marriageable age and also willing to suffer death for you. Now it is not people’s way that anyone would do that gladly. And nothing else belongs to it but the maiden’s heart’s blood: that would be good for your sickness.”' }
    ],
    notes: [
      { ref: 'er gedâhte daz er wære / vil lîhte genisbære', html: 'Past subjunctive after a verb of thinking. <span class="la">vil lîhte</span>: “quite possibly” (<span class="la">lîhte</span> = <em>vielleicht</em>). <span class="la">genisbære</span>, like <span class="la">genislich</span>, is formed from <span class="la">genësen</span>: “able to recover”.' },
      { ref: 'nâch der arzâte râte / gegen Munpasiliere', html: '<span class="la">der arzâte</span>: genitive plural. <span class="la">Munpasiliere</span>: Montpellier, in a form adapted to German pronunciation.' },
      { ref: 'daz er niemer würde erlôst', html: '<span class="la">würde</span>: past subjunctive of <span class="la">wërden</span>, in reported speech.' },
      { ref: 'und suochte ouch dâ durch genist / der wîsen arzâte list', html: '<span class="la">durch genist</span>: “for the sake of a cure”. <span class="la">list</span> is skill or knowledge, not only cunning.' },
      { ref: 'der seite ime zehant / ein seltsæne mære, / daz er genislich wære / und wære doch iemer ungenesen', html: 'Reported speech after a past verb, with the past subjunctive. Modern standard German would use the present subjunctive: <em>dass er heilbar sei und doch …</em> The paradox is the hinge of the poem: curable in principle, uncured in fact.' },
      { ref: 'wie mac daz wesen', html: '<span class="la">mac</span>: “can” (<span class="la">mugen</span>), not “likes”.' },
      { ref: 'bin ich genislich, sô genise ich', html: 'A real condition by inversion, with <span class="la">sô</span> at the head of the main clause: “if I am curable, I shall recover”. <span class="la">genise</span>: present of <span class="la">genësen</span> with <span class="la">i</span> in the singular (Lecture I), used for the future.' },
      { ref: 'und swaz mir für wirt geleit … daz trûwe ich vollebringen', html: '<span class="la">für legen</span>: “lay before, impose”. <span class="la">trûwen</span> with an infinitive: “be confident that one can”.' },
      { ref: 'nu lât daz gedingen', html: '<span class="la">lât</span>: imperative plural of <span class="la">lân</span> (Lecture V). <span class="la">gedinge</span>: hope.' },
      { ref: 'iuwerre sühte ist alsô / (was frumet daz ichz iu kunt tuo?)', html: '<span class="la">iuwerre sühte</span>: genitive, “with your sickness it is thus”. <span class="la">suht</span> means sickness. <span class="la">vrumen</span>: “be of use”; <span class="la">kunt tuon</span>: “make known”; <span class="la">ichz</span> = <span class="la">ich ez</span>. Paul prints <span class="la">was</span> for <span class="la">waz</span> here.' },
      { ref: 'des wæret ir genislîch', html: 'Past subjunctive of possibility: “by that you would be curable”. <span class="la">des</span>: genitive, “through it”.' },
      { ref: 'nu enist aber nieman sô rîch … / der sî müge gewinnen', html: 'Present subjunctive in a relative clause after a negative: “no one is so rich … that he could obtain it”. <span class="la">sî</span> refers to the <span class="la">arzenîe</span>.' },
      { ref: 'got enwelle der arzât wesen', html: 'An exceptive clause: “unless God will be the physician”. The phrase anticipates the end of the poem.' },
      { ref: 'war umbe untrœstent ir mich?', html: '<span class="la">untrœsten</span>: “deprive of hope”. <span class="la">-ent</span> is Hartmann’s Alemannic ending of the 2nd plural.' },
      { ref: 'ir enwellent iuwer meisterschaft … brechen / … ich mache iuch mir alsô holt', html: 'Another exceptive clause: “unless you mean to break your art and your duty and refuse my silver and gold, I will make you so well disposed to me …”. <span class="la">versprëchen</span>: “refuse” (Lecture V). <span class="la">holt</span> with the dative: “well disposed to”.' },
      { ref: 'mir wære der wille unrewert', html: 'Literally “the will would not be denied to me”: I would be entirely willing. The rare word <span class="la">unrewert</span> is listed for checking.' },
      { ref: 'und wære der arzenîe alsô / daz man sî veile funde / oder daz man sî kunde … erwerben, / ich enlieze iuch niht verderben', html: 'An unreal condition by inversion, introduced by <span class="la">und</span>; every verb is a past subjunctive. <span class="la">funde</span> and <span class="la">kunde</span> are past subjunctives; most editions would write <span class="la">fünde, künde</span>, but Upper German manuscripts often leave the umlaut of <span class="la">u</span> unmarked, and Paul’s text does not show it here. <span class="la">veile</span>: “for sale”. <span class="la">verdërben</span>: “perish”.' },
      { ref: 'nu enmac des leider niht gesîn', html: '<span class="la">enmac</span>: “cannot”. <span class="la">des</span>: partitive genitive with <span class="la">niht</span>.' },
      { ref: 'dâ von muoz iu diu helfe mîn / durch alle nôt sîn versaget', html: '<span class="la">muoz</span>: “must”. <span class="la">diu helfe mîn</span>: the possessive after its noun, common in verse. <span class="la">durch alle nôt</span>: “whatever the need, necessarily”.' },
      { ref: 'ir müesent haben eine maget / diu vollen vrîbære / und ouch des willen wære / daz sî den tôt durch iuch lite', html: 'Three subjunctives: <span class="la">müesent</span> (would have to), <span class="la">wære</span> (would be, in a relative clause describing what is required) and <span class="la">lite</span> (past subjunctive of <span class="la">lîden</span>, “suffer”). <span class="la">vrîbære</span>: “marriageable”, of age to be married. <span class="la">des willen</span>: genitive, “of the will, willing”.' },
      { ref: 'nu enist ez niht der liute site / daz ez iemen gerne tuo', html: 'Present subjunctive <span class="la">tuo</span> after a negative. <span class="la">site</span>: masculine, “custom” (Lecture IV).' },
      { ref: 'niuwan der mägede herzenbluot', html: '<span class="la">niuwan</span>: “nothing but, only”. <span class="la">mägede</span>: genitive singular of <span class="la">maget</span>, with the umlaut of the feminine <em>i</em>-stems (Lecture III).' }
    ],
    glosses: {
      'er': 'he', 'gedâhte': 'thought (denken)', 'daz': 'that; the; this', 'wære': 'were, would be (past subj. of sîn)', 'vil': 'very; quite', 'lîhte': 'perhaps (vil lîhte, quite possibly)', 'genisbære': 'curable',
      'und': 'and', 'fuor': 'went, travelled (varn)', 'alsô': 'so; such', 'drâte': 'quickly', 'nâch': 'after, according to', 'der': 'the; of the (gen.); who (relative)', 'arzâte': 'physicians (gen. pl. of arzât)', 'râte': 'advice (dat. of rât)',
      'gegen': 'towards, to', 'munpasiliere': 'Montpellier', 'dâ': 'there; then', 'vant': 'found (vinden)', 'schiere': 'soon', 'niuwan': 'nothing but, only', 'den': 'the (acc.)', 'untrôst': 'cheerless news, despair', 'niemer': 'never', 'würde': 'would be (past subj. of wërden)', 'erlôst': 'released, cured (erlœsen)',
      'hôrte': 'heard (hœren)', 'ungerne': 'unwillingly, with displeasure', 'salerne': 'Salerno', 'suochte': 'sought (suochen)', 'ouch': 'also', 'durch': 'for the sake of; through; durch alle nôt, in any case', 'genist': 'cure, recovery',
      'wîsen': 'wise (weak, gen. pl.)', 'list': 'skill, knowledge', 'besten': 'best (acc.)', 'meister': 'master, physician', 'seite': 'told (sagen)', 'ime': 'to him', 'zehant': 'at once', 'ein': 'a', 'seltsæne': 'strange', 'mære': 'news, report',
      'genislich': 'curable', 'doch': 'yet', 'iemer': 'for ever', 'ungenesen': 'uncured', 'dô': 'then', 'sprach': 'said (sprëchen)', 'wie': 'how', 'mac': 'can (mugen)', 'wesen': 'be',
      'diu': 'the (fem.)', 'rede': 'speech, what is said', 'ist': 'is', 'harte': 'very, utterly', 'unmügelich': 'impossible', 'bin': 'am', 'ich': 'I', 'sô': 'then, so', 'genise': 'recover, be cured (genësen)',
      'swaz': 'whatever', 'mir': 'to me, on me', 'für': 'before (für legen: impose); for', 'wirt': 'is (passive: wërden)', 'geleit': 'laid (legen)', 'von': 'of, in the way of', 'guote': 'wealth (dat. of guot)', 'oder': 'or', 'arbeit': 'hardship, toil',
      'trûwe': 'trust myself, am confident (trûwen)', 'vollebringen': 'accomplish', 'nu': 'now', 'lât': 'leave, give up (imperative pl. of lân)', 'gedingen': 'hope (gedinge)', 'aber': 'in reply; but',
      'iuwerre': 'your (gen. fem.)', 'sühte': 'sickness (gen. of suht)', 'was': 'what (waz)', 'frumet': 'is of use (vrumen)', 'ichz': 'ich ez: I … it', 'iu': 'to you', 'kunt': 'known (kunt tuon, make known)', 'tuo': 'do (subj. of tuon)',
      'hœret': 'belongs (hœren zuo)', 'arzenîe': 'medicine, remedy', 'zuo': 'to', 'des': 'through it (gen.); of it', 'wæret': 'would be (2nd pl. past subj.)', 'ir': 'you (pl.)', 'genislîch': 'curable',
      'enist': 'is not (en + ist)', 'nieman': 'no one', 'rîch': 'rich, powerful', 'noch': 'nor', 'starken': 'strong (dat. pl.)', 'sinnen': 'wits, minds (dat. pl. of sin)', 'sî': 'it, her (the remedy)', 'müge': 'could (subj. of mugen)', 'gewinnen': 'obtain',
      'sint': 'are, remain', 'got': 'God', 'enwelle': 'unless … will (en + welle)', 'arzât': 'physician',
      'arme': 'poor (weak)', 'heinrich': 'Heinrich', 'war': 'where: war umbe, why', 'umbe': 'about: war umbe, why', 'untrœstent': 'take hope away from (2nd pl., Alemannic -ent)', 'mich': 'me',
      'jâ': 'indeed, certainly', 'hân': 'have', 'guotes': 'of wealth (gen.)', 'wol': 'well, certainly', 'die': 'the (fem.)', 'kraft': 'abundance, great amount', 'enwellent': 'unless you want (en + wellent)', 'iuwer': 'your',
      'meisterschaft': 'mastery, professional art', 'reht': 'right, duty, law', 'brechen': 'break', 'dar': 'there: dar zuo, besides', 'versprechen': 'refuse, reject', 'beidiu': 'both', 'mîn': 'my', 'silber': 'silver', 'golt': 'gold',
      'mache': 'make', 'iuch': 'you (acc.)', 'holt': 'well disposed (+ dat.)', 'gerne': 'gladly', 'ernert': 'heal, save (2nd pl. of ernern)',
      'wille': 'will, readiness', 'unrewert': 'not denied, freely given (rare)', 'man': 'one, people', 'veile': 'for sale', 'funde': 'found (past subj. of vinden; fünde)', 'kunde': 'could (past subj. of kunnen; künde)',
      'mit': 'with', 'deheinen': 'any (dat. pl.)', 'dingen': 'things, means (dat. pl.)', 'erwerben': 'acquire', 'enlieze': 'would not let (en + lieze, past subj. of lâzen)', 'niht': 'not', 'verderben': 'perish',
      'enmac': 'cannot (en + mac)', 'leider': 'alas', 'gesîn': 'be', 'muoz': 'must', 'helfe': 'help', 'alle': 'all', 'nôt': 'need, necessity', 'sîn': 'be', 'versaget': 'refused, denied',
      'müesent': 'would have to (past subj. of müezen, 2nd pl.)', 'haben': 'have', 'eine': 'a', 'maget': 'maiden, young woman', 'vollen': 'fully', 'vrîbære': 'marriageable', 'willen': 'will (gen.): des willen, willing',
      'tôt': 'death', 'lite': 'would suffer (past subj. of lîden)', 'ez': 'it', 'liute': 'people’s (gen. pl.)', 'site': 'custom, way', 'iemen': 'anyone', 'hœrt': 'belongs (hœren zuo)', 'anders': 'else', 'mägede': 'maiden’s (gen. of maget)', 'herzenbluot': 'heart’s blood', 'suht': 'sickness', 'guot': 'good'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What did Heinrich learn at Montpellier?', options: ['That he would never be cured', 'That he could be cured with money', 'That he should go home', 'That he was not ill'], answer: 0, explain: 'niuwan den untrôst daz er niemer würde erlôst.' },
      { id: 'r2', type: 'mc', prompt: 'What paradox does the master of Salerno tell him?', options: ['He is curable and yet will remain uncured', 'He is healthy and yet sick', 'He is rich and yet poor', 'He will die and yet live'], answer: 0, explain: 'daz er genislich wære und wære doch iemer ungenesen.' },
      { id: 'r3', type: 'mc', prompt: 'What does Heinrich offer the master?', options: ['His silver and his gold', 'His castle', 'His daughter', 'His service as a knight'], answer: 0, explain: 'beidiu mîn silber und mîn golt.' },
      { id: 'r4', type: 'mc', prompt: 'Under what condition, says the master, could Heinrich still be cured?', options: ['If God himself is the physician', 'If he goes to Rome', 'If he pays enough', 'If he waits a year'], answer: 0, explain: 'got enwelle der arzât wesen.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">ich mac</span> means:', options: ['I can', 'I like', 'I must', 'I may only'], answer: 0, explain: 'mugen = be able.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">ich tar</span> means:', options: ['I dare', 'I need', 'I tear', 'I am allowed'], answer: 0, explain: 'turren.' },
      { id: 't3', type: 'mc', prompt: 'Preterite of <span class="la">müezen</span>:', options: ['muoste', 'müezte', 'muozte', 'muose only'], answer: 0, explain: 'muoste (also muose); subjunctive müeste.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Ër k___n ez wol.</span>', hint: 'he can, knows how to', answers: ['a'], full: 'Ër kan ez wol.', explain: 'kunnen: ich kan, ër kan.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Si d___fte sîn niht.</span>', hint: 'she needed (preterite of durfen)', answers: ['or'], full: 'Si dorfte sîn niht.', explain: 'durfen, dorfte: she did not need it.' },
      { id: 't6', type: 'mc', prompt: 'In <span class="la">nieman … der sî müge gewinnen</span>, <span class="la">müge</span> is:', options: ['present subjunctive after a negative', 'present indicative', 'past subjunctive', 'an infinitive'], answer: 0, explain: 'Subjunctive in a relative clause after nieman.' },
      { id: 't7', type: 'mc', prompt: 'Past subjunctive of <span class="la">mugen</span>:', options: ['möhte', 'mohte', 'müge', 'mac'], answer: 0, explain: 'Umlaut in the past subjunctive.' },
      { id: 't8', type: 'mc', prompt: '<span class="la">list</span> in <span class="la">der wîsen arzâte list</span> means:', options: ['skill, knowledge', 'trick, deceit', 'list of names', 'pleasure'], answer: 0, explain: 'Often neutral: the doctors’ skill.' },
      { id: 't9', type: 'translate', dir: 'mhd-de', source: 'Got müeze iuch behüeten.', model: 'Gott möge euch beschützen.', accepted: ['Gott möge euch beschützen', 'Gott möge euch behüten', 'Gott behüte euch', 'Gott beschütze euch', 'Gott möge Euch behüten', 'Gott möge Euch beschützen'] },
      { id: 't10', type: 'translate', dir: 'de-mhd', source: 'Ich weiß es.', model: 'Ich weiz ez.', accepted: ['Ich weiz ez', 'Ich weiz es'] },
      { id: 't11', type: 'mc', prompt: 'What remedy does the master of Salerno name?', options: ['The heart’s blood of a willing maiden', 'A rare herb', 'A pilgrimage to Rome', 'Gold dissolved in wine'], answer: 0, explain: 'niuwan der mägede herzenbluot.' },
      { id: 't12', type: 'mc', prompt: 'Hartmann’s <span class="la">ir müesent</span> shows:', options: ['the Alemannic 2nd plural ending -ent', 'a 3rd plural', 'a misprint', 'an infinitive'], answer: 0, explain: 'Paul keeps Hartmann’s -ent in the 2nd plural.' }
    ]
  },

  reference: [
    { title: 'Preterite-presents', headers: ['Inf.', 'ich, ër', 'wir', 'Preterite'], rows: [
      ['wizzen', 'weiz', 'wizzen', 'wisse, weste'], ['kunnen', 'kan', 'kunnen', 'kunde'], ['mugen', 'mac', 'mugen', 'mahte, mohte'], ['müezen', 'muoz', 'müezen', 'muoste'], ['suln', 'sol', 'suln', 'solde'],
      ['durfen', 'darf', 'durfen', 'dorfte'], ['turren', 'tar', 'turren', 'torste'], ['tugen', 'touc', 'tugen', 'tohte'], ['gunnen', 'gan', 'gunnen', 'gunde']
    ] },
    { title: 'Meanings', headers: ['Verb', 'Meaning'], rows: [
      ['mugen', 'can, be able; may'], ['kunnen', 'know (how to)'], ['müezen', 'must; may'], ['suln', 'shall, ought; will'], ['durfen', 'need'], ['turren', 'dare'], ['tugen', 'be of use'], ['gunnen', 'grant'], ['wizzen', 'know']
    ] },
    { title: 'Subjunctive: present and past', headers: ['', 'Present', 'Past'], rows: [
      ['sîn', 'sî', 'wære'], ['gëben', 'gëbe', 'gæbe'], ['vinden', 'vinde', 'fünde'], ['mugen', 'müge', 'möhte'], ['müezen', 'müeze', 'müeste'], ['kunnen', 'künne', 'künde'], ['wellen', 'welle', 'wolte']
    ] },
    { title: 'Uses of the subjunctive', headers: ['Use', 'Example'], rows: [
      ['Wish', 'got gebe iu heil'], ['Reported (after past verb)', 'er seite, daz er genislich wære'], ['After a negative', 'nieman, der sî müge gewinnen'], ['Unless', 'got enwelle der arzât wesen'], ['Unreal condition', 'wære der arzenîe alsô, ich enlieze …'], ['As if', 'als ob ez sî gelogen']
    ] }
  ]
});
