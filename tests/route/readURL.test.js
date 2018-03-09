const Server = require('../../src/server');
const redis = require('redis');

const client = redis.createClient();

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

  test('Should store a shorturl in redis cache if not there already: ', (done) => {
    // const shorturl = 'olrtX1';
    Server.inject('/read/olrtX1', () => {
      client.hget('url', 'olrtX1', (err, longurl) => {
        console.log('LONGURL: ', longurl);
        expect(longurl).toBe('http://somerandomurl999996');
        client.hdel('url', 'olrtX1', () => {
          done();
        });
      });
      //   console.log('RESPONSE: ', response.result);
      //   expect(response.result).toBe('http://somerandomurl999996');
    });
  });
});

