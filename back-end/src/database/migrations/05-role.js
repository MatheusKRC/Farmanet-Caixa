module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('role', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        role_name: {
            allowNull: false,
            type: Sequelize.STRING(50)
        }
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('role');
    },
  };
  