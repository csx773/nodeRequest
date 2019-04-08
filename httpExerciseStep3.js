var https = require('https');


function getAndPrintHTML (options) {

  /* Add your code here */
  var completeData = '';

  //must call https.get() first to initiate the call to GET data from server
  https.get(options, function (response){
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      //var completeData = '';
      console.log('Chunk Received. Length:', data.length);
      completeData += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      console.log('Complete data is: \n', completeData);
    });

  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


 // Testing code below ////////////////////
getAndPrintHTML(requestOptions);

