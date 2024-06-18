const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')

class Product extends Model {
  static associate(models) {
    Product.belongsTo(models.Category, {
      foreignKey: "product_category_id",
      as: "category",
    })
    Product.hasMany(models.ProductSize, {
      foreignKey: "product_id",
      as: "sizes"
    })
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
  category_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Category",
      key: "id",
    },
  },
  image1: {
    type: DataTypes.STRING,
    field: 'image_path_1',
  },
  image2: {
    type: DataTypes.STRING,
    field: 'image_path_2',
  },
  image3: {
    type: DataTypes.STRING,
    field: 'image_path_3',
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'unit'
  },
  tags: {
    type: DataTypes.STRING,
    field: 'tags'
  }
}, {
  sequelize,
  tableName: 'product',
  paranoid: true,
  timestamps: false,
})

module.exports = Product