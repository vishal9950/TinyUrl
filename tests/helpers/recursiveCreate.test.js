const recursiveCreate = require('../../src/helpers/recursiveCreate');
// const Models = require('../../models');
// const getHash = require('../../src/helpers/getHash');
const crypto = require('crypto');

describe('Test function recursiveCreate: ', () => {
  beforeEach((done) => {
    // Models.urls.destroy({ truncate: true }).then(done);
    done();
  });
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

  test('Should return different shorturl for collision: ', (done) => {
    const longUrl1 = 'http://newurlcollide1';
    const longUrl2 = 'http://newurlcollide2';
    const hash = '123456abcdef';
    // console.log(hash);
    const result = recursiveCreate(longUrl1, hash, 0, 6);
    console.log(result);
    result.then((value) => {
      console.log(value);
      expect(value).toBe(hash.slice(0, 6));
      const result2 = recursiveCreate(longUrl2, hash, 0, 6);
      console.log(result2);
      result2.then((value1) => {
        console.log(value1);
        console.log(hash.slice(1, 7));
        expect(value1).toBe(hash.slice(1, 7));
        done();
      });
    });
  });
});

