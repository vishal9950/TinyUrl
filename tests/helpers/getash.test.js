const getHash = require('../../src/helpers/getHash');
const crypto = require('crypto');

describe('Test function getHash: ', () => {
  test('Should return a string: ', () => {
    const hash = getHash('dwdfc');
    expect(typeof hash).toBe('string');
  });

  test('Should return the hash: ', () => {
    const hash = crypto.createHash('md5').update('abc').digest('hex');
    expect(getHash('abc')).toBe(hash);
  });
});

