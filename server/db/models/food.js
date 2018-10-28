'use strict';
module.exports = (sequelize, DataTypes) => {
  const food = sequelize.define('food',
    {
      name: DataTypes.STRING,
      recipe: DataTypes.STRING
    },
    {
      timestamps: false
    });
    food.associate = models => {
      food.belongsToMany(models.dayTimeType, { through: 'food_dayTimeType'});
      food.belongsToMany(models.travelType, { through: 'food_travelType'});
  };
  return food;
};