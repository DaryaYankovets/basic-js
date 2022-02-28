const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  let sum = 0;
  let index = [];
  matrix.forEach(array => {
    array.forEach((elem, i) => {
      console.log(elem)
      if (elem === 0) {
        index.push(i);
        console.log('index=', index);
        console.log('sum=', sum);
      } else {
        if (!index.includes(i)) {
          sum += elem;
        }
      }
    });
  });
  
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
