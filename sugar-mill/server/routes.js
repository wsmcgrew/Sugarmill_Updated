var app = express();
var router = express.Router();

const growers = require('./routes/growers')
//const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  router.get('/Growers', growers.getCompanyName());
  //app.get('/Growers', growers.getGrowers);
}
