'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('food-travelType', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false
      },
      foodId : {
        type: Sequelize.UUID,
        references : {
          model: 'food',
          key: 'id'
        },
        allowNull: false
      },
      travelTypeId : {
        type: Sequelize.UUID,
        references : {
          model: 'travelType',
          key: 'id'
        },
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
