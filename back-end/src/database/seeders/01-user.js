module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('users', [
        {
          name: "Matheus Santos Leão",
          email: "kyracraft0@gmail.com",
          password: "e6755d2d5700fc5d4e884a301661fa3f",
          role_id: "4",
          local_id: "1",
          icon: 'https://pps.whatsapp.net/v/t61.24694-24/286461062_1137357543781417_2630030941143924649_n.jpg?ccb=11-4&oh=01_AdRumZrCPMWMYRkjFSN9Bd_qzVAHoFHN9vmqiSpLJVLCeQ&oe=6474B188 '
        },
        {
          name: "Abdoral Leão neto",
          email: "farmaciafarmanet@hotmail.com",
          password: "ecd7f105972dd3caf2da32226b06acc3",
          role_id: "1",
          local_id: '1',
          icon: 'https://pps.whatsapp.net/v/t61.24694-24/342668537_228157989848963_5760270335919802208_n.jpg?ccb=11-4&oh=01_AdQo61NkqMY2-gmMK_4JVZg3gQ2m9bPi9ub9WPeaUy5s1w&oe=6474B42A'
        },
      ],
      {}
    );
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
  