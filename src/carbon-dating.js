const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(act) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof act !== "string" || Number(act) === NaN) return false;
  act = parseFloat(act);

  let t = Math.ceil(Math.log(15 / act) / (0.693 / 5730));

  return t >= 0 && t < Infinity ? t : false;
};
