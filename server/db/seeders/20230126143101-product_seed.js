module.exports = {
  async up(queryInterface) {
    const productData = [
      {
        name: 'Чашка',
        info: 'красивая хорошая чашка 400мл черного цвета',
        price: 2500,
        salePrice: 0,
        img: '/img/photo_2023-01-25 16.14.33 (1).jpeg',
        number: 4,
        category: 'чашки',
      },
      {
        name: 'Ваза',
        info: 'красивая хорошая ваза белого цвета',
        price: 3000,
        salePrice: 2000,
        img: '/img/photo_2023-01-25 16.14.29.jpeg',
        number: 2,
        category: 'вазы',
      },
    ];
    const products = productData.map((product) => ({
      ...product,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Products', products);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Products');
  },
};
