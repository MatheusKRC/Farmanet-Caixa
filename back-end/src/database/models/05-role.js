const RoleSchema = (sequelize, DataTypes) => {
    const RoleTable = sequelize.define(
      "Role",
      {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        roleName:  {
            allowNull: false,
            type: DataTypes.STRING(50)
        }
      },
      {
        tableName: "role",
        underscored: true,
        timestamps: false,
      }
    );
    RoleTable.associate = (models) => {
        RoleTable.hasMany(models.User, {
            as: 'role',
            foreignKey: 'roleId'
        })
    };
  
    return RoleTable;
  };
  
  module.exports = RoleSchema;
  