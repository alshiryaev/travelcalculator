'use strict';
module.exports = (sequelize, DataTypes) => {
  const dayTimeTypes = sequelize.define('dayTimeType', {
    name: DataTypes.STRING
  }, { timestamps: false});
  dayTimeTypes.associate = models => {
    dayTimeTypes.belongsToMany(models.food, {through: 'food_dayTimeType' });
  };
  return dayTimeTypes;
};