const Sequelize = require('sequelize');
const connection = new Sequelize(
  'Cane_Loads',
  'sa',
  'MyDatabasePassword123',
  {
    // Defining our connect by Sequelize constructor
    host: 'localhost',
    dialect: 'mssql', // According to which dbms you are using
  }
);

const User = connection.define('users', {
  id: {
    type: Sequelize.INTEGER, // All dataTypes format available here http://bit.ly/2ofwgAm
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.TEXT,
  password: Sequelize.TEXT,
});

// Syncing all our model to our DB
connection.sync().then(() => {
  console.log('Connected to DB');
});

module.exports = User; // Exporting our user model