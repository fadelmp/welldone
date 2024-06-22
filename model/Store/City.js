const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class City extends Model {
  static associate(models) {
    City.belongsTo(models.Province, { foreignKey: "province_id", as: "province" })
  }
}

City.init({
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
  provinceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'province_id',
    references: { model: "Province", key: "id" }
  }
}, {
  sequelize,
  modelName: 'City',
  tableName: 'location_city',
  paranoid: false,
  timestamps: true,
})

module.exports = City