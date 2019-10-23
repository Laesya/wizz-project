'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Quizzs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      livingLanguage: {
        type: Sequelize.STRING
      },
      creatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'Players',
          key: 'id'
        }
      },
      technologyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'Technologies',
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
    return queryInterface.dropTable('Quizzs');
  }
};