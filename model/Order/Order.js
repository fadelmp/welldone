const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Order extends Model {}

Order.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'number'
  },
  invoiceNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'invoice_number'
  },
  storeId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'store_id'
  },
  storeName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'store_name'
  },
  paymentId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'payment_id'
  },
  paymentName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'payment_name'
  },
  voucherId: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'voucher_id'
  },
  voucherName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'voucher_name'
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
  isActived: { type: DataTypes.BOOLEAN, field: 'is_actived', defaultValue: true },
  isDeleted: { type: DataTypes.BOOLEAN, field: 'is_deleted', defaultValue: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  createdBy: { type: DataTypes.STRING, field: 'created_by' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  updatedBy: { type: DataTypes.STRING, field: 'updated_by' }
}, {
  sequelize,
  tableName: 'order',
  modelName: 'Order',
  paranoid: false,
  timestamps: true,
})

module.exports = Order