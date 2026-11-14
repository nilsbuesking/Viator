# Plattdeutsch course: on hold

*Summary written 9 November 2026, when the course was taken out of the app. Use it to pick the work up again.*

## What was decided

- **Aim:** a sixth course in Viātor on modern Low German (Plattdeutsch), **for understanding** the language
  (reading and recognising forms, German glosses), not for speaking. Exercises mainly translate *into* German.
- **Focus:** the Platt of **Schaumburg** (Bückeburg, Stadthagen, Rinteln, Obernkirchen), with a look north to the
  **Nienburg** area on the Weser, plus **one overview lecture** on the other dialects (not in detail).
- **Spelling:** authentic texts keep their own spelling. Where the course writes Platt itself, it follows the
  **Saß rules** where they fit, and the habits of the Schaumburg texts where Saß has no letter for a Schaumburg
  sound (*ui, au, oa*).

## What was built (now archived)

- **Lecture I, "Wat de Buer nich kennt"** (Schaumburg Platt: sounds and spellings; twelve proverbs).
  - **Reading:** twelve traditional proverbs with the German renderings from the source.
  - **Grammar:**
    - Schaumburg vs northern Platt vs High German: *Huis/Huus/Haus*, *Schauh/Schoh/Schuh*, *Oabend/Avend/Abend*.
    - g written as j (*jaut, jrowwen*).
    - Plural *-et* (*danzet, hewwet*).
    - Past participle with *e-* (*ewesen, ‚ebrocht*).
    - Pronouns (*eck, hei, mi, di, üsch*).
    - Reading strategies.
  - **Background:** the history of Schaumburg (Schaumburg-Lippe until 1946; the Hessian part around Rinteln
    from 1647).
  - **Picture:** Schloss Bückeburg.
- **Nine further lectures were planned:**
  1. Pronouns, articles and the one object case; reading: Wenker sentences from Schaumburg and the Nienburg area
  2. Verbs: the plural in *-et*, past participles in *e-*, the modal verbs
  3. Telling a story: the past tense; reading: a Schaumburg anecdote
  4. Words that differ from High German: false friends and everyday vocabulary
  5. Nouns, plurals and the old dative *-e*
  6. Reading a fairy tale: *Von dem Fischer un siner Fru* (Grimm)
  7. Reading poetry: Klaus Groth's *Quickborn*
  8. Reading prose: Fritz Reuter
  9. The dialects of Low German: an overview from East Frisia to Mecklenburg

## Where the files are

| What | Where |
|---|---|
| Lecture I | `archive/nds/lecture-01.js` |
| Its browser test | `archive/nds/tests/nds_lecture1.py` |
| Course settings (catalogue entry) | `archive/nds/catalogue-entry.js` |
| The Schaumburg texts supplied | `sources/nds-schaumburg-texts.txt` |
| Open questions on Lecture I | `CONTENT-CHECKS.md`, last part ("On hold"), section "Low German (Schaumburg) Lecture I and course set-up" |

**To restore:**
1. Move `archive/nds/lecture-01.js` back to `content/nds/`.
2. Move the test back to `tests/`.
3. Paste the catalogue entry back into `content/catalogue.js`.
4. Add `'content/nds/lecture-01.js'` to `CORE` in `sw.js` and bump the version.
5. Restore the `nds` paragraph in `CLAUDE.md` (its content is summarised here).

Any learning progress made on the course is still stored in the app and will reappear.

**Not affected:** the Middle Low German special lecture "Vun Middelnedderdüütsch to Platt"
is still in the app: since 11 November 2026 it is part 6 of the Middle High German bonus series (`content/mhd/special-german-6-platt.js`).

## Sources and the copyright problem

- **What we have:** texts in Schaumburg Platt from the website of the **Arbeitsgruppe Spurensuche in der
  Schaumburger Landschaft**:
  - a prose piece by **Karl Wehmeyer** on the evening twilight (*Schummernisse*);
  - an anonymous anecdote about a village joiner, his apprentice and a coffin (*"Reget et noch?"*);
  - twelve proverbs.
- **The problem:** almost all Schaumburg Platt writing is modern and in copyright, and Viātor is a public website.
  Lecture I therefore quoted only one Wehmeyer sentence and single words from the anecdote; the proverbs are
  traditional.
- **Options discussed:**
  1. **Ask the Arbeitsgruppe Spurensuche for permission** to use a few texts with credit. This is the most
     promising route; they may also know other material or speakers. (Offer: draft the email in German.)
  2. **Wenker sheets** (1879–80): Georg Wenker's 40 standard sentences, written out in the local dialect by village
     teachers. They are public domain and digitised at **regionalsprache.de** (REDE). Claude cannot reach the site,
     so screenshots are needed for e.g. Bückeburg, Stadthagen, Rinteln and two or three villages near Nienburg.
     They are artificial sentences, but ideal for comparing villages.
  3. **Older Schaumburg writers who died before 1956**, so out of copyright. Ask the Landesarchiv Bückeburg or the
     Schaumburger Landschaft for 19th- or early 20th-century dialect poems, stories or Heimatkalender pieces.
  4. **Short quotations for discussion** (§ 51 UrhG): fine alongside other material, not as whole readings.
  5. **Constructed texts**, labelled as such. Only sensible if a Schaumburg speaker can check them.
  6. **Public-domain texts in other dialects** for the general reading lectures: Grimm's *Von dem Fischer un siner
     Fru* (Pomeranian Platt), Groth's *Quickborn* (1852, Dithmarschen), Reuter (Mecklenburg). These need page
     images of old editions.

## Open questions

- **Classification of Schaumburg Platt.** It lies where East Westphalian (west/south), Eastphalian (east) and
  Northern Low Saxon (north) meet. Its features (*ui, au*, plural *-et*, participle *e-*) point to the southern
  groups, but no reliable published classification was found. It needs checking in a dialect atlas or regional
  study.
- **Checking.** Claude's confidence in modern village Platt is lower than in the historical languages. A speaker of
  Schaumburg Platt to check glosses and constructed sentences would help a great deal.
- **Glosses to verify** from Lecture I: *afföllern*, *Nieteln*, *rööget sick*, *inne*, *frett*, *weene*, *jehürt*.

## Background facts gathered (for the overview lecture)

- **Speaker numbers.** The IDS/INS survey of 2016 (press release) covered the eight northern states:
  - 15.7% speak Low German well or very well;
  - almost half understand it well;
  - 50.7% of over-80s speak it well, against 11.7% of 40–49-year-olds;
  - the decline has slowed since the 2007 survey.
- **Legal status:** a regional language under the European Charter for Regional or Minority Languages since 1999,
  in eight federal states.
- **Dialect groups:**
  - Northern Low Saxon;
  - Westphalian (*Bruoder*);
  - Eastphalian (*mik, dik*);
  - Mecklenburgish-West Pomeranian;
  - Brandenburgish;
  - East Low German and Plautdietsch;
  - Dutch Low Saxon across the border.
