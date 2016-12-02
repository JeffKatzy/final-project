import React, { Component } from 'react';
import createUser from '../actions/createUser';
import { connect } from 'react-redux';
import Welcome from './welcome';

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {email: '', password: '', newSignUp: false}
  }

  handleOnEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handleOnPasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createUser(this.state)
  }

  // handleSignup() {
  //   this.setState({newSignup: true})
  //   welcome.
  // }

  render(){
     return(
       <div>
         <form onSubmit={this.handleSubmit.bind(this)}>
             <h2> Signup </h2>
             <p>
             <label> Email </label>
             <input type="text" placeholder="email@email.com" onChange={this.handleOnEmailChange.bind(this)}/>
             </p>
             <p>
             <label> Password </label>
             <input type="password" placeholder="your password" onChange={this.handleOnPasswordChange.bind(this)} />
             </p>
             <p> <input type="submit" /> </p>
         </form>
       </div>
     )
   }
 }

export default connect(null, { createUser })(Signup)
