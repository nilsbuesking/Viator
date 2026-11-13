# Robustness of the engine: damaged or unsavable progress, updates arriving during an exercise, missing or broken
# course files, vocabulary test questions, offline start and the picture cache across an update.
# Every check prints "ok" or "FAIL".
import json, time
from playwright.sync_api import sync_playwright

URL = 'http://localhost:8765/'
results = []
def check(label, cond):
    results.append(bool(cond)); print(('ok   ' if cond else 'FAIL ') + label)

def new_page(b, init=None):
    ctx = b.new_context(viewport={'width': 390, 'height': 844})
    if init: ctx.add_init_script(init)
    return ctx, ctx.new_page()

with sync_playwright() as p:
    b = p.chromium.launch()

    # 1. Damaged progress is kept aside, not silently overwritten
    ctx, pg = new_page(b)
    pg.goto(URL); pg.wait_for_selector('.lect')
    pg.evaluate("localStorage.clear(); localStorage.setItem('viator.progress', '{broken')")
    pg.reload(); pg.wait_for_selector('.lect')
    check('damaged progress: notice shown', pg.locator('text=Your saved progress could not be read').count() == 1)
    kept = pg.evaluate("Object.keys(localStorage).filter(k => k.startsWith('viator.progress.damaged.')).map(k => localStorage.getItem(k))")
    check('damaged progress: copy kept under its own key', kept == ['{broken'])
    pg.click('[data-dismissdamaged]')
    check('damaged progress: notice can be dismissed', pg.locator('text=Your saved progress could not be read').count() == 0)
    ctx.close()

    # 2. If the copy cannot be kept, nothing is written over the original until the person decides
    block = "Storage.prototype.setItem = function () { throw new DOMException('full', 'QuotaExceededError'); };"
    ctx, pg = new_page(b)
    pg.goto(URL); pg.wait_for_selector('.lect')
    pg.evaluate("localStorage.clear(); localStorage.setItem('viator.progress', '{broken')")
    ctx.add_init_script(block)
    pg.reload(); pg.wait_for_selector('.lect')
    check('damaged, copy impossible: notice says nothing overwritten', pg.locator('text=Nothing has been overwritten yet').count() == 1)
    pg.click('.lect >> nth=0'); pg.wait_for_selector('.chips')
    check('damaged, copy impossible: original left untouched', pg.evaluate("localStorage.getItem('viator.progress')") == '{broken')
    ctx.close()

    # 3. A failed save is reported
    ctx, pg = new_page(b, block)
    pg.goto(URL); pg.wait_for_selector('.lect')
    pg.click('.lect >> nth=0'); pg.wait_for_selector('.chips')
    time.sleep(0.3)
    check('failed save: message shown', 'could not be saved' in (pg.locator('.toast').inner_text() if pg.locator('.toast').count() else ''))
    pg.click('[data-go=home] >> nth=0'); pg.wait_for_selector('.lect')
    check('failed save: notice on the course page', pg.locator('text=This browser is not saving your progress').count() == 1)
    ctx.close()

    # 4. An update arriving during exercises does not reload the page until the person returns to the course page
    ctx, pg = new_page(b)
    pg.goto(URL); pg.wait_for_selector('.lect')
    pg.click('.lect >> nth=0'); pg.wait_for_selector('.chips')
    pg.click('[data-section=practice]'); pg.click('[data-start=practice]')
    pg.evaluate("window.__marker = 1; window.Viator.updateReady()")
    time.sleep(0.5)
    check('update during exercises: no reload', pg.evaluate("window.__marker") == 1)
    check('update during exercises: notice shown', pg.locator('.updatebar').count() == 1)
    check('update during exercises: exercise still on screen', pg.locator('.exhead').count() == 1)
    with pg.expect_navigation():
        pg.click('.tab[data-go=home]')
    pg.wait_for_selector('.lect')
    check('update: reloads on returning to the course page', pg.evaluate("window.__marker") is None)
    pg.evaluate("window.__marker = 2")
    with pg.expect_navigation():
        pg.evaluate("window.Viator.updateReady()")
    pg.wait_for_selector('.lect')
    check('update on the course page: reloads at once', pg.evaluate("window.__marker") is None)
    ctx.close()

    # 5. A missing or broken course file leaves the rest of the app working
    ctx, pg = new_page(b)
    pg.route('**/content/latin/lecture-05.js', lambda r: r.fulfill(status=404, body='not found'))
    pg.route('**/content/latin/lecture-06.js', lambda r: r.fulfill(status=200, content_type='application/javascript', body='throw new Error("broken");'))
    pg.goto(URL); pg.wait_for_selector('.lect')
    time.sleep(0.5)
    note = pg.locator('text=Some course files could not be loaded')
    check('missing file: app still starts', pg.locator('.lect:not(.planned)').count() > 0)
    check('missing file: notice names both files', note.count() == 1 and 'latin/lecture-05.js' in pg.inner_text('main') and 'latin/lecture-06.js (error)' in pg.inner_text('main'))
    ctx.close()

    # 6. Vocabulary questions in every test have four different options with the right answer among them
    ctx, pg = new_page(b)
    pg.goto(URL); pg.wait_for_selector('.lect')
    courses = pg.evaluate("[...document.querySelectorAll('#coursepick option')].map(o => o.value)")
    bad = []; checked = 0
    for cid in courses:
        pg.select_option('#coursepick', cid); pg.wait_for_function(f"document.querySelector('#coursepick').value === '{cid}'")
        time.sleep(0.3)
        ids = pg.evaluate("[...document.querySelectorAll('.lect[data-lecture]')].map(e => e.dataset.lecture)")
        for lid in ids:
            res = pg.evaluate("""id => { const out = []; for (let k = 0; k < 25; k++) for (const it of window.Viator._buildTest(id)) {
                if (!it.id.startsWith('tv-')) continue;
                const ok = it.options.length === 4 && new Set(it.options).size === 4 && it.answer >= 0;
                if (!ok) out.push(it.id + ': ' + it.options.join(' | ')); } return [...new Set(out)]; }""", lid)
            checked += 1
            bad += [lid + ' ' + x for x in res]
    check(f'vocabulary questions: four different options in {checked} lectures', not bad)
    for x in bad[:10]: print('     ', x)
    ctx.close()

    # 7. Offline start, and pictures kept across an update (service worker registered by hand: it needs https otherwise)
    ctx, pg = new_page(b)
    pg.goto(URL); pg.wait_for_selector('.lect')
    pg.evaluate("navigator.serviceWorker.register('sw.js')")
    pg.wait_for_function('navigator.serviceWorker.controller !== null', timeout=120000)
    version = pg.evaluate("caches.keys()")
    check('offline list cached', any(k.startswith('viator-v') for k in version))
    pg.evaluate("caches.open('viator-media').then(c => c.put('https://upload.wikimedia.org/test.jpg', new Response('x')))")
    ctx.set_offline(True)
    pg.reload(); pg.wait_for_selector('.lect', timeout=30000)
    check('offline: app starts with lectures', pg.locator('.lect:not(.planned)').count() > 0)
    ctx.set_offline(False)
    # a new version of the service worker takes over: registered from a temporary copy with another VERSION
    import os
    tmp = 'sw-update-test.js'
    try:
        open(tmp, 'w').write(open('sw.js').read().replace("const VERSION = 'viator-v", "const VERSION = 'viator-test-v"))
        pg.evaluate("navigator.serviceWorker.register('sw-update-test.js')")
        keys = []
        for _ in range(120):
            keys = pg.evaluate("caches.keys()")
            if any(k.startswith('viator-test-v') for k in keys) and not any(k.startswith('viator-v') for k in keys): break
            time.sleep(1)
        check('update: old version removed, new version cached', any(k.startswith('viator-test-v') for k in keys) and not any(k.startswith('viator-v') for k in keys))
        check('update: picture cache kept', 'viator-media' in keys and pg.evaluate("caches.open('viator-media').then(c => c.match('https://upload.wikimedia.org/test.jpg')).then(r => !!r)"))
    finally:
        if os.path.exists(tmp): os.remove(tmp)
    ctx.close()

    # 8. The backup reminder states the chosen interval
    ctx, pg = new_page(b)
    pg.goto(URL); pg.wait_for_selector('.lect')
    pg.click('.lect >> nth=0'); pg.wait_for_selector('.chips')
    pg.evaluate("""(() => { const p = JSON.parse(localStorage.getItem('viator.progress')); p.lastExport = '2020-01-01T00:00:00Z'; p.settings.backupDays = 14; localStorage.setItem('viator.progress', JSON.stringify(p)); })()""")
    pg.reload(); pg.wait_for_selector('.lect')
    check('backup reminder: uses the chosen interval', pg.locator('text=more than 14 days old').count() == 1)
    ctx.close()

    b.close()
print(f'robustness: {sum(results)} of {len(results)} checks passed')
