var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, Growers) {

    var growers = Growers;
    var LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'passsword',
            passReqToCallback: true
        },
        function(req, email, password, done) {
 
            var generateHash = function(password) {
 
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
 
            };
            growers.findOne({
                where: {
                    email: email
                }
            }).then(function(growers) {
 
                if (growers)
                {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                var growersPassword = generateHash(password);
                    var data =
                        {
                            email: email,
                            password: userPassword,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname
                        };
                    growers.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));
}