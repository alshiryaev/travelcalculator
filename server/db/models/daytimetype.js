'use strict';
module.exports = (sequelize, DataTypes) => {
  const DayTimeTypes = sequelize.define('DayTimeType', {
    name: DataTypes.STRING
  }, { timestamps: false});
  DayTimeTypes.associate = models => {
    DayTimeTypes.belongToMany(models.Food, {through: 'FoodsDayTimeTypes' });
  };
  return dayTimeTypes;
};