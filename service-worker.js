var precache = 'precache-v2';
var cacheURL = [
  '/',
  '/index.html',
  '/build/',
  '/build/app.min.js',
  '/build/make8bitart.min.css',
  '/assets/bg.png',
  '/assets/copy.png',
  '/assets/cut.png',
  '/assets/dropper.png',
  '/assets/favicon.png',
  '/assets/hsl-palette.png',
  '/assets/paint.png',
  '/assets/paste-disabled.png',
  '/assets/paste.png',
  '/assets/pencil.png',
  '/assets/example.csv',
  '/assets/draggybits/dragger.png',
  '/assets/draggybits/hider.png',
  '/assets/fonts/8bit-Art-Sans-subset.woff2',
  '/assets/fonts/VT323-Regular-subset.woff2'
];

this.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(key, i){
        if(key !== precache){
          return caches.delete(keys[i]);
        }
      }));
    })
  );
});

this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function(res){
      if(res){
        return res;
      }
      return requestBackend(event);
    })
  );
});

function requestBackend(event){
  var url = event.request.clone();
  return fetch(url).then(function(res){
    if(!res || res.status !== 200 || res.type !== 'basic'){
      return res;
    }
    var response = res.clone();
    caches.open(precache).then(function(cache){
      cache.put(event.request, response);
    });
    return res;
  });
}
