// Atom Burst service worker: lets the game open offline (local & bot games) and makes repeat loads instant.
// Own files are network-first so updates show up right away; the cached copy is only used when offline.
const CACHE = 'cr-v2';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

function put(req, res) {
  if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
  return res;
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    e.respondWith(fetch(req).then(res => put(req, res)).catch(() =>
      caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html'))));
  } else if (/\/peerjs@[\d.]+\/dist\/peerjs\.min\.js$/.test(url.pathname)) {
    // the online-play library never changes for a pinned version: cache-first
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => put(req, res))));
  }
});
