/*
 * Course catalogue. To add a lecture: write content/<course>/lecture-NN.js
 * and add its file name to `lectures` below. To add a language: add a new
 * course object and a content folder. The engine (app.js) needs no change.
 */
Viator.setCatalogue([
  {
    id: 'latin',
    name: 'Latin',
    native: 'Lingua Latīna',
    langTag: 'la',
    tts: null,                         // no reliable Latin voice on iOS; see README
    keyboard: ['ā', 'ē', 'ī', 'ō', 'ū', 'ȳ'],
    macrons: true,
    lengthMark: 'macron', lengthMarkName: 'macrons', lengthMarkExample: 'ā ē ī ō ū',
    lectureWord: 'Lectiō',
    lectures: ['latin/lecture-01.js', 'latin/lecture-02.js', 'latin/lecture-03.js', 'latin/lecture-04.js', 'latin/lecture-05.js', 'latin/lecture-06.js', 'latin/lecture-07.js', 'latin/lecture-08.js', 'latin/lecture-09.js', 'latin/lecture-10.js', 'latin/lecture-11.js', 'latin/lecture-12.js', 'latin/lecture-13.js', 'latin/lecture-14.js', 'latin/lecture-15.js', 'latin/lecture-16.js', 'latin/lecture-17.js', 'latin/lecture-18.js', 'latin/lecture-19.js', 'latin/lecture-20.js', 'latin/lecture-21.js', 'latin/lecture-22.js', 'latin/lecture-23.js', 'latin/lecture-24.js', 'latin/lecture-25.js', 'latin/lecture-26.js', 'latin/lecture-27.js', 'latin/lecture-28.js', 'latin/lecture-29.js', 'latin/lecture-30.js', 'latin/lecture-31.js', 'latin/lecture-32.js', 'latin/lecture-33.js', 'latin/lecture-34.js', 'latin/lecture-35.js', 'latin/lecture-36.js', 'latin/lecture-37.js', 'latin/lecture-38.js', 'latin/lecture-39.js', 'latin/lecture-40.js', 'latin/lecture-41.js'],
    // the full first-year course: 41 lectures in the traditional order of topics (complete)
    planned: [
    ]
  },
  {
    id: 'mhd',
    name: 'Middle High German',
    native: 'Mittelhochdeutsch',
    langTag: 'gmh',
    tts: null,                         // no voice exists; a modern German voice would mislead
    // normalised spelling of the editions: circumflex for long vowels, æ œ for long umlauts, ë for open e, ʒ for the z-sibilant
    keyboard: ['â', 'ê', 'î', 'ô', 'û', 'æ', 'œ', 'ä', 'ö', 'ü', 'ë', 'ʒ'],
    macrons: true,
    lengthMark: 'circumflex', lengthMarkName: 'length marks', lengthMarkExample: 'â ê î ô û',
    lectureWord: 'Lecture',
    reverseFrom: 'de',                 // glosses and reverse flashcards use German
    // spelling variants treated as equal: edition symbols and the commonest manuscript habits
    spelling: [['æ', 'ae'], ['œ', 'oe'], ['ë', 'e'], ['ʒ', 'z'], ['ck', 'k'], ['c', 'k'], ['y', 'i'], ['j', 'i'], ['v', 'u'],
               ['([bdfgklmnprst])\\1', '$1']],
    lectures: ['mhd/lecture-01.js', 'mhd/lecture-02.js', 'mhd/lecture-03.js', 'mhd/lecture-04.js', 'mhd/lecture-05.js', 'mhd/special-palaestinalied.js', 'mhd/special-german-1-ohg.js', 'mhd/special-german-2-saxon.js', 'mhd/special-german-3-mhg.js', 'mhd/special-german-4-enhg.js', 'mhd/special-german-5-standard.js', 'mhd/special-german-6-platt.js'],
    planned: [
      'Preterite-present verbs; the subjunctive',
      'Negation, word order and contracted forms (ichn, deist, dêswâr)',
      'Courtly words and false friends: êre, triuwe, mâze, minne, hôher muot',
      'Verse: rhyme, metre and the Nibelungen stanza',
      'Manuscripts and editions: from the Codex Manesse to Lachmann',
      'Prose and charters: reading German-language documents of the 13th and 14th centuries'
    ]
  },
  {
    id: 'oe',
    name: 'Old English',
    native: 'Englisc',
    langTag: 'ang',
    tts: null,                         // no voice exists; a modern English voice would mislead badly
    // normalised spelling of the readers (Sweet, Mitchell & Robinson): macrons for long vowels
    keyboard: ['þ', 'ð', 'æ', 'ƿ', 'ā', 'ǣ', 'ē', 'ī', 'ō', 'ū', 'ȳ'],
    macrons: true,
    lengthMark: 'macron', lengthMarkName: 'macrons', lengthMarkExample: 'ā ǣ ē ī ō ū ȳ',
    lectureWord: 'Lecture',
    // þ and ð were used interchangeably by scribes; ƿ (wynn) is w; dotted ċ ġ of some editions are plain c g
    spelling: [['ð', 'þ'], ['th', 'þ'], ['ƿ', 'w'], ['ċ', 'c'], ['ġ', 'g'], ['ae', 'æ']],
    lectures: ['oe/lecture-01.js', 'oe/lecture-02.js', 'oe/lecture-03.js', 'oe/lecture-04.js', 'oe/lecture-05.js', 'oe/lecture-06.js', 'oe/lecture-07.js', 'oe/lecture-08.js', 'oe/lecture-09.js', 'oe/lecture-10.js', 'oe/lecture-11.js', 'oe/lecture-12.js', 'oe/special-maldon.js'],
    planned: [
    ]
  },
  {
    id: 'me',
    name: 'Middle English',
    native: 'Englisch',
    langTag: 'enm',
    tts: null,                         // no voice exists; a modern English voice would mislead
    // editions print the manuscript spelling: no length marks; thorn, yogh and (rarely) eth survive
    keyboard: ['þ', 'ȝ', 'ð', 'æ'],
    macrons: false,
    lengthMark: 'none', lengthMarkName: 'length marks', lengthMarkExample: '',
    lectureWord: 'Lecture',
    // spelling variants treated as equal when checking answers: thorn/eth = th, yogh = gh or y,
    // u/v and i/j/y interchange, doubled letters
    spelling: [['þ', 'th'], ['ð', 'th'], ['ȝ', 'gh'], ['v', 'u'], ['j', 'i'], ['y', 'i'], ['ck', 'k'], ['([a-z])\\1', '$1']],
    lectures: ['me/lecture-01.js', 'me/lecture-02.js', 'me/lecture-03.js', 'me/lecture-04.js', 'me/lecture-05.js', 'me/lecture-06.js', 'me/lecture-07.js', 'me/lecture-08.js', 'me/lecture-09.js', 'me/lecture-10.js', 'me/lecture-11.js', 'me/lecture-12.js'],
    planned: [
    ]
  }
  // French will go here, e.g.:
  // { id: 'french', name: 'French', native: 'Français', langTag: 'fr', tts: 'fr-FR',
  //   keyboard: ['é','è','ê','à','â','ç','ô','î','ù','û','ë','ï','œ'], macrons: false,
  //   lectures: ['french/lecture-01.js'], planned: [] }
]);

// Shared reference pages (date converter for all courses; Hanse timeline and map; MHG timeline)
Viator.setShared(['calendar.js', 'mhd/pages.js', 'oe/pages.js', 'me/pages.js']);
