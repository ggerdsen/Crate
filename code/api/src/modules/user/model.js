// This file houses the user model with its attributes and associations
'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  // Defines User model
  let User = sequelize.define('users', {
    // Defines User attributes
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
    // will need to add profile image
    // will need to add description
    // will need to add shipping address
  })

// Defines User associations/relationships
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
