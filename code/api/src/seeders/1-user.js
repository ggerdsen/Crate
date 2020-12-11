'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'The Admin',
        email: 'admin@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.admin,
        description: 'A nice boss',
        picture: 'https://sites.google.com/a/umich.edu/the-rhetoric-of-memes/_/rsrc/1385145405448/home/good-guy-greg/Gums-Good-Guy-Greg.jpg',
        shippingAddress: '1234 Denver St., Denver, CO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The User',
        email: 'user@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.user,
        description: 'A nice worker',
        picture: 'https://pharr-away.com//wp-content/uploads/2013/08/Worker-Bee.jpg',
        shippingAddress: '1234 Denver St., Denver, CO',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}
