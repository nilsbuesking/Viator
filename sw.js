/* Offline support. Serves the cached app at once, then refreshes the cache in
 * the background, so a new version appears the next time the app is opened.
 * Raise VERSION when a file is renamed or removed. */
const VERSION = 'viator-v15';
const CORE = ['./', 'index.html', 'app.css', 'app.js', 'manifest.webmanifest',
  'content/catalogue.js', 'content/latin/lecture-01.js', 'content/latin/lecture-02.js', 'content/latin/lecture-03.js', 'content/latin/lecture-04.js', 'content/mnd/lecture-01.js', 'content/mnd/lecture-02.js', 'content/mhd/lecture-01.js', 'content/mhd/lecture-02.js', 'content/mhd/special-palaestinalied.js', 'content/mnd/pages.js', 'content/mhd/pages.js', 'content/oe/pages.js', 'content/oe/lecture-01.js', 'content/oe/special-maldon.js', 'content/calendar.js', 'icons/icon-180.png', 'icons/icon-192.png'];

self.addEventListener('install', e => {
  // cache: 'reload' skips the browser's own HTTP cache, which GitHub Pages lets keep files for 10 minutes
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(CORE.map(u => c.add(new Request(u, { cache: 'reload' }))))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.open(VERSION).then(async cache => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const network = fetch(e.request, { cache: 'no-cache' }).then(res => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(e.request, res.clone());
      return res;
    }).catch(() => cached);
    return cached || network;
  }));
});
