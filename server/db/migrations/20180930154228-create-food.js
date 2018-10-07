'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('food', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      recipe: {
        type: Sequelize.STRING,
        allowNull: false
      }      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('food');
  }
};