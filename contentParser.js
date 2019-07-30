const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

module.exports = function (content) {
  return cryptr.encrypt(content);
}