'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quizz = sequelize.define('Quizz', {
    name: DataTypes.STRING,
    livingLanguage: DataTypes.STRING,
    creatorId: DataTypes.INTEGER,
    TechnologyId: DataTypes.INTEGER,

  }, {});
  Quizz.associate = function(models) {
    Quizz.hasMany(models.Comment, {as: 'comments'})
    Quizz.belongsTo(models.Technologies, {foreignKey: 'TechnologyId', as: 'Technology'})
    Quizz.belongsTo(models.Player, {foreignKey: 'creatorId', as: 'creator'})
    Quizz.belongsToMany(models.Player, {through: 'playerHasQuizz', foreignKey: 'quizzId', as: 'hasQuizz'})
    Quizz.belongsToMany(models.Question, {through: ' QuizzHasQuestions', foreignKey: 'quizzId', as: 'quizz'})

  };
  return Quizz;
};