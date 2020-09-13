const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (date === undefined) return 'Unable to determine the time of year!';
	if (!(Object.prototype.toString.call(date) === "[object Date]")) throw Error;

  let m = date.getMonth();
  if (m === 11 || m < 2) return 'winter';
  if (m >= 2 && m <= 4) return 'spring';
  if (m >= 5 && m <= 7) return 'summer';
  return 'autumn';
};
