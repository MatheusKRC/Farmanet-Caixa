const UserSchema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define(
      'User',
      {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        roleId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        localId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          foreignKey: true,
        },
        icon: {
          allowNull: false,
          type: DataTypes.STRING,
        },
      },
      {
        tableName: 'users',
        underscored: true,
        timestamps: false,
      },
    );
    UserTable.associate = (models) => {
      UserTable.hasMany(models.Cashier, {
        as: 'users',
        foreignKey: 'userId',
      });

      UserTable.belongsTo(models.Local, {
        as: 'locals',
        foreignKey: 'localId',
      });

      UserTable.belongsTo(models.Role, {
        as: 'role',
        foreignKey: 'roleId',
      });
    };
  
    return UserTable;
  };
  
  module.exports = UserSchema;
