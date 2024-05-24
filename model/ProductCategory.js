const DataTypes = require('sequelize');
const Base = require('./Base');
const sequelize = require('../config/db.config');

class ProductCategory extends Base {}

ProductCategory.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name',
  },
  description: {
    type: DataTypes.STRING,
    field: 'description',
  },
}, {
  sequelize,
  modelName: 'ProductCategory',
  tableName: 'product_category',
  paranoid: true,
  timestamps: false,
});

module.exports = ProductCategory