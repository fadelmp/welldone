const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Role extends Model {}

Role.init({
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
  isActived: { type: DataTypes.BOOLEAN, field: 'is_actived', defaultValue: true },
  isDeleted: { type: DataTypes.BOOLEAN, field: 'is_deleted', defaultValue: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  createdBy: { type: DataTypes.STRING, field: 'created_by' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  updatedBy: { type: DataTypes.STRING, field: 'updated_by' }
}, {
  sequelize,
  tableName: 'user_role',
  modelName: 'Role',
  paranoid: false,
  timestamps: true,
})

module.exports = Role