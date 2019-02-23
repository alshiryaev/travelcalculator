module.exports = (sequelize, DataTypes) => {
  var foodDayTimeTypes = sequelize.define(
    'foodDayTimeType',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      foodId: {
        type: DataTypes.UUID,
        references: {
          model: 'food',
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      dayTimeTypeId: {
        type: DataTypes.UUID,
        references: {
          model: 'dayTimeTypes',
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'foodDayTimeTypes',
    }
  );
  foodDayTimeTypes.associate = function(models) {
    // associations can be defined here
  };
  return foodDayTimeTypes;
};
