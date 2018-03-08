const Models = require('../../models');

async function recursiveCreate(longurl, shorturlHash, start, size) {
  const shorturl = shorturlHash.slice(start, start + size);
  console.log('shortUrlHash: ', shorturl);
  const response = await Models.urls.find({
    where: {
      shorturl,
    },
  });
  if ((response === null)) {
    const result = await Models.urls.create({
      shorturl,
      longurl,
    });
    return result.shorturl;
  } else if (response.dataValues.longurl === longurl) {
    return shorturl;
  }
  console.log('***************************');
  console.log('Collision');
  console.log('***************************');
  return recursiveCreate(longurl, shorturlHash, start + 1, size);
}

module.exports = recursiveCreate;
