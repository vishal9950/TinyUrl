const recursiveCreate = require('../../src/helpers/recursiveCreate');
// const getHash = require('../../src/helpers/getHash');
const crypto = require('crypto');

describe('Test function recursiveCreate: ', () => {
  test('Should return the shorturl for new url: ', () => {
    const longUrl1 = 'http://newurl6';
    const hash = crypto.createHash('md5').update(longUrl1).digest('base64').replace(/\//g, '_');
    console.log(hash);
    const result = recursiveCreate(longUrl1, hash, 0, 6);
    console.log(result);
    result.then((value) => {
      expect(value).toBe(hash.substr(0, 6));
    });
  });
});

