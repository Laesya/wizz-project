'use strict';
module.exports = (sequelize, DataTypes) => {
  const playerHasBadge = sequelize.define('playerHasBadge', {
    playerId: DataTypes.INTEGER,
    badgeId: DataTypes.INTEGER
  }, {});
  playerHasBadge.associate = function(models) {
     playerHasBadges.belongsTo(models.Player, {foreignKey: 'playerId'})
     playerHasBadges.belongsTo(models.Badges, {foreignKey: 'BadgeId'})
  };
  return playerHasBadge;
};