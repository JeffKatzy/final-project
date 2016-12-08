import React, { Component } from 'react';
import createUser from '../actions/createUser'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {email: '', password: '', name: ''}
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleEmailChange(event){
    this.setState({email: event.target.value})
  }

  handleNameChange(event){
    this.setState({name: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.createUser(this.state)
  }

  render(){
    return(
      <div className="login">
      <div className="not-container">
      <div className="row">
      <div className="four columns offset-by-four">
        <h4>Sign Up</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>

          <label> Name</label>
          <input type="text" className="u-full-width" placeholder="enter name" onChange={this.handleNameChange.bind(this)}/>

          <label> Email</label>
          <input type="text" className="u-full-width" placeholder="enter email" onChange={this.handleEmailChange.bind(this)}/>

          <label> Password</label>
          <input type="password" className="u-full-width" placeholder="enter password" onChange={this.handlePasswordChange.bind(this)}/>

          <input type="submit" className="btn btn-success" />

        </form>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup)
