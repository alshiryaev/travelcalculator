module.exports = (sequelize, DataTypes) => {
  const ingredient = sequelize.define(
    'ingredient',
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'ingredients',
    }
  );
  ingredient.associate = models => {
    ingredient.belongsTo(models.product);
  };
  return ingredient;
};
