const CACHE = 'equipdoc-v6';

const CORE = [
  './index.html',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'
];

// Instalação: cacheia tudo que conseguir
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(async c => {
      for(const url of CORE){
        try {
          const res = await fetch(url);
          if(res.ok) await c.put(url, res);
        } catch(err){}
      }
    })
  );
  self.skipWaiting();
});

// Ativação: remove caches antigos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: CACHE FIRST — nunca vai à internet sozinho após cachear
self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      // Tem no cache? Retorna imediatamente, sem tocar na internet
      if(cached) return cached;

      // Não tem ainda: busca uma vez, salva no cache e retorna
      return fetch(e.request).then(response => {
        if(!response || response.status !== 200 || response.type === 'opaqueredirect'){
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return response;
      }).catch(() => {
        if(e.request.mode === 'navigate') return caches.match('./index.html');
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
