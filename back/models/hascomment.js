'use strict';
module.exports = (sequelize, DataTypes) => {
  const HasComment = sequelize.define('HasComment', {
    playerId: DataTypes.INTEGER,
    quizzId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {});
  HasComment.associate = function(models) {
    // associations can be defined here
  };
  return HasComment;
};