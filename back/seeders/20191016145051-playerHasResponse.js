'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('playerHasResponses', [
      {
        id:1,
        playerId: 1,
        responseId: 3,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:2,
        playerId: 1,
        responseId: 6,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('playerHasResponses');
  }
};
