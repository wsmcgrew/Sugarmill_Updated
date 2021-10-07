const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const models = require("./app/models")

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

models.sequelize.sync().then(function() {
  console.log('Nice! Database looks fine')
}).catch(function(err) {
  console.log(err, "Something went wrong with the Database Update!")
});
// simple route
app.get("/", (req, res) => {
  console.log("hit default route")
  res.json({ message: "Welcome to bezkoder application." });
});
require("./app/routes/growers.routes")(app);
require("./app/routes/grower_mill.routes")(app);
require("./app/routes/mills.routes")(app);
require("./app/routes/tracts.routes")(app);
require("./app/routes/cane_loads.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});