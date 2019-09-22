'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quizz = sequelize.define('Quizz', {
    name: DataTypes.STRING,
    livingLanguage: DataTypes.STRING
  }, {});
  Quizz.associate = function(models) {
    // associations can be defined here
  };
  return Quizz;
};