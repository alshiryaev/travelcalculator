'use strict'

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    protein: DataTypes.DOUBLE,
    fat: DataTypes.DOUBLE,
    carbohydrates: DataTypes.DOUBLE
  }, {
      timestamps: false
    });
  product.associate = models => {
  };
  return product;
};