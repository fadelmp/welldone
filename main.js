// main.js
const express = require('express')
const { sequelize, testConnection } = require('./config/db.config')
const routes = require('./route/AppRoute')
const errorhandler = require('./middleware/ErrorHandler')

const app = express()

// Call the testConnection function to check the database connection
//testConnection()

app.use(express.json())
app.use('/', routes)


app.use(errorhandler)

// Start the server
const port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
