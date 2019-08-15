self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('PizzaPy').then(function(cache) {
     return cache.addAll([
       'index.html',
       '/custom.css',
       '/manifest1.json',
       '/sw.js',
       '/browserconfig.xml',
       'img/apple-touch-icon.png',
       'img/android-chrome-192x192.png',
       'img/android-chrome-512x512.png',
       'img/favicon-16x16.png',
       'img/favicon-32x32.png',
       'img/favicon.ico',
       'img/mstile-150x150.png',
       'img/pizza.png',
       'img/safari-pinned-tab.svg'
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
