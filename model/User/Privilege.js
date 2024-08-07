const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Privilege extends Model {}

Privilege.init({
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
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'url'
  }
}, {
  sequelize,
  tableName: 'user_privilege',
  modelName: 'Privilege',
  paranoid: false,
  timestamps: false,
})

module.exports = Privilege