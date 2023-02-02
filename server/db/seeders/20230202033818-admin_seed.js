const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const password = process.env.PASSWORD;
    const hash = await bcrypt.hash(password, 10);
    const admin = [
      {
        username: process.env.USERNAME,
        password: hash,
        status: 'boss',

      },
    ];
    const admins = admin.map((category) => ({
      ...category,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('Admins', admins);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Admins');
  },
};
