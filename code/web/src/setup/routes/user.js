// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'
import Edit from '../../modules/user/Edit'
import Closet from '../../modules/user/Closet'
import Crates from '../../modules/user/Crates'
// User routes

// !! - Can add a route here to a new survey page after subscribing

export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
  },

  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },

  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
  },

  edit: {
    path: '/user/edit',
    component: Edit,
    auth: true
  },

  closet: {
    path: '/user/closet',
    component: Closet,
    auth: true
  },

  crates: {
    path: '/user/crates',
    component: Crates,
    auth: true
  }
}
