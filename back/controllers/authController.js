const jwt = require('jsonwebtoken');
const Player = require('../models').Player;
const os = require('os');
const mailer = require('../mailer/mailer');
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  signIn: function (req, res) {
    /* By default passport save authenticated Player in req.Player object */
    const Player = {
      id: req.Player.id,
      email: req.Player.email,
      isAdmin: req.Player.isAdmin
    };
    /* Signin jwt with your SECRET key */
    const token = jwt.sign(Player, process.env.JWT_SECRET);
    /* Return Player and token in json response */
    res.json({ Player, token });
  },
  signUp: function (req, res) {
    Player.create({
        name: req.body.name,
        firstname: req.body.firstname,
        email: req.body.email,
        password: req.body.password,
        points: req.body.points,
        isTeacher: req.body.isTeacher || false,
        isAdmin: req.body.isAdmin || false,
        promotionId: req.body.promotionId,
    })
      .then((newPlayer) => {
        const currentDate = new Date();
        const PlayerDatas = {
            name: newPlayer.name,
            firstname: newPlayer.firstname,
            adress_mail: 'isaure@wildcodeschool.fr' //Todo add it to .env
        };
        mailer(PlayerDatas, newPlayer.email, 'welcome');
        const Player = {
          id: newPlayer.id,
          email: newPlayer.email,
          isAdmin: newPlayer.isAdmin
        };
        /* Signin jwt with your SECRET key */
        const token = jwt.sign(Player, process.env.JWT_SECRET);
        /* Return Player and token in json response */
        res.json({ Player, token });
      })
      .catch((err) => {
        res.status(503).json(err);
      });
  },
  deleteAccount: function (req, res, next) {
    Player.findOne({ where: { email: req.body.email } })
      .then((Player) => {
        if (Player) {
          Player.setPlaces([])
            .then((association) => {
              Player.destroy()
                .then((deletedPlayer) => { res.json({ Player: deletedPlayer }); })
                .catch((error) => { res.status(500).json({ error }); });
            })
            .catch((error) => { console.log(error); });
        } else {
          res.status(404).json({ message: 'Player not found' });
        }
      })
      .catch((error) => { res.status(500).json({ error }); });
  },
  changePassword: function (req, res, next) {
    Player.findOne({ where: { email: req.body.email } })
      .then((Player) => {
        if (Player) {
          bcrypt.compare(req.body.oldPassword, Player.dataValues.password, function (err, result) {
            if (result) {
              Player.update({ password: req.body.password })
                .then((updatedPlayer) => { res.json({ Player: updatedPlayer }); })
                .catch((error) => { res.status(500).json({ error }); });
            } else {
              res.status(401).json({ message: 'Invalid password' });
            }
          });
        } else {
          res.status(404).json({ message: 'Player not found' });
        }
      })
      .catch((error) => { res.status(500).json({ error }); });
  },
  forgetPassword: function (req, res) {
    const generatePassword = () => {
      let char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      let password = '';
      let k;
      for (let i = 0; i < 10; i++) {
        const randomChar = char[Math.floor(Math.random() * char.length)];
        password += randomChar;
      }
      return password;
    };
    Player.findOne({
      where: {
        email: req.body.email
      }
    })
      .then((Player) => {
        if (!Player) {
          return res.status(500).json({ message: 'Email introuvable merci de verifier' });
        }
        const password = generatePassword();
        Player.update({
          password
        })
          .then((updatedPlayer) => {
            const PlayerDatas = {
              id: Player.id,
              password: password,
              name: Player.name,
            };
            //dans l'email, envoyer le mot de passe en clair
            mailer(PlayerDatas, Player.email, 'resetPassword');
            res.json({ updatedPlayer });
          })
          .catch((error) => {
            res.status(500).json({ error });
          });
      })
      .catch((err) => res.send(err));
  }
};