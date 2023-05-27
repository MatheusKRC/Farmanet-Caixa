const CategorySchema = (sequelize, DataTypes) => {
    const CategoryTable = sequelize.define(
      "Category",
      {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        categoryName:  {
            allowNull: false,
            type: DataTypes.STRING(50)
        }
      },
      {
        tableName: "categories",
        underscored: true,
        timestamps: false,
      }
    );
    CategoryTable.associate = (models) => {
        CategoryTable.hasMany(models.Register, {
            as: 'categories',
            foreignKey: 'categoryId'
        })
    };
  
    return CategoryTable;
  };
  
  module.exports = CategorySchema;
  