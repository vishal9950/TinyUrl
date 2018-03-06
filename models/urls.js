module.exports = (sequelize, DataTypes) => {
  const urls = sequelize.define('urls', {
    shorturl: {
      type: DataTypes.STRING(6),
      unique: true,
      validate: {
        len: [6, 6],
      },
    },
    longurl: DataTypes.STRING,
  }, {});
  urls.createObject = (longurl, shorturl) => (urls.findOrCreate({
    where: { shorturl },
    defaults: { longurl },
  }));
  return urls;
};
