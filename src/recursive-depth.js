const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(arr)) return 0;
    let ans = 1;

    for (let i = 0; i < arr.length; i++)
        if (Array.isArray(arr[i]))
            ans = Math.max(ans, this.calculateDepth(arr[i]) + 1);

    return ans;
  }
};