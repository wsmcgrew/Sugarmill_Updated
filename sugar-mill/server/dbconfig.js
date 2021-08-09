
const config = {
    user: "sa",
    password: "MyDatabasePassword123",
    server: "localhost",
    port: 1433,
    database: 'Cane_Loads',
    pool: {
        max: 100,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        enableArithAbort: true,
    }
}

module.exports = config; 