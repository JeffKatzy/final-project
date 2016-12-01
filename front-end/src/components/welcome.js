import React from 'react'
import SignIn from './signin'
import SignUp from './signup'


class Welcome extends React.Component {

  constructor(){
    super()

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleSignIn(){
    console.log("YES")
    return(<SignIn />)
  }

  handleSignUp(){
    console.log("NO")

    render(){
      return(<SignUp />)
    }
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
