module.exports = {
  async up(queryInterface) {
    const categoryData = [
      {
        name: 'cups',
      },
      {
        name: 'plates',
      },
      {
        name: 'vase',
      },
      {
        name: 'other',
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
