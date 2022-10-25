'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    ID: DataTypes.INTEGER,
    Productcode: DataTypes.INTEGER,
    ProductName: DataTypes.STRING,
    Description: DataTypes.STRING,
    standardCost: DataTypes.INTEGER,
    listPrice: DataTypes.STRING,
    recorderLevel: DataTypes.STRING,
    targetlevel: DataTypes.STRING,
    quantityparunit: DataTypes.INTEGER,
    dicontinued: DataTypes.STRING,
    minimumRecorder: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};