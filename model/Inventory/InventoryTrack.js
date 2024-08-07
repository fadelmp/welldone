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
  type: {
    type: DataTypes.STRING,
    field: 'type'
  },
  total: {
    type: DataTypes.INTEGER,
    field: 'total',
    defaultValue: 0
  },
  notes: {
    type: DataTypes.STRING,
    field: 'notes',
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