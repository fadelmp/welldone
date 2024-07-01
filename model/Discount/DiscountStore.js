const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class DiscountStore extends Model {}

DiscountStore.init({
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
  storeId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'store_id',
    references: { model: "Store", key: "id" }
  },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' }
}, {
  sequelize,
  modelName: 'DiscountStore',
  tableName: 'discount_store',
  paranoid: false,
  timestamps: true,
})

module.exports = DiscountStore