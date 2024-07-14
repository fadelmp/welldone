const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class PurchaseVariant extends Model {}

PurchaseVariant.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  purchaseId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'purchase_id',
    references: { model: "Purchase", key: "id" }
  },
  variantId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'variant_id',
    references: { model: "Variant", key: "id" }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'stock',
    defaultValue: 0
  },
  isActived: { type: DataTypes.BOOLEAN, field: 'is_actived', defaultValue: true },
  isDeleted: { type: DataTypes.BOOLEAN, field: 'is_deleted', defaultValue: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  createdBy: { type: DataTypes.STRING, field: 'created_by' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  updatedBy: { type: DataTypes.STRING, field: 'updated_by' }
}, {
  sequelize,
  modelName: 'PurchaseVariant',
  tableName: 'inventory_purchase_variant',
  paranoid: false,
  timestamps: true,
})

module.exports = PurchaseVariant