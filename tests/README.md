# Browser tests

Run from the project folder with a local server on port 8765:

    python3 -m http.server 8765 &
    for f in tests/*.py; do python3 "$f"; done

Each script drives the app at iPhone width with Playwright (Chromium) and prints
results; every line should report no errors and no incorrect answers. Screenshots
go to /tmp/viator-shots. `dates.py` needs `python-dateutil` (independent Easter
calculation). Google Fonts are unreachable in some sandboxes; that console message
is harmless.
