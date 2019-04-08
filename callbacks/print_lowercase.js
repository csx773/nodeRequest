//go up 1 directory to find http-functions.js file
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  /* Write your code here! */
  var LowerCaseHTML = html.toLowerCase();
  console.log(LowerCaseHTML);

}

getHTML(requestOptions, printLowerCase);


