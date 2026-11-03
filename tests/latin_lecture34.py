import os; os.makedirs('/tmp/viator-shots', exist_ok=True)
from playwright.sync_api import sync_playwright
mc={0:0,1:0,2:0,3:0,4:0,5:0,22:0,23:0,24:0}
gap={6:'ēs',7:'erem',8:'erit',9:'sī',10:'issem',11:'nisi'}
par={12:['haberem','vidissem','haberes','vidisses','haberet','vidisset','haberemus','vidissemus','haberetis','vidissetis','haberent','vidissent'],
     13:['veniam','adessem','venias','adesses','veniat','adesset','veniamus','adessemus','veniatis','adessetis','veniant','adessent']}
tr={16:'If you love me, come with me.',17:'If you had said this, you would have been wrong.',18:'If they had not fled, they would have died.',19:'sī adessēs',20:'nisi',21:'sī vēnisset'}
errs=[]
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':390,'height':844}, device_scale_factor=2)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.route('https://upload.wikimedia.org/**', lambda r: r.fulfill(status=404, body=''))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(500)
    pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_timeout(500)
    print('lectures listed:', pg.locator('.lect').count(), '| width', pg.evaluate('document.documentElement.scrollWidth'))
    pg.click('[data-lecture=la-34]')
    w={}
    for sec in ['intro','pron','grammar','vocab','reading']:
        pg.click(f'.chip[data-section={sec}]'); w[sec]=pg.evaluate('document.documentElement.scrollWidth')
    print('widths', w)
    pg.click('.chip[data-section=reading]')
    print('unglossed:', pg.evaluate("""(()=>{const t=document.querySelector('.reading');const all=t.innerText.match(/[A-Za-zÀ-ſ]+/g);const g=new Set([...t.querySelectorAll('.w')].map(e=>e.innerText));return [all.length, all.filter(w=>!g.has(w))]})()"""))
    pg.click('.chip[data-section=practice]'); pg.click('[data-start=practice]')
    bad=[]
    for i in range(25):
        if i in mc: pg.click(f'[data-choice="{mc[i]}"]')
        elif i in gap: pg.fill('#ans',gap[i]); pg.click('[data-check]')
        elif i in par:
            cells=pg.locator('[data-cell]')
            for k,v in enumerate(par[i]): cells.nth(k).fill(v)
            pg.click('[data-check]')
        elif i==14:
            for k in range(5): pg.click(f'[data-ml="{k}"]'); pg.click(f'[data-mr="{k}"]')
        elif i==15:
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
    pg.click('[data-go=ref]'); print('glossary entries', pg.locator('.vitem').count())
    b.close()
print('errors', errs)
