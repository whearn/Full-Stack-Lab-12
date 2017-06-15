var p = first();

p.then(function(secret) {
    return second(secret);
}).then(console.log);

//OR
// .then(function(success) {
//     console.log(success);
// });

//OR just
// first().then(second).then(console.log);

//Official Solution
// 'use strict';
    
//     /* global first, second */
    
//     var firstPromise = first();
    
//     var secondPromise = firstPromise.then(function (val) {
//       return second(val);
//     });
    
//     secondPromise.then(console.log);
    
//     // As an alternative to the code above, ou could also do this:
//     // first().then(second).then(console.log);