'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('food-dayTimeTypes', {
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
          model: 'foods',
          key: 'id'
        },
        allowNull: false
      },
      dayTimeTypeId : {
        type: Sequelize.UUID,
        references : {
          model: 'dayTimeTypes',
          key: 'id'
        },
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('food-dayTimeTypes');   
  }
};
