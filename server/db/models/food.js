'use strict';
module.exports = (sequelize, DataTypes) => {
  var foods = sequelize.define('foods', {
    name: DataTypes.STRING
  }, { timestamps: false});
  foods.associate = function(models) {
    // associations can be defined here
  };
  return foods;
};