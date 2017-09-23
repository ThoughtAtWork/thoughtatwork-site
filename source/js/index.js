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

const navigation = require('./navigation.js');
const scrollUp = require('./scrollUp.js');
const navigation = require('./navigation.js');
const register = require('./register.js');


window.onload = function() {
    console.log("file included", navigation);
    console.log("file included", scrollUp);
}
