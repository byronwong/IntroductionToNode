Modules
=======

Node has some built in modules which can be found here:
https://nodejs.org/dist/latest-v8.x/docs/api/


Requiring Built in modules
--------------------------

Basic Patterns
```javascript
// Require the whole object
var foo = require('foo');

// require a subsection of a module
var foo = require('foo').subObj;
```

Requiring Node built in modules
```javascript
var os = require('os');
```

Requiring your own files/ modules:
----------------------------------
Note: the `./` is needed and the `.js` is ommitted.
```javascript
    var myModule = require('../test/my_module'); // file path name works
```


Module.exports
--------------
In our module we can make item available using `module.exports`
Items that are not part of the exports are not acessible 

```javascript
    var bar = function(){
    // code...
};

module.exports.foo = bar; 
```

Requiring thrid party modules NPM
---------------------------------
Node also knows to look inside the node_modules folder

You can load modules like before:
```javascript
    var express = require('express');
```

You can also require a file from within a module, however care is require as this cause coupling in your code.
```javascript
    var $ = require('jquery/dist/jquery.min');
```

Some modules provide command line utilities like espress and babel.
Request module - making simptified http requests.