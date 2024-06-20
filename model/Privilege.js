const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')
const Role = require('./Role')
const RolePrivilege = require('./RolePrivilege')

class Privilege extends Model {}

Privilege.init({
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
  },
  url: {
    type: DataTypes.String,
    allowNull: false,
    field: 'url',
  }
}, {
  sequelize,
  tableName: 'privilege',
  paranoid: false,
  timestamps: true,
})

Privilege.hasMany(RolePrivilege, { foreignKey: "privilege_id", as: "privileges" })
Privilege.belongsToMany(Role, {
  through: RolePrivilege,
  foreignKey: 'privilege_id',
  otherKey: 'role_id',
  as: 'roles'
})

module.exports = Privilege