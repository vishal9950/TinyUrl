const Server = require('../../src/server');
const getHash = require('../../src/helpers/getHash');
const Models = require('../../models');

describe('Test server for route /write: ', () => {
  beforeAll(() => {
    Models.urls.destroy({
      where: {
        longurl: 'http://newurl6',
      },
    });
  });
  afterAll(() => {
    Models.urls.destroy({
      where: {
        longurl: 'http://newurl6',
      },
    });
  });
  test('Should return the statusCode 200 for an existing url: ', (done) => {
    const options = {
      url: '/write',
      method: 'POST',
      payload: {
        longurl: 'http://somerandomurl6',
      },
    };

    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return the hash for an existing url: ', (done) => {
    const options = {
      url: '/write',
      method: 'POST',
      payload: {
        longurl: 'http://somerandomurl6',
      },
    };
    const hash = getHash('http://somerandomurl6').slice(0, 6);
    Server.inject(options, (response) => {
      expect(response.result).toBe(hash);
      done();
    });
  });

  test('Should return the statusCode 200 for a new url: ', (done) => {
    const options = {
      url: '/write',
      method: 'POST',
      payload: {
        longurl: 'http://newurl6',
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
