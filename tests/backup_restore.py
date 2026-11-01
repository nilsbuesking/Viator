import os; os.makedirs('/tmp/viator-shots', exist_ok=True)
from playwright.sync_api import sync_playwright
errs=[]
with sync_playwright() as p:
    b=p.chromium.launch(); ctx=b.new_context(viewport={'width':390,'height':844}); pg=ctx.new_page()
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(600)
    pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_timeout(500)
    # make some progress in both courses
    pg.click('text=Start lecture'); pg.click('[data-done]'); pg.click('[data-go=cards]'); pg.click('[data-startcards]')
    for k in range(5): pg.click('[data-flip]'); pg.click('[data-grade=good]')
    pg.click('[data-go=home]'); pg.select_option('#coursepick','mnd'); pg.click('text=Start lecture'); pg.click('[data-done]')
    before=pg.evaluate("localStorage.getItem('viator.progress')")
    pg.click('[data-go=progress]'); pg.click('[data-copybackup]'); pg.wait_for_timeout(300)
    txt = pg.locator('#backuptext').input_value() if pg.locator('#backuptext').count() else pg.evaluate("navigator.clipboard.readText()")
    print('backup length', len(txt))
    # reset MLG and Latin progress, then restore
    pg.click('[data-reset]'); pg.click('[data-reset]')
    pg.click('[data-go=home]'); pg.select_option('#coursepick','latin'); pg.click('[data-go=progress]'); pg.click('[data-reset]'); pg.click('[data-reset]')
    after_reset=pg.evaluate("JSON.parse(localStorage.getItem('viator.progress')).courses")
    print('courses after reset:', list(after_reset.keys()))
    pg.click('summary:has-text("Restore from a backup")'); pg.fill('#importtext', txt); pg.click('[data-importtext]'); pg.click('[data-doimport]')
    restored=pg.evaluate("JSON.parse(localStorage.getItem('viator.progress'))")
    import json
    b0=json.loads(before)
    print('restored courses:', list(restored['courses'].keys()), '| cards match:', restored['courses']['latin']['cards']==b0['courses']['latin']['cards'], '| mnd sections:', restored['courses']['mnd']['lectures']['mnd-01']['sections'])
    print('w', pg.evaluate('document.documentElement.scrollWidth'))
    b.close()
print('errors', errs)
