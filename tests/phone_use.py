# Phone use (review 2): checks at iPhone sizes with the app's real fonts (tests/fonts).
#  - no page wider than the screen, at every text size (course pages) and at the largest size (every lecture heading)
#  - no form text under 16 px (Safari zooms into smaller boxes and menus)
#  - readings: the note on the source in normal type, verse lines as blocks, prose left as it is
#  - folding panels stay open, and the page stays put, after answering a question or tapping a word
#  - exercises: one-line heading while running, Next visible after an answer, Return checks, Return moves on in tables
#  - settings rows do not overlap; the glossary search keeps its box and updates the list; wide tables show a fade
#  - the place is restored after a restart within a few hours, and not after that
import os
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__))
FONTS = open(os.path.join(HERE, 'fonts', 'fonts.css')).read()
LOAD = """async f => { const t = await (await fetch('content/' + f)).text(); let L; const Viator = { addLecture: (c, l) => { L = l; } }; eval(t); return L; }"""
errs, fails = [], []
def check(name, ok, detail=''):
    print(('ok   ' if ok else 'FAIL ') + name + (f' ({detail})' if detail and not ok else ''))
    if not ok: fails.append(name)

def open_app(b, w, h, size='l', course='latin', mobile=True):
    ctx = b.new_context(viewport={'width': w, 'height': h}, is_mobile=mobile, has_touch=mobile)
    ctx.route('https://fonts.googleapis.com/**', lambda r: r.fulfill(status=200, content_type='text/css', body=FONTS))
    ctx.route('https://upload.wikimedia.org/**', lambda r: r.fulfill(status=404, body=''))
    pg = ctx.new_page(); pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_selector('.tabs')
    prog = {'format': 2, 'lastExport': '2099-01-01T00:00:00Z', 'activeCourse': course, 'settings': {'textSize': size}, 'courses': {}}
    pg.evaluate("p => { localStorage.clear(); localStorage.setItem('viator.progress', JSON.stringify(p)); }", prog)
    pg.reload(); pg.wait_for_selector('.tabs'); pg.evaluate('document.fonts.ready')
    pg.evaluate("localStorage.removeItem('viator.place')")
    return ctx, pg

