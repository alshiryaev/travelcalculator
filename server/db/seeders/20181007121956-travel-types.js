'use strict';

const { v4 } = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('travelType', [
      {
        id: v4(),
        name: "Сплав"
      }, {
        id: v4(),
        name: "Горный поход"
      },
      {
        id: v4(),
        name: "Пеший поход"
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('travelType', null, {});

  }
};
