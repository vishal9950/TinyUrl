const Server = require('../../src/server');

describe('Test server for route /write: ', () => {
  test('Should return the hash for an existing url: ', (done) => {
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
});
