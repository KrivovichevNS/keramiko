module.exports = {
  async up(queryInterface) {
    const order = [
      {
        customerPhone: '89220029418',
        customerName: 'Валентин',
        customerEmail: '',
        comment: 'перезвоните пожалуйста, нужно уточнить пару вопросов по поводу товара',
        totalPrice: '',
        status: 'cancel',
      },
      {
        customerPhone: '+79223529411',
        customerName: 'Алексей',
        customerEmail: '',
        comment: 'не звонить, писать в тг по номеру',
        totalPrice: '',
        status: 'process',
      },
      {
        customerPhone: '89113129410',
        customerName: 'Ирина',
        customerEmail: '',
        comment: 'хочу уточнить кол-во товара',
        totalPrice: '',
        status: 'process',
      },
      {
        customerPhone: '89227886655',
        customerName: 'Юлия',
        customerEmail: '',
        comment: 'не звонить до 19.00',
        totalPrice: '',
        status: 'process',
      },
      {
        customerPhone: '89812094545',
        customerName: 'Олег',
        customerEmail: '',
        comment: 'нужно три таких',
        totalPrice: '',
        status: 'cancel',
      },
      {
        customerPhone: '89220020995',
        customerName: 'Иван',
        customerEmail: '',
        comment: '',
        totalPrice: '',
        status: 'cancel',
      },
      {
        customerPhone: '89110010101',
        customerName: 'Анастасия',
        customerEmail: '',
        comment: 'Хочу забрать сегодня',
        totalPrice: '',
        status: 'pending',
      },
      {
        customerPhone: '89171995123',
        customerName: 'Игорь',
        customerEmail: '',
        comment: 'не звонить, занят. Свяжусь сам',
        totalPrice: '',
        status: 'done',
      },
      {
        customerPhone: '+79991234567',
        customerName: 'Анна',
        customerEmail: '',
        comment: '',
        totalPrice: '',
        status: 'done',
      },
      {
        customerPhone: '+78994509676',
        customerName: 'Виктор',
        customerEmail: '',
        comment: 'перезвоните пожалуйста',
        totalPrice: '',
        status: 'done',
      },
    ];
    const orders = order.map((o) => ({
      ...category,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Orders', orders);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Orders');
  },
};