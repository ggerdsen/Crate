'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'subscriptions',
      'preferredDelivery',
      {
        type: Sequelize.DATEONLY,
        allowNull: true
      }
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'subscriptions',
      'preferredDelivery',
      {
        type: Sequelize.DATEONLY,
        allowNull: true
      }
    )
  }
};
