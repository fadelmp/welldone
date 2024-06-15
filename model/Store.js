const DataTypes = require('sequelize');
const Base = require('./Base');
const sequelize = require('../config/db.config');

class Store extends Base {
  static associate(models) {
    Store.hasMany(models.Stock, {
      foreignKey: "store_id",
      as: "stocks",
    });
    Store.belongsTo(models.City, {
      foreignKey: "city_id",
      as: "city",
    });
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
  tableName: 'product_Store',
  paranoid: true,
  timestamps: false,
});

module.exports = Store