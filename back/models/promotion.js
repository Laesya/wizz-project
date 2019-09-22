'use strict';
module.exports = (sequelize, DataTypes) => {
  const Promotion = sequelize.define('Promotion', {
    session: DataTypes.DATEONLY
  }, {});
  Promotion.associate = function(models) {
    // associations can be defined here
  };
  return Promotion;
};