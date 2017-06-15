var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        //creates an error object
        var e = new Error('REJECTED!');
        reject(e);
    }, 300);
});

//no need to pass in a resolve statement
//set first parameter to null
//pass onReject function into the reject parameter
p.then(null, onReject);

//logs the error message
function onReject(err) {
    console.log(err.message);
}