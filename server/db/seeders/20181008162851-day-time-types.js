'use strict';
const { v4 } = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dayTimeTypes', [
      {
        id: v4(),
        name: "Завтрак"
      }, {
        id: v4(),
        name: "Обед"
      },
      {
        id: v4(),
        name: "Ужин"
      },
      {
        id: v4(),
        name: "Перекус"
      }], {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('dayTimeTypes', null, {});
  }
};
