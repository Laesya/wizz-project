'use strict';
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
  }, {});
  Player.associate = function(models) {
    Player.hasMany(models.Comments, {as: 'comments'})
    Player.belongsTo(models.Promotions, {foreignKey: 'promotionId', as: 'promotion'})
    Player.belongsToMany(models.Badges, {through: 'playerHasBadges', foreignKey: 'playerId', as: 'badges'})
    Player.belongsToMany(models.Response, {through: ' playerHasResponse', foreignKey: 'playerId', as: 'response'})
    Player.belongsToMany(models.quizz, {through: 'PlayerHasQuizz', foreignKey: 'playerId', as: 'player'})
  };
  return Player;
};