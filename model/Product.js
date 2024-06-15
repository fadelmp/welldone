const DataTypes = require('sequelize');
const Base = require('./Base');
const sequelize = require('../config/db.config');

class Product extends Base {
  static associate(models) {
    Product.belongsTo(models.ProductCategory, {
      foreignKey: "product_category_id",
      as: "category",
    });
    Product.hasMany(models.ProductImage, {
      foreignKey: "product_id",
      as: "images",
    });
    Product.hasMany(models.ProductVariant, {
      foreignKey: "product_id",
      as: "variants"
    });
  }
}

Product.init({
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
  description: {
    type: DataTypes.STRING,
    field: 'description',
  },
  product_category_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "ProductCategory",
      key: "id",
    },
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'unit'
  },
  unit_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'unit_price'
  },
  sale_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'sale_price'
  },
  tags: {
    type: DataTypes.STRING,
    field: 'tags'
  }
  
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'product',
  paranoid: true,
  timestamps: false,
});

module.exports = Product