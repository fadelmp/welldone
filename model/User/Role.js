const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Role extends Model {
  static associate(models) {
    Role.belongsToMany(models.Privilege, {
      through: models.RolePrivilege,
      foreignKey: 'role_id',
      otherKey: 'privilege_id',
      as: 'privileges'
    })
  }
}

Role.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name'
  }
}, {
  sequelize,
  tableName: 'user_role',
  modelName: 'Role',
  paranoid: false,
  timestamps: true,
})

module.exports = Role