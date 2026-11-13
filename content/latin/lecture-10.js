/*
 * Latin — Lecture X: demonstratives hic, ille, iste; the “ūnus nauta” adjectives.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotation checked against the text of In Catilinam 1.1–2 supplied by Nils
 * (sources/latin-readings.txt). Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-10',
  number: 10,
  title: 'Hic tamen vīvit',
  subtitle: 'The demonstratives hic, ille, iste; ūnus, nūllus, sōlus, tōtus, alius, alter and their kin',
  minutes: 60,

  intro: `
    <p>Latin has no article. Where German says <em>der Mann</em> and English “the man”, Latin says simply <span class="la">vir</span>. What it does have is a set of <strong>demonstratives</strong>, words that point: <span class="la">hic</span> “this (here, near me)”, <span class="la">ille</span> “that (there, over there)”, and <span class="la">iste</span> “that (near you)”, a word Roman orators liked to load with contempt.</p>
    <p>These words are used constantly, both with nouns (<span class="la">hic vir</span>, “this man”) and on their own as pronouns (<span class="la">hic</span>, “this man, he”; <span class="la">haec</span>, “these things”). Their declension is irregular in a few cases, above all in the genitive and dative singular, which end in <span class="la">-īus</span> and <span class="la">-ī</span> for all genders. The same peculiarity belongs to a small group of common adjectives: <span class="la">ūnus, nūllus, sōlus, tōtus, alius, alter</span> and a few others, which this lecture learns together.</p>
    <p>For a German speaker there is a historical pleasure here. The German definite article <em>der, die, das</em> grew out of a demonstrative, and the articles of French, Spanish and Italian grew out of Latin <span class="la">ille</span>: <em>le, la, el, il</em>. Late Latin, like early German, turned a pointing word into an article.</p>
    <p>By the end you should be able to decline <span class="la">hic, ille, iste</span>, use them as adjectives and pronouns, recognise the <span class="la">-īus</span> genitive, and distinguish <span class="la">alius</span> from <span class="la">alter</span>.</p>
  `,

  background: [
    {
      title: 'Iste: the language of the courtroom',
      html: `
        <p>The three demonstratives correspond, roughly, to the three persons: <span class="la">hic</span> points to what is near the speaker (“this here”), <span class="la">iste</span> to what is near the person addressed (“that of yours”), and <span class="la">ille</span> to what is away from both (“that over there”).</p>
        <p>Because <span class="la">iste</span> points at the other side, it became a favourite word of Roman advocates for their opponent. In Cicero’s speeches against Verres, the corrupt governor of Sicily, Verres is often called simply <span class="la">iste</span>, “that man”, without his name; the word carries a sneer that English “this fellow” or German <em>der da</em> come close to. In the first speech against Catiline, Cicero speaks of <span class="la">furor iste tuus</span>, “that madness of yours”.</p>
        <p><span class="la">ille</span>, by contrast, can carry admiration: <span class="la">Alexander ille</span>, “the famous Alexander”, “that great Alexander”. A Roman listener heard the tone from the choice of demonstrative.</p>
      `
    },
    {
      title: 'The senate and its houses',
      html: `
        <p>The Roman senate met not in one building but wherever a consul summoned it, as long as the place was an inaugurated <span class="la">templum</span>. Its usual home was the Curia, on the north-west side of the Forum, rebuilt several times after fires; the building that stands today is the Curia Iulia, begun by Caesar, completed by Augustus and restored under Diocletian after a fire in AD 283.</p>
        <p>Cicero delivered the first speech against Catiline in the temple of Jupiter Stator, at the foot of the Palatine, which was easier to guard: hence his reference to the guards on the Palatine at night (<span class="la">nocturnum praesidium Palātī</span>). Senators sat on benches, and when Catiline entered, according to Cicero, the benches near him emptied.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Curia_Iulia_front.jpg/960px-Curia_Iulia_front.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Curia_Iulia_front.jpg/500px-Curia_Iulia_front.jpg|https://upload.wikimedia.org/wikipedia/commons/0/00/Curia_Iulia_front.jpg" alt="Tall plain brick building with a pediment and a bronze door, in the Roman Forum"><figcaption>The Curia Iulia in the Roman Forum. The present building is Diocletian’s restoration of the senate house begun by Caesar; it survived because it was turned into a church in the 7th century. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Curia_Iulia_front.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'From ille to le, la, el, il',
      html: `
        <p>Classical Latin had no article, but spoken Latin of the late Empire increasingly used <span class="la">ille</span> and <span class="la">ipse</span> (“self”, Lecture XIV) to mark a noun as known or already mentioned. In the Romance languages that developed from it, <span class="la">ille</span> became the definite article almost everywhere: French <em>le, la</em>, Spanish <em>el, la</em>, Italian <em>il, la</em>, Portuguese <em>o, a</em> (from <span class="la">illum, illam</span>). Sardinian and Balearic Catalan took theirs from <span class="la">ipse</span> instead (<em>su, sa; es, sa</em>).</p>
        <p>The personal pronouns grew from it too: French <em>il, elle</em>, Italian <em>egli, lui, lei</em>. German went the same way independently: <em>der, die, das</em> began as a demonstrative and still serves as one (<em>der da</em>, <em>das hier</em>). Two languages, one development.</p>
        <p>The Strasbourg Oaths of 842, sworn by two grandsons of Charlemagne, are the oldest surviving text in an early form of French. They also contain a German version of the same oath, so the two languages stand side by side in one manuscript.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Serments_de_Strasbourg_842.jpg/960px-Serments_de_Strasbourg_842.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Serments_de_Strasbourg_842.jpg/500px-Serments_de_Strasbourg_842.jpg|https://upload.wikimedia.org/wikipedia/commons/9/91/Serments_de_Strasbourg_842.jpg" alt="Medieval manuscript page in Carolingian minuscule"><figcaption>The Strasbourg Oaths of 842 in the only manuscript, a copy of Nithard’s history (Bibliothèque nationale de France, Latin 9768). The text switches between Latin, early French and Old High German. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Serments_de_Strasbourg_842.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Senātus haec intellegit. Cōnsul videt; hic tamen vīvit.</p>
    <p>“The senate understands these things. The consul sees them; and yet this man lives.” Cicero, <em>In Catilinam</em> 1.2, directly after <span class="la">Ō tempora, ō mōrēs!</span> (Lecture VIII). The text has been checked against the copy in the course’s source files; the length marks are added.</p>
    <p><span class="la">haec</span> is the neuter plural of <span class="la">hic</span>, “these things”: the plot. <span class="la">hic</span> in the next sentence is the masculine singular, “this man”, Catiline, sitting in front of Cicero. <span class="la">senātus</span> is a fourth-declension noun (Lecture XXI). A sentence earlier Cicero has asked: <span class="la">quam diū etiam furor iste tuus nōs ēlūdet?</span>, “how long will that madness of yours still mock us?”: <span class="la">iste</span> in its contemptuous sense.</p>
  `,

  pronunciation: `
    <h3>hic, haec, hoc</h3>
    <p>The <span class="la">c</span> at the end is a hard <em>k</em>, and it is a remnant of an old particle <span class="la">-ce</span>, “here”, which also survives in <span class="la">ecce</span>, “look!”. Before a vowel <span class="la">hic</span> and <span class="la">hoc</span> are pronounced with a doubled <em>c</em> (<em>hicc, hocc</em>), which is why they scan long in verse although the vowel is short.</p>
    <h3>-īus</h3>
    <p>The genitive ending <span class="la">-īus</span> has a long <span class="la">ī</span>, which takes the stress: <span class="la">il-LĪ-us, ū-NĪ-us, tō-TĪ-us</span>. In poetry the <span class="la">i</span> is sometimes short (<span class="la">illius</span>), a convenient licence for metre. <span class="la">huius</span> is pronounced <em>huj-jus</em>, with a doubled consonant <em>j</em>.</p>
    <h3>alius and alter</h3>
    <p><span class="la">A-li-us</span> (three syllables, short <span class="la">i</span>), <span class="la">AL-ter</span>. The genitive of <span class="la">alius</span> is normally replaced by <span class="la">alterīus</span>; see grammar section 5.</p>
  `,

  grammar: [
    {
      title: '1. hic, haec, hoc: this',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>m.</th><th>f.</th><th>n.</th><th>m. pl.</th><th>f. pl.</th><th>n. pl.</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">hic</td><td class="la">haec</td><td class="la">hoc</td><td class="la">hī</td><td class="la">hae</td><td class="la">haec</td></tr>
            <tr><th>Gen.</th><td class="la">huius</td><td class="la">huius</td><td class="la">huius</td><td class="la">hōrum</td><td class="la">hārum</td><td class="la">hōrum</td></tr>
            <tr><th>Dat.</th><td class="la">huic</td><td class="la">huic</td><td class="la">huic</td><td class="la">hīs</td><td class="la">hīs</td><td class="la">hīs</td></tr>
            <tr><th>Acc.</th><td class="la">hunc</td><td class="la">hanc</td><td class="la">hoc</td><td class="la">hōs</td><td class="la">hās</td><td class="la">haec</td></tr>
            <tr><th>Abl.</th><td class="la">hōc</td><td class="la">hāc</td><td class="la">hōc</td><td class="la">hīs</td><td class="la">hīs</td><td class="la">hīs</td></tr>
          </tbody>
        </table></div>
        <p>The plural follows <span class="la">bonus</span> closely (<span class="la">hōrum, hārum, hīs, hōs, hās</span>). The singular is irregular and must be learned by heart. Watch out for <span class="la">haec</span>, which is feminine singular <em>and</em> neuter plural, like <span class="la">bona</span> in Lecture IV.</p>
      `
    },
    {
      title: '2. ille, illa, illud: that; iste, ista, istud',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>m.</th><th>f.</th><th>n.</th><th>m. pl.</th><th>f. pl.</th><th>n. pl.</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">ille</td><td class="la">illa</td><td class="la">illud</td><td class="la">illī</td><td class="la">illae</td><td class="la">illa</td></tr>
            <tr><th>Gen.</th><td class="la">illīus</td><td class="la">illīus</td><td class="la">illīus</td><td class="la">illōrum</td><td class="la">illārum</td><td class="la">illōrum</td></tr>
            <tr><th>Dat.</th><td class="la">illī</td><td class="la">illī</td><td class="la">illī</td><td class="la">illīs</td><td class="la">illīs</td><td class="la">illīs</td></tr>
            <tr><th>Acc.</th><td class="la">illum</td><td class="la">illam</td><td class="la">illud</td><td class="la">illōs</td><td class="la">illās</td><td class="la">illa</td></tr>
            <tr><th>Abl.</th><td class="la">illō</td><td class="la">illā</td><td class="la">illō</td><td class="la">illīs</td><td class="la">illīs</td><td class="la">illīs</td></tr>
          </tbody>
        </table></div>
        <p>Apart from the nominative singular (<span class="la">ille</span>, neuter <span class="la">illud</span>) and the genitive and dative singular (<span class="la">illīus, illī</span>), <span class="la">ille</span> declines like <span class="la">bonus</span>. <span class="la">iste, ista, istud</span> declines in exactly the same way: <span class="la">istīus, istī, istum …</span></p>
        <p>Do not confuse the dative singular <span class="la">illī</span> with the nominative plural <span class="la">illī</span>: the verb usually decides.</p>
      `
    },
    {
      title: '3. How the demonstratives are used',
      html: `
        <ul>
          <li><strong>As adjectives</strong>, agreeing with a noun: <span class="la">hic liber</span> “this book”, <span class="la">illa urbs</span> “that city”, <span class="la">furor iste</span> “that madness (of yours)”.</li>
          <li><strong>As pronouns</strong>, standing alone: <span class="la">hic</span> “this man, he”, <span class="la">haec</span> “this woman” or “these things”, <span class="la">illud</span> “that thing”. The gender and number tell you what is meant.</li>
          <li><strong>hic … ille</strong>: “the latter … the former”, that is, the nearer one in the text and the more distant one: <span class="la">Cicerō et Catilīna: hic malus, ille bonus erat</span>, “Cicero and Catiline: the latter was bad, the former good”.</li>
          <li><strong>ille</strong> with a name: “that famous …”: <span class="la">Sōcratēs ille</span>.</li>
          <li><strong>iste</strong>: “that of yours”, often contemptuous, above all in speeches.</li>
        </ul>
        <p>Latin often uses <span class="la">hic</span> or <span class="la">ille</span> where English uses “he, she, it”: the pure personal pronoun <span class="la">is, ea, id</span> comes in Lecture XII.</p>
      `
    },
    {
      title: '4. ūnus nauta: nine adjectives with -īus and -ī',
      html: `
        <p>Nine common adjectives have the genitive in <span class="la">-īus</span> and the dative in <span class="la">-ī</span> in the singular, like <span class="la">ille</span>, but are otherwise regular first/second-declension adjectives. A traditional mnemonic is UNUS NAUTA:</p>
        <ul>
          <li><strong>U</strong>: <span class="la">ūllus</span> any</li>
          <li><strong>N</strong>: <span class="la">nūllus</span> no, none</li>
          <li><strong>U</strong>: <span class="la">uter</span> which (of two)</li>
          <li><strong>S</strong>: <span class="la">sōlus</span> alone, only</li>
          <li><strong>N</strong>: <span class="la">neuter</span> neither (of two)</li>
          <li><strong>A</strong>: <span class="la">alius</span> other, another; <span class="la">alter</span> the other (of two)</li>
          <li><strong>U</strong>: <span class="la">ūnus</span> one</li>
          <li><strong>T</strong>: <span class="la">tōtus</span> whole, entire</li>
        </ul>
        <p>So: <span class="la">tōtīus urbis</span>, “of the whole city”; <span class="la">nūllī hominī</span>, “to no person”; <span class="la">ūnīus assis</span>, “of one penny” (Catullus 5). In the plural they are entirely regular: <span class="la">tōtī, tōtae, tōta</span>. <span class="la">alter</span> keeps the e like <span class="la">līber</span> (<span class="la">alterīus, alterī, alterum</span>); <span class="la">neuter</span> and <span class="la">uter</span> drop it (<span class="la">neutrīus, utrīus</span>).</p>
      `
    },
    {
      title: '5. alius and alter',
      html: `
        <ul>
          <li><span class="la">alius, alia, aliud</span>: “other, another” among many. Note the neuter <span class="la">aliud</span>, like <span class="la">illud</span>.</li>
          <li><span class="la">alter, altera, alterum</span>: “the other” of two, “the second”.</li>
        </ul>
        <p>Repeated, they distribute: <span class="la">aliī … aliī</span>, “some … others”; <span class="la">alter … alter</span>, “the one … the other”. With two different forms of <span class="la">alius</span> in one clause Latin compresses a whole sentence: <span class="la">aliī alia dīcunt</span>, “different people say different things”.</p>
        <p>The genitive of <span class="la">alius</span> is rare; Latin uses <span class="la">alterīus</span> instead, and for possession often the adjective <span class="la">aliēnus</span>, “belonging to another” (English <em>alien</em>).</p>
      `
    },
    {
      title: '6. Latin without articles',
      html: `
        <p>Since Latin has no article, <span class="la">vir</span> can mean “a man”, “the man” or simply “man”. Context decides, and translators add the articles that English or German need. Do not translate <span class="la">hic</span> and <span class="la">ille</span> mechanically as “the”: they always point. <span class="la">ille vir</span> is “that man”, not “the man”.</p>
        <p>German readers have one advantage: the German definite article still has demonstrative force when stressed (<em>DER Mann war es</em>), which is exactly the force of <span class="la">ille</span> in Classical Latin.</p>
      `
    }
  ],

  vocab: [
    { id: 'hic', head: 'hic', la: 'hic, haec, hoc', pos: 'demonstrative', en: 'this; (as pronoun) he, she, it; the latter', stress: 'HIC · HAEC · HOC', note: 'gen. huius, dat. huic.' },
    { id: 'ille', head: 'ille', la: 'ille, illa, illud', pos: 'demonstrative', en: 'that; (as pronoun) he, she, it; the former; that famous', stress: 'IL-le', deriv: 'French le, il; Italian il; Spanish el', note: 'gen. illīus, dat. illī.' },
    { id: 'iste', head: 'iste', la: 'iste, ista, istud', pos: 'demonstrative', en: 'that (of yours), such; often contemptuous', stress: 'IS-te', note: 'gen. istīus, dat. istī.' },
    { id: 'unus', head: 'ūnus', la: 'ūnus, ūna, ūnum', pos: 'adjective (-īus)', en: 'one; alone', stress: 'Ū-nus', deriv: 'unit, unique, union', note: 'gen. ūnīus.' },
    { id: 'ullus', head: 'ūllus', la: 'ūllus, ūlla, ūllum', pos: 'adjective (-īus)', en: 'any', stress: 'ŪL-lus', note: 'Mostly in negative sentences: nec ūllus, and not any.' },
    { id: 'nullus', head: 'nūllus', la: 'nūllus, nūlla, nūllum', pos: 'adjective (-īus)', en: 'no, not any, none', stress: 'NŪL-lus', deriv: 'null, nullify; null' },
    { id: 'solus', head: 'sōlus', la: 'sōlus, sōla, sōlum', pos: 'adjective (-īus)', en: 'alone, only', stress: 'SŌ-lus', deriv: 'sole, solitary, solo' },
    { id: 'totus', head: 'tōtus', la: 'tōtus, tōta, tōtum', pos: 'adjective (-īus)', en: 'whole, entire', stress: 'TŌ-tus', deriv: 'total' },
    { id: 'alius', head: 'alius', la: 'alius, alia, aliud', pos: 'adjective (-īus)', en: 'other, another', stress: 'A-li-us', deriv: 'alias, alien', note: 'aliī … aliī: some … others.' },
    { id: 'alter', head: 'alter', la: 'alter, altera, alterum', pos: 'adjective (-īus)', en: 'the other (of two), the second', stress: 'AL-ter', deriv: 'alter, alternative', note: 'gen. alterīus.' },
    { id: 'uter', head: 'uter', la: 'uter, utra, utrum', pos: 'adjective (-īus)', en: 'which (of two)?', stress: 'U-ter', note: 'uterque: each of two, both.' },
    { id: 'neuter', head: 'neuter', la: 'neuter, neutra, neutrum', pos: 'adjective (-īus)', en: 'neither (of two)', stress: 'NEU-ter', deriv: 'neuter, neutral', note: 'The neuter gender is “neither” masculine nor feminine.' },

    { id: 'furor', head: 'furor', la: 'furor, furōris', g: 'm', pos: 'noun, 3rd decl.', en: 'madness, frenzy, rage', stress: 'FU-ror · fu-RŌ-ris', deriv: 'furore, fury' },
    { id: 'dolor', head: 'dolor', la: 'dolor, dolōris', g: 'm', pos: 'noun, 3rd decl.', en: 'pain, grief', stress: 'DO-lor · do-LŌ-ris', deriv: 'dolorous' },
    { id: 'audacia', head: 'audācia', la: 'audācia, audāciae', g: 'f', pos: 'noun, 1st decl.', en: 'boldness, recklessness, audacity', stress: 'au-DĀ-ci-a', deriv: 'audacity', note: 'From audeō (Lecture VI).' },
    { id: 'patientia', head: 'patientia', la: 'patientia, patientiae', g: 'f', pos: 'noun, 1st decl.', en: 'patience, endurance', stress: 'pa-ti-EN-ti-a', deriv: 'patience' },
    { id: 'coniuratio', head: 'coniūrātiō', la: 'coniūrātiō, coniūrātiōnis', g: 'f', pos: 'noun, 3rd decl.', en: 'conspiracy', stress: 'con-iū-RĀ-ti-ō · con-iū-rā-ti-Ō-nis', note: 'con + iūrō, “swear together”.' },
    { id: 'praesidium', head: 'praesidium', la: 'praesidium, praesidiī', g: 'n', pos: 'noun, 2nd decl.', en: 'guard, garrison; protection', stress: 'prae-SI-di-um', deriv: 'presidio', note: 'From prae + sedeō: “sitting in front”.' },
    { id: 'locus', head: 'locus', la: 'locus, locī; pl. loca, locōrum', g: 'm', pos: 'noun, 2nd decl.', en: 'place; (pl. locī) passages in books', stress: 'LO-cus', deriv: 'local, locate', note: 'Plural usually neuter loca (Lecture IV).' },
    { id: 'orator', head: 'ōrātor', la: 'ōrātor, ōrātōris', g: 'm', pos: 'noun, 3rd decl.', en: 'speaker, orator', stress: 'ō-RĀ-tor · ō-rā-TŌ-ris', deriv: 'orator' },

    { id: 'intellego', head: 'intellegō', la: 'intellegō, intellegere, intellēxī, intellēctum', pos: 'verb, 3rd conj.', en: 'understand, realise', stress: 'in-TEL-le-gō · in-tel-LE-ge-re', deriv: 'intellect, intelligent', note: 'inter + legō: “choose between”.' },
    { id: 'neglego', head: 'neglegō', la: 'neglegō, neglegere, neglēxī, neglēctum', pos: 'verb, 3rd conj.', en: 'neglect, disregard', stress: 'NEG-le-gō · neg-LE-ge-re', deriv: 'neglect, negligent' },
    { id: 'contemno', head: 'contemnō', la: 'contemnō, contemnere, contempsī, contemptum', pos: 'verb, 3rd conj.', en: 'despise, scorn', stress: 'con-TEM-nō · con-TEM-ne-re', deriv: 'contempt' },
    { id: 'credo', head: 'crēdō', la: 'crēdō, crēdere, crēdidī, crēditum', pos: 'verb, 3rd conj.', en: 'believe, trust (+ dat.)', stress: 'CRĒ-dō · CRĒ-de-re', deriv: 'credit, creed, credulous', note: 'Takes a dative of the person: crēdō tibi, I believe you.' },
    { id: 'accuso', head: 'accūsō', la: 'accūsō, accūsāre, accūsāvī, accūsātum', pos: 'verb, 1st conj.', en: 'accuse, blame', stress: 'ac-CŪ-sō · ac-cū-SĀ-re', deriv: 'accuse' },
    { id: 'culpo', head: 'culpō', la: 'culpō, culpāre, culpāvī, culpātum', pos: 'verb, 1st conj.', en: 'blame, find fault with', stress: 'CUL-pō · cul-PĀ-re', note: 'From culpa (Lecture V).' },
    { id: 'iudico', head: 'iūdicō', la: 'iūdicō, iūdicāre, iūdicāvī, iūdicātum', pos: 'verb, 1st conj.', en: 'judge, consider', stress: 'IŪ-di-cō · iū-di-CĀ-re', deriv: 'judge, adjudicate' },
    { id: 'vito', head: 'vītō', la: 'vītō, vītāre, vītāvī, vītātum', pos: 'verb, 1st conj.', en: 'avoid, shun', stress: 'VĪ-tō · vī-TĀ-re', deriv: 'inevitable' },

    { id: 'aut', head: 'aut', la: 'aut; aut … aut', pos: 'conjunction', en: 'or; either … or', stress: 'AUT', note: 'aut excludes: one or the other. vel leaves the choice open.' },
    { id: 'immo', head: 'immō', la: 'immō', pos: 'adverb', en: 'no indeed, on the contrary; rather', stress: 'IM-mō', note: 'Corrects what was just said: Vīvit? immō vērō etiam in senātum venit (Cicero).' },
    { id: 'improbus', head: 'improbus', la: 'improbus, improba, improbum', pos: 'adjective', en: 'wicked, shameless', stress: 'IM-pro-bus', deriv: 'improbity', note: 'in- + probus, honest.' }
  ],

  grammarCards: [
    { id: 'g10-hic-sg', front: 'hic, haec, hoc: singular N G D A Ab (m.)', back: 'hic, huius, huic, hunc, hōc' },
    { id: 'g10-haec', front: 'haec: two possible meanings', back: 'this (f. nom. sg.); these things (n. nom./acc. pl.)' },
    { id: 'g10-ille-sg', front: 'ille, illa, illud: singular N G D A Ab (m.)', back: 'ille, illīus, illī, illum, illō' },
    { id: 'g10-illud', front: 'Neuter nominative of ille, iste, alius', back: 'illud, istud, aliud' },
    { id: 'g10-ius', front: 'Genitive and dative singular of ille, ūnus, tōtus', back: '-īus, -ī for all genders: illīus, illī; ūnīus, ūnī; tōtīus, tōtī' },
    { id: 'g10-unus', front: 'UNUS NAUTA', back: 'ūllus, nūllus, uter, sōlus, neuter, alius/alter, ūnus, tōtus' },
    { id: 'g10-hic-ille', front: 'hic … ille', back: 'the latter … the former' },
    { id: 'g10-iste', front: 'iste: typical tone', back: 'that (of yours): often contemptuous, esp. of an opponent in court' },
    { id: 'g10-ille-name', front: 'Sōcratēs ille', back: 'the famous Socrates' },
    { id: 'g10-alius', front: 'aliī … aliī', back: 'some … others' },
    { id: 'g10-alter', front: 'alter … alter', back: 'the one … the other (of two)' },
    { id: 'g10-aliialia', front: 'Aliī alia dīcunt.', back: 'Different people say different things.' },
    { id: 'g10-article', front: 'Where do French le, la and Spanish el come from?', back: 'From Latin ille, illa (illum, illam).' },
    { id: 'g10-illi', front: 'illī: two possible forms', back: 'dative singular (all genders) or nominative plural masculine' },
    { id: 'g10-credo', front: 'crēdō + which case for the person?', back: 'Dative: crēdō tibi.' },
    { id: 'g10-immo', front: 'immō', back: 'no indeed, rather: corrects and strengthens what was said' },
    { id: 'g10-cicero', front: 'Senātus haec intellegit. Cōnsul videt; hic tamen vīvit.', back: 'The senate understands these things, the consul sees them; yet this man lives. (Cicero, In Catilinam 1.2)' },
    { id: 'g10-huius', front: 'How is huius pronounced?', back: 'huj-jus, with a doubled j-sound' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">huius</span> is:', options: ['genitive singular of hic (any gender)', 'nominative plural', 'dative singular', 'accusative singular'], answer: 0, explain: 'hic, huius, huic, hunc, hōc.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">haec verba</span> means:', options: ['these words', 'this word', 'that word', 'those words of yours'], answer: 0, explain: 'haec: neuter plural, agreeing with verba.' },
    { id: 'e3', type: 'mc', prompt: 'Neuter nominative singular of <span class="la">ille</span>:', options: ['illud', 'illum', 'illō', 'ille'], answer: 0, explain: 'ille, illa, illud.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">tōtīus urbis</span> means:', options: ['of the whole city', 'to the whole city', 'the whole city', 'whole cities'], answer: 0, explain: 'Genitive in -īus.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">alter</span> means:', options: ['the other (of two)', 'another (of many)', 'neither', 'the whole'], answer: 0, explain: 'alius is “another” among many.' },
    { id: 'e6', type: 'mc', prompt: 'In a speech, <span class="la">iste</span> referring to the opponent usually sounds:', options: ['contemptuous', 'admiring', 'neutral', 'affectionate'], answer: 0, explain: 'As in Cicero’s speeches against Verres.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">H___ liber bonus est.</span>', hint: 'this (m.)', answers: ['ic'], full: 'Hic liber bonus est.', explain: 'hic, masculine nominative.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Ill___ puellam laudāmus.</span>', hint: 'that (f. acc.)', answers: ['am'], full: 'Illam puellam laudāmus.', explain: 'Like bonam: illam.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Nūll___ hominī crēdit.</span>', hint: 'to no (dat.)', answers: ['ī', 'i'], full: 'Nūllī hominī crēdit.', explain: 'Dative singular -ī.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Hoc est cōnsilium ūn___ hominis.</span>', hint: 'of one (gen.)', answers: ['īus', 'ius'], full: 'Hoc est cōnsilium ūnīus hominis.', explain: 'Genitive -īus.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Ali___ dīcunt alia.</span>', hint: 'different people (nom. pl.)', answers: ['ī', 'i'], full: 'Aliī dīcunt alia.', explain: 'Masculine nominative plural.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Hī librī bonī sunt, ill___ malī.</span>', hint: 'those (m. nom. pl.)', answers: ['ī', 'i'], full: 'Hī librī bonī sunt, illī malī.', explain: 'Nominative plural masculine.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">hic, haec, hoc</span> in the singular.', headers: ['m.', 'f.', 'n.'], rows: [
      { label: 'Nom.', answers: ['hic', 'haec', 'hoc'] },
      { label: 'Gen.', answers: ['huius', 'huius', 'huius'] },
      { label: 'Dat.', answers: ['huic', 'huic', 'huic'] },
      { label: 'Acc.', answers: ['hunc', 'hanc', 'hoc'] },
      { label: 'Abl.', answers: ['hōc', 'hāc', 'hōc'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">ille, illa, illud</span> in the singular.', headers: ['m.', 'f.', 'n.'], rows: [
      { label: 'Nom.', answers: ['ille', 'illa', 'illud'] },
      { label: 'Gen.', answers: ['illīus', 'illīus', 'illīus'] },
      { label: 'Dat.', answers: ['illī', 'illī', 'illī'] },
      { label: 'Acc.', answers: ['illum', 'illam', 'illud'] },
      { label: 'Abl.', answers: ['illō', 'illā', 'illō'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each word to its meaning.', pairs: [
      ['nūllus', 'no, none'], ['sōlus', 'alone'], ['tōtus', 'whole'], ['neuter', 'neither of two'], ['uter', 'which of two?']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Hic vir illum librum legit.', tokens: ['This man', 'is reading', 'that', 'book'], explain: 'hic agrees with vir, illum with librum.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Hī mīlitēs fīrmī sunt, illī īnfīrmī.', model: 'These soldiers are strong, those weak.', accepted: ['these soldiers are strong those weak', 'these soldiers are strong those are weak', 'these soldiers are strong but those are weak', 'these soldiers are strong those ones are weak', 'these soldiers are firm those weak', 'these soldiers are firm those are weak'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Nūllī hominī crēdō.', model: 'I trust no one.', accepted: ['i trust no one', 'i trust nobody', 'i believe no one', 'i believe nobody', 'i trust no man', 'i believe no man', 'i trust no person', 'i believe no person'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Furor iste tuus nōs nōn terret.', model: 'That madness of yours does not frighten us.', accepted: ['that madness of yours does not frighten us', 'this madness of yours does not frighten us', 'your madness does not frighten us', 'that madness of yours does not terrify us', 'that rage of yours does not frighten us', 'that frenzy of yours does not frighten us'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'I love this girl.', model: 'Hanc puellam amō.', accepted: ['hanc puellam amō'], explain: 'Hic, haec, hoc: the feminine accusative is hanc. Demonstratives normally stand before their noun.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'that book (nom.)', model: 'ille liber', accepted: ['ille liber'], explain: 'Ille, illa, illud: liber “book” is masculine, so ille. Ille points to something further off, like German jener.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'the whole state (nom.)', model: 'tōta cīvitās', accepted: ['tōta cīvitās'], explain: 'Tōtus has the genitive -īus and dative -ī of the ūnus group, but a regular nominative; cīvitās is feminine, so tōta.' },
    { id: 'e23', type: 'mc', prompt: 'French <em>le</em> and Spanish <em>el</em> come from Latin:', options: ['ille', 'hic', 'iste', 'is'], answer: 0, explain: 'Late Latin ille became the article.' },
    { id: 'e24', type: 'mc', prompt: 'Where did Cicero deliver the first speech against Catiline?', options: ['In the temple of Jupiter Stator', 'In the Curia Iulia', 'In the Forum, to the people', 'In his house'], answer: 0, explain: 'A temple at the foot of the Palatine, easier to guard.' },
    { id: 'e25', type: 'mc', prompt: 'In <span class="la">Cōnsul videt; hic tamen vīvit</span>, <span class="la">hic</span> refers to:', options: ['Catiline', 'the consul', 'Cicero', 'the senate'], answer: 0, explain: '“This man” in front of Cicero.' }
  ],

  reading: {
    title: 'Hic tamen vīvit',
    note: 'Original passage: Marcus tells his sons about Cicero and Catiline. One phrase is quoted from Cicero. Tap any word.',
    text: 'Quīntus patrem rogat: “Quis erat ille Catilīna?” Mārcus respondet: “Ille erat vir nōbilis sed improbus. Hic cōnsul esse optābat, sed populus eum nōn amābat. Itaque Catilīna cum multīs hominibus improbīs coniūrātiōnem parābat. Cicerō autem, cōnsul illīus annī, hanc coniūrātiōnem intellegēbat. In senātū Cicerō Catilīnam accūsābat: ‘Quam diū etiam furor iste tuus nōs ēlūdet?’ Haec verba Cicerōnis clāra sunt. Catilīna sōlus in senātū sedēbat; nūllus senātor cum illō sedēre optābat. Tandem ille ex urbe ad cōpiās properābat; aliī coniūrātī in urbe manēbant et poenās dabant.” Gāius rogat: “Erat Cicerō vir bonus?” Mārcus: “Hic vir bonus et ōrātor magnus erat, sed nōn semper prūdēns. Aliī eum laudant, aliī culpant. Vōs autem, puerī, et Cicerōnem et Sallustium legite, et tum iūdicāte.”',
    translation: 'Quintus asks his father: “Who was that Catiline?” Marcus replies: “He was a man of noble birth, but wicked. He wanted to be consul, but the people did not like him. So Catiline was preparing a conspiracy with many wicked men. But Cicero, consul of that year, understood this conspiracy. In the senate Cicero accused Catiline: ‘How long will that madness of yours still mock us?’ These words of Cicero’s are famous. Catiline sat alone in the senate; no senator wanted to sit with him. At last he hurried out of the city to his forces; the other conspirators stayed in the city and paid the penalty.” Gaius asks: “Was Cicero a good man?” Marcus: “He was a good man and a great orator, but not always prudent. Some praise him, others blame him. But you, boys, read both Cicero and Sallust, and then judge.”',
    notes: [
      { ref: 'Quis erat ille Catilīna?', html: '<span class="la">quis</span>: “who?” (Lecture XX). <span class="la">ille</span> with a name: “that Catiline (you speak of)”, slightly distancing.' },
      { ref: 'Ille erat vir nōbilis sed improbus. Hic cōnsul esse optābat', html: '<span class="la">ille</span> and <span class="la">hic</span> as pronouns, both meaning “he”: Marcus moves from a distant to a closer view. <span class="la">nōbilis</span>: “noble”, a third-declension adjective (Lecture XVII); Catiline was a patrician.' },
      { ref: 'populus eum nōn amābat', html: '<span class="la">eum</span>: “him”, from <span class="la">is</span> (Lecture XII).' },
      { ref: 'cōnsul illīus annī', html: 'Genitive <span class="la">illīus</span>: “of that year”, 63 BC.' },
      { ref: 'hanc coniūrātiōnem intellegēbat', html: '<span class="la">hanc</span>: feminine accusative of <span class="la">hic</span>, agreeing with <span class="la">coniūrātiōnem</span>.' },
      { ref: 'Quam diū etiam furor iste tuus nōs ēlūdet?', html: 'An authentic quotation from <em>In Catilinam</em> 1.1 (length marks added). <span class="la">iste … tuus</span>: “that madness of yours”. <span class="la">ēlūdet</span>: future of <span class="la">ēlūdō</span>, “mock, make sport of” (3rd conj.).' },
      { ref: 'Catilīna sōlus in senātū sedēbat', html: 'Cicero later says that the benches near Catiline emptied when he arrived. <span class="la">senātū</span>: ablative of the fourth-declension <span class="la">senātus</span>.' },
      { ref: 'nūllus senātor cum illō sedēre optābat', html: '<span class="la">illō</span>: ablative after <span class="la">cum</span>, “with him”.' },
      { ref: 'aliī coniūrātī in urbe manēbant et poenās dabant', html: '<span class="la">aliī</span> here: “the other conspirators”. <span class="la">poenās dare</span>: “to pay the penalty”, an idiom: five were executed in December 63 BC.' },
      { ref: 'Aliī eum laudant, aliī culpant', html: '<span class="la">aliī … aliī</span>: “some … others”.' },
      { ref: 'et Cicerōnem et Sallustium legite', html: 'Sallust wrote a monograph on the conspiracy about twenty years later: the other main ancient source.' }
    ],
    glosses: {
      'quīntus': 'Quintus (nom.)', 'patrem': 'acc. of pater: father', 'rogat': '3rd sg. of rogō: asks', 'quis': 'who?', 'erat': 'impf. 3rd sg. of sum: was', 'ille': 'that; he', 'catilīna': 'Catiline (nom.)',
      'mārcus': 'Marcus (nom.)', 'respondet': '3rd sg. of respondeō: replies', 'vir': 'man (nom.)', 'nōbilis': 'noble (3rd decl. adj.)', 'sed': 'but', 'improbus': 'wicked', 'hic': 'this; he', 'cōnsul': 'consul (nom.)', 'esse': 'to be', 'optābat': 'impf. 3rd sg. of optō: wanted',
      'populus': 'the people (nom.)', 'eum': 'him (acc. of is)', 'nōn': 'not', 'amābat': 'impf. 3rd sg. of amō: liked', 'itaque': 'and so', 'catilīnam': 'acc. of Catilīna', 'cum': 'with (+ abl.)', 'multīs': 'abl. pl. of multus: many', 'hominibus': 'abl. pl. of homō: men', 'improbīs': 'abl. pl. of improbus: wicked', 'coniūrātiōnem': 'acc. of coniūrātiō: conspiracy', 'parābat': 'impf. 3rd sg. of parō: was preparing',
      'cicerō': 'Cicero (nom.)', 'autem': 'but, however', 'illīus': 'gen. of ille: of that', 'annī': 'gen. of annus: year', 'hanc': 'acc. f. of hic: this', 'intellegēbat': 'impf. 3rd sg. of intellegō: understood',
      'in': 'in (+ abl.)', 'senātū': 'abl. of senātus: senate', 'accūsābat': 'impf. 3rd sg. of accūsō: accused', 'quam': 'how (quam diū: how long)', 'diū': 'long', 'etiam': 'still', 'furor': 'madness (nom.)', 'iste': 'that (of yours)', 'tuus': 'your', 'nōs': 'us', 'ēlūdet': 'fut. 3rd sg. of ēlūdō: will mock',
      'haec': 'these (n. pl. of hic)', 'verba': 'words (nom. pl. of verbum)', 'cicerōnis': 'gen. of Cicerō', 'clāra': 'nom. pl. n. of clārus: famous', 'sunt': 'are', 'sōlus': 'alone', 'sedēbat': 'impf. 3rd sg. of sedeō: sat', 'nūllus': 'no', 'senātor': 'senator (nom.)', 'illō': 'abl. of ille: him', 'sedēre': 'to sit (inf.)',
      'tandem': 'at last', 'ex': 'out of (+ abl.)', 'urbe': 'abl. of urbs: city', 'ad': 'to (+ acc.)', 'cōpiās': 'acc. pl. of cōpia: forces', 'properābat': 'impf. 3rd sg. of properō: hurried', 'aliī': 'others; aliī … aliī, some … others', 'coniūrātī': 'nom. pl. of coniūrātus: conspirators', 'manēbant': 'impf. 3rd pl. of maneō: stayed', 'et': 'and; et … et, both … and', 'poenās': 'acc. pl. of poena: penalty', 'dabant': 'impf. 3rd pl. of dō: gave (poenās dare: pay the penalty)',
      'gāius': 'Gaius (nom.)', 'bonus': 'good', 'ōrātor': 'orator (nom.)', 'magnus': 'great', 'semper': 'always', 'prūdēns': 'prudent (3rd decl. adj.)', 'laudant': '3rd pl. of laudō: praise', 'culpant': '3rd pl. of culpō: blame',
      'vōs': 'you (pl.)', 'puerī': 'voc. pl. of puer: boys', 'cicerōnem': 'acc. of Cicerō', 'sallustium': 'acc. of Sallustius: Sallust', 'legite': 'pl. imperative of legō: read!', 'tum': 'then', 'iūdicāte': 'pl. imperative of iūdicō: judge!'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What did Catiline want?', options: ['To be consul', 'To be king', 'To leave Rome', 'To become an orator'], answer: 0, explain: 'Hic cōnsul esse optābat.' },
      { id: 'r2', type: 'mc', prompt: 'Why did Catiline sit alone in the senate?', options: ['No senator wanted to sit with him', 'He was the consul', 'He arrived late', 'He was ill'], answer: 0, explain: 'nūllus senātor cum illō sedēre optābat.' },
      { id: 'r3', type: 'mc', prompt: 'What happened to the conspirators who stayed in Rome?', options: ['They paid the penalty', 'They became consuls', 'They fled to Greece', 'They were pardoned'], answer: 0, explain: 'poenās dabant.' },
      { id: 'r4', type: 'mc', prompt: 'What does Marcus advise his sons?', options: ['To read both Cicero and Sallust and judge for themselves', 'To believe only Cicero', 'To admire Catiline', 'To become orators'], answer: 0, explain: 'et Cicerōnem et Sallustium legite, et tum iūdicāte.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Accusative singular masculine of <span class="la">hic</span>:', options: ['hunc', 'hanc', 'hoc', 'huic'], answer: 0, explain: 'hic, huius, huic, hunc, hōc.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">illārum</span>:', options: ['of those (f.)', 'to those (f.)', 'those (f. acc.)', 'of that (f.)'], answer: 0, explain: 'Genitive plural feminine, regular like bonārum.' },
      { id: 't3', type: 'mc', prompt: 'Dative singular of <span class="la">sōlus</span>:', options: ['sōlī', 'sōlō', 'sōlae', 'sōlīus'], answer: 0, explain: 'One of the nine: dative -ī for all genders.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Ist___ verba nōn amō.</span>', hint: 'those (n. pl. acc.) words of yours', answers: ['a'], full: 'Ista verba nōn amō.', explain: 'Neuter plural like illa.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Alter frāter laetus est, alt___ miser.</span>', hint: 'the other', answers: ['er'], full: 'Alter frāter laetus est, alter miser.', explain: 'alter … alter: the one … the other.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Hanc urbem amō.', model: 'I love this city.', accepted: ['i love this city', 'i like this city'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'that girl (nom.)', model: 'illa puella', accepted: ['illa puella'], explain: 'Feminine nominative of ille. Illa is the ancestor of the Romance articles French and Italian la.' },
      { id: 't8', type: 'mc', prompt: 'Which group has the genitive in <span class="la">-īus</span>?', options: ['ūnus, sōlus, tōtus', 'bonus, malus, magnus', 'rēx, lēx, pāx', 'amīcus, servus, dominus'], answer: 0, explain: 'The UNUS NAUTA adjectives.' },
      { id: 't9', type: 'mc', prompt: '<span class="la">aliud</span> is:', options: ['neuter nominative/accusative of alius', 'masculine accusative', 'a verb', 'genitive of alius'], answer: 0, explain: 'Like illud, istud.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">Senātus haec intellegit</span>: <span class="la">haec</span> is', options: ['neuter plural: these things', 'feminine singular: this woman', 'nominative singular masculine', 'an adverb'], answer: 0, explain: 'The senate understands these things.' },
      { id: 't11', type: 'mc', prompt: 'German <em>der, die, das</em> developed from:', options: ['a demonstrative, as Romance le, la from ille', 'Latin ille', 'the numeral one', 'a Greek article'], answer: 0, explain: 'The same development, independently.' }
    ]
  },

  reference: [
    { title: 'hic, haec, hoc', headers: ['', 'm.', 'f.', 'n.', 'm. pl.', 'f. pl.', 'n. pl.'], rows: [
      ['Nom.', 'hic', 'haec', 'hoc', 'hī', 'hae', 'haec'], ['Gen.', 'huius', 'huius', 'huius', 'hōrum', 'hārum', 'hōrum'], ['Dat.', 'huic', 'huic', 'huic', 'hīs', 'hīs', 'hīs'], ['Acc.', 'hunc', 'hanc', 'hoc', 'hōs', 'hās', 'haec'], ['Abl.', 'hōc', 'hāc', 'hōc', 'hīs', 'hīs', 'hīs']
    ] },
    { title: 'ille, illa, illud (iste the same)', headers: ['', 'm.', 'f.', 'n.', 'm. pl.', 'f. pl.', 'n. pl.'], rows: [
      ['Nom.', 'ille', 'illa', 'illud', 'illī', 'illae', 'illa'], ['Gen.', 'illīus', 'illīus', 'illīus', 'illōrum', 'illārum', 'illōrum'], ['Dat.', 'illī', 'illī', 'illī', 'illīs', 'illīs', 'illīs'], ['Acc.', 'illum', 'illam', 'illud', 'illōs', 'illās', 'illa'], ['Abl.', 'illō', 'illā', 'illō', 'illīs', 'illīs', 'illīs']
    ] },
    { title: 'UNUS NAUTA: gen. -īus, dat. -ī', headers: ['Word', 'Meaning', 'Gen.', 'Dat.'], rows: [
      ['ūnus', 'one', 'ūnīus', 'ūnī'], ['ūllus', 'any', 'ūllīus', 'ūllī'], ['nūllus', 'no', 'nūllīus', 'nūllī'], ['sōlus', 'alone', 'sōlīus', 'sōlī'], ['tōtus', 'whole', 'tōtīus', 'tōtī'], ['alius', 'other', '(alterīus)', 'aliī'], ['alter', 'the other', 'alterīus', 'alterī'], ['uter', 'which of two', 'utrīus', 'utrī'], ['neuter', 'neither', 'neutrīus', 'neutrī']
    ] }
  ]
});
