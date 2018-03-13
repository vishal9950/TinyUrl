const getHash = require('../helpers/getHash');

const getLongURLs = () => {
  const longURLs = [];
  for (let i = (Number(process.env.START) || 0); i < (Number(process.env.END) || 1e6); i += 1) {
    longURLs.push(`http://somerandomurl${i}`);
  }
  //   console.log(longURLs);
  return longURLs;
};

const getShortURLs = (longURLs) => {
  const maintainExclusive = new Set();
  const urlPair = [];
  for (let i = 0; i < longURLs.length; i += 1) {
    let j = 0;
    while (true) {
      const shortURL = getHash(longURLs[i]).slice(j, j + 6);
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
        console.log('*********COLLISION*********');
        j += 1;
      }
    }
  }
  return urlPair;
};

// module.exports = getUrls;
// client.quit();
const longURLs = getLongURLs();
const urlPair = getShortURLs(longURLs);
module.exports = urlPair;
