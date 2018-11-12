'use strict';
module.exports = (sequelize, DataTypes) => {
  const TravelTypes = sequelize.define('travelType', {
    name: DataTypes.STRING
  }, { timestamps: false });
  TravelTypes.associate = models => {
    TravelTypes.belongsToMany(models.food, { through: 'food_travelType' });
  };
  return TravelTypes;
};