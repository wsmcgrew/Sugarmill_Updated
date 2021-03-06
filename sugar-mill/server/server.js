const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const models = require("./app/models");
const db = require("./app/models");
const Role = db.role;
require("dotenv").config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync().then(function() {
  console.log('Nice! Database looks fine')
  //initial();
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!")
});
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
require("./app/routes/growers.routes")(app);
require("./app/routes/grower_mill.routes")(app);
require("./app/routes/mills.routes")(app);
require("./app/routes/tracts.routes")(app);
require("./app/routes/cane_loads.routes")(app);

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


// set port, listen for requests
const PORT = process.env.NODE_LOCAL_PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});