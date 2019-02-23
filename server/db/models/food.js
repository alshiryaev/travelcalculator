module.exports = (sequelize, DataTypes) => {
  const food = sequelize.define(
    'food',
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'foods',
    }
  );
  food.associate = models => {
    food.belongsToMany(models.dayTimeType, { through: models.foodDayTimeType });
    food.belongsToMany(models.travelType, { through: models.foodTravelType });
    food.belongsTo(models.recipe);
    food.hasMany(models.ingredient);
  };
  return food;
};
