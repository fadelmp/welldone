const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class City extends Model {}

City.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  provinceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'province_id',
    references: { model: "Province", key: "id" }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name'
  }
}, {
  sequelize,
  modelName: 'City',
  tableName: 'location_city',
  paranoid: false,
  timestamps: false,
})

module.exports = City