'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Responses', [
      {
        id:1,
        response: "Spring Initializr",
        value: 15,
        isTrue: true,
        questionId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:2,
        response: "Spring Generatr",
        value: 1,
        isTrue: false,
        questionId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:3,
        response: "Spring Startr",
        value: 1,
        isTrue: false,
        questionId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:4,
        response: "Spring Creatr",
        value: 1,
        isTrue: false,
        questionId: 1,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:5,
        response: "new ArrayList<Human>;",
        value: 1,
        isTrue: false,
        questionId: 2,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:6,
        response: "new ArrayList[Human];",
        value: 1,
        isTrue: false,
        questionId: 2,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:7,
        response: "new ArrayList<Human>();",
        value: 10,
        isTrue: true,
        questionId: 2,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:8,
        response: "new ArrayList<>(Human);",
        value: 1,
        isTrue: false,
        questionId: 2,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:9,
        response: "for each (Human h in list)",
        value: 1,
        isTrue: false,
        questionId: 3,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:10,
        response: "for (Human h : list)",
        value: 20,
        isTrue: true,
        questionId: 3,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:11,
        response: "foreach (list as Human h)",
        value: 1,
        isTrue: false,
        questionId: 3,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:12,
        response: "for each loop does not exists in Java",
        value: 1,
        isTrue: false,
        questionId: 3,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:13,
        response: "j == 3",
        value: 1,
        isTrue: false,
        questionId: 4,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:14,
        response: "j == 4",
        value: 1,
        isTrue: false,
        questionId: 4,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:15,
        response: 'j == 5',
        value: 1,
        isTrue: false,
        questionId: 4,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:16,
        response: "Syntax error",
        value: 1,
        isTrue: false,
        questionId: 4,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:17,
        response: "a == 'A'",
        value: 1,
        isTrue: false,
        questionId: 5,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:18,
        response: 'a == "A"',
        value: 1,
        isTrue: false,
        questionId: 5,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:19,
        response: "a == A",
        value: 30,
        isTrue: true,
        questionId: 5,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:20,
        response: "Syntax error",
        value: 1,
        isTrue: false,
        questionId: 5,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:21,
        response: "a framework",
        value: 5,
        isTrue: true,
        questionId: 6,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:22,
        response: "a library",
        value: 1,
        isTrue: false,
        questionId: 6,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:23,
        response: "an IDE",
        value: 1,
        isTrue: false,
        questionId: 6,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:24,
        response: "a package",
        value: 1,
        isTrue: false,
        questionId: 6,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:25,
        response: "an argument",
        value: 1,
        isTrue: false,
        questionId: 7,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:26,
        response: "a parameter",
        value: 10,
        isTrue: true,
        questionId: 7,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:27,
        response: "a variable",
        value: 1,
        isTrue: false,
        questionId: 7,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:28,
        response: "a function",
        value: 1,
        isTrue: false,
        questionId: 7,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:29,
        response: "/src/main/resources/web",
        value: 1,
        isTrue: false,
        questionId: 8,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:30,
        response: "/src/main/resources/static",
        value: 15,
        isTrue: true,
        questionId: 8,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:31,
        response: "/src/main/resources/content",
        value: 1,
        isTrue: false,
        questionId: 8,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:32,
        response: "/src/main/resources/html",
        value: 1,
        isTrue: false,
        questionId: 8,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:33,
        response: "mvn spring-boot run",
        value: 1,
        isTrue: false,
        questionId: 9,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:34,
        response: "mvn spring-boot:run",
        value: 20,
        isTrue: true,
        questionId: 9,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:35,
        response: "mvn spring boot run",
        value: 1,
        isTrue: false,
        questionId: 9,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:36,
        response: "mvn spring:boot run",
        value: 1,
        isTrue: false,
        questionId: 9,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:37,
        response: "maven.xml",
        value: 1,
        isTrue: false,
        questionId: 10,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:38,
        response: ".maven",
        value: 1,
        isTrue: false,
        questionId: 10,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:39,
        response: "mvn.cfg",
        value: 1,
        isTrue: false,
        questionId: 10,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:40,
        response: "pom.xml",
        value: 30,
        isTrue: true,
        questionId: 10,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:41,
        response: "nums.length",
        value: 1,
        isTrue: false,
        questionId: 11,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:42,
        response: "nums.length()",
        value: 1,
        isTrue: false,
        questionId: 11,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:43,
        response: "nums.size",
        value: 1,
        isTrue: false,
        questionId: 11,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:44,
        response: "nums.size()",
        value: 10,
        isTrue: true,
        questionId: 11,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:45,
        response: "FALSE",
        value: 1,
        isTrue: false,
        questionId: 12,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:46,
        response: "TRUE",
        value: 5,
        isTrue: true,
        questionId: 12,
        createdAt: new Date(), 
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Responses');
  }
}