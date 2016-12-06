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
              <form onSubmit={this.handleSubmit.bind(this)}>
                <label> Email</label>
                <input type="text" id="email" className="u-full-width" placeholder="enter email" onChange={this.handleEmail.bind(this)}/>
                <label> Password</label>
                <input type="password" id="password" className="u-full-width" placeholder="enter password" onChange={this.handlePassword.bind(this)}/>
                <input type="submit" className="button-primary" />
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
