import React, { Component } from 'react'
import Signin from './signin'
import Signup from './signup'
import { Link, browserHistory } from 'react-router'


class Welcome extends Component {

  constructor(){
    super()

    this.handleSignin = this.handleSignin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  handleSignin(){
    browserHistory.push({object: "sign in form"}, "sign in form", "/signin")
  }

  handleSignup(){
    browserHistory.push({object: "sign up form"}, "sign up form", "/signup")
  }

  render(){
    return(
      <div>
        <ul>
          <li><Link to={'/signin'}>SignIn</Link></li>
          <li><Link to={'/signup'}>SignUp</Link></li>
        </ul>
      </div>
    )
  }

}

export default Welcome
