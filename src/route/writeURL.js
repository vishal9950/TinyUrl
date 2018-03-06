const getHash = require('../helpers/getHash');
const Models = require('../../models');

async function recursiveCreate(longurl, shorturlHash, start, size) {
  const shorturl = shorturlHash.substr(start, start + size);
  const createOp = await Models.urls.findOrCreate({
    where: {
      shorturl,
    },
  });
  if ((createOp[1] === true) || (createOp[0].dataValues.longurl === longurl)) {
    return shorturl;
  }
  return recursiveCreate(longurl, shorturlHash, start + 6, size);
}

const handler = (request, reply) => {
  const longurlPayload = request.payload.longurl;
  const shortUrlHash = getHash(longurlPayload);
  // reply(shortUrlHash);
  return recursiveCreate(longurlPayload, shortUrlHash, 0, 6).then(result => reply(result));
};

// for (let i = 0; i < promiseArr.length; i += 1) {
//   promiseArr[0].then((value) => {
//     if()
//   })
// }

module.exports = {
  path: '/write',
  method: 'POST',
  handler,
};

