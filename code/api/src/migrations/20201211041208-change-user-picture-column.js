'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'users',
      'picture',
      {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: 'https://cdns.iconmonstr.com/wp-content/assets/preview/2019/240/iconmonstr-customer-5.png'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'users',
      'picture',
      {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: 'https://cdns.iconmonstr.com/wp-content/assets/preview/2019/240/iconmonstr-customer-5.png'
      }
    )
  }
};
