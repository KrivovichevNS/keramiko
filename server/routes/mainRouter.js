const mainRouter = require('express').Router();
const { Product } = require('../db/models');

mainRouter.get('/', async (req, res) => {
  const cup = await Product.findOne({
    where: {
      name: 'Чашка',
    },
    // include: Category;
  });
  const hisCategory = await cup.getCategory();
  res.json({ cup, hisCategory });
});

module.exports = mainRouter;
