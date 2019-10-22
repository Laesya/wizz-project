'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('playerHasBadges', [
      {
        id:1,
        playerId: 1,
        badgeId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('playerHasBadges');
  }
};