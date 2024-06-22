const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Variant extends Model {
  static associate(models) {
    Variant.belongsTo(models.Product, { foreignKey: "product_id", as: "product" })
    Variant.hasMany(models.Stock, { foreignKey: "variant_id", as: "stocks" })
    Variant.belongsToMany(models.Store, {
    through: models.Stock,
    foreignKey: 'variant_id',
    otherKey: 'store_id',
    as: 'stores'
})
  }
}

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
  capital_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'capital_price'
  },
  unit_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'unit_price'
  },
}, {
  sequelize,
  modelName: 'Variant',
  tableName: 'product_variant',
  paranoid: false,
  timestamps: true,
})

module.exports = Variant