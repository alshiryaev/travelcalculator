'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipe = sequelize.define('recipe', {
    description: DataTypes.STRING
  },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'recipes'
    });
  recipe.associate = function (models) {
  };
  return recipe;
};