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
  }
}, {
  sequelize,
  tableName: 'role_privilege',
  modelName: 'RolePrivilege',
  paranoid: false,
  timestamps: true,
})

module.exports = RolePrivilege