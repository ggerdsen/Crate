// This file defines the Crate model

'use strict'

module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    // name and description are the Crate attributes
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })
// Below are the defined model associations/relationships
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

// Will have to add a hasMany products relationship

  return Crate
}
