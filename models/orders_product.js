'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders_product.init({
    quantity: DataTypes.INTEGER,
    UnitPrice: DataTypes.INTEGER,
    Discount: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    orders_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orders_product',
  });
  return orders_product;
};