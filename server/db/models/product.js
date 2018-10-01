'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {    
    name: DataTypes.STRING,
    protein: DataTypes.DOUBLE,
    fat: DataTypes.DOUBLE,
    carbohydrates: DataTypes.DOUBLE
  }, {
    timestamps: false
  });
  Product.associate = models => {
  };
  return Product;
};