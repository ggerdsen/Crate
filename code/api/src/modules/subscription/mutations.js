// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { create, remove } from './resolvers'

// Subscription edit

// Subscription show

// Subscription create
export const subscriptionCreate = {
  type: SubscriptionType,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Subscription remove
export const subscriptionRemove = {
  type: SubscriptionType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}