'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [
      {
        id:1,
        question: "Which website allows you to create a new Spring Boot project ?",
        timer: 15,
        TechnologyId:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:2,
        question: "How to create a new list of Human ?",
        timer: 10,
        TechnologyId:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:3,
        question: "What is the correct for each loop syntax ?",
        timer: 10,
        TechnologyId:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 4,
        question: "int i = 3; int j = ++i; i++;",
        timer: 15,
        TechnologyId:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 5,
        question: "char a = 'A'.toLowerCase()",
        timer: 15,
        TechnologyId:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 6,
        question: "Spring Boot is...",
        timer: 15,
        TechnologyId:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 7,
        question: "In the url http://website.com?name=Bernard, `name` is ?",
        timer: 15,
        TechnologyId:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 8,
        question: "What is the package of static content in a Spring Boot project ?",
        timer: 15,
        TechnologyId:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 9,
        question: "How to compile and execute a Spring Boot project ?",
        timer: 20,
        TechnologyId:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 10,
        question: "What file is used to configure a maven project ?",
        timer: 20,
        TechnologyId:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 11,
        question: "How to known the number of elements contained in a `List<Integer> nums` ?",
        timer: 15,
        TechnologyId:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id: 12,
        question: "(!true && false) || (true && !false)",
        timer: 10,
        TechnologyId:1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Questions');
  }
}