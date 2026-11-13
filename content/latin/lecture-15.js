/*
 * Latin — Lecture XV: third-declension i-stems; ablatives of means, accompaniment and manner.
 * Content file only. Original material in the conventional order of a first Latin course.
 * Source quotations (Pliny, Letters 6.16.16; Caesar, De bello Gallico 1.1) checked against the
 * texts supplied by Nils (sources/latin-pliny-ep-6-16.txt, sources/latin-readings.txt).
 * Pictures from Wikimedia Commons; see CONTENT-CHECKS.md.
 */
Viator.addLecture('latin', {
  id: 'la-15',
  number: 15,
  title: 'Linteīs cōnstringunt',
  subtitle: 'Third-declension i-stems (cīvis, urbs, mare); the ablative of means, accompaniment and manner',
  minutes: 60,

  intro: `
    <p>The third declension (Lectures VII and VIII) has a second pattern, the <strong>i-stems</strong>. They differ from the nouns you know in only a handful of endings, above all the genitive plural in <span class="la">-ium</span> instead of <span class="la">-um</span>: <span class="la">cīvium</span> “of the citizens”, <span class="la">urbium</span> “of the cities”, against <span class="la">rēgum</span>, <span class="la">hominum</span>. The neuters go further, with ablative <span class="la">-ī</span> and plural <span class="la">-ia</span>: <span class="la">marī</span> “by sea”, <span class="la">animālia</span> “animals”. Some of the commonest nouns in Latin belong here: <span class="la">urbs, nox, mōns, pars, nāvis, mare</span>.</p>
    <p>The second half of the lecture looks at three uses of the ablative that German expresses with one preposition, <em>mit</em>. Latin keeps them apart: <span class="la">gladiō</span> “with a sword” (means, no preposition), <span class="la">cum amīcō</span> “with a friend” (accompaniment), <span class="la">magnā cum cūrā</span> “with great care” (manner). Here the German speaker has to unlearn an instinct.</p>
    <p>By the end you should be able to recognise an i-stem from its dictionary entry, decline <span class="la">urbs</span> and <span class="la">animal</span>, and choose correctly between the bare ablative and <span class="la">cum</span>.</p>
  `,

  background: [
    {
      title: 'Pliny, Vesuvius and a disputed date',
      html: `
        <p>The quotation in this lecture comes from one of the most famous letters in Latin. In about AD 106 or 107 the historian Tacitus asked Pliny the Younger for an account of how his uncle, Pliny the Elder, had died. The elder Pliny, admiral of the fleet at Misenum and author of the vast <em>Natural History</em>, had sailed across the Bay of Naples during the eruption of Vesuvius to observe it and to rescue friends, and died on the shore at Stabiae. His nephew, then seventeen, stayed behind at Misenum. The letter (6.16) is the only eyewitness-based account of the eruption to survive; a second letter (6.20) tells what happened to the writer and his mother.</p>
        <p>The manuscripts give the date as <span class="la">nōnum Kal. Septembrēs</span>, 24 August AD 79, and that date was accepted for centuries. Archaeologists have long noted autumn fruits and warm clothing in the excavations, and in 2018 a charcoal inscription found at Pompeii, dated to the sixteenth day before the Kalends of November (17 October), seemed to settle the matter in favour of a date in late October. Not everyone is convinced: the inscription has no year, and the manuscript tradition of the letter itself is divided. Many scholars now favour 24 October; the question is open. (The course calendar page shows how Roman dates of this kind are counted.)</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Pierre-Jacques_Volaire_-_The_Eruption_of_Vesuvius_-_1978.426_-_Art_Institute_of_Chicago.jpg/960px-Pierre-Jacques_Volaire_-_The_Eruption_of_Vesuvius_-_1978.426_-_Art_Institute_of_Chicago.jpg" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Pierre-Jacques_Volaire_-_The_Eruption_of_Vesuvius_-_1978.426_-_Art_Institute_of_Chicago.jpg/500px-Pierre-Jacques_Volaire_-_The_Eruption_of_Vesuvius_-_1978.426_-_Art_Institute_of_Chicago.jpg|https://upload.wikimedia.org/wikipedia/commons/9/92/Pierre-Jacques_Volaire_-_The_Eruption_of_Vesuvius_-_1978.426_-_Art_Institute_of_Chicago.jpg" alt="Night painting of a volcano erupting with lava flows, seen from the shore with small figures in the foreground"><figcaption>Pierre-Jacques Volaire, <em>The Eruption of Vesuvius</em> (1771; Art Institute of Chicago). Volaire painted the eruptions of his own day for travellers on the Grand Tour; the ash cloud of AD 79, which Pliny compares to a pine tree, looked very different. <span class="credit">Public domain · <a href="https://commons.wikimedia.org/wiki/File:Pierre-Jacques_Volaire_-_The_Eruption_of_Vesuvius_-_1978.426_-_Art_Institute_of_Chicago.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'hostis and Gast: an old i-stem',
      html: `
        <p>The i-stems were once a separate declension, with an <span class="la">i</span> running through all their endings (<span class="la">cīvi-</span>, <span class="la">turri-</span>). In Latin they largely merged with the consonant stems, and what you learn as “the i-stem endings” are the traces that survived. The merger was never complete or tidy, and Roman writers themselves wavered: <span class="la">mēnsium</span> and <span class="la">mēnsum</span> “of the months”, accusative <span class="la">cīvēs</span> and <span class="la">cīvīs</span>.</p>
        <p>German has its own traces of the same ancient class. Latin <span class="la">hostis</span> is related to German <em>Gast</em> and English <em>guest</em>; the original meaning was probably “stranger”, someone with whom one has mutual obligations, and Latin narrowed it to “enemy” while Germanic kept “guest” (the Latin “host”, <span class="la">hospes</span>, is a compound of the same word). Old High German had <em>gast</em>, plural <em>gesti</em>, and the <em>i</em> of that plural ending caused the umlaut that survives in <em>Gäste</em>. So German <em>Gast – Gäste</em> and Latin <span class="la">hostis – hostium</span> both preserve, in different ways, the same old i-stem.</p>
      `
    },
    {
      title: 'Means, company and manner',
      html: `
        <p>Latin’s ablative is the result of a merger too. Comparison with Sanskrit shows that the parent language had separate cases for “from” (ablative), “with, by means of” (instrumental) and “in, at” (locative); Latin folded all three into one. That is why the Latin ablative can mean “from the city”, “with a sword” and “in the city”, and why prepositions are often needed to make the sense clear.</p>
        <p>German folded the instrumental into the dative. Old High German still had a few instrumental forms, and one survives in daily use: <em>heute</em>, from Old High German <em>hiutu</em>, “on this day”, an instrumental of the old demonstrative. Modern German marks means and company alike with <em>mit</em> + dative. Latin uses the plain ablative for the instrument, the thing you do something with, and keeps <span class="la">cum</span> for persons and for the manner of an action.</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ostia,_piazzale_delle_corporazioni,_trasporti_navali_turritani.JPG/960px-Ostia,_piazzale_delle_corporazioni,_trasporti_navali_turritani.JPG" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ostia,_piazzale_delle_corporazioni,_trasporti_navali_turritani.JPG/500px-Ostia,_piazzale_delle_corporazioni,_trasporti_navali_turritani.JPG|https://upload.wikimedia.org/wikipedia/commons/9/9d/Ostia,_piazzale_delle_corporazioni,_trasporti_navali_turritani.JPG" alt="Black-and-white floor mosaic showing two merchant ships"><figcaption>Floor mosaic in the Square of the Corporations at Ostia, Rome’s port, in front of the office of the shippers from Turris Libisonis in Sardinia (2nd–3rd century AD). Grain ships like these fed the city. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Ostia,_piazzale_delle_corporazioni,_trasporti_navali_turritani.JPG" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p class="la big">Cervīcālia capitibus imposita linteīs cōnstringunt; id mūnīmentum adversus incidentia fuit.</p>
    <p>“They tie pillows, placed on their heads, (down) with linen cloths; that was their protection against what was falling.” Pliny, <em>Letters</em> 6.16.16, checked against the text Nils supplied; length marks added. At Stabiae the elder Pliny and his friends decide to leave the house, which is shaking with earthquakes, and to risk the hail of pumice outside.</p>
    <p><span class="la">linteīs</span>: ablative of means, “with linen cloths”, no preposition. <span class="la">cervīcālia</span>: plural of <span class="la">cervīcal</span>, “pillow” (from <span class="la">cervīx</span>, “neck”), a neuter i-stem in <span class="la">-al</span>, with the plural in <span class="la">-ia</span>. <span class="la">capitibus</span> is a dative, “on their heads”, with <span class="la">imposita</span>, “placed upon” (a participle, Lecture XXIV). <span class="la">id</span> sums up the whole action: “that”.</p>
    <p>Caesar, describing the part of Gaul held by the Celts (<em>De bello Gallico</em> 1.1): <span class="la">continētur Garumnā flūmine, Ōceanō, fīnibus Belgārum</span>, “it is bounded by the river Garonne, the Ocean, and the territory of the Belgae”. The ablatives of means name the boundaries, and <span class="la">fīnibus</span> is from <span class="la">fīnis</span>, an i-stem (genitive plural <span class="la">fīnium</span>).</p>
  `,

  pronunciation: `
    <h3>-ium, -ia</h3>
    <p>The <span class="la">i</span> is a full vowel and a syllable of its own: <span class="la">CĪ-vi-um</span>, <span class="la">a-ni-MĀ-li-a</span>, <span class="la">MA-ri-a</span>. The stress follows the usual rule: the penultimate <span class="la">i</span> is short, so the stress goes back one syllable.</p>
    <h3>mare, marī</h3>
    <p><span class="la">MA-re</span> with a short <span class="la">a</span>, like German <em>Mappe</em>, not the long vowel of <em>Mahr</em>. The ablative <span class="la">marī</span> has a long final <span class="la">ī</span>.</p>
    <h3>animal, animālis</h3>
    <p>The nominative has a short <span class="la">a</span> in the last syllable (<span class="la">A-ni-mal</span>); all other forms have a long one, which takes the stress: <span class="la">a-ni-MĀ-lis, a-ni-MĀ-li-a</span>. The nominative shortened in Latin; the other forms kept the original length.</p>
    <h3>nox, noctis; urbs, urbis</h3>
    <p>German speakers can say these as in German: <em>x = ks</em>, and the <span class="la">c</span> of <span class="la">noctis</span> is a hard <em>k</em>, never the <em>ch</em> of <em>Nacht</em>, though the words are related.</p>
  `,

  grammar: [
    {
      title: '1. Which nouns are i-stems?',
      html: `
        <p>Three groups, recognisable from the dictionary entry:</p>
        <ul>
          <li><strong>Masculine and feminine nouns in -is or -ēs with the same number of syllables in nominative and genitive</strong> (“parisyllabic”): <span class="la">cīvis, cīvis</span> citizen; <span class="la">hostis, hostis</span> enemy; <span class="la">nāvis, nāvis</span> ship; <span class="la">nūbēs, nūbis</span> cloud.</li>
          <li><strong>Masculine and feminine nouns of one syllable in -s or -x whose stem ends in two consonants</strong>: <span class="la">urbs, urbis</span> city; <span class="la">mōns, montis</span> mountain; <span class="la">nox, noctis</span> night; <span class="la">pars, partis</span> part; <span class="la">ars, artis</span> skill.</li>
          <li><strong>Neuters in -e, -al, -ar</strong>: <span class="la">mare, maris</span> sea; <span class="la">animal, animālis</span> animal; <span class="la">exemplar, exemplāris</span> model.</li>
        </ul>
        <p>Important exceptions: <span class="la">pater, māter, frāter</span> and <span class="la">canis, iuvenis, senex</span> look as if they should belong to the first group but are not i-stems: <span class="la">patrum, canum</span>. Treat the rules as a good guide, not a law; the dictionary gives the genitive plural where it matters.</p>
      `
    },
    {
      title: '2. Masculine and feminine i-stems',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>rēx (consonant stem)</th><th>cīvis</th><th>urbs</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">rēx</td><td class="la">cīvis</td><td class="la">urbs</td></tr>
            <tr><th>Gen.</th><td class="la">rēgis</td><td class="la">cīvis</td><td class="la">urbis</td></tr>
            <tr><th>Dat.</th><td class="la">rēgī</td><td class="la">cīvī</td><td class="la">urbī</td></tr>
            <tr><th>Acc.</th><td class="la">rēgem</td><td class="la">cīvem</td><td class="la">urbem</td></tr>
            <tr><th>Abl.</th><td class="la">rēge</td><td class="la">cīve</td><td class="la">urbe</td></tr>
            <tr><th>Nom. pl.</th><td class="la">rēgēs</td><td class="la">cīvēs</td><td class="la">urbēs</td></tr>
            <tr><th>Gen.</th><td class="la">rēgum</td><td class="la"><strong>cīvium</strong></td><td class="la"><strong>urbium</strong></td></tr>
            <tr><th>Dat.</th><td class="la">rēgibus</td><td class="la">cīvibus</td><td class="la">urbibus</td></tr>
            <tr><th>Acc.</th><td class="la">rēgēs</td><td class="la">cīvēs (-īs)</td><td class="la">urbēs (-īs)</td></tr>
            <tr><th>Abl.</th><td class="la">rēgibus</td><td class="la">cīvibus</td><td class="la">urbibus</td></tr>
          </tbody>
        </table></div>
        <p>The only regular difference is the genitive plural <span class="la">-ium</span>. In older texts and in poetry the accusative plural is often <span class="la">-īs</span>: <span class="la">cīvīs, urbīs</span>. A few nouns keep more of the old i: <span class="la">turris</span>, “tower”, has <span class="la">turrim, turrī</span>; <span class="la">ignis</span>, “fire”, often has ablative <span class="la">ignī</span>.</p>
      `
    },
    {
      title: '3. Neuter i-stems',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th></th><th>corpus (consonant stem)</th><th>mare</th><th>animal</th></tr></thead>
          <tbody>
            <tr><th>Nom. sg.</th><td class="la">corpus</td><td class="la">mare</td><td class="la">animal</td></tr>
            <tr><th>Gen.</th><td class="la">corporis</td><td class="la">maris</td><td class="la">animālis</td></tr>
            <tr><th>Dat.</th><td class="la">corporī</td><td class="la">marī</td><td class="la">animālī</td></tr>
            <tr><th>Acc.</th><td class="la">corpus</td><td class="la">mare</td><td class="la">animal</td></tr>
            <tr><th>Abl.</th><td class="la">corpore</td><td class="la"><strong>marī</strong></td><td class="la"><strong>animālī</strong></td></tr>
            <tr><th>Nom. pl.</th><td class="la">corpora</td><td class="la"><strong>maria</strong></td><td class="la"><strong>animālia</strong></td></tr>
            <tr><th>Gen.</th><td class="la">corporum</td><td class="la">—</td><td class="la"><strong>animālium</strong></td></tr>
            <tr><th>Dat.</th><td class="la">corporibus</td><td class="la">maribus</td><td class="la">animālibus</td></tr>
            <tr><th>Acc.</th><td class="la">corpora</td><td class="la"><strong>maria</strong></td><td class="la"><strong>animālia</strong></td></tr>
            <tr><th>Abl.</th><td class="la">corporibus</td><td class="la">maribus</td><td class="la">animālibus</td></tr>
          </tbody>
        </table></div>
        <p>Three differences from <span class="la">corpus</span>: ablative singular <span class="la">-ī</span>, nominative and accusative plural <span class="la">-ia</span>, genitive plural <span class="la">-ium</span>. (The genitive plural of <span class="la">mare</span> is hardly ever found.) The neuter rule still holds: nominative and accusative are the same.</p>
      `
    },
    {
      title: '4. vīs, “force”',
      html: `
        <p>An irregular noun worth learning now because it is so common: singular <span class="la">vīs</span> (nom.), <span class="la">vim</span> (acc.), <span class="la">vī</span> (abl.), “force, violence”; plural <span class="la">vīrēs, vīrium, vīribus</span>, “strength”. Do not confuse <span class="la">vīrēs</span> with <span class="la">virī</span>, “men”: the length of the <span class="la">ī</span> and the declension differ. <span class="la">vī</span> appears in <em>Aeneid</em> 1.4, <span class="la">vī superum</span>, “by the force of the gods above”.</p>
      `
    },
    {
      title: '5. Ablative of means',
      html: `
        <p>The thing with which something is done stands in the ablative <strong>without a preposition</strong>:</p>
        <ul>
          <li><span class="la">Mīlitēs gladiīs pugnant.</span> The soldiers fight with swords.</li>
          <li><span class="la">Oculīs vidēmus, auribus audīmus.</span> We see with our eyes, we hear with our ears.</li>
          <li><span class="la">Pāstōrēs ignibus sē dēfendunt.</span> The shepherds defend themselves with fires.</li>
        </ul>
        <p>English and German use “with/mit” here, and the German speaker’s reflex is to write <span class="la">cum</span>. Resist it: <span class="la">cum gladiō</span> would mean “in the company of a sword”.</p>
      `
    },
    {
      title: '6. Ablative of accompaniment and of manner',
      html: `
        <p><strong>Accompaniment</strong>: the person (or, less often, thing) together with whom something is done, with <span class="la">cum</span>:</p>
        <ul>
          <li><span class="la">Mārcus cum fīliīs ambulat.</span> Marcus walks with his sons.</li>
          <li><span class="la">mēcum, tēcum, sēcum</span>: with <span class="la">cum</span> after the pronoun (Lectures XII and XIV).</li>
        </ul>
        <p><strong>Manner</strong>: how something is done, with an abstract noun. <span class="la">cum</span> is used; if the noun has an adjective, <span class="la">cum</span> may be left out, and if it is kept it usually stands between adjective and noun:</p>
        <ul>
          <li><span class="la">cum cūrā labōrat</span>: he works with care (carefully).</li>
          <li><span class="la">magnā cum cūrā</span> or <span class="la">magnā cūrā</span>: with great care.</li>
          <li><span class="la">magnā vōce clāmat</span>: he shouts in a loud voice (Lecture XIV’s reading).</li>
        </ul>
        <p>A quick test for the learner: if you could replace “with” by “using”, it is means, no <span class="la">cum</span>. If you could say “together with”, it is accompaniment. If you could turn “with care” into an adverb, “carefully”, it is manner.</p>
      `
    }
  ],

  vocab: [
    { id: 'civis', head: 'cīvis', la: 'cīvis, cīvis', g: 'm', pos: 'noun, 3rd decl. (i-stem)', en: 'citizen', stress: 'CĪ-vis · gen. pl. CĪ-vi-um', deriv: 'civil, civic', note: 'Also feminine for a female citizen. Compare cīvitās (Lecture VII).' },
    { id: 'hostis', head: 'hostis', la: 'hostis, hostis', g: 'm', pos: 'noun, 3rd decl. (i-stem)', en: 'enemy (of the state); pl. the enemy', stress: 'HOS-tis', deriv: 'hostile; related to Gast, guest', note: 'A public enemy; a personal enemy is inimīcus.' },
    { id: 'navis', head: 'nāvis', la: 'nāvis, nāvis', g: 'f', pos: 'noun, 3rd decl. (i-stem)', en: 'ship', stress: 'NĀ-vis', deriv: 'naval, navy', note: 'Compare nāvigō (Lecture I), nauta.' },
    { id: 'nubes', head: 'nūbēs', la: 'nūbēs, nūbis', g: 'f', pos: 'noun, 3rd decl. (i-stem)', en: 'cloud', stress: 'NŪ-bēs', note: 'Pliny’s cloud over Vesuvius: nūbem (6.16.4).' },
    { id: 'ignis', head: 'ignis', la: 'ignis, ignis', g: 'm', pos: 'noun, 3rd decl. (i-stem)', en: 'fire', stress: 'IG-nis', deriv: 'ignite, igneous', note: 'Ablative often ignī.' },
    { id: 'urbs', head: 'urbs', la: 'urbs, urbis', g: 'f', pos: 'noun, 3rd decl. (i-stem)', en: 'city; the City (Rome)', stress: 'URBS · gen. pl. UR-bi-um', deriv: 'urban, suburb', note: 'Urbī et orbī: “to the City and the world”, the papal blessing.' },
    { id: 'mons', head: 'mōns', la: 'mōns, montis', g: 'm', pos: 'noun, 3rd decl. (i-stem)', en: 'mountain', stress: 'MŌNS · MON-tis', deriv: 'mount, mountain; Montenegro' },
    { id: 'nox', head: 'nox', la: 'nox, noctis', g: 'f', pos: 'noun, 3rd decl. (i-stem)', en: 'night', stress: 'NOX · NOC-tis', deriv: 'nocturnal; related to Nacht', note: 'nocte: at night (ablative of time, Lecture XVI).' },
    { id: 'pars', head: 'pars', la: 'pars, partis', g: 'f', pos: 'noun, 3rd decl. (i-stem)', en: 'part, share; side', stress: 'PARS · PAR-tis', deriv: 'part, party' },
    { id: 'ars', head: 'ars', la: 'ars, artis', g: 'f', pos: 'noun, 3rd decl. (i-stem)', en: 'skill, art; method', stress: 'ARS · AR-tis', deriv: 'art, artist, artificial', note: 'ars poētica: the art of poetry (Horace’s title).' },
    { id: 'mare', head: 'mare', la: 'mare, maris', g: 'n', pos: 'noun, 3rd decl. (i-stem)', en: 'sea', stress: 'MA-re', deriv: 'marine, maritime; related to Meer', note: 'Abl. marī; pl. maria. Mare nostrum: the Mediterranean.' },
    { id: 'animal', head: 'animal', la: 'animal, animālis', g: 'n', pos: 'noun, 3rd decl. (i-stem)', en: 'animal, living creature', stress: 'A-ni-mal · a-ni-MĀ-lis', deriv: 'animal', note: 'From anima, “breath, life”.' },
    { id: 'vis', head: 'vīs', la: 'vīs, vīs; pl. vīrēs, vīrium', g: 'f', pos: 'noun, irregular', en: 'force, violence; pl. strength', stress: 'VĪS · VĪ-rēs', deriv: 'vim, violent', note: 'Acc. vim, abl. vī. Do not confuse vīrēs with virī, “men”.' },
    { id: 'cinis', head: 'cinis', la: 'cinis, cineris', g: 'm', pos: 'noun, 3rd decl.', en: 'ash, ashes', stress: 'CI-nis · CI-ne-ris', deriv: 'incinerate', note: 'Not an i-stem (two syllables against three): gen. pl. cinerum.' },
    { id: 'gladius', head: 'gladius', la: 'gladius, gladiī', g: 'm', pos: 'noun, 2nd decl.', en: 'sword', stress: 'GLA-di-us', deriv: 'gladiator, gladiolus', note: 'Probably a loan from Celtic.' },
    { id: 'equito', head: 'equitō', la: 'equitō, equitāre, equitāvī, equitātum', pos: 'verb, 1st conj.', en: 'ride (a horse)', stress: 'E-qui-tō · e-qui-TĀ-re', note: 'From eques, “horseman”, and equus.' }
  ],

  grammarCards: [
    { id: 'g15-groups', front: 'Three groups of i-stems', back: 'm./f. parisyllabic in -is/-ēs (cīvis); m./f. one syllable, stem in two consonants (urbs); neuters in -e, -al, -ar (mare, animal)' },
    { id: 'g15-gen', front: 'Genitive plural of cīvis, urbs, nox', back: 'cīvium, urbium, noctium' },
    { id: 'g15-acc', front: 'Alternative acc. pl. of m./f. i-stems', back: '-īs: cīvīs, urbīs (older and poetic)' },
    { id: 'g15-neut', front: 'Three special endings of neuter i-stems', back: 'abl. sg. -ī, nom./acc. pl. -ia, gen. pl. -ium' },
    { id: 'g15-mare', front: 'mare: abl. sg. and nom. pl.', back: 'marī; maria' },
    { id: 'g15-animal', front: 'animal: nom. pl. and gen. pl.', back: 'animālia, animālium' },
    { id: 'g15-exc', front: 'Not i-stems despite the look', back: 'pater, māter, frāter, canis, iuvenis, senex: patrum, canum …' },
    { id: 'g15-vis', front: 'vīs: forms', back: 'vīs, vim, vī; pl. vīrēs, vīrium, vīribus' },
    { id: 'g15-vires', front: 'vīrēs vs virī', back: 'strength (pl. of vīs) vs men (pl. of vir)' },
    { id: 'g15-means', front: 'Ablative of means', back: 'no preposition: gladiō pugnat, he fights with a sword' },
    { id: 'g15-acc2', front: 'Ablative of accompaniment', back: 'cum + abl.: cum amīcō, with a friend' },
    { id: 'g15-manner', front: 'Ablative of manner', back: 'cum + abl.; cum optional with an adjective: magnā (cum) cūrā' },
    { id: 'g15-cumgladio', front: 'Why not cum gladiō for “with a sword”?', back: 'cum marks company; the instrument takes the bare ablative.' },
    { id: 'g15-test', front: 'Test: means, accompaniment or manner?', back: '“using” = means; “together with” = accompaniment; can be an adverb = manner' },
    { id: 'g15-heute', front: 'German heute', back: 'From OHG hiutu, an old instrumental case: “on this day”.' },
    { id: 'g15-gast', front: 'hostis and Gast', back: 'Related words; an old i-stem. The umlaut in Gäste comes from the old i-plural.' },
    { id: 'g15-pliny', front: 'Cervīcālia capitibus imposita linteīs cōnstringunt.', back: 'They tie pillows on their heads with linen cloths. (Pliny, Letters 6.16.16)' },
    { id: 'g15-date', front: 'Date of the eruption of Vesuvius', back: 'Manuscripts: 24 August AD 79; many scholars now favour late October (2018 inscription). Open question.' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'Genitive plural of <span class="la">cīvis</span>:', options: ['cīvium', 'cīvum', 'cīvōrum', 'cīvis'], answer: 0, explain: 'i-stem: -ium.' },
    { id: 'e2', type: 'mc', prompt: 'Ablative singular of <span class="la">mare</span>:', options: ['marī', 'mare', 'marē', 'maris'], answer: 0, explain: 'Neuter i-stems: abl. -ī.' },
    { id: 'e3', type: 'mc', prompt: 'Nominative plural of <span class="la">animal</span>:', options: ['animālia', 'animāla', 'animālēs', 'animālī'], answer: 0, explain: 'Neuter i-stems: -ia.' },
    { id: 'e4', type: 'mc', prompt: 'Which noun is NOT an i-stem?', options: ['pater', 'urbs', 'nāvis', 'mare'], answer: 0, explain: 'patrum, not *patrium.' },
    { id: 'e5', type: 'mc', prompt: 'In <span class="la">Gladiō pugnat</span>, the ablative expresses:', options: ['means', 'accompaniment', 'manner', 'time'], answer: 0, explain: 'The sword is the instrument: no preposition.' },
    { id: 'e6', type: 'mc', prompt: 'In <span class="la">cum amīcīs ambulat</span>, the ablative expresses:', options: ['accompaniment', 'means', 'manner', 'place'], answer: 0, explain: 'Together with friends: cum.' },
    { id: 'e7', type: 'gap', prompt: '<span class="la">Multae nāv___ in lītore sunt.</span>', hint: 'ships (nom. pl.)', answers: ['ēs', 'es'], full: 'Multae nāvēs in lītore sunt.', explain: 'Nominative plural -ēs.' },
    { id: 'e8', type: 'gap', prompt: '<span class="la">Nōmina cīv___ nōn scīmus.</span>', hint: 'of the citizens', answers: ['ium'], full: 'Nōmina cīvium nōn scīmus.', explain: 'Genitive plural -ium.' },
    { id: 'e9', type: 'gap', prompt: '<span class="la">Puerī in mar___ natant.</span>', hint: 'sea (abl.)', answers: ['ī', 'i'], full: 'Puerī in marī natant.', explain: 'Ablative -ī.' },
    { id: 'e10', type: 'gap', prompt: '<span class="la">Pāstōrēs ign___ sē dēfendunt.</span>', hint: 'with fires', answers: ['ibus'], full: 'Pāstōrēs ignibus sē dēfendunt.', explain: 'Ablative plural of means, no cum.' },
    { id: 'e11', type: 'gap', prompt: '<span class="la">Magn___ cum cūrā labōrat.</span>', hint: 'with great (care)', answers: ['ā', 'a'], full: 'Magnā cum cūrā labōrat.', explain: 'Ablative of manner; cum between adjective and noun.' },
    { id: 'e12', type: 'gap', prompt: '<span class="la">Animāl___ in agrīs sunt.</span>', hint: 'animals', answers: ['ia'], full: 'Animālia in agrīs sunt.', explain: 'Nominative plural -ia.' },
    { id: 'e13', type: 'paradigm', prompt: 'Decline <span class="la">urbs</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['urbs', 'urbēs'] },
      { label: 'Gen.', answers: ['urbis', 'urbium'] },
      { label: 'Dat.', answers: ['urbī', 'urbibus'] },
      { label: 'Acc.', answers: ['urbem', 'urbēs|urbīs'] },
      { label: 'Abl.', answers: ['urbe', 'urbibus'] }
    ] },
    { id: 'e14', type: 'paradigm', prompt: 'Decline <span class="la">animal</span>.', headers: ['Singular', 'Plural'], rows: [
      { label: 'Nom.', answers: ['animal', 'animālia'] },
      { label: 'Gen.', answers: ['animālis', 'animālium'] },
      { label: 'Dat.', answers: ['animālī', 'animālibus'] },
      { label: 'Acc.', answers: ['animal', 'animālia'] },
      { label: 'Abl.', answers: ['animālī', 'animālibus'] }
    ] },
    { id: 'e15', type: 'match', prompt: 'Match each phrase to its description.', pairs: [
      ['gladiō', 'means: with a sword'], ['cum amīcō', 'accompaniment: with a friend'], ['magnā cum cūrā', 'manner: with great care'], ['cīvium', 'gen. pl.: of the citizens'], ['marī', 'abl. sg.: by sea']
    ] },
    { id: 'e16', type: 'order', prompt: 'Put the English translation in order.', source: 'Mārcus cum fīliīs ad mare equitāvit.', tokens: ['Marcus', 'rode', 'with his sons', 'to the sea'], explain: 'cum fīliīs: accompaniment.' },
    { id: 'e17', type: 'translate', dir: 'la-en', source: 'Mīlitēs gladiīs pugnāvērunt.', model: 'The soldiers fought with swords.', accepted: ['soldiers fought with swords', 'soldiers have fought with swords', 'soldiers fought using swords', 'soldiers fought by means of swords'] },
    { id: 'e18', type: 'translate', dir: 'la-en', source: 'Lūcius cum amīcīs ad urbem vēnit.', model: 'Lucius came to the city with (his) friends.', accepted: ['lucius came to city with friends', 'lucius came to city with his friends', 'lucius came with friends to city', 'lucius came with his friends to city', 'lucius has come to city with friends', 'lucius has come to city with his friends'] },
    { id: 'e19', type: 'translate', dir: 'la-en', source: 'Puerī magnā cum cūrā audīvērunt.', model: 'The boys listened with great care.', accepted: ['boys listened with great care', 'boys listened very carefully', 'boys heard with great care', 'boys have listened with great care', 'boys listened with much care'] },
    { id: 'e20', type: 'translate', dir: 'en-la', source: 'the ships of the citizens', model: 'nāvēs cīvium', accepted: ['nāvēs cīvium'], explain: 'Both are i-stems: genitive plural cīvium, not cīvum. Nāvis is feminine; nāvēs is nominative or accusative plural.' },
    { id: 'e21', type: 'translate', dir: 'en-la', source: 'by sea (one word)', model: 'marī', accepted: ['marī'], explain: 'Mare is a neuter i-stem with ablative -ī, not -e. The plain ablative expresses the way by which, as in terrā marīque.' },
    { id: 'e22', type: 'translate', dir: 'en-la', source: 'with a friend', model: 'cum amīcō', accepted: ['cum amīcō'], explain: 'Accompaniment takes cum + ablative, like German mit + dative.' },
    { id: 'e23', type: 'mc', prompt: 'In Pliny’s letter, the people at Stabiae tie pillows on their heads with:', options: ['linen cloths', 'ropes from the ships', 'leather straps', 'their belts'], answer: 0, explain: 'linteīs cōnstringunt: ablative of means.' },
    { id: 'e24', type: 'mc', prompt: 'Latin <span class="la">hostis</span> is related to German:', options: ['Gast', 'Hose', 'Hostie', 'Osten'], answer: 0, explain: 'Germanic kept “guest”, Latin narrowed it to “enemy”. (Hostie is from Latin hostia, “sacrificial victim”, probably a different word.)' },
    { id: 'e25', type: 'mc', prompt: 'Which German word preserves an old instrumental case?', options: ['heute', 'Haus', 'gestern', 'Nacht'], answer: 0, explain: 'OHG hiutu, “on this day”.' }
  ],

  reading: {
    title: 'Ad mare',
    note: 'Original passage: Marcus takes the boys to the coast. Tap any word.',
    text: 'Paucīs post diēbus Mārcus cum fīliīs suīs et cum Lūciō ad mare equitāvit. Per agrōs et inter montēs equīs iter fēcērunt, et puerī magnā cum laetitiā omnia spectāvērunt. Vesperī ad urbem parvam in lītore vēnērunt. Ibi multae nāvēs erant, et cīvēs urbis eās onerābant: aliī vīnum, aliī frūmentum in nāvēs portābant. Quīntus ūnam nāvem vīdit et clāmāvit: “Ecce, nāvis Graeca! Lūcī, estne nāvis tua?” Lūcius rīsit: “Nōn mea, sed amīcī meī. Ille crās hāc nāve ad Graeciam nāvigābit.” Nocte in lītore sēdērunt et ignēs in montibus vīdērunt. “Quid sunt illī ignēs?” rogāvit Gāius. “Pāstōrēs sunt,” respondit Mārcus. “Ignibus sē et animālia sua ā lupīs dēfendunt.” Tum Lūcius dē marī et dē nāvibus multa nārrāvit; puerī summā cum cūrā audīvērunt. Postrīdiē māne nāvis amīcī cum ventō secundō ā lītore discessit, et puerī eam diū oculīs spectāvērunt. Quīntus sēcum cōgitāvit: “Ōlim ego quoque marī ad Graeciam nāvigābō.”',
    translation: 'A few days later Marcus rode to the sea with his sons and with Lucius. They travelled on horseback through the fields and between the mountains, and the boys looked at everything with great joy. In the evening they came to a small town on the shore. There were many ships there, and the citizens of the town were loading them: some carried wine, others grain onto the ships. Quintus saw one ship and shouted: “Look, a Greek ship! Lucius, is it your ship?” Lucius laughed: “Not mine, but my friend’s. Tomorrow he will sail to Greece in this ship.” At night they sat on the shore and saw fires on the mountains. “What are those fires?” asked Gaius. “They are shepherds,” answered Marcus. “With fires they protect themselves and their animals from wolves.” Then Lucius told them much about the sea and about ships; the boys listened with the greatest attention. Early the next morning the friend’s ship left the shore with a favourable wind, and the boys followed it with their eyes for a long time. Quintus thought to himself: “One day I too will sail to Greece by sea.”',
    notes: [
      { ref: 'Paucīs post diēbus', html: '“a few days later”, literally “afterwards by a few days”: <span class="la">paucīs diēbus</span> is an ablative of the degree of difference, with <span class="la">post</span> as an adverb. <span class="la">diēs</span> is fifth declension (Lecture XXIII).' },
      { ref: 'cum fīliīs suīs et cum Lūciō', html: 'Ablative of accompaniment: persons, so <span class="la">cum</span>.' },
      { ref: 'inter montēs equīs iter fēcērunt', html: '<span class="la">montēs</span>: accusative plural of the i-stem <span class="la">mōns</span>. <span class="la">equīs</span>: ablative of means, “by horse”, no <span class="la">cum</span>; the horses are the means of travel, not companions. <span class="la">iter facere</span>: “to travel, make a journey”.' },
      { ref: 'magnā cum laetitiā omnia spectāvērunt', html: 'Ablative of manner, with <span class="la">cum</span> between adjective and noun. <span class="la">laetitia</span>: joy (from <span class="la">laetus</span>). <span class="la">omnia</span>: “all things, everything”, neuter plural of <span class="la">omnis</span>, an i-stem adjective (Lecture XVII).' },
      { ref: 'cīvēs urbis eās onerābant', html: '<span class="la">cīvēs</span>, <span class="la">urbis</span>: two i-stems. <span class="la">eās</span>: the ships (feminine, because <span class="la">nāvis</span> is feminine). <span class="la">onerō</span>: load, from <span class="la">onus</span> (Lecture VIII).' },
      { ref: 'aliī vīnum, aliī frūmentum', html: '<span class="la">aliī … aliī</span>: “some … others” (Lecture X).' },
      { ref: 'hāc nāve', html: 'Ablative of means, “by this ship”. <span class="la">nāvis</span> has the ablative <span class="la">nāve</span> (also <span class="la">nāvī</span>); <span class="la">hāc</span> is from <span class="la">hic</span>.' },
      { ref: 'ignēs in montibus vīdērunt', html: 'Two i-stems: <span class="la">ignēs</span> (m.), <span class="la">montibus</span> (m.).' },
      { ref: 'Ignibus sē et animālia sua ā lupīs dēfendunt', html: '<span class="la">ignibus</span>: means. <span class="la">sē … sua</span>: the shepherds themselves and their own animals (Lecture XIV). <span class="la">animālia</span>: neuter plural in <span class="la">-ia</span>. <span class="la">ā lupīs</span>: “from wolves”.' },
      { ref: 'puerī summā cum cūrā audīvērunt', html: 'Manner: “with the greatest care, very attentively”.' },
      { ref: 'cum ventō secundō ā lītore discessit', html: 'Here <span class="la">cum</span> with a thing: the wind accompanies the ship rather than being its instrument, and Latin writers vary in such cases. <span class="la">discessit</span>: perfect of <span class="la">discēdō</span>, “depart”.' },
      { ref: 'eam diū oculīs spectāvērunt', html: '<span class="la">oculīs</span>: means, “with their eyes”.' },
      { ref: 'Ōlim ego quoque marī ad Graeciam nāvigābō', html: '<span class="la">ōlim</span> here “some day” (Lecture V: also “once upon a time”). <span class="la">marī</span>: “by sea”, the ablative of the route, close to means.' }
    ],
    glosses: {
      'paucīs': 'abl. pl. of paucī: (by) a few', 'post': 'afterwards, later (adv.)', 'diēbus': 'abl. pl. of diēs: days', 'mārcus': 'Marcus (nom.)', 'cum': 'with (+ abl.)', 'fīliīs': 'abl. pl. of fīlius: sons', 'suīs': 'abl. pl. of suus: his own', 'et': 'and', 'lūciō': 'abl. of Lūcius', 'ad': 'to (+ acc.)', 'mare': 'sea (acc.)', 'equitāvit': 'perf. 3rd sg. of equitō: rode',
      'per': 'through (+ acc.)', 'agrōs': 'acc. pl. of ager: fields', 'inter': 'between, among (+ acc.)', 'montēs': 'acc. pl. of mōns: mountains', 'equīs': 'abl. pl. of equus: by horse', 'iter': 'journey (acc.)', 'fēcērunt': 'perf. 3rd pl. of faciō: made', 'puerī': 'nom. pl. of puer: boys', 'magnā': 'abl. f. of magnus: great', 'laetitiā': 'abl. of laetitia: joy', 'omnia': 'everything (acc. pl. n. of omnis)', 'spectāvērunt': 'perf. 3rd pl. of spectō: looked at',
      'vesperī': 'in the evening', 'urbem': 'acc. of urbs: town, city', 'parvam': 'acc. f. of parvus: small', 'in': 'in, on (+ abl.); into, onto (+ acc.)', 'lītore': 'abl. of lītus: shore', 'vēnērunt': 'perf. 3rd pl. of veniō: came',
      'ibi': 'there', 'multae': 'nom. pl. f. of multus: many', 'nāvēs': 'nom./acc. pl. of nāvis: ships', 'erant': 'were', 'cīvēs': 'nom. pl. of cīvis: citizens', 'urbis': 'gen. of urbs: of the town', 'eās': 'acc. pl. f. of is: them', 'onerābant': 'impf. 3rd pl. of onerō: were loading', 'aliī': 'some … others', 'vīnum': 'wine (acc.)', 'frūmentum': 'grain (acc.)', 'portābant': 'impf. 3rd pl. of portō: carried',
      'quīntus': 'Quintus (nom.)', 'ūnam': 'acc. f. of ūnus: one', 'nāvem': 'acc. of nāvis: ship', 'vīdit': 'perf. 3rd sg. of videō: saw', 'clāmāvit': 'perf. 3rd sg. of clāmō: shouted', 'ecce': 'look!', 'nāvis': 'ship (nom.)', 'graeca': 'nom. f. of Graecus: Greek', 'lūcī': 'voc. of Lūcius', 'estne': 'is it? (est + -ne)', 'tua': 'nom. f. of tuus: your',
      'lūcius': 'Lucius (nom.)', 'rīsit': 'perf. 3rd sg. of rīdeō: laughed', 'nōn': 'not', 'mea': 'nom. f. of meus: mine', 'sed': 'but', 'amīcī': 'gen. of amīcus: of a friend', 'meī': 'gen. of meus: my', 'ille': 'he, that man', 'crās': 'tomorrow', 'hāc': 'abl. f. of hic: this', 'nāve': 'abl. of nāvis: ship', 'graeciam': 'acc. of Graecia: Greece', 'nāvigābit': 'fut. 3rd sg. of nāvigō: will sail',
      'nocte': 'at night', 'sēdērunt': 'perf. 3rd pl. of sedeō: sat', 'vīdērunt': 'perf. 3rd pl. of videō: saw', 'nāvigābō': 'fut. 1st sg. of nāvigō: I shall sail', 'ignēs': 'nom./acc. pl. of ignis: fires', 'montibus': 'abl. pl. of mōns: mountains',
      'quid': 'what?', 'sunt': 'are', 'illī': 'nom. pl. m. of ille: those', 'rogāvit': 'perf. 3rd sg. of rogō: asked', 'gāius': 'Gaius (nom.)', 'pāstōrēs': 'nom. pl. of pāstor: shepherds', 'respondit': 'perf. 3rd sg. of respondeō: answered',
      'ignibus': 'abl. pl. of ignis: with fires', 'sē': 'themselves', 'animālia': 'acc. pl. of animal: animals', 'sua': 'acc. pl. n. of suus: their own', 'ā': 'from (+ abl.)', 'lupīs': 'abl. pl. of lupus: wolves', 'dēfendunt': '3rd pl. of dēfendō: defend',
      'tum': 'then', 'dē': 'about (+ abl.)', 'marī': 'abl. of mare: sea; by sea', 'nāvibus': 'abl. pl. of nāvis: ships', 'multa': 'many things (acc. pl. n.)', 'nārrāvit': 'perf. 3rd sg. of nārrō: told', 'summā': 'abl. f. of summus: greatest', 'cūrā': 'abl. of cūra: care', 'audīvērunt': 'perf. 3rd pl. of audiō: listened',
      'postrīdiē': 'on the next day', 'māne': 'in the morning, early', 'ventō': 'abl. of ventus: wind', 'secundō': 'abl. of secundus: favourable', 'discessit': 'perf. 3rd sg. of discēdō: departed', 'eam': 'acc. f. of is: it (the ship)', 'diū': 'for a long time', 'oculīs': 'abl. pl. of oculus: with their eyes',
      'sēcum': 'with himself, to himself', 'cōgitāvit': 'perf. 3rd sg. of cōgitō: thought', 'ōlim': 'some day', 'ego': 'I', 'quoque': 'also, too'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'How did Marcus and the others travel to the sea?', options: ['On horseback', 'On foot', 'By ship', 'By cart'], answer: 0, explain: 'equīs iter fēcērunt.' },
      { id: 'r2', type: 'mc', prompt: 'Whose was the Greek ship?', options: ['A friend of Lucius’s', 'Lucius’s own', 'Marcus’s', 'The citizens’'], answer: 0, explain: 'Nōn mea, sed amīcī meī.' },
      { id: 'r3', type: 'mc', prompt: 'Why were there fires on the mountains?', options: ['Shepherds were protecting their animals from wolves', 'The mountains were burning', 'The citizens were celebrating', 'Soldiers were signalling'], answer: 0, explain: 'Ignibus sē et animālia sua ā lupīs dēfendunt.' },
      { id: 'r4', type: 'mc', prompt: 'What does Quintus resolve at the end?', options: ['To sail to Greece one day', 'To become a shepherd', 'To buy a horse', 'To stay at home'], answer: 0, explain: 'Ōlim ego quoque marī ad Graeciam nāvigābō.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: 'Genitive plural of <span class="la">nox</span>:', options: ['noctium', 'noctum', 'noctōrum', 'noctis'], answer: 0, explain: 'One syllable, stem in two consonants: i-stem.' },
      { id: 't2', type: 'mc', prompt: 'Genitive plural of <span class="la">frāter</span>:', options: ['frātrum', 'frātrium', 'frātrōrum', 'frāterum'], answer: 0, explain: 'Not an i-stem.' },
      { id: 't3', type: 'mc', prompt: '“with great courage” (manner):', options: ['magnā cum virtūte', 'cum magnō virtūte', 'magnā virtūtī', 'magnam virtūtem'], answer: 0, explain: 'cum between adjective and noun; virtūs is feminine.' },
      { id: 't4', type: 'gap', prompt: '<span class="la">Hostēs urb___ cēpērunt.</span>', hint: 'the city', answers: ['em'], full: 'Hostēs urbem cēpērunt.', explain: 'Accusative singular.' },
      { id: 't5', type: 'gap', prompt: '<span class="la">Lapidēs in mar___ iēcit.</span>', hint: 'into the sea', answers: ['e'], full: 'Lapidēs in mare iēcit.', explain: 'in + accusative: mare (nom. = acc. in the neuter).' },
      { id: 't6', type: 'translate', dir: 'la-en', source: 'Hostēs ignī urbem dēlēvērunt.', model: 'The enemy destroyed the city with fire.', accepted: ['enemy destroyed city with fire', 'enemies destroyed city with fire', 'enemy destroyed city by fire', 'enemies destroyed city by fire', 'enemy have destroyed city with fire', 'enemy has destroyed city with fire'] },
      { id: 't7', type: 'translate', dir: 'en-la', source: 'with the citizens', model: 'cum cīvibus', accepted: ['cum cīvibus'], explain: 'Cum + ablative plural, third declension -ibus.' },
      { id: 't8', type: 'mc', prompt: '<span class="la">vīribus</span> is from:', options: ['vīs (strength)', 'vir (man)', 'vīvō (live)', 'videō (see)'], answer: 0, explain: 'vīrēs, vīrium, vīribus.' },
      { id: 't9', type: 'mc', prompt: 'In <span class="la">linteīs cōnstringunt</span> (Pliny), <span class="la">linteīs</span> is:', options: ['ablative of means', 'ablative of accompaniment', 'dative of indirect object', 'ablative of time'], answer: 0, explain: 'The cloths are the instrument.' },
      { id: 't10', type: 'mc', prompt: 'The manuscripts of Pliny date the eruption to:', options: ['24 August AD 79', '17 October AD 79', '15 March 44 BC', '1 January AD 80'], answer: 0, explain: 'nōnum Kal. Septembrēs; the date is now disputed.' },
      { id: 't11', type: 'mc', prompt: 'Nominative plural of <span class="la">mare</span>:', options: ['maria', 'marēs', 'mara', 'marī'], answer: 0, explain: 'Neuter i-stem: -ia.' }
    ]
  },

  reference: [
    { title: 'i-stems', headers: ['', 'cīvis (m.)', 'urbs (f.)', 'mare (n.)', 'animal (n.)'], rows: [
      ['Nom. sg.', 'cīvis', 'urbs', 'mare', 'animal'], ['Gen.', 'cīvis', 'urbis', 'maris', 'animālis'], ['Dat.', 'cīvī', 'urbī', 'marī', 'animālī'], ['Acc.', 'cīvem', 'urbem', 'mare', 'animal'], ['Abl.', 'cīve', 'urbe', 'marī', 'animālī'],
      ['Nom. pl.', 'cīvēs', 'urbēs', 'maria', 'animālia'], ['Gen.', 'cīvium', 'urbium', '—', 'animālium'], ['Dat./Abl.', 'cīvibus', 'urbibus', 'maribus', 'animālibus'], ['Acc.', 'cīvēs (-īs)', 'urbēs (-īs)', 'maria', 'animālia']
    ] },
    { title: 'vīs', headers: ['', 'Singular', 'Plural'], rows: [
      ['Nom.', 'vīs', 'vīrēs'], ['Gen.', '(vīs)', 'vīrium'], ['Dat.', '(vī)', 'vīribus'], ['Acc.', 'vim', 'vīrēs (-īs)'], ['Abl.', 'vī', 'vīribus']
    ] },
    { title: 'Three ablatives with “with”', headers: ['Use', 'Form', 'Example'], rows: [
      ['Means', 'abl. alone', 'gladiō pugnat'], ['Accompaniment', 'cum + abl.', 'cum amīcō ambulat'], ['Manner', 'cum + abl. (cum optional with adj.)', 'magnā (cum) cūrā labōrat']
    ] }
  ]
});
