const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Mutation extends Model {}

Mutation.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  number: {
    type: DataTypes.STRING,
    field: 'number',
  },
  fromStoreId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'from_store_id',
    references: { model: "Store", key: "id" }
  },
  toStoreId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'to_store_id',
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
  modelName: 'Mutation',
  tableName: 'inventory_mutation',
  paranoid: false,
  timestamps: true,
})

module.exports = Mutation