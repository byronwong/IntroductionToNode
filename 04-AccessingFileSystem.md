Accessing the local system
==========================

Process Object
--------------
The process objects allows us to interact with the current process that are happening.
It is built in to node so there is no need to require it.
It has streams `stdin`, `stdout` and `stderr`

Example using all three streams
```javascript
    process.stdin.resume(); // Note: stdin always starts off paused.
    process.stdin.setEncoding('utf-8');

    process.stdin.on('data', function(item){
        process.stdout.write('data: ' + item);
    });

    // use ctrl + d to see this (not working)
    process.stdout.on('end', function(){
        process.stderr.write('End! \n');
    });

    // Events made available with node
    process.on('SIGTERM', function(){
        process.stderr.write('Why are you terminatingn me...');
    });

    console.log('Node is running as process  #' + process.pid);
```

We can create the Sigterm event by killing the process in another terminal window.
Use: `kill -TERM <processID>`


Interacting with the file system
================================
Node usw the `fs` module to interact with the file system.
The functions used to interact with files come in async and sync forms

The `fs` module also provide readble and writable streams.

Syncronous Example:
```javascript
    var fs = require('fs');

    if( fs.exists('temp')) {
        console.log('directory exists, removing ...');

        if(fs.existsSync('temp/new.txt')){
            fs.unlink('temp/new.txt');
        }   
        fs.rmdirSync('temp');
    }

    fs.mkdirSync('temp');

    if(fs.existsSync('temp')){
        process.chdir('temp');
        fs.writeFileSync('test.txt', 'This is some test text for the file');
        fs.renameSync('test.txt', 'new.txt');
        console.log('file has size: ' + fs.statSync('new.txt').size + ' bytes');
        console.log('file contents: ' + fs.readFileSync('new.txt').toString());
    }
```

Asyncronous Example:
```javascript

    var fs = require('fs');

    if( fs.exists('temp')) {
        console.log('directory exists, removing ...');

        if(fs.existsSync('temp/new.txt')){
            fs.unlink('temp/new.txt');
        }   
        fs.rmdirSync('temp');
    }

    // Asynchronous Verion
    // Note:'sync' in the names have been removed
    // This also looks like the christrmas tree problem (and it is) but for demo it's ok
    fs.mkdir('temp', function(err){
        fs.exists('temp', function(exists){
            if(exists){
                process.chdir('temp');
                fs.writeFile('test.txt', 'This is some test text for the file', function(err){
                    fs.rename('test.txt', 'new.txt', function(err){
                        fs.stat('new.txt', function(err, stats){
                            console.log('file has size: ' + stats.size + ' bytes')
                            fs.readFile('new.txt', function(err, data){
                                console.log('file contents: ' + data.toString());
                            });
                        });
                    });
                });
            }
        });
    });
```

Buffers
-------
JS has problems when working with binary data, however working with the file system and networks require this.
Buffers allow us to store binary data and to process them with a given encodeing.
The default encoding is `utf-8` (written like this).

Note: in above examples: `fs.readFileSync()` is a buffer, which is why we call `.toString()` on it.

```javascript
    var b = new Buffer('Hello');
    console.log(b.toString());
    console.log(b.toString('utf-8', 0,2));

    var v = new Buffer('World').toString('base64');
    console.log(v);
```

OS module
---------
The OS mode gives you information on the operating system, please refer to docs.
[OSref](https://nodejs.org/api/os.html)