# Viātor

A phone-first course for historical languages: lectures with introduction,
background, grammar, vocabulary, exercises, a graded reading and a test, plus
spaced-repetition flashcards and reference pages.

Courses: **Latin** (41 lectures), **Middle High German** (11 lectures, a special
lecture on Walther's Palästinalied and the six-part series “German through time”),
**Old English** (12 lectures and The Battle of Maldon) and **Middle English**
(12 lectures, Chaucer). Middle Low German and modern Low German are on hold; their
material is in `archive/`. Further courses and lectures plug in as content.

## Folder

| File | What it is |
|---|---|
| `index.html` | The app page for hosting (installable on the iPhone home screen, works offline) |
| `artifact.html` | The same app without the document wrapper, for previewing as a Claude artifact |
| `app.js`, `app.css` | The engine: layout, exercises, flashcards, progress, backup. Language-independent |
| `content/catalogue.js` | List of courses, their settings and their lecture files |
| `content/<course>/lecture-NN.js` | One lecture: text, tables, vocabulary, exercises, reading, test |
| `content/<course>/pages.js`, `content/calendar.js` | Reference pages: timelines, the church-calendar date converter |
| `sw.js`, `manifest.webmanifest`, `icons/` | What makes it installable and usable offline |
| `CONTENT-CHECKS.md` | Forms, claims, quotations and pictures to verify against the reference works, by course and lecture; an overview at the top lists what still needs checking by hand |
| `tools/check_latin.py` | Content-review tool (not part of the app): checks the Latin vocabulary against Lewis & Short and finds the Latin quotations in the Perseus texts |
| `sources/` | Texts of the public-domain editions the lectures quote from, with their provenance (`sources/README.md`) |
| `tests/` | Automatic checks; see `tests/README.md` |
| `archive/` | Courses on hold, with notes on how to restore them |
| `CLAUDE.md` | Working rules for Claude Code |

## Try it on a computer

In this folder run `python3 -m http.server 8000` and open http://localhost:8000.
(Opening `index.html` by double-click does not work: browsers block the content
files from a `file://` page.)

## Put it on the iPhone

The app is published with GitHub Pages from this repository.

1. On the iPhone, open the Pages address in **Safari**, tap Share → **Add to Home Screen**.
2. Open it once from the home-screen icon while online. After that it works offline.
   Pictures from Wikimedia Commons are kept for offline use once they have been seen online.
3. If iOS restarts the app within four hours of your last use (it does this to save memory),
   Viātor reopens where you were: the same page, scroll position, and any exercise or test in
   progress. After longer it opens on the course page.

## Backups

Progress is stored in the phone's browser storage for this app. It is lost if
website data is cleared in Settings → Apps → Safari, or if the app is deleted from
the home screen. Under Progress → Backup:

- **Save backup file** opens the iPhone share sheet; choose *Save to Files*
  (e.g. iCloud Drive). The app reminds you when the last backup is older than the
  interval you set.
- **Restore from a backup** reads that file back (or pasted text).

If stored progress ever cannot be read, the app keeps the damaged copy and asks you
to restore a backup instead of overwriting it, and it tells you if the browser
refuses to save.

Backups carry a format number. If the stored format ever changes, the engine's
`migrate()` function converts old backups, so keep that function in step.

## Cards and revision

- **Card direction** is set per course under Cards. Latin shows vocabulary cards both ways; the reading courses
  (Middle High German, Old English, Middle English) show them from the old language into English or German only,
  because the aim there is reading. Courses set their default with `cardDir` in `content/catalogue.js`.
- **New cards a day**: 10 by default, for each course.
- **Progress → Revision**: *Missed items* practises up to 15 of the exercise and test questions you have got wrong
  most often (a right answer takes an item off the list); *Revision test* sets 12 questions from the lectures whose
  test you have passed, with some of your missed items among them.
- **Lecture tests** always include at least one translation and one gap or table question.

## Updating

Content changes: edit or add files in `content/`, add new lecture files to
`content/catalogue.js` and to the `CORE` list in `sw.js`, and raise `VERSION` in
`sw.js`. Then run the tests (`python3 tests/run_all.py`) and push.

The phone downloads a new version in the background. On the course page it switches
over at once; anywhere else (in the middle of an exercise, say) it shows “A new
version of the app is ready” and switches when you tap Reload or return to the
course page.

## Audio

A course can use the iPhone's built-in voices: set `tts` (e.g. `'fr-FR'`) in the
catalogue and the app shows Listen buttons. No current course uses this: iOS has no
voice for Latin or the medieval languages, so the lectures give a written
pronunciation guide instead.
