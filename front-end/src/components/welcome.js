import React, { Component } from 'react'
import Signin from './signin'
import Signup from './signup'
// import { Link } from 'react-router'


class Welcome extends Component {

  constructor(){
    super()

    this.handleSignin = this.handleSignin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  handleSignin(){
    window.history.pushState({object: "sign in form"}, "sign in form", "/signin")
  }

  handleSignup(){
    window.history.pushState({object: "sign up form"}, "sign up form", "/signup")
  }

  render(){
    return(
      <div>
        <button onClick={this.handleSignin}>Sign In</button>
        <button onClick={this.handleSignup}>Sign Up</button>
      </div>
    )
  }

}

export default Welcome
