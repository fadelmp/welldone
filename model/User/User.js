const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  email: {
    type: DataTypes.STRING,
    field: 'email'
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'username'
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'fullname'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'password'
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'role_id',
    references: { model: "Role", key: "id" }
  },
  storeId: {
    type: DataTypes.STRING,
    field: 'store_id',
    references: { model: "Store", key: "id" }
  },
  isBlocked: {
    type: DataTypes.BOOLEAN,
    field: 'is_blocked',
    defaultValue: false
  },
  tryAttempt: {
    type: DataTypes.INTEGER,
    field: 'try_attempt',
    defaultValue: 3
  },
  isActived: { type: DataTypes.BOOLEAN, field: 'is_actived', defaultValue: true },
  isDeleted: { type: DataTypes.BOOLEAN, field: 'is_deleted', defaultValue: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  createdBy: { type: DataTypes.STRING, field: 'created_by' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  updatedBy: { type: DataTypes.STRING, field: 'updated_by' }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'user',
  paranoid: false,
  timestamps: true,
})

module.exports = User