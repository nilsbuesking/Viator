# Middle Low German course: on hold

*Summary written 11 November 2026, when the course was taken out of the app. Use it to pick the work up again.*

## What was decided

- **Aim:** a course in **Middle Low German** (*Mittelniederdeutsch*, c. 1200–1600) for **reading Hanseatic documents**:
  charters, letters, diet records (*Hanserecesse*) and town law. Everything was explained through German, above all
  the absent High German consonant shift and the vowel correspondences.
- **Why it stopped:** the course was always a "nice to have". It needs authentic texts as page images, and these
  are not easy to get hold of (see "What would be needed" below).
- **What stayed in the app:** the special lecture "From Middle Low German to Plattdeutsch" now sits in the
  **Middle High German** course (✦ in the lecture list; id `mhd-s2`). Progress and flashcards already made on it were carried over to its new place (progress format 2).

## What was built (now archived)

### Lecture I, "Ik make, wî maket"
*Reading Low German through German: the sound key, the spelling, the present tense, the shape of a charter.*

- **Reading:** "Ên brêf des râdes tô Lübeke", a **constructed** charter in the style of Lübeck documents (labelled as
  constructed in the app), shown in normalised spelling and as a scribe might have written it.
- **Background:** Low German and High German; the language of the Hanse; decline and survival; the sources and
  how much we know.
- **Grammar (7 sections):**
  1. The key: no second sound shift (*maken/machen*, *dat/das*, *ik/ich*, *schip/Schiff*)
  2. Vowels: the same letters, older sounds
  3. Reading the spelling of the sources
  4. Pronouns and the present tense (unified plural in *-et*)
  5. *sîn* and *hebben*
  6. The article and the noun
  7. How a charter is built (the formulae)
- **Source panel:** the preface of the *Sachsenspiegel* (only the title words quoted; the wording differs between manuscripts).
- **Pictures:** map of the Low German dialects; Droysen's map of the spread of the Hanse around 1400;
  Heidelberg *Sachsenspiegel*, fol. 26v.

### Lecture II, "De hant des schrîvers"
*Scripts, abbreviations, money and numbers; how an edition presents a letter; two letters of 1469.*

- **Reading: authentic.** "Twê brêve van 1469", from the digitised *Hanserecesse*, 2nd series, vol. 6, ed. G. von der Ropp
  (Leipzig 1890): no. 167 (German merchants at Bruges to Lübeck, 31 January 1469, p. 127) and no. 165 (the German
  merchants imprisoned in London to the Hanse envoys, 8 April 1469, pp. 125–6). The reading shows the text as
  printed in 1890 and a normalised version that is this course's own. The scan came from archive.org.
- **Background:** how a document was made; the scripts; where to see originals.
- **Grammar (5 sections):** letters that mislead; abbreviations; money, measures and numbers (Lübeck mark, shilling,
  penny; Roman numerals in documents); reading the edition itself; the parts of a letter.
- **Pictures:** Holbein's portrait of Georg Gisze (1532); Lübeck's charter of imperial freedom (1226); the Stralsund seal of 1329.

### Reference pages (`archive/mnd/pages.js`)
- **Timeline:** 23 events from the *Heliand* (830s) to the Verein für Hansische Geschichte (1870), tagged
  language or Hanse.
- **Map:** the leading Hanse towns and the four Kontore (London, Bruges, Bergen, Novgorod), with a Natural Earth
  coastline (public domain) and Middle Low German place names.
- **Date converter** (`content/calendar.js`): it serves every course and **stayed in the app**. It still carries the
  Middle Low German feast and weekday names.

### Tests
`archive/mnd/tests/`: `mnd_lecture1.py`, `mnd_lecture2.py` and `timeline_map.py` (the map test; no other course
has a map page, so map taps are not tested at the moment).

### The special lecture (stayed in the app)
"Vun Middelnedderdüütsch to Platt": the shift to High German c. 1500–1650, the dialects today, revival and status,
what stayed and what changed (sounds, grammar), and a **constructed** short story in Middle Low German beside the
same story in modern Northern Low German. Now part 6 of the Middle High German bonus series “German through time”: `content/mhd/special-german-6-platt.js`, test `tests/mhd_special_plattdeutsch.py`. Part 2 of that series covers Old Saxon and Middle Low German up to about 1500.

## What was planned but not written

Four more lectures, as listed in the catalogue:

1. Strong verbs; the past tense in narratives and letters
2. Nouns and adjectives: cases and plurals as documents use them
3. Charters in detail: formulae, seals, dating by the church calendar
4. Letters and recesses: reading a Hanseatic edition

## What would be needed to continue

Authentic texts, **as page images or scans** (OCR of old print is unreliable and the Middle Low German editions
are in Fraktur or dense Antiqua). Candidates named earlier:

- The chronicle of Detmar of Lübeck
- *Reynke de Vos* (Lübeck 1498)
- Lübeck town law (Hach's edition of the old Lübeck law)
- A charter from the *Lübeckisches* or *Hansisches Urkundenbuch*
- A further *Hanserecesse* volume (Lecture II used vol. 6 of the 2nd series)

Only the *Hanserecesse* pages were accessed (through archive.org). None of the other texts has been seen. No Middle Low German source file is kept in `sources/`.

## Where the files are

| What | Where |
|---|---|
| Lectures I and II | `archive/mnd/lecture-01.js`, `archive/mnd/lecture-02.js` |
| Timeline and map | `archive/mnd/pages.js` |
| Browser tests | `archive/mnd/tests/` |
| Course settings (catalogue entry) | `archive/mnd/catalogue-entry.js` |
| Open questions on the content | `CONTENT-CHECKS.md`, last part ("On hold"): "Middle Low German Lecture I" and "Lecture II and reference pages"; the pictures are in "Shared and general", "Pictures in Latin Lecture I and the Middle Low German course" ("MLG I", "MLG II"), and the date converter, which is shared, in "Date converter". The questions on the special lecture are in the Middle High German part, "Middle Low German special lecture". |

**To restore:**
1. Move the three files from `archive/mnd/` back to `content/mnd/`, and the tests back to `tests/`.
2. Paste `archive/mnd/catalogue-entry.js` back into `content/catalogue.js` (before the Middle High German entry) and add `'mnd/pages.js'` to `Viator.setShared([...])`.
3. Add the lecture and pages files to `CORE` in `sw.js` and raise its version.
4. Restore the `mnd` paragraph of `CLAUDE.md` (its content is summarised above).

Any progress made in Lectures I and II is still stored in the app and will reappear. The special lecture's progress now belongs to the Middle High German course.
