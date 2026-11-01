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
  say so.
- `mhd`: Middle High German, for reading courtly literature and southern/central
  German documents. Normalised spelling of the editions (Lachmann; Lexer, BMZ)
  with circumflex for long vowels, æ œ iu for long umlauts, ë for open e where the
  grammar needs it, ʒ for the z-sibilant. German glosses (`reverseFrom: 'de'`).
  Explain through modern German: the course runs from MHG towards NHG
  (diphthongisation mîn hûs > mein Haus, monophthongisation guot > gut,
  lengthening in open syllables), and false friends (wîp, maget, arebeit, list,
  hôchzît, muot) are the main German-speaker trap; mark them in vocabulary notes.
  Say plainly that normalised MHG is a 19th-century editorial spelling; readings
  give the normalised `text` and a `diplomatic` manuscript version where we have
  seen one. Cite literature the standard way: Walther by Lachmann page and line
  (L 39,11), Nibelungenlied by manuscript and stanza (B 1,1), Parzival by
  Lachmann section and line (Pz. 116,5). Pronunciation is better established
  than for MLG (rhymes), but still say what is reconstruction.
- Planned later: Old English (`oe`: normalised spelling with macrons, þ ð æ ƿ,
  English glosses, German grammar parallels, since OE cases and strong verbs are
  closer to German than to modern English) and Middle English (`me`: unnormalised,
  dialect-varied spelling; English glosses; readings by manuscript or edition).
  A shared page comparing sound correspondences across the Germanic courses would
  fit in `content/` as a reference page for all of them.
- Reference pages are registered with `Viator.addPage(courses, page)` in files
  listed by `Viator.setShared([...])` in `content/catalogue.js`. Kinds: `dates`
  (content/calendar.js, shared by all courses), `timeline` and `map`
  (content/mnd/pages.js; map coastline from Natural Earth, public domain;
  content/mhd/pages.js has the MHG timeline).
- Authentic source text: quote only what you have actually seen in an edition or
  scan, cite volume, number and page, mark corrections in [ ], and add it to
  CONTENT-CHECKS.md. Never present a reconstruction from memory as a quotation.
- Pictures: freely licensed files from Wikimedia Commons only, inserted as
  `<figure class="fig"><img class="fig-img" src="…960px…" data-fallbacks="…500px…|original">`
  with a caption, the licence and a link to the Commons file page. Build the
  upload.wikimedia.org addresses from the exact file name (MD5 path scheme);
  prefer public-domain reproductions of old 2D works. List new pictures in
  CONTENT-CHECKS.md so Nils can confirm they show what the caption says.
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
