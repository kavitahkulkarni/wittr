self.addEventListener('install', function(event) {
  var urlsToCache = [
    '/',
    'js/main.js',
    'css/main.css',
    'imgs/icon.png',
    'https://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff',
    'https://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff'
  ];

  event.waitUntil(
    caches.open('wittr-static-v1').then(function(cache) {
        console.log("Cache opened");
        return cache.addAll(urlsToCache);
    })
    // TODO: open a cache named 'wittr-static-v1'
    // Add cache the urls from urlsToCache
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response){
            if (response) {
                return response;
            }
            else {
                return fetch (event.request);
            }
        })
    );
});