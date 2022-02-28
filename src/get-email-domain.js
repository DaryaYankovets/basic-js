const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  //throw new NotImplementedError('Not implemented');
  let indices = [];
  let id = email.split('').indexOf('@');
  while (id != -1) {
    indices.push(id);
    id = email.split('').indexOf('@', id + 1);
  }

  return email.slice(indices[indices.length - 1] + 1);
}

module.exports = {
  getEmailDomain
};
