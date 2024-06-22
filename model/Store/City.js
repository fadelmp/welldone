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
  },
  isActived: {
    type: DataTypes.BOOLEAN,
    field: 'is_actived',
    defaultValue: true 
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    field: 'is_deleted',
    defaultValue: false
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  createdBy: {
    type: DataTypes.STRING,
    field: 'created_by',
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  },
  updatedBy: {
    type: DataTypes.STRING,
    field: 'updated_by'
  }
}, {
  sequelize,
  modelName: 'City',
  tableName: 'location_city',
  paranoid: false,
  timestamps: true,
})

module.exports = City