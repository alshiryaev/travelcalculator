'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.UUID,
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      foodId: {
        type: Sequelize.UUID,
        references: {
          model: 'foods',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    })
    // .then(() => {
    //   queryInterface.addColumn(
    //     'products',
    //     'ingredientId',
    //     {
    //       type: Sequelize.UUID,
    //       references: {
    //         model: 'ingredients',
    //         key: 'id',
    //       },
    //       onUpdate: 'CASCADE',
    //       onDelete: 'SET NULL',
    //     }
    //   )
    // });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ingredients');
  }
};