const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')

class Base extends Model {}

Base.init({
  is_actived: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_actived',
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_deleted',
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'created_at',
  },
  created_by: {
    type: DataTypes.STRING,
    field: 'created_by',
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: 'updated_at',
  },
  updated_by: {
    type: DataTypes.STRING,
    field: 'updated_by'
  },
}, {
  sequelize,
  modelName: 'Base',
  timestamps: false,
});

module.exports = Base