# Viātor

A phone-first language course: lectures with introduction, grammar, vocabulary,
exercises, a graded reading and a test, plus spaced-repetition flashcards.
Latin Lecture I is the prototype. French and further lectures plug in as content.

## Folder

| File | What it is |
|---|---|
| `index.html` | The app page for hosting (installable on the iPhone home screen, works offline) |
| `artifact.html` | The same app without the document wrapper, for previewing as a Claude artifact |
| `app.js`, `app.css` | The engine: layout, exercises, flashcards, progress, backup. Language-independent |
| `content/catalogue.js` | List of courses and their lecture files |
| `content/latin/lecture-01.js` | All of Lecture I: text, tables, vocabulary, exercises, reading, test |
| `sw.js`, `manifest.webmanifest`, `icons/` | What makes it installable and usable offline |
| `CONTENT-CHECKS.md` | Latin forms and claims to verify against a reference grammar |

## Try it on a computer

In this folder run `python3 -m http.server 8000` and open http://localhost:8000.
(Opening `index.html` by double-click does not work: browsers block the content
files from a `file://` page.)

## Put it on the iPhone

1. Host the folder on GitHub Pages (free): create a repository, upload the folder,
   then Settings → Pages → deploy from the main branch. Claude Code can do all of
   this for you; ask it to "publish this folder to GitHub Pages".
2. On the iPhone, open the Pages address in **Safari**, tap Share → **Add to Home Screen**.
3. Open it once from the home-screen icon while online. After that it works offline.

The repository can be private only on a paid GitHub plan; on a free plan the site
is public but unlisted (nobody finds it unless they have the address). Netlify or
Cloudflare Pages are alternatives.

## Backups

Progress is stored in the phone's browser storage for this app. It is lost if
website data is cleared in Settings → Apps → Safari, or if the app is deleted from
the home screen. Under Progress → Backup:

- **Save backup file** opens the iPhone share sheet; choose *Save to Files*
  (e.g. iCloud Drive). The app reminds you when the last backup is older than the
  interval you set.
- **Restore from a backup** reads that file back (or pasted text).

Backups carry a format number. If the stored format ever changes, the engine's
`migrate()` function converts old backups, so keep that function in step.

## Updating

Content changes: edit or add files in `content/`, add new lecture files to
`content/catalogue.js`, and to the `CORE` list in `sw.js`. Then upload the folder
again. The phone shows the new version the next time the app is opened online and
then reopened.

Engine changes: ask Claude Code. After each change, run through one lecture
section, one flashcard session and a backup save/restore before uploading.

## Audio

French can use the iPhone's built-in French voices: set `tts: 'fr-FR'` in the
catalogue and the app shows Listen buttons. Download a better voice under
Settings → Accessibility → Spoken Content → Voices → French. iOS has no Latin
voice, so Latin uses the written stress guide; recorded files could be added
later per vocabulary item.
