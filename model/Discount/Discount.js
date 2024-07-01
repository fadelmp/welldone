const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Discount extends Model {}

Discount.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull:false,
    field: 'id'
  },
  code: {
    type: DataTypes.STRING,
    field: 'code'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name'
  },
  description: {
    type: DataTypes.STRING,
    field: 'description'
  },
  startDate: {
    type: DataTypes.DATE, 
    allowNull: false,
    field: 'start_date'
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'end_date'
  },
  isVoucher: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_voucher'
  },
  isNominal: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_nominal'
  },
  value: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'value'
  },
  maximum: {
    type: DataTypes.INTEGER,
    field: 'maximum'
  },
  minimum: {
    type: DataTypes.INTEGER,
    field: 'minimum'
  },
  isActived: { type: DataTypes.BOOLEAN, field: 'is_actived', defaultValue: true },
  isDeleted: { type: DataTypes.BOOLEAN, field: 'is_deleted', defaultValue: false },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  createdBy: { type: DataTypes.STRING, field: 'created_by' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  updatedBy: { type: DataTypes.STRING, field: 'updated_by' }
}, {
  sequelize,
  modelName: 'Discount',
  tableName: 'discount',
  paranoid: false,
  timestamps: true,  
})

module.exports = Discount