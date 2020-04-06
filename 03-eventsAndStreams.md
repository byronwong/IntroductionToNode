Events and Streams
==================

Callbacks
---------
- Request/ Reply model
- All or nothing approach either error or results

We currently use callbacks to write asyncronous non blocking code.
```javascript
    getItem(param, function(err,items){
        // code...
    });
```

However this can lead to 'callback hell' where callbacks are nested and stacked
This makes it harder to understand the code, and thus increase the chance for bugs.

Node provides an alternative --> events.


Events
------
- Publish/ Subscribe model
- Act on results as the come - get partial results before error

Callback example written with events:
```javascript
    var results = getItem(param);

    results.on('item', function(i){
        // code...
    });

    results.on('done', function(){
        // code...
    });

    results.on('error', function(err){
        // code...
    });
```
Here the `getItem` function return a value imediately, this is ann instance of the eventEmitter class.
[ref](https://nodejs.org/api/events.html#events_class_eventemitter)
This object has and `.on()` function, which allows us to subscribe to differnt events and carry out Fn.

Event publisher:
Events are just strings.
Here you can emit any event name you like with parameters.
`emitter.emit(event, [args]);`

-->

Event subscriber:
Listens for macthing event and then passes any parameters to the listerner Fn.
`emitter.on(event, listener);`

See `test01.js` and `test02.js` for the commonly used patterns.


Streams
-------
Streams extend from the EventEmitter Class and implements an agreed set of events and functions.
There are three types of stream: readable, writeable or both.
Because there are a standard and agreed upon events and functions, you can pipe a readable stream to a writable one. 

### Readable Stream
The third party module `request` is a readable stream, so we will use this as an example:
NOTE: the event are preset standard. See `test02.js` for a working example.
```javascript
    var request = require('request');

    var s = request('http://99u.com/articles/14347/are-you-subconsciously-afraid-of-success');

    s.on('data', function(chunk){
        console.log('Data>>>: ' + chunk);
    });

    s.on('end', function(){
        console.log('>> Done >>');
    });
``` 


### Writable stream
```javascript
    console.log('Is process.stdout writable? ' + process.stdout.writable);

    process.stdout('hello');
    process.stdout('world');

```

### piping a readable stream to a writable stream

```javascript
    // using our original request
    s.pipe(process.stdout);
    // or we can chain it
    request(url...).pipe(process.stdout); 
``` 
