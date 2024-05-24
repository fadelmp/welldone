const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')

class Base extends Model {}

Base.init({
  isActived: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_actived',
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_deleted',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
  createdBy: {
    type: DataTypes.STRING,
    field: 'created_by',
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'updated_at',
  },
  updatedBy: {
    type: DataTypes.STRING,
    field: 'updated_by'
  },
}, {
  sequelize,
  modelName: 'Base',
  timestamps: false,
});

module.exports = Base