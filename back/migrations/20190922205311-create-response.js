'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Responses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      response: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.INTEGER
      },
      isTrue: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Responses');
  }
};
