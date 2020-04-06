Interacting With the web
========================

Node has a built in module called `http` that allows us in interact with the web.

Creating a server
-----------------
```javascript
    var http = require('http');

    var server = http.createServer(function(req, res){
        // function to process all incomming requests.
    });

    server.listen(port,[host]);
```
Each request can be provided as a callback shown above or by listening for events on the `server` object returned.

Note: The server will not begin listening to requests utill the listen function is called.

`req` is an instance of `http.ServerRequest` and is a readable stream, and thus can be piped to a writable stream.

`res` is an instance on `http.ServerResponse` and us a writable stream. You can pipe a file into this stream.

Support for ssl is done through the `https` module.

```javascript
    var http = require('http');
    var fs = require('fs');

    var server = http.createServer(function (req, res) {

        res.writeHead(200, {'Content-Type':'text/plain'});

        if(req.url === '/new.txt'){
            fs.createReadStream(__dirname + '/temp/new.txt').pipe(res);
        } else {
            res.end('Hello World!');
        }

    }).listen(8080, process.env.IP);

    console.log('Server Running!');
```

Scoket.IO
---------
Uses web socket technology, and if not available uses fallbacks.