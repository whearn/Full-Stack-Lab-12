var p = new Promise(function(resolve, reject) {
    resolve('PROMISE VALUE');
});

p.then(console.log);

//code outside of the .then MUST fire first
console.log('MAIN PROGRAM');