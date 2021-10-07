const express = require('express');
const morgan = require('morgan'); // JUST FOR LOGS
const session = require('express-session'); // for sessions
const bodyParser = require('body-parser'); // for req.body
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./user'); // Use relative path to the User file

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json()); // body-parser MW
app.use(bodyParser.urlencoded({ extended: false })); // See doc of it for ref

app.use(
  session({
    secret: 'keyboard cat', // Use a more secure secret LOL
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 100 * 60 * 60 * 24 * 30 }, // = 30 days
  })
);

// Passport intialization
app.use(passport.initialize());
app.use(passport.session());

// Our passport stategy
passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({
      // Using sequelize model function
      where: {
        // Take an object with options where self explanatory
        username: username,
      },
    }).then(function(user) {
      // Sequelize return a promise with user in callback
      if (user == null) {
        // Checking if user exsists
        return done(null, false); // Standerd Passport callback
      }

      if (password == user.password) {
        // use your password hash comparing logic here for security
        return done(null, user); // Standerd Passport callback
      }
      return done(null, false); // Standerd Passport callback
    });
  })
);

// for maintaining session
passport.serializeUser(function(user, done) {
  // Standered Serialize for session
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({
    // Using sequelize model functoin
    where: {
      id: id,
    },
  }).then(function(user) {
    if (user == null) {
      done(new Error('Wrong user id.'));
    }

    done(null, user); // Standerd deserailize callback
  });
});

// Post request handling route for login
app.post(
  '/api/login',
  passport.authenticate('local', {
    successRedirect: '/testGuard',
    failureRedirect: '/testGuard',
  })
);

// Standerd middleware taking req, res and next as parameters
function loggedIn(req, res, next) {
  if (req.user) {
    // if request contains the user
    next(); // call next
  } else {
    res.status(403).send('Unauthorized'); // throwing unauthorized
  }
}

// Protected route
app.get('/testGuard', loggedIn, (req, res) => {
  res.send('YOU ARE AUTHENTICATED');
});

// Handle logout
app.get('/logout', (req, res) => {
  req.logout();
  res.send('YOU ARE NOW LOGGED OUT');
});

// start the app
app.listen(5001, () => {
  console.log('magical number is 5001');
});