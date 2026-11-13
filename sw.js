/* Offline support. Serves the cached app at once, then refreshes the cache in
 * the background, so a new version appears the next time the app is opened.
 * Raise VERSION when a file is renamed or removed.
 * Pictures and fonts from other sites (Wikimedia Commons, Google Fonts) go into a separate cache, MEDIA, which
 * survives version changes, so a picture seen once online stays available offline. */
const VERSION = 'viator-v99';
const MEDIA = 'viator-media';
const MEDIA_MAX = 400;   // entries; the oldest are removed beyond this
const CORE = ['./', 'index.html', 'app.css', 'app.js', 'manifest.webmanifest',
  'content/catalogue.js', 'content/latin/lecture-01.js', 'content/latin/lecture-02.js', 'content/latin/lecture-03.js', 'content/latin/lecture-04.js', 'content/latin/lecture-05.js', 'content/latin/lecture-06.js', 'content/latin/lecture-07.js', 'content/latin/lecture-08.js', 'content/latin/lecture-09.js', 'content/latin/lecture-10.js', 'content/latin/lecture-11.js', 'content/latin/lecture-12.js', 'content/latin/lecture-13.js', 'content/latin/lecture-14.js', 'content/latin/lecture-15.js', 'content/latin/lecture-16.js', 'content/latin/lecture-17.js', 'content/latin/lecture-18.js', 'content/latin/lecture-19.js', 'content/latin/lecture-20.js', 'content/latin/lecture-21.js', 'content/latin/lecture-22.js', 'content/latin/lecture-23.js', 'content/latin/lecture-24.js', 'content/latin/lecture-25.js', 'content/latin/lecture-26.js', 'content/latin/lecture-27.js', 'content/latin/lecture-28.js', 'content/latin/lecture-29.js', 'content/latin/lecture-30.js', 'content/latin/lecture-31.js', 'content/latin/lecture-32.js', 'content/latin/lecture-33.js', 'content/latin/lecture-34.js', 'content/latin/lecture-35.js', 'content/latin/lecture-36.js', 'content/latin/lecture-37.js', 'content/latin/lecture-38.js', 'content/latin/lecture-39.js', 'content/latin/lecture-40.js', 'content/latin/lecture-41.js', 'content/mhd/lecture-01.js', 'content/mhd/lecture-02.js', 'content/mhd/lecture-03.js', 'content/mhd/lecture-04.js', 'content/mhd/lecture-05.js', 'content/mhd/lecture-06.js', 'content/mhd/lecture-07.js', 'content/mhd/lecture-08.js', 'content/mhd/lecture-09.js', 'content/mhd/lecture-10.js', 'content/mhd/lecture-11.js', 'content/mhd/special-palaestinalied.js', 'content/mhd/special-german-1-ohg.js', 'content/mhd/special-german-2-saxon.js', 'content/mhd/special-german-3-mhg.js', 'content/mhd/special-german-4-enhg.js', 'content/mhd/special-german-5-standard.js', 'content/mhd/special-german-6-platt.js', 'content/mhd/pages.js', 'content/oe/pages.js', 'content/me/pages.js', 'content/oe/lecture-01.js', 'content/oe/lecture-02.js', 'content/oe/lecture-03.js', 'content/oe/lecture-04.js', 'content/oe/lecture-05.js', 'content/oe/lecture-06.js', 'content/oe/lecture-07.js', 'content/oe/lecture-08.js', 'content/oe/lecture-09.js', 'content/oe/lecture-10.js', 'content/oe/lecture-11.js', 'content/oe/lecture-12.js', 'content/oe/special-maldon.js', 'content/me/lecture-01.js', 'content/me/lecture-02.js', 'content/me/lecture-03.js', 'content/me/lecture-04.js', 'content/me/lecture-05.js', 'content/me/lecture-06.js', 'content/me/lecture-07.js', 'content/me/lecture-08.js', 'content/me/lecture-09.js', 'content/me/lecture-10.js', 'content/me/lecture-11.js', 'content/me/lecture-12.js', 'content/calendar.js', 'icons/icon-180.png', 'icons/icon-192.png'];

self.addEventListener('install', e => {
  // cache: 'reload' skips the browser's own HTTP cache, which GitHub Pages lets keep files for 10 minutes
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(CORE.map(u => c.add(new Request(u, { cache: 'reload' }))))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== MEDIA).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== self.location.origin) { e.respondWith(media(e.request)); return; }
  e.respondWith(caches.open(VERSION).then(async cache => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const network = fetch(e.request, { cache: 'no-cache' }).then(res => {
      if (res && res.ok) cache.put(e.request, res.clone()).catch(() => {});
      return res;
    }).catch(() => cached);
    return cached || network;
  }));
});

// Pictures and fonts: from the cache if there, otherwise from the network and then kept. Matched by the full
// address, because the two Google Fonts stylesheets differ only after the "?".
async function media(req) {
  const cache = await caches.open(MEDIA);
  const hit = await cache.match(req);
  if (hit) return hit;
  let res;
  try {
    // A CORS copy where the site allows one (Wikimedia and Google both do): browsers count an opaque copy against
    // storage at a much inflated size.
    res = await fetch(req.url, { mode: 'cors', credentials: 'omit' });
  } catch (e) {
    try { res = await fetch(req); } catch (e2) { return Response.error(); }
  }
  if (res && (res.ok || res.type === 'opaque')) {
    try { await cache.put(req, res.clone()); trim(cache); } catch (e) { /* storage full: serve without keeping */ }
  }
  return res;
}
async function trim(cache) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MEDIA_MAX; i++) await cache.delete(keys[i]);
}
