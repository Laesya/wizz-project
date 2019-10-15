'use strict';
module.exports = (sequelize, DataTypes) => {
  const playerHasQuizz = sequelize.define('playerHasQuizz', {
    quizzId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER
  }, {});
  playerHasQuizz.associate = function(models) {
    // associations can be defined here
  };
  return playerHasQuizz;
};