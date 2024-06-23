const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/db.config');

class Store extends Model {
  static associate(models) {
    Store.belongsTo(models.City, { foreignKey: 'cityId', as: 'city' })
  }
}

Store.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
    field: 'id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name'
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'address'
  },
  cityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'city_id',
    references: { model: 'City', key: 'id' }
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
    field: 'created_by'
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
  modelName: 'Store',
  tableName: 'location_store',
  timestamps: true,
  paranod: false,
});

module.exports = Store;