const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')

class Category extends Model {
  static associate(models) {
    Category.hasMany(models.Product, {
      foreignKey: "product_category_id",
      as: "products",
    })
  }
}

Category.init({
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
  is_actived: {
    type: DataTypes.BOOLEAN,
    field: 'is_actived',
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    field: 'is_deleted',
  },
  created_at: {
    type: DataTypes.DATE,
    field: 'created_at',
  },
  created_by: {
    type: DataTypes.STRING,
    field: 'created_by',
  },
  updated_at: {
    type: DataTypes.DATE,
    field: 'updated_at',
  },
  updated_by: {
    type: DataTypes.STRING,
    field: 'updated_by'
  },
}, {
  sequelize,
  modelName: 'Category',
  tableName: 'category',
  paranoid: true,
  timestamps: false,  
  defaultScope: {
    attributes: {
      include: ['is_actived', 'is_deleted', 'created_at', 'created_by', 'updated_at', 'updated_by']
    }
  },
})

module.exports = Category