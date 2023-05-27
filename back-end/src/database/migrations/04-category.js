module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('category', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        category_name: {
            allowNull: false,
            type: Sequelize.STRING(50)
        }
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('category');
    },
  };
  