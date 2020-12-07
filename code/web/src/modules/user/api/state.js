// App Imports
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
}

// State - Any state changes taking place due to action types

// Any new action types added to the actions.js file will need a case here:
export default (state = userInitialState, action) => {
  switch (action.type) {
    //sets state to new user
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      }

    case LOGIN_REQUEST:
    // sets state isLoading value
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }

    case LOGIN_RESPONSE:
      // Sets state error message and isLoading values
      return {
        ...state,
        error: action.error,
        isLoading: false
      }

    case LOGOUT:
    // Resets user values in state upon logout
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }

    default:
      return state
  }
}
