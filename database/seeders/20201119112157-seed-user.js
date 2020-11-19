'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    const users = require('./users.json')

    users.forEach(el => {
      el.updatedAt = new Date()
      el.createdAt = new Date()
    });
    return queryInterface.bulkInsert('Users', users, {})
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
