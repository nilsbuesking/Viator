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
- After writing a lecture, list every form you are less than certain of
  (gender, principal parts, vowel length, stress, accepted translations) in
  CONTENT-CHECKS.md. Nils checks these against Wheelock's, Lewis & Short or the
  Oxford Latin Dictionary (French: Le Robert or Larousse).

## Suggested model use
- Engine and storage changes, and content review passes: the most capable model, high effort.
- New lectures from the existing template, small features, bug fixes: the standard model, medium effort.
- Never use the smallest model for Latin or French content.

## Testing after changes
Serve with `python3 -m http.server`, then at phone width: start a lecture, do
three exercises including one paradigm and one translation, review five
flashcards, save and restore a backup. Check there is no horizontal scrolling.
