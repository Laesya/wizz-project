'use strict';
module.exports = (sequelize, DataTypes) => {
  const Promotion = sequelize.define('Promotion', {
    session: DataTypes.DATEONLY,
    schoolId: DataTypes.INTEGER,
    TechnologyId: DataTypes.INTEGER,
  }, {});
  Promotion.associate = function(models) {
    Promotion.belongsTo(models.School, {foreignKey: 'schoolId', as: 'school'})
    Promotion.belongsTo(models.Technologies, {foreignKey: 'TechnologyId', as: 'Technology'})
    Promotion.hasMany(models.Player, {as: 'players'})

  };
  return Promotion;
};