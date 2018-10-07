'use strict';
module.exports = (sequelize, DataTypes) => {
  const DayTimeTypes = sequelize.define('dayTimeType', {
    name: DataTypes.STRING
  }, { timestamps: false});
  DayTimeTypes.associate = models => {
    DayTimeTypes.belongToMany(models.Food, {through: 'food_dayTimeType' });
  };
  return dayTimeTypes;
};