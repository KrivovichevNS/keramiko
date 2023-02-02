require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');

const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');
const adminRouter = require('./routes/adminRouter');
const { sequelize } = require('./db/models');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым 
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session cookie: {
  maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
  httpOnly: true, // Серверная установка и удаление куки, по умолчанию true },
};

const app = express();
const PORT = process.env.PORT || 3001;

const buildDir = path.join('..', 'client', 'build');
app.use(express.static(buildDir));

app.use(session(sessionConfig));

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
app.use('/api/admin', adminRouter);

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
