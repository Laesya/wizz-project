'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    firstname: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isemail: true
      }
    },
    password: DataTypes.STRING,
    points: DataTypes.INTEGER,
    isTeacher: DataTypes.BOOLEAN,
    isAdmin: DataTypes.BOOLEAN
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};