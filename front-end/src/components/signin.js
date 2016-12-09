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
        <div className="not-container">
          <div className="row">
            <div className="four columns offset-by-four">
              <h4>Sign In</h4>

              <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                  <label className="sr-only" for="signinEmail">Email address</label>
                  <input type="email" className="form-control" onChange={this.handleEmail.bind(this)} id="exampleInputEmail3" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label className="sr-only" for="signinPassword">Password</label>
                  <input type="password" className="form-control" onChange={this.handlePassword.bind(this)} id="signinPassword" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-success">Sign in</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signin)
