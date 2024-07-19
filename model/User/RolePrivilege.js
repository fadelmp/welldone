const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class RolePrivilege extends Model {}

RolePrivilege.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.INTEGER,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'role_id',
    references: { model: "Role", key: "id" }
  },
  privilegeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'privilege_id',
    references: { model: "Privilege", key: "id" }
  }
}, {
  sequelize,
  tableName: 'user_role_privilege',
  modelName: 'RolePrivilege',
  paranoid: false,
  timestamps: false,
})

module.exports = RolePrivilege