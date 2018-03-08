const Server = require('../../src/server');

describe('Test GET /read: ', () => {
  test('Should return statusCode 200: ', (done) => {
    Server.inject('/read/z+drZ+', (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('Should return result \'http://somerandomurl7\': ', (done) => {
    Server.inject('/read/z+drZ+', (response) => {
      expect(response.result).toBe('http://somerandomurl7');
      done();
    });
  });
});

