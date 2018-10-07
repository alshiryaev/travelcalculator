'use strict';
const firstProducts =  require('../../products-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product', firstProducts.products, {});
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('product', null, {});
  }
};
