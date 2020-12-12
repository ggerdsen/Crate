// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import CrateProductType from './types'
import { getAll, getByUser, get } from './resolvers'

// CrateProducts All
export const crateProducts = {
  type: new GraphQLList(CrateProductType),
  resolve: getAll
}

// CrateProducts by crate
export const crateProductsByCrate = {
  type: new GraphQLList(CrateProductType),
  resolve: getByCrate
}

// CrateProduct By id
export const crateProduct = {
  type: CrateProductType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}