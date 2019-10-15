'use strict';
module.exports = (sequelize, DataTypes) => {
  const playerHasBadge = sequelize.define('playerHasBadge', {
    playerId: DataTypes.INTEGER,
    badgeId: DataTypes.INTEGER
  }, {});
  playerHasBadge.associate = function(models) {
    // associations can be defined here
  };
  return playerHasBadge;
};