const orderRouter = require('express').Router();

orderRouter.get('/', (req, res) => {
  res.json('запрос доставлен');
});

orderRouter.post('/', (req, res) => {
  console.log(req.body, 'REQ BODY !!!!');
  console.log(req.body.info.basket);
  res.json('OK');
});

module.exports = orderRouter;
