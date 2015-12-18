getData('http://example.com', function (myData) {
    console.log(myData);
});

console.log('show this before data ...');

function getData(dataURI, callback) {
    var myData = getSomeData(); // fake function
    callback(myData);
}

function getSomeData() {
  // this would make a connection to the server and get some html back
  var data = '<h1>this is data from the server</h1>';
  return data;
}
