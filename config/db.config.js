const { Sequelize } = require('sequelize')

// Database configuration
let dbName = "cyrm3318_welldone"
let userName = "cyrm3318_123"
let password = "Hahahihi77"
let host = "localhost"
let dialect = "mysql"
let port = 3306 // Default PostgreSQL port

// let dbName = "postgres"
// let userName = "postgres"
// let password = "Blackrebel_666"
// let host = "localhost"
// let dialect = "postgresql"
// let port = 5432

let logging = false // Disable logging SQL queries (optional)

const sequelize = new Sequelize(dbName, userName, password, {
  host: host,
  dialect: dialect,
  port: port, 
  logging: logging, 
})

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')

  } catch (error) {
    // Error handling
    console.error('Unable to connect to the database:', error)
  }
}

// Export Sequelize instance and testConnection function
module.exports = sequelize