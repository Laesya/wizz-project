'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Promotions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      session: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      schoolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'Schools',
          key: 'id'
        }
      },
      technologyid: {
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
    return queryInterface.dropTable('Promotions');
  }
};