const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = (str === null) ? 'null' : str.toString();
  let repeatTimes = options['repeatTimes'] ? options['repeatTimes'] : 1;
  let separator = options.hasOwnProperty('separator') ? options['separator'] : '+';
  let addSeparator = options.hasOwnProperty('additionSeparator') ? options['additionSeparator'] : '|';
  let addition = options.hasOwnProperty('addition') ? options['addition'] : '';
  let addRepeatTimes = (options.hasOwnProperty('additionRepeatTimes') && options['additionRepeatTimes']) ? options['additionRepeatTimes'] : 1;
  let ans = '';
  for (let i = 0; i < repeatTimes; i++) {
    if (i !== 0) ans += separator;
    ans += str;
    for (let j = 0; j < addRepeatTimes; j++) {
      if (j !== 0) ans += addSeparator;
      ans += addition;
    }
  }
  return ans;
};
  