'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'recipes'
    });
  recipe.associate = (models) => {
    recipe.hasOne(models.food);
  };
  return recipe;
};