const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  /* if (typeof date === 'string' || typeof date === 'number' || Array.isArray(date) || date == '() => new Date()') {
    return 'Invalid date!';
  } else {
    for(let key in date) {
      return 'Invalid date!'; 
    }
  }

  const winter = [12, 1, 2];
  const spring = [3, 4, 5];
  const summer = [6, 7, 8];
  const autumn = [9, 10, 11];

  if (winter.includes(date.getMonth())) return 'winter';
  if (spring.includes(date.getMonth())) return 'spring';
  if (summer.includes(date.getMonth())) return 'summer';
  if (autumn.includes(date.getMonth())) return 'autumn';

  return 'Invalid date!'; */
}

module.exports = {
  getSeason
};
