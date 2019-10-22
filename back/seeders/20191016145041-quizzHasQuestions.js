'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quizzHasQuestions', [
      {
        quizzId:1,
        questionId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        quizzId:1,
        questionId: 2,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        quizzId:1,
        questionId: 3,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        quizzId:1,
        questionId: 4,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        quizzId:1,
        questionId: 5,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        quizzId:1,
        questionId: 6,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        quizzId:1,
        questionId: 7,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        quizzId:1,
        questionId: 8,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        quizzId:1,
        questionId: 9,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        quizzId:1,
        questionId: 10,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        quizzId:1,
        questionId: 11,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        quizzId:1,
        questionId: 12,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
    ], {});

    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('quizzHasQuestions');
    }
  }
}