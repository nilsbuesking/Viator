/*
 * Latin — Lecture XIV: reflexive pronouns (suī, sibi, sē), the reflexive possessive suus,
 * and the intensive ipse.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotation (Caesar, De bello Gallico 1.1) checked against the text supplied by Nils
 * (sources/latin-readings.txt). Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-14',
  number: 14,
  title: 'Inter sē differunt',
  subtitle: 'Reflexive pronouns; the reflexive possessive suus against eius; the intensive ipse',
  minutes: 60,

  intro: `
    <p>“Marcus loves his son.” Whose son? English cannot say without more words, and neither can German: <em>Marcus liebt seinen Sohn</em> may be his own son or another man’s. Latin keeps the two apart. <span class="la">Mārcus fīlium <strong>suum</strong> amat</span> is his own son; <span class="la">Mārcus fīlium <strong>eius</strong> amat</span> is someone else’s, a man just mentioned.</p>
    <p>That is the heart of this lecture: the <strong>reflexive</strong> pronoun <span class="la">sē</span> (“himself, herself, themselves”) and its possessive <span class="la">suus</span>, which point back to the subject of the sentence. German has the same pronoun in <em>sich</em>, and it behaves almost exactly like <span class="la">sē</span>. The lecture also introduces <span class="la">ipse</span>, “himself” in a different sense: “he himself, in person”, German <em>selbst</em>.</p>
    <p>By the end you should be able to decline <span class="la">suī</span> and <span class="la">ipse</span>, choose correctly between <span class="la">suus</span> and <span class="la">eius</span>, and tell <span class="la">sē</span> from <span class="la">ipse</span> as German tells <em>sich</em> from <em>selbst</em>.</p>
  `,

  background: [
    {
      title: 'Caesar writes about Caesar',
      html: `
        <p>Julius Caesar’s account of his campaigns in Gaul between 58 and 52 BC, the <em>Commentāriī dē bellō Gallicō</em>, is the most widely read Latin prose text of all, partly because generations of schoolchildren have started their real Latin with it. A <span class="la">commentārius</span> was a set of notes, raw material for a historian; Caesar’s are so polished that the description is a piece of modesty. Whether the seven books appeared one by one, year by year, or together in about 51 BC is still argued.</p>
        <p>One feature strikes every reader: Caesar never says “I”. He writes <span class="la">Caesar</span> and <span class="la">is</span>, and uses <span class="la">sē</span> and <span class="la">suus</span> of himself like a historian writing about someone else. The effect is an air of objectivity, though the work is a political defence of his own actions written for a Roman audience. For the learner it has a happy result: Caesar’s prose is full of reflexives, used with great precision.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Lionel_Royer_-_Vercingetorix_Throwing_down_His_Weapons_at_the_feet_of_Julius_Caesar.jpg/960px-Lionel_Royer_-_Vercingetorix_Throwing_down_His_Weapons_at_the_feet_of_Julius_Caesar.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Lionel_Royer_-_Vercingetorix_Throwing_down_His_Weapons_at_the_feet_of_Julius_Caesar.jpg/500px-Lionel_Royer_-_Vercingetorix_Throwing_down_His_Weapons_at_the_feet_of_Julius_Caesar.jpg|https://upload.wikimedia.org/wikipedia/commons/a/ae/Lionel_Royer_-_Vercingetorix_Throwing_down_His_Weapons_at_the_feet_of_Julius_Caesar.jpg" alt="Painting of a Gaulish chieftain on horseback before a seated Roman general"><figcaption>Lionel Royer, <em>Vercingetorix throws down his arms at the feet of Julius Caesar</em> (1899; Le Puy-en-Velay, Musée Crozatier). The surrender after the siege of Alesia in 52 BC, as French national feeling imagined it; Caesar himself tells the episode in one short sentence (BG 7.89). <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Lionel_Royer_-_Vercingetorix_Throwing_down_His_Weapons_at_the_feet_of_Julius_Caesar.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'sich and sē',
      html: `
        <p>The reflexive is one of the clearest family likenesses between Latin and German. <span class="la">sē</span> and <em>sich</em> go back to the same ancestor, as do <span class="la">suus</span> and <em>sein</em>; Gothic had <em>sik</em> and <em>seins</em>. In both languages the special reflexive form exists only for the third person, while “myself” and “yourself” use the ordinary pronouns: <span class="la">mē laudō</span>, <em>ich lobe mich</em>; <span class="la">sē laudat</span>, <em>er lobt sich</em>. A German speaker’s instinct is reliable here.</p>
        <p>The possessive is where German parts company. German <em>sein</em> serves both for “his own” and “his (someone else’s)”, so <em>er liebt seine Frau</em> is ambiguous. Latin kept the distinction, <span class="la">suus</span> against <span class="la">eius</span>. So did the Scandinavian languages: Swedish <em>han älskar sin fru</em> (his own wife) against <em>han älskar hans fru</em> (another man’s). If you have met Swedish or Danish, that is exactly the Latin system.</p>
      `
    },
    {
      title: 'Ipse dīxit',
      html: `
        <p>Cicero reports (<em>On the Nature of the Gods</em> 1.10) that the followers of Pythagoras, asked why something was so, would answer “he himself said so”, in Latin <span class="la">ipse dīxit</span>. <span class="la">ipse</span> there means “the master himself”, as a household’s slaves might say <span class="la">ipse</span> of the master. The phrase became proverbial for an appeal to authority instead of argument, and in English an “ipse dixit” is still an unsupported assertion. It is a fair motto for a course that tries to qualify its claims.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Melchior_Feselen_-_Belagerung_der_Stadt_Alesia_(1533).jpg/960px-Melchior_Feselen_-_Belagerung_der_Stadt_Alesia_(1533).jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Melchior_Feselen_-_Belagerung_der_Stadt_Alesia_(1533).jpg/500px-Melchior_Feselen_-_Belagerung_der_Stadt_Alesia_(1533).jpg|https://upload.wikimedia.org/wikipedia/commons/d/d4/Melchior_Feselen_-_Belagerung_der_Stadt_Alesia_(1533).jpg" alt="Crowded sixteenth-century battle painting of a besieged hill town"><figcaption>Melchior Feselen, <em>The siege of Alesia</em> (1533; Munich, Alte Pinakothek), painted for Duke William IV of Bavaria’s series of history pictures. Caesar’s Gaul is shown with Renaissance German armour and towns: every age reads Caesar in its own image. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Melchior_Feselen_-_Belagerung_der_Stadt_Alesia_(1533).jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Gallia est omnis dīvīsa in partēs trēs, quārum ūnam incolunt Belgae, aliam Aquītānī, tertiam quī ipsōrum linguā Celtae, nostrā Gallī appellantur. Hī omnēs linguā, īnstitūtīs, lēgibus inter sē differunt.</p>
    <p>“Gaul as a whole is divided into three parts, of which the Belgae inhabit one, the Aquitani another, and the third those who in their own language are called Celts, in ours Gauls. All these differ from one another in language, customs and laws.” Caesar, <em>De bello Gallico</em> 1.1, the opening of the work; checked against the copy in the course’s source files, with length marks added.</p>
    <p><span class="la">ipsōrum linguā</span>: “in the language of the people themselves”, <span class="la">ipse</span> in the genitive plural, set against <span class="la">nostrā</span> (<span class="la">linguā</span>), “in ours”. <span class="la">inter sē</span>: “among themselves, from one another”, the reflexive expressing a mutual relation.</p>
    <p>A few lines later Caesar explains why the Helvetii are such good fighters: they fight the Germans almost daily, <span class="la">cum aut suīs fīnibus eōs prohibent aut ipsī in eōrum fīnibus bellum gerunt</span>, “when they either keep them from their own territory or themselves wage war in their (the Germans’) territory”. Every pronoun of this lecture is there: <span class="la">suīs</span> (the Helvetii’s own), <span class="la">eōs</span> and <span class="la">eōrum</span> (the Germans), <span class="la">ipsī</span> (the Helvetii in person).</p>
  `,

  pronunciation: `
    <h3>suī, suus, sibi</h3>
    <p><span class="la">suī</span> has two syllables, <span class="la">SU-ī</span>, and <span class="la">suus</span> also two, <span class="la">SU-us</span>: the <span class="la">u</span> is a vowel, not the <em>w</em> of <span class="la">suāvis</span>. <span class="la">sibi</span>, like <span class="la">mihi</span> and <span class="la">tibi</span>, normally has two short vowels: <span class="la">SI-bi</span>.</p>
    <h3>ipse</h3>
    <p>The <span class="la">ps</span> is pronounced as written, as in German <em>Gips</em> or <em>Psyche</em> said carefully. The genitive <span class="la">ipsīus</span> has a long <span class="la">ī</span> and the stress on it: <span class="la">ip-SĪ-us</span>.</p>
    <h3>sēsē</h3>
    <p>A doubled form of <span class="la">sē</span>, with the same meaning and a little more weight: Cicero’s <span class="la">quem ad fīnem sēsē effrēnāta iactābit audācia?</span>, “to what end will your unbridled audacity throw itself about?” (<em>In Catilinam</em> 1.1).</p>
  `,

  grammar: [
    {
      title: '1. Reflexive pronouns',
      html: `
        <p>A reflexive pronoun refers back to the subject: “he washes <em>himself</em>”. For the first and second persons Latin simply uses the forms of <span class="la">ego</span> and <span class="la">tū</span> (Lecture XII): <span class="la">mē laudō</span> “I praise myself”, <span class="la">tibi crēdis</span> “you trust yourself”, <span class="la">nōs dēfendimus</span> “we defend ourselves”.</p>
        <p>For the third person there is a special pronoun, the same for singular and plural and for all genders:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>himself, herself, itself, themselves</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td>—</td></tr>
            <tr><th>Gen.</th><td class="la">suī</td></tr>
            <tr><th>Dat.</th><td class="la">sibi</td></tr>
            <tr><th>Acc.</th><td class="la">sē (sēsē)</td></tr>
            <tr><th>Abl.</th><td class="la">sē (sēsē)</td></tr>
          </tbody>
        </table></div>
        <p>There is no nominative, because a reflexive can never be the subject. German <em>sich</em> is likewise one form for all genders and both numbers.</p>
        <ul>
          <li><span class="la">Mārcus sē laudat.</span> Marcus praises himself.</li>
          <li><span class="la">Puellae sē laudant.</span> The girls praise themselves.</li>
          <li><span class="la">Lūcius sibi vīnum ēmit.</span> Lucius bought wine for himself.</li>
          <li><span class="la">Mārcus eum laudat.</span> Marcus praises him (another man).</li>
        </ul>
        <p>With <span class="la">cum</span> the pronoun again comes first: <span class="la">sēcum</span>, “with himself, with them(selves)”; German <em>bei sich</em>. <span class="la">inter sē</span> means “among themselves, with one another”: <span class="la">inter sē amant</span>, “they love one another”.</p>
      `
    },
    {
      title: '2. suus and eius',
      html: `
        <p><span class="la">suus, sua, suum</span> is the possessive adjective of the reflexive: “his own, her own, its own, their own”. It is declined like <span class="la">bonus</span> and, like <span class="la">meus</span>, agrees with the thing possessed, not with the owner.</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Latin</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td class="la">Mārcus fīlium suum amat.</td><td>Marcus loves his (own) son.</td></tr>
            <tr><td class="la">Mārcus fīlium eius amat.</td><td>Marcus loves his son (another man’s).</td></tr>
            <tr><td class="la">Iūlia librum suum legit.</td><td>Julia reads her (own) book.</td></tr>
            <tr><td class="la">Puerī patrem suum exspectant.</td><td>The boys wait for their (own) father.</td></tr>
            <tr><td class="la">Puerī patrem eōrum exspectant.</td><td>The boys wait for their father (other boys’).</td></tr>
          </tbody>
        </table></div>
        <p>The rule: if the owner is the <strong>subject</strong> of the clause, use <span class="la">suus</span>; if the owner is someone else, use <span class="la">eius</span> (singular owner) or <span class="la">eōrum, eārum</span> (plural owners). Note that <span class="la">suus</span> changes its ending to agree (<span class="la">librum suum, fīliae suae</span>), while <span class="la">eius</span> never does.</p>
        <p>In the first and second persons there is no problem: <span class="la">meus, tuus, noster, vester</span> serve for both senses. And when you speak to someone, it is <span class="la">tuus</span>: <span class="la">Redde librum frātrī tuō!</span>, “Give the book back to your brother!”.</p>
        <p>A caution: in longer sentences, Latin authors sometimes let <span class="la">sē</span> and <span class="la">suus</span> refer to the subject of the main sentence rather than of the clause they stand in. You will meet this “indirect reflexive” with indirect statement (Lecture XXVI).</p>
      `
    },
    {
      title: '3. ipse, ipsa, ipsum',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>m.</th><th>f.</th><th>n.</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">ipse</td><td class="la">ipsa</td><td class="la">ipsum</td></tr>
            <tr><th>Gen.</th><td class="la">ipsīus</td><td class="la">ipsīus</td><td class="la">ipsīus</td></tr>
            <tr><th>Dat.</th><td class="la">ipsī</td><td class="la">ipsī</td><td class="la">ipsī</td></tr>
            <tr><th>Acc.</th><td class="la">ipsum</td><td class="la">ipsam</td><td class="la">ipsum</td></tr>
            <tr><th>Abl.</th><td class="la">ipsō</td><td class="la">ipsā</td><td class="la">ipsō</td></tr>
            <tr><th>Nom. pl.</th><td class="la">ipsī</td><td class="la">ipsae</td><td class="la">ipsa</td></tr>
          </tbody>
        </table></div>
        <p>It is declined like <span class="la">ille</span> (Lecture X), with genitive <span class="la">-īus</span> and dative <span class="la">-ī</span>, except that the neuter singular is <span class="la">ipsum</span>, not <span class="la">*ipsud</span>. The plural is regular: <span class="la">ipsōrum, ipsīs, ipsōs</span>.</p>
        <p><span class="la">ipse</span> is <strong>intensive</strong>, not reflexive. It emphasises a noun or pronoun: “himself, in person; the very”. It can stand in any case and refer to anyone.</p>
        <ul>
          <li><span class="la">Rēx ipse vēnit.</span> The king himself came. (<em>Der König selbst kam.</em>)</li>
          <li><span class="la">Ipse librum invēnī.</span> I found the book myself.</li>
          <li><span class="la">eō ipsō diē</span>: on that very day.</li>
        </ul>
        <p>The contrast is exactly German <em>sich</em> against <em>selbst</em>, which English blurs with one word “himself”:</p>
        <ul>
          <li><span class="la">Mārcus sē laudat.</span> <em>Marcus lobt sich.</em> Marcus praises himself.</li>
          <li><span class="la">Mārcus ipse mē laudat.</span> <em>Marcus selbst lobt mich.</em> Marcus himself praises me.</li>
          <li><span class="la">Mārcus sē ipse laudat.</span> <em>Marcus lobt sich selbst.</em> Both together.</li>
        </ul>
      `
    },
    {
      title: '4. The possessives together',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Owner</th><th>Possessive</th><th>German</th></tr></thead>
          <tbody>
            <tr><td>I / we</td><td class="la">meus / noster</td><td><em>mein / unser</em></td></tr>
            <tr><td>you (sg. / pl.)</td><td class="la">tuus / vester</td><td><em>dein / euer</em></td></tr>
            <tr><td>the subject (3rd pers.)</td><td class="la">suus</td><td><em>sein, ihr</em> (“sein eigener”)</td></tr>
            <tr><td>someone else (3rd pers.)</td><td class="la">eius / eōrum, eārum</td><td><em>dessen / deren</em></td></tr>
          </tbody>
        </table></div>
      `
    }
  ],

  vocab: [
    { id: 'sui', head: 'suī, sibi, sē', la: 'suī, sibi, sē (sēsē)', pos: 'reflexive pronoun', en: 'himself, herself, itself, themselves', stress: 'SU-ī · SI-bi · SĒ', deriv: 'sich', note: 'No nominative. sēcum: with himself. inter sē: with one another.' },
    { id: 'suus', head: 'suus', la: 'suus, sua, suum', pos: 'reflexive possessive adj.', en: 'his own, her own, its own, their own', stress: 'SU-us · SU-a · SU-um', deriv: 'sein', note: 'Refers to the subject; eius refers to someone else.' },
    { id: 'ipse', head: 'ipse', la: 'ipse, ipsa, ipsum', pos: 'intensive pronoun / adj.', en: 'himself, herself, itself (in person); the very', stress: 'IP-se · gen. ip-SĪ-us', deriv: 'ipso facto', note: 'German “selbst”, not “sich”.' },
    { id: 'mensa', head: 'mēnsa', la: 'mēnsa, mēnsae', g: 'f', pos: 'noun, 1st decl.', en: 'table; meal', stress: 'MĒN-sa', deriv: 'Mensa (university canteen)', note: 'The German student “Mensa” is this word.' },
    { id: 'hortus', head: 'hortus', la: 'hortus, hortī', g: 'm', pos: 'noun, 2nd decl.', en: 'garden', stress: 'HOR-tus', deriv: 'horticulture; related to Garten' },
    { id: 'cubiculum', head: 'cubiculum', la: 'cubiculum, cubiculī', g: 'n', pos: 'noun, 2nd decl.', en: 'bedroom', stress: 'cu-BI-cu-lum', deriv: 'cubicle', note: 'From cubō, “lie down”.' },
    { id: 'reddo', head: 'reddō', la: 'reddō, reddere, reddidī, redditum', pos: 'verb, 3rd conj.', en: 'give back, return; render', stress: 'RED-dō · RED-de-re', deriv: 'render, rendition', note: 're(d) + dō, with a reduplicated perfect.' },
    { id: 'amitto', head: 'āmittō', la: 'āmittō, āmittere, āmīsī, āmissum', pos: 'verb, 3rd conj.', en: 'lose, let go', stress: 'ā-MIT-tō · ā-MIT-te-re', note: 'ā(b) + mittō: “send away”.' },
    { id: 'iaceo', head: 'iaceō', la: 'iaceō, iacēre, iacuī', pos: 'verb, 2nd conj.', en: 'lie, be lying', stress: 'IA-ce-ō · ia-CĒ-re', note: 'Do not confuse with iaciō, iacere (3rd -iō), “throw” (Lecture XI).' },
    { id: 'curo', head: 'cūrō', la: 'cūrō, cūrāre, cūrāvī, cūrātum', pos: 'verb, 1st conj.', en: 'care for, look after; worry about', stress: 'CŪ-rō · cū-RĀ-re', deriv: 'cure, curator; kurieren', note: 'From cūra (Lecture II).' },
    { id: 'inter', head: 'inter', la: 'inter (+ acc.)', pos: 'preposition', en: 'between, among', stress: 'IN-ter', deriv: 'international', note: 'inter sē: with one another.' },
    { id: 'sub', head: 'sub', la: 'sub (+ abl. / + acc.)', pos: 'preposition', en: 'under (+ abl.: position; + acc.: motion to)', stress: 'SUB', deriv: 'submarine, subway', note: 'Like German “unter dem / unter den”: the case shows rest or motion.' },
    { id: 'frustra', head: 'frūstrā', la: 'frūstrā', pos: 'adverb', en: 'in vain, for nothing', stress: 'FRŪS-trā', deriv: 'frustrate' },
    { id: 'postridie', head: 'postrīdiē', la: 'postrīdiē', pos: 'adverb', en: 'on the next day', stress: 'post-RĪ-di-ē', note: 'From posterī diē, “on the following day”.' },
    { id: 'enim', head: 'enim', la: 'enim', pos: 'conjunction (postpositive)', en: 'for, because; indeed', stress: 'E-nim', note: 'Never first in its clause: Meum enim āmīsī, “for I have lost mine”.' }
  ],

  grammarCards: [
    { id: 'g14-sui', front: 'Reflexive of the 3rd person: all forms', back: 'gen. suī, dat. sibi, acc. sē (sēsē), abl. sē (sēsē); no nominative' },
    { id: 'g14-nonom', front: 'Why has sē no nominative?', back: 'A reflexive refers back to the subject and can never be the subject itself.' },
    { id: 'g14-12', front: '“I praise myself”, “you praise yourself”', back: 'mē laudō, tē laudās: the ordinary pronouns serve as reflexives.' },
    { id: 'g14-sevseum', front: 'Mārcus sē laudat / Mārcus eum laudat', back: 'Marcus praises himself / Marcus praises him (another man)' },
    { id: 'g14-suus', front: 'suus vs eius', back: 'suus: belonging to the subject; eius: belonging to someone else' },
    { id: 'g14-agree', front: 'Does suus agree with the owner or with the thing owned?', back: 'With the thing owned: Iūlia librum suum legit.' },
    { id: 'g14-eorum', front: 'Puerī patrem eōrum exspectant.', back: 'The boys wait for their father (other boys’ father).' },
    { id: 'g14-tuus', front: '“Give the book back to your brother!”', back: 'Redde librum frātrī tuō! (speaking to someone: tuus)' },
    { id: 'g14-ipse', front: 'ipse, ipsa, ipsum: gen. and dat. sg.', back: 'ipsīus, ipsī' },
    { id: 'g14-ipsum', front: 'Neuter nom. sg. of ipse', back: 'ipsum (not *ipsud, unlike illud)' },
    { id: 'g14-sich', front: 'sē vs ipse in German terms', back: 'sē = sich (reflexive); ipse = selbst (intensive)' },
    { id: 'g14-both', front: 'Mārcus sē ipse laudat.', back: 'Marcus praises himself (lobt sich selbst).' },
    { id: 'g14-inter', front: 'inter sē', back: 'among themselves, with one another' },
    { id: 'g14-secum', front: 'sēcum', back: 'with himself / herself / themselves' },
    { id: 'g14-caesar', front: 'Gallia est omnis dīvīsa in partēs trēs', back: 'Gaul as a whole is divided into three parts (Caesar, BG 1.1)' },
    { id: 'g14-differunt', front: 'Hī omnēs linguā, īnstitūtīs, lēgibus inter sē differunt.', back: 'All these differ from one another in language, customs and laws. (BG 1.1)' },
    { id: 'g14-third', front: 'How does Caesar refer to himself in the Commentaries?', back: 'In the third person: Caesar, is, sē, suus.' },
    { id: 'g14-ipsedixit', front: 'ipse dīxit', back: '“he himself said so”: the Pythagoreans’ appeal to their master (Cicero, Nat. D. 1.10)' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">Mārcus sē laudat.</span>', options: ['Marcus praises himself.', 'Marcus praises him.', 'Marcus himself praises.', 'Marcus praises them.'], answer: 0, explain: 'sē refers back to the subject.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">Iūlia fīlium suum vocat.</span>', options: ['Julia calls her own son.', 'Julia calls her (another woman’s) son.', 'Julia calls his son.', 'Julia calls her sons.'], answer: 0, explain: 'suus: the subject’s own.' },
    { id: 'e3', type: 'mc', prompt: '<span class="la">Iūlia fīlium eius vocat.</span>', options: ['Julia calls his or her son (someone else’s).', 'Julia calls her own son.', 'Julia calls herself.', 'Julia calls their son.'], answer: 0, explain: 'eius: someone other than the subject.' },
    { id: 'e4', type: 'mc', prompt: 'The nominative of the reflexive <span class="la">sē</span> is:', options: ['there is none', 'suī', 'suus', 'ipse'], answer: 0, explain: 'A reflexive cannot be the subject.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">ipsīus</span> is:', options: ['gen. sg. of ipse', 'nom. pl. of ipse', 'dat. sg. of ipse', 'gen. pl. of ipse'], answer: 0, explain: '-īus, like illīus.' },
    { id: 'e6', type: 'mc', prompt: '<span class="la">Rēx ipse vēnit.</span>', options: ['The king himself came.', 'The king came to himself.', 'The king came alone.', 'The king came with him.'], answer: 0, explain: 'ipse: “in person”, German “selbst”.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Puella s___ in aquā videt.</span>', hint: 'herself', answers: ['ē', 'e'], full: 'Puella sē in aquā videt.', explain: 'Accusative of the reflexive.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Mīlitēs patriam s___ dēfendērunt.</span>', hint: 'their (own)', answers: ['uam'], full: 'Mīlitēs patriam suam dēfendērunt.', explain: 'suus agrees with patriam: acc. sg. f.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Mārcus fīliō s___ librum dedit.</span>', hint: 'his (own)', answers: ['uō', 'uo'], full: 'Mārcus fīliō suō librum dedit.', explain: 'Dative masculine, agreeing with fīliō.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Puerī inter s___ pugnābant.</span>', hint: 'each other', answers: ['ē', 'e'], full: 'Puerī inter sē pugnābant.', explain: 'inter sē: with one another.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Cōnsulem ips___ vīdī.</span>', hint: 'the consul himself', answers: ['um'], full: 'Cōnsulem ipsum vīdī.', explain: 'ipse agrees with cōnsulem: acc. sg. m.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Lūcius s___ vīnum ēmit.</span>', hint: 'for himself', answers: ['ibi'], full: 'Lūcius sibi vīnum ēmit.', explain: 'Dative of the reflexive.' },
    { id: 'e13', type: 'paradigm', prompt: 'Give the forms of <span class="la">ego</span> and the 3rd-person reflexive.', headers: ['ego', 'reflexive'], rows: [
      { label: 'Gen.', answers: ['meī', 'suī'] },
      { label: 'Dat.', answers: ['mihi|mī', 'sibi'] },
      { label: 'Acc.', answers: ['mē', 'sē|sēsē'] },
      { label: 'Abl.', answers: ['mē', 'sē|sēsē'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">ipse</span> in the singular.', headers: ['m.', 'f.', 'n.'], rows: [
      { label: 'Nom.', answers: ['ipse', 'ipsa', 'ipsum'] },
      { label: 'Gen.', answers: ['ipsīus', 'ipsīus', 'ipsīus'] },
      { label: 'Dat.', answers: ['ipsī', 'ipsī', 'ipsī'] },
      { label: 'Acc.', answers: ['ipsum', 'ipsam', 'ipsum'] },
      { label: 'Abl.', answers: ['ipsō', 'ipsā', 'ipsō'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each form to its meaning.', pairs: [
      ['sē', 'himself (reflexive)'], ['ipse', 'he himself, in person'], ['suus', 'his own'], ['eius', 'his (another’s)'], ['inter sē', 'with one another']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Gāius frātrem suum spectāvit.', tokens: ['Gaius', 'looked at', 'his', 'brother'], explain: 'suum: his own brother.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Mārcus ipse fīliōs suōs laudāvit.', model: 'Marcus himself praised his sons.', accepted: ['marcus himself praised his sons', 'marcus himself praised his own sons', 'marcus himself has praised his sons', 'marcus himself has praised his own sons', 'marcus praised his sons himself', 'marcus praised his own sons himself'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Puerī sē in aquā vīdērunt.', model: 'The boys saw themselves in the water.', accepted: ['boys saw themselves in water', 'boys have seen themselves in water'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Lūcius amīcum eius nōn vīdit.', model: 'Lucius did not see his (that man’s) friend.', accepted: ['lucius did not see his friend', 'lucius did not see her friend', 'lucius has not seen his friend', 'lucius has not seen her friend', 'lucius didn’t see his friend', 'lucius didnt see his friend', 'lucius didn’t see her friend', 'lucius didnt see her friend', 'lucius saw not his friend'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'She loves herself.', model: 'Sē amat.', accepted: ['sē amat', 'ea sē amat', 'sēsē amat'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'I praise myself.', model: 'Mē laudō.', accepted: ['mē laudō', 'ego mē laudō'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'the king himself (nom.)', model: 'rēx ipse', accepted: ['rēx ipse'] },
    { id: 'e23', type: 'mc', prompt: 'In Caesar’s <span class="la">Hī omnēs … inter sē differunt</span>, the peoples of Gaul differ:', options: ['from one another', 'from the Romans', 'from themselves over time', 'from the Germans'], answer: 0, explain: 'inter sē: a mutual relation.' },
    { id: 'e24', type: 'mc', prompt: 'How does Caesar refer to himself in his Commentaries?', options: ['In the third person, as “Caesar”', 'As “ego”', 'As “nōs”', 'He never mentions himself'], answer: 0, explain: 'Hence his frequent sē and suus.' },
    { id: 'e25', type: 'mc', prompt: '<em>Er liebt seine (eigene) Frau</em> in Latin:', options: ['Uxōrem suam amat.', 'Uxōrem eius amat.', 'Uxōrem ipsam amat.', 'Uxōrem sibi amat.'], answer: 0, explain: 'The wife belongs to the subject: suus.' }
  ],

  reading: {
    title: 'Liber āmissus',
    note: 'Original passage: a lost book causes a quarrel. Tap any word.',
    text: 'Postrīdiē Gāius librum suum nōn invēnit. Diū eum quaesīvit, sed frūstrā. Tum librum Quīntī in mēnsā vīdit et sibi cēpit. Mox Quīntus vēnit et clāmāvit: “Ubi est liber meus? Tū, Gāī, eum cēpistī!” Gāius respondit: “Hic liber nōn tuus, sed meus est! Ego nōn fūr sum.” Quīntus autem librum eius nōn cūrābat; suum librum cupiēbat. Frātrēs inter sē pugnāvērunt et magnā vōce clāmāvērunt. Tum Mārcus ipse ē cubiculō suō vēnit. “Quid agitis?” inquit. Quīntus patrī rem tōtam nārrāvit. Et Mārcus: “Gāī, redde librum frātrī tuō! Deinde librum tuum quaerēmus.” Omnēs librum Gāī quaesīvērunt, in ātriō, in hortō, in cubiculīs. Tandem Lūcius ipse eum invēnit: canis in āreā sub arbore dormiēbat, et sub eō liber iacēbat! Canis librum in āream portāverat et sē in eō collocāverat. Lūcius rīsit: “Ecce fūr vester! Canis ipse philosophus esse cupit.” Gāius frātrem suum spectāvit: “Ignōsce mihi, Quīnte.” Quīntus rīsit et ad librum suum sē vertit.',
    translation: 'The next day Gaius could not find his book. For a long time he looked for it, but in vain. Then he saw Quintus’s book on the table and took it for himself. Soon Quintus came and shouted: “Where is my book? You, Gaius, have taken it!” Gaius answered: “This book is not yours but mine! I am not a thief.” But Quintus did not care about Gaius’s book; he wanted his own. The brothers fought with each other and shouted loudly. Then Marcus himself came out of his bedroom. “What are you doing?” he said. Quintus told his father the whole thing. And Marcus: “Gaius, give the book back to your brother! Then we shall look for yours.” They all looked for Gaius’s book, in the atrium, in the garden, in the bedrooms. At last Lucius himself found it: the dog was sleeping in the yard under a tree, and under him lay the book! The dog had carried the book into the yard and settled himself on it. Lucius laughed: “Look, here is your thief! The dog himself wants to be a philosopher.” Gaius looked at his brother: “Forgive me, Quintus.” Quintus laughed and turned to his book.',
    notes: [
      { ref: 'Gāius librum suum nōn invēnit', html: '<span class="la">suum</span>: Gaius’s own book, because Gaius is the subject. <span class="la">invēnit</span>: perfect (Lecture XIII).' },
      { ref: 'librum Quīntī in mēnsā vīdit et sibi cēpit', html: '<span class="la">sibi</span>: “for himself”, dative of the reflexive, referring to Gaius, the subject.' },
      { ref: 'Hic liber nōn tuus, sed meus est!', html: 'Gaius speaks of himself and to his brother: <span class="la">meus, tuus</span>, no reflexive needed.' },
      { ref: 'Quīntus autem librum eius nōn cūrābat; suum librum cupiēbat', html: 'The key contrast. <span class="la">eius</span>: the book of Gaius, who is not the subject. <span class="la">suum</span>: Quintus’s own, because Quintus is the subject. German would say <em>sein</em> both times.' },
      { ref: 'Frātrēs inter sē pugnāvērunt', html: '<span class="la">inter sē</span>: “with each other”. <span class="la">magnā vōce</span>: “in a loud voice”, ablative of manner (Lecture XV).' },
      { ref: 'Mārcus ipse ē cubiculō suō vēnit', html: '<span class="la">ipse</span>: “Marcus himself”, the father in person; the situation is serious. <span class="la">suō</span>: his own bedroom.' },
      { ref: 'Quīntus patrī rem tōtam nārrāvit', html: '<span class="la">rem</span>: accusative of <span class="la">rēs</span>, “thing, matter” (Lecture XXIII). <span class="la">tōtam</span>: Lecture X.' },
      { ref: 'redde librum frātrī tuō!', html: 'Speaking to Gaius, Marcus says <span class="la">tuō</span>, not <span class="la">suō</span>: in the second person the ordinary possessive is used.' },
      { ref: 'Omnēs librum Gāī quaesīvērunt', html: '<span class="la">Gāī</span>: genitive of <span class="la">Gāius</span> (also the vocative). <span class="la">omnēs</span>: “all of them”.' },
      { ref: 'canis in āreā sub arbore dormiēbat, et sub eō liber iacēbat', html: '<span class="la">sub</span> + ablative: “under”, position. <span class="la">eō</span>: “him”, the dog, who is not the subject of <span class="la">iacēbat</span> (the book is). <span class="la">arbor, arboris</span> f.: tree.' },
      { ref: 'sē in eō collocāverat', html: 'Pluperfect: the dog had done this before the search. <span class="la">sē collocāre</span>: “to settle oneself, lie down”; <span class="la">sē</span> refers to the dog, the subject, <span class="la">eō</span> to the book.' },
      { ref: 'Canis ipse philosophus esse cupit', html: 'A joke on Lecture XII: Quintus wanted to be a philosopher; now even the dog does. <span class="la">ipse</span>: “the dog himself”.' },
      { ref: 'Ignōsce mihi, Quīnte', html: '<span class="la">ignōscō</span>, “forgive”, takes the dative (Lecture XXXVI): “forgive me”.' },
      { ref: 'ad librum suum sē vertit', html: '<span class="la">sē vertere</span>: “to turn (oneself)”, German <em>sich wenden</em>. <span class="la">suum</span>: Quintus’s own book.' }
    ],
    glosses: {
      'postrīdiē': 'on the next day', 'gāius': 'Gaius (nom.)', 'librum': 'acc. of liber: book', 'suum': 'acc. m. of suus: his own', 'nōn': 'not', 'invēnit': 'perf. 3rd sg. of inveniō: found',
      'diū': 'for a long time', 'eum': 'acc. m. of is: it, him', 'quaesīvit': 'perf. 3rd sg. of quaerō: looked for', 'sed': 'but', 'frūstrā': 'in vain',
      'tum': 'then', 'quīntī': 'gen. of Quīntus: Quintus’s', 'in': 'in, on (+ abl.); into (+ acc.)', 'mēnsā': 'abl. of mēnsa: table', 'vīdit': 'perf. 3rd sg. of videō: saw', 'et': 'and', 'sibi': 'dat. of reflexive: for himself', 'cēpit': 'perf. 3rd sg. of capiō: took',
      'mox': 'soon', 'quīntus': 'Quintus (nom.)', 'vēnit': 'perf. 3rd sg. of veniō: came', 'clāmāvit': 'perf. 3rd sg. of clāmō: shouted', 'ubi': 'where?', 'est': 'is', 'liber': 'book (nom.)', 'meus': 'my, mine', 'tū': 'you (sg.)', 'gāī': 'voc./gen. of Gāius', 'cēpistī': 'perf. 2nd sg. of capiō: you have taken',
      'respondit': 'perf. 3rd sg. of respondeō: answered', 'hic': 'this', 'tuus': 'your, yours', 'ego': 'I', 'fūr': 'thief', 'sum': 'I am',
      'autem': 'but, however', 'eius': 'gen. of is: his (Gaius’s)', 'cūrābat': 'impf. 3rd sg. of cūrō: cared about', 'cupiēbat': 'impf. 3rd sg. of cupiō: wanted',
      'frātrēs': 'nom. pl. of frāter: brothers', 'inter': 'among, between (+ acc.)', 'sē': 'acc. of reflexive: themselves, himself', 'pugnāvērunt': 'perf. 3rd pl. of pugnō: fought', 'magnā': 'abl. f. of magnus: loud, great', 'vōce': 'abl. of vōx: voice', 'clāmāvērunt': 'perf. 3rd pl. of clāmō: shouted',
      'mārcus': 'Marcus (nom.)', 'ipse': 'himself (in person)', 'ē': 'out of (+ abl.)', 'cubiculō': 'abl. of cubiculum: bedroom', 'suō': 'abl. of suus: his own', 'quid': 'what?', 'agitis': '2nd pl. of agō: you are doing', 'inquit': 'says, said',
      'patrī': 'dat. of pater: to his father', 'rem': 'acc. of rēs: matter, thing', 'tōtam': 'acc. f. of tōtus: whole', 'nārrāvit': 'perf. 3rd sg. of nārrō: told',
      'redde': 'imperative of reddō: give back!', 'frātrī': 'dat. of frāter: to (your) brother', 'tuō': 'dat. of tuus: your', 'deinde': 'then, next', 'tuum': 'acc. m. of tuus: yours', 'quaerēmus': 'fut. 1st pl. of quaerō: we shall look for',
      'omnēs': 'all (of them)', 'quaesīvērunt': 'perf. 3rd pl. of quaerō: looked for', 'ātriō': 'abl. of ātrium: atrium', 'hortō': 'abl. of hortus: garden', 'cubiculīs': 'abl. pl. of cubiculum: bedrooms',
      'tandem': 'at last', 'lūcius': 'Lucius (nom.)', 'canis': 'dog (nom.)', 'āreā': 'abl. of ārea: yard', 'sub': 'under (+ abl.)', 'arbore': 'abl. of arbor: tree', 'dormiēbat': 'impf. 3rd sg. of dormiō: was sleeping', 'eō': 'abl. m. of is: him', 'iacēbat': 'impf. 3rd sg. of iaceō: was lying',
      'āream': 'acc. of ārea: yard', 'portāverat': 'plupf. 3rd sg. of portō: had carried', 'collocāverat': 'plupf. 3rd sg. of collocō: had placed, settled',
      'rīsit': 'perf. 3rd sg. of rīdeō: laughed', 'ecce': 'look! here is', 'vester': 'your (pl.)', 'philosophus': 'philosopher (nom.)', 'esse': 'to be', 'cupit': '3rd sg. of cupiō: wants',
      'frātrem': 'acc. of frāter: brother', 'spectāvit': 'perf. 3rd sg. of spectō: looked at', 'ignōsce': 'imperative of ignōscō: forgive!', 'mihi': 'dat. of ego: me', 'quīnte': 'voc. of Quīntus',
      'ad': 'to, towards (+ acc.)', 'vertit': 'perf. 3rd sg. of vertō: turned'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Whose book did Gaius take from the table?', options: ['Quintus’s', 'His own', 'Lucius’s', 'Marcus’s'], answer: 0, explain: 'librum Quīntī in mēnsā vīdit et sibi cēpit.' },
      { id: 'r2', type: 'mc', prompt: 'Who came out of his bedroom?', options: ['Marcus himself', 'Lucius', 'The dog', 'A thief'], answer: 0, explain: 'Mārcus ipse ē cubiculō suō vēnit.' },
      { id: 'r3', type: 'mc', prompt: 'Where was Gaius’s book in the end?', options: ['Under the sleeping dog in the yard', 'In the garden', 'In Marcus’s bedroom', 'On the table'], answer: 0, explain: 'sub eō liber iacēbat.' },
      { id: 'r4', type: 'mc', prompt: 'In <span class="la">Quīntus autem librum eius nōn cūrābat</span>, whose book is meant?', options: ['Gaius’s', 'Quintus’s own', 'Lucius’s', 'The dog’s'], answer: 0, explain: 'eius: not the subject’s.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">Puellae sē laudant.</span>', options: ['The girls praise themselves.', 'The girls praise her.', 'The girls themselves praise.', 'The girls praise each other’s mothers.'], answer: 0, explain: 'sē serves for the plural too.' },
      { id: 't2', type: 'mc', prompt: '“The boys wait for their own father.”', options: ['Puerī patrem suum exspectant.', 'Puerī patrem eōrum exspectant.', 'Puerī patrem ipsum exspectant.', 'Puerī patrem sē exspectant.'], answer: 0, explain: 'The father belongs to the subject.' },
      { id: 't3', type: 'mc', prompt: 'Neuter nom. sg. of <span class="la">ipse</span>:', options: ['ipsum', 'ipsud', 'ipse', 'ipsa'], answer: 0, explain: 'Unlike illud.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Iūlia cum amīcīs s___ ambulat.</span>', hint: 'her (own)', answers: ['uīs', 'uis'], full: 'Iūlia cum amīcīs suīs ambulat.', explain: 'Abl. pl., agreeing with amīcīs.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Ips___ puellae vēnērunt.</span>', hint: 'the girls themselves', answers: ['ae'], full: 'Ipsae puellae vēnērunt.', explain: 'Nom. pl. f.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Mārcus sēcum cōgitat.', model: 'Marcus thinks to himself.', accepted: ['marcus thinks to himself', 'marcus thinks with himself', 'marcus is thinking to himself', 'marcus ponders to himself', 'marcus reflects to himself'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'They praise themselves.', model: 'Sē laudant.', accepted: ['sē laudant', 'sēsē laudant'] },
      { id: 't8', type: 'mc', prompt: 'In <span class="la">ipsōrum linguā Celtae … appellantur</span> (Caesar), <span class="la">ipsōrum</span> means:', options: ['of the people themselves', 'of us', 'of the Romans', 'of each other'], answer: 0, explain: 'Their own language, as against ours (nostrā).' },
      { id: 't9', type: 'mc', prompt: 'German <em>sich</em> corresponds to:', options: ['sē', 'ipse', 'suus', 'is'], answer: 0, explain: 'Both are reflexive and share an ancestor.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">Lūcius ipse librum invēnit.</span>', options: ['Lucius himself found the book.', 'Lucius found the book for himself.', 'Lucius found his own book.', 'Lucius found the very book.'], answer: 0, explain: 'ipse agrees with Lūcius.' },
      { id: 't11', type: 'mc', prompt: 'Speaking to Gaius: “Give the book back to your brother.”', options: ['Redde librum frātrī tuō!', 'Redde librum frātrī suō!', 'Redde librum frātrī eius!', 'Redde librum frātrī ipsī!'], answer: 0, explain: 'Second person: tuus.' }
    ]
  },

  reference: [
    { title: 'Reflexive pronouns', headers: ['', '1st sg.', '2nd sg.', '3rd (sg. and pl.)', '1st pl.', '2nd pl.'], rows: [
      ['Gen.', 'meī', 'tuī', 'suī', 'nostrī', 'vestrī'], ['Dat.', 'mihi', 'tibi', 'sibi', 'nōbīs', 'vōbīs'], ['Acc.', 'mē', 'tē', 'sē (sēsē)', 'nōs', 'vōs'], ['Abl.', 'mē', 'tē', 'sē (sēsē)', 'nōbīs', 'vōbīs']
    ] },
    { title: 'ipse, ipsa, ipsum', headers: ['', 'm.', 'f.', 'n.'], rows: [
      ['Nom. sg.', 'ipse', 'ipsa', 'ipsum'], ['Gen.', 'ipsīus', 'ipsīus', 'ipsīus'], ['Dat.', 'ipsī', 'ipsī', 'ipsī'], ['Acc.', 'ipsum', 'ipsam', 'ipsum'], ['Abl.', 'ipsō', 'ipsā', 'ipsō'],
      ['Nom. pl.', 'ipsī', 'ipsae', 'ipsa'], ['Gen.', 'ipsōrum', 'ipsārum', 'ipsōrum'], ['Dat./Abl.', 'ipsīs', 'ipsīs', 'ipsīs'], ['Acc.', 'ipsōs', 'ipsās', 'ipsa']
    ] },
    { title: 'Whose is it?', headers: ['Owner', 'Latin', 'German'], rows: [
      ['I / we', 'meus / noster', 'mein / unser'], ['you', 'tuus / vester', 'dein / euer'], ['the subject', 'suus', 'sein / ihr (eigener)'], ['someone else', 'eius / eōrum, eārum', 'dessen / deren']
    ] }
  ]
});
