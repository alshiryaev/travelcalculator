'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipes', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      foodId: {
        type: Sequelize.UUID,
        references: {
          model: 'foods',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    }).then(() => {
      queryInterface.addColumn(
        'foods',
        'recipeId',
        {
          type: Sequelize.UUID,
          references: {
            model: 'recipes',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      )
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('foods', 'recipeId').then(() => {
      return queryInterface.dropTable('recipes');
    })
  }
};