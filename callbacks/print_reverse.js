//go up 1 directory to find http-functions.js file
var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  /* Write your code here! */
  //split string into indivdual character array, reverse array, join back together
  var reverseHTML = html.split('').reverse().join('');
  console.log(reverseHTML);

}

getHTML(requestOptions, printReverse);


