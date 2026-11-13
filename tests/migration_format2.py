# Progress format 2: Middle Low German special lecture progress and cards move from mnd-s1 to mhd-s2 (old backups restore too)
import json
from playwright.sync_api import sync_playwright
old = {'format':1,'created':'2026-11-01T00:00:00Z','lastExport':None,'activeCourse':'mnd','streak':{'count':2,'last':0},'settings':{},
 'courses':{'mnd':{'lectures':{'mnd-01':{'started':True,'sections':{'intro':True},'testBest':80,'testRuns':1},
                               'mnd-s1':{'started':True,'sections':{'intro':True,'grammar':True},'testBest':70,'testRuns':1}},
                   'cards':{'v:mnd-s1:kopman:f':{'box':2,'due':5,'lapses':0},'g:mnd-s1:x':{'box':1,'due':3,'lapses':1},'v:mnd-01:ik:f':{'box':1,'due':3,'lapses':0}},
                   'newToday':{'day':0,'count':0},'misses':{'mnd-s1:e3':2,'mnd-01:e1':1}}}}
errs=[]
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':390,'height':844})
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://localhost:8765/index.html'); pg.wait_for_timeout(400)
    pg.evaluate("s=>localStorage.setItem('viator.progress', s)", json.dumps(old)); pg.reload(); pg.wait_for_timeout(600)
    pg.select_option('#coursepick','mhd'); pg.wait_for_timeout(200)   # triggers a save
    P=json.loads(pg.evaluate("localStorage.getItem('viator.progress')"))
    mhd=P['courses'].get('mhd',{}); mnd=P['courses']['mnd']
    ok = [P['format']>=2, mhd['lectures']['mhd-s2']['sections']=={'intro':True,'grammar':True}, 'mnd-s1' not in mnd['lectures'],
          'v:mhd-s2:kopman:f' in mhd['cards'], 'g:mhd-s2:x' in mhd['cards'], 'v:mnd-01:ik:f' in mnd['cards'], mhd['misses'].get('mhd-s2:e3')==2]
    print(('ok   ' if all(ok) else 'FAIL ') + 'migration checks: ' + str(ok))
    print(('ok   ' if pg.locator('[data-lecture=mhd-s2]').count()==1 else 'FAIL ') + 'special lecture shown')
    print('mnd offered in course list:', 'mnd' in pg.locator('#coursepick option').evaluate_all('o=>o.map(x=>x.value)'))
    print('errors:', errs); b.close()
