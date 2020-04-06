var EventEmitter = require('events').EventEmitter;
var util = require('util');

var myItem = function(){
    var self = this;

    process.nextTick(function(){
        self.emit('test01');
        self.emit('test02');
    }, 10);
};

util.inherits(myItem, EventEmitter);

var r = new myItem();

r.on('test01', function(){
    console.log('started');
});

r.on('test02', function(){
    console.log('ended');
});