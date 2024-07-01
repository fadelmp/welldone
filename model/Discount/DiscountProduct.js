const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class DiscountProduct extends Model {}

DiscountProduct.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  discountId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'discount_id',
    references: { model: "Discount", key: "id" }
  },
  productId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'product_id',
    references: { model: "Product", key: "id" }
  },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' }
}, {
  sequelize,
  modelName: 'DiscountProduct',
  tableName: 'discount_product',
  paranoid: false,
  timestamps: true,
})

module.exports = DiscountProduct