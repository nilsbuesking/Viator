# Revision and card direction (progress format 3):
# - old progress (format 2) is migrated: the card direction becomes per course, 15 new cards a day becomes 10
# - the reading courses show vocabulary cards from the course language only; Latin keeps both directions
# - every lecture test contains a translation and an ending or table question whenever its pool has them
# - "Missed items": a correct answer takes an item off the list, a wrong one counts again; the session survives a restart
# - "Revision test": 12 questions from lectures whose test was passed, with a translation and an ending/table, no reading questions
import json
from playwright.sync_api import sync_playwright
URL = 'http://localhost:8765/index.html'
LOAD = """async f => { const t = await (await fetch('content/' + f)).text(); let L; const Viator = { addLecture: (c, l) => { L = l; } }; eval(t); return L; }"""
errs = []
def check(name, ok, detail=''):
    print(('ok   ' if ok else 'FAIL ') + name + (('  ' + str(detail)) if detail and not ok else ''))
def seed(pg, prog):
    pg.goto(URL); pg.wait_for_selector('.tabs')
    pg.evaluate("p => { localStorage.clear(); localStorage.setItem('viator.progress', JSON.stringify(p)); }", prog)
    pg.reload(); pg.wait_for_selector('.tabs'); pg.wait_for_timeout(300)
def stored(pg): return json.loads(pg.evaluate("localStorage.getItem('viator.progress')"))
def course(c, lectures=None, misses=None, cards=None, cardDir=None):
    o = {'lectures': lectures or {}, 'cards': cards or {}, 'newToday': {'day': 0, 'count': 0}, 'misses': misses or {}}
    if cardDir: o['cardDir'] = cardDir
    return o
