// Basic Tests
// Using require
console.log('Basic Tests');
console.log('----------------------------');
var os = require('os');
var $ = require('jquery/dist/jquery.min');

console.log(os.hostname());
console.log(os.homedir());
console.log($);


// Event Emitter 03 - events and streams
// First Pattern
console.log('\n \n Event Emitter Example');
console.log('----------------------------');

var EventEmitter = require('events').EventEmitter;

var getResource = function(c){
    var e = new EventEmitter();
    process.nextTick(function(){
        var count = 0;
        e.emit('start');
        var t = setInterval(function(){
            e.emit('moes', ++count);
            if(count === c){
                e.emit('end', count);
                clearInterval(t);
            }
        },10);
    });
    // we retun e so that we can do r.on('start') or r.on('moes').
    return e;
};

var r = getResource(5);

r.on('start', function(){
    console.log('started!!!...');
});

r.on('moes', function(d){
    console.log('I recieved data: ' + d);
});

r.on('end', function(){
    console.log('Finished!!!...');
});


// Second pattern - extending the event emitter class
// Here we will create a module and bring that in. (resource.js)
console.log('\n \n Event Emitter Second Pattern Example');
console.log('----------------------------');

var GetRes = require('./resource'); // as this is a file we created use './'

var moes = new GetRes(7);

moes.on('start', function(){
    console.log('started!!!...');
});

moes.on('moes', function(d){
    console.log('Moes data: ' + d);
});

moes.on('end', function(){
    console.log('Finished!!!...');
});

// See test02.js for the next part, creating streams

