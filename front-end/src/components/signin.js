import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getUsers from '../actions/getUsers'
import getUserPage from '../actions/getUserPage'

class Signin extends Component {

  constructor(props) {
    super(props)
      this.state = {email: '', password: ''}
      this.checkUser = this.checkUser.bind(this)
  }

  checkUser(){
    getUsers()
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.checkUser()
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
  return bindActionCreators({ Signin }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signin)
