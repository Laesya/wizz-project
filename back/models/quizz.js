'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quizz = sequelize.define('Quizz', {
    name: DataTypes.STRING,
    livingLanguage: DataTypes.STRING,
    creatorId: DataTypes.INTEGER

  }, {});
  Quizz.associate = function(models) {
    Quizz.hasMany(models.Comments, {as: 'comments'})
    Quizz.belongsTo(models.Technologies, {foreignKey: 'TechnologyId', as: 'Technology'})
    Quizz.belongsTo(models.Players, {foreignKey: 'creatorId', as: 'creator'})
    Quizz.belongsToMany(models.Players, {through: 'playerHasQuizz', foreignKey: 'quizzId', as: 'quizz'})
    Quizz.belongsToMany(models.Questions, {through: ' QuizzHasQuestions', foreignKey: 'quizzId', as: 'quizz'})


  };
  return Quizz;
};