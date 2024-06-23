const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class User extends Model {
  static associate(models) { 
    User.belongsTo(models.Role, { foreignKey: "role_id", as: "role" })
    User.belongsTo(models.Store, { foreignKey: "store_id", as: "store" })
  }
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
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
    type: DataTypes.STRING,
    allowNull: false,
    field: 'role_id',
    references: { model: "Role", key: "id" }
  },
  storeId: {
    type: DataTypes.STRING,
    field: 'store_id',
    references: { model: "Store", key: "id" }
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
  modelName: 'User',
  tableName: 'user',
  paranoid: false,
  timestamps: true,
})

module.exports = User