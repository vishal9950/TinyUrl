const crypto = require('crypto');

const getLongURLs = () => {
  const longURLs = [];
  for (let i = 0; i < 1e6; i += 1) {
    longURLs.push(`http://somerandomurl${i}`);
  }
  //   console.log(longURLs);
  return longURLs;
};

const getShortURLs = (longURLs) => {
  const maintainExclusive = new Set();
  const urlPair = [];
  for (let i = 0; i < 10; i += 1) {
    let j = 0;
    while (true) {
      const shortURL = crypto.createHash('md5').update(longURLs[i]).digest('hex').slice(j, j + 6);
      if (!maintainExclusive.has(shortURL)) {
        maintainExclusive.add(shortURL);
        urlPair.push({
          shorturl: shortURL,
          longurl: longURLs[i],
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        break;
      } else {
        j += 6;
      }
    }
  }
  return urlPair;
};

// module.exports = getUrls;

const longURLs = getLongURLs();
const urlPair = getShortURLs(longURLs);
module.exports = urlPair;
