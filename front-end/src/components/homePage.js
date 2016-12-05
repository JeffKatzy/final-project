import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import SongSearchBar from './songSearchBar'
import SongResults from './songResults'

class HomePage extends Component {
  render(){
    return(
      <div>
        <p onClick={this.props.handleLogout}><Link to={'/'}>SignOut</Link></p>
        HEHE HOMEPAGE
        <SongSearchBar />
        <SongResults />
      </div>)
  }
}

function mapStateToProps(state){
  return {users: state.users}
}


export default connect(mapStateToProps)(HomePage)
