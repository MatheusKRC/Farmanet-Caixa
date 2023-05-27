const StatusSchema = (sequelize, DataTypes) => {
    const StatusTable = sequelize.define(
      "Status",
      {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        status:  {
            allowNull: false,
            type: DataTypes.STRING(50)
        }
      },
      {
        tableName: "status",
        underscored: true,
        timestamps: false,
      }
    );
    StatusTable.associate = (models) => {
        StatusTable.hasMany(models.Cashier, {
            as: 'statusType',
            foreignKey: 'statusId'
        })
    };
  
    return StatusTable;
  };
  
  module.exports = StatusSchema;
  