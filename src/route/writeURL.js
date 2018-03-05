const crypto = require('crypto');
const Models = require('../../models');

const handler = (request, reply) => {
  const longurlPayload = request.payload.longurl;
  const promiseArr = [];
  for (let i = 0; i < 31; i += 6) {
    const shortUrlPayload = crypto.createHash('md5').update(longurlPayload).digest('hex').slice(i, i + 6);
    const prom = new Promise(() => {
      Models.urls.find({
        where: {
          shorturl: shortUrlPayload,
        },
      }).then((url) => {
        if (url === null) {
          Models.urls.create({
            shorturl: shortUrlPayload,
            longurl: longurlPayload,
          }).then(() => {
            reply(shortUrlPayload);
          });
        }
      });
    });
    promiseArr.push(prom);
  }

  // for (let i = 0; i < promiseArr.length; i += 1) {
  //   promiseArr[0].then((value) => {
  //     if()
  //   })
  // }
};

module.exports = {
  path: '/write',
  method: 'POST',
  handler,
};

