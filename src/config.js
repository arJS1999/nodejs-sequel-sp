const express = require('express');
const sequelize = require('./db');
const User = require('./model/user');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function getUsers() {
  try {
    const [results] = await sequelize.query('CALL GetUsers()');

    console.log("data",results);
  } catch (error) {
    console.error('Error calling stored procedure:', error);
  }
}

(async () => {
  try {
    // Connect to the MySQL database using Sequelize
    await sequelize.authenticate();
    console.log('Connected to the database.');

    await sequelize.sync();
    console.log('Database synchronized.');

    getUsers();

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}/`);
    });
  } catch (error) {
    console.error('Error initializing the app:', error);
  }
})();
