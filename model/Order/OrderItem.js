const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class OrderItem extends Model {}

OrderItem.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  orderId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'order_id',
    references: { model: "Order", key: "id" }
  },
  variantId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'variant_id'
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'size'
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'sku'
  },
  productId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'product_id'
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'product_name'
  },
  categoryId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'category_id'
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'category_name'
  },
  discountId: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'discount_id'
  },
  discountName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'discount_name'
  },
  discountPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'discount_price'
  },
  capitalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'capital_price'
  },
  revenuePrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'revenue_price'
  },
  amountPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'amount_price'
  },
  finalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'final_price'
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'quantity'
  },
  totalDiscount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'total_discount'
  },
  totalCapital: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'total_capital'
  },
  totalRevenue: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'total_revenue'
  },
  totalAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'total_amount'
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'total'
  },
  isActived: { type: DataTypes.BOOLEAN, field: 'is_actived', defaultValue: true },
  isDeleted: { type: DataTypes.BOOLEAN, field: 'is_deleted', defaultValue: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  createdBy: { type: DataTypes.STRING, field: 'created_by' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  updatedBy: { type: DataTypes.STRING, field: 'updated_by' }
}, {
  sequelize,
  tableName: 'order_item',
  modelName: 'OrderItem',
  paranoid: false,
  timestamps: true,
})

module.exports = OrderItem