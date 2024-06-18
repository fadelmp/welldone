const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')
const Province = require('./Province')

class City extends Model {}

City.init({
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
  provinceId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'province_id',
    references: {
      model: "Province",
      key: "id",
    },
  },
}, {
  sequelize,
  modelName: 'City',
  tableName: 'location_city',
  paranoid: true,
  timestamps: false,
})

City.belongsTo(Province, {
  foreignKey: "province_id",
  as: "province",
})

module.exports = City