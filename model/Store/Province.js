const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Province extends Model {}

Province.init({
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
  modelName: 'Province',
  tableName: 'location_province',
  paranoid: false,
  timestamps: true,
})

module.exports = Province