import os; os.makedirs('/tmp/viator-shots', exist_ok=True)
# Pictures: Wikimedia is unreachable in the test sandbox, so requests are intercepted.
# Run 1: the first size fails, the second is served from a stand-in file -> layout check.
# Run 2: everything fails -> the "could not be loaded" note must appear, no errors.
from playwright.sync_api import sync_playwright
STANDIN = '/tmp/claude-0/standin.jpg'
def run(serve):
    errs=[]; seen=[]
    with sync_playwright() as p:
        b=p.chromium.launch(); pg=b.new_page(viewport={'width':390,'height':844}, device_scale_factor=2)
        pg.on('pageerror', lambda e: errs.append(str(e)))
        def handle(route):
            u=route.request.url; seen.append(u)
            if serve and '/500px-' in u and os.path.exists(STANDIN): route.fulfill(path=STANDIN, content_type='image/jpeg')
            else: route.fulfill(status=404, body='')
        pg.route('https://upload.wikimedia.org/**', handle)
        pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(500)
        pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_timeout(500)
        out={}
        for course, lid, secs in [('latin','la-01',['intro']), ('mnd','mnd-01',['intro']), ('mnd','mnd-02',['intro'])]:
            pg.select_option('#coursepick', course); pg.click(f'[data-lecture={lid}]')
            for sec in secs:
                pg.click(f'.chip[data-section={sec}]')
                for i in range(pg.locator('figure.fig').count()): pg.locator('figure.fig').nth(i).scroll_into_view_if_needed(); pg.wait_for_timeout(250)
                out[lid]=(pg.locator('figure.fig img').count(), pg.locator('.fig-missing').count(), pg.evaluate('document.documentElement.scrollWidth'))
                if serve and lid=='mnd-02': pg.locator('figure.fig').first.scroll_into_view_if_needed(); pg.screenshot(path='/tmp/viator-shots/fig.png')
            pg.click('[data-go=home]')
        b.close()
    return out, len(seen), errs
print('serve 500px:', run(True))
print('all blocked:', run(False))
