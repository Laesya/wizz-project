'use strict';
module.exports = (sequelize, DataTypes) => {
  const playerHasResponse = sequelize.define('playerHasResponse', {
    playerId: DataTypes.INTEGER,
    responseId: DataTypes.INTEGER
  }, {});
  playerHasResponse.associate = function(models) {
    // associations can be defined here
  };
  return playerHasResponse;
};