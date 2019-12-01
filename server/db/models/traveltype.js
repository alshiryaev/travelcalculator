module.exports = (sequelize, DataTypes) => {
  const TravelTypes = sequelize.define(
    'travelType',
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'travelTypes',
    }
  );
  TravelTypes.associate = models => {
    TravelTypes.belongsToMany(models.food, {
      through: 'food_travelType',
      as: 'foods',
    });
  };
  return TravelTypes;
};
