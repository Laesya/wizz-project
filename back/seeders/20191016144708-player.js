'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Players', [
      {
        name: "Blaffa",
        firstname: " Isaure",
        email: "isaure@wildcodeschool.fr",
        password: "admin",
        points: 0,
        isTeacher: true,
        isAdmin: true,
        promotionId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        name: "Labed",
        firstname: " Jean",
        email: "fausse@adresse.fr",
        password: "student",
        points: 80,
        isTeacher: false,
        isAdmin: false,
        promotionId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Players');
  }
};