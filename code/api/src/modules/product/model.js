'use strict'
// need to create joins table for CrateProducts and add status of delivered? AND kept/returned?
// Product
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
  })
}