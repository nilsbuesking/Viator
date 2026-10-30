/*
 * Viātor — the engine. Language-independent: everything about a language
 * comes from content/catalogue.js and the lecture files it lists.
 * Progress is stored in this browser (localStorage) and backed up by export.
 */
(function () {
  'use strict';

  const CONTENT_BASE = (document.currentScript && document.currentScript.dataset.content) || 'content/';
  const FORMAT = 1;                       // progress format version; bump + migrate() on change
  const STORE_KEY = 'viator.progress';
  const INTERVALS = [0, 1, 2, 4, 8, 16, 32, 64]; // Leitner box → days until next review

  // ---------- registry used by content files ----------
  const registry = { catalogue: [], lectures: {} };
  window.Viator = {
    setCatalogue(list) { registry.catalogue = list; },
    addLecture(courseId, lecture) {
      (registry.lectures[courseId] = registry.lectures[courseId] || []).push(lecture);
    }
  };

  // ---------- utilities ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const roman = n => ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'][n] || String(n);
  const stripMacrons = s => String(s).normalize('NFD').replace(/̄/g, '').normalize('NFC');
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
    // future: if (p.format === 1) { ...transform...; p.format = 2; }
    const base = freshProgress();
    p.settings = Object.assign(base.settings, p.settings || {});
    p.streak = p.streak || base.streak;
    p.courses = p.courses || {};
    p.format = FORMAT;
    return p;
  }
  let P;
  function load() {
    try { P = migrate(JSON.parse(localStorage.getItem(STORE_KEY))); } catch (e) { P = freshProgress(); }
    try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch (e) { /* not supported */ }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(P)); } catch (e) { /* storage unavailable: progress lives for this session only */ }
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
  const ui = { view: 'home', lectureId: null, section: 'intro', ex: null, cards: null, ref: '', confirmImport: null, gloss: null };
  let course = null;  // active course object from catalogue
  const lectures = () => (registry.lectures[course.id] || []).slice().sort((a, b) => a.number - b.number);
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
      fwd.push({ id: `v:${l.id}:${v.id}:f`, deck: 'vocab', dir: 'la-en', front: v.la, back: v.en, meta, latinFront: true, vid: v.id });
      rev.push({ id: `v:${l.id}:${v.id}:r`, deck: 'vocab', dir: 'en-la', front: v.en, back: v.la, meta, latinFront: false, vid: v.id });
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
    const clean = x => norm(x).replace(/'/g, '');
    const inp = f(clean(input));
    if (accepted.some(a => f(clean(a)) === inp)) return { ok: true, macron: false };
    const inpLoose = f(stripMacrons(clean(input)));
    const loose = accepted.some(a => f(stripMacrons(clean(a))) === inpLoose);
    if (loose) return { ok: !strict, macron: true };
    return { ok: false, macron: false };
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
  }

  // ----- home -----
  function backupDue() {
    const c = courseP(course.id);
    const hasProgress = Object.keys(c.cards).length || Object.keys(c.lectures).length;
    if (!hasProgress) return false;
    if (!P.lastExport) return true;
    return (Date.now() - new Date(P.lastExport).getTime()) / 86400000 >= P.settings.backupDays;
  }
  function nextStep() {
    const c = courseP(course.id);
    for (const l of lectures()) {
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
    const items = ls.map(l => {
      const lp = c.lectures[l.id], secs = sectionsFor(l);
      const done = lp ? secs.filter(s => lp.sections[s.id]).length : 0;
      const complete = done === secs.length;
      return `<button class="lect" data-lecture="${l.id}">
        <span class="num">${roman(l.number)}</span>
        <span><span class="t la">${M(esc(l.title))}</span><br><span class="s">${esc(l.subtitle)}</span>
          <span class="dots" aria-label="${done} of ${secs.length} sections done">${secs.map(s => `<i class="${lp && lp.sections[s.id] ? 'on' : ''}"></i>`).join('')}</span></span>
        <span class="pill ${complete ? 'done' : ''}">${complete ? 'Done' : `${l.minutes} min`}</span>
      </button>`;
    }).join('');
    const planned = (course.planned || []).map((t, i) => `<div class="lect planned"><span class="num">${roman(ls.length + i + 1)}</span><span><span class="t">${esc(t)}</span></span><span class="pill">Planned</span></div>`).join('');
    return `
      <section class="today panel">
        <p class="eyebrow">Today</p>
        ${step ? `<p class="today lead">${roman(step.l.number)} · ${esc(step.s.label)}</p>
          <button class="btn wide" data-lecture="${step.l.id}" data-section="${step.s.id}">${c.lectures[step.l.id] && c.lectures[step.l.id].started ? 'Continue' : 'Start lecture'}</button>`
          : `<p class="lead">All available lectures are done.</p>`}
        <div class="stats3">
          <div class="stat"><b>${due}</b><span>cards due</span></div>
          <div class="stat"><b>${fresh}</b><span>new cards</span></div>
          <div class="stat"><b>${P.streak.count && (P.streak.last >= today() - 1) ? P.streak.count : 0}</b><span>day streak</span></div>
        </div>
        ${due + fresh ? `<button class="btn ghost wide" data-go="cards">Review cards</button>` : ''}
      </section>
      ${backupDue() ? `<div class="nudge"><p>${P.lastExport ? 'Your last backup is over a week old.' : 'You haven’t made a backup yet.'} Progress lives only in this browser.</p><button class="btn quiet" data-go="progress" data-anchor="backup">Back up now</button></div>` : ''}
      <section>
        <p class="eyebrow">${esc(course.native || course.name)} · ${learned} words and forms well known</p>
        <div class="lectures">${items}${planned}</div>
      </section>`;
  }

  // ----- lecture -----
  function viewLecture() {
    const l = findLecture(ui.lectureId), lp = lectureP(course.id, l.id);
    const secs = sectionsFor(l);
    const chips = secs.map(s => `<button class="chip ${lp.sections[s.id] ? 'done' : ''}" data-section="${s.id}" ${ui.section === s.id ? 'aria-current="true"' : ''}><span class="tick"></span>${s.label}</button>`).join('');
    let body = '';
    switch (ui.section) {
      case 'intro': body = `<div class="prose">${M(l.intro)}</div>${l.culture ? `<div class="panel prose">${M(l.culture)}</div>` : ''}${doneBtn()}`; break;
      case 'pron': body = `<div class="prose">${M(l.pronunciation)}</div>${doneBtn()}`; break;
      case 'grammar': body = l.grammar.map(g => `<div class="gblock prose"><h3 class="gt">${M(esc(g.title))}</h3>${M(g.html)}</div>`).join('') + doneBtn(); break;
      case 'vocab': body = vocabList(l.vocab) + `<p class="small muted">These words are now in your flashcards.</p>` + doneBtn(); break;
      case 'practice': body = exerciseRunner('practice', l); break;
      case 'reading': body = viewReading(l); break;
      case 'test': body = exerciseRunner('test', l); break;
    }
    return `
      <div class="lhead"><span class="numeral">${roman(l.number)}</span>
        <div><p class="eyebrow">Lectiō</p><h1 class="la">${M(esc(l.title))}</h1><p>${esc(l.subtitle)}</p></div></div>
      <nav class="chips" aria-label="Lecture sections">${chips}</nav>
      <section class="stack" id="secbody">${body}</section>`;
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
        <span class="ven">${esc(v.en)}</span>
        ${v.stress && v.stress !== '—' ? `<span class="vstress">${M(esc(v.stress))}</span>` : ''}
        ${v.deriv ? `<span class="vnote">Compare: ${esc(v.deriv)}</span>` : ''}
        ${v.note ? `<span class="vnote">${M(esc(v.note))}</span>` : ''}
      </div>`).join('')}</div>`;
  }

  // ----- reading -----
  function viewReading(l) {
    const r = l.reading, lp = lectureP(course.id, l.id);
    const known = new Set();
    const parts = r.text.split(/([A-Za-zĀ-ſ̀-ͯ]+)/);
    const html = parts.map((p, i) => {
      if (i % 2 === 0) return esc(p);
      const key = p.toLowerCase(), g = r.glosses[key];
      const isNew = g && /\(new word\)|next lecture/.test(g);
      return g ? `<span class="w ${isNew ? 'new' : ''} ${ui.gloss === i ? 'sel' : ''}" data-w="${i}" role="button" tabindex="0">${M(esc(p))}</span>` : M(esc(p));
    }).join('');
    const sel = ui.gloss != null ? parts[ui.gloss] : null;
    const qs = (r.questions || []).map(q => inlineMC(q)).join('');
    return `
      <p class="eyebrow">${esc(r.note)}</p>
      <h2 class="section la">${M(esc(r.title))}</h2>
      <div class="reading" lang="${course.langTag}">${html}</div>
      ${sel ? `<div class="glossbox" aria-live="polite"><span class="la">${M(esc(sel))}</span> · ${M(esc(r.glosses[sel.toLowerCase()]))}</div>` : ''}
      <p class="small muted">Words underlined with dots are not yet in your vocabulary.</p>
      <details class="panel"><summary>Show translation</summary><p class="prose" style="margin-top:10px">${esc(r.translation)}</p></details>
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
    const vocab = sample(vocabPool, vq).map(v => {
      const same = vocabPool.filter(x => x.id !== v.id && x.pos.split(',')[0] === v.pos.split(',')[0]);
      const opts = shuffle([v.en, ...sample(same, 3).map(x => x.en)]);
      return { id: 'tv-' + v.id, type: 'mc', prompt: `<span class="la">${esc(v.head)}</span> means:`, options: opts, answer: opts.indexOf(v.en), explain: v.la + ': ' + v.en };
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
    if (st.macron) parts.push(`<span>With macrons: <span class="la">${esc(st.macronForm || '')}</span></span>`);
    if (item.model) parts.push(`<span>Model answer: <span class="${item.dir === 'en-la' ? 'la' : ''}">${M(esc(item.model))}</span></span>`);
    if (item.full && !st.ok) parts.push(`<span>Answer: <span class="la">${M(esc(item.full))}</span></span>`);
    if (item.explain) parts.push(`<span class="small">${M(esc(item.explain))}</span>`);
    return `<div class="feedback ${st.ok ? 'ok' : 'no'}" role="status">${parts.join('<br>')}</div>`;
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
          <input class="field ${st.checked ? (st.ok ? 'right' : 'wrong') : ''}" id="ans" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Type the ending" value="${esc(st.value || '')}" ${st.checked ? 'readonly' : ''} lang="${course.langTag}">
          ${st.checked ? '' : kbd()}${feedbackHtml(st, item)}${nextBtns(st, item)}`;
      case 'translate':
        return `<p class="eyebrow">${item.dir === 'la-en' ? 'Translate into English' : 'Translate into ' + esc(course.name)}</p>
          <p class="q ${item.dir === 'la-en' ? 'la' : ''}">${M(esc(item.source))}${item.dir === 'la-en' ? speakBtn(stripMacrons(item.source)) : ''}</p>
          <textarea class="field ${st.checked ? (st.ok ? 'right' : 'wrong') : ''}" id="ans" autocomplete="off" autocapitalize="sentences" spellcheck="false" ${st.checked ? 'readonly' : ''} lang="${item.dir === 'la-en' ? 'en' : course.langTag}">${esc(st.value || '')}</textarea>
          ${st.checked || item.dir === 'la-en' ? '' : kbd()}${feedbackHtml(st, item)}${nextBtns(st, item)}`;
      case 'paradigm':
        return `<p class="q">${M(item.prompt)}</p>
          <div class="tablewrap"><table class="ptable"><thead><tr><th></th>${item.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>
          ${item.rows.map((r, ri) => `<tr><th>${esc(r.label)}</th>${r.answers.map((a, ci) => {
            const k = ri + '-' + ci, cell = st.cells && st.cells[k];
            return `<td><input data-cell="${k}" class="${cell ? (cell.ok ? 'right' : 'wrong') : ''}" value="${esc((st.values && st.values[k]) || '')}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" ${st.checked ? 'readonly' : ''} lang="${course.langTag}" aria-label="${esc(r.label)} ${esc(item.headers[ci])}">${cell && (!cell.ok || cell.macron) ? `<span class="sol">${M(esc(a))}</span>` : ''}</td>`;
          }).join('')}</tr>`).join('')}</tbody></table></div>
          ${st.checked ? '' : kbd()}${feedbackHtml(st, {})}${nextBtns(st, item)}`;
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
      const r = item.dir === 'la-en' ? checkEnglish(st.value, item.accepted) : checkTarget(st.value, item.accepted, { orderFree: true });
      Object.assign(st, r, { macronForm: r.macron ? item.model : null });
    } else if (item.type === 'paradigm') {
      st.values = {}; st.cells = {}; let all = true, anyMac = false;
      document.querySelectorAll('[data-cell]').forEach(inp => {
        const k = inp.dataset.cell, [ri, ci] = k.split('-').map(Number);
        st.values[k] = inp.value;
        const r = checkTarget(inp.value, [item.rows[ri].answers[ci]]);
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
    render();
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
        <button class="card" data-flip aria-label="Show answer">
          <span class="meta">${card.deck === 'grammar' ? 'Grammar' : (card.dir === 'la-en' ? esc(course.name) + ' → English' : 'English → ' + esc(course.name))}${card.meta ? ' · ' + esc(card.meta) : ''}</span>
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
          <select class="field" id="cardDir"><option value="both" ${P.settings.cardDir === 'both' ? 'selected' : ''}>Both</option><option value="la-en" ${P.settings.cardDir === 'la-en' ? 'selected' : ''}>${esc(course.name)} → English</option><option value="en-la" ${P.settings.cardDir === 'en-la' ? 'selected' : ''}>English → ${esc(course.name)}</option></select></div>
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
  function viewRef() {
    const q = stripMacrons(ui.ref.toLowerCase().trim());
    const all = lectures().flatMap(l => l.vocab.map(v => Object.assign({ lnum: l.number }, v)));
    const hits = q ? all.filter(v => stripMacrons((v.la + ' ' + v.en).toLowerCase()).includes(q)) : all;
    hits.sort((a, b) => stripMacrons(a.head.replace(/^-/, '')).localeCompare(stripMacrons(b.head.replace(/^-/, ''))));
    const tables = lectures().flatMap(l => (l.reference || []).map(t => `
      <div class="gblock"><h3 class="gt">${M(esc(t.title))} <span class="small muted">· ${roman(l.number)}</span></h3>
      <div class="tablewrap"><table><thead><tr>${t.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>${t.rows.map(r => `<tr><th>${esc(r[0])}</th>${r.slice(1).map(c => `<td class="la">${M(esc(c))}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`)).join('');
    return `
      <div class="search"><input class="field" id="refsearch" type="search" placeholder="Search ${esc(course.name)} or English" value="${esc(ui.ref)}" autocomplete="off" autocapitalize="off" spellcheck="false"></div>
      <section><p class="eyebrow">Glossary · ${hits.length} ${hits.length === 1 ? 'entry' : 'entries'}</p><div id="refhits">${vocabList(hits)}</div></section>
      ${q ? '' : `<section><p class="eyebrow">Tables</p>${tables}</section>`}`;
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
    const lrows = lectures().map(l => { const lp = c.lectures[l.id]; return `<dt>${roman(l.number)} · <span class="la">${M(esc(l.title))}</span></dt><dd>${lp && lp.testBest != null ? lp.testBest + '%' : '–'}</dd>`; }).join('');
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
        <details><summary class="small">Restore from a backup</summary>
          <div class="stack" style="margin-top:10px">
            <label class="small" for="importfile">Choose a backup file</label>
            <input type="file" id="importfile" accept=".json,application/json,text/plain">
            <label class="small" for="importtext">or paste backup text</label>
            <textarea class="field small" id="importtext" placeholder='{"app":"viator", …}'></textarea>
            <button class="btn quiet" data-importtext>Read pasted text</button>
            ${ui.confirmImport ? `<div class="feedback no"><b>Replace current progress?</b>The backup is from ${esc(new Date(ui.confirmImport.exportedAt).toLocaleString('en-GB'))}. Everything stored now will be overwritten.<div class="row" style="margin-top:8px"><button class="btn danger" data-doimport>Replace</button><button class="btn quiet" data-cancelimport>Cancel</button></div></div>` : ''}
          </div></details>
      </div>

      <div class="panel">
        <p class="eyebrow">Settings</p>
        <div class="setting"><label for="sMac">Show macrons<small>Long-vowel marks: ā ē ī ō ū</small></label><input type="checkbox" class="switch" id="sMac" ${P.settings.macronsShown ? 'checked' : ''}></div>
        <div class="setting"><label for="sStrict">Require macrons in answers<small>Off: a missing macron still counts as right, with a reminder.</small></label><input type="checkbox" class="switch" id="sStrict" ${P.settings.strictMacrons ? 'checked' : ''} ${P.settings.macronsShown ? '' : 'disabled'}></div>
        <div class="setting"><label for="sText">Text size<small>Applies to the whole app.</small></label><select class="field" id="sText">${[['s', 'Small'], ['m', 'Medium'], ['l', 'Large'], ['xl', 'Extra large']].map(([k, n]) => `<option value="${k}" ${P.settings.textSize === k ? 'selected' : ''}>${n}</option>`).join('')}</select></div>
        <div class="setting"><label for="sBackup">Backup reminder</label><select class="field" id="sBackup">${[3, 7, 14, 30].map(n => `<option value="${n}" ${P.settings.backupDays === n ? 'selected' : ''}>every ${n} days</option>`).join('')}</select></div>
        <div class="setting"><label>Reset ${esc(course.name)} progress<small>Cannot be undone; save a backup first.</small></label><button class="btn danger" data-reset>${ui.confirmReset ? 'Tap again to reset' : 'Reset'}</button></div>
      </div>
      <p class="small muted">Viātor · progress format ${FORMAT}</p>`;
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
      const el = $('#backup'); if (el) el.scrollIntoView();
    } catch (e) { toast('That is not a Viātor backup.'); }
  }

  // ---------- events ----------
  function go(view) { ui.view = view; ui.gloss = null; render(); window.scrollTo(0, 0); }
  function openLecture(id, section) {
    ui.view = 'lecture'; ui.lectureId = id; ui.section = section || 'intro'; ui.ex = null; ui.gloss = null; ui.inline = {};
    const lp = lectureP(course.id, id); if (!lp.started) { lp.started = true; touchStreak(); save(); }
    P.courses[course.id].current = id; save();
    render(); window.scrollTo(0, 0);
  }

  function after() {
    const cp = $('#coursepick'); if (cp) cp.onchange = () => { setCourse(cp.value); render(); };
    const rs = $('#refsearch');
    if (rs) rs.oninput = () => { ui.ref = rs.value; render(); const n = $('#refsearch'); n.focus(); n.setSelectionRange(n.value.length, n.value.length); };
    const bind = (id, fn) => { const el = $('#' + id); if (el) el.onchange = () => { fn(el); save(); render(); }; };
    bind('cardDir', el => P.settings.cardDir = el.value);
    bind('newPerDay', el => P.settings.newPerDay = Number(el.value));
    bind('sMac', el => { P.settings.macronsShown = el.checked; });
    bind('sStrict', el => { P.settings.strictMacrons = el.checked; });
    bind('sText', el => { P.settings.textSize = el.value; });
    bind('sBackup', el => { P.settings.backupDays = Number(el.value); });
    const f = $('#importfile');
    if (f) f.onchange = () => { const file = f.files[0]; if (!file) return; const r = new FileReader(); r.onload = () => readImport(r.result); r.readAsText(file); };
    const ans = $('#ans'); if (ans && !ans.readOnly && ui.view === 'lecture') ans.addEventListener('keydown', e => { if (e.key === 'Enter' && ans.tagName === 'INPUT') { e.preventDefault(); checkItem(); } });
  }

  let lastField = null;
  document.addEventListener('focusin', e => { if (e.target.matches('input[type=text], input:not([type]), textarea')) lastField = e.target; });
  // keep the keyboard open when tapping the special-character buttons
  document.addEventListener('pointerdown', e => { if (e.target.closest('[data-key]')) e.preventDefault(); });

  document.addEventListener('click', e => {
    const t = e.target.closest('button, [data-w]'); if (!t) return;
    const d = t.dataset;
    if (d.key) { const fld = lastField && document.contains(lastField) ? lastField : $('#ans') || $('[data-cell]'); if (fld && !fld.readOnly) { const s = fld.selectionStart ?? fld.value.length, en = fld.selectionEnd ?? s; fld.value = fld.value.slice(0, s) + d.key + fld.value.slice(en); fld.focus(); fld.setSelectionRange(s + 1, s + 1); } return; }
    if (d.go) { go(d.go); if (d.anchor) setTimeout(() => { const el = $('#' + d.anchor); if (el) el.scrollIntoView(); }, 0); return; }
    if (d.lecture) { openLecture(d.lecture, d.section); return; }
    if (d.section && ui.view === 'lecture' && t.classList.contains('chip')) { ui.section = d.section; ui.gloss = null; render(); window.scrollTo(0, 0); return; }
    if (d.done !== undefined && d.done !== '') {
      const lp = lectureP(course.id, ui.lectureId); lp.sections[d.done] = true; touchStreak(); save();
      if (d.next) { ui.section = d.next; ui.gloss = null; render(); window.scrollTo(0, 0); } else go('home');
      return;
    }
    if (d.start) { startRun(d.start, findLecture(ui.lectureId)); render(); return; }
    if (d.speak) { speak(d.speak); return; }
    if (d.w !== undefined) { ui.gloss = ui.gloss === Number(d.w) ? null : Number(d.w); const y = window.scrollY; render(); window.scrollTo(0, y); return; }
    if (d.inline) { ui.inline = ui.inline || {}; ui.inline[d.inline] = Number(d.i); const l = findLecture(ui.lectureId); const q = l.reading.questions.find(q => q.id === d.inline); recordResult(l.id + ':' + q.id, Number(d.i) === q.answer); const y = window.scrollY; render(); window.scrollTo(0, y); return; }

    // exercise interactions
    if (ui.ex && ui.view === 'lecture') {
      const x = ui.ex, item = x.items[x.i];
      if (d.choice !== undefined && !(x.state && x.state.checked)) {
        const ok = Number(d.choice) === item.answer;
        x.state = { checked: true, ok, choice: Number(d.choice) }; if (ok) x.score++;
        recordResult(lectureQualified(item), ok); render(); return;
      }
      if (t.hasAttribute('data-check')) { checkItem(); return; }
      if (t.hasAttribute('data-next-item')) { nextItem(); return; }
      if (t.hasAttribute('data-override')) { x.state.ok = true; x.state.overridden = true; x.score++; const m = courseP(course.id).misses, k = lectureQualified(item); if (m[k]) m[k]--; save(); render(); return; }
      if (d.ml !== undefined) { x.state.sel = Number(d.ml); x.state.miss = null; render(); return; }
      if (d.mr !== undefined && x.state.sel != null) {
        const st = x.state, r = Number(d.mr);
        if (r === st.sel) { st.done.push(r); st.sel = null; st.miss = null; } else { st.misses++; st.miss = r; }
        if (st.done.length === item.pairs.length) { st.checked = true; st.ok = st.misses === 0; if (st.ok) x.score++; recordResult(lectureQualified(item), st.ok); }
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

    // backup
    if (t.hasAttribute('data-export')) { doExport(); return; }
    if (t.hasAttribute('data-copybackup')) { copyBackup(); return; }
    if (t.hasAttribute('data-importtext')) { readImport(($('#importtext') || {}).value || ''); return; }
    if (t.hasAttribute('data-cancelimport')) { ui.confirmImport = null; render(); return; }
    if (t.hasAttribute('data-doimport')) { P = migrate(ui.confirmImport.progress); ui.confirmImport = null; save(); setCourse(P.activeCourse || course.id); render(); toast('Progress restored.'); return; }
    if (t.hasAttribute('data-reset')) {
      if (!ui.confirmReset) { ui.confirmReset = true; render(); setTimeout(() => { ui.confirmReset = false; }, 4000); return; }
      delete P.courses[course.id]; ui.confirmReset = false; save(); render(); toast(course.name + ' progress reset.'); return;
    }
  });
  document.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-w]')) { e.preventDefault(); e.target.click(); } });

  function setCourse(id) {
    course = registry.catalogue.find(c => c.id === id) || registry.catalogue[0];
    P.activeCourse = course.id; ui.view = 'home'; ui.ex = null; ui.cards = null; save();
  }

  // ---------- boot ----------
  async function boot() {
    load();
    const base = CONTENT_BASE;
    try {
      await loadScript(base + 'catalogue.js');
      for (const c of registry.catalogue) for (const f of c.lectures) await loadScript(base + f);
    } catch (e) {
      root().innerHTML = `<div class="gutter" style="padding-block:40px"><p><b>Course files could not be loaded.</b></p><p class="small">${esc(e.message)}. Check that the content folder sits next to index.html.</p></div>`;
      return;
    }
    setCourse(P.activeCourse);
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
