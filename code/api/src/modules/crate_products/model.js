'use strict'

// Crate Products
module.exports = function(sequelize, DataTypes) {
  let CrateProduct = sequelize.define('crateProducts', {
    userId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }
  })

  CrateProduct.associate = function(models) {
    CrateProduct.belongsTo(models.Crate)
    CrateProduct.belongsTo(models.Product)
  }

  return CrateProduct
}