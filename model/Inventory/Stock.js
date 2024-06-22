const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Stock extends Model {
  static associate(models) {
    Stock.belongsTo(models.Variant, { foreignKey: "variant_id", as: "variant" })
    Stock.belongsTo(models.Store, { foreignKey: "store_id", as: "store" })
  }
}

Stock.init({
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
    references: { model: "Variant", key: "id" }
  },
  storeId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: { model: "Store", key: "id" }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'quantity',
    defaultValue: 0
  },
  isActived: {
    type: DataTypes.BOOLEAN,
    field: 'is_actived',
    defaultValue: true 
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    field: 'is_deleted',
    defaultValue: false
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  createdBy: {
    type: DataTypes.STRING,
    field: 'created_by',
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  },
  updatedBy: {
    type: DataTypes.STRING,
    field: 'updated_by'
  }
}, {
  sequelize,
  modelName: 'Stock',
  tableName: 'stock',
  paranoid: false,
  timestamps: true,
})

module.exports = Stock