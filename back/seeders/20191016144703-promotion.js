'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Promotions', [
      {
        id:1,
        session: "2019-10-18",
        schoolId: 1,
        technologyid:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Promotions');
  }
};