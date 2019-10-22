'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Quizzs', [
      {
        id:1,
        name: "Java test 1",
        livingLanguage: "English",
        creatorId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Quizzs');
  }
};