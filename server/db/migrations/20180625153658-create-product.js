'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
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
    

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};