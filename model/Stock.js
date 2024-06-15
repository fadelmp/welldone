const DataTypes = require('sequelize');
const Base = require('./Base');
const sequelize = require('../config/db.config');

class Stock extends Base {
  static associate(models) {
    Stock.belongsTo(models.ProductVariant, {
      foreignKey: "product_variant_id",
      as: "product_variant",
    });
    Stock.belongsTo(models.Store, {
      foreignKey: "store_id",
      as: "store",
    });
  }
}

Stock.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id',
  },
  product_variant_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "ProductVariant",
      key: "id",
    },
  },
  store_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Store",
      key: "id",
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'stock',
  },
}, {
  sequelize,
  modelName: 'Stock',
  tableName: 'product_stock',
  paranoid: true,
  timestamps: false,
});

module.exports = Stock