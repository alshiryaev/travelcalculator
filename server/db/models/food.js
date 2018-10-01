'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food',
    {
      name: DataTypes.STRING,
      recipe: DataTypes.STRING
    },
    {
      timestamps: false
    });
  Food.associate = models => {
    Food.belongToMany(models.DayTimeType, { through: 'FoodsDayTimeTypes' });
    Food.belongToMany(models.TravelType, { through: 'FoodsTravelTypes' });
  };
  return Food;
};