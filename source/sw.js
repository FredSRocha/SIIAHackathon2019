self.addEventListener("fetch",function(c){c.respondWith(caches.open("cache").then(function(n){return n.match(c.request).then(function(e){console.log("cache request: "+c.request.url);var t=fetch(c.request).then(function(e){if(console.log("fetch completed: "+c.request.url,e),0===c.request.url.indexOf("http"))return e&&(console.debug("updated cached page: "+c.request.url,e),n.put(c.request,e.clone())),e},function(e){console.log("Error in fetch()",e),e.waitUntil(caches.open("cache").then(function(e){return e.addAll(["/","/index.html","/index.html?launcher=true","/index.html?homescreen=1","/?homescreen=1","/assets/*","sw.js","manifest.json"])}))});return e||t})}))});