function attachTitle(name) {
    return 'DR. ' + name;
}

var p = Promise.resolve('MANHATTAN');

//In Class Solution
// p.then(function(success) {
//     return attachTitle(success);
// }).then(function(nameWithTitle) {
//     console.log(nameWithTitle);
// });

//Tester Friendly
p.then(attachTitle).then(console.log);

//Official Solution
// 'use strict';
    
//     function attachTitle(name) {
//       return 'DR. ' + name;
//     }
    
//     Promise.resolve('MANHATTAN')
//       .then(attachTitle)
//       .then(console.log);