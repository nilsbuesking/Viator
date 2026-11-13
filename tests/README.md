# Tests

Run everything from the project folder:

    python3 tests/run_all.py            # all tests, four at a time (about 5–8 minutes)
    python3 tests/run_all.py mhd_       # only the tests whose file name contains "mhd_"

The runner starts a local server on port 8765 if none is running, runs the fast
content check first, then the browser tests in parallel, and prints one line per
test and a summary. It exits with code 1 if anything failed. The full output of
each test is in `/tmp/viator-test-logs/`.

A test **fails** if it crashes, prints a line starting `FAIL`, reports incorrect
answers (`not correct: [...]`) or page errors (`errors [...]`), or prints
`N (expect M)` with different numbers. Unglossed words in a reading are shown as
warnings (two known ones come from editorial marks inside a word in MHG
Lecture II and the Palästinalied).

## What there is

- `validate_content.js` (Node, about a second, no browser): every catalogue file
  exists, loads without errors and is in the offline list; every exercise and test
  item is complete and consistent; lecture and item ids are unique; Latin stress
  lines follow the stress rule; Beowulf reading titles give the right line numbers; every translation into
  the course language has an explanation.
  Run it on its
  own with `node tests/validate_content.js` after any content change.
- `robustness.py`: damaged or unsavable progress, an update arriving during an
  exercise, a missing or broken course file, the options of vocabulary test
  questions in every lecture, offline start, and the picture cache surviving an
  update (the service worker is registered by hand, since `index.html` registers it
  only over https).
- `backup_restore.py`, `migration_format2.py`: saving and restoring progress, and
  converting backups of the older format.
- `revision.py`: progress format 3 (card direction per course, 10 new cards a day), the one-way cards of the
  reading courses, a translation and a gap or table question in every lecture test (all lectures, 20 draws each),
  and the Missed items and Revision test sessions on the Progress page, including a restart in the middle of one.
- `<course>_lecture<N>.py`, `<course>_course.py`, `mhd_special_*.py`,
  `mhd_german_series.py`: per lecture, every exercise answered from the lecture's
  own data, word glosses in the reading, the test, the cards, and no horizontal
  scrolling at iPhone width.
- `phone_use.py`: phone layout with the app's real fonts (`tests/fonts/fonts.css`): no page
  wider than the screen at any text size, no form text under 16 px (Safari zooms into it),
  reading notes and verse lines, panels that stay open, the one-line heading and the Return key
  in exercises, settings rows, the glossary search, the fade on wide tables, and the place kept
  after a restart (and forgotten after four hours).
- `dates.py`: the church-calendar date converter (needs `python-dateutil`).
- `numerals_fit.py`: the Roman numerals in the lecture list and header fit on a
  phone screen (uses the Marcellus font from `tests/fonts`, SIL Open Font Licence).

`tests/fonts` holds the app's three fonts (Marcellus, Source Serif 4, IBM Plex Sans; all SIL Open
Font Licence, licences alongside), because Google Fonts cannot be reached from the test machine.

Each browser test drives the app at iPhone width with Playwright (Chromium).
Screenshots go to `/tmp/viator-shots`. Google Fonts and Wikimedia are unreachable
in some sandboxes; those console messages are harmless.

When you add a lecture, copy the previous lecture's test file and adjust the file
name, lecture id and the text it looks for in the notes.
