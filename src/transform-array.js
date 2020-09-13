const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw Error;

  let ans = [];

  for (let i = 0; i < arr.length; i++)
      if (arr[i] === '--discard-next') i++;
      else if (arr[i] === '--discard-prev') {
        if (ans.length) {
          let val = arr[i - 1];
          let nVal = ans[ans.length - 1];
          if (val === nVal)
            ans.pop();
        }
      }
      else if (arr[i] === '--double-prev') {
        if (ans.length) {
          let val = arr[i - 1];
          let nVal = ans[ans.length - 1];
          if (val === nVal)
            ans.push(val);
        }
      }
      else if (arr[i] === '--double-next') {
        if (i + 1 < arr.length)
          ans.push(arr[i + 1]);
        continue;
      }
      else ans.push(arr[i]);

  return ans;
};
