// This file houses endpoints for read functionality

// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import CrateType from './types'
// Below are the two resolvers/methods
import { getAll, getById } from './resolvers'

// Crates All
// Lists all the Crates in the database
export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    // List can be ordered by desired attribute execpt id
    orderBy: { type: GraphQLString }
  },
  // This will run the actual logic (located in the ./resolvers file) for fetching all Crates
  resolve: getAll
}

// Crate By ID
// Returns single Crate that matches the ID provided in query
export const crateById = {
  type: CrateType,
  args: {
    // The provided argument must be the Crate ID in form of an Integer
    crateId: { type: GraphQLInt }
  },
  resolve: getById
}
