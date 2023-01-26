const productRouter = require('express').Router();
const { Product } = require('express');

productRouter.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json({ products });
});

module.exports = productRouter;
