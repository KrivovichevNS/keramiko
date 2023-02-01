require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');
const { sequelize } = require('./db/models');

const app = express();
const PORT = process.env.PORT || 3001;

const buildDir = path.join('..', 'client', 'build');
app.use(express.static(buildDir));

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use('/api', mainRouter);
app.use('/api/products', productRouter);
app.use('/api/order', orderRouter);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, async () => {
  /* eslint-disable no-console */
  console.log('Сервер запущен на порту', PORT);

  try {
    await sequelize.authenticate();
    console.log('Успешно подключились к БД');
  } catch (error) {
    console.log('Ошибка подключения к БД');
    console.log(error.message);
  }
});
