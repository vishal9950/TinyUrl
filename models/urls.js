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
  return urls;
};
