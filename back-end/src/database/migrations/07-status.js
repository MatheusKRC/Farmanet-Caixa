module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('status', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        status: {
            allowNull: false,
            type: Sequelize.STRING(50)
        }
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('status');
    },
  };