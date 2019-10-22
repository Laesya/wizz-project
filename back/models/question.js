'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    question: DataTypes.STRING,
    timer: DataTypes.INTEGER,
    TechnologyId : DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    Question.hasMany(models.Responses, {as: 'responses'})
    Question.belongsTo(models.Technologies, {foreignKey: 'TechnologyId', as: 'Technology'})
    Question.belongsToMany(models.Quizzs, {through: ' QuizzHasQuestions', foreignKey: 'questionId', as: 'question'})

  };
  return Question;
};