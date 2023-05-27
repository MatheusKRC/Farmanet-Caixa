module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('status', [
        {
         status: 'Verificado'
        },
        {
         status: 'Não Verificado'
        },
        {
         status: 'Em Analise'
        },
        {
         status: 'Diferença'
        }
      ],
      {}
    );
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("status", null, {});
  },
};
  