const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class RolePrivilege extends Model {}

RolePrivilege.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  roleId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: { model: "Role", key: "id" }
  },
  privilegeId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: { model: "Privilege", key: "id" }
  },
  isActived: { type: DataTypes.BOOLEAN, field: 'is_actived', defaultValue: true },
  isDeleted: { type: DataTypes.BOOLEAN, field: 'is_deleted', defaultValue: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  createdBy: { type: DataTypes.STRING, field: 'created_by' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  updatedBy: { type: DataTypes.STRING, field: 'updated_by' }
}, {
  sequelize,
  tableName: 'user_role_privilege',
  modelName: 'RolePrivilege',
  paranoid: false,
  timestamps: true,
})

module.exports = RolePrivilege