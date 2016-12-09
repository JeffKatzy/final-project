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
        <h4>Create an account</h4>

        <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
          <div className="col-md-6 col-md-push-3">
            <div className="form-group">
              <label htmlFor="createUsername" className="col-sm-2 control-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="createUsername" placeholder="Username" onChange={this.handleNameChange.bind(this)} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="createEmail" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="createEmail" placeholder="Email" onChange={this.handleEmailChange.bind(this)} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="createPassword" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="createPassword" placeholder="Password" onChange={this.handlePasswordChange.bind(this)} />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-success">Create account</button>
              </div>
            </div>
          </div>
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
