const passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const models = require('../../models');
const Player = models.Player;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

const jwtAuthStrategy = passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    Player.findAll({ where: { id: jwt_payload.id } })
    .then((players) => {
      if (players.length > 0) {
        return done(null, players[0]);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => done(err, false));
}));

module.exports.jwtAuthStrategy = jwtAuthStrategy;