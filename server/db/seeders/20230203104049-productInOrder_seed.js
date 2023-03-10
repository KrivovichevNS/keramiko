module.exports = {
  async up(queryInterface) {
    const PROD = [
      {
        order_id: 1,
        product_id: 3,
      },
      {
        order_id: 1,
        product_id: 10,
      },
      {
        order_id: 1,
        product_id: 7,
      },
      {
        order_id: 1,
        product_id: 4,
      },
      {
        order_id: 2,
        product_id: 3,
      },
      {
        order_id: 2,
        product_id: 1,
      },
      {
        order_id: 3,
        product_id: 6,
      },
      {
        order_id: 4,
        product_id: 10,
      },
      {
        order_id: 5,
        product_id: 3,
      },
      {
        order_id: 6,
        product_id: 15,
      },
      {
        order_id: 6,
        product_id: 12,
      },
      {
        order_id: 7,
        product_id: 1,
      },
      {
        order_id: 7,
        product_id: 6,
      },
      {
        order_id: 8,
        product_id: 9,
      },
      {
        order_id: 8,
        product_id: 8,
      },
      {
        order_id: 8,
        product_id: 4,
      },
      {
        order_id: 9,
        product_id: 5,
      },
      {
        order_id: 9,
        product_id: 11,
      },
      {
        order_id: 9,
        product_id: 9,
      },
      {
        order_id: 9,
        product_id: 3,
      },
      {
        order_id: 10,
        product_id: 13,
      },
      {
        order_id: 10,
        product_id: 12,
      },
    ];
    const op = PROD.map((o) => ({
      ...o,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('OrderProducts', op);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('OrderProducts');
  },
};