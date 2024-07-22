const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/db.config')

class Payment extends Model {}

Payment.init({
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
  }
}, {
  sequelize,
  tableName: 'order_payment',
  modelName: 'Payment',
  paranoid: false,
  timestamps: false,
})

module.exports = Payment