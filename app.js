var http = require('http');

console.log('show this first!');

// Call our main function. Pass it a URI and a callback function
getData('http://keanodejs.github.io/', function(myData) {
    console.log('Successfull response from: ' + myData.req.connection._host + ' with status code: ' + myData.statusCode);
});

// console.log() some stuff out
console.log('show this before data ...');

function getData(dataURI, callback) {

    // make a request for the specified url
    http.get(dataURI, function(res) {
        // run our callback function
        callback(res);
    });

}
