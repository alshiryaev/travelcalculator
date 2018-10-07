'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('food',
    {
      name: DataTypes.STRING,
      recipe: DataTypes.STRING
    },
    {
      timestamps: false
    });
  Food.associate = models => {
    Food.belongsToMany(models.DayTimeType, { through: 'food_dayTimeType'});
    Food.belongsToMany(models.TravelType, { through: 'food_travelType'});
  };
  return Food;
};