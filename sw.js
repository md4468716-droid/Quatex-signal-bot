concononj C = "fx-signal-v1";
self.addEventListener("install", e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(["./", "./index.html", "./manifest.json"])));
  self.skipWaiting();
});
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});{
  "name": "FX Signal",
  "short_name": "FX Signal",
  "start_url": "./index.html",
  "scope": "./",
  "display": "standalone",
  "background_color": "#0b1220",
  "theme_color": "#0b1220",
  "icons": [
    {"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable"},
    {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable"}
  ]
}const C = "fx-signal-v1";
self.addEventListener("install", e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(["./", "./index.html", "./manifest.json"])));
  self.skipWaiting();
});
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
