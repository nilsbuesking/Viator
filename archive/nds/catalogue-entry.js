// Catalogue entry removed on 2026-11-09 (course on hold). To restore, paste the object back into the
// array in content/catalogue.js after the 'me' course, with a comma after the preceding entry.
  {
    id: 'nds',
    name: 'Low German (Platt)',
    native: 'Plattdüütsch · Schaumburg',
    langTag: 'nds',
    tts: null,                         // no Low German voice; a High German voice would mislead
    // modern Platt: no length marks; texts keep their own spelling; course spelling after Saß
    keyboard: ['ä', 'ö', 'ü', 'ß', '’'],
    macrons: false,
    lengthMark: 'none', lengthMarkName: 'length marks', lengthMarkExample: '',
    lectureWord: 'Lecture',
    reverseFrom: 'de',                 // glosses and reverse flashcards use German
    // spelling variants treated as equal when checking answers: doubled letters, ck/k, ß/ss, apostrophes
    spelling: [['ck', 'k'], ['ß', 'ss'], ['[’\u2019\']', ''], ['ie', 'i'], ['([a-zäöü])\\1', '$1']],
    lectures: ['nds/lecture-01.js'],
    planned: [
      'Pronouns, articles and the one object case; reading: Wenker sentences from Schaumburg and the Nienburg area',
      'Verbs: the plural in -et, past participles in e-, the modal verbs',
      'Telling a story: the past tense; reading: a Schaumburg anecdote',
      'Words that differ from High German: false friends and everyday vocabulary',
      'Nouns, plurals and the old dative -e',
      'Reading a fairy tale: Von dem Fischer un siner Fru (Grimm)',
      'Reading poetry: Klaus Groth’s Quickborn',
      'Reading prose: Fritz Reuter',
      'The dialects of Low German: an overview from East Frisia to Mecklenburg'
    ]
  }
