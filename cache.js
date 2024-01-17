const assets = [ 
    '/',
    '/index.html',
    '/static/menu.css',
    '/static/edt.css',
    '/static/calc.css',
    '/static/course.css',
    '/static/style.css',
    '/static/tools.css',
    '/static/edt.js',
    '/static/menu.js',
    '/static/course.js',
    '/static/anime.js',
    '/static/images/video.jpg',
    '/static/images/anime.jpg',
    '/static/images/logo.png',
    '/static/images/podcast.jpg',
    '/static/images/fond1.jpg',
    '/static/images/fond2.jpg',
    '/static/images/fond3.jpg',
    '/static/images/fond4.jpg',
    '/static/icon/anilist.png',
    '/static/icon/chess.png',
    '/static/icon/dev.png',
    '/static/icon/outils.png',
    '/static/icon/pronotes.png',
    '/static/icon/shop.png',
    '/static/icon/video.png',
    '/manifest.webmanifest',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css',
    'https://cdn.tailwindcss.com',
    'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
    'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js',
    'https://kit-pro.fontawesome.com/releases/v5.12.1/css/pro.min.css',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
  ];  
  
  
  // IDEE 1
  self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('sw-cache').then(function(cache) {
        return cache.addAll(assets);
      })
    );
  });
  
  
  
  
  // On network request
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      // Try the cache
      caches.match(event.request).then(function(response) {
        //If response found return it, else fetch again
        return response || fetch(event.request);
      })
    );
  });