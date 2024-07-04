const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class InventoryTrack extends Model {}

InventoryTrack.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  inventoryId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'inventory_id',
    references: { model: "Inventory", key: "id" }
  },
  entry: {
    type: DataTypes.INTEGER,
    field: 'entry',
    defaultValue: 0
  },
  adjustment: {
    type: DataTypes.INTEGER,
    field: 'adjustment',
    defaultValue: 0
  },
  sales: {
    type: DataTypes.INTEGER,
    field: 'sales',
    defaultValue: 0
  },
  transferIn: {
    type: DataTypes.INTEGER,
    field: 'transfer_in',
    defaultValue: 0
  },
  transferOut: {
    type: DataTypes.INTEGER,
    field: 'transfer_out',
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
  modelName: 'InventoryTrack',
  tableName: 'inventory_track',
  paranoid: false,
  timestamps: true,
})

module.exports = InventoryTrack