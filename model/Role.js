const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')
const Privilege = require('./Privilege')
const RolePrivilege = require('./RolePrivilege')

class Role extends Model {}

Role.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id',
  },
  name: {
    type: DataTypes.String,
    allowNull: false,
    field: 'name',
  }
}, {
  sequelize,
  tableName: 'role',
  paranoid: false,
  timestamps: true,
})

Role.hasMany(RolePrivilege, { foreignKey: "role_id", as: "roles" })
Role.belongsToMany(Privilege, {
  through: RolePrivilege,
  foreignKey: 'role_id',
  otherKey: 'privilege_id',
  as: 'privileges'
})

module.exports = Role