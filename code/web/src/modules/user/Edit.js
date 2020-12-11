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
  handleSubmit = () =>{
    console.log('runs')
    // will do post request here 
    // this request should update local user as well
  }
  render(){
    return(
      <div>
        <form>
          <label>
            Description:
            <input type="text" name="name" value ={this.state.user.description}  />
          </label>
          <label>
            Image:
            <input type="text" name="name"value ={this.state.user.image} />
          </label>
          <label>
            Shipping Address:
            <input type="text" name="name"value ={this.state.user.shippingAdress} />
          </label>
          <label>
            Email Address:
            <input type="text" name="name"value ={this.state.user.email} />
          </label>
        </form>
        <button onClick = {this.handleSubmit}>Click me</button>
      </div>
    )
  }
  
}
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, null)(Edit)
