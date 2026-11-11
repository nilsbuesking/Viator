import os; os.makedirs('/tmp/viator-shots', exist_ok=True)
from playwright.sync_api import sync_playwright
S='/tmp/viator-shots/'
mc={0:0,1:0,2:0,3:0,6:0,14:0,15:0,16:0,23:0,24:0}
gap={7:'et',8:'est',9:'et',10:'en',11:'is'}
par={12:['make','makest','makt','maket','maken','maket'], 13:['bin','hebbe','bist','hest','is','heft','sint','hebbet']}
tr={18:'Wir machen das Schiff.',19:'Das Wasser ist im Hause.',20:'I have a letter from the council.',21:'Wy hebben ein schip.',22:'Dat hus is in der stadt.'}
errs=[]
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':390,'height':844}, device_scale_factor=2)
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(500)
    pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_timeout(500)
    pg.select_option('#coursepick','mnd'); pg.wait_for_timeout(200)
    pg.screenshot(path=S+'m_home.png')
    pg.click('text=Start lecture')
    widths={}
    for sec in ['intro','pron','grammar','vocab','reading']:
        pg.click(f'.chip[data-section={sec}]'); widths[sec]=pg.evaluate('document.documentElement.scrollWidth')
    print('widths',widths)
    pg.click('.chip[data-section=grammar]'); pg.click('[data-jump="g-1"]'); pg.wait_for_timeout(600); pg.screenshot(path=S+'m_vowels.png')
    pg.click('.chip[data-section=vocab]'); pg.screenshot(path=S+'m_vocab.png')
    # reading: normalised gloss coverage, then as written
    pg.click('.chip[data-section=reading]')
    def coverage():
        tot=pg.evaluate("document.querySelector('.reading').innerText.match(/[A-Za-zÀ-ſ]+/g).length")
        return tot, pg.locator('.reading .w').count()
    print('normalised words/glossed', coverage())
    pg.locator('.reading .w').nth(5).click(); print('gloss:', pg.locator('.glossbox').inner_text())
    pg.click('[data-rview=dipl]'); print('as-written words/glossed', coverage())
    unglossed=pg.evaluate("""(()=>{const all=document.querySelector('.reading').innerText.match(/[A-Za-zÀ-ſ]+/g);const g=[...document.querySelectorAll('.reading .w')].map(e=>e.innerText);const s=new Set(g);return all.filter(w=>!s.has(w))})()""")
    print('unglossed as written:', unglossed)
    pg.locator('.reading .w').nth(2).click(); print('gloss:', pg.locator('.glossbox').inner_text())
    pg.screenshot(path=S+'m_dipl.png')
    pg.click('[data-rview=norm]')
    pg.click('.chip[data-section=practice]'); pg.click('[data-start=practice]')
    bad=[]
    for i in range(25):
        if i in mc: pg.click(f'[data-choice="{mc[i]}"]')
        elif i in gap: pg.fill('#ans',gap[i]); pg.click('[data-check]')
        elif i in par:
            cells=pg.locator('[data-cell]')
            for k,v in enumerate(par[i]): cells.nth(k).fill(v)
            pg.click('[data-check]')
        elif i in (4,5):
            for k in range(5): pg.click(f'[data-ml="{k}"]'); pg.click(f'[data-mr="{k}"]')
        elif i==17:
            for k in range(4): pg.click(f'[data-ob="{k}"]')
            pg.click('[data-check]')
        elif i in tr: pg.fill('#ans',tr[i]); pg.click('[data-check]')
        fb=pg.locator('.feedback').first.inner_text().split('\n')[0]
        if fb!='Correct.': bad.append((i+1,fb))
        if i==21: pg.screenshot(path=S+'m_tr.png')
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
    pg.click('[data-go=cards]'); pg.click('[data-startcards]')
    fronts=[]
    for k in range(6):
        pg.click('[data-flip]'); fronts.append(pg.locator('.card').inner_text().replace('\n',' | ')[:90]); pg.click('[data-grade=good]')
    print('cards:', fronts[:3])
    pg.click('[data-go=ref]'); pg.fill('#refsearch','Wasser'); print('search Wasser ->', pg.locator('.vitem .vla').all_inner_texts())
    pg.fill('#refsearch','vnde'); print('search vnde ->', pg.locator('.vitem .vla').all_inner_texts())
    pg.click('[data-go=progress]'); print('settings label:', pg.locator('label[for=sMac]').inner_text().replace('\n',' / '))
    pg.emulate_media(color_scheme='dark'); pg.click('[data-go=home]'); pg.screenshot(path=S+'m_dark.png')
    print('dark width', pg.evaluate('document.documentElement.scrollWidth'))
    pg.select_option('#coursepick','latin'); print('back to latin:', pg.locator('section p.eyebrow').last.inner_text())
    b.close()
print('errors', errs)
