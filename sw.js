// DentaLog SW v5 — bump version to force full cache clear on all devices
const CACHE = 'dentalog-v5';

self.addEventListener('install', e => {
  self.skipWaiting(); // activate immediately, don't wait
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(['/', '/index.html', '/manifest.json']))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim()) // take control of all open tabs immediately
  );
});

self.addEventListener('fetch', e => {
  if (!e.request.url.startsWith(self.location.origin)) return;
  // Network first for HTML — always get fresh app code
  if (e.request.url.endsWith('.html') || e.request.url.endsWith('/')) {
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  // Cache first for assets
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      if (res.ok) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match('/index.html')))
  );
});
