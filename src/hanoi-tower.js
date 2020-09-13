const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let obj = {};
  obj['turns'] = Math.pow(2, diskNumber) - 1;
  let turnsPerSec = turnsSpeed / 60 / 60;
  obj['seconds'] = Math.floor(obj['turns'] / turnsPerSec);
  return obj;
};
