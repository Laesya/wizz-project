'use strict';
module.exports = (sequelize, DataTypes) => {
  const playerHasBadge = sequelize.define('playerHasBadge', {
    playerId: DataTypes.INTEGER,
    badgeId: DataTypes.INTEGER
  }, {});
  playerHasBadge.associate = function(models) {
    playerHasBadge.belongsTo(models.Player, {foreignKey: 'playerId'})
    playerHasBadge.belongsTo(models.Badge, {foreignKey: 'BadgeId'})
  };
  return playerHasBadge;
};