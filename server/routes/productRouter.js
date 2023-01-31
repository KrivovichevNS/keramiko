const productRouter = require('express').Router();
const { Product } = require('../db/models');
const { Category } = require('../db/models');

productRouter.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json({ products, error: null });
  } catch (error) {
    res.json({ message: error });
  }
});

productRouter.get('/allcat', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json({ categories, error: null });
  } catch (error) {
    res.json({ message: error });
  }
});

productRouter.get('/product/:id', async (req, res) => {
  const { id } = req.params.id;
  const currentProduct = await Product.findOne({
    where: {
      id,
    },
  });
  res.json({ message: currentProduct });
});

productRouter.get('/:category', async (req, res) => {
  try {
    const categoryId = await Category.findOne({
      where: {
        name: req.params.category,
      },
    });
    const products = await Product.findAll({
      where: {
        category_id: categoryId.id,
      },
    });
    res.json({ products, error: null });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = productRouter;
