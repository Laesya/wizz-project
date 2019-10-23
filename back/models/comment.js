'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.TEXT,
    quizzId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Quizz, {foreignKey: 'quizzId', as: 'quizz'})
    Comment.belongsTo(models.Player, {foreignKey: 'playerId', as: 'player'})


  };
  return Comment;
};