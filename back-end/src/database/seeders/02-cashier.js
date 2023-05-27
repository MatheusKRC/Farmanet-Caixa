module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('cashier', [
        {
          user_id: "1",
          register_id: "1",
          date: "01/03/2023",
          office_hour: "Manhã",
          local_id: "1",
          status_id: "1"
        },
      ],
      {}
    );
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("cashier", null, {});
  },
};
  