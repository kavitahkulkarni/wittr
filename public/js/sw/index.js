self.addEventListener('fetch', function(event) {
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  var requestUrl = event.request.url;
      if (requestUrl.match(/.*.jpg/i)) {
      event.respondWith(
        fetch('/imgs/dr-evil.gif')
      );
}
});