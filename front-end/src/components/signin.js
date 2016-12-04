import React, { Component } from 'react'
import getUser from '../actions/getUser'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {email: '', password: ''}
  }

  handlePassword(event) {
    this.setState({password: event.target.value})
  }

  handleEmail(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.getUser(this.state)
  }

  render(){
    return(
      <div className="login">
        <h4>Sign In</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> Email</label>
          <input type="text" placeholder="enter email" onChange={this.handleEmail.bind(this)}/>
          <label> Password</label>
          <input type="password" placeholder="enter password" onChange={this.handlePassword.bind(this)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signin)
