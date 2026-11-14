#!/usr/bin/env python3
"""Check the Latin course against Lewis & Short and the Perseus Latin texts.

Not part of the app or the test run: a tool for content reviews (used on 14 November 2026).
It downloads two public GitHub repositories of the Perseus Digital Library (about 300 MB) into a
cache folder, then reports
  1. vocabulary: every headword, gender and principal part whose vowel lengths or gender disagree
     with Lewis & Short (Perseus XML). Lewis & Short leaves hidden quantities (a vowel before two
     consonants) unmarked and is out of date in a few places (respondeō, speī, fortasse, octō; hic/hoc
     are long by position, not by nature; lūx is masculine only in old forms);
  2. quotations: every Latin passage of four or more words in the lectures that can be found in the
     Perseus texts, with its citation there and any difference in wording.

Usage:  python3 tools/check_latin.py [cache folder, default /tmp/viator-ref]
Needs git, node and network access to github.com.
"""
import json, os, pickle, re, subprocess, sys, unicodedata, difflib
from collections import defaultdict, Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REF = sys.argv[1] if len(sys.argv) > 1 else '/tmp/viator-ref'
AUTHORS = ['phi0119', 'phi0134', 'phi0448', 'phi0472', 'phi0474', 'phi0550', 'phi0631', 'phi0690', 'phi0893',
           'phi0914', 'phi0959', 'phi0972', 'phi0978', 'phi1002', 'phi1017', 'phi1212', 'phi1221', 'phi1242',
           'phi1254', 'phi1276', 'phi1294', 'phi1318', 'phi1348', 'phi1351']

def fetch():
    os.makedirs(REF, exist_ok=True)
    for repo, paths in [('lexica', ['CTS_XML_TEI/perseus/pdllex/lat/ls']),
                        ('canonical-latinLit', ['data/' + a for a in AUTHORS])]:
        d = os.path.join(REF, repo)
        if not os.path.isdir(d):
            subprocess.run(['git', 'clone', '-q', '--depth', '1', '--filter=blob:none', '--sparse',
                            f'https://github.com/PerseusDL/{repo}.git', d], check=True)
            subprocess.run(['git', '-C', d, 'sparse-checkout', 'set'] + paths, check=True)

def norm(w):
    w = unicodedata.normalize('NFD', w.lower())
    return ''.join(c for c in w if not unicodedata.combining(c)).replace('v', 'u').replace('j', 'i')

def marks(w):
    """letters with their length mark: L (macron), S (breve), C (Lewis & Short's ^, common), '' (none)"""
    out = []
    for ch in unicodedata.normalize('NFD', w):
        if unicodedata.combining(ch):
            if out and ch == '̄': out[-1][1] = 'L'
            elif out and ch == '̆': out[-1][1] = 'S'
            continue
        c = ch.lower()
        if c == '^' and out: out[-1][1] = 'C'; continue
        if c.isalpha(): out.append([{'j': 'i', 'v': 'u'}.get(c, c), ''])
    return out

def disagreements(ours, ls):
    """compare Lewis & Short's form as the ending of ours; None if the letters do not match"""
    a, b = marks(ours), marks(ls)
    if not b or len(b) > len(a) or [x for x, _ in a[-len(b):]] != [x for x, _ in b]: return None
    off, bad = len(a) - len(b), []
    for i, (c, m) in enumerate(b):
        am = a[off + i][1]
        if c in 'aeiouy' and ((am == 'L' and m == 'S') or (am == '' and m == 'L')):
            bad.append(''.join(x.upper() if k == off + i else x for k, (x, _) in enumerate(a)))
    return bad

def content():
    js = r"""const fs=require('fs');const out={};for(const f of fs.readdirSync('content/latin').sort()){let L;
const Viator={addLecture:(c,l)=>{L=l}};eval(fs.readFileSync('content/latin/'+f,'utf8'));const sp=[];
const fields=[['intro',L.intro],['culture',L.culture],['pron',L.pronunciation]];
(L.background||[]).forEach(b=>fields.push(['background',b.html]));(L.grammar||[]).forEach(b=>fields.push(['grammar',b.html]));
if(L.reading){fields.push(['reading','<span class="la">'+(L.reading.text||'').replace(/\n/g,' / ')+'</span>']);(L.reading.notes||[]).forEach(n=>fields.push(['note',n.html]));}
for(const [k,h] of fields)for(const m of String(h||'').matchAll(/<(span|p|div|em|i)[^>]*class="[^"]*\bla\b[^"]*"[^>]*>([\s\S]*?)<\/\1>/g)){
const t=m[2].replace(/<br\s*\/?>/g,' / ').replace(/<[^>]+>/g,'').replace(/&[a-z]+;/g,' ');if(t.split(/\s+/).filter(Boolean).length>=4)sp.push([k,t]);}
out[L.id]={vocab:L.vocab,spans:sp};}console.log(JSON.stringify(out));"""
    return json.loads(subprocess.run(['node', '-e', js], cwd=ROOT, capture_output=True, text=True, check=True).stdout)

def lewis_short():
    x = open(os.path.join(REF, 'lexica/CTS_XML_TEI/perseus/pdllex/lat/ls/lat.ls.perseus-eng2.xml'), encoding='utf8').read()
    ls = defaultdict(list)
    for key, body in re.findall(r'<entryFree [^>]*key="([^"]+)"[^>]*>(.*?)</entryFree>', x, flags=re.S):
        head = body[:600]
        ls[norm(re.sub(r'\d+$', '', key))].append({
            'orth': re.findall(r'<orth[^>]*>(.*?)</orth>', head), 'itype': re.findall(r'<itype>(.*?)</itype>', head),
            'gen': ' '.join(re.findall(r'<gen>(.*?)</gen>', head))})
    return ls

