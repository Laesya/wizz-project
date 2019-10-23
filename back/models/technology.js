'use strict';
module.exports = (sequelize, DataTypes) => {
  const Technologies = sequelize.define('Technologies', {
    name: DataTypes.STRING
  }, {});
  Technologies.associate = function(models) {
    Technologies.hasMany(models.Promotion, {as: 'promotions'})
    Technologies.hasMany(models.Question, {as: 'questions'})
    Technologies.hasMany(models.Quizz, {as: 'quizzs'})



  };
  return Technologies;
};