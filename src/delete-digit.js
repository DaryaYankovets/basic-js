const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */) {
  throw new NotImplementedError('Not implemented');
  let arrNum = [];
  for (let i = 0; i < n.toString().length; i++) {
    arrNum.push(+n.toString().split('').filter((ele, id) => id !== i).join(''));
  }
  return arrNum.sort((a , b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
