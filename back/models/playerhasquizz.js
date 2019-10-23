'use strict';
module.exports = (sequelize, DataTypes) => {
  const playerHasQuizz = sequelize.define('playerHasQuizz', {
    quizzId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER
  }, {});
  playerHasQuizz.associate = function(models) {
    playerHasQuizz.belongsTo(models.Player, {foreignKey: 'playerId'})
    playerHasQuizz.belongsTo(models.Quizz, {foreignKey: 'quizzId'})
  };
  return playerHasQuizz;
};