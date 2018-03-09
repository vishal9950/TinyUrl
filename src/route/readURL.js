const Models = require('../../models');
const redis = require('redis');

const client = redis.createClient();

// const quitRedis = client => client.quit();

const handler = (request, reply) => {
  // console.log(request.params.shorturl);
  client.hget('url', request.params.shorturl, (err, longurl) => {
    if (err) {
      throw err;
    } else if (longurl === null) {
      Models.urls.find({
        where: {
          shorturl: request.params.shorturl,
        },
        attributes: ['longurl'],
      }).then((url) => {
        if (url !== null) {
          client.hset('url', request.params.shorturl, url.dataValues.longurl);
          // quitRedis(client);
          reply(url.dataValues.longurl);
        } else {
          reply('Invalid URL!');
        }
      });
    } else {
      // quitRedis(client);
      reply(longurl);
    }
  });
};

module.exports = {
  path: '/read/{shorturl}',
  method: 'GET',
  handler,
};

