#!/usr/bin/env python3
"""Run every test and summarise.  Usage, from the project folder:

    python3 tests/run_all.py            # all tests, four at a time
    python3 tests/run_all.py mhd_       # only tests whose file name contains "mhd_"

Starts a local server on port 8765 if none is running. Runs the fast content check first
(tests/validate_content.js), then the browser tests in parallel. A test FAILS if it crashes, prints a line
starting "FAIL", reports incorrect answers ("not correct: [...]") or page errors ("errors [...]"), or prints
"N (expect M)" with different numbers. Unglossed words in a reading are reported as warnings.
Full output of each test: /tmp/viator-test-logs/<test>.log. Exit code 1 if anything failed.
"""
import os, re, subprocess, sys, time, socket
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGS = '/tmp/viator-test-logs'
WORKERS = 4

def server_up():
    try:
        with socket.create_connection(('localhost', 8765), timeout=1): return True
    except OSError: return False

def judge(out, code):
    fails, warns = [], []
    if code != 0: fails.append(f'exit code {code}')
    for line in out.splitlines():
        s = line.strip()
        if s.startswith('Traceback') or s.startswith('FAIL'): fails.append(s[:160])
        elif re.search(r'not correct: \[(?!\])', s): fails.append(s[:160])
        elif re.search(r'errors:? \[(?!\])', s): fails.append(s[:160])
        else:
            m = re.search(r'(\d+) \(expect (\d+)\)', s)
            if m and m.group(1) != m.group(2): fails.append(s[:160])
            if re.search(r"unglossed[^:]*: \[\d+, \[(?!\])", s): warns.append(s[:160])
    return fails, warns

def run(path):
    name = os.path.basename(path)
    t0 = time.time()
    try:
        p = subprocess.run([sys.executable, path], cwd=ROOT, capture_output=True, text=True, timeout=900)
        out, code = p.stdout + p.stderr, p.returncode
    except subprocess.TimeoutExpired as e:
        out, code = (e.stdout or '') if isinstance(e.stdout, str) else '', 'timeout'
    open(os.path.join(LOGS, name + '.log'), 'w').write(out)
    fails, warns = judge(out, 0 if code == 0 else code)
    return name, fails, warns, time.time() - t0

def main():
    os.makedirs(LOGS, exist_ok=True)
    pattern = sys.argv[1] if len(sys.argv) > 1 else ''
    started = None
    if not server_up():
        started = subprocess.Popen([sys.executable, '-m', 'http.server', '8765'], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        for _ in range(50):
            if server_up(): break
            time.sleep(0.1)
    t0 = time.time()
    v = subprocess.run(['node', os.path.join(ROOT, 'tests', 'validate_content.js')], cwd=ROOT, capture_output=True, text=True)
    print(v.stdout.strip().splitlines()[-1] if v.stdout.strip() else v.stderr.strip())
    failed = []
    if v.returncode != 0:
        failed.append(('validate_content.js', [l for l in v.stdout.splitlines() if not l.startswith('NOTE')][:10], []))
    tests = sorted(os.path.join(ROOT, 'tests', f) for f in os.listdir(os.path.join(ROOT, 'tests'))
                   if f.endswith('.py') and f != 'run_all.py' and pattern in f)
    print(f'running {len(tests)} browser tests, {WORKERS} at a time …', flush=True)
    warned = []
    try:
        with ThreadPoolExecutor(WORKERS) as ex:
            for name, fails, warns, secs in ex.map(run, tests):
                print(f"  {'FAIL' if fails else 'ok  '} {name} ({secs:.0f} s)", flush=True)
                if fails: failed.append((name, fails, warns))
                elif warns: warned.append((name, warns))
    finally:
        if started: started.terminate()
    print()
    for name, warns in warned:
        print(f'warning {name}: ' + '; '.join(warns))
    for name, fails, _ in failed:
        print(f'FAILED {name}:'); [print('    ' + f) for f in fails[:8]]
    total = len(tests) + 1
    print(f'\n{total - len(failed)} of {total} passed in {time.time() - t0:.0f} s. Logs: {LOGS}')
    sys.exit(1 if failed else 0)

if __name__ == '__main__':
    main()
