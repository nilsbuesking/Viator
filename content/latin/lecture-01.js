/*
 * Latin — Lecture I
 * Content file only. The engine (app.js) reads this structure; no code here.
 * Original material written in the conventional order of a first Latin course.
 * Every Latin form and historical claim should be checked; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-01',
  number: 1,
  title: 'Amō, amās, amat',
  subtitle: 'The verb and its endings; the first conjugation; the first declension',
  minutes: 60,

  intro: `
    <p>Latin is an <em>inflected</em> language. Where English relies on word order and small words such as <em>of</em>, <em>to</em> and <em>by</em>, Latin changes the ending of the word itself. <span class="la">Poēta puellam laudat</span> and <span class="la">Puellam poēta laudat</span> both mean “the poet praises the girl”: the ending <span class="la">-am</span> marks the girl as the person praised, wherever she stands in the sentence.</p>
    <p>A German speaker starts with an advantage here. German still marks the role of a noun, mostly on the article: <em>Der Dichter lobt das Mädchen</em> and <em>Den Dichter lobt das Mädchen</em> mean different things because of <em>der</em> and <em>den</em>, not because of word order. Latin works on the same principle, but it has no articles and puts the case ending on the noun itself, and it has two cases German lacks, the <em>ablative</em> and the <em>vocative</em>.</p>
    <p>This lecture lays the two foundations everything else rests on.</p>
    <ol>
      <li><strong>The verb.</strong> A single Latin verb form says who acts, how many, and when. <span class="la">Amat</span> is a complete sentence: “he (she, it) loves”. You will learn the six personal endings and the present tense of the largest and most regular group of verbs, the first conjugation.</li>
      <li><strong>The noun.</strong> Nouns fall into five groups called <em>declensions</em>. The first, with nouns ending in <span class="la">-a</span>, is the simplest, and its endings will reappear in adjectives and pronouns later. You will learn all six cases and what each is for.</li>
    </ol>
    <p>By the end you should be able to conjugate any verb like <span class="la">amō</span> in the present tense, decline any noun like <span class="la">puella</span>, analyse a simple sentence by its endings, and read a short passage built from this lecture’s vocabulary.</p>
    <p class="aside"><strong>How to work through a lecture.</strong> Read the background once for orientation; it is not examined. Take the pronunciation section slowly and read the examples aloud at home. Then work through the grammar a section at a time, with the vocabulary alongside. The exercises check the grammar; the reading puts it together; the test draws on everything. The flashcards are where the forms become automatic, so a few minutes a day there matters more than one long session.</p>
  `,

  background: [
    {
      title: 'Where Latin comes from',
      html: `
        <p>Latin was originally the language of <em>Latium</em>, the plain south of the Tiber around Rome. It belongs to the <em>Italic</em> branch of the Indo-European family, alongside languages such as Oscan and Umbrian that were spoken elsewhere in Italy and died out under Roman rule. Etruscan, the language of Rome’s powerful northern neighbours, was not Indo-European at all, though Latin borrowed from it, and the Latin alphabet came to Rome through the Etruscans from a western Greek alphabet.</p>
        <p>The earliest Latin is known only from a few inscriptions. The Lapis Niger in the Roman Forum and the Duenos inscription on a small vessel are usually dated to the sixth century BC, and both are hard to read. A gold brooch from Praeneste with the words <span class="la">Manios med fhefhaked Numasioi</span> (“Manius made me for Numerius”) would be older still, but its authenticity has been disputed since the 1980s. Scientific examinations published in 2011 were taken by many as supporting it, though not every scholar is persuaded. The point for a learner is that Latin changed considerably before it became the language you are learning: <span class="la">fhefhaked</span> later appears as <span class="la">fēcit</span>.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Fibula_aurea_Praeneste_CIL-14_4123-1_illustration.jpg/960px-Fibula_aurea_Praeneste_CIL-14_4123-1_illustration.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Fibula_aurea_Praeneste_CIL-14_4123-1_illustration.jpg/500px-Fibula_aurea_Praeneste_CIL-14_4123-1_illustration.jpg|https://upload.wikimedia.org/wikipedia/commons/7/7a/Fibula_aurea_Praeneste_CIL-14_4123-1_illustration.jpg" alt="Drawing of a gold brooch with an inscription along its catch-plate"><figcaption>The Praeneste brooch and its inscription, as drawn for the <em>Corpus Inscriptionum Latinarum</em> (CIL XIV 4123). Whether the brooch is genuine is still debated. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Fibula_aurea_Praeneste_CIL-14_4123-1_illustration.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Foro_Romano,Cippo_da_Lapis_Niger_scritto_in_Latino_Arcaico_VI_sec.a.C._-_panoramio.jpg/960px-Foro_Romano,Cippo_da_Lapis_Niger_scritto_in_Latino_Arcaico_VI_sec.a.C._-_panoramio.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Foro_Romano,Cippo_da_Lapis_Niger_scritto_in_Latino_Arcaico_VI_sec.a.C._-_panoramio.jpg/500px-Foro_Romano,Cippo_da_Lapis_Niger_scritto_in_Latino_Arcaico_VI_sec.a.C._-_panoramio.jpg|https://upload.wikimedia.org/wikipedia/commons/5/5a/Foro_Romano,Cippo_da_Lapis_Niger_scritto_in_Latino_Arcaico_VI_sec.a.C._-_panoramio.jpg" alt="Weathered stone post with archaic Latin letters running in alternate directions"><figcaption>The inscribed stone found beneath the Lapis Niger in the Roman Forum, one of the oldest Latin inscriptions (6th century BC). The lines run alternately up and down the stone, and much of the text is still not understood. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Foro_Romano,Cippo_da_Lapis_Niger_scritto_in_Latino_Arcaico_VI_sec.a.C._-_panoramio.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Classical Latin and after',
      html: `
        <p>What is taught as “Latin” is the written standard of roughly the first century BC and the first century AD: the prose of Cicero and Caesar, the verse of Virgil, Horace and Ovid. Later grammarians and teachers treated this period as the norm, and school grammars have followed them ever since. It was always a cultivated standard. The everyday speech of Rome and the provinces, often called Vulgar Latin, went on changing and eventually became Italian, Spanish, Portuguese, French, Romanian and the other Romance languages.</p>
        <p>Written Latin did not die with the western empire. It remained the language of the Church, of law, of scholarship and of diplomacy for more than a thousand years. Kant defended Latin dissertations at Königsberg, and Gauss published his <em>Disquisitiones arithmeticae</em> in Latin in 1801. German universities expected Latin theses well into the nineteenth century, and the Holy See still issues its most formal documents in it. A modern reader who knows Classical Latin can therefore read two thousand years of texts, with some adjustment for later vocabulary and style.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Disqvisitiones-800.jpg/960px-Disqvisitiones-800.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Disqvisitiones-800.jpg/500px-Disqvisitiones-800.jpg|https://upload.wikimedia.org/wikipedia/commons/e/e3/Disqvisitiones-800.jpg" alt="Title page of a Latin book printed in 1801"><figcaption>Title page of Gauss’s <em>Disquisitiones arithmeticae</em> (Leipzig, 1801), one of the founding works of number theory, written in Latin. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Disqvisitiones-800.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Latin and German: relatives, not parent and child',
      html: `
        <p>German does not descend from Latin, but the two are distant relatives. Both go back to Proto-Indo-European, spoken perhaps five or six thousand years ago, and many basic words share a common origin:</p>
        <div class="tablewrap"><table>
          <thead><tr><th>Latin</th><th>German</th><th>English</th></tr></thead>
          <tbody>
            <tr><td class="la">pater</td><td>Vater</td><td>father</td></tr>
            <tr><td class="la">piscis</td><td>Fisch</td><td>fish</td></tr>
            <tr><td class="la">trēs</td><td>drei</td><td>three</td></tr>
            <tr><td class="la">duo</td><td>zwei</td><td>two</td></tr>
            <tr><td class="la">cornū</td><td>Horn</td><td>horn</td></tr>
            <tr><td class="la">centum</td><td>hundert</td><td>hundred</td></tr>
            <tr><td class="la">genū</td><td>Knie</td><td>knee</td></tr>
            <tr><td class="la">est, sunt</td><td>ist, sind</td><td>is, (they) are</td></tr>
          </tbody>
        </table></div>
        <p>The differences are regular. In the <em>first Germanic sound shift</em>, described by Rasmus Rask and by Jacob Grimm (hence “Grimm’s law”), the ancestor of the Germanic languages turned inherited <em>p</em> into <em>f</em>, <em>t</em> into <em>th</em>, <em>k</em> into <em>h</em>, and <em>g</em> into <em>k</em>; Latin kept the older consonants. That is why <span class="la">pater</span> stands against <em>father</em>, <span class="la">cornū</span> against <em>horn</em>, <span class="la">genū</span> against <em>knee</em>.</p>
        <p>German then went through a <em>second</em> shift of its own, the High German consonant shift, which separates it from English: <em>t</em> became <em>z</em> or <em>ss</em>, <em>p</em> became <em>pf</em> or <em>f</em>. Hence English <em>two</em>, <em>water</em>, <em>pound</em> against German <em>zwei</em>, <em>Wasser</em>, <em>Pfund</em>. These two Lautverschiebungen explain most of what looks strange in the table above.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Alte_Nationalgalerie-Jerichau-Baumann-Gebr%C3%BCder_Grimm_DSC8174.jpg/960px-Alte_Nationalgalerie-Jerichau-Baumann-Gebr%C3%BCder_Grimm_DSC8174.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Alte_Nationalgalerie-Jerichau-Baumann-Gebr%C3%BCder_Grimm_DSC8174.jpg/500px-Alte_Nationalgalerie-Jerichau-Baumann-Gebr%C3%BCder_Grimm_DSC8174.jpg|https://upload.wikimedia.org/wikipedia/commons/4/40/Alte_Nationalgalerie-Jerichau-Baumann-Gebr%C3%BCder_Grimm_DSC8174.jpg" alt="Double portrait of two elderly men, the brothers Jacob and Wilhelm Grimm"><figcaption>Elisabeth Jerichau-Baumann, <em>Jacob and Wilhelm Grimm</em>, 1855 (Alte Nationalgalerie, Berlin). Jacob Grimm’s <em>Deutsche Grammatik</em> (1822 edition) set out the sound shift now named after him. <span class="credit">Painting in the public domain; photograph on the file page · <a href="https://commons.wikimedia.org/wiki/File:Alte_Nationalgalerie-Jerichau-Baumann-Gebr%C3%BCder_Grimm_DSC8174.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Latin words inside German',
      html: `
        <p>Quite apart from inherited words, German took over many Latin words when Germanic peoples met Roman builders, traders and soldiers on the Rhine and Danube. Several came with building in stone and tile, which Germanic builders had largely not used: <em>Mauer</em> from <span class="la">mūrus</span>, <em>Fenster</em> from <span class="la">fenestra</span>, <em>Ziegel</em> from <span class="la">tēgula</span>, <em>Keller</em> from <span class="la">cellārium</span>, <em>Straße</em> from <span class="la">(via) strāta</span>, “paved road”. <em>Wein</em> comes from <span class="la">vīnum</span>, <em>Kiste</em> from <span class="la">cista</span>, <em>Pforte</em> from <span class="la">porta</span>, <em>Pfund</em> from <span class="la">pondō</span>.</p>
        <p>These loanwords are evidence as well as curiosities. Several were borrowed early enough to go through the second consonant shift: <em>Pforte</em> and <em>Pfund</em> show <em>p</em> becoming <em>pf</em>, <em>Ziegel</em> and <em>Straße</em> show <em>t</em> becoming <em>z</em> and <em>ss</em>. And they record how the Romans of the time pronounced their words: <em>Keller</em> and <em>Kiste</em> have a hard <em>k</em>, so Latin <span class="la">c</span> was still <em>k</em> before <em>e</em> and <em>i</em>; <em>Wein</em> has a <em>w</em>, which in Old High German was still the sound of English <em>w</em>, just like Latin <span class="la">v</span>. The pronunciation section returns to this.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Ō tempora, ō mōrēs!</p>
    <p>“What times! What morals!” Cicero, <em>In Catilinam</em> I.2. In November 63 BC Cicero, then consul, denounced in the senate the conspiracy of Lucius Sergius Catilina, a disappointed aristocrat accused of plotting to seize power. The speech opens with one of the most quoted sentences in Latin:</p>
    <p class="la">Quō ūsque tandem abūtēre, Catilīna, patientiā nostrā?</p>
    <p>“How long, Catiline, will you go on abusing our patience?” You can already see two things from this lecture in it. <span class="la">Catilīna</span> is a masculine name of the first declension, and here it is in the <em>vocative</em>: Cicero is addressing him directly, in the senate, to his face. <span class="la">Patientiā nostrā</span> is in the <em>ablative</em>, because the verb <span class="la">abūtor</span> (“misuse, abuse”) takes its object in that case. The verb form <span class="la">abūtēre</span> is a future, which comes much later.</p>
    <p>In <span class="la">Ō tempora, ō mōrēs!</span> both nouns belong to the third declension and stand in the accusative, the case Latin uses for exclamations. The sentence needs no verb and no article, which is exactly the kind of compression an inflected language allows.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari_-_3.jpg/960px-Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari_-_3.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari_-_3.jpg/500px-Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari_-_3.jpg|https://upload.wikimedia.org/wikipedia/commons/8/81/Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari_-_3.jpg" alt="Fresco: Cicero standing and speaking in the Roman senate while Catiline sits apart"><figcaption>Cesare Maccari, <em>Cicero Denounces Catiline</em>, fresco, 1882–88, in the Palazzo Madama in Rome, the seat of the Italian Senate. A nineteenth-century imagination of the scene: Catiline sits isolated on an empty bench. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari_-_3.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
  `,

  pronunciation: `
    <p>This course uses the <strong>restored classical pronunciation</strong>: our best reconstruction of how educated Romans spoke in the first century BC. You will also meet two later traditions. The <em>ecclesiastical</em> pronunciation of the Catholic Church is Italianate (<span class="la">Cicerō</span> as “Tschitscherò”). The traditional <em>German school pronunciation</em>, with <span class="la">c</span> as <em>z</em> before <em>e</em> and <em>i</em> and <span class="la">ae</span> as <em>ä</em> (“Zizero”, “Zäsar”), is the one many German Gymnasien long taught, though practice varies and many now use the classical sounds. Both traditions are legitimate in their own settings; they are simply not what Cicero said.</p>

    <h3>How we know</h3>
    <p>There are no recordings, so every statement below is an inference, but the evidence is unusually good. Roman grammarians such as Quintilian and Aulus Gellius describe sounds and comment on mispronunciations. Greek writers transcribed Latin names: Cicero is <em>Kikerōn</em> (Κικέρων) and Valerius <em>Oualerios</em> (Οὐαλέριος), so <span class="la">c</span> was <em>k</em> and <span class="la">v</span> was <em>w</em>. Misspellings in graffiti from Pompeii show what ordinary speakers actually said. Loanwords into German and other languages, as in the background section, preserve older sounds, and the later Romance languages show how each sound developed. The standard modern account is W. Sidney Allen, <em>Vox Latina</em> (2nd edition, 1978).</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Inscription,_Trajan's_Column.jpg/960px-Inscription,_Trajan's_Column.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Inscription,_Trajan's_Column.jpg/500px-Inscription,_Trajan's_Column.jpg|https://upload.wikimedia.org/wikipedia/commons/f/f4/Inscription,_Trajan's_Column.jpg" alt="Roman capital letters carved on a stone panel"><figcaption>The inscription on the base of Trajan’s Column in Rome (AD 113), a model of Roman capitals. Inscriptions record spelling rather than sound, but their spellings, and the mistakes of less careful carvers, are part of the evidence for pronunciation. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Inscription,_Trajan's_Column.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>

    <h3>Why German is the better guide</h3>
    <p>For vowels, German is a much better model than English, for a precise historical reason. Between about 1400 and 1700 English went through the <em>Great Vowel Shift</em>: its long vowels moved upwards and the highest ones became diphthongs. <em>Name</em> was once pronounced roughly “nahm”, <em>fine</em> “feen”, <em>house</em> “hoos”. English spelling was becoming fixed while the shift was under way and did not follow it, so English letters no longer stand for the sounds they have in Latin and the continental languages.</p>
    <p>German also changed: Middle High German <em>mîn</em> and <em>hûs</em> became <em>mein</em> and <em>Haus</em>, a parallel diphthongisation. But German spelling followed the change, so the German letters <em>a e i o u</em> still have values close to the Latin ones. English has a second handicap as well: it reduces unstressed vowels to a neutral “uh”, which would erase exactly the endings Latin depends on.</p>

    <h3>Vowels</h3>
    <p>Every Latin vowel is either long or short. A long vowel is marked in this course with a macron (<span class="la">ā ē ī ō ū</span>); Roman texts did not mark length consistently, and most printed texts do not. Length is part of the word, not a matter of style: <span class="la">puella</span> (nominative) and <span class="la">puellā</span> (ablative) differ only in the final vowel, and <span class="la">mālum</span> (apple) and <span class="la">malum</span> (evil) are different words.</p>
    <div class="tablewrap"><table>
      <thead><tr><th>Letter</th><th>Short, as in</th><th>Long, as in</th></tr></thead>
      <tbody>
        <tr><td class="la">a</td><td><em>Mann</em>, <em>Ratte</em></td><td><em>Vater</em>, <em>Bahn</em></td></tr>
        <tr><td class="la">e</td><td><em>Bett</em>, <em>fett</em></td><td><em>Beet</em>, <em>See</em></td></tr>
        <tr><td class="la">i</td><td><em>Mitte</em>, <em>bitte</em></td><td><em>Lied</em>, <em>Biene</em></td></tr>
        <tr><td class="la">o</td><td><em>Sonne</em>, <em>offen</em></td><td><em>Boot</em>, <em>Ofen</em></td></tr>
        <tr><td class="la">u</td><td><em>Mutter</em>, <em>Butter</em></td><td><em>Mut</em>, <em>Hut</em></td></tr>
        <tr><td class="la">y</td><td><em>Hütte</em></td><td><em>Bühne</em></td></tr>
      </tbody>
    </table></div>
    <p>The German pattern, in which short vowels are slightly more open than long ones (<em>Bett</em> against <em>Beet</em>), very probably held for Latin too. The main evidence is Romance: most Romance languages merged Latin short <span class="la">i</span> with long <span class="la">ē</span>, and short <span class="la">u</span> with long <span class="la">ō</span>, which is easiest to explain if the short vowels were already open sounds close to their long neighbours. <span class="la">y</span> occurs only in Greek words and is the German <em>ü</em>.</p>

    <h3>Diphthongs</h3>
    <ul>
      <li><span class="la">ae</span> as in <em>Kaiser</em> or <em>Mai</em>. German preserves both stages of this sound in one name: <em>Kaiser</em> was borrowed from <span class="la">Caesar</span> when it was still pronounced “Kaisar”; the school spelling <em>Cäsar</em> reflects the later Latin <em>ä</em>.</li>
      <li><span class="la">au</span> as in <em>Haus</em>.</li>
      <li><span class="la">oe</span> roughly as in <em>neu</em> or <em>Leute</em>.</li>
      <li><span class="la">eu</span> and <span class="la">ei</span> are <em>not</em> the German sounds: they are <em>e</em> gliding into <em>u</em> or <em>i</em> (<span class="la">heu</span> “alas”, <span class="la">deinde</span> “then”). Both are rare.</li>
    </ul>

    <h3>Consonants</h3>
    <ul>
      <li><span class="la">c</span> is always <em>k</em>: <span class="la">Cicerō</span> is “KI-ke-rō”. <span class="la">g</span> is always as in <em>geben</em>, never as in <em>Genie</em>.</li>
      <li><span class="la">v</span> is English <em>w</em>, the one sound German lacks: <span class="la">vīta</span> is “WEE-ta”, <span class="la">vīnum</span> “WEE-num”. German <em>Wein</em> was borrowed when its <em>w</em> still had this value.</li>
      <li><span class="la">i</span> before a vowel at the start of a word or syllable is German <em>j</em>: <span class="la">iam</span> as German <em>jam</em>, <span class="la">Iūlius</span> as “Julius” said in German.</li>
      <li><span class="la">qu</span> is <em>k</em> followed by an English <em>w</em>, softer than German <em>Quelle</em>.</li>
      <li><span class="la">r</span> is rolled with the tip of the tongue, as in Italian or the rolled <em>r</em> still heard in parts of Bavaria and Switzerland, not the back-of-the-throat <em>r</em> of standard German.</li>
      <li><span class="la">h</span> as in <em>Haus</em>, though light. Uneducated Romans tended to drop it, and over-correct by adding it: Catullus (poem 84) mocks a certain Arrius for saying <span class="la">chommoda</span> and <span class="la">hīnsidiās</span>.</li>
      <li><span class="la">x</span> is <em>ks</em>. <span class="la">ch</span>, <span class="la">ph</span>, <span class="la">th</span> occur in Greek words and are <em>k</em>, <em>p</em>, <em>t</em> followed by a breath, as in <em>Kahn</em>; <span class="la">ph</span> is not <em>f</em> in the classical period.</li>
    </ul>

    <h3>Traps for German speakers</h3>
    <ul>
      <li><strong>Full final vowels.</strong> German reduces unstressed final <em>-e</em> and <em>-er</em> (<em>Liebe</em>, <em>Vater</em>). Latin never does: <span class="la">saepe</span> ends in a clear <em>e</em>, <span class="la">pater</span> in a clear <em>e</em> and a rolled <em>r</em>. Every vowel in every syllable keeps its full value.</li>
      <li><strong>s is always sharp.</strong> German voices <em>s</em> before a vowel (<em>Rose</em>, <em>Sonne</em>). Latin <span class="la">rosa</span> and <span class="la">sed</span> have the sharp <em>s</em> of <em>Bus</em> or <em>Straße</em>.</li>
      <li><strong>st and sp</strong> are never <em>scht</em> and <em>schp</em>: <span class="la">stēlla</span>, <span class="la">spērō</span>.</li>
      <li><strong>ti is t + i.</strong> German <em>Nation</em> and <em>Patient</em> have <em>ts</em>; Latin does not. <span class="la">sapientia</span> is “sa-pi-EN-ti-a”, not “sapientsia”.</li>
      <li><strong>No final hardening.</strong> German devoices final consonants (<em>Rad</em> sounds like <em>Rat</em>). Aim for a real <em>d</em> in <span class="la">ad</span>, <span class="la">quod</span>, <span class="la">id</span>.</li>
      <li><strong>Double consonants are really double.</strong> In German, <em>Mitte</em> has a single <em>t</em>; the double letter only marks the short vowel. In Latin, <span class="la">puella</span>, <span class="la">terra</span> and <span class="la">annus</span> hold the consonant, as in Italian <em>bella</em> or across German <em>Schifffahrt</em>.</li>
      <li><strong>Plain p, t, c.</strong> German <em>p</em>, <em>t</em>, <em>k</em> at the start of a word come with a puff of breath. Latin ones very probably did not, more as in French or Italian. The evidence is that the Romans had to invent the spellings <span class="la">ph</span>, <span class="la">th</span>, <span class="la">ch</span> to write the breathed Greek sounds, which would have been unnecessary if their own consonants already had that breath.</li>
    </ul>

    <h3>Stress</h3>
    <p>Latin stress is fixed by rule, unlike German, where it is part of each word and usually falls on the root. The rule depends on whether the second-last syllable (the <em>penult</em>) is heavy.</p>
    <ol>
      <li>Words of two syllables are stressed on the first: <span class="la">RO-sa</span>, <span class="la">NAU-ta</span>, <span class="la">VĪ-ta</span>.</li>
      <li>In longer words, the stress falls on the penult if it is heavy, and otherwise on the syllable before it (the <em>antepenult</em>). It never goes further back.</li>
      <li>A syllable is heavy if it contains a long vowel or diphthong (<span class="la">for-TŪ-na</span>, <span class="la">a-MĀ-re</span>) or if its vowel is followed by two consonants (<span class="la">pu-EL-la</span>, <span class="la">a-MAN-tis</span>). Otherwise it is light, and the stress moves back one syllable: <span class="la">FĒ-mi-na</span>, <span class="la">a-GRI-co-la</span>, <span class="la">HA-bi-tat</span>. Because vowel length is not visible in ordinary texts, check the stress of each new word in its vocabulary entry rather than guessing.</li>
      <li>A plosive followed by <em>l</em> or <em>r</em> (<em>tr</em>, <em>gr</em>, <em>pl</em>) usually does not make the preceding syllable heavy in prose: <span class="la">PA-tri-a</span>.</li>
      <li>An attached <span class="la">-que</span> or <span class="la">-ne</span> pulls the stress onto the syllable before it: <span class="la">po-ē-TAE-que</span>, <span class="la">a-MĀS-ne</span>.</li>
    </ol>
    <p>Scholars still debate whether the Classical Latin accent was mainly a matter of loudness, as in German, or of pitch. A moderate stress, with all unstressed vowels kept at full value, is the sensible practical choice.</p>
    <p class="aside">Each vocabulary entry shows its stress in capitals. This version has no Latin audio, because there is no reliable Latin voice on the iPhone; read the vocabulary aloud at home using this page as the reference.</p>
  `,

  grammar: [
    {
      title: '1. What a verb form tells you',
      html: `
        <p>A Latin verb form carries several pieces of information at once: <em>person</em> (who), <em>number</em> (one or more), <em>tense</em> (when), <em>mood</em> (statement, command or possibility) and <em>voice</em> (active or passive). In this lecture only person and number change; everything is present tense, indicative mood and active voice.</p>
        <p>The form consists of a <em>stem</em>, which carries the meaning, and a <em>personal ending</em>, which says who does it. The active personal endings are the same in almost every tense, so they are worth learning first and well:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th></tr></thead>
          <tbody>
            <tr><th>1st person</th><td class="la">-ō / -m &nbsp;<span class="gl">I</span></td><td class="la">-mus &nbsp;<span class="gl">we</span></td></tr>
            <tr><th>2nd person</th><td class="la">-s &nbsp;<span class="gl">you</span></td><td class="la">-tis &nbsp;<span class="gl">you (pl.)</span></td></tr>
            <tr><th>3rd person</th><td class="la">-t &nbsp;<span class="gl">he, she, it</span></td><td class="la">-nt &nbsp;<span class="gl">they</span></td></tr>
          </tbody>
        </table></div>
        <p>The 1st person singular is <span class="la">-ō</span> in the present of most verbs and <span class="la">-m</span> in several other tenses and in <span class="la">sum</span> (“I am”), which you will meet later.</p>
        <h3>Why Latin can drop the pronoun</h3>
        <p>German has kept part of this system: <em>ich liebe, du liebst, er liebt, wir lieben, ihr liebt, sie lieben</em>. But German needs the pronoun, because some of its endings coincide: <em>lieben</em> is both “we” and “they”, <em>liebt</em> both “he” and “you (pl.)”. English, with only <em>love</em> and <em>loves</em>, needs it even more. Latin has six distinct forms, so the ending alone identifies the subject and the pronoun is normally left out. <span class="la">Laudant</span> is simply “they praise”.</p>
        <p>When Latin does use a pronoun (<span class="la">ego</span> “I”, <span class="la">tū</span> “you”), it is for emphasis or contrast: <span class="la">Tū sapientiam servās; ego aquam amō</span>, “<em>you</em> preserve wisdom; <em>I</em> love the water.” You will see exactly this at the end of the reading.</p>
        <p>A 3rd person singular verb with no expressed subject can mean <em>he</em>, <em>she</em> or <em>it</em>; context decides.</p>
        <p class="aside">The endings are very old. The <em>-t</em> of <span class="la">est</span> is the same <em>-t</em> as in German <em>ist</em>, and <span class="la">sunt</span> corresponds to German <em>sind</em>: both languages inherited these forms from Indo-European.</p>
      `
    },
    {
      title: '2. The first conjugation, present tense',
      html: `
        <p>Latin verbs are grouped into four <em>conjugations</em> according to the vowel at the end of their stem. The first conjugation has stem vowel <span class="la">ā</span>. It is the largest group, and almost all of its verbs follow one pattern exactly, so learning one verb teaches you hundreds.</p>
        <h3>Finding the stem</h3>
        <p>The stem shows most clearly in the <em>infinitive</em>, the “to …” form: <span class="la">amā-re</span> “to love”. Remove the <span class="la">-re</span> and you have the present stem <span class="la">amā-</span>. Then add the personal endings:</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th></tr></thead>
          <tbody>
            <tr><th>1st</th><td><span class="la">amō</span> <span class="gl">I love</span></td><td><span class="la">amā-mus</span> <span class="gl">we love</span></td></tr>
            <tr><th>2nd</th><td><span class="la">amā-s</span> <span class="gl">you love</span></td><td><span class="la">amā-tis</span> <span class="gl">you (pl.) love</span></td></tr>
            <tr><th>3rd</th><td><span class="la">ama-t</span> <span class="gl">he/she/it loves</span></td><td><span class="la">ama-nt</span> <span class="gl">they love</span></td></tr>
          </tbody>
        </table></div>
        <p>Two sound rules explain the forms that do not look like stem plus ending:</p>
        <ul>
          <li><strong>Contraction.</strong> In the 1st person singular the stem vowel merges with the ending: an older <span class="la">*amā-ō</span> became <span class="la">amō</span>. (An asterisk marks a reconstructed form that is not actually attested.)</li>
          <li><strong>Shortening.</strong> A long vowel becomes short before final <span class="la">-t</span>, before <span class="la">-nt</span>, and before final <span class="la">-m</span> and <span class="la">-r</span>, which come later. Hence <span class="la">amat</span> and <span class="la">amant</span>, but <span class="la">amās</span>, <span class="la">amāmus</span>, <span class="la">amātis</span>. This rule runs through the whole language and will save you learning many forms separately.</li>
        </ul>
        <h3>How to translate the present</h3>
        <p>English has three present tenses: “he loves”, “he is loving”, “he does love”. Latin has one, and so does German: <span class="la">amat</span> is simply <em>er liebt</em>. Choose the English form that suits the context. With <span class="la">nōn</span>, which stands directly before the word it negates, the English “does not” form is usually best: <span class="la">nōn amat</span>, “he does not love”.</p>
        <h3>Dictionary form and principal parts</h3>
        <p>German and English dictionaries list verbs under the infinitive (<em>lieben</em>). Latin dictionaries list them under the 1st person singular present and add three more forms, the <em>principal parts</em>:</p>
        <p class="la">amō, amāre, amāvī, amātum</p>
        <p>These are “I love”, “to love”, “I have loved” and a form called the supine. Together they contain every stem the verb uses. For the first conjugation they are almost always regular (<span class="la">-ō, -āre, -āvī, -ātum</span>), but in the other conjugations the last two are often unpredictable, so the habit of learning all four from the start pays off. Only the first two are needed in this lecture.</p>
        <p class="aside">The verb <span class="la">dō, dare</span> “give” looks like a first-conjugation verb but has a short <span class="la">a</span> throughout (<span class="la">damus, datis</span>). It is the main exception, and you will meet it later.</p>
      `
    },
    {
      title: '3. Nouns: gender, number and case',
      html: `
        <p>A Latin noun has a <em>gender</em> (masculine, feminine or neuter, as in German), a <em>number</em> (singular or plural), and a <em>case</em>, which shows its job in the sentence.</p>
        <h3>No articles</h3>
        <p>Latin has no word for “the” or “a”. <span class="la">Puella</span> means “girl”, “the girl” or “a girl”, and you supply whichever the English or German needs. Usually this is easy; where it is not, context decides.</p>
        <h3>Gender</h3>
        <p>As in German, gender is a grammatical category, not a statement about the world. German <em>das Mädchen</em> is neuter and Latin <span class="la">puella</span> feminine; German <em>die Insel</em> and Latin <span class="la">īnsula</span> are both feminine; German <em>das Wasser</em> is neuter but Latin <span class="la">aqua</span> is feminine. Gender matters because adjectives and pronouns must agree with it, which comes in a later lecture.</p>
        <h3>The six cases</h3>
        <div class="tablewrap"><table>
          <thead><tr><th>Case</th><th>Main use</th><th>Example</th></tr></thead>
          <tbody>
            <tr><th>Nominative</th><td>subject; also the noun after “is”</td><td><span class="la">Puella</span> amat. <span class="gl">The girl loves.</span></td></tr>
            <tr><th>Genitive</th><td>possession and other “of” relations</td><td>rosa <span class="la">puellae</span> <span class="gl">the girl’s rose</span></td></tr>
            <tr><th>Dative</th><td>indirect object: “to, for”</td><td><span class="la">Puellae</span> rosam dat. <span class="gl">He gives the girl a rose.</span></td></tr>
            <tr><th>Accusative</th><td>direct object</td><td><span class="la">Puellam</span> laudat. <span class="gl">He praises the girl.</span></td></tr>
            <tr><th>Ablative</th><td>“by, with, from, in”, often after a preposition</td><td>in <span class="la">īnsulā</span> <span class="gl">on the island</span></td></tr>
            <tr><th>Vocative</th><td>the person spoken to</td><td><span class="la">Nauta</span>, cūr errās? <span class="gl">Sailor, why do you wander?</span></td></tr>
          </tbody>
        </table></div>
        <p>The first four correspond closely to the German cases of the same names, and German grammar will usually guide you correctly: <em>Das Mädchen</em> (Nom.) <em>gibt dem Dichter</em> (Dat.) <em>die Rose</em> (Akk.) is <span class="la">Puella poētae rosam dat</span>.</p>
        <h3>The ablative</h3>
        <p>The ablative is the case with no German equivalent, and its range of meanings looks arbitrary until you know its history. In the prehistory of Latin, three older Indo-European cases merged into one form: a true ablative of separation (“from”), an instrumental (“with, by means of”), and a locative (“in, at”). Ask which of the three ideas a given ablative expresses and you will usually find the right translation.</p>
        <p>German handles most of the same ground with prepositions and the dative, and here the parallel is very close. German <em>in der Stadt</em> (dative, “where?”) against <em>in die Stadt</em> (accusative, “where to?”) is exactly Latin <span class="la">in</span> + ablative against <span class="la">in</span> + accusative. This lecture uses only the first: <span class="la">in īnsulā</span>, “on the island”.</p>
        <h3>The vocative</h3>
        <p>German addresses people in the nominative; Latin has a separate case. In the first declension it is identical to the nominative, so you recognise it only from the sense and the commas: <span class="la">Cūr nāvigās, nauta?</span> In the second declension it often differs (<span class="la">Brūte</span> from <span class="la">Brūtus</span>).</p>
        <p class="aside">The famous <em>Et tu, Brute?</em> is Shakespeare’s line (<em>Julius Caesar</em> III.1), not an ancient quotation. Suetonius (<em>Divus Iulius</em> 82) says that Caesar died without a word, though he adds that some reported him saying, in Greek, “You too, child?”</p>
        <p class="aside"><strong>Order of the cases.</strong> This course lists them as nominative, genitive, dative, accusative, ablative, vocative, the order of most German school grammars and of most American textbooks. Many British books, following Kennedy’s <em>Latin Primer</em>, use nominative, vocative, accusative, genitive, dative, ablative. The forms are the same; only the order of the table differs.</p>
      `
    },
    {
      title: '4. The first declension',
      html: `
        <p>Nouns of the first declension end in <span class="la">-a</span> in the nominative singular and <span class="la">-ae</span> in the genitive singular. A dictionary gives both, with the gender: <span class="la">puella, puellae</span> <em>f.</em></p>
        <h3>Why the genitive matters</h3>
        <p>The genitive singular is the key form. Its ending tells you the declension (each declension has a different genitive singular), and removing that ending gives you the <em>base</em> to which all other endings are added. For <span class="la">puella</span> the base is <span class="la">puell-</span>. In the first declension the base is easy to see from the nominative; in later declensions it often is not (<span class="la">rēx, rēgis</span> “king”), which is why the habit starts now.</p>
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>Singular</th><th>Plural</th><th>Endings</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">puella</td><td class="la">puellae</td><td class="la">-a · -ae</td></tr>
            <tr><th>Gen.</th><td class="la">puellae</td><td class="la">puellārum</td><td class="la">-ae · -ārum</td></tr>
            <tr><th>Dat.</th><td class="la">puellae</td><td class="la">puellīs</td><td class="la">-ae · -īs</td></tr>
            <tr><th>Acc.</th><td class="la">puellam</td><td class="la">puellās</td><td class="la">-am · -ās</td></tr>
            <tr><th>Abl.</th><td class="la">puellā</td><td class="la">puellīs</td><td class="la">-ā · -īs</td></tr>
            <tr><th>Voc.</th><td class="la">puella</td><td class="la">puellae</td><td class="la">-a · -ae</td></tr>
          </tbody>
        </table></div>
        <h3>Forms that look alike</h3>
        <p>Twelve slots, but only seven different forms. <span class="la">puellae</span> can be genitive or dative singular, or nominative or vocative plural. <span class="la">puellīs</span> is dative or ablative plural. <span class="la">puella</span> and <span class="la">puellā</span> differ only in vowel length, which most printed texts do not show.</p>
        <p>This is less of a problem than it seems, because a sentence rarely leaves more than one reading open. The verb is the best guide. In <span class="la">Puellae rosās amant</span>, the plural verb needs a plural subject, so <span class="la">puellae</span> is nominative plural: “the girls love roses”. In <span class="la">Rosa puellae pulchra est</span>, the subject is clearly <span class="la">rosa</span>, so <span class="la">puellae</span> is a genitive: “the girl’s rose is beautiful”.</p>
        <h3>Gender in the first declension</h3>
        <p>First-declension nouns are almost all feminine. The common exceptions are nouns for men’s occupations, which are masculine: <span class="la">poēta</span> (poet), <span class="la">nauta</span> (sailor), <span class="la">agricola</span> (farmer), and also some names such as <span class="la">Catilīna</span>. The difference is invisible in the noun itself but becomes visible in agreement: a good sailor will be <span class="la">nauta bonus</span>, with a masculine adjective, as you will see in Lecture III.</p>
        <h3>An s that became r</h3>
        <p>The genitive plural <span class="la">-ārum</span> goes back to an older <span class="la">*-āsom</span>. In the fourth century BC Latin turned <em>s</em> between vowels into <em>r</em>, a change called <em>rhotacism</em>. Cicero (<em>Ad familiares</em> IX.21) remarks that the family later called Papirius had earlier been the Papisii. German shows a comparable <em>s/r</em> alternation, though from a different cause: <em>war</em> against <em>gewesen</em>, <em>verlieren</em> against <em>Verlust</em>.</p>
      `
    },
    {
      title: '5. The verb “to be” and the predicate',
      html: `
        <p>This lecture uses two forms of the irregular verb <span class="la">sum</span> “be”: <span class="la">est</span> “is” and <span class="la">sunt</span> “are”. The whole verb comes in a later lecture.</p>
        <p>A noun that describes the subject after “is” stands in the <em>nominative</em>, not the accusative, exactly as in German: <em>Sie ist eine Dichterin</em>, with <em>eine Dichterin</em> in the nominative, is <span class="la">Fēmina poēta est</span>, “the woman is a poet”. <span class="la">est</span> does not take an object; it links two nominatives.</p>
        <p><span class="la">est</span> usually stands at the end, like other verbs. At the start of a sentence it often means “there is”: <span class="la">Est in īnsulā fēmina</span>, “there is a woman on the island”, much like German <em>Es gibt</em> or <em>Da ist</em>.</p>
      `
    },
    {
      title: '6. Joining words; asking questions',
      html: `
        <h3>“And” and “but”</h3>
        <p>Latin has two words for “and”. <span class="la">et</span> stands between the words it joins, as in English and German. <span class="la">-que</span> is attached to the end of the second word: <span class="la">puellae poētaeque</span> = <span class="la">puellae et poētae</span>, “girls and poets”. The most famous example is <span class="la">Senātus Populusque Rōmānus</span>, “the Senate and the Roman People”, abbreviated SPQR. <span class="la">sed</span> means “but”.</p>
        <h3>Questions</h3>
        <ul>
          <li>A question word at the start: <span class="la">cūr</span> “why”. <span class="la">Cūr labōrās?</span> “Why are you working?”</li>
          <li>For a plain yes-or-no question, Latin attaches <span class="la">-ne</span> to the first word, usually the verb: <span class="la">Labōrās.</span> “You are working.” → <span class="la">Labōrāsne?</span> “Are you working?” German does this by moving the verb forward (<em>Arbeitest du?</em>); Latin does it with a particle.</li>
          <li><span class="la">Nōnne</span> introduces a question that expects the answer “yes”: <span class="la">Nōnne patriam amās?</span> “You love your country, don’t you?”, German <em>Liebst du denn nicht deine Heimat?</em> (A question expecting “no” uses <span class="la">num</span>; that comes later.)</li>
        </ul>
        <p>Latin has no word that does exactly the job of “yes” or “no”. A Roman usually answered by repeating the verb (<span class="la">Amō</span>, “I do”) or its negation (<span class="la">Nōn amō</span>), though words such as <span class="la">ita</span> “so” and <span class="la">minimē</span> “not at all” also served.</p>
      `
    },
    {
      title: '7. Word order and how to read a sentence',
      html: `
        <p>Because endings carry the grammar, Latin word order is free to express emphasis. The neutral order is subject, object, verb: <span class="la">Poēta rosam laudat.</span> The verb tends to come last in a main clause, exactly as it does in a German subordinate clause: <em>…, dass der Dichter die Rose lobt.</em></p>
        <p>German also allows the object to come first when the case is clear, as in <em>Den Dichter lobt das Mädchen</em>. Latin uses this freedom far more. The first and last positions in a sentence carry weight, so <span class="la">Rosam poēta laudat</span> puts weight on the rose: “It is the <em>rose</em> the poet praises.”</p>
        <p>Some tendencies help. A genitive usually stands next to the noun it belongs to. A preposition stands directly before its noun. <span class="la">nōn</span> stands directly before the word it negates, usually the verb.</p>
        <h3>A method for reading</h3>
        <ol>
          <li>Find the verb. Its ending gives you the person and number of the subject.</li>
          <li>Look for a nominative that matches. If there is none, the subject is in the verb (“he”, “they”, “you”).</li>
          <li>Find any accusative: that is the direct object.</li>
          <li>Attach any genitive to the noun beside it.</li>
          <li>Take prepositions together with the noun that follows.</li>
          <li>Only then translate, in natural English or German order.</li>
        </ol>
        <p>Try it on <span class="la">Nautae fāmam poētae in īnsulā laudant.</span> The verb <span class="la">laudant</span> is 3rd plural, so the subject is plural: <span class="la">nautae</span>. <span class="la">fāmam</span> is accusative, the object. <span class="la">poētae</span>, next to <span class="la">fāmam</span>, is a genitive. <span class="la">in īnsulā</span> is “on the island”. So: “The sailors praise the poet’s reputation on the island.”</p>
        <p>Notice that <span class="la">poētae</span> could also be nominative plural, and <span class="la">nautae</span> could also be genitive singular. Grammar alone allows a second reading, “the poets praise the sailor’s reputation”. It is the word order, with the genitive placed right after <span class="la">fāmam</span>, that makes the first reading the natural one. Latin writers rely on this, and readers do the same.</p>
      `
    }
  ],

  vocab: [
    // verbs: la = principal parts, head = lemma used for flashcards
    { id: 'amo', head: 'amō', la: 'amō, amāre, amāvī, amātum', pos: 'verb, 1st conj.', en: 'love, like', stress: 'A-mō · a-MĀ-re', deriv: 'amorous, amateur; Amateur' },
    { id: 'laudo', head: 'laudō', la: 'laudō, laudāre, laudāvī, laudātum', pos: 'verb, 1st conj.', en: 'praise', stress: 'LAU-dō · lau-DĀ-re', deriv: 'laud, laudable' },
    { id: 'voco', head: 'vocō', la: 'vocō, vocāre, vocāvī, vocātum', pos: 'verb, 1st conj.', en: 'call, summon', stress: 'VO-cō · vo-CĀ-re', deriv: 'vocation, invoke; Vokal' },
    { id: 'cogito', head: 'cōgitō', la: 'cōgitō, cōgitāre, cōgitāvī, cōgitātum', pos: 'verb, 1st conj.', en: 'think, consider, ponder', stress: 'CŌ-gi-tō · cō-gi-TĀ-re', deriv: 'cogitate; Descartes’ cōgitō, ergo sum' },
    { id: 'erro', head: 'errō', la: 'errō, errāre, errāvī, errātum', pos: 'verb, 1st conj.', en: 'wander; be mistaken, err', stress: 'ER-rō · er-RĀ-re', deriv: 'err, erratic, error; German irren is probably a distant relative' },
    { id: 'servo', head: 'servō', la: 'servō, servāre, servāvī, servātum', pos: 'verb, 1st conj.', en: 'keep, preserve, save', stress: 'SER-vō · ser-VĀ-re', deriv: 'conserve, preservation; Konserve' },
    { id: 'laboro', head: 'labōrō', la: 'labōrō, labōrāre, labōrāvī, labōrātum', pos: 'verb, 1st conj.', en: 'work, toil; be in difficulty', stress: 'la-BŌ-rō · la-bō-RĀ-re', deriv: 'laboratory, elaborate; Labor' },
    { id: 'ambulo', head: 'ambulō', la: 'ambulō, ambulāre, ambulāvī, ambulātum', pos: 'verb, 1st conj.', en: 'walk', stress: 'AM-bu-lō · am-bu-LĀ-re', deriv: 'ambulance, perambulate; ambulant' },
    { id: 'habito', head: 'habitō', la: 'habitō, habitāre, habitāvī, habitātum', pos: 'verb, 1st conj.', en: 'live (in), dwell, inhabit', stress: 'HA-bi-tō · ha-bi-TĀ-re', deriv: 'habitat, inhabit' },
    { id: 'navigo', head: 'nāvigō', la: 'nāvigō, nāvigāre, nāvigāvī, nāvigātum', pos: 'verb, 1st conj.', en: 'sail', stress: 'NĀ-vi-gō · nā-vi-GĀ-re', deriv: 'navigate; Navigation' },
    { id: 'est', head: 'est', la: 'est; sunt', pos: 'verb (irregular)', en: 'is; are', stress: 'EST · SUNT', note: 'Forms of the irregular verb sum, “be”; cognate with German ist, sind. The full verb comes in a later lecture.' },

    // nouns
    { id: 'puella', head: 'puella', la: 'puella, puellae', g: 'f', pos: 'noun, 1st decl.', en: 'girl', stress: 'pu-EL-la', note: 'Hold the double l.' },
    { id: 'femina', head: 'fēmina', la: 'fēmina, fēminae', g: 'f', pos: 'noun, 1st decl.', en: 'woman', stress: 'FĒ-mi-na', deriv: 'feminine; feminin' },
    { id: 'rosa', head: 'rosa', la: 'rosa, rosae', g: 'f', pos: 'noun, 1st decl.', en: 'rose', stress: 'RO-sa', note: 'Sharp s, unlike German Rose.' },
    { id: 'patria', head: 'patria', la: 'patria, patriae', g: 'f', pos: 'noun, 1st decl.', en: 'homeland, native land', stress: 'PA-tri-a', deriv: 'patriot, expatriate', note: 'From pater, father: the land of one’s fathers, German Vaterland.' },
    { id: 'vita', head: 'vīta', la: 'vīta, vītae', g: 'f', pos: 'noun, 1st decl.', en: 'life', stress: 'VĪ-ta', deriv: 'vital, curriculum vitae; Vitamin' },
    { id: 'fama', head: 'fāma', la: 'fāma, fāmae', g: 'f', pos: 'noun, 1st decl.', en: 'rumour, report; reputation, fame', stress: 'FĀ-ma', deriv: 'fame, infamous' },
    { id: 'poeta', head: 'poēta', la: 'poēta, poētae', g: 'm', pos: 'noun, 1st decl.', en: 'poet', stress: 'po-Ē-ta', note: 'Masculine, although first declension. Three syllables: po-ē-ta.' },
    { id: 'nauta', head: 'nauta', la: 'nauta, nautae', g: 'm', pos: 'noun, 1st decl.', en: 'sailor', stress: 'NAU-ta', deriv: 'nautical; Astronaut', note: 'Masculine, although first declension.' },
    { id: 'agricola', head: 'agricola', la: 'agricola, agricolae', g: 'm', pos: 'noun, 1st decl.', en: 'farmer', stress: 'a-GRI-co-la', deriv: 'agriculture; Agrar-', note: 'Masculine, although first declension. From ager, field, and colere, to till.' },
    { id: 'terra', head: 'terra', la: 'terra, terrae', g: 'f', pos: 'noun, 1st decl.', en: 'earth, land', stress: 'TER-ra', deriv: 'terrain, territory; Terrasse' },
    { id: 'aqua', head: 'aqua', la: 'aqua, aquae', g: 'f', pos: 'noun, 1st decl.', en: 'water', stress: 'A-qua', deriv: 'aquatic, aqueduct; Aquarium' },
    { id: 'insula', head: 'īnsula', la: 'īnsula, īnsulae', g: 'f', pos: 'noun, 1st decl.', en: 'island', stress: 'ĪN-su-la', deriv: 'insular, peninsula; Insel' },
    { id: 'via', head: 'via', la: 'via, viae', g: 'f', pos: 'noun, 1st decl.', en: 'road, street, way', stress: 'VI-a', deriv: 'via, viaduct' },
    { id: 'fortuna', head: 'fortūna', la: 'fortūna, fortūnae', g: 'f', pos: 'noun, 1st decl.', en: 'fortune, luck', stress: 'for-TŪ-na', deriv: 'fortune, fortunate', note: 'Also the goddess Fortūna.' },
    { id: 'sapientia', head: 'sapientia', la: 'sapientia, sapientiae', g: 'f', pos: 'noun, 1st decl.', en: 'wisdom', stress: 'sa-pi-EN-ti-a', deriv: 'sapient, Homo sapiens', note: 'Say t + i, not “tsi”.' },
    { id: 'pecunia', head: 'pecūnia', la: 'pecūnia, pecūniae', g: 'f', pos: 'noun, 1st decl.', en: 'money', stress: 'pe-CŪ-ni-a', deriv: 'pecuniary, impecunious', note: 'Related to pecus, cattle: early wealth was counted in livestock. German Vieh and English fee share the same root.' },

    // other words
    { id: 'et', head: 'et', la: 'et', pos: 'conjunction', en: 'and; (as adverb) even, also', stress: 'ET' },
    { id: 'que', head: '-que', la: '-que', pos: 'enclitic conjunction', en: 'and (attached to the second word)', stress: '—', note: 'puellae poētaeque = puellae et poētae. The word it is attached to is stressed on the syllable before it: po-ē-TAE-que.' },
    { id: 'sed', head: 'sed', la: 'sed', pos: 'conjunction', en: 'but', stress: 'SED' },
    { id: 'non', head: 'nōn', la: 'nōn', pos: 'adverb', en: 'not', stress: 'NŌN', note: 'Placed immediately before the word it negates, normally the verb.' },
    { id: 'saepe', head: 'saepe', la: 'saepe', pos: 'adverb', en: 'often', stress: 'SAE-pe', note: 'Full final e, not a German schwa.' },
    { id: 'cur', head: 'cūr', la: 'cūr', pos: 'adverb (interrogative)', en: 'why', stress: 'CŪR' },
    { id: 'ne', head: '-ne', la: '-ne', pos: 'enclitic particle', en: 'introduces a yes/no question', stress: '—', note: 'Attached to the first word: Labōrāsne? “Are you working?”' },
    { id: 'in', head: 'in', la: 'in + ablative', pos: 'preposition', en: 'in, on', stress: 'IN', note: 'With the accusative it means “into, onto”, as German in der / in die. That use comes later.' }
  ],

  grammarCards: [
    { id: 'g-end1s', front: 'Personal ending: 1st person singular', back: '-ō (or -m)  ·  I' },
    { id: 'g-end2s', front: 'Personal ending: 2nd person singular', back: '-s  ·  you' },
    { id: 'g-end3s', front: 'Personal ending: 3rd person singular', back: '-t  ·  he, she, it' },
    { id: 'g-end1p', front: 'Personal ending: 1st person plural', back: '-mus  ·  we' },
    { id: 'g-end2p', front: 'Personal ending: 2nd person plural', back: '-tis  ·  you (pl.)' },
    { id: 'g-end3p', front: 'Personal ending: 3rd person plural', back: '-nt  ·  they' },
    { id: 'g-amo', front: 'Conjugate amō in the present', back: 'amō, amās, amat, amāmus, amātis, amant' },
    { id: 'g-short', front: 'Why amat and amant, but amās?', back: 'A long vowel shortens before final -t and -nt (also -m, -r).' },
    { id: 'g-stem', front: 'How do you find the present stem of a 1st-conjugation verb?', back: 'Drop -re from the infinitive: amāre → amā-' },
    { id: 'g-pron', front: 'Why use ego or tū when the ending already gives the person?', back: 'For emphasis or contrast: Tū sapientiam servās; ego aquam amō.' },
    { id: 'g-pp', front: 'The four principal parts of amō', back: 'amō, amāre, amāvī, amātum' },
    { id: 'g-d1-sg', front: 'First declension, singular endings (N G D A Ab V)', back: '-a, -ae, -ae, -am, -ā, -a' },
    { id: 'g-d1-pl', front: 'First declension, plural endings (N G D A Ab V)', back: '-ae, -ārum, -īs, -ās, -īs, -ae' },
    { id: 'g-gen', front: 'Main use of the genitive', back: 'Possession: “of”.  rosa puellae, the girl’s rose' },
    { id: 'g-dat', front: 'Main use of the dative', back: 'Indirect object: “to, for”' },
    { id: 'g-acc', front: 'Main use of the accusative', back: 'Direct object' },
    { id: 'g-abl', front: 'Ablative: typical English equivalents', back: 'by, with, from, in; often after a preposition' },
    { id: 'g-abl3', front: 'Why does the ablative have such a wide range?', back: 'It merged three older cases: separation (from), instrument (with, by), place (in, at).' },
    { id: 'g-inabl', front: 'in + ablative against in + accusative', back: 'Ablative: where? (in, on). Accusative: where to? (into). Like German in der / in die.' },
    { id: 'g-ae', front: 'puellae: which cases?', back: 'Gen. sg., dat. sg., nom. pl., voc. pl.' },
    { id: 'g-is', front: 'puellīs: which cases?', back: 'Dat. pl. and abl. pl.' },
    { id: 'g-gender', front: 'Gender of first-declension nouns, and the main exceptions', back: 'Feminine; but poēta, nauta, agricola are masculine' },
    { id: 'g-gendict', front: 'Why does a dictionary give the genitive singular of a noun?', back: 'It identifies the declension and gives the base for the other endings.' },
    { id: 'g-pred', front: 'Case of the noun after est: Fēmina poēta est', back: 'Nominative, as in German: Sie ist eine Dichterin.' },
    { id: 'g-ne', front: 'What does -ne do? Labōrāsne?', back: 'Turns a statement into a yes/no question: “Are you working?”' },
    { id: 'g-nonne', front: 'What answer does a question with nōnne expect?', back: 'Yes. Nōnne patriam amās? You love your country, don’t you?' },
    { id: 'g-order', front: 'Neutral Latin word order', back: 'Subject, object, verb: Poēta rosam laudat.' },
    { id: 'g-c', front: 'Pronounce: Cicerō', back: 'KI-ke-rō: c is always k.' },
    { id: 'g-v', front: 'Pronounce: vīta', back: 'WEE-ta: v is English w.' },
    { id: 'g-ti', front: 'Pronounce: sapientia', back: 'sa-pi-EN-ti-a: t + i, never “tsi”.' },
    { id: 'g-s', front: 'Pronounce: rosa', back: 'RO-sa with a sharp s, unlike German Rose.' },
    { id: 'g-stress', front: 'When is the second-last syllable stressed?', back: 'When it is heavy: long vowel or diphthong, or vowel followed by two consonants.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">laudant</span> means:', options: ['they praise', 'we praise', 'he praises', 'you (pl.) praise'], answer: 0, explain: '-nt is the 3rd person plural ending.' },
    { id: 'e2', type: 'mc', prompt: 'In <span class="la">Poēta puellam laudat</span>, what case is <span class="la">puellam</span>?', options: ['nominative', 'genitive', 'accusative', 'ablative'], answer: 2, explain: '-am is the accusative singular: the girl is the direct object.' },
    { id: 'e3', type: 'mc', prompt: 'Which form is genitive plural?', options: ['puellīs', 'puellārum', 'puellās', 'puellae'], answer: 1, explain: '-ārum, “of the girls”.' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">fēminīs</span> can be:', options: ['dative or ablative plural', 'genitive singular', 'nominative plural', 'accusative plural'], answer: 0, explain: '-īs serves both the dative and the ablative plural.' },
    { id: 'e5', type: 'mc', prompt: 'What gender is <span class="la">nauta</span>?', options: ['feminine', 'masculine', 'neuter', 'either'], answer: 1, explain: 'Nouns for men’s occupations in the first declension are masculine.' },
    { id: 'e6', type: 'gap', prompt: '<span class="la">Fēmin___ rosam amat.</span>', hint: 'the woman: subject', answers: ['a'], full: 'Fēmina rosam amat.', explain: 'Subject, so nominative singular -a.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Agricol___ labōrant.</span>', hint: 'the farmers: subject', answers: ['ae'], full: 'Agricolae labōrant.', explain: 'The plural verb needs a plural subject: nominative plural -ae.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Poētae vīt___ laudant.</span>', hint: 'life: object', answers: ['am'], full: 'Poētae vītam laudant.', explain: 'Direct object, accusative singular -am.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Puellae aquam serv___.</span>', hint: 'they keep', answers: ['ant'], full: 'Puellae aquam servant.', explain: 'Stem servā- + -nt, with the ā shortened: servant.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Fāmam fēmin___ laudāmus.</span>', hint: 'of the woman', answers: ['ae'], full: 'Fāmam fēminae laudāmus.', explain: 'Genitive singular -ae: “we praise the woman’s reputation”.' },
    { id: 'e11', type: 'paradigm', prompt: 'Conjugate <span class="la">vocō, vocāre</span> in the present.', headers: ['Singular', 'Plural'], rows: [
      { label: '1st', answers: ['vocō', 'vocāmus'] },
      { label: '2nd', answers: ['vocās', 'vocātis'] },
      { label: '3rd', answers: ['vocat', 'vocant'] }
    ] },
    { id: 'e12', type: 'paradigm', prompt: 'Decline <span class="la">fortūna, fortūnae</span> f.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['fortūna', 'fortūnae'] },
      { label: 'Gen.', answers: ['fortūnae', 'fortūnārum'] },
      { label: 'Dat.', answers: ['fortūnae', 'fortūnīs'] },
      { label: 'Acc.', answers: ['fortūnam', 'fortūnās'] },
      { label: 'Abl.', answers: ['fortūnā', 'fortūnīs'] },
      { label: 'Voc.', answers: ['fortūna', 'fortūnae'] }
    ] },
    { id: 'e13', type: 'match', prompt: 'Match each form to its meaning.', pairs: [
      ['ambulat', 'he walks'], ['nāvigant', 'they sail'], ['cōgitās', 'you think'], ['errāmus', 'we wander'], ['laudātis', 'you (pl.) praise']
    ] },
    { id: 'e14', type: 'order', prompt: 'Put the English translation in order.', source: 'Nautae īnsulam patriae amant.', tokens: ['The sailors', 'love', 'the island', 'of their homeland'], explain: 'nautae (nom. pl.) is the subject; īnsulam (acc.) the object; patriae (gen.) “of the homeland”.' },
    { id: 'e15', type: 'translate', dir: 'la-en', source: 'Poēta fēminam laudat.', model: 'The poet praises the woman.', accepted: ['poet praises woman', 'poet is praising woman', 'poet does praise woman'] },
    { id: 'e16', type: 'translate', dir: 'la-en', source: 'Nautae saepe errant.', model: 'The sailors often wander.', accepted: ['sailors often wander', 'sailors wander often', 'sailors often go astray', 'sailors often err', 'sailors are often wandering', 'sailors often are wrong', 'sailors are often wrong', 'sailors are often mistaken'] },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Sapientia vītam servat.', model: 'Wisdom preserves life.', accepted: ['wisdom preserves life', 'wisdom saves life', 'wisdom keeps life', 'wisdom preserves the life', 'wisdom saves the life'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Rosās puellārum nōn amāmus.', model: 'We do not love the girls’ roses.', accepted: ['we do not love roses of girls', 'we do not love girls roses', 'we do not like roses of girls', 'we do not like girls roses', 'we are not loving girls roses'] },
    { id: 'e19', type: 'translate', dir: 'en-la', source: 'The farmers are working.', model: 'Agricolae labōrant.', accepted: ['agricolae labōrant'], explain: 'The subject is nominative plural -ae; -nt on the verb already means “they”. Latin has no article, and the verb usually comes last.' },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'You (pl.) call the sailor.', model: 'Nautam vocātis.', accepted: ['nautam vocātis'], explain: 'The sailor is the object, so accusative -am; -tis means “you (pl.)”, so no pronoun is needed. Nauta is masculine despite its -a.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'The poets live on the island.', model: 'Poētae in īnsulā habitant.', accepted: ['poētae in īnsulā habitant'], explain: 'In + ablative (long -ā) answers “where?”, much as German in + dative does (in dem Haus, not in das Haus).' },
    { id: 'e22', type: 'gap', prompt: '<span class="la">Fēmina poēt___ est.</span>', hint: 'a poet: after “is”', answers: ['a'], full: 'Fēmina poēta est.', explain: 'After est the predicate noun is nominative, as in German “Sie ist eine Dichterin”.' },
    { id: 'e23', type: 'mc', prompt: '<span class="la">Labōrāsne?</span> means:', options: ['Are you working?', 'You are working.', 'You are working, aren’t you?', 'Why are you working?'], answer: 0, explain: '-ne turns the statement labōrās into a plain yes/no question. “Aren’t you…?” would need nōnne; “why” would be cūr.' },
    { id: 'e24', type: 'mc', prompt: '<span class="la">Agricolae nautaeque labōrant</span> means:', options: ['The farmers and the sailors are working.', 'The farmer’s sailors are working.', 'The farmers are working for the sailors.', 'The farmers and the sailor are working.'], answer: 0, explain: '-que joins nautae to agricolae. Both are nominative plural, matching the plural verb.' },
    { id: 'e25', type: 'translate', dir: 'la-en', source: 'Est in īnsulā fēmina.', model: 'There is a woman on the island.', accepted: ['there is woman on island', 'theres woman on island', 'on island there is woman', 'woman is on island', 'there is woman in island', 'there lives woman on island'] }
  ],

  reading: {
    title: 'Poēta et nauta',
    note: 'Original passage. Tap any word for its form and meaning.',
    text: 'Poēta in īnsulā habitat et vītam īnsulae amat. Nauta nōn in īnsulā habitat; saepe nāvigat et errat. Poēta nautam vocat: “Cūr semper nāvigās, nauta? Nōnne patriam amās?” Nauta respondet: “Patriam amō, sed aquam et īnsulās quoque amō.” Poēta cōgitat et nautam laudat. Tum nauta poētam laudat: “Tū, poēta, sapientiam servās; ego aquam et fortūnam amō.”',
    translation: 'The poet lives on the island and loves the life of the island. The sailor does not live on the island; he often sails and wanders. The poet calls the sailor: “Why are you always sailing, sailor? Don’t you love your homeland?” The sailor replies: “I love my homeland, but I love the water and the islands too.” The poet thinks, and praises the sailor. Then the sailor praises the poet: “You, poet, preserve wisdom; I love the water and fortune.”',
    notes: [
      { ref: 'in īnsulā habitat', html: '<span class="la">in</span> + ablative answers “where?”. Latin <span class="la">in</span> covers both “in” and “on”; English prefers “on” with islands, German <em>auf der Insel</em>.' },
      { ref: 'vītam īnsulae', html: 'The genitive follows the noun it belongs to: “the life of the island”.' },
      { ref: 'nōn in īnsulā habitat', html: '<span class="la">nōn</span> normally stands directly before the verb. Placed before <span class="la">in īnsulā</span> instead, it puts the weight on the place: it is not <em>on the island</em> that the sailor lives.' },
      { ref: 'nāvigat et errat', html: '<span class="la">errat</span> means both “wanders” and “makes mistakes”. Set against the poet who “preserves wisdom”, the double sense is deliberate.' },
      { ref: 'Cūr semper nāvigās, nauta?', html: '<span class="la">nāvigās</span> already contains its subject, “you”, so <span class="la">nauta</span> cannot be the subject. It is vocative: the poet is addressing him.' },
      { ref: 'Nōnne patriam amās?', html: '<span class="la">nōnne</span> expects “yes”: “You love your homeland, don’t you?” Latin often omits “your” and “my” where the sense is obvious.' },
      { ref: 'respondet', html: 'A second-conjugation verb (<span class="la">respondeō, respondēre</span>). The vowel is <span class="la">e</span> instead of <span class="la">a</span>; otherwise the endings are the ones you know. That is Lecture II.' },
      { ref: 'īnsulās quoque', html: '<span class="la">quoque</span> “also” follows the word it emphasises: “the islands too”.' },
      { ref: 'Tū, poēta, … ego …', html: 'The pronouns are not needed for the grammar, since <span class="la">servās</span> and <span class="la">amō</span> already say “you” and “I”. They are there for contrast: <em>you</em> keep wisdom, <em>I</em> love the sea and chance.' }
    ],
    glosses: {
      'poēta': 'nom. (or voc.) sg. of poēta, -ae m. poet',
      'poētam': 'acc. sg. of poēta, -ae m. poet',
      'in': 'preposition + abl.: in, on',
      'īnsulā': 'abl. sg. of īnsula, -ae f. island',
      'īnsulae': 'gen. sg. of īnsula: of the island',
      'īnsulās': 'acc. pl. of īnsula: islands',
      'habitat': '3rd sg. pres. of habitō, -āre: lives',
      'et': 'and',
      'vītam': 'acc. sg. of vīta, -ae f. life',
      'amat': '3rd sg. pres. of amō, -āre: loves',
      'amās': '2nd sg. pres. of amō: you love',
      'amō': '1st sg. pres. of amō: I love',
      'nauta': 'nom. or voc. sg. of nauta, -ae m. sailor',
      'nautam': 'acc. sg. of nauta: sailor',
      'nōn': 'not',
      'saepe': 'often',
      'nāvigat': '3rd sg. pres. of nāvigō: sails',
      'nāvigās': '2nd sg. pres. of nāvigō: you sail',
      'errat': '3rd sg. pres. of errō: wanders; errs',
      'vocat': '3rd sg. pres. of vocō: calls',
      'cūr': 'why',
      'semper': 'always (new word)',
      'nōnne': 'introduces a question expecting the answer “yes” (new word)',
      'patriam': 'acc. sg. of patria, -ae f. homeland',
      'respondet': '3rd sg. pres. of respondeō, -ēre (2nd conj., next lecture): replies',
      'sed': 'but',
      'aquam': 'acc. sg. of aqua, -ae f. water',
      'quoque': 'also, too; follows the word it emphasises (new word)',
      'cōgitat': '3rd sg. pres. of cōgitō: thinks',
      'laudat': '3rd sg. pres. of laudō: praises',
      'tum': 'then (new word)',
      'tū': 'you (sg.), nominative; used for emphasis (new word)',
      'sapientiam': 'acc. sg. of sapientia, -ae f. wisdom',
      'servās': '2nd sg. pres. of servō: you preserve',
      'ego': 'I, nominative; used for emphasis (new word)',
      'fortūnam': 'acc. sg. of fortūna, -ae f. fortune'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Where does the poet live?', options: ['on the island', 'on the road', 'on the sea', 'in the homeland'], answer: 0, explain: 'in īnsulā habitat.' },
      { id: 'r2', type: 'mc', prompt: 'Besides his homeland, what does the sailor love?', options: ['the water and the islands', 'the poet and wisdom', 'money', 'the roads'], answer: 0, explain: 'aquam et īnsulās quoque amō.' },
      { id: 'r3', type: 'mc', prompt: 'In <span class="la">Cūr semper nāvigās, nauta?</span> the word <span class="la">nauta</span> is:', options: ['vocative: the sailor is being addressed', 'nominative: subject of nāvigās', 'genitive', 'ablative'], answer: 0, explain: 'nāvigās already contains its subject (“you”). nauta names the person spoken to.' },
      { id: 'r4', type: 'mc', prompt: 'Why does the sailor say <span class="la">ego</span> when <span class="la">amō</span> already means “I love”?', options: ['To contrast himself with the poet', 'Because amō needs a subject', 'Because ego makes it a question', 'It is a mistake'], answer: 0, explain: 'Expressed pronouns mark emphasis or contrast: tū … ego, you … I.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Which form means “we call”?', options: ['vocāmus', 'vocātis', 'vocant', 'vocās'], answer: 0, explain: '-mus: 1st person plural.' },
      { id: 't2', type: 'gap', prompt: '<span class="la">Poētae aqu___ amant.</span>', hint: 'water: object', answers: ['am'], full: 'Poētae aquam amant.', explain: 'Accusative singular -am.' },
      { id: 't3', type: 'mc', prompt: 'In <span class="la">Fāma nautae errat</span>, <span class="la">nautae</span> is best taken as:', options: ['genitive singular', 'nominative plural', 'accusative singular', 'ablative singular'], answer: 0, explain: 'errat is singular, so the subject is fāma; nautae cannot be a plural subject. “The sailor’s reputation wanders”, i.e. is spreading. Dative singular is formally possible but makes little sense.' },
      { id: 't4', type: 'translate', dir: 'la-en', source: 'Agricola terram amat.', model: 'The farmer loves the land.', accepted: ['farmer loves land', 'farmer loves earth', 'farmer likes land', 'farmer loves soil', 'farmer is loving land'] },
      { id: 't5', type: 'translate', dir: 'en-la', source: 'We praise the poets.', model: 'Poētās laudāmus.', accepted: ['poētās laudāmus'], explain: 'The object takes the accusative plural -ās, and -mus means “we”. Poēta, like nauta, is a masculine noun of the first declension.' },
      { id: 't6', type: 'mc', prompt: 'Why <span class="la">amat</span> and not <span class="la">*amāt</span>?', options: ['A long vowel shortens before final -t', 'amō is irregular', 'ā appears only in the infinitive', '-at is a separate conjugation'], answer: 0, explain: 'The same rule gives amant.' },
      { id: 't7', type: 'gap', prompt: '<span class="la">Nautae cōgit___.</span>', hint: 'they think', answers: ['ant'], full: 'Nautae cōgitant.', explain: '3rd person plural -nt, with the stem vowel shortened.' },
      { id: 't8', type: 'mc', prompt: 'Which noun is masculine?', options: ['agricola', 'fēmina', 'vīta', 'sapientia'], answer: 0, explain: 'agricola, like poēta and nauta, is masculine.' },
      { id: 't9', type: 'gap', prompt: '<span class="la">Nautae in īnsul___ habitant.</span>', hint: 'on the island', answers: ['ā'], full: 'Nautae in īnsulā habitant.', explain: 'in + ablative for “where?”: ablative singular -ā.' },
      { id: 't10', type: 'mc', prompt: 'In Cicero’s <span class="la">Quō ūsque tandem abūtēre, Catilīna, patientiā nostrā?</span>, the word <span class="la">Catilīna</span> is:', options: ['vocative', 'nominative', 'ablative', 'genitive'], answer: 0, explain: 'Cicero addresses Catiline directly. In the first declension the vocative looks like the nominative.' },
      { id: 't11', type: 'mc', prompt: 'How is <span class="la">c</span> pronounced in <span class="la">Cicerō</span> in the classical pronunciation?', options: ['k, as in Kaiser', 'ts, as in Zeit', 'tsch, as in Italian ciao', 's, as in French'], answer: 0, explain: 'Greek writers spelled the name Kikerōn; German Kaiser comes from Caesar with the same k.' }
    ]
  },

  reference: [
    { title: 'Personal endings (active)', headers: ['', 'Singular', 'Plural'], rows: [['1st', '-ō / -m', '-mus'], ['2nd', '-s', '-tis'], ['3rd', '-t', '-nt']] },
    { title: 'Present of amō (1st conjugation)', headers: ['', 'Singular', 'Plural'], rows: [['1st', 'amō', 'amāmus'], ['2nd', 'amās', 'amātis'], ['3rd', 'amat', 'amant']] },
    { title: 'First declension: puella, -ae f.', headers: ['', 'Singular', 'Plural'], rows: [['Nom.', 'puella', 'puellae'], ['Gen.', 'puellae', 'puellārum'], ['Dat.', 'puellae', 'puellīs'], ['Acc.', 'puellam', 'puellās'], ['Abl.', 'puellā', 'puellīs'], ['Voc.', 'puella', 'puellae']] }
  ]
});
