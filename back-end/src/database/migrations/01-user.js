module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('users', {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(255)
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING(255)
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING(50)
        },
        role_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
          //   references: {
          //     model: 'role',
          //     key: 'id'
          // },
          // onUpdate: 'CASCADE',
          // onDelete: 'CASCADE'
        },
        local_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          // references: {
          //   model: 'locals',
          //   key: 'id'
          // },
          // onUpdate: 'CASCADE',
          // onDelete: 'CASCADE'
        },
        icon: {
          allowNull: false,
          type: Sequelize.STRING(255)
        }
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('users');
    },
  };
  