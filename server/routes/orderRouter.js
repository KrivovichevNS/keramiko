const orderRouter = require('express').Router();
const { Order } = require('../db/models');
const { OrderProduct } = require('../db/models');

const bulkGenerator = (id, array) => {
  const arr = [];
  for (let i = 0; i < array.length; i += 1) {
    arr.push({ order_id: id, product_id: array[i].id });
  }
  return arr;
};

orderRouter.get('/', async (req, res) => {
  const allOrders = await Order.findAll();
  res.json(allOrders);
});

orderRouter.post('/', async (req, res) => {
  try {
    const {
      name, phone, email, comment, totalPrice, basket,
    } = req.body.info;

    if (!name) {
      res.json({ message: '', error: 'Укажите имя' });
      return;
    } if (!phone) {
      res.json({ message: '', error: 'Укажите телефон' });
      return;
    }

    await Order.create({
      customerPhone: phone,
      customerName: name,
      customerEmail: email,
      comment,
      totalPrice,
      status: 'pending',
    });

    const orders = await Order.findAll();
    const currentOrderId = orders.at(-1).id + 1;
    const orderProducts = bulkGenerator(currentOrderId, basket);
    const options = {
      validate: true,
      fields: ['order_id', 'product_id'],
      returning: ['order_id', 'product_id'],
    };

    await OrderProduct.bulkCreate(orderProducts, options);

    res.json({ message: 'Заказ успешно оформлен', error: '' });
  } catch (error) {
    res.status(500);
    res.json({ message: '', error: error.message });
  }
});

module.exports = orderRouter;
