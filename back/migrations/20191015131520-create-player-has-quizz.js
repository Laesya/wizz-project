'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('playerHasQuizzs', {
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
      playerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Players',
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
    return queryInterface.dropTable('playerHasQuizzs');
  }
};