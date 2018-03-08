const Server = require('../../src/server');

describe('Test GET /read: ', () => {
  test('Should return statusCode 200: ', (done) => {
    Server.inject('/read/z+drZ+', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

