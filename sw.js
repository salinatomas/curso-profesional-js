const VERSION = 'v1'

// self es como un this pero para Service Workers
self.addEventListener('install', event => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
  const request = event.request

  // Solo queremos trabajar con peticiones GET (post, delete, put, no nos interesan)
  if (request.method !== 'GET') {
    return
  }

  // Buscar en cache
  event.respondWith(cachedResponse(request))

  // actualizar el cache
  event.waitUntil(updateCache(request))
})

async function precache() {
  const cache = await caches.open(VERSION)
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4',
  ])
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION)
  const response = await cache.match(request) // Estamos preguntando al cache si ya tiene los datos solicitados del request
  return response || fetch(request) // Si los tiene, los retornará, y si no los tiene, hará el fetch de esos datos
}
async function updateCache(request) {
  const cache = await caches.open(VERSION)
  const response = await fetch(request)
  return cache.put(request, response) 
}