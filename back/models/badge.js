'use strict';
module.exports = (sequelize, DataTypes) => {
  const Badge = sequelize.define('Badge', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgUrl: DataTypes.TEXT
  }, {});
  Badge.associate = function(models) {
    Badges.belongsToMany(models.Player, {through: ' playerHasBadges', foreignKey: 'PlayerId', as: 'players'})
  };
  return Badge;
};