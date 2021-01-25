const CustomError = require("../extensions/custom-error");

const chainMaker = {
  length: 0,
  chain: '',
  obj: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    if (this.getLength() === 0) {
      this.chain = `( ${value} )`;
    } else {
      this.chain += `~~( ${value} )`;
    }
    this.obj.push(value);
    this.length++;
    return this;
  },
  removeLink(position) {
    if (!typeof(position) === 'number' 
      || position > this.getLength()
      || position < 1) {
      this.deleteChain();
      throw Error;
    }
    let l = 0;
    let r = this.chain.indexOf(')');
    for (let i = 1; i <= this.getLength(); i++) 
      if (i === position) {
        if (i === 1 || i === this.getLength())
          this.chain = this.chain.substring(0, l) + this.chain.substring(r + 1, this.chain.length);
        else
        this.chain = this.chain.substring(0, l) + this.chain.substring(r + 3, this.chain.length);
        break;
      } else {
        l = this.chain.indexOf('(', r + 1);
        r = this.chain.indexOf(')', r + 1);
      }
    this.length--;
    this.obj.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.obj.reverse();
    let arr = [];
    for (let i = 0; i < this.obj.length; i++)
      arr[i] = this.obj[i];
    let len = this.length;
    this.deleteChain();
    for (let i = 0; i < len; i++)
        this.addLink(arr[i]);
    return this;
  },
  deleteChain() {
    this.length = 0;
    this.chain = '';
    this.obj.length = 0;
  },
  finishChain() {
    let ans = this.chain;
    this.deleteChain();
    return ans;
  }
};

module.exports = chainMaker;
