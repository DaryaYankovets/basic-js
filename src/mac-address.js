const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
  //throw new NotImplementedError('Not implemented');
  const arrLetter = ["A","B","C","D","E","F"];
  let isMac = true;
  n.split('-').forEach((elem, id) => {
    if (elem.length !== 2 || (elem == '00' && id != 0)) {
      isMac = false;
    } else  {
      for(let i = 0; i < elem.length; i++) {
        if (elem.charAt(i) != +elem.charAt(i) && !arrLetter.includes(elem.charAt(i))) {
          isMac = false;
        }
      }
    }
  });
  return isMac;
}
module.exports = {
  isMAC48Address
};
