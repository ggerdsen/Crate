'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('deliveries', [
      {
        userId: 2,
        crateProductId: 1,
        delivered: true,
        purchased: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        crateProductId: 2,
        delivered: true,
        purchased: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        crateProductId: 3,
        delivered: false,
        purchased: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        crateProductId: 4,
        delivered: true,
        purchased: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('crates', null, {});
  }
}