'use strict';
module.exports = (sequelize, DataTypes) => {
  var ingredient = sequelize.define('ingredient', {
    ingredient: DataTypes.STRING
  },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'ingredients'
    });
  ingredient.associate = function (models) {
    ingredient.belongsTo(models.product, {as: 'product'});
  };
  return ingredient;
};