import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        HEHE HOMEPAGE
        <p onClick={this.props.handleLogout}><Link to={'/'}>SignOut</Link></p>
      </div>)
  }
}

function mapStateToProps(state){
  return {users: state.users, loggedIn: state.loggedIn, showWelcome: state.showWelcome }
}


export default connect(mapStateToProps)(HomePage)
