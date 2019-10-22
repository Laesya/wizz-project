'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Technologies', [
      {
        id:1,
        name: "Java",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Technologies');
  }
};
