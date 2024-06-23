const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Inventory extends Model {}

Inventory.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  variantId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'variant_id',
    references: { model: "Variant", key: "id" }
  },
  storeId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'store_id',
    references: { model: "Store", key: "id" }
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'total',
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
  modelName: 'Inventory',
  tableName: 'inventory',
  paranoid: false,
  timestamps: true,
})

module.exports = Inventory