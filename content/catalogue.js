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
    lectures: ['latin/lecture-01.js'],
    planned: [
      'The second conjugation; the imperative',
      'Second declension masculines; adjectives in -us, -a, -um',
      'Second declension neuters; the verb sum',
      'Future and imperfect of the first two conjugations',
      'The third declension'
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
    lectures: ['mnd/lecture-01.js'],
    planned: [
      'Strong verbs; the past tense in narratives and letters',
      'Nouns and adjectives: cases and plurals as documents use them',
      'Charters in detail: formulae, seals, dating by the church calendar',
      'Letters and recesses: reading a Hanseatic edition',
      'Palaeography: scripts and abbreviations'
    ]
  }
  // French will go here, e.g.:
  // { id: 'french', name: 'French', native: 'Français', langTag: 'fr', tts: 'fr-FR',
  //   keyboard: ['é','è','ê','à','â','ç','ô','î','ù','û','ë','ï','œ'], macrons: false,
  //   lectures: ['french/lecture-01.js'], planned: [] }
]);
