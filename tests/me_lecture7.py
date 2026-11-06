# Middle English Lecture VII: sections, reading glosses, every exercise, test, cards
import os; os.makedirs('/tmp/viator-shots', exist_ok=True)
from playwright.sync_api import sync_playwright
S='/tmp/viator-shots/'
mc={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,21:0,22:0}
gap={10:'gan',11:'artow',12:'leet',13:'thider'}
par={14:['herkne','herkneth','be','beth','tel','telleth','go','gooth'], 15:['artow','art thou','livestow','livest thou','wiltow','wilt thou','hastow','hast thou']}
tr={17:'Why do you live so long to such a great age?',18:'God be with you.',19:'herkneth',20:'leve moder'}
errs=[]
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':390,'height':844}, device_scale_factor=2)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.route('https://upload.wikimedia.org/**', lambda r: r.fulfill(status=404, body=''))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(500)
    pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_timeout(500)
    pg.select_option('#coursepick','me'); pg.wait_for_timeout(200)
    pg.click('[data-lecture=me-07]')
    w={}
    for sec in ['intro','pron','grammar','vocab','reading']:
        pg.click(f'.chip[data-section={sec}]'); w[sec]=pg.evaluate('document.documentElement.scrollWidth')
    print('widths', w)
    pg.click('.chip[data-section=reading]'); pg.screenshot(path=S+'me7_reading.png', full_page=True)
    print('unglossed:', pg.evaluate("""(()=>{const t=document.querySelector('.reading');const all=t.innerText.match(/[A-Za-zÀ-ɏœæ]+/g);const g=new Set([...t.querySelectorAll('.w')].map(e=>e.innerText));return [all.length, all.filter(w=>!g.has(w))]})()"""))
    pg.locator('.reading .w').nth(10).click(); print('gloss:', pg.locator('.glossbox').inner_text().replace('\n',' | '))
    pg.click('.chip[data-section=practice]'); pg.click('[data-start=practice]')
    bad=[]
    for i in range(23):
        if i in mc: pg.click(f'[data-choice="{mc[i]}"]')
        elif i in gap: pg.fill('#ans',gap[i]); pg.click('[data-check]')
        elif i in par:
            cells=pg.locator('[data-cell]')
            for k,v in enumerate(par[i]): cells.nth(k).fill(v)
            pg.click('[data-check]')
        elif i in (8,9):
            for k in range(5): pg.click(f'[data-ml="{k}"]'); pg.click(f'[data-mr="{k}"]')
        elif i==16:
            for k in range(4): pg.click(f'[data-ob="{k}"]')
            pg.click('[data-check]')
        elif i in tr: pg.fill('#ans',tr[i]); pg.click('[data-check]')
        fb=pg.locator('.feedback').first.inner_text().split('\n')[0]
        if fb!='Correct.': bad.append((i+1,fb))
        pg.click('[data-next-item]')
    print('not correct:', bad, '|', pg.locator('#secbody').inner_text()[:35].replace('\n',' '))
    pg.click('.chip[data-section=test]')
    for run in range(4):
        pg.click('[data-start=test]')
        for i in range(10):
            if pg.locator('[data-choice]').count(): pg.locator('[data-choice]').first.click()
            elif pg.locator('[data-cell]').count(): pg.locator('[data-cell]').first.fill('x'); pg.click('[data-check]')
            elif pg.locator('#ans').count(): pg.fill('#ans','x'); pg.click('[data-check]')
            pg.click('[data-next-item]')
    print('test runs ok')
    pg.click('[data-go=cards]'); pg.click('[data-startcards]')
    for k in range(5): pg.click('[data-flip]'); pg.click('[data-grade=good]')
    pg.click('[data-go=ref]'); print('glossary entries', pg.locator('.vitem').count(), '| width', pg.evaluate('document.documentElement.scrollWidth'))
    b.close()
print('errors', errs)
