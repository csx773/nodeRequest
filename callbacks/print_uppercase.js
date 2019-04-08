//go up 1 directory to find http-functions.js file
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
  var UppercaseHTML = html.toUpperCase();
  console.log(UppercaseHTML);

}

getHTML(requestOptions, printUpperCase);

