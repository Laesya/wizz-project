'use strict';
module.exports = (sequelize, DataTypes) => {
  const quizzHasQuestions = sequelize.define('quizzHasQuestions', {
    quizzId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {});
  quizzHasQuestions.associate = function(models) {
    quizzHasQuestions.belongsTo(models.Quizz, {foreignKey: 'quizzId'}) 
    quizzHasQuestions, {foreignKey: 'questionId'}
  };
  return quizzHasQuestions;
};