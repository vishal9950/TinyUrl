

module.exports = (sequelize, DataTypes) => {
  const urls = sequelize.define('urls', {
    shorturl: DataTypes.STRING,
    longurl: DataTypes.STRING,
  }, {});
  urls.associate = function (models) {
    // associations can be defined here
  };
  return urls;
};
