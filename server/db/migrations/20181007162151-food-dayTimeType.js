'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('food-dayTimeType', {
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
      dayTimeTypeId : {
        type: Sequelize.UUID,
        references : {
          model: 'dayTimeType',
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
