module.exports = {
  async up(queryInterface) {
    const categoryData = [
      {
        name: 'cups',
        display_name: 'Чашки' 
      },
      {
        name: 'plates',
        display_name: 'Тарелки'
      },
      {
        name: 'vase',
        display_name: 'Вазы'
      },
      {
        name: 'other',
        display_name: 'Прочее'
      },
    ];
    const categories = categoryData.map((category) => ({
      ...category,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Categories', categories);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Categories');
  },
};
