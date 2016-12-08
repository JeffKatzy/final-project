import React, { Component } from 'react';
import { Link } from 'react-router'
import SongSearchBar from './songSearchBar'
import SongResults from './songResults'
import Playlist from './playlist'
import SharedPlaylists from './sharedPlaylists'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import inviteUser from '../actions/inviteUser'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {invite: ''}
  }

  handleInvite() {
    event.preventDefault()
    this.props.inviteUser(this.state.invite)
    document.getElementsByName("invite-email")[0].value = ""
    alert("Friend invited!")
  }

  getEmail(event) {
    this.setState({invite: event.target.value})
  }

  render(){
    return(
      <div>
        <p onClick={this.props.handleLogout}><Link to={'/'} className="button button-primary">SignOut</Link></p>
        <div><input type="text" name="invite-email" placeholder="invite a friend via email" onChange={this.getEmail.bind(this)} />
        <button className="button-primary" onClick={this.handleInvite.bind(this)}>Invite</button></div>
        <SongSearchBar />
        <SongResults />
        <Playlist />
        <SharedPlaylists />
      </div>)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ inviteUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(HomePage)
