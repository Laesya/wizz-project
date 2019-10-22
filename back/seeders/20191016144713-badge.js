'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Badges', [
      {
        id:1,
        name: "Test",
        description: "A venir",
        imgUrl: "A venir",
        createdAt: new Date(), 
        updatedAt: new Date()
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Badges');
  }
};