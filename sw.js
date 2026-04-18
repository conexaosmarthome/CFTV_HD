const CACHE = 'cftv-calc-v2';
const FILES = [
  './index.html',
  './manifest.json',
  './logo.png',
  './icons/icon-192.png',
  './icons/icon-192-maskable.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png'
];

// Instala e cacheia todos os arquivos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(FILES))
      .then(() => self.skipWaiting())
  );
});

// Remove caches antigos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Estratégia: Network First para ícones e manifest (sempre atualizados)
//             Cache First para HTML (carregamento rápido offline)
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isAsset = /\.(png|json)(\?.*)?$/.test(url.pathname);

  if (isAsset) {
    // Network First — tenta buscar novo, cai no cache se offline
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Cache First — serve do cache, busca na rede se não tiver
    e.respondWith(
      caches.match(e.request)
        .then(cached => cached || fetch(e.request))
    );
  }
});
