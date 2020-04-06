Introduction to Node
====================
Basic Background on node and installation

`nvm use <version>` -- use a specific node version


Node Async Conventions
----------------------
Callback functions are always the last parameter in the function declaration

```javascript
function myFunc(arg1, callbackFn){

}
```

Error handling, the error object is always passed in first.
```javascript
function errHandler(err, results){

}
``` 
