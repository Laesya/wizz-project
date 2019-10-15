'use strict';
module.exports = (sequelize, DataTypes) => {
  const quizzHasQuestions = sequelize.define('quizzHasQuestions', {
    quizzId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {});
  quizzHasQuestions.associate = function(models) {
    // associations can be defined here
  };
  return quizzHasQuestions;
};