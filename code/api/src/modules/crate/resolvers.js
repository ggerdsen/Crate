// This file houses the logic for fetching the data for the different endpoints

// App Imports
import models from '../../setup/models'
import params from '../../config/params'

// Get crate by ID
export async function getById(parentValue, { crateId }) {
  // Similar to .find in AR, the code below finds the Crate with the matching
    // ID from the query
  const crate = await models.Crate.findOne({ where: { id: crateId } })
// Below is the logic for sad path
  if (!crate) {
    // Crate does not exists
    throw new Error('The crate you are looking for does not exists or has been discontinued.')
  } else {
    return crate
  }
}

// Get all crates
// Logic for fetching all Crates
export async function getAll(parentValue, { orderBy }) {
  // Fetches all the Crates and returns them in an Array
  return await models.Crate.findAll({ order: [['id', orderBy]] })
}

// Create crate
// Logic for creating a new Crate
export async function create(parentValue, { name, description }, { auth }) {
  // Crate can only be created if the logged in user is an Admin
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.create({
      name,
      description
    })
  } else {
    // Sad path for creating a Crate. Crate cannot be created if the logged in
      // user is a regular user role
    throw new Error('Operation denied.')
  }
}

// Update crate
// Logic for updating a crate in the db. Similar to creating in where the
  // logged in user must be an Admin
export async function update(parentValue, { id, name, description }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.update(
      {
        name,
        description
      },
      {where: {id}}
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete crate
// Logic for deleting a Crate from the database. Can only be done by Admin 
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.destroy({where: {id}})
  } else {
    throw new Error('Operation denied.')
  }
}
