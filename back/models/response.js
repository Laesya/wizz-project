'use strict';
module.exports = (sequelize, DataTypes) => {
  const Response = sequelize.define('Response', {
    response: DataTypes.STRING,
    value: DataTypes.INTEGER,
    isTrue: DataTypes.BOOLEAN,
    questionId: DataTypes.INTEGER,
  }, {});
  Response.associate = function(models) {
    Response.belongsTo(models.Question, {foreignKey: 'questionId', as: 'Question'})
    Response.belongsToMany(models.playerHasResponse, {through: 'playerHasResponses', foreignKey: 'responseId', as: 'hasResponse'})
    Response.belongsToMany(models.Player, {through: ' playerHasResponse', foreignKey: 'responseId', as: 'players'})
  };
  return Response;
};