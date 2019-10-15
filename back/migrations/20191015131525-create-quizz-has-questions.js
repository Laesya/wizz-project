'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('quizzHasQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quizzId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Quizzs',
          key: 'id'
        }
      },
      questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Questions',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('quizzHasQuestions');
  }
};