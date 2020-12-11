import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react';

class Edit extends Component{
  constructor({props}){
    [profileState] = {props}
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
  onChange = (event) =>{
    this.setState({[event.target.name]:event.target.value})
  }
  render(){
    return(
      <div>
        <form>
          <label>
            Description:
            <input type="text" name="description" value ={this.state.user.description} onChange = {this.onChange} />
          </label>
          <label>
            Image:
            <input type="text" name="image"value ={this.state.user.image} onChange = {this.onChange}/>
          </label>
          <label>
            Shipping Address:
            <input type="text" name="shippingAdress"value ={this.state.user.shippingAdress} onChange = {this.onChange}/>
          </label>
          <label>
            Email Address:
            <input type="text" name="email"value ={this.state.user.email} onChange = {this.onChange}/>
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
