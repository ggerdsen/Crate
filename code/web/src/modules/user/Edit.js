import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react';

class Edit extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <form>
      
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
