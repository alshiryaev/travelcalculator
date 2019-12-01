module.exports = (sequelize, DataTypes) => {
  const dayTimeTypes = sequelize.define(
    'dayTimeType',
    {
      name: DataTypes.STRING,
    },
    {
      tableName: 'dayTimeTypes',
      timestamps: false,
      freezeTableName: true,
    }
  );
  dayTimeTypes.associate = models => {
    dayTimeTypes.belongsToMany(models.food, {
      through: 'food_dayTimeType',
      as: 'foods',
    });
  };
  return dayTimeTypes;
};
