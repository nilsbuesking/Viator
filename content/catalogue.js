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
    lectures: ['latin/lecture-01.js'],
    planned: [
      'The second conjugation; the imperative',
      'Second declension masculines; adjectives in -us, -a, -um',
      'Second declension neuters; the verb sum',
      'Future and imperfect of the first two conjugations',
      'The third declension'
    ]
  }
  // French will go here, e.g.:
  // { id: 'french', name: 'French', native: 'Français', langTag: 'fr', tts: 'fr-FR',
  //   keyboard: ['é','è','ê','à','â','ç','ô','î','ù','û','ë','ï','œ'], macrons: false,
  //   lectures: ['french/lecture-01.js'], planned: [] }
]);
