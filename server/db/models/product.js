const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      Product.belongsTo(Category, { foreignKey: 'category_id' });
    }
  }
  Product.init({
    name: DataTypes.TEXT,
    info: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    img: DataTypes.TEXT,
    salePrice: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
