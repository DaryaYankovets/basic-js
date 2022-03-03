const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  //throw new NotImplementedError('Not implemented');
  let count = 0;
  if (s1.length === 0 || s2.length === 0) return 0;
  
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  
  arr1.forEach(elem => {
    const index = arr2.findIndex(item => item === elem);
    if (index !== -1) {
      arr2.splice(index, 1);
      count++;
    }
  });
  return count;
}

module.exports = {
  getCommonCharacterCount
};