import React, { Component } from 'react';
import { Link } from 'react-router'
import SongSearchBar from './songSearchBar'
import SongResults from './songResults'
import Playlist from './playlist'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import inviteUser from '../actions/inviteUser'

class HomePage extends Component {

  constructor(props){
    super(props)
    this.handleInvite = this.handleInvite.bind(this)
  }

  handleInvite(event) {
    this.props.inviteUser(event)
  }

  render(){
    return(
      <div>
        <p onClick={this.props.handleLogout}><Link to={'/'} className="button button-primary">SignOut</Link></p>
        <div><input type="text" name="invite-email" placeholder="invite a friend via email" /><button className="button-primary" onClick={this.handleInvite}>Invite</button></div>
        <SongSearchBar />
        <SongResults />
        <Playlist />
      </div>)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ inviteUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(HomePage)
