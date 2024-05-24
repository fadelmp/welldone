// main.js
const express = require('express');
const { sequelize, testConnection } = require('./config/db.config');
const routes = require('./route/ProductCategoryRoute');

const app = express();

// Call the testConnection function to check the database connection
//testConnection();

// Use routes
app.use('/', routes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
