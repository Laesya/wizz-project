const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const Player = require("../../models").Player


const localAuthStrategy = passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
},
function(email, password, done) {
    Player.findAll({where: { email: email }})
  .then((player) => {
    bcrypt.compare(password, player[0].dataValues.password, function(err, res) {
      if(res){
        return done(null, player[0].dataValues);
      } else {
        return done(null, false);
      }
    })
  })
  .catch(err => done(null, false))
}
));

module.exports.localAuthStrategy = localAuthStrategy;