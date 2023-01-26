const mainRouter = require('express').Router();

mainRouter.get('/', (req, res) => {
  res.json({ mesage: 'hello world' });
});

module.exports = mainRouter;
