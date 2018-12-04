'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ingredients', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false
      },
      productId: {
        type: Sequelize.UUID,
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false
      },
      foodId: {
        type: Sequelize.UUID,
        references: {
          model: 'foods',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
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