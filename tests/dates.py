import os; os.makedirs('/tmp/viator-shots', exist_ok=True)
import json, datetime
from dateutil.easter import easter, EASTER_JULIAN, EASTER_WESTERN
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':390,'height':844}); errs=[]
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(600)
    res=pg.evaluate("""(()=>{const C=window.ViatorCalendar;const out={};for(let y=1200;y<=1800;y++){const j=C.easter(y,false),g=C.easter(y,true);out[y]=[j.m,j.d,g.m,g.d];}
      // Julian↔Gregorian conversion and weekday checks
      const k=C.jdnJ(1582,10,4), g=C.fromG(k+1); out.conv=[g.y,g.m,g.d];
      out.wd1400=C.jdnJ(1400,6,24)%7; out.today=C.jdnG(2026,11,1)%7; out.rt=C.fromJ(C.jdnJ(1400,2,29)); return out;})()""")
    bad=[]
    for y in range(1200,1801):
        ej=easter(y,EASTER_JULIAN); eg=easter(y,EASTER_WESTERN) if y>=1583 else None
        a=res[str(y)]
        if (a[0],a[1])!=(ej.month,ej.day): bad.append(('J',y,a[:2],(ej.month,ej.day)))
        if eg and (a[2],a[3])!=(eg.month,eg.day): bad.append(('G',y,a[2:],(eg.month,eg.day)))
    print('easter mismatches:', bad[:5], len(bad))
    print('day after 4 Oct 1582 (Julian) in Gregorian:', res['conv'], '(expect 1582,10,15)')
    print('24 Jun 1400 weekday idx (0=Mon):', res['wd1400'], '(expect 3 = Thursday)')
    print('1 Nov 2026 weekday idx:', res['today'], '(expect 6 = Sunday)')
    print('29 Feb 1400 Julian round trip:', res['rt'])
    # UI: Reference → Dates
    pg.click('[data-go=ref]'); pg.click('[data-refpage=dates]')
    print(pg.locator('.today.lead').inner_text())
    pg.select_option('#dRel','wdafter'); pg.select_option('#dWd','6'); print(pg.locator('.today.lead').inner_text(), '(expect Sunday, 27 June 1400)')
    pg.select_option('#dFeast','easter'); pg.select_option('#dRel','on'); pg.fill('#dYear','1469'); pg.locator('#dYear').dispatch_event('change'); print('Easter 1469:', pg.locator('.today.lead').inner_text())
    pg.select_option('#dFeast','matthias'); pg.fill('#dYear','1400'); pg.locator('#dYear').dispatch_event('change'); print('Matthias 1400 (leap):', pg.locator('.today.lead').inner_text())
    print('width', pg.evaluate('document.documentElement.scrollWidth')); pg.screenshot(path='/tmp/viator-shots/dates.png', full_page=True)
    b.close()
print('dateutil Easter 1469 Julian:', easter(1469,EASTER_JULIAN)); print('errors', errs)