WIDTH = "screen.width - document.documentElement.scrollWidth"
with sync_playwright() as p:
    b = p.chromium.launch()
    # 1. nothing wider than the screen; form text at least 16 px
    small_form = []
    for w, h in [(375, 667), (390, 844)]:
        for size in ['s', 'm', 'l', 'xl']:
            for course in ['latin', 'mhd', 'oe', 'me']:
                ctx, pg = open_app(b, w, h, size, course)
                if pg.evaluate(WIDTH) < 0: errs.append(f'course page wider than screen: {course} {w} {size}')
                small_form += [(course, w, size, x) for x in pg.evaluate("[...document.querySelectorAll('input, select, textarea')].filter(e => e.type !== 'checkbox' && e.type !== 'file' && e.offsetParent).map(e => [e.id || e.className, parseFloat(getComputedStyle(e).fontSize)]).filter(x => x[1] < 15.95)")]
                ctx.close()
    check('course pages fit the screen at all text sizes', not [e for e in errs if 'wider' in e], [e for e in errs if 'wider' in e])
    ctx, pg = open_app(b, 375, 667, 'xl', 'mhd')
    wide = []
    for course in ['latin', 'mhd', 'oe', 'me']:
        pg.select_option('#coursepick', course); pg.wait_for_timeout(300)
        for lid in pg.evaluate("[...document.querySelectorAll('.lect[data-lecture]')].map(e => e.dataset.lecture)"):
            pg.click(f'.lect[data-lecture="{lid}"]')
            if pg.evaluate(WIDTH) < 0: wide.append(lid)
            pg.click('[data-go=home]')
    check('every lecture heading fits at Extra large on a 375 px phone', not wide, wide)
    for sel, setup in [('progress', lambda: pg.click('[data-go=progress]')), ('cards', lambda: pg.click('[data-go=cards]')), ('dates', lambda: (pg.click('[data-go=ref]'), pg.click('[data-refpage=dates]')))]:
        for size in ['s', 'm']:
            pg.evaluate(f"(() => {{ const p = JSON.parse(localStorage.getItem('viator.progress')); p.settings.textSize = '{size}'; localStorage.setItem('viator.progress', JSON.stringify(p)); }})()")
            pg.reload(); pg.wait_for_selector('.tabs'); pg.evaluate("localStorage.removeItem('viator.place')"); pg.click('[data-go=home]'); setup()
            small_form += [(sel, size, x) for x in pg.evaluate("[...document.querySelectorAll('input, select, textarea')].filter(e => e.type !== 'checkbox' && e.type !== 'file' && e.offsetParent).map(e => [e.id || e.className, parseFloat(getComputedStyle(e).fontSize)]).filter(x => x[1] < 15.95)")]
    ctx.close()
    check('no form text under 16 px', not small_form, small_form[:5])

    # 2. readings
    ctx, pg = open_app(b, 390, 844, 'l', 'me')
    pg.click('.lect[data-lecture=me-06]'); pg.click('.chip[data-section=reading]')
    check('reading: the note on the source not in capitals', pg.evaluate("getComputedStyle(document.querySelector('#secbody h2 + *')).textTransform") == 'none')
    check('reading: long source note folded', pg.locator('details.srcnote:not([open])').count() == 1)
    lines = pg.evaluate("document.querySelectorAll('.reading.verse .ln:not(.gap)').length")
    check('verse reading: one block per line', lines == 46, lines)
    pg.click('details.srcnote summary'); check('source note opens', pg.locator('details.srcnote[open]').count() == 1)
    pg.locator('.reading .w').nth(5).click(); check('source note still open after tapping a word', pg.locator('details.srcnote[open]').count() == 1)
    pg.click('[data-go=home]'); pg.select_option('#coursepick', 'mhd'); pg.wait_for_timeout(300)
    pg.click('.lect[data-lecture=mhd-11]'); pg.click('.chip[data-section=reading]')
    check('prose reading left as paragraphs', pg.locator('.reading.verse').count() == 0)
    pg.click('[data-go=home]'); pg.click('.lect[data-lecture=mhd-09]'); pg.click('.chip[data-section=reading]')
    pg.evaluate("document.querySelectorAll('details.panel').forEach(d => d.open = true)"); pg.wait_for_timeout(50)
    q = pg.locator('[data-inline]').first; q.scroll_into_view_if_needed()
    before = pg.evaluate("document.querySelector('[data-inline]').getBoundingClientRect().top")
    q.click(); pg.wait_for_timeout(100)
    after = pg.evaluate("document.querySelector('[data-inline]').getBoundingClientRect().top")
    check('panels stay open after answering a question', all(pg.evaluate("[...document.querySelectorAll('details.panel')].map(d => d.open)")))
    check('the question stays in place after answering', abs(after - before) < 5, (before, after))
    pg.evaluate('window.scrollTo(0, 0)'); pg.locator('.reading .w').nth(3).click()
    check('panels stay open after tapping a word', all(pg.evaluate("[...document.querySelectorAll('details.panel')].map(d => d.open)")))
    ctx.close()

    # 3. exercises
    ctx, pg = open_app(b, 375, 667, 'l', 'latin')
    L = pg.evaluate(LOAD, 'latin/lecture-10.js')
    pg.click('.lect[data-lecture=la-10]'); pg.click('.chip[data-section=practice]')
    check('full heading before the exercises start', pg.locator('.lhead').count() == 1 and pg.locator('.lmini').count() == 0)
    pg.click('[data-start=practice]')
    check('one-line heading while exercises run', pg.locator('.lmini').count() == 1 and pg.locator('.lhead').count() == 0)
    e = L['exercises'][0]; pg.click(f'[data-choice="{(e["answer"] + 1) % len(e["options"])}"]'); pg.wait_for_timeout(600)
    nb, tb = pg.evaluate("[document.querySelector('[data-next-item]').getBoundingClientRect().bottom, document.querySelector('.tabs').getBoundingClientRect().top]")
    check('Next is visible above the tab bar after an answer', nb <= tb, (nb, tb))
    pg.click('[data-next-item]')
    i = next(k for k, x in enumerate(L['exercises']) if x['type'] == 'gap')
    while pg.evaluate("document.querySelector('.exhead span').textContent") != f'Exercise {i + 1} of {len(L["exercises"])}':
        if pg.locator('[data-choice]').count(): pg.locator('[data-choice]').first.click()
        elif pg.locator('#ans').count(): pg.fill('#ans', 'x'); pg.click('[data-check]')
        elif pg.locator('[data-cell]').count(): pg.locator('[data-cell]').first.fill('x'); pg.click('[data-check]')
        elif pg.locator('[data-ml]').count():
            ex = pg.evaluate("document.querySelectorAll('[data-ml]').length")
            for k in range(ex): pg.click(f'[data-ml="{k}"]'); pg.click(f'[data-mr="{k}"]')
        elif pg.locator('[data-ob]').count():
            for k in range(pg.locator('[data-ob]').count()): pg.locator('[data-ob]').first.click()
            pg.click('[data-check]')
        pg.click('[data-next-item]')
    kb, inp = pg.evaluate("[document.querySelector('.kbd').getBoundingClientRect().top, document.querySelector('#ans').getBoundingClientRect().top]")
    check('special characters sit above the answer box', kb < inp)
    pg.fill('#ans', L['exercises'][i]['answers'][0]); pg.press('#ans', 'Enter')
    check('Return checks a typed answer', pg.locator('.feedback').count() == 1)
    pg.click('[data-next-item]')
    while pg.locator('[data-cell]').count() == 0:
        if pg.locator('[data-choice]').count(): pg.locator('[data-choice]').first.click()
        elif pg.locator('#ans').count(): pg.fill('#ans', 'x'); pg.click('[data-check]')
        pg.click('[data-next-item]')
    pg.focus('[data-cell="0-0"]'); pg.keyboard.press('Enter')
    check('Return in a table moves to the next box', pg.evaluate("document.activeElement.dataset.cell") == '0-1')
    # the place: an exercise in progress survives a restart
    pos = pg.evaluate("document.querySelector('.exhead span').textContent")
    pg.reload(); pg.wait_for_selector('.tabs')
    check('restart: back in the same exercise', pg.locator('.exhead').count() == 1 and pg.evaluate("document.querySelector('.exhead span').textContent") == pos, pos)
    pg.click('.chip[data-section=reading]'); pg.evaluate("window.scrollTo(0, 600)"); pg.wait_for_timeout(50)
    pg.reload(); pg.wait_for_selector('.tabs'); pg.wait_for_timeout(100)
    check('restart: back in the reading at the same place', pg.locator('.reading').count() == 1 and abs(pg.evaluate('scrollY') - 600) < 5, pg.evaluate('scrollY'))
    pg.close(); pg = ctx.new_page(); pg.goto('http://localhost:8765/tests/README.md')   # same site, without the app
    pg.evaluate("(() => { const p = JSON.parse(localStorage.getItem('viator.place')); p.t -= 5 * 3600000; localStorage.setItem('viator.place', JSON.stringify(p)); })()")
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_selector('.tabs')
    check('restart after five hours: the course page', pg.locator('section.today').count() == 1 and pg.locator('.lhead, .lmini').count() == 0)
    ctx.close()

    # 4. settings rows, glossary search, wide tables
    ctx, pg = open_app(b, 390, 844, 'l', 'mhd')
    pg.click('[data-go=cards]')
    lab, sel = pg.evaluate("[document.querySelector('label[for=cardDir]').getBoundingClientRect().toJSON(), document.querySelector('#cardDir').getBoundingClientRect().toJSON()]")
    check('settings: menu does not overlap its label', sel['top'] >= lab['bottom'] - 1 or sel['left'] >= lab['right'] - 1, (lab, sel))
    pg.click('[data-go=ref]')
    pg.evaluate("document.querySelector('#refsearch').__mark = 1")
    n0 = pg.locator('.vitem').count(); pg.type('#refsearch', 'hû', delay=40); pg.wait_for_timeout(400)
    n1 = pg.locator('.vitem').count()
    check('glossary search filters the list', 0 < n1 < n0, (n0, n1))
    check('glossary search keeps the same box', pg.evaluate("document.querySelector('#refsearch').__mark === 1 && document.activeElement.id === 'refsearch'"))
    check('glossary count follows the list', pg.locator('#refcount').text_content().endswith(f'{n1} entries'))
    pg.click('[data-refpage=tables]')
    more = pg.locator('.tablewrap.more').count()
    check('wide tables show the fade', more > 0, more)
    pg.evaluate("(() => { const w = document.querySelector('.tablewrap.more'); w.scrollLeft = w.scrollWidth; })()"); pg.wait_for_timeout(100)
    check('fade goes when scrolled to the end', pg.locator('.tablewrap.more').count() == more - 1)
    ctx.close()
    b.close()
print('errors', [e for e in errs if 'wider' not in e])
print('failed:', len(fails), '(expect 0)')
