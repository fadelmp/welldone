const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.config')
const Role = require('./Role')
const Store = require('./Store')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id',
  },
  username: {
    type: DataTypes.String,
    allowNull: false,
    field: 'username',
  },
  fullname: {
    type: DataTypes.String,
    allowNull: false,
    field: 'fullname',
  },
  password: {
    type: DataTypes.String,
    allowNull: false,
    field: 'password',
  },
  roleId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'role_id',
    references: { model: "Role", key: "id" },
  },
  storeId: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'store_id',
    references: { model: "Store", key: "id" },
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
    field: 'created_at',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  createdBy: {
    type: DataTypes.STRING,
    field: 'created_by',
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedBy: {
    type: DataTypes.STRING,
    field: 'updated_by',
  }
}, {
  sequelize,
  tableName: 'user',
  paranoid: false,
  timestamps: true,
})

User.belongsTo(Role, { foreignKey: "role_id", as: "role" })
User.belongsTo(Store, { foreignKey: "store_id", as: "store" })

module.exports = User