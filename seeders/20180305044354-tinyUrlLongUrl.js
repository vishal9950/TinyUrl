const urlPair = require('../src/helpers/getUrls');
const Models = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => Models.urls.bulkCreate(urlPair, {}),

  down: (queryInterface, Sequelize) => Models.urls.destroy({ truncate: true }),
};
