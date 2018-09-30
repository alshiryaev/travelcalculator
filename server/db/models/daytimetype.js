'use strict';
module.exports = (sequelize, DataTypes) => {
  var dayTimeTypes = sequelize.define('dayTimeTypes', {
    name: DataTypes.STRING
  }, { timestamps: false});
  dayTimeTypes.associate = function(models) {
    // associations can be defined here
  };
  return dayTimeTypes;
};