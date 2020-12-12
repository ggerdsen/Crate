'use strict'

// Delivery
module.exports = function(sequelize, DataTypes) {
  let Delivery = sequelize.define('deliveries', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateProductId: {
      type: DataTypes.INTEGER
    }
  })

  Delivery.associate = function(models) {
    Delivery.belongsToMany(models.User)
    Delivery.belongsToMany(models.CrateProduct)
  }

  return Delivery
}