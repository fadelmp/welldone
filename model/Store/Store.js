const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')
const City = require('./City')
const Inventory = require('../Inventory/Inventory')
const Variant = require('../Product/Variant')

class Store extends Model {}

Store.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name'
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'address'
  },
  cityId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'city_id',
    references: { model: "City", key: "id" }
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
    field: 'created_by'
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
  modelName: 'Store',
  tableName: 'location_store',
  paranoid: true,
  timestamps: false,
})

Store.belongsTo(City, { foreignKey: "city_id", as: "city" })
Store.hasMany(Inventory, { foreignKey: "store_id", as: "inventories" })
Store.belongsToMany(Variant, {
  through: Stock,
  foreignKey: 'store_id',
  otherKey: 'variant_id',
  as: 'variants'
})

module.exports = Store