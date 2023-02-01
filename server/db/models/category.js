const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Product }) {
      Category.Products = Category.hasMany(Product, {
        foreignKey: 'category_id',
        as: 'products',
      });
    }
  }
  Category.init({
    name: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
