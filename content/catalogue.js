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
    id: 'mnd',
    name: 'Middle Low German',
    native: 'Mittelniederdeutsch',
    langTag: 'gml',
    tts: null,                         // no voice exists; a modern German voice would mislead
    keyboard: ['â', 'ê', 'î', 'ô', 'û', 'ä', 'ö', 'ü'],
    macrons: true,
    lengthMark: 'circumflex', lengthMarkName: 'length marks', lengthMarkExample: 'â ê î ô û',
    lectureWord: 'Lecture',
    reverseFrom: 'de',                 // glosses and reverse flashcards use German
    // spelling variants treated as equal when checking answers and looking up words
    spelling: [['ck', 'k'], ['c', 'k'], ['gh', 'g'], ['th', 't'], ['dt', 't'], ['y', 'i'], ['j', 'i'], ['v', 'u'],
               ['ü', 'u'], ['ö', 'o'], ['ä', 'a'], ['([bdfgklmnprst])\\1', '$1']],
    lectures: ['mnd/lecture-01.js', 'mnd/lecture-02.js'],
    planned: [
      'Strong verbs; the past tense in narratives and letters',
      'Nouns and adjectives: cases and plurals as documents use them',
      'Charters in detail: formulae, seals, dating by the church calendar',
      'Letters and recesses: reading a Hanseatic edition'
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
    lectures: ['mhd/lecture-01.js', 'mhd/lecture-02.js', 'mhd/special-palaestinalied.js'],
    planned: [
      'Nouns: strong and weak declensions; the uses of the cases',
      'Articles, pronouns and the strong and weak adjective',
      'Weak verbs, Rückumlaut, and the irregular verbs hân, lân, gân, stân, tuon, wellen',
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
    lectures: ['oe/lecture-01.js', 'oe/lecture-02.js', 'oe/lecture-03.js', 'oe/lecture-04.js', 'oe/special-maldon.js'],
    planned: [
      'Strong verbs and the ablaut series; reading: Grendel',
      'Adjectives, strong and weak; word order',
      'Weak verbs and preterite-presents; reading: King Alfred’s preface',
      'Old English verse: alliteration, half-lines, kennings and formulas',
      'The subjunctive and subordinate clauses; reading: Beowulf arrives at Heorot',
      'Reading Beowulf: Grendel’s mere',
      'Reading Beowulf: the dragon and the funeral',
      'Manuscripts and editions: from the Nowell Codex to Klaeber'
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
    lectures: [],
    planned: [
      'Chaucer’s English: spelling, sounds, thorn and yogh; reading: General Prologue 1–18',
      'Nouns and pronouns (she, they); from Old to Middle English; reading: the pilgrims gather',
      'Verbs: present and past, -eth and -en, strong and weak; reading: the Knight',
      'Pronunciation and metre: final -e and the pentameter; reading: the Prioress',
      'French and Norse in English: the layers of the vocabulary; reading: the Wife of Bath',
      'Negation, impersonal verbs and the subjunctive; reading: the Pardoner',
      'Reading a tale: the Pardoner’s Tale',
      'Reading a prologue: the Wife of Bath',
      'Reading a fable: the Nun’s Priest’s Tale',
      'Chaucer beyond the Tales: Troilus and Criseyde, the dream poems',
      'Chaucer’s world: London, the court, the war and his contemporaries Gower and Langland',
      'Manuscripts and print: Hengwrt, Ellesmere, Caxton, and the road to modern English'
    ]
  }
  // French will go here, e.g.:
  // { id: 'french', name: 'French', native: 'Français', langTag: 'fr', tts: 'fr-FR',
  //   keyboard: ['é','è','ê','à','â','ç','ô','î','ù','û','ë','ï','œ'], macrons: false,
  //   lectures: ['french/lecture-01.js'], planned: [] }
]);

// Shared reference pages (date converter for all courses; Hanse timeline and map; MHG timeline)
Viator.setShared(['calendar.js', 'mnd/pages.js', 'mhd/pages.js', 'oe/pages.js', 'me/pages.js']);
