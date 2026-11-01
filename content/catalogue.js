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
    lectures: ['latin/lecture-01.js', 'latin/lecture-02.js', 'latin/lecture-03.js'],
    // the full first-year course: 40 lectures in the traditional order of topics
    planned: [
      'Second declension neuters; the verb sum; predicate adjectives',
      'Future and imperfect of the first and second conjugations; adjectives in -er',
      'The verb possum; the complementary infinitive in full',
      'The third declension',
      'The third conjugation: present and future',
      'Demonstratives: hic, ille, iste',
      'The fourth conjugation and third-conjugation verbs in -iō',
      'Personal pronouns ego, tū, is, ea, id; the demonstrative īdem',
      'The perfect active system; principal parts',
      'Reflexive pronouns and possessives; the intensive ipse',
      'Third-declension i-stems; ablatives of means, accompaniment and manner',
      'Numerals; the genitive of the whole; the ablative of time',
      'Third-declension adjectives',
      'The relative pronoun',
      'The present passive system; the ablative of agent',
      'The perfect passive system; interrogative pronouns',
      'The fourth declension; ablatives of place from which and of separation',
      'The passive of the third and fourth conjugations',
      'The fifth declension; the uses of the ablative summarised',
      'Participles',
      'The ablative absolute; the passive periphrastic; the dative of agent',
      'Infinitives; indirect statement',
      'Comparison of adjectives; the ablative of comparison',
      'Irregular comparison; comparison of adverbs',
      'The present subjunctive; jussive and purpose clauses',
      'The imperfect subjunctive; result clauses',
      'Perfect and pluperfect subjunctive; indirect questions; sequence of tenses',
      'Cum clauses; the verb ferō',
      'Formation of adverbs; volō, nōlō, mālō; proviso clauses',
      'Conditional sentences',
      'Deponent verbs; the ablative with certain deponents',
      'The dative with adjectives, special verbs and compounds',
      'Jussive noun clauses; the verb fīō',
      'The verb eō; constructions of place and time',
      'Relative clauses of characteristic; the dative of reference; supines',
      'Gerund and gerundive',
      'Questions with -ne, num, nōnne; fear clauses; description by genitive and ablative'
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
  }
  // French will go here, e.g.:
  // { id: 'french', name: 'French', native: 'Français', langTag: 'fr', tts: 'fr-FR',
  //   keyboard: ['é','è','ê','à','â','ç','ô','î','ù','û','ë','ï','œ'], macrons: false,
  //   lectures: ['french/lecture-01.js'], planned: [] }
]);

// Shared reference pages (date converter for all courses; Hanse timeline and map)
Viator.setShared(['calendar.js', 'mnd/pages.js']);
