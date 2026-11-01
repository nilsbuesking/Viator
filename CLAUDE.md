# Viātor: notes for Claude Code

The owner, Nils, does not program. Explain changes in plain English, test them
yourself, and keep the app working on an iPhone (Safari, home-screen web app).
British English in all text.

## Architecture rules
- `app.js` / `app.css` are the engine and must stay language-independent.
  Nothing about Latin or French belongs there; it goes in `content/`.
- A lecture is one file `content/<course>/lecture-NN.js` calling
  `Viator.addLecture(courseId, {...})`. Copy the structure of
  `content/latin/lecture-01.js` exactly. Register new files in
  `content/catalogue.js` and in `CORE` in `sw.js`.
- Exercise types the engine understands: `mc`, `gap`, `paradigm`, `match`,
  `order`, `translate` (`dir: 'la-en'` checked against English variants with
  articles ignored; `dir: 'en-la'` checked word-order-free). Adding a new type
  means engine work.
- Progress is versioned (`FORMAT` in app.js). Any change to what is stored must
  bump `FORMAT` and extend `migrate()` so old backups still restore.
- No build step, no frameworks, no external services. Only Google Fonts loads
  from outside.

## Content rules
- Original text only. Follow the conventional order of a first-year Latin course
  (similar in sequence to Wheelock's Latin) but never reproduce its wording,
  vocabulary lists or sentences.
- Authentic Latin quotations: public-domain authors only, with exact reference,
  and flag them in CONTENT-CHECKS.md for checking against a critical text.
- Classical pronunciation; macrons on all long vowels; stress line for every
  vocabulary item.
- Nils is a German native speaker. Compare sounds with German first (English
  vowels mislead after the Great Vowel Shift) and point out German-speaker
  traps; use German grammar parallels where they are accurate.
- Depth: match Lecture I. Each lecture has an introduction, `background`
  blocks (history, culture, how the language works), grammar sections that
  explain why as well as what, reading `notes`, and a source quotation where
  one fits. Qualify claims to their evidence; note where scholars disagree.
- After writing a lecture, list every form you are less than certain of
  (gender, principal parts, vowel length, stress, accepted translations) in
  CONTENT-CHECKS.md. Nils checks these against Wheelock's, Lewis & Short or the
  Oxford Latin Dictionary (French: Le Robert or Larousse).

## Courses
- `latin`: Classical Latin, macrons (`lengthMark: 'macron'`), English glosses.
- `mnd`: Middle Low German for reading Hanseatic documents. Normalised spelling
  as in the dictionaries (Lübben/Walther, Lasch/Borchling) with circumflex for
  long vowels (`lengthMark: 'circumflex'`). Vocabulary carries `de` (German)
  as well as `en`; flashcards and test glosses use German (`reverseFrom: 'de'`).
  Explain everything through German, especially the absent High German
  consonant shift and the vowel correspondences. Readings give a normalised
  `text` and an as-written `diplomatic` version; add glosses for both spellings.
  Constructed texts must be labelled as constructed. Pronunciation is uncertain;
  say so. Middle High German is planned as a separate course.
- Reference pages are registered with `Viator.addPage(courses, page)` in files
  listed by `Viator.setShared([...])` in `content/catalogue.js`. Kinds: `dates`
  (content/calendar.js, shared by all courses), `timeline` and `map`
  (content/mnd/pages.js; map coastline from Natural Earth, public domain).
- Authentic source text: quote only what you have actually seen in an edition or
  scan, cite volume, number and page, mark corrections in [ ], and add it to
  CONTENT-CHECKS.md. Never present a reconstruction from memory as a quotation.
- Course options live in `content/catalogue.js` (spelling variants, keyboard,
  labels). Translation exercises use `dir`: `xx-en`, `xx-de`, or into the
  course language (e.g. `de-mnd`, `en-la`).

## Suggested model use
- Engine and storage changes, and content review passes: the most capable model, high effort.
- New lectures from the existing template, small features, bug fixes: the standard model, medium effort.
- Never use the smallest model for Latin or French content.

## Testing after changes
Run the browser tests in `tests/` (see tests/README.md); add to them when you add
a lecture or feature. They cover every exercise, word glosses in readings, the
date arithmetic, map taps, and a backup save and restore. Check there is no
horizontal scrolling. After pushing, check that the GitHub Pages deployment
succeeded (Actions runs); a push made while a deployment is still running can fail.
