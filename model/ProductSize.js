const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')

class ProductSize extends Model {
  static associate(models) {
    ProductSize.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "product",
    })
    ProductSize.hasMany(models.ProductStock, {
      foreignKey: "product_size_id",
      as: "stocks",
    })
    ProductSize.belongsToMany(models.Store, {
      through: models.ProductStock,
      foreignKey: 'product_size_id',
      otherKey: 'store_id',
      as: 'stores'
    })
  }
}

ProductSize.init({
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
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name',
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'sku',
  },
  unit_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'unit_price',
  },
  capital_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'capital_price',
  },
}, {
  sequelize,
  modelName: 'ProductSize',
  tableName: 'product_size',
  paranoid: true,
  timestamps: false,
})

module.exports = ProductSize