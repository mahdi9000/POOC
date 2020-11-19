'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    const memes = require('./memes.json')

    memes.forEach(el => {
      el.updatedAt = new Date()
      el.createdAt = new Date()
    });
    return queryInterface.bulkInsert('Memes', memes, {})
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Memes', null, {})
  }
};
