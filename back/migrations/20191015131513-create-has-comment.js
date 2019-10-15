'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HasComments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Players',
          key: 'id'
        }
      },
      quizzId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Quizzs',
          key: 'id'
        }
      },
      commentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Comments',
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
    return queryInterface.dropTable('HasComments');
  }
};