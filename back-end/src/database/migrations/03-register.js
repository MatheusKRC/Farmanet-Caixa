module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('register', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        register_id: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        category_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            // references: {
            //     model: 'registers',
            //     key: 'id'
            // },
            // onUpdate: 'CASCADE',
            // onDelete: 'CASCADE'
        },
        description: {
            allowNull: false,
            type: Sequelize.STRING(255)
        },
        value: {
            allowNull: false,
            type: Sequelize.STRING(50)
        },
        hour: {
            allowNull: false,
            type: Sequelize.STRING(50)
        }
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('register');
    },
  };