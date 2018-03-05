const Server = require('../../src/server');

describe('Test server \'/\': ', () => {
    test('Should return statusCode 200: ', (done) => {
        Server.inject('/', (response) => {
            expect(response.statusCode).toBe(200);
            done();
        })
    })

    test('Should return reslut \'Working!\': ', (done) => {
        Server.inject('/', (response) => {
            expect(response.result).toBe('Working!');
            done();
        })
    })
})