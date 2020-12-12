'use strict'

// crateProduct 
module.exports = function(sequelize, DataTypes) {
  let CrateProduct = sequelize.define('crateProducts', {
    productId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }
  })

  CrateProduct.associate = function(models) {
    CrateProduct.belongsToMany(models.Crate)
    CrateProduct.belongsToMany(models.Product)
  }

  return CrateProduct
}