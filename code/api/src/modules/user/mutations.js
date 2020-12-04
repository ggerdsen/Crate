// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
    
    // Address information here
    
    // Personal description here
    
    // Initial photo
    // photo: {
    //   name: 'photo',
    //   type: ???
    // }
  },
  resolve: create
}

// Edit user data including photo
// export const userSignup = {
//   type: UserType,
//   args: {
//     name: {
//       name: 'name',
//       type: GraphQLString
//     },
//
//     email: {
//       name: 'email',
//       type: GraphQLString
//     },
//
//     password: {
//       name: 'password',
//       type: GraphQLString
//     }
//
//    Address information here
//
//    Personal description here
//
//     photo: {
//       name: 'photo',
//       type: ???
//     }
//   },
//   resolve: create
// }

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}