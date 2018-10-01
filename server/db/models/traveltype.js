'use strict';
module.exports = (sequelize, DataTypes) => {
  const TravelTypes = sequelize.define('TravelType', {
    name: DataTypes.STRING
  }, { timestamps: false });
  TravelTypes.associate = models => {
    TravelTypes.belongToMany(models.Food, { through: 'FoodsTravelTypes' });
  };
  return TravelTypes;
};