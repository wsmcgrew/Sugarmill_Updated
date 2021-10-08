const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  define: {
    timestamps: false
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.growers = require("./Growers.model")(sequelize, Sequelize);
db.grower_mill = require("./Grower_Mill.modal")(sequelize, Sequelize);
db.mills = require("./Mills.model")(sequelize, Sequelize);
db.tracts = require("./Tracts.models")(sequelize, Sequelize);
db.cane_loads = require("./Cane_Loads.model")(sequelize, Sequelize);

db.mills.hasMany(db.cane_loads)
db.cane_loads.belongsTo(db.mills)

module.exports = db;