module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('local', [
        {
         local_name: 'Centro'
        },
        {
         local_name: 'Paqueta'
        }
      ],
      {}
    );
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("local", null, {});
  },
};
  