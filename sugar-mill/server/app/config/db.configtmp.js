module.exports = {
    HOST: "localhost",
    USER: "sa",
    PASSWORD: "MyDatabasePassword123",
    DB: "Cane_Loads",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };