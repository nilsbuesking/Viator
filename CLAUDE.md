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
- Special lectures (one text or topic in depth, outside the sequence) set
  `special: true` and a number above 100; they show ✦, sit in their own list and
  are skipped by “Continue”. File name `special-<topic>.js`.
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
- `mnd` (Middle Low German): ON HOLD since 2026-11-11 and removed from the app. Lectures I–II, the Hanse
  timeline and map, their tests and the course settings are in `archive/mnd/`; the summary and the restore steps are
  in `archive/middle-low-german-on-hold.md`. The special lecture "From Middle Low German to Plattdeutsch" moved to the
  `mhd` course as part 6 of the series below (`content/mhd/special-german-6-platt.js`, id `mhd-s2`). Still-open checks stay in CONTENT-CHECKS.md.
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
  Bonus series "German through time" (special lectures 111–116, files `content/mhd/special-german-1-ohg.js` to
  `special-german-6-platt.js`, ids mhd-s3 to mhd-s7 and mhd-s2): how German was used and why it changed, from Old
  High German to the standard language, plus Old Saxon/Middle Low German and Plattdeutsch. Light on sound changes,
  no source readings (Nils's choice); each intro ends with the series line, so keep it in step if parts are added.
- `oe`: Old English, prose and poetry with the focus on Beowulf; special lecture
  on The Battle of Maldon. Normalised spelling of the readers (Sweet, Mitchell &
  Robinson) with macrons (`lengthMark: 'macron'`), þ ð æ ƿ; þ = ð and ƿ = w when
  checking answers. English glosses; explanations and vocabulary notes compare
  German throughout (cases, genders, strong/weak adjectives, verb-second, sounds:
  c = tsch, sc = sch, g = j before front vowels; no Great Vowel Shift yet).
  Cite Beowulf by line (Beo 1–11), Maldon by line, the Chronicle by year and
  manuscript. Poetry texts come from Nils (public-domain editions, e.g. Klaeber
  1922, Sweet's Reader); say which edition, and mark macrons we add as editorial.
- `me`: Middle English, with the focus on Chaucer (Canterbury Tales first). Editions keep the manuscript spelling: no length marks
  (`lengthMark: 'none'`), þ ȝ ð kept; answers treat þ/ð = th, ȝ = gh, u/v, i/j/y
  and doubled letters as equal. English glosses with German comparisons where
  they help (Middle Dutch and Low German loans, cases lost). Say which dialect a
  text is in. Texts come from Nils from public-domain editions (e.g. Skeat's
  Chaucer, 1894); long verbatim extracts from modern editions can trigger the
  content filter, so ask for the text rather than assembling it from websites.
  A shared page comparing sound correspondences across the Germanic courses would
  fit in `content/` as a reference page for all of them.
- `nds` (modern Low German, Schaumburg focus): ON HOLD since 2026-11-09 and removed from the app.
  Everything needed to restart it is in `archive/nds/` (see `archive/plattdeutsch-on-hold.md`).
  The special lecture on Middle Low German and Plattdeutsch now belongs to the `mhd` course (see `mnd` above).
- Reference pages are registered with `Viator.addPage(courses, page)` in files
  listed by `Viator.setShared([...])` in `content/catalogue.js`. Kinds: `dates`
  (content/calendar.js, shared by all courses), `timeline` and `map`
  (the Hanse timeline and map, with a Natural Earth coastline, are in `archive/mnd/pages.js` while that course is on hold;
  content/mhd/pages.js has the MHG timeline, content/oe/pages.js the OE one, content/me/pages.js the ME one).
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
  course language (e.g. `de-mhd`, `en-la`).

## Suggested model use
- Engine and storage changes, and content review passes: the most capable model, high effort.
- New lectures from the existing template, small features, bug fixes: the standard model, medium effort.
- Never use the smallest model for Latin or French content.

## Testing after changes
After any content change run `node tests/validate_content.js` (one second). Before
every push run `python3 tests/run_all.py` (all tests in parallel, pass/fail summary,
exit code 1 on failure; see tests/README.md). Add to the tests when you add a
lecture or feature. They cover every exercise, word glosses in readings, the date
arithmetic, map taps, backup save and restore, damaged progress, updates, offline
start, and no horizontal scrolling. Raise `VERSION` in `sw.js` and `BUILD` in
`app.js` with every push. After pushing, check that the GitHub Pages deployment
succeeded (Actions runs); a push made while a deployment is still running can fail.
