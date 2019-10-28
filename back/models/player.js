'use strict';
const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    firstname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isemail: true
      }
    },
    password: DataTypes.STRING,
    points: DataTypes.INTEGER,
    isTeacher: DataTypes.BOOLEAN,
    isAdmin: DataTypes.BOOLEAN,
    promotionId: DataTypes.INTEGER,
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        return bcrypt.hash(user.password, 10)
          .then((hash) => user.password = hash)
          .catch((err) => console.log(err));
      },
      beforeUpdate: (user, options) => {
        return bcrypt.hash(user.password, 10)
          .then((hash) => user.password = hash)
          .catch((err) => console.log(err));
      },
    },
    scopes: {
      withoutPassword: {
        attributes: { exclude: ['password'] },
      }
    }
  });
  Player.associate = function(models) {
    Player.hasMany(models.Comment, {as: 'comments'})
    Player.belongsTo(models.Promotion, {foreignKey: 'promotionId', as: 'promotion'})
    Player.belongsToMany(models.Badge, {through: 'playerHasBadges', foreignKey: 'playerId', as: 'badges'})
    Player.belongsToMany(models.Response, {through: ' playerHasResponse', foreignKey: 'playerId', as: 'response'})
    Player.belongsToMany(models.Quizz, {through: 'PlayerHasQuizz', foreignKey: 'playerId', as: 'player'})
  };
  return Player;
};