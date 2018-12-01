'use strict'

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product',
    {
      name: DataTypes.STRING,
      protein: DataTypes.DOUBLE,
      fat: DataTypes.DOUBLE,
      carbohydrates: DataTypes.DOUBLE,
      calories: DataTypes.DOUBLE
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'products'
    });
  product.associate = models => {
    product.hasOne(models.ingredient);
  };
  return product;
};