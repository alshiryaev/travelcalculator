'use strict';
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define('Products', {    
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