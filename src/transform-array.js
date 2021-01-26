const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  let fl = false;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === '--discard-next' 
      || arr[i] === '--discard-prev' 
      || arr[i] === '--double-prev' 
      || arr[i] === '--double-next')
      fl = true;
  if (!fl) return arr;
  let ans = [];
  const pb = (val, times = 1) => {
    for (let i = 0; i < times; i++)
      ans.push(val);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' 
      || arr[i] === '--discard-prev' 
      || arr[i] === '--double-next' 
      || arr[i] === '--double-prev'
      || arr[i - 1] === '--discard-next')
      continue;
    if (arr[i - 1] === '--double-next')
      pb(arr[i], 2);
    if (arr[i + 1] === '--discard-prev') {
      if (arr[i - 1] === '--double-next') 
        ans.pop();
      continue;
    }
    if (arr[i + 1] === '--double-prev') {
      if (arr[i - 1] === '--double-next')
        pb(arr[i]);
      else 
        pb(arr[i], 2);
      continue;
    }
    if (arr[i - 1] !== '--double-next')
      pb(arr[i]);
  }
  return ans;
};