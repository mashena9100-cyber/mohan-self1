const CACHE='mohan-self-v2';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('mohan-self-')&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim();})()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith((async()=>{const cached=await caches.match(e.request);if(cached)return cached;try{const r=await fetch(e.request);if(r.ok){const c=await caches.open(CACHE);c.put(e.request,r.clone());}return r;}catch(err){return cached||Response.error();}})());});
