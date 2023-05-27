module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('cashier', {
      register_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'registers',
        //   key: 'id'
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE'
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'users',
        //   key: 'id'
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE'
      },
      date: {
        allowNull: false,
        type: Sequelize.STRING
      },
      office_hour: {
        allowNull: false,
        type: Sequelize.STRING(50)
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
      status_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // references: {
        //   model: 'status',
        //   key: 'id'
        // },
        // onUpdate: 'CASCADE',
        // onDelete: 'CASCADE'
      }
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('cashier');
    },
  };
  
  