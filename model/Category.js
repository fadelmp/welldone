const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')
const Product = require('./Product')

class Category extends Model {}

Category.init({
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
  tableName: 'category',
  paranoid: false,
  timestamps: true,  
})

Category.hasMany(Product, {
  foreignKey: "category_id",
  as: "products",
})

module.exports = Category