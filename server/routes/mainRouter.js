const mainRouter = require('express').Router();
const { Product } = require('../db/models');

mainRouter.get('/', async (req, res) => {
  const cup = await Product.findOne({
    where: {
      name: 'Чашка',
    },
    include: Product.Category,
  });
  res.json({ cup });
});

module.exports = mainRouter;
