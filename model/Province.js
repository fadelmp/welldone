const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')

class Province extends Model {}

Province.init({
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
}, {
  sequelize,
  modelName: 'Province',
  tableName: 'location_province',
  paranoid: true,
  timestamps: false,
})

module.exports = Province