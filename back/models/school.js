'use strict';
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    city: DataTypes.STRING
  }, {});
  School.associate = function(models) {
    School.hasMany(models.Promotion, {as: 'promotions'})
  };
  return School;
};