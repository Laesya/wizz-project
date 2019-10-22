'use strict';
module.exports = (sequelize, DataTypes) => {
  const quizzHasQuestions = sequelize.define('quizzHasQuestions', {
    quizzId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {});
  quizzHasQuestions.associate = function(models) {
    QuizzHasQuestions.belongsTo(models.Quizzs, {foreignKey: 'quizzId'}) 
    Questions, {foreignKey: 'questionId'})
  };
  return quizzHasQuestions;
};