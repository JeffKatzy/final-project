import React, { Component } from 'react';
import createUser from '../actions/createUser'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {email: '', password: ''}
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleEmailChange(event){
    this.setState({email: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.createUser(this.state)
    createUser()
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> Email</label>
          <input type="text" placeholder="enter email" onChange={this.handleEmailChange.bind(this)}/>
          <label> Password</label>
          <input type="password" placeholder="enter password" onChange={this.handlePasswordChange.bind(this)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup)
