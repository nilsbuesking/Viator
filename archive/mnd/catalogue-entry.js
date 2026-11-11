/* Middle Low German course settings, taken out of content/catalogue.js on 2026-11-11.
   Paste back into the COURSES list to restore (see archive/middle-low-german-on-hold.md). */
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
    lectures: ['mnd/lecture-01.js', 'mnd/lecture-02.js'],   // the special lecture on Plattdeutsch now belongs to mhd (special-german-6-platt.js)
    planned: [
      'Strong verbs; the past tense in narratives and letters',
      'Nouns and adjectives: cases and plurals as documents use them',
      'Charters in detail: formulae, seals, dating by the church calendar',
      'Letters and recesses: reading a Hanseatic edition'
    ]
  },
