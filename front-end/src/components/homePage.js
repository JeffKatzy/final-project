import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

class HomePage extends Component {
  render(){
    return(
      <div>
        HEHE HOMEPAGE
        <p onClick={this.props.handleLogout}><Link to={'/'}>SignOut</Link></p>
      </div>)
  }
}

function mapStateToProps(state){
  return {users: state.users}
}


export default connect(mapStateToProps)(HomePage)