passed = {'started': True, 'sections': {'test': True}, 'testBest': 90, 'testRuns': 1}

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': 375, 'height': 812}); pg.on('pageerror', lambda e: errs.append(str(e)))

    # 1. migration from format 2, with the old default settings
    seed(pg, {'format': 2, 'lastExport': '2099-01-01T00:00:00Z', 'activeCourse': 'oe', 'settings': {'cardDir': 'both', 'newPerDay': 15},
              'courses': {'oe': course('oe', {'oe-01': {'started': True, 'sections': {}, 'testBest': None, 'testRuns': 0}},
                                       cards={'v:oe-01:ic:r': {'box': 2, 'due': 0, 'lapses': 3}})}})
    pg.click('[data-go=cards]'); P = stored(pg)
    check('format 2 → 3, old default direction dropped, 15 new cards → 10', P['format'] == 3 and 'cardDir' not in P['settings'] and P['settings']['newPerDay'] == 10, P['settings'])
    check('Old English cards: course language → English by default', pg.eval_on_selector('#cardDir', 'e => e.value') == 'la-en')
    check('a card of the other direction is no longer due', pg.inner_text('.stats3').split('\n')[0] == '0', pg.inner_text('.stats3'))
    pg.click('[data-go=progress]')
    check('its lapses are not listed under Needs work', 'Needs work' not in pg.inner_text('main'))
    pg.select_option('#coursepick', 'latin'); pg.wait_for_timeout(300); pg.click('[data-go=cards]')
    check('Latin keeps both directions', pg.eval_on_selector('#cardDir', 'e => e.value') == 'both')
    pg.select_option('#cardDir', 'la-en'); pg.wait_for_timeout(100)
    P = stored(pg)
    check('a change is stored for that course only', P['courses']['latin'].get('cardDir') == 'la-en' and 'cardDir' not in P['courses'].get('oe', {}), P['courses'].get('latin'))
    # an old non-default choice for all courses still applies where a course has no default of its own
    seed(pg, {'format': 2, 'lastExport': '2099-01-01T00:00:00Z', 'activeCourse': 'latin', 'settings': {'cardDir': 'en-la', 'newPerDay': 20}, 'courses': {}})
    pg.click('[data-go=cards]'); a = pg.eval_on_selector('#cardDir', 'e => e.value')
    pg.select_option('#coursepick', 'oe'); pg.wait_for_timeout(300); pg.click('[data-go=cards]'); o = pg.eval_on_selector('#cardDir', 'e => e.value')
    check('old choice kept for Latin, the reading course uses its own default, 20 new cards kept', a == 'en-la' and o == 'la-en' and stored(pg)['settings']['newPerDay'] == 20, (a, o))

    # 2. every lecture test: a translation and an ending/table whenever the pool has them
    seed(pg, {'format': 3, 'lastExport': '2099-01-01T00:00:00Z', 'activeCourse': 'latin', 'settings': {}, 'courses': {}})
    bad = []; n = 0
    for cid in pg.evaluate("[...document.querySelectorAll('#coursepick option')].map(o => o.value)"):
        pg.select_option('#coursepick', cid); pg.wait_for_function(f"document.querySelector('#coursepick').value === '{cid}'"); pg.wait_for_timeout(300)
        for lid in pg.evaluate("[...document.querySelectorAll('.lect[data-lecture]')].map(e => e.dataset.lecture)"):
            n += 1
            # in 20 draws a kind of question is either always there or never (then the lecture's pool has none)
            r = pg.evaluate("""id => { let tr = 0, gp = 0; for (let k = 0; k < 20; k++) { const w = window.Viator._buildTest(id).filter(i => !i.id.startsWith('tv-'));
                if (w.some(i => i.type === 'translate')) tr++; if (w.some(i => i.type === 'gap' || i.type === 'paradigm')) gp++; } return [tr, gp]; }""", lid)
            if r[0] not in (0, 20) or r[1] != 20: bad.append((lid, r))
    check(f'tests contain a translation and an ending or table ({n} lectures, 20 draws each)', not bad, bad)

    # 3. missed items
    L = pg.evaluate(LOAD, 'latin/lecture-01.js')
    mc = [e for e in L['exercises'] if e['type'] == 'mc'][:2]
    seed(pg, {'format': 3, 'lastExport': '2099-01-01T00:00:00Z', 'activeCourse': 'latin', 'settings': {},
              'courses': {'latin': course('latin', {'la-01': passed}, {f"la-01:{mc[0]['id']}": 2, f"la-01:{mc[1]['id']}": 1, 'la-01:tv-x': 1})}})
    check('home offers revision', pg.locator('text=Revision: missed items and tests').count() == 1)
    pg.click('[data-go=progress]')
    check('Progress shows the number of missed items (vocabulary test questions not counted)', 'Missed items (2)' in pg.inner_text('#revision'), pg.inner_text('#revision'))
    pg.click('[data-review=missed]')
    check('session starts with the most-missed item, labelled with its lecture', '1 of 2' in pg.inner_text('.exhead') and 'Lectiō I' in pg.inner_text('.from'))
    first = mc[0]
    pg.click(f'[data-choice="{first["answer"]}"]'); pg.click('[data-next-item]')
    wrong = [i for i in range(len(mc[1]['options'])) if i != mc[1]['answer']][0]
    pg.reload(); pg.wait_for_selector('.tabs'); pg.wait_for_timeout(300)
    check('after a restart the session continues at the second item', '2 of 2' in pg.inner_text('.exhead'), pg.inner_text('main')[:80])
    pg.click(f'[data-choice="{wrong}"]'); pg.click('[data-next-item]')
    m = stored(pg)['courses']['latin']['misses']
    check('right answer leaves the list, wrong answer counts again', f"la-01:{mc[0]['id']}" not in m and m.get(f"la-01:{mc[1]['id']}") == 2, m)
    check('result page offers to practise again', pg.locator('[data-review=missed]').count() == 1 and '1 still to practise' in pg.inner_text('main'), pg.inner_text('main'))
    check('no sideways scrolling in revision', pg.evaluate('document.documentElement.scrollWidth - screen.width') <= 0)

    # 4. revision test
    items = pg.evaluate("window.Viator._startReview('revision')")
    lids = {i['lid'] for i in items}
    check('revision test: 12 questions from the passed lecture only', len(items) == 12 and lids == {'la-01'}, (len(items), lids))
    check('revision test: a translation and an ending or table, no reading questions',
          any(i['type'] == 'translate' for i in items) and any(i['type'] in ('gap', 'paradigm') for i in items) and not any(i['rq'] for i in items), [i['type'] for i in items])
    check('the missed item is among them', any(f"{i['lid']}:{i['id']}" == f"la-01:{mc[1]['id']}" for i in items))
    seed(pg, {'format': 3, 'lastExport': '2099-01-01T00:00:00Z', 'activeCourse': 'latin', 'settings': {}, 'courses': {}})
    pg.click('[data-go=progress]')
    check('without a passed test the revision test is not offered', pg.locator('[data-review=revision][disabled]').count() == 1 and pg.locator('[data-review=missed][disabled]').count() == 1)
    print('errors:', errs)
    b.close()
