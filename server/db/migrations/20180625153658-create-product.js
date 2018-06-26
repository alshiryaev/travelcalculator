'use strict';

const firstProducts =  require('../../testProducts');

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      protein: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      fat: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      carbohydrates: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      calories: {
        allowNull: false,
        type: Sequelize.DOUBLE
      }
    });
    return queryInterface.bulkInsert('Products', firstProducts.products, {});

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};