'use strict';
module.exports = (sequelize, DataTypes) => {
  const TravelTypes = sequelize.define('travelType', {
    name: DataTypes.STRING
  }, { timestamps: false });
  TravelTypes.associate = models => {
    TravelTypes.belongToMany(models.Food, { through: 'food_travelTypes' });
  };
  return TravelTypes;
};