const CashierSchema = (sequelize, DataTypes) => {
    const CashierTable = sequelize.define(
      "Cashier",
      {
        registerId: {
          allowNull: false,
          foreignKey: true,
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER
        },
        userId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          foreignKey: true,
        },
        date: {
          allowNull: false,
          type: DataTypes.STRING
        },
        officeHour: {
          allowNull: false,
          type: DataTypes.STRING(50)
        },
        localId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          foreignKey: true,
        },
        statusId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          foreignKey: true,
        }
      },
      {
        tableName: "cashier",
        underscored: true,
        timestamps: false,
      }
    );
    CashierTable.associate = (models) => {
      CashierTable.belongsTo(models.Register, {
        as: 'registers',
        foreignKey: 'RegisterId'
      })

      CashierTable.belongsTo(models.User, {
        as: 'users',
        foreignKey: 'userId'
      });

      CashierTable.belongsTo(models.Local, {
        as: 'locals',
        foreignKey: 'localId'
      });

      CashierTable.belongsTo(models.Status, {
        as: 'status',
        foreignKey: 'statusId'
      })
    };
  
    return CashierTable;
  };
  
  module.exports = CashierSchema;
  