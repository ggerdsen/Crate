import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react';
import { editUser } from './api/actions'
import { Helmet } from 'react-helmet'
import userRoutes from '../../setup/routes/user'
import { Link } from 'react-router-dom'

// UI Imports
import { Input, Textarea, Select } from '../../ui/input'
import Button from '../../ui/button'
import Icon from '../../ui/icon'
import H4 from '../../ui/typography/H4'
import { Grid, GridCell } from '../../ui/grid'
import { white } from "../../ui/common/colors"

// Component
class Edit extends Component{
  constructor(props){
    super()
    this.state = {
      ...props.user.details,
    }
  }
  handleSubmit = (event) =>{
    this.props.editUser(this.state)
  }
  onChange = (event) =>{
    this.setState({[event.target.name]:event.target.value})
  }
  render(){
    return(
      <div>
        {/* SEO */}
        <Helmet>
          <title>My Profile - Crate - Edit</title>
        </Helmet>

        {/* Page Content */}
        <div>
          <Grid alignCenter={true} style={{ padding: '1em' }}>
            <GridCell style={{ textAlign: 'left' }}>
              <Link to={userRoutes.profile.path}>
                <Button><Icon size={1.2}>arrow_back</Icon> Back</Button>
              </Link>
            </GridCell>
          </Grid>
        </div>

        {/* Profile title */}
        <Grid alignCenter={true} style={{ padding: '1em' }}>
          <GridCell>
            <H4 font="secondary" style={{ marginBottom: '1em', textAlign: 'center' }}>
              Edit Profile
            </H4>

            {/* Form */}
            <form>
              <div style={{ width: '25em', margin: '0 auto' }}>

              {/* Name */}
              <Input
                type="text"
                fullWidth={true}
                placeholder="Name"
                required="required"
                name="name"
                autoComplete="off"
                value={this.state.name || ''}
                onChange={this.onChange}
              />

              {/* Shipping Address */}
              <Input
                type="text"
                fullWidth={true}
                placeholder="Shipping Address"
                required="required"
                name="shippingAddress"
                autoComplete="off"
                value={this.state.shippingAddress || ''}
                onChange={this.onChange}
              />
              {/* Email Address */}
              <Input
                type="text"
                fullWidth={true}
                placeholder="Email"
                required="required"
                name="email"
                autoComplete="off"
                value={this.state.email || ''}
                onChange={this.onChange}
              />

              {/* Description */}
              <Textarea
                fullWidth={true}
                placeholder="Description"
                required="required"
                name="description"
                value={this.state.description || ''}
                onChange={this.onChange}
                style={{ marginTop: '1em' }}
              />

              {/* Image */}
              <Input
                type="text"
                fullWidth={true}
                placeholder="Picture"
                required="required"
                name="picture"
                autoComplete="off"
                value={this.state.picture || ''}
                onChange={this.onChange}
              />

              {/* Form submit */}
              <div style={{ marginTop: '2em', textAlign: 'center' }}>
                <Link to={userRoutes.profile.path} onClick={this.handleSubmit}>
                  <Button type="submit" theme="secondary" disabled={this.state.isLoading}>
                    <Icon size={1.2} style={{ color: white }}>check</Icon> Save
                  </Button>
                </Link>
              </div>
            </div>
          </form>
          </GridCell>
        </Grid>
      </div>
    )
  }

}
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, {editUser})(Edit)
