module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('recipes', {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          autoIncrement: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      })
      .then(() => {
        queryInterface.addColumn('foods', 'recipeId', {
          type: Sequelize.UUID,
          references: {
            model: 'recipes',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('foods', 'recipeId').then(() => {
      return queryInterface.dropTable('recipes');
    });
  },
};
