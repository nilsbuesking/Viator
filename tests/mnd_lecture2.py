import os; os.makedirs('/tmp/viator-shots', exist_ok=True)
from playwright.sync_api import sync_playwright
S='/tmp/viator-shots/'; errs=[]
mc={0:0,1:0,2:0,8:0,9:0,10:0,11:0,13:0,14:0,17:0}
gap={3:'vnde',4:'deme',5:'40',6:'4',7:'1469'}
tr={15:'Geschrieben in London in England im Jahre unseres Herrn 1469.',16:'Friendly greetings'}
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':390,'height':844}, device_scale_factor=2)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(600)
    pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_timeout(500)
    pg.select_option('#coursepick','mnd')
    print('lectures listed:', pg.locator('.lect .t').all_inner_texts())
    pg.click('[data-lecture=mnd-02]')
    widths={}
    for sec in ['intro','grammar','vocab','reading']:
        pg.click(f'.chip[data-section={sec}]'); widths[sec]=pg.evaluate('document.documentElement.scrollWidth')
    print('widths', widths)
    pg.click('.chip[data-section=grammar]'); pg.click('[data-jump="g-1"]'); pg.wait_for_timeout(600); pg.screenshot(path=S+'p_abbr.png')
    pg.click('.chip[data-section=reading]')
    def unglossed():
        return pg.evaluate("""(()=>{const t=document.querySelector('.reading');const all=t.innerText.match(/(?:[A-Za-zÀ-ſ]|\[[A-Za-z]+\])+/g);const g=new Set([...t.querySelectorAll('.w')].map(e=>e.innerText));return [all.length, all.filter(w=>!g.has(w))]})()""")
    print('start view label:', pg.locator('[data-rview][aria-pressed=true]').inner_text())
    print('as printed: words, unglossed ->', unglossed())
    pg.click('[data-rview=norm]'); print('normalised: words, unglossed ->', unglossed())
    pg.click('[data-rview=dipl]'); pg.locator('.reading .w').nth(3).click(); print('gloss:', pg.locator('.glossbox').inner_text())
    pg.screenshot(path=S+'p_read.png')
    pg.click('.chip[data-section=practice]'); pg.click('[data-start=practice]')
    bad=[]
    for i in range(18):
        if i in mc: pg.click(f'[data-choice="{mc[i]}"]')
        elif i in gap: pg.fill('#ans',gap[i]); pg.click('[data-check]')
        elif i==12:
            for k in range(5): pg.click(f'[data-ml="{k}"]'); pg.click(f'[data-mr="{k}"]')
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
            elif pg.locator('#ans').count(): pg.fill('#ans','x'); pg.click('[data-check]')
            pg.click('[data-next-item]')
    print('test runs ok')
    pg.click('[data-go=ref]'); pg.click('[data-refpage=tables]'); print('tables:', pg.locator('.gblock h3').count())
    b.close()
print('errors', errs)
