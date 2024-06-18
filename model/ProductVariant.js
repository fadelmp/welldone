const DataTypes = require('sequelize')
const Base = require('./Base')
const sequelize = require('../config/db.config')

class ProductVariant extends Base {
  static associate(models) {
    ProductVariant.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "product",
    })
    ProductVariant.hasMany(models.Stock, {
      foreignKey: "product_variant_id",
      as: "stocks",
    })
  }
}

ProductVariant.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id',
  },
  product_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Product",
      key: "id",
    },
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'size',
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'sku',
  },
}, {
  sequelize,
  modelName: 'ProductVariant',
  tableName: 'product_variant',
  paranoid: true,
  timestamps: false,
})

module.exports = ProductVariant