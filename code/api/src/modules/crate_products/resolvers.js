// App Imports
import models from '../../setup/models'

// Get CrateProduct by ID
export async function get(parentValue, { id }) {
  return await models.CrateProduct.findOne({
    where: { id },
    include: [
      { model: models.Product, as: 'product' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Get CrateProduct by Crate
export async function get(parentValue, { id }) {
  return await models.CrateProduct.findOne({
    where: { crateId },
    include: [
      { model: models.Product, as: 'product' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}


// Get all CrateProducts
export async function getAll() {
  return await models.CrateProduct.findAll({
    include: [
      { model: models.Product, as: 'product' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Create CrateProduct
export async function create(parentValue, { crateId }, { productId }) {
    return await models.CrateProduct.create({
      crateId,
      productId
    })
}

// Delete CrateProduct
export async function remove(parentValue, { id }) {
    return await models.CrateProduct.destroy({where: {id, userId: auth.user.id}})
}