var https = require('https');


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response){

    var currentChunk = null;
    response.setEncoding('utf8');

    response.on('data', function (data){
      currentChunk = data;
      console.log(currentChunk + '\n');
    })

  })

}

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  var completeData = null;

  //must call https.get() first to initiate the call to GET data from server
  https.get(requestOptions, function (response){
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
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


 // Testing code below
//getAndPrintHTMLChunks();
getAndPrintHTML();

