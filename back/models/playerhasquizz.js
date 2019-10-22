'use strict';
module.exports = (sequelize, DataTypes) => {
  const playerHasQuizz = sequelize.define('playerHasQuizz', {
    quizzId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER
  }, {});
  playerHasQuizz.associate = function(models) {
    PlayerHasQuizz.belongsTo(models.Players, {foreignKey: 'playerId'})
    PlayerHasQuizz.belongsTo(models.Quizzs, {foreignKey: 'quizzId'})
  };
  return playerHasQuizz;
};