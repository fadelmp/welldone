const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Purchase extends Model {}

Purchase.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  deliveryNote: {
    type: DataTypes.STRING,
    field: 'delivery_note',
  },
  supplier: {
    type: DataTypes.STRING,
    field: 'supplier',
  },
  storeId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'store_id',
    references: { model: "Store", key: "id" }
  },
  isActived: { type: DataTypes.BOOLEAN, field: 'is_actived', defaultValue: true },
  isDeleted: { type: DataTypes.BOOLEAN, field: 'is_deleted', defaultValue: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  createdBy: { type: DataTypes.STRING, field: 'created_by' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  updatedBy: { type: DataTypes.STRING, field: 'updated_by' }
}, {
  sequelize,
  modelName: 'Purchase',
  tableName: 'inventory_purchase',
  paranoid: false,
  timestamps: true,
})

module.exports = Purchase