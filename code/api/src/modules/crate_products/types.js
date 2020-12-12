// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { ProductType } from '../product/types'
import CrateType from '../crate/types'

// CrateProduct type
const CrateProductType = new GraphQLObjectType({
  name: 'crate_product',
  description: 'Crate Product Type',

  fields: () => ({
    id: { type: GraphQLInt },
    crateId: { type: GraphQLInt },
    productId: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default CrateProductType