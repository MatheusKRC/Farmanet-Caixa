module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('category', [
        {
         category_name: 'Dinheiro'
        },
        {
         category_name: 'Saída'
        },
        {
         category_name: 'Cartão'
        },
        {
         category_name: 'Pix'
        },
        {
         category_name: 'Total'
        },
      ],
      {}
    );
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("category", null, {});
  },
};
  