self.addEventListener('fetch', function (event) {
  console.log('URL', event.request.url)
  if (event.request.url == 'http://localhost:8080/') {
    event.respondWith(
      new Response("Hello from Cache or custom response", {
        headers: { 'Content-Type': 'text/html' }
      })
    )
  }
});