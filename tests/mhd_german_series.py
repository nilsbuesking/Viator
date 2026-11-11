# Middle High German bonus series "German through time" (parts 1-5; part 6 has its own test, mhd_special_plattdeutsch.py):
# order in the list, sections and widths, pictures, every exercise answered from the lecture data, test runs, cards.
import os, json; os.makedirs('/tmp/viator-shots', exist_ok=True)
from playwright.sync_api import sync_playwright
S = '/tmp/viator-shots/'
FILES = ['special-german-1-ohg.js', 'special-german-2-saxon.js', 'special-german-3-mhg.js', 'special-german-4-enhg.js', 'special-german-5-standard.js']
LOAD = """async f => { const t = await (await fetch('content/mhd/' + f)).text(); let L; const Viator = { addLecture: (c, l) => { L = l; } }; eval(t); return L; }"""
errs = []
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 390, 'height': 844}, device_scale_factor=2)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.route('https://upload.wikimedia.org/**', lambda r: r.fulfill(status=404, body=''))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(500)
    pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_timeout(500)
    pg.select_option('#coursepick', 'mhd'); pg.wait_for_timeout(200)
    order = pg.evaluate("[...document.querySelectorAll('[data-lecture]')].map(e => e.dataset.lecture)")
    print('lecture order:', order)
    pg.screenshot(path=S + 'mhd_series_home.png', full_page=True)
    for f in FILES:
        L = pg.evaluate(LOAD, f)
        pg.click('[data-go=home]'); pg.click(f"[data-lecture={L['id']}]")
        chips = pg.evaluate("[...document.querySelectorAll('.chip[data-section]')].map(e => e.dataset.section)")
        w = {}
        for sec in ['intro', 'grammar', 'vocab']:
            pg.click(f'.chip[data-section={sec}]'); w[sec] = pg.evaluate('document.documentElement.scrollWidth')
        pg.click('.chip[data-section=intro]')
        figs = (pg.locator('figure.fig').count(), pg.locator('.fig-missing').count())
        pg.screenshot(path=S + f.replace('.js', '_intro.png'), full_page=True)
        pg.click('.chip[data-section=practice]'); pg.click('[data-start=practice]')
        bad = []
        for i, e in enumerate(L['exercises']):
            t = e['type']
            if t == 'mc': pg.click(f'[data-choice="{e["answer"]}"]')
            elif t == 'gap': pg.fill('#ans', e['answers'][0]); pg.click('[data-check]')
            elif t == 'translate': pg.fill('#ans', e['model']); pg.click('[data-check]')
            elif t == 'paradigm':
                cells = pg.locator('[data-cell]'); k = 0
                for r in e['rows']:
                    for a in r['answers']: cells.nth(k).fill(a.split('|')[0]); k += 1
                pg.click('[data-check]')
            elif t == 'match':
                for k in range(len(e['pairs'])): pg.click(f'[data-ml="{k}"]'); pg.click(f'[data-mr="{k}"]')
            elif t == 'order':
                for k in range(len(e['tokens'])): pg.click(f'[data-ob="{k}"]')
                pg.click('[data-check]')
            fb = pg.locator('.feedback').first.inner_text().split('\n')[0]
            if fb != 'Correct.': bad.append((i + 1, t, fb))
            pg.click('[data-next-item]')
        done = pg.locator('#secbody').inner_text()[:40].replace('\n', ' ')
        pg.click('.chip[data-section=test]')
        for run in range(3):
            pg.click('[data-start=test]')
            for i in range(L['test']['count']):
                if pg.locator('[data-choice]').count(): pg.locator('[data-choice]').first.click()
                elif pg.locator('[data-cell]').count(): pg.locator('[data-cell]').first.fill('x'); pg.click('[data-check]')
                elif pg.locator('#ans').count(): pg.fill('#ans', 'x'); pg.click('[data-check]')
                pg.click('[data-next-item]')
        print(f"{L['id']} {L['title']!r}: sections {chips} | widths {w} | figures {figs} | not correct: {bad} | {done}")
    pg.click('[data-go=cards]'); pg.click('[data-startcards]')
    for k in range(5): pg.click('[data-flip]'); pg.click('[data-grade=good]')
    pg.click('[data-go=ref]'); print('reference width', pg.evaluate('document.documentElement.scrollWidth'), '| glossary entries', pg.locator('.vitem').count())
    b.close()
print('errors', errs)
