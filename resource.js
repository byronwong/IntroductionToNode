// 03 - Events and Streams
// This code is for the second pattern of the event emitter examples.
// see test.js

var util = require('util');
var EventEmitter = require('events').EventEmitter;


function Resource(m){
    var maxEvents = m;

    // As we are no longer istantiating an EventEmitter Object
    // as this object now inherits from event emitter.
    var self = this;

    process.nextTick(function(){
        var count = 0;
        self.emit('start');
        var t = setInterval(function(){
            self.emit('moes', ++count);
            if(count === maxEvents){
                self.emit('end', count);
                clearInterval(t);
            }
        },10);

        // We don't need to retun e like the first pattern as Resouce is EventEmitter (or inherits to be specfic).
    });
}

// Using Node's built it util class to allow Resource to inherit from EventEmitter
// This gives Resource access to emit and on functions.
util.inherits(Resource, EventEmitter);

module.exports = Resource;