def check_vocab(C, LS):
    print('== Vocabulary against Lewis & Short')
    n = 0
    for lid, lec in C.items():
        for v in lec['vocab']:
            head = v.get('head', '')
            if not head or ' ' in head.strip(): continue
            best = None
            for e in LS.get(norm(head), []):
                if e['orth']:
                    d = disagreements(head, e['orth'][0])
                    if d is not None and (best is None or len(d) < len(best[0])): best = (d, e)
            if best is None: continue
            bad, e = best
            g = v.get('g', '')
            if g in ('m', 'f', 'n') and e['gen'] and not e['gen'].startswith(g + '.') and 'com' not in e['gen']:
                bad.append(f'gender {g} (L&S {e["gen"]})')
            ls_parts = [p.split()[0] for it in e['itype'] for p in re.split(r'[,;]| or ', re.sub(r'\(.*?\)', '', it)) if p.strip() and not p.strip().isdigit()]
            for part in [p.strip().split()[0] for p in re.split(r'[,;]', v.get('la', ''))[1:] if p.strip()]:
                for q in ls_parts:
                    d = disagreements(part, q)
                    if d: bad += d
            for b in bad: print(f'  {lid} {v.get("id")}: {b}'); n += 1
    print(f'  {n} disagreements')

def perseus():
    cache = os.path.join(REF, 'perseus-words.pkl')
    if os.path.exists(cache): return pickle.load(open(cache, 'rb'))
    TAG = re.compile(r'<(/?)([A-Za-z:]+)([^>]*?)(/?)>|([^<]+)', re.S)
    C = {}
    base = os.path.join(REF, 'canonical-latinLit/data')
    for a in os.listdir(base):
        for w in os.listdir(os.path.join(base, a)):
            d = os.path.join(base, a, w)
            if not os.path.isdir(d): continue
            for f in os.listdir(d):
                if 'lat' not in f or not f.endswith('.xml'): continue
                x = open(os.path.join(d, f), encoding='utf8').read()
                x = re.sub(r'<teiHeader.*?</teiHeader>', ' ', x, flags=re.S)
                x = re.sub(r'<(note|bibl|head|del|sic)\b[^>]*>.*?</\1>', ' ', x, flags=re.S)
                stack, line, ms, toks = [], None, {}, []
                for close, name, attrs, selfc, text in TAG.findall(x[x.find('<body'):]):
                    if text:
                        label = '.'.join(s for s in stack if s) + ''.join('.' + ms[u] for u in ('chapter', 'section') if u in ms) + (':' + line if line else '')
                        toks += [(norm(t), label) for t in re.findall(r'[A-Za-zÀ-ɏ]+', text)]
                    elif name == 'div':
                        if close: stack and stack.pop(); ms = {}
                        elif not selfc:
                            n = re.search(r'\bn="([^"]+)"', attrs); t = re.search(r'subtype="([^"]+)"', attrs) or re.search(r'type="([^"]+)"', attrs)
                            stack.append(n.group(1) if n and not (t and t.group(1) in ('edition', 'translation')) else ''); ms = {}
                    elif name == 'l' and not close:
                        n = re.search(r'\bn="([^"]+)"', attrs); line = n.group(1) if n else line
                    elif name == 'milestone':
                        u, n = re.search(r'unit="([^"]+)"', attrs), re.search(r'\bn="([^"]+)"', attrs)
                        if u and n: ms[u.group(1)] = n.group(1)
                C[f.split('.perseus')[0]] = toks
    pickle.dump(C, open(cache, 'wb'))
    return C

def check_quotes(C, P):
    print('== Latin passages found in the Perseus texts')
    names = list(P); idx = defaultdict(list); freq = Counter()
    for fi, n in enumerate(names):
        for p, (w, _) in enumerate(P[n]): idx[w].append((fi, p)); freq[w] += 1
    found = 0
    for lid, lec in C.items():
        for field, text in lec['spans']:
            ws = [norm(w) for w in re.findall(r'[A-Za-zÀ-ɏ]+', text)]
            votes = Counter()
            for w in sorted({w for w in ws if 0 < freq[w] <= 3000}, key=lambda w: freq[w])[:3]:
                for fi, p in idx[w]: votes[(fi, p - ws.index(w))] += 1
            best = None
            for (fi, start), _ in votes.most_common(8):
                seg = P[names[fi]][max(0, start - 3):max(0, start - 3) + len(ws) + 6]
                sm = difflib.SequenceMatcher(None, ws, [t[0] for t in seg], autojunk=False)
                r = sum(b.size for b in sm.get_matching_blocks()) / len(ws)
                if not best or r > best[0]: best = (r, names[fi], seg, sm)
            if not best or best[0] < 0.75: continue
            found += 1
            r, work, seg, sm = best
            first = next((b.b for b in sm.get_matching_blocks() if b.size), 0)
            diffs = [f'ours [{" ".join(ws[a1:a2])}] Perseus [{" ".join(t[0] for t in seg[b1:b2])}]'
                     for op, a1, a2, b1, b2 in sm.get_opcodes()
                     if op != 'equal' and not (op == 'insert' and (b1 == 0 or b2 == len(seg) or a1 in (0, len(ws))))]
            print(f'  {lid} {field}: {work} {seg[first][1]}  “{text[:60]}”')
            for d in diffs: print('      ', d)
    print(f'  {found} passages found')

if __name__ == '__main__':
    fetch()
    C = content()
    check_vocab(C, lewis_short())
    check_quotes(C, perseus())
