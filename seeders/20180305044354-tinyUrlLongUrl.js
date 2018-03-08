const urlPair = require('../src/helpers/getUrls');
const redis = require('redis');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const client = redis.createClient();
    client.on('connection', () => {
      console.log('Connected');
    });
    urlPair.map(url => client.hset(['url', url.longurl, url.shorturl], redis.print));
    client.quit();
    return queryInterface.bulkInsert('urls', urlPair, {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('urls'),
};
