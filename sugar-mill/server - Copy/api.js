const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
require('dotenv').config();

// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy;
const session = require("express-session");




//const cookieSession = require('cookie-session');
const passport = require('passport')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


// initialize cookie session

  
//app.use(session({ secret: "yabadabadoo" }));
app.use(express.urlencoded({ extended: true })); // express body-parser
app.use(passport.initialize());
//app.use(passport.session());
app.use(session({
  secret: 'yabadabadodo',
  resave: false,
  saveUninitialized: false
}));

// this is a TEMPORARY variable for premade data, 
let users = [
   {
     id: 1,
     name: "Jude",
     email: "user@email.com",
     password: "password"
   },
   {
    id: 2,
    name: "james",
    email: "user@email.com",
    password: "password"
  },
  {
    id: 3,
    name: "Jude",
    email: "user@email.com",
    password: "password"
  }
 ]

 // configure passport to login
 passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },

    (username, password, done) => {
      let user = users.find((user) => {
        return user.email === username && user.password === password
      })

      if (user) {
        done(null, user)
      } else {
        done(null, false, { message: 'Incorrect username or password'})
      }
    }
  )
);
// middleware for protecting url
const authMiddleware = (req, res, next) => {
  //console.log(req);
   if (!req.isAuthenticated()) {
     res.status(401).send('You are not authenticated')
     
   } else {
     return next()
   }
 }


// -----------------begin authentication
// login
app.post("/api/login", (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
      if (err) {
          return next(err);
      }
      
      if (!user) {
          return res.status(400).send([user, "Cannot log in", info])
      }

      req.login(user, (err) => {
          res.send("Logged in")
      })
  })(req, res, next)
})

 //logout
 app.get("/api/logout", function(req, res) {
   req.logout();
 
   console.log("logged out")
 
   return res.send();
 });
// authentication
 app.get("/api/user", authMiddleware, (req, res) => {
   
   let user = users.find(user => {
     //console.log(req.session.passport.user);
    return user.id === req.session.passport.user
   });
 
   //console.log(req)
   //console.log([user, req.session])
 
   res.send({ user: user })
 })

 // serializeUser -- In this case we are just storing the userId
 // deseriallize user, find set id 
 passport.serializeUser((user, done) => {
   done(null, user.id)
 });
 passport.deserializeUser((id, done) => {
   let user = users.find((user) => {
     return user.id === id
   })
 
   done(null, user)
 })
 
 // -----------------------------------------------------------------
//----------------- below is working CRUD operations-----------
router.use((request,response,next) => {
   console.log('middleware');
   next();
})

router.route('/Growers').get((request,response)=>{

    dboperations.getGrowers().then(result => {
       response.json(result[0]);
    })
});

router.route('/Growers/:growerId').get((request,response)=>{

    dboperations.getGrowerCaneLoads(request.params.growerId).then(result => {
       response.json(result[0]);
    })
});

router.route('/Tracts').get((request,response)=>{
   dboperations.getTracts().then(result => {
      response.json(result[0]);
   })
});

router.route('/Tracts/:id/:LastUpdatedBy/:TractId/:TractName').put((request, response) => {
   let id = request.params.id
   let LastUpdatedBy = request.params.LastUpdatedBy;
   let TractId = request.params.TractId
   let TractName = request.params.TractName
   //console.log(request.params);
   dboperations.changeTract(id, LastUpdatedBy, TractId, TractName).then(result => {
      response.json(result[0]);
   })
});

// --------------------------------}

var port = process.env.PORT || 5001;
app.listen(port);
console.log('Order API is runnning at ' + port);



