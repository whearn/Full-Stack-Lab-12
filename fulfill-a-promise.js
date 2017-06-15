var p = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve('FULFILLED!');
    }, 300);
});

p.then(function(success) {
    console.log(success);
}, function(err) {
    console.log(err);
});

// // Official Solution
// 'use strict';
    
//     // Create a promise
    
//     var promise = new Promise(function (fulfill, reject) {
//       // After the timeout reaches 300ms, fulfill the promise with value
//       // 'FULFILLED!'.
    
//       setTimeout(function () {
//         fulfill('FULFILLED!');
//       }, 300);
//     });
    
//     // Add a handler to the promise’s fulfillment. `console.log` will be called
//     // with the value passed to `fulfill`, which is `'FULFILLED!'`.
//     // Note that this statement will ALWAYS be executed before `fulfill` is
//     // called (we'll talk about this in depth in the lessons to come).