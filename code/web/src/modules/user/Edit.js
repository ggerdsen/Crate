import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react';

class Edit extends Component{
  constructor({props}){
    super()
    this.state = {
      profileState
    }
  }
  render(){
    return(
      <form>
      <label>
    Description:
    <input type="text" name="name" value ={this.state.user.description}  />
  </label>
  <label>
    Image:
    <input type="text" name="name" />
  </label>
  <label>
    Description:
    <input type="text" name="name" />
  </label>
  <label>
    Email Address:
    <input type="text" name="name" />
  </label>
      </form>
    )
  }
  
}
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { })(Edit)
