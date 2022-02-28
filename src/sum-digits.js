const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  //throw new NotImplementedError('Not implemented');
  let result = 0;
  
  function sumNum (num) {
    const arr = Array.from(num.toString()); 
    let sum = 0;
    arr.forEach(elem => sum += +elem);
    return sum;   
  } 
  
  result = sumNum(n);
  
  if (result.length !== 1) {
    result = sumNum(result);
  }

  return result;
}

module.exports = {
  getSumOfDigits
};
