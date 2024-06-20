const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')
const Category = require('./Category')
const ProductSize = require('./ProductSize')

class Product extends Model {}

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
  categoryId: {
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
    field: 'created_at',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  createdBy: {
    type: DataTypes.STRING,
    field: 'created_by',
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedBy: {
    type: DataTypes.STRING,
    field: 'updated_by',
  },
}, {
  sequelize,
  tableName: 'product',
  paranoid: false,
  timestamps: true,
})

Product.belongsTo(Category, {
  foreignKey: "product_category_id",
  as: "category",
})
Product.hasMany(ProductSize, {
  foreignKey: "product_id",
  as: "sizes"
})

module.exports = Product