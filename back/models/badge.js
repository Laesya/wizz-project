'use strict';
module.exports = (sequelize, DataTypes) => {
  const Badge = sequelize.define('Badge', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgUrl: DataTypes.TEXT
  }, {});
  Badge.associate = function(models) {
    // associations can be defined here
  };
  return Badge;
};