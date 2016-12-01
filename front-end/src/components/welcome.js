import React from 'react'
import SignIn from './signin'
import SignUp from './signup'
// import { Link } from 'react-router'


class Welcome extends React.Component {

  constructor(){
    super()

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.state = {showSignIn: false}
  }

  handleSignIn(){
    console.log("YES")
    window.history.pushState({object: "sign in form"}, "sign in form", "/sessions/new")
  }

  handleSignUp(){
    console.log("NO")
    return (<SignUp />)
  }

  render(){
    return(
      <div>
        <button onClick={this.handleSignIn}>Sign In</button>
        <button onClick={this.handleSignUp}>Sign Up</button>
      </div>
    )
  }

}

export default Welcome
