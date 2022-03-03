const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  //throw new NotImplementedError('Not implemented');
  let obj = {};
  let resultStr = '';
  
  const arrLetters = str.split('');
  
  arrLetters.forEach((elem, index) => {
    if(!obj.hasOwnProperty(elem)) {
      obj[elem] = 1;
      if (index !== 0) {
        obj[arrLetters[index - 1]] === 1 ? resultStr += arrLetters[index - 1] : resultStr += obj[arrLetters[index - 1]] + arrLetters[index - 1]; 
        delete obj[arrLetters[index - 1]];
      }
    } else {
      obj[elem] = ++obj[elem];
    }
   
    if(index === arrLetters.length - 1) {
      obj[elem] === 1 ? resultStr += elem : resultStr += obj[elem] + elem;
    }
 
  });
  
  return resultStr;
}

module.exports = {
  encodeLine
};
