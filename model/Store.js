const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')

class Store extends Model {
  static associate(models) {
    Store.belongsTo(models.City, {
      foreignKey: "city_id",
      as: "city",
    })
    Store.hasMany(models.ProductStock, {
      foreignKey: "store_id",
      as: "stocks",
    })
    Store.belongsToMany(models.ProductSize, {
      through: models.ProductStock,
      foreignKey: 'store_id',
      otherKey: 'product_size_id',
      as: 'product_sizes'
    })
  }
}

Store.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name',
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'address',
  },
  cp_name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'cp_name',
  },
  cp_phone: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'cp_phone',
  },
  city_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "City",
      key: "id",
    },
  },
}, {
  sequelize,
  modelName: 'Store',
  tableName: 'store',
  paranoid: true,
  timestamps: false,
})

module.exports = Store