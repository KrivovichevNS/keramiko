require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const { sequelize } = require('./db/models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, 'public')))

app.use('/', mainRouter);
app.use('/product', productRouter);

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
