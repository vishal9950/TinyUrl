const Models = require('../../models');

const handler = (request, reply) => {
  Models.urls.find({
    where: {
      shorturl: request.params.shorturl,
    },
    attributes: ['longurl'],
  }).then((url) => {
    if (url !== null) {
      reply(url);
    } else {
      reply('Invalid URL!');
    }
  });
};

module.exports = {
  path: '/read/{shorturl}',
  method: 'GET',
  handler,
};

