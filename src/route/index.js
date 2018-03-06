const home = require('./home');
const writeURL = require('./writeURL');
const readURL = require('./readURL');

module.exports = [].concat(home, writeURL, readURL);
