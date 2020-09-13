const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) return false;

  let ans = '';

  const isLetter = (c) => c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z';

  for (let i = 0; i < arr.length; i++)
      if (String(arr[i]) === arr[i]) {
          let j = 0;
          while (!isLetter(arr[i][j])) j++;
          ans += arr[i][j].toUpperCase();
      }

  if (ans === '') return false;

  return ans.split('').sort().join('');
};
