/*
 * Latin — Lecture XII: personal pronouns ego, tū; is, ea, id; īdem, eadem, idem.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotations (Horace, Odes 1.11.1–2; Cicero, In Catilinam 1.1) checked against the
 * texts supplied by Nils (sources/latin-readings.txt). Pictures from Wikimedia Commons;
 * see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-12',
  number: 12,
  title: 'Quem mihi, quem tibi',
  subtitle: 'The personal pronouns ego and tū; is, ea, id; īdem, eadem, idem',
  minutes: 60,

  intro: `
    <p>You have been reading Latin for eleven lectures with hardly a pronoun in it, and this lecture shows why: the verb ending already says who is acting. <span class="la">amō</span> is “I love”, and Latin needs no <span class="la">ego</span>. The personal pronouns are still indispensable, for the other cases (“me”, “to you”, “with us”) and whenever the speaker wants emphasis or contrast.</p>
    <p>The lecture covers three sets of forms. First come the pronouns of the first and second person, <span class="la">ego</span> “I” and <span class="la">tū</span> “you”, with their plurals <span class="la">nōs</span> and <span class="la">vōs</span>. They are irregular but short, and German speakers will recognise them at once: <span class="la">mē</span> and <em>mich</em>, <span class="la">tē</span> and <em>dich</em>. Next comes <span class="la">is, ea, id</span>, which serves as the pronoun of the third person (“he, she, it”) and as a weak demonstrative (“this, that”). Last is <span class="la">īdem, eadem, idem</span>, “the same”, which is simply <span class="la">is</span> with a suffix.</p>
    <p>By the end you should be able to decline all three, to tell <span class="la">eius</span> “his, her” from <span class="la">meus</span> “my”, and to translate <span class="la">quem nostrum</span>, “which of us”.</p>
  `,

  background: [
    {
      title: 'Ich and ego: the oldest words in the language',
      html: `
        <p>Personal pronouns are among the most stable words in any language family, and the Latin ones have clear relatives in German: <span class="la">ego</span> and <em>ich</em>, <span class="la">mē</span> and <em>mich</em>, <span class="la">tū</span> and <em>du</em>, <span class="la">tē</span> and <em>dich</em>. <span class="la">nōs</span> and German <em>uns</em> go back to the same root, though less obviously. Even <span class="la">id</span> is a cousin of English <em>it</em> and German <em>es</em> (Old High German <em>iz</em>), with the <em>t</em> shifted to <em>s</em> as in <em>Wasser</em> beside <em>water</em>.</p>
        <p>The big difference is in use. German must say <em>ich liebe</em>; the ending <em>-e</em> on its own is not enough. Latin, like Italian and Spanish today, leaves the subject pronoun out unless it is stressed: <span class="la">amō</span>. When Latin does write <span class="la">ego</span>, it has the force of a stressed German <em>ICH</em>: “I (and not you)”.</p>
        <p>French went the other way. Spoken French lost most of its distinct verb endings (<em>j’aime, tu aimes, il aime</em> sound alike), and a common explanation is that the pronouns <em>je, tu, il</em> became obligatory to fill that gap. The pronouns themselves are Latin: <em>je</em> from <span class="la">ego</span> (through Old French <em>jo</em>), <em>me, moi</em> from <span class="la">mē</span>, <em>nous, vous</em> from <span class="la">nōs, vōs</span>. The third person is the exception: <span class="la">is</span> was too short and too easily confused to survive in speech, and the Romance languages built their “he, she” from <span class="la">ille</span> instead (French <em>il, elle</em>, Italian <em>egli</em>, Spanish <em>él</em>).</p>
      `
    },
    {
      title: 'Tū to everyone',
      html: `
        <p>Classical Latin had no polite form of address. A slave said <span class="la">tū</span> to his master, a senator said <span class="la">tū</span> to the consul, and Cicero calls Catiline <span class="la">tū</span> in the senate as freely as Horace calls his friend <span class="la">tū</span> in a poem. Respect was shown with titles and courteous phrases, not with the pronoun.</p>
        <p>In late antiquity, writers began to address the emperor in the plural, <span class="la">vōs</span>. The custom passed into medieval Latin, and from there, as most scholars think, into the vernaculars: French <em>vous</em> to a single person, and the <em>Ihr</em> of Middle High German courtly speech (<em>ihrzen</em> against <em>duzen</em>). Modern German <em>Sie</em>, the third person plural used as a polite “you”, is a later development of the 17th and 18th centuries. So the German distinction you use every day has a Latin ancestor, but not a classical one.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Girl_with_stylus_and_tablets.Fresco_found_in_Pompei.jpg/960px-Girl_with_stylus_and_tablets.Fresco_found_in_Pompei.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Girl_with_stylus_and_tablets.Fresco_found_in_Pompei.jpg/500px-Girl_with_stylus_and_tablets.Fresco_found_in_Pompei.jpg|https://upload.wikimedia.org/wikipedia/commons/5/50/Girl_with_stylus_and_tablets.Fresco_found_in_Pompei.jpg" alt="Fresco of a young woman holding wax tablets and touching a stylus to her lips"><figcaption>Young woman with wax tablets and a stylus, a fresco from Pompeii, 1st century AD (Naples, National Archaeological Museum). It is popularly called “Sappho”, but nothing identifies her as the poet. Letters, written on such tablets, used <span class="la">tū</span> to everyone. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Girl_with_stylus_and_tablets.Fresco_found_in_Pompei.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Leuconoe and the poet’s “I”',
      html: `
        <p>The quotation in this lecture comes from the same short ode of Horace as <span class="la">carpe diem</span> (Lecture IX). The poem is addressed to a woman called Leuconoe, who wants to know from Babylonian astrology how long she and the poet will live. Whether she existed is unknown; the name is Greek and found almost nowhere else, and many readers take her as an invented addressee.</p>
        <p>The opening line sets <span class="la">mihi</span> and <span class="la">tibi</span> side by side, “to me, to you”. Horace’s odes constantly speak in the first person to a second person, friend, patron, lover or god, and much of their effect comes from the pronouns. Whether the “I” of a poem is the historical Horace is another question scholars answer with caution: the persona of the odes is crafted, even if it draws on his life.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Horace,_Virgil_and_Varius_at_the_house_of_Maecenas.jpg/960px-Horace,_Virgil_and_Varius_at_the_house_of_Maecenas.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Horace,_Virgil_and_Varius_at_the_house_of_Maecenas.jpg/500px-Horace,_Virgil_and_Varius_at_the_house_of_Maecenas.jpg|https://upload.wikimedia.org/wikipedia/commons/5/56/Horace,_Virgil_and_Varius_at_the_house_of_Maecenas.jpg" alt="Nineteenth-century painting of three poets reading in a Roman house before their patron"><figcaption>Horace, Virgil and Varius at the house of Maecenas, a 19th-century painting by Charles-François Jalabert. The scene is imagined, but the friendship of the three poets with their patron Maecenas is well attested. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Horace,_Virgil_and_Varius_at_the_house_of_Maecenas.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Tū nē quaesierīs, scīre nefās, quem mihi, quem tibi<br>fīnem dī dederint, Leuconoē …</p>
    <p>“Do not ask (it is wrong to know) what end the gods have given to me, what to you, Leuconoe …” Horace, <em>Odes</em> 1.11.1–2. Checked against the text in the course’s source files; that copy prints <span class="la">tibī</span> with a long final <em>i</em>, where most editions have <span class="la">tibi</span>.</p>
    <p><span class="la">tū</span> stands first for emphasis: “you, don’t ask”. <span class="la">mihi</span> and <span class="la">tibi</span> are datives, “to me”, “to you”. <span class="la">quaesierīs</span> and <span class="la">dederint</span> are perfect subjunctives (Lecture XXXI); <span class="la">dī</span> is a plural of <span class="la">deus</span>, “god”.</p>
    <p>Cicero, opening his first speech against Catiline (<em>In Catilinam</em> 1.1), ends a run of questions with: <span class="la">quem nostrum ignōrāre arbitrāris?</span>, “which of us do you think does not know?”. <span class="la">nostrum</span> is the genitive plural of <span class="la">ego</span>, in its partitive use (section 2 below).</p>
  `,

  pronunciation: `
    <h3>eius, like huius</h3>
    <p>The <span class="la">i</span> between vowels in <span class="la">eius</span> was a doubled consonant: <em>ej-jus</em>, as in <span class="la">huius</span> (Lecture X). The first syllable is therefore heavy and takes the stress: <span class="la">E-ius</span>. A German speaker should not say <em>ei-us</em> with the German diphthong <em>ei</em>.</p>
    <h3>eī, eā, eō</h3>
    <p>In <span class="la">eī, eō, eā, eam</span> the two vowels stay separate: <span class="la">E-ī, E-ō</span>, never a diphthong. In the plural, <span class="la">eī</span> and <span class="la">eīs</span> also appear as <span class="la">iī, iīs</span>; both spellings are classical.</p>
    <h3>mihi, tibi, ego</h3>
    <p>The final vowels are short in normal classical speech: <span class="la">MI-hi, TI-bi, E-go</span>. Poets could treat them as long, and <span class="la">mihi</span> was often contracted to <span class="la">mī</span>, as <span class="la">nihil</span> to <span class="la">nīl</span>. <span class="la">tū, nōs, vōs, mē, tē</span> have long vowels: <span class="la">tū</span> rhymes with German <em>du</em>.</p>
    <h3>īdem and idem</h3>
    <p>The masculine <span class="la">īdem</span> has a long <span class="la">ī</span> (from <span class="la">is-dem</span>); the neuter <span class="la">idem</span> has a short one (from <span class="la">id-dem</span>). The length is the only difference you can hear.</p>
  `,

  grammar: [
    {
      title: '1. ego and tū',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>I</th><th>you (sg.)</th><th>we</th><th>you (pl.)</th></tr></thead>
          <tbody>
            <tr><th>Nom.</th><td class="la">ego</td><td class="la">tū</td><td class="la">nōs</td><td class="la">vōs</td></tr>
            <tr><th>Gen.</th><td class="la">meī</td><td class="la">tuī</td><td class="la">nostrum, nostrī</td><td class="la">vestrum, vestrī</td></tr>
            <tr><th>Dat.</th><td class="la">mihi</td><td class="la">tibi</td><td class="la">nōbīs</td><td class="la">vōbīs</td></tr>
            <tr><th>Acc.</th><td class="la">mē</td><td class="la">tē</td><td class="la">nōs</td><td class="la">vōs</td></tr>
            <tr><th>Abl.</th><td class="la">mē</td><td class="la">tē</td><td class="la">nōbīs</td><td class="la">vōbīs</td></tr>
          </tbody>
        </table></div>
        <p>There is no vocative apart from <span class="la">tū</span> and <span class="la">vōs</span> themselves. The accusative and ablative singular are the same (<span class="la">mē, tē</span>), and so are the dative and ablative plural (<span class="la">nōbīs, vōbīs</span>); the construction decides.</p>
        <p>With these pronouns, <span class="la">cum</span> is attached to the end: <span class="la">mēcum</span> “with me”, <span class="la">tēcum, nōbīscum, vōbīscum</span>. German <em>mit mir</em> puts it in front; Latin puts it behind.</p>
        <p>The nominatives <span class="la">ego, tū, nōs, vōs</span> appear only for emphasis or contrast: <span class="la">ego labōrō, tū dormīs</span>, “<em>I</em> work, <em>you</em> sleep”.</p>
      `
    },
    {
      title: '2. The genitives are not possessive',
      html: `
        <p>To say “my book”, Latin uses the adjective <span class="la">meus</span>: <span class="la">liber meus</span>, never <span class="la">liber meī</span>. Likewise <span class="la">tuus, noster, vester</span> (Lectures III and V). The genitives of <span class="la">ego</span> and <span class="la">tū</span> have two other jobs:</p>
        <ul>
          <li><strong>Partitive</strong>, “of us” as part of a group: <span class="la">nostrum, vestrum</span>. <span class="la">ūnus nostrum</span>, “one of us”; Cicero’s <span class="la">quem nostrum</span>, “which of us”.</li>
          <li><strong>Objective</strong>, where the pronoun is the object of a feeling or action: <span class="la">meī, tuī, nostrī, vestrī</span>. <span class="la">amor tuī</span>, “love for you”; <span class="la">memoria nostrī</span>, “the memory of us”.</li>
        </ul>
        <p>German is similar: <em>einer von uns</em>, not <em>unser einer</em> (an older form that survives only as a fixed phrase), and <em>gedenke meiner</em>, “remember me”, is an old objective genitive.</p>
      `
    },
    {
      title: '3. is, ea, id',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>m.</th><th>f.</th><th>n.</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">is</td><td class="la">ea</td><td class="la">id</td></tr>
            <tr><th>Gen.</th><td class="la">eius</td><td class="la">eius</td><td class="la">eius</td></tr>
            <tr><th>Dat.</th><td class="la">eī</td><td class="la">eī</td><td class="la">eī</td></tr>
            <tr><th>Acc.</th><td class="la">eum</td><td class="la">eam</td><td class="la">id</td></tr>
            <tr><th>Abl.</th><td class="la">eō</td><td class="la">eā</td><td class="la">eō</td></tr>
            <tr><th>Nom. pl.</th><td class="la">eī (iī)</td><td class="la">eae</td><td class="la">ea</td></tr>
            <tr><th>Gen.</th><td class="la">eōrum</td><td class="la">eārum</td><td class="la">eōrum</td></tr>
            <tr><th>Dat.</th><td class="la">eīs (iīs)</td><td class="la">eīs (iīs)</td><td class="la">eīs (iīs)</td></tr>
            <tr><th>Acc.</th><td class="la">eōs</td><td class="la">eās</td><td class="la">ea</td></tr>
            <tr><th>Abl.</th><td class="la">eīs (iīs)</td><td class="la">eīs (iīs)</td><td class="la">eīs (iīs)</td></tr>
          </tbody>
        </table></div>
        <p>Apart from <span class="la">eius</span> and <span class="la">eī</span> in the singular (the <span class="la">-īus, -ī</span> of Lecture X), the forms are those of <span class="la">bonus, bona, bonum</span> on a stem <span class="la">e-</span>.</p>
        <p><strong>As a pronoun</strong>, <span class="la">is, ea, id</span> means “he, she, it; they”, and it takes the gender of the noun it stands for. That is natural for a German speaker and a trap for an English one: <span class="la">Mēnsam videō; ea est magna</span>, “I see the table; <em>it</em> is big”, exactly like <em>Ich sehe den Tisch; er ist groß</em>. In the nominative it is not common, because the subject is usually left out; it is mostly met in the other cases: <span class="la">eum videō</span>, “I see him”; <span class="la">eī librum dō</span>, “I give him (her) a book”.</p>
        <p><strong>As an adjective</strong> it is a weak “this” or “that”, with less pointing force than <span class="la">hic</span> or <span class="la">ille</span>: <span class="la">ea fēmina</span>, “that woman (we were speaking of)”. Later it often prepares a relative clause, “the one who …” (Lecture XVIII).</p>
      `
    },
    {
      title: '4. eius and eōrum: “his”, “her”, “their”',
      html: `
        <p>Latin has no possessive adjective for the third person corresponding to <span class="la">meus</span>, except the reflexive <span class="la">suus</span> (Lecture XIV). For “his”, “her”, “its”, “their” it uses the genitive of <span class="la">is</span>:</p>
        <ul>
          <li><span class="la">Mārcus adest; fīlius eius dormit.</span> Marcus is here; his son is asleep.</li>
          <li><span class="la">Iūlia adest; fīlius eius dormit.</span> Julia is here; her son is asleep.</li>
          <li><span class="la">Agricolae adsunt; fīliī eōrum dormiunt.</span> The farmers are here; their sons are asleep.</li>
        </ul>
        <p>Two points for a German speaker. First, <span class="la">eius</span> is a genitive and does not change to agree with the thing possessed: <span class="la">fīlius eius, fīliam eius, fīliīs eius</span>. Second, it does not show whether the owner is male or female, which German <em>sein</em> and <em>ihr</em> do; only the plural <span class="la">eōrum / eārum</span> makes the distinction. The closest German parallel is <em>dessen</em> and <em>deren</em>: <em>Mārcus und dessen Sohn</em>, “Marcus and his (that man’s) son”, which also points to someone other than the subject.</p>
      `
    },
    {
      title: '5. īdem, eadem, idem',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>m.</th><th>f.</th><th>n.</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">īdem</td><td class="la">eadem</td><td class="la">idem</td></tr>
            <tr><th>Gen.</th><td class="la">eiusdem</td><td class="la">eiusdem</td><td class="la">eiusdem</td></tr>
            <tr><th>Dat.</th><td class="la">eīdem</td><td class="la">eīdem</td><td class="la">eīdem</td></tr>
            <tr><th>Acc.</th><td class="la">eundem</td><td class="la">eandem</td><td class="la">idem</td></tr>
            <tr><th>Abl.</th><td class="la">eōdem</td><td class="la">eādem</td><td class="la">eōdem</td></tr>
            <tr><th>Nom. pl.</th><td class="la">eīdem (īdem)</td><td class="la">eaedem</td><td class="la">eadem</td></tr>
            <tr><th>Gen.</th><td class="la">eōrundem</td><td class="la">eārundem</td><td class="la">eōrundem</td></tr>
            <tr><th>Dat./Abl.</th><td class="la">eīsdem (īsdem)</td><td class="la">eīsdem (īsdem)</td><td class="la">eīsdem (īsdem)</td></tr>
            <tr><th>Acc.</th><td class="la">eōsdem</td><td class="la">eāsdem</td><td class="la">eadem</td></tr>
          </tbody>
        </table></div>
        <p>It is <span class="la">is, ea, id</span> + <span class="la">-dem</span>, with two sound changes: <span class="la">m</span> becomes <span class="la">n</span> before <span class="la">d</span> (<span class="la">eundem, eandem, eōrundem</span>), and <span class="la">is-dem</span>, <span class="la">id-dem</span> are simplified to <span class="la">īdem, idem</span>.</p>
        <p>It means “the same”: <span class="la">eadem via</span>, “the same road”; <span class="la">eadem sentīmus</span>, “we think the same things”, that is, “we agree”. English <em>identity</em> and <em>identical</em> come from it, via late Latin <span class="la">identitās</span>.</p>
      `
    }
  ],

  vocab: [
    { id: 'ego-pron', head: 'ego, meī', la: 'ego, meī; pl. nōs, nostrum/nostrī', pos: 'personal pronoun', en: 'I; pl. we', stress: 'E-go · ME-ī · NŌS', deriv: 'egoist; mē: mich; nōs: uns', note: 'Dat. mihi, acc./abl. mē; pl. dat./abl. nōbīs.' },
    { id: 'tu-pron', head: 'tū, tuī', la: 'tū, tuī; pl. vōs, vestrum/vestrī', pos: 'personal pronoun', en: 'you (sg.); pl. you', stress: 'TŪ · TU-ī · VŌS', deriv: 'tū: du; tē: dich', note: 'Dat. tibi, acc./abl. tē; pl. dat./abl. vōbīs.' },
    { id: 'is', head: 'is, ea, id', la: 'is, ea, id', pos: 'pronoun / adjective', en: 'he, she, it; this, that', stress: 'IS · E-a · ID', deriv: 'id: es, it', note: 'Gen. eius “his, her, its”; pl. eōrum, eārum “their”.' },
    { id: 'idem', head: 'īdem, eadem, idem', la: 'īdem, eadem, idem', pos: 'pronoun / adjective', en: 'the same', stress: 'Ī-dem · E-a-dem · I-dem', deriv: 'identical, identity', note: 'Acc. eundem, eandem, idem.' },
    { id: 'philosophus', head: 'philosophus', la: 'philosophus, philosophī', g: 'm', pos: 'noun, 2nd decl.', en: 'philosopher', stress: 'phi-LO-so-phus', deriv: 'philosopher', note: 'Greek: “lover of wisdom”. Compare philosophia (Lecture II).' },
    { id: 'quaestio', head: 'quaestiō', la: 'quaestiō, quaestiōnis', g: 'f', pos: 'noun, 3rd decl.', en: 'question, inquiry', stress: 'QUAES-ti-ō · quaes-ti-Ō-nis', deriv: 'question, quest' },
    { id: 'gratia', head: 'grātia', la: 'grātia, grātiae', g: 'f', pos: 'noun, 1st decl.', en: 'favour, goodwill; gratitude', stress: 'GRĀ-ti-a', deriv: 'grace, gratitude', note: 'grātiās agere + dat.: to thank. Grātiās tibi agō: thank you.' },
    { id: 'athenae', head: 'Athēnae', la: 'Athēnae, Athēnārum', g: 'f', pos: 'noun, 1st decl. (pl.)', en: 'Athens', stress: 'a-THĒ-nae', note: 'Plural in form, like German “die Niederlande”.' },
    { id: 'disputo', head: 'disputō', la: 'disputō, disputāre, disputāvī, disputātum', pos: 'verb, 1st conj.', en: 'discuss, debate, argue', stress: 'DIS-pu-tō · dis-pu-TĀ-re', deriv: 'dispute, disputation' },
    { id: 'interrogo', head: 'interrogō', la: 'interrogō, interrogāre, interrogāvī, interrogātum', pos: 'verb, 1st conj.', en: 'ask, question', stress: 'in-TER-ro-gō · in-ter-ro-GĀ-re', deriv: 'interrogate' },
    { id: 'visito', head: 'vīsitō', la: 'vīsitō, vīsitāre, vīsitāvī, vīsitātum', pos: 'verb, 1st conj.', en: 'visit; see often', stress: 'VĪ-si-tō · vī-si-TĀ-re', deriv: 'visit', note: 'Frequentative of vīsō, “go to see”, itself from videō.' },
    { id: 'nato', head: 'natō', la: 'natō, natāre, natāvī, natātum', pos: 'verb, 1st conj.', en: 'swim', stress: 'NA-tō · na-TĀ-re', deriv: 'natatorium' },
    { id: 'gero', head: 'gerō', la: 'gerō, gerere, gessī, gestum', pos: 'verb, 3rd conj.', en: 'carry; carry on, manage; bellum gerere: wage war', stress: 'GE-rō · GE-re-re', deriv: 'gesture, belligerent' },
    { id: 'mane', head: 'māne', la: 'māne', pos: 'adverb', en: 'in the morning, early', stress: 'MĀ-ne', note: 'Not to be confused with manē, imperative of maneō: “stay!”.' }
  ],

  grammarCards: [
    { id: 'g12-ego', front: 'ego: all cases', back: 'ego, meī, mihi, mē, mē; nōs, nostrum/nostrī, nōbīs, nōs, nōbīs' },
    { id: 'g12-tu', front: 'tū: all cases', back: 'tū, tuī, tibi, tē, tē; vōs, vestrum/vestrī, vōbīs, vōs, vōbīs' },
    { id: 'g12-is-sg', front: 'is, ea, id: singular', back: 'is ea id; eius; eī; eum eam id; eō eā eō' },
    { id: 'g12-is-pl', front: 'is, ea, id: plural', back: 'eī/iī eae ea; eōrum eārum eōrum; eīs/iīs; eōs eās ea; eīs/iīs' },
    { id: 'g12-idem', front: 'īdem: nom. and acc. sg.', back: 'īdem, eadem, idem; eundem, eandem, idem' },
    { id: 'g12-mn', front: 'Why eundem, not *eumdem?', back: 'm becomes n before d.' },
    { id: 'g12-mecum', front: 'with me, with you, with us', back: 'mēcum, tēcum, nōbīscum (cum attached to the end)' },
    { id: 'g12-poss', front: '“my book”: liber meus or liber meī?', back: 'liber meus: the genitive meī is not possessive.' },
    { id: 'g12-part', front: 'ūnus nostrum', back: 'one of us (partitive genitive nostrum)' },
    { id: 'g12-obj', front: 'amor tuī', back: 'love for you (objective genitive tuī)' },
    { id: 'g12-eius', front: 'fīlius eius', back: 'his or her son: eius does not show the owner’s sex' },
    { id: 'g12-eorum', front: 'eōrum vs eārum', back: 'their (owners male or mixed) vs their (owners female)' },
    { id: 'g12-gender', front: 'Mēnsam videō; ea est magna.', back: 'I see the table; it is big (ea agrees with mēnsa, like German “er” for “der Tisch”).' },
    { id: 'g12-emph', front: 'Why is ego usually left out?', back: 'The verb ending shows the person; ego adds emphasis or contrast.' },
    { id: 'g12-eius-pron', front: 'Pronunciation of eius', back: 'ej-jus, stress on the first syllable (like huius)' },
    { id: 'g12-horace', front: 'Tū nē quaesierīs, scīre nefās, quem mihi, quem tibi fīnem dī dederint …', back: 'Do not ask (it is wrong to know) what end the gods have given to me, what to you … (Horace, Odes 1.11.1–2)' },
    { id: 'g12-cicero', front: 'quem nostrum ignōrāre arbitrāris?', back: 'which of us do you think does not know? (Cicero, In Catilinam 1.1)' },
    { id: 'g12-vous', front: 'Where does polite plural “you” (vous, Ihr) come from?', back: 'Late Latin address to emperors in the plural (vōs), as most scholars think; classical Latin said tū to everyone.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<span class="la">mihi</span> means:', options: ['to me, for me', 'me (direct object)', 'my', 'of me'], answer: 0, explain: 'Dative of ego.' },
    { id: 'e2', type: 'mc', prompt: '<span class="la">eōrum</span> usually translates as:', options: ['their', 'them', 'they', 'to them'], answer: 0, explain: 'Genitive plural (m. or n.).' },
    { id: 'e3', type: 'mc', prompt: 'Accusative singular of <span class="la">tū</span>:', options: ['tē', 'tibi', 'tuī', 'tuum'], answer: 0, explain: 'tē (also ablative).' },
    { id: 'e4', type: 'mc', prompt: '<span class="la">liber eius</span> can mean:', options: ['his book or her book', 'only his book', 'only her book', 'their book'], answer: 0, explain: 'eius does not show the owner’s sex.' },
    { id: 'e5', type: 'mc', prompt: '<span class="la">eandem</span> is:', options: ['acc. sg. f. of īdem', 'nom. sg. f. of īdem', 'acc. sg. m. of īdem', 'acc. sg. f. of is'], answer: 0, explain: 'eam + -dem, with m > n.' },
    { id: 'e6', type: 'mc', prompt: 'Why is <span class="la">ego</span> usually left out?', options: ['The verb ending already shows the person', 'It is impolite', 'It is only used in poetry', 'It is only used with sum'], answer: 0, explain: 'amō = I love.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Puella est bona; e___ laudō.</span>', hint: 'her', answers: ['am'], full: 'Puella est bona; eam laudō.', explain: 'Accusative singular feminine.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Liber e___ est novus.</span>', hint: 'his', answers: ['ius'], full: 'Liber eius est novus.', explain: 'Genitive: eius.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Lūcius n___ dōna dat.</span>', hint: 'to us', answers: ['ōbīs', 'obis'], full: 'Lūcius nōbīs dōna dat.', explain: 'Dative plural of ego.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Fīliī e___ sunt laetī.</span>', hint: 'their (the fathers’)', answers: ['ōrum', 'orum'], full: 'Fīliī eōrum sunt laetī.', explain: 'Genitive plural masculine.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">E___ fābulam saepe nārrat.</span>', hint: 'the same', answers: ['andem'], full: 'Eandem fābulam saepe nārrat.', explain: 'Accusative singular feminine of īdem.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">V___ nōn timēmus.</span>', hint: 'you (pl.)', answers: ['ōs', 'os'], full: 'Vōs nōn timēmus.', explain: 'Accusative plural of tū.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">ego</span> and <span class="la">tū</span> in the singular.', headers: ['ego', 'tū'], rows: [
      { label: 'Nom.', answers: ['ego', 'tū'] },
      { label: 'Gen.', answers: ['meī', 'tuī'] },
      { label: 'Dat.', answers: ['mihi|mī', 'tibi'] },
      { label: 'Acc.', answers: ['mē', 'tē'] },
      { label: 'Abl.', answers: ['mē', 'tē'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">is, ea, id</span> in the singular.', headers: ['m.', 'f.', 'n.'], rows: [
      { label: 'Nom.', answers: ['is', 'ea', 'id'] },
      { label: 'Gen.', answers: ['eius', 'eius', 'eius'] },
      { label: 'Dat.', answers: ['eī', 'eī', 'eī'] },
      { label: 'Acc.', answers: ['eum', 'eam', 'id'] },
      { label: 'Abl.', answers: ['eō', 'eā', 'eō'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match the forms to their meanings.', pairs: [
      ['nōbīs', 'to us'], ['vōs', 'you (pl.)'], ['eum', 'him'], ['eās', 'them (f.)'], ['mēcum', 'with me']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Ego tē amō, sed tū mē nōn amās.', tokens: ['I love you,', 'but you', 'do not', 'love me'], explain: 'The pronouns are written out for contrast.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Eum videō, sed eī nōn crēdō.', model: 'I see him, but I do not believe him.', accepted: ['i see him but i do not believe him', 'i see him but i don’t believe him', 'i see him but i dont believe him', 'i see him but i do not trust him', 'i see him but i don’t trust him', 'i see him but i dont trust him'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Nōs eadem sentīmus.', model: 'We think the same things.', accepted: ['we think the same things', 'we feel the same things', 'we think the same', 'we feel the same', 'we think alike', 'we agree'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Fīlia eius mihi librum dat.', model: 'His (her) daughter gives me a book.', accepted: ['his daughter gives me book', 'her daughter gives me book', 'his daughter gives book to me', 'her daughter gives book to me', 'his daughter is giving me book', 'her daughter is giving me book', 'his daughter is giving book to me', 'her daughter is giving book to me'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'He sees us.', model: 'Nōs videt.', accepted: ['nōs videt', 'is nōs videt'], explain: 'Nōs serves as nominative and accusative; here it is the object. “He” is already in the ending -t.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'I love you (sg.).', model: 'Tē amō.', accepted: ['tē amō', 'ego tē amō'], explain: 'Tē is the accusative of tū. Ego is added only for emphasis, since -ō already means “I”.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'the same man (nom.)', model: 'īdem vir', accepted: ['īdem vir', 'vir īdem'], explain: 'Īdem = is + -dem; the masculine nominative has a long ī (from *isdem), the neuter idem a short one.' },
    { id: 'e23', type: 'mc', prompt: 'Which German word is related to Latin <span class="la">tē</span>?', options: ['dich', 'die', 'Tee', 'tun'], answer: 0, explain: 'tū : du = tē : dich.' },
    { id: 'e24', type: 'mc', prompt: 'In Horace’s ode, what should Leuconoe not ask?', options: ['What end the gods have given to her and the poet', 'Where the gods live', 'Who will rule Rome', 'When spring will come'], answer: 0, explain: 'quem mihi, quem tibi fīnem dī dederint.' },
    { id: 'e25', type: 'mc', prompt: 'How did a Roman of Cicero’s day address the consul?', options: ['tū', 'vōs', 'with a third-person form like German Sie', 'nōs'], answer: 0, explain: 'Classical Latin had no polite pronoun.' }
  ],

  reading: {
    title: 'Dē philosophō Graecō',
    note: 'Original passage: the morning after Lucius’s return, he tells the boys about Athens. Tap any word.',
    text: 'Māne puerī cum Lūciō in ātriō sedēbant. “Herī nōbīs fābulās prōmittēbās,” inquit Quīntus. “Nunc eās audīre cupimus!” Lūcius rīdet: “Bene. Audīte mē! In Graeciā Athēnās vīsitābam. Ibi philosophum Graecum inveniēbam; nōmen eius erat Dēmētrius. Eum cotīdiē audiēbam, et ille mē multa docēbat. Dēmētrius et ego eōsdem librōs legēbāmus et dē eīsdem quaestiōnibus disputābāmus, sed numquam eadem sentiēbāmus.” “Quid Dēmētrius dē nōbīs Rōmānīs dīcēbat?” rogat Gāius. “Saepe mihi dīcēbat: ‘Vōs Rōmānī bella geritis et urbēs regitis; nōs Graecī librōs scrībimus et sapientiam amāmus.’ Tum ego eī respondēbam: ‘Et nōs Rōmānī librōs vestrōs legimus!’” “Ego quoque philosophus erō!” clāmat Quīntus. Mārcus rīdet: “Tū, Quīnte? Tū librōs nōn legis, sed in flūmine natās!” Tum Lūcius: “Ecce, librōs vōbīs dō. Hunc tibi, Quīnte, illum tibi, Gāī. Eōs legite, et crās mē dē eīs interrogāte.” “Grātiās tibi agimus!” clāmant puerī. Et Mārcus: “Tū semper īdem es, amīce: bonus et fābulārum plēnus.”',
    translation: 'In the morning the boys were sitting with Lucius in the atrium. “Yesterday you were promising us stories,” says Quintus. “Now we want to hear them!” Lucius laughs: “Good. Listen to me! In Greece I visited Athens. There I found a Greek philosopher; his name was Demetrius. I listened to him every day, and he taught me many things. Demetrius and I read the same books and debated the same questions, but we never agreed.” “What did Demetrius say about us Romans?” asks Gaius. “He often said to me: ‘You Romans wage wars and rule cities; we Greeks write books and love wisdom.’ Then I used to answer him: ‘And we Romans read your books!’” “I shall be a philosopher too!” shouts Quintus. Marcus laughs: “You, Quintus? You don’t read books, you swim in the river!” Then Lucius: “Look, I am giving you books. This one is for you, Quintus, that one for you, Gaius. Read them, and tomorrow ask me about them.” “Thank you!” shout the boys. And Marcus: “You are always the same, my friend: a good man and full of stories.”',
    notes: [
      { ref: 'Herī nōbīs fābulās prōmittēbās', html: '<span class="la">nōbīs</span>: dative, “to us”. <span class="la">prōmittēbās</span>: imperfect of <span class="la">prōmittō</span>, “promise” (<span class="la">prō</span> + <span class="la">mittō</span>). Lucius promised at the end of Lecture XI’s reading.' },
      { ref: 'Nunc eās audīre cupimus!', html: '<span class="la">eās</span>: feminine plural because it stands for <span class="la">fābulās</span>. English says “them” whatever the gender; Latin, like German, keeps the gender.' },
      { ref: 'In Graeciā Athēnās vīsitābam', html: '<span class="la">Athēnās</span>: accusative plural of <span class="la">Athēnae</span>, the object of <span class="la">vīsitābam</span>. Lucius tells his story in the imperfect because the perfect, the normal tense for single past events, comes only in Lecture XIII. With it he would say <span class="la">vīsitāvī</span>, <span class="la">invēnī</span>.' },
      { ref: 'nōmen eius erat Dēmētrius', html: '<span class="la">eius</span>: “his”, the genitive of <span class="la">is</span> standing for the philosopher. <span class="la">Dēmētrius</span>: a common Greek name; this Demetrius is invented.' },
      { ref: 'ille mē multa docēbat', html: '<span class="la">doceō</span> takes two accusatives, the person and the thing (Lecture II): “taught me many things”. <span class="la">ille</span> switches the subject back to Demetrius.' },
      { ref: 'Dēmētrius et ego', html: 'Latin had no rule of courtesy about the order, and <span class="la">ego</span> could just as well stand first. Cardinal Wolsey was accused in 1529 of writing <span class="la">ego et rēx meus</span>, “I and my king”: correct Latin, but read in England as arrogance.' },
      { ref: 'eōsdem librōs', html: 'Accusative plural masculine of <span class="la">īdem</span>: “the same books”. <span class="la">dē eīsdem quaestiōnibus</span>: ablative plural after <span class="la">dē</span>.' },
      { ref: 'numquam eadem sentiēbāmus', html: '<span class="la">eadem</span>: neuter plural used as a noun, “the same things”. <span class="la">eadem sentīre</span> is the Latin for “agree”.' },
      { ref: 'dē nōbīs Rōmānīs', html: 'A pronoun with a noun in apposition: “about us Romans”, as in German <em>über uns Römer</em>.' },
      { ref: 'Vōs Rōmānī bella geritis', html: 'The nominatives <span class="la">vōs</span> and <span class="la">nōs</span> are written out for contrast: “<em>you</em> Romans … <em>we</em> Greeks”. The cliché of the practical Roman and the clever Greek is old; Virgil gives a famous version of it in <em>Aeneid</em> 6, which you will meet later.' },
      { ref: 'ego eī respondēbam', html: '<span class="la">eī</span>: dative, “(to) him”. <span class="la">respondeō</span> takes the dative of the person answered.' },
      { ref: 'Tū, Quīnte?', html: 'Emphatic <span class="la">tū</span> with the vocative: Marcus is teasing.' },
      { ref: 'Hunc tibi, Quīnte, illum tibi, Gāī', html: '<span class="la">hunc … illum</span>: “this one … that one” (Lecture X); <span class="la">librum</span> is understood. <span class="la">dō</span> is understood too.' },
      { ref: 'mē dē eīs interrogāte', html: '<span class="la">eīs</span>: ablative plural after <span class="la">dē</span>, standing for the books.' },
      { ref: 'Grātiās tibi agimus!', html: '“We give you thanks”: the standard Latin “thank you”, with the dative of the person.' },
      { ref: 'Tū semper īdem es', html: '<span class="la">īdem</span>: “the same (man)”, masculine because it refers to Lucius. <span class="la">fābulārum plēnus</span>: “full of stories”, <span class="la">plēnus</span> with the genitive.' }
    ],
    glosses: {
      'māne': 'in the morning', 'puerī': 'nom. pl. of puer: boys', 'cum': 'with (+ abl.)', 'lūciō': 'abl. of Lūcius', 'in': 'in (+ abl.)', 'ātriō': 'abl. of ātrium: atrium, hall', 'sedēbant': 'impf. 3rd pl. of sedeō: were sitting',
      'herī': 'yesterday', 'nōbīs': 'dat. of nōs: to us', 'fābulās': 'acc. pl. of fābula: stories', 'prōmittēbās': 'impf. 2nd sg. of prōmittō: you were promising', 'inquit': 'says', 'quīntus': 'Quintus (nom.)',
      'nunc': 'now', 'eās': 'acc. pl. f. of is: them', 'audīre': 'to hear', 'cupimus': '1st pl. of cupiō: we want', 'lūcius': 'Lucius (nom.)', 'rīdet': '3rd sg. of rīdeō: laughs', 'bene': 'well, good', 'audīte': 'imperative pl. of audiō: listen to!', 'mē': 'acc. of ego: me',
      'graeciā': 'abl. of Graecia: Greece', 'athēnās': 'acc. of Athēnae: Athens', 'vīsitābam': 'impf. 1st sg. of vīsitō: I visited', 'ibi': 'there', 'philosophum': 'acc. of philosophus: philosopher', 'graecum': 'acc. m. of Graecus: Greek', 'inveniēbam': 'impf. 1st sg. of inveniō: I found',
      'nōmen': 'name (nom.)', 'eius': 'gen. of is: his', 'erat': 'was', 'dēmētrius': 'Demetrius (nom.)', 'eum': 'acc. m. of is: him', 'cotīdiē': 'every day', 'audiēbam': 'impf. 1st sg. of audiō: I listened to', 'et': 'and', 'ille': 'he, that man', 'multa': 'acc. pl. n. of multus: many things', 'docēbat': 'impf. 3rd sg. of doceō: taught',
      'ego': 'I', 'eōsdem': 'acc. pl. m. of īdem: the same', 'librōs': 'acc. pl. of liber: books', 'legēbāmus': 'impf. 1st pl. of legō: we read', 'dē': 'about (+ abl.)', 'eīsdem': 'abl. pl. of īdem: the same', 'quaestiōnibus': 'abl. pl. of quaestiō: questions', 'disputābāmus': 'impf. 1st pl. of disputō: we debated', 'sed': 'but', 'numquam': 'never', 'eadem': 'acc. pl. n. of īdem: the same things', 'sentiēbāmus': 'impf. 1st pl. of sentiō: we thought',
      'quid': 'what?', 'rōmānīs': 'abl. pl. of Rōmānus: Romans', 'dīcēbat': 'impf. 3rd sg. of dīcō: said', 'rogat': '3rd sg. of rogō: asks', 'gāius': 'Gaius (nom.)',
      'saepe': 'often', 'mihi': 'dat. of ego: to me', 'vōs': 'nom. pl. of tū: you', 'rōmānī': 'nom. pl. of Rōmānus: Romans', 'bella': 'acc. pl. of bellum: wars', 'geritis': '2nd pl. of gerō: you wage', 'urbēs': 'acc. pl. of urbs: cities', 'regitis': '2nd pl. of regō: you rule', 'nōs': 'nom. pl. of ego: we', 'graecī': 'nom. pl. of Graecus: Greeks', 'scrībimus': '1st pl. of scrībō: we write', 'sapientiam': 'acc. of sapientia: wisdom', 'amāmus': '1st pl. of amō: we love',
      'tum': 'then', 'eī': 'dat. of is: to him', 'respondēbam': 'impf. 1st sg. of respondeō: I used to answer', 'vestrōs': 'acc. pl. m. of vester: your', 'legimus': '1st pl. of legō: we read',
      'quoque': 'also, too', 'philosophus': 'philosopher (nom.)', 'erō': 'I shall be', 'clāmat': '3rd sg. of clāmō: shouts', 'mārcus': 'Marcus (nom.)', 'tū': 'you (sg.)', 'quīnte': 'voc. of Quīntus', 'nōn': 'not', 'legis': '2nd sg. of legō: you read', 'flūmine': 'abl. of flūmen: river', 'natās': '2nd sg. of natō: you swim',
      'ecce': 'look!', 'vōbīs': 'dat. of vōs: to you', 'dō': 'I give', 'hunc': 'acc. m. of hic: this one', 'tibi': 'dat. of tū: to you, for you', 'illum': 'acc. m. of ille: that one', 'gāī': 'voc. of Gāius', 'eōs': 'acc. pl. m. of is: them', 'legite': 'imperative pl. of legō: read!', 'crās': 'tomorrow', 'eīs': 'abl. pl. of is: them', 'interrogāte': 'imperative pl. of interrogō: ask!',
      'grātiās': 'acc. pl. of grātia: thanks', 'agimus': '1st pl. of agō: we give (thanks)', 'clāmant': '3rd pl. of clāmō: shout', 'semper': 'always', 'īdem': 'the same (m.)', 'es': 'you are', 'amīce': 'voc. of amīcus: friend', 'bonus': 'good', 'fābulārum': 'gen. pl. of fābula: of stories', 'plēnus': 'full (+ gen.)'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Whom did Lucius meet in Athens?', options: ['A Greek philosopher, Demetrius', 'A Roman senator', 'A sailor', 'Horace'], answer: 0, explain: 'philosophum Graecum inveniēbam; nōmen eius erat Dēmētrius.' },
      { id: 'r2', type: 'mc', prompt: 'Did Lucius and Demetrius agree?', options: ['No, never', 'Yes, always', 'Only about books', 'We are not told'], answer: 0, explain: 'numquam eadem sentiēbāmus.' },
      { id: 'r3', type: 'mc', prompt: 'According to Demetrius, what do the Greeks do?', options: ['Write books and love wisdom', 'Wage wars and rule cities', 'Sell wine', 'Build ships'], answer: 0, explain: 'nōs Graecī librōs scrībimus et sapientiam amāmus.' },
      { id: 'r4', type: 'mc', prompt: 'Why does Marcus laugh at Quintus?', options: ['Quintus swims in the river instead of reading', 'Quintus is asleep', 'Quintus cannot speak Greek', 'Quintus lost his book'], answer: 0, explain: 'Tū librōs nōn legis, sed in flūmine natās!' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<span class="la">tibi</span> is:', options: ['dative of tū', 'accusative of tū', 'genitive of tū', 'nominative of vōs'], answer: 0, explain: 'to you, for you.' },
      { id: 't2', type: 'mc', prompt: '<span class="la">eam</span> refers to:', options: ['a feminine noun in the accusative', 'a masculine noun in the accusative', 'a plural noun', 'the speaker'], answer: 0, explain: 'Acc. sg. f. of is.' },
      { id: 't3', type: 'mc', prompt: '“one of us”:', options: ['ūnus nostrum', 'ūnus noster', 'ūnus nōbīs', 'ūnus meī'], answer: 0, explain: 'Partitive genitive.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Ambulā m___cum!</span>', hint: 'with me', answers: ['ē', 'e'], full: 'Ambulā mēcum!', explain: 'cum is attached to the pronoun.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">E___dem viā ambulāmus.</span>', hint: 'the same (abl. f.)', answers: ['ā', 'a'], full: 'Eādem viā ambulāmus.', explain: 'eā + -dem.' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Amīcus eius tē exspectat.', model: 'His (her) friend is waiting for you.', accepted: ['his friend is waiting for you', 'her friend is waiting for you', 'his friend waits for you', 'her friend waits for you', 'his friend awaits you', 'her friend awaits you'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'Thank you (sg.)!', model: 'Grātiās tibi agō!', accepted: ['grātiās tibi agō', 'tibi grātiās agō', 'grātiās agō tibi'], explain: 'Grātiās agere + dative of the person, literally “I give thanks to you”, with the dative as in German ich danke dir.' },
      { id: 't8', type: 'mc', prompt: '<span class="la">eōrundem</span> is the genitive plural of:', options: ['īdem', 'is', 'ille', 'ego'], answer: 0, explain: 'eōrum + -dem, m > n.' },
      { id: 't9', type: 'mc', prompt: 'Which form is NOT dative?', options: ['mē', 'mihi', 'nōbīs', 'eī'], answer: 0, explain: 'mē is accusative or ablative.' },
      { id: 't10', type: 'mc', prompt: '<span class="la">quem mihi, quem tibi</span> is from:', options: ['Horace, Odes 1.11', 'Catullus 85', 'Cicero, In Catilinam', 'Virgil, Aeneid 1'], answer: 0, explain: 'The Leuconoe ode.' },
      { id: 't11', type: 'mc', prompt: '<span class="la">Rosam videō; ___ est pulchra.</span>', options: ['ea', 'is', 'id', 'eum'], answer: 0, explain: 'rosa is feminine.' }
    ]
  },

  reference: [
    { title: 'ego and tū', headers: ['', 'ego', 'tū', 'nōs', 'vōs'], rows: [
      ['Nom.', 'ego', 'tū', 'nōs', 'vōs'], ['Gen.', 'meī', 'tuī', 'nostrum/nostrī', 'vestrum/vestrī'], ['Dat.', 'mihi', 'tibi', 'nōbīs', 'vōbīs'], ['Acc.', 'mē', 'tē', 'nōs', 'vōs'], ['Abl.', 'mē', 'tē', 'nōbīs', 'vōbīs']
    ] },
    { title: 'is, ea, id', headers: ['', 'm.', 'f.', 'n.'], rows: [
      ['Nom. sg.', 'is', 'ea', 'id'], ['Gen.', 'eius', 'eius', 'eius'], ['Dat.', 'eī', 'eī', 'eī'], ['Acc.', 'eum', 'eam', 'id'], ['Abl.', 'eō', 'eā', 'eō'],
      ['Nom. pl.', 'eī/iī', 'eae', 'ea'], ['Gen.', 'eōrum', 'eārum', 'eōrum'], ['Dat.', 'eīs/iīs', 'eīs/iīs', 'eīs/iīs'], ['Acc.', 'eōs', 'eās', 'ea'], ['Abl.', 'eīs/iīs', 'eīs/iīs', 'eīs/iīs']
    ] },
    { title: 'īdem, eadem, idem', headers: ['', 'm.', 'f.', 'n.'], rows: [
      ['Nom. sg.', 'īdem', 'eadem', 'idem'], ['Gen.', 'eiusdem', 'eiusdem', 'eiusdem'], ['Dat.', 'eīdem', 'eīdem', 'eīdem'], ['Acc.', 'eundem', 'eandem', 'idem'], ['Abl.', 'eōdem', 'eādem', 'eōdem'],
      ['Nom. pl.', 'eīdem/īdem', 'eaedem', 'eadem'], ['Gen.', 'eōrundem', 'eārundem', 'eōrundem'], ['Dat./Abl.', 'eīsdem/īsdem', 'eīsdem/īsdem', 'eīsdem/īsdem'], ['Acc.', 'eōsdem', 'eāsdem', 'eadem']
    ] }
  ]
});
