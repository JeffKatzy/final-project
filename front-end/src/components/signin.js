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
            <h4>Sign In</h4>

            <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
              <div className="col-md-6 col-md-push-3">

                <div className="form-group">
                  <label htmlFor="loginEmail" className="col-sm-2 control-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" onChange={this.handleEmail.bind(this)} id="loginEmail" placeholder="Email" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="loginPassword" className="col-sm-2 control-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" onChange={this.handlePassword.bind(this)} id="loginPassword" placeholder="Password" />
                  </div>
                </div>

                <button type="submit" className="btn btn-success">Sign in</button>

              </div>
            </form>

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
