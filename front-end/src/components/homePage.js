import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import SongSearchBar from './songSearchBar'
import SongResults from './songResults'
import Playlist from './playlist'

class HomePage extends Component {
  render(){
    return(
      <div>
        <p onClick={this.props.handleLogout}><Link to={'/'} className="button button-primary">SignOut</Link></p>
        <SongSearchBar />
        <SongResults />
        <Playlist />
      </div>)
  }
}

function mapStateToProps(state){
  return {users: state.users}
}

export default connect(mapStateToProps)(HomePage)
