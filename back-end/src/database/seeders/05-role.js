module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('role', [
        {
         role_name: 'Admin'
        },
        {
         role_name: 'Balconista'
        },
        {
         role_name: 'Entregador'
        },
        {
         role_name: 'Caixa'
        },
        {
         role_name: 'Banco'
        },
      ],
      {}
    );
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("role", null, {});
  },
};
  