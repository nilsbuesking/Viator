# Checks that the Roman numerals in the lecture list and the lecture header fit their space on a phone.
# Google Fonts cannot be reached from the test machine, so the display font (Marcellus, SIL Open Font
# Licence) is served from tests/fonts.
import base64, os
from playwright.sync_api import sync_playwright
F = base64.b64encode(open(os.path.join(os.path.dirname(__file__), 'fonts', 'marcellus.woff2'), 'rb').read()).decode()
CSS = "@font-face{font-family:'Marcellus';src:url(data:font/woff2;base64,%s) format('woff2');}" % F
errs = []
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 390, 'height': 844})
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.route('https://fonts.googleapis.com/**', lambda r: r.fulfill(status=200, content_type='text/css', body=CSS))
    pg.goto('http://localhost:8765/'); pg.wait_for_timeout(1500)
    print('font loaded:', pg.evaluate("document.fonts.check('20px Marcellus')"))
    r = pg.evaluate("""[...document.querySelectorAll('.lect .num')].map(e=>{const rg=document.createRange();rg.selectNodeContents(e);return [e.textContent, Math.round(rg.getBoundingClientRect().width), Math.round(e.getBoundingClientRect().width)]})""")
    bad = [x for x in r if x[1] > x[2]]
    print('list numerals:', len(r), '| overflowing:', bad)
    pg.click('[data-lecture=la-38]'); pg.wait_for_timeout(500)
    w = pg.evaluate("(()=>{const e=document.querySelector('.lhead .numeral');const rg=document.createRange();rg.selectNodeContents(e);return Math.round(rg.getBoundingClientRect().width)})()")
    print('header XXXVIII width:', w, '(limit 120) | page width', pg.evaluate('document.documentElement.scrollWidth'))
    if bad or w > 120: errs.append('numeral overflow')
    b.close()
print('errors', errs)
