import React from 'react'
import { connect } from 'react-redux'
import { Component } from 'react';
import { editUser } from './api/actions'

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
        <form>
          <label>
            Description:
            <input type="text" name="description" value ={this.state.description} onChange = {this.onChange} />
          </label>
          <label>
            Image:
            <input type="text" name="picture"value ={this.state.picture} onChange = {this.onChange}/>
          </label>
          <label>
            Shipping Address:
            <input type="text" name="shippingAddress"value ={this.state.shippingAddress} onChange = {this.onChange}/>
          </label>
          <label>
            Email Address:
            <input type="text" name="email"value ={this.state.email} onChange = {this.onChange}/>
          </label>
        </form>
        <button onClick = {this.handleSubmit}>Submit Edit</button>
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
