const adminRouter = require('express').Router();
const { Admin } = require('../db/models');
const { Order } = require('../db/models');
const { OrderProduct } = require('../db/models');
const bcrypt = require('bcrypt');

// adminRouter.get('/', (req, res) => {
//     res.json({ message: 'hello wrld' });
// });

adminRouter.get('/orders', async (req, res) => {
    const allOrders = await Order.findAll()
    res.json(allOrders)
})

adminRouter.get('/order/:id', async (req, res) => {
    const order = await Order.findByPk(req.params.id, {
        include: Order.Products,
    })
    res.json(order)
})

adminRouter.put('/order/:id', async (req, res) => {
    await Order.update(
        {
            status: req.body.orderStatus
        },
        {
            where: { id: req.params.id }
        });

    res.json({ message: req.body.orderStatus })
})

adminRouter.post('/login', async (req, res) => {
    const isLogin = Boolean(req.body.username);
    const isPassword = Boolean(req.body.password);

    if (!isLogin || !isPassword) {
        res.json({ message: '', error: 'error' });
        return;
    }

    let checkUser;
    try {
        checkUser = await Admin.findOne({
            where: {
                username: req.body.username,
            },
        });

    } catch (error) {
        res.json({ error: 'Error!!' });
    }

    if (!checkUser) {
        res.json({ message: 'нет пользователя с таким именем или паролем' });
        return;
    }
    const rawPassword = req.body.password
    const hashedPassword = checkUser.password
    const isSame = await bcrypt.compare(rawPassword, hashedPassword)

    if (!isSame) {
        res.json({ message: 'нет пользователя с таким именем или паролем' });
        return
    }

    req.session.user = { username: checkUser.username, status: checkUser.status }
    res.json({ authUser: req.session.user })
});

adminRouter.delete('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            return res.status(500).json({ message: 'Ошибка при удалении сессии' });
        }
        res
            .clearCookie('user_sid')
            .json({ message: 'Успешный выход' });
    });
})

module.exports = adminRouter;
