const urlPair = require('../src/helpers/getUrls');
const Models = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('urls', urlPair, {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('urls'),
};
