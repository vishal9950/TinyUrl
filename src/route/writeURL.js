const getHash = require('../helpers/getHash');
const recursiveCreate = require('../helpers/recursiveCreate');

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

