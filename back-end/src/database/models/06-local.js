const LocalSchema = (sequelize, DataTypes) => {
    const LocalTable = sequelize.define(
      "Local",
      {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        localName:  {
            allowNull: false,
            type: DataTypes.STRING(50)
        }
      },
      {
        tableName: "local",
        underscored: true,
        timestamps: false,
      }
    );
    LocalTable.associate = (models) => {
        LocalTable.hasMany(models.User, {
            as: 'local',
            foreignKey: 'localId'
        })

        LocalTable.hasMany(models.Cashier, {
            as: 'locals2',
            foreignKey: 'localId'
        })
    };
  
    return LocalTable;
  };
  
  module.exports = LocalSchema;
  