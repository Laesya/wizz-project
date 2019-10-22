'use strict';
module.exports = (sequelize, DataTypes) => {
  const playerHasResponse = sequelize.define('playerHasResponse', {
    playerId: DataTypes.INTEGER,
    responseId: DataTypes.INTEGER
  }, {});
  playerHasResponse.associate = function(models) {
    playerHasResponse.belongsTo(models.Player, {foreignKey: 'playerId'})
    playerHasResponse.belongsTo(models.Response, {foreignKey: 'responseId'})
  };
  return playerHasResponse;
};