// Continued from test.js

// 03 - Creating Our Stream
// The request object is stream like 

var request = require('request');

var s = request('http://99u.com/articles/14347/are-you-subconsciously-afraid-of-success');

s.on('data', function (chunk) {
    console.log('Data>>>: ' + chunk);
});

s.on('end', function () {
    console.log('>> Done >>');
});


