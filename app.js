// Call our main function. Pass it a URI and a callback function
// The callback function is executed when 
getData('http://example.com', function(myData) {
    console.log(myData);
});

// console.log() something to the console
console.log('show this before data ...');

// Definition of the getData function
function getData(dataURI, callback) {

    // Normally you would actually connect to a server here.
    // We're just going to simulate a 3-second delay.
    var timer = setTimeout(function() {

        // Here's some data which we're pretending came from dataURI
        var data = '<h1>Hello World!</h1>';

        // run our callback function
        callback(data);

    }, 3000); // end the timeout function
}
