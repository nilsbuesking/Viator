/*
 * Viātor — the engine. Language-independent: everything about a language
 * comes from content/catalogue.js and the lecture files it lists.
 * Progress is stored in this browser (localStorage) and backed up by export.
 */
(function () {
  'use strict';

  const CONTENT_BASE = (document.currentScript && document.currentScript.dataset.content) || 'content/';
  const BUILD = '2026-11-13 d';           // shown under Progress so you can tell which version is running
  const FORMAT = 2;                       // progress format version; bump + migrate() on change
  const STORE_KEY = 'viator.progress';
  const INTERVALS = [0, 1, 2, 4, 8, 16, 32, 64]; // Leitner box → days until next review

  // ---------- registry used by content files ----------
  const registry = { catalogue: [], lectures: {}, pages: [], shared: [] };
  window.Viator = {
    setCatalogue(list) { registry.catalogue = list; },
    setShared(files) { registry.shared = files; },
    // Reference pages: courses = '*' or a list of course ids; kinds: 'dates', 'timeline', 'map'
    addPage(courses, page) { registry.pages.push(Object.assign({ courses }, page)); },
    addLecture(courseId, lecture) {
      (registry.lectures[courseId] = registry.lectures[courseId] || []).push(lecture);
    }
  };

  // ---------- utilities ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const roman = n => { let r = '', x = Number(n) || 0; if (x <= 0 || x > 3999) return String(n); for (const [v, l] of [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]) while (x >= v) { r += l; x -= v; } return r; };
  // Length marks are per course: macron (Latin ā) or circumflex (Middle Low German â, as in the dictionaries).
  const stripMacrons = s => String(s).normalize('NFD').replace((course && course.lengthMark === 'circumflex') ? /\u0302/g : /\u0304/g, '').normalize('NFC');
  // Spelling variants a course treats as equivalent when checking answers and looking up words (e.g. v = u, y = i).
  const spell = s => (course && course.spelling || []).reduce((x, [a, b]) => x.replace(new RegExp(a, 'g'), b), s);
  const markName = () => (course && course.lengthMarkName) || 'macrons';
  // Translation directions: 'xx-en' into English, 'xx-de' into German, anything else into the course language.
  const dirParts = d => (d || '').split('-');
  const intoLang = d => { const t = dirParts(d)[1]; return t === 'en' || t === 'de' ? t : 'target'; };
  const fromTarget = d => !['en', 'de'].includes(dirParts(d)[0]);
  const glossOf = v => (course && course.reverseFrom === 'de' && v.de) ? v.de : v.en;
  const otherLang = () => (course && course.reverseFrom === 'de') ? 'German' : 'English';
  const today = () => { const d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); };
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const sample = (a, n) => shuffle(a).slice(0, n);

  function loadScript(src) {
    return new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = () => rej(new Error('Could not load ' + src));
      document.head.appendChild(s);
    });
  }
  // Content files are downloaded in parallel but run in the order given (async = false). A file that fails to
  // download is reported in `missing` and skipped, so one missing lecture does not stop the whole app.
  const missing = [];
  const shortName = src => src.replace(/^.*?content\//, '');
  function loadScripts(srcs) {
    return Promise.all(srcs.map(src => new Promise(res => {
      const s = document.createElement('script');
      s.src = src; s.async = false;
      s.onload = () => res();
      s.onerror = () => { missing.push(shortName(src)); res(); };
      document.head.appendChild(s);
    })));
  }
  // A content file that downloads but contains an error also leaves its lecture out; report it the same way.
  window.addEventListener('error', e => {
    const f = e.filename || '';
    if (f.indexOf('/content/') < 0) return;
    const name = shortName(f) + ' (error)';
    if (!missing.includes(name)) { missing.push(name); if (course && ui.view === 'home') render(); }
  });

  // ---------- progress & storage ----------
  function freshProgress() {
    return {
      format: FORMAT, created: new Date().toISOString(), lastExport: null,
      activeCourse: null,
      streak: { count: 0, last: null },
      settings: { macronsShown: true, strictMacrons: false, cardDir: 'both', newPerDay: 15, backupDays: 7, textSize: 'l' },
      courses: {}
    };
  }
  function migrate(p) {
    if (!p || typeof p !== 'object') return freshProgress();
    // format 2 (2026-11-11): the Middle Low German course was archived and its special lecture moved to
    // Middle High German, so its progress and flashcards move from mnd-s1 to mhd-s2
    if (!p.format || p.format < 2) {
      const mnd = p.courses && p.courses.mnd, old = mnd && mnd.lectures && mnd.lectures['mnd-s1'];
      if (old) {
        const mhd = p.courses.mhd = p.courses.mhd || { lectures: {}, cards: {}, newToday: { day: 0, count: 0 }, misses: {} };
        mhd.lectures = mhd.lectures || {}; mhd.cards = mhd.cards || {};
        mhd.lectures['mhd-s2'] = old; delete mnd.lectures['mnd-s1'];
        Object.keys(mnd.cards || {}).forEach(k => {
          const m = /^([vg]):mnd-s1:(.*)$/.exec(k);
          if (m) { mhd.cards[m[1] + ':mhd-s2:' + m[2]] = mnd.cards[k]; delete mnd.cards[k]; }
        });
        if (mnd.misses) Object.keys(mnd.misses).forEach(k => { if (k.indexOf('mnd-s1') >= 0) { mhd.misses = mhd.misses || {}; mhd.misses[k.replace('mnd-s1', 'mhd-s2')] = mnd.misses[k]; delete mnd.misses[k]; } });
      }
    }
    const base = freshProgress();
    p.settings = Object.assign(base.settings, p.settings || {});
    p.streak = p.streak || base.streak;
    p.courses = p.courses || {};
    p.format = FORMAT;
    return p;
  }
  let P;
  // damaged: stored progress could not be read ({ kept: true } if a copy was put aside);
  // holdSaves: the copy could not be put aside, so nothing is written over the original until the person decides;
  // saveFailed: the browser refused the last save
  let damaged = null, holdSaves = false, saveFailed = false;
  function load() {
    let raw = null;
    try { raw = localStorage.getItem(STORE_KEY); } catch (e) { /* storage unavailable */ }
    try { P = migrate(raw ? JSON.parse(raw) : null); }
    catch (e) {
      // Unreadable progress is never silently replaced: keep the text under its own key first.
      P = freshProgress(); damaged = { kept: false };
      try { localStorage.setItem(STORE_KEY + '.damaged.' + new Date().toISOString(), raw); damaged.kept = true; } catch (e2) { holdSaves = true; }
    }
    try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch (e) { /* not supported */ }
  }
  function save() {
    if (holdSaves) return;
    try { localStorage.setItem(STORE_KEY, JSON.stringify(P)); saveFailed = false; }
    catch (e) {
      if (saveFailed) return;
      saveFailed = true;   // say so once; the notice on the course page stays until a save succeeds
      setTimeout(() => { toast('Progress could not be saved on this phone. Save a backup now.'); if (ui.view === 'home') render(); }, 0);
    }
  }
  function courseP(id) {
    return P.courses[id] = P.courses[id] || { lectures: {}, cards: {}, newToday: { day: 0, count: 0 }, misses: {} };
  }
  function lectureP(cid, lid) {
    const c = courseP(cid);
    return c.lectures[lid] = c.lectures[lid] || { started: false, sections: {}, testBest: null, testRuns: 0 };
  }
  function touchStreak() {
    const d = today(), s = P.streak;
    if (s.last === d) return;
    s.count = (s.last === d - 1) ? s.count + 1 : 1;
    s.last = d;
  }

  // ---------- state ----------
  const ui = { view: 'home', lectureId: null, section: 'intro', ex: null, cards: null, ref: '', confirmImport: null, gloss: null, open: {} };
  let course = null;  // active course object from catalogue
  // special lectures (special: true) sort after the numbered ones, show ✦ instead of a numeral, and are left out of “Continue”
  const lectures = () => (registry.lectures[course.id] || []).slice().sort((a, b) => (!!a.special - !!b.special) || a.number - b.number);
  const lnum = l => l.special ? '✦' : roman(l.number);
  // Roman numerals are scaled to fit their space on a phone: XXXVIII is fourteen times as wide as I.
  // Widths per em of the display font (Marcellus); other characters count as 0.6.
  const NUMW = { I: 0.25, V: 0.64, X: 0.68, L: 0.44, C: 0.66, D: 0.72, M: 0.86, '✦': 0.82 };
  const fitNum = (t, maxPx, boxPx) => {
    const em = [...String(t)].reduce((a, ch) => a + (NUMW[ch] || 0.6), 0);
    return `font-size:${Math.min(maxPx, Math.floor(boxPx / Math.max(em, 0.1)))}px`;
  };
  const findLecture = id => lectures().find(l => l.id === id);
  const M = html => P.settings.macronsShown ? html : stripMacrons(html);

  const SECTIONS = [
    { id: 'intro', label: 'Introduction' },
    { id: 'pron', label: 'Pronunciation', when: l => !!l.pronunciation },
    { id: 'grammar', label: 'Grammar' },
    { id: 'vocab', label: 'Vocabulary' },
    { id: 'practice', label: 'Exercises' },
    { id: 'reading', label: 'Reading', when: l => !!l.reading },
    { id: 'test', label: 'Test' }
  ];
  const sectionsFor = l => SECTIONS.filter(s => !s.when || s.when(l));

  // ---------- flashcards ----------
  function cardsForLecture(l) {
    // order matters for new cards: Latin→English first, then grammar, then English→Latin
    const fwd = [], rev = [], gram = [];
    (l.vocab || []).forEach(v => {
      const meta = [v.pos, v.g ? ({ m: 'masc.', f: 'fem.', n: 'neut.' }[v.g]) : ''].filter(Boolean).join(', ');
      const meaning = v.de ? `${v.de} · ${v.en}` : v.en;
      fwd.push({ id: `v:${l.id}:${v.id}:f`, deck: 'vocab', dir: 'la-en', front: v.la, back: meaning, meta, latinFront: true, vid: v.id });
      rev.push({ id: `v:${l.id}:${v.id}:r`, deck: 'vocab', dir: 'en-la', front: glossOf(v), back: v.la, meta, latinFront: false, vid: v.id });
    });
    (l.grammarCards || []).forEach(g => gram.push({ id: `g:${l.id}:${g.id}`, deck: 'grammar', front: g.front, back: g.back, latinFront: false }));
    return fwd.concat(gram, rev);
  }
  function unlockedCards() {
    const c = courseP(course.id);
    return lectures().filter(l => c.lectures[l.id] && c.lectures[l.id].started).flatMap(cardsForLecture);
  }
  function cardState(id) { return courseP(course.id).cards[id]; }
  function dirAllowed(card) { return card.deck !== 'vocab' || P.settings.cardDir === 'both' || P.settings.cardDir === card.dir; }
  function dueCards(deck) {
    const d = today();
    return unlockedCards().filter(c => (deck === 'all' || c.deck === deck) && dirAllowed(c))
      .filter(c => { const s = cardState(c.id); return s && s.box > 0 && s.due <= d; });
  }
  function newCards(deck) {
    const c = courseP(course.id);
    if (c.newToday.day !== today()) c.newToday = { day: today(), count: 0 };
    const left = Math.max(0, P.settings.newPerDay - c.newToday.count);
    return unlockedCards().filter(x => (deck === 'all' || x.deck === deck) && dirAllowed(x) && !cardState(x.id)).slice(0, left);
  }
  function gradeCard(card, grade) {
    const c = courseP(course.id), d = today();
    let s = c.cards[card.id];
    if (!s) { s = c.cards[card.id] = { box: 0, due: d, lapses: 0 }; c.newToday.count++; }
    if (grade === 'again') { s.box = 1; s.due = d; s.lapses++; }
    else {
      s.box = Math.min(INTERVALS.length - 1, s.box + (grade === 'easy' ? 2 : 1));
      s.due = d + INTERVALS[s.box];
    }
    touchStreak(); save();
  }

  // ---------- answer checking ----------
  function norm(s) {
    return String(s).toLowerCase().replace(/[’‘`]/g, "'")
      .replace(/\(pl\.?\)/g, ' ')
      .replace(/[.,!?;:"“”()\[\]–—]/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }
  function normEn(s) {
    return norm(s)
      .replace(/\bdon't\b/g, 'do not').replace(/\bdoesn't\b/g, 'does not').replace(/\bisn't\b/g, 'is not')
      .replace(/\baren't\b/g, 'are not').replace(/\bdont\b/g, 'do not').replace(/\bdoesnt\b/g, 'does not')
      .replace(/'/g, '')
      .split(' ').filter(w => w && !['the', 'a', 'an'].includes(w)).join(' ');
  }
  const bag = s => s.split(' ').filter(Boolean).sort().join(' ');
  // Latin/target-language answers: word order free (bag of words); macrons per setting.
  function checkTarget(input, accepted, opts = {}) {
    const strict = P.settings.strictMacrons && P.settings.macronsShown && course.macrons;
    const f = opts.orderFree ? bag : (x => x);
    const clean = x => spell(norm(x).replace(/'/g, ''));
    const inp = f(clean(input));
    if (accepted.some(a => f(clean(a)) === inp)) return { ok: true, macron: false };
    const inpLoose = f(stripMacrons(clean(input)));
    const loose = accepted.some(a => f(stripMacrons(clean(a))) === inpLoose);
    if (loose) return { ok: !strict, macron: true };
    return { ok: false, macron: false };
  }
  function normDe(s) {
    return bag(norm(s).replace(/ß/g, 'ss').replace(/'/g, '')
      .split(' ').filter(w => w && !['der', 'die', 'das', 'den', 'dem', 'des', 'ein', 'eine', 'einen', 'einem', 'einer', 'eines'].includes(w)).join(' '));
  }
  function checkGerman(input, accepted) {
    const inp = normDe(input);
    return { ok: accepted.some(a => normDe(a) === inp), macron: false };
  }
  function checkEnglish(input, accepted) {
    const inp = normEn(input);
    return { ok: accepted.some(a => normEn(a) === inp), macron: false };
  }
  function recordResult(itemId, ok) {
    const m = courseP(course.id).misses;
    if (!ok) m[itemId] = (m[itemId] || 0) + 1;
    touchStreak(); save();
  }

  // ---------- speech (only for courses with a TTS voice) ----------
  function speakBtn(text) {
    if (!course.tts || !('speechSynthesis' in window)) return '';
    return `<button class="speak" data-speak="${esc(text)}" aria-label="Listen">▶ Listen</button>`;
  }
  function speak(text, rate) {
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = course.tts; u.rate = rate || 0.9;
      const v = speechSynthesis.getVoices().find(v => v.lang && v.lang.replace('_', '-').startsWith(course.tts));
      if (v) u.voice = v;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) { toast('Audio is not available on this device.'); }
  }

  // ---------- rendering ----------
  const root = () => $('#app');
  let toastTimer;
  function toast(msg) {
    let t = $('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 2600);
  }

  const ICONS = {
    home: '<svg viewBox="0 0 24 24"><path d="M4 19V6.5A1.5 1.5 0 0 1 5.5 5H11v15H5.5A1.5 1.5 0 0 1 4 18.5"/><path d="M20 19V6.5A1.5 1.5 0 0 0 18.5 5H13v15h5.5a1.5 1.5 0 0 0 1.5-1.5"/></svg>',
    cards: '<svg viewBox="0 0 24 24"><rect x="3" y="7" width="14" height="12" rx="2"/><path d="M7 7V5.5A1.5 1.5 0 0 1 8.5 4h11A1.5 1.5 0 0 1 21 5.5v9a1.5 1.5 0 0 1-1.5 1.5H17"/></svg>',
    ref: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/></svg>',
    progress: '<svg viewBox="0 0 24 24"><path d="M4 20h16"/><path d="M7 16v-4M12 16V7M17 16v-7"/></svg>'
  };

  const SCALES = { s: 0.92, m: 1, l: 1.15, xl: 1.3 };
  function applyTextSize() {
    const k = SCALES[P.settings.textSize] || SCALES.l;
    document.documentElement.style.setProperty('--scale', k);
  }
  function render() {
    applyTextSize();
    const due = dueCards('all').length + newCards('all').length;
    const header = ui.view === 'lecture'
      ? `<button class="back" data-go="home">‹ ${esc(course.name)}</button><span class="spacer"></span>`
      : `<p class="brand">Viātor</p><span class="spacer"></span>${registry.catalogue.length > 1
          ? `<select class="coursepick" id="coursepick" aria-label="Language">${registry.catalogue.map(c => `<option value="${c.id}" ${c.id === course.id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select>`
          : `<span class="coursepick">${esc(course.name)}</span>`}`;
    const body = ({ home: viewHome, lecture: viewLecture, cards: viewCards, ref: viewRef, progress: viewProgress })[ui.view]();
    const tab = (id, label) => `<button class="tab" data-go="${id}" ${(ui.view === id || (id === 'home' && ui.view === 'lecture')) ? 'aria-current="page"' : ''}>${ICONS[id]}${label}${id === 'cards' && due ? `<span class="badge">${due}</span>` : ''}</button>`;
    root().innerHTML = `
      <div class="app">
        <header class="top gutter">${header}</header>
        <main class="gutter">${body}</main>
      </div>
      <nav class="tabs" aria-label="Sections"><div class="tabs-inner">
        ${tab('home', 'Course')}${tab('cards', 'Cards')}${tab('ref', 'Reference')}${tab('progress', 'Progress')}
      </div></nav>`;
    after();
    savePlace(false);   // the scroll position is saved when the app goes into the background
  }

  // ----- home -----
  // Problems the person needs to know about: unreadable progress, failed saves, course files that did not load.
  function notices() {
    const out = [];
    if (damaged) out.push(`<div class="nudge" role="alert"><p><b>Your saved progress could not be read.</b> ${damaged.kept
        ? 'The damaged copy has been kept on this phone, and the app has started afresh. Restore your last backup under Progress → Backup.'
        : 'Nothing has been overwritten yet. Restore your last backup under Progress → Backup, or start afresh.'}</p>
      <div class="row"><button class="btn quiet" data-go="progress" data-anchor="backup">Restore a backup</button>${holdSaves ? '<button class="btn danger" data-startafresh>Start afresh</button>' : '<button class="btn quiet" data-dismissdamaged>OK</button>'}</div></div>`);
    if (saveFailed) out.push(`<div class="nudge" role="alert"><p><b>This browser is not saving your progress.</b> It may be full or in private mode. Save a backup file before you close the app.</p><button class="btn quiet" data-go="progress" data-anchor="backup">Back up now</button></div>`);
    if (missing.length) out.push(`<div class="nudge" role="alert"><p><b>Some course files could not be loaded</b> (${esc(missing.join(', '))}). Those lectures are missing for now. Check the connection and open the app again.</p></div>`);
    return out.join('');
  }
  function backupDue() {
    const c = courseP(course.id);
    const hasProgress = Object.keys(c.cards).length || Object.keys(c.lectures).length;
    if (!hasProgress) return false;
    if (!P.lastExport) return true;
    return (Date.now() - new Date(P.lastExport).getTime()) / 86400000 >= P.settings.backupDays;
  }
  function nextStep() {
    const c = courseP(course.id);
    for (const l of lectures().filter(x => !x.special)) {
      const lp = c.lectures[l.id];
      for (const s of sectionsFor(l)) if (!(lp && lp.sections[s.id])) return { l, s };
    }
    return null;
  }
  function viewHome() {
    const c = courseP(course.id), ls = lectures();
    const step = nextStep();
    const due = dueCards('all').length, fresh = newCards('all').length;
    const learned = Object.values(c.cards).filter(s => s.box >= 3).length;
    const item = l => {
      const lp = c.lectures[l.id], secs = sectionsFor(l);
      const done = lp ? secs.filter(s => lp.sections[s.id]).length : 0;
      const complete = done === secs.length;
      return `<button class="lect" data-lecture="${l.id}">
        <span class="num" style="${fitNum(lnum(l), 27, 56)}">${lnum(l)}</span>
        <span><span class="t la">${M(esc(l.title))}</span><br><span class="s">${esc(l.subtitle)}</span>
          <span class="dots" aria-label="${done} of ${secs.length} sections done">${secs.map(s => `<i class="${lp && lp.sections[s.id] ? 'on' : ''}"></i>`).join('')}</span></span>
        <span class="pill ${complete ? 'done' : ''}">${complete ? 'Done' : `${l.minutes} min`}</span>
      </button>`;
    };
    const items = ls.filter(l => !l.special).map(item).join('');
    const specials = ls.filter(l => l.special).map(item).join('');
    const planned = (course.planned || []).map((t, i) => `<div class="lect planned"><span class="num" style="${fitNum(roman(ls.filter(l => !l.special).length + i + 1), 27, 56)}">${roman(ls.filter(l => !l.special).length + i + 1)}</span><span><span class="t">${esc(t)}</span></span><span class="pill">Planned</span></div>`).join('');
    return `
      <section class="today panel">
        <p class="eyebrow">Today</p>
        ${step ? `<p class="today lead">${lnum(step.l)} · ${esc(step.s.label)}</p>
          <button class="btn wide" data-lecture="${step.l.id}" data-section="${step.s.id}">${c.lectures[step.l.id] && c.lectures[step.l.id].started ? 'Continue' : 'Start lecture'}</button>
          ${ls.length > 1 ? `<label class="small muted" for="pickLecture">or choose a lecture</label>
          <select class="field" id="pickLecture" style="width:100%"><option value="">${lnum(step.l)} · ${M(esc(step.l.title))} (current)</option>${ls.filter(l => l.id !== step.l.id).map(l => {
            const lp = c.lectures[l.id], secs = sectionsFor(l), done = lp ? secs.filter(x => lp.sections[x.id]).length : 0;
            return `<option value="${l.id}">${lnum(l)} · ${M(esc(l.title))}${done === secs.length ? ' · done' : done ? ` · ${done}/${secs.length}` : ''}</option>`; }).join('')}</select>` : ''}`
          : !ls.length ? `<p class="lead">The first lecture of this course is in preparation.</p><p class="small muted">The planned lectures are listed below. The reference pages are already available.</p>`
          : `<p class="lead">All available lectures are done.</p>${ls.length ? `<label class="small muted" for="pickLecture">Choose a lecture to revise</label><select class="field" id="pickLecture" style="width:100%"><option value="">Choose…</option>${ls.map(l => `<option value="${l.id}">${lnum(l)} · ${M(esc(l.title))}</option>`).join('')}</select>` : ''}`}
        <div class="stats3">
          <div class="stat"><b>${due}</b><span>cards due</span></div>
          <div class="stat"><b>${fresh}</b><span>new cards</span></div>
          <div class="stat"><b>${learned}</b><span>known well</span></div>
        </div>
        ${due + fresh ? `<button class="btn ghost wide" data-go="cards">Review cards</button>` : ''}
      </section>
      ${notices()}
      ${backupDue() ? `<div class="nudge"><p>${P.lastExport ? `Your last backup is more than ${P.settings.backupDays} days old.` : 'You haven’t made a backup yet.'} Progress lives only in this browser.</p><button class="btn quiet" data-go="progress" data-anchor="backup">Back up now</button></div>` : ''}
      <section>
        <p class="eyebrow">${esc(course.native || course.name)}${!ls.length ? ' · lectures planned' : ` · ${ls.filter(l => { const lp = c.lectures[l.id]; return lp && sectionsFor(l).every(x => lp.sections[x.id]); }).length} of ${ls.length} ${ls.length === 1 ? 'lecture' : 'lectures'} complete`}</p>
        <div class="lectures">${items}${planned}</div>
      </section>
      ${specials ? `<section><p class="eyebrow">Special lectures</p><div class="lectures">${specials}</div></section>` : ''}`;
  }

  // ----- lecture -----
  function viewLecture() {
    const l = findLecture(ui.lectureId), lp = lectureP(course.id, l.id);
    const secs = sectionsFor(l);
    const chips = secs.map(s => `<button class="chip ${lp.sections[s.id] ? 'done' : ''}" data-section="${s.id}" ${ui.section === s.id ? 'aria-current="true"' : ''}><span class="tick"></span>${s.label}</button>`).join('');
    let body = '';
    switch (ui.section) {
      case 'intro': body = `<div class="prose">${M(l.intro)}</div>${(l.background || []).length ? `<p class="eyebrow">Background</p>${blocks(l.background, 'b')}` : ''}${l.culture ? `<div class="panel prose">${M(l.culture)}</div>` : ''}${doneBtn()}`; break;
      case 'pron': body = `<div class="prose">${M(l.pronunciation)}</div>${doneBtn()}`; break;
      case 'grammar': body = (l.grammar.length > 3 ? `<nav class="jump" aria-label="Grammar topics">${l.grammar.map((g, i) => `<button data-jump="g-${i}">${M(esc(g.title))}</button>`).join('')}</nav>` : '') + blocks(l.grammar, 'g') + doneBtn(); break;
      case 'vocab': body = vocabList(l.vocab) + `<p class="small muted">These words are now in your flashcards.</p>` + doneBtn(); break;
      case 'practice': body = exerciseRunner('practice', l); break;
      case 'reading': body = viewReading(l); break;
      case 'test': body = exerciseRunner('test', l); break;
    }
    // While exercises or the test are running, the lecture heading shrinks to one line to leave room for the question.
    const running = (ui.section === 'practice' || ui.section === 'test') && ui.ex && ui.ex.mode === ui.section && ui.ex.lid === l.id && !ui.ex.finished;
    return `
      ${running ? `<p class="lmini"><span class="numeral">${lnum(l)}</span> <span class="la">${M(esc(l.title))}</span></p>`
        : `<div class="lhead"><span class="numeral" style="${fitNum(lnum(l), 54, 110)}">${lnum(l)}</span>
        <div><p class="eyebrow">${esc(course.lectureWord || 'Lecture')}</p><h1 class="la">${M(esc(l.title))}</h1><p>${esc(l.subtitle)}</p></div></div>`}
      <nav class="chips" aria-label="Lecture sections">${chips}</nav>
      <section class="stack" id="secbody">${body}</section>`;
  }
  function blocks(list, prefix) {
    return list.map((g, i) => `<div class="gblock prose" id="${prefix}-${i}"><h3 class="gt">${M(esc(g.title))}</h3>${M(g.html)}</div>`).join('');
  }
  function doneBtn(label) {
    const l = findLecture(ui.lectureId), secs = sectionsFor(l), i = secs.findIndex(s => s.id === ui.section);
    const next = secs[i + 1];
    return `<button class="btn wide" data-done="${ui.section}" data-next="${next ? next.id : ''}">${label || (next ? `Done · next: ${next.label}` : 'Done')}</button>`;
  }
  function vocabList(vocab) {
    return `<div class="vlist">${vocab.map(v => `
      <div class="vitem">
        <span class="vla">${M(esc(v.la))}${v.g ? `<span class="g-tag">${v.g}.</span>` : ''}${speakBtn(stripMacrons(v.head))}</span>
        <span class="vmeta">${esc(v.pos)}</span>
        <span class="ven">${v.de ? `${esc(v.de)} <span class="muted">· ${esc(v.en)}</span>` : esc(v.en)}</span>
        ${v.stress && v.stress !== '—' ? `<span class="vstress">${M(esc(v.stress))}</span>` : ''}
        ${v.deriv ? `<span class="vnote">Compare: ${esc(v.deriv)}</span>` : ''}
        ${v.note ? `<span class="vnote">${M(esc(v.note))}</span>` : ''}
      </div>`).join('')}</div>`;
  }

  // ----- reading -----
  function viewReading(l) {
    const r = l.reading, lp = lectureP(course.id, l.id);
    const known = new Set();
    if (!ui.readView) ui.readView = r.startView || 'norm';
    const asWritten = r.diplomatic && ui.readView === 'dipl';
    const loose = k => spell(stripMacrons(k.toLowerCase()));
    const looseMap = {}; Object.keys(r.glosses).forEach(k => { const lk = loose(k); if (!(lk in looseMap)) looseMap[lk] = r.glosses[k]; });
    // editorial brackets inside a word (allme[c]htich, hl(ǣw)) and an editor's raised dot (u·nheánlice) belong to the word; letters include Latin Extended-B (ǣ ȳ ƿ) and ʒ
    // last resort for texts printed with an editor's own marks (acute accents, hooked ǫ ę): ignore all diacritics
    const bare = k => spell(k.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').normalize('NFC'));
    const bareMap = {}; Object.keys(r.glosses).forEach(k => { const bk = bare(k); if (!(bk in bareMap)) bareMap[bk] = r.glosses[k]; });
    const glossFor = w => { const k = w.replace(/[\[\]()·]/g, ''); return r.glosses[k.toLowerCase()] || looseMap[loose(k)] || bareMap[bare(k)]; };
    const parts = (asWritten ? r.diplomatic : r.text).split(/((?:[A-Za-zÀ-ɏʒ̀-ͯ]|\[[A-Za-zÀ-ɏʒ̀-ͯ]+\]|\([A-Za-zÀ-ɏʒ̀-ͯ]+\)|(?<=[A-Za-zÀ-ɏ])·(?=[A-Za-zÀ-ɏ]))+)/);
    let html = parts.map((p, i) => {
      if (i % 2 === 0) return esc(p);
      const g = glossFor(p);
      const isNew = g && /\(new word\)|next lecture/.test(g);
      return g ? `<span class="w ${isNew ? 'new' : ''} ${ui.gloss === i ? 'sel' : ''}" data-w="${i}" role="button" tabindex="0">${M(esc(p))}</span>` : M(esc(p));
    }).join('');
    // Verse (mostly short lines): one block per line, so that a line too long for the screen continues indented
    // instead of looking like a new line. Prose (mostly long lines, i.e. paragraphs) is left as it is.
    const srcLines = (asWritten ? r.diplomatic : r.text).split('\n'), filled = srcLines.filter(x => x.trim());
    const verse = filled.length > 1 && filled.filter(x => x.length > 120).length * 3 <= filled.length;
    if (verse) html = html.split('\n').map(x => x.trim() ? `<span class="ln">${x}</span>` : '<span class="ln gap"></span>').join('');
    const sel = ui.gloss != null ? parts[ui.gloss] : null;
    const qs = (r.questions || []).map(q => inlineMC(q)).join('');
    // The note on the source: short notes as they are; long ones folded to two lines, open on tap.
    const note = String(r.note || '').replace(/\s*Tap any word[^.]*\.?\s*$/i, '');
    const noteHtml = !note ? '' : note.length <= 130 ? `<p class="small muted" style="margin:0">${esc(note)}</p>`
      : `<details class="srcnote" data-keep="src" ${ui.open.src ? 'open' : ''}><summary><span class="pv">${esc(note)}</span></summary></details>`;
    return `
      <h2 class="section la">${M(esc(r.title))}</h2>
      ${noteHtml}
      <p class="small muted" style="margin:0">Tap any word for its meaning. Words underlined with dots are not yet in your vocabulary.</p>
      ${r.diplomatic ? `<div class="deckpick two" role="group" aria-label="Text form"><button class="seg" data-rview="norm" aria-pressed="${!asWritten}">Normalised</button><button class="seg" data-rview="dipl" aria-pressed="${!!asWritten}">${esc(r.diplomaticLabel || 'As written')}</button></div>
      <p class="small muted" style="margin:0">${asWritten ? esc(r.diplomaticNote || 'Spelling as a scribe might write it.') : 'Normalised dictionary spelling, with long vowels marked.'}</p>` : ''}
      <div class="reading${verse ? ' verse' : ''}" lang="${course.langTag}">${html}</div>
      ${sel ? `<div class="glossbox" aria-live="polite"><span class="la">${M(esc(sel))}</span> · ${M(esc(glossFor(sel) || ''))}</div>` : ''}
      ${(r.translations || [{ label: 'translation', text: r.translation }]).map((t, k) => `<details class="panel" data-keep="tr${k}" ${ui.open['tr' + k] ? 'open' : ''}><summary>Show ${esc(t.label)}</summary><p class="prose" style="margin-top:10px">${esc(t.text)}</p></details>`).join('')}
      ${(r.notes || []).length ? `<details class="panel" data-keep="notes" ${ui.open.notes ? 'open' : ''}><summary>Notes on the passage</summary><dl class="notes">${r.notes.map(n => `<dt class="la">${M(esc(n.ref))}</dt><dd class="prose">${M(n.html)}</dd>`).join('')}</dl></details>` : ''}
      ${qs ? `<p class="eyebrow">Comprehension</p><div class="stack">${qs}</div>` : ''}
      ${doneBtn()}`;
  }
  function inlineMC(q) {
    const st = ui.inline && ui.inline[q.id];
    return `<div class="panel stack"><p class="q">${M(q.prompt)}</p><div class="opts">${q.options.map((o, i) => {
      let cls = ''; if (st != null) { if (i === q.answer) cls = 'right'; else if (i === st) cls = 'wrong'; }
      return `<button class="opt ${cls}" data-inline="${q.id}" data-i="${i}" ${st != null ? 'disabled' : ''}>${M(esc(o))}</button>`;
    }).join('')}</div>${st != null ? `<p class="small muted">${M(esc(q.explain || ''))}</p>` : ''}</div>`;
  }

  // ----- exercise runner (practice + test) -----
  function buildTest(l) {
    const t = l.test, vq = t.vocabQuestions || 0;
    const written = sample(t.items, Math.max(0, t.count - vq));
    const vocabPool = l.vocab.filter(v => v.pos.indexOf('verb') === 0 || v.pos.indexOf('noun') === 0);
    const kind = v => v.pos.split(',')[0];
    const vocab = sample(vocabPool, vq).map(v => {
      // Three wrong answers, all different from the right one and from each other: first words of the same kind
      // from this lecture, then from the rest of the course, then any word from this lecture.
      const answer = glossOf(v), wrong = [];
      const add = list => { for (const x of shuffle(list)) { if (wrong.length >= 3) break; const g = glossOf(x); if (g && g !== answer && !wrong.includes(g)) wrong.push(g); } };
      add(vocabPool.filter(x => x.id !== v.id && kind(x) === kind(v)));
      if (wrong.length < 3) add(lectures().filter(o => o.id !== l.id).flatMap(o => o.vocab || []).filter(x => kind(x) === kind(v)));
      if (wrong.length < 3) add(l.vocab.filter(x => x.id !== v.id));
      const opts = shuffle([answer, ...wrong]);
      return { id: 'tv-' + v.id, type: 'mc', prompt: `<span class="la">${esc(v.head)}</span> means:`, options: opts, answer: opts.indexOf(answer), explain: v.la + ': ' + (v.de ? v.de + ' · ' : '') + v.en };
    });
    return shuffle(written.concat(vocab));
  }
  function startRun(mode, l) {
    const items = mode === 'test' ? buildTest(l) : l.exercises.slice();
    ui.ex = { mode, lid: l.id, items, i: 0, score: 0, state: null, finished: false, perm: null };
  }
  function exerciseRunner(mode, l) {
    if (!ui.ex || ui.ex.mode !== mode || ui.ex.lid !== l.id) {
      const lp = lectureP(course.id, l.id);
      return `
        <div class="panel stack">
          ${mode === 'test'
            ? `<p class="prose" style="margin:0">${l.test.count} questions drawn from the whole lecture. A score of 70% or more completes the lecture.</p>${lp.testBest != null ? `<p class="small muted" style="margin:0">Best so far: ${lp.testBest}% (${lp.testRuns} attempt${lp.testRuns === 1 ? '' : 's'})</p>` : ''}`
            : `<p class="prose" style="margin:0">${l.exercises.length} exercises: choices, endings, tables, matching, word order and translation. Each is checked when you tap Check.</p>`}
          <button class="btn wide" data-start="${mode}">${mode === 'test' ? 'Start test' : 'Start exercises'}</button>
        </div>`;
    }
    const x = ui.ex;
    if (x.finished) {
      const pct = Math.round(100 * x.score / x.items.length);
      return `<div class="panel stack"><p class="eyebrow">${mode === 'test' ? 'Test result' : 'Exercises finished'}</p>
        <p class="today lead" style="margin:0">${x.score} / ${x.items.length} · ${pct}%</p>
        <p class="small muted" style="margin:0">${mode === 'test' ? (pct >= 70 ? 'Lecture complete.' : 'Below 70%. Review the grammar and vocabulary, then try again.') : 'Items you missed are listed under Progress for review.'}</p>
        <div class="row"><button class="btn quiet" data-start="${mode}">Again</button>${doneBtn('Continue')}</div></div>`;
    }
    const item = x.items[x.i];
    return `
      <div class="exhead"><span>${mode === 'test' ? 'Test' : 'Exercise'} ${x.i + 1} of ${x.items.length}</span><span>${x.score} correct</span></div>
      <div class="bar"><i style="width:${100 * x.i / x.items.length}%"></i></div>
      ${renderItem(item, x.state)}`;
  }
  function kbd() {
    return course.keyboard && course.keyboard.length ? `<div class="kbd" aria-label="Special characters">${course.keyboard.map(k => `<button type="button" data-key="${k}">${k}</button>`).join('')}</div>` : '';
  }
  function feedbackHtml(st, item) {
    if (!st || !st.checked) return '';
    const parts = [];
    if (st.ok) parts.push(`<b>Correct.</b>`); else parts.push(`<b>Not quite.</b>`);
    if (st.macron) parts.push(`<span>With ${esc(markName())}: <span class="la">${esc(st.macronForm || '')}</span></span>`);
    if (item.model) parts.push(`<span>Model answer: <span class="${item.dir && intoLang(item.dir) === 'target' ? 'la' : ''}">${M(esc(item.model))}</span></span>`);
    if (item.full && !st.ok) parts.push(`<span>Answer: <span class="la">${M(esc(item.full))}</span></span>`);
    if (item.explain) parts.push(`<span class="small">${M(esc(item.explain))}</span>`);
    return `<div class="feedback ${st.ok ? 'ok' : 'no'}" role="status">${parts[0]}${parts.slice(1).join('<br>')}</div>`;
  }
  function nextBtns(st, item) {
    if (!st || !st.checked) return `<button class="btn wide" data-check>Check</button>`;
    const selfGrade = !st.ok && item.type === 'translate' && !st.overridden;
    return `<div class="row">${selfGrade ? `<button class="btn quiet" data-override>I was right</button>` : ''}<button class="btn" style="flex:1" data-next-item>Next</button></div>`;
  }
  function renderItem(item, st) {
    st = st || {};
    switch (item.type) {
      case 'mc': {
        const order = ui.ex.perm || (ui.ex.perm = shuffle(item.options.map((_, i) => i)));
        return `<p class="q">${M(item.prompt)}</p><div class="opts">${order.map(i => {
          let cls = ''; if (st.checked) { if (i === item.answer) cls = 'right'; else if (i === st.choice) cls = 'wrong'; }
          return `<button class="opt ${cls}" data-choice="${i}" ${st.checked ? 'disabled' : ''}>${M(esc(item.options[i]))}</button>`;
        }).join('')}</div>${feedbackHtml(st, item)}${st.checked ? nextBtns(st, item) : ''}`;
      }
      case 'gap':
        return `<p class="q">${M(item.prompt)}<span class="hint">${esc(item.hint || '')}</span></p>
          ${st.checked ? '' : kbd()}<input class="field ${st.checked ? (st.ok ? 'right' : 'wrong') : ''}" id="ans" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="Type the ending" value="${esc(st.value || '')}" ${st.checked ? 'readonly' : ''} lang="${course.langTag}">
          ${feedbackHtml(st, item)}${nextBtns(st, item)}`;
      case 'translate':
        { const into = intoLang(item.dir), src = fromTarget(item.dir);
        return `<p class="eyebrow">Translate into ${into === 'en' ? 'English' : into === 'de' ? 'German' : esc(course.name)}</p>
          <p class="q ${src ? 'la' : ''}">${M(esc(item.source))}${src ? speakBtn(stripMacrons(item.source)) : ''}</p>
          ${st.checked || into !== 'target' ? '' : kbd()}<textarea class="field ${st.checked ? (st.ok ? 'right' : 'wrong') : ''}" id="ans" autocomplete="off" autocapitalize="sentences" spellcheck="false" enterkeyhint="done" ${st.checked ? 'readonly' : ''} lang="${into === 'target' ? course.langTag : into}">${esc(st.value || '')}</textarea>
          ${feedbackHtml(st, item)}${nextBtns(st, item)}`; }
      case 'paradigm':
        { const nCells = item.rows.reduce((a, r) => a + r.answers.length, 0);
        return `<p class="q">${M(item.prompt)}</p>
          ${st.checked ? '' : kbd()}<div class="tablewrap"><table class="ptable"><thead><tr><th></th>${item.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>
          ${item.rows.map((r, ri) => `<tr><th>${esc(r.label)}</th>${r.answers.map((a, ci) => {
            const k = ri + '-' + ci, cell = st.cells && st.cells[k];
            const last = ri === item.rows.length - 1 && ci === r.answers.length - 1;
            return `<td><input data-cell="${k}" class="${cell ? (cell.ok ? 'right' : 'wrong') : ''}" value="${esc((st.values && st.values[k]) || '')}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="${last || nCells === 1 ? 'done' : 'next'}" ${st.checked ? 'readonly' : ''} lang="${course.langTag}" aria-label="${esc(r.label)} ${esc(item.headers[ci])}">${cell && (!cell.ok || cell.macron) ? `<span class="sol">${M(esc(a.split('|').join(' / ')))}</span>` : ''}</td>`;
          }).join('')}</tr>`).join('')}</tbody></table></div>
          ${feedbackHtml(st, {})}${nextBtns(st, item)}`; }
      case 'match': {
        if (!st.right) { st.right = shuffle(item.pairs.map((_, i) => i)); st.left = shuffle(item.pairs.map((_, i) => i)); st.done = []; st.misses = 0; ui.ex.state = st; }
        return `<p class="q">${esc(item.prompt)}</p><div class="match">
          <div class="col">${st.left.map(i => `<button class="la ${st.done.includes(i) ? 'matched' : ''} ${st.sel === i ? 'sel' : ''}" data-ml="${i}" ${st.done.includes(i) ? 'disabled' : ''}>${M(esc(item.pairs[i][0]))}</button>`).join('')}</div>
          <div class="col">${st.right.map(i => `<button class="${st.done.includes(i) ? 'matched' : ''} ${st.miss === i ? 'miss' : ''}" data-mr="${i}" ${st.done.includes(i) ? 'disabled' : ''}>${esc(item.pairs[i][1])}</button>`).join('')}</div>
        </div>${st.checked ? feedbackHtml(st, {}) + nextBtns(st, item) : '<p class="small muted">Tap a form on the left, then its meaning.</p>'}`;
      }
      case 'order': {
        if (!st.bank) { st.bank = shuffle(item.tokens.map((_, i) => i)); st.line = []; ui.ex.state = st; }
        return `<p class="eyebrow">${esc(item.prompt)}</p><p class="q la">${M(esc(item.source))}</p>
          <div class="order-line" aria-label="Your answer">${st.line.map(i => `<button class="tok" data-ol="${i}" ${st.checked ? 'disabled' : ''}>${esc(item.tokens[i])}</button>`).join('')}</div>
          <div class="order-bank">${st.bank.filter(i => !st.line.includes(i)).map(i => `<button class="tok" data-ob="${i}">${esc(item.tokens[i])}</button>`).join('')}</div>
          ${feedbackHtml(st, Object.assign({}, item, st.checked && !st.ok ? { full: item.tokens.join(' ') } : {}))}${nextBtns(st, item)}`;
      }
    }
    return '';
  }
  function checkItem() {
    const x = ui.ex, item = x.items[x.i], st = x.state || (x.state = {});
    const val = () => ($('#ans') || {}).value || '';
    if (item.type === 'gap') {
      st.value = val(); if (!st.value.trim()) return;
      const r = checkTarget(st.value, item.answers);
      Object.assign(st, r, { macronForm: r.macron ? item.full : null });
    } else if (item.type === 'translate') {
      st.value = val(); if (!st.value.trim()) return;
      const into = intoLang(item.dir);
      const r = into === 'en' ? checkEnglish(st.value, item.accepted) : into === 'de' ? checkGerman(st.value, item.accepted) : checkTarget(st.value, item.accepted, { orderFree: true });
      Object.assign(st, r, { macronForm: r.macron ? item.model : null });
    } else if (item.type === 'paradigm') {
      st.values = {}; st.cells = {}; let all = true, anyMac = false;
      document.querySelectorAll('[data-cell]').forEach(inp => {
        const k = inp.dataset.cell, [ri, ci] = k.split('-').map(Number);
        st.values[k] = inp.value;
        const r = checkTarget(inp.value, item.rows[ri].answers[ci].split('|'));
        st.cells[k] = r; if (!r.ok) all = false; if (r.macron) anyMac = true;
      });
      st.ok = all; st.macron = false; if (anyMac && all) st.note = true;
    } else if (item.type === 'order') {
      if (st.line.length !== item.tokens.length) { toast('Use all the pieces first.'); return; }
      st.ok = st.line.every((v, i) => v === i);
    } else return;
    st.checked = true;
    if (st.ok) x.score++;
    recordResult(lectureQualified(item), st.ok);
    ui.reveal = true; render();
  }
  const lectureQualified = item => ui.ex.lid + ':' + item.id;
  function nextItem() {
    const x = ui.ex; x.i++; x.state = null; x.perm = null;
    if (x.i >= x.items.length) {
      x.finished = true;
      const lp = lectureP(course.id, x.lid);
      if (x.mode === 'test') {
        const pct = Math.round(100 * x.score / x.items.length);
        lp.testRuns++; lp.testBest = Math.max(lp.testBest || 0, pct);
        if (pct >= 70) lp.sections.test = true;
      } else lp.sections.practice = true;
      save();
    }
    render(); window.scrollTo(0, 0);
  }

  // ----- flashcards view -----
  function viewCards() {
    const s = ui.cards;
    if (s && s.queue.length) {
      const card = s.queue[0];
      const front = card.latinFront ? M(esc(card.front)) : M(esc(card.front));
      const back = M(esc(card.back));
      return `
        <div class="exhead"><span>${s.done} reviewed · ${s.queue.length} left</span><button class="back" data-endcards>End</button></div>
        <button class="card" data-flip>
          <span class="meta">${card.deck === 'grammar' ? 'Grammar' : (card.dir === 'la-en' ? esc(course.name) + ' → ' + otherLang() : otherLang() + ' → ' + esc(course.name))}${card.meta ? ' · ' + esc(card.meta) : ''}</span>
          <span class="front ${card.deck === 'grammar' || !card.latinFront ? 'small' : ''} ${card.latinFront ? 'la' : ''}">${front}</span>
          ${s.flipped ? `<span class="answer ${card.dir === 'en-la' ? 'la' : ''}">${back}</span>` : '<span class="tapnote">Tap to show the answer</span>'}
        </button>
        ${s.flipped ? `<div class="grade">
            <button class="btn danger" data-grade="again">Again<small>see it today</small></button>
            <button class="btn quiet" data-grade="good">Good<small>${INTERVALS[Math.min(7, ((cardState(card.id) || { box: 0 }).box) + 1)]}d</small></button>
            <button class="btn" data-grade="easy">Easy<small>${INTERVALS[Math.min(7, ((cardState(card.id) || { box: 0 }).box) + 2)]}d</small></button>
          </div>` : ''}`;
    }
    const deck = (s && s.deck) || 'all';
    const counts = d => ({ due: dueCards(d).length, fresh: newCards(d).length });
    const c = counts(deck);
    const total = unlockedCards().filter(dirAllowed).length;
    return `
      <h2 class="section">Flashcards</h2>
      ${s && s.done ? `<div class="feedback ok"><b>Session done.</b>${s.done} cards reviewed.</div>` : ''}
      <div class="deckpick" role="group" aria-label="Deck">
        ${[['all', 'All'], ['vocab', 'Vocabulary'], ['grammar', 'Grammar']].map(([k, lab]) => `<button class="seg" data-deck="${k}" aria-pressed="${deck === k}">${lab}</button>`).join('')}
      </div>
      <div class="panel stack">
        <div class="stats3">
          <div class="stat"><b>${c.due}</b><span>due now</span></div>
          <div class="stat"><b>${c.fresh}</b><span>new today</span></div>
          <div class="stat"><b>${total}</b><span>cards unlocked</span></div>
        </div>
        <button class="btn wide" data-startcards ${c.due + c.fresh ? '' : 'disabled'}>${c.due + c.fresh ? 'Start review' : 'Nothing due'}</button>
        ${total ? '' : '<p class="small muted" style="margin:0">Cards unlock when you start a lecture.</p>'}
      </div>
      <div class="panel">
        <div class="setting"><label for="cardDir">Direction for vocabulary<small>Grammar cards always show the question first.</small></label>
          <select class="field" id="cardDir"><option value="both" ${P.settings.cardDir === 'both' ? 'selected' : ''}>Both</option><option value="la-en" ${P.settings.cardDir === 'la-en' ? 'selected' : ''}>${esc(course.name)} → ${otherLang()}</option><option value="en-la" ${P.settings.cardDir === 'en-la' ? 'selected' : ''}>${otherLang()} → ${esc(course.name)}</option></select></div>
        <div class="setting"><label for="newPerDay">New cards per day</label>
          <select class="field" id="newPerDay">${[5, 10, 15, 20, 30, 50].map(n => `<option ${P.settings.newPerDay === n ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
      </div>
      <p class="small muted">Spacing: a card you know moves up a box and returns after 1, 2, 4, 8, 16, 32 then 64 days. “Again” sends it back to the start.</p>`;
  }
  function startCards(deck) {
    const q = shuffle(dueCards(deck)).concat(shuffle(newCards(deck)));
    ui.cards = { deck, queue: q, done: 0, flipped: false, again: new Set() };
  }

  // ----- reference -----
  const coursePages = () => registry.pages.filter(p => p.courses === '*' || p.courses.includes(course.id));
  function viewRef() {
    const pages = [{ id: 'glossary', title: 'Glossary' }, { id: 'tables', title: 'Tables' }].concat(coursePages());
    if (!pages.find(p => p.id === ui.refPage)) ui.refPage = 'glossary';
    const nav = `<nav class="chips refnav" aria-label="Reference pages">${pages.map(p => `<button class="chip" data-refpage="${p.id}" ${ui.refPage === p.id ? 'aria-current="true"' : ''}>${esc(p.title)}</button>`).join('')}</nav>`;
    const page = pages.find(p => p.id === ui.refPage);
    if (page.kind === 'dates') return nav + viewDates(page);
    if (page.kind === 'timeline') return nav + viewTimeline(page);
    if (page.kind === 'map') return nav + viewMap(page);
    return nav + viewGlossary(ui.refPage === 'tables');
  }
  function glossHits() {
    const q = spell(stripMacrons(ui.ref.toLowerCase().trim()));
    const all = lectures().flatMap(l => l.vocab.map(v => Object.assign({ lnum: l.number }, v)));
    const hits = q ? all.filter(v => spell(stripMacrons((v.la + ' ' + v.en + ' ' + (v.de || '')).toLowerCase())).includes(q)) : all;
    return hits.sort((a, b) => stripMacrons(a.head.replace(/^-/, '')).localeCompare(stripMacrons(b.head.replace(/^-/, ''))));
  }
  const hitCount = n => `Glossary · ${n} ${n === 1 ? 'entry' : 'entries'}`;
  // While typing in the search box only the list is rebuilt, once typing pauses, so the box itself is never replaced.
  let searchTimer = null;
  function showHits() { const c = $('#refcount'), h = $('#refhits'); if (!c || !h) return; const hits = glossHits(); c.textContent = hitCount(hits.length); h.innerHTML = vocabList(hits); }
  function viewGlossary(tablesOnly) {
    const hits = tablesOnly ? [] : glossHits();
    const tables = lectures().flatMap(l => (l.reference || []).map(t => `
      <div class="gblock"><h3 class="gt">${M(esc(t.title))} <span class="small muted">· ${lnum(l)}</span></h3>
      <div class="tablewrap"><table><thead><tr>${t.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>${t.rows.map(r => `<tr><th>${esc(r[0])}</th>${r.slice(1).map(c => `<td class="la">${M(esc(c))}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`)).join('');
    if (tablesOnly) return `<section>${tables || '<p class="muted">No tables yet.</p>'}</section>`;
    return `
      <div class="search"><input class="field" id="refsearch" type="search" placeholder="Search ${esc(course.name)}, English${course.reverseFrom === 'de' ? ' or German' : ''}" value="${esc(ui.ref)}" autocomplete="off" autocapitalize="off" spellcheck="false"></div>
      <section><p class="eyebrow" id="refcount">${hitCount(hits.length)}</p><div id="refhits">${vocabList(hits)}</div></section>`;
  }

  // ----- date converter (church calendar) -----
  const fl = Math.floor;
  const jdnJ = (y, m, d) => { const a = fl((14 - m) / 12), Y = y + 4800 - a, Mo = m + 12 * a - 3; return d + fl((153 * Mo + 2) / 5) + 365 * Y + fl(Y / 4) - 32083; };
  const jdnG = (y, m, d) => { const a = fl((14 - m) / 12), Y = y + 4800 - a, Mo = m + 12 * a - 3; return d + fl((153 * Mo + 2) / 5) + 365 * Y + fl(Y / 4) - fl(Y / 100) + fl(Y / 400) - 32045; };
  const fromJ = J => { const c = J + 32082, d = fl((4 * c + 3) / 1461), e = c - fl(1461 * d / 4), m = fl((5 * e + 2) / 153); return { y: d - 4800 + fl(m / 10), m: m + 3 - 12 * fl(m / 10), d: e - fl((153 * m + 2) / 5) + 1 }; };
  const fromG = J => { const a = J + 32044, b = fl((4 * a + 3) / 146097), c = a - fl(146097 * b / 4), d = fl((4 * c + 3) / 1461), e = c - fl(1461 * d / 4), m = fl((5 * e + 2) / 153); return { y: 100 * b + d - 4800 + fl(m / 10), m: m + 3 - 12 * fl(m / 10), d: e - fl((153 * m + 2) / 5) + 1 }; };
  function easter(y, greg) {
    if (!greg) { const a = y % 4, b = y % 7, c = y % 19, d = (19 * c + 15) % 30, e = (2 * a + 4 * b - d + 34) % 7; return { y, m: fl((d + e + 114) / 31), d: ((d + e + 114) % 31) + 1 }; }
    const a = y % 19, b = fl(y / 100), c = y % 100, d = fl(b / 4), e = b % 4, f = fl((b + 8) / 25), g = fl((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30,
      i = fl(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = fl((a + 11 * h + 22 * l) / 451);
    return { y, m: fl((h + l - 7 * m + 114) / 31), d: ((h + l - 7 * m + 114) % 31) + 1 };
  }
  window.ViatorCalendar = { jdnJ, jdnG, fromJ, fromG, easter };   // exposed for testing
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  function feastJdn(page, st) {
    const greg = st.cal === 'g', J = greg ? jdnG : jdnJ, f = page.feasts.find(x => x.id === st.feast);
    let j;
    if (f.easter !== undefined) { const e = easter(st.year, greg); j = J(e.y, e.m, e.d) + f.easter; }
    else {
      const leap = greg ? (st.year % 4 === 0 && (st.year % 100 !== 0 || st.year % 400 === 0)) : st.year % 4 === 0;
      j = J(st.year, f.m, f.d + (f.leapShift && leap ? 1 : 0));
    }
    const base = j;
    switch (st.rel) {
      case 'before': j -= 1; break;
      case 'after': j += 1; break;
      case 'octave': j += 7; break;
      case 'wdbefore': do { j -= 1; } while (j % 7 !== Number(st.wd)); break;
      case 'wdafter': do { j += 1; } while (j % 7 !== Number(st.wd)); break;
    }
    return { j, base, f };
  }
  function fmtDate(j, greg) { const x = (greg ? fromG : fromJ)(j); return `${WEEKDAYS[j % 7]}, ${x.d} ${MONTHS[x.m - 1]} ${x.y}`; }
  function viewDates(page) {
    const st = ui.dates = ui.dates || { year: 1400, cal: 'j', feast: page.defaultFeast || page.feasts[0].id, rel: 'on', wd: '6' };
    const greg = st.cal === 'g';
    const name = f => [f.de || f.en, f.la ? `(${f.la})` : ''].filter(Boolean).join(' ');
    const opt = list => list.map(f => `<option value="${f.id}" ${f.id === st.feast ? 'selected' : ''}>${esc(name(f))}${f.easter === undefined ? ` · ${f.d} ${MONTHS[f.m - 1].slice(0, 3)}` : ''}</option>`).join('');
    let out = '';
    if (st.year >= 300 && st.year <= 2200) {
      const r = feastJdn(page, st), e = easter(st.year, greg);
      const rel = { on: '', before: 'The day before ', after: 'The day after ', octave: 'The octave (one week after) of ', wdbefore: `The ${WEEKDAYS[st.wd]} before `, wdafter: `The ${WEEKDAYS[st.wd]} after ` }[st.rel];
      out = `<div class="panel stack" aria-live="polite">
        <p class="eyebrow">Result</p>
        <p class="today lead" style="margin:0">${fmtDate(r.j, greg)}</p>
        <p class="small" style="margin:0">${esc(rel)}${esc(name(r.f))}${st.rel !== 'on' ? `, which fell on ${fmtDate(r.base, greg)}` : ''}. ${greg ? 'Gregorian' : 'Julian'} calendar.</p>
        <p class="small muted" style="margin:0">Same day in the ${greg ? 'Julian' : 'Gregorian'} calendar${greg ? '' : ' (proleptic, as modern reference works convert)'}: ${fmtDate(r.j, !greg)}.</p>
        <p class="small muted" style="margin:0">Easter ${st.year}: ${e.d} ${MONTHS[e.m - 1]}${r.f.mnd ? ` · Middle Low German: <span class="la">${esc(r.f.mnd)}</span>` : ''}</p>
      </div>`;
    } else out = `<p class="small muted">Enter a year between 300 and 2200.</p>`;
    const wd = page.weekdays && page.weekdays[course.id];
    return `
      <h2 class="section">${esc(page.title)}</h2>
      <p class="small muted" style="margin:0">${page.intro || ''}</p>
      <div class="panel stack">
        <div class="setting"><label for="dYear">Year (AD)</label><input class="field" id="dYear" type="number" inputmode="numeric" min="300" max="2200" value="${st.year}" style="width:7em"></div>
        <div class="setting"><label for="dCal">Calendar<small>${esc(page.calendarNote || '')}</small></label><select class="field" id="dCal"><option value="j" ${!greg ? 'selected' : ''}>Julian</option><option value="g" ${greg ? 'selected' : ''}>Gregorian</option></select></div>
        <label class="small" for="dFeast">Feast</label>
        <select class="field" id="dFeast" style="width:100%"><optgroup label="Fixed feasts">${opt(page.feasts.filter(f => f.easter === undefined))}</optgroup><optgroup label="Movable feasts (from Easter)">${opt(page.feasts.filter(f => f.easter !== undefined))}</optgroup></select>
        <label class="small" for="dRel">Day</label>
        <select class="field" id="dRel" style="width:100%">${[['on', 'On the feast itself'], ['before', 'The day before'], ['after', 'The day after'], ['octave', 'The octave (one week after)'], ['wdbefore', 'A weekday before the feast'], ['wdafter', 'A weekday after the feast']].map(([k, l]) => `<option value="${k}" ${st.rel === k ? 'selected' : ''}>${l}</option>`).join('')}</select>
        ${st.rel.startsWith('wd') ? `<label class="small" for="dWd">Weekday</label><select class="field" id="dWd" style="width:100%">${WEEKDAYS.map((w, i) => `<option value="${i}" ${String(i) === String(st.wd) ? 'selected' : ''}>${w}${wd ? ` · ${esc(wd[i])}` : ''}</option>`).join('')}</select>` : ''}
      </div>
      ${out}
      ${wd ? `<div class="panel"><p class="eyebrow">Weekdays in the sources</p><dl class="kv">${WEEKDAYS.map((w, i) => `<dt>${w}</dt><dd class="la">${esc(wd[i])}</dd>`).join('')}</dl>${page.weekdayNote ? `<p class="small muted" style="margin:8px 0 0">${esc(page.weekdayNote)}</p>` : ''}</div>` : ''}
      <div class="prose small">${page.notes || ''}</div>`;
  }

  // ----- timeline -----
  function viewTimeline(page) {
    const tags = [['all', 'All']].concat(page.tags || []);
    const t = ui.tlTag || 'all';
    const ev = page.events.filter(e => t === 'all' || e.tag === t);
    return `
      <h2 class="section">${esc(page.title)}</h2>
      ${page.intro ? `<p class="small muted" style="margin:0">${page.intro}</p>` : ''}
      ${tags.length > 2 ? `<div class="deckpick${tags.length === 4 ? ' two' : ''}" role="group" aria-label="Filter">${tags.map(([k, l]) => `<button class="seg" data-tltag="${k}" aria-pressed="${t === k}">${esc(l)}</button>`).join('')}</div>` : ''}
      <ol class="timeline">${ev.map(e => `<li><span class="yr">${esc(e.year)}</span><div><b>${M(esc(e.title))}</b><div class="tltext">${M(e.text)}</div></div></li>`).join('')}</ol>`;
  }

  // ----- map -----
  function viewMap(page) {
    const p = page.projection, cosr = Math.cos(p.latRef * Math.PI / 180);
    const xy = t => [(t.lon - p.lonMin) * cosr * p.k, (p.latMax - t.lat) * p.k];
    const sel = page.places.find(t => t.id === ui.mapSel);
    const marks = page.places.slice().sort((a, b) => (a.major ? 1 : 0) - (b.major ? 1 : 0)).map(t => { const [x, y] = xy(t); const on = sel && sel.id === t.id;
      const shape = t.kind === 'kontor' ? `<rect x="${x - 6}" y="${y - 6}" width="12" height="12" class="mk kontor${on ? ' on' : ''}"/>` : `<circle cx="${x}" cy="${y}" r="${t.major ? 6 : 4.5}" class="mk${on ? ' on' : ''}"/>`;
      return `<g class="place" data-place="${t.id}" role="button" tabindex="0" aria-label="${esc(t.name)}">${shape}<text x="${x + (t.dx || 9)}" y="${y + (t.dy || 4)}" class="lbl${t.major ? ' major' : ''}" ${t.anchor ? `text-anchor="${t.anchor}"` : ''}>${esc(t.name)}</text><circle cx="${x}" cy="${y}" r="10" class="hit"/></g>`; }).join('');
    const groups = page.groups || [];
    return `
      <h2 class="section">${esc(page.title)}</h2>
      ${page.intro ? `<p class="small muted" style="margin:0">${page.intro}</p>` : ''}
      <div class="mapwrap"><svg viewBox="0 0 ${p.width} ${p.height}" class="map" role="img" aria-label="${esc(page.title)}">
        <rect width="${p.width}" height="${p.height}" class="sea"/><path d="${page.land}" class="land"/>${marks}</svg></div>
      <p class="small muted" style="margin:0">● town &nbsp; ■ Kontor (foreign office). Scroll sideways to see the whole map; tap a place.</p>
      ${sel ? `<div class="panel stack" aria-live="polite"><p class="eyebrow">${esc(sel.group || '')}</p><p class="today lead" style="margin:0">${esc(sel.name)}${sel.today ? ` <span class="small muted">· today ${esc(sel.today)}</span>` : ''}</p>${sel.mnd ? `<p class="small" style="margin:0">In the sources: <span class="la">${esc(sel.mnd)}</span></p>` : ''}<div class="prose" style="margin:0">${sel.note}</div></div>` : ''}
      ${groups.map(g => `<div class="panel"><p class="eyebrow">${esc(g)}</p><div class="row">${page.places.filter(t => t.group === g).map(t => `<button class="chip" data-place="${t.id}" ${sel && sel.id === t.id ? 'aria-current="true"' : ''}>${esc(t.name)}</button>`).join('')}</div></div>`).join('')}
      ${page.credit ? `<p class="small muted">${page.credit}</p>` : ''}`;
  }

  // ----- progress & settings -----
  function viewProgress() {
    const c = courseP(course.id);
    const boxes = Array(8).fill(0); Object.values(c.cards).forEach(s => boxes[s.box]++);
    const max = Math.max(1, ...boxes);
    const weakCards = Object.entries(c.cards).filter(([, s]) => s.lapses > 0).sort((a, b) => b[1].lapses - a[1].lapses).slice(0, 8);
    const allCards = Object.fromEntries(lectures().flatMap(cardsForLecture).map(k => [k.id, k]));
    const allItems = Object.fromEntries(lectures().flatMap(l => l.exercises.concat(l.test.items, (l.reading && l.reading.questions) || []).map(i => [l.id + ':' + i.id, i])));
    const weakItems = Object.entries(c.misses).sort((a, b) => b[1] - a[1]).slice(0, 6).filter(([k]) => allItems[k]);
    const lrows = lectures().map(l => { const lp = c.lectures[l.id]; return `<dt>${lnum(l)} · <span class="la">${M(esc(l.title))}</span></dt><dd>${lp && lp.testBest != null ? lp.testBest + '%' : '–'}</dd>`; }).join('');
    const itemLabel = i => i.source || i.prompt.replace(/<[^>]+>/g, '');
    const backupText = ui.showBackup ? JSON.stringify(exportObj()) : '';
    return `
      <h2 class="section">Progress</h2>
      <div class="panel stack">
        <p class="eyebrow">Flashcards by box</p>
        <div class="boxes" role="img" aria-label="Number of cards in each box">${boxes.map((n, i) => `<div><span>${n}</span><i style="height:${Math.round(60 * n / max)}%"></i><span>${i === 0 ? 'new' : i}</span></div>`).join('')}</div>
        <p class="small muted" style="margin:0">Box 3 and above counts as well known.</p>
      </div>
      <div class="panel"><p class="eyebrow">Lecture tests · best score</p><dl class="kv">${lrows}</dl></div>
      ${weakCards.length || weakItems.length ? `<div class="panel stack"><p class="eyebrow">Needs work</p>
        ${weakCards.map(([id, s]) => allCards[id] ? `<div class="row" style="justify-content:space-between"><span class="${allCards[id].latinFront ? 'la' : ''}">${M(esc(allCards[id].front))}</span><span class="small muted">${s.lapses}× again</span></div>` : '').join('')}
        ${weakItems.map(([k, n]) => `<div class="row" style="justify-content:space-between"><span class="small">${M(esc(itemLabel(allItems[k])))}</span><span class="small muted">${n}× missed</span></div>`).join('')}
      </div>` : ''}

      <div class="panel stack" id="backup">
        <p class="eyebrow">Backup</p>
        <p class="small" style="margin:0">Your progress is stored only in this browser on this phone. Clearing website data in Safari settings deletes it. Save a backup file to Files or iCloud Drive regularly.</p>
        <p class="small muted" style="margin:0">Last backup: ${P.lastExport ? new Date(P.lastExport).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'never'}</p>
        <div class="row"><button class="btn" data-export>Save backup file</button><button class="btn quiet" data-copybackup>Copy backup text</button></div>
        ${ui.showBackup ? `<textarea class="field small" id="backuptext" readonly>${esc(backupText)}</textarea>` : ''}
        <details id="restore" ${ui.confirmImport || ui.restoreOpen ? 'open' : ''}><summary class="small">Restore from a backup</summary>
          <div class="stack" style="margin-top:10px">
            <label class="small" for="importfile">Choose a backup file</label>
            <input type="file" id="importfile" accept=".json,application/json,text/plain">
            <label class="small" for="importtext">or paste backup text</label>
            <textarea class="field small" id="importtext" placeholder='{"app":"viator", …}'></textarea>
            <button class="btn quiet" data-importtext>Read pasted text</button>
            ${ui.confirmImport ? `<div class="feedback no" id="confirmimport"><b>Replace current progress?</b>The backup is from ${esc(new Date(ui.confirmImport.exportedAt).toLocaleString('en-GB'))}. Everything stored now will be overwritten.<div class="row" style="margin-top:8px"><button class="btn danger" data-doimport>Replace</button><button class="btn quiet" data-cancelimport>Cancel</button></div></div>` : ''}
          </div></details>
      </div>

      <div class="panel">
        <p class="eyebrow">Settings</p>
        <div class="setting"><label for="sMac">Show ${esc(markName())}<small>Long-vowel marks: ${esc(course.lengthMarkExample || 'ā ē ī ō ū')}</small></label><input type="checkbox" class="switch" id="sMac" ${P.settings.macronsShown ? 'checked' : ''}></div>
        <div class="setting"><label for="sStrict">Require ${esc(markName())} in answers<small>Off: a missing mark still counts as right, with a reminder.</small></label><input type="checkbox" class="switch" id="sStrict" ${P.settings.strictMacrons ? 'checked' : ''} ${P.settings.macronsShown ? '' : 'disabled'}></div>
        <div class="setting"><label for="sText">Text size<small>Applies to the whole app.</small></label><select class="field" id="sText">${[['s', 'Small'], ['m', 'Medium'], ['l', 'Large'], ['xl', 'Extra large']].map(([k, n]) => `<option value="${k}" ${P.settings.textSize === k ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
        <div class="setting"><label for="sBackup">Backup reminder</label><select class="field" id="sBackup">${[3, 7, 14, 30].map(n => `<option value="${n}" ${P.settings.backupDays === n ? 'selected' : ''}>every ${n} days</option>`).join('')}</select></div>
        <div class="setting"><label>App version ${BUILD}<small>Updates install by themselves when you are online. Use this if a change has not arrived.</small></label><button class="btn quiet" data-update>Check for updates</button></div>
        <div class="setting"><label>Reload app files<small>Discards the stored copy of the app and downloads it again. Your progress is kept.</small></label><button class="btn quiet" data-hardreload>${ui.confirmHard ? 'Tap again to reload' : 'Reload'}</button></div>
        <div class="setting"><label>Reset ${esc(course.name)} progress<small>Cannot be undone; save a backup first.</small></label><button class="btn danger" data-reset>${ui.confirmReset ? 'Tap again to reset' : 'Reset'}</button></div>
      </div>
      <p class="small muted">Viātor · version ${BUILD} · progress format ${FORMAT}</p>`;
  }
  function exportObj() { return { app: 'viator', format: FORMAT, exportedAt: new Date().toISOString(), progress: P }; }
  async function doExport() {
    const text = JSON.stringify(exportObj(), null, 1);
    const name = `viator-backup-${new Date().toISOString().slice(0, 10)}.json`;
    try {
      const file = new File([text], name, { type: 'application/json' });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: 'Viātor backup' });
        P.lastExport = new Date().toISOString(); save(); render(); toast('Backup saved.'); return;
      }
    } catch (e) { if (e && e.name === 'AbortError') return; }
    try {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' })); a.download = name;
      document.body.appendChild(a); a.click(); a.remove();
      P.lastExport = new Date().toISOString(); save(); render();
      toast('If no file appeared, use Copy backup text.');
    } catch (e) { toast('Saving a file is blocked here. Use Copy backup text.'); }
  }
  async function copyBackup() {
    const text = JSON.stringify(exportObj());
    try { await navigator.clipboard.writeText(text); P.lastExport = new Date().toISOString(); save(); ui.showBackup = false; render(); toast('Backup copied. Paste it into Notes or a file.'); }
    catch (e) { ui.showBackup = true; render(); const t = $('#backuptext'); if (t) { t.focus(); t.select(); } toast('Select the text below and copy it.'); }
  }
  function readImport(text) {
    try {
      const o = JSON.parse(text);
      if (!o || o.app !== 'viator' || !o.progress) throw new Error();
      ui.confirmImport = o; render();
      const el = $('#confirmimport'); if (el) el.scrollIntoView({ block: 'center' });
    } catch (e) { toast('That is not a Viātor backup.'); }
  }

  // ---------- updates ----------
  // index.html calls this when a new version of the app has taken over. On the course page the app reloads at once;
  // anywhere else it offers to, so that an exercise, a test or a typed answer is not lost, and reloads when the
  // person next returns to the course page.
  let updatePending = false;
  window.Viator.updateReady = () => {
    if (ui.view === 'home' && !ui.confirmImport) { location.reload(); return; }
    updatePending = true;
    if ($('.updatebar')) return;
    const b = document.createElement('div'); b.className = 'updatebar'; b.setAttribute('role', 'status');
    b.innerHTML = '<span>A new version of the app is ready.</span><button class="btn quiet" data-reloadnow>Reload now</button>';
    document.body.appendChild(b);
  };

  // ---------- events ----------
  function go(view) {
    if (updatePending && view === 'home') { ui.view = 'home'; savePlace(); location.reload(); return; }
    ui.view = view; ui.gloss = null; render(); window.scrollTo(0, 0);
  }
  function openLecture(id, section) {
    ui.view = 'lecture'; ui.lectureId = id; ui.section = section || 'intro'; ui.ex = null; ui.gloss = null; ui.inline = {}; ui.readView = null; ui.open = {};
    const lp = lectureP(course.id, id); if (!lp.started) { lp.started = true; touchStreak(); save(); }
    P.courses[course.id].current = id; save();
    render(); window.scrollTo(0, 0);
  }

  function after() {
    const cp = $('#coursepick'); if (cp) cp.onchange = () => { switchCourse(cp.value); };
    // Choose a lecture: open it at its first unfinished section (or the introduction if all are done)
    const pl = $('#pickLecture'); if (pl) pl.onchange = () => { const l = findLecture(pl.value); if (!l) return; const lp = courseP(course.id).lectures[l.id]; const s = sectionsFor(l).find(x => !(lp && lp.sections[x.id])); openLecture(l.id, s ? s.id : 'intro'); };
    const rs = $('#refsearch');
    if (rs) rs.oninput = () => { ui.ref = rs.value; clearTimeout(searchTimer); searchTimer = setTimeout(showHits, 150); };
    const bind = (id, fn) => { const el = $('#' + id); if (el) el.onchange = () => { fn(el); save(); render(); }; };
    bind('cardDir', el => P.settings.cardDir = el.value);
    bind('newPerDay', el => P.settings.newPerDay = Number(el.value));
    bind('sMac', el => { P.settings.macronsShown = el.checked; });
    bind('sStrict', el => { P.settings.strictMacrons = el.checked; });
    bind('sText', el => { P.settings.textSize = el.value; });
    bind('sBackup', el => { P.settings.backupDays = Number(el.value); });
    const dbind = (id, key, num) => { const el = $('#' + id); if (el) el.onchange = () => { ui.dates[key] = num ? Number(el.value) : el.value; const y = window.scrollY; render(); window.scrollTo(0, y); }; };
    dbind('dYear', 'year', true); dbind('dCal', 'cal'); dbind('dFeast', 'feast'); dbind('dRel', 'rel'); dbind('dWd', 'wd');
    const rd = $('#restore'); if (rd) rd.ontoggle = () => { ui.restoreOpen = rd.open; };
    const f = $('#importfile');
    if (f) f.onchange = () => { const file = f.files[0]; if (!file) return; const r = new FileReader(); r.onload = () => readImport(r.result); r.readAsText(file); };
    // Return checks the answer (translations are one sentence, so no line breaks are needed); in a table it moves on to the next box
    const ans = $('#ans'); if (ans && !ans.readOnly && ui.view === 'lecture') ans.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); checkItem(); } });
    const cells = [...document.querySelectorAll('[data-cell]')];
    cells.forEach((c, i) => { if (!c.readOnly) c.addEventListener('keydown', e => { if (e.key !== 'Enter' || e.isComposing) return; e.preventDefault(); if (cells[i + 1]) cells[i + 1].focus(); else checkItem(); }); });
    // after an answer is checked, bring the feedback and the Next button into view (above the tab bar)
    if (ui.reveal) { ui.reveal = false; const nb = $('[data-next-item]'), tabs = $('.tabs');
      if (nb && tabs) { const limit = tabs.getBoundingClientRect().top - 12, b = nb.getBoundingClientRect().bottom;
        if (b > limit) window.scrollBy({ top: b - limit, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); } }
    // header height, for the sticky search bar and for jumping to a grammar section
    const top = $('.top'); if (top) document.documentElement.style.setProperty('--top-h', top.offsetHeight + 'px');
    markWide();
  }

  // Pictures: if one image size fails to load, try the next listed in data-fallbacks; if all fail, say so.
  document.addEventListener('error', e => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement) || !img.classList.contains('fig-img')) return;
    const rest = (img.dataset.fallbacks || '').split('|').filter(Boolean);
    if (rest.length) { img.dataset.fallbacks = rest.slice(1).join('|'); img.src = rest[0]; return; }
    const note = document.createElement('p'); note.className = 'fig-missing';
    note.textContent = navigator.onLine === false ? 'Picture not available offline. It appears once you have viewed it online.' : 'The picture could not be loaded. Use the link below to see it on Wikimedia Commons.';
    img.replaceWith(note);
  }, true);

  // Tables wider than the screen scroll sideways; a fade at the right edge shows that there is more, until the end is reached.
  function markWide(root = document) {
    root.querySelectorAll('.tablewrap').forEach(w => {
      const set = () => w.classList.toggle('more', w.scrollWidth - w.clientWidth - w.scrollLeft > 2);
      set(); if (!w.dataset.wide) { w.dataset.wide = '1'; w.addEventListener('scroll', set, { passive: true }); }
    });
  }
  window.addEventListener('resize', () => markWide());
  // Folding panels (translation, notes, the note on the source) stay open when the page is redrawn, e.g. after tapping a word.
  document.addEventListener('toggle', e => { const d = e.target; if (d.dataset && d.dataset.keep) ui.open[d.dataset.keep] = d.open; if (d.open) markWide(d); }, true);
  // A touch listener makes Safari show the pressed state of buttons (:active); it also tells the place restore that the person has scrolled.
  let touched = false;
  document.addEventListener('touchstart', () => { touched = true; }, { passive: true });

  // ---------- keeping the place ----------
  // iOS may restart a home-screen app that has been in the background for a while. The current place (course, page,
  // lecture section, scroll position, an exercise or test in progress) is kept on this phone only, outside the progress
  // and the backups, and restored if the app starts again within PLACE_HOURS. After that it opens on the course page.
  const PLACE_KEY = 'viator.place', PLACE_HOURS = 4;
  function savePlace(keepScroll = true) {
    if (!course) return;
    const pl = { t: Date.now(), course: course.id, view: ui.view, lectureId: ui.lectureId, section: ui.section, readView: ui.readView, refPage: ui.refPage,
      ref: ui.ref, open: ui.open, inline: ui.inline, scroll: keepScroll === true ? Math.round(window.scrollY) : 0, ex: ui.view === 'lecture' && ui.ex && ui.ex.lid === ui.lectureId ? ui.ex : null };
    try { localStorage.setItem(PLACE_KEY, JSON.stringify(pl)); } catch (e) {}
  }
  function restorePlace() {
    let pl = null; try { pl = JSON.parse(localStorage.getItem(PLACE_KEY) || 'null'); } catch (e) {}
    if (!pl || !(Date.now() - pl.t < PLACE_HOURS * 3600000) || pl.course !== course.id) return null;
    if (pl.view === 'lecture') {
      const l = findLecture(pl.lectureId); if (!l || !sectionsFor(l).some(s => s.id === pl.section)) return null;
      ui.lectureId = l.id; ui.section = pl.section; ui.readView = pl.readView || null; ui.inline = pl.inline || {};
      ui.ex = pl.ex && pl.ex.lid === l.id && Array.isArray(pl.ex.items) && pl.ex.items.length ? pl.ex : null;
    } else if (!['home', 'cards', 'ref', 'progress'].includes(pl.view)) return null;
    ui.view = pl.view; ui.refPage = pl.refPage || 'glossary'; ui.ref = pl.ref || ''; ui.open = pl.open || {};
    return pl.scroll || 0;
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') savePlace(); });
  window.addEventListener('pagehide', () => savePlace());

  let lastField = null;
  document.addEventListener('focusin', e => { if (e.target.matches('input[type=text], input:not([type]), textarea')) lastField = e.target; });
  // keep the keyboard open when tapping the special-character buttons
  document.addEventListener('pointerdown', e => { if (e.target.closest('[data-key]')) e.preventDefault(); });

  document.addEventListener('click', e => {
    const t = e.target.closest('button, [data-w], [data-place]'); if (!t) return;
    const d = t.dataset;
    if (d.key) { const fld = lastField && document.contains(lastField) ? lastField : $('#ans') || $('[data-cell]'); if (fld && !fld.readOnly) { const s = fld.selectionStart ?? fld.value.length, en = fld.selectionEnd ?? s; fld.value = fld.value.slice(0, s) + d.key + fld.value.slice(en); fld.focus(); fld.setSelectionRange(s + 1, s + 1); } return; }
    if (d.refpage) { ui.refPage = d.refpage; render(); window.scrollTo(0, 0); return; }
    if (d.tltag) { ui.tlTag = d.tltag; render(); return; }
    if (d.place) { ui.mapSel = ui.mapSel === d.place ? null : d.place; const y = window.scrollY; render(); window.scrollTo(0, y); return; }
    if (d.jump) { const el = document.getElementById(d.jump); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    if (d.go) { go(d.go); if (d.anchor) setTimeout(() => { const el = $('#' + d.anchor); if (el) el.scrollIntoView(); }, 0); return; }
    if (d.lecture) { openLecture(d.lecture, d.section); return; }
    if (d.section && ui.view === 'lecture' && t.classList.contains('chip')) { ui.section = d.section; ui.gloss = null; ui.open = {}; render(); window.scrollTo(0, 0); return; }
    if (d.done !== undefined && d.done !== '') {
      const lp = lectureP(course.id, ui.lectureId); lp.sections[d.done] = true; touchStreak(); save();
      if (d.next) { ui.section = d.next; ui.gloss = null; ui.open = {}; render(); window.scrollTo(0, 0); } else go('home');
      return;
    }
    if (d.start) { startRun(d.start, findLecture(ui.lectureId)); render(); return; }
    if (d.speak) { speak(d.speak); return; }
    if (d.rview) { ui.readView = d.rview; ui.gloss = null; const y = window.scrollY; render(); window.scrollTo(0, y); return; }
    if (d.w !== undefined) { ui.gloss = ui.gloss === Number(d.w) ? null : Number(d.w); const y = window.scrollY; render(); window.scrollTo(0, y); return; }
    if (d.inline) { ui.inline = ui.inline || {}; ui.inline[d.inline] = Number(d.i); const l = findLecture(ui.lectureId); const q = l.reading.questions.find(q => q.id === d.inline); recordResult(l.id + ':' + q.id, Number(d.i) === q.answer); const y = window.scrollY; render(); window.scrollTo(0, y); return; }

    // exercise interactions
    if (ui.ex && ui.view === 'lecture') {
      const x = ui.ex, item = x.items[x.i];
      if (d.choice !== undefined && !(x.state && x.state.checked)) {
        const ok = Number(d.choice) === item.answer;
        x.state = { checked: true, ok, choice: Number(d.choice) }; if (ok) x.score++;
        recordResult(lectureQualified(item), ok); ui.reveal = true; render(); return;
      }
      if (t.hasAttribute('data-check')) { checkItem(); return; }
      if (t.hasAttribute('data-next-item')) { nextItem(); return; }
      if (t.hasAttribute('data-override')) { x.state.ok = true; x.state.overridden = true; x.score++; const m = courseP(course.id).misses, k = lectureQualified(item); if (m[k]) m[k]--; save(); render(); return; }
      if (d.ml !== undefined) { x.state.sel = Number(d.ml); x.state.miss = null; render(); return; }
      if (d.mr !== undefined && x.state.sel != null) {
        const st = x.state, r = Number(d.mr);
        if (r === st.sel) { st.done.push(r); st.sel = null; st.miss = null; } else { st.misses++; st.miss = r; }
        if (st.done.length === item.pairs.length) { st.checked = true; st.ok = st.misses === 0; if (st.ok) x.score++; recordResult(lectureQualified(item), st.ok); ui.reveal = true; }
        render(); return;
      }
      if (d.ob !== undefined) { x.state.line.push(Number(d.ob)); render(); return; }
      if (d.ol !== undefined) { x.state.line = x.state.line.filter(i => i !== Number(d.ol)); render(); return; }
    }

    // flashcards
    if (d.deck) { ui.cards = { deck: d.deck, queue: [], done: 0 }; render(); return; }
    if (t.hasAttribute('data-startcards')) { startCards((ui.cards && ui.cards.deck) || 'all'); render(); return; }
    if (t.hasAttribute('data-flip')) { ui.cards.flipped = true; render(); return; }
    if (d.grade) {
      const s = ui.cards, card = s.queue.shift();
      gradeCard(card, d.grade);
      if (d.grade === 'again' && !s.again.has(card.id)) { s.again.add(card.id); s.queue.push(card); }
      s.done++; s.flipped = false; render(); return;
    }
    if (t.hasAttribute('data-endcards')) { ui.cards.queue = []; render(); return; }

    // notices
    if (t.hasAttribute('data-reloadnow')) { location.reload(); return; }
    if (t.hasAttribute('data-dismissdamaged')) { damaged = null; render(); return; }
    if (t.hasAttribute('data-startafresh')) { damaged = null; holdSaves = false; save(); render(); toast('Started afresh.'); return; }

    // updates
    if (t.hasAttribute('data-update')) {
      if (!('serviceWorker' in navigator)) { toast('Updates are not available here.'); return; }
      navigator.serviceWorker.getRegistration().then(r => {
        if (!r) { toast('Updates work in the installed app only.'); return; }
        toast('Checking…');
        r.update().then(() => setTimeout(() => toast(r.installing || r.waiting ? 'New version found. It will be ready in a moment.' : 'You have the latest version.'), 1500))
          .catch(() => toast('Could not reach the server. Are you online?'));
      });
      return;
    }
    if (t.hasAttribute('data-hardreload')) {
      if (!ui.confirmHard) { ui.confirmHard = true; render(); setTimeout(() => { ui.confirmHard = false; }, 4000); return; }
      const done = () => location.reload();
      Promise.resolve()
        .then(() => window.caches ? caches.keys().then(ks => Promise.all(ks.map(k => caches.delete(k)))) : null)
        .then(() => navigator.serviceWorker ? navigator.serviceWorker.getRegistrations().then(rs => Promise.all(rs.map(r => r.unregister()))) : null)
        .then(done, done);
      return;
    }
    // backup
    if (t.hasAttribute('data-export')) { doExport(); return; }
    if (t.hasAttribute('data-copybackup')) { copyBackup(); return; }
    if (t.hasAttribute('data-importtext')) { readImport(($('#importtext') || {}).value || ''); return; }
    if (t.hasAttribute('data-cancelimport')) { ui.confirmImport = null; ui.restoreOpen = false; render(); return; }
    if (t.hasAttribute('data-doimport')) {
      P = migrate(ui.confirmImport.progress); ui.confirmImport = null; ui.restoreOpen = false;
      damaged = null; holdSaves = false; save();
      switchCourse(P.activeCourse || course.id).then(() => toast('Progress restored.')); return;
    }
    if (t.hasAttribute('data-reset')) {
      if (!ui.confirmReset) { ui.confirmReset = true; render(); setTimeout(() => { ui.confirmReset = false; }, 4000); return; }
      delete P.courses[course.id]; ui.confirmReset = false; save(); render(); toast(course.name + ' progress reset.'); return;
    }
  });
  document.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-w], [data-place]')) { e.preventDefault(); e.target.dispatchEvent(new MouseEvent('click', { bubbles: true })); } });

  function setCourse(id) {
    course = registry.catalogue.find(c => c.id === id) || registry.catalogue[0];
    P.activeCourse = course.id; ui.view = 'home'; ui.ex = null; ui.cards = null; ui.ref = ''; ui.readView = null; ui.refPage = 'glossary'; ui.mapSel = null; save();
  }
  // Each course's lecture files are loaded once; the current course first, the others in the background.
  const courseLoads = {};
  const loadCourse = c => courseLoads[c.id] = courseLoads[c.id] || loadScripts(c.lectures.map(f => CONTENT_BASE + f));
  async function switchCourse(id) {
    const c = registry.catalogue.find(x => x.id === id) || registry.catalogue[0];
    await loadCourse(c);
    setCourse(c.id); render(); window.scrollTo(0, 0);
  }

  // ---------- boot ----------
  async function boot() {
    load();
    try {
      await loadScript(CONTENT_BASE + 'catalogue.js');
    } catch (e) {
      root().innerHTML = `<div class="gutter" style="padding-block:40px"><p><b>Course files could not be loaded.</b></p><p class="small">${esc(e.message)}. Check the connection, or that the content folder sits next to index.html.</p></div>`;
      return;
    }
    const first = registry.catalogue.find(c => c.id === P.activeCourse) || registry.catalogue[0];
    await Promise.all([loadCourse(first), loadScripts(registry.shared.map(f => CONTENT_BASE + f))]);
    setCourse(first.id);
    // back to where the person was, if the app was restarted within a few hours (not when there is a problem to report)
    const y = damaged || missing.length ? null : restorePlace();
    render();
    if (y) {
      window.scrollTo(0, y);
      // pictures above the place may still be loading and push the text down: scroll again once they are in, unless the person has moved
      const imgs = [...document.querySelectorAll('main img')].filter(i => !i.complete);
      if (imgs.length) Promise.race([Promise.all(imgs.map(i => new Promise(r => { i.addEventListener('load', r); i.addEventListener('error', r); }))), new Promise(r => setTimeout(r, 2000))])
        .then(() => { if (!touched) window.scrollTo(0, y); });
    }
    registry.catalogue.forEach(loadCourse);   // the other courses, so that switching is instant
  }
  window.Viator._buildTest = id => buildTest(findLecture(id));   // for the tests
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
