'use strict';
module.exports = (sequelize, DataTypes) => {
  const Response = sequelize.define('Response', {
    response: DataTypes.STRING,
    value: DataTypes.INTEGER,
    isTrue: DataTypes.BOOLEAN
  }, {});
  Response.associate = function(models) {
    // associations can be defined here
  };
  return Response;
};