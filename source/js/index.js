// If you'd like to have more than one js file use node.js requires.
// For example here we have file.js being inlcuded. For each additional file
// you're requiring all you need is to create an object (Ex: fileName) and set
// as require('whatever path and file name as a string'), (Ex: require('./file.js');)

// const fileName = require('./file.js');
//
// window.onload = function() {
//     console.log("file included", fileName);
// }

console.log('js compiled');

// const contactScript = require('./contactScript.js');
const navigation = require('./navigation.js');
const scrollUp = require('./scrollUp.js');
const register = require('./register.js');
const squiggle = require('./squiggle.js');

window.onload = function() {
  // console.log("contactScript included", contactScript);
  console.log("navigation included", navigation);
  console.log("register included", register);
  console.log("squiggle included", squiggle);
  console.log("scrollUp include", scrollUp);
}
