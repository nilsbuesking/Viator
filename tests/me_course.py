# Middle English course shell: home, planned list, timeline, cards
import os; os.makedirs('/tmp/viator-shots', exist_ok=True)
from playwright.sync_api import sync_playwright
errs=[]
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':390,'height':844}, device_scale_factor=2)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(500)
    pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_timeout(500)
    print('courses:', pg.locator('#coursepick option').all_inner_texts())
    pg.select_option('#coursepick','me'); pg.wait_for_timeout(200)
    print('home:', pg.locator('.today').first.inner_text()[:90].replace('\n',' | '))
    print('planned:', pg.locator('.lect.planned').count(), '| width', pg.evaluate('document.documentElement.scrollWidth'))
    pg.screenshot(path='/tmp/viator-shots/me-home.png')
    pg.click('[data-go=cards]'); print('cards view ok, width', pg.evaluate('document.documentElement.scrollWidth'))
    pg.click('[data-go=ref]'); print('ref pages:', pg.locator('.refnav .chip').all_inner_texts())
    pg.click('[data-refpage=timeline]'); print('events', pg.locator('.timeline li').count(), '| width', pg.evaluate('document.documentElement.scrollWidth'))
    pg.screenshot(path='/tmp/viator-shots/me-timeline.png')
    pg.click('[data-go=progress]'); print('progress width', pg.evaluate('document.documentElement.scrollWidth'))
    pg.select_option('#coursepick','latin'); pg.wait_for_timeout(200)
    print('latin planned numerals:', pg.locator('.lect.planned .num').nth(0).inner_text(), pg.locator('.lect.planned .num').last.inner_text())
    b.close()
print('errors', errs)
