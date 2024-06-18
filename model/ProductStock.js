const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')

class ProductStock extends Model {
  static associate(models) {
    ProductStock.belongsTo(models.ProductSize, {
      foreignKey: "product_size_id",
      as: "product_size",
    })
    ProductStock.belongsTo(models.Store, {
      foreignKey: "store_id",
      as: "store",
    })
  }
}

ProductStock.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id',
  },
  product_size_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "ProductSize",
      key: "id",
    },
  },
  store_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Store",
      key: "id",
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'stock',
  },
}, {
  sequelize,
  modelName: 'ProductStock',
  tableName: 'product_stock',
  paranoid: true,
  timestamps: false,
})

module.exports = ProductStock