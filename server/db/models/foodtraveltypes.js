module.exports = (sequelize, DataTypes) => {
  const foodTravelTypes = sequelize.define(
    'foodTravelType',
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
          model: 'foods',
          key: 'id',
        },
        allowNull: false,
      },
      travelTypeId: {
        type: DataTypes.UUID,
        references: {
          model: 'travelType',
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'foodTravelTypes',
    }
  );
  foodTravelTypes.associate = function(models) {
    // associations can be defined here
  };
  return foodTravelTypes;
};
