'use strict';
module.exports = (sequelize, DataTypes) => {
  const food = sequelize.define('food',
    {
      name: DataTypes.STRING
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'foods'
    });
  food.associate = models => {
    food.belongsToMany(models.dayTimeType, { through: models.foodDayTimeType, as : 'dayTimeTypes' });
    food.belongsToMany(models.travelType, { through: models.foodTravelType, as : 'travelTypes' });
    food.belongsTo(models.recipe, {as: 'recipe'});
    food.hasMany(models.ingredient, {as: 'ingredients'});
  };
  return food;
};