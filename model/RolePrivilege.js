const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')
const Role = require('./Role')
const Privilege = require('./Privilege')

class RolePrivilege extends Model {}

RolePrivilege.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id',
  },
  roleId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: { model: "Role", key: "id" },
  },
  privilegeId: {
    type: DataTypes.STRING,
    allowNull: false,
    references: { model: "Privilege", key: "id" },
  }
}, {
  sequelize,
  tableName: 'role_privilege',
  paranoid: false,
  timestamps: true,
})

RolePrivilege.belongsTo(Role, { foreignKey: "role_id", as: "role" })
RolePrivilege.belongsTo(Privilege, { foreignKey: "privilege_id", as: "privilege" })

module.exports = Privilege