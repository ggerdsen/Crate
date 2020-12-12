// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import { grey, grey2, black, primary } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Component
const Profile = (props) => (
  <div>
    {/* SEO */}

    {/* !! - Browser tab title */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center', flexWrap: 'wrap', display: 'flex', justifyContent: 'center' }}>
        <H3 font="secondary">My profile</H3>
        {/*!! - Can add "edit" button on far right so user can update email and shipping address*/}
        <Link to={userRoutes.subscriptions.path}>
          <Icon size={2} style={{ color: black, paddingLeft: '.5em' }}>mode_edit</Icon>
        </Link>
      </GridCell>

    </Grid>

    {/* !! - User details */}
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        {/* !! - Can add icon to the left of these details */}
        <img style={{ color: primary, borderRadius: '100%', padding: '5px', marginBottom: '0.5em', border: '2px solid', height: '25vh' }}src={'https://cdns.iconmonstr.com/wp-content/assets/preview/2019/240/iconmonstr-customer-5.png'} alt={'user profile image'}/>

        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>

        {/* !! - Can add personal description here */}
        <p style={{ color: grey2, marginBottom: '2em'}}>
          {props.user.details.description ? props.user.details.description : 'Soon-To-Be Trendsetter'}</p>

        {/* !! - Link to user order history (will need to add path and bring it in later) */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">My Crates</Button>
        </Link>

        {/* !! - Link to user subscriptions */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary" style={{ marginLeft: '1em' }}>Subscriptions</Button>
        </Link>
        <Link to={userRoutes.edit.path}>
          <Button theme="primary">Edit Profile</Button>
        </Link>

        {/* !! - Link to user logout */}
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
        {/* !! - Can add pending orders and order history here */}
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
