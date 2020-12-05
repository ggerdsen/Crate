// This is a migration file for creating a Users table
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      // The below code include all user data/columns/attributes
      id: {
        // ID cannot be blank. ID is a primary key and ID numbers are
        // automatically incremented
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        // the Sequelize object stores the data type
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      // will need to add profile image
      // will need to add description
      // will need to add shipping address 
    });
  },
  // functions up/down return a Promise
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}
