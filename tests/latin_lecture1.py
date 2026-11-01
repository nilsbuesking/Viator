import os; os.makedirs('/tmp/viator-shots', exist_ok=True)
from playwright.sync_api import sync_playwright
mc={0:0,1:2,2:1,3:0,4:1,22:0,23:0}
gap={5:'a',6:'ae',7:'am',8:'ant',9:'ae',21:'a'}
par={10:['voco','vocamus','vocas','vocatis','vocat','vocant'],
     11:['fortuna','fortunae','fortunae','fortunarum','fortunae','fortunis','fortunam','fortunas','fortuna','fortunis','fortuna','fortunae']}
tr={14:"The poet praises the woman.",15:"The sailors often wander.",16:"Wisdom preserves life.",17:"We don't love the girls' roses.",18:"Agricolae laborant",19:"Vocatis nautam.",20:"In insula poetae habitant.",24:"There is a woman on the island."}
errs=[]; S='/tmp/viator-shots/'
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':390,'height':844}, device_scale_factor=2)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(600)
    pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_timeout(500)
    pg.click('text=Start lecture')
    pg.locator('text=Latin and German: relatives').scroll_into_view_if_needed(); pg.screenshot(path=S+'a_bg.png')
    pg.click('.chip[data-section=pron]'); pg.locator('text=Traps for German speakers').scroll_into_view_if_needed(); pg.screenshot(path=S+'a_pron.png')
    pg.click('.chip[data-section=grammar]'); pg.screenshot(path=S+'a_gram.png')
    pg.click('[data-jump="g-2"]'); pg.wait_for_timeout(700); pg.screenshot(path=S+'a_jump.png')
    widths={}
    for sec in ['intro','pron','grammar','vocab','reading']:
        pg.click(f'.chip[data-section={sec}]'); widths[sec]=pg.evaluate('document.documentElement.scrollWidth')
    print('widths', widths)
    pg.click('.chip[data-section=reading]'); pg.click('summary:has-text("Notes on the passage")'); pg.locator('.notes').scroll_into_view_if_needed(); pg.screenshot(path=S+'a_notes.png')
    pg.click('.chip[data-section=practice]'); pg.click('[data-start=practice]')
    n=pg.locator('text=/Exercise 1 of/').inner_text(); print(n)
    res=[]
    for i in range(25):
        if i in mc: pg.click(f'[data-choice="{mc[i]}"]')
        elif i in gap: pg.fill('#ans',gap[i]); pg.click('[data-check]')
        elif i in par:
            cells=pg.locator('[data-cell]')
            for k,v in enumerate(par[i]): cells.nth(k).fill(v)
            pg.click('[data-check]')
        elif i==12:
            for k in range(5): pg.click(f'[data-ml="{k}"]'); pg.click(f'[data-mr="{k}"]')
        elif i==13:
            for k in range(4): pg.click(f'[data-ob="{k}"]')
            pg.click('[data-check]')
        elif i in tr: pg.fill('#ans',tr[i]); pg.click('[data-check]')
        fb=pg.locator('.feedback').first.inner_text().split('\n')[0]
        if fb!='Correct.': res.append((i+1,fb))
        pg.click('[data-next-item]')
    print('not correct:', res); print(pg.locator('#secbody').inner_text()[:40].replace('\n',' '))
    # test runs: 3 attempts, answer randomly, just ensure no crash
    pg.click('.chip[data-section=test]')
    for run in range(3):
        pg.click('[data-start=test]')
        for i in range(10):
            if pg.locator('[data-choice]').count(): pg.locator('[data-choice]').first.click()
            elif pg.locator('#ans').count(): pg.fill('#ans','x'); pg.click('[data-check]')
            pg.click('[data-next-item]')
    print('test ok:', pg.locator('#secbody').inner_text()[:30].replace('\n',' '))
    pg.click('[data-go=cards]'); pg.click('[data-startcards]')
    for k in range(5): pg.click('[data-flip]'); pg.click('[data-grade=good]')
    pg.click('[data-go=ref]'); print('glossary entries', pg.locator('.vitem').count())
    pg.emulate_media(color_scheme='dark'); pg.click('[data-go=home]'); pg.click('[data-lecture]'); pg.click('.chip[data-section=pron]'); pg.screenshot(path=S+'a_dark.png')
    print('dark width', pg.evaluate('document.documentElement.scrollWidth'))
    b.close()
print('errors', errs)
