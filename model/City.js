const DataTypes = require('sequelize');
const Base = require('./Base');
const sequelize = require('../config/db.config');

class City extends Base {
  static associate(models) {
    City.belongsTo(models.Province, {
      foreignKey: "province_id",
      as: "province",
    });
  }
}

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
  province_id: {
    type: DataTypes.STRING,
    allowNull: false,
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
});

module.exports = City