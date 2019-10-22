'use strict';
module.exports = (sequelize, DataTypes) => {
  const Technologies = sequelize.define('Technologies', {
    name: DataTypes.STRING
  }, {});
  Technologies.associate = function(models) {
    Technologies.hasMany(models.Promotions, {as: 'promotions'})
    Technologies.hasMany(models.Questions, {as: 'questions'})
    Technologies.hasMany(models.Quizzs, {as: 'quizzs'})



  };
  return Technologies;
};