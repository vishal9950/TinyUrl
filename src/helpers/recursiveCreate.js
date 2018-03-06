const Models = require('../../models');

async function recursiveCreate(longurl, shorturlHash, start, size) {
  const shorturl = shorturlHash.substr(start, start + size);
  const createOp = await Models.urls.findOrCreate({
    where: {
      shorturl,
      longurl,
    },
  });
  if ((createOp[1] === true) || (createOp[0].dataValues.longurl === longurl)) {
    return shorturl;
  }
  return recursiveCreate(longurl, shorturlHash, start + 6, size);
}

module.exports = recursiveCreate;
