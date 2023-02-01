const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ Product }) {
      Order.Products = Order.belongsToMany(Product, {
        through: 'OrderProducts',
        foreignKey: 'order_id',
        otherKey: 'product_id',
        as: 'products',
      });
    }
  }
  Order.init({
    customerPhone: DataTypes.TEXT,
    customerName: DataTypes.TEXT,
    customerEmail: DataTypes.TEXT,
    comment: DataTypes.TEXT,
    totalPrice: DataTypes.INTEGER,
    status: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
