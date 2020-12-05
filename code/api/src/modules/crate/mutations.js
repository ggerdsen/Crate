// This file houses the endpoints that have write functionality

// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import CrateType from './types'
// Below are the endpoints being imported from the ./resolvers file
import { create, remove, update } from './resolvers'

// Crate create
export const crateCreate = {
  type: CrateType,
  args: {
    // Below are the required attributes for creating a Crate?
    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },

  // This will run the actual logic (located in the ./resolvers file) for creating a Crate
  resolve: create
}

// Crate update
// Defines the attributes that can be updated
export const crateUpdate = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}

// Crate remove
// Defines required data for deleting/removing a Crate
export const crateRemove = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
