'use strict';
module.exports = (sequelize, DataTypes) => {
  var travelTypes = sequelize.define('travelTypes', {
    name: DataTypes.STRING
  }, { timestamps: false });
  travelTypes.associate = function (models) {
    // associations can be defined here
  };
  return travelTypes;
};