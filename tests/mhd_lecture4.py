# Middle High German Lecture IV (article, pronouns, adjectives): order in the list, sections and widths, reading glosses and notes,
# every exercise answered from the lecture data, test runs, cards, reference tables.
import os; os.makedirs('/tmp/viator-shots', exist_ok=True)
from playwright.sync_api import sync_playwright
S = '/tmp/viator-shots/'
LOAD = """async f => { const t = await (await fetch('content/mhd/' + f)).text(); let L; const Viator = { addLecture: (c, l) => { L = l; } }; eval(t); return L; }"""
errs = []
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 390, 'height': 844}, device_scale_factor=2)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.route('https://upload.wikimedia.org/**', lambda r: r.fulfill(status=404, body=''))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(500)
    pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_timeout(500)
    pg.select_option('#coursepick', 'mhd'); pg.wait_for_timeout(200)
    print('lecture order:', pg.evaluate("[...document.querySelectorAll('[data-lecture]')].map(e => e.dataset.lecture)"))
    print('planned:', pg.locator('.lect.planned').count(), '(expect 0)')
    L = pg.evaluate(LOAD, 'lecture-04.js')
    pg.click('[data-lecture=mhd-04]')
    chips = pg.evaluate("[...document.querySelectorAll('.chip[data-section]')].map(e => e.dataset.section)")
    w = {}
    for sec in chips:
        if sec in ('practice', 'test'): continue
        pg.click(f'.chip[data-section={sec}]'); w[sec] = pg.evaluate('document.documentElement.scrollWidth')
        if sec in ('intro', 'grammar', 'reading'): pg.screenshot(path=S + f'mh4_{sec}.png', full_page=True)
    print('sections', chips, '| widths', w)
    pg.click('.chip[data-section=reading]')
    print('unglossed:', pg.evaluate("""(()=>{const t=document.querySelector('.reading');const all=t.innerText.match(/[A-Za-zÀ-ɏ]+/g);const g=new Set([...t.querySelectorAll('.w')].map(e=>e.innerText));return [all.length, all.filter(w=>!g.has(w))]})()"""))
    pg.locator('.reading .w').nth(60).click(); print('gloss:', pg.locator('.glossbox').inner_text().replace('\n', ' | '))
    print('notes shown:', pg.locator('text=künec Artûs der guote').count() > 0)
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
    print('exercises', len(L['exercises']), '| not correct:', bad, '|', pg.locator('#secbody').inner_text()[:40].replace('\n', ' '))
    # wrong answers are marked wrong
    pg.click('[data-start=practice]'); pg.click('[data-choice="1"]'); print('wrong mc feedback:', pg.locator('.feedback').first.inner_text().split('\n')[0])
    pg.click('.chip[data-section=test]')
    for run in range(3):
        pg.click('[data-start=test]')
        for i in range(L['test']['count']):
            if pg.locator('[data-choice]').count(): pg.locator('[data-choice]').first.click()
            elif pg.locator('[data-cell]').count(): pg.locator('[data-cell]').first.fill('x'); pg.click('[data-check]')
            elif pg.locator('#ans').count(): pg.fill('#ans', 'x'); pg.click('[data-check]')
            pg.click('[data-next-item]')
    print('test runs done:', pg.locator('#secbody').inner_text()[:60].replace('\n', ' '))
    pg.click('[data-go=cards]'); pg.click('[data-startcards]')
    for k in range(5): pg.click('[data-flip]'); pg.click('[data-grade=good]')
    pg.click('[data-go=ref]'); print('reference width', pg.evaluate('document.documentElement.scrollWidth'), '| glossary entries', pg.locator('.vitem').count())
    b.close()
print('errors', errs)
