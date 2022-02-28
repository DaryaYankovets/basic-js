const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const newName = members.map(elem => {
    if (typeof elem === 'string') {
      return elem.trim().slice(0, 1).toUpperCase();
    }
    return '';
  }).sort().join('');
  
  console.log(newName);
  return newName !== '' ? newName : false;
}

module.exports = {
  createDreamTeam
};
