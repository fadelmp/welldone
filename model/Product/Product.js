const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Product extends Model {}

Product.init({
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
  description: {
    type: DataTypes.STRING,
    field: 'description'
  },
  categoryId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'category_id',
    references: { model: "Category", key: "id" }
  },
  image1: {
    type: DataTypes.STRING,
    field: 'path_image_1'
  },
  image2: {
    type: DataTypes.STRING,
    field: 'path_image_2'
  },
  image3: {
    type: DataTypes.STRING,
    field: 'path_image_3'
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
  isActived: { type: DataTypes.BOOLEAN, field: 'is_actived', defaultValue: true },
  isDeleted: { type: DataTypes.BOOLEAN, field: 'is_deleted', defaultValue: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  createdBy: { type: DataTypes.STRING, field: 'created_by' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  updatedBy: { type: DataTypes.STRING, field: 'updated_by' }
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'product',
  paranoid: false,
  timestamps: true,
})

module.exports = Product