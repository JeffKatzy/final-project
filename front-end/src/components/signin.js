import React, { Component } from 'react'

class Signin extends Component {

  constructor(props){
    super(props)
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleEmailChange(event){
    this.setState({email: event.target.value})
  }

  handleSubmit(event){

    event.preventDefault()
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> Email</label>
          <input type="text" placeholder="enter email" />
          <label> Password</label>
          <input type="password" placeholder="enter password" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Signin
