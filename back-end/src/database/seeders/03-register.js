module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('register', [
        {
            register_id: '1',
            category_id: '4',
            description: 'Pix (Giancarlle)',
            value: 'R$ 19,00',
            hour: '07:00'
        },
        {
            register_id: '1',
            category_id: '4',
            description: 'Pix (Laiara)',
            value: 'R$ 38,00',
            hour: '07:20'
        },
        {
            register_id: '1',
            category_id: '4',
            description: 'Pix (Eliza)',
            value: 'R$ 100,00',
            hour: '07:30'
        },
        {
            register_id: '1',
            category_id: '2',
            description: 'Conta Não Baixada',
            value: 'R$ 190,00',
            hour: '07:48'
        },
        {
            register_id: '1',
            category_id: '2',
            description: 'Programa',
            value: 'R$ 831,12',
            hour: '07:55'
        },
        {
            register_id: '1',
            category_id: '4',
            description: 'Pix ()',
            value: 'R$ 15,00',
            hour: '08:20'
        },
        {
            register_id: '1',
            category_id: '2',
            description: 'Programa',
            value: 'R$ 294,37',
            hour: '08:40'
        },
        {
            register_id: '1',
            category_id: '4',
            description: 'Pix (Maria dos Remedios)',
            value: 'R$ 58,87',
            hour: '08:48'
        },
        {
            register_id: '1',
            category_id: '2',
            description: 'Banco',
            value: 'R$ 400,00',
            hour: '08:50'
        },
        {
            register_id: '1',
            category_id: '4',
            description: 'Pix (José Tadeu)',
            value: 'R$ 15,00',
            hour: '08:58'
        },
        {
            register_id: '1',
            category_id: '2',
            description: 'Matheus',
            value: 'R$ 600,00',
            hour: '09:30'
        },
        {
            register_id: '1',
            category_id: '4',
            description: 'Pix (Francisca Maria)',
            value: 'R$ 311,00',
            hour: '09:38'
        },
        {
            register_id: '1',
            category_id: '4',
            description: 'Pix (Francineide Francisca)',
            value: 'R$ 23,79',
            hour: '09:45'
        },
        {
            register_id: '1',
            category_id: '2',
            description: 'Gasolina',
            value: 'R$ 65,00',
            hour: '10:00'
        },
        {
            register_id: '1',
            category_id: '2',
            description: 'Conta Não Baixada',
            value: 'R$ 52,24',
            hour: '10:25'
        },
        {
            register_id: '1',
            category_id: '2',
            description: 'Banco',
            value: 'R$ 1150,00',
            hour: '10:45'
        },
        {
            register_id: '1',
            category_id: '4',
            description: 'Pix (Estelina)',
            value: 'R$ 53,78',
            hour: '10:50'
        },
        {
            register_id: '1',
            category_id: '4',
            description: 'Pix (Adelma)',
            value: 'R$ 17,87',
            hour: '11:20'
        },
        {
            register_id: '1',
            category_id: '2',
            description: 'Lanche',
            value: 'R$ 22,00',
            hour: '11:30'
        },
        {
            register_id: '1',
            category_id: '2',
            description: 'Devolução',
            value: 'R$ 35,50',
            hour: '11:44'
        },
        {
            register_id: '1',
            category_id: '1',
            description: 'Caixa(01)',
            value: 'R$ 2684,00',
            hour: '12:00'
        },
        {
            register_id: '1',
            category_id: '3',
            description: 'Cartão',
            value: 'R$ 709,35',
            hour: '12:00'
        },
        {
            register_id: '1',
            category_id: '2',
            description: 'Saídas',
            value: 'R$ 3640,00',
            hour: '12:00'
        },
        {
            register_id: '1',
            category_id: '4',
            description: 'Pixs',
            value: 'R$ 652,31',
            hour: '12:00'
        },
        {
            register_id: '1',
            category_id: '5',
            description: 'Total do Caixa',
            value: 'R$ 7685,89',
            hour: '12:00'
        },
      ],
      {}
    );
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("register", null, {});
  },
};
  