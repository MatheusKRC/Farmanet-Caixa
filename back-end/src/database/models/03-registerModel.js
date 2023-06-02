const RegisterSchema = (sequelize, DataTypes) => {
    const RegisterTable = sequelize.define(
      "Register",
      {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        registerId: {
            allowNull:false,
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        categoryId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        description: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        value: {
            allowNull: false,
            type: DataTypes.STRING(50)
        },
        hour: {
            allowNull: false,
            type: DataTypes.STRING(50)
        }
      },
      {
        tableName: "register",
        underscored: true,
        timestamps: false,
      }
    );
    RegisterTable.associate = (models) => {
        RegisterTable.belongsTo(models.Category, {
            as: 'categories',
            foreignKey: 'categoryId'
        })

        RegisterTable.belongsTo(models.Cashier, {
            as: 'registers',
            foreignKey: 'registerId'
        })
    };
  
    return RegisterTable;
  };
  
  module.exports = RegisterSchema;
  