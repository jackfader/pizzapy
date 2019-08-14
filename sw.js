self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('PizzaPy').then(function(cache) {
     return cache.addAll([
       '/index.html',
       '/Custom.css',
       '/manifest1.json',
       '/sw.js',
       '/browserconfig.xml',
       '/apple-touch-icon.png',
       '/android-chrome-192x192.png',
       '/android-chrome-512x512.png',
       '/favicon-16x16.png',
       '/favicon-32x32.png',
       '/favicon.ico',
       '/mstile-150x150.png',
       '/pizza.png',
       '/safari-pinned-tab.svg'
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
