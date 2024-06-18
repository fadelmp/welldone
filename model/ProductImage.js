const DataTypes = require('sequelize')
const Base = require('./Base')
const sequelize = require('../config/db.config')

class ProductImage extends Base {
  static associate(models) {
    ProductImage.belongsTo(models.Product, {
      foreignKey: "product_id",
      as: "product",
    })
  }
}

ProductImage.init({
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
  path: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'path',
  },
}, {
  sequelize,
  modelName: 'ProductImage',
  tableName: 'product_image',
  paranoid: true,
  timestamps: false,
})

module.exports = ProductImage