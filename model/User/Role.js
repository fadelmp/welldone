const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Role extends Model {}

Role.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name'
  }
}, {
  sequelize,
  tableName: 'user_role',
  modelName: 'Role',
  paranoid: false,
  timestamps: false,
})

module.exports = Role