const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( /* arr */ ) {
  throw new NotImplementedError('Not implemented');
  /* if (!Array.isArray(arr)) return `'arr' parameter must be an instance of the Array!`

  let newArr = [];
  let discardNext = [];
  let discardPrev = [];
  let doubleNext = [];
  let doublePrev = [];

  arr.forEach((elem, i) => {
      if (elem === '--discard-next') {
          discardNext.push(++i);
      } else if (elem === '--discard-prev') {
          discardPrev.push(--i);
      } else if (elem === '--double-next') {
          doubleNext.push(++i);
      } else if (elem === '--double-prev') {
          doublePrev.push(--i);
      } 
  });
  
   arr.forEach((elem, i) => {
    if (discardNext.includes(i) || discardPrev.includes(i)) {
      return;
    } 
    if (doubleNext.includes(i)) {
      newArr.push(elem);
    } 
    if (doublePrev.includes(i)) {
      newArr.push(elem);
    } 
    if (typeof elem === 'number') {
        newArr.push(elem);;
    }
  });

  return newArr; */
}

module.exports = {
  transform
};
