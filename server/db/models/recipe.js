module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define(
    'recipe',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'recipes',
    }
  );
  return recipe;
};
