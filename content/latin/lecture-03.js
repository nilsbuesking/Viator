/*
 * Latin — Lecture III: second declension masculines; adjectives in -us, -a, -um; agreement.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-03',
  number: 3,
  title: 'Amīcus certus',
  subtitle: 'The second declension (masculines); adjectives in -us, -a, -um; agreement',
  minutes: 60,

  intro: `
    <p>So far every noun has belonged to the first declension, with its <span class="la">-a</span> and <span class="la">-ae</span>. This lecture adds the second declension, the home of most masculine nouns: <span class="la">amīcus</span> “friend”, <span class="la">servus</span> “slave”, <span class="la">fīlius</span> “son”, <span class="la">puer</span> “boy”, <span class="la">vir</span> “man”. With the first two declensions in hand you can decline about half the nouns you will meet in ordinary prose.</p>
    <p>The same lecture brings the first adjectives. Latin adjectives of the commonest type use first-declension endings with feminine nouns and second-declension endings with masculine ones: <span class="la">puella bona</span>, <span class="la">puer bonus</span>. Here German has the harder system. A German adjective changes its ending according to the article in front of it (<em>ein guter Freund</em>, <em>der gute Freund</em>); a Latin adjective simply agrees with its noun in gender, number and case, and there is no article to complicate matters.</p>
    <p>One trap needs flagging at the outset: agreement means the same gender, number and case, not the same ending. <span class="la">poēta</span> is masculine, so “a good poet” is <span class="la">poēta bonus</span>, with <span class="la">-a</span> and <span class="la">-us</span> side by side. Lecture I promised this example; now it can be explained.</p>
    <p>By the end you should be able to decline any second-declension masculine noun, including those in <span class="la">-er</span>, and any adjective like <span class="la">bonus, bona</span>; make adjectives agree with nouns of either declension; and address people correctly in the vocative.</p>
  `,

  background: [
    {
      title: 'Roman names',
      html: `
        <p>A Roman citizen of the late Republic usually had three names, the <span class="la">tria nōmina</span>, and all three are second-declension masculines or behave like them. Take <span class="la">Mārcus Tullius Cicerō</span>:</p>
        <ul>
          <li>The <strong>praenōmen</strong>, the personal name, came from a very small stock, fewer than twenty in common use, and was normally abbreviated: <span class="la">M.</span> Mārcus, <span class="la">C.</span> Gāius (the C preserves an old spelling for the <em>g</em> sound), <span class="la">Cn.</span> Gnaeus, <span class="la">L.</span> Lūcius, <span class="la">P.</span> Pūblius, <span class="la">Q.</span> Quīntus, <span class="la">T.</span> Titus, <span class="la">Ti.</span> Tiberius. Inscriptions are full of these abbreviations.</li>
          <li>The <strong>nōmen</strong>, the family or clan name, usually ends in <span class="la">-ius</span>: <span class="la">Tullius</span>, <span class="la">Iūlius</span>, <span class="la">Cornēlius</span>.</li>
          <li>The <strong>cognōmen</strong> began as a nickname and became the name of a branch of the family. Many are unflattering: <span class="la">Cicerō</span> means “chickpea”, <span class="la">Nāsō</span> (Ovid’s) “nose”, <span class="la">Brūtus</span> “dull”.</li>
        </ul>
        <p>Women normally had no personal name of their own in this system. A daughter took the feminine form of her father’s <span class="la">nōmen</span>, which is why so many Roman women are called by first-declension names: Cicero’s daughter was <span class="la">Tullia</span>, Caesar’s <span class="la">Iūlia</span>. Sisters could be distinguished as <span class="la">Maior</span> and <span class="la">Minor</span>, the elder and the younger. A freed slave took the praenōmen and nōmen of the former owner and kept his own name as a cognōmen: Cicero’s secretary Tiro became <span class="la">Mārcus Tullius Tīrō</span>.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Funerary_relief_of_Publius_Gessius_and_family_(Boston_MFA_37.100)_02.jpg/960px-Funerary_relief_of_Publius_Gessius_and_family_(Boston_MFA_37.100)_02.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Funerary_relief_of_Publius_Gessius_and_family_(Boston_MFA_37.100)_02.jpg/500px-Funerary_relief_of_Publius_Gessius_and_family_(Boston_MFA_37.100)_02.jpg|https://upload.wikimedia.org/wikipedia/commons/9/90/Funerary_relief_of_Publius_Gessius_and_family_(Boston_MFA_37.100)_02.jpg" alt="Roman funerary relief with three portrait busts and inscriptions above them"><figcaption>Funerary relief of the Gessius family, 1st century BC (Museum of Fine Arts, Boston). The names inscribed over the portraits show freed members of the household carrying their former owner’s family name, Gessius or Gessia. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Funerary_relief_of_Publius_Gessius_and_family_(Boston_MFA_37.100)_02.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Master and slave',
      html: `
        <p>Two words of this lecture, <span class="la">dominus</span> and <span class="la">servus</span>, name the basic relation of Roman society. Slavery was everywhere in the Roman world: in households, on farms, in mines, and in skilled work as clerks, teachers and doctors. Estimates of the slave population of Roman Italy in the late Republic vary widely, from about a sixth to a third of the inhabitants, and none is secure; the uncertainty itself shows how thin the evidence is.</p>
        <p>The Latin <span class="la">familia</span> was not the German <em>Familie</em>. It meant the whole household under the authority of its head, the <span class="la">pater familiās</span>: wife, children, and slaves. Freeing slaves was common, especially in towns, and freed men and women (<span class="la">lībertī</span>, <span class="la">lībertae</span>) and their descendants made up a large part of the urban population. Many of the people whose names survive on Roman tombstones were former slaves.</p>
        <p class="aside">Roman texts were mostly written by and for slave owners, and they show slavery from that side. Where this course uses <span class="la">servus</span> in sentences, it is to reflect the world the texts come from, not to make it harmless.</p>
      `
    },
    {
      title: 'Older Latin: -os and -om',
      html: `
        <p>The endings <span class="la">-us</span> and <span class="la">-um</span> of the second declension were once <span class="la">-os</span> and <span class="la">-om</span>, and early inscriptions show them. The Duenos inscription, mentioned in Lecture I, gets its modern name from its word <span class="la">duenos</span>, which is the early form of <span class="la">bonus</span> “good”. Two changes separate them: <span class="la">-os</span> became <span class="la">-us</span>, and the initial <span class="la">dw-</span> became <span class="la">b-</span>, as it did in <span class="la">duellum</span>, the old word for war, which became <span class="la">bellum</span>.</p>
        <p>The same declension continues the Indo-European o-stems, the largest class of nouns in the parent language. Greek kept the vowel (<em>lógos</em>, <em>ánthrōpos</em>), Latin weakened it. German has lost the endings altogether, but you can still see the pattern in loanwords: <em>Globus</em>, <em>Zirkus</em>, <em>Status</em> keep the Latin <span class="la">-us</span>.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Duenos_inscription.jpg/960px-Duenos_inscription.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Duenos_inscription.jpg/500px-Duenos_inscription.jpg|https://upload.wikimedia.org/wikipedia/commons/3/33/Duenos_inscription.jpg" alt="Archaic Latin letters scratched around a small clay vessel"><figcaption>The Duenos inscription, scratched on a small three-part clay vessel found in Rome (Antikensammlung, Berlin). Its word <span class="la">duenos</span> is the early form of <span class="la">bonus</span>. The text runs from right to left and its meaning is still disputed. <span class="credit">Author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Duenos_inscription.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Amīcus certus in rē incertā cernitur.</p>
    <p>“A sure friend is recognised in an unsure situation.” Cicero quotes this line from the early Roman poet Ennius in his dialogue on friendship, <em>Laelius dē amīcitiā</em> (§ 64). In English it survives as “a friend in need is a friend indeed”.</p>
    <p>You can already read most of it. <span class="la">Amīcus certus</span> is a second-declension noun with an adjective agreeing in the nominative masculine singular. <span class="la">in rē incertā</span> is <span class="la">in</span> with the ablative of <span class="la">rēs</span> “thing, situation”, a fifth-declension noun (Lecture XXIII), with an adjective agreeing. <span class="la">cernitur</span> “is discerned” is a passive (Lecture XIX). Ennius plays on the sounds: <span class="la">certus</span>, <span class="la">incertā</span>, <span class="la">cernitur</span>.</p>
    <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cicero_-_Musei_Capitolini.JPG/960px-Cicero_-_Musei_Capitolini.JPG" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cicero_-_Musei_Capitolini.JPG/500px-Cicero_-_Musei_Capitolini.JPG|https://upload.wikimedia.org/wikipedia/commons/4/40/Cicero_-_Musei_Capitolini.JPG" alt="Marble portrait bust of Cicero"><figcaption>Portrait bust of Cicero, Capitoline Museums, Rome. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Cicero_-_Musei_Capitolini.JPG" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
  `,

  pronunciation: `
    <h3>-ius, -iī, -ī</h3>
    <p>In nouns like <span class="la">fīlius</span> the <span class="la">i</span> is a full vowel: <span class="la">FĪ-li-us</span>, three syllables, not “filjus”. The genitive <span class="la">fīliī</span> is <span class="la">FĪ-li-ī</span>. Poets of the classical period often contract it to <span class="la">fīlī</span>, with the stress unchanged: <span class="la">FĪ-lī</span>.</p>
    <h3>Vocatives in -ī</h3>
    <p>Names in <span class="la">-ius</span> have a vocative in <span class="la">-ī</span>, which modern books usually stress as if the lost syllable were still there: <span class="la">Vergílī</span> from <span class="la">Vergilius</span>, though by the ordinary rule a three-syllable word with a short second syllable would be stressed on the first. The ancient evidence is divided. Aulus Gellius (<em>Noctes Atticae</em> 13.26) quotes Nigidius Figulus, a contemporary of Cicero, who taught that the vocative <span class="la">Valerī</span> had its accent on the first syllable, unlike the genitive; Gellius adds that anyone who followed that rule in his own day, the second century AD, would be laughed at. So the stress <span class="la">Valérī</span>, <span class="la">Vergílī</span> was usual later, and possibly not yet in Cicero’s time.</p>
    <h3>-er nouns</h3>
    <p><span class="la">puer</span>, <span class="la">ager</span>, <span class="la">magister</span>, <span class="la">vir</span>: a clear final <span class="la">-er</span> with a rolled <span class="la">r</span>, never the German <em>-a</em> of <em>Vater</em>. In <span class="la">ager, agrī</span> the <span class="la">g</span> is hard in both forms.</p>
  `,

  grammar: [
    {
      title: '1. The second declension: nouns in -us',
      html: `
        <p>Second-declension nouns have a genitive singular in <span class="la">-ī</span>. Most are masculine and end in <span class="la">-us</span> in the nominative. As in the first declension, take the base from the genitive (<span class="la">amīc-</span>) and add the endings:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th><th>Endings</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">amīcus</td><td class="la">amīcī</td><td class="la">-us · -ī</td></tr>
            <tr><th>Gen.</th><td class="la">amīcī</td><td class="la">amīcōrum</td><td class="la">-ī · -ōrum</td></tr>
            <tr><th>Dat.</th><td class="la">amīcō</td><td class="la">amīcīs</td><td class="la">-ō · -īs</td></tr>
            <tr><th>Acc.</th><td class="la">amīcum</td><td class="la">amīcōs</td><td class="la">-um · -ōs</td></tr>
            <tr><th>Abl.</th><td class="la">amīcō</td><td class="la">amīcīs</td><td class="la">-ō · -īs</td></tr>
            <tr><th>Voc.</th><td class="la">amīce</td><td class="la">amīcī</td><td class="la">-e · -ī</td></tr>
          </tbody>
        </table></div>
        <p>Compare the first declension and you will see a family resemblance: accusative singular <span class="la">-am</span> / <span class="la">-um</span>, genitive plural <span class="la">-ārum</span> / <span class="la">-ōrum</span>, accusative plural <span class="la">-ās</span> / <span class="la">-ōs</span>, and the identical dative and ablative plural <span class="la">-īs</span>. The two declensions are built on the same plan with different vowels, <span class="la">a</span> and <span class="la">o</span>; that is why adjectives can use one for feminine and the other for masculine.</p>
        <h3>The vocative</h3>
        <p>This is the one declension where the vocative singular has its own form: <span class="la">-us</span> becomes <span class="la">-e</span>. <span class="la">Amīce!</span> “friend!”; <span class="la">Mārce!</span>; <span class="la">Brūte!</span>. Nouns and names in <span class="la">-ius</span> have <span class="la">-ī</span>: <span class="la">fīlī!</span> “son!”, <span class="la">Lūcī!</span>, <span class="la">Vergilī!</span>. The adjective <span class="la">meus</span> “my” has the vocative <span class="la">mī</span>: <span class="la">mī fīlī</span>, “my son”.</p>
        <h3>Forms that look alike</h3>
        <p><span class="la">amīcī</span> can be genitive singular, or nominative or vocative plural. <span class="la">amīcō</span> is dative or ablative singular; <span class="la">amīcīs</span> dative or ablative plural. As before, the verb usually decides: <span class="la">Amīcī rīdent</span> needs a plural subject, so <span class="la">amīcī</span> is nominative plural.</p>
      `
    },
    {
      title: '2. Nouns in -er, and vir',
      html: `
        <p>A smaller group of masculine nouns ends in <span class="la">-er</span> in the nominative singular. Their endings are those of <span class="la">amīcus</span> in every other form; the only question is whether the <span class="la">e</span> stays. The genitive tells you:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>keeps e</th><th>drops e</th><th></th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">puer</td><td class="la">ager</td><td class="la">vir</td></tr>
            <tr><th>Gen.</th><td class="la">puerī</td><td class="la">agrī</td><td class="la">virī</td></tr>
            <tr><th>Dat.</th><td class="la">puerō</td><td class="la">agrō</td><td class="la">virō</td></tr>
            <tr><th>Acc.</th><td class="la">puerum</td><td class="la">agrum</td><td class="la">virum</td></tr>
            <tr><th>Abl.</th><td class="la">puerō</td><td class="la">agrō</td><td class="la">virō</td></tr>
            <tr><th>Voc.</th><td class="la">puer</td><td class="la">ager</td><td class="la">vir</td></tr>
            <tr><th>Nom. pl.</th><td class="la">puerī</td><td class="la">agrī</td><td class="la">virī</td></tr>
            <tr><th>Gen. pl.</th><td class="la">puerōrum</td><td class="la">agrōrum</td><td class="la">virōrum</td></tr>
          </tbody>
        </table></div>
        <p>The rest of the plural follows <span class="la">amīcī</span>: <span class="la">-īs, -ōs, -īs</span>. The vocative singular of these nouns is the same as the nominative.</p>
        <p>This is the reason for the habit started in Lecture I: always learn the genitive with the noun. <span class="la">puer, puerī</span> and <span class="la">ager, agrī</span> look alike in the nominative and differ everywhere else. English derivatives often show which type a word is: <em>puerile</em> keeps the <em>e</em>, <em>agriculture</em> and <em>magistrate</em> drop it.</p>
        <p class="aside"><span class="la">vir</span> “man, husband” is the only common noun in <span class="la">-ir</span>, and it declines like <span class="la">puer</span>. It is related to English <em>were-</em> in <em>werewolf</em> and to old German <em>Wer-</em> in <em>Wergeld</em>, the compensation paid for killing a man.</p>
      `
    },
    {
      title: '3. Adjectives in -us, -a, -um',
      html: `
        <p>The commonest Latin adjectives have three sets of endings: second-declension endings for masculine nouns, first-declension endings for feminine ones, and a neuter set that comes with neuter nouns in Lecture IV. Dictionaries give the nominative of each: <span class="la">bonus, bona, bonum</span>, often shortened to <span class="la">bonus, -a, -um</span>.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Masculine</th><th>Feminine</th><th>Masc. pl.</th><th>Fem. pl.</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">bonus</td><td class="la">bona</td><td class="la">bonī</td><td class="la">bonae</td></tr>
            <tr><th>Gen.</th><td class="la">bonī</td><td class="la">bonae</td><td class="la">bonōrum</td><td class="la">bonārum</td></tr>
            <tr><th>Dat.</th><td class="la">bonō</td><td class="la">bonae</td><td class="la">bonīs</td><td class="la">bonīs</td></tr>
            <tr><th>Acc.</th><td class="la">bonum</td><td class="la">bonam</td><td class="la">bonōs</td><td class="la">bonās</td></tr>
            <tr><th>Abl.</th><td class="la">bonō</td><td class="la">bonā</td><td class="la">bonīs</td><td class="la">bonīs</td></tr>
            <tr><th>Voc.</th><td class="la">bone</td><td class="la">bona</td><td class="la">bonī</td><td class="la">bonae</td></tr>
          </tbody>
        </table></div>
        <p>So an adjective is two declensions you already know, chosen by the gender of the noun.</p>
      `
    },
    {
      title: '4. Agreement',
      html: `
        <p>An adjective agrees with its noun in <strong>gender</strong>, <strong>number</strong> and <strong>case</strong>. It does not have to agree in ending, and with first-declension masculines it cannot:</p>
        <ul>
          <li><span class="la">puella bona</span> (f. sg. nom.), <span class="la">puellam bonam</span> (acc.)</li>
          <li><span class="la">amīcus bonus</span> (m. sg. nom.), <span class="la">amīcōrum bonōrum</span> (gen. pl.)</li>
          <li><span class="la">poēta bonus</span> (m. sg. nom.): masculine noun of the first declension, so a masculine adjective. <span class="la">nautae bonī</span> (m. pl. nom.), <span class="la">agricolam bonum</span> (m. sg. acc.).</li>
        </ul>
        <p>When you check an agreement, ask three questions: what gender is the noun (from the dictionary, not from its ending), what number, what case? Then choose the adjective form that answers all three.</p>
        <h3>Compared with German</h3>
        <p>German adjectives agree too, but their endings also depend on whether an article stands before them and which one: <em>guter Wein</em>, <em>der gute Wein</em>, <em>ein guter Wein</em>, <em>des guten Weines</em>. Latin has no articles, so the adjective has one set of endings for each gender and nothing else to consider. The difficulty in Latin lies elsewhere: an adjective may stand far from its noun, and only the agreement shows which noun it belongs to.</p>
        <h3>Where adjectives stand</h3>
        <p>Most adjectives follow their noun: <span class="la">amīcus certus</span>, <span class="la">lingua Latīna</span>. Adjectives of size and quantity often come first: <span class="la">magnus numerus</span>, <span class="la">multī servī</span>. Placing an adjective before its noun gives it weight. Poets, and orators for effect, separate adjective and noun: <span class="la">magnam habet pecūniam</span>, “he has a great deal of money”. The agreement holds the pair together across the gap.</p>
      `
    },
    {
      title: '5. Adjectives used as nouns',
      html: `
        <p>Without a noun, a masculine adjective usually means men or people of that kind, a feminine one women: <span class="la">bonī</span> “good men, the good”, <span class="la">multī</span> “many people”, <span class="la">Rōmānī</span> “the Romans”, <span class="la">meī</span> “my people, my family”. German does the same with capitals (<em>die Guten</em>, <em>viele</em>); English often needs a noun (“the good”, “many people”).</p>
        <p>Many Latin nouns began as adjectives in this way. <span class="la">amīcus</span> is itself also an adjective, “friendly”, and in Lecture IV the neuter forms will produce nouns for things.</p>
      `
    },
    {
      title: '6. Apposition',
      html: `
        <p>A noun placed beside another noun to describe the same person or thing stands in the same case: <span class="la">Gāium, fīlium meum, videō</span>, “I see Gaius, my son”; <span class="la">Lūcius, amīcus antīquus, labōrat</span>, “Lucius, an old friend, is working”. This is <em>apposition</em>, and it works exactly as in German: <em>Ich sehe Gaius, meinen Sohn</em>. Unlike an adjective, a noun in apposition keeps its own gender: <span class="la">Tullia, fīlia Mārcī</span>, but <span class="la">Mārcus, amīcus Tulliae</span>.</p>
      `
    },
    {
      title: '7. meus and tuus; prepositions cum and sine',
      html: `
        <p>The possessives <span class="la">meus, mea, meum</span> “my” and <span class="la">tuus, tua, tuum</span> “your (sg.)” are ordinary adjectives like <span class="la">bonus</span> and agree with the thing possessed, not with the possessor: a woman says <span class="la">amīcus meus</span> of her friend, a man <span class="la">fīlia mea</span> of his daughter. The vocative of <span class="la">meus</span> is <span class="la">mī</span>. Latin uses the possessives less than English or German and leaves them out where the sense is clear: <span class="la">Fīlium amat</span>, “he loves his son”.</p>
        <p>Two prepositions take the ablative: <span class="la">cum</span> “with” (in company with) and <span class="la">sine</span> “without”. <span class="la">cum amīcīs</span>, “with friends”; <span class="la">sine pecūniā</span>, “without money”.</p>
      `
    }
  ],

  vocab: [
    { id: 'amicus', head: 'amīcus', la: 'amīcus, amīcī', g: 'm', pos: 'noun, 2nd decl.', en: 'friend', stress: 'a-MĪ-cus', deriv: 'amicable; Amigo (Spanish)', note: 'Also an adjective, “friendly”. Feminine amīca, -ae: (female) friend.' },
    { id: 'filius', head: 'fīlius', la: 'fīlius, fīliī', g: 'm', pos: 'noun, 2nd decl.', en: 'son', stress: 'FĪ-li-us', deriv: 'filial', note: 'Vocative fīlī. Feminine fīlia, -ae: daughter.' },
    { id: 'dominus', head: 'dominus', la: 'dominus, dominī', g: 'm', pos: 'noun, 2nd decl.', en: 'master, lord', stress: 'DO-mi-nus', deriv: 'dominate, domineer; dominieren', note: 'Feminine domina, -ae: mistress, lady.' },
    { id: 'servus', head: 'servus', la: 'servus, servī', g: 'm', pos: 'noun, 2nd decl.', en: 'slave', stress: 'SER-vus', deriv: 'servile, serf; the greeting Servus!', note: 'The Bavarian and Austrian greeting Servus is this word: “(your) servant”.' },
    { id: 'populus', head: 'populus', la: 'populus, populī', g: 'm', pos: 'noun, 2nd decl.', en: 'people, nation', stress: 'PO-pu-lus', deriv: 'popular, population; populär', note: 'Senātus Populusque Rōmānus: the Senate and Roman People.' },
    { id: 'animus', head: 'animus', la: 'animus, animī', g: 'm', pos: 'noun, 2nd decl.', en: 'mind, spirit, courage', stress: 'A-ni-mus', deriv: 'animosity, unanimous', note: 'In the plural often “courage, morale”.' },
    { id: 'numerus', head: 'numerus', la: 'numerus, numerī', g: 'm', pos: 'noun, 2nd decl.', en: 'number', stress: 'NU-me-rus', deriv: 'numeral, number; Nummer' },
    { id: 'oculus', head: 'oculus', la: 'oculus, oculī', g: 'm', pos: 'noun, 2nd decl.', en: 'eye', stress: 'O-cu-lus', deriv: 'ocular, binoculars; Okular', note: 'Related to German Auge and English eye, though the sound laws have hidden it.' },
    { id: 'ludus', head: 'lūdus', la: 'lūdus, lūdī', g: 'm', pos: 'noun, 2nd decl.', en: 'school; game, play', stress: 'LŪ-dus', deriv: 'ludicrous, prelude' },
    { id: 'annus', head: 'annus', la: 'annus, annī', g: 'm', pos: 'noun, 2nd decl.', en: 'year', stress: 'AN-nus', deriv: 'annual, anniversary', note: 'Hold the double n.' },
    { id: 'puer', head: 'puer', la: 'puer, puerī', g: 'm', pos: 'noun, 2nd decl.', en: 'boy; (pl.) children', stress: 'PU-er', deriv: 'puerile', note: 'Keeps the e: puerī, puerō.' },
    { id: 'ager', head: 'ager', la: 'ager, agrī', g: 'm', pos: 'noun, 2nd decl.', en: 'field, land', stress: 'A-ger', deriv: 'agriculture, agrarian', note: 'Drops the e: agrī, agrō. Cognate with German Acker and English acre (Grimm’s law g > k).' },
    { id: 'magister', head: 'magister', la: 'magister, magistrī', g: 'm', pos: 'noun, 2nd decl.', en: 'teacher, master', stress: 'ma-GIS-ter', deriv: 'master, magistrate; Meister', note: 'Drops the e: magistrī.' },
    { id: 'vir', head: 'vir', la: 'vir, virī', g: 'm', pos: 'noun, 2nd decl.', en: 'man; husband', stress: 'VIR', deriv: 'virile, virtue; werewolf, Wergeld' },

    { id: 'bonus', head: 'bonus', la: 'bonus, bona, bonum', pos: 'adjective', en: 'good', stress: 'BO-nus', deriv: 'bonus, bounty', note: 'Old Latin duenos.' },
    { id: 'malus', head: 'malus', la: 'malus, mala, malum', pos: 'adjective', en: 'bad, evil', stress: 'MA-lus', deriv: 'malice, malign', note: 'Short a; mālum with long ā is “apple”.' },
    { id: 'magnus', head: 'magnus', la: 'magnus, magna, magnum', pos: 'adjective', en: 'great, large', stress: 'MAG-nus', deriv: 'magnitude, magnificent', note: 'gn is probably pronounced ngn: MANG-nus.' },
    { id: 'parvus', head: 'parvus', la: 'parvus, parva, parvum', pos: 'adjective', en: 'small, little', stress: 'PAR-vus' },
    { id: 'multus', head: 'multus', la: 'multus, multa, multum', pos: 'adjective', en: 'much; (pl.) many', stress: 'MUL-tus', deriv: 'multitude, multiply' },
    { id: 'certus', head: 'certus', la: 'certus, certa, certum', pos: 'adjective', en: 'sure, certain, reliable', stress: 'CER-tus', deriv: 'certain, certify; Zertifikat' },
    { id: 'longus', head: 'longus', la: 'longus, longa, longum', pos: 'adjective', en: 'long', stress: 'LON-gus', deriv: 'longitude; German lang is probably related' },
    { id: 'novus', head: 'novus', la: 'novus, nova, novum', pos: 'adjective', en: 'new', stress: 'NO-vus', deriv: 'novel, novice; neu (cognate)' },
    { id: 'antiquus', head: 'antīquus', la: 'antīquus, antīqua, antīquum', pos: 'adjective', en: 'old, ancient; of long standing', stress: 'an-TĪ-quus', deriv: 'antique; antik' },
    { id: 'romanus', head: 'Rōmānus', la: 'Rōmānus, Rōmāna, Rōmānum', pos: 'adjective', en: 'Roman; (as noun) a Roman', stress: 'rō-MĀ-nus' },
    { id: 'latinus', head: 'Latīnus', la: 'Latīnus, Latīna, Latīnum', pos: 'adjective', en: 'Latin', stress: 'la-TĪ-nus' },
    { id: 'meus', head: 'meus', la: 'meus, mea, meum', pos: 'possessive adjective', en: 'my, mine', stress: 'ME-us', note: 'Vocative masculine mī: mī fīlī, my son.' },
    { id: 'tuus', head: 'tuus', la: 'tuus, tua, tuum', pos: 'possessive adjective', en: 'your, yours (one person)', stress: 'TU-us' },

    { id: 'cum', head: 'cum', la: 'cum + ablative', pos: 'preposition', en: 'with (in company with)', stress: 'CUM' },
    { id: 'sine', head: 'sine', la: 'sine + ablative', pos: 'preposition', en: 'without', stress: 'SI-ne', note: 'sine morā: without delay.' },
    { id: 'autem', head: 'autem', la: 'autem', pos: 'conjunction (postpositive)', en: 'however, but; moreover', stress: 'AU-tem', note: 'Never first in its clause: Gāius autem …' },
    { id: 'tamen', head: 'tamen', la: 'tamen', pos: 'adverb', en: 'nevertheless, still', stress: 'TA-men' },
    { id: 'numquam', head: 'numquam', la: 'numquam', pos: 'adverb', en: 'never', stress: 'NUM-quam' },
    { id: 'es', head: 'es', la: 'es; estis', pos: 'verb (irregular)', en: 'you are (sg.; pl.)', stress: 'ES · ES-tis', note: 'More forms of sum; the whole verb comes in Lecture IV.' }
  ],

  grammarCards: [
    { id: 'g3-sg', front: 'Second declension singular endings (N G D A Ab V)', back: '-us, -ī, -ō, -um, -ō, -e' },
    { id: 'g3-pl', front: 'Second declension plural endings (N G D A Ab V)', back: '-ī, -ōrum, -īs, -ōs, -īs, -ī' },
    { id: 'g3-gen', front: 'Genitive singular ending that identifies the second declension', back: '-ī: amīcus, amīcī' },
    { id: 'g3-voc', front: 'Vocative of amīcus, Mārcus, fīlius, Lūcius', back: 'amīce, Mārce, fīlī, Lūcī' },
    { id: 'g3-mi', front: 'Vocative of meus', back: 'mī: mī fīlī, my son' },
    { id: 'g3-er', front: 'puer and ager: how do you know whether the e stays?', back: 'From the genitive: puer, puerī (keeps e); ager, agrī (drops e)' },
    { id: 'g3-vir', front: 'Decline vir in the singular', back: 'vir, virī, virō, virum, virō, vir' },
    { id: 'g3-amici', front: 'amīcī: which cases?', back: 'Gen. sg.; nom. and voc. pl.' },
    { id: 'g3-amico', front: 'amīcō: which cases?', back: 'Dat. and abl. sg.' },
    { id: 'g3-adj', front: 'Nominatives of bonus in three genders', back: 'bonus (m.), bona (f.), bonum (n.)' },
    { id: 'g3-agree', front: 'An adjective agrees with its noun in …', back: 'gender, number and case (not necessarily ending)' },
    { id: 'g3-poeta', front: 'A good poet: poēta …?', back: 'poēta bonus: poēta is masculine' },
    { id: 'g3-ger', front: 'Why are Latin adjective endings simpler than German ones?', back: 'No article: one set of endings per gender, no strong/weak forms.' },
    { id: 'g3-subst', front: 'multī, bonī, Rōmānī without a noun', back: 'many people, good men, the Romans' },
    { id: 'g3-appos', front: 'Gāium, fīlium meum, videō: why fīlium?', back: 'Apposition: same case as the noun it explains.' },
    { id: 'g3-poss', front: 'A woman speaks of her (male) friend: amīcus …?', back: 'amīcus meus: the possessive agrees with the thing possessed.' },
    { id: 'g3-cum', front: 'cum and sine take which case?', back: 'Ablative: cum amīcīs, sine pecūniā' },
    { id: 'g3-names', front: 'The tria nōmina of Cicero', back: 'Mārcus (praenōmen) Tullius (nōmen) Cicerō (cognōmen)' },
    { id: 'g3-women', front: 'How were Roman daughters named?', back: 'Feminine of the father’s nōmen: Tullia, Iūlia' },
    { id: 'g3-abbr', front: 'M., C., Cn., L., P., Q., T.', back: 'Mārcus, Gāius, Gnaeus, Lūcius, Pūblius, Quīntus, Titus' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Which form is accusative plural of <span class="la">servus</span>?', options: ['servōs', 'servī', 'servōrum', 'servīs'], answer: 0, explain: '-ōs, parallel to first-declension -ās.' },
    { id: 'e2', type: 'mc', prompt: 'The vocative of <span class="la">fīlius</span> is:', options: ['fīlī', 'fīlie', 'fīlius', 'fīliī'], answer: 0, explain: 'Nouns in -ius have -ī in the vocative.' },
    { id: 'e3', type: 'mc', prompt: 'Which noun drops the <em>e</em> in the other cases?', options: ['magister, magistrī', 'puer, puerī', 'vir, virī', 'gener, generī (son-in-law)'], answer: 0, explain: 'The genitive shows it: magistrī. puer keeps it (puerī).' },
    { id: 'e4', type: 'mc', prompt: '“A good sailor” is:', options: ['nauta bonus', 'nauta bona', 'nautus bonus', 'nauta bonum'], answer: 0, explain: 'nauta is masculine, so the adjective is masculine, whatever the noun’s ending.' },
    { id: 'e5', type: 'mc', prompt: 'In <span class="la">Amīcī rīdent</span>, <span class="la">amīcī</span> is:', options: ['nominative plural', 'genitive singular', 'vocative plural', 'dative singular'], answer: 0, explain: 'The plural verb needs a plural subject.' },
    { id: 'e6', type: 'mc', prompt: 'A woman says “my friend” (male):', options: ['amīcus meus', 'amīcus mea', 'amīca mea', 'amīcus meī'], answer: 0, explain: 'The possessive agrees with the friend, not with the speaker.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Dominus serv___ laudat.</span>', hint: 'the slaves: object', answers: ['ōs'], full: 'Dominus servōs laudat.', explain: 'Accusative plural -ōs.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Fīlius agricol___ in agrō labōrat.</span>', hint: 'of the farmer', answers: ['ae'], full: 'Fīlius agricolae in agrō labōrat.', explain: 'agricola is first declension: genitive -ae.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Puerī cum magistr___ ambulant.</span>', hint: 'with the teacher', answers: ['ō'], full: 'Puerī cum magistrō ambulant.', explain: 'cum + ablative; magister drops the e: magistrō.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Poēta bon___ fābulās scrībit.</span> (scrībit: writes)', hint: 'good: agreeing with poēta', answers: ['us'], full: 'Poēta bonus fābulās scrībit.', explain: 'poēta is masculine.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Salvē, mī fīl___!</span>', hint: 'vocative', answers: ['ī'], full: 'Salvē, mī fīlī!', explain: 'Vocative of fīlius: fīlī; of meus: mī.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Multās puell___ bonās videō.</span>', hint: 'girls', answers: ['ās'], full: 'Multās puellās bonās videō.', explain: 'Accusative plural feminine: puellās, matching multās and bonās.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">servus bonus</span> (good slave).', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['servus bonus', 'servī bonī'] },
      { label: 'Gen.', answers: ['servī bonī', 'servōrum bonōrum'] },
      { label: 'Dat.', answers: ['servō bonō', 'servīs bonīs'] },
      { label: 'Acc.', answers: ['servum bonum', 'servōs bonōs'] },
      { label: 'Abl.', answers: ['servō bonō', 'servīs bonīs'] },
      { label: 'Voc.', answers: ['serve bone', 'servī bonī'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">ager, agrī</span> m.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['ager', 'agrī'] },
      { label: 'Gen.', answers: ['agrī', 'agrōrum'] },
      { label: 'Dat.', answers: ['agrō', 'agrīs'] },
      { label: 'Acc.', answers: ['agrum', 'agrōs'] },
      { label: 'Abl.', answers: ['agrō', 'agrīs'] },
      { label: 'Voc.', answers: ['ager', 'agrī'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each phrase to its case.', pairs: [
      ['amīcōrum bonōrum', 'gen. pl.'], ['puerō parvō', 'dat. or abl. sg.'], ['virum magnum', 'acc. sg.'], ['Mārce', 'voc. sg.'], ['poētās antīquōs', 'acc. pl.']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Gāium, fīlium meum, multī amīcī laudant.', tokens: ['Many friends', 'praise', 'Gaius,', 'my son'], explain: 'multī amīcī is the subject (nom. pl.); Gāium and fīlium meum are accusative, in apposition.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Magister bonus puerōs parvōs docet.', model: 'The good teacher teaches the little boys.', accepted: ['good teacher teaches little boys', 'good teacher teaches small boys', 'good teacher teaches little children', 'good teacher teaches small children', 'good teacher is teaching little boys', 'good teacher is teaching small boys'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Rōmānī multōs agrōs habent.', model: 'The Romans have many fields.', accepted: ['romans have many fields', 'romans have much land', 'romans own many fields', 'romans possess many fields'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Sine amīcīs vīta nōn est bona.', model: 'Without friends life is not good.', accepted: ['without friends life is not good', 'life is not good without friends', 'life without friends is not good'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'The man sees the small field.', model: 'Vir agrum parvum videt.', accepted: ['vir agrum parvum videt', 'vir parvum agrum videt'] },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'We praise good poets.', model: 'Poētās bonōs laudāmus.', accepted: ['poētās bonōs laudāmus', 'bonōs poētās laudāmus'] },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'Hello, my son!', model: 'Salvē, mī fīlī!', accepted: ['salvē mī fīlī'] },
    { id: 'e23', type: 'mc', prompt: 'Cicero’s daughter was called:', options: ['Tullia', 'Cicerōna', 'Mārca', 'Cornēlia'], answer: 0, explain: 'The feminine of the father’s nōmen, Tullius.' },
    { id: 'e24', type: 'mc', prompt: 'On an inscription, <span class="la">CN.</span> stands for:', options: ['Gnaeus', 'Cornēlius', 'Gāius', 'Cnossus'], answer: 0, explain: 'C stands for the g sound in the old abbreviations: C. Gāius, Cn. Gnaeus.' },
    { id: 'e25', type: 'mc', prompt: 'Old Latin <span class="la">duenos</span> is classical:', options: ['bonus', 'duo', 'deus', 'dominus'], answer: 0, explain: '-os > -us and dw- > b-, as in duellum > bellum.' }
  ],

  reading: {
    title: 'Amīcus certus',
    note: 'Original passage: a farmer and an old friend. Tap any word.',
    text: 'Mārcus agricola est et agrōs magnōs habet. Fīlium parvum habet, Gāium, et multōs servōs. Servī in agrīs labōrant. Gāius autem in agrō nōn labōrat: cum puerīs in lūdō est, et magister puerōs linguam Latīnam docet. Magister bonus est, sed puerī īram magistrī timent.\nHodiē Lūcius, amīcus antīquus Mārcī, Mārcum in agrō videt. Lūcius nauta est, sed nunc pecūniam nōn habet. Mārcus amīcum salūtat: “Salvē, mī Lūcī! Cūrās tuās videō. Nōlī timēre!” Tum Mārcus amīcō pecūniam dat. Lūcius: “Ō Mārce, amīcus bonus es! Poētae antīquī amīcōs certōs semper laudant.” Et Mārcus: “Amīcum certum, mī Lūcī, in cūrīs vidēmus.”',
    translation: 'Marcus is a farmer and has large fields. He has a small son, Gaius, and many slaves. The slaves work in the fields. Gaius, however, does not work in the field: he is with the boys at school, and the teacher teaches the boys the Latin language. The teacher is good, but the boys fear the teacher’s anger. Today Lucius, an old friend of Marcus, sees Marcus in the field. Lucius is a sailor, but now he has no money. Marcus greets his friend: “Hello, my Lucius! I see your worries. Don’t be afraid!” Then Marcus gives his friend money. Lucius: “Oh Marcus, you are a good friend! The old poets always praise sure friends.” And Marcus: “We see a sure friend, my Lucius, in times of trouble.”',
    notes: [
      { ref: 'agrōs magnōs', html: 'Masculine accusative plural: noun and adjective have the same ending here because both are second declension.' },
      { ref: 'Fīlium parvum habet, Gāium', html: '<span class="la">Gāium</span> is in apposition to <span class="la">fīlium</span>: same case, accusative. Note that Latin does not need “his”: <span class="la">fīlium habet</span>, “he has a son”.' },
      { ref: 'Gāius autem', html: '<span class="la">autem</span> never stands first in its clause; it follows the first word.' },
      { ref: 'cum puerīs in lūdō', html: 'Two prepositions with the ablative: <span class="la">cum</span> “with” and <span class="la">in</span> “in”. <span class="la">puerīs</span> is the ablative plural of <span class="la">puer</span>, which keeps its <em>e</em>.' },
      { ref: 'īram magistrī', html: '<span class="la">magistrī</span> is genitive singular: the <em>e</em> of <span class="la">magister</span> drops.' },
      { ref: 'amīcus antīquus Mārcī', html: '<span class="la">antīquus</span> here means “of long standing”: an old friend, not an aged one.' },
      { ref: 'Salvē, mī Lūcī!', html: 'Two vocatives: <span class="la">mī</span> from <span class="la">meus</span>, <span class="la">Lūcī</span> from <span class="la">Lūcius</span>. Romans used <span class="la">mī</span> with a name as a warm form of address.' },
      { ref: 'amīcō pecūniam dat', html: 'Dative of the indirect object (<span class="la">amīcō</span>, “to his friend”) and accusative of the direct object.' },
      { ref: 'Poētae antīquī', html: 'The best example of agreement without matching endings: <span class="la">poētae</span> is first declension but masculine, so the adjective takes the masculine <span class="la">-ī</span>.' },
      { ref: 'Amīcum certum … in cūrīs vidēmus', html: 'Marcus’s own simpler version of Ennius’s line, which is quoted in the sources panel of this lecture.' }
    ],
    glosses: {
      'mārcus': 'Marcus (nom.)', 'mārcum': 'acc. of Mārcus', 'mārcī': 'gen. of Mārcus: of Marcus', 'mārce': 'voc. of Mārcus', 'agricola': 'nom. sg. of agricola (m.): farmer', 'est': 'is', 'et': 'and', 'agrōs': 'acc. pl. of ager, agrī m. field', 'magnōs': 'acc. pl. m. of magnus: large',
      'fīlium': 'acc. sg. of fīlius: son', 'parvum': 'acc. sg. m. of parvus: small', 'habet': '3rd sg. pres. of habeō: has', 'gāium': 'acc. of Gāius', 'gāius': 'Gaius (nom.)', 'multōs': 'acc. pl. m. of multus: many', 'servōs': 'acc. pl. of servus: slaves', 'servī': 'nom. pl. of servus: slaves',
      'in': 'in (+ abl.)', 'agrīs': 'abl. pl. of ager: fields', 'labōrant': '3rd pl. pres. of labōrō: work', 'autem': 'however (never first)', 'agrō': 'abl. sg. of ager', 'nōn': 'not', 'labōrat': '3rd sg. pres. of labōrō', 'cum': 'with (+ abl.)', 'puerīs': 'abl. pl. of puer: boys', 'lūdō': 'abl. sg. of lūdus: school',
      'magister': 'nom. sg. of magister, magistrī m. teacher', 'puerōs': 'acc. pl. of puer', 'linguam': 'acc. sg. of lingua: language', 'latīnam': 'acc. sg. f. of Latīnus: Latin', 'docet': '3rd sg. pres. of doceō: teaches', 'bonus': 'nom. sg. m. of bonus: good', 'sed': 'but', 'puerī': 'nom. pl. of puer: boys',
      'īram': 'acc. sg. of īra: anger', 'magistrī': 'gen. sg. of magister: of the teacher', 'timent': '3rd pl. pres. of timeō: fear', 'hodiē': 'today', 'lūcius': 'Lucius (nom.)', 'lūcī': 'voc. of Lūcius', 'amīcus': 'nom. sg. of amīcus: friend', 'antīquus': 'nom. sg. m. of antīquus: old, long-standing',
      'videt': '3rd sg. pres. of videō: sees', 'nauta': 'nom. sg. of nauta (m.): sailor', 'nunc': 'now', 'pecūniam': 'acc. sg. of pecūnia: money', 'amīcum': 'acc. sg. of amīcus', 'salūtat': '3rd sg. pres. of salūtō: greets', 'salvē': 'hello! (to one)', 'mī': 'voc. of meus: my',
      'cūrās': 'acc. pl. of cūra: worries', 'tuās': 'acc. pl. f. of tuus: your', 'videō': '1st sg. pres. of videō: I see', 'nōlī': 'don’t …! (+ inf.)', 'timēre': 'inf. of timeō: to fear', 'tum': 'then', 'amīcō': 'dat. sg. of amīcus: to his friend', 'dat': '3rd sg. pres. of dō: gives',
      'ō': 'oh! (with a vocative)', 'es': '2nd sg. of sum: you are', 'poētae': 'nom. pl. of poēta (m.): poets', 'antīquī': 'nom. pl. m. of antīquus: old', 'amīcōs': 'acc. pl. of amīcus', 'certōs': 'acc. pl. m. of certus: sure, reliable', 'semper': 'always', 'laudant': '3rd pl. pres. of laudō: praise',
      'certum': 'acc. sg. m. of certus', 'cūrīs': 'abl. pl. of cūra: troubles', 'vidēmus': '1st pl. pres. of videō: we see'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Where is Gaius while the slaves work?', options: ['At school with the boys', 'In the field', 'On a ship', 'With Lucius'], answer: 0, explain: 'cum puerīs in lūdō est.' },
      { id: 'r2', type: 'mc', prompt: 'What is Lucius’s problem?', options: ['He has no money', 'He has no friends', 'He fears the teacher', 'He has no fields'], answer: 0, explain: 'nunc pecūniam nōn habet.' },
      { id: 'r3', type: 'mc', prompt: 'In <span class="la">Poētae antīquī</span>, why does the adjective end in <span class="la">-ī</span>?', options: ['poēta is masculine', 'it copies the noun’s ending', 'it is genitive singular', 'adjectives always end in -ī in the plural'], answer: 0, explain: 'Masculine nominative plural; the noun happens to be first declension.' },
      { id: 'r4', type: 'mc', prompt: 'What does Marcus’s last sentence say?', options: ['A reliable friend shows himself in trouble', 'Friends cause trouble', 'Old poets have no friends', 'We should fear our friends'], answer: 0, explain: 'His version of Ennius: amīcus certus in rē incertā cernitur.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Genitive plural of <span class="la">vir</span>:', options: ['virōrum', 'virārum', 'virī', 'virīs'], answer: 0, explain: '-ōrum, second declension.' },
      { id: 't2', type: 'gap', prompt: '<span class="la">Amīc___ meī rīdent.</span>', hint: 'my friends: subject', answers: ['ī'], full: 'Amīcī meī rīdent.', explain: 'Nominative plural masculine.' },
      { id: 't3', type: 'mc', prompt: '“The good farmers” (subject):', options: ['agricolae bonī', 'agricolae bonae', 'agricolī bonī', 'agricolae bonōrum'], answer: 0, explain: 'agricola is masculine; nominative plural masculine of bonus is bonī.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Ō serv___, labōrā!</span>', hint: 'vocative singular', answers: ['e'], full: 'Ō serve, labōrā!', explain: '-us > -e in the vocative.' },
      { id: 't5', type: 'translate', dir: 'la-en', source: 'Puerī sine magistrō rīdent.', model: 'The boys laugh without the teacher.', accepted: ['boys laugh without teacher', 'boys are laughing without teacher', 'children laugh without teacher', 'without teacher boys laugh'] },
      { id: 't6', type: 'translate', dir: 'en-la', source: 'The farmer has a large field.', model: 'Agricola agrum magnum habet.', accepted: ['agricola agrum magnum habet', 'agricola magnum agrum habet'] },
      { id: 't7', type: 'mc', prompt: 'Which pair keeps the <em>e</em> in all cases?', options: ['puer, puerī', 'ager, agrī', 'magister, magistrī', 'none of them'], answer: 0, explain: 'The genitive shows it.' },
      { id: 't8', type: 'mc', prompt: 'A freed slave of Cicero called Tiro was named:', options: ['Mārcus Tullius Tīrō', 'Tīrō Cicerōnis', 'Tullius Tīrōnius', 'Mārcus Tīrō'], answer: 0, explain: 'Freedmen took their former owner’s praenōmen and nōmen.' },
      { id: 't9', type: 'gap', prompt: '<span class="la">Fēminae cum fīli___ ambulant.</span>', hint: 'with their sons', answers: ['īs'], full: 'Fēminae cum fīliīs ambulant.', explain: 'cum + ablative plural.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">Amīcus certus in rē incertā cernitur</span> is quoted by Cicero from:', options: ['Ennius', 'Virgil', 'Horace', 'Catullus'], answer: 0, explain: 'Laelius dē amīcitiā 64.' },
      { id: 't11', type: 'mc', prompt: 'German adjective endings are harder than Latin ones because:', options: ['they also depend on the article', 'German has more cases', 'German adjectives do not agree', 'Latin has no adjectives of this kind'], answer: 0, explain: 'guter Wein, der gute Wein: Latin has no article to complicate the choice.' }
    ]
  },

  reference: [
    { title: 'Second declension: amīcus, -ī m.', headers: ['', 'Singular', 'Plural'], rows: [['Nom.', 'amīcus', 'amīcī'], ['Gen.', 'amīcī', 'amīcōrum'], ['Dat.', 'amīcō', 'amīcīs'], ['Acc.', 'amīcum', 'amīcōs'], ['Abl.', 'amīcō', 'amīcīs'], ['Voc.', 'amīce', 'amīcī']] },
    { title: 'Second declension in -er: puer, ager', headers: ['', 'puer', 'ager'], rows: [['Nom. sg.', 'puer', 'ager'], ['Gen. sg.', 'puerī', 'agrī'], ['Acc. sg.', 'puerum', 'agrum'], ['Nom. pl.', 'puerī', 'agrī'], ['Acc. pl.', 'puerōs', 'agrōs']] },
    { title: 'bonus, -a (masc. and fem.)', headers: ['', 'm. sg.', 'f. sg.', 'm. pl.', 'f. pl.'], rows: [['Nom.', 'bonus', 'bona', 'bonī', 'bonae'], ['Gen.', 'bonī', 'bonae', 'bonōrum', 'bonārum'], ['Dat.', 'bonō', 'bonae', 'bonīs', 'bonīs'], ['Acc.', 'bonum', 'bonam', 'bonōs', 'bonās'], ['Abl.', 'bonō', 'bonā', 'bonīs', 'bonīs'], ['Voc.', 'bone', 'bona', 'bonī', 'bonae']] }
  ]
});
