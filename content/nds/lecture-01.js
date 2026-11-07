/*
 * Low German (Plattdeutsch), Schaumburg focus — Lecture I: Schaumburg Platt, sounds and spellings;
 * how it differs from northern Platt and from High German; verbs in -et, past participles in e-.
 * Reading: twelve proverbs in Schaumburg Platt with the German renderings given in the source
 * (a collection of texts supplied by Nils; publication details to be confirmed, see CONTENT-CHECKS.md).
 * Short phrases quoted in the grammar from a prose text by Karl Wehmeyer and an anonymous anecdote in the
 * same collection. Pictures from Wikimedia Commons.
 */
Viator.addLecture('nds', {
  id: 'nds-01',
  number: 1,
  title: 'Wat de Buer nich kennt',
  subtitle: 'Schaumburg Platt: sounds and spellings; twelve proverbs',
  minutes: 45,

  intro: `
    <p>This course is about understanding Plattdeutsch, with the focus on the Platt of Schaumburg, the district around Bückeburg, Stadthagen, Rinteln and Obernkirchen, and a look northwards to the Nienburg area on the Weser. It is a reading course like the others in Viātor: texts with German glosses, grammar explained so that you can recognise forms, and comparisons with High German and with the Middle Low German of the Hanse.</p>
    <p>Schaumburg Platt sounds quite different from the Platt of Hamburg or Holstein that most people know from television. A northerner says <em>Huus</em> and <em>Schoh</em>; a Schaumburger writes <em>Huis</em> and <em>Schauh</em>. A northerner says <em>se hebbt</em>; in Schaumburg it is <em>se hewwet</em>. The first lecture is about these differences, and about the fact that every writer of Schaumburg Platt spells a little differently.</p>
    <p>The reading is twelve proverbs, in the form in which they were printed in a collection of Schaumburg texts, with the German renderings given there. Proverbs are a good start: short, memorable, and full of the everyday words of the language.</p>
  `,

  background: [
    {
      title: 'Schaumburg and its Platt',
      html: `
        <p>The district of Schaumburg in Lower Saxony unites two historical territories: the small principality of Schaumburg-Lippe, with its residence at Bückeburg, which survived as a state until 1946, and the part of the old county of Schaumburg (around Rinteln and Obernkirchen) that went to Hesse in 1647 and later to Prussia. Both lie between the Weser and the Steinhuder Meer, on the southern edge of the North German plain, where the Weser Hills begin.</p>
        <p>Linguistically, Schaumburg lies where three groups of Low German dialects meet: East Westphalian to the west and south (Minden, Lippe), Eastphalian to the east (towards Hanover and Hildesheim), and Northern Low Saxon to the north (towards Nienburg and Bremen). The features you will meet in this lecture (diphthongs such as <em>ui</em> and <em>au</em>, the plural in <em>-et</em>, the participle prefix <em>e-</em>) link Schaumburg with the southern groups rather than with the North. How exactly to classify it, and where its boundaries run, is a question for the dialect atlases; this course will treat it as a transitional dialect and say so.</p>
        <p>Schaumburg Platt has been written down mainly in local publications, many of them self-published, and a large collection is accessible in the Niedersächsisches Landesarchiv at Bückeburg (the former Staatsarchiv).</p>
        <figure class="fig"><img class="fig-img" loading="lazy" decoding="async" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Bueckeburg_Schloss_v_O.JPG/960px-Bueckeburg_Schloss_v_O.JPG" data-fallbacks="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Bueckeburg_Schloss_v_O.JPG/500px-Bueckeburg_Schloss_v_O.JPG|https://upload.wikimedia.org/wikipedia/commons/a/a6/Bueckeburg_Schloss_v_O.JPG" alt="A Renaissance palace with gables and towers seen across a forecourt"><figcaption>Schloss Bückeburg, residence of the princes of Schaumburg-Lippe, whose small state lasted until 1946. <span class="credit">Photograph; author and licence on the file page · <a href="https://commons.wikimedia.org/wiki/File:Bueckeburg_Schloss_v_O.JPG" target="_blank" rel="noopener">Wikimedia Commons</a></span></figcaption></figure>
      `
    },
    {
      title: 'Platt as a spoken language',
      html: `
        <p>Modern Low German is above all a spoken language. People who write it usually learned to write in High German and spell Platt by ear, with High German letters. That is why the texts in this course spell the same word in different ways, even within one collection: <em>ok</em> and <em>ouk</em> “auch”, <em>gauen</em> and <em>jaut</em> “gut”, <em>sik</em> and <em>sick</em> “sich”.</p>
        <p>The course keeps every text exactly as printed, and the glosses give the High German word. When the course writes Platt itself (in exercises and explanations), it follows the spelling rules of Johannes Saß where they fit and the habits of the Schaumburg texts where Saß has no letter for a Schaumburg sound.</p>
      `
    },
    {
      title: 'Proverbs',
      html: `
        <p>Low German proverbs are famous for being blunt without being cruel: <em>Wat de Buer nich kennt, dat frett hei nich</em> is the same proverb as High German <em>Was der Bauer nicht kennt, frisst er nicht</em>, and many others have High German equivalents. They are a useful bridge: you can often guess the Platt from the German you already know, and then notice where the forms differ.</p>
      `
    }
  ],

  culture: `
    <p class="eyebrow">From the sources</p>
    <p><em>Dat is de Tied taun Noahdenken, wat hät düsse Dag ‚ebrocht, wat schall morgen sien?</em></p>
    <p>“That is the time for reflecting: what has this day brought, what will tomorrow be?” From a prose piece by Karl Wehmeyer on the evening twilight (<em>Schummernisse</em>), in the collection of Schaumburg texts.</p>
    <p>Almost every feature of this lecture is in one sentence: <em>taun</em> (zum, with <em>au</em>), <em>Noahdenken</em> (Nachdenken, with <em>oa</em>), <em>‚ebrocht</em> (gebracht, with the participle prefix <em>e-</em>, written with an apostrophe for the lost g), and <em>schall</em> “soll”, the same verb as Middle Low German <span class="la">schal</span> and English <em>shall</em>.</p>
  `,

  pronunciation: `
    <p>There is no recording in the app, and spelling is the only guide, so treat these values as approximate. Compare with High German first:</p>
    <div class="tablewrap"><table>
      <thead><tr><th>Spelling</th><th>Sound (approx.)</th><th>Example</th><th>High German</th></tr></thead>
      <tbody>
        <tr><td><em>ui</em></td><td>u + i, as in <em>pfui</em></td><td><em>Huis, uit, Tuin</em></td><td>Haus, aus, Zaun</td></tr>
        <tr><td><em>au</em></td><td>a + u, where High German has a long u or o</td><td><em>Schauh, klauk, sau, tau</em></td><td>Schuh, klug, so, zu</td></tr>
        <tr><td><em>eu</em></td><td>e/ö + u, for long ü</td><td><em>Heuhner</em></td><td>Hühner</td></tr>
        <tr><td><em>ou</em></td><td>o + u</td><td><em>houch, ouk, groute</em></td><td>hoch, auch, große</td></tr>
        <tr><td><em>oa</em></td><td>long open o, a + o</td><td><em>Oabend, Doag, Stroaten</em></td><td>Abend, Tag, Straßen</td></tr>
        <tr><td><em>j</em> for g</td><td>j, before vowels and r</td><td><em>jaut, jrowwen, Jeschichten</em></td><td>gut, groben, Geschichten</td></tr>
        <tr><td><em>ww</em></td><td>w or b between vowels</td><td><em>hewwet, jrowwen</em></td><td>haben, groben</td></tr>
      </tbody>
    </table></div>
    <p>Where these spellings differ from writer to writer (<em>jaut</em> beside <em>gauen</em>), they probably reflect different villages, different habits, or both.</p>
  `,

  grammar: [
    {
      title: '1. Schaumburg, North and High German',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Schaumburg (texts)</th><th>Northern Platt</th><th>High German</th></tr></thead>
          <tbody>
            <tr><td>Huis, uit</td><td>Huus, ut</td><td>Haus, aus</td></tr>
            <tr><td>Schauh, klauk, gaut / jaut</td><td>Schoh, klook, good</td><td>Schuh, klug, gut</td></tr>
            <tr><td>Heuhner</td><td>Höhner</td><td>Hühner</td></tr>
            <tr><td>houch, ouk</td><td>hooch, ook</td><td>hoch, auch</td></tr>
            <tr><td>Oabend, Doag</td><td>Avend, Dag</td><td>Abend, Tag</td></tr>
            <tr><td>eck</td><td>ik</td><td>ich</td></tr>
            <tr><td>hei</td><td>he</td><td>er</td></tr>
            <tr><td>sau, tau</td><td>so, to</td><td>so, zu</td></tr>
          </tbody>
        </table></div>
        <p>The pattern: where Middle Low German had a long closed <span class="la">ô</span> (<span class="la">schô, klôk, gôt</span>), Schaumburg has <em>au</em>; where it had <span class="la">û</span> (<span class="la">hûs, ût</span>), Schaumburg has <em>ui</em>. Diphthongs of this kind are typical of the southern Low German dialects; the North kept long monophthongs. This is the most useful single key to reading Schaumburg texts.</p>
      `
    },
    {
      title: '2. Verbs: the plural in -et, the participle in e-',
      html: `
        <ul>
          <li><strong>Present plural -et</strong> for all persons: <em>de Müüse danzet</em>, <em>Heuhner legget</em>, <em>Buern hewwet</em>, <em>poar Lüe sittet</em>. The northern form is <em>-t</em> (<em>se danzt</em>), High German <em>-en</em>. This is the old unity plural (Middle Low German <span class="la">-et</span>, Old English <span class="la">-aþ</span>) in its fuller form.</li>
          <li><strong>Past participle with e-</strong>: <em>‚ebrocht</em> “gebracht”, <em>ewesen</em> “gewesen”, <em>estorben</em> “gestorben”, <em>ehoolen</em> “gehalten”. The prefix <em>ge-</em> survives as <em>e-</em>; northern Platt has no prefix at all (<em>bröcht, west, storven</em>).</li>
          <li><strong>Third person singular</strong> in <em>-t</em> as in German: <em>kennt, fallt, breckt, passet</em>; short forms are common: <em>het, hätt</em> “hat”, <em>tüht</em> “zieht”, <em>frett</em> “frisst”.</li>
          <li><strong>Modal verbs</strong>: <em>mott</em> “muss”, <em>well</em> “will”, <em>schall</em> “soll”, <em>kann</em>.</li>
        </ul>
      `
    },
    {
      title: '3. Pronouns and articles',
      html: `
        <div class="tablewrap"><table>
          <thead><tr><th>Schaumburg</th><th>High German</th><th>Note</th></tr></thead>
          <tbody>
            <tr><td>eck / ek</td><td>ich</td><td>northern <em>ik</em></td></tr>
            <tr><td>mi, di</td><td>mir/mich, dir/dich</td><td>one object case</td></tr>
            <tr><td>hei</td><td>er</td><td>northern <em>he</em></td></tr>
            <tr><td>en</td><td>ihn; ein(en)</td><td>context decides</td></tr>
            <tr><td>sick, sik</td><td>sich</td><td></td></tr>
            <tr><td>üsch</td><td>uns</td><td>northern <em>uns</em></td></tr>
            <tr><td>de, dat</td><td>der/die, das</td><td>also as relative and demonstrative</td></tr>
          </tbody>
        </table></div>
        <p>As in all modern Platt, dative and accusative have merged into one object form: <em>arger di öber di sülben</em> “ärgere dich über dich selbst”, <em>dou fällt mi wat bie</em> “da fällt mir etwas ein”. <em>de</em> can mean “der”, “die”, and also “der(jenige), welcher”: <em>Weene de Schauh passet, de tüht en sick an</em> “wem der Schuh passt, der zieht ihn sich an”.</p>
      `
    },
    {
      title: '4. Reading strategies',
      html: `
        <ul>
          <li><strong>Read aloud.</strong> Many words become clear only when heard: <em>Neesen</em> “Nase”, <em>Rüjjen</em> “Rücken”, <em>Kiel</em> “Keil”.</li>
          <li><strong>Undo the consonant shift.</strong> Platt has no High German shift (Middle Low German Lecture I): <em>Katte</em> “Katze”, <em>Kloss</em> “Klotz”, <em>slapen / schlaapen</em> “schlafen”, <em>maken</em> “machen”.</li>
          <li><strong>Turn diphthongs back</strong>: <em>au</em> → u or o, <em>ui</em> → au, <em>oa</em> → a.</li>
          <li><strong>Expect missing letters</strong> marked by apostrophes: <em>up’n</em> “auf den”, <em>wenn’t</em> “wenn es”, <em>in’r</em> “in der”.</li>
          <li><strong>Watch for false friends</strong>: <em>frett</em> is neutral in Platt (“isst”), not only animal “frisst”; <em>bie</em> “bei”; <em>inne</em> “drinnen”.</li>
        </ul>
      `
    }
  ],

  vocab: [
    { id: 'katte', head: 'Katte', la: 'Katte, pl. Katten', pos: 'noun', en: 'cat', de: 'Katze', note: 'No shift tt → tz.' },
    { id: 'muus', head: 'Muus', la: 'Muus, pl. Müüse', pos: 'noun', en: 'mouse', de: 'Maus', note: 'Plural with umlaut, as in German.' },
    { id: 'buer', head: 'Buer', la: 'Buer, pl. Buern', pos: 'noun', en: 'farmer, peasant', de: 'Bauer', note: 'Long u, no diphthong in this word in the texts.' },
    { id: 'minsche', head: 'Minsche', la: 'Minsche, pl. Minschen', pos: 'noun', en: 'person, human being', de: 'Mensch', note: 'Middle Low German minsche.' },
    { id: 'schauh', head: 'Schauh', la: 'Schauh', pos: 'noun', en: 'shoe', de: 'Schuh', note: 'Schaumburg au; northern Schoh.' },
    { id: 'heuhn', head: 'Heuhn', la: 'Heuhn, pl. Heuhner', pos: 'noun', en: 'hen, chicken', de: 'Huhn', note: 'Northern Höhn, pl. Höhner.' },
    { id: 'bedde', head: 'Bedde', la: 'Bedde', pos: 'noun', en: 'bed', de: 'Bett', note: 'Final -e kept here; northern Bett, Bedd.' },
    { id: 'disch', head: 'Disch', la: 'Disch, dat. Dische', pos: 'noun', en: 'table', de: 'Tisch', note: 'Initial d, as in Middle Low German disch.' },
    { id: 'huis', head: 'Huis', la: 'Huis', pos: 'noun', en: 'house', de: 'Haus', note: 'Schaumburg ui; northern Huus.' },
    { id: 'danzen', head: 'danzen', la: 'danzen; pl. danzet', pos: 'verb', en: 'dance', de: 'tanzen', note: 'Initial d, no shift.' },
    { id: 'kennen', head: 'kennen', la: 'kennen; hei kennt', pos: 'verb', en: 'know (be acquainted with)', de: 'kennen' },
    { id: 'fengen', head: 'fengen', la: 'fengen', pos: 'verb', en: 'catch', de: 'fangen', note: 'Spelt with e in this proverb; other texts have fangen.' },
    { id: 'schlaapen', head: 'schlaapen', la: 'schlaapen (north slapen)', pos: 'verb', en: 'sleep', de: 'schlafen', note: 'sch before l under High German influence; no p → f shift.' },
    { id: 'verkoopen', head: 'verkoopen', la: 'verkoopen; verkofft', pos: 'verb', en: 'sell', de: 'verkaufen' },
    { id: 'moeten', head: 'mott', la: 'hei mott; se möt(et)', pos: 'verb, modal', en: 'must', de: 'muss, müssen' },
    { id: 'hebben', head: 'hebben', la: 'hei het, hätt; se hewwet', pos: 'verb', en: 'have', de: 'haben', note: 'ww in hewwet: a w- or b-sound between vowels.' },
    { id: 'klauk', head: 'klauk', la: 'klauk, klauke', pos: 'adjective', en: 'clever, wise', de: 'klug', note: 'Northern klook. Naklauk: wise after the event.' },
    { id: 'nich', head: 'nich', la: 'nich', pos: 'adverb', en: 'not', de: 'nicht', note: 'Throughout Low German.' }
  ],

  grammarCards: [
    { id: 'nds1-ui', front: 'Huis, uit, Tuin', back: 'Haus, aus, Zaun: Schaumburg ui for MLG û (north Huus, ut)' },
    { id: 'nds1-au', front: 'Schauh, klauk, sau, tau', back: 'Schuh, klug, so, zu: Schaumburg au for MLG ô (north Schoh, klook)' },
    { id: 'nds1-oa', front: 'Oabend, Doag', back: 'Abend, Tag: oa for long a' },
    { id: 'nds1-j', front: 'jaut, jrowwen, Jeschichten', back: 'g written j: gut, groben, Geschichten' },
    { id: 'nds1-et', front: 'de Müüse danzet, Heuhner legget, Buern hewwet', back: 'Plural -et for all persons (north -t)' },
    { id: 'nds1-e', front: 'ebrocht, ewesen, estorben', back: 'Past participle with e- (from ge-); north without prefix' },
    { id: 'nds1-eck', front: 'eck, hei', back: 'ich, er (north ik, he)' },
    { id: 'nds1-mi', front: 'mi, di', back: 'one object form: mir/mich, dir/dich' },
    { id: 'nds1-de', front: 'Weene de Schauh passet, de tüht en sick an', back: 'Wem der Schuh passt, der zieht ihn sich an' },
    { id: 'nds1-buer', front: 'Wat de Buer nich kennt, dat frett hei nich', back: 'Was der Bauer nicht kennt, das isst er nicht' },
    { id: 'nds1-katte', front: 'Wenn de Katte nich inne is, danzet de Müüse up’n Dische', back: 'Wenn die Katze nicht zu Hause ist, tanzen die Mäuse auf dem Tisch' },
    { id: 'nds1-naklauk', front: 'Naklauk is en jeder', back: 'Hinterher ist jeder klug' },
    { id: 'nds1-shift', front: 'Katte, Kloss, maken', back: 'No High German consonant shift: Katze, Klotz, machen' },
    { id: 'nds1-apos', front: 'up’n, wenn’t, in’r', back: 'auf den, wenn es, in der: apostrophe for missing letters' }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: '<em>Huis</em> means:', options: ['Haus', 'heiß', 'Hose', 'hier'], answer: 0, explain: 'Schaumburg ui = northern uu.' },
    { id: 'e2', type: 'mc', prompt: '<em>Schauh</em> means:', options: ['Schuh', 'schau!', 'Schau', 'Schaum'], answer: 0, explain: 'au for MLG ô.' },
    { id: 'e3', type: 'mc', prompt: '<em>de Buern hewwet</em>: the ending -et marks:', options: ['the plural', 'the past', 'a question', 'the infinitive'], answer: 0, explain: 'Plural -et for all persons.' },
    { id: 'e4', type: 'mc', prompt: '<em>ewesen</em> means:', options: ['gewesen', 'essen', 'Wesen', 'erwiesen'], answer: 0, explain: 'Participle prefix e- from ge-.' },
    { id: 'e5', type: 'mc', prompt: '<em>eck</em> means:', options: ['ich', 'Ecke', 'euch', 'auch'], answer: 0, explain: 'Northern ik.' },
    { id: 'e6', type: 'mc', prompt: '<em>Naklauk is en jeder</em> means:', options: ['Hinterher ist jeder klug', 'Jeder ist nach Klauk gegangen', 'Keiner ist klug', 'Jeder kommt nach'], answer: 0, explain: 'na + klauk.' },
    { id: 'e7', type: 'mc', prompt: 'Where is Schaumburg?', options: ['Between the Weser and the Steinhuder Meer, Lower Saxony', 'On the Baltic coast', 'In Westphalia near Münster', 'In East Frisia'], answer: 0, explain: 'Bückeburg, Stadthagen, Rinteln.' },
    { id: 'e8', type: 'mc', prompt: 'Why do Schaumburg texts spell the same word differently?', options: ['Writers spell Platt by ear, without one standard', 'They are mistakes', 'They are different words', 'Different centuries'], answer: 0, explain: 'ok / ouk, gauen / jaut.' },
    { id: 'e9', type: 'match', prompt: 'Match Schaumburg Platt to High German.', pairs: [
      ['Katte', 'Katze'], ['Müüse', 'Mäuse'], ['Neesen', 'Nase'], ['Rüjjen', 'Rücken'], ['sülmst', 'selbst']
    ] },
    { id: 'e10', type: 'match', prompt: 'Match Schaumburg to northern Platt.', pairs: [
      ['Huis', 'Huus'], ['Schauh', 'Schoh'], ['eck', 'ik'], ['hei', 'he'], ['klauk', 'klook']
    ] },
    { id: 'e11', type: 'gap', prompt: '<em>Wat de Buer nich kennt, dat frett ___ nich.</em>', hint: 'er', answers: ['hei'], full: 'Wat de Buer nich kennt, dat frett hei nich.', explain: 'Schaumburg hei.' },
    { id: 'e12', type: 'gap', prompt: '<em>Wenn de Katte nich inne is, danz___ de Müüse up’n Dische</em>', hint: 'plural ending', answers: ['et'], full: 'Wenn de Katte nich inne is, danzet de Müüse up’n Dische', explain: 'Plural -et.' },
    { id: 'e13', type: 'gap', prompt: '<em>Klauke Heuhner legget ok eis in de ___.</em>', hint: 'Nesseln', answers: ['nieteln'], full: 'Klauke Heuhner legget ok eis in de Nieteln.', explain: 'Auch kluge Hühner legen mal in die Nesseln.' },
    { id: 'e14', type: 'gap', prompt: '<em>Wer sein Bedde verkofft, ___ up den Stroh schlaapen.</em>', hint: 'muss', answers: ['mott'], full: 'Wer sein Bedde verkofft, mott up den Stroh schlaapen.', explain: 'Modal mott.' },
    { id: 'e15', type: 'paradigm', prompt: 'Give the Schaumburg form (as in the texts) and the High German word.', headers: ['Schaumburg', 'High German'], rows: [
      { label: 'house', answers: ['huis', 'haus'] },
      { label: 'shoe', answers: ['schauh', 'schuh'] },
      { label: 'hens', answers: ['heuhner', 'hühner|huehner'] },
      { label: 'evening', answers: ['oabend', 'abend'] }
    ] },
    { id: 'e16', type: 'paradigm', prompt: 'Schaumburg verb forms.', headers: ['Schaumburg', 'High German'], rows: [
      { label: 'they have', answers: ['se hewwet', 'sie haben'] },
      { label: 'they dance', answers: ['se danzet', 'sie tanzen'] },
      { label: 'been (past part.)', answers: ['ewesen', 'gewesen'] },
      { label: 'he must', answers: ['hei mott', 'er muss|er muß'] }
    ] },
    { id: 'e17', type: 'order', prompt: 'Put the German translation in order.', source: 'Aabends rööget sick de Fuulen.', tokens: ['Abends', 'regen sich', 'die', 'Faulen'], explain: 'rööget sick: regen sich.' },
    { id: 'e18', type: 'translate', dir: 'nds-de', source: 'De dümmsten Buern hewwet de dicksten Kartuffeln.', model: 'Die dümmsten Bauern haben die dicksten Kartoffeln.', accepted: ['die dümmsten bauern haben die dicksten kartoffeln', 'die duemmsten bauern haben die dicksten kartoffeln'] },
    { id: 'e19', type: 'translate', dir: 'nds-de', source: 'Wer de Katten nich futtern well, mott de Müüse sülmst fengen.', model: 'Wer die Katze nicht füttern will, muss die Mäuse selbst fangen.', accepted: ['wer die katze nicht füttern will muss die mäuse selbst fangen', 'wer die katzen nicht füttern will muss die mäuse selbst fangen', 'wer die katze nicht füttern will muss die mäuse selber fangen', 'wer die katzen nicht füttern will muss die mäuse selber fangen'] },
    { id: 'e20', type: 'translate', dir: 'de-nds', source: 'das Haus (Schaumburg spelling)', model: 'dat Huis', accepted: ['dat huis'] },
    { id: 'e21', type: 'translate', dir: 'de-nds', source: 'sie haben (Schaumburg)', model: 'se hewwet', accepted: ['se hewwet', 'se hebbet'] },
    { id: 'e22', type: 'mc', prompt: 'Which feature links Schaumburg Platt with the southern Low German dialects?', options: ['Diphthongs like ui and au', 'The word nich', 'No consonant shift', 'The article de'], answer: 0, explain: 'The others are shared by all Low German.' },
    { id: 'e23', type: 'mc', prompt: 'Where is a large collection of Schaumburg Platt publications kept?', options: ['The Landesarchiv at Bückeburg', 'The British Library', 'Hamburg University', 'The Ohnsorg-Theater'], answer: 0, explain: 'The former Staatsarchiv Bückeburg.' }
  ],

  reading: {
    title: 'Sprichwörter',
    note: 'Twelve proverbs in Schaumburg Platt, as printed in a collection of Schaumburg texts supplied by Nils (publication details to be added). The German renderings under “German translation” are those given in the collection; some are free. The English is this course’s. Tap any word.',
    text: 'Wenn de Katte nich inne is, danzet de Müüse up’n Dische\nWat de Buer nich kennt, dat frett hei nich.\nWer Pech hätt, fallt up den Rüjjen un breckt sick de Neesen\nMan mott den Minschen nich mihr Verstand afföllern, anse hei het.\nWeene de Schauh passet, de tüht en sick an.\nAabends rööget sick de Fuulen.\nNaklauk is en jeder.\nKlauke Heuhner legget ok eis in de Nieteln.\nWer sein Bedde verkofft, mott up den Stroh schlaapen.\nDe dümmsten Buern hewwet de dicksten Kartuffeln.\nUp en jrowwen Kloss jehürt en jrowwn Kiel.\nWer de Katten nich futtern well, mott de Müüse sülmst fengen.',
    translations: [
      { label: 'German translation (from the source)', text: 'Wenn die Katze nicht zu Hause ist, tanzen die Mäuse auf den Tischen / Was der Bauer nicht kennt, das isst er nicht. / Wer Pech hat, fällt auf den Rücken und bricht sich die Nase. / Man darf einem Menschen nicht mehr abverlangen, als er leisten kann. / Wem der Schuh passt, der zieht ihn sich an. / Abends regen sich die Faulen. / Hinterher weiß man alles besser. / Auch wer klug ist, macht mal einen Fehler. / Wer sein Bett verkauft, muss auf Stroh schlafen. / Die dümmsten Bauern haben die dicksten Kartoffeln. / Auf einen groben Klotz gehört ein grober Keil. / Wer die Katze nicht füttern will, muss die Mäuse selbst fangen.' },
      { label: 'English translation', text: 'When the cat is not at home, the mice dance on the table. / What the farmer does not know, he will not eat. / He who has bad luck falls on his back and breaks his nose. / One must not demand more sense of a person than he has. / Whom the shoe fits, let him put it on. / In the evening the lazy ones get busy. / Everyone is wise after the event. / Even clever hens sometimes lay in the nettles. / He who sells his bed must sleep on straw. / The stupidest farmers have the biggest potatoes. / A rough block needs a rough wedge. / He who will not feed the cats must catch the mice himself.' }
    ],
    notes: [
      { ref: 'Wenn de Katte nich inne is, danzet de Müüse up’n Dische', html: '<em>inne</em> “at home, inside”; <em>danzet</em>: plural -et; <em>up’n Dische</em> “auf dem Tisch”, with the old dative -e.' },
      { ref: 'Wat de Buer nich kennt, dat frett hei nich', html: '<em>frett</em> “isst”: in Platt <em>freten</em> is less coarse than High German <em>fressen</em>. <em>hei</em> “er”.' },
      { ref: 'Wer Pech hätt, fallt up den Rüjjen un breckt sick de Neesen', html: '<em>Rüjjen</em> “Rücken” (jj for a voiced g-sound); <em>breckt</em> “bricht”; <em>Neesen</em> “Nase”.' },
      { ref: 'Man mott den Minschen nich mihr Verstand afföllern, anse hei het', html: '<em>anse</em> “als” after a comparative; <em>afföllern</em> “abfordern” (from <em>föddern</em>, “fordern”).' },
      { ref: 'Weene de Schauh passet, de tüht en sick an', html: '<em>weene</em> “wem”; the second <em>de</em> is a demonstrative, “der”; <em>en</em> “ihn”.' },
      { ref: 'Klauke Heuhner legget ok eis in de Nieteln', html: '<em>eis</em> “einmal, mal”; <em>Nieteln</em> “Nesseln”: a clever hen still lays her egg where no one can collect it.' },
      { ref: 'Wer sein Bedde verkofft, mott up den Stroh schlaapen', html: '<em>sein</em> (instead of Platt <em>sien</em>) and <em>schlaapen</em> with sch show High German influence on the written form.' },
      { ref: 'Up en jrowwen Kloss jehürt en jrowwn Kiel', html: '<em>jrowwen</em> “groben”, <em>jehürt</em> “gehört”: g spoken and written as j. Note <em>jehürt</em> with <em>je-</em>, where other texts have <em>e-</em>.' }
    ],
    glosses: {
      'aabends': 'abends', 'afföllern': 'abfordern, abverlangen', 'an': 'an', 'anse': 'als (comparative)', 'bedde': 'Bett', 'breckt': 'bricht',
      'buer': 'Bauer', 'buern': 'Bauern', 'danzet': 'tanzen (pl. -et)', 'dat': 'das', 'de': 'der, die (also: der, wer – Relativ)', 'den': 'den, dem',
      'dicksten': 'dicksten', 'dische': 'Tisch (dat.; up’n Dische: auf dem Tisch)', 'dümmsten': 'dümmsten', 'eis': 'einmal, mal', 'en': 'ein, einen; ihn (14)', 'fallt': 'fällt',
      'fengen': 'fangen', 'frett': 'frisst, isst', 'futtern': 'füttern', 'fuulen': 'die Faulen', 'hei': 'er', 'het': 'hat',
      'heuhner': 'Hühner', 'hewwet': 'haben (pl. -et)', 'hätt': 'hat', 'in': 'in', 'inne': 'drinnen, zu Hause', 'is': 'ist',
      'jeder': 'jeder', 'jehürt': 'gehört (g → j)', 'jrowwen': 'groben (g → j)', 'jrowwn': 'groben', 'kartuffeln': 'Kartoffeln', 'katte': 'Katze',
      'katten': 'Katzen; die Katze', 'kennt': 'kennt', 'kiel': 'Keil', 'klauke': 'kluge (au für o)', 'kloss': 'Klotz', 'legget': 'legen (pl. -et)',
      'man': 'man', 'mihr': 'mehr', 'minschen': 'Menschen (dat.)', 'mott': 'muss', 'müüse': 'Mäuse', 'n': '’n = den, dem (up’n: auf den/dem)',
      'naklauk': 'hinterher klug (na + klauk)', 'neesen': 'Nase', 'nich': 'nicht', 'nieteln': 'Nesseln (in de Nieteln: in die Nesseln)', 'ok': 'auch', 'passet': 'passt',
      'pech': 'Pech', 'rööget': 'regen (refl.; rööget sick: regen sich)', 'rüjjen': 'Rücken', 'schauh': 'Schuh (au für o)', 'schlaapen': 'schlafen', 'sein': 'sein (Hochdeutsch-Einfluss)',
      'sick': 'sich', 'stroh': 'Stroh', 'sülmst': 'selbst', 'tüht': 'zieht', 'un': 'und', 'up': 'auf',
      'verkofft': 'verkauft', 'verstand': 'Verstand', 'wat': 'was', 'weene': 'wem', 'well': 'will', 'wenn': 'wenn',
      'wer': 'wer'
    },
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What do the mice do when the cat is away?', options: ['Dance on the table', 'Sleep', 'Run away', 'Eat the cheese'], answer: 0, explain: 'danzet de Müüse up’n Dische.' },
      { id: 'r2', type: 'mc', prompt: 'Who has the biggest potatoes?', options: ['The stupidest farmers', 'The cleverest', 'The richest', 'The laziest'], answer: 0, explain: 'De dümmsten Buern.' },
      { id: 'r3', type: 'mc', prompt: 'What happens to someone who sells his bed?', options: ['He must sleep on straw', 'He gets rich', 'He sleeps outside', 'Nothing'], answer: 0, explain: 'mott up den Stroh schlaapen.' },
      { id: 'r4', type: 'mc', prompt: 'When do the lazy get busy?', options: ['In the evening', 'In the morning', 'On Sunday', 'Never'], answer: 0, explain: 'Aabends rööget sick de Fuulen.' }
    ]
  },

  test: {
    count: 10,
    vocabQuestions: 4,
    items: [
      { id: 't1', type: 'mc', prompt: '<em>Oabend</em> means:', options: ['Abend', 'Ober', 'Obend', 'oben'], answer: 0, explain: 'oa for long a.' },
      { id: 't2', type: 'mc', prompt: '<em>jaut</em> means:', options: ['gut', 'jagt', 'ja', 'Gaul'], answer: 0, explain: 'g → j, ô → au.' },
      { id: 't3', type: 'mc', prompt: 'Northern Platt for Schaumburg <em>hewwet</em> (sie haben):', options: ['hebbt', 'hewwen', 'habt', 'hett'], answer: 0, explain: 'Plural -t in the north.' },
      { id: 't4', type: 'mc', prompt: '<em>üsch</em> means:', options: ['uns', 'euch', 'ich', 'Esche'], answer: 0, explain: 'Northern uns.' },
      { id: 't5', type: 'gap', prompt: '<em>Man ___ den Minschen nich mihr Verstand afföllern</em>', hint: 'muss / darf', answers: ['mott'], full: 'Man mott den Minschen nich mihr Verstand afföllern', explain: 'Modal mott.' },
      { id: 't6', type: 'gap', prompt: '<em>Wat de Buer nich kennt, dat ___ hei nich.</em>', hint: 'isst', answers: ['frett'], full: 'Wat de Buer nich kennt, dat frett hei nich.', explain: 'freten.' },
      { id: 't7', type: 'translate', dir: 'nds-de', source: 'Naklauk is en jeder.', model: 'Hinterher ist jeder klug.', accepted: ['hinterher ist jeder klug', 'nachher ist jeder klug', 'hinterher weiß man alles besser', 'im nachhinein ist jeder klug', 'hinterher ist man immer klüger'] },
      { id: 't8', type: 'translate', dir: 'de-nds', source: 'der Schuh (Schaumburg spelling)', model: 'de Schauh', accepted: ['de schauh'] },
      { id: 't9', type: 'mc', prompt: 'Until when was Schaumburg-Lippe a state of its own?', options: ['1946', '1806', '1871', '1918'], answer: 0, explain: 'Then part of Lower Saxony.' },
      { id: 't10', type: 'mc', prompt: 'Which three dialect groups meet around Schaumburg?', options: ['East Westphalian, Eastphalian, Northern Low Saxon', 'Frisian, Danish, Dutch', 'Bavarian, Swabian, Alemannic', 'Mecklenburgish, Pomeranian, Prussian'], answer: 0, explain: 'West/south, east, north.' },
      { id: 't11', type: 'mc', prompt: '<em>up’n Dische</em> means:', options: ['auf dem Tisch', 'unter dem Tisch', 'ein Tisch', 'auf Tische'], answer: 0, explain: '’n = den/dem.' }
    ]
  },

  reference: [
    { title: 'Schaumburg, North, High German', headers: ['Schaumburg', 'North', 'High German'], rows: [['Huis', 'Huus', 'Haus'], ['Schauh', 'Schoh', 'Schuh'], ['klauk', 'klook', 'klug'], ['houch', 'hooch', 'hoch'], ['Oabend', 'Avend', 'Abend'], ['eck', 'ik', 'ich'], ['hei', 'he', 'er'], ['üsch', 'uns', 'uns']] },
    { title: 'Verb forms', headers: ['Schaumburg', 'North', 'High German'], rows: [['se hewwet', 'se hebbt', 'sie haben'], ['se danzet', 'se danzt', 'sie tanzen'], ['ewesen', 'west', 'gewesen'], ['‚ebrocht', 'bröcht', 'gebracht'], ['hei mott', 'he mutt', 'er muss']] }
  ]
});
