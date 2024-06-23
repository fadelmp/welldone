const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Variant extends Model {}

Variant.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  productId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'product_id',
    references: { model: "Product", key: "id" }
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'sku'
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'size'
  },
  capitalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'capital_price'
  },
  unitPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'unit_price'
  },
  isActived: { type: DataTypes.BOOLEAN, field: 'is_actived', defaultValue: true },
  isDeleted: { type: DataTypes.BOOLEAN, field: 'is_deleted', defaultValue: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  createdBy: { type: DataTypes.STRING, field: 'created_by' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  updatedBy: { type: DataTypes.STRING, field: 'updated_by' }
}, {
  sequelize,
  modelName: 'Variant',
  tableName: 'product_variant',
  paranoid: false,
  timestamps: true,
})

module.exports = Variant