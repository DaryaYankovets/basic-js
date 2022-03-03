const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  let resObj = {};
  let arr = [];
 
  domains.forEach(elem => {
    let domain = '';
    const arrFromElem = elem.split('.').reverse();
    arrFromElem.forEach(el => {
      domain += `.${el}`;
      arr.push(domain);
    });
  });
  
  const resultObj = arr.reduce((acc, item) => { 
   acc.hasOwnProperty(item) ? acc[item]++ : acc[item] = 1;
   return acc
  }, {});
  
  return resultObj;
}

module.exports = {
  getDNSStats
};