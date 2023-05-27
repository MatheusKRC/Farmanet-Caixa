module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('local', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        local_name: {
            allowNull: false,
            type: Sequelize.STRING(50)
        }
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('local');
    },
  };