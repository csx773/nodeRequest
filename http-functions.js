var https = require('https');



//export functions to be used in testing file
module.exports = function getHTML (options, callback) {
    /* Your code here */
  var completeData = '';

  //must call https.get() first to initiate the call to GET data from server
  https.get(options, function (response){
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      completeData += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      //once data is complete recieving, call the callback function
      callback(completeData);
    });

  })
};
