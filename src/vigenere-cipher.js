const CustomError = require("../extensions/custom-error");

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function makeTable() {
  let alphabet = ALPHABET;
  let mass = alphabet.split('');
  let table = [];
  let shift = 0;
  for (let i = 0; i < 26; i++) {
    table.push([]);
    for (let j = shift; j < 26; j++) {
      table[i].push(mass[j]);
    }
    for (let j = 0; j < shift; j++) {
      table[i].push(mass[j]);
    }
    shift++;
  }
  return table;
}
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type === false ? false : true;
    this.table = makeTable();
  }
  encrypt(str, key) {
    if (arguments.length < 2 || typeof str !== 'string' 
      || typeof key !== 'string')
      throw Error;
    let alphabet = ALPHABET;
    str = str.toUpperCase();
    key = key.toUpperCase();
    let ans = '';
    let tmp = key;
    while (key.length < str.length) {
      key += tmp;
    }
    let it = 0;
    for (let i = 0; i < str.length; i++) 
      if (str[i] >= 'A' && str[i] <= 'Z') {
        let pos1 = alphabet.indexOf(str[i]);
        let pos2 = alphabet.indexOf(key[it]);
        ans += this.table[pos1][pos2];
        it++;
      } else {
        ans += str[i];
      }
    return (this.type ? ans : ans.split('').reverse().join(''));
  }    
  decrypt(str, key) {
    if (arguments.length < 2 || typeof str !== 'string' 
      || typeof key !== 'string')
      throw Error;
    let ans = '';
    let alphabet = ALPHABET;
    str = str.toUpperCase();
    key = key.toUpperCase();
    let tmp = key;
    while (key.length < str.length) {
      key += tmp;
    }
    let it = 0;
    for (let i = 0; i < str.length; i++) 
      if (str[i] >= 'A' && str[i] <= 'Z') {
        let pos1 = alphabet.indexOf(key[it]);
        let pos2 = this.table[pos1].indexOf(str[i]);
        ans += alphabet.charAt(pos2);
        it++;
      } else {
        ans += str[i];
      }
    return (this.type ? ans : ans.split('').reverse().join(''));
  }
}

module.exports = VigenereCipheringMachine;